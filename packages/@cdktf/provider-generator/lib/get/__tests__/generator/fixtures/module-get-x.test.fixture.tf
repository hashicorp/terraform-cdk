# Copyright (c) HashiCorp, Inc.
# SPDX-License-Identifier: MPL-2.0

variable "get_caller_identity" {
  description = "Whether to get AWS account ID, User ID, and ARN in which Terraform is authorized"
  type        = bool
  default     = true
}

variable "get_subnet_ids" {
  description = "RDS DB subnet group resource"
  type        = list(tuple([string, string, number]))
  default     = [["172.0.0.1", "172.0.0.2", 1],["172.0.10.1", "172.0.10.2", 2]]
}
