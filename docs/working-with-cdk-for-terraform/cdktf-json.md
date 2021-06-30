# cdktf.json Configuration File

With the `cdktf.json` in your project root directory you can configure the behaviour of the Terraform CDK CLI:

## Specification

```ts
export enum Language {
  TYPESCRIPT = "typescript",
  PYTHON = "python",
  CSHARP = "csharp",
  JAVA = "java",
  GO = "go",
}

export interface Config {
  readonly app?: string; // The command to run in order to synthesize the code to Terraform compatible JSON
  readonly language?: Language; // Target language for building provider or module bindings. Currently supported: `typescript`, `python`, `java`, `csharp`, and `go`
  readonly output: string; // Default: 'cdktf.out'. Where the synthesized JSON should go. Also will be the working directory for Terraform operations
  readonly codeMakerOutput: string; // Default: '.gen'. Path where generated provider bindings will be rendered to.
  readonly terraformProviders?: string[]; // Terraform Providers to build
  readonly terraformModules?: string[]; // Terraform Modules to build
}
```

### Terraform Providers and Modules

The [following specifications](https://www.terraform.io/docs/configuration/provider-requirements.html#requiring-providers) schema should be followed for providers and modules

[source](https://www.terraform.io/docs/configuration/provider-requirements.html#source-addresses)@[version](https://www.terraform.io/docs/configuration/provider-requirements.html#version-constraints)

#### For HashiCorp maintained providers

Official HashiCorp [maintained providers](https://registry.terraform.io/browse/providers?tier=official) (e.g. `aws`, `google` or `azurerm`) can be specified in a short version like this: `"aws@~> 2.0"`

#### 3rd Party Providers

Community providers have to provide a fully qualified name, e.g. to define the Docker provider: `terraform-providers/docker@~> 2.0`

#### Modules

Similar to 3rd Party providers, the full registry namespace should be provided. Please note that only modules from the registry are supported at this point.

## Examples

### Minimal Configuration

A minimal configuration would define `app` only. This is useful, when planning to use [prebuilt providers](https://github.com/terraform-cdk-providers) and therefore no provider or modules bindings should be generated.

```json
{
  "app": "npm run --silent compile && node main.js"
}
```

### Changing Code Output Directories

This will synthesize JSON into `my-workdir` and all Terraform operations - such as `deploy` or `destroy` - will be performed in this directory.

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

This combines examples above, a `cdktf get` will build both the AWS provider and the latest `terraform-aws-modules/vpc/aws` module from the Terraform Registry.

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

This will generate the `aws` provider bindings in the folder `./imports`. This is used in the Python template, to make it easier to reference the generated classes.

```json
{
  "language": "python",
  "app": "pipenv run ./main.py",
  "terraformProviders": ["aws@~> 2.0"],
  "codeMakerOutput": "imports"
}
```
