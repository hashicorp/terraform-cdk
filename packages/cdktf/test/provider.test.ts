// Copyright (c) HashiCorp, Inc
// SPDX-License-Identifier: MPL-2.0
import { Testing, TerraformStack, TerraformProvider } from "../lib";
import { Construct } from "constructs";
import { TestProvider } from "./helper/provider";
import { TerraformVariable } from "../lib/terraform-variable";

test("minimal configuration", () => {
  const app = Testing.app();
  const stack = new TerraformStack(app, "test");

  new TestProvider(stack, "test", {
    accessKey: "foo",
  });
  expect(Testing.synth(stack)).toMatchSnapshot();
});

test("with alias", () => {
  const app = Testing.app();
  const stack = new TerraformStack(app, "test");

  new TestProvider(stack, "test", {
    accessKey: "foo",
  });

  new TestProvider(stack, "othertest", {
    accessKey: "bar",
    alias: "route53",
  });

  expect(Testing.synth(stack)).toMatchSnapshot();
});

test("with generator metadata", () => {
  class MetadataTestProvider extends TerraformProvider {
    constructor(scope: Construct, id: string) {
      super(scope, id, {
        terraformResourceType: "test",
        terraformGeneratorMetadata: {
          providerName: "test",
          providerVersionConstraint: "~> 2.0",
        },
      });
    }
  }

  const app = Testing.app();
  const stack = new TerraformStack(app, "test");

  new MetadataTestProvider(stack, "test");

  expect(Testing.synth(stack)).toMatchSnapshot();
});

test("token resolution", () => {
  const app = Testing.app();
  const stack = new TerraformStack(app, "test");

  const variable = new TerraformVariable(stack, "access-key", {
    sensitive: true,
    type: "string",
  });

  new TestProvider(stack, "test", {
    accessKey: variable.value,
  });
  expect(Testing.synth(stack)).toMatchSnapshot();
});
