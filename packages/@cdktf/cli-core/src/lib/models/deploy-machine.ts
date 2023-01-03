import * as os from "os";
import * as path from "path";
import * as fs from "fs";
import { createMachine, send, interpret, EventObject, assign } from "xstate";
import * as pty from "node-pty-prebuilt-multiarch";
import { Errors, logger } from "@cdktf/commons";

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

type DeployEvent =
  | { type: "START"; pty: PtySpawnConfig }
  | { type: "STOP" }
  | { type: "SEND_INPUT"; input: string }
  | { type: "LINE_RECEIVED"; line: string } //TODO: rename to output received as not really a line in practice
  | { type: "APPROVED_EXTERNALLY" } // e.g. via TFC UI or API
  | { type: "REJECTED_EXTERNALLY" }
  | { type: "REQUEST_APPROVAL" }
  | { type: "VARIABLE_MISSING"; variableName: string }
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
      value: "exited";
      context: DeployContext & { exitCode: number };
    }
  | {
      value: "stopped";
      context: DeployContext;
    };

export function extractVariableNameFromPrompt(line: string) {
  const lines = line.split("\n");
  const lineWithVar = lines.find((line) => line.includes("var."));
  if (!lineWithVar) {
    throw Errors.Internal(
      `Could not find variable name in prompt: ${line}. This is most likely a bug in cdktf. Please report it at https://cdk.tf/bug`
    );
  }
  return lineWithVar.split("var.")[1].trim();
}

export const deployMachine = createMachine<
  DeployContext,
  DeployEvent,
  DeployState
>({
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
        src: (_context, event) => (send, onReceive) => {
          if (event.type !== "START")
            throw Errors.Internal(
              `Terraform CLI invocation state machine: Unexpected event caused transition to the running state: ${event.type}`
            );
          const { args, options } = event.pty;
          const file =
            os.platform() === "win32"
              ? findExecutable(event.pty.file, options.cwd, options)
              : event.pty.file;
          logger.trace(
            `Spawning pty with file=${file}, args=${
              Array.isArray(args) ? `[${args.join(", ")}]` : `"${args}"`
            }, options=${JSON.stringify(options)}`
          );
          const p = pty.spawn(file, args, options);

          onReceive((event: DeployEvent) => {
            if (event.type === "SEND_INPUT") {
              p.write(event.input);
            }
          });

          p.onData((line) => {
            let hideLine = false;

            // possible events based on line
            if (line.includes("approved using the UI or API")) {
              send({ type: "APPROVED_EXTERNALLY" });
            } else if (line.includes("discarded using the UI or API")) {
              send({ type: "REJECTED_EXTERNALLY" });
            } else if (
              line.includes("Do you want to perform these actions") ||
              line.includes("Do you really want to destroy all resources?")
            ) {
              send({ type: "REQUEST_APPROVAL" });
            } else if (
              line.includes("var.") &&
              line.includes("Enter a value:")
            ) {
              hideLine = true;

              const variableName = extractVariableNameFromPrompt(line);
              send({
                type: "LINE_RECEIVED",
                line: `Missing variable: '${variableName}'. You can provide it using the 'TF_VAR_${variableName}' environment variable.`,
              });
              send({ type: "VARIABLE_MISSING", variableName });
            }

            if (!hideLine) {
              send({
                type: "LINE_RECEIVED",
                line,
              });
            }
          });
          p.onExit(({ exitCode }) => {
            send({ type: "EXITED", exitCode });
          });

          return () => {
            logger.trace("Terracorm CLI state machine: cleaning up pty");
            p.write("\x03"); // CTRL + C, pty.kill() does not work on windows
            // TODO: is there a way to delay this? maybe go into a "killing" state first?
          };
        },
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
                { type: "SEND_INPUT", input: "yes\n" },
                { to: "pty" }
              ),
            },
            REJECT: {
              target: "processing",
              actions: [
                send({ type: "SEND_INPUT", input: "no\n" }, { to: "pty" }),
                assign<DeployContext, DeployEvent & { type: "REJECT" }>({
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
});

export function createAndStartDeployService(options: {
  refreshOnly?: boolean;
  parallelism: number;
  extraOptions: string[];
  terraformBinaryName: string;
  autoApprove?: boolean;
  workdir: string;
}) {
  const service = interpret(deployMachine);

  const config: PtySpawnConfig = {
    file: options.terraformBinaryName,
    args: [
      "apply",
      ...(options.autoApprove ? ["-auto-approve"] : []),
      // "-input=false", we can't use this anymore but TODO: we need to detect TF CLI asking for missing inputs and either allow passing them or stop there and fail

      ...options.extraOptions,
      ...(options.refreshOnly ? ["-refresh-only"] : []),
      ...(options.parallelism > -1
        ? [`-parallelism=${options.parallelism}`]
        : []),
    ],
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
  workdir: string;
}) {
  const service = interpret(deployMachine);

  const config: PtySpawnConfig = {
    file: options.terraformBinaryName,
    args: [
      "destroy",
      ...(options.autoApprove ? ["-auto-approve"] : []),
      // "-input=false", we can't use this anymore but TODO: we need to detect TF CLI asking for missing inputs and either allow passing them or stop there and fail

      ...options.extraOptions,
      ...(options.parallelism > -1
        ? [`-parallelism=${options.parallelism}`]
        : []),
    ],
    options: {
      cwd: options.workdir,
      env: process.env as { [key: string]: string }, // TODO: make this explicit and move to caller or whatever
    },
  };

  service.send({ type: "START", pty: config });

  return service;
}

// src: https://github.com/Microsoft/vscode/blob/c0c9ea27d6e8d660d8716d7acee82cf3c00fa3e5/src/vs/workbench/parts/tasks/electron-browser/terminalTaskSystem.ts#L691
// TODO: properly annotate source of this function
function findExecutable(
  command: string,
  cwd: string,
  options: { env?: { [key: string]: string } }
): string {
  // If we have an absolute path then we take it.
  if (path.isAbsolute(command)) {
    return command;
  }
  const dir = path.dirname(command);
  if (dir !== ".") {
    // We have a directory and the directory is relative (see above). Make the path absolute
    // to the current working directory.
    return path.join(cwd, command);
  }
  let paths: string[] | undefined = undefined;
  // The options can override the PATH. So consider that PATH if present.
  if (options && options.env) {
    // Path can be named in many different ways and for the execution it doesn't matter
    for (const key of Object.keys(options.env)) {
      if (key.toLowerCase() === "path") {
        if (typeof options.env[key] === "string") {
          paths = options.env[key].split(path.delimiter);
        }
        break;
      }
    }
  }
  if (paths === void 0 && typeof process.env.PATH === "string") {
    paths = process.env.PATH.split(path.delimiter);
  }
  // No PATH environment. Make path absolute to the cwd.
  if (paths === void 0 || paths.length === 0) {
    return path.join(cwd, command);
  }
  // We have a simple file name. We get the path variable from the env
  // and try to find the executable on the path.
  for (const pathEntry of paths) {
    // The path entry is absolute.
    let fullPath: string;
    if (path.isAbsolute(pathEntry)) {
      fullPath = path.join(pathEntry, command);
    } else {
      fullPath = path.join(cwd, pathEntry, command);
    }
    if (fs.existsSync(fullPath)) {
      return fullPath;
    }
    let withExtension = fullPath + ".com";
    if (fs.existsSync(withExtension)) {
      return withExtension;
    }
    withExtension = fullPath + ".exe";
    if (fs.existsSync(withExtension)) {
      return withExtension;
    }
  }
  return path.join(cwd, command);
}
