/**
 * Copyright (c) HashiCorp, Inc.
 * SPDX-License-Identifier: MPL-2.0
 */

import { testCase, Synth, binding, Snapshot } from "./helpers/convert";

describe("variables", () => {
  testCase.test(
    "basic",
    `
    provider "local" {}
      variable "image_id" {
        type = string
      }
      data "local_file" "foo" {
        filename = "./\${var.image_id}.img"
      }
      `,
    [binding.local],
    Snapshot.yes,
    Synth.yes,
  );

  testCase.test(
    "complex type and default",
    `
    provider "local" {}
    variable "docker_ports" {
        type = list(object({
            internal = number
            external = number
            protocol = string
        }))
        default = [
            {
            internal = 8300
            external = 8300
            protocol = "tcp"
            }
        ]
        }

        data "local_file" "foo" {
            filename = "./\${var.docker_ports[0].protocol}.img"
          }`,
    [binding.local],
    Snapshot.yes,
    Synth.yes,
  );

  testCase.test(
    "sensitive and required",
    `
    provider "local" {}
    variable "user_information" {
        type = object({
          name    = string
          address = string
        })
        sensitive = true
        nullable = false
      }

      data "local_file" "foo" {
        filename = "./\${var.user_information.name}.img"
      }
      `,
    [binding.local],
    Snapshot.yes,
    Synth.yes,
  );

  testCase.test(
    "validations",
    `
    provider "local" {}
    variable "image_id" {
        type        = string
        description = "The id of the machine image (AMI) to use for the server."
      
        validation {
          condition     = length(var.image_id) > 4 && substr(var.image_id, 0, 4) == "ami-"
          error_message = "The image_id value must be a valid AMI id, starting with ami-."
        }
      }

      data "local_file" "foo" {
        filename = "./\${var.image_id}.img"
      }
      `,
    [binding.local],
    Snapshot.yes,
    Synth.yes,
  );
});
