import React, { Fragment } from 'react';
import { Text, Box, useApp } from 'ink'
import * as path from 'path'
import { Terraform, PlannedResource } from "./models/terraform"
import { PlanElement, StatusSpinner } from './components'
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
  const { exit } = useApp();

  React.useEffect(() => {
    const plan = async () => {
      try {
        const cwd = process.cwd();
        const outdir = path.join(cwd, targetDir);
        setCurrentStatus(Status.SYNTHING);
        await SynthStack.synth(synthCommand, targetDir);
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

  return(
    <Box>
      { isPlanning ? (
        <StatusSpinner statusText={`${currentStatus}...`}/>) : (
          <Fragment>
            <Box flexDirection="column">
              <Text bold>Diff for Stack</Text>
              { resources.map(resource => (<PlanElement key={resource.id} resource={resource}/>)) }
            </Box>
          </Fragment>
        )}
    </Box>
    )
}
