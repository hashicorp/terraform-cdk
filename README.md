# CDK for Terraform

> This experimental repository contains software which is still being developed
> and in the alpha testing stage. It is not ready for production use.

CDK (Cloud Development Kit) for Terraform allows developers to use familiar
programming languages to define cloud infrastructure and provision it through
HashiCorp Terraform.

![](https://github.com/hashicorp/terraform-cdk/workflows/Build/badge.svg?branch=master)

## Overview

The CDK for Terraform project helps users define infrastructure resources using their programming language of choice and generates a Terraform configuration in JSON that can be applied with `terraform apply`.

The CDK for Terraform project includes two packages:

* [cdktf-cli](./packages/cdktf-cli) - A CLI that allows users to run commands to initialize, import, and synthesize CDK for Terraform applications.
* [cdktf](./packages/cdktf-cli) - A library for defining Terraform resources using programming constructs.

## Prerequisites

- [Terraform](https://www.terraform.io/downloads.html) >= v0.12
- [Node.js](https://nodejs.org) >= v12.16
- [Yarn](https://yarnpkg.com/en/docs/install) >= v1.21

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
new MyStack(app, 'example');
app.synth();
```

**Compile Application**

You can now compile the application by running `npm run compile` or `yarn compile`.

```bash
yarn compile
```

This will compile Typescript to Javascript.

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
cat dist/example.tf.json
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
cat dist/providers.tf.json
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

## Building

Clone the project repository

```bash
git clone https://github.com/hashicorp/terraform-cdk.git
```

Download dependencies

```bash
cd terraform-cdk/
yarn install
```

Build the project and packages

```bash
yarn build
```

