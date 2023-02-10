/**
 * Copyright (c) HashiCorp, Inc.
 * SPDX-License-Identifier: MPL-2.0
 */

import React from "react";
import SelectInput from "ink-select-input";
import { Box, Text } from "ink";

type Props = {
  stackName: string;
  onApprove: () => void;
  onDismiss: () => void;
  onStop: () => void;
};

type Option = { label: string; description: string };
type TransformedOption = Option & { value: string };
const options: Record<string, Option> = {
  approve: {
    label: "Approve",
    description: `Applies the changes outlined in the plan.`,
  },
  dismiss: {
    label: "Dismiss",
    description: `Does not apply the changes outlined in the plan. This will also prevent depending stacks from planning.`,
  },
  stop: {
    label: "Stop",
    description: `Does not apply the changes. Currently running stacks will be finished, but no new ones will be started.`,
  },
};
export function ApproveBottomBar({
  stackName,
  onApprove,
  onDismiss,
  onStop,
}: Props) {
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
      case "approve":
        onApprove();
        break;
      case "dismiss":
        onDismiss();
        break;
      case "stop":
        onStop();
        break;
    }
  };

  return (
    <Box flexDirection="column">
      <Box>
        <Text>Please review the diff output above for </Text>
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
