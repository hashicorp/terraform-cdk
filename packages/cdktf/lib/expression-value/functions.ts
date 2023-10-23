import { ResourceState } from "../terraform-module";

const functions: { [name: string]: any } = {
  compact: functionCompact,
  try: functionTry,
};

/**
 *
 */
export function functionCall(
  fn: string,
  args: any[],
  _module: ResourceState[]
) {
  const fnName = fn.toLowerCase();

  if (functions[fnName]) {
    return functions[fnName](_module, ...args);
  }

  return "";
}

/**
 *
 */
function functionCompact(_module: ResourceState[], arg: string[]) {
  return arg.filter((arg) => !!arg);
}

/**
 *
 */
function functionTry(_module: ResourceState[], arg: string, fallback: any) {
  if (fallback === "null") {
    fallback = null;
  }

  return arg || fallback;
}
