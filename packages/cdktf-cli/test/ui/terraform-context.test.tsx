import React from "react";
import { render } from "ink-testing-library";
import { Box } from "ink";
import {
  TerraformProvider,
  DeployState,
  Status,
  useTerraform
} from "../../bin/cmds/ui/terraform-context";
import {
  ITerraform,
  TerraformPlan,
  TerraformOutput
} from "../../bin/cmds/ui/models/terraform";
import { SynthesizedStack } from "../../bin/cmds/helper/synth-stack";

const stubbedSynth = async (): Promise<SynthesizedStack[]> => {
  const stacks: SynthesizedStack[] = [
    {
      file: "file",
      name: "stubbed",
      content: "{}"
    }
  ];
  return stacks;
};

class TerraformTestCli implements ITerraform {
  constructor() { }

  public async init(): Promise<void> { }

  public async plan(): Promise<TerraformPlan> {
    return new TerraformPlan("foo.tf.json", {});
  }

  public async deploy(
    _planFile: string,
    _stdout: (chunk: Buffer) => any
  ): Promise<void> {
    return;
  }

  public async output(): Promise<{ [key: string]: TerraformOutput }> {
    return {
      foo: {
        sensitive: false,
        type: "yeha",
        value: "bar"
      }
    };
  }
}

interface TestComponentConfig { }

const TestComponent = ({ }: TestComponentConfig): React.ReactElement => {
  const { init } = useTerraform({
    synthStack: stubbedSynth,
    terraformWrapper: new TerraformTestCli()
  });
  const { stackName, errors } = init();

  if (errors) return (<Box>{errors}</Box>);

  return <Box>{stackName}</Box>;
};

test("TerraformProvider", async () => {
  const initialState: DeployState = {
    status: Status.STARTING,
    resources: []
  };

  const { lastFrame } = render(
    <TerraformProvider initialState={initialState}>
      <TestComponent />
    </TerraformProvider>
  );

  expect(stripAnsi(lastFrame())).toMatchInlineSnapshot(`""`);
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
