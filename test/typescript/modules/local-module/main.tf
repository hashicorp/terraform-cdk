variable "enabled" {
  description = "Flag to optionally disable usage of this module."
  type        = bool
  default     = true
}

variable "set" {
  description = "Making sure bindings can be created for modules using the set type"
  type = set(string)
}

output "create_cmd_bin" {
  description = "The full bin path & command used on create"
  value       = "foo"
}