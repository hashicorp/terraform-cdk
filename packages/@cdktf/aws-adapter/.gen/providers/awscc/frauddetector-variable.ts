// https://www.terraform.io/docs/providers/awscc/r/frauddetector_variable.html
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface FrauddetectorVariableConfig extends cdktf.TerraformMetaArguments {
  /**
  * The source of the data.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/frauddetector_variable.html#data_source FrauddetectorVariable#data_source}
  */
  readonly dataSource: string;
  /**
  * The data type.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/frauddetector_variable.html#data_type FrauddetectorVariable#data_type}
  */
  readonly dataType: string;
  /**
  * The default value for the variable when no value is received.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/frauddetector_variable.html#default_value FrauddetectorVariable#default_value}
  */
  readonly defaultValue: string;
  /**
  * The description.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/frauddetector_variable.html#description FrauddetectorVariable#description}
  */
  readonly description?: string;
  /**
  * The name of the variable.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/frauddetector_variable.html#name FrauddetectorVariable#name}
  */
  readonly name: string;
  /**
  * Tags associated with this variable.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/frauddetector_variable.html#tags FrauddetectorVariable#tags}
  */
  readonly tags?: FrauddetectorVariableTags[];
  /**
  * The variable type. For more information see https://docs.aws.amazon.com/frauddetector/latest/ug/create-a-variable.html#variable-types
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/frauddetector_variable.html#variable_type FrauddetectorVariable#variable_type}
  */
  readonly variableType?: string;
}
export interface FrauddetectorVariableTags {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/frauddetector_variable.html#key FrauddetectorVariable#key}
  */
  readonly key: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/frauddetector_variable.html#value FrauddetectorVariable#value}
  */
  readonly value: string;
}

export function frauddetectorVariableTagsToTerraform(struct?: FrauddetectorVariableTags): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    key: cdktf.stringToTerraform(struct!.key),
    value: cdktf.stringToTerraform(struct!.value),
  }
}


/**
* Represents a {@link https://www.terraform.io/docs/providers/awscc/r/frauddetector_variable.html awscc_frauddetector_variable}
*/
export class FrauddetectorVariable extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType: string = "awscc_frauddetector_variable";

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://www.terraform.io/docs/providers/awscc/r/frauddetector_variable.html awscc_frauddetector_variable} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options FrauddetectorVariableConfig
  */
  public constructor(scope: Construct, id: string, config: FrauddetectorVariableConfig) {
    super(scope, id, {
      terraformResourceType: 'awscc_frauddetector_variable',
      terraformGeneratorMetadata: {
        providerName: 'awscc'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle
    });
    this._dataSource = config.dataSource;
    this._dataType = config.dataType;
    this._defaultValue = config.defaultValue;
    this._description = config.description;
    this._name = config.name;
    this._tags = config.tags;
    this._variableType = config.variableType;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // arn - computed: true, optional: false, required: false
  public get arn() {
    return this.getStringAttribute('arn');
  }

  // created_time - computed: true, optional: false, required: false
  public get createdTime() {
    return this.getStringAttribute('created_time');
  }

  // data_source - computed: false, optional: false, required: true
  private _dataSource: string;
  public get dataSource() {
    return this.getStringAttribute('data_source');
  }
  public set dataSource(value: string) {
    this._dataSource = value;
  }
  // Temporarily expose input value. Use with caution.
  public get dataSourceInput() {
    return this._dataSource
  }

  // data_type - computed: false, optional: false, required: true
  private _dataType: string;
  public get dataType() {
    return this.getStringAttribute('data_type');
  }
  public set dataType(value: string) {
    this._dataType = value;
  }
  // Temporarily expose input value. Use with caution.
  public get dataTypeInput() {
    return this._dataType
  }

  // default_value - computed: false, optional: false, required: true
  private _defaultValue: string;
  public get defaultValue() {
    return this.getStringAttribute('default_value');
  }
  public set defaultValue(value: string) {
    this._defaultValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get defaultValueInput() {
    return this._defaultValue
  }

  // description - computed: false, optional: true, required: false
  private _description?: string;
  public get description() {
    return this.getStringAttribute('description');
  }
  public set description(value: string ) {
    this._description = value;
  }
  public resetDescription() {
    this._description = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get descriptionInput() {
    return this._description
  }

  // id - computed: true, optional: false, required: false
  public get id() {
    return this.getStringAttribute('id');
  }

  // last_updated_time - computed: true, optional: false, required: false
  public get lastUpdatedTime() {
    return this.getStringAttribute('last_updated_time');
  }

  // name - computed: false, optional: false, required: true
  private _name: string;
  public get name() {
    return this.getStringAttribute('name');
  }
  public set name(value: string) {
    this._name = value;
  }
  // Temporarily expose input value. Use with caution.
  public get nameInput() {
    return this._name
  }

  // tags - computed: false, optional: true, required: false
  private _tags?: FrauddetectorVariableTags[];
  public get tags() {
    return this.interpolationForAttribute('tags') as any;
  }
  public set tags(value: FrauddetectorVariableTags[] ) {
    this._tags = value;
  }
  public resetTags() {
    this._tags = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tagsInput() {
    return this._tags
  }

  // variable_type - computed: false, optional: true, required: false
  private _variableType?: string;
  public get variableType() {
    return this.getStringAttribute('variable_type');
  }
  public set variableType(value: string ) {
    this._variableType = value;
  }
  public resetVariableType() {
    this._variableType = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get variableTypeInput() {
    return this._variableType
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      data_source: cdktf.stringToTerraform(this._dataSource),
      data_type: cdktf.stringToTerraform(this._dataType),
      default_value: cdktf.stringToTerraform(this._defaultValue),
      description: cdktf.stringToTerraform(this._description),
      name: cdktf.stringToTerraform(this._name),
      tags: cdktf.listMapper(frauddetectorVariableTagsToTerraform)(this._tags),
      variable_type: cdktf.stringToTerraform(this._variableType),
    };
  }
}
