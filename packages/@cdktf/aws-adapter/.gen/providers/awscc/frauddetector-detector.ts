// https://www.terraform.io/docs/providers/awscc/r/frauddetector_detector.html
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface FrauddetectorDetectorConfig extends cdktf.TerraformMetaArguments {
  /**
  * The models to associate with this detector.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/frauddetector_detector.html#associated_models FrauddetectorDetector#associated_models}
  */
  readonly associatedModels?: FrauddetectorDetectorAssociatedModels[];
  /**
  * The description of the detector.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/frauddetector_detector.html#description FrauddetectorDetector#description}
  */
  readonly description?: string;
  /**
  * The ID of the detector
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/frauddetector_detector.html#detector_id FrauddetectorDetector#detector_id}
  */
  readonly detectorId: string;
  /**
  * The desired detector version status for the detector
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/frauddetector_detector.html#detector_version_status FrauddetectorDetector#detector_version_status}
  */
  readonly detectorVersionStatus?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/frauddetector_detector.html#event_type FrauddetectorDetector#event_type}
  */
  readonly eventType: FrauddetectorDetectorEventType;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/frauddetector_detector.html#rule_execution_mode FrauddetectorDetector#rule_execution_mode}
  */
  readonly ruleExecutionMode?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/frauddetector_detector.html#rules FrauddetectorDetector#rules}
  */
  readonly rules: FrauddetectorDetectorRules[];
  /**
  * Tags associated with this detector.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/frauddetector_detector.html#tags FrauddetectorDetector#tags}
  */
  readonly tags?: FrauddetectorDetectorTags[];
}
export interface FrauddetectorDetectorAssociatedModels {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/frauddetector_detector.html#arn FrauddetectorDetector#arn}
  */
  readonly arn?: string;
}

export function frauddetectorDetectorAssociatedModelsToTerraform(struct?: FrauddetectorDetectorAssociatedModels): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    arn: cdktf.stringToTerraform(struct!.arn),
  }
}

export interface FrauddetectorDetectorEventTypeEntityTypesTags {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/frauddetector_detector.html#key FrauddetectorDetector#key}
  */
  readonly key: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/frauddetector_detector.html#value FrauddetectorDetector#value}
  */
  readonly value: string;
}

export function frauddetectorDetectorEventTypeEntityTypesTagsToTerraform(struct?: FrauddetectorDetectorEventTypeEntityTypesTags): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    key: cdktf.stringToTerraform(struct!.key),
    value: cdktf.stringToTerraform(struct!.value),
  }
}

export interface FrauddetectorDetectorEventTypeEntityTypes {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/frauddetector_detector.html#arn FrauddetectorDetector#arn}
  */
  readonly arn?: string;
  /**
  * The time when the entity type was created.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/frauddetector_detector.html#created_time FrauddetectorDetector#created_time}
  */
  readonly createdTime?: string;
  /**
  * The description.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/frauddetector_detector.html#description FrauddetectorDetector#description}
  */
  readonly description?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/frauddetector_detector.html#inline FrauddetectorDetector#inline}
  */
  readonly inline?: boolean | cdktf.IResolvable;
  /**
  * The time when the entity type was last updated.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/frauddetector_detector.html#last_updated_time FrauddetectorDetector#last_updated_time}
  */
  readonly lastUpdatedTime?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/frauddetector_detector.html#name FrauddetectorDetector#name}
  */
  readonly name?: string;
  /**
  * Tags associated with this entity type.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/frauddetector_detector.html#tags FrauddetectorDetector#tags}
  */
  readonly tags?: FrauddetectorDetectorEventTypeEntityTypesTags[];
}

export function frauddetectorDetectorEventTypeEntityTypesToTerraform(struct?: FrauddetectorDetectorEventTypeEntityTypes): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    arn: cdktf.stringToTerraform(struct!.arn),
    created_time: cdktf.stringToTerraform(struct!.createdTime),
    description: cdktf.stringToTerraform(struct!.description),
    inline: cdktf.booleanToTerraform(struct!.inline),
    last_updated_time: cdktf.stringToTerraform(struct!.lastUpdatedTime),
    name: cdktf.stringToTerraform(struct!.name),
    tags: cdktf.listMapper(frauddetectorDetectorEventTypeEntityTypesTagsToTerraform)(struct!.tags),
  }
}

export interface FrauddetectorDetectorEventTypeEventVariablesTags {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/frauddetector_detector.html#key FrauddetectorDetector#key}
  */
  readonly key: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/frauddetector_detector.html#value FrauddetectorDetector#value}
  */
  readonly value: string;
}

