/**
 * Copyright (c) HashiCorp, Inc.
 * SPDX-License-Identifier: MPL-2.0
 */

import { App, Aspects, MigrateIds, TerraformStack, Testing } from "../lib";
import { TestModule } from "./helper";

describe("MigrateIds", () => {
  it("should add warning annoations for modules", () => {
    const app = Testing.stubVersion(new App({ stackTraces: false }));
    const stack = new TerraformStack(app, "staging");
    new TestModule(stack, "vpc", {
      moduleParameter: "moduleValue",
    });
    Aspects.of(stack).add(new MigrateIds());
    app.synth();

    expect(app.manifest.forStack(stack).annotations).toEqual([
      {
        constructPath: "staging/vpc",
        level: "@cdktf/warn",
        message: `Found module with new id vpc. Moving this module requires a manual state migration.
If this module has not been moved yet, run "terraform state mv module.staging_vpc_C4EA2553 module.vpc" in the output directory "cdktf.out/stacks/staging" to migrate the existing state to its new id.
Refer to the following page for more information: https://developer.hashicorp.com/terraform/cdktf/examples-and-guides/refactoring#moving-or-renaming-modules`,
      },
    ]);
  });
});
