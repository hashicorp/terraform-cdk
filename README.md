# CDK for Terraform

> This experimental repository contains software which is still being developed
> and in the alpha testing stage. It is not ready for production use.

CDK (Cloud Development Kit) for Terraform allows developers to use familiar
programming languages to define cloud infrastructure and provision it through
HashiCorp Terraform.

## Overview

The CDK for Terraform project helps users define infrastructure resources using their programming language of choice and generates a Terraform configuration in JSON that can be applied with `terraform apply`.

The CDK for Terraform project includes two packages:

* [cdktf-cli](./packages/cdktf-cli) - A CLI that allows users to run commands to initialize, import, and synthesize CDK for Terraform applications.
* [cdktf](./packages/cdktf-cli) - A library for defining Terraform resources using programming constructs.

## Prerequisites

- [Terraform](https://www.terraform.io/downloads.html) >= v.0.12
- [Node.js](https://nodejs.org) >= v12
- [Yarn](https://yarnpkg.com/en/docs/install) >= 1.21

## Build

## Usage

**Install CDK for Terraform CLI**

```bash
npm install -g cdktf-cli
```

**Initialize a new CDK for Terraform project**

```bash
mkdir hello-terraform
cd hello-terraform
cdktf init --template="typescript"
```

This will initialize a brand new CDK for Terraform project in Typescript. Also, install the `cdktf` library so that it can be used in the project.

**CDK for Terraform Application**

TODO: UPDATE THIS EXAMPLE TO HAVE VPC OR A SERVER.

You can now open up the `main.ts` file to view your application code.

```bash
vim main.ts
```

```typescript
import { Construct } from 'constructs';
import { App, TerraformStack } from 'cdktf';

class MyStack extends TerraformStack {
  constructor(scope: Construct, name: string) {
    super(scope, name);

    // define resources here

  }
}

const app = new App();
new MyStack(app, 'example');
app.synth();
```

If you want to use already built examples. Please go to the [examples/](./examples/) directory.

Let's take a simple Typescript application that uses the CDK for Terraform package.

```typescript
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

**Synthesize Application**

When you are ready you can run the `synthesize` command to generate Terraform JSON configuration for the application.

```bash
cdktf synth
```

This command will generate a directory called `cdk.out`. This directory contains the Terraform JSON configuration for
your application.

```bash
cd cdk.out
```

**Apply Configuration**

You can now run Terraform commands to apply the given configuration.

```bash
terraform init
terraform plan
terraform apply
```

