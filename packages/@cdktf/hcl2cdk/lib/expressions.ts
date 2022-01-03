import * as t from "@babel/types";
import reservedWords from "reserved-words";
import { camelCase, pascalCase } from "./utils";
import { TerraformResourceBlock, Scope } from "./types";
import { getResourceNamespace } from "@cdktf/provider-generator";

export type Reference = {
  start: number;
  end: number;
  referencee: { id: string; full: string }; // identifier for resource
  useFqn?: boolean;
  isVariable?: boolean;
};

const PROPERTY_ACCESS_REGEX = /\[.*\]/;
const DOLLAR_REGEX = /\$/g;

export function extractReferencesFromExpression(
  input: string,
  nodeIds: readonly string[],
  scopedIds: readonly string[] = [] // dynamics introduce new scoped variables that are not the globally accessible ids
): Reference[] {
  const isDoubleParanthesis = input.startsWith("${{");
  if (!input.startsWith("${")) {
    return [];
  }

  const start = isDoubleParanthesis ? 3 : 2;
  const end = isDoubleParanthesis ? input.length - 2 : input.length - 1;
  let expressionString = input.substring(start, end);

  if (
    expressionString.includes("for") &&
    expressionString.includes("in") &&
    expressionString.includes(":")
  ) {
    // for name, user in var.users : user.role => name...
    // We just want the var.users part (that could be an expression)
    expressionString = expressionString.substring(
      expressionString.indexOf("in") + 2,
      expressionString.indexOf(":")
    );
  }
  const lines = expressionString
    .split("\n")
    .map((line) => {
      const commentStart = line.indexOf("#");
      const lineWithoutComment =
        commentStart !== -1 ? line.substring(0, commentStart - 1) : line;

      return lineWithoutComment.trim();
    })
    .filter((line) => line !== "");

  const delimiters = [
    "(",
    ",",
    ")",
    ".*",
    PROPERTY_ACCESS_REGEX,
    " ",
    "!",
    "*",
    "/",
    "%",
    ">",
    "<",
    "=",
    "&&",
    "||",
    "?",
    // There can be nested terraform expression strings
    "${",
    "}",
  ];

  let possibleVariableSpots = lines;

  delimiters.forEach((delimiter) => {
    possibleVariableSpots = possibleVariableSpots.reduce(
      (carry, str) => [...carry, ...str.split(delimiter)],
      [] as string[]
    );
  });

  return possibleVariableSpots.reduce((carry, spot) => {
    // no reference
    if (
      !spot.includes(".") || // just a literal
      spot.startsWith(".") || // dangling property access
      spot.endsWith("...") || // spread (likely in for loop)
      spot.startsWith("count.") || // count variable
      spot.startsWith("each.") || // each variable
      // https://www.terraform.io/docs/language/expressions/references.html#filesystem-and-workspace-info
      spot.startsWith("path.module") ||
      spot.startsWith("path.root") ||
      spot.startsWith("path.cwd") ||
      spot.startsWith("terraform.workspace")
    ) {
      return carry;
    }

    const referenceParts = spot.split(".");

    const corespondingNodeId = [...nodeIds, ...scopedIds].find((id) => {
      const parts = id.split(".");
      const matchesFirst = parts[0] === referenceParts[0];
      const matchesFirstTwo =
        matchesFirst && (parts[1] === referenceParts[1] || parts.length === 1);

      return (
        matchesFirstTwo &&
        (parts[0] === "data" ? parts[2] === referenceParts[2] : true)
      );
    });

    if (!corespondingNodeId) {
      // This is most likely a false positive, so we just ignore it
      // We include the log below to help debugging
      console.error(
        `Found a reference that is unknown: ${input} has reference "${spot}". The id was not found in ${JSON.stringify(
          nodeIds
        )} with temporary values ${JSON.stringify(scopedIds)}.
        Please leave a comment at https://cdk.tf/bugs/convert-expressions if you run into this issue.`
      );
      return carry;
    }

    if (scopedIds.includes(corespondingNodeId)) {
      return carry;
    }

    const spotParts = spot.split(".");
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
      : spot;

    // we know we are at closer to the end than the last reference we found
    // this helps us find duplicate referencees
    const position = carry.length ? carry[carry.length - 1].end : 0;
    const start = input.indexOf(fullReference, position);
    const end = start + fullReference.length;

    const isVariable = spot.startsWith("var.");
    const useFqn =
      // Can not use FQN on vars
      !isVariable &&
      // Can not use FQN on locals
      !spot.startsWith("local.") &&
      // If the following character is
      (input.substr(end + 1, 1) === "*" || // a * (splat) we need to use the FQN
        input.substr(end, 1) === "[" || // a property access
        isThereANumericAccessor || // a numeric access
        fullReference.split(".").length < 3);

    const ref: Reference = {
      start,
      end,
      referencee: {
        id: corespondingNodeId,
        full: fullReference,
      },
      useFqn,
      isVariable,
    };
    return [...carry, ref];
  }, [] as Reference[]);
}

export function referenceToVariableName(scope: Scope, ref: Reference): string {
  const parts = ref.referencee.full.split(".");
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

export function constructAst(type: string, isModuleImport: boolean) {
  if (isModuleImport) {
    return t.memberExpression(t.identifier(type), t.identifier(type));
  }

  // resources or data sources
  if (!type.includes("./") && type.includes(".")) {
    const parts = type.split(".");
    if (parts[0] === "data") {
      const [, provider, resource] = parts;
      const namespace = getResourceNamespace(provider, resource);
      if (namespace) {
        return t.memberExpression(
          t.memberExpression(
            t.identifier(provider), // e.g. aws
            t.identifier(namespace.name) // e.g. EC2
          ),
          t.identifier(pascalCase(`data_${provider}_${resource}`)) // e.g. DataAwsInstance
        );
      }

      return t.memberExpression(
        t.identifier(provider), // e.g. aws
        t.identifier(pascalCase(`data_${provider}_${resource}`)) // e.g. DataAwsNatGateway
      );
    }

    const [provider, resource] = parts;
    const namespace = getResourceNamespace(provider, resource);
    if (namespace) {
      return t.memberExpression(
        t.memberExpression(
          t.identifier(provider), // e.g. aws
          t.identifier(namespace.name) // e.g. EC2
        ),
        t.identifier(pascalCase(resource)) // e.g. Instance
      );
    }
    return t.memberExpression(
      t.identifier(provider), // e.g. google
      t.identifier(pascalCase(resource)) // e.g. BigQueryTable
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

export function findUsedReferences(
  nodeIds: string[],
  item: TerraformResourceBlock
): Reference[] {
  if (typeof item === "string") {
    return extractReferencesFromExpression(item, nodeIds, []);
  }

  if (typeof item !== "object" || item === null || item === undefined) {
    return [];
  }

  if (Array.isArray(item)) {
    return item.reduce(
      (carry, i) => [...carry, ...findUsedReferences(nodeIds, i)],
      []
    );
  }

  if (item && "dynamic" in item) {
    const dyn = (item as any)["dynamic"];
    const { for_each, ...others } = dyn;
    const dynamicRef = Object.keys(others)[0];
    return findUsedReferences([...nodeIds, dynamicRef], dyn);
  }
  return Object.values(item as Record<string, any>).reduce(
    (carry, i) => [...carry, ...findUsedReferences(nodeIds, i)],
    []
  );
}
