// Copyright (c) HashiCorp, Inc
// SPDX-License-Identifier: MPL-2.0

import { TerraformCount, TerraformStack, TerraformVariable } from "cdktf";
import { Construct } from "constructs";
import { AwsProvider } from "@cdktf/provider-aws/lib/aws-provider";
import { Instance } from "@cdktf/provider-aws/lib/instance";

export class IteratorsCountStack extends TerraformStack {
  constructor(scope: Construct, id: string) {
    super(scope, id);

    new AwsProvider(this, "aws", {
      region: "us-west-2",
    });

    // DOCS_BLOCK_START:iterators-count
    const servers = new TerraformVariable(this, "servers", {
      type: "number",
    });

    const count = TerraformCount.of(servers.numberValue);

    new Instance(this, "server", {
      count: count,
      ami: "ami-a1b2c3d4",
      instanceType: "t2.micro",
      tags: {
        Name: "Server ${" + count.index + "}",
      },
    });
    // DOCS_BLOCK_END:iterators-count
  }
}
