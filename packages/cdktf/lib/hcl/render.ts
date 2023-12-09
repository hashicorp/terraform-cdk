/**
 * Copyright (c) HashiCorp, Inc.
 * SPDX-License-Identifier: MPL-2.0
 */

/**
 *
 */
export function renderList(
  { value, isBlock, storageClassType }: any,
  name?: string
): string {
  if (value === undefined) {
    return "";
  }

  if (name) {
    if (isBlock) {
      if (!Array.isArray(value)) {
        return `${name} {` + `\n${renderAttributes(value)}\n}`;
      }

      return value
        .map((v: any) => {
          return `${name} {` + `\n${renderAttributes(v)}\n}`;
        })
        .join("\n");
    }

    if (!Array.isArray(value)) {
      return `${name} = ${renderListValue(value, storageClassType)}`;
    }

    return `${name} = [
${value.map((v: any) => renderListValue(v, storageClassType)).join(",\n")}
]`;
  }

  if (!Array.isArray(value)) {
    // A list type of only a single item
    return renderListValue(value, storageClassType);
  }

  if (isBlock) {
    return value
      .map((v: any) => renderListValue(v, storageClassType))
      .join("\n");
  }

  return `[
${value.map((v: any) => renderListValue(v, storageClassType)).join(",\n")}
]`;
}

/**
 *
 */
export function renderListValue(value: any, storageClassType: string): string {
  if (storageClassType === "stringList") {
    return `"${value}"`;
  }
  if (storageClassType === "numberList" || storageClassType === "booleanList") {
    return `${value}`;
  }

  return renderBlock(value, storageClassType);
}

/**
 *
 */
export function renderMap(map: any): string {
  return `{
${Object.entries(map)
  .map(([k, v]) => `${k} = ${renderMapValue(v)}`)
  .join("\n")}
}`;
}

/**
 *
 */
export function renderMapValue(value: any): string {
  if (typeof value === "string") {
    return `"${value}"`;
  }
  if (typeof value === "number") {
    return `${value}`;
  }
  if (typeof value === "boolean") {
    return `${value}`;
  }

  return `${value}`;
}

/**
 *
 */
export function renderResource(resource: any) {
  const resourceType = Object.keys(resource)[0];
  const resourcesWithType = resource[resourceType];
  const resourceName = Object.keys(resourcesWithType)[0];
  const resourceAttributes = resourcesWithType[resourceName];

  return `resource "${resourceType}" "${resourceName}" {
${renderAttributes(resourceAttributes)}
}`;
}

/**
 *
 */
export function renderBlock(block: any, _storageClassType: string): string {
  return `{
${renderAttributes(block)}
}`;
}

/**
 *
 */
export function renderAttributes(attributes: any): string {
  if (attributes === undefined) {
    return "";
  }
  return Object.entries(attributes)
    .map(([name, v]) => {
      if (name === "//") {
        return undefined;
      }
      const { value, type, isBlock, storageClassType } = v as any;
      if (isBlock && type !== "list" && type !== "set") {
        return `${name} { 
${renderAttributes(value)} 
}`;
      }
      if (type === "list" || type === "set") {
        if (isBlock) {
          return renderList(v, name);
        }
        return `${name} = ${renderList(v)}`;
      }
      if (type === "map") {
        return `${name} = ${renderMap(value)}`;
      }

      if (type === "simple") {
        if (storageClassType === "string") {
          return `${name} = "${value}"`;
        }
        if (storageClassType === "number" || storageClassType === "boolean") {
          return `${name} = ${value}`;
        }
      }

      return `${name} = ${value}`;
    })
    .filter((v) => v !== undefined)
    .join("\n");
}
