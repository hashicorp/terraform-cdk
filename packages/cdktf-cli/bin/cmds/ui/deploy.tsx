/* eslint-disable no-control-regex */
import React, { Fragment, useCallback, useState } from 'react';
import { Text, Box, Color, useApp } from 'ink'
import Spinner from 'ink-spinner';
import ConfirmInput from 'ink-confirm-input';
import { DeployingElement } from './components'
import { DeployingResource, TerraformOutput, TerraformPlan } from './models/terraform'
import { useTerraform, Status, useTerraformState } from './terraform-context'
import { Plan } from './diff'

interface DeploySummaryConfig {
  resources: DeployingResource[];
}

const DeploySummary = ({ resources }: DeploySummaryConfig): React.ReactElement => {
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

const Output = ({ output }: OutputConfig): React.ReactElement => {
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
    <Box>
      Do you want to continue? (Y/n)
      <ConfirmInput
        isChecked
        value={value}
        onChange={setValue}
        onSubmit={handleSubmit}
      />
    </Box>

  )
}

interface ApplyConfig {
  deploy: (plan: TerraformPlan | undefined) => any;
}

const Apply = ({ deploy }: ApplyConfig): React.ReactElement => {
  const { resources, status, stackName, output, plan } = useTerraformState()
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
        {resources.map((resource: any) => (
          <Fragment key={resource.id}>
            <DeployingElement resource={resource} />
          </Fragment>
        ))}
        <Box marginTop={1}>
          <Text bold>Summary: </Text>
          <DeploySummary resources={resources} /><Text>.</Text>
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
}

export const Deploy = ({ targetDir, synthCommand }: DeployConfig): React.ReactElement => {
  const { plan: execPlan, deploy } = useTerraform({ targetDir, synthCommand })
  const { status, stackName, errors, plan } = execPlan()

  const planStages = [Status.INITIALIZING, Status.PLANNING, Status.SYNTHESIZING, Status.SYNTHESIZED, Status.STARTING]
  const isPlanning = planStages.includes(status)
  const statusText = (stackName === '') ? `${status}...` : <Text>{status}<Text bold>&nbsp;{stackName}</Text>...</Text>

  const [shouldContinue, confirmDeployment] = useState<boolean>();


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
            {shouldContinue && <Apply deploy={deploy} />}
          </>
        )

      }
    </Box>
  )
}
