import { Construct } from 'constructs';
import { App, TerraformStack } from 'cdktf';
import { Eks } from './.gen/modules/terraform-aws-modules/eks/aws';
import { Vpc } from './.gen/modules/terraform-aws-modules/vpc/aws';
import { DynamodbTable } from './.gen/providers/aws/dynamodb-table';
import { SnsTopic } from './.gen/providers/aws/sns-topic';
import { SecurityGroup } from './.gen/providers/aws/security-group'

export class HelloTerra extends TerraformStack {
  constructor(scope: Construct, id: string) {
    super(scope, id);

    const table = new DynamodbTable(this, 'Hello', {
      name: 'my-first-table',
      hashKey: 'id',
      attribute: [
        { name: 'id', type: 'S' }
      ]
    });


    new SnsTopic(this, 'Topic', {
      displayName: `${table.id}-${table.streamEnabled}`
    });

    new Eks(this, 'EksModule', {
      clusterName: 'myClusterName',
      permissionsBoundary: 'boom',
      subnets: ['a','b'],
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