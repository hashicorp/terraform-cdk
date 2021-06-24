import { parse } from "@cdktf/hcl2json";
import template from "@babel/template";
import generate from "@babel/generator";
import * as t from "@babel/types";
import prettier from "prettier";
import { schema, Output } from "./schema";

type ConvertOptions = {
  language: "typescript";
};

const optionalProperty = <T>(key: string, item: undefined | T) =>
  `${item ? key + ': "' + item + '",' : ""}`;
const optionalProperties = <T>(record: Record<string, T>) =>
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

  const ast = Object.entries(plan.output || {}).map(([key, item]) =>
    output(key, item)
  );
  const { code } = generate(t.program(ast) as any);
  return prettier.format(code, { parser: "babel" });
}
