import { Aspects, Testing } from "cdktf";
import "cdktf/lib/testing/adapters/jest";
import { CronLambdaStack } from "./main";

describe("typescript-cron-lambda", () => {
  it("should synthesize", () => {
    const stack = new CronLambdaStack(Testing.app(), "test");

    // Aspects are currently not invoked via Testing.synth / Testing.synthScope
    // This makes sure the AWS Adapter converts all constructs to cdktf
    // TODO: link to GH issue for this shortcoming
    Aspects.of(stack).all.forEach((aspect) => aspect.visit(stack));

    const synthResult = Testing.synth(stack);

    expect(synthResult).toMatchInlineSnapshot(`
"{
  \\"data\\": {
    \\"aws_partition\\": {
      \\"adapter_aws-partition_5B16AD9D\\": {}
    }
  },
  \\"provider\\": {
    \\"aws\\": [
      {
        \\"region\\": \\"us-west-2\\"
      }
    ],
    \\"awscc\\": [
      {}
    ]
  },
  \\"resource\\": {
    \\"aws_cloudwatch_event_rule\\": {
      \\"adapter_ruleF2C1DCDC_10BF962A\\": {
        \\"is_enabled\\": true,
        \\"schedule_expression\\": \\"cron(0 18 ? * MON-FRI *)\\"
      }
    },
    \\"aws_cloudwatch_event_target\\": {
      \\"adapter_ruleF2C1DCDC_target0_82E1D1E6\\": {
        \\"arn\\": \\"\${awscc_lambda_function.adapter_lambda8B5974B5_06304D76.arn}\\",
        \\"rule\\": \\"\${aws_cloudwatch_event_rule.adapter_ruleF2C1DCDC_10BF962A.id}\\"
      }
    },
    \\"aws_iam_role\\": {
      \\"adapter_lambdaServiceRole494E4CA6_7D4D29EC\\": {
        \\"assume_role_policy\\": \\"{\\\\\\"Statement\\\\\\":[{\\\\\\"Action\\\\\\":\\\\\\"sts:AssumeRole\\\\\\",\\\\\\"Effect\\\\\\":\\\\\\"Allow\\\\\\",\\\\\\"Principal\\\\\\":{\\\\\\"Service\\\\\\":\\\\\\"lambda.amazonaws.com\\\\\\"}}],\\\\\\"Version\\\\\\":\\\\\\"2012-10-17\\\\\\"}\\",
        \\"managed_policy_arns\\": [
          \\"arn:\${data.aws_partition.adapter_aws-partition_5B16AD9D.partition}:iam::aws:policy/service-role/AWSLambdaBasicExecutionRole\\"
        ]
      }
    },
    \\"aws_lambda_permission\\": {
      \\"adapter_ruleAllowEventRuleadapterlambdaFD1ADB594D612405_A1E85F36\\": {
        \\"action\\": \\"lambda:InvokeFunction\\",
        \\"function_name\\": \\"\${awscc_lambda_function.adapter_lambda8B5974B5_06304D76.arn}\\",
        \\"principal\\": \\"events.amazonaws.com\\",
        \\"source_arn\\": \\"\${aws_cloudwatch_event_rule.adapter_ruleF2C1DCDC_10BF962A.arn}\\"
      }
    },
    \\"awscc_lambda_function\\": {
      \\"adapter_lambda8B5974B5_06304D76\\": {
        \\"code\\": {
          \\"zip_file\\": \\"def main(event, context):\\\\n    print(\\\\\\"I'm running!\\\\\\")\\"
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
  },
  \\"terraform\\": {
    \\"required_providers\\": {
      \\"aws\\": {
        \\"source\\": \\"aws\\",
        \\"version\\": \\"~> 3.0\\"
      },
      \\"awscc\\": {
        \\"source\\": \\"local/hashicorp/awscc\\",
        \\"version\\": \\"0.1.0\\"
      }
    }
  }
}"
`);
  });
});
