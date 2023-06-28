// Copyright (c) HashiCorp, Inc
// SPDX-License-Identifier: MPL-2.0
import { Construct } from "constructs";
import { App, TerraformStack } from "cdktf";
import { AwsProvider } from "./.gen/providers/aws/provider";
import { S3Bucket } from "./.gen/providers/aws/s3-bucket/index";

class MyStack extends TerraformStack {
  constructor(scope: Construct, ns: string) {
    super(scope, ns);

    // Step 1: Create a S3Bucket in the AWS web ui
    // https://s3.console.aws.amazon.com/s3/buckets?region=us-east-1&region=us-east-1

    new AwsProvider(this, "aws", {
      region: "us-east-1",
    });

    // Step 2: Create importable resource
    const bucketId = "best-bucket-in-the-world";
    S3Bucket.import(this, "bucket", bucketId);
  }
}

const app = new App();
new MyStack(app, "typescript-aws-cloudfront-proxy");
app.synth();
