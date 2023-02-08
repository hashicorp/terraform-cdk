// Copyright (c) HashiCorp, Inc
// SPDX-License-Identifier: MPL-2.0
import { SynthesizedStack } from "./synth-stack";
import { Terraform } from "./models/terraform";
import { getConstructIdsForOutputs, NestedTerraformOutputs } from "./output";
import { logger } from "@cdktf/commons";
import { extractJsonLogIfPresent } from "./server/terraform-logs";
import { TerraformCli, OutputFilter } from "./models/terraform-cli";
import { ProviderConstraint } from "./dependencies/dependency-manager";
import { terraformJsonSchema, TerraformStack } from "./terraform-json";
import { TerraformProviderLock } from "./terraform-provider-lock";

export type StackUpdate =
  | {
      type: "planning";
      stackName: string;
    }
  | {
      type: "planned";
      stackName: string;
    }
  | {
      type: "deploying";
      stackName: string;
    }
  | {
      type: "deploy update";
      stackName: string;
      deployOutput: string;
    }
  | {
      type: "deployed";
      stackName: string;
      outputsByConstructId: NestedTerraformOutputs;
      outputs: Record<string, any>;
    }
  | {
      type: "destroying";
      stackName: string;
    }
  | {
      type: "destroy update";
      stackName: string;
      destroyOutput: string;
    }
  | {
      type: "destroyed";
      stackName: string;
    }
  | {
      type: "outputs fetched";
      stackName: string;
      outputsByConstructId: NestedTerraformOutputs;
      outputs: Record<string, any>;
    }
  | {
      type: "errored";
      stackName: string;
      error: string;
    }
  | {
      type: "dismissed";
      stackName: string;
    };

export type StackUserInputUpdate =
  | StackApprovalUpdate
  | StackSentinelOverrideUpdate;

export type StackApprovalUpdate = {
  type: "waiting for stack approval";
  stackName: string;
  approve: () => void;
  reject: () => void;
};
export type StackSentinelOverrideUpdate = {
  type: "waiting for stack sentinel override";
  stackName: string;
  override: () => void;
  reject: () => void;
};
export type ExternalStackApprovalUpdate = {
  type: "external stack approval reply";
  stackName: string;
  approved: boolean; // false = rejected
};
export type ExternalStackSentinelOverrideUpdate = {
  type: "external stack sentinel override reply";
  stackName: string;
  overridden: boolean; // false = rejected
};

async function getTerraformClient(
  abortSignal: AbortSignal,
  stack: SynthesizedStack,
  createTerraformLogHandler: (
    phase: string,
    filter?: OutputFilter[]
  ) => (message: string, isError?: boolean) => void
): Promise<Terraform> {
  return new TerraformCli(abortSignal, stack, createTerraformLogHandler);
}

type CdktfStackOptions = {
  stack: SynthesizedStack;
  onUpdate: (
    update:
      | StackUpdate
      | StackApprovalUpdate
      | ExternalStackApprovalUpdate
      | StackSentinelOverrideUpdate
      | ExternalStackSentinelOverrideUpdate
  ) => void;
  onLog?: (log: { message: string; isError: boolean }) => void;
  autoApprove?: boolean;
  migrateState?: boolean;
  abortSignal: AbortSignal;
};

type CdktfStackStates =
  | StackUpdate["type"]
  | StackApprovalUpdate["type"]
  | StackSentinelOverrideUpdate["type"]
  | ExternalStackApprovalUpdate["type"]
  | ExternalStackSentinelOverrideUpdate["type"]
  | "idle"
  | "done";

export class CdktfStack {
  public stack: SynthesizedStack;
  public outputs?: Record<string, any>;
  public outputsByConstructId?: NestedTerraformOutputs;
  public stopped = false;
  public currentWorkPromise: Promise<void> | undefined;
  public readonly currentState: CdktfStackStates = "idle";
  public error?: string;
  private readonly parsedContent: TerraformStack;

  constructor(public options: CdktfStackOptions) {
    this.stack = options.stack;
    this.parsedContent = terraformJsonSchema.parse(
      JSON.parse(this.stack.content)
    );
  }

  public get isPending(): boolean {
    return this.currentState === "idle" && !this.stopped;
  }
  public get isDone(): boolean {
    return (
      this.currentState === "done" ||
      this.currentState === "errored" ||
      this.stopped
    );
  }
  public get isRunning(): boolean {
    return !this.isPending && !this.isDone;
  }

