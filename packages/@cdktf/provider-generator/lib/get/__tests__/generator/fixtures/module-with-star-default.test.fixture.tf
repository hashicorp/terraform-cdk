# Copyright (c) HashiCorp, Inc.
# SPDX-License-Identifier: MPL-2.0

variable "path" {
  type        = string
  default     = "*/*"
  description = "Method path is defined as {resource_path}/{http_method} for single method override, or */* for overriding all methods in the stage."
}
