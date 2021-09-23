"use strict";
// https://www.terraform.io/docs/providers/awscc/d/dynamodb_global_table.html
// generated from terraform resource schema
Object.defineProperty(exports, "__esModule", { value: true });
exports.dataAwsccDynamodbGlobalTableSseSpecificationToTerraform = exports.DataAwsccDynamodbGlobalTableSseSpecification = exports.dataAwsccDynamodbGlobalTableReplicasToTerraform = exports.DataAwsccDynamodbGlobalTableReplicas = exports.dataAwsccDynamodbGlobalTableReplicasTagsToTerraform = exports.DataAwsccDynamodbGlobalTableReplicasTags = exports.dataAwsccDynamodbGlobalTableReplicasSseSpecificationToTerraform = exports.DataAwsccDynamodbGlobalTableReplicasSseSpecification = exports.dataAwsccDynamodbGlobalTableReplicasReadProvisionedThroughputSettingsToTerraform = exports.DataAwsccDynamodbGlobalTableReplicasReadProvisionedThroughputSettings = exports.dataAwsccDynamodbGlobalTableReplicasReadProvisionedThroughputSettingsReadCapacityAutoScalingSettingsToTerraform = exports.DataAwsccDynamodbGlobalTableReplicasReadProvisionedThroughputSettingsReadCapacityAutoScalingSettings = exports.dataAwsccDynamodbGlobalTableReplicasReadProvisionedThroughputSettingsReadCapacityAutoScalingSettingsTargetTrackingScalingPolicyConfigurationToTerraform = exports.DataAwsccDynamodbGlobalTableReplicasReadProvisionedThroughputSettingsReadCapacityAutoScalingSettingsTargetTrackingScalingPolicyConfiguration = exports.dataAwsccDynamodbGlobalTableReplicasPointInTimeRecoverySpecificationToTerraform = exports.DataAwsccDynamodbGlobalTableReplicasPointInTimeRecoverySpecification = exports.dataAwsccDynamodbGlobalTableReplicasGlobalSecondaryIndexesToTerraform = exports.DataAwsccDynamodbGlobalTableReplicasGlobalSecondaryIndexes = exports.dataAwsccDynamodbGlobalTableReplicasGlobalSecondaryIndexesReadProvisionedThroughputSettingsToTerraform = exports.DataAwsccDynamodbGlobalTableReplicasGlobalSecondaryIndexesReadProvisionedThroughputSettings = exports.dataAwsccDynamodbGlobalTableReplicasGlobalSecondaryIndexesReadProvisionedThroughputSettingsReadCapacityAutoScalingSettingsToTerraform = exports.DataAwsccDynamodbGlobalTableReplicasGlobalSecondaryIndexesReadProvisionedThroughputSettingsReadCapacityAutoScalingSettings = exports.dataAwsccDynamodbGlobalTableReplicasGlobalSecondaryIndexesReadProvisionedThroughputSettingsReadCapacityAutoScalingSettingsTargetTrackingScalingPolicyConfigurationToTerraform = exports.DataAwsccDynamodbGlobalTableReplicasGlobalSecondaryIndexesReadProvisionedThroughputSettingsReadCapacityAutoScalingSettingsTargetTrackingScalingPolicyConfiguration = exports.dataAwsccDynamodbGlobalTableReplicasGlobalSecondaryIndexesContributorInsightsSpecificationToTerraform = exports.DataAwsccDynamodbGlobalTableReplicasGlobalSecondaryIndexesContributorInsightsSpecification = exports.dataAwsccDynamodbGlobalTableReplicasContributorInsightsSpecificationToTerraform = exports.DataAwsccDynamodbGlobalTableReplicasContributorInsightsSpecification = exports.dataAwsccDynamodbGlobalTableLocalSecondaryIndexesToTerraform = exports.DataAwsccDynamodbGlobalTableLocalSecondaryIndexes = exports.dataAwsccDynamodbGlobalTableLocalSecondaryIndexesProjectionToTerraform = exports.DataAwsccDynamodbGlobalTableLocalSecondaryIndexesProjection = exports.dataAwsccDynamodbGlobalTableLocalSecondaryIndexesKeySchemaToTerraform = exports.DataAwsccDynamodbGlobalTableLocalSecondaryIndexesKeySchema = exports.dataAwsccDynamodbGlobalTableKeySchemaToTerraform = exports.DataAwsccDynamodbGlobalTableKeySchema = exports.dataAwsccDynamodbGlobalTableGlobalSecondaryIndexesToTerraform = exports.DataAwsccDynamodbGlobalTableGlobalSecondaryIndexes = exports.dataAwsccDynamodbGlobalTableGlobalSecondaryIndexesWriteProvisionedThroughputSettingsToTerraform = exports.DataAwsccDynamodbGlobalTableGlobalSecondaryIndexesWriteProvisionedThroughputSettings = exports.dataAwsccDynamodbGlobalTableGlobalSecondaryIndexesWriteProvisionedThroughputSettingsWriteCapacityAutoScalingSettingsToTerraform = exports.DataAwsccDynamodbGlobalTableGlobalSecondaryIndexesWriteProvisionedThroughputSettingsWriteCapacityAutoScalingSettings = exports.dataAwsccDynamodbGlobalTableGlobalSecondaryIndexesWriteProvisionedThroughputSettingsWriteCapacityAutoScalingSettingsTargetTrackingScalingPolicyConfigurationToTerraform = exports.DataAwsccDynamodbGlobalTableGlobalSecondaryIndexesWriteProvisionedThroughputSettingsWriteCapacityAutoScalingSettingsTargetTrackingScalingPolicyConfiguration = exports.dataAwsccDynamodbGlobalTableGlobalSecondaryIndexesProjectionToTerraform = exports.DataAwsccDynamodbGlobalTableGlobalSecondaryIndexesProjection = exports.dataAwsccDynamodbGlobalTableGlobalSecondaryIndexesKeySchemaToTerraform = exports.DataAwsccDynamodbGlobalTableGlobalSecondaryIndexesKeySchema = exports.dataAwsccDynamodbGlobalTableAttributeDefinitionsToTerraform = exports.DataAwsccDynamodbGlobalTableAttributeDefinitions = void 0;
exports.DataAwsccDynamodbGlobalTable = exports.dataAwsccDynamodbGlobalTableWriteProvisionedThroughputSettingsToTerraform = exports.DataAwsccDynamodbGlobalTableWriteProvisionedThroughputSettings = exports.dataAwsccDynamodbGlobalTableWriteProvisionedThroughputSettingsWriteCapacityAutoScalingSettingsToTerraform = exports.DataAwsccDynamodbGlobalTableWriteProvisionedThroughputSettingsWriteCapacityAutoScalingSettings = exports.dataAwsccDynamodbGlobalTableWriteProvisionedThroughputSettingsWriteCapacityAutoScalingSettingsTargetTrackingScalingPolicyConfigurationToTerraform = exports.DataAwsccDynamodbGlobalTableWriteProvisionedThroughputSettingsWriteCapacityAutoScalingSettingsTargetTrackingScalingPolicyConfiguration = exports.dataAwsccDynamodbGlobalTableTimeToLiveSpecificationToTerraform = exports.DataAwsccDynamodbGlobalTableTimeToLiveSpecification = exports.dataAwsccDynamodbGlobalTableStreamSpecificationToTerraform = exports.DataAwsccDynamodbGlobalTableStreamSpecification = void 0;
const cdktf = require("cdktf");
class DataAwsccDynamodbGlobalTableAttributeDefinitions extends cdktf.ComplexComputedList {
    // attribute_name - computed: true, optional: false, required: false
    get attributeName() {
        return this.getStringAttribute('attribute_name');
    }
    // attribute_type - computed: true, optional: false, required: false
    get attributeType() {
        return this.getStringAttribute('attribute_type');
    }
}
exports.DataAwsccDynamodbGlobalTableAttributeDefinitions = DataAwsccDynamodbGlobalTableAttributeDefinitions;
function dataAwsccDynamodbGlobalTableAttributeDefinitionsToTerraform(struct) {
    if (!cdktf.canInspect(struct)) {
        return struct;
    }
    return {
        attribute_name: cdktf.stringToTerraform(struct.attributeName),
        attribute_type: cdktf.stringToTerraform(struct.attributeType),
    };
}
exports.dataAwsccDynamodbGlobalTableAttributeDefinitionsToTerraform = dataAwsccDynamodbGlobalTableAttributeDefinitionsToTerraform;
class DataAwsccDynamodbGlobalTableGlobalSecondaryIndexesKeySchema extends cdktf.ComplexComputedList {
    // attribute_name - computed: true, optional: false, required: false
    get attributeName() {
        return this.getStringAttribute('attribute_name');
    }
    // key_type - computed: true, optional: false, required: false
    get keyType() {
        return this.getStringAttribute('key_type');
    }
}
exports.DataAwsccDynamodbGlobalTableGlobalSecondaryIndexesKeySchema = DataAwsccDynamodbGlobalTableGlobalSecondaryIndexesKeySchema;
function dataAwsccDynamodbGlobalTableGlobalSecondaryIndexesKeySchemaToTerraform(struct) {
    if (!cdktf.canInspect(struct)) {
        return struct;
    }
    return {
        attribute_name: cdktf.stringToTerraform(struct.attributeName),
        key_type: cdktf.stringToTerraform(struct.keyType),
    };
}
exports.dataAwsccDynamodbGlobalTableGlobalSecondaryIndexesKeySchemaToTerraform = dataAwsccDynamodbGlobalTableGlobalSecondaryIndexesKeySchemaToTerraform;
class DataAwsccDynamodbGlobalTableGlobalSecondaryIndexesProjection extends cdktf.ComplexComputedList {
    // non_key_attributes - computed: true, optional: false, required: false
    get nonKeyAttributes() {
        return this.getListAttribute('non_key_attributes');
    }
    // projection_type - computed: true, optional: false, required: false
    get projectionType() {
        return this.getStringAttribute('projection_type');
    }
}
exports.DataAwsccDynamodbGlobalTableGlobalSecondaryIndexesProjection = DataAwsccDynamodbGlobalTableGlobalSecondaryIndexesProjection;
function dataAwsccDynamodbGlobalTableGlobalSecondaryIndexesProjectionToTerraform(struct) {
    if (!cdktf.canInspect(struct)) {
        return struct;
    }
    return {
        non_key_attributes: cdktf.listMapper(cdktf.stringToTerraform)(struct.nonKeyAttributes),
        projection_type: cdktf.stringToTerraform(struct.projectionType),
    };
}
exports.dataAwsccDynamodbGlobalTableGlobalSecondaryIndexesProjectionToTerraform = dataAwsccDynamodbGlobalTableGlobalSecondaryIndexesProjectionToTerraform;
class DataAwsccDynamodbGlobalTableGlobalSecondaryIndexesWriteProvisionedThroughputSettingsWriteCapacityAutoScalingSettingsTargetTrackingScalingPolicyConfiguration extends cdktf.ComplexComputedList {
    // disable_scale_in - computed: true, optional: false, required: false
    get disableScaleIn() {
        return this.getBooleanAttribute('disable_scale_in');
    }
    // scale_in_cooldown - computed: true, optional: false, required: false
    get scaleInCooldown() {
        return this.getNumberAttribute('scale_in_cooldown');
    }
    // scale_out_cooldown - computed: true, optional: false, required: false
    get scaleOutCooldown() {
        return this.getNumberAttribute('scale_out_cooldown');
    }
    // target_value - computed: true, optional: false, required: false
    get targetValue() {
        return this.getNumberAttribute('target_value');
    }
}
exports.DataAwsccDynamodbGlobalTableGlobalSecondaryIndexesWriteProvisionedThroughputSettingsWriteCapacityAutoScalingSettingsTargetTrackingScalingPolicyConfiguration = DataAwsccDynamodbGlobalTableGlobalSecondaryIndexesWriteProvisionedThroughputSettingsWriteCapacityAutoScalingSettingsTargetTrackingScalingPolicyConfiguration;
function dataAwsccDynamodbGlobalTableGlobalSecondaryIndexesWriteProvisionedThroughputSettingsWriteCapacityAutoScalingSettingsTargetTrackingScalingPolicyConfigurationToTerraform(struct) {
    if (!cdktf.canInspect(struct)) {
        return struct;
    }
    return {
        disable_scale_in: cdktf.booleanToTerraform(struct.disableScaleIn),
        scale_in_cooldown: cdktf.numberToTerraform(struct.scaleInCooldown),
        scale_out_cooldown: cdktf.numberToTerraform(struct.scaleOutCooldown),
        target_value: cdktf.numberToTerraform(struct.targetValue),
    };
}
exports.dataAwsccDynamodbGlobalTableGlobalSecondaryIndexesWriteProvisionedThroughputSettingsWriteCapacityAutoScalingSettingsTargetTrackingScalingPolicyConfigurationToTerraform = dataAwsccDynamodbGlobalTableGlobalSecondaryIndexesWriteProvisionedThroughputSettingsWriteCapacityAutoScalingSettingsTargetTrackingScalingPolicyConfigurationToTerraform;
class DataAwsccDynamodbGlobalTableGlobalSecondaryIndexesWriteProvisionedThroughputSettingsWriteCapacityAutoScalingSettings extends cdktf.ComplexComputedList {
    // max_capacity - computed: true, optional: false, required: false
    get maxCapacity() {
        return this.getNumberAttribute('max_capacity');
    }
    // min_capacity - computed: true, optional: false, required: false
    get minCapacity() {
        return this.getNumberAttribute('min_capacity');
    }
    // seed_capacity - computed: true, optional: false, required: false
    get seedCapacity() {
        return this.getNumberAttribute('seed_capacity');
    }
    // target_tracking_scaling_policy_configuration - computed: true, optional: false, required: false
    get targetTrackingScalingPolicyConfiguration() {
        return this.interpolationForAttribute('target_tracking_scaling_policy_configuration');
    }
}
exports.DataAwsccDynamodbGlobalTableGlobalSecondaryIndexesWriteProvisionedThroughputSettingsWriteCapacityAutoScalingSettings = DataAwsccDynamodbGlobalTableGlobalSecondaryIndexesWriteProvisionedThroughputSettingsWriteCapacityAutoScalingSettings;
function dataAwsccDynamodbGlobalTableGlobalSecondaryIndexesWriteProvisionedThroughputSettingsWriteCapacityAutoScalingSettingsToTerraform(struct) {
    if (!cdktf.canInspect(struct)) {
        return struct;
    }
    return {
        max_capacity: cdktf.numberToTerraform(struct.maxCapacity),
        min_capacity: cdktf.numberToTerraform(struct.minCapacity),
        seed_capacity: cdktf.numberToTerraform(struct.seedCapacity),
        target_tracking_scaling_policy_configuration: dataAwsccDynamodbGlobalTableGlobalSecondaryIndexesWriteProvisionedThroughputSettingsWriteCapacityAutoScalingSettingsTargetTrackingScalingPolicyConfigurationToTerraform(struct.targetTrackingScalingPolicyConfiguration),
    };
}
exports.dataAwsccDynamodbGlobalTableGlobalSecondaryIndexesWriteProvisionedThroughputSettingsWriteCapacityAutoScalingSettingsToTerraform = dataAwsccDynamodbGlobalTableGlobalSecondaryIndexesWriteProvisionedThroughputSettingsWriteCapacityAutoScalingSettingsToTerraform;
class DataAwsccDynamodbGlobalTableGlobalSecondaryIndexesWriteProvisionedThroughputSettings extends cdktf.ComplexComputedList {
    // write_capacity_auto_scaling_settings - computed: true, optional: false, required: false
    get writeCapacityAutoScalingSettings() {
        return this.interpolationForAttribute('write_capacity_auto_scaling_settings');
    }
}
exports.DataAwsccDynamodbGlobalTableGlobalSecondaryIndexesWriteProvisionedThroughputSettings = DataAwsccDynamodbGlobalTableGlobalSecondaryIndexesWriteProvisionedThroughputSettings;
function dataAwsccDynamodbGlobalTableGlobalSecondaryIndexesWriteProvisionedThroughputSettingsToTerraform(struct) {
    if (!cdktf.canInspect(struct)) {
        return struct;
    }
    return {
        write_capacity_auto_scaling_settings: dataAwsccDynamodbGlobalTableGlobalSecondaryIndexesWriteProvisionedThroughputSettingsWriteCapacityAutoScalingSettingsToTerraform(struct.writeCapacityAutoScalingSettings),
    };
}
exports.dataAwsccDynamodbGlobalTableGlobalSecondaryIndexesWriteProvisionedThroughputSettingsToTerraform = dataAwsccDynamodbGlobalTableGlobalSecondaryIndexesWriteProvisionedThroughputSettingsToTerraform;
class DataAwsccDynamodbGlobalTableGlobalSecondaryIndexes extends cdktf.ComplexComputedList {
    // index_name - computed: true, optional: false, required: false
    get indexName() {
        return this.getStringAttribute('index_name');
    }
    // key_schema - computed: true, optional: false, required: false
    get keySchema() {
        return this.interpolationForAttribute('key_schema');
    }
    // projection - computed: true, optional: false, required: false
    get projection() {
        return this.interpolationForAttribute('projection');
    }
    // write_provisioned_throughput_settings - computed: true, optional: false, required: false
    get writeProvisionedThroughputSettings() {
        return this.interpolationForAttribute('write_provisioned_throughput_settings');
    }
}
exports.DataAwsccDynamodbGlobalTableGlobalSecondaryIndexes = DataAwsccDynamodbGlobalTableGlobalSecondaryIndexes;
function dataAwsccDynamodbGlobalTableGlobalSecondaryIndexesToTerraform(struct) {
    if (!cdktf.canInspect(struct)) {
        return struct;
    }
    return {
        index_name: cdktf.stringToTerraform(struct.indexName),
        key_schema: cdktf.listMapper(dataAwsccDynamodbGlobalTableGlobalSecondaryIndexesKeySchemaToTerraform)(struct.keySchema),
        projection: dataAwsccDynamodbGlobalTableGlobalSecondaryIndexesProjectionToTerraform(struct.projection),
        write_provisioned_throughput_settings: dataAwsccDynamodbGlobalTableGlobalSecondaryIndexesWriteProvisionedThroughputSettingsToTerraform(struct.writeProvisionedThroughputSettings),
    };
}
exports.dataAwsccDynamodbGlobalTableGlobalSecondaryIndexesToTerraform = dataAwsccDynamodbGlobalTableGlobalSecondaryIndexesToTerraform;
class DataAwsccDynamodbGlobalTableKeySchema extends cdktf.ComplexComputedList {
    // attribute_name - computed: true, optional: false, required: false
    get attributeName() {
        return this.getStringAttribute('attribute_name');
    }
    // key_type - computed: true, optional: false, required: false
    get keyType() {
        return this.getStringAttribute('key_type');
    }
}
exports.DataAwsccDynamodbGlobalTableKeySchema = DataAwsccDynamodbGlobalTableKeySchema;
function dataAwsccDynamodbGlobalTableKeySchemaToTerraform(struct) {
    if (!cdktf.canInspect(struct)) {
        return struct;
    }
    return {
        attribute_name: cdktf.stringToTerraform(struct.attributeName),
        key_type: cdktf.stringToTerraform(struct.keyType),
    };
}
exports.dataAwsccDynamodbGlobalTableKeySchemaToTerraform = dataAwsccDynamodbGlobalTableKeySchemaToTerraform;
class DataAwsccDynamodbGlobalTableLocalSecondaryIndexesKeySchema extends cdktf.ComplexComputedList {
    // attribute_name - computed: true, optional: false, required: false
    get attributeName() {
        return this.getStringAttribute('attribute_name');
    }
    // key_type - computed: true, optional: false, required: false
    get keyType() {
        return this.getStringAttribute('key_type');
    }
}
exports.DataAwsccDynamodbGlobalTableLocalSecondaryIndexesKeySchema = DataAwsccDynamodbGlobalTableLocalSecondaryIndexesKeySchema;
function dataAwsccDynamodbGlobalTableLocalSecondaryIndexesKeySchemaToTerraform(struct) {
    if (!cdktf.canInspect(struct)) {
        return struct;
    }
    return {
        attribute_name: cdktf.stringToTerraform(struct.attributeName),
        key_type: cdktf.stringToTerraform(struct.keyType),
    };
}
exports.dataAwsccDynamodbGlobalTableLocalSecondaryIndexesKeySchemaToTerraform = dataAwsccDynamodbGlobalTableLocalSecondaryIndexesKeySchemaToTerraform;
class DataAwsccDynamodbGlobalTableLocalSecondaryIndexesProjection extends cdktf.ComplexComputedList {
    // non_key_attributes - computed: true, optional: false, required: false
    get nonKeyAttributes() {
        return this.getListAttribute('non_key_attributes');
    }
    // projection_type - computed: true, optional: false, required: false
    get projectionType() {
        return this.getStringAttribute('projection_type');
    }
}
exports.DataAwsccDynamodbGlobalTableLocalSecondaryIndexesProjection = DataAwsccDynamodbGlobalTableLocalSecondaryIndexesProjection;
function dataAwsccDynamodbGlobalTableLocalSecondaryIndexesProjectionToTerraform(struct) {
    if (!cdktf.canInspect(struct)) {
        return struct;
    }
    return {
        non_key_attributes: cdktf.listMapper(cdktf.stringToTerraform)(struct.nonKeyAttributes),
        projection_type: cdktf.stringToTerraform(struct.projectionType),
    };
}
exports.dataAwsccDynamodbGlobalTableLocalSecondaryIndexesProjectionToTerraform = dataAwsccDynamodbGlobalTableLocalSecondaryIndexesProjectionToTerraform;
class DataAwsccDynamodbGlobalTableLocalSecondaryIndexes extends cdktf.ComplexComputedList {
    // index_name - computed: true, optional: false, required: false
    get indexName() {
        return this.getStringAttribute('index_name');
    }
    // key_schema - computed: true, optional: false, required: false
    get keySchema() {
        return this.interpolationForAttribute('key_schema');
    }
    // projection - computed: true, optional: false, required: false
    get projection() {
        return this.interpolationForAttribute('projection');
    }
}
exports.DataAwsccDynamodbGlobalTableLocalSecondaryIndexes = DataAwsccDynamodbGlobalTableLocalSecondaryIndexes;
function dataAwsccDynamodbGlobalTableLocalSecondaryIndexesToTerraform(struct) {
    if (!cdktf.canInspect(struct)) {
        return struct;
    }
    return {
        index_name: cdktf.stringToTerraform(struct.indexName),
        key_schema: cdktf.listMapper(dataAwsccDynamodbGlobalTableLocalSecondaryIndexesKeySchemaToTerraform)(struct.keySchema),
        projection: dataAwsccDynamodbGlobalTableLocalSecondaryIndexesProjectionToTerraform(struct.projection),
    };
}
exports.dataAwsccDynamodbGlobalTableLocalSecondaryIndexesToTerraform = dataAwsccDynamodbGlobalTableLocalSecondaryIndexesToTerraform;
class DataAwsccDynamodbGlobalTableReplicasContributorInsightsSpecification extends cdktf.ComplexComputedList {
    // enabled - computed: true, optional: false, required: false
    get enabled() {
        return this.getBooleanAttribute('enabled');
    }
}
exports.DataAwsccDynamodbGlobalTableReplicasContributorInsightsSpecification = DataAwsccDynamodbGlobalTableReplicasContributorInsightsSpecification;
function dataAwsccDynamodbGlobalTableReplicasContributorInsightsSpecificationToTerraform(struct) {
    if (!cdktf.canInspect(struct)) {
        return struct;
    }
    return {
        enabled: cdktf.booleanToTerraform(struct.enabled),
    };
}
exports.dataAwsccDynamodbGlobalTableReplicasContributorInsightsSpecificationToTerraform = dataAwsccDynamodbGlobalTableReplicasContributorInsightsSpecificationToTerraform;
class DataAwsccDynamodbGlobalTableReplicasGlobalSecondaryIndexesContributorInsightsSpecification extends cdktf.ComplexComputedList {
    // enabled - computed: true, optional: false, required: false
    get enabled() {
        return this.getBooleanAttribute('enabled');
    }
}
exports.DataAwsccDynamodbGlobalTableReplicasGlobalSecondaryIndexesContributorInsightsSpecification = DataAwsccDynamodbGlobalTableReplicasGlobalSecondaryIndexesContributorInsightsSpecification;
function dataAwsccDynamodbGlobalTableReplicasGlobalSecondaryIndexesContributorInsightsSpecificationToTerraform(struct) {
    if (!cdktf.canInspect(struct)) {
        return struct;
    }
    return {
        enabled: cdktf.booleanToTerraform(struct.enabled),
    };
}
exports.dataAwsccDynamodbGlobalTableReplicasGlobalSecondaryIndexesContributorInsightsSpecificationToTerraform = dataAwsccDynamodbGlobalTableReplicasGlobalSecondaryIndexesContributorInsightsSpecificationToTerraform;
class DataAwsccDynamodbGlobalTableReplicasGlobalSecondaryIndexesReadProvisionedThroughputSettingsReadCapacityAutoScalingSettingsTargetTrackingScalingPolicyConfiguration extends cdktf.ComplexComputedList {
    // disable_scale_in - computed: true, optional: false, required: false
    get disableScaleIn() {
        return this.getBooleanAttribute('disable_scale_in');
    }
    // scale_in_cooldown - computed: true, optional: false, required: false
    get scaleInCooldown() {
        return this.getNumberAttribute('scale_in_cooldown');
    }
    // scale_out_cooldown - computed: true, optional: false, required: false
    get scaleOutCooldown() {
        return this.getNumberAttribute('scale_out_cooldown');
    }
    // target_value - computed: true, optional: false, required: false
    get targetValue() {
        return this.getNumberAttribute('target_value');
    }
}
exports.DataAwsccDynamodbGlobalTableReplicasGlobalSecondaryIndexesReadProvisionedThroughputSettingsReadCapacityAutoScalingSettingsTargetTrackingScalingPolicyConfiguration = DataAwsccDynamodbGlobalTableReplicasGlobalSecondaryIndexesReadProvisionedThroughputSettingsReadCapacityAutoScalingSettingsTargetTrackingScalingPolicyConfiguration;
function dataAwsccDynamodbGlobalTableReplicasGlobalSecondaryIndexesReadProvisionedThroughputSettingsReadCapacityAutoScalingSettingsTargetTrackingScalingPolicyConfigurationToTerraform(struct) {
    if (!cdktf.canInspect(struct)) {
        return struct;
    }
    return {
        disable_scale_in: cdktf.booleanToTerraform(struct.disableScaleIn),
        scale_in_cooldown: cdktf.numberToTerraform(struct.scaleInCooldown),
        scale_out_cooldown: cdktf.numberToTerraform(struct.scaleOutCooldown),
        target_value: cdktf.numberToTerraform(struct.targetValue),
    };
}
exports.dataAwsccDynamodbGlobalTableReplicasGlobalSecondaryIndexesReadProvisionedThroughputSettingsReadCapacityAutoScalingSettingsTargetTrackingScalingPolicyConfigurationToTerraform = dataAwsccDynamodbGlobalTableReplicasGlobalSecondaryIndexesReadProvisionedThroughputSettingsReadCapacityAutoScalingSettingsTargetTrackingScalingPolicyConfigurationToTerraform;
class DataAwsccDynamodbGlobalTableReplicasGlobalSecondaryIndexesReadProvisionedThroughputSettingsReadCapacityAutoScalingSettings extends cdktf.ComplexComputedList {
    // max_capacity - computed: true, optional: false, required: false
    get maxCapacity() {
        return this.getNumberAttribute('max_capacity');
    }
    // min_capacity - computed: true, optional: false, required: false
    get minCapacity() {
        return this.getNumberAttribute('min_capacity');
    }
    // seed_capacity - computed: true, optional: false, required: false
    get seedCapacity() {
        return this.getNumberAttribute('seed_capacity');
    }
    // target_tracking_scaling_policy_configuration - computed: true, optional: false, required: false
    get targetTrackingScalingPolicyConfiguration() {
        return this.interpolationForAttribute('target_tracking_scaling_policy_configuration');
    }
}
exports.DataAwsccDynamodbGlobalTableReplicasGlobalSecondaryIndexesReadProvisionedThroughputSettingsReadCapacityAutoScalingSettings = DataAwsccDynamodbGlobalTableReplicasGlobalSecondaryIndexesReadProvisionedThroughputSettingsReadCapacityAutoScalingSettings;
function dataAwsccDynamodbGlobalTableReplicasGlobalSecondaryIndexesReadProvisionedThroughputSettingsReadCapacityAutoScalingSettingsToTerraform(struct) {
    if (!cdktf.canInspect(struct)) {
        return struct;
    }
    return {
        max_capacity: cdktf.numberToTerraform(struct.maxCapacity),
        min_capacity: cdktf.numberToTerraform(struct.minCapacity),
        seed_capacity: cdktf.numberToTerraform(struct.seedCapacity),
        target_tracking_scaling_policy_configuration: dataAwsccDynamodbGlobalTableReplicasGlobalSecondaryIndexesReadProvisionedThroughputSettingsReadCapacityAutoScalingSettingsTargetTrackingScalingPolicyConfigurationToTerraform(struct.targetTrackingScalingPolicyConfiguration),
    };
}
exports.dataAwsccDynamodbGlobalTableReplicasGlobalSecondaryIndexesReadProvisionedThroughputSettingsReadCapacityAutoScalingSettingsToTerraform = dataAwsccDynamodbGlobalTableReplicasGlobalSecondaryIndexesReadProvisionedThroughputSettingsReadCapacityAutoScalingSettingsToTerraform;
class DataAwsccDynamodbGlobalTableReplicasGlobalSecondaryIndexesReadProvisionedThroughputSettings extends cdktf.ComplexComputedList {
    // read_capacity_auto_scaling_settings - computed: true, optional: false, required: false
    get readCapacityAutoScalingSettings() {
        return this.interpolationForAttribute('read_capacity_auto_scaling_settings');
    }
    // read_capacity_units - computed: true, optional: false, required: false
    get readCapacityUnits() {
        return this.getNumberAttribute('read_capacity_units');
    }
}
exports.DataAwsccDynamodbGlobalTableReplicasGlobalSecondaryIndexesReadProvisionedThroughputSettings = DataAwsccDynamodbGlobalTableReplicasGlobalSecondaryIndexesReadProvisionedThroughputSettings;
function dataAwsccDynamodbGlobalTableReplicasGlobalSecondaryIndexesReadProvisionedThroughputSettingsToTerraform(struct) {
    if (!cdktf.canInspect(struct)) {
        return struct;
    }
    return {
        read_capacity_auto_scaling_settings: dataAwsccDynamodbGlobalTableReplicasGlobalSecondaryIndexesReadProvisionedThroughputSettingsReadCapacityAutoScalingSettingsToTerraform(struct.readCapacityAutoScalingSettings),
        read_capacity_units: cdktf.numberToTerraform(struct.readCapacityUnits),
    };
}
exports.dataAwsccDynamodbGlobalTableReplicasGlobalSecondaryIndexesReadProvisionedThroughputSettingsToTerraform = dataAwsccDynamodbGlobalTableReplicasGlobalSecondaryIndexesReadProvisionedThroughputSettingsToTerraform;
class DataAwsccDynamodbGlobalTableReplicasGlobalSecondaryIndexes extends cdktf.ComplexComputedList {
    // contributor_insights_specification - computed: true, optional: false, required: false
    get contributorInsightsSpecification() {
        return this.interpolationForAttribute('contributor_insights_specification');
    }
    // index_name - computed: true, optional: false, required: false
    get indexName() {
        return this.getStringAttribute('index_name');
    }
    // read_provisioned_throughput_settings - computed: true, optional: false, required: false
    get readProvisionedThroughputSettings() {
        return this.interpolationForAttribute('read_provisioned_throughput_settings');
    }
}
exports.DataAwsccDynamodbGlobalTableReplicasGlobalSecondaryIndexes = DataAwsccDynamodbGlobalTableReplicasGlobalSecondaryIndexes;
function dataAwsccDynamodbGlobalTableReplicasGlobalSecondaryIndexesToTerraform(struct) {
    if (!cdktf.canInspect(struct)) {
        return struct;
    }
    return {
        contributor_insights_specification: dataAwsccDynamodbGlobalTableReplicasGlobalSecondaryIndexesContributorInsightsSpecificationToTerraform(struct.contributorInsightsSpecification),
        index_name: cdktf.stringToTerraform(struct.indexName),
        read_provisioned_throughput_settings: dataAwsccDynamodbGlobalTableReplicasGlobalSecondaryIndexesReadProvisionedThroughputSettingsToTerraform(struct.readProvisionedThroughputSettings),
    };
}
exports.dataAwsccDynamodbGlobalTableReplicasGlobalSecondaryIndexesToTerraform = dataAwsccDynamodbGlobalTableReplicasGlobalSecondaryIndexesToTerraform;
class DataAwsccDynamodbGlobalTableReplicasPointInTimeRecoverySpecification extends cdktf.ComplexComputedList {
    // point_in_time_recovery_enabled - computed: true, optional: false, required: false
    get pointInTimeRecoveryEnabled() {
        return this.getBooleanAttribute('point_in_time_recovery_enabled');
    }
}
exports.DataAwsccDynamodbGlobalTableReplicasPointInTimeRecoverySpecification = DataAwsccDynamodbGlobalTableReplicasPointInTimeRecoverySpecification;
function dataAwsccDynamodbGlobalTableReplicasPointInTimeRecoverySpecificationToTerraform(struct) {
    if (!cdktf.canInspect(struct)) {
        return struct;
    }
    return {
        point_in_time_recovery_enabled: cdktf.booleanToTerraform(struct.pointInTimeRecoveryEnabled),
    };
}
exports.dataAwsccDynamodbGlobalTableReplicasPointInTimeRecoverySpecificationToTerraform = dataAwsccDynamodbGlobalTableReplicasPointInTimeRecoverySpecificationToTerraform;
class DataAwsccDynamodbGlobalTableReplicasReadProvisionedThroughputSettingsReadCapacityAutoScalingSettingsTargetTrackingScalingPolicyConfiguration extends cdktf.ComplexComputedList {
    // disable_scale_in - computed: true, optional: false, required: false
    get disableScaleIn() {
        return this.getBooleanAttribute('disable_scale_in');
    }
    // scale_in_cooldown - computed: true, optional: false, required: false
    get scaleInCooldown() {
        return this.getNumberAttribute('scale_in_cooldown');
    }
    // scale_out_cooldown - computed: true, optional: false, required: false
    get scaleOutCooldown() {
        return this.getNumberAttribute('scale_out_cooldown');
    }
    // target_value - computed: true, optional: false, required: false
    get targetValue() {
        return this.getNumberAttribute('target_value');
    }
}
exports.DataAwsccDynamodbGlobalTableReplicasReadProvisionedThroughputSettingsReadCapacityAutoScalingSettingsTargetTrackingScalingPolicyConfiguration = DataAwsccDynamodbGlobalTableReplicasReadProvisionedThroughputSettingsReadCapacityAutoScalingSettingsTargetTrackingScalingPolicyConfiguration;
function dataAwsccDynamodbGlobalTableReplicasReadProvisionedThroughputSettingsReadCapacityAutoScalingSettingsTargetTrackingScalingPolicyConfigurationToTerraform(struct) {
    if (!cdktf.canInspect(struct)) {
        return struct;
    }
    return {
        disable_scale_in: cdktf.booleanToTerraform(struct.disableScaleIn),
        scale_in_cooldown: cdktf.numberToTerraform(struct.scaleInCooldown),
        scale_out_cooldown: cdktf.numberToTerraform(struct.scaleOutCooldown),
        target_value: cdktf.numberToTerraform(struct.targetValue),
    };
}
exports.dataAwsccDynamodbGlobalTableReplicasReadProvisionedThroughputSettingsReadCapacityAutoScalingSettingsTargetTrackingScalingPolicyConfigurationToTerraform = dataAwsccDynamodbGlobalTableReplicasReadProvisionedThroughputSettingsReadCapacityAutoScalingSettingsTargetTrackingScalingPolicyConfigurationToTerraform;
class DataAwsccDynamodbGlobalTableReplicasReadProvisionedThroughputSettingsReadCapacityAutoScalingSettings extends cdktf.ComplexComputedList {
    // max_capacity - computed: true, optional: false, required: false
    get maxCapacity() {
        return this.getNumberAttribute('max_capacity');
    }
    // min_capacity - computed: true, optional: false, required: false
    get minCapacity() {
        return this.getNumberAttribute('min_capacity');
    }
    // seed_capacity - computed: true, optional: false, required: false
    get seedCapacity() {
        return this.getNumberAttribute('seed_capacity');
    }
    // target_tracking_scaling_policy_configuration - computed: true, optional: false, required: false
    get targetTrackingScalingPolicyConfiguration() {
        return this.interpolationForAttribute('target_tracking_scaling_policy_configuration');
    }
}
exports.DataAwsccDynamodbGlobalTableReplicasReadProvisionedThroughputSettingsReadCapacityAutoScalingSettings = DataAwsccDynamodbGlobalTableReplicasReadProvisionedThroughputSettingsReadCapacityAutoScalingSettings;
function dataAwsccDynamodbGlobalTableReplicasReadProvisionedThroughputSettingsReadCapacityAutoScalingSettingsToTerraform(struct) {
    if (!cdktf.canInspect(struct)) {
        return struct;
    }
    return {
        max_capacity: cdktf.numberToTerraform(struct.maxCapacity),
        min_capacity: cdktf.numberToTerraform(struct.minCapacity),
        seed_capacity: cdktf.numberToTerraform(struct.seedCapacity),
        target_tracking_scaling_policy_configuration: dataAwsccDynamodbGlobalTableReplicasReadProvisionedThroughputSettingsReadCapacityAutoScalingSettingsTargetTrackingScalingPolicyConfigurationToTerraform(struct.targetTrackingScalingPolicyConfiguration),
    };
}
exports.dataAwsccDynamodbGlobalTableReplicasReadProvisionedThroughputSettingsReadCapacityAutoScalingSettingsToTerraform = dataAwsccDynamodbGlobalTableReplicasReadProvisionedThroughputSettingsReadCapacityAutoScalingSettingsToTerraform;
class DataAwsccDynamodbGlobalTableReplicasReadProvisionedThroughputSettings extends cdktf.ComplexComputedList {
    // read_capacity_auto_scaling_settings - computed: true, optional: false, required: false
    get readCapacityAutoScalingSettings() {
        return this.interpolationForAttribute('read_capacity_auto_scaling_settings');
    }
    // read_capacity_units - computed: true, optional: false, required: false
    get readCapacityUnits() {
        return this.getNumberAttribute('read_capacity_units');
    }
}
exports.DataAwsccDynamodbGlobalTableReplicasReadProvisionedThroughputSettings = DataAwsccDynamodbGlobalTableReplicasReadProvisionedThroughputSettings;
function dataAwsccDynamodbGlobalTableReplicasReadProvisionedThroughputSettingsToTerraform(struct) {
    if (!cdktf.canInspect(struct)) {
        return struct;
    }
    return {
        read_capacity_auto_scaling_settings: dataAwsccDynamodbGlobalTableReplicasReadProvisionedThroughputSettingsReadCapacityAutoScalingSettingsToTerraform(struct.readCapacityAutoScalingSettings),
        read_capacity_units: cdktf.numberToTerraform(struct.readCapacityUnits),
    };
}
exports.dataAwsccDynamodbGlobalTableReplicasReadProvisionedThroughputSettingsToTerraform = dataAwsccDynamodbGlobalTableReplicasReadProvisionedThroughputSettingsToTerraform;
class DataAwsccDynamodbGlobalTableReplicasSseSpecification extends cdktf.ComplexComputedList {
    // kms_master_key_id - computed: true, optional: false, required: false
    get kmsMasterKeyId() {
        return this.getStringAttribute('kms_master_key_id');
    }
}
exports.DataAwsccDynamodbGlobalTableReplicasSseSpecification = DataAwsccDynamodbGlobalTableReplicasSseSpecification;
function dataAwsccDynamodbGlobalTableReplicasSseSpecificationToTerraform(struct) {
    if (!cdktf.canInspect(struct)) {
        return struct;
    }
    return {
        kms_master_key_id: cdktf.stringToTerraform(struct.kmsMasterKeyId),
    };
}
exports.dataAwsccDynamodbGlobalTableReplicasSseSpecificationToTerraform = dataAwsccDynamodbGlobalTableReplicasSseSpecificationToTerraform;
class DataAwsccDynamodbGlobalTableReplicasTags extends cdktf.ComplexComputedList {
    // key - computed: true, optional: false, required: false
    get key() {
        return this.getStringAttribute('key');
    }
    // value - computed: true, optional: false, required: false
    get value() {
        return this.getStringAttribute('value');
    }
}
exports.DataAwsccDynamodbGlobalTableReplicasTags = DataAwsccDynamodbGlobalTableReplicasTags;
function dataAwsccDynamodbGlobalTableReplicasTagsToTerraform(struct) {
    if (!cdktf.canInspect(struct)) {
        return struct;
    }
    return {
        key: cdktf.stringToTerraform(struct.key),
        value: cdktf.stringToTerraform(struct.value),
    };
}
exports.dataAwsccDynamodbGlobalTableReplicasTagsToTerraform = dataAwsccDynamodbGlobalTableReplicasTagsToTerraform;
class DataAwsccDynamodbGlobalTableReplicas extends cdktf.ComplexComputedList {
    // contributor_insights_specification - computed: true, optional: false, required: false
    get contributorInsightsSpecification() {
        return this.interpolationForAttribute('contributor_insights_specification');
    }
    // global_secondary_indexes - computed: true, optional: false, required: false
    get globalSecondaryIndexes() {
        return this.interpolationForAttribute('global_secondary_indexes');
    }
    // point_in_time_recovery_specification - computed: true, optional: false, required: false
    get pointInTimeRecoverySpecification() {
        return this.interpolationForAttribute('point_in_time_recovery_specification');
    }
    // read_provisioned_throughput_settings - computed: true, optional: false, required: false
    get readProvisionedThroughputSettings() {
        return this.interpolationForAttribute('read_provisioned_throughput_settings');
    }
    // region - computed: true, optional: false, required: false
    get region() {
        return this.getStringAttribute('region');
    }
    // sse_specification - computed: true, optional: false, required: false
    get sseSpecification() {
        return this.interpolationForAttribute('sse_specification');
    }
    // tags - computed: true, optional: false, required: false
    get tags() {
        return this.interpolationForAttribute('tags');
    }
}
exports.DataAwsccDynamodbGlobalTableReplicas = DataAwsccDynamodbGlobalTableReplicas;
function dataAwsccDynamodbGlobalTableReplicasToTerraform(struct) {
    if (!cdktf.canInspect(struct)) {
        return struct;
    }
    return {
        contributor_insights_specification: dataAwsccDynamodbGlobalTableReplicasContributorInsightsSpecificationToTerraform(struct.contributorInsightsSpecification),
        global_secondary_indexes: cdktf.listMapper(dataAwsccDynamodbGlobalTableReplicasGlobalSecondaryIndexesToTerraform)(struct.globalSecondaryIndexes),
        point_in_time_recovery_specification: dataAwsccDynamodbGlobalTableReplicasPointInTimeRecoverySpecificationToTerraform(struct.pointInTimeRecoverySpecification),
        read_provisioned_throughput_settings: dataAwsccDynamodbGlobalTableReplicasReadProvisionedThroughputSettingsToTerraform(struct.readProvisionedThroughputSettings),
        region: cdktf.stringToTerraform(struct.region),
        sse_specification: dataAwsccDynamodbGlobalTableReplicasSseSpecificationToTerraform(struct.sseSpecification),
        tags: cdktf.listMapper(dataAwsccDynamodbGlobalTableReplicasTagsToTerraform)(struct.tags),
    };
}
exports.dataAwsccDynamodbGlobalTableReplicasToTerraform = dataAwsccDynamodbGlobalTableReplicasToTerraform;
class DataAwsccDynamodbGlobalTableSseSpecification extends cdktf.ComplexComputedList {
    // sse_enabled - computed: true, optional: false, required: false
    get sseEnabled() {
        return this.getBooleanAttribute('sse_enabled');
    }
    // sse_type - computed: true, optional: false, required: false
    get sseType() {
        return this.getStringAttribute('sse_type');
    }
}
exports.DataAwsccDynamodbGlobalTableSseSpecification = DataAwsccDynamodbGlobalTableSseSpecification;
function dataAwsccDynamodbGlobalTableSseSpecificationToTerraform(struct) {
    if (!cdktf.canInspect(struct)) {
        return struct;
    }
    return {
        sse_enabled: cdktf.booleanToTerraform(struct.sseEnabled),
        sse_type: cdktf.stringToTerraform(struct.sseType),
    };
}
exports.dataAwsccDynamodbGlobalTableSseSpecificationToTerraform = dataAwsccDynamodbGlobalTableSseSpecificationToTerraform;
class DataAwsccDynamodbGlobalTableStreamSpecification extends cdktf.ComplexComputedList {
    // stream_view_type - computed: true, optional: false, required: false
    get streamViewType() {
        return this.getStringAttribute('stream_view_type');
    }
}
exports.DataAwsccDynamodbGlobalTableStreamSpecification = DataAwsccDynamodbGlobalTableStreamSpecification;
function dataAwsccDynamodbGlobalTableStreamSpecificationToTerraform(struct) {
    if (!cdktf.canInspect(struct)) {
        return struct;
    }
    return {
        stream_view_type: cdktf.stringToTerraform(struct.streamViewType),
    };
}
exports.dataAwsccDynamodbGlobalTableStreamSpecificationToTerraform = dataAwsccDynamodbGlobalTableStreamSpecificationToTerraform;
class DataAwsccDynamodbGlobalTableTimeToLiveSpecification extends cdktf.ComplexComputedList {
    // attribute_name - computed: true, optional: false, required: false
    get attributeName() {
        return this.getStringAttribute('attribute_name');
    }
    // enabled - computed: true, optional: false, required: false
    get enabled() {
        return this.getBooleanAttribute('enabled');
    }
}
exports.DataAwsccDynamodbGlobalTableTimeToLiveSpecification = DataAwsccDynamodbGlobalTableTimeToLiveSpecification;
function dataAwsccDynamodbGlobalTableTimeToLiveSpecificationToTerraform(struct) {
    if (!cdktf.canInspect(struct)) {
        return struct;
    }
    return {
        attribute_name: cdktf.stringToTerraform(struct.attributeName),
        enabled: cdktf.booleanToTerraform(struct.enabled),
    };
}
exports.dataAwsccDynamodbGlobalTableTimeToLiveSpecificationToTerraform = dataAwsccDynamodbGlobalTableTimeToLiveSpecificationToTerraform;
class DataAwsccDynamodbGlobalTableWriteProvisionedThroughputSettingsWriteCapacityAutoScalingSettingsTargetTrackingScalingPolicyConfiguration extends cdktf.ComplexComputedList {
    // disable_scale_in - computed: true, optional: false, required: false
    get disableScaleIn() {
        return this.getBooleanAttribute('disable_scale_in');
    }
    // scale_in_cooldown - computed: true, optional: false, required: false
    get scaleInCooldown() {
        return this.getNumberAttribute('scale_in_cooldown');
    }
    // scale_out_cooldown - computed: true, optional: false, required: false
    get scaleOutCooldown() {
        return this.getNumberAttribute('scale_out_cooldown');
    }
    // target_value - computed: true, optional: false, required: false
    get targetValue() {
        return this.getNumberAttribute('target_value');
    }
}
exports.DataAwsccDynamodbGlobalTableWriteProvisionedThroughputSettingsWriteCapacityAutoScalingSettingsTargetTrackingScalingPolicyConfiguration = DataAwsccDynamodbGlobalTableWriteProvisionedThroughputSettingsWriteCapacityAutoScalingSettingsTargetTrackingScalingPolicyConfiguration;
function dataAwsccDynamodbGlobalTableWriteProvisionedThroughputSettingsWriteCapacityAutoScalingSettingsTargetTrackingScalingPolicyConfigurationToTerraform(struct) {
    if (!cdktf.canInspect(struct)) {
        return struct;
    }
    return {
        disable_scale_in: cdktf.booleanToTerraform(struct.disableScaleIn),
        scale_in_cooldown: cdktf.numberToTerraform(struct.scaleInCooldown),
        scale_out_cooldown: cdktf.numberToTerraform(struct.scaleOutCooldown),
        target_value: cdktf.numberToTerraform(struct.targetValue),
    };
}
exports.dataAwsccDynamodbGlobalTableWriteProvisionedThroughputSettingsWriteCapacityAutoScalingSettingsTargetTrackingScalingPolicyConfigurationToTerraform = dataAwsccDynamodbGlobalTableWriteProvisionedThroughputSettingsWriteCapacityAutoScalingSettingsTargetTrackingScalingPolicyConfigurationToTerraform;
class DataAwsccDynamodbGlobalTableWriteProvisionedThroughputSettingsWriteCapacityAutoScalingSettings extends cdktf.ComplexComputedList {
    // max_capacity - computed: true, optional: false, required: false
    get maxCapacity() {
        return this.getNumberAttribute('max_capacity');
    }
    // min_capacity - computed: true, optional: false, required: false
    get minCapacity() {
        return this.getNumberAttribute('min_capacity');
    }
    // seed_capacity - computed: true, optional: false, required: false
    get seedCapacity() {
        return this.getNumberAttribute('seed_capacity');
    }
    // target_tracking_scaling_policy_configuration - computed: true, optional: false, required: false
    get targetTrackingScalingPolicyConfiguration() {
        return this.interpolationForAttribute('target_tracking_scaling_policy_configuration');
    }
}
exports.DataAwsccDynamodbGlobalTableWriteProvisionedThroughputSettingsWriteCapacityAutoScalingSettings = DataAwsccDynamodbGlobalTableWriteProvisionedThroughputSettingsWriteCapacityAutoScalingSettings;
function dataAwsccDynamodbGlobalTableWriteProvisionedThroughputSettingsWriteCapacityAutoScalingSettingsToTerraform(struct) {
    if (!cdktf.canInspect(struct)) {
        return struct;
    }
    return {
        max_capacity: cdktf.numberToTerraform(struct.maxCapacity),
        min_capacity: cdktf.numberToTerraform(struct.minCapacity),
        seed_capacity: cdktf.numberToTerraform(struct.seedCapacity),
        target_tracking_scaling_policy_configuration: dataAwsccDynamodbGlobalTableWriteProvisionedThroughputSettingsWriteCapacityAutoScalingSettingsTargetTrackingScalingPolicyConfigurationToTerraform(struct.targetTrackingScalingPolicyConfiguration),
    };
}
exports.dataAwsccDynamodbGlobalTableWriteProvisionedThroughputSettingsWriteCapacityAutoScalingSettingsToTerraform = dataAwsccDynamodbGlobalTableWriteProvisionedThroughputSettingsWriteCapacityAutoScalingSettingsToTerraform;
class DataAwsccDynamodbGlobalTableWriteProvisionedThroughputSettings extends cdktf.ComplexComputedList {
    // write_capacity_auto_scaling_settings - computed: true, optional: false, required: false
    get writeCapacityAutoScalingSettings() {
        return this.interpolationForAttribute('write_capacity_auto_scaling_settings');
    }
}
exports.DataAwsccDynamodbGlobalTableWriteProvisionedThroughputSettings = DataAwsccDynamodbGlobalTableWriteProvisionedThroughputSettings;
function dataAwsccDynamodbGlobalTableWriteProvisionedThroughputSettingsToTerraform(struct) {
    if (!cdktf.canInspect(struct)) {
        return struct;
    }
    return {
        write_capacity_auto_scaling_settings: dataAwsccDynamodbGlobalTableWriteProvisionedThroughputSettingsWriteCapacityAutoScalingSettingsToTerraform(struct.writeCapacityAutoScalingSettings),
    };
}
exports.dataAwsccDynamodbGlobalTableWriteProvisionedThroughputSettingsToTerraform = dataAwsccDynamodbGlobalTableWriteProvisionedThroughputSettingsToTerraform;
/**
* Represents a {@link https://www.terraform.io/docs/providers/awscc/d/dynamodb_global_table.html awscc_dynamodb_global_table}
*/
class DataAwsccDynamodbGlobalTable extends cdktf.TerraformDataSource {
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
    constructor(scope, id, config) {
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
    get arn() {
        return this.getStringAttribute('arn');
    }
    // attribute_definitions - computed: true, optional: false, required: false
    get attributeDefinitions() {
        return this.interpolationForAttribute('attribute_definitions');
    }
    // billing_mode - computed: true, optional: false, required: false
    get billingMode() {
        return this.getStringAttribute('billing_mode');
    }
    // global_secondary_indexes - computed: true, optional: false, required: false
    get globalSecondaryIndexes() {
        return this.interpolationForAttribute('global_secondary_indexes');
    }
    get id() {
        return this.getStringAttribute('id');
    }
    set id(value) {
        this._id = value;
    }
    // Temporarily expose input value. Use with caution.
    get idInput() {
        return this._id;
    }
    // key_schema - computed: true, optional: false, required: false
    get keySchema() {
        return this.interpolationForAttribute('key_schema');
    }
    // local_secondary_indexes - computed: true, optional: false, required: false
    get localSecondaryIndexes() {
        return this.interpolationForAttribute('local_secondary_indexes');
    }
    // replicas - computed: true, optional: false, required: false
    get replicas() {
        return this.interpolationForAttribute('replicas');
    }
    // sse_specification - computed: true, optional: false, required: false
    get sseSpecification() {
        return this.interpolationForAttribute('sse_specification');
    }
    // stream_arn - computed: true, optional: false, required: false
    get streamArn() {
        return this.getStringAttribute('stream_arn');
    }
    // stream_specification - computed: true, optional: false, required: false
    get streamSpecification() {
        return this.interpolationForAttribute('stream_specification');
    }
    // table_id - computed: true, optional: false, required: false
    get tableId() {
        return this.getStringAttribute('table_id');
    }
    // table_name - computed: true, optional: false, required: false
    get tableName() {
        return this.getStringAttribute('table_name');
    }
    // time_to_live_specification - computed: true, optional: false, required: false
    get timeToLiveSpecification() {
        return this.interpolationForAttribute('time_to_live_specification');
    }
    // write_provisioned_throughput_settings - computed: true, optional: false, required: false
    get writeProvisionedThroughputSettings() {
        return this.interpolationForAttribute('write_provisioned_throughput_settings');
    }
    // =========
    // SYNTHESIS
    // =========
    synthesizeAttributes() {
        return {
            id: cdktf.stringToTerraform(this._id),
        };
    }
}
exports.DataAwsccDynamodbGlobalTable = DataAwsccDynamodbGlobalTable;
// =================
// STATIC PROPERTIES
// =================
DataAwsccDynamodbGlobalTable.tfResourceType = "awscc_dynamodb_global_table";
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZGF0YS1hd3NjYy1keW5hbW9kYi1nbG9iYWwtdGFibGUuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyJkYXRhLWF3c2NjLWR5bmFtb2RiLWdsb2JhbC10YWJsZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiO0FBQUEsNkVBQTZFO0FBQzdFLDJDQUEyQzs7OztBQUczQywrQkFBK0I7QUFZL0IsTUFBYSxnREFBaUQsU0FBUSxLQUFLLENBQUMsbUJBQW1CO0lBRTdGLG9FQUFvRTtJQUNwRSxJQUFXLGFBQWE7UUFDdEIsT0FBTyxJQUFJLENBQUMsa0JBQWtCLENBQUMsZ0JBQWdCLENBQUMsQ0FBQztJQUNuRCxDQUFDO0lBRUQsb0VBQW9FO0lBQ3BFLElBQVcsYUFBYTtRQUN0QixPQUFPLElBQUksQ0FBQyxrQkFBa0IsQ0FBQyxnQkFBZ0IsQ0FBQyxDQUFDO0lBQ25ELENBQUM7Q0FDRjtBQVhELDRHQVdDO0FBRUQsU0FBZ0IsMkRBQTJELENBQUMsTUFBeUQ7SUFDbkksSUFBSSxDQUFDLEtBQUssQ0FBQyxVQUFVLENBQUMsTUFBTSxDQUFDLEVBQUU7UUFBRSxPQUFPLE1BQU0sQ0FBQztLQUFFO0lBQ2pELE9BQU87UUFDTCxjQUFjLEVBQUUsS0FBSyxDQUFDLGlCQUFpQixDQUFDLE1BQU8sQ0FBQyxhQUFhLENBQUM7UUFDOUQsY0FBYyxFQUFFLEtBQUssQ0FBQyxpQkFBaUIsQ0FBQyxNQUFPLENBQUMsYUFBYSxDQUFDO0tBQy9ELENBQUE7QUFDSCxDQUFDO0FBTkQsa0lBTUM7QUFFRCxNQUFhLDJEQUE0RCxTQUFRLEtBQUssQ0FBQyxtQkFBbUI7SUFFeEcsb0VBQW9FO0lBQ3BFLElBQVcsYUFBYTtRQUN0QixPQUFPLElBQUksQ0FBQyxrQkFBa0IsQ0FBQyxnQkFBZ0IsQ0FBQyxDQUFDO0lBQ25ELENBQUM7SUFFRCw4REFBOEQ7SUFDOUQsSUFBVyxPQUFPO1FBQ2hCLE9BQU8sSUFBSSxDQUFDLGtCQUFrQixDQUFDLFVBQVUsQ0FBQyxDQUFDO0lBQzdDLENB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QUFLLENBQUMsaUJBQWlCLENBQUMsSUFBSSxDQUFDLEdBQUcsQ0FBQztTQUN0QyxDQUFDO0lBQ0osQ0FBQzs7QUEvSEgsb0VBZ0lDO0FBOUhDLG9CQUFvQjtBQUNwQixvQkFBb0I7QUFDcEIsb0JBQW9CO0FBQ0csMkNBQWMsR0FBVyw2QkFBNkIsQ0FBQyIsInNvdXJjZXNDb250ZW50IjpbIi8vIGh0dHBzOi8vd3d3LnRlcnJhZm9ybS5pby9kb2NzL3Byb3ZpZGVycy9hd3NjYy9kL2R5bmFtb2RiX2dsb2JhbF90YWJsZS5odG1sXG4vLyBnZW5lcmF0ZWQgZnJvbSB0ZXJyYWZvcm0gcmVzb3VyY2Ugc2NoZW1hXG5cbmltcG9ydCB7IENvbnN0cnVjdCB9IGZyb20gJ2NvbnN0cnVjdHMnO1xuaW1wb3J0ICogYXMgY2RrdGYgZnJvbSAnY2RrdGYnO1xuXG4vLyBDb25maWd1cmF0aW9uXG5cbmV4cG9ydCBpbnRlcmZhY2UgRGF0YUF3c2NjRHluYW1vZGJHbG9iYWxUYWJsZUNvbmZpZyBleHRlbmRzIGNka3RmLlRlcnJhZm9ybU1ldGFBcmd1bWVudHMge1xuICAvKipcbiAgKiBVbmlxdWVseSBpZGVudGlmaWVzIHRoZSByZXNvdXJjZS5cbiAgKiBcbiAgKiBEb2NzIGF0IFRlcnJhZm9ybSBSZWdpc3RyeToge0BsaW5rIGh0dHBzOi8vd3d3LnRlcnJhZm9ybS5pby9kb2NzL3Byb3ZpZGVycy9hd3NjYy9kL2R5bmFtb2RiX2dsb2JhbF90YWJsZS5odG1sI2lkIERhdGFBd3NjY0R5bmFtb2RiR2xvYmFsVGFibGUjaWR9XG4gICovXG4gIHJlYWRvbmx5IGlkOiBzdHJpbmc7XG59XG5leHBvcnQgY2xhc3MgRGF0YUF3c2NjRHluYW1vZGJHbG9iYWxUYWJsZUF0dHJpYnV0ZURlZmluaXRpb25zIGV4dGVuZHMgY2RrdGYuQ29tcGxleENvbXB1dGVkTGlzdCB7XG5cbiAgLy8gYXR0cmlidXRlX25hbWUgLSBjb21wdXRlZDogdHJ1ZSwgb3B0aW9uYWw6IGZhbHNlLCByZXF1aXJlZDogZmFsc2VcbiAgcHVibGljIGdldCBhdHRyaWJ1dGVOYW1lKCkge1xuICAgIHJldHVybiB0aGlzLmdldFN0cmluZ0F0dHJpYnV0ZSgnYXR0cmlidXRlX25hbWUnKTtcbiAgfVxuXG4gIC8vIGF0dHJpYnV0ZV90eXBlIC0gY29tcHV0ZWQ6IHRydWUsIG9wdGlvbmFsOiBmYWxzZSwgcmVxdWlyZWQ6IGZhbHNlXG4gIHB1YmxpYyBnZXQgYXR0cmlidXRlVHlwZSgpIHtcbiAgICByZXR1cm4gdGhpcy5nZXRTdHJpbmdBdHRyaWJ1dGUoJ2F0dHJpYnV0ZV90eXBlJyk7XG4gIH1cbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGRhdGFBd3NjY0R5bmFtb2RiR2xvYmFsVGFibGVBdHRyaWJ1dGVEZWZpbml0aW9uc1RvVGVycmFmb3JtKHN0cnVjdD86IERhdGFBd3NjY0R5bmFtb2RiR2xvYmFsVGFibGVBdHRyaWJ1dGVEZWZpbml0aW9ucyk6IGFueSB7XG4gIGlmICghY2RrdGYuY2FuSW5zcGVjdChzdHJ1Y3QpKSB7IHJldHVybiBzdHJ1Y3Q7IH1cbiAgcmV0dXJuIHtcbiAgICBhdHRyaWJ1dGVfbmFtZTogY2RrdGYuc3RyaW5nVG9UZXJyYWZvcm0oc3RydWN0IS5hdHRyaWJ1dGVOYW1lKSxcbiAgICBhdHRyaWJ1dGVfdHlwZTogY2RrdGYuc3RyaW5nVG9UZXJyYWZvcm0oc3RydWN0IS5hdHRyaWJ1dGVUeXBlKSxcbiAgfVxufVxuXG5leHBvcnQgY2xhc3MgRGF0YUF3c2NjRHluYW1vZGJHbG9iYWxUYWJsZUdsb2JhbFNlY29uZGFyeUluZGV4ZXNLZXlTY2hlbWEgZXh0ZW5kcyBjZGt0Zi5Db21wbGV4Q29tcHV0ZWRMaXN0IHtcblxuICAvLyBhdHRyaWJ1dGVfbmFtZSAtIGNvbXB1dGVkOiB0cnVlLCBvcHRpb25hbDogZmFsc2UsIHJlcXVpcmVkOiBmYWxzZVxuICBwdWJsaWMgZ2V0IGF0dHJpYnV0ZU5hbWUoKSB7XG4gICAgcmV0dXJuIHRoaXMuZ2V0U3RyaW5nQXR0cmlidXRlKCdhdHRyaWJ1dGVfbmFtZScpO1xuICB9XG5cbiAgLy8ga2V5X3R5cGUgLSBjb21wdXRlZDogdHJ1ZSwgb3B0aW9uYWw6IGZhbHNlLCByZXF1aXJlZDogZmFsc2VcbiAgcHVibGljIGdldCBrZXlUeXBlKCkge1xuICAgIHJldHVybiB0aGlzLmdldFN0cmluZ0F0dHJpYnV0ZSgna2V5X3R5cGUnKTtcbiAgfVxufVxuXG5leHBvcnQgZnVuY3Rpb24gZGF0YUF3c2NjRHluYW1vZGJHbG9iYWxUYWJsZUdsb2JhbFNlY29uZGFyeUluZGV4ZXNLZXlTY2hlbWFUb1RlcnJhZm9ybShzdHJ1Y3Q/OiBEYXRhQXdzY2NEeW5hbW9kYkdsb2JhbFRhYmxlR2xvYmFsU2Vjb25kYXJ5SW5kZXhlc0tleVNjaGVtYSk6IGFueSB7XG4gIGlmICghY2RrdGYuY2FuSW5zcGVjdChzdHJ1Y3QpKSB7IHJldHVybiBzdHJ1Y3Q7IH1cbiAgcmV0dXJuIHtcbiAgICBhdHRyaWJ1dGVfbmFtZTogY2RrdGYuc3RyaW5nVG9UZXJyYWZvcm0oc3RydWN0IS5hdHRyaWJ1dGVOYW1lKSxcbiAgICBrZXlfdHlwZTogY2RrdGYuc3RyaW5nVG9UZXJyYWZvcm0oc3RydWN0IS5rZXlUeXBlKSxcbiAgfVxufVxuXG5leHBvcnQgY2xhc3MgRGF0YUF3c2NjRHluYW1vZGJHbG9iYWxUYWJsZUdsb2JhbFNlY29uZGFyeUluZGV4ZXNQcm9qZWN0aW9uIGV4dGVuZHMgY2RrdGYuQ29tcGxleENvbXB1dGVkTGlzdCB7XG5cbiAgLy8gbm9uX2tleV9hdHRyaWJ1dGVzIC0gY29tcHV0ZWQ6IHRydWUsIG9wdGlvbmFsOiBmYWxzZSwgcmVxdWlyZWQ6IGZhbHNlXG4gIHB1YmxpYyBnZXQgbm9uS2V5QXR0cmlidXRlcygpIHtcbiAgICByZXR1cm4gdGhpcy5nZXRMaXN0QXR0cmlidXRlKCdub25fa2V5X2F0dHJpYnV0ZXMnKTtcbiAgfVxuXG4gIC8vIHByb2plY3Rpb25fdHlwZSAtIGNvbXB1dGVkOiB0cnVlLCBvcHRpb25hbDogZmFsc2UsIHJlcXVpcmVkOiBmYWxzZVxuICBwdWJsaWMgZ2V0IHByb2plY3Rpb25UeXBlKCkge1xuICAgIHJldHVybiB0aGlzLmdldFN0cmluZ0F0dHJpYnV0ZSgncHJvamVjdGlvbl90eXBlJyk7XG4gIH1cbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGRhdGFBd3NjY0R5bmFtb2RiR2xvYmFsVGFibGVHbG9iYWxTZWNvbmRhcnlJbmRleGVzUHJvamVjdGlvblRvVGVycmFmb3JtKHN0cnVjdD86IERhdGFBd3NjY0R5bmFtb2RiR2xvYmFsVGFibGVHbG9iYWxTZWNvbmRhcnlJbmRleGVzUHJvamVjdGlvbik6IGFueSB7XG4gIGlmICghY2RrdGYuY2FuSW5zcGVjdChzdHJ1Y3QpKSB7IHJldHVybiBzdHJ1Y3Q7IH1cbiAgcmV0dXJuIHtcbiAgICBub25fa2V5X2F0dHJpYnV0ZXM6IGNka3RmLmxpc3RNYXBwZXIoY2RrdGYuc3RyaW5nVG9UZXJyYWZvcm0pKHN0cnVjdCEubm9uS2V5QXR0cmlidXRlcyksXG4gICAgcHJvamVjdGlvbl90eXBlOiBjZGt0Zi5zdHJpbmdUb1RlcnJhZm9ybShzdHJ1Y3QhLnByb2plY3Rpb25UeXBlKSxcbiAgfVxufVxuXG5leHBvcnQgY2xhc3MgRGF0YUF3c2NjRHluYW1vZGJHbG9iYWxUYWJsZUdsb2JhbFNlY29uZGFyeUluZGV4ZXNXcml0ZVByb3Zpc2lvbmVkVGhyb3VnaHB1dFNldHRpbmdzV3JpdGVDYXBhY2l0eUF1dG9TY2FsaW5nU2V0dGluZ3NUYXJnZXRUcmFja2luZ1NjYWxpbmdQb2xpY3lDb25maWd1cmF0aW9uIGV4dGVuZHMgY2RrdGYuQ29tcGxleENvbXB1dGVkTGlzdCB7XG5cbiAgLy8gZGlzYWJsZV9zY2FsZV9pbiAtIGNvbXB1dGVkOiB0cnVlLCBvcHRpb25hbDogZmFsc2UsIHJlcXVpcmVkOiBmYWxzZVxuICBwdWJsaWMgZ2V0IGRpc2FibGVTY2FsZUluKCkge1xuICAgIHJldHVybiB0aGlzLmdldEJvb2xlYW5BdHRyaWJ1dGUoJ2Rpc2FibGVfc2NhbGVfaW4nKTtcbiAgfVxuXG4gIC8vIHNjYWxlX2luX2Nvb2xkb3duIC0gY29tcHV0ZWQ6IHRydWUsIG9wdGlvbmFsOiBmYWxzZSwgcmVxdWlyZWQ6IGZhbHNlXG4gIHB1YmxpYyBnZXQgc2NhbGVJbkNvb2xkb3duKCkge1xuICAgIHJldHVybiB0aGlzLmdldE51bWJlckF0dHJpYnV0ZSgnc2NhbGVfaW5fY29vbGRvd24nKTtcbiAgfVxuXG4gIC8vIHNjYWxlX291dF9jb29sZG93biAtIGNvbXB1dGVkOiB0cnVlLCBvcHRpb25hbDogZmFsc2UsIHJlcXVpcmVkOiBmYWxzZVxuICBwdWJsaWMgZ2V0IHNjYWxlT3V0Q29vbGRvd24oKSB7XG4gICAgcmV0dXJuIHRoaXMuZ2V0TnVtYmVyQXR0cmlidXRlKCdzY2FsZV9vdXRfY29vbGRvd24nKTtcbiAgfVxuXG4gIC8vIHRhcmdldF92YWx1ZSAtIGNvbXB1dGVkOiB0cnVlLCBvcHRpb25hbDogZmFsc2UsIHJlcXVpcmVkOiBmYWxzZVxuICBwdWJsaWMgZ2V0IHRhcmdldFZhbHVlKCkge1xuICAgIHJldHVybiB0aGlzLmdldE51bWJlckF0dHJpYnV0ZSgndGFyZ2V0X3ZhbHVlJyk7XG4gIH1cbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGRhdGFBd3NjY0R5bmFtb2RiR2xvYmFsVGFibGVHbG9iYWxTZWNvbmRhcnlJbmRleGVzV3JpdGVQcm92aXNpb25lZFRocm91Z2hwdXRTZXR0aW5nc1dyaXRlQ2FwYWNpdHlBdXRvU2NhbGluZ1NldHRpbmdzVGFyZ2V0VHJhY2tpbmdTY2FsaW5nUG9saWN5Q29uZmlndXJhdGlvblRvVGVycmFmb3JtKHN0cnVjdD86IERhdGFBd3NjY0R5bmFtb2RiR2xvYmFsVGFibGVHbG9iYWxTZWNvbmRhcnlJbmRleGVzV3JpdGVQcm92aXNpb25lZFRocm91Z2hwdXRTZXR0aW5nc1dyaXRlQ2FwYWNpdHlBdXRvU2NhbGluZ1NldHRpbmdzVGFyZ2V0VHJhY2tpbmdTY2FsaW5nUG9saWN5Q29uZmlndXJhdGlvbik6IGFueSB7XG4gIGlmICghY2RrdGYuY2FuSW5zcGVjdChzdHJ1Y3QpKSB7IHJldHVybiBzdHJ1Y3Q7IH1cbiAgcmV0dXJuIHtcbiAgICBkaXNhYmxlX3NjYWxlX2luOiBjZGt0Zi5ib29sZWFuVG9UZXJyYWZvcm0oc3RydWN0IS5kaXNhYmxlU2NhbGVJbiksXG4gICAgc2NhbGVfaW5fY29vbGRvd246IGNka3RmLm51bWJlclRvVGVycmFmb3JtKHN0cnVjdCEuc2NhbGVJbkNvb2xkb3duKSxcbiAgICBzY2FsZV9vdXRfY29vbGRvd246IGNka3RmLm51bWJlclRvVGVycmFmb3JtKHN0cnVjdCEuc2NhbGVPdXRDb29sZG93biksXG4gICAgdGFyZ2V0X3ZhbHVlOiBjZGt0Zi5udW1iZXJUb1RlcnJhZm9ybShzdHJ1Y3QhLnRhcmdldFZhbHVlKSxcbiAgfVxufVxuXG5leHBvcnQgY2xhc3MgRGF0YUF3c2NjRHluYW1vZGJHbG9iYWxUYWJsZUdsb2JhbFNlY29uZGFyeUluZGV4ZXNXcml0ZVByb3Zpc2lvbmVkVGhyb3VnaHB1dFNldHRpbmdzV3JpdGVDYXBhY2l0eUF1dG9TY2FsaW5nU2V0dGluZ3MgZXh0ZW5kcyBjZGt0Zi5Db21wbGV4Q29tcHV0ZWRMaXN0IHtcblxuICAvLyBtYXhfY2FwYWNpdHkgLSBjb21wdXRlZDogdHJ1ZSwgb3B0aW9uYWw6IGZhbHNlLCByZXF1aXJlZDogZmFsc2VcbiAgcHVibGljIGdldCBtYXhDYXBhY2l0eSgpIHtcbiAgICByZXR1cm4gdGhpcy5nZXROdW1iZXJBdHRyaWJ1dGUoJ21heF9jYXBhY2l0eScpO1xuICB9XG5cbiAgLy8gbWluX2NhcGFjaXR5IC0gY29tcHV0ZWQ6IHRydWUsIG9wdGlvbmFsOiBmYWxzZSwgcmVxdWlyZWQ6IGZhbHNlXG4gIHB1YmxpYyBnZXQgbWluQ2FwYWNpdHkoKSB7XG4gICAgcmV0dXJuIHRoaXMuZ2V0TnVtYmVyQXR0cmlidXRlKCdtaW5fY2FwYWNpdHknKTtcbiAgfVxuXG4gIC8vIHNlZWRfY2FwYWNpdHkgLSBjb21wdXRlZDogdHJ1ZSwgb3B0aW9uYWw6IGZhbHNlLCByZXF1aXJlZDogZmFsc2VcbiAgcHVibGljIGdldCBzZWVkQ2FwYWNpdHkoKSB7XG4gICAgcmV0dXJuIHRoaXMuZ2V0TnVtYmVyQXR0cmlidXRlKCdzZWVkX2NhcGFjaXR5Jyk7XG4gIH1cblxuICAvLyB0YXJnZXRfdHJhY2tpbmdfc2NhbGluZ19wb2xpY3lfY29uZmlndXJhdGlvbiAtIGNvbXB1dGVkOiB0cnVlLCBvcHRpb25hbDogZmFsc2UsIHJlcXVpcmVkOiBmYWxzZVxuICBwdWJsaWMgZ2V0IHRhcmdldFRyYWNraW5nU2NhbGluZ1BvbGljeUNvbmZpZ3VyYXRpb24oKSB7XG4gICAgcmV0dXJuIHRoaXMuaW50ZXJwb2xhdGlvbkZvckF0dHJpYnV0ZSgndGFyZ2V0X3RyYWNraW5nX3NjYWxpbmdfcG9saWN5X2NvbmZpZ3VyYXRpb24nKSBhcyBhbnk7XG4gIH1cbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGRhdGFBd3NjY0R5bmFtb2RiR2xvYmFsVGFibGVHbG9iYWxTZWNvbmRhcnlJbmRleGVzV3JpdGVQcm92aXNpb25lZFRocm91Z2hwdXRTZXR0aW5nc1dyaXRlQ2FwYWNpdHlBdXRvU2NhbGluZ1NldHRpbmdzVG9UZXJyYWZvcm0oc3RydWN0PzogRGF0YUF3c2NjRHluYW1vZGJHbG9iYWxUYWJsZUdsb2JhbFNlY29uZGFyeUluZGV4ZXNXcml0ZVByb3Zpc2lvbmVkVGhyb3VnaHB1dFNldHRpbmdzV3JpdGVDYXBhY2l0eUF1dG9TY2FsaW5nU2V0dGluZ3MpOiBhbnkge1xuICBpZiAoIWNka3RmLmNhbkluc3BlY3Qoc3RydWN0KSkgeyByZXR1cm4gc3RydWN0OyB9XG4gIHJldHVybiB7XG4gICAgbWF4X2NhcGFjaXR5OiBjZGt0Zi5udW1iZXJUb1RlcnJhZm9ybShzdHJ1Y3QhLm1heENhcGFjaXR5KSxcbiAgICBtaW5fY2FwYWNpdHk6IGNka3RmLm51bWJlclRvVGVycmFmb3JtKHN0cnVjdCEubWluQ2FwYWNpdHkpLFxuICAgIHNlZWRfY2FwYWNpdHk6IGNka3RmLm51bWJlclRvVGVycmFmb3JtKHN0cnVjdCEuc2VlZENhcGFjaXR5KSxcbiAgICB0YXJnZXRfdHJhY2tpbmdfc2NhbGluZ19wb2xpY3lfY29uZmlndXJhdGlvbjogZGF0YUF3c2NjRHluYW1vZGJHbG9iYWxUYWJsZUdsb2JhbFNlY29uZGFyeUluZGV4ZXNXcml0ZVByb3Zpc2lvbmVkVGhyb3VnaHB1dFNldHRpbmdzV3JpdGVDYXBhY2l0eUF1dG9TY2FsaW5nU2V0dGluZ3NUYXJnZXRUcmFja2luZ1NjYWxpbmdQb2xpY3lDb25maWd1cmF0aW9uVG9UZXJyYWZvcm0oc3RydWN0IS50YXJnZXRUcmFja2luZ1NjYWxpbmdQb2xpY3lDb25maWd1cmF0aW9uKSxcbiAgfVxufVxuXG5leHBvcnQgY2xhc3MgRGF0YUF3c2NjRHluYW1vZGJHbG9iYWxUYWJsZUdsb2JhbFNlY29uZGFyeUluZGV4ZXNXcml0ZVByb3Zpc2lvbmVkVGhyb3VnaHB1dFNldHRpbmdzIGV4dGVuZHMgY2RrdGYuQ29tcGxleENvbXB1dGVkTGlzdCB7XG5cbiAgLy8gd3JpdGVfY2FwYWNpdHlfYXV0b19zY2FsaW5nX3NldHRpbmdzIC0gY29tcHV0ZWQ6IHRydWUsIG9wdGlvbmFsOiBmYWxzZSwgcmVxdWlyZWQ6IGZhbHNlXG4gIHB1YmxpYyBnZXQgd3JpdGVDYXBhY2l0eUF1dG9TY2FsaW5nU2V0dGluZ3MoKSB7XG4gICAgcmV0dXJuIHRoaXMuaW50ZXJwb2xhdGlvbkZvckF0dHJpYnV0ZSgnd3JpdGVfY2FwYWNpdHlfYXV0b19zY2FsaW5nX3NldHRpbmdzJykgYXMgYW55O1xuICB9XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBkYXRhQXdzY2NEeW5hbW9kYkdsb2JhbFRhYmxlR2xvYmFsU2Vjb25kYXJ5SW5kZXhlc1dyaXRlUHJvdmlzaW9uZWRUaHJvdWdocHV0U2V0dGluZ3NUb1RlcnJhZm9ybShzdHJ1Y3Q/OiBEYXRhQXdzY2NEeW5hbW9kYkdsb2JhbFRhYmxlR2xvYmFsU2Vjb25kYXJ5SW5kZXhlc1dyaXRlUHJvdmlzaW9uZWRUaHJvdWdocHV0U2V0dGluZ3MpOiBhbnkge1xuICBpZiAoIWNka3RmLmNhbkluc3BlY3Qoc3RydWN0KSkgeyByZXR1cm4gc3RydWN0OyB9XG4gIHJldHVybiB7XG4gICAgd3JpdGVfY2FwYWNpdHlfYXV0b19zY2FsaW5nX3NldHRpbmdzOiBkYXRhQXdzY2NEeW5hbW9kYkdsb2JhbFRhYmxlR2xvYmFsU2Vjb25kYXJ5SW5kZXhlc1dyaXRlUHJvdmlzaW9uZWRUaHJvdWdocHV0U2V0dGluZ3NXcml0ZUNhcGFjaXR5QXV0b1NjYWxpbmdTZXR0aW5nc1RvVGVycmFmb3JtKHN0cnVjdCEud3JpdGVDYXBhY2l0eUF1dG9TY2FsaW5nU2V0dGluZ3MpLFxuICB9XG59XG5cbmV4cG9ydCBjbGFzcyBEYXRhQXdzY2NEeW5hbW9kYkdsb2JhbFRhYmxlR2xvYmFsU2Vjb25kYXJ5SW5kZXhlcyBleHRlbmRzIGNka3RmLkNvbXBsZXhDb21wdXRlZExpc3Qge1xuXG4gIC8vIGluZGV4X25hbWUgLSBjb21wdXRlZDogdHJ1ZSwgb3B0aW9uYWw6IGZhbHNlLCByZXF1aXJlZDogZmFsc2VcbiAgcHVibGljIGdldCBpbmRleE5hbWUoKSB7XG4gICAgcmV0dXJuIHRoaXMuZ2V0U3RyaW5nQXR0cmlidXRlKCdpbmRleF9uYW1lJyk7XG4gIH1cblxuICAvLyBrZXlfc2NoZW1hIC0gY29tcHV0ZWQ6IHRydWUsIG9wdGlvbmFsOiBmYWxzZSwgcmVxdWlyZWQ6IGZhbHNlXG4gIHB1YmxpYyBnZXQga2V5U2NoZW1hKCkge1xuICAgIHJldHVybiB0aGlzLmludGVycG9sYXRpb25Gb3JBdHRyaWJ1dGUoJ2tleV9zY2hlbWEnKSBhcyBhbnk7XG4gIH1cblxuICAvLyBwcm9qZWN0aW9uIC0gY29tcHV0ZWQ6IHRydWUsIG9wdGlvbmFsOiBmYWxzZSwgcmVxdWlyZWQ6IGZhbHNlXG4gIHB1YmxpYyBnZXQgcHJvamVjdGlvbigpIHtcbiAgICByZXR1cm4gdGhpcy5pbnRlcnBvbGF0aW9uRm9yQXR0cmlidXRlKCdwcm9qZWN0aW9uJykgYXMgYW55O1xuICB9XG5cbiAgLy8gd3JpdGVfcHJvdmlzaW9uZWRfdGhyb3VnaHB1dF9zZXR0aW5ncyAtIGNvbXB1dGVkOiB0cnVlLCBvcHRpb25hbDogZmFsc2UsIHJlcXVpcmVkOiBmYWxzZVxuICBwdWJsaWMgZ2V0IHdyaXRlUHJvdmlzaW9uZWRUaHJvdWdocHV0U2V0dGluZ3MoKSB7XG4gICAgcmV0dXJuIHRoaXMuaW50ZXJwb2xhdGlvbkZvckF0dHJpYnV0ZSgnd3JpdGVfcHJvdmlzaW9uZWRfdGhyb3VnaHB1dF9zZXR0aW5ncycpIGFzIGFueTtcbiAgfVxufVxuXG5leHBvcnQgZnVuY3Rpb24gZGF0YUF3c2NjRHluYW1vZGJHbG9iYWxUYWJsZUdsb2JhbFNlY29uZGFyeUluZGV4ZXNUb1RlcnJhZm9ybShzdHJ1Y3Q/OiBEYXRhQXdzY2NEeW5hbW9kYkdsb2JhbFRhYmxlR2xvYmFsU2Vjb25kYXJ5SW5kZXhlcyk6IGFueSB7XG4gIGlmICghY2RrdGYuY2FuSW5zcGVjdChzdHJ1Y3QpKSB7IHJldHVybiBzdHJ1Y3Q7IH1cbiAgcmV0dXJuIHtcbiAgICBpbmRleF9uYW1lOiBjZGt0Zi5zdHJpbmdUb1RlcnJhZm9ybShzdHJ1Y3QhLmluZGV4TmFtZSksXG4gICAga2V5X3NjaGVtYTogY2RrdGYubGlzdE1hcHBlcihkYXRhQXdzY2NEeW5hbW9kYkdsb2JhbFRhYmxlR2xvYmFsU2Vjb25kYXJ5SW5kZXhlc0tleVNjaGVtYVRvVGVycmFmb3JtKShzdHJ1Y3QhLmtleVNjaGVtYSksXG4gICAgcHJvamVjdGlvbjogZGF0YUF3c2NjRHluYW1vZGJHbG9iYWxUYWJsZUdsb2JhbFNlY29uZGFyeUluZGV4ZXNQcm9qZWN0aW9uVG9UZXJyYWZvcm0oc3RydWN0IS5wcm9qZWN0aW9uKSxcbiAgICB3cml0ZV9wcm92aXNpb25lZF90aHJvdWdocHV0X3NldHRpbmdzOiBkYXRhQXdzY2NEeW5hbW9kYkdsb2JhbFRhYmxlR2xvYmFsU2Vjb25kYXJ5SW5kZXhlc1dyaXRlUHJvdmlzaW9uZWRUaHJvdWdocHV0U2V0dGluZ3NUb1RlcnJhZm9ybShzdHJ1Y3QhLndyaXRlUHJvdmlzaW9uZWRUaHJvdWdocHV0U2V0dGluZ3MpLFxuICB9XG59XG5cbmV4cG9ydCBjbGFzcyBEYXRhQXdzY2NEeW5hbW9kYkdsb2JhbFRhYmxlS2V5U2NoZW1hIGV4dGVuZHMgY2RrdGYuQ29tcGxleENvbXB1dGVkTGlzdCB7XG5cbiAgLy8gYXR0cmlidXRlX25hbWUgLSBjb21wdXRlZDogdHJ1ZSwgb3B0aW9uYWw6IGZhbHNlLCByZXF1aXJlZDogZmFsc2VcbiAgcHVibGljIGdldCBhdHRyaWJ1dGVOYW1lKCkge1xuICAgIHJldHVybiB0aGlzLmdldFN0cmluZ0F0dHJpYnV0ZSgnYXR0cmlidXRlX25hbWUnKTtcbiAgfVxuXG4gIC8vIGtleV90eXBlIC0gY29tcHV0ZWQ6IHRydWUsIG9wdGlvbmFsOiBmYWxzZSwgcmVxdWlyZWQ6IGZhbHNlXG4gIHB1YmxpYyBnZXQga2V5VHlwZSgpIHtcbiAgICByZXR1cm4gdGhpcy5nZXRTdHJpbmdBdHRyaWJ1dGUoJ2tleV90eXBlJyk7XG4gIH1cbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGRhdGFBd3NjY0R5bmFtb2RiR2xvYmFsVGFibGVLZXlTY2hlbWFUb1RlcnJhZm9ybShzdHJ1Y3Q/OiBEYXRhQXdzY2NEeW5hbW9kYkdsb2JhbFRhYmxlS2V5U2NoZW1hKTogYW55IHtcbiAgaWYgKCFjZGt0Zi5jYW5JbnNwZWN0KHN0cnVjdCkpIHsgcmV0dXJuIHN0cnVjdDsgfVxuICByZXR1cm4ge1xuICAgIGF0dHJpYnV0ZV9uYW1lOiBjZGt0Zi5zdHJpbmdUb1RlcnJhZm9ybShzdHJ1Y3QhLmF0dHJpYnV0ZU5hbWUpLFxuICAgIGtleV90eXBlOiBjZGt0Zi5zdHJpbmdUb1RlcnJhZm9ybShzdHJ1Y3QhLmtleVR5cGUpLFxuICB9XG59XG5cbmV4cG9ydCBjbGFzcyBEYXRhQXdzY2NEeW5hbW9kYkdsb2JhbFRhYmxlTG9jYWxTZWNvbmRhcnlJbmRleGVzS2V5U2NoZW1hIGV4dGVuZHMgY2RrdGYuQ29tcGxleENvbXB1dGVkTGlzdCB7XG5cbiAgLy8gYXR0cmlidXRlX25hbWUgLSBjb21wdXRlZDogdHJ1ZSwgb3B0aW9uYWw6IGZhbHNlLCByZXF1aXJlZDogZmFsc2VcbiAgcHVibGljIGdldCBhdHRyaWJ1dGVOYW1lKCkge1xuICAgIHJldHVybiB0aGlzLmdldFN0cmluZ0F0dHJpYnV0ZSgnYXR0cmlidXRlX25hbWUnKTtcbiAgfVxuXG4gIC8vIGtleV90eXBlIC0gY29tcHV0ZWQ6IHRydWUsIG9wdGlvbmFsOiBmYWxzZSwgcmVxdWlyZWQ6IGZhbHNlXG4gIHB1YmxpYyBnZXQga2V5VHlwZSgpIHtcbiAgICByZXR1cm4gdGhpcy5nZXRTdHJpbmdBdHRyaWJ1dGUoJ2tleV90eXBlJyk7XG4gIH1cbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGRhdGFBd3NjY0R5bmFtb2RiR2xvYmFsVGFibGVMb2NhbFNlY29uZGFyeUluZGV4ZXNLZXlTY2hlbWFUb1RlcnJhZm9ybShzdHJ1Y3Q/OiBEYXRhQXdzY2NEeW5hbW9kYkdsb2JhbFRhYmxlTG9jYWxTZWNvbmRhcnlJbmRleGVzS2V5U2NoZW1hKTogYW55IHtcbiAgaWYgKCFjZGt0Zi5jYW5JbnNwZWN0KHN0cnVjdCkpIHsgcmV0dXJuIHN0cnVjdDsgfVxuICByZXR1cm4ge1xuICAgIGF0dHJpYnV0ZV9uYW1lOiBjZGt0Zi5zdHJpbmdUb1RlcnJhZm9ybShzdHJ1Y3QhLmF0dHJpYnV0ZU5hbWUpLFxuICAgIGtleV90eXBlOiBjZGt0Zi5zdHJpbmdUb1RlcnJhZm9ybShzdHJ1Y3QhLmtleVR5cGUpLFxuICB9XG59XG5cbmV4cG9ydCBjbGFzcyBEYXRhQXdzY2NEeW5hbW9kYkdsb2JhbFRhYmxlTG9jYWxTZWNvbmRhcnlJbmRleGVzUHJvamVjdGlvbiBleHRlbmRzIGNka3RmLkNvbXBsZXhDb21wdXRlZExpc3Qge1xuXG4gIC8vIG5vbl9rZXlfYXR0cmlidXRlcyAtIGNvbXB1dGVkOiB0cnVlLCBvcHRpb25hbDogZmFsc2UsIHJlcXVpcmVkOiBmYWxzZVxuICBwdWJsaWMgZ2V0IG5vbktleUF0dHJpYnV0ZXMoKSB7XG4gICAgcmV0dXJuIHRoaXMuZ2V0TGlzdEF0dHJpYnV0ZSgnbm9uX2tleV9hdHRyaWJ1dGVzJyk7XG4gIH1cblxuICAvLyBwcm9qZWN0aW9uX3R5cGUgLSBjb21wdXRlZDogdHJ1ZSwgb3B0aW9uYWw6IGZhbHNlLCByZXF1aXJlZDogZmFsc2VcbiAgcHVibGljIGdldCBwcm9qZWN0aW9uVHlwZSgpIHtcbiAgICByZXR1cm4gdGhpcy5nZXRTdHJpbmdBdHRyaWJ1dGUoJ3Byb2plY3Rpb25fdHlwZScpO1xuICB9XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBkYXRhQXdzY2NEeW5hbW9kYkdsb2JhbFRhYmxlTG9jYWxTZWNvbmRhcnlJbmRleGVzUHJvamVjdGlvblRvVGVycmFmb3JtKHN0cnVjdD86IERhdGFBd3NjY0R5bmFtb2RiR2xvYmFsVGFibGVMb2NhbFNlY29uZGFyeUluZGV4ZXNQcm9qZWN0aW9uKTogYW55IHtcbiAgaWYgKCFjZGt0Zi5jYW5JbnNwZWN0KHN0cnVjdCkpIHsgcmV0dXJuIHN0cnVjdDsgfVxuICByZXR1cm4ge1xuICAgIG5vbl9rZXlfYXR0cmlidXRlczogY2RrdGYubGlzdE1hcHBlcihjZGt0Zi5zdHJpbmdUb1RlcnJhZm9ybSkoc3RydWN0IS5ub25LZXlBdHRyaWJ1dGVzKSxcbiAgICBwcm9qZWN0aW9uX3R5cGU6IGNka3RmLnN0cmluZ1RvVGVycmFmb3JtKHN0cnVjdCEucHJvamVjdGlvblR5cGUpLFxuICB9XG59XG5cbmV4cG9ydCBjbGFzcyBEYXRhQXdzY2NEeW5hbW9kYkdsb2JhbFRhYmxlTG9jYWxTZWNvbmRhcnlJbmRleGVzIGV4dGVuZHMgY2RrdGYuQ29tcGxleENvbXB1dGVkTGlzdCB7XG5cbiAgLy8gaW5kZXhfbmFtZSAtIGNvbXB1dGVkOiB0cnVlLCBvcHRpb25hbDogZmFsc2UsIHJlcXVpcmVkOiBmYWxzZVxuICBwdWJsaWMgZ2V0IGluZGV4TmFtZSgpIHtcbiAgICByZXR1cm4gdGhpcy5nZXRTdHJpbmdBdHRyaWJ1dGUoJ2luZGV4X25hbWUnKTtcbiAgfVxuXG4gIC8vIGtleV9zY2hlbWEgLSBjb21wdXRlZDogdHJ1ZSwgb3B0aW9uYWw6IGZhbHNlLCByZXF1aXJlZDogZmFsc2VcbiAgcHVibGljIGdldCBrZXlTY2hlbWEoKSB7XG4gICAgcmV0dXJuIHRoaXMuaW50ZXJwb2xhdGlvbkZvckF0dHJpYnV0ZSgna2V5X3NjaGVtYScpIGFzIGFueTtcbiAgfVxuXG4gIC8vIHByb2plY3Rpb24gLSBjb21wdXRlZDogdHJ1ZSwgb3B0aW9uYWw6IGZhbHNlLCByZXF1aXJlZDogZmFsc2VcbiAgcHVibGljIGdldCBwcm9qZWN0aW9uKCkge1xuICAgIHJldHVybiB0aGlzLmludGVycG9sYXRpb25Gb3JBdHRyaWJ1dGUoJ3Byb2plY3Rpb24nKSBhcyBhbnk7XG4gIH1cbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGRhdGFBd3NjY0R5bmFtb2RiR2xvYmFsVGFibGVMb2NhbFNlY29uZGFyeUluZGV4ZXNUb1RlcnJhZm9ybShzdHJ1Y3Q/OiBEYXRhQXdzY2NEeW5hbW9kYkdsb2JhbFRhYmxlTG9jYWxTZWNvbmRhcnlJbmRleGVzKTogYW55IHtcbiAgaWYgKCFjZGt0Zi5jYW5JbnNwZWN0KHN0cnVjdCkpIHsgcmV0dXJuIHN0cnVjdDsgfVxuICByZXR1cm4ge1xuICAgIGluZGV4X25hbWU6IGNka3RmLnN0cmluZ1RvVGVycmFmb3JtKHN0cnVjdCEuaW5kZXhOYW1lKSxcbiAgICBrZXlfc2NoZW1hOiBjZGt0Zi5saXN0TWFwcGVyKGRhdGFBd3NjY0R5bmFtb2RiR2xvYmFsVGFibGVMb2NhbFNlY29uZGFyeUluZGV4ZXNLZXlTY2hlbWFUb1RlcnJhZm9ybSkoc3RydWN0IS5rZXlTY2hlbWEpLFxuICAgIHByb2plY3Rpb246IGRhdGFBd3NjY0R5bmFtb2RiR2xvYmFsVGFibGVMb2NhbFNlY29uZGFyeUluZGV4ZXNQcm9qZWN0aW9uVG9UZXJyYWZvcm0oc3RydWN0IS5wcm9qZWN0aW9uKSxcbiAgfVxufVxuXG5leHBvcnQgY2xhc3MgRGF0YUF3c2NjRHluYW1vZGJHbG9iYWxUYWJsZVJlcGxpY2FzQ29udHJpYnV0b3JJbnNpZ2h0c1NwZWNpZmljYXRpb24gZXh0ZW5kcyBjZGt0Zi5Db21wbGV4Q29tcHV0ZWRMaXN0IHtcblxuICAvLyBlbmFibGVkIC0gY29tcHV0ZWQ6IHRydWUsIG9wdGlvbmFsOiBmYWxzZSwgcmVxdWlyZWQ6IGZhbHNlXG4gIHB1YmxpYyBnZXQgZW5hYmxlZCgpIHtcbiAgICByZXR1cm4gdGhpcy5nZXRCb29sZWFuQXR0cmlidXRlKCdlbmFibGVkJyk7XG4gIH1cbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGRhdGFBd3NjY0R5bmFtb2RiR2xvYmFsVGFibGVSZXBsaWNhc0NvbnRyaWJ1dG9ySW5zaWdodHNTcGVjaWZpY2F0aW9uVG9UZXJyYWZvcm0oc3RydWN0PzogRGF0YUF3c2NjRHluYW1vZGJHbG9iYWxUYWJsZVJlcGxpY2FzQ29udHJpYnV0b3JJbnNpZ2h0c1NwZWNpZmljYXRpb24pOiBhbnkge1xuICBpZiAoIWNka3RmLmNhbkluc3BlY3Qoc3RydWN0KSkgeyByZXR1cm4gc3RydWN0OyB9XG4gIHJldHVybiB7XG4gICAgZW5hYmxlZDogY2RrdGYuYm9vbGVhblRvVGVycmFmb3JtKHN0cnVjdCEuZW5hYmxlZCksXG4gIH1cbn1cblxuZXhwb3J0IGNsYXNzIERhdGFBd3NjY0R5bmFtb2RiR2xvYmFsVGFibGVSZXBsaWNhc0dsb2JhbFNlY29uZGFyeUluZGV4ZXNDb250cmlidXRvckluc2lnaHRzU3BlY2lmaWNhdGlvbiBleHRlbmRzIGNka3RmLkNvbXBsZXhDb21wdXRlZExpc3Qge1xuXG4gIC8vIGVuYWJsZWQgLSBjb21wdXRlZDogdHJ1ZSwgb3B0aW9uYWw6IGZhbHNlLCByZXF1aXJlZDogZmFsc2VcbiAgcHVibGljIGdldCBlbmFibGVkKCkge1xuICAgIHJldHVybiB0aGlzLmdldEJvb2xlYW5BdHRyaWJ1dGUoJ2VuYWJsZWQnKTtcbiAgfVxufVxuXG5leHBvcnQgZnVuY3Rpb24gZGF0YUF3c2NjRHluYW1vZGJHbG9iYWxUYWJsZVJlcGxpY2FzR2xvYmFsU2Vjb25kYXJ5SW5kZXhlc0NvbnRyaWJ1dG9ySW5zaWdodHNTcGVjaWZpY2F0aW9uVG9UZXJyYWZvcm0oc3RydWN0PzogRGF0YUF3c2NjRHluYW1vZGJHbG9iYWxUYWJsZVJlcGxpY2FzR2xvYmFsU2Vjb25kYXJ5SW5kZXhlc0NvbnRyaWJ1dG9ySW5zaWdodHNTcGVjaWZpY2F0aW9uKTogYW55IHtcbiAgaWYgKCFjZGt0Zi5jYW5JbnNwZWN0KHN0cnVjdCkpIHsgcmV0dXJuIHN0cnVjdDsgfVxuICByZXR1cm4ge1xuICAgIGVuYWJsZWQ6IGNka3RmLmJvb2xlYW5Ub1RlcnJhZm9ybShzdHJ1Y3QhLmVuYWJsZWQpLFxuICB9XG59XG5cbmV4cG9ydCBjbGFzcyBEYXRhQXdzY2NEeW5hbW9kYkdsb2JhbFRhYmxlUmVwbGljYXNHbG9iYWxTZWNvbmRhcnlJbmRleGVzUmVhZFByb3Zpc2lvbmVkVGhyb3VnaHB1dFNldHRpbmdzUmVhZENhcGFjaXR5QXV0b1NjYWxpbmdTZXR0aW5nc1RhcmdldFRyYWNraW5nU2NhbGluZ1BvbGljeUNvbmZpZ3VyYXRpb24gZXh0ZW5kcyBjZGt0Zi5Db21wbGV4Q29tcHV0ZWRMaXN0IHtcblxuICAvLyBkaXNhYmxlX3NjYWxlX2luIC0gY29tcHV0ZWQ6IHRydWUsIG9wdGlvbmFsOiBmYWxzZSwgcmVxdWlyZWQ6IGZhbHNlXG4gIHB1YmxpYyBnZXQgZGlzYWJsZVNjYWxlSW4oKSB7XG4gICAgcmV0dXJuIHRoaXMuZ2V0Qm9vbGVhbkF0dHJpYnV0ZSgnZGlzYWJsZV9zY2FsZV9pbicpO1xuICB9XG5cbiAgLy8gc2NhbGVfaW5fY29vbGRvd24gLSBjb21wdXRlZDogdHJ1ZSwgb3B0aW9uYWw6IGZhbHNlLCByZXF1aXJlZDogZmFsc2VcbiAgcHVibGljIGdldCBzY2FsZUluQ29vbGRvd24oKSB7XG4gICAgcmV0dXJuIHRoaXMuZ2V0TnVtYmVyQXR0cmlidXRlKCdzY2FsZV9pbl9jb29sZG93bicpO1xuICB9XG5cbiAgLy8gc2NhbGVfb3V0X2Nvb2xkb3duIC0gY29tcHV0ZWQ6IHRydWUsIG9wdGlvbmFsOiBmYWxzZSwgcmVxdWlyZWQ6IGZhbHNlXG4gIHB1YmxpYyBnZXQgc2NhbGVPdXRDb29sZG93bigpIHtcbiAgICByZXR1cm4gdGhpcy5nZXROdW1iZXJBdHRyaWJ1dGUoJ3NjYWxlX291dF9jb29sZG93bicpO1xuICB9XG5cbiAgLy8gdGFyZ2V0X3ZhbHVlIC0gY29tcHV0ZWQ6IHRydWUsIG9wdGlvbmFsOiBmYWxzZSwgcmVxdWlyZWQ6IGZhbHNlXG4gIHB1YmxpYyBnZXQgdGFyZ2V0VmFsdWUoKSB7XG4gICAgcmV0dXJuIHRoaXMuZ2V0TnVtYmVyQXR0cmlidXRlKCd0YXJnZXRfdmFsdWUnKTtcbiAgfVxufVxuXG5leHBvcnQgZnVuY3Rpb24gZGF0YUF3c2NjRHluYW1vZGJHbG9iYWxUYWJsZVJlcGxpY2FzR2xvYmFsU2Vjb25kYXJ5SW5kZXhlc1JlYWRQcm92aXNpb25lZFRocm91Z2hwdXRTZXR0aW5nc1JlYWRDYXBhY2l0eUF1dG9TY2FsaW5nU2V0dGluZ3NUYXJnZXRUcmFja2luZ1NjYWxpbmdQb2xpY3lDb25maWd1cmF0aW9uVG9UZXJyYWZvcm0oc3RydWN0PzogRGF0YUF3c2NjRHluYW1vZGJHbG9iYWxUYWJsZVJlcGxpY2FzR2xvYmFsU2Vjb25kYXJ5SW5kZXhlc1JlYWRQcm92aXNpb25lZFRocm91Z2hwdXRTZXR0aW5nc1JlYWRDYXBhY2l0eUF1dG9TY2FsaW5nU2V0dGluZ3NUYXJnZXRUcmFja2luZ1NjYWxpbmdQb2xpY3lDb25maWd1cmF0aW9uKTogYW55IHtcbiAgaWYgKCFjZGt0Zi5jYW5JbnNwZWN0KHN0cnVjdCkpIHsgcmV0dXJuIHN0cnVjdDsgfVxuICByZXR1cm4ge1xuICAgIGRpc2FibGVfc2NhbGVfaW46IGNka3RmLmJvb2xlYW5Ub1RlcnJhZm9ybShzdHJ1Y3QhLmRpc2FibGVTY2FsZUluKSxcbiAgICBzY2FsZV9pbl9jb29sZG93bjogY2RrdGYubnVtYmVyVG9UZXJyYWZvcm0oc3RydWN0IS5zY2FsZUluQ29vbGRvd24pLFxuICAgIHNjYWxlX291dF9jb29sZG93bjogY2RrdGYubnVtYmVyVG9UZXJyYWZvcm0oc3RydWN0IS5zY2FsZU91dENvb2xkb3duKSxcbiAgICB0YXJnZXRfdmFsdWU6IGNka3RmLm51bWJlclRvVGVycmFmb3JtKHN0cnVjdCEudGFyZ2V0VmFsdWUpLFxuICB9XG59XG5cbmV4cG9ydCBjbGFzcyBEYXRhQXdzY2NEeW5hbW9kYkdsb2JhbFRhYmxlUmVwbGljYXNHbG9iYWxTZWNvbmRhcnlJbmRleGVzUmVhZFByb3Zpc2lvbmVkVGhyb3VnaHB1dFNldHRpbmdzUmVhZENhcGFjaXR5QXV0b1NjYWxpbmdTZXR0aW5ncyBleHRlbmRzIGNka3RmLkNvbXBsZXhDb21wdXRlZExpc3Qge1xuXG4gIC8vIG1heF9jYXBhY2l0eSAtIGNvbXB1dGVkOiB0cnVlLCBvcHRpb25hbDogZmFsc2UsIHJlcXVpcmVkOiBmYWxzZVxuICBwdWJsaWMgZ2V0IG1heENhcGFjaXR5KCkge1xuICAgIHJldHVybiB0aGlzLmdldE51bWJlckF0dHJpYnV0ZSgnbWF4X2NhcGFjaXR5Jyk7XG4gIH1cblxuICAvLyBtaW5fY2FwYWNpdHkgLSBjb21wdXRlZDogdHJ1ZSwgb3B0aW9uYWw6IGZhbHNlLCByZXF1aXJlZDogZmFsc2VcbiAgcHVibGljIGdldCBtaW5DYXBhY2l0eSgpIHtcbiAgICByZXR1cm4gdGhpcy5nZXROdW1iZXJBdHRyaWJ1dGUoJ21pbl9jYXBhY2l0eScpO1xuICB9XG5cbiAgLy8gc2VlZF9jYXBhY2l0eSAtIGNvbXB1dGVkOiB0cnVlLCBvcHRpb25hbDogZmFsc2UsIHJlcXVpcmVkOiBmYWxzZVxuICBwdWJsaWMgZ2V0IHNlZWRDYXBhY2l0eSgpIHtcbiAgICByZXR1cm4gdGhpcy5nZXROdW1iZXJBdHRyaWJ1dGUoJ3NlZWRfY2FwYWNpdHknKTtcbiAgfVxuXG4gIC8vIHRhcmdldF90cmFja2luZ19zY2FsaW5nX3BvbGljeV9jb25maWd1cmF0aW9uIC0gY29tcHV0ZWQ6IHRydWUsIG9wdGlvbmFsOiBmYWxzZSwgcmVxdWlyZWQ6IGZhbHNlXG4gIHB1YmxpYyBnZXQgdGFyZ2V0VHJhY2tpbmdTY2FsaW5nUG9saWN5Q29uZmlndXJhdGlvbigpIHtcbiAgICByZXR1cm4gdGhpcy5pbnRlcnBvbGF0aW9uRm9yQXR0cmlidXRlKCd0YXJnZXRfdHJhY2tpbmdfc2NhbGluZ19wb2xpY3lfY29uZmlndXJhdGlvbicpIGFzIGFueTtcbiAgfVxufVxuXG5leHBvcnQgZnVuY3Rpb24gZGF0YUF3c2NjRHluYW1vZGJHbG9iYWxUYWJsZVJlcGxpY2FzR2xvYmFsU2Vjb25kYXJ5SW5kZXhlc1JlYWRQcm92aXNpb25lZFRocm91Z2hwdXRTZXR0aW5nc1JlYWRDYXBhY2l0eUF1dG9TY2FsaW5nU2V0dGluZ3NUb1RlcnJhZm9ybShzdHJ1Y3Q/OiBEYXRhQXdzY2NEeW5hbW9kYkdsb2JhbFRhYmxlUmVwbGljYXNHbG9iYWxTZWNvbmRhcnlJbmRleGVzUmVhZFByb3Zpc2lvbmVkVGhyb3VnaHB1dFNldHRpbmdzUmVhZENhcGFjaXR5QXV0b1NjYWxpbmdTZXR0aW5ncyk6IGFueSB7XG4gIGlmICghY2RrdGYuY2FuSW5zcGVjdChzdHJ1Y3QpKSB7IHJldHVybiBzdHJ1Y3Q7IH1cbiAgcmV0dXJuIHtcbiAgICBtYXhfY2FwYWNpdHk6IGNka3RmLm51bWJlclRvVGVycmFmb3JtKHN0cnVjdCEubWF4Q2FwYWNpdHkpLFxuICAgIG1pbl9jYXBhY2l0eTogY2RrdGYubnVtYmVyVG9UZXJyYWZvcm0oc3RydWN0IS5taW5DYXBhY2l0eSksXG4gICAgc2VlZF9jYXBhY2l0eTogY2RrdGYubnVtYmVyVG9UZXJyYWZvcm0oc3RydWN0IS5zZWVkQ2FwYWNpdHkpLFxuICAgIHRhcmdldF90cmFja2luZ19zY2FsaW5nX3BvbGljeV9jb25maWd1cmF0aW9uOiBkYXRhQXdzY2NEeW5hbW9kYkdsb2JhbFRhYmxlUmVwbGljYXNHbG9iYWxTZWNvbmRhcnlJbmRleGVzUmVhZFByb3Zpc2lvbmVkVGhyb3VnaHB1dFNldHRpbmdzUmVhZENhcGFjaXR5QXV0b1NjYWxpbmdTZXR0aW5nc1RhcmdldFRyYWNraW5nU2NhbGluZ1BvbGljeUNvbmZpZ3VyYXRpb25Ub1RlcnJhZm9ybShzdHJ1Y3QhLnRhcmdldFRyYWNraW5nU2NhbGluZ1BvbGljeUNvbmZpZ3VyYXRpb24pLFxuICB9XG59XG5cbmV4cG9ydCBjbGFzcyBEYXRhQXdzY2NEeW5hbW9kYkdsb2JhbFRhYmxlUmVwbGljYXNHbG9iYWxTZWNvbmRhcnlJbmRleGVzUmVhZFByb3Zpc2lvbmVkVGhyb3VnaHB1dFNldHRpbmdzIGV4dGVuZHMgY2RrdGYuQ29tcGxleENvbXB1dGVkTGlzdCB7XG5cbiAgLy8gcmVhZF9jYXBhY2l0eV9hdXRvX3NjYWxpbmdfc2V0dGluZ3MgLSBjb21wdXRlZDogdHJ1ZSwgb3B0aW9uYWw6IGZhbHNlLCByZXF1aXJlZDogZmFsc2VcbiAgcHVibGljIGdldCByZWFkQ2FwYWNpdHlBdXRvU2NhbGluZ1NldHRpbmdzKCkge1xuICAgIHJldHVybiB0aGlzLmludGVycG9sYXRpb25Gb3JBdHRyaWJ1dGUoJ3JlYWRfY2FwYWNpdHlfYXV0b19zY2FsaW5nX3NldHRpbmdzJykgYXMgYW55O1xuICB9XG5cbiAgLy8gcmVhZF9jYXBhY2l0eV91bml0cyAtIGNvbXB1dGVkOiB0cnVlLCBvcHRpb25hbDogZmFsc2UsIHJlcXVpcmVkOiBmYWxzZVxuICBwdWJsaWMgZ2V0IHJlYWRDYXBhY2l0eVVuaXRzKCkge1xuICAgIHJldHVybiB0aGlzLmdldE51bWJlckF0dHJpYnV0ZSgncmVhZF9jYXBhY2l0eV91bml0cycpO1xuICB9XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBkYXRhQXdzY2NEeW5hbW9kYkdsb2JhbFRhYmxlUmVwbGljYXNHbG9iYWxTZWNvbmRhcnlJbmRleGVzUmVhZFByb3Zpc2lvbmVkVGhyb3VnaHB1dFNldHRpbmdzVG9UZXJyYWZvcm0oc3RydWN0PzogRGF0YUF3c2NjRHluYW1vZGJHbG9iYWxUYWJsZVJlcGxpY2FzR2xvYmFsU2Vjb25kYXJ5SW5kZXhlc1JlYWRQcm92aXNpb25lZFRocm91Z2hwdXRTZXR0aW5ncyk6IGFueSB7XG4gIGlmICghY2RrdGYuY2FuSW5zcGVjdChzdHJ1Y3QpKSB7IHJldHVybiBzdHJ1Y3Q7IH1cbiAgcmV0dXJuIHtcbiAgICByZWFkX2NhcGFjaXR5X2F1dG9fc2NhbGluZ19zZXR0aW5nczogZGF0YUF3c2NjRHluYW1vZGJHbG9iYWxUYWJsZVJlcGxpY2FzR2xvYmFsU2Vjb25kYXJ5SW5kZXhlc1JlYWRQcm92aXNpb25lZFRocm91Z2hwdXRTZXR0aW5nc1JlYWRDYXBhY2l0eUF1dG9TY2FsaW5nU2V0dGluZ3NUb1RlcnJhZm9ybShzdHJ1Y3QhLnJlYWRDYXBhY2l0eUF1dG9TY2FsaW5nU2V0dGluZ3MpLFxuICAgIHJlYWRfY2FwYWNpdHlfdW5pdHM6IGNka3RmLm51bWJlclRvVGVycmFmb3JtKHN0cnVjdCEucmVhZENhcGFjaXR5VW5pdHMpLFxuICB9XG59XG5cbmV4cG9ydCBjbGFzcyBEYXRhQXdzY2NEeW5hbW9kYkdsb2JhbFRhYmxlUmVwbGljYXNHbG9iYWxTZWNvbmRhcnlJbmRleGVzIGV4dGVuZHMgY2RrdGYuQ29tcGxleENvbXB1dGVkTGlzdCB7XG5cbiAgLy8gY29udHJpYnV0b3JfaW5zaWdodHNfc3BlY2lmaWNhdGlvbiAtIGNvbXB1dGVkOiB0cnVlLCBvcHRpb25hbDogZmFsc2UsIHJlcXVpcmVkOiBmYWxzZVxuICBwdWJsaWMgZ2V0IGNvbnRyaWJ1dG9ySW5zaWdodHNTcGVjaWZpY2F0aW9uKCkge1xuICAgIHJldHVybiB0aGlzLmludGVycG9sYXRpb25Gb3JBdHRyaWJ1dGUoJ2NvbnRyaWJ1dG9yX2luc2lnaHRzX3NwZWNpZmljYXRpb24nKSBhcyBhbnk7XG4gIH1cblxuICAvLyBpbmRleF9uYW1lIC0gY29tcHV0ZWQ6IHRydWUsIG9wdGlvbmFsOiBmYWxzZSwgcmVxdWlyZWQ6IGZhbHNlXG4gIHB1YmxpYyBnZXQgaW5kZXhOYW1lKCkge1xuICAgIHJldHVybiB0aGlzLmdldFN0cmluZ0F0dHJpYnV0ZSgnaW5kZXhfbmFtZScpO1xuICB9XG5cbiAgLy8gcmVhZF9wcm92aXNpb25lZF90aHJvdWdocHV0X3NldHRpbmdzIC0gY29tcHV0ZWQ6IHRydWUsIG9wdGlvbmFsOiBmYWxzZSwgcmVxdWlyZWQ6IGZhbHNlXG4gIHB1YmxpYyBnZXQgcmVhZFByb3Zpc2lvbmVkVGhyb3VnaHB1dFNldHRpbmdzKCkge1xuICAgIHJldHVybiB0aGlzLmludGVycG9sYXRpb25Gb3JBdHRyaWJ1dGUoJ3JlYWRfcHJvdmlzaW9uZWRfdGhyb3VnaHB1dF9zZXR0aW5ncycpIGFzIGFueTtcbiAgfVxufVxuXG5leHBvcnQgZnVuY3Rpb24gZGF0YUF3c2NjRHluYW1vZGJHbG9iYWxUYWJsZVJlcGxpY2FzR2xvYmFsU2Vjb25kYXJ5SW5kZXhlc1RvVGVycmFmb3JtKHN0cnVjdD86IERhdGFBd3NjY0R5bmFtb2RiR2xvYmFsVGFibGVSZXBsaWNhc0dsb2JhbFNlY29uZGFyeUluZGV4ZXMpOiBhbnkge1xuICBpZiAoIWNka3RmLmNhbkluc3BlY3Qoc3RydWN0KSkgeyByZXR1cm4gc3RydWN0OyB9XG4gIHJldHVybiB7XG4gICAgY29udHJpYnV0b3JfaW5zaWdodHNfc3BlY2lmaWNhdGlvbjogZGF0YUF3c2NjRHluYW1vZGJHbG9iYWxUYWJsZVJlcGxpY2FzR2xvYmFsU2Vjb25kYXJ5SW5kZXhlc0NvbnRyaWJ1dG9ySW5zaWdodHNTcGVjaWZpY2F0aW9uVG9UZXJyYWZvcm0oc3RydWN0IS5jb250cmlidXRvckluc2lnaHRzU3BlY2lmaWNhdGlvbiksXG4gICAgaW5kZXhfbmFtZTogY2RrdGYuc3RyaW5nVG9UZXJyYWZvcm0oc3RydWN0IS5pbmRleE5hbWUpLFxuICAgIHJlYWRfcHJvdmlzaW9uZWRfdGhyb3VnaHB1dF9zZXR0aW5nczogZGF0YUF3c2NjRHluYW1vZGJHbG9iYWxUYWJsZVJlcGxpY2FzR2xvYmFsU2Vjb25kYXJ5SW5kZXhlc1JlYWRQcm92aXNpb25lZFRocm91Z2hwdXRTZXR0aW5nc1RvVGVycmFmb3JtKHN0cnVjdCEucmVhZFByb3Zpc2lvbmVkVGhyb3VnaHB1dFNldHRpbmdzKSxcbiAgfVxufVxuXG5leHBvcnQgY2xhc3MgRGF0YUF3c2NjRHluYW1vZGJHbG9iYWxUYWJsZVJlcGxpY2FzUG9pbnRJblRpbWVSZWNvdmVyeVNwZWNpZmljYXRpb24gZXh0ZW5kcyBjZGt0Zi5Db21wbGV4Q29tcHV0ZWRMaXN0IHtcblxuICAvLyBwb2ludF9pbl90aW1lX3JlY292ZXJ5X2VuYWJsZWQgLSBjb21wdXRlZDogdHJ1ZSwgb3B0aW9uYWw6IGZhbHNlLCByZXF1aXJlZDogZmFsc2VcbiAgcHVibGljIGdldCBwb2ludEluVGltZVJlY292ZXJ5RW5hYmxlZCgpIHtcbiAgICByZXR1cm4gdGhpcy5nZXRCb29sZWFuQXR0cmlidXRlKCdwb2ludF9pbl90aW1lX3JlY292ZXJ5X2VuYWJsZWQnKTtcbiAgfVxufVxuXG5leHBvcnQgZnVuY3Rpb24gZGF0YUF3c2NjRHluYW1vZGJHbG9iYWxUYWJsZVJlcGxpY2FzUG9pbnRJblRpbWVSZWNvdmVyeVNwZWNpZmljYXRpb25Ub1RlcnJhZm9ybShzdHJ1Y3Q/OiBEYXRhQXdzY2NEeW5hbW9kYkdsb2JhbFRhYmxlUmVwbGljYXNQb2ludEluVGltZVJlY292ZXJ5U3BlY2lmaWNhdGlvbik6IGFueSB7XG4gIGlmICghY2RrdGYuY2FuSW5zcGVjdChzdHJ1Y3QpKSB7IHJldHVybiBzdHJ1Y3Q7IH1cbiAgcmV0dXJuIHtcbiAgICBwb2ludF9pbl90aW1lX3JlY292ZXJ5X2VuYWJsZWQ6IGNka3RmLmJvb2xlYW5Ub1RlcnJhZm9ybShzdHJ1Y3QhLnBvaW50SW5UaW1lUmVjb3ZlcnlFbmFibGVkKSxcbiAgfVxufVxuXG5leHBvcnQgY2xhc3MgRGF0YUF3c2NjRHluYW1vZGJHbG9iYWxUYWJsZVJlcGxpY2FzUmVhZFByb3Zpc2lvbmVkVGhyb3VnaHB1dFNldHRpbmdzUmVhZENhcGFjaXR5QXV0b1NjYWxpbmdTZXR0aW5nc1RhcmdldFRyYWNraW5nU2NhbGluZ1BvbGljeUNvbmZpZ3VyYXRpb24gZXh0ZW5kcyBjZGt0Zi5Db21wbGV4Q29tcHV0ZWRMaXN0IHtcblxuICAvLyBkaXNhYmxlX3NjYWxlX2luIC0gY29tcHV0ZWQ6IHRydWUsIG9wdGlvbmFsOiBmYWxzZSwgcmVxdWlyZWQ6IGZhbHNlXG4gIHB1YmxpYyBnZXQgZGlzYWJsZVNjYWxlSW4oKSB7XG4gICAgcmV0dXJuIHRoaXMuZ2V0Qm9vbGVhbkF0dHJpYnV0ZSgnZGlzYWJsZV9zY2FsZV9pbicpO1xuICB9XG5cbiAgLy8gc2NhbGVfaW5fY29vbGRvd24gLSBjb21wdXRlZDogdHJ1ZSwgb3B0aW9uYWw6IGZhbHNlLCByZXF1aXJlZDogZmFsc2VcbiAgcHVibGljIGdldCBzY2FsZUluQ29vbGRvd24oKSB7XG4gICAgcmV0dXJuIHRoaXMuZ2V0TnVtYmVyQXR0cmlidXRlKCdzY2FsZV9pbl9jb29sZG93bicpO1xuICB9XG5cbiAgLy8gc2NhbGVfb3V0X2Nvb2xkb3duIC0gY29tcHV0ZWQ6IHRydWUsIG9wdGlvbmFsOiBmYWxzZSwgcmVxdWlyZWQ6IGZhbHNlXG4gIHB1YmxpYyBnZXQgc2NhbGVPdXRDb29sZG93bigpIHtcbiAgICByZXR1cm4gdGhpcy5nZXROdW1iZXJBdHRyaWJ1dGUoJ3NjYWxlX291dF9jb29sZG93bicpO1xuICB9XG5cbiAgLy8gdGFyZ2V0X3ZhbHVlIC0gY29tcHV0ZWQ6IHRydWUsIG9wdGlvbmFsOiBmYWxzZSwgcmVxdWlyZWQ6IGZhbHNlXG4gIHB1YmxpYyBnZXQgdGFyZ2V0VmFsdWUoKSB7XG4gICAgcmV0dXJuIHRoaXMuZ2V0TnVtYmVyQXR0cmlidXRlKCd0YXJnZXRfdmFsdWUnKTtcbiAgfVxufVxuXG5leHBvcnQgZnVuY3Rpb24gZGF0YUF3c2NjRHluYW1vZGJHbG9iYWxUYWJsZVJlcGxpY2FzUmVhZFByb3Zpc2lvbmVkVGhyb3VnaHB1dFNldHRpbmdzUmVhZENhcGFjaXR5QXV0b1NjYWxpbmdTZXR0aW5nc1RhcmdldFRyYWNraW5nU2NhbGluZ1BvbGljeUNvbmZpZ3VyYXRpb25Ub1RlcnJhZm9ybShzdHJ1Y3Q/OiBEYXRhQXdzY2NEeW5hbW9kYkdsb2JhbFRhYmxlUmVwbGljYXNSZWFkUHJvdmlzaW9uZWRUaHJvdWdocHV0U2V0dGluZ3NSZWFkQ2FwYWNpdHlBdXRvU2NhbGluZ1NldHRpbmdzVGFyZ2V0VHJhY2tpbmdTY2FsaW5nUG9saWN5Q29uZmlndXJhdGlvbik6IGFueSB7XG4gIGlmICghY2RrdGYuY2FuSW5zcGVjdChzdHJ1Y3QpKSB7IHJldHVybiBzdHJ1Y3Q7IH1cbiAgcmV0dXJuIHtcbiAgICBkaXNhYmxlX3NjYWxlX2luOiBjZGt0Zi5ib29sZWFuVG9UZXJyYWZvcm0oc3RydWN0IS5kaXNhYmxlU2NhbGVJbiksXG4gICAgc2NhbGVfaW5fY29vbGRvd246IGNka3RmLm51bWJlclRvVGVycmFmb3JtKHN0cnVjdCEuc2NhbGVJbkNvb2xkb3duKSxcbiAgICBzY2FsZV9vdXRfY29vbGRvd246IGNka3RmLm51bWJlclRvVGVycmFmb3JtKHN0cnVjdCEuc2NhbGVPdXRDb29sZG93biksXG4gICAgdGFyZ2V0X3ZhbHVlOiBjZGt0Zi5udW1iZXJUb1RlcnJhZm9ybShzdHJ1Y3QhLnRhcmdldFZhbHVlKSxcbiAgfVxufVxuXG5leHBvcnQgY2xhc3MgRGF0YUF3c2NjRHluYW1vZGJHbG9iYWxUYWJsZVJlcGxpY2FzUmVhZFByb3Zpc2lvbmVkVGhyb3VnaHB1dFNldHRpbmdzUmVhZENhcGFjaXR5QXV0b1NjYWxpbmdTZXR0aW5ncyBleHRlbmRzIGNka3RmLkNvbXBsZXhDb21wdXRlZExpc3Qge1xuXG4gIC8vIG1heF9jYXBhY2l0eSAtIGNvbXB1dGVkOiB0cnVlLCBvcHRpb25hbDogZmFsc2UsIHJlcXVpcmVkOiBmYWxzZVxuICBwdWJsaWMgZ2V0IG1heENhcGFjaXR5KCkge1xuICAgIHJldHVybiB0aGlzLmdldE51bWJlckF0dHJpYnV0ZSgnbWF4X2NhcGFjaXR5Jyk7XG4gIH1cblxuICAvLyBtaW5fY2FwYWNpdHkgLSBjb21wdXRlZDogdHJ1ZSwgb3B0aW9uYWw6IGZhbHNlLCByZXF1aXJlZDogZmFsc2VcbiAgcHVibGljIGdldCBtaW5DYXBhY2l0eSgpIHtcbiAgICByZXR1cm4gdGhpcy5nZXROdW1iZXJBdHRyaWJ1dGUoJ21pbl9jYXBhY2l0eScpO1xuICB9XG5cbiAgLy8gc2VlZF9jYXBhY2l0eSAtIGNvbXB1dGVkOiB0cnVlLCBvcHRpb25hbDogZmFsc2UsIHJlcXVpcmVkOiBmYWxzZVxuICBwdWJsaWMgZ2V0IHNlZWRDYXBhY2l0eSgpIHtcbiAgICByZXR1cm4gdGhpcy5nZXROdW1iZXJBdHRyaWJ1dGUoJ3NlZWRfY2FwYWNpdHknKTtcbiAgfVxuXG4gIC8vIHRhcmdldF90cmFja2luZ19zY2FsaW5nX3BvbGljeV9jb25maWd1cmF0aW9uIC0gY29tcHV0ZWQ6IHRydWUsIG9wdGlvbmFsOiBmYWxzZSwgcmVxdWlyZWQ6IGZhbHNlXG4gIHB1YmxpYyBnZXQgdGFyZ2V0VHJhY2tpbmdTY2FsaW5nUG9saWN5Q29uZmlndXJhdGlvbigpIHtcbiAgICByZXR1cm4gdGhpcy5pbnRlcnBvbGF0aW9uRm9yQXR0cmlidXRlKCd0YXJnZXRfdHJhY2tpbmdfc2NhbGluZ19wb2xpY3lfY29uZmlndXJhdGlvbicpIGFzIGFueTtcbiAgfVxufVxuXG5leHBvcnQgZnVuY3Rpb24gZGF0YUF3c2NjRHluYW1vZGJHbG9iYWxUYWJsZVJlcGxpY2FzUmVhZFByb3Zpc2lvbmVkVGhyb3VnaHB1dFNldHRpbmdzUmVhZENhcGFjaXR5QXV0b1NjYWxpbmdTZXR0aW5nc1RvVGVycmFmb3JtKHN0cnVjdD86IERhdGFBd3NjY0R5bmFtb2RiR2xvYmFsVGFibGVSZXBsaWNhc1JlYWRQcm92aXNpb25lZFRocm91Z2hwdXRTZXR0aW5nc1JlYWRDYXBhY2l0eUF1dG9TY2FsaW5nU2V0dGluZ3MpOiBhbnkge1xuICBpZiAoIWNka3RmLmNhbkluc3BlY3Qoc3RydWN0KSkgeyByZXR1cm4gc3RydWN0OyB9XG4gIHJldHVybiB7XG4gICAgbWF4X2NhcGFjaXR5OiBjZGt0Zi5udW1iZXJUb1RlcnJhZm9ybShzdHJ1Y3QhLm1heENhcGFjaXR5KSxcbiAgICBtaW5fY2FwYWNpdHk6IGNka3RmLm51bWJlclRvVGVycmFmb3JtKHN0cnVjdCEubWluQ2FwYWNpdHkpLFxuICAgIHNlZWRfY2FwYWNpdHk6IGNka3RmLm51bWJlclRvVGVycmFmb3JtKHN0cnVjdCEuc2VlZENhcGFjaXR5KSxcbiAgICB0YXJnZXRfdHJhY2tpbmdfc2NhbGluZ19wb2xpY3lfY29uZmlndXJhdGlvbjogZGF0YUF3c2NjRHluYW1vZGJHbG9iYWxUYWJsZVJlcGxpY2FzUmVhZFByb3Zpc2lvbmVkVGhyb3VnaHB1dFNldHRpbmdzUmVhZENhcGFjaXR5QXV0b1NjYWxpbmdTZXR0aW5nc1RhcmdldFRyYWNraW5nU2NhbGluZ1BvbGljeUNvbmZpZ3VyYXRpb25Ub1RlcnJhZm9ybShzdHJ1Y3QhLnRhcmdldFRyYWNraW5nU2NhbGluZ1BvbGljeUNvbmZpZ3VyYXRpb24pLFxuICB9XG59XG5cbmV4cG9ydCBjbGFzcyBEYXRhQXdzY2NEeW5hbW9kYkdsb2JhbFRhYmxlUmVwbGljYXNSZWFkUHJvdmlzaW9uZWRUaHJvdWdocHV0U2V0dGluZ3MgZXh0ZW5kcyBjZGt0Zi5Db21wbGV4Q29tcHV0ZWRMaXN0IHtcblxuICAvLyByZWFkX2NhcGFjaXR5X2F1dG9fc2NhbGluZ19zZXR0aW5ncyAtIGNvbXB1dGVkOiB0cnVlLCBvcHRpb25hbDogZmFsc2UsIHJlcXVpcmVkOiBmYWxzZVxuICBwdWJsaWMgZ2V0IHJlYWRDYXBhY2l0eUF1dG9TY2FsaW5nU2V0dGluZ3MoKSB7XG4gICAgcmV0dXJuIHRoaXMuaW50ZXJwb2xhdGlvbkZvckF0dHJpYnV0ZSgncmVhZF9jYXBhY2l0eV9hdXRvX3NjYWxpbmdfc2V0dGluZ3MnKSBhcyBhbnk7XG4gIH1cblxuICAvLyByZWFkX2NhcGFjaXR5X3VuaXRzIC0gY29tcHV0ZWQ6IHRydWUsIG9wdGlvbmFsOiBmYWxzZSwgcmVxdWlyZWQ6IGZhbHNlXG4gIHB1YmxpYyBnZXQgcmVhZENhcGFjaXR5VW5pdHMoKSB7XG4gICAgcmV0dXJuIHRoaXMuZ2V0TnVtYmVyQXR0cmlidXRlKCdyZWFkX2NhcGFjaXR5X3VuaXRzJyk7XG4gIH1cbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGRhdGFBd3NjY0R5bmFtb2RiR2xvYmFsVGFibGVSZXBsaWNhc1JlYWRQcm92aXNpb25lZFRocm91Z2hwdXRTZXR0aW5nc1RvVGVycmFmb3JtKHN0cnVjdD86IERhdGFBd3NjY0R5bmFtb2RiR2xvYmFsVGFibGVSZXBsaWNhc1JlYWRQcm92aXNpb25lZFRocm91Z2hwdXRTZXR0aW5ncyk6IGFueSB7XG4gIGlmICghY2RrdGYuY2FuSW5zcGVjdChzdHJ1Y3QpKSB7IHJldHVybiBzdHJ1Y3Q7IH1cbiAgcmV0dXJuIHtcbiAgICByZWFkX2NhcGFjaXR5X2F1dG9fc2NhbGluZ19zZXR0aW5nczogZGF0YUF3c2NjRHluYW1vZGJHbG9iYWxUYWJsZVJlcGxpY2FzUmVhZFByb3Zpc2lvbmVkVGhyb3VnaHB1dFNldHRpbmdzUmVhZENhcGFjaXR5QXV0b1NjYWxpbmdTZXR0aW5nc1RvVGVycmFmb3JtKHN0cnVjdCEucmVhZENhcGFjaXR5QXV0b1NjYWxpbmdTZXR0aW5ncyksXG4gICAgcmVhZF9jYXBhY2l0eV91bml0czogY2RrdGYubnVtYmVyVG9UZXJyYWZvcm0oc3RydWN0IS5yZWFkQ2FwYWNpdHlVbml0cyksXG4gIH1cbn1cblxuZXhwb3J0IGNsYXNzIERhdGFBd3NjY0R5bmFtb2RiR2xvYmFsVGFibGVSZXBsaWNhc1NzZVNwZWNpZmljYXRpb24gZXh0ZW5kcyBjZGt0Zi5Db21wbGV4Q29tcHV0ZWRMaXN0IHtcblxuICAvLyBrbXNfbWFzdGVyX2tleV9pZCAtIGNvbXB1dGVkOiB0cnVlLCBvcHRpb25hbDogZmFsc2UsIHJlcXVpcmVkOiBmYWxzZVxuICBwdWJsaWMgZ2V0IGttc01hc3RlcktleUlkKCkge1xuICAgIHJldHVybiB0aGlzLmdldFN0cmluZ0F0dHJpYnV0ZSgna21zX21hc3Rlcl9rZXlfaWQnKTtcbiAgfVxufVxuXG5leHBvcnQgZnVuY3Rpb24gZGF0YUF3c2NjRHluYW1vZGJHbG9iYWxUYWJsZVJlcGxpY2FzU3NlU3BlY2lmaWNhdGlvblRvVGVycmFmb3JtKHN0cnVjdD86IERhdGFBd3NjY0R5bmFtb2RiR2xvYmFsVGFibGVSZXBsaWNhc1NzZVNwZWNpZmljYXRpb24pOiBhbnkge1xuICBpZiAoIWNka3RmLmNhbkluc3BlY3Qoc3RydWN0KSkgeyByZXR1cm4gc3RydWN0OyB9XG4gIHJldHVybiB7XG4gICAga21zX21hc3Rlcl9rZXlfaWQ6IGNka3RmLnN0cmluZ1RvVGVycmFmb3JtKHN0cnVjdCEua21zTWFzdGVyS2V5SWQpLFxuICB9XG59XG5cbmV4cG9ydCBjbGFzcyBEYXRhQXdzY2NEeW5hbW9kYkdsb2JhbFRhYmxlUmVwbGljYXNUYWdzIGV4dGVuZHMgY2RrdGYuQ29tcGxleENvbXB1dGVkTGlzdCB7XG5cbiAgLy8ga2V5IC0gY29tcHV0ZWQ6IHRydWUsIG9wdGlvbmFsOiBmYWxzZSwgcmVxdWlyZWQ6IGZhbHNlXG4gIHB1YmxpYyBnZXQga2V5KCkge1xuICAgIHJldHVybiB0aGlzLmdldFN0cmluZ0F0dHJpYnV0ZSgna2V5Jyk7XG4gIH1cblxuICAvLyB2YWx1ZSAtIGNvbXB1dGVkOiB0cnVlLCBvcHRpb25hbDogZmFsc2UsIHJlcXVpcmVkOiBmYWxzZVxuICBwdWJsaWMgZ2V0IHZhbHVlKCkge1xuICAgIHJldHVybiB0aGlzLmdldFN0cmluZ0F0dHJpYnV0ZSgndmFsdWUnKTtcbiAgfVxufVxuXG5leHBvcnQgZnVuY3Rpb24gZGF0YUF3c2NjRHluYW1vZGJHbG9iYWxUYWJsZVJlcGxpY2FzVGFnc1RvVGVycmFmb3JtKHN0cnVjdD86IERhdGFBd3NjY0R5bmFtb2RiR2xvYmFsVGFibGVSZXBsaWNhc1RhZ3MpOiBhbnkge1xuICBpZiAoIWNka3RmLmNhbkluc3BlY3Qoc3RydWN0KSkgeyByZXR1cm4gc3RydWN0OyB9XG4gIHJldHVybiB7XG4gICAga2V5OiBjZGt0Zi5zdHJpbmdUb1RlcnJhZm9ybShzdHJ1Y3QhLmtleSksXG4gICAgdmFsdWU6IGNka3RmLnN0cmluZ1RvVGVycmFmb3JtKHN0cnVjdCEudmFsdWUpLFxuICB9XG59XG5cbmV4cG9ydCBjbGFzcyBEYXRhQXdzY2NEeW5hbW9kYkdsb2JhbFRhYmxlUmVwbGljYXMgZXh0ZW5kcyBjZGt0Zi5Db21wbGV4Q29tcHV0ZWRMaXN0IHtcblxuICAvLyBjb250cmlidXRvcl9pbnNpZ2h0c19zcGVjaWZpY2F0aW9uIC0gY29tcHV0ZWQ6IHRydWUsIG9wdGlvbmFsOiBmYWxzZSwgcmVxdWlyZWQ6IGZhbHNlXG4gIHB1YmxpYyBnZXQgY29udHJpYnV0b3JJbnNpZ2h0c1NwZWNpZmljYXRpb24oKSB7XG4gICAgcmV0dXJuIHRoaXMuaW50ZXJwb2xhdGlvbkZvckF0dHJpYnV0ZSgnY29udHJpYnV0b3JfaW5zaWdodHNfc3BlY2lmaWNhdGlvbicpIGFzIGFueTtcbiAgfVxuXG4gIC8vIGdsb2JhbF9zZWNvbmRhcnlfaW5kZXhlcyAtIGNvbXB1dGVkOiB0cnVlLCBvcHRpb25hbDogZmFsc2UsIHJlcXVpcmVkOiBmYWxzZVxuICBwdWJsaWMgZ2V0IGdsb2JhbFNlY29uZGFyeUluZGV4ZXMoKSB7XG4gICAgcmV0dXJuIHRoaXMuaW50ZXJwb2xhdGlvbkZvckF0dHJpYnV0ZSgnZ2xvYmFsX3NlY29uZGFyeV9pbmRleGVzJykgYXMgYW55O1xuICB9XG5cbiAgLy8gcG9pbnRfaW5fdGltZV9yZWNvdmVyeV9zcGVjaWZpY2F0aW9uIC0gY29tcHV0ZWQ6IHRydWUsIG9wdGlvbmFsOiBmYWxzZSwgcmVxdWlyZWQ6IGZhbHNlXG4gIHB1YmxpYyBnZXQgcG9pbnRJblRpbWVSZWNvdmVyeVNwZWNpZmljYXRpb24oKSB7XG4gICAgcmV0dXJuIHRoaXMuaW50ZXJwb2xhdGlvbkZvckF0dHJpYnV0ZSgncG9pbnRfaW5fdGltZV9yZWNvdmVyeV9zcGVjaWZpY2F0aW9uJykgYXMgYW55O1xuICB9XG5cbiAgLy8gcmVhZF9wcm92aXNpb25lZF90aHJvdWdocHV0X3NldHRpbmdzIC0gY29tcHV0ZWQ6IHRydWUsIG9wdGlvbmFsOiBmYWxzZSwgcmVxdWlyZWQ6IGZhbHNlXG4gIHB1YmxpYyBnZXQgcmVhZFByb3Zpc2lvbmVkVGhyb3VnaHB1dFNldHRpbmdzKCkge1xuICAgIHJldHVybiB0aGlzLmludGVycG9sYXRpb25Gb3JBdHRyaWJ1dGUoJ3JlYWRfcHJvdmlzaW9uZWRfdGhyb3VnaHB1dF9zZXR0aW5ncycpIGFzIGFueTtcbiAgfVxuXG4gIC8vIHJlZ2lvbiAtIGNvbXB1dGVkOiB0cnVlLCBvcHRpb25hbDogZmFsc2UsIHJlcXVpcmVkOiBmYWxzZVxuICBwdWJsaWMgZ2V0IHJlZ2lvbigpIHtcbiAgICByZXR1cm4gdGhpcy5nZXRTdHJpbmdBdHRyaWJ1dGUoJ3JlZ2lvbicpO1xuICB9XG5cbiAgLy8gc3NlX3NwZWNpZmljYXRpb24gLSBjb21wdXRlZDogdHJ1ZSwgb3B0aW9uYWw6IGZhbHNlLCByZXF1aXJlZDogZmFsc2VcbiAgcHVibGljIGdldCBzc2VTcGVjaWZpY2F0aW9uKCkge1xuICAgIHJldHVybiB0aGlzLmludGVycG9sYXRpb25Gb3JBdHRyaWJ1dGUoJ3NzZV9zcGVjaWZpY2F0aW9uJykgYXMgYW55O1xuICB9XG5cbiAgLy8gdGFncyAtIGNvbXB1dGVkOiB0cnVlLCBvcHRpb25hbDogZmFsc2UsIHJlcXVpcmVkOiBmYWxzZVxuICBwdWJsaWMgZ2V0IHRhZ3MoKSB7XG4gICAgcmV0dXJuIHRoaXMuaW50ZXJwb2xhdGlvbkZvckF0dHJpYnV0ZSgndGFncycpIGFzIGFueTtcbiAgfVxufVxuXG5leHBvcnQgZnVuY3Rpb24gZGF0YUF3c2NjRHluYW1vZGJHbG9iYWxUYWJsZVJlcGxpY2FzVG9UZXJyYWZvcm0oc3RydWN0PzogRGF0YUF3c2NjRHluYW1vZGJHbG9iYWxUYWJsZVJlcGxpY2FzKTogYW55IHtcbiAgaWYgKCFjZGt0Zi5jYW5JbnNwZWN0KHN0cnVjdCkpIHsgcmV0dXJuIHN0cnVjdDsgfVxuICByZXR1cm4ge1xuICAgIGNvbnRyaWJ1dG9yX2luc2lnaHRzX3NwZWNpZmljYXRpb246IGRhdGFBd3NjY0R5bmFtb2RiR2xvYmFsVGFibGVSZXBsaWNhc0NvbnRyaWJ1dG9ySW5zaWdodHNTcGVjaWZpY2F0aW9uVG9UZXJyYWZvcm0oc3RydWN0IS5jb250cmlidXRvckluc2lnaHRzU3BlY2lmaWNhdGlvbiksXG4gICAgZ2xvYmFsX3NlY29uZGFyeV9pbmRleGVzOiBjZGt0Zi5saXN0TWFwcGVyKGRhdGFBd3NjY0R5bmFtb2RiR2xvYmFsVGFibGVSZXBsaWNhc0dsb2JhbFNlY29uZGFyeUluZGV4ZXNUb1RlcnJhZm9ybSkoc3RydWN0IS5nbG9iYWxTZWNvbmRhcnlJbmRleGVzKSxcbiAgICBwb2ludF9pbl90aW1lX3JlY292ZXJ5X3NwZWNpZmljYXRpb246IGRhdGFBd3NjY0R5bmFtb2RiR2xvYmFsVGFibGVSZXBsaWNhc1BvaW50SW5UaW1lUmVjb3ZlcnlTcGVjaWZpY2F0aW9uVG9UZXJyYWZvcm0oc3RydWN0IS5wb2ludEluVGltZVJlY292ZXJ5U3BlY2lmaWNhdGlvbiksXG4gICAgcmVhZF9wcm92aXNpb25lZF90aHJvdWdocHV0X3NldHRpbmdzOiBkYXRhQXdzY2NEeW5hbW9kYkdsb2JhbFRhYmxlUmVwbGljYXNSZWFkUHJvdmlzaW9uZWRUaHJvdWdocHV0U2V0dGluZ3NUb1RlcnJhZm9ybShzdHJ1Y3QhLnJlYWRQcm92aXNpb25lZFRocm91Z2hwdXRTZXR0aW5ncyksXG4gICAgcmVnaW9uOiBjZGt0Zi5zdHJpbmdUb1RlcnJhZm9ybShzdHJ1Y3QhLnJlZ2lvbiksXG4gICAgc3NlX3NwZWNpZmljYXRpb246IGRhdGFBd3NjY0R5bmFtb2RiR2xvYmFsVGFibGVSZXBsaWNhc1NzZVNwZWNpZmljYXRpb25Ub1RlcnJhZm9ybShzdHJ1Y3QhLnNzZVNwZWNpZmljYXRpb24pLFxuICAgIHRhZ3M6IGNka3RmLmxpc3RNYXBwZXIoZGF0YUF3c2NjRHluYW1vZGJHbG9iYWxUYWJsZVJlcGxpY2FzVGFnc1RvVGVycmFmb3JtKShzdHJ1Y3QhLnRhZ3MpLFxuICB9XG59XG5cbmV4cG9ydCBjbGFzcyBEYXRhQXdzY2NEeW5hbW9kYkdsb2JhbFRhYmxlU3NlU3BlY2lmaWNhdGlvbiBleHRlbmRzIGNka3RmLkNvbXBsZXhDb21wdXRlZExpc3Qge1xuXG4gIC8vIHNzZV9lbmFibGVkIC0gY29tcHV0ZWQ6IHRydWUsIG9wdGlvbmFsOiBmYWxzZSwgcmVxdWlyZWQ6IGZhbHNlXG4gIHB1YmxpYyBnZXQgc3NlRW5hYmxlZCgpIHtcbiAgICByZXR1cm4gdGhpcy5nZXRCb29sZWFuQXR0cmlidXRlKCdzc2VfZW5hYmxlZCcpO1xuICB9XG5cbiAgLy8gc3NlX3R5cGUgLSBjb21wdXRlZDogdHJ1ZSwgb3B0aW9uYWw6IGZhbHNlLCByZXF1aXJlZDogZmFsc2VcbiAgcHVibGljIGdldCBzc2VUeXBlKCkge1xuICAgIHJldHVybiB0aGlzLmdldFN0cmluZ0F0dHJpYnV0ZSgnc3NlX3R5cGUnKTtcbiAgfVxufVxuXG5leHBvcnQgZnVuY3Rpb24gZGF0YUF3c2NjRHluYW1vZGJHbG9iYWxUYWJsZVNzZVNwZWNpZmljYXRpb25Ub1RlcnJhZm9ybShzdHJ1Y3Q/OiBEYXRhQXdzY2NEeW5hbW9kYkdsb2JhbFRhYmxlU3NlU3BlY2lmaWNhdGlvbik6IGFueSB7XG4gIGlmICghY2RrdGYuY2FuSW5zcGVjdChzdHJ1Y3QpKSB7IHJldHVybiBzdHJ1Y3Q7IH1cbiAgcmV0dXJuIHtcbiAgICBzc2VfZW5hYmxlZDogY2RrdGYuYm9vbGVhblRvVGVycmFmb3JtKHN0cnVjdCEuc3NlRW5hYmxlZCksXG4gICAgc3NlX3R5cGU6IGNka3RmLnN0cmluZ1RvVGVycmFmb3JtKHN0cnVjdCEuc3NlVHlwZSksXG4gIH1cbn1cblxuZXhwb3J0IGNsYXNzIERhdGFBd3NjY0R5bmFtb2RiR2xvYmFsVGFibGVTdHJlYW1TcGVjaWZpY2F0aW9uIGV4dGVuZHMgY2RrdGYuQ29tcGxleENvbXB1dGVkTGlzdCB7XG5cbiAgLy8gc3RyZWFtX3ZpZXdfdHlwZSAtIGNvbXB1dGVkOiB0cnVlLCBvcHRpb25hbDogZmFsc2UsIHJlcXVpcmVkOiBmYWxzZVxuICBwdWJsaWMgZ2V0IHN0cmVhbVZpZXdUeXBlKCkge1xuICAgIHJldHVybiB0aGlzLmdldFN0cmluZ0F0dHJpYnV0ZSgnc3RyZWFtX3ZpZXdfdHlwZScpO1xuICB9XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBkYXRhQXdzY2NEeW5hbW9kYkdsb2JhbFRhYmxlU3RyZWFtU3BlY2lmaWNhdGlvblRvVGVycmFmb3JtKHN0cnVjdD86IERhdGFBd3NjY0R5bmFtb2RiR2xvYmFsVGFibGVTdHJlYW1TcGVjaWZpY2F0aW9uKTogYW55IHtcbiAgaWYgKCFjZGt0Zi5jYW5JbnNwZWN0KHN0cnVjdCkpIHsgcmV0dXJuIHN0cnVjdDsgfVxuICByZXR1cm4ge1xuICAgIHN0cmVhbV92aWV3X3R5cGU6IGNka3RmLnN0cmluZ1RvVGVycmFmb3JtKHN0cnVjdCEuc3RyZWFtVmlld1R5cGUpLFxuICB9XG59XG5cbmV4cG9ydCBjbGFzcyBEYXRhQXdzY2NEeW5hbW9kYkdsb2JhbFRhYmxlVGltZVRvTGl2ZVNwZWNpZmljYXRpb24gZXh0ZW5kcyBjZGt0Zi5Db21wbGV4Q29tcHV0ZWRMaXN0IHtcblxuICAvLyBhdHRyaWJ1dGVfbmFtZSAtIGNvbXB1dGVkOiB0cnVlLCBvcHRpb25hbDogZmFsc2UsIHJlcXVpcmVkOiBmYWxzZVxuICBwdWJsaWMgZ2V0IGF0dHJpYnV0ZU5hbWUoKSB7XG4gICAgcmV0dXJuIHRoaXMuZ2V0U3RyaW5nQXR0cmlidXRlKCdhdHRyaWJ1dGVfbmFtZScpO1xuICB9XG5cbiAgLy8gZW5hYmxlZCAtIGNvbXB1dGVkOiB0cnVlLCBvcHRpb25hbDogZmFsc2UsIHJlcXVpcmVkOiBmYWxzZVxuICBwdWJsaWMgZ2V0IGVuYWJsZWQoKSB7XG4gICAgcmV0dXJuIHRoaXMuZ2V0Qm9vbGVhbkF0dHJpYnV0ZSgnZW5hYmxlZCcpO1xuICB9XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBkYXRhQXdzY2NEeW5hbW9kYkdsb2JhbFRhYmxlVGltZVRvTGl2ZVNwZWNpZmljYXRpb25Ub1RlcnJhZm9ybShzdHJ1Y3Q/OiBEYXRhQXdzY2NEeW5hbW9kYkdsb2JhbFRhYmxlVGltZVRvTGl2ZVNwZWNpZmljYXRpb24pOiBhbnkge1xuICBpZiAoIWNka3RmLmNhbkluc3BlY3Qoc3RydWN0KSkgeyByZXR1cm4gc3RydWN0OyB9XG4gIHJldHVybiB7XG4gICAgYXR0cmlidXRlX25hbWU6IGNka3RmLnN0cmluZ1RvVGVycmFmb3JtKHN0cnVjdCEuYXR0cmlidXRlTmFtZSksXG4gICAgZW5hYmxlZDogY2RrdGYuYm9vbGVhblRvVGVycmFmb3JtKHN0cnVjdCEuZW5hYmxlZCksXG4gIH1cbn1cblxuZXhwb3J0IGNsYXNzIERhdGFBd3NjY0R5bmFtb2RiR2xvYmFsVGFibGVXcml0ZVByb3Zpc2lvbmVkVGhyb3VnaHB1dFNldHRpbmdzV3JpdGVDYXBhY2l0eUF1dG9TY2FsaW5nU2V0dGluZ3NUYXJnZXRUcmFja2luZ1NjYWxpbmdQb2xpY3lDb25maWd1cmF0aW9uIGV4dGVuZHMgY2RrdGYuQ29tcGxleENvbXB1dGVkTGlzdCB7XG5cbiAgLy8gZGlzYWJsZV9zY2FsZV9pbiAtIGNvbXB1dGVkOiB0cnVlLCBvcHRpb25hbDogZmFsc2UsIHJlcXVpcmVkOiBmYWxzZVxuICBwdWJsaWMgZ2V0IGRpc2FibGVTY2FsZUluKCkge1xuICAgIHJldHVybiB0aGlzLmdldEJvb2xlYW5BdHRyaWJ1dGUoJ2Rpc2FibGVfc2NhbGVfaW4nKTtcbiAgfVxuXG4gIC8vIHNjYWxlX2luX2Nvb2xkb3duIC0gY29tcHV0ZWQ6IHRydWUsIG9wdGlvbmFsOiBmYWxzZSwgcmVxdWlyZWQ6IGZhbHNlXG4gIHB1YmxpYyBnZXQgc2NhbGVJbkNvb2xkb3duKCkge1xuICAgIHJldHVybiB0aGlzLmdldE51bWJlckF0dHJpYnV0ZSgnc2NhbGVfaW5fY29vbGRvd24nKTtcbiAgfVxuXG4gIC8vIHNjYWxlX291dF9jb29sZG93biAtIGNvbXB1dGVkOiB0cnVlLCBvcHRpb25hbDogZmFsc2UsIHJlcXVpcmVkOiBmYWxzZVxuICBwdWJsaWMgZ2V0IHNjYWxlT3V0Q29vbGRvd24oKSB7XG4gICAgcmV0dXJuIHRoaXMuZ2V0TnVtYmVyQXR0cmlidXRlKCdzY2FsZV9vdXRfY29vbGRvd24nKTtcbiAgfVxuXG4gIC8vIHRhcmdldF92YWx1ZSAtIGNvbXB1dGVkOiB0cnVlLCBvcHRpb25hbDogZmFsc2UsIHJlcXVpcmVkOiBmYWxzZVxuICBwdWJsaWMgZ2V0IHRhcmdldFZhbHVlKCkge1xuICAgIHJldHVybiB0aGlzLmdldE51bWJlckF0dHJpYnV0ZSgndGFyZ2V0X3ZhbHVlJyk7XG4gIH1cbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGRhdGFBd3NjY0R5bmFtb2RiR2xvYmFsVGFibGVXcml0ZVByb3Zpc2lvbmVkVGhyb3VnaHB1dFNldHRpbmdzV3JpdGVDYXBhY2l0eUF1dG9TY2FsaW5nU2V0dGluZ3NUYXJnZXRUcmFja2luZ1NjYWxpbmdQb2xpY3lDb25maWd1cmF0aW9uVG9UZXJyYWZvcm0oc3RydWN0PzogRGF0YUF3c2NjRHluYW1vZGJHbG9iYWxUYWJsZVdyaXRlUHJvdmlzaW9uZWRUaHJvdWdocHV0U2V0dGluZ3NXcml0ZUNhcGFjaXR5QXV0b1NjYWxpbmdTZXR0aW5nc1RhcmdldFRyYWNraW5nU2NhbGluZ1BvbGljeUNvbmZpZ3VyYXRpb24pOiBhbnkge1xuICBpZiAoIWNka3RmLmNhbkluc3BlY3Qoc3RydWN0KSkgeyByZXR1cm4gc3RydWN0OyB9XG4gIHJldHVybiB7XG4gICAgZGlzYWJsZV9zY2FsZV9pbjogY2RrdGYuYm9vbGVhblRvVGVycmFmb3JtKHN0cnVjdCEuZGlzYWJsZVNjYWxlSW4pLFxuICAgIHNjYWxlX2luX2Nvb2xkb3duOiBjZGt0Zi5udW1iZXJUb1RlcnJhZm9ybShzdHJ1Y3QhLnNjYWxlSW5Db29sZG93biksXG4gICAgc2NhbGVfb3V0X2Nvb2xkb3duOiBjZGt0Zi5udW1iZXJUb1RlcnJhZm9ybShzdHJ1Y3QhLnNjYWxlT3V0Q29vbGRvd24pLFxuICAgIHRhcmdldF92YWx1ZTogY2RrdGYubnVtYmVyVG9UZXJyYWZvcm0oc3RydWN0IS50YXJnZXRWYWx1ZSksXG4gIH1cbn1cblxuZXhwb3J0IGNsYXNzIERhdGFBd3NjY0R5bmFtb2RiR2xvYmFsVGFibGVXcml0ZVByb3Zpc2lvbmVkVGhyb3VnaHB1dFNldHRpbmdzV3JpdGVDYXBhY2l0eUF1dG9TY2FsaW5nU2V0dGluZ3MgZXh0ZW5kcyBjZGt0Zi5Db21wbGV4Q29tcHV0ZWRMaXN0IHtcblxuICAvLyBtYXhfY2FwYWNpdHkgLSBjb21wdXRlZDogdHJ1ZSwgb3B0aW9uYWw6IGZhbHNlLCByZXF1aXJlZDogZmFsc2VcbiAgcHVibGljIGdldCBtYXhDYXBhY2l0eSgpIHtcbiAgICByZXR1cm4gdGhpcy5nZXROdW1iZXJBdHRyaWJ1dGUoJ21heF9jYXBhY2l0eScpO1xuICB9XG5cbiAgLy8gbWluX2NhcGFjaXR5IC0gY29tcHV0ZWQ6IHRydWUsIG9wdGlvbmFsOiBmYWxzZSwgcmVxdWlyZWQ6IGZhbHNlXG4gIHB1YmxpYyBnZXQgbWluQ2FwYWNpdHkoKSB7XG4gICAgcmV0dXJuIHRoaXMuZ2V0TnVtYmVyQXR0cmlidXRlKCdtaW5fY2FwYWNpdHknKTtcbiAgfVxuXG4gIC8vIHNlZWRfY2FwYWNpdHkgLSBjb21wdXRlZDogdHJ1ZSwgb3B0aW9uYWw6IGZhbHNlLCByZXF1aXJlZDogZmFsc2VcbiAgcHVibGljIGdldCBzZWVkQ2FwYWNpdHkoKSB7XG4gICAgcmV0dXJuIHRoaXMuZ2V0TnVtYmVyQXR0cmlidXRlKCdzZWVkX2NhcGFjaXR5Jyk7XG4gIH1cblxuICAvLyB0YXJnZXRfdHJhY2tpbmdfc2NhbGluZ19wb2xpY3lfY29uZmlndXJhdGlvbiAtIGNvbXB1dGVkOiB0cnVlLCBvcHRpb25hbDogZmFsc2UsIHJlcXVpcmVkOiBmYWxzZVxuICBwdWJsaWMgZ2V0IHRhcmdldFRyYWNraW5nU2NhbGluZ1BvbGljeUNvbmZpZ3VyYXRpb24oKSB7XG4gICAgcmV0dXJuIHRoaXMuaW50ZXJwb2xhdGlvbkZvckF0dHJpYnV0ZSgndGFyZ2V0X3RyYWNraW5nX3NjYWxpbmdfcG9saWN5X2NvbmZpZ3VyYXRpb24nKSBhcyBhbnk7XG4gIH1cbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGRhdGFBd3NjY0R5bmFtb2RiR2xvYmFsVGFibGVXcml0ZVByb3Zpc2lvbmVkVGhyb3VnaHB1dFNldHRpbmdzV3JpdGVDYXBhY2l0eUF1dG9TY2FsaW5nU2V0dGluZ3NUb1RlcnJhZm9ybShzdHJ1Y3Q/OiBEYXRhQXdzY2NEeW5hbW9kYkdsb2JhbFRhYmxlV3JpdGVQcm92aXNpb25lZFRocm91Z2hwdXRTZXR0aW5nc1dyaXRlQ2FwYWNpdHlBdXRvU2NhbGluZ1NldHRpbmdzKTogYW55IHtcbiAgaWYgKCFjZGt0Zi5jYW5JbnNwZWN0KHN0cnVjdCkpIHsgcmV0dXJuIHN0cnVjdDsgfVxuICByZXR1cm4ge1xuICAgIG1heF9jYXBhY2l0eTogY2RrdGYubnVtYmVyVG9UZXJyYWZvcm0oc3RydWN0IS5tYXhDYXBhY2l0eSksXG4gICAgbWluX2NhcGFjaXR5OiBjZGt0Zi5udW1iZXJUb1RlcnJhZm9ybShzdHJ1Y3QhLm1pbkNhcGFjaXR5KSxcbiAgICBzZWVkX2NhcGFjaXR5OiBjZGt0Zi5udW1iZXJUb1RlcnJhZm9ybShzdHJ1Y3QhLnNlZWRDYXBhY2l0eSksXG4gICAgdGFyZ2V0X3RyYWNraW5nX3NjYWxpbmdfcG9saWN5X2NvbmZpZ3VyYXRpb246IGRhdGFBd3NjY0R5bmFtb2RiR2xvYmFsVGFibGVXcml0ZVByb3Zpc2lvbmVkVGhyb3VnaHB1dFNldHRpbmdzV3JpdGVDYXBhY2l0eUF1dG9TY2FsaW5nU2V0dGluZ3NUYXJnZXRUcmFja2luZ1NjYWxpbmdQb2xpY3lDb25maWd1cmF0aW9uVG9UZXJyYWZvcm0oc3RydWN0IS50YXJnZXRUcmFja2luZ1NjYWxpbmdQb2xpY3lDb25maWd1cmF0aW9uKSxcbiAgfVxufVxuXG5leHBvcnQgY2xhc3MgRGF0YUF3c2NjRHluYW1vZGJHbG9iYWxUYWJsZVdyaXRlUHJvdmlzaW9uZWRUaHJvdWdocHV0U2V0dGluZ3MgZXh0ZW5kcyBjZGt0Zi5Db21wbGV4Q29tcHV0ZWRMaXN0IHtcblxuICAvLyB3cml0ZV9jYXBhY2l0eV9hdXRvX3NjYWxpbmdfc2V0dGluZ3MgLSBjb21wdXRlZDogdHJ1ZSwgb3B0aW9uYWw6IGZhbHNlLCByZXF1aXJlZDogZmFsc2VcbiAgcHVibGljIGdldCB3cml0ZUNhcGFjaXR5QXV0b1NjYWxpbmdTZXR0aW5ncygpIHtcbiAgICByZXR1cm4gdGhpcy5pbnRlcnBvbGF0aW9uRm9yQXR0cmlidXRlKCd3cml0ZV9jYXBhY2l0eV9hdXRvX3NjYWxpbmdfc2V0dGluZ3MnKSBhcyBhbnk7XG4gIH1cbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGRhdGFBd3NjY0R5bmFtb2RiR2xvYmFsVGFibGVXcml0ZVByb3Zpc2lvbmVkVGhyb3VnaHB1dFNldHRpbmdzVG9UZXJyYWZvcm0oc3RydWN0PzogRGF0YUF3c2NjRHluYW1vZGJHbG9iYWxUYWJsZVdyaXRlUHJvdmlzaW9uZWRUaHJvdWdocHV0U2V0dGluZ3MpOiBhbnkge1xuICBpZiAoIWNka3RmLmNhbkluc3BlY3Qoc3RydWN0KSkgeyByZXR1cm4gc3RydWN0OyB9XG4gIHJldHVybiB7XG4gICAgd3JpdGVfY2FwYWNpdHlfYXV0b19zY2FsaW5nX3NldHRpbmdzOiBkYXRhQXdzY2NEeW5hbW9kYkdsb2JhbFRhYmxlV3JpdGVQcm92aXNpb25lZFRocm91Z2hwdXRTZXR0aW5nc1dyaXRlQ2FwYWNpdHlBdXRvU2NhbGluZ1NldHRpbmdzVG9UZXJyYWZvcm0oc3RydWN0IS53cml0ZUNhcGFjaXR5QXV0b1NjYWxpbmdTZXR0aW5ncyksXG4gIH1cbn1cblxuXG4vKipcbiogUmVwcmVzZW50cyBhIHtAbGluayBodHRwczovL3d3dy50ZXJyYWZvcm0uaW8vZG9jcy9wcm92aWRlcnMvYXdzY2MvZC9keW5hbW9kYl9nbG9iYWxfdGFibGUuaHRtbCBhd3NjY19keW5hbW9kYl9nbG9iYWxfdGFibGV9XG4qL1xuZXhwb3J0IGNsYXNzIERhdGFBd3NjY0R5bmFtb2RiR2xvYmFsVGFibGUgZXh0ZW5kcyBjZGt0Zi5UZXJyYWZvcm1EYXRhU291cmNlIHtcblxuICAvLyA9PT09PT09PT09PT09PT09PVxuICAvLyBTVEFUSUMgUFJPUEVSVElFU1xuICAvLyA9PT09PT09PT09PT09PT09PVxuICBwdWJsaWMgc3RhdGljIHJlYWRvbmx5IHRmUmVzb3VyY2VUeXBlOiBzdHJpbmcgPSBcImF3c2NjX2R5bmFtb2RiX2dsb2JhbF90YWJsZVwiO1xuXG4gIC8vID09PT09PT09PT09XG4gIC8vIElOSVRJQUxJWkVSXG4gIC8vID09PT09PT09PT09XG5cbiAgLyoqXG4gICogQ3JlYXRlIGEgbmV3IHtAbGluayBodHRwczovL3d3dy50ZXJyYWZvcm0uaW8vZG9jcy9wcm92aWRlcnMvYXdzY2MvZC9keW5hbW9kYl9nbG9iYWxfdGFibGUuaHRtbCBhd3NjY19keW5hbW9kYl9nbG9iYWxfdGFibGV9IERhdGEgU291cmNlXG4gICpcbiAgKiBAcGFyYW0gc2NvcGUgVGhlIHNjb3BlIGluIHdoaWNoIHRvIGRlZmluZSB0aGlzIGNvbnN0cnVjdFxuICAqIEBwYXJhbSBpZCBUaGUgc2NvcGVkIGNvbnN0cnVjdCBJRC4gTXVzdCBiZSB1bmlxdWUgYW1vbmdzdCBzaWJsaW5ncyBpbiB0aGUgc2FtZSBzY29wZVxuICAqIEBwYXJhbSBvcHRpb25zIERhdGFBd3NjY0R5bmFtb2RiR2xvYmFsVGFibGVDb25maWdcbiAgKi9cbiAgcHVibGljIGNvbnN0cnVjdG9yKHNjb3BlOiBDb25zdHJ1Y3QsIGlkOiBzdHJpbmcsIGNvbmZpZzogRGF0YUF3c2NjRHluYW1vZGJHbG9iYWxUYWJsZUNvbmZpZykge1xuICAgIHN1cGVyKHNjb3BlLCBpZCwge1xuICAgICAgdGVycmFmb3JtUmVzb3VyY2VUeXBlOiAnYXdzY2NfZHluYW1vZGJfZ2xvYmFsX3RhYmxlJyxcbiAgICAgIHRlcnJhZm9ybUdlbmVyYXRvck1ldGFkYXRhOiB7XG4gICAgICAgIHByb3ZpZGVyTmFtZTogJ2F3c2NjJ1xuICAgICAgfSxcbiAgICAgIHByb3ZpZGVyOiBjb25maWcucHJvdmlkZXIsXG4gICAgICBkZXBlbmRzT246IGNvbmZpZy5kZXBlbmRzT24sXG4gICAgICBjb3VudDogY29uZmlnLmNvdW50LFxuICAgICAgbGlmZWN5Y2xlOiBjb25maWcubGlmZWN5Y2xlXG4gICAgfSk7XG4gICAgdGhpcy5faWQgPSBjb25maWcuaWQ7XG4gIH1cblxuICAvLyA9PT09PT09PT09XG4gIC8vIEFUVFJJQlVURVNcbiAgLy8gPT09PT09PT09PVxuXG4gIC8vIGFybiAtIGNvbXB1dGVkOiB0cnVlLCBvcHRpb25hbDogZmFsc2UsIHJlcXVpcmVkOiBmYWxzZVxuICBwdWJsaWMgZ2V0IGFybigpIHtcbiAgICByZXR1cm4gdGhpcy5nZXRTdHJpbmdBdHRyaWJ1dGUoJ2FybicpO1xuICB9XG5cbiAgLy8gYXR0cmlidXRlX2RlZmluaXRpb25zIC0gY29tcHV0ZWQ6IHRydWUsIG9wdGlvbmFsOiBmYWxzZSwgcmVxdWlyZWQ6IGZhbHNlXG4gIHB1YmxpYyBnZXQgYXR0cmlidXRlRGVmaW5pdGlvbnMoKSB7XG4gICAgcmV0dXJuIHRoaXMuaW50ZXJwb2xhdGlvbkZvckF0dHJpYnV0ZSgnYXR0cmlidXRlX2RlZmluaXRpb25zJykgYXMgYW55O1xuICB9XG5cbiAgLy8gYmlsbGluZ19tb2RlIC0gY29tcHV0ZWQ6IHRydWUsIG9wdGlvbmFsOiBmYWxzZSwgcmVxdWlyZWQ6IGZhbHNlXG4gIHB1YmxpYyBnZXQgYmlsbGluZ01vZGUoKSB7XG4gICAgcmV0dXJuIHRoaXMuZ2V0U3RyaW5nQXR0cmlidXRlKCdiaWxsaW5nX21vZGUnKTtcbiAgfVxuXG4gIC8vIGdsb2JhbF9zZWNvbmRhcnlfaW5kZXhlcyAtIGNvbXB1dGVkOiB0cnVlLCBvcHRpb25hbDogZmFsc2UsIHJlcXVpcmVkOiBmYWxzZVxuICBwdWJsaWMgZ2V0IGdsb2JhbFNlY29uZGFyeUluZGV4ZXMoKSB7XG4gICAgcmV0dXJuIHRoaXMuaW50ZXJwb2xhdGlvbkZvckF0dHJpYnV0ZSgnZ2xvYmFsX3NlY29uZGFyeV9pbmRleGVzJykgYXMgYW55O1xuICB9XG5cbiAgLy8gaWQgLSBjb21wdXRlZDogZmFsc2UsIG9wdGlvbmFsOiBmYWxzZSwgcmVxdWlyZWQ6IHRydWVcbiAgcHJpdmF0ZSBfaWQ6IHN0cmluZztcbiAgcHVibGljIGdldCBpZCgpIHtcbiAgICByZXR1cm4gdGhpcy5nZXRTdHJpbmdBdHRyaWJ1dGUoJ2lkJyk7XG4gIH1cbiAgcHVibGljIHNldCBpZCh2YWx1ZTogc3RyaW5nKSB7XG4gICAgdGhpcy5faWQgPSB2YWx1ZTtcbiAgfVxuICAvLyBUZW1wb3JhcmlseSBleHBvc2UgaW5wdXQgdmFsdWUuIFVzZSB3aXRoIGNhdXRpb24uXG4gIHB1YmxpYyBnZXQgaWRJbnB1dCgpIHtcbiAgICByZXR1cm4gdGhpcy5faWRcbiAgfVxuXG4gIC8vIGtleV9zY2hlbWEgLSBjb21wdXRlZDogdHJ1ZSwgb3B0aW9uYWw6IGZhbHNlLCByZXF1aXJlZDogZmFsc2VcbiAgcHVibGljIGdldCBrZXlTY2hlbWEoKSB7XG4gICAgcmV0dXJuIHRoaXMuaW50ZXJwb2xhdGlvbkZvckF0dHJpYnV0ZSgna2V5X3NjaGVtYScpIGFzIGFueTtcbiAgfVxuXG4gIC8vIGxvY2FsX3NlY29uZGFyeV9pbmRleGVzIC0gY29tcHV0ZWQ6IHRydWUsIG9wdGlvbmFsOiBmYWxzZSwgcmVxdWlyZWQ6IGZhbHNlXG4gIHB1YmxpYyBnZXQgbG9jYWxTZWNvbmRhcnlJbmRleGVzKCkge1xuICAgIHJldHVybiB0aGlzLmludGVycG9sYXRpb25Gb3JBdHRyaWJ1dGUoJ2xvY2FsX3NlY29uZGFyeV9pbmRleGVzJykgYXMgYW55O1xuICB9XG5cbiAgLy8gcmVwbGljYXMgLSBjb21wdXRlZDogdHJ1ZSwgb3B0aW9uYWw6IGZhbHNlLCByZXF1aXJlZDogZmFsc2VcbiAgcHVibGljIGdldCByZXBsaWNhcygpIHtcbiAgICByZXR1cm4gdGhpcy5pbnRlcnBvbGF0aW9uRm9yQXR0cmlidXRlKCdyZXBsaWNhcycpIGFzIGFueTtcbiAgfVxuXG4gIC8vIHNzZV9zcGVjaWZpY2F0aW9uIC0gY29tcHV0ZWQ6IHRydWUsIG9wdGlvbmFsOiBmYWxzZSwgcmVxdWlyZWQ6IGZhbHNlXG4gIHB1YmxpYyBnZXQgc3NlU3BlY2lmaWNhdGlvbigpIHtcbiAgICByZXR1cm4gdGhpcy5pbnRlcnBvbGF0aW9uRm9yQXR0cmlidXRlKCdzc2Vfc3BlY2lmaWNhdGlvbicpIGFzIGFueTtcbiAgfVxuXG4gIC8vIHN0cmVhbV9hcm4gLSBjb21wdXRlZDogdHJ1ZSwgb3B0aW9uYWw6IGZhbHNlLCByZXF1aXJlZDogZmFsc2VcbiAgcHVibGljIGdldCBzdHJlYW1Bcm4oKSB7XG4gICAgcmV0dXJuIHRoaXMuZ2V0U3RyaW5nQXR0cmlidXRlKCdzdHJlYW1fYXJuJyk7XG4gIH1cblxuICAvLyBzdHJlYW1fc3BlY2lmaWNhdGlvbiAtIGNvbXB1dGVkOiB0cnVlLCBvcHRpb25hbDogZmFsc2UsIHJlcXVpcmVkOiBmYWxzZVxuICBwdWJsaWMgZ2V0IHN0cmVhbVNwZWNpZmljYXRpb24oKSB7XG4gICAgcmV0dXJuIHRoaXMuaW50ZXJwb2xhdGlvbkZvckF0dHJpYnV0ZSgnc3RyZWFtX3NwZWNpZmljYXRpb24nKSBhcyBhbnk7XG4gIH1cblxuICAvLyB0YWJsZV9pZCAtIGNvbXB1dGVkOiB0cnVlLCBvcHRpb25hbDogZmFsc2UsIHJlcXVpcmVkOiBmYWxzZVxuICBwdWJsaWMgZ2V0IHRhYmxlSWQoKSB7XG4gICAgcmV0dXJuIHRoaXMuZ2V0U3RyaW5nQXR0cmlidXRlKCd0YWJsZV9pZCcpO1xuICB9XG5cbiAgLy8gdGFibGVfbmFtZSAtIGNvbXB1dGVkOiB0cnVlLCBvcHRpb25hbDogZmFsc2UsIHJlcXVpcmVkOiBmYWxzZVxuICBwdWJsaWMgZ2V0IHRhYmxlTmFtZSgpIHtcbiAgICByZXR1cm4gdGhpcy5nZXRTdHJpbmdBdHRyaWJ1dGUoJ3RhYmxlX25hbWUnKTtcbiAgfVxuXG4gIC8vIHRpbWVfdG9fbGl2ZV9zcGVjaWZpY2F0aW9uIC0gY29tcHV0ZWQ6IHRydWUsIG9wdGlvbmFsOiBmYWxzZSwgcmVxdWlyZWQ6IGZhbHNlXG4gIHB1YmxpYyBnZXQgdGltZVRvTGl2ZVNwZWNpZmljYXRpb24oKSB7XG4gICAgcmV0dXJuIHRoaXMuaW50ZXJwb2xhdGlvbkZvckF0dHJpYnV0ZSgndGltZV90b19saXZlX3NwZWNpZmljYXRpb24nKSBhcyBhbnk7XG4gIH1cblxuICAvLyB3cml0ZV9wcm92aXNpb25lZF90aHJvdWdocHV0X3NldHRpbmdzIC0gY29tcHV0ZWQ6IHRydWUsIG9wdGlvbmFsOiBmYWxzZSwgcmVxdWlyZWQ6IGZhbHNlXG4gIHB1YmxpYyBnZXQgd3JpdGVQcm92aXNpb25lZFRocm91Z2hwdXRTZXR0aW5ncygpIHtcbiAgICByZXR1cm4gdGhpcy5pbnRlcnBvbGF0aW9uRm9yQXR0cmlidXRlKCd3cml0ZV9wcm92aXNpb25lZF90aHJvdWdocHV0X3NldHRpbmdzJykgYXMgYW55O1xuICB9XG5cbiAgLy8gPT09PT09PT09XG4gIC8vIFNZTlRIRVNJU1xuICAvLyA9PT09PT09PT1cblxuICBwcm90ZWN0ZWQgc3ludGhlc2l6ZUF0dHJpYnV0ZXMoKTogeyBbbmFtZTogc3RyaW5nXTogYW55IH0ge1xuICAgIHJldHVybiB7XG4gICAgICBpZDogY2RrdGYuc3RyaW5nVG9UZXJyYWZvcm0odGhpcy5faWQpLFxuICAgIH07XG4gIH1cbn1cbiJdfQ==