// Copyright (c) HashiCorp, Inc
// SPDX-License-Identifier: MPL-2.0
import { Language } from "@cdktf/provider-generator";
import {
  ProviderConstraint,
  DependencyManager,
} from "../../../lib/dependencies/dependency-manager";

describe("dependency manager", () => {
  describe("ProviderConstraint", () => {
    it.each(["aws", "hashicorp/aws", "registry.terraform.io/hashicorp/aws"])(
      "should parse a simple constraint from '%s'",
      (configEntry) => {
        const constraint = ProviderConstraint.fromConfigEntry(configEntry);
        expect(constraint.source).toEqual(
          "registry.terraform.io/hashicorp/aws"
        );
        expect(constraint.hostname).toEqual("registry.terraform.io");
        expect(constraint.isFromTerraformRegistry()).toBe(true);
        expect(constraint.namespace).toEqual("hashicorp");
        expect(constraint.name).toEqual("aws");
        expect(constraint.simplifiedName).toEqual("aws");
        expect(constraint.version).toEqual(undefined);
        // should match any version as none was passed
        expect(constraint.matchesVersion("4.12.1")).toBe(true);
        expect(constraint.matchesVersion("3")).toBe(true);
        expect(constraint.matchesVersion("1")).toBe(true);
      }
    );

    it.each([
      "aws@4.1.1",
      "hashicorp/aws@>4",
      "registry.terraform.io/hashicorp/aws@~>4.1",
    ])(
      "should parse a simple constraint with a version from '%s'",
      (configEntry) => {
        const constraint = ProviderConstraint.fromConfigEntry(configEntry);
        expect(constraint.source).toEqual(
          "registry.terraform.io/hashicorp/aws"
        );
        expect(constraint.hostname).toEqual("registry.terraform.io");
        expect(constraint.isFromTerraformRegistry()).toBe(true);
        expect(constraint.namespace).toEqual("hashicorp");
        expect(constraint.name).toEqual("aws");
        expect(constraint.version).toBeDefined();
        expect(constraint.matchesVersion("4.1.1")).toBe(true);
      }
    );

    it("should parse a constraint from a non-default namespace", () => {
      const constraint =
        ProviderConstraint.fromConfigEntry("kreuzwerker/docker");
      expect(constraint.hostname).toEqual("registry.terraform.io");
      expect(constraint.isFromTerraformRegistry()).toBe(true);
      expect(constraint.namespace).toEqual("kreuzwerker");
      expect(constraint.name).toEqual("docker");
      expect(constraint.simplifiedName).toEqual("kreuzwerker/docker");
    });

    it("should parse a constraint from a custom registry", () => {
      const constraint = ProviderConstraint.fromConfigEntry(
        "registry.example.com/acme/customprovider"
      );
      expect(constraint.hostname).toEqual("registry.example.com");
      expect(constraint.isFromTerraformRegistry()).toBe(false);
      expect(constraint.namespace).toEqual("acme");
      expect(constraint.name).toEqual("customprovider");
      expect(constraint.simplifiedName).toEqual(
        "registry.example.com/acme/customprovider"
      );
    });
  });

  describe("addLocalProvider", () => {
    it("throws if the provider is not found", async () => {
      const mgr = new DependencyManager(
        Language.TYPESCRIPT,
        "0.11.2",
        __dirname
      );

      await expect(() =>
        mgr.addLocalProvider(new ProviderConstraint("aaawwwwwssss", undefined))
      ).rejects.toThrowErrorMatchingInlineSnapshot(
        `"Usage Error: Could not find a version for the provider 'registry.terraform.io/hashicorp/aaawwwwwssss' in the public registry. This could be due to a typo, please take a look at https://cdk.tf/registry-providers to find all supported providers."`
      );
    });
  });
});
