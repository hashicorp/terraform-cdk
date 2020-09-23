/* eslint-disable no-control-regex */
import React, { Fragment, useCallback, useState } from 'react';
import { Text, Box, Color, useApp } from 'ink'
import Spinner from 'ink-spinner';
import ConfirmInput from 'ink-confirm-input';
import { DeployingElement } from './components'
import { DeployingResource, TerraformOutput, TerraformPlan, PlannedResourceAction } from './models/terraform'
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
    created: 0,
    updated: 0,
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

interface OutputConfig {
  output: { [key: string]: TerraformOutput };
}

export const Output = ({ output }: OutputConfig): React.ReactElement => {
  return (
    <Box flexDirection="column">
      {Object.keys(output).map((key) => (
        <Box key={key}>
          <Text>{key} = {output[key].value}</Text>
        </Box>
      ))}
    </Box>
  )
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
      <Text>  CDK for Terraform will perform the actions described above.</Text>
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

interface ApplyConfig {
  deploy: (plan: TerraformPlan | undefined) => any;
}

export const Apply = ({ deploy }: ApplyConfig): React.ReactElement => {
  const { resources, status, stackName, output, plan } = useTerraformState()
  const applyActions = [PlannedResourceAction.UPDATE, PlannedResourceAction.CREATE, PlannedResourceAction.DELETE, PlannedResourceAction.READ];
  const applyableResources = resources.filter(resource => (applyActions.includes(resource.action)));
  deploy(plan)
  return (
    <Fragment>
      <Box flexDirection="column">
        <Box>
          {Status.DEPLOYING == status ? (<><Color green><Spinner type="dots" /></Color><Box paddingLeft={1}><Text>Deploying Stack: </Text><Text bold>{stackName}</Text></Box></>) : (
            <><Text>Deploying Stack: </Text><Text bold>{stackName}</Text></>
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
        {output && Object.keys(output).length > 0 &&
          <Box marginTop={1}>
            <Text bold>Output: </Text>
            <Output output={output} />
          </Box>
        }
      </Box>
    </Fragment>
  )
}

interface DeployConfig {
  targetDir: string;
  synthCommand: string;
  autoApprove: boolean;
}

export const Deploy = ({ targetDir, synthCommand, autoApprove }: DeployConfig): React.ReactElement => {
  const { plan: execPlan, deploy } = useTerraform({ targetDir, synthCommand })
  const { status, stackName, errors, plan } = execPlan()

  const planStages = [Status.INITIALIZING, Status.PLANNING, Status.SYNTHESIZING, Status.SYNTHESIZED, Status.STARTING]
  const isPlanning = planStages.includes(status)
  const statusText = (stackName === '') ? `${status}...` : <Text>{status}<Text bold>&nbsp;{stackName}</Text>...</Text>

  const [shouldContinue, confirmDeployment] = useState<boolean>(autoApprove);


  if (errors) return (<Box>{errors.map((e: any) => e.message)}</Box>);
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
            {shouldContinue && <Apply deploy={deploy} />}
          </>
        )

      }
    </Box>
  )
}
