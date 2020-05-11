# cdktf-cli

CDK for Terraform CLI

## Install

```bash
$ npm install -g cdktf-cli
```

## Usage

```bash
$ cdktf --help
```

Help output:

```
cdktf [command]

Commands:
  cdktf get [OPTIONS]   Generate CDK Constructs for Terraform providers and modules.
  cdktf init [OPTIONS]  Create a new cdktf project from a template.
  cdktf synth           Synthesizes Terraform code for the given app in a directory.  [aliases: synthesize]

Options:
  --version  Show version number  [boolean]
  --help     Show help  [boolean]

Options can be specified via environment variables with the "CDKTF_" prefix (e.g. "CDKTF_OUTPUT")
```

## Available commands

* [get](#cdktf-get)
* [init](#cdktf-init)
* [synth](#cdktf-synth)

### cdktf get

This command downloads the providers and modules for an application and 
generates CDK constructs for them. It can use the `cdktf.json` configuration file to read the list of providers
and modules.

```bash
$ cdktf get --help
```

Help output:

```
cdktf get [OPTIONS]

Generate CDK Constructs for Terraform providers and modules.

Options:
  --version        Show version number  [boolean]
  --help           Show help  [boolean]
  --providers, -p  Generate Constructs for given providers. Example: "aws@~> 2.5"  [array]
  --modules, -m    Generate Constructs for given modules. Example: "terraform-aws-modules/vpc/aws"  [array]
  --output, -o     Output directory  [string] [default: ".gen"]
  --language, -l   Output programming language  [string] [required]
```

Examples:

Download providers and modules by specifying them via the CLI.

```bash
$ cdktf get --providers="aws@~> 2.5" --modules="terraform-aws-modules/vpc/aws"
```

Download providers and modules defined in the `cdktf.json` configuration file.

```bash
$ cat cdktf.json
{
  "language": "typescript",
  "app": "node main.js",
  "terraformProviders": ["aws@~> 2.0"]
}
```

```bash
$ cdktf get
```

### cdktf init

This command creates a new CDK for Terraform project using a template.

```sh
$ cdktf init --help
```

Help output:

```
cdktf init [OPTIONS]

Create a new cdktf project from a template.

Options:
  --version        Show version number  [boolean]
  --help           Show help  [boolean]
  --template       The template name to be used to create a new project.  [string] [required] [choices: "typescript"]
  --dist           Install dependencies from a "dist" directory (for development)  [string]
  --cdktf-version  The cdktf version to use while creating a new project.  [string] [default: "0.0.2-alpha.2"]
```

Examples:

Create a new Typescript project.

```bash
$ cdktf init --template="typescript"
```

Create a new Python project and use a specific version of `cdktf` package.

```bash
$ cdktf init --tempalte="python" --cdktf-version="0.0.1"
```

### cdktf synth

This command synthesizes Terraform configuration for an application.

```sh
$ cdktf synth --help
```

Help output:

```
cdktf synth

Synthesizes Terraform code for the given app in a directory.

Options:
  --version     Show version number  [boolean]
  --help        Show help  [boolean]
  --app, -a     Command to use in order to execute cdktf app  [required]
  --output, -o  Output directory  [required] [default: "dist"]
```

Examples:

Synthesize code for a given application.

```bash
$ cdktf synth
```

Synthesize code when providing custom command to execute and an output directory.

```bash
$ cdktf synth --app="npm compile && node main.js" --output="dirname"
```
