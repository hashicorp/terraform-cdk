# Copyright (c) HashiCorp, Inc.
# SPDX-License-Identifier: MPL-2.0


from imports.random.provider import RandomProvider
from imports.random.pet import Pet

# DOCS_BLOCK_START:define-aspects
import jsii
from constructs import Construct, IConstruct
from cdktf import TerraformStack, Aspects, IAspect
from imports.aws.instance import Instance
from imports.aws.provider import AwsProvider

@jsii.implements(IAspect)
class TagsAddingAspect:
    def __init__(self, tagsToAdd):
        self.tagsToAdd = tagsToAdd
    
    # This method is called on every Construct within the specified scope (resources, data sources, etc.).
    def visit(self, node: IConstruct):
        # Not all constructs are taggable, so we need to check
        if(hasattr(node, "tags") and hasattr(node, "tags_input")):
            # We need to take the input value to not create a circular reference
            currentTags = node.tags_input if node.tags_input is not None else {}
            node.tags = {**self.tagsToAdd, **currentTags}

class MySingleStack(TerraformStack):
    def __init__(self, scope: Construct, id: str):
        super().__init__(scope, id)
        AwsProvider(self, "aws",
            region = "us-east-1"
        )
        Instance(self, "Hello",
            ami = "ami-2757f631",
            instance_type = "t2.micro"
        )

        # Add tags to every resource defined within `MySingleStack`.
        Aspects.of(self).add(TagsAddingAspect({ "createdBy": "cdktf" }))
# DOCS_BLOCK_END:define-aspects

# DOCS_BLOCK_START:aspects-validation
from constructs import IConstruct
from cdktf import Aspects, IAspect, Annotations
from imports.aws.s3_bucket import S3Bucket

@jsii.implements(IAspect)
class ValidateS3IsPrefixed:
    def __init__(self, prefix: str):
        self.prefix = prefix

    # This method is called on every Construct within the defined scope (resource, data sources, etc.).
    def visit(self, node: IConstruct):
        if isinstance(node, S3Bucket):
            if(node.bucket_input and not node.bucket_input.startswith(self.prefix)):
              # You can include `addInfo`, `addWarning`, and `addError`.
              # CDKTF prints these messages when the user runs `synth`, `plan`, or `deploy`.
              Annotations.of(node).add_error(
                "Each S3 Bucket name needs to start with {}".format(self.prefix)
              )
# DOCS_BLOCK_END:aspects-validation

class MainAspects(TerraformStack):
  def __init__(self, scope: Construct, id: str):
        super().__init__(scope, id)

        myStack = self # for clarification, as the MainAspects stack is not included in the snippet

        AwsProvider(self, "aws",
          region="us-east-1"
        )
        S3Bucket(self, "bucket", 
          tags = {"owner" : "cdktf"}
        )

        RandomProvider(self, "random")
        pet = Pet(self, "pet")

        # DOCS_BLOCK_START:define-aspects
        
        # Add tags to every resource defined within `myStack`.
        Aspects.of(myStack).add(TagsAddingAspect({ "createdBy": "cdktf" }))
        # DOCS_BLOCK_END:define-aspects

        # DOCS_BLOCK_START:aspects-validation

        # Check the prefix for every resource within `myStack`.
        Aspects.of(myStack).add(ValidateS3IsPrefixed("myPrefix"))
        # DOCS_BLOCK_END:aspects-validation