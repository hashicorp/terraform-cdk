import React, { Fragment } from 'react';
import { Text, Box } from 'ink'
import * as path from 'path'
import { Terraform, PlannedResource } from "./models/terraform"
import { PlanElement, StatusSpinner } from './components'

export const Plan = (): React.ReactElement => {
  const [resources, setResources] = React.useState<PlannedResource[]>([]);
  const [isPlanning, setIsPlanning] = React.useState(false);

  React.useEffect(() => {
    const plan = async () => {
      setIsPlanning(true)
      const cwd = process.cwd();
      const outdir = path.join(cwd, 'cdktf.out');
      const terraform = new Terraform(outdir)
      const plan = await terraform.plan()
      setResources(plan.resources)
      setIsPlanning(false)
    }
    plan()
  }, []); // only once

  return(
    <Box>
      { isPlanning ? (
        <StatusSpinner statusText={'generating diff...'}/>) : (
          <Fragment>
            <Box flexDirection="column">
              <Text bold>Planned Stack</Text>
              { resources.map(resource => (<PlanElement key={resource.id} resource={resource}/>)) }
            </Box>
          </Fragment>
        )}
    </Box>
    )
}
