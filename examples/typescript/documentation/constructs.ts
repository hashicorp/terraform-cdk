// Copyright (c) HashiCorp, Inc
// SPDX-License-Identifier: MPL-2.0

// DOCS_BLOCK_START:constructs-scope
import { S3Bucket } from "./.gen/providers/aws/s3-bucket";
import { S3BucketWebsiteConfiguration } from "./.gen/providers/aws/s3-bucket-website-configuration";
import { AwsProvider } from "./.gen/providers/aws/provider";
// DOCS_BLOCK_END:constructs-scope

// DOCS_BLOCK_START:constructs,constructs-scope
import { Construct } from "constructs";
import { TerraformStack } from "cdktf";
// DOCS_BLOCK_END:constructs,constructs-scope
// DOCS_BLOCK_START:constructs
import { KubernetesWebAppDeployment } from "./constructs/kubernetes-web-app-deployment";
import { KubernetesProvider } from "./.gen/providers/kubernetes/provider";
import * as path from "path";

export class ConstructsStack extends TerraformStack {
  constructor(scope: Construct, name: string) {
    super(scope, name);

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
  }
}
// DOCS_BLOCK_END:constructs

// DOCS_BLOCK_START:constructs-scope

export class PublicS3Bucket extends Construct {
  public bucket: S3Bucket;
  constructor(scope: Construct, name: string) {
    super(scope, name); // This creates a new scope since we extend from construct

    // This bucket is in a different scope than the buckets
    // defined in `MyStack`. Therefore, it does not need a unique name.
    this.bucket = new S3Bucket(this, "bucket", {
      bucketPrefix: name,
    });

    new S3BucketWebsiteConfiguration(this, "bucket-website", {
      bucket: this.bucket.bucket,
      indexDocument: {
        suffix: "index.html",
      },
      errorDocument: {
        key: "5xx.html",
      },
    });
  }
}

export class ConstructsScopeStack extends TerraformStack {
  constructor(scope: Construct, name: string) {
    super(scope, name);

    new AwsProvider(this, "aws", {
      region: "us-west-2",
    });

    // Both buckets are inside of the same stack, meaning they share
    // the same scope. Therefore, their names must be unique.
    new PublicS3Bucket(this, "first-bucket");
    new PublicS3Bucket(this, "second-bucket");
  }
}
// DOCS_BLOCK_END:constructs-scope
