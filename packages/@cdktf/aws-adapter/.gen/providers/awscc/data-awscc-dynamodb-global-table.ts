// https://www.terraform.io/docs/providers/awscc/d/dynamodb_global_table.html
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DataAwsccDynamodbGlobalTableConfig extends cdktf.TerraformMetaArguments {
  /**
  * Uniquely identifies the resource.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/d/dynamodb_global_table.html#id DataAwsccDynamodbGlobalTable#id}
  */
  readonly id: string;
}
export class DataAwsccDynamodbGlobalTableAttributeDefinitions extends cdktf.ComplexComputedList {

  // attribute_name - computed: true, optional: false, required: false
  public get attributeName() {
    return this.getStringAttribute('attribute_name');
  }

  // attribute_type - computed: true, optional: false, required: false
  public get attributeType() {
    return this.getStringAttribute('attribute_type');
  }
}

export function dataAwsccDynamodbGlobalTableAttributeDefinitionsToTerraform(struct?: DataAwsccDynamodbGlobalTableAttributeDefinitions): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    attribute_name: cdktf.stringToTerraform(struct!.attributeName),
    attribute_type: cdktf.stringToTerraform(struct!.attributeType),
  }
}

export class DataAwsccDynamodbGlobalTableGlobalSecondaryIndexesKeySchema extends cdktf.ComplexComputedList {

  // attribute_name - computed: true, optional: false, required: false
  public get attributeName() {
    return this.getStringAttribute('attribute_name');
  }

  // key_type - computed: true, optional: false, required: false
  public get keyType() {
    return this.getStringAttribute('key_type');
  }
}

export function dataAwsccDynamodbGlobalTableGlobalSecondaryIndexesKeySchemaToTerraform(struct?: DataAwsccDynamodbGlobalTableGlobalSecondaryIndexesKeySchema): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    attribute_name: cdktf.stringToTerraform(struct!.attributeName),
    key_type: cdktf.stringToTerraform(struct!.keyType),
  }
}

export class DataAwsccDynamodbGlobalTableGlobalSecondaryIndexesProjection extends cdktf.ComplexComputedList {

  // non_key_attributes - computed: true, optional: false, required: false
  public get nonKeyAttributes() {
    return this.getListAttribute('non_key_attributes');
  }

  // projection_type - computed: true, optional: false, required: false
  public get projectionType() {
    return this.getStringAttribute('projection_type');
  }
}

export function dataAwsccDynamodbGlobalTableGlobalSecondaryIndexesProjectionToTerraform(struct?: DataAwsccDynamodbGlobalTableGlobalSecondaryIndexesProjection): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    non_key_attributes: cdktf.listMapper(cdktf.stringToTerraform)(struct!.nonKeyAttributes),
    projection_type: cdktf.stringToTerraform(struct!.projectionType),
  }
}

export class DataAwsccDynamodbGlobalTableGlobalSecondaryIndexesWriteProvisionedThroughputSettingsWriteCapacityAutoScalingSettingsTargetTrackingScalingPolicyConfiguration extends cdktf.ComplexComputedList {

  // disable_scale_in - computed: true, optional: false, required: false
  public get disableScaleIn() {
    return this.getBooleanAttribute('disable_scale_in');
  }

  // scale_in_cooldown - computed: true, optional: false, required: false
  public get scaleInCooldown() {
    return this.getNumberAttribute('scale_in_cooldown');
  }

  // scale_out_cooldown - computed: true, optional: false, required: false
  public get scaleOutCooldown() {
    return this.getNumberAttribute('scale_out_cooldown');
  }

  // target_value - computed: true, optional: false, required: false
  public get targetValue() {
    return this.getNumberAttribute('target_value');
  }
}

export function dataAwsccDynamodbGlobalTableGlobalSecondaryIndexesWriteProvisionedThroughputSettingsWriteCapacityAutoScalingSettingsTargetTrackingScalingPolicyConfigurationToTerraform(struct?: DataAwsccDynamodbGlobalTableGlobalSecondaryIndexesWriteProvisionedThroughputSettingsWriteCapacityAutoScalingSettingsTargetTrackingScalingPolicyConfiguration): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    disable_scale_in: cdktf.booleanToTerraform(struct!.disableScaleIn),
    scale_in_cooldown: cdktf.numberToTerraform(struct!.scaleInCooldown),
    scale_out_cooldown: cdktf.numberToTerraform(struct!.scaleOutCooldown),
    target_value: cdktf.numberToTerraform(struct!.targetValue),
  }
}

export class DataAwsccDynamodbGlobalTableGlobalSecondaryIndexesWriteProvisionedThroughputSettingsWriteCapacityAutoScalingSettings extends cdktf.ComplexComputedList {

