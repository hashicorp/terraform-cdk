import { Testing, TerraformStack, TerraformOutput } from "../lib";
import { TestResource, TestProvider } from "./helper";
import { TerraformVariable } from "../lib/terraform-variable";

test("number output", () => {
  const app = Testing.app();
  const stack = new TerraformStack(app, "test");

  new TerraformOutput(stack, "test-output", {
    value: 1,
  });
  expect(Testing.synth(stack)).toMatchSnapshot();
});

test("string output", () => {
  const app = Testing.app();
  const stack = new TerraformStack(app, "test");

  new TerraformOutput(stack, "test-output", {
    value: "1",
  });
  expect(Testing.synth(stack)).toMatchSnapshot();
});

test("boolean output", () => {
  const app = Testing.app();
  const stack = new TerraformStack(app, "test");

  new TerraformOutput(stack, "test-output", {
    value: true,
  });
  expect(Testing.synth(stack)).toMatchSnapshot();
});

test("map output", () => {
  const app = Testing.app();
  const stack = new TerraformStack(app, "test");

  new TerraformOutput(stack, "test-output", {
    value: { foo: "bar" },
  });
  expect(Testing.synth(stack)).toMatchSnapshot();
});

test("list output", () => {
  const app = Testing.app();
  const stack = new TerraformStack(app, "test");

  new TerraformOutput(stack, "test-output", {
    value: ["foo", "bar"],
  });
  expect(Testing.synth(stack)).toMatchSnapshot();
});

test("description output", () => {
  const app = Testing.app();
  const stack = new TerraformStack(app, "test");

  new TerraformOutput(stack, "test-output", {
    value: 1,
    description: "test-description",
  });
  expect(Testing.synth(stack)).toMatchSnapshot();
});

test("sensitive output", () => {
  const app = Testing.app();
  const stack = new TerraformStack(app, "test");

  new TerraformOutput(stack, "test-output", {
    value: 1,
    sensitive: true,
  });
  expect(Testing.synth(stack)).toMatchSnapshot();
});

test("dependent output", () => {
  const app = Testing.app();
  const stack = new TerraformStack(app, "test");

  new TestProvider(stack, "provider", {});
  const resource = new TestResource(stack, "weird-long-running-resource", {
    name: "foo",
  });

  new TerraformOutput(stack, "test-output", {
    value: 1,
    dependsOn: [resource],
  });

  expect(Testing.synth(stack)).toMatchSnapshot();
});

test("variable output", () => {
  const app = Testing.app();
  const stack = new TerraformStack(app, "test");

  const variable = new TerraformVariable(stack, "test-variable", {});

  new TerraformOutput(stack, "test-output", {
    value: variable.value,
  });

  expect(Testing.synth(stack)).toMatchSnapshot();
});
