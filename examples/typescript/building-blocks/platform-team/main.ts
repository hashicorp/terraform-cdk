import { Construct } from "constructs";
import { App, TerraformStack } from "cdktf";
import * as l1 from "../l1";

class CentralInfrastructure extends TerraformStack {
  constructor(scope: Construct, ns: string) {
    super(scope, ns);

    new l1.KubernetesClusterL1(this, "k8s", {});
  }
}

const app = new App();
new CentralInfrastructure(app, "central-infrastructure");
app.synth();
