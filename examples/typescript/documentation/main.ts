// Copyright (c) HashiCorp, Inc
// SPDX-License-Identifier: MPL-2.0
// DOCS_BLOCK_START:assets,constructs
import { Construct } from "constructs";
import { App, TerraformStack } from "cdktf";
// DOCS_BLOCK_END:assets,constructs

// DOCS_BLOCK_START:assets
import { TerraformAsset, AssetType } from "cdktf";
import { AwsProvider } from "./.gen/providers/aws/provider";
import { S3Bucket } from "./.gen/providers/aws/s3-bucket";
import { S3BucketObject } from "./.gen/providers/aws/s3-bucket-object";
// DOCS_BLOCK_START:constructs
import * as path from "path";
// DOCS_BLOCK_END:assets

import { KubernetesWebAppDeployment } from "./custom-constructs";
import { KubernetesProvider } from "./.gen/providers/kubernetes/provider";

// DOCS_BLOCK_END:constructs

// DOCS_BLOCK_START:assets,constructs

class MyStack extends TerraformStack {
  constructor(scope: Construct, name: string) {
    super(scope, name);

    // DOCS_BLOCK_END:assets,constructs
    // DOCS_BLOCK_START:assets
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
    // DOCS_BLOCK_END:assets

    // DOCS_BLOCK_START:constructs
    new KubernetesProvider(this, "kind", {
      configPath: path.join(__dirname, "../kubeconfig.yaml"),
    });

    new KubernetesWebAppDeployment(this, "deployment", {
      image: "nginx:latest",
      replicas: 2,
      app: "myapp",
      component: "frontend",
      environment: "dev",
    });
    // DOCS_BLOCK_END:constructs
    // DOCS_BLOCK_START:assets,constructs
  }
}

const app = new App();
new MyStack(app, "demo");
app.synth();
// DOCS_BLOCK_END:assets,constructs
