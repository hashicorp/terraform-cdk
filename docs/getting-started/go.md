# Getting Started with Go

> **Hands-on:** Try the [Build AWS Infrastructure with Go](https://learn.hashicorp.com/tutorials/terraform/cdktf-build-go?in=terraform/cdktf) tutorial on HashiCorp Learn.
## Prerequisites

- [Terraform](https://www.terraform.io/downloads.html) >= v0.12
- [Node.js](https://nodejs.org) >= v12.16
- [Go](https://golang.org/dl/) >= 1.16 (CDK for Terraform uses [go modules](https://golang.org/doc/go1.11#modules) and JSII requires Go 1.16)

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

**Initialize a new CDK for Terraform project**

```bash
cdktf init --template="go" --local
```

This will initialize a brand new CDK for Terraform project in Go using an interactive command.

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

You can now open up the `main.go` file to view your application code.

```bash
vim main.go
```

```go
package main

import (
	"github.com/aws/constructs-go/constructs/v3"
	"github.com/hashicorp/terraform-cdk-go/cdktf"
)

func NewMyStack(scope constructs.Construct, id string) cdktf.TerraformStack {
	stack := cdktf.NewTerraformStack(scope, &id)

	// The code that defines your stack goes here

	return stack
}

func main() {
	app := cdktf.NewApp(nil)

	NewMyStack(app, "hello-terraform")

	app.Synth()
}
```

Refer to the [examples](../../examples/) directory for additional examples.

Let's take a simple Go application that uses the CDK for Terraform package.

```go
package main

import (
	"cdk.tf/go/stack/generated/kreuzwerker/docker"

	"github.com/aws/constructs-go/constructs/v3"
	"github.com/aws/jsii-runtime-go"
	"github.com/hashicorp/terraform-cdk-go/cdktf"
)

func NewMyStack(scope constructs.Construct, id string) cdktf.TerraformStack {
	stack := cdktf.NewTerraformStack(scope, &id)

	docker.NewDockerProvider(stack, jsii.String("provider"), &docker.DockerProviderConfig{})

	dockerImage := docker.NewImage(stack, jsii.String("nginxImage"), &docker.ImageConfig{
		Name:        jsii.String("nginx:latest"),
		KeepLocally: jsii.Bool(false),
	})

	docker.NewContainer(stack, jsii.String("nginxContainer"), &docker.ContainerConfig{
		Image: dockerImage.Latest(),
		Name:  jsii.String("tutorial"),
		Ports: &[]*docker.ContainerPorts{{
			Internal: jsii.Number(80), External: jsii.Number(8000),
		}},
	})

	return stack
}

func main() {
	app := cdktf.NewApp(nil)

	NewMyStack(app, "hello-terraform")

	app.Synth()
}
```

JSII [is using pointers](https://github.com/aws/aws-cdk-rfcs/blob/master/text/204-golang-bindings.md#optional-values-and-pointer-types)
to be able to represent an unset optional value as `nil`. Hence the helper functions `jsii.String()` and `jsii.Number()` are used
in the example to get pointers to the corresponding types which can are passed as inputs.

## Generating Go provider bindings
For the above example to work, we need to add the `kreuzwerker/docker` Terraform provider to the `cdktf.json`.

```json
{
    ...
    "terraformProviders": [
        "kreuzwerker/docker@~> 2.11"
    ],
    ...
}
```

After adding the provider and saving the file, we can run `cdktf get` to generate the bindings for the providers. By default the generated Go code will be output to the `generated` subdirectory.  

### Dependencies
The generated provider bindings depend on `jsii-runtime-go`. To automatically add that depedency to your code, you can run `go mod tidy`.

## Synthesize Application

When you are ready you can run the `synthesize` command to generate Terraform JSON configuration for the application.

```bash
cdktf synth
```

```bash
Generated Terraform code for the stacks: hello-terraform
```

This command will generate a directory called `cdktf.out`. This directory contains the Terraform JSON configuration for
the application.

```bash
cd cdktf.out
```

Terraform AWS provider and instance expressed as Terraform JSON configuration.

```json
cat stacks/hello-terraform/cdk.json # shortened for brevity
{
  "terraform": {
    "required_providers": {
      "docker": {
        "version": "~> 2.11",
        "source": "kreuzwerker/docker"
      }
    }
  },
  "provider": {
    "docker": [
      {}
    ]
  },
  "resource": {
    "docker_image": {
      "nginxImage": {
        "keep_locally": false,
        "name": "nginx:latest"
      }
    },
    "docker_container": {
      "nginxContainer": {
        "image": "${docker_image.nginxImage.latest}",
        "name": "tutorial",
        "ports": [
          {
            "external": 8000,
            "internal": 80
          }
        ]
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
Stack: hello-terraform
Resources
 + DOCKER_CONTAINER     nginxContainer      docker_container.nginxContainer
 + DOCKER_IMAGE         nginxImage          docker_image.nginxImage

Diff: 2 to create, 0 to update, 0 to delete.

Do you want to perform these actions?
  CDK for Terraform will perform the actions described above.
  Only 'yes' will be accepted to approve.

  Enter a value:
```

Deployed application

```bash
Deploying Stack: hello-terraform
Resources
 ✔ DOCKER_CONTAINER     nginxContainer      docker_container.nginxContainer
 ✔ DOCKER_IMAGE         nginxImage          docker_image.nginxImage

Summary: 2 created, 0 updated, 0 destroyed.
```

The `cdktf deploy` command runs a `terraform apply` in the background. If you are using local storage mode then it creates a `terraform.hello-terraform.tfstate` file in the root of the project.

## Destroy Application

You can destroy the application by running `cdktf destroy`.

```bash
cdktf destroy
```

This command will ask for confirmation on a generated diff and then destroy the application if
the user confirms that they want to continue with the destroy operation.

```bash
Stack: hello-terraform
Resources
 - DOCKER_CONTAINER     nginxContainer      docker_container.nginxContainer
 - DOCKER_IMAGE         nginxImage          docker_image.nginxImage

Diff: 0 to create, 0 to update, 2 to delete.

Do you want to perform these actions?
 CDK for Terraform will perform the actions described above.
  Only 'yes' will be accepted to approve.

  Enter a value:
```

Destroyed application

```bash
Destroying Stack: hello-terraform
Resources
 ✔ DOCKER_CONTAINER     nginxContainer      docker_container.nginxContainer
 ✔ DOCKER_IMAGE         nginxImage          docker_image.nginxImage

Summary: 2 destroyed.
```
