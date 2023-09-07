// Copyright (c) HashiCorp, Inc
// SPDX-License-Identifier: MPL-2.0
import { ProviderSchema } from "@cdktf/commons";
import { schema, SchemaBuilder as S } from "./builder";

const required_attribute_resource = new S()
  .addAllPrimitiveTypes({ required: true, computed: false })
  .addAllPrimitiveListTypes({ required: true, computed: false })
  .build();

const optional_attribute_resource = new S()
  .addAllPrimitiveTypes({ required: false, computed: false })
  .addAllPrimitiveListTypes({ required: false, computed: false })
  .build();

const optional_computed_attribute_resource = new S()
  .addAllPrimitiveTypes({ required: false, computed: true })
  .addAllPrimitiveListTypes({ required: false, computed: true })
  .build();

const list_block_resource = new S()
  .listBlock({
    name: "opt",
    block: new S().addAllPrimitivePermutations().asBlock(),
    minItems: 0,
    maxItems: 42,
  })
  .listBlock({
    name: "req",
    block: new S().addAllPrimitivePermutations().asBlock(),
    minItems: 1,
    maxItems: 42,
  })
  .listBlock({
    name: "singleopt",
    block: new S().addAllPrimitivePermutations().asBlock(),
    minItems: 0,
    maxItems: 1,
  })
  .listBlock({
    name: "singlereq",
    block: new S().addAllPrimitivePermutations().asBlock(),
    minItems: 1,
    maxItems: 1,
  })
  .listBlock({
    name: "singleComputedBlock",
    block: new S()
      .attribute({
        computed: true,
        name: "computed",
        type: "string",
        required: false,
        optional: false,
      })
      .attribute({
        computed: false,
        name: "configured",
        type: "string",
        required: false,
      })
      .asBlock(),
    minItems: 0,
    maxItems: 1,
  })
  .attribute({
    name: "computedListOfObject",
    type: [
      "list",
      [
        "object",
        {
          str: "string",
        },
      ],
    ],
    computed: true,
    optional: false,
  })
  .attribute({
    name: "computedListOfMapOfObject",
    type: [
      "list",
      [
        "map",
        [
          "object",
          {
            str: "string",
            other: "string",
          },
        ],
      ],
    ],
    computed: true,
    optional: false,
  })
  .build();

const map_list_resource = new S()
  .attribute({
    name: "mapListOfObject",
    type: [
      "map",
      [
        "list",
        [
          "object",
          {
            hello: "string",
          },
        ],
      ],
    ],
    computed: false,
    optional: false,
  })
  .build();

const map_resource = new S()
  .attribute({
    name: "optMap",
    type: ["map", "string"],
    required: false,
    computed: false,
  })
  .attribute({
    name: "reqMap",
    type: ["map", "bool"],
    required: true,
    computed: false,
  })
  .attribute({
    name: "computedMap",
    type: ["map", "number"],
    required: false,
    computed: true,
  })
  .build();

const set_block_resource = new S()
  .setBlock({
    name: "set",
    block: new S().addAllPrimitivePermutations().asBlock(),
  })
  .build();

export const edgeSchema: ProviderSchema = schema({
  name: "edge",
  provider: new S().addAllPrimitivePermutations().build(),
  resources: {
    required_attribute_resource,
    optional_attribute_resource,
    optional_computed_attribute_resource,
    list_block_resource,
    map_resource,
    set_block_resource,
    map_list_resource,
  },
  dataSources: {},
});