export function frauddetectorDetectorEventTypeEventVariablesTagsToTerraform(struct?: FrauddetectorDetectorEventTypeEventVariablesTags): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    key: cdktf.stringToTerraform(struct!.key),
    value: cdktf.stringToTerraform(struct!.value),
  }
}

export interface FrauddetectorDetectorEventTypeEventVariables {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/frauddetector_detector.html#arn FrauddetectorDetector#arn}
  */
  readonly arn?: string;
  /**
  * The time when the event variable was created.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/frauddetector_detector.html#created_time FrauddetectorDetector#created_time}
  */
  readonly createdTime?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/frauddetector_detector.html#data_source FrauddetectorDetector#data_source}
  */
  readonly dataSource?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/frauddetector_detector.html#data_type FrauddetectorDetector#data_type}
  */
  readonly dataType?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/frauddetector_detector.html#default_value FrauddetectorDetector#default_value}
  */
  readonly defaultValue?: string;
  /**
  * The description.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/frauddetector_detector.html#description FrauddetectorDetector#description}
  */
  readonly description?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/frauddetector_detector.html#inline FrauddetectorDetector#inline}
  */
  readonly inline?: boolean | cdktf.IResolvable;
  /**
  * The time when the event variable was last updated.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/frauddetector_detector.html#last_updated_time FrauddetectorDetector#last_updated_time}
  */
  readonly lastUpdatedTime?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/frauddetector_detector.html#name FrauddetectorDetector#name}
  */
  readonly name?: string;
  /**
  * Tags associated with this event variable.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/frauddetector_detector.html#tags FrauddetectorDetector#tags}
  */
  readonly tags?: FrauddetectorDetectorEventTypeEventVariablesTags[];
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/frauddetector_detector.html#variable_type FrauddetectorDetector#variable_type}
  */
  readonly variableType?: string;
}

export function frauddetectorDetectorEventTypeEventVariablesToTerraform(struct?: FrauddetectorDetectorEventTypeEventVariables): any {
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
    tags: cdktf.listMapper(frauddetectorDetectorEventTypeEventVariablesTagsToTerraform)(struct!.tags),
    variable_type: cdktf.stringToTerraform(struct!.variableType),
  }
}

export interface FrauddetectorDetectorEventTypeLabelsTags {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/frauddetector_detector.html#key FrauddetectorDetector#key}
  */
  readonly key: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/frauddetector_detector.html#value FrauddetectorDetector#value}
  */
  readonly value: string;
}

export function frauddetectorDetectorEventTypeLabelsTagsToTerraform(struct?: FrauddetectorDetectorEventTypeLabelsTags): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    key: cdktf.stringToTerraform(struct!.key),
    value: cdktf.stringToTerraform(struct!.value),
  }
}

export interface FrauddetectorDetectorEventTypeLabels {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/frauddetector_detector.html#arn FrauddetectorDetector#arn}
  */
  readonly arn?: string;
  /**
  * The time when the label was created.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/frauddetector_detector.html#created_time FrauddetectorDetector#created_time}
  */
  readonly createdTime?: string;
  /**
  * The description.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/frauddetector_detector.html#description FrauddetectorDetector#description}
  */
  readonly description?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/frauddetector_detector.html#inline FrauddetectorDetector#inline}
  */
  readonly inline?: boolean | cdktf.IResolvable;
  /**
  * The time when the label was last updated.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/frauddetector_detector.html#last_updated_time FrauddetectorDetector#last_updated_time}
  */
  readonly lastUpdatedTime?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/frauddetector_detector.html#name FrauddetectorDetector#name}
  */
  readonly name?: string;
  /**
  * Tags associated with this label.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/frauddetector_detector.html#tags FrauddetectorDetector#tags}
  */
  readonly tags?: FrauddetectorDetectorEventTypeLabelsTags[];
}

export function frauddetectorDetectorEventTypeLabelsToTerraform(struct?: FrauddetectorDetectorEventTypeLabels): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    arn: cdktf.stringToTerraform(struct!.arn),
    created_time: cdktf.stringToTerraform(struct!.createdTime),
    description: cdktf.stringToTerraform(struct!.description),
    inline: cdktf.booleanToTerraform(struct!.inline),
    last_updated_time: cdktf.stringToTerraform(struct!.lastUpdatedTime),
    name: cdktf.stringToTerraform(struct!.name),
    tags: cdktf.listMapper(frauddetectorDetectorEventTypeLabelsTagsToTerraform)(struct!.tags),
  }
}

