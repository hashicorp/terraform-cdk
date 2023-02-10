/**
 * Copyright (c) HashiCorp, Inc.
 * SPDX-License-Identifier: MPL-2.0
 */

import React from "react";
import { Text, Box } from "ink";
import { Outputs } from "../outputs";
import { NestedTerraformOutputs } from "@cdktf/cli-core";

type Props = {
  outputs?: NestedTerraformOutputs;
  outputsFile?: string;
};
export function OutputsBottomBar({ outputs, outputsFile }: Props) {
  if (outputs && Object.keys(outputs).length > 0) {
    if (outputsFile) {
      return (
        <Box flexDirection="column">
          <Outputs outputs={outputs} />
          <Text>The outputs have been written to {outputsFile}</Text>
        </Box>
      );
    }

    return <Outputs outputs={outputs} />;
  }

  return <Text>No outputs found.</Text>;
}
