import React, { Fragment } from 'react';
import { Text, Box, Color } from 'ink'
import Spinner from 'ink-spinner';
import { PlannedResource, PlannedResourceAction } from "./models/terraform"
import { PlanElement } from './components'
import { useTerraform, Status } from './terraform-context'

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
    update: 0,
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
  const { plan } = useTerraform({targetDir, synthCommand})
  const { plannedResources, status, stackName, errors } = plan()

  const isPlanning: boolean = status != Status.PLANNED
  const statusText = (stackName === '') ? `${status}...` : <Text>{status}<Text bold>&nbsp;{stackName}</Text>...</Text>
  const statesToDisplay = [PlannedResourceAction.UPDATE, PlannedResourceAction.CREATE, PlannedResourceAction.DESTROY]
  const resourcesToDisplay = (plannedResources || []).filter((resource) => statesToDisplay.includes(resource.action))

  if (errors) return(<Box>{ errors }</Box>);

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
              { resourcesToDisplay.map(resource => (<Box key={resource.id} marginLeft={1}><PlanElement resource={resource}/></Box>)) }
              <Box marginTop={1}>
                <Text bold>Diff: </Text>
                <PlanSummary resources={resourcesToDisplay} /><Text>.</Text>
              </Box>
            </Box>
          </Fragment>
        )}
    </Box>
    )
}
