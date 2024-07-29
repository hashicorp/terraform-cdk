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
  CloudBackend,
  NamedCloudWorkspace,
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

  const hcl = Testing.synthHcl(stack);
  expect(hcl).toMatchInlineSnapshot(`
    "

    locals {
        greeting = "Hello, \${var.name}"
    }"
  `);
});

test("multiple locals", async () => {
  const app = Testing.app();
  const stack = new TerraformStack(app, "test");

  new TerraformLocal(stack, "greeting", "Hello, ${var.name}");
  new TerraformLocal(stack, "greeting-2", "Hello, ${var.name}");

  const hcl = Testing.synthHcl(stack);
  expect(hcl).toMatchInlineSnapshot(`
    "

    locals {
        greeting = "Hello, \${var.name}"
    greeting-2 = "Hello, \${var.name}"
    }"
  `);
});

test("string local with quoted name", async () => {
  const app = Testing.app();
  const stack = new TerraformStack(app, "test");

  new TerraformLocal(stack, "greeting", {
    "hip : ho": "Hello, ${var.name}",
  });

  const hcl = Testing.synthHcl(stack);
  expect(hcl).toMatchInlineSnapshot(`
    "

    locals {
        greeting = {
    "hip : ho" = "Hello, \${var.name}"
    }
    }"
  `);
});

