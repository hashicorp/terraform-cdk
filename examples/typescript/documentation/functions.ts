// Copyright (c) HashiCorp, Inc
// SPDX-License-Identifier: MPL-2.0
// DOCS_BLOCK_START:functions
import { TerraformStack } from "cdktf";
import { Construct } from "constructs";
import { Fn, TerraformOutput } from "cdktf";
import { AwsProvider } from "@cdktf/provider-aws/lib/aws-provider";
import { DataAwsAvailabilityZones } from "@cdktf/provider-aws/lib/data-aws-availability-zones";

export class FunctionsStack extends TerraformStack {
  constructor(scope: Construct, id: string) {
    super(scope, id);

    new AwsProvider(this, "aws", {
      region: "us-west-2",
    });

    const zones = new DataAwsAvailabilityZones(this, "zones", {
      state: "available",
    });

    new TerraformOutput(this, "first-zone", {
      value: Fn.element(zones.names, 0),
    });
  }
}
// DOCS_BLOCK_END:functions
