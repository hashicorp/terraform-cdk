// Copyright (c) HashiCorp, Inc
// SPDX-License-Identifier: MPL-2.0
import {
  Testing,
  TerraformStack,
  TerraformIterator,
  Fn,
  TerraformHclModule,
} from "../lib";
import { TestResource } from "./helper";
import { TestDataSource } from "./helper/data-source";

test("iterator inline list", () => {
  const app = Testing.app();
  const stack = new TerraformStack(app, "test");

  const it = TerraformIterator.fromList(["a", "b", "c"]);

  new TestResource(stack, "test", {
    forEach: it,
    name: it.value,
  });

  const synth = JSON.parse(Testing.synth(stack));

  expect(synth).toHaveProperty(
    "resource.test_resource.test.for_each",
    '${toset(["a", "b", "c"])}'
  );
  expect(synth).toHaveProperty(
    "resource.test_resource.test.name",
    "${each.value}"
  );
});

test("iterator list attribute", () => {
  const app = Testing.app();
  const stack = new TerraformStack(app, "test");

  const input = new TestResource(stack, "input", { name: "foo" });

  const it = TerraformIterator.fromList(input.listValue);

  new TestResource(stack, "test", {
    forEach: it,
    name: it.value,
  });

  const synth = JSON.parse(Testing.synth(stack));

  expect(synth).toHaveProperty(
    "resource.test_resource.test.for_each",
    "${toset(test_resource.input.list_value)}"
  );
  expect(synth).toHaveProperty(
    "resource.test_resource.test.name",
    "${each.value}"
  );
});

test("iterator inline map", () => {
  const app = Testing.app();
  const stack = new TerraformStack(app, "test");

  const it = TerraformIterator.fromMap({ a: "aa", b: "bb", c: "cc" });

  new TestResource(stack, "test", {
    forEach: it,
    name: it.value,
    tags: { resource_map_key: it.key },
  });

  const synth = JSON.parse(Testing.synth(stack));

  expect(synth).toHaveProperty("resource.test_resource.test.for_each", {
    a: "aa",
    b: "bb",
    c: "cc",
  });
  expect(synth).toHaveProperty(
    "resource.test_resource.test.name",
    "${each.value}"
  );
  expect(synth).toHaveProperty("resource.test_resource.test.tags", {
    resource_map_key: "${each.key}",
  });
});

test("iterator map attribute", () => {
  const app = Testing.app();
  const stack = new TerraformStack(app, "test");

  const input = new TestResource(stack, "input", { name: "foo" });

  const it = TerraformIterator.fromMap(input.stringMap);

  new TestResource(stack, "test", {
    forEach: it,
    name: it.value,
    tags: { resource_map_key: it.key },
  });

  const synth = JSON.parse(Testing.synth(stack));

  expect(synth).toHaveProperty(
    "resource.test_resource.test.for_each",
    "${test_resource.input.string_map}"
  );
  expect(synth).toHaveProperty(
    "resource.test_resource.test.name",
    "${each.value}"
  );
  expect(synth).toHaveProperty("resource.test_resource.test.tags", {
    resource_map_key: "${each.key}",
  });
});

test("iterator access nested types", () => {
  const app = Testing.app();
  const stack = new TerraformStack(app, "test");

  const input = new TestResource(stack, "input", { name: "foo" });

  // listValue is a list of strings but we don't care (would fail later in TF,
  // but works long enough to check whether it would do the right thing)
  const it = TerraformIterator.fromList(input.listValue);

  new TestResource(stack, "test", {
    forEach: it,
    name: "foo",
    tags: {
      boolean_map: Fn.lookup(it.getBooleanMap("map"), "a", false),
      list: Fn.join(",", it.getList("list_attribute")),
      map: Fn.lookup(it.getMap("map"), "a", "default"),
      number: Fn.tostring(it.getNumber("number_attribute")),
      number_list: Fn.tostring(
        Fn.sum(it.getNumberList("number_list_attribute"))
      ),
      number_map: Fn.lookup(it.getNumberMap("map"), "a", 1),
      string: it.getString("string_attribute"),
      string_map: Fn.lookup(it.getString("map"), "a", "default"),
    },
  });

  const synth = JSON.parse(Testing.synth(stack));

  expect(synth).toHaveProperty(
    "resource.test_resource.test.for_each",
    "${toset(test_resource.input.list_value)}"
  );
  expect(synth.resource.test_resource.test.tags).toMatchInlineSnapshot(`
    Object {
      "boolean_map": "\${lookup(each.value[\\"map\\"], \\"a\\", false)}",
      "list": "\${join(\\",\\", each.value[\\"list_attribute\\"])}",
      "map": "\${lookup(each.value[\\"map\\"], \\"a\\", \\"default\\")}",
      "number": "\${tostring(each.value[\\"number_attribute\\"])}",
      "number_list": "\${tostring(sum(each.value[\\"number_list_attribute\\"]))}",
      "number_map": "\${lookup(each.value[\\"map\\"], \\"a\\", 1)}",
      "string": "\${each.value[\\"string_attribute\\"]}",
      "string_map": "\${lookup(each.value[\\"map\\"], \\"a\\", \\"default\\")}",
    }
  `);
});

