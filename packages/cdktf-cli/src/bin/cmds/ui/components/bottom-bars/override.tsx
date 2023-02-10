/**
 * Copyright (c) HashiCorp, Inc.
 * SPDX-License-Identifier: MPL-2.0
 */

import React from "react";
import SelectInput from "ink-select-input";
import { Box, Text } from "ink";

type Props = {
  stackName: string;
  onOverride: () => void;
  onReject: () => void;
};

type Option = { label: string; description: string };
type TransformedOption = Option & { value: string };
const options: Record<string, Option> = {
  override: {
    label: "Override",
    description: `Overrides the soft failed policy check`,
  },
  reject: {
    label: "Reject",
    description: `Does not override the failed policy check, and stops the operation`,
  },
};
export function OverrideBottomBar({ stackName, onOverride, onReject }: Props) {
  const selectOptions: TransformedOption[] = Object.keys(options).map(
    (key) => ({
      ...options[key],
      value: key,
    })
  );
  const [highlighted, setHighlighted] = React.useState(selectOptions[0].value);
  const handleHighlight = (item: { value: string }) => {
    setHighlighted(item.value);
  };
  const handleSelect = (item: { value: string }) => {
    switch (item.value) {
      case "override":
        onOverride();
        break;
      case "reject":
        onReject();
        break;
    }
  };

  return (
    <Box flexDirection="column">
      <Box>
        <Text>Please review the above failures for </Text>
        <Text bold>{stackName}</Text>
      </Box>
      <Box>
        <SelectInput
          items={selectOptions}
          onSelect={handleSelect}
          onHighlight={handleHighlight}
        />
        <Box paddingLeft={2}>
          <Text>{options[highlighted].description}</Text>
        </Box>
      </Box>
    </Box>
  );
}
