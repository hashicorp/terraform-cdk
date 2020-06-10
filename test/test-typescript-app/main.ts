import { Construct } from 'constructs';
import { App, TerraformStack, TerraformOutput, Testing } from 'cdktf';
import { AwsProvider, SnsTopic } from './.gen/providers/aws';

export class HelloTerra extends TerraformStack {
  constructor(scope: Construct, id: string) {
    super(scope, id);

    new AwsProvider(this, 'aws', {
      region: 'eu-central-1',
      ignoreTags: [
        {
          keys: ["foo"],
        }
      ]
    })

    const topic = new SnsTopic(this, 'Topic', {
      displayName: 'overwritten',
    });
    topic.addOverride('display_name', 'topic')
    topic.addOverride('provider', 'aws')
    topic.addOverride('lifecycle', {create_before_destroy: true})

    new TerraformOutput(this, 'sns-topic-arn', {
      value: topic.arn
    })

    this.addOverride('terraform.backend', {
      remote: {
        organization: 'test',
        workspaces: {
          name: 'test'
        }
      }
    });
  }
}

const app = Testing.stubVersion(new App({stackTraces: false}));
new HelloTerra(app, 'hello-terra');
app.synth();