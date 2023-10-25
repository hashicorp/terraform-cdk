import { Construct } from "constructs";

export class AwsResource extends Construct {
  public terraformResourceType: string = "aws_resource";
  get arn() {
    return "arn:aws:resource";
  }
}

export class AwsDbResource extends AwsResource {
  get host(): string {
    return "foo";
  }
  get port(): number {
    return 123;
  }
  get user(): string {
    return "foo";
  }
  get password(): string {
    return "foo";
  }
}

// L1 Constructs
export interface RDSL1Config {}
export class RdsL1 extends AwsResource {
  public terraformResourceType: string = "aws_rds_instance";
  constructor(scope: Construct, ns: string, _config: RDSL1Config) {
    super(scope, ns);
  }
}

export interface LambdaL1Config {
  name: string;
  env: Record<string, string>;
}
export class LambdaL1 extends AwsResource {
  constructor(scope: Construct, ns: string, public config: LambdaL1Config) {
    super(scope, ns);
  }
}

export interface ApiGatewayL1Config {
  paths: Record<string, LambdaL1>;
}

export class ApiGatewayL1 extends AwsResource {
  constructor(scope: Construct, ns: string, _config: ApiGatewayL1Config) {
    super(scope, ns);
  }
}
export class KubernetesClusterL1 extends AwsResource {
  constructor(scope: Construct, ns: string, _config: any) {
    super(scope, ns);
  }
  public get access() {
    return {
      kubernetesHost: "foo",
      kubernetesApiToken: "bar",
    };
  }
}

export class KubernetesDeploymentL1 extends AwsResource {
  constructor(scope: Construct, ns: string, _config: any) {
    super(scope, ns);
  }
}

export class TfcProjectSecret extends AwsResource {
  constructor(scope: Construct, ns: string, _config: string) {
    super(scope, ns);
  }
}

export class ServiceRole extends AwsResource {
  constructor(scope: Construct, ns: string, _config: any) {
    super(scope, ns);
  }
}

export class AccessPolicy extends AwsResource {
  constructor(scope: Construct, ns: string, _config: any) {
    super(scope, ns);
  }
}

export class PgBouncer extends AwsDbResource {
  constructor(scope: Construct, ns: string, public config: any) {
    super(scope, ns);
  }
}
