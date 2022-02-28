// Each action drives itself to completion and exposes updates to the user.

import { assign, createMachine } from "xstate";
import { SynthStack, SynthesizedStack } from "./synth-stack";
import { Errors } from "./errors";
import { TerraformJson } from "./terraform-json";
import { TerraformCloud } from "./models/terraform-cloud";
import { TerraformCli } from "./models/terraform-cli";
import {
  TerraformPlan,
  Terraform,
  DeployingResource,
} from "./models/terraform";
import { getConstructIdsForOutputs, parseOutput } from "./output";
import { printAnnotations } from "./synth";

export type ProjectEvent =
  | {
      type: "START";
      targetAction?: "synth" | "diff" | "deploy" | "destroy" | "output";
      targetStack?: string;
    }
  | {
      type: "APPROVAL_ABORTED";
    }
  | {
      type: "APPROVAL_GIVEN";
    };

type ProgressEvent =
  | {
      type: "STACK_SELECTED";
      stackName: string;
    }
  | {
      type: "LOG";
      stackName: string;
      stateName: string;
      message: string;
      isError: boolean;
    }
  | {
      type: "RESOURCE_UPDATE";
      stackName: string;
      stateName: string;
      stdout: string;
      updatedResources: DeployingResource[];
    };

export interface ProjectContext {
  targetAction?: "synth" | "diff" | "deploy" | "destroy" | "output";
  targetStack?: string;
  message?: string;
  synthesizedStacks?: SynthesizedStack[];
  terraform?: Terraform;
  targetStackPlan?: TerraformPlan;
  autoApprove?: boolean;
  synthCommand: string;
  outDir: string;
  workingDirectory: string;
  outputs?: Record<string, any>;
  outputsByConstructId?: Record<string, any>;
  onProgress: (event: ProgressEvent) => void;
}

function extractError(prefix: string): (context: any, event: any) => string {
  return (_context: any, event: any) => {
    if (typeof event === "object" && event !== null && "data" in event) {
      const data = event.data;

      if ("stderr" in data) {
        return `${prefix}: ${data.stderr}`;
      } else {
        const x = `${prefix}: ${data}`;
        return x;
      }
    }

    return `${prefix}: ${event}`;
  };
}

function getStack(
  context: ProjectContext,
  stackName = context.targetStack
): SynthesizedStack {
  const stacks = context.synthesizedStacks;
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

  if (stacks.length !== 1) {
    throw Errors.Usage(
      `Found more than one stack, please specify a target stack. Run cdktf ${
        context.targetAction || "<verb>"
      } <stack> with one of these stacks: ${stacks
        .map((s) => s.name)
        .join(", ")} `
    );
  }

  return stacks[0];
}

function getLogCallbackForStack(
  context: ProjectContext
): (stateName: string) => (message: string, isError?: boolean) => void {
  const stack = getStack(context);
  return (stateName: string) =>
    (message: string, isError = false) => {
      context.onProgress({
        type: "LOG",
        stackName: stack.name,
        stateName,
        message,
        isError,
      });
    };
}

async function getTerraformClient(
  stack: SynthesizedStack,
  isSpeculative: boolean,
  sendLog: (stateName: string) => (message: string, isError?: boolean) => void
): Promise<Terraform> {
  const parsedStack = JSON.parse(stack.content) as TerraformJson;

  if (parsedStack.terraform?.backend?.remote) {
    const tfClient = new TerraformCloud(
      stack,
      parsedStack.terraform.backend.remote,
      isSpeculative,
      sendLog
    );
    if (await tfClient.isRemoteWorkspace()) {
      return tfClient;
    }
  }
  return new TerraformCli(stack, sendLog);
}

const services = {
  synthProject: async (context: ProjectContext) => {
    const stacks = await SynthStack.synth(
      context.synthCommand,
      context.outDir,
      context.workingDirectory
    );

    printAnnotations(stacks);

    return stacks;
  },
  initializeTerraform: async (context: ProjectContext) => {
    const stack = getStack(context);
    context.onProgress({
      type: "STACK_SELECTED",
      stackName: stack.name,
    });
    const isSpeculative = !["deploy", "destroy"].includes(
      context.targetAction!
    );
    const terraform = await getTerraformClient(
      stack,
      isSpeculative,
      getLogCallbackForStack(context)
    );

    await terraform.init();

    return terraform;
  },
  diff: async (context: ProjectContext) => {
    const tf = context.terraform;
    if (!tf) {
      throw Errors.Internal(
        "No terraform cli found, initializeTerraform needs to be run first"
      );
    }

    return tf.plan(context.targetAction === "destroy");
  },
  deploy: async (context: ProjectContext) => {
    const stack = getStack(context);
    const planFile = context.targetStackPlan?.planFile;
    if (!planFile) {
      throw Errors.Internal("No plan file found, diff needs to be run first");
    }
    const tf = context.terraform;
    if (!tf) {
      throw Errors.Internal(
        "No terraform cli found, initializeTerraform needs to be run first"
      );
    }

    await tf.deploy(planFile, (chunk: Buffer) => {
      const stdout = chunk.toString("utf8");

      context.onProgress({
        type: "RESOURCE_UPDATE",
        stackName: stack.name,
        stateName: "deploy",
        stdout,
        updatedResources: parseOutput(stdout),
      });
    });
  },
  destroy: async (context: ProjectContext) => {
    const stack = getStack(context);
    const planFile = context.targetStackPlan?.planFile;
    if (!planFile) {
      throw Errors.Internal("No plan file found, diff needs to be run first");
    }

    const tf = context.terraform;
    if (!tf) {
      throw Errors.Internal(
        "No terraform cli found, initializeTerraform needs to be run first"
      );
    }

    await tf.destroy((chunk: Buffer) => {
      const stdout = chunk.toString("utf8");

      context.onProgress({
        type: "RESOURCE_UPDATE",
        stackName: stack.name,
        stateName: "destroy",
        stdout,
        updatedResources: parseOutput(stdout),
      });
    });
  },
  gatherOutputs: async (context: ProjectContext) => {
    const stack = getStack(context);

    const tf = context.terraform;
    if (!tf) {
      throw Errors.Internal(
        "No terraform cli found, initializeTerraform needs to be run first"
      );
    }
    const outputs = await tf.output();
    const outputsByConstructId = getConstructIdsForOutputs(
      JSON.parse(stack.content),
      outputs
    );

    return Promise.resolve({ outputs, outputsByConstructId });
  },
};

