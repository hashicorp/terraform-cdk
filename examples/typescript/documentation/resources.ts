// Copyright (c) HashiCorp, Inc
// SPDX-License-Identifier: MPL-2.0
import { TerraformStack, TerraformVariable } from "cdktf";
import { Construct } from "constructs";
import { AwsProvider } from "@cdktf/provider-aws/lib/aws-provider";
import { DataAwsRegion } from "@cdktf/provider-aws/lib/data-aws-region";
import { DynamodbTable } from "@cdktf/provider-aws/lib/dynamodb-table";
import { SnsTopic } from "@cdktf/provider-aws/lib/sns-topic";
import { SecurityGroup } from "@cdktf/provider-aws/lib/security-group";
import { Namespace } from "@cdktf/provider-kubernetes/lib/namespace";
import { Deployment } from "@cdktf/provider-kubernetes/lib/deployment";
import { KubernetesProvider } from "./.gen/providers/kubernetes/provider";

// DOCS_BLOCK_START:resources-define
export class ResourcesStack extends TerraformStack {
  constructor(scope: Construct, id: string) {
    super(scope, id);

    new AwsProvider(this, "aws", {
      region: "eu-central-1",
    });

    const region = new DataAwsRegion(this, "region");

    new DynamodbTable(this, "first-table", {
      name: `my-first-table-${region.name}`,
      hashKey: "temp",
      attribute: [{ name: "id", type: "S" }],
      billingMode: "PAY_PER_REQUEST",
    });
    // DOCS_BLOCK_END:resources-define

    // DOCS_BLOCK_START:resources-escape-hatch
    const tableName = "my-second-table";

    const table = new DynamodbTable(this, "second-table", {
      name: tableName,
      hashKey: "id",
      attribute: [{ name: "id", type: "S" }],
    });

    table.addOverride("provisioner", [
      {
        "local-exec": {
          command: `aws dynamodb create-backup --table-name ${tableName} --backup-name ${tableName}-backup`,
        },
      },
    ]);
    // DOCS_BLOCK_END:resources-escape-hatch

    new KubernetesProvider(this, "k8s", {});

    // DOCS_BLOCK_START:resources-references
    const exampleNamespace = new Namespace(this, "tf-cdk-example", {
      metadata: {
        name: "tf-cdk-example",
      },
    });

    new Deployment(this, "nginx-deployment", {
      metadata: {
        name: "nginx",
        namespace: exampleNamespace.metadata.name, // Reference the namespace name propery
        labels: {
          app: "my-app",
        },
      },
      spec: {
        // ...
        // DOCS_BLOCK_END:resources-references
        replicas: "1",
        template: {
          metadata: {
            labels: {
              app: "my-app",
            },
          },
          spec: {
            container: [
              {
                name: "nginx",
                image: "nginx:1.14.2",
              },
            ],
          },
        },
        // DOCS_BLOCK_START:resources-references
      },
    });
    // DOCS_BLOCK_END:resources-references

    // DOCS_BLOCK_START:resources-override-attribute
    const topic = new SnsTopic(this, "Topic", {
      displayName: "will-be-overwritten",
    });
    topic.addOverride("display_name", "my-topic");
    // DOCS_BLOCK_END:resources-override-attribute

    // DOCS_BLOCK_START:resources-escape-hatch-dynamic-block
    const portsList = new TerraformVariable(this, "ports", {
      type: "list",
      default: [22, 80, 443, 5432],
    });

    const sg = new SecurityGroup(this, "security1", {
      name: "security1",
      vpcId: "vpcs",
      egress: [
        {
          fromPort: 0,
          toPort: 0,
          cidrBlocks: ["0.0.0.0/0"],
          protocol: "-1",
        },
      ],
    });
    sg.addOverride("dynamic.ingress", {
      for_each: portsList.listValue,
      content: {
        fromPort: "${ingress.value}",
        toPort: "${ingress.value}",
        cidrBlocks: ["0.0.0.0/0"],
        protocol: "-1",
      },
    });
    // DOCS_BLOCK_END:resources-escape-hatch-dynamic-block

    // DOCS_BLOCK_START:resources-escape-loop-thru-ports
    const ports = [22, 80, 443, 5432];

    new SecurityGroup(this, "security2", {
      name: "security2",
      vpcId: "vpcs",
      egress: [
        {
          fromPort: 0,
          toPort: 0,
          cidrBlocks: ["0.0.0.0/0"],
          protocol: "-1",
        },
      ],
      ingress: ports.map((port) => ({
        fromPort: port,
        toPort: port,
        cidrBlocks: ["0.0.0.0/0"],
        protocol: "-1",
      })),
    });
    // DOCS_BLOCK_END:resources-escape-loop-thru-ports

    // DOCS_BLOCK_START:resources-define
  }
}
// DOCS_BLOCK_END:resources-define
