// https://www.terraform.io/docs/providers/awscc/r/iotevents_input.html
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface IoteventsInputConfig extends cdktf.TerraformMetaArguments {
  /**
  * The definition of the input.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/iotevents_input.html#input_definition IoteventsInput#input_definition}
  */
  readonly inputDefinition: IoteventsInputInputDefinition;
  /**
  * A brief description of the input.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/iotevents_input.html#input_description IoteventsInput#input_description}
  */
  readonly inputDescription?: string;
  /**
  * The name of the input.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/iotevents_input.html#input_name IoteventsInput#input_name}
  */
  readonly inputName?: string;
  /**
  * An array of key-value pairs to apply to this resource.

For more information, see [Tag](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-resource-tags.html).
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/iotevents_input.html#tags IoteventsInput#tags}
  */
  readonly tags?: IoteventsInputTags[];
}
export interface IoteventsInputInputDefinitionAttributes {
  /**
  * An expression that specifies an attribute-value pair in a JSON structure. Use this to specify an attribute from the JSON payload that is made available by the input. Inputs are derived from messages sent to AWS IoT Events (`BatchPutMessage`). Each such message contains a JSON payload. The attribute (and its paired value) specified here are available for use in the `condition` expressions used by detectors.

_Syntax_: `<field-name>.<field-name>...`
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/iotevents_input.html#json_path IoteventsInput#json_path}
  */
  readonly jsonPath: string;
}

export function ioteventsInputInputDefinitionAttributesToTerraform(struct?: IoteventsInputInputDefinitionAttributes): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    json_path: cdktf.stringToTerraform(struct!.jsonPath),
  }
}

export interface IoteventsInputInputDefinition {
  /**
  * The attributes from the JSON payload that are made available by the input. Inputs are derived from messages sent to the AWS IoT Events system using `BatchPutMessage`. Each such message contains a JSON payload, and those attributes (and their paired values) specified here are available for use in the `condition` expressions used by detectors that monitor this input.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/iotevents_input.html#attributes IoteventsInput#attributes}
  */
  readonly attributes: IoteventsInputInputDefinitionAttributes[];
}

export function ioteventsInputInputDefinitionToTerraform(struct?: IoteventsInputInputDefinition): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    attributes: cdktf.listMapper(ioteventsInputInputDefinitionAttributesToTerraform)(struct!.attributes),
  }
}

export interface IoteventsInputTags {
  /**
  * Key of the Tag.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/iotevents_input.html#key IoteventsInput#key}
  */
  readonly key: string;
  /**
  * Value of the Tag.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/iotevents_input.html#value IoteventsInput#value}
  */
  readonly value: string;
}

export function ioteventsInputTagsToTerraform(struct?: IoteventsInputTags): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    key: cdktf.stringToTerraform(struct!.key),
    value: cdktf.stringToTerraform(struct!.value),
  }
}


/**
* Represents a {@link https://www.terraform.io/docs/providers/awscc/r/iotevents_input.html awscc_iotevents_input}
*/
export class IoteventsInput extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType: string = "awscc_iotevents_input";

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://www.terraform.io/docs/providers/awscc/r/iotevents_input.html awscc_iotevents_input} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options IoteventsInputConfig
  */
  public constructor(scope: Construct, id: string, config: IoteventsInputConfig) {
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
    this._inputDefinition = config.inputDefinition;
    this._inputDescription = config.inputDescription;
    this._inputName = config.inputName;
    this._tags = config.tags;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // id - computed: true, optional: false, required: false
  public get id() {
    return this.getStringAttribute('id');
  }

  // input_definition - computed: false, optional: false, required: true
  private _inputDefinition: IoteventsInputInputDefinition;
  public get inputDefinition() {
    return this.interpolationForAttribute('input_definition') as any;
  }
  public set inputDefinition(value: IoteventsInputInputDefinition) {
    this._inputDefinition = value;
  }
  // Temporarily expose input value. Use with caution.
  public get inputDefinitionInput() {
    return this._inputDefinition
  }

  // input_description - computed: false, optional: true, required: false
  private _inputDescription?: string;
  public get inputDescription() {
    return this.getStringAttribute('input_description');
  }
  public set inputDescription(value: string ) {
    this._inputDescription = value;
  }
  public resetInputDescription() {
    this._inputDescription = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get inputDescriptionInput() {
    return this._inputDescription
  }

  // input_name - computed: true, optional: true, required: false
  private _inputName?: string;
  public get inputName() {
    return this.getStringAttribute('input_name');
  }
  public set inputName(value: string) {
    this._inputName = value;
  }
  public resetInputName() {
    this._inputName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get inputNameInput() {
    return this._inputName
  }

  // tags - computed: false, optional: true, required: false
  private _tags?: IoteventsInputTags[];
  public get tags() {
    return this.interpolationForAttribute('tags') as any;
  }
  public set tags(value: IoteventsInputTags[] ) {
    this._tags = value;
  }
  public resetTags() {
    this._tags = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tagsInput() {
    return this._tags
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      input_definition: ioteventsInputInputDefinitionToTerraform(this._inputDefinition),
      input_description: cdktf.stringToTerraform(this._inputDescription),
      input_name: cdktf.stringToTerraform(this._inputName),
      tags: cdktf.listMapper(ioteventsInputTagsToTerraform)(this._tags),
    };
  }
}
