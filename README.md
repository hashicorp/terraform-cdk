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

We currently support TypeScript, Python, Java, C#, and Go (experimental).

![terraform platform](./docs/terraform-platform.png)

CDKTF includes two packages:

- [cdktf-cli](./packages/cdktf-cli) - A CLI that allows users to run commands to initialize, import, and synthesize CDK for Terraform applications.
- [cdktf](./packages/cdktf) - A library for defining Terraform resources using programming constructs.

> **Note:** CDK for Terraform is under active development, and we are still iterating on key workflows and best practices. [Learn more about the project's maturity below](#maturity).

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

<a name="maturity"></a>

## Project Maturity

CDK for Terraform is under active development; we’re still working out key workflows and best practices. We’re iterating fast and are likely to introduce breaking changes to existing APIs to improve the overall user experience of the product. Like other HashiCorp pre-1.0 tools, some early-adopter users are already using CDK for Terraform in production, and we are working with those users to validate and improve workflows.

Early adopters of CDK for Terraform should expect to encounter and work around bugs occasionally, may need to refactor their codebase with each major release, and will intermittently need to use HCL and understand how JSON Terraform configurations are generated, for example to use [overrides](https://www.terraform.io/cdktf/concepts/providers-and-resources#escape-hatch) to use Terraform functionality that cannot currently be expressed using CDK for Terraform. Our goal is to provide a user experience where this is an exceptional edge case. If you’re comfortable with this level of troubleshooting, we’re very interested in your feedback and practical experience.

These caveats apply to CDK for Terraform itself, which generates Terraform configurations. Generated Terraform configurations are applied using Terraform Core, a well established / mature tool to provision infrastructure.

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
