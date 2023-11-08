// Copyright (c) HashiCorp, Inc
// SPDX-License-Identifier: MPL-2.0
import { Construct } from "constructs";
import { App, TerraformOutput, TerraformStack, TerraformVariable } from "cdktf";

import { AwsProvider } from "./.gen/providers/aws/provider";
import { S3Bucket } from "./.gen/providers/aws/s3-bucket";
import { S3BucketObject } from "./.gen/providers/aws/s3-bucket-object";
import { S3BucketAcl } from "./.gen/providers/aws/s3-bucket-acl/index";

class MyStack extends TerraformStack {
  constructor(scope: Construct, ns: string) {
    super(scope, ns);

    new AwsProvider(this, "aws", {
      region: "eu-central-1",
    });

    // bucketNames.listValue is a Token, let's call it TOKEN.1
    // It contains the reference var.s3_bucket_names
    // The TS value of the Token is currently a list with one member, the default value

    // In the new implementation each list is an Array of Tokens with a unique length
    // Each token will have the information which list type variable it references
    // and the index of itself within that list
    const bucketNames = new TerraformVariable(this, "s3_bucket_names", {
      type: "list",
      default: ["my-first-bucket", "my-second-bucket"],
    });

    // filesToUpload.listValue is a Token, let's call it TOKEN.2
    const filesToUpload = new TerraformVariable(this, "files", {
      type: "list",
      default: ["index.html", "404.html", "5xx.html"],
    });

    // The length of the array is a prime number, allowing us to identify the list referenced by the token
    // We will need to make it > 100 to avoid collisions / accidental matches
    new TerraformOutput(this, "buckets_created", {
      value: bucketNames.listValue.length,
    });

    // Before synth we will reverse-engineer usages like this and reduce the list to a single value
    // We will fill in the for_each based on the lists used to create it
    // We can use the number of constructs created as a checksum to verify we correctly identified the list
    // and to ensure the entire list is used
    // As we are guessing it's both important to have the current alternative routes
    // and a way to inform users of potential problems and ways to make their intetions clearer to us
    const s3Buckets = bucketNames.listValue.map((bucketName) => {
      return new S3Bucket(this, "s3_bucket", {
        bucketPrefix: bucketName,
      });
    });

    // The s3Buckets value in TS land now holds a list of S3Bucket objects
    // Unfortunately it has the same length as the original list, so we can't use it to identify the list
    // This means if someone uses s3Buckets.length or bucketNames.listValue.length we will have to throw an error or warning
    // For the more common case of constructs we have a clear way of identifying the list since only a token from the
    // derived list is being used here, so we can fill in aws_s3_bucket.s3_bucket in the for_each
    s3Buckets.forEach((s3Bucket) => {
      new S3BucketAcl(this, "s3_bucket_acl", {
        bucket: s3Bucket.id,
        acl: "private",
      });
    });

    // This is a more complex case, since we have a list of lists
    // We can detect that two different types of lists are being used in the created construct
    // This allows us to derive it's a nested iteration and fill in the for_each
    const allFiles = s3Buckets.flatMap((s3Bucket) => {
      return filesToUpload.listValue.map((file) => {
        return new S3BucketObject(this, "s3_object", {
          bucket: s3Bucket.id,
          key: file,
          source: file,
          acl: "private",
        });
      });
    });

    // Since we use prime numbers for the length of the list and this list now has Token.1 * Token.2 items
    // we can use prime decomposition to identify the lists used to create it
    new TerraformOutput(this, "files_created", {
      value: allFiles.length,
    });

    // Since we know the origin of tokens within the lists as well as their index we can pick individual values
    // Most of the time the first and last item will be used, we might throw a warning for other cases
    // Since we can't deduce the algorithm that got them to this specific point in the list
    new TerraformOutput(this, "first_bucket", {
      value: s3Buckets[0].id,
    });

    // The problem with this solution is that conditionals are not supported
    // I am not aware of any way to make them work or even detect them in the first place
    // They aren't supported right now, but since the proposed solution is quite
    // ergonomic people could think they are
    if (s3Buckets.length > 1) {
      new TerraformOutput(this, "last_bucket", {
        value: s3Buckets[s3Buckets.length - 1].id,
      });
    }
  }
}

const app = new App();
new MyStack(app, "typescript-aws-cloudfront-proxy");
app.synth();
