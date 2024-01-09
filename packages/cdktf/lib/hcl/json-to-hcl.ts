/**
 * Copyright (c) HashiCorp, Inc.
 * SPDX-License-Identifier: MPL-2.0
 */

/**
 *
 */
function jsonObjectToHcl(jsonObject: any): string {
  return [
    "{",
    ...Object.entries(jsonObject).map(([name, value]) => {
      return `${name} = ${jsonExpressionToHcl(value as string)}`;
    }),
    "}",
  ].join("\n");
}

/**
 *
 */
function jsonExpressionToHcl(jsonExpression: string | number): string {
  if (Array.isArray(jsonExpression)) {
    return [
      "[",
      ...jsonExpression.map((value) => jsonExpressionToHcl(value)),
      "]",
    ].join("\n");
  }

  if (typeof jsonExpression === "object") {
    return jsonObjectToHcl(jsonExpression);
  }

  if (!jsonExpression) {
    return "";
  }

  if (typeof jsonExpression === "string") {
    if (typeof jsonExpression === "string" && jsonExpression.includes("${")) {
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
function variablesToHcl(variables: any): string[] {
  const variableNames = Object.keys(variables);

  if (variableNames.length === 0) {
    return [];
  }

  let hcl: string[] = [];

  for (const variableName of variableNames) {
    const variable = variables[variableName];
    hcl = hcl.concat([
      `variable "${variableName}" {`,
      ...Object.entries(variable).map(
        ([name, value]) => `  ${name} = ${jsonExpressionToHcl(value as string)}`
      ),
      "}",
      "",
    ]);
  }

  return hcl.flat(0);
}

/**
 *
 */
function providersToHcl(providers: any): string[] {
  const providerTypes = Object.keys(providers);

  if (providerTypes.length === 0) {
    return [];
  }

  let hcl: string[] = [];

  for (const providerType of providerTypes) {
    for (const provider of providers[providerType]) {
      hcl = hcl.concat([
        `provider "${providerType}" {`,
        ...Object.entries(provider).map(
          ([name, value]) =>
            `  ${name} = ${jsonExpressionToHcl(value as string)}`
        ),
        "}",
        "",
      ]);
    }
  }

  return hcl.flat(0);
}

/**
 *
 */
function dataSourcesToHcl(dataSources: any): string[] {
  if (!dataSources) {
    return [];
  }

  const dataSourceTypes = Object.keys(dataSources);

  if (dataSourceTypes.length === 0) {
    return [];
  }

  let hcl: string[] = [];

  for (const dataSourceType of dataSourceTypes) {
    const dataSourcesOfType = dataSources[dataSourceType];
    for (const dataSourceName of Object.keys(dataSourcesOfType)) {
      const dataSource = dataSourcesOfType[dataSourceName];
      hcl = hcl.concat([
        `data "${dataSourceType}" "${dataSourceName}" {`,
        ...Object.entries(dataSource)
          .map(([name, value]) => {
            if (name === "//") {
              return "";
            }

            return `  ${name} = ${jsonExpressionToHcl(value as string)}`;
          })
          .filter((s) => !!s),
        "}",
        "",
      ]);
    }
  }

  return hcl;
}

/**
 *
 */
function resourcesMetadata(resources: any): any {
  if (!resources) {
    return {};
  }

  const resourceTypes = Object.keys(resources);

  if (resourceTypes.length === 0) {
    return {};
  }

  const metadata: any = {};

  for (const resourceType of resourceTypes) {
    const resourcesOfType = resources[resourceType];

    const resourcesMetadata: any = {};

    for (const resourceName of Object.keys(resourcesOfType)) {
      const resource = resourcesOfType[resourceName];
      resourcesMetadata[resourceName] = {
        "//": resource["//"],
      };
    }

    metadata[resourceType] = resourcesMetadata;
  }

  return metadata;
}

/**
 *
 */
function resourcesToHcl(resources: any): string[] {
  if (!resources) {
    return [];
  }
  const resourceTypes = Object.keys(resources);

  if (resourceTypes.length === 0) {
    return [];
  }

  let hcl: string[] = [];

  for (const resourceType of resourceTypes) {
    const resourcesOfType = resources[resourceType];
    for (const resourceName of Object.keys(resourcesOfType)) {
      const resource = resourcesOfType[resourceName];
      hcl = hcl.concat([
        `resource "${resourceType}" "${resourceName}" {`,
        ...Object.entries(resource)
          .map(([name, value]) => {
            if (name === "//") {
              return "";
            }
            return `  ${name} = ${jsonExpressionToHcl(value as string)}`;
          })
          .filter((s) => !!s),
        "}",
        "",
      ]);
    }
  }

  return hcl.flat(0);
}

/**
 *
 */
function movedBlocksToHcl(movedBlocks: any): string[] {
  return movedBlocks
    .map((movedBlock: any) => {
      const { from, to } = movedBlock;
      return [`moved {`, `  from = "${from}"`, `  to = "${to}"`, `}`, ""].join(
        "\n"
      );
    })
    .flat(0);
}

/**
 *
 */
function modulesToHcl(modules: any): string[] {
  const moduleNames = Object.keys(modules);

  if (moduleNames.length === 0) {
    return [];
  }

  let hcl: string[] = [];

  for (const moduleName of moduleNames) {
    const module = modules[moduleName];
    hcl = hcl.concat([
      `module "${moduleName}" {`,
      ...Object.entries(module)
        .map(([name, value]) => {
          if (name === "//") {
            return "";
          }
          return `  ${name} = ${jsonExpressionToHcl(value as string)}`;
        })
        .filter((s) => !!s),
      "}",
      "",
    ]);
  }

  return hcl;
}

/**
 *
 */
function outputsToHcl(outputs: any): string[] {
  if (!outputs) {
    return [];
  }

  const outputNames = Object.keys(outputs);

  if (outputNames.length === 0) {
    return [];
  }

  let hcl: string[] = [];

  for (const outputName of outputNames) {
    const output = outputs[outputName];
    hcl = hcl.concat([
      `output "${outputName}" {`,
      ...Object.entries(output).map(
        ([name, value]) => `  ${name} = ${jsonExpressionToHcl(value as string)}`
      ),
      "}",
      "",
    ]);
  }

  return hcl.flat(0);
}

/**
 *
 */
function getPureMetadata(jsonTf: any): any {
  const { resource, data, terraform } = jsonTf;

  const metadata: any = {
    "//": jsonTf["//"],
  };

  if (resource) {
    metadata.resource = resourcesMetadata(resource);
  }

  if (data) {
    metadata.data = resourcesMetadata(resource);
  }

  if (terraform) {
    metadata.terraform = terraform;
  }

  return metadata;
}

/**
 *
 */
export function jsonToHcl(jsonTf: any): Record<string, any> {
  const { locals, provider } = jsonTf;

  let hcl: string[] = [];
  if (locals) {
    hcl = hcl.concat([
      "locals {",
      ...Object.entries(locals).map(
        ([name, value]) => `  ${name} = ${jsonExpressionToHcl(value as string)}`
      ),
      "}",
      "",
    ]);
  }

  if (jsonTf.variable) {
    hcl = hcl.concat(variablesToHcl(jsonTf.variable));
  }

  if (jsonTf.provider) {
    hcl = hcl.concat(providersToHcl(provider));
  }

  if (jsonTf.resource) {
    hcl = hcl.concat(resourcesToHcl(jsonTf.resource));
  }

  if (jsonTf.data) {
    hcl = hcl.concat(dataSourcesToHcl(jsonTf.data));
  }

  if (jsonTf.terraform) {
    hcl = hcl.concat([
      "terraform {",
      ...Object.entries(jsonTf.terraform).map(
        ([name, value]) => `  ${name} = ${jsonExpressionToHcl(value as string)}`
      ),
      "}",
      "",
    ]);
  }

  if (jsonTf.output) {
    hcl = hcl.concat(outputsToHcl(jsonTf.output));
  }

  if (jsonTf.module) {
    hcl = hcl.concat(modulesToHcl(jsonTf.module));
  }

  if (jsonTf.moved) {
    hcl = hcl.concat(movedBlocksToHcl(jsonTf.moved));
  }

  return {
    hcl: hcl.join("\n"),
    metadata: getPureMetadata(jsonTf),
  };
}
