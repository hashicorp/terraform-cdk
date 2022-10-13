// Copyright (c) HashiCorp, Inc
// SPDX-License-Identifier: MPL-2.0
import { Testing, TerraformStack, TerraformHclModule } from "../lib";
import { TestProvider, TestResource } from "./helper";

test("minimal configuration", () => {
  const app = Testing.app({ fakeCdktfJsonPath: true });
  const stack = new TerraformStack(app, "test");

  new TerraformHclModule(stack, "test", {
    source: "./test/fixtures/hcl-module/",
  });
  expect(Testing.synth(stack)).toMatchSnapshot();
});

test("pass variables", () => {
  const app = Testing.app({ fakeCdktfJsonPath: true });
  const stack = new TerraformStack(app, "test");

  new TerraformHclModule(stack, "test", {
    source: "./test/fixtures/hcl-module/",
    variables: {
      param1: "name",
      param2: 1,
      param3: ["id1", "id2"],
    },
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

  new TerraformHclModule(stack, "test", {
    source: "./test/fixtures/hcl-module/",
    providers: [provider],
  });
  expect(Testing.synth(stack)).toMatchSnapshot();
});

test("multiple providers", () => {
  const app = Testing.app({ fakeCdktfJsonPath: true });
  const stack = new TerraformStack(app, "test");

  const provider1 = new TestProvider(stack, "provider1", {
    accessKey: "key",
  });

  const provider2 = new TestProvider(stack, "provider2", {
    accessKey: "key",
    type: "differentType",
  });

  new TerraformHclModule(stack, "test", {
    source: "./test/fixtures/hcl-module/",
    providers: [provider1, provider2],
  });
  expect(Testing.synth(stack)).toMatchSnapshot();
});

test("multiple providers can't have the same module alias", () => {
  const app = Testing.app({ fakeCdktfJsonPath: true });
  const stack = new TerraformStack(app, "test");

  const provider1 = new TestProvider(stack, "provider1", {
    accessKey: "key",
    alias: "provider1",
  });

  const provider2 = new TestProvider(stack, "provider2", {
    accessKey: "key",
    alias: "provider2",
  });

  try {
    new TerraformHclModule(stack, "test", {
      source: "./test/fixtures/hcl-module/",
      providers: [provider1, provider2],
    });
  } catch (e) {
    expect(e.message).toMatch(
      /Error: Multiple providers have the same alias: "test"/
    );
  }
});

test("complex providers", () => {
  const app = Testing.app({ fakeCdktfJsonPath: true });
  const stack = new TerraformStack(app, "test");

  const provider1 = new TestProvider(stack, "provider1", {
    accessKey: "key",
    alias: "provider1",
  });

  const provider2 = new TestProvider(stack, "provider2", {
    accessKey: "key",
    alias: "provider2",
  });

  new TerraformHclModule(stack, "test", {
    source: "./test/fixtures/hcl-module/",
    providers: [
      { provider: provider1, moduleAlias: "src" },
      { provider: provider2, moduleAlias: "dst" },
    ],
    variables: {
      param1: "name",
      param2: 1,
      param3: ["id1", "id2"],
    },
  });
  expect(Testing.synth(stack)).toMatchSnapshot();
});

test("reference module", () => {
  const app = Testing.app({ fakeCdktfJsonPath: true });
  const stack = new TerraformStack(app, "test");
  new TestProvider(stack, "provider", {});

  const module = new TerraformHclModule(stack, "test", {
    source: "./test/fixtures/hcl-module/",
  });

  new TestResource(stack, "resource", {
    name: module.getString("name"),
  });
  expect(Testing.synth(stack)).toMatchSnapshot();
});

test("reference module list", () => {
  const app = Testing.app({ fakeCdktfJsonPath: true });
  const stack = new TerraformStack(app, "test");
  new TestProvider(stack, "provider", {});

  const module = new TerraformHclModule(stack, "test", {
    source: "./test/fixtures/hcl-module/",
  });

  const resource = new TestResource(stack, "resource", {
    name: "test",
  });
  resource.names = module.getList("names");

  expect(Testing.synth(stack)).toMatchSnapshot();
});

test("set variable", () => {
  const app = Testing.app({ fakeCdktfJsonPath: true });
  const stack = new TerraformStack(app, "test");

  const module = new TerraformHclModule(stack, "test", {
    source: "./test/fixtures/hcl-module/",
  });

  module.set("param1", "value1");
  expect(Testing.synth(stack)).toMatchSnapshot();
});

test("add provider", () => {
  const app = Testing.app({ fakeCdktfJsonPath: true });
  const stack = new TerraformStack(app, "test");

  const module = new TerraformHclModule(stack, "test", {
    source: "./test/fixtures/hcl-module/",
  });

  const provider = new TestProvider(stack, "provider", {
    accessKey: "key",
    alias: "provider1",
  });
  module.addProvider(provider);
  expect(Testing.synth(stack)).toMatchSnapshot();
});

test("depend on module", () => {
  const app = Testing.app({ fakeCdktfJsonPath: true });
  const stack = new TerraformStack(app, "test");
  new TestProvider(stack, "provider", {});

  const module = new TerraformHclModule(stack, "test", {
    source: "./test/fixtures/hcl-module/",
  });

  new TestResource(stack, "resource", {
    name: "foo",
    dependsOn: [module],
  });
  expect(Testing.synth(stack)).toMatchSnapshot();
});

test("depend on other module", () => {
  const app = Testing.app({ fakeCdktfJsonPath: true });
  const stack = new TerraformStack(app, "test");

  const module1 = new TerraformHclModule(stack, "test_1", {
    source: "./test/fixtures/hcl-module/",
  });

  new TerraformHclModule(stack, "test_2", {
    source: "./test/fixtures/hcl-module/",
    dependsOn: [module1],
  });

  expect(Testing.synth(stack)).toMatchSnapshot();
});
