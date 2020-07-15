import { Construct } from 'constructs';
import { App, TerraformStack, Testing  } from 'cdktf';
import * as NullProvider from './.gen/providers/null';
const token = process.env.TERRAFORM_CLOUD_TOKEN;

console.log('token', token);

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
        organization: 'cdktf-team',
        workspaces: {
          name: 'test'
        },
        token: token
      }
    });
  }
}

const app = Testing.stubVersion(new App({}));
new HelloTerra(app, 'hello-terra');
app.synth();