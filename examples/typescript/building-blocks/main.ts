// Copyright (c) HashiCorp, Inc
// SPDX-License-Identifier: MPL-2.0
import { Construct } from "constructs";
import { App, TerraformStack, Token } from "cdktf";
import { addCustomSynthesis } from "cdktf/lib/synthesize/synthesizer";
import * as path from "path";
import * as fs from "fs";

// L1 Constructs

interface RDSL1Config {}
class RdsL1 extends Construct {
  constructor(scope: Construct, ns: string, _config: RDSL1Config) {
    super(scope, ns);
  }
}

interface LambdaL1Config {
  name: string;
  env: Record<string, string>;
}
class LambdaL1 extends Construct {
  constructor(scope: Construct, ns: string, public config: LambdaL1Config) {
    super(scope, ns);
  }
}

interface ApiGatewayL1Config {
  paths: Record<string, LambdaL1>;
}

class ApiGatewayL1 extends Construct {
  constructor(scope: Construct, ns: string, _config: ApiGatewayL1Config) {
    super(scope, ns);
  }
}

// Cloud-Agnostic Building Blocks
/**
 * Service connecting to the "hosting" service, e.g. Lambda connecting to DB
 */
abstract class Plug {}
/**
 * Service being connected to, e.g. DB
 */
abstract class Socket {}
/**
 * Connector connecting one or many Plugs to a Socket
 */
abstract class Connector {
  constructor(protected serviceProvider: Socket) {}
  abstract get plug(): Plug;
}

class DatabaseUser extends Plug {}
abstract class DatabaseProvider extends Socket {
  abstract get host(): string;
  abstract get port(): number;
  abstract get user(): string;
  abstract get password(): string;
}
/**
 * Generic database connector connecting one or many services to a database
 */
abstract class DatabaseConnector extends Connector {
  constructor(serviceProvider: DatabaseProvider) {
    super(serviceProvider);
  }
  abstract get plug(): DatabaseUser;
}

interface TemplateFileConfig {
  filename: string;
  content: string;
}
class TemplateFile extends Construct {
  constructor(
    scope: Construct,
    ns: string,
    private config: TemplateFileConfig
  ) {
    super(scope, ns);

    addCustomSynthesis(this, {
      onSynthesize: this._onSynthesize.bind(this),
    });
  }

  private _onSynthesize() {
    if (fs.existsSync(this.config.filename)) {
      return;
    }

    fs.mkdirSync(path.dirname(this.config.filename), { recursive: true });
    fs.writeFileSync(this.config.filename, this.config.content);
  }
}

// Cloud-Specific Building Blocks
class EnvironmentDatabasePlug extends Plug {
  constructor(private database: DatabaseProvider) {
    super();
  }

  get env(): Record<string, string> {
    return {
      DB_HOST: this.database.host,
      DB_PORT: Token.asString(this.database.port),
      DB_USER: this.database.user,
      DB_PASSWORD: this.database.password,
    };
  }
}

class LambdaFunctionDirectory extends Construct {
  constructor(
    scope: Construct,
    ns: string,
    private config: {
      directory: string;
      language: "nodejs" | "python";
    }
  ) {
    super(scope, ns);

    if (this.config.language === "nodejs") {
      new TemplateFile(this, "index", {
        filename: path.join(this.config.directory, "index.js"),
        content: `exports.handler = async function (event, context) {
        console.log("EVENT: \n" + JSON.stringify(event, null, 2));
        return context.logStreamName;
      };`,
      });
      new TemplateFile(this, "package.json", {
        filename: path.join(this.config.directory, "index.js"),
        content: JSON.stringify({
          name: ns,
          version: "0.0.0",
          scripts: {
            build:
              "rm -rf dist && esbuild ./src/* --entry-names=[dir]/[name]/index --bundle --minify --sourcemap --platform=node --target=node16.14 --outdir=dist",
            package:
              'cd dist && for f in * ; do ([ -d "$f" ] && cd $f && zip ../$f.zip *) ; done',
          },
          dependencies: {},
          devDependencies: { esbuild: "0.14.42" },
        }),
      });
    } else {
      throw new Error("Language not supported");
    }
  }
}

// L2 Constructs
class Database extends DatabaseProvider {
  constructor(scope: Construct, ns: string) {
    // TODO: Use Rds's infos in database provider
    super();
    new RdsL1(scope, ns, {});
  }

  get host(): string {
    return "localhost";
  }
  get port(): number {
    return 5432;
  }
  get user(): string {
    return "postgres";
  }
  get password(): string {
    return "postgres";
  }
}

interface LambdaConfig extends LambdaL1Config {
  directory: string;
  language: "nodejs" | "python";
}
class Lambda extends LambdaL1 {
  constructor(scope: Construct, name: string, config: LambdaConfig) {
    super(scope, name, config);

    const dir = path.resolve(__dirname, config.directory);
    new LambdaFunctionDirectory(this, name, {
      directory: dir,
      language: config.language,
    });
  }
}

// TODO: Can I also somehow make the lambda aware that it might accept a database?

// Usage

class MyStack extends TerraformStack {
  constructor(scope: Construct, ns: string) {
    super(scope, ns);

    const db = new Database(this, "rds");

    const lambdaDbPlug = new EnvironmentDatabasePlug(db);
    const tweetsLambda = new Lambda(this, "tweets", {
      name: "my-lambda",
      env: {
        ...lambdaDbPlug.env,
        FOO: "bar",
      },
      directory: "tweets-lambda",
      language: "nodejs",
    });

    const loginLambda = new LambdaL1(this, "login", {
      name: "my-lambda",
      env: {
        ...lambdaDbPlug.env,
        FOO: "bar",
      },
    });

    new ApiGatewayL1(this, "api-gateway", {
      paths: {
        "/tweets": tweetsLambda,
        "/login": loginLambda,
      },
    });
  }
}

const app = new App();
new MyStack(app, "building-blocks");
app.synth();
