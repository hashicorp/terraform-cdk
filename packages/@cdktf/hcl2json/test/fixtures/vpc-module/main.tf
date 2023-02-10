# Copyright (c) HashiCorp, Inc.
# SPDX-License-Identifier: MPL-2.0

# parts of the AWS VPC module for testing purposes

variable "create_vpc" {
  description = "Controls if VPC should be created (it affects almost all resources)"
  type        = bool
  default     = true
}

variable "name" {
  description = "Name to be used on all the resources as identifier"
  type        = string
  default     = ""
}

variable "cidr" {
  description = "The CIDR block for the VPC. Default value is a valid CIDR, but not acceptable by AWS and should be overridden"
  type        = string
  default     = "0.0.0.0/0"
}

variable "enable_ipv6" {
  description = "Requests an Amazon-provided IPv6 CIDR block with a /56 prefix length for the VPC. You cannot specify the range of IP addresses, or the size of the CIDR block."
  type        = bool
  default     = false
}

variable "private_subnet_ipv6_prefixes" {
  description = "Assigns IPv6 private subnet id based on the Amazon provided /56 prefix base 10 integer (0-256). Must be of equal length to the corresponding IPv4 subnet list"
  type        = list(string)
  default     = []
}

variable "public_subnet_ipv6_prefixes" {
  description = "Assigns IPv6 public subnet id based on the Amazon provided /56 prefix base 10 integer (0-256). Must be of equal length to the corresponding IPv4 subnet list"
  type        = list(string)
  default     = []
}

variable "database_subnet_ipv6_prefixes" {
  description = "Assigns IPv6 database subnet id based on the Amazon provided /56 prefix base 10 integer (0-256). Must be of equal length to the corresponding IPv4 subnet list"
  type        = list(string)
  default     = []
}

variable "redshift_subnet_ipv6_prefixes" {
  description = "Assigns IPv6 redshift subnet id based on the Amazon provided /56 prefix base 10 integer (0-256). Must be of equal length to the corresponding IPv4 subnet list"
  type        = list(string)
  default     = []
}

variable "elasticache_subnet_ipv6_prefixes" {
  description = "Assigns IPv6 elasticache subnet id based on the Amazon provided /56 prefix base 10 integer (0-256). Must be of equal length to the corresponding IPv4 subnet list"
  type        = list(string)
  default     = []
}

variable "intra_subnet_ipv6_prefixes" {
  description = "Assigns IPv6 intra subnet id based on the Amazon provided /56 prefix base 10 integer (0-256). Must be of equal length to the corresponding IPv4 subnet list"
  type        = list(string)
  default     = []
}

variable "assign_ipv6_address_on_creation" {
  description = "Assign IPv6 address on subnet, must be disabled to change IPv6 CIDRs. This is the IPv6 equivalent of map_public_ip_on_launch"
  type        = bool
  default     = false
}

variable "private_subnet_assign_ipv6_address_on_creation" {
  description = "Assign IPv6 address on private subnet, must be disabled to change IPv6 CIDRs. This is the IPv6 equivalent of map_public_ip_on_launch"
  type        = bool
  default     = null
}

variable "public_subnet_assign_ipv6_address_on_creation" {
  description = "Assign IPv6 address on public subnet, must be disabled to change IPv6 CIDRs. This is the IPv6 equivalent of map_public_ip_on_launch"
  type        = bool
  default     = null
}

variable "database_subnet_assign_ipv6_address_on_creation" {
  description = "Assign IPv6 address on database subnet, must be disabled to change IPv6 CIDRs. This is the IPv6 equivalent of map_public_ip_on_launch"
  type        = bool
  default     = null
}

variable "redshift_subnet_assign_ipv6_address_on_creation" {
  description = "Assign IPv6 address on redshift subnet, must be disabled to change IPv6 CIDRs. This is the IPv6 equivalent of map_public_ip_on_launch"
  type        = bool
  default     = null
}

variable "elasticache_subnet_assign_ipv6_address_on_creation" {
  description = "Assign IPv6 address on elasticache subnet, must be disabled to change IPv6 CIDRs. This is the IPv6 equivalent of map_public_ip_on_launch"
  type        = bool
  default     = null
}

variable "intra_subnet_assign_ipv6_address_on_creation" {
  description = "Assign IPv6 address on intra subnet, must be disabled to change IPv6 CIDRs. This is the IPv6 equivalent of map_public_ip_on_launch"
  type        = bool
  default     = null
}

variable "secondary_cidr_blocks" {
  description = "List of secondary CIDR blocks to associate with the VPC to extend the IP Address pool"
  type        = list(string)
  default     = []
}

variable "instance_tenancy" {
  description = "A tenancy option for instances launched into the VPC"
  type        = string
  default     = "default"
}

variable "public_subnet_suffix" {
  description = "Suffix to append to public subnets name"
  type        = string
  default     = "public"
}

variable "private_subnet_suffix" {
  description = "Suffix to append to private subnets name"
  type        = string
  default     = "private"
}

variable "intra_subnet_suffix" {
  description = "Suffix to append to intra subnets name"
  type        = string
  default     = "intra"
}

variable "database_subnet_suffix" {
  description = "Suffix to append to database subnets name"
  type        = string
  default     = "db"
}

variable "redshift_subnet_suffix" {
  description = "Suffix to append to redshift subnets name"
  type        = string
  default     = "redshift"
}

variable "elasticache_subnet_suffix" {
  description = "Suffix to append to elasticache subnets name"
  type        = string
  default     = "elasticache"
}

variable "public_subnets" {
  description = "A list of public subnets inside the VPC"
  type        = list(string)
  default     = []
}

variable "private_subnets" {
  description = "A list of private subnets inside the VPC"
  type        = list(string)
  default     = []
}

variable "database_subnets" {
  description = "A list of database subnets"
  type        = list(string)
  default     = []
}

variable "redshift_subnets" {
  description = "A list of redshift subnets"
  type        = list(string)
  default     = []
}

variable "elasticache_subnets" {
  description = "A list of elasticache subnets"
  type        = list(string)
  default     = []
}

variable "intra_subnets" {
  description = "A list of intra subnets"
  type        = list(string)
  default     = []
}

variable "create_database_subnet_route_table" {
  description = "Controls if separate route table for database should be created"
  type        = bool
  default     = false
}

variable "create_redshift_subnet_route_table" {
  description = "Controls if separate route table for redshift should be created"
  type        = bool
  default     = false
}

variable "enable_public_redshift" {
  description = "Controls if redshift should have public routing table"
  type        = bool
  default     = false
}

variable "create_elasticache_subnet_route_table" {
  description = "Controls if separate route table for elasticache should be created"
  type        = bool
  default     = false
}

variable "create_database_subnet_group" {
  description = "Controls if database subnet group should be created (n.b. database_subnets must also be set)"
  type        = bool
  default     = true
}

variable "create_elasticache_subnet_group" {
  description = "Controls if elasticache subnet group should be created"
  type        = bool
  default     = true
}

variable "create_redshift_subnet_group" {
  description = "Controls if redshift subnet group should be created"
  type        = bool
  default     = true
}

variable "create_database_internet_gateway_route" {
  description = "Controls if an internet gateway route for public database access should be created"
  type        = bool
  default     = false
}

variable "create_database_nat_gateway_route" {
  description = "Controls if a nat gateway route should be created to give internet access to the database subnets"
  type        = bool
  default     = false
}

variable "azs" {
  description = "A list of availability zones names or ids in the region"
  type        = list(string)
  default     = []
}

variable "enable_dns_hostnames" {
  description = "Should be true to enable DNS hostnames in the VPC"
  type        = bool
  default     = false
}

variable "enable_dns_support" {
  description = "Should be true to enable DNS support in the VPC"
  type        = bool
  default     = true
}

variable "enable_classiclink" {
  description = "Should be true to enable ClassicLink for the VPC. Only valid in regions and accounts that support EC2 Classic."
  type        = bool
  default     = null
}

variable "enable_classiclink_dns_support" {
  description = "Should be true to enable ClassicLink DNS Support for the VPC. Only valid in regions and accounts that support EC2 Classic."
  type        = bool
  default     = null
}

variable "enable_nat_gateway" {
  description = "Should be true if you want to provision NAT Gateways for each of your private networks"
  type        = bool
  default     = false
}

variable "single_nat_gateway" {
  description = "Should be true if you want to provision a single shared NAT Gateway across all of your private networks"
  type        = bool
  default     = false
}

variable "one_nat_gateway_per_az" {
  description = "Should be true if you want only one NAT Gateway per availability zone. Requires `var.azs` to be set, and the number of `public_subnets` created to be greater than or equal to the number of availability zones specified in `var.azs`."
  type        = bool
  default     = false
}

variable "reuse_nat_ips" {
  description = "Should be true if you don't want EIPs to be created for your NAT Gateways and will instead pass them in via the 'external_nat_ip_ids' variable"
  type        = bool
  default     = false
}

variable "external_nat_ip_ids" {
  description = "List of EIP IDs to be assigned to the NAT Gateways (used in combination with reuse_nat_ips)"
  type        = list(string)
  default     = []
}

variable "external_nat_ips" {
  description = "List of EIPs to be used for `nat_public_ips` output (used in combination with reuse_nat_ips and external_nat_ip_ids)"
  type        = list(string)
  default     = []
}

variable "enable_public_s3_endpoint" {
  description = "Whether to enable S3 VPC Endpoint for public subnets"
  default     = true
  type        = bool
}

variable "enable_dynamodb_endpoint" {
  description = "Should be true if you want to provision a DynamoDB endpoint to the VPC"
  type        = bool
  default     = false
}

variable "dynamodb_endpoint_type" {
  description = "DynamoDB VPC endpoint type. Note - DynamoDB Interface type support is not yet available"
  type        = string
  default     = "Gateway"
}

variable "dynamodb_endpoint_security_group_ids" {
  description = "The ID of one or more security groups to associate with the network interface for DynamoDB interface endpoint"
  type        = list(string)
  default     = []
}

variable "dynamodb_endpoint_subnet_ids" {
  description = "The ID of one or more subnets in which to create a network interface for DynamoDB interface endpoint. Only a single subnet within an AZ is supported. If omitted, private subnets will be used."
  type        = list(string)
  default     = []
}

variable "dynamodb_endpoint_private_dns_enabled" {
  description = "Whether or not to associate a private hosted zone with the specified VPC for DynamoDB interface endpoint"
  type        = bool
  default     = false
}

variable "dynamodb_endpoint_policy" {
  description = "A policy to attach to the endpoint that controls access to the service. Defaults to full access"
  type        = string
  default     = null
}

variable "enable_s3_endpoint" {
  description = "Should be true if you want to provision an S3 endpoint to the VPC"
  type        = bool
  default     = false
}

variable "s3_endpoint_type" {
  description = "S3 VPC endpoint type. Note - S3 Interface type support is only available on AWS provider 3.10 and later"
  type        = string
  default     = "Gateway"
}

variable "s3_endpoint_security_group_ids" {
  description = "The ID of one or more security groups to associate with the network interface for S3 interface endpoint"
  type        = list(string)
  default     = []
}

variable "s3_endpoint_subnet_ids" {
  description = "The ID of one or more subnets in which to create a network interface for S3 interface endpoint. Only a single subnet within an AZ is supported. If omitted, private subnets will be used."
  type        = list(string)
  default     = []
}

variable "s3_endpoint_private_dns_enabled" {
  description = "Whether or not to associate a private hosted zone with the specified VPC for S3 interface endpoint"
  type        = bool
  default     = false
}

variable "s3_endpoint_policy" {
  description = "A policy to attach to the endpoint that controls access to the service. Defaults to full access"
  type        = string
  default     = null
}

variable "enable_codeartifact_api_endpoint" {
  description = "Should be true if you want to provision an Codeartifact API endpoint to the VPC"
  type        = bool
  default     = false
}

variable "codeartifact_api_endpoint_security_group_ids" {
  description = "The ID of one or more security groups to associate with the network interface for Codeartifact API endpoint"
  type        = list(string)
  default     = []
}

variable "codeartifact_api_endpoint_subnet_ids" {
  description = "The ID of one or more subnets in which to create a network interface for Codeartifact API endpoint. Only a single subnet within an AZ is supported. If omitted, private subnets will be used."
  type        = list(string)
  default     = []
}

variable "codeartifact_api_endpoint_private_dns_enabled" {
  description = "Whether or not to associate a private hosted zone with the specified VPC for Codeartifact API endpoint"
  type        = bool
  default     = false
}

variable "enable_codeartifact_repositories_endpoint" {
  description = "Should be true if you want to provision an Codeartifact repositories endpoint to the VPC"
  type        = bool
  default     = false
}

variable "codeartifact_repositories_endpoint_security_group_ids" {
  description = "The ID of one or more security groups to associate with the network interface for Codeartifact repositories endpoint"
  type        = list(string)
  default     = []
}

variable "codeartifact_repositories_endpoint_subnet_ids" {
  description = "The ID of one or more subnets in which to create a network interface for Codeartifact repositories endpoint. Only a single subnet within an AZ is supported. If omitted, private subnets will be used."
  type        = list(string)
  default     = []
}

variable "codeartifact_repositories_endpoint_private_dns_enabled" {
  description = "Whether or not to associate a private hosted zone with the specified VPC for Codeartifact repositories endpoint"
  type        = bool
  default     = false
}

variable "enable_codebuild_endpoint" {
  description = "Should be true if you want to provision an Codebuild endpoint to the VPC"
  type        = bool
  default     = false
}

variable "codebuild_endpoint_security_group_ids" {
  description = "The ID of one or more security groups to associate with the network interface for Codebuild endpoint"
  type        = list(string)
  default     = []
}

variable "codebuild_endpoint_subnet_ids" {
  description = "The ID of one or more subnets in which to create a network interface for Codebuilt endpoint. Only a single subnet within an AZ is supported. If omitted, private subnets will be used."
  type        = list(string)
  default     = []
}

variable "codebuild_endpoint_policy" {
  description = "A policy to attach to the endpoint that controls access to the service. Defaults to full access"
  type        = string
  default     = null
}

variable "codebuild_endpoint_private_dns_enabled" {
  description = "Whether or not to associate a private hosted zone with the specified VPC for Codebuild endpoint"
  type        = bool
  default     = false
}

variable "enable_codecommit_endpoint" {
  description = "Should be true if you want to provision an Codecommit endpoint to the VPC"
  type        = bool
  default     = false
}

variable "codecommit_endpoint_security_group_ids" {
  description = "The ID of one or more security groups to associate with the network interface for Codecommit endpoint"
  type        = list(string)
  default     = []
}

variable "codecommit_endpoint_subnet_ids" {
  description = "The ID of one or more subnets in which to create a network interface for Codecommit endpoint. Only a single subnet within an AZ is supported. If omitted, private subnets will be used."
  type        = list(string)
  default     = []
}

variable "codecommit_endpoint_policy" {
  description = "A policy to attach to the endpoint that controls access to the service. Defaults to full access"
  type        = string
  default     = null
}

variable "codecommit_endpoint_private_dns_enabled" {
  description = "Whether or not to associate a private hosted zone with the specified VPC for Codecommit endpoint"
  type        = bool
  default     = false
}

variable "enable_git_codecommit_endpoint" {
  description = "Should be true if you want to provision an Git Codecommit endpoint to the VPC"
  type        = bool
  default     = false
}

variable "git_codecommit_endpoint_security_group_ids" {
  description = "The ID of one or more security groups to associate with the network interface for Git Codecommit endpoint"
  type        = list(string)
  default     = []
}

variable "git_codecommit_endpoint_subnet_ids" {
  description = "The ID of one or more subnets in which to create a network interface for Git Codecommit endpoint. Only a single subnet within an AZ is supported. If omitted, private subnets will be used."
  type        = list(string)
  default     = []
}

variable "git_codecommit_endpoint_private_dns_enabled" {
  description = "Whether or not to associate a private hosted zone with the specified VPC for Git Codecommit endpoint"
  type        = bool
  default     = false
}

variable "enable_config_endpoint" {
  description = "Should be true if you want to provision an config endpoint to the VPC"
  type        = bool
  default     = false
}

variable "config_endpoint_security_group_ids" {
  description = "The ID of one or more security groups to associate with the network interface for config endpoint"
  type        = list(string)
  default     = []
}

variable "config_endpoint_subnet_ids" {
  description = "The ID of one or more subnets in which to create a network interface for config endpoint. Only a single subnet within an AZ is supported. If omitted, private subnets will be used."
  type        = list(string)
  default     = []
}

variable "config_endpoint_private_dns_enabled" {
  description = "Whether or not to associate a private hosted zone with the specified VPC for config endpoint"
  type        = bool
  default     = false
}

variable "enable_sqs_endpoint" {
  description = "Should be true if you want to provision an SQS endpoint to the VPC"
  type        = bool
  default     = false
}

