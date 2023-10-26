// Copyright (c) HashiCorp, Inc
// SPDX-License-Identifier: MPL-2.0
import { Construct } from "constructs";
import { App, TerraformStack } from "cdktf";
// import * as path from "path";

class MyStack extends TerraformStack {
  constructor(scope: Construct, ns: string) {
    super(scope, ns);
  }
}

const app = new App();
new MyStack(app, "development-building-blocks");
app.synth();

// IAM Policies: https://github.com/udondan/iam-floyd
