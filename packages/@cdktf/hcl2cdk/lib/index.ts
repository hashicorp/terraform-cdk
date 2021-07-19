import { parse } from "@cdktf/hcl2json";
import generate from "@babel/generator";

import * as t from "@babel/types";
import prettier from "prettier";
import { schema } from "./schema";
import { DirectedGraph } from "graphology";
import * as rosetta from "jsii-rosetta";
import { findUsedReferences } from "./expressions";
import { cdktfImport, providerImports, moduleImports } from "./generation";
import * as path from "path";
import * as glob from "glob";
import * as fs from "fs";
import {
  backendToExpression,
  provider,
  variable,
  local,
  output,
  modules,
  resource,
} from "./generation";

// locals, variables, and outputs are global key value maps
function forEachGlobal<T, R>(
  prefix: string,
  record: Record<string, T> | undefined,
  iterator: (key: string, id: string, value: T, graph: DirectedGraph) => R
): Record<string, (graph: DirectedGraph) => R> {
  return Object.entries(record || {}).reduce((carry, [key, item]) => {
    const id = `${prefix}.${key}`;
    return {
      ...carry,
      [id]: (graph: DirectedGraph) => iterator(key, id, item, graph),
    };
  }, {});
}

function forEachProvider<T, R>(
  record: Record<string, T[]> | undefined,
  iterator: (key: string, id: string, value: T, graph: DirectedGraph) => R
): Record<string, (graph: DirectedGraph) => R> {
  return Object.entries(record || {}).reduce((carry, [key, items]) => {
    return {
      ...carry,
      ...items.reduce((innerCarry, item: T & { alias?: string }) => {
        const id = item.alias ? `${key}.${item.alias}` : key;
        return {
          ...innerCarry,
          [id]: (graph: DirectedGraph) => iterator(key, id, item, graph),
        };
      }, {}),
    };
  }, {});
}

// data and resource are namespaced key value maps
function forEachNamespaced<T, R>(
  record: Record<string, Record<string, T>> | undefined,
  iterator: (
    type: string,
    key: string,
    id: string,
    value: T,
    graph: DirectedGraph
  ) => R,
  prefix?: string
): Record<string, (graph: DirectedGraph) => R> {
  return Object.entries(record || {}).reduce(
    (outerCarry, [type, items]) => ({
      ...outerCarry,
      ...Object.entries(items).reduce((innerCarry, [key, item]) => {
        const id = prefix ? `${prefix}.${type}.${key}` : `${type}.${key}`;
        return {
          ...innerCarry,
          [id]: (graph: DirectedGraph) => iterator(type, key, id, item, graph),
        };
      }, {} as Record<string, (graph: DirectedGraph) => R>),
    }),
    {} as Record<string, (graph: DirectedGraph) => R>
  );
}

