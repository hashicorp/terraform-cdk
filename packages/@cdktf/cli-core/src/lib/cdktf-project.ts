// Copyright (c) HashiCorp, Inc
// SPDX-License-Identifier: MPL-2.0
import {
  Errors,
  ensureAllSettledBeforeThrowing,
  logger,
  readConfigSync,
  sendTelemetry,
} from "@cdktf/commons";
import { SynthesizedStack, SynthOrigin, SynthStack } from "./synth-stack";
import { printAnnotations } from "./synth";
import {
  CdktfStack,
  ExternalStackApprovalUpdate,
  ExternalStackSentinelOverrideUpdate,
  StackApprovalUpdate,
  StackSentinelOverrideUpdate,
  StackUpdate,
  StackUserInputUpdate,
} from "./cdktf-stack";
import { NestedTerraformOutputs } from "./output";
import { createEnhanceLogMessage } from "./execution-logs";
import {
  checkIfAllDependantsAreIncluded,
  checkIfAllDependenciesAreIncluded,
  findAllNestedDependantStacks,
  getMultipleStacks,
  getSingleStack,
  getStackWithNoUnmetDependants,
  getStackWithNoUnmetDependencies,
} from "./helpers/stack-helpers";
import { CdktfProjectIOHandler } from "./cdktf-project-io-handler";

type MultiStackApprovalUpdate = {
  type: "waiting for approval";
  stackName: string;
  approve: () => void;
  dismiss: () => void;
  stop: () => void;
};

type MultiStackSentinelOverrideUpdate = {
  type: "waiting for sentinel override";
  stackName: string;
  override: () => void;
  reject: () => void;
};

export type MultiStackUpdate =
  | MultiStackApprovalUpdate
  | MultiStackSentinelOverrideUpdate;

export type ProjectUpdate =
  | {
      type: "synthesizing";
    }
  | {
      type: "synthesized";
      stacks: SynthesizedStack[];
      errorMessage?: string;
    }
  | StackUpdate
  | MultiStackUpdate;

export type SingleStackOptions = {
  stackName?: string;
};

export type MultipleStackOptions = {
  stackNames?: string[];
};

export type SkipSynthOptions = {
  skipSynth?: boolean;
};

export type FetchOutputOptions = SkipSynthOptions & MultipleStackOptions;

export type AutoApproveOptions = {
  autoApprove?: boolean;
};

export type DiffOptions = SingleStackOptions &
  SkipSynthOptions & {
    refreshOnly?: boolean;
    terraformParallelism?: number;
    vars?: string[];
    varFiles?: string[];
    noColor?: boolean;
    migrateState?: boolean;
    skipSynth?: boolean;
  };

export type MutationOptions = MultipleStackOptions &
  SkipSynthOptions &
  AutoApproveOptions & {
    refreshOnly?: boolean;
    ignoreMissingStackDependencies?: boolean;
    parallelism?: number;
    terraformParallelism?: number;
    vars?: string[];
    varFiles?: string[];
    noColor?: boolean;
    migrateState?: boolean;
  };

export type LogMessage = {
  stackName: string;
  messageWithConstructPath?: string;
  message: string;
};

// Stores a log value of a certain type until it can be sent
type Buffered<T, V> = {
  cb: (item: T) => void;
  value: T;
  type: V;
};

export function isWaitingForUserInputUpdate(
  update: ProjectUpdate | StackUpdate
) {
  return ["waiting for approval", "waiting for sentinel override"].includes(
    update.type
  );
}

export type ProjectEvent =
  | Buffered<ProjectUpdate, "projectUpdate">
  | Buffered<LogMessage, "logMessage">;
export type CdktfProjectOptions = {
  synthCommand: string;
  outDir: string;
  onUpdate: (update: ProjectUpdate) => void;
  onLog?: (log: LogMessage) => void;
  workingDirectory?: string;
  synthOrigin?: SynthOrigin;
  hcl?: boolean;
};
export class CdktfProject {
  public stacks?: SynthesizedStack[];
  public hardAbort: () => void;

