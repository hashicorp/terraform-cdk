// Copyright (c) HashiCorp, Inc
// Licensed under the Mozilla Public License 2.0
import { Construct } from "constructs";
import { App, TerraformStack, Testing, LocalBackend } from "cdktf";
import * as NullProvider from "./.gen/providers/null";

export class HelloTerra extends TerraformStack {
  constructor(scope: Construct, id: string) {
    super(scope, id);
    new LocalBackend(this, {
      path: "terraform.tfstate",
    });

    new NullProvider.NullProvider(this, "null", {});

    new NullProvider.Resource(this, "test-Foo_Bar", {
      provisioners: [
        {
          type: "local-exec",
          command: `echo "hello deploy"`,
        },
      ],
    });
  }
}

const app = Testing.stubVersion(new App({ stackTraces: false }));
new HelloTerra(app, "hello-deploy");
app.synth();
