const { execSync } = require("child_process");
const os = require("os");
const path = require("path");
const fs = require("fs");

export class TestDriver {
  public env: Record<string, string>
  public workingDirectory: string;

  constructor(public rootDir: string, addToEnv: Record<string, string> = {}) {
    this.env = Object.assign({CI: 1}, process.env, addToEnv);
  }

  private execSync(command: string) {
    try {
      return execSync(command, { stdio: "pipe", env: this.env });
    } catch(e) {
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

  synthesizedStack = (stackName: string) => {
    return fs.readFileSync(path.join(this.workingDirectory, 'cdktf.out', 'stacks', stackName, 'cdk.tf.json'), 'utf-8')
  }

  init = (template) => {
    execSync(
      `cdktf init --template ${template} --project-name="typescript-test" --project-description="typescript test app" --local`,
      { stdio: "inherit", env: this.env }
    );
  }

  get = () => {
    execSync(`cdktf get`, { stdio: "inherit", env: this.env });
  }

  synth = (flags?: string) => {
    return this.execSync(`cdktf synth ${flags ? flags : ''}`).toString();
  }

  diff = (stackName?: string) => {
    return execSync(`cdktf diff ${stackName ? stackName : ''}`, { env: this.env }).toString();
  }

  deploy = (stackName?: string) => {
    return execSync(`cdktf deploy ${stackName ? stackName : ''} --auto-approve`, { env: this.env }).toString();
  }

  destroy = (stackName?: string) => {
    return execSync(`cdktf destroy ${stackName ? stackName : ''} --auto-approve`, { env: this.env }).toString();
  }

  setupTypescriptProject = () => {
    this.switchToTempDir()
    this.init('typescript')
    this.copyFiles('main.ts', 'cdktf.json')
    this.get()
  }

  setupPythonProject = () => {
    this.switchToTempDir()
    this.init('python')
    this.copyFiles('main.py', 'cdktf.json')
    this.get()
  }

  setupCsharpProject = () => {
    this.switchToTempDir()
    this.init('csharp')
    this.copyFiles('Main.cs', 'cdktf.json')
    this.get()
    execSync('dotnet add reference .gen/aws/aws.csproj', { stdio: 'inherit', env: this.env });
  }

  setupJavaProject = () => {
    this.switchToTempDir()
    this.init('java')
    this.copyFiles('cdktf.json')
    this.copyFile('Main.java', 'src/main/java/com/mycompany/app/Main.java')
    this.get()
  }
}



