---
layout: "cdktf"
page_title: "Aspects"
sidebar_current: "cdktf"
description: "Aspects apply an operation to all constructs in a given scope. You can use them for mutation (e.g., add resource tags) and validation (e.g., check encryption)."
---

# Aspects

Aspects are a way to apply an operation to all constructs in a given scope, they can be used for mutation (e.g. adding tags to cloud resources) as well as for validation (e.g. ensuring all S3 Buckets are encrypted).

## Using aspects to mutate resources

In this example we write an Aspect that adds tags to resources.

```ts
import { Aspects, IAspect } from "cdktf";

export class TagsAddingAspect implements IAspect {
  constructor(private tagsToAdd: Record<string, string>) {}

  // This method is called on every Construct (resources / data sources / Terraform Elements)
  visit(node: IConstruct) {
    if (node.hasOwnProperty("tags")) {
      const currentTags = node.tags || {};
      node.tags = { ...currentTags, ...this.tagsToAdd };
    }
  }
}

// We can call the aspect on any scope.
// A scope could be a TerraformStack, TerraformElement or an entire Application
// depending on whet you want to use your aspect for
Aspects.of(myStack).add(new TagsAddingAspect({ createdBy: "cdktf" }));
```

## Using Aspects to validate resources

In this example we write an Aspect that validates if all S3 Buckets start with an allowed prefix

```ts
import { Aspects, IAspect, Annotations } from "cdktf";
import { S3 } from "./.gen/providers/aws";

export class ValidateS3IsPrefixed implements IAspect {
  constructor(private prefix: string) {}

  // This method is called on every Construct within the defined scope (resource, data sources, etc.).
  visit(node: IConstruct) {
    if (node instanceof S3.S3Bucket) {
      if (node.bucket && !node.bucket.startsWith(this.prefix)) {
        // You can include `addInfo`, `addWarning`, and `addError`.
        // CDKTF prints these messages when the user runs `synth`, `plan`, or `deploy`.
        Annotations.of(node).addError(
          `Each S3 Bucket name needs to start with ${this.prefix}`
        );
      }
    }
  }
}

// Check the prefix for every resource within `myStack`. 
Aspects.of(myStack).add(new ValidateS3IsPrefixed("myPrefix"));
```
