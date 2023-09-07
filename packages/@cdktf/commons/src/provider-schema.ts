/**
 * Copyright (c) HashiCorp, Inc.
 * SPDX-License-Identifier: MPL-2.0
 */

import { ModuleSchema } from "./module-schema";

export interface ProviderSchema {
  /*
    0.1 is e.g. returned by Terraform 0.14
    0.2 is e.g. returned by Terraform 1.0 (0.2 added support for nested_type / plugin protocol v6)
    */
  format_version?: "0.1" | "0.2";
  provider_schemas?: { [fqpn: string]: Provider };
  provider_versions?: { [fqpn: string]: string };
}

export interface Provider {
  provider: Schema;
  resource_schemas: { [type: string]: Schema };
  data_source_schemas: { [type: string]: Schema };
}

export interface Schema {
  version: number;
  block: Block;
}

type AttributeNestedTypeNesting = "invalid" | "single" | "list" | "set" | "map";

/**
 * In tfplugin6.0.proto this as called Object to avoid
 * collisions with the native JavaScript Object we call it
 * AttributeNestedType here
 */
export interface AttributeNestedType {
  attributes: { [name: string]: Attribute };
  nesting_mode: AttributeNestedTypeNesting;
}

export function isAttributeNestedType(
  type: AttributeType | AttributeNestedType
): type is AttributeNestedType {
  return (
    typeof type === "object" &&
    !Array.isArray(type) &&
    typeof type.nesting_mode === "string" &&
    typeof type.attributes === "object"
  );
}

interface BaseAttribute {
  type?: AttributeType;
  nested_type?: AttributeNestedType;
  description?: string;
  required?: boolean;
  optional?: boolean;
  computed?: boolean;
  sensitive?: boolean;
}

interface NestedTypeAttribute extends BaseAttribute {
  type?: never;
  nested_type: AttributeNestedType;
}
interface TypedAttribute extends BaseAttribute {
  type: AttributeType;
  nested_type?: never;
}

// to support either type or nested_type being set
export type Attribute = NestedTypeAttribute | TypedAttribute;

export function isNestedTypeAttribute(
  att: Attribute
): att is NestedTypeAttribute {
  return (
    typeof att.nested_type !== "undefined" &&
    isAttributeNestedType(att.nested_type)
  );
}

export type AttributeType =
  | "string"
  | "bool"
  | "number"
  | "dynamic"
  | ["set", AttributeType]
  | ["map", AttributeType]
  | ["list", AttributeType]
  | ["object", { [attribute: string]: AttributeType }];

export type BlockType =
  | {
      nesting_mode: "single" | "map";
      block: Block;
    }
  | {
      nesting_mode: "list" | "set";
      block: Block;
      min_items?: number;
      max_items?: number;
    };

export interface Block {
  attributes: { [name: string]: Attribute };
  block_types: { [name: string]: BlockType };
}

export interface TerraformSchema {
  providers: ProviderSchema;
  modules: ModuleSchema;
}

export interface VersionSchema {
  provider_selections: { [fqn: string]: string };
  // other properties aren't used
}

interface ModuleIndexItem {
  Key: string;
  Source: string;
  Dir: string;
  Version?: string;
}
export interface ModuleIndex {
  Modules: ModuleIndexItem[];
}
