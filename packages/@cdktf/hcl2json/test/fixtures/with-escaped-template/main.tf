# Copyright (c) HashiCorp, Inc.
# SPDX-License-Identifier: MPL-2.0

data "aws_ssoadmin_instances" "example" {}

resource "aws_ssoadmin_instance_access_control_attributes" "example" {
  instance_arn = tolist(data.aws_ssoadmin_instances.example.arns)[0]
  attribute {
    key = "name"
    value {
      source = ["$${path:name.givenName}"]
    }
  }
  attribute {
    key = "last"
    value {
      source = ["$${path:name.familyName}"]
    }
  }
}