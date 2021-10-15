---
layout: "cdktf"
page_title: "[technical preview] AWS Adapter"
sidebar_current: "cdktf"
description: "[technical preview] Use AWS CDK (v2) constructs in CDK for Terraform projects."
---

# [technical preview] AWS Adapter

-> **The AWS Adapter is a technical preview and not ready for production usage.** Its API is not stable and things might break unexpectedly.

<!-- TODO: reword this header? -->

## How it works

The `AwsTerraformAdapter` (included in the [`@cdktf/aws-cdk`](https://github.com/hashicorp/cdktf-aws-cdk) package) synthesizes the AWS CDK constructs to CloudFormation and converts that CloudFormation config to CDK for Terraform constructs. It makes use of the [AWS Cloud Control API](https://docs.aws.amazon.com/cloudcontrolapi/latest/userguide/what-is-cloudcontrolapi.html) for resources that are supported by it (it uses the [`aws_cloudcontrolapi_resource`](https://www.terraform.io/docs/providers/aws/r/cloudcontrolapi_resource.html) Terraform resource for that). Resources that are not yet supported by the AWS Cloud Control API need to be mapped to their specific Terraform resources. As attribute names and resource types differ between CloudFormation and Terraform automatic mapping is not possible here. Therefore explicit mappings need to be created for such resources. Here's a [list of resources](https://docs.aws.amazon.com/cloudcontrolapi/latest/userguide/supported-resources.html) currently supported by the Cloud Control API.  
Some of these manual mappings are already [included](https://github.com/hashicorp/cdktf-aws-cdk/tree/main/src/mapping/aws) in the adapter and we plan on extending the support for them as we continue iterating on this technical preview. As the coverage of the AWS Cloud Control API grows, those manual mappings will become obsolete over time. In the meantime we are happy to accept PRs adding manual mappings for currently unsupported resources!

## Requirements

- Currently only CDKTF TypeScript projects are supported
- `aws-cdk-lib` >= 2.0.0 (requires `constructs` version 10)
- `cdktf` >= 0.7.0
- `@cdktf/aws-cdk` >= 0.1 (contains the adapter)

## Installation

We expect a CDKTF TypeScript project being set up already. Refer to [Project Setup])(/docs/cdktf/create-and-deploy/project-setup.html) for instructions of how set one up.

Install the required packages via yarn or npm

```
yarn add aws-cdk-lib@^2.0.0-rc.17 @cdktf/aws-cdk
// or
npm install aws-cdk-lib@^2.0.0-rc.17 @cdktf/aws-cdk
```

## Usage

Import the `AwsTerraformAdapter` from `@cdktf/aws-cdk` and initialize it like any other construct.

```typescript
import { AwsTerraformAdapter, AwsProvider } from "@cdktf/aws-cdk";

export class MyStack extends TerraformStack {
  constructor(scope: Construct, name: string) {
    super(scope, name);

    new AwsProvider(this, "aws", { region: "us-west-2" });

    const awsAdapter = new AwsTerraformAdapter(this, "adapter");
  }
}
```

When using AWS CDK constructs, pass them the `awsAdapter` as `scope` argument instead of `this` (refering to `MyStack`).

```typescript
import {
  Duration,
  aws_lambda,
  aws_events,
  aws_events_targets,
} from "aws-cdk-lib";
import { AwsTerraformAdapter, AwsProvider } from "@cdktf/aws-cdk";

export class MyStack extends TerraformStack {
  constructor(scope: Construct, name: string) {
    super(scope, name);

    new AwsProvider(this, "aws", { region: "us-west-2" });

    const awsAdapter = new AwsTerraformAdapter(this, "adapter");

    const lambdaFn = new aws_lambda.Function(awsAdapter, "lambda", {
      code: new aws_lambda.InlineCode(
        `def main(event, context):
    print("I'm running!")`
      ),
      handler: "index.main",
      timeout: Duration.seconds(300),
      runtime: aws_lambda.Runtime.PYTHON_3_6,
    });

    const rule = new aws_events.Rule(awsAdapter, "rule", {
      schedule: aws_events.Schedule.expression("cron(0 18 ? * MON-FRI *)"),
    });

    rule.addTarget(new aws_events_targets.LambdaFunction(lambdaFn));
  }
}
```

The `AwsTerraformAdapter` adds an Aspect to `MyStack` which will be invoked when the stack is synthesized. That Aspect will then iterate over all AWS CDK constructs that have been added to the adapter and will convert them to CDK for Terraform constructs and add them to the stack. The AWS CDK constructs themselves are never added to the stack.

The [full code of this example](https://github.com/hashicorp/cdktf-aws-cdk/tree/main/examples/typescript-cron-lambda) is available in the cdktf-aws-cdk repository.

## Writing custom mappings

Resources that are not yet supported by the AWS Cloud Control API ([list of supported resources](https://docs.aws.amazon.com/cloudcontrolapi/latest/userguide/supported-resources.html)) need manual mappings. While there are some mappings already included, most unsupported resources will need a manual mapping. The following section shows how to write and register a mapping for an `AWS::DynamoDB::Table` CloudFormation resource.

Given the following code:

```typescript
// ...
import { aws_dynamodb } from "aws-cdk-lib";

export class MyStack extends TerraformStack {
  constructor(scope: Construct, name: string) {
    super(scope, name);

    new AwsProvider(this, "aws", { region: "us-west-2" });

    const awsAdapter = new AwsTerraformAdapter(this, "adapter");

    new aws_dynamodb.Table(awsAdapter, "table", {
      partitionKey: { name: "key", type: aws_dynamodb.AttributeType.STRING },
    });
  }
}
// ...
```

The adapter will throw an error explaining that there is currently no mapping in place for a DynamoDB table resource:

```
Error: Unsupported resource Type AWS::DynamoDB::Table. There is no custom mapping registered for AWS::DynamoDB::Table and the AWS CloudControl API does not seem to support it yet. If you think this is an error or you need support for this resource, file an issue at: https://github.com/hashicorp/cdktf-aws-cdk/issues/new?title=Unsupported%20Resource%20Type%20%60AWS::DynamoDB::Table%60 and mention the AWS CDK constructs you want to use
```

todo: complete

todo: Happy for PRs!

## Examples

For additional examples check out the adapters repository https://github.com/hashicorp/cdktf-aws-cdk/examples

## Known limitations

As the adapter is an early preview of how we envision interoperability with AWS CDK constructs to work, there are some limitations to it:

- aws stacks and apps are not supported, only passing constructs is
  TODO: list limitations

## Roadmap

<!-- todo: link to some roadmap Github issue that contains the follow up issues? or similar? -->
