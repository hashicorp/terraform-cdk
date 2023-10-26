// Copyright (c) HashiCorp, Inc
// SPDX-License-Identifier: MPL-2.0
import { Construct } from "constructs";
import { App, TerraformStack } from "cdktf";
import { AwsProvider } from "./.gen/providers/aws/provider";
import { DatabaseTable, Lambda } from "./platform-team";
import * as path from "path";

class MyStack extends TerraformStack {
  constructor(scope: Construct, ns: string) {
    super(scope, ns);
    new AwsProvider(this, "aws", { region: "eu-central-1" });

    const userTable = new DatabaseTable(this, "users", [
      { name: "id", type: "S", hashKey: true },
      { name: "name", type: "S" },
      { name: "email", type: "S" },
      { name: "created_at", type: "S", rangeKey: true },
    ]);

    const tweetsTable = new DatabaseTable(this, "tweets", [
      { name: "id", type: "S", hashKey: true },
      { name: "text", type: "S" },
      { name: "author_id", type: "S" },
      { name: "created_at", type: "S", rangeKey: true },
    ]);

    new Lambda(this, "list-tweets", {
      functionName: "list-tweets",
      directory: path.resolve("lambdas/list-tweets"),
      language: "nodejs",
      environment: {
        variables: {
          TWEETS_TABLE: tweetsTable.name,
          USER_TABLE: userTable.name,
        },
      },
    });
  }
}

const app = new App();
new MyStack(app, "development-building-blocks");
app.synth();

// IAM Policies: https://github.com/udondan/iam-floyd
