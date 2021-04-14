# CDK for Terraform

> This experimental repository contains software which is still being developed
> and in the alpha testing stage. It is not ready for production use.

CDK (Cloud Development Kit) for Terraform allows developers to use familiar
programming languages to define cloud infrastructure and provision it through
HashiCorp Terraform.

![](https://github.com/hashicorp/terraform-cdk/workflows/Release/badge.svg)
[![npm version](https://badge.fury.io/js/cdktf.svg)](https://badge.fury.io/js/cdktf)
[![PyPI version](https://badge.fury.io/py/cdktf.svg)](https://badge.fury.io/py/cdktf)
[![NuGet version](https://badge.fury.io/nu/HashiCorp.Cdktf.svg)](https://badge.fury.io/nu/HashiCorp.Cdktf)
[![Maven Central](https://img.shields.io/maven-central/v/com.hashicorp/cdktf?color=brightgreen)](https://search.maven.org/artifact/com.hashicorp/cdktf)
[![homebrew](https://img.shields.io/homebrew/v/cdktf?color=brightgreen)](https://formulae.brew.sh/formula/cdktf#default)

## Overview

CDK for Terraform apps are written in one of the supported programming languages and can leverage the entire ecosystem of Terraform [modules and providers](./docs/working-with-cdk-for-terraform/using-providers-and-modules.md). The application [synthesizes](./docs/working-with-cdk-for-terraform/synthesizing-config.md) Terraform configuration in JSON. Terraform or the CDK for Terraform can then be used to deploy the application.

The CDK for Terraform project includes two packages:

* [cdktf-cli](./packages/cdktf-cli) - A CLI that allows users to run commands to initialize, import, and synthesize CDK for Terraform applications.
* [cdktf](./packages/cdktf) - A library for defining Terraform resources using programming constructs.

The project currently supports TypeScript, Python, Java, and C#.

## Getting Started

Choose a language:

* [TypeScript](./docs/getting-started/typescript.md)
* [Python](./docs/getting-started/python.md)
* [Java](./docs/getting-started/java.md)
* [C#](./docs/getting-started/csharp.md)

## Examples

### Typescript

* [aws](./examples/typescript/aws)
* [aws-cloudfront-proxy](./examples/typescript/aws-cloudfront-proxy)
* [azure](./examples/typescript/azure)
* [azure-app-service](./examples/typescript/azure-app-service)
* [docker](./examples/typescript/docker)
* [google](./examples/typescript/google)
* [google-cloudrun](./examples/typescript/google-cloudrun)
* [kubernetes](./examples/typescript/kubernetes)
* [vault](./examples/typescript/vault)

#### Backends

* [azurerm](./examples/typescript/backends/azurerm)
* [gcs](./examples/typescript/backends/gcs)
* [remote](./examples/typescript/backends/remote)
* [s3](./examples/typescript/backends/s3)

### Python

* [aws](./examples/python/aws)
* [aws-eks](./examples/python/aws-eks)
* [docker](./examples/python/docker)
* [kubernetes](./examples/python/kubernetes)

### Java

* [aws](./examples/java/aws)
* [azure](./examples/java/azure)
* [google](./examples/java/google)
* [gradle-shared-module](./examples/java/gradle-shared-module)
* [kubernetes](./examples/java/kubernetes)

### C#

* [aws](./examples/csharp/aws)
* [azure](./examples/csharp/azure)
* [google](./examples/csharp/google)

## Documentation

* Install and run a quick start tutorial at [HashiCorp Learn](https://learn.hashicorp.com/terraform/cdktf/cdktf-install)
* Using CDK for Terraform CLI for importing Terraform [modules and providers](./docs/working-with-cdk-for-terraform/using-providers-and-modules.md).
* Explore the CDK for Terraform [CLI](./docs/cli-commands.md).
* Defining Terraform [outputs](./docs/working-with-cdk-for-terraform/terraform-outputs.md).
* Using Terraform [remote backend](./docs/working-with-cdk-for-terraform/remote-backend.md).
* Using the CDK for Terraform [escape hatch](./docs/working-with-cdk-for-terraform/escape-hatch.md).
* Using the CDK for Terraform [tokens](./docs/working-with-cdk-for-terraform/tokens.md).
* Using Terraform [data sources](./docs/working-with-cdk-for-terraform/data-sources.md).
* Using Terraform [variables](./docs/working-with-cdk-for-terraform/terraform-variables.md).
* Synthesizing Terraform configuration using CDK for Terraform [synthesize](./docs/working-with-cdk-for-terraform/synthesizing-config.md) command.
* Project [telemetry](./docs/working-with-cdk-for-terraform/telemetry.md).
* Defining Terraform [locals](./docs/working-with-cdk-for-terraform/terraform-locals.md).
* Handling breaking changes with [feature flags](./docs/working-with-cdk-for-terraform/feature-flags.md).

## Contributing and Feedback

CDK for Terraform is an early experimental project and the development team would love your feedback to help guide the project.

* Contribute using the [CONTRIBUTING.md](./CONTRIBUTING.md) guide.
* Ask a question on the HashiCorp [Discuss](https://discuss.hashicorp.com/) using the [terraform-cdk](https://discuss.hashicorp.com/c/terraform-core/cdk-for-terraform/) category.
* Report a [bug](https://github.com/hashicorp/terraform-cdk/issues/new?assignees=&labels=bug&template=bug-report.md&title=) or request a new [feature](https://github.com/hashicorp/terraform-cdk/issues/new?assignees=&labels=enhancement&template=feature-request.md&title=).
* Browse all [open issues](https://github.com/hashicorp/terraform-cdk/issues).
* [Roadmap](https://github.com/orgs/hashicorp/projects/77).

## Building

Clone the project repository

```bash
git clone https://github.com/hashicorp/terraform-cdk.git
```

Download dependencies

```bash
cd terraform-cdk/
yarn install
```

Build the project and packages

```bash
yarn build
```
## Cloud Development Kit (CDK) Ecosystem

CDK for Terraform apps are structured as a tree of [constructs](https://github.com/aws/constructs). The language support beyond Typescript is made possible by [jsii](https://github.com/aws/jsii).
