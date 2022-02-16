variable "get_caller_identity" {
  description = "Whether to get AWS account ID, User ID, and ARN in which Terraform is authorized"
  type        = bool
  default     = true
}