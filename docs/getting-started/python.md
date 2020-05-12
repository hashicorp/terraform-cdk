# Getting Started with Python

## Prerequisites

- [Terraform](https://www.terraform.io/downloads.html) >= v0.12
- [Pipenv](https://pipenv.pypa.io/en/latest/)
  Install Pipenv using Homebrew by running:
  
  ```bash
  $ brew install pipenv
  ```

### Install CDK for Terraform CLI

```bash
npm install -g cdktf-cli
```

Learn more how to use the cdktf command-line interface [here](./docs/cli-commands.md).

## Initialize a new CDK for Terraform project

```bash
mkdir hello-terraform
cd hello-terraform
cdktf init --template="python"
```

This will initialize a brand new CDK for Terraform project in Python. Also, install the `cdktf` library so that it can be used in the project.

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

If you want to use already built examples. Please go to the [examples/](./examples/) directory.

Let's take a simple Python application that uses the CDK for Terraform package.

```python
#!/usr/bin/env python
from constructs import Construct
from cdktf import App, TerraformStack
from imports.aws import Instance

class MyStack(TerraformStack):
    def __init__(self, scope: Construct, ns: str):
        super().__init__(scope, ns)

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
Generating Terraform code in the output directory: "dist/"
```

This command will generate a directory called `dist`. This directory contains the Terraform JSON configuration for
the application.

```bash
cd dist
```

AWS instance expressed as Terraform JSON configuration.

```json
cat helloterraform.json
{
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

## Apply Configuration

You can now run Terraform commands to apply the given configuration.

```bash
terraform init
terraform plan
terraform apply
```
