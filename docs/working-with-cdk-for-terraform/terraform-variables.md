# Terraform Variables

A [Terraform variable](https://www.terraform.io/docs/configuration/variables.html) serves as a parameter to customize the stack or a module.

```typescript
const imageId = new TerraformVariable(this, 'imageId', {
    type: TerraformPrimitiveVariableType.STRING,
    default: 'ami-abcde123',
    description: 'What AMI to use to create an instance'
});
new Instance(this, 'hello', {
  ami: imageId.value,
  instanceType: 't2.micro'
});
```