  private synthCommand: string;
  private outDir: string;
  private workingDirectory: string;
  private onUpdate: (update: ProjectUpdate) => void;
  private onLog?: (log: LogMessage) => void;
  private abortSignal: AbortSignal;
  private synthOrigin?: SynthOrigin;
  private hcl?: boolean;

  // Set during deploy / destroy
  public stacksToRun: CdktfStack[] = [];
  // This means sth different in deploy / destroy
  private stopAllStacksThatCanNotRunWithout: (stackName: string) => void =
    () => {}; // eslint-disable-line @typescript-eslint/no-empty-function

  private ioHandler: CdktfProjectIOHandler;

  constructor({
    synthCommand,
    outDir,
    onUpdate,
    onLog,
    workingDirectory = process.cwd(),
    synthOrigin,
    hcl = false,
  }: CdktfProjectOptions) {
    this.synthCommand = synthCommand;
    this.outDir = outDir;
    this.workingDirectory = workingDirectory;
    this.onUpdate = onUpdate;
    this.onLog = onLog;
    const ac = new AbortController();
    this.abortSignal = ac.signal;
    this.synthOrigin = synthOrigin;
    this.hcl = hcl;

    this.hardAbort = ac.abort.bind(ac);
    this.ioHandler = new CdktfProjectIOHandler();
  }

  private stopAllStacks() {
    this.stacksToRun.forEach((stack) => stack.stop());
    this.ioHandler.filterUserInputEventsFromBuffer();
  }

  private handleUserUpdate<
    T extends MultiStackUpdate,
    V extends StackUserInputUpdate
  >(
    update: StackUserInputUpdate,
    operations: Record<string, (update: V) => void>,
    originalCallback: (updateToSend: ProjectUpdate) => void,
    eventType: T["type"]
  ) {
    const callbacks = (update: V) =>
      Object.fromEntries(
        Object.entries(operations).map(([key, value]) => {
          return [
            key,
            // This is passed in to make typescript happy only
            // eslint-disable-next-line @typescript-eslint/no-unused-vars
            (_: V) => {
              value(update);

              // We need to defer these calls for the case that approve() is instantly invoked
              // in the listener that receives these callbacks as it otherwise would already
              // remove the "waiting for stack approval" event from the buffer before we even
              // set waitingForApproval to true (at the end of this if statement) which results
              // in buffered updates which will never unblock
              setTimeout(
                () => this.ioHandler.resumeAfterUserInput(update.stackName),
                0
              );
            },
          ];
        })
      );

    // always send to buffer, as resumeAfterUserInput() always expects a matching event
    this.ioHandler.pushEvent({
      cb: originalCallback,
      value: {
        type: eventType,
        stackName: update.stackName,
        ...callbacks(update as V),
      } as T,
      type: "projectUpdate",
    });

    // if we aren't already waiting, this needs to go to cb() too to arrive at the UI
    if (!this.ioHandler.isWaitingForUserInput()) {
      originalCallback({
        type: eventType,
        stackName: update.stackName,
        ...callbacks(update as V),
      } as T);
    }
  }

