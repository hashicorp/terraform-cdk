---
layout: "docs"
page_title: "Architecture"
sidebar_current: "cdktf"
description: "Key CDK for Terraform components and application structure."
---

# Architecture

This page explains the tools and processes that CDK for Terraform (CDKTF) uses to leverage the Terraform ecosystem and convert code into Terraform configuration files. It also explains the major components of a CDKTF application and how those pieces fit together.

## CDKTF Building Blocks

CDKTF leverages existing libraries and tools to help convert the definitions you write in your preferred programming language to Terraform configuration files. It also uses Terraform to provision and manage your infrastructure when you deploy your application.

### Amazon Web Services Cloud Development Kit

CDK for Terraform shares core concepts and components with the [Amazon Web Services Cloud Development Kit](https://aws.amazon.com/cdk/) (AWS CDK), a tool that allows you to use familiar programming languages to define infrastructure on AWS CloudFormation. AWS CDK and CDK for Terraform are different products, and you cannot yet use [AWS CDK constructs](https://docs.aws.amazon.com/cdk/latest/guide/constructs.html) within CDKTF. We are actively working on an [interoperability layer](https://github.com/hashicorp/terraform-cdk/pulls?q=is%3Apr+is%3Aopen+label%3Afeature%2Faws-adapter) to enable this in future releases.

### jsii

The [`jsii` tool](https://aws.github.io/jsii/) enables publishing polyglot libraries in all supported languages from a single Typescript code base. CDKTF uses Typescript types to generate an assembly file that `jsii` uses to generate the code bindings for the other supported languages.

### Terraform

CDKTF is a conversion layer that [synthesizes](/cdktf/cli-reference/commands.html#synth) infrastructure defined in a supported programming language into [JSON configuration files](https://www.terraform.io/docs/language/syntax/json.html) that Terraform can use to manage infrastructure.

The diagram below shows how synthesizing a CDKTF application produces a series of artifacts in the `cdktf.out` folder. You can then either use the resulting JSON file with Terraform directly or with CDKTF CLI commands. All CDKTF CLI operations like `diff`, `deploy`, and `destroy` communicate with Terraform for execution.

![cdktf-terraform](./images/cdktf-terraform-workflow.png)

CDKTF also automatically extracts the schemas from existing Terraform [providers](./providers.html) or [modules](./modules.html) and generates the necessary code bindings for your application.

![cdktf-terraform](./images/provider-modules.png)

## CDKTF Components

CDKTF has two major components that allow you to define and provision infrastructure.

- **Lib:** This is the `cdktf` package that is the foundation for each CDKTF project. It contains all of the core libraries that allow you to leverage the Terraform ecosystem and synthesize your application into Terraform configuration files.

- **CLI:** The [`cdktf` CLI](/cdktf/cli-reference/cli-configuration.html) allows you to initialize a new CDKTF project, adjust project settings, synthesize your infrastructure into Terraform configuration files, deploy your CDKTF application, and more. Refer to the [CLI commands documentation](/cdktf/cli-reference/commands.html) for more details. You also can use some Terraform CLI commands like `terraform apply` and `terraform destroy` directly, but we recommend using the available `cdktf cli` commands where possible.

## Application Architecture

CDKTF applications are structured as a tree of [constructs](https://github.com/aws/constructs), which the AWS documentation defines as "classes that define a 'piece of system state'". The foundational classes to build a CDKTF application are `App`, `Stack`, and `Resource`.

![cdktf-terraform](./images/cdktf-app-architecture.png)

### `App` Class

Each CDKTF project has one or more `App` instances that act as a container for the infrastructure configurations you create and deploy. An `App` can have one or more [`Stacks`](./stacks.html) that represent a collection of related infrastructure.

By default, CDKTF projects have one instance of `App`, but you could build as many apps as desired within a project. The output path for each `App` instance has to be unique to avoid conflicts between apps for the synthesized output. TODO: Please explain why someone would want multiple apps in their project?

### `Stack` Class

A `Stack` represents a collection of infrastructure resources that CDKTF synthesizes as a separate Terraform configuration. It is equivalent to a [Terraform working directory](https://www.terraform.io/docs/cli/init/index.html).

Stacks allow you to separate the state management within an application. For example, you may want to deploy and manage separate infrastructure resources for development and testing. Reference the [stack documentation](./stacks.html) for more details on when and how to use stacks in your project.

### `Resource` Class

A `Resource` represents the definition for one or more infrastructure objects. Resources and their required attributes vary depending on the provider. Reference the [providers and resources documentation](./providers-and-resources.html#resources) for more details.

### Constructs

Rather than defining resources by hand, you can leverage constructs to reuse existing resource configurations written in your programming language. TODO: Do we have a constructs library that maybe we could link folks to? OR how can we talk about this briefly without going into too much detail.

### Examples

Reference the [examples page](/docs/cdktf/examples.html) to see configured CDKTF applications in each supported programming language.
