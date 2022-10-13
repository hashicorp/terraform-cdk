// Copyright (c) HashiCorp, Inc
// SPDX-License-Identifier: MPL-2.0
import { Construct } from "constructs";
import { App, TerraformStack, Testing } from "cdktf";
import * as NullProvider from "./.gen/providers/null";
// Reference import here

export class UsingAllProviders extends TerraformStack {
  constructor(scope: Construct, id: string) {
    super(scope, id);
    new NullProvider.provider.NullProvider(this, "null", {});

    new NullProvider.resource.Resource(this, "test", {
      provisioners: [
        {
          type: "local-exec",
          command: `echo "hello deploy"`,
        },
      ],
    });

    [provider];
  }
}

const app = Testing.stubVersion(new App({}));
new UsingAllProviders(app, "using-all-providers");
app.synth();