  // max_capacity - computed: true, optional: false, required: false
  public get maxCapacity() {
    return this.getNumberAttribute('max_capacity');
  }

  // min_capacity - computed: true, optional: false, required: false
  public get minCapacity() {
    return this.getNumberAttribute('min_capacity');
  }

  // seed_capacity - computed: true, optional: false, required: false
  public get seedCapacity() {
    return this.getNumberAttribute('seed_capacity');
  }

  // target_tracking_scaling_policy_configuration - computed: true, optional: false, required: false
  public get targetTrackingScalingPolicyConfiguration() {
    return this.interpolationForAttribute('target_tracking_scaling_policy_configuration') as any;
  }
}

export function dataAwsccDynamodbGlobalTableGlobalSecondaryIndexesWriteProvisionedThroughputSettingsWriteCapacityAutoScalingSettingsToTerraform(struct?: DataAwsccDynamodbGlobalTableGlobalSecondaryIndexesWriteProvisionedThroughputSettingsWriteCapacityAutoScalingSettings): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    max_capacity: cdktf.numberToTerraform(struct!.maxCapacity),
    min_capacity: cdktf.numberToTerraform(struct!.minCapacity),
    seed_capacity: cdktf.numberToTerraform(struct!.seedCapacity),
    target_tracking_scaling_policy_configuration: dataAwsccDynamodbGlobalTableGlobalSecondaryIndexesWriteProvisionedThroughputSettingsWriteCapacityAutoScalingSettingsTargetTrackingScalingPolicyConfigurationToTerraform(struct!.targetTrackingScalingPolicyConfiguration),
  }
}

export class DataAwsccDynamodbGlobalTableGlobalSecondaryIndexesWriteProvisionedThroughputSettings extends cdktf.ComplexComputedList {

  // write_capacity_auto_scaling_settings - computed: true, optional: false, required: false
  public get writeCapacityAutoScalingSettings() {
    return this.interpolationForAttribute('write_capacity_auto_scaling_settings') as any;
  }
}

export function dataAwsccDynamodbGlobalTableGlobalSecondaryIndexesWriteProvisionedThroughputSettingsToTerraform(struct?: DataAwsccDynamodbGlobalTableGlobalSecondaryIndexesWriteProvisionedThroughputSettings): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    write_capacity_auto_scaling_settings: dataAwsccDynamodbGlobalTableGlobalSecondaryIndexesWriteProvisionedThroughputSettingsWriteCapacityAutoScalingSettingsToTerraform(struct!.writeCapacityAutoScalingSettings),
  }
}

export class DataAwsccDynamodbGlobalTableGlobalSecondaryIndexes extends cdktf.ComplexComputedList {

  // index_name - computed: true, optional: false, required: false
  public get indexName() {
    return this.getStringAttribute('index_name');
  }

  // key_schema - computed: true, optional: false, required: false
  public get keySchema() {
    return this.interpolationForAttribute('key_schema') as any;
  }

  // projection - computed: true, optional: false, required: false
  public get projection() {
    return this.interpolationForAttribute('projection') as any;
  }

  // write_provisioned_throughput_settings - computed: true, optional: false, required: false
  public get writeProvisionedThroughputSettings() {
    return this.interpolationForAttribute('write_provisioned_throughput_settings') as any;
  }
}

export function dataAwsccDynamodbGlobalTableGlobalSecondaryIndexesToTerraform(struct?: DataAwsccDynamodbGlobalTableGlobalSecondaryIndexes): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    index_name: cdktf.stringToTerraform(struct!.indexName),
    key_schema: cdktf.listMapper(dataAwsccDynamodbGlobalTableGlobalSecondaryIndexesKeySchemaToTerraform)(struct!.keySchema),
    projection: dataAwsccDynamodbGlobalTableGlobalSecondaryIndexesProjectionToTerraform(struct!.projection),
    write_provisioned_throughput_settings: dataAwsccDynamodbGlobalTableGlobalSecondaryIndexesWriteProvisionedThroughputSettingsToTerraform(struct!.writeProvisionedThroughputSettings),
  }
}

export class DataAwsccDynamodbGlobalTableKeySchema extends cdktf.ComplexComputedList {

  // attribute_name - computed: true, optional: false, required: false
  public get attributeName() {
    return this.getStringAttribute('attribute_name');
  }

  // key_type - computed: true, optional: false, required: false
  public get keyType() {
    return this.getStringAttribute('key_type');
  }
}

