import React from "react";
import { stripAnsi } from '../test-helper'
import { render } from "ink-testing-library";
import { ResourceName } from "../../bin/cmds/ui/components/resource-name";

test("ResourceName", async () => {
  const { lastFrame } = render(
    <ResourceName
      stackName="hellodiff_test"
      name="null_resource.hellodiff_test_85E428D7"
    />
  );

  expect(stripAnsi(lastFrame() || '')).toMatchInlineSnapshot(
    `"NULL_RESOURCE        test                null_resource.hellodiff_test_85E428D7"`
  );
});

test("ResourceName Breaking", async () => {
  const { lastFrame } = render(
    <>
      <ResourceName
        stackName="hellodiff_test"
        name="null_resource.hellodiff_test_25E428D1"
      />
      <ResourceName
        stackName="hellodiff_test"
        name="null_resource.hellodiff_test_85E428D7"
      />
    </>
  );

  expect(stripAnsi(lastFrame())).toMatchInlineSnapshot(`
    "NULL_RESOURCE        test                null_resource.hellodiff_test_25E428D1
    NULL_RESOURCE        test                null_resource.hellodiff_test_85E428D7"
  `);
});