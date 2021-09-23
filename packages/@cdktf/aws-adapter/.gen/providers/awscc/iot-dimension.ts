// https://www.terraform.io/docs/providers/awscc/r/iot_dimension.html
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface IotDimensionConfig extends cdktf.TerraformMetaArguments {
  /**
  * A unique identifier for the dimension.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/iot_dimension.html#name IotDimension#name}
  */
  readonly name?: string;
  /**
  * Specifies the value or list of values for the dimension.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/iot_dimension.html#string_values IotDimension#string_values}
  */
  readonly stringValues: string[];
  /**
  * Metadata that can be used to manage the dimension.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/iot_dimension.html#tags IotDimension#tags}
  */
  readonly tags?: IotDimensionTags[];
  /**
  * Specifies the type of the dimension.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/iot_dimension.html#type IotDimension#type}
  */
  readonly type: string;
}
export interface IotDimensionTags {
  /**
  * The tag's key.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/iot_dimension.html#key IotDimension#key}
  */
  readonly key: string;
  /**
  * The tag's value.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/iot_dimension.html#value IotDimension#value}
  */
  readonly value: string;
}

export function iotDimensionTagsToTerraform(struct?: IotDimensionTags): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    key: cdktf.stringToTerraform(struct!.key),
    value: cdktf.stringToTerraform(struct!.value),
  }
}


/**
* Represents a {@link https://www.terraform.io/docs/providers/awscc/r/iot_dimension.html awscc_iot_dimension}
*/
export class IotDimension extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType: string = "awscc_iot_dimension";

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://www.terraform.io/docs/providers/awscc/r/iot_dimension.html awscc_iot_dimension} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options IotDimensionConfig
  */
  public constructor(scope: Construct, id: string, config: IotDimensionConfig) {
    super(scope, id, {
      terraformResourceType: 'awscc_iot_dimension',
      terraformGeneratorMetadata: {
        providerName: 'awscc'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle
    });
    this._name = config.name;
    this._stringValues = config.stringValues;
    this._tags = config.tags;
    this._type = config.type;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // arn - computed: true, optional: false, required: false
  public get arn() {
    return this.getStringAttribute('arn');
  }

  // id - computed: true, optional: false, required: false
  public get id() {
    return this.getStringAttribute('id');
  }

  // name - computed: true, optional: true, required: false
  private _name?: string;
  public get name() {
    return this.getStringAttribute('name');
  }
  public set name(value: string) {
    this._name = value;
  }
  public resetName() {
    this._name = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get nameInput() {
    return this._name
  }

  // string_values - computed: false, optional: false, required: true
  private _stringValues: string[];
  public get stringValues() {
    return this.getListAttribute('string_values');
  }
  public set stringValues(value: string[]) {
    this._stringValues = value;
  }
  // Temporarily expose input value. Use with caution.
  public get stringValuesInput() {
    return this._stringValues
  }

  // tags - computed: false, optional: true, required: false
  private _tags?: IotDimensionTags[];
  public get tags() {
    return this.interpolationForAttribute('tags') as any;
  }
  public set tags(value: IotDimensionTags[] ) {
    this._tags = value;
  }
  public resetTags() {
    this._tags = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tagsInput() {
    return this._tags
  }

  // type - computed: false, optional: false, required: true
  private _type: string;
  public get type() {
    return this.getStringAttribute('type');
  }
  public set type(value: string) {
    this._type = value;
  }
  // Temporarily expose input value. Use with caution.
  public get typeInput() {
    return this._type
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      name: cdktf.stringToTerraform(this._name),
      string_values: cdktf.listMapper(cdktf.stringToTerraform)(this._stringValues),
      tags: cdktf.listMapper(iotDimensionTagsToTerraform)(this._tags),
      type: cdktf.stringToTerraform(this._type),
    };
  }
}
