import React, { Fragment } from 'react';
import { Text, Box, Color, useApp } from 'ink'
import * as path from 'path'
import Spinner from 'ink-spinner';
import { Terraform, PlannedResource } from "./models/terraform"
import { PlanElement } from './components'
import { SynthStack } from '../helper/synth-stack'

enum Status {
  STARTING = 'starting',
  SYNTHESIZING = 'synthesizing',
  INITIALIZING = 'initializing',
  PLANNING = 'generating diff',
  DONE = 'done'
}

interface DiffConfig {
  targetDir: string;
  synthCommand: string;
}

interface PlanSummaryConfig {
  resources: PlannedResource[];
}

interface PlanSummary {
  [key: string]: any;
}

const PlanSummary = ({resources}: PlanSummaryConfig): React.ReactElement  => {
  const summary = resources.reduce((accumulator, resource) => {
    if (accumulator[resource.action] !== undefined) {
      accumulator[resource.action] += 1
    }

    return accumulator
  }, {
    create: 0,
    change: 0,
    destroy: 0
  } as any)

  return(<>
    { Object.keys(summary).map((key, i) => (
        <Box key={key}>
          {i > 0 && ", "}
          <Text>{summary[key]} to {key}</Text>
        </Box>
      ))
    }
  </>)
}

export const Diff = ({ targetDir, synthCommand }: DiffConfig): React.ReactElement => {
  const [resources, setResources] = React.useState<PlannedResource[]>([]);
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
                <Text>Stack: </Text><Text bold>{stackName}</Text>
              </Box>
              <Text bold>Resources</Text>
              { resources.map(resource => (<Box key={resource.id} marginLeft={1}><PlanElement resource={resource}/></Box>)) }
              <Box marginTop={1} marginLeft={2}>
                <PlanSummary resources={resources}/>
              </Box>
            </Box>
          </Fragment>
        )}
    </Box>
    )
}
