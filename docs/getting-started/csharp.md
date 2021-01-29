# Getting Started with C#

## Prerequisites

- [Terraform](https://www.terraform.io/downloads.html) >= v0.12
- [Node.js](https://nodejs.org) >= v12.16
- [.NET](https://dotnet.microsoft.com/download) >= Core 3.1

### Install CDK for Terraform CLI

Install with [Homebrew](https://brew.sh):

```shell
$ brew install cdktf
```
Or install with npm (requires [Node.js](https://nodejs.org)):

```bash
npm install -g cdktf-cli
```

Learn more how to use the cdktf command-line interface [here](../cli-commands.md).

## Initialize a new CDK for Terraform project

```bash
mkdir hello-terraform
cd hello-terraform
```

**Initialize a new CDK for Terraform project**

```bash
mkdir hello-terraform
cd hello-terraform
cdktf init --template="csharp" --local
```

This will initialize a brand new CDK for Terraform project in C# using an interactive command.

```bash
Note: By supplying '--local' option you have chosen local storage mode for storing the state of your stack.
This means that your Terraform state file will be stored locally on disk in a file 'terraform.tfstate' in the root of your project.

We will now set up the project. Please enter the details for your project.
If you want to exit, press ^C.

Project Name: (default: 'hello-terraform')
Project Description: (default: 'A simple getting started project for cdktf.')
```

Also, this command installs the `cdktf` library so that it can be used in the project.

## CDK for Terraform Application

You can now open up the `Main.cs` file to view your application code.

```bash
vim Main.c
```

```csharp
using System;
using Constructs;
using HashiCorp.Cdktf;


namespace MyCompany.MyApp
{
    class MyApp : TerraformStack
    {
        public MyApp(Construct scope, string id) : base(scope, id)
        {
            // define resources here
        }

        public static void Main(string[] args)
        {
            App app = new App();
            new MyApp(app, "hello-terraform");
            app.Synth();
            Console.WriteLine("App synth complete");
        }
    }
}
```

Refer to the [examples](../../examples/) directory for additional examples.

Let's take a simple .NET application that uses the CDK for Terraform package.

```csharp
using System;
using Constructs;
using HashiCorp.Cdktf;

using aws;


namespace MyCompany.MyApp
{
    class MyApp : TerraformStack
    {
        public MyApp(Construct scope, string id) : base(scope, id)
        {
            new AwsProvider(this, "AWS", new AwsProviderConfig {
              Region = "us-east-1"
            });

            new Instance(this, "hello", new InstanceConfig {
              Ami = "ami-2757f631",
              InstanceType = "t2.micro"
            });
        }

        public static void Main(string[] args)
        {
            App app = new App();
            new MyApp(app, "hello-terraform");
            app.Synth();
            Console.WriteLine("App synth complete");
        }
    }
}
```

## Synthesize Application

When you are ready you can run the `synthesize` command to generate Terraform JSON configuration for the application.

```bash
cdktf synth
```

```bash
Generated Terraform code in the output directory: cdktf.out
```

This command will generate a directory called `cdktf.out`. This directory contains the Terraform JSON configuration for
the application.

```bash
cd cdktf.out
```

Terraform AWS provider and instance expressed as Terraform JSON configuration.

```json
cat cdk.json
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
      "hello": {
        "ami": "ami-2757f631",
        "instance_type": "t2.micro"
      }
    }
  }
}
```

> Note: You can generate the Terraform JSON configuration while synthesizing the code by running `cdktf synth --json`.

## Deploy Application

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
 + AWS_INSTANCE         hello aws_instance.hello

Diff: 1 to create, 0 to update, 0 to delete.
Do you want to continue (Y/n)? y
```

Deployed application

```bash
Deploying Stack: helloterraform
Resources
 ✔ AWS_INSTANCE         hello aws_instance.hello

Summary: 1 created, 0 updated, 0 destroyed.
```

The `cdktf deploy` command runs a `terraform apply` in the background. If you are using local storage mode then it creates a `terraform.tfstate` file in the root of the project.

## Destroy Application

You can destroy the application by running `cdktf destroy`.

```bash
cdktf destroy
```

This command will ask for confirmation on a generated diff and then destroy the application if
the user confirms that they want to continue with the destroy operation.

```bash
Stack: helloterraform
Resources
 - AWS_INSTANCE         hello aws_instance.hello

Diff: 0 to create, 0 to update, 1 to delete.
Do you want to continue (Y/n)?
```

Destroyed application

```bash
Destroying Stack: helloterraform
Resources
 ✔ AWS_INSTANCE         hello aws_instance.hello

Summary: 1 destroyed.
```