export function dataAwsccDynamodbGlobalTableKeySchemaToTerraform(struct?: DataAwsccDynamodbGlobalTableKeySchema): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    attribute_name: cdktf.stringToTerraform(struct!.attributeName),
    key_type: cdktf.stringToTerraform(struct!.keyType),
  }
}

export class DataAwsccDynamodbGlobalTableLocalSecondaryIndexesKeySchema extends cdktf.ComplexComputedList {

  // attribute_name - computed: true, optional: false, required: false
  public get attributeName() {
    return this.getStringAttribute('attribute_name');
  }

  // key_type - computed: true, optional: false, required: false
  public get keyType() {
    return this.getStringAttribute('key_type');
  }
}

export function dataAwsccDynamodbGlobalTableLocalSecondaryIndexesKeySchemaToTerraform(struct?: DataAwsccDynamodbGlobalTableLocalSecondaryIndexesKeySchema): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    attribute_name: cdktf.stringToTerraform(struct!.attributeName),
    key_type: cdktf.stringToTerraform(struct!.keyType),
  }
}

export class DataAwsccDynamodbGlobalTableLocalSecondaryIndexesProjection extends cdktf.ComplexComputedList {

  // non_key_attributes - computed: true, optional: false, required: false
  public get nonKeyAttributes() {
    return this.getListAttribute('non_key_attributes');
  }

  // projection_type - computed: true, optional: false, required: false
  public get projectionType() {
    return this.getStringAttribute('projection_type');
  }
}

export function dataAwsccDynamodbGlobalTableLocalSecondaryIndexesProjectionToTerraform(struct?: DataAwsccDynamodbGlobalTableLocalSecondaryIndexesProjection): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    non_key_attributes: cdktf.listMapper(cdktf.stringToTerraform)(struct!.nonKeyAttributes),
    projection_type: cdktf.stringToTerraform(struct!.projectionType),
  }
}

export class DataAwsccDynamodbGlobalTableLocalSecondaryIndexes extends cdktf.ComplexComputedList {

  // index_name - computed: true, optional: false, required: false
  public get indexName() {
    return this.getStringAttribute('index_name');
  }

  // key_schema - computed: true, optional: false, required: false
  public get keySchema() {
    return this.interpolationForAttribute('key_schema') as any;
  }

  // projection - computed: true, optional: false, required: false
  public get projection() {
    return this.interpolationForAttribute('projection') as any;
  }
}

export function dataAwsccDynamodbGlobalTableLocalSecondaryIndexesToTerraform(struct?: DataAwsccDynamodbGlobalTableLocalSecondaryIndexes): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    index_name: cdktf.stringToTerraform(struct!.indexName),
    key_schema: cdktf.listMapper(dataAwsccDynamodbGlobalTableLocalSecondaryIndexesKeySchemaToTerraform)(struct!.keySchema),
    projection: dataAwsccDynamodbGlobalTableLocalSecondaryIndexesProjectionToTerraform(struct!.projection),
  }
}

export class DataAwsccDynamodbGlobalTableReplicasContributorInsightsSpecification extends cdktf.ComplexComputedList {

  // enabled - computed: true, optional: false, required: false
  public get enabled() {
    return this.getBooleanAttribute('enabled');
  }
}

export function dataAwsccDynamodbGlobalTableReplicasContributorInsightsSpecificationToTerraform(struct?: DataAwsccDynamodbGlobalTableReplicasContributorInsightsSpecification): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    enabled: cdktf.booleanToTerraform(struct!.enabled),
  }
}

export class DataAwsccDynamodbGlobalTableReplicasGlobalSecondaryIndexesContributorInsightsSpecification extends cdktf.ComplexComputedList {

  // enabled - computed: true, optional: false, required: false
  public get enabled() {
    return this.getBooleanAttribute('enabled');
  }
}

export function dataAwsccDynamodbGlobalTableReplicasGlobalSecondaryIndexesContributorInsightsSpecificationToTerraform(struct?: DataAwsccDynamodbGlobalTableReplicasGlobalSecondaryIndexesContributorInsightsSpecification): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    enabled: cdktf.booleanToTerraform(struct!.enabled),
  }
}

export class DataAwsccDynamodbGlobalTableReplicasGlobalSecondaryIndexesReadProvisionedThroughputSettingsReadCapacityAutoScalingSettingsTargetTrackingScalingPolicyConfiguration extends cdktf.ComplexComputedList {

  // disable_scale_in - computed: true, optional: false, required: false
  public get disableScaleIn() {
    return this.getBooleanAttribute('disable_scale_in');
  }

  // scale_in_cooldown - computed: true, optional: false, required: false
  public get scaleInCooldown() {
    return this.getNumberAttribute('scale_in_cooldown');
  }

