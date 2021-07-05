import { convert } from "../lib/index";

describe("convert", () => {
  describe("typescript", () => {
    it.each([
      [
        "output",
        `
        output "cidr_out" {
            value = "test"
        }`,
      ],
      [
        "sensitive output",
        `
        output "cidr_out" {
            value = "test"
            sensitive = true
        }`,
      ],
      [
        "output withdescription",
        `
        output "cidr_out" {
            value = "test"
            sensitive = true
            description = "Best output"
        }`,
      ],
      [
        "multiple outputs",
        `
        output "first_cidr_out" {
            value = "first"
        }
        output "second_cidr_out" {
            value = "second"
        }`,
      ],
      ["variable", `variable "weekday" {}`],
      [
        "variable with default",
        `
        variable "availability_zone_names" {
            type    = list(string)
            default = ["us-west-1a"]
            description = "What AMI to use to create an instance"
        }`,
      ],
      ["empty provider", `provider "docker" {}`],
      [
        "provider with complex config",
        `
        provider "aws" {
          access_key                  = "mock_access_key"
          region                      = "us-east-1"
          secret_key                  = "mock_secret_key"
          skip_credentials_validation = true
          skip_metadata_api_check     = true
          skip_requesting_account_id  = true
        
          endpoints {
            dynamodb = "http://localhost:8000"
          }
        }
      `,
      ],
      [
        "simple resource",
        `
        resource "aws_vpc" "example" {
          cidr_block = "10.0.0.0/16"
        }`,
      ],
      [
        "complex resource",
        ` 
        resource "aws_cloudfront_distribution" "s3_distribution" {
          origin {
            domain_name = "aws_s3_bucket.b.bucket_regional_domain_name"
            origin_id   = "local_s3_origin_id"
        
            s3_origin_config {
              origin_access_identity = "origin-access-identity/cloudfront/ABCDEFG1234567"
            }
          }
        
          enabled             = true
          is_ipv6_enabled     = true
          comment             = "Some comment"
          default_root_object = "index.html"
        
          logging_config {
            include_cookies = false
            bucket          = "mylogs.s3.amazonaws.com"
            prefix          = "myprefix"
          }
        
          aliases = ["mysite.example.com", "yoursite.example.com"]
        
          default_cache_behavior {
            allowed_methods  = ["DELETE", "GET", "HEAD", "OPTIONS", "PATCH", "POST", "PUT"]
            cached_methods   = ["GET", "HEAD"]
            target_origin_id = "local_s3_origin_id"
        
            forwarded_values {
              query_string = false
        
              cookies {
                forward = "none"
              }
            }
        
            viewer_protocol_policy = "allow-all"
            min_ttl                = 0
            default_ttl            = 3600
            max_ttl                = 86400
          }
        
          # Cache behavior with precedence 0
          ordered_cache_behavior {
            path_pattern     = "/content/immutable/*"
            allowed_methods  = ["GET", "HEAD", "OPTIONS"]
            cached_methods   = ["GET", "HEAD", "OPTIONS"]
            target_origin_id = "local_s3_origin_id"
        
            forwarded_values {
              query_string = false
              headers      = ["Origin"]
        
              cookies {
                forward = "none"
              }
            }
        
            min_ttl                = 0
            default_ttl            = 86400
            max_ttl                = 31536000
            compress               = true
            viewer_protocol_policy = "redirect-to-https"
          }
        
          # Cache behavior with precedence 1
          ordered_cache_behavior {
            path_pattern     = "/content/*"
            allowed_methods  = ["GET", "HEAD", "OPTIONS"]
            cached_methods   = ["GET", "HEAD"]
            target_origin_id = "local_s3_origin_id"
        
            forwarded_values {
              query_string = false
        
              cookies {
                forward = "none"
              }
            }
        
            min_ttl                = 0
            default_ttl            = 3600
            max_ttl                = 86400
            compress               = true
            viewer_protocol_policy = "redirect-to-https"
          }
        
          price_class = "PriceClass_200"
        
          restrictions {
            geo_restriction {
              restriction_type = "whitelist"
              locations        = ["US", "CA", "GB", "DE"]
            }
          }
        
          tags = {
            Environment = "production"
          }
        
          viewer_certificate {
            cloudfront_default_certificate = true
          }
        }`,
      ],
      [
        "simple data source",
        `
        data "aws_subnet" "selected" {
          id = "subnet_id"
        }`,
      ],
      [
        "locals",
        `
        locals {
          service_name = "forum"
          owner        = "Community Team"
          is_it_great  = true
          how_many     = 42
        }`,
      ],
      [
        "multiple locals blocks",
        `
        locals {
          service_name = "forum"
          owner        = "Community Team"
        }

        locals {
          is_it_great  = true
          how_many     = 42
        }`,
      ],
      [
        "resource references",
        `
        resource "aws_kms_key" "examplekms" {
          description             = "KMS key 1"
          deletion_window_in_days = 7
        }
        
        resource "aws_s3_bucket" "examplebucket" {
          bucket = "examplebuckettftest"
          acl    = "private"
        }
        
        resource "aws_s3_bucket_object" "examplebucket_object" {
          key        = "someobject"
          bucket     = aws_s3_bucket.examplebucket.id
          source     = "index.html"
          kms_key_id = aws_kms_key.examplekms.arn
        }`,
      ],
      [
        "locals references",
        `
        locals {
          bucket_name = "foo"
        }
        
        resource "aws_s3_bucket" "examplebucket" {
          bucket = local.bucket_name
          acl    = "private"
        }`,
      ],
      [
        "variable references",
        `
        variable "bucket_name" {
          type    = string
          default = "demo"
        }
        
        resource "aws_s3_bucket" "examplebucket" {
          bucket = var.bucket_name
          acl    = "private"
        }`,
      ],
      [
        "data references",
        `
        variable "bucket_name" {
          type    = string
          default = "demo"
        }
        
        data "aws_s3_bucket" "examplebucket" {
          bucket = var.bucket_name
          acl    = "private"
        }
        
        resource "aws_s3_bucket_object" "examplebucket_object" {
          key        = "someobject"
          bucket     = data.aws_s3_bucket.examplebucket.arn
          source     = "index.html"
        }`,
      ],
      [
        "double references",
        `
        variable "bucket_name" {
          type    = string
          default = "demo"
        }
        
        resource "aws_s3_bucket" "examplebucket" {
          bucket = var.bucket_name
          acl    = "private"
          tags = {
            tag-key = var.bucket_name
          }
        }`,
      ],
      [
        "modules",
        `
        module "vpc" {
          source = "terraform-aws-modules/vpc/aws"
        
          name = "my-vpc"
          cidr = "10.0.0.0/16"
        
          azs             = ["eu-west-1a", "eu-west-1b", "eu-west-1c"]
          private_subnets = ["10.0.1.0/24", "10.0.2.0/24", "10.0.3.0/24"]
          public_subnets  = ["10.0.101.0/24", "10.0.102.0/24", "10.0.103.0/24"]
        
          enable_nat_gateway = true
          enable_vpn_gateway = true
        
          tags = {
            Terraform = "true"
            Environment = "dev"
          }
        }`,
      ],
      [
        "referenced modules",
        `
        module "vpc" {
          source = "terraform-aws-modules/vpc/aws"
        
          name = "my-vpc"
          cidr = "10.0.0.0/16"
        
          azs             = ["eu-west-1a", "eu-west-1b", "eu-west-1c"]
          private_subnets = ["10.0.1.0/24", "10.0.2.0/24", "10.0.3.0/24"]
          public_subnets  = ["10.0.101.0/24", "10.0.102.0/24", "10.0.103.0/24"]
        
          enable_nat_gateway = true
          enable_vpn_gateway = true
        
          tags = {
            Terraform = "true"
            Environment = "dev"
          }
        }
        
        output "subnet_ids" {
          value = module.vpc.public_subnets
        }`,
      ],
    ])("%s configuration", async (_name, hcl) => {
      const { all } = await convert(`file.hcl`, hcl, {
        language: "typescript",
      });
      expect(all).toMatchSnapshot();
    });

    describe("errors on", () => {
      it.each([
        [
          "resource references with HCL functions",
          `
          resource "aws_kms_key" "examplekms" {
            description             = "KMS key 1"
            deletion_window_in_days = 7
          }
          
          resource "aws_s3_bucket" "examplebucket" {
            bucket = "examplebuckettftest"
            acl    = "private"
          }
          
          resource "aws_s3_bucket_object" "examplebucket_object" {
            key        = "someobject"
            bucket     = element(aws_s3_bucket.examplebucket, 0).id
            source     = "index.html"
            kms_key_id = aws_kms_key.examplekms.arn
          }`,
        ],
        [
          "resource references with lists",
          `
          resource "aws_kms_key" "examplekms" {
            description             = "KMS key 1"
            deletion_window_in_days = 7
          }
          
          resource "aws_s3_bucket" "examplebucket" {
            bucket = "examplebuckettftest"
            acl    = "private"
          }
          
          resource "aws_s3_bucket_object" "examplebucket_object" {
            key        = "someobject"
            bucket     = aws_s3_bucket.examplebucket.*.id
            source     = "index.html"
            kms_key_id = aws_kms_key.examplekms.arn
          }`,
        ],
        [
          "conditionals",
          `
          resource "aws_kms_key" "examplekms" {
            description             = "KMS key 1"
            deletion_window_in_days = 7
          }
          
          resource "aws_s3_bucket" "examplebucket" {
            bucket = "examplebuckettftest"
            acl    = "private"
          }
          
          resource "aws_s3_bucket_object" "examplebucket_object" {
            key        = "someobject"
            bucket     = resource.aws_kms_key.deletion_window_in_days > 3 ? aws_s3_bucket.examplebucket.id : []
            source     = "index.html"
            kms_key_id = aws_kms_key.examplekms.arn
          }`,
        ],
        [
          "for expression 1",
          `
          variable "users" {
            type = map(object({
              is_admin = boolean
            }))
          }
          
          locals {
            admin_users = {
              for name, user in var.users : name => user
              if user.is_admin
            }
            regular_users = {
              for name, user in var.users : name => user
              if !user.is_admin
            }
          }`,
        ],
        [
          "for expression 2",
          `
          variable "users" {
            type = map(object({
              role = string
            }))
          }
          
          locals {
            users_by_role = {
              for name, user in var.users : user.role => name...
            }
          }`,
        ],
        [
          "arithmetics",
          `
          variable "members" {
            type = number
          }
          variable "admins" {
            type = number
          }
          
          locals {
            users = var.members + var.admins
          }`,
        ],
        [
          "for_each loops",
          `
          variable "users" {
            type = set(string)
          }

          resource "aws_iam_user" "lb" {
            for_each = var.users
            name = each.key
            path = "/system/"
          
            tags = {
              tag-key = "tag-value"
            }
          }
          `,
        ],
        [
          "count loops",
          `
          variable "users" {
            type = set(string)
          }

          resource "aws_iam_user" "lb" {
            count = length(var.users)
            name = element(var.users, count.index)
            path = "/system/"
          
            tags = {
              tag-key = "tag-value"
            }
          }`,
        ],
        [
          "dynamic blocks",
          `
          variable "settings" {
            type = list(map(string))
          }

          resource "aws_elastic_beanstalk_environment" "tfenvtest" {
            name                = "tf-test-name"
            application         = "best-app"
            solution_stack_name = "64bit Amazon Linux 2018.03 v2.11.4 running Go 1.12.6"
          
            dynamic "setting" {
              for_each = var.settings
              content {
                namespace = setting.value["namespace"]
                name = setting.value["name"]
                value = setting.value["value"]
              }
            }
          }`,
        ],
      ])("%s", async (_name, hcl) => {
        expect(
          convert(`file.hcl`, hcl, {
            language: "typescript",
          })
        ).rejects.toThrowErrorMatchingSnapshot();
      });
    });
  });
});
