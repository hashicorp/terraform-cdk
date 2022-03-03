import { interpret, InterpreterFrom } from "xstate";
import { AbortController } from "node-abort-controller"; // polyfill until we update to node 16
import { SynthesizedStack } from "./synth-stack";
import { projectExecutionMachine } from "./project-execution";
import {
  PlannedResource,
  DeployingResourceApplyState,
  DeployingResource,
  TerraformPlan,
} from "./models/terraform";
import { NestedTerraformOutputs } from "./output";
import { logger } from "./logging";

function extractJsonLogLineIfPresent(logLine: string): string {
  try {
    const extractedMessage = JSON.parse(logLine)["@message"];
    return extractedMessage ? extractedMessage : logLine;
  } catch {
    return logLine;
  }
}

function extractJsonLogIfPresent(logLines: string): string {
  return logLines
    .split("\n")
    .map(extractJsonLogLineIfPresent)
    .map((line) => line.trim())
    .join("\n");
}

export type ProjectUpdate =
  | {
      type: "synthesizing";
    }
  | {
      type: "synthesized";
      stacks: SynthesizedStack[];
      errorMessage?: string;
    }
  | {
      type: "planning";
      stackName: string;
    }
  | {
      type: "planned";
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
      outputsByConstructId: NestedTerraformOutputs;
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
    }
  | {
      type: "outputs fetched";
      stackName: string;
      outputsByConstructId: NestedTerraformOutputs;
      outputs: Record<string, any>;
    };

// This is deprecated and will be removed once we ship the new multi-stack API completely.
export class CdktfProject {
  public stateMachine: InterpreterFrom<typeof projectExecutionMachine>;
  public stackName?: string;
  public currentPlan?: TerraformPlan;
  public stacks?: SynthesizedStack[];
  public outputs?: Record<string, any>;
  public outputsByConstructId?: NestedTerraformOutputs;
  public deployingResources?: DeployingResource[];
  public hardAbort: () => void;

  constructor({
    synthCommand,
    outDir,
    onUpdate,
    onLog,
    autoApprove,
    workingDirectory = process.cwd(),
  }: {
    synthCommand: string;
    outDir: string;
    onUpdate: (update: ProjectUpdate) => void;
    onLog?: (log: { stackName: string; message: string }) => void;
    autoApprove?: boolean;
    workingDirectory?: string;
  }) {
    const ac = new AbortController();
    const abortSignal = ac.signal;

    this.hardAbort = ac.abort.bind(ac);
    this.stateMachine = interpret(
      projectExecutionMachine.withContext({
        synthCommand,
        outDir: outDir,
        autoApprove,
        workingDirectory,
        abortSignal,

        onProgress: (event) => {
          switch (event.type) {
            case "LOG": {
              const message = extractJsonLogIfPresent(event.message);
              logger.debug(
                `[${event.stackName}](${event.stateName}): ${message}`
              );
              if (onLog) {
                onLog({ stackName: event.stackName, message: event.message });
              }

              break;
            }

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

                if (event.stateName === "deploy") {
                  onUpdate({
                    type: "deploy update",
                    stackName: event.stackName,
                    deployOutput: event.stdout,
                    resources: this.deployingResources,
                  });
                } else if (event.stateName === "destroy") {
                  onUpdate({
                    type: "destroy update",
                    stackName: event.stackName,
                    destroyOutput: event.stdout,
                    resources: this.deployingResources,
                  });
                } else {
                  logger.error("Unknown state name: " + event.stateName);
                }
              }
              break;
          }
        },
      })
    );

    this.stateMachine.onTransition((state) => {
      if (!state) {
        return;
      }

      const lastState = (state.history?.toStrings() || [])[0];

      logger.debug(
        `ProjectExecution State machine transitions: ${
          lastState || "unknown"
        } -> ${this.currentState}`
      );
      const ctx = state.context;

      switch (lastState) {
        case "synth":
          this.stacks = ctx.synthesizedStacks || [];
          onUpdate({
            type: "synthesized",
            stacks: this.stacks,
            errorMessage: ctx.message,
          });

          break;

        case "diff":
          this.currentPlan = ctx.targetStackPlan;
          if (this.currentPlan?.needsApply && ctx.targetAction !== "diff") {
            this.deployingResources = this.currentPlan?.applyableResources.map(
              (r: PlannedResource) =>
                Object.assign({}, r, {
                  applyState: DeployingResourceApplyState.WAITING,
                })
            );
          }
          onUpdate({
            type: "planned",
            stackName: ctx.targetStack!,
            plan: ctx.targetStackPlan!,
          });
          break;

        case "gatherOutputs": {
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
          if (state.context.targetAction === "output") {
            onUpdate({
              type: "outputs fetched",
              stackName: this.stackName!,
              outputs: this.outputs,
              outputsByConstructId: this.outputsByConstructId,
            });
          }
          break;
        }

        case "destroy":
          onUpdate({
            type: "destroyed",
            stackName: this.stackName!,
          });
      }

      switch (this.currentState) {
        case "synth":
          onUpdate({
            type: "synthesizing",
          });
          break;

        case "deploy":
          onUpdate({
            type: "deploying",
            stackName: this.stackName!,
          });
          break;

        case "destroy":
          onUpdate({
            type: "destroying",
            stackName: this.stackName!,
          });
          break;

        case "diff":
          onUpdate({
            type: "planning",
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
          break;
      }
    });

    this.stateMachine.start();
  }

  public get currentState(): string {
    return this.stateMachine.state.toStrings()[0] || "idle";
  }

  private waitOnMachineDone(): Promise<void> {
    return new Promise((resolve, reject) => {
      this.stateMachine.onTransition((state) => {
        if (state.matches("error")) {
          reject(new Error(state.context.message));
        } else if (state.matches("done")) {
          resolve();
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
      targetAction: "output",
      targetStack: stackName,
    });

    await this.waitOnMachineDone();

    return this.outputs;
  }
}
