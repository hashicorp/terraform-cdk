# python-ucloud

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

```bash
cdktf synth
```

The above command will create a folder called `cdktf.out` that contains all Terraform JSON configuration that was generated.

```bash
cdktf deploy
```

Deploy the stack!
