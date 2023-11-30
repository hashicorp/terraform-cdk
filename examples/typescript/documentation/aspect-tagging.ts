// Copyright (c) HashiCorp, Inc
// SPDX-License-Identifier: MPL-2.0
// DOCS_BLOCK_START:aspect-tagging
import { Construct, IConstruct } from "constructs";
import { Aspects, IAspect, TerraformStack } from "cdktf";
import { AwsProvider } from "./.gen/providers/aws/provider";
import { S3Bucket } from "./.gen/providers/aws/s3-bucket";

// Not all constructs are taggable, so we need to filter it
type TaggableConstruct = IConstruct & {
  tags?: { [key: string]: string };
  tagsInput?: { [key: string]: string };
};

function isTaggableConstruct(x: IConstruct): x is TaggableConstruct {
  return "tags" in x && "tagsInput" in x;
}

export class TagsAddingAspect implements IAspect {
  constructor(private tagsToAdd: Record<string, string>) {}

  // This method is called on every Construct within the specified scope (resources, data sources, etc.).
  visit(node: IConstruct) {
    if (isTaggableConstruct(node)) {
      // We need to take the input value to not create a circular reference
      const currentTags = node.tagsInput || {};
      node.tags = { ...this.tagsToAdd, ...currentTags };
    }
  }
}

export class AspectTaggingStack extends TerraformStack {
  constructor(scope: Construct, name: string) {
    super(scope, name);

    new AwsProvider(this, "aws", {
      region: "us-west-2",
    });

    new S3Bucket(this, "bucket", {
      bucket: "demo",
      tags: {
        owner: "cdktf",
      },
    });

    // Add tags to every resource defined within this stack.
    Aspects.of(this).add(new TagsAddingAspect({ createdBy: "cdktf" }));
  }
}
// DOCS_BLOCK_END:aspect-tagging
