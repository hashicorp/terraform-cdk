import { Construct } from "constructs";
import {
  App,
  TerraformStack,
  Testing,
  TerraformAsset,
  TerraformOutput,
  RemoteBackend,
  LocalBackend,
} from "cdktf";
import * as NullProvider from "./.gen/providers/null";
import * as local from "./.gen/providers/local";
import { RandomProvider, Password } from "./.gen/providers/random";
import * as path from "path";
const token = process.env.TERRAFORM_CLOUD_TOKEN;
const sourceName = process.env.TERRAFORM_CLOUD_SOURCE_WORKSPACE_NAME;
const consumerName = process.env.TERRAFORM_CLOUD_CONSUMER_WORKSPACE_NAME;
const organization = process.env.TERRAFORM_CLOUD_ORGANIZATION;
const sourceExecutionMode = process.env.TERRAFORM_CLOUD_SOURCE_EXECUTION_TYPE;
const consumerExecutionMode =
  process.env.TERRAFORM_CLOUD_CONSUMER_EXECUTION_TYPE;

export class SourceStack extends TerraformStack {
  public password: Password;

  constructor(scope: Construct, id: string) {
    super(scope, id);

    new NullProvider.NullProvider(this, "null", {});
    new RandomProvider(this, "random", {});
    new local.LocalProvider(this, "local", {});

    this.password = new Password(this, "password", {
      length: 32,
    });

    new local.File(this, "file", {
      filename: "../../../origin-file.txt",
      content: this.password.result,
    });

    const nullResouce = new NullProvider.Resource(this, "test", {});

    nullResouce.addOverride("provisioner", [
      {
        "local-exec": {
          command: `echo "hello deploy"`,
        },
      },
    ]);

    switch (sourceExecutionMode) {
      case "local":
        new LocalBackend(this);
        break;
      case "tfc-remote":
      case "tfc-local":
        new RemoteBackend(this, {
          token,
          organization: organization!,
          workspaces: {
            name: sourceName,
          },
        });
        break;
    }

    new TerraformOutput(this, "output", {
      value: "constant value",
    });

    const asset = new TerraformAsset(this, "asset-a", {
      path: path.resolve(__dirname, "fixtures/a.txt"),
    });

    new TerraformOutput(this, "isAssetPresent", {
      value: `\${fileexists("\${path.module}/${asset.path}") ? "yes" : "no"}`,
    });
  }
}

export class ConsumerStack extends TerraformStack {
  constructor(scope: Construct, id: string, password: Password) {
    super(scope, id);

    new local.LocalProvider(this, "local", {});

    switch (consumerExecutionMode) {
      case "local":
        new LocalBackend(this);
        break;
      case "tfc-remote":
      case "tfc-local":
        new RemoteBackend(this, {
          token,
          organization: organization!,
          workspaces: {
            name: consumerName,
          },
        });
        break;
    }

    new local.File(this, "file", {
      filename: "../../../consumer-file.txt",
      content: password.result,
    });
  }
}

const app = Testing.stubVersion(new App({}));
const source = new SourceStack(app, "source-stack");
new ConsumerStack(app, "consumer-stack", source.password);
app.synth();
