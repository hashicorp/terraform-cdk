import * as os from "os";
import * as path from "path";
import * as fs from "fs";

import * as pty from "@cdktf/node-pty-prebuilt-multiarch";
import { logger } from "@cdktf/commons";

interface PtySpawnConfig {
  file: Parameters<typeof pty.spawn>[0];
  args: Parameters<typeof pty.spawn>[1];
  options: Parameters<typeof pty.spawn>[2] & { cwd: string };
}

export interface PtyProcessActions {
  write: (response: string) => void;
  writeLine: (response: string) => void;
  stop: () => void;
}

export interface PtyProcess {
  // Resolves or rejects depending on the exit code of the process
  progress: Promise<void>;
  // Always resolves, returns the exit code of the process
  exitCode: Promise<number>;
  actions: PtyProcessActions;
}

/**
 * A wrapper around node-pty that handles the platform specific differences
 * and provide an intuitive API for bidirectional communication with the
 * spawned process.
 */
export function spawnPty(
  config: PtySpawnConfig,
  onData: (data: string) => void
): PtyProcess {
  const { args, options } = config;
  const file =
    os.platform() === "win32"
      ? findExecutable(config.file, options.cwd, options)
      : config.file;

  logger.trace(
    `Spawning pty with file=${file}, args=${
      Array.isArray(args) ? `[${args.join(", ")}]` : `"${args}"`
    }, options=${JSON.stringify(options)}`
  );

  const p = pty.spawn(file, args, options);

  const actions: PtyProcessActions = {
    write: (response: string) => {
      logger.trace(
        `Sending response to pty (file=${file}, args=${
          Array.isArray(args) ? `[${args.join(", ")}]` : `"${args}"`
        }): ${response}`
      );
      p.write(response);
    },
    writeLine: (response: string) => {
      logger.trace(
        `Sending response (with newline) to pty (file=${file}, args=${
          Array.isArray(args) ? `[${args.join(", ")}]` : `"${args}"`
        }): ${response}`
      );
      p.write(`${response}${os.EOL}`);
    },
    stop: () => {
      logger.trace(
        `Aborting pty (file=${file}, args=${
          Array.isArray(args) ? `[${args.join(", ")}]` : `"${args}"`
        })`
      );
      p.write("\x03"); // CTRL + C, pty.kill() does not work on windows
    },
  };

  p.onData((data) => onData(data));

  const progress = new Promise<void>((resolve, reject) => {
    p.onExit(({ exitCode }) => {
      if (exitCode === 0) {
        resolve();
      } else {
        reject(
          new Error(
            `Pty (file=${file}, args=${
              Array.isArray(args) ? `[${args.join(", ")}]` : `"${args}"`
            }) exited with code ${exitCode}`
          )
        );
      }
    });
  });

  const exitCode = new Promise<number>((resolve) => {
    p.onExit(({ exitCode }) => {
      resolve(exitCode);
    });
  });

  return { progress, exitCode, actions };
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
