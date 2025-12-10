# Copyright IBM Corp. 2019, 2025
# SPDX-License-Identifier: MPL-2.0

resource "aws_vpc" "example" {
  cidr_block = "10.1.0.0/16"
}