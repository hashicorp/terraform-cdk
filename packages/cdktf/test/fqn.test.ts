// Copyright (c) HashiCorp, Inc
// SPDX-License-Identifier: MPL-2.0
import { Testing, TerraformStack } from "../lib";
import { TestProvider, TestResource } from "./helper";

test("able to use fqn on an element", () => {
  const app = Testing.app();
  const stack = new TerraformStack(app, "test");
  new TestProvider(stack, "provider", {});

  const firstResource = new TestResource(stack, "first-resource", {
    name: "foo",
  });

  new TestResource(stack, "second-resource", {
    name: "bar",
    tags: {
      other: firstResource.fqn,
    },
  });

  const res = JSON.parse(Testing.synth(stack));

  const expectedFirst = {
    name: "foo",
  };

  const expectedSecond = {
    name: "bar",
    tags: {
      other: "${test_resource.first-resource}",
    },
  };

  expect(res).toHaveProperty(
    "resource.test_resource.first-resource",
    expectedFirst
  );
  expect(res).toHaveProperty(
    "resource.test_resource.second-resource",
    expectedSecond
  );
});

test("able to append to resource", () => {
  const app = Testing.app();
  const stack = new TerraformStack(app, "test");
  new TestProvider(stack, "provider", {});

  const firstResource = new TestResource(stack, "first-resource", {
    name: "foo",
  });

  const secondResource = new TestResource(stack, "second-resource", {
    name: "bar",
    tags: {
      firstResourceName: `$\{${firstResource.fqn}.name}`,
    },
  });

  secondResource.addOverride("name", `${firstResource.fqn}-second`);

  const res = JSON.parse(Testing.synth(stack));

  const expected = {
    name: "${test_resource.first-resource}-second",
    tags: {
      firstResourceName: "${test_resource.first-resource.name}",
    },
  };

  expect(res).toHaveProperty(
    "resource.test_resource.second-resource",
    expected
  );
});
