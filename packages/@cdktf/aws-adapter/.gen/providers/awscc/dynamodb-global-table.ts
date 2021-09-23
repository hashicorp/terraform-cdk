// https://www.terraform.io/docs/providers/awscc/r/dynamodb_global_table.html
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DynamodbGlobalTableConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/dynamodb_global_table.html#attribute_definitions DynamodbGlobalTable#attribute_definitions}
  */
  readonly attributeDefinitions: DynamodbGlobalTableAttributeDefinitions[];
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/dynamodb_global_table.html#billing_mode DynamodbGlobalTable#billing_mode}
  */
  readonly billingMode?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/dynamodb_global_table.html#global_secondary_indexes DynamodbGlobalTable#global_secondary_indexes}
  */
  readonly globalSecondaryIndexes?: DynamodbGlobalTableGlobalSecondaryIndexes[];
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/dynamodb_global_table.html#key_schema DynamodbGlobalTable#key_schema}
  */
  readonly keySchema: DynamodbGlobalTableKeySchema[];
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/dynamodb_global_table.html#local_secondary_indexes DynamodbGlobalTable#local_secondary_indexes}
  */
  readonly localSecondaryIndexes?: DynamodbGlobalTableLocalSecondaryIndexes[];
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/dynamodb_global_table.html#replicas DynamodbGlobalTable#replicas}
  */
  readonly replicas: DynamodbGlobalTableReplicas[];
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/dynamodb_global_table.html#sse_specification DynamodbGlobalTable#sse_specification}
  */
  readonly sseSpecification?: DynamodbGlobalTableSseSpecification;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/dynamodb_global_table.html#stream_specification DynamodbGlobalTable#stream_specification}
  */
  readonly streamSpecification?: DynamodbGlobalTableStreamSpecification;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/dynamodb_global_table.html#table_name DynamodbGlobalTable#table_name}
  */
  readonly tableName?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/dynamodb_global_table.html#time_to_live_specification DynamodbGlobalTable#time_to_live_specification}
  */
  readonly timeToLiveSpecification?: DynamodbGlobalTableTimeToLiveSpecification;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/dynamodb_global_table.html#write_provisioned_throughput_settings DynamodbGlobalTable#write_provisioned_throughput_settings}
  */
  readonly writeProvisionedThroughputSettings?: DynamodbGlobalTableWriteProvisionedThroughputSettings;
}
export interface DynamodbGlobalTableAttributeDefinitions {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/dynamodb_global_table.html#attribute_name DynamodbGlobalTable#attribute_name}
  */
  readonly attributeName: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/dynamodb_global_table.html#attribute_type DynamodbGlobalTable#attribute_type}
  */
  readonly attributeType: string;
}

export function dynamodbGlobalTableAttributeDefinitionsToTerraform(struct?: DynamodbGlobalTableAttributeDefinitions): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    attribute_name: cdktf.stringToTerraform(struct!.attributeName),
    attribute_type: cdktf.stringToTerraform(struct!.attributeType),
  }
}

export interface DynamodbGlobalTableGlobalSecondaryIndexesKeySchema {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/dynamodb_global_table.html#attribute_name DynamodbGlobalTable#attribute_name}
  */
  readonly attributeName: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/dynamodb_global_table.html#key_type DynamodbGlobalTable#key_type}
  */
  readonly keyType: string;
}

export function dynamodbGlobalTableGlobalSecondaryIndexesKeySchemaToTerraform(struct?: DynamodbGlobalTableGlobalSecondaryIndexesKeySchema): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    attribute_name: cdktf.stringToTerraform(struct!.attributeName),
    key_type: cdktf.stringToTerraform(struct!.keyType),
  }
}

export interface DynamodbGlobalTableGlobalSecondaryIndexesProjection {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/dynamodb_global_table.html#non_key_attributes DynamodbGlobalTable#non_key_attributes}
  */
  readonly nonKeyAttributes?: string[];
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/dynamodb_global_table.html#projection_type DynamodbGlobalTable#projection_type}
  */
  readonly projectionType?: string;
}

export function dynamodbGlobalTableGlobalSecondaryIndexesProjectionToTerraform(struct?: DynamodbGlobalTableGlobalSecondaryIndexesProjection): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    non_key_attributes: cdktf.listMapper(cdktf.stringToTerraform)(struct!.nonKeyAttributes),
    projection_type: cdktf.stringToTerraform(struct!.projectionType),
  }
}

export interface DynamodbGlobalTableGlobalSecondaryIndexesWriteProvisionedThroughputSettingsWriteCapacityAutoScalingSettingsTargetTrackingScalingPolicyConfiguration {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/dynamodb_global_table.html#disable_scale_in DynamodbGlobalTable#disable_scale_in}
  */
  readonly disableScaleIn?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/dynamodb_global_table.html#scale_in_cooldown DynamodbGlobalTable#scale_in_cooldown}
  */
  readonly scaleInCooldown?: number;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/dynamodb_global_table.html#scale_out_cooldown DynamodbGlobalTable#scale_out_cooldown}
  */
  readonly scaleOutCooldown?: number;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/dynamodb_global_table.html#target_value DynamodbGlobalTable#target_value}
  */
  readonly targetValue: number;
}

