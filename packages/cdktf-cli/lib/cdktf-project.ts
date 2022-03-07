import { AbortController } from "node-abort-controller"; // polyfill until we update to node 16
import { SynthesizedStack, SynthStack } from "./synth-stack";
import { printAnnotations } from "./synth";
import { CdktfStack, StackUpdate } from "./cdktf-stack";
import { Errors } from "./errors";

export type ProjectUpdate =
  | {
      type: "synthesizing";
    }
  | {
      type: "synthesized";
      stacks: SynthesizedStack[];
      errorMessage?: string;
    }
  | StackUpdate;

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
    .filter((executor) => executor.currentState !== "done")
    .find((executor) =>
      executor.stack.dependencies.every(
        (dependency) =>
          stackExecutors.find((executor) => executor.stack.name === dependency)
            ?.currentState === "done"
      )
    );
}

// Returns the first stack that has no dependents that need to be destroyed first
function getStackWithNoUnmetDependants(
  stackExecutors: CdktfStack[]
): CdktfStack | undefined {
  return stackExecutors
    .filter((executor) => executor.currentState !== "done")
    .find((executor) => {
      const dependantStacks = stackExecutors.filter((innerExecutor) =>
        innerExecutor.stack.dependencies.includes(executor.stack.name)
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
      )}.`
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
      )}.`
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

  public getStackExecutor(
    stack: SynthesizedStack,
    opts: ExecutionOptions = {}
  ) {
    return new CdktfStack({
      ...opts,
      stack,
      onUpdate: this.onUpdate,
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

    const stackExecutors = stacksToRun.map((stack) =>
      this.getStackExecutor(stack, opts)
    );
    const next = opts.ignoreMissingStackDependencies
      ? () => stackExecutors.filter((stack) => stack.currentState !== "done")[0]
      : () => getStackWithNoUnmetDependencies(stackExecutors);

    let nextRunningExecutor = next();

    while (nextRunningExecutor) {
      await nextRunningExecutor.deploy();
      nextRunningExecutor = next();
    }

    const unprocessedStacks = stackExecutors.filter(
      (executor) => executor.currentState !== "done"
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
    const stackExecutors = stacksToRun.map((stack) =>
      this.getStackExecutor(stack, opts)
    );
    const next = opts.ignoreMissingStackDependencies
      ? () => stackExecutors.filter((stack) => stack.currentState !== "done")[0]
      : () => getStackWithNoUnmetDependants(stackExecutors);

    let nextRunningExecutor = next();

    while (nextRunningExecutor) {
      await nextRunningExecutor.destroy();
      nextRunningExecutor = next();
    }

    const unprocessedStacks = stackExecutors.filter(
      (executor) => executor.currentState !== "done"
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
