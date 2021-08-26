import { TerraformStack, Testing, Token } from "../lib";
import { TestResource } from "./helper";
import { TestDataSource } from "./helper/data-source";
import { TestProvider } from "./helper/provider";

test("minimal configuration", () => {
  const app = Testing.app();
  const stack = new TerraformStack(app, "test");
  new TestProvider(stack, "provider", {});

  new TestDataSource(stack, "test", {
    name: "foo",
  });
  expect(Testing.synth(stack)).toMatchSnapshot();
});

test("with complex computed list", () => {
  const app = Testing.app();
  const stack = new TerraformStack(app, "test-data-source");
  new TestProvider(stack, "provider", {});

  const dataSource = new TestDataSource(stack, "test", {
    name: "foo",
  });
  new TestResource(stack, "test-resource", {
    name: dataSource.complexComputedList("0").id,
  });

  expect(Testing.synth(stack)).toMatchSnapshot();
});

test("with string map", () => {
  const app = Testing.app();
  const stack = new TerraformStack(app, "test-data-source");
  new TestProvider(stack, "provider", {});

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
  new TestProvider(stack, "provider", {});

  const dataSource = new TestDataSource(stack, "test", {
    name: "foo",
  });
  new TestResource(stack, "test-resource", {
    name: Token.asString(dataSource.numberMap("id")),
  });

  expect(Testing.synth(stack)).toMatchSnapshot();
});

test("with boolean map", () => {
  const app = Testing.app();
  const stack = new TerraformStack(app, "test-data-source");
  new TestProvider(stack, "provider", {});

  const dataSource = new TestDataSource(stack, "test", {
    name: "foo",
  });
  new TestResource(stack, "test-resource", {
    name: dataSource.booleanMap("id").toString(),
  });

  expect(Testing.synth(stack)).toMatchSnapshot();
});

test("dependent data source", () => {
  const app = Testing.app();
  const stack = new TerraformStack(app, "test");
  new TestProvider(stack, "provider", {});

  const resource = new TestResource(stack, "resource", {
    name: "foo",
  });

  new TestDataSource(stack, "data_source", {
    name: "foo",
    dependsOn: [resource],
  });

  expect(Testing.synth(stack)).toMatchSnapshot();
});
