import React from "react";

import { useCdktfProject } from "./hooks/cdktf-project";
import { StreamView } from "./components/stream-view";
import { StatusBottomBar } from "./components/bottom-bars/status";
import { SynthesizedStack } from "../../../lib";
import { Box, Text } from "ink";

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
  return (
    <>
      {jsonOutput ? (
        <Box>
          <Text>
            {stacks.find((item) => item.name === currentStackName)?.content}
          </Text>
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
  const { projectUpdate, logEntries, done, errorMessage } = useCdktfProject(
    { outDir, synthCommand },
    (project) => project.synth()
  );

  return (
    <StreamView logs={logEntries}>
      <StatusBottomBar
        latestUpdate={projectUpdate}
        done={done}
        errorMessage={errorMessage}
      >
        <SynthOutput
          jsonOutput={jsonOutput}
          currentStackName={targetStack}
          stacks={
            projectUpdate?.type === "synthesized" ? projectUpdate.stacks : []
          }
        />
      </StatusBottomBar>
    </StreamView>
  );
};
