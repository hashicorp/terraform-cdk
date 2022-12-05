// Copyright (c) HashiCorp, Inc
// SPDX-License-Identifier: MPL-2.0
import { testCase, Synth } from "./helpers/convert";

describe("backends", () => {
  testCase.test(
    "local backend",
    `
          terraform {
            backend "local" {
              path = "relative/path/to/terraform.tfstate"
            }
          }     
          `,
    [],
    Synth.yes
  );

  testCase.test(
    "remote backend",
    `
          terraform {
            backend "remote" {
              hostname = "app.terraform.io"
              organization = "company"
          
              workspaces {
                name = "my-app-prod"
              }
            }
          }
          `,
    [],
    Synth.yes
  );

  testCase.test(
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
    [],
    Synth.yes
  );

  testCase.test(
    "remote state types",
    `
      data "terraform_remote_state" "etcdv3" {
        backend = "etcdv3"

        config = {
          endpoints = ["etcd-1:2379", "etcd-2:2379", "etcd-3:2379"]
          lock      = true
          prefix    = "terraform-state/"
        }
      }

      data "terraform_remote_state" "s3" {
        backend = "s3"

        config = {
          bucket = "mybucket"
          key    = "path/to/my/key"
          region = "us-east-1"
        }
      }
      `,
    [],
    Synth.yes
  );
});
