// Copyright (c) HashiCorp, Inc
// SPDX-License-Identifier: MPL-2.0

// DOCS_BLOCK_START:aspect-validation
import { Annotations, Aspects, IAspect, TerraformStack } from "cdktf";
import { Construct, IConstruct } from "constructs";
import { AwsProvider } from "./.gen/providers/aws/provider";
import { S3Bucket } from "./.gen/providers/aws/s3-bucket";

export class ValidateS3IsPrefixed implements IAspect {
  constructor(private prefix: string) {}

  // This method is called on every Construct within the defined scope (resource, data sources, etc.).
  visit(node: IConstruct) {
    if (node instanceof S3Bucket) {
      if (node.bucketInput && !node.bucketInput.startsWith(this.prefix)) {
        // You can include `addInfo`, `addWarning`, and `addError`.
        // CDKTF prints these messages when the user runs `synth`, `plan`, or `deploy`.
        Annotations.of(node).addError(
          `Each S3 Bucket name needs to start with ${this.prefix}`
        );
      }
    }
  }
}

export class AspectValidationStack extends TerraformStack {
  constructor(scope: Construct, name: string) {
    super(scope, name);

    new AwsProvider(this, "aws", {
      region: "us-west-2",
    });

    new S3Bucket(this, "bucket", {
      bucket: "myPrefixDemo",
    });

    Aspects.of(this).add(new ValidateS3IsPrefixed("myPrefix"));
  }
}
// DOCS_BLOCK_END:aspect-validation
