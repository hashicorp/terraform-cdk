// Copyright (c) HashiCorp, Inc
// SPDX-License-Identifier: MPL-2.0
import { Construct } from "constructs";
import { App, TerraformStack, Testing } from "cdktf";

export class HelloTerra extends TerraformStack {
  constructor(scope: Construct, id: string) {
    super(scope, id);
  }
}

const app = Testing.stubVersion(new App({ stackTraces: false }));
new HelloTerra(app, "dummy");
app.synth();
