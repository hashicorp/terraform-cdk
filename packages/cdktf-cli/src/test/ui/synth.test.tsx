/**
 * Copyright (c) HashiCorp, Inc.
 * SPDX-License-Identifier: MPL-2.0
 */

import React from "react";
import { render } from "ink-testing-library";
import { stripAnsi } from "../test-helper";
import { SynthOutput } from "../../bin/cmds/ui/synth";
import { SynthesizedStack } from "@cdktf/cli-core";

test("SynthOutput", () => {
  const { lastFrame } = render(<SynthOutput stacks={[]} />);
  expect(stripAnsi(lastFrame())).toBe("No stacks found in configuration.");
  {
    const multipleStacks = [
      { name: "stack1" },
      { name: "stack2" },
    ] as SynthesizedStack[];

    const { lastFrame } = render(<SynthOutput stacks={multipleStacks} />);
    expect(stripAnsi(lastFrame())).toBe(
      "Generated Terraform code for the stacks: stack1, stack2",
    );
  }
});
