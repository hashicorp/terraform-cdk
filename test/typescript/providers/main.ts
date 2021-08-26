import { Construct } from "constructs";
import { App, TerraformStack, Testing } from "cdktf";
import * as NullProvider from "./.gen/providers/null";
import * as Aws from "./.gen/providers/aws";
import * as Azure from "./.gen/providers/azurerm";
import * as Google from "./.gen/providers/google";
import * as Kubernetes from "./.gen/providers/kubernetes";
import * as Openstack from "./.gen/providers/openstack";
import * as Nomad from "./.gen/providers/nomad";
import * as Vault from "./.gen/providers/vault";
import * as Consul from "./.gen/providers/consul";
import * as External from "./.gen/providers/external";

export class HelloTerra extends TerraformStack {
  constructor(scope: Construct, id: string) {
    super(scope, id);
    new NullProvider.NullProvider(this, "null", {});

    const nullResouce = new NullProvider.Resource(this, "test", {});

    nullResouce.addOverride("provisioner", [
      {
        "local-exec": {
          command: `echo "hello deploy"`,
        },
      },
    ]);

    [Aws, Azure, Google, Kubernetes, Nomad, Vault, Openstack, Consul, External];
  }
}

const app = Testing.stubVersion(new App({}));
new HelloTerra(app, "hello-deploy");
app.synth();
