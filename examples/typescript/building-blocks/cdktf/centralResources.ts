import { Construct } from "constructs";
import * as l1 from "../l1";
import { TerraformVariable } from "cdktf";

export interface CentralResource<T> {
  constructor(scope: Construct, name: string, value: T): void;
  loadFromVariables(): T;
}

// TODO: Is there a way to abstract this pattern?
// TODO: Instead of types we could take object or array as input and have a central one
export class KubernetesAccess extends Construct {
  constructor(
    scope: Construct,
    name: string,
    config: { kubernetesHost: string; kubernetesApiToken: string }
  ) {
    super(scope, name);

    new l1.TfcProjectSecret(this, "kubernetesHost", config.kubernetesHost);
    new l1.TfcProjectSecret(
      this,
      "kubernetesApiToken",
      config.kubernetesApiToken
    );
  }

  public static loadFromVariables(scope: Construct): {
    kubernetesHost: string;
    kubernetesApiToken: string;
  } {
    return {
      kubernetesHost: new TerraformVariable(scope, "kubernetesHost", {})
        .stringValue,
      kubernetesApiToken: new TerraformVariable(scope, "kubernetesApiToken", {})
        .stringValue,
    };
  }
}
