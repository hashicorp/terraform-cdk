// https://www.terraform.io/docs/providers/awscc/r/frauddetector_event_type.html
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface FrauddetectorEventTypeConfig extends cdktf.TerraformMetaArguments {
  /**
  * The description of the event type.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/frauddetector_event_type.html#description FrauddetectorEventType#description}
  */
  readonly description?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/frauddetector_event_type.html#entity_types FrauddetectorEventType#entity_types}
  */
  readonly entityTypes: FrauddetectorEventTypeEntityTypes[];
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/frauddetector_event_type.html#event_variables FrauddetectorEventType#event_variables}
  */
  readonly eventVariables: FrauddetectorEventTypeEventVariables[];
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/frauddetector_event_type.html#labels FrauddetectorEventType#labels}
  */
  readonly labels: FrauddetectorEventTypeLabels[];
  /**
  * The name for the event type
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/frauddetector_event_type.html#name FrauddetectorEventType#name}
  */
  readonly name: string;
  /**
  * Tags associated with this event type.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/frauddetector_event_type.html#tags FrauddetectorEventType#tags}
  */
  readonly tags?: FrauddetectorEventTypeTags[];
}
export interface FrauddetectorEventTypeEntityTypesTags {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/frauddetector_event_type.html#key FrauddetectorEventType#key}
  */
  readonly key: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/frauddetector_event_type.html#value FrauddetectorEventType#value}
  */
  readonly value: string;
}

export function frauddetectorEventTypeEntityTypesTagsToTerraform(struct?: FrauddetectorEventTypeEntityTypesTags): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    key: cdktf.stringToTerraform(struct!.key),
    value: cdktf.stringToTerraform(struct!.value),
  }
}

export interface FrauddetectorEventTypeEntityTypes {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/frauddetector_event_type.html#arn FrauddetectorEventType#arn}
  */
  readonly arn?: string;
  /**
  * The time when the event type was created.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/frauddetector_event_type.html#created_time FrauddetectorEventType#created_time}
  */
  readonly createdTime?: string;
  /**
  * The description.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/frauddetector_event_type.html#description FrauddetectorEventType#description}
  */
  readonly description?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/frauddetector_event_type.html#inline FrauddetectorEventType#inline}
  */
  readonly inline?: boolean | cdktf.IResolvable;
  /**
  * The time when the event type was last updated.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/frauddetector_event_type.html#last_updated_time FrauddetectorEventType#last_updated_time}
  */
  readonly lastUpdatedTime?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/frauddetector_event_type.html#name FrauddetectorEventType#name}
  */
  readonly name?: string;
  /**
  * Tags associated with this event type.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/frauddetector_event_type.html#tags FrauddetectorEventType#tags}
  */
  readonly tags?: FrauddetectorEventTypeEntityTypesTags[];
}

export function frauddetectorEventTypeEntityTypesToTerraform(struct?: FrauddetectorEventTypeEntityTypes): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    arn: cdktf.stringToTerraform(struct!.arn),
    created_time: cdktf.stringToTerraform(struct!.createdTime),
    description: cdktf.stringToTerraform(struct!.description),
    inline: cdktf.booleanToTerraform(struct!.inline),
    last_updated_time: cdktf.stringToTerraform(struct!.lastUpdatedTime),
    name: cdktf.stringToTerraform(struct!.name),
    tags: cdktf.listMapper(frauddetectorEventTypeEntityTypesTagsToTerraform)(struct!.tags),
  }
}

export interface FrauddetectorEventTypeEventVariablesTags {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/frauddetector_event_type.html#key FrauddetectorEventType#key}
  */
  readonly key: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/frauddetector_event_type.html#value FrauddetectorEventType#value}
  */
  readonly value: string;
}

export function frauddetectorEventTypeEventVariablesTagsToTerraform(struct?: FrauddetectorEventTypeEventVariablesTags): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    key: cdktf.stringToTerraform(struct!.key),
    value: cdktf.stringToTerraform(struct!.value),
  }
}

export interface FrauddetectorEventTypeEventVariables {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/frauddetector_event_type.html#arn FrauddetectorEventType#arn}
  */
  readonly arn?: string;
  /**
  * The time when the event type was created.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/frauddetector_event_type.html#created_time FrauddetectorEventType#created_time}
  */
  readonly createdTime?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/frauddetector_event_type.html#data_source FrauddetectorEventType#data_source}
  */
  readonly dataSource?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/frauddetector_event_type.html#data_type FrauddetectorEventType#data_type}
  */
  readonly dataType?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/frauddetector_event_type.html#default_value FrauddetectorEventType#default_value}
  */
  readonly defaultValue?: string;
  /**
  * The description.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/frauddetector_event_type.html#description FrauddetectorEventType#description}
  */
  readonly description?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/frauddetector_event_type.html#inline FrauddetectorEventType#inline}
  */
  readonly inline?: boolean | cdktf.IResolvable;
  /**
  * The time when the event type was last updated.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/frauddetector_event_type.html#last_updated_time FrauddetectorEventType#last_updated_time}
  */
  readonly lastUpdatedTime?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/frauddetector_event_type.html#name FrauddetectorEventType#name}
  */
  readonly name?: string;
  /**
  * Tags associated with this event type.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/frauddetector_event_type.html#tags FrauddetectorEventType#tags}
  */
  readonly tags?: FrauddetectorEventTypeEventVariablesTags[];
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/frauddetector_event_type.html#variable_type FrauddetectorEventType#variable_type}
  */
  readonly variableType?: string;
}

export function frauddetectorEventTypeEventVariablesToTerraform(struct?: FrauddetectorEventTypeEventVariables): any {
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
    tags: cdktf.listMapper(frauddetectorEventTypeEventVariablesTagsToTerraform)(struct!.tags),
    variable_type: cdktf.stringToTerraform(struct!.variableType),
  }
}

