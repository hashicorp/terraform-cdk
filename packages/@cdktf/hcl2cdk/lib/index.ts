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

// TODO: support alias
function provider(key: string, item: Provider): t.Statement {
  return construct(pascalCase(key), key, item[0]);
}

function resource(type: string, key: string, item: Provider): t.Statement {
  return construct(pascalCase(type), key, item[0]);
}

// locals, provider, variables, and outputs are global key value maps
function forEachGlobal<T>(
  record: Record<string, T> | undefined,
  iterator: (key: string, value: T) => t.Statement
): t.Statement[] {
  return Object.entries(record || {}).map(([key, item]) => iterator(key, item));
}

// data and resource are namespaced key value maps
function forEachNamespaced<T>(
  record: Record<string, Record<string, T>> | undefined,
  iterator: (type: string, key: string, value: T) => t.Statement
): t.Statement[] {
  return Object.entries(record || {}).reduce(
    (outerCarry, [type, items]) => [
      ...outerCarry,
      ...Object.entries(items).reduce(
        (innerCarry, [key, item]) => [...innerCarry, iterator(type, key, item)],
        [] as t.Statement[]
      ),
    ],
    [] as t.Statement[]
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

  const variablesAst = forEachGlobal(plan.variable, variable);
  const providersAst = forEachGlobal(plan.provider, provider);
  const outputsAst = forEachGlobal(plan.output, output);

  // TODO: support references and do ordering
  const resourcesAst = forEachNamespaced(plan.resource, resource);
  const dataAst = forEachNamespaced(plan.data, resource);

  const { code } = generate(
    t.program([
      ...variablesAst,
      ...providersAst,
      ...dataAst,
      ...resourcesAst,
      ...outputsAst,
    ]) as any
  );
  return prettier.format(code, { parser: "babel" });
}
