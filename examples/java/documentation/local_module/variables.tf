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