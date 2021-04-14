import React, { Fragment } from "react";
import { Text, Box } from "ink";
import Spinner from "ink-spinner";
import { useTerraform, Status, useTerraformState } from './terraform-context'

interface CommonSynthConfig {
  targetDir: string;
  targetStack: string;
  jsonOutput: boolean;
}

type SynthOutputConfig = CommonSynthConfig

interface SynthConfig extends CommonSynthConfig {
  synthCommand: string;
}

const SynthOutput = ({ targetDir, jsonOutput }: SynthOutputConfig): React.ReactElement => {
  const { stackJSON } = useTerraformState()
  return(
    <>
      { jsonOutput ? (<Box><Text>{stackJSON}</Text></Box>) : (<Text>Generated Terraform code in the output directory: <Text bold>{targetDir}</Text></Text>) }
    </>
  )
}

export const Synth = ({ targetDir, targetStack, synthCommand, jsonOutput }: SynthConfig): React.ReactElement => {
    const { synth } = useTerraform({targetDir, targetStack, synthCommand})
    const { status, stackName, errors } = synth()

    const isSynthesizing: boolean = status != Status.SYNTHESIZED
    const statusText = (stackName === '') ? `${status}...` : <Text>{status}<Text bold>&nbsp;{stackName}</Text>...</Text>

    if (errors) return(<Box>{ errors }</Box>);

    return (
      <Box>
        {isSynthesizing ? (
          <Fragment>
            <Text color="green">
              <Spinner type="dots" />
            </Text>
            <Box paddingLeft={1}>
              <Text>{statusText}</Text>
            </Box>
          </Fragment>
        ) : (
          <Fragment>
            <Box>
              <SynthOutput targetDir={targetDir} jsonOutput={jsonOutput}/>
            </Box>
          </Fragment>
        )}
      </Box>
  );
};
