import React from "react";
import { render } from "ink-testing-library";
import { Output } from "../../bin/cmds/ui/deploy";
import { DeploySummary, Apply } from "../../bin/cmds/ui/deploy";
import { stripAnsi } from "../test-helper";
import {
  DeployingResource,
  DeployingResourceApplyState,
  PlannedResourceAction,
  TerraformOutput,
} from "../../bin/cmds/ui/models/terraform";
import {
  TerraformProvider,
  DeployState,
  Status,
} from "../../bin/cmds/ui/terraform-context";
import { SynthesizedStack } from "../../bin/cmds/helper/synth-stack";

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

  const { lastFrame } = render(<Output output={output} />);
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

test("Apply", async () => {
  const resource: DeployingResource = {
    id: "foo.bar_352350",
    action: PlannedResourceAction.CREATE,
    applyState: DeployingResourceApplyState.CREATING,
  };

  const currentStack: SynthesizedStack = {
    constructPath: "",
    content: "",
    name: "testing",
    synthesizedStackPath: "./foo/stacks/bar",
    workingDirectory: "./foo",
    annotations: [],
    dependencies: [],
  };

  const initialState: DeployState = {
    status: Status.STARTING,
    resources: [resource],
    currentStack,
  };

  const { lastFrame } = render(
    <TerraformProvider initialState={initialState}>
      <Apply />
    </TerraformProvider>
  );
  expect(stripAnsi(lastFrame())).toMatchInlineSnapshot(`
    "Deploying Stack: testing
    Resources
     ⠋ FOO                  bar_352350          foo.bar_352350

    Summary: 0 created, 0 updated, 0 destroyed."
  `);
});

test("Apply Multiple Resources", async () => {
  const resource: DeployingResource = {
    id: "null_resource.hellodiff_test_352350",
    action: PlannedResourceAction.CREATE,
    applyState: DeployingResourceApplyState.CREATING,
  };

  const otherResource: DeployingResource = {
    id: "null_resource.hellodiff_test_85E428D7",
    action: PlannedResourceAction.CREATE,
    applyState: DeployingResourceApplyState.CREATED,
  };

  const currentStack: SynthesizedStack = {
    constructPath: "",
    content: "",
    name: "hellodiff",
    synthesizedStackPath: "./foo/stacks/bar",
    workingDirectory: "./foo",
    annotations: [],
    dependencies: [],
  };

  const initialState: DeployState = {
    status: Status.STARTING,
    resources: [resource, otherResource],
    currentStack,
  };

  const { lastFrame } = render(
    <TerraformProvider initialState={initialState}>
      <Apply />
    </TerraformProvider>
  );
  expect(stripAnsi(lastFrame())).toMatchInlineSnapshot(`
    "Deploying Stack: hellodiff
    Resources
     ⠋ NULL_RESOURCE        test_352350         null_resource.hellodiff_test_352350
     ✔ NULL_RESOURCE        test                null_resource.hellodiff_test_85E428D7

    Summary: 1 created, 0 updated, 0 destroyed."
  `);
});
