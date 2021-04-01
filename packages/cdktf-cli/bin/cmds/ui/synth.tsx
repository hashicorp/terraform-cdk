import React, { Fragment } from "react";
import { Text, Box } from "ink";
import { useTerraform, Status, useTerraformState } from './terraform-context'
import {ActivityIndicator} from "./components/activity-indicator";

interface CommonSynthConfig {
  targetDir: string;
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

export const Synth = ({ targetDir, synthCommand, jsonOutput }: SynthConfig): React.ReactElement => {
    const { synth } = useTerraform({targetDir, synthCommand})
    const { status, stackName, errors } = synth()

    const isSynthesizing: boolean = status != Status.SYNTHESIZED
    const statusText = (stackName === '') ? `${status}...` : <Text>{status}<Text bold>&nbsp;{stackName}</Text>...</Text>

    if (errors) return(<Box>{ errors }</Box>);

    return (
      <Box>
        {isSynthesizing ? (
          <Fragment>
            <ActivityIndicator />
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