variable "sqs_endpoint_security_group_ids" {
  description = "The ID of one or more security groups to associate with the network interface for SQS endpoint"
  type        = list(string)
  default     = []
}

variable "sqs_endpoint_subnet_ids" {
  description = "The ID of one or more subnets in which to create a network interface for SQS endpoint. Only a single subnet within an AZ is supported. If omitted, private subnets will be used."
  type        = list(string)
  default     = []
}

variable "sqs_endpoint_policy" {
  description = "A policy to attach to the endpoint that controls access to the service. Defaults to full access"
  type        = string
  default     = null
}

variable "sqs_endpoint_private_dns_enabled" {
  description = "Whether or not to associate a private hosted zone with the specified VPC for SQS endpoint"
  type        = bool
  default     = false
}

variable "enable_lambda_endpoint" {
  description = "Should be true if you want to provision a Lambda endpoint to the VPC"
  type        = bool
  default     = false
}

variable "lambda_endpoint_security_group_ids" {
  description = "The ID of one or more security groups to associate with the network interface for Lambda endpoint"
  type        = list(string)
  default     = []
}

variable "lambda_endpoint_subnet_ids" {
  description = "The ID of one or more subnets in which to create a network interface for Lambda endpoint. Only a single subnet within an AZ is supported. If omitted, private subnets will be used."
  type        = list(string)
  default     = []
}

variable "lambda_endpoint_private_dns_enabled" {
  description = "Whether or not to associate a private hosted zone with the specified VPC for Lambda endpoint"
  type        = bool
  default     = false
}

variable "enable_ssm_endpoint" {
  description = "Should be true if you want to provision an SSM endpoint to the VPC"
  type        = bool
  default     = false
}

variable "ssm_endpoint_security_group_ids" {
  description = "The ID of one or more security groups to associate with the network interface for SSM endpoint"
  type        = list(string)
  default     = []
}

variable "ssm_endpoint_subnet_ids" {
  description = "The ID of one or more subnets in which to create a network interface for SSM endpoint. Only a single subnet within an AZ is supported. If omitted, private subnets will be used."
  type        = list(string)
  default     = []
}

variable "ssm_endpoint_private_dns_enabled" {
  description = "Whether or not to associate a private hosted zone with the specified VPC for SSM endpoint"
  type        = bool
  default     = false
}

variable "enable_secretsmanager_endpoint" {
  description = "Should be true if you want to provision an Secrets Manager endpoint to the VPC"
  type        = bool
  default     = false
}

variable "secretsmanager_endpoint_security_group_ids" {
  description = "The ID of one or more security groups to associate with the network interface for Secrets Manager endpoint"
  type        = list(string)
  default     = []
}

variable "secretsmanager_endpoint_subnet_ids" {
  description = "The ID of one or more subnets in which to create a network interface for Secrets Manager endpoint. Only a single subnet within an AZ is supported. If omitted, private subnets will be used."
  type        = list(string)
  default     = []
}

variable "secretsmanager_endpoint_policy" {
  description = "A policy to attach to the endpoint that controls access to the service. Defaults to full access"
  type        = string
  default     = null
}

variable "secretsmanager_endpoint_private_dns_enabled" {
  description = "Whether or not to associate a private hosted zone with the specified VPC for Secrets Manager endpoint"
  type        = bool
  default     = false
}

variable "enable_apigw_endpoint" {
  description = "Should be true if you want to provision an api gateway endpoint to the VPC"
  type        = bool
  default     = false
}

variable "apigw_endpoint_security_group_ids" {
  description = "The ID of one or more security groups to associate with the network interface for API GW  endpoint"
  type        = list(string)
  default     = []
}

variable "apigw_endpoint_policy" {
  description = "A policy to attach to the endpoint that controls access to the service. Defaults to full access"
  type        = string
  default     = null
}

variable "apigw_endpoint_private_dns_enabled" {
  description = "Whether or not to associate a private hosted zone with the specified VPC for API GW endpoint"
  type        = bool
  default     = false
}

variable "apigw_endpoint_subnet_ids" {
  description = "The ID of one or more subnets in which to create a network interface for API GW endpoint. Only a single subnet within an AZ is supported. If omitted, private subnets will be used."
  type        = list(string)
  default     = []
}

variable "enable_ssmmessages_endpoint" {
  description = "Should be true if you want to provision a SSMMESSAGES endpoint to the VPC"
  type        = bool
  default     = false
}

variable "ssmmessages_endpoint_security_group_ids" {
  description = "The ID of one or more security groups to associate with the network interface for SSMMESSAGES endpoint"
  type        = list(string)
  default     = []
}

variable "ssmmessages_endpoint_subnet_ids" {
  description = "The ID of one or more subnets in which to create a network interface for SSMMESSAGES endpoint. Only a single subnet within an AZ is supported. If omitted, private subnets will be used."
  type        = list(string)
  default     = []
}

variable "ssmmessages_endpoint_private_dns_enabled" {
  description = "Whether or not to associate a private hosted zone with the specified VPC for SSMMESSAGES endpoint"
  type        = bool
  default     = false
}

variable "enable_textract_endpoint" {
  description = "Should be true if you want to provision an Textract endpoint to the VPC"
  type        = bool
  default     = false
}

variable "textract_endpoint_security_group_ids" {
  description = "The ID of one or more security groups to associate with the network interface for Textract endpoint"
  type        = list(string)
  default     = []
}

variable "textract_endpoint_subnet_ids" {
  description = "The ID of one or more subnets in which to create a network interface for Textract endpoint. Only a single subnet within an AZ is supported. If omitted, private subnets will be used."
  type        = list(string)
  default     = []
}

variable "textract_endpoint_private_dns_enabled" {
  description = "Whether or not to associate a private hosted zone with the specified VPC for Textract endpoint"
  type        = bool
  default     = false
}

variable "enable_transferserver_endpoint" {
  description = "Should be true if you want to provision a Transfer Server endpoint to the VPC"
  type        = bool
  default     = false
}

variable "transferserver_endpoint_security_group_ids" {
  description = "The ID of one or more security groups to associate with the network interface for Transfer Server endpoint"
  type        = list(string)
  default     = []
}

variable "transferserver_endpoint_subnet_ids" {
  description = "The ID of one or more subnets in which to create a network interface for Transfer Server endpoint. Only a single subnet within an AZ is supported. If omitted, private subnets will be used."
  type        = list(string)
  default     = []
}

variable "transferserver_endpoint_private_dns_enabled" {
  description = "Whether or not to associate a private hosted zone with the specified VPC for Transfer Server endpoint"
  type        = bool
  default     = false
}


variable "enable_ec2_endpoint" {
  description = "Should be true if you want to provision an EC2 endpoint to the VPC"
  type        = bool
  default     = false
}

variable "ec2_endpoint_security_group_ids" {
  description = "The ID of one or more security groups to associate with the network interface for EC2 endpoint"
  type        = list(string)
  default     = []
}

variable "ec2_endpoint_policy" {
  description = "A policy to attach to the endpoint that controls access to the service. Defaults to full access"
  type        = string
  default     = null
}

variable "ec2_endpoint_private_dns_enabled" {
  description = "Whether or not to associate a private hosted zone with the specified VPC for EC2 endpoint"
  type        = bool
  default     = false
}

variable "ec2_endpoint_subnet_ids" {
  description = "The ID of one or more subnets in which to create a network interface for EC2 endpoint. Only a single subnet within an AZ is supported. If omitted, private subnets will be used."
  type        = list(string)
  default     = []
}

variable "enable_ec2messages_endpoint" {
  description = "Should be true if you want to provision an EC2MESSAGES endpoint to the VPC"
  type        = bool
  default     = false
}

variable "ec2messages_endpoint_security_group_ids" {
  description = "The ID of one or more security groups to associate with the network interface for EC2MESSAGES endpoint"
  type        = list(string)
  default     = []
}

variable "ec2messages_endpoint_private_dns_enabled" {
  description = "Whether or not to associate a private hosted zone with the specified VPC for EC2MESSAGES endpoint"
  type        = bool
  default     = false
}

variable "ec2messages_endpoint_subnet_ids" {
  description = "The ID of one or more subnets in which to create a network interface for EC2MESSAGES endpoint. Only a single subnet within an AZ is supported. If omitted, private subnets will be used."
  type        = list(string)
  default     = []
}


variable "enable_ec2_autoscaling_endpoint" {
  description = "Should be true if you want to provision an EC2 Autoscaling endpoint to the VPC"
  type        = bool
  default     = false
}

variable "ec2_autoscaling_endpoint_security_group_ids" {
  description = "The ID of one or more security groups to associate with the network interface for EC2 Autoscaling endpoint"
  type        = list(string)
  default     = []
}

variable "ec2_autoscaling_endpoint_policy" {
  description = "A policy to attach to the endpoint that controls access to the service. Defaults to full access"
  type        = string
  default     = null
}

variable "ec2_autoscaling_endpoint_private_dns_enabled" {
  description = "Whether or not to associate a private hosted zone with the specified VPC for EC2 Autoscaling endpoint"
  type        = bool
  default     = false
}

variable "ec2_autoscaling_endpoint_subnet_ids" {
  description = "The ID of one or more subnets in which to create a network interface for EC2 Autoscaling endpoint. Only a single subnet within an AZ is supported. If omitted, private subnets will be used."
  type        = list(string)
  default     = []
}

variable "enable_ecr_api_endpoint" {
  description = "Should be true if you want to provision an ecr api endpoint to the VPC"
  type        = bool
  default     = false
}

variable "ecr_api_endpoint_subnet_ids" {
  description = "The ID of one or more subnets in which to create a network interface for ECR api endpoint. If omitted, private subnets will be used."
  type        = list(string)
  default     = []
}

variable "ecr_api_endpoint_policy" {
  description = "A policy to attach to the endpoint that controls access to the service. Defaults to full access"
  type        = string
  default     = null
}

variable "ecr_api_endpoint_private_dns_enabled" {
  description = "Whether or not to associate a private hosted zone with the specified VPC for ECR API endpoint"
  type        = bool
  default     = false
}

variable "ecr_api_endpoint_security_group_ids" {
  description = "The ID of one or more security groups to associate with the network interface for ECR API endpoint"
  type        = list(string)
  default     = []
}

variable "enable_ecr_dkr_endpoint" {
  description = "Should be true if you want to provision an ecr dkr endpoint to the VPC"
  type        = bool
  default     = false
}

variable "ecr_dkr_endpoint_subnet_ids" {
  description = "The ID of one or more subnets in which to create a network interface for ECR dkr endpoint. If omitted, private subnets will be used."
  type        = list(string)
  default     = []
}

variable "ecr_dkr_endpoint_policy" {
  description = "A policy to attach to the endpoint that controls access to the service. Defaults to full access"
  type        = string
  default     = null
}

variable "ecr_dkr_endpoint_private_dns_enabled" {
  description = "Whether or not to associate a private hosted zone with the specified VPC for ECR DKR endpoint"
  type        = bool
  default     = false
}

variable "ecr_dkr_endpoint_security_group_ids" {
  description = "The ID of one or more security groups to associate with the network interface for ECR DKR endpoint"
  type        = list(string)
  default     = []
}

variable "enable_kms_endpoint" {
  description = "Should be true if you want to provision a KMS endpoint to the VPC"
  type        = bool
  default     = false
}

variable "kms_endpoint_security_group_ids" {
  description = "The ID of one or more security groups to associate with the network interface for KMS endpoint"
  type        = list(string)
  default     = []
}

variable "kms_endpoint_subnet_ids" {
  description = "The ID of one or more subnets in which to create a network interface for KMS endpoint. Only a single subnet within an AZ is supported. If omitted, private subnets will be used."
  type        = list(string)
  default     = []
}

variable "kms_endpoint_policy" {
  description = "A policy to attach to the endpoint that controls access to the service. Defaults to full access"
  type        = string
  default     = null
}

variable "kms_endpoint_private_dns_enabled" {
  description = "Whether or not to associate a private hosted zone with the specified VPC for KMS endpoint"
  type        = bool
  default     = false
}

variable "enable_ecs_endpoint" {
  description = "Should be true if you want to provision a ECS endpoint to the VPC"
  type        = bool
  default     = false
}

variable "ecs_endpoint_security_group_ids" {
  description = "The ID of one or more security groups to associate with the network interface for ECS endpoint"
  type        = list(string)
  default     = []
}

variable "ecs_endpoint_subnet_ids" {
  description = "The ID of one or more subnets in which to create a network interface for ECS endpoint. Only a single subnet within an AZ is supported. If omitted, private subnets will be used."
  type        = list(string)
  default     = []
}

variable "ecs_endpoint_private_dns_enabled" {
  description = "Whether or not to associate a private hosted zone with the specified VPC for ECS endpoint"
  type        = bool
  default     = false
}

variable "enable_ecs_agent_endpoint" {
  description = "Should be true if you want to provision a ECS Agent endpoint to the VPC"
  type        = bool
  default     = false
}

variable "ecs_agent_endpoint_security_group_ids" {
  description = "The ID of one or more security groups to associate with the network interface for ECS Agent endpoint"
  type        = list(string)
  default     = []
}

variable "ecs_agent_endpoint_subnet_ids" {
  description = "The ID of one or more subnets in which to create a network interface for ECS Agent endpoint. Only a single subnet within an AZ is supported. If omitted, private subnets will be used."
  type        = list(string)
  default     = []
}

variable "ecs_agent_endpoint_private_dns_enabled" {
  description = "Whether or not to associate a private hosted zone with the specified VPC for ECS Agent endpoint"
  type        = bool
  default     = false
}

variable "enable_ecs_telemetry_endpoint" {
  description = "Should be true if you want to provision a ECS Telemetry endpoint to the VPC"
  type        = bool
  default     = false
}

variable "ecs_telemetry_endpoint_security_group_ids" {
  description = "The ID of one or more security groups to associate with the network interface for ECS Telemetry endpoint"
  type        = list(string)
  default     = []
}

variable "ecs_telemetry_endpoint_subnet_ids" {
  description = "The ID of one or more subnets in which to create a network interface for ECS Telemetry endpoint. Only a single subnet within an AZ is supported. If omitted, private subnets will be used."
  type        = list(string)
  default     = []
}

variable "ecs_telemetry_endpoint_private_dns_enabled" {
  description = "Whether or not to associate a private hosted zone with the specified VPC for ECS Telemetry endpoint"
  type        = bool
  default     = false
}

variable "enable_sns_endpoint" {
  description = "Should be true if you want to provision a SNS endpoint to the VPC"
  type        = bool
  default     = false
}

variable "sns_endpoint_security_group_ids" {
  description = "The ID of one or more security groups to associate with the network interface for SNS endpoint"
  type        = list(string)
  default     = []
}

variable "sns_endpoint_subnet_ids" {
  description = "The ID of one or more subnets in which to create a network interface for SNS endpoint. Only a single subnet within an AZ is supported. If omitted, private subnets will be used."
  type        = list(string)
  default     = []
}

variable "sns_endpoint_policy" {
  description = "A policy to attach to the endpoint that controls access to the service. Defaults to full access"
  type        = string
  default     = null
}

variable "sns_endpoint_private_dns_enabled" {
  description = "Whether or not to associate a private hosted zone with the specified VPC for SNS endpoint"
  type        = bool
  default     = false
}

variable "enable_monitoring_endpoint" {
  description = "Should be true if you want to provision a CloudWatch Monitoring endpoint to the VPC"
  type        = bool
  default     = false
}

variable "monitoring_endpoint_security_group_ids" {
  description = "The ID of one or more security groups to associate with the network interface for CloudWatch Monitoring endpoint"
  type        = list(string)
  default     = []
}

variable "monitoring_endpoint_subnet_ids" {
  description = "The ID of one or more subnets in which to create a network interface for CloudWatch Monitoring endpoint. Only a single subnet within an AZ is supported. If omitted, private subnets will be used."
  type        = list(string)
  default     = []
}

variable "monitoring_endpoint_policy" {
  description = "A policy to attach to the endpoint that controls access to the service. Defaults to full access"
  type        = string
  default     = null
}

variable "monitoring_endpoint_private_dns_enabled" {
  description = "Whether or not to associate a private hosted zone with the specified VPC for CloudWatch Monitoring endpoint"
  type        = bool
  default     = false
}

variable "enable_elasticloadbalancing_endpoint" {
  description = "Should be true if you want to provision a Elastic Load Balancing endpoint to the VPC"
  type        = bool
  default     = false
}

variable "elasticloadbalancing_endpoint_security_group_ids" {
  description = "The ID of one or more security groups to associate with the network interface for Elastic Load Balancing endpoint"
  type        = list(string)
  default     = []
}

variable "elasticloadbalancing_endpoint_subnet_ids" {
  description = "The ID of one or more subnets in which to create a network interface for Elastic Load Balancing endpoint. Only a single subnet within an AZ is supported. If omitted, private subnets will be used."
  type        = list(string)
  default     = []
}

