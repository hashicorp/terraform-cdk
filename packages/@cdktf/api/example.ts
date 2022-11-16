// Copyright (c) HashiCorp, Inc
// SPDX-License-Identifier: MPL-2.0
import { TerraformStack, TerraformOutput } from "cdktf";
import { Api } from "./lib";

const dirApp = Api.localApp(process.cwd());

dirApp.synth().then(async (synthedDirApp) => {
  const stack = synthedDirApp.stacks["my-stack"];

  const plan = await stack.plan();
  console.log(plan);
  await stack.deploy();
});

const inlineApp = Api.inlineApp({
  program: {
    produce(app) {
      const stack = new TerraformStack(app, "my-stack");
      new TerraformOutput(stack, "my-output", {
        value: "my-value",
      });
    },
  },
});

inlineApp.synth().then(async (synthedInlineApp) => {
  const stack = synthedInlineApp.stacks["my-stack"];

  const plan = await stack.plan();
  console.log(plan);
  await stack.deploy();

  // Run some tests
  await stack.destroy();
});
