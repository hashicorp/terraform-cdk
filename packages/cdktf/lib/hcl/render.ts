/**
 * Copyright (c) HashiCorp, Inc.
 * SPDX-License-Identifier: MPL-2.0
 */
import { Tokenization } from "../tokens/token";

/**
 *
 */
function escapeQuotes(str: string): string {
  // Don't attempt to escape if we have an expression
  if (str.match(/\$\{/)) {
    return str;
  }
  return str.replace(/(?<!\\)"/g, '\\"');
}

/**
 *
 */
function wrapIdentifierInQuotesIfNeeded(key: string): string {
  return /(^\d)|[^A-Za-z0-9_-]/.test(key) ? `"${key}"` : key;
}

/**
 *
 */
function renderString(str: string): string {
  if (!str) {
    return str;
  }

  if (typeof str !== "string") {
    throw new Error(
      "Unable to process attribute that should have been a string, but isn't"
    );
  }

  const lines = str.split(/\r\n|[\n\r]/);

  if (lines.length === 1) return `"${escapeQuotes(str)}"`;

  return `<<EOF\n${lines.map((s) => escapeQuotes(s)).join("\n")}\nEOF`;
}

/**
 *
 */
export function cleanForMetadata(block: any): any {
  const res: { [name: string]: any } = {};

  if (typeof block !== "object" && !Array.isArray(block)) {
    return block;
  }

  if (Array.isArray(block)) {
    return block.map((i) => cleanForMetadata(i));
  }

  const keys = Object.keys(block);

  if (keys.includes("value")) {
    return cleanForMetadata(block.value);
  }

  for (const key of keys) {
    const value = block[key];
    if (typeof value === "object" && value != null && !Array.isArray(value)) {
      // if the value is a resolvable we don't want to recurse into it
      if (Tokenization.isResolvable(value)) {
        res[key] = {};
        continue;
      }

      res[key] = cleanForMetadata(value);
      continue;
    } else if (
      typeof value === "object" &&
      value != null &&
      Array.isArray(value)
    ) {
      if (Array.isArray(res[key])) {
        res[key] = [...res[key], ...value];
      } else {
        res[key] = value;
      }
    } else if (value === undefined) {
      delete res[key];
    } else {
      res[key] = value;
    }
  }
  return res;
}

/**
 *
 */
export function renderList(v: any, name?: string): string {
  const { isBlock, is_block, value, storage_class_type, storageClassType } = v;
  const block = isBlock || is_block;
  const classType = storageClassType || storage_class_type;

  if (value === undefined) {
    return "";
  }

  if (typeof value === "string") {
    // this could be an expression, so we don't need to do anything here
    return renderString(value);
  }

  if (name) {
    if (block) {
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
      return `${name} = ${renderListValue(value, classType)}`;
    }

    return `${name} = [
${value.map((v: any) => renderListValue(v, classType)).join(",\n")}
]`;
  }

  if (!Array.isArray(value)) {
    // A list type of only a single item
    return renderListValue(value, classType);
  }

  if (block) {
    return value.map((v: any) => renderListValue(v, classType)).join("\n");
  }

  return `[
${value.map((v: any) => renderListValue(v, classType)).join(",\n")}
]`;
}

/**
 *
 */
export function renderListValue(value: any, storageClassType: string): string {
  if (storageClassType === "stringList") {
    return renderString(value);
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
  if (typeof map === "string") {
    // this could be an expression, so we don't need to do anything here
    return `"${escapeQuotes(map)}"`;
  }
  return `{
${Object.entries(map)
  .map(([k, v]) => {
    const wrappedKey = wrapIdentifierInQuotesIfNeeded(k);

    return `${wrappedKey} = ${renderMapValue(v)}`;
  })
  .join("\n")}
}`;
}

/**
 *
 */
export function renderMapValue(value: any): string {
  if (typeof value === "string") {
    return renderString(value);
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

  if (resourceAttributes.connection) {
    resourceAttributes.connection = {
      value: resourceAttributes.connection,
      isBlock: true,
    };
  }

  const { provisioner, dynamic, ...otherAttrs } = resourceAttributes;

  const hcl = [`resource "${resourceType}" "${resourceName}" {`];

  const attrs = renderAttributes(otherAttrs);

  if (attrs) hcl.push(attrs);
  if (provisioner) hcl.push(renderProvisionerBlock(provisioner));
  if (dynamic) hcl.push(...renderDynamicBlocks(dynamic));

  hcl.push("}");

  return {
    hcl: hcl.join("\n"),
    metadata: {
      resource: {
        [resourceType]: {
          [resourceName]: {
            "//": resourceAttributes["//"],
          },
        },
      },
    },
  };
}

/**
 *
 */
export function renderDatasource(dataSource: any) {
  const dataSourceType = Object.keys(dataSource)[0];
  const dataSourcesWithType = dataSource[dataSourceType];
  const dataSourceName = Object.keys(dataSourcesWithType)[0];
  const dataSourceAttributes = dataSourcesWithType[dataSourceName];

  const { dynamic, ...otherAttrs } = dataSourceAttributes;

  const hcl = [`data "${dataSourceType}" "${dataSourceName}" {`];

  const attrs = renderAttributes(otherAttrs);
  if (attrs) hcl.push(attrs);
  if (dynamic) hcl.push(...renderDynamicBlocks(dynamic));
  hcl.push("}");

  return {
    hcl: hcl.join("\n"),
    metadata: {
      data: {
        [dataSourceType]: {
          [dataSourceName]: {
            "//": dataSourceAttributes["//"],
          },
        },
      },
    },
  };
}

/**
 *
 */
export function renderProvisionerBlock(provisioners: any) {
  return provisioners
    .map((provisioner: any) => {
      const provisionerType = Object.keys(provisioner)[0];
      const provisionerAttrs = provisioner[provisionerType];

      if (provisionerAttrs.connection) {
        provisionerAttrs.connection = {
          value: provisionerAttrs.connection,
          isBlock: true,
        };
      }

      const { dynamic, ...otherAttrs } = provisionerAttrs;

      const hcl = [`provisioner "${provisionerType}" {`];

      const attrs = renderAttributes(otherAttrs.value || otherAttrs);
      if (attrs) hcl.push(attrs);
      if (dynamic) hcl.push(...renderDynamicBlocks(dynamic));
      hcl.push("}");

      return hcl.join("\n");
    })
    .join("\n\n");
}

/**
 *
 */
export function renderDynamicBlocks(dynamic: any) {
  return Object.entries(dynamic).map(
    ([dynamicName, dynamicAttrs]: [string, any]) => {
      const res = [`dynamic "${dynamicName}" {`];
      res.push(
        `for_each = ${renderFuzzyJsonExpression(dynamicAttrs?.for_each)}`
      );
      if (dynamicAttrs?.iterator) {
        res.push(`iterator = ${dynamicAttrs?.iterator}`);
      }
      if (dynamicAttrs?.labels) {
        res.push(`labels = ${renderFuzzyJsonExpression(dynamicAttrs?.labels)}`);
      }
      res.push(`content {
  ${renderAttributes(dynamicAttrs.content)}
  }`);
      res.push(`}`);

      return res.join("\n");
    }
  );
}

/**
 *
 */
export function renderProvider(provider: any) {
  const providerName = Object.keys(provider)[0];
  const providerAttributes = provider[providerName];

  return providerAttributes
    .map((providerInstance: any) => {
      const { dynamic, ...otherAttrs } = providerInstance;

      const hcl = [`provider "${providerName}" {`];

      const attrs = renderAttributes(otherAttrs);
      if (attrs) hcl.push(attrs);
      if (dynamic) hcl.push(...renderDynamicBlocks(dynamic));

      hcl.push("}");

      return hcl.join("\n");
    })
    .join("\n\n");
}

/**
 *
 */
export function renderModule(module: any) {
  const moduleName = Object.keys(module)[0];
  const moduleAttributes = module[moduleName];

  return {
    hcl: `module "${moduleName}" {
${renderAttributes(moduleAttributes)}
}`,
    metadata: {
      module: {
        [moduleName]: {
          "//": moduleAttributes["//"],
        },
      },
    },
  };
}

/**
 *
 */
export function renderOutput(output: any) {
  const outputName = Object.keys(output)[0];
  const outputAttributes = output[outputName];

  return `output "${outputName}" {
${renderAttributes(outputAttributes)}
}`;
}

/**
 *
 */
export function renderLocals(locals: any) {
  if (!locals) {
    return "";
  }

  const localNames = Object.keys(locals);

  if (localNames.length === 0) {
    return "";
  }

  return `locals {
    ${localNames
      .filter((name) => !!locals[name].value)
      .map((name: string) => {
        const value = renderFuzzyJsonExpression(locals[name].value);
        return `${name} = ${value}`;
      })
      .join("\n")}
}`;
}

/**
 *
 */
export function renderVariable(variable: any) {
  const variableName = Object.keys(variable)[0];
  const variableAttributes = variable[variableName];

  return `variable "${variableName}" {
${renderAttributes(variableAttributes)}
}`;
}

/**
 *
 */
export function renderMoved(move: any) {
  const movedBlocks = move.map((moveBlock: any) => {
    return `moved {
${renderAttributes(moveBlock)}
}`;
  });

  return movedBlocks.join("\n");
}

/**
 *
 */
export function renderImport(imports: any) {
  const importBlocks = imports.map((importBlock: any) => {
    return `import {
${renderAttributes(importBlock)}
}`;
  });

  return importBlocks.join("\n");
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
      const wrappedKey = wrapIdentifierInQuotesIfNeeded(name);
      return `${wrappedKey} = ${renderFuzzyJsonExpression(value)}`;
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
      ...jsonExpression.map((value) => `${renderFuzzyJsonExpression(value)},`),
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

    return `"${escapeQuotes(jsonExpression)}"`;
  }

  if (jsonExpression === "true" || jsonExpression === "false") {
    return jsonExpression as string;
  }

  if (jsonExpression === "null") {
    return jsonExpression;
  }

  return `${jsonExpression}`;
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
  if (attributes === undefined || attributes === null) {
    return "";
  }
  return Object.entries(attributes)
    .map(([name, v]) => {
      if (name === "//") {
        return undefined;
      }
      const metaBlocks = ["lifecycle", "provisioner"];

      //
      // We might have some attributes that don't have type information
      // just try to guess them
      if (typeof v === "string" || typeof v === "number") {
        return `${name} = ${renderFuzzyJsonExpression(v)}`;
      } else if (Array.isArray(v)) {
        return `${name} = ${renderFuzzyJsonExpression(v)}`;
      } else if (v === null) {
        return `${name} = null`;
        // eslint-disable-next-line no-prototype-builtins
      } else if (
        typeof v === "object" &&
        // eslint-disable-next-line no-prototype-builtins
        !v.hasOwnProperty("value") &&
        // eslint-disable-next-line no-prototype-builtins
        !v.hasOwnProperty("dynamic")
      ) {
        if (metaBlocks.includes(name)) {
          return `${name} { 
${renderSimpleAttributes(v)}
}`;
        }
        return `${name} = ${renderFuzzyJsonExpression(v)}`;
      } else if (v === undefined) {
        return undefined;
      }

      // Referencing both isBlock and is_block, because sometimes we pass through a snake case filter
      // within attributes.
      const {
        dynamic,
        value,
        type,
        isBlock,
        storageClassType,
        is_block,
        storage_class_type,
      } = v as any;
      const block = isBlock || is_block || metaBlocks.includes(name);
      const classType = storageClassType || storage_class_type;

      if (dynamic) {
        return renderDynamicBlocks({
          [name]: dynamic.value,
        });
      }
      // Short circuit type checking if value is an expression
      if (typeof value === "string" && value.includes("${")) {
        return `${name} = ${renderString(value)}`;
      }

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
          return `${name} = ${renderString(value)}`;
        }
        if (classType === "number" || classType === "boolean") {
          return `${name} = ${value}`;
        }
      }

      if (type === "any") {
        return `${name} = ${renderFuzzyJsonExpression(value)}`;
      }

      if (type === "reference") {
        return `${name} = ${value}`;
      }

      return `${name} = ${value}`;
    })
    .filter((v) => v !== undefined)
    .join("\n");
}
