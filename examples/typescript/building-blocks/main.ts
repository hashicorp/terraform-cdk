// Copyright (c) HashiCorp, Inc
// SPDX-License-Identifier: MPL-2.0
import { Construct } from "constructs";
import { App, TerraformStack, TerraformAtomGenerator } from "cdktf";
import { AwsProvider } from "./.gen/providers/aws/provider";
import { IamRole } from "./.gen/providers/aws/iam-role";
import { IamRolePolicyAttachment } from "./.gen/providers/aws/iam-role-policy-attachment";
import { LambdaDBIamRolePolicyAttachment } from "./building-blocks/LambdaDBIamRolePolicyAttachment";

class GeneratorStack extends TerraformStack {
  constructor(scope: Construct, ns: string) {
    super(scope, ns);

    new TerraformAtomGenerator({
      resource: IamRolePolicyAttachment,
      className: "LambdaDBIamRolePolicyAttachment",
      workingDir: __dirname,
      typedAttributes: [
        {
          name: "role",
          type: IamRole,
          function: "(role: IamRole | any) => { return role.name }",
        },
      ],
      imports: [
        {
          name: "IamRole",
          path: ".gen/providers/aws/iam-role",
        },
      ],
      defaults: {
        policyArn:
          "arn:aws:iam::aws:policy/service-role/AWSLambdaBasicExecutionRole",
      },
    });
  }
}

class MyStack extends TerraformStack {
  constructor(scope: Construct, ns: string) {
    super(scope, ns);

    new AwsProvider(this, "aws", {
      region: "us-east-1",
    });

    const role = new IamRole(this, "lambda-exec", {
      name: `iam-role`,
      assumeRolePolicy: JSON.stringify({
        Version: "2012-10-17",
        Statement: [
          {
            Action: "sts:AssumeRole",
            Principal: {
              Service: "lambda.amazonaws.com",
            },
            Effect: "Allow",
            Sid: "",
          },
        ],
      }),
      inlinePolicy: [
        {
          name: "AllowDynamoDB",
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
                Resource: "table arn here",
                Effect: "Allow",
              },
            ],
          }),
        },
      ],
    });

    new LambdaDBIamRolePolicyAttachment(
      this,
      "lambda-db-iam-policy-attachment",
      {
        id: "policy-attachment",
        role: role,
      }
    );
  }
}

const app = new App();
new GeneratorStack(app, "generators");
new MyStack(app, "ts-import");
app.synth();
