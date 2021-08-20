import fs = require("fs");
import path = require("path");
import os = require("os");
import { App } from "../lib";
import { TerraformStack } from "./terraform-stack";
import { Manifest } from "./manifest";
import { FUTURE_FLAGS } from "./features";

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
    return app;
  }

  public static enableFutureFlags(app: App): App {
    const node = app.node;
    Object.entries(FUTURE_FLAGS).forEach(([key, value]) =>
      node.setContext(key, value)
    );
    return app;
  }

  /**
   * Returns the Terraform synthesized JSON.
   */
  public static synth(stack: TerraformStack) {
    const tfConfig = stack.toTerraform();

    return JSON.stringify(tfConfig, null, 2);
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

  /* istanbul ignore next */
  private constructor() {
    return;
  }
}
