// Copyright (c) HashiCorp, Inc
// SPDX-License-Identifier: MPL-2.0
import { Construct } from "constructs";
import { App, TerraformStack } from "cdktf";
import { RandomProvider } from "./.gen/providers/random/provider";
import { Integer } from "./.gen/providers/random/integer";

class StackWithImport extends TerraformStack {
  constructor(scope: Construct, ns: string) {
    super(scope, ns);

    new RandomProvider(this, "random", {});

    new Integer(this, "random-integer-import-from", {
      max: 100,
      min: 1,
    });
  }
}

const app = new App();
new StackWithImport(app, "ts-import-from");
app.synth();
