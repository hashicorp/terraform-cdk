# Copyright (c) HashiCorp, Inc.
# SPDX-License-Identifier: MPL-2.0

# Output variable definitions
output "dns_server_output" {
  description = "Domain name of the bucket"
  value       = var.ip_address
}
