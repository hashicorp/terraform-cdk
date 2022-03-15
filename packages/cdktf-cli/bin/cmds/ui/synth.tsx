import React from "react";
import { Box, Text } from "ink";

import { useCdktfProject } from "./hooks/cdktf-project";
import { StreamView } from "./components";
import { SynthesizedStack } from "../../../lib";
import { StatusBottomBar } from "./components/bottom-bars/status";

interface CommonSynthConfig {
  outDir: string;
  targetStack: string;
  jsonOutput: boolean;
}

interface SynthConfig extends CommonSynthConfig {
  synthCommand: string;
}
type SynthOutputConfig = {
  jsonOutput: boolean;
  currentStackName: string;
  stacks: SynthesizedStack[];
};
const SynthOutput = ({
  jsonOutput,
  currentStackName,
  stacks,
}: SynthOutputConfig): React.ReactElement => {
  const stack =
    stacks.find((item) => item.name === currentStackName) || stacks[0];
  return (
    <>
      {jsonOutput && stack ? (
        <Box>
          <Text>{stack.content}</Text>
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
  outDir,
  synthCommand,
  jsonOutput,
  targetStack,
}: SynthConfig): React.ReactElement => {
  const { returnValue, logEntries, done, status } = useCdktfProject(
    { outDir, synthCommand },
    (project) => project.synth()
  );

  return (
    <StreamView logs={logEntries}>
      <StatusBottomBar status={status}>
        <SynthOutput
          jsonOutput={jsonOutput}
          currentStackName={targetStack}
          stacks={done ? returnValue! : []}
        />
      </StatusBottomBar>
    </StreamView>
  );
};