variable "elasticloadbalancing_endpoint_policy" {
  description = "A policy to attach to the endpoint that controls access to the service. Defaults to full access"
  type        = string
  default     = null
}

variable "elasticloadbalancing_endpoint_private_dns_enabled" {
  description = "Whether or not to associate a private hosted zone with the specified VPC for Elastic Load Balancing endpoint"
  type        = bool
  default     = false
}

variable "enable_events_endpoint" {
  description = "Should be true if you want to provision a CloudWatch Events endpoint to the VPC"
  type        = bool
  default     = false
}

variable "events_endpoint_security_group_ids" {
  description = "The ID of one or more security groups to associate with the network interface for CloudWatch Events endpoint"
  type        = list(string)
  default     = []
}

variable "events_endpoint_subnet_ids" {
  description = "The ID of one or more subnets in which to create a network interface for CloudWatch Events endpoint. Only a single subnet within an AZ is supported. If omitted, private subnets will be used."
  type        = list(string)
  default     = []
}

variable "events_endpoint_policy" {
  description = "A policy to attach to the endpoint that controls access to the service. Defaults to full access"
  type        = string
  default     = null
}

variable "events_endpoint_private_dns_enabled" {
  description = "Whether or not to associate a private hosted zone with the specified VPC for CloudWatch Events endpoint"
  type        = bool
  default     = false
}

variable "enable_logs_endpoint" {
  description = "Should be true if you want to provision a CloudWatch Logs endpoint to the VPC"
  type        = bool
  default     = false
}

variable "logs_endpoint_security_group_ids" {
  description = "The ID of one or more security groups to associate with the network interface for CloudWatch Logs endpoint"
  type        = list(string)
  default     = []
}

variable "logs_endpoint_subnet_ids" {
  description = "The ID of one or more subnets in which to create a network interface for CloudWatch Logs endpoint. Only a single subnet within an AZ is supported. If omitted, private subnets will be used."
  type        = list(string)
  default     = []
}

variable "logs_endpoint_policy" {
  description = "A policy to attach to the endpoint that controls access to the service. Defaults to full access"
  type        = string
  default     = null
}

variable "logs_endpoint_private_dns_enabled" {
  description = "Whether or not to associate a private hosted zone with the specified VPC for CloudWatch Logs endpoint"
  type        = bool
  default     = false
}

variable "enable_cloudtrail_endpoint" {
  description = "Should be true if you want to provision a CloudTrail endpoint to the VPC"
  type        = bool
  default     = false
}

variable "cloudtrail_endpoint_security_group_ids" {
  description = "The ID of one or more security groups to associate with the network interface for CloudTrail endpoint"
  type        = list(string)
  default     = []
}

variable "cloudtrail_endpoint_subnet_ids" {
  description = "The ID of one or more subnets in which to create a network interface for CloudTrail endpoint. Only a single subnet within an AZ is supported. If omitted, private subnets will be used."
  type        = list(string)
  default     = []
}

variable "cloudtrail_endpoint_private_dns_enabled" {
  description = "Whether or not to associate a private hosted zone with the specified VPC for CloudTrail endpoint"
  type        = bool
  default     = false
}

variable "enable_kinesis_streams_endpoint" {
  description = "Should be true if you want to provision a Kinesis Streams endpoint to the VPC"
  type        = bool
  default     = false
}

variable "kinesis_streams_endpoint_security_group_ids" {
  description = "The ID of one or more security groups to associate with the network interface for Kinesis Streams endpoint"
  type        = list(string)
  default     = []
}

variable "kinesis_streams_endpoint_subnet_ids" {
  description = "The ID of one or more subnets in which to create a network interface for Kinesis Streams endpoint. Only a single subnet within an AZ is supported. If omitted, private subnets will be used."
  type        = list(string)
  default     = []
}

variable "kinesis_streams_endpoint_policy" {
  description = "A policy to attach to the endpoint that controls access to the service. Defaults to full access"
  type        = string
  default     = null
}

variable "kinesis_streams_endpoint_private_dns_enabled" {
  description = "Whether or not to associate a private hosted zone with the specified VPC for Kinesis Streams endpoint"
  type        = bool
  default     = false
}

variable "enable_kinesis_firehose_endpoint" {
  description = "Should be true if you want to provision a Kinesis Firehose endpoint to the VPC"
  type        = bool
  default     = false
}

variable "kinesis_firehose_endpoint_security_group_ids" {
  description = "The ID of one or more security groups to associate with the network interface for Kinesis Firehose endpoint"
  type        = list(string)
  default     = []
}

variable "kinesis_firehose_endpoint_subnet_ids" {
  description = "The ID of one or more subnets in which to create a network interface for Kinesis Firehose endpoint. Only a single subnet within an AZ is supported. If omitted, private subnets will be used."
  type        = list(string)
  default     = []
}

variable "kinesis_firehose_endpoint_policy" {
  description = "A policy to attach to the endpoint that controls access to the service. Defaults to full access"
  type        = string
  default     = null
}

variable "kinesis_firehose_endpoint_private_dns_enabled" {
  description = "Whether or not to associate a private hosted zone with the specified VPC for Kinesis Firehose endpoint"
  type        = bool
  default     = false
}

variable "enable_glue_endpoint" {
  description = "Should be true if you want to provision a Glue endpoint to the VPC"
  type        = bool
  default     = false
}

variable "glue_endpoint_security_group_ids" {
  description = "The ID of one or more security groups to associate with the network interface for Glue endpoint"
  type        = list(string)
  default     = []
}

variable "glue_endpoint_subnet_ids" {
  description = "The ID of one or more subnets in which to create a network interface for Glue endpoint. Only a single subnet within an AZ is supported. If omitted, private subnets will be used."
  type        = list(string)
  default     = []
}

variable "glue_endpoint_private_dns_enabled" {
  description = "Whether or not to associate a private hosted zone with the specified VPC for Glue endpoint"
  type        = bool
  default     = false
}

variable "enable_sagemaker_notebook_endpoint" {
  description = "Should be true if you want to provision a Sagemaker Notebook endpoint to the VPC"
  type        = bool
  default     = false
}

variable "sagemaker_notebook_endpoint_region" {
  description = "Region to use for Sagemaker Notebook endpoint"
  type        = string
  default     = ""
}

variable "sagemaker_notebook_endpoint_security_group_ids" {
  description = "The ID of one or more security groups to associate with the network interface for Sagemaker Notebook endpoint"
  type        = list(string)
  default     = []
}

variable "sagemaker_notebook_endpoint_subnet_ids" {
  description = "The ID of one or more subnets in which to create a network interface for Sagemaker Notebook endpoint. Only a single subnet within an AZ is supported. If omitted, private subnets will be used."
  type        = list(string)
  default     = []
}

variable "sagemaker_notebook_endpoint_policy" {
  description = "A policy to attach to the endpoint that controls access to the service. Defaults to full access"
  type        = string
  default     = null
}

variable "sagemaker_notebook_endpoint_private_dns_enabled" {
  description = "Whether or not to associate a private hosted zone with the specified VPC for Sagemaker Notebook endpoint"
  type        = bool
  default     = false
}

variable "enable_sts_endpoint" {
  description = "Should be true if you want to provision a STS endpoint to the VPC"
  type        = bool
  default     = false
}

variable "sts_endpoint_security_group_ids" {
  description = "The ID of one or more security groups to associate with the network interface for STS endpoint"
  type        = list(string)
  default     = []
}

variable "sts_endpoint_subnet_ids" {
  description = "The ID of one or more subnets in which to create a network interface for STS endpoint. Only a single subnet within an AZ is supported. If omitted, private subnets will be used."
  type        = list(string)
  default     = []
}

variable "sts_endpoint_policy" {
  description = "A policy to attach to the endpoint that controls access to the service. Defaults to full access"
  type        = string
  default     = null
}

variable "sts_endpoint_private_dns_enabled" {
  description = "Whether or not to associate a private hosted zone with the specified VPC for STS endpoint"
  type        = bool
  default     = false
}

variable "enable_cloudformation_endpoint" {
  description = "Should be true if you want to provision a Cloudformation endpoint to the VPC"
  type        = bool
  default     = false
}

variable "cloudformation_endpoint_security_group_ids" {
  description = "The ID of one or more security groups to associate with the network interface for Cloudformation endpoint"
  type        = list(string)
  default     = []
}

variable "cloudformation_endpoint_subnet_ids" {
  description = "The ID of one or more subnets in which to create a network interface for Cloudformation endpoint. Only a single subnet within an AZ is supported. If omitted, private subnets will be used."
  type        = list(string)
  default     = []
}

variable "cloudformation_endpoint_private_dns_enabled" {
  description = "Whether or not to associate a private hosted zone with the specified VPC for Cloudformation endpoint"
  type        = bool
  default     = false
}
variable "enable_codepipeline_endpoint" {
  description = "Should be true if you want to provision a CodePipeline endpoint to the VPC"
  type        = bool
  default     = false
}

variable "codepipeline_endpoint_security_group_ids" {
  description = "The ID of one or more security groups to associate with the network interface for CodePipeline endpoint"
  type        = list(string)
  default     = []
}

variable "codepipeline_endpoint_subnet_ids" {
  description = "The ID of one or more subnets in which to create a network interface for CodePipeline endpoint. Only a single subnet within an AZ is supported. If omitted, private subnets will be used."
  type        = list(string)
  default     = []
}

variable "codepipeline_endpoint_private_dns_enabled" {
  description = "Whether or not to associate a private hosted zone with the specified VPC for CodePipeline endpoint"
  type        = bool
  default     = false
}
variable "enable_appmesh_envoy_management_endpoint" {
  description = "Should be true if you want to provision a AppMesh endpoint to the VPC"
  type        = bool
  default     = false
}

variable "appmesh_envoy_management_endpoint_security_group_ids" {
  description = "The ID of one or more security groups to associate with the network interface for AppMesh endpoint"
  type        = list(string)
  default     = []
}

variable "appmesh_envoy_management_endpoint_subnet_ids" {
  description = "The ID of one or more subnets in which to create a network interface for AppMesh endpoint. Only a single subnet within an AZ is supported. If omitted, private subnets will be used."
  type        = list(string)
  default     = []
}

variable "appmesh_envoy_management_endpoint_private_dns_enabled" {
  description = "Whether or not to associate a private hosted zone with the specified VPC for AppMesh endpoint"
  type        = bool
  default     = false
}
variable "enable_servicecatalog_endpoint" {
  description = "Should be true if you want to provision a Service Catalog endpoint to the VPC"
  type        = bool
  default     = false
}

variable "servicecatalog_endpoint_security_group_ids" {
  description = "The ID of one or more security groups to associate with the network interface for Service Catalog endpoint"
  type        = list(string)
  default     = []
}

variable "servicecatalog_endpoint_subnet_ids" {
  description = "The ID of one or more subnets in which to create a network interface for Service Catalog endpoint. Only a single subnet within an AZ is supported. If omitted, private subnets will be used."
  type        = list(string)
  default     = []
}

variable "servicecatalog_endpoint_private_dns_enabled" {
  description = "Whether or not to associate a private hosted zone with the specified VPC for Service Catalog endpoint"
  type        = bool
  default     = false
}
variable "enable_storagegateway_endpoint" {
  description = "Should be true if you want to provision a Storage Gateway endpoint to the VPC"
  type        = bool
  default     = false
}

variable "storagegateway_endpoint_security_group_ids" {
  description = "The ID of one or more security groups to associate with the network interface for Storage Gateway endpoint"
  type        = list(string)
  default     = []
}

variable "storagegateway_endpoint_subnet_ids" {
  description = "The ID of one or more subnets in which to create a network interface for Storage Gateway endpoint. Only a single subnet within an AZ is supported. If omitted, private subnets will be used."
  type        = list(string)
  default     = []
}

variable "storagegateway_endpoint_private_dns_enabled" {
  description = "Whether or not to associate a private hosted zone with the specified VPC for Storage Gateway endpoint"
  type        = bool
  default     = false
}
variable "enable_transfer_endpoint" {
  description = "Should be true if you want to provision a Transfer endpoint to the VPC"
  type        = bool
  default     = false
}

variable "transfer_endpoint_security_group_ids" {
  description = "The ID of one or more security groups to associate with the network interface for Transfer endpoint"
  type        = list(string)
  default     = []
}

variable "transfer_endpoint_subnet_ids" {
  description = "The ID of one or more subnets in which to create a network interface for Transfer endpoint. Only a single subnet within an AZ is supported. If omitted, private subnets will be used."
  type        = list(string)
  default     = []
}

variable "transfer_endpoint_private_dns_enabled" {
  description = "Whether or not to associate a private hosted zone with the specified VPC for Transfer endpoint"
  type        = bool
  default     = false
}
variable "enable_sagemaker_api_endpoint" {
  description = "Should be true if you want to provision a SageMaker API endpoint to the VPC"
  type        = bool
  default     = false
}

variable "sagemaker_api_endpoint_security_group_ids" {
  description = "The ID of one or more security groups to associate with the network interface for SageMaker API endpoint"
  type        = list(string)
  default     = []
}

variable "sagemaker_api_endpoint_subnet_ids" {
  description = "The ID of one or more subnets in which to create a network interface for SageMaker API endpoint. Only a single subnet within an AZ is supported. If omitted, private subnets will be used."
  type        = list(string)
  default     = []
}

variable "sagemaker_api_endpoint_policy" {
  description = "A policy to attach to the endpoint that controls access to the service. Defaults to full access"
  type        = string
  default     = null
}

variable "sagemaker_api_endpoint_private_dns_enabled" {
  description = "Whether or not to associate a private hosted zone with the specified VPC for SageMaker API endpoint"
  type        = bool
  default     = false
}
variable "enable_sagemaker_runtime_endpoint" {
  description = "Should be true if you want to provision a SageMaker Runtime endpoint to the VPC"
  type        = bool
  default     = false
}

variable "sagemaker_runtime_endpoint_security_group_ids" {
  description = "The ID of one or more security groups to associate with the network interface for SageMaker Runtime endpoint"
  type        = list(string)
  default     = []
}

variable "sagemaker_runtime_endpoint_subnet_ids" {
  description = "The ID of one or more subnets in which to create a network interface for SageMaker Runtime endpoint. Only a single subnet within an AZ is supported. If omitted, private subnets will be used."
  type        = list(string)
  default     = []
}

variable "sagemaker_runtime_endpoint_policy" {
  description = "A policy to attach to the endpoint that controls access to the service. Defaults to full access"
  type        = string
  default     = null
}

variable "sagemaker_runtime_endpoint_private_dns_enabled" {
  description = "Whether or not to associate a private hosted zone with the specified VPC for SageMaker Runtime endpoint"
  type        = bool
  default     = false
}

variable "enable_appstream_api_endpoint" {
  description = "Should be true if you want to provision a AppStream API endpoint to the VPC"
  type        = bool
  default     = false
}

variable "appstream_api_endpoint_security_group_ids" {
  description = "The ID of one or more security groups to associate with the network interface for AppStream API endpoint"
  type        = list(string)
  default     = []
}

variable "appstream_api_endpoint_subnet_ids" {
  description = "The ID of one or more subnets in which to create a network interface for AppStream API endpoint. Only a single subnet within an AZ is supported. If omitted, private subnets will be used."
  type        = list(string)
  default     = []
}

variable "appstream_api_endpoint_private_dns_enabled" {
  description = "Whether or not to associate a private hosted zone with the specified VPC for AppStream API endpoint"
  type        = bool
  default     = false
}

variable "enable_appstream_streaming_endpoint" {
  description = "Should be true if you want to provision a AppStream Streaming endpoint to the VPC"
  type        = bool
  default     = false
}

variable "appstream_streaming_endpoint_security_group_ids" {
  description = "The ID of one or more security groups to associate with the network interface for AppStream Streaming endpoint"
  type        = list(string)
  default     = []
}

variable "appstream_streaming_endpoint_subnet_ids" {
  description = "The ID of one or more subnets in which to create a network interface for AppStream Streaming endpoint. Only a single subnet within an AZ is supported. If omitted, private subnets will be used."
  type        = list(string)
  default     = []
}

variable "appstream_streaming_endpoint_private_dns_enabled" {
  description = "Whether or not to associate a private hosted zone with the specified VPC for AppStream Streaming endpoint"
  type        = bool
  default     = false
}

variable "enable_athena_endpoint" {
  description = "Should be true if you want to provision a Athena endpoint to the VPC"
  type        = bool
  default     = false
}

variable "athena_endpoint_security_group_ids" {
  description = "The ID of one or more security groups to associate with the network interface for Athena endpoint"
  type        = list(string)
  default     = []
}

variable "athena_endpoint_subnet_ids" {
  description = "The ID of one or more subnets in which to create a network interface for Athena endpoint. Only a single subnet within an AZ is supported. If omitted, private subnets will be used."
  type        = list(string)
  default     = []
}

