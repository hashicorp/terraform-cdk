// This is the programmatic entrypoint that the CLI uses.
// While this is the closest we have to a programmatic API, please understand that the interfaces in this file are not stable.
// Convert is not included here since it's published independently as @cdktf/hcl2cdk.

export { init, Project, InitArgs } from "./init";
export { get, GetStatus } from "./get";
import { interpret, InterpreterFrom } from "xstate";
import { SynthesizedStack } from "../bin/cmds/helper/synth-stack";
import { projectExecutionMachine } from "./project-execution";
import {
  PlannedResource,
  DeployingResourceApplyState,
} from "../bin/cmds/ui/models/terraform";
import {
  DeployingResource,
  TerraformPlan,
} from "../bin/cmds/ui/models/terraform";
import { NestedTerraformOutputs } from "../bin/cmds/ui/terraform-context";

// TODO: move files around to all be under lib
export { SynthesizedStack };

export enum Status {
  STARTING = "starting",
  SYNTHESIZING = "synthesizing",
  SYNTHESIZED = "synthesized",
  INITIALIZING = "initializing",
  PLANNING = "planning",
  PLANNED = "planned",
  DEPLOYING = "deploying",
  DESTROYING = "destroying",
  OUTPUT_FETCHED = "output fetched",
  DONE = "done",
}

export type ProjectUpdates =
  | {
      type: "synthing";
    }
  | {
      type: "synthed";
      stacks: SynthesizedStack[];
      errorMessage?: string;
    }
  | {
      type: "diffing";
      stackName: string;
    }
  | {
      type: "diffed";
      stackName: string;
      plan: TerraformPlan;
    }
  | {
      type: "waiting for approval";
      stackName: string;
      plan: TerraformPlan;
      approve: () => void;
      reject: () => void;
    }
  | {
      type: "deploying";
      stackName: string;
    }
  | {
      type: "deploy update";
      stackName: string;
      deployOutput: string;
      resources: DeployingResource[];
    }
  | {
      type: "deployed";
      stackName: string;
      outputsByConstructId: Record<string, any>;
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
      resources: DeployingResource[];
    }
  | {
      type: "destroyed";
      stackName: string;
    };

export class CdktfProject {
  public stateMachine: InterpreterFrom<typeof projectExecutionMachine>;
  public currentState: string;
  public stackName?: string;
  public currentPlan?: TerraformPlan;
  public status: Status;
  public stacks?: SynthesizedStack[];
  public outputs?: Record<string, any>;
  public outputsByConstructId?: NestedTerraformOutputs;
  public deployingResources?: DeployingResource[];

  constructor({
    synthCommand,
    targetDir,
    onUpdate,
    autoApprove,
  }: {
    synthCommand: string;
    targetDir: string;
    onUpdate: (update: ProjectUpdates) => void;
    autoApprove?: boolean;
  }) {
    this.status = Status.STARTING;
    this.stateMachine = interpret(
      projectExecutionMachine.withContext({
        synthCommand,
        targetDir,
        autoApprove,

        onProgress: (event) => {
          switch (event.type) {
            case "LOG":
              break;

            case "STACK_SELECTED":
              this.stackName = event.stackName;
              break;

            case "RESOURCE_UPDATE":
              {
                const map = new Map<string, DeployingResource>(
                  (this.deployingResources || []).map((r) => [r.id, r])
                );
                event.updatedResources.forEach((r) => map.set(r.id, r));
                this.deployingResources = Array.from(map.values());

                onUpdate({
                  type: "deploy update",
                  stackName: event.stackName,
                  deployOutput: event.stdout,
                  resources: this.deployingResources,
                });
              }
              break;
          }
        },
      })
    );

    this.currentState = "idle";
    this.stateMachine.onTransition((state) => {
      if (!state) {
        return;
      }

      this.currentState = state.toStrings()[0];
      const lastState = (state.history?.toStrings() || [])[0];
      const ctx = state.context;

      switch (lastState) {
        case "synth":
          this.stacks = ctx.synthesizedStacks || [];
          this.status = Status.SYNTHESIZED;
          onUpdate({
            type: "synthed",
            stacks: this.stacks,
            errorMessage: ctx.message,
          });

          break;

        case "diff":
          this.currentPlan = ctx.targetStackPlan;
          this.status = Status.PLANNED;
          if (this.currentPlan?.needsApply && ctx.targetAction !== "diff") {
            this.deployingResources = this.currentPlan?.applyableResources.map(
              (r: PlannedResource) =>
                Object.assign({}, r, {
                  applyState: DeployingResourceApplyState.WAITING,
                })
            );
          }
          onUpdate({
            type: "diffed",
            stackName: ctx.targetStack!,
            plan: ctx.targetStackPlan!,
          });
          break;

        case "gatherOutput": {
          this.status = Status.OUTPUT_FETCHED;
          this.outputs = state.context.outputs!;
          this.outputsByConstructId = state.context.outputsByConstructId!;

          if (state.context.targetAction === "deploy") {
            onUpdate({
              type: "deployed",
              stackName: ctx.targetStack!,
              outputs: this.outputs,
              outputsByConstructId: this.outputsByConstructId,
            });
          }
          if (state.context.targetAction === "destroy") {
            onUpdate({
              type: "destroyed",
              stackName: ctx.targetStack!,
            });
          }
          break;
        }
      }

      switch (this.currentState) {
        case "synth":
          this.status = Status.SYNTHESIZING;
          onUpdate({
            type: "synthing",
          });
          break;

        case "deploy":
          this.status = Status.DEPLOYING;
          onUpdate({
            type: "deploying",
            stackName: this.stackName!,
          });
          break;

        case "destroy":
          this.status = Status.DEPLOYING;
          onUpdate({
            type: "destroying",
            stackName: this.stackName!,
          });
          break;

        case "diff":
          this.status = Status.PLANNING;
          onUpdate({
            type: "diffing",
            stackName: this.stackName!,
          });
          break;
        case "waitingForApproval":
          onUpdate({
            type: "waiting for approval",
            stackName: this.stackName!,
            plan: this.currentPlan!,
            approve: () => {
              this.stateMachine.send("APPROVAL_GIVEN");
            },
            reject: () => {
              this.stateMachine.send("APPROVAL_ABORTED");
            },
          });
      }
    });

    this.stateMachine.start();
  }

  private waitOnMachineDone(): Promise<string> {
    return new Promise((resolve, reject) => {
      this.stateMachine.onTransition((state) => {
        if (state.matches("error")) {
          reject(state.context.message);
        } else if (state.matches("done")) {
          resolve("done");
        }
      });
    });
  }

  public async synth() {
    this.stateMachine.send({
      type: "START",
      targetAction: "synth",
    });

    return this.waitOnMachineDone();
  }

  public async diff(stackName?: string) {
    this.stateMachine.send({
      type: "START",
      targetAction: "diff",
      targetStack: stackName,
    });

    return this.waitOnMachineDone();
  }

  public async deploy(stackName?: string) {
    this.stateMachine.send({
      type: "START",
      targetAction: "deploy",
      targetStack: stackName,
    });

    return this.waitOnMachineDone();
  }

  public async destroy(stackName?: string) {
    this.stateMachine.send({
      type: "START",
      targetAction: "destroy",
      targetStack: stackName,
    });

    return this.waitOnMachineDone();
  }

  public async fetchOutputs(stackName?: string) {
    this.stateMachine.send({
      type: "START",
      targetAction: "destroy",
      targetStack: stackName,
    });

    await this.waitOnMachineDone();

    return this.outputs;
  }
}
