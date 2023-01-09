export const missingVariable = (variableName: string) =>
  `Missing variable: '${variableName}'. You can provide it using the 'TF_VAR_${variableName}' environment variable.`;
