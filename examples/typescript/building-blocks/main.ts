// Copyright (c) HashiCorp, Inc
// SPDX-License-Identifier: MPL-2.0
import { Construct } from "constructs";
import { App, TerraformOutput, TerraformStack } from "cdktf";
import { AwsProvider } from "./.gen/providers/aws/provider";
import {
  DatabaseTable,
  Lambda,
  ApiGateway,
  registerConnections,
} from "./platform-team";
import * as path from "path";
import { connect } from "./cdktf/index";

registerConnections();
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

    const loginFn = new Lambda(this, "login", {
      functionName: "login",
      directory: path.resolve("lambdas/login"),
      language: "nodejs",
      environment: {
        variables: {
          USER_TABLE: userTable.name,
        },
      },
    });
    connect(loginFn, userTable);

    const listTweetsFn = new Lambda(this, "list-tweets", {
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
    connect(listTweetsFn, tweetsTable);
    connect(listTweetsFn, userTable);

    const createTweetFn = new Lambda(this, "create-tweet", {
      functionName: "create-tweet",
      directory: path.resolve("lambdas/create-tweet"),
      language: "nodejs",
      environment: {
        variables: {
          TWEETS_TABLE: tweetsTable.name,
        },
      },
    });
    connect(createTweetFn, tweetsTable);

    const notifyAboutNewUsersOnSlack = new Lambda(
      this,
      "notify-about-new-users-on-slack",
      {
        functionName: "notify-about-new-users-on-slack",
        directory: path.resolve("lambdas/notify"),
        language: "nodejs",
        environment: {
          variables: {
            USER_TABLE: userTable.name,
          },
        },
      }
    );
    connect(notifyAboutNewUsersOnSlack, userTable);
    connect(userTable, notifyAboutNewUsersOnSlack);

    const api = new ApiGateway(this, "api-gateway", {
      name: "twitter-api",
      protocolType: "HTTP",
    });
    api.connect(loginFn, "/login");
    api.connect(listTweetsFn, "/tweets");
    api.connect(createTweetFn, "/create-tweet");

    new TerraformOutput(this, "api-url", {
      value: api.api.apiEndpoint,
    });
  }
}

const app = new App();
new MyStack(app, "development-building-blocks");
app.synth();
