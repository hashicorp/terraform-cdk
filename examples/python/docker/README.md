# Python-Docker

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

```
#!/usr/bin/env python
from constructs import Construct
from cdktf import App, TerraformStack
from imports.docker import Image, Container


class MyStack(TerraformStack):
    def __init__(self, scope: Construct, ns: str):
        super().__init__(scope, ns)

        docker_image = Image(self, 'nginx-latest', name='nginx:latest', keep_locally=False)

        Container(self, 'nginx-cdktf', name='nginx-python-cdktf',
                  image=docker_image.name, ports=[
                      {
                          'internal': 80,
                          'external': 8000
                      }], privileged=False)


app = App()
MyStack(app, "python-docker")

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
