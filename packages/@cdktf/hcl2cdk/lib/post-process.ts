import prettier from "prettier";
import generate from "@babel/generator";
import { parse } from "@babel/parser";
import { Language } from "@cdktf/commons";
import { strict as assert } from "node:assert";
import * as t from "@babel/types";

function gen(program: any) {
  const code = prettier.format(generate(program).code, {
    parser: "babel",
  });

  return code;
}

export type File = { contents: string; fileName: string };

export function postProcessTypescriptContentForLanguage(
  file: File,
  language: Language
) {
  const parsed = parse(file.contents, {
    sourceType: "module",
    plugins: ["typescript"],
  });

  // We never post process on typescript. If changes to Typescript need to happen,
  // they should be done elsewhere.
  assert(language !== Language.TYPESCRIPT);

  postProcessImports(parsed.program, language);

  return gen(parsed.program);
}

function postProcessImports(program: t.Program, language: Language) {
  const importDeclarations = program.body.filter(
    (node) => node.type === "ImportDeclaration"
  ) as t.ImportDeclaration[];

  for (const importDeclaration of importDeclarations) {
    const source = importDeclaration.source.value as string;

    if (!source.startsWith("./.gen")) {
      continue;
    }

    if (language === Language.PYTHON) {
      importDeclaration.source.value = source.replace("./.gen", "./imports");
    }
  }
}