variable "athena_endpoint_policy" {
  description = "A policy to attach to the endpoint that controls access to the service. Defaults to full access"
  type        = string
  default     = null
}

variable "athena_endpoint_private_dns_enabled" {
  description = "Whether or not to associate a private hosted zone with the specified VPC for Athena endpoint"
  type        = bool
  default     = false
}

variable "enable_rekognition_endpoint" {
  description = "Should be true if you want to provision a Rekognition endpoint to the VPC"
  type        = bool
  default     = false
}

variable "rekognition_endpoint_security_group_ids" {
  description = "The ID of one or more security groups to associate with the network interface for Rekognition endpoint"
  type        = list(string)
  default     = []
}

variable "rekognition_endpoint_subnet_ids" {
  description = "The ID of one or more subnets in which to create a network interface for Rekognition endpoint. Only a single subnet within an AZ is supported. If omitted, private subnets will be used."
  type        = list(string)
  default     = []
}

variable "rekognition_endpoint_policy" {
  description = "A policy to attach to the endpoint that controls access to the service. Defaults to full access"
  type        = string
  default     = null
}

variable "rekognition_endpoint_private_dns_enabled" {
  description = "Whether or not to associate a private hosted zone with the specified VPC for Rekognition endpoint"
  type        = bool
  default     = false
}

variable "enable_efs_endpoint" {
  description = "Should be true if you want to provision an EFS endpoint to the VPC"
  type        = bool
  default     = false
}

variable "efs_endpoint_security_group_ids" {
  description = "The ID of one or more security groups to associate with the network interface for EFS endpoint"
  type        = list(string)
  default     = []
}

variable "efs_endpoint_subnet_ids" {
  description = "The ID of one or more subnets in which to create a network interface for EFS endpoint. Only a single subnet within an AZ is supported. Ifomitted, private subnets will be used."
  type        = list(string)
  default     = []
}

variable "efs_endpoint_policy" {
  description = "A policy to attach to the endpoint that controls access to the service. Defaults to full access"
  type        = string
  default     = null
}

variable "efs_endpoint_private_dns_enabled" {
  description = "Whether or not to associate a private hosted zone with the specified VPC for EFS endpoint"
  type        = bool
  default     = false
}

variable "enable_cloud_directory_endpoint" {
  description = "Should be true if you want to provision an Cloud Directory endpoint to the VPC"
  type        = bool
  default     = false
}

variable "cloud_directory_endpoint_security_group_ids" {
  description = "The ID of one or more security groups to associate with the network interface for Cloud Directory endpoint"
  type        = list(string)
  default     = []
}

variable "cloud_directory_endpoint_subnet_ids" {
  description = "The ID of one or more subnets in which to create a network interface for Cloud Directory endpoint. Only a single subnet within an AZ is supported. Ifomitted, private subnets will be used."
  type        = list(string)
  default     = []
}

variable "cloud_directory_endpoint_policy" {
  description = "A policy to attach to the endpoint that controls access to the service. Defaults to full access"
  type        = string
  default     = null
}

variable "cloud_directory_endpoint_private_dns_enabled" {
  description = "Whether or not to associate a private hosted zone with the specified VPC for Cloud Directory endpoint"
  type        = bool
  default     = false
}

variable "enable_ses_endpoint" {
  description = "Should be true if you want to provision an SES endpoint to the VPC"
  type        = bool
  default     = false
}

variable "ses_endpoint_security_group_ids" {
  description = "The ID of one or more security groups to associate with the network interface for SES endpoint"
  type        = list(string)
  default     = []
}

variable "ses_endpoint_subnet_ids" {
  description = "The ID of one or more subnets in which to create a network interface for SES endpoint. Only a single subnet within an AZ is supported. If omitted, private subnets will be used."
  type        = list(string)
  default     = []
}

variable "enable_auto_scaling_plans_endpoint" {
  description = "Should be true if you want to provision an Auto Scaling Plans endpoint to the VPC"
  type        = bool
  default     = false
}

variable "auto_scaling_plans_endpoint_security_group_ids" {
  description = "The ID of one or more security groups to associate with the network interface for Auto Scaling Plans endpoint"
  type        = list(string)
  default     = []
}

variable "auto_scaling_plans_endpoint_subnet_ids" {
  description = "The ID of one or more subnets in which to create a network interface for Auto Scaling Plans endpoint. Only a single subnet within an AZ is supported. Ifomitted, private subnets will be used."
  type        = list(string)
  default     = []
}

variable "auto_scaling_plans_endpoint_policy" {
  description = "A policy to attach to the endpoint that controls access to the service. Defaults to full access"
  type        = string
  default     = null
}

variable "auto_scaling_plans_endpoint_private_dns_enabled" {
  description = "Whether or not to associate a private hosted zone with the specified VPC for Auto Scaling Plans endpoint"
  type        = bool
  default     = false
}

variable "ses_endpoint_private_dns_enabled" {
  description = "Whether or not to associate a private hosted zone with the specified VPC for SES endpoint"
  type        = bool
  default     = false
}

variable "enable_workspaces_endpoint" {
  description = "Should be true if you want to provision an Workspaces endpoint to the VPC"
  type        = bool
  default     = false
}

variable "workspaces_endpoint_security_group_ids" {
  description = "The ID of one or more security groups to associate with the network interface for Workspaces endpoint"
  type        = list(string)
  default     = []
}

variable "workspaces_endpoint_subnet_ids" {
  description = "The ID of one or more subnets in which to create a network interface for Workspaces endpoint. Only a single subnet within an AZ is supported. Ifomitted, private subnets will be used."
  type        = list(string)
  default     = []
}

variable "workspaces_endpoint_policy" {
  description = "A policy to attach to the endpoint that controls access to the service. Defaults to full access"
  type        = string
  default     = null
}

variable "workspaces_endpoint_private_dns_enabled" {
  description = "Whether or not to associate a private hosted zone with the specified VPC for Workspaces endpoint"
  type        = bool
  default     = false
}

variable "enable_access_analyzer_endpoint" {
  description = "Should be true if you want to provision an Access Analyzer endpoint to the VPC"
  type        = bool
  default     = false
}

variable "access_analyzer_endpoint_security_group_ids" {
  description = "The ID of one or more security groups to associate with the network interface for Access Analyzer endpoint"
  type        = list(string)
  default     = []
}

variable "access_analyzer_endpoint_subnet_ids" {
  description = "The ID of one or more subnets in which to create a network interface for Access Analyzer endpoint. Only a single subnet within an AZ is supported. Ifomitted, private subnets will be used."
  type        = list(string)
  default     = []
}

variable "access_analyzer_endpoint_policy" {
  description = "A policy to attach to the endpoint that controls access to the service. Defaults to full access"
  type        = string
  default     = null
}

variable "access_analyzer_endpoint_private_dns_enabled" {
  description = "Whether or not to associate a private hosted zone with the specified VPC for Access Analyzer endpoint"
  type        = bool
  default     = false
}

variable "enable_ebs_endpoint" {
  description = "Should be true if you want to provision an EBS endpoint to the VPC"
  type        = bool
  default     = false
}

variable "ebs_endpoint_security_group_ids" {
  description = "The ID of one or more security groups to associate with the network interface for EBS endpoint"
  type        = list(string)
  default     = []
}

variable "ebs_endpoint_subnet_ids" {
  description = "The ID of one or more subnets in which to create a network interface for EBS endpoint. Only a single subnet within an AZ is supported. Ifomitted, private subnets will be used."
  type        = list(string)
  default     = []
}

variable "ebs_endpoint_private_dns_enabled" {
  description = "Whether or not to associate a private hosted zone with the specified VPC for EBS endpoint"
  type        = bool
  default     = false
}

variable "enable_datasync_endpoint" {
  description = "Should be true if you want to provision an Data Sync endpoint to the VPC"
  type        = bool
  default     = false
}

variable "datasync_endpoint_security_group_ids" {
  description = "The ID of one or more security groups to associate with the network interface for Data Sync endpoint"
  type        = list(string)
  default     = []
}

variable "datasync_endpoint_subnet_ids" {
  description = "The ID of one or more subnets in which to create a network interface for Data Sync endpoint. Only a single subnet within an AZ is supported. Ifomitted, private subnets will be used."
  type        = list(string)
  default     = []
}

variable "datasync_endpoint_private_dns_enabled" {
  description = "Whether or not to associate a private hosted zone with the specified VPC for Data Sync endpoint"
  type        = bool
  default     = false
}

variable "enable_elastic_inference_runtime_endpoint" {
  description = "Should be true if you want to provision an Elastic Inference Runtime endpoint to the VPC"
  type        = bool
  default     = false
}

variable "elastic_inference_runtime_endpoint_security_group_ids" {
  description = "The ID of one or more security groups to associate with the network interface for Elastic Inference Runtime endpoint"
  type        = list(string)
  default     = []
}

variable "elastic_inference_runtime_endpoint_subnet_ids" {
  description = "The ID of one or more subnets in which to create a network interface for Elastic Inference Runtime endpoint. Only a single subnet within an AZ is supported. Ifomitted, private subnets will be used."
  type        = list(string)
  default     = []
}

variable "elastic_inference_runtime_endpoint_private_dns_enabled" {
  description = "Whether or not to associate a private hosted zone with the specified VPC for Elastic Inference Runtime endpoint"
  type        = bool
  default     = false
}

variable "enable_sms_endpoint" {
  description = "Should be true if you want to provision an SMS endpoint to the VPC"
  type        = bool
  default     = false
}

variable "sms_endpoint_security_group_ids" {
  description = "The ID of one or more security groups to associate with the network interface for SMS endpoint"
  type        = list(string)
  default     = []
}

variable "sms_endpoint_subnet_ids" {
  description = "The ID of one or more subnets in which to create a network interface for SMS endpoint. Only a single subnet within an AZ is supported. Ifomitted, private subnets will be used."
  type        = list(string)
  default     = []
}

variable "sms_endpoint_private_dns_enabled" {
  description = "Whether or not to associate a private hosted zone with the specified VPC for SMS endpoint"
  type        = bool
  default     = false
}

variable "enable_emr_endpoint" {
  description = "Should be true if you want to provision an EMR endpoint to the VPC"
  type        = bool
  default     = false
}

variable "emr_endpoint_security_group_ids" {
  description = "The ID of one or more security groups to associate with the network interface for EMR endpoint"
  type        = list(string)
  default     = []
}

variable "emr_endpoint_subnet_ids" {
  description = "The ID of one or more subnets in which to create a network interface for EMR endpoint. Only a single subnet within an AZ is supported. Ifomitted, private subnets will be used."
  type        = list(string)
  default     = []
}

variable "emr_endpoint_policy" {
  description = "A policy to attach to the endpoint that controls access to the service. Defaults to full access"
  type        = string
  default     = null
}

variable "emr_endpoint_private_dns_enabled" {
  description = "Whether or not to associate a private hosted zone with the specified VPC for EMR endpoint"
  type        = bool
  default     = false
}

variable "enable_qldb_session_endpoint" {
  description = "Should be true if you want to provision an QLDB Session endpoint to the VPC"
  type        = bool
  default     = false
}

variable "qldb_session_endpoint_security_group_ids" {
  description = "The ID of one or more security groups to associate with the network interface for QLDB Session endpoint"
  type        = list(string)
  default     = []
}

variable "qldb_session_endpoint_subnet_ids" {
  description = "The ID of one or more subnets in which to create a network interface for QLDB Session endpoint. Only a single subnet within an AZ is supported. Ifomitted, private subnets will be used."
  type        = list(string)
  default     = []
}

variable "qldb_session_endpoint_private_dns_enabled" {
  description = "Whether or not to associate a private hosted zone with the specified VPC for QLDB Session endpoint"
  type        = bool
  default     = false
}

variable "enable_elasticbeanstalk_endpoint" {
  description = "Should be true if you want to provision a Elastic Beanstalk endpoint to the VPC"
  type        = bool
  default     = false
}

variable "elasticbeanstalk_endpoint_security_group_ids" {
  description = "The ID of one or more security groups to associate with the network interface for Elastic Beanstalk endpoint"
  type        = list(string)
  default     = []
}

variable "elasticbeanstalk_endpoint_subnet_ids" {
  description = "The ID of one or more subnets in which to create a network interface for Elastic Beanstalk endpoint. Only a single subnet within an AZ is supported. If omitted, private subnets will be used."
  type        = list(string)
  default     = []
}

variable "elasticbeanstalk_endpoint_policy" {
  description = "A policy to attach to the endpoint that controls access to the service. Defaults to full access"
  type        = string
  default     = null
}

variable "elasticbeanstalk_endpoint_private_dns_enabled" {
  description = "Whether or not to associate a private hosted zone with the specified VPC for Elastic Beanstalk endpoint"
  type        = bool
  default     = false
}

variable "enable_elasticbeanstalk_health_endpoint" {
  description = "Should be true if you want to provision a Elastic Beanstalk Health endpoint to the VPC"
  type        = bool
  default     = false
}

variable "elasticbeanstalk_health_endpoint_security_group_ids" {
  description = "The ID of one or more security groups to associate with the network interface for Elastic Beanstalk Health endpoint"
  type        = list(string)
  default     = []
}

variable "elasticbeanstalk_health_endpoint_subnet_ids" {
  description = "The ID of one or more subnets in which to create a network interface for Elastic Beanstalk Health endpoint. Only a single subnet within an AZ is supported. If omitted, private subnets will be used."
  type        = list(string)
  default     = []
}

variable "elasticbeanstalk_health_endpoint_private_dns_enabled" {
  description = "Whether or not to associate a private hosted zone with the specified VPC for Elastic Beanstalk Health endpoint"
  type        = bool
  default     = false
}

variable "enable_states_endpoint" {
  description = "Should be true if you want to provision a Step Function endpoint to the VPC"
  type        = bool
  default     = false
}

variable "states_endpoint_security_group_ids" {
  description = "The ID of one or more security groups to associate with the network interface for Step Function endpoint"
  type        = list(string)
  default     = []
}

variable "states_endpoint_subnet_ids" {
  description = "The ID of one or more subnets in which to create a network interface for Step Function endpoint. Only a single subnet within an AZ is supported. If omitted, private subnets will be used."
  type        = list(string)
  default     = []
}

variable "states_endpoint_policy" {
  description = "A policy to attach to the endpoint that controls access to the service. Defaults to full access"
  type        = string
  default     = null
}

variable "states_endpoint_private_dns_enabled" {
  description = "Whether or not to associate a private hosted zone with the specified VPC for Step Function endpoint"
  type        = bool
  default     = false
}

variable "enable_rds_endpoint" {
  description = "Should be true if you want to provision an RDS endpoint to the VPC"
  type        = bool
  default     = false
}

variable "rds_endpoint_security_group_ids" {
  description = "The ID of one or more security groups to associate with the network interface for RDS endpoint"
  type        = list(string)
  default     = []
}

variable "rds_endpoint_subnet_ids" {
  description = "The ID of one or more subnets in which to create a network interface for RDS endpoint. Only a single subnet within an AZ is supported. If omitted, private subnets will be used."
  type        = list(string)
  default     = []
}

variable "rds_endpoint_private_dns_enabled" {
  description = "Whether or not to associate a private hosted zone with the specified VPC for RDS endpoint"
  type        = bool
  default     = false
}

variable "enable_codedeploy_endpoint" {
  description = "Should be true if you want to provision an CodeDeploy endpoint to the VPC"
  type        = bool
  default     = false
}

variable "codedeploy_endpoint_security_group_ids" {
  description = "The ID of one or more security groups to associate with the network interface for CodeDeploy endpoint"
  type        = list(string)
  default     = []
}

variable "codedeploy_endpoint_subnet_ids" {
  description = "The ID of one or more subnets in which to create a network interface for CodeDeploy endpoint. Only a single subnet within an AZ is supported. If omitted, private subnets will be used."
  type        = list(string)
  default     = []
}

variable "codedeploy_endpoint_private_dns_enabled" {
  description = "Whether or not to associate a private hosted zone with the specified VPC for CodeDeploy endpoint"
  type        = bool
  default     = false
}

variable "enable_codedeploy_commands_secure_endpoint" {
  description = "Should be true if you want to provision an CodeDeploy Commands Secure endpoint to the VPC"
  type        = bool
  default     = false
}

variable "codedeploy_commands_secure_endpoint_security_group_ids" {
  description = "The ID of one or more security groups to associate with the network interface for CodeDeploy Commands Secure endpoint"
  type        = list(string)
  default     = []
}

variable "codedeploy_commands_secure_endpoint_subnet_ids" {
  description = "The ID of one or more subnets in which to create a network interface for CodeDeploy Commands Secure endpoint. Only a single subnet within an AZ is supported. If omitted, private subnets will be used."
  type        = list(string)
  default     = []
}

variable "codedeploy_commands_secure_endpoint_private_dns_enabled" {
  description = "Whether or not to associate a private hosted zone with the specified VPC for CodeDeploy Commands Secure endpoint"
  type        = bool
  default     = false
}

