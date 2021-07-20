import generate from "@babel/generator";
import template from "@babel/template";
import * as t from "@babel/types";
import { DirectedGraph } from "graphology";
import prettier from "prettier";

import { camelCase, pascalCase } from "./utils";
import {
  Resource,
  TerraformConfig,
  Module,
  Provider,
  Variable,
  Output,
} from "./schema";
import {
  referencesToAst,
  extractReferencesFromExpression,
  Reference,
  variableName,
  referenceToVariableName,
  extractDynamicBlocks,
} from "./expressions";

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

export const valueToTs = (
  item: any,
  nodeIds: string[],
  scopedIds: string[] = []
): t.Expression => {
  switch (typeof item) {
    case "string":
      return referencesToAst(
        item,
        extractReferencesFromExpression(item, nodeIds, scopedIds),
        scopedIds
      );
    case "boolean":
      return t.booleanLiteral(item);
    case "number":
      return t.numericLiteral(item);
    case "object":
      if (Array.isArray(item)) {
        return t.arrayExpression(
          item.map((i) => valueToTs(i, nodeIds, scopedIds))
        );
      }

      return t.objectExpression(
        Object.entries(item)
          .filter(([_key, value]) => value !== undefined)
          .map(([key, value]) => {
            if (key === "dynamic") {
              const { for_each, ...others } = value as any;
              const dynamicRef = Object.keys(others)[0];
              return t.objectProperty(
                t.identifier(dynamicRef),
                t.arrayExpression()
              );
            }

            return t.objectProperty(
              t.stringLiteral(key !== "for_each" ? camelCase(key) : key),
              typeof value === "object" &&
                !Array.isArray(value) &&
                key !== "tags"
                ? t.arrayExpression([valueToTs(value, nodeIds, scopedIds)])
                : valueToTs(value, nodeIds, scopedIds)
            );
          })
      );
  }
  throw new Error("Unsupported type " + item);
};

export function backendToExpression(
  tf: TerraformConfig["backend"],
  nodeIds: string[]
): t.Statement[] {
  return Object.entries(tf || {}).reduce(
    (carry, [type, [config]]) => [
      ...carry,
      t.expressionStatement(
        t.newExpression(
          t.memberExpression(
            t.identifier("cdktf"),
            t.identifier(pascalCase(`${type}Backend`))
          ),
          [
            t.thisExpression(),
            t.objectExpression(
              Object.entries(config).reduce(
                (arr, [property, value]) => [
                  ...arr,
                  t.objectProperty(
                    t.identifier(property),
                    valueToTs(value, nodeIds)
                  ),
                ],
                [] as t.ObjectProperty[]
              )
            ),
          ]
        )
      ),
    ],
    [] as t.Statement[]
  );
}

function addOverrideExpression(
  variable: string,
  path: string,
  value: t.Expression
) {
  return t.expressionStatement(
    t.callExpression(
      t.memberExpression(t.identifier(variable), t.identifier("addOverride")),
      [t.stringLiteral(path), value]
    )
  );
}

export function resource(
  type: string,
  key: string,
  id: string,
  item: Resource,
  graph: DirectedGraph
): t.Statement[] {
  const [provider, ...name] = type.split("_");
  const nodeIds = graph.nodes();
  const resource = `${provider}.${name.join("_")}`;

  const { for_each, count, ...config } = item[0];
  const dynBlocks = extractDynamicBlocks(config);

  const expressions = [
    ...asExpression(
      resource,
      key,
      config,
      nodeIds,
      false,
      getReference(graph, id) || dynBlocks.length
        ? {
            start: 0,
            end: 0,
            referencee: {
              id: `${type}.${key}`,
              full: `${type}.${key}`,
            },
          }
        : undefined
    ),
  ];
  const varName = variableName(resource, key);

  if (for_each) {
    const references = extractReferencesFromExpression(for_each, nodeIds, [
      "each",
    ]);
    expressions.push(
      addOverrideExpression(
        varName,
        "for_each",
        referencesToAst(for_each, references)
      )
    );
  }

  if (count) {
    const references = extractReferencesFromExpression(count, nodeIds, [
      "count",
    ]);
    expressions.push(
      addOverrideExpression(
        varName,
        "count",
        referencesToAst(count, references)
      )
    );
  }

  // Check for dynamic blocks
  return [
    ...expressions,
    // TODO: fix var name bug
    ...dynBlocks.map(({ path, for_each, content, scopedVar }) => {
      return addOverrideExpression(
        varName,
        path.substring(1), // The path starts with a dot that we don't want
        valueToTs(
          {
            for_each,
            content,
          },
          nodeIds,
          [scopedVar]
        )
      ) as any;
    }),
  ];
}

