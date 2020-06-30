/* eslint-disable no-control-regex */
import React from 'react'
import * as path from 'path'
import { Terraform, ITerraform, DeployingResource, DeployingResourceApplyState, PlannedResourceAction, PlannedResource, TerraformPlan, TerraformOutput } from "./models/terraform"
import { synthesizeStack, SynthesizedStack } from '../helper/synth-stack'

type DefaultValue = undefined;
type ContextValue = DefaultValue | DeployState;

export const TerraformContextState = React.createContext<ContextValue>(undefined)
// eslint-disable-next-line @typescript-eslint/no-empty-function
export const TerraformContextDispatch = React.createContext((() => { }) as React.Dispatch<Action>);

export enum Status {
  STARTING = 'starting',
  SYNTHESIZING = 'synthesizing',
  SYNTHESIZED = 'synthesized',
  INITIALIZING = 'initializing',
  PLANNING = 'planning',
  PLANNED = 'planned',
  DEPLOYING = 'deploying',
  DONE = 'done'
}

const stripAnsi = (str: string): string => {
  return str.replace(/[\u001b\u009b][[()#;?]*(?:[0-9]{1,4}(?:;[0-9]{0,4})*)?[0-9A-ORZcf-nqry=><]/g, '')
}

const parseOutput = (str: string): DeployingResource | undefined => {
  const line = stripAnsi(str.toString())
  const resourceMatch = line.match(/^([a-zA-Z\d_.]*):/)
  let applyState: DeployingResourceApplyState;

  switch (true) {
    case /Creating.../.test(line):
      applyState = DeployingResourceApplyState.CREATING
      break;
    case /Creation complete/.test(line):
      applyState = DeployingResourceApplyState.CREATED
      break;
    case /Modifying.../.test(line):
      applyState = DeployingResourceApplyState.UPDATING
      break;
    case /Modifications complete/.test(line):
      applyState = DeployingResourceApplyState.UPDATED
      break;
    case /Destroying.../.test(line):
      applyState = DeployingResourceApplyState.DESTROYING
      break;
    case /Destruction complete/.test(line):
      applyState = DeployingResourceApplyState.DESTROYED
      break;
    default:
      applyState = DeployingResourceApplyState.SUCCESS
    // case /Destruction complete/.test(line):
    //   applyState = DeployingResourceApplyState.DESTROYED
    //   break;
  }

  // if (stateMatch?.length === 0) return;

  if (resourceMatch && resourceMatch.length >= 0) {
    return {
      id: resourceMatch[1],
      action: PlannedResourceAction.CREATE,
      applyState
    }
  } else {
    return
  }
}

export type DeployState = {
  status: Status;
  resources: DeployingResource[];
  plan?: TerraformPlan;
  stackName?: string;
  stackJSON?: string;
  errors?: string[];
  output?: { [key: string]: TerraformOutput };
}

type Action =
  | { type: 'SYNTH' }
  | { type: 'NEW_STACK'; stackName: string; stackJSON: string }
  | { type: 'INIT' }
  | { type: 'PLAN' }
  | { type: 'PLANNED'; plan: TerraformPlan }
  | { type: 'DEPLOY'; resources: DeployingResource[] }
  | { type: 'UPDATE_RESOURCE'; resource: DeployingResource }
  | { type: 'OUTPUT'; output: { [key: string]: TerraformOutput } }
  | { type: 'DONE' }
  | { type: 'ERROR'; error: string };


function deployReducer(state: DeployState, action: Action): DeployState {
  switch (action.type) {
    case 'UPDATE_RESOURCE': {
      return {
        ...state,
        resources: state.resources.map((r: DeployingResource) => (r.id === action.resource.id ? action.resource : r))
      }
    }
    case 'SYNTH': {
      return { ...state, status: Status.SYNTHESIZING }
    }
    case 'NEW_STACK': {
      return {
        ...state,
        status: Status.SYNTHESIZED,
        stackName: action.stackName,
        stackJSON: action.stackJSON
      }
    }
    case 'INIT': {
      return { ...state, status: Status.INITIALIZING }
    }
    case 'PLAN': {
      return { ...state, status: Status.PLANNING }
    }
    case 'PLANNED': {
      return {
        ...state,
        status: Status.PLANNED,
        plan: action.plan
      }
    }
    case 'DEPLOY': {
      return { ...state, status: Status.DEPLOYING, resources: action.resources }
    }
    case 'OUTPUT': {
      return { ...state, output: action.output }
    }
    case 'DONE': {
      return { ...state, status: Status.DONE }
    }
    case 'ERROR': {
      return { ...state, errors: [...(Array.isArray(state.errors) ? state.errors : []), action.error] }
    }
    default: {
      throw new Error(`Unhandled action type: ${JSON.stringify(action, null, 2)}`)
    }
  }
}

interface TerraformProviderConfig {
  initialState?: DeployState
}

// eslint-disable-next-line react/prop-types
export const TerraformProvider: React.FunctionComponent<TerraformProviderConfig> = ({ children, initialState }): React.ReactElement => {
  const [state, dispatch] = React.useReducer(deployReducer, initialState || { status: Status.STARTING, resources: [] })

  return (
    <TerraformContextState.Provider value={state}>
      <TerraformContextDispatch.Provider value={dispatch}>
        {children}
      </TerraformContextDispatch.Provider>
    </TerraformContextState.Provider>
  )
}
interface UseTerraformInput {
  targetDir?: string;
  synthCommand?: string;
  terraformWrapper?: ITerraform;
  synthStack?: () => Promise<SynthesizedStack[]>
}

export const useTerraformState = () => {
  const state = React.useContext(TerraformContextState)

  if (state === undefined) {
    throw new Error('useTerraformState must be used within a TerraformContextState.Provider')
  }

  return state
}

export const useTerraformDispatch = () => {
  const dispatch = React.useContext(TerraformContextDispatch)

  if (dispatch === undefined) {
    throw new Error('useTerraformState must be used within a TerraformContextState.Provider')
  }

  return dispatch
}

export const useTerraform = ({ targetDir, synthCommand, synthStack, terraformWrapper }: UseTerraformInput) => {
  const dispatch = useTerraformDispatch()
  const state = useTerraformState()
  let terraform: ITerraform;

  if (targetDir && !terraformWrapper) {
    const cwd = process.cwd();
    const outdir = path.join(cwd, targetDir);
    terraform = new Terraform(outdir);
  }


  const execTerraformSynth = async () => {
    try {
      dispatch({ type: 'SYNTH' })
      let stacks: SynthesizedStack[];

      if (targetDir && synthCommand && !synthStack) {
        stacks = await synthesizeStack(synthCommand, targetDir);
      } else {
        stacks = await synthStack!();
      }
      dispatch({ type: 'NEW_STACK', stackName: stacks[0].name, stackJSON: stacks[0].content })
    } catch (e) {
      dispatch({ type: 'ERROR', error: e })
    }
  }

  const execTerraformInit = async () => {
    try {
      dispatch({ type: 'INIT' })
      await terraform.init();
    } catch (e) {
      dispatch({ type: 'ERROR', error: e })
    }
  }

  const execTerraformOutput = async () => {
    try {
      const output = await terraform.output();
      dispatch({ type: 'OUTPUT', output })
    } catch (e) {
      dispatch({ type: 'ERROR', error: e })
    }
  }

  const execTerraformPlan = async (): Promise<TerraformPlan | undefined> => {
    let plan: TerraformPlan
    try {
      dispatch({ type: 'PLAN' })
      plan = await terraform.plan();
      dispatch({ type: 'PLANNED', plan })
      return plan
    } catch (e) {
      dispatch({ type: 'ERROR', error: e })
    }
    return
  }

  const execTerraformApply = async (plan: TerraformPlan) => {
    try {
      if (plan.needsApply) {
        const resources: DeployingResource[] = plan.resources.map((r: PlannedResource) => (Object.assign({}, r, { applyState: DeployingResourceApplyState.WAITING })))
        dispatch({ type: 'DEPLOY', resources })

        await terraform.deploy(plan.planFile, (output: Buffer) => {
          const resource = parseOutput(output.toString());
          if (resource) {
            dispatch({ type: 'UPDATE_RESOURCE', resource })
          }
        });
      }
      dispatch({ type: 'DONE' })
    } catch (e) {
      dispatch({ type: 'ERROR', error: e })
    }
  }

  const synth = () => {
    React.useEffect(() => {
      const invoke = async () => {
        await execTerraformSynth()
      }

      invoke()
    }, []) // once

    return state
  }

  const init = () => {
    React.useEffect(() => {
      const invoke = async () => {
        await execTerraformSynth()
        await execTerraformInit()
      }

      invoke()
    }, []) // once

    return state
  }

  const plan = () => {
    React.useEffect(() => {
      const invoke = async () => {
        await execTerraformSynth()
        await execTerraformInit()
        await execTerraformPlan()
      }
      invoke()
    }, []) // once

    return state
  }

  const deploy = (plan?: TerraformPlan) => {
    React.useEffect(() => {
      const invoke = async () => {
        if (plan) {
          await execTerraformApply(plan)
        } else {
          throw new Error("expected plan to be present but was undefined")
        }

        await execTerraformOutput()
      }
      invoke()
    }, []) // once

    return state
  }

  return {
    synth,
    init,
    plan,
    deploy
  }
}
