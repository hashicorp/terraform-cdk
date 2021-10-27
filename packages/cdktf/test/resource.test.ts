import { Testing, TerraformStack } from "../lib";
import { TestProvider, TestResource, OtherTestResource } from "./helper";
import { TestDataSource } from "./helper/data-source";
import { TerraformOutput } from "../lib/terraform-output";

test("minimal configuration", () => {
  const app = Testing.app();
  const stack = new TerraformStack(app, "test");
  new TestProvider(stack, "provider", {});

  new TestResource(stack, "test", {
    name: "foo",
  });
  expect(Testing.synth(stack)).toMatchSnapshot();
});

test("with provider alias", () => {
  const app = Testing.app();
  const stack = new TerraformStack(app, "test");

  new TestProvider(stack, "provider", {
    accessKey: "1",
  });

  const provider = new TestProvider(stack, "aliased-provider", {
    alias: "foo",
    accessKey: "123",
  });

  new TestResource(stack, "test", {
    name: "bar",
    provider,
  });

  expect(Testing.synth(stack)).toMatchSnapshot();
});

test("provider setter", () => {
  const app = Testing.app();
  const stack = new TerraformStack(app, "test");

  const provider = new TestProvider(stack, "provider", {
    accessKey: "1",
  });

  const resource = new TestResource(stack, "test", {
    name: "bar",
  });

  resource.provider = provider;

  expect(Testing.synth(stack)).toMatchSnapshot();
});

test("resource fqn", () => {
  const app = Testing.app();
  const stack = new TerraformStack(app, "test");

  const resource = new TestResource(stack, "test", {
    name: "bar",
  });

  expect(resource.fqn).toEqual("test_resource.test");
});

test("serialize list interpolation", () => {
  const app = Testing.app();
  const stack = new TerraformStack(app, "tests");
  new TestProvider(stack, "provider", {});
  new TestProvider(stack, "other_provider", {
    type: "other",
  });

  const resource = new TestResource(stack, "test", {
    name: "bar",
  });

  const otherResource = new OtherTestResource(stack, "othertest", {});
  resource.names = otherResource.names;

  expect(Testing.synth(stack)).toMatchSnapshot();
});

test("with complex computed list", () => {
  const app = Testing.app();
  const stack = new TerraformStack(app, "tests");
  new TestProvider(stack, "provider", {});
  new TestProvider(stack, "other_provider", {
    type: "other",
  });

  const otherResource = new OtherTestResource(stack, "othertest", {});

  new TestResource(stack, "test", {
    name: otherResource.complexComputedList("0").id,
  });

  expect(Testing.synth(stack)).toMatchSnapshot();
});

test("do not change capitalization of tags", () => {
  const app = Testing.app();
  const stack = new TerraformStack(app, "tests");
  new TestProvider(stack, "provider", {});

  new TestResource(stack, "test", {
    name: "bar",
    tags: {
      Tag: "isWorking",
    },
  });

  expect(Testing.synth(stack)).toMatchSnapshot();
});

test("do not change capitalization of arbritary nested types", () => {
  const app = Testing.app();
  const stack = new TerraformStack(app, "tests");
  new TestProvider(stack, "provider", {});

  new TestResource(stack, "test", {
    name: "bar",
    nestedType: {
      Tag: "isDowncased",
    },
  });

  expect(Testing.synth(stack)).toMatchSnapshot();
});

test("dependent resource", () => {
  const app = Testing.app();
  const stack = new TerraformStack(app, "test");
  new TestProvider(stack, "provider", {});

  const dataSource = new TestDataSource(stack, "data_source", {
    name: "foo",
  });

  new TestResource(stack, "resource", {
    name: "foo",
    dependsOn: [dataSource],
  });

  expect(Testing.synth(stack)).toMatchSnapshot();
});

test("numeric attributes", () => {
  const app = Testing.app();
  const stack = new TerraformStack(app, "test");
  new TestProvider(stack, "provider", {});

  const foo = new TestResource(stack, "resource", {
    name: "foo",
  });

  new TerraformOutput(stack, "combined-string-number", {
    value: `${foo.stringValue} / 23.324 / ${foo.numericValue} / 42`,
  });

  expect(Testing.synth(stack)).toMatchSnapshot();
});

test("tokens as ids", () => {
  const app = Testing.app();
  const stack = new TerraformStack(app, "test");
  new TestProvider(stack, "provider", {});

  const foo = new TestResource(stack, "resource", {
    name: "foo",
  });

  expect(() => {
    new TestResource(stack, `resource-${foo.stringValue}`, {
      name: "foo",
    });
  }).toThrowErrorMatchingInlineSnapshot(
    `"You cannot use a Token (e.g. a reference to an attribute) as the id of a construct"`
  );
});
