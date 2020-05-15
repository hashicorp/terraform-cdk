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

The CDK for Terraform project helps users define infrastructure resources using their programming language of choice and generates a Terraform configuration in JSON that can be applied with `terraform apply`.

The CDK for Terraform project includes two packages:

* [cdktf-cli](./packages/cdktf-cli) - A CLI that allows users to run commands to initialize, import, and synthesize CDK for Terraform applications.
* [cdktf](./packages/cdktf-cli) - A library for defining Terraform resources using programming constructs.

## Getting Started

Choose a language:
* [TypeScript](./docs/getting-started/typescript.md)
* [Python](./docs/getting-started/python.md)

## Examples

* [typescript-aws](./examples/typescript-aws)
* [typescript-aws-cloudfront-proxy](./examples/typescript-aws-cloudfront-proxy)
* [python-aws](./examples/python-aws)


## Documentation

* [cdktf command-line interface](./docs/cli-commands.md).
* Defining Terraform [outputs](./docs/working-with-cdk-for-terraform/terraform-outputs.md).
* Using Terraform [remote backend](./docs/working-with-cdk-for-terraform/remote-backend.md).
* Using the CDK for Terraform [escape hatch](./docs/working-with-cdk-for-terraform/escape-hatch.md).
* Using the CDK for Terraform [tokens](./docs/working-with-cdk-for-terraform/tokens.md).


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

