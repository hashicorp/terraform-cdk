/**
 * Copyright (c) HashiCorp, Inc.
 * SPDX-License-Identifier: MPL-2.0
 */

import {
  createMachine,
  send,
  interpret,
  EventObject,
  assign,
  Sender,
  Receiver,
} from "xstate";
import * as pty from "@cdktf/node-pty-prebuilt-multiarch";
import { Errors, logger } from "@cdktf/commons";
import { missingVariable } from "../errors";
import stripAnsi from "strip-ansi";
import { EOL } from "os";
import { spawnPty } from "./pty-process";

interface PtySpawnConfig {
  file: Parameters<typeof pty.spawn>[0];
  args: Parameters<typeof pty.spawn>[1];
  options: Parameters<typeof pty.spawn>[2] & { cwd: string };
}

interface DeployContext {
  exitCode?: number;
  /**
   * Terraform will exit with 1 if it was cancelled, but we don't want to fail in that case
   */
  cancelled?: boolean;
}

export type DeployEvent =
  | { type: "START"; pty: PtySpawnConfig }
  | { type: "STOP" }
  | { type: "SEND_LINE"; input: string }
  | { type: "OUTPUT_RECEIVED"; output: string }
  | { type: "APPROVED_EXTERNALLY" } // e.g. via TFC UI or API
  | { type: "REJECTED_EXTERNALLY" }
  | { type: "OVERRIDDEN_EXTERNALLY" }
  | { type: "OVERRIDE_REJECTED_EXTERNALLY" }
  | { type: "OVERRIDE" }
  | { type: "REJECT_OVERRIDE" }
  | { type: "REQUEST_APPROVAL" }
  | { type: "VARIABLE_MISSING"; variableName: string }
  | { type: "REQUEST_SENTINEL_OVERRIDE" }
  | { type: "APPROVE" }
  | { type: "REJECT" }
  | { type: "EXITED"; exitCode: number };

export function isDeployEvent<DeployEventType extends DeployEvent["type"]>(
  event: EventObject,
  type: DeployEventType
): event is DeployEvent & { type: DeployEventType } {
  return event.type === type;
}

export type DeployState =
  | {
      value: "idle";
      context: DeployContext;
    }
  | {
      value: "running";
      context: DeployContext;
    }
  | {
      value: { running: "processing" };
      context: DeployContext;
    }
  | {
      value: { running: "awaiting_approval" };
      context: DeployContext;
    }
  | {
      value: { running: "awaiting_sentinel_override" };
      context: DeployContext;
    }
  | {
      value: "exited";
      context: DeployContext & { exitCode: number };
    }
  | {
      value: "stopped";
      context: DeployContext;
    };

export function extractVariableNameFromPrompt(line: string) {
  const noColorLine = stripAnsi(line);
  const lines = noColorLine.split("\n");
  const lineWithVar = lines.find((line) => line.includes("var."));
  if (!lineWithVar) {
    throw Errors.Internal(
      `Could not find variable name in prompt: ${line}. This is most likely a bug in cdktf. Please report it at https://cdk.tf/bug`
    );
  }
  return lineWithVar.split("var.")[1].trim();
}

interface BufferedReceiverFunction {
  (output: string): void;
  /**
   * used to get the last buffer when the PTY exits to log a debug message if there's output left in there
   * (might help debugging on Windows if EOL from Nodejs doesn't work in WSL)
   */
  getBuffer: () => string;
}

// used to only send completed lines (= with a newline at the end of them) to our logic (#2827)
export function bufferUnterminatedLines(
  handler: (output: string) => void
): BufferedReceiverFunction {
  let buffer = "";
  function bufferedReceiverFunction(output: string) {
    buffer += output;
    const lines = buffer.split(EOL);

    // if the string ends with \n this will be an empty string
    // else it will contain an "unfinished" line
    // the fallback to an empty string is to make TS happy and should never happen
    buffer = lines.pop() || "";

    if (lines.length > 0) handler(lines.join(EOL) + "\n");
  }
  bufferedReceiverFunction.getBuffer = () => buffer;

  return bufferedReceiverFunction;
}

