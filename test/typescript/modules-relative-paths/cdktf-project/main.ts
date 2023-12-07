// Copyright (c) HashiCorp, Inc
// SPDX-License-Identifier: MPL-2.0
import { Construct } from "constructs";
import { App, TerraformStack, Testing, LocalBackend } from "cdktf";

export class HelloTerra extends TerraformStack {
  constructor(scope: Construct, id: string) {
    super(scope, id);

    // TODO: put code here
  }
}

const app = Testing.stubVersion(new App({ stackTraces: false }));
new HelloTerra(app, "modules-relative-paths");
app.synth();
