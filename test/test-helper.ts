import { TemplateServer } from "./template-server";
import { spawn } from "child_process";
import { spawn as ptySpawn } from "node-pty";

const { execSync } = require("child_process");
const os = require("os");
const path = require("path");
const fs = require("fs");
const fse = require("fs-extra");

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
    const sanitizedId = id.replace(/_/g, "");
    const constructs = (
      [
        ...Object.values(this.stack.resource || {}),
        ...Object.values(this.stack.data || {}),
      ] as Record<string, any>[]
    ).reduce(
      (carry, item) => ({ ...carry, ...item }),
      {} as Record<string, any>
    );

    return constructs[sanitizedId];
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
    this.env = Object.assign({ CI: 1 }, process.env, addToEnv);
  }

  public async exec(
    command: string,
    args: string[] = []
  ): Promise<{ stdout: string; stderr: string }> {
    try {
      return await new Promise((resolve, reject) => {
        const stdout = [],
          stderr = [];
        const process = spawn(command, args, {
          shell: true,
          stdio: "pipe",
          env: this.env,
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
              stdout: stdout.join("\n"),
              stderr: stderr.join("\n"),
            });
          } else {
            const error = new Error(
              `spawned command ${command} with args ${args} failed with exit code ${code}`
            );
            (error as any).code = code;
            (error as any).stdout = stdout.join("\n");
            (error as any).stderr = stderr.join("\n");
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
      `cdktf init --template ${template} --project-name="typescript-test" --project-description="typescript test app" --local ${additionalOptions}`
    );
  };

  get = async () => {
    await this.exec(`cdktf get`);
  };

  synth = async (flags?: string) => {
    return await this.exec(`cdktf synth ${flags ? flags : ""}`);
  };

  list = (flags?: string) => {
    return execSync(`cdktf list ${flags ? flags : ""}`, {
      env: this.env,
    }).toString();
  };

  diff = (stackName?: string) => {
    return execSync(`cdktf diff ${stackName ? stackName : ""}`, {
      env: this.env,
    }).toString();
  };

  deploy = (stackName?: string) => {
    return execSync(
      `cdktf deploy ${stackName ? stackName : ""} --auto-approve`,
      { env: this.env }
    ).toString();
  };

  destroy = (stackName?: string) => {
    return execSync(
      `cdktf destroy ${stackName ? stackName : ""} --auto-approve`,
      { env: this.env }
    ).toString();
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

  setupTypescriptProject = async () => {
    this.switchToTempDir();
    await this.init("typescript");
    this.copyFiles("main.ts", "cdktf.json");
    await this.get();
  };

  setupPythonProject = async () => {
    this.switchToTempDir();
    await this.init("python");
    this.copyFiles("main.py", "cdktf.json");
    await this.get();
  };

  setupCsharpProject = async () => {
    this.switchToTempDir();
    await this.init("csharp");
    this.copyFiles("Main.cs", "cdktf.json");
    await this.get();
    execSync("dotnet add reference .gen/Providers.Null/Providers.Null.csproj", {
      stdio: "inherit",
      env: this.env,
    });
  };

  setupJavaProject = async () => {
    this.switchToTempDir();
    await this.init("java");
    this.copyFiles("cdktf.json");
    this.copyFile("Main.java", "src/main/java/com/mycompany/app/Main.java");
    await this.get();
  };

  setupGoProject = async (cb?: (workingDirectory) => void) => {
    this.switchToTempDir();
    console.log(this.workingDirectory);
    await this.init("go");
    this.copyFiles("cdktf.json");
    this.copyFile("main.go", "main.go");

    await this.get();
    cb && cb(this.workingDirectory);

    // automatically retrieves required jsii-runtime module (used in generated providers)
    await this.exec("go mod tidy");
  };

  setupRemoteTemplateProject = async (overrideUrl?: string) => {
    const templateServer = new TemplateServer(
      path.resolve(__dirname, "..", "packages/cdktf-cli/templates/typescript")
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
}

export const onWindows = process.platform === "win32" ? it : it.skip;
export const onPosix = process.platform !== "win32" ? it : it.skip;
