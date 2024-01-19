// Copyright (c) HashiCorp, Inc
// SPDX-License-Identifier: MPL-2.0
import { Construct } from "constructs";
import { App, LocalBackend, TerraformStack, Testing } from "cdktf";

import * as bitbucket from "./.gen/providers/bitbucket";
import * as abitbucket from "./.gen/providers/abitbucket";

class RenamedProvidersStack extends TerraformStack {
  constructor(scope: Construct, id: string) {
    super(scope, id);
    // required for stable snapshots during testing
    new LocalBackend(this, {
      path: "terraform.tfstate",
    });

    new bitbucket.provider.BitbucketProvider(this, "bitbucket", {
      username: "foo",
      password: "bar",
    });
    new bitbucket.repository.Repository(this, "test-repo", {
      name: "test",
      owner: "foo",
    });

    const abb = new abitbucket.provider.AbitbucketProvider(this, "abitbucket", {
      username: "foo",
      password: "bar",
    });
    new abitbucket.repository.Repository(this, "test-repo2", {
      name: "test2",
      owner: "foo",
      provider: abb, // needs to be passed explicitly
    });
  }
}

const app = Testing.stubVersion(new App({}));
new RenamedProvidersStack(app, "renamed-providers");
app.synth();
