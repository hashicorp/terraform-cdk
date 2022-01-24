import React from "react";
import { Text, Box } from "ink";
import { TerraformOutput } from "../models/terraform";

export interface OutputsConfig {
  outputs: { [key: string]: TerraformOutput };
}
function sanitize(value: any) {
  if (typeof value === "object") {
    return JSON.stringify(value, null, 2);
  }

  return value;
}

export const Outputs = ({ outputs }: OutputsConfig): React.ReactElement => {
  return (
    <Box flexDirection="column">
      {Object.keys(outputs).map((key) => (
        <Box key={key}>
          <Text>
            {key} ={" "}
            {outputs[key].sensitive
              ? "<sensitive>"
              : sanitize(outputs[key].value)}
          </Text>
        </Box>
      ))}
    </Box>
  );
};
