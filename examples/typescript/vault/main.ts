// Copyright (c) HashiCorp, Inc
// Licensed under the Mozilla Public License 2.0
import { Construct } from "constructs";
import { App, TerraformStack, TerraformOutput } from "cdktf";
import {
  VaultProvider,
  TransitSecretBackendKey,
  Mount,
} from "./.gen/providers/vault";

class MyStack extends TerraformStack {
  constructor(scope: Construct, name: string) {
    super(scope, name);

    new VaultProvider(this, "vault", {
      address: process.env.VAULT_ADDR || "http://0.0.0.0:8200",
      token: process.env.VAULT_TOKEN,
    });

    const mount = new Mount(this, "mount", {
      path: "transit",
      type: "transit",
      description: "Example description",
      defaultLeaseTtlSeconds: 3600,
      maxLeaseTtlSeconds: 86400,
    });

    const key = new TransitSecretBackendKey(this, "backendKey", {
      backend: mount.path,
      name: "mykey",
      dependsOn: [mount],
    });

    new TerraformOutput(this, "keyId", {
      value: key.keys.get(0).lookup("id"),
    });
  }
}

const app = new App();
new MyStack(app, "typescript-vault");
app.synth();
