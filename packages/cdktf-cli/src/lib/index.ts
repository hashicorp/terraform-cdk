// Copyright (c) HashiCorp, Inc
// SPDX-License-Identifier: MPL-2.0
// This is the programmatic entrypoint that the CLI uses.
// While this is the closest we have to a programmatic API, please understand that the interfaces in this file are not stable.
// Convert is not included here since it's published independently as @cdktf/hcl2cdk.
/* eslint-disable @typescript-eslint/no-non-null-assertion */

import { Language } from "@cdktf/provider-generator";
export { init, Project, InitArgs } from "./init";
export { get, GetStatus } from "./get";
import { SynthesizedStack } from "./synth-stack";

export { SynthesizedStack, Language };
export { CdktfProject, ProjectUpdate } from "./cdktf-project";
export { watch, State as WatchState } from "./watch";
