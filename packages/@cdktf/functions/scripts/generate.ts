// uses the functions.json file to generate the bindings for CDKTF

import fs from "fs/promises";
import * as path from "path";
import { AttributeType } from "@cdktf/provider-generator";
import generate from "@babel/generator";
import template from "@babel/template";
import * as t from "@babel/types";
import prettier from "prettier";
import { FUNCTIONS_METADATA_FILE } from "./fetch-metadata";

const ts = template({ plugins: [["typescript", {}]] });

const OUTPUT_FILE = path.resolve(
  __dirname,
  "..",
  "..",
  "..",
  "cdktf",
  "lib",
  "terraform-functions.generated.ts"
);

type Parameter = { name: string; type: AttributeType };
type FunctionSignature = {
  description: string;
  return_type: AttributeType;
  parameters: Parameter[];
  variadic_parameter: Parameter;
};

// TODO: add other imports here
const IMPORTS = ts`
import {
  anyValue,
  asAny,
  asBoolean,
  asList,
  asNumber,
  asString,
  listOf,
  mapValue,
  numericValue,
  stringValue,
  terraformFunction,
} from "./terraform-functions";
`() as t.Statement;
t.addComment(IMPORTS, "leading", " This file is generated", true);

async function fetchMetadata() {
  const file = path.join(__dirname, FUNCTIONS_METADATA_FILE);
  const json = JSON.parse((await fs.readFile(file)).toString())
    .function_signatures as {
    [name: string]: FunctionSignature;
  };

  const staticMethods = Object.entries(json)
    .sort(fakeSameSortOrderAsExistingFile)
    .map(([name, signature]) => renderStaticMethod(name, signature));

  const fnClass = t.exportNamedDeclaration(
    t.classDeclaration(t.identifier("Fn"), null, t.classBody(staticMethods))
  );
  t.addComment(
    fnClass,
    "leading",
    " eslint-disable-next-line jsdoc/require-jsdoc",
    true
  );

  const program = t.program([IMPORTS, fnClass]);

  const code = prettier.format(generate(program as any).code, {
    parser: "babel",
  });

  await fs.writeFile(OUTPUT_FILE, code);
}

// TODO: special case handlings:
// bcrypt() -> want: "cost?: number" but schema does not help here (related: https://github.com/hashicorp/terraform/blob/6ab3faf5f65a90ae1e5bd0625fa9e83c0b34c5e1/internal/lang/funcs/crypto.go#L115-L117)
// lenght() -> want: lengthOf() because length conflicts

