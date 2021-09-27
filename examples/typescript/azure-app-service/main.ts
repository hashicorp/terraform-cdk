import { Construct } from "constructs";
import { App, TerraformStack, TerraformOutput } from "cdktf";
import {
  App as AzApp,
  AzurermProvider,
  Resource,
} from "./.gen/providers/azurerm";

class MyStack extends TerraformStack {
  constructor(scope: Construct, name: string) {
    super(scope, name);

    // define resources here
    const imagename = "nginx:latest";

    new AzurermProvider(this, "azureFeature", {
      features: [{}],
    });

    const rg = new Resource.GroupA(this, "cdktf-rg", {
      name: "demo2020",
      location: "westeurope",
    });

    const asp = new AzApp.ServicePlan(this, "cdktf-asp", {
      kind: "Linux",
      reserved: true,
      resourceGroupName: rg.name,
      location: rg.location,
      name: "DockerCDKTF",
      sku: [{ size: "F1", tier: "Free" }],
      dependsOn: [rg],
    });

    const appsvc = new AzApp.Service(this, "docker-cdktf", {
      name: "cdktfdemoneil",
      appServicePlanId: `${asp.id}`,
      location: rg.location,
      resourceGroupName: rg.name,
      clientAffinityEnabled: false,
      httpsOnly: true,
      dependsOn: [asp],
    });
    appsvc.addOverride("site_config", [
      {
        linux_fx_version: `DOCKER|${imagename}`,
        use_32_bit_worker_process: true,
      },
    ]);
    new TerraformOutput(this, "appweburl", {
      value: `https://${appsvc.name}.azurewebsites.net/`,
    });
  }
}

const app = new App();
new MyStack(app, "azure-app-service-docker");

app.synth();