  // scale_out_cooldown - computed: true, optional: false, required: false
  public get scaleOutCooldown() {
    return this.getNumberAttribute('scale_out_cooldown');
  }

  // target_value - computed: true, optional: false, required: false
  public get targetValue() {
    return this.getNumberAttribute('target_value');
  }
}

export function dataAwsccDynamodbGlobalTableReplicasGlobalSecondaryIndexesReadProvisionedThroughputSettingsReadCapacityAutoScalingSettingsTargetTrackingScalingPolicyConfigurationToTerraform(struct?: DataAwsccDynamodbGlobalTableReplicasGlobalSecondaryIndexesReadProvisionedThroughputSettingsReadCapacityAutoScalingSettingsTargetTrackingScalingPolicyConfiguration): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    disable_scale_in: cdktf.booleanToTerraform(struct!.disableScaleIn),
    scale_in_cooldown: cdktf.numberToTerraform(struct!.scaleInCooldown),
    scale_out_cooldown: cdktf.numberToTerraform(struct!.scaleOutCooldown),
    target_value: cdktf.numberToTerraform(struct!.targetValue),
  }
}

export class DataAwsccDynamodbGlobalTableReplicasGlobalSecondaryIndexesReadProvisionedThroughputSettingsReadCapacityAutoScalingSettings extends cdktf.ComplexComputedList {

  // max_capacity - computed: true, optional: false, required: false
  public get maxCapacity() {
    return this.getNumberAttribute('max_capacity');
  }

  // min_capacity - computed: true, optional: false, required: false
  public get minCapacity() {
    return this.getNumberAttribute('min_capacity');
  }

  // seed_capacity - computed: true, optional: false, required: false
  public get seedCapacity() {
    return this.getNumberAttribute('seed_capacity');
  }

  // target_tracking_scaling_policy_configuration - computed: true, optional: false, required: false
  public get targetTrackingScalingPolicyConfiguration() {
    return this.interpolationForAttribute('target_tracking_scaling_policy_configuration') as any;
  }
}

export function dataAwsccDynamodbGlobalTableReplicasGlobalSecondaryIndexesReadProvisionedThroughputSettingsReadCapacityAutoScalingSettingsToTerraform(struct?: DataAwsccDynamodbGlobalTableReplicasGlobalSecondaryIndexesReadProvisionedThroughputSettingsReadCapacityAutoScalingSettings): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    max_capacity: cdktf.numberToTerraform(struct!.maxCapacity),
    min_capacity: cdktf.numberToTerraform(struct!.minCapacity),
    seed_capacity: cdktf.numberToTerraform(struct!.seedCapacity),
    target_tracking_scaling_policy_configuration: dataAwsccDynamodbGlobalTableReplicasGlobalSecondaryIndexesReadProvisionedThroughputSettingsReadCapacityAutoScalingSettingsTargetTrackingScalingPolicyConfigurationToTerraform(struct!.targetTrackingScalingPolicyConfiguration),
  }
}

export class DataAwsccDynamodbGlobalTableReplicasGlobalSecondaryIndexesReadProvisionedThroughputSettings extends cdktf.ComplexComputedList {

  // read_capacity_auto_scaling_settings - computed: true, optional: false, required: false
  public get readCapacityAutoScalingSettings() {
    return this.interpolationForAttribute('read_capacity_auto_scaling_settings') as any;
  }

  // read_capacity_units - computed: true, optional: false, required: false
  public get readCapacityUnits() {
    return this.getNumberAttribute('read_capacity_units');
  }
}

export function dataAwsccDynamodbGlobalTableReplicasGlobalSecondaryIndexesReadProvisionedThroughputSettingsToTerraform(struct?: DataAwsccDynamodbGlobalTableReplicasGlobalSecondaryIndexesReadProvisionedThroughputSettings): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    read_capacity_auto_scaling_settings: dataAwsccDynamodbGlobalTableReplicasGlobalSecondaryIndexesReadProvisionedThroughputSettingsReadCapacityAutoScalingSettingsToTerraform(struct!.readCapacityAutoScalingSettings),
    read_capacity_units: cdktf.numberToTerraform(struct!.readCapacityUnits),
  }
}

export class DataAwsccDynamodbGlobalTableReplicasGlobalSecondaryIndexes extends cdktf.ComplexComputedList {

  // contributor_insights_specification - computed: true, optional: false, required: false
  public get contributorInsightsSpecification() {
    return this.interpolationForAttribute('contributor_insights_specification') as any;
  }

  // index_name - computed: true, optional: false, required: false
  public get indexName() {
    return this.getStringAttribute('index_name');
  }

