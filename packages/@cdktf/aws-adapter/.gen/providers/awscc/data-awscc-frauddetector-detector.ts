// https://www.terraform.io/docs/providers/awscc/d/frauddetector_detector.html
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DataAwsccFrauddetectorDetectorConfig extends cdktf.TerraformMetaArguments {
  /**
  * Uniquely identifies the resource.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/d/frauddetector_detector.html#id DataAwsccFrauddetectorDetector#id}
  */
  readonly id: string;
}
export class DataAwsccFrauddetectorDetectorAssociatedModels extends cdktf.ComplexComputedList {

  // arn - computed: true, optional: false, required: false
  public get arn() {
    return this.getStringAttribute('arn');
  }
}

export function dataAwsccFrauddetectorDetectorAssociatedModelsToTerraform(struct?: DataAwsccFrauddetectorDetectorAssociatedModels): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    arn: cdktf.stringToTerraform(struct!.arn),
  }
}

export class DataAwsccFrauddetectorDetectorEventTypeEntityTypesTags extends cdktf.ComplexComputedList {

  // key - computed: true, optional: false, required: false
  public get key() {
    return this.getStringAttribute('key');
  }

  // value - computed: true, optional: false, required: false
  public get value() {
    return this.getStringAttribute('value');
  }
}

export function dataAwsccFrauddetectorDetectorEventTypeEntityTypesTagsToTerraform(struct?: DataAwsccFrauddetectorDetectorEventTypeEntityTypesTags): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    key: cdktf.stringToTerraform(struct!.key),
    value: cdktf.stringToTerraform(struct!.value),
  }
}

export class DataAwsccFrauddetectorDetectorEventTypeEntityTypes extends cdktf.ComplexComputedList {

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

export function dataAwsccFrauddetectorDetectorEventTypeEntityTypesToTerraform(struct?: DataAwsccFrauddetectorDetectorEventTypeEntityTypes): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    arn: cdktf.stringToTerraform(struct!.arn),
    created_time: cdktf.stringToTerraform(struct!.createdTime),
    description: cdktf.stringToTerraform(struct!.description),
    inline: cdktf.booleanToTerraform(struct!.inline),
    last_updated_time: cdktf.stringToTerraform(struct!.lastUpdatedTime),
    name: cdktf.stringToTerraform(struct!.name),
    tags: cdktf.listMapper(dataAwsccFrauddetectorDetectorEventTypeEntityTypesTagsToTerraform)(struct!.tags),
  }
}

export class DataAwsccFrauddetectorDetectorEventTypeEventVariablesTags extends cdktf.ComplexComputedList {

  // key - computed: true, optional: false, required: false
  public get key() {
    return this.getStringAttribute('key');
  }

  // value - computed: true, optional: false, required: false
  public get value() {
    return this.getStringAttribute('value');
  }
}

export function dataAwsccFrauddetectorDetectorEventTypeEventVariablesTagsToTerraform(struct?: DataAwsccFrauddetectorDetectorEventTypeEventVariablesTags): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    key: cdktf.stringToTerraform(struct!.key),
    value: cdktf.stringToTerraform(struct!.value),
  }
}

export class DataAwsccFrauddetectorDetectorEventTypeEventVariables extends cdktf.ComplexComputedList {

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

export function dataAwsccFrauddetectorDetectorEventTypeEventVariablesToTerraform(struct?: DataAwsccFrauddetectorDetectorEventTypeEventVariables): any {
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
    tags: cdktf.listMapper(dataAwsccFrauddetectorDetectorEventTypeEventVariablesTagsToTerraform)(struct!.tags),
    variable_type: cdktf.stringToTerraform(struct!.variableType),
  }
}

export class DataAwsccFrauddetectorDetectorEventTypeLabelsTags extends cdktf.ComplexComputedList {

  // key - computed: true, optional: false, required: false
  public get key() {
    return this.getStringAttribute('key');
  }

  // value - computed: true, optional: false, required: false
  public get value() {
    return this.getStringAttribute('value');
  }
}

export function dataAwsccFrauddetectorDetectorEventTypeLabelsTagsToTerraform(struct?: DataAwsccFrauddetectorDetectorEventTypeLabelsTags): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    key: cdktf.stringToTerraform(struct!.key),
    value: cdktf.stringToTerraform(struct!.value),
  }
}