export function handleLineReceived(send: (event: DeployEvent) => void) {
  return (output: string) => {
    let hideOutput = false;
    const noColorLine = stripAnsi(output);

    // possible events based on line
    if (noColorLine.includes("approved using the UI or API")) {
      send({ type: "APPROVED_EXTERNALLY" });
    } else if (noColorLine.includes("discarded using the UI or API")) {
      send({ type: "REJECTED_EXTERNALLY" });
    } else if (
      noColorLine.includes("Do you want to perform these actions") ||
      noColorLine.includes("Do you really want to destroy all resources?") ||
      noColorLine.includes(
        "Do you really want to destroy all resources in workspace"
      )
    ) {
      hideOutput = true;
      send({ type: "OUTPUT_RECEIVED", output });
      send({ type: "REQUEST_APPROVAL" });
    } else if (
      noColorLine.includes("var.") &&
      noColorLine.includes("Enter a value:")
    ) {
      hideOutput = true;

      const variableName = extractVariableNameFromPrompt(output);
      send({
        type: "OUTPUT_RECEIVED",
        output: missingVariable(variableName),
      });
      send({ type: "VARIABLE_MISSING", variableName });
    } else if (
      noColorLine.includes(
        "Do you want to override the soft failed policy check?"
      )
    ) {
      hideOutput = true;
      send({ type: "OUTPUT_RECEIVED", output });

      send({ type: "REQUEST_SENTINEL_OVERRIDE" });
    } else if (noColorLine.includes("overridden using the UI or API")) {
      send({ type: "OVERRIDDEN_EXTERNALLY" });
    }

    if (!hideOutput) {
      send({
        type: "OUTPUT_RECEIVED",
        output,
      });
    }
  };
}

export const deployMachine = createMachine<
  DeployContext,
  DeployEvent,
  DeployState
>(
  {
    predictableActionArguments: true,
    context: {},
    initial: "idle",
    id: "root",
    states: {
      idle: {
        on: {
          START: { target: "running" },
        },
      },
      running: {
        invoke: {
          id: "pty",
          src: "runTerraformInPty",
        },
        on: {
          EXITED: "exited",
          STOP: "stopped",
        },
        initial: "processing",
        states: {
          // TODO: what else might TF CLI be asking? Can we detect any question from the TF CLI to show a good error?
          processing: {
            on: {
              REQUEST_APPROVAL: "awaiting_approval",
              REQUEST_SENTINEL_OVERRIDE: "awaiting_sentinel_override",
              VARIABLE_MISSING: {
                actions: send({ type: "EXITED", exitCode: 1 }),
              },
            },
          },
          awaiting_approval: {
            on: {
              APPROVED_EXTERNALLY: "processing",
              REJECTED_EXTERNALLY: {
                target: "#root.exited",
                actions: assign<
                  DeployContext,
                  DeployEvent & { type: "REJECTED_EXTERNALLY" }
                >({ cancelled: true }),
              },
              APPROVE: {
                target: "processing",
                actions: send(
                  { type: "SEND_LINE", input: "yes" },
                  { to: "pty" }
                ),
              },
              REJECT: {
                target: "processing",
                actions: [
                  send({ type: "SEND_LINE", input: "no" }, { to: "pty" }),
                  assign<DeployContext, DeployEvent & { type: "REJECT" }>({
                    cancelled: true,
                  }),
                ],
              },
            },
          },
          awaiting_sentinel_override: {
            on: {
              OVERRIDDEN_EXTERNALLY: "processing",
              OVERRIDE_REJECTED_EXTERNALLY: {
                target: "#root.exited",
                actions: assign<
                  DeployContext,
                  DeployEvent & { type: "OVERRIDE_REJECTED_EXTERNALLY" }
                >({ cancelled: true }),
              },
              // This is a bit of a hack, because the external discard message
              // posted by Terraform UI is the same as during apply. So, we capture that
              // and emit our own event to make it more specific.
              REJECTED_EXTERNALLY: {
                actions: send({ type: "OVERRIDE_REJECTED_EXTERNALLY" }),
              },
              OVERRIDE: {
                target: "processing",
                actions: send(
                  { type: "SEND_LINE", input: "override" },
                  { to: "pty" }
                ),
              },
              REJECT_OVERRIDE: {
                target: "processing",
                actions: [
                  send({ type: "SEND_LINE", input: "no" }, { to: "pty" }),
                  assign<
                    DeployContext,
                    DeployEvent & { type: "REJECT_OVERRIDE" }
                  >({
                    cancelled: true,
                  }),
                ],
              },
            },
          },
        },
      },
      exited: { type: "final" },
      stopped: { type: "final" },
    },
  },
  {
    services: {
      runTerraformInPty: (context, event) =>
        terraformPtyService(context, event, spawnPty),
    },
  }
);

