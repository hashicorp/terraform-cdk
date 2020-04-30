import { Construct } from 'constructs';
import { App, TerraformStack } from 'cdktf';
import { Eks } from './.gen/modules/terraform-aws-modules/eks/aws';
import { Vpc } from './.gen/modules/terraform-aws-modules/vpc/aws';
import { DynamodbTable } from './.gen/providers/aws/dynamodb-table';
import { SnsTopic } from './.gen/providers/aws/sns-topic';

export class HelloTerra extends TerraformStack {
  constructor(scope: Construct, id: string) {
    super(scope, id);

    const table = new DynamodbTable(this, 'Hello', {
      name: 'my-first-table',
      hashKey: 'temp',
      attribute: [
        { name: 'id', type: 'S' }
      ]
    });

    table.addOverride('hash_key', 'id')
    table.addOverride('lifecycle', { create_before_destroy: true })

    new SnsTopic(this, 'Topic', {
      displayName: 'my-first-sns-topic'
    });

    new Eks(this, 'EksModule', {
      clusterName: 'myClusterName',
      permissionsBoundary: 'boom',
      subnets: ['a', 'b'],
      vpcId: 'vpc'
    });

    new Vpc(this, 'MyVpc', {
      cidr: "10.0.0.0/16"
    });
  }
}

const app = new App({ outdir: 'cdk.out' });
new HelloTerra(app, 'hello-terra');
app.synth();