test("empty string", async () => {
  const app = Testing.app();
  const stack = new TerraformStack(app, "test");

  new TerraformLocal(stack, "greeting", {
    a: "",
  });

  new TestResource(stack, "test", {
    name: "",
  });

  const hcl = Testing.synthHcl(stack);
  expect(hcl).toMatchInlineSnapshot(`
    "

    locals {
        greeting = {
    a = ""
    }
    }
    resource "test_resource" "test" {
    name = ""
    }"
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

  const hcl = Testing.synthHcl(stack);
  expect(hcl).toMatchInlineSnapshot(`
    "terraform {
    required_providers {
      test = {
    version = "~> 2.0"
    }
    }


    }

    provider "test" {
    access_key = 1
    }

    provider "test" {
    access_key = 123
    alias = "foo"
    }
    resource "test_resource" "test" {
    name = "bar"
    provider = "test.foo"
    }"
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

  const hcl = Testing.synthHcl(stack);
  expect(hcl).toMatchInlineSnapshot(`
    "terraform {
    required_providers {
      test = {
    version = "~> 2.0"
    }
    }


    }

    provider "test" {
    access_key = 1
    }

    provider "test" {
    access_key = 123
    alias = "foo"
    }
    resource "test_resource" "test" {
    name = "bar"
    provider = "test.foo"
    }"
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

  expect(Testing.synthHcl(stack)).toMatchInlineSnapshot(`
    "terraform {
    required_providers {
      test = {
    version = "~> 2.0"
    }
      other = {
    version = "~> 2.0"
    }
    }


    }

    provider "test" {
    }

    provider "other" {
    }
    resource "test_resource" "test" {
    name = "bar"
    names = "\${other_test_resource.othertest.names}"
    }
    resource "test_resource" "test2" {
    name = "foo"
    }
    resource "other_test_resource" "othertest" {
    }"
  `);
});

describe("output", () => {
  test("number output", async () => {
    const app = Testing.app();
    const stack = new TerraformStack(app, "test");

    new TerraformOutput(stack, "test-output", {
      value: 1,
    });
    expect(Testing.synthHcl(stack)).toMatchInlineSnapshot(`
      "

      output "test-output" {
      value = 1
      }"
    `);
  });

  test("string output", async () => {
    const app = Testing.app();
    const stack = new TerraformStack(app, "test");

    new TerraformOutput(stack, "test-output", {
      value: "1",
    });
    expect(Testing.synthHcl(stack)).toMatchInlineSnapshot(`
      "

      output "test-output" {
      value = 1
      }"
    `);
  });

  test("boolean output", async () => {
    const app = Testing.app();
    const stack = new TerraformStack(app, "test");

    new TerraformOutput(stack, "test-output", {
      value: true,
    });
    expect(Testing.synthHcl(stack)).toMatchInlineSnapshot(`
      "

      output "test-output" {
      value = true
      }"
    `);
  });

  test("map output", async () => {
    const app = Testing.app();
    const stack = new TerraformStack(app, "test");

    new TerraformOutput(stack, "test-output", {
      value: { foo: "bar" },
    });
    expect(Testing.synthHcl(stack)).toMatchInlineSnapshot(`
      "

      output "test-output" {
      value = {
      foo = "bar"
      }
      }"
    `);
  });

  test("list output", async () => {
    const app = Testing.app();
    const stack = new TerraformStack(app, "test");

    new TerraformOutput(stack, "test-output", {
      value: ["foo", "bar"],
    });
    expect(Testing.synthHcl(stack)).toMatchInlineSnapshot(`
      "

      output "test-output" {
      value = [
      "foo",
      "bar",
      ]
      }"
    `);
  });

  test("description output", async () => {
    const app = Testing.app();
    const stack = new TerraformStack(app, "test");

    new TerraformOutput(stack, "test-output", {
      value: 1,
      description: "test-description",
    });
    expect(Testing.synthHcl(stack)).toMatchInlineSnapshot(`
      "

      output "test-output" {
      value = 1
      description = "test-description"
      }"
    `);
  });

  test("sensitive output", async () => {
    const app = Testing.app();
    const stack = new TerraformStack(app, "test");

    new TerraformOutput(stack, "test-output", {
      value: 1,
      sensitive: true,
    });
    expect(Testing.synthHcl(stack)).toMatchInlineSnapshot(`
      "

      output "test-output" {
      value = 1
      sensitive = true
      }"
    `);
  });

  test("map keys with invalid identifier chars", async () => {
    const app = Testing.app();
    const stack = new TerraformStack(app, "test");

    new TestProvider(stack, "provider", {});

    new TestResource(stack, "weird-long-running-resource", {
      name: "foo",
      tags: {
        "foo:bar": "baz",
        simple: "true",
      },
    });

    expect(Testing.synthHcl(stack)).toMatchInlineSnapshot(`
      "terraform {
      required_providers {
        test = {
      version = "~> 2.0"
      }
      }


      }

      provider "test" {
      }
      resource "test_resource" "weird-long-running-resource" {
      name = "foo"
      tags = {
      "foo:bar" = "baz"
      simple = "true"
      }
      }"
    `);
  });

  test("deeply nested map ", async () => {
    const app = Testing.app();
    const stack = new TerraformStack(app, "test");

    new TestProvider(stack, "provider", {});

    new TestResource(stack, "probably-kubernetes", {
      name: "foo",
      anyMap: {
        spec: {
          metadata: {
            name: "foo",
            labels: {
              "foo:bar": "baz",
              simple: "true",
            },
          },
        },
      },
    });

    expect(Testing.synthHcl(stack)).toMatchInlineSnapshot(`
      "terraform {
      required_providers {
        test = {
      version = "~> 2.0"
      }
      }


      }

      provider "test" {
      }
      resource "test_resource" "probably-kubernetes" {
      name = "foo"
      any_map = {
      spec = {
      metadata = {
      name = "foo"
      labels = {
      "foo:bar" = "baz"
      simple = "true"
      }
      }
      }
      }
      }"
    `);
  });

  test("map with undefined / null value", async () => {
    const app = Testing.app();
    const stack = new TerraformStack(app, "test");

    new TestProvider(stack, "provider", {});

    new TestResource(stack, "sth-fishy", {
      name: "foo",
      anyMap: {
        notDefined: undefined,
        billionDollarMistake: null,
      },
    });

    expect(Testing.synthHcl(stack)).toMatchInlineSnapshot(`
      "terraform {
      required_providers {
        test = {
      version = "~> 2.0"
      }
      }


      }

      provider "test" {
      }
      resource "test_resource" "sth-fishy" {
      name = "foo"
      any_map = {
      billionDollarMistake = null
      }
      }"
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

    expect(Testing.synthHcl(stack)).toMatchInlineSnapshot(`
      "terraform {
      required_providers {
        test = {
      version = "~> 2.0"
      }
      }


      }

      provider "test" {
      }
      resource "test_resource" "weird-long-running-resource" {
      name = "foo"
      }

      output "test-output" {
      value = 1
      depends_on = [
      "\${test_resource.weird-long-running-resource}"
      ]
      }"
    `);
  });

  test("variable output", async () => {
    const app = Testing.app();
    const stack = new TerraformStack(app, "test");

    const variable = new TerraformVariable(stack, "test-variable", {});

    new TerraformOutput(stack, "test-output", {
      value: variable.value,
    });

    expect(Testing.synthHcl(stack)).toMatchInlineSnapshot(`
      "

      variable "test-variable" {

      }

      output "test-output" {
      value = "\${var.test-variable}"
      }"
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

  expect(Testing.synthHcl(stack)).toMatchInlineSnapshot(`
    "terraform {
    required_providers {
      test = {
    version = "~> 2.0"
    }
    }


    }

    provider "test" {
    access_key = "key"
    alias = "provider1"
    }
    module "test" {
    module_parameter = "myParam"
    source = "my-module"
    version = "1.0"
    providers = {
    test = "test.provider1"
    }
    }"
  `);
});

test("module with empty inputs", async () => {
  const app = Testing.app({ fakeCdktfJsonPath: true });
  const stack = new TerraformStack(app, "test");

  const provider = new TestProvider(stack, "provider", {
    accessKey: "key",
    alias: "provider1",
  });

  new TestModule(stack, "test", {
    moduleParameter: "myParam",
    inputs: {
      false_boolean: false,
      true_boolean: true,
      zero_number: 0,
      empty_string: "",
    },
    providers: [provider],
  });

  expect(Testing.synthHcl(stack)).toMatchInlineSnapshot(`
    "terraform {
    required_providers {
      test = {
    version = "~> 2.0"
    }
    }


    }

    provider "test" {
    access_key = "key"
    alias = "provider1"
    }
    module "test" {
    false_boolean = false
    true_boolean = true
    zero_number = 0
    empty_string = ""
    module_parameter = "myParam"
    source = "my-module"
    version = "1.0"
    providers = {
    test = "test.provider1"
    }
    }"
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

    expect(Testing.synthHcl(stack)).toMatchInlineSnapshot(`
      "
      data "terraform_remote_state" "remote" {
      backend = "local"
      config = {
      path = "relative/path/to/terraform.tfstate"
      workspace_dir = "local_workspace"
      }
      }"
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

    expect(Testing.synthHcl(stack)).toMatchInlineSnapshot(`
      "
      data "terraform_remote_state" "remote" {
      backend = "remote"
      config = {
      hostname = "app.terraform.io"
      organization = "company"
      workspaces = {
      name = "my-app-prod"
      }
      }
      }"
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

    expect(Testing.synthHcl(stack)).toMatchInlineSnapshot(`
      "
      data "terraform_remote_state" "remote" {
      backend = "azurerm"
      config = {
      resource_group_name = "StorageAccount-ResourceGroup"
      storage_account_name = "abcd1234"
      container_name = "tfstate"
      key = "prod.terraform.tfstate"
      client_id = "ARM_CLIENT_ID"
      client_secret = "ARM_CLIENT_SECRET"
      endpoint = "ARM_ENDPOINT"
      environment = "public"
      }
      }"
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

    expect(Testing.synthHcl(stack)).toMatchInlineSnapshot(`
      "
      data "terraform_remote_state" "remote" {
      backend = "consul"
      config = {
      address = "demo.consul.io"
      scheme = "https"
      path = "full/path"
      access_token = "CONSUL_HTTP_TOKEN"
      ca_file = "CONSUL_CACERT"
      cert_file = "CONSUL_CLIENT_CERT"
      datacenter = "agent"
      gzip = true
      http_auth = "CONSUL_HTTP_AUTH"
      key_file = "CONSUL_CLIENT_KEY"
      lock = true
      }
      }"
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

  expect(Testing.synthHcl(stack)).toMatchInlineSnapshot(`
    "terraform {
    required_providers {
      test = {
    version = "~> 2.0"
    }
      other = {
    version = "~> 2.0"
    }
    }


    }

    provider "test" {
    }

    provider "other" {
    }
    resource "other_test_resource" "othertest" {
    }
    resource "test_resource" "test" {
    name = "\${other_test_resource.othertest.complex_computed_list[0].id}"
    }"
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

  expect(Testing.synthHcl(stack)).toMatchInlineSnapshot(`
    "terraform {
    required_providers {
      test = {
    version = "~> 2.0"
    }
    }


    }

    provider "test" {
    }
    resource "test_resource" "construct_nested-construct_simple_2C3755B0" {
    name = "foo"
    provisioner "local-exec" {
    command = "echo 'hello' > world.txt"
    }

    provisioner "local-exec" {
    command = "echo 'hello' > world1.txt"
    }

    provisioner "local-exec" {
    command = "echo 'hello' > world2.txt"
    }
    }
    resource "test_resource" "construct_nested-construct_simple-2_078CE0AF" {
    name = "foo"
    provisioner "local-exec" {
    command = "echo 'hello' > world.txt"
    }

    provisioner "local-exec" {
    command = "echo 'hello' > world1.txt"
    }

    provisioner "local-exec" {
    command = "echo 'hello' > world2.txt"
    }
    }

    moved {
    to = test_resource.construct_nested-construct_simple_2C3755B0
    from = test_resource.simple
    }

    moved {
    to = test_resource.construct_nested-construct_simple-2_078CE0AF
    from = test_resource.simple-2
    }"
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
  expect(Testing.synthHcl(stack)).toMatchInlineSnapshot(`
    "terraform {
    required_providers {
      test = {
    version = "~> 2.0"
    }
    }


    }

    provider "test" {
    }
    resource "test_resource" "simple" {
    name = "foo"
    provisioner "local-exec" {
    command = "echo 'hello' > world.txt"
    }
    }
    resource "test_resource" "advanced" {
    name = "foo"
    provisioner "local-exec" {
    command = "echo \\"hello $person\\" > greeting.txt"
    working_dir = "/tmp"
    environment = {
    person = "daniel"
    }
    interpreter = [
    "/bin/bash",
    "-c",
    ]
    }
    }"
  `);
});

test("pass variables", () => {
  const app = Testing.app({
    fakeCdktfJsonPath: true,
    context: { cdktfStaticModuleAssetHash: "hash" },
  });
  const stack = new TerraformStack(app, "test");

  new TerraformHclModule(stack, "test", {
    source: "./test/fixtures/hcl-module/",
    variables: {
      param1: "name",
      param2: 1,
      param3: ["id1", "id2"],
    },
  });
  expect(Testing.synthHcl(stack)).toMatchInlineSnapshot(`
    "
    module "test" {
    param1 = "name"
    param2 = 1
    param3 = [
    "id1",
    "id2",
    ]
    source = "./assets/__cdktf_module_asset_26CE565C/hash/test/fixtures/hcl-module"
    }"
  `);
});

test("simple provider", () => {
  const app = Testing.app({
    fakeCdktfJsonPath: true,
    context: { cdktfStaticModuleAssetHash: "hash" },
  });
  const stack = new TerraformStack(app, "test");

  const provider = new TestProvider(stack, "provider", {
    accessKey: "key",
    alias: "provider1",
  });

  new TerraformHclModule(stack, "test", {
    source: "./test/fixtures/hcl-module/",
    providers: [provider],
  });
  expect(Testing.synthHcl(stack)).toMatchInlineSnapshot(`
    "terraform {
    required_providers {
      test = {
    version = "~> 2.0"
    }
    }


    }

    provider "test" {
    access_key = "key"
    alias = "provider1"
    }
    module "test" {
    source = "./assets/__cdktf_module_asset_26CE565C/hash/test/fixtures/hcl-module"
    providers = {
    test = "test.provider1"
    }
    }"
  `);
});

test("multiple providers", () => {
  const app = Testing.app({
    fakeCdktfJsonPath: true,
    context: { cdktfStaticModuleAssetHash: "hash" },
  });
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
  expect(Testing.synthHcl(stack)).toMatchInlineSnapshot(`
    "terraform {
    required_providers {
      test = {
    version = "~> 2.0"
    }
      differentType = {
    version = "~> 2.0"
    }
    }


    }

    provider "test" {
    access_key = "key"
    }

    provider "differentType" {
    access_key = "key"
    }
    module "test" {
    source = "./assets/__cdktf_module_asset_26CE565C/hash/test/fixtures/hcl-module"
    providers = {
    test = "test"
    differentType = "differentType"
    }
    }"
  `);
});

test("string type", () => {
  const app = Testing.app();
  const stack = new TerraformStack(app, "test");

  new TerraformVariable(stack, "test-variable", {
    type: "string",
  });
  expect(Testing.synthHcl(stack)).toMatchInlineSnapshot(`
    "

    variable "test-variable" {
    type = string
    }"
  `);
});

test("number type", () => {
  const app = Testing.app();
  const stack = new TerraformStack(app, "test");

  new TerraformVariable(stack, "test-variable", {
    type: "number",
  });
  expect(Testing.synthHcl(stack)).toMatchInlineSnapshot(`
    "

    variable "test-variable" {
    type = number
    }"
  `);
});

test("bool type", () => {
  const app = Testing.app();
  const stack = new TerraformStack(app, "test");

  new TerraformVariable(stack, "test-variable", {
    type: "bool",
  });
  expect(Testing.synthHcl(stack)).toMatchInlineSnapshot(`
    "

    variable "test-variable" {
    type = bool
    }"
  `);
});

test("any type", () => {
  const app = Testing.app();
  const stack = new TerraformStack(app, "test");

  new TerraformVariable(stack, "test-variable", {
    type: VariableType.ANY,
  });
  expect(Testing.synthHcl(stack)).toMatchInlineSnapshot(`
    "

    variable "test-variable" {
    type = any
    }"
  `);
});

test("default value", () => {
  const app = Testing.app();
  const stack = new TerraformStack(app, "test");

  new TerraformVariable(stack, "test-variable", {
    default: "my-val",
  });
  expect(Testing.synthHcl(stack)).toMatchInlineSnapshot(`
    "

    variable "test-variable" {
    default = "my-val"
    }"
  `);
});

test("description", () => {
  const app = Testing.app();
  const stack = new TerraformStack(app, "test");

  new TerraformVariable(stack, "test-variable", {
    description: "A Test Variable",
  });

  expect(Testing.synthHcl(stack)).toMatchInlineSnapshot(`
    "

    variable "test-variable" {
    description = "A Test Variable"
    }"
  `);
});

test("collection type", () => {
  const app = Testing.app();
  const stack = new TerraformStack(app, "test");

  new TerraformVariable(stack, "test-variable", {
    type: "list(string)",
  });
  expect(Testing.synthHcl(stack)).toMatchInlineSnapshot(`
    "

    variable "test-variable" {
    type = list(string)
    }"
  `);
});

test("metadata output", () => {
  const app = Testing.app();

  const stack = new TerraformStack(app, "test");

  new CloudBackend(stack, {
    organization: "foo",
    workspaces: new NamedCloudWorkspace("bar"),
    token: "baz",
  });

  expect(Testing.synthHcl(stack, false, true)).toMatchInlineSnapshot(`
    {
      "//": {
        "metadata": {
          "backend": "cloud",
          "cloud": "tfc",
          "stackName": "test",
          "version": "stubbed",
        },
        "outputs": {},
      },
      "terraform": {
        "cloud": {
          "organization": "foo",
          "token": "baz",
          "workspaces": {
            "name": "bar",
          },
        },
      },
    }
  `);
});

test("import block", () => {
  const app = Testing.app();
  const stack = new TerraformStack(app, "test");

  new TestProvider(stack, "provider1", {
    accessKey: "key",
  });

  new TestResource(stack, "test", {} as any).importFrom("foo");

  expect(Testing.synthHcl(stack)).toMatchInlineSnapshot(`
    "terraform {
    required_providers {
      test = {
    version = "~> 2.0"
    }
    }


    }

    provider "test" {
    access_key = "key"
    }
    resource "test_resource" "test" {
    }

    import {
    to = test_resource.test
    id = "foo"
    }"
  `);
});
