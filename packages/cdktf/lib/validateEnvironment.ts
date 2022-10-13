// Copyright (c) HashiCorp, Inc
// SPDX-License-Identifier: MPL-2.0
import { Construct } from "constructs";

/**
 * fails early if the environment contains e.g. invalid version combinations
 */
export function validateEnvironment() {
  validateConstructsIsV10();
}

/**
 * fails early if the environment contains e.g. invalid version combinations
 * for constructs
 */
function validateConstructsIsV10() {
  const construct = new Construct(null as any, "test");
  // construct.node was added in v10
  if (typeof construct.node === "undefined") {
    throw new Error(`Version mismatch! The constructs depedency appears to be lower than v10 which is required as of cdktf version 0.6.
    Your current constructs version is missing Construct.node which was added in v10.
    Please update your constructs dependency: https://cdk.tf/upgrade-constructs-v10
`);
  }
}
