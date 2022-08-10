// Copyright (c) HashiCorp, Inc
// SPDX-License-Identifier: MPL-2.0
import {
  Testing,
  TerraformStack,
  TerraformOutput,
  TerraformElement,
  App,
  Fn,
} from "../lib";
import fs = require("fs");
import path = require("path");
import os = require("os");
import { TestResource, TestProvider } from "./helper";
import { TerraformVariable } from "../lib/terraform-variable";
import { IConstruct } from "constructs";

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

test("static output id (without feature flags enabled)", () => {
  // we do this manually instead of using Testing.app() to skip enabling feature flags
  const outdir = fs.mkdtempSync(path.join(os.tmpdir(), "cdktf.outdir."));
  const app = Testing.stubVersion(new App({ outdir, stackTraces: false }));

  const stack = new TerraformStack(app, "test");
  class CustomConstruct extends TerraformElement {
    constructor(scope: IConstruct, id: string) {
      super(scope, id);
      new TerraformOutput(stack, "my_static_output_name", {
        value: "1",
        staticId: true,
      });
    }
  }
  new CustomConstruct(
    stack,
    "custom-construct-id-which-does-not-appear-in-output-name"
  );

  expect(Testing.synth(stack)).toMatchSnapshot();
});

test("full resource output", () => {
  const app = Testing.app();
  const stack = new TerraformStack(app, "test");

  new TestProvider(stack, "provider", {});
  const resource = new TestResource(stack, "foo", {
    name: "foo",
  });

  new TerraformOutput(stack, "test-output", {
    value: resource,
  });

  expect(Testing.synth(stack)).toMatchSnapshot();
});

test("expression output", () => {
  const app = Testing.app();
  const stack = new TerraformStack(app, "test");

  new TestProvider(stack, "provider", {});
  const resource = new TestResource(stack, "foo", {
    name: "foo",
  });

  new TerraformOutput(stack, "test-output", {
    value: Fn.upper(resource.name),
  });

  expect(Testing.synth(stack)).toMatchSnapshot();
});

test("resource[] output", () => {
  const app = Testing.app();
  const stack = new TerraformStack(app, "test");

  new TestProvider(stack, "provider", {});
  const resource1 = new TestResource(stack, "foo1", {
    name: "foo1",
  });
  const resource2 = new TestResource(stack, "foo2", {
    name: "foo2",
  });

  new TerraformOutput(stack, "test-output", {
    value: [resource1, resource2],
  });

  expect(Testing.synth(stack)).toMatchSnapshot();
});

test("resource map output", () => {
  const app = Testing.app();
  const stack = new TerraformStack(app, "test");

  new TestProvider(stack, "provider", {});
  const resource = new TestResource(stack, "foo", {
    name: "foo",
  });
  new TerraformOutput(stack, "test-output", {
    value: {
      myResource: resource,
      something: "else",
    },
  });

  expect(Testing.synth(stack)).toMatchSnapshot();
});
