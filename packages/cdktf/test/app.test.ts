// Copyright (c) HashiCorp, Inc
// SPDX-License-Identifier: MPL-2.0
import {
  CONTEXT_ENV,
  App,
  TerraformStack,
  TerraformResource,
  Testing,
  DataTerraformRemoteStateLocal,
  LocalBackend,
  RemoteBackend,
  DataTerraformRemoteState,
  Fn,
} from "../lib";

import { version } from "../package.json";
import fs = require("fs");
import path = require("path");
import os = require("os");
import { Aspects } from "../lib/aspect";
import { IConstruct } from "constructs";
import { setupJest } from "../lib/testing/adapters/jest";
import { TestProvider, TestResource } from "./helper";
import { OtherTestResource } from "./helper/resource";
import { TerraformOutput } from "../lib/terraform-output";
setupJest();

test("context can be passed through CDKTF_CONTEXT", () => {
  process.env[CONTEXT_ENV] = JSON.stringify({
    key1: "val1",
    key2: "val2",
  });
  const prog = new App();
  const node = prog.node;
  expect(node.tryGetContext("key1")).toEqual("val1");
  expect(node.tryGetContext("key2")).toEqual("val2");
});

test("context can be passed through CDKTF_CONTEXT", () => {
  process.env[CONTEXT_ENV] = JSON.stringify({
    key1: "val1",
    key2: "val2",
  });
  const prog = new App({
    context: {
      key1: "val3",
      key2: "val4",
    },
  });
  const node = prog.node;
  expect(node.tryGetContext("key1")).toEqual("val1");
  expect(node.tryGetContext("key2")).toEqual("val2");
});

test("cdktfVersion is accessible in context", () => {
  const prog = new App();
  const node = prog.node;
  expect(node.tryGetContext("cdktfVersion")).toEqual(version);
});

test("app synth does not throw error when validatons are disabled", () => {
  const outdir = fs.mkdtempSync(path.join(os.tmpdir(), "cdktf.outdir."));
  const app = Testing.stubVersion(
    new App({ stackTraces: false, outdir, skipValidation: true })
  );
  const stack = new TerraformStack(app, "MyStack");

  new MyResource(stack, "Resource1", {
    terraformResourceType: "aws_bucket",
    terraformGeneratorMetadata: {
      providerName: "test-provider",
    },
  });

  expect(() => app.synth()).not.toThrow();
});

test("app synth throws error when provider is missing", () => {
  const outdir = fs.mkdtempSync(path.join(os.tmpdir(), "cdktf.outdir."));
  const app = Testing.stubVersion(new App({ stackTraces: false, outdir }));
  const stack = new TerraformStack(app, "MyStack");

  new MyResource(stack, "Resource1", {
    terraformResourceType: "aws_bucket",
    terraformGeneratorMetadata: {
      providerName: "test-provider",
    },
  });

  expect(() => app.synth()).toThrowErrorMatchingInlineSnapshot(`
    "Validation failed with the following errors:
      [MyStack] Found resources without a matching provider construct. Please make sure to add provider constructs [e.g. new RandomProvider(...)] to your stack 'MyStack' for the following providers: test-provider"
  `);
});

test("app synth supports app level validations", () => {
  const outdir = fs.mkdtempSync(path.join(os.tmpdir(), "cdktf.outdir."));
  const app = Testing.stubVersion(new App({ stackTraces: false, outdir }));

  const mockValidation = {
    validate: jest.fn().mockReturnValue(["error1", "error2"]),
  };
  app.node.addValidation(mockValidation);

  expect(() => app.synth()).toThrowErrorMatchingInlineSnapshot(`
    "App level validation failed with the following errors:
      error1
      error2"
  `);
  expect(mockValidation.validate).toHaveBeenCalledTimes(1);
});

test("app synth supports skipping app level validations", () => {
  const outdir = fs.mkdtempSync(path.join(os.tmpdir(), "cdktf.outdir."));
  const app = Testing.stubVersion(
    new App({ stackTraces: false, outdir, skipValidation: true })
  );

  const mockValidation = {
    validate: jest.fn().mockReturnValue(["error1"]),
  };
  app.node.addValidation(mockValidation);

  expect(() => app.synth()).not.toThrow();
  expect(mockValidation.validate).toHaveBeenCalledTimes(0);
});

