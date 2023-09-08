// Copyright (c) HashiCorp, Inc
// SPDX-License-Identifier: MPL-2.0
import { Construct } from "constructs";
import { App, TerraformStack } from "cdktf";
import { ImportableResource } from "cdktf";
import { RandomProvider } from "./.gen/providers/random/provider";
import { Integer } from "./.gen/providers/random/integer";

class StackWithImport extends TerraformStack {
  constructor(scope: Construct, ns: string) {
    super(scope, ns);

    const integerId = "random-integer-import-from";

    new RandomProvider(this, "random", {});

    Integer.import(this, "random-integer-import-to", integerId);
  }
}

const app = new App();
new StackWithImport(app, "ts-import-to");
app.synth();
