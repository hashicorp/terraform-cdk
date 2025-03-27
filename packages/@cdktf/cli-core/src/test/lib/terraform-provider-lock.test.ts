/**
 * Copyright (c) HashiCorp, Inc.
 * SPDX-License-Identifier: MPL-2.0
 */

import { TerraformProviderLock } from "../../lib/terraform-provider-lock";
import { readFile, stat } from "fs/promises";
import { ProviderConstraint } from "../../lib/dependencies/dependency-manager";

jest.mock("fs/promises", () => {
  return {
    readFile: jest.fn().mockResolvedValue("contents"),
    stat: jest.fn().mockResolvedValue({}),
  };
});

function generateProviderLockFileContents(
  providers: {
    name: string;
    version?: string;
    constraints?: string;
  }[],
) {
  return providers
    .map((provider) => {
      return [
        `provider "${provider.name}" {`,
        `  version  = "${provider.version || "1.2.3"}"`,
        ` constraints = "${provider.constraints || "1.2"}"`,
        ` hashes = [`,
        `   "h1:123",`,
        `   "h1:456",`,
        ` ]`,
        `}`,
      ].join("\n");
    })
    .join("\n\n");
}

describe("TerraformProviderLock", () => {
  beforeEach(() => {
    jest.clearAllMocks();
  });

  it("reads the right file", async () => {
    const lock = new TerraformProviderLock("test");
    await lock.providers();

    expect(readFile).toHaveBeenCalledWith(`test/.terraform.lock.hcl`);
  });

  it("doesn't read the file twice", async () => {
    const lock = new TerraformProviderLock("test");
    await lock.providers();
    await lock.providers();

    expect(readFile).toHaveBeenCalledTimes(1);
  });

  it("parses provider file", async () => {
    const lock = new TerraformProviderLock("test");
    (readFile as jest.Mock).mockResolvedValueOnce(
      generateProviderLockFileContents([
        {
          name: "registry.terraform.io/hashicorp/test",
          version: "1.2.3",
          constraints: "4.5.6",
        },
      ]),
    );

    const parsedData = await lock.providers();

    expect(parsedData).not.toBeUndefined();
    expect(parsedData["registry.terraform.io/hashicorp/test"]).toEqual(
      expect.objectContaining({
        name: "test",
        version: "1.2.3",
      }),
    );
    expect(
      parsedData["registry.terraform.io/hashicorp/test"].constraints,
    ).toEqual(
      expect.objectContaining({
        source: "registry.terraform.io/hashicorp/test",
        version: "4.5.6",
      }),
    );
  });

  it("parses provider file with multiple providers", async () => {
    const lock = new TerraformProviderLock("test");
    (readFile as jest.Mock).mockResolvedValueOnce(
      generateProviderLockFileContents([
        {
          name: "registry.terraform.io/hashicorp/test",
          version: "1.2.3",
          constraints: "1.2",
        },
        {
          name: "registry.terraform.io/partner/foo",
          version: "4.5.3",
          constraints: "4.5.6",
        },
      ]),
    );

    const parsedData = await lock.providers();

    expect(parsedData).not.toBeUndefined();
    expect(Object.keys(parsedData)).toEqual(
      expect.arrayContaining([
        "registry.terraform.io/partner/foo",
        "registry.terraform.io/hashicorp/test",
      ]),
    );
    expect(
      parsedData["registry.terraform.io/hashicorp/test"].constraints?.version,
    ).toEqual("1.2");
    expect(parsedData["registry.terraform.io/partner/foo"].version).toEqual(
      "4.5.3",
    );
  });

  it("validates provider constraints", async () => {
    const lock = new TerraformProviderLock("test");
    (readFile as jest.Mock).mockResolvedValueOnce(
      generateProviderLockFileContents([
        {
          name: "registry.terraform.io/hashicorp/test",
          version: "1.2.3",
          constraints: "1.2",
        },
        {
          name: "registry.terraform.io/partner/foo",
          version: "4.5.3",
          constraints: "4.5.6",
        },
      ]),
    );

    const requiredProviderConstraint = new ProviderConstraint(
      "registry.terraform.io/hashicorp/test",
      "1.2",
    );
    const requiredProviderConstraintPartner = new ProviderConstraint(
      "registry.terraform.io/partner/foo",
      "4.2",
    );

    expect(
      await lock.hasMatchingProvider(requiredProviderConstraint),
    ).toBeTruthy();
    expect(
      await lock.hasMatchingProvider(requiredProviderConstraintPartner),
    ).toBeFalsy();
  });

  it("handles gracefully when file is not present", async () => {
    const lock = new TerraformProviderLock("test");
    (readFile as jest.Mock).mockRejectedValueOnce(
      new Error("unable to find file"),
    );

    const requiredProviderConstraint = new ProviderConstraint(
      "registry.terraform.io/hashicorp/test",
      "1.2",
    );

    expect(
      await lock.hasMatchingProvider(requiredProviderConstraint),
    ).toBeFalsy();
  });

  it("handles gracefully when lock file doens't have any providers", async () => {
    const lock = new TerraformProviderLock("test");
    (readFile as jest.Mock).mockResolvedValueOnce("");

    const requiredProviderConstraint = new ProviderConstraint(
      "registry.terraform.io/hashicorp/test",
      "1.2",
    );

    expect(
      await lock.hasMatchingProvider(requiredProviderConstraint),
    ).toBeFalsy();
  });

  it("verifies the existence of a lock file", async () => {
    const lock = new TerraformProviderLock("test");
    (stat as jest.Mock).mockResolvedValueOnce({});

    expect(await lock.hasProviderLockFile()).toBeTruthy();
    expect(stat).toHaveBeenCalledWith("test/.terraform.lock.hcl");

    (stat as jest.Mock).mockClear();
    (stat as jest.Mock).mockRejectedValueOnce(new Error("unable to find file"));

    expect(await lock.hasProviderLockFile()).toBeFalsy();
    expect(stat).toHaveBeenCalledWith("test/.terraform.lock.hcl");
  });
});
