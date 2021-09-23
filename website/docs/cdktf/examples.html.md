---
layout: "docs"
page_title: "CDKTF Examples"
sidebar_current: "cdktf"
description: "Resources to help you learn CDK for Terraform, including example projects in Typescript, Java, Python C Sharp, and Go."
---

# Examples

## Tutorials
Follow these hands-on tutorials from HashiCorp Learn: [Write CDK for Terraform Configurations](https://learn.hashicorp.com/collections/terraform/cdktf)

## Example Projects

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

### C Sharp

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

## Youtube Playlist

* Watch the CDK for Terraform engineering team build a simple end to end serverless application in an [end to end livestream](https://www.youtube.com/watch?v=Ey0SW0c6p8c)
* [Getting Started with CDK for Terraform and Python](https://www.youtube.com/watch?v=Ee2qh-pEC5k&t=258s), by Charles mcLaughlin of ShopStyle
* [Extending constructs of the CDK for Terraform](https://www.youtube.com/watch?v=cfU-WOGdNqA)

### Release demos
[0.4: Go support, Asset construct, Terraform Cloud integration](https://www.youtube.com/watch?v=TTfFAIeSqgo). Includes a [GKE demo](https://youtu.be/TTfFAIeSqgo?t=1573).
[0.5: Convert and watch command demos](https://www.youtube.com/watch?v=4caW8WJM4h4&t=1s)
[0.6: Snapshot testing](https://www.youtube.com/watch?v=9Is4QJT2664)

Constributors interested in extending the `cdktf convert` command may be interested in the [convert deep dive](https://www.youtube.com/watch?v=rSn4-Ki5nho). This is not needed to use it.

## Pocket public codebase

Mozilla Pocket is a widely used application for managing reading lists that is built into the Firefox browser. Like many Mozilla projects, Pocket is open source, and the CDK for Terraform codebase that Pocket uses to manage infrastructure for the recommendation API is also public and open source. Pocket's codebase provides a great example of how to lay out a CDK for Terraform project.

In order to re-use components, Pocket's codebase is separated out into a [set of reusable modules](https://github.com/Pocket/terraform-modules/tree/main/src/pocket). These are then used from CDK code in the [recommendation-api codebase](https://github.com/Pocket/recommendation-api/tree/main/.aws). The recommended reading order is to:

1. Read [`Pocket/recommendation-api/.aws/src/main.ts`](https://github.com/Pocket/recommendation-api/blob/main/.aws/src/main.ts)
2. Look at the constructs used that are defined in the [`Pocket/terraform-modules`](https://github.com/Pocket/terraform-modules/tree/main/src/pocket) repository, such as [`PocketALBApplication`](https://github.com/Pocket/terraform-modules/blob/main/src/pocket/PocketALBApplication.ts)
3. Look at the ["base" constructs](https://github.com/Pocket/terraform-modules/tree/main/src/base), which are are used in the higher-level constructs in the previous step
