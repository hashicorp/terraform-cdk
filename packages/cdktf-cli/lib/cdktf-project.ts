// Copyright (c) HashiCorp, Inc
// SPDX-License-Identifier: MPL-2.0
import { AbortController } from "node-abort-controller"; // polyfill until we update to node 16
import { SynthesizedStack, SynthStack } from "./synth-stack";
import { printAnnotations } from "./synth";
import { CdktfStack, StackApprovalUpdate, StackUpdate } from "./cdktf-stack";
import { Errors } from "./errors";
import { TerraformPlan } from "./models/terraform";
import { NestedTerraformOutputs } from "./output";
import { logger } from "./logging";
import minimatch from "minimatch";
import { createEnhanceLogMessage } from "./execution-logs";
import { ensureAllSettledBeforeThrowing } from "./util";

type MultiStackApprovalUpdate = {
  type: "waiting for approval";
  stackName: string;
  plan: TerraformPlan;
  approve: () => void;
  dismiss: () => void;
  stop: () => void;
};

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
  | MultiStackApprovalUpdate;

function getSingleStack(
  stacks: SynthesizedStack[],
  stackName?: string,
  targetAction?: string
) {
  if (!stacks) {
    throw Errors.Internal(
      "Trying to access a stack before it has been synthesized"
    );
  }

  if (stackName) {
    const stack = stacks.find((s) => s.name === stackName);
    if (!stack) {
      throw Errors.Usage("Could not find stack: " + stackName);
    }

    return stack;
  }

  if (stacks.length === 1) {
    return stacks[0];
  }

  throw Errors.Usage(
    `Found more than one stack, please specify a target stack. Run cdktf ${
      targetAction || "<verb>"
    } <stack> with one of these stacks: ${stacks
      .map((s) => s.name)
      .join(", ")} `
  );
}

export function getMultipleStacks(
  stacks: SynthesizedStack[],
  patterns?: string[],
  targetAction?: string
) {
  if (!patterns || !patterns.length) {
    if (stacks.length === 1) {
      return [stacks[0]];
    }
    throw Errors.Usage(
      `Found more than one stack, please specify a target stack. Run cdktf ${
        targetAction || "<verb>"
      } <stack> with one of these stacks: ${stacks
        .map((s) => s.name)
        .join(", ")} `
    );
  }

  return patterns.flatMap((pattern) => {
    const matchingStacks = stacks.filter((stack) =>
      minimatch(stack.name, pattern)
    );

    if (matchingStacks.length === 0) {
      throw Errors.Usage(`Could not find stack for pattern '${pattern}'`);
    }

    return matchingStacks;
  });
}

// Returns the first stack that has no unmet dependencies
// An unmet dependency is a dependency that has not been deployed yet
// If there is no unfinished stack, returns undefined
// If there is no stack ready to be worked on, it returns a promise that will resolve as soon as there is a follow-up stack available
export async function getStackWithNoUnmetDependencies(
  stackExecutors: CdktfStack[]
): Promise<CdktfStack | undefined> {
  logger.debug("Checking for stacks with unmet dependencies");
  logger.debug("stack executors:", stackExecutors);
  const pendingStacks = stackExecutors.filter((executor) => executor.isPending);
  logger.debug("pending stacks:", stackExecutors);

  if (pendingStacks.length === 0) {
    return undefined;
  }

  const currentlyReadyStack = pendingStacks.find((executor) =>
    executor.stack.dependencies.every(
      (dependency) =>
        stackExecutors.find((executor) => executor.stack.name === dependency)
          ?.currentState === "done"
    )
  );

  if (currentlyReadyStack) {
    logger.debug("Found a stack with no unmet dependencies");
    return currentlyReadyStack;
  }

  const stackExecutionPromises = stackExecutors
    .filter((ex) => ex.currentWorkPromise)
    .map((ex) => ex.currentWorkPromise);

  logger.debug(
    `${stackExecutionPromises.length} stacks are currently busy, waiting for one to finish`
  );

  if (!stackExecutionPromises.length) {
    return undefined;
  }

  await ensureAllSettledBeforeThrowing(
    Promise.race(stackExecutionPromises),
    stackExecutionPromises
  );

  return await getStackWithNoUnmetDependencies(stackExecutors);
}

