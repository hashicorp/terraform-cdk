import React from "react";
import { Text } from "ink";

import { useCdktfProject } from "./hooks/cdktf-project";
import { StreamView, StatusBottomBar } from "./components";
import { CdktfProject, SynthesizedStack } from "../../../lib";

interface CommonSynthConfig {
  outDir: string;
  targetStacks: string[];
}

interface SynthConfig extends CommonSynthConfig {
  synthCommand: string;
}
type SynthOutputConfig = {
  targetStacks: string[];
  stacks: SynthesizedStack[];
};

export async function synthToJSON({
  outDir,
  synthCommand,
  targetStacks,
}: SynthConfig) {
  const project = new CdktfProject({
    synthCommand,
    outDir,
    onUpdate: () => {}, //eslint-disable-line @typescript-eslint/no-empty-function
  });

  const stacks = await project.synth();
  const stacksToDisplay = targetStacks.map((targetStack) => {
    const stack = stacks.find((stack) => stack.name === targetStack);
    if (!stack) {
      throw new Error(`Stack ${targetStack} not found`);
    }
    return stack;
  });

  return stacksToDisplay.reduce(
    (carry, item) => ({
      ...carry,
      [item.name]: JSON.parse(item.content),
    }),
    {}
  );
}

const SynthOutput = ({ stacks }: SynthOutputConfig): React.ReactElement => {
  return (
    <>
      <Text>
        Generated Terraform code for the stacks:{" "}
        {stacks?.map((s) => s.name).join(", ")}
      </Text>
    </>
  );
};

export const Synth = ({
  outDir,
  synthCommand,
  targetStacks,
}: SynthConfig): React.ReactElement => {
  const { projectUpdate, logEntries, done } = useCdktfProject(
    { outDir, synthCommand },
    (project) => project.synth()
  );

  return (
    <StreamView logs={logEntries}>
      <StatusBottomBar latestUpdate={projectUpdate} done={done}>
        <SynthOutput
          targetStacks={targetStacks}
          stacks={
            projectUpdate?.type === "synthesized" ? projectUpdate.stacks : []
          }
        />
      </StatusBottomBar>
    </StreamView>
  );
};
