---
layout: "cdktf"
page_title: "Functions"
sidebar_current: "cdktf"
description: "Learn when to use built-in Terraform functions to transform or combine values."
---

# Functions

Terraform provides a set of built-in functions that transform and combine values within Terraform configurations. The [Terraform function documentation](https://www.terraform.io/docs/language/functions/index.html) contains a complete list. You can also use your editor autocompletion on the `Fn` object to find available options.

Functions can handle normal and [token](./tokens.md) values and will return either tokenized values or `IResolvable` values.

## When to Use Terraform Functions

Use Terraform functions when you need to calculate new values based on runtime values that are unknown before Terraform applies a configuration. For example, instance IDs that cloud providers assign on creation.

When inputs are available before [synthesizing your code](/docs/cdktf/cli-reference/commands.html#synth) (e.g. local files), we recommend transforming the values with your preferred programming language.

## Usage Example

The TypeScript example below uses a Data Source from the AWS Provider to fetch the Availability Zones of the given region. As this data is unknown until Terraform applies the configuration, this CDKTF application uses both [Terraform Outputs](./variables-and-outputs.html#outputs) and the Terraform [`element`](https://www.terraform.io/docs/language/functions/element.html) function.

The `element` function gets the first element from the list of Availability Zone names.

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
