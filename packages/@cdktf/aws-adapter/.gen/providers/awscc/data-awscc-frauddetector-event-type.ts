// https://www.terraform.io/docs/providers/awscc/d/frauddetector_event_type.html
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DataAwsccFrauddetectorEventTypeConfig extends cdktf.TerraformMetaArguments {
  /**
  * Uniquely identifies the resource.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/d/frauddetector_event_type.html#id DataAwsccFrauddetectorEventType#id}
  */
  readonly id: string;
}
export class DataAwsccFrauddetectorEventTypeEntityTypesTags extends cdktf.ComplexComputedList {

  // key - computed: true, optional: false, required: false
  public get key() {
    return this.getStringAttribute('key');
  }

  // value - computed: true, optional: false, required: false
  public get value() {
    return this.getStringAttribute('value');
  }
}

export function dataAwsccFrauddetectorEventTypeEntityTypesTagsToTerraform(struct?: DataAwsccFrauddetectorEventTypeEntityTypesTags): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    key: cdktf.stringToTerraform(struct!.key),
    value: cdktf.stringToTerraform(struct!.value),
  }
}

export class DataAwsccFrauddetectorEventTypeEntityTypes extends cdktf.ComplexComputedList {

  // arn - computed: true, optional: false, required: false
  public get arn() {
    return this.getStringAttribute('arn');
  }

  // created_time - computed: true, optional: false, required: false
  public get createdTime() {
    return this.getStringAttribute('created_time');
  }

  // description - computed: true, optional: false, required: false
  public get description() {
    return this.getStringAttribute('description');
  }

  // inline - computed: true, optional: false, required: false
  public get inline() {
    return this.getBooleanAttribute('inline');
  }

  // last_updated_time - computed: true, optional: false, required: false
  public get lastUpdatedTime() {
    return this.getStringAttribute('last_updated_time');
  }

  // name - computed: true, optional: false, required: false
  public get name() {
    return this.getStringAttribute('name');
  }

  // tags - computed: true, optional: false, required: false
  public get tags() {
    return this.interpolationForAttribute('tags') as any;
  }
}

export function dataAwsccFrauddetectorEventTypeEntityTypesToTerraform(struct?: DataAwsccFrauddetectorEventTypeEntityTypes): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    arn: cdktf.stringToTerraform(struct!.arn),
    created_time: cdktf.stringToTerraform(struct!.createdTime),
    description: cdktf.stringToTerraform(struct!.description),
    inline: cdktf.booleanToTerraform(struct!.inline),
    last_updated_time: cdktf.stringToTerraform(struct!.lastUpdatedTime),
    name: cdktf.stringToTerraform(struct!.name),
    tags: cdktf.listMapper(dataAwsccFrauddetectorEventTypeEntityTypesTagsToTerraform)(struct!.tags),
  }
}

export class DataAwsccFrauddetectorEventTypeEventVariablesTags extends cdktf.ComplexComputedList {

  // key - computed: true, optional: false, required: false
  public get key() {
    return this.getStringAttribute('key');
  }

  // value - computed: true, optional: false, required: false
  public get value() {
    return this.getStringAttribute('value');
  }
}

export function dataAwsccFrauddetectorEventTypeEventVariablesTagsToTerraform(struct?: DataAwsccFrauddetectorEventTypeEventVariablesTags): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    key: cdktf.stringToTerraform(struct!.key),
    value: cdktf.stringToTerraform(struct!.value),
  }
}

export class DataAwsccFrauddetectorEventTypeEventVariables extends cdktf.ComplexComputedList {

  // arn - computed: true, optional: false, required: false
  public get arn() {
    return this.getStringAttribute('arn');
  }

  // created_time - computed: true, optional: false, required: false
  public get createdTime() {
    return this.getStringAttribute('created_time');
  }

  // data_source - computed: true, optional: false, required: false
  public get dataSource() {
    return this.getStringAttribute('data_source');
  }

  // data_type - computed: true, optional: false, required: false
  public get dataType() {
    return this.getStringAttribute('data_type');
  }

  // default_value - computed: true, optional: false, required: false
  public get defaultValue() {
    return this.getStringAttribute('default_value');
  }

  // description - computed: true, optional: false, required: false
  public get description() {
    return this.getStringAttribute('description');
  }

  // inline - computed: true, optional: false, required: false
  public get inline() {
    return this.getBooleanAttribute('inline');
  }

  // last_updated_time - computed: true, optional: false, required: false
  public get lastUpdatedTime() {
    return this.getStringAttribute('last_updated_time');
  }

  // name - computed: true, optional: false, required: false
  public get name() {
    return this.getStringAttribute('name');
  }

  // tags - computed: true, optional: false, required: false
  public get tags() {
    return this.interpolationForAttribute('tags') as any;
  }

  // variable_type - computed: true, optional: false, required: false
  public get variableType() {
    return this.getStringAttribute('variable_type');
  }
}

