// Copyright (c) HashiCorp, Inc
// SPDX-License-Identifier: MPL-2.0
import { Construct } from "constructs";
import { App, TerraformStack, AzurermBackend } from "cdktf";

class MyStack extends TerraformStack {
  constructor(scope: Construct, name: string) {
    super(scope, name);

    // Only one backend is supported by Terraform

    // Azurerm Backend - https://www.terraform.io/docs/backends/types/azurerm.html
    new AzurermBackend(this, {
      resourceGroupName: "StorageAccount-ResourceGroup",
      storageAccountName: "abcd1234",
      containerName: "tfstate",
      key: "prod.terraform.tfstate",
    });

    // define resources here
  }
}

const app = new App();
new MyStack(app, "typescript-backends");
app.synth();
