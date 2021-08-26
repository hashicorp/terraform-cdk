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
import { hashPath } from "cdktf/lib/private/fs";
import { logger } from "../logging";
import { sendTelemetry } from "../checkpoint";

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

export type TimestampedDeployingResource = DeployingResource & {
  changedAt: number;
};

type WatchStateStatus =
  | "IDLE"
  | "SYNTHESIZING"
  | "INITIALIZING"
  | "PLANNING"
  | "DEPLOYING";

export type WatchErrorOrigin = WatchStateStatus;

class RecoverableError extends Error {
  constructor(message: string, public origin: WatchErrorOrigin) {
    super(message);
    // Set the prototype explicitly. See https://github.com/Microsoft/TypeScript-wiki/blob/master/Breaking-Changes.md#extending-built-ins-like-error-array-and-map-may-no-longer-work
    Object.setPrototypeOf(this, RecoverableError.prototype);
  }
}

type WatchError = {
  message: string;
  origin: WatchErrorOrigin;
  recoverable: boolean;
  timestamp: number;
};
export interface WatchState {
  status: WatchStateStatus;
  stacks: Stack[];
  resources: Map<
    TimestampedDeployingResource["id"],
    TimestampedDeployingResource
  >;
  error?: WatchError;
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
  private needsInit = true;
  private actionQueue: Action[] = [];
  private lastTargetStackHash?: string;
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
    this.updateState({ status: "SYNTHESIZING", error: undefined });
    try {
      const stacks = (
        await SynthStack.synth(this.synthCommand, this.targetDir, true, "watch")
      ).map<Stack>((stack) => {
        return {
          ...stack,
          json: JSON.parse(stack.content) as TerraformJson,
        };
      });
      this.updateState({
        stacks,
      });
      if (this.needsInit) await this.queueAction("INIT", true);
    } catch (e) {
      throw new RecoverableError(e.errorOutput || e.message, "SYNTHESIZING");
    }
  }

  private async runInit() {
    this.updateState({ status: "INITIALIZING" });
    const terraform = await this.getTerraform();
    await terraform.init();
    this.needsInit = false;
  }

  private async runDeploy() {
    const { workingDirectory, name } = await this.getTargetStack();
    console.log(`Running deploy in workingDirectory ${workingDirectory}`);
    const newTargetStackHash = hashPath(workingDirectory);
    if (this.lastTargetStackHash === newTargetStackHash) {
      console.log(
        `skipping deploy because hash ("${this.lastTargetStackHash}") of target stack "${name}" did not change for working directory ${workingDirectory}`
      );
      return;
    } else {
      console.log(
        `continuing deploy because new hash ("${newTargetStackHash}") of working directory "${workingDirectory}" differs from previous hash "${this.lastTargetStackHash}"`
      );
    }

    this.updateState({ status: "DEPLOYING" });
    const terraform = await this.getTerraform();

    // remove previous errors
    // we do this here as deploy will update the state already while
    // in progress and we don't want to see the error while successful
    // things already start to happen
    this.updateState({
      error: undefined,
    });
    try {
      if (terraform instanceof TerraformCloud) {
        // plan for Terraform Cloud remote execution also uploads the Terraform code
        const { planFile } = await terraform.plan(false); // false = deploy
        await terraform.deploy(planFile, this.handleTerraformOutput.bind(this));
      } else if (terraform instanceof TerraformCli) {
        // skip the plan and refreshing to save time ⏱
        const NO_PLAN_FILE = "";
        await terraform.deploy(
          NO_PLAN_FILE,
          this.handleTerraformOutput.bind(this),
          ["-refresh=false"]
        );
      }
      // deployment was successful -> update hash
      this.lastTargetStackHash = newTargetStackHash;
    } catch (e) {
      // When new providers where added or the stack name might've
      // been changed (when using just a single stack) we need to
      // re-init Terraform. We'll do this proactively on any error.
      this.needsInit = true;
      throw new RecoverableError(
        `${e.message}${e.stderr ? `\n${e.stderr}` : ""}`,
        "DEPLOYING"
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

  private async getTargetStack(): Promise<DeepReadonly<Stack>> {
    const { stacks } = this.state;
    if (stacks.length === 0) {
      throw new RecoverableError(
        "Cannot determine target stack when there are no stacks",
        this.state.status
      );
    }
    if (this.targetStack) {
      const stack = stacks.find((s) => s.name === this.targetStack);
      if (!stack) {
        throw new RecoverableError(
          `Could not find stack ${this.targetStack}. Found ${stacks
            .map((s) => s.name)
            .join(", ")}`,
          this.state.status
        );
      }
      return stack;
    } else if (stacks.length > 1) {
      throw new RecoverableError(
        "Found more than one stack, please specify which stack to watch using --stack",
        this.state.status
      );
    }
    return stacks[0];
  }

  // todo: optimization: cache instance as long as backend does not change
  private async getTerraform(): Promise<Terraform> {
    const stack = await this.getTargetStack();
    if (stack.json.terraform?.backend?.remote) {
      const terraformCloud = new TerraformCloud(
        stack as Stack,
        stack.json.terraform?.backend?.remote
      );
      if (await terraformCloud.isRemoteWorkspace()) {
        throw new RecoverableError(
          "Using Terraform Cloud in Remote Execution Mode is not yet supported for cdktf watch",
          this.state.status
        );
        // return terraformCloud;
      }
    }
    return new TerraformCli(stack as Stack);
  }

  public async start() {
    this.running = true;

    let gitignored: string[] = [];
    try {
      gitignored = await readGitignore(process.cwd());
    } catch (e) {
      logger.error(e);
      this.updateState({
        error: {
          message: `Could not read .gitignore file in ${process.cwd()}. Watch requires it for knowing which files to watch. Error while reading file: ${
            e.message
          }`,
          recoverable: false,
          origin: "IDLE",
          timestamp: Date.now(),
        },
      });
      return;
    }
    console.log(`Read .gitignore file: ${gitignored}`);

    // If input files change we queue a synth to be run
    this.sourceFileWatcher = chokidar.watch(".", {
      ignored: gitignored,
      cwd: process.cwd(),
      ignoreInitial: true,
    });
    this.sourceFileWatcher.on("ready", () =>
      console.log("srcdir watcher ready")
    );
    ["change", "add"].forEach((event) => {
      if (this.sourceFileWatcher)
        this.sourceFileWatcher.on(event, (path) => {
          console.log(`synth - path changed: ${event} ${path}`);
          this.queueAction("SYNTH");
        });
    });

    // If out dir files change we queue a deploy to be run
    // The runDeploy() method will check if files of the
    // currently watched stack changed
    this.outDirWatcher = chokidar.watch(this.targetDir, {
      ignored: ["**/.terraform/**", "**/.terraform.lock.hcl", "*/*/*/plan"],
      cwd: process.cwd(),
      ignoreInitial: true,
    });
    this.outDirWatcher.on("ready", () => console.log("outdir watcher ready"));
    ["change", "add"].forEach((event) => {
      if (this.outDirWatcher)
        this.outDirWatcher.on(event, (path) => {
          console.log(`outdir - path changed: ${event} ${path}`);
          this.queueAction("DEPLOY");
        });
    });

    // Queue initial synth to get things started
    await this.queueAction("SYNTH");
    await sendTelemetry("watch", { event: "start" });

    this.startHandlingActions();
  }

  public async queueAction(action: Action, priority = false) {
    // only enqueue if not already enqueued anyway
    if (!this.actionQueue.includes(action)) {
      // priority = run next
      if (priority) this.actionQueue.unshift(action);
      else this.actionQueue.push(action);
    }

    console.log(`currently queued actions: ${this.actionQueue.join(", ")}`);
  }

  private async startHandlingActions() {
    while (this.isRunning()) {
      const nextAction: Action | undefined = this.actionQueue.shift();
      if (nextAction) console.log(`Handling next action: ${nextAction}`);
      try {
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
              `warning: received unknown action ${nextAction} - ignoring it`
            );
            break;
          }
        }
      } catch (e) {
        if (e instanceof RecoverableError) {
          this.updateState({
            error: {
              message: e.message,
              recoverable: true,
              origin: e.origin,
              timestamp: Date.now(),
            },
          });
        } else {
          throw e;
        }
      }
    }
  }

  public async stop() {
    if (this.sourceFileWatcher) await this.sourceFileWatcher.close();
    if (this.outDirWatcher) await this.outDirWatcher.close();
    this.actionQueue = [];
    this.running = false;
  }
}
