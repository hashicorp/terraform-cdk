---
layout: "docs"
page_title: "Outputs"
sidebar_current: "cdktf"
description: "Outputs allow you export structured data about resources. Learn to define them in CDK for Terraform."
---

# Outputs

You can define [Terraform outputs](https://www.terraform.io/docs/configuration-0-11/outputs.html) to export structured data about your resources. Terraform prints the output value for the user after it applies infrastructure changes, and you can use this information as a data source for other [Terraform workspaces](https://www.terraform.io/docs/language/state/workspaces.html).

## When to use outputs

TODO: Can we get some recommendations about when folks should use Terraform outputs vs. when they can just use what's available in their programming language? 

Outputs are also necessary to share data from a child module to the root module.

## Define Outputs

In TypeScript, a Terraform output for an AWS instance public IP can be expressed by `TerraformOutput`.

```typescript
const instance = new Instance(this, "hello", {
  ami: "ami-abcde123",
  instanceType: "t2.micro",
});

new TerraformOutput(this, "public_ip", {
  value: instance.publicIp,
});
```

The `TerraformOutput` synthesizes to the following:

```json
"output": {
    "examplesimplepublicipE5F943EE": {
      "value": "${aws_instance.examplesimpleHelloF6D4983C.public_ip}"
    }
}
```

TODO: Can we add a block that shows what this looks like when printed for the user? Does it look different when it's printed when we deploy through CDKTF vs. when we synthesize and run the configuration from Terraform?