test("app synth executes Aspects", () => {
  const outdir = fs.mkdtempSync(path.join(os.tmpdir(), "cdktf.outdir."));
  const app = Testing.stubVersion(
    new App({ stackTraces: false, outdir, skipValidation: true })
  );
  const stack = new TerraformStack(app, "MyStack");

  const StackAspect = { visit: jest.fn() };
  const ResourceAspect = {
    visit: jest.fn().mockImplementation((resource: IConstruct) => {
      const inferredStack = TerraformStack.of(resource);
      new MyResource(inferredStack, "Resource2", {
        terraformResourceType: "aws_bucket",
        terraformGeneratorMetadata: {
          providerName: "test-provider",
        },
      });
    }),
  };

  const resource = new MyResource(stack, "Resource1", {
    terraformResourceType: "aws_bucket",
    terraformGeneratorMetadata: {
      providerName: "test-provider",
    },
  });

  Aspects.of(stack).add(StackAspect);
  Aspects.of(resource).add(ResourceAspect);

  expect(() => app.synth()).not.toThrow();

  expect(StackAspect.visit).toHaveBeenNthCalledWith(1, stack);
  expect(StackAspect.visit).toHaveBeenNthCalledWith(2, resource);
  expect(ResourceAspect.visit).toHaveBeenCalledWith(resource);

  expect(Testing.renderConstructTree(app)).toMatchInlineSnapshot(`
    "App
    └── MyStack (TerraformStack)
        ├── Resource1 (MyResource)
        ├── backend (LocalBackend)
        └── Resource2 (MyResource)
    "
  `);
});

class MyResource extends TerraformResource {}

