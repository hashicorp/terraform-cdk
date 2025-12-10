# The Future of Terraform CDK

## Sunset Notice

Terraform CDK (CDKTF) will sunset and be archived on December 10, 2025. HashiCorp, an IBM Company, will no longer maintain or develop the project after that date. Unfortunately, Terraform CDK did not find product-market fit at scale. HashiCorp, an IBM Company, has chosen to focus its investments on Terraform core and its broader ecosystem.

As of December 10, 2025, Terraform CDK will be archived on GitHub, and the documentation will reflect its deprecated status. The archived code will remain available on GitHub, but it will be read-only. No further updates, fixes, or improvements (including compatibility updates) will be made.

You will be able to continue to use Terraform CDK at your own risk. Terraform CDK is licensed under the Mozilla Public License (MPL). HashiCorp, an IBM Company, does not apply any additional restrictions. We encourage community forks if there’s interest in continuing development independently.

## Migration to HCL

You can use the following command to generate Terraform-compatible .tf files directly from your Terraform CDK project:

`cdktf synth --hcl`

This will produce readable HCL configuration files, making it easier to migrate away from Terraform CDK. After running the command, you can use standard Terraform CLI commands (`terraform init`, `terraform plan`, `terraform apply`) to continue managing your infrastructure. Please note that while this helps bootstrap your configuration, you may still need to review and adjust the generated files for clarity, organization, or best practices.

### Note on AWS CDK

If your infrastructure is defined in Terraform CDK but also tightly integrated with AWS CDK, you may find it more consistent to migrate directly to the AWS CDK ecosystem. If you are not using AWS CDK, we highly recommend migrating to standard Terraform and HCL for long-term support and ecosystem alignment.

## FAQ

Q: Is CDKTF still being developed?

A: No. CDKTF will sunset and be archived on December 10, 2025. HashiCorp, an IBM Company, will no longer maintain or develop the project after that date.

Q: Why is CDKTF being sunset?

A: CDKTF did not find product-market fit at scale. We’ve chosen to focus our investments on Terraform core and its broader ecosystem.

Q: Will CDKTF be removed from GitHub?

A: CDKTF will be archived on GitHub, and documentation will reflect its deprecated status.

Q: Can I still use CDKTF after it's sunset?

A: Yes, the archived code will remain available on GitHub, but it will be read-only. No further updates, fixes, or improvements will be made.

Q: Will CDKTF continue to support new versions of Terraform or providers?

A: No. Compatibility updates will not be made after the EOL date.

Q: Can I fork CDKTF and maintain it myself?

A: Yes. CDKTF is open source, and we encourage community forks if there’s interest in continuing development independently.

Q: Can I keep using CDKTF?

A: You may continue to use it at your own risk. HashiCorp, an IBM Company, will no longer be maintaining it.

Q: Is there a migration tool?

A: You can use the following command to generate Terraform-compatible .tf files directly from your CDKTF project:

`cdktf synth --hcl`

This will produce readable HCL configuration files, making it easier to migrate away from CDKTF. After running the command, you can use standard Terraform CLI commands (terraform init, terraform plan, terraform apply) to continue managing your infrastructure. Please note that while this helps bootstrap your configuration, you may still need to review and adjust the generated files for clarity, organization, or best practices.

Q: What migration guidance can we provide to customers?

A: For users looking to migrate away from CDKTF:

If your infrastructure is defined in CDKTF but also tightly integrated with AWS CDK, you may find it more consistent to migrate directly to the AWS CDK ecosystem.

If you are not using AWS CDK, we highly recommend migrating to standard Terraform and HCL for long-term support and ecosystem alignment.

---

![](https://github.com/hashicorp/terraform-cdk/workflows/Release/badge.svg)
[![npm version](https://badge.fury.io/js/cdktf.svg)](https://badge.fury.io/js/cdktf)
[![PyPI version](https://badge.fury.io/py/cdktf.svg)](https://badge.fury.io/py/cdktf)
[![NuGet version](https://badge.fury.io/nu/HashiCorp.Cdktf.svg)](https://badge.fury.io/nu/HashiCorp.Cdktf)
[![Maven Central](https://img.shields.io/maven-central/v/com.hashicorp/cdktf?color=brightgreen)](https://search.maven.org/artifact/com.hashicorp/cdktf)

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

- [TypeScript](https://developer.hashicorp.com/terraform/tutorials/cdktf/cdktf-build?in=terraform%2Fcdktf&variants=cdk-language%3Atypescript)
- [Python](https://developer.hashicorp.com/terraform/tutorials/cdktf/cdktf-build?in=terraform%2Fcdktf&variants=cdk-language%3Apython)
- [Java](https://developer.hashicorp.com/terraform/tutorials/cdktf/cdktf-build?in=terraform%2Fcdktf&variants=cdk-language%3Ajava)
- [C#](https://developer.hashicorp.com/terraform/tutorials/cdktf/cdktf-build?in=terraform%2Fcdktf&variants=cdk-language%3Acsharp)
- [Go](https://developer.hashicorp.com/terraform/tutorials/cdktf/cdktf-build?in=terraform%2Fcdktf&variants=cdk-language%3Ago)

> **Hands-on:** Try the tutorials in the [CDK for Terraform](https://learn.hashicorp.com/collections/terraform/cdktf) collection on HashiCorp Learn.

## Documentation

Refer to the [CDKTF documentation](https://developer.hashicorp.com/terraform/cdktf) for more detail about how to build and manage CDKTF applications, including:

- [Application Architecture](https://developer.hashicorp.com/terraform/cdktf/concepts/cdktf-architecture): Learn the tools and processes that CDKTF uses to leverage the Terraform ecosystem and convert code into Terraform configuration files. It also explains the major components of a CDKTF application and how those pieces fit together.

- [Project Setup](https://developer.hashicorp.com/terraform/cdktf/create-and-deploy/project-setup): Learn how to create a new CDKTF project from a pre-built or custom template. Also learn how to convert an existing HCL project into a CDKTF application.

- [Unit Tests](https://developer.hashicorp.com/terraform/cdktf/test/unit-tests): Learn how to test your application in Typescript with jest.

- [Examples](https://developer.hashicorp.com/terraform/cdktf/examples-and-guides/examples): Reference example projects in every supported language and review explanatory videos and other resources.

## Community

The development team would love your feedback to help guide the project.

- Contribute using the [CONTRIBUTING.md](./CONTRIBUTING.md) guide.
- Ask a question on the HashiCorp [Discuss](https://discuss.hashicorp.com/) using the [terraform-cdk](https://discuss.hashicorp.com/c/terraform-core/cdk-for-terraform/) category.
- Report a [bug](https://github.com/hashicorp/terraform-cdk/issues/new?assignees=&labels=bug&template=bug-report.md&title=) or request a new [feature](https://github.com/hashicorp/terraform-cdk/issues/new?assignees=&labels=enhancement&template=feature-request.md&title=).
- Browse all [open issues](https://github.com/hashicorp/terraform-cdk/issues).

## Build

For prerequisites, refer to the [following](./CONTRIBUTING.md#prerequisites).

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
