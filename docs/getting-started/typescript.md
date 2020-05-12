# Getting started with TypeScript

## Prerequisites

- [Terraform](https://www.terraform.io/downloads.html) >= v0.12
- [Node.js](https://nodejs.org) >= v12.16
- [Yarn](https://yarnpkg.com/en/docs/install) >= v1.21

**Install CDK for Terraform CLI**

```bash
npm install -g cdktf-cli
```

Learn more how to use the cdktf command-line interface [here](./docs/cli-commands.md).

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
import { Instance } from './.gen/providers/aws/instance';

class MyStack extends TerraformStack {
  constructor(scope: Construct, id: string) {
    super(scope, id);

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

**Compile Application**

You can now compile the application by running `npm run compile` or `yarn compile`.

```bash
yarn compile
```

This will compile TypeScript to Javascript.

**Synthesize Application**

When you are ready you can run the `synthesize` command to generate Terraform JSON configuration for the application.

```bash
cdktf synth
```

```bash
Generating Terraform code in the output directory: "dist/"
```

This command will generate a directory called `dist`. This directory contains the Terraform JSON configuration for
your application.

```bash
cd dist
```

AWS Instance expressed as Terraform JSON configuration.

```json
cat hello-terraform.tf.json
{
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

Terraform AWS provider expressed as Terraform JSON configuration.

```json
cat providers.tf.json
{
  "terraform": {
    "required_providers": {
      "aws": "~> 2.0"
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
