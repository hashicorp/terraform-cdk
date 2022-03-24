// Each action drives itself to completion and exposes updates to the user.

import { assign, createMachine } from "xstate";
import { AbortController } from "node-abort-controller"; // polyfill until we update to node 16
import { SynthesizedStack } from "./synth-stack";
import { Errors } from "./errors";
import { TerraformJson } from "./terraform-json";
import { TerraformCloud } from "./models/terraform-cloud";
import { TerraformCli } from "./models/terraform-cli";
import { TerraformPlan, Terraform } from "./models/terraform";
import { getConstructIdsForOutputs } from "./output";

export type StackEvent =
  | {
      type: "START";
      targetAction?: "diff" | "deploy" | "destroy" | "output";
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
    };

export interface StackContext {
  targetAction?: "diff" | "deploy" | "destroy" | "output";
  message?: string;
  stack?: SynthesizedStack;
  terraform?: Terraform;
  targetStackPlan?: TerraformPlan;
  autoApprove?: boolean;
  outputs?: Record<string, any>;
  outputsByConstructId?: Record<string, any>;
  onProgress: (event: ProgressEvent) => void;
  abortSignal: AbortSignal;
  cancelationReason?: string;
}

function extractError(_context: any, event: any): string {
  if (typeof event === "object" && event !== null && "data" in event) {
    const data = event.data;

    if ("stderr" in data) {
      return data.stderr;
    } else {
      return data;
    }
  } else if (
    typeof event === "object" &&
    event !== null &&
    "message" in event
  ) {
    return event.message;
  }

  return event;
}
function getStack(context: StackContext): SynthesizedStack {
  if (context.stack) {
    return context.stack;
  }
  throw Errors.Internal(
    `The stack execution expects "stack" property in the context, found ${JSON.stringify(
      context,
      null,
      2
    )}`
  );
}

function getLogCallbackForStack(
  context: StackContext
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
  abortSignal: AbortSignal,
  stack: SynthesizedStack,
  isSpeculative: boolean,
  sendLog: (stateName: string) => (message: string, isError?: boolean) => void
): Promise<Terraform> {
  const parsedStack = JSON.parse(stack.content) as TerraformJson;

  if (parsedStack.terraform?.backend?.remote) {
    const tfClient = new TerraformCloud(
      abortSignal,
      stack,
      parsedStack.terraform.backend.remote,
      isSpeculative,
      sendLog
    );
    if (await tfClient.isRemoteWorkspace()) {
      return tfClient;
    }
  }
  return new TerraformCli(abortSignal, stack, sendLog);
}

const services = {
  initializeTerraform: async (context: StackContext) => {
    const stack = getStack(context);
    context.onProgress({
      type: "STACK_SELECTED",
      stackName: stack.name,
    });
    const isSpeculative = !["deploy", "destroy"].includes(
      context.targetAction!
    );
    const terraform = await getTerraformClient(
      context.abortSignal,
      stack,
      isSpeculative,
      getLogCallbackForStack(context)
    );

    await terraform.init();

    return terraform;
  },
  diff: async (context: StackContext) => {
    const tf = context.terraform;
    if (!tf) {
      throw Errors.Internal(
        "No terraform cli found, initializeTerraform needs to be run first"
      );
    }

    return tf.plan(context.targetAction === "destroy");
  },
  deploy: async (context: StackContext) => {
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
      });
    });
  },
  destroy: async (context: StackContext) => {
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
      });
    });
  },
  gatherOutputs: async (context: StackContext) => {
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
    context: StackContext,
    _event: any,
    state: { cond: { value: string } } // https://xstate.js.org/docs/guides/guards.html#custom-guards
  ) => context.targetAction === state.cond.value,
  autoApprove: (context: StackContext) => Boolean(context.autoApprove),
  planNeedsNoApply: (_context: StackContext, event: { data: TerraformPlan }) =>
    event.data.needsApply === false,
};

const stackExecutionMachine = createMachine<StackContext, StackEvent>(
  {
    initial: "idle",
    context: {
      onProgress: () => {}, // eslint-disable-line @typescript-eslint/no-empty-function
      abortSignal: new AbortController().signal,
    },
    states: {
      idle: {
        on: {
          START: {
            target: "init",
            actions: assign({
              targetAction: (_context, event) => event.targetAction,
            }),
          },
        },
      },
      init: {
        invoke: {
          id: "initializeTerraform",
          src: "initializeTerraform",
          onError: {
            target: "error",
            actions: assign({
              message: (_context, event) => extractError(_context, event),
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
              message: (_context, event) => extractError(_context, event),
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
              message: (_context, event) => extractError(_context, event),
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
              message: (_context, event) => extractError(_context, event),
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
              message: (_context, event) => extractError(_context, event),
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

export { stackExecutionMachine, guards, services };
