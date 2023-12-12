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
export function renderDatasource(dataSource: any) {
  const dataSourceType = Object.keys(dataSource)[0];
  const dataSourcesWithType = dataSource[dataSourceType];
  const dataSourceName = Object.keys(dataSourcesWithType)[0];
  const dataSourceAttributes = dataSourcesWithType[dataSourceName];

  return `data "${dataSourceType}" "${dataSourceName}" {
${renderAttributes(dataSourceAttributes)}
}`;
}

/**
 *
 */
export function renderProvider(provider: any) {
  const providerName = Object.keys(provider)[0];
  const providerAttributes = provider[providerName];

  return providerAttributes.map((providerInstance: any) => {
    return `provider "${providerName}" {
${renderAttributes(providerInstance)}
}`;
  });
}

/**
 *
 */
export function renderModule(module: any) {
  const moduleName = Object.keys(module)[0];
  const moduleAttributes = module[moduleName];

  return `module "${moduleName}" {
${renderAttributes(moduleAttributes)}
}`;
}

/**
 *
 */
export function renderTerraform(terraform: any) {
  const blockAttributes = ["required_providers", "backend", "cloud"];
  const requiredProviders = `required_providers {
${renderSimpleAttributes(terraform.required_providers)}
}`;

  const backends = Object.keys(terraform.backend || {}).map((backendName) => {
    return `backend "${backendName}" {
${renderAttributes(terraform.backend[backendName])}
}`;
  });

  const cloudBackend = terraform.cloud
    ? `cloud {
${renderAttributes(terraform.cloud)}
}`
    : undefined;

  const otherAttributes = Object.keys(terraform).filter(
    (key) => !blockAttributes.includes(key)
  );
  return `terraform {
${requiredProviders}
${[...backends, cloudBackend].join("\n")}
${renderSimpleAttributes(otherAttributes)}
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
function renderFuzzyJsonObject(jsonObject: any): string {
  return [
    "{",
    ...Object.entries(jsonObject).map(([name, value]) => {
      return `${name} = ${renderFuzzyJsonExpression(value as string)}`;
    }),
    "}",
  ].join("\n");
}
/**
 *
 */
function renderFuzzyJsonExpression(jsonExpression: any): string {
  if (Array.isArray(jsonExpression)) {
    return [
      "[",
      ...jsonExpression.map((value) => renderFuzzyJsonExpression(value)),
      "]",
    ].join("\n");
  }

  if (typeof jsonExpression === "object") {
    return renderFuzzyJsonObject(jsonExpression);
  }

  if (!jsonExpression) {
    return "";
  }

  if (typeof jsonExpression === "string") {
    if (jsonExpression.includes("${")) {
      return `"${jsonExpression}"`;
    }

    if (parseInt(jsonExpression, 10).toString() === jsonExpression) {
      return jsonExpression;
    }

    if (jsonExpression.startsWith("[")) {
      return jsonExpression;
    }

    if (jsonExpression.startsWith("{")) {
      return jsonExpression;
    }

    if (jsonExpression.startsWith('"')) {
      return jsonExpression;
    }

    return `"${jsonExpression}"`;
  }

  if (jsonExpression === "true" || jsonExpression === "false") {
    return jsonExpression as string;
  }

  if (jsonExpression === "null") {
    return jsonExpression;
  }

  return `"${jsonExpression}"`;
}

/**
 *
 */
export function renderSimpleAttributes(attributes: any): string {
  if (attributes === undefined) {
    return "";
  }
  return Object.entries(attributes)
    .map(
      ([name, value]) =>
        `  ${name} = ${renderFuzzyJsonExpression(value as any)}`
    )
    .join("\n");
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

      //
      // We might have some attributes that don't have type information
      // just try to guess them
      if (typeof v === "string") {
        return `${name} = ${renderFuzzyJsonExpression(v)}`;
      } else if (Array.isArray(v)) {
        return `${name} = ${renderFuzzyJsonExpression(v)}`;
      } else if (v === null) {
        return `${name} = null`;
      } else if (typeof v === "object" && !v.hasOwnProperty("value")) {
        return `${name} = ${renderFuzzyJsonExpression(v)}`;
      } else if (v === undefined) {
        return undefined;
      }

      // Referncing both isBlock and is_block, because sometimes we pass through a snake case filter
      // within attributes.
      const {
        value,
        type,
        isBlock,
        storageClassType,
        is_block,
        storage_class_type,
      } = v as any;
      const block = isBlock || is_block;
      const classType = storageClassType || storage_class_type;

      if (block && type !== "list" && type !== "set") {
        return `${name} { 
${renderAttributes(value)} 
}`;
      }
      if (type === "list" || type === "set") {
        if (block) {
          return renderList(v, name);
        }
        return `${name} = ${renderList(v)}`;
      }
      if (type === "map") {
        return `${name} = ${renderMap(value)}`;
      }

      if (type === "simple") {
        if (classType === "string") {
          return `${name} = "${value}"`;
        }
        if (classType === "number" || classType === "boolean") {
          return `${name} = ${value}`;
        }
      }

      return `${name} = ${value}`;
    })
    .filter((v) => v !== undefined)
    .join("\n");
}
