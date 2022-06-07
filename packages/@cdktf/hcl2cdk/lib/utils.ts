import camelcase from "camelcase";

export const camelCase = (str: string) => camelcase(str.replace(/[-/]/g, "_"));
export const pascalCase = (str: string) =>
  camelcase(str.replace(/[-/]/g, "_"), { pascalCase: true });

export function uniqueId(set: Set<string>, key: string): string {
  if (set.has(key)) {
    return uniqueId(set, `${key}_${set.size}`);
  }
  set.add(key);
  return key;
}

const noOp = () => {};
const stubLogger: Console = {
  ...console,
  debug: noOp,
  trace: noOp,
  log: noOp,
  warn: noOp,
  error: noOp,
};

export let logger = stubLogger;
export function setLogger(log: Console) {
  logger = log;
}
