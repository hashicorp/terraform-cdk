import { Construct } from "constructs";
import {
  TerraformDataSource,
  TerraformMetaArguments,
  TerraformListAttribute,
  ITerraformAddressable,
  TerraformObjectAttribute,
  TerraformStringAttribute,
  TerraformStringMapAttribute,
  TerraformNumberMapAttribute,
  TerraformBooleanMapAttribute,
} from "../../lib";
import { TestProviderMetadata } from "./provider";

export interface TestDataSourceConfig extends TerraformMetaArguments {
  name: string;
}

export class TestDataSource extends TerraformDataSource {
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

  public complexComputedList(index: number) {
    return new TestComplexComputedList(this, "complex_computed_list").get(
      index
    );
  }

  public stringMap(key: string) {
    return new TerraformStringMapAttribute(this, "string_map").get(key);
  }

  public numberMap(key: string) {
    return new TerraformNumberMapAttribute(this, "number_map").get(key);
  }

  public booleanMap(key: string) {
    return new TerraformBooleanMapAttribute(this, "boolean_map").get(key);
  }

  protected synthesizeAttributes(): { [p: string]: any } {
    return {};
  }
}

class TestComplexComputedList extends TerraformListAttribute {
  public constructor(
    parent: ITerraformAddressable,
    terraformAttribute: string
  ) {
    super(parent, terraformAttribute);
  }
  protected valueToTerraform(): any {
    return undefined;
  }
  public get(index: number): TestComputedAttribute {
    return new TestComputedAttribute(this, index.toString());
  }
}

class TestComputedAttribute extends TerraformObjectAttribute {
  public constructor(
    parent: ITerraformAddressable,
    terraformAttribute: string
  ) {
    super(parent, terraformAttribute);
  }
  protected valueToTerraform(): any {
    return undefined;
  }
  public get id() {
    return new TerraformStringAttribute(this, "id");
  }
}
