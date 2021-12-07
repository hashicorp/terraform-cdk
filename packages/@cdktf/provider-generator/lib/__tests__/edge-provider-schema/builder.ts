import { ProviderSchema, Schema, AttributeType, Block } from "../../";

type ResourceSchema = { [type: string]: Schema };
export function schema({
  name,
  provider,
  resources = {},
  dataSources = {},
}: {
  name: string;
  provider: Schema;
  resources: ResourceSchema;
  dataSources: ResourceSchema;
}): ProviderSchema {
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

  public attribute({
    name,
    type,
    required = false,
    computed = false,
  }: {
    name: string;
    type: AttributeType;
    required: boolean;
    computed: boolean;
  }): SchemaBuilder {
    this.schema.block.attributes[name] = {
      type,
      optional: !required,
      computed,
      required,
    };
    return this;
  }

  public listBlock({
    name,
    block,
    minItems,
    maxItems,
  }: {
    name: string;
    block: Block;
    minItems: number;
    maxItems: number;
  }): SchemaBuilder {
    this.schema.block.block_types[name] = {
      nesting_mode: "list",
      block,
      min_items: minItems,
      max_items: maxItems,
    };
    return this;
  }

  public mapBlock({
    name,
    block,
  }: {
    name: string;
    block: Block;
  }): SchemaBuilder {
    this.schema.block.block_types[name] = { nesting_mode: "map", block };
    return this;
  }

  public setBlock({
    name,
    block,
  }: {
    name: string;
    block: Block;
  }): SchemaBuilder {
    this.schema.block.block_types[name] = { nesting_mode: "set", block };
    return this;
  }
  public singleBlock({
    name,
    block,
  }: {
    name: string;
    block: Block;
  }): SchemaBuilder {
    this.schema.block.block_types[name] = { nesting_mode: "single", block };
    return this;
  }

  public build(): Schema {
    return this.schema;
  }

  public asBlock(): Block {
    return this.schema.block;
  }

  public addAllPrimitiveTypes({
    required,
    computed,
    prefix = "",
  }: {
    required: boolean;
    computed: boolean;
    prefix?: string;
  }): SchemaBuilder {
    this.attribute({ name: prefix + "str", type: "string", required, computed })
      .attribute({ name: prefix + "num", type: "number", required, computed })
      .attribute({ name: prefix + "bool", type: "bool", required, computed });

    return this;
  }

  public addAllPrimitivePermutations(): SchemaBuilder {
    this.addAllPrimitiveTypes({
      required: false,
      computed: false,
      prefix: "opt",
    })
      .addAllPrimitiveTypes({ required: true, computed: false, prefix: "req" })
      .addAllPrimitiveTypes({
        required: false,
        computed: true,
        prefix: "computed",
      });
    return this;
  }
}
