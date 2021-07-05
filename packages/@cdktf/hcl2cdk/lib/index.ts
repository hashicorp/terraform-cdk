import { parse } from "@cdktf/hcl2json";
import generate from "@babel/generator";
import template from "@babel/template";
import * as t from "@babel/types";
import prettier from "prettier";
import { pascalCase, camelCase } from "change-case";
import { schema, Output, Variable, Provider, Module } from "./schema";
import { DirectedGraph } from "graphology";

type ConvertOptions = {
  language: "typescript";
};

const valueToTs = (item: any): t.Expression => {
  switch (typeof item) {
    case "string":
      if (item.startsWith("${")) {
        if (item.includes("(")) {
          throw new Error(
            `Unsupported Terraform feature found: Functions are not yet supported: ${item}`
          );
        }

        if (item.includes("?")) {
          throw new Error(
            `Unsupported Terraform feature found: Conditionals are not yet supported: ${item}`
          );
        }

        if (
          item.includes("for") &&
          item.includes("in") &&
          item.includes("=>")
        ) {
          throw new Error(
            `Unsupported Terraform feature found: For expressions are not yet supported: ${item}`
          );
        }

        if (
          ["!", "-", "+", "-", ">", "<", "&&", "||"].some((op) =>
            item.includes(op)
          )
        ) {
          throw new Error(
            `Unsupported Terraform feature found: Arithmetics are not yet supported: ${item}`
          );
        }

        if (item.includes("*")) {
          throw new Error(
            `Unsupported Terraform feature found: Splat operations (resource.name.*.property) are not yet supported: ${item}`
          );
        }

        // It's a HCL Expression, we assume it is just a variable reference
        // e.g. ${aws_s3_bucket.foo.id}
        const hclExpr = item.substr(2, item.length - 3);
        const [resource, name, ...selector] = hclExpr.split(".");
        const variableReference = t.identifier(
          camelCase([resource, name].join("_"))
        );

        return selector.reduce(
          (carry, member, index) =>
            t.memberExpression(
              carry,
              t.identifier(
                index === 0 && resource === "module"
                  ? camelCase(member + "Output")
                  : camelCase(member)
              )
            ),
          variableReference as t.Expression
        );
      }
      return t.stringLiteral(item);
    case "boolean":
      return t.booleanLiteral(item);
    case "number":
      return t.numericLiteral(item);
    case "object":
      if (Array.isArray(item)) {
        return t.arrayExpression(item.map(valueToTs));
      }

      if (
        Object.keys(item).includes("for_each") ||
        Object.keys(item).includes("count")
      ) {
        throw new Error(
          `Unsupported Terraform feature found: for-each loops are not yet supported: ${JSON.stringify(
            item
          )}`
        );
      }

      return t.objectExpression(
        Object.entries(item)
          .filter(([_key, value]) => value !== undefined)
          .map(([key, value]) =>
            t.objectProperty(t.stringLiteral(camelCase(key)), valueToTs(value))
          )
      );
  }
  throw new Error("Unsupported type " + item);
};

function findUsedReferences(
  nodeIds: string[],
  item: unknown,
  references: string[] = []
): string[] {
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
    const node = nodeIds.find((id) => item.includes(id));
    if (node) {
      return [...references, node];
    }
    return references;
  }
  return references;
}

const referenceableExpression = (
  expression: t.Expression,
  variableName?: string
) =>
  variableName
    ? t.variableDeclaration("const", [
        t.variableDeclarator(t.identifier(variableName), expression),
      ])
    : t.expressionStatement(expression);

const construct = (
  subject: t.Expression,
  name: string,
  config: Record<string, any>,
  variableName?: string
) =>
  referenceableExpression(
    t.newExpression(subject, [
      t.thisExpression(),
      t.stringLiteral(name),
      valueToTs(config),
    ]),
    variableName
  );

export async function convert(
  filename: string,
  hcl: string,
  options: ConvertOptions
) {
  if (options.language !== "typescript") {
    throw new Error("Unsupported language used: " + options.language);
  }

  const json = await parse(filename, hcl);
  const plan = schema.parse(json);

  function output(key: string, _id: string, item: Output): t.Statement {
    const [{ value, description, sensitive }] = item;
    return construct(t.identifier("TerraformOutput"), key, {
      value,
      description,
      sensitive,
    });
  }

  function variable(
    key: string,
    id: string,
    item: Variable,
    graph: DirectedGraph
  ): t.Statement {
    // We don't handle type information right now
    const [{ type, ...props }] = item;
    return construct(
      t.identifier("TerraformVariable"),
      key,
      props,
      isReferenced(graph, id) ? camelCase(id) : undefined
    );
  }

  function local(key: string, _id: string, item: any): t.Statement {
    return referenceableExpression(valueToTs(item), camelCase(key));
  }

  function modules(
    key: string,
    id: string,
    item: Module,
    graph: DirectedGraph
  ): t.Statement {
    const [{ source, ...props }] = item;
    return construct(
      t.identifier(pascalCase(source)),
      key,
      props,
      isReferenced(graph, id) ? camelCase(id) : undefined
    );
  }

  // TODO: support alias
  function provider(key: string, _id: string, item: Provider): t.Statement {
    return construct(
      t.memberExpression(
        t.identifier(key),
        t.identifier(pascalCase(`${key}Provider`))
      ),
      key,
      item[0]
    );
  }
  function isReferenced(graph: DirectedGraph, id: string) {
    return graph.outNeighbors(id).length > 0;
  }

  function resource(
    type: string,
    key: string,
    id: string,
    item: Provider,
    graph: DirectedGraph
  ): t.Statement {
    const [provider, ...name] = type.split("_");
    return construct(
      t.memberExpression(
        t.identifier(provider),
        t.identifier(pascalCase(name.join("_")))
      ),
      key,
      item[0],
      isReferenced(graph, id) ? camelCase(id) : undefined
    );
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
            [id]: (graph: DirectedGraph) =>
              iterator(type, key, id, item, graph),
          };
        }, {} as Record<string, (graph: DirectedGraph) => R>),
      }),
      {} as Record<string, (graph: DirectedGraph) => R>
    );
  }

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
      if (!graph.hasDirectedEdge(ref, id)) {
        graph.addDirectedEdge(ref, id);
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
      if (!graph.hasDirectedEdge(ref, id)) {
        graph.addDirectedEdge(ref, id);
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
        expressions.push(graph.getNodeAttribute(nodeId, "code")(graph));
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