// TODO: clean up this code
function renderStaticMethod(
  name: string,
  signature: FunctionSignature
): t.ClassMethod {
  let returnType = "";
  switch (signature.return_type) {
    case "number":
      returnType = "asNumber";
      break;
    case "string":
      returnType = "asString";
      break;
    case "bool":
      returnType = "asBoolean";
      break;
    case "dynamic":
      returnType = "asAny"; // TODO: this was no wrapping but now is asAny (BREAKING, as it used to return IResolvable but now returns any)
      break;
    default:
      if (
        Array.isArray(signature.return_type) &&
        signature.return_type[0] === "list"
      ) {
        returnType = "asList"; // TODO: this may be too broad
      } else if (
        Array.isArray(signature.return_type) &&
        signature.return_type[0] === "set"
      ) {
        returnType = "asList"; // TODO: this may be too broad
      } else if (
        Array.isArray(signature.return_type) &&
        signature.return_type[0] === "map" &&
        signature.return_type[1] === "dynamic"
      ) {
        returnType = "asAny";
      } else if (
        Array.isArray(signature.return_type) &&
        signature.return_type[0] === "map" &&
        Array.isArray(signature.return_type[1]) &&
        signature.return_type[1][0] === "list" &&
        signature.return_type[1][1] === "string"
      ) {
        returnType = "asAny";
      } else {
        throw new Error(
          `Function ${name} has unsupported return type: ${JSON.stringify(
            signature.return_type
          )}`
        );
      }
  }

  const mapParameter = (p: Parameter) => {
    let mapper: string;
    let name = p.name;
    if (name === "default") name = "defaultValue";
    let docstringType: string;

    const tsParam = t.identifier(name);
    if (p.type === "number") {
      mapper = "numericValue";
      tsParam.typeAnnotation = t.tsTypeAnnotation(t.tsNumberKeyword());
      docstringType = "number";
    } else if (p.type === "string") {
      mapper = "stringValue";
      tsParam.typeAnnotation = t.tsTypeAnnotation(t.tsStringKeyword());
      docstringType = "string";
    } else if (p.type === "dynamic") {
      mapper = "anyValue";
      tsParam.typeAnnotation = t.tsTypeAnnotation(t.tsAnyKeyword());
      docstringType = "any";
    } else if (
      Array.isArray(p.type) &&
      p.type[0] === "list" &&
      p.type[1] === "bool"
    ) {
      mapper = "listOf(anyValue)";
      tsParam.typeAnnotation = t.tsTypeAnnotation(
        t.tsArrayType(t.tsAnyKeyword())
      );
      docstringType = "Array";
    } else if (
      Array.isArray(p.type) &&
      p.type[0] === "list" &&
      p.type[1] === "dynamic" // TODO: this branch is the same as the bool one
    ) {
      mapper = "listOf(anyValue)";
      tsParam.typeAnnotation = t.tsTypeAnnotation(
        t.tsArrayType(t.tsAnyKeyword())
      );
      docstringType = "Array";
    } else if (
      Array.isArray(p.type) &&
      p.type[0] === "list" &&
      p.type[1] === "number" // TODO: this branch is similar to the other ones
    ) {
      mapper = "listOf(numericValue)";
      tsParam.typeAnnotation = t.tsTypeAnnotation(
        t.tsArrayType(t.tsNumberKeyword())
      );
      docstringType = "Array";
    } else if (
      Array.isArray(p.type) &&
      p.type[0] === "list" &&
      p.type[1] === "string" // TODO: this branch is similar to the other ones
    ) {
      mapper = "listOf(anyValue)"; // TODO: used like this today, but why?
      tsParam.typeAnnotation = t.tsTypeAnnotation(
        t.tsArrayType(t.tsStringKeyword())
      );
      docstringType = "Array";
    } else if (
      Array.isArray(p.type) &&
      p.type[0] === "list" &&
      Array.isArray(p.type[1]) &&
      p.type[1][0] === "list" &&
      p.type[1][1] === "string" // TODO: this should be handled in a more generic way
    ) {
      // TODO: this case mainly stems from the variadic parameter for join(sep, ...value)
      // which takes more than one list – as JSII doesn't support variadic params, we only support
      // one list in our current implementation of tf functions – so this is breaking and we'll need
      // a special case or override for this and then we can get rid of this case
      mapper = "listOf(listOf(anyValue))"; // TODO: used like this today, but why?
      tsParam.typeAnnotation = t.tsTypeAnnotation(
        t.tsArrayType(t.tsArrayType(t.tsStringKeyword()))
      );
      docstringType = "Array";
    } else if (
      Array.isArray(p.type) &&
      p.type[0] === "set" &&
      p.type[1] === "dynamic"
    ) {
      mapper = "listOf(anyValue)";
      tsParam.typeAnnotation = t.tsTypeAnnotation(
        t.tsArrayType(t.tsAnyKeyword())
      );
      docstringType = "Array";
    } else if (
      Array.isArray(p.type) &&
      p.type[0] === "list" &&
      Array.isArray(p.type[1]) &&
      p.type[1][0] === "set" &&
      p.type[1][1] === "dynamic" // TODO: this should be handled in a more generic way
    ) {
      // TODO: this case mainly stems from the variadic parameter for setintersection(first, ...otherSets)
      // which takes more than one set – as JSII doesn't support variadic params, we only support
      // one list of sets in our current implementation of tf functions – so this is breaking and we'll need
      // a special case or override for this and then we can get rid of this case
      mapper = "listOf(anyValue)";
      tsParam.typeAnnotation = t.tsTypeAnnotation(
        t.tsArrayType(t.tsAnyKeyword())
      );
      docstringType = "Array";
    } else if (
      Array.isArray(p.type) &&
      p.type[0] === "map" &&
      Array.isArray(p.type[1]) &&
      p.type[1][0] === "list" &&
      p.type[1][1] === "string" // TODO: this should be handled in a more generic way
    ) {
      mapper = "mapValue";
      tsParam.typeAnnotation = t.tsTypeAnnotation(t.tsAnyKeyword());
      docstringType = "Object";
    } else {
      throw new Error(
        `Function ${name} has parameter ${
          p.name
        } with unsupported type ${JSON.stringify(p.type)}`
      );
    }
    return { name, mapper, tsParam, docstringType };
  };

  const parameters = (signature.parameters || []).map(mapParameter);

  if (signature.variadic_parameter) {
    parameters.push(
      mapParameter({
        ...signature.variadic_parameter,
        type: ["list", signature.variadic_parameter.type], // we can't use variadic parameters with JSII, so we treat this as a list parameter
      })
    );
  }

  const argValueMappers: string = parameters.map((p) => p.mapper).join(",");
  const argNames: string = parameters.map((p) => p.name).join(",");
  const params: any[] = parameters.map((p) => p.tsParam);

  // TODO: remove this weird workaround for argValueMappers – somehow ts`` works in weird ways when passing an empty (or falsy value in the template string)
  const body = ts`
  return ${returnType}(terraformFunction("${name}", [${
    argValueMappers || " "
  }])(${argNames}));
  `();

  const sanitizedFunctionName = name === "length" ? "lengthOf" : name;

  const method = t.classMethod(
    "method",
    t.stringLiteral(sanitizedFunctionName),
    params,
    t.blockStatement(Array.isArray(body) ? body : [body]),
    false, // computed
    true // static
  );

  /**
   * {@link https://www.terraform.io/docs/language/functions/index.html index} finds the element index for a given value in a list.
   * @param {Array} list
   * @param {any} value
   */
  const paramLines = parameters.map(
    (p) => ` * @param {${p.docstringType}} ${p.name}`
  );
  t.addComment(
    method,
    "leading",
    `*
 * ${signature.description.replace(
   `\`${name}\``,
   `{@link https://www.terraform.io/docs/language/functions/${name}.html ${name}}`
 )}
