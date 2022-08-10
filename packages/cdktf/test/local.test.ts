// Copyright (c) HashiCorp, Inc
// SPDX-License-Identifier: MPL-2.0
import { Testing, TerraformStack, TerraformLocal } from "../lib";
import { TestResource } from "./helper";
import { TestProvider } from "./helper/provider";

test("string local", () => {
  const app = Testing.app();
  const stack = new TerraformStack(app, "test");

  new TerraformLocal(stack, "greeting", "Hello, ${var.name}");

  expect(Testing.synth(stack)).toMatchSnapshot();
});

test("function local", () => {
  const app = Testing.app();
  const stack = new TerraformStack(app, "test");

  new TerraformLocal(
    stack,
    "instance_ids",
    "${concat(aws_instance.blue.*.id, aws_instance.green.*.id)}"
  );

  expect(Testing.synth(stack)).toMatchSnapshot();
});

test("object local", () => {
  const app = Testing.app();
  const stack = new TerraformStack(app, "test");

  new TerraformLocal(stack, "common_tags", {
    Service: "service_name",
    Owner: "owner",
  });

  expect(Testing.synth(stack)).toMatchSnapshot();
});

test("local reference", () => {
  const app = Testing.app();
  const stack = new TerraformStack(app, "test");
  new TestProvider(stack, "test", {});

  const resourceName = new TerraformLocal(
    stack,
    "resource_name",
    "my_resource"
  );

  new TestResource(stack, "test-resource", {
    name: resourceName.asString,
  });

  expect(Testing.synth(stack)).toMatchSnapshot();
});

test("multiple locals", () => {
  const app = Testing.app();
  const stack = new TerraformStack(app, "test");

  new TerraformLocal(stack, "local1", "1");

  new TerraformLocal(stack, "local2", "2");

  expect(Testing.synth(stack)).toMatchSnapshot();
});
