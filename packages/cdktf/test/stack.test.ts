// Copyright (c) HashiCorp, Inc
// SPDX-License-Identifier: MPL-2.0
import {
  TerraformResource,
  TerraformStack,
  App,
  Testing,
  TerraformOutput,
  LocalBackend,
} from "cdktf/lib";
import { TerraformModule } from "cdktf/lib/terraform-module";
import { TestProvider } from "./helper";
import { Construct } from "constructs";

test("stack synthesis merges all elements into a single output", () => {
  const app = Testing.stubVersion(
    Testing.enableFutureFlags(new App({ stackTraces: false }))
  );
  const stack = new TerraformStack(app, "MyStack");

  new TestProvider(stack, "test-provider", {
    accessKey: "foo",
    type: "aws",
  });

  new MyResource(stack, "Resource1", {
    terraformResourceType: "aws_bucket",
  });

  const overrideResource = new MyResource(stack, "Resource2", {
    terraformResourceType: "aws_topic",
  });
  overrideResource.addOverride("//", "this is a comment");
  overrideResource.addOverride("prop2", undefined);
  overrideResource.addOverride("prop3.name", "test");
  overrideResource.addOverride("provisioner", [
    {
      "local-exec": {
        command: "echo 'Hello World' >example.txt",
      },
    },
  ]);

  const eks = new MyModule(stack, "EksModule", {
    source: "terraform-aws-modules/eks/aws",
    version: "7.0.1",
  });

  new TerraformOutput(stack, "eks_version", {
    value: eks.version,
  });

  stack.addOverride("terraform.backend", {
    remote: {
      organization: "test",
      workspaces: {
        name: "test",
      },
    },
  });

  expect(Testing.synth(stack)).toMatchSnapshot();
});

test("stack synthesis no flags", () => {
  const app = Testing.stubVersion(new App({ stackTraces: false }));
  const stack = new TerraformStack(app, "MyStack");

  new TestProvider(stack, "test-provider", {
    accessKey: "foo",
    type: "aws",
  });

  new MyResource(stack, "Resource1", {
    terraformResourceType: "aws_bucket",
  });

  const eks = new MyModule(stack, "EksModule", {
    source: "terraform-aws-modules/eks/aws",
    version: "7.0.1",
  });

  new TerraformOutput(stack, "eks_version", {
    value: eks.version,
  });

  expect(Testing.synth(stack)).toMatchSnapshot();
});

test("stack validation returns error when provider is missing", () => {
  const app = Testing.stubVersion(new App({ stackTraces: false }));
  const stack = new TerraformStack(app, "MyStack");

  new MyResource(stack, "Resource1", {
    terraformResourceType: "aws_bucket",
    terraformGeneratorMetadata: {
      providerName: "test-provider",
    },
  });

  const errors = stack.node.validate();

  expect(errors).toEqual([
    `Found resources without a matching provider construct. Please make sure to add provider constructs [e.g. new RandomProvider(...)] to your stack 'MyStack' for the following providers: test-provider`,
  ]);
});

test("stack validation returns no error when provider is not set", () => {
  const app = Testing.stubVersion(new App({ stackTraces: false }));
  const stack = new TerraformStack(app, "MyStack");

  new MyResource(stack, "Resource1", {
    terraformResourceType: "aws_bucket",
  });

  const errors = stack.node.validate();
  expect(errors).toEqual([]);
});

test("getting Stack for construct which was added to root app returns friendly error", () => {
  const app = Testing.stubVersion(new App({ stackTraces: false }));
  new TerraformStack(app, "MyStack");

  expect(() => new LocalBackend(app, {})).toThrowErrorMatchingInlineSnapshot(
    `"No stack could be identified for the construct at path 'backend'. You seem to have passed your root App as scope to a construct. Pass a stack (inheriting from TerraformStack) as scope to your construct instead."`
  );
});

describe("output id map", () => {
  test("output id map is empty when no outputs are added", () => {
    const app = Testing.stubVersion(new App({ stackTraces: false }));
    const stack = new TerraformStack(app, "MyStack");

    expect(stack.toTerraform()["//"].outputs).toEqual({});
  });

  test("output id map is populated when outputs are added", () => {
    const app = Testing.stubVersion(new App({ stackTraces: false }));
    const stack = new TerraformStack(app, "MyStack");

    new TerraformOutput(stack, "output1", {
      value: "value1",
    });

    const resource = new MyResource(stack, "Resource1", {
      terraformResourceType: "aws_bucket",
    });

    new TerraformOutput(stack, "output2", {
      value: resource,
    });

    const tf = stack.toTerraform();
    const { outputs } = tf["//"];

    expect(Object.keys(outputs.MyStack)).toEqual(["output1", "output2"]);
    expect(Object.keys(tf.output)).toEqual(
      expect.arrayContaining(Object.values(outputs.MyStack))
    );
  });

  test("output id map is populated with nested custom constructs", () => {
    const app = Testing.stubVersion(new App({ stackTraces: false }));
    const stack = new TerraformStack(app, "MyStack");

    class MyCustomConstruct extends Construct {
      constructor(scope: Construct, id: string) {
        super(scope, id);

        const resource = new MyResource(this, "resource", {
          terraformResourceType: "aws_bucket",
        });

        new TerraformOutput(this, "output", {
          value: resource,
        });
        new TerraformOutput(this, "output1", {
          value: "value1",
        });
      }
    }

    new MyCustomConstruct(stack, "MyCustomConstruct");
    new MyCustomConstruct(stack, "MyCustomOtherConstruct");

    const tf = stack.toTerraform();
    const { outputs } = tf["//"];

    expect(outputs).toMatchInlineSnapshot(`
      {
        "MyStack": {
          "MyCustomConstruct": {
            "output": "MyCustomConstruct_output_AFA0492F",
            "output1": "MyCustomConstruct_output1_11AB14A2",
          },
          "MyCustomOtherConstruct": {
            "output": "MyCustomOtherConstruct_output_D26A811A",
            "output1": "MyCustomOtherConstruct_output1_9A3A64D2",
          },
        },
      }
    `);
  });
});

class MyModule extends TerraformModule {
  protected synthesizeAttributes() {
    return {
      cluster_name: "my_cluster_name",
    };
  }
}

class MyResource extends TerraformResource {
  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      foo: this.friendlyUniqueId,
      prop1: "bar1",
      prop2: 1234,
      prop3: {
        name: "should be overwritten in resource 2",
        value: 5678,
      },
    };
  }
}
