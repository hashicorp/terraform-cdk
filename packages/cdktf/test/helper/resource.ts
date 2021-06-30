import {
  TerraformResource,
  TerraformMetaArguments,
  ITerraformAddressable,
} from "../../lib";
import { Construct } from "constructs";
import { TestProviderMetadata } from "./provider";
import {
  TerraformString,
  TerraformStringAttribute,
  TerraformStringList,
  TerraformStringListAttribute,
  TerraformObjectAttribute,
  TerraformListAttribute,
} from "../../lib/attributes";

export interface TestResourceConfig extends TerraformMetaArguments {
  name: TerraformString;
  tags?: { [key: string]: string };
  nestedType?: { [key: string]: string };
}

export class TestResource extends TerraformResource {
  public tags?: { [key: string]: string };
  public nestedType?: { [key: string]: string };

  constructor(scope: Construct, id: string, config: TestResourceConfig) {
    super(scope, id, {
      terraformResourceType: "test_resource",
      terraformGeneratorMetadata: {
        providerName: TestProviderMetadata.TYPE,
        providerVersionConstraint: "~> 2.0",
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
    });

    this.putName(config.name);
    this.putNames(new TerraformStringListAttribute(this, "names"));
    this.tags = config.tags;
    this.nestedType = config.nestedType;
  }

  private _name!: TerraformStringAttribute;
  public get name(): TerraformStringAttribute {
    return this._name;
  }
  public putName(value: TerraformString) {
    this._name = TerraformStringAttribute.construct(this, "name", value);
  }

  private _names!: TerraformStringListAttribute;
  public get names(): TerraformStringListAttribute {
    return this._names;
  }
  public putNames(value: TerraformStringList | undefined) {
    if (value === undefined) {
      this._names.resetInternal();
    } else {
      this._names = TerraformStringListAttribute.construct(
        this,
        "names",
        value
      );
    }
  }

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      name: this._name.toTerraform(),
      names: this._names.toTerraform(),
      tags: this.tags,
      nested_type: this.nestedType, // eslint-disable-line @typescript-eslint/camelcase
    };
  }
}

export class OtherTestResource extends TerraformResource {
  constructor(scope: Construct, id: string, config: TerraformMetaArguments) {
    super(scope, id, {
      terraformResourceType: "other_test_resource",
      terraformGeneratorMetadata: {
        providerName: TestProviderMetadata.TYPE,
        providerVersionConstraint: "~> 2.0",
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
    });
  }

  public get names() {
    return new TerraformStringListAttribute(this, "names");
  }

  public complexComputedList(index: number) {
    return new TestComplexComputedList(this, "complex_computed_list").get(
      index
    );
  }

  protected synthesizeAttributes(): { [name: string]: any } {
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
