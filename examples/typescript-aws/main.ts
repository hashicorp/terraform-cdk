import { Construct } from 'constructs';
import { App, TerraformStack, TerraformOutput } from 'cdktf';
import { DynamodbTable } from './.gen/providers/aws/dynamodb-table';
import { SnsTopic } from './.gen/providers/aws/sns-topic';
import { AwsProvider } from './.gen/providers/aws'

export class HelloTerra extends TerraformStack {
  constructor(scope: Construct, id: string) {
    super(scope, id);

    new AwsProvider(this, 'aws', {
      region: 'eu-central-1'
    })

    const table = new DynamodbTable(this, 'Hello', {
      name: 'my-first-table',
      hashKey: 'temp',
      attribute: [
        { name: 'id', type: 'S' },
      ],
      billingMode: "PAY_PER_REQUEST"
    });

    table.addOverride('hash_key', 'id')
    // table.addOverride('hash_key', 'foo')
    table.addOverride('lifecycle', { create_before_destroy: true })

    const sns = new SnsTopic(this, 'Topic', {
      displayName: 'my-first-sns-topic'
    });

    new TerraformOutput(this, 'table_name', {
      value: table.name
    })

    new TerraformOutput(this, 'sns_topic', {
      value: sns.name
    })
  }
}

const app = new App();
new HelloTerra(app, 'hello-terra');
app.synth();