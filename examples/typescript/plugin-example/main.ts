// Copyright (c) HashiCorp, Inc
// SPDX-License-Identifier: MPL-2.0
/*

Starts a Docker container with an Nginx server.

Steps:

- Start Docker on your machine
- Run `cdktf get` to install dependencies
- Run `cdktf deploy` to run the Nginx container
- Visit http://localhost:8000/ to view the Nginx default page
- Optional: `docker ps` will show the running container
- Destroy with `cdktf destroy`

*/

import { Construct } from "constructs";
import { App, AssetType, TerraformAsset, TerraformStack } from "cdktf";
import { Image } from "./.gen/providers/docker/image";
import { DockerProvider } from "./.gen/providers/docker/provider";
import { Container, ContainerConfig } from "./.gen/providers/docker/container";
import { setLogCommand } from "@cdktf/log-plugin";
import { AwsProvider } from "@cdktf/provider-aws/lib/aws-provider";
import { Vpc } from "./.gen/providers/aws/vpc/index";
import { Subnet } from "./.gen/providers/aws/subnet/index";
import { SecurityGroup } from "@cdktf/provider-aws/lib/security-group";
import { IamRole } from "@cdktf/provider-aws/lib/iam-role";
import { IamPolicy } from "@cdktf/provider-aws/lib/iam-policy";
import { IamRolePolicyAttachment } from "@cdktf/provider-aws/lib/iam-role-policy-attachment";
import {
  LambdaFunction,
  LambdaFunctionConfig,
} from "@cdktf/provider-aws/lib/lambda-function";
import { CloudwatchLogGroup } from "@cdktf/provider-aws/lib/cloudwatch-log-group";
import { DataDockerRegistryImage } from "./.gen/providers/docker/data-docker-registry-image/index";
import path = require("path");

// This would normally go in a shared construct library
class LoggableContainer extends Container {
  constructor(scope: Construct, name: string, config: ContainerConfig) {
    super(scope, name, config);

    setLogCommand(this, `docker logs {{ state.id }}{{#if watch}} -f{{/if}}`);
  }
}

class LoggableLambda extends LambdaFunction {
  constructor(
    scope: Construct,
    name: string,
    config: LambdaFunctionConfig,
    cloudWatch: CloudwatchLogGroup,
    region: string
  ) {
    super(scope, name, config);

    const logGroupName = cloudWatch.nameInput; // TODO: Does it work without input?

    const getLatestLogGroup = `aws logs describe-log-streams  --region '${region}' --log-group-name '${logGroupName}' --max-items 1 --order-by LastEventTime --descending --query logStreams[*].logStreamName | jq -r .[0]`;

    setLogCommand(
      this,
      `aws logs get-log-events --region '${region}' --log-group-name '${logGroupName}' --log-stream-name $(${getLatestLogGroup})`
    );
  }
}

class MyStack extends TerraformStack {
  public readonly dockerImage: Image;

  constructor(scope: Construct, name: string) {
    super(scope, name);

    // Setup
    new DockerProvider(this, "provider", {});
    const provider = new AwsProvider(this, "aws", {
      region: "us-east-1",
    });

    const ngnix = new DataDockerRegistryImage(this, "nginxImageSha", {
      name: "nginx:latest",
    });
    this.dockerImage = new Image(this, "nginxImage", {
      name: ngnix.name,
      keepLocally: false,
      pullTriggers: [ngnix.sha256Digest],
    });

    const vpc = new Vpc(this, "vpc", {
      cidrBlock: "10.0.0.0/16",
      enableDnsHostnames: true,
      enableDnsSupport: true,
    });
    const subnet = new Subnet(this, "subnet", {
      vpcId: vpc.id,
      cidrBlock: "10.0.1.0/24",
      availabilityZone: "us-east-1a",
    });
    const securityGroup = new SecurityGroup(this, "securityGroup", {
      namePrefix: "cdktf-plugin-demo",
      vpcId: vpc.id,
      ingress: [
        {
          description: "Allow all inbound traffic",
          fromPort: 0,
          toPort: 65535,
          protocol: "tcp",
          cidrBlocks: ["10.0.1.0/24"],
          ipv6CidrBlocks: [],
          securityGroups: [],
          prefixListIds: [],
          selfAttribute: false,
        },
      ],
      egress: [
        {
          description: "Allow all outbound traffic",
          fromPort: 0,
          toPort: 65535,
          protocol: "tcp",
          cidrBlocks: ["0.0.0.0/0"],
          ipv6CidrBlocks: [],
          securityGroups: [],
          prefixListIds: [],
          selfAttribute: false,
        },
      ],
    });
    const role = new IamRole(this, "iamRole", {
      name: "cdktf-plugin-demo",
      assumeRolePolicy: JSON.stringify({
        Version: "2012-10-17",
        Statement: [
          {
            Action: "sts:AssumeRole",
            Principal: {
              Service: "lambda.amazonaws.com",
            },
            Effect: "Allow",
          },
        ],
      }),
    });

    const policy = new IamPolicy(this, "iamPolicy", {
      name: "cdktf-plugin-demo-policy",
      policy: JSON.stringify({
        Version: "2012-10-17",
        Statement: [
          {
            Effect: "Allow",
            Action: [
              "logs:CreateLogGroup",
              "logs:CreateLogStream",
              "logs:PutLogEvents",
            ],
            Resource: "arn:aws:logs:*:*:*",
          },
          {
            Effect: "Allow",
            Resource: "*",
            Action: [
              "ec2:CreateNetworkInterface",
              "ec2:DescribeNetworkInterfaces",
              "ec2:DeleteNetworkInterface",
            ],
          },
        ],
      }),
    });

    new IamRolePolicyAttachment(this, "iamRolePolicyAttachment", {
      policyArn: policy.arn,
      role: role.name,
    });
    const cloudWatchGroup = new CloudwatchLogGroup(this, "cloudWatchGroup", {
      name: "/aws/lambda/cdktf-plugin-demo", // The name connects it to the lambda
      retentionInDays: 7,
    });

    // Interesting part
    new LoggableContainer(this, "nginxContainer", {
      image: this.dockerImage.imageId,
      name: "tutorial",
      ports: [
        {
          internal: 80,
          external: 8000,
        },
      ],
    });

    const asset = new TerraformAsset(this, "lambdaAsset", {
      path: path.resolve(__dirname, "lambda/"),
      type: AssetType.ARCHIVE,
    });
    new LoggableLambda(
      this,
      "lambda",
      {
        functionName: "cdktf-plugin-demo",
        dependsOn: [cloudWatchGroup],
        filename: asset.path,
        sourceCodeHash: asset.assetHash,
        handler: "index.handler",
        role: role.arn,
        runtime: "nodejs12.x",
        vpcConfig: [
          {
            subnetIds: [subnet.id],
            securityGroupIds: [securityGroup.id],
          },
        ],
      },
      cloudWatchGroup,
      provider.regionInput
    );
  }
}

const app = new App();
new MyStack(app, "demo-cdktf-ts-docker");
app.synth();
