import { ConstructLibraryOptions } from "projen/lib/cdk";

const defaultOptions = {
  prettier: true,
  projenrcTs: true,
  defaultReleaseBranch: "main",
  sampleCode: false,
};
// Ensure they match the parent option
export const defaults: Pick<
  ConstructLibraryOptions,
  keyof typeof defaultOptions
> = defaultOptions;
