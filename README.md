# CDK for Terraform

> This experimental repository contains software which is still being developed
> and in the alpha testing stage. It is not ready for production use.

CDK (Cloud Development Kit) for Terraform allows developers to use familiar
programming languages to define cloud infrastructure and provision it through
HashiCorp Terraform.

![](https://github.com/hashicorp/terraform-cdk/workflows/Build/badge.svg)

## Overview

The CDK for Terraform project helps users define infrastructure resources using their programming language of choice and generates a Terraform configuration in JSON that can be applied with `terraform apply`.

The CDK for Terraform project includes two packages:

* [cdktf-cli](./packages/cdktf-cli) - A CLI that allows users to run commands to initialize, import, and synthesize CDK for Terraform applications.
* [cdktf](./packages/cdktf-cli) - A library for defining Terraform resources using programming constructs.

## Getting Started

Choose a language:
* [TypeScript](./docs/getting-started/typescript.md)
* [Python]()

## Examples

* [TypeScript Simple](./examples/typescript-simple)
* [TypeScript AWS Cloudfront Proxy](./examples/typescript-aws-cloudfront-proxy)

## CLI

Learn more how to use the cdktf command-line interface [here](./docs/cli-commands.md).

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

