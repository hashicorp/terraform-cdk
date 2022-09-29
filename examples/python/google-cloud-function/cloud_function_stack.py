import os

from constructs import Construct
from cdktf import App, TerraformStack, TerraformOutput, TerraformAsset, AssetType

from imports.google.provider import GoogleProvider
from imports.google.cloudfunctions_function_iam_binding import CloudfunctionsFunctionIamBinding
from imports.google.cloudfunctions_function import CloudfunctionsFunction
from imports.google.storage_bucket import StorageBucket
from imports.google.storage_bucket_object import StorageBucketObject


class CloudFunctionStack(TerraformStack):

    def __init__(self, scope: Construct, ns, project_id) -> None:
        super().__init__(scope, ns)

        GoogleProvider(self, id=project_id,
                       region="us-central1", project=project_id)

        code_bucket = StorageBucket(
            self, "bucket", name="terraform-cf-zip-files", project=project_id)

        asset = TerraformAsset(self, "cloud-function-asset",
                               path=os.path.join(os.path.abspath(
                                   os.path.dirname(__name__)), "function"),
                               type=AssetType.ARCHIVE
                               )

        code_object = StorageBucketObject(self, "archive",
                                          name=asset.file_name,
                                          bucket=code_bucket.name,
                                          source=asset.path,
                                          )

        cloud_function = CloudfunctionsFunction(self, 'addition-function',
                                                name="addition",
                                                project=project_id,
                                                region="us-central1",
                                                runtime="python38",
                                                available_memory_mb=128,
                                                source_archive_bucket=code_bucket.name,
                                                source_archive_object=code_object.name,
                                                trigger_http=True,
                                                entry_point="main"
                                                )

        invoker = CloudfunctionsFunctionIamBinding(self, "invoker",
                                                   project=cloud_function.project,
                                                   region=cloud_function.region,
                                                   cloud_function=cloud_function.name,
                                                   members=["allUsers"],
                                                   role="roles/cloudfunctions.invoker"
                                                   )

        url = TerraformOutput(self, "cloud-function-url",
                              value=cloud_function.https_trigger_url
                              )
