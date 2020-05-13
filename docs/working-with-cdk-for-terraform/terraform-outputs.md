# Terraform Outputs

A [Terraform output](https://www.terraform.io/docs/configuration-0-11/outputs.html) defines a value that is shown to the user
when a Terraform apply finishes.

In TypeScript, a Terraform output for an AWS instance public IP can be expressed by `TerraformOutput`.

```typescript
const instance = new Instance(this, 'hello', {
  ami: 'ami-abcde123',
  instanceType: 't2.micro'
});

new TerraformOutput(this, 'public_ip', {
    value: instance.publicIp
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

CDK for Terraform maps the language types to Terraform 0.12's rich types, such as lists and maps.
As a result, some attributes specified using the CDK for Terraform may not map to the string value.
To correct this, use [Tokens](./tokens.md) to cast it to the correct attribute type. Here is an example
that uses tokens to cast a list attribute.

```typescript
const instance = new Instance(this, 'hello', {
  ami: 'ami-abcde123',
  instanceType: 't2.micro'
});

new TerraformOutput(this, 'instance_tags', {
    value: Token.asList(instance.tags)
});
```