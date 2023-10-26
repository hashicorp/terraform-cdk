import { Construct } from "constructs";
import { Fn, propertyAccess, Token } from "cdktf";
import { DynamodbTable } from "../.gen/providers/aws/dynamodb-table";
import { registerConnection } from "../cdktf/connection";
import { LambdaFunction } from "../.gen/providers/aws/lambda-function";
import { IamRolePolicyAttachment } from "../.gen/providers/aws/iam-role-policy-attachment";
import { IamPolicy } from "../.gen/providers/aws/iam-policy";
import { LambdaEventSourceMapping } from "../.gen/providers/aws/lambda-event-source-mapping";

function getRoleNameFromArn(arn: string) {
  return Token.asString(propertyAccess(Fn.split("/", arn), [1]));
}
registerConnection(LambdaFunction, DynamodbTable, (lambda, table) => {
  const connectionPolicy = new IamPolicy(
    lambda,
    `connect-${table.nameInput}-to-${lambda.functionNameInput}-policy`,
    {
      namePrefix: `connect-${table.name}-to-${lambda.functionName}`,
      policy: JSON.stringify({
        Version: "2012-10-17",
        Statement: [
          {
            Action: [
              "dynamodb:Scan",
              "dynamodb:Query",
              "dynamodb:BatchGetItem",
              "dynamodb:GetItem",
              "dynamodb:PutItem",
            ],
            Resource: table.arn,
            Effect: "Allow",
          },
        ],
      }),
    }
  );
  new IamRolePolicyAttachment(
    lambda,
    `connect-${table.nameInput}-to-${lambda.functionNameInput}-attachement`,
    {
      policyArn: connectionPolicy.arn,
      role: getRoleNameFromArn(lambda.role),
    }
  );
});

registerConnection(DynamodbTable, LambdaFunction, (table, lambda) => {
  new LambdaEventSourceMapping(lambda, "dynamodb-event-source", {
    eventSourceArn: table.arn,
    functionName: lambda.functionName,
    startingPosition: "LATEST",
  });
});

export interface Attribute {
  name: string;
  type: "S";
  hashKey?: boolean;
  rangeKey?: boolean;
}

export class DatabaseTable extends Construct {
  public table: DynamodbTable;

  constructor(scope: Construct, id: string, attributes: Attribute[]) {
    super(scope, id);

    this.table = new DynamodbTable(this, "table", {
      name: id,
      billingMode: "PAY_PER_REQUEST",
      hashKey: attributes.find(({ hashKey }) => hashKey)?.name,
      rangeKey: attributes.find(({ rangeKey }) => rangeKey)?.name,
      attribute: attributes
        // We only need to list the attributes that are keys
        // The others are there for documentation purposes
        .filter(({ hashKey, rangeKey }) => hashKey || rangeKey)
        .map(({ name, type }) => ({ name, type })),
    });
  }

  get name() {
    return this.table.name;
  }
}
