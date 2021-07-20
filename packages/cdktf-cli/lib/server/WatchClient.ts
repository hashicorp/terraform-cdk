import * as chokidar from "chokidar";
import { DeepReadonly } from "utility-types";
import isDeepEqual from "lodash.isequal";
import {
  SynthesizedStack,
  SynthStack,
} from "../../bin/cmds/helper/synth-stack";
import {
  DeployingResource,
  Terraform,
} from "../../bin/cmds/ui/models/terraform";
import { TerraformCli } from "../../bin/cmds/ui/models/terraform-cli";
import { TerraformCloud } from "../../bin/cmds/ui/models/terraform-cloud";
import { parseOutput } from "../../bin/cmds/ui/terraform-context";
import { TerraformJson } from "../../bin/cmds/ui/terraform-json";
import { readGitignore } from "./util";

interface WatchClientOptions {
  targetDir: string;
  synthCommand: string;
  autoApprove: boolean;
  targetStack?: string;
}

type Action = "INIT" | "SYNTH" | "DEPLOY";

type Stack = SynthesizedStack & {
  json: TerraformJson;
};

type TimestampedDeployingResource = DeployingResource & {
  changedAt: number;
};

type WatchStateStatus =
  | "IDLE"
  | "SYNTHESIZING"
  | "INITIALIZING"
  | "PLANNING"
  | "DEPLOYING";

export interface WatchState {
  status: WatchStateStatus;
  stacks: Stack[];
  resources: Map<
    TimestampedDeployingResource["id"],
    TimestampedDeployingResource
  >;
}

export type SubscriptionHandler = (state: WatchState) => void | Promise<void>;

export class WatchClient {
  public readonly targetDir: string;
  public readonly synthCommand: string;
  // public readonly watchCommand: string later
  public readonly autoApprove: boolean;
  public readonly targetStack?: string;

  private subscribers = new Set<SubscriptionHandler>();
  private running = false;
  private actionQueue: Action[] = ["SYNTH", "INIT"];
  private readonly state: DeepReadonly<WatchState> = {
    status: "IDLE",
    stacks: [],
    resources: new Map(),
  };

  private sourceFileWatcher?: chokidar.FSWatcher;
  private outDirWatcher?: chokidar.FSWatcher;

  constructor(options: WatchClientOptions) {
    this.targetDir = options.targetDir;
    this.synthCommand = options.synthCommand;

    if (!options.autoApprove)
      throw new Error(
        "WatchClient does not yet support running without autoApprove"
      );
    this.autoApprove = options.autoApprove;
    this.targetStack = options.targetStack;
  }

  public isRunning(): boolean {
    return this.running;
  }

  public subscribe(handler: SubscriptionHandler): () => void {
    this.subscribers.add(handler);
    return () => this.subscribers.delete(handler);
  }

  private updateState(state: Partial<WatchState>): void {
    const previousState = this.state;
    // ignore state being readonly - it is readonly for safety in other places
    (this.state as WatchState) = Object.assign({}, this.state, state);
    if (!isDeepEqual(previousState, this.state)) {
      this.subscribers.forEach((sub) => sub(this.state as WatchState));
    }
  }

  private async runSynth() {
    this.updateState({ status: "SYNTHESIZING" });
    const stacks = (
      await SynthStack.synth(this.synthCommand, this.targetDir)
    ).map<Stack>((stack) => {
      return {
        ...stack,
        json: JSON.parse(stack.content) as TerraformJson,
      };
    });
    this.updateState({ stacks });
  }

  private async runInit() {
    this.updateState({ status: "INITIALIZING" });
    const terraform = await this.getTerraform();
    await terraform.init();
  }

  private async runDeploy() {
    this.updateState({ status: "DEPLOYING" });
    const terraform = await this.getTerraform();

    if (terraform instanceof TerraformCloud) {
      // plan for Terraform Cloud remote execution also uploads the Terraform code
      const { planFile } = await terraform.plan(false); // false = deploy
      await terraform.deploy(planFile, this.handleTerraformOutput.bind(this));
    } else {
      // skip the plan to save time ⏱
      const NO_PLAN_FILE = "";
      await terraform.deploy(
        NO_PLAN_FILE,
        this.handleTerraformOutput.bind(this)
      );
    }
  }