  // read_provisioned_throughput_settings - computed: true, optional: false, required: false
  public get readProvisionedThroughputSettings() {
    return this.interpolationForAttribute('read_provisioned_throughput_settings') as any;
  }
}

export function dataAwsccDynamodbGlobalTableReplicasGlobalSecondaryIndexesToTerraform(struct?: DataAwsccDynamodbGlobalTableReplicasGlobalSecondaryIndexes): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    contributor_insights_specification: dataAwsccDynamodbGlobalTableReplicasGlobalSecondaryIndexesContributorInsightsSpecificationToTerraform(struct!.contributorInsightsSpecification),
    index_name: cdktf.stringToTerraform(struct!.indexName),
    read_provisioned_throughput_settings: dataAwsccDynamodbGlobalTableReplicasGlobalSecondaryIndexesReadProvisionedThroughputSettingsToTerraform(struct!.readProvisionedThroughputSettings),
  }
}

export class DataAwsccDynamodbGlobalTableReplicasPointInTimeRecoverySpecification extends cdktf.ComplexComputedList {

  // point_in_time_recovery_enabled - computed: true, optional: false, required: false
  public get pointInTimeRecoveryEnabled() {
    return this.getBooleanAttribute('point_in_time_recovery_enabled');
  }
}

export function dataAwsccDynamodbGlobalTableReplicasPointInTimeRecoverySpecificationToTerraform(struct?: DataAwsccDynamodbGlobalTableReplicasPointInTimeRecoverySpecification): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    point_in_time_recovery_enabled: cdktf.booleanToTerraform(struct!.pointInTimeRecoveryEnabled),
  }
}

export class DataAwsccDynamodbGlobalTableReplicasReadProvisionedThroughputSettingsReadCapacityAutoScalingSettingsTargetTrackingScalingPolicyConfiguration extends cdktf.ComplexComputedList {

  // disable_scale_in - computed: true, optional: false, required: false
  public get disableScaleIn() {
    return this.getBooleanAttribute('disable_scale_in');
  }

  // scale_in_cooldown - computed: true, optional: false, required: false
  public get scaleInCooldown() {
    return this.getNumberAttribute('scale_in_cooldown');
  }

  // scale_out_cooldown - computed: true, optional: false, required: false
  public get scaleOutCooldown() {
    return this.getNumberAttribute('scale_out_cooldown');
  }

  // target_value - computed: true, optional: false, required: false
  public get targetValue() {
    return this.getNumberAttribute('target_value');
  }
}

export function dataAwsccDynamodbGlobalTableReplicasReadProvisionedThroughputSettingsReadCapacityAutoScalingSettingsTargetTrackingScalingPolicyConfigurationToTerraform(struct?: DataAwsccDynamodbGlobalTableReplicasReadProvisionedThroughputSettingsReadCapacityAutoScalingSettingsTargetTrackingScalingPolicyConfiguration): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    disable_scale_in: cdktf.booleanToTerraform(struct!.disableScaleIn),
    scale_in_cooldown: cdktf.numberToTerraform(struct!.scaleInCooldown),
    scale_out_cooldown: cdktf.numberToTerraform(struct!.scaleOutCooldown),
    target_value: cdktf.numberToTerraform(struct!.targetValue),
  }
}

export class DataAwsccDynamodbGlobalTableReplicasReadProvisionedThroughputSettingsReadCapacityAutoScalingSettings extends cdktf.ComplexComputedList {

  // max_capacity - computed: true, optional: false, required: false
  public get maxCapacity() {
    return this.getNumberAttribute('max_capacity');
  }

  // min_capacity - computed: true, optional: false, required: false
  public get minCapacity() {
    return this.getNumberAttribute('min_capacity');
  }

  // seed_capacity - computed: true, optional: false, required: false
  public get seedCapacity() {
    return this.getNumberAttribute('seed_capacity');
  }

  // target_tracking_scaling_policy_configuration - computed: true, optional: false, required: false
  public get targetTrackingScalingPolicyConfiguration() {
    return this.interpolationForAttribute('target_tracking_scaling_policy_configuration') as any;
  }
}

export function dataAwsccDynamodbGlobalTableReplicasReadProvisionedThroughputSettingsReadCapacityAutoScalingSettingsToTerraform(struct?: DataAwsccDynamodbGlobalTableReplicasReadProvisionedThroughputSettingsReadCapacityAutoScalingSettings): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    max_capacity: cdktf.numberToTerraform(struct!.maxCapacity),
    min_capacity: cdktf.numberToTerraform(struct!.minCapacity),
    seed_capacity: cdktf.numberToTerraform(struct!.seedCapacity),
    target_tracking_scaling_policy_configuration: dataAwsccDynamodbGlobalTableReplicasReadProvisionedThroughputSettingsReadCapacityAutoScalingSettingsTargetTrackingScalingPolicyConfigurationToTerraform(struct!.targetTrackingScalingPolicyConfiguration),
  }
}

