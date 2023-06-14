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
    resource "google_compute_autoscaler" "example" {
      name   = "example-autoscaler"
      zone   = "us-east1-b"
      target = "target-for-example-autoscaler"

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
    [binding.google],
    Synth.yes,
    {
      resources: ["google_compute_autoscaler"],
    }
  );
});
