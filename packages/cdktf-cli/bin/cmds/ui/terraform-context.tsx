/* eslint-disable no-control-regex */
import React, { ReactNode } from "react";
import { TerraformCli } from "./models/terraform-cli";
import { TerraformCloud, TerraformCloudPlan } from "./models/terraform-cloud";
import {
  Terraform,
  DeployingResource,
  DeployingResourceApplyState,
  PlannedResourceAction,
  PlannedResource,
  TerraformPlan,
  TerraformOutput,
} from "./models/terraform";
import { SynthStack } from "../helper/synth-stack";
import { TerraformJson } from "./terraform-json";
import { useApp } from "ink";
import stripAnsi from "strip-ansi";
import * as chalk from "chalk";
import { SynthesizedStack } from "../helper/synth-stack";
import { logger } from "../../../lib/logging";
import { schema, ActionTypes } from "./models/schema";
import * as z from "zod";
import { AnnotationMetadataEntryType } from "cdktf";

const chalkColour = new chalk.Instance();

type DefaultValue = undefined;
type ContextValue = DefaultValue | DeployState;

const TerraformContextState = React.createContext<ContextValue>(undefined);
const TerraformContextDispatch = React.createContext(
  // eslint-disable-next-line @typescript-eslint/no-empty-function
  (() => {}) as React.Dispatch<Action>
);

export enum Status {
  STARTING = "starting",
  SYNTHESIZING = "synthesizing",
  SYNTHESIZED = "synthesized",
  INITIALIZING = "initializing",
  PLANNING = "planning",
  PLANNED = "planned",
  DEPLOYING = "deploying",
  DESTROYING = "destroying",
  DONE = "done",
}

const mapActionToState = (action: ActionTypes, done: boolean) => {
  switch (action) {
    case "create":
    case "update":
      return done
        ? DeployingResourceApplyState.CREATED
        : DeployingResourceApplyState.CREATING;
    case "delete":
      return done
        ? DeployingResourceApplyState.DESTROYED
        : DeployingResourceApplyState.DESTROYING;
    default:
      return DeployingResourceApplyState.WAITING;
  }
};
const parseJsonOutputLine = (
  line: string
): Omit<DeployingResource, "action"> | undefined => {
  let json, message;
  try {
    json = JSON.parse(line);
  } catch {
    logger.trace(`Could not parse line as JSON: ${line}`);
    return;
  }

  try {
    message = schema.parse(json);
  } catch (err) {
    if (err instanceof z.ZodError) {
      logger.warn(
        `Error parsing line into schema: ${JSON.stringify(
          err.errors
        )} => ${line}`
      );
    }

    return;
  }

  switch (message.type) {
    case "apply_start":
    case "apply_progress":
      return {
        id: message.hook.resource.resource,
        applyState: mapActionToState(message.hook.action, false),
      };

    case "apply_complete":
      return {
        id: message.hook.resource.resource,
        applyState: mapActionToState(message.hook.action, true),
      };
    default:
      return;
  }
};

const parseTextOutputLine = (
  line: string
): Omit<DeployingResource, "action"> | undefined => {
  if (/^Outputs:/.test(line)) {
    return;
  }
  if (/^Plan:/.test(line)) {
    return;
  }
  if (/^data\..*/.test(line)) {
    return;
  }

  const resourceMatch = line.match(/^([a-zA-Z_][a-zA-Z\d_\-.]*):/);
  let applyState: DeployingResourceApplyState;

  switch (true) {
    case /Creating.../.test(line):
    case /Still creating.../.test(line):
      applyState = DeployingResourceApplyState.CREATING;
      break;
    case /Creation complete/.test(line):
      applyState = DeployingResourceApplyState.CREATED;
      break;
    case /Modifying.../.test(line):
      applyState = DeployingResourceApplyState.UPDATING;
      break;
    case /Modifications complete/.test(line):
      applyState = DeployingResourceApplyState.UPDATED;
      break;
    case /Destroying.../.test(line):
    case /Still destroying.../.test(line):
      applyState = DeployingResourceApplyState.DESTROYING;
      break;
    case /Destruction complete/.test(line):
      applyState = DeployingResourceApplyState.DESTROYED;
      break;
    default:
      return;
  }

  if (
    resourceMatch &&
    resourceMatch.length >= 0 &&
    resourceMatch[1] != "Warning"
  ) {
    return {
      id: resourceMatch[1],
      applyState,
    };
  } else {
    return;
  }
};

