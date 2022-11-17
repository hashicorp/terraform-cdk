# DOCS_BLOCK_START:assets
from constructs import Construct
from cdktf import TerraformAsset, TerraformStack, AssetType
from imports.aws.provider import AwsProvider
from imports.aws.s3_bucket import S3Bucket
from imports.aws.s3_bucket_object import S3BucketObject
import os


class MyAssetStack(TerraformStack):
    def __init__(self, scope: Construct, name: str):
        super().__init__(scope, name)

        AwsProvider(self, 'aws', region='eu-central-1')

        bucket = S3Bucket(self, "bucket", bucket="demo")

        asset = TerraformAsset(self, "lambda-asset",
                                     path=os.path.join(os.path.dirname(__file__), 'lambda'),
                                     type=AssetType.ARCHIVE
                                     )

        S3BucketObject(self, "lambda-archive",
                                            bucket=bucket.bucket,
                                            key=asset.file_name,
                                            source=asset.path
                                            )

# DOCS_BLOCK_END:assets

'''
DOCS_BLOCK_START:assets
app = cdktf.App()
MyAssetStack(app, "demo")
app.synth()
DOCS_BLOCK_END:assets
'''
