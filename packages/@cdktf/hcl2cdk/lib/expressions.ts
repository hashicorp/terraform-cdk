// Copyright (c) HashiCorp, Inc
// SPDX-License-Identifier: MPL-2.0
import * as t from "@babel/types";
import reservedWords from "reserved-words";
import { camelCase, logger, pascalCase } from "./utils";
import { TerraformResourceBlock, ProgramScope, ResourceScope } from "./types";
import { getReferencesInExpression } from "@cdktf/hcl2json";
import { getFullProviderName } from "./provider";

export type Reference = {
  start: number;
  end: number;
  referencee: { id: string; full: string }; // identifier for resource
  useFqn?: boolean;
  isVariable?: boolean;
};

const DOLLAR_REGEX = /\$/g;

export async function extractReferencesFromExpression(
  input: string,
  nodeIds: readonly string[],
  scopedIds: readonly string[] = [] // dynamics introduce new scoped variables that are not the globally accessible ids
): Promise<Reference[]> {
  logger.debug(`extractReferencesFromExpression(${input})`);
  const possibleVariableSpots = await getReferencesInExpression(
    "main.tf",
    input
  );

  logger.debug(
    `found possible variable spots: ${JSON.stringify(possibleVariableSpots)}`
  );

  return possibleVariableSpots.reduce((carry, spot) => {
    const { value, startPosition, endPosition } = spot;
    // no reference
    if (
      !value.includes(".") || // just a literal
      value.startsWith(".") || // dangling property access
      value.endsWith("...") || // spread (likely in for loop)
      value.startsWith("count.") || // count variable
      value.startsWith("each.") || // each variable
      // https://www.terraform.io/docs/language/expressions/references.html#filesystem-and-workspace-info
      value.startsWith("path.module") ||
      value.startsWith("path.root") ||
      value.startsWith("path.cwd") ||
      value.startsWith("terraform.workspace") ||
      value.startsWith("self.") // block local value
    ) {
      logger.debug(`skipping ${value}`);
      return carry;
    }

    const referenceParts = value.split(".");

    logger.debug(
      `Searching for node id '${value}' in ${JSON.stringify(nodeIds)}`
    );
    const corespondingNodeId = [...nodeIds, ...scopedIds].find((id) => {
      const parts = id.split(".");
      const matchesFirst = parts[0] === referenceParts[0];
      const matchesFirstTwo =
        matchesFirst &&
        (parts[1] === referenceParts[1] || referenceParts.length === 1);

      return (
        matchesFirstTwo &&
        (parts[0] === "data" ? parts[2] === referenceParts[2] : true)
      );
    });

    if (!corespondingNodeId) {
      // This is most likely a false positive, so we just ignore it
      // We include the log below to help debugging
      logger.error(
        `Found a reference that is unknown: ${input} has reference "${value}". The id was not found in ${JSON.stringify(
          nodeIds
        )} with temporary values ${JSON.stringify(scopedIds)}.
        Please leave a comment at https://cdk.tf/bugs/convert-expressions if you run into this issue.`
      );
      return carry;
    }

    if (scopedIds.includes(corespondingNodeId)) {
      logger.debug(`skipping '${value}' since it's a scoped variable`);
      return carry;
    }
    logger.debug(`Found node id '${corespondingNodeId}'`);

    const spotParts = value.split(".");
    let isThereANumericAccessor = false;
    const referenceSpotParts = spotParts.filter((part) => {
      if (!Number.isNaN(parseInt(part, 10))) {
        isThereANumericAccessor = true;
        return false;
      }

      return !isThereANumericAccessor;
    });
    const fullReference = isThereANumericAccessor
      ? referenceSpotParts.slice(0, 2).join(".")
      : value;

    const isVariable = value.startsWith("var.");
    const useFqn =
      // Can not use FQN on vars
      !isVariable &&
      // Can not use FQN on locals
      !value.startsWith("local.") &&
      // If the following character is
      (input.substr(endPosition + 1, 1) === "*" || // a * (splat) we need to use the FQN
        input.substr(endPosition, 1) === "[" || // a property access
        isThereANumericAccessor || // a numeric access
        fullReference.split(".").length < 3);

    const ref: Reference = {
      start: startPosition,
      end: endPosition,
      referencee: {
        id: corespondingNodeId,
        full: fullReference,
      },
      useFqn,
      isVariable,
    };
    logger.debug(`Found reference ${JSON.stringify(ref)}`);
    return [...carry, ref];
  }, [] as Reference[]);
}

