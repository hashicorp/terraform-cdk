import { TerraformStack } from "cdktf";
import { Construct } from "constructs";

import { MyConstruct } from "../src/";

export class BasicExample extends TerraformStack {
  constructor(scope: Construct, name: string) {
    super(scope, name);

    new MyConstruct(this, "my-construct", {
      propertyA: "valueA",
    });
  }
}
