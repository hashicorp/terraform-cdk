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
  if (!stackNames) {
    if (stacks.length === 1) {
      return [stacks[0]];
    }
    throw Errors.Usage(
      `Found more than one stack, please specify a target stacks. Run cdktf ${
        targetAction || "<verb>"
      } <stack> with one or more of these stacks: ${stacks
        .map((s) => s.name)
        .join(", ")} `
    );
  }

  return stackNames.map((stackName) => getSingleStack(stacks, stackName));
}

function getStacks(
  stacks: SynthesizedStack[],
  opts: StackOptions,
  targetAction?: string
) {
  if (opts.stackNames && opts.stackNames.length) {
    return getMultipleStacks(stacks, opts.stackNames, targetAction);
  }

  return [getSingleStack(stacks, opts.stackName, targetAction)];
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

export type StackOptions = {
  stackName?: string;
  stackNames?: string[];
};

export type ExecutionOptions = StackOptions & {
  autoApprove?: boolean;
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

  public async diff(opts?: StackOptions) {
    const stacks = await this.synth();
    const stack = this.getStackExecutor(
      getSingleStack(stacks, opts?.stackName, "diff")
    );
    await stack.diff();
    return stack.currentPlan;
  }

  // Throws an error if there is a dependency that is not included
  // Cycles are detected on dependency creation at synthesis time
  // Running this prevents us from being in a situation where we have to wait for a stack to be deployed
  // that is not included to be run
  private checkIfAllDependenciesAreIncluded(stacksToRun: SynthesizedStack[]) {
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

  public async deploy(opts: ExecutionOptions = {}) {
    const stacks = await this.synth();
    const stacksToRun = getStacks(stacks, opts, "deploy");
    this.checkIfAllDependenciesAreIncluded(stacksToRun);

    const stackExecutors = stacksToRun.map((stack) =>
      this.getStackExecutor(stack, opts)
    );

    let nextRunningExecutor = getStackWithNoUnmetDependencies(stackExecutors);

    while (nextRunningExecutor) {
      await nextRunningExecutor.deploy();
      nextRunningExecutor = getStackWithNoUnmetDependencies(stackExecutors);
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
    const stacksToRun = getStacks(stacks, opts, "destroy");
    // TODO: implement multi-stack destroy
    if (stacksToRun.length > 1) {
      throw Errors.Usage(
        `Multi-stack destroy is not yet supported, please only pass one stack into deploy instead of multiple: ${stacksToRun
          .map((stack) => stack.name)
          .join(", ")}`
      );
    }
    const stack = this.getStackExecutor(stacks[0], opts);
    return await stack.destroy();
  }

  public async fetchOutputs(opts?: StackOptions) {
    const stacks = await this.synth();
    const stack = this.getStackExecutor(
      getSingleStack(stacks, opts?.stackName, "output")
    );
    return await stack.fetchOutputs();
  }
}
