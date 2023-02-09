// Copyright (c) HashiCorp, Inc
// SPDX-License-Identifier: MPL-2.0
import stripAnsi from "strip-ansi";
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
import { missingVariable } from "../errors";
import { terraformJsonSchema } from "../terraform-json";
import { AbortSignal } from "node-abort-controller"; // polyfill until we update to node 16
import { spawnPty } from "./pty-process";

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

abstract class AbstractOutputFilter {
  public static condition: (line: string) => boolean;
  public static transform: (line: string) => string;
}
export type OutputFilter = typeof AbstractOutputFilter;

// The plan might error if there is a variable missing, but the error message hints the user
// in a wrong direction. We therefore catch the error and rethrow it with a more helpful message
class VariableRequiredFilter extends AbstractOutputFilter {
  // Example for "No value for required variable" error
  // ╷
  // │ Error: No value for required variable
  // │
  // │   on cdk.tf.json line 31, in variable:
  // │   31:     "with-dashes": {
  // │
  // │ The root module input variable "with-dashes" is not set, and has no default
  // │ value. Use a -var or -var-file command line argument to provide a value for
  // │ this variable
  public static condition(input: string) {
    const line = stripAnsi(input);

    return (
      line.includes("Error: No value for required variable") &&
      line.includes("The root module input variable")
    );
  }
  public static transform(line: string) {
    const startMarker = 'The root module input variable "';
    const variableName = line.substring(
      line.indexOf(startMarker) + startMarker.length,
      line.indexOf('" is not set')
    );

    return missingVariable(variableName);
  }
}

export class TerraformCli implements Terraform {
  public readonly workdir: string;
  private readonly onStdout: (
    stateName: string,
    filter?: OutputFilter[]
  ) => (stdout: Buffer | string) => void;
  private readonly onStderr: (
    stateName: string,
    filter?: OutputFilter[]
  ) => (stderr: string | Uint8Array) => void;

  constructor(
    private readonly abortSignal: AbortSignal,
    public readonly stack: SynthesizedStack,
    createTerraformLogHandler = (_phase: string, _filter?: OutputFilter[]) =>
      (_stdout: string, _isErr = false) => {} // eslint-disable-line @typescript-eslint/no-empty-function
  ) {
    this.workdir = stack.workingDirectory;
    this.onStdout =
      (phase: string, filter?: OutputFilter[]) => (stdout: Buffer | string) =>
        createTerraformLogHandler(
          phase,
          filter
        )(Buffer.isBuffer(stdout) ? stdout.toString() : stdout);
    this.onStderr =
      (phase: string, filter?: OutputFilter[]) =>
      (stderr: string | Uint8Array) =>
        createTerraformLogHandler(phase, filter)(stderr.toString(), true);
  }

