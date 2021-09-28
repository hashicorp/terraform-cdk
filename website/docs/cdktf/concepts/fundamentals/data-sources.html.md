---
layout: "docs"
page_title: "Data Sources in CDK for Terraform"
sidebar_current: "cdktf"
description: "Data sources allow Terraform to use external data, function output, and data from other configurations. Learn to use them in CDK for Terraform applications."
---

# Data Sources

[Terraform data sources](https://www.terraform.io/docs/configuration/data-sources.html) fetch information from external APIs and from other Terraform configurations. For example, you may want to import disk image IDs from a cloud provider or share data between configurations for different parts of your infrastructure.

## When to Use Data Sources

TODO Please insert some text about when you'd want to use these vs. what's already available in your programming language.

TODO: Please explain how these are different from input variables and when we would use this instead of an input variable.

## Define Data Sources

TODO: Please provide more detail. It looks like to define a Data Source, you have to first import the data from the place where it lives (in this case the AWS provider), prefixing the name with "Data".  then you can use use it?


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

In the TypeScript example below, TODO please explain what's going on here.

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
