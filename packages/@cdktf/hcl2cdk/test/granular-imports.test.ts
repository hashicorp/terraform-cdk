// Copyright (c) HashiCorp, Inc
// SPDX-License-Identifier: MPL-2.0
import { testCase, Synth, binding } from "./helpers/convert";

describe("granular-imports", () => {
  testCase.test(
    "blocks should be arrays",
    `
    provider "google" {
      project = "my-project"
      region  = "us-central1"
    }

    provider "local" {}

    resource "google_compute_autoscaler" "example" {
      name   = "example-autoscaler"
      zone   = "us-east1-b"
      target = "target-for-example-autoscaler"
      count = 2

      autoscaling_policy = {
        max_replicas    = 8
        min_replicas    = 2
        cooldown_period = 60

        cpu_utilization = {
          target = 0.5
        }
      }
    }

    resource "google_compute_instance_group_manager" "default" {
      name = "my-igm"
      zone = "us-central1-f"

      version {
        instance_template = 1
        name              = "primary"
      }

      target_pools       = []
      base_instance_name = "autoscaler-sample"
    }

    resource "google_compute_autoscaler" "default" {
      name   = "my-autoscaler"
      zone   = "us-central1-f"
      target = google_compute_instance_group_manager.default.id

      autoscaling_policy {
        max_replicas    = 5 + 2
        min_replicas    = 1
        cooldown_period = 60

        metric {
          name                       = "pubsub.googleapis.com/subscription/num_undelivered_messages"
          filter                     = "resource.type = pubsub_subscription AND resource.label.subscription_id = our-subscription"
          single_instance_assignment = 65535
        }
      }
    }

    variable "image_id" {
      type = string
    }

    output "image_id" {
      value = var.image_id
    }

    data "local_file" "foo" {
      filename = "./\${var.image_id}.img"
    }
    `,
    [binding.google, binding.local],
    Synth.yes,
    {
      resources: ["google_compute_autoscaler", "local_file"],
    }
  );
});
