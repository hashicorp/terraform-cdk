/* eslint-disable no-control-regex */
import React, { Fragment, useEffect, useState } from "react";
import { Text, Box } from "ink";
import Spinner from "ink-spinner";
import { Outputs as OutputComponent } from "./components";
import { NestedTerraformOutputs } from "./terraform-context";
import { CdktfProject, ProjectUpdates } from "../../../lib";
import { TerraformOutput } from "./models/terraform";
import { ErrorComponent } from "./components/error";

type OutputConfig = {
  targetDir: string;
  targetStack?: string;
  synthCommand: string;
  onOutputsRetrieved: (outputs: NestedTerraformOutputs) => void;
  outputsPath?: string;
};

export const Output = ({
  targetDir,
  targetStack,
  synthCommand,
  onOutputsRetrieved,
  outputsPath,
}: OutputConfig): React.ReactElement => {
  const [done, setDone] = useState(false);
  const [projectUpdate, setProjectUpdate] = useState<ProjectUpdates>();
  const [stackName, setStackName] = useState<string>();
  const [error, setError] = useState<unknown>(null);
  const [outputs, setOutputs] = useState<{ [key: string]: TerraformOutput }>();

  useEffect(() => {
    const project = new CdktfProject({
      targetDir,
      synthCommand,
      onUpdate: (event) => {
        setStackName(project.stackName || "");
        setProjectUpdate(event);
      },
    });

    project
      .fetchOutputs(targetStack)
      .then((outputData) => {
        setOutputs(outputData);
        onOutputsRetrieved(project.outputsByConstructId!);
        setDone(true);
      })
      .catch(setError);
  }, [
    setError,
    setOutputs,
    setStackName,
    setProjectUpdate,
    onOutputsRetrieved,
  ]);

  if (error) {
    return <ErrorComponent error={error} />;
  }
  const statusText =
    stackName === "" ? (
      <Text>{projectUpdate?.type}...</Text>
    ) : (
      <Text>
        {projectUpdate?.type}
        <Text bold>&nbsp;{stackName}</Text>...
      </Text>
    );

  return (
    <Box>
      {!done ? (
        <Fragment>
          <Text color="green">
            <Spinner type="dots" />
          </Text>
          <Box paddingLeft={1}>
            <Text>{statusText}</Text>
          </Box>
        </Fragment>
      ) : (
        <Box flexDirection="column">
          {outputs && Object.keys(outputs).length > 0 ? (
            <Fragment>
              <Box marginTop={1}>
                <Text bold>Output: </Text>
                <OutputComponent outputs={outputs} />
              </Box>
            </Fragment>
          ) : (
            <Text>No output found</Text>
          )}
          <Box>
            {outputsPath && outputs ? (
              <Text>The outputs have been written to {outputsPath}</Text>
            ) : (
              <Text></Text>
            )}
          </Box>
        </Box>
      )}
    </Box>
  );
};
