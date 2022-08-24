# This file is managed by projen. Do not edit, change the .projenrc file instead.

terraform {
  # Limit provider version (some modules are not compatible with aws 4.x)
  required_providers {
    aws = {
      source  = "hashicorp/aws"
      version = "~> 3.74"
    }
  }
  # Terraform binary version constraint
  required_version = "~> 1.1.0"
}


provider "aws" {
  region = "eu-central-1"
}
    