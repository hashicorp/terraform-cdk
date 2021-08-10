# Getting Started with Java

## Prerequisites

- [Terraform](https://www.terraform.io/downloads.html) >= v0.12
- [Node.js](https://nodejs.org) >= v12.16
- Java ([Amazon Corretto](https://aws.amazon.com/corretto/), any [OpenJDK](https://openjdk.java.net/install/index.html) distribution, or [Oracle's JDK](https://www.oracle.com/technetwork/java/javase/downloads/jdk8-downloads-2133151.html)) >= 8
- [Maven](https://maven.apache.org/download.cgi) >= 3.5

## Configure Maven for GitHub Packages

Currently cdktf is distributed only on GitHub packages. Until it is available in Maven Central, some additional configuration is needed.

Specifically, add `https://maven.pkg.github.com/hashicorp/terraform-cdk` as a repository and add GitHub credentials using a Personal Access Token.

For more details read through [GitHub's Guide](https://docs.github.com/en/free-pro-team@latest/packages/using-github-packages-with-your-projects-ecosystem/configuring-apache-maven-for-use-with-github-packages).

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
cdktf init --template="java" --local
```

This will initialize a brand new CDK for Terraform project in Java using an interactive command. While this template uses Maven, it is possible to use Gradle or other build tools.

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

You can now open up the `Main.java` file to view your application code.

```bash
vim src/main/java/com/mycompany/app/Main.java
```

```java
package com.mycompany.app;

import software.constructs.Construct;

import com.hashicorp.cdktf.App;
import com.hashicorp.cdktf.TerraformStack;

public class Main extends TerraformStack
{
    public Main(final Construct scope, final String id) {
        super(scope, id);

        // define resources here
    }

    public static void main(String[] args) {
        final App app = new App();
        new Main(app, "hello-terraform");
        app.synth();
    }
}
```

Refer to the [examples](../../examples/) directory for additional examples.

Let's take a simple Java application that uses the CDK for Terraform package.

```java
package com.mycompany.app;

import software.constructs.Construct;

import com.hashicorp.cdktf.App;
import com.hashicorp.cdktf.TerraformStack;

import imports.aws.AwsProvider;
import imports.aws.Instance;

public class Main extends TerraformStack
{
    public Main(final Construct scope, final String id) {
        super(scope, id);

        AwsProvider.Builder.create(this, "Aws")
          .region("us-east-1")
          .build();

        Instance.Builder.create(this, "hello")
          .ami("ami-2757f631")
          .instanceType("t2.micro")
          .build();
    }

    public static void main(String[] args) {
        final App app = new App();
        new Main(app, "hello-terraform");
        app.synth();
    }
}
```

## Using Terraform Providers

As you can see in the example above we want to deploy AWS resources, therefore we need to use the [Terraform AWS Provider](https://registry.terraform.io/providers/hashicorp/aws/latest/docs). Every [Terraform Provider](https://registry.terraform.io/browse/providers) and [Terraform Module](https://registry.terraform.io/browse/modules) can be used with the workflow described here.

You specify it in your local `cdktf.json` file, like this:

```jsonc
{
  "language": "java",
  "app": "mvn -e -q compile exec:java",
  "terraformProviders": [
    // Terraform Providers with version constraint go here
    "aws@~> 3.45"
  ],
  "terraformModules": [
    // Terraform Modules with version constraint go here
  ],
  "context": {
    "excludeStackIdFromLogicalIds": "true"
  }
}
```

Next you need to run `cdktf get` which generates provider-specific bindings.
To save some time you can also use pre-built providers, please visit the ["Using Providers"-Guide](../working-with-cdk-for-terraform/using-providers.md) for more on that topic.

## Synthesize Application

When you are ready you can run the `synthesize` command to generate Terraform JSON configuration for the application.

```bash
cdktf synth
```

```bash
Generated Terraform code in the output directory: cdktf.out
```

This command will generate a directory called `cdktf.out`. This directory contains the Terraform JSON configuration for
the application. The Terraform config for your stack `hello-terraform` will be in `cdktf.out/stacks/hello-terraform`.

```bash
cd cdktf.out/stacks/hello-terraform
```

Terraform AWS provider and instance expressed as Terraform JSON configuration.

```json
cat cdk.tf.json
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
      "examplejavahello3532B955": {
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
