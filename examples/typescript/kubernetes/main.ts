// Copyright (c) HashiCorp, Inc
// SPDX-License-Identifier: MPL-2.0
import { Construct } from "constructs";
import { App, TerraformStack } from "cdktf";
import { KubernetesProvider } from "./.gen/providers/kubernetes/provider";
import { Namespace } from "./.gen/providers/kubernetes/namespace";
import { Deployment } from "./.gen/providers/kubernetes/deployment";
import { Service } from "./.gen/providers/kubernetes/service";

class KubeStack extends TerraformStack {
  constructor(scope: Construct, id: string) {
    super(scope, id);

    new KubernetesProvider(this, "kind", {});

    const exampleNamespace = new Namespace(this, "tf-cdk-example", {
      metadata: {
        name: "tf-cdk-example",
      },
    });

    const app = "nginx-example";
    const nginx = new Deployment(this, "nginx-deployment", {
      metadata: {
        name: app,
        namespace: exampleNamespace.metadata.name,
        labels: {
          app,
        },
      },
      spec: {
        replicas: 2,
        selector: {
          matchLabels: {
            app,
          },
        },
        template: {
          metadata: {
            labels: {
              app,
            },
          },
          spec: {
            container: [
              {
                image: "nginx:1.7.8",
                name: "example",
                port: [
                  {
                    containerPort: 80,
                  },
                ],
                resources: {
                  limits: {
                    cpu: "0.5",
                    memory: "512Mi",
                  },
                  requests: {
                    cpu: "250m",
                    memory: "50Mi",
                  },
                },
              },
            ],
          },
        },
      },
    });

    new Deployment(this, "single-nginx", {
      metadata: {
        namespace: nginx.metadata.namespace,
        name: "single-nginx",
      },
      spec: {
        replicas: 1,
        selector: { matchLabels: nginx.spec.selector.matchLabels },
        template: {
          metadata: { labels: nginx.spec.template.metadata.labels },
          spec: {
            container: [
              {
                name: "peter",
              },
            ],
          },
        },
      },
    });

    new Service(this, "nginx-service", {
      metadata: nginx.metadata,
      spec: {
        selector: {
          app,
        },
        port: [
          {
            nodePort: 30201,
            port: 80,
            targetPort: "80",
          },
        ],
        type: "NodePort",
      },
    });

    // x.metadata.name = "nginx-service";
  }
}

const app = new App();
new KubeStack(app, "tf-cdk-example");
app.synth();
