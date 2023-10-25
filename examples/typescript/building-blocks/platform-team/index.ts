import { Construct } from "constructs";
import * as cdktf from "../cdktf/index";
import * as path from "path";
import * as l1 from "../l1";

export class LambdaFunctionDirectory extends Construct {
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
      new cdktf.TemplateFile(this, "index", {
        filename: path.join(this.config.directory, "index.js"),
        content: `// Example Lambda function
exports.handler = async function (event, context) {
  console.log("EVENT: " + JSON.stringify(event, null, 2));
  return context.logStreamName;
};`,
      });
      new cdktf.TemplateFile(this, "package.json", {
        filename: path.join(this.config.directory, "package.json"),
        content: JSON.stringify(
          {
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
          },
          null,
          1
        ),
      });

      new cdktf.CliCommand(
        this,
        "run-request-against-" + ns,
        (parameters) =>
          `echo "Sending request to ${ns} with request ${parameters[0]}"`,
        [
          {
            name: "payload",
            description: "File url to payload",
            required: true,
          },
        ]
      );

      new cdktf.CliCommand(
        this,
        "logs-for-" + ns,
        () => `echo "Getting logs for ${ns}"`
      );

      new cdktf.CliCommand(
        this,
        "open-dashboard-" + ns,
        () => `echo "Opening dashboard for ${ns}"`
      );

      new cdktf.CliCommand(
        this,
        "get-metrics-" + ns,
        () => `echo "Getting metrics for ${ns}"`
      );
    } else {
      throw new Error("Language not supported");
    }
  }
}

// L2 Constructs
export class Database extends Construct {
  db: l1.RdsL1;
  constructor(scope: Construct, ns: string) {
    super(scope, ns);

    this.db = new l1.RdsL1(this, "db", {});
    new cdktf.CliCommand(
      this,
      "db-backup-" + ns,
      (parameters, flags) =>
        `echo "Creating backup of ${this.db.arn} in ${parameters[0]} with compression set to ${flags["compression-level"]}"`,
      [
        {
          name: "backupName",
          description: "The name of the backup",
          required: true,
        },
      ],

      { compression: "Level of compression being used" }
    );
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

export interface LambdaConfig extends l1.LambdaL1Config {
  directory: string;
  language: "nodejs" | "python";
}
export class Lambda extends l1.LambdaL1 {
  constructor(scope: Construct, name: string, config: LambdaConfig) {
    super(scope, name, config);

    const dir = path.resolve(__dirname, config.directory);
    new LambdaFunctionDirectory(this, name, {
      directory: dir,
      language: config.language,
    });
  }
}

// TODO: Refactor this to another way of mixing the funcitionality in while not relying on inheritance
export class WithDatabase extends cdktf.ConnectionScope {
  constructor(scope: Construct, name: string) {
    super(scope, name);
    const database = new Database(this, "db-for-" + name);
    cdktf.pinForConnection(database.db);
  }
}
