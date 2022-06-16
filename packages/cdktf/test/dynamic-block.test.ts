import { Testing, TerraformStack, TerraformIterator, Fn } from "../lib";
import { TerraformDynamicBlock } from "../lib/terraform-dynamic-block";
import { TestProvider, TestResource } from "./helper";
import { TestDataSource } from "./helper/data-source";

test("dynamic blocks are properly rendered for resources", () => {
  const app = Testing.app();
  const stack = new TerraformStack(app, "test");
  new TestProvider(stack, "provider", {});

  const it = TerraformIterator.fromList(["a", "b", "c"]);

  // long version:
  new TestResource(stack, "test", {
    name: "foo",
    listBlock: new TerraformDynamicBlock({
      forEach: it,
      content: { name: it.value },
    }),
  });

  // short version:
  new TestResource(stack, "test2", {
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
  expect(res).toHaveProperty("resource.test_resource.test2", expected);
});

test("dynamic blocks are properly rendered for data sources", () => {
  const app = Testing.app();
  const stack = new TerraformStack(app, "test");
  new TestProvider(stack, "provider", {});

  const it = TerraformIterator.fromList(["a", "b", "c"]);

  // long version:
  new TestDataSource(stack, "test", {
    name: "foo",
    listBlock: new TerraformDynamicBlock({
      forEach: it,
      content: { name: it.value },
    }),
  });

  // short version:
  new TestDataSource(stack, "test2", {
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
  expect(res).toHaveProperty("data.test_data_source.test2", expected);
});

test("dynamic blocks are properly rendered for providers", () => {
  const app = Testing.app();
  const stack = new TerraformStack(app, "test");

  const it = TerraformIterator.fromList(["a", "b", "c"]);

  new TestProvider(stack, "test2", {
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

test("dynamic blocks throw an error if used incorrectly", () => {
  const app = Testing.app();
  const stack = new TerraformStack(app, "test");
  new TestProvider(stack, "provider", {});

  const it = TerraformIterator.fromList(["a", "b", "c"]);

  new TestResource(stack, "test2", {
    name: "foo",
    listBlock: Fn.toset(it.dynamic({ name: it.value })),
  });

  expect(() => Testing.synth(stack))
    .toThrowError(`Resolution error: Resolution error: Tried to directly resolve a TerraformDynamicBlock which is not supported.
This can happen if you pass the result of iterator.dynamic() to a Terraform function or to a property or construct that does not support dynamic blocks.
Dynamic blocks are only supported on block attributes of resources, data sources and providers at the moment.`);
});