${paramLines.join("\n")}
`
  );

  return method;
}

fetchMetadata();

const old = [
  "alltrue",
  "anytrue",
  "chunklist",
  "coalesce",
  "coalescelist",
  "compact",
  "concat",
  "contains",
  "distinct",
  "element",
  "flatten",
  "index",
  "keys",
  "length",
  "lookup",
  "matchkeys",
  "mergeLists",
  "mergeMaps",
  "one",
  "range",
  "reverse",
  "setintersection",
  "setproduct",
  "setsubtract",
  "setunion",
  "slice",
  "sort",
  "sum",
  "transpose",
  "values",
  "zipmap",
  "base64sha256",
  "base64sha512",
  "bcrypt",
  "filebase64sha256",
  "filebase64sha512",
  "filemd5",
  "filesha1",
  "filesha256",
  "filesha512",
  "md5",
  "rsadecrypt",
  "sha1",
  "sha256",
  "sha512",
  "uuid",
  "uuidv5",
  "formatdate",
  "timeadd",
  "timestamp",
  "base64decode",
  "base64encode",
  "base64gzip",
  "csvdecode",
  "jsondecode",
  "jsonencode",
  "textdecodebase64",
  "textencodebase64",
  "urlencode",
  "yamldecode",
  "yamlencode",
  "abspath",
  "dirname",
  "pathexpand",
  "basename",
  "file",
  "fileexists",
  "fileset",
  "filebase64",
  "templatefile",
  "cidrhost",
  "cidrnetmask",
  "cidrsubnet",
  "cidrsubnets",
  "abs",
  "ceil",
  "floor",
  "log",
  "max",
  "min",
  "parseInt",
  "pow",
  "signum",
  "chomp",
  "format",
  "formatlist",
  "indent",
  "join",
  "lower",
  "regexall",
  "regex",
  "replace",
  "split",
  "strrev",
  "substr",
  "title",
  "trim",
  "trimprefix",
  "trimsuffix",
  "trimspace",
  "upper",
  "can",
  "nonsensitive",
  "sensitive",
  "tobool",
  "tolist",
  "tomap",
  "tonumber",
  "toset",
  "tostring",
  "try",
];
function fakeSameSortOrderAsExistingFile(
  [a]: [string, ...any[]],
  [b]: [string, ...any[]]
): number {
  return old.indexOf(a) - old.indexOf(b);
}
