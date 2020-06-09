import React, { Fragment } from 'react';
import { Text, Box } from 'ink'
import * as path from 'path'
import { Terraform, PlannedResource } from "./models/terraform"
import { PlanElement, StatusSpinner } from './components'

enum Status {
  STARTING = 'starting',
  INITING = 'initing',
  PLANNING = 'diffing',
  DONE = 'done'
}

export const Diff = (): React.ReactElement => {
  const [resources, setResources] = React.useState<PlannedResource[]>([]);
  const [currentStatus, setCurrentStatus] = React.useState<Status>(Status.INITING);

  React.useEffect(() => {
    const plan = async () => {
      const cwd = process.cwd();
      const outdir = path.join(cwd, 'cdktf.out');
      const terraform = new Terraform(outdir)
      setCurrentStatus(Status.INITING)
      await terraform.init()
      setCurrentStatus(Status.PLANNING)
      const plan = await terraform.plan()
      setResources(plan.resources)
      setCurrentStatus(Status.DONE)
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
