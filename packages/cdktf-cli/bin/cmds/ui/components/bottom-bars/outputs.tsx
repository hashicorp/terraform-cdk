import React from "react";
import { Text, Box } from "ink";
import { Outputs } from "../outputs";
import { NestedTerraformOutputs } from "../../../../../lib/output";

type Props = {
  outputs?: NestedTerraformOutputs;
  outputsPath?: string;
};
export function OutputsBottomBar({ outputs, outputsPath }: Props) {
  if (outputs && Object.keys(outputs).length > 0) {
    if (outputsPath) {
      return (
        <Box>
          <Outputs outputs={outputs} />
          <Text>The outputs have been written to {outputsPath}</Text>
        </Box>
      );
    }

    return <Outputs outputs={outputs} />;
  }

  return <Text>No outputs found.</Text>;
}
