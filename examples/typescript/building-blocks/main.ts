// Copyright (c) HashiCorp, Inc
// SPDX-License-Identifier: MPL-2.0
import { Construct } from "constructs";
import { App, TerraformStack } from "cdktf";
import { AwsProvider } from "./.gen/providers/aws/provider";
import { Lambda } from "./platform-team";

class MyStack extends TerraformStack {
  constructor(scope: Construct, ns: string) {
    super(scope, ns);
    new AwsProvider(this, "aws", { region: "eu-central-1" });

    new Lambda(this, "list-tweets", {
      functionName: "list-tweets",
      directory: "./lambdas/list-tweets",
      language: "nodejs",
    });
  }
}

const app = new App();
new MyStack(app, "development-building-blocks");
app.synth();

// IAM Policies: https://github.com/udondan/iam-floyd
