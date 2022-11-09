'''
import { IConstruct } from "constructs";
import { Aspects, IAspect } from "cdktf";

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

// Add tags to every resource defined within `myStack`.
Aspects.of(myStack).add(new TagsAddingAspect({ createdBy: "cdktf" }));
'''
from typing import Dict, Mapping

from constructs import IConstruct
from cdktf import Aspects, IAspect, TerraformStack, App

from examples.python.documentation.imports.aws.s3_bucket import S3Bucket

myStack = TerraformStack(App(), "my-stack")

# Not all constructs are taggable, so we need to filter it
class TaggableConstruct:
    tags: Dict[str : str]
    tagsInput: Dict[str : str]
    def __init__(self, x: IConstruct):
        self.tags = x.tags if x.tags else None
        self.tagsInput = x.tagsInput if x.tagsInput else None

def isTaggableConstruct(x: TaggableConstruct):
    return x.tags and x.tagsInput

class TagsAddingAspect(IAspect):
    def __init__(self, tagsToAdd: Mapping[str:str]):
        self.tagsToAdd = tagsToAdd
    
    def visit(self, node: IConstruct):
        if(isTaggableConstruct(TaggableConstruct(node))):
            currentTags = node.tagsInput if node.tagsInput else {}
            node.tags = {**self.tagsToAdd, **currentTags}


Aspects.of(myStack).add({ "createdBy" : "cdktf"})

'''
import { IConstruct } from "constructs";
import { Aspects, IAspect, Annotations } from "cdktf";
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

// Check the prefix for every resource within `myStack`.
Aspects.of(myStack).add(new ValidateS3IsPrefixed("myPrefix"));
'''
from constructs import IConstruct
from cdktf import Aspects, IAspect, Annotations
import imports.aws as aws

class ValidateS3IsPrefixed(IAspect):
    def __init__(self, prefix: str):
        self.prefix = prefix

    def visit(self, node: IConstruct):
        if(typeof(node) is S3Bucket):
            if(node.)