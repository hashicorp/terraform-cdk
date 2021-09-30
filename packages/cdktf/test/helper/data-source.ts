import { Construct } from "constructs";
import {
  ComplexComputedList,
  TerraformDataSource,
  TerraformMetaArguments,
  StringMap,
  NumberMap,
  BooleanMap,
} from "../../lib";
import { TestProviderMetadata } from "./provider";
import { stringToTerraform } from "../../lib/runtime";

export interface TestDataSourceConfig extends TerraformMetaArguments {
  name: string;
}

export class TestDataSource extends TerraformDataSource {
  public static readonly tfResourceType: string = "test_data_source";
  public name: string;

  constructor(scope: Construct, id: string, config: TestDataSourceConfig) {
    super(scope, id, {
      terraformResourceType: "test_data_source",
      terraformGeneratorMetadata: {
        providerName: TestProviderMetadata.TYPE,
        providerVersionConstraint: "~> 2.0",
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
    });
    this.name = config.name;
  }

  public complexComputedList(index: string) {
    return new TestComplexComputedList(this, "complex_computed_list", index);
  }

  public stringMap(key: string) {
    return new StringMap(this, "string_map").lookup(key);
  }

  public numberMap(key: string) {
    return new NumberMap(this, "number_map").lookup(key);
  }

  public booleanMap(key: string) {
    return new BooleanMap(this, "boolean_map").lookup(key);
  }

  protected synthesizeAttributes(): { [p: string]: any } {
    return {
      name: stringToTerraform(this.name),
    };
  }
}

class TestComplexComputedList extends ComplexComputedList {
  public get id() {
    return this.getStringAttribute("id");
  }
}