export type IteratorVariable = {
  start: number;
  end: number;
  value: string;
};
export async function extractIteratorVariablesFromExpression(
  input: string
): Promise<IteratorVariable[]> {
  const possibleVariableSpots = await getReferencesInExpression(
    "main.tf",
    input
  );

  return possibleVariableSpots
    .filter((spot) => spot.value.startsWith("each."))
    .map((spot) => ({
      start: spot.startPosition,
      end: spot.endPosition,
      value: spot.value,
    }));
}

export function referenceToVariableName(
  scope: ProgramScope,
  ref: Reference
): string {
  const parts = ref.referencee.id.split(".");
  const resource = parts[0] === "data" ? `${parts[0]}.${parts[1]}` : parts[0];
  const name = parts[0] === "data" ? parts[2] : parts[1];
  return variableName(scope, resource, name);
}

function validVarName(name: string) {
  if (reservedWords.check(name)) {
    return `${name}Var`;
  }

  if (!Number.isNaN(parseInt(name[0], 10))) {
    return `d${name}`;
  }

  return name;
}

export function variableName(
  scope: ProgramScope,
  resource: string,
  name: string
): string {
  // name collision, we need to prefix the name
  if (scope.variables[name]) {
    if (resource === scope.variables[name].resource) {
      return scope.variables[name].variableName;
    }

    // we only cache one per name
    return validVarName(camelCase([resource, name].join("_")));
  }

  const variableName = validVarName(
    camelCase(
      ["var", "local", "module"].includes(resource)
        ? name
        : [resource, name].join("_")
    )
  );

  scope.variables[name] = {
    variableName,
    resource,
  };
  return variableName;
}

export function constructAst(
  scope: ProgramScope,
  type: string,
  isModuleImport: boolean
) {
  if (isModuleImport) {
    return t.memberExpression(t.identifier(type), t.identifier(type));
  }

  function getUniqueName(provider: string, type: string) {
    // early abort on cdktf
    if (provider === "cdktf") {
      return pascalCase(type.replace("cdktf_", ""));
    }

    if (provider === "NullProvider") {
      return pascalCase(type.replace("NullProvider_", ""));
    }

    // Special handling for provider blocks, e.g. aws_AwsProvider
    if (type === `${pascalCase(provider)}Provider`) {
      return type;
    }

    const fullProviderName = getFullProviderName(
      scope.providerSchema,
      provider
    );
    if (fullProviderName && scope.providerGenerator[fullProviderName]) {
      return scope.providerGenerator[fullProviderName]?.getClassNameForResource(
        type
      );
    } else {
      // If we can not find the class name for a resource the caller needs to find a sensible default
      return null;
    }
  }

  function getResourceNamespace(
    provider: string,
    resource: string,
    isDataSource: boolean
  ) {
    // happens e.g. for references to cdktf.TerraformStack (and similar) in generated code
    if (provider === "cdktf") {
      return undefined;
    }

    // e.g. awsProvider -> provider
    if (
      resource === pascalCase(`${provider}_provider`) ||
      (provider === "NullProvider" && resource === "NullProvider")
    ) {
      return "provider";
    }

    const fullProviderName = getFullProviderName(
      scope.providerSchema,
      provider
    );
    if (fullProviderName && scope.providerGenerator[fullProviderName]) {
      return camelCase(
        scope.providerGenerator[fullProviderName]?.getNamespaceNameForResource(
          type.replace(/\./g, "_")
        )
      );
    }

    if (isDataSource) {
      return camelCase(`data_${provider}_${resource}`);
    }

    return camelCase(resource);
  }

  // resources or data sources
  if (!type.includes("./") && type.includes(".")) {
    const parts = type.split(".");
    if (parts[0] === "data") {
      const [, provider, resource] = parts;

      const namespace = getResourceNamespace(provider, resource, true);
      const resourceName =
        getUniqueName(provider, parts.join("_")) ||
        pascalCase(`data_${provider}_${resource}`);

      if (namespace) {
        return t.memberExpression(
          t.memberExpression(
            t.identifier(provider), // e.g. aws
            t.identifier(namespace) // e.g. dataAwsInstance
          ),
          t.identifier(resourceName) // e.g. DataAwsInstance
        );
      }

      return t.memberExpression(
        t.identifier(provider), // e.g. aws
        t.identifier(resourceName) // e.g. DataAwsNatGateway
      );
    }

    const [provider, resource] = parts;
    const namespace = getResourceNamespace(provider, resource, false);
    const resourceName =
      getUniqueName(provider, parts.join("_")) || pascalCase(resource);

    if (namespace) {
      return t.memberExpression(
        t.memberExpression(
          t.identifier(provider), // e.g. aws
          t.identifier(namespace) // e.g. instance
        ),
        t.identifier(resourceName) // e.g. Instance
      );
    }
    return t.memberExpression(
      t.identifier(provider), // e.g. google
      t.identifier(resourceName) // e.g. BigQueryTable
    );
  }

  return t.identifier(pascalCase(type));
}

