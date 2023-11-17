// Copyright (c) HashiCorp, Inc
// SPDX-License-Identifier: MPL-2.0
import { TemplateServer } from "./template-server";
import { spawn, execSync } from "child_process";
import * as execa from "execa";
import { spawn as ptySpawn } from "@cdktf/node-pty-prebuilt-multiarch";

const os = require("os");
const path = require("path");
const fs = require("fs");
const fse = require("fs-extra");
const stripAnsi = require("strip-ansi");

function execSyncLogErrors(...args: Parameters<typeof execSync>) {
  try {
    return execSync(...args);
  } catch (e) {
    console.log(e.stdout?.toString());
    console.error(e.stderr?.toString());
    throw e;
  }
}

export function packageJsonWithDependency(name: string, version?: string) {
  return expect.objectContaining({
    dependencies: expect.objectContaining({
      [name]: version || expect.any(String),
    }),
  });
}

export class QueryableStack {
  private readonly stack: Record<string, any>;
  constructor(stackInput: string) {
    this.stack = JSON.parse(stackInput);
  }

  /**
   * Returns the construct with the given ID in the stack, no matter if
   * it's a data source or resource and which type it has
   */
  public byId(id: string): Record<string, any> {
    const constructs = (
      [
        ...Object.values(this.stack.resource || {}),
        ...Object.values(this.stack.data || {}),
      ] as Record<string, any>[]
    ).reduce(
      (carry, item) => ({ ...carry, ...item }),
      {} as Record<string, any>
    );

    return constructs[id];
  }

  public output(id: string): string {
    return this.stack.output[id].value;
  }

  public toString(removeMetadata = false): string {
    if (removeMetadata) {
      return JSON.stringify({ ...this.stack, ["//"]: undefined }, null, 2);
    }

    return JSON.stringify(this.stack, null, 2);
  }
}

export class TestDriver {
  public env: Record<string, string>;
  public workingDirectory: string;

  constructor(public rootDir: string, addToEnv: Record<string, string> = {}) {
    // Node.js prepends all parent node_modules/.bin directories to the PATH env var
    // which shadows the cdktf CLI we want to test against and set in run-against-dist.sh
    // While the code is the same, we want the CLI to be installed in a temporary directory
    // (handled by run-against-dist) to ensure we don't have broken relative paths in
    // that don't work then the CLI is installed via NPM. One example for such a bug we want
    // to catch with this is: https://github.com/hashicorp/terraform-cdk/issues/3025
    // To achieve this, we prepend the path exported by the run-against-dist script that
    // it installed the cdktf CLI in
    const newPath = `${process.env.TEST_PATH_CDKTF_CLI}:${process.env.PATH}`;
    this.env = Object.assign(
      { CI: 1 },
      process.env,
      { PATH: newPath },
      addToEnv
    );
  }

  public async exec(
    command: string,
    args: string[] = [],
    cwd?: string
  ): Promise<{ stdout: string; stderr: string }> {
    try {
      return await new Promise((resolve, reject) => {
        const stdout: string[] = [],
          stderr: string[] = [];
        const process = spawn(command, args, {
          shell: true,
          stdio: "pipe",
          env: this.env,
          cwd,
        });
        process.stdout.on("data", (data) => {
          stdout.push(data.toString());
        });
        process.stderr.on("data", (data) => {
          stderr.push(data.toString());
        });
        process.on("close", (code) => {
          if (code === 0) {
            resolve({
              stdout: stripAnsi(stdout.join("\n")),
              stderr: stripAnsi(stderr.join("\n")),
            });
          } else {
            const error = new Error(
              `spawned command ${command} with args ${args} failed with exit code ${code}`
            );
            (error as any).code = code;
            (error as any).stdout = stripAnsi(stdout.join("\n"));
            (error as any).stderr = stripAnsi(stderr.join("\n"));
            reject(error);
          }
        });
      });
    } catch (e) {
      if (e.stdout) {
        console.log(e.stdout.toString());
      }
      if (e.stderr) {
        console.error(e.stderr.toString());
      }

      throw e;
    }
  }

  packageJson = () => {
    return JSON.parse(this.readLocalFile("package.json"));
  };

  switchToTempDir = () => {
    const pathName = path.join(os.tmpdir(), "test");
    this.workingDirectory = fs.mkdtempSync(pathName);
    process.chdir(this.workingDirectory);
  };

  copyFolders = (...folderNames) => {
    for (const folderName of folderNames) {
      fse.copySync(path.join(this.rootDir, folderName), folderName);
    }
  };

  copyFiles = (...fileNames) => {
    for (const fileName of fileNames) {
      fse.copySync(path.join(this.rootDir, fileName), fileName);
    }
  };

  copyFile = (source, dest) => {
    fse.copySync(path.join(this.rootDir, source), dest);
  };

  addFile = (dest, content) => {
    fse.writeFileSync(dest, content);
  };

  setEnv = (key, value) => {
    this.env[key] = value;
  };

  stackDirectory = (stackName: string) => {
    return path.join(this.workingDirectory, "cdktf.out", "stacks", stackName);
  };

  manifest = () => {
    return fs.readFileSync(
      path.join(this.workingDirectory, "cdktf.out", "manifest.json"),
      "utf8"
    );
  };

  synthesizedStack = (stackName: string) => {
    return new QueryableStack(
      fs.readFileSync(
        path.join(this.stackDirectory(stackName), "cdk.tf.json"),
        "utf-8"
      )
    );
  };

