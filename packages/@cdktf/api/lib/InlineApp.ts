// Copyright (c) HashiCorp, Inc
// SPDX-License-Identifier: MPL-2.0
import { App, AppOptions } from "cdktf";
import * as os from "os";
import * as path from "path";
import * as fs from "fs";

/**
 * Creates a directory in the system's temp directory
 */
function createTmpDir() {
  return fs.mkdtempSync(path.join(os.tmpdir(), "cdktf-out-"));
}

/**
 * Represents a cdktf application with no coresponding entrypoint / cdktf.json.
 * This class is meant to be used in a programmatic context, e.g. with the automation API.
 */
export class InlineApp extends App {
  constructor(options: AppOptions = {}) {
    super(options);

    // Hack to make this readonly property writable
    (this.outdir as any) = options.outdir ?? createTmpDir();
  }
}
