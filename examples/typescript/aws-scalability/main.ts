// Copyright (c) HashiCorp, Inc
// SPDX-License-Identifier: MPL-2.0
import { Construct } from "constructs";
import { App, TerraformStack } from "cdktf";
import { AwsProvider } from "./.gen/providers/aws/provider";
import { S3Bucket } from '@cdktf/provider-aws/lib/s3-bucket';

class MyStack extends TerraformStack {
  constructor(scope: Construct, index: number) {
    super(scope, `stack-${index}`);

    new AwsProvider(this, "aws", {
      region: "eu-central-1",
    });

   new S3Bucket(this, 'bucket', {
      bucket: `my-bucket-${index}`,
   });
  }
}

const app = new App();
for (let index = 0; index < 200; index++) {
  new MyStack(app, index);
}
app.synth();
