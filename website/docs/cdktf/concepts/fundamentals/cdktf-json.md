---
layout: "docs"
page_title: "Configuration"
sidebar_current: "cdktf"
description: "Learn how to build a CDKTF application from a template, project structure, and configuration. "
---

# Configuration

The `cdktf.json` file lets you configure the behavior of the CDK for Terraform CLI and define the [providers](/docs/cdktf/concepts/fundamentals/providers.html) and [modules](docs/cdktf/concepts/fundamentals/modules.html) you want to use. Installing CDK for Terraform with a [built-in template](/docs/cdktf/create-and-deploy/project-setup.html) generates a basic `cdktf.json` file in your root directory that you can customize for your application.

## Specification

```ts
export enum Language {
  TYPESCRIPT = "typescript",
  PYTHON = "python",
  CSHARP = "csharp",
  JAVA = "java",
  GO = "go",
}

export interface TerraformDependencyConstraint {
  readonly name: string; // name of the module / provider
  readonly source?: string; // path / url / registry identifier for the module / provider
  readonly version?: string; // version constraint (https://www.terraform.io/docs/language/providers/requirements.html#version-constraints)
}
type RequirementDefinition = string | TerraformDependencyConstraint;

export interface Config {
  readonly app?: string; // The command to run in order to synthesize the code to Terraform compatible JSON
  readonly language?: Language; // Target language for building provider or module bindings. Currently supported: `typescript`, `python`, `java`, `csharp`, and `go`
  readonly output: string; // Default: 'cdktf.out'. Where the synthesized JSON should go. Also will be the working directory for Terraform operations
  readonly codeMakerOutput: string; // Default: '.gen'. Path where generated provider bindings will be rendered to.
  readonly projectId: string; // Default: generated UUID. Unique identifier for the project used to differentiate projects
  readonly terraformProviders?: RequirementDefinition[]; // Terraform Providers to build
  readonly terraformModules?: RequirementDefinition[]; // Terraform Modules to build
}
```

## Minimal Configuration

The most basic configuration only defines `app`. This is useful when you plan to use [prebuilt providers](/docs/cdktf/concepts/fundamentals/providers.html) and you don't need to generate any provider or module bindings.

```json
{
  "app": "npm run --silent compile && node main.js"
}
```

## Declare Providers and Modules

While we have a selection of pre-built providers (link), there are cases where you want to generate the type bindings for providers yourself (e.g. when a provider is not present as pre built provider, or a specific provider version is required for some reason). Modules always have to be built via `cdktf get` and thefore have to be present in the `cdktf.json`.

You must declare all of the providers and modules you want to generate code bindings for in your `cdktf.json` file. The [schema](https://www.terraform.io/docs/language/providers/requirements.html#source-addresses) for both providers and modules in CDK for Terraform consists of a name, a [source](https://www.terraform.io/docs/language/providers/requirements.html#source-addresses), and a [version constraint](https://www.terraform.io/docs/language/providers/requirements.html#version-constraints).

You can declare providers and modules using either JSON or a string with the format `source@ ~> version` .

### Provider Source

- **HashiCorp providers**: You can specify official HashiCorp [maintained providers](https://registry.terraform.io/browse/providers?tier=official) by their name on the Terraform Registry. For example, you can use `aws` to declare the official [AWS provider](https://registry.terraform.io/providers/hashicorp/aws/latest): `aws@ ~> 2.0`

- **Community providers**: You must provide the fully-qualified name. The fully-qualified name is available on the provider's registry page. For example, to define the [DataDog provider](https://registry.terraform.io/providers/DataDog/datadog/latest): `DataDog/datadog@ ~> 3.4.0`

### Module Source

- For modules on the Terraform Registry, provide the the full registry namespace. For example, to define the [AWS VPC module](https://registry.terraform.io/modules/terraform-aws-modules/vpc/aws/latest): `terraform-aws-modules/vpc/aws@ ~> 3.2.0`.

- For local modules please use the object format:
  TODO Please explain why.

  ```jsonc
  {
    // ...
    "moduleRequirements": [
      {
        "name": "myLocalModule",
        "source": "../my-modules/local-module"
      }
    ]
  }
  ```

### Version Constraint

When you declare providers and modules in the string format, add the [version constraint](https://www.terraform.io/docs/language/expressions/version-constraints.html#version-constraint-syntax) after the provider or module name separated by an `@`. For example, so `provider|module@ ~> version`. You can also omit the version constraint if you do not want to specify a particular version. When you omit the version constraint, CDK for Terraform downloads and uses the latest version.

When you declare providers in JSON, add the constraint in the `version` property. TODO Please provide an example of this in object format.

## Examples

### Changing the Output Directory

Defining `output` changes the directory where `cdktf` will put your generated Terraform configuration file. All Terraform operations will be performed from this directory.

The example below synthesizes the JSON Terraform configuration into `my-workdir`:

```json
{
  "app": "npm run --silent compile && node main.js",
  "output": "my-workdir"
}
```

### Building Providers

With this `terraformProviders` configuration, a `cdktf get` will build the latest AWS provider within the 2.X version range. The generated code will be saved into `.gen` by default. This can be adjusted with `codeMakerOutput`, see other examples below.

```json
{
  "language": "typescript",
  "app": "npm run --silent compile && node main.js",
  "terraformProviders": ["aws@~> 2.0"]
}
```

### Building Modules

With this `terraformModules` configuration, a `cdktf get` will build the latest `terraform-aws-modules/vpc/aws` module from the Terraform Registry. The generated code will be saved into `.gen` by default. This can be adjusted with `codeMakerOutput` - see other examples below.

```json
{
  "language": "typescript",
  "app": "npm run --silent compile && node main.js",
  "terraformModules": ["terraform-aws-modules/vpc/aws"]
}
```

### Building Providers & Modules

This combines examples above. A `cdktf get` will build both the AWS provider and the latest `terraform-aws-modules/vpc/aws` module from the Terraform Registry.

```json
{
  "language": "typescript",
  "app": "npm run --silent compile && node main.js",
  "terraformModules": ["terraform-aws-modules/vpc/aws"],
  "terraformProviders": ["aws@~> 2.0"]
}
```

### Building Multiple Providers

It's possible to build multiple providers or modules as well.

```json
{
  "language": "typescript",
  "app": "npm run --silent compile && node main.js",
  "terraformProviders": [
    "null",
    "aws",
    "google",
    "azurerm",
    "kubernetes",
    "consul",
    "vault",
    "nomad"
  ]
}
```

### Building Providers in Custom Directory

This generates the `aws` provider bindings in the folder `./imports`. This is used in the Python template to make it easier to reference the generated classes.

```json
{
  "language": "python",
  "app": "pipenv run ./main.py",
  "terraformProviders": ["aws@~> 2.0"],
  "codeMakerOutput": "imports"
}
```
