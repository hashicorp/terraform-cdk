// Copyright (c) HashiCorp, Inc
// SPDX-License-Identifier: MPL-2.0
import { validateEnvironment } from "./validateEnvironment";
validateEnvironment();

export * from "./tokens";
export * from "./terraform-stack";
export * from "./terraform-element";
export * from "./terraform-module";
export * from "./terraform-provider";
export * from "./terraform-resource";
export * from "./terraform-data-source";
export * from "./terraform-output";
export * from "./complex-computed-list";
export * from "./resource";
export * from "./testing";
export * as testingMatchers from "./testing/matchers";
export * from "./app";
export * from "./terraform-backend";
export * from "./backends";
export * from "./terraform-remote-state";
export * from "./terraform-local";
export * from "./terraform-variable";
export * from "./terraform-hcl-module";
export * from "./runtime";
export * from "./terraform-dependable";
export * from "./manifest";
export * from "./terraform-asset";
export * from "./synthesize";
export * from "./annotations";
export * from "./aspect";
export * from "./terraform-functions";
export * from "./terraform-operators";
export * from "./tfExpression";
export * from "./terraform-addressable";
export * from "./terraform-iterator";
export * from "./terraform-provisioner";
export * from "./terraform-conditions";
export * from "./terraform-count";
export * from "./importable-resource";
export * from "./terraform-resource-targets";
export * from "./upgrade-id-aspect";
// required for JSII because Fn extends from it
export * from "./functions/terraform-functions.generated";
