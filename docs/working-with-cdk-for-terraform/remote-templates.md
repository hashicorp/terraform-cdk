# Remote Templates

Templates allow scaffolding a new CDK for Terraform project. When you setup a new project via `cdktf init` you can supply one of the [built-in templates](../packages/cdktf-cli/templates) (e.g. `typescript` or `python`) or use your own. This document describes how to create your own template to use with `cdktf init`.

## Structure of a template
A template is a directory, containing at least a `cdktf.json` file, which is required for the `cdktf` CLI.  
For scaffolding a new project the library [`sscaff`](https://github.com/awslabs/node-sscaff) is used. `sscaff` basically copies all files into the new directory while allowing for substitutions and hooks.

### Using Substitutions
todo: Syntax: `{{}}`

### Using `pre` and `post` Hooks
todo: what do we do with pre and post hooks?

### Remote Templates
Currently the `cdktf` supports downloading and extracting a zip archive containing the files for the template. When extracting the archive, it searches for the `cdktf.json` file. If that file cannot be found in the root directory, it walks all directories until it finds the file. This allows creating an archive that contains e.g. a `README.md` in the root directory explaining things which itself won't turn up in the created project directory. However, most templates won't make use of it.  

If you're using a Github repository for your template, you can create URLs to your repo as follows
#### main branch
`https://github.com/<user or organization>/<repo>/archive/refs/heads/main.zip`  
#### tag `v.0.0.1`
`https://github.com/<user or organization>/<repo>/archive/refs/tags/v0.0.1.zip`

**Please Note:** Currently only public accessible zip archives are supported. If you need support for private packages, please [file an issue](https://github.com/hashicorp/terraform-cdk/issues/new?labels=enhancement%2C+new&template=feature-request.md).

### Debugging
todo: -> set log output


## Remote Template Example

todo: create files and put them in Github repo, run init and supply template via --template.