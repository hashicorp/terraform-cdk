import * as z from "zod";

const outputConfig = z.array(
  z.object({
    value: z.string(),
    description: z.string().optional(),
    sensitive: z.boolean().optional(),
    depends_on: z.string().optional(),
  })
);
export type Output = z.infer<typeof outputConfig>;

const variableConfig = z.array(
  z.object({
    type: z.string().optional(),
    default: z.any().optional(),
    description: z.string().optional(),
    sensitive: z.boolean().optional(),
  })
);
export type Variable = z.infer<typeof variableConfig>;

export const schema = z.object({
  locals: z.array(z.any()).optional(),
  variable: z.record(variableConfig).optional(),
  output: z.record(outputConfig).optional(),
});
