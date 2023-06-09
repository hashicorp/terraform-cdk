// Copyright (c) HashiCorp, Inc
// SPDX-License-Identifier: MPL-2.0
import { Construct } from "constructs";
import { App, TerraformStack, Testing, LocalBackend } from "cdktf";
import { OurLocalModule } from "./.gen/modules/our-local-module";

export class StackWithModule extends TerraformStack {
  constructor(scope: Construct, id: string) {
    super(scope, id);
    new LocalBackend(this, {
      path: "terraform.tfstate",
    });

    new OurLocalModule(this, "local-module", {
      set: ["test", "sets"],
    });
  }
}

const app = Testing.stubVersion(new App({ stackTraces: false }));
new StackWithModule(app, "repeated-init-stack");
app.synth();
