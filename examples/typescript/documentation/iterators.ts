// Copyright (c) HashiCorp, Inc
// SPDX-License-Identifier: MPL-2.0
// DOCS_BLOCK_START:iterators,iterators-complex-types
import { TerraformIterator, TerraformStack, TerraformVariable } from "cdktf";
import { Construct } from "constructs";
import { AwsProvider } from "@cdktf/provider-aws/lib/aws-provider";
import { S3Bucket } from "@cdktf/provider-aws/lib/s3-bucket";

export class IteratorsStack extends TerraformStack {
  constructor(scope: Construct, id: string) {
    super(scope, id);

    new AwsProvider(this, "aws", {
      region: "us-west-2",
    });

    // DOCS_BLOCK_END:iterators,iterators-complex-types

    // DOCS_BLOCK_START:iterators
    const list = new TerraformVariable(this, "list", {
      type: "list(string)",
    });

    const simpleIterator = TerraformIterator.fromList(list.listValue);

    new S3Bucket(this, "iterator-bucket", {
      forEach: simpleIterator,
      bucket: simpleIterator.value,
    });
    // DOCS_BLOCK_END:iterators

    // DOCS_BLOCK_START:iterators-complex-types
    const complexIterator = TerraformIterator.fromList([
      {
        name: "website-static-files",
        tags: { app: "website" },
      },
      {
        name: "images",
        tags: { app: "image-converter" },
      },
    ] as any);

    new S3Bucket(this, "complex-iterator-bucket", {
      forEach: complexIterator,
      bucket: complexIterator.getString("name"),
      tags: complexIterator.getStringMap("tags"),
    });
    // DOCS_BLOCK_END:iterators-complex-types

    // DOCS_BLOCK_START:iterators,iterators-complex-types
  }
}
// DOCS_BLOCK_END:iterators,iterators-complex-types
