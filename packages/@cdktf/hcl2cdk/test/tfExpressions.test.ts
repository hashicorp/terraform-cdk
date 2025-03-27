/**
 * Copyright (c) HashiCorp, Inc.
 * SPDX-License-Identifier: MPL-2.0
 */

import { testCase, Synth, binding, Snapshot } from "./helpers/convert";

describe("tfExpressions", () => {
  testCase.test(
    "arithmetics",
    `
          variable "members" {
            type = number
          }
          variable "admins" {
            type = number
          }

          output "arithmetics" {
            value = var.members + var.admins
          }`,
    [],
    Snapshot.yes,
    Synth.yes,
  );

  testCase.test(
    "conditionals",
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
        bucket     = aws_kms_key.examplekms.deletion_window_in_days > 3 ? aws_s3_bucket.examplebucket.id : []
        source     = "index.html"
        kms_key_id = aws_kms_key.examplekms.arn
      }`,
    [binding.aws],
    Snapshot.yes,
    Synth.yes,
    {
      resources: ["aws_s3_bucket", "aws_kms_key", "aws_s3_bucket_object"],
    },
  );

  testCase.test(
    "for expression 1",
    `
            variable "users" {
              type = map(object({
                is_admin = boolean
              }))
            }

            locals {
              admin_users = {
                for name, user in var.users : name => user
                if user.is_admin
              }
              regular_users = {
                for name, user in var.users : name => user
                if !user.is_admin
              }
            }

            output "combined-so-it-does-not-get-removed" {
              value = "\${local.admin_users},\${local.regular_users}"
            }
            `,
    [],
    Snapshot.yes,
    Synth.yes,
  );

  testCase.test(
    "for expression 2",
    `
          variable "users" {
            type = map(object({
              role = string
            }))
          }

          locals {
            users_by_role = {
              for name, user in var.users : user.role => name...
            }
          }

          output "so-it-does-not-get-removed" {
            value = local.users_by_role
          }`,
    [],
    Snapshot.yes,
    Synth.yes,
  );

  testCase.test(
    "for expression 3",
    `
            provider "datadog" {
              api_key = "api_key"
              app_key = "app_key"
            }

            variable "users" {
              type = list(object({
                id = string
              }))
            }

            resource "datadog_monitor" "hard_query" {
              name    = "queries are hard"
              message = "here we go"
              query   = join(" && ", [for o in var.users : "!(!\${o.id})"])
              type    = "metric alert"
            }`,
    [binding.datadog],
    Snapshot.yes,
    Synth.yes,
    {
      resources: ["datadog_monitor"],
    },
  );

  testCase.test(
    "property access through square brackets",
    `
      provider "aws" {
        region                      = "us-east-1"
      }
      variable "settings" {
        type = map(string)
      }

      resource "aws_s3_bucket" "examplebucket" {
        bucket = var.settings["bucket_name"]
        acl    = "private"
      }
      `,
    [binding.aws],
    Snapshot.yes,
    Synth.yes,
    {
      resources: ["aws_s3_bucket"],
    },
  );

  testCase.test(
    "list access through square brackets",
    `
      provider "aws" {
        region                      = "us-east-1"
      }
      variable "settings" {
        type = list(map(string))
      }

      resource "aws_s3_bucket" "examplebucket" {
        bucket = var.settings[0]["bucket_name"]
        acl    = "private"
      }
      `,
    [binding.aws],
    Snapshot.yes,
    Synth.yes,
    {
      resources: ["aws_s3_bucket"],
    },
  );

  testCase.test(
    "numeric property access",
    `
      provider "google" {
        project = "my-project"
        region  = "us-central1"
      }
      resource "google_compute_instance" "example" {
        name          = "example"
        machine_type  = "f1-micro"
        zone          = "us-east1-b"

        boot_disk {
          initialize_params {
            image = "debian-cloud/debian-9"
          }
        }

        network_interface {
          network = "default"

          access_config {
            // Ephemeral IP
          }
        }
      }

      output "public_ip" {
        value = "\${google_compute_instance.example.network_interface.0.access_config.0.assigned_nat_ip}"
      }
      `,
    [binding.google],
    Snapshot.yes,
    Synth.yes,
    {
      resources: ["google_compute_instance"],
    },
  );

  testCase.test(
    "multi-line strings are supported",
    `
      output "hash" {
        value = <<ITEM
{
  "example_hash_key": {"S": "something"},
  "example_attribute": {"N": "11111"}
}
ITEM
      }
      `,
    [],
    Snapshot.yes,
    Synth.yes,
    {
      resources: [],
    },
  );

  testCase.test(
    "escaping dollar-curly in template strings works",
    `
    resource "aws_ssoadmin_instance_access_control_attributes" "example" {
      attribute {
        value {
          source = ["$\${path:name.givenName}"]
        }
      }
    }
      `,
    [binding.aws],
    Snapshot.yes,
    Synth.yes_but_only_typescript_right_now_because_it_breaks,
    {
      resources: [],
    },
  );

  testCase.test(
    "property access in maps works",
    `
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
    Snapshot.yes_all_languages,
    Synth.yes_but_only_typescript_right_now_because_it_breaks,
    {
      resources: [],
    },
  );

  testCase.test(
    "strings containing single outer quotes are supported",
    `
      output "hash" {
        value = "'static'"
      }`,
    [],
    Snapshot.yes,
    Synth.yes,
    {
      resources: [],
    },
  );
});
