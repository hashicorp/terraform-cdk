# Getting started with TypeScript

## Prerequisites

- [Terraform](https://www.terraform.io/downloads.html) >= v0.12
- [Node.js](https://nodejs.org) >= v12.16
- [Yarn](https://yarnpkg.com/en/docs/install) >= v1.21

**Install CDK for Terraform CLI**

```bash
npm install -g cdktf-cli
```

Learn more how to use the cdktf command-line interface [here](../cli-commands.md).

**Initialize a new CDK for Terraform project**

```bash
mkdir hello-terraform
cd hello-terraform
cdktf init --template="typescript"
```

This will initialize a brand new CDK for Terraform project in TypeScript. Also, install the `cdktf` library so that it can be used in the project.

**CDK for Terraform Application**

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
new MyStack(app, 'hello-terraform');
app.synth();
```

Refer to the [examples/](./examples/) directory for additional examples.

Let's take a simple TypeScript application that uses the CDK for Terraform package.

```typescript
import { Construct } from 'constructs';
import { App, TerraformStack } from 'cdktf';
import { AwsProvider, Instance } from './.gen/providers/aws';

class MyStack extends TerraformStack {
  constructor(scope: Construct, id: string) {
    super(scope, id);

    new AwsProvider(this, 'aws', {
      region: 'us-east-1'
    });

    new Instance(this, 'Hello', {
      ami: "ami-2757f631",
      instanceType: "t2.micro"
    });
  }
}

const app = new App();
new MyStack(app, 'hello-terraform');
app.synth();
```

**Synthesize Application**

When you are ready you can run the `synthesize` command to generate Terraform JSON configuration for the application.
Running the command will compile the application `npm run compile` or `yarn compile` in the background for
you which will compile TypeScript to Javascript.

```bash
cdktf synth
```

```bash
Generating Terraform code in the output directory: "cdktf.out/"
```

This command will generate a directory called `cdktf.out`. This directory contains the Terraform JSON configuration for
your application.

```bash
cd cdktf.out
```

Terraform AWS provider and Instance expressed as Terraform JSON configuration.

```json
cat cdktf.out/example.tf.json
{
  "terraform": {
    "required_providers": {
      "aws": "~> 2.0"
    }
  },
  "provider": {
    "aws": [
      {
        "region": "us-east-1"
      }
    ]
  },
  "resource": {
    "aws_instance": {
      "examplesimpleHelloF6D4983C": {
        "ami": "ami-2757f631",
        "instance_type": "t2.micro"
      }
    }
  }
}
```

**Apply Configuration**

You can now run Terraform commands to apply the given configuration.

```bash
terraform init
terraform plan
terraform apply
```
