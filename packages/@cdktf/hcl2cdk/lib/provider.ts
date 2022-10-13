// Copyright (c) HashiCorp, Inc
// SPDX-License-Identifier: MPL-2.0
import * as z from "zod";
import {
  ProviderSchema,
  BlockType,
  Attribute,
  AttributeType,
  Schema,
} from "@cdktf/provider-generator";
import { schema } from "./schema";

export { BlockType, Attribute };

export function getFullProviderName(
  schema: ProviderSchema,
  providerName: string
) {
  return Object.keys(schema.provider_schemas || {}).find((name) =>
    name.endsWith(providerName)
  );
}

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
  const fullResourceName = `${providerName}_${resourceName}`;

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

  if (parts.length === 0) {
    // No property specified
    return null;
  }

  return { resource, parts };
}

type ExtendedBlockType = BlockType & { max_items?: number };
export function getBlockTypeAtPath(
  schema: ProviderSchema,
  path: string
): ExtendedBlockType | null {
  const resourceSchema = getResourceAtPath(schema, path);
  if (!resourceSchema) {
    return null;
  }
  const { resource, parts } = resourceSchema;

  let currentSchema: BlockType | typeof resource = resource;
  do {
    const part = parts.shift() as string;
    if (
      !currentSchema ||
      !currentSchema.block ||
      !currentSchema.block.block_types ||
      !currentSchema.block.block_types.hasOwnProperty(part)
    ) {
      // Found no block property with this name, there could be an attribute, but we don't care at this point
      return null;
    }

    currentSchema = currentSchema.block.block_types[part];
  } while (parts.length > 0);

  return currentSchema;
}

export function getAttributeTypeAtPath(
  schema: ProviderSchema,
  path: string
): Attribute | null {
  const resourceSchema = getResourceAtPath(schema, path);
  if (!resourceSchema) {
    return null;
  }
  const { resource, parts } = resourceSchema;

  const attributes = resource.block.attributes;

  if (parts.length !== 1) {
    // No property specified or the path is too deep
    return null;
  }

  const attributeName = parts[0];

  return attributes[attributeName];
}

// Resolves within a list of objects, e.g.
// "ingress": {
//   "type": [
//     "set",
//     [
//       "object",
//       {
//         "cidr_blocks": [
//           "list",
//           "string"
//         ],
function resolveAttribute(
  att: Attribute,
  parts: string[]
): AttributeType | null | undefined {
  if (parts.length === 0) {
    return att.type;
  }

  let currentAtt: AttributeType | undefined = att.type;
  do {
    const part = parts.shift() as string;
    if (
      Array.isArray(currentAtt) &&
      currentAtt.length === 2 &&
      (currentAtt[0] === "set" || currentAtt[0] === "list") &&
      Array.isArray(currentAtt[1]) &&
      currentAtt[1][0] === "object"
    ) {
      // We can go deeper into the set/list
      const x = currentAtt[1][1][part];
      currentAtt = x;
    } else {
      return null;
    }
  } while (parts.length > 0);

  if (parts.length === 0) {
    return currentAtt;
  } else {
    // We could not go deeper but the item path expects more parts, we have to return null
    return null;
  }
}

export function getTypeAtPath(
  schema: ProviderSchema,
  path: string
): Schema | BlockType | AttributeType | null | undefined {
  const resourceSchema = getResourceAtPath(schema, path);
  if (!resourceSchema) {
    return null;
  }
  const { resource, parts } = resourceSchema;

  let currentSchema: BlockType | typeof resource = resource;
  do {
    const part = parts.shift() as string;

    // Go into blocks if possible
    if (
      currentSchema &&
      currentSchema.block &&
      currentSchema.block.block_types &&
      currentSchema.block.block_types.hasOwnProperty(part)
    ) {
      currentSchema = currentSchema.block.block_types[part];
      break;
    }

    // Go into attributes if possible
    if (
      currentSchema &&
      currentSchema.block &&
      currentSchema.block.attributes &&
      currentSchema.block.attributes.hasOwnProperty(part)
    ) {
      return resolveAttribute(currentSchema.block.attributes[part], parts);
    }

    // No block or attribute found but parts left
    return null;
  } while (parts.length > 0);

  return currentSchema;
}

type Plan = z.infer<typeof schema>;
export function getProviderRequirements(plan: Plan) {
  // In Terraform one can implicitly define the provider by using resources of that type
  const explicitProviders = Object.keys(plan.provider || {});
  const implicitProviders = Object.keys({ ...plan.resource, ...plan.data })
    .filter((type) => type !== "terraform_remote_state")
    .map((type) => type.split("_")[0]);

  const providerRequirements = Array.from(
    new Set([...explicitProviders, ...implicitProviders])
  ).reduce(
    (carry, req) => ({ ...carry, [req]: "*" }),
    {} as Record<string, string>
  );

  plan.terraform?.forEach(({ required_providers }) =>
    (required_providers || []).forEach((providerBlock) =>
      Object.entries(providerBlock).forEach(([key, value]) => {
        let name, version;
        if (typeof value === "string") {
          name = key;
          version = value;
        } else {
          name = value.source;
          version = value.version;
        }

        if (!name) {
          return;
        }
        // implicitly only the last part of the path is used (e.g. docker for kreuzwerker/docker)
        const parts = name.split("/");
        if (parts.length > 1) {
          delete providerRequirements[parts.pop() || ""];
        }
        providerRequirements[name] = version || "*";
      })
    )
  );

  return providerRequirements;
}
