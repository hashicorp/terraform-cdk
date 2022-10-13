// Copyright (c) HashiCorp, Inc
// SPDX-License-Identifier: MPL-2.0
import { Construct } from "constructs";
import {
  TerraformDataSource,
  TerraformMetaArguments,
  StringMap,
  NumberMap,
  BooleanMap,
  AnyMap,
  ComplexObject,
  ComplexList,
  IResolvable,
} from "../../lib";
import { TestProviderMetadata } from "./provider";
import { listMapper, stringToTerraform } from "../../lib/runtime";

export interface TestDataSourceConfig extends TerraformMetaArguments {
  name: string;
  listBlock?: IResolvable;
}

export class TestDataSource extends TerraformDataSource {
  public static readonly tfResourceType: string = "test_data_source";
  public name: string;
  public listBlock?: IResolvable; // real life bindings also allow an interface here, but we don't use that in our tests using this

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
      forEach: config.forEach,
    });
    this.name = config.name;
    this.listBlock = config.listBlock;
  }

  public get complexComputedList() {
    return new TestComplexList(this, "complex_computed_list", false);
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

  public anyMap(key: string) {
    return new AnyMap(this, "any_map").lookup(key);
  }

  protected synthesizeAttributes(): { [p: string]: any } {
    return {
      name: stringToTerraform(this.name),
      list_block: listMapper((a) => a, true)(this.listBlock), // identity function to skip writing a toTerraform function
    };
  }
}

class TestComplexObject extends ComplexObject {
  public get id() {
    return this.getStringAttribute("id");
  }
}

class TestComplexList extends ComplexList {
  public get(index: number): TestComplexObject {
    return new TestComplexObject(
      this.terraformResource,
      this.terraformAttribute,
      this.wrapsSet,
      index
    );
  }
}
