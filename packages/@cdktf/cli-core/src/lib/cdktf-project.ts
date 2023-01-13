// Copyright (c) HashiCorp, Inc
// SPDX-License-Identifier: MPL-2.0
import { AbortController, AbortSignal } from "node-abort-controller"; // polyfill until we update to node 16
import { Errors, ensureAllSettledBeforeThrowing, logger } from "@cdktf/commons";
import { SynthesizedStack, SynthStack } from "./synth-stack";
import { printAnnotations } from "./synth";
import {
  CdktfStack,
  ExternalStackApprovalUpdate,
  StackApprovalUpdate,
  StackSentinelOverrideUpdate,
  StackUpdate,
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

type MultiStackUpdate =
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

export type AutoApproveOptions = {
  autoApprove?: boolean;
};

export type DiffOptions = SingleStackOptions & {
  refreshOnly?: boolean;
  terraformParallelism?: number;
  vars?: string[];
  varFiles?: string[];
  noColor?: boolean;
};

export type MutationOptions = MultipleStackOptions &
  AutoApproveOptions & {
    refreshOnly?: boolean;
    ignoreMissingStackDependencies?: boolean;
    parallelism?: number;
    terraformParallelism?: number;
    vars?: string[];
    varFiles?: string[];
    noColor?: boolean;
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

export type CdktfProjectOptions = {
  synthCommand: string;
  outDir: string;
  onUpdate: (update: ProjectUpdate) => void;
  onLog?: (log: LogMessage) => void;
  workingDirectory?: string;
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

  // Set during deploy / destroy
  public stacksToRun: CdktfStack[] = [];
  // This means sth different in deploy / destroy
  private stopAllStacksThatCanNotRunWithout: (stackName: string) => void =
    () => {}; // eslint-disable-line @typescript-eslint/no-empty-function
  // Pauses all progress / status events from being forwarded to the user
  // If set from true to false, the events will be sent through the channels they came in
  // (until a waiting for approval event is sent)
  private waitingForUserInput = false;
  private eventBuffer: Array<
    | Buffered<ProjectUpdate, "projectUpdate">
    | Buffered<LogMessage, "logMessage">
  > = [];

  constructor({
    synthCommand,
    outDir,
    onUpdate,
    onLog,
    workingDirectory = process.cwd(),
  }: CdktfProjectOptions) {
    this.synthCommand = synthCommand;
    this.outDir = outDir;
    this.workingDirectory = workingDirectory;
    this.onUpdate = onUpdate;
    this.onLog = onLog;
    const ac = new AbortController();
    this.abortSignal = ac.signal;

    this.hardAbort = ac.abort.bind(ac);
  }

  private isWaitingForUserInputUpdate(
    update:
      | ProjectUpdate
      | StackUpdate
      | StackApprovalUpdate
      | StackSentinelOverrideUpdate
  ) {
    return [
      "waiting for stack approval",
      "waiting for stack sentinel override",
    ].includes(update.type);
  }

  private stopAllStacks() {
    this.stacksToRun.forEach((stack) => stack.stop());
    this.eventBuffer = this.eventBuffer.filter(
      (event) =>
        event.type === "projectUpdate"
          ? !this.isWaitingForUserInputUpdate(event.value) // we want to filter out the waiting for approval events
          : true // we want all other types
    );
  }

  private awaitUserInput() {
    this.waitingForUserInput = true;
  }

  private resumeAfterUserInput(stackName: string) {
    // remove waiting for approval event that should be resumed
    this.eventBuffer = this.eventBuffer.filter(
      (event) =>
        !(
          event.type === "projectUpdate" &&
          this.isWaitingForUserInputUpdate(event.value) &&
          (event.value as MultiStackUpdate).stackName === stackName
        )
    );

    if (
      this.eventBuffer.length &&
      this.eventBuffer[0].type === "projectUpdate" &&
      this.isWaitingForUserInputUpdate(this.eventBuffer[0].value)
    ) {
      // we are still waiting on approval for the current stack
      // we removed a future "waiting for approval" event for some other stack
      return;
    }

    // We first need to flush all events, we can not resume if there is a new waiting for approval update
    let event = this.eventBuffer.shift();
    while (event) {
      if (event.type === "projectUpdate") {
        event.cb(event.value);
        if (this.isWaitingForUserInputUpdate(event.value)) {
          // We have to wait for user input again, therefore we can not resume
          return;
        }
      }
      if (event.type === "logMessage") {
        event.cb(event.value);
      }

      event = this.eventBuffer.shift();
    }

    // If we reach this point there was no waiting for user input event, so we can safely resume
    this.waitingForUserInput = false;
  }

  private handleUserInputProcess(cb: (updateToSend: ProjectUpdate) => void) {
    return (
      update:
        | StackUpdate
        | StackApprovalUpdate
        | ExternalStackApprovalUpdate
        | StackSentinelOverrideUpdate
    ) => {
      const bufferCb = (bufferedUpdate: ProjectUpdate) => {
        this.eventBuffer.push({
          cb,
          value: bufferedUpdate,
          type: "projectUpdate",
        });
      };

      if (update.type === "external stack approval reply") {
        if (!update.approved) {
          this.stopAllStacksThatCanNotRunWithout(update.stackName);
        }
        this.resumeAfterUserInput(update.stackName);
        return; // aka don't send this event to any buffer
      }

      const bufferableCb = this.waitingForUserInput ? bufferCb : cb;

      if (this.isWaitingForUserInputUpdate(update)) {
        if (update.type === "waiting for stack approval") {
          const callbacks = (update: StackApprovalUpdate) => ({
            approve: () => {
              update.approve();
              // We need to defer these calls for the case that approve() is instantly invoked
              // in the listener that receives these callbacks as it otherwise would already
              // remove the "waiting for stack approval" event from the buffer before we even
              // set waitingForApproval to true (at the end of this if statement) which results
              // in buffered updates which will never unblock
              setTimeout(() => this.resumeAfterUserInput(update.stackName), 0);
            },
            dismiss: () => {
              update.reject();

              this.stopAllStacksThatCanNotRunWithout(update.stackName);
              setTimeout(() => this.resumeAfterUserInput(update.stackName), 0);
            },
            stop: () => {
              update.reject();
              this.stopAllStacks();
              setTimeout(() => this.resumeAfterUserInput(update.stackName), 0);
            },
          });

          // always send to buffer, as resumeAfterUserInput() always expects a matching event
          bufferCb({
            type: "waiting for approval",
            stackName: update.stackName,
            ...callbacks(update),
          });
          // if we aren't already waiting, this needs to go to cb() too to arrive at the UI
          if (!this.waitingForUserInput) {
            cb({
              type: "waiting for approval",
              stackName: update.stackName,
              ...callbacks(update),
            });
          }
        } else if (update.type === "waiting for stack sentinel override") {
          const callbacks = (update: StackSentinelOverrideUpdate) => ({
            override: () => {
              console.error("Sentinel override approved", {
                stackName: update.stackName,
              });
              update.override();
              // We need to defer these calls for the case that override() is instantly invoked
              // in the listener that receives these callbacks as it otherwise would already
              // remove the waiting event from the buffer before we even
              // set waitingForUserInput to true (at the end of this if statement) which results
              // in buffered updates which will never unblock
              setTimeout(() => this.resumeAfterUserInput(update.stackName), 0);
            },
            reject: () => {
              update.reject();

              this.stopAllStacksThatCanNotRunWithout(update.stackName);
              setTimeout(() => this.resumeAfterUserInput(update.stackName), 0);
            },
          });

          // always send to buffer, as resumeAfterUserInput() always expects a matching "waiting for approval" event
          bufferCb({
            type: "waiting for sentinel override",
            stackName: update.stackName,
            ...callbacks(update),
          });
          // if we aren't already waiting, this needs to go to cb() too to arrive at the UI
          if (!this.waitingForUserInput) {
            cb({
              type: "waiting for sentinel override",
              stackName: update.stackName,
              ...callbacks(update),
            });
          }
        } else {
          throw Errors.Internal(`Unexpected update type: ${update.type}`);
        }

        this.awaitUserInput();
      } else {
        bufferableCb(update as ProjectUpdate);
      }
    };
  }

  private bufferWhileAwaitingUserInput(cb?: (msg: LogMessage) => void) {
    if (!cb) {
      return undefined;
    }

    return (msg: LogMessage) => {
      if (this.waitingForUserInput) {
        this.eventBuffer.push({
          cb,
          value: msg,
          type: "logMessage",
        });
      } else {
        cb(msg);
      }
    };
  }

  public getStackExecutor(
    stack: SynthesizedStack,
    opts: AutoApproveOptions = {}
  ) {
    const enhanceLogMessage = createEnhanceLogMessage(stack);
    const onLog = this.bufferWhileAwaitingUserInput(this.onLog);
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

  public async synth() {
    this.onUpdate({
      type: "synthesizing",
    });
    const stacks = await SynthStack.synth(
      this.abortSignal,
      this.synthCommand,
      this.outDir,
      this.workingDirectory
    );

    printAnnotations(stacks);

    this.onUpdate({
      type: "synthesized",
      stacks,
    });

    return stacks;
  }

  public async diff(opts: DiffOptions = {}) {
    const stacks = await this.synth();
    const stack = this.getStackExecutor(
      getSingleStack(stacks, opts?.stackName, "diff")
    );

    try {
      await stack.diff(opts);
    } catch (e) {
      throw Errors.External(
        `Stack failed to plan: ${stack.stack.name}. Please check the logs for more information.`
      );
    }
    if (stack.error) {
      throw Errors.External(
        `Stack failed to plan: ${stack.stack.name}. Please check the logs for more information.`
      );
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
    const stacks = await this.synth();
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
  }

  public async destroy(opts: MutationOptions = {}) {
    const stacks = await this.synth();
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
  }

  public async fetchOutputs(opts: MultipleStackOptions) {
    const stacks = await this.synth();

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
}
