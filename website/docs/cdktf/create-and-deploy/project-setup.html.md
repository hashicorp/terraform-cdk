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

TO DO: Can you just tell us what basic files/directories will get generated as part of a template and briefly explain them? Then I think we can:

- Link users to the Examples page we're making so they can check out more complex structures
- Link users to the cdktf.json page, which will now be a part of this section :-)

## Convert Existing HCL project

Use the typescript template and add a flag on init to convert from an existing HCL project to TypeScript.

```
$ cdktf init --template=typescript --from-terraform-project /path/to/my/tf-hcl-project
```
