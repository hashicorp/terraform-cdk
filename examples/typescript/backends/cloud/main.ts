// Copyright (c) HashiCorp, Inc
// SPDX-License-Identifier: MPL-2.0
import { Construct } from "constructs";
import { App, TerraformStack, CloudBackend, NamedCloudWorkspace } from "cdktf";

class MyStack extends TerraformStack {
  constructor(scope: Construct, name: string) {
    super(scope, name);

    // Only one backend is supported by Terraform

    // Cloud - https://www.terraform.io/cli/cloud/settings#the-cloud-block
    new CloudBackend(this, {
      hostname: "app.terraform.io",
      organization: "company",
      workspaces: new NamedCloudWorkspace("my-app-prod"),
    });

    // define resources here
  }
}

const app = new App();
new MyStack(app, "typescript-backends");
app.synth();