function findAllDependantStacks(
  stackExecutors: CdktfStack[],
  stackName: string
): CdktfStack[] {
  return stackExecutors.filter((innerExecutor) =>
    innerExecutor.stack.dependencies.includes(stackName)
  );
}

function findAllNestedDependantStacks(
  stackExecutors: CdktfStack[],
  stackName: string,
  knownDependantStackNames: Set<string> = new Set()
): CdktfStack[] {
  const dependantStacks = findAllDependantStacks(stackExecutors, stackName);
  dependantStacks.forEach((stack) => {
    if (knownDependantStackNames.has(stack.stack.name)) {
      return;
    }

    knownDependantStackNames.add(stack.stack.name);
    findAllNestedDependantStacks(
      stackExecutors,
      stack.stack.name,
      knownDependantStackNames
    );
  });

  return stackExecutors.filter((executor) =>
    knownDependantStackNames.has(executor.stack.name)
  );
}

// Returns the first stack that has no dependents that need to be destroyed first
async function getStackWithNoUnmetDependants(
  stackExecutors: CdktfStack[]
): Promise<CdktfStack | undefined> {
  logger.debug("Checking for stacks with unmet dependants");
  logger.debug("stack executors:", stackExecutors);
  const pendingStacks = stackExecutors.filter((executor) => executor.isPending);
  logger.debug("pending stacks:", stackExecutors);

  if (pendingStacks.length === 0) {
    return undefined;
  }

  const currentlyReadyStack = pendingStacks.find((executor) => {
    const dependantStacks = findAllDependantStacks(
      stackExecutors,
      executor.stack.name
    );
    return dependantStacks.every((stack) => stack.currentState === "done");
  });

  if (currentlyReadyStack) {
    logger.debug("Found a stack with no unmet dependants");
    return currentlyReadyStack;
  }
  const stackExecutionPromises = stackExecutors
    .filter((ex) => ex.currentWorkPromise)
    .map((ex) => ex.currentWorkPromise);

  logger.debug(
    `${stackExecutionPromises.length} stacks are currently busy, waiting for one to finish`
  );
  if (!stackExecutionPromises.length) {
    return undefined;
  }

  await Promise.race(stackExecutionPromises);
  return await getStackWithNoUnmetDependants(stackExecutors);
}

// Throws an error if there is a dependant stack that is not included
function checkIfAllDependantsAreIncluded(
  stacksToRun: SynthesizedStack[],
  allStacks: SynthesizedStack[]
) {
  const allDependants = new Set<string>();
  stacksToRun
    .map((stack) =>
      allStacks.filter((s) => s.dependencies.includes(stack.name))
    )
    .flat()
    .forEach((dependant) => allDependants.add(dependant.name));

  const stackNames = stacksToRun.map((stack) => stack.name);
  const missingDependants = [...allDependants].filter(
    (dependant) => !stackNames.includes(dependant)
  );

  if (missingDependants.length > 0) {
    throw Errors.Usage(
      `The following dependant stacks are not included in the stacks to run: ${missingDependants.join(
        ", "
      )}. Either add them or add the --ignore-missing-stack-dependencies flag.`
    );
  }
}

// Throws an error if there is a dependency that is not included
// Cycles are detected on dependency creation at synthesis time
// Running this prevents us from being in a situation where we have to wait for a stack to be deployed
// that is not included to be run
function checkIfAllDependenciesAreIncluded(stacksToRun: SynthesizedStack[]) {
  const allDependencies = new Set<string>();
  stacksToRun
    .map((stack) => stack.dependencies)
    .flat()
    .forEach((dependency) => allDependencies.add(dependency));

  const stackNames = stacksToRun.map((stack) => stack.name);
  const missingDependencies = [...allDependencies].filter(
    (dependency) => !stackNames.includes(dependency)
  );

  if (missingDependencies.length > 0) {
    throw Errors.Usage(
      `The following dependencies are not included in the stacks to run: ${missingDependencies.join(
        ", "
      )}. Either add them or add the --ignore-missing-stack-dependencies flag.`
    );
  }
}

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
};

