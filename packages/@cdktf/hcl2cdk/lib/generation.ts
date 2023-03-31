// Copyright (c) HashiCorp, Inc
// SPDX-License-Identifier: MPL-2.0
import generate from "@babel/generator";
import template from "@babel/template";
import * as t from "@babel/types";
import { DirectedGraph } from "graphology";
import prettier from "prettier";

import { TerraformResourceBlock, ProgramScope, ResourceScope } from "./types";
import { camelCase, logger, pascalCase, uniqueId } from "./utils";
import {
  Resource,
  TerraformConfig,
  Module,
  Provider,
  Variable,
  Output,
} from "./schema";
import {
  Reference,
  variableName,
  referenceToVariableName,
  extractDynamicBlocks,
  constructAst,
  isNestedDynamicBlock,
  convertTerraformExpressionToTs,
} from "./expressions";
import {
  TerraformModuleConstraint,
  escapeAttributeName,
  AttributeType,
  BlockType,
  Schema,
} from "@cdktf/provider-generator";
import {
  getTypeAtPath,
  isMapAttribute,
  getDesiredType,
} from "./terraformSchema";
import { Errors } from "@cdktf/commons";

function getReference(graph: DirectedGraph, id: string) {
  logger.debug(`Finding reference for ${id}`);
  const neighbors = graph.outNeighbors(id);

  if (neighbors.length > 0) {
    logger.debug(`Found neighbors ${neighbors} for ${id}`);
    const edge = graph.directedEdge(id, neighbors[0]);

    if (edge) {
      logger.debug(`Found first edge ${edge} for ${id}`);
      logger.debug(
        `Returning reference ${graph.getEdgeAttribute(edge, "ref")}`
      );
      return graph.getEdgeAttribute(edge, "ref") as Reference;
    } else {
      logger.debug(`Found no edge for ${id}`);
      return undefined;
    }
  } else {
    return undefined;
  }
}

export const valueToTs = async (
  scope: ResourceScope,
  item: TerraformResourceBlock,
  path: string,
  isModule = false
): Promise<t.Expression> => {
  switch (typeof item) {
    case "string":
      return await convertTerraformExpressionToTs(`"${item}"`, scope, () =>
        getDesiredType(scope, path)
      );

    case "boolean":
      return t.booleanLiteral(item);
    case "number":
      return t.numericLiteral(item);
    case "object":
      if (item === undefined || item === null) {
        return t.nullLiteral();
      }

      // For iterators and dynamic blocks we put the correct TS expression in the config ahead of time
      if (t.isExpression(item)) {
        return item;
      }

      const attributeType = getTypeAtPath(scope.providerSchema, path);

      function shouldRemoveArrayBasedOnType(
        attributeType: Schema | AttributeType | BlockType | null
      ): boolean {
        if (!attributeType) {
          return false; // The default assumption is we need the array
        }

        // maps and object don't need to be wrapped in an array
        if (
          Array.isArray(attributeType) &&
          (attributeType[0] === "map" || attributeType[0] === "object")
        ) {
          return true;
        }

        // If it's a block type with max_items = 1 we don't need to wrap it in an array
        if (
          typeof attributeType === "object" &&
          "max_items" in attributeType &&
          attributeType.max_items === 1
        ) {
          return true;
        }

        return false;
      }

      const unwrappedItem =
        Array.isArray(item) &&
        (shouldRemoveArrayBasedOnType(attributeType) ||
          path.endsWith("lifecycle") ||
          path.endsWith("connection"))
          ? item[0]
          : item;

      if (Array.isArray(unwrappedItem)) {
        return t.arrayExpression(
          await Promise.all(
            unwrappedItem.map((i) => valueToTs(scope, i, `${path}.[]`))
          )
        );
      }

      return t.objectExpression(
        (
          await Promise.all(
            Object.entries(unwrappedItem).map(async ([key, value]) => {
              if (value === undefined) {
                return undefined;
              }

              if (key === "dynamic") {
                const { for_each, ...others } = value as any;
                const dynamicRef = Object.keys(others)[0];
                return t.objectProperty(
                  t.identifier(
                    scope.withinOverrideExpression
                      ? dynamicRef
                      : escapeAttributeName(camelCase(dynamicRef))
                  ),
                  t.arrayExpression()
                );
              }

              const itemPath = `${path}.${key}`;
              const itemAttributeType = getTypeAtPath(
                scope.providerSchema,
                itemPath
              );

              const typeMetadata = getTypeAtPath(
                scope.providerSchema,
                itemPath
              );

              const isSingleItemBlock =
                typeMetadata &&
                typeof typeMetadata === "object" &&
                typeMetadata.hasOwnProperty("max_items")
                  ? (typeMetadata as any).max_items === 1
                  : false;

              const shouldBeArray =
                typeof value === "object" &&
                !Array.isArray(value) &&
                !t.isExpression(value) &&
                !isSingleItemBlock &&
                // Map type attributes must not be wrapped in arrays
                !isMapAttribute(itemAttributeType) &&
                key !== "tags" &&
                key !== "forEach" &&
                key !== "lifecycle";

              const keepKeyName: boolean =
                !isModule &&
                key !== "depends_on" &&
                !path.includes("lifecycle") &&
                (key === "for_each" ||
                  !typeMetadata ||
                  isMapAttribute(attributeType));

              return t.objectProperty(
                t.stringLiteral(
                  keepKeyName ? key : escapeAttributeName(camelCase(key))
                ),
                shouldBeArray
                  ? t.arrayExpression([await valueToTs(scope, value, itemPath)])
                  : await valueToTs(scope, value, itemPath)
              );
            })
          )
        ).filter((expr) => expr !== undefined) as t.ObjectProperty[]
      );
  }
  throw new Error("Unsupported type " + item);
};