export function dynamodbGlobalTableGlobalSecondaryIndexesWriteProvisionedThroughputSettingsWriteCapacityAutoScalingSettingsTargetTrackingScalingPolicyConfigurationToTerraform(struct?: DynamodbGlobalTableGlobalSecondaryIndexesWriteProvisionedThroughputSettingsWriteCapacityAutoScalingSettingsTargetTrackingScalingPolicyConfiguration): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    disable_scale_in: cdktf.booleanToTerraform(struct!.disableScaleIn),
    scale_in_cooldown: cdktf.numberToTerraform(struct!.scaleInCooldown),
    scale_out_cooldown: cdktf.numberToTerraform(struct!.scaleOutCooldown),
    target_value: cdktf.numberToTerraform(struct!.targetValue),
  }
}

export interface DynamodbGlobalTableGlobalSecondaryIndexesWriteProvisionedThroughputSettingsWriteCapacityAutoScalingSettings {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/dynamodb_global_table.html#max_capacity DynamodbGlobalTable#max_capacity}
  */
  readonly maxCapacity: number;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/dynamodb_global_table.html#min_capacity DynamodbGlobalTable#min_capacity}
  */
  readonly minCapacity: number;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/dynamodb_global_table.html#seed_capacity DynamodbGlobalTable#seed_capacity}
  */
  readonly seedCapacity?: number;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/dynamodb_global_table.html#target_tracking_scaling_policy_configuration DynamodbGlobalTable#target_tracking_scaling_policy_configuration}
  */
  readonly targetTrackingScalingPolicyConfiguration: DynamodbGlobalTableGlobalSecondaryIndexesWriteProvisionedThroughputSettingsWriteCapacityAutoScalingSettingsTargetTrackingScalingPolicyConfiguration;
}

export function dynamodbGlobalTableGlobalSecondaryIndexesWriteProvisionedThroughputSettingsWriteCapacityAutoScalingSettingsToTerraform(struct?: DynamodbGlobalTableGlobalSecondaryIndexesWriteProvisionedThroughputSettingsWriteCapacityAutoScalingSettings): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    max_capacity: cdktf.numberToTerraform(struct!.maxCapacity),
    min_capacity: cdktf.numberToTerraform(struct!.minCapacity),
    seed_capacity: cdktf.numberToTerraform(struct!.seedCapacity),
    target_tracking_scaling_policy_configuration: dynamodbGlobalTableGlobalSecondaryIndexesWriteProvisionedThroughputSettingsWriteCapacityAutoScalingSettingsTargetTrackingScalingPolicyConfigurationToTerraform(struct!.targetTrackingScalingPolicyConfiguration),
  }
}

export interface DynamodbGlobalTableGlobalSecondaryIndexesWriteProvisionedThroughputSettings {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/dynamodb_global_table.html#write_capacity_auto_scaling_settings DynamodbGlobalTable#write_capacity_auto_scaling_settings}
  */
  readonly writeCapacityAutoScalingSettings?: DynamodbGlobalTableGlobalSecondaryIndexesWriteProvisionedThroughputSettingsWriteCapacityAutoScalingSettings;
}

export function dynamodbGlobalTableGlobalSecondaryIndexesWriteProvisionedThroughputSettingsToTerraform(struct?: DynamodbGlobalTableGlobalSecondaryIndexesWriteProvisionedThroughputSettings): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    write_capacity_auto_scaling_settings: dynamodbGlobalTableGlobalSecondaryIndexesWriteProvisionedThroughputSettingsWriteCapacityAutoScalingSettingsToTerraform(struct!.writeCapacityAutoScalingSettings),
  }
}

export interface DynamodbGlobalTableGlobalSecondaryIndexes {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/dynamodb_global_table.html#index_name DynamodbGlobalTable#index_name}
  */
  readonly indexName: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/dynamodb_global_table.html#key_schema DynamodbGlobalTable#key_schema}
  */
  readonly keySchema: DynamodbGlobalTableGlobalSecondaryIndexesKeySchema[];
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/dynamodb_global_table.html#projection DynamodbGlobalTable#projection}
  */
  readonly projection: DynamodbGlobalTableGlobalSecondaryIndexesProjection;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/dynamodb_global_table.html#write_provisioned_throughput_settings DynamodbGlobalTable#write_provisioned_throughput_settings}
  */
  readonly writeProvisionedThroughputSettings?: DynamodbGlobalTableGlobalSecondaryIndexesWriteProvisionedThroughputSettings;
}

export function dynamodbGlobalTableGlobalSecondaryIndexesToTerraform(struct?: DynamodbGlobalTableGlobalSecondaryIndexes): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    index_name: cdktf.stringToTerraform(struct!.indexName),
    key_schema: cdktf.listMapper(dynamodbGlobalTableGlobalSecondaryIndexesKeySchemaToTerraform)(struct!.keySchema),
    projection: dynamodbGlobalTableGlobalSecondaryIndexesProjectionToTerraform(struct!.projection),
    write_provisioned_throughput_settings: dynamodbGlobalTableGlobalSecondaryIndexesWriteProvisionedThroughputSettingsToTerraform(struct!.writeProvisionedThroughputSettings),
  }
}

export interface DynamodbGlobalTableKeySchema {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/dynamodb_global_table.html#attribute_name DynamodbGlobalTable#attribute_name}
  */
  readonly attributeName: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/dynamodb_global_table.html#key_type DynamodbGlobalTable#key_type}
  */
  readonly keyType: string;
}

export function dynamodbGlobalTableKeySchemaToTerraform(struct?: DynamodbGlobalTableKeySchema): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    attribute_name: cdktf.stringToTerraform(struct!.attributeName),
    key_type: cdktf.stringToTerraform(struct!.keyType),
  }
}

export class DynamodbGlobalTableLocalSecondaryIndexesKeySchema extends cdktf.ComplexComputedList {

