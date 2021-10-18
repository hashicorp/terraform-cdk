import * as z from "zod";
import { ZodRawShape } from "zod/lib/src/types/base";

const tfObject = <T extends ZodRawShape>(config: T) =>
  z.array(z.object(config).partial());

const outputConfig = tfObject({
  value: z.any(),
  description: z.string().optional(),
  sensitive: z.boolean().optional(),
  depends_on: z.string().optional(),
});
export type Output = z.infer<typeof outputConfig>;

const variableConfig = tfObject({
  type: z.string(),
  default: z.any(),
  description: z.string(),
  sensitive: z.boolean(),
});
export type Variable = z.infer<typeof variableConfig>;

const providerConfig = z.array(z.record(z.any()));
export type Provider = z.infer<typeof providerConfig>;

const moduleConfig = z.array(z.object({ source: z.string() }).nonstrict());
export type Module = z.infer<typeof moduleConfig>;

const resourceConfig = z.array(z.record(z.any()));
export type Resource = z.infer<typeof resourceConfig>;
export type Data = Resource;

const providerSpecification = z.union([
  z.object({ source: z.string(), version: z.string() }).partial(),
  z.string(),
]);

const terraformConfig = z
  .object({
    required_version: z.string(),
    required_providers: z.array(z.record(providerSpecification)),
    backend: z.record(z.array(z.record(z.any()))),
  })
  .partial();
export type TerraformConfig = z.infer<typeof terraformConfig>;

export const schema = z
  .object({
    terraform: z.array(terraformConfig),
    locals: z.array(z.record(z.any())),
    variable: z.record(variableConfig),
    output: z.record(outputConfig),
    provider: z.record(providerConfig),
    module: z.record(moduleConfig),
    resource: z.record(z.record(resourceConfig)),
    data: z.record(z.record(resourceConfig)),
  })
  .partial();
