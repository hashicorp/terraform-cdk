// Copyright (c) HashiCorp, Inc
// SPDX-License-Identifier: MPL-2.0
import { Construct } from "constructs";
import { App, TerraformStack } from "cdktf";
import * as l1 from "./l1";
import * as platform from "./platform-team";
import * as path from "path";

class MainApplication extends platform.WithDatabase {
  constructor(scope: Construct, name: string) {
    super(scope, name);

    const tweetsLambda = new platform.Lambda(this, "tweets", {
      name: "my-lambda",
      env: {
        FOO: "bar",
      },
      directory: path.resolve("./tweets-lambda"),
      language: "nodejs",
    });

    // TODO: Maybe use sth like a cable instead of both ends :D
    // const lambdaDbPlug = new cdktf.EnvironmentDatabasePlug(db);
    const loginLambda = new l1.LambdaL1(this, "login", {
      name: "my-lambda",
      env: {
        // ...lambdaDbPlug.env,
        FOO: "bar",
      },
    });

    // TODO: Move this into a auto-connecting construct / scope as well
    new l1.ApiGatewayL1(this, "api-gateway", {
      paths: {
        "/tweets": tweetsLambda,
        "/login": loginLambda,
      },
    });
  }
}
class MyStack extends TerraformStack {
  constructor(
    scope: Construct,
    ns: string,
    // TODO: Think more about coloring
    _colors: { pricing: "cheap" | "expensive"; redundancy: "single" | "multi" }
  ) {
    super(scope, ns);
    new MainApplication(this, "main-application");
  }
}

const app = new App();
new MyStack(app, "development-building-blocks", {
  pricing: "cheap",
  redundancy: "single",
});
app.synth();

// IAM Policies: https://github.com/udondan/iam-floyd