  private handleUserInputProcess(cb: (updateToSend: ProjectUpdate) => void) {
    return (
      update:
        | StackUpdate
        | StackApprovalUpdate
        | ExternalStackApprovalUpdate
        | StackSentinelOverrideUpdate
        | ExternalStackSentinelOverrideUpdate
    ) => {
      if (update.type === "external stack approval reply") {
        if (!update.approved) {
          this.stopAllStacksThatCanNotRunWithout(update.stackName);
        }
        this.ioHandler.resumeAfterUserInput(update.stackName);
        return; // aka don't send this event to any buffer
      }
      if (update.type === "external stack sentinel override reply") {
        if (!update.overridden) {
          this.stopAllStacksThatCanNotRunWithout(update.stackName);
        }
        this.ioHandler.resumeAfterUserInput(update.stackName);
        return; // aka don't send this event to any buffer
      }

      if (
        update.type === "waiting for stack approval" ||
        update.type === "waiting for stack sentinel override"
      ) {
        if (update.type === "waiting for stack approval") {
          this.handleUserUpdate<MultiStackApprovalUpdate, StackApprovalUpdate>(
            update,
            {
              approve: (update) => update.approve(),
              dismiss: (update) => {
                update.reject();
                this.stopAllStacksThatCanNotRunWithout(update.stackName);
              },
              stop: (update) => {
                update.reject();
                this.stopAllStacks();
              },
            },
            cb,
            "waiting for approval"
          );
        } else if (update.type === "waiting for stack sentinel override") {
          this.handleUserUpdate<
            MultiStackSentinelOverrideUpdate,
            StackSentinelOverrideUpdate
          >(
            update,
            {
              override: (update) => {
                update.override();
              },
              reject: (update) => {
                update.reject();
                this.stopAllStacksThatCanNotRunWithout(update.stackName);
              },
            },
            cb,
            "waiting for sentinel override"
          );
        }

        this.ioHandler.awaitUserInput();
      } else {
        if (this.ioHandler.isWaitingForUserInput()) {
          this.ioHandler.pushEvent({
            cb,
            value: update,
            type: "projectUpdate",
          });
        } else {
          cb(update as ProjectUpdate);
        }
      }
    };
  }

  public getStackExecutor(
    stack: SynthesizedStack,
    opts: AutoApproveOptions = {}
  ) {
    const enhanceLogMessage = createEnhanceLogMessage(stack);
    const onLog = this.ioHandler.bufferWhileAwaitingUserInput(this.onLog);
    return new CdktfStack({
      ...opts,
      stack,
      onUpdate: this.handleUserInputProcess(this.onUpdate),
      onLog: onLog
        ? ({ message }) =>
            onLog({
              stackName: stack.name,
              message,
              messageWithConstructPath: enhanceLogMessage(message),
            })
        : undefined,
      abortSignal: this.abortSignal,
    });
  }

  public get outputsByConstructId() {
    return this.stacksToRun.reduce(
      (acc, stack) => ({
        ...acc,
        ...stack.outputsByConstructId,
      }),
      {} as NestedTerraformOutputs
    );
  }

  public async synth(noColor?: boolean) {
    this.onUpdate({
      type: "synthesizing",
    });

    const stacks = await SynthStack.synth(
      this.abortSignal as any,
      this.synthCommand,
      this.outDir,
      this.workingDirectory,
      false,
      noColor,
      this.synthOrigin,
      this.hcl
    );

    printAnnotations(stacks);

    this.onUpdate({
      type: "synthesized",
      stacks,
    });

    return stacks;
  }

  public async readSynthesizedStacks() {
    const stacks = await SynthStack.readSynthesizedStacks(this.outDir);

    printAnnotations(stacks);

    this.onUpdate({
      type: "synthesized",
      stacks,
    });
    return stacks;
  }

  public async diff(opts: DiffOptions = {}) {
    const stacks = opts.skipSynth
      ? await this.readSynthesizedStacks()
      : await this.synth(opts.noColor);
    const stack = this.getStackExecutor(
      getSingleStack(stacks, opts?.stackName, "diff")
    );
    await stack.initalizeTerraform(opts.noColor);

    try {
      await stack.diff(opts);
    } catch (e: any) {
      throw Errors.External(
        `Stack failed to plan: ${stack.stack.name}. Please check the logs for more information.`,
        e
      );
    }
    if (stack.error) {
      throw Errors.External(
        `Stack failed to plan: ${stack.stack.name}. Please check the logs for more information.`,
        new Error(stack.error)
      );
    }

    try {
      await this.projectTelemetry("diff", {
        stackMetadata: stacks.map((stack) =>
          JSON.parse(stack.content)["//"]
            ? JSON.parse(stack.content)["//"].metadata
            : {}
        ),
        errors: stack.error,
        requiredProviders: stacks.map((stack: any) =>
          JSON.parse(stack.content)["terraform"]
            ? JSON.parse(stack.content)["terraform"].required_providers
            : {}
        ),
      });
    } catch (e) {
      logger.debug("Failed to send telemetry", e);
    }
  }

