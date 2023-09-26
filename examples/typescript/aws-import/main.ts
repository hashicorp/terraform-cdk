// Copyright (c) HashiCorp, Inc
// SPDX-License-Identifier: MPL-2.0
import { Construct } from "constructs";
import { App, TerraformStack } from "cdktf";
import { AwsProvider } from "./.gen/providers/aws/provider";
import { S3Bucket } from "./.gen/providers/aws/s3-bucket";

class StackWithImport extends TerraformStack {
  constructor(scope: Construct, ns: string) {
    super(scope, ns);

    const bucketId = "best-bucket-in-the-world";
    // Step 1: Create a S3Bucket in the AWS web ui
    // https://s3.console.aws.amazon.com/s3/buckets?region=us-east-1&region=us-east-1

    new AwsProvider(this, "aws", {
      region: "us-east-1",
    });

    // Step 2: Create importable resource
    new S3Bucket(this, "bucket", {}).importFrom(bucketId);

    // Step 3: Run `cdktf apply`
    // Step 4: Remove the `importFrom` call, the resource is now imported
  }
}

class StackWithImportAndConfigurationGeneration extends TerraformStack {
  constructor(scope: Construct, ns: string) {
    super(scope, ns);

    const bucketId = "best-bucket-in-the-world";
    // Step 1: Create a S3Bucket in the AWS web ui
    // https://s3.console.aws.amazon.com/s3/buckets?region=us-east-1&region=us-east-1

    new AwsProvider(this, "aws", {
      region: "us-east-1",
    });

    // Step 2: Create import block
    S3Bucket.generateConfigForImport(this, "bucket", bucketId);

    // Step 3: Run `cdktf plan` and get the configuration to put in below
    // Step 4: Remove the `import` call, the resource is now imported
  }
}

const app = new App();
new StackWithImport(app, "ts-import");
new StackWithImportAndConfigurationGeneration(
  app,
  "ts-import-with-configuration"
);
app.synth();
