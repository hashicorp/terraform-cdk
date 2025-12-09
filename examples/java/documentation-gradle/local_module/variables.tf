# Copyright IBM Corp. 2019, 2025
# SPDX-License-Identifier: MPL-2.0

# Input variable definitions

variable "name" {
  description = "Name"
  type        = string
  default     = "example-vpc"
}

variable "ip_address" {
  description = "IP address"
  type        = string
  default     = "127.0.0.1"
}