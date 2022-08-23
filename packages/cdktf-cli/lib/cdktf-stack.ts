import { SynthesizedStack } from "./synth-stack";
import { Terraform, TerraformPlan } from "./models/terraform";
import { getConstructIdsForOutputs, NestedTerraformOutputs } from "./output";
import { logger } from "./logging";
import { extractJsonLogIfPresent } from "./server/terraform-logs";
import { TerraformJson } from "./terraform-json";
import { TerraformCloud } from "./models/terraform-cloud";
import { TerraformCli } from "./models/terraform-cli";
import { Errors } from "./errors";

export type StackUpdate =
  | {
      type: "planning";
      stackName: string;
    }
  | {
      type: "planned";
      stackName: string;
      plan: TerraformPlan;
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

export type StackApprovalUpdate = {
  type: "waiting for stack approval";
  stackName: string;
  plan: TerraformPlan;
  approve: () => void;
  reject: () => void;
};

async function getTerraformClient(
  abortSignal: AbortSignal,
  stack: SynthesizedStack,
  isSpeculative: boolean,
  createTerraformLogHandler: (
    phase: string
  ) => (message: string, isError?: boolean) => void
): Promise<Terraform> {
  const parsedStack = JSON.parse(stack.content) as TerraformJson;

  if (parsedStack.terraform?.backend?.remote) {
    const tfClient = new TerraformCloud(
      abortSignal,
      stack,
      parsedStack.terraform.backend.remote,
      isSpeculative,
      createTerraformLogHandler
    );
    if (await tfClient.isRemoteWorkspace()) {
      return tfClient;
    }
  }

  if (parsedStack.terraform?.cloud) {
    const workspaces = parsedStack.terraform.cloud.workspaces;
    if (!("name" in workspaces)) {
      throw Errors.Usage(
        "The Cloud backend can not used with the cdktf-cli unless specified with a workspace name."
      );
    }

    const tfClient = new TerraformCloud(
      abortSignal,
      stack,
      { ...parsedStack.terraform.cloud, workspaces },
      isSpeculative,
      createTerraformLogHandler
    );
    if (await tfClient.isRemoteWorkspace()) {
      return tfClient;
    }
  }

  return new TerraformCli(abortSignal, stack, createTerraformLogHandler);
}

type CdktfStackOptions = {
  stack: SynthesizedStack;
  onUpdate: (update: StackUpdate | StackApprovalUpdate) => void;
  onLog?: (log: { message: string; isError: boolean }) => void;
  autoApprove?: boolean;
  abortSignal: AbortSignal;
};
type CdktfStackStates =
  | StackUpdate["type"]
  | StackApprovalUpdate["type"]
  | "idle"
  | "done"
  | "error";

export class CdktfStack {
  public currentPlan?: TerraformPlan;
  public stack: SynthesizedStack;
  public outputs?: Record<string, any>;
  public outputsByConstructId?: NestedTerraformOutputs;
  public stopped = false;
  public currentWorkPromise: Promise<void> | undefined;
  public readonly currentState: CdktfStackStates = "idle";

  constructor(public options: CdktfStackOptions) {
    this.stack = options.stack;
  }

  public get isPending(): boolean {
    return this.currentState === "idle" && !this.stopped;
  }
  public get isDone(): boolean {
    return (
      this.currentState === "done" ||
      this.currentState === "error" ||
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
      | { type: "idle" }
      | { type: "done" }
      | { type: "error" }
  ) {
    logger.debug(`[${this.stack.name}]: ${update.type}`);
    (this.currentState as CdktfStackStates) = update.type;
    switch (update.type) {
      case "idle":
      case "done":
      case "error":
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
    phase: string
  ): (message: string, isError?: boolean) => void {
    const onLog = this.options.onLog;
    return (msg: string, isError = false) => {
      const message = extractJsonLogIfPresent(msg);
      logger.debug(`[${this.options.stack.name}](${phase}): ${msg}`);
      if (onLog) {
        onLog({ message, isError });
      }
    };
  }

  private waitForApproval(plan: TerraformPlan) {
    return new Promise<boolean>((resolve) => {
      this.updateState({
        type: "waiting for stack approval",
        stackName: this.stack.name,
        plan: plan,
        approve: () => {
          resolve(true);
        },
        reject: () => {
          resolve(false);
        },
      });
    });
  }

  private async initalizeTerraform({
    isSpeculative,
  }: {
    isSpeculative: boolean;
  }) {
    const terraform = await getTerraformClient(
      this.options.abortSignal,
      this.options.stack,
      isSpeculative,
      this.createTerraformLogHandler.bind(this)
    );

    await terraform.init();

    return terraform;
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
      this.currentWorkPromise = undefined;
      this.updateState({
        type: "errored",
        stackName: this.stack.name,
        error: String(e),
      });
    }
    this.currentWorkPromise = undefined;
  }

  public async diff({ refreshOnly }: { refreshOnly?: boolean }) {
    await this.run(async () => {
      this.updateState({ type: "planning", stackName: this.stack.name });
      const terraform = await this.initalizeTerraform({ isSpeculative: true });

      const plan = await terraform.plan(false, refreshOnly);
      this.currentPlan = plan;
      this.updateState({ type: "planned", stackName: this.stack.name, plan });
    });
  }

  public async deploy(refreshOnly?: boolean) {
    await this.run(async () => {
      this.updateState({ type: "planning", stackName: this.stack.name });
      const terraform = await this.initalizeTerraform({ isSpeculative: false });

      const plan = await terraform.plan(false, refreshOnly);
      this.updateState({ type: "planned", stackName: this.stack.name, plan });

      const approved = this.options.autoApprove
        ? true
        : await this.waitForApproval(plan);

      if (!approved) {
        this.updateState({ type: "dismissed", stackName: this.stack.name });
        return;
      }

      this.updateState({ type: "deploying", stackName: this.stack.name });
      if (plan.needsApply) {
        await terraform.deploy(plan.planFile, refreshOnly);
      }

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
    });
  }

  public async destroy() {
    await this.run(async () => {
      this.updateState({ type: "planning", stackName: this.stack.name });
      const terraform = await this.initalizeTerraform({ isSpeculative: false });

      const plan = await terraform.plan(true);
      this.updateState({ type: "planned", stackName: this.stack.name, plan });

      const approved = this.options.autoApprove
        ? true
        : await this.waitForApproval(plan);
      if (!approved) {
        this.updateState({ type: "dismissed", stackName: this.stack.name });
        return;
      }

      this.updateState({ type: "destroying", stackName: this.stack.name });
      await terraform.destroy();

      this.updateState({
        type: "destroyed",
        stackName: this.stack.name,
      });
    });
  }

  public async fetchOutputs() {
    await this.run(async () => {
      const terraform = await this.initalizeTerraform({ isSpeculative: false });

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
