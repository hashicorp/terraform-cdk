# DOCS_BLOCK_START:assets,constructs
from constructs import Construct
import cdktf
# DOCS_BLOCK_END:constructs
from imports.aws.provider import AwsProvider
from imports.aws.s3_bucket import S3Bucket
from imports.aws.s3_bucket_object import S3BucketObject
# DOCS_BLOCK_START:constructs
import os
# DOCS_BLOCK_END:assets
from imports.kubernetes.provider import KubernetesProvider
from my_constructs import KubernetesWebAppDeployment
# DOCS_BLOCK_END:constructs
# DOCS_BLOCK_START:assets,constructs


class MyStack(cdktf.TerraformStack):
    def __init__(self, scope: Construct, name: str):
        super().__init__(scope, name)
        # DOCS_BLOCK_END:constructs

        AwsProvider(self, 'aws', region='eu-central-1')

        bucket = S3Bucket(self, "bucket", bucket="demo")

        asset = cdktf.TerraformAsset(self, "lambda-asset",
                                     path=os.path.join(os.path.dirname(
                                         __file__), 'lambda'),
                                     type=cdktf.AssetType.ARCHIVE
                                     )

        S3BucketObject(self, "lambda-archive",
                       bucket=bucket.bucket,
                       key=asset.file_name,
                       source=asset.path
                       )
        # DOCS_BLOCK_END:assets

        # DOCS_BLOCK_START:constructs
        KubernetesProvider(self, "kind",
                           config_path=os.path.join(os.path.dirname(
                               __file__), '..', 'kubeconfig.yaml')
                           )

        KubernetesWebAppDeployment(self, "deployment",
                                   image="nginx:latest",
                                   replicas=2,
                                   app="myapp",
                                   component="frontend",
                                   environment="dev"
                                   )
        # DOCS_BLOCK_END:constructs
# DOCS_BLOCK_START:assets,constructs


app = cdktf.App()
MyStack(app, "demo")

app.synth()
# DOCS_BLOCK_END:assets,constructs
