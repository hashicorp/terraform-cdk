import { Testing } from "../index";
import { TestResource, DockerImage } from "../../../test/helper/resource";
import {
  toBeValidTerraform,
  getToHaveResourceWithProperties,
  toPlanSuccessfully,
  getToHaveDataSourceWithProperties,
  asymetricDeepEqualIgnoringObjectCasing,
} from "../matchers";
import { TestDataSource } from "../../../test/helper/data-source";
import { TerraformStack } from "../../terraform-stack";
import { DockerProvider } from "../../../test/helper/provider";
import * as fs from "fs";
import * as path from "path";

function corruptSynthesizedStack(stackPath: string) {
  const manifest = JSON.parse(
    fs.readFileSync(path.resolve(stackPath, "manifest.json"), "utf8")
  );

  const { synthesizedStackPath } = Object.values(manifest.stacks)[0] as any;
  const absoluteStackPath = path.resolve(stackPath, synthesizedStackPath);

  fs.writeFileSync(
    absoluteStackPath,
    fs.readFileSync(absoluteStackPath, "utf8") +
      "Weird text that makes the JSON file invalid",
    "utf8"
  );
}

describe("deepEqualIgnoringObjectCasing", () => {
  it("should compare simple items", () => {
    expect(asymetricDeepEqualIgnoringObjectCasing(1, 1)).toBe(true);
    expect(asymetricDeepEqualIgnoringObjectCasing("1", "1")).toBe(true);
    expect(asymetricDeepEqualIgnoringObjectCasing(true, true)).toBe(true);
    expect(asymetricDeepEqualIgnoringObjectCasing(false, false)).toBe(true);
    expect(asymetricDeepEqualIgnoringObjectCasing(null, null)).toBe(true);
    expect(asymetricDeepEqualIgnoringObjectCasing(undefined, undefined)).toBe(
      true
    );
    expect(asymetricDeepEqualIgnoringObjectCasing([1, 2, 3], [1, 2, 3])).toBe(
      true
    );
    expect(
      asymetricDeepEqualIgnoringObjectCasing({ a: 1, b: 2 }, { a: 1, b: 2 })
    ).toBe(true);

    expect(asymetricDeepEqualIgnoringObjectCasing(1, 2)).toBe(false);
  });

  it("should compare arrays", () => {
    expect(asymetricDeepEqualIgnoringObjectCasing([1, 2, 3], [1, 2, 3])).toBe(
      true
    );

    expect(asymetricDeepEqualIgnoringObjectCasing([1, 2, 3], [1, 2, 4])).toBe(
      false
    );
    expect(
      asymetricDeepEqualIgnoringObjectCasing([1, 2, 3], [1, 2, 3, 4])
    ).toBe(false);
  });

  it("should compare objects", () => {
    expect(
      asymetricDeepEqualIgnoringObjectCasing({ a: 1, b: 2 }, { a: 1, b: 2 })
    ).toBe(true);
    expect(
      asymetricDeepEqualIgnoringObjectCasing(
        { a: { c: 3 }, b: 2 },
        { a: { c: 3 }, b: 2 }
      )
    ).toBe(true);

    expect(
      asymetricDeepEqualIgnoringObjectCasing(
        { a: 3, b: 2 },
        { a: { c: 3 }, b: 2 }
      )
    ).toBe(false);
    expect(
      asymetricDeepEqualIgnoringObjectCasing(
        { a: { c: 3 }, b: 2 },
        { a: 3, b: 2 }
      )
    ).toBe(false);
  });

  it("should ignore case when comparing object keys", () => {
    expect(
      asymetricDeepEqualIgnoringObjectCasing(
        { a: 1, fooBar: 2 },
        { a: 1, foo_bar: 2 }
      )
    ).toBe(true);
    expect(
      asymetricDeepEqualIgnoringObjectCasing(
        { a: { fooBar: 2 } },
        { a: { foo_bar: 2 } }
      )
    ).toBe(true);
  });

  it("should ignore keys not present in expectation", () => {
    expect(
      asymetricDeepEqualIgnoringObjectCasing(
        { a: { fooBar: 2 } },
        { a: { foo_bar: 2 }, b: 3 }
      )
    ).toBe(true);
  });
});