  private handleTerraformOutput(chunk: Buffer) {
    const resources = parseOutput(chunk.toString());
    if (resources.length > 0) {
      const newResources = new Map(
        this.state.resources as WatchState["resources"]
      );
      resources.forEach((r) =>
        newResources.set(r.id, { ...r, changedAt: Date.now() })
      );
      this.updateState({ resources: newResources as WatchState["resources"] });
    }
  }

  private async getTargetStack(): Promise<Stack> {
    const { stacks } = this.state;
    if (stacks.length === 0) {
      throw new Error(
        "Internal Error: cannot run deploy when there are no stacks"
      );
    }
    let stack: Stack | undefined = stacks[0];
    if (this.targetStack) {
      stack = stacks.find((s) => s.name === this.targetStack);
      if (!stack) {
        throw new Error(
          `Could not find stack ${this.targetStack}. Found ${stacks
            .map((s) => s.name)
            .join(", ")}`
        );
      }
    } else if (stacks.length > 1) {
      throw new Error(
        "Found more than one stack, please specify which stack to watch"
      );
    }
    return stack;
  }

  // todo: cache instance as long as backend does not change
  private async getTerraform(): Promise<Terraform> {
    const stack = await this.getTargetStack();
    if (stack.json.terraform?.backend?.remote) {
      const terraformCloud = new TerraformCloud(
        stack,
        stack.json.terraform?.backend?.remote
      );
      if (await terraformCloud.isRemoteWorkspace()) {
        return terraformCloud;
      }
    }
    return new TerraformCli(stack);
  }

  public async start() {
    this.running = true;

    const gitignored = await readGitignore(process.cwd());
    console.log({ gitignored });

    // if input files change -> queue a synth to be run
    this.sourceFileWatcher = chokidar.watch(".", {
      ignored: [
        ...gitignored,
        // "node_modules/**",
        // ".gen",
        // "cdktf.out",
        // "*.d.ts",
        // "*.js",
        // "terraform.demo-cdktf-ts-docker.tfstate",
      ],
      cwd: process.cwd(),
    });
    this.sourceFileWatcher.on("change", () => this.queueAction("SYNTH"));

    // if out dir files change -> queue a deploy to be run
    // TODO: only watch stack.workingDirectory (as soon as stack is known)
    this.outDirWatcher = chokidar.watch("./cdktf.out", {
      ignored: ["**/.terraform", "**/.terraform.lock.hcl", "*/*/*/plan"],
    });
    this.outDirWatcher.on("change", () => this.queueAction("DEPLOY"));

    // Queue initial actions
    await this.queueAction("SYNTH");
    await this.queueAction("INIT");

    this.startHandlingActions();
  }

  private async queueAction(action: Action) {
    // only enqueue if not already enqueued anyway
    if (!this.actionQueue.includes(action)) this.actionQueue.push(action);

    console.log(`currently queued actions: ${this.actionQueue.join(", ")}`);
  }

  private async startHandlingActions() {
    try {
      while (this.isRunning()) {
        const nextAction: Action | undefined = this.actionQueue.shift();
        if (nextAction) console.log({ nextAction });

        switch (nextAction) {
          case "SYNTH": {
            await this.runSynth();
            break;
          }
          case "INIT": {
            await this.runInit();
            break;
          }
          case "DEPLOY": {
            await this.runDeploy();
            break;
          }
          case undefined: {
            // this is hacky but makes it very easy to keep this alive in
            // a loop even if no events are currently enqueued. This whole
            // queue implemenation will probably be replaced by a state
            // machine in the future.
            this.updateState({ status: "IDLE" });
            await new Promise((resolve) => setTimeout(resolve, 100));
            break;
          }
          default: {
            console.warn(
              `warning: received unknown action ${nextAction} skipping`
            );
            break;
          }
        }
      }
    } catch (e) {
      console.error(e);
      process.exit(1);
    }
  }

  public async stop() {
    if (this.sourceFileWatcher) await this.sourceFileWatcher.close();
    if (this.outDirWatcher) await this.outDirWatcher.close();
    this.actionQueue = [];
    this.running = false;
  }
}
