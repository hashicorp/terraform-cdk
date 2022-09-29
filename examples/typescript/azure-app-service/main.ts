// Copyright (c) HashiCorp, Inc
// SPDX-License-Identifier: MPL-2.0
import { Construct } from "constructs";
import { App, TerraformStack, TerraformOutput } from "cdktf";
import { AzurermProvider } from "./.gen/providers/azurerm/provider";
import { ResourceGroup } from "./.gen/providers/azurerm/resource-group";
import { AppServicePlan } from "./.gen/providers/azurerm/app-service-plan";
import { AppService } from "./.gen/providers/azurerm/app-service";

class MyStack extends TerraformStack {
  constructor(scope: Construct, name: string) {
    super(scope, name);

    // define resources here
    const imagename = "nginx:latest";

    new AzurermProvider(this, "azureFeature", {
      features: {},
    });

    const rg = new ResourceGroup(this, "cdktf-rg", {
      name: "cdktf-demo-rg",
      location: "westeurope",
    });

    const asp = new AppServicePlan(this, "cdktf-asp", {
      kind: "Linux",
      reserved: true,
      resourceGroupName: rg.name,
      location: rg.location,
      name: "cdktf-demo-plan",
      sku: { size: "F1", tier: "Free" },
    });

    const app = new AppService(this, "cdktf-app", {
      name: "cdktf-demo-app",
      location: rg.location,
      appServicePlanId: asp.id,
      resourceGroupName: rg.name,
      clientAffinityEnabled: false,
      httpsOnly: true,
      siteConfig: {
        linuxFxVersion: `DOCKER|${imagename}`,
        use32BitWorkerProcess: true, // Required for free tier
      },
    });

    new TerraformOutput(this, "cdktf-app-url", {
      value: `https://${app.name}.azurewebsites.net/`,
    });
  }
}

const app = new App();
new MyStack(app, "azure-app-service-docker");

app.synth();
