import React, { Fragment } from 'react';
import { Text, Box, Color, useApp } from 'ink'
import * as path from 'path'
import Spinner from 'ink-spinner';
import { Terraform, PlannedResource } from "./models/terraform"
import { PlanElement } from './components'
import { SynthStack } from '../helper/synth-stack'

enum Status {
  STARTING = 'starting',
  SYNTHING = 'synthing',
  INITING = 'initing',
  PLANNING = 'diffing',
  DONE = 'done'
}

interface DiffConfig {
  targetDir: string;
  synthCommand: string;
}

export const Diff = ({ targetDir, synthCommand }: DiffConfig): React.ReactElement => {
  const [resources, setResources] = React.useState<PlannedResource[]>([]);
  const [currentStatus, setCurrentStatus] = React.useState<Status>(Status.INITING);
  const [stackName, setStackName] = React.useState('');
  const { exit } = useApp();

  React.useEffect(() => {
    const plan = async () => {
      try {
        const cwd = process.cwd();
        const outdir = path.join(cwd, targetDir);
        setCurrentStatus(Status.SYNTHING);
        const stacks = await SynthStack.synth(synthCommand, targetDir);
        setStackName(stacks[0].name)
        const terraform = new Terraform(outdir);
        setCurrentStatus(Status.INITING);
        await terraform.init();
        setCurrentStatus(Status.PLANNING);
        const plan = await terraform.plan();
        setResources(plan.resources);
        setCurrentStatus(Status.DONE);
      } catch(e) {
        console.error(e)
        exit(e)
      }
    }
    plan()
  }, []); // only once

  const isPlanning: boolean = currentStatus != Status.DONE
  const statusText = (stackName === '') ? `${currentStatus}...` : <Text>{currentStatus}<Text bold>&nbsp;{stackName}</Text>&nbsp;...</Text>

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
                <Text bold>Stack: {stackName}</Text>
              </Box>
              <Text bold>Resources</Text>
              { resources.map(resource => (<PlanElement key={resource.id} resource={resource}/>)) }
            </Box>
          </Fragment>
        )}
    </Box>
    )
}
