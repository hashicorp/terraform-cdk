// Copyright (c) HashiCorp, Inc
// SPDX-License-Identifier: MPL-2.0
import { Construct } from "constructs";
import { App, TerraformOutput, TerraformStack, TerraformVariable } from "cdktf";

import { AwsProvider } from "./.gen/providers/aws/provider";
import { S3Bucket } from "./.gen/providers/aws/s3-bucket";
import { S3BucketObject } from "./.gen/providers/aws/s3-bucket-object";
import { S3BucketAcl } from "./.gen/providers/aws/s3-bucket-acl/index";

class MyStack extends TerraformStack {
  constructor(scope: Construct, ns: string) {
    super(scope, ns);

    new AwsProvider(this, "aws", {
      region: "eu-central-1",
    });

    const bucketNames = new TerraformVariable(this, "s3_bucket_names", {
      type: "list",
      default: ["my-first-bucket", "my-second-bucket"],
    });

    const filesToUpload = new TerraformVariable(this, "files", {
      type: "list",
      default: ["index.html", "404.html", "5xx.html"],
    });

    const s3Buckets = bucketNames.listValue.map((bucketName) => {
      return new S3Bucket(this, "s3_bucket", {
        bucketPrefix: bucketName,
      });
    });

    s3Buckets.forEach((s3Bucket) => {
      new S3BucketAcl(this, "s3_bucket_acl", {
        bucket: s3Bucket.id,
        acl: "private",
      });
    });

    s3Buckets.forEach((s3Bucket) => {
      filesToUpload.listValue.forEach((file) => {
        new S3BucketObject(this, "s3_object", {
          bucket: s3Bucket.id,
          key: file,
          source: file,
          acl: "private",
        });
      });
    });

    new TerraformOutput(this, "first_bucket", {
      value: s3Buckets[0].id,
    });

    new TerraformOutput(this, "second_bucket", {
      value: s3Buckets[1].id,
    });
  }
}

const app = new App();
new MyStack(app, "typescript-aws-cloudfront-proxy");
app.synth();