export class DataAwsccDynamodbGlobalTableReplicasReadProvisionedThroughputSettings extends cdktf.ComplexComputedList {

  // read_capacity_auto_scaling_settings - computed: true, optional: false, required: false
  public get readCapacityAutoScalingSettings() {
    return this.interpolationForAttribute('read_capacity_auto_scaling_settings') as any;
  }

  // read_capacity_units - computed: true, optional: false, required: false
  public get readCapacityUnits() {
    return this.getNumberAttribute('read_capacity_units');
  }
}

export function dataAwsccDynamodbGlobalTableReplicasReadProvisionedThroughputSettingsToTerraform(struct?: DataAwsccDynamodbGlobalTableReplicasReadProvisionedThroughputSettings): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    read_capacity_auto_scaling_settings: dataAwsccDynamodbGlobalTableReplicasReadProvisionedThroughputSettingsReadCapacityAutoScalingSettingsToTerraform(struct!.readCapacityAutoScalingSettings),
    read_capacity_units: cdktf.numberToTerraform(struct!.readCapacityUnits),
  }
}

export class DataAwsccDynamodbGlobalTableReplicasSseSpecification extends cdktf.ComplexComputedList {

  // kms_master_key_id - computed: true, optional: false, required: false
  public get kmsMasterKeyId() {
    return this.getStringAttribute('kms_master_key_id');
  }
}

export function dataAwsccDynamodbGlobalTableReplicasSseSpecificationToTerraform(struct?: DataAwsccDynamodbGlobalTableReplicasSseSpecification): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    kms_master_key_id: cdktf.stringToTerraform(struct!.kmsMasterKeyId),
  }
}

export class DataAwsccDynamodbGlobalTableReplicasTags extends cdktf.ComplexComputedList {

  // key - computed: true, optional: false, required: false
  public get key() {
    return this.getStringAttribute('key');
  }

  // value - computed: true, optional: false, required: false
  public get value() {
    return this.getStringAttribute('value');
  }
}

export function dataAwsccDynamodbGlobalTableReplicasTagsToTerraform(struct?: DataAwsccDynamodbGlobalTableReplicasTags): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    key: cdktf.stringToTerraform(struct!.key),
    value: cdktf.stringToTerraform(struct!.value),
  }
}

export class DataAwsccDynamodbGlobalTableReplicas extends cdktf.ComplexComputedList {

  // contributor_insights_specification - computed: true, optional: false, required: false
  public get contributorInsightsSpecification() {
    return this.interpolationForAttribute('contributor_insights_specification') as any;
  }

  // global_secondary_indexes - computed: true, optional: false, required: false
  public get globalSecondaryIndexes() {
    return this.interpolationForAttribute('global_secondary_indexes') as any;
  }

  // point_in_time_recovery_specification - computed: true, optional: false, required: false
  public get pointInTimeRecoverySpecification() {
    return this.interpolationForAttribute('point_in_time_recovery_specification') as any;
  }

  // read_provisioned_throughput_settings - computed: true, optional: false, required: false
  public get readProvisionedThroughputSettings() {
    return this.interpolationForAttribute('read_provisioned_throughput_settings') as any;
  }

  // region - computed: true, optional: false, required: false
  public get region() {
    return this.getStringAttribute('region');
  }

  // sse_specification - computed: true, optional: false, required: false
  public get sseSpecification() {
    return this.interpolationForAttribute('sse_specification') as any;
  }

  // tags - computed: true, optional: false, required: false
  public get tags() {
    return this.interpolationForAttribute('tags') as any;
  }
}

export function dataAwsccDynamodbGlobalTableReplicasToTerraform(struct?: DataAwsccDynamodbGlobalTableReplicas): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    contributor_insights_specification: dataAwsccDynamodbGlobalTableReplicasContributorInsightsSpecificationToTerraform(struct!.contributorInsightsSpecification),
    global_secondary_indexes: cdktf.listMapper(dataAwsccDynamodbGlobalTableReplicasGlobalSecondaryIndexesToTerraform)(struct!.globalSecondaryIndexes),
    point_in_time_recovery_specification: dataAwsccDynamodbGlobalTableReplicasPointInTimeRecoverySpecificationToTerraform(struct!.pointInTimeRecoverySpecification),
    read_provisioned_throughput_settings: dataAwsccDynamodbGlobalTableReplicasReadProvisionedThroughputSettingsToTerraform(struct!.readProvisionedThroughputSettings),
    region: cdktf.stringToTerraform(struct!.region),
    sse_specification: dataAwsccDynamodbGlobalTableReplicasSseSpecificationToTerraform(struct!.sseSpecification),
    tags: cdktf.listMapper(dataAwsccDynamodbGlobalTableReplicasTagsToTerraform)(struct!.tags),
  }
}

