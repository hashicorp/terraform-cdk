// Copyright (c) HashiCorp, Inc
// SPDX-License-Identifier: MPL-2.0
import { TerraformStack, TerraformOutput } from "cdktf";
import { CdktfApplication } from "./lib";

const dirApp = new CdktfApplication({
  cwd: process.cwd(),
});

const synthedDirApp = dirApp.synth();
synthedDirApp.plan();
synthedDirApp.deploy();

const inlineApp = new CdktfApplication({
  program(app) {
    const stack = new TerraformStack(app, "my-stack");
    new TerraformOutput(stack, "my-output", {
      value: "my-value",
    });
  },
});
const synthedInlineApp = inlineApp.synth();
synthedInlineApp.plan();
synthedInlineApp.deploy();
