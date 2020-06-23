/* eslint-disable no-control-regex */
import React, { Fragment } from 'react';
import { Text, Box, Color } from 'ink'
import Spinner from 'ink-spinner';
import { DeployingElement } from './components'
import { useTerraform, Status } from './terraform-context'

interface DeployConfig {
  targetDir: string;
  synthCommand: string;
}

export const Deploy = ({ targetDir, synthCommand }: DeployConfig): React.ReactElement => {
  const { deploy } = useTerraform({targetDir, synthCommand})
  const { resources, status, stackName, errors } = deploy()

  const deployStages = [Status.DEPLOYING, Status.DONE]
  const isPreparing = !deployStages.includes(status)
  const statusText = (stackName === '') ? `${status}...` : <Text>{status}<Text bold>&nbsp;{stackName}</Text>...</Text>

  if (errors) return(<Box>{ errors }</Box>);

  return(
    <Box>
      { isPreparing ? (
        <Fragment>
          <Color green><Spinner type="dots"/></Color><Box paddingLeft={1}><Text>{ statusText }</Text></Box>
        </Fragment>
        ) : (
          <Fragment>
            <Box flexDirection="column">
              <Box>
                <Text>Deploying Stack: </Text><Text bold>{stackName}</Text>
              </Box>
              <Text bold>Resources</Text>
              { resources.map(resource => (
                <Fragment key={resource.id}>
                  <DeployingElement resource={resource}/>
                </Fragment>
              )) }
            </Box>
          </Fragment>
        )}
    </Box>
    )
}
