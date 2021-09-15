---
layout: "docs"
page_title: "Tokens"
sidebar_current: "cdktf"
description: "Tokens allow CDK for Terraform to resolve programming language types to Terraform language syntax."
---

# Tokens

[Tokens](https://docs.aws.amazon.com/cdk/latest/guide/tokens.html)
are strings representing values that are unknown until Terraform applies your configuration. For example, names of cloud resources are only assigned upon creation.

CDK for Terraform maps programming language types to Terraform 0.12's rich types, such as lists and maps. As a result, some attributes specified using CDK for Terraform may not map to the string value of
`<output name>Output`. You can use [Tokens](https://docs.aws.amazon.com/cdk/latest/guide/tokens.html)
to cast them to the correct attribute type.


-> The [AWS CDK documentation](https://docs.aws.amazon.com/cdk/latest/guide/tokens.html) contains more in-depth information about tokens.



## Use Tokens

You may need to use Tokens to resolve programming types to Terraform language syntax for:

- [Module outputs](/fundamentals/modules.html) for boolean, string, lists, maps, and other complex types
- Resource attributes (such as `id`)
- Terraform outputs based on resource attributes


### Example

An EKS module requires a _list_ of subnet ids in order to create a cluster. The VPC module outputs a list of subnets.

To pass the subnet id list to the EKS module, you can use `publicSubnetsOutput` to retrieve the list from the VPC. However, the `subnets` attribute
requires a list of strings. Use `Token.asList(vpc.publicSubnetsOutput)` to cast the interpolated module
output as a list of strings.

```typescript
const vpc = new Vpc(this, vpcName, {
  name: vpcName,
  publicSubnets: ["10.0.1.0/24", "10.0.2.0/24"],
});

new Eks(this, "EksModule", {
  clusterName: "my-kubernetes-cluster",
  subnets: Token.asList(vpc.publicSubnetsOutput),
});
```

Initially, the CDK for Terraform will resolve `Token.asList(vpc.publicSubnetsOutput)` to `["#{TOKEN[TOKEN.9]}"]`.
Later in synthesis, the CDK for Terraform will resolve the token to `${module.<module id>.public_subnets}`.

```json
{
  "module": {
    "helloterraEksModule5DDB67AE": {
      "cluster_name": "my-kubernetes-cluster",
      "subnets": "${module.helloterraMyVpc62D94C17.public_subnets}"
    }
  }
}
```

