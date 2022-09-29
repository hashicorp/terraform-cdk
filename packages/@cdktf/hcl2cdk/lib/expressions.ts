// Copyright (c) HashiCorp, Inc
// SPDX-License-Identifier: MPL-2.0
import * as t from "@babel/types";
import reservedWords from "reserved-words";
import { camelCase, logger, pascalCase } from "./utils";
import { TerraformResourceBlock, Scope } from "./types";
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

  if (isDataSource) {
    return camelCase(`data_${provider}_${resource}`);
  }

  return camelCase(resource);
}

export function referenceToVariableName(scope: Scope, ref: Reference): string {
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
  scope: Scope,
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

  scope.variables[name] = { variableName, resource };
  return variableName;
}

export function constructAst(
  scope: Scope,
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

export function referenceToAst(scope: Scope, ref: Reference) {
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

export function referencesToAst(
  scope: Scope,
  input: string,
  refs: Reference[],
  scopedIds: readonly string[] = [] // dynamics introduce new scoped variables that are not the globally accessible ids
): t.Expression {
  logger.debug(
    `Transforming string '${input}' with references ${JSON.stringify(
      refs
    )} to AST`
  );

  if (refs.length === 0) {
    return t.stringLiteral(input);
  }

  const refAsts = refs
    .sort((a, b) => a.start - b.start)
    .filter((ref) => !scopedIds.includes(ref.referencee.id))
    .map((ref) => ({ ref, ast: referenceToAst(scope, ref) }));

  if (
    refAsts.length === 1 &&
    refAsts[0].ref.start === "${".length &&
    refAsts[0].ref.end === input.length - "}".length &&
    !refAsts[0].ref.useFqn
  ) {
    return refAsts[0].ast;
  }

  // string parts in the template string
  const quasis: t.TemplateElement[] = [];
  // dynamic values in the template string
  const expressions: t.Expression[] = [];

  let lastEnd = 0;

  refAsts.forEach(({ ref, ast }) => {
    // leading quasi
    if (ref.start !== lastEnd) {
      quasis.push(
        t.templateElement({
          raw: input.substring(lastEnd, ref.start).replace(DOLLAR_REGEX, "\\$"),
        })
      );
    }

    expressions.push(ast);

    lastEnd = ref.end;
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
        path: `${path}.${scopedVar}`,
        for_each,
        content,
        scopedVar,
      },
    ];
  }

  return Object.entries(config).reduce((carry, [key, value]) => {
    return [...carry, ...extractDynamicBlocks(value as any, `${path}.${key}`)];
  }, [] as DynamicBlock[]);
};

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

// This only guesses if the type of an expression is list, it should be replaced by something that understands
// the type of the expression, solved by https://github.com/hashicorp/terraform-cdk/issues/842
export function isListExpression(item: string) {
  const hasListExtension =
    item.includes("[") &&
    item.includes("for ") &&
    item.includes(" in ") &&
    item.includes("]");

  if (!hasListExtension) {
    return false;
  }

  // We might have wrapped it in a function that collapses the list
  return !["element", "index", "length", "lookup", "one", "join"].some(
    (collapsingTfFunction) =>
      item.includes(`${collapsingTfFunction}(`) &&
      item.indexOf(`${collapsingTfFunction}(`) < item.indexOf("for")
  );
}
