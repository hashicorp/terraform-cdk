# Terraform Data Sources

[Terraform data sources](https://www.terraform.io/docs/configuration/data-sources.html) allow data to be fetched to be used in Terraform configuration.

In TypeScript, a Terraform data source can fetches the AWS region can be expressed by `DataAwsRegion`.

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

# Terraform Remote State

[Terraform remote state](https://www.terraform.io/docs/providers/terraform/d/remote_state.html) retrieves state data from a [Terraform backend](https://www.terraform.io/docs/backends/index.html). This allows you to use the root-level outputs of one or more Terraform configurations as input data for another configuration.

Typescript example usage:
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

Python example with state stored on S3 and locking with DynamoDB:
```python
from cdktf import S3Backend

# Bucket and table must be created first
# Replace with your own values
bucket_and_table_name = 'replace'
region = 'us-east-2'

state = {
    'bucket': bucket_and_table_name,
    'key': ns,
    'region': region,
    'encrypt': True,
    'dynamodb_table': bucket_and_table_name
}
S3Backend(self, **state)
```