const guards = {
  targetActionIs: (
    context: ProjectContext,
    _event: any,
    state: { cond: { value: string } } // https://xstate.js.org/docs/guides/guards.html#custom-guards
  ) => context.targetAction === state.cond.value,
  autoApprove: (context: ProjectContext) => Boolean(context.autoApprove),
  planNeedsNoApply: (
    _context: ProjectContext,
    event: { data: TerraformPlan }
  ) => event.data.needsApply === false,
};

const projectExecutionMachine = createMachine<ProjectContext, ProjectEvent>(
  {
    id: "project",
    initial: "idle",
    context: {
      onProgress: () => {}, // eslint-disable-line @typescript-eslint/no-empty-function
      // Mandatorily set by withContext
      synthCommand: "",
      workingDirectory: "",
      outDir: "",
    },
    states: {
      idle: {
        on: {
          START: {
            target: "synth",
            actions: assign({
              targetAction: (_context, event) => event.targetAction,
              targetStack: (_context, event) => event.targetStack,
            }),
          },
        },
      },
      synth: {
        invoke: {
          id: "synth",
          src: "synthProject",
          onError: {
            target: "error",
            actions: assign({
              message: (_context, event) =>
                extractError("Synth errors")(_context, event),
            }),
          },
          onDone: [
            {
              target: "done",
              actions: assign({
                synthesizedStacks: (_context, event) => event.data,
              }),
              cond: {
                type: "targetActionIs",
                name: "actionIsSynth",
                value: "synth",
              },
            },
            {
              target: "init",
              actions: assign({
                synthesizedStacks: (_context, event) => event.data,
              }),
            },
          ],
        },
      },
      init: {
        invoke: {
          id: "initializeTerraform",
          src: "initializeTerraform",
          onError: {
            target: "error",
            actions: assign({
              message: (_context, event) =>
                extractError("terraform init errored with")(_context, event),
            }),
          },
          onDone: [
            {
              target: "gatherOutputs",
              actions: assign({
                terraform: (_context, event) => event.data,
              }),
              cond: {
                type: "targetActionIs",
                name: "actionIsOutput",
                value: "output",
              },
            },
            {
              target: "diff",
              actions: assign({
                terraform: (_context, event) => event.data,
              }),
            },
          ],
        },
      },
      diff: {
        invoke: {
          id: "diff",
          src: "diff",
          onError: {
            target: "error",
            actions: assign({
              message: (_context, event) =>
                extractError("terraform plan errored with")(_context, event),
            }),
          },
          onDone: [
            {
              target: "done",
              actions: assign({
                targetStackPlan: (_context, event) => event.data,
              }),
              cond: {
                type: "targetActionIs",
                name: "actionIsDiff",
                value: "diff",
              },
            },

            {
              actions: assign({
                targetStackPlan: (_context, event) => event.data,
              }),
              target: "gatherOutputs",
              cond: "planNeedsNoApply",
            },
            {
              actions: assign({
                targetStackPlan: (_context, event) => event.data,
              }),
              target: "approved",
              cond: "autoApprove",
            },
            {
              actions: assign({
                targetStackPlan: (_context, event) => event.data,
              }),
              target: "waitingForApproval",
            },
          ],
        },
      },
      waitingForApproval: {
        on: {
          APPROVAL_ABORTED: {
            target: "done",
          },
          APPROVAL_GIVEN: {
            target: "approved",
          },
        },
      },
      approved: {
        always: [
          {
            target: "deploy",
            cond: {
              type: "targetActionIs",
              name: "actionIsDeploy",
              value: "deploy",
            },
          },
          {
            target: "destroy",
            cond: {
              type: "targetActionIs",
              name: "actionIsDestroy",
              value: "destroy",
            },
          },
        ],
      },
      deploy: {
        invoke: {
          id: "deploy",
          src: "deploy",
          onError: {
            target: "error",
            actions: assign({
              message: (_context, event) =>
                extractError("terraform depoly errored with")(_context, event),
            }),
          },
          onDone: {
            target: "gatherOutputs",
          },
        },
      },
      destroy: {
        invoke: {
          id: "destroy",
          src: "destroy",
          onError: {
            target: "error",
            actions: assign({
              message: (_context, event) =>
                extractError("terraform destroy errored with")(_context, event),
            }),
          },
          onDone: {
            target: "done",
          },
        },
      },
      gatherOutputs: {
        invoke: {
          id: "gatherOutputs",
          src: "gatherOutputs",
          onError: {
            target: "error",
            actions: assign({
              message: (_context, event) =>
                extractError("terraform output errored with")(_context, event),
            }),
          },
          onDone: {
            target: "done",
            actions: assign({
              outputs: (_context, event) => event.data.outputs,
              outputsByConstructId: (_context, event) =>
                event.data.outputsByConstructId,
            }),
          },
        },
      },
      done: {
        type: "final",
      },
      error: {
        type: "final",
      },
    },
  },
  { services, guards: guards as any }
);

export { projectExecutionMachine, guards, services };
