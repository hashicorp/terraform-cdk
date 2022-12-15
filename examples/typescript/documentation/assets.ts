// Copyright (c) HashiCorp, Inc
// SPDX-License-Identifier: MPL-2.0

// DOCS_BLOCK_START:assets
import { Construct } from "constructs";
import { TerraformStack } from "cdktf";
import { TerraformAsset, AssetType } from "cdktf";
import { AwsProvider } from "./.gen/providers/aws/provider";
import { S3Bucket } from "./.gen/providers/aws/s3-bucket";
import { S3BucketObject } from "./.gen/providers/aws/s3-bucket-object";
import * as path from "path";

export class AssetsStack extends TerraformStack {
  constructor(scope: Construct, name: string) {
    super(scope, name);

    new AwsProvider(this, "aws", {
      region: "us-west-2",
    });

    const bucket = new S3Bucket(this, "bucket", {
      bucket: "demo",
    });

    const asset = new TerraformAsset(this, "lambda-asset", {
      path: path.resolve(__dirname, "lambda"),
      type: AssetType.ARCHIVE, // if left empty it infers directory and file
    });

    new S3BucketObject(this, "lambda-archive", {
      bucket: bucket.bucket,
      key: asset.fileName,
      source: asset.path, // returns a posix path
    });
  }
}
// DOCS_BLOCK_END:assets
