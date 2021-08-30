import { Testing } from "../index";
import { TestResource, DockerImage } from "../../../test/helper/resource";
import {
  toBeValidTerraform,
  toHaveResourceWithProperties,
  toPlanSuccessfully,
} from "../matchers";
import { TestDataSource } from "../../../test/helper/data-source";
import { TerraformStack } from "../../terraform-stack";
import { DockerProvider } from "../../../test/helper/provider";
import * as fs from "fs";
import * as path from "path";
import { toHaveDataSourceWithProperties } from "../matchers";

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

describe("matchers", () => {
  describe("toHaveResourceWithProperties", () => {
    let synthesizedStack: any;
    beforeEach(() => {
      synthesizedStack = Testing.synthScope((scope) => {
        new TestResource(scope, "test", { name: "test" });
      });
    });

    it("should pass with no properties", () => {
      const res = toHaveResourceWithProperties(synthesizedStack, TestResource);

      expect(res.pass).toBeTruthy();
      expect(res.message()).toMatchInlineSnapshot(
        `"Expected test_resource not to be present in synthesised stack with properties {}"`
      );
    });

    it("should fail with wrong resouce", () => {
      const res = toHaveResourceWithProperties(
        synthesizedStack,
        TestDataSource
      );

      expect(res.pass).toBeFalsy();
      expect(res.message()).toMatchInlineSnapshot(
        `"Expected test_data_source to be present in synthesised stack with properties {}"`
      );
    });
  });

  describe("toHaveDataSourceWithProperties", () => {
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
