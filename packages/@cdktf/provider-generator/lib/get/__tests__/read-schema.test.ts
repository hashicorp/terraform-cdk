// Copyright (c) HashiCorp, Inc
// SPDX-License-Identifier: MPL-2.0
import {
  readProviderSchema,
  readModuleSchema,
} from "../generator/provider-schema";
import {
  ConstructsMakerModuleTarget,
  ConstructsMakerProviderTarget,
  Language,
} from "../constructs-maker";
import {
  TerraformModuleConstraint,
  TerraformProviderConstraint,
} from "../../config";

expect.addSnapshotSerializer({
  test: (value) => {
    if (typeof value !== "object" || value === null) return false;

    return value["format_version"] !== undefined;
  },
  print: (value: any) => {
    value["format_version"] = "STUBBED VERSION";
    return JSON.stringify(value, null, 2);
  },
});

describe("readSchema", () => {
  beforeAll(() => {
    jest.setTimeout(120000);
  });

  it("generates a single provider schema", async () => {
    const provider = new TerraformProviderConstraint("hashicorp/null@3.1.0");
    const target = new ConstructsMakerProviderTarget(
      provider,
      Language.TYPESCRIPT
    );
    const result = await readProviderSchema(target);
    expect(result).toMatchSnapshot();
  });

  it("generates a single module schema", async () => {
    const module = new TerraformModuleConstraint(
      "terraform-aws-modules/iam/aws//modules/iam-account@3.12.0"
    );
    const target = new ConstructsMakerModuleTarget(module, Language.TYPESCRIPT);
    const result = await readModuleSchema(target);
    expect(result).toMatchSnapshot();
  });

  it("generates a more complex schema", async () => {
    const module = new TerraformModuleConstraint(
      "terraform-aws-modules/eks/aws@7.0.1"
    );
    const target = new ConstructsMakerModuleTarget(module, Language.TYPESCRIPT);
    const result = await readModuleSchema(target);
    expect(result).toMatchSnapshot();
  });
});
