/**
 * Copyright (c) HashiCorp, Inc.
 * SPDX-License-Identifier: MPL-2.0
 */

import React from "react";
import { Text, Box } from "ink";
import {
  NestedTerraformOutputs,
  TerraformOutput,
  isTerraformOutput,
} from "@cdktf/cli-core";

export interface OutputsConfig {
  outputs: NestedTerraformOutputs;
}
function sanitize(value: any) {
  if (typeof value === "object") {
    return JSON.stringify(value, null, 2);
  }

  return value;
}

function Output({ name, value }: { name: string; value: TerraformOutput }) {
  return (
    <Box key={name}>
      <Text>
        {name} = {value.sensitive ? "<sensitive>" : sanitize(value.value)}
      </Text>
    </Box>
  );
}

// Puts the top-level outputs before the nested outputs
const compareOutputs =
  (value: NestedTerraformOutputs) =>
  ([k1]: [string, any], [k2]: [string, any]): number => {
    if (isTerraformOutput(value[k1]) && isTerraformOutput(value[k2])) {
      return k1.localeCompare(k2);
    }

    if (isTerraformOutput(value[k1])) {
      return -1;
    }

    if (isTerraformOutput(value[k2])) {
      return 1;
    }
    return k1.localeCompare(k2);
  };

function NestedOutput({
  name,
  value,
  indentationLevel = 0,
}: {
  name: string;
  value: NestedTerraformOutputs;
  indentationLevel?: number;
}) {
  // This is a safe-guard against infinite recursion
  if (indentationLevel > 500) {
    return <></>;
  }
  if (isTerraformOutput(value)) {
    return (
      <Box key={name}>
        <Output name={name} value={value} />
      </Box>
    );
  }

  return (
    <Box flexDirection="column" key={name} marginLeft={2} marginBottom={1}>
      <Text bold>{name}</Text>
      <Box marginLeft={indentationLevel * 2} flexDirection="column">
        {Object.entries(value)
          .sort(compareOutputs(value))
          .map(([k, v]) => (
            <NestedOutput
              indentationLevel={indentationLevel + 1}
              key={k}
              name={k}
              value={v}
            />
          ))}
      </Box>
    </Box>
  );
}

export const Outputs = ({ outputs }: OutputsConfig): React.ReactElement => {
  return (
    <Box flexDirection="column">
      {Object.entries(outputs).map(([key, value]) => (
        <Box key={key}>
          <NestedOutput name={key} value={value} />
        </Box>
      ))}
    </Box>
  );
};
