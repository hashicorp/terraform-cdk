# Terraform Remote State

[Terraform remote state](https://www.terraform.io/docs/providers/terraform/d/remote_state.html) retrieves state data from a [Terraform backend](https://www.terraform.io/docs/backends/index.html). This allows you to use the root-level outputs of one or more Terraform configurations as input data for another configuration.

Typesciprt example usage:
```typescript
.....
import { TerraformCloudRemoteState } from 'cdktf';

export class HelloTerraform extends TerraformStack {
    constructor(scope: Construct, id: string) {
        super(scope, id);

        .....
        const remoteState = new TerraformCloudRemoteState(this, {
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