export interface FrauddetectorDetectorEventTypeTags {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/frauddetector_detector.html#key FrauddetectorDetector#key}
  */
  readonly key: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/frauddetector_detector.html#value FrauddetectorDetector#value}
  */
  readonly value: string;
}

export function frauddetectorDetectorEventTypeTagsToTerraform(struct?: FrauddetectorDetectorEventTypeTags): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    key: cdktf.stringToTerraform(struct!.key),
    value: cdktf.stringToTerraform(struct!.value),
  }
}

export interface FrauddetectorDetectorEventType {
  /**
  * The ARN of the event type.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/frauddetector_detector.html#arn FrauddetectorDetector#arn}
  */
  readonly arn: string;
  /**
  * The time when the event type was created.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/frauddetector_detector.html#created_time FrauddetectorDetector#created_time}
  */
  readonly createdTime: string;
  /**
  * The description of the event type.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/frauddetector_detector.html#description FrauddetectorDetector#description}
  */
  readonly description?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/frauddetector_detector.html#entity_types FrauddetectorDetector#entity_types}
  */
  readonly entityTypes?: FrauddetectorDetectorEventTypeEntityTypes[];
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/frauddetector_detector.html#event_variables FrauddetectorDetector#event_variables}
  */
  readonly eventVariables?: FrauddetectorDetectorEventTypeEventVariables[];
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/frauddetector_detector.html#inline FrauddetectorDetector#inline}
  */
  readonly inline?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/frauddetector_detector.html#labels FrauddetectorDetector#labels}
  */
  readonly labels?: FrauddetectorDetectorEventTypeLabels[];
  /**
  * The time when the event type was last updated.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/frauddetector_detector.html#last_updated_time FrauddetectorDetector#last_updated_time}
  */
  readonly lastUpdatedTime: string;
  /**
  * The name for the event type
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/frauddetector_detector.html#name FrauddetectorDetector#name}
  */
  readonly name?: string;
  /**
  * Tags associated with this event type.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/frauddetector_detector.html#tags FrauddetectorDetector#tags}
  */
  readonly tags?: FrauddetectorDetectorEventTypeTags[];
}

export function frauddetectorDetectorEventTypeToTerraform(struct?: FrauddetectorDetectorEventType): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    arn: cdktf.stringToTerraform(struct!.arn),
    created_time: cdktf.stringToTerraform(struct!.createdTime),
    description: cdktf.stringToTerraform(struct!.description),
    entity_types: cdktf.listMapper(frauddetectorDetectorEventTypeEntityTypesToTerraform)(struct!.entityTypes),
    event_variables: cdktf.listMapper(frauddetectorDetectorEventTypeEventVariablesToTerraform)(struct!.eventVariables),
    inline: cdktf.booleanToTerraform(struct!.inline),
    labels: cdktf.listMapper(frauddetectorDetectorEventTypeLabelsToTerraform)(struct!.labels),
    last_updated_time: cdktf.stringToTerraform(struct!.lastUpdatedTime),
    name: cdktf.stringToTerraform(struct!.name),
    tags: cdktf.listMapper(frauddetectorDetectorEventTypeTagsToTerraform)(struct!.tags),
  }
}

export interface FrauddetectorDetectorRulesOutcomesTags {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/frauddetector_detector.html#key FrauddetectorDetector#key}
  */
  readonly key: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/frauddetector_detector.html#value FrauddetectorDetector#value}
  */
  readonly value: string;
}

export function frauddetectorDetectorRulesOutcomesTagsToTerraform(struct?: FrauddetectorDetectorRulesOutcomesTags): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    key: cdktf.stringToTerraform(struct!.key),
    value: cdktf.stringToTerraform(struct!.value),
  }
}

export interface FrauddetectorDetectorRulesOutcomes {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/frauddetector_detector.html#arn FrauddetectorDetector#arn}
  */
  readonly arn?: string;
  /**
  * The time when the outcome was created.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/frauddetector_detector.html#created_time FrauddetectorDetector#created_time}
  */
  readonly createdTime?: string;
  /**
  * The description.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/frauddetector_detector.html#description FrauddetectorDetector#description}
  */
  readonly description?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/frauddetector_detector.html#inline FrauddetectorDetector#inline}
  */
  readonly inline?: boolean | cdktf.IResolvable;
  /**
  * The time when the outcome was last updated.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/frauddetector_detector.html#last_updated_time FrauddetectorDetector#last_updated_time}
  */
  readonly lastUpdatedTime?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/frauddetector_detector.html#name FrauddetectorDetector#name}
  */
  readonly name?: string;
  /**
  * Tags associated with this outcome.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/frauddetector_detector.html#tags FrauddetectorDetector#tags}
  */
  readonly tags?: FrauddetectorDetectorRulesOutcomesTags[];
}

