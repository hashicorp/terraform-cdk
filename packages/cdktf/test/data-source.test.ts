// Copyright (c) HashiCorp, Inc
// SPDX-License-Identifier: MPL-2.0
import { Testing, Token } from "../lib";
import { TestResource } from "./helper";
import { TestDataSource } from "./helper/data-source";
import { TestProvider } from "./helper/provider";

test("minimal configuration", () => {
  expect(
    Testing.synthScope((stack) => {
      new TestProvider(stack, "provider", {});
      new TestDataSource(stack, "test", {
        name: "foo",
      });
    })
  ).toMatchSnapshot();
});

test("with complex computed list", () => {
  expect(
    Testing.synthScope((stack) => {
      new TestProvider(stack, "provider", {});

      const dataSource = new TestDataSource(stack, "test", {
        name: "foo",
      });
      new TestResource(stack, "test-resource", {
        name: dataSource.complexComputedList.get(0).id,
      });
    })
  ).toMatchSnapshot();
});

test("with string map", () => {
  expect(
    Testing.synthScope((stack) => {
      new TestProvider(stack, "provider", {});

      const dataSource = new TestDataSource(stack, "test", {
        name: "foo",
      });
      new TestResource(stack, "test-resource", {
        name: dataSource.stringMap("id"),
      });
    })
  ).toMatchSnapshot();
});

test("with number map", () => {
  expect(
    Testing.synthScope((stack) => {
      new TestProvider(stack, "provider", {});

      const dataSource = new TestDataSource(stack, "test", {
        name: "foo",
      });
      new TestResource(stack, "test-resource", {
        name: Token.asString(dataSource.numberMap("id")),
      });
    })
  ).toMatchSnapshot();
});

test("with boolean map", () => {
  expect(
    Testing.synthScope((stack) => {
      new TestProvider(stack, "provider", {});

      const dataSource = new TestDataSource(stack, "test", {
        name: "foo",
      });
      new TestResource(stack, "test-resource", {
        name: dataSource.booleanMap("id").toString(),
      });
    })
  ).toMatchSnapshot();
});

test("with any map", () => {
  expect(
    Testing.synthScope((stack) => {
      new TestProvider(stack, "provider", {});

      const dataSource = new TestDataSource(stack, "test", {
        name: "foo",
      });
      new TestResource(stack, "test-resource", {
        name: Token.asString(dataSource.anyMap("id")),
      });
    })
  ).toMatchSnapshot();
});

test("dependent data source", () => {
  expect(
    Testing.synthScope((stack) => {
      new TestProvider(stack, "provider", {});

      const resource = new TestResource(stack, "resource", {
        name: "foo",
      });

      new TestDataSource(stack, "data_source", {
        name: "foo",
        dependsOn: [resource],
      });
    })
  ).toMatchSnapshot();
});
