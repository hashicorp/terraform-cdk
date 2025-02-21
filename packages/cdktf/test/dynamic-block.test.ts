// Copyright (c) HashiCorp, Inc
// SPDX-License-Identifier: MPL-2.0
import { Testing, TerraformStack, TerraformIterator, ref } from "../lib";
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

test("chained iterators used in dynamic blocks", () => {
  const app = Testing.app();
  const stack = new TerraformStack(app, "test");
  const it = TerraformIterator.fromList(["a", "b", "c"]);
  const source = new TestResource(stack, "test", {
    forEach: it,
    name: "foo",
  });

  const chainedIt = TerraformIterator.fromResources(source);
  new TestResource(stack, "chained", {
    name: "foo",
    listBlock: chainedIt.dynamic({ name: chainedIt.getString("string_value") }),
  });

  const synth = JSON.parse(Testing.synth(stack));
  expect(synth).toHaveProperty(
    "resource.test_resource.chained.dynamic.list_block.for_each",
    "${test_resource.test}",
  );
  expect(synth).toHaveProperty(
    "resource.test_resource.chained.dynamic.list_block.content",
    { name: "${each.value.string_value}" },
  );
});

test("dynamic blocks are properly rendered for resources for complex lists", () => {
  const app = Testing.app();
  const stack = new TerraformStack(app, "test");
  new TestProvider(stack, "provider", {});

  const it = TerraformIterator.fromComplexList(
    ref("var.list") as any,
    "non_computed_key",
  );

  new TestResource(stack, "test", {
    name: "foo",
    listBlock: it.dynamic({ name: it.getString("name") }),
  });

  const res = JSON.parse(Testing.synth(stack));

  const expected = {
    name: "foo",
    dynamic: {
      list_block: {
        content: {
          name: "${each.value.name}",
        },
        for_each:
          "${{ for key, val in var.list: val.non_computed_key => val }}",
        iterator: "each",
      },
    },
  };
  expect(res).toHaveProperty("resource.test_resource.test", expected);
});
