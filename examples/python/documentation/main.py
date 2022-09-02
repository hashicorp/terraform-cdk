# DOCS_BLOCK_START:assets,constructs
from constructs import Construct
import cdktf
# DOCS_BLOCK_END:constructs
import imports.aws as aws
# DOCS_BLOCK_START:constructs
import os
# DOCS_BLOCK_END:assets
import imports.kubernetes as kubernetes
from my_constructs import KubernetesWebAppDeployment
# DOCS_BLOCK_END:constructs
# DOCS_BLOCK_START:assets,constructs


class MyStack(cdktf.TerraformStack):
    def __init__(self, scope: Construct, name: str):
        super().__init__(scope, name)
        # DOCS_BLOCK_END:constructs

        aws.AwsProvider(self, 'aws', region='eu-central-1')

        bucket = aws.s3.S3Bucket(self, "bucket", bucket="demo")

        asset = cdktf.TerraformAsset(self, "lambda-asset",
                                     path=os.path.join(os.path.dirname(
                                         __file__), 'lambda'),
                                     type=cdktf.AssetType.ARCHIVE
                                     )

        aws.s3.S3BucketObject(self, "lambda-archive",
                              bucket=bucket.bucket,
                              key=asset.file_name,
                              source=asset.path
                              )
        # DOCS_BLOCK_END:assets

        # DOCS_BLOCK_START:constructs
        kubernetes.KubernetesProvider(self, "kind",
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