export async function backendToExpression(
  scope: ProgramScope,
  tf: TerraformConfig["backend"]
): Promise<t.Statement[]> {
  return (
    await Promise.all(
      Object.entries(tf || {}).map(async ([type, [config]]) =>
        t.expressionStatement(
          t.newExpression(
            t.memberExpression(
              t.identifier("cdktf"),
              t.identifier(pascalCase(`${type}Backend`))
            ),
            [
              t.thisExpression(),
              t.objectExpression(
                (
                  await Promise.all(
                    Object.entries(config).map(async ([property, value]) =>
                      t.objectProperty(
                        t.identifier(camelCase(property)),
                        await valueToTs(
                          scope,
                          value,
                          "path-for-backends-can-be-ignored"
                        )
                      )
                    )
                  )
                ).reduce(
                  (carry, item) => [...carry, item],
                  [] as t.ObjectProperty[]
                )
              ),
            ]
          )
        )
      )
    )
  ).reduce((carry, item) => [...carry, item], [] as t.Statement[]);
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

function mapConfigPerResourceType(resource: string, item: Resource[0]) {
  // Backends have a slightly different API
  if (resource.startsWith("cdktf.data_terraform_")) {
    return item.config;
  }
  return item;
}

const loopComment = `In most cases loops should be handled in the programming language context and 
not inside of the Terraform context. If you are looping over something external, e.g. a variable or a file input
you should consider using a for loop. If you are looping over something only known to Terraform, e.g. a result of a data source
you need to keep this like it is.`;
export async function resource(
  scope: ProgramScope,
  type: string,
  key: string,
  id: string,
  item: Resource,
  graph: DirectedGraph
): Promise<t.Statement[]> {
  const [provider, ...name] = type.split("_");
  const resource = resourceType(provider, name, item);

  if (!provider) {
    throw new Error(`Could not parse resource type '${type}'`);
  }
  let expressions: t.Statement[] = [];
  const varName = variableName(scope, resource, key);
  const { for_each, count, provisioner, ...config } = item[0];
  const mappedConfig = mapConfigPerResourceType(resource, config);

  let forEachIteratorName: string | undefined;
  if (for_each) {
    forEachIteratorName = variableName(
      scope,
      resource,
      `${key}_for_each_iterator`
    );
    const referenceAst = await convertTerraformExpressionToTs(
      `"${for_each}"`,
      scope,
      () => ["list", "dynamic"]
    );

    const iterator = t.variableDeclaration("const", [
      t.variableDeclarator(
        t.identifier(forEachIteratorName),
        t.callExpression(
          t.memberExpression(
            t.memberExpression(
              t.identifier("cdktf"),
              t.identifier("TerraformIterator")
            ),
            t.identifier("fromList")
          ),

          [referenceAst]
        )
      ),
    ]);
    t.addComment(iterator, "leading", loopComment);
    expressions.push(iterator);

    mappedConfig.forEach = t.identifier(forEachIteratorName);
  }

  const dynBlocks = extractDynamicBlocks(mappedConfig);
  const nestedDynamicBlocks = dynBlocks.filter((block) =>
    isNestedDynamicBlock(dynBlocks, block)
  );
  const dynamicBlocksUsingOverrides = dynBlocks.filter(
    (block) =>
      // nested blocks need overrides
      nestedDynamicBlocks.includes(block) ||
      // blocks that contain nested blocks need them as well
      nestedDynamicBlocks.some((nestedBlock) =>
        nestedBlock.path.startsWith(block.path)
      )
  );
  // all others can be handled by the CDKTF runtime
  const dynamicBlocksUsingRuntime = dynBlocks.filter(
    (block) => !dynamicBlocksUsingOverrides.includes(block)
  );

  for (const [i, block] of dynamicBlocksUsingRuntime.entries()) {
    const dynamicBlockIteratorName = variableName(
      scope,
      resource,
      `${key}_dynamic_iterator_${i}`
    );

    const referenceAst = await convertTerraformExpressionToTs(
      `"${block.for_each}"`,
      scope,
      () => ["list", "dynamic"]
    );

    const iterator = t.variableDeclaration("const", [
      t.variableDeclarator(
        t.identifier(dynamicBlockIteratorName),
        t.callExpression(
          t.memberExpression(
            t.memberExpression(
              t.identifier("cdktf"),
              t.identifier("TerraformIterator")
            ),
            t.identifier("fromList")
          ),
          [referenceAst]
        )
      ),
    ]);
    t.addComment(iterator, "leading", loopComment);
    expressions.push(iterator);
    const dynamicCallExpression = t.callExpression(
      t.memberExpression(
        t.identifier(dynamicBlockIteratorName),
        t.identifier("dynamic")
      ),
      [
        await valueToTs(
          {
            ...scope,
            scopedVariables: {
              [block.scopedVar]: dynamicBlockIteratorName,
            },
          },
          Array.isArray(block.content) ? block.content[0] : block.content,
          block.path.replace(block.scopedVar, ""),
          false
        ),
      ]
    );

    const parts = block.path
      .replace(`dynamic.${block.scopedVar}`, "")
      .split(".")
      .filter((p) => p.length > 0);

    const parent = parts.reduce((acc, part) => {
      if (Array.isArray(acc) && !Number.isNaN(parseInt(part, 10))) {
        return acc[parseInt(part, 10)];
      } else {
        return acc[part];
      }
    }, mappedConfig);
    parent[block.scopedVar] = dynamicCallExpression;
    delete parent.dynamic;
  }

  const overrideReference =
    dynamicBlocksUsingOverrides.length || count
      ? {
          start: 0,
          end: 0,
          referencee: {
            id: `${type}.${key}`,
            full: `${type}.${key}`,
          },
        }
      : undefined;

  if (provisioner) {
    mappedConfig.provisioners = await Promise.all(
      Object.entries(provisioner).flatMap(([type, p]: [string, any]) =>
        p.map((pp: Record<string, any>) =>
          valueToTs(
            scope,
            { type, ...pp },
            "path-for-provisioners-can-be-ignored",
            nodeIds
          )
        )
      )
    );
  }

  expressions = expressions.concat(
    await asExpression(
      { ...scope, forEachIteratorName },
      resource,
      key,
      mappedConfig,
      false,
      false,
      getReference(graph, id) || overrideReference
    )
  );

  if (count) {
    if (typeof count === "number") {
      expressions.push(
        addOverrideExpression(
          varName,
          "count",
          await valueToTs(
            { ...scope, withinOverrideExpression: true },
            count,
            "path-for-counts-can-be-ignored"
          ),
          loopComment
        )
      );
    } else {
      const referenceAst = await convertTerraformExpressionToTs(
        `"${count}"`,
        scope,
        () => "number"
      );

      expressions.push(
        addOverrideExpression(varName, "count", referenceAst, loopComment)
      );
    }
  }

  // Check for dynamic blocks
  expressions = expressions.concat(
    await Promise.all(
      dynamicBlocksUsingOverrides.map(async ({ path, for_each, content }) => {
        return addOverrideExpression(
          varName,
          path.substring(1), // The path starts with a dot that we don't want
          await valueToTs(
            { ...scope, withinOverrideExpression: true },
            {
              for_each,
              content,
            },
            "path-for-dynamic-blocks-can-be-ignored"
          ),
          loopComment
        );
      })
    )
  );

  return expressions;
}

async function asExpression(
  scope: ResourceScope,
  type: string,
  name: string,
  config: TerraformResourceBlock,
  isModuleImport: boolean,
  isProvider: boolean,
  reference?: Reference
) {
  const { providers, ...otherOptions } = config as any;

  const constructId = uniqueId(scope.constructs, name);
  const overrideId = !isProvider && constructId !== name;

  const expression = t.newExpression(
    constructAst(scope, type, isModuleImport),
    [
      t.thisExpression(),
      t.stringLiteral(constructId),
      await valueToTs(
        scope,
        {
          ...otherOptions,
          providers:
            providers && Object.keys(providers).length
              ? Object.entries(providers).map(([key, value]) => ({
                  moduleAlias: key,
                  provider: value,
                }))
              : undefined,
        },
        `${type}`,
        isModuleImport
      ),
    ]
  );

  const statements = [];
  const varName = reference
    ? referenceToVariableName(scope, reference)
    : variableName(scope, type, name);

  if (reference || overrideId) {
    statements.push(
      t.variableDeclaration("const", [
        t.variableDeclarator(t.identifier(varName), expression),
      ])
    );
  } else {
    statements.push(t.expressionStatement(expression));
  }

  if (overrideId) {
    statements.push(addOverrideLogicalIdExpression(varName, name));
  }

  return statements;
}

export async function output(
  scope: ProgramScope,
  key: string,
  _id: string,
  item: Output
) {
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
    false,
    false
  );
}