variable "enable_acm_pca_endpoint" {
  description = "Should be true if you want to provision an ACM PCA endpoint to the VPC"
  type        = bool
  default     = false
}

variable "acm_pca_endpoint_security_group_ids" {
  description = "The ID of one or more security groups to associate with the network interface for ACM PCA endpoint"
  type        = list(string)
  default     = []
}

variable "acm_pca_endpoint_subnet_ids" {
  description = "The ID of one or more subnets in which to create a network interface for ACM PCA endpoint. Only a single subnet within an AZ is supported. If omitted, private subnets will be used."
  type        = list(string)
  default     = []
}

variable "acm_pca_endpoint_policy" {
  description = "A policy to attach to the endpoint that controls access to the service. Defaults to full access"
  type        = string
  default     = null
}

variable "acm_pca_endpoint_private_dns_enabled" {
  description = "Whether or not to associate a private hosted zone with the specified VPC for ACM PCA endpoint"
  type        = bool
  default     = false
}

variable "enable_dms_endpoint" {
  description = "Should be true if you want to provision a DMS endpoint to the VPC"
  type        = bool
  default     = false
}

variable "dms_endpoint_security_group_ids" {
  description = "The ID of one or more security groups to associate with the network interface for DMS endpoint"
  type        = list(string)
  default     = []
}

variable "dms_endpoint_subnet_ids" {
  description = "The ID of one or more subnets in which to create a network interface for DMS endpoint. Only a single subnet within an AZ is supported. If omitted, private subnets will be used."
  type        = list(string)
  default     = []
}

variable "dms_endpoint_private_dns_enabled" {
  description = "Whether or not to associate a private hosted zone with the specified VPC for DMS endpoint"
  type        = bool
  default     = false
}

variable "map_public_ip_on_launch" {
  description = "Should be false if you do not want to auto-assign public IP on launch"
  type        = bool
  default     = true
}

variable "customer_gateways" {
  description = "Maps of Customer Gateway's attributes (BGP ASN and Gateway's Internet-routable external IP address)"
  type        = map(map(any))
  default     = {}
}

variable "enable_vpn_gateway" {
  description = "Should be true if you want to create a new VPN Gateway resource and attach it to the VPC"
  type        = bool
  default     = false
}

variable "vpn_gateway_id" {
  description = "ID of VPN Gateway to attach to the VPC"
  type        = string
  default     = ""
}

variable "amazon_side_asn" {
  description = "The Autonomous System Number (ASN) for the Amazon side of the gateway. By default the virtual private gateway is created with the current default Amazon ASN."
  type        = string
  default     = "64512"
}

variable "vpn_gateway_az" {
  description = "The Availability Zone for the VPN Gateway"
  type        = string
  default     = null
}

variable "propagate_intra_route_tables_vgw" {
  description = "Should be true if you want route table propagation"
  type        = bool
  default     = false
}

variable "propagate_private_route_tables_vgw" {
  description = "Should be true if you want route table propagation"
  type        = bool
  default     = false
}

variable "propagate_public_route_tables_vgw" {
  description = "Should be true if you want route table propagation"
  type        = bool
  default     = false
}

variable "manage_default_route_table" {
  description = "Should be true to manage default route table"
  type        = bool
  default     = false
}

variable "default_route_table_propagating_vgws" {
  description = "List of virtual gateways for propagation"
  type        = list(string)
  default     = []
}

variable "default_route_table_routes" {
  description = "Configuration block of routes. See https://registry.terraform.io/providers/hashicorp/aws/latest/docs/resources/default_route_table#route"
  type        = list(map(string))
  default     = []
}

variable "default_route_table_tags" {
  description = "Additional tags for the default route table"
  type        = map(string)
  default     = {}
}

variable "tags" {
  description = "A map of tags to add to all resources"
  type        = map(string)
  default     = {}
}

variable "vpc_tags" {
  description = "Additional tags for the VPC"
  type        = map(string)
  default     = {}
}

variable "igw_tags" {
  description = "Additional tags for the internet gateway"
  type        = map(string)
  default     = {}
}

variable "public_subnet_tags" {
  description = "Additional tags for the public subnets"
  type        = map(string)
  default     = {}
}

variable "private_subnet_tags" {
  description = "Additional tags for the private subnets"
  type        = map(string)
  default     = {}
}

variable "public_route_table_tags" {
  description = "Additional tags for the public route tables"
  type        = map(string)
  default     = {}
}

variable "private_route_table_tags" {
  description = "Additional tags for the private route tables"
  type        = map(string)
  default     = {}
}

variable "database_route_table_tags" {
  description = "Additional tags for the database route tables"
  type        = map(string)
  default     = {}
}

variable "redshift_route_table_tags" {
  description = "Additional tags for the redshift route tables"
  type        = map(string)
  default     = {}
}

variable "elasticache_route_table_tags" {
  description = "Additional tags for the elasticache route tables"
  type        = map(string)
  default     = {}
}

variable "intra_route_table_tags" {
  description = "Additional tags for the intra route tables"
  type        = map(string)
  default     = {}
}

variable "database_subnet_tags" {
  description = "Additional tags for the database subnets"
  type        = map(string)
  default     = {}
}

variable "database_subnet_group_tags" {
  description = "Additional tags for the database subnet group"
  type        = map(string)
  default     = {}
}

variable "redshift_subnet_tags" {
  description = "Additional tags for the redshift subnets"
  type        = map(string)
  default     = {}
}

variable "redshift_subnet_group_tags" {
  description = "Additional tags for the redshift subnet group"
  type        = map(string)
  default     = {}
}

variable "elasticache_subnet_tags" {
  description = "Additional tags for the elasticache subnets"
  type        = map(string)
  default     = {}
}

variable "intra_subnet_tags" {
  description = "Additional tags for the intra subnets"
  type        = map(string)
  default     = {}
}

variable "public_acl_tags" {
  description = "Additional tags for the public subnets network ACL"
  type        = map(string)
  default     = {}
}

variable "private_acl_tags" {
  description = "Additional tags for the private subnets network ACL"
  type        = map(string)
  default     = {}
}

variable "intra_acl_tags" {
  description = "Additional tags for the intra subnets network ACL"
  type        = map(string)
  default     = {}
}

variable "database_acl_tags" {
  description = "Additional tags for the database subnets network ACL"
  type        = map(string)
  default     = {}
}

variable "redshift_acl_tags" {
  description = "Additional tags for the redshift subnets network ACL"
  type        = map(string)
  default     = {}
}

variable "elasticache_acl_tags" {
  description = "Additional tags for the elasticache subnets network ACL"
  type        = map(string)
  default     = {}
}

variable "dhcp_options_tags" {
  description = "Additional tags for the DHCP option set (requires enable_dhcp_options set to true)"
  type        = map(string)
  default     = {}
}

variable "nat_gateway_tags" {
  description = "Additional tags for the NAT gateways"
  type        = map(string)
  default     = {}
}

variable "nat_eip_tags" {
  description = "Additional tags for the NAT EIP"
  type        = map(string)
  default     = {}
}

variable "customer_gateway_tags" {
  description = "Additional tags for the Customer Gateway"
  type        = map(string)
  default     = {}
}

variable "vpn_gateway_tags" {
  description = "Additional tags for the VPN gateway"
  type        = map(string)
  default     = {}
}

variable "vpc_endpoint_tags" {
  description = "Additional tags for the VPC Endpoints"
  type        = map(string)
  default     = {}
}

variable "vpc_flow_log_tags" {
  description = "Additional tags for the VPC Flow Logs"
  type        = map(string)
  default     = {}
}

variable "vpc_flow_log_permissions_boundary" {
  description = "The ARN of the Permissions Boundary for the VPC Flow Log IAM Role"
  type        = string
  default     = null
}

variable "enable_dhcp_options" {
  description = "Should be true if you want to specify a DHCP options set with a custom domain name, DNS servers, NTP servers, netbios servers, and/or netbios server type"
  type        = bool
  default     = false
}

variable "dhcp_options_domain_name" {
  description = "Specifies DNS name for DHCP options set (requires enable_dhcp_options set to true)"
  type        = string
  default     = ""
}

variable "dhcp_options_domain_name_servers" {
  description = "Specify a list of DNS server addresses for DHCP options set, default to AWS provided (requires enable_dhcp_options set to true)"
  type        = list(string)
  default     = ["AmazonProvidedDNS"]
}

variable "dhcp_options_ntp_servers" {
  description = "Specify a list of NTP servers for DHCP options set (requires enable_dhcp_options set to true)"
  type        = list(string)
  default     = []
}

variable "dhcp_options_netbios_name_servers" {
  description = "Specify a list of netbios servers for DHCP options set (requires enable_dhcp_options set to true)"
  type        = list(string)
  default     = []
}

variable "dhcp_options_netbios_node_type" {
  description = "Specify netbios node_type for DHCP options set (requires enable_dhcp_options set to true)"
  type        = string
  default     = ""
}

variable "manage_default_vpc" {
  description = "Should be true to adopt and manage Default VPC"
  type        = bool
  default     = false
}

variable "default_vpc_name" {
  description = "Name to be used on the Default VPC"
  type        = string
  default     = ""
}

variable "default_vpc_enable_dns_support" {
  description = "Should be true to enable DNS support in the Default VPC"
  type        = bool
  default     = true
}

variable "default_vpc_enable_dns_hostnames" {
  description = "Should be true to enable DNS hostnames in the Default VPC"
  type        = bool
  default     = false
}

variable "default_vpc_enable_classiclink" {
  description = "Should be true to enable ClassicLink in the Default VPC"
  type        = bool
  default     = false
}

variable "default_vpc_tags" {
  description = "Additional tags for the Default VPC"
  type        = map(string)
  default     = {}
}

variable "manage_default_network_acl" {
  description = "Should be true to adopt and manage Default Network ACL"
  type        = bool
  default     = false
}

variable "default_network_acl_name" {
  description = "Name to be used on the Default Network ACL"
  type        = string
  default     = ""
}

variable "default_network_acl_tags" {
  description = "Additional tags for the Default Network ACL"
  type        = map(string)
  default     = {}
}

variable "public_dedicated_network_acl" {
  description = "Whether to use dedicated network ACL (not default) and custom rules for public subnets"
  type        = bool
  default     = false
}

variable "private_dedicated_network_acl" {
  description = "Whether to use dedicated network ACL (not default) and custom rules for private subnets"
  type        = bool
  default     = false
}

variable "intra_dedicated_network_acl" {
  description = "Whether to use dedicated network ACL (not default) and custom rules for intra subnets"
  type        = bool
  default     = false
}

variable "database_dedicated_network_acl" {
  description = "Whether to use dedicated network ACL (not default) and custom rules for database subnets"
  type        = bool
  default     = false
}

variable "redshift_dedicated_network_acl" {
  description = "Whether to use dedicated network ACL (not default) and custom rules for redshift subnets"
  type        = bool
  default     = false
}

variable "elasticache_dedicated_network_acl" {
  description = "Whether to use dedicated network ACL (not default) and custom rules for elasticache subnets"
  type        = bool
  default     = false
}

variable "default_network_acl_ingress" {
  description = "List of maps of ingress rules to set on the Default Network ACL"
  type        = list(map(string))

  default = [
    {
      rule_no    = 100
      action     = "allow"
      from_port  = 0
      to_port    = 0
      protocol   = "-1"
      cidr_block = "0.0.0.0/0"
    },
    {
      rule_no         = 101
      action          = "allow"
      from_port       = 0
      to_port         = 0
      protocol        = "-1"
      ipv6_cidr_block = "::/0"
    },
  ]
}

variable "default_network_acl_egress" {
  description = "List of maps of egress rules to set on the Default Network ACL"
  type        = list(map(string))

  default = [
    {
      rule_no    = 100
      action     = "allow"
      from_port  = 0
      to_port    = 0
      protocol   = "-1"
      cidr_block = "0.0.0.0/0"
    },
    {
      rule_no         = 101
      action          = "allow"
      from_port       = 0
      to_port         = 0
      protocol        = "-1"
      ipv6_cidr_block = "::/0"
    },
  ]
}

variable "public_inbound_acl_rules" {
  description = "Public subnets inbound network ACLs"
  type        = list(map(string))

  default = [
    {
      rule_number = 100
      rule_action = "allow"
      from_port   = 0
      to_port     = 0
      protocol    = "-1"
      cidr_block  = "0.0.0.0/0"
    },
  ]
}

variable "public_outbound_acl_rules" {
  description = "Public subnets outbound network ACLs"
  type        = list(map(string))

  default = [
    {
      rule_number = 100
      rule_action = "allow"
      from_port   = 0
      to_port     = 0
      protocol    = "-1"
      cidr_block  = "0.0.0.0/0"
    },
  ]
}

variable "private_inbound_acl_rules" {
  description = "Private subnets inbound network ACLs"
  type        = list(map(string))

  default = [
    {
      rule_number = 100
      rule_action = "allow"
      from_port   = 0
      to_port     = 0
      protocol    = "-1"
      cidr_block  = "0.0.0.0/0"
    },
  ]
}

variable "private_outbound_acl_rules" {
  description = "Private subnets outbound network ACLs"
  type        = list(map(string))

  default = [
    {
      rule_number = 100
      rule_action = "allow"
      from_port   = 0
      to_port     = 0
      protocol    = "-1"
      cidr_block  = "0.0.0.0/0"
    },
  ]
}

variable "intra_inbound_acl_rules" {
  description = "Intra subnets inbound network ACLs"
  type        = list(map(string))

  default = [
    {
      rule_number = 100
      rule_action = "allow"
      from_port   = 0
      to_port     = 0
      protocol    = "-1"
      cidr_block  = "0.0.0.0/0"
    },
  ]
}

variable "intra_outbound_acl_rules" {
  description = "Intra subnets outbound network ACLs"
  type        = list(map(string))

  default = [
    {
      rule_number = 100
      rule_action = "allow"
      from_port   = 0
      to_port     = 0
      protocol    = "-1"
      cidr_block  = "0.0.0.0/0"
    },
  ]
}

variable "database_inbound_acl_rules" {
  description = "Database subnets inbound network ACL rules"
  type        = list(map(string))

  default = [
    {
      rule_number = 100
      rule_action = "allow"
      from_port   = 0
      to_port     = 0
      protocol    = "-1"
      cidr_block  = "0.0.0.0/0"
    },
  ]
}

variable "database_outbound_acl_rules" {
  description = "Database subnets outbound network ACL rules"
  type        = list(map(string))

  default = [
    {
      rule_number = 100
      rule_action = "allow"
      from_port   = 0
      to_port     = 0
      protocol    = "-1"
      cidr_block  = "0.0.0.0/0"
    },
  ]
}

variable "redshift_inbound_acl_rules" {
  description = "Redshift subnets inbound network ACL rules"
  type        = list(map(string))

  default = [
    {
      rule_number = 100
      rule_action = "allow"
      from_port   = 0
      to_port     = 0
      protocol    = "-1"
      cidr_block  = "0.0.0.0/0"
    },
  ]
}

variable "redshift_outbound_acl_rules" {
  description = "Redshift subnets outbound network ACL rules"
  type        = list(map(string))

  default = [
    {
      rule_number = 100
      rule_action = "allow"
      from_port   = 0
      to_port     = 0
      protocol    = "-1"
      cidr_block  = "0.0.0.0/0"
    },
  ]
}

variable "elasticache_inbound_acl_rules" {
  description = "Elasticache subnets inbound network ACL rules"
  type        = list(map(string))

  default = [
    {
      rule_number = 100
      rule_action = "allow"
      from_port   = 0
      to_port     = 0
      protocol    = "-1"
      cidr_block  = "0.0.0.0/0"
    },
  ]
}

variable "elasticache_outbound_acl_rules" {
  description = "Elasticache subnets outbound network ACL rules"
  type        = list(map(string))

  default = [
    {
      rule_number = 100
      rule_action = "allow"
      from_port   = 0
      to_port     = 0
      protocol    = "-1"
      cidr_block  = "0.0.0.0/0"
    },
  ]
}

variable "manage_default_security_group" {
  description = "Should be true to adopt and manage default security group"
  type        = bool
  default     = false
}

variable "default_security_group_name" {
  description = "Name to be used on the default security group"
  type        = string
  default     = "default"
}

variable "default_security_group_ingress" {
  description = "List of maps of ingress rules to set on the default security group"
  type        = list(map(string))
  default     = null
}

variable "enable_flow_log" {
  description = "Whether or not to enable VPC Flow Logs"
  type        = bool
  default     = false
}

variable "default_security_group_egress" {
  description = "List of maps of egress rules to set on the default security group"
  type        = list(map(string))
  default     = null
}

variable "default_security_group_tags" {
  description = "Additional tags for the default security group"
  type        = map(string)
  default     = {}
}

variable "create_flow_log_cloudwatch_log_group" {
  description = "Whether to create CloudWatch log group for VPC Flow Logs"
  type        = bool
  default     = false
}

