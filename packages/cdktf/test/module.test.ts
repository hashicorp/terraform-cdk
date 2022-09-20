// Copyright (c) HashiCorp, Inc
// SPDX-License-Identifier: MPL-2.0
import { Testing, TerraformStack, TerraformHclModule } from "../lib";
import { TestModule, TestProvider } from "./helper";

test("minimal configuration", () => {
  const app = Testing.app({ fakeCdktfJsonPath: true });
  const stack = new TerraformStack(app, "test");

  new TestModule(stack, "test", {
    moduleParameter: "myParam",
  });
  expect(Testing.synth(stack)).toMatchSnapshot();
});

test("simple provider", () => {
  const app = Testing.app({ fakeCdktfJsonPath: true });
  const stack = new TerraformStack(app, "test");

  const provider = new TestProvider(stack, "provider", {
    accessKey: "key",
    alias: "provider1",
  });

  new TestModule(stack, "test", {
    moduleParameter: "myParam",
    providers: [provider],
  });
  expect(Testing.synth(stack)).toMatchSnapshot();
});

test("depends on", () => {
  const app = Testing.app({ fakeCdktfJsonPath: true });
  const stack = new TerraformStack(app, "test");

  const module1 = new TerraformHclModule(stack, "test_1", {
    source: "./test/fixtures/hcl-module/",
  });

  new TestModule(stack, "test_2", {
    moduleParameter: "myParam",
    dependsOn: [module1],
  });

  expect(Testing.synth(stack)).toMatchSnapshot();
});
