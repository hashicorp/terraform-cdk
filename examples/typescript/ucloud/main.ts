import { Construct } from "constructs";
import { App, TerraformStack } from "cdktf";
import {
  UcloudProvider,
  Instance,
  DataUcloudImages,
} from "./.gen/providers/ucloud";

class MyStack extends TerraformStack {
  constructor(scope: Construct, name: string) {
    super(scope, name);

    new UcloudProvider(this, "UCloud", {
      region: "cn-bj2",
      projectId: process.env.UCLOUD_PROJECT_ID || "",
    });

    let images = new DataUcloudImages(this, "images", {
      availabilityZone: "cn-bj2-04",
      nameRegex: "^CentOS 8.2 64",
      imageType: "base",
    });

    new Instance(this, "web", {
      availabilityZone: "cn-bj2-04",
      imageId: images.images.get(0).id,
      instanceType: "n-basic-2",
      rootPassword: "wA1234567",
      name: "cdktf-example-instance",
      tag: "tf-example",
      bootDiskType: "cloud_ssd",
    });
  }
}

const app = new App();
new MyStack(app, "typescript-ucloud");
app.synth();
