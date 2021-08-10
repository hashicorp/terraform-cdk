import generate from "@babel/generator";
import template from "@babel/template";
import * as t from "@babel/types";
import { DirectedGraph } from "graphology";
import prettier from "prettier";

import { TerraformResourceBlock, Scope } from "./types";
import { camelCase, pascalCase, uniqueId } from "./utils";
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
  constructAst,
  isRegistryModule,
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
  scope: Scope,
  item: TerraformResourceBlock,
  nodeIds: string[],
  scopedIds: string[] = []
): t.Expression => {
  switch (typeof item) {
    case "string":
      return referencesToAst(
        scope,
        item,
        extractReferencesFromExpression(item, nodeIds, scopedIds),
        scopedIds
      );
    case "boolean":
      return t.booleanLiteral(item);
    case "number":
      return t.numericLiteral(item);
    case "object":
      if (item === undefined || item === null) {
        return t.nullLiteral();
      }

      if (Array.isArray(item)) {
        return t.arrayExpression(
          item.map((i) => valueToTs(scope, i, nodeIds, scopedIds))
        );
      }

      return t.objectExpression(
        Object.entries(item)
          .map(([key, value]) => {
            if (key === "lifecycle" || value === undefined) {
              return undefined;
            }

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
                ? t.arrayExpression([
                    valueToTs(scope, value, nodeIds, scopedIds),
                  ])
                : valueToTs(scope, value, nodeIds, scopedIds)
            );
          })
          .filter((expr) => expr !== undefined) as t.ObjectProperty[]
      );
  }
  throw new Error("Unsupported type " + item);
};

export function backendToExpression(
  scope: Scope,
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
                    t.identifier(camelCase(property)),
                    valueToTs(scope, value, nodeIds)
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
  value: t.Expression,
  explanatoryComment?: string
) {
  const ast = t.expressionStatement(
    t.callExpression(
      t.memberExpression(t.identifier(variable), t.identifier("addOverride")),
      [t.stringLiteral(path), value]
    )
  );

  if (explanatoryComment) {
    t.addComment(ast, "leading", explanatoryComment);
  }

  return ast;
}

export function resource(
  scope: Scope,
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
  const overrideReference =
    dynBlocks.length || count || for_each
      ? {
          start: 0,
          end: 0,
          referencee: {
            id: `${type}.${key}`,
            full: `${type}.${key}`,
          },
        }
      : undefined;

  const expressions = [
    ...asExpression(
      scope,
      resource,
      key,
      config,
      nodeIds,
      false,
      getReference(graph, id) || overrideReference
    ),
  ];
  const varName = variableName(scope, resource, key);

  const loopComment = `In most cases loops should be handled in the programming language context and 
not inside of the Terraform context. If you are looping over something external, e.g. a variable or a file input
you should consider using a for loop. If you are looping over something only known to Terraform, e.g. a result of a data source
you need to keep this like it is.`;
  if (for_each) {
    const references = extractReferencesFromExpression(for_each, nodeIds, [
      "each",
    ]);
    expressions.push(
      addOverrideExpression(
        varName,
        "for_each",
        referencesToAst(scope, for_each, references),
        loopComment
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
        referencesToAst(scope, count, references),
        loopComment
      )
    );
  }

  // Check for dynamic blocks
  return [
    ...expressions,
    ...dynBlocks.map(({ path, for_each, content, scopedVar }) => {
      return addOverrideExpression(
        varName,
        path.substring(1), // The path starts with a dot that we don't want
        valueToTs(
          scope,
          {
            for_each,
            content,
          },
          nodeIds,
          [scopedVar]
        ),
        loopComment
      );
    }),
  ];
}

function asExpression(
  scope: Scope,
  type: string,
  name: string,
  config: TerraformResourceBlock,
  nodeIds: string[],
  isModuleImport: boolean,
  reference?: Reference
) {
  const { provider, providers, lifecycle, ...otherOptions } = config as any;

  const expression = t.newExpression(constructAst(type, isModuleImport), [
    t.thisExpression(),
    t.stringLiteral(uniqueId(scope.constructs, name)),
    valueToTs(scope, otherOptions, nodeIds),
  ]);

  const statements = [];
  const varName = reference
    ? referenceToVariableName(scope, reference)
    : variableName(scope, type, name);

  if (reference || providers || provider || lifecycle) {
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
      addOverrideExpression(
        varName,
        "provider",
        valueToTs(scope, provider, nodeIds)
      )
    );
  }
  if (providers) {
    statements.push(
      addOverrideExpression(
        varName,
        "providers",
        valueToTs(scope, providers, nodeIds)
      )
    );
  }

  if (lifecycle) {
    statements.push(
      addOverrideExpression(
        varName,
        "lifecycle",
        valueToTs(scope, lifecycle, nodeIds)
      )
    );
  }

  return statements;
}

export function output(
  scope: Scope,
  key: string,
  _id: string,
  item: Output,
  graph: DirectedGraph
) {
  const nodeIds = graph.nodes();
  const [{ value, description, sensitive }] = item;

  return asExpression(
    scope,
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
  scope: Scope,
  key: string,
  id: string,
  item: Variable,
  graph: DirectedGraph
) {
  // We don't handle type information right now
  const [{ type, ...props }] = item;
  const nodeIds = graph.nodes();

  if (!getReference(graph, id)) {
    return [];
  }

  return asExpression(
    scope,
    "cdktf.TerraformVariable",
    key,
    props,
    nodeIds,
    false,
    getReference(graph, id)
  );
}

export function local(
  scope: Scope,
  key: string,
  id: string,
  item: TerraformResourceBlock,
  graph: DirectedGraph
) {
  const nodeIds = graph.nodes();
  if (!getReference(graph, id)) {
    return [];
  }
  return t.variableDeclaration("const", [
    t.variableDeclarator(
      t.identifier(variableName(scope, "local", key)),
      valueToTs(scope, item, nodeIds)
    ),
  ]);
}

export function modules(
  scope: Scope,
  key: string,
  id: string,
  item: Module,
  graph: DirectedGraph
) {
  const [{ source, version, ...props }] = item;
  const nodeIds = graph.nodes();

  if (isRegistryModule(source)) {
    return asExpression(
      scope,
      source,
      key,
      props,
      nodeIds,
      true,
      getReference(graph, id)
    );
  }

  return asExpression(
    scope,
    "cdktf.TerraformHclModule",
    key,
    { ...props, source },
    nodeIds,
    false,
    getReference(graph, id)
  );
}

export function provider(
  scope: Scope,
  key: string,
  _id: string,
  item: Provider[0],
  graph: DirectedGraph
) {
  const nodeIds = graph.nodes();
  const { version, ...props } = item;

  return asExpression(
    scope,
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

export const providerImports = (providers: string[]) =>
  providers.map((providerName) => {
    const parts = providerName.split("/");
    const name = parts.length > 1 ? parts[1] : parts[0];
    return template(
      `import * as ${name} from "./.gen/providers/${name.replace("./", "")}"`
    )() as t.Statement;
  });

export const moduleImports = (modules: Record<string, Module> | undefined) =>
  Object.values(modules || {})
    .filter(([{ source }]) => isRegistryModule(source))
    .map(
      ([{ source }]) =>
        template(
          `import * as ${pascalCase(source)} from "./.gen/modules/${source}"`
        )() as t.Statement
    );

export function gen(statements: t.Statement[]) {
  return prettier.format(generate(t.program(statements) as any).code, {
    parser: "babel",
  });
}
