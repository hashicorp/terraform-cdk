/* eslint-disable no-control-regex */
import React from 'react'
import { useApp } from 'ink'
import * as path from 'path'
import { DeployingResource, DeployingResourceApplyState, PlannedResourceAction } from "./models/terraform"
import { SynthStack } from '../helper/synth-stack'


// interface Props {
//   children: React.ReactNode | React.ReactNode[];
// }
const TerraformContextState = React.createContext({})
// eslint-disable-next-line @typescript-eslint/no-empty-function
const TerraformContextDispatch = React.createContext((() => {}) as React.Dispatch<Action>);

enum Status {
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
  stackName?: string;
 }

 type Action =
 | { type: 'UPDATE'; resource: DeployingResource }
 | { type: 'SYNTH' }
 | { type: 'INIT'; stackName: string }
 | { type: 'PLAN' }
 | { type: 'DEPLOY' };


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
    case 'INIT': {
      return {...state, status: Status.INITIALIZING, stackName: action.stackName }
    }
    case 'PLAN': {
      return {...state, status: Status.PLANNING }
    }
    case 'DEPLOY': {
      return {...state, status: Status.DEPLOYING }
    }
    default: {
      throw new Error(`Unhandled action type: ${action}`)
    }
  }
}

// const initialState = {
//   resources: [],
//   inProgress: false,
//   stage: 'synthing | diffing | deploying | done',
//   success: null,
//   error: null
// };

interface TerraformProviderConfig {
  children: React.Component[];
}

const TerraformProvider = ({children}: TerraformProviderConfig): React.ReactElement => {
  const [state, dispatch] = React.useReducer(deployReducer, {status: Status.STARTING, resources: []})

  return(
    <TerraformContextState.Provider value={state}>
      <TerraformContextDispatch.Provider value={dispatch}>
        { children }
      </TerraformContextDispatch.Provider>
    </TerraformContextState.Provider>
  )
}

// enum TerraformAction {
//   PLAN = 'plan',
//   APPLY = 'apply',
//   DESTROY = 'destroy',
// }

interface UseTerraformInput {
  targetDir: string;
  synthCommand: string;
}

const useTerraform = ({targetDir, synthCommand}: UseTerraformInput) => {
  const dispatch = React.useContext(TerraformContextDispatch)
  const { exit } = useApp()

  if (dispatch === undefined) {
    throw new Error('useCountState must be used within a TerraformProvider')
  }

  const cwd = process.cwd();
  const outdir = path.join(cwd, targetDir);

  const execTerraformInit = async () => {
    try {
      console.log({outdir, synthCommand})
      dispatch({type: 'SYNTH'})
      await SynthStack.synth(synthCommand, targetDir);
    } catch(e) {
      console.log(`error ${e}`)
      exit()
    }
  }

  const init = () => {
    const state = React.useContext(TerraformContextState)

    if (state === undefined) {
      throw new Error('useCountState must be used within a TerraformProvider')
    }

    React.useEffect(() => {
      dispatch({type: "INIT", stackName: "foo"})
      execTerraformInit()
    }, []) // once

    return state
  }

  return {
    init
  }

  // const plan = () => {
  //   React.useEffect(() => {
  //     const execTerraform = async () => {
  //       try {
  //         const cwd = process.cwd();
  //         const outdir = path.join(cwd, targetDir);
  //         context.dispatcher({type: 'SYNTH'})
  //         const stacks = await SynthStack.synth(synthCommand, targetDir);
  //         dispatcher({type: 'INIT', stackName: stacks[0].name})
  //         const terraform = new Terraform(outdir);
  //         await terraform.init();
  //         dispatcher({type: 'PLAN'})
  //         const plan = await terraform.plan();
  //         const res = plan.resources.map(r => (Object.assign({}, r, {applyState: DeployingResourceApplyState.WAITING})))
  //         setCurrentStatus(Status.DONE);
  //         await terraform.deploy(plan, (output: Buffer) => {
  //           const resource = parseOutput(output.toString());
  //           if (resource) {
  //             dispatcher({type: 'UPDATE', resource})
  //           }
  //         });
  //       } catch(e) {
  //         console.error(`${e}`)
  //         exit(e)
  //       }
  //     }
  //     execTerraform()
  //   }, []); // only once
  // }

  // const plan = () => {

  // }

}

export { TerraformProvider, useTerraform }