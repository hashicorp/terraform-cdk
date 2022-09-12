// Copyright (c) HashiCorp, Inc
// SPDX-License-Identifier: MPL-2.0
import { Testing, TerraformStack, TerraformIterator } from "../lib";
import { TestProvider, TestResource } from "./helper";
import { TestDataSource } from "./helper/data-source";

test("dynamic blocks are properly rendered for resources", () => {
  const app = Testing.app();
  const stack = new TerraformStack(app, "test");
  new TestProvider(stack, "provider", {});

  const it = TerraformIterator.fromList(["a", "b", "c"]);

  new TestResource(stack, "test", {
    name: "foo",
    listBlock: it.dynamic({ name: it.value }),
  });

  const res = JSON.parse(Testing.synth(stack));

  const expected = {
    name: "foo",
    dynamic: {
      list_block: {
        content: {
          name: "${each.value}",
        },
        for_each: '${toset(["a", "b", "c"])}',
        iterator: "each",
      },
    },
  };
  expect(res).toHaveProperty("resource.test_resource.test", expected);
});

test("dynamic blocks are properly rendered for data sources", () => {
  const app = Testing.app();
  const stack = new TerraformStack(app, "test");
  new TestProvider(stack, "provider", {});

  const it = TerraformIterator.fromList(["a", "b", "c"]);

  new TestDataSource(stack, "test", {
    name: "foo",
    listBlock: it.dynamic({ name: it.value }),
  });

  const res = JSON.parse(Testing.synth(stack));

  const expected = {
    name: "foo",
    dynamic: {
      list_block: {
        content: {
          name: "${each.value}",
        },
        for_each: '${toset(["a", "b", "c"])}',
        iterator: "each",
      },
    },
  };
  expect(res).toHaveProperty("data.test_data_source.test", expected);
});

test("dynamic blocks are properly rendered for providers", () => {
  const app = Testing.app();
  const stack = new TerraformStack(app, "test");

  const it = TerraformIterator.fromList(["a", "b", "c"]);

  new TestProvider(stack, "test", {
    listBlock: it.dynamic({ name: it.value }),
  });

  const res = JSON.parse(Testing.synth(stack));

  expect(res).toHaveProperty("provider.test", [
    {
      dynamic: {
        list_block: {
          content: {
            name: "${each.value}",
          },
          for_each: '${toset(["a", "b", "c"])}',
          iterator: "each",
        },
      },
    },
  ]);
});
