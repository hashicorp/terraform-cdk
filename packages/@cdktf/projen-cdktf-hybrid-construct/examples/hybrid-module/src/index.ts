import { Construct } from "constructs";

export interface MyConstructOptions {
  readonly propertyA: string;
}

export class MyConstruct extends Construct {
  constructor(scope: Construct, id: string, public config: MyConstructOptions) {
    super(scope, id);
  }
}
