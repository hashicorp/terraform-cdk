import React, { Fragment } from 'react';
import { Text, Box, Color, useApp } from 'ink'
import * as path from 'path'
import Spinner from 'ink-spinner';
import { Terraform, DeployingResource, DeployingResourceApplyState } from "./models/terraform"
import { DeployingElement } from './components'
import { SynthStack } from '../helper/synth-stack'

enum Status {
  STARTING = 'starting',
  SYNTHESIZING = 'synthesizing',
  INITIALIZING = 'initializing',
  PLANNING = 'planning',
  DEPLOYING = 'deploying',
  DONE = 'done'
}

interface DeployConfig {
  targetDir: string;
  synthCommand: string;
}

export const Deploy = ({ targetDir, synthCommand }: DeployConfig): React.ReactElement => {
  const [resources, setResources] = React.useState<DeployingResource[]>([]);
  const [currentStatus, setCurrentStatus] = React.useState<Status>(Status.INITIALIZING);
  const [stackName, setStackName] = React.useState('');
  const { exit } = useApp();

  React.useEffect(() => {
    const plan = async () => {
      try {
        const cwd = process.cwd();
        const outdir = path.join(cwd, targetDir);
        setCurrentStatus(Status.SYNTHESIZING);
        const stacks = await SynthStack.synth(synthCommand, targetDir);
        setStackName(stacks[0].name)
        const terraform = new Terraform(outdir);
        setCurrentStatus(Status.INITIALIZING);
        await terraform.init();
        setCurrentStatus(Status.PLANNING);
        const plan = await terraform.plan();
        setResources(plan.resources.map(r => (Object.assign({}, r, {applyState: DeployingResourceApplyState.WAITING}))));
        setCurrentStatus(Status.DONE);
        await terraform.deploy(plan, (output: Buffer) => {
          console.log(output.toString())
        });
      } catch(e) {
        console.error(`${e}`)
        exit(e)
      }
    }
    plan()
  }, []); // only once

  const isPlanning: boolean = currentStatus != Status.DONE
  const statusText = (stackName === '') ? `${currentStatus}...` : <Text>{currentStatus}<Text bold>&nbsp;{stackName}</Text>...</Text>

  return(
    <Box>
      { isPlanning ? (
        <Fragment>
          <Color green><Spinner type="dots"/></Color><Box paddingLeft={1}><Text>{ statusText }</Text></Box>
        </Fragment>
        ) : (
          <Fragment>
            <Box flexDirection="column">
              <Box>
                <Text>Deploying Stack: </Text><Text bold>{stackName}</Text>
              </Box>
              <Text bold>Resources</Text>
              { resources.map(resource => (
                <>
                  <DeployingElement key={resource.id} resource={resource}/>
                </>
              )) }
            </Box>
          </Fragment>
        )}
    </Box>
    )
}
