// Copyright (c) HashiCorp, Inc
// SPDX-License-Identifier: MPL-2.0
import { Construct } from "constructs";
import { App, TerraformStack } from "cdktf";
import * as path from "path";
import * as fs from "fs";
import { GoogleProvider } from "./.gen/providers/google/provider";
import { ComputeNetwork } from "./.gen/providers/google/compute-network";
import { ComputeInstance } from "./.gen/providers/google/compute-instance";

class MyStack extends TerraformStack {
  constructor(scope: Construct, name: string) {
    super(scope, name);

    const credentialsPath = path.join(process.cwd(), "google.json");
    const credentials = fs.existsSync(credentialsPath)
      ? fs.readFileSync(credentialsPath).toString()
      : "{}";

    new GoogleProvider(this, "Google", {
      region: "us-central1",
      zone: "us-central1-c",
      project: "terraform-cdk",
      credentials,
    });

    const network = new ComputeNetwork(this, "Network", {
      name: "cdktf-network",
    });

    new ComputeInstance(this, "ComputeInstance", {
      name: "cdktf-instance",
      machineType: "f1-micro",
      bootDisk: {
        initializeParams: {
          image: "debian-cloud/debian-12",
        },
      },

      networkInterface: [
        {
          network: network.name,
        },
      ],
      tags: ["web", "dev"],
      dependsOn: [network],
    });
  }
}

const app = new App();
new MyStack(app, "typescript-gcp");
app.synth();
