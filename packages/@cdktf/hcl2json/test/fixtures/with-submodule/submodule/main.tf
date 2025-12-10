# Copyright IBM Corp. 2019, 2025
# SPDX-License-Identifier: MPL-2.0

variable "create_vpc" {
  description = "Controls if VPC should be created (it affects almost all resources)"
  type        = bool
  default     = true
}

variable "name" {
  description = "Name to be used on all the resources as identifier"
  type        = string
  default     = ""
}
