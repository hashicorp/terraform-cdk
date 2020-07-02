import { Construct } from "constructs";
import { App, TerraformStack, Testing } from "cdktf";
import * as NullProvider from "./.gen/providers/null";
import * as Aws from "./.gen/providers/aws";
import * as Azure from "./.gen/providers/azurerm";
import * as Google from "./.gen/providers/google";
import * as Kubernetes from "./.gen/providers/kubernetes";
// The following providers still have bugs
// - https://github.com/hashicorp/terraform-cdk/issues/125
// - https://github.com/hashicorp/terraform-cdk/issues/124
//
// import * as Nomad from "./.gen/providers/nomad";
// import * as Vault from "./.gen/providers/vault";
// import * as Consul from "./.gen/providers/consul";

export class HelloTerra extends TerraformStack {
  constructor(scope: Construct, id: string) {
    super(scope, id);

    const nullResouce = new NullProvider.Resource(this, "test", {});

    nullResouce.addOverride("provisioner", [
      {
        "local-exec": {
          command: `echo "hello deploy"`,
        },
      },
    ]);

    [Aws, Azure, Google, Kubernetes];
  }
}

const app = Testing.stubVersion(new App({}));
new HelloTerra(app, "hello-deploy");
app.synth();
