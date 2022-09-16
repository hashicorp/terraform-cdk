// Copyright (c) HashiCorp, Inc
// SPDX-License-Identifier: MPL-2.0
import {
  ApplicationInsights,
  AppServicePlan,
  AzurermProvider,
  FunctionApp,
  ResourceGroup,
  ServicebusNamespace,
  ServicebusQueue,
  ServicebusQueueAuthorizationRule,
  StorageAccount,
} from "@cdktf/provider-azurerm";
import { App, TerraformStack, Fn } from "cdktf";
import { Construct } from "constructs";

const uid = () => {
  return "xxxxxxxxxxx".replace(/[xy]/g, function (c) {
    var r = (Math.random() * 16) | 0,
      v = c == "x" ? r : (r & 0x3) | 0x8;
    return v.toString(16);
  });
};

class MyStack extends TerraformStack {
  constructor(scope: Construct, name: string) {
    super(scope, name);

    const location = "westeurope";

    // Instantiate Azure Provider
    new AzurermProvider(this, "AzureRm", {
      features: {},
    });

    // Creates the Resource Group for application
    const rg = new ResourceGroup(this, "myapp-resourceGroup", {
      name: "myapp-resourceGroup",
      location,
    });

    // Creates the Application Insight for monitoring
    const applicationInsight = new ApplicationInsights(
      this,
      "myapp-applicationInsight",
      {
        name: "myapp-applicationInsight",
        location,
        resourceGroupName: rg.name,
        applicationType: "Node.JS",
      }
    );

    // Creates the Service Bus Namespace
    const namespace = new ServicebusNamespace(this, "myapp-serviceBus", {
      name: "myapp-serviceBus",
      location,
      resourceGroupName: rg.name,
      sku: "Basic",
    });

    // Creates the Service Bus Queue
    const queue = new ServicebusQueue(this, "myapp-queue", {
      name: "myapp-queue",
      namespaceId: namespace.id,
    });

    // Creates the Service Bus Authorization Rule
    const serviceBusAuthorizationRule = new ServicebusQueueAuthorizationRule(
      this,
      "myapp-queueAuthorizationRule",
      {
        name: "myapp-queueAuthorizationRule",
        queueId: queue.id,
        listen: true,
        send: false,
        manage: false,
      }
    );

    // Creates the App Service Plan
    const azureFunctionAppServicePlan = new AppServicePlan(
      this,
      "myapp-appServicePlan",
      {
        name: "myapp-appServicePlan",
        location,
        resourceGroupName: rg.name,
        sku: {
          size: "Y1",
          tier: "Dynamic",
        },
        kind: "Linux",
        reserved: true,
      }
    );

    // Creates the Storage Account
    const storageAccount = new StorageAccount(this, "myapp-storageAccount", {
      name: `myappsa${uid()}`,
      resourceGroupName: rg.name,
      location,
      accountReplicationType: "LRS",
      accountTier: "Standard",
    });

    // Creates the Function
    const azureFunction = new FunctionApp(this, "myapp-function", {
      name: "myapp-function",
      resourceGroupName: rg.name,
      location,
      appServicePlanId: azureFunctionAppServicePlan.id,
      osType: "linux",
      storageAccountAccessKey: storageAccount.primaryAccessKey,
      storageAccountName: storageAccount.name,
      version: "~3",
      appSettings: {
        WEBSITE_RUN_FROM_PACKAGE: "",
        FUNCTIONS_WORKER_RUNTIME: "node",
        APPINSIGHTS_INSTRUMENTATIONKEY: applicationInsight.instrumentationKey,
        // Need to remove the ;EntityPath=... at the end
        ServiceBusConnectionString: Fn.replace(
          serviceBusAuthorizationRule.primaryConnectionString,
          "/;EntityPath.*/",
          ""
        ),
      },
    });

    azureFunction.lifecycle = {
      ignoreChanges: ['app_settings["WEBSITE_RUN_FROM_PACKAGE"]'],
    };
  }
}

const app = new App();
new MyStack(app, "service-bus-queue-trigger");
app.synth();
