A simple example GCP cloud function built using cdktf python template

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

- Create a service account with following roles:

```
Project Editor + cloud functions admin
(or)
Project Owner
```

- Update the gcp project name in main.py

- set the following environment variable to get the terraform authenticated to GCP.

```bash
export GOOGLE_APPLICATION_CREDENTIALS=/path/to/serviceaccount/key.json
```

Verify the resources that are going to be created.

```bash
cdktf plan
```

Deploy the resources

```bash
cdktf deploy
```
