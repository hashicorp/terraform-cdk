// Copyright (c) HashiCorp, Inc
// SPDX-License-Identifier: MPL-2.0
import { Construct } from "constructs";
import {
  App,
  TerraformStack,
  TerraformIterator,
  TerraformVariable,
  Token,
} from "cdktf";
import { AwsProvider } from "./.gen/providers/aws/provider";

import {
  S3Bucket as OriginalS3Bucket,
  S3BucketConfig,
} from "./.gen/providers/aws/s3-bucket";
import {
  S3BucketObject as OriginalS3BucketObject,
  S3BucketObjectConfig,
} from "./.gen/providers/aws/s3-bucket-object";

class S3BucketList {
  private subject: S3Bucket;
  constructor(
    it: TerraformIterator,
    scope: Construct,
    name: string,
    config: S3BucketConfig
  ) {
    this.subject = new S3Bucket(scope, name, {
      ...config,
      forEach: it,
    });
  }

  get id() {
    // This only works since we "cheat" the type system beforehand by returning
    // a reference to a list of strings instead of the string that is returned type wise
    return TerraformIterator.fromList(Token.asList(this.subject.id));
  }
}
class S3Bucket extends OriginalS3Bucket {
  static forEach(
    it: TerraformIterator,
    scope: Construct,
    name: string,
    config: S3BucketConfig
  ): S3BucketList {
    return new S3BucketList(it, scope, name, config);
  }
}

class S3BucketObjectList extends OriginalS3BucketObject {
  constructor(
    it: TerraformIterator,
    scope: Construct,
    name: string,
    config: S3BucketObjectConfig
  ) {
    super(scope, name, { ...config, forEach: it });
  }
}

class S3BucketObject extends OriginalS3BucketObject {
  static forEach(
    it: TerraformIterator,
    scope: Construct,
    name: string,
    config: S3BucketObjectConfig
  ): S3BucketObjectList {
    return new S3BucketObjectList(it, scope, name, config);
  }
}

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

    const bucketNameIterator = TerraformIterator.fromList(
      bucketNames.listValue
    );
    const bucketList = S3Bucket.forEach(bucketNameIterator, this, "s3_bucket", {
      bucketPrefix: bucketNameIterator.value,
      acl: "private",
    });

    const bucketNameReferencesIterator = bucketList.id;
    S3BucketObject.forEach(bucketNameReferencesIterator, this, "s3_object", {
      bucket: bucketNameReferencesIterator.value,
      key: "index.html",
      source: "index.html",
      acl: "private",
    });
  }
}

const app = new App();
new MyStack(app, "typescript-aws-cloudfront-proxy");
app.synth();
