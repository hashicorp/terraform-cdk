import { Construct } from "constructs";
import {
  Apigatewayv2Api,
  Apigatewayv2ApiConfig,
} from "../.gen/providers/aws/apigatewayv2-api/index";
import { Apigatewayv2Integration } from "../.gen/providers/aws/apigatewayv2-integration/index";
import { Apigatewayv2Route } from "../.gen/providers/aws/apigatewayv2-route/index";
import { Connectable, connect, registerConnection } from "../cdktf/index";
import { LambdaFunction } from "../.gen/providers/aws/lambda-function";
import { LambdaPermission } from "../.gen/providers/aws/lambda-permission";
import { Apigatewayv2Stage } from "../.gen/providers/aws/apigatewayv2-stage/index";

type Invokable = Connectable & {
  functionNameInput?: string;
  invokeArn: string;
};

registerConnection(LambdaFunction, Apigatewayv2Api, (lambda, api) => {
  new LambdaPermission(lambda, `permission-api-${api.nameInput}`, {
    functionName: lambda.functionName,
    action: "lambda:InvokeFunction",
    principal: "apigateway.amazonaws.com",
    sourceArn: `${api.executionArn}/*/*`,
  });
});

export class ApiGateway extends Construct {
  public api: Apigatewayv2Api;
  constructor(scope: Construct, ns: string, config: Apigatewayv2ApiConfig) {
    super(scope, ns);

    this.api = new Apigatewayv2Api(this, "api", {
      ...config,
      protocolType: "HTTP",
      corsConfiguration: {
        allowOrigins: ["*"],
        allowMethods: ["*"],
        allowHeaders: ["content-type"],
      },
    });

    new Apigatewayv2Stage(this, "stage", {
      apiId: this.api.id,
      name: "prod",
      autoDeploy: true,
    });
  }

  public connect(invokable: Invokable, route = "/") {
    connect(invokable, this.api);
    const integration = new Apigatewayv2Integration(
      this,
      `${invokable.functionNameInput}-integration`,
      {
        apiId: this.api.id,
        integrationType: "AWS_PROXY",

        connectionType: "INTERNET",
        integrationMethod: "POST",
        integrationUri: invokable.invokeArn,
        passthroughBehavior: "WHEN_NO_MATCH",
      }
    );

    new Apigatewayv2Route(this, `${invokable.functionNameInput}-route`, {
      apiId: this.api.id,
      routeKey: `POST ${route}`,
      target: `integrations/${integration.id}`,
    });
  }

  public get endpoint() {
    return this.api.apiEndpoint;
  }
}