export const parseOutput = (str: string): DeployingResource[] => {
  const lines = stripAnsi(str.toString()).split("\n");

  const resources = lines.map((line) => {
    const parsed = parseJsonOutputLine(line) || parseTextOutputLine(line);
    if (parsed === undefined) {
      return;
    }

    const { id, applyState } = parsed;
    return {
      id,
      applyState,
      action: PlannedResourceAction.CREATE,
    };
  });

  return resources.reduce((acc, resource) => {
    if (resource) {
      acc.push(resource);
    }
    return acc;
    // eslint-disable-next-line @typescript-eslint/no-array-constructor
  }, new Array());
};

export type DeployState = {
  status: Status;
  resources: DeployingResource[];
  plan?: TerraformPlan;
  url?: string;
  currentStack: SynthesizedStack;
  stacks?: SynthesizedStack[];
  errors?: string[];
  output?: { [key: string]: TerraformOutput };
};

type Action =
  | { type: "SYNTH" }
  | { type: "SYNTHESIZED"; stacks: SynthesizedStack[] }
  | { type: "CURRENT_STACK"; currentStack: SynthesizedStack }
  | { type: "INIT" }
  | { type: "PLAN" }
  | { type: "PLANNED"; plan: TerraformPlan }
  | { type: "DEPLOY"; resources: DeployingResource[] }
  | { type: "DESTROY"; resources: DeployingResource[] }
  | { type: "UPDATE_RESOURCES"; resources: DeployingResource[] }
  | { type: "OUTPUT"; output: { [key: string]: TerraformOutput } }
  | { type: "DONE" }
  | { type: "ERROR"; error: string };

function deployReducer(state: DeployState, action: Action): DeployState {
  switch (action.type) {
    case "UPDATE_RESOURCES": {
      const map = new Map<string, DeployingResource>(
        state.resources.map((r) => [r.id, r])
      );
      action.resources.forEach((r) => map.set(r.id, r));
      return {
        ...state,
        resources: [...map.values()],
      };
    }
    case "SYNTH": {
      return { ...state, status: Status.SYNTHESIZING };
    }
    case "SYNTHESIZED": {
      return { ...state, status: Status.SYNTHESIZED, stacks: action.stacks };
    }
    case "CURRENT_STACK": {
      return {
        ...state,
        currentStack: action.currentStack,
      };
    }
    case "INIT": {
      return { ...state, status: Status.INITIALIZING };
    }
    case "PLAN": {
      return { ...state, status: Status.PLANNING };
    }
    case "PLANNED": {
      if (action.plan instanceof TerraformCloudPlan) {
        return {
          ...state,
          status: Status.PLANNED,
          plan: action.plan,
          url: action.plan.url,
        };
      } else {
        return {
          ...state,
          status: Status.PLANNED,
          plan: action.plan,
        };
      }
    }
    case "DEPLOY": {
      return {
        ...state,
        status: Status.DEPLOYING,
        resources: action.resources,
      };
    }
    case "DESTROY": {
      return {
        ...state,
        status: Status.DESTROYING,
        resources: action.resources,
      };
    }
    case "OUTPUT": {
      return { ...state, output: action.output };
    }
    case "DONE": {
      return { ...state, status: Status.DONE };
    }
    case "ERROR": {
      return {
        ...state,
        errors: [
          ...(Array.isArray(state.errors) ? state.errors : []),
          action.error,
        ],
      };
    }
    default: {
      throw new Error(
        `Unhandled action type: ${JSON.stringify(action, null, 2)}`
      );
    }
  }
}

