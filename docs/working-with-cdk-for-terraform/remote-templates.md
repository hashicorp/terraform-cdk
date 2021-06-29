# Remote Templates

Templates allow scaffolding a new CDK for Terraform project. When you setup a new project via `cdktf init` you can supply one of the [built-in templates](../../packages/cdktf-cli/templates) (e.g. `typescript` or `python`) or use your own. This document describes how to create your own template to use with `cdktf init`.

## Using Remote Templates

Currently the `cdktf` supports downloading and extracting a zip archive containing the files for the template. When extracting the archive, it searches for the `cdktf.json` file. If that file cannot be found in the root directory, it walks all directories until it finds the file. This allows creating an archive that contains e.g. a `README.md` in the root directory explaining things which itself won't turn up in the created project directory. However, most templates won't make use of it.

If you're using a Github repository for your template, you can create URLs to your repo as follows

#### main branch

`https://github.com/<user or organization>/<repo>/archive/refs/heads/main.zip`

#### tag `v.0.0.1`

`https://github.com/<user or organization>/<repo>/archive/refs/tags/v0.0.1.zip`

**Please Note:** Currently only urls to zip archives can be specified, hence only url based authentication mechanisms are supported. If you need support for private packages, please [file an issue](https://github.com/hashicorp/terraform-cdk/issues/new?labels=enhancement%2C+new&template=feature-request.md).

## Creating Remote Templates

A template is a directory, containing at least a `cdktf.json` file, which is required for the `cdktf` CLI.  
For scaffolding a new project the library [`sscaff`](https://github.com/awslabs/node-sscaff) is used. `sscaff` basically copies all files into the new directory while allowing for substitutions and hooks.

### Using Substitutions

A template can make use of substitutions for filenames and file content. To specify your own variables, use Hooks (see below).  
Besides the [built-in substitutions of](https://github.com/awslabs/node-sscaff#built-in-substitutions) `sccaff` the CDK for Terraform supplies some more variables that can be used in templates:

#### User input

```typescript
Name: string;
Description: string;
OrganizationName: string;
WorkspaceName: string;
```

These variables hold the input of the user and can for example be used in project files like `package.json` or similar.

#### Versions

```typescript
cdktf_version: string;
constructs_version: string;
npm_cdktf: string;
npm_cdktf_cli: string;
pypi_cdktf: string;
mvn_cdktf: string;
nuget_cdktf: string;
```

Those variables contain versions that are relative to the cdktf-cli that scaffolds the template. See the [built-in templates](../../packages/cdktf-cli/templates) as reference of how you can use them.

### Using `pre` and `post` Hooks

[Hooks](https://github.com/awslabs/node-sscaff#hooks) allow you to run additional logic before and after the generation of the output.

### Debugging

To debug your templates you can add `console.log()` statements to your hook functions. Their output is displayed while initializing from a template.  
If you set the environment flag `CDKTF_LOG_LEVEL` to `debug` you will see more debugging output (e.g. the temporary directory into which your zip archive is downloaded; which can help if you're unsure how your archive behaves).
