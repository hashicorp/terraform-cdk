import React from "react";
import { render } from "ink-testing-library";
import { DestroyComponent } from "../../bin/cmds/ui/destroy";
import { stripAnsi } from "../test-helper";
import {
  DeployingResource,
  DeployingResourceApplyState,
  PlannedResourceAction,
} from "../../bin/cmds/ui/models/terraform";
import {
  TerraformProvider,
  DeployState,
  Status,
} from "../../bin/cmds/ui/terraform-context";
import { SynthesizedStack } from "../../bin/cmds/helper/synth-stack";

test("Destroy", async () => {
  const resource: DeployingResource = {
    id: "foo.bar_352350",
    action: PlannedResourceAction.DELETE,
    applyState: DeployingResourceApplyState.DESTROYING,
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
      <DestroyComponent />
    </TerraformProvider>
  );
  expect(stripAnsi(lastFrame())).toMatchInlineSnapshot(`
    "Destroying Stack: testing
    Resources
     ⠋ FOO                  bar_352350          foo.bar_352350

    Summary: 0 destroyed."
  `);
});

test("Apply Multiple Resources", async () => {
  const resource: DeployingResource = {
    id: "null_resource.hellodiff_test_352350",
    action: PlannedResourceAction.CREATE,
    applyState: DeployingResourceApplyState.DESTROYING,
  };

  const otherResource: DeployingResource = {
    id: "null_resource.hellodiff_test_85E428D7",
    action: PlannedResourceAction.CREATE,
    applyState: DeployingResourceApplyState.DESTROYED,
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
      <DestroyComponent />
    </TerraformProvider>
  );
  expect(stripAnsi(lastFrame())).toMatchInlineSnapshot(`
    "Destroying Stack: hellodiff
    Resources
     ⠋ NULL_RESOURCE        test_352350         null_resource.hellodiff_test_352350
     ✔ NULL_RESOURCE        test                null_resource.hellodiff_test_85E428D7

    Summary: 1 destroyed."
  `);
});
