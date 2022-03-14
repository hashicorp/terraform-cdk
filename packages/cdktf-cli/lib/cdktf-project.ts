import { AbortController } from "node-abort-controller"; // polyfill until we update to node 16
import { SynthesizedStack, SynthStack } from "./synth-stack";
import { printAnnotations } from "./synth";
import { CdktfStack, StackApprovalUpdate, StackUpdate } from "./cdktf-stack";
import { Errors } from "./errors";
import { TerraformPlan } from "./models/terraform";

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

function getMultipleStacks(
  stacks: SynthesizedStack[],
  stackNames?: string[],
  targetAction?: string
) {
  if (!stackNames || !stackNames.length) {
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

  return stackNames.map((stackName) => getSingleStack(stacks, stackName));
}

// Returns the first stack that has no unmet dependencies
// An unmet dependency is a dependency that has not been deployed yet
function getStackWithNoUnmetDependencies(
  stackExecutors: CdktfStack[]
): CdktfStack | undefined {
  return stackExecutors
    .filter((executor) => executor.isPending)
    .find((executor) =>
      executor.stack.dependencies.every(
        (dependency) =>
          stackExecutors.find((executor) => executor.stack.name === dependency)
            ?.currentState === "done"
      )
    );
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
    if (knownDependantStackNames.has(stack.stackName)) {
      return;
    }

    knownDependantStackNames.add(stack.stackName);
    findAllNestedDependantStacks(
      stackExecutors,
      stack.stackName,
      knownDependantStackNames
    );
  });

  return stackExecutors.filter((executor) =>
    knownDependantStackNames.has(executor.stackName)
  );
}

// Returns the first stack that has no dependents that need to be destroyed first
function getStackWithNoUnmetDependants(
  stackExecutors: CdktfStack[]
): CdktfStack | undefined {
  return stackExecutors
    .filter((executor) => executor.isPending)
    .find((executor) => {
      const dependantStacks = findAllDependantStacks(
        stackExecutors,
        executor.stack.name
      );
      return dependantStacks.every((stack) => stack.currentState === "done");
    });
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

export type ExecutionOptions = MultipleStackOptions & {
  autoApprove?: boolean;
  ignoreMissingStackDependencies?: boolean;
};

export class CdktfProject {
  public stacks?: SynthesizedStack[];
  public hardAbort: () => void;

  private synthCommand: string;
  private outDir: string;
  private workingDirectory: string;
  private onUpdate: (update: ProjectUpdate) => void;
  private onLog?: (log: { stackName: string; message: string }) => void;
  private abortSignal: AbortSignal;

  // Set during deploy / destroy, may be mutated by approve / stop actions
  private stacksToRun: CdktfStack[] = [];
  // This means sth different in deploy / destroy
  private stopAllStacksThatCanNotRunWithout: (stackName: string) => void =
    () => {}; // eslint-disable-line @typescript-eslint/no-empty-function
  constructor({
    synthCommand,
    outDir,
    onUpdate,
    onLog,
    workingDirectory = process.cwd(),
  }: {
    synthCommand: string;
    outDir: string;
    onUpdate: (update: ProjectUpdate) => void;
    onLog?: (log: { stackName: string; message: string }) => void;
    workingDirectory?: string;
  }) {
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
  }

  private handleApprovalProcess(cb: (updateToSend: ProjectUpdate) => void) {
    const callbacks = (update: StackApprovalUpdate) => ({
      approve: () => {
        update.approve();
      },
      dismiss: () => {
        update.reject();

        this.stopAllStacksThatCanNotRunWithout(update.stackName);
      },
      stop: () => {
        update.reject();
        this.stopAllStacks();
      },
    });
    return (update: StackUpdate | StackApprovalUpdate) => {
      if (update.type === "waiting for stack approval") {
        cb({
          type: "waiting for approval",
          stackName: update.stackName,
          plan: update.plan,
          ...callbacks(update),
        });
      } else {
        cb(update);
      }
    };
  }

  public getStackExecutor(
    stack: SynthesizedStack,
    opts: ExecutionOptions = {}
  ) {
    return new CdktfStack({
      ...opts,
      stack,
      onUpdate: this.handleApprovalProcess(this.onUpdate),
      onLog: this.onLog,
      abortSignal: this.abortSignal,
    });
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

  public async diff(opts?: SingleStackOptions) {
    const stacks = await this.synth();
    const stack = this.getStackExecutor(
      getSingleStack(stacks, opts?.stackName, "diff")
    );
    await stack.diff();
    return stack.currentPlan;
  }

  public async deploy(opts: ExecutionOptions = {}) {
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
      ? () => this.stacksToRun.filter((stack) => stack.isPending)[0]
      : () => getStackWithNoUnmetDependencies(this.stacksToRun);

    let nextRunningExecutor = next();

    while (nextRunningExecutor) {
      await nextRunningExecutor.deploy();
      nextRunningExecutor = next();
    }

    const unprocessedStacks = this.stacksToRun.filter(
      (executor) => executor.isPending
    );
    if (unprocessedStacks.length > 0) {
      throw Errors.External(
        `Some stacks failed to deploy: ${unprocessedStacks
          .map((s) => s.stackName)
          .join(", ")}. Please check the logs for more information.`
      );
    }
  }

  public async destroy(opts: ExecutionOptions = {}) {
    const stacks = await this.synth();
    const stacksToRun = getMultipleStacks(stacks, opts.stackNames, "destroy");

    if (!opts.ignoreMissingStackDependencies) {
      checkIfAllDependantsAreIncluded(stacksToRun, stacks);
    }

    this.stopAllStacksThatCanNotRunWithout = (stackName: string) => {
      const stackExecutor = this.stacksToRun.find(
        (s) => s.stackName === stackName
      );
      if (!stackExecutor) {
        throw Errors.Internal(
          `Could not find stack "${stackName}" that was stopped`
        );
      }

      stackExecutor.stack.dependencies.forEach((dependant) => {
        this.stopAllStacksThatCanNotRunWithout(dependant);

        const dependantStack = this.stacksToRun.find(
          (s) => s.stackName === dependant
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
          this.stacksToRun.filter((stack) => stack.currentState !== "done")[0]
      : () => getStackWithNoUnmetDependants(this.stacksToRun);

    let nextRunningExecutor = next();

    while (nextRunningExecutor) {
      await nextRunningExecutor.destroy();
      nextRunningExecutor = next();
    }

    const unprocessedStacks = this.stacksToRun.filter(
      (executor) => executor.isPending
    );
    if (unprocessedStacks.length > 0) {
      throw Errors.External(
        `Some stacks failed to destroy: ${unprocessedStacks
          .map((s) => s.stackName)
          .join(", ")}. Please check the logs for more information.`
      );
    }
  }

  public async fetchOutputs(opts?: SingleStackOptions) {
    const stacks = await this.synth();
    const stack = this.getStackExecutor(
      getSingleStack(stacks, opts?.stackName, "output")
    );
    return await stack.fetchOutputs();
  }
}
