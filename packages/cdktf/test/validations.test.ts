import { App, TerraformStack, Testing } from "../lib";

import fs = require("fs");
import path = require("path");
import os = require("os");
import { Construct, IValidation } from "constructs";
import { TestResource } from "./helper/resource";
import { ValidateBinaryVersion } from "../lib/validations";
import { TestProvider } from "./helper/provider";

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

  expect(() => app.synth()).toThrowErrorMatchingInlineSnapshot(
    `"the construct \\"MyStack\\" has a \\"validate()\\" method which is no longer supported. Use \\"construct.node.addValidation()\\" to add validations to a construct"`
  );
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

describe("ValidateBinaryVersion", () => {
  test("validates the version of a binary", () => {
    const outdir = fs.mkdtempSync(path.join(os.tmpdir(), "cdktf.outdir."));
    const app = Testing.stubVersion(new App({ stackTraces: false, outdir }));
    const stack = new TerraformStack(app, "MyStack");
    new TestProvider(stack, "foo", {});
    const testResource = new TestResource(stack, "testResource", {
      name: "foo",
    });
    testResource.node.addValidation(
      new ValidateBinaryVersion(
        "terraform",
        ">=1.3.0",
        `echo "Terraform v1.2.0\non darwin_amd64"`
      )
    );
    expect(() => app.synth()).toThrowErrorMatchingInlineSnapshot(
      `"the construct \\"MyStack\\" has a \\"validate()\\" method which is no longer supported. Use \\"construct.node.addValidation()\\" to add validations to a construct"`
    );
  });

  test("validation passes if the version is correct", () => {
    const outdir = fs.mkdtempSync(path.join(os.tmpdir(), "cdktf.outdir."));
    const app = Testing.stubVersion(new App({ stackTraces: false, outdir }));
    const stack = new TerraformStack(app, "MyStack");
    new TestProvider(stack, "foo", {});
    const testResource = new TestResource(stack, "testResource", {
      name: "foo",
    });
    testResource.node.addValidation(
      new ValidateBinaryVersion(
        "terraform",
        ">=1.2.0",
        `echo "Terraform v1.2.0\non darwin_amd64"`
      )
    );
    expect(() => app.synth()).not.toThrow();
  });

  test("validation fails if version command fails", () => {
    const outdir = fs.mkdtempSync(path.join(os.tmpdir(), "cdktf.outdir."));
    const app = Testing.stubVersion(new App({ stackTraces: false, outdir }));
    const stack = new TerraformStack(app, "MyStack");
    new TestProvider(stack, "foo", {});
    const testResource = new TestResource(stack, "testResource", {
      name: "foo",
    });
    testResource.node.addValidation(
      new ValidateBinaryVersion("terraform", ">=1.2.0", `exit 1`)
    );
    expect(() => app.synth()).toThrowErrorMatchingInlineSnapshot(
      `"the construct \\"MyStack\\" has a \\"validate()\\" method which is no longer supported. Use \\"construct.node.addValidation()\\" to add validations to a construct"`
    );
  });

  test("validation fails if version command returns no version string", () => {
    const outdir = fs.mkdtempSync(path.join(os.tmpdir(), "cdktf.outdir."));
    const app = Testing.stubVersion(new App({ stackTraces: false, outdir }));
    const stack = new TerraformStack(app, "MyStack");
    new TestProvider(stack, "foo", {});
    const testResource = new TestResource(stack, "testResource", {
      name: "foo",
    });
    testResource.node.addValidation(
      new ValidateBinaryVersion("terraform", ">=1.2.0", `echo "foo"`)
    );
    expect(() => app.synth()).toThrowErrorMatchingInlineSnapshot(
      `"the construct \\"MyStack\\" has a \\"validate()\\" method which is no longer supported. Use \\"construct.node.addValidation()\\" to add validations to a construct"`
    );
  });
});
