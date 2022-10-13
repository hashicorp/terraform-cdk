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
  getReferencesInExpression: (filename: string, hcl: string) => Promise<string>;
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
): Promise<Record<string, any> | void> {
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

  if (tfFileContents === "" && tfJSONFileContents === []) {
    console.error(`No '.tf' or '.tf.json' files found in ${workingDirectory}`);
    return;
  }

  return deepMerge(
    await parse("hcl2json.tf", tfFileContents),
    ...tfJSONFileContents
  );
}

type CodeMarker = {
  Byte: number;
  Line: number;
  Column: number;
};
type Range = {
  End: CodeMarker;
  Start: CodeMarker;
};
type TerraformTraversalPart = {
  Name: string;
  SrcRange: Range;
};
// Reference to a variable / module / resource
type TerraformTraversal = { Traversal: TerraformTraversalPart[] };
type PropertyAccessExpression = TerraformTraversal & {
  Source: TerraformObject; // it's probably more restricted, but in this context we don't care
};
type TerraformFunctionCall = {
  Args: TerraformObject[];
  Name: string;
  ExpandFinal: boolean;
  NameRange: Range;
  OpenParenRange: Range;
  CloseParenRange: Range;
};
type TerraformLiteral = {
  SrcRange: Range;
  Val: unknown; // No value is passed down, we ignore them
};
type TerraformEmbeddedExpression = {
  Wrapped: TerraformObject;
};
type TerraformExpression = {
  Parts: TerraformObject[];
};
type ArithmeticExpression = {
  LHS: TerraformObject;
  RHS: TerraformObject;
};
type ConditionExpression = {
  Condition: TerraformObject;
  TrueResult: TerraformObject;
  FalseResult: TerraformObject;
};
type ForExpression = {
  KeyVar: string;
  ValVar: string;
  CollExpr: TerraformObject;
  KeyExpr: TerraformObject;
  ValExpr: TerraformObject;
  CondExpr: TerraformObject;
};
type BracketPropertyAccessExpression = {
  Collection: TerraformObject;
  Key: TerraformObject; // it's probably more restricted, but in this context we don't care
};
type ListExpression = {
  Exprs?: TerraformObject[] | null;
};

type TerraformObject =
  | ArithmeticExpression
  | BracketPropertyAccessExpression
  | ConditionExpression
  | ForExpression
  | ListExpression
  | PropertyAccessExpression
  | TerraformEmbeddedExpression
  | TerraformExpression
  | TerraformFunctionCall
  | TerraformLiteral
  | TerraformTraversal;

type GoExpressionParseResult = null | TerraformObject;

type Reference = { value: string; startPosition: number; endPosition: number };

function traversalToReference(
  input: string,
  traversal: TerraformTraversal
): Reference {
  const lines = input.split("\n");
  const lineLength = lines.map((line) => line.length);

  function position(marker: CodeMarker) {
    const newlineChar = 1;
    return (
      lineLength
        .slice(0, marker.Line)
        .reduce((a, b) => a + b + newlineChar, lines.length === 1 ? 0 : -1) +
      marker.Column
    );
  }

  // We do not want to include property access through brackets here
  // although it is technically a traversal / reference
  function onlyTakeTraversalPartsUntilFirstBracketPropertyAccess(
    traversals: TerraformTraversalPart[]
  ) {
    let filtered = [];

    for (const traversal of traversals) {
      if ("Name" in traversal) {
        filtered.push(traversal);
      } else {
        // We reached a bracket, stop
        return filtered;
      }
    }

    return filtered;
  }
  const filteredParts = onlyTakeTraversalPartsUntilFirstBracketPropertyAccess(
    traversal.Traversal
  );

  const startPosition = position(filteredParts[0].SrcRange.Start);
  const endPosition = position(
    filteredParts[filteredParts.length - 1].SrcRange.End
  );

  return {
    value: input.slice(startPosition, endPosition),
    startPosition,
    endPosition,
  };
}

function findAllReferencesInAst(
  input: string,
  entry: TerraformObject | undefined | null
): Reference[] {
  if (!entry) {
    return [];
  }

  // This traversal is accessing a function call e.g. element(var.foo, 0).id
  // Or this is a splat operation var.foo.*
  if ("Source" in entry) {
    return findAllReferencesInAst(input, entry.Source);
  }

  // a.b.c.d is a traversal
  if ("Traversal" in entry) {
    return [traversalToReference(input, entry)];
  }

  // Multiple terraform parts in an expression
  if ("Parts" in entry) {
    return entry.Parts.flatMap((part) => findAllReferencesInAst(input, part));
  }

  // ${} is an embedded expression
  if ("Wrapped" in entry) {
    return findAllReferencesInAst(input, entry.Wrapped);
  }

  // element(var.foo, 0) is a function call
  if ("Args" in entry) {
    return entry.Args.flatMap((arg) => findAllReferencesInAst(input, arg));
  }

  // var.foo + var.bar is an arithmetic expression
  if ("LHS" in entry) {
    return [
      ...findAllReferencesInAst(input, entry.LHS),
      ...findAllReferencesInAst(input, entry.RHS),
    ];
  }

  // var.foo > 3 ? var.bar : var.baz is a condition expression
  if ("Condition" in entry) {
    return [
      ...findAllReferencesInAst(input, entry.Condition),
      ...findAllReferencesInAst(input, entry.TrueResult),
      ...findAllReferencesInAst(input, entry.FalseResult),
    ];
  }

  // for name, user in var.users : user.role => name... is a for expression
  if ("CondExpr" in entry) {
    return [
      ...findAllReferencesInAst(input, entry.CollExpr),
      ...findAllReferencesInAst(input, entry.CondExpr),
    ];
  }

  // var.foo["bar"] is a bracket property access expression
  if ("Key" in entry) {
    return [
      ...findAllReferencesInAst(input, entry.Collection),
      ...findAllReferencesInAst(input, entry.Key),
    ];
  }

  // [var.foo, var.bar] is a list expression
  if ("Exprs" in entry) {
    return (entry.Exprs || []).flatMap((expr) =>
      findAllReferencesInAst(input, expr)
    );
  }

  return [];
}

export async function getReferencesInExpression(
  filename: string,
  expression: string
): Promise<Reference[]> {
  const res = await wasm.getReferencesInExpression(
    filename,
    JSON.stringify(expression)
  );
  const ast = JSON.parse(res) as GoExpressionParseResult;

  if (!ast) {
    return [];
  }

  return findAllReferencesInAst(expression, ast);
}
