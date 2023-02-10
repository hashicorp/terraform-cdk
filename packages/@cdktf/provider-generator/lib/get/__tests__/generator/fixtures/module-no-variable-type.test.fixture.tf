# Copyright (c) HashiCorp, Inc.
# SPDX-License-Identifier: MPL-2.0

variable "my_typeless_var" {
  description = "My example var without type set"
}

variable "my_default_typevar" {
  description = "My example var without type set, but with default"
  default = 1
}