describe("Cross Stack references", () => {
  class OriginStack extends TerraformStack {
    public resource: TestResource;
    constructor(scope: App, id: string) {
      super(scope, id);

      new TestProvider(this, "TestProvider", {});

      this.resource = new TestResource(this, "resource", {
        name: "resource",
      });
    }
  }
  let app: App;
  let originStack: OriginStack;
  let testStack: TerraformStack;

  beforeEach(() => {
    const outdir = fs.mkdtempSync(path.join(os.tmpdir(), "cdktf.outdir."));
    app = Testing.stubVersion(new App({ stackTraces: false, outdir }));
    originStack = new OriginStack(app, "OriginStack");
    testStack = new TerraformStack(app, "TestStack");
    new TestProvider(testStack, "TestProvider", {});
  });

  type StackSynthResult = {
    originStackSynth: string;
    targetStackSynth: string;
    additionalStackSynth?: string;
    manifest: string;
  };

  function getStackSynths(app: App, additionalStack?: TerraformStack) {
    const originStackSynth = fs.readFileSync(
      path.resolve(app.outdir, "stacks", "OriginStack", "cdk.tf.json"),
      "utf8"
    );
    const targetStackSynth = fs.readFileSync(
      path.resolve(app.outdir, "stacks", "TestStack", "cdk.tf.json"),
      "utf8"
    );

    const manifest = fs.readFileSync(
      path.resolve(app.outdir, "manifest.json"),
      "utf8"
    );
    const result: StackSynthResult = {
      originStackSynth,
      targetStackSynth,
      manifest,
    };

    if (additionalStack) {
      result.additionalStackSynth = fs.readFileSync(
        path.resolve(
          app.outdir,
          "stacks",
          additionalStack.toString(),
          "cdk.tf.json"
        ),
        "utf8"
      );
    }
    return result;
  }

  it("without cross stack references no extra resources are created", () => {
    app.synth();
    const { originStackSynth, targetStackSynth } = getStackSynths(app);

    expect(JSON.parse(originStackSynth).output).toBe(undefined);
    expect(targetStackSynth).not.toHaveDataSource(
      DataTerraformRemoteStateLocal
    );
  });

  it("creates remote state and output", () => {
    new TestResource(testStack, "Resource", {
      name: originStack.resource.stringValue,
    });
    new RemoteBackend(originStack, {
      organization: "testorg",
      workspaces: {
        name: "testworkspace",
      },
    });

    app.synth();
    const { originStackSynth, targetStackSynth } = getStackSynths(app);

    expect(Object.keys(JSON.parse(originStackSynth).output).length).toBe(1);
    expect(targetStackSynth).toHaveDataSource(DataTerraformRemoteStateLocal);
  });

  it("infers the correct path for local state", () => {
    const tfStatePath = path.resolve(
      process.cwd(),
      `terraform.OriginStack.tfstate`
    );
    new TestResource(testStack, "Resource", {
      name: originStack.resource.stringValue,
    });

    // Would error if the path was not correct
    fs.writeFileSync(tfStatePath, "foo", "utf8");

    try {
      app.synth();
    } finally {
      fs.rmSync(tfStatePath);
    }

    const { originStackSynth, targetStackSynth } = getStackSynths(app);

    expect(Object.keys(JSON.parse(originStackSynth).output).length).toBe(1);
    expect(targetStackSynth).toHaveDataSourceWithProperties(
      DataTerraformRemoteStateLocal,
      {
        backend: "local",
        config: {
          path: path.resolve(process.cwd(), `terraform.OriginStack.tfstate`),
        },
      }
    );
  });

  it("passes backend configuration to remote state definition", () => {
    new TestResource(testStack, "Resource", {
      name: originStack.resource.stringValue,
    });

    const outdir = fs.mkdtempSync(path.join(os.tmpdir(), "cdktf.outdir."));
    const targetPath = path.join(outdir, "terraform.tfstate");
    fs.writeFileSync(targetPath, "myState", "utf8");
    new LocalBackend(originStack, {
      path: targetPath,
    });

    app.synth();
    const { originStackSynth, targetStackSynth } = getStackSynths(app);

    expect(Object.keys(JSON.parse(originStackSynth).output).length).toBe(1);
    expect(targetStackSynth).toHaveDataSourceWithProperties(
      DataTerraformRemoteStateLocal,
      {
        backend: "local",
        config: {
          path: targetPath,
        },
      }
    );
  });

  it("uses the same remote state type as the origin stacks backend", () => {
    new TestResource(testStack, "Resource", {
      name: originStack.resource.stringValue,
    });

    new RemoteBackend(originStack, {
      organization: "testorg",
      workspaces: {
        name: "testworkspace",
      },
    });

    app.synth();
    const { originStackSynth, targetStackSynth } = getStackSynths(app);

    expect(Object.keys(JSON.parse(originStackSynth).output).length).toBe(1);
    expect(targetStackSynth).toHaveDataSourceWithProperties(
      DataTerraformRemoteState,
      {
        backend: "remote",
        config: {
          organization: "testorg",
          workspaces: {
            name: "testworkspace",
          },
        },
      }
    );
  });

  it("uses the same remote state type as the origin stacks backend", () => {
    new TestResource(testStack, "Resource", {
      name: originStack.resource.stringValue,
    });

    new RemoteBackend(originStack, {
      organization: "testorg",
      workspaces: {
        name: "testworkspace",
      },
    });

    app.synth();
    const { originStackSynth, targetStackSynth } = getStackSynths(app);

    expect(Object.keys(JSON.parse(originStackSynth).output).length).toBe(1);
    expect(targetStackSynth).toHaveDataSourceWithProperties(
      DataTerraformRemoteState,
      {
        backend: "remote",
        config: {
          organization: "testorg",
          workspaces: {
            name: "testworkspace",
          },
        },
      }
    );
  });

  it("creates a dependency graph between stacks in manifest", () => {
    new TestResource(testStack, "Resource", {
      name: originStack.resource.stringValue,
    });
    new RemoteBackend(originStack, {
      organization: "testorg",
      workspaces: {
        name: "testworkspace",
      },
    });

    app.synth();
    const { manifest } = getStackSynths(app);

    expect(JSON.parse(manifest).stacks.TestStack.dependencies).toEqual([
      "OriginStack",
    ]);
    expect(JSON.parse(manifest).stacks.OriginStack.dependencies).toEqual([]);
  });

  it("the dependency field in manifest has no double entries", () => {
    new TestResource(testStack, "Resource", {
      name: originStack.resource.stringValue,
    });

    new TestResource(testStack, "Resource2", {
      name: originStack.resource.stringValue,
    });
    new RemoteBackend(originStack, {
      organization: "testorg",
      workspaces: {
        name: "testworkspace",
      },
    });

    app.synth();
    const { manifest } = getStackSynths(app);

    expect(JSON.parse(manifest).stacks.TestStack.dependencies).toEqual([
      "OriginStack",
    ]);
    expect(JSON.parse(manifest).stacks.OriginStack.dependencies).toEqual([]);
  });

  it("with cross stack references, no cross stack references are used when not necessary", () => {
    const name = originStack.resource.stringValue;
    new TestResource(originStack, "MyResourceWithRef", {
      name,
    });
    new TestResource(testStack, "Resource", {
      name,
    });

    app.synth();
    const { originStackSynth } = getStackSynths(app);
    const resources = JSON.parse(originStackSynth).resource.test_resource;
    const myResourceKey = Object.keys(resources).find((name) =>
      name.includes("MyResourceWithRef")
    );

    expect(myResourceKey).toBeDefined();
    expect(resources[myResourceKey as string].name).toMatchInlineSnapshot(
      `"\${test_resource.resource.string_value}"`
    );
  });

  it("one ref is cross stack and the other cross stack and inner but the same ref is used", () => {
    const name = originStack.resource.stringValue;
    new TestResource(testStack, "ResourceWithoutFunction", {
      name,
    });
    new TestResource(testStack, "ResourceWithFunction", {
      name: Fn.tostring(name),
    });

    app.synth();
    const { targetStackSynth } = getStackSynths(app);
    const resources = JSON.parse(targetStackSynth).resource.test_resource;
    const resourceWithoutFunctionKey = Object.keys(resources).find((name) =>
      name.includes("ResourceWithoutFunction")
    );
    const resourceWithFunctionKey = Object.keys(resources).find((name) =>
      name.includes("ResourceWithFunction")
    );

    expect(resourceWithoutFunctionKey).toBeDefined();
    expect(
      resources[resourceWithoutFunctionKey as string].name
    ).toMatchInlineSnapshot(
      `"\${data.terraform_remote_state.cross-stack-reference-input-OriginStack.outputs.cross-stack-output-test_resourceresourcestring_value}"`
    );

    expect(resourceWithFunctionKey).toBeDefined();
    expect(
      resources[resourceWithFunctionKey as string].name
    ).toMatchInlineSnapshot(
      `"\${tostring(data.terraform_remote_state.cross-stack-reference-input-OriginStack.outputs.cross-stack-output-test_resourceresourcestring_value)}"`
    );
  });

  it("makes all outputs sensitive since the input could be", () => {
    new TestResource(testStack, "Resource", {
      name: originStack.resource.stringValue,
    });

    app.synth();
    const { originStackSynth } = getStackSynths(app);

    expect(Object.values(JSON.parse(originStackSynth).output)).toEqual(
      expect.arrayContaining([
        expect.objectContaining({
          sensitive: true,
          value: expect.stringContaining(".string_value"),
        }),
      ])
    );
  });

  it("throws an error when there is a circular stack dependency", () => {
    const anotherStack = new TerraformStack(app, "AnotherStack");
    new RemoteBackend(originStack, {
      organization: "testorg",
      workspaces: {
        name: "testworkspace",
      },
    });
    new RemoteBackend(testStack, {
      organization: "testorg",
      workspaces: {
        name: "testworkspace2",
      },
    });
    new RemoteBackend(anotherStack, {
      organization: "testorg",
      workspaces: {
        name: "testworkspace3",
      },
    });

    // OriginStack => TestStack => AnotherStack => OriginStack
    const resource = new TestResource(testStack, "Resource1", {
      name: originStack.resource.stringValue,
    });

    const resource2 = new TestResource(anotherStack, "Resource2", {
      name: resource.stringValue,
    });

    new TestResource(originStack, "Resource3", {
      name: resource2.stringValue,
    });

    expect(() => app.synth()).toThrowError(
      /Can not add dependency TestStack to AnotherStack since it would result in a loop/
    );
  });

  it("one reference can be used in multiple stacks", () => {
    new RemoteBackend(originStack, {
      organization: "testorg",
      workspaces: {
        name: "testworkspace",
      },
    });

    new TestResource(testStack, "Resource", {
      name: originStack.resource.stringValue,
    });

    const anotherStack = new TerraformStack(app, "AnotherStack");
    new TestProvider(anotherStack, "Provider", {});
    new TestResource(anotherStack, "Resource2", {
      name: originStack.resource.stringValue,
    });

    app.synth();
    const { originStackSynth, targetStackSynth, additionalStackSynth } =
      getStackSynths(app, anotherStack);

    expect(Object.keys(JSON.parse(originStackSynth).output).length).toBe(1);
    expect(targetStackSynth).toHaveDataSource(DataTerraformRemoteStateLocal);
    expect(additionalStackSynth).toHaveDataSource(
      DataTerraformRemoteStateLocal
    );
  });

  it("resolves complex computed list object values with cross stack references", () => {
    const other = new OtherTestResource(originStack, "other", {});
    new TestResource(testStack, "Resource", {
      name: other.complexComputedList.get(42).id,
    });

    app.synth();
    const { originStackSynth, targetStackSynth } = getStackSynths(app);
    expect(Object.keys(JSON.parse(originStackSynth).output).length).toBe(1);
    expect(targetStackSynth).toHaveDataSource(DataTerraformRemoteStateLocal);
    const originOutput = Object.values(
      JSON.parse(originStackSynth).output as { value: string }[]
    )[0].value;
    const originOutputName = Object.keys(
      JSON.parse(originStackSynth).output as { value: string }[]
    )[0];
    expect(originOutput).toContain(".complex_computed_list[42].id");
    expect(targetStackSynth).toHaveResourceWithProperties(TestResource, {
      name:
        expect.stringContaining(originOutputName) &&
        expect.stringContaining("data.terraform_remote_state"),
    });
  });

  it("resolves complex computed list values as fqn with cross stack references", () => {
    const other = new OtherTestResource(originStack, "other", {});
    new TerraformOutput(testStack, "fqn", {
      value: other.complexComputedList.get(42),
    });

    app.synth();
    const { originStackSynth, targetStackSynth } = getStackSynths(app);

    expect(Object.keys(JSON.parse(originStackSynth).output).length).toBe(1);
    const originOutput = Object.values(
      JSON.parse(originStackSynth).output as { value: string }[]
    )[0].value;
    expect(originOutput).toMatchInlineSnapshot(
      `"\${other_test_resource.other.complex_computed_list[42]}"`
    );
    expect(Object.keys(JSON.parse(targetStackSynth).output).length).toBe(1);
    const targetOutput = Object.values(
      JSON.parse(targetStackSynth).output as { value: string }[]
    )[0].value;
    expect(targetOutput).toMatchInlineSnapshot(
      `"\${data.terraform_remote_state.cross-stack-reference-input-OriginStack.outputs.cross-stack-output-other_test_resourceothercomplex_computed_list42}"`
    );
  });

  it("resolves complex computed lists as fqn with cross stack references", () => {
    const other = new OtherTestResource(originStack, "other", {});
    new TerraformOutput(testStack, "fqn", {
      value: other.complexComputedList,
    });

    app.synth();
    const { originStackSynth, targetStackSynth } = getStackSynths(app);

    expect(Object.keys(JSON.parse(originStackSynth).output).length).toBe(1);
    const originOutput = Object.values(
      JSON.parse(originStackSynth).output as { value: string }[]
    )[0].value;
    expect(originOutput).toMatchInlineSnapshot(
      `"\${other_test_resource.other.complex_computed_list}"`
    );
    expect(Object.keys(JSON.parse(targetStackSynth).output).length).toBe(1);
    const targetOutput = Object.values(
      JSON.parse(targetStackSynth).output as { value: string }[]
    )[0].value;
    expect(targetOutput).toMatchInlineSnapshot(
      `"\${data.terraform_remote_state.cross-stack-reference-input-OriginStack.outputs.cross-stack-output-other_test_resourceothercomplex_computed_list}"`
    );
  });

  it("resolves output reference as fqn with cross stack references", () => {
    const other = new OtherTestResource(originStack, "other", {});
    new TerraformOutput(testStack, "fqn", {
      value: other.outputRef.value,
    });

    app.synth();
    const { originStackSynth, targetStackSynth } = getStackSynths(app);

    expect(Object.keys(JSON.parse(originStackSynth).output).length).toBe(1);
    const originOutput = Object.values(
      JSON.parse(originStackSynth).output as { value: string }[]
    )[0].value;
    expect(originOutput).toMatchInlineSnapshot(
      `"\${other_test_resource.other.outputRef[0].value}"`
    );
    expect(Object.keys(JSON.parse(targetStackSynth).output).length).toBe(1);
    const targetOutput = Object.values(
      JSON.parse(targetStackSynth).output as { value: string }[]
    )[0].value;
    expect(targetOutput).toMatchInlineSnapshot(
      `"\${data.terraform_remote_state.cross-stack-reference-input-OriginStack.outputs.cross-stack-output-other_test_resourceotheroutputRef0value}"`
    );
  });

  it("resolves resource as fqn with cross stack referencess", () => {
    const other = new OtherTestResource(originStack, "other", {});
    new TerraformOutput(testStack, "fqn", {
      value: other,
    });

    app.synth();
    const { originStackSynth, targetStackSynth } = getStackSynths(app);

    expect(Object.keys(JSON.parse(originStackSynth).output).length).toBe(1);
    const originOutput = Object.values(
      JSON.parse(originStackSynth).output as { value: string }[]
    )[0].value;
    expect(originOutput).toMatchInlineSnapshot(
      `"\${other_test_resource.other}"`
    );
    expect(Object.keys(JSON.parse(targetStackSynth).output).length).toBe(1);
    const targetOutput = Object.values(
      JSON.parse(targetStackSynth).output as { value: string }[]
    )[0].value;
    expect(targetOutput).toMatchInlineSnapshot(
      `"\${data.terraform_remote_state.cross-stack-reference-input-OriginStack.outputs.cross-stack-output-other_test_resourceother}"`
    );
  });
});
