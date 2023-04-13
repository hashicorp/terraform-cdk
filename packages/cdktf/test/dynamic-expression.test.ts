// Copyright (c) HashiCorp, Inc
// SPDX-License-Identifier: MPL-2.0
import { Testing, TerraformStack, TerraformIterator } from "../lib";
import { TestProvider, TestResource } from "./helper";

test("dynamic expressions are properly rendered for resources", () => {
  const app = Testing.app();
  const stack = new TerraformStack(app, "test");
  new TestProvider(stack, "provider", {});

  const it = TerraformIterator.fromList(["a", "b", "c"]);

  new TestResource(stack, "test", {
    name: "foo",
    listAttribute: it.dynamic({ name: it.value }),
  });

  const res = JSON.parse(Testing.synth(stack));

  const expected = {
    name: "foo",
    list_attribute:
      '${[ for key, val in toset(["a", "b", "c"]): {"name" = val}]}',
  };
  expect(res).toHaveProperty("resource.test_resource.test", expected);
});
