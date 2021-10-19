import { convert } from "../lib/index";
import {
  readSchema,
  ConstructsMakerProviderTarget,
  LANGUAGES,
  config,
} from "@cdktf/provider-generator";
const providers = [
  "hashicorp/aws@ ~>3.62.0",
  "kreuzwerker/docker@ ~>2.15.0",
  "hashicorp/google@ ~>3.87.0",
];

let cachedProviderSchema: any;
describe("convert", () => {
  beforeAll(() => {
    // Get all the provider schemas
    return readSchema(
      providers.map((spec) =>
        ConstructsMakerProviderTarget.from(
          new config.TerraformProviderConstraint(spec),
          LANGUAGES[0]
        )
      )
    ).then((res) => {
      cachedProviderSchema = res.providerSchema;
    });
  }, 500_000);

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
    ["empty provider", `provider "docker" {}`],
    [
      "null provider",
      `provider "null" {}
    resource "null_resource" "test" {}
    `,
    ],
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
        }
        output "combined-so-it-does-not-get-removed" {
          value = "\${local.service_name},\${local.owner},\${local.is_it_great},\${local.how_many}"
        }
        `,
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
        }
        
        output "combined-so-it-does-not-get-removed" {
          value = "\${local.service_name},\${local.owner},\${local.is_it_great},\${local.how_many}"
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
      "duplicate modules",
      `
        module "vpca" {
          source = "terraform-aws-modules/vpc/aws"
        
          name = "my-vpc-a"
        }
        
        module "vpcb" {
          source = "terraform-aws-modules/vpc/aws"
        
          name = "my-vpc-b"
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
    [
      "arithmetics",
      `
        variable "members" {
          type = number
        }
        variable "admins" {
          type = number
        }
        
        output "arithmetics" {
          value = var.members + var.admins
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
          bucket     = aws_kms_key.examplekms.deletion_window_in_days > 3 ? aws_s3_bucket.examplebucket.id : []
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
        }
        
        output "combined-so-it-does-not-get-removed" {
          value = "\${local.admin_users},\${local.regular_users}"
        }
        `,
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
        }
        
        output "so-it-does-not-get-removed" {
          value = local.users_by_role
        }`,
    ],
    [
      "for expression 3",
      `
        variable "users" {
          type = list(object({
            id = string
          }))
        }
        
        resource "datadog_monitor" "hard_query" {
          name = "queries are hard"
          query = join(" && ", [for o in var.users : "!(!\${o.id})"])
        }`,
    ],
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
      "for each on list using splat",
      `
        variable "buckets" {
          type    = list(string)
        }

        resource "aws_kms_key" "examplekms" {
          description             = "KMS key 1"
          deletion_window_in_days = 7
        }
        
        resource "aws_s3_bucket" "examplebucket" {
          for_each = toset(var.buckets.*)

          bucket = each.key
          acl    = "private"
        }
        
        resource "aws_s3_bucket_object" "examplebucket_object" {
          for_each = toset(aws_s3_bucket.examplebucket.*)

          key        = "someobject"
          bucket     = each.key
          source     = "index.html"
          kms_key_id = aws_kms_key.examplekms.arn
        }
        `,
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
      "property access through []",
      `
        variable "settings" {
          type = map(string)
        }

        resource "aws_s3_bucket" "examplebucket" {
          bucket = var.settings["bucket_name"]
          acl    = "private"
        }
        `,
    ],
    [
      "list access through []",
      `
        variable "settings" {
          type = list(map(string))
        }

        resource "aws_s3_bucket" "examplebucket" {
          bucket = var.settings[0]["bucket_name"]
          acl    = "private"
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
      "simple count",
      `
      resource "aws_instance" "multiple_servers" {
        count = 4
      
        ami           = "ami-0c2b8ca1dad447f8a"
        instance_type = "t2.micro"
      
        tags = {
          Name = "Server \${count.index}"
        }
      }
      `,
    ],
    [
      "dynamic blocks",
      `
        variable "settings" {
          type = list(map(string))
        }

        variable "namespace" {
          type = string
        }

        resource "aws_elastic_beanstalk_environment" "tfenvtest" {
          name                = "tf-test-name"
          application         = "best-app"
          solution_stack_name = "64bit Amazon Linux 2018.03 v2.11.4 running Go 1.12.6"
        
          dynamic "setting" {
            for_each = var.settings
            content {
              namespace = var.namespace
              name = setting.value["name"]
              value = setting.value["value"]
            }
          }
        }`,
    ],
    [
      "multiple blocks",
      `
      resource "aws_security_group" "allow_tls" {
        name        = "allow_tls"
        description = "Allow TLS inbound traffic"
      
        ingress {
          description      = "TLS from VPC"
          from_port        = 443
          to_port          = 443
          protocol         = "tcp"
        }

        ingress {
          description      = "TLS from VPC"
          from_port        = 80
          to_port          = 80
          protocol         = "tcp"
        }

        ingress {
          from_port        = 8080
          to_port          = 8080
          protocol         = "tcp"
        }
      
        egress {
          from_port        = 0
          to_port          = 0
          protocol         = "-1"
          cidr_blocks      = ["0.0.0.0/0"]
          ipv6_cidr_blocks = ["::/0"]
        }
      
        tags = {
          Name = "allow_tls"
        }
      }`,
    ],
    [
      "provider alias",
      `
      provider "aws" {
        region = "us-east-1"
      }

      provider "aws" {
        alias  = "west"
        region = "us-west-2"
      }

      resource "aws_instance" "foo" {
        provider = aws.west
      
        foo = "bar"
      }

      module "vpc" {
        source = "terraform-aws-modules/vpc/aws"
        providers = {
          aws = aws.west
        }
      }        
      `,
    ],
    [
      "local module",
      `
      module "aws_vpc" {
        source = "./aws_vpc"
      }        
      `,
    ],
    [
      "complex for each loops",
      `
      resource "aws_acm_certificate" "example" {
        domain_name       = "example.com"
        validation_method = "DNS"
      }
      
      data "aws_route53_zone" "example" {
        name         = "example.com"
        private_zone = false
      }
      
      resource "aws_route53_record" "example" {
        for_each = {
          for dvo in aws_acm_certificate.example.domain_validation_options : dvo.domain_name => {
            name   = dvo.resource_record_name
            record = dvo.resource_record_value
            type   = dvo.resource_record_type
          }
        }
      
        allow_overwrite = true
        name            = each.value.name
        records         = [each.value.record]
        ttl             = 60
        type            = each.value.type
        zone_id         = data.aws_route53_zone.example.zone_id
      }
      
      resource "aws_acm_certificate_validation" "example" {
        certificate_arn         = aws_acm_certificate.example.arn
        validation_record_fqdns = [for record in aws_route53_record.example : record.fqdn]
      }
      
      resource "aws_lb_listener" "example" {
        # ... other configuration ...
      
        certificate_arn = aws_acm_certificate_validation.example.certificate_arn
      }
              
      `,
    ],
    [
      "local backend",
      `
      terraform {
        backend "local" {
          path = "relative/path/to/terraform.tfstate"
        }
      }     
      `,
    ],
    [
      "remote backend",
      `
      terraform {
        backend "remote" {
          hostname = "app.terraform.io"
          organization = "company"
          path_to_state = "terraform.tfstate"
      
          workspaces {
            name = "my-app-prod"
          }
        }
      }
      `,
    ],
    [
      "numeric property access",
      `
      resource "google_compute_instance" "example" {
        name          = "example"
        machine_type  = "f1-micro"
        zone          = "us-east1-b"

        network_interface {
          network = "default"

          access_config {
            // Ephemeral IP
          }
        }
      }

      output "public_ip" {
        value = "\${google_compute_instance.example.network_interface.0.access_config.0.assigned_nat_ip}"
      }
      `,
    ],
    [
      "blocks should be arrays",
      `
      resource "google_compute_autoscaler" "example" {
        name   = "example-autoscaler"
        zone   = "us-east1-b"
      
        autoscaling_policy = {
          max_replicas    = 8
          min_replicas    = 2
          cooldown_period = 60
      
          cpu_utilization = {
            target = 0.5
          }
        }
      }
      `,
    ],
    [
      "provider with var reference",
      `
      variable "domain" {
        description = "A domain"
      }
      provider "auth0" {
        domain = var.domain
      }
      `,
    ],
    [
      "data local_file",
      `
      data "local_file" "_01_please_verify" {
        filename = "./email_templates/01_please_verify/template.html"
      }
      `,
    ],
    [
      "required namespaced provider",
      `
      variable "domain" {
        description = "A domain"
      }
      provider "auth0" {
        domain = var.domain
      }
      
      terraform {
        required_providers {
          auth0 = {
            source  = "alexkappa/auth0"
            version = "0.19.0"
          }
        }
      }
      `,
    ],
    [
      "for_each with var usage",
      `
      variable "one_set_of_users" {
        description = "users"
      }
      variable "other_set_of_users" {
        description = "users"
      }
      variable "azure_ad_domain_name" {
        description = "domain"
      }
      resource "azuread_user" "azure_users" {
        for_each = merge(
          var.one_set_of_users,
          var.other_set_of_users,
        )
      
        user_principal_name = "\${each.value}\${var.azure_ad_domain_name}"
        display_name        = each.key
      }
      `,
    ],
    [
      "terraform workspace",
      `
      module "example" {
        source = "./my-module"
        name_prefix = "app-\${terraform.workspace}"
      }
      `,
    ],
    [
      "all module types",
      `
      module "consul" {
        source = "./consul"
      }
      module "consul-registry" {
        source = "hashicorp/consul/aws"
        version = "0.1.0"
      }
      module "consul-hosted-registry" {
        source = "app.terraform.io/example-corp/k8s-cluster/azurerm"
        version = "1.1.0"
      }
      module "consul-github" {
        source = "github.com/hashicorp/example"
      }
      module "consul-git" {
        source = "git@github.com:hashicorp/example.git"
      }
      module "consul-butbucket" {
        source = "bitbucket.org/hashicorp/terraform-consul-aws"
      }
      module "vpc" {
        source = "git::https://example.com/vpc.git"
      }
      module "storage" {
        source = "git::ssh://username@example.com/storage.git"
      }
      `,
    ],
    [
      "number output",
      `
      output "test" {
        value = 42
      }
      `,
    ],
    [
      "same name local, var, out",
      `
      variable "test" {
        type    = string
      }
      locals {
        test = "\${var.test} + 1"
      }
      output "test" {
        value = "\${local.test}"
      }
      `,
    ],
    [
      "aliased duplicate provider with var reference",
      `
      variable "domain" {
        description = "A domain"
      }
      provider "auth0" {
        domain = var.domain
      }
      provider "auth0" {
        alias = "private_auth0"
        domain = var.domain
        private = true
      }
      `,
    ],
    [
      "remote state",
      `
      data "terraform_remote_state" "vpc" {
        backend = "remote"

        config = {
          organization = "hashicorp"
          workspaces = {
            name = "vpc-prod"
          }
        }
      }
      `,
    ],
    [
      "remote state types",
      `
      data "terraform_remote_state" "etcdv3" {
        backend = "etcdv3"

        config = {
          prefix = "terraform-state/"
        }
      }

      data "terraform_remote_state" "s3" {
        backend = "s3"

        config = {
          bucket = "mybucket"
        }
      }
      `,
    ],
  ])("%s configuration", async (_name, hcl) => {
    const { all } = await convert(hcl, {
      language: "typescript",
      providerSchema: cachedProviderSchema,
    });
    expect(all).toMatchSnapshot();
  });

  const targetLanguages = ["typescript", "python", "csharp", "java"];
  describe("Cross-Language Support", () => {
    it.each(targetLanguages)("supports %s", (language) => {
      const hcl = `
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
      }
      `;
      expect(
        convert(hcl, {
          language: language as any,
          providerSchema: cachedProviderSchema,
        })
      ).toMatchSnapshot();
    });
  });

  it("exposes stats for telemetry", async () => {
    const { stats } = await convert(
      `
  resource "aws_kms_key" "examplekms" {
    description             = "KMS key 1"
    deletion_window_in_days = 7
  }
  
  resource "aws_s3_bucket" "examplebucket" {
    bucket = "examplebuckettftest"
    acl    = "private"
  }
  resource "aws_s3_bucket" "examplebucket_two" {
    bucket = "examplebuckettftest"
    acl    = "private"
  }
  resource "aws_s3_bucket" "examplebucket_three" {
    bucket = "examplebuckettftest"
    acl    = "private"
  }

  resource "internal_cloud_s3_bucket" "examplebucket" {
    bucket = "examplebuckettftest"
    acl    = "private"
  }
  resource "internal_cloud_s3_bucket_object" "examplebucket_two" {
    bucket = "examplebuckettftest"
    acl    = "private"
  }
  
  resource "aws_s3_bucket_object" "examplebucket_object" {
    key        = "someobject"
    bucket     = element(aws_s3_bucket.examplebucket, 0).id
    source     = "index.html"
    kms_key_id = aws_kms_key.examplekms.arn
  }
  resource "aws_s3_bucket_object" "examplebucket_object_two" {
    key        = "someobject"
    bucket     = element(aws_s3_bucket.examplebucket, 0).id
    source     = "index.html"
    kms_key_id = aws_kms_key.examplekms.arn
  }
  resource "google_compute_autoscaler" "example" {
    name   = "example-autoscaler"
    zone   = "us-east1-b"
  
    autoscaling_policy = {
      max_replicas    = 8
      min_replicas    = 2
      cooldown_period = 60
  
      cpu_utilization = {
        target = 0.5
      }
    }
  }
  `,
      { language: "typescript", providerSchema: cachedProviderSchema }
    );

    expect(stats).toMatchInlineSnapshot(`
      Object {
        "convertedLines": 55,
        "data": Object {},
        "language": "typescript",
        "numberOfModules": 0,
        "numberOfProviders": 3,
        "resources": Object {
          "aws": Object {
            "kms_key": 1,
            "s3_bucket": 3,
            "s3_bucket_object": 2,
          },
          "google": Object {
            "compute_autoscaler": 1,
          },
          "other": Object {
            "other": 1,
          },
        },
      }
    `);
  });
});
