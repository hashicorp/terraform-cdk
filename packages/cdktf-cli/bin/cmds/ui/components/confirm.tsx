import React, { useState } from "react";
import { Box, Text, useApp } from "ink";
import ConfirmInput from "@skorfmann/ink-confirm-input";

interface ConfirmConfig {
  onApprove: (value: any) => any;
}

export const Confirm = ({ onApprove }: ConfirmConfig): React.ReactElement => {
  const [value, setValue] = useState("");
  const { exit } = useApp();

  return (
    <Box flexDirection="column" marginTop={1}>
      <Text bold>Do you want to perform these actions?</Text>
      <Text> CDK for Terraform will perform the actions described above.</Text>
      <Text> Only 'yes' will be accepted to approve.</Text>

      <Box flexDirection="row" marginTop={1}>
        <Text bold> Enter a value:</Text>
        <ConfirmInput
          value={value}
          onChange={setValue}
          onSubmit={(value: string) => {
            console.log("value", typeof value);
            if (value) {
              onApprove(value);
            } else {
              exit();
            }
          }}
        />
      </Box>
    </Box>
  );
};
