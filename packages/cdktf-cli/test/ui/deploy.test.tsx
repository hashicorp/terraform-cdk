import React from "react";
import { render } from "ink-testing-library";
import { Outputs } from "../../bin/cmds/ui/components";
import { DeploySummary } from "../../bin/cmds/ui/deploy";
import { stripAnsi } from "../test-helper";
import {
  DeployingResource,
  DeployingResourceApplyState,
  PlannedResourceAction,
  TerraformOutput,
} from "../../lib/models/terraform";

test("DeploySummary", async () => {
  const resource: DeployingResource = {
    id: "foo.bar_352350",
    action: PlannedResourceAction.CREATE,
    applyState: DeployingResourceApplyState.CREATED,
  };

  const { lastFrame } = render(<DeploySummary resources={[resource]} />);
  expect(stripAnsi(lastFrame())).toMatchInlineSnapshot(`
    "1 created
    , 0 updated
    , 0 destroyed"
  `);
});

test("Output", async () => {
  const output: { [key: string]: TerraformOutput } = {
    foo: {
      sensitive: false,
      type: "bar",
      value: "baz",
    },
    map: {
      sensitive: false,
      type: "map",
      value: { keyA: "valueA", keyB: "valueB" },
    },
    list: {
      sensitive: false,
      type: "list",
      value: ["A", "B", "C"],
    },
    password: {
      type: "string",
      sensitive: true,
      value: "hunter2",
    },
  };

  const { lastFrame } = render(<Outputs outputs={output} />);
  expect(stripAnsi(lastFrame())).toMatchInlineSnapshot(`
    "foo = baz
    map = {
      \\"keyA\\": \\"valueA\\",
      \\"keyB\\": \\"valueB\\"
    }
    list = [
      \\"A\\",
      \\"B\\",
      \\"C\\"
    ]
    password = <sensitive>"
  `);
});
