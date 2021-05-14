# Terraform Assets

A Terraform Asset takes a file or directory outside of the CDK for Terraform context and moves it into it. Assets copy referenced files into the stacks context for further usage in other resources.

```typescript
import * as path from "path";
import { Construct } from "constructs";
import { App, TerraformStack, TerraformAsset, AssetType } from "cdktf";
import { AwsProvider } from "./.gen/providers/aws/aws-provider";
import { S3BucketObject } from "./.gen/providers/aws/s3-bucket-object";
import { S3Bucket } from "./.gen/providers/aws/s3-bucket";


class MyStack extends TerraformStack {
  constructor(scope: Construct, name: string) {
    super(scope, name);

    new AwsProvider(this, "provider", {
      region: "us-west-2",
    });

    const bucket = new S3Bucket(this, "bucket", {
      bucket: "demo",
    });

    const asset = new TerraformAsset(this, "lambda-asset", {
      path: path.resolve(__dirname, "../lambda"),
      type: AssetType.ARCHIVE, // if left empty it infers directory and file
    });

    new S3BucketObject(this, "lambda-archive", {
      bucket: bucket.bucket,
      key: "lambda.zip",
      source: asset.path,
    });
  }
}


const app = new App();
new MyStack(app, "demo");
app.synth();
```

## Dependencies

Using `AssetType.ARCHIVE` requires `zip` to be installed and in the path.
