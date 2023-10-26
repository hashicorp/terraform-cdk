import { Construct } from "constructs";
import * as cdktf from "../cdktf/index";
import {
  Apigatewayv2Api,
  Apigatewayv2ApiConfig,
} from "../.gen/providers/aws/apigatewayv2-api/index";
import { Apigatewayv2Integration } from "../.gen/providers/aws/apigatewayv2-integration/index";
import { Apigatewayv2Route } from "../.gen/providers/aws/apigatewayv2-route/index";
import { Apigatewayv2Stage } from "../.gen/providers/aws/apigatewayv2-stage/index";

type Invokable = cdktf.Connectable & {
  functionNameInput?: string;
  invokeArn: string;
};
type ConnectableWithInvokable = cdktf.Connectable & {
  lambda: Invokable;
};

export class ApiGateway extends cdktf.ConnectableConstruct {
  public api: Apigatewayv2Api;
  public type = "custom_api_gateway";
  public static type = "custom_api_gateway";
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

  public connect(invokable: ConnectableWithInvokable, route = "/") {
    cdktf.connect(invokable, this);
    const integration = new Apigatewayv2Integration(
      this,
      `${invokable.lambda.functionNameInput}-integration`,
      {
        apiId: this.api.id,
        integrationType: "AWS_PROXY",

        connectionType: "INTERNET",
        integrationMethod: "POST",
        integrationUri: invokable.lambda.invokeArn,
        passthroughBehavior: "WHEN_NO_MATCH",
      }
    );

    new Apigatewayv2Route(this, `${invokable.lambda.functionNameInput}-route`, {
      apiId: this.api.id,
      routeKey: `POST ${route}`,
      target: `integrations/${integration.id}`,
    });
  }

  public get endpoint() {
    return this.api.apiEndpoint;
  }
}
