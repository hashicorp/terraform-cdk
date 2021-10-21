import {
  TerraformResource,
  TerraformMetaArguments,
  ComplexComputedList,
} from "../../lib";
import { Construct } from "constructs";
import { TestProviderMetadata } from "./provider";
import { stringToTerraform } from "../../lib/runtime";

export interface TestResourceConfig extends TerraformMetaArguments {
  name: string;
  tags?: { [key: string]: string };
  nestedType?: { [key: string]: string };
}

export class TestResource extends TerraformResource {
  public static readonly tfResourceType: string = "test_resource";
  public name: string;
  public names?: string[];
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

    this.name = config.name;
    this.tags = config.tags;
    this.nestedType = config.nestedType;
  }

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      name: this.name,
      names: this.names,
      tags: this.tags,
      nested_type: this.nestedType,
    };
  }

  public get stringValue() {
    return this.getStringAttribute("string_value");
  }

  public get numericValue() {
    return this.getNumberAttribute("numeric_value");
  }

  public get listValue() {
    return this.getListAttribute("list_value");
  }

  public get anyList() {
    return this.interpolationForAttribute("any_list") as any;
  }
}

export class OtherTestResource extends TerraformResource {
  public static readonly tfResourceType: string = "other_test_resource";
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

  public get names(): string[] {
    return this.getListAttribute("names");
  }

  public complexComputedList(index: string) {
    return new TestComplexComputedList(this, "complex_computed_list", index);
  }

  protected synthesizeAttributes(): { [name: string]: any } {
    return {};
  }
}

class TestComplexComputedList extends ComplexComputedList {
  public get id() {
    return this.getStringAttribute("id");
  }
}

// Generated Docker image to test real-world scenarios
export class DockerImage extends TerraformResource {
  public static readonly tfResourceType: string = "docker_image";
  private _name: string;
  public constructor(scope: Construct, id: string, config: { name: string }) {
    super(scope, id, {
      terraformResourceType: "docker_image",
      terraformGeneratorMetadata: {
        providerName: "docker",
      },
    });

    this._name = config.name;
  }

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      name: stringToTerraform(this._name),
    };
  }
}
