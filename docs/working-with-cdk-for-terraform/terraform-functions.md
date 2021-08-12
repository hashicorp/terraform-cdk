# Terraform Functions

Terraform provides a set of functions that can be used through the CDK for Terraform.

```ts
import { Fn } from "cdktf";

new vpc() = new VPC(this, "vpc", {});
new LoadBalancer(this, "lb", {
  name: "main-lb",
  subnet: Fn.Network.cidrsubnet(
    Fn.Collection.element(vpc.listOfSubnets, 0),
    4,
    2
  ),
});
```

To explore the functionality either check out the [Terraform Documentation](https://www.terraform.io/docs/language/functions/index.html) or use your editor autocompletion on the `Fn` object.

## When to use

- For calculating new values based on runtime values (resource / module / data source outputs)

## When not to use

- For inputs since it's easier to use the programming language you use