export async function convertToTypescript(filename: string, hcl: string) {
  const json = await parse(filename, hcl);
  const plan = schema.parse(json);

  const nodeMap = {
    ...forEachProvider(plan.provider, provider),
    ...forEachGlobal("var", plan.variable, variable),
    // locals are a special case
    ...forEachGlobal(
      "local",
      Array.isArray(plan.locals)
        ? plan.locals.reduce((carry, locals) => ({ ...carry, ...locals }), {})
        : {},
      local
    ),
    ...forEachGlobal("out", plan.output, output),
    ...forEachGlobal("module", plan.module, modules),
    ...forEachNamespaced(plan.resource, resource),
    ...forEachNamespaced(plan.data, resource, "data"),
  };

  const graph = new DirectedGraph();
  // Add all nodes so we can detect if an edge is added for an unknown link
  Object.entries(nodeMap).forEach(([key, value]) =>
    graph.addNode(key, { code: value })
  );
  const nodeIds = Object.keys(nodeMap);

  function addEdges(id: string, value: unknown) {
    findUsedReferences(nodeIds, value).forEach((ref) => {
      if (
        !graph.hasDirectedEdge(ref.referencee.id, id) &&
        graph.hasNode(ref.referencee.id) // in case the referencee is a dynamic variable
      ) {
        graph.addDirectedEdge(ref.referencee.id, id, { ref });
      }
    });
  }
  function addGlobalEdges(_key: string, id: string, value: unknown) {
    addEdges(id, value);
  }
  function addNamespacedEdges(
    _type: string,
    _key: string,
    id: string,
    value: unknown
  ) {
    addEdges(id, value);
  }

  Object.values({
    ...forEachGlobal("providers", plan.provider, addGlobalEdges),
    ...forEachGlobal("var", plan.variable, addGlobalEdges),
    // locals are a special case
    ...forEachGlobal(
      "local",
      Array.isArray(plan.locals)
        ? plan.locals.reduce((carry, locals) => ({ ...carry, ...locals }), {})
        : {},
      addGlobalEdges
    ),
    ...forEachGlobal("out", plan.output, addGlobalEdges),
    ...forEachGlobal("module", plan.module, addGlobalEdges),
    ...forEachNamespaced(plan.resource, addNamespacedEdges),
    ...forEachNamespaced(plan.data, addNamespacedEdges, "data"),
  }).forEach((cb) => cb(graph));

  const backendExpressions = plan.terraform?.reduce(
    (carry, terraform) => [
      ...carry,
      ...backendToExpression(terraform.backend, nodeIds),
    ],
    [] as t.Statement[]
  );

  const expressions: t.Statement[] = [];
  let nodesToVisit = [...nodeIds];

  while (nodesToVisit.length > 0) {
    graph.forEachNode((nodeId) => {
      if (!nodesToVisit.includes(nodeId)) {
        return;
      }

      const unresolvedDependencies = graph
        .inNeighbors(nodeId)
        .filter((item) => nodesToVisit.includes(item));

      if (unresolvedDependencies.length === 0) {
        nodesToVisit = nodesToVisit.filter((id) => nodeId !== id);
        const list = graph.getNodeAttribute(nodeId, "code")(graph);

        (Array.isArray(list) ? list : [list]).forEach((item) =>
          expressions.push(item)
        );
      }
    });
  }

  function gen(statements: t.Statement[]) {
    return prettier.format(generate(t.program(statements) as any).code, {
      parser: "babel",
    });
  }

  const cdktfImports = plan.terraform?.some(
    (tf) => Object.keys(tf.backend || {}).length > 0
  )
    ? [cdktfImport]
    : ([] as t.Statement[]);
  return {
    all: gen([
      ...cdktfImports,
      ...providerImports(plan.provider),
      ...moduleImports(plan.module),
      ...((backendExpressions || []) as any),
      ...expressions,
    ]),
    imports: gen([
      ...cdktfImports,
      ...providerImports(plan.provider),
      ...moduleImports(plan.module),
    ]),
    code: gen([...((backendExpressions || []) as any), ...expressions]),
    providers:
      plan.terraform?.reduce(
        (carry, { required_providers }) => [
          ...carry,
          ...(required_providers || []).reduce(
            (arr, providerBlock) => [
              ...arr,
              ...Object.values(providerBlock).map(
                ({ source, version }) => `${source}@~> ${version}`
              ),
            ],
            [] as string[]
          ),
        ],
        [] as string[]
      ) || [],
    modules: Object.values(plan.module || {}).reduce(
      (carry, moduleBlock) => [
        ...carry,
        ...moduleBlock.reduce(
          (arr, { source }) => [...arr, source],
          [] as string[]
        ),
      ],
      [] as string[]
    ),
  };
}

type File = { contents: string; fileName: string };
const translations = {
  typescript: (file: File) => file.contents,
  python: (file: File) =>
    rosetta.translateTypeScript(file, new rosetta.PythonVisitor()).translation,
  java: (file: File) =>
    rosetta.translateTypeScript(file, new rosetta.JavaVisitor()).translation,
  csharp: (file: File) =>
    rosetta.translateTypeScript(file, new rosetta.CSharpVisitor()).translation,
};

type ConvertOptions = {
  language: keyof typeof translations;
};

export async function convert(
  fileName: string,
  hcl: string,
  { language }: ConvertOptions
) {
  const translater = translations[language];

  if (!translater) {
    throw new Error("Unsupported language used: " + language);
  }
  const tsCode = await convertToTypescript(fileName, hcl);
  return {
    all: translater({ fileName, contents: tsCode.all }),
    imports: translater({ fileName, contents: tsCode.imports }),
    code: translater({ fileName, contents: tsCode.code }),
    providers: tsCode.providers,
    modules: tsCode.modules,
  };
}

export async function convertProject(
  importPath: string,
  targetPath: string,
  { language }: ConvertOptions
) {
  if (language !== "typescript") {
    throw new Error("Unsupported language used: " + language);
  }
  const absPath = path.resolve(importPath);
  const fileContents = glob
    .sync("./*.tf", { cwd: absPath })
    .map((p) => fs.readFileSync(path.resolve(absPath, p), "utf8"));

  const {
    imports,
    code,
    providers,
    modules: tfModules,
  } = await convert("combined.tf", fileContents.join("\n"), {
    language,
  });

  const mainFilePath = path.resolve(targetPath, "main.ts");
  const inputMainFile = fs.readFileSync(mainFilePath, "utf8");
  const importMainFile = [imports, inputMainFile].join("\n");

  const outputMainFile = importMainFile.replace(
    "// define resources here",
    code
  );
  fs.writeFileSync(mainFilePath, outputMainFile, "utf8");

  const cdktfPath = path.resolve(targetPath, "cdktf.json");
  const cdktfJson = require(cdktfPath);
  cdktfJson.terraformProviders = providers;
  cdktfJson.terraformModules = tfModules;
  fs.writeFileSync(cdktfPath, JSON.stringify(cdktfJson, null, 2), "utf8");
}
