// Copyright (c) HashiCorp, Inc
// SPDX-License-Identifier: MPL-2.0
import { Construct } from "constructs";
import { App, Token } from "cdktf";
import * as path from "path";
import * as l1 from "./l1";
import * as platform from "./platform-team";
import * as cdktf from "./cdktf";

interface LambdaConfig extends l1.LambdaL1Config {
  directory: string;
  language: "nodejs" | "python";
}
class Lambda extends l1.LambdaL1 {
  dbPlug: cdktf.DatabaseUser;
  constructor(scope: Construct, name: string, config: LambdaConfig) {
    super(scope, name, config);

    const dir = path.resolve(__dirname, config.directory);
    new platform.LambdaFunctionDirectory(this, name, {
      directory: dir,
      language: config.language,
    });
    this.dbPlug = new platform.AwsDatabaseUser(this);
  }

  public attachDatabase(db: platform.Database) {
    // Connect to the db, create required resources e.g. for permissions
    const { host, port, user, password } = this.dbPlug.connect(db);

    // Mutate the lambda's env
    this.config.env.DB_HOST = host;
    this.config.env.DB_PORT = Token.asString(port);
    this.config.env.DB_USER = user;
    this.config.env.DB_PASSWORD = password;
  }
}

// Usage
class MyStack extends cdktf.ColorfulTerraformStack {
  constructor(
    scope: Construct,
    ns: string,
    colors: { pricing: "cheap" | "expensive"; redundancy: "single" | "multi" }
  ) {
    super(scope, ns, colors);

    const db = new platform.Database(this, "rds");

    const tweetsLambda = new Lambda(this, "tweets", {
      name: "my-lambda",
      env: {
        FOO: "bar",
      },
      directory: "tweets-lambda",
      language: "nodejs",
    });
    tweetsLambda.attachDatabase(db);

    // TODO: Maybe use sth like a cable instead of both ends :D
    const lambdaDbPlug = new cdktf.EnvironmentDatabasePlug(db);
    const loginLambda = new l1.LambdaL1(this, "login", {
      name: "my-lambda",
      env: {
        ...lambdaDbPlug.env,
        FOO: "bar",
      },
    });

    new l1.ApiGatewayL1(this, "api-gateway", {
      paths: {
        "/tweets": tweetsLambda,
        "/login": loginLambda,
      },
    });
  }
}

const app = new App();
new MyStack(app, "development-building-blocks", {
  pricing: "cheap",
  redundancy: "single",
});
app.synth();

// IAM Policies: https://github.com/udondan/iam-floyd
