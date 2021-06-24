import { parse } from "@cdktf/hcl2json";
import template from "@babel/template";
import generate from "@babel/generator";
import * as t from "@babel/types";
import prettier from "prettier";
import { schema, Output, Variable } from "./schema";

type ConvertOptions = {
  language: "typescript";
};

const optionalProperty = (key: string, item: undefined | any) =>
  `${item ? key + ': "' + item + '",' : ""}`;
const optionalProperties = (record: Record<string, any>) =>
  Object.entries(record).reduce(
    (carry, [key, item]) => carry + optionalProperty(key, item),
    ""
  );

function output(key: string, item: Output): t.Statement {
  const [{ value, description, sensitive }] = item;
  const out = template(`
  new TerraformOutput(this, "${key}", {
      value: "${value}",
      ${optionalProperties({
        description,
        sensitive,
      })}
  })
`)();

  return out as t.Statement;
}

function variable(key: string, item: Variable): t.Statement {
  // We don't handle type information right now
  const [{ type, ...props }] = item;

  return template(`
  new TerraformVariable(this, "${key}", {
      ${optionalProperties(props)}
  })
`)() as t.Statement;
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

  const variableAst = Object.entries(plan.variable || {}).map(([key, item]) =>
    variable(key, item)
  );
  const outputAst = Object.entries(plan.output || {}).map(([key, item]) =>
    output(key, item)
  );
  const { code } = generate(t.program([...variableAst, ...outputAst]) as any);
  return prettier.format(code, { parser: "babel" });
}