interface TerraformProviderConfig {
  initialState?: DeployState;
  children: ReactNode;
}

// eslint-disable-next-line react/prop-types
export const TerraformProvider: React.FunctionComponent<
  TerraformProviderConfig
> = ({
  children,
  initialState,
}: TerraformProviderConfig): React.ReactElement => {
  const initialCurrentStack: SynthesizedStack = {
    constructPath: "",
    content: "",
    name: "",
    annotations: [],
    dependencies: [],
    synthesizedStackPath: "",
    workingDirectory: "",
  };

  const [state, dispatch] = React.useReducer(
    deployReducer,
    initialState || {
      status: Status.STARTING,
      resources: [],
      currentStack: initialCurrentStack,
    }
  );

  return (
    <TerraformContextState.Provider value={state}>
      <TerraformContextDispatch.Provider value={dispatch}>
        {children}
      </TerraformContextDispatch.Provider>
    </TerraformContextState.Provider>
  );
};

export const useTerraformState = () => {
  const state = React.useContext(TerraformContextState);

  if (state === undefined) {
    throw new Error(
      "useTerraformState must be used within a TerraformContextState.Provider"
    );
  }

  return state;
};

const useTerraformDispatch = () => {
  const dispatch = React.useContext(TerraformContextDispatch);

  if (dispatch === undefined) {
    throw new Error(
      "useTerraform must be used within a TerraformContextDispatch.Provider"
    );
  }

  return dispatch;
};

const useConfirmation = ({
  autoApprove = false,
}: {
  autoApprove?: boolean;
}) => {
  const { exit } = useApp();
  const [confirmed, setConfirmed] = React.useState<boolean>(autoApprove);
  const confirmationCallback = React.useCallback(
    (submitValue) => {
      if (submitValue === false) {
        exit();
        return;
      }

      setConfirmed(submitValue);
    },
    [exit]
  );

  return [confirmed, confirmationCallback] as const;
};

interface UseTerraformOptions {
  targetDir: string;
  targetStack?: string;
  synthCommand: string;
  isSpeculative?: boolean;
}

