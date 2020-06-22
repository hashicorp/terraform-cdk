/* eslint-disable no-control-regex */
import React, { Fragment } from 'react';
import { Text, Box, Color } from 'ink'
import Spinner from 'ink-spinner';
import { DeployingElement } from './components'
import { useTerraform } from './terraform-context'

enum Status {
  STARTING = 'starting',
  SYNTHESIZING = 'synthesizing',
  INITIALIZING = 'initializing',
  PLANNING = 'planning',
  DEPLOYING = 'deploying',
  DONE = 'done'
}

interface DeployConfig {
  targetDir: string;
  synthCommand: string;
}


export const Deploy = ({ targetDir, synthCommand }: DeployConfig): React.ReactElement => {
  const { init } = useTerraform({targetDir, synthCommand})
  const { resources, status } = init()

  const isPlanning: boolean = currentStatus != Status.DONE
  const statusText = (stackName === '') ? `${currentStatus}...` : <Text>{currentStatus}<Text bold>&nbsp;{stackName}</Text>...</Text>

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
                <Text>Deploying Stack: </Text><Text bold>{stackName}</Text>
              </Box>
              <Text bold>Resources</Text>
              { resources.map(resource => (
                <>
                  <DeployingElement key={resource.id} resource={resource}/>
                </>
              )) }
            </Box>
          </Fragment>
        )}
    </Box>
    )
}
