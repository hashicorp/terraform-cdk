// Copyright (c) HashiCorp, Inc
// SPDX-License-Identifier: MPL-2.0
// DOCS_BLOCK_START:datasources,remote-state-datasources
import { TerraformStack } from "cdktf";
import { Construct } from "constructs";
import { AwsProvider } from "@cdktf/provider-aws/lib/aws-provider";
// DOCS_BLOCK_END:datasources,remote-state-datasources

// DOCS_BLOCK_START:datasources
import { DataAwsRegion } from "@cdktf/provider-aws/lib/data-aws-region";
// DOCS_BLOCK_END:datasources

// DOCS_BLOCK_START:remote-state-datasources
import { DataTerraformRemoteState } from "cdktf";
import { Instance } from "@cdktf/provider-aws/lib/instance";
// DOCS_BLOCK_END:remote-state-datasources

// DOCS_BLOCK_START:datasources,remote-state-datasources

export class DataSourcesStack extends TerraformStack {
  constructor(scope: Construct, id: string) {
    super(scope, id);

    new AwsProvider(this, "aws", {
      region: "us-west-2",
    });

    // DOCS_BLOCK_END:datasources,remote-state-datasources

    // DOCS_BLOCK_START:datasources
    const region = new DataAwsRegion(this, "region");
    // DOCS_BLOCK_END:datasources

    // DOCS_BLOCK_START:remote-state-datasources
    const remoteState = new DataTerraformRemoteState(this, "remote-state", {
      organization: "hashicorp",
      workspaces: {
        name: "vpc-prod",
      },
    });

    new Instance(this, "foo", {
      instanceType: "t2.micro",
      ami: "ami-123456",
      subnetId: `${remoteState.get("subnet_id")}`,
    });
    // DOCS_BLOCK_END:remote-state-datasources

    // DOCS_BLOCK_START:datasources,remote-state-datasources
  }
}
// DOCS_BLOCK_END:datasources,remote-state-datasources