  // attribute_name - computed: true, optional: false, required: true
  public get attributeName() {
    return this.getStringAttribute('attribute_name');
  }

  // key_type - computed: true, optional: false, required: true
  public get keyType() {
    return this.getStringAttribute('key_type');
  }
}

export function dynamodbGlobalTableLocalSecondaryIndexesKeySchemaToTerraform(struct?: DynamodbGlobalTableLocalSecondaryIndexesKeySchema): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    attribute_name: cdktf.stringToTerraform(struct!.attributeName),
    key_type: cdktf.stringToTerraform(struct!.keyType),
  }
}

export class DynamodbGlobalTableLocalSecondaryIndexesProjection extends cdktf.ComplexComputedList {

  // non_key_attributes - computed: true, optional: true, required: false
  private _nonKeyAttributes?: string[];
  public get nonKeyAttributes() {
    return this.getListAttribute('non_key_attributes');
  }
  public set nonKeyAttributes(value: string[]) {
    this._nonKeyAttributes = value;
  }
  public resetNonKeyAttributes() {
    this._nonKeyAttributes = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get nonKeyAttributesInput() {
    return this._nonKeyAttributes
  }

  // projection_type - computed: true, optional: true, required: false
  private _projectionType?: string;
  public get projectionType() {
    return this.getStringAttribute('projection_type');
  }
  public set projectionType(value: string) {
    this._projectionType = value;
  }
  public resetProjectionType() {
    this._projectionType = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get projectionTypeInput() {
    return this._projectionType
  }
}

export function dynamodbGlobalTableLocalSecondaryIndexesProjectionToTerraform(struct?: DynamodbGlobalTableLocalSecondaryIndexesProjection): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    non_key_attributes: cdktf.listMapper(cdktf.stringToTerraform)(struct!.nonKeyAttributes),
    projection_type: cdktf.stringToTerraform(struct!.projectionType),
  }
}

export interface DynamodbGlobalTableLocalSecondaryIndexes {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/dynamodb_global_table.html#index_name DynamodbGlobalTable#index_name}
  */
  readonly indexName: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/dynamodb_global_table.html#key_schema DynamodbGlobalTable#key_schema}
  */
  readonly keySchema: DynamodbGlobalTableLocalSecondaryIndexesKeySchema[];
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/dynamodb_global_table.html#projection DynamodbGlobalTable#projection}
  */
  readonly projection: DynamodbGlobalTableLocalSecondaryIndexesProjection;
}

export function dynamodbGlobalTableLocalSecondaryIndexesToTerraform(struct?: DynamodbGlobalTableLocalSecondaryIndexes): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    index_name: cdktf.stringToTerraform(struct!.indexName),
    key_schema: cdktf.listMapper(dynamodbGlobalTableLocalSecondaryIndexesKeySchemaToTerraform)(struct!.keySchema),
    projection: dynamodbGlobalTableLocalSecondaryIndexesProjectionToTerraform(struct!.projection),
  }
}

export interface DynamodbGlobalTableReplicasContributorInsightsSpecification {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/dynamodb_global_table.html#enabled DynamodbGlobalTable#enabled}
  */
  readonly enabled: boolean | cdktf.IResolvable;
}

export function dynamodbGlobalTableReplicasContributorInsightsSpecificationToTerraform(struct?: DynamodbGlobalTableReplicasContributorInsightsSpecification): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    enabled: cdktf.booleanToTerraform(struct!.enabled),
  }
}

export interface DynamodbGlobalTableReplicasGlobalSecondaryIndexesContributorInsightsSpecification {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/dynamodb_global_table.html#enabled DynamodbGlobalTable#enabled}
  */
  readonly enabled: boolean | cdktf.IResolvable;
}

export function dynamodbGlobalTableReplicasGlobalSecondaryIndexesContributorInsightsSpecificationToTerraform(struct?: DynamodbGlobalTableReplicasGlobalSecondaryIndexesContributorInsightsSpecification): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    enabled: cdktf.booleanToTerraform(struct!.enabled),
  }
}

export interface DynamodbGlobalTableReplicasGlobalSecondaryIndexesReadProvisionedThroughputSettingsReadCapacityAutoScalingSettingsTargetTrackingScalingPolicyConfiguration {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/dynamodb_global_table.html#disable_scale_in DynamodbGlobalTable#disable_scale_in}
  */
  readonly disableScaleIn?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/dynamodb_global_table.html#scale_in_cooldown DynamodbGlobalTable#scale_in_cooldown}
  */
  readonly scaleInCooldown?: number;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/dynamodb_global_table.html#scale_out_cooldown DynamodbGlobalTable#scale_out_cooldown}
  */
  readonly scaleOutCooldown?: number;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/dynamodb_global_table.html#target_value DynamodbGlobalTable#target_value}
  */
  readonly targetValue: number;
}

export function dynamodbGlobalTableReplicasGlobalSecondaryIndexesReadProvisionedThroughputSettingsReadCapacityAutoScalingSettingsTargetTrackingScalingPolicyConfigurationToTerraform(struct?: DynamodbGlobalTableReplicasGlobalSecondaryIndexesReadProvisionedThroughputSettingsReadCapacityAutoScalingSettingsTargetTrackingScalingPolicyConfiguration): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    disable_scale_in: cdktf.booleanToTerraform(struct!.disableScaleIn),
    scale_in_cooldown: cdktf.numberToTerraform(struct!.scaleInCooldown),
    scale_out_cooldown: cdktf.numberToTerraform(struct!.scaleOutCooldown),
    target_value: cdktf.numberToTerraform(struct!.targetValue),
  }
}

