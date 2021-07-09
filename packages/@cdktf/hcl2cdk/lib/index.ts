import { parse } from "@cdktf/hcl2json";
import generate from "@babel/generator";
import template from "@babel/template";
import * as t from "@babel/types";
import prettier from "prettier";
import { pascalCase, camelCase } from "change-case";
import { schema, Output, Variable, Provider, Module, Resource } from "./schema";
import { DirectedGraph } from "graphology";
import * as rosetta from "jsii-rosetta";
import {
  Reference,
  extractReferencesFromExpression,
  varibaleName,
  referencesToAst,
  referenceToVariableName,
} from "./expressions";

const valueToTs = (item: any, nodeIds: readonly string[]): t.Expression => {
  switch (typeof item) {
    case "string":
      return referencesToAst(
        item,
        extractReferencesFromExpression(item, nodeIds)
      );
    case "boolean":
      return t.booleanLiteral(item);
    case "number":
      return t.numericLiteral(item);
    case "object":
      if (Array.isArray(item)) {
        return t.arrayExpression(item.map((i) => valueToTs(i, nodeIds)));
      }

      if (Object.keys(item).includes("count")) {
        throw new Error(
          `Unsupported Terraform feature found: count loops are not yet supported: ${JSON.stringify(
            item
          )}`
        );
      }

      return t.objectExpression(
        Object.entries(item)
          .filter(([_key, value]) => value !== undefined)
          .map(([key, value]) =>
            t.objectProperty(
              t.stringLiteral(camelCase(key)),
              valueToTs(value, nodeIds)
            )
          )
      );
  }
  throw new Error("Unsupported type " + item);
};

function findUsedReferences(
  nodeIds: string[],
  item: unknown,
  references: Reference[] = []
): Reference[] {
  if (Array.isArray(item)) {
    return [
      ...references,
      ...item.reduce(
        (carry, i) => [...carry, ...findUsedReferences(nodeIds, i)],
        []
      ),
    ];
  }

  if (typeof item === "object") {
    return [
      ...references,
      ...Object.values(item as Record<string, any>).reduce(
        (carry, i) => [...carry, ...findUsedReferences(nodeIds, i)],
        []
      ),
    ];
  }

  if (typeof item === "string") {
    const extractedRefs = extractReferencesFromExpression(item, nodeIds);
    return [...references, ...extractedRefs];
  }
  return references;
}

function asExpression(
  type: string,
  name: string,
  config: any,
  nodeIds: readonly string[],
  reference?: Reference
) {
  const isNamespacedImport = type.includes(".");
  const subject = isNamespacedImport
    ? t.memberExpression(
        t.identifier(type.split(".")[0]), // e.g. aws
        t.identifier(pascalCase(type.split(".")[1])) // e.g. NatGateway
      )
    : t.identifier(pascalCase(type));

  const expression = t.newExpression(subject, [
    t.thisExpression(),
    t.stringLiteral(name),
    valueToTs(config, nodeIds),
  ]);
  return reference
    ? t.variableDeclaration("const", [
        t.variableDeclarator(
          t.identifier(referenceToVariableName(reference)),
          expression
        ),
      ])
    : t.expressionStatement(expression);
}
function output(
  key: string,
  _id: string,
  item: Output,
  graph: DirectedGraph
): t.Statement {
  const nodeIds = graph.nodes();
  const [{ value, description, sensitive }] = item;

  return asExpression(
    "TerraformOutput",
    key,
    {
      value,
      description,
      sensitive,
    },
    nodeIds
  );
}

function variable(
  key: string,
  id: string,
  item: Variable,
  graph: DirectedGraph
): t.Statement {
  // We don't handle type information right now
  const [{ type, ...props }] = item;
  const nodeIds = graph.nodes();

  return asExpression(
    "TerraformVariable",
    key,
    props,
    nodeIds,
    getReference(graph, id)
  );
}

function local(
  key: string,
  _id: string,
  item: any,
  graph: DirectedGraph
): t.Statement {
  const nodeIds = graph.nodes();
  return t.variableDeclaration("const", [
    t.variableDeclarator(
      t.identifier(camelCase(key)),
      valueToTs(item, nodeIds)
    ),
  ]);
}

