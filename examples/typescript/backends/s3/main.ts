import { Construct } from "constructs";
import {
  App,
  TerraformStack,
  S3Backend,
  DataTerraformRemoteStateS3,
} from "cdktf";
import { AwsProvider, s3 } from "./.gen/providers/aws";

class MyStack extends TerraformStack {
  constructor(scope: Construct, name: string) {
    super(scope, name);

    new AwsProvider(this, "aws", {
      region: "eu-central-1",
    });

    // Only one backend is supported by Terraform

    // S3 Backend - https://www.terraform.io/docs/backends/types/s3.html
    new S3Backend(this, {
      bucket: "mybucket",
      key: "path/to/my/key",
      region: "us-east-1",
    });

    // S3 Remote State
    const otherState = new DataTerraformRemoteStateS3(this, "other", {
      bucket: "myotherbucket",
      key: "path/to/my/key",
    });

    // Reference Remote State
    new s3.DataAwsS3BucketObject(this, "object", {
      bucket: "objectbucket",
      key: otherState.getString("bucket_key"),
    });

    // define resources here
  }
}

const app = new App();
new MyStack(app, "typescript-backends");
app.synth();