describe("matchers", () => {
  const toHaveResourceWithProperties = getToHaveResourceWithProperties();
  describe("toHaveResourceWithProperties", () => {
    let synthesizedStack: string;
    beforeEach(() => {
      synthesizedStack = Testing.synthScope((scope) => {
        new TestResource(scope, "test", { name: "test", tags: { foo: "bar" } });
      });
    });

    it("should pass with no properties", () => {
      const res = toHaveResourceWithProperties(synthesizedStack, TestResource);

      expect(res.pass).toBeTruthy();
      expect(res.message()).toMatchInlineSnapshot(`
        "Expected no test_resource with properties {} to be present in synthesised stack.
        Found 1 test_resource resources instead:
        [
          {
            \\"name\\": \\"test\\",
            \\"tags\\": {
              \\"foo\\": \\"bar\\"
            }
          }
        ]"
      `);
    });

    it("should fail with wrong resouce", () => {
      const res = toHaveResourceWithProperties(
        synthesizedStack,
        TestDataSource
      );

      expect(res.pass).toBeFalsy();
      expect(res.message()).toMatchInlineSnapshot(`
        "Expected test_data_source with properties {} to be present in synthesised stack.
        Found no test_data_source resources instead"
      `);
    });

    it("should work on nested elements", () => {
      const res = toHaveResourceWithProperties(synthesizedStack, TestResource, {
        tags: { foo: "bar" },
      });

      expect(res.pass).toBeTruthy();
    });

    it("should fail if no item is found as asserted", () => {
      const res = toHaveResourceWithProperties(synthesizedStack, DockerImage);

      expect(res.pass).toBeFalsy();
    });
  });

  describe("toHaveDataSourceWithProperties", () => {
    const toHaveDataSourceWithProperties = getToHaveDataSourceWithProperties();
    let synthesizedStack: any;
    beforeEach(() => {
      synthesizedStack = Testing.synthScope((scope) => {
        new TestResource(scope, "test", { name: "test" });
        new TestDataSource(scope, "test-data-source", { name: "data" });
      });
    });

    it("should not find resources", () => {
      const res = toHaveDataSourceWithProperties(
        synthesizedStack,
        TestResource
      );

      expect(res.pass).toBeFalsy();
    });

    it("should find data sources", () => {
      const res = toHaveDataSourceWithProperties(
        synthesizedStack,
        TestDataSource,
        { name: "data" }
      );

      expect(res.pass).toBeTruthy();
    });
  });

  describe("toBeValidTerraform", () => {
    it("fails if anything but a path is passed", () => {
      const res = toBeValidTerraform("not a path");
      expect(res.pass).toBeFalsy();
      expect(res.message()).toMatchInlineSnapshot(
        `"Expected subject to be a terraform directory: Error: ENOENT: no such file or directory, stat 'not a path'"`
      );
    });

    it("succeeds if the terraform config passed is valid", () => {
      const app = Testing.app();
      const stack = new TerraformStack(app, "test");

      new DockerProvider(stack, "provider", {});
      new DockerImage(stack, "test", { name: "test" });

      const res = toBeValidTerraform(Testing.fullSynth(stack));
      expect(res.pass).toBeTruthy();
      expect(res.message()).toMatchInlineSnapshot(
        `"Expected subject not to be a valid terraform stack"`
      );
    });

    it("fails if the terraform config passed is invalid", () => {
      const app = Testing.app();
      const stack = new TerraformStack(app, "test");

      new DockerProvider(stack, "provider", {});
      new DockerImage(stack, "test", { name: "test" });
      const result = Testing.fullSynth(stack);
      corruptSynthesizedStack(result);

      const res = toBeValidTerraform(result);
      expect(res.pass).toBeFalsy();
      expect(res.message()).toEqual(
        expect.stringContaining(
          "Expected subject to be a valid terraform stack"
        )
      );
    });
  });

  describe("toPlanSuccessfully", () => {
    it("fails if anything but a path is passed", () => {
      const res = toPlanSuccessfully("not a path");
      expect(res.pass).toBeFalsy();
      expect(res.message()).toMatchInlineSnapshot(
        `"Expected subject to be a terraform directory: Error: ENOENT: no such file or directory, stat 'not a path'"`
      );
    });

    it("succeeds if the terraform config passed is valid", () => {
      const app = Testing.app();
      const stack = new TerraformStack(app, "test");

      new DockerProvider(stack, "provider", {});
      new DockerImage(stack, "test", { name: "test" });

      const res = toPlanSuccessfully(Testing.fullSynth(stack));
      expect(res.pass).toBeTruthy();
      expect(res.message()).toMatchInlineSnapshot(
        `"Expected subject not to plan successfully"`
      );
    });

    it("fails if the terraform config passed is invalid", () => {
      const app = Testing.app();
      const stack = new TerraformStack(app, "test");

      new DockerProvider(stack, "provider", {});
      new DockerImage(stack, "test", { name: "test" });

      const result = Testing.fullSynth(stack);
      corruptSynthesizedStack(result);

      const res = toPlanSuccessfully(result);
      expect(res.pass).toBeFalsy();
      expect(res.message()).toEqual(
        expect.stringContaining("Expected subject to plan successfully")
      );
    });
  });
});