variable "create_flow_log_cloudwatch_iam_role" {
  description = "Whether to create IAM role for VPC Flow Logs"
  type        = bool
  default     = false
}

variable "flow_log_traffic_type" {
  description = "The type of traffic to capture. Valid values: ACCEPT, REJECT, ALL."
  type        = string
  default     = "ALL"
}

variable "flow_log_destination_type" {
  description = "Type of flow log destination. Can be s3 or cloud-watch-logs."
  type        = string
  default     = "cloud-watch-logs"
}

variable "flow_log_log_format" {
  description = "The fields to include in the flow log record, in the order in which they should appear."
  type        = string
  default     = null
}

variable "flow_log_destination_arn" {
  description = "The ARN of the CloudWatch log group or S3 bucket where VPC Flow Logs will be pushed. If this ARN is a S3 bucket the appropriate permissions need to be set on that bucket's policy. When create_flow_log_cloudwatch_log_group is set to false this argument must be provided."
  type        = string
  default     = ""
}

variable "flow_log_cloudwatch_iam_role_arn" {
  description = "The ARN for the IAM role that's used to post flow logs to a CloudWatch Logs log group. When flow_log_destination_arn is set to ARN of Cloudwatch Logs, this argument needs to be provided."
  type        = string
  default     = ""
}

variable "flow_log_cloudwatch_log_group_name_prefix" {
  description = "Specifies the name prefix of CloudWatch Log Group for VPC flow logs."
  type        = string
  default     = "/aws/vpc-flow-log/"
}

variable "flow_log_cloudwatch_log_group_retention_in_days" {
  description = "Specifies the number of days you want to retain log events in the specified log group for VPC flow logs."
  type        = number
  default     = null
}

variable "flow_log_cloudwatch_log_group_kms_key_id" {
  description = "The ARN of the KMS Key to use when encrypting log data for VPC flow logs."
  type        = string
  default     = null
}

variable "flow_log_max_aggregation_interval" {
  description = "The maximum interval of time during which a flow of packets is captured and aggregated into a flow log record. Valid Values: `60` seconds or `600` seconds."
  type        = number
  default     = 600
}

variable "create_igw" {
  description = "Controls if an Internet Gateway is created for public subnets and the related routes that connect them."
  type        = bool
  default     = true
}

variable "create_egress_only_igw" {
  description = "Controls if an Egress Only Internet Gateway is created and its related routes."
  type        = bool
  default     = true
}


locals {
  max_subnet_length = max(
    length(var.private_subnets),
    length(var.elasticache_subnets),
    length(var.database_subnets),
    length(var.redshift_subnets),
  )
  nat_gateway_count = var.single_nat_gateway ? 1 : var.one_nat_gateway_per_az ? length(var.azs) : local.max_subnet_length

  # Use `local.vpc_id` to give a hint to Terraform that subnets should be deleted before secondary CIDR blocks can be free!
  vpc_id = element(
    concat(
      aws_vpc_ipv4_cidr_block_association.this.*.vpc_id,
      aws_vpc.this.*.id,
      [""],
    ),
    0,
  )

  vpce_tags = merge(
    var.tags,
    var.vpc_endpoint_tags,
  )
}

######
# VPC
######
resource "aws_vpc" "this" {
  count = var.create_vpc ? 1 : 0

  cidr_block                       = var.cidr
  instance_tenancy                 = var.instance_tenancy
  enable_dns_hostnames             = var.enable_dns_hostnames
  enable_dns_support               = var.enable_dns_support
  enable_classiclink               = var.enable_classiclink
  enable_classiclink_dns_support   = var.enable_classiclink_dns_support
  assign_generated_ipv6_cidr_block = var.enable_ipv6

  tags = merge(
    {
      "Name" = format("%s", var.name)
    },
    var.tags,
    var.vpc_tags,
  )
}

resource "aws_vpc_ipv4_cidr_block_association" "this" {
  count = var.create_vpc && length(var.secondary_cidr_blocks) > 0 ? length(var.secondary_cidr_blocks) : 0

  vpc_id = aws_vpc.this[0].id

  cidr_block = element(var.secondary_cidr_blocks, count.index)
}

resource "aws_default_security_group" "this" {
  count = var.create_vpc && var.manage_default_security_group ? 1 : 0

  vpc_id = aws_vpc.this[0].id

  dynamic "ingress" {
    for_each = var.default_security_group_ingress
    content {
      self             = lookup(ingress.value, "self", null)
      cidr_blocks      = compact(split(",", lookup(ingress.value, "cidr_blocks", "")))
      ipv6_cidr_blocks = compact(split(",", lookup(ingress.value, "ipv6_cidr_blocks", "")))
      prefix_list_ids  = compact(split(",", lookup(ingress.value, "prefix_list_ids", "")))
      security_groups  = compact(split(",", lookup(ingress.value, "security_groups", "")))
      description      = lookup(ingress.value, "description", null)
      from_port        = lookup(ingress.value, "from_port", 0)
      to_port          = lookup(ingress.value, "to_port", 0)
      protocol         = lookup(ingress.value, "protocol", "-1")
    }
  }

  dynamic "egress" {
    for_each = var.default_security_group_egress
    content {
      self             = lookup(egress.value, "self", null)
      cidr_blocks      = compact(split(",", lookup(egress.value, "cidr_blocks", "")))
      ipv6_cidr_blocks = compact(split(",", lookup(egress.value, "ipv6_cidr_blocks", "")))
      prefix_list_ids  = compact(split(",", lookup(egress.value, "prefix_list_ids", "")))
      security_groups  = compact(split(",", lookup(egress.value, "security_groups", "")))
      description      = lookup(egress.value, "description", null)
      from_port        = lookup(egress.value, "from_port", 0)
      to_port          = lookup(egress.value, "to_port", 0)
      protocol         = lookup(egress.value, "protocol", "-1")
    }
  }

  tags = merge(
    {
      "Name" = format("%s", var.default_security_group_name)
    },
    var.tags,
    var.default_security_group_tags,
  )
}

###################
# DHCP Options Set
###################
resource "aws_vpc_dhcp_options" "this" {
  count = var.create_vpc && var.enable_dhcp_options ? 1 : 0

  domain_name          = var.dhcp_options_domain_name
  domain_name_servers  = var.dhcp_options_domain_name_servers
  ntp_servers          = var.dhcp_options_ntp_servers
  netbios_name_servers = var.dhcp_options_netbios_name_servers
  netbios_node_type    = var.dhcp_options_netbios_node_type

  tags = merge(
    {
      "Name" = format("%s", var.name)
    },
    var.tags,
    var.dhcp_options_tags,
  )
}

###############################
# DHCP Options Set Association
###############################
resource "aws_vpc_dhcp_options_association" "this" {
  count = var.create_vpc && var.enable_dhcp_options ? 1 : 0

  vpc_id          = local.vpc_id
  dhcp_options_id = aws_vpc_dhcp_options.this[0].id
}

###################
# Internet Gateway
###################
resource "aws_internet_gateway" "this" {
  count = var.create_vpc && var.create_igw && length(var.public_subnets) > 0 ? 1 : 0

  vpc_id = local.vpc_id

  tags = merge(
    {
      "Name" = format("%s", var.name)
    },
    var.tags,
    var.igw_tags,
  )
}

resource "aws_egress_only_internet_gateway" "this" {
  count = var.create_vpc && var.create_egress_only_igw && var.enable_ipv6 && local.max_subnet_length > 0 ? 1 : 0

  vpc_id = local.vpc_id

  tags = merge(
    {
      "Name" = format("%s", var.name)
    },
    var.tags,
    var.igw_tags,
  )
}

###############
# Default route
###############

resource "aws_default_route_table" "default" {
  count = var.create_vpc && var.manage_default_route_table ? 1 : 0

  default_route_table_id = aws_vpc.this[0].default_route_table_id
  propagating_vgws       = var.default_route_table_propagating_vgws

  dynamic "route" {
    for_each = var.default_route_table_routes
    content {
      # One of the following destinations must be provided
      cidr_block      = route.value.cidr_block
      ipv6_cidr_block = lookup(route.value, "ipv6_cidr_block", null)

      # One of the following targets must be provided
      egress_only_gateway_id = lookup(route.value, "egress_only_gateway_id", null)
      gateway_id             = lookup(route.value, "gateway_id", null)
      instance_id            = lookup(route.value, "instance_id", null)
      nat_gateway_id         = lookup(route.value, "nat_gateway_id", null)
      network_interface_id   = lookup(route.value, "network_interface_id", null)
      transit_gateway_id     = lookup(route.value, "transit_gateway_id", null)
      # `vpc_endpoint_id` was recently added in v3.15.0
      # vpc_endpoint_id           = lookup(route.value, "vpc_endpoint_id", null)
      vpc_peering_connection_id = lookup(route.value, "vpc_peering_connection_id", null)
    }
  }

  tags = merge(
    { "Name" = var.name },
    var.tags,
    var.default_route_table_tags,
  )
}

################
# Publiс routes
################
resource "aws_route_table" "public" {
  count = var.create_vpc && length(var.public_subnets) > 0 ? 1 : 0

  vpc_id = local.vpc_id

  tags = merge(
    {
      "Name" = format("%s-${var.public_subnet_suffix}", var.name)
    },
    var.tags,
    var.public_route_table_tags,
  )
}

resource "aws_route" "public_internet_gateway" {
  count = var.create_vpc && var.create_igw && length(var.public_subnets) > 0 ? 1 : 0

  route_table_id         = aws_route_table.public[0].id
  destination_cidr_block = "0.0.0.0/0"
  gateway_id             = aws_internet_gateway.this[0].id

  timeouts {
    create = "5m"
  }
}

resource "aws_route" "public_internet_gateway_ipv6" {
  count = var.create_vpc && var.create_igw && var.enable_ipv6 && length(var.public_subnets) > 0 ? 1 : 0

  route_table_id              = aws_route_table.public[0].id
  destination_ipv6_cidr_block = "::/0"
  gateway_id                  = aws_internet_gateway.this[0].id
}

#################
# Private routes
# There are as many routing tables as the number of NAT gateways
#################
resource "aws_route_table" "private" {
  count = var.create_vpc && local.max_subnet_length > 0 ? local.nat_gateway_count : 0

  vpc_id = local.vpc_id

  tags = merge(
    {
      "Name" = var.single_nat_gateway ? "${var.name}-${var.private_subnet_suffix}" : format(
        "%s-${var.private_subnet_suffix}-%s",
        var.name,
        element(var.azs, count.index),
      )
    },
    var.tags,
    var.private_route_table_tags,
  )
}

#################
# Database routes
#################
resource "aws_route_table" "database" {
  count = var.create_vpc && var.create_database_subnet_route_table && length(var.database_subnets) > 0 ? var.single_nat_gateway || var.create_database_internet_gateway_route ? 1 : length(var.database_subnets) : 0

  vpc_id = local.vpc_id

  tags = merge(
    {
      "Name" = var.single_nat_gateway || var.create_database_internet_gateway_route ? "${var.name}-${var.database_subnet_suffix}" : format(
        "%s-${var.database_subnet_suffix}-%s",
        var.name,
        element(var.azs, count.index),
      )
    },
    var.tags,
    var.database_route_table_tags,
  )
}

resource "aws_route" "database_internet_gateway" {
  count = var.create_vpc && var.create_igw && var.create_database_subnet_route_table && length(var.database_subnets) > 0 && var.create_database_internet_gateway_route && false == var.create_database_nat_gateway_route ? 1 : 0

  route_table_id         = aws_route_table.database[0].id
  destination_cidr_block = "0.0.0.0/0"
  gateway_id             = aws_internet_gateway.this[0].id

  timeouts {
    create = "5m"
  }
}

resource "aws_route" "database_nat_gateway" {
  count = var.create_vpc && var.create_database_subnet_route_table && length(var.database_subnets) > 0 && false == var.create_database_internet_gateway_route && var.create_database_nat_gateway_route && var.enable_nat_gateway ? var.single_nat_gateway ? 1 : length(var.database_subnets) : 0

  route_table_id         = element(aws_route_table.database.*.id, count.index)
  destination_cidr_block = "0.0.0.0/0"
  nat_gateway_id         = element(aws_nat_gateway.this.*.id, count.index)

  timeouts {
    create = "5m"
  }
}

resource "aws_route" "database_ipv6_egress" {
  count = var.create_vpc && var.create_egress_only_igw && var.enable_ipv6 && var.create_database_subnet_route_table && length(var.database_subnets) > 0 && var.create_database_internet_gateway_route ? 1 : 0

  route_table_id              = aws_route_table.database[0].id
  destination_ipv6_cidr_block = "::/0"
  egress_only_gateway_id      = aws_egress_only_internet_gateway.this[0].id

  timeouts {
    create = "5m"
  }
}

#################
# Redshift routes
#################
resource "aws_route_table" "redshift" {
  count = var.create_vpc && var.create_redshift_subnet_route_table && length(var.redshift_subnets) > 0 ? 1 : 0

  vpc_id = local.vpc_id

  tags = merge(
    {
      "Name" = "${var.name}-${var.redshift_subnet_suffix}"
    },
    var.tags,
    var.redshift_route_table_tags,
  )
}

#################
# Elasticache routes
#################
resource "aws_route_table" "elasticache" {
  count = var.create_vpc && var.create_elasticache_subnet_route_table && length(var.elasticache_subnets) > 0 ? 1 : 0

  vpc_id = local.vpc_id

  tags = merge(
    {
      "Name" = "${var.name}-${var.elasticache_subnet_suffix}"
    },
    var.tags,
    var.elasticache_route_table_tags,
  )
}

#################
# Intra routes
#################
resource "aws_route_table" "intra" {
  count = var.create_vpc && length(var.intra_subnets) > 0 ? 1 : 0

  vpc_id = local.vpc_id

  tags = merge(
    {
      "Name" = "${var.name}-${var.intra_subnet_suffix}"
    },
    var.tags,
    var.intra_route_table_tags,
  )
}

################
# Public subnet
################
resource "aws_subnet" "public" {
  count = var.create_vpc && length(var.public_subnets) > 0 && (false == var.one_nat_gateway_per_az || length(var.public_subnets) >= length(var.azs)) ? length(var.public_subnets) : 0

  vpc_id                          = local.vpc_id
  cidr_block                      = element(concat(var.public_subnets, [""]), count.index)
  availability_zone               = length(regexall("^[a-z]{2}-", element(var.azs, count.index))) > 0 ? element(var.azs, count.index) : null
  availability_zone_id            = length(regexall("^[a-z]{2}-", element(var.azs, count.index))) == 0 ? element(var.azs, count.index) : null
  map_public_ip_on_launch         = var.map_public_ip_on_launch
  assign_ipv6_address_on_creation = var.public_subnet_assign_ipv6_address_on_creation == null ? var.assign_ipv6_address_on_creation : var.public_subnet_assign_ipv6_address_on_creation

  ipv6_cidr_block = var.enable_ipv6 && length(var.public_subnet_ipv6_prefixes) > 0 ? cidrsubnet(aws_vpc.this[0].ipv6_cidr_block, 8, var.public_subnet_ipv6_prefixes[count.index]) : null

  tags = merge(
    {
      "Name" = format(
        "%s-${var.public_subnet_suffix}-%s",
        var.name,
        element(var.azs, count.index),
      )
    },
    var.tags,
    var.public_subnet_tags,
  )
}

#################
# Private subnet
#################
resource "aws_subnet" "private" {
  count = var.create_vpc && length(var.private_subnets) > 0 ? length(var.private_subnets) : 0

  vpc_id                          = local.vpc_id
  cidr_block                      = var.private_subnets[count.index]
  availability_zone               = length(regexall("^[a-z]{2}-", element(var.azs, count.index))) > 0 ? element(var.azs, count.index) : null
  availability_zone_id            = length(regexall("^[a-z]{2}-", element(var.azs, count.index))) == 0 ? element(var.azs, count.index) : null
  assign_ipv6_address_on_creation = var.private_subnet_assign_ipv6_address_on_creation == null ? var.assign_ipv6_address_on_creation : var.private_subnet_assign_ipv6_address_on_creation

  ipv6_cidr_block = var.enable_ipv6 && length(var.private_subnet_ipv6_prefixes) > 0 ? cidrsubnet(aws_vpc.this[0].ipv6_cidr_block, 8, var.private_subnet_ipv6_prefixes[count.index]) : null

  tags = merge(
    {
      "Name" = format(
        "%s-${var.private_subnet_suffix}-%s",
        var.name,
        element(var.azs, count.index),
      )
    },
    var.tags,
    var.private_subnet_tags,
  )
}

