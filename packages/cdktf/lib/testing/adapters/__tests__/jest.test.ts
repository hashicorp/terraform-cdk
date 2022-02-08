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
      ).toThrowErrorMatchingInlineSnapshot(
        `"Class constructor Construct cannot be invoked without 'new'"`
      );
    });
  });
});
