import { spawn, SpawnOptions } from "child_process";
import * as fs from "fs-extra";
import * as os from "os";
import * as path from "path";

export async function withTempDir(
  dirname: string,
  closure: () => Promise<void>
) {
  const prevdir = process.cwd();
  const parent = await fs.mkdtemp(path.join(os.tmpdir(), "cdktf."));
  const workdir = path.join(parent, dirname);
  await fs.mkdirp(workdir);
  try {
    process.chdir(workdir);
    await closure();
  } finally {
    process.chdir(prevdir);
    await fs.remove(parent);
  }
}

export async function mkdtemp(closure: (dir: string) => Promise<void>) {
  const workdir = await fs.mkdtemp(path.join(os.tmpdir(), "cdktf."));
  try {
    await closure(workdir);
  } finally {
    await fs.remove(workdir);
  }
}

export const exec = async (
  command: string,
  args: string[],
  options: SpawnOptions,
  stdout?: (chunk: Buffer) => any,
  stderr?: (chunk: string | Uint8Array) => any
): Promise<string> => {
  return new Promise((ok, ko) => {
    const child = spawn(command, args, options);
    const out = new Array<Buffer>();
    const err = new Array<string | Uint8Array>();
    if (stdout !== undefined) {
      child.stdout?.on("data", (chunk: Buffer) => {
        stdout(chunk);
      });
    } else {
      child.stdout?.on("data", (chunk: Buffer) => {
        out.push(chunk);
      });
    }
    if (stderr !== undefined) {
      child.stderr?.on("data", (chunk: string | Uint8Array) => {
        stderr(chunk);
      });
    } else {
      child.stderr?.on("data", (chunk: string | Uint8Array) => {
        process.stderr.write(chunk);
        err.push(chunk);
      });
    }
    child.once("error", (err: any) => ko(err));
    child.once("close", (code: number) => {
      if (code !== 0) {
        const error = new Error(`non-zero exit code ${code}`);
        (error as any).stderr = err.map((chunk) => chunk.toString()).join("");
        return ko(error);
      }
      return ok(Buffer.concat(out).toString("utf-8"));
    });
  });
};

/**
 * Downcase the first character in a string.
 *
 * @param str the string to be processed.
 */
export function downcaseFirst(str: string): string {
  if (str === "") {
    return str;
  }
  return `${str[0].toLocaleLowerCase()}${str.slice(1)}`;
}
