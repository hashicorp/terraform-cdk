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
} from "./expressions";
import { TerraformModuleConstraint } from "@cdktf/provider-generator";
import { getBlockTypeAtPath } from "./provider";

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
  path: string,
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
      const unwrappedItem =
        getBlockTypeAtPath(scope.providerSchema, path)?.max_items === 1 &&
        Array.isArray(item)
          ? item[0]
          : item;

      if (Array.isArray(unwrappedItem)) {
        return t.arrayExpression(
          unwrappedItem.map((i) =>
            valueToTs(scope, i, path, nodeIds, scopedIds)
          )
        );
      }

      return t.objectExpression(
        Object.entries(unwrappedItem)
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

            const itemPath = `${path}.${key}`;

            const shouldBeArray =
              typeof value === "object" &&
              !Array.isArray(value) &&
              key !== "tags";

            return t.objectProperty(
              t.stringLiteral(key !== "for_each" ? camelCase(key) : key),
              shouldBeArray
                ? t.arrayExpression([
                    valueToTs(scope, value, itemPath, nodeIds, scopedIds),
                  ])
                : valueToTs(scope, value, itemPath, nodeIds, scopedIds)
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
                    valueToTs(
                      scope,
                      value,
                      "path-for-backends-can-be-ignored",
                      nodeIds
                    )
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

function addOverrideLogicalIdExpression(variable: string, logicalId: string) {
  const ast = t.expressionStatement(
    t.callExpression(
      t.memberExpression(
        t.identifier(variable),
        t.identifier("overrideLogicalId")
      ),
      [t.stringLiteral(logicalId)]
    )
  );

  t.addComment(
    ast,
    "leading",
    "This allows the Terraform resource name to match the original name. You can remove the call if you don't need them to match."
  );

  return ast;
}

function getRemoteStateType(item: Resource) {
  const backendRecord = item.find((val) => val.backend);
  if (backendRecord) {
    const backend = backendRecord.backend;
    switch (backend) {
      case "remote":
        return "";
      case "etcdv3":
        return "_etcd_v3";
      default:
        return `_${backend}`;
    }
  } else {
    return "";
  }
}

function resourceType(provider: string, name: string[], item: Resource) {
  switch (provider) {
    case "data.terraform":
      return `cdktf.data_terraform_${name.join("_")}${getRemoteStateType(
        item
      )}`;
    case "null":
      return `NullProvider.${name.join("_")}`;
    default:
      return `${provider}.${name.join("_")}`;
  }
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
  const resource = resourceType(provider, name, item);

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
    if (typeof count === "number") {
      expressions.push(
        addOverrideExpression(
          varName,
          "count",
          valueToTs(scope, count, "path-for-counts-can-be-ignored", nodeIds),
          loopComment
        )
      );
    } else {
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
          "path-for-dynamic-blocks-can-be-ignored",
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
  isProvider: boolean,
  reference?: Reference
) {
  const { provider, providers, lifecycle, ...otherOptions } = config as any;

  const constructId = uniqueId(scope.constructs, name);
  const overrideId = !isProvider && constructId !== name;

  const expression = t.newExpression(constructAst(type, isModuleImport), [
    t.thisExpression(),
    t.stringLiteral(constructId),
    valueToTs(scope, otherOptions, `${type}`, nodeIds),
  ]);

  const statements = [];
  const varName = reference
    ? referenceToVariableName(scope, reference)
    : variableName(scope, type, name);

  if (reference || providers || provider || lifecycle || overrideId) {
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
        valueToTs(
          scope,
          provider,
          "path-for-provider-blocks-can-be-ignored",
          nodeIds
        )
      )
    );
  }
  if (providers) {
    statements.push(
      addOverrideExpression(
        varName,
        "providers",
        valueToTs(
          scope,
          providers,
          "path-for-providers-blocks-can-be-ignored",
          nodeIds
        )
      )
    );
  }

  if (lifecycle) {
    statements.push(
      addOverrideExpression(
        varName,
        "lifecycle",
        valueToTs(
          scope,
          lifecycle,
          "path-for-lifecycle-blocks-can-be-ignored",
          nodeIds
        )
      )
    );
  }

  if (overrideId) {
    statements.push(addOverrideLogicalIdExpression(varName, name));
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
    false,
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
      valueToTs(scope, item, "path-for-local-blocks-can-be-ignored", nodeIds)
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

  const moduleConstraint = new TerraformModuleConstraint(source);

  return asExpression(
    scope,
    moduleConstraint.className,
    key,
    props,
    nodeIds,
    true,
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

  const importKey = key === "null" ? "NullProvider" : key;

  return asExpression(
    scope,
    `${importKey}.${pascalCase(key + "Provider")}`,
    key,
    props,
    nodeIds,
    false,
    true
  );
}

export const cdktfImport = template(
  `import * as cdktf from "cdktf"`
)() as t.Statement;

export const providerImports = (providers: string[]) =>
  providers.map((providerName) => {
    const parts = providerName.split("/");
    const name = parts.length > 1 ? parts[1] : parts[0];
    const importName = name === "null" ? "NullProvider" : name;
    return template(
      `import * as ${importName} from "./.gen/providers/${name.replace(
        "./",
        ""
      )}"`
    )() as t.Statement;
  });

export const moduleImports = (modules: Record<string, Module> | undefined) => {
  const uniqueModules = new Set<string>();
  Object.values(modules || {}).map(([module]) =>
    uniqueModules.add(module.source)
  );

  const imports: t.Statement[] = [];
  uniqueModules.forEach((m) => {
    const moduleConstraint = new TerraformModuleConstraint(m);
    imports.push(
      template.ast(
        `import * as ${moduleConstraint.className} from "./.gen/modules/${moduleConstraint.fileName}"`
      ) as t.Statement
    );
  });
  return imports;
};

export function gen(statements: t.Statement[]) {
  return prettier.format(generate(t.program(statements) as any).code, {
    parser: "babel",
  });
}
