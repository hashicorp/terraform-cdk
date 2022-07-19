![](https://github.com/hashicorp/terraform-cdk/workflows/Release/badge.svg)
[![npm version](https://badge.fury.io/js/cdktf.svg)](https://badge.fury.io/js/cdktf)
[![PyPI version](https://badge.fury.io/py/cdktf.svg)](https://badge.fury.io/py/cdktf)
[![NuGet version](https://badge.fury.io/nu/HashiCorp.Cdktf.svg)](https://badge.fury.io/nu/HashiCorp.Cdktf)
[![Maven Central](https://img.shields.io/maven-central/v/com.hashicorp/cdktf?color=brightgreen)](https://search.maven.org/artifact/com.hashicorp/cdktf)
[![homebrew](https://img.shields.io/homebrew/v/cdktf?color=brightgreen)](https://formulae.brew.sh/formula/cdktf#default)

# CDK for Terraform

Cloud Development Kit for Terraform (CDKTF) allows you to use familiar
programming languages to define cloud infrastructure and provision it through
HashiCorp Terraform. This gives you access to the entire Terraform ecosystem without learning HashiCorp Configuration Language (HCL) and lets you leverage the power of your existing toolchain for testing, dependency management, etc.

We currently support TypeScript, Python, Java, C#, and Go.

![terraform platform](./docs/terraform-platform.png)

CDKTF includes two packages:

- [cdktf-cli](./packages/cdktf-cli) - A CLI that allows users to run commands to initialize, import, and synthesize CDK for Terraform applications.
- [cdktf](./packages/cdktf) - A library for defining Terraform resources using programming constructs.

## Get Started

Choose a language:

- [TypeScript](https://learn.hashicorp.com/tutorials/terraform/cdktf-build?in=terraform/cdktf)
- [Python](https://learn.hashicorp.com/tutorials/terraform/cdktf-build?in=terraform/cdktf)
- [Java](https://learn.hashicorp.com/tutorials/terraform/cdktf-build?in=terraform/cdktf)
- [C#](https://learn.hashicorp.com/tutorials/terraform/cdktf-build?in=terraform/cdktf)
- [Go](https://learn.hashicorp.com/tutorials/terraform/cdktf-build?in=terraform/cdktf)

> **Hands-on:** Try the tutorials in the [CDK for Terraform](https://learn.hashicorp.com/collections/terraform/cdktf) collection on HashiCorp Learn.

## Documentation

Refer to the [CDKTF documentation](https://www.terraform.io/docs/cdktf/index.html) for more detail about how to build and manage CDKTF applications, including:

- [Application Architecture](https://www.terraform.io/docs/cdktf/concepts/cdktf-architecture.html): Learn the tools and processes that CDKTF uses to leverage the Terraform ecosystem and convert code into Terraform configuration files. It also explains the major components of a CDKTF application and how those pieces fit together.

- [Project Setup](https://www.terraform.io/docs/cdktf/create-and-deploy/project-setup.html): Learn how to create a new CDKTF project from a pre-built or custom template. Also learn how to convert an existing HCL project into a CDKTF application.

- [Unit Tests](https://www.terraform.io/docs/cdktf/test/unit-tests.html): Learn how to test your application in Typescript with jest.

- [Examples](https://www.terraform.io/docs/cdktf/examples.html): Reference example projects in every supported language and review explanatory videos and other resources.

## Community

The development team would love your feedback to help guide the project.

- Contribute using the [CONTRIBUTING.md](./CONTRIBUTING.md) guide.
- Ask a question on the HashiCorp [Discuss](https://discuss.hashicorp.com/) using the [terraform-cdk](https://discuss.hashicorp.com/c/terraform-core/cdk-for-terraform/) category.
- Report a [bug](https://github.com/hashicorp/terraform-cdk/issues/new?assignees=&labels=bug&template=bug-report.md&title=) or request a new [feature](https://github.com/hashicorp/terraform-cdk/issues/new?assignees=&labels=enhancement&template=feature-request.md&title=).
- Browse all [open issues](https://github.com/hashicorp/terraform-cdk/issues).

## Build

About prerequisites, refer the [followings](./CONTRIBUTING.md#prerequisites).

Clone the project repository.

```bash
git clone https://github.com/hashicorp/terraform-cdk.git
```

Download dependencies.

```bash
cd terraform-cdk/
yarn install
```

Build the project and packages.

```bash
yarn build
```
