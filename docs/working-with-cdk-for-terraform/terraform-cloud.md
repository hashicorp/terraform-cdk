# Connect Terraform Cloud with the CDK for Terraform

This document describes two ways to connect Terraform Cloud with your CDK for Terraform codebase to continuously deploy your infrastructure.

## Using the Terraform Cloud VCS Integration
Terraform Cloud supports [connecting to VCS providers](https://www.terraform.io/docs/cloud/vcs/index.html). To use the VCS integration, commit the generated Terraform config (e.g. the `cdk.tf.json` and other files in `cdktf.out`) alongside your code so Terraform Cloud can use it to deploy your infrastructure.

## Using an external CI service
If you prefer to keep the generated artefacts out of your repository, use any CI (Continuous Integration) service to build and deploy them instead. The CDK for Terraform CLI supports deploying to Terraform Cloud using either the local or remote execution mode. For more information on how runs work in Terraform Cloud, see [Terraform Runs and Remote Operations](https://www.terraform.io/docs/cloud/run/index.html).  
In your CI steps use the `cdktf-cli` commands to synthesize your code and deploy your infrastructure:
```
cdktf deploy --auto-approve
```