export class DataAwsccDynamodbGlobalTableSseSpecification extends cdktf.ComplexComputedList {

  // sse_enabled - computed: true, optional: false, required: false
  public get sseEnabled() {
    return this.getBooleanAttribute('sse_enabled');
  }

  // sse_type - computed: true, optional: false, required: false
  public get sseType() {
    return this.getStringAttribute('sse_type');
  }
}

export function dataAwsccDynamodbGlobalTableSseSpecificationToTerraform(struct?: DataAwsccDynamodbGlobalTableSseSpecification): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    sse_enabled: cdktf.booleanToTerraform(struct!.sseEnabled),
    sse_type: cdktf.stringToTerraform(struct!.sseType),
  }
}

export class DataAwsccDynamodbGlobalTableStreamSpecification extends cdktf.ComplexComputedList {

  // stream_view_type - computed: true, optional: false, required: false
  public get streamViewType() {
    return this.getStringAttribute('stream_view_type');
  }
}

export function dataAwsccDynamodbGlobalTableStreamSpecificationToTerraform(struct?: DataAwsccDynamodbGlobalTableStreamSpecification): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    stream_view_type: cdktf.stringToTerraform(struct!.streamViewType),
  }
}

export class DataAwsccDynamodbGlobalTableTimeToLiveSpecification extends cdktf.ComplexComputedList {

  // attribute_name - computed: true, optional: false, required: false
  public get attributeName() {
    return this.getStringAttribute('attribute_name');
  }

  // enabled - computed: true, optional: false, required: false
  public get enabled() {
    return this.getBooleanAttribute('enabled');
  }
}

export function dataAwsccDynamodbGlobalTableTimeToLiveSpecificationToTerraform(struct?: DataAwsccDynamodbGlobalTableTimeToLiveSpecification): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    attribute_name: cdktf.stringToTerraform(struct!.attributeName),
    enabled: cdktf.booleanToTerraform(struct!.enabled),
  }
}

export class DataAwsccDynamodbGlobalTableWriteProvisionedThroughputSettingsWriteCapacityAutoScalingSettingsTargetTrackingScalingPolicyConfiguration extends cdktf.ComplexComputedList {

  // disable_scale_in - computed: true, optional: false, required: false
  public get disableScaleIn() {
    return this.getBooleanAttribute('disable_scale_in');
  }

  // scale_in_cooldown - computed: true, optional: false, required: false
  public get scaleInCooldown() {
    return this.getNumberAttribute('scale_in_cooldown');
  }

  // scale_out_cooldown - computed: true, optional: false, required: false
  public get scaleOutCooldown() {
    return this.getNumberAttribute('scale_out_cooldown');
  }

  // target_value - computed: true, optional: false, required: false
  public get targetValue() {
    return this.getNumberAttribute('target_value');
  }
}

export function dataAwsccDynamodbGlobalTableWriteProvisionedThroughputSettingsWriteCapacityAutoScalingSettingsTargetTrackingScalingPolicyConfigurationToTerraform(struct?: DataAwsccDynamodbGlobalTableWriteProvisionedThroughputSettingsWriteCapacityAutoScalingSettingsTargetTrackingScalingPolicyConfiguration): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    disable_scale_in: cdktf.booleanToTerraform(struct!.disableScaleIn),
    scale_in_cooldown: cdktf.numberToTerraform(struct!.scaleInCooldown),
    scale_out_cooldown: cdktf.numberToTerraform(struct!.scaleOutCooldown),
    target_value: cdktf.numberToTerraform(struct!.targetValue),
  }
}

export class DataAwsccDynamodbGlobalTableWriteProvisionedThroughputSettingsWriteCapacityAutoScalingSettings extends cdktf.ComplexComputedList {

  // max_capacity - computed: true, optional: false, required: false
  public get maxCapacity() {
    return this.getNumberAttribute('max_capacity');
  }

  // min_capacity - computed: true, optional: false, required: false
  public get minCapacity() {
    return this.getNumberAttribute('min_capacity');
  }

  // seed_capacity - computed: true, optional: false, required: false
  public get seedCapacity() {
    return this.getNumberAttribute('seed_capacity');
  }

