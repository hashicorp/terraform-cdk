// Copyright (c) HashiCorp, Inc
// SPDX-License-Identifier: MPL-2.0
import { Construct } from "constructs";
import { App, TerraformStack, GcsBackend } from "cdktf";

class MyStack extends TerraformStack {
  constructor(scope: Construct, name: string) {
    super(scope, name);

    // Only one backend is supported by Terraform

    // GCS Backend - https://www.terraform.io/docs/backends/types/gcs.html
    new GcsBackend(this, {
      bucket: "tf-state-prod",
      prefix: "terraform/state",
    });

    // define resources here
  }
}

const app = new App();
new MyStack(app, "typescript-backends");
app.synth();
