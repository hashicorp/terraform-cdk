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
