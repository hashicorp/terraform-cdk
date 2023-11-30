// Copyright (c) HashiCorp, Inc
// SPDX-License-Identifier: MPL-2.0
import {
  Testing,
  TerraformStack,
  TerraformLocal,
  TerraformOutput,
  TerraformVariable,
  TerraformHclModule,
  VariableType,
} from "../lib";
import {
  OtherTestResource,
  TestModule,
  TestProvider,
  TestResource,
} from "./helper";
import * as b from "../lib/backends";
import { Construct } from "constructs";

test("string local", async () => {
  const app = Testing.app();
  const stack = new TerraformStack(app, "test");

  new TerraformLocal(stack, "greeting", "Hello, ${var.name}");

  const hcl = await Testing.synthHcl(stack);
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

  const hcl = await Testing.synthHcl(stack);
  expect(hcl).toMatchInlineSnapshot(`
    "provider "test" {
      access_key = 1
    }

    provider "test" {
      access_key = 123
      alias      = "foo"
    }

    resource "test_resource" "test" {
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

  const hcl = await Testing.synthHcl(stack);
  expect(hcl).toMatchInlineSnapshot(`
    "provider "test" {
      access_key = 1
    }

    provider "test" {
      access_key = 123
      alias      = "foo"
    }

    resource "test_resource" "test" {
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

  expect(await Testing.synthHcl(stack)).toMatchInlineSnapshot(`
    "provider "other" {
    }

    provider "test" {
    }

    resource "other_test_resource" "othertest" {
    }

    resource "test_resource" "test" {
      name  = "bar"
      names = "\${other_test_resource.othertest.names}"
    }

    resource "test_resource" "test2" {
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
    expect(await Testing.synthHcl(stack)).toMatchInlineSnapshot(`
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
    expect(await Testing.synthHcl(stack)).toMatchInlineSnapshot(`
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
    expect(await Testing.synthHcl(stack)).toMatchInlineSnapshot(`
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
    expect(await Testing.synthHcl(stack)).toMatchInlineSnapshot(`
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
    expect(await Testing.synthHcl(stack)).toMatchInlineSnapshot(`
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
    expect(await Testing.synthHcl(stack)).toMatchInlineSnapshot(`
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
    expect(await Testing.synthHcl(stack)).toMatchInlineSnapshot(`
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

    expect(await Testing.synthHcl(stack)).toMatchInlineSnapshot(`
      "provider "test" {
      }

      resource "test_resource" "weird-long-running-resource" {
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

    expect(await Testing.synthHcl(stack)).toMatchInlineSnapshot(`
      "variable "test-variable" {
      }

      output "test-output" {
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

  expect(await Testing.synthHcl(stack)).toMatchInlineSnapshot(`
    "provider "test" {
      access_key = "key"
      alias      = "provider1"
    }

    terraform {
      required_providers = {
        test = {
          version = "~> 2.0"
        }
      }
    }

    module "test" {
      module_parameter = "myParam"
      providers = {
        test = "test.provider1"
      }
      source  = "my-module"
      version = "1.0"
    }

    "
  `);
});

describe("backends", () => {
  test("local", async () => {
    const app = Testing.app();
    const stack = new TerraformStack(app, "test");

    new b.DataTerraformRemoteStateLocal(stack, "remote", {
      path: "relative/path/to/terraform.tfstate",
      workspaceDir: "local_workspace",
    });

    expect(await Testing.synthHcl(stack)).toMatchInlineSnapshot(`
      "data "terraform_remote_state" "remote" {
        backend = "local"
        config = {
          path          = "relative/path/to/terraform.tfstate"
          workspace_dir = "local_workspace"
        }
      }

      "
    `);
  });

  test("remote", async () => {
    const app = Testing.app();
    const stack = new TerraformStack(app, "test");

    new b.DataTerraformRemoteState(stack, "remote", {
      hostname: "app.terraform.io",
      organization: "company",

      workspaces: {
        name: "my-app-prod",
      },
    });

    expect(await Testing.synthHcl(stack)).toMatchInlineSnapshot(`
      "data "terraform_remote_state" "remote" {
        backend = "remote"
        config = {
          hostname     = "app.terraform.io"
          organization = "company"
          workspaces = {
            name = "my-app-prod"
          }
        }
      }

      "
    `);
  });

  test("azurerm", async () => {
    const app = Testing.app();
    const stack = new TerraformStack(app, "test");

    new b.DataTerraformRemoteStateAzurerm(stack, "remote", {
      resourceGroupName: "StorageAccount-ResourceGroup",
      storageAccountName: "abcd1234",
      containerName: "tfstate",
      key: "prod.terraform.tfstate",
      clientId: "ARM_CLIENT_ID",
      clientSecret: "ARM_CLIENT_SECRET",
      endpoint: "ARM_ENDPOINT",
      environment: "public",
    });

    expect(await Testing.synthHcl(stack)).toMatchInlineSnapshot(`
      "data "terraform_remote_state" "remote" {
        backend = "azurerm"
        config = {
          client_id            = "ARM_CLIENT_ID"
          client_secret        = "ARM_CLIENT_SECRET"
          container_name       = "tfstate"
          endpoint             = "ARM_ENDPOINT"
          environment          = "public"
          key                  = "prod.terraform.tfstate"
          resource_group_name  = "StorageAccount-ResourceGroup"
          storage_account_name = "abcd1234"
        }
      }

      "
    `);
  });

  test("consul", async () => {
    const app = Testing.app();
    const stack = new TerraformStack(app, "test");

    new b.DataTerraformRemoteStateConsul(stack, "remote", {
      address: "demo.consul.io",
      scheme: "https",
      path: "full/path",
      accessToken: "CONSUL_HTTP_TOKEN",
      caFile: "CONSUL_CACERT",
      certFile: "CONSUL_CLIENT_CERT",
      datacenter: "agent",
      gzip: true,
      httpAuth: "CONSUL_HTTP_AUTH",
      keyFile: "CONSUL_CLIENT_KEY",
      lock: true,
    });

    expect(await Testing.synthHcl(stack)).toMatchInlineSnapshot(`
      "data "terraform_remote_state" "remote" {
        backend = "consul"
        config = {
          access_token = "CONSUL_HTTP_TOKEN"
          address      = "demo.consul.io"
          ca_file      = "CONSUL_CACERT"
          cert_file    = "CONSUL_CLIENT_CERT"
          datacenter   = "agent"
          gzip         = "true"
          http_auth    = "CONSUL_HTTP_AUTH"
          key_file     = "CONSUL_CLIENT_KEY"
          lock         = "true"
          path         = "full/path"
          scheme       = "https"
        }
      }

      "
    `);
  });
});

test("with complex computed list", async () => {
  const app = Testing.app();
  const stack = new TerraformStack(app, "tests");
  new TestProvider(stack, "provider", {});
  new TestProvider(stack, "other_provider", {
    type: "other",
  });

  const otherResource = new OtherTestResource(stack, "othertest", {});

  new TestResource(stack, "test", {
    name: otherResource.complexComputedList.get(0).id,
  });

  expect(await Testing.synthHcl(stack)).toMatchInlineSnapshot(`
    "provider "other" {
    }

    provider "test" {
    }

    resource "other_test_resource" "othertest" {
    }

    resource "test_resource" "test" {
      name = "\${other_test_resource.othertest.complex_computed_list[0].id}"
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

it("moves multiple resources", async () => {
  const app = Testing.app();
  const stack = new TerraformStack(app, "test");
  new TestProvider(stack, "provider", {});

  const construct = new Construct(stack, "construct");
  const nestedContruct = new Construct(construct, "nested-construct");

  new TestResource(nestedContruct, "simple", {
    name: "foo",
    provisioners: [
      { type: "local-exec", command: "echo 'hello' > world.txt" },
      { type: "local-exec", command: "echo 'hello' > world1.txt" },
      { type: "local-exec", command: "echo 'hello' > world2.txt" },
    ],
  }).addMoveTarget("test-1");

  new TestResource(nestedContruct, "simple-2", {
    name: "foo",
    provisioners: [
      { type: "local-exec", command: "echo 'hello' > world.txt" },
      { type: "local-exec", command: "echo 'hello' > world1.txt" },
      { type: "local-exec", command: "echo 'hello' > world2.txt" },
    ],
  }).addMoveTarget("test-2");

  new TestResource(stack, "simple", {
    name: "foo",
    provisioners: [
      { type: "local-exec", command: "echo 'hello' > world.txt" },
      { type: "local-exec", command: "echo 'hello' > world1.txt" },
      { type: "local-exec", command: "echo 'hello' > world2.txt" },
    ],
  }).moveTo("test-1");

  new TestResource(stack, "simple-2", {
    name: "foo",
    provisioners: [
      { type: "local-exec", command: "echo 'hello' > world.txt" },
      { type: "local-exec", command: "echo 'hello' > world1.txt" },
      { type: "local-exec", command: "echo 'hello' > world2.txt" },
    ],
  }).moveTo("test-2");

  expect(Testing.synthHcl(stack)).resolves.toMatchInlineSnapshot(`
    "provider "test" {
    }

    resource "test_resource" "construct_nested-construct_simple_2C3755B0" {
      name = "foo"
      provisioner = [
        {
          local-exec = {
            command = "echo 'hello' > world.txt"
          }
        }
        {
          local-exec = {
            command = "echo 'hello' > world1.txt"
          }
        }
        {
          local-exec = {
            command = "echo 'hello' > world2.txt"
          }
        }
      ]
    }

    resource "test_resource" "construct_nested-construct_simple-2_078CE0AF" {
      name = "foo"
      provisioner = [
        {
          local-exec = {
            command = "echo 'hello' > world.txt"
          }
        }
        {
          local-exec = {
            command = "echo 'hello' > world1.txt"
          }
        }
        {
          local-exec = {
            command = "echo 'hello' > world2.txt"
          }
        }
      ]
    }

    terraform {
      required_providers = {
        test = {
          version = "~> 2.0"
        }
      }
    }

    moved {
      from = "test_resource.simple"
      to   = "test_resource.construct_nested-construct_simple_2C3755B0"
    }

    moved {
      from = "test_resource.simple-2"
      to   = "test_resource.construct_nested-construct_simple-2_078CE0AF"
    }

    "
  `);
});

it("supports local-exec provisioner", () => {
  const app = Testing.app();
  const stack = new TerraformStack(app, "test");
  new TestProvider(stack, "provider", {});

  new TestResource(stack, "simple", {
    name: "foo",
    provisioners: [{ type: "local-exec", command: "echo 'hello' > world.txt" }],
  });

  new TestResource(stack, "advanced", {
    name: "foo",
    provisioners: [
      {
        type: "local-exec",
        command: 'echo "hello $person" > greeting.txt',
        workingDir: "/tmp",
        environment: {
          person: "daniel",
        },
        interpreter: ["/bin/bash", "-c"],
      },
    ],
  });
  expect(Testing.synthHcl(stack)).resolves.toMatchInlineSnapshot(`
    "provider "test" {
    }

    resource "test_resource" "advanced" {
      name = "foo"
      provisioner = [
        {
          local-exec = {
            command = "echo " hello $ person " > greeting.txt"
            environment = {
              person = "daniel"
            }
            interpreter = [
              "/bin/bash"
              "-c"
            ]
            working_dir = "/tmp"
          }
        }
      ]
    }

    resource "test_resource" "simple" {
      name = "foo"
      provisioner = [
        {
          local-exec = {
            command = "echo 'hello' > world.txt"
          }
        }
      ]
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
  expect(Testing.synthHcl(stack)).resolves.toMatchInlineSnapshot(`
    "module "test" {
      param1 = "name"
      param2 = "1"
      param3 = [
        "id1"
        "id2"
      ]
      source = "./assets/local-module-test/EF2B4CE432B6BA0BE6788E2EB57445E5"
    }

    "
  `);
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
  expect(Testing.synthHcl(stack)).resolves.toMatchInlineSnapshot(`
    "provider "test" {
      access_key = "key"
      alias      = "provider1"
    }

    terraform {
      required_providers = {
        test = {
          version = "~> 2.0"
        }
      }
    }

    module "test" {
      providers = {
        test = "test.provider1"
      }
      source = "./assets/local-module-test/EF2B4CE432B6BA0BE6788E2EB57445E5"
    }

    "
  `);
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
  expect(Testing.synthHcl(stack)).resolves.toMatchInlineSnapshot(`
    "provider "differentType" {
      access_key = "key"
    }

    provider "test" {
      access_key = "key"
    }

    terraform {
      required_providers = {
        differentType = {
          version = "~> 2.0"
        }
        test = {
          version = "~> 2.0"
        }
      }
    }

    module "test" {
      providers = {
        differentType = "differentType"
        test          = "test"
      }
      source = "./assets/local-module-test/EF2B4CE432B6BA0BE6788E2EB57445E5"
    }

    "
  `);
});

test("string type", () => {
  const app = Testing.app();
  const stack = new TerraformStack(app, "test");

  new TerraformVariable(stack, "test-variable", {
    type: "string",
  });
  expect(Testing.synthHcl(stack)).resolves.toMatchInlineSnapshot(`
    "variable "test-variable" {
      type = "string"
    }

    "
  `);
});

test("number type", () => {
  const app = Testing.app();
  const stack = new TerraformStack(app, "test");

  new TerraformVariable(stack, "test-variable", {
    type: "number",
  });
  expect(Testing.synthHcl(stack)).resolves.toMatchInlineSnapshot(`
    "variable "test-variable" {
      type = "number"
    }

    "
  `);
});

test("bool type", () => {
  const app = Testing.app();
  const stack = new TerraformStack(app, "test");

  new TerraformVariable(stack, "test-variable", {
    type: "bool",
  });
  expect(Testing.synthHcl(stack)).resolves.toMatchInlineSnapshot(`
    "variable "test-variable" {
      type = "bool"
    }

    "
  `);
});

test("any type", () => {
  const app = Testing.app();
  const stack = new TerraformStack(app, "test");

  new TerraformVariable(stack, "test-variable", {
    type: VariableType.ANY,
  });
  expect(Testing.synthHcl(stack)).resolves.toMatchInlineSnapshot(`
    "variable "test-variable" {
      type = "any"
    }

    "
  `);
});

test("default value", () => {
  const app = Testing.app();
  const stack = new TerraformStack(app, "test");

  new TerraformVariable(stack, "test-variable", {
    default: "my-val",
  });
  expect(Testing.synthHcl(stack)).resolves.toMatchInlineSnapshot(`
    "variable "test-variable" {
      default = "my-val"
    }

    "
  `);
});

test("description", () => {
  const app = Testing.app();
  const stack = new TerraformStack(app, "test");

  new TerraformVariable(stack, "test-variable", {
    description: "A Test Variable",
  });

  console.log(Testing.synth(stack));
  expect(Testing.synthHcl(stack)).resolves.toMatchInlineSnapshot(`
    "variable "test-variable" {
      description = "A Test Variable"
    }

    "
  `);
});

test("collection type", () => {
  const app = Testing.app();
  const stack = new TerraformStack(app, "test");

  new TerraformVariable(stack, "test-variable", {
    type: "list(string)",
  });
  expect(Testing.synthHcl(stack)).resolves.toMatchInlineSnapshot(`
    "variable "test-variable" {
      type = "list(string)"
    }

    "
  `);
});
