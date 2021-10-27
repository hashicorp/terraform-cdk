import { Construct } from "constructs";
import { App, TerraformStack, TerraformOutput } from "cdktf";
import {
  AppService,
  AppServicePlan,
  AzurermProvider,
  ResourceGroup,
} from "./.gen/providers/azurerm";

class MyStack extends TerraformStack {
  constructor(scope: Construct, name: string) {
    super(scope, name);

    // define resources here
    const imagename = "nginx:latest";

    new AzurermProvider(this, "azureFeature", {
      features: {},
    });

    const rg = new ResourceGroup(this, "cdktf-rg", {
      name: "demo2020",
      location: "westeurope",
    });

    const asp = new AppServicePlan(this, "cdktf-asp", {
      kind: "Linux",
      reserved: true,
      resourceGroupName: rg.name,
      location: rg.location,
      name: "DockerCDKTF",
      sku: { size: "F1", tier: "Free" },
      dependsOn: [rg],
    });

    const appsvc = new AppService(this, "docker-cdktf", {
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
