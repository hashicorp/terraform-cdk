import { ProviderSchema } from "../../";
import { schema, SchemaBuilder as S } from "./builder";

const required_attribute_resource = new S()
  .addAllPrimitiveTypes({ required: true, computed: false })
  .build();

const optional_attribute_resource = new S()
  .addAllPrimitiveTypes({ required: false, computed: false })
  .build();

const optional_computed_attribute_resource = new S()
  .addAllPrimitiveTypes({ required: false, computed: true })
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
  .build();

export const edgeSchema: ProviderSchema = schema({
  name: "edge",
  provider: new S().addAllPrimitivePermutations().build(),
  resources: {
    required_attribute_resource,
    optional_attribute_resource,
    optional_computed_attribute_resource,
    list_block_resource,
  },
  dataSources: {},
});