export interface DynamodbGlobalTableReplicasGlobalSecondaryIndexesReadProvisionedThroughputSettingsReadCapacityAutoScalingSettings {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/dynamodb_global_table.html#max_capacity DynamodbGlobalTable#max_capacity}
  */
  readonly maxCapacity: number;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/dynamodb_global_table.html#min_capacity DynamodbGlobalTable#min_capacity}
  */
  readonly minCapacity: number;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/dynamodb_global_table.html#seed_capacity DynamodbGlobalTable#seed_capacity}
  */
  readonly seedCapacity?: number;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/dynamodb_global_table.html#target_tracking_scaling_policy_configuration DynamodbGlobalTable#target_tracking_scaling_policy_configuration}
  */
  readonly targetTrackingScalingPolicyConfiguration: DynamodbGlobalTableReplicasGlobalSecondaryIndexesReadProvisionedThroughputSettingsReadCapacityAutoScalingSettingsTargetTrackingScalingPolicyConfiguration;
}

export function dynamodbGlobalTableReplicasGlobalSecondaryIndexesReadProvisionedThroughputSettingsReadCapacityAutoScalingSettingsToTerraform(struct?: DynamodbGlobalTableReplicasGlobalSecondaryIndexesReadProvisionedThroughputSettingsReadCapacityAutoScalingSettings): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    max_capacity: cdktf.numberToTerraform(struct!.maxCapacity),
    min_capacity: cdktf.numberToTerraform(struct!.minCapacity),
    seed_capacity: cdktf.numberToTerraform(struct!.seedCapacity),
    target_tracking_scaling_policy_configuration: dynamodbGlobalTableReplicasGlobalSecondaryIndexesReadProvisionedThroughputSettingsReadCapacityAutoScalingSettingsTargetTrackingScalingPolicyConfigurationToTerraform(struct!.targetTrackingScalingPolicyConfiguration),
  }
}

export interface DynamodbGlobalTableReplicasGlobalSecondaryIndexesReadProvisionedThroughputSettings {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/dynamodb_global_table.html#read_capacity_auto_scaling_settings DynamodbGlobalTable#read_capacity_auto_scaling_settings}
  */
  readonly readCapacityAutoScalingSettings?: DynamodbGlobalTableReplicasGlobalSecondaryIndexesReadProvisionedThroughputSettingsReadCapacityAutoScalingSettings;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/dynamodb_global_table.html#read_capacity_units DynamodbGlobalTable#read_capacity_units}
  */
  readonly readCapacityUnits?: number;
}

export function dynamodbGlobalTableReplicasGlobalSecondaryIndexesReadProvisionedThroughputSettingsToTerraform(struct?: DynamodbGlobalTableReplicasGlobalSecondaryIndexesReadProvisionedThroughputSettings): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    read_capacity_auto_scaling_settings: dynamodbGlobalTableReplicasGlobalSecondaryIndexesReadProvisionedThroughputSettingsReadCapacityAutoScalingSettingsToTerraform(struct!.readCapacityAutoScalingSettings),
    read_capacity_units: cdktf.numberToTerraform(struct!.readCapacityUnits),
  }
}

export interface DynamodbGlobalTableReplicasGlobalSecondaryIndexes {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/dynamodb_global_table.html#contributor_insights_specification DynamodbGlobalTable#contributor_insights_specification}
  */
  readonly contributorInsightsSpecification?: DynamodbGlobalTableReplicasGlobalSecondaryIndexesContributorInsightsSpecification;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/dynamodb_global_table.html#index_name DynamodbGlobalTable#index_name}
  */
  readonly indexName: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/dynamodb_global_table.html#read_provisioned_throughput_settings DynamodbGlobalTable#read_provisioned_throughput_settings}
  */
  readonly readProvisionedThroughputSettings?: DynamodbGlobalTableReplicasGlobalSecondaryIndexesReadProvisionedThroughputSettings;
}

export function dynamodbGlobalTableReplicasGlobalSecondaryIndexesToTerraform(struct?: DynamodbGlobalTableReplicasGlobalSecondaryIndexes): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    contributor_insights_specification: dynamodbGlobalTableReplicasGlobalSecondaryIndexesContributorInsightsSpecificationToTerraform(struct!.contributorInsightsSpecification),
    index_name: cdktf.stringToTerraform(struct!.indexName),
    read_provisioned_throughput_settings: dynamodbGlobalTableReplicasGlobalSecondaryIndexesReadProvisionedThroughputSettingsToTerraform(struct!.readProvisionedThroughputSettings),
  }
}

export interface DynamodbGlobalTableReplicasPointInTimeRecoverySpecification {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/dynamodb_global_table.html#point_in_time_recovery_enabled DynamodbGlobalTable#point_in_time_recovery_enabled}
  */
  readonly pointInTimeRecoveryEnabled?: boolean | cdktf.IResolvable;
}

export function dynamodbGlobalTableReplicasPointInTimeRecoverySpecificationToTerraform(struct?: DynamodbGlobalTableReplicasPointInTimeRecoverySpecification): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    point_in_time_recovery_enabled: cdktf.booleanToTerraform(struct!.pointInTimeRecoveryEnabled),
  }
}

