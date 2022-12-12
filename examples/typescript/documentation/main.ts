// Copyright (c) HashiCorp, Inc
// SPDX-License-Identifier: MPL-2.0
import { App } from "cdktf";
import { AspectTaggingStack } from "./aspect-tagging";
import { AspectValidationStack } from "./aspect-validation";
import { AssetsStack } from "./assets";
import { ConstructsStack } from "./constructs";
import { DataSourcesStack } from "./data-sources";
import { FunctionsStack } from "./functions";
import { HCLInteropStack } from "./hcl-interop";

const app = new App();

new AspectTaggingStack(app, "aspect-tagging");
new AspectValidationStack(app, "aspect-validation");
new AssetsStack(app, "assets");
new ConstructsStack(app, "constructs");
new DataSourcesStack(app, "data-sources");
new FunctionsStack(app, "functions");
new HCLInteropStack(app, "hcl-interop");

app.synth();
