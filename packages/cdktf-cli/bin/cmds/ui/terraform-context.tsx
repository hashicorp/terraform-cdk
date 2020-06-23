/* eslint-disable no-control-regex */
import React from 'react'
import * as path from 'path'
import { Terraform, DeployingResource, DeployingResourceApplyState, PlannedResourceAction, PlannedResource, TerraformPlan } from "./models/terraform"
import { SynthStack } from '../helper/synth-stack'

type DefaultValue = undefined;
type ContextValue = DefaultValue | DeployState;

const TerraformContextState = React.createContext<ContextValue>(undefined)
// eslint-disable-next-line @typescript-eslint/no-empty-function
const TerraformContextDispatch = React.createContext((() => {}) as React.Dispatch<Action>);

export enum Status {
  STARTING = 'starting',
  SYNTHESIZING = 'synthesizing',
  INITIALIZING = 'initializing',
  PLANNING = 'planning',
  DEPLOYING = 'deploying',
  DONE = 'done'
}

const stripAnsi = (str: string): string => {
  return str.replace(/[\u001b\u009b][[()#;?]*(?:[0-9]{1,4}(?:;[0-9]{0,4})*)?[0-9A-ORZcf-nqry=><]/g, '')
}

const parseOutput = (str: string): DeployingResource | undefined => {
  const line = stripAnsi(str.toString())
  const resourceMatch = line.match(/^([a-zA-Z\d_.]*):/)
  // const stateMatch = line.match(/creating.../)

  // if (stateMatch?.length === 0) return;

  if (resourceMatch && resourceMatch.length >= 0) {
    return {
      id: resourceMatch[1],
      action: PlannedResourceAction.CREATE,
      applyState: DeployingResourceApplyState.CREATING
    }
  } else {
    return
  }
}

type DeployState = {
  status: Status;
  resources: DeployingResource[];
  plannedResources?: PlannedResource[];
  stackName?: string;
  errors?: string[];
  planFile?: string;
 }

 type Action =
 | { type: 'SYNTH' }
 | { type: 'NEW_STACK'; stackName: string }
 | { type: 'INIT' }
 | { type: 'PLAN' }
 | { type: 'PLANNED'; resources: PlannedResource[]; planFile: string}
 | { type: 'DEPLOY'; resources: DeployingResource[] }
 | { type: 'UPDATE_RESOURCE'; resource: DeployingResource }
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
      return {...state, status: Status.SYNTHESIZING }
    }
    case 'NEW_STACK': {
      return {...state, stackName: action.stackName }
    }
    case 'INIT': {
      return {...state, status: Status.INITIALIZING }
    }
    case 'PLAN': {
      return {...state, status: Status.PLANNING }
    }
    case 'PLANNED': {
      return {...state, plannedResources: action.resources, planFile: action.planFile}
    }
    case 'DEPLOY': {
      return {...state, status: Status.DEPLOYING, resources: action.resources }
    }
    case 'DONE': {
      return {...state, status: Status.DONE }
    }
    case 'ERROR': {
      return {...state, errors: [...(Array.isArray(state.errors) ? state.errors : []), action.error] }
    }
    default: {
      throw new Error(`Unhandled action type: ${JSON.stringify(action, null, 2)}`)
    }
  }
}

// eslint-disable-next-line react/prop-types
export const TerraformProvider: React.FunctionComponent<{}> = ({children}): React.ReactElement => {
  const [state, dispatch] = React.useReducer(deployReducer, {status: Status.STARTING, resources: []})

  return(
    <TerraformContextState.Provider value={state}>
      <TerraformContextDispatch.Provider value={dispatch}>
        { children }
      </TerraformContextDispatch.Provider>
    </TerraformContextState.Provider>
  )
}
interface UseTerraformInput {
  targetDir: string;
  synthCommand: string;
}

export const useTerraformState = () => {
  const state = React.useContext(TerraformContextState)

  if (state === undefined) {
    throw new Error('useTerraformState must be used within a TerraformContextState.Provider')
  }

  return state
}

export const useTerraform = ({targetDir, synthCommand}: UseTerraformInput) => {
  const dispatch = React.useContext(TerraformContextDispatch)
  const state = useTerraformState()

  if (dispatch === undefined) {
    throw new Error('useTerraform must be used within a TerraformContextDispatch.Provider')
  }

  const cwd = process.cwd();
  const outdir = path.join(cwd, targetDir);
  const terraform = new Terraform(outdir);

  const execTerraformSynth = async () => {
    try {
      dispatch({type: 'SYNTH'})
      const stacks = await SynthStack.synth(synthCommand, targetDir);
      dispatch({type: 'NEW_STACK', stackName: stacks[0].name})
    } catch(e) {
      dispatch({type: 'ERROR', error: e})
    }
  }

  const execTerraformInit = async () => {
    try {
      dispatch({type: 'INIT'})
      await terraform.init();
    } catch(e) {
      dispatch({type: 'ERROR', error: e})
    }
  }

  const execTerraformPlan = async (): Promise<TerraformPlan | undefined> => {
    let plan: TerraformPlan
    try {
      dispatch({type: 'PLAN'})
      plan = await terraform.plan();
      dispatch({type: 'PLANNED', resources: plan.resources, planFile: plan.planFile})
      return plan
    } catch(e) {
      dispatch({type: 'ERROR', error: e})
    }
    return
  }

  const execTerraformApply = async (plan: TerraformPlan) => {
    try {
      if (plan.needsApply) {
        const resources: DeployingResource[] = plan.resources.map((r: PlannedResource) => (Object.assign({}, r, {applyState: DeployingResourceApplyState.WAITING})))
        dispatch({type: 'DEPLOY', resources})

        await terraform.deploy(plan.planFile, (output: Buffer) => {
          const resource = parseOutput(output.toString());
          if (resource) {
            dispatch({type: 'UPDATE_RESOURCE', resource})
          }
        });
      }
      dispatch({type: 'DONE'})
    } catch(e) {
      dispatch({type: 'ERROR', error: e})
    }
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

  const deploy = () => {
    React.useEffect(() => {
      const invoke = async () => {
        await execTerraformSynth()
        await execTerraformInit()
        const plan = await execTerraformPlan()
        if (plan) {
          await execTerraformApply(plan)
        } else {
          throw new Error("expected plan to be present but was undefined")
        }
      }
      invoke()
    }, []) // once

    return state
  }

  return {
    init,
    plan,
    deploy
  }
}
