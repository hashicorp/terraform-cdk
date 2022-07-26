from constructs import Construct
from cdktf import App, TerraformStack
from imports.aws import AwsProvider, s3

from my_constructs import KubernetesWebAppDeployment

class MyStack(TerraformStack):
    def __init__(self, scope: Construct, ns: str):
        super().__init__(scope, ns)
        AwsProvider(self, 'Aws', region='eu-central-1')

        # concepts/assets.mdx
        bucket = s3.S3Bucket(self, "bucket",
            bucket="demo"
        )

        asset = TerraformAsset(self, "lambda-asset",
            path=os.path.join(os.path.dirname(__file__), '..', 'lambda'),
            type=AssetType.ARCHIVE
        )

        s3.S3BucketObject(self, "lambda-archive",
            bucket=bucket.bucket,
            key=asset.file_name,
            source=asset.path
        )

        # concepts/constructs.mdx
        kubernetes.KubernetesProvider(self, "kind",
            config_path=os.path.join(os.path.dirname(__file__), '..', 'kubeconfig.yaml')
        )

        KubernetesWebAppDeployment(self, "deployment", {
            "image": "nginx:latest",
            "replicas": 2,
            "app": "myapp",
            "component": "frontend",
            "environment": "dev"
        })

app = App()
MyStack(app, "python-documentation")

app.synth()
