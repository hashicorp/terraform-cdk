// Copyright (c) HashiCorp, Inc
// SPDX-License-Identifier: MPL-2.0
import { setupJest } from "../jest";
import { Testing } from "../../index";
import { TestDataSource } from "../../../../test/helper/data-source";
import { TestResource } from "../../../../test/helper/resource";

describe("jest-adapter", () => {
  beforeAll(() => {
    setupJest();
  });

  it("should add extra matchers", () => {
    expect(expect(true).toHaveResource).toBeDefined();
    expect(expect(true).toHaveResourceWithProperties).toBeDefined();
  });

  describe("jestPassEvaluation", () => {
    it("fails with jest error message", () => {
      expect(() =>
        expect(
          Testing.synthScope((stack) => {
            new TestDataSource(stack, "test-data-source", {
              name: "foo",
            });

            new TestResource(stack, "test-resource", {
              name: "bar",
            });
          })
        ).toHaveResourceWithProperties(TestResource, {
          name: "bazs",
          foo: expect.arrayContaining([expect.anything()]),
        })
      ).toThrowErrorMatchingInlineSnapshot(`
        "Expected test_resource with properties {\\"name\\":\\"bazs\\",\\"foo\\":\\"expect.ArrayContaining\\"} to be present in synthesised stack.
        Found 1 test_resource resources instead:
        [
          {
            \\"name\\": \\"bar\\"
          }
        ]"
      `);
    });
  });
});
