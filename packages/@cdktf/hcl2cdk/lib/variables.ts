/**
 * Copyright (c) HashiCorp, Inc.
 * SPDX-License-Identifier: MPL-2.0
 */

import * as t from "@babel/types";
import { ProgramScope, Reference } from "./types";
import { camelCase, pascalCase } from "./utils";
import { sanitizeClassOrNamespaceName } from "@cdktf/provider-generator";
import { getFullProviderName } from "./provider";
import reservedWords from "reserved-words";

export function referenceToVariableName(
  scope: ProgramScope,
  ref: Reference
): string {
  const parts = ref.referencee.id.split(".");
  const resource = parts[0] === "data" ? `${parts[0]}.${parts[1]}` : parts[0];
  const name = parts[0] === "data" ? parts[2] : parts[1];
  return variableName(scope, resource, name);
}

function validVarName(name: string) {
  if (reservedWords.check(name)) {
    return `${name}Var`;
  }

  if (!Number.isNaN(parseInt(name[0], 10))) {
    return `d${name}`;
  }

  return name;
}

function getUniqueName(scope: ProgramScope, provider: string, type: string) {
  // early abort on cdktf
  if (provider === "cdktf") {
    return pascalCase(type.replace("cdktf_", ""));
  }

  if (provider === "NullProvider") {
    return pascalCase(type.replace("NullProvider_", ""));
  }

  // Special handling for provider blocks, e.g. aws_AwsProvider
  if (type === `${pascalCase(provider)}Provider`) {
    return sanitizeClassOrNamespaceName(type, true);
  }

  const fullProviderName = getFullProviderName(scope.providerSchema, provider);
  if (fullProviderName && scope.providerGenerator[fullProviderName]) {
    return scope.providerGenerator[fullProviderName]?.getClassNameForResource(
      type
    );
  } else {
    // If we can not find the class name for a resource the caller needs to find a sensible default
    return null;
  }
}

function getResourceNamespace(
  scope: ProgramScope,
  provider: string,
  resource: string,
  isDataSource: boolean,
  type: string
) {
  // happens e.g. for references to cdktf.TerraformStack (and similar) in generated code
  if (provider === "cdktf") {
    return undefined;
  }

  // e.g. awsProvider -> provider
  if (
    resource === pascalCase(`${provider}_provider`) ||
    (provider === "NullProvider" && resource === "NullProvider")
  ) {
    return "provider";
  }

  const fullProviderName = getFullProviderName(scope.providerSchema, provider);

  if (fullProviderName && scope.providerGenerator[fullProviderName]) {
    return camelCase(
      scope.providerGenerator[fullProviderName]?.getNamespaceNameForResource(
        type.replace(/\./g, "_")
      )
    );
  }

  if (isDataSource) {
    return camelCase(
      sanitizeClassOrNamespaceName(`data_${provider}_${resource}`)
    );
  }

  return camelCase(sanitizeClassOrNamespaceName(resource));
}

export function constructAst(
  scope: ProgramScope,
  type: string,
  isModuleImport: boolean
) {
  if (isModuleImport) {
    return t.memberExpression(t.identifier(type), t.identifier(type));
  }

  if (type.startsWith("var.")) {
    scope.importables.push({
      provider: "cdktf",
      constructName: "TerraformVariable",
    });

    return t.identifier("TerraformVariable");
  }

  if (type === "terraform.data") {
    scope.importables.push({
      constructName: "DataResource",
      provider: "cdktf",
    });
    return t.identifier("DataResource");
  }

  // resources or data sources
  if (!type.includes("./") && type.includes(".")) {
    const parts = type.split(".");
    if (parts[0] === "data") {
      const [, provider, resource] = parts;

      const namespace = getResourceNamespace(
        scope,
        provider,
        resource,
        true,
        type
      );
      const resourceName =
        getUniqueName(scope, provider, parts.join("_")) ||
        pascalCase(
          sanitizeClassOrNamespaceName(`data_${provider}_${resource}`)
        );

      scope.importables.push({
        provider: provider,
        constructName: resourceName,
        namespace,
      });

      if (namespace) {
        return t.identifier(resourceName); // e.g. DataAwsInstance
      }

      return t.identifier(resourceName); // e.g. DataAwsNatGateway
    }

    const [provider, resource] = parts;
    const namespace = getResourceNamespace(
      scope,
      provider,
      resource,
      false,
      type
    );
    const resourceName =
      getUniqueName(scope, provider, parts.join("_")) ||
      pascalCase(sanitizeClassOrNamespaceName(resource));

    scope.importables.push({
      provider: provider,
      constructName: resourceName,
      namespace,
    });

    if (namespace) {
      return t.identifier(resourceName); // e.g. Instance
    }

    return t.identifier(resourceName); // e.g. BigQueryTable
  }

  return t.identifier(pascalCase(type));
}

export function variableName(
  scope: ProgramScope,
  resource: string,
  name: string
): string {
  const consistentResourceName = resource.replace(/\./g, "_");
  // name collision, we need to prefix the name
  if (scope.variables[name]) {
    if (consistentResourceName === scope.variables[name].resource) {
      return scope.variables[name].variableName;
    }

    // we only cache one per name
    return validVarName(camelCase([resource, name].join("_")));
  }

  const variableName = validVarName(camelCase(name));

  scope.variables[name] = {
    variableName,
    resource: consistentResourceName,
  };

  return variableName;
}
