// Copyright (c) HashiCorp, Inc
// SPDX-License-Identifier: MPL-2.0

import {
  BlockType as BlockTypeJson,
  Attribute as AttributeTypeJson,
  Provider as ProviderJson,
} from "../provider-schema";

// This is going to be derived from the terraform schema
export type Provider = {
  provider: {
    attributes: {
      // TODO: Figure out if we want to process the names read from schema to make
      // them more ingestible by Typescript without problems
      // or we want to do that later in the emitter e.g. attribute called 'node'
      // should be 'nodeAttribute' in Typescript.
      [name: string]: Attribute;
    };
  };
};

export type Providers = {
  [fqpn: string]: Provider;
};

export type Attribute = ReadonlyAttribute | SettableAttribute;

export type PrimitiveAttributeType = "string" | "number" | "bool";
export type ListAttributeType = {
  __type: "list";
  type: AttributeType;
};
export type MapAttributeType = {
  __type: "map";
  valueType: AttributeType;
};
export type ObjectAttributeType = {
  __type: "object";
  attributes: { [name: string]: Attribute };
};
export type DynamicAttributeType = {
  __type: "dynamic";
};

export type AttributeType =
  | PrimitiveAttributeType
  | ListAttributeType
  | MapAttributeType
  | ObjectAttributeType
  | DynamicAttributeType;

export type BaseAttribute = {
  description?: string; // can be markdown or plain
  type: AttributeType;
};

export type ReadonlyAttribute = BaseAttribute & {
  __type: "readonly";
};

export type SettableAttribute = BaseAttribute & {
  __type: "settable";
  optionality: boolean;
  // storageClass: string; TODO: do we really need it? Can't it be inferred from the result?
};

export type Block = {};

export function parse(providerSchema: ProviderJson): Provider {
  const provider: Provider = {
    provider: parseProvider(providerSchema.provider),
  };
  return provider;
}

function parseProvider(
  provider: ProviderJson["provider"]
): Provider["provider"] {
  const result: Provider["provider"] = {
    attributes: {},
  };
  for (const attributeName in provider.block.attributes) {
    result.attributes[attributeName] = parseAttribute(
      provider.block.attributes[attributeName]
    );
  }
  for (const blockName in provider.block.block_types) {
    result.attributes[blockName] = parseBlock(
      provider.block.block_types[blockName]
    );
  }
  return result;
}

function parseAttributeType(type: AttributeTypeJson["type"]): AttributeType {
  if (type == "string" || type == "number" || type == "bool") {
    return type;
  }

  if (type === "dynamic") {
    return {
      __type: "dynamic",
    };
  }

  if (Array.isArray(type)) {
    if (type[0] === "list" || type[0] === "set") {
      return {
        __type: "list",
        type: parseAttributeType(type[1]),
      };
    }
    if (type[0] === "map") {
      return {
        __type: "map",
        valueType: parseAttributeType(type[1]),
      };
    }
  }

  throw new Error(
    `Attribute type not implemented yet Attribute=${JSON.stringify(
      type,
      null,
      2
    )}`
  );
}

function parseAttribute(arg: AttributeTypeJson): Attribute {
  return {
    __type: "settable",
    type: parseAttributeType(arg.type),
    optionality: arg.optional || false,
    description: arg.description,
  };
}

function parseBlock(arg: BlockTypeJson): Attribute {
  if (arg.nesting_mode === "set" || arg.nesting_mode === "list") {
    const attributes: { [name: string]: Attribute } = {};
    for (const attributeName in arg.block.attributes) {
      attributes[attributeName] = parseAttribute(
        arg.block.attributes[attributeName]
      );
    }
    for (const attributeName in arg.block.block_types) {
      attributes[attributeName] = parseBlock(
        arg.block.block_types[attributeName]
      );
    }

    const objectType: ObjectAttributeType = {
      __type: "object",
      attributes: attributes,
    };

    // list of class
    return {
      __type: "settable",
      type: {
        __type: "list",
        type: objectType,
      },
      optionality: (arg.min_items || 0) > 0,
    };
  }

  throw new Error(
    `Block type not implemented yet block=${JSON.stringify(arg, null, 2)}`
  );
}
