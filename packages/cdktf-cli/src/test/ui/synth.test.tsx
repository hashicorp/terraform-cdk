/**
 * Copyright (c) HashiCorp, Inc.
 * SPDX-License-Identifier: MPL-2.0
 */

import React from "react";
import { render } from "ink-testing-library";
import { stripAnsi } from "../test-helper";
import { SynthOutput } from "../../bin/cmds/ui/synth";
import { SynthesizedStack } from "@cdktf/cli-core";

test("SynthOutput shows message when no stacks are found", () => {
  const { lastFrame } = render(<SynthOutput stacks={[]} />);
  expect(stripAnsi(lastFrame())).toBe("No stacks found in the configuration.");
});

test("SynthOutput lists multiple stack names", () => {
  const multipleStacks = [
    { name: "stack1" },
    { name: "stack2" },
  ] as SynthesizedStack[];

  const { lastFrame } = render(<SynthOutput stacks={multipleStacks} />);
  expect(stripAnsi(lastFrame())).toBe(
    "Generated Terraform code for the stacks: stack1, stack2",
  );
});
