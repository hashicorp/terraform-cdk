# python-aws

A CDK for Terraform application in Python.

## Usage

Install Pipenv using Homebrew by running:

```bash
$ brew install pipenv
```

You can install Pipenv by visiting the [website](https://pipenv.pypa.io/en/latest/).

Install project dependencies

```shell
pipenv install
```

Generate CDK for Terraform constructs for Terraform providers and modules used in the project.

```bash
cdktf get
```

You can now edit the `main.py` file if you want to modify any code.

```python
vim main.py
#!/usr/bin/env python
from constructs import Construct
from cdktf import App, TerraformStack
from imports.aws import SnsTopic, AwsProvider
from imports.terraform_aws_modules.vpc.aws import Vpc

class MyStack(TerraformStack):
    def __init__(self, scope: Construct, ns: str):
        super().__init__(scope, ns)

        AwsProvider(self, 'Aws', region='eu-central-1')

        Vpc(self, 'CustomVpc',
        name='custom-vpc',
        cidr='10.0.0.0/16',
        azs=["us-east-1a", "us-east-1b"],
        public_subnets=["10.0.1.0/24", "10.0.2.0/24"]
        )
        SnsTopic(self, 'Topic', display_name='my-first-sns-topic')

app = App()
MyStack(app, "python-aws")

app.synth()
```

Compile and generate Terraform configuration

```bash
cdktf synth
```

The above command will create a folder called `cdktf.out` that contains all Terraform JSON configuration that was generated.

Run cdktf-cli commands

```bash
cdktf diff
cdktf deploy
```
