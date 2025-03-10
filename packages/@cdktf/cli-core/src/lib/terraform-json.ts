// Copyright (c) HashiCorp, Inc
// SPDX-License-Identifier: MPL-2.0
import * as z from "zod";

const remote = z
  .object({
    organization: z.string(),
    hostname: z.string().optional(),
    token: z.string().optional(),
    workspaces: z.object({
      name: z.string().optional(),
      prefix: z.string().optional(),
    }),
  })
  .deepPartial();

export const terraformJsonSchema = z
  .object({
    "//": z
      .object({
        metadata: z
          .object({
            version: z.string(),
            stackName: z.string(),
            backend: z.string(),
          })
          .nonstrict(),
        outputs: z.record(z.any()),
      })
      .nonstrict(),
    terraform: z.object({
      backend: z
        .object({
          // All other backends are here as well, but we don't read them right now
          remote,
        })
        .nonstrict(),
      cloud: z
        .object({
          organization: z.string(),
          hostname: z.string().optional(),
          token: z.string().optional(),
          workspaces: z.union([
            z.object({ name: z.string() }),
            z.object({ tags: z.array(z.string()) }),
          ]),
        })
        .nonstrict(),
      required_providers: z.record(
        z.object({ source: z.string(), version: z.string() }).nonstrict(),
      ),
      required_version: z.string(),
    }),
    data: z.record(z.any()),
    provider: z.record(z.any()),
    resource: z.record(z.any()),
  })
  .deepPartial()
  .nonstrict();

export type TerraformStack = z.infer<typeof terraformJsonSchema>;
export type TerraformJsonConfigBackendRemote = z.infer<typeof remote>;
