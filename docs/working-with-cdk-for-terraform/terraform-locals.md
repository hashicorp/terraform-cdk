# Terraform Locals

A [Terraform local](https://www.terraform.io/docs/configuration/locals.html) assigns a name to an expression to allow repeated usage. They can be thought of similar to a local variable, and as such, can often be replaced by one.

In TypeScript, a Terraform local is expressed by `TerraformLocal`.

```typescript
const commonTags = new TerraformLocal(this, "common_tags", {
  Service: "service_name",
  Owner: "owner",
});

new Instance(this, "example", {
  tags: commonTags.expression,
});
```

The `TerraformLocal` synthesizes to the following:

```json
"locals": {
    "common_tags": {
      "Service": "service_name",
      "Owner": "owner"
    }
}
...
"resource": {
  "aws_instance": {
    "example": {
      "tags": "${local.common_tags}"
    }
  }
}
```
