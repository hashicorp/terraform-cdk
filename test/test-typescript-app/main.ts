import { Construct } from 'constructs';
import { App, TerraformStack } from 'cdktf';
import { SnsTopic } from './.gen/providers/aws/sns-topic';

export class HelloTerra extends TerraformStack {
  constructor(scope: Construct, id: string) {
    super(scope, id);

    new SnsTopic(this, 'Topic', {
      displayName: 'topic',
      escapeHatch: {
        provider: "aws",
        lifecycle: {
          create_before_destroy: true
        }
      }
    });
  }
}

const app = new App({});
new HelloTerra(app, 'hello-terra');
app.synth();