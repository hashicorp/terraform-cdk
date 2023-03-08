/**
 * Copyright (c) HashiCorp, Inc.
 * SPDX-License-Identifier: MPL-2.0
 */

import { testCase, Synth } from "./helpers/convert";

describe("variables", () => {
  testCase.test(
    "simple variable",
    `
    variable "image_id" {
        type = string
      }
    
    output "cidr_out" {
        value = var.image_id
    }
    `,
    [],
    Synth.never,
    {
      resources: [],
    }
  );

  testCase.test(
    "variable with type",
    `
    variable "availability_zone_names" {
        type    = list(string)
        default = ["us-west-1a"]
    }
    
    output "cidr_out" {
        value = var.availability_zone_names
    }
    `,
    [],
    Synth.never,
    {
      resources: [],
    }
  );

  testCase.test(
    "variable with complex type",
    `
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
        description = "List of port mappings for the Docker container. Each mapping is exposed as a separate ContainerPort in the container definition."
        sensitive  = true
        nullable   = true
    }

    
    output "cidr_out" {
        value = var.docker_ports
    }
    `,
    [],
    Synth.never,
    {
      resources: [],
    }
  );

  testCase.test(
    "variable with validation",
    `
    variable "image_id" {
        type        = string
        description = "The id of the machine image (AMI) to use for the server."
      
        validation {
            condition     = length(var.image_id) > 4 && substr(var.image_id, 0, 4) == "ami-"
            error_message = "The image_id value must be a valid AMI id, starting with \\"ami-\\"."
          }
      }
      
    
    output "cidr_out" {
        value = var.image_id
    }
    `,
    [],
    Synth.never,
    {
      resources: [],
    }
  );
});
