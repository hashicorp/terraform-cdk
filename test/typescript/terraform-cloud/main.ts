import { Construct } from 'constructs';
import { App, TerraformStack, Testing, TerraformAsset, TerraformOutput } from 'cdktf';
import * as NullProvider from './.gen/providers/null';
import * as path from 'path';
const token = process.env.TERRAFORM_CLOUD_TOKEN;
const name = process.env.TERRAFORM_CLOUD_WORKSPACE_NAME;
const organization = process.env.TERRAFORM_CLOUD_ORGANIZATION;

export class HelloTerra extends TerraformStack {
  constructor(scope: Construct, id: string) {
    super(scope, id);

    const nullResouce = new NullProvider.Resource(this, 'test', {})

    nullResouce.addOverride('provisioner', [{
      'local-exec': {
        command: `echo "hello deploy"`
      }
    }, {
      'remote-exec': {
        command: `cat ./asset-a/a.txt`
      }
    }]);

    this.addOverride('terraform.backend', {
      remote: {
        organization,
        workspaces: {
          name
        },
        token
      }
    });

    new TerraformOutput(this, "output", {
      value: "constant value"
    })

    new TerraformAsset(this, "asset-a", {
      path: path.resolve(__dirname, "fixtures/a.txt")
    })
  }
}

const app = Testing.stubVersion(new App({}));
new HelloTerra(app, 'hello-terra');
app.synth();