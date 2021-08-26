import { App, TerraformStack, Testing } from "../lib";

import fs = require("fs");
import path = require("path");
import os = require("os");
import { Construct, IValidation } from "constructs";

test("validations are executed recursively", () => {
  const outdir = fs.mkdtempSync(path.join(os.tmpdir(), "cdktf.outdir."));
  const app = Testing.stubVersion(new App({ stackTraces: false, outdir }));
  const stack = new TerraformStack(app, "MyStack");

  const validation = {
    validate: jest.fn().mockReturnValue(["custom_error_1", "custom_error_2"]),
  };
  const nestedValidation = {
    validate: jest.fn().mockReturnValue(["custom_nested_error"]),
  };
  const stackValidation = {
    validate: jest.fn().mockReturnValue(["stack_error"]),
  };

  new CustomConstruct(stack, "custom", validation, nestedValidation);
  stack.node.addValidation(stackValidation);

  expect(() => app.synth()).toThrowErrorMatchingInlineSnapshot(`
    "Validation failed with the following errors:
      [MyStack] stack_error
      [MyStack/custom] custom_error_1
      [MyStack/custom] custom_error_2
      [MyStack/custom/nested] custom_nested_error"
  `);
  expect(validation.validate).toHaveBeenCalledTimes(1);
  expect(nestedValidation.validate).toHaveBeenCalledTimes(1);
  expect(stackValidation.validate).toHaveBeenCalledTimes(1);
});

class NestedCustomConstruct extends Construct {
  constructor(scope: Construct, id: string, validation: IValidation) {
    super(scope, id);
    this.node.addValidation(validation);
  }
}

class CustomConstruct extends Construct {
  constructor(
    scope: Construct,
    id: string,
    validation: IValidation,
    nestedValidation: IValidation
  ) {
    super(scope, id);
    this.node.addValidation(validation);
    new NestedCustomConstruct(this, "nested", nestedValidation);
  }
}