export interface DynamodbGlobalTableReplicasReadProvisionedThroughputSettingsReadCapacityAutoScalingSettingsTargetTrackingScalingPolicyConfiguration {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/dynamodb_global_table.html#disable_scale_in DynamodbGlobalTable#disable_scale_in}
  */
  readonly disableScaleIn?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/dynamodb_global_table.html#scale_in_cooldown DynamodbGlobalTable#scale_in_cooldown}
  */
  readonly scaleInCooldown?: number;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/dynamodb_global_table.html#scale_out_cooldown DynamodbGlobalTable#scale_out_cooldown}
  */
  readonly scaleOutCooldown?: number;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/dynamodb_global_table.html#target_value DynamodbGlobalTable#target_value}
  */
  readonly targetValue: number;
}

export function dynamodbGlobalTableReplicasReadProvisionedThroughputSettingsReadCapacityAutoScalingSettingsTargetTrackingScalingPolicyConfigurationToTerraform(struct?: DynamodbGlobalTableReplicasReadProvisionedThroughputSettingsReadCapacityAutoScalingSettingsTargetTrackingScalingPolicyConfiguration): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    disable_scale_in: cdktf.booleanToTerraform(struct!.disableScaleIn),
    scale_in_cooldown: cdktf.numberToTerraform(struct!.scaleInCooldown),
    scale_out_cooldown: cdktf.numberToTerraform(struct!.scaleOutCooldown),
    target_value: cdktf.numberToTerraform(struct!.targetValue),
  }
}

export interface DynamodbGlobalTableReplicasReadProvisionedThroughputSettingsReadCapacityAutoScalingSettings {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/dynamodb_global_table.html#max_capacity DynamodbGlobalTable#max_capacity}
  */
  readonly maxCapacity: number;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/dynamodb_global_table.html#min_capacity DynamodbGlobalTable#min_capacity}
  */
  readonly minCapacity: number;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/dynamodb_global_table.html#seed_capacity DynamodbGlobalTable#seed_capacity}
  */
  readonly seedCapacity?: number;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/dynamodb_global_table.html#target_tracking_scaling_policy_configuration DynamodbGlobalTable#target_tracking_scaling_policy_configuration}
  */
  readonly targetTrackingScalingPolicyConfiguration: DynamodbGlobalTableReplicasReadProvisionedThroughputSettingsReadCapacityAutoScalingSettingsTargetTrackingScalingPolicyConfiguration;
}

export function dynamodbGlobalTableReplicasReadProvisionedThroughputSettingsReadCapacityAutoScalingSettingsToTerraform(struct?: DynamodbGlobalTableReplicasReadProvisionedThroughputSettingsReadCapacityAutoScalingSettings): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    max_capacity: cdktf.numberToTerraform(struct!.maxCapacity),
    min_capacity: cdktf.numberToTerraform(struct!.minCapacity),
    seed_capacity: cdktf.numberToTerraform(struct!.seedCapacity),
    target_tracking_scaling_policy_configuration: dynamodbGlobalTableReplicasReadProvisionedThroughputSettingsReadCapacityAutoScalingSettingsTargetTrackingScalingPolicyConfigurationToTerraform(struct!.targetTrackingScalingPolicyConfiguration),
  }
}

export interface DynamodbGlobalTableReplicasReadProvisionedThroughputSettings {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/dynamodb_global_table.html#read_capacity_auto_scaling_settings DynamodbGlobalTable#read_capacity_auto_scaling_settings}
  */
  readonly readCapacityAutoScalingSettings?: DynamodbGlobalTableReplicasReadProvisionedThroughputSettingsReadCapacityAutoScalingSettings;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/dynamodb_global_table.html#read_capacity_units DynamodbGlobalTable#read_capacity_units}
  */
  readonly readCapacityUnits?: number;
}

export function dynamodbGlobalTableReplicasReadProvisionedThroughputSettingsToTerraform(struct?: DynamodbGlobalTableReplicasReadProvisionedThroughputSettings): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    read_capacity_auto_scaling_settings: dynamodbGlobalTableReplicasReadProvisionedThroughputSettingsReadCapacityAutoScalingSettingsToTerraform(struct!.readCapacityAutoScalingSettings),
    read_capacity_units: cdktf.numberToTerraform(struct!.readCapacityUnits),
  }
}

export interface DynamodbGlobalTableReplicasSseSpecification {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/dynamodb_global_table.html#kms_master_key_id DynamodbGlobalTable#kms_master_key_id}
  */
  readonly kmsMasterKeyId: string;
}

export function dynamodbGlobalTableReplicasSseSpecificationToTerraform(struct?: DynamodbGlobalTableReplicasSseSpecification): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    kms_master_key_id: cdktf.stringToTerraform(struct!.kmsMasterKeyId),
  }
}

export interface DynamodbGlobalTableReplicasTags {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/dynamodb_global_table.html#key DynamodbGlobalTable#key}
  */
  readonly key: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/dynamodb_global_table.html#value DynamodbGlobalTable#value}
  */
  readonly value: string;
}

export function dynamodbGlobalTableReplicasTagsToTerraform(struct?: DynamodbGlobalTableReplicasTags): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    key: cdktf.stringToTerraform(struct!.key),
    value: cdktf.stringToTerraform(struct!.value),
  }
}

