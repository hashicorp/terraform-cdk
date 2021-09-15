---
layout: "docs"
page_title: "Variables"
sidebar_current: "cdktf"
description: "Variables allow you to customize stacks and modules. Learn to define them in CDK for Terraform applications."
---

# Variables

You can define [Terraform variables](https://www.terraform.io/docs/configuration/variables.html) as input parameters to customize stacks and [modules](/fundamentals/modules.html). For example, rather than hardcoding the number and type of AWS EC2 instances to provision, you can define a variable that lets users change these parameters based on their needs.

## When to use Variables

Variables are useful when you plan to synthesize your CDK for Terraform application into a JSON configuration file for Terraform. For example, when you are planning to store configurations and run Terraform inside [Terraform Cloud](https://www.terraform.io/cloud).

If you plan to use CDK for Terraform to manage your infrastructure, then we recommend using your language's APIs to consume the data you would normally pass through Terraform variables. You can read from disk (synchronously) or from the environment variables, just as you would in any normal program.

## Define Variables

TODO: Can we get a description of what is happening here?

```typescript
const imageId = new TerraformVariable(this, "imageId", {
  type: "string",
  default: "ami-abcde123",
  description: "What AMI to use to create an instance",
});
new Instance(this, "hello", {
  ami: imageId.value,
  instanceType: "t2.micro",
});
```

TODO: When this gets synthesized, can we tell users what's going to happen? Is it automatically going to create the `tfvars` file?
