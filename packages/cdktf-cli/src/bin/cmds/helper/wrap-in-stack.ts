import fs from "fs-extra";
import path from "path";

export type ConvertSupportedLanguage =
  | "typescript"
  | "python"
  | "csharp"
  | "java";
const languageExtensions = {
  typescript: "ts",
  python: "py",
  csharp: "cs",
  java: "java",
};

const importRegex = /^\s*\/\* \{\{ imports \}\} \*\//gm;
const importRegexForLanguage = {
  python: /^# \{\{ imports \}\}/gm,
  typescript: importRegex,
  csharp: importRegex,
  java: importRegex,
};

const codeRegex = /^([ \t]*)\/\* \{\{ code \}\} \*\/[ \s]*$/gm;
const codeRegexForLanguage = {
  python: /^([ \t]*)# \{\{ code \}\}\s*$/gm,
  typescript: codeRegex,
  csharp: codeRegex,
  java: codeRegex,
};

async function getConvertStackTemplateForLanguage(
  language: ConvertSupportedLanguage
) {
  const templatePath = path.join(
    __dirname,
    `../../../templates/convert/stack.${languageExtensions[language]}`
  );

  return fs.readFile(templatePath, "utf-8");
}

export async function wrapCodeInStack(
  code: string,
  imports: string,
  language: ConvertSupportedLanguage
): Promise<string> {
  const template = await getConvertStackTemplateForLanguage(language);

  const templateWithImports = template.replace(
    importRegexForLanguage[language],
    imports
  );

  const codeRegex = codeRegexForLanguage[language];
  const codeMatch = codeRegex.exec(templateWithImports);
  if (!codeMatch) {
    throw new Error(`Could not find code placeholder in template`);
  }
  const codeIndent = codeMatch[1].replace("\n", ""); // we only care about whitespace, not newlines
  codeRegex.lastIndex = 0; // Reset regex to start of string

  const indentedCode = code
    .split("\n")
    .map((line) => `${codeIndent}${line}`)
    .join("\n");

  return templateWithImports.replace(codeRegex, indentedCode);
}
