# typescript-aws

A CDK for Terraform application in TypeScript.

## Usage

Install project dependencies

```shell
yarn install
```

Generate CDK for Terraform constructs for Terraform provides and modules used in the project.

```bash
cdktf get
```

You can now edit the `main.ts` file if you want to modify any code.

```typescript
vim main.ts
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
```

Compile the TypeScript application

```bash
tsc
```

Generate Terraform configuration

```bash
cdktf synth
```

The above command will create a folder called `cdktf.out` that contains all Terraform JSON configuration that was generated.

Run cdktf-cli commands

```bash
cdktf diff
cdktf deploy
```