export function dataAwsccFrauddetectorEventTypeEventVariablesToTerraform(struct?: DataAwsccFrauddetectorEventTypeEventVariables): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    arn: cdktf.stringToTerraform(struct!.arn),
    created_time: cdktf.stringToTerraform(struct!.createdTime),
    data_source: cdktf.stringToTerraform(struct!.dataSource),
    data_type: cdktf.stringToTerraform(struct!.dataType),
    default_value: cdktf.stringToTerraform(struct!.defaultValue),
    description: cdktf.stringToTerraform(struct!.description),
    inline: cdktf.booleanToTerraform(struct!.inline),
    last_updated_time: cdktf.stringToTerraform(struct!.lastUpdatedTime),
    name: cdktf.stringToTerraform(struct!.name),
    tags: cdktf.listMapper(dataAwsccFrauddetectorEventTypeEventVariablesTagsToTerraform)(struct!.tags),
    variable_type: cdktf.stringToTerraform(struct!.variableType),
  }
}

export class DataAwsccFrauddetectorEventTypeLabelsTags extends cdktf.ComplexComputedList {

  // key - computed: true, optional: false, required: false
  public get key() {
    return this.getStringAttribute('key');
  }

  // value - computed: true, optional: false, required: false
  public get value() {
    return this.getStringAttribute('value');
  }
}

export function dataAwsccFrauddetectorEventTypeLabelsTagsToTerraform(struct?: DataAwsccFrauddetectorEventTypeLabelsTags): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    key: cdktf.stringToTerraform(struct!.key),
    value: cdktf.stringToTerraform(struct!.value),
  }
}

export class DataAwsccFrauddetectorEventTypeLabels extends cdktf.ComplexComputedList {

  // arn - computed: true, optional: false, required: false
  public get arn() {
    return this.getStringAttribute('arn');
  }

  // created_time - computed: true, optional: false, required: false
  public get createdTime() {
    return this.getStringAttribute('created_time');
  }

  // description - computed: true, optional: false, required: false
  public get description() {
    return this.getStringAttribute('description');
  }

  // inline - computed: true, optional: false, required: false
  public get inline() {
    return this.getBooleanAttribute('inline');
  }

  // last_updated_time - computed: true, optional: false, required: false
  public get lastUpdatedTime() {
    return this.getStringAttribute('last_updated_time');
  }

  // name - computed: true, optional: false, required: false
  public get name() {
    return this.getStringAttribute('name');
  }

  // tags - computed: true, optional: false, required: false
  public get tags() {
    return this.interpolationForAttribute('tags') as any;
  }
}

export function dataAwsccFrauddetectorEventTypeLabelsToTerraform(struct?: DataAwsccFrauddetectorEventTypeLabels): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    arn: cdktf.stringToTerraform(struct!.arn),
    created_time: cdktf.stringToTerraform(struct!.createdTime),
    description: cdktf.stringToTerraform(struct!.description),
    inline: cdktf.booleanToTerraform(struct!.inline),
    last_updated_time: cdktf.stringToTerraform(struct!.lastUpdatedTime),
    name: cdktf.stringToTerraform(struct!.name),
    tags: cdktf.listMapper(dataAwsccFrauddetectorEventTypeLabelsTagsToTerraform)(struct!.tags),
  }
}

export class DataAwsccFrauddetectorEventTypeTags extends cdktf.ComplexComputedList {

  // key - computed: true, optional: false, required: false
  public get key() {
    return this.getStringAttribute('key');
  }

  // value - computed: true, optional: false, required: false
  public get value() {
    return this.getStringAttribute('value');
  }
}

export function dataAwsccFrauddetectorEventTypeTagsToTerraform(struct?: DataAwsccFrauddetectorEventTypeTags): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    key: cdktf.stringToTerraform(struct!.key),
    value: cdktf.stringToTerraform(struct!.value),
  }
}


/**
* Represents a {@link https://www.terraform.io/docs/providers/awscc/d/frauddetector_event_type.html awscc_frauddetector_event_type}
*/
export class DataAwsccFrauddetectorEventType extends cdktf.TerraformDataSource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType: string = "awscc_frauddetector_event_type";

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://www.terraform.io/docs/providers/awscc/d/frauddetector_event_type.html awscc_frauddetector_event_type} Data Source
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DataAwsccFrauddetectorEventTypeConfig
  */
  public constructor(scope: Construct, id: string, config: DataAwsccFrauddetectorEventTypeConfig) {
    super(scope, id, {
      terraformResourceType: 'awscc_frauddetector_event_type',
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

  // arn - computed: true, optional: false, required: false
  public get arn() {
    return this.getStringAttribute('arn');
  }

  // created_time - computed: true, optional: false, required: false
  public get createdTime() {
    return this.getStringAttribute('created_time');
  }

  // description - computed: true, optional: false, required: false
  public get description() {
    return this.getStringAttribute('description');
  }

  // entity_types - computed: true, optional: false, required: false
  public get entityTypes() {
    return this.interpolationForAttribute('entity_types') as any;
  }

  // event_variables - computed: true, optional: false, required: false
  public get eventVariables() {
    return this.interpolationForAttribute('event_variables') as any;
  }

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

  // labels - computed: true, optional: false, required: false
  public get labels() {
    return this.interpolationForAttribute('labels') as any;
  }

  // last_updated_time - computed: true, optional: false, required: false
  public get lastUpdatedTime() {
    return this.getStringAttribute('last_updated_time');
  }

  // name - computed: true, optional: false, required: false
  public get name() {
    return this.getStringAttribute('name');
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