  // target_tracking_scaling_policy_configuration - computed: true, optional: false, required: false
  public get targetTrackingScalingPolicyConfiguration() {
    return this.interpolationForAttribute('target_tracking_scaling_policy_configuration') as any;
  }
}

export function dataAwsccDynamodbGlobalTableWriteProvisionedThroughputSettingsWriteCapacityAutoScalingSettingsToTerraform(struct?: DataAwsccDynamodbGlobalTableWriteProvisionedThroughputSettingsWriteCapacityAutoScalingSettings): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    max_capacity: cdktf.numberToTerraform(struct!.maxCapacity),
    min_capacity: cdktf.numberToTerraform(struct!.minCapacity),
    seed_capacity: cdktf.numberToTerraform(struct!.seedCapacity),
    target_tracking_scaling_policy_configuration: dataAwsccDynamodbGlobalTableWriteProvisionedThroughputSettingsWriteCapacityAutoScalingSettingsTargetTrackingScalingPolicyConfigurationToTerraform(struct!.targetTrackingScalingPolicyConfiguration),
  }
}

export class DataAwsccDynamodbGlobalTableWriteProvisionedThroughputSettings extends cdktf.ComplexComputedList {

  // write_capacity_auto_scaling_settings - computed: true, optional: false, required: false
  public get writeCapacityAutoScalingSettings() {
    return this.interpolationForAttribute('write_capacity_auto_scaling_settings') as any;
  }
}

export function dataAwsccDynamodbGlobalTableWriteProvisionedThroughputSettingsToTerraform(struct?: DataAwsccDynamodbGlobalTableWriteProvisionedThroughputSettings): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    write_capacity_auto_scaling_settings: dataAwsccDynamodbGlobalTableWriteProvisionedThroughputSettingsWriteCapacityAutoScalingSettingsToTerraform(struct!.writeCapacityAutoScalingSettings),
  }
}


/**
* Represents a {@link https://www.terraform.io/docs/providers/awscc/d/dynamodb_global_table.html awscc_dynamodb_global_table}
*/
export class DataAwsccDynamodbGlobalTable extends cdktf.TerraformDataSource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType: string = "awscc_dynamodb_global_table";

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://www.terraform.io/docs/providers/awscc/d/dynamodb_global_table.html awscc_dynamodb_global_table} Data Source
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DataAwsccDynamodbGlobalTableConfig
  */
  public constructor(scope: Construct, id: string, config: DataAwsccDynamodbGlobalTableConfig) {
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
    this._id = config.id;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // arn - computed: true, optional: false, required: false
  public get arn() {
    return this.getStringAttribute('arn');
  }

  // attribute_definitions - computed: true, optional: false, required: false
  public get attributeDefinitions() {
    return this.interpolationForAttribute('attribute_definitions') as any;
  }

  // billing_mode - computed: true, optional: false, required: false
  public get billingMode() {
    return this.getStringAttribute('billing_mode');
  }

  // global_secondary_indexes - computed: true, optional: false, required: false
  public get globalSecondaryIndexes() {
    return this.interpolationForAttribute('global_secondary_indexes') as any;
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

  // key_schema - computed: true, optional: false, required: false
  public get keySchema() {
    return this.interpolationForAttribute('key_schema') as any;
  }

  // local_secondary_indexes - computed: true, optional: false, required: false
  public get localSecondaryIndexes() {
    return this.interpolationForAttribute('local_secondary_indexes') as any;
  }

  // replicas - computed: true, optional: false, required: false
  public get replicas() {
    return this.interpolationForAttribute('replicas') as any;
  }

  // sse_specification - computed: true, optional: false, required: false
  public get sseSpecification() {
    return this.interpolationForAttribute('sse_specification') as any;
  }

  // stream_arn - computed: true, optional: false, required: false
  public get streamArn() {
    return this.getStringAttribute('stream_arn');
  }

  // stream_specification - computed: true, optional: false, required: false
  public get streamSpecification() {
    return this.interpolationForAttribute('stream_specification') as any;
  }

  // table_id - computed: true, optional: false, required: false
  public get tableId() {
    return this.getStringAttribute('table_id');
  }

  // table_name - computed: true, optional: false, required: false
  public get tableName() {
    return this.getStringAttribute('table_name');
  }

  // time_to_live_specification - computed: true, optional: false, required: false
  public get timeToLiveSpecification() {
    return this.interpolationForAttribute('time_to_live_specification') as any;
  }

  // write_provisioned_throughput_settings - computed: true, optional: false, required: false
  public get writeProvisionedThroughputSettings() {
    return this.interpolationForAttribute('write_provisioned_throughput_settings') as any;
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
