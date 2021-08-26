import { Construct } from "constructs";
import {
  App,
  TerraformStack,
  Testing,
  TerraformAsset,
  TerraformOutput,
} from "cdktf";
import * as NullProvider from "./.gen/providers/null";
import * as path from "path";
const token = process.env.TERRAFORM_CLOUD_TOKEN;
const name = process.env.TERRAFORM_CLOUD_WORKSPACE_NAME;
const organization = process.env.TERRAFORM_CLOUD_ORGANIZATION;
const localExecution = process.env.TF_EXECUTE_LOCAL === "true";

export class HelloTerra extends TerraformStack {
  constructor(scope: Construct, id: string) {
    super(scope, id);
    new NullProvider.NullProvider(this, "null", {});

    const nullResouce = new NullProvider.Resource(this, "test", {});

    nullResouce.addOverride("provisioner", [
      {
        "local-exec": {
          command: `echo "hello deploy"`,
        },
      },
    ]);

    if (!localExecution) {
      this.addOverride("terraform.backend", {
        remote: {
          organization,
          workspaces: {
            name,
          },
          token,
        },
      });
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

const app = Testing.stubVersion(new App({}));
new HelloTerra(app, "hello-terra");
app.synth();