export function terraformPtyService(
  _context: DeployContext,
  event: DeployEvent,
  spawn = spawnPty
): (send: Sender<DeployEvent>, onReceive: Receiver<DeployEvent>) => void {
  return (send: Sender<DeployEvent>, onReceive: Receiver<DeployEvent>) => {
    if (event.type !== "START") {
      throw Errors.Internal(
        `Terraform CLI invocation state machine: Unexpected event caused transition to the running state: ${event.type}`
      );
    }

    // Communication from the pty to the caller
    const receiver = bufferUnterminatedLines(handleLineReceived(send));
    const { exitCode, actions } = spawn(event.pty, (data) => {
      receiver(data);
    });

    // Communication from the caller to the pty
    onReceive((event: DeployEvent) => {
      if (event.type === "SEND_LINE") {
        actions.writeLine(event.input);
      }
    });

    exitCode.then((exitCode) => {
      const lastBuffer = receiver.getBuffer();
      if (lastBuffer.length > 0) {
        logger.debug(
          `Terraform CLI exited but the last outputted line was not terminated with a newline and hence is still in the buffer and wasn't printed: "${lastBuffer}"`
        );
      }

      send({ type: "EXITED", exitCode });
    });

    return () => {
      logger.trace("Terraform CLI state machine: cleaning up pty");
      actions.stop();
    };
  };
}

export function createAndStartDeployService(options: {
  refreshOnly?: boolean;
  parallelism: number;
  extraOptions: string[];
  terraformBinaryName: string;
  autoApprove?: boolean;
  noColor?: boolean;
  workdir: string;
  vars?: string[];
  varFiles?: string[];
}) {
  const service = interpret(deployMachine);
  const args = [
    "apply",
    ...(options.autoApprove ? ["-auto-approve"] : []),
    // "-input=false", we can't use this anymore but TODO: we need to detect TF CLI asking for missing inputs and either allow passing them or stop there and fail

    ...options.extraOptions,
    ...(options.refreshOnly ? ["-refresh-only"] : []),
    ...(options.noColor ? ["-no-color"] : []),
    ...(options.parallelism > -1
      ? [`-parallelism=${options.parallelism}`]
      : []),
  ];

  options.vars?.forEach((v) => {
    args.push(`-var=${v}`);
  });

  options.varFiles?.forEach((v) => {
    args.push(`-var-file=${v}`);
  });

  logger.debug(
    `Executing ${options.terraformBinaryName} ${args.join(" ")} in ${
      options.workdir
    }`
  );

  const config: PtySpawnConfig = {
    file: options.terraformBinaryName,
    args,
    options: {
      cwd: options.workdir,
      env: process.env as { [key: string]: string }, // TODO: make this explicit and move to caller or whatever
    },
  };

  service.send({ type: "START", pty: config });

  return service;
}

export function createAndStartDestroyService(options: {
  parallelism: number;
  extraOptions: string[];
  terraformBinaryName: string;
  autoApprove?: boolean;
  noColor?: boolean;
  workdir: string;
  vars?: string[];
  varFiles?: string[];
}) {
  const service = interpret(deployMachine);

  const args = [
    "destroy",
    ...(options.autoApprove ? ["-auto-approve"] : []),
    // "-input=false", we can't use this anymore but TODO: we need to detect TF CLI asking for missing inputs and either allow passing them or stop there and fail

    ...options.extraOptions,
    ...(options.noColor ? ["-no-color"] : []),
    ...(options.parallelism > -1
      ? [`-parallelism=${options.parallelism}`]
      : []),
  ];

  options.vars?.forEach((v) => {
    args.push(`-var=${v}`);
  });

  options.varFiles?.forEach((v) => {
    args.push(`-var-file=${v}`);
  });

  logger.debug(
    `Executing ${options.terraformBinaryName} ${args.join(" ")} in ${
      options.workdir
    }`
  );

  const config: PtySpawnConfig = {
    file: options.terraformBinaryName,
    args,
    options: {
      cwd: options.workdir,
      env: process.env as { [key: string]: string }, // TODO: make this explicit and move to caller or whatever
    },
  };

  service.send({ type: "START", pty: config });

  return service;
}
