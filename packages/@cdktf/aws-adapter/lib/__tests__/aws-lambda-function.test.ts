import { aws_lambda, Duration } from "aws-cdk-lib";
import { Aspects, Testing } from "cdktf";
import "cdktf/lib/testing/adapters/jest";
import { AwsTerraformAdapter } from "../aws-adapter";
// import * as awscc from "../../.gen/providers/awscc";
// import * as aws from "@cdktf/provider-aws";

describe("lambda function", () => {
  it("should synthesize", () => {
    const res = Testing.synthScope((scope) => {
      const awsAdapter = new AwsTerraformAdapter(scope, "adapter");

      new aws_lambda.Function(awsAdapter, "lambda", {
        code: new aws_lambda.InlineCode(
          `def main(event, context):    \nprint("I'm running!")`
        ),
        handler: "index.main",
        timeout: Duration.seconds(300),
        runtime: aws_lambda.Runtime.PYTHON_3_6,
      });

      // Aspects are currently not invoked via Testing.synth / Testing.synthScope
      // This makes sure the AWS Adapter converts all constructs to cdktf
      Aspects.of(scope).all.forEach((aspect) => aspect.visit(scope));
    });

    expect(res).toMatchInlineSnapshot(`
"{
  \\"data\\": {
    \\"aws_partition\\": {
      \\"adapter_aws-partition_5B16AD9D\\": {}
    }
  },
  \\"resource\\": {
    \\"aws_iam_role\\": {
      \\"adapter_lambdaServiceRole494E4CA6_7D4D29EC\\": {
        \\"assume_role_policy\\": \\"{\\\\\\"Statement\\\\\\":[{\\\\\\"Action\\\\\\":\\\\\\"sts:AssumeRole\\\\\\",\\\\\\"Effect\\\\\\":\\\\\\"Allow\\\\\\",\\\\\\"Principal\\\\\\":{\\\\\\"Service\\\\\\":\\\\\\"lambda.amazonaws.com\\\\\\"}}],\\\\\\"Version\\\\\\":\\\\\\"2012-10-17\\\\\\"}\\",
        \\"managed_policy_arns\\": [
          \\"\${join(\\\\\\"\\\\\\", [\\\\\\"arn:\\\\\\", data.aws_partition.adapter_aws-partition_5B16AD9D.partition, \\\\\\":iam::aws:policy/service-role/AWSLambdaBasicExecutionRole\\\\\\"])}\\"
        ]
      }
    },
    \\"awscc_lambda_function\\": {
      \\"adapter_lambda8B5974B5_06304D76\\": {
        \\"code\\": {
          \\"zip_file\\": \\"def main(event, context):    \\\\nprint(\\\\\\"I'm running!\\\\\\")\\"
        },
        \\"file_system_configs\\": [],
        \\"handler\\": \\"index.main\\",
        \\"memory_size\\": 128,
        \\"package_type\\": \\"Zip\\",
        \\"role\\": \\"\${aws_iam_role.adapter_lambdaServiceRole494E4CA6_7D4D29EC.arn}\\",
        \\"runtime\\": \\"python3.6\\",
        \\"timeout\\": 300,
        \\"tracing_config\\": {
          \\"mode\\": \\"PassThrough\\"
        }
      }
    }
  }
}"
`);
    // TODO: assert more targeted here
    // expect(res).toHaveResourceWithProperties(awscc.LambdaFunction, {
    //     code: { zipFile: `def main(event, context):    \nprint("I'm running!")` },
    // });
  });
});
