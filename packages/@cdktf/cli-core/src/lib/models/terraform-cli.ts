// Copyright (c) HashiCorp, Inc
// SPDX-License-Identifier: MPL-2.0
import { exec, readCDKTFVersion, terraformBinaryName } from "@cdktf/commons";
import {
  Terraform,
  TerraformPlan,
  TerraformOutput,
  AbstractTerraformPlan,
} from "./terraform";
import { SynthesizedStack } from "../synth-stack";
import { terraformJsonSchema } from "../terraform-json";

export class TerraformCliPlan
  extends AbstractTerraformPlan
  implements TerraformPlan
{
  constructor(
    public readonly planFile: string,
    public readonly plan: { [key: string]: any }
  ) {
    super(planFile, plan?.resource_changes, plan?.output_changes);
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
    createTerraformLogHandler = (_phase: string) =>
      (_stdout: string, _isErr = false) => {} // eslint-disable-line @typescript-eslint/no-empty-function
  ) {
    this.workdir = stack.workingDirectory;
    this.onStdout = (phase: string) => (stdout: Buffer) =>
      createTerraformLogHandler(phase)(stdout.toString());
    this.onStderr = (phase: string) => (stderr: string | Uint8Array) =>
      createTerraformLogHandler(phase)(stderr.toString(), true);
  }

  public async init(needsUpgrade: boolean): Promise<void> {
    await this.setUserAgent();

    const args = ["init", "-input=false"];
    if (needsUpgrade) {
      args.push("-upgrade");
    }

    if (this.isTFCPlan) {
      await exec(
        terraformBinaryName,
        [
          "providers",
          "lock",
          "-platform=windows_amd64",
          "-platform=darwin_amd64",
          "-platform=linux_amd64",
        ],
        {
          cwd: this.workdir,
          env: process.env,
          signal: this.abortSignal,
        },
        this.onStdout("init"),
        this.onStderr("init")
      );
    }

    await exec(
      terraformBinaryName,
      args,
      {
        cwd: this.workdir,
        env: process.env,
        signal: this.abortSignal,
      },
      this.onStdout("init"),
      this.onStderr("init")
    );
  }

  private get isTFCPlan(): boolean {
    const content = terraformJsonSchema.parse(JSON.parse(this.stack.content));
    if (content.terraform?.backend?.remote) {
      return true;
    }

    return false;
  }

  public async plan(
    destroy = false,
    refreshOnly = false,
    parallelism = -1
  ): Promise<TerraformPlan> {
    const planFile = "plan";
    const options = ["plan", "-input=false"];

    if (!this.isTFCPlan) {
      options.push("-out", planFile);
    }
    if (destroy) {
      options.push("-destroy");
    }
    if (refreshOnly) {
      options.push("-refresh-only");
    }
    if (parallelism > -1) {
      options.push(`-parallelism=${parallelism}`);
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
    planFile?: string,
    refreshOnly = false,
    parallelism = -1,
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
        ...(refreshOnly ? ["-refresh-only"] : []),
        ...(parallelism > -1 ? [`-parallelism=${parallelism}`] : []),
        // only appends planFile if not empty
        // this allows deploying without a plan (as used in watch and for TFC)
        ...(planFile ? [planFile] : []),
      ],
      { cwd: this.workdir, env: process.env, signal: this.abortSignal },
      this.onStdout("deploy"),
      this.onStderr("deploy")
    );
  }

  public async destroy(parallelism = -1): Promise<void> {
    await this.setUserAgent();
    const options = ["destroy", "-auto-approve", "-input=false"];
    if (parallelism > -1) {
      options.push(`-parallelism=${parallelism}`);
    }

    await exec(
      terraformBinaryName,
      options,
      { cwd: this.workdir, env: process.env, signal: this.abortSignal },
      this.onStdout("destroy"),
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

  // We don't need to clean anything up for a running execution in the CLI since there is no left-over state in contrast to an open Terraform Cloud run
  public async abort() {
    return;
  }
}
