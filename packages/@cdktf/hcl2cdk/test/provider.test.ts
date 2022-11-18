import { testCase, Synth, binding } from "./helpers/convert";

describe("provider", () => {
  testCase.test(
    "empty provider",
    `provider "docker" {}`,
    [binding.docker],
    Synth.yes
  );
  testCase.test(
    "null provider",
    `provider "null" {}
  resource "null_resource" "test" {}
  `,
    [binding.null],
    Synth.yes
  );

  testCase.test(
    "provider with complex config",
    `
    provider "aws" {
      access_key                  = "mock_access_key"
      region                      = "us-east-1"
      secret_key                  = "mock_secret_key"
      skip_credentials_validation = true
      skip_requesting_account_id  = true
    
      endpoints {
        dynamodb = "http://localhost:8000"
      }
    }
  `,
    [binding.aws],
    Synth.yes,
    {}
  );

  testCase.test(
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
    [binding.aws, binding.awsVpc],
    Synth.never,
    {
      resources: ["aws_instance"],
    }
  );

  testCase.test(
    "required namespaced provider",
    `
      variable "domain" {
        description = "A domain"
      }
      provider "auth0" {
        domain = var.domain
        client_id = "42"
        client_secret = "secret"
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
    [binding.auth0],
    Synth.yes,
    {}
  );
});
