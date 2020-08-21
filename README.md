# CDK for Terraform

> This experimental repository contains software which is still being developed
> and in the alpha testing stage. It is not ready for production use.

CDK (Cloud Development Kit) for Terraform allows developers to use familiar
programming languages to define cloud infrastructure and provision it through
HashiCorp Terraform.

![](https://github.com/hashicorp/terraform-cdk/workflows/Release/badge.svg)
[![npm version](https://badge.fury.io/js/cdktf.svg)](https://badge.fury.io/js/cdktf)
[![PyPI version](https://badge.fury.io/py/cdktf.svg)](https://badge.fury.io/py/cdktf)


## Overview

The CDK for Terraform project helps users define infrastructure resources using supported programming languages and generates a Terraform configuration in JSON. Users can then use the Terraform or the CDK for Terraform CLI to deploy the application.

The project uses [AWS CDK](https://aws.amazon.com/cdk/) [constructs](https://github.com/aws/constructs) to define applications.

The CDK for Terraform project includes two packages:

* [cdktf-cli](./packages/cdktf-cli) - A CLI that allows users to run commands to initialize, import, and synthesize CDK for Terraform applications.
* [cdktf](./packages/cdktf) - A library for defining Terraform resources using programming constructs.

The project currently supports TypeScript and Python.

## Getting Started

Choose a language:
* [TypeScript](./docs/getting-started/typescript.md)
* [Python](./docs/getting-started/python.md)

## Examples

### Typescript

* [aws](./examples/typescript/aws)
* [aws-cloudfront-proxy](./examples/typescript/aws-cloudfront-proxy)
* [azure](./examples/typescript/azure)
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

## Documentation

* Install and run a quick start tutorial at [HashiCorp Learn](https://learn.hashicorp.com/terraform/cdktf/cdktf-install)
* Using CDK for Terraform CLI for importing Terraform [modules and providers](./docs/working-with-cdk-for-terraform/importing-providers-and-modules.md).
* Explore the CDK for Terraform [CLI](./docs/cli-commands.md).
* Defining Terraform [outputs](./docs/working-with-cdk-for-terraform/terraform-outputs.md).
* Using Terraform [remote backend](./docs/working-with-cdk-for-terraform/remote-backend.md).
* Using the CDK for Terraform [escape hatch](./docs/working-with-cdk-for-terraform/escape-hatch.md).
* Using the CDK for Terraform [tokens](./docs/working-with-cdk-for-terraform/tokens.md).
* Using Terraform [data sources](./docs/working-with-cdk-for-terraform/data-sources.md).
* Synthesizing Terraform configuration using CDK for Terraform [synthesize](./docs/working-with-cdk-for-terraform/synthesizing-config.md) command.
* Project [telemetry](./docs/working-with-cdk-for-terraform/telemetry.md).

## Contributing and Feedback

CDK for Terraform is an early experimental project and the development team would love your feedback to help guide the project.

* Contribute using the [CONTRIBUTING.md](./CONTRIBUTING.md) guide.
* Ask a question on the HashiCorp [Discuss](https://discuss.hashicorp.com/) using the [terraform-cdk](https://discuss.hashicorp.com/c/terraform-core/cdk-for-terraform/) category.
* Report a [bug](https://github.com/hashicorp/terraform-cdk/issues/new?assignees=&labels=bug&template=bug-report.md&title=) or request a new [feature](https://github.com/hashicorp/terraform-cdk/issues/new?assignees=&labels=enhancement&template=feature-request.md&title=).
* Browse all [open issues](https://github.com/hashicorp/terraform-cdk/issues).
* Public [roadmap](https://github.com/hashicorp/terraform-cdk/projects/1).

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

