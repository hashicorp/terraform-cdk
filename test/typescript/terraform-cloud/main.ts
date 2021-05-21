import { Construct } from 'constructs';
import { App, TerraformStack, Testing, TerraformOutput } from 'cdktf';
import * as NullProvider from './.gen/providers/null';
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
  }
}

const app = Testing.stubVersion(new App({}));
new HelloTerra(app, 'hello-terra');
app.synth();