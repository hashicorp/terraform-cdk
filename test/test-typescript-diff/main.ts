import { Construct } from 'constructs';
import { App, TerraformStack, Testing  } from 'cdktf';
import * as NullProvider from './.gen/providers/null';

export class HelloTerra extends TerraformStack {
  constructor(scope: Construct, id: string) {
    super(scope, id);

    const nullResouce = new NullProvider.Resource(this, 'test', {})

    nullResouce.addOverride('provisioner', [{
      'local-exec': {
        command: `echo "hello diff"`
      }
    }]);
  }
}

const app = Testing.stubVersion(new App({}));
new HelloTerra(app, 'hello-diff');
app.synth();