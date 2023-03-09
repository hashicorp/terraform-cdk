// Copyright (c) HashiCorp, Inc
// SPDX-License-Identifier: MPL-2.0
import * as fs from "fs-extra";
import * as path from "path";
import { exec, withTempDir } from "../../util";
import { ModuleSchema, Input } from "./module-schema";
import { ConstructsMakerModuleTarget } from "../constructs-maker";
import { convertFiles } from "@cdktf/hcl2json";
import { ConstructsMakerProviderTarget } from "../constructs-maker";

const terraformBinaryName = process.env.TERRAFORM_BINARY_NAME || "terraform";

/**
 * Fully Qualified provider name in the format:
 * like e.g. registry.terraform.io/hashicorp/aws
 */
export type FQPN = string & { __type: "FullyQualifiedProviderName" };
export type ProviderHostname = string & { __type: "ProviderHostname" };
export type ProviderNamespace = string & { __type: "ProviderNamespace" };
export type ProviderName = string & { __type: "ProviderName" };

export const parseFQPN = (f: FQPN) => {
  const [hostname, namespace, name] = f.split("/");
  if (!name) {
    throw new Error(`can't handle ${f}`);
  }
  return { hostname, namespace, name } as {
    hostname: ProviderHostname;
    namespace: ProviderNamespace;
    name: ProviderName;
  };
};

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

interface VersionSchema {
  provider_selections: { [fqn: string]: string };
  // other properties aren't used
}

interface ModuleIndexItem {
  Key: string;
  Source: string;
  Dir: string;
  Version?: string;
}
interface ModuleIndex {
  Modules: ModuleIndexItem[];
}

const unwrapIfArray = <T>(item: T | T[]): T =>
  Array.isArray(item) ? item[0] : item;

const transformVariables = (variables: any) => {
  const result: Input[] = [];

  if (!variables) return result;

  for (const name of Object.keys(variables)) {
    const variable = unwrapIfArray(variables[name]);
    let variableType: string;

    if (
      // eslint-disable-next-line no-prototype-builtins
      variable.hasOwnProperty("type") == false &&
      // eslint-disable-next-line no-prototype-builtins
      variable.hasOwnProperty("default") == true
    ) {
      switch (typeof variable["default"]) {
        case "boolean":
          variableType = "bool";
          break;
        case "number":
          variableType = "number";
          break;
        default:
          variableType = "any";
      }
    } else {
      const matched = (variable["type"] as string)?.match(/\$\{(.*)\}/);
      variableType = matched ? matched[1] : "any";
    }

    const item: Input = {
      name,
      type: variableType,
      description: variable["description"],
      // eslint-disable-next-line no-prototype-builtins
      required: variable.hasOwnProperty("default") == false,
    };

    if (!item.required) {
      item["default"] = variable["default"];
    }

    result.push(item);
  }

  return result;
};

const transformOutputs = (outputs: any) => {
  const result = [];

  if (outputs) {
    for (const name of Object.keys(outputs)) {
      const output = unwrapIfArray(outputs[name]);

      const item: any = {
        name,
        description: output["description"],
      };

      result.push(item);
    }
  }

  return result;
};

const harvestModuleSchema = async (
  workingDirectory: string,
  modules: string[]
): Promise<Record<string, any>> => {
  const fileName = path.join(
    workingDirectory,
    ".terraform",
    "modules",
    "modules.json"
  );
  const result: Record<string, any> = {};

  if (!fs.existsSync(fileName)) {
    throw new Error(
      `Modules were not generated properly - couldn't find ${fileName}`
    );
  }

  const moduleIndex = JSON.parse(
    fs.readFileSync(fileName, "utf-8")
  ) as ModuleIndex;

  for (const mod of modules) {
    const m = moduleIndex.Modules.find((other) => mod === other.Key);

    if (!m) {
      throw new Error(`Couldn't find ${m}`);
    }

    const parsed = await convertFiles(path.join(workingDirectory, m.Dir));

    if (!parsed) {
      throw new Error(
        `Modules were not generated properly - couldn't parse ${m.Dir}`
      );
    }

    const schema: ModuleSchema = {
      inputs: transformVariables(parsed.variable),
      outputs: transformOutputs(parsed.output),
      name: mod,
    };

    result[mod] = schema;
  }

  return result;
};

export interface TerraformConfig {
  provider?: { [name: string]: Record<string, any> };
  terraform: {
    required_providers?: {
      [name: string]: { source?: string; version?: string };
    };
  };
  module?: { [name: string]: { source: string; version?: string } };
}

export async function readProviderSchema(
  target: ConstructsMakerProviderTarget
) {
  const config: TerraformConfig = {
    provider: {},
    terraform: {
      required_providers: {},
    },
  };

  config.provider![target.name] = {};
  config.terraform.required_providers![target.name] = {
    version: target.version,
    source: target.source,
  };

  let providerSchema: ProviderSchema = { format_version: "0.1" };

  await withTempDir("fetchProviderSchema", async () => {
    const outdir = process.cwd();
    const filePath = path.join(outdir, "main.tf.json");
    await fs.writeFile(filePath, JSON.stringify(config));

    await exec(terraformBinaryName, ["init"], { cwd: outdir });
    providerSchema = JSON.parse(
      await exec(terraformBinaryName, ["providers", "schema", "-json"], {
        cwd: outdir,
      })
    ) as ProviderSchema;

    const versionSchema = JSON.parse(
      await exec(terraformBinaryName, ["version", "-json"], {
        cwd: outdir,
      })
    ) as VersionSchema;

    providerSchema.provider_versions = versionSchema.provider_selections;
  });

  return providerSchema;
}

export async function readModuleSchema(target: ConstructsMakerModuleTarget) {
  const config: TerraformConfig = {
    terraform: {},
  };

  if (!config.module) config.module = {};
  const source = (target.constraint as any).localSource || target.source;
  config.module[target.moduleKey] = { source: source };
  if (target.version) {
    config.module[target.moduleKey]["version"] = target.version;
  }

  let moduleSchema: Record<string, ModuleSchema> = {};

  await withTempDir("fetchSchema", async () => {
    const outdir = process.cwd();
    const filePath = path.join(outdir, "main.tf.json");
    await fs.writeFile(filePath, JSON.stringify(config));

    await exec(terraformBinaryName, ["get"], { cwd: outdir });
    if (config.module) {
      moduleSchema = await harvestModuleSchema(
        outdir,
        Object.keys(config.module)
      );
    }
  });

  return moduleSchema;
}