export const useTerraform = ({
  targetDir,
  targetStack,
  synthCommand,
  isSpeculative = false,
}: UseTerraformOptions) => {
  const dispatch = useTerraformDispatch();
  const state = useTerraformState();
  const [terraform, setTerraform] = React.useState<Terraform>();

  const executorForStack = async (stack: SynthesizedStack): Promise<void> => {
    const parsedStack = JSON.parse(stack.content) as TerraformJson;

    if (parsedStack.terraform?.backend?.remote) {
      const tfClient = new TerraformCloud(
        stack,
        parsedStack.terraform?.backend?.remote,
        isSpeculative
      );
      if (await tfClient.isRemoteWorkspace()) {
        setTerraform(tfClient);
      } else {
        setTerraform(new TerraformCli(stack));
      }
    } else {
      setTerraform(new TerraformCli(stack));
    }
  };

  const execTerraformSynth = async (loadExecutor = true) => {
    try {
      dispatch({ type: "SYNTH" });
      const stacks = await SynthStack.synth(synthCommand, targetDir);

      printAnnotations(stacks);

      if (loadExecutor) {
        if (stacks.length > 1 && !targetStack) {
          throw new Error(
            `Found more than one stack, please specify a target stack. Run cdktf <verb> <stack> with one of these stacks: ${stacks
              .map((s) => s.name)
              .join(", ")} `
          );
        }
        const stack = targetStack
          ? stacks.find((s) => s.name === targetStack)
          : stacks[0];
        if (!stack)
          throw new Error(
            `Can't find given stack ${targetStack} - Found the following stacks ${stacks
              .map((s) => s.name)
              .join(", ")}`
          );

        dispatch({ type: "CURRENT_STACK", currentStack: stack });

        await executorForStack(stack);
      } else {
        // synth
        const stack = targetStack
          ? stacks.find((s) => s.name === targetStack)
          : stacks[0];
        if (stack) {
          dispatch({ type: "CURRENT_STACK", currentStack: stack });
        }
      }

      dispatch({ type: "SYNTHESIZED", stacks });
    } catch (e) {
      dispatch({ type: "ERROR", error: e });
    }
  };

  const execTerraformInit = async () => {
    try {
      if (!terraform)
        throw new Error(
          "Internal error: Terraform is not initialized yet. Please call synth() with loadExecutor: true first"
        );
      dispatch({ type: "INIT" });
      await terraform.init();
    } catch (e) {
      dispatch({ type: "ERROR", error: e });
    }
  };

  const execTerraformOutput = async () => {
    try {
      if (!terraform) throw new Error("Terraform is not initialized yet");
      const output = await terraform.output();
      dispatch({ type: "OUTPUT", output });
    } catch (e) {
      dispatch({ type: "ERROR", error: e });
    }
  };

  const execTerraformPlan = async (
    destroy = false
  ): Promise<TerraformPlan | undefined> => {
    let plan: TerraformPlan;
    try {
      if (!terraform) throw new Error("Terraform is not initialized yet");
      dispatch({ type: "PLAN" });
      plan = await terraform.plan(destroy);
      dispatch({ type: "PLANNED", plan });
      return plan;
    } catch (e) {
      dispatch({ type: "ERROR", error: e });
    }
    return;
  };

  const execTerraformApply = async () => {
    const plan = state.plan;
    try {
      if (!terraform) throw new Error("Terraform is not initialized yet");
      if (!plan) throw new Error("No plan");
      if (plan.needsApply) {
        const resources: DeployingResource[] = plan.applyableResources.map(
          (r: PlannedResource) =>
            Object.assign({}, r, {
              applyState: DeployingResourceApplyState.WAITING,
            })
        );
        dispatch({ type: "DEPLOY", resources });
        await terraform.deploy(plan.planFile, (output: Buffer) => {
          const resources = parseOutput(output.toString());
          dispatch({ type: "UPDATE_RESOURCES", resources });
        });
      }
      dispatch({ type: "DONE" });
    } catch (e) {
      dispatch({ type: "ERROR", error: e });
    }
  };

  const execTerraformDestroy = async () => {
    const plan = state.plan;
    try {
      if (!terraform) throw new Error("Terraform is not initialized yet");
      if (!plan) throw new Error("No plan");
      if (plan.needsApply) {
        const resources: DeployingResource[] = plan.applyableResources.map(
          (r: PlannedResource) =>
            Object.assign({}, r, {
              applyState: DeployingResourceApplyState.WAITING,
            })
        );
        dispatch({ type: "DESTROY", resources });

        await terraform.destroy((output: Buffer) => {
          const resources = parseOutput(output.toString());
          dispatch({ type: "UPDATE_RESOURCES", resources });
        });
      }
      dispatch({ type: "DONE" });
    } catch (e) {
      dispatch({ type: "ERROR", error: e });
    }
  };

  return {
    synth: execTerraformSynth,
    deploy: execTerraformApply,
    diff: execTerraformPlan,
    output: execTerraformOutput,
    destroy: execTerraformDestroy,
    init: execTerraformInit,
  };
};

