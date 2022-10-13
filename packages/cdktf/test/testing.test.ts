// Copyright (c) HashiCorp, Inc
// SPDX-License-Identifier: MPL-2.0
import { TerraformStack, TerraformResource, Testing } from "../lib";

import { Aspects } from "../lib/aspect";
import { IConstruct } from "constructs";

class MyResource extends TerraformResource {}

it("Testing.synth() executes Aspects added to constructs", () => {
  const app = Testing.app();
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

  expect(() => Testing.synth(stack)).not.toThrow();

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
