// Copyright (c) HashiCorp, Inc
// SPDX-License-Identifier: MPL-2.0
// DOCS_BLOCK_START:remote-backend-define
import { Construct } from "constructs";
import {
  CloudBackend,
  TerraformStack,
  TerraformOutput,
  NamedCloudWorkspace,
  App,
} from "cdktf";

export class CloudBackendStack extends TerraformStack {
  constructor(scope: Construct, id: string) {
    super(scope, id);

    new CloudBackend(this, {
      hostname: "app.terraform.io",
      organization: "company",
      workspaces: new NamedCloudWorkspace("my-app-prod"),
    });

    new TerraformOutput(this, "dns-server", {
      value: "hello-world",
    });
  }
}
// DOCS_BLOCK_END:remote-backend-define

export function localToCloudBackend() {
  // DOCS_BLOCK_START:remote-backend-migrate
  class LocalBackendStack extends TerraformStack {
    constructor(scope: Construct, id: string) {
      super(scope, id);

      new TerraformOutput(this, "dns-server", {
        value: "local",
      });
    }
  }

  const app = new App();
  const stack = new LocalBackendStack(app, "local-to-cloud-backend");
  new CloudBackend(stack, {
    hostname: "app.terraform.io",
    organization: "company",
    workspaces: new NamedCloudWorkspace("my-app-prod"),
  });
  // DOCS_BLOCK_END:remote-backend-migrate

  return stack;
}

export function cloudBackendToCustomBackend(stack: TerraformStack) {
  // DOCS_BLOCK_START:remote-backend-escape-hatches
  stack.addOverride("terraform.backend", {
    atlas: {
      name: "example_corp/networking-prod",
      address: "https://app.terraform.io",
    },
  });
  // DOCS_BLOCK_END:remote-backend-escape-hatches
}
