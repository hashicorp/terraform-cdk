import os
from constructs import Construct
from cdktf import App, TerraformStack
from imports.ucloud.provider import UcloudProvider
from imports.ucloud.data_ucloud_images import DataUcloudImages
from imports.ucloud.instance import Instance


class MyStack(TerraformStack):
    def __init__(self, scope: Construct, ns: str):
        super().__init__(scope, ns)

        UcloudProvider(
            self, "UCloud",
            region="cn-bj2",
            project_id=os.getenv("UCLOUD_PROJECT_ID") or "",
        )
        images = DataUcloudImages(
            self, "images",
            availability_zone="cn-bj2-04",
            name_regex="^CentOS 8.2 64",
            image_type="base",
        )
        Instance(
            self, "web",
            availability_zone="cn-bj2-04",
            image_id=images.images.get(0).id,
            instance_type="n-basic-2",
            root_password="wA1234567",
            name="cdktf-example-instance",
            tag="tf-example",
            boot_disk_type="cloud_ssd",
        )


app = App()
MyStack(app, "python-ucloud")

app.synth()
