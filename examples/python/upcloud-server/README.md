# python-upcloud-server

A CDK for Terraform application in Python to create a server with UpCloud CDK for Terraform provider.

To get started with this example, you need to:

- [Install `pipenv` and project dependencies](#install-pipenv-and-project-dependencies)
- [Configure your UpCloud credentials](#configure-your-upcloud-credentials)
- [Deploy the example stack](#deploy-the-example-stack)

## Install `pipenv` and project dependencies

First, if you do not have `pipenv` installed on your system, install it with `pip install --user pipenv`. See [pipenv website](https://pipenv.pypa.io/en/latest/) for alternative installation methods.

```sh
pip install --user pipenv
```

Then, to install the project dependencies, run `pipenv install`.

```sh
pipenv install
```

Finally, generate CDK for Terraform constructs for Terraform providers and modules used in the project by running `cdktf get`.

```sh
cdktf get
```

See also [repository](https://github.com/cdktf/cdktf-provider-upcloud.git) with pre-built UpCloud CDK for Terraform provider.

## Configure your UpCloud credentials

This example project looks for UpCloud credentials in `UPCLOUD_USERNAME` and `UPCLOUD_PASSWORD` environment variables, similarly than UpCloud Terraform provider. Configure these environment variables, for example, by sourcing a file that contains suitable `export` commands.

```sh
. upcloud-credentials.sh
```

Example credential file content:

```sh
# upcloud-credentials.sh
export UPCLOUD_USERNAME="your-username"
export UPCLOUD_PASSWORD="your-password"
```

## Deploy the example stack

To deploy our stack defined in [main.py](./main.py), run `cdktf deploy`.

```sh
# With one-time password delivered to your email
cdktf deploy

# With ssh-key
PUBLIC_KEY_PATH=$(ls ~/.ssh/*.pub) cdktf deploy
```

After the server has been deployed, you can use `example` username and `server_ip` stack output value to SSH into the server.

If you want to cleanup the created resources, run `cdktf destroy` to destroy the stack.

```sh
cdktf destroy
```