export interface DynamodbGlobalTableReplicas {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/dynamodb_global_table.html#contributor_insights_specification DynamodbGlobalTable#contributor_insights_specification}
  */
  readonly contributorInsightsSpecification?: DynamodbGlobalTableReplicasContributorInsightsSpecification;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/dynamodb_global_table.html#global_secondary_indexes DynamodbGlobalTable#global_secondary_indexes}
  */
  readonly globalSecondaryIndexes?: DynamodbGlobalTableReplicasGlobalSecondaryIndexes[];
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/dynamodb_global_table.html#point_in_time_recovery_specification DynamodbGlobalTable#point_in_time_recovery_specification}
  */
  readonly pointInTimeRecoverySpecification?: DynamodbGlobalTableReplicasPointInTimeRecoverySpecification;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/dynamodb_global_table.html#read_provisioned_throughput_settings DynamodbGlobalTable#read_provisioned_throughput_settings}
  */
  readonly readProvisionedThroughputSettings?: DynamodbGlobalTableReplicasReadProvisionedThroughputSettings;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/dynamodb_global_table.html#region DynamodbGlobalTable#region}
  */
  readonly region: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/dynamodb_global_table.html#sse_specification DynamodbGlobalTable#sse_specification}
  */
  readonly sseSpecification?: DynamodbGlobalTableReplicasSseSpecification;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/dynamodb_global_table.html#tags DynamodbGlobalTable#tags}
  */
  readonly tags?: DynamodbGlobalTableReplicasTags[];
}

export function dynamodbGlobalTableReplicasToTerraform(struct?: DynamodbGlobalTableReplicas): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    contributor_insights_specification: dynamodbGlobalTableReplicasContributorInsightsSpecificationToTerraform(struct!.contributorInsightsSpecification),
    global_secondary_indexes: cdktf.listMapper(dynamodbGlobalTableReplicasGlobalSecondaryIndexesToTerraform)(struct!.globalSecondaryIndexes),
    point_in_time_recovery_specification: dynamodbGlobalTableReplicasPointInTimeRecoverySpecificationToTerraform(struct!.pointInTimeRecoverySpecification),
    read_provisioned_throughput_settings: dynamodbGlobalTableReplicasReadProvisionedThroughputSettingsToTerraform(struct!.readProvisionedThroughputSettings),
    region: cdktf.stringToTerraform(struct!.region),
    sse_specification: dynamodbGlobalTableReplicasSseSpecificationToTerraform(struct!.sseSpecification),
    tags: cdktf.listMapper(dynamodbGlobalTableReplicasTagsToTerraform)(struct!.tags),
  }
}

export interface DynamodbGlobalTableSseSpecification {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/dynamodb_global_table.html#sse_enabled DynamodbGlobalTable#sse_enabled}
  */
  readonly sseEnabled: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/dynamodb_global_table.html#sse_type DynamodbGlobalTable#sse_type}
  */
  readonly sseType?: string;
}

export function dynamodbGlobalTableSseSpecificationToTerraform(struct?: DynamodbGlobalTableSseSpecification): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    sse_enabled: cdktf.booleanToTerraform(struct!.sseEnabled),
    sse_type: cdktf.stringToTerraform(struct!.sseType),
  }
}

export interface DynamodbGlobalTableStreamSpecification {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/dynamodb_global_table.html#stream_view_type DynamodbGlobalTable#stream_view_type}
  */
  readonly streamViewType: string;
}

export function dynamodbGlobalTableStreamSpecificationToTerraform(struct?: DynamodbGlobalTableStreamSpecification): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    stream_view_type: cdktf.stringToTerraform(struct!.streamViewType),
  }
}

export interface DynamodbGlobalTableTimeToLiveSpecification {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/dynamodb_global_table.html#attribute_name DynamodbGlobalTable#attribute_name}
  */
  readonly attributeName?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/dynamodb_global_table.html#enabled DynamodbGlobalTable#enabled}
  */
  readonly enabled: boolean | cdktf.IResolvable;
}

export function dynamodbGlobalTableTimeToLiveSpecificationToTerraform(struct?: DynamodbGlobalTableTimeToLiveSpecification): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    attribute_name: cdktf.stringToTerraform(struct!.attributeName),
    enabled: cdktf.booleanToTerraform(struct!.enabled),
  }
}

export interface DynamodbGlobalTableWriteProvisionedThroughputSettingsWriteCapacityAutoScalingSettingsTargetTrackingScalingPolicyConfiguration {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/dynamodb_global_table.html#disable_scale_in DynamodbGlobalTable#disable_scale_in}
  */
  readonly disableScaleIn?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/dynamodb_global_table.html#scale_in_cooldown DynamodbGlobalTable#scale_in_cooldown}
  */
  readonly scaleInCooldown?: number;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/dynamodb_global_table.html#scale_out_cooldown DynamodbGlobalTable#scale_out_cooldown}
  */
  readonly scaleOutCooldown?: number;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/dynamodb_global_table.html#target_value DynamodbGlobalTable#target_value}
  */
  readonly targetValue: number;
}

export function dynamodbGlobalTableWriteProvisionedThroughputSettingsWriteCapacityAutoScalingSettingsTargetTrackingScalingPolicyConfigurationToTerraform(struct?: DynamodbGlobalTableWriteProvisionedThroughputSettingsWriteCapacityAutoScalingSettingsTargetTrackingScalingPolicyConfiguration): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    disable_scale_in: cdktf.booleanToTerraform(struct!.disableScaleIn),
    scale_in_cooldown: cdktf.numberToTerraform(struct!.scaleInCooldown),
    scale_out_cooldown: cdktf.numberToTerraform(struct!.scaleOutCooldown),
    target_value: cdktf.numberToTerraform(struct!.targetValue),
  }
}