  private async execute(
    method: "deploy" | "destroy",
    next: () => Promise<CdktfStack | undefined>,
    opts: MutationOptions
  ) {
    // We only support refresh only on deploy, a bit of a leaky abstraction here
    if (opts.refreshOnly && method !== "deploy") {
      throw Errors.Internal(`Refresh only is only supported on deploy`);
    }
    const maxParallelRuns =
      !opts.parallelism || opts.parallelism < 0 ? Infinity : opts.parallelism;
    const allExecutions = [];

    await this.initializeStacksToRunInSerial(opts.noColor);
    while (this.stacksToRun.filter((stack) => stack.isPending).length > 0) {
      const runningStacks = this.stacksToRun.filter((stack) => stack.isRunning);
      if (runningStacks.length >= maxParallelRuns) {
        await Promise.race(runningStacks.map((s) => s.currentWorkPromise));
        continue;
      }
      try {
        const nextRunningExecutor = await next();
        if (!nextRunningExecutor) {
          // In this case we have no pending stacks, but we also can not find a new executor
          break;
        }
        const promise =
          method === "deploy"
            ? nextRunningExecutor.deploy(opts)
            : nextRunningExecutor.destroy(opts);

        allExecutions.push(promise);
      } catch (e) {
        // await next() threw an error because a stack failed to apply/destroy
        // wait for all other currently running stacks to complete before propagating that error
        logger.debug("Encountered an error while awaiting stack to finish", e);
        const openStacks = this.stacksToRun.filter(
          (ex) => ex.currentWorkPromise
        );
        logger.debug("Waiting for still running stacks to finish:", openStacks);
        await Promise.allSettled(openStacks.map((ex) => ex.currentWorkPromise));
        logger.debug(
          "Done waiting for still running stacks. All pending work finished"
        );
        throw e;
      }
    }
    // We end the loop when all stacks are started, now we need to wait for them to be done
    // We wait for all work to finish even if one of the promises threw an error.
    await ensureAllSettledBeforeThrowing(
      Promise.all(allExecutions),
      allExecutions
    );
  }

  public async deploy(opts: MutationOptions = {}) {
    const stacks = opts.skipSynth
      ? await this.readSynthesizedStacks()
      : await this.synth(opts.noColor);
    const stacksToRun = getMultipleStacks(stacks, opts.stackNames, "deploy");
    if (!opts.ignoreMissingStackDependencies) {
      checkIfAllDependenciesAreIncluded(stacksToRun);
    }

    this.stopAllStacksThatCanNotRunWithout = (stackName: string) => {
      findAllNestedDependantStacks(this.stacksToRun, stackName).forEach(
        (stack) => stack.stop()
      );
    };

    this.stacksToRun = stacksToRun.map((stack) =>
      this.getStackExecutor(stack, opts)
    );

    const next = opts.ignoreMissingStackDependencies
      ? () =>
          Promise.resolve(
            this.stacksToRun.filter((stack) => stack.isPending)[0]
          )
      : () => getStackWithNoUnmetDependencies(this.stacksToRun);

    await this.execute("deploy", next, opts);

    const unprocessedStacks = this.stacksToRun.filter(
      (executor) => executor.isPending
    );
    if (unprocessedStacks.length > 0) {
      throw Errors.External(
        `Some stacks failed to deploy: ${unprocessedStacks
          .map((s) => s.stack.name)
          .join(", ")}. Please check the logs for more information.`
      );
    }

    try {
      await this.projectTelemetry("deploy", {
        stackMetadata: stacksToRun.map((stack) =>
          JSON.parse(stack.content)["//"]
            ? JSON.parse(stack.content)["//"].metadata
            : {}
        ),
        failedStacks: unprocessedStacks.map((stack) => stack.error),
        requiredProviders: stacksToRun.map((stack: any) =>
          JSON.parse(stack.content)["terraform"]
            ? JSON.parse(stack.content)["terraform"].required_providers
            : {}
        ),
      });
    } catch (e) {
      logger.debug("Failed to send telemetry", e);
    }
  }

