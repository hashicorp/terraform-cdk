import { ProviderSchema, Schema, AttributeType, Block } from "../../";

type ResourceSchema = { [type: string]: Schema };
export function schema(
  name: string,
  provider: Schema,
  resources: ResourceSchema = {},
  dataSources: ResourceSchema = {}
): ProviderSchema {
  return {
    format_version: "1.0",
    provider_schemas: {
      [`registry.terraform.io/cdktf/${name}`]: {
        provider: provider,
        resource_schemas: resources,
        data_source_schemas: dataSources,
      },
    },
  };
}

export class SchemaBuilder {
  private schema: Schema;

  constructor() {
    this.schema = {
      version: 0,
      block: {
        attributes: {},
        block_types: {},
      },
    };
  }

  public attribute(
    name: string,
    type: AttributeType,
    required: boolean = false,
    computed: boolean = false
  ): SchemaBuilder {
    this.schema.block.attributes[name] = {
      type,
      optional: !required,
      computed,
      required,
    };
    return this;
  }

  public listBlock(
    name: string,
    block: Block,
    minItems: number,
    maxItems: number
  ): SchemaBuilder {
    this.schema.block.block_types[name] = {
      nesting_mode: "list",
      block,
      min_items: minItems,
      max_items: maxItems,
    };
    return this;
  }

  public mapBlock(name: string, block: Block): SchemaBuilder {
    this.schema.block.block_types[name] = { nesting_mode: "map", block };
    return this;
  }

  public setBlock(name: string, block: Block): SchemaBuilder {
    this.schema.block.block_types[name] = { nesting_mode: "set", block };
    return this;
  }
  public singleBlock(name: string, block: Block): SchemaBuilder {
    this.schema.block.block_types[name] = { nesting_mode: "single", block };
    return this;
  }

  public build(): Schema {
    return this.schema;
  }

  public asBlock(): Block {
    return this.schema.block;
  }

  public addAllPrimitiveTypes(
    required: boolean,
    computed: boolean,
    prefix = ""
  ): SchemaBuilder {
    this.attribute(prefix + "str", "string", required, computed)
      .attribute(prefix + "num", "number", required, computed)
      .attribute(prefix + "bool", "bool", required, computed);

    return this;
  }

  public addAllPrimitivePermutations(): SchemaBuilder {
    this.addAllPrimitiveTypes(false, false, "opt")
      .addAllPrimitiveTypes(true, false, "req")
      .addAllPrimitiveTypes(false, true, "computed");
    return this;
  }
}