  private updateState(
    update:
      | StackUpdate
      | StackApprovalUpdate
      | StackSentinelOverrideUpdate
      | ExternalStackApprovalUpdate
      | ExternalStackSentinelOverrideUpdate
      | { type: "idle" }
      | { type: "done" }
  ) {
    logger.debug(`[${this.stack.name}]: ${update.type}`);
    (this.currentState as CdktfStackStates) = update.type;
    switch (update.type) {
      case "idle":
      case "done":
        break;

      case "errored":
        this.error = update.error;
        this.options.onUpdate(update);
        break;

      case "outputs fetched":
      case "deployed":
        logger.debug(`Outputs: ${JSON.stringify(update.outputs)}`);
        logger.debug(
          `OutputsByConstructId: ${JSON.stringify(update.outputsByConstructId)}`
        );
        this.outputs = update.outputs;
        this.outputsByConstructId = update.outputsByConstructId;
        this.options.onUpdate(update);
        break;

      default:
        this.options.onUpdate(update);
        break;
    }
  }

  private createTerraformLogHandler(
    phase: string,
    filters?: OutputFilter[]
  ): (message: string, isError?: boolean) => void {
    logger.debug("creating terraform log hanlder", phase);

    const onLog = this.options.onLog;
    return (msg: string, isError = false) => {
      const message = extractJsonLogIfPresent(msg);
      logger.debug(`[${this.options.stack.name}](${phase}): ${msg}`);

      const filterToApply = filters?.find((filter) =>
        filter.condition(message)
      );
      const filteredMessage = filterToApply
        ? filterToApply.transform(message)
        : message;

      if (filteredMessage) {
        logger.debug(
          `Filter ${filterToApply} applied on line '${message}' with result '${filteredMessage}'`
        );
      }

      if (onLog) {
        onLog({ message: filteredMessage, isError });
      }
    };
  }

  private async terraformClient() {
    return await getTerraformClient(
      this.options.abortSignal,
      this.options.stack,
      this.createTerraformLogHandler.bind(this)
    );
  }

  public async initalizeTerraform(noColor?: boolean) {
    const terraform = await this.terraformClient();
    const needsLockfileUpdate = await this.checkNeedsLockfileUpdate();
    const needsUpgrade = await this.checkNeedsUpgrade();
    await terraform.init({ needsUpgrade, noColor ?? false, needsLockfileUpdate, this.options.migrateState ?? false });
    return terraform;
  }

  private requiredProviders() {
    // Read required providers from the stack output
    const requiredProviders = this.parsedContent.terraform?.required_providers;

    return Object.values(requiredProviders || {}).reduce((acc, obj) => {
      const constraint = new ProviderConstraint(obj.source, obj.version);
      acc[constraint.source] = constraint;
      return acc;
    }, {} as Record<string, ProviderConstraint>);
  }

  private async checkNeedsLockfileUpdate(): Promise<boolean> {
    if (this.options.migrateState) {
      // If we're migrating state, we need to init
      return true;
    }
    const lock = new TerraformProviderLock(this.stack.workingDirectory);
    const lockFileExists = await lock.hasProviderLockFile();

    if (!lockFileExists) {
      // If we don't have a lock file, this is probably the first init
      return true;
    }

    const requiredProviders = this.requiredProviders();

    for (const provider of Object.values(requiredProviders)) {
      const hasProvider = await lock.hasMatchingProvider(provider);
      if (!hasProvider) {
        // If we don't have a provider or version doesn't match, we need to init
        return true;
      }
    }

    return false;
  }

  private async checkNeedsUpgrade(): Promise<boolean> {
    const lock = new TerraformProviderLock(this.stack.workingDirectory);
    const allProviders = this.requiredProviders();
    const lockedProviders = Object.values(await lock.providers());

    // Check if any provider contained in `providers` violates constraints in `lockedProviders`
    // Upgrade if some provider constraint not met
    // If a provider wasn't preset in lockedProviders, that's fine; it will just get added
    return lockedProviders.some((lockedProvider) => {
      const lockedConstraint = lockedProvider.constraints;
      if (!lockedConstraint) {
        // Provider lock doesn't have a constraint specified, so we can't check.
        // This shouldn't happen
        logger.debug(
          `Provider lock doesn't have a constraint for ${lockedProvider.name}`
        );
        return false;
      }

      const provider = allProviders[lockedConstraint.source];
      if (!provider) {
        // else no longer using this provider, so won't cause problems
        return;
      }

      return !lockedConstraint.matchesVersion(provider.version ?? ">0");
    });
  }

  private async run(cb: () => Promise<void>) {
    if (this.stopped) {
      return;
    }

    try {
      this.currentWorkPromise = cb();
      await this.currentWorkPromise;
      this.updateState({ type: "done" });
    } catch (e) {
      logger.trace("Error in currentWorkPromise", e);
      this.currentWorkPromise = undefined;
      this.updateState({
        type: "errored",
        stackName: this.stack.name,
        error: String(e),
      });
      throw e;
    } finally {
      this.currentWorkPromise = undefined;
    }
  }

