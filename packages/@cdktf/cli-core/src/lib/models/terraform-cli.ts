// Copyright (c) HashiCorp, Inc
// SPDX-License-Identifier: MPL-2.0
import {
  exec,
  logger,
  readCDKTFVersion,
  terraformBinaryName,
} from "@cdktf/commons";
import {
  Terraform,
  TerraformPlan,
  TerraformOutput,
  AbstractTerraformPlan,
  TerraformDeployState,
} from "./terraform";
import { SynthesizedStack } from "../synth-stack";
import {
  createAndStartDeployService,
  createAndStartDestroyService,
  DeployState,
  isDeployEvent,
} from "./deploy-machine";
import { waitFor } from "xstate/lib/waitFor";

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
  private readonly onStdout: (
    stateName: string
  ) => (stdout: Buffer | string) => void;
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
    this.onStdout = (phase: string) => (stdout: Buffer | string) =>
      createTerraformLogHandler(phase)(
        Buffer.isBuffer(stdout) ? stdout.toString() : stdout
      );
    this.onStderr = (phase: string) => (stderr: string | Uint8Array) =>
      createTerraformLogHandler(phase)(stderr.toString(), true);
  }

  public async init(needsUpgrade: boolean): Promise<void> {
    await this.setUserAgent();

    const args = ["init", "-input=false"];
    if (needsUpgrade) {
      args.push("-upgrade");
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

    // TODO: this might have performance implications because we don't know if we're
    // running a remote plan or a local one (so we run it always for all platforms)
    // while we'd only need it for remote plans
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

  public async plan(
    destroy = false,
    refreshOnly = false,
    parallelism = -1
  ): Promise<void> {
    const options = ["plan", "-input=false"];

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
  }

  public async deploy(
    {
      autoApprove = false,
      refreshOnly = false,
      parallelism = -1,
      extraOptions = [],
    },
    callback: (state: TerraformDeployState) => void
  ): Promise<{ cancelled: boolean }> {
    await this.setUserAgent();
    const service = createAndStartDeployService({
      terraformBinaryName,
      workdir: this.workdir,
      refreshOnly,
      autoApprove,
      parallelism,
      extraOptions,
    });
    return this.handleService("deploy", service, callback);
  }

  public async destroy(
    { autoApprove = false, parallelism = -1, extraOptions = [] },
    callback: (state: TerraformDeployState) => void
  ): Promise<{ cancelled: boolean }> {
    await this.setUserAgent();
    const service = createAndStartDestroyService({
      terraformBinaryName,
      workdir: this.workdir,
      autoApprove,
      parallelism,
      extraOptions,
    });
    return this.handleService("destroy", service, callback);
  }

  private async handleService(
    type: "deploy" | "destroy",
    service:
      | ReturnType<typeof createAndStartDeployService>
      | ReturnType<typeof createAndStartDestroyService>,
    callback: (state: TerraformDeployState) => void
  ): Promise<{ cancelled: boolean }> {
    // stop terraform apply if signaled as such from the outside (e.g. via ctrl+c)
    this.abortSignal.addEventListener(
      "abort",
      () => {
        service.send("STOP");
      },
      { once: true }
    );

    // relay logs to stdout
    service.onEvent((event) => {
      logger.trace(
        `Terraform CLI state machine event: ${JSON.stringify(event)}`
      );
      if (isDeployEvent(event, "LINE_RECEIVED"))
        this.onStdout(type)(event.line);
      else if (isDeployEvent(event, "APPROVED_EXTERNALLY"))
        callback({ type: "external approval reply", approved: true });
      else if (isDeployEvent(event, "REJECTED_EXTERNALLY"))
        callback({ type: "external approval reply", approved: false });
    });

    let previousState: DeployState["value"] = "idle";

    service.onTransition((state) => {
      // only send updates on actual state change
      // onTransition is called even if the state didn't change but only an event happened
      if (state.matches(previousState as DeployState["value"])) return;

      logger.trace(
        `Terraform CLI state machine state transition: ${JSON.stringify(
          previousState
        )} => ${JSON.stringify(state.value)}`
      );

      if (state.matches({ running: "awaiting_approval" })) {
        callback({
          type: "waiting for approval",
          approve: () => service.send("APPROVE"),
          reject: () => service.send("REJECT"),
        });
      } else if (state.matches({ running: "processing" })) {
        callback({
          type: "running",
          cancelled: Boolean(state.context.cancelled),
        });
      }
      previousState = state.value as DeployState["value"];
    });
    service.start();
    const state = await waitFor(service, (state) => !!state.done, {
      timeout: Infinity,
    });

    logger.trace(
      `Invoking Terraform CLI for ${type} done (state machine reached final state). Last event: ${JSON.stringify(
        state.event
      )}. Context: ${JSON.stringify(state.context)}`
    );

    // example events: { type: 'EXITED', exitCode: 0 }, { type: 'EXTERNAL_REJECT' }
    if (
      state.event.type === "EXITED" &&
      state.event.exitCode !== 0 &&
      !state.context.cancelled // don't fail if we cancelled the run
    ) {
      throw `Invoking Terraform CLI failed with exit code ${state.event.exitCode}`;
    }

    return { cancelled: Boolean(state.context.cancelled) };
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