export function referenceToAst(scope: ProgramScope, ref: Reference) {
  const [resource, , ...selector] = ref.referencee.full.split(".");

  const variableReference = t.identifier(
    camelCase(referenceToVariableName(scope, ref))
  );

  if (resource === "data") {
    selector.shift(); // remove the data part so that the name is not used in the selector
  }

  const accessor = selector.reduce(
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

  if (ref.useFqn) {
    return t.memberExpression(accessor, t.identifier("fqn"));
  }

  if (ref.isVariable) {
    return t.memberExpression(accessor, t.identifier("value"));
  }
  return accessor;
}

// Transforms a path with segments into literals describing the path
export function getPropertyAccessPath(input: string): string[] {
  return input
    .split(/(\[|\]|\.)/g)
    .filter((p) => p.length > 0 && p !== "." && p !== "[" && p !== "]")
    .map((p) => (p.startsWith(`"`) && p.endsWith(`"`) ? p.slice(1, -1) : p));
}

// TODO: Write tests for this
export function iteratorVariableToAst(
  scope: ResourceScope,
  iteratorVariable: IteratorVariable
) {
  // TODO: This is not the case for dynamic blocks which should not run into this code path right now
  if (!scope.forEachIteratorName) {
    throw new Error(
      `Can not create AST for iterator variable of '${iteratorVariable.value}' without forEachIteratorName`
    );
  }

  if (iteratorVariable.value === "each.key") {
    return t.memberExpression(
      t.identifier(scope.forEachIteratorName),
      t.identifier("key")
    );
  }
  if (iteratorVariable.value === "each.value") {
    return t.memberExpression(
      t.identifier(scope.forEachIteratorName),
      t.identifier("value")
    );
  }

  if (
    iteratorVariable.value.startsWith("each.value") &&
    (iteratorVariable.value.includes("[") ||
      iteratorVariable.value.includes("."))
  ) {
    return t.callExpression(
      t.memberExpression(t.identifier("cdktf"), t.identifier("propertyAccess")),
      [
        t.memberExpression(
          t.identifier(scope.forEachIteratorName),
          t.identifier("value")
        ),
        t.arrayExpression(
          getPropertyAccessPath(
            iteratorVariable.value.replace("each.value.", "")
          ).map((p) => t.stringLiteral(p))
        ),
      ]
    );
  }

  throw new Error(
    `Can not create AST for iterator variable of '${iteratorVariable.value}'`
  );
}

export function referencesToAst(
  scope: ResourceScope,
  input: string,
  refs: Reference[],
  scopedIds: readonly string[] = [], // dynamics introduce new scoped variables that are not the globally accessible ids
  iteratorVariables: IteratorVariable[] = []
): t.Expression {
  logger.debug(
    `Transforming string '${input}' with references ${JSON.stringify(
      refs
    )} to AST`
  );

  const refAsts = refs
    .sort((a, b) => a.start - b.start)
    .filter((ref) => !scopedIds.includes(ref.referencee.id))
    .map((ref) => ({ ...ref, ast: referenceToAst(scope, ref) }));

  const iteratorVarAsts = iteratorVariables
    .sort((a, b) => a.start - b.start)
    .map((iteratorVariable) => ({
      ...iteratorVariable,
      ast: iteratorVariableToAst(scope, iteratorVariable),
    }));

  const asts = [...refAsts, ...iteratorVarAsts].sort(
    (a, b) => a.start - b.start
  );
  if (asts.length === 0) {
    return t.stringLiteral(input);
  }

  if (
    asts.length === 1 &&
    asts[0].start === "${".length &&
    asts[0].end === input.length - "}".length &&
    !("useFqn" in asts[0] && asts[0].useFqn)
  ) {
    return asts[0].ast;
  }

  // string parts in the template string
  const quasis: t.TemplateElement[] = [];
  // dynamic values in the template string
  const expressions: t.Expression[] = [];

  let lastEnd = 0;

  asts.forEach(({ start, end, ast }) => {
    // leading quasi
    if (start !== lastEnd) {
      quasis.push(
        t.templateElement({
          raw: input.substring(lastEnd, start).replace(DOLLAR_REGEX, "\\$"),
        })
      );
    }

    expressions.push(ast);

    lastEnd = end;
  });

  // trailing quasi
  quasis.push(
    t.templateElement(
      {
        raw: input
          .substring(lastEnd, input.length)
          .replace(DOLLAR_REGEX, "\\$"),
      },
      true
    )
  );

  return t.templateLiteral(quasis, expressions);
}

export type DynamicBlock = {
  path: string;
  for_each: string;
  content: TerraformResourceBlock;
  scopedVar: string;
};
export const extractDynamicBlocks = (
  config: TerraformResourceBlock,
  path = ""
): DynamicBlock[] => {
  if (typeof config !== "object") {
    return [];
  }

  if (!config) {
    return [];
  }

  if (Array.isArray(config)) {
    return config.reduce(
      (carry, item, index) => [
        ...carry,
        ...extractDynamicBlocks(item, `${path}.${index}`),
      ],
      []
    );
  }

  if ("dynamic" in config) {
    const dynamic = (config as any).dynamic;
    const scopedVar = Object.keys(dynamic)[0];
    const { for_each, content } = dynamic[scopedVar][0];

    return [
      {
        path: `${path}.dynamic.${scopedVar}`,
        for_each,
        content,
        scopedVar,
      },
      ...extractDynamicBlocks(
        content,
        `${path}.dynamic.${scopedVar}.0.content`
      ),
    ];
  }

  return Object.entries(config).reduce((carry, [key, value]) => {
    return [...carry, ...extractDynamicBlocks(value as any, `${path}.${key}`)];
  }, [] as DynamicBlock[]);
};

export function isNestedDynamicBlock(
  dynBlocks: DynamicBlock[],
  block: DynamicBlock
): boolean {
  return dynBlocks.some(
    (dyn) => dyn.path !== block.path && block.path.startsWith(dyn.path)
  );
}

export async function findUsedReferences(
  nodeIds: string[],
  item: TerraformResourceBlock
): Promise<Reference[]> {
  logger.debug(`findUsedReferences(${nodeIds}, ${item})`);
  if (typeof item === "string") {
    return await extractReferencesFromExpression(item, nodeIds, []);
  }

  if (typeof item !== "object" || item === null || item === undefined) {
    return [];
  }

  if (Array.isArray(item)) {
    return (
      await Promise.all(item.map((i) => findUsedReferences(nodeIds, i)))
    ).flat();
  }

  if (item && "dynamic" in item) {
    const dyn = (item as any)["dynamic"];
    const { for_each, ...others } = dyn;
    const dynamicRef = Object.keys(others)[0];
    return await findUsedReferences([...nodeIds, dynamicRef], dyn);
  }

  return (
    await Promise.all(
      Object.values(item as Record<string, any>).map((i) =>
        findUsedReferences(nodeIds, i)
      )
    )
  ).flat();
}
