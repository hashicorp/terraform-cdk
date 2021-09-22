---
layout: "docs"
page_title: "HCL & CDK for Terraform Interoperability"
sidebar_current: "docs-home"
description: "HCL and CDK for Terraform can interoperate"
---

## HCL & CDK for Terraform Interoperability

CDK for Terraform and HCL Terraform use the same underlying Terraform providers, and CDK for Terraform can use existing HCL Terraform modules. Similarly, CDK for Terraform can generate modules that can be used by HCL Terraform users: both are fully interoperable. The [providers documentation](./fundementals/providers.html) and [modules documentation](./fundementals.modules.html.md) describe how to use existing Terraform providers and modules with CDK for Terraform.

A project written in CDK for Terraform can be used as a module from HCL. Conversely, a module written in HCL can be used in CDK for Terraform.

### Using CDK for Terraform modules from HCL

The example below shows a simple TypeScript CDK for Terraform example that uses the `hashicorp/random` provider to generate a random name.

```typescript
import { Construct } from "constructs";
import { App, TerraformOutput, TerraformStack, TerraformVariable } from "cdktf";
import { Pet, RandomProvider } from "./.gen/providers/random";

class MyStack extends TerraformStack {
  constructor(scope: Construct, name: string) {
    super(scope, name);

    new RandomProvider(this, "default", {});
    const petNameLength = new TerraformVariable(this, "petNameLength", {
      type: "number",
      default: 2,
      description: "Pet name length",
    });

    const myPet = new Pet(this, "example", {
      length: petNameLength.value,
    });

    new TerraformOutput(this, "name", {
      value: myPet.id,
    });
  }
}

const app = new App();
new MyStack(app, "random-pet-module");
app.synth();
```

To use this as a Terraform module, run `cdktf synth` and copy the resulting `cdktf.out/stacks/random-pet-module/cdk.tf.json` file out to the module folder where you want to use it. It can be referenced like any other HCL Terraform module, as below:

```terraform
terraform {
  required_providers {
    docker = {
      source = "hashicorp/random"
      version = "~> 3.1"
    }
  }
}

module "pet" {
    source = "./mods/pet"
    petNameLength = "1"
}

output "name" {
  value = module.pet.name
}
```

### Using a Terraform module with CDK for Terraform

The [modules documentation](./fundementals.modules.html.md) describes how to use existing Terraform modules in CDK for Terraform projects.

## Convert existing HCL

Existing HCL can be automatically converted to CDK for Terraform languages using the [`cdktf convert`](../cli-reference/commands.html#convert) command.
