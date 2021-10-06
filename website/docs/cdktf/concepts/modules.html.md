---
layout: "docs"
page_title: "Modules"
sidebar_current: "cdktf"
description: "TODO: describe me"
---

# Modules

[Terraform Modules](https://www.terraform.io/docs/language/modules/index.html) are a single directory that contains one or more configuration files.

Modules let you reuse configurations across projects and teams, saving time, enforcing consistency, and reducing errors. For example, you could create a module to describe the configuration for all of your organization's public website buckets. When you package and share this module, other users can incorporate it into their configurations. As requirements evolve, you can make changes to your module once, release a new version, and apply those changes everywhere that module is used.

CDK for Terraform (CDKTF) lets you specify existing public or private modules in your `cdktf.json` file and then generates the necessary bindings so that you can use the module in your CDKTF application.

## Install Modules

CDKTF lets you use modules from the [Terraform Registry](https://registry.terraform.io/) and other sources like GitHub local, etc. in your application. For example, this TypeScript project has a `main.ts` file that defines AWS resources and uses the [AWS VPC module](https://registry.terraform.io/modules/terraform-aws-modules/vpc/aws/latest):

```typescript
import { Construct } from "constructs";
import { App, TerraformStack } from "cdktf";
import { AwsProvider, Instance } from "@cdktf/provider-aws";
import { Vpc } from '.gen/modules/vpc';

class MyStack extends TerraformStack {
  constructor(scope: Construct, id: string) {
    super(scope, id);

    new AwsProvider(this, "aws", {
      region: "us-east-1",
    });

    new Vpc(this, 'MyVpc', {
      name: 'my-vpc',
      cidr: '10.0.0.0/16',
      azs: ['us-west-2a', 'us-west-2b', 'us-west-2c'],
      privateSubnets: ['10.0.1.0/24', '10.0.2.0/24', '10.0.3.0/24'],
      publicSubnets: ['10.0.101.0/24', '10.0.102.0/24', '10.0.103.0/24'],
      enableNatGateway: true
    )
  }
}

const app = new App();
new MyStack(app, "hello-terraform");
app.synth();
```

### Add Module to `cdktf.json`

To use a new module, first add it to the "terraformModules" array in `cdktf.json`.

To add a module from the Terraform Registry or a private registry, provide a fully qualified name `registry-namespace/module-name` :

```json
{
  "language": "typescript",
  "app": "npm run --silent compile && node main.js",
  "terraformProviders": [],
  "terraformModules": [
    {
      "name": "vpc",
      "source": "terraform-aws-modules/vpc/aws",
      "version": "~> 3.0"
    }
  ]
}
```

For local modules, use the object format:

```json
{
  "language": "typescript",
  "app": "npm run --silent compile && node main.js",
  "terraformProviders": [],
  "terraformModules": [
    {
      "name": "my-local-module",
      "source": "./path/to/local/terraform/module"
    }
  ]
}
```

-> **Note**: The [`cdktf.json` specification](../../../cdktf/cli-reference/configuration.html) contains syntax requirements for specifying a module version.

### Generate Module Bindings

Go to the working directory and run `cdktf get` to create the appropriate module bindings in the `./.gen` directory automatically. You can then use them in your application as described above.

## Work with Module Outputs

Module [output values](/fundamentals/outputs.html) return data that can be used elsewhere in your configuration. CDK
for Terraform lets you use interpolated module outputs as inputs to other modules or resources.

To access outputs, use the `_output` suffix for python and the `Output` suffix for other languages.

### Output Types

The return type of the outputs is always string because the output returns an HCL expression representing the underlying Terraform resource.

When `TerraformOutput` is any other type than string you must add a typecast to compile the application (e.g. `mod.numberOutput as number`). If a module returns a list, you must use an escape hatch to access items or loop over it. An escape hatch is an object that can add to or override existing resources.

**TODO**: Can we include a real-world example of how to use an escape hatch here?

-> The [Resources](/docs/cdktf/concepts/fundamentals/resources.html) page includes more information about how to use escape hatches.

### Examples

In the example below a local module is used and its output is referenced as a Terraform Output.

```typescript
import { Construct } from "constructs";
import { App, TerraformStack, TerraformOutput } from "cdktf";
// This module can come from a registry or through a local / remote reference
import MyLocalModule from "./.gen/modules/my-local-module";

class MyStack extends TerraformStack {
  constructor(scope: Construct, id: string) {
    super(scope, id);

    const localModule = new MyLocalModule(this, "local-module", {
      ipAddress: "127.0.0.1",
    });

    new TerraformOutput(this, "dns-server", {
      value: localModule.dnsServerOutput,
    });
  }
}
```

Python

In the example below a local module is used and its output is referenced as a Terraform Output.

```python
#!/usr/bin/env python

from constructs import Construct
from cdktf import App, TerraformStack, TerraformOutput
# This module can come from a registry or through a local / remote reference
from imports.my_local_module import MyLocalModule


class MyStack(TerraformStack):
    def __init__(self, scope: Construct, ns: str):
        super().__init__(scope, ns)

        localModule = MyLocalModule(self, "local-module", ip_address='127.0.0.1')
        TerraformOutput(self, "dns-server", value=localModule.dns_server_output)
```

## Create Modules

Generally, we'd encourage to generate type bindings for Terraform modules as described above. However, sometimes this might be not necessary. An alternative is, to use the `TerraformHclModule` class to reference any module that Terraform supports. Both variants of using modules, will synthesize to the same HCL configuration. The main distinction to the way described above is, that there are no types generated when using `TerraformHclModule`.

-> **Note**: This doesn't have type safe inputs/outputs.

TypeScript example:

```typescript
const provider = new AwsProvider(stack, "provider", {
  region: "us-east-1",
});

const module = new TerraformHclModule(stack, "Vpc", {
  source: "terraform-aws-modules/vpc/aws",
  // variables takes any input - please consult the docs of the module
  // to ensure the arguments are correct
  variables: {
    name: "my-vpc",
    cidr: "10.0.0.0/16",
    azs: ["us-west-2a", "us-west-2b", "us-west-2c"],
    privateSubnets: ["10.0.1.0/24", "10.0.2.0/24", "10.0.3.0/24"],
    publicSubnets: ["10.0.101.0/24", "10.0.102.0/24", "10.0.103.0/24"],
    enableNatGateway: true,
  },
  providers: [provider],
});
```