##################
# Database subnet
##################
resource "aws_subnet" "database" {
  count = var.create_vpc && length(var.database_subnets) > 0 ? length(var.database_subnets) : 0

  vpc_id                          = local.vpc_id
  cidr_block                      = var.database_subnets[count.index]
  availability_zone               = length(regexall("^[a-z]{2}-", element(var.azs, count.index))) > 0 ? element(var.azs, count.index) : null
  availability_zone_id            = length(regexall("^[a-z]{2}-", element(var.azs, count.index))) == 0 ? element(var.azs, count.index) : null
  assign_ipv6_address_on_creation = var.database_subnet_assign_ipv6_address_on_creation == null ? var.assign_ipv6_address_on_creation : var.database_subnet_assign_ipv6_address_on_creation

  ipv6_cidr_block = var.enable_ipv6 && length(var.database_subnet_ipv6_prefixes) > 0 ? cidrsubnet(aws_vpc.this[0].ipv6_cidr_block, 8, var.database_subnet_ipv6_prefixes[count.index]) : null

  tags = merge(
    {
      "Name" = format(
        "%s-${var.database_subnet_suffix}-%s",
        var.name,
        element(var.azs, count.index),
      )
    },
    var.tags,
    var.database_subnet_tags,
  )
}

resource "aws_db_subnet_group" "database" {
  count = var.create_vpc && length(var.database_subnets) > 0 && var.create_database_subnet_group ? 1 : 0

  name        = lower(var.name)
  description = "Database subnet group for ${var.name}"
  subnet_ids  = aws_subnet.database.*.id

  tags = merge(
    {
      "Name" = format("%s", var.name)
    },
    var.tags,
    var.database_subnet_group_tags,
  )
}

##################
# Redshift subnet
##################
resource "aws_subnet" "redshift" {
  count = var.create_vpc && length(var.redshift_subnets) > 0 ? length(var.redshift_subnets) : 0

  vpc_id                          = local.vpc_id
  cidr_block                      = var.redshift_subnets[count.index]
  availability_zone               = length(regexall("^[a-z]{2}-", element(var.azs, count.index))) > 0 ? element(var.azs, count.index) : null
  availability_zone_id            = length(regexall("^[a-z]{2}-", element(var.azs, count.index))) == 0 ? element(var.azs, count.index) : null
  assign_ipv6_address_on_creation = var.redshift_subnet_assign_ipv6_address_on_creation == null ? var.assign_ipv6_address_on_creation : var.redshift_subnet_assign_ipv6_address_on_creation

  ipv6_cidr_block = var.enable_ipv6 && length(var.redshift_subnet_ipv6_prefixes) > 0 ? cidrsubnet(aws_vpc.this[0].ipv6_cidr_block, 8, var.redshift_subnet_ipv6_prefixes[count.index]) : null

  tags = merge(
    {
      "Name" = format(
        "%s-${var.redshift_subnet_suffix}-%s",
        var.name,
        element(var.azs, count.index),
      )
    },
    var.tags,
    var.redshift_subnet_tags,
  )
}

resource "aws_redshift_subnet_group" "redshift" {
  count = var.create_vpc && length(var.redshift_subnets) > 0 && var.create_redshift_subnet_group ? 1 : 0

  name        = lower(var.name)
  description = "Redshift subnet group for ${var.name}"
  subnet_ids  = aws_subnet.redshift.*.id

  tags = merge(
    {
      "Name" = format("%s", var.name)
    },
    var.tags,
    var.redshift_subnet_group_tags,
  )
}

#####################
# ElastiCache subnet
#####################
resource "aws_subnet" "elasticache" {
  count = var.create_vpc && length(var.elasticache_subnets) > 0 ? length(var.elasticache_subnets) : 0

  vpc_id                          = local.vpc_id
  cidr_block                      = var.elasticache_subnets[count.index]
  availability_zone               = length(regexall("^[a-z]{2}-", element(var.azs, count.index))) > 0 ? element(var.azs, count.index) : null
  availability_zone_id            = length(regexall("^[a-z]{2}-", element(var.azs, count.index))) == 0 ? element(var.azs, count.index) : null
  assign_ipv6_address_on_creation = var.elasticache_subnet_assign_ipv6_address_on_creation == null ? var.assign_ipv6_address_on_creation : var.elasticache_subnet_assign_ipv6_address_on_creation

  ipv6_cidr_block = var.enable_ipv6 && length(var.elasticache_subnet_ipv6_prefixes) > 0 ? cidrsubnet(aws_vpc.this[0].ipv6_cidr_block, 8, var.elasticache_subnet_ipv6_prefixes[count.index]) : null

  tags = merge(
    {
      "Name" = format(
        "%s-${var.elasticache_subnet_suffix}-%s",
        var.name,
        element(var.azs, count.index),
      )
    },
    var.tags,
    var.elasticache_subnet_tags,
  )
}

resource "aws_elasticache_subnet_group" "elasticache" {
  count = var.create_vpc && length(var.elasticache_subnets) > 0 && var.create_elasticache_subnet_group ? 1 : 0

  name        = var.name
  description = "ElastiCache subnet group for ${var.name}"
  subnet_ids  = aws_subnet.elasticache.*.id
}

#####################################################
# intra subnets - private subnet without NAT gateway
#####################################################
resource "aws_subnet" "intra" {
  count = var.create_vpc && length(var.intra_subnets) > 0 ? length(var.intra_subnets) : 0

  vpc_id                          = local.vpc_id
  cidr_block                      = var.intra_subnets[count.index]
  availability_zone               = length(regexall("^[a-z]{2}-", element(var.azs, count.index))) > 0 ? element(var.azs, count.index) : null
  availability_zone_id            = length(regexall("^[a-z]{2}-", element(var.azs, count.index))) == 0 ? element(var.azs, count.index) : null
  assign_ipv6_address_on_creation = var.intra_subnet_assign_ipv6_address_on_creation == null ? var.assign_ipv6_address_on_creation : var.intra_subnet_assign_ipv6_address_on_creation

  ipv6_cidr_block = var.enable_ipv6 && length(var.intra_subnet_ipv6_prefixes) > 0 ? cidrsubnet(aws_vpc.this[0].ipv6_cidr_block, 8, var.intra_subnet_ipv6_prefixes[count.index]) : null

  tags = merge(
    {
      "Name" = format(
        "%s-${var.intra_subnet_suffix}-%s",
        var.name,
        element(var.azs, count.index),
      )
    },
    var.tags,
    var.intra_subnet_tags,
  )
}

#######################
# Default Network ACLs
#######################
resource "aws_default_network_acl" "this" {
  count = var.create_vpc && var.manage_default_network_acl ? 1 : 0

  default_network_acl_id = element(concat(aws_vpc.this.*.default_network_acl_id, [""]), 0)

  # The value of subnet_ids should be any subnet IDs that are not set as subnet_ids
  #   for any of the non-default network ACLs
  subnet_ids = setsubtract(
    compact(flatten([
      aws_subnet.public.*.id,
      aws_subnet.private.*.id,
      aws_subnet.intra.*.id,
      aws_subnet.database.*.id,
      aws_subnet.redshift.*.id,
      aws_subnet.elasticache.*.id,
    ])),
    compact(flatten([
      aws_network_acl.public.*.subnet_ids,
      aws_network_acl.private.*.subnet_ids,
      aws_network_acl.intra.*.subnet_ids,
      aws_network_acl.database.*.subnet_ids,
      aws_network_acl.redshift.*.subnet_ids,
      aws_network_acl.elasticache.*.subnet_ids,
    ]))
  )

  dynamic "ingress" {
    for_each = var.default_network_acl_ingress
    content {
      action          = ingress.value.action
      cidr_block      = lookup(ingress.value, "cidr_block", null)
      from_port       = ingress.value.from_port
      icmp_code       = lookup(ingress.value, "icmp_code", null)
      icmp_type       = lookup(ingress.value, "icmp_type", null)
      ipv6_cidr_block = lookup(ingress.value, "ipv6_cidr_block", null)
      protocol        = ingress.value.protocol
      rule_no         = ingress.value.rule_no
      to_port         = ingress.value.to_port
    }
  }
  dynamic "egress" {
    for_each = var.default_network_acl_egress
    content {
      action          = egress.value.action
      cidr_block      = lookup(egress.value, "cidr_block", null)
      from_port       = egress.value.from_port
      icmp_code       = lookup(egress.value, "icmp_code", null)
      icmp_type       = lookup(egress.value, "icmp_type", null)
      ipv6_cidr_block = lookup(egress.value, "ipv6_cidr_block", null)
      protocol        = egress.value.protocol
      rule_no         = egress.value.rule_no
      to_port         = egress.value.to_port
    }
  }

  tags = merge(
    {
      "Name" = format("%s", var.default_network_acl_name)
    },
    var.tags,
    var.default_network_acl_tags,
  )
}

########################
# Public Network ACLs
########################
resource "aws_network_acl" "public" {
  count = var.create_vpc && var.public_dedicated_network_acl && length(var.public_subnets) > 0 ? 1 : 0

  vpc_id     = element(concat(aws_vpc.this.*.id, [""]), 0)
  subnet_ids = aws_subnet.public.*.id

  tags = merge(
    {
      "Name" = format("%s-${var.public_subnet_suffix}", var.name)
    },
    var.tags,
    var.public_acl_tags,
  )
}

resource "aws_network_acl_rule" "public_inbound" {
  count = var.create_vpc && var.public_dedicated_network_acl && length(var.public_subnets) > 0 ? length(var.public_inbound_acl_rules) : 0

  network_acl_id = aws_network_acl.public[0].id

  egress          = false
  rule_number     = var.public_inbound_acl_rules[count.index]["rule_number"]
  rule_action     = var.public_inbound_acl_rules[count.index]["rule_action"]
  from_port       = lookup(var.public_inbound_acl_rules[count.index], "from_port", null)
  to_port         = lookup(var.public_inbound_acl_rules[count.index], "to_port", null)
  icmp_code       = lookup(var.public_inbound_acl_rules[count.index], "icmp_code", null)
  icmp_type       = lookup(var.public_inbound_acl_rules[count.index], "icmp_type", null)
  protocol        = var.public_inbound_acl_rules[count.index]["protocol"]
  cidr_block      = lookup(var.public_inbound_acl_rules[count.index], "cidr_block", null)
  ipv6_cidr_block = lookup(var.public_inbound_acl_rules[count.index], "ipv6_cidr_block", null)
}

resource "aws_network_acl_rule" "public_outbound" {
  count = var.create_vpc && var.public_dedicated_network_acl && length(var.public_subnets) > 0 ? length(var.public_outbound_acl_rules) : 0

  network_acl_id = aws_network_acl.public[0].id

  egress          = true
  rule_number     = var.public_outbound_acl_rules[count.index]["rule_number"]
  rule_action     = var.public_outbound_acl_rules[count.index]["rule_action"]
  from_port       = lookup(var.public_outbound_acl_rules[count.index], "from_port", null)
  to_port         = lookup(var.public_outbound_acl_rules[count.index], "to_port", null)
  icmp_code       = lookup(var.public_outbound_acl_rules[count.index], "icmp_code", null)
  icmp_type       = lookup(var.public_outbound_acl_rules[count.index], "icmp_type", null)
  protocol        = var.public_outbound_acl_rules[count.index]["protocol"]
  cidr_block      = lookup(var.public_outbound_acl_rules[count.index], "cidr_block", null)
  ipv6_cidr_block = lookup(var.public_outbound_acl_rules[count.index], "ipv6_cidr_block", null)
}

#######################
# Private Network ACLs
#######################
resource "aws_network_acl" "private" {
  count = var.create_vpc && var.private_dedicated_network_acl && length(var.private_subnets) > 0 ? 1 : 0

  vpc_id     = element(concat(aws_vpc.this.*.id, [""]), 0)
  subnet_ids = aws_subnet.private.*.id

  tags = merge(
    {
      "Name" = format("%s-${var.private_subnet_suffix}", var.name)
    },
    var.tags,
    var.private_acl_tags,
  )
}

resource "aws_network_acl_rule" "private_inbound" {
  count = var.create_vpc && var.private_dedicated_network_acl && length(var.private_subnets) > 0 ? length(var.private_inbound_acl_rules) : 0

  network_acl_id = aws_network_acl.private[0].id

  egress          = false
  rule_number     = var.private_inbound_acl_rules[count.index]["rule_number"]
  rule_action     = var.private_inbound_acl_rules[count.index]["rule_action"]
  from_port       = lookup(var.private_inbound_acl_rules[count.index], "from_port", null)
  to_port         = lookup(var.private_inbound_acl_rules[count.index], "to_port", null)
  icmp_code       = lookup(var.private_inbound_acl_rules[count.index], "icmp_code", null)
  icmp_type       = lookup(var.private_inbound_acl_rules[count.index], "icmp_type", null)
  protocol        = var.private_inbound_acl_rules[count.index]["protocol"]
  cidr_block      = lookup(var.private_inbound_acl_rules[count.index], "cidr_block", null)
  ipv6_cidr_block = lookup(var.private_inbound_acl_rules[count.index], "ipv6_cidr_block", null)
}

resource "aws_network_acl_rule" "private_outbound" {
  count = var.create_vpc && var.private_dedicated_network_acl && length(var.private_subnets) > 0 ? length(var.private_outbound_acl_rules) : 0

  network_acl_id = aws_network_acl.private[0].id

  egress          = true
  rule_number     = var.private_outbound_acl_rules[count.index]["rule_number"]
  rule_action     = var.private_outbound_acl_rules[count.index]["rule_action"]
  from_port       = lookup(var.private_outbound_acl_rules[count.index], "from_port", null)
  to_port         = lookup(var.private_outbound_acl_rules[count.index], "to_port", null)
  icmp_code       = lookup(var.private_outbound_acl_rules[count.index], "icmp_code", null)
  icmp_type       = lookup(var.private_outbound_acl_rules[count.index], "icmp_type", null)
  protocol        = var.private_outbound_acl_rules[count.index]["protocol"]
  cidr_block      = lookup(var.private_outbound_acl_rules[count.index], "cidr_block", null)
  ipv6_cidr_block = lookup(var.private_outbound_acl_rules[count.index], "ipv6_cidr_block", null)
}

########################
# Intra Network ACLs
########################
resource "aws_network_acl" "intra" {
  count = var.create_vpc && var.intra_dedicated_network_acl && length(var.intra_subnets) > 0 ? 1 : 0

  vpc_id     = element(concat(aws_vpc.this.*.id, [""]), 0)
  subnet_ids = aws_subnet.intra.*.id

  tags = merge(
    {
      "Name" = format("%s-${var.intra_subnet_suffix}", var.name)
    },
    var.tags,
    var.intra_acl_tags,
  )
}

resource "aws_network_acl_rule" "intra_inbound" {
  count = var.create_vpc && var.intra_dedicated_network_acl && length(var.intra_subnets) > 0 ? length(var.intra_inbound_acl_rules) : 0

  network_acl_id = aws_network_acl.intra[0].id

  egress          = false
  rule_number     = var.intra_inbound_acl_rules[count.index]["rule_number"]
  rule_action     = var.intra_inbound_acl_rules[count.index]["rule_action"]
  from_port       = lookup(var.intra_inbound_acl_rules[count.index], "from_port", null)
  to_port         = lookup(var.intra_inbound_acl_rules[count.index], "to_port", null)
  icmp_code       = lookup(var.intra_inbound_acl_rules[count.index], "icmp_code", null)
  icmp_type       = lookup(var.intra_inbound_acl_rules[count.index], "icmp_type", null)
  protocol        = var.intra_inbound_acl_rules[count.index]["protocol"]
  cidr_block      = lookup(var.intra_inbound_acl_rules[count.index], "cidr_block", null)
  ipv6_cidr_block = lookup(var.intra_inbound_acl_rules[count.index], "ipv6_cidr_block", null)
}

resource "aws_network_acl_rule" "intra_outbound" {
  count = var.create_vpc && var.intra_dedicated_network_acl && length(var.intra_subnets) > 0 ? length(var.intra_outbound_acl_rules) : 0

  network_acl_id = aws_network_acl.intra[0].id

  egress          = true
  rule_number     = var.intra_outbound_acl_rules[count.index]["rule_number"]
  rule_action     = var.intra_outbound_acl_rules[count.index]["rule_action"]
  from_port       = lookup(var.intra_outbound_acl_rules[count.index], "from_port", null)
  to_port         = lookup(var.intra_outbound_acl_rules[count.index], "to_port", null)
  icmp_code       = lookup(var.intra_outbound_acl_rules[count.index], "icmp_code", null)
  icmp_type       = lookup(var.intra_outbound_acl_rules[count.index], "icmp_type", null)
  protocol        = var.intra_outbound_acl_rules[count.index]["protocol"]
  cidr_block      = lookup(var.intra_outbound_acl_rules[count.index], "cidr_block", null)
  ipv6_cidr_block = lookup(var.intra_outbound_acl_rules[count.index], "ipv6_cidr_block", null)
}

