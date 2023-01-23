import * as os from "os";
import * as path from "path";
import * as fs from "fs";
import { createMachine, send, interpret, EventObject, assign } from "xstate";
import * as pty from "@cdktf/node-pty-prebuilt-multiarch";
import { Errors, logger } from "@cdktf/commons";
import stripAnsi from "strip-ansi";

interface PtySpawnConfig {
  file: Parameters<typeof pty.spawn>[0];
  args: Parameters<typeof pty.spawn>[1];
  options: Parameters<typeof pty.spawn>[2] & { cwd: string };
}

interface InitContext {
  exitCode?: number;
  /**
   * Terraform will exit with 1 if it was cancelled, but we don't want to fail in that case
   */
  cancelled?: boolean;
}

type InitEvent =
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

export function isInitEvent<InitEventType extends InitEvent["type"]>(
  event: EventObject,
  type: InitEventType
): event is InitEvent & { type: InitEventType } {
  return event.type === type;
}

export type InitState =
  | {
      value: "idle";
      context: InitContext;
    }
  | {
      value: "running";
      context: InitContext;
    }
  | {
      value: { running: "processing" };
      context: InitContext;
    }
  | {
      value: { running: "awaiting_state_move_approval" };
      context: InitContext;
    }
  | {
      value: "exited";
      context: InitContext & { exitCode: number };
    }
  | {
      value: "stopped";
      context: InitContext;
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

export function handleLineReceived(send: (event: InitEvent) => void) {
  return (line: string) => {
    const noColorLine = stripAnsi(line);

    send({
      type: "LINE_RECEIVED",
      line,
    });

    // possible events based on line
    if (noColorLine.includes("Do you wish to proceed?")) {
      send({ type: "REQUEST_APPROVAL" });
    }
  };
}

export const initMachine = createMachine<InitContext, InitEvent, InitState>({
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

          onReceive((event: InitEvent) => {
            if (event.type === "SEND_INPUT") {
              p.write(event.input);
            }
          });

          p.onData(handleLineReceived(send));
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
            REQUEST_APPROVAL: "awaiting_state_move_approval",
            VARIABLE_MISSING: {
              actions: send({ type: "EXITED", exitCode: 1 }),
            },
          },
        },
        awaiting_state_move_approval: {
          on: {
            APPROVE: {
              target: "processing",
              actions: send(
                { type: "SEND_INPUT", input: "yes\r\n" },
                { to: "pty" }
              ),
            },
            REJECT: {
              target: "processing",
              actions: [
                send({ type: "SEND_INPUT", input: "no\n" }, { to: "pty" }),
                assign<InitContext, InitEvent & { type: "REJECT" }>({
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

export function createAndStartInitService(options: {
  terraformBinaryName: string;
  workdir: string;
  noColor?: boolean;
  needsUpgrade: boolean;
}) {
  const service = interpret(initMachine);
  const args = [
    "init",
    ...(options.noColor ? ["-no-color"] : []),
    ...(options.needsUpgrade ? ["-upgrade"] : []),
  ];

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
