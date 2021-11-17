import { ProviderSchema } from "../../";
import { schema, SchemaBuilder as S } from "./builder";

const required_attribute_resource = new S()
  .addAllPrimitiveTypes(true, false)
  .build();

const optional_attribute_resource = new S()
  .addAllPrimitiveTypes(false, false)
  .build();

const optional_computed_attribute_resource = new S()
  .addAllPrimitiveTypes(false, true)
  .build();

const list_block_resource = new S()
  .listBlock("opt", new S().addAllPrimitivePermutations().asBlock(), 0, 42)
  .listBlock("req", new S().addAllPrimitivePermutations().asBlock(), 1, 42)
  .listBlock("singleopt", new S().addAllPrimitivePermutations().asBlock(), 0, 1)
  .listBlock("singlereq", new S().addAllPrimitivePermutations().asBlock(), 1, 1)
  .build();

export const edgeSchema: ProviderSchema = schema(
  "edge",
  new S().addAllPrimitivePermutations().build(),
  {
    required_attribute_resource,
    optional_attribute_resource,
    optional_computed_attribute_resource,
    list_block_resource,
  }
);
