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
  cdktf deploy [OPTIONS]   Deploy the given stack
  cdktf destroy [OPTIONS]  Destroy the given stack
  cdktf diff [OPTIONS]     Perform a diff (terraform plan) for the given stack
  cdktf get [OPTIONS]      Generate CDK Constructs for Terraform providers and modules.
  cdktf init [OPTIONS]     Create a new cdktf project from a template.
  cdktf login              Retrieves an API token to connect to Terraform Cloud.
  cdktf synth [OPTIONS]    Synthesizes Terraform code for the given app in a directory.                                                                                                    [aliases: synthesize]

Options:
  --version          Show version number                                                                                                                                                               [boolean]
  --disable-logging  Dont write log files. Supported using the env CDKTF_DISABLE_LOGGING.                                                                                              [boolean] [default: true]
  --log-level        Which log level should be written. Only supported via setting the env CDKTF_LOG_LEVEL                                                                                              [string]
  -h, --help         Show help                                                                                                                                                                         [boolean]

Options can be specified via environment variables with the "CDKTF_" prefix (e.g. "CDKTF_OUTPUT")
```

### CI environment

If running in automated environments, the dynamic CLI output rendering can be forced to be static with the `CI` enviornment variable set to a trueish value.

## Available commands

* [get](#cdktf-get)
* [init](#cdktf-init)
* [synth](#cdktf-synth)
* [diff](#cdktf-diff)
* [deploy](#cdktf-deploy)
* [destroy](#cdktf-destroy)
* [login](#cdktf-login)

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
  --version          Show version number                                                                                                            [boolean]
  --disable-logging  Dont write log files. Supported using the env CDKTF_DISABLE_LOGGING.                                           [boolean] [default: true]
  --log-level        Which log level should be written. Only supported via setting the env CDKTF_LOG_LEVEL                                           [string]
  --output, -o       Output directory for generated Constructs                                                                     [string] [default: ".gen"]
  --language, -l     Output programming language                                [string] [required] [choices: "typescript", "python", "java", "csharp", "go"]
  -h, --help         Show help                                                                                                                      [boolean]
```

Examples:

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
  --version              Show version number                                                                                                                                  [boolean]
  --disable-logging      Dont write log files. Supported using the env CDKTF_DISABLE_LOGGING.                                                                 [boolean] [default: true]
  --log-level            Which log level should be written. Only supported via setting the env CDKTF_LOG_LEVEL                                                                 [string]
  --template             The template name to be used to create a new project.                                                               [string] [choices: "python", "typescript", "java", "csharp", "go"]
  --project-name         The name of the project.                                                                                                                              [string]
  --project-description  The description of the project.                                                                                                                       [string]
  --dist                 Install dependencies from a "dist" directory (for development)                                                                                        [string]
  --local                Use local remote state storage for generated Terraform.                                                                             [boolean] [default: false]
  --cdktf-version        The cdktf version to use while creating a new project.                                                                             [string] [default: "0.0.0"]
  -h, --help             Show help                                                                                                                                            [boolean]
```

Examples:

Create a new Typescript project.

```bash
$ cdktf init --template="typescript"
```

Create a new Python project and use a specific version of the `cdktf` package.

```bash
$ cdktf init --template="python" --cdktf-version="0.0.1"
```

### cdktf synth

This command synthesizes Terraform configuration for an application.

```sh
$ cdktf synth --help
```

Help output:

```
cdktf synth [OPTIONS]

Synthesizes Terraform code for the given app in a directory.

Options:
  --version          Show version number                                                                                                                                           [boolean]
  --disable-logging  Dont write log files. Supported using the env CDKTF_DISABLE_LOGGING.                                                                          [boolean] [default: true]
  --log-level        Which log level should be written. Only supported via setting the env CDKTF_LOG_LEVEL                                                                          [string]
  --app, -a          Command to use in order to execute cdktf app
  --output, -o       Output directory                                                                                                                                 [default: "cdktf.out"]
  --json             Provide JSON output for the generated Terraform configuration.                                                                               [boolean] [default: false]
  -h, --help         Show help                                                                                                                                                     [boolean]
