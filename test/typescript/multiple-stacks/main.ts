// Copyright (c) HashiCorp, Inc
// SPDX-License-Identifier: MPL-2.0
import { Construct } from "constructs";
import {
  App,
  TerraformStack,
  Testing,
  LocalBackend,
  TerraformOutput,
} from "cdktf";
import * as NullProvider from "./.gen/providers/null";

export class HelloTerra extends TerraformStack {
  constructor(scope: Construct, id: string) {
    super(scope, id);
    new NullProvider.provider.NullProvider(this, "null", {});
    new LocalBackend(this, {
      path: "terraform.tfstate",
    });

    new NullProvider.resource.Resource(this, "test", {
      provisioners: [
        {
          type: "local-exec",
          command: `echo "hello deploy"`,
        },
      ],
    });

    new TerraformOutput(this, "output", {
      staticId: true,
      value: id,
    });
  }
}

const app = Testing.stubVersion(new App({ stackTraces: false }));
new HelloTerra(app, "first");
new HelloTerra(app, "second");
app.synth();
