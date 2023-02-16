// uses the functions.json file to generate the bindings for CDKTF

import fs from "fs/promises";
import * as path from "path";
import generate from "@babel/generator";
import template from "@babel/template";
import * as t from "@babel/types";
import prettier from "prettier";
import { FUNCTIONS_METADATA_FILE } from "./fetch-metadata";

async function fetchMetadata() {
  const file = path.join(__dirname, FUNCTIONS_METADATA_FILE);
  const json = (await fs.readFile(file)).toString();
  json;
  // console.log(json);

  let statements = template`
export class Fn {
    
}
`();
  if (!Array.isArray(statements)) statements = [statements];

  const code = prettier.format(generate(t.program(statements) as any).code, {
    parser: "babel",
  });

  console.log(code);
}

fetchMetadata();
