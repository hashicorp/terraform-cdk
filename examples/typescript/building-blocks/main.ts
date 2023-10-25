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
      name: "tweets-lambda",
      env: {
        FOO: "bar",
      },
      directory: path.resolve("./lambdas/tweets"),
      language: "nodejs",
    });

    const loginLambda = new platform.Lambda(this, "login", {
      name: "login-lambda",
      env: {
        FOO: "bar",
      },
      directory: path.resolve("./lambdas/login"),
      language: "python",
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
