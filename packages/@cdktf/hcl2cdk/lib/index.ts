import { parse } from "@cdktf/hcl2json";
import generate from "@babel/generator";
import template from "@babel/template";
import * as t from "@babel/types";
import prettier from "prettier";
import { pascalCase, camelCase } from "change-case";
import { schema, Output, Variable, Provider } from "./schema";
import { DirectedGraph } from "graphology";

type ConvertOptions = {
  language: "typescript";
};

const valueToTs = (item: any): t.Expression => {
  switch (typeof item) {
    case "string":
      if (item.startsWith("${") && !item.includes("(") && !item.includes("*")) {
        // It's a HCL Expression, we assume it is just a variable reference
        // e.g. ${aws_s3_bucket.foo.id}
        const hclExpr = item.substr(2, item.length - 3);
        const [resource, name, ...selector] = hclExpr.split(".");
        const variableReference = t.identifier(
          camelCase([resource, name].join("_"))
        );

        return selector.reduce(
          (carry, member) => t.memberExpression(carry, t.identifier(member)),
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

export async function convert(
  filename: string,
  hcl: string,
  options: ConvertOptions
) {
  if (options.language !== "typescript") {
    throw new Error("Unsupported language used: " + options.language);
  }

  const json = await parse(filename, hcl);
  console.log(JSON.stringify(json));
  const plan = schema.parse(json);

  const construct = (
    subject: t.Expression,
    name: string,
    config: Record<string, any>,
    variableName?: string
  ) => {
    const expression = t.newExpression(subject, [
      t.thisExpression(),
      t.stringLiteral(name),
      valueToTs(config),
    ]);

    return variableName
      ? t.variableDeclaration("const", [
          t.variableDeclarator(t.identifier(variableName), expression),
        ])
      : t.expressionStatement(expression);
  };

  function output(key: string, _id: string, item: Output): t.Statement {
    const [{ value, description, sensitive }] = item;
    return construct(t.identifier("TerraformOutput"), key, {
      value,
      description,
      sensitive,
    });
  }

  function variable(key: string, _id: string, item: Variable): t.Statement {
    // We don't handle type information right now
    const [{ type, ...props }] = item;
    return construct(t.identifier("TerraformVariable"), key, props);
  }
  function local(key: string, _id: string, item: any): t.Statement {
    return t.variableDeclaration("const", [
      t.variableDeclarator(t.identifier(camelCase(key)), valueToTs(item)),
    ]);
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

  function resource(
    type: string,
    key: string,
    id: string,
    item: Provider,
    graph: DirectedGraph
  ): t.Statement {
    const isReferenced = graph.outNeighbors(id).length > 0;
    const [provider, ...name] = type.split("_");
    return construct(
      t.memberExpression(
        t.identifier(provider),
        t.identifier(pascalCase(name.join("_")))
      ),
      key,
      item[0],
      isReferenced ? camelCase(id) : undefined
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
    findUsedReferences(nodeIds, value).forEach((ref) =>
      graph.addDirectedEdge(ref, id)
    );
  }
  function addNamespacedEdges(
    _type: string,
    _key: string,
    id: string,
    value: unknown
  ) {
    findUsedReferences(nodeIds, value).forEach((ref) =>
      graph.addDirectedEdge(ref, id)
    );
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
    ...forEachNamespaced(plan.resource, addNamespacedEdges),
    ...forEachNamespaced(plan.data, addNamespacedEdges, "data"),
  }).forEach((cb) => cb(graph));

  const expressions: t.Statement[] = [];
  let nodesToVisit = [...nodeIds];

  console.log(graph.export());
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

  const imports = Object.keys(plan.provider || {}).map(
    (providerName) =>
      template(
        `import * as ${providerName} from "./.gen/${providerName}"`
      )() as t.Statement
  );

  const { code } = generate(t.program([...imports, ...expressions]) as any);
  return prettier.format(code, { parser: "babel" });
}
