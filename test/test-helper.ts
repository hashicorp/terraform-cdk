import { TemplateServer } from "./template-server";

const { execSync } = require("child_process");
const util = require('util');
const exec = util.promisify(require('child_process').exec);
const os = require("os");
const path = require("path");
const fs = require("fs");

export class TestDriver {
  public env: Record<string, string>
  public workingDirectory: string;

  constructor(public rootDir: string, addToEnv: Record<string, string> = {}) {
    this.env = Object.assign({ CI: 1 }, process.env, addToEnv);
  }

  private async exec(command: string) {
    try {
      const output = await exec(command, { stdio: "pipe", env: this.env });
      // console.dir(output);
    } catch (e) {
      console.log(e.stdout.toString())
      console.error(e.stderr.toString())
      throw e;
    }
  }

  switchToTempDir = () => {
    const pathName = path.join(os.tmpdir(), "test");
    this.workingDirectory = fs.mkdtempSync(pathName);
    process.chdir(this.workingDirectory);
  }

  copyFiles = (...fileNames) => {
    for (const fileName of fileNames) {
      fs.copyFileSync(path.join(this.rootDir, fileName), fileName);
    }
  }

  copyFile = (source, dest) => {
    fs.copyFileSync(path.join(this.rootDir, source), dest);
  }

  synthesizedStack = () => {
    return fs.readFileSync(path.join(this.workingDirectory, 'cdktf.out', 'cdk.tf.json'), 'utf-8')
  }

  init = async (template: string) => {
    await this.exec(
      `cdktf init --template ${template} --project-name="typescript-test" --project-description="typescript test app" --local`
    );
  }

  get = () => {
    execSync(`cdktf get`, { stdio: "inherit", env: this.env });
  }

  synth = async () => {
    await this.exec(`cdktf synth`);
  }

  diff = () => {
    return execSync(`cdktf diff`, { env: this.env }).toString();
  }

  deploy = () => {
    return execSync(`cdktf deploy --auto-approve`, { env: this.env }).toString();
  }

  destroy = () => {
    return execSync(`cdktf destroy --auto-approve`, { env: this.env }).toString();
  }

  setupTypescriptProject = async () => {
    this.switchToTempDir()
    await this.init('typescript')
    this.copyFiles('main.ts', 'cdktf.json')
    this.get()
  }

  setupPythonProject = async () => {
    this.switchToTempDir()
    await this.init('python')
    this.copyFiles('main.py', 'cdktf.json')
    this.get()
  }

  setupCsharpProject = async () => {
    this.switchToTempDir()
    await this.init('csharp')
    this.copyFiles('Main.cs', 'cdktf.json')
    this.get()
    execSync('dotnet add reference .gen/aws/aws.csproj', { stdio: 'inherit', env: this.env });
  }

  setupJavaProject = async () => {
    this.switchToTempDir()
    await this.init('java')
    this.copyFiles('cdktf.json')
    this.copyFile('Main.java', 'src/main/java/com/mycompany/app/Main.java')
    this.get()
  }

  setupRemoteTemplateProject = async (overrideUrl?: string) => {
    const templateServer = new TemplateServer(path.resolve(__dirname, '..', 'packages/cdktf-cli/templates/typescript'));
    try {
      const url = await templateServer.start();
      this.switchToTempDir()
      await this.init(overrideUrl || url)
      this.copyFiles('cdktf.json')
      this.get()
    } finally {
      await templateServer.stop();
    }
  }
}