  public async destroy(opts: MutationOptions = {}) {
    const stacks = opts.skipSynth
      ? await this.readSynthesizedStacks()
      : await this.synth(opts.noColor);
    const stacksToRun = getMultipleStacks(stacks, opts.stackNames, "destroy");

    if (!opts.ignoreMissingStackDependencies) {
      checkIfAllDependantsAreIncluded(stacksToRun, stacks);
    }

    this.stopAllStacksThatCanNotRunWithout = (stackName: string) => {
      const stackExecutor = this.stacksToRun.find(
        (s) => s.stack.name === stackName
      );
      if (!stackExecutor) {
        throw Errors.Internal(
          `Could not find stack "${stackName}" that was stopped`
        );
      }

      stackExecutor.stack.dependencies.forEach((dependant) => {
        this.stopAllStacksThatCanNotRunWithout(dependant);

        const dependantStack = this.stacksToRun.find(
          (s) => s.stack.name === dependant
        );
        if (!dependantStack) {
          throw Errors.Internal(
            `Could not find stack "${dependant}" that was stopped`
          );
        }

        dependantStack.stop();
      });
    };
    this.stacksToRun = stacksToRun.map((stack) =>
      this.getStackExecutor(stack, opts)
    );
    const next = opts.ignoreMissingStackDependencies
      ? () =>
          Promise.resolve(
            this.stacksToRun.filter((stack) => stack.currentState !== "done")[0]
          )
      : () => getStackWithNoUnmetDependants(this.stacksToRun);

    await this.execute("destroy", next, opts);

    const unprocessedStacks = this.stacksToRun.filter(
      (executor) => executor.isPending
    );
    if (unprocessedStacks.length > 0) {
      throw Errors.External(
        `Some stacks failed to destroy: ${unprocessedStacks
          .map((s) => s.stack.name)
          .join(", ")}. Please check the logs for more information.`
      );
    }

    try {
      await this.projectTelemetry("destroy", {
        stackMetadata: stacksToRun.map((stack) =>
          JSON.parse(stack.content)["//"]
            ? JSON.parse(stack.content)["//"].metadata
            : {}
        ),
        failedStacks: unprocessedStacks.map((stack) => stack.error),
        requiredProviders: stacksToRun.map((stack: any) =>
          JSON.parse(stack.content)["terraform"]
            ? JSON.parse(stack.content)["terraform"].required_providers
            : {}
        ),
      });
    } catch (e) {
      logger.debug("Failed to send telemetry", e);
    }
  }

  public async projectTelemetry(command: string, payload: any): Promise<void> {
    const config = readConfigSync();
    await sendTelemetry(command, {
      ...payload,
      language: config.language,
    });
  }

  public async fetchOutputs(opts: FetchOutputOptions) {
    const stacks = opts.skipSynth
      ? await this.readSynthesizedStacks()
      : await this.synth();

    const stacksToRun = getMultipleStacks(
      stacks,
      opts.stackNames || [],
      "deploy"
    );

    if (stacksToRun.length === 0) {
      throw new Error("No stacks to fetch outputs for specified");
    }

    this.stacksToRun = stacksToRun.map((stack) =>
      // Options are empty, because MultipleStackOptions doesn't have any relevant
      // options for `getStackExecutor`, hence defaults are fine
      this.getStackExecutor(stack, {})
    );

    await this.initializeStacksToRunInSerial();
    const outputs = await Promise.all(
      this.stacksToRun.map(async (s) => {
        const output = await s.fetchOutputs();
        return {
          [s.stack.name]: output,
        };
      })
    );

    return outputs.reduce(
      (acc, curr) => ({ ...acc, ...curr }),
      {}
    ) as NestedTerraformOutputs;
  }

  // Serially run terraform init to prohibit text file busy errors for the cache files
  private async initializeStacksToRunInSerial(
    noColor?: boolean
  ): Promise<void> {
    for (const stack of this.stacksToRun) {
      await stack.initalizeTerraform(noColor);
    }
  }
}
