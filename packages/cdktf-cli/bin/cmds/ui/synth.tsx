import React from "react";
import { Text } from "ink";

import { useCdktfProject } from "./hooks/cdktf-project";
import { StreamView } from "./components";
import { SynthesizedStack } from "../../../lib";
import { StatusBottomBar } from "./components/bottom-bars/status";

interface CommonSynthConfig {
  outDir: string;
}

interface SynthConfig extends CommonSynthConfig {
  synthCommand: string;
}
type SynthOutputConfig = {
  stacks: SynthesizedStack[];
};
const SynthOutput = ({ stacks }: SynthOutputConfig): React.ReactElement => {
  return (
    <Text>
      Generated Terraform code for the stacks:{" "}
      {stacks?.map((s) => s.name).join(", ")}
    </Text>
  );
};

export const Synth = ({
  outDir,
  synthCommand,
}: SynthConfig): React.ReactElement => {
  const { returnValue, logEntries, status } = useCdktfProject(
    { outDir, synthCommand },
    (project) => project.synth()
  );

  return (
    <StreamView logs={logEntries}>
      <StatusBottomBar status={status}>
        <SynthOutput stacks={status.type === "done" ? returnValue! : []} />
      </StatusBottomBar>
    </StreamView>
  );
};