  init = async (template: string, additionalOptions = "") => {
    await this.exec(
      `cdktf init --template ${template} --project-name="typescript-test" --project-description="typescript test app" --local --enable-crash-reporting=false ${additionalOptions}`
    );
  };

  get = async () => {
    await this.exec(`cdktf get`);
  };

  synth = async (flags?: string) => {
    return await this.exec(`cdktf synth ${flags ? flags : ""}`);
  };

  list = (flags?: string) => {
    return stripAnsi(
      execSyncLogErrors(`cdktf list ${flags ? flags : ""}`, {
        env: this.env,
      }).toString()
    );
  };

  diff = (stackName?: string, otherFlags?: string[]) => {
    return stripAnsi(
      execSyncLogErrors(
        `cdktf diff ${stackName ? stackName : ""} ${
          otherFlags?.length ? otherFlags.join(" ") : ""
        }`,
        {
          env: this.env,
        }
      ).toString()
    );
  };

  deploy = async (
    stackNames?: string[],
    outputsFilePath?: string,
    otherFlags?: string[]
  ) => {
    const result = await execa(
      "cdktf",
      [
        "deploy",
        ...(stackNames || []),
        "--auto-approve",
        ...(outputsFilePath ? [`--outputs-file=${outputsFilePath}`] : []),
        ...(otherFlags || []),
      ],
      { env: { ...process.env, ...this.env } } // make sure env is up to date
    );
    return stripAnsi(result.stdout);
  };

  output = (
    stackName?: string,
    outputsFilePath?: string,
    includeSensitiveOutputs?: boolean
  ) => {
    return stripAnsi(
      execSyncLogErrors(
        `cdktf output ${stackName ? stackName : ""} ${
          outputsFilePath ? `--outputs-file=${outputsFilePath}` : ""
        } ${
          includeSensitiveOutputs
            ? `--outputs-file-include-sensitive-outputs=true`
            : ""
        }`,
        { env: this.env }
      ).toString()
    );
  };

  destroy = (stackNames?: string[]) => {
    return stripAnsi(
      execSyncLogErrors(
        `cdktf destroy ${
          stackNames ? stackNames.join(" ") : ""
        } --auto-approve`,
        {
          env: this.env,
        }
      ).toString()
    );
  };

  watch = () => {
    const child = ptySpawn("cdktf", ["watch", "--auto-approve"], {
      name: "xterm-color",
      env: this.env,
      cols: 80,
      rows: 60,
      cwd: this.workingDirectory,
    });
    return child;
  };

  setupTypescriptProject = async (options?: {
    init?: { additionalOptions?: string };
  }) => {
    this.switchToTempDir();
    await this.init("typescript", options?.init?.additionalOptions);
    this.copyFiles("main.ts", "cdktf.json");
    await this.get();
  };

  setupPythonProject = async (options?: {
    init?: { additionalOptions?: string };
  }) => {
    this.switchToTempDir();
    await this.init("python", options?.init?.additionalOptions);
    this.copyFiles("main.py", "cdktf.json");
    await this.get();
  };

  setupCsharpProject = async (options?: {
    init?: { additionalOptions?: string };
  }) => {
    this.switchToTempDir();
    await this.init("csharp", options?.init?.additionalOptions);
    this.copyFiles("Program.cs", "cdktf.json");
    await this.get();
    execSyncLogErrors(
      "dotnet add reference .gen/Providers.Null/Providers.Null.csproj",
      {
        stdio: "inherit",
        env: this.env,
      }
    );
  };

  setupJavaProject = async (options?: {
    init?: { additionalOptions?: string };
  }) => {
    this.switchToTempDir();
    await this.init("java", options?.init?.additionalOptions);
    this.copyFiles("cdktf.json");
    this.copyFile("Main.java", "src/main/java/com/mycompany/app/Main.java");
    await this.get();
  };

  setupGoProject = async (options?: {
    init?: { additionalOptions?: string };
    cb?: (workingDirectory) => void;
  }) => {
    this.switchToTempDir();
    await this.init("go", options?.init?.additionalOptions);
    this.copyFiles("cdktf.json");
    this.copyFile("main.go", "main.go");

    await this.get();
    options?.cb && options.cb(this.workingDirectory);

    // automatically retrieves required jsii-runtime module (used in generated providers)
    await this.exec("go mod tidy");
  };

  setupRemoteTemplateProject = async (overrideUrl?: string) => {
    const templateServer = new TemplateServer(
      path.resolve(
        __dirname,
        "..",
        "packages/@cdktf/cli-core/templates/typescript"
      )
    );
    try {
      const url = await templateServer.start();
      this.switchToTempDir();
      await this.init(overrideUrl || url);
      this.copyFiles("cdktf.json");
      await this.get();
    } finally {
      await templateServer.stop();
    }
  };

  readLocalFile = (fileName: string): string => {
    return fs.readFileSync(path.join(this.workingDirectory, fileName), "utf8");
  };
}

export const onWindows = process.platform === "win32" ? it : it.skip;
export const onPosix = process.platform !== "win32" ? it : it.skip;

/**
 * replaces all occurences like
 * [2022-08-05T15:51:40.093] [ERROR]
 * with
 * [<TIMESTAMP>] [ERROR]
 * to allow snapshot tests on output that produces errors which are logged with timestamps
 */
export function sanitizeTimestamps(output: string): string {
  return output.replace(
    /\[\d{4}-\d{2}-\d{2}T\d{2}:\d{2}:\d{2}.\d{3}\]/gm,
    "[<TIMESTAMP>]"
  );
}
