// Copyright (c) HashiCorp, Inc
// SPDX-License-Identifier: MPL-2.0
import { Construct } from "constructs";
import {
  App,
  TerraformStack,
  TerraformIterator,
  TerraformVariable,
  Token,
  ref,
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

class ResourceTerraformIterator extends TerraformIterator {
  constructor(private readonly list: any) {
    super();
  }

  /**
   * Returns the currenty entry in the list or set that is being iterated over.
   * For lists this is the same as `iterator.value`. If you need the index,
   * use count using the escape hatch:
   * https://developer.hashicorp.com/terraform/cdktf/concepts/resources#escape-hatch
   */
  public get key(): any {
    return this._getKey();
  }

  /**
   * Returns the value of the current item iterated over.
   */
  public get value(): any {
    return this._getValue();
  }

  /**
   * @internal used by TerraformResource to set the for_each expression
   */
  public _getForEachExpression(): any {
    return this.list; // no wrapping as that is not working for resources
  }
}

interface Iteratable {
  iterator: TerraformIterator;
}

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
    return this.iterator.getString("id");
  }

  // This would live in terraform-element.ts
  get subjectListFqn() {
    const elementType = "aws_s3_bucket"; // this.subject._elementType
    return Token.asList(
      ref(
        `${elementType}.${this.subject.friendlyUniqueId}`,
        TerraformStack.of(this.subject)
      )
    );
  }

  get iterator() {
    return new ResourceTerraformIterator(this.subjectListFqn);
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
    it: TerraformIterator | Iteratable,
    scope: Construct,
    name: string,
    config: S3BucketObjectConfig
  ): S3BucketObjectList {
    return new S3BucketObjectList(
      "iterator" in it ? it.iterator : it,
      scope,
      name,
      config
    );
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

    S3BucketObject.forEach(bucketList, this, "s3_object", {
      bucket: bucketList.id,
      key: "index.html",
      source: "index.html",
      acl: "private",
    });
  }
}

const app = new App();
new MyStack(app, "typescript-aws-cloudfront-proxy");
app.synth();
