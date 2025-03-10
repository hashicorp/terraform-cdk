// Copyright (c) HashiCorp, Inc
// SPDX-License-Identifier: MPL-2.0
import { Testing, TerraformStack, TerraformModule, App } from "../lib";
import { TestProvider } from "./helper";

function getApp(): App {
  return Testing.app({
    fakeCdktfJsonPath: true,
    context: { cdktfStaticModuleAssetHash: "hash" },
  });
}

test("only-config, no constructs", () => {
  const app = getApp();
  const stack = new TerraformStack(app, "test");

  class MyModule extends TerraformModule {
    public foo: boolean = false;
    constructor(
      scope: TerraformStack,
      name: string,
      opts: { source: string; foo: boolean },
    ) {
      super(scope, name, {
        source: opts.source,
      });

      this.foo = opts.foo;
    }
  }

  new MyModule(stack, "test", {
    source: "./test/fixtures/hcl-module/",
    foo: true,
  });

  expect(Testing.synth(stack)).toMatchSnapshot();
});

test("should throw error with constructs", () => {
  const app = getApp();
  const stack = new TerraformStack(app, "test");

  class MyModule extends TerraformModule {
    public foo: boolean = false;
    constructor(
      scope: TerraformStack,
      name: string,
      opts: { source: string; foo: boolean },
    ) {
      super(scope, name, {
        source: opts.source,
      });

      new TestProvider(this, "provider", {});

      this.foo = opts.foo;
    }
  }

  new MyModule(stack, "test", {
    source: "./test/fixtures/hcl-module/",
    foo: true,
  });

  expect(() => Testing.synth(stack)).toThrowErrorMatchingInlineSnapshot(
    `"Trying to add children to a TerraformModule at 'test/test'. TerraformModules cannot have children, if you want to group resources or constructs in general together please use the Constructs class instead. See https://cdk.tf/constructs for more details."`,
  );
});