  public async init(
    needsUpgrade: boolean,
    noColor: boolean,
    migrateState: boolean
  ): Promise<void> {
    await this.setUserAgent();

    const args = ["init"];
    if (needsUpgrade) {
      args.push("-upgrade");
    }
    if (noColor) {
      args.push("-no-color");
    }

    // eslint-disable-next-line @typescript-eslint/no-empty-function
    let initCanNotContinue = (_err: any) => {};
    const rejectsIfInitCanNotContinue = new Promise((_resolve, reject) => {
      initCanNotContinue = reject;
    });

    const stdout = this.onStdout("init");
    const { actions, exitCode } = spawnPty(
      {
        file: terraformBinaryName,
        args,
        options: {
          cwd: this.workdir,
          env: process.env as any,
        },
      },
      (data) => {
        stdout(data);
        if (data.includes("Should Terraform migrate your existing state?")) {
          if (migrateState) {
            actions.writeLine("yes");
          } else {
            actions.stop();
            initCanNotContinue(
              "Please pass the --migrate-state flag to migrate your state"
            );
          }
        }
      }
    );
    this.abortSignal.addEventListener("abort", () => {
      actions.stop();
    });

    const progress = exitCode.then((code) => {
      if (code !== 0) {
        throw new Error(`terraform init failed with exit code ${code}`);
      }
    });
    await Promise.race([progress, rejectsIfInitCanNotContinue]);

    // TODO: this might have performance implications because we don't know if we're
    // running a remote plan or a local one (so we run it always for all platforms)
    // while we'd only need it for remote plans
    await exec(
      terraformBinaryName,
      [
        "providers",
        "lock",
        "-platform=linux_amd64",
        ...(noColor ? ["-no-color"] : []),
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

  private get isCloudStack(): boolean {
    const parsedStack = terraformJsonSchema.parse(
      JSON.parse(this.stack.content)
    );

    return Boolean(
      parsedStack.terraform?.backend?.remote || parsedStack.terraform?.cloud
    );
  }

  public async plan(opts: {
    destroy: boolean;
    refreshOnly?: boolean;
    parallelism?: number;
    vars?: string[];
    varFiles?: string[];
    noColor?: boolean;
  }): Promise<void> {
    const {
      destroy = false,
      refreshOnly = false,
      parallelism = -1,
      vars = [],
      varFiles = [],
      noColor = false,
    } = opts;
    const options = ["plan", "-input=false"];

    if (!this.isCloudStack) {
      const planFile = "plan";
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
    if (noColor) {
      options.push("-no-color");
    }

    vars.forEach((v) => options.push(`-var=${v}`));
    varFiles.forEach((v) => options.push(`-var-file=${v}`));

    logger.debug(
      `Executing ${terraformBinaryName} ${options.join(" ")} in ${this.workdir}`
    );

    await this.setUserAgent();

    await exec(
      terraformBinaryName,
      options,
      {
        cwd: this.workdir,
        env: process.env,
        signal: this.abortSignal,
      },
      this.onStdout("plan", [VariableRequiredFilter]),
      this.onStderr("plan", [VariableRequiredFilter])
    );
  }

  public async deploy(
    {
      autoApprove = false,
      refreshOnly = false,
      noColor = false,
      parallelism = -1,
      extraOptions = [],
      vars = [],
      varFiles = [],
    },
    callback: (state: TerraformDeployState) => void
  ): Promise<{ cancelled: boolean }> {
    await this.setUserAgent();
    const service = createAndStartDeployService({
      terraformBinaryName,
      workdir: this.workdir,
      refreshOnly,
      noColor,
      autoApprove,
      parallelism,
      extraOptions,
      vars,
      varFiles,
    });
    return this.handleService("deploy", service, callback);
  }

  public async destroy(
    {
      autoApprove = false,
      parallelism = -1,
      noColor = false,
      extraOptions = [],
      vars = [],
      varFiles = [],
    },
    callback: (state: TerraformDeployState) => void
  ): Promise<{ cancelled: boolean }> {
    await this.setUserAgent();
    const service = createAndStartDestroyService({
      terraformBinaryName,
      workdir: this.workdir,
      autoApprove,
      parallelism,
      noColor,
      extraOptions,
      vars,
      varFiles,
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
      if (isDeployEvent(event, "OUTPUT_RECEIVED"))
        this.onStdout(type)(event.output);
      else if (isDeployEvent(event, "APPROVED_EXTERNALLY"))
        callback({ type: "external approval reply", approved: true });
      else if (isDeployEvent(event, "REJECTED_EXTERNALLY"))
        callback({ type: "external approval reply", approved: false });
      else if (isDeployEvent(event, "OVERRIDDEN_EXTERNALLY"))
        callback({
          type: "external sentinel override reply",
          overridden: true,
        });
      else if (isDeployEvent(event, "OVERRIDE_REJECTED_EXTERNALLY"))
        callback({
          type: "external sentinel override reply",
          overridden: false,
        });
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
      } else if (state.matches({ running: "awaiting_sentinel_override" })) {
        callback({
          type: "waiting for sentinel override",
          override: () => service.send("OVERRIDE"),
          reject: () => service.send("REJECT_OVERRIDE"),
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
