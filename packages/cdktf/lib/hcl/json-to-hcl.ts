import stringify = require("json-stable-stringify");

export function jsonToHcl(jsonTf: any): string {
  const result = stringify(jsonTf, { space: 2 });
  console.log(result);

  return result;
}