const useRunOnce = <Fn extends (...args: any[]) => any>(
  fn: Fn,
  ...args: Parameters<Fn>
) => {
  React.useEffect(() => {
    fn(...args);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []); // only run once on mount – ignore any changes to fn
};

export const useRunWhen = <Fn extends (...args: any[]) => any>(
  condition: boolean,
  fn: Fn,
  ...args: Parameters<Fn>
) => {
  React.useEffect(() => {
    if (condition) fn(...args);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [condition]); // only run if condition changes
};

type UseRunSynthOptions = UseTerraformOptions;
export const useRunSynth = (options: UseRunSynthOptions) => {
  const state = useTerraformState();
  const { synth } = useTerraform(options);

  useRunOnce(synth, false);

  return state;
};

type UseRunInitOptions = UseTerraformOptions;
export const useRunInit = (options: UseRunInitOptions) => {
  const { synth, init } = useTerraform(options);
  const state = useTerraformState();

  useRunOnce(synth);
  useRunWhen(state.status === Status.SYNTHESIZED, init);

  return state;
};

type UseRunDiffOptions = UseTerraformOptions;
export const useRunDiff = (options: UseRunDiffOptions) => {
  const { synth, init, diff } = useTerraform(options);
  const state = useTerraformState();

  useRunOnce(synth);
  useRunWhen(state.status === Status.SYNTHESIZED, async () => {
    await init();
    await diff();
  });

  return state;
};

interface UseRunDeployOptions extends UseTerraformOptions {
  autoApprove?: boolean;
}
export const useRunDeploy = ({
  autoApprove,
  ...options
}: UseRunDeployOptions) => {
  const state = useTerraformState();
  const { synth, init, diff, deploy, output } = useTerraform(options);
  const [confirmed, confirmationCallback] = useConfirmation({ autoApprove });

  useRunOnce(synth);
  useRunWhen(state.status === Status.SYNTHESIZED, async () => {
    await init();
    await diff();
  });
  useRunWhen(confirmed && state.status === Status.PLANNED, async () => {
    await deploy();
    await output();
  });

  return {
    state,
    confirmation: confirmationCallback,
    isConfirmed: confirmed,
  };
};

interface UseRunDestroyOptions extends UseTerraformOptions {
  autoApprove?: boolean;
}
export const useRunDestroy = ({
  autoApprove,
  ...options
}: UseRunDestroyOptions) => {
  const state = useTerraformState();
  const { synth, init, diff, destroy } = useTerraform(options);
  const [confirmed, confirmationCallback] = useConfirmation({ autoApprove });

  useRunOnce(synth);
  useRunWhen(state.status === Status.SYNTHESIZED, async () => {
    await init();
    await diff(true); // true = plan a destroy
  });
  useRunWhen(confirmed && state.status === Status.PLANNED, async () => {
    await destroy();
  });

  return {
    state,
    confirmation: confirmationCallback,
    isConfirmed: confirmed,
  };
};

/**
 * prints annotations via console
 * @throws Error if an Annotation with level === ERROR has been encountered
 */
function printAnnotations(stacks: SynthesizedStack[]) {
  let encounteredAnnotationError = false;

  stacks.forEach((stack) =>
    (stack.annotations || []).forEach((annotation) => {
      if (annotation.level === AnnotationMetadataEntryType.ERROR)
        encounteredAnnotationError = true;

      let color = chalkColour.whiteBright;
      let level: string = annotation.level;
      switch (annotation.level) {
        case AnnotationMetadataEntryType.INFO: {
          level = "INFO";
          break;
        }
        case AnnotationMetadataEntryType.WARN: {
          color = chalkColour.hex("#FFA500"); // orange
          level = "WARN";
          break;
        }
        case AnnotationMetadataEntryType.ERROR: {
          color = chalkColour.redBright;
          level = "ERROR";
          break;
        }
      }
      console.log(
        color(`${level} [${annotation.constructPath}]: ${annotation.message}`)
      );
      if (
        annotation.level === AnnotationMetadataEntryType.ERROR &&
        annotation.stacktrace
      )
        console.log(chalkColour.gray(annotation.stacktrace.join("\n")));
    })
  );

  if (encounteredAnnotationError) {
    throw new Error(
      "While synthesizing one or more error annotations have been encountered. Please check the log output above."
    );
  }
}
