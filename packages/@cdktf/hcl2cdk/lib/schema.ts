import * as z from "zod";

const outputConfig = z.array(
  z.object({
    value: z.string(),
    description: z.string().optional(),
    sensitive: z.boolean().optional(),
  })
);

export type Output = z.infer<typeof outputConfig>;

export const schema = z.object({
  locals: z.array(z.any()).optional(),
  variable: z.record(z.any()).optional(),
  output: z.record(outputConfig).optional(),
});
