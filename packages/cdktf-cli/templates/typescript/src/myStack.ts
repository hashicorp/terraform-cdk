import { Construct } from "constructs";
import { TerraformStack } from "cdktf";

export class MyStack extends TerraformStack {
  constructor(scope: Construct, id: string) {
    super(scope, id);

    // define resources here
  }
}