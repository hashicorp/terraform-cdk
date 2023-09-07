// Copyright (c) HashiCorp, Inc
// SPDX-License-Identifier: MPL-2.0
import {
  ProviderSchema,
  BlockType,
  AttributeType,
  Schema,
} from "@cdktf/commons";
import { getFullProviderName } from "./provider";
import { ProgramScope } from "./types";

function getResourceAtPath(schema: ProviderSchema, path: string) {
  const parts = path.split(".");

  if (parts.length < 2) {
    // Too short to be a valid path
    return null;
  }

  const isDataSource = parts[0] === "data";
  if (isDataSource) {
    parts.shift();
  }

  const providerName = parts.shift() as string;
  const resourceName = parts.shift() as string;

  const fullProviderName = getFullProviderName(schema, providerName);
  // Hack: In the case of 'external', the name of the data source 'external' doesn't have a prefix
  // so we repeat the name as both provider prefix and the data source name
  const fullResourceName =
    providerName === resourceName
      ? providerName
      : `${providerName}_${resourceName}`;

  if (!fullProviderName) {
    // No provider found with that name
    return null;
  }

  const provider = schema.provider_schemas?.[fullProviderName];

  if (!provider) {
    // Could not find provider
    return null;
  }

  if (resourceName.endsWith("Provider")) {
    // This is a provider
    return { resource: provider.provider, parts };
  }

  const resources = isDataSource
    ? provider.data_source_schemas
    : provider.resource_schemas;

  const resource = resources[fullResourceName];
  if (!resource) {
    // Could not find resource
    return null;
  }

  return { resource, parts };
}

function findType(
  item: Schema | BlockType | AttributeType,
  parts: string[]
): Schema | BlockType | AttributeType | null {
  if (!parts.length) {
    return item;
  }

  const [currentPart, ...otherParts] = parts;

  // Promitive attributes can be returned directly
  if (typeof item === "string") {
    return item;
  }

  // Complex attributes
  if (Array.isArray(item)) {
    if (item[0] === "set" || item[0] === "list") {
      if (currentPart === "[]") {
        return findType(item[1], otherParts);
      }
      // Trying to access a property on a list
      return null;
    }

    if (item[0] === "object") {
      if (currentPart === "[]") {
        // Trying to access a property on a list
        return null;
      }

      return findType(item[1][currentPart], otherParts);
    }

    if (item[0] === "map") {
      // We don't care what the key is
      return findType(item[1], otherParts);
    }

    // Unknown type
    return null;
  }

  // If we are not in an attribute, we can ignore the [] (since max_item=1 parts don't have [], so we just ignore it)
  if (currentPart === "[]") {
    return findType(item, otherParts);
  }

  // Block
  if (item.block) {
    // Find block type in block
    if (item.block.block_types) {
      const blockType = item.block.block_types[currentPart];
      if (blockType) {
        return findType(blockType, otherParts);
      }
    }

    // Find attribute in block
    if (item.block.attributes) {
      const attribute = item.block.attributes[currentPart];
      if (attribute && attribute.type) {
        return findType(attribute.type, otherParts);
      }
    }
  }

  // Could not find the type
  return null;
}

export function getTypeAtPath(
  schema: ProviderSchema,
  path: string
): Schema | BlockType | AttributeType | null {
  const resourceSchema = getResourceAtPath(schema, path);

  if (!resourceSchema) {
    return null;
  }
  const { resource, parts } = resourceSchema;
  return findType(resource, parts);
}

export const isMapAttribute = (
  attribute: Schema | AttributeType | BlockType | null
) => (Array.isArray(attribute) ? attribute[0] === "map" : false);

export function getDesiredType(
  scope: ProgramScope,
  path: string
): AttributeType {
  const attributeOrBlockType = getTypeAtPath(scope.providerSchema, path);

  // Attribute type is not defined
  if (!attributeOrBlockType) {
    return "dynamic";
  }

  // Primitive attribute type
  if (typeof attributeOrBlockType === "string") {
    return attributeOrBlockType;
  }

  // Complex attribute type
  if (Array.isArray(attributeOrBlockType)) {
    return attributeOrBlockType;
  }

  // Schema
  if ("version" in attributeOrBlockType) {
    return "dynamic";
  }

  // Block type
  return "dynamic";
}