export async function variable(
  scope: ProgramScope,
  key: string,
  id: string,
  item: Variable,
  graph: DirectedGraph
) {
  // We don't handle type information right now
  const [{ type, ...props }] = item;

  if (!getReference(graph, id)) {
    return [];
  }

  return asExpression(
    scope,
    "cdktf.TerraformVariable",
    key,
    props,
    false,
    false,
    getReference(graph, id)
  );
}

export async function local(
  scope: ProgramScope,
  key: string,
  id: string,
  item: TerraformResourceBlock,
  graph: DirectedGraph
): Promise<t.VariableDeclaration[]> {
  logger.debug(`Initializing local resource ${key} with id ${id}`);
  if (!getReference(graph, id)) {
    logger.debug(`No reference found for ${key}`);
    return [];
  }
  return [
    t.variableDeclaration("const", [
      t.variableDeclarator(
        t.identifier(variableName(scope, "local", key)),
        await valueToTs(scope, item, "path-for-local-blocks-can-be-ignored")
      ),
    ]),
  ];
}

export async function modules(
  scope: ProgramScope,
  key: string,
  id: string,
  item: Module,
  graph: DirectedGraph
) {
  const [{ source, version, ...props }] = item;

  const moduleConstraint = new TerraformModuleConstraint(source);

  return asExpression(
    scope,
    moduleConstraint.className,
    key,
    props,
    true,
    false,
    getReference(graph, id)
  );
}