export function frauddetectorDetectorRulesOutcomesToTerraform(struct?: FrauddetectorDetectorRulesOutcomes): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    arn: cdktf.stringToTerraform(struct!.arn),
    created_time: cdktf.stringToTerraform(struct!.createdTime),
    description: cdktf.stringToTerraform(struct!.description),
    inline: cdktf.booleanToTerraform(struct!.inline),
    last_updated_time: cdktf.stringToTerraform(struct!.lastUpdatedTime),
    name: cdktf.stringToTerraform(struct!.name),
    tags: cdktf.listMapper(frauddetectorDetectorRulesOutcomesTagsToTerraform)(struct!.tags),
  }
}

export interface FrauddetectorDetectorRulesTags {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/frauddetector_detector.html#key FrauddetectorDetector#key}
  */
  readonly key: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/frauddetector_detector.html#value FrauddetectorDetector#value}
  */
  readonly value: string;
}

export function frauddetectorDetectorRulesTagsToTerraform(struct?: FrauddetectorDetectorRulesTags): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    key: cdktf.stringToTerraform(struct!.key),
    value: cdktf.stringToTerraform(struct!.value),
  }
}

export interface FrauddetectorDetectorRules {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/frauddetector_detector.html#arn FrauddetectorDetector#arn}
  */
  readonly arn?: string;
  /**
  * The time when the event type was created.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/frauddetector_detector.html#created_time FrauddetectorDetector#created_time}
  */
  readonly createdTime?: string;
  /**
  * The description.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/frauddetector_detector.html#description FrauddetectorDetector#description}
  */
  readonly description?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/frauddetector_detector.html#detector_id FrauddetectorDetector#detector_id}
  */
  readonly detectorId?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/frauddetector_detector.html#expression FrauddetectorDetector#expression}
  */
  readonly expression?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/frauddetector_detector.html#language FrauddetectorDetector#language}
  */
  readonly language?: string;
  /**
  * The time when the event type was last updated.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/frauddetector_detector.html#last_updated_time FrauddetectorDetector#last_updated_time}
  */
  readonly lastUpdatedTime?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/frauddetector_detector.html#outcomes FrauddetectorDetector#outcomes}
  */
  readonly outcomes?: FrauddetectorDetectorRulesOutcomes[];
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/frauddetector_detector.html#rule_id FrauddetectorDetector#rule_id}
  */
  readonly ruleId?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/frauddetector_detector.html#rule_version FrauddetectorDetector#rule_version}
  */
  readonly ruleVersion?: string;
  /**
  * Tags associated with this event type.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/frauddetector_detector.html#tags FrauddetectorDetector#tags}
  */
  readonly tags?: FrauddetectorDetectorRulesTags[];
}

export function frauddetectorDetectorRulesToTerraform(struct?: FrauddetectorDetectorRules): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    arn: cdktf.stringToTerraform(struct!.arn),
    created_time: cdktf.stringToTerraform(struct!.createdTime),
    description: cdktf.stringToTerraform(struct!.description),
    detector_id: cdktf.stringToTerraform(struct!.detectorId),
    expression: cdktf.stringToTerraform(struct!.expression),
    language: cdktf.stringToTerraform(struct!.language),
    last_updated_time: cdktf.stringToTerraform(struct!.lastUpdatedTime),
    outcomes: cdktf.listMapper(frauddetectorDetectorRulesOutcomesToTerraform)(struct!.outcomes),
    rule_id: cdktf.stringToTerraform(struct!.ruleId),
    rule_version: cdktf.stringToTerraform(struct!.ruleVersion),
    tags: cdktf.listMapper(frauddetectorDetectorRulesTagsToTerraform)(struct!.tags),
  }
}

export interface FrauddetectorDetectorTags {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/frauddetector_detector.html#key FrauddetectorDetector#key}
  */
  readonly key: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/frauddetector_detector.html#value FrauddetectorDetector#value}
  */
  readonly value: string;
}

export function frauddetectorDetectorTagsToTerraform(struct?: FrauddetectorDetectorTags): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    key: cdktf.stringToTerraform(struct!.key),
    value: cdktf.stringToTerraform(struct!.value),
  }
}