export class DataAwsccFrauddetectorDetectorEventTypeLabels extends cdktf.ComplexComputedList {

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

export function dataAwsccFrauddetectorDetectorEventTypeLabelsToTerraform(struct?: DataAwsccFrauddetectorDetectorEventTypeLabels): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    arn: cdktf.stringToTerraform(struct!.arn),
    created_time: cdktf.stringToTerraform(struct!.createdTime),
    description: cdktf.stringToTerraform(struct!.description),
    inline: cdktf.booleanToTerraform(struct!.inline),
    last_updated_time: cdktf.stringToTerraform(struct!.lastUpdatedTime),
    name: cdktf.stringToTerraform(struct!.name),
    tags: cdktf.listMapper(dataAwsccFrauddetectorDetectorEventTypeLabelsTagsToTerraform)(struct!.tags),
  }
}

export class DataAwsccFrauddetectorDetectorEventTypeTags extends cdktf.ComplexComputedList {

  // key - computed: true, optional: false, required: false
  public get key() {
    return this.getStringAttribute('key');
  }

  // value - computed: true, optional: false, required: false
  public get value() {
    return this.getStringAttribute('value');
  }
}

export function dataAwsccFrauddetectorDetectorEventTypeTagsToTerraform(struct?: DataAwsccFrauddetectorDetectorEventTypeTags): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    key: cdktf.stringToTerraform(struct!.key),
    value: cdktf.stringToTerraform(struct!.value),
  }
}

export class DataAwsccFrauddetectorDetectorEventType extends cdktf.ComplexComputedList {

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

  // inline - computed: true, optional: false, required: false
  public get inline() {
    return this.getBooleanAttribute('inline');
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
}

export function dataAwsccFrauddetectorDetectorEventTypeToTerraform(struct?: DataAwsccFrauddetectorDetectorEventType): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    arn: cdktf.stringToTerraform(struct!.arn),
    created_time: cdktf.stringToTerraform(struct!.createdTime),
    description: cdktf.stringToTerraform(struct!.description),
    entity_types: cdktf.listMapper(dataAwsccFrauddetectorDetectorEventTypeEntityTypesToTerraform)(struct!.entityTypes),
    event_variables: cdktf.listMapper(dataAwsccFrauddetectorDetectorEventTypeEventVariablesToTerraform)(struct!.eventVariables),
    inline: cdktf.booleanToTerraform(struct!.inline),
    labels: cdktf.listMapper(dataAwsccFrauddetectorDetectorEventTypeLabelsToTerraform)(struct!.labels),
    last_updated_time: cdktf.stringToTerraform(struct!.lastUpdatedTime),
    name: cdktf.stringToTerraform(struct!.name),
    tags: cdktf.listMapper(dataAwsccFrauddetectorDetectorEventTypeTagsToTerraform)(struct!.tags),
  }
}

export class DataAwsccFrauddetectorDetectorRulesOutcomesTags extends cdktf.ComplexComputedList {

  // key - computed: true, optional: false, required: false
  public get key() {
    return this.getStringAttribute('key');
  }

  // value - computed: true, optional: false, required: false
  public get value() {
    return this.getStringAttribute('value');
  }
}

export function dataAwsccFrauddetectorDetectorRulesOutcomesTagsToTerraform(struct?: DataAwsccFrauddetectorDetectorRulesOutcomesTags): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    key: cdktf.stringToTerraform(struct!.key),
    value: cdktf.stringToTerraform(struct!.value),
  }
}

export class DataAwsccFrauddetectorDetectorRulesOutcomes extends cdktf.ComplexComputedList {

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

export function dataAwsccFrauddetectorDetectorRulesOutcomesToTerraform(struct?: DataAwsccFrauddetectorDetectorRulesOutcomes): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    arn: cdktf.stringToTerraform(struct!.arn),
    created_time: cdktf.stringToTerraform(struct!.createdTime),
    description: cdktf.stringToTerraform(struct!.description),
    inline: cdktf.booleanToTerraform(struct!.inline),
    last_updated_time: cdktf.stringToTerraform(struct!.lastUpdatedTime),
    name: cdktf.stringToTerraform(struct!.name),
    tags: cdktf.listMapper(dataAwsccFrauddetectorDetectorRulesOutcomesTagsToTerraform)(struct!.tags),
  }
}

export class DataAwsccFrauddetectorDetectorRulesTags extends cdktf.ComplexComputedList {

  // key - computed: true, optional: false, required: false
  public get key() {
    return this.getStringAttribute('key');
  }

  // value - computed: true, optional: false, required: false
  public get value() {
    return this.getStringAttribute('value');
  }
}

export function dataAwsccFrauddetectorDetectorRulesTagsToTerraform(struct?: DataAwsccFrauddetectorDetectorRulesTags): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    key: cdktf.stringToTerraform(struct!.key),
    value: cdktf.stringToTerraform(struct!.value),
  }
}

export class DataAwsccFrauddetectorDetectorRules extends cdktf.ComplexComputedList {

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

