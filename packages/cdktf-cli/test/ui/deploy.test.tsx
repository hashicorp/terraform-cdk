import React from "react";
import { render } from "ink-testing-library";
import { Output } from "../../bin/cmds/ui/deploy";
import { DeploySummary, Apply } from "../../bin/cmds/ui/deploy";
import {
  DeployingResource,
  DeployingResourceApplyState,
  PlannedResourceAction,
  TerraformOutput
} from "../../bin/cmds/ui/models/terraform";
import {
  TerraformProvider,
  DeployState,
  Status
} from "../../bin/cmds/ui/terraform-context";

test("DeploySummary", async () => {
  const resource: DeployingResource = {
    id: "foo.bar_352350",
    action: PlannedResourceAction.CREATE,
    applyState: DeployingResourceApplyState.CREATED
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
      value: "baz"
    }
  };

  const { lastFrame } = render(<Output output={output} />);
  expect(stripAnsi(lastFrame())).toMatchInlineSnapshot(`"foo = baz"`);
});

test("Apply", async () => {
  const resource: DeployingResource = {
    id: "foo.bar_352350",
    action: PlannedResourceAction.CREATE,
    applyState: DeployingResourceApplyState.CREATING
  };

  const initialState: DeployState = {
    status: Status.STARTING,
    resources: [resource],
    stackName: "testing"
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

const stripAnsi = (str: string | undefined): string => {
  if (!str) {
    return "";
  }
  return str.replace(
    /[\u001b\u009b][[()#;?]*(?:[0-9]{1,4}(?:;[0-9]{0,4})*)?[0-9A-ORZcf-nqry=><]/g,
    ""
  );
};
