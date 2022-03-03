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
      throw Errors.Usage("Unknown stack: " + stackName);
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

export type StackOptions = {
  stackName?: string;
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

  public async deploy(opts?: ExecutionOptions) {
    const stacks = await this.synth();
    const stack = this.getStackExecutor(
      getSingleStack(stacks, opts?.stackName, "deploy"),
      opts
    );
    return await stack.deploy();
  }

  public async destroy(opts?: ExecutionOptions) {
    const stacks = await this.synth();
    const stack = this.getStackExecutor(
      getSingleStack(stacks, opts?.stackName, "destroy"),
      opts
    );
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
