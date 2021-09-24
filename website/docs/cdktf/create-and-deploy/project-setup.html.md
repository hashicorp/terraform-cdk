---
layout: "docs"
page_title: "Project Setup"
sidebar_current: "cdktf"
description: "Learn how to build a CDKTF application from a template, project structure, and configuration. "
---

# Project Setup

This page describes the steps and options for creating a new CDK for Terraform (CDKTF) project, including creating from a project template, basic project structure, and converting an existing HCL project.

> **Hands On**: Check out our [CDK for Terraform Quick Start Demo](https://learn.hashicorp.com/tutorials/terraform/cdktf-install?in=terraform/cdktf) and language-specific [Get Started Guides](https://learn.hashicorp.com/collections/terraform/cdktf) on HashiCorp Learn.

## Initialize project

Using `init` with a project template automatically creates and scaffolds a new CDKTF project for your chosen programming language.
Templates generate a "Hello World" application where you can start to define infrastructure right away.

The `cdktf-cli` has built-in templates for supported programming languages, or you can use a custom-built [remote template](/docs/cdktf/create-and-deploy/remote-templates.html).

```bash
$ cdktf init --template="templateName"
```

Use these template names for our built-in templates:

- `typescript`
- `python`
- `c#`
- `java`
- `go`

### Use Locally

Add the `--local` flag to created a scaffolded project that is pre-configured to use [Terraform state](https://www.terraform.io/docs/language/state/index.html) with a [local backend](https://www.terraform.io/docs/language/settings/backends/local.html). This means all terraform operations will happen on your local machine.

```
$ cdktf init --template="typescript" --local
```

### Use with Terraform Cloud

If you initialize a project without passing the `--local` flag, we will use your stored [Terraform Cloud](https://www.terraform.io/docs/cloud/index.html) credentials. If you have no stored Terraform cloud credentials, CDKTF asks if you want to login.

The scaffolded project is configured to use [Terraform state](https://www.terraform.io/docs/language/state/index.html) with a [remote backend](https://www.terraform.io/docs/language/settings/backends/remote.html). Where the Terraform operations will happen depends on the configuration of the Terraform Cloud Workspace settings. If the workspace was created as part of the `cdktf init` command, the Terraform operations will be run locally by default. The Terraform Cloud workspace an be configured to use remote operations instead.

#### Terraform Cloud VCS Integration

Terraform Cloud supports [connecting to VCS providers](https://www.terraform.io/docs/cloud/vcs/index.html).

To use the VCS integration, commit the synthesized Terraform config (the `cdktf.out` directory) alongside your code so Terraform Cloud can use it to deploy your infrastructure. On the General Settings page of your Terraform Cloud Workspace [set the Terraform Working Directory](https://www.terraform.io/docs/cloud/workspaces/settings.html#terraform-working-directory) to the output directory of the stack you want to deploy. So for example use `cdktf.out/stacks/dev` if your stack is named `dev`.

~> **Important**: The synthesized Terraform config might contain credentials or other sensitive data which was provided as input for the `cdktf` application.

#### External CI service

If you prefer to keep the generated artifacts out of your repository, use any CI (Continuous Integration) service to build and deploy them instead. The CDK for Terraform CLI supports deploying to Terraform Cloud using either the local or remote execution mode. For more information on how runs work in Terraform Cloud, see [Terraform Runs and Remote Operations](https://www.terraform.io/docs/cloud/run/index.html).
In your CI steps use the `cdktf-cli` commands to synthesize your code and deploy your infrastructure:

```
cdktf deploy --auto-approve
```

## Project Structure

The project structure depends on the language which is being used. Please follow the language specific getting starting guides:

- Typescript
- Python
- C#
- Java
- Go

One file which is common accross all supported languages, is the `cdktf.json` configuration file. It can be used to define providers and modules (link to providers & modules section) which should be added to the project and supply custom configuration settings to the application. Please have a look at the full documentation over here (link)

## Convert Existing HCL project

Use the typescript template and add a flag on init to convert from an existing HCL project to TypeScript.

```
$ cdktf init --template=typescript --from-terraform-project /path/to/my/tf-hcl-project
```

### Example

Given this HCL configuration

```hcl
# File: /tmp/demo/main.tf

terraform {
  required_providers {
    random = {
      source = "hashicorp/random"
      version = "3.1.0"
    }
  }
}

provider "random" {
}

resource "random_pet" "server" {
}
```

When running the convert command like this in a new folder:

```sh
cdktf init --template=typescript --from-terraform-project /tmp/demo --local
```

`cdktf` will bootstrap a Typescript project and generate the configuration.

```jsonc
// File: /tmp/cdktf-demo/cdktf.json

{
  "language": "typescript",
  "app": "npm run --silent compile && node main.js",
  "projectId": "83684893-0e58-4a71-989a-ecb7c593a690",
  "terraformProviders": ["hashicorp/random@3.1.0"],
  "terraformModules": [],
  "context": {
    "excludeStackIdFromLogicalIds": "true",
    "allowSepCharsInLogicalIds": "true"
  }
}
```

```ts
// File: /tmp/cdktf-demo/main.ts

/*Provider bindings are generated by running cdktf get.
See https://github.com/hashicorp/terraform-cdk/blob/main/docs/working-with-cdk-for-terraform/using-providers.md#importing-providers-and-modules for more details.*/
import * as random from "./.gen/providers/random";

import { Construct } from "constructs";
import { App, TerraformStack } from "cdktf";

class MyStack extends TerraformStack {
  constructor(scope: Construct, name: string) {
    super(scope, name);

    new random.RandomProvider(this, "random", {});
    new random.Pet(this, "server", {});
  }
}

const app = new App();
new MyStack(app, "cdktf-demo");
app.synth();
```

You can find the full documentation for the `cdktf convert` functionality over here (link)