  public async diff({
    refreshOnly,
    terraformParallelism,
    vars,
    varFiles,
    noColor,
  }: {
    refreshOnly?: boolean;
    terraformParallelism?: number;
    vars?: string[];
    varFiles?: string[];
    noColor?: boolean;
  }) {
    await this.run(async () => {
      this.updateState({ type: "planning", stackName: this.stack.name });
      const terraform = await this.terraformClient();

      await terraform.plan({
        destroy: false,
        refreshOnly,
        parallelism: terraformParallelism,
        vars,
        varFiles,
        noColor,
      });
      this.updateState({ type: "planned", stackName: this.stack.name });
    });
  }

  public async deploy(opts: {
    refreshOnly?: boolean;
    terraformParallelism?: number;
    noColor?: boolean;
    vars?: string[];
    varFiles?: string[];
  }) {
    const { refreshOnly, terraformParallelism, noColor, vars, varFiles } = opts;
    await this.run(async () => {
      this.updateState({ type: "planning", stackName: this.stack.name });
      const terraform = await this.terraformClient();

      const { cancelled } = await terraform.deploy(
        {
          autoApprove: this.options.autoApprove,
          refreshOnly,
          parallelism: terraformParallelism,
          vars,
          varFiles,
          noColor,
        },
        (state) => {
          // state updates while apply runs that affect the UI
          if (state.type === "running" && !state.cancelled) {
            this.updateState({
              type: "deploying",
              stackName: this.stack.name,
            });
          } else if (state.type === "waiting for approval") {
            this.updateState({
              type: "waiting for stack approval",
              stackName: this.stack.name,
              approve: state.approve,
              reject: () => {
                state.reject();
                this.updateState({
                  type: "dismissed",
                  stackName: this.stack.name,
                });
              },
            });
          } else if (state.type === "waiting for sentinel override") {
            this.updateState({
              type: "waiting for stack sentinel override",
              stackName: this.stack.name,
              override: state.override,
              reject: () => {
                state.reject();
                this.updateState({
                  type: "dismissed",
                  stackName: this.stack.name,
                });
              },
            });
          } else if (state.type === "external approval reply") {
            this.updateState({
              type: "external stack approval reply",
              stackName: this.stack.name,
              approved: state.approved,
            });
          } else if (state.type === "external sentinel override reply") {
            this.updateState({
              type: "external stack sentinel override reply",
              stackName: this.stack.name,
              overridden: state.overridden,
            });
          }
        }
      );

      if (!cancelled) {
        const outputs = await terraform.output();
        const outputsByConstructId = getConstructIdsForOutputs(
          JSON.parse(this.stack.content),
          outputs
        );

        this.updateState({
          type: "deployed",
          stackName: this.stack.name,
          outputs,
          outputsByConstructId,
        });
      }
    });
  }

  public async destroy(opts: {
    terraformParallelism?: number;
    vars?: string[];
    varFiles?: string[];
    noColor?: boolean;
  }) {
    const { terraformParallelism, noColor, vars, varFiles } = opts;
    await this.run(async () => {
      this.updateState({ type: "planning", stackName: this.stack.name });
      const terraform = await this.terraformClient();
      const { cancelled } = await terraform.destroy(
        {
          autoApprove: this.options.autoApprove,
          parallelism: terraformParallelism,
          vars,
          varFiles,
          noColor,
        },
        (state) => {
          // state updates while apply runs that affect the UI
          if (state.type === "running" && !state.cancelled) {
            this.updateState({
              type: "destroying",
              stackName: this.stack.name,
            });
          } else if (state.type === "waiting for approval") {
            this.updateState({
              type: "waiting for stack approval",
              stackName: this.stack.name,
              approve: state.approve,
              reject: () => {
                state.reject();
                this.updateState({
                  type: "dismissed",
                  stackName: this.stack.name,
                });
              },
            });
          } else if (state.type === "waiting for sentinel override") {
            this.updateState({
              type: "waiting for stack sentinel override",
              stackName: this.stack.name,
              override: state.override,
              reject: () => {
                state.reject();
                this.updateState({
                  type: "dismissed",
                  stackName: this.stack.name,
                });
              },
            });
          } else if (state.type === "external approval reply") {
            this.updateState({
              type: "external stack approval reply",
              stackName: this.stack.name,
              approved: state.approved,
            });
          } else if (state.type === "external sentinel override reply") {
            this.updateState({
              type: "external stack sentinel override reply",
              stackName: this.stack.name,
              overridden: state.overridden,
            });
          }
        }
      );

      if (!cancelled)
        this.updateState({
          type: "destroyed",
          stackName: this.stack.name,
        });
    });
  }

  public async fetchOutputs() {
    await this.run(async () => {
      const terraform = await this.terraformClient();

      const outputs = await terraform.output();
      const outputsByConstructId = getConstructIdsForOutputs(
        JSON.parse(this.stack.content),
        outputs
      );
      this.updateState({
        type: "outputs fetched",
        stackName: this.stack.name,
        outputs,
        outputsByConstructId,
      });
    });

    return this.outputs;
  }

  public async stop() {
    this.stopped = true;
  }
}
