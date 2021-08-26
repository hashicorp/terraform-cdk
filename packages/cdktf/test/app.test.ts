import {
  CONTEXT_ENV,
  App,
  TerraformStack,
  TerraformResource,
  Testing,
} from "../lib";

import { version } from "../package.json";
import fs = require("fs");
import path = require("path");
import os = require("os");
import { Aspects } from "../lib/aspect";
import { IConstruct } from "constructs";

test("context can be passed through CDKTF_CONTEXT", () => {
  process.env[CONTEXT_ENV] = JSON.stringify({
    key1: "val1",
    key2: "val2",
  });
  const prog = new App();
  const node = prog.node;
  expect(node.tryGetContext("key1")).toEqual("val1");
  expect(node.tryGetContext("key2")).toEqual("val2");
});

test("context can be passed through CDKTF_CONTEXT", () => {
  process.env[CONTEXT_ENV] = JSON.stringify({
    key1: "val1",
    key2: "val2",
  });
  const prog = new App({
    context: {
      key1: "val3",
      key2: "val4",
    },
  });
  const node = prog.node;
  expect(node.tryGetContext("key1")).toEqual("val1");
  expect(node.tryGetContext("key2")).toEqual("val2");
});

test("cdktfVersion is accessible in context", () => {
  const prog = new App();
  const node = prog.node;
  expect(node.tryGetContext("cdktfVersion")).toEqual(version);
});

test("app synth does not throw error when validatons are disabled", () => {
  const outdir = fs.mkdtempSync(path.join(os.tmpdir(), "cdktf.outdir."));
  const app = Testing.stubVersion(
    new App({ stackTraces: false, outdir, skipValidation: true })
  );
  const stack = new TerraformStack(app, "MyStack");

  new MyResource(stack, "Resource1", {
    terraformResourceType: "aws_bucket",
    terraformGeneratorMetadata: {
      providerName: "test-provider",
    },
  });

  expect(() => app.synth()).not.toThrow();
});

test("app synth throws error when provider is missing", () => {
  const outdir = fs.mkdtempSync(path.join(os.tmpdir(), "cdktf.outdir."));
  const app = Testing.stubVersion(new App({ stackTraces: false, outdir }));
  const stack = new TerraformStack(app, "MyStack");

  new MyResource(stack, "Resource1", {
    terraformResourceType: "aws_bucket",
    terraformGeneratorMetadata: {
      providerName: "test-provider",
    },
  });

  expect(() => app.synth()).toThrowErrorMatchingInlineSnapshot(`
    "Validation failed with the following errors:
      [MyStack] Found resources without a matching povider. Please make sure to add the following providers to your stack: test-provider"
  `);
});

test("app synth executes Aspects", () => {
  const outdir = fs.mkdtempSync(path.join(os.tmpdir(), "cdktf.outdir."));
  const app = Testing.stubVersion(
    new App({ stackTraces: false, outdir, skipValidation: true })
  );
  const stack = new TerraformStack(app, "MyStack");

  const StackAspect = { visit: jest.fn() };
  const ResourceAspect = {
    visit: jest.fn().mockImplementation((resource: IConstruct) => {
      const inferredStack = TerraformStack.of(resource);
      new MyResource(inferredStack, "Resource2", {
        terraformResourceType: "aws_bucket",
        terraformGeneratorMetadata: {
          providerName: "test-provider",
        },
      });
    }),
  };

  const resource = new MyResource(stack, "Resource1", {
    terraformResourceType: "aws_bucket",
    terraformGeneratorMetadata: {
      providerName: "test-provider",
    },
  });

  Aspects.of(stack).add(StackAspect);
  Aspects.of(resource).add(ResourceAspect);

  expect(() => app.synth()).not.toThrow();

  expect(StackAspect.visit).toHaveBeenNthCalledWith(1, stack);
  expect(StackAspect.visit).toHaveBeenNthCalledWith(2, resource);
  expect(ResourceAspect.visit).toHaveBeenCalledWith(resource);

  expect(Testing.renderConstructTree(app)).toMatchInlineSnapshot(`
    "App
    └── MyStack (TerraformStack)
        ├── Resource1 (MyResource)
        └── Resource2 (MyResource)
    "
  `);
});

class MyResource extends TerraformResource {}
