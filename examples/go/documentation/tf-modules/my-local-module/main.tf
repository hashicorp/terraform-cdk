# Copyright IBM Corp. 2019, 2025
# SPDX-License-Identifier: MPL-2.0

variable "ip_address" {
  type = string
}

output "dns_server" {
  value = "127.0.0.1"
}
