// Copyright (c) HashiCorp, Inc
// SPDX-License-Identifier: MPL-2.0
// DOCS_BLOCK_START:functions
import { TerraformStack } from "cdktf";
import { Construct } from "constructs";
import { AwsProvider } from "@cdktf/provider-aws/lib/aws-provider";
import { DataAwsAvailabilityZones } from "@cdktf/provider-aws/lib/data-aws-availability-zones";
// DOCS_BLOCK_END:functions
// DOCS_BLOCK_START:operators,functions
import { Fn, TerraformOutput } from "cdktf";
// DOCS_BLOCK_END:operators,functions
// DOCS_BLOCK_START:operators
import { Op } from "cdktf";
// DOCS_BLOCK_END:operators

// DOCS_BLOCK_START:functions
export class FunctionsStack extends TerraformStack {
  constructor(scope: Construct, id: string) {
    super(scope, id);

    new AwsProvider(this, "aws", {
      region: "us-west-2",
    });
    // DOCS_BLOCK_END:functions
    // DOCS_BLOCK_START:operators,functions

    const zones = new DataAwsAvailabilityZones(this, "zones", {
      state: "available",
    });
    // DOCS_BLOCK_END:operators,functions

    // DOCS_BLOCK_START:functions
    new TerraformOutput(this, "first-zone", {
      value: Fn.element(zones.names, 0),
    });
    // DOCS_BLOCK_END:functions

    // DOCS_BLOCK_START:operators

    // ...

    new TerraformOutput(this, "half-of-the-zone", {
      value: Op.div(Fn.lengthOf(zones.names), 2),
    });
    // DOCS_BLOCK_END:operators
    // DOCS_BLOCK_START:functions
  }
}
// DOCS_BLOCK_END:functions
