import React from "react";
import { render } from "ink-testing-library";
import { ResourceName } from "../../bin/cmds/ui/components/resource-name";

test("ResourceName", async () => {
  const { lastFrame } = render(
    <ResourceName
      stackName="hellodiff_test"
      name="null_resource.hellodiff_test_85E428D7"
    />
  );
  expect(stripAnsi(lastFrame())).toMatchInlineSnapshot(
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

const stripAnsi = (str: string | undefined): string => {
  if (!str) {
    return "";
  }
  return str.replace(
    /[\u001b\u009b][[()#;?]*(?:[0-9]{1,4}(?:;[0-9]{0,4})*)?[0-9A-ORZcf-nqry=><]/g,
    ""
  );
};
