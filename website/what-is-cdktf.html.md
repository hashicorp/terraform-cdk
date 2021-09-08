---
layout: "docs"
page_title: "What is CDKTF?"
sidebar_current: "docs-home"
description: |-
  CDK for Terraform allows you to use familiar programming languages to define and provision infrastructure.
---

# What is CDK for Terraform?

Cloud Development Kit for Terraform (CDKTF) allows you to use familiar
programming languages to define and provision cloud infrastructure through Terraform. This gives you access to the entire Terraform ecosystem without learning HashiCorp Configuration Language (HCL) and allows you to continue using your existing toolchain for testing, dependency management, etc. We currently support TypeScript, Python, Java, C# and Go (experimental).

At a high level, you will:

1. **Create an Application:** Use one of our templates to create a project with the required structure.
2. **Define Infrastructure:** Use your chosen language to define the infrastructure you want to provision on one or more providers. CDK for Terraform automatically extracts the schema from providers and modules, so it can prompt you for required configuration and provide autocompletion in your Integrated Development Environment (IDE).
3. **Deploy**: Use the CLI to synthesize your code into a Terraform configuration file or provision infrastructure directly from CDKTF. CDKTF translates your code into JSON configuration files that Terraform can use to provision infrastructure. This process follows the traditional Terraform workflow that allows you to review and approve planned changes.

![terraform platform](terraform-platform.png)


We support every single Terraform provider and module available on the [Terraform Registry](https://registry.terraform.io/), and you can use CDKTF with [Terraform Cloud](https://www.terraform.io/docs/cloud/index.html), [Terraform Enterprise](https://www.terraform.io/docs/enterprise/index.html), and HashiCorp's policy as code framework, [Sentinel](https://www.hashicorp.com/sentinel). However, as CDKTF is under active development, we do not yet recommend CDKTF for production use cases.

## Project Maturity

CDK for Terraform is under active development, and we are iterating fast to improve the product. This means that each major release typically introduces breaking changes. As an early adopter, you may encounter bugs and may sometimes need to use HCL as a workaround. Our goal is to provide a user experience where this is an exceptional edge case, and we appreciate your feedback as the project progresses.

While you can use CDKTF with Terraform Cloud and Terraform Enterprise, it is not eligible for commercial support and we do not officially recommend it for production use cases. Some early-adopter users are already using CDK for Terraform in production, and we are working with those users to validate and improve workflows.


## When to use CDKTF
insert content about when folks should use this instead of HCL... link to HCL interoperability page.

## Get Started

- [Install CDKTF](https://learn.hashicorp.com/tutorials/terraform/cdktf-install?in=terraform/cdktf)and learn the basics on HashiCorp Learn.
- TO DO add links to concepts pages
- TO DO add links to examples page



