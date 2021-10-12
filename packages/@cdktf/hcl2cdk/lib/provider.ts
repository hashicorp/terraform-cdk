import { ProviderSchema, BlockType } from "@cdktf/provider-generator";

type ExtendedBlockType = BlockType & { max_items?: number };
export function getBlockTypeAtPath(
  schema: ProviderSchema,
  path: string
): ExtendedBlockType | null {
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
  const fullProviderName = Object.keys(schema?.provider_schemas || {}).find(
    (name) => name.endsWith(providerName)
  );
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

  const resources = isDataSource
    ? provider.data_source_schemas
    : provider.resource_schemas;

  let resource = resources[fullResourceName];
  if (!resource) {
    // Could not find resource
    return null;
  }

  if (parts.length === 0) {
    // No property specified
    return null;
  }

  // We don't care for
  let currentSchema: BlockType | typeof resource = resource;
  do {
    const part = parts.shift() as string;
    // console.log("Doing part", part);
    if (
      !currentSchema.block.block_types ||
      !currentSchema.block.block_types.hasOwnProperty(part)
    ) {
      // console.log("didnt find it");
      // Found no block property with this name, there could be an attribute, but we don't care at this point
      return null;
    }

    currentSchema = currentSchema.block.block_types[part];
    // console.log("New schema", currentSchema);
  } while (parts.length > 0);

  return currentSchema;
}