export async function provider(
  scope: ProgramScope,
  key: string,
  id: string,
  item: Provider[0],
  graph: DirectedGraph
) {
  const { version, ...props } = item;

  const importKey = key === "null" ? "NullProvider" : key;

  return asExpression(
    scope,
    `${importKey}.${pascalCase(key)}Provider`,
    key,
    props,
    false,
    true,
    getReference(graph, id)
  );
}

export const cdktfImport = template(
  `import * as cdktf from "cdktf"`
)() as t.Statement;

export const constructsImport = template(
  `import * as constructs from "constructs"`
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

export async function gen(statements: t.Statement[]) {
  logger.debug(`Generating code for ${JSON.stringify(statements, null, 2)}`);
  const code = prettier.format(generate(t.program(statements) as any).code, {
    parser: "babel",
  });

  logger.debug(`Generated code:\n${code}`);

  return code;
}

export function wrapCodeInConstructor(
  codeContainer: string,
  code: t.Statement[],
  className = "MyConvertedCode"
) {
  let baseContainerClass: t.MemberExpression;
  switch (codeContainer) {
    case "constructs.Construct":
      baseContainerClass = t.memberExpression(
        t.identifier("constructs"),
        t.identifier("Construct")
      );
      break;

    case "cdktf.TerraformStack":
      baseContainerClass = t.memberExpression(
        t.identifier("cdktf"),
        t.identifier("TerraformStack")
      );
      break;
    default:
      throw Errors.Internal("Unsupported code container: " + codeContainer);
  }

  return template.statement(
    `
  class %%className%% extends %%base%% {
    constructor(scope: constructs.Construct, name: string) {
      super(scope, name);
      %%code%%
    }
  }
`,
    { syntacticPlaceholders: true, plugins: ["typescript"] }
  )({ code, base: baseContainerClass, className: t.identifier(className) });
}
