// Copyright (c) HashiCorp, Inc
// SPDX-License-Identifier: MPL-2.0
import { Construct } from "constructs";
import { App, TerraformStack, Testing, TerraformVariable } from "cdktf";
import * as local from "./.gen/providers/local";
import * as path from "path";

export class VariablesStack extends TerraformStack {
  constructor(scope: Construct, id: string) {
    super(scope, id);
    new local.provider.LocalProvider(this, "local", {});

    const explicitlySet = new TerraformVariable(this, "explicitlyset", {
      type: "string",
      nullable: false,
    });

    const explicitly = new TerraformVariable(this, "explicitly", {
      type: "string",
      nullable: false,
    });

    const setthrough = new TerraformVariable(this, "setthrough", {
      type: "string",
      nullable: false,
    });

    const thisExtension = new TerraformVariable(this, "thisextension", {
      type: "string",
      nullable: false,
    });

    new local.file.File(this, "file", {
      filename: path.resolve(__dirname, "output.txt"),
      content: `hello = world
explicitlyset = ${explicitlySet.stringValue}
explicitly = ${explicitly.stringValue}
setthrough = ${setthrough.stringValue}
thisextension = ${thisExtension.stringValue}
      `,
    });
  }
}

const app = Testing.stubVersion(new App({}));
new VariablesStack(app, "stack");
app.synth();
