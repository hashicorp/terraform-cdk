---
layout: "docs"
page_title: "Assets"
sidebar_current: "cdktf"
description: "TODO: describe me"
---

# Assets

> **Hands-on:** Try the [Deploy Multiple Lambda Functions with TypeScript](https://learn.hashicorp.com/tutorials/terraform/cdktf-assets-stacks-lambda?in=terraform/cdktf) tutorial on HashiCorp Learn. This tutorial guides you through using a `TerraformAsset` to archive a Lambda function, uploading the archive to an S3 bucket, then deploying the Lambda function.

In CDKTF v0.4+, asset constructs let you manage assets for resources that need them, such as template_file, S3 bucket objects, or Lambda function archive files. You can use Terraform Assets to move existing files or directories into your CDK for Terraform application so that you can use them in CDKTF resources.

Assets are especially useful for:

- Lambda functions for copying over previously generated zip files
- S3 Content for deploying static local files

In the following example `TerraformAsset` is used to upload the contents of the specified directory to a S3 Bucket. The `TerraformAsset` is responsible for making sure the directory ends up in the correct output folder as a zip file. This zip file is then referenced by the `S3BucketObject`. The stack ouput directory in the `cdktf.out` folder is self contained and contains all assets referenced via `TerraformAsset`. This is important for workflows like in Terraform Cloud / Terraform Enterprise, where only the stack ouput folder is uploaded.

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
      key: asset.fileName,
      source: asset.path, // returns a posix path
    });
  }
}

const app = new App();
new MyStack(app, "demo");
app.synth();
```
