---
layout: "docs"
page_title: "Project Setup"
sidebar_current: "cdktf"
description: "Learn how to build a CDKTF application from a template, project structure, and configuration. "
---

# Project Setup

## Project Templates

A project template is the blueprint for your new cdktf project. It's used to generate a fully functional starting point where you can start to define infrastructure in your preferred language right away.

The `cdktf-cli` ships with a pre-defined template for each programming language which is supported. Right now this is:

- Typescript
- Python
- C#
- Java
- Go

If you have the need to customize templates, the `cdktf-cli` can leverage [remote templates](./remote-templates).

## Initialize project

Use `init` with a template and one or more flags to automatically create and scaffold a new CDKTF project for your chosen programming language. You can use CDKTF on your local machine or connect your project to Terraform Cloud.

### Use Locally

When initialized with the `--local` flag, the scaffoled project is pre-configured to use [Terraform state](https://www.terraform.io/docs/language/state/index.html) with a [local backend](https://www.terraform.io/docs/language/settings/backends/local.html)

All terraform operations will happen on your local machine.

```
$ cdktf init --template=typescript --local
```

### Use with Terraform Cloud

- If you don't pass the local flag:
  - If you have run Terraform Login in the past, we will use your stored TFC credentials
  - If you have no TFC credentials, we will ask you whether you want to login

The scaffoled project will be configured to use [Terraform state](https://www.terraform.io/docs/language/state/index.html) with a [remote backend](https://www.terraform.io/docs/language/settings/backends/remote.html).

Where the Terraform operations will happen depends on the configuration of the Terraform Cloud Workspace settings. If the workspace was created as part of the `cdktf init` command, the Terraform operations will be run locally by default. The Terraform Cloud workspace an be configured to use remote operations instead.

```
$ cdktf init --template=typescript
```

#### Terraform Cloud VCS Integration

Terraform Cloud supports [connecting to VCS providers](https://www.terraform.io/docs/cloud/vcs/index.html).

To use the VCS integration, commit the synthesized Terraform config (the `cdktf.out` directory) alongside your code so Terraform Cloud can use it to deploy your infrastructure. On the General Settings page of your Terraform Cloud Workspace [set the Terraform Working Directory](https://www.terraform.io/docs/cloud/workspaces/settings.html#terraform-working-directory) to the output directory of the stack you want to deploy. So for example use `cdktf.out/stacks/dev` if your stack is named `dev`.

Note: Be aware, that the synthesized Terraform config might contain credentials or other sensitive data which was provided as input for the `cdktf` application.

#### External CI service

If you prefer to keep the generated artefacts out of your repository, use any CI (Continuous Integration) service to build and deploy them instead. The CDK for Terraform CLI supports deploying to Terraform Cloud using either the local or remote execution mode. For more information on how runs work in Terraform Cloud, see [Terraform Runs and Remote Operations](https://www.terraform.io/docs/cloud/run/index.html).
In your CI steps use the `cdktf-cli` commands to synthesize your code and deploy your infrastructure:

```
cdktf deploy --auto-approve
```

## Project Structure

TO DO: Explain how CDKTF projects are structured - What files there are in a project with links to places to find out more information

TO DO: This largely depends on the type of project - Do we really want to list all them here? There are getting started guides which would probably be more appriate https://github.com/hashicorp/terraform-cdk/tree/main/docs/getting-started (sebastian)

The only really relevant file for a user is [cdktf.json](../concepts/fundamentals/cdktf-json.md). This file is used as config file for the cli

## Convert Existing HCL project

Use the typescript template and add a flag on init to convert from an existing HCL project to TypeScript.

```
$ cdktf init --template=typescript --from-terraform-project /path/to/my/tf-hcl-project
```

## Configure Project

### Global Configuration

TODO: This is a rather advanced concept, wouldn't put it here (sebastian)

One option to provide global configuration is the app context, which can be accessed in any construct within the app.

TODO: Explain what I'm actually looking at below and what I would do to actually configure something....

```typescript
import { Construct } from "constructs";
import { App, TerraformStack } from "cdktf";
import { AwsProvider, Instance } from "./.gen/providers/aws";

class MyStack extends TerraformStack {
  constructor(scope: Construct, id: string) {
    super(scope, id);

    new AwsProvider(this, "aws", {
      region: "us-east-1",
    });

    new Instance(this, "Hello", {
      ami: "ami-2757f631",
      instanceType: "t2.micro",
      tags: {
        myConfig: this.node.getContext("myConfig"),
      },
    });
  }
}

const app = new App({ context: { myConfig: "config" } });
new MyStack(app, "hello-cdktf");
app.synth();
```

### Stack Configuration

A stack represents a collection of infrastructure that will be synthesized as a dedicated Terraform configuration. Stacks allow you to separate the state management for multiple environments within an application.

#### Single Stack

The following example will synthesize a single Terraform configuration in the configured output folder. When you run `cdktf synth`, the synthesized Terraform configuration will be in the folder `cdktf.out/stacks/a-single-stack`

```typescript
import { Construct } from "constructs";
import { App, TerraformStack } from "cdktf";
import { AwsProvider, Instance } from "./.gen/providers/aws";

class MyStack extends TerraformStack {
  constructor(scope: Construct, id: string) {
    super(scope, id);

    new AwsProvider(this, "aws", {
      region: "us-east-1",
    });

    new Instance(this, "Hello", {
      ami: "ami-2757f631",
      instanceType: "t2.micro",
    });
  }
}

const app = new App();
new MyStack(app, "a-single-stack");
app.synth();
```

#### Multiple Stacks

> **Hands-on:** Try the [Deploy Multiple Lambda Functions with TypeScript](https://learn.hashicorp.com/tutorials/terraform/cdktf-assets-stacks-lambda?in=terraform/cdktf) tutorial on HashiCorp Learn. This tutorial guides you through a multi-stack application.

You can specify multiple stacks in your application. For example, you may want a separate configuration for development, testing, and production environments.

The following example synthesizes multiple Terraform configurations in the configured output folder.

```typescript
import { Construct } from "constructs";
import { App, TerraformStack } from "cdktf";
import { AwsProvider, Instance } from "./.gen/providers/aws";

interface MyStackConfig {
  environment: string;
  region?: string;
}

class MyStack extends TerraformStack {
  constructor(scope: Construct, id: string, config: MyStackConfig) {
    super(scope, id);

    const { region = "us-east-1" } = config;

    new AwsProvider(this, "aws", {
      region,
    });

    new Instance(this, "Hello", {
      ami: "ami-2757f631",
      instanceType: "t2.micro",
      tags: {
        environment: config.environment,
      },
    });
  }
}

const app = new App();
new MyStack(app, "multiple-stacks-dev", { environment: "dev" });
new MyStack(app, "multiple-stacks-staging", { environment: "staging" });
new MyStack(app, "multiple-stacks-production-us", {
  environment: "production",
  region: "us-east-1",
});
new MyStack(app, "multiple-stacks-production-eu", {
  environment: "production",
  region: "eu-central-1",
});
app.synth();
```

After running `cdktf synth` you see the following synthesized stacks:

```
$ cdktf list

Stack name                      Path
multiple-stacks-dev             cdktf.out/stacks/multiple-stacks-dev
multiple-stacks-staging         cdktf.out/stacks/multiple-stacks-staging
multiple-stacks-production-us   cdktf.out/stacks/multiple-stacks-production-us
multiple-stacks-production-eu   cdktf.out/stacks/multiple-stacks-production-eu
```

Currently, all Terraform operations are limited to a single stack. That means you must specify a target stack when you run `diff`, `deploy` or `destroy`. A deploy command like `cdktf deploy multiple-stacks-dev` will work and all Terraform operations will run in the folder `cdktf.out/stacks/multiple-stacks-dev`.

Omitting the target stack by running a plain `cdktf deploy` will result in error. This will change in future versions, where support for targeting all or a subset of stacks will be added. Please track this [issue](https://github.com/hashicorp/terraform-cdk/issues/650) when you're interested in this feature.

##### Cross Stack References

Referencing resources from another stack is not yet supported automatically. It can be achieved manually by using Outputs and the Remote State data source.

Please track this [issue](https://github.com/hashicorp/terraform-cdk/issues/651) when you're interested in this feature.

##### Migration from `<= 0.2`

Up until CDK for Terraform version `0.2` only a single stack was supported. For local state handling, a `terraform.tfstate` in the project root folder was used. With version `>= 0.3` the local state file reflects the stack name it belongs to in its file name. When a `terraform.tfstate` file is still present in the project root folder, it has to be renamed to match the schema `terraform.<stack-name>.tfstate` manually.

#### Escape Hatch

For anything on the top-level `terraform` block that is not natively implemented, use the **stack escape hatch** to define a configuration. For example,
define remote backend using the `addOverride` method in TypeScript.

~> **Important**: Escape hatches **must not** have empty arguments or objects, as they will be
removed from the synthesized JSON configuration.

```typescript
stack.addOverride("terraform.backend", {
  remote: {
    organization: "test",
    workspaces: {
      name: "test",
    },
  },
});
```

This will synthesize a Terraform configuration with the remote backend included in
the `terraform` block.

```json
{
  "terraform": {
    "required_providers": {
      "aws": "~> 2.0"
    },
    "backend": {
      "remote": {
        "organization": "test",
        "workspaces": {
          "name": "test"
        }
      }
    }
  }
}
```
