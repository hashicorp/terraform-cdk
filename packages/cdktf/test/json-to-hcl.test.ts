// Copyright (c) HashiCorp, Inc
// SPDX-License-Identifier: MPL-2.0
import { Testing, TerraformStack, TerraformLocal } from "../lib";

test("string local", () => {
  const app = Testing.app();
  const stack = new TerraformStack(app, "test");

  new TerraformLocal(stack, "greeting", "Hello, ${var.name}");

  expect(Testing.synth(stack)).toMatchSnapshot();
});
