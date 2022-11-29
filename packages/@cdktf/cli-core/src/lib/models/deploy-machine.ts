import { createMachine, send, interpret, EventObject } from "xstate";
import * as pty from "node-pty";
import { Errors } from "@cdktf/commons";

interface PtySpawnConfig {
  file: Parameters<typeof pty.spawn>[0];
  args: Parameters<typeof pty.spawn>[1];
  options: Parameters<typeof pty.spawn>[2];
}

interface DeployContext {
  exitCode?: number;
  // pty?: PtySpawnConfig;
}

type DeployEvent =
  | { type: "START"; pty: PtySpawnConfig }
  | { type: "STOP" }
  | { type: "SEND_INPUT"; input: string }
  | { type: "LINE_RECEIVED"; line: string } //TODO: output received, not really a line in practice
  | { type: "APPROVED" }
  | { type: "REJECTED" }
  | { type: "EXITED"; exitCode: number };

export function isDeployEvent<DeployEventType extends DeployEvent["type"]>(
  event: EventObject,
  type: DeployEventType
): event is DeployEvent & { type: DeployEventType } {
  return event.type === type;
}

type DeployState =
  | {
      value: "idle";
      context: DeployContext;
    }
  | {
      value: "running";
      context: DeployContext & { pty: PtySpawnConfig };
    }
  | {
      value: { running: "default" };
      context: DeployContext & { pty: PtySpawnConfig };
    }
  | {
      value: { running: "awaiting_approval" };
      context: DeployContext & { pty: PtySpawnConfig };
    }
  | {
      value: "exited";
      context: DeployContext & { exitCode: number };
    }
  | {
      value: "stopped";
      context: DeployContext;
    };

export const deployMachine = createMachine<
  DeployContext,
  DeployEvent,
  DeployState
>({
  context: {},
  initial: "idle",
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
              "Unexpected event invoking the running state."
            );
          const { file, args, options } = event.pty;
          const p = pty.spawn(file, args, options);

          onReceive((event: DeployEvent) => {
            if (event.type === "SEND_INPUT") {
              p.write(event.input);
            }
          });

          p.onData((line) => {
            send({ type: "LINE_RECEIVED", line });
          });
          p.onExit(({ exitCode }) => {
            send({ type: "EXITED", exitCode });
          });

          return () => {
            console.log("CLEANUP PTY");
            p.write("\x03"); // CTRL + C, pty.kill() does not work on windows
            // TODO: is there a way to delay this? maybe go into a "killing" state first?
          };
        },
      },
      on: {
        EXITED: "exited",
        STOP: "stopped",
      },
      initial: "default",
      states: {
        // TODO: what else might TF CLI be asking? Can we detect any question from the TF CLI?
        default: {
          on: {
            LINE_RECEIVED: {
              target: "awaiting_approval",
              cond: (_, event) =>
                event.line.includes(
                  "Do you want to perform these actions in workspace"
                ),
            },
          },
        },
        awaiting_approval: {
          on: {
            LINE_RECEIVED: {
              target: "default",
              cond: (_, event) =>
                event.line.includes("approved using the UI or API"), // TODO: confirm this works
            },
            APPROVED: {
              target: "default",
              actions: send({ type: "SEND_INPUT", input: "yes\n" }, { to: "pty" }),
            },
            REJECTED: {
              target: "default",
              actions: send({ type: "SEND_INPUT", input: "no\n" }, { to: "pty" }),
            },
          },
        },
      },
    },
    exited: { type: "final" }, // TODO: how to best store exitcode in context?
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
