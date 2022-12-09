// Copyright (c) HashiCorp, Inc
// SPDX-License-Identifier: MPL-2.0
import { App } from "cdktf";
import { AspectTaggingStack } from "./aspect-tagging";
import { AspectValidationStack } from "./aspect-validation";
import { AssetsStack } from "./assets";

const app = new App();

new AspectTaggingStack(app, "aspect-tagging");
new AspectValidationStack(app, "aspect-validation");
new AssetsStack(app, "assets");

app.synth();
