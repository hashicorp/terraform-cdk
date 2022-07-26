// Copyright (c) HashiCorp, Inc
// Licensed under the Mozilla Public License 2.0
import { Construct } from "constructs";
import {
  App,
  TerraformStack,
  TerraformOutput,
  Testing,
  Fn,
  LocalBackend,
} from "cdktf";
import { AwsProvider, sns } from "./.gen/providers/aws";
import { Instance } from "./.gen/providers/aws/ec2";
import { Wafv2WebAcl } from "./.gen/providers/aws/wafv2";

export class HelloTerra extends TerraformStack {
  constructor(scope: Construct, id: string) {
    super(scope, id);
    new LocalBackend(this, {
      path: "terraform.tfstate",
    });

    new AwsProvider(this, "aws", {
      region: "eu-central-1",
      ignoreTags: {
        keys: ["foo"],
      },
    });

    const topic = new sns.SnsTopic(this, "Topic", {
      displayName: "overwritten",
    });
    topic.addOverride("display_name", "topic");
    topic.addOverride("provider", "aws");
    topic.addOverride("lifecycle", { create_before_destroy: true });

    const instance = new Instance(this, "Instance", {
      ami: "ami-12345678",
      instanceType: "t2.micro",
      ebsBlockDevice: [
        {
          deviceName: "/dev/sda1",
          volumeSize: 100,
        },
      ],
      creditSpecification: {
        cpuCredits: "standard",
      },
      metadataOptions: {
        httpEndpoint: "true",
      },
    });

    new Instance(this, "Instance2", {
      ami: "ami-12345678",
      instanceType: "t2.micro",
      creditSpecification: {
        cpuCredits: instance.creditSpecification.cpuCredits,
      },
      metadataOptions: { httpEndpoint: instance.metadataOptions.httpEndpoint },
    });

    new TerraformOutput(this, "sns-topic-arn", {
      value: topic.arn,
    });

    new TerraformOutput(this, "instance-password", {
      value: Fn.base64decode(instance.passwordData),
    });

    new TerraformOutput(this, "instance-http-endpoint", {
      value: instance.metadataOptions?.httpEndpoint,
    });

    // This env var is stripped for security reasons
    new TerraformOutput(this, "tf-env-var-output", {
      value: process.env.TF_VAR_myvar || "no-value-found",
    });

    this.addOverride("terraform.backend", {
      remote: {
        organization: "test",
        workspaces: {
          name: "test",
        },
      },
    });

    new Wafv2WebAcl(this, "wafv2", {
      defaultAction: {
        allow: {},
      },
      name: "managed-rule-example",
      scope: "REGIONAL",
      visibilityConfig: {
        cloudwatchMetricsEnabled: true,
        metricName: "managed-rule-example",
        sampledRequestsEnabled: true,
      },
      rule: [
        {
          name: "managed-rule-example",
          priority: 1,
          overrideAction: {
            count: {},
          },
          visibilityConfig: {
            cloudwatchMetricsEnabled: true,
            metricName: "managed-rule-example",
            sampledRequestsEnabled: true,
          },
          statement: {
            managedRuleGroupStatement: {
              name: "managed-rule-example",
              vendorName: "AWS",
              excludedRule: [
                {
                  name: "SizeRestrictions_QUERYSTRING",
                },
                { name: "SQLInjection_QUERYSTRING" },
              ],
            },
          },
        },
      ],
    });
  }
}

const app = Testing.stubVersion(new App({ stackTraces: false }));
new HelloTerra(app, "hello-terra");
app.synth();
