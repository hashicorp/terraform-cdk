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

TODO Add information here with a link.

## Pocket public codebase?

TODO Describe what this is and add a link :-)
