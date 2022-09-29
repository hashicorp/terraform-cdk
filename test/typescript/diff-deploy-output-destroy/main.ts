// Copyright (c) HashiCorp, Inc
// SPDX-License-Identifier: MPL-2.0
import { Construct } from "constructs";
import { App, TerraformStack, Testing, TerraformOutput } from "cdktf";
import * as NullProvider from "./.gen/providers/null";

export class HelloTerra extends TerraformStack {
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

    new TerraformOutput(this, "output", {
      value: "hello",
    });
    new TerraformOutput(this, "output2", {
      value: "world",
      sensitive: true,
    });
  }
}

const app = Testing.stubVersion(new App({}));
new HelloTerra(app, "hello-deploy");
app.synth();
