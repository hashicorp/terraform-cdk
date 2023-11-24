// Copyright (c) HashiCorp, Inc
// SPDX-License-Identifier: MPL-2.0
import {
  Testing,
  TerraformStack,
  TerraformLocal,
  TerraformOutput,
  TerraformVariable,
} from "../lib";
import {
  OtherTestResource,
  TestModule,
  TestProvider,
  TestResource,
} from "./helper";

test("string local", async () => {
  const app = Testing.app();
  const stack = new TerraformStack(app, "test");

  new TerraformLocal(stack, "greeting", "Hello, ${var.name}");

  const hcl = await Testing.synthHCL(stack);
  expect(hcl).toMatchInlineSnapshot(`
    "locals {
      greeting = "Hello, \${var.name}"
    }

    "
  `);
});

test("with provider alias", async () => {
  const app = Testing.app();
  const stack = new TerraformStack(app, "test");

  new TestProvider(stack, "provider", {
    accessKey: "1",
  });

  const provider = new TestProvider(stack, "aliased-provider", {
    alias: "foo",
    accessKey: "123",
  });

  new TestResource(stack, "test", {
    name: "bar",
    provider,
  });

  const hcl = await Testing.synthHCL(stack);
  expect(hcl).toMatchInlineSnapshot(`
    "provider "test" {
      access_key = 1
    }

    provider "test" {
      access_key = 123
      alias      = "foo"
    }

    resource "test_resource" "bar" {
      name     = "bar"
      provider = "test.foo"
    }

    terraform {
      required_providers = {
        test = {
          version = "~> 2.0"
        }
      }
    }

    "
  `);
});

test("with formatting", async () => {
  const app = Testing.app();
  const stack = new TerraformStack(app, "test");

  new TestProvider(stack, "provider", {
    accessKey: "1",
  });

  const provider = new TestProvider(stack, "aliased-provider", {
    alias: "foo",
    accessKey: "123",
  });

  new TestResource(stack, "test", {
    name: "bar",
    provider,
  });

  const hcl = await Testing.synthHCL(stack);
  expect(hcl).toMatchInlineSnapshot(`
    "provider "test" {
      access_key = 1
    }

    provider "test" {
      access_key = 123
      alias      = "foo"
    }

    resource "test_resource" "bar" {
      name     = "bar"
      provider = "test.foo"
    }

    terraform {
      required_providers = {
        test = {
          version = "~> 2.0"
        }
      }
    }

    "
  `);
});

test("serialize list interpolation", async () => {
  const app = Testing.app();
  const stack = new TerraformStack(app, "tests");
  new TestProvider(stack, "provider", {});
  new TestProvider(stack, "other_provider", {
    type: "other",
  });

  const resource = new TestResource(stack, "test", {
    name: "bar",
  });

  new TestResource(stack, "test2", {
    name: "foo",
  });

  const otherResource = new OtherTestResource(stack, "othertest", {});
  resource.names = otherResource.names;

  expect(await Testing.synthHCL(stack)).toMatchInlineSnapshot(`
    "provider "other" {
    }

    provider "test" {
    }

    resource "other_test_resource" "undefined" {
    }

    resource "test_resource" "bar" {
      name  = "bar"
      names = "\${other_test_resource.othertest.names}"
    }

    resource "test_resource" "foo" {
      name = "foo"
    }

    terraform {
      required_providers = {
        other = {
          version = "~> 2.0"
        }
        test = {
          version = "~> 2.0"
        }
      }
    }

    "
  `);
});

describe("output", () => {
  test("number output", async () => {
    const app = Testing.app();
    const stack = new TerraformStack(app, "test");

    new TerraformOutput(stack, "test-output", {
      value: 1,
    });
    expect(await Testing.synthHCL(stack)).toMatchInlineSnapshot(`
      "output "test-output" {
        value = "1"
      }

      "
    `);
  });

  test("string output", async () => {
    const app = Testing.app();
    const stack = new TerraformStack(app, "test");

    new TerraformOutput(stack, "test-output", {
      value: "1",
    });
    expect(await Testing.synthHCL(stack)).toMatchInlineSnapshot(`
      "output "test-output" {
        value = 1
      }

      "
    `);
  });

  test("boolean output", async () => {
    const app = Testing.app();
    const stack = new TerraformStack(app, "test");

    new TerraformOutput(stack, "test-output", {
      value: true,
    });
    expect(await Testing.synthHCL(stack)).toMatchInlineSnapshot(`
      "output "test-output" {
        value = "true"
      }

      "
    `);
  });

  test("map output", async () => {
    const app = Testing.app();
    const stack = new TerraformStack(app, "test");

    new TerraformOutput(stack, "test-output", {
      value: { foo: "bar" },
    });
    expect(await Testing.synthHCL(stack)).toMatchInlineSnapshot(`
      "output "test-output" {
        value = {
          foo = "bar"
        }
      }

      "
    `);
  });

  test("list output", async () => {
    const app = Testing.app();
    const stack = new TerraformStack(app, "test");

    new TerraformOutput(stack, "test-output", {
      value: ["foo", "bar"],
    });
    expect(await Testing.synthHCL(stack)).toMatchInlineSnapshot(`
      "output "test-output" {
        value = [
          "foo"
          "bar"
        ]
      }

      "
    `);
  });

  test("description output", async () => {
    const app = Testing.app();
    const stack = new TerraformStack(app, "test");

    new TerraformOutput(stack, "test-output", {
      value: 1,
      description: "test-description",
    });
    expect(await Testing.synthHCL(stack)).toMatchInlineSnapshot(`
      "output "test-output" {
        description = "test-description"
        value       = "1"
      }

      "
    `);
  });

  test("sensitive output", async () => {
    const app = Testing.app();
    const stack = new TerraformStack(app, "test");

    new TerraformOutput(stack, "test-output", {
      value: 1,
      sensitive: true,
    });
    expect(await Testing.synthHCL(stack)).toMatchInlineSnapshot(`
      "output "test-output" {
        sensitive = "true"
        value     = "1"
      }

      "
    `);
  });

  test("dependent output", async () => {
    const app = Testing.app();
    const stack = new TerraformStack(app, "test");

    new TestProvider(stack, "provider", {});
    const resource = new TestResource(stack, "weird-long-running-resource", {
      name: "foo",
    });

    new TerraformOutput(stack, "test-output", {
      value: 1,
      dependsOn: [resource],
    });

    expect(await Testing.synthHCL(stack)).toMatchInlineSnapshot(`
      "provider "test" {
      }

      resource "test_resource" "foo" {
        name = "foo"
      }

      terraform {
        required_providers = {
          test = {
            version = "~> 2.0"
          }
        }
      }

      output "test-output" {
        depends_on = [
          "\${test_resource.weird-long-running-resource}"
        ]
        value = "1"
      }

      "
    `);
  });

  test("variable output", async () => {
    const app = Testing.app();
    const stack = new TerraformStack(app, "test");

    const variable = new TerraformVariable(stack, "test-variable", {});

    new TerraformOutput(stack, "test-output", {
      value: variable.value,
    });

    expect(await Testing.synthHCL(stack)).toMatchInlineSnapshot(`
      "output "test-output" {
        value = "\${var.test-variable}"
      }

      "
    `);
  });
});

test("module with simple provider", async () => {
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

  console.log(Testing.synth(stack));

  expect(await Testing.synthHCL(stack)).toMatchInlineSnapshot(`Promise {}`);
});
