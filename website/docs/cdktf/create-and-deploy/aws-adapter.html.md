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
      tableName: "MyTestTable",
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

So let's write a custom mapping. We start by adding the following code right below our imports and above our stack `MyStack`:

```typescript
import { registerMapping } from "@cdktf/aws-cdk/lib/mapping";

registerMapping("AWS::DynamoDB::Table", {
  resource: (_scope: Construct, _id: string, props: any) => {
    console.log(props);
    return null;
  },
  attributes: {},
});
```

We import the `registerMapping` function and invoke it with arguments for registering an `AWS::DynamoDB::Table` resource. The second argument to the function is an object with two parts: `resource` and `attributes`. We will first have a look at `resource`, a function which is called for each instance of the CloudFormation type it is registered for.  
In this initial version we only log the `props` the function receives and return `null` which will result in no resource being created.

Our example DynamoDB resource will result in the following `props` being outputted:

```js
{
  KeySchema: [ { AttributeName: 'key', KeyType: 'HASH' } ],
  AttributeDefinitions: [ { AttributeName: 'key', AttributeType: 'S' } ],
  BillingMode: undefined,
  ContributorInsightsSpecification: undefined,
  GlobalSecondaryIndexes: undefined,
  KinesisStreamSpecification: undefined,
  LocalSecondaryIndexes: undefined,
  PointInTimeRecoverySpecification: undefined,
  ProvisionedThroughput: { ReadCapacityUnits: 5, WriteCapacityUnits: 5 },
  SSESpecification: undefined,
  StreamSpecification: undefined,
  TableName: 'MyTestTable',
  Tags: undefined,
  TimeToLiveSpecification: undefined
}
```

