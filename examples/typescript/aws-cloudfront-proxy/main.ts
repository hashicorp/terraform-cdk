// Copyright (c) HashiCorp, Inc
// SPDX-License-Identifier: MPL-2.0
import { Construct } from "constructs";
import {
  App,
  TerraformStack,
  TerraformIterator,
  TerraformVariable,
  TerraformElement,
} from "cdktf";
import { AwsProvider } from "./.gen/providers/aws/provider";

import { S3Bucket } from "./.gen/providers/aws/s3-bucket";
import { S3BucketObject } from "./.gen/providers/aws/s3-bucket-object";

export class ResourceTerraformIterator extends TerraformIterator {
  constructor(private readonly element: TerraformElement) {
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
    return this.element.fqn; // no wrapping as that is not working for resources
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
    const s3Bucket = new S3Bucket(this, "s3_bucket", {
      forEach: bucketNameIterator,
      bucketPrefix: bucketNameIterator.value,
      acl: "private",
    });

    // Read as TerraformIterator.fromResource(s3Bucket);
    const bucketList = new ResourceTerraformIterator(s3Bucket);

    new S3BucketObject(this, "s3_object", {
      forEach: bucketList,
      bucket: bucketList.getString("id"),
      key: "index.html",
      source: "index.html",
      acl: "private",
    });
  }
}

const app = new App();
new MyStack(app, "typescript-aws-cloudfront-proxy");
app.synth();
