import * as fs from "fs-extra";
import * as path from "path";
import { exec, withTempDir } from "../../util";
import { ModuleSchema, Input } from "./module-schema";
import { ConstructsMakerTarget } from "../constructs-maker";
import { convertFiles } from "@cdktf/hcl2json";
import { Errors } from "../../errors";

const terraformBinaryName = process.env.TERRAFORM_BINARY_NAME || "terraform";

export interface ProviderSchema {
  format_version: "1.0";
  provider_schemas?: { [type: string]: Provider };
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

export interface Attribute {
  type: AttributeType;
  description?: string;
  required?: boolean;
  optional?: boolean;
  computed?: boolean;
  sensitive?: boolean;
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

interface ModuleIndexItem {
  Key: string;
  Source: string;
  Dir: string;
  Version?: string;
}
interface ModuleIndex {
  Modules: ModuleIndexItem[];
}

const transformVariables = (variables: any) => {
  const result: Input[] = [];

  if (!variables) return result;

  for (const name of Object.keys(variables)) {
    const variable = variables[name][0];
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
      const output = outputs[name][0];

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
    throw Errors.Internal(
      "get",
      `Modules were not generated properly - couldn't find ${fileName}`,
      { fileName }
    );
  }

  const moduleIndex = JSON.parse(
    fs.readFileSync(fileName, "utf-8")
  ) as ModuleIndex;

  for (const mod of modules) {
    const m = moduleIndex.Modules.find((other) => mod === other.Key);

    if (!m) {
      throw Errors.Internal("get", `Couldn't find ${m}`, { mod });
    }

    const parsed = await convertFiles(path.join(workingDirectory, m.Dir));

    if (!parsed) {
      throw Errors.Internal(
        "get",
        `Modules were not generated properly - couldn't parse ${m.Dir}`,
        { mod }
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

export async function readSchema(targets: ConstructsMakerTarget[]) {
  const config: TerraformConfig = {
    terraform: {},
  };

  for (const target of targets) {
    if (target.isModule) {
      if (!config.module) config.module = {};
      const source = (target.constraint as any).localSource || target.source;
      config.module[target.moduleKey] = { source: source };
      if (target.version) {
        config.module[target.moduleKey]["version"] = target.version;
      }
    } else {
      if (!config.provider) config.provider = {};

      if (!config.terraform.required_providers) {
        config.terraform.required_providers = {};
      }
      config.provider[target.name] = {};
      config.terraform.required_providers[target.name] = {
        version: target.version,
        source: target.source,
      };
    }
  }
  let providerSchema: ProviderSchema = { format_version: "1.0" };
  let moduleSchema: Record<string, ModuleSchema> = {};

  await withTempDir("fetchSchema", async () => {
    const outdir = process.cwd();
    const filePath = path.join(outdir, "main.tf.json");
    await fs.writeFile(filePath, JSON.stringify(config));

    await exec(terraformBinaryName, ["init"], { cwd: outdir });
    if (config.provider) {
      providerSchema = JSON.parse(
        await exec(terraformBinaryName, ["providers", "schema", "-json"], {
          cwd: outdir,
        })
      ) as ProviderSchema;
    }
    if (config.module) {
      moduleSchema = await harvestModuleSchema(
        outdir,
        Object.keys(config.module)
      );
    }
  });

  return {
    providerSchema,
    moduleSchema,
  };
}
