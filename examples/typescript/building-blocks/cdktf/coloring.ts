import { Construct } from "constructs";
import { TerraformStack } from "cdktf";

export class ColorfulTerraformStack extends TerraformStack {
  constructor(
    scope: Construct,
    ns: string,
    public colors: Record<string, any>
  ) {
    super(scope, ns);
  }
}
