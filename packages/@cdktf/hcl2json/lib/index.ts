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

type CodeMarker = {
  byte: number;
  line: number;
  column: number;
};
type Range = {
  end: CodeMarker;
  start: CodeMarker;
};
type TerraformTraversalPart = {
  segment: string;
  range: Range;
};

type ExpressionMeta = {
  value: string;
};
type ScopeTraversalExpressionMeta = ExpressionMeta & {
  fullAccessor: string;
  traversal: TerraformTraversalPart[];
};
type ForExpressionMeta = ExpressionMeta & {
  keyVar: string;
  valVar: string;
  collectionExpression: string;
  conditionalExpression: string;
};

type ExpressionAst = {
  type: string;
  meta: ExpressionMeta | ScopeTraversalExpressionMeta | ForExpressionMeta;
  children: ExpressionAst[];
  range: Range;
};

type Reference = { value: string; startPosition: number; endPosition: number };

function traversalToReference(
  input: string,
  traversalExpression: ExpressionAst,
  localVariables?: string[]
): Reference | null {
  const lines = input.split("\n");
  const lineLength = lines.map((line) => line.length);
  const meta = traversalExpression.meta as ScopeTraversalExpressionMeta;

  function position(marker: CodeMarker) {
    const newlineChar = 1;
    return (
      lineLength
        .slice(0, marker.line)
        .reduce((a, b) => a + b + newlineChar, lines.length === 1 ? 0 : -1) +
      marker.column
    );
  }

  // We do not want to include property access through brackets here
  // although it is technically a traversal / reference
  function onlyTakeTraversalPartsUntilFirstBracketPropertyAccess(
    traversals: TerraformTraversalPart[]
  ) {
    let filtered = [];
    let index = 0;

    for (const traversal of traversals) {
      if ("segment" in traversal) {
        if (index === 0) {
          // We are at the first traversal, check if it is a local variable
          if (localVariables?.includes(traversal.segment)) {
            // We reached a local variable, stop
            return [];
          }
        }
        filtered.push(traversal);
      } else {
        // We reached a bracket, stop
        return filtered;
      }
    }

    return filtered;
  }

  const filteredParts = onlyTakeTraversalPartsUntilFirstBracketPropertyAccess(
    meta.traversal
  );

  if (filteredParts.length === 0) {
    return null;
  }

  const startPosition = position(filteredParts[0].range.start);
  const endPosition = position(
    filteredParts[filteredParts.length - 1].range.end
  );

  return {
    value: filteredParts.map((part) => part.segment).join("."),
    startPosition,
    endPosition,
  };
}

function findChildWithValue(expr: ExpressionAst, value: string) {
  return expr.children.find((child) => {
    return child.meta.value === value;
  });
}

function findAllReferencesInAst(
  input: string,
  entry: ExpressionAst | undefined | null,
  parent?: ExpressionAst
): Reference[] {
  if (!entry) {
    return [];
  }

  switch (entry.type) {
    case "scopeTraversal":
      // For traversals within a for expression,
      // we want to ignore the local variables of the for expression
      if (parent?.type === "for") {
        const meta = parent.meta as ForExpressionMeta;
        const reference = traversalToReference(input, entry, [
          meta.keyVar,
          meta.valVar,
        ]);
        if (reference) return [reference];
        return [];
      }
      const reference = traversalToReference(input, entry);
      if (reference) return [reference];
      return [];

    case "for": {
      const meta = entry.meta as ForExpressionMeta;
      return [
        ...findAllReferencesInAst(
          input,
          findChildWithValue(entry, meta.collectionExpression),
          entry
        ),
        ...findAllReferencesInAst(
          input,
          findChildWithValue(entry, meta.conditionalExpression),
          entry
        ),
      ];
    }
    default:
      return entry.children
        .map((child) => findAllReferencesInAst(input, child))
        .flat();
  }
}

export async function getReferencesInExpression(
  filename: string,
  expression: string
): Promise<Reference[]> {
  const ast = await getExpressionAst(filename, expression);

  return findAllReferencesInAst(expression, ast);
}

export async function getExpressionAst(
  filename: string,
  expression: string
): Promise<any> {
  if (expression.startsWith("${")) {
    expression = `"${expression}"`;
  }
  const res = await wasm.getExpressionAst(filename, expression);
  const ast = JSON.parse(res) as ExpressionAst;

  if (!ast) {
    return {};
  }

  return ast;
}
