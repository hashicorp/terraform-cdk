// Copyright (c) HashiCorp, Inc
// SPDX-License-Identifier: MPL-2.0
import { TerraformCliPlan } from "../../lib/models/terraform-cli";

describe("terraform-cli", () => {
  describe("TerraformCliPlan", () => {
    it("#needsApply is false with no changes", () => {
      const plan = new TerraformCliPlan("./myplan", {
        resource_changes: [
          {
            address: "random_uuid.best-uuid",
            mode: "managed",
            type: "random_uuid",
            name: "best-uuid",
            provider_name: "registry.terraform.io/hashicorp/random",
            change: {
              actions: ["no-op"],
            },
          },
        ],
        output_changes: {
          uuid: {
            actions: ["no-op"],
            before: null,
          },
        },
      });
      expect(plan.needsApply).toBe(false);
    });

    it("#needsApply is true with only resource changes", () => {
      const plan = new TerraformCliPlan("./myplan", {
        resource_changes: [
          {
            address: "random_uuid.best-uuid",
            mode: "managed",
            type: "random_uuid",
            name: "best-uuid",
            provider_name: "registry.terraform.io/hashicorp/random",
            change: {
              actions: ["create"],
            },
          },
        ],
        output_changes: {
          uuid: {
            actions: ["no-op"],
            before: null,
          },
        },
      });

      expect(plan.needsApply).toBe(true);
    });

    it("#needsApply is true with only output changes", () => {
      const plan = new TerraformCliPlan("./myplan", {
        resource_changes: [
          {
            address: "random_uuid.best-uuid",
            mode: "managed",
            type: "random_uuid",
            name: "best-uuid",
            provider_name: "registry.terraform.io/hashicorp/random",
            change: {
              actions: ["no-op"],
            },
          },
        ],
        output_changes: {
          uuid: {
            actions: ["create"],
            before: null,
          },
        },
      });

      expect(plan.needsApply).toBe(true);
    });
  });
});