function asExpression(
  type: string,
  name: string,
  config: any,
  nodeIds: string[],
  isModule: boolean,
  reference?: Reference
) {
  const isNamespacedImport = !type.includes("./") && type.includes(".");
  const subject = isNamespacedImport
    ? t.memberExpression(
        t.identifier(type.split(".")[0]), // e.g. aws
        t.identifier(pascalCase(type.split(".")[1])) // e.g. NatGateway
      )
    : isModule
    ? t.memberExpression(
        t.identifier(pascalCase(type)),
        t.identifier(pascalCase(type))
      )
    : t.identifier(pascalCase(type));

  const { provider, providers, ...otherOptions } = config;

  const expression = t.newExpression(subject, [
    t.thisExpression(),
    t.stringLiteral(name),
    valueToTs(otherOptions, nodeIds),
  ]);

  const statements = [];
  const varName = reference
    ? referenceToVariableName(reference)
    : variableName(type, name);

  if (reference || providers || provider) {
    statements.push(
      t.variableDeclaration("const", [
        t.variableDeclarator(t.identifier(varName), expression),
      ])
    );
  } else {
    statements.push(t.expressionStatement(expression));
  }

  if (provider) {
    statements.push(
      addOverrideExpression(varName, "provider", valueToTs(provider, nodeIds))
    );
  }
  if (providers) {
    statements.push(
      addOverrideExpression(varName, "providers", valueToTs(providers, nodeIds))
    );
  }

  return statements;
}

export function output(
  key: string,
  _id: string,
  item: Output,
  graph: DirectedGraph
) {
  const nodeIds = graph.nodes();
  const [{ value, description, sensitive }] = item;

  return asExpression(
    "cdktf.TerraformOutput",
    key,
    {
      value,
      description,
      sensitive,
    },
    nodeIds,
    false
  );
}

export function variable(
  key: string,
  id: string,
  item: Variable,
  graph: DirectedGraph
) {
  // We don't handle type information right now
  const [{ type, ...props }] = item;
  const nodeIds = graph.nodes();

  return asExpression(
    "cdktf.TerraformVariable",
    key,
    props,
    nodeIds,
    false,
    getReference(graph, id)
  );
}

export function local(
  key: string,
  _id: string,
  item: any,
  graph: DirectedGraph
) {
  const nodeIds = graph.nodes();
  return t.variableDeclaration("const", [
    t.variableDeclarator(
      t.identifier(camelCase(key)),
      valueToTs(item, nodeIds)
    ),
  ]);
}

export function modules(
  key: string,
  id: string,
  item: Module,
  graph: DirectedGraph
) {
  const [{ source, version, ...props }] = item;
  const nodeIds = graph.nodes();

  return asExpression(
    source,
    key,
    props,
    nodeIds,
    true,
    getReference(graph, id)
  );
}

export function provider(
  key: string,
  _id: string,
  item: Provider[0],
  graph: DirectedGraph
) {
  const nodeIds = graph.nodes();
  const props = item;

  return asExpression(
    `${key}.${pascalCase(key + "Provider")}`,
    key,
    props,
    nodeIds,
    false
  );
}

export const cdktfImport = template(
  `import * as cdktf from "cdktf"`
)() as t.Statement;

export const providerImports = (
  provider: Record<string, Provider> | undefined
) =>
  Object.keys(provider || {}).map(
    (providerName) =>
      template(
        `import * as ${providerName} from "./.gen/providers/${providerName.replace(
          "./",
          ""
        )}"`
      )() as t.Statement
  );

export const moduleImports = (modules: Record<string, Module> | undefined) =>
  Object.values(modules || {}).map(
    ([{ source }]) =>
      template(
        `import * as ${pascalCase(
          source
        )} from "./.gen/modules/${source.replace("./", "")}"`
      )() as t.Statement
  );

export function gen(statements: t.Statement[]) {
  return prettier.format(generate(t.program(statements) as any).code, {
    parser: "babel",
  });
}