function modules(
  key: string,
  id: string,
  item: Module,
  graph: DirectedGraph
): t.Statement {
  const [{ source, ...props }] = item;
  const nodeIds = graph.nodes();

  return asExpression(source, key, props, nodeIds, getReference(graph, id));
}

function provider(
  key: string,
  _id: string,
  item: Provider,
  graph: DirectedGraph
): t.Statement {
  const nodeIds = graph.nodes();
  const props = item[0];

  if (props.alias) {
    throw new Error(
      `Unsupported Terraform feature found at "${key}": provider alias are not yet supported`
    );
  }

  return asExpression(
    `${key}.${pascalCase(key + "Provider")}`,
    key,
    props,
    nodeIds
  );
}
function getReference(graph: DirectedGraph, id: string) {
  const neighbors = graph.outNeighbors(id);
  if (neighbors.length > 0) {
    const edge = graph.directedEdge(id, neighbors[0]);
    if (edge) {
      return graph.getEdgeAttribute(edge, "ref") as Reference;
    } else {
      return undefined;
    }
  } else {
    return undefined;
  }
}

function resource(
  type: string,
  key: string,
  id: string,
  item: Resource,
  graph: DirectedGraph
): t.Statement | t.Statement[] {
  const [provider, ...name] = type.split("_");
  const nodeIds = graph.nodes();
  const resource = `${provider}.${name.join("_")}`;

  const { for_each, count, ...config } = item[0];
  const expression = asExpression(
    resource,
    key,
    config,
    nodeIds,
    getReference(graph, id)
  );

  if (for_each) {
    const references = extractReferencesFromExpression(for_each, nodeIds);
    const forEachOverrideExpression = t.expressionStatement(
      t.callExpression(
        t.memberExpression(
          t.identifier(varibaleName(resource, id)),
          t.identifier("addOverride")
        ),
        [t.stringLiteral("for_each"), referencesToAst(for_each, references)]
      )
    );
    return [expression, forEachOverrideExpression];
  }

  if (count) {
    const references = extractReferencesFromExpression(count, nodeIds);
    const forEachOverrideExpression = t.expressionStatement(
      t.callExpression(
        t.memberExpression(
          t.identifier(varibaleName(resource, id)),
          t.identifier("addOverride")
        ),
        [t.stringLiteral("count"), referencesToAst(count, references)]
      )
    );
    return [expression, forEachOverrideExpression];
  }

  return expression;
}

// locals, provider, variables, and outputs are global key value maps
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
    ...forEachGlobal("providers", plan.provider, provider),
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

  // Add Edges
  function addGlobalEdges(_key: string, id: string, value: unknown) {
    findUsedReferences(nodeIds, value).forEach((ref) => {
      if (!graph.hasDirectedEdge(ref.referencee.id, id)) {
        graph.addDirectedEdge(ref.referencee.id, id, { ref });
      }
    });
  }
  function addNamespacedEdges(
    _type: string,
    _key: string,
    id: string,
    value: unknown
  ) {
    findUsedReferences(nodeIds, value).forEach((ref) => {
      if (!graph.hasDirectedEdge(ref.referencee.id, id)) {
        graph.addDirectedEdge(ref.referencee.id, id, { ref });
      }
    });
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

  const providerImports = Object.keys(plan.provider || {}).map(
    (providerName) =>
      template(
        `import * as ${providerName} from "./.gen/${providerName}"`
      )() as t.Statement
  );

  const moduleImports = Object.values(plan.module || {}).map(
    ([{ source }]) =>
      template(
        `import * as ${pascalCase(source)} from "./.gen/${source}"`
      )() as t.Statement
  );

  function gen(statements: t.Statement[]) {
    return prettier.format(generate(t.program(statements) as any).code, {
      parser: "babel",
    });
  }

  return {
    all: gen([...providerImports, ...moduleImports, ...expressions]),
    imports: gen([...providerImports, ...moduleImports]),
    code: gen(expressions),
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
  };
}