########################
# Database Network ACLs
########################
resource "aws_network_acl" "database" {
  count = var.create_vpc && var.database_dedicated_network_acl && length(var.database_subnets) > 0 ? 1 : 0

  vpc_id     = element(concat(aws_vpc.this.*.id, [""]), 0)
  subnet_ids = aws_subnet.database.*.id

  tags = merge(
    {
      "Name" = format("%s-${var.database_subnet_suffix}", var.name)
    },
    var.tags,
    var.database_acl_tags,
  )
}

resource "aws_network_acl_rule" "database_inbound" {
  count = var.create_vpc && var.database_dedicated_network_acl && length(var.database_subnets) > 0 ? length(var.database_inbound_acl_rules) : 0

  network_acl_id = aws_network_acl.database[0].id

  egress          = false
  rule_number     = var.database_inbound_acl_rules[count.index]["rule_number"]
  rule_action     = var.database_inbound_acl_rules[count.index]["rule_action"]
  from_port       = lookup(var.database_inbound_acl_rules[count.index], "from_port", null)
  to_port         = lookup(var.database_inbound_acl_rules[count.index], "to_port", null)
  icmp_code       = lookup(var.database_inbound_acl_rules[count.index], "icmp_code", null)
  icmp_type       = lookup(var.database_inbound_acl_rules[count.index], "icmp_type", null)
  protocol        = var.database_inbound_acl_rules[count.index]["protocol"]
  cidr_block      = lookup(var.database_inbound_acl_rules[count.index], "cidr_block", null)
  ipv6_cidr_block = lookup(var.database_inbound_acl_rules[count.index], "ipv6_cidr_block", null)
}

resource "aws_network_acl_rule" "database_outbound" {
  count = var.create_vpc && var.database_dedicated_network_acl && length(var.database_subnets) > 0 ? length(var.database_outbound_acl_rules) : 0

  network_acl_id = aws_network_acl.database[0].id

  egress          = true
  rule_number     = var.database_outbound_acl_rules[count.index]["rule_number"]
  rule_action     = var.database_outbound_acl_rules[count.index]["rule_action"]
  from_port       = lookup(var.database_outbound_acl_rules[count.index], "from_port", null)
  to_port         = lookup(var.database_outbound_acl_rules[count.index], "to_port", null)
  icmp_code       = lookup(var.database_outbound_acl_rules[count.index], "icmp_code", null)
  icmp_type       = lookup(var.database_outbound_acl_rules[count.index], "icmp_type", null)
  protocol        = var.database_outbound_acl_rules[count.index]["protocol"]
  cidr_block      = lookup(var.database_outbound_acl_rules[count.index], "cidr_block", null)
  ipv6_cidr_block = lookup(var.database_outbound_acl_rules[count.index], "ipv6_cidr_block", null)
}

########################
# Redshift Network ACLs
########################
resource "aws_network_acl" "redshift" {
  count = var.create_vpc && var.redshift_dedicated_network_acl && length(var.redshift_subnets) > 0 ? 1 : 0

  vpc_id     = element(concat(aws_vpc.this.*.id, [""]), 0)
  subnet_ids = aws_subnet.redshift.*.id

  tags = merge(
    {
      "Name" = format("%s-${var.redshift_subnet_suffix}", var.name)
    },
    var.tags,
    var.redshift_acl_tags,
  )
}

resource "aws_network_acl_rule" "redshift_inbound" {
  count = var.create_vpc && var.redshift_dedicated_network_acl && length(var.redshift_subnets) > 0 ? length(var.redshift_inbound_acl_rules) : 0

  network_acl_id = aws_network_acl.redshift[0].id

  egress          = false
  rule_number     = var.redshift_inbound_acl_rules[count.index]["rule_number"]
  rule_action     = var.redshift_inbound_acl_rules[count.index]["rule_action"]
  from_port       = lookup(var.redshift_inbound_acl_rules[count.index], "from_port", null)
  to_port         = lookup(var.redshift_inbound_acl_rules[count.index], "to_port", null)
  icmp_code       = lookup(var.redshift_inbound_acl_rules[count.index], "icmp_code", null)
  icmp_type       = lookup(var.redshift_inbound_acl_rules[count.index], "icmp_type", null)
  protocol        = var.redshift_inbound_acl_rules[count.index]["protocol"]
  cidr_block      = lookup(var.redshift_inbound_acl_rules[count.index], "cidr_block", null)
  ipv6_cidr_block = lookup(var.redshift_inbound_acl_rules[count.index], "ipv6_cidr_block", null)
}

resource "aws_network_acl_rule" "redshift_outbound" {
  count = var.create_vpc && var.redshift_dedicated_network_acl && length(var.redshift_subnets) > 0 ? length(var.redshift_outbound_acl_rules) : 0

  network_acl_id = aws_network_acl.redshift[0].id

  egress          = true
  rule_number     = var.redshift_outbound_acl_rules[count.index]["rule_number"]
  rule_action     = var.redshift_outbound_acl_rules[count.index]["rule_action"]
  from_port       = lookup(var.redshift_outbound_acl_rules[count.index], "from_port", null)
  to_port         = lookup(var.redshift_outbound_acl_rules[count.index], "to_port", null)
  icmp_code       = lookup(var.redshift_outbound_acl_rules[count.index], "icmp_code", null)
  icmp_type       = lookup(var.redshift_outbound_acl_rules[count.index], "icmp_type", null)
  protocol        = var.redshift_outbound_acl_rules[count.index]["protocol"]
  cidr_block      = lookup(var.redshift_outbound_acl_rules[count.index], "cidr_block", null)
  ipv6_cidr_block = lookup(var.redshift_outbound_acl_rules[count.index], "ipv6_cidr_block", null)
}

###########################
# Elasticache Network ACLs
###########################
resource "aws_network_acl" "elasticache" {
  count = var.create_vpc && var.elasticache_dedicated_network_acl && length(var.elasticache_subnets) > 0 ? 1 : 0

  vpc_id     = element(concat(aws_vpc.this.*.id, [""]), 0)
  subnet_ids = aws_subnet.elasticache.*.id

  tags = merge(
    {
      "Name" = format("%s-${var.elasticache_subnet_suffix}", var.name)
    },
    var.tags,
    var.elasticache_acl_tags,
  )
}

resource "aws_network_acl_rule" "elasticache_inbound" {
  count = var.create_vpc && var.elasticache_dedicated_network_acl && length(var.elasticache_subnets) > 0 ? length(var.elasticache_inbound_acl_rules) : 0

  network_acl_id = aws_network_acl.elasticache[0].id

  egress          = false
  rule_number     = var.elasticache_inbound_acl_rules[count.index]["rule_number"]
  rule_action     = var.elasticache_inbound_acl_rules[count.index]["rule_action"]
  from_port       = lookup(var.elasticache_inbound_acl_rules[count.index], "from_port", null)
  to_port         = lookup(var.elasticache_inbound_acl_rules[count.index], "to_port", null)
  icmp_code       = lookup(var.elasticache_inbound_acl_rules[count.index], "icmp_code", null)
  icmp_type       = lookup(var.elasticache_inbound_acl_rules[count.index], "icmp_type", null)
  protocol        = var.elasticache_inbound_acl_rules[count.index]["protocol"]
  cidr_block      = lookup(var.elasticache_inbound_acl_rules[count.index], "cidr_block", null)
  ipv6_cidr_block = lookup(var.elasticache_inbound_acl_rules[count.index], "ipv6_cidr_block", null)
}

resource "aws_network_acl_rule" "elasticache_outbound" {
  count = var.create_vpc && var.elasticache_dedicated_network_acl && length(var.elasticache_subnets) > 0 ? length(var.elasticache_outbound_acl_rules) : 0

  network_acl_id = aws_network_acl.elasticache[0].id

  egress          = true
  rule_number     = var.elasticache_outbound_acl_rules[count.index]["rule_number"]
  rule_action     = var.elasticache_outbound_acl_rules[count.index]["rule_action"]
  from_port       = lookup(var.elasticache_outbound_acl_rules[count.index], "from_port", null)
  to_port         = lookup(var.elasticache_outbound_acl_rules[count.index], "to_port", null)
  icmp_code       = lookup(var.elasticache_outbound_acl_rules[count.index], "icmp_code", null)
  icmp_type       = lookup(var.elasticache_outbound_acl_rules[count.index], "icmp_type", null)
  protocol        = var.elasticache_outbound_acl_rules[count.index]["protocol"]
  cidr_block      = lookup(var.elasticache_outbound_acl_rules[count.index], "cidr_block", null)
  ipv6_cidr_block = lookup(var.elasticache_outbound_acl_rules[count.index], "ipv6_cidr_block", null)
}

##############
# NAT Gateway
##############
# Workaround for interpolation not being able to "short-circuit" the evaluation of the conditional branch that doesn't end up being used
# Source: https://github.com/hashicorp/terraform/issues/11566#issuecomment-289417805
#
# The logical expression would be
#
#    nat_gateway_ips = var.reuse_nat_ips ? var.external_nat_ip_ids : aws_eip.nat.*.id
#
# but then when count of aws_eip.nat.*.id is zero, this would throw a resource not found error on aws_eip.nat.*.id.
locals {
  nat_gateway_ips = split(
    ",",
    var.reuse_nat_ips ? join(",", var.external_nat_ip_ids) : join(",", aws_eip.nat.*.id),
  )
}

resource "aws_eip" "nat" {
  count = var.create_vpc && var.enable_nat_gateway && false == var.reuse_nat_ips ? local.nat_gateway_count : 0

  vpc = true

  tags = merge(
    {
      "Name" = format(
        "%s-%s",
        var.name,
        element(var.azs, var.single_nat_gateway ? 0 : count.index),
      )
    },
    var.tags,
    var.nat_eip_tags,
  )
}

resource "aws_nat_gateway" "this" {
  count = var.create_vpc && var.enable_nat_gateway ? local.nat_gateway_count : 0

  allocation_id = element(
    local.nat_gateway_ips,
    var.single_nat_gateway ? 0 : count.index,
  )
  subnet_id = element(
    aws_subnet.public.*.id,
    var.single_nat_gateway ? 0 : count.index,
  )

  tags = merge(
    {
      "Name" = format(
        "%s-%s",
        var.name,
        element(var.azs, var.single_nat_gateway ? 0 : count.index),
      )
    },
    var.tags,
    var.nat_gateway_tags,
  )

  depends_on = [aws_internet_gateway.this]
}

resource "aws_route" "private_nat_gateway" {
  count = var.create_vpc && var.enable_nat_gateway ? local.nat_gateway_count : 0

  route_table_id         = element(aws_route_table.private.*.id, count.index)
  destination_cidr_block = "0.0.0.0/0"
  nat_gateway_id         = element(aws_nat_gateway.this.*.id, count.index)

  timeouts {
    create = "5m"
  }
}

resource "aws_route" "private_ipv6_egress" {
  count = var.create_vpc && var.create_egress_only_igw && var.enable_ipv6 ? length(var.private_subnets) : 0

  route_table_id              = element(aws_route_table.private.*.id, count.index)
  destination_ipv6_cidr_block = "::/0"
  egress_only_gateway_id      = element(aws_egress_only_internet_gateway.this.*.id, 0)
}

##########################
# Route table association
##########################
resource "aws_route_table_association" "private" {
  count = var.create_vpc && length(var.private_subnets) > 0 ? length(var.private_subnets) : 0

  subnet_id = element(aws_subnet.private.*.id, count.index)
  route_table_id = element(
    aws_route_table.private.*.id,
    var.single_nat_gateway ? 0 : count.index,
  )
}

resource "aws_route_table_association" "database" {
  count = var.create_vpc && length(var.database_subnets) > 0 ? length(var.database_subnets) : 0

  subnet_id = element(aws_subnet.database.*.id, count.index)
  route_table_id = element(
    coalescelist(aws_route_table.database.*.id, aws_route_table.private.*.id),
    var.create_database_subnet_route_table ? var.single_nat_gateway || var.create_database_internet_gateway_route ? 0 : count.index : count.index,
  )
}

resource "aws_route_table_association" "redshift" {
  count = var.create_vpc && length(var.redshift_subnets) > 0 && false == var.enable_public_redshift ? length(var.redshift_subnets) : 0

  subnet_id = element(aws_subnet.redshift.*.id, count.index)
  route_table_id = element(
    coalescelist(aws_route_table.redshift.*.id, aws_route_table.private.*.id),
    var.single_nat_gateway || var.create_redshift_subnet_route_table ? 0 : count.index,
  )
}

resource "aws_route_table_association" "redshift_public" {
  count = var.create_vpc && length(var.redshift_subnets) > 0 && var.enable_public_redshift ? length(var.redshift_subnets) : 0

  subnet_id = element(aws_subnet.redshift.*.id, count.index)
  route_table_id = element(
    coalescelist(aws_route_table.redshift.*.id, aws_route_table.public.*.id),
    var.single_nat_gateway || var.create_redshift_subnet_route_table ? 0 : count.index,
  )
}

resource "aws_route_table_association" "elasticache" {
  count = var.create_vpc && length(var.elasticache_subnets) > 0 ? length(var.elasticache_subnets) : 0

  subnet_id = element(aws_subnet.elasticache.*.id, count.index)
  route_table_id = element(
    coalescelist(
      aws_route_table.elasticache.*.id,
      aws_route_table.private.*.id,
    ),
    var.single_nat_gateway || var.create_elasticache_subnet_route_table ? 0 : count.index,
  )
}

resource "aws_route_table_association" "intra" {
  count = var.create_vpc && length(var.intra_subnets) > 0 ? length(var.intra_subnets) : 0

  subnet_id      = element(aws_subnet.intra.*.id, count.index)
  route_table_id = element(aws_route_table.intra.*.id, 0)
}

resource "aws_route_table_association" "public" {
  count = var.create_vpc && length(var.public_subnets) > 0 ? length(var.public_subnets) : 0

  subnet_id      = element(aws_subnet.public.*.id, count.index)
  route_table_id = aws_route_table.public[0].id
}

####################
# Customer Gateways
####################
resource "aws_customer_gateway" "this" {
  for_each = var.customer_gateways

  bgp_asn    = each.value["bgp_asn"]
  ip_address = each.value["ip_address"]
  type       = "ipsec.1"

  tags = merge(
    {
      Name = format("%s-%s", var.name, each.key)
    },
    var.tags,
    var.customer_gateway_tags,
  )
}

##############
# VPN Gateway
##############
resource "aws_vpn_gateway" "this" {
  count = var.create_vpc && var.enable_vpn_gateway ? 1 : 0

  vpc_id            = local.vpc_id
  amazon_side_asn   = var.amazon_side_asn
  availability_zone = var.vpn_gateway_az

  tags = merge(
    {
      "Name" = format("%s", var.name)
    },
    var.tags,
    var.vpn_gateway_tags,
  )
}

resource "aws_vpn_gateway_attachment" "this" {
  count = var.vpn_gateway_id != "" ? 1 : 0

  vpc_id         = local.vpc_id
  vpn_gateway_id = var.vpn_gateway_id
}

resource "aws_vpn_gateway_route_propagation" "public" {
  count = var.create_vpc && var.propagate_public_route_tables_vgw && (var.enable_vpn_gateway || var.vpn_gateway_id != "") ? 1 : 0

  route_table_id = element(aws_route_table.public.*.id, count.index)
  vpn_gateway_id = element(
    concat(
      aws_vpn_gateway.this.*.id,
      aws_vpn_gateway_attachment.this.*.vpn_gateway_id,
    ),
    count.index,
  )
}

resource "aws_vpn_gateway_route_propagation" "private" {
  count = var.create_vpc && var.propagate_private_route_tables_vgw && (var.enable_vpn_gateway || var.vpn_gateway_id != "") ? length(var.private_subnets) : 0

  route_table_id = element(aws_route_table.private.*.id, count.index)
  vpn_gateway_id = element(
    concat(
      aws_vpn_gateway.this.*.id,
      aws_vpn_gateway_attachment.this.*.vpn_gateway_id,
    ),
    count.index,
  )
}

resource "aws_vpn_gateway_route_propagation" "intra" {
  count = var.create_vpc && var.propagate_intra_route_tables_vgw && (var.enable_vpn_gateway || var.vpn_gateway_id != "") ? length(var.intra_subnets) : 0

  route_table_id = element(aws_route_table.intra.*.id, count.index)
  vpn_gateway_id = element(
    concat(
      aws_vpn_gateway.this.*.id,
      aws_vpn_gateway_attachment.this.*.vpn_gateway_id,
    ),
    count.index,
  )
}

###########
# Defaults
###########
resource "aws_default_vpc" "this" {
  count = var.manage_default_vpc ? 1 : 0

  enable_dns_support   = var.default_vpc_enable_dns_support
  enable_dns_hostnames = var.default_vpc_enable_dns_hostnames
  enable_classiclink   = var.default_vpc_enable_classiclink

  tags = merge(
    {
      "Name" = format("%s", var.default_vpc_name)
    },
    var.tags,
    var.default_vpc_tags,
  )
}