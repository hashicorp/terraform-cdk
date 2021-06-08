# Getting Started with Python

> **Hands-on:** Try the [Build AWS Infrastructure with Python](https://learn.hashicorp.com/tutorials/terraform/cdktf-build-python?in=terraform/cdktf) tutorial on HashiCorp Learn.
## Prerequisites

- [Terraform](https://www.terraform.io/downloads.html) >= v0.12
- [Node.js](https://nodejs.org) >= v12.16
- [Python](https://www.python.org/downloads/) >= v3.7

### Install CDK for Terraform CLI

Install with [Homebrew](https://brew.sh):

```shell
$ brew install cdktf
```
Or install with `npm` (comes with [Node.js](https://nodejs.org)):

```bash
npm install -g cdktf-cli
```

Learn more how to use the cdktf command-line interface [here](../cli-commands.md).

## Initialize a new CDK for Terraform project

```bash
mkdir hello-terraform
cd hello-terraform
```

There are two Python templates available that you can choose from.
The `python` template uses `Pipenv` for package management wheras the
`python-pip` template just uses `pip` with a simple `requirements.txt` file.

Here's how to choose between the two

### pipenv

Note: Make sure [Pipenv](https://pipenv.pypa.io/en/latest/install/#installing-pipenv/) is installed.

```bash
cdktf init --template="python" --local
```

### pip
```bash
cdktf init --template="python-pip" --local
```

This will initialize a brand new CDK for Terraform project in Python using an interactive command.

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

You can now open up the `main.py` file to view your application code.

```bash
vim main.py
```

```python
#!/usr/bin/env python
from constructs import Construct
from cdktf import App, TerraformStack


class MyStack(TerraformStack):
    def __init__(self, scope: Construct, ns: str):
        super().__init__(scope, ns)

        # define resources here


app = App()
MyStack(app, "hello-terraform")

app.synth()
```

Refer to the [examples](../../examples/) directory for additional examples.

Let's take a simple Python application that uses the CDK for Terraform package.

```python
#!/usr/bin/env python
from constructs import Construct
from cdktf import App, TerraformStack
from imports.aws import Instance, AwsProvider


class MyStack(TerraformStack):
  def __init__(self, scope: Construct, ns: str):
    super().__init__(scope, ns)

    AwsProvider(self, 'Aws', region='us-east-1')
    Instance(self, "hello", ami="ami-2757f631", instance_type="t2.micro")

app = App()
MyStack(app, "hello-terraform")

app.synth()
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
      "examplepythonhello3532B955": {
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
 + AWS_INSTANCE         hello aws_instance.helloterraform_hello_A790281A

Diff: 1 to create, 0 to update, 0 to delete.
Do you want to continue (Y/n)? y
```

Deployed application

```bash
Deploying Stack: helloterraform
Resources
 ✔ AWS_INSTANCE         hello aws_instance.helloterraform_hello_A790281A

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
 - AWS_INSTANCE         hello aws_instance.helloterraform_hello_A790281A

Diff: 0 to create, 0 to update, 1 to delete.
Do you want to continue (Y/n)?
```

Destroyed application

```bash
Destroying Stack: helloterraform
Resources
 ✔ AWS_INSTANCE         hello aws_instance.helloterraform_hello_A790281A

Summary: 1 destroyed.
```
