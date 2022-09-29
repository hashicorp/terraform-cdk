from cdktf import TerraformStack
from constructs import Construct
# DOCS_BLOCK_START:iterators-define-iterators,iterators-iterators-complex-types
from imports.aws import s3
from cdktf import TerraformIterator, TerraformVariable
# DOCS_BLOCK_END:iterators-define-iterators,iterators-iterators-complex-types     

class TestStack(TerraformStack):
    def __init__(self, scope: Construct, id: str):
        super().__init__(scope, id)

        # DOCS_BLOCK_START:iterators-iterators-complex-types
        iterator = TerraformIterator.from_list(
            list = [
                {
                    "name": "website-static-files",
                    "tags": {"app": "website"}
                },
                {
                    "name": "images",
                    "tags": {"app": "image-converter"}
                }
            ]
        )

        s3Bucket = s3.S3Bucket(self, "bucket",
            for_each = iterator,
            name = iterator.getString("name"),
            tags = iterator.getString("tags")
        )
        # DOCS_BLOCK_END:iterators-iterators-complex-types

        # DOCS_BLOCK_START:iterators-define-iterators
        list = TerraformVariable(self, "list", 
            type = "list(string)"
        )

        iterator = TerraformIterator.from_list(list.list_value)

        s3Bucket = s3.S3Bucket(self, "bucket",
            for_each = iterator,
            name = iterator.value
        )
        # DOCS_BLOCK_END:iterators-define-iterators