---
layout: "docs"
page_title: "Functions"
sidebar_current: "cdktf"
description: "Learn when to use built-in Terraform functions to transform or combine values."
---

# Functions

Terraform provides a set of built-in functions that to transform and combine values within Terraform configurations. The [Terraform function documentation](https://www.terraform.io/docs/language/functions/index.html) contains a complete list. You can also use your editor autocompletion on the `Fn` object.


## Use Terraform functions

We do not recommend using Terraform functions for inputs that are not tied to Terraform, such as environment variables, local files, etc. In those cases, it is easier and more efficient to do this using your chosen programming language.

You should Terraform functions when you need to calculate new values based on runtime values (resource / module / data source outputs). **TODO** Explain why.

Functions can handle normal and [token](./tokens.md) values and will return either tokenized values or `IResolvable`s.

**TODO**: Can you please explain why this is a good example of when you should use a function and explain what's going on in this example?

```ts
import { Fn } from "cdktf";

new vpc() = new VPC(this, "vpc", {});
new LoadBalancer(this, "lb", {
  name: "main-lb",
  subnet: Fn.cidrsubnet(Fn.element(vpc.listOfSubnets, 0), 4, 2),
});
```


