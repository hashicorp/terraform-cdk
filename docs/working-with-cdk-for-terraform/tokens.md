# Tokens

Use tokens to enable the CDK for Terraform to resolve programming language types to Terraform language syntax, including:

- Module outputs
- Resource attributes (such as `id`)
- Terraform outputs based on resource attributes

A [Terraform module](https://www.terraform.io/docs/modules/index.html) defines multiple resources intended to be used together.
Module output values return results to the calling module, which it can then use to populate arguments elsewhere. The CDK
for Terraform enables the use of interpolated module outputs as inputs to other modules or resources with an output `get` method
for each output.

In TypeScript, the module output with the AWS VPC identifier from the `vpc` module gets passed to an AWS EKS cluster by
using `vpcIdOutput`.

```typescript
const vpc = new Vpc(this, "my-vpc", {
  name: vpcName,
});

new Eks(this, "EksModule", {
  clusterName: "my-kubernetes-cluster",
  vpcId: vpc.vpcIdOutput,
});
```

The `<output name>Output` synthesizes to `${module.<module id>.<output name>}`.

```json
{
  "module": {
    "helloterraEksModule5DDB67AE": {
      "cluster_name": "my-kubernetes-cluster",
      "vpc_id": "${module.helloterraMyVpc62D94C17.vpc_id}"
    }
  }
}
```

CDK for Terraform maps the language types to Terraform 0.12's rich types, such as lists and maps.
As a result, some attributes specified using the CDK for Terraform may not map to the string value of
`<output name>Output`. To correct this, use [Tokens](https://docs.aws.amazon.com/cdk/latest/guide/tokens.html)
to cast it to the correct attribute type. Tokens represent values that can only be resolved at a later time
in the lifecycle of synthesis.

For example, the EKS module requires a _list_ of subnet ids in order to create
a cluster. The VPC module outputs a list of subnets. To pass the subnet id list to the EKS module,
we use `publicSubnetsOutput` to retrieve the list from the VPC. However, the `subnets` attribute
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

Tokens can be used for interpolating module outputs for boolean, string, lists, maps, and other complex type attributes.
For more information on Tokens, see [AWS CDK documentation](https://docs.aws.amazon.com/cdk/latest/guide/tokens.html).
