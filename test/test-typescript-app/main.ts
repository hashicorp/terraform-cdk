import { Construct } from 'constructs';
import { App, TerraformStack } from 'cdktf';
import { SnsTopic } from './.gen/providers/aws/sns-topic';

export class HelloTerra extends TerraformStack {
  constructor(scope: Construct, id: string) {
    super(scope, id);

    const topic = new SnsTopic(this, 'Topic', {
      displayName: 'overwritten',
    });
    topic.addOverride('display_name', 'topic')
    topic.addOverride('provider', 'aws')
    topic.addOverride('lifecycle', {create_before_destroy: true})
  }
}

const app = new App({});
new HelloTerra(app, 'hello-terra');
app.synth();