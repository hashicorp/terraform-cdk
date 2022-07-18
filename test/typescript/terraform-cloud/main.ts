import { Construct } from "constructs";
import {
  App,
  TerraformStack,
  Testing,
  TerraformAsset,
  TerraformOutput,
  RemoteBackend,
  NamedRemoteWorkspace,
} from "cdktf";
import * as NullProvider from "./.gen/providers/null";
import * as local from "./.gen/providers/local";
import { RandomProvider, Password } from "./.gen/providers/random";
import * as path from "path";
const token = process.env.TERRAFORM_CLOUD_TOKEN;
const name = process.env.TERRAFORM_CLOUD_WORKSPACE_NAME;
const organization = process.env.TERRAFORM_CLOUD_ORGANIZATION;
const localExecution = process.env.TF_EXECUTE_LOCAL === "true";

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

    new NullProvider.Resource(this, "test", {
      provisioners: [
        {
          type: "local-exec",
          command: `echo "hello deploy"`,
        },
      ],
    });

    if (!localExecution) {
      new RemoteBackend(this, {
        organization: organization!,
        workspaces: new NamedRemoteWorkspace(name!),
        token,
      });
    }

    new TerraformOutput(this, "output", {
      value: "constant value",
    });

    new TerraformOutput(this, "password_output", {
      value: this.password.result,
      staticId: true,
      sensitive: true,
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
