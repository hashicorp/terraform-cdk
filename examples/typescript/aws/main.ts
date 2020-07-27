import { Construct } from 'constructs';
import { App, TerraformStack, TerraformOutput } from 'cdktf';
import { DynamodbTable } from './.gen/providers/aws/dynamodb-table';
import { SnsTopic } from './.gen/providers/aws/sns-topic';
import { DataAwsRegion, AwsProvider } from './.gen/providers/aws'

export class HelloTerra extends TerraformStack {
  constructor(scope: Construct, id: string) {
    super(scope, id);

    new AwsProvider(this, 'aws', {
      region: 'eu-central-1'
    })

    const region = new DataAwsRegion(this, 'region')

    const table = new DynamodbTable(this, 'Hello', {
      name: `my-first-table-${region.name}`,
      hashKey: 'temp',
      attribute: [
        { name: 'id', type: 'S' },
      ],
      billingMode: "PAY_PER_REQUEST"
    });

    table.addOverride('hash_key', 'id')
    // table.addOverride('hash_key', 'foo')
    table.addOverride('lifecycle', { create_before_destroy: true })

    const topicCount = 1
    const topics = [...Array(topicCount).keys()].map((i) => {
      return new SnsTopic(this, `Topic${i}`, {
        displayName: `my-first-sns-topic${i}`
      });
    })

    new TerraformOutput(this, 'table_name', {
      value: table.name
    })

    topics.forEach((topic, i) => {
      new TerraformOutput(this, `sns_topic${i}`, {
        value: topic.name
      })
    })
  }
}

const app = new App();
new HelloTerra(app, 'hello-terra');
app.synth();