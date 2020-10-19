import React, { Fragment } from 'react';
import { Text, Box, Color } from 'ink'
import Spinner from 'ink-spinner';
import { PlannedResource } from "./models/terraform"
import { PlanElement } from './components'
import { useTerraform, Status, useTerraformState } from './terraform-context'

interface DiffConfig {
  targetDir: string;
  synthCommand: string;
}

interface PlanSummaryConfig {
  resources: PlannedResource[];
}

const PlanSummary = ({ resources }: PlanSummaryConfig): React.ReactElement => {
  const summary = resources.reduce((accumulator, resource) => {
    if (accumulator[resource.action] !== undefined) {
      accumulator[resource.action] += 1
    }

    return accumulator
  }, {
    create: 0,
    update: 0,
    delete: 0
  } as any)

  return (<>
    {Object.keys(summary).map((key, i) => (
      <Box key={key}>
        {i > 0 && ", "}
        <Text>{summary[key]} to {key}</Text>
      </Box>
    ))
    }
  </>)
}

export const Plan = (): React.ReactElement => {
  const { plan, stackName } = useTerraformState()

  return (
    <Fragment>
      <Box flexDirection="column">
        <Box>
          <Text>Stack: </Text><Text bold>{stackName}</Text>
        </Box>
        {plan?.needsApply ? (<Text bold>Resources</Text>) : (<></>)}
        {plan?.applyableResources.map(resource => (<Box key={resource.id} marginLeft={1}><PlanElement resource={resource} stackName={stackName} /></Box>))}
        <Box marginTop={1}>
          <Text bold>Diff: </Text>
          <PlanSummary resources={plan?.applyableResources || []} /><Text>.</Text>
        </Box>
      </Box>
    </Fragment>
  )
}

export const Diff = ({ targetDir, synthCommand }: DiffConfig): React.ReactElement => {
  const { plan } = useTerraform({ targetDir, synthCommand })

  const { status, stackName, errors } = plan()

  const isPlanning: boolean = status != Status.PLANNED
  const statusText = (stackName === '') ? `${status}...` : <Text>{status}<Text bold>&nbsp;{stackName}</Text>...</Text>

  if (errors) return (<Box>{errors}</Box>);

  return (
    <Box>
      {isPlanning ? (
        <Fragment>
          <Color green><Spinner type="dots" /></Color><Box paddingLeft={1}><Text>{statusText}</Text></Box>
        </Fragment>
      ) : (<Plan />)}
    </Box>
  )
}
