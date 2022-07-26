// Copyright (c) HashiCorp, Inc
// Licensed under the Mozilla Public License 2.0
import { Construct } from "constructs";
import {
  App,
  TerraformOutput,
  TerraformStack,
  TerraformVariable,
  Testing,
} from "cdktf";
import * as Aws from "./.gen/providers/aws";
import * as Nomad from "./.gen/providers/nomad";
import * as Kubernetes from "./.gen/providers/kubernetes";

export class NamespacedProviders extends TerraformStack {
  constructor(scope: Construct, id: string) {
    super(scope, id);
    new Aws.AwsProvider(this, "aws", {
      region: "us-east-1",
    });

    const ami = new Aws.ec2.DataAwsAmi(this, "ami", {
      mostRecent: true,
      owners: ["amazon"],
    });

    new Aws.ec2.Instance(this, "instance", {
      ami: ami.id,
      availabilityZone: "us-east-1a",
      instanceType: "t2.micro",
    });

    const userId = new Aws.datasources.DataAwsCallerIdentity(
      this,
      "callerIdentity",
      {}
    );

    const role = new Aws.iam.IamRole(this, "role", {
      assumeRolePolicy: "assumeRolePolicy",
    });
    new Aws.iam.IamRolePolicyAttachment(this, "lambda-role-vpc-att", {
      policyArn:
        "arn:aws:iam::aws:policy/service-role/AWSLambdaVPCAccessExecutionRole",
      role: role.name,
    });
    new Aws.lambdafunction.LambdaFunction(this, "lambdaFn", {
      handler: "index.handler",
      runtime: "nodejs12.x",
      timeout: 10,
      functionName: userId.accountId,
      role: role.arn,
    });
  }
}

export class References extends TerraformStack {
  constructor(scope: Construct, id: string) {
    super(scope, id);

    const provider = new Nomad.NomadProvider(this, "nomad", {
      address: "http://127.0.0.1",
    });
    // provider values are no references
    new TerraformOutput(this, "provideraddress", {
      value: provider.address,
    });

    // simple references
    const job = new Nomad.Job(this, "firstJob", {
      jobspec: "./job/spec.hcl",
    });

    new Nomad.Job(this, "secondJob", {
      jobspec: job.jobspec,
    });

    // single-item references
    new Kubernetes.KubernetesProvider(this, "k8s", {});
    const namespace = new Kubernetes.Namespace(this, "myNamespace", {
      metadata: { name: "myNamespace" },
    });

    new Kubernetes.Deployment(this, "myDeployment", {
      metadata: {
        name: "myDeployment",
        namespace: namespace.metadata.name,
      },
      spec: {
        replicas: "1",
        selector: {
          matchLabels: {
            app: "myDeployment",
          },
        },
        template: {
          metadata: {
            labels: {
              app: "myDeployment",
            },
          },
          spec: {
            container: [
              {
                name: "myDeployment",
                image: "nginx",
              },
            ],
          },
        },
      },
    });
  }
}

export class Mutation extends TerraformStack {
  constructor(scope: Construct, id: string) {
    super(scope, id);

    const namespace = new TerraformVariable(this, "namespace", {
      type: "string",
      default: "default",
    }).stringValue;

    // Simple Mutation
    new Aws.AwsProvider(this, "aws", {
      region: "us-east-1",
    });

    const ami = new Aws.ec2.DataAwsAmi(this, "ami", {
      mostRecent: true,
      owners: ["amazon"],
    });

    const instance = new Aws.ec2.Instance(this, "instance", {
      ami: "my-ami",
      availabilityZone: "us-east-1a",
      instanceType: "t2.micro",
    });

    // direct primitive mutation
    instance.instanceType = "t2.small";

    // direct reference mutation
    instance.ami = ami.id;

    // reset method mutation
    instance.resetAvailabilityZone();

    // put method mutation
    instance.putMetadataOptions({ httpEndpoint: "127.0.0.1" });

    // Nested Mutation
    new Kubernetes.KubernetesProvider(this, "k8s", {});
    const deployment = new Kubernetes.Deployment(this, "myDeployment", {
      metadata: { name: "myDeployment" },
      spec: {
        replicas: "1",
        minReadySeconds: 42,
        selector: {
          matchLabels: {
            app: "myDeployment",
          },
        },
        template: {
          metadata: {
            labels: {
              app: "myDeployment",
            },
          },
          spec: {
            container: [
              {
                name: "myDeployment",
                image: "nginx",
              },
            ],
          },
        },
      },
    });

    // direct primitive mutation
    deployment.spec.replicas = "2";

    // direct reference mutation
    deployment.metadata.namespace = namespace;

    // reset method mutation
    deployment.spec.resetMinReadySeconds();

    // put method mutation
    deployment.spec.putStrategy({
      type: "RollingUpdate",
      rollingUpdate: {
        maxSurge: "10%",
        maxUnavailable: "10%",
      },
    });

    // object mutation (not yet supported
    // deployment.spec.selector = {
    //   matchLabels: {
    //     app: "my-other-deployment",
    //   },
    // }

    // list mutation (not yet supported)
    // const containerImage = new TerraformVariable(this, "containerImage", {
    //   type: "string",
    //   default: "nginix",
    // }).stringValue;

    // deployment.spec.template.spec.container?.push({
    //   name: "my-other-container",
    //   image: containerImage,
    // });
  }
}

const app = Testing.stubVersion(new App({}));
new NamespacedProviders(app, "namespaces");
new References(app, "references");
new Mutation(app, "mutation");
app.synth();
