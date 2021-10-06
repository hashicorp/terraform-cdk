---
layout: "docs"
page_title: "Functions"
sidebar_current: "cdktf"
description: "Learn when to use built-in Terraform functions to transform or combine values."
---

# Functions

Terraform provides a set of built-in functions that to transform and combine values within Terraform configurations. The [Terraform function documentation](https://www.terraform.io/docs/language/functions/index.html) contains a complete list. You can also use your editor autocompletion on the `Fn` object.

## Use Terraform functions

Terraform functions are useful when you need to calculate new values based on Terraform runtime values (resource / module / data source outputs) which are not known at synth time. For inputs that are present at synth time, such as environment variables, local files, etc. In those cases, it is easier and more efficient to do this using your chosen programming language.

Functions can handle normal and [token](./tokens.md) values and will return either tokenized values or `IResolvable`s.

In the example below, a Data Source from the AWS Provider is used to fetch available Availability Zones of the given region. In the Terraform Output, the [element](https://www.terraform.io/docs/language/functions/element.html) function gets the first element from the list of names.

```ts
import { Fn, TerraformOutput } from "cdktf";
import { DataAwsAvailabilityZones } from "@cdktf/provider-aws";

// ...

const zones = new DataAwsAvailabilityZones(this, "zones", {
  state: "available",
});

new TerraformOutput(this, "first-zone", {
  value: Fn.element(zones.names, 0),
});

// ...
```
