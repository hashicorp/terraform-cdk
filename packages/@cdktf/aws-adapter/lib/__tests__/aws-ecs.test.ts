import {
  aws_ec2 as ec2,
  aws_ecs as ecs,
  aws_ecs_patterns as ecs_patterns,
} from "aws-cdk-lib";
import { Aspects, Testing } from "cdktf";
import "cdktf/lib/testing/adapters/jest";
import { AwsTerraformAdapter } from "../aws-adapter";
// import * as awscc from "../../.gen/providers/awscc";
// import * as aws from "@cdktf/provider-aws";

describe("ecs cluster", () => {
  it("should synthesize", () => {
    const res = Testing.synthScope((scope) => {
      const awsAdapter = new AwsTerraformAdapter(scope, "adapter");

      const vpc = new ec2.Vpc(awsAdapter, "MyVpc", {
        maxAzs: 3, // Default is all AZs in region
      });

      const cluster = new ecs.Cluster(awsAdapter, "MyCluster", {
        vpc: vpc,
      });

      // Create a load-balanced Fargate service and make it public
      new ecs_patterns.ApplicationLoadBalancedFargateService(
        awsAdapter,
        "MyFargateService",
        {
          cluster: cluster, // Required
          cpu: 256, // Default is 256
          desiredCount: 1, // Default is 1
          taskImageOptions: {
            image: ecs.ContainerImage.fromRegistry("amazon/amazon-ecs-sample"),
          },
          memoryLimitMiB: 512, // Default is 512
          publicLoadBalancer: true, // Default is false
        }
      );

      // Aspects are currently not invoked via Testing.synth / Testing.synthScope
      // This makes sure the AWS Adapter converts all constructs to cdktf
      Aspects.of(scope).all.forEach((aspect) => aspect.visit(scope));
    });

    expect(res).toMatchInlineSnapshot();
  });
});
