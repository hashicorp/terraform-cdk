import { Construct } from "constructs";

// L1 Constructs
export interface RDSL1Config {}
export class RdsL1 extends Construct {
  constructor(scope: Construct, ns: string, _config: RDSL1Config) {
    super(scope, ns);
  }
}

export interface LambdaL1Config {
  name: string;
  env: Record<string, string>;
}
export class LambdaL1 extends Construct {
  constructor(scope: Construct, ns: string, public config: LambdaL1Config) {
    super(scope, ns);
  }
}

export interface ApiGatewayL1Config {
  paths: Record<string, LambdaL1>;
}

export class ApiGatewayL1 extends Construct {
  constructor(scope: Construct, ns: string, _config: ApiGatewayL1Config) {
    super(scope, ns);
  }
}
export class KubernetesClusterL1 extends Construct {
  constructor(scope: Construct, ns: string, _config: any) {
    super(scope, ns);
  }
}

export class KubernetesDeploymentL1 extends Construct {
  constructor(scope: Construct, ns: string, _config: any) {
    super(scope, ns);
  }
}

export class TfcProjectSecret extends Construct {
  constructor(scope: Construct, ns: string, _config: string) {
    super(scope, ns);
  }
}
