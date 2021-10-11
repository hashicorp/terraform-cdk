# Telemetry

CDK for Terraform CLI ([cdktf-cli](../../packages/cdktf-cli)) interacts with a HashiCorp service called [Checkpoint](https://checkpoint.hashicorp.com)
to report project metrics such as cdktf version, project language, provider name, platform name, and other details that help guide the project maintainers with feature and roadmap decisions. Starting with CDK for Terraform 0.6, this information will also include a random UUID that uniquely identifies the machine, and new projects will have a project-specific UUID added to the cdktf.json file. The purpose of these UUIDs is to help the team understand how the tool is being used in order to help us prioritize features. The code that interacts with Checkpoint is part of CDK for Terraform CLI and can be read [here](../../packages/cdktf-cli/lib/checkpoint.ts).

All HashiCorp projects including Terraform that is used by CDK for Terraform use Checkpoint.
Read more about project metrics [here](https://github.com/hashicorp/terraform-cdk/issues/325).

The information that is sent to Checkpoint is anonymous and cannot be used to identify the user or host. The use of Checkpoint is completely optional
and it can be disabled at any time by setting the `CHECKPOINT_DISABLE` environment variable to a non-empty value.
