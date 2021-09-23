// https://www.terraform.io/docs/providers/awscc/d/iotevents_input.html
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DataAwsccIoteventsInputConfig extends cdktf.TerraformMetaArguments {
  /**
  * Uniquely identifies the resource.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/d/iotevents_input.html#id DataAwsccIoteventsInput#id}
  */
  readonly id: string;
}
export class DataAwsccIoteventsInputInputDefinitionAttributes extends cdktf.ComplexComputedList {

  // json_path - computed: true, optional: false, required: false
  public get jsonPath() {
    return this.getStringAttribute('json_path');
  }
}

export function dataAwsccIoteventsInputInputDefinitionAttributesToTerraform(struct?: DataAwsccIoteventsInputInputDefinitionAttributes): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    json_path: cdktf.stringToTerraform(struct!.jsonPath),
  }
}

export class DataAwsccIoteventsInputInputDefinition extends cdktf.ComplexComputedList {

  // attributes - computed: true, optional: false, required: false
  public get attributes() {
    return this.interpolationForAttribute('attributes') as any;
  }
}

export function dataAwsccIoteventsInputInputDefinitionToTerraform(struct?: DataAwsccIoteventsInputInputDefinition): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    attributes: cdktf.listMapper(dataAwsccIoteventsInputInputDefinitionAttributesToTerraform)(struct!.attributes),
  }
}

export class DataAwsccIoteventsInputTags extends cdktf.ComplexComputedList {

  // key - computed: true, optional: false, required: false
  public get key() {
    return this.getStringAttribute('key');
  }

  // value - computed: true, optional: false, required: false
  public get value() {
    return this.getStringAttribute('value');
  }
}

export function dataAwsccIoteventsInputTagsToTerraform(struct?: DataAwsccIoteventsInputTags): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    key: cdktf.stringToTerraform(struct!.key),
    value: cdktf.stringToTerraform(struct!.value),
  }
}


/**
* Represents a {@link https://www.terraform.io/docs/providers/awscc/d/iotevents_input.html awscc_iotevents_input}
*/
export class DataAwsccIoteventsInput extends cdktf.TerraformDataSource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType: string = "awscc_iotevents_input";

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://www.terraform.io/docs/providers/awscc/d/iotevents_input.html awscc_iotevents_input} Data Source
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DataAwsccIoteventsInputConfig
  */
  public constructor(scope: Construct, id: string, config: DataAwsccIoteventsInputConfig) {
    super(scope, id, {
      terraformResourceType: 'awscc_iotevents_input',
      terraformGeneratorMetadata: {
        providerName: 'awscc'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle
    });
    this._id = config.id;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // id - computed: false, optional: false, required: true
  private _id: string;
  public get id() {
    return this.getStringAttribute('id');
  }
  public set id(value: string) {
    this._id = value;
  }
  // Temporarily expose input value. Use with caution.
  public get idInput() {
    return this._id
  }

  // input_definition - computed: true, optional: false, required: false
  public get inputDefinition() {
    return this.interpolationForAttribute('input_definition') as any;
  }

  // input_description - computed: true, optional: false, required: false
  public get inputDescription() {
    return this.getStringAttribute('input_description');
  }

  // input_name - computed: true, optional: false, required: false
  public get inputName() {
    return this.getStringAttribute('input_name');
  }

  // tags - computed: true, optional: false, required: false
  public get tags() {
    return this.interpolationForAttribute('tags') as any;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      id: cdktf.stringToTerraform(this._id),
    };
  }
}
