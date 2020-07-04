# Getting Started with Python

## Prerequisites

- [Terraform](https://www.terraform.io/downloads.html) >= v0.12
- [Node.js](https://nodejs.org) >= v12.16
- [Python](https://www.python.org/downloads/) >= v3.7
- [Pipenv](https://pipenv.pypa.io/en/latest/install/#installing-pipenv/)

### Install CDK for Terraform CLI

```bash
npm install -g cdktf-cli
```

Learn more how to use the cdktf command-line interface [here](../cli-commands.md).

## Initialize a new CDK for Terraform project

```bash
mkdir hello-terraform
cd hello-terraform
cdktf init --template="python" --local
```
This will initialize a brand new CDK for Terraform project in Python using an interactive command.

```bash

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

Refer to the [examples/](./examples/) directory for additional examples.

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
Generating Terraform code in the output directory: "cdktf.out/"
```

This command will generate a directory called `cdktf.out`. This directory contains the Terraform JSON configuration for
the application.

```bash
cd cdktf.out
```

Terraform AWS provider and instance expressed as Terraform JSON configuration.

```json
cat helloterraform.json
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

## Apply Configuration

You can now run Terraform commands to apply the given configuration.

```bash
terraform init
terraform plan
terraform apply
```
