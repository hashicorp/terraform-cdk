import fs = require("fs");
import path = require("path");
import os = require("os");
import { App } from "../../lib";
import { TerraformStack } from "../terraform-stack";
import { Manifest } from "../manifest";
import { FUTURE_FLAGS } from "../features";
import { IConstruct, Construct } from "constructs";
import { setupJest } from "./adapters/jest";

export interface IScopeCallback {
  (scope: Construct): void;
}

/**
 * Testing utilities for cdktf applications.
 */
export class Testing {
  /**
   * Returns an app for testing with the following properties:
   * - Output directory is a temp dir.
   */
  public static app(): App {
    const outdir = fs.mkdtempSync(path.join(os.tmpdir(), "cdktf.outdir."));
    const app = new App({ outdir, stackTraces: false });
    return this.stubVersion(this.enableFutureFlags(app));
  }

  public static stubVersion(app: App): App {
    app.node.setContext("cdktfVersion", "stubbed");
    (app.manifest.version as string) = "stubbed";
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
  public static synth(stack: TerraformStack) {
    const tfConfig = stack.toTerraform();

    function removeMetadata(item: any): any {
      if (typeof item === "object") {
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

    // Clean up the references & names

    return JSON.stringify(cleaned, null, 2);
  }

  public static fullSynth(stack: TerraformStack): string {
    const outdir = fs.mkdtempSync(path.join(os.tmpdir(), "cdktf.outdir."));

    const manifest = new Manifest("stubbed", outdir);

    stack.synthesizer.synthesize({
      outdir,
      manifest,
    });

    manifest.writeToFile();

    return outdir;
  }

  public static renderConstructTree(construct: IConstruct): string {
    return render(construct, 0, false);

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
      const name =
        construct instanceof App
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

  public static setupJest() {
    setupJest();
  }

  /* istanbul ignore next */
  private constructor() {
    return;
  }
}
