import { Construct } from "constructs";
import { TerraformAsset, AssetType } from "cdktf";
import * as cdktf from "../cdktf/index";
import * as path from "path";
import { IamRole } from "../.gen/providers/aws/iam-role/index";
import { IamRolePolicyAttachment } from "../.gen/providers/aws/iam-role-policy-attachment/index";
import { execSync } from "child_process";
import {
  LambdaFunction,
  LambdaFunctionConfig,
} from "../.gen/providers/aws/lambda-function/index";

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
                "rm -rf dist && esbuild ./index.js --entry-names=[dir]/[name]/index --bundle --minify --sourcemap --platform=node --target=node16.14 --outdir=dist",
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
    } else if (this.config.language === "python") {
      new cdktf.TemplateFile(this, "index", {
        filename: path.join(this.config.directory, "lambda.py"),
        content: `// Example Lambda function
def lambda_handler(event, context):
    message = 'Hello {} {}!'.format(event['first_name'], event['last_name'])  
    return { 
        'message' : message
}
  `,
      });

      new cdktf.TemplateFile(this, "requirements.txt", {
        filename: path.join(this.config.directory, "requirements.txt"),
        content: `boto3==1.18.52`,
      });
    } else {
      throw new Error("Language not supported");
    }
  }
}

const lambdaRolePolicy = {
  Version: "2012-10-17",
  Statement: [
    {
      Action: "sts:AssumeRole",
      Principal: {
        Service: "lambda.amazonaws.com",
      },
      Effect: "Allow",
      Sid: "",
    },
  ],
};
export interface LambdaConfig extends Omit<LambdaFunctionConfig, "role"> {
  directory: string;
  language: "nodejs" | "python";
}

export class Lambda extends cdktf.ConnectableConstruct {
  public lambda: LambdaFunction;
  public role: IamRole;

  public type = "custom_lambda";
  public static type = "custom_lambda";

  public directory: string;

  constructor(
    scope: Construct,
    name: string,
    { directory, language, ...config }: LambdaConfig
  ) {
    super(scope, name);
    this.directory = directory;

    const dir = path.resolve(__dirname, directory);
    new LambdaFunctionDirectory(this, name, {
      directory: dir,
      language: language,
    });

    const code = new TerraformAsset(this, "lambda-asset", {
      path: path.join(directory, "dist", "index"),
      type: AssetType.ARCHIVE,
    });

    this.role = new IamRole(this, "execution-role", {
      name: name + "-role",
      assumeRolePolicy: JSON.stringify(lambdaRolePolicy),
    });

    // Allow Lambda to write logs to CloudWatch
    new IamRolePolicyAttachment(this, "lambda-managed-policy", {
      policyArn:
        "arn:aws:iam::aws:policy/service-role/AWSLambdaBasicExecutionRole",
      role: this.role.name,
    });

    this.lambda = new LambdaFunction(this, "fn", {
      filename: code.path,
      sourceCodeHash: code.assetHash,
      runtime: language === "nodejs" ? "nodejs18.x" : "python3.9",
      handler: "index.handler",
      role: this.role.arn,
      ...config,
    });

    if (language === "python") {
      new cdktf.CliCommand(
        this,
        "install-dependencies-for-" + name,
        () =>
          `pip install -r ${path.join(
            directory,
            "requirements.txt"
          )} --target ${path.join(directory, "package")}`
      );
    }

    new cdktf.CliCommand(
      this,
      "run-request-against-" + name,
      (parameters) =>
        `echo "Sending request to ${name} with request ${parameters[0]}"`,
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
      "logs-for-" + name,
      () => `echo "Getting logs for ${name}"`
    );

    new cdktf.CliCommand(
      this,
      "open-dashboard-" + name,
      () => `echo "Opening dashboard for ${name}"`
    );

    new cdktf.CliCommand(
      this,
      "get-metrics-" + name,
      () => `echo "Getting metrics for ${name}"`
    );
  }

  public preSynthesize() {
    execSync(`cd ${this.directory} && npm install && npm run build`);
  }
}
