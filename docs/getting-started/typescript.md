# Getting started with TypeScript

> **Hands-on:** Try the [Build AWS Infrastructure with TypeScript](https://learn.hashicorp.com/tutorials/terraform/cdktf-build?in=terraform/cdktf) tutorial on HashiCorp Learn.

## Prerequisites

- [Terraform](https://www.terraform.io/downloads.html) >= v0.12
- [Node.js](https://nodejs.org) >= v12.16
- [Yarn](https://yarnpkg.com/en/docs/install) >= v1.21 (optional - NPM will work as an alternative)

**Install CDK for Terraform CLI**

```bash
npm install -g cdktf-cli
```

Learn more how to use the cdktf command-line interface [here](../cli-commands.md).

**Initialize a new CDK for Terraform project**

```bash
mkdir hello-terraform
cd hello-terraform
cdktf init --template="typescript" --local
```

This will initialize a brand new CDK for Terraform project in TypeScript using an interactive command.

```bash
Note: By supplying '--local' option you have chosen local storage mode for storing the state of your stack.
This means that your Terraform state file will be stored locally on disk in a file 'terraform.tfstate' in the root of your project.

We will now set up the project. Please enter the details for your project.
If you want to exit, press ^C.

Project Name: (default: 'hello-terraform')
Project Description: (default: 'A simple getting started project for cdktf.')
```

Also, this command installs the `cdktf` library so that it can be used in the project.

**CDK for Terraform Application**

You can now open up the `main.ts` file to view your application code.

```bash
vim main.ts
```

```typescript
import { Construct } from "constructs";
import { App, TerraformStack } from "cdktf";

class MyStack extends TerraformStack {
  constructor(scope: Construct, name: string) {
    super(scope, name);

    // define resources here
  }
}

const app = new App();
new MyStack(app, "hello-terraform");
app.synth();
```

Refer to the [examples](../../examples/) directory for additional examples.

Let's take a simple TypeScript application that uses the CDK for Terraform package.

```typescript
import { Construct } from "constructs";
import { App, TerraformStack } from "cdktf";
import { AwsProvider, EC2 } from "./.gen/providers/aws";

class MyStack extends TerraformStack {
  constructor(scope: Construct, id: string) {
    super(scope, id);

    new AwsProvider(this, "aws", {
      region: "us-east-1",
    });

    new EC2.Instance(this, "Hello", {
      ami: "ami-2757f631",
      instanceType: "t2.micro",
    });
  }
}

const app = new App();
new MyStack(app, "hello-terraform");
app.synth();
```

## Using Terraform Providers

As you can see in the example above we want to deploy AWS resources, therefore we need to use the [Terraform AWS Provider](https://registry.terraform.io/providers/hashicorp/aws/latest/docs). Every [Terraform Provider](https://registry.terraform.io/browse/providers) and [Terraform Module](https://registry.terraform.io/browse/modules) can be used with the workflow described here.

You specify it in your local `cdktf.json` file, like this:

```jsonc
{
  "language": "typescript",
  "app": "npm run --silent compile && node main.js",
  "terraformProviders": [
    // Terraform Providers with version constraint go here
    "aws@~> 3.45"
  ],
  "terraformModules": [
    // Terraform Modules with version constraint go here
  ],
  "context": {
    "excludeStackIdFromLogicalIds": "true"
  }
}
```

Next you need to run `cdktf get` which generates provider-specific bindings.
To save some time you can also use pre-built providers, please visit the ["Using Providers"-Guide](../working-with-cdk-for-terraform/using-providers.md) for more on that topic.

**Synthesize Application**

When you are ready you can run the `synthesize` command to generate Terraform JSON configuration for the application.
Running the command will compile the application `npm run compile` in the background for
you which will compile TypeScript to Javascript.

```bash
cdktf synth
```

```bash
Generated Terraform code in the output directory: cdktf.out
```

This command will generate a directory called `cdktf.out`. This directory contains the Terraform JSON configuration for
your application. The Terraform config for your stack `hello-terraform` will be in `cdktf.out/stacks/hello-terraform`.

```bash
cd cdktf.out/stacks/hello-terraform
```

Terraform AWS provider and Instance expressed as Terraform JSON configuration.

```json
cat cdk.tf.json
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

> Note: You can generate the Terraform JSON configuration while synthesizing the code by running `cdktf synth --json`.

**Deploy Application**

> Note: You can use Terraform commands like `terraform init`, `terraform plan`, and `terraform apply` with the generated
> Terraform JSON configuration (learn more [here](../working-with-cdk-for-terraform/synthesizing-config.md)) or optionally continue to use the CDK for Terraform CLI for a first-class experience.

You can now deploy your CDK for Terraform application using the `cdktf deploy` command.

```bash
cdktf deploy
```

This command will ask for confirmation on a generated diff and then deploy the application.

```bash
Stack: helloterraform
Resources
 + AWS_INSTANCE         Hello aws_instance.helloterraform_Hello_19940A68

Diff: 1 to create, 0 to update, 0 to delete.
Do you want to continue (Y/n)? y
```

Deployed application

```bash
Deploying Stack: helloterraform
Resources
 ✔ AWS_INSTANCE         Hello aws_instance.helloterraform_Hello_19940A68

Summary: 1 created, 0 updated, 0 destroyed.
```

The `cdktf deploy` command runs a `terraform apply` in the background. If you are using local storage mode then it creates a `terraform.tfstate` file in the root of the project.

**Destroy Application**

You can destroy the application by running `cdktf destroy`.

```bash
cdktf destroy
```

This command will ask for confirmation on a generated diff and then destroy the application if
the user confirms that they want to continue with the destroy operation.

```bash
Stack: helloterraform
Resources
 - AWS_INSTANCE         hello aws_instance.helloterraform_Hello_19940A68

Diff: 0 to create, 0 to update, 1 to delete.
Do you want to continue (Y/n)?
```

Destroyed application

```bash
Destroying Stack: helloterraform
Resources
 ✔ AWS_INSTANCE         hello aws_instance.helloterraform_Hello_19940A68

Summary: 1 destroyed.
```