export interface DynamodbGlobalTableWriteProvisionedThroughputSettingsWriteCapacityAutoScalingSettings {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/dynamodb_global_table.html#max_capacity DynamodbGlobalTable#max_capacity}
  */
  readonly maxCapacity: number;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/dynamodb_global_table.html#min_capacity DynamodbGlobalTable#min_capacity}
  */
  readonly minCapacity: number;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/dynamodb_global_table.html#seed_capacity DynamodbGlobalTable#seed_capacity}
  */
  readonly seedCapacity?: number;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/dynamodb_global_table.html#target_tracking_scaling_policy_configuration DynamodbGlobalTable#target_tracking_scaling_policy_configuration}
  */
  readonly targetTrackingScalingPolicyConfiguration: DynamodbGlobalTableWriteProvisionedThroughputSettingsWriteCapacityAutoScalingSettingsTargetTrackingScalingPolicyConfiguration;
}

export function dynamodbGlobalTableWriteProvisionedThroughputSettingsWriteCapacityAutoScalingSettingsToTerraform(struct?: DynamodbGlobalTableWriteProvisionedThroughputSettingsWriteCapacityAutoScalingSettings): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    max_capacity: cdktf.numberToTerraform(struct!.maxCapacity),
    min_capacity: cdktf.numberToTerraform(struct!.minCapacity),
    seed_capacity: cdktf.numberToTerraform(struct!.seedCapacity),
    target_tracking_scaling_policy_configuration: dynamodbGlobalTableWriteProvisionedThroughputSettingsWriteCapacityAutoScalingSettingsTargetTrackingScalingPolicyConfigurationToTerraform(struct!.targetTrackingScalingPolicyConfiguration),
  }
}

export interface DynamodbGlobalTableWriteProvisionedThroughputSettings {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/dynamodb_global_table.html#write_capacity_auto_scaling_settings DynamodbGlobalTable#write_capacity_auto_scaling_settings}
  */
  readonly writeCapacityAutoScalingSettings?: DynamodbGlobalTableWriteProvisionedThroughputSettingsWriteCapacityAutoScalingSettings;
}

export function dynamodbGlobalTableWriteProvisionedThroughputSettingsToTerraform(struct?: DynamodbGlobalTableWriteProvisionedThroughputSettings): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    write_capacity_auto_scaling_settings: dynamodbGlobalTableWriteProvisionedThroughputSettingsWriteCapacityAutoScalingSettingsToTerraform(struct!.writeCapacityAutoScalingSettings),
  }
}


