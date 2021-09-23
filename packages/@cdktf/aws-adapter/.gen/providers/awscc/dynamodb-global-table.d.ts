import { Construct } from 'constructs';
import * as cdktf from 'cdktf';
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
export declare function dynamodbGlobalTableAttributeDefinitionsToTerraform(struct?: DynamodbGlobalTableAttributeDefinitions): any;
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
export declare function dynamodbGlobalTableGlobalSecondaryIndexesKeySchemaToTerraform(struct?: DynamodbGlobalTableGlobalSecondaryIndexesKeySchema): any;
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
export declare function dynamodbGlobalTableGlobalSecondaryIndexesProjectionToTerraform(struct?: DynamodbGlobalTableGlobalSecondaryIndexesProjection): any;
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
export declare function dynamodbGlobalTableGlobalSecondaryIndexesWriteProvisionedThroughputSettingsWriteCapacityAutoScalingSettingsTargetTrackingScalingPolicyConfigurationToTerraform(struct?: DynamodbGlobalTableGlobalSecondaryIndexesWriteProvisionedThroughputSettingsWriteCapacityAutoScalingSettingsTargetTrackingScalingPolicyConfiguration): any;
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
export declare function dynamodbGlobalTableGlobalSecondaryIndexesWriteProvisionedThroughputSettingsWriteCapacityAutoScalingSettingsToTerraform(struct?: DynamodbGlobalTableGlobalSecondaryIndexesWriteProvisionedThroughputSettingsWriteCapacityAutoScalingSettings): any;
export interface DynamodbGlobalTableGlobalSecondaryIndexesWriteProvisionedThroughputSettings {
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/dynamodb_global_table.html#write_capacity_auto_scaling_settings DynamodbGlobalTable#write_capacity_auto_scaling_settings}
    */
    readonly writeCapacityAutoScalingSettings?: DynamodbGlobalTableGlobalSecondaryIndexesWriteProvisionedThroughputSettingsWriteCapacityAutoScalingSettings;
}
export declare function dynamodbGlobalTableGlobalSecondaryIndexesWriteProvisionedThroughputSettingsToTerraform(struct?: DynamodbGlobalTableGlobalSecondaryIndexesWriteProvisionedThroughputSettings): any;
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
export declare function dynamodbGlobalTableGlobalSecondaryIndexesToTerraform(struct?: DynamodbGlobalTableGlobalSecondaryIndexes): any;
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
export declare function dynamodbGlobalTableKeySchemaToTerraform(struct?: DynamodbGlobalTableKeySchema): any;
export declare class DynamodbGlobalTableLocalSecondaryIndexesKeySchema extends cdktf.ComplexComputedList {
    get attributeName(): string;
    get keyType(): string;
}
export declare function dynamodbGlobalTableLocalSecondaryIndexesKeySchemaToTerraform(struct?: DynamodbGlobalTableLocalSecondaryIndexesKeySchema): any;
export declare class DynamodbGlobalTableLocalSecondaryIndexesProjection extends cdktf.ComplexComputedList {
    private _nonKeyAttributes?;
    get nonKeyAttributes(): string[];
    set nonKeyAttributes(value: string[]);
    resetNonKeyAttributes(): void;
    get nonKeyAttributesInput(): string[] | undefined;
    private _projectionType?;
    get projectionType(): string;
    set projectionType(value: string);
    resetProjectionType(): void;
    get projectionTypeInput(): string | undefined;
}
export declare function dynamodbGlobalTableLocalSecondaryIndexesProjectionToTerraform(struct?: DynamodbGlobalTableLocalSecondaryIndexesProjection): any;
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
export declare function dynamodbGlobalTableLocalSecondaryIndexesToTerraform(struct?: DynamodbGlobalTableLocalSecondaryIndexes): any;
export interface DynamodbGlobalTableReplicasContributorInsightsSpecification {
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/dynamodb_global_table.html#enabled DynamodbGlobalTable#enabled}
    */
    readonly enabled: boolean | cdktf.IResolvable;
}
export declare function dynamodbGlobalTableReplicasContributorInsightsSpecificationToTerraform(struct?: DynamodbGlobalTableReplicasContributorInsightsSpecification): any;
export interface DynamodbGlobalTableReplicasGlobalSecondaryIndexesContributorInsightsSpecification {
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/dynamodb_global_table.html#enabled DynamodbGlobalTable#enabled}
    */
    readonly enabled: boolean | cdktf.IResolvable;
}
export declare function dynamodbGlobalTableReplicasGlobalSecondaryIndexesContributorInsightsSpecificationToTerraform(struct?: DynamodbGlobalTableReplicasGlobalSecondaryIndexesContributorInsightsSpecification): any;
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
export declare function dynamodbGlobalTableReplicasGlobalSecondaryIndexesReadProvisionedThroughputSettingsReadCapacityAutoScalingSettingsTargetTrackingScalingPolicyConfigurationToTerraform(struct?: DynamodbGlobalTableReplicasGlobalSecondaryIndexesReadProvisionedThroughputSettingsReadCapacityAutoScalingSettingsTargetTrackingScalingPolicyConfiguration): any;
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
export declare function dynamodbGlobalTableReplicasGlobalSecondaryIndexesReadProvisionedThroughputSettingsReadCapacityAutoScalingSettingsToTerraform(struct?: DynamodbGlobalTableReplicasGlobalSecondaryIndexesReadProvisionedThroughputSettingsReadCapacityAutoScalingSettings): any;
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
export declare function dynamodbGlobalTableReplicasGlobalSecondaryIndexesReadProvisionedThroughputSettingsToTerraform(struct?: DynamodbGlobalTableReplicasGlobalSecondaryIndexesReadProvisionedThroughputSettings): any;
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
export declare function dynamodbGlobalTableReplicasGlobalSecondaryIndexesToTerraform(struct?: DynamodbGlobalTableReplicasGlobalSecondaryIndexes): any;
export interface DynamodbGlobalTableReplicasPointInTimeRecoverySpecification {
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/dynamodb_global_table.html#point_in_time_recovery_enabled DynamodbGlobalTable#point_in_time_recovery_enabled}
    */
    readonly pointInTimeRecoveryEnabled?: boolean | cdktf.IResolvable;
}
export declare function dynamodbGlobalTableReplicasPointInTimeRecoverySpecificationToTerraform(struct?: DynamodbGlobalTableReplicasPointInTimeRecoverySpecification): any;
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
export declare function dynamodbGlobalTableReplicasReadProvisionedThroughputSettingsReadCapacityAutoScalingSettingsTargetTrackingScalingPolicyConfigurationToTerraform(struct?: DynamodbGlobalTableReplicasReadProvisionedThroughputSettingsReadCapacityAutoScalingSettingsTargetTrackingScalingPolicyConfiguration): any;
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
export declare function dynamodbGlobalTableReplicasReadProvisionedThroughputSettingsReadCapacityAutoScalingSettingsToTerraform(struct?: DynamodbGlobalTableReplicasReadProvisionedThroughputSettingsReadCapacityAutoScalingSettings): any;
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
export declare function dynamodbGlobalTableReplicasReadProvisionedThroughputSettingsToTerraform(struct?: DynamodbGlobalTableReplicasReadProvisionedThroughputSettings): any;
export interface DynamodbGlobalTableReplicasSseSpecification {
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/dynamodb_global_table.html#kms_master_key_id DynamodbGlobalTable#kms_master_key_id}
    */
    readonly kmsMasterKeyId: string;
}
export declare function dynamodbGlobalTableReplicasSseSpecificationToTerraform(struct?: DynamodbGlobalTableReplicasSseSpecification): any;
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
export declare function dynamodbGlobalTableReplicasTagsToTerraform(struct?: DynamodbGlobalTableReplicasTags): any;
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
export declare function dynamodbGlobalTableReplicasToTerraform(struct?: DynamodbGlobalTableReplicas): any;
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
export declare function dynamodbGlobalTableSseSpecificationToTerraform(struct?: DynamodbGlobalTableSseSpecification): any;
export interface DynamodbGlobalTableStreamSpecification {
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/dynamodb_global_table.html#stream_view_type DynamodbGlobalTable#stream_view_type}
    */
    readonly streamViewType: string;
}
export declare function dynamodbGlobalTableStreamSpecificationToTerraform(struct?: DynamodbGlobalTableStreamSpecification): any;
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
export declare function dynamodbGlobalTableTimeToLiveSpecificationToTerraform(struct?: DynamodbGlobalTableTimeToLiveSpecification): any;
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
export declare function dynamodbGlobalTableWriteProvisionedThroughputSettingsWriteCapacityAutoScalingSettingsTargetTrackingScalingPolicyConfigurationToTerraform(struct?: DynamodbGlobalTableWriteProvisionedThroughputSettingsWriteCapacityAutoScalingSettingsTargetTrackingScalingPolicyConfiguration): any;
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
export declare function dynamodbGlobalTableWriteProvisionedThroughputSettingsWriteCapacityAutoScalingSettingsToTerraform(struct?: DynamodbGlobalTableWriteProvisionedThroughputSettingsWriteCapacityAutoScalingSettings): any;
export interface DynamodbGlobalTableWriteProvisionedThroughputSettings {
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/dynamodb_global_table.html#write_capacity_auto_scaling_settings DynamodbGlobalTable#write_capacity_auto_scaling_settings}
    */
    readonly writeCapacityAutoScalingSettings?: DynamodbGlobalTableWriteProvisionedThroughputSettingsWriteCapacityAutoScalingSettings;
}
export declare function dynamodbGlobalTableWriteProvisionedThroughputSettingsToTerraform(struct?: DynamodbGlobalTableWriteProvisionedThroughputSettings): any;
/**
* Represents a {@link https://www.terraform.io/docs/providers/awscc/r/dynamodb_global_table.html awscc_dynamodb_global_table}
*/
export declare class DynamodbGlobalTable extends cdktf.TerraformResource {
    static readonly tfResourceType: string;
    /**
    * Create a new {@link https://www.terraform.io/docs/providers/awscc/r/dynamodb_global_table.html awscc_dynamodb_global_table} Resource
    *
    * @param scope The scope in which to define this construct
    * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
    * @param options DynamodbGlobalTableConfig
    */
    constructor(scope: Construct, id: string, config: DynamodbGlobalTableConfig);
    get arn(): string;
    private _attributeDefinitions;
    get attributeDefinitions(): DynamodbGlobalTableAttributeDefinitions[];
    set attributeDefinitions(value: DynamodbGlobalTableAttributeDefinitions[]);
    get attributeDefinitionsInput(): DynamodbGlobalTableAttributeDefinitions[];
    private _billingMode?;
    get billingMode(): string;
    set billingMode(value: string);
    resetBillingMode(): void;
    get billingModeInput(): string | undefined;
    private _globalSecondaryIndexes?;
    get globalSecondaryIndexes(): DynamodbGlobalTableGlobalSecondaryIndexes[];
    set globalSecondaryIndexes(value: DynamodbGlobalTableGlobalSecondaryIndexes[]);
    resetGlobalSecondaryIndexes(): void;
    get globalSecondaryIndexesInput(): DynamodbGlobalTableGlobalSecondaryIndexes[] | undefined;
    get id(): string;
    private _keySchema;
    get keySchema(): DynamodbGlobalTableKeySchema[];
    set keySchema(value: DynamodbGlobalTableKeySchema[]);
    get keySchemaInput(): DynamodbGlobalTableKeySchema[];
    private _localSecondaryIndexes?;
    get localSecondaryIndexes(): DynamodbGlobalTableLocalSecondaryIndexes[];
    set localSecondaryIndexes(value: DynamodbGlobalTableLocalSecondaryIndexes[]);
    resetLocalSecondaryIndexes(): void;
    get localSecondaryIndexesInput(): DynamodbGlobalTableLocalSecondaryIndexes[] | undefined;
    private _replicas;
    get replicas(): DynamodbGlobalTableReplicas[];
    set replicas(value: DynamodbGlobalTableReplicas[]);
    get replicasInput(): DynamodbGlobalTableReplicas[];
    private _sseSpecification?;
    get sseSpecification(): DynamodbGlobalTableSseSpecification;
    set sseSpecification(value: DynamodbGlobalTableSseSpecification);
    resetSseSpecification(): void;
    get sseSpecificationInput(): DynamodbGlobalTableSseSpecification | undefined;
    get streamArn(): string;
    private _streamSpecification?;
    get streamSpecification(): DynamodbGlobalTableStreamSpecification;
    set streamSpecification(value: DynamodbGlobalTableStreamSpecification);
    resetStreamSpecification(): void;
    get streamSpecificationInput(): DynamodbGlobalTableStreamSpecification | undefined;
    get tableId(): string;
    private _tableName?;
    get tableName(): string;
    set tableName(value: string);
    resetTableName(): void;
    get tableNameInput(): string | undefined;
    private _timeToLiveSpecification?;
    get timeToLiveSpecification(): DynamodbGlobalTableTimeToLiveSpecification;
    set timeToLiveSpecification(value: DynamodbGlobalTableTimeToLiveSpecification);
    resetTimeToLiveSpecification(): void;
    get timeToLiveSpecificationInput(): DynamodbGlobalTableTimeToLiveSpecification | undefined;
    private _writeProvisionedThroughputSettings?;
    get writeProvisionedThroughputSettings(): DynamodbGlobalTableWriteProvisionedThroughputSettings;
    set writeProvisionedThroughputSettings(value: DynamodbGlobalTableWriteProvisionedThroughputSettings);
    resetWriteProvisionedThroughputSettings(): void;
    get writeProvisionedThroughputSettingsInput(): DynamodbGlobalTableWriteProvisionedThroughputSettings | undefined;
    protected synthesizeAttributes(): {
        [name: string]: any;
    };
}
