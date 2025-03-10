// Copyright (c) HashiCorp, Inc
// SPDX-License-Identifier: MPL-2.0
import { convert } from "../lib/index";

describe("convert", () => {
  it("exposes stats for telemetry", async () => {
    const { stats } = await convert(
      `
  resource "aws_kms_key" "examplekms" {
    description             = "KMS key 1"
    deletion_window_in_days = 7
  }

  resource "aws_s3_bucket" "examplebucket" {
    bucket = "examplebuckettftest"
    acl    = "private"
  }
  resource "aws_s3_bucket" "examplebucket_two" {
    bucket = "examplebuckettftest"
    acl    = "private"
  }
  resource "aws_s3_bucket" "examplebucket_three" {
    bucket = "examplebuckettftest"
    acl    = "private"
  }
  resource "internal_cloud_s3_bucket" "examplebucket" {
    bucket = "examplebuckettftest"
    acl    = "private"
  }
  resource "internal_cloud_s3_bucket_object" "examplebucket_two" {
    bucket = "examplebuckettftest"
    acl    = "private"
  }
  
  resource "aws_s3_bucket_object" "examplebucket_object" {
    key        = "someobject"
    bucket     = element(aws_s3_bucket.examplebucket, 0).id
    source     = "index.html"
    kms_key_id = aws_kms_key.examplekms.arn
  }
  resource "aws_s3_bucket_object" "examplebucket_object_two" {
    key        = "someobject"
    bucket     = element(aws_s3_bucket.examplebucket, 0).id
    source     = "index.html"
    kms_key_id = aws_kms_key.examplekms.arn
  }
  resource "google_compute_autoscaler" "example" {
    name   = "example-autoscaler"
    zone   = "us-east1-b"
  
    autoscaling_policy = {
      max_replicas    = 8
      min_replicas    = 2
      cooldown_period = 60
  
      cpu_utilization = {
        target = 0.5
      }
    }
  }
  `,
      { language: "typescript", providerSchema: {} },
    );

    expect(stats).toMatchInlineSnapshot(`
      {
        "convertedLines": 54,
        "data": {},
        "language": "typescript",
        "numberOfModules": 0,
        "numberOfProviders": 3,
        "resources": {
          "aws": {
            "kms_key": 1,
            "s3_bucket": 3,
            "s3_bucket_object": 2,
          },
          "google": {
            "compute_autoscaler": 1,
          },
          "other": {
            "other": 1,
          },
        },
      }
    `);
  });
});
