import { Testing, TerraformStack, TerraformOutput, Fn } from "../lib";
import { TerraformVariable } from "../lib/terraform-variable";

test("static values", () => {
  const app = Testing.app();
  const stack = new TerraformStack(app, "test");

  new TerraformOutput(stack, "test-output", {
    value: Fn.abs(-42),
  });
  expect(Testing.synth(stack)).toMatchSnapshot();
});

test("dynamic values", () => {
  const app = Testing.app();
  const stack = new TerraformStack(app, "test");

  const variable = new TerraformVariable(stack, "test-var", {
    type: "number",
  });

  new TerraformOutput(stack, "test-output", {
    value: Fn.abs(variable.value),
  });
  expect(Testing.synth(stack)).toMatchSnapshot();
});

test("spreaded mixed values", () => {
  const app = Testing.app();
  const stack = new TerraformStack(app, "test");

  const variable = new TerraformVariable(stack, "test-var", {
    type: "number",
  });

  new TerraformOutput(stack, "test-output", {
    value: Fn.max(10, variable.value, 200),
  });
  expect(Testing.synth(stack)).toMatchSnapshot();
});

test("spreaded token value", () => {
  const app = Testing.app();
  const stack = new TerraformStack(app, "test");

  const variable = new TerraformVariable(stack, "test-var", {
    type: "list(number)",
  });

  new TerraformOutput(stack, "test-output", {
    value: Fn.max(variable.value),
  });
  expect(Testing.synth(stack)).toMatchSnapshot();
});

test("string values", () => {
  const app = Testing.app();
  const stack = new TerraformStack(app, "test");

  new TerraformOutput(stack, "test-output", {
    value: Fn.parseInt("-210", 10),
  });
  expect(Testing.synth(stack)).toMatchSnapshot();
});

test("mixed string spreads values", () => {
  const app = Testing.app();
  const stack = new TerraformStack(app, "test");

  const variable = new TerraformVariable(stack, "test-var", {
    type: "number",
  });

  new TerraformOutput(stack, "test-output", {
    value: Fn.format(
      "There are %d out of %d lights are on in %s",
      variable.value,
      4,
      "Hamburg"
    ),
  });
  expect(Testing.synth(stack)).toMatchSnapshot();
});

test("combined functions", () => {
  const app = Testing.app();
  const stack = new TerraformStack(app, "test");

  const index = new TerraformVariable(stack, "index", {
    type: "number",
  });

  const list = new TerraformVariable(stack, "list", {
    type: `list(object({
      internal = number
      external = number
      protocol = string
    }))`,
  });

  new TerraformOutput(stack, "test-output", {
    value: Fn.try(
      Fn.lookup(Fn.element(list.value, index.value), "internal", "waaat"),
      Fn.timestamp(),
      Fn.uuid()
    ),
  });

  expect(Testing.synth(stack)).toMatchSnapshot();
});
