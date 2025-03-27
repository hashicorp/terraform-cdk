// Copyright (c) HashiCorp, Inc
// SPDX-License-Identifier: MPL-2.0
import {
  Testing,
  TerraformStack,
  TerraformIterator,
  Fn,
  TerraformHclModule,
  TerraformCount,
  TerraformVariable,
  Token,
} from "../lib";
import { OtherTestResource, TestResource } from "./helper";
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
    '${toset(["a", "b", "c"])}',
  );
  expect(synth).toHaveProperty(
    "resource.test_resource.test.name",
    "${each.value}",
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
    "${toset(test_resource.input.list_value)}",
  );
  expect(synth).toHaveProperty(
    "resource.test_resource.test.name",
    "${each.value}",
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
    "${each.value}",
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
    "${test_resource.input.string_map}",
  );
  expect(synth).toHaveProperty(
    "resource.test_resource.test.name",
    "${each.value}",
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
        Fn.sum(it.getNumberList("number_list_attribute")),
      ),
      number_map: Fn.lookup(it.getNumberMap("map"), "a", 1),
      string: it.getString("string_attribute"),
      string_map: Fn.lookup(it.getString("map"), "a", "default"),
    },
  });

  const synth = JSON.parse(Testing.synth(stack));

  expect(synth).toHaveProperty(
    "resource.test_resource.test.for_each",
    "${toset(test_resource.input.list_value)}",
  );
  expect(synth.resource.test_resource.test.tags).toMatchInlineSnapshot(`
    {
      "boolean_map": "\${each.value.map.a}",
      "list": "\${join(",", each.value.list_attribute)}",
      "map": "\${lookup(each.value.map, "a", "default")}",
      "number": "\${tostring(each.value.number_attribute)}",
      "number_list": "\${tostring(sum(each.value.number_list_attribute))}",
      "number_map": "\${lookup(each.value.map, "a", 1)}",
      "string": "\${each.value.string_attribute}",
      "string_map": "\${lookup(each.value.map, "a", "default")}",
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
    '${toset(["a", "b", "c"])}',
  );
  expect(synth).toHaveProperty(
    "data.test_data_source.test.name",
    "${each.value}",
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
    '${toset(["a", "b", "c"])}',
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
    `"forEach and count are both set, but they are mutually exclusive. You can only use either of them. Check the resource at path: test/resource"`,
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
    `"forEach and count are both set, but they are mutually exclusive. You can only use either of them. Check the data source at path: test/data"`,
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
    "${toset(data.terraform_remote_state.cross-stack-reference-input-source.outputs.cross-stack-output-test_resourceinputlist_value)}",
  );
  expect(targetSynth).toHaveProperty(
    "resource.test_resource.test.name",
    "${each.value}",
  );
  expect(sourceSynth).toHaveProperty(
    "output.cross-stack-output-test_resourceinputlist_value.value",
    "${test_resource.input.list_value}",
  );
});

test("iterator chaining on resources", () => {
  const app = Testing.app();
  const stack = new TerraformStack(app, "test");
  const input = new TestResource(stack, "input", { name: "foo" });
  const it = TerraformIterator.fromList(input.listValue);

  const resource = new TestResource(stack, "test", {
    forEach: it,
    name: it.value,
  });

  const chainedIt = TerraformIterator.fromList(resource.listValue);
  new TestResource(stack, "chained", {
    forEach: chainedIt,
    name: chainedIt.value,
  });

  const synth = JSON.parse(Testing.synth(stack));

  expect(synth).toHaveProperty(
    "resource.test_resource.test.for_each",
    "${toset(test_resource.input.list_value)}",
  );
  expect(synth).toHaveProperty(
    "resource.test_resource.test.name",
    "${each.value}",
  );

  // Chained properties
  expect(synth).toHaveProperty(
    "resource.test_resource.chained.for_each",
    "${toset(test_resource.test.*.list_value)}",
  );
  expect(synth).toHaveProperty(
    "resource.test_resource.chained.name",
    "${each.value}",
  );
});

test("iterator chaining on data sources", () => {
  const app = Testing.app();
  const stack = new TerraformStack(app, "test");
  const it = TerraformIterator.fromList(["a", "b", "c"]);

  const data = new TestDataSource(stack, "test", {
    forEach: it,
    name: it.value,
  });

  const chainedIt = TerraformIterator.fromList(data.listValue);
  new TestDataSource(stack, "chained", {
    forEach: chainedIt,
    name: chainedIt.value,
  });

  const synth = JSON.parse(Testing.synth(stack));

  expect(synth).toHaveProperty("data.test_data_source.test.for_each");
  expect(synth).toHaveProperty(
    "data.test_data_source.test.name",
    "${each.value}",
  );

  // Chained properties
  expect(synth).toHaveProperty(
    "data.test_data_source.chained.for_each",
    "${toset(data.test_data_source.test.*.list_value)}",
  );
  expect(synth).toHaveProperty(
    "data.test_data_source.chained.name",
    "${each.value}",
  );
});

test("iterator can be accessed from Complex List", () => {
  const app = Testing.app();
  const stack = new TerraformStack(app, "test");

  const resource = new OtherTestResource(stack, "test", {});

  const it = resource.complexComputedList.allWithMapKey("name");
  new TestDataSource(stack, "iterated", {
    forEach: it,
    name: it.value,
  });

  const synth = JSON.parse(Testing.synth(stack));

  expect(synth).toHaveProperty(
    "data.test_data_source.iterated.for_each",
    "${{ for key, val in other_test_resource.test.complex_computed_list: val.name => val }}",
  );
  expect(synth).toHaveProperty(
    "data.test_data_source.iterated.name",
    "${each.value}",
  );
});

test("count can count values", () => {
  const app = Testing.app();
  const stack = new TerraformStack(app, "test");
  const it = TerraformCount.of(3);

  new TestDataSource(stack, "test", {
    count: it,
    name: `data${it.index}`,
  });

  const synth = JSON.parse(Testing.synth(stack));

  expect(synth).toHaveProperty("data.test_data_source.test.count", 3);
  expect(synth).toHaveProperty(
    "data.test_data_source.test.name",
    "data${count.index}",
  );
});

test("count can count references", () => {
  const app = Testing.app();
  const stack = new TerraformStack(app, "test");

  const resource = new TestResource(stack, "test", { name: "foo" });
  const it = TerraformCount.of(resource.numericValue);

  new TestDataSource(stack, "test_data", {
    count: it,
    name: `data${it.index}`,
  });

  const synth = JSON.parse(Testing.synth(stack));

  expect(synth).toHaveProperty(
    "data.test_data_source.test_data.count",
    "${test_resource.test.numeric_value}",
  );
  expect(synth).toHaveProperty(
    "data.test_data_source.test_data.name",
    "data${count.index}",
  );
});

test("chained iterators used in for_each", () => {
  const app = Testing.app();
  const stack = new TerraformStack(app, "test");
  const it = TerraformIterator.fromList(["a", "b", "c"]);
  const source = new TestResource(stack, "test", {
    forEach: it,
    name: "foo",
  });

  const chainedIt = TerraformIterator.fromResources(source);
  new TestResource(stack, "chained", {
    forEach: chainedIt,
    name: chainedIt.getString("string_value"),
  });

  const synth = JSON.parse(Testing.synth(stack));
  expect(synth).toHaveProperty(
    "resource.test_resource.chained.for_each",
    "${test_resource.test}",
  );
  expect(synth).toHaveProperty(
    "resource.test_resource.chained.name",
    "${each.value.string_value}",
  );
});

test("chained iterators from singular resources", () => {
  const app = Testing.app();
  const stack = new TerraformStack(app, "test");
  const source = new TestResource(stack, "test", {
    name: "foo",
  });

  expect(() => {
    TerraformIterator.fromResources(source);
  }).toThrowErrorMatchingInlineSnapshot(`
    "Cannot create an iterator from a resource without a forEach argument. If you want to create more instances of this resource, pass an iterator to the forEach argument of the resource first.
      "
  `);
});

test("chained iterators used with count", () => {
  const app = Testing.app();
  const stack = new TerraformStack(app, "test");

  const resource = new TestResource(stack, "test", { name: "foo" });
  const it = TerraformCount.of(resource.numericValue);

  const datasFromCount = new TestDataSource(stack, "test_data", {
    count: it,
    name: `data${it.index}`,
  });

  expect(() => {
    TerraformIterator.fromDataSources(datasFromCount);
  }).toThrowErrorMatchingInlineSnapshot(`
    "You cannot create an iterator from a resource with a count argument.
    Instead, reuse this resource's TerraformCount instance in the resource you want to use as an iterator.

    If you want to use an iterator to populate a list attribute, replace the count on the resource with an iterator passed into the forEach argument."
  `);
});

test("for expressions from iterators", () => {
  const app = Testing.app();
  const stack = new TerraformStack(app, "test");
  const variable = new TerraformVariable(stack, "list", {});
  const it = TerraformIterator.fromList(variable.listValue);
  new TestResource(stack, "test", {
    name: "foo",
    tags: {
      // Take a value from items of the list
      arnProperties: Token.asString(it.pluckProperty("arn")),
      // Filter out empty values
      owners: Token.asString(
        it.forExpressionForList(`val.owner if val.owner != ""`),
      ),

      // Filter out teams with no members and join them with a comma
      teams: Token.asString(
        it.forExpressionForMap(
          "val.teamName",
          `join(",", val.teamMembers) if length(val.teamMembers) > 0`,
        ),
      ),
      // Get the keys of the map
      keys: Token.asString(it.keys()),
    },
  });

  const synth = JSON.parse(Testing.synth(stack));
  expect(synth).toHaveProperty(
    "resource.test_resource.test.tags.arnProperties",
    "${[ for key, val in toset(var.list): val.arn]}",
  );
  expect(synth).toHaveProperty(
    "resource.test_resource.test.tags.owners",
    '${[ for key, val in toset(var.list): val.owner if val.owner != ""]}',
  );

  expect(synth).toHaveProperty(
    "resource.test_resource.test.tags.teams",
    `\${{ for key, val in toset(var.list): val.teamName => join(",", val.teamMembers) if length(val.teamMembers) > 0 }}`,
  );
  expect(synth).toHaveProperty(
    "resource.test_resource.test.tags.keys",
    "${[ for key, val in toset(var.list): key]}",
  );
});