These attributes are the properties you would find in the rendered CloudFormation schema of that resource. We can also look at the [CloudFormation docs for an `AWS::DynamoDB::Table` resource](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-dynamodb-table.html) and can find the same attributes there.
We now need to write code that maps those attributes to a format that matches our Terraform resource for an AWS DynamoDBTable. For the target schema we can either have a look at the [docs on the Terraform Registry](https://registry.terraform.io/providers/hashicorp/aws/latest/docs/resources/dynamodb_table) or at the code of the `DynamoDB.DynamodbTableConfig` we are going to be supplying to the resource upon creation.

From the logged `props` we can see that we need to support at least setting these attributes and make sure they appear in the resulting CDK for Terraform resources:

```js
{
  KeySchema: [ { AttributeName: 'key', KeyType: 'HASH' } ],
  TableName: 'MyTestTable',
  AttributeDefinitions: [ { AttributeName: 'key', AttributeType: 'S' } ],
  ProvisionedThroughput: { ReadCapacityUnits: 5, WriteCapacityUnits: 5 },
}
```

When synthesizing the code with this initial mapping function that only logs and returns nothing, you might have noticed that it still failed with the following error:

```
Error: cannot map some properties of AWS::DynamoDB::Table: {
  "KeySchema": [
    {
      "AttributeName": "key",
      "KeyType": "HASH"
    }
  ],
  "AttributeDefinitions": [
    {
      "AttributeName": "key",
      "AttributeType": "S"
    }
  ],
  "ProvisionedThroughput": {
    "ReadCapacityUnits": 5,
    "WriteCapacityUnits": 5
  },
  "TableName": "MyTestTable"
}
```

That is a safeguard of the mapping implementation which might save us in the future if we have mappings in place that didn't support all properties at the time they were written. This will then fail and tell us what property we might have missed.
It works by checking whether there are any object properties left on the `props` object (that are not `undefined`) after the mapping function returned.

So let's add some mapping for these values:

```ts
import { DynamoDB } from "@cdktf/aws-cdk";
import { registerMapping } from "@cdktf/aws-cdk/lib/mapping";

registerMapping("AWS::DynamoDB::Table", {
  resource: (scope: Construct, id: string, props: any) => {
    // e.g. props = {
    //   KeySchema: [ { AttributeName: 'key', KeyType: 'HASH' } ],
    //   TableName: 'MyTestTable',
    //   AttributeDefinitions: [ { AttributeName: 'key', AttributeType: 'S' } ],
    //   ProvisionedThroughput: { ReadCapacityUnits: 5, WriteCapacityUnits: 5 },
    // }

    const mappedProps: DynamoDB.DynamodbTableConfig = {
      name: props.TableName,
      attribute: props.AttributeDefinitions.map((att: any) => ({
        name: att.AttributeName,
        type: att.AttributeType,
      })),
      hashKey: props.KeySchema.find((ks: any) => ks.KeyType === "HASH")
        .AttributeName,
    };
    // delete props we successfully mapped to mark them as handled
    delete props.TableName;
    delete props.KeySchema;
    delete props.AttributeDefinitions;

    return new DynamoDB.DynamodbTable(scope, id, mappedProps);
  },
  attributes: {},
});
```

We had to map the `AttributeDefinitions` array to make sure it fits the schema of the Terraform resource (which uses e.g. `name` instead of `AttributeName`). For the `hashKey` we had to look that one up in the `KeySchema array`. Finally we deleted the properties we handled and returned a new `DynamodbTable` resource.

If we now synthesize again using this mapping, we will still see an error:

```
Error: cannot map some properties of AWS::DynamoDB::Table: {
  "ProvisionedThroughput": {
    "ReadCapacityUnits": 5,
    "WriteCapacityUnits": 5
  }
}
```

This is because we forgot to map (and delete) the `ProvisionedThroughput` property. So let's make our mapping complete (see `// new` comments):

```ts
import { DynamoDB } from "@cdktf/aws-cdk";
import { registerMapping } from "@cdktf/aws-cdk/lib/mapping";

registerMapping("AWS::DynamoDB::Table", {
  resource: (scope: Construct, id: string, props: any) => {
    // e.g. props = {
    //   KeySchema: [ { AttributeName: 'key', KeyType: 'HASH' } ],
    //   TableName: 'MyTestTable',
    //   AttributeDefinitions: [ { AttributeName: 'key', AttributeType: 'S' } ],
    //   ProvisionedThroughput: { ReadCapacityUnits: 5, WriteCapacityUnits: 5 },
    // }

    const mappedProps: DynamoDB.DynamodbTableConfig = {
      name: props.TableName,
      attribute: props.AttributeDefinitions.map((att: any) => ({
        name: att.AttributeName,
        type: att.AttributeType,
      })),
      hashKey: props.KeySchema.find((ks: any) => ks.KeyType === "HASH")
        .AttributeName,
      readCapacity: props.ProvisionedThroughput.ReadCapacityUnits, // new
      writeCapacity: props.ProvisionedThroughput.WriteCapacityUnits, // new
    };
    // delete props we successfully mapped to mark them as handled
    delete props.TableName;
    delete props.KeySchema;
    delete props.AttributeDefinitions;
    delete props.ProvisionedThroughput; // new

    return new DynamoDB.DynamodbTable(scope, id, mappedProps);
  },
  attributes: {},
});
```

If we now synthesize our code, it works without any error and we can find the following `aws_dynamodb_table` resource in our `cdk.tf.json` output file (which can be found in `./cdktf.out/stacks/<stack>`):

```json
"resource": {
    "aws_dynamodb_table": {
      "typescriptmanualmapping_adapter_table8235A42E_DED1AA77": {
        "hash_key": "key",
        "name": "MyTestTable",
        "read_capacity": 5,
        "write_capacity": 5,
        "attribute": [
          {
            "name": "key",
            "type": "S"
          }
        ],
        "//": {
          "metadata": {
            "path": "typescript-manual-mapping/adapter/table8235A42E",
            "uniqueId": "typescriptmanualmapping_adapter_table8235A42E_DED1AA77"
          }
        }
      }
    }
  }
```

The only thing left for the mapping now is the `attributes` argument we saw earlier. Whenever we have another AWS CDK construct that references a property of another one it will do so via CloudFormation property name of the resource. But let's have a look at an example:

```ts
import { aws_dynamodb, CfnOutput } from "aws-cdk-lib";
// ...

const table = new aws_dynamodb.Table(awsAdapter, "table", {
  tableName: "MyTestTable",
  partitionKey: { name: "key", type: aws_dynamodb.AttributeType.STRING },
});

new CfnOutput(awsAdapter, "arn", { value: table.tableArn });
```

If we now synthesize this, we get the following error:

```
Error: Resolution error: no "Arn" attribute mapping for resource of type AWS::DynamoDB::Table.
```

So let us fix this by adding an `Arn` property to our formerly empty `attributes` object in the mapping:

```ts
registerMapping("AWS::DynamoDB::Table", {
  resource: (scope: Construct, id: string, props: any) => {
    /* ... */
  },
  attributes: {
    Arn: (table: DynamoDB.DynamodbTable) => table.arn,
  },
});
```

This will now map the `Arn` CloudFormation property to the `.arn` of the Terraform resource and synthesizing will work again without error. While this example might look like something that could be handled automatically, there are cases where this won't map directly, so it became part of the mapping. For example, there are resources that don't have a direct representation in Terraform but do so in CloudFormation (and vice versa) and the mapping for those might need to do more work to return the property of the right resource.

While these mappings may seem like quite an overhead at the moment, they will eventually cease to exist as the Cloud Control API supports more and more resources.

## Examples

For additional examples check out the adapters repository https://github.com/hashicorp/cdktf-aws-cdk/examples

## Known limitations

As the adapter is an early preview of how we envision interoperability with AWS CDK constructs to work, there are some limitations to it:

- AWS CDK App, Stack and nested Stack constructs are not supported
- TODO: list all limitations

## Roadmap

Please refer to the [cdktf-aws-cdk](https://github.com/hashicorp/cdktf-aws-cdk) repository on Github for a Roadmap.

<!-- todo: link to some roadmap Github issue that contains the follow up issues? or similar? -->
