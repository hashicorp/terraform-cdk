// Copyright (c) HashiCorp, Inc
// SPDX-License-Identifier: MPL-2.0
import { Construct } from "constructs";
import { App, TerraformStack, Testing, LocalBackend } from "cdktf";
import { OurLocalModule } from "./.gen/modules/our-local-module";
import { Gcloud } from "./.gen/modules/gcloud";
import { IamAccount } from "./.gen/modules/terraform-aws-modules/aws/iam/modules/iam-account";

export class HelloTerra extends TerraformStack {
  constructor(scope: Construct, id: string) {
    super(scope, id);
    new LocalBackend(this, {
      path: "terraform.tfstate",
    });

    new OurLocalModule(this, "local-module", {
      set: ["test", "sets"],
    });
    new Gcloud(this, "gcloud", {});
    new IamAccount(this, "iam", {
      accountAlias: "cdktf",
    });
  }
}

const app = Testing.stubVersion(new App({ stackTraces: false }));
new HelloTerra(app, "hello-modules");
app.synth();
