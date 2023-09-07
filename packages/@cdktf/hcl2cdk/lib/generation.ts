// Copyright (c) HashiCorp, Inc
// SPDX-License-Identifier: MPL-2.0
import generate from "@babel/generator";
import template from "@babel/template";
import * as t from "@babel/types";
import { DirectedGraph } from "graphology";
import prettier from "prettier";

import {
  TerraformResourceBlock,
  ProgramScope,
  ResourceScope,
  ImportableConstruct,
  AttributePath,
} from "./types";
import { camelCase, logger, pascalCase, uniqueId } from "./utils";
import {
  Resource,
  TerraformConfig,
  Module,
  Provider,
  Variable,
  Output,
} from "./schema";
import { convertTerraformExpressionToTs, expressionAst } from "./expressions";
import { Reference } from "./types";
import { findUsedReferences } from "./references";
import {
  TerraformModuleConstraint,
  escapeAttributeName,
} from "@cdktf/provider-generator";
import {
  getTypeAtPath,
  isMapAttribute,
  getDesiredType,
} from "./terraformSchema";
import { Errors, AttributeType, BlockType, Schema } from "@cdktf/commons";
import { TFExpressionSyntaxTree as tex } from "@cdktf/hcl2json";
import { extractDynamicBlocks, isNestedDynamicBlock } from "./dynamic-blocks";
import {
  constructAst,
  referenceToVariableName,
  variableName,
} from "./variables";
import { snakeCase } from "cdktf/lib/util";
import { fillWithConfigAccessors } from "./partialCode";

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

export function attributeNameToCdktfName(name: string) {
  return escapeAttributeName(camelCase(name));
}

