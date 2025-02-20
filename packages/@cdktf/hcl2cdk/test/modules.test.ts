/**
 * Copyright (c) HashiCorp, Inc.
 * SPDX-License-Identifier: MPL-2.0
 */

import { testCase, Synth, binding, Snapshot } from "./helpers/convert";

describe("modules", () => {
  testCase.test(
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
    [binding.awsVpc],
    Snapshot.yes,
    Synth.yes,
  );

  testCase.test(
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
    [binding.awsVpc],
    Snapshot.yes,
    Synth.yes,
  );

  testCase.test(
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
    [binding.awsVpc],
    Snapshot.yes,
    Synth.yes,
  );

  testCase.test(
    "local module",
    `
    module "aws_vpc" {
      source = "./aws_vpc"
    }        
    `,
    [],
    Snapshot.yes,
    Synth.never,
  );

  testCase.test(
    "terraform workspace",
    `
    module "example" {
      source = "./my-module"
      name_prefix = "app-\${terraform.workspace}"
    }
    `,
    [],
    Snapshot.yes,
    Synth.never,
  );

  testCase.test(
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
    [],
    Snapshot.yes,
    Synth.never,
  );
});
