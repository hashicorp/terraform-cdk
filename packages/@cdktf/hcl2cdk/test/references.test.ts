// Copyright (c) HashiCorp, Inc
// SPDX-License-Identifier: MPL-2.0
import { testCase, Synth, binding, Snapshot } from "./helpers/convert";

describe("references", () => {
  testCase.test(
    "resource references",
    `
        provider "aws" {
          region                      = "us-east-1"
        }
        resource "aws_kms_key" "examplekms" {
          description             = "KMS key 1"
          deletion_window_in_days = 7
        }

        resource "aws_s3_bucket" "examplebucket" {
          bucket = "examplebuckettftest"
          acl    = "private"
        }

        resource "aws_s3_bucket_object" "examplebucket_object" {
          key        = "someobject"
          bucket     = aws_s3_bucket.examplebucket.id
          source     = "index.html"
          kms_key_id = aws_kms_key.examplekms.arn
        }`,
    [binding.aws],
    Snapshot.yes,
    Synth.yes,
    {
      resources: ["aws_s3_bucket", "aws_s3_bucket_object", "aws_kms_key"],
    },
  );

  testCase.test(
    "locals references",
    `
        provider "aws" {
          region                      = "us-east-1"
        }

        locals {
          bucket_name = "foo"
        }

        resource "aws_s3_bucket" "examplebucket" {
          bucket = local.bucket_name
          acl    = "private"
        }`,
    [binding.aws],
    Snapshot.yes,
    Synth.yes,
    {
      resources: ["aws_s3_bucket"],
    },
  );

  testCase.test(
    "variable references",
    `
        provider "aws" {
          region                      = "us-east-1"
        }
        variable "bucket_name" {
          type    = string
          default = "demo"
        }

        resource "aws_s3_bucket" "examplebucket" {
          bucket = var.bucket_name
          acl    = "private"
        }`,
    [binding.aws],
    Snapshot.yes,
    Synth.yes,
    {
      resources: ["aws_s3_bucket"],
    },
  );

  testCase.test(
    "data references",
    `
        provider "aws" {
          region                      = "us-east-1"
        }
        variable "bucket_name" {
          type    = string
          default = "demo"
        }

        data "aws_s3_bucket" "examplebucket" {
          bucket = var.bucket_name
        }

        resource "aws_s3_bucket_object" "examplebucket_object" {
          key        = "someobject"
          bucket     = data.aws_s3_bucket.examplebucket.arn
          source     = "index.html"
        }`,
    [binding.aws],
    Snapshot.yes,
    Synth.yes,
    {
      resources: ["aws_s3_bucket", "aws_s3_bucket_object"],
    },
  );

  testCase.test(
    "double references",
    `
        provider "aws" {
          region                      = "us-east-1"
        }
        variable "bucket_name" {
          type    = string
          default = "demo"
        }

        resource "aws_s3_bucket" "examplebucket" {
          bucket = var.bucket_name
          acl    = "private"
          tags = {
            tag-key = var.bucket_name
          }
        }`,
    [binding.aws],
    Snapshot.yes,
    Synth.yes,
    {
      resources: ["aws_s3_bucket"],
    },
  );

  testCase.test(
    "resource references with HCL functions",
    `
      provider "aws" {
        region                      = "us-east-1"
      }
      resource "aws_kms_key" "examplekms" {
        description             = "KMS key 1"
        deletion_window_in_days = 7
      }

      resource "aws_s3_bucket" "examplebucket" {
        count  = 2
        bucket = "examplebuckettftest-\${count.index}"
        acl    = "private"
      }

      resource "aws_s3_bucket_object" "examplebucket_object" {
        key        = "someobject"
        bucket     = element(aws_s3_bucket.examplebucket, 0).id
        source     = "index.html"
        kms_key_id = aws_kms_key.examplekms.arn
      }`,
    [binding.aws],
    Snapshot.yes,
    Synth.no_cant_resolve_construct,
    {
      resources: ["aws_s3_bucket", "aws_s3_bucket_object", "aws_kms_key"],
    },
  );

  testCase.test(
    "provider with var reference",
    `
    variable "domain" {
      description = "A domain"
    }
    provider "auth0" {
      domain        = var.domain
      client_id     = "client_id"
      client_secret = "client_secret"
    }
    `,
    [binding.auth0],
    Snapshot.yes,
    Synth.yes,
    { resources: [] },
  );

  testCase.test(
    "data local_file",
    `
    provider "local" {}
    data "local_file" "_01_please_verify" {
      filename = "./email_templates/01_please_verify/template.html"
    }
    `,
    [binding.local],
    Snapshot.yes,
    Synth.yes,
    {
      dataSources: ["local_file"],
    },
  );

  testCase.test(
    "aliased duplicate provider with var reference",
    `
    variable "domain" {
      description = "A domain"
    }
    variable "client_id" {
      description = "A client_id"
    }
    variable "client_secret" {
      description = "A client_secret"
    }
    provider "auth0" {
      domain        = var.domain
      client_id     = var.client_id
      client_secret = var.client_secret
    }
    provider "auth0" {
      alias         = "private_auth0"
      domain        = var.domain
      client_id     = var.client_id
      client_secret = var.client_secret
      debug         = true
    }
    `,
    [binding.auth0],
    Snapshot.yes,
    Synth.yes,
    { resources: [] },
  );

  testCase.test(
    "variables with maps need to use accessor syntax",
    `
      provider "aws" {
        region = "us-east-1"
      }

      variable "default_tags" {
        type        = map(string)
        description = "Map of default tags to apply to resources"
        default = {
          project = "Learning Live with AWS & HashiCorp"
        }
      }

      resource "aws_eip" "nat" {
        vpc = true
        tags = {
          "Name" = "\${var.default_tags.project}-nat-eip"
        }
      }
      `,
    [binding.aws],
    Snapshot.yes,
    Synth.yes,
    { resources: ["aws_eip"] },
  );

  testCase.test(
    "resources with splat expressions should work",
    `
      variable "key_value_pairs" {
        type        = list(object({
          foo = string
          bar = string
        }))
        description = "List of key value pairs"
        default = [{
          foo = "foo"
          bar = "not food",
        }, {
          foo = "bar"
          bar = "not beer",
        }]
      }

      output "values" {
        value = var.key_value_pairs[*].bar
      }
      `,
    [],
    Snapshot.yes,
    Synth.yes,
    { resources: ["aws_eip"] },
  );
});
