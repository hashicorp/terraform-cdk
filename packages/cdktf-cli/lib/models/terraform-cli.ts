import { exec, readCDKTFVersion } from "cdktf-cli/lib/util";
import {
  Terraform,
  TerraformPlan,
  TerraformOutput,
  AbstractTerraformPlan,
} from "./terraform";
import { SynthesizedStack } from "../synth-stack";
import { terraformBinaryName } from "../../bin/cmds/helper/terraform";

export class TerraformCliPlan
  extends AbstractTerraformPlan
  implements TerraformPlan
{
  constructor(
    public readonly planFile: string,
    public readonly plan: { [key: string]: any }
  ) {
    super(planFile, plan.resource_changes, plan.output_changes);
  }
}

export class TerraformCli implements Terraform {
  public readonly workdir: string;
  private readonly onStdout: (stateName: string) => (stdout: Buffer) => void;
  private readonly onStderr: (
    stateName: string
  ) => (stderr: string | Uint8Array) => void;

  constructor(
    private readonly abortSignal: AbortSignal,
    public readonly stack: SynthesizedStack,
    onLog = (_stateName: string) =>
      (_stdout: string, _isErr = false) => {} // eslint-disable-line @typescript-eslint/no-empty-function
  ) {
    this.workdir = stack.workingDirectory;
    this.onStdout = (stateName: string) => (stdout: Buffer) =>
      onLog(stateName)(stdout.toString());
    this.onStderr = (stateName: string) => (stderr: string | Uint8Array) =>
      onLog(stateName)(stderr.toString(), true);
  }

  public async init(): Promise<void> {
    await this.setUserAgent();
    await exec(
      terraformBinaryName,
      ["init", "-input=false"],
      {
        cwd: this.workdir,
        env: process.env,
        signal: this.abortSignal,
      },
      this.onStdout("init"),
      this.onStderr("init")
    );
  }

  public async plan(destroy = false): Promise<TerraformPlan> {
    const planFile = "plan";
    const options = ["plan", "-input=false", "-out", planFile];
    if (destroy) {
      options.push("-destroy");
    }
    await this.setUserAgent();
    await exec(
      terraformBinaryName,
      options,
      {
        cwd: this.workdir,
        env: process.env,
        signal: this.abortSignal,
      },
      this.onStdout("plan"),
      this.onStderr("plan")
    );

    const jsonPlan = await exec(
      terraformBinaryName,
      ["show", "-json", planFile],
      { cwd: this.workdir, env: process.env, signal: this.abortSignal },
      // we don't care about the output, this is just internally to compose a plan
      () => {}, // eslint-disable-line @typescript-eslint/no-empty-function
      this.onStderr("plan")
    );
    return new TerraformCliPlan(planFile, JSON.parse(jsonPlan));
  }

  public async deploy(
    planFile: string,
    stdout: (chunk: Buffer) => any,
    extraOptions: string[] = []
  ): Promise<void> {
    await this.setUserAgent();
    await exec(
      terraformBinaryName,
      [
        "apply",
        "-auto-approve",
        "-input=false",

        ...extraOptions,
        // only appends planFile if not empty
        // this allows deploying without a plan (as used in watch)
        ...(planFile ? [planFile] : []),
      ],
      { cwd: this.workdir, env: process.env, signal: this.abortSignal },
      (buffer: Buffer) => {
        this.onStdout("deploy")(buffer);
        stdout(buffer);
      },
      this.onStderr("deploy")
    );
  }

  public async destroy(stdout: (chunk: Buffer) => any): Promise<void> {
    await this.setUserAgent();
    await exec(
      terraformBinaryName,
      ["destroy", "-auto-approve", "-input=false"],
      { cwd: this.workdir, env: process.env, signal: this.abortSignal },
      (buffer: Buffer) => {
        this.onStdout("destroy")(buffer);
        stdout(buffer);
      },
      this.onStderr("destroy")
    );
  }

  public async version(): Promise<string> {
    try {
      return await exec(
        terraformBinaryName,
        ["-v"],
        {
          cwd: this.workdir,
          env: process.env,
          signal: this.abortSignal,
        },
        this.onStdout("version"),
        this.onStderr("version")
      );
    } catch {
      throw new Error(
        "Terraform CLI not present - Please install a current version https://learn.hashicorp.com/terraform/getting-started/install.html"
      );
    }
  }

  public async output(): Promise<{ [key: string]: TerraformOutput }> {
    const output = await exec(
      terraformBinaryName,
      ["output", "-json"],
      {
        cwd: this.workdir,
        env: process.env,
        signal: this.abortSignal,
      },
      // We don't need to log the output here since we use it later on
      () => {}, // eslint-disable-line @typescript-eslint/no-empty-function
      this.onStderr("output")
    );
    return JSON.parse(output);
  }

  public async setUserAgent(): Promise<void> {
    // Read the cdktf version from the 'cdk.tf.json' file
    // and set the user agent.
    const version = await readCDKTFVersion(this.workdir);
    if (version != "") {
      process.env.TF_APPEND_USER_AGENT =
        "cdktf/" + version + " (+https://github.com/hashicorp/terraform-cdk)";
    }
  }
}
