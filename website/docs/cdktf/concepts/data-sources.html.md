---
layout: "docs"
page_title: "Data Sources in CDK for Terraform"
sidebar_current: "cdktf"
description: "Use data sources to allow Terraform to use external data, function output, and data from other configurations."
---

# Data Sources

[Terraform data sources](https://www.terraform.io/docs/configuration/data-sources.html) fetch information from external APIs and from other Terraform configurations. For example, you may want to import disk image IDs from a cloud provider or share data between configurations for different parts of your infrastructure.

## When to Use Data Sources

Use data sources when you need to reference dynamic data that is not known until after Terraform applies a configuration. For example, instance IDs that cloud providers assign on creation.

When data is static or you know the values before [synthesizing your code](/cdktf/cli-reference/commands.html#synth), we recommend creating static references in your preferred programming language or using [Terraform variables](./variables-and-outputs.html).

## Define Data Sources

Data Sources are part of a [Terraform provider](./providers-and-resources.html). All classes representing Data Sources are prefixed with `Data`.

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

The [`terraform_remote_state` data source](https://www.terraform.io/docs/language/state/remote-state-data.html) retrieves state data from a remote [Terraform backend](https://www.terraform.io/docs/backends/index.html). This allows you to use the root-level outputs of one or more Terraform configurations as input data for another configuration. For example, a core infrastructure team can handle building the core machines, networking, etc. and then expose some information to other teams that allows them to run their own infrastructure. Refer to the [Remote Backends page](website/docs/cdktf/concepts/remote-backends.html.md) for more details.

In the TypeScript example below, the global `DataTerraformRemoteState` is used to reference a Terraform Output of another Terraform configuration.

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
