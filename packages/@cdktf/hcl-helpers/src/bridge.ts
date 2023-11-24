// Copyright (c) HashiCorp, Inc
// SPDX-License-Identifier: MPL-2.0
// eslint-disable-next-line @typescript-eslint/triple-slash-reference
/// <reference lib="dom" />
import * as fs from "fs-extra";
import { join } from "path";
import { gunzipSync } from "zlib";

interface GoBridge {
  format: (hcl: string) => Promise<string>;
}

// eslint-disable-next-line @typescript-eslint/ban-types
const jsRoot: Record<string, Function> = {};

function sleep() {
  return new Promise((resolve) => {
    setTimeout(resolve, 0);
  });
}

function goBridge(getBytes: Promise<Buffer>) {
  let ready = false;

  async function init() {
    // After: https://github.com/golang/go/commit/680caf15355057ca84857a2a291b6f5c44e73329
    // Go 1.19+ has a different entrypoint
    await import(`../wasm/bridge_wasm_exec.js`);
    const go = new (global as any).Go();
    const bytes = await getBytes;
    const result = await WebAssembly.instantiate(bytes, go.importObject);
    (global as any).__hcl_helpers_config_wasm__ = jsRoot;
    void go.run(result.instance);
    ready = true;
  }

  init().catch((error) => {
    throw error;
  });

  const proxy = new Proxy({} as GoBridge, {
    get: (_, key: string) => {
      return async (...args: unknown[]) => {
        while (!ready) {
          await sleep();
        }

        if (!(key in jsRoot)) {
          throw new Error(
            `There is nothing defined with the name "${key.toString()}"`
          );
        }

        if (typeof jsRoot[key] !== "function") {
          return jsRoot[key];
        }

        return new Promise((resolve, reject) => {
          const cb = (err: string, ...msg: string[]) =>
            // @ts-ignore
            err ? reject(new Error(err)) : resolve(...msg);

          const run = () => {
            jsRoot[key].apply(undefined, [...args, cb]);
          };

          run();
        });
      };
    },
  });

  return proxy;
}

const loadWasm = async () => {
  return gunzipSync(await fs.readFile(join(__dirname, "..", "main.wasm.gz")));
};

const wasm = goBridge(loadWasm());

export async function format(contents: string): Promise<string> {
  const res = await wasm.format(contents);
  return res;
}
