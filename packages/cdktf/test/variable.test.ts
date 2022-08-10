// Copyright (c) HashiCorp, Inc
// SPDX-License-Identifier: MPL-2.0
import {
  Testing,
  TerraformStack,
  TerraformVariable,
  VariableType,
  Fn,
} from "../lib";
import { TestResource } from "./helper";
import { TestProvider } from "./helper/provider";

test("string type", () => {
  const app = Testing.app();
  const stack = new TerraformStack(app, "test");

  new TerraformVariable(stack, "test-variable", {
    type: "string",
  });
  expect(Testing.synth(stack)).toMatchSnapshot();
});

test("number type", () => {
  const app = Testing.app();
  const stack = new TerraformStack(app, "test");

  new TerraformVariable(stack, "test-variable", {
    type: "number",
  });
  expect(Testing.synth(stack)).toMatchSnapshot();
});

test("bool type", () => {
  const app = Testing.app();
  const stack = new TerraformStack(app, "test");

  new TerraformVariable(stack, "test-variable", {
    type: "bool",
  });
  expect(Testing.synth(stack)).toMatchSnapshot();
});

test("any type", () => {
  const app = Testing.app();
  const stack = new TerraformStack(app, "test");

  new TerraformVariable(stack, "test-variable", {
    type: VariableType.ANY,
  });
  expect(Testing.synth(stack)).toMatchSnapshot();
});

test("default value", () => {
  const app = Testing.app();
  const stack = new TerraformStack(app, "test");

  new TerraformVariable(stack, "test-variable", {
    default: "my-val",
  });
  expect(Testing.synth(stack)).toMatchSnapshot();
});

test("description", () => {
  const app = Testing.app();
  const stack = new TerraformStack(app, "test");

  new TerraformVariable(stack, "test-variable", {
    description: "A Test Variable",
  });
  expect(Testing.synth(stack)).toMatchSnapshot();
});

test("collection type", () => {
  const app = Testing.app();
  const stack = new TerraformStack(app, "test");

  new TerraformVariable(stack, "test-variable", {
    type: "list(string)",
  });
  expect(Testing.synth(stack)).toMatchSnapshot();
});

test("set collection type", () => {
  const app = Testing.app();
  const stack = new TerraformStack(app, "test");

  new TerraformVariable(stack, "test-variable", {
    type: VariableType.SET_NUMBER,
  });
  expect(Testing.synth(stack)).toMatchSnapshot();
});

test("map collection type", () => {
  const app = Testing.app();
  const stack = new TerraformStack(app, "test");

  new TerraformVariable(stack, "test-variable", {
    type: VariableType.map(VariableType.BOOL),
  });
  expect(Testing.synth(stack)).toMatchSnapshot();
});

test("tuple type", () => {
  const app = Testing.app();
  const stack = new TerraformStack(app, "test");

  new TerraformVariable(stack, "test-variable", {
    type: VariableType.tuple("bool", "list(number)"),
  });
  expect(Testing.synth(stack)).toMatchSnapshot();
});

test("object type", () => {
  const app = Testing.app();
  const stack = new TerraformStack(app, "test");

  new TerraformVariable(stack, "test-variable", {
    type: "object({internal=number, protocol=string})",
    default: { internal: 8300, protocol: "tcp" },
  });
  expect(Testing.synth(stack)).toMatchSnapshot();
});

test("reference", () => {
  const app = Testing.app();
  const stack = new TerraformStack(app, "test");

  new TestProvider(stack, "provider", {});
  const variable = new TerraformVariable(stack, "test-variable", {
    type: "string",
  });

  new TestResource(stack, "test-resource", {
    name: variable.value,
  });
  expect(Testing.synth(stack)).toMatchSnapshot();
});

test("sensitive variable", () => {
  const app = Testing.app();
  const stack = new TerraformStack(app, "test");

  new TerraformVariable(stack, "test-variable", {
    type: "string",
    sensitive: true,
  });
  expect(Testing.synth(stack)).toMatchSnapshot();
});

test("variable with variable default", () => {
  const app = Testing.app();
  const stack = new TerraformStack(app, "test");

  const a = new TerraformVariable(stack, "test-variable", {
    type: "string",
  });
  new TerraformVariable(stack, "other-variable", {
    default: a.value,
    type: "string",
  });
  expect(Testing.synth(stack)).toMatchSnapshot();
});

test("nullable variable", () => {
  const app = Testing.app();
  const stack = new TerraformStack(app, "test");

  new TerraformVariable(stack, "test-variable", {
    type: "string",
    nullable: true,
  });
  expect(Testing.synth(stack)).toMatchSnapshot();
});

test("validation block variable", () => {
  const app = Testing.app();
  const stack = new TerraformStack(app, "test");

  new TerraformVariable(stack, "test-variable", {
    type: "string",
    validation: [
      {
        errorMessage: "Validation failed..",
        condition: Fn.can(Fn.regex("^ami-", "ami-test")),
      },
    ],
  });
  expect(Testing.synth(stack)).toMatchSnapshot();
});

test("validation block variable self reference", () => {
  const app = Testing.app();
  const stack = new TerraformStack(app, "test");

  const variable = new TerraformVariable(stack, "test-variable", {
    type: "string",
  });
  variable.addValidation({
    condition: `${Fn.lengthOf(variable.fqn)} > 4 && ${Fn.substr(
      variable.fqn,
      0,
      4
    )} == "ami-"`,
    errorMessage:
      'The image_id value must be a valid AMI id, starting with "ami-".',
  });
  expect(Testing.synth(stack)).toMatchSnapshot();
});
