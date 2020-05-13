import { Construct } from 'constructs';
import { App, TerraformStack, Token } from 'cdktf';
import { Eks } from './.gen/modules/terraform-aws-modules/eks/aws';
import { Vpc } from './.gen/modules/terraform-aws-modules/vpc/aws';
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
        { name: 'id', type: 'S' }
      ]
    });

    table.addOverride('hash_key', 'id')
    table.addOverride('lifecycle', { create_before_destroy: true })

    new SnsTopic(this, 'Topic', {
      displayName: 'my-first-sns-topic'
    });

    const vpcName = 'MyVpc';
    const vpc = new Vpc(this, vpcName, {
      name: vpcName,
      cidr: "10.0.0.0/16",
      azs: ["us-east-1a", "us-east-1b"],
      publicSubnets: ["10.0.1.0/24", "10.0.2.0/24"]
    });

    new Eks(this, 'EksModule', {
      clusterName: 'myClusterName',
      permissionsBoundary: 'boom',
      vpcId: vpc.vpcIdOutput,
      subnets: Token.asList(vpc.publicSubnetsOutput)
    });

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

const app = new App();
new HelloTerra(app, 'hello-terra');
app.synth();