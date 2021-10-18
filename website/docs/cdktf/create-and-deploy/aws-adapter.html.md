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

The `AwsTerraformAdapter` (included in the [`@cdktf/aws-cdk`](https://github.com/hashicorp/cdktf-aws-cdk) package) allows you to use Amazon Web Services Cloud Development Kit (AWS CDK) constructs in your CDKTF projects.

The `AwsTerraformAdapter` uses the [`aws_cloudcontrolapi_resource`](https://www.terraform.io/docs/providers/aws/r/cloudcontrolapi_resource.html) Terraform resource to communicate with the [AWS Cloud Control API](https://docs.aws.amazon.com/cloudcontrolapi/latest/userguide/what-is-cloudcontrolapi.html). Reference this [list of supported resources](https://docs.aws.amazon.com/cloudcontrolapi/latest/userguide/supported-resources.html) for the Cloud Control API.  

Resources that the AWS Cloud Control API does not yet support� need to be manually mapped to their specific Terraform resources. Automatic mapping is not possible because attribute names and resource types differ between CloudFormation and Terraform. Some manual mappings are already [included](https://github.com/hashicorp/cdktf-aws-cdk/tree/main/src/mapping/aws) in the adapter and we plan on extending the support for them as we continue iterating on this technical preview. As the coverage of the AWS Cloud Control API grows, those manual mappings will become obsolete over time. In the meantime we are happy to accept PRs adding manual mappings for currently unsupported resources!

## Requirements

The `AwsTerraformAdapter currenly only supports TypeScript projects:

- `aws-cdk-lib` >= 2.0.0 (requires `constructs` version 10)
- `cdktf` >= 0.7.0
- `@cdktf/aws-cdk` >= 0.1 (contains the adapter)

## Install the Adapter

We expect that you will have a CDKTF TypeScript project already set up. Refer to [Project Setup])(/docs/cdktf/create-and-deploy/project-setup.html) for details.

Install the required packages via yarn or npm.

```
yarn add aws-cdk-lib@^2.0.0-rc.17 @cdktf/aws-cdk
// or
npm install aws-cdk-lib@^2.0.0-rc.17 @cdktf/aws-cdk
```

## Use the Adapter

Import the `AwsTerraformAdapter` from `@cdktf/aws-cdk` and initialize it the same way you would initialize any other construct.

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

Pass AWS CDK constructs `awsAdapter` as the `scope` argument instead of `this` (referring to `MyStack`).

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

The `AwsTerraformAdapter` adds an Aspect to `MyStack` which will be invoked when the stack is synthesized. That Aspect will then iterate over all AWS CDK constructs that have been added to the adapter, convert them to CDK for Terraform constructs, and add them to the stack. It does not add the AWS CDK constructs themselves.

The [full code of this example](https://github.com/hashicorp/cdktf-aws-cdk/tree/main/examples/typescript-cron-lambda) is available in the cdktf-aws-cdk repository.

## Write Custom Mappings

Resources that the AWS Cloud Control API does not yet support ([supported resources](https://docs.aws.amazon.com/cloudcontrolapi/latest/userguide/supported-resources.html)) need manual mappings. While there are some mappings already included, you will need to manually map most unsupported resources. These mappings will eventually become unnecessary as the Cloud Control API supports more and more resources.

The example below shows how to write and register a mapping for an `AWS::DynamoDB::Table` CloudFormation resource. 

Consider the following code:

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

To write a custom mapping, add the following code right below the imports and above the stack `MyStack`. 

The example code imports the `registerMapping` function and invokes it with arguments for registering an `AWS::DynamoDB::Table` resource. The second argument to the function is an object with two parts: `resource` and `attributes`. The `resource` is a function that is called for each instance of the CloudFormation type it is registered for. This example logs the `props` the function receives and returns `null`, which will result in no resource being created.

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


The example DynamoDB resource results in CDKTF outputting the following `props`:

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

These attributes are the properties you would find in the rendered CloudFormation schema of that resource. You can also look at the [CloudFormation docs for an `AWS::DynamoDB::Table` resource](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-dynamodb-table.html) and can find the same attributes there.
The next step is to write code that maps those attributes to a format that matches the Terraform resource for an AWS DynamoDBTable. For the target schema, you can either  look at the [docs on the Terraform Registry](https://registry.terraform.io/providers/hashicorp/aws/latest/docs/resources/dynamodb_table) or at the code of the `DynamoDB.DynamodbTableConfig` you will supply to the resource upon creation.

The logged `props` show that you need to support at least setting these attributes and that you need to make sure they appear in the resulting CDK for Terraform resources:

```js
{
  KeySchema: [ { AttributeName: 'key', KeyType: 'HASH' } ],
  TableName: 'MyTestTable',
  AttributeDefinitions: [ { AttributeName: 'key', AttributeType: 'S' } ],
  ProvisionedThroughput: { ReadCapacityUnits: 5, WriteCapacityUnits: 5 },
}
```

Synthesizing the code with this initial mapping function fails with an error listing properties that may not be properly mapped. CDKTF checks whether there are any object properties left on the `props` object (that are not `undefined`) after the mapping function returned. This is a safeguard of the mapping implementation to block mappings that do not support all properties at the time they were written. 

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


The example below adds mapping for any missing values in the error message. First, it maps the `AttributeDefinitions` array to make sure it fits the schema of the Terraform resource (which uses e.g. `name` instead of `AttributeName`). It also looks up the `hashKey` in the `KeySchema array`. Finally, it deletes the properties that have been handled and returns a new `DynamodbTable` resource.

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


Synthesizing again using this mapping still produces an error.

```
Error: cannot map some properties of AWS::DynamoDB::Table: {
  "ProvisionedThroughput": {
    "ReadCapacityUnits": 5,
    "WriteCapacityUnits": 5
  }
}
```

The error indicates that the `ProvisionedThroughput` property has not yet been mapped or deleted. The example below shows a complete mapping for the DynamoDB table. 

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

This code synthesizes without error and produces the following `aws_dynamodb_table` resource in the `cdk.tf.json` output file (available in `./cdktf.out/stacks/<stack>`):

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

You should also map the `attributes` argument. When AWS CDK constructs reference each other's properties, they do so via the CloudFormation property name of the resource. 

The example below maps the `Arn` CloudFormation property to the `.arn` of the Terraform resource. While this example might look like something that could be handled automatically, there are cases where this cannot map directly. For example, there are some resources that do not have a direct representation in Terraform but do in CloudFormation (and vice versa).

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



## Examples

For additional examples, reference the [adapters repository](https://github.com/hashicorp/cdktf-aws-cdk/examples).

## Known limitations

As the adapter is an early preview of how we envision interoperability with AWS CDK constructs to work, there are some limitations to it:

- AWS CDK App, Stack and nested Stack constructs are not supported
- TODO: list all limitations

## Roadmap

Please refer to the [cdktf-aws-cdk](https://github.com/hashicorp/cdktf-aws-cdk) repository on Github for a Roadmap.

<!-- todo: link to some roadmap Github issue that contains the follow up issues? or similar? -->
