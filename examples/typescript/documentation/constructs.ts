// Copyright (c) HashiCorp, Inc
// SPDX-License-Identifier: MPL-2.0

// DOCS_BLOCK_START:constructs
import { Construct } from "constructs";
import { TerraformStack } from "cdktf";
import { KubernetesWebAppDeployment } from "./custom-constructs";
import { KubernetesProvider } from "./.gen/providers/kubernetes/provider";
import * as path from "path";

export class ConstructsStack extends TerraformStack {
  constructor(scope: Construct, name: string) {
    super(scope, name);

    new KubernetesProvider(this, "kind", {
      configPath: path.join(__dirname, "../kubeconfig.yaml"),
    });

    new KubernetesWebAppDeployment(this, "deployment", {
      image: "nginx:latest",
      replicas: 2,
      app: "myapp",
      component: "frontend",
      environment: "dev",
    });
  }
}
// DOCS_BLOCK_END:constructs
