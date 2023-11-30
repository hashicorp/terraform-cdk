// Copyright (c) HashiCorp, Inc
// SPDX-License-Identifier: MPL-2.0
import fs = require("fs");
import path = require("path");
import os = require("os");
import stringify = require("json-stable-stringify");
import { App, TerraformStack } from "../../lib";
import { Manifest } from "../manifest";
import { FUTURE_FLAGS } from "../features";
import { IConstruct, Construct } from "constructs";
import { setupJest } from "./adapters/jest";
import { invokeAspects } from "../synthesize/synthesizer";
import {
  getToHaveResourceWithProperties,
  getToHaveDataSourceWithProperties,
  getToHaveProviderWithProperties,
  toBeValidTerraform,
} from "./matchers";
import { jsonToHcl } from "../hcl/json-to-hcl";

export interface IScopeCallback {
  (scope: Construct): void;
}

export interface TestingAppConfig {
  readonly outdir?: string;
  readonly stackTraces?: boolean;
  readonly stubVersion?: boolean;
  readonly enableFutureFlags?: boolean;
  readonly fakeCdktfJsonPath?: boolean;
}

const DefaultTestingAppConfig: TestingAppConfig = {
  stackTraces: false,
  stubVersion: true,
  enableFutureFlags: true,
  fakeCdktfJsonPath: false,
};

/**
 * Testing utilities for cdktf applications.
 */
export class Testing {
  /**
   * Returns an app for testing with the following properties:
   * - Output directory is a temp dir.
   */
  public static app(options: TestingAppConfig = {}): App {
    const appConfig = { ...DefaultTestingAppConfig, ...options };
    if (!appConfig.outdir) {
      appConfig.outdir = fs.mkdtempSync(
        path.join(os.tmpdir(), "cdktf.outdir.")
      );
    }

    const app = new App({
      outdir: appConfig.outdir,
      stackTraces: appConfig.stackTraces,
    });

    if (appConfig.stubVersion) {
      this.stubVersion(app);
    }
    if (appConfig.enableFutureFlags) {
      this.enableFutureFlags(app);
    }
    if (appConfig.fakeCdktfJsonPath) {
      this.fakeCdktfJsonPath(app);
    }

    return app;
  }

  public static stubVersion(app: App): App {
    app.node.setContext("cdktfVersion", "stubbed");
    (app.manifest.version as string) = "stubbed";
    return app;
  }

  public static fakeCdktfJsonPath(app: App): App {
    app.node.setContext("cdktfJsonPath", `${process.cwd()}/cdktf.json`);
    return app;
  }

  public static enableFutureFlags(app: App): App {
    const node = app.node;
    Object.entries(FUTURE_FLAGS).forEach(([key, value]) =>
      node.setContext(key, value)
    );
    return app;
  }

  public static synthScope(fn: IScopeCallback) {
    const stack = new TerraformStack(Testing.app(), "stack");
    fn(stack);
    return Testing.synth(stack);
  }

  /**
   * Returns the Terraform synthesized JSON.
   */
  public static synth(stack: TerraformStack, runValidations = false) {
    invokeAspects(stack);
    if (runValidations) {
      stack.runAllValidations();
    }

    const tfConfig = stack.toTerraform();

    // eslint-disable-next-line jsdoc/require-jsdoc
    function removeMetadata(item: any): any {
      if (item !== null && typeof item === "object") {
        if (Array.isArray(item)) {
          return item.map(removeMetadata);
        }

        const cleanedItem = Object.entries(item)
          // order alphabetically
          .sort(([a], [b]) => a.localeCompare(b))
          .reduce(
            (acc, [key, value]) => ({ ...acc, [key]: removeMetadata(value) }),
            {}
          );

        // Remove metadata
        delete (cleanedItem as any)["//"];
        return cleanedItem;
      }

      return item;
    }
    const cleaned = removeMetadata(tfConfig);

    return stringify(cleaned, { space: 2 });
  }

  /**
   * Returns the Terraform synthesized JSON.
   */
  public static async synthHcl(stack: TerraformStack, runValidations = false) {
    invokeAspects(stack);
    if (runValidations) {
      stack.runAllValidations();
    }

    const tfConfig = stack.toTerraform();

    // eslint-disable-next-line jsdoc/require-jsdoc
    function removeMetadata(item: any): any {
      if (item !== null && typeof item === "object") {
        if (Array.isArray(item)) {
          return item.map(removeMetadata);
        }

        const cleanedItem = Object.entries(item)
          // order alphabetically
          .sort(([a], [b]) => a.localeCompare(b))
          .reduce(
            (acc, [key, value]) => ({ ...acc, [key]: removeMetadata(value) }),
            {}
          );

        // Remove metadata
        delete (cleanedItem as any)["//"];
        return cleanedItem;
      }

      return item;
    }
    const cleaned = removeMetadata(tfConfig);

    return jsonToHcl(cleaned);
  }

  public static fullSynth(stack: TerraformStack): string {
    const outdir = fs.mkdtempSync(path.join(os.tmpdir(), "cdktf.outdir."));

    const manifest = new Manifest("stubbed", outdir, false);

    stack.synthesizer.synthesize({
      outdir,
      manifest,
    });

    manifest.writeToFile();

    return outdir;
  }

  public static renderConstructTree(construct: IConstruct): string {
    return render(construct, 0, false);

    // eslint-disable-next-line jsdoc/require-jsdoc
    function render(
      construct: IConstruct,
      level: number,
      isLast: boolean
    ): string {
      let prefix = "";
      if (level > 0) {
        const spaces = " ".repeat((level - 1) * 4);
        const symbol = isLast ? "└" : "├";
        prefix = `${spaces}${symbol}── `;
      }
      const name = App.isApp(construct)
        ? "App"
        : `${construct.node.id} (${construct.constructor.name})`;
      return `${prefix}${name}\n${construct.node.children
        .map((child, idx, arr) => {
          const isLast = idx === arr.length - 1;
          return render(child, level + 1, isLast);
        })
        .join("")}`;
    }
  }

  public static toHaveDataSourceWithProperties(
    received: string,
    resourceType: string,
    properties: Record<string, any> = {}
  ): boolean {
    return getToHaveDataSourceWithProperties()(
      received,
      { tfResourceType: resourceType },
      properties
    ).pass;
  }

  public static toHaveDataSource(
    received: string,
    resourceType: string
  ): boolean {
    return getToHaveDataSourceWithProperties()(
      received,
      { tfResourceType: resourceType },
      {}
    ).pass;
  }

  public static toHaveResourceWithProperties(
    received: string,
    resourceType: string,
    properties: Record<string, any> = {}
  ): boolean {
    return getToHaveResourceWithProperties()(
      received,
      { tfResourceType: resourceType },
      properties
    ).pass;
  }

  public static toHaveResource(
    received: string,
    resourceType: string
  ): boolean {
    return getToHaveResourceWithProperties()(
      received,
      { tfResourceType: resourceType },
      {}
    ).pass;
  }

  public static toHaveProviderWithProperties(
    received: string,
    resourceType: string,
    properties: Record<string, any> = {}
  ): boolean {
    return getToHaveProviderWithProperties()(
      received,
      { tfResourceType: resourceType },
      properties
    ).pass;
  }

  public static toHaveProvider(
    received: string,
    resourceType: string
  ): boolean {
    return getToHaveProviderWithProperties()(
      received,
      { tfResourceType: resourceType },
      {}
    ).pass;
  }

  public static toBeValidTerraform(received: string): boolean {
    return toBeValidTerraform(received).pass;
  }

  public static setupJest() {
    setupJest();
  }
}
