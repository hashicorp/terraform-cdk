import React, { Fragment } from "react";
import { Text, Box, Color, useApp } from "ink";
import * as path from "path";
import Spinner from "ink-spinner";
import { SynthStack } from "../helper/synth-stack";

enum Status {
  STARTING = "starting",
  SYNTHESIZING = "synthesizing",
  DONE = "done",
}

interface SynthConfig {
  targetDir: string;
  synthCommand: string;
  jsonOutput: boolean;
}

export const Synth = ({ targetDir, synthCommand, jsonOutput }: SynthConfig): React.ReactElement => {
    const [terraformJSONConfig, setTerraformJSONConfig] = React.useState("");
    const [currentStatus, setCurrentStatus] = React.useState<Status>(Status.STARTING);
    const [stackName, setStackName] = React.useState("");
    const { exit } = useApp();

    React.useEffect(() => {
    const synth = async () => {
        try {
        const cwd = process.cwd();
        const outdir = path.join(cwd, targetDir);
        setCurrentStatus(Status.SYNTHESIZING);
        const stacks = await SynthStack.synth(synthCommand, outdir);
        setStackName(stacks[0].name);
        setTerraformJSONConfig(stacks[0].content)
        setCurrentStatus(Status.DONE);
        } catch (e) {
        console.error(e);
        exit(e);
        }
    };
    synth();
    }, []); // only once

    const isSynthesizing: boolean = currentStatus != Status.DONE
    const statusText = (stackName === '') ? `${currentStatus}...` : <Text>{currentStatus}<Text bold>&nbsp;{stackName}</Text>...</Text>
    const jsonTerraformOutput = (jsonOutput == false) ? `Generated Terraform code in the output directory: "${targetDir}"` : <Box><Text>{terraformJSONConfig}</Text></Box>

    return (
      <Box>
        {isSynthesizing ? (
          <Fragment>
            <Color green>
              <Spinner type="dots" />
            </Color>
            <Box paddingLeft={1}>
              <Text>{statusText}</Text>
            </Box>
          </Fragment>
        ) : (
          <Fragment>
              {jsonTerraformOutput}
          </Fragment>
        )}
      </Box>
  );
};
