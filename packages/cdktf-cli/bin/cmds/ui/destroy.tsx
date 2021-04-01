/* eslint-disable no-control-regex */
import React, { Fragment, useState } from 'react';
import { Text, Box } from 'ink'
import ConfirmInput from '@skorfmann/ink-confirm-input';
import { DeployingElement } from './components'
import { DeployingResource, PlannedResourceAction } from './models/terraform'
import { useTerraform, Status, useTerraformState } from './terraform-context'
import { Plan } from './diff'
import {ActivityIndicator} from "./components/activity-indicator";

interface DeploySummaryConfig {
  resources: DeployingResource[];
}

export const DeploySummary = ({ resources }: DeploySummaryConfig): React.ReactElement => {
  const summary = resources.reduce((accumulator, resource) => {
    if (accumulator[resource.applyState] !== undefined) {
      accumulator[resource.applyState] += 1
    }

    return accumulator
  }, {
    destroyed: 0
  } as any)

  return (<>
    {Object.keys(summary).map((key, i) => (
      <Box key={key}>
        {i > 0 && <Text>, </Text>}
        <Text>{summary[key]} {key}</Text>
      </Box>
    ))
    }
  </>)
}

interface ConfirmConfig {
  callback: (value: any) => any;
}

const Confirm = ({ callback }: ConfirmConfig): React.ReactElement => {
  const [value, setValue] = useState('');

  return (
    <Box flexDirection="column" marginTop={1}>
      <Text bold>Do you want to perform these actions?</Text>
      <Text> CDK for Terraform will perform the actions described above.</Text>
      <Text>  Only 'yes' will be accepted to approve.</Text>

      <Box flexDirection="row" marginTop={1}>
        <Text bold>  Enter a value:</Text>
        <ConfirmInput
          value={value}
          onChange={setValue}
          onSubmit={callback}
        />
      </Box>
    </Box>
  )
}

export const DestroyComponent = (): React.ReactElement => {
  const { resources, status, stackName } = useTerraformState()
  const applyActions = [PlannedResourceAction.UPDATE, PlannedResourceAction.CREATE, PlannedResourceAction.DELETE, PlannedResourceAction.READ];
  const applyableResources = resources.filter(resource => (applyActions.includes(resource.action)));
  return (
    <Fragment>
      <Box flexDirection="column">
        <Box>
          {Status.DESTROYING == status ? (<><ActivityIndicator /><Box paddingLeft={1}><Text>Destroying Stack: </Text><Text bold>{stackName}</Text></Box></>) : (
            <><Text>Destroying Stack: </Text><Text bold>{stackName}</Text></>
          )}
        </Box>
        <Text bold>Resources</Text>
        {applyableResources.map((resource: any) => (
          <Box key={resource.id} marginLeft={1}>
            <DeployingElement resource={resource} stackName={stackName} />
          </Box>
        ))}
        <Box marginTop={1}>
          <Text bold>Summary: </Text>
          <DeploySummary resources={applyableResources} /><Text>.</Text>
        </Box>
      </Box>
    </Fragment>
  )
}

interface DestroyConfig {
  targetDir: string;
  synthCommand: string;
  autoApprove: boolean;
}

export const Destroy = ({ targetDir, synthCommand, autoApprove }: DestroyConfig): React.ReactElement => {
  const { destroy } = useTerraform({ targetDir, synthCommand, autoApprove })
  const { state: { status, stackName, errors, plan }, confirmation, isConfirmed } = destroy()

  const planStages = [Status.INITIALIZING, Status.PLANNING, Status.SYNTHESIZING, Status.SYNTHESIZED, Status.STARTING]
  const isPlanning = planStages.includes(status)
  const statusText = (stackName === '') ? <Text>{status}...</Text> : <Text>{status}<Text bold>&nbsp;{stackName}</Text>...</Text>

  if (errors) return (<Box>{errors}</Box>);
  if (plan && !plan.needsApply) return (<><Text>No changes for Stack: <Text bold>{stackName}</Text></Text></>);

  return (
    <Box>
      {isPlanning ? (
        <Fragment>
          <ActivityIndicator /><Box paddingLeft={1}><Text>{statusText}</Text></Box>
        </Fragment>
      ) : (
          <>
            {!isConfirmed && <Box flexDirection="column"><Plan /><Confirm callback={confirmation} /></Box>}
            {isConfirmed && <DestroyComponent />}
          </>
        )
      }
    </Box>
  )
}
