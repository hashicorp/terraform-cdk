import * as path from "path";
// Copyright (c) HashiCorp, Inc
// SPDX-License-Identifier: MPL-2.0
import {
  readProviderSchema,
  readModuleSchema,
} from "../generator/provider-schema";
import {
  TerraformModuleConstraint,
  TerraformProviderConstraint,
  ConstructsMakerModuleTarget,
  ConstructsMakerProviderTarget,
  Language,
} from "@cdktf/commons";

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
  it("generates a single provider schema", async () => {
    const provider = new TerraformProviderConstraint("hashicorp/null@3.1.0");
    const target = new ConstructsMakerProviderTarget(
      provider,
      Language.TYPESCRIPT
    );
    const result = await readProviderSchema(target);
    expect(result).toMatchSnapshot();
  }, 120000);

  it("generates a single module schema", async () => {
    const module = new TerraformModuleConstraint(
      "terraform-aws-modules/iam/aws//modules/iam-account@3.12.0"
    );
    const target = new ConstructsMakerModuleTarget(module, Language.TYPESCRIPT);
    const result = await readModuleSchema(target);
    expect(result).toMatchSnapshot();
  }, 120000);

  it("generates a more complex schema", async () => {
    const module = new TerraformModuleConstraint(
      "terraform-aws-modules/eks/aws@7.0.1"
    );
    const target = new ConstructsMakerModuleTarget(module, Language.TYPESCRIPT);
    const result = await readModuleSchema(target);
    expect(result).toMatchSnapshot();
  }, 120000);

  it("generates a local module", async () => {
    const module = new TerraformModuleConstraint({
      name: "local_module",
      fqn: "local_module",
      source: path.resolve(__dirname, "fixtures", "local-module"),
    });
    const target = new ConstructsMakerModuleTarget(module, Language.TYPESCRIPT);
    const result = await readModuleSchema(target);
    expect(result).toMatchSnapshot();
  }, 120000);

  it("generates a local json module", async () => {
    const module = new TerraformModuleConstraint({
      name: "local_module",
      fqn: "local_module",
      source: path.resolve(__dirname, "fixtures", "local-json-module"),
    });
    const target = new ConstructsMakerModuleTarget(module, Language.TYPESCRIPT);
    const result = await readModuleSchema(target);
    expect(result).toMatchSnapshot();
  }, 120000);
});
