import { TerraformStack, Testing } from "../lib";
import { TestResource } from "./helper";
import { TestDataSource } from "./helper/data-source";

test("minimal configuration", () => {
  const app = Testing.app();
  const stack = new TerraformStack(app, "test");

  new TestDataSource(stack, "test", {
    name: "foo",
  });
  expect(Testing.synth(stack)).toMatchSnapshot();
});

test("with complex computed list", () => {
  const app = Testing.app();
  const stack = new TerraformStack(app, "test-data-source");

  const dataSource = new TestDataSource(stack, "test", {
    name: "foo",
  });
  new TestResource(stack, "test-resource", {
    name: dataSource.complexComputedList(0).id,
  });

  expect(Testing.synth(stack)).toMatchSnapshot();
});

test("with string map", () => {
  const app = Testing.app();
  const stack = new TerraformStack(app, "test-data-source");

  const dataSource = new TestDataSource(stack, "test", {
    name: "foo",
  });
  new TestResource(stack, "test-resource", {
    name: dataSource.stringMap("id"),
  });

  expect(Testing.synth(stack)).toMatchSnapshot();
});

test("with number map", () => {
  const app = Testing.app();
  const stack = new TerraformStack(app, "test-data-source");

  const dataSource = new TestDataSource(stack, "test", {
    name: "foo",
  });
  new TestResource(stack, "test-resource", {
    name: dataSource.numberMap("id").terraformReference,
  });

  expect(Testing.synth(stack)).toMatchSnapshot();
});

test("with boolean map", () => {
  const app = Testing.app();
  const stack = new TerraformStack(app, "test-data-source");

  const dataSource = new TestDataSource(stack, "test", {
    name: "foo",
  });
  new TestResource(stack, "test-resource", {
    name: dataSource.booleanMap("id").terraformReference,
  });

  expect(Testing.synth(stack)).toMatchSnapshot();
});

test("dependent data source", () => {
  const app = Testing.app();
  const stack = new TerraformStack(app, "test");

  const resource = new TestResource(stack, "resource", {
    name: "foo",
  });

  new TestDataSource(stack, "data_source", {
    name: "foo",
    dependsOn: [resource],
  });

  expect(Testing.synth(stack)).toMatchSnapshot();
});
