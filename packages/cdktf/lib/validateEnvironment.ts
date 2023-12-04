// Copyright (c) HashiCorp, Inc
// SPDX-License-Identifier: MPL-2.0
import { Construct } from "constructs";
import { constructDependencyBelowV10 } from "./errors";

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
    throw constructDependencyBelowV10();
  }
}
