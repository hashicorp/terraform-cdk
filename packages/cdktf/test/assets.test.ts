// Copyright (c) HashiCorp, Inc
// SPDX-License-Identifier: MPL-2.0
import { App, TerraformHclModule, TerraformStack, Testing } from "../lib";
import * as path from "path";

describe("createAssetsFromLocalModules", () => {
  test("remote source without skipAssetCreationFromLocalModules", () => {
    const remoteSource = "terraform-aws-modules/eks/aws";

    const app = Testing.stubVersion(
      new App({
        stackTraces: false,
        context: { cdktfJsonPath: path.resolve(__dirname, "fixtures/app") },
      })
    );
    const stack = new TerraformStack(app, "MyStack");

    const moduleOptionsNotExists = new TerraformHclModule(
      stack,
      "moduleOptionsNotExists",
      {
        source: remoteSource,
      }
    );

    expect(moduleOptionsNotExists.source).toEqual(remoteSource);
  });

  test("remote source with skipAssetCreationFromLocalModules set to true", () => {
    const remoteSource = "terraform-aws-modules/eks/aws";

    const app = Testing.stubVersion(
      new App({
        stackTraces: false,
        context: { cdktfJsonPath: path.resolve(__dirname, "fixtures/app") },
      })
    );
    const stack = new TerraformStack(app, "MyStack");

    const moduleOptionsTrue = new TerraformHclModule(
      stack,
      "moduleOptionsTrue",
      {
        source: remoteSource,
        skipAssetCreationFromLocalModules: true,
      }
    );

    expect(moduleOptionsTrue.source).toEqual(remoteSource);
  });

  test("remote source with skipAssetCreationFromLocalModules set to false", () => {
    const remoteSource = "terraform-aws-modules/eks/aws";

    const app = Testing.stubVersion(
      new App({
        stackTraces: false,
        context: { cdktfJsonPath: path.resolve(__dirname, "fixtures/app") },
      })
    );
    const stack = new TerraformStack(app, "MyStack");

    const moduleOptionsFalse = new TerraformHclModule(
      stack,
      "moduleOptionsFalse",
      {
        source: remoteSource,
        skipAssetCreationFromLocalModules: false,
      }
    );

    expect(moduleOptionsFalse.source).toEqual(remoteSource);
  });

  test("local source without skipAssetCreationFromLocalModules", () => {
    const localSource = "../";
    const assetRegex =
      /^.\/assets\/MyStack_localmodulemoduleOptionsNotExists_[a-zA-z\d]{8}\/[a-zA-z\d]+$/;

    const app = Testing.stubVersion(
      new App({
        stackTraces: false,
        context: { cdktfJsonPath: path.resolve(__dirname, "fixtures/app") },
      })
    );
    const stack = new TerraformStack(app, "MyStack");

    const moduleOptionsNotExists = new TerraformHclModule(
      stack,
      "moduleOptionsNotExists",
      {
        source: localSource,
      }
    );

    expect(moduleOptionsNotExists.source).toMatch(assetRegex);
  });

  test("local source with skipAssetCreationFromLocalModules set to false", () => {
    const localSource = "../";
    const assetRegex =
      /^.\/assets\/MyStack_localmodulemoduleOptionsTrue_[a-zA-z\d]{8}\/[a-zA-z\d]+$/;

    const app = Testing.stubVersion(
      new App({
        stackTraces: false,
        context: { cdktfJsonPath: path.resolve(__dirname, "fixtures/app") },
      })
    );
    const stack = new TerraformStack(app, "MyStack");

    const moduleOptionsTrue = new TerraformHclModule(
      stack,
      "moduleOptionsTrue",
      {
        source: localSource,
        skipAssetCreationFromLocalModules: false,
      }
    );

    expect(moduleOptionsTrue.source).toMatch(assetRegex);
  });

  test("local source with skipAssetCreationFromLocalModules set to true", () => {
    const localSource = "../";

    const app = Testing.stubVersion(
      new App({
        stackTraces: false,
        context: { cdktfJsonPath: path.resolve(__dirname, "fixtures/app") },
      })
    );
    const stack = new TerraformStack(app, "MyStack");

    const moduleOptionsFalse = new TerraformHclModule(
      stack,
      "moduleOptionsFalse",
      {
        source: localSource,
        skipAssetCreationFromLocalModules: true,
      }
    );

    expect(moduleOptionsFalse.source).toEqual(localSource);
  });
});
