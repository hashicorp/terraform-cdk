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

interface DatbaseConfig {
  host: string;
  port: number;
  user: string;
  password: string;
}

class DatabaseUser extends Plug {
  connect(db: DatabaseProvider): DatbaseConfig {
    db.connect(this);

    return {
      host: db.host,
      port: db.port,
      user: db.user,
      password: db.password,
    };
  }
}
abstract class DatabaseProvider extends Socket {
  abstract get host(): string;
  abstract get port(): number;
  abstract get user(): string;
  abstract get password(): string;
  abstract connect(subjectPlug: DatabaseUser): DatbaseConfig;
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

class ColorfulTerraformStack extends TerraformStack {
  constructor(
    scope: Construct,
    ns: string,
    public colors: Record<string, any>
  ) {
    super(scope, ns);
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
        filename: path.join(this.config.directory, "package.json"),
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

abstract class AwsDatabaseProvider extends DatabaseProvider {
  connect(subjectPlug: DatabaseUser): DatbaseConfig {
    // TODO: Create required resources e.g. for request pooling etc.
    return {
      host: this.host,
      port: this.port,
      user: this.user,
      password: this.password,
    };
  }
}

// L2 Constructs
class Database extends AwsDatabaseProvider {
  constructor(scope: Construct, ns: string) {
    // TODO: Use Rds's infos in database provider
    super();

    // const _rdsInstance = ColorfulTerraformStack.of(scope).colors[pricing];
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

class AwsDatabaseUser extends DatabaseUser {
  connect(db: DatabaseProvider): DatbaseConfig {
    const config = super.connect(db);
    // Add permissions
    return config;
  }
}

interface LambdaConfig extends LambdaL1Config {
  directory: string;
  language: "nodejs" | "python";
}
class Lambda extends LambdaL1 {
  dbPlug: DatabaseUser = new AwsDatabaseUser(); // Maybe there is a better way to mixin functionality
  constructor(scope: Construct, name: string, config: LambdaConfig) {
    super(scope, name, config);

    const dir = path.resolve(__dirname, config.directory);
    new LambdaFunctionDirectory(this, name, {
      directory: dir,
      language: config.language,
    });
  }

  public attachDatabase(db: Database) {
    // Connect to the db, create required resources e.g. for permissions
    const { host, port, user, password } = this.dbPlug.connect(db);

    // Mutate the lambda's env
    this.config.env.DB_HOST = host;
    this.config.env.DB_PORT = Token.asString(port);
    this.config.env.DB_USER = user;
    this.config.env.DB_PASSWORD = password;
  }
}

// TODO: Can I also somehow make the lambda aware that it might accept a database?

// Usage
class MyStack extends ColorfulTerraformStack {
  constructor(
    scope: Construct,
    ns: string,
    colors: { pricing: "cheap" | "expensive"; redundancy: "single" | "multi" }
  ) {
    super(scope, ns, colors);

    const db = new Database(this, "rds");

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
    const lambdaDbPlug = new EnvironmentDatabasePlug(db);
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
new MyStack(app, "development-building-blocks", {
  pricing: "cheap",
  redundancy: "single",
});
app.synth();

// IAM Policies: https://github.com/udondan/iam-floyd