  // detector_id - computed: true, optional: false, required: false
  public get detectorId() {
    return this.getStringAttribute('detector_id');
  }

  // expression - computed: true, optional: false, required: false
  public get expression() {
    return this.getStringAttribute('expression');
  }

  // language - computed: true, optional: false, required: false
  public get language() {
    return this.getStringAttribute('language');
  }

  // last_updated_time - computed: true, optional: false, required: false
  public get lastUpdatedTime() {
    return this.getStringAttribute('last_updated_time');
  }

  // outcomes - computed: true, optional: false, required: false
  public get outcomes() {
    return this.interpolationForAttribute('outcomes') as any;
  }

  // rule_id - computed: true, optional: false, required: false
  public get ruleId() {
    return this.getStringAttribute('rule_id');
  }

  // rule_version - computed: true, optional: false, required: false
  public get ruleVersion() {
    return this.getStringAttribute('rule_version');
  }

  // tags - computed: true, optional: false, required: false
  public get tags() {
    return this.interpolationForAttribute('tags') as any;
  }
}

export function dataAwsccFrauddetectorDetectorRulesToTerraform(struct?: DataAwsccFrauddetectorDetectorRules): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    arn: cdktf.stringToTerraform(struct!.arn),
    created_time: cdktf.stringToTerraform(struct!.createdTime),
    description: cdktf.stringToTerraform(struct!.description),
    detector_id: cdktf.stringToTerraform(struct!.detectorId),
    expression: cdktf.stringToTerraform(struct!.expression),
    language: cdktf.stringToTerraform(struct!.language),
    last_updated_time: cdktf.stringToTerraform(struct!.lastUpdatedTime),
    outcomes: cdktf.listMapper(dataAwsccFrauddetectorDetectorRulesOutcomesToTerraform)(struct!.outcomes),
    rule_id: cdktf.stringToTerraform(struct!.ruleId),
    rule_version: cdktf.stringToTerraform(struct!.ruleVersion),
    tags: cdktf.listMapper(dataAwsccFrauddetectorDetectorRulesTagsToTerraform)(struct!.tags),
  }
}

export class DataAwsccFrauddetectorDetectorTags extends cdktf.ComplexComputedList {

  // key - computed: true, optional: false, required: false
  public get key() {
    return this.getStringAttribute('key');
  }

  // value - computed: true, optional: false, required: false
  public get value() {
    return this.getStringAttribute('value');
  }
}

export function dataAwsccFrauddetectorDetectorTagsToTerraform(struct?: DataAwsccFrauddetectorDetectorTags): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    key: cdktf.stringToTerraform(struct!.key),
    value: cdktf.stringToTerraform(struct!.value),
  }
}


/**
* Represents a {@link https://www.terraform.io/docs/providers/awscc/d/frauddetector_detector.html awscc_frauddetector_detector}
*/
export class DataAwsccFrauddetectorDetector extends cdktf.TerraformDataSource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType: string = "awscc_frauddetector_detector";

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://www.terraform.io/docs/providers/awscc/d/frauddetector_detector.html awscc_frauddetector_detector} Data Source
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DataAwsccFrauddetectorDetectorConfig
  */
  public constructor(scope: Construct, id: string, config: DataAwsccFrauddetectorDetectorConfig) {
    super(scope, id, {
      terraformResourceType: 'awscc_frauddetector_detector',
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

  // associated_models - computed: true, optional: false, required: false
  public get associatedModels() {
    return this.interpolationForAttribute('associated_models') as any;
  }

  // created_time - computed: true, optional: false, required: false
  public get createdTime() {
    return this.getStringAttribute('created_time');
  }

  // description - computed: true, optional: false, required: false
  public get description() {
    return this.getStringAttribute('description');
  }

  // detector_id - computed: true, optional: false, required: false
  public get detectorId() {
    return this.getStringAttribute('detector_id');
  }

  // detector_version_id - computed: true, optional: false, required: false
  public get detectorVersionId() {
    return this.getStringAttribute('detector_version_id');
  }

  // detector_version_status - computed: true, optional: false, required: false
  public get detectorVersionStatus() {
    return this.getStringAttribute('detector_version_status');
  }

  // event_type - computed: true, optional: false, required: false
  public get eventType() {
    return this.interpolationForAttribute('event_type') as any;
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

  // last_updated_time - computed: true, optional: false, required: false
  public get lastUpdatedTime() {
    return this.getStringAttribute('last_updated_time');
  }

  // rule_execution_mode - computed: true, optional: false, required: false
  public get ruleExecutionMode() {
    return this.getStringAttribute('rule_execution_mode');
  }

  // rules - computed: true, optional: false, required: false
  public get rules() {
    return this.interpolationForAttribute('rules') as any;
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
