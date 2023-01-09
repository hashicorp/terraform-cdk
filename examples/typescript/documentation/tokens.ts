// Copyright (c) HashiCorp, Inc
// SPDX-License-Identifier: MPL-2.0

// DOCS_BLOCK_START:tokens
import { TerraformStack, TerraformVariable, Token } from "cdktf";
import { Construct } from "constructs";
import { Vpc } from "./.gen/modules/terraform-aws-modules/aws/vpc";
import { Eks } from "./.gen/modules/terraform-aws-modules/aws/eks";

export class TokensStack extends TerraformStack {
  constructor(scope: Construct, id: string, vpcName: string) {
    super(scope, id);

    const logRetention = new TerraformVariable(this, "logRetentionInDays", {
      type: "number",
    });

    const vpc = new Vpc(this, vpcName, {
      name: vpcName,
      publicSubnets: ["10.0.1.0/24", "10.0.2.0/24"],
    });

    new Eks(this, "EksModule", {
      clusterName: "my-kubernetes-cluster",
      subnetIds: Token.asList(vpc.publicSubnetsOutput),
      cloudwatchLogGroupRetentionInDays: logRetention.numberValue,
    });
  }
}
// DOCS_BLOCK_END:tokens
