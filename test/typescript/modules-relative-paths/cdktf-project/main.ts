// Copyright (c) HashiCorp, Inc
// SPDX-License-Identifier: MPL-2.0
import { Construct } from "constructs";
import { App, TerraformStack, Testing } from "cdktf";
import { Constants } from './.gen/modules/constants';
import { Register } from './.gen/modules/register';

export class HelloTerra extends TerraformStack {
  constructor(scope: Construct, id: string) {
    super(scope, id);

    new Constants(this, "constants", {});
    new Register(this, "register", {});
  }
}

const app = Testing.stubVersion(new App({ stackTraces: false }));
new HelloTerra(app, "modules-relative-paths");
app.synth();