test("iterator on a data source", () => {
  const app = Testing.app();
  const stack = new TerraformStack(app, "test");

  const it = TerraformIterator.fromList(["a", "b", "c"]);

  new TestDataSource(stack, "test", {
    forEach: it,
    name: it.value,
  });

  const synth = JSON.parse(Testing.synth(stack));

  expect(synth).toHaveProperty(
    "data.test_data_source.test.for_each",
    '${toset(["a", "b", "c"])}'
  );
  expect(synth).toHaveProperty(
    "data.test_data_source.test.name",
    "${each.value}"
  );
});

test("iterator on a module", () => {
  const app = Testing.app({ fakeCdktfJsonPath: true });
  const stack = new TerraformStack(app, "test");

  const it = TerraformIterator.fromList(["a", "b", "c"]);

  new TerraformHclModule(stack, "test", {
    forEach: it,
    source: "./test/fixtures/hcl-module/",
    variables: {
      param1: it.value,
    },
  });

  const synth = JSON.parse(Testing.synth(stack));

  expect(synth).toHaveProperty(
    "module.test.for_each",
    '${toset(["a", "b", "c"])}'
  );
  expect(synth).toHaveProperty("module.test.param1", "${each.value}");
});

test("iterator throws if both count and forEach are set on resources", () => {
  const app = Testing.app();
  const stack = new TerraformStack(app, "test");

  const it = TerraformIterator.fromList(["a", "b", "c"]);

  new TestResource(stack, "resource", {
    count: 2,
    forEach: it,
    name: it.value,
  });

  expect(() => Testing.synth(stack)).toThrowErrorMatchingInlineSnapshot(
    `"forEach and count are both set, but they are mutually exclusive. You can only use either of them. Check the resource at path: test/resource"`
  );
});

test("iterator throws if both count and forEach are set on data sources", () => {
  const app = Testing.app();
  const stack = new TerraformStack(app, "test");

  const it = TerraformIterator.fromList(["a", "b", "c"]);

  new TestDataSource(stack, "data", {
    count: 2,
    forEach: it,
    name: it.value,
  });

  expect(() => Testing.synth(stack)).toThrowErrorMatchingInlineSnapshot(
    `"forEach and count are both set, but they are mutually exclusive. You can only use either of them. Check the data source at path: test/data"`
  );
});

test("iterator across stacks", () => {
  const app = Testing.app();
  const sourceStack = new TerraformStack(app, "source");
  const targetStack = new TerraformStack(app, "target");

  const input = new TestResource(sourceStack, "input", { name: "foo" });

  const it = TerraformIterator.fromList(input.listValue);

  new TestResource(targetStack, "test", {
    forEach: it,
    name: it.value,
  });

  sourceStack.prepareStack();
  targetStack.prepareStack();

  const sourceSynth = JSON.parse(Testing.synth(sourceStack));
  const targetSynth = JSON.parse(Testing.synth(targetStack));

  expect(targetSynth).toHaveProperty(
    "resource.test_resource.test.for_each",
    "${toset(data.terraform_remote_state.cross-stack-reference-input-source.outputs.cross-stack-output-test_resourceinputlist_value)}"
  );
  expect(targetSynth).toHaveProperty(
    "resource.test_resource.test.name",
    "${each.value}"
  );
  expect(sourceSynth).toHaveProperty(
    "output.cross-stack-output-test_resourceinputlist_value.value",
    "${test_resource.input.list_value}"
  );
});