/**
* Represents a {@link https://www.terraform.io/docs/providers/awscc/r/dynamodb_global_table.html awscc_dynamodb_global_table}
*/
export class DynamodbGlobalTable extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType: string = "awscc_dynamodb_global_table";

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://www.terraform.io/docs/providers/awscc/r/dynamodb_global_table.html awscc_dynamodb_global_table} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DynamodbGlobalTableConfig
  */
  public constructor(scope: Construct, id: string, config: DynamodbGlobalTableConfig) {
    super(scope, id, {
      terraformResourceType: 'awscc_dynamodb_global_table',
      terraformGeneratorMetadata: {
        providerName: 'awscc'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle
    });
    this._attributeDefinitions = config.attributeDefinitions;
    this._billingMode = config.billingMode;
    this._globalSecondaryIndexes = config.globalSecondaryIndexes;
    this._keySchema = config.keySchema;
    this._localSecondaryIndexes = config.localSecondaryIndexes;
    this._replicas = config.replicas;
    this._sseSpecification = config.sseSpecification;
    this._streamSpecification = config.streamSpecification;
    this._tableName = config.tableName;
    this._timeToLiveSpecification = config.timeToLiveSpecification;
    this._writeProvisionedThroughputSettings = config.writeProvisionedThroughputSettings;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // arn - computed: true, optional: false, required: false
  public get arn() {
    return this.getStringAttribute('arn');
  }

  // attribute_definitions - computed: false, optional: false, required: true
  private _attributeDefinitions: DynamodbGlobalTableAttributeDefinitions[];
  public get attributeDefinitions() {
    return this.interpolationForAttribute('attribute_definitions') as any;
  }
  public set attributeDefinitions(value: DynamodbGlobalTableAttributeDefinitions[]) {
    this._attributeDefinitions = value;
  }
  // Temporarily expose input value. Use with caution.
  public get attributeDefinitionsInput() {
    return this._attributeDefinitions
  }

  // billing_mode - computed: false, optional: true, required: false
  private _billingMode?: string;
  public get billingMode() {
    return this.getStringAttribute('billing_mode');
  }
  public set billingMode(value: string ) {
    this._billingMode = value;
  }
  public resetBillingMode() {
    this._billingMode = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get billingModeInput() {
    return this._billingMode
  }

  // global_secondary_indexes - computed: false, optional: true, required: false
  private _globalSecondaryIndexes?: DynamodbGlobalTableGlobalSecondaryIndexes[];
  public get globalSecondaryIndexes() {
    return this.interpolationForAttribute('global_secondary_indexes') as any;
  }
  public set globalSecondaryIndexes(value: DynamodbGlobalTableGlobalSecondaryIndexes[] ) {
    this._globalSecondaryIndexes = value;
  }
  public resetGlobalSecondaryIndexes() {
    this._globalSecondaryIndexes = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get globalSecondaryIndexesInput() {
    return this._globalSecondaryIndexes
  }

  // id - computed: true, optional: false, required: false
  public get id() {
    return this.getStringAttribute('id');
  }

  // key_schema - computed: false, optional: false, required: true
  private _keySchema: DynamodbGlobalTableKeySchema[];
  public get keySchema() {
    return this.interpolationForAttribute('key_schema') as any;
  }
  public set keySchema(value: DynamodbGlobalTableKeySchema[]) {
    this._keySchema = value;
  }
  // Temporarily expose input value. Use with caution.
  public get keySchemaInput() {
    return this._keySchema
  }

  // local_secondary_indexes - computed: true, optional: true, required: false
  private _localSecondaryIndexes?: DynamodbGlobalTableLocalSecondaryIndexes[];
  public get localSecondaryIndexes() {
    return this.interpolationForAttribute('local_secondary_indexes') as any;
  }
  public set localSecondaryIndexes(value: DynamodbGlobalTableLocalSecondaryIndexes[]) {
    this._localSecondaryIndexes = value;
  }
  public resetLocalSecondaryIndexes() {
    this._localSecondaryIndexes = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get localSecondaryIndexesInput() {
    return this._localSecondaryIndexes
  }

  // replicas - computed: false, optional: false, required: true
  private _replicas: DynamodbGlobalTableReplicas[];
  public get replicas() {
    return this.interpolationForAttribute('replicas') as any;
  }
  public set replicas(value: DynamodbGlobalTableReplicas[]) {
    this._replicas = value;
  }
  // Temporarily expose input value. Use with caution.
  public get replicasInput() {
    return this._replicas
  }

  // sse_specification - computed: false, optional: true, required: false
  private _sseSpecification?: DynamodbGlobalTableSseSpecification;
  public get sseSpecification() {
    return this.interpolationForAttribute('sse_specification') as any;
  }
  public set sseSpecification(value: DynamodbGlobalTableSseSpecification ) {
    this._sseSpecification = value;
  }
  public resetSseSpecification() {
    this._sseSpecification = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sseSpecificationInput() {
    return this._sseSpecification
  }

  // stream_arn - computed: true, optional: false, required: false
  public get streamArn() {
    return this.getStringAttribute('stream_arn');
  }

  // stream_specification - computed: false, optional: true, required: false
  private _streamSpecification?: DynamodbGlobalTableStreamSpecification;
  public get streamSpecification() {
    return this.interpolationForAttribute('stream_specification') as any;
  }
  public set streamSpecification(value: DynamodbGlobalTableStreamSpecification ) {
    this._streamSpecification = value;
  }
  public resetStreamSpecification() {
    this._streamSpecification = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get streamSpecificationInput() {
    return this._streamSpecification
  }

  // table_id - computed: true, optional: false, required: false
  public get tableId() {
    return this.getStringAttribute('table_id');
  }

  // table_name - computed: true, optional: true, required: false
  private _tableName?: string;
  public get tableName() {
    return this.getStringAttribute('table_name');
  }
  public set tableName(value: string) {
    this._tableName = value;
  }
  public resetTableName() {
    this._tableName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tableNameInput() {
    return this._tableName
  }

  // time_to_live_specification - computed: false, optional: true, required: false
  private _timeToLiveSpecification?: DynamodbGlobalTableTimeToLiveSpecification;
  public get timeToLiveSpecification() {
    return this.interpolationForAttribute('time_to_live_specification') as any;
  }
  public set timeToLiveSpecification(value: DynamodbGlobalTableTimeToLiveSpecification ) {
    this._timeToLiveSpecification = value;
  }
  public resetTimeToLiveSpecification() {
    this._timeToLiveSpecification = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get timeToLiveSpecificationInput() {
    return this._timeToLiveSpecification
  }

  // write_provisioned_throughput_settings - computed: false, optional: true, required: false
  private _writeProvisionedThroughputSettings?: DynamodbGlobalTableWriteProvisionedThroughputSettings;
  public get writeProvisionedThroughputSettings() {
    return this.interpolationForAttribute('write_provisioned_throughput_settings') as any;
  }
  public set writeProvisionedThroughputSettings(value: DynamodbGlobalTableWriteProvisionedThroughputSettings ) {
    this._writeProvisionedThroughputSettings = value;
  }
  public resetWriteProvisionedThroughputSettings() {
    this._writeProvisionedThroughputSettings = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get writeProvisionedThroughputSettingsInput() {
    return this._writeProvisionedThroughputSettings
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      attribute_definitions: cdktf.listMapper(dynamodbGlobalTableAttributeDefinitionsToTerraform)(this._attributeDefinitions),
      billing_mode: cdktf.stringToTerraform(this._billingMode),
      global_secondary_indexes: cdktf.listMapper(dynamodbGlobalTableGlobalSecondaryIndexesToTerraform)(this._globalSecondaryIndexes),
      key_schema: cdktf.listMapper(dynamodbGlobalTableKeySchemaToTerraform)(this._keySchema),
      local_secondary_indexes: cdktf.listMapper(dynamodbGlobalTableLocalSecondaryIndexesToTerraform)(this._localSecondaryIndexes),
      replicas: cdktf.listMapper(dynamodbGlobalTableReplicasToTerraform)(this._replicas),
      sse_specification: dynamodbGlobalTableSseSpecificationToTerraform(this._sseSpecification),
      stream_specification: dynamodbGlobalTableStreamSpecificationToTerraform(this._streamSpecification),
      table_name: cdktf.stringToTerraform(this._tableName),
      time_to_live_specification: dynamodbGlobalTableTimeToLiveSpecificationToTerraform(this._timeToLiveSpecification),
      write_provisioned_throughput_settings: dynamodbGlobalTableWriteProvisionedThroughputSettingsToTerraform(this._writeProvisionedThroughputSettings),
    };
  }
}
