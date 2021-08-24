import React, { Fragment } from "react";
import { Text, Box } from "ink";
import Spinner from "ink-spinner";
import { useRunSynth, Status, useTerraformState } from "./terraform-context";

interface CommonSynthConfig {
  targetDir: string;
  targetStack: string;
  jsonOutput: boolean;
}

type SynthOutputConfig = {
  jsonOutput: boolean;
};

interface SynthConfig extends CommonSynthConfig {
  synthCommand: string;
}

const SynthOutput = ({ jsonOutput }: SynthOutputConfig): React.ReactElement => {
  const { currentStack, stacks } = useTerraformState();

  return (
    <>
      {jsonOutput ? (
        <Box>
          <Text>{currentStack.content}</Text>
        </Box>
      ) : (
        <Text>
          Generated Terraform code for the stacks:{" "}
          {stacks?.map((s) => s.name).join(", ")}
        </Text>
      )}
    </>
  );
};

export const Synth = ({
  targetDir,
  targetStack,
  synthCommand,
  jsonOutput,
}: SynthConfig): React.ReactElement => {
  const { status, currentStack, errors } = useRunSynth({
    targetDir,
    targetStack,
    synthCommand,
  });

  const isSynthesizing: boolean = status != Status.SYNTHESIZED;
  const statusText =
    currentStack.name === "" ? (
      `${status}...`
    ) : (
      <Text>
        {status}
        <Text bold>&nbsp;{currentStack.name}</Text>...
      </Text>
    );

  if (errors) return <Box>{errors}</Box>;

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
            <SynthOutput jsonOutput={jsonOutput} />
          </Box>
        </Fragment>
      )}
    </Box>
  );
};
