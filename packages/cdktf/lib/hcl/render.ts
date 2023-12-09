/**
 * Copyright (c) HashiCorp, Inc.
 * SPDX-License-Identifier: MPL-2.0
 */

/**
 *
 */
export function renderList(list: any): string {
  if (list === undefined) {
    return "";
  }
  if (!Array.isArray(list)) {
    throw new Error(`Expected list, got ${typeof list}`);
  }

  return `[
${list.map((v: any) => renderListValue(v)).join(",\n")}
]`;
}

/**
 *
 */
export function renderListValue(value: any): string {
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
      if (isBlock) {
        return `${name} { 
${renderAttributes(value)} 
}`;
      }
      if (type === "list") {
        return `${name} = ${renderList(value)}`;
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