```

Examples:

Synthesize code for a given application.

```bash
$ cdktf synth
```

Synthesize code when providing a custom command to execute and an output directory.

```bash
$ cdktf synth --app="npm compile && node main.js" --output="dirname"
```

Synthesize code for a given application and output the Terraform JSON configuration.

```bash
$ cdktf synth --json
```

### cdktf diff

This command generates a diff for a given application by running Terraform plan.

```bash
$ cdktf diff --help
```

Help output:

```
cdktf diff [OPTIONS]

Perform a diff (terraform plan) for the given stack

Options:
  --version          Show version number                                                                                                                                           [boolean]
  --disable-logging  Dont write log files. Supported using the env CDKTF_DISABLE_LOGGING.                                                                          [boolean] [default: true]
  --log-level        Which log level should be written. Only supported via setting the env CDKTF_LOG_LEVEL                                                                          [string]
  --app, -a          Command to use in order to execute cdktf app                                                                                                                 [required]
  --output, -o       Output directory                                                                                                                      [required] [default: "cdktf.out"]
  -h, --help         Show help                                                                                                                                                     [boolean]
```

Examples:

Generate a diff for a given application.

```bash
$ cdktf diff
```

### cdktf deploy

This command deploys a given application.

```bash
$ cdktf deploy --help
```

Help output:

```
cdktf deploy [OPTIONS]

Deploy the given stack

Options:
  --version          Show version number                                                                                                                                           [boolean]
  --disable-logging  Dont write log files. Supported using the env CDKTF_DISABLE_LOGGING.                                                                          [boolean] [default: true]
  --log-level        Which log level should be written. Only supported via setting the env CDKTF_LOG_LEVEL                                                                          [string]
  --app, -a          Command to use in order to execute cdktf app                                                                                                                 [required]
  --output, -o       Output directory                                                                                                                      [required] [default: "cdktf.out"]
  --auto-approve     Auto approve                                                                                                                                 [boolean] [default: false]
  -h, --help         Show help                                                                                                                                                     [boolean]
```

Examples:

Deploy a given application.

```bash
$ cdktf deploy
```

Deploy a given application with auto approval of the diff (Terraform plan).

```bash
$ cdktf deploy --auto-approve
```

### cdktf destroy

This command destroys a given application.

```bash
$ cdktf destroy --help
```

Help output:

```
cdktf destroy [OPTIONS]

Destroy the given stack

Options:
  --version          Show version number                                                                                                                                           [boolean]
  --disable-logging  Dont write log files. Supported using the env CDKTF_DISABLE_LOGGING.                                                                          [boolean] [default: true]
  --log-level        Which log level should be written. Only supported via setting the env CDKTF_LOG_LEVEL                                                                          [string]
  --app, -a          Command to use in order to execute cdktf app                                                                                                                 [required]
  --output, -o       Output directory                                                                                                                      [required] [default: "cdktf.out"]
  --auto-approve     Auto approve                                                                                                                                 [boolean] [default: false]
  -h, --help         Show help                                                                                                                                                     [boolean]
```

Examples:

Destroy a given application.

```bash
$ cdktf destroy
```

Destroy a given application with auto approval of the diff (Terraform plan).

```bash
$ cdktf destroy --auto-approve
```

### cdktf login

This command helps login to Terraform Cloud by fetching a Terraform Cloud API token.

```bash
$ cdktf login --help
```

Help output:

```
cdktf login

Retrieves an API token to connect to Terraform Cloud.

Options:
  --version          Show version number                                                                                                                                           [boolean]
  --disable-logging  Dont write log files. Supported using the env CDKTF_DISABLE_LOGGING.                                                                          [boolean] [default: true]
  --log-level        Which log level should be written. Only supported via setting the env CDKTF_LOG_LEVEL                                                                          [string]
  -h, --help         Show help                                                                                                                                                     [boolean]
```

Examples:

Fetch an API token from Terraform Cloud.

```bash
$ cdktf login
```