// Copyright (c) HashiCorp, Inc
// SPDX-License-Identifier: MPL-2.0
import * as z from "zod";
import { ProviderSchema, BlockType, Attribute } from "@cdktf/commons";
import { schema } from "./schema";

export { BlockType, Attribute };

export function getFullProviderName(
  schema: ProviderSchema,
  providerName: string
) {
  return Object.keys(schema.provider_schemas || {}).find((name) =>
    name.endsWith(providerName)
  );
}

type Plan = z.infer<typeof schema>;
export function getProviderRequirements(plan: Plan) {
  // In Terraform one can implicitly define the provider by using resources of that type
  const explicitProviders = Object.keys(plan.provider || {});
  const implicitProviders = Object.keys({ ...plan.resource, ...plan.data })
    .filter((type) => type !== "terraform_remote_state")
    .filter((type) => type !== "terraform_data")
    .map((type) => type.split("_")[0]);

  const providerRequirements = Array.from(
    new Set([...explicitProviders, ...implicitProviders])
  ).reduce(
    (carry, req) => ({ ...carry, [req]: "*" }),
    {} as Record<string, string>
  );

  plan.terraform?.forEach(({ required_providers }) =>
    (required_providers || []).forEach((providerBlock) =>
      Object.entries(providerBlock).forEach(([key, value]) => {
        let name, version;
        if (typeof value === "string") {
          name = key;
          version = value;
        } else {
          name = value.source;
          version = value.version;
        }

        if (!name) {
          return;
        }
        // implicitly only the last part of the path is used (e.g. docker for kreuzwerker/docker)
        const parts = name.split("/");
        if (parts.length > 1) {
          delete providerRequirements[parts.pop() || ""];
        }
        providerRequirements[name] = version || "*";
      })
    )
  );

  return providerRequirements;
}
