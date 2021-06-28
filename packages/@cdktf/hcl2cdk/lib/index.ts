import { parse } from "@cdktf/hcl2json";
import generate from "@babel/generator";
import * as t from "@babel/types";
import prettier from "prettier";
import { pascalCase, camelCase } from "change-case";
import { schema, Output, Variable, Provider } from "./schema";


type ConvertOptions = {
  language: "typescript";
};

const valueToTs = (item: any): t.Expression => {
  switch (typeof item) {
    case "string":
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

const construct = (type: string, name: string, config: Record<string, any>) =>
  t.expressionStatement(
    t.newExpression(t.identifier(type), [
      t.thisExpression(),
      t.stringLiteral(name),
      valueToTs(config),
    ])
  );

function output(key: string, item: Output): t.Statement {
  const [{ value, description, sensitive }] = item;
  return construct("TerraformOutput", key, { value, description, sensitive });
}

function variable(key: string, item: Variable): t.Statement {
  // We don't handle type information right now
  const [{ type, ...props }] = item;
  return construct("TerraformVariable", key, props);
}
function local(key: string, item: any): t.Statement {
  return t.variableDeclaration("const", [
    t.variableDeclarator(t.identifier(camelCase(key)), valueToTs(item)),
  ]);
}

// TODO: support alias
function provider(key: string, item: Provider): t.Statement {
  return construct(pascalCase(key), key, item[0]);
}

function resource(type: string, key: string, item: Provider): t.Statement {
  return construct(pascalCase(type), key, item[0]);
}

// locals, provider, variables, and outputs are global key value maps
function forEachGlobal<T>(
  prefix: string,
  record: Record<string, T> | undefined,
  iterator: (key: string, value: T) => t.Statement
): Record<string, t.Statement> {
  return Object.entries(record || {}).reduce(
    (carry, [key, item]) => ({
      ...carry,
      [`${prefix}.${key}`]: iterator(key, item),
    }),
    {}
  );
}

// data and resource are namespaced key value maps
function forEachNamespaced<T>(
  record: Record<string, Record<string, T>> | undefined,
  iterator: (type: string, key: string, value: T) => t.Statement,
  prefix?: string
): Record<string, t.Statement> {
  return Object.entries(record || {}).reduce(
    (outerCarry, [type, items]) => ({
      ...outerCarry,
      ...Object.entries(items).reduce((innerCarry, [key, item]) => {
        const id = prefix ? `${prefix}.${type}.${key}` : `${type}.${key}`;
        return {
          ...innerCarry,
          [id]: iterator(type, key, item),
        };
      }, {} as Record<string, t.Statement>),
    }),
    {} as Record<string, t.Statement>
  );
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

  const { code } = generate(t.program(Object.values(nodeMap)) as any);
  return prettier.format(code, { parser: "babel" });
}
