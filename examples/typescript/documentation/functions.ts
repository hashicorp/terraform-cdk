// Copyright (c) HashiCorp, Inc
// SPDX-License-Identifier: MPL-2.0
// DOCS_BLOCK_START:functions
import { TerraformStack, TerraformVariable } from "cdktf";
import { Construct } from "constructs";
import { AwsProvider } from "@cdktf/provider-aws/lib/aws-provider";
// DOCS_BLOCK_END:functions
// DOCS_BLOCK_START:operators,functions,functions-raw
import { Fn, TerraformOutput } from "cdktf";
// DOCS_BLOCK_END:operators,functions,functions-raw
// DOCS_BLOCK_START:operators,functions-raw
import { Op } from "cdktf";
// DOCS_BLOCK_END:operators,functions-raw
// DOCS_BLOCK_START:functions-raw,functions
import { DataAwsAvailabilityZones } from "@cdktf/provider-aws/lib/data-aws-availability-zones";
// DOCS_BLOCK_END:functions-raw,functions

// DOCS_BLOCK_START:functions
export class FunctionsStack extends TerraformStack {
  constructor(scope: Construct, id: string) {
    super(scope, id);

    new AwsProvider(this, "aws", {
      region: "us-west-2",
    });
    // DOCS_BLOCK_END:functions
    // DOCS_BLOCK_START:operators,functions,functions-raw

    const zones = new DataAwsAvailabilityZones(this, "zones", {
      state: "available",
    });
    // DOCS_BLOCK_END:operators,functions,functions-raw

    // DOCS_BLOCK_START:functions
    new TerraformOutput(this, "first-zone", {
      value: Fn.element(zones.names, 0),
    });
    // DOCS_BLOCK_END:functions

    // DOCS_BLOCK_START:functions-lookup
    const v = new TerraformVariable(this, "complex_object", {
      type: "object({users: list(object({name: string}))})",
    });
    new TerraformOutput(this, "users", { value: Fn.lookup(v.value, "users") });
    new TerraformOutput(this, "first_user_name", {
      value: Fn.lookupNested(v.value, ["users", 0, "name"]),
    });
    // DOCS_BLOCK_END:functions-lookup

    // DOCS_BLOCK_START:functions-raw-string
    new TerraformOutput(this, "quotes", {
      value: Fn.rawString(`"b"`),
    });
    new TerraformOutput(this, "template", {
      value: Fn.rawString("${TEMPLATE}"),
    });
    // DOCS_BLOCK_END:functions-raw-string

    // DOCS_BLOCK_START:operators

    // ...

    new TerraformOutput(this, "half-of-the-zone", {
      value: Op.div(Fn.lengthOf(zones.names), 2),
    });
    // DOCS_BLOCK_END:operators
    // DOCS_BLOCK_START:functions-raw

    // ...

    new TerraformOutput(this, "half-of-the-zone-raw", {
      value: `\${length(${zones.fqn}.names) / 2}`,
    });
    // DOCS_BLOCK_END:functions-raw

    // DOCS_BLOCK_START:functions
  }
}
// DOCS_BLOCK_END:functions
