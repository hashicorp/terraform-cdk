/* eslint-disable no-control-regex */
import React, { Fragment, useCallback, useState } from 'react';
import { Text, Box, Color, useApp } from 'ink'
import Spinner from 'ink-spinner';
import ConfirmInput from 'ink-confirm-input';
import { DeployingElement } from './components'
import { DeployingResource, TerraformPlan, PlannedResourceAction } from './models/terraform'
import { useTerraform, Status, useTerraformState } from './terraform-context'
import { Plan } from './diff'

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
        {i > 0 && ", "}
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
  const { exit } = useApp()
  const [value, setValue] = useState('');
  const handleSubmit = useCallback(submitValue => {
    if (submitValue === false) {
      exit()
      return
    }

    callback(submitValue)
  }, [exit, callback]);

  return (
    <Box flexDirection="column" marginTop={1}>
      <Text bold>Do you want to perform these actions?</Text>
      <Text> CDK for Terraform will perform the actions described above.</Text>
      <Text>  Only 'yes' will be accepted to approve.</Text>

      <Box flexDirection="row" marginTop={1}>
        <Text bold>  Enter a value:</Text>&nbsp;
        <ConfirmInput
          value={value}
          onChange={setValue}
          onSubmit={handleSubmit}
        />
      </Box>
    </Box>

  )
}

interface DestroyComponentConfig {
  destroy: (plan: TerraformPlan | undefined) => any;
}

export const DestroyComponent = ({ destroy }: DestroyComponentConfig): React.ReactElement => {
  const { resources, status, stackName, plan } = useTerraformState()  
  const applyActions = [PlannedResourceAction.UPDATE, PlannedResourceAction.CREATE, PlannedResourceAction.DELETE, PlannedResourceAction.READ];
  const applyableResources = resources.filter(resource => (applyActions.includes(resource.action)));
  destroy(plan)
  return (
    <Fragment>
      <Box flexDirection="column">
        <Box>
          {Status.DESTROYING == status ? (<><Color green><Spinner type="dots" /></Color><Box paddingLeft={1}><Text>Destroying Stack: </Text><Text bold>{stackName}</Text></Box></>) : (
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
  const { planDestroy, destroy } = useTerraform({ targetDir, synthCommand })
  const { status, stackName, errors, plan } = planDestroy()

  const planStages = [Status.INITIALIZING, Status.PLANNING, Status.SYNTHESIZING, Status.SYNTHESIZED, Status.STARTING]
  const isPlanning = planStages.includes(status)
  const statusText = (stackName === '') ? `${status}...` : <Text>{status}<Text bold>&nbsp;{stackName}</Text>...</Text>

  const [shouldContinue, confirmDeployment] = useState<boolean>(autoApprove);


  if (errors) return (<Box>{errors}</Box>);
  if (plan && !plan.needsApply) return (<><Text>No changes for Stack: <Text bold>{stackName}</Text></Text></>);

  return (
    <Box>
      {isPlanning ? (
        <Fragment>
          <Color green><Spinner type="dots" /></Color><Box paddingLeft={1}><Text>{statusText}</Text></Box>
        </Fragment>
      ) : (
          <>
            {!shouldContinue && <Box flexDirection="column"><Plan /><Confirm callback={confirmDeployment} /></Box>}
            {shouldContinue && <DestroyComponent destroy={destroy} />}
          </>
        )

      }
    </Box>
  )
}
