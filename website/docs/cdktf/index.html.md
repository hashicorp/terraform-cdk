---
layout: "docs"
page_title: "What is CDKTF?"
sidebar_current: "docs-home"
description: |-
  CDK for Terraform lets you use familiar programming languages to define and provision infrastructure.
---

# What is CDK for Terraform?

Cloud Development Kit for Terraform (CDKTF) allows you to use familiar programming languages to define and provision infrastructure. This gives you access to the entire Terraform ecosystem without learning HashiCorp Configuration Language (HCL) and lets you leverage the power of your existing toolchain for testing, dependency management, etc.

We currently support TypeScript, Python, Java, C#, and Go (experimental).

![terraform platform](terraform-platform.png)

## How does CDK for Terraform work?

CDK for Terraform leverages concepts and libraries from the [AWS Cloud Development Kit](https://aws.amazon.com/cdk/) to translate your code into infrastructure configuration files for Terraform.

At a high level, you will:

1. **Create an Application:** Use either a built-in or a custom template to scaffold a project in your chosen language.
2. **Define Infrastructure:** Use your chosen language to define the infrastructure you want to provision on one or more providers. CDKTF automatically extracts the schema from Terraform providers and modules to generate the necessary classes for your application.
3. **Deploy**: Use `cdktf` CLI commands to provision infrastructure with Terraform or synthesize your code into a JSON configuration file that others can use with Terraform directly.

You can use every Terraform provider and module available on the [Terraform Registry](https://registry.terraform.io/), and you can use CDKTF with [Terraform Cloud](https://www.terraform.io/docs/cloud/index.html), [Terraform Enterprise](https://www.terraform.io/docs/enterprise/index.html), and HashiCorp's policy as code framework, [Sentinel](https://www.hashicorp.com/sentinel). However, as CDKTF is under active development, we do not yet recommend it for production use cases (more details in [Project Maturity](#project-maturity) below).

## When to use CDK for Terraform

CDKTF offers many benefits, but it is not the right choice for every project. You should consider using CDKTF when:

- You have a strong preference or need to use a procedural language to define infrastructure.
- You need to create abstractions to help manage complexity. For example, you want to create [constructs](./concepts/fundamentals/constructs.html) to model a reusable infrastructure pattern composed of multiple resources and convenience methods.
- You are comfortable doing your own troubleshooting and do not require commercial support.

You can make this choice for each team and project because CDK for Terraform [interoperates with existing Terraform providers and modules](./concepts/interoperability-workflows.html).

## Project Maturity and Production Readiness

CDK for Terraform is under active development; we’re still working out key workflows and best practices. We’re iterating fast and are likely to introduce breaking changes to existing APIs to improve the overall user experience of the product.

This tool can be used with Terraform Cloud and Terraform Enterprise, but is not eligible for commercial support, and is not officially recommended for production use cases. Like other HashiCorp pre-1.0 tools, some early-adopter users are already using CDK for Terraform in production, and we are working with those users to validate and improve workflows.

Early adopters of CDK for Terraform should expect to encounter and work around bugs occasionally, may need to refactor their codebase with each major release, and will intermittently need to use HCL and understand how JSON Terraform configurations are generated, for example to use [overrides](https://github.com/hashicorp/terraform-cdk/blob/main/docs/working-with-cdk-for-terraform/escape-hatch.md) to use Terraform functionality that cannot currently be expressed using CDK for Terraform. Our goal is to provide a user experience where this is an exceptional edge case. If you’re comfortable with this level of troubleshooting, we’re very interested in your feedback and practical experience. The [Community](./community.html) page explains how to ask questions, submit issues, and contribute to the project.

These caveats apply to CDK for Terraform itself, which generates Terraform configurations. Generated Terraform configurations are applied using Terraform Core, a well established / mature tool to provision infrastructure.

## Feature Flags

CDK for Terraform uses feature flags to enable potentially breaking behaviors in a release. Flags are stored as Runtime context values in cdktf.json as shown here.

```json
{
  "language": "typescript",
  "app": "npm run --silent compile && node main.js",
  "context": {
    "excludeStackIdFromLogicalIds": "true"
  }
}
```

Feature flags are disabled by default, so existing projects that do not specify the flag will continue to work as expected with later CDKTF releases. New projects created using `cdktf init` include flags enabling all features available in the release that created the project. Edit `cdktf.json` to disable any flags for which you prefer the old behavior, or to add flags to enable new behaviors after upgrading the CDK for Terraform.

See the CHANGELOG in a given release for a description of any new feature flags added in that release. The CDKTF source file [features.ts](https://github.com/hashicorp/terraform-cdk/blob/main/packages/cdktf/lib/features.ts) provides a complete list of all current feature flags.

## Get Started

- [Install CDKTF](https://learn.hashicorp.com/tutorials/terraform/cdktf-install?in=terraform/cdktf) and set up your first project on HashiCorp Learn.
- Learn about [CDKTF application architecture](/docs/cdktf/concepts/architecture.html)
- Learn how to use key CDKTF concepts like [providers](/docs/cdktf/concepts/fundamentals/providers.html), [modules](/docs/cdktf/concepts/fundamentals/modules.html), and [resources](/docs/cdktf/concepts/fundamentals/resources.html) to define infrastructure
