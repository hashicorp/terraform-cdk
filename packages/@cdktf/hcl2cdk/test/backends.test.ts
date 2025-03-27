// Copyright (c) HashiCorp, Inc
// SPDX-License-Identifier: MPL-2.0
import { testCase, Synth, Snapshot } from "./helpers/convert";

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
    Snapshot.yes,
    Synth.yes,
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
    Snapshot.yes,
    Synth.yes,
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
    Snapshot.yes,
    Synth.yes,
  );

  testCase.test(
    "remote state types",
    `
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
    Snapshot.yes,
    Synth.yes,
  );
});
