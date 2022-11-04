// Copyright (c) HashiCorp, Inc
// SPDX-License-Identifier: MPL-2.0
// This is the programmatic entrypoint that the CLI uses.
// While this is the closest we have to a programmatic API, please understand that the interfaces in this file are not stable.
// Convert is not included here since it's published independently as @cdktf/hcl2cdk.
/* eslint-disable @typescript-eslint/no-non-null-assertion */

export {
  DependencyManager,
  ProviderConstraint,
} from "./dependencies/dependency-manager";
export { ProviderDependencySpec } from "./cdktf-config";
export { getAllPrebuiltProviders } from "./dependencies/prebuilt-providers";

export { providerAdd } from "./provider-add";

export { TerraformCli } from "./models/terraform-cli";

export { CdktfConfig } from "./cdktf-config";

export {
  askForCrashReportingConsent,
  initializErrorReporting,
} from "./error-reporting";
export { CdktfStack } from "./cdktf-stack";
export { init, Project, InitArgs } from "./init";
export { get, GetStatus } from "./get";
export { SynthesizedStack } from "./synth-stack";
export { CdktfProject, ProjectUpdate } from "./cdktf-project";
export { watch, State as WatchState } from "./watch";
export {
  NestedTerraformOutputs,
  saveOutputs,
  normalizeOutputPath,
} from "./output";
export {
  DeployingResource,
  isTerraformOutput,
  TerraformOutput,
} from "./models/terraform";
