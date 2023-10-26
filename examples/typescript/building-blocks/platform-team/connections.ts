import { Fn, propertyAccess, Token } from "cdktf";
import { registerConnection } from "../cdktf/index";

import { LambdaPermission } from "../.gen/providers/aws/lambda-permission";
import { IamRolePolicyAttachment } from "../.gen/providers/aws/iam-role-policy-attachment";
import { IamPolicy } from "../.gen/providers/aws/iam-policy";
import { LambdaEventSourceMapping } from "../.gen/providers/aws/lambda-event-source-mapping";

import { DatabaseTable } from "./db";
import { ApiGateway } from "./apiGateway";
import { Lambda } from "./lambda";

function getRoleNameFromArn(arn: string) {
  return Token.asString(propertyAccess(Fn.split("/", arn), [1]));
}

export function registerConnections() {
  registerConnection(Lambda, ApiGateway, (lambda, api) => {
    new LambdaPermission(lambda, `permission-api-${api.api.nameInput}`, {
      functionName: lambda.lambda.functionName,
      action: "lambda:InvokeFunction",
      principal: "apigateway.amazonaws.com",
      sourceArn: `${api.api.executionArn}/*/*`,
    });
  });

  registerConnection(Lambda, DatabaseTable, (lambda, table) => {
    const connectionPolicy = new IamPolicy(
      lambda,
      `connect-${lambda.lambda.functionNameInput}-to-${table.table.nameInput}-policy`,
      {
        namePrefix: `connect-${table.name}-to-${lambda.lambda.functionName}`,
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
              Resource: table.table.arn,
              Effect: "Allow",
            },
          ],
        }),
      }
    );
    new IamRolePolicyAttachment(
      lambda,
      `connect-${lambda.lambda.functionNameInput}-to-${table.table.nameInput}--attachement`,
      {
        policyArn: connectionPolicy.arn,
        role: getRoleNameFromArn(lambda.lambda.role),
      }
    );
  });

  registerConnection(DatabaseTable, Lambda, (table, lambda) => {
    table.table.streamEnabled = true;
    table.table.streamViewType = "NEW_AND_OLD_IMAGES";

    const connectionPolicy = new IamPolicy(
      lambda,
      `connect-${table.table.nameInput}-to-${lambda.lambda.functionNameInput}-policy`,
      {
        namePrefix: `connect-${table.name}-to-${lambda.lambda.functionName}`,
        policy: JSON.stringify({
          Version: "2012-10-17",
          Statement: [
            {
              Sid: "AllowLambdaFunctionInvocation",
              Effect: "Allow",
              Action: ["lambda:InvokeFunction"],
              Resource: `${table.table.arn}/stream/*`,
            },
            {
              Sid: "APIAccessForDynamoDBStreams",
              Effect: "Allow",
              Action: [
                "dynamodb:GetRecords",
                "dynamodb:GetShardIterator",
                "dynamodb:DescribeStream",
                "dynamodb:ListStreams",
              ],
              Resource: `${table.table.arn}/stream/*`,
            },
          ],
        }),
      }
    );
    new IamRolePolicyAttachment(
      lambda,
      `connect-${table.table.nameInput}-to-${lambda.lambda.functionNameInput}-attachement`,
      {
        policyArn: connectionPolicy.arn,
        role: getRoleNameFromArn(lambda.lambda.role),
      }
    );
    new LambdaEventSourceMapping(lambda, "dynamodb-event-source", {
      eventSourceArn: table.table.streamArn,
      functionName: lambda.lambda.arn,
      startingPosition: "LATEST",
    });
  });
}
