---
layout: "cdktf"
page_title: "HCL Interoperability"
sidebar_current: "cdktf"
description: "Use configurations written in HCL and configurations written in CDK for Terraform together to define and provision infrastructure."
---

# HCL Interoperability

-> **Note:** CDK for Terraform is currently in [beta](/docs/cdktf/index.html#project-maturity-and-production-readiness).

Terraform requires infrastructure configuration files written in either [HashiCorp Configuration Language (HCL)](https://www.terraform.io/docs/language/syntax/configuration.html) or JSON syntax. CDK for Terraform (CDKTF) works by translating configurations defined in an imperative programming language to JSON configuration files for Terraform.

CDKTF may not be the right choice for every team and project within your organization. For example, some teams may already be very familiar with Terraform and have created HCL modules, providers, etc. To provide flexibility, CDKTF applications are interoperable with Terraform projects written in HCL. Specifically:

- CDKTF applications can use all existing Terraform [providers ](/docs/cdktf/concepts/providers-and-resources.html) and HCL [modules](/docs/cdktf/concepts/modules.html).
- CDKTF can generate modules that HCL Terraform projects can use in their configurations.

This page shows how you can interoperate HCL and CDK for Terraform configuration.

## CDKTF to HCL

The example below is a TypeScript CDK for Terraform application that uses the `hashicorp/random` provider to generate a random name.

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

To use this as a Terraform module, run `cdktf synth` and copy the resulting `cdktf.out/stacks/random-pet-module/cdktf.json` file out to the module directory in your HCL project.

Once the `cdktf.json` file is transferred, you can reference the pet name module as you would any other HCL Terraform module:

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

## HCL to CDKTF

Use the [`cdktf convert`](../cli-reference/commands.html#convert) command to automatically translate existing HCL into a preferred CDK for Terraform language. The [modules documentation](/docs/cdktf/concepts/modules.html) shows how to use existing Terraform modules in CDK for Terraform projects.
