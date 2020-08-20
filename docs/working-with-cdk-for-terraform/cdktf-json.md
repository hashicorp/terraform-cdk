# cdktf.json Configuration File

With the `cdktf.json` in your project root directory you can configure the behaviour of the Terraform CDK CLI:

## Specification

```ts
export enum Language {
  TYPESCRIPT = 'typescript',
  PYTHON = 'python',
  DOTNET = 'dotnet', // not yet supported
  JAVA = 'java', // not yet supported
}

export interface Config {
  readonly app?: string; // The command to run in order to synthesize the code to Terraform compatible JSON
  readonly language?: Language; // Target language for building provider or module bindings. Currently supported: `typescript` or `python`
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

A minimal configuration would define `app` only. This is useful, when planning to use [prebuilt providers]() and therefore no provider or modules bindings should be generated.

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
  "output": "my-workdir",
}
```

### Building Providers

This will synthesize JSON into `my-workdir` and all Terraform operations - such as `deploy` or `destroy` - will be performed in this directory. See more details about this [here](./using-providers-and-modules.md)

```json
{
  "language": "typescript",
  "app": "npm run --silent compile && node main.js",
  "terraformProviders": [
    "aws@~> 2.0"
  ]
}
```

### Building Providers in Custom Directory

This will generate the `aws` provider bindings in the folder `./imports`.

```json
{
  "language": "typescript",
  "app": "npm run --silent compile && node main.js",
  "terraformProviders": [
    "aws@~> 2.0"
  ],
  "codeMakerOutput": "imports"
}
```

