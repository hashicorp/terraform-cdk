variable "enabled" {
  description = "Flag to optionally disable usage of this module."
  type        = bool
  default     = true
}

output "create_cmd_bin" {
  description = "The full bin path & command used on create"
  value       = "foo"
}