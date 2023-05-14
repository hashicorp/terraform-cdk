import { Construct } from "constructs";
import { TerraformStack } from "cdktf";

export class {{ stackName }} extends TerraformStack {
  constructor(scope: Construct, id: string) {
    super(scope, id);

    // define resources here
  }
}
