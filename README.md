# CDK for Terraform

> This experimental repository contains software which is still being developed
> and in the alpha testing stage. It is not ready for production use.

CDK (Cloud Development Kit) for Terraform allows developers to use familiar
programming languages to define cloud infrastructure and provision it through
HashiCorp Terraform.

<<<<<<< HEAD
## Overview
=======
## NOTE: THE README IS OUT OF DATE. WE WILL BE UPDATING THIS SOON.
>>>>>>> master

The CDK for Terraform project helps users define infrastructure resources using their programming language of choice and generates a Terraform configuration in JSON that can be applied with `terraform apply`.

The CDK for Terraform project includes two packages:

* [cdktf-cli](./packages/cdktf-cli) - A CLI that allows users to run commands to initialize, import, and synthesize CDK for Terraform applications.
* [cdktf](./packages/cdktf-cli) - A library for defining Terraform resources using programming constructs.

## Prerequisites

- [Terraform](https://www.terraform.io/downloads.html) >= v.0.12
- [Node.js](https://nodejs.org) >= v12
- [Yarn](https://yarnpkg.com/en/docs/install) >= 1.21

## Usage

**Authenticate to GitHub packages**

The CDK for Terraform packages are hosted using GitHub packages. You will need your Github personal access token to download them.
Follow the guide [here](https://help.github.com/en/github/authenticating-to-github/creating-a-personal-access-token-for-the-command-line) to get a token. Make sure you give the token "read:packages" scope.

```bash
npm login --registry=https://npm.pkg.github.com
> Username: GITHUB_USERNAME
> Password: GITHUB_TOKEN
```

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
new MyStack(app, '{{ $base }}');
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

