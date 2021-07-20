import { parse } from "@cdktf/hcl2json";
import * as t from "@babel/types";
import prettier from "prettier";
import * as path from "path";
import * as glob from "glob";
import * as fs from "fs";
import { DirectedGraph } from "graphology";
import * as rosetta from "jsii-rosetta";

import { schema } from "./schema";
import { findUsedReferences } from "./expressions";
import { cdktfImport, providerImports, moduleImports, gen } from "./generation";
import { forEachProvider, forEachGlobal, forEachNamespaced } from "./iteration";
import {
  backendToExpression,
  provider,
  variable,
  local,
  output,
  modules,
  resource,
} from "./generation";

export async function convertToTypescript(filename: string, hcl: string) {
  // Get the JSON representation of the HCL
  const json = await parse(filename, hcl);

  // Ensure the JSON representation matches the expected structure
  const plan = schema.parse(json);

  // Get all items in the JSON as a map of id to function that generates the AST
  // We will use this to construct the nodes for a dependency graph
  // We need to use a function here because the same node has different representation based on if it's referenced by another one
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
  // Add all nodes to the dependency graph so we can detect if an edge is added for an unknown link
  Object.entries(nodeMap).forEach(([key, value]) =>
    graph.addNode(key, { code: value })
  );

  // Finding references becomes easier of the to be referenced ids are already known
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

  // We recursively inspect each resource value to find references to other values
  // We add these to a dependency graph so that the programming code has the right order
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

  // We traverse the dependency graph to get the unordered JSON nodes into an ordered array
  // where no node is referenced before it's defined
  // As we check that the nodes on both ends of an edge exist we can be sure
  // that no infinite loop exists, there can be no stray dependency on a node
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

  // In Terraform one can implicitly define the provider by using resources of that type
  const providerRequirements = Object.keys(plan.provider || {}).reduce(
    (carry, req) => ({ ...carry, [req]: "*" }),
    {} as Record<string, string>
  );
  plan.terraform?.forEach(({ required_providers }) =>
    (required_providers || []).forEach((providerBlock) =>
      Object.values(providerBlock).forEach(({ source, version }) => {
        // implicitly only the last part of the path is used (e.g. docker for kreuzwerker/docker)
        const parts = source.split("/");
        if (parts.length > 1) {
          delete providerRequirements[parts.pop() || ""];
        }
        providerRequirements[source] = version;
      })
    )
  );

  // We collect all module sources
  const moduleRequirements =
    Object.values(plan.module || {}).reduce(
      (carry, moduleBlock) => [
        ...carry,
        ...moduleBlock.reduce(
          (arr, { source }) => [...arr, source],
          [] as string[]
        ),
      ],
      [] as string[]
    ) || [];

  // Variables, Outputs, and Backends are defined in the CDKTF project so we need to import from it
  // If none are used we don't want to leave a stray import
  const cdktfImports =
    plan.terraform?.some((tf) => Object.keys(tf.backend || {}).length > 0) ||
    Object.keys({ ...plan.variable, ...plan.output }).length > 0
      ? [cdktfImport]
      : ([] as t.Statement[]);

  // We split up the generated code so that users can have more control over what to insert where
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
    providers: Object.entries(providerRequirements).map(([source, version]) =>
      version === "*" ? source : `${source}@~> ${version}`
    ),
    modules: moduleRequirements,
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

export function getProjectTerraformFiles(importPath: string) {
  const absPath = path.resolve(importPath);
  const fileContents = glob
    .sync("./*.tf", { cwd: absPath })
    .map((p) => fs.readFileSync(path.resolve(absPath, p), "utf8"));

  return fileContents.join("\n");
}

export async function convertProject(
  combinedHcl: string,
  inputMainFile: string,
  inputCdktfJson: Record<string, unknown>,
  { language }: ConvertOptions
) {
  if (language !== "typescript") {
    throw new Error("Unsupported language used: " + language);
  }

  const {
    imports,
    code,
    providers,
    modules: tfModules,
  } = await convert("combined.tf", combinedHcl, {
    language,
  });
  const importMainFile = [imports, inputMainFile].join("\n");
  const outputMainFile = importMainFile.replace(
    "// define resources here",
    code
  );

  const cdktfJson = { ...inputCdktfJson };
  cdktfJson.terraformProviders = providers;
  cdktfJson.terraformModules = tfModules;

  return {
    code: prettier.format(outputMainFile, { parser: "babel" }),
    cdktfJson: prettier.format(JSON.stringify(cdktfJson), { parser: "json" }),
  };
}
