---
layout: "docs"
page_title: "Data Sources in CDK for Terraform"
sidebar_current: "cdktf"
description: "Use data sources to allow Terraform to use external data, function output, and data from other configurations."
---

# Data Sources

[Terraform data sources](https://www.terraform.io/docs/configuration/data-sources.html) fetch information from external APIs and from other Terraform configurations. For example, you may want to import disk image IDs from a cloud provider or share data between configurations for different parts of your infrastructure.

## When to Use Data Sources

Data Sources are useful to reference data which is not known at synth time. If the data is rather static and known ahead of synth, it's recommended to create static references in your programming language of choice. [Terraform Variables] is another way to parameterize a CDK for Terraform application. That's particularily useful in scenarios where the cdktf ouput is treated as a deployable artifact and needs to be paramterized.

## Define Data Sources

Similar to Resources, Data Sources are part of a Terraform provider. Find more details about using [providers here](docs/working-with-cdk-for-terraform/using-providers.md). All classes representing Data Sources are prefixed with `Data`.

In the TypeScript example below, a Terraform data source fetches the AWS region `DataAwsRegion` from the AWS provider.

```typescript
.....
import { DataAwsRegion } from './gen/providers/aws'

export class HelloTerraform extends TerraformStack {
    constructor(scope: Construct, id: string) {
        super(scope, id);

        .....
        const region = new DataAwsRegion(this, 'region')
    }
}
```

## Remote State Data Source

The [`terraform_remote_state` data source](https://www.terraform.io/docs/language/state/remote-state-data.html) retrieves state data from a remote [Terraform backend](https://www.terraform.io/docs/backends/index.html). This allows you to use the root-level outputs of one or more Terraform configurations as input data for another configuration. For example, a core infrastructure team can handle building the core machines, networking, etc. and then expose some information to other teams that allows them to run their own infrastructure.

In the TypeScript example below, the global `DataTerraformRemoteState` is used to reference a Terraform Output of another Terraform configuration. Learn more about using [Remote Backends here](website/docs/cdktf/concepts/remote-backends.html.md)

```typescript
.....
import { DataTerraformRemoteState } from 'cdktf';

export class HelloTerraform extends TerraformStack {
    constructor(scope: Construct, id: string) {
        super(scope, id);

        .....
        const remoteState = new DataTerraformRemoteState(this, {
            organization: 'hashicorp',
            workspaces: {
                name: 'vpc-prod'
            }
        });

        new AwsInstance(this, 'foo', {
            ....
            subnetId: remoteState.get('subnet_id')
        });
    }
}
```
