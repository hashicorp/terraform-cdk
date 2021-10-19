import { Construct } from "constructs";
import { App, TerraformStack, TerraformOutput, Testing, Fn } from "cdktf";
import { AwsProvider, SNS, EC2 } from "./.gen/providers/aws";

export class HelloTerra extends TerraformStack {
  constructor(scope: Construct, id: string) {
    super(scope, id);

    new AwsProvider(this, "aws", {
      region: "eu-central-1",
      ignoreTags: {
        keys: ["foo"],
      },
    });

    const topic = new SNS.SnsTopic(this, "Topic", {
      displayName: "overwritten",
    });
    topic.addOverride("display_name", "topic");
    topic.addOverride("provider", "aws");
    topic.addOverride("lifecycle", { create_before_destroy: true });

    const instance = new EC2.Instance(this, "Instance", {
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

    new EC2.Instance(this, "Instance2", {
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

    this.addOverride("terraform.backend", {
      remote: {
        organization: "test",
        workspaces: {
          name: "test",
        },
      },
    });
  }
}

const app = Testing.stubVersion(new App({ stackTraces: false }));
new HelloTerra(app, "hello-terra");
app.synth();
