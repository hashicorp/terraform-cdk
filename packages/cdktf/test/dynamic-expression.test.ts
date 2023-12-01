// Copyright (c) HashiCorp, Inc
// SPDX-License-Identifier: MPL-2.0
import { Testing, TerraformStack, TerraformIterator, ref } from "../lib";
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

test("dynamic expressions are properly rendered for resources for complex lists", () => {
  const app = Testing.app();
  const stack = new TerraformStack(app, "test");
  new TestProvider(stack, "provider", {});

  const it = TerraformIterator.fromComplexList(
    ref("var.list") as any,
    "non_computed_key"
  );

  new TestResource(stack, "test", {
    name: "foo",
    listAttribute: it.dynamic({ name: it.getString("name") }),
  });

  const res = JSON.parse(Testing.synth(stack));

  const expected = {
    name: "foo",
    list_attribute: '${[ for key, val in var.list: {"name" = val.name}]}',
  };
  expect(res).toHaveProperty("resource.test_resource.test", expected);
});
