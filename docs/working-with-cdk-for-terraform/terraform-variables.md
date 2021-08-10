# Terraform Variables

A [Terraform variable](https://www.terraform.io/docs/configuration/variables.html) serves as a parameter to customize the stack or a module.

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

Variables are useful when the synthesised JSON is used with Terraform, e.g. when running inside [Terraform Cloud](https://www.terraform.io/cloud).
In general it's preferred to leverage the CDK and use your languages APIs to consume the data you would normally pass through Terraform variables. You read from disk (synchronously) or from the environment variables like you would in any normal program.
