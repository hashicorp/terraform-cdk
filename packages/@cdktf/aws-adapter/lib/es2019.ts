// JSII generated tsconfig does not support Object.from so we replicate it

export function objectFromEntries<T = any>(
  entries: Array<readonly [PropertyKey, T]>
): { [k: string]: T } {
  return entries.reduce((map, [key, entry]) => ({ ...map, [key]: entry }), {});
}