export interface FrauddetectorEventTypeLabelsTags {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/frauddetector_event_type.html#key FrauddetectorEventType#key}
  */
  readonly key: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/frauddetector_event_type.html#value FrauddetectorEventType#value}
  */
  readonly value: string;
}

export function frauddetectorEventTypeLabelsTagsToTerraform(struct?: FrauddetectorEventTypeLabelsTags): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    key: cdktf.stringToTerraform(struct!.key),
    value: cdktf.stringToTerraform(struct!.value),
  }
}

export interface FrauddetectorEventTypeLabels {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/frauddetector_event_type.html#arn FrauddetectorEventType#arn}
  */
  readonly arn?: string;
  /**
  * The time when the event type was created.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/frauddetector_event_type.html#created_time FrauddetectorEventType#created_time}
  */
  readonly createdTime?: string;
  /**
  * The description.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/frauddetector_event_type.html#description FrauddetectorEventType#description}
  */
  readonly description?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/frauddetector_event_type.html#inline FrauddetectorEventType#inline}
  */
  readonly inline?: boolean | cdktf.IResolvable;
  /**
  * The time when the event type was last updated.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/frauddetector_event_type.html#last_updated_time FrauddetectorEventType#last_updated_time}
  */
  readonly lastUpdatedTime?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/frauddetector_event_type.html#name FrauddetectorEventType#name}
  */
  readonly name?: string;
  /**
  * Tags associated with this event type.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/frauddetector_event_type.html#tags FrauddetectorEventType#tags}
  */
  readonly tags?: FrauddetectorEventTypeLabelsTags[];
}

export function frauddetectorEventTypeLabelsToTerraform(struct?: FrauddetectorEventTypeLabels): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    arn: cdktf.stringToTerraform(struct!.arn),
    created_time: cdktf.stringToTerraform(struct!.createdTime),
    description: cdktf.stringToTerraform(struct!.description),
    inline: cdktf.booleanToTerraform(struct!.inline),
    last_updated_time: cdktf.stringToTerraform(struct!.lastUpdatedTime),
    name: cdktf.stringToTerraform(struct!.name),
    tags: cdktf.listMapper(frauddetectorEventTypeLabelsTagsToTerraform)(struct!.tags),
  }
}

export interface FrauddetectorEventTypeTags {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/frauddetector_event_type.html#key FrauddetectorEventType#key}
  */
  readonly key: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/frauddetector_event_type.html#value FrauddetectorEventType#value}
  */
  readonly value: string;
}

export function frauddetectorEventTypeTagsToTerraform(struct?: FrauddetectorEventTypeTags): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    key: cdktf.stringToTerraform(struct!.key),
    value: cdktf.stringToTerraform(struct!.value),
  }
}


/**
* Represents a {@link https://www.terraform.io/docs/providers/awscc/r/frauddetector_event_type.html awscc_frauddetector_event_type}
*/
export class FrauddetectorEventType extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType: string = "awscc_frauddetector_event_type";

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://www.terraform.io/docs/providers/awscc/r/frauddetector_event_type.html awscc_frauddetector_event_type} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options FrauddetectorEventTypeConfig
  */
  public constructor(scope: Construct, id: string, config: FrauddetectorEventTypeConfig) {
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
    this._description = config.description;
    this._entityTypes = config.entityTypes;
    this._eventVariables = config.eventVariables;
    this._labels = config.labels;
    this._name = config.name;
    this._tags = config.tags;
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

  // entity_types - computed: false, optional: false, required: true
  private _entityTypes: FrauddetectorEventTypeEntityTypes[];
  public get entityTypes() {
    return this.interpolationForAttribute('entity_types') as any;
  }
  public set entityTypes(value: FrauddetectorEventTypeEntityTypes[]) {
    this._entityTypes = value;
  }
  // Temporarily expose input value. Use with caution.
  public get entityTypesInput() {
    return this._entityTypes
  }

  // event_variables - computed: false, optional: false, required: true
  private _eventVariables: FrauddetectorEventTypeEventVariables[];
  public get eventVariables() {
    return this.interpolationForAttribute('event_variables') as any;
  }
  public set eventVariables(value: FrauddetectorEventTypeEventVariables[]) {
    this._eventVariables = value;
  }
  // Temporarily expose input value. Use with caution.
  public get eventVariablesInput() {
    return this._eventVariables
  }

  // id - computed: true, optional: false, required: false
  public get id() {
    return this.getStringAttribute('id');
  }

  // labels - computed: false, optional: false, required: true
  private _labels: FrauddetectorEventTypeLabels[];
  public get labels() {
    return this.interpolationForAttribute('labels') as any;
  }
  public set labels(value: FrauddetectorEventTypeLabels[]) {
    this._labels = value;
  }
  // Temporarily expose input value. Use with caution.
  public get labelsInput() {
    return this._labels
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
  private _tags?: FrauddetectorEventTypeTags[];
  public get tags() {
    return this.interpolationForAttribute('tags') as any;
  }
  public set tags(value: FrauddetectorEventTypeTags[] ) {
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
      description: cdktf.stringToTerraform(this._description),
      entity_types: cdktf.listMapper(frauddetectorEventTypeEntityTypesToTerraform)(this._entityTypes),
      event_variables: cdktf.listMapper(frauddetectorEventTypeEventVariablesToTerraform)(this._eventVariables),
      labels: cdktf.listMapper(frauddetectorEventTypeLabelsToTerraform)(this._labels),
      name: cdktf.stringToTerraform(this._name),
      tags: cdktf.listMapper(frauddetectorEventTypeTagsToTerraform)(this._tags),
    };
  }
}
