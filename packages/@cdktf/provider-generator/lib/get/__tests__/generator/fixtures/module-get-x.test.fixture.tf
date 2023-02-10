# Copyright (c) HashiCorp, Inc.
# SPDX-License-Identifier: MPL-2.0

variable "get_caller_identity" {
  description = "Whether to get AWS account ID, User ID, and ARN in which Terraform is authorized"
  type        = bool
  default     = true
}