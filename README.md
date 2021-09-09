![](https://github.com/hashicorp/terraform-cdk/workflows/Release/badge.svg)
[![npm version](https://badge.fury.io/js/cdktf.svg)](https://badge.fury.io/js/cdktf)
[![PyPI version](https://badge.fury.io/py/cdktf.svg)](https://badge.fury.io/py/cdktf)
[![NuGet version](https://badge.fury.io/nu/HashiCorp.Cdktf.svg)](https://badge.fury.io/nu/HashiCorp.Cdktf)
[![Maven Central](https://img.shields.io/maven-central/v/com.hashicorp/cdktf?color=brightgreen)](https://search.maven.org/artifact/com.hashicorp/cdktf)
[![homebrew](https://img.shields.io/homebrew/v/cdktf?color=brightgreen)](https://formulae.brew.sh/formula/cdktf#default)

# CDK for Terraform

[Learn more about this product’s maturity and production readiness](#maturity)

CDK (Cloud Development Kit) for Terraform allows developers to use familiar
programming languages to define cloud infrastructure and provision it through
HashiCorp Terraform.

![terraform platform](./docs/terraform-platform.png)

## Overview

CDK for Terraform apps are written in one of the supported programming languages and can leverage the entire ecosystem of Terraform [modules](./docs/working-with-cdk-for-terraform/using-modules.md), [providers](./docs/working-with-cdk-for-terraform/using-providers.md), and [functions](./docs/working-with-cdk-for-terraform/terraform-functions.md). The application [synthesizes](./docs/working-with-cdk-for-terraform/synthesizing-config.md) Terraform configuration in JSON. Terraform or the CDK for Terraform can then be used to deploy the application.

The CDK for Terraform project includes two packages:

- [cdktf-cli](./packages/cdktf-cli) - A CLI that allows users to run commands to initialize, import, and synthesize CDK for Terraform applications.
- [cdktf](./packages/cdktf) - A library for defining Terraform resources using programming constructs.

The project currently supports TypeScript, Python, Java, and C#.

## Getting Started

Choose a language:

- [TypeScript](./docs/getting-started/typescript.md)
- [Python](./docs/getting-started/python.md)
- [Java](./docs/getting-started/java.md)
- [C#](./docs/getting-started/csharp.md)
- [Go](./docs/getting-started/go.md)

> **Hands-on:** Try the tutorials in the [CDK for Terraform](https://learn.hashicorp.com/collections/terraform/cdktf) collection on HashiCorp Learn.

## Examples

### Typescript

- [aws-ecs-docker-and-static-frontend](https://github.com/hashicorp/docker-on-aws-ecs-with-terraform-cdk-using-typescript)
- [aws-lambda-end-to-end](./docs/full-guide/serverless-application-typescript.md)
- [aws-prebuilt](./examples/typescript/aws-prebuilt)
- [aws-multiple-stacks](./examples/typescript/aws-multiple-stacks)
- [aws-cloudfront-proxy](./examples/typescript/aws-cloudfront-proxy)
- [azure](./examples/typescript/azure)
- [azure-app-service](./examples/typescript/azure-app-service)
- [docker](./examples/typescript/docker)
- [google](./examples/typescript/google)
- [google-cloudrun](./examples/typescript/google-cloudrun)
- [kubernetes](./examples/typescript/kubernetes)
- [ucloud](./examples/typescript/ucloud)
- [vault](./examples/typescript/vault)

#### Backends

- [azurerm](./examples/typescript/backends/azurerm)
- [gcs](./examples/typescript/backends/gcs)
- [remote](./examples/typescript/backends/remote)
- [s3](./examples/typescript/backends/s3)

### Python

- [aws](./examples/python/aws)
- [aws-eks](./examples/python/aws-eks)
- [azure](./examples/python/azure)
- [docker](./examples/python/docker)
- [kubernetes](./examples/python/kubernetes)
- [ucloud](./examples/python/ucloud)

### Java

- [aws](./examples/java/aws)
- [azure](./examples/java/azure)
- [google](./examples/java/google)
- [gradle-shared-module](./examples/java/gradle-shared-module)
- [kubernetes](./examples/java/kubernetes)
- [ucloud](./examples/java/ucloud)

### C#

- [aws](./examples/csharp/aws)
- [azure](./examples/csharp/azure)
- [google](./examples/csharp/google)
- [ucloud](./examples/csharp/ucloud)

### Go

> Please note: Support for Golang is at an experimental state. In the CDK for Terraform and in the [upstream library JSII](https://aws.github.io/jsii/user-guides/lib-author/configuration/targets/go/) which powers the support for the supported languages.

- [docker](./examples/go/docker)
- [aws](./examples/go/aws) ⚠️ _High memory usage: the provider generation currently needs ~6 GB of memory. Hence the maximum for Node.js is [currently set to 8GB](https://github.com/hashicorp/terraform-cdk/blob/11d2e783d1fe94e50abd116ba73689c02590a391/packages/cdktf-cli/lib/get/constructs-maker.ts#L279)_
- [google cloud kubernetes engine + kubernetes](./examples/go/google)
- [ucloud](./examples/go/ucloud)

## Community Templates (for `cdktf init`)

> The following [remote templates](./docs/working-with-cdk-for-terraform/remote-templates.md) are maintained by the community and can be used to setup a CDK for Terraform project instead of the built-in ones.

- [python-poetry](https://github.com/johnfraney/cdktf-remote-template-python-poetry) (by [@johnfraney](https://github.com/johnfraney))

## Documentation

- Install and run a quick start tutorial at [HashiCorp Learn](https://learn.hashicorp.com/terraform/cdktf/cdktf-install)
- Learn how to use any Terraform [module](./docs/working-with-cdk-for-terraform/using-modules.md) and [provider](./docs/working-with-cdk-for-terraform/using-providers.md) with the CDK for Terraform. You can find all modules and providers in the [Terraform Registry](https://registry.terraform.io/).
- Explore the CDK for Terraform [CLI](./docs/cli-commands.md).
- Defining Terraform [outputs](./docs/working-with-cdk-for-terraform/terraform-outputs.md).
- Using Terraform [remote backend](./docs/working-with-cdk-for-terraform/remote-backend.md).
- Using the CDK for Terraform [escape hatch](./docs/working-with-cdk-for-terraform/escape-hatch.md).
- Using the CDK for Terraform [tokens](./docs/working-with-cdk-for-terraform/tokens.md).
- Using Terraform [data sources](./docs/working-with-cdk-for-terraform/data-sources.md).
- Using Terraform [variables](./docs/working-with-cdk-for-terraform/terraform-variables.md).
- Using Terraform [functions](./docs/working-with-cdk-for-terraform/terraform-functions.md)
- Synthesizing Terraform configuration using CDK for Terraform [synthesize](./docs/working-with-cdk-for-terraform/synthesizing-config.md) command.
- Project [telemetry](./docs/working-with-cdk-for-terraform/telemetry.md).
- Defining Terraform [locals](./docs/working-with-cdk-for-terraform/terraform-locals.md).
- Handling breaking changes with [feature flags](./docs/working-with-cdk-for-terraform/feature-flags.md).
- Writing own [remote templates](./docs/working-with-cdk-for-terraform/remote-templates.md) for init.
- Using [assets](./docs/working-with-cdk-for-terraform/terraform-assets.md) to transfer files into the Terraform context.
- Learn how to write [tests](./docs/working-with-cdk-for-terraform/testing.md).

<a name="maturity"></a>

## Project Maturity and Production Readiness

CDK for Terraform is under active development; we’re still working out key workflows and best practices. We’re iterating fast and are likely to introduce breaking changes to existing APIs to improve the overall user experience of the product.

This tool can be used with Terraform Cloud and Terraform Enterprise, but is not eligible for commercial support, and is not officially recommended for production use cases. Like other HashiCorp pre-1.0 tools, some early-adopter users are already using CDK for Terraform in production, and we are working with those users to validate and improve workflows.

Early adopters of CDK for Terraform should expect to encounter and work around bugs occasionally, may need to refactor their codebase with each major release, and will intermittently need to use HCL and understand how JSON Terraform configurations are generated, for example to use [overrides](https://github.com/hashicorp/terraform-cdk/blob/main/docs/working-with-cdk-for-terraform/escape-hatch.md) to use Terraform functionality that cannot currently be expressed using CDK for Terraform. Our goal is to provide a user experience where this is an exceptional edge case. If you’re comfortable with this level of troubleshooting, we’re very interested in your feedback and practical experience.

These caveats apply to CDK for Terraform itself, which generates Terraform configurations. Generated Terraform configurations are applied using Terraform Core, a well established / mature tool to provision infrastructure.

## Contributing and Feedback

CDK for Terraform is an early experimental project and the development team would love your feedback to help guide the project.

- Contribute using the [CONTRIBUTING.md](./CONTRIBUTING.md) guide.
- Ask a question on the HashiCorp [Discuss](https://discuss.hashicorp.com/) using the [terraform-cdk](https://discuss.hashicorp.com/c/terraform-core/cdk-for-terraform/) category.
- Report a [bug](https://github.com/hashicorp/terraform-cdk/issues/new?assignees=&labels=bug&template=bug-report.md&title=) or request a new [feature](https://github.com/hashicorp/terraform-cdk/issues/new?assignees=&labels=enhancement&template=feature-request.md&title=).
- Browse all [open issues](https://github.com/hashicorp/terraform-cdk/issues).
- [Roadmap](https://github.com/orgs/hashicorp/projects/77).

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
