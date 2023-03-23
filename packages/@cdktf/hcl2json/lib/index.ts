// Copyright (c) HashiCorp, Inc
// SPDX-License-Identifier: MPL-2.0
// eslint-disable-next-line @typescript-eslint/triple-slash-reference
/// <reference lib="dom" />

// Inspired by
// https://github.com/ts-terraform/ts-terraform
// https://github.com/aaronpowell/webpack-golang-wasm-async-loader

import fs from "fs-extra";
import path from "path";
import { deepMerge } from "./deepmerge";
import { gunzipSync } from "zlib";
import { ExpressionAst, Reference, findAllReferencesInAst } from "./references";

interface GoBridge {
  parse: (filename: string, hcl: string) => Promise<string>;
  parseExpression: (filename: string, hcl: string) => Promise<string>;
  getExpressionAst: (filename: string, hcl: string) => Promise<string>;
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
    (global as any).__parse_terraform_config_wasm__ = jsRoot;
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
  return gunzipSync(
    await fs.readFile(path.join(__dirname, "..", "main.wasm.gz"))
  );
};

const wasm = goBridge(loadWasm());

export async function parse(
  filename: string,
  contents: string
): Promise<Record<string, any>> {
  const res = await wasm.parse(filename, contents);
  return JSON.parse(res);
}

export async function convertFiles(
  workingDirectory: string
): Promise<Record<string, any>> {
  let tfFileContents = "";
  const tfJSONFileContents: Record<string, any>[] = [];

  for (const file of fs.readdirSync(workingDirectory)) {
    const filePath = path.resolve(workingDirectory, file);
    if (!fs.lstatSync(filePath).isDirectory()) {
      if (file.match(/\.tf$/)) {
        tfFileContents += fs.readFileSync(filePath, "utf-8");
        tfFileContents += "\n";
      } else if (file.match(/\.tf\.json$/)) {
        tfJSONFileContents.push(JSON.parse(fs.readFileSync(filePath, "utf-8")));
      }
    }
  }

  if (tfFileContents === "" && tfJSONFileContents.length === 0) {
    console.error(`No '.tf' or '.tf.json' files found in ${workingDirectory}`);
    return {};
  }

  return deepMerge(
    await parse("hcl2json.tf", tfFileContents),
    ...tfJSONFileContents
  );
}

export async function getReferencesInExpression(
  filename: string,
  expression: string
): Promise<Reference[]> {
  const ast = await getExpressionAst(filename, expression);
  if (!ast) {
    return [];
  }

  return findAllReferencesInAst(expression, ast);
}

export async function getExpressionAst(
  filename: string,
  expression: string
): Promise<ExpressionAst | null> {
  const res = await wasm.getExpressionAst(filename, expression);
  const ast = JSON.parse(res) as ExpressionAst;

  if (!ast) {
    return null;
  }

  return ast;
}
