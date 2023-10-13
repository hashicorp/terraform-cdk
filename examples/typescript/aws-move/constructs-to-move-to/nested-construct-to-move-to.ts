import { Construct } from "constructs";
import { S3Bucket } from "../.gen/providers/aws/s3-bucket";
//import { TerraformMoveAddresses } from "cdktf";

export class NestedConstructToMoveTo extends Construct {
  constructor(scope: Construct, id: string) {
    super(scope, id);

    new S3Bucket(this, "test-bucket", {
      bucket: "test-move-bucket-name-1",
    }); //.move("move");
  }
}
