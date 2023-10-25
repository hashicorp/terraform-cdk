import { Construct } from "constructs";
import { App, TerraformStack } from "cdktf";
import * as l1 from "../l1";
import { KubernetesAccess } from "../platform-team";

class CentralInfrastructure extends TerraformStack {
  constructor(scope: Construct, ns: string) {
    super(scope, ns);

    const k8s = new l1.KubernetesClusterL1(this, "k8s", {});
    new KubernetesAccess(this, "k8s-access", k8s.access);
  }
}

const app = new App();
new CentralInfrastructure(app, "central-infrastructure");
app.synth();