export type MutationOptions = MultipleStackOptions &
  AutoApproveOptions & {
    refreshOnly?: boolean;
    ignoreMissingStackDependencies?: boolean;
    parallelism?: number;
    terraformParallelism?: number;
  };

type LogMessage = {
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
  private waitingForApproval = false;
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

  private stopAllStacks() {
    this.stacksToRun.forEach((stack) => stack.stop());
    this.eventBuffer = this.eventBuffer.filter(
      (event) =>
        event.type === "projectUpdate"
          ? event.value.type !== "waiting for approval" // we want to filter out the waiting for approval events
          : true // we want all other types
    );
  }

  private waitForApproval() {
    this.waitingForApproval = true;
  }

  private resumeAfterApproval() {
    // We first need to flush all events, we can not resume if there is a new waiting for approval update
    let event = this.eventBuffer.shift();
    while (event) {
      if (event.type === "projectUpdate") {
        event.cb(event.value);
        if (event.value.type === "waiting for approval") {
          // We have to wait for approval again, therefore we can not resume
          return;
        }
      }
      if (event.type === "logMessage") {
        event.cb(event.value);
      }

      event = this.eventBuffer.shift();
    }

    // If we reach this point there was no waiting for approval event, so we can safely resume
    this.waitingForApproval = false;
  }

  private handleApprovalProcess(cb: (updateToSend: ProjectUpdate) => void) {
    return (update: StackUpdate | StackApprovalUpdate) => {
      const bufferCb = (bufferedUpdate: ProjectUpdate) => {
        this.eventBuffer.push({
          cb,
          value: bufferedUpdate,
          type: "projectUpdate",
        });
      };
      const bufferableCb = this.waitingForApproval ? bufferCb : cb;

      if (update.type === "waiting for stack approval") {
        const callbacks = (update: StackApprovalUpdate) => ({
          approve: () => {
            update.approve();
            this.resumeAfterApproval();
          },
          dismiss: () => {
            update.reject();

            this.stopAllStacksThatCanNotRunWithout(update.stackName);
            this.resumeAfterApproval();
          },
          stop: () => {
            update.reject();
            this.stopAllStacks();
            this.resumeAfterApproval();
          },
        });
        this.waitForApproval();

        bufferableCb({
          type: "waiting for approval",
          stackName: update.stackName,
          plan: update.plan,
          ...callbacks(update),
        });
      } else {
        bufferableCb(update);
      }
    };
  }

  private bufferWhileWaitingForApproval(cb?: (msg: LogMessage) => void) {
    if (!cb) {
      return undefined;
    }

    return (msg: LogMessage) => {
      if (this.waitingForApproval) {
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
    const onLog = this.bufferWhileWaitingForApproval(this.onLog);
    return new CdktfStack({
      ...opts,
      stack,
      onUpdate: this.handleApprovalProcess(this.onUpdate),
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

  public async diff(opts?: DiffOptions) {
    const stacks = await this.synth();
    const stack = this.getStackExecutor(
      getSingleStack(stacks, opts?.stackName, "diff")
    );
    await stack.diff(opts?.refreshOnly, opts?.terraformParallelism);
    if (!stack.currentPlan)
      throw Errors.External(
        `Stack failed to plan: ${stack.stack.name}. Please check the logs for more information.`
      );
    return stack.currentPlan;
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
        method === "deploy"
          ? nextRunningExecutor.deploy(
              opts.refreshOnly,
              opts.terraformParallelism
            )
          : nextRunningExecutor.destroy(opts.terraformParallelism);
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
    const currentWork = this.stacksToRun
      .filter((ex) => ex.currentWorkPromise)
      .map((ex) => ex.currentWorkPromise);

    await ensureAllSettledBeforeThrowing(Promise.all(currentWork), currentWork);
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
