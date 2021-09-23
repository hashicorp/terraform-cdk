import { Construct } from 'constructs';
import * as cdktf from 'cdktf';
export interface DataAwsccDynamodbGlobalTableConfig extends cdktf.TerraformMetaArguments {
    /**
    * Uniquely identifies the resource.
    *
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/d/dynamodb_global_table.html#id DataAwsccDynamodbGlobalTable#id}
    */
    readonly id: string;
}
export declare class DataAwsccDynamodbGlobalTableAttributeDefinitions extends cdktf.ComplexComputedList {
    get attributeName(): string;
    get attributeType(): string;
}
export declare function dataAwsccDynamodbGlobalTableAttributeDefinitionsToTerraform(struct?: DataAwsccDynamodbGlobalTableAttributeDefinitions): any;
export declare class DataAwsccDynamodbGlobalTableGlobalSecondaryIndexesKeySchema extends cdktf.ComplexComputedList {
    get attributeName(): string;
    get keyType(): string;
}
export declare function dataAwsccDynamodbGlobalTableGlobalSecondaryIndexesKeySchemaToTerraform(struct?: DataAwsccDynamodbGlobalTableGlobalSecondaryIndexesKeySchema): any;
export declare class DataAwsccDynamodbGlobalTableGlobalSecondaryIndexesProjection extends cdktf.ComplexComputedList {
    get nonKeyAttributes(): string[];
    get projectionType(): string;
}
export declare function dataAwsccDynamodbGlobalTableGlobalSecondaryIndexesProjectionToTerraform(struct?: DataAwsccDynamodbGlobalTableGlobalSecondaryIndexesProjection): any;
export declare class DataAwsccDynamodbGlobalTableGlobalSecondaryIndexesWriteProvisionedThroughputSettingsWriteCapacityAutoScalingSettingsTargetTrackingScalingPolicyConfiguration extends cdktf.ComplexComputedList {
    get disableScaleIn(): any;
    get scaleInCooldown(): number;
    get scaleOutCooldown(): number;
    get targetValue(): number;
}
export declare function dataAwsccDynamodbGlobalTableGlobalSecondaryIndexesWriteProvisionedThroughputSettingsWriteCapacityAutoScalingSettingsTargetTrackingScalingPolicyConfigurationToTerraform(struct?: DataAwsccDynamodbGlobalTableGlobalSecondaryIndexesWriteProvisionedThroughputSettingsWriteCapacityAutoScalingSettingsTargetTrackingScalingPolicyConfiguration): any;
export declare class DataAwsccDynamodbGlobalTableGlobalSecondaryIndexesWriteProvisionedThroughputSettingsWriteCapacityAutoScalingSettings extends cdktf.ComplexComputedList {
    get maxCapacity(): number;
    get minCapacity(): number;
    get seedCapacity(): number;
    get targetTrackingScalingPolicyConfiguration(): any;
}
export declare function dataAwsccDynamodbGlobalTableGlobalSecondaryIndexesWriteProvisionedThroughputSettingsWriteCapacityAutoScalingSettingsToTerraform(struct?: DataAwsccDynamodbGlobalTableGlobalSecondaryIndexesWriteProvisionedThroughputSettingsWriteCapacityAutoScalingSettings): any;
export declare class DataAwsccDynamodbGlobalTableGlobalSecondaryIndexesWriteProvisionedThroughputSettings extends cdktf.ComplexComputedList {
    get writeCapacityAutoScalingSettings(): any;
}
export declare function dataAwsccDynamodbGlobalTableGlobalSecondaryIndexesWriteProvisionedThroughputSettingsToTerraform(struct?: DataAwsccDynamodbGlobalTableGlobalSecondaryIndexesWriteProvisionedThroughputSettings): any;
export declare class DataAwsccDynamodbGlobalTableGlobalSecondaryIndexes extends cdktf.ComplexComputedList {
    get indexName(): string;
    get keySchema(): any;
    get projection(): any;
    get writeProvisionedThroughputSettings(): any;
}
export declare function dataAwsccDynamodbGlobalTableGlobalSecondaryIndexesToTerraform(struct?: DataAwsccDynamodbGlobalTableGlobalSecondaryIndexes): any;
export declare class DataAwsccDynamodbGlobalTableKeySchema extends cdktf.ComplexComputedList {
    get attributeName(): string;
    get keyType(): string;
}
export declare function dataAwsccDynamodbGlobalTableKeySchemaToTerraform(struct?: DataAwsccDynamodbGlobalTableKeySchema): any;
export declare class DataAwsccDynamodbGlobalTableLocalSecondaryIndexesKeySchema extends cdktf.ComplexComputedList {
    get attributeName(): string;
    get keyType(): string;
}
export declare function dataAwsccDynamodbGlobalTableLocalSecondaryIndexesKeySchemaToTerraform(struct?: DataAwsccDynamodbGlobalTableLocalSecondaryIndexesKeySchema): any;
export declare class DataAwsccDynamodbGlobalTableLocalSecondaryIndexesProjection extends cdktf.ComplexComputedList {
    get nonKeyAttributes(): string[];
    get projectionType(): string;
}
export declare function dataAwsccDynamodbGlobalTableLocalSecondaryIndexesProjectionToTerraform(struct?: DataAwsccDynamodbGlobalTableLocalSecondaryIndexesProjection): any;
export declare class DataAwsccDynamodbGlobalTableLocalSecondaryIndexes extends cdktf.ComplexComputedList {
    get indexName(): string;
    get keySchema(): any;
    get projection(): any;
}
export declare function dataAwsccDynamodbGlobalTableLocalSecondaryIndexesToTerraform(struct?: DataAwsccDynamodbGlobalTableLocalSecondaryIndexes): any;
export declare class DataAwsccDynamodbGlobalTableReplicasContributorInsightsSpecification extends cdktf.ComplexComputedList {
    get enabled(): any;
}
export declare function dataAwsccDynamodbGlobalTableReplicasContributorInsightsSpecificationToTerraform(struct?: DataAwsccDynamodbGlobalTableReplicasContributorInsightsSpecification): any;
export declare class DataAwsccDynamodbGlobalTableReplicasGlobalSecondaryIndexesContributorInsightsSpecification extends cdktf.ComplexComputedList {
    get enabled(): any;
}
export declare function dataAwsccDynamodbGlobalTableReplicasGlobalSecondaryIndexesContributorInsightsSpecificationToTerraform(struct?: DataAwsccDynamodbGlobalTableReplicasGlobalSecondaryIndexesContributorInsightsSpecification): any;
export declare class DataAwsccDynamodbGlobalTableReplicasGlobalSecondaryIndexesReadProvisionedThroughputSettingsReadCapacityAutoScalingSettingsTargetTrackingScalingPolicyConfiguration extends cdktf.ComplexComputedList {
    get disableScaleIn(): any;
    get scaleInCooldown(): number;
    get scaleOutCooldown(): number;
    get targetValue(): number;
}
export declare function dataAwsccDynamodbGlobalTableReplicasGlobalSecondaryIndexesReadProvisionedThroughputSettingsReadCapacityAutoScalingSettingsTargetTrackingScalingPolicyConfigurationToTerraform(struct?: DataAwsccDynamodbGlobalTableReplicasGlobalSecondaryIndexesReadProvisionedThroughputSettingsReadCapacityAutoScalingSettingsTargetTrackingScalingPolicyConfiguration): any;
export declare class DataAwsccDynamodbGlobalTableReplicasGlobalSecondaryIndexesReadProvisionedThroughputSettingsReadCapacityAutoScalingSettings extends cdktf.ComplexComputedList {
    get maxCapacity(): number;
    get minCapacity(): number;
    get seedCapacity(): number;
    get targetTrackingScalingPolicyConfiguration(): any;
}
export declare function dataAwsccDynamodbGlobalTableReplicasGlobalSecondaryIndexesReadProvisionedThroughputSettingsReadCapacityAutoScalingSettingsToTerraform(struct?: DataAwsccDynamodbGlobalTableReplicasGlobalSecondaryIndexesReadProvisionedThroughputSettingsReadCapacityAutoScalingSettings): any;
export declare class DataAwsccDynamodbGlobalTableReplicasGlobalSecondaryIndexesReadProvisionedThroughputSettings extends cdktf.ComplexComputedList {
    get readCapacityAutoScalingSettings(): any;
    get readCapacityUnits(): number;
}
export declare function dataAwsccDynamodbGlobalTableReplicasGlobalSecondaryIndexesReadProvisionedThroughputSettingsToTerraform(struct?: DataAwsccDynamodbGlobalTableReplicasGlobalSecondaryIndexesReadProvisionedThroughputSettings): any;
export declare class DataAwsccDynamodbGlobalTableReplicasGlobalSecondaryIndexes extends cdktf.ComplexComputedList {
    get contributorInsightsSpecification(): any;
    get indexName(): string;
    get readProvisionedThroughputSettings(): any;
}
export declare function dataAwsccDynamodbGlobalTableReplicasGlobalSecondaryIndexesToTerraform(struct?: DataAwsccDynamodbGlobalTableReplicasGlobalSecondaryIndexes): any;
export declare class DataAwsccDynamodbGlobalTableReplicasPointInTimeRecoverySpecification extends cdktf.ComplexComputedList {
    get pointInTimeRecoveryEnabled(): any;
}
export declare function dataAwsccDynamodbGlobalTableReplicasPointInTimeRecoverySpecificationToTerraform(struct?: DataAwsccDynamodbGlobalTableReplicasPointInTimeRecoverySpecification): any;
export declare class DataAwsccDynamodbGlobalTableReplicasReadProvisionedThroughputSettingsReadCapacityAutoScalingSettingsTargetTrackingScalingPolicyConfiguration extends cdktf.ComplexComputedList {
    get disableScaleIn(): any;
    get scaleInCooldown(): number;
    get scaleOutCooldown(): number;
    get targetValue(): number;
}
export declare function dataAwsccDynamodbGlobalTableReplicasReadProvisionedThroughputSettingsReadCapacityAutoScalingSettingsTargetTrackingScalingPolicyConfigurationToTerraform(struct?: DataAwsccDynamodbGlobalTableReplicasReadProvisionedThroughputSettingsReadCapacityAutoScalingSettingsTargetTrackingScalingPolicyConfiguration): any;
export declare class DataAwsccDynamodbGlobalTableReplicasReadProvisionedThroughputSettingsReadCapacityAutoScalingSettings extends cdktf.ComplexComputedList {
    get maxCapacity(): number;
    get minCapacity(): number;
    get seedCapacity(): number;
    get targetTrackingScalingPolicyConfiguration(): any;
}
export declare function dataAwsccDynamodbGlobalTableReplicasReadProvisionedThroughputSettingsReadCapacityAutoScalingSettingsToTerraform(struct?: DataAwsccDynamodbGlobalTableReplicasReadProvisionedThroughputSettingsReadCapacityAutoScalingSettings): any;
export declare class DataAwsccDynamodbGlobalTableReplicasReadProvisionedThroughputSettings extends cdktf.ComplexComputedList {
    get readCapacityAutoScalingSettings(): any;
    get readCapacityUnits(): number;
}
export declare function dataAwsccDynamodbGlobalTableReplicasReadProvisionedThroughputSettingsToTerraform(struct?: DataAwsccDynamodbGlobalTableReplicasReadProvisionedThroughputSettings): any;
export declare class DataAwsccDynamodbGlobalTableReplicasSseSpecification extends cdktf.ComplexComputedList {
    get kmsMasterKeyId(): string;
}
export declare function dataAwsccDynamodbGlobalTableReplicasSseSpecificationToTerraform(struct?: DataAwsccDynamodbGlobalTableReplicasSseSpecification): any;
export declare class DataAwsccDynamodbGlobalTableReplicasTags extends cdktf.ComplexComputedList {
    get key(): string;
    get value(): string;
}
export declare function dataAwsccDynamodbGlobalTableReplicasTagsToTerraform(struct?: DataAwsccDynamodbGlobalTableReplicasTags): any;
export declare class DataAwsccDynamodbGlobalTableReplicas extends cdktf.ComplexComputedList {
    get contributorInsightsSpecification(): any;
    get globalSecondaryIndexes(): any;
    get pointInTimeRecoverySpecification(): any;
    get readProvisionedThroughputSettings(): any;
    get region(): string;
    get sseSpecification(): any;
    get tags(): any;
}
export declare function dataAwsccDynamodbGlobalTableReplicasToTerraform(struct?: DataAwsccDynamodbGlobalTableReplicas): any;
export declare class DataAwsccDynamodbGlobalTableSseSpecification extends cdktf.ComplexComputedList {
    get sseEnabled(): any;
    get sseType(): string;
}
export declare function dataAwsccDynamodbGlobalTableSseSpecificationToTerraform(struct?: DataAwsccDynamodbGlobalTableSseSpecification): any;
export declare class DataAwsccDynamodbGlobalTableStreamSpecification extends cdktf.ComplexComputedList {
    get streamViewType(): string;
}
export declare function dataAwsccDynamodbGlobalTableStreamSpecificationToTerraform(struct?: DataAwsccDynamodbGlobalTableStreamSpecification): any;
export declare class DataAwsccDynamodbGlobalTableTimeToLiveSpecification extends cdktf.ComplexComputedList {
    get attributeName(): string;
    get enabled(): any;
}
export declare function dataAwsccDynamodbGlobalTableTimeToLiveSpecificationToTerraform(struct?: DataAwsccDynamodbGlobalTableTimeToLiveSpecification): any;
export declare class DataAwsccDynamodbGlobalTableWriteProvisionedThroughputSettingsWriteCapacityAutoScalingSettingsTargetTrackingScalingPolicyConfiguration extends cdktf.ComplexComputedList {
    get disableScaleIn(): any;
    get scaleInCooldown(): number;
    get scaleOutCooldown(): number;
    get targetValue(): number;
}
export declare function dataAwsccDynamodbGlobalTableWriteProvisionedThroughputSettingsWriteCapacityAutoScalingSettingsTargetTrackingScalingPolicyConfigurationToTerraform(struct?: DataAwsccDynamodbGlobalTableWriteProvisionedThroughputSettingsWriteCapacityAutoScalingSettingsTargetTrackingScalingPolicyConfiguration): any;
export declare class DataAwsccDynamodbGlobalTableWriteProvisionedThroughputSettingsWriteCapacityAutoScalingSettings extends cdktf.ComplexComputedList {
    get maxCapacity(): number;
    get minCapacity(): number;
    get seedCapacity(): number;
    get targetTrackingScalingPolicyConfiguration(): any;
}
export declare function dataAwsccDynamodbGlobalTableWriteProvisionedThroughputSettingsWriteCapacityAutoScalingSettingsToTerraform(struct?: DataAwsccDynamodbGlobalTableWriteProvisionedThroughputSettingsWriteCapacityAutoScalingSettings): any;
export declare class DataAwsccDynamodbGlobalTableWriteProvisionedThroughputSettings extends cdktf.ComplexComputedList {
    get writeCapacityAutoScalingSettings(): any;
}
export declare function dataAwsccDynamodbGlobalTableWriteProvisionedThroughputSettingsToTerraform(struct?: DataAwsccDynamodbGlobalTableWriteProvisionedThroughputSettings): any;
/**
* Represents a {@link https://www.terraform.io/docs/providers/awscc/d/dynamodb_global_table.html awscc_dynamodb_global_table}
*/
export declare class DataAwsccDynamodbGlobalTable extends cdktf.TerraformDataSource {
    static readonly tfResourceType: string;
    /**
    * Create a new {@link https://www.terraform.io/docs/providers/awscc/d/dynamodb_global_table.html awscc_dynamodb_global_table} Data Source
    *
    * @param scope The scope in which to define this construct
    * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
    * @param options DataAwsccDynamodbGlobalTableConfig
    */
    constructor(scope: Construct, id: string, config: DataAwsccDynamodbGlobalTableConfig);
    get arn(): string;
    get attributeDefinitions(): any;
    get billingMode(): string;
    get globalSecondaryIndexes(): any;
    private _id;
    get id(): string;
    set id(value: string);
    get idInput(): string;
    get keySchema(): any;
    get localSecondaryIndexes(): any;
    get replicas(): any;
    get sseSpecification(): any;
    get streamArn(): string;
    get streamSpecification(): any;
    get tableId(): string;
    get tableName(): string;
    get timeToLiveSpecification(): any;
    get writeProvisionedThroughputSettings(): any;
    protected synthesizeAttributes(): {
        [name: string]: any;
    };
}
