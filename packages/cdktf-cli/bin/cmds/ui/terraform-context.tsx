/* eslint-disable no-control-regex */
import React from 'react'
import * as path from 'path'
import { Terraform, DeployingResource, DeployingResourceApplyState, PlannedResourceAction, PlannedResource } from "./models/terraform"
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
  console.log({line})
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
 | { type: 'UPDATE'; resource: DeployingResource }
 | { type: 'SYNTH' }
 | { type: 'NEW_STACK'; stackName: string }
 | { type: 'INIT' }
 | { type: 'PLAN' }
 | { type: 'PLANNED'; resources: PlannedResource[]; planFile: string}
 | { type: 'DEPLOY' }
 | { type: 'UPDATE_RESOURCE'; resource: DeployingResource }
 | { type: 'ERROR'; error: string };


function deployReducer(state: DeployState, action: Action): DeployState {
  switch (action.type) {
    case 'UPDATE': {
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
      return {...state, status: Status.DEPLOYING }
    }
    case 'ERROR': {
      return {...state, errors: [...(Array.isArray(state.errors) ? state.errors : []), action.error] }
    }
    default: {
      throw new Error(`Unhandled action type: ${action}`)
    }
  }
}
interface TerraformProviderConfig {
  children: React.Component[];
}

export const TerraformProvider = ({children}: TerraformProviderConfig): React.ReactElement => {
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

  const execTerraformPlan = async () => {
    try {
      dispatch({type: 'PLAN'})
      const plan = await terraform.plan();
      const resources = plan.resources.map((r: PlannedResource) => (Object.assign({}, r, {applyState: DeployingResourceApplyState.WAITING})))
      dispatch({type: 'PLANNED', resources, planFile: plan.planFile})
    } catch(e) {
      dispatch({type: 'ERROR', error: e})
    }
  }

  const execTerraformApply = async () => {
    try {
      const planFile = state.planFile
      if (!planFile) { throw new Error("expecting Planfile to be present but none found") }
      dispatch({type: 'DEPLOY'})
      await terraform.deploy(planFile, (output: Buffer) => {
        const resource = parseOutput(output.toString());
        if (resource) {
          dispatch({type: 'UPDATE_RESOURCE', resource})
        }
      });
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
        await execTerraformPlan()
        await execTerraformApply()
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
