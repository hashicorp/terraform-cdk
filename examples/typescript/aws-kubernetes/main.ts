// Copyright (c) HashiCorp, Inc
// SPDX-License-Identifier: MPL-2.0
import { Construct } from "constructs";
import { App, Fn, TerraformStack } from "cdktf";
import {
  deployment,
  provider as k8s,
  service,
} from "./.gen/providers/kubernetes";
import { Namespace } from "./.gen/providers/kubernetes/namespace";
import {
  dataAwsAvailabilityZones,
  dataAwsEksCluster,
  dataAwsEksClusterAuth,
  provider,
  securityGroup,
} from "./.gen/providers/aws";
import { Eks } from "./.gen/modules/terraform-aws-modules/aws/eks";
import { Vpc } from "./.gen/modules/terraform-aws-modules/aws/vpc";

class EksClusterStack extends TerraformStack {
  public vpc: Vpc;
  public eks: dataAwsEksCluster.DataAwsEksCluster;
  public eksAuth: dataAwsEksClusterAuth.DataAwsEksClusterAuth;

  constructor(
    scope: Construct,
    id: string,
    clusterName: string,
    region = "us-east-1"
  ) {
    super(scope, id);
    new provider.AwsProvider(this, "aws", {
      region,
    });

    const allAvailabilityZones =
      new dataAwsAvailabilityZones.DataAwsAvailabilityZones(
        this,
        "all-availability-zones",
        {}
      ).names;

    // Create VPC
    this.vpc = new Vpc(this, "vpc", {
      name: "kubernetes-vpc",
      cidr: "10.0.0.0/16",
      azs: allAvailabilityZones,
      privateSubnets: ["10.0.1.0/24", "10.0.2.0/24", "10.0.3.0/24"],
      publicSubnets: ["10.0.4.0/24", "10.0.5.0/24", "10.0.6.0/24"],
      enableNatGateway: true,
      singleNatGateway: true,
      enableDnsHostnames: true,
      tags: {
        [`kubernetes.io/cluster/${clusterName}`]: "shared",
      },
      publicSubnetTags: {
        [`kubernetes.io/cluster/${clusterName}`]: "shared",
        "kubernetes.io/role/elb": "1",
      },
      privateSubnetTags: {
        [`kubernetes.io/cluster/${clusterName}`]: "shared",
        "kubernetes.io/role/internal-elb": "1",
      },
    });

    // Security roles
    const mgmtOne = new securityGroup.SecurityGroup(
      this,
      "worker_group_mgmt_one",
      {
        namePrefix: "worker_group_mgmt_one",
        vpcId: this.vpc.vpcIdOutput,

        ingress: [
          {
            fromPort: 22,
            toPort: 22,
            protocol: "tcp",

            cidrBlocks: ["10.0.0.0/8"],
          },
        ],
      }
    );

    const mgmtTwo = new securityGroup.SecurityGroup(
      this,
      "worker_group_mgmt_two",
      {
        namePrefix: "worker_group_mgmt_two",
        vpcId: this.vpc.vpcIdOutput,

        ingress: [
          {
            fromPort: 22,
            toPort: 22,
            protocol: "tcp",

            cidrBlocks: ["192.168.0.0/16"],
          },
        ],
      }
    );

    new securityGroup.SecurityGroup(this, "all_worker_mgmt", {
      namePrefix: "all_worker_mgmt",
      vpcId: this.vpc.vpcIdOutput,

      ingress: [
        {
          fromPort: 22,
          toPort: 22,
          protocol: "tcp",

          cidrBlocks: ["10.0.0.0/8", "172.16.0.0/12", "192.168.0.0/16"],
        },
      ],
    });

    // Create EKS cluster
    const eksModule = new Eks(this, "eks", {
      // general settings
      clusterName,
      clusterVersion: "1.20",

      // vpc related props
      subnets: Fn.tolist(this.vpc.privateSubnetsOutput),
      vpcId: this.vpc.vpcIdOutput,

      workersGroupDefaults: {
        rootVolumeType: "gp2",
      },

      workerGroups: [
        {
          name: "worker-group-1",
          instanceType: "t2.small",
          additionalUserdata: "echo foo bar",
          asgDesiredCapacity: 2,
          additionalSecurityGroupIds: [mgmtOne.id],
        },
        {
          name: "worker-group-2",
          instanceType: "t2.medium",
          additionalUserdata: "echo foo bar",
          additionalSecurityGroupIds: [mgmtTwo.id],
          asgDesiredCapacity: 1,
        },
      ],

      tags: {
        githubRepo: "hashicorp/terraform-cdk",
      },
    });

    // We create the Eks cluster within the module, this is so we can access the cluster resource afterwards
    this.eks = new dataAwsEksCluster.DataAwsEksCluster(this, "eks-cluster", {
      name: eksModule.clusterIdOutput,
    });

    // We need to fetch the authentication data from the EKS cluster as well
    this.eksAuth = new dataAwsEksClusterAuth.DataAwsEksClusterAuth(
      this,
      "eks-auth",
      {
        name: eksModule.clusterIdOutput,
      }
    );
  }
}

class KubernetesApplicationStack extends TerraformStack {
  constructor(
    scope: Construct,
    id: string,
    cluster: dataAwsEksCluster.DataAwsEksCluster,
    clusterAuth: dataAwsEksClusterAuth.DataAwsEksClusterAuth
  ) {
    super(scope, id);

    new k8s.KubernetesProvider(this, "cluster", {
      host: cluster.endpoint,
      clusterCaCertificate: Fn.base64decode(
        cluster.certificateAuthority.get(0).data
      ),
      token: clusterAuth.token,
    });

    const exampleNamespace = new Namespace(this, "tf-cdk-example", {
      metadata: {
        name: "tf-cdk-example",
      },
    });

    const app = "nginx-example";
    const nginx = new deployment.Deployment(this, "nginx-deployment", {
      metadata: {
        name: app,
        namespace: exampleNamespace.metadata.name,
        labels: {
          app,
        },
      },
      spec: {
        replicas: "1",
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
              },
            ],
          },
        },
      },
    });

    new service.Service(this, "nginx-service", {
      metadata: {
        namespace: nginx.metadata.namespace,
        name: "nginx-service",
      },
      spec: {
        selector: {
          app,
        },
        port: [
          {
            port: 80,
            targetPort: "80",
          },
        ],
        type: "NodePort",
      },
    });
  }
}

const app = new App();
const cluster = new EksClusterStack(app, "eks-cluster", "my-cdktf-eks-cluster");
new KubernetesApplicationStack(
  app,
  "applications",
  cluster.eks,
  cluster.eksAuth
);
app.synth();
