import camelcase from "camelcase";

export const camelCase = (str: string) => camelcase(str.replace(/[-/]/g, "_"));
export const pascalCase = (str: string) =>
  camelcase(str.replace(/[-/]/g, "_"), { pascalCase: true });
