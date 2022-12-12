// Copyright (c) HashiCorp, Inc
// SPDX-License-Identifier: MPL-2.0
// DOCS_BLOCK_START:hcl-interop
import { Construct } from "constructs";
import { TerraformOutput, TerraformStack, TerraformVariable } from "cdktf";
import { Pet } from "@cdktf/provider-random/lib/pet";
import { RandomProvider } from "@cdktf/provider-random/lib/provider";

export class HCLInteropStack extends TerraformStack {
  constructor(scope: Construct, name: string) {
    super(scope, name);

    new RandomProvider(this, "default", {});
    const petNameLength = new TerraformVariable(this, "petNameLength", {
      type: "number",
      default: 2,
      description: "Pet name length",
    });

    const myPet = new Pet(this, "example", {
      length: petNameLength.value,
    });

    new TerraformOutput(this, "name", {
      value: myPet.id,
    });
  }
}
// DOCS_BLOCK_END:hcl-interop
