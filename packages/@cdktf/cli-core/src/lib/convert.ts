/**
 * Copyright (c) HashiCorp, Inc.
 * SPDX-License-Identifier: MPL-2.0
 */

import * as hcl2cdk from "@cdktf/hcl2cdk";
import { CdktfConfig } from "./cdktf-config";
import {
  ConstructsMakerProviderTarget,
  TerraformProviderConstraint,
  readSchema,
} from "@cdktf/provider-generator";
import { Errors, LANGUAGES } from "@cdktf/commons";

export async function convertConfigurationFile(configuration: string) {
  const cfg = CdktfConfig.read(process.cwd()); // TODO: make this the project directory instead of cwd
  const targets = cfg.terraformProviders.map((constraint) =>
    ConstructsMakerProviderTarget.from(
      new TerraformProviderConstraint(constraint),
      LANGUAGES[0]
    )
  );
  const { providerSchema } = await readSchema(targets);
  if (!providerSchema) {
    throw Errors.Internal("Could not fetch provider schema");
  }

  const { all } = await hcl2cdk.convert(configuration, {
    providerSchema,
    language: cfg.language,
    codeContainer: "constructs.Construct",
  });

  return all;
}