/**
* Represents a {@link https://www.terraform.io/docs/providers/awscc/r/frauddetector_detector.html awscc_frauddetector_detector}
*/
export class FrauddetectorDetector extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType: string = "awscc_frauddetector_detector";

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://www.terraform.io/docs/providers/awscc/r/frauddetector_detector.html awscc_frauddetector_detector} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options FrauddetectorDetectorConfig
  */
  public constructor(scope: Construct, id: string, config: FrauddetectorDetectorConfig) {
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
    this._associatedModels = config.associatedModels;
    this._description = config.description;
    this._detectorId = config.detectorId;
    this._detectorVersionStatus = config.detectorVersionStatus;
    this._eventType = config.eventType;
    this._ruleExecutionMode = config.ruleExecutionMode;
    this._rules = config.rules;
    this._tags = config.tags;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // arn - computed: true, optional: false, required: false
  public get arn() {
    return this.getStringAttribute('arn');
  }

  // associated_models - computed: false, optional: true, required: false
  private _associatedModels?: FrauddetectorDetectorAssociatedModels[];
  public get associatedModels() {
    return this.interpolationForAttribute('associated_models') as any;
  }
  public set associatedModels(value: FrauddetectorDetectorAssociatedModels[] ) {
    this._associatedModels = value;
  }
  public resetAssociatedModels() {
    this._associatedModels = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get associatedModelsInput() {
    return this._associatedModels
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

  // detector_id - computed: false, optional: false, required: true
  private _detectorId: string;
  public get detectorId() {
    return this.getStringAttribute('detector_id');
  }
  public set detectorId(value: string) {
    this._detectorId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get detectorIdInput() {
    return this._detectorId
  }

  // detector_version_id - computed: true, optional: false, required: false
  public get detectorVersionId() {
    return this.getStringAttribute('detector_version_id');
  }

  // detector_version_status - computed: false, optional: true, required: false
  private _detectorVersionStatus?: string;
  public get detectorVersionStatus() {
    return this.getStringAttribute('detector_version_status');
  }
  public set detectorVersionStatus(value: string ) {
    this._detectorVersionStatus = value;
  }
  public resetDetectorVersionStatus() {
    this._detectorVersionStatus = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get detectorVersionStatusInput() {
    return this._detectorVersionStatus
  }

  // event_type - computed: false, optional: false, required: true
  private _eventType: FrauddetectorDetectorEventType;
  public get eventType() {
    return this.interpolationForAttribute('event_type') as any;
  }
  public set eventType(value: FrauddetectorDetectorEventType) {
    this._eventType = value;
  }
  // Temporarily expose input value. Use with caution.
  public get eventTypeInput() {
    return this._eventType
  }

  // id - computed: true, optional: false, required: false
  public get id() {
    return this.getStringAttribute('id');
  }

  // last_updated_time - computed: true, optional: false, required: false
  public get lastUpdatedTime() {
    return this.getStringAttribute('last_updated_time');
  }

  // rule_execution_mode - computed: false, optional: true, required: false
  private _ruleExecutionMode?: string;
  public get ruleExecutionMode() {
    return this.getStringAttribute('rule_execution_mode');
  }
  public set ruleExecutionMode(value: string ) {
    this._ruleExecutionMode = value;
  }
  public resetRuleExecutionMode() {
    this._ruleExecutionMode = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ruleExecutionModeInput() {
    return this._ruleExecutionMode
  }

  // rules - computed: false, optional: false, required: true
  private _rules: FrauddetectorDetectorRules[];
  public get rules() {
    return this.interpolationForAttribute('rules') as any;
  }
  public set rules(value: FrauddetectorDetectorRules[]) {
    this._rules = value;
  }
  // Temporarily expose input value. Use with caution.
  public get rulesInput() {
    return this._rules
  }

  // tags - computed: false, optional: true, required: false
  private _tags?: FrauddetectorDetectorTags[];
  public get tags() {
    return this.interpolationForAttribute('tags') as any;
  }
  public set tags(value: FrauddetectorDetectorTags[] ) {
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
      associated_models: cdktf.listMapper(frauddetectorDetectorAssociatedModelsToTerraform)(this._associatedModels),
      description: cdktf.stringToTerraform(this._description),
      detector_id: cdktf.stringToTerraform(this._detectorId),
      detector_version_status: cdktf.stringToTerraform(this._detectorVersionStatus),
      event_type: frauddetectorDetectorEventTypeToTerraform(this._eventType),
      rule_execution_mode: cdktf.stringToTerraform(this._ruleExecutionMode),
      rules: cdktf.listMapper(frauddetectorDetectorRulesToTerraform)(this._rules),
      tags: cdktf.listMapper(frauddetectorDetectorTagsToTerraform)(this._tags),
    };
  }
}