export const valueToTs = async (
  scope: ResourceScope,
  item: TerraformResourceBlock,
  path: string,
  isModule = false
): Promise<t.Expression> => {
  switch (typeof item) {
    case "string":
      if (
        (await findUsedReferences(scope.nodeIds, item)).some((ref) =>
          path.startsWith(ref.referencee.id)
        )
      ) {
        return t.stringLiteral(item);
      }

      return await convertTerraformExpressionToTs(scope, `"${item}"`, () =>
        getDesiredType(scope, path)
      );

    case "boolean":
      return await convertTerraformExpressionToTs(scope, `${item}`, () =>
        getDesiredType(scope, path)
      );
    case "number":
      return await convertTerraformExpressionToTs(scope, `${item}`, () =>
        getDesiredType(scope, path)
      );
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
                  isMapAttribute(attributeType)) &&
                !(path.startsWith("var.") && path.includes("validation"));

              return t.objectProperty(
                t.stringLiteral(
                  keepKeyName ? key : attributeNameToCdktfName(key)
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
      Object.entries(tf || {}).map(async ([type, [config]]) => {
        const backendIdentifier = pascalCase(`${type}Backend`);
        scope.importables.push({
          constructName: backendIdentifier,
          provider: "cdktf",
        });
        return t.expressionStatement(
          t.newExpression(t.identifier(backendIdentifier), [
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
          ])
        );
      })
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
      scope,
      `"${for_each}"`,
      () => ["list", "dynamic"]
    );

    scope.importables.push({
      provider: "cdktf",
      constructName: "TerraformIterator",
    });

    const iterator = t.variableDeclaration("const", [
      t.variableDeclarator(
        t.identifier(forEachIteratorName),
        t.callExpression(
          t.memberExpression(
            t.identifier("TerraformIterator"),
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

  let countIteratorName: string | undefined;
  if (count) {
    countIteratorName = variableName(scope, resource, `${key}_count`);
    const referenceAst = await convertTerraformExpressionToTs(
      scope,
      `"${count}"`,
      () => "number"
    );

    scope.importables.push({
      provider: "cdktf",
      constructName: "TerraformCount",
    });

    const iterator = t.variableDeclaration("const", [
      t.variableDeclarator(
        t.identifier(countIteratorName),
        t.callExpression(
          t.memberExpression(
            t.identifier("TerraformCount"),
            t.identifier("of")
          ),
          [referenceAst]
        )
      ),
    ]);
    t.addComment(iterator, "leading", loopComment);
    mappedConfig.count = t.identifier(countIteratorName);
    expressions.push(iterator);
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
      scope,
      `"${block.for_each}"`,
      () => ["list", "dynamic"]
    );

    scope.importables.push({
      provider: "cdktf",
      constructName: "TerraformIterator",
    });

    const iterator = t.variableDeclaration("const", [
      t.variableDeclarator(
        t.identifier(dynamicBlockIteratorName),
        t.callExpression(
          t.memberExpression(
            t.identifier("TerraformIterator"),
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
          fillWithConfigAccessors(
            scope,
            Array.isArray(block.content) ? block.content[0] : block.content,
            block.path.replace(block.scopedVar, "")
          ),
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

  const overrideReference = dynamicBlocksUsingOverrides.length
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
            "path-for-provisioners-can-be-ignored"
          )
        )
      )
    );
  }

  expressions = expressions.concat(
    await asExpression(
      { ...scope, forEachIteratorName, countIteratorName },
      resource,
      key,
      mappedConfig,
      false,
      false,
      getReference(graph, id) || overrideReference
    )
  );

  // Check for dynamic blocks
  expressions = expressions.concat(
    await Promise.all(
      dynamicBlocksUsingOverrides.map(async ({ path, for_each, content }) => {
        // We need to let the expression conversion know all available
        // dynamic block names, so we don't replace them. The "dynamic-block"
        // scoped variable indicates to the expression conversion to use the
        // key name instead of an iterator
        const scopedVariablesInPath = Object.fromEntries(
          path
            .substring(1) // The path starts with a dot that results in an empty split
            .split(".")
            .filter(
              (p) => !["dynamic", "content"].includes(p) && isNaN(parseInt(p))
            )
            .map((p) => [p, "dynamic-block"])
        );

        return addOverrideExpression(
          varName,
          path.substring(1), // The path starts with a dot that we don't want
          await valueToTs(
            {
              ...scope,
              withinOverrideExpression: true,
              scopedVariables: scopedVariablesInPath,
            },
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

  const completeObject = fillWithConfigAccessors(scope, otherOptions, type);

  const expression = t.newExpression(
    constructAst(scope, type, isModuleImport),
    [
      t.thisExpression(),
      t.stringLiteral(constructId),

      await valueToTs(
        scope,
        {
          ...completeObject,
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
  item: Output,
  _graph: DirectedGraph
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
    false,
    undefined
  );
}

export async function variableTypeToAst(
  scope: ProgramScope,
  type: string
): Promise<t.Expression> {
  const addVariableTypeToImports = () =>
    scope.importables.push({
      constructName: "VariableType",
      provider: "cdktf",
    });

  function parsedTypeToAst(type: tex.ExpressionType): t.Expression {
    if (tex.isScopeTraversalExpression(type)) {
      addVariableTypeToImports();
      switch (type.meta.value) {
        case "string":
          return t.identifier("VariableType.STRING");
        case "number":
          return t.identifier("VariableType.NUMBER");
        case "bool":
          return t.identifier("VariableType.BOOL");
        case "any":
        default:
          return t.identifier("VariableType.ANY");
      }
    }

    if (tex.isFunctionCallExpression(type)) {
      addVariableTypeToImports();
      switch (type.meta.name) {
        case "list":
        case "set":
        case "map":
        case "tuple":
        case "object":
          return t.callExpression(
            t.identifier(`VariableType.${type.meta.name}`),
            type.children.map((child) => parsedTypeToAst(child))
          );
      }
    }

    if (tex.isObjectExpression(type)) {
      return t.objectExpression(
        Object.entries(type.meta.items).map(([key, value]) =>
          t.objectProperty(
            t.stringLiteral(key),
            // This does not deal with complex types nested within objects
            // If such a type is found it will result in an Any type
            // e.g. { foo: list(string) } will result in { foo: any }
            parsedTypeToAst({
              type: "scopeTraversal",
              meta: { value },
            } as any)
          )
        )
      );
    }

    addVariableTypeToImports();
    return t.identifier("VariableType.ANY");
  }

  return parsedTypeToAst(await expressionAst(type));
}

export async function variable(
  scope: ProgramScope,
  key: string,
  id: string,
  item: Variable,
  graph: DirectedGraph
) {
  const [{ type, ...props }] = item;

  if (!getReference(graph, id)) {
    return [];
  }

  return asExpression(
    scope,
    id,
    key,
    { ...props, type: type ? await variableTypeToAst(scope, type) : undefined },
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

export function addImportForCodeContainer(
  scope: ProgramScope,
  codeContainer: string
) {
  switch (codeContainer) {
    case "constructs.Construct":
      scope.importables.push({
        provider: "constructs",
        constructName: "Construct",
      });
      break;

    case "cdktf.TerraformStack":
      scope.importables.push({
        provider: "cdktf",
        constructName: "TerraformStack",
      });
      break;
    default:
      throw Errors.Internal("Unsupported code container: " + codeContainer);
  }
}

export function wrapCodeInConstructor(
  codeContainer: string,
  code: t.Statement[],
  className: string,
  configTypeName?: string
) {
  let baseContainerClass: t.Identifier;
  switch (codeContainer) {
    case "constructs.Construct":
      baseContainerClass = t.identifier("Construct");
      break;

    case "cdktf.TerraformStack":
      baseContainerClass = t.identifier("TerraformStack");
      break;
    default:
      throw Errors.Internal("Unsupported code container: " + codeContainer);
  }
  if (configTypeName) {
    return template.statement(
      `
  class %%className%% extends %%base%% {
    constructor(scope: Construct, name: string, config: ${configTypeName}) {
      super(scope, name);
      %%code%%
    }
  }
`,
      { syntacticPlaceholders: true, plugins: ["typescript"] }
    )({
      code,
      base: baseContainerClass,
      className: t.identifier(className),
    });
  }
  return template.statement(
    `
  class %%className%% extends %%base%% {
    constructor(scope: Construct, name: string) {
      super(scope, name);
      %%code%%
    }
  }
`,
    { syntacticPlaceholders: true, plugins: ["typescript"] }
  )({ code, base: baseContainerClass, className: t.identifier(className) });
}

export const providerConstructImports = (importable: ImportableConstruct[]) => {
  let provider = importable[0].provider;
  let namespace = importable[0].namespace;
  const names = importable.map((i) => i.constructName);

  if (provider === "cdktf" || provider === "constructs") {
    return template(
      `import { ${names.join(", ")} } from "${provider}"`
    )() as t.Statement;
  }

  if (namespace) {
    namespace = snakeCase(namespace).replace(/_/g, "-");
  }

  // Special cases to undo provider names that we override
  if (provider === "NullProvider") {
    provider = "null";
  }

  return template(
    `import { ${names.join(
      ", "
    )} } from "./.gen/providers/${provider}/${namespace}"`
  )() as t.Statement;
};

export function buildImports(importables: ImportableConstruct[]) {
  const groupedImportables = importables.reduce((acc, importable) => {
    const ns = importable.namespace || "";
    // Doing some hacky ordering of the imports to make them look a bit nicer
    const prefix =
      importable.provider === "constructs"
        ? "1"
        : importable.provider === "cdktf"
        ? "2"
        : "3";
    const groupName = `${prefix}.${importable.provider}.${ns}`;
    const fullName = `${importable.provider}.${ns}.${importable.constructName}`;

    if (acc[groupName]) {
      const existsAlready = acc[groupName].some(
        (importable) =>
          `${importable.provider}.${ns}.${importable.constructName}` ===
          fullName
      );
      if (existsAlready) {
        return acc;
      }
      acc[groupName].push(importable);
      acc[groupName].sort();
    } else {
      acc[groupName] = [importable];
    }

    return acc;
  }, {} as Record<string, ImportableConstruct[]>);

  let commentAdded = false;
  const constructImports = Object.keys(groupedImportables)
    .sort()
    .map((groupName) => {
      const importStatement = providerConstructImports(
        groupedImportables[groupName]
      );

      if (groupName.startsWith("3.") && !commentAdded) {
        commentAdded = true;
        t.addComment(
          importStatement,
          "leading",
          `\n* Provider bindings are generated by running \`cdktf get\`.
* See https://cdk.tf/provider-generation for more details.\n`
        );
      }
      return importStatement;
    });

  return constructImports;
}

export function generateConfigType(
  name: string,
  config: Record<string, AttributePath>
): t.Statement {
  return t.tsInterfaceDeclaration(
    t.identifier(name),
    undefined,
    undefined,
    t.tsInterfaceBody(
      Object.entries(config).map(([key, _value]) =>
        t.tsPropertySignature(
          t.identifier(key),
          t.tSTypeAnnotation(t.tsAnyKeyword()) // TODO: Try to make this better than any
        )
      )
    )
  );
}
