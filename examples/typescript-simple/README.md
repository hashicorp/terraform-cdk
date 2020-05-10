# Typescript Simple

A simple CDK for Terraform application in Typescript.

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

```bash
vim main.ts
import { Construct, Token } from 'constructs';
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
  }
}

const app = new App({ outdir: 'cdk.out' });
new HelloTerra(app, 'hello-terra');
app.synth();
```

Compile the Typescript application

```bash
tsc
```

Generate Terraform configuration

```bash
cdktf synth
```

The above command will create a folder called `dist` that contains all Terraform JSON configuration that was generated.

Run Terraform commands

```bash
cd dist
terraform init
terraform plan
terraform apply
```
