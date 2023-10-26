import { Construct } from "constructs";
import { DynamodbTable } from "../.gen/providers/aws/dynamodb-table";

export interface Attribute {
  name: string;
  type: "S";
  hashKey?: boolean;
  rangeKey?: boolean;
}

export class DatabaseTable extends Construct {
  private table: DynamodbTable;

  constructor(scope: Construct, id: string, attributes: Attribute[]) {
    super(scope, id);

    this.table = new DynamodbTable(this, "table", {
      name: id,
      billingMode: "PAY_PER_REQUEST",
      hashKey: attributes.find(({ hashKey }) => hashKey)?.name,
      rangeKey: attributes.find(({ rangeKey }) => rangeKey)?.name,
      attribute: attributes
        // We only need to list the attributes that are keys
        // The others are there for documentation purposes
        .filter(({ hashKey, rangeKey }) => hashKey || rangeKey)
        .map(({ name, type }) => ({ name, type })),
    });
  }

  get name() {
    return this.table.name;
  }
}
