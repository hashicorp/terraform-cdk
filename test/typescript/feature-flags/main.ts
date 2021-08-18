import { Construct } from "constructs";
import { App, TerraformStack, Testing } from "cdktf";
import * as NullProvider from "./.gen/providers/null";

export class HelloTerra extends TerraformStack {
  constructor(scope: Construct, id: string) {
    super(scope, id);

    new NullProvider.NullProvider(this, "null", {});

    const nullResouce = new NullProvider.Resource(this, "test-Foo_Bar", {});

    nullResouce.addOverride("provisioner", [
      {
        "local-exec": {
          command: `echo "hello deploy"`,
        },
      },
    ]);
  }
}

const app = Testing.stubVersion(new App({ stackTraces: false }));
new HelloTerra(app, "hello-deploy");
app.synth();
