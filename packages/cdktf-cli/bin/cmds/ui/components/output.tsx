import React from "react";
import { Text, Box } from "ink";
import { TerraformOutput } from "../models/terraform";

export interface OutputConfig {
  output: { [key: string]: TerraformOutput };
}
function sanitize(value: any) {
  if (typeof value === "object") {
    return JSON.stringify(value, null, 2);
  }

  return value;
}

export const Output = ({ output }: OutputConfig): React.ReactElement => {
  return (
    <Box flexDirection="column">
      {Object.keys(output).map((key) => (
        <Box key={key}>
          <Text>
            {key} ={" "}
            {output[key].sensitive
              ? "<sensitive>"
              : sanitize(output[key].value)}
          </Text>
        </Box>
      ))}
    </Box>
  );
};
