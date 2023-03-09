// Copyright (c) HashiCorp, Inc
// SPDX-License-Identifier: MPL-2.0
import { TerraformStack, Testing } from "../lib";
import * as path from "path";
import { TerraformCachedAsset } from "../lib/terraform-cached-asset";
import * as fs from "fs";

describe("cached asset", () => {
  afterEach(() => {
    fs.rmSync(path.join(__dirname, "fixtures", "cached-asset", "output"), {
      recursive: true,
      force: true,
    });
  });

  test("creates a cache entry in the stack", () => {
    const app = Testing.app();
    const stack = new TerraformStack(app, "test");
    const wasCalled = jest.fn();

    new TerraformCachedAsset(stack, "test-asset", {
      inputPath: path.join(__dirname, "fixtures", "cached-asset"),
      outputPath: path.join(__dirname, "fixtures", "cached-asset", "output"),
      builder: {
        build: (input) => {
          fs.mkdirSync(path.join(input, "output"), { recursive: true });
          fs.writeFileSync(
            path.join(input, "output", "output.txt"),
            "hello world"
          );
          wasCalled();
        },
      },
    });

    expect(wasCalled).toHaveBeenCalled();
    expect(stack.toTerraform()["//"]["caches"]).toMatchInlineSnapshot(`
      Object {
        "test-asset": "26A6480ED0DCED28D5B748A9BD86AAE0",
      }
    `);
  });

  test("builder should not be called twice", () => {
    const app = Testing.app();
    const stack = new TerraformStack(app, "test");
    const wasCalled = jest.fn();

    fs.mkdirSync(path.join(app.outdir, "stacks", "test"), { recursive: true });
    fs.writeFileSync(
      path.join(app.outdir, "stacks", "test", "cdk.tf.json"),
      JSON.stringify(
        {
          ["//"]: {
            caches: {
              "test-asset": "D916555543AB5892158DA776ABA7B224",
            },
          },
        },
        null,
        2
      )
    );

    new TerraformCachedAsset(stack, "test-asset", {
      inputPath: path.join(__dirname, "fixtures", "cached-asset"),
      outputPath: path.join(
        __dirname,
        "fixtures",
        "cached-asset-output",
        "output"
      ),
      builder: {
        build: (input) => {
          fs.mkdirSync(path.join(input, "output"), { recursive: true });
          fs.writeFileSync(
            path.join(input, "output", "output.txt"),
            "hello world"
          );
          wasCalled();
        },
      },
    });

    expect(wasCalled).not.toHaveBeenCalled();
  });

  test("accepts a path pattern", () => {
    const app = Testing.app();
    const stack = new TerraformStack(app, "test");
    const wasCalled = jest.fn();

    const cachedAsset = new TerraformCachedAsset(stack, "test-asset", {
      inputPath: path.join(__dirname, "fixtures", "cached-asset"),
      outputPath: path.join(__dirname, "fixtures", "cached-asset", "output"),
      filePatterns: ["**/*.md"],
      builder: {
        build: () => {
          wasCalled();
        },
      },
    });

    const oldHash = cachedAsset.hash;

    fs.mkdirSync(path.join(__dirname, "fixtures", "cached-asset", "output"), {
      recursive: true,
    });
    fs.writeFileSync(
      path.join(__dirname, "fixtures", "cached-asset", "output", "foo.txt"),
      "hello world"
    );

    expect(wasCalled).toHaveBeenCalled();
    expect(oldHash).toEqual(cachedAsset.hash);

    fs.writeFileSync(
      path.join(__dirname, "fixtures", "cached-asset", "output", "foo.md"),
      "hello world"
    );

    expect(oldHash).not.toEqual(cachedAsset.hash);
  });
});
