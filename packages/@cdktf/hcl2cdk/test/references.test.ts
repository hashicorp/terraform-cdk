import { testCase, Synth, binding } from "./helpers/convert";

describe("references", () => {
  testCase.test(
    "resource references",
    `
        provider "aws" {
          region                      = "us-east-1"
        }
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
    [binding.aws],
    Synth.yes
  );

  testCase.test(
    "locals references",
    `
        provider "aws" {
          region                      = "us-east-1"
        }
    
        locals {
          bucket_name = "foo"
        }
        
        resource "aws_s3_bucket" "examplebucket" {
          bucket = local.bucket_name
          acl    = "private"
        }`,
    [binding.aws],
    Synth.yes
  );

  testCase.test(
    "variable references",
    `
        provider "aws" {
          region                      = "us-east-1"
        }
        variable "bucket_name" {
          type    = string
          default = "demo"
        }
        
        resource "aws_s3_bucket" "examplebucket" {
          bucket = var.bucket_name
          acl    = "private"
        }`,
    [binding.aws],
    Synth.yes
  );

  testCase.test(
    "data references",
    `
        provider "aws" {
          region                      = "us-east-1"
        }
        variable "bucket_name" {
          type    = string
          default = "demo"
        }
        
        data "aws_s3_bucket" "examplebucket" {
          bucket = var.bucket_name
        }
        
        resource "aws_s3_bucket_object" "examplebucket_object" {
          key        = "someobject"
          bucket     = data.aws_s3_bucket.examplebucket.arn
          source     = "index.html"
        }`,
    [binding.aws],
    Synth.yes
  );

  testCase.test(
    "double references",
    `
        provider "aws" {
          region                      = "us-east-1"
        }
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
    [binding.aws],
    Synth.yes
  );

  testCase.test(
    "resource references with HCL functions",
    `
      provider "aws" {
        region                      = "us-east-1"
      }
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
    [binding.aws],
    Synth.yes
  );

  testCase.test(
    "provider with var reference",
    `
    variable "domain" {
      description = "A domain"
    }
    provider "auth0" {
      domain        = var.domain
      client_id     = "client_id"
      client_secret = "client_secret"
    }
    `,
    [binding.auth0],
    Synth.yes
  );

  testCase.test(
    "data local_file",
    `
    provider "local" {}
    data "local_file" "_01_please_verify" {
      filename = "./email_templates/01_please_verify/template.html"
    }
    `,
    [binding.local],
    Synth.yes
  );

  testCase.test(
    "aliased duplicate provider with var reference",
    `
    variable "domain" {
      description = "A domain"
    }
    variable "client_id" {
      description = "A client_id"
    }
    variable "client_secret" {
      description = "A client_secret"
    }
    provider "auth0" {
      domain        = var.domain
      client_id     = var.client_id
      client_secret = var.client_secret
    }
    provider "auth0" {
      alias         = "private_auth0"
      domain        = var.domain
      client_id     = var.client_id
      client_secret = var.client_secret
      debug         = true
    }
    `,
    [binding.auth0],
    Synth.yes
  );
});
