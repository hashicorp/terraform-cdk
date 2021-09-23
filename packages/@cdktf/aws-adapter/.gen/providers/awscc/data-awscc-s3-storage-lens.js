"use strict";
// https://www.terraform.io/docs/providers/awscc/d/s3_storage_lens.html
// generated from terraform resource schema
Object.defineProperty(exports, "__esModule", { value: true });
exports.DataAwsccS3StorageLens = exports.dataAwsccS3StorageLensTagsToTerraform = exports.DataAwsccS3StorageLensTags = exports.dataAwsccS3StorageLensStorageLensConfigurationToTerraform = exports.DataAwsccS3StorageLensStorageLensConfiguration = exports.dataAwsccS3StorageLensStorageLensConfigurationIncludeToTerraform = exports.DataAwsccS3StorageLensStorageLensConfigurationInclude = exports.dataAwsccS3StorageLensStorageLensConfigurationExcludeToTerraform = exports.DataAwsccS3StorageLensStorageLensConfigurationExclude = exports.dataAwsccS3StorageLensStorageLensConfigurationDataExportToTerraform = exports.DataAwsccS3StorageLensStorageLensConfigurationDataExport = exports.dataAwsccS3StorageLensStorageLensConfigurationDataExportS3BucketDestinationToTerraform = exports.DataAwsccS3StorageLensStorageLensConfigurationDataExportS3BucketDestination = exports.dataAwsccS3StorageLensStorageLensConfigurationAwsOrgToTerraform = exports.DataAwsccS3StorageLensStorageLensConfigurationAwsOrg = exports.dataAwsccS3StorageLensStorageLensConfigurationAccountLevelToTerraform = exports.DataAwsccS3StorageLensStorageLensConfigurationAccountLevel = exports.dataAwsccS3StorageLensStorageLensConfigurationAccountLevelBucketLevelToTerraform = exports.DataAwsccS3StorageLensStorageLensConfigurationAccountLevelBucketLevel = exports.dataAwsccS3StorageLensStorageLensConfigurationAccountLevelBucketLevelPrefixLevelToTerraform = exports.DataAwsccS3StorageLensStorageLensConfigurationAccountLevelBucketLevelPrefixLevel = exports.dataAwsccS3StorageLensStorageLensConfigurationAccountLevelBucketLevelPrefixLevelStorageMetricsToTerraform = exports.DataAwsccS3StorageLensStorageLensConfigurationAccountLevelBucketLevelPrefixLevelStorageMetrics = exports.dataAwsccS3StorageLensStorageLensConfigurationAccountLevelBucketLevelPrefixLevelStorageMetricsSelectionCriteriaToTerraform = exports.DataAwsccS3StorageLensStorageLensConfigurationAccountLevelBucketLevelPrefixLevelStorageMetricsSelectionCriteria = exports.dataAwsccS3StorageLensStorageLensConfigurationAccountLevelBucketLevelActivityMetricsToTerraform = exports.DataAwsccS3StorageLensStorageLensConfigurationAccountLevelBucketLevelActivityMetrics = exports.dataAwsccS3StorageLensStorageLensConfigurationAccountLevelActivityMetricsToTerraform = exports.DataAwsccS3StorageLensStorageLensConfigurationAccountLevelActivityMetrics = void 0;
const cdktf = require("cdktf");
class DataAwsccS3StorageLensStorageLensConfigurationAccountLevelActivityMetrics extends cdktf.ComplexComputedList {
    // is_enabled - computed: true, optional: false, required: false
    get isEnabled() {
        return this.getBooleanAttribute('is_enabled');
    }
}
exports.DataAwsccS3StorageLensStorageLensConfigurationAccountLevelActivityMetrics = DataAwsccS3StorageLensStorageLensConfigurationAccountLevelActivityMetrics;
function dataAwsccS3StorageLensStorageLensConfigurationAccountLevelActivityMetricsToTerraform(struct) {
    if (!cdktf.canInspect(struct)) {
        return struct;
    }
    return {
        is_enabled: cdktf.booleanToTerraform(struct.isEnabled),
    };
}
exports.dataAwsccS3StorageLensStorageLensConfigurationAccountLevelActivityMetricsToTerraform = dataAwsccS3StorageLensStorageLensConfigurationAccountLevelActivityMetricsToTerraform;
class DataAwsccS3StorageLensStorageLensConfigurationAccountLevelBucketLevelActivityMetrics extends cdktf.ComplexComputedList {
    // is_enabled - computed: true, optional: false, required: false
    get isEnabled() {
        return this.getBooleanAttribute('is_enabled');
    }
}
exports.DataAwsccS3StorageLensStorageLensConfigurationAccountLevelBucketLevelActivityMetrics = DataAwsccS3StorageLensStorageLensConfigurationAccountLevelBucketLevelActivityMetrics;
function dataAwsccS3StorageLensStorageLensConfigurationAccountLevelBucketLevelActivityMetricsToTerraform(struct) {
    if (!cdktf.canInspect(struct)) {
        return struct;
    }
    return {
        is_enabled: cdktf.booleanToTerraform(struct.isEnabled),
    };
}
exports.dataAwsccS3StorageLensStorageLensConfigurationAccountLevelBucketLevelActivityMetricsToTerraform = dataAwsccS3StorageLensStorageLensConfigurationAccountLevelBucketLevelActivityMetricsToTerraform;
class DataAwsccS3StorageLensStorageLensConfigurationAccountLevelBucketLevelPrefixLevelStorageMetricsSelectionCriteria extends cdktf.ComplexComputedList {
    // delimiter - computed: true, optional: false, required: false
    get delimiter() {
        return this.getStringAttribute('delimiter');
    }
    // max_depth - computed: true, optional: false, required: false
    get maxDepth() {
        return this.getNumberAttribute('max_depth');
    }
    // min_storage_bytes_percentage - computed: true, optional: false, required: false
    get minStorageBytesPercentage() {
        return this.getNumberAttribute('min_storage_bytes_percentage');
    }
}
exports.DataAwsccS3StorageLensStorageLensConfigurationAccountLevelBucketLevelPrefixLevelStorageMetricsSelectionCriteria = DataAwsccS3StorageLensStorageLensConfigurationAccountLevelBucketLevelPrefixLevelStorageMetricsSelectionCriteria;
function dataAwsccS3StorageLensStorageLensConfigurationAccountLevelBucketLevelPrefixLevelStorageMetricsSelectionCriteriaToTerraform(struct) {
    if (!cdktf.canInspect(struct)) {
        return struct;
    }
    return {
        delimiter: cdktf.stringToTerraform(struct.delimiter),
        max_depth: cdktf.numberToTerraform(struct.maxDepth),
        min_storage_bytes_percentage: cdktf.numberToTerraform(struct.minStorageBytesPercentage),
    };
}
exports.dataAwsccS3StorageLensStorageLensConfigurationAccountLevelBucketLevelPrefixLevelStorageMetricsSelectionCriteriaToTerraform = dataAwsccS3StorageLensStorageLensConfigurationAccountLevelBucketLevelPrefixLevelStorageMetricsSelectionCriteriaToTerraform;
class DataAwsccS3StorageLensStorageLensConfigurationAccountLevelBucketLevelPrefixLevelStorageMetrics extends cdktf.ComplexComputedList {
    // is_enabled - computed: true, optional: false, required: false
    get isEnabled() {
        return this.getBooleanAttribute('is_enabled');
    }
    // selection_criteria - computed: true, optional: false, required: false
    get selectionCriteria() {
        return this.interpolationForAttribute('selection_criteria');
    }
}
exports.DataAwsccS3StorageLensStorageLensConfigurationAccountLevelBucketLevelPrefixLevelStorageMetrics = DataAwsccS3StorageLensStorageLensConfigurationAccountLevelBucketLevelPrefixLevelStorageMetrics;
function dataAwsccS3StorageLensStorageLensConfigurationAccountLevelBucketLevelPrefixLevelStorageMetricsToTerraform(struct) {
    if (!cdktf.canInspect(struct)) {
        return struct;
    }
    return {
        is_enabled: cdktf.booleanToTerraform(struct.isEnabled),
        selection_criteria: dataAwsccS3StorageLensStorageLensConfigurationAccountLevelBucketLevelPrefixLevelStorageMetricsSelectionCriteriaToTerraform(struct.selectionCriteria),
    };
}
exports.dataAwsccS3StorageLensStorageLensConfigurationAccountLevelBucketLevelPrefixLevelStorageMetricsToTerraform = dataAwsccS3StorageLensStorageLensConfigurationAccountLevelBucketLevelPrefixLevelStorageMetricsToTerraform;
class DataAwsccS3StorageLensStorageLensConfigurationAccountLevelBucketLevelPrefixLevel extends cdktf.ComplexComputedList {
    // storage_metrics - computed: true, optional: false, required: false
    get storageMetrics() {
        return this.interpolationForAttribute('storage_metrics');
    }
}
exports.DataAwsccS3StorageLensStorageLensConfigurationAccountLevelBucketLevelPrefixLevel = DataAwsccS3StorageLensStorageLensConfigurationAccountLevelBucketLevelPrefixLevel;
function dataAwsccS3StorageLensStorageLensConfigurationAccountLevelBucketLevelPrefixLevelToTerraform(struct) {
    if (!cdktf.canInspect(struct)) {
        return struct;
    }
    return {
        storage_metrics: dataAwsccS3StorageLensStorageLensConfigurationAccountLevelBucketLevelPrefixLevelStorageMetricsToTerraform(struct.storageMetrics),
    };
}
exports.dataAwsccS3StorageLensStorageLensConfigurationAccountLevelBucketLevelPrefixLevelToTerraform = dataAwsccS3StorageLensStorageLensConfigurationAccountLevelBucketLevelPrefixLevelToTerraform;
class DataAwsccS3StorageLensStorageLensConfigurationAccountLevelBucketLevel extends cdktf.ComplexComputedList {
    // activity_metrics - computed: true, optional: false, required: false
    get activityMetrics() {
        return this.interpolationForAttribute('activity_metrics');
    }
    // prefix_level - computed: true, optional: false, required: false
    get prefixLevel() {
        return this.interpolationForAttribute('prefix_level');
    }
}
exports.DataAwsccS3StorageLensStorageLensConfigurationAccountLevelBucketLevel = DataAwsccS3StorageLensStorageLensConfigurationAccountLevelBucketLevel;
function dataAwsccS3StorageLensStorageLensConfigurationAccountLevelBucketLevelToTerraform(struct) {
    if (!cdktf.canInspect(struct)) {
        return struct;
    }
    return {
        activity_metrics: dataAwsccS3StorageLensStorageLensConfigurationAccountLevelBucketLevelActivityMetricsToTerraform(struct.activityMetrics),
        prefix_level: dataAwsccS3StorageLensStorageLensConfigurationAccountLevelBucketLevelPrefixLevelToTerraform(struct.prefixLevel),
    };
}
exports.dataAwsccS3StorageLensStorageLensConfigurationAccountLevelBucketLevelToTerraform = dataAwsccS3StorageLensStorageLensConfigurationAccountLevelBucketLevelToTerraform;
class DataAwsccS3StorageLensStorageLensConfigurationAccountLevel extends cdktf.ComplexComputedList {
    // activity_metrics - computed: true, optional: false, required: false
    get activityMetrics() {
        return this.interpolationForAttribute('activity_metrics');
    }
    // bucket_level - computed: true, optional: false, required: false
    get bucketLevel() {
        return this.interpolationForAttribute('bucket_level');
    }
}
exports.DataAwsccS3StorageLensStorageLensConfigurationAccountLevel = DataAwsccS3StorageLensStorageLensConfigurationAccountLevel;
function dataAwsccS3StorageLensStorageLensConfigurationAccountLevelToTerraform(struct) {
    if (!cdktf.canInspect(struct)) {
        return struct;
    }
    return {
        activity_metrics: dataAwsccS3StorageLensStorageLensConfigurationAccountLevelActivityMetricsToTerraform(struct.activityMetrics),
        bucket_level: dataAwsccS3StorageLensStorageLensConfigurationAccountLevelBucketLevelToTerraform(struct.bucketLevel),
    };
}
exports.dataAwsccS3StorageLensStorageLensConfigurationAccountLevelToTerraform = dataAwsccS3StorageLensStorageLensConfigurationAccountLevelToTerraform;
class DataAwsccS3StorageLensStorageLensConfigurationAwsOrg extends cdktf.ComplexComputedList {
    // arn - computed: true, optional: false, required: false
    get arn() {
        return this.getStringAttribute('arn');
    }
}
exports.DataAwsccS3StorageLensStorageLensConfigurationAwsOrg = DataAwsccS3StorageLensStorageLensConfigurationAwsOrg;
function dataAwsccS3StorageLensStorageLensConfigurationAwsOrgToTerraform(struct) {
    if (!cdktf.canInspect(struct)) {
        return struct;
    }
    return {
        arn: cdktf.stringToTerraform(struct.arn),
    };
}
exports.dataAwsccS3StorageLensStorageLensConfigurationAwsOrgToTerraform = dataAwsccS3StorageLensStorageLensConfigurationAwsOrgToTerraform;
class DataAwsccS3StorageLensStorageLensConfigurationDataExportS3BucketDestination extends cdktf.ComplexComputedList {
    // account_id - computed: true, optional: false, required: false
    get accountId() {
        return this.getStringAttribute('account_id');
    }
    // arn - computed: true, optional: false, required: false
    get arn() {
        return this.getStringAttribute('arn');
    }
    // encryption - computed: true, optional: false, required: false
    get encryption() {
        return this.interpolationForAttribute('encryption');
    }
    // format - computed: true, optional: false, required: false
    get format() {
        return this.getStringAttribute('format');
    }
    // output_schema_version - computed: true, optional: false, required: false
    get outputSchemaVersion() {
        return this.getStringAttribute('output_schema_version');
    }
    // prefix - computed: true, optional: false, required: false
    get prefix() {
        return this.getStringAttribute('prefix');
    }
}
exports.DataAwsccS3StorageLensStorageLensConfigurationDataExportS3BucketDestination = DataAwsccS3StorageLensStorageLensConfigurationDataExportS3BucketDestination;
function dataAwsccS3StorageLensStorageLensConfigurationDataExportS3BucketDestinationToTerraform(struct) {
    if (!cdktf.canInspect(struct)) {
        return struct;
    }
    return {
        account_id: cdktf.stringToTerraform(struct.accountId),
        arn: cdktf.stringToTerraform(struct.arn),
        encryption: cdktf.hashMapper(cdktf.stringToTerraform)(struct.encryption),
        format: cdktf.stringToTerraform(struct.format),
        output_schema_version: cdktf.stringToTerraform(struct.outputSchemaVersion),
        prefix: cdktf.stringToTerraform(struct.prefix),
    };
}
exports.dataAwsccS3StorageLensStorageLensConfigurationDataExportS3BucketDestinationToTerraform = dataAwsccS3StorageLensStorageLensConfigurationDataExportS3BucketDestinationToTerraform;
class DataAwsccS3StorageLensStorageLensConfigurationDataExport extends cdktf.ComplexComputedList {
    // s3_bucket_destination - computed: true, optional: false, required: false
    get s3BucketDestination() {
        return this.interpolationForAttribute('s3_bucket_destination');
    }
}
exports.DataAwsccS3StorageLensStorageLensConfigurationDataExport = DataAwsccS3StorageLensStorageLensConfigurationDataExport;
function dataAwsccS3StorageLensStorageLensConfigurationDataExportToTerraform(struct) {
    if (!cdktf.canInspect(struct)) {
        return struct;
    }
    return {
        s3_bucket_destination: dataAwsccS3StorageLensStorageLensConfigurationDataExportS3BucketDestinationToTerraform(struct.s3BucketDestination),
    };
}
exports.dataAwsccS3StorageLensStorageLensConfigurationDataExportToTerraform = dataAwsccS3StorageLensStorageLensConfigurationDataExportToTerraform;
class DataAwsccS3StorageLensStorageLensConfigurationExclude extends cdktf.ComplexComputedList {
    // buckets - computed: true, optional: false, required: false
    get buckets() {
        return this.getListAttribute('buckets');
    }
    // regions - computed: true, optional: false, required: false
    get regions() {
        return this.getListAttribute('regions');
    }
}
exports.DataAwsccS3StorageLensStorageLensConfigurationExclude = DataAwsccS3StorageLensStorageLensConfigurationExclude;
function dataAwsccS3StorageLensStorageLensConfigurationExcludeToTerraform(struct) {
    if (!cdktf.canInspect(struct)) {
        return struct;
    }
    return {
        buckets: cdktf.listMapper(cdktf.stringToTerraform)(struct.buckets),
        regions: cdktf.listMapper(cdktf.stringToTerraform)(struct.regions),
    };
}
exports.dataAwsccS3StorageLensStorageLensConfigurationExcludeToTerraform = dataAwsccS3StorageLensStorageLensConfigurationExcludeToTerraform;
class DataAwsccS3StorageLensStorageLensConfigurationInclude extends cdktf.ComplexComputedList {
    // buckets - computed: true, optional: false, required: false
    get buckets() {
        return this.getListAttribute('buckets');
    }
    // regions - computed: true, optional: false, required: false
    get regions() {
        return this.getListAttribute('regions');
    }
}
exports.DataAwsccS3StorageLensStorageLensConfigurationInclude = DataAwsccS3StorageLensStorageLensConfigurationInclude;
function dataAwsccS3StorageLensStorageLensConfigurationIncludeToTerraform(struct) {
    if (!cdktf.canInspect(struct)) {
        return struct;
    }
    return {
        buckets: cdktf.listMapper(cdktf.stringToTerraform)(struct.buckets),
        regions: cdktf.listMapper(cdktf.stringToTerraform)(struct.regions),
    };
}
exports.dataAwsccS3StorageLensStorageLensConfigurationIncludeToTerraform = dataAwsccS3StorageLensStorageLensConfigurationIncludeToTerraform;
class DataAwsccS3StorageLensStorageLensConfiguration extends cdktf.ComplexComputedList {
    // account_level - computed: true, optional: false, required: false
    get accountLevel() {
        return this.interpolationForAttribute('account_level');
    }
    // aws_org - computed: true, optional: false, required: false
    get awsOrg() {
        return this.interpolationForAttribute('aws_org');
    }
    // data_export - computed: true, optional: false, required: false
    get dataExport() {
        return this.interpolationForAttribute('data_export');
    }
    // exclude - computed: true, optional: false, required: false
    get exclude() {
        return this.interpolationForAttribute('exclude');
    }
    // id - computed: true, optional: false, required: false
    get id() {
        return this.getStringAttribute('id');
    }
    // include - computed: true, optional: false, required: false
    get include() {
        return this.interpolationForAttribute('include');
    }
    // is_enabled - computed: true, optional: false, required: false
    get isEnabled() {
        return this.getBooleanAttribute('is_enabled');
    }
    // storage_lens_arn - computed: true, optional: false, required: false
    get storageLensArn() {
        return this.getStringAttribute('storage_lens_arn');
    }
}
exports.DataAwsccS3StorageLensStorageLensConfiguration = DataAwsccS3StorageLensStorageLensConfiguration;
function dataAwsccS3StorageLensStorageLensConfigurationToTerraform(struct) {
    if (!cdktf.canInspect(struct)) {
        return struct;
    }
    return {
        account_level: dataAwsccS3StorageLensStorageLensConfigurationAccountLevelToTerraform(struct.accountLevel),
        aws_org: dataAwsccS3StorageLensStorageLensConfigurationAwsOrgToTerraform(struct.awsOrg),
        data_export: dataAwsccS3StorageLensStorageLensConfigurationDataExportToTerraform(struct.dataExport),
        exclude: dataAwsccS3StorageLensStorageLensConfigurationExcludeToTerraform(struct.exclude),
        id: cdktf.stringToTerraform(struct.id),
        include: dataAwsccS3StorageLensStorageLensConfigurationIncludeToTerraform(struct.include),
        is_enabled: cdktf.booleanToTerraform(struct.isEnabled),
        storage_lens_arn: cdktf.stringToTerraform(struct.storageLensArn),
    };
}
exports.dataAwsccS3StorageLensStorageLensConfigurationToTerraform = dataAwsccS3StorageLensStorageLensConfigurationToTerraform;
class DataAwsccS3StorageLensTags extends cdktf.ComplexComputedList {
    // key - computed: true, optional: false, required: false
    get key() {
        return this.getStringAttribute('key');
    }
    // value - computed: true, optional: false, required: false
    get value() {
        return this.getStringAttribute('value');
    }
}
exports.DataAwsccS3StorageLensTags = DataAwsccS3StorageLensTags;
function dataAwsccS3StorageLensTagsToTerraform(struct) {
    if (!cdktf.canInspect(struct)) {
        return struct;
    }
    return {
        key: cdktf.stringToTerraform(struct.key),
        value: cdktf.stringToTerraform(struct.value),
    };
}
exports.dataAwsccS3StorageLensTagsToTerraform = dataAwsccS3StorageLensTagsToTerraform;
/**
* Represents a {@link https://www.terraform.io/docs/providers/awscc/d/s3_storage_lens.html awscc_s3_storage_lens}
*/
class DataAwsccS3StorageLens extends cdktf.TerraformDataSource {
    // ===========
    // INITIALIZER
    // ===========
    /**
    * Create a new {@link https://www.terraform.io/docs/providers/awscc/d/s3_storage_lens.html awscc_s3_storage_lens} Data Source
    *
    * @param scope The scope in which to define this construct
    * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
    * @param options DataAwsccS3StorageLensConfig
    */
    constructor(scope, id, config) {
        super(scope, id, {
            terraformResourceType: 'awscc_s3_storage_lens',
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
    // storage_lens_configuration - computed: true, optional: false, required: false
    get storageLensConfiguration() {
        return this.interpolationForAttribute('storage_lens_configuration');
    }
    // tags - computed: true, optional: false, required: false
    get tags() {
        return this.interpolationForAttribute('tags');
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
exports.DataAwsccS3StorageLens = DataAwsccS3StorageLens;
// =================
// STATIC PROPERTIES
// =================
DataAwsccS3StorageLens.tfResourceType = "awscc_s3_storage_lens";
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZGF0YS1hd3NjYy1zMy1zdG9yYWdlLWxlbnMuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyJkYXRhLWF3c2NjLXMzLXN0b3JhZ2UtbGVucy50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiO0FBQUEsdUVBQXVFO0FBQ3ZFLDJDQUEyQzs7O0FBRzNDLCtCQUErQjtBQVkvQixNQUFhLHlFQUEwRSxTQUFRLEtBQUssQ0FBQyxtQkFBbUI7SUFFdEgsZ0VBQWdFO0lBQ2hFLElBQVcsU0FBUztRQUNsQixPQUFPLElBQUksQ0FBQyxtQkFBbUIsQ0FBQyxZQUFZLENBQUMsQ0FBQztJQUNoRCxDQUFDO0NBQ0Y7QUFORCw4SkFNQztBQUVELFNBQWdCLG9GQUFvRixDQUFDLE1BQWtGO0lBQ3JMLElBQUksQ0FBQyxLQUFLLENBQUMsVUFBVSxDQUFDLE1BQU0sQ0FBQyxFQUFFO1FBQUUsT0FBTyxNQUFNLENBQUM7S0FBRTtJQUNqRCxPQUFPO1FBQ0wsVUFBVSxFQUFFLEtBQUssQ0FBQyxrQkFBa0IsQ0FBQyxNQUFPLENBQUMsU0FBUyxDQUFDO0tBQ3hELENBQUE7QUFDSCxDQUFDO0FBTEQsb0xBS0M7QUFFRCxNQUFhLG9GQUFxRixTQUFRLEtBQUssQ0FBQyxtQkFBbUI7SUFFakksZ0VBQWdFO0lBQ2hFLElBQVcsU0FBUztRQUNsQixPQUFPLElBQUksQ0FBQyxtQkFBbUIsQ0FBQyxZQUFZLENBQUMsQ0FBQztJQUNoRCxDQUFDO0NBQ0Y7QUFORCxvTEFNQztBQUVELFNBQWdCLCtGQUErRixDQUFDLE1BQTZGO0lBQzNNLElBQUksQ0FBQyxLQUFLLENBQUMsVUFBVSxDQUFDLE1BQU0sQ0FBQyxFQUFFO1FBQUUsT0FBTyxNQUFNLENBQUM7S0FBRTtJQUNqRCxPQUFPO1FBQ0wsVUFBVSxFQUFFLEtBQUssQ0FBQyxrQkFBa0IsQ0FBQyxNQUFPLENBQUMsU0FBUyxDQUFDO0tBQ3hELENBQUE7QUFDSCxDQUFDO0FBTEQsME1BS0M7QUFFRCxNQUFhLCtHQUFnSCxTQUFRLEtBQUss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QixvQkFBb0I7QUFDRyxxQ0FBYyxHQUFXLHVCQUF1QixDQUFDIiwic291cmNlc0NvbnRlbnQiOlsiLy8gaHR0cHM6Ly93d3cudGVycmFmb3JtLmlvL2RvY3MvcHJvdmlkZXJzL2F3c2NjL2QvczNfc3RvcmFnZV9sZW5zLmh0bWxcbi8vIGdlbmVyYXRlZCBmcm9tIHRlcnJhZm9ybSByZXNvdXJjZSBzY2hlbWFcblxuaW1wb3J0IHsgQ29uc3RydWN0IH0gZnJvbSAnY29uc3RydWN0cyc7XG5pbXBvcnQgKiBhcyBjZGt0ZiBmcm9tICdjZGt0Zic7XG5cbi8vIENvbmZpZ3VyYXRpb25cblxuZXhwb3J0IGludGVyZmFjZSBEYXRhQXdzY2NTM1N0b3JhZ2VMZW5zQ29uZmlnIGV4dGVuZHMgY2RrdGYuVGVycmFmb3JtTWV0YUFyZ3VtZW50cyB7XG4gIC8qKlxuICAqIFVuaXF1ZWx5IGlkZW50aWZpZXMgdGhlIHJlc291cmNlLlxuICAqIFxuICAqIERvY3MgYXQgVGVycmFmb3JtIFJlZ2lzdHJ5OiB7QGxpbmsgaHR0cHM6Ly93d3cudGVycmFmb3JtLmlvL2RvY3MvcHJvdmlkZXJzL2F3c2NjL2QvczNfc3RvcmFnZV9sZW5zLmh0bWwjaWQgRGF0YUF3c2NjUzNTdG9yYWdlTGVucyNpZH1cbiAgKi9cbiAgcmVhZG9ubHkgaWQ6IHN0cmluZztcbn1cbmV4cG9ydCBjbGFzcyBEYXRhQXdzY2NTM1N0b3JhZ2VMZW5zU3RvcmFnZUxlbnNDb25maWd1cmF0aW9uQWNjb3VudExldmVsQWN0aXZpdHlNZXRyaWNzIGV4dGVuZHMgY2RrdGYuQ29tcGxleENvbXB1dGVkTGlzdCB7XG5cbiAgLy8gaXNfZW5hYmxlZCAtIGNvbXB1dGVkOiB0cnVlLCBvcHRpb25hbDogZmFsc2UsIHJlcXVpcmVkOiBmYWxzZVxuICBwdWJsaWMgZ2V0IGlzRW5hYmxlZCgpIHtcbiAgICByZXR1cm4gdGhpcy5nZXRCb29sZWFuQXR0cmlidXRlKCdpc19lbmFibGVkJyk7XG4gIH1cbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGRhdGFBd3NjY1MzU3RvcmFnZUxlbnNTdG9yYWdlTGVuc0NvbmZpZ3VyYXRpb25BY2NvdW50TGV2ZWxBY3Rpdml0eU1ldHJpY3NUb1RlcnJhZm9ybShzdHJ1Y3Q/OiBEYXRhQXdzY2NTM1N0b3JhZ2VMZW5zU3RvcmFnZUxlbnNDb25maWd1cmF0aW9uQWNjb3VudExldmVsQWN0aXZpdHlNZXRyaWNzKTogYW55IHtcbiAgaWYgKCFjZGt0Zi5jYW5JbnNwZWN0KHN0cnVjdCkpIHsgcmV0dXJuIHN0cnVjdDsgfVxuICByZXR1cm4ge1xuICAgIGlzX2VuYWJsZWQ6IGNka3RmLmJvb2xlYW5Ub1RlcnJhZm9ybShzdHJ1Y3QhLmlzRW5hYmxlZCksXG4gIH1cbn1cblxuZXhwb3J0IGNsYXNzIERhdGFBd3NjY1MzU3RvcmFnZUxlbnNTdG9yYWdlTGVuc0NvbmZpZ3VyYXRpb25BY2NvdW50TGV2ZWxCdWNrZXRMZXZlbEFjdGl2aXR5TWV0cmljcyBleHRlbmRzIGNka3RmLkNvbXBsZXhDb21wdXRlZExpc3Qge1xuXG4gIC8vIGlzX2VuYWJsZWQgLSBjb21wdXRlZDogdHJ1ZSwgb3B0aW9uYWw6IGZhbHNlLCByZXF1aXJlZDogZmFsc2VcbiAgcHVibGljIGdldCBpc0VuYWJsZWQoKSB7XG4gICAgcmV0dXJuIHRoaXMuZ2V0Qm9vbGVhbkF0dHJpYnV0ZSgnaXNfZW5hYmxlZCcpO1xuICB9XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBkYXRhQXdzY2NTM1N0b3JhZ2VMZW5zU3RvcmFnZUxlbnNDb25maWd1cmF0aW9uQWNjb3VudExldmVsQnVja2V0TGV2ZWxBY3Rpdml0eU1ldHJpY3NUb1RlcnJhZm9ybShzdHJ1Y3Q/OiBEYXRhQXdzY2NTM1N0b3JhZ2VMZW5zU3RvcmFnZUxlbnNDb25maWd1cmF0aW9uQWNjb3VudExldmVsQnVja2V0TGV2ZWxBY3Rpdml0eU1ldHJpY3MpOiBhbnkge1xuICBpZiAoIWNka3RmLmNhbkluc3BlY3Qoc3RydWN0KSkgeyByZXR1cm4gc3RydWN0OyB9XG4gIHJldHVybiB7XG4gICAgaXNfZW5hYmxlZDogY2RrdGYuYm9vbGVhblRvVGVycmFmb3JtKHN0cnVjdCEuaXNFbmFibGVkKSxcbiAgfVxufVxuXG5leHBvcnQgY2xhc3MgRGF0YUF3c2NjUzNTdG9yYWdlTGVuc1N0b3JhZ2VMZW5zQ29uZmlndXJhdGlvbkFjY291bnRMZXZlbEJ1Y2tldExldmVsUHJlZml4TGV2ZWxTdG9yYWdlTWV0cmljc1NlbGVjdGlvbkNyaXRlcmlhIGV4dGVuZHMgY2RrdGYuQ29tcGxleENvbXB1dGVkTGlzdCB7XG5cbiAgLy8gZGVsaW1pdGVyIC0gY29tcHV0ZWQ6IHRydWUsIG9wdGlvbmFsOiBmYWxzZSwgcmVxdWlyZWQ6IGZhbHNlXG4gIHB1YmxpYyBnZXQgZGVsaW1pdGVyKCkge1xuICAgIHJldHVybiB0aGlzLmdldFN0cmluZ0F0dHJpYnV0ZSgnZGVsaW1pdGVyJyk7XG4gIH1cblxuICAvLyBtYXhfZGVwdGggLSBjb21wdXRlZDogdHJ1ZSwgb3B0aW9uYWw6IGZhbHNlLCByZXF1aXJlZDogZmFsc2VcbiAgcHVibGljIGdldCBtYXhEZXB0aCgpIHtcbiAgICByZXR1cm4gdGhpcy5nZXROdW1iZXJBdHRyaWJ1dGUoJ21heF9kZXB0aCcpO1xuICB9XG5cbiAgLy8gbWluX3N0b3JhZ2VfYnl0ZXNfcGVyY2VudGFnZSAtIGNvbXB1dGVkOiB0cnVlLCBvcHRpb25hbDogZmFsc2UsIHJlcXVpcmVkOiBmYWxzZVxuICBwdWJsaWMgZ2V0IG1pblN0b3JhZ2VCeXRlc1BlcmNlbnRhZ2UoKSB7XG4gICAgcmV0dXJuIHRoaXMuZ2V0TnVtYmVyQXR0cmlidXRlKCdtaW5fc3RvcmFnZV9ieXRlc19wZXJjZW50YWdlJyk7XG4gIH1cbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGRhdGFBd3NjY1MzU3RvcmFnZUxlbnNTdG9yYWdlTGVuc0NvbmZpZ3VyYXRpb25BY2NvdW50TGV2ZWxCdWNrZXRMZXZlbFByZWZpeExldmVsU3RvcmFnZU1ldHJpY3NTZWxlY3Rpb25Dcml0ZXJpYVRvVGVycmFmb3JtKHN0cnVjdD86IERhdGFBd3NjY1MzU3RvcmFnZUxlbnNTdG9yYWdlTGVuc0NvbmZpZ3VyYXRpb25BY2NvdW50TGV2ZWxCdWNrZXRMZXZlbFByZWZpeExldmVsU3RvcmFnZU1ldHJpY3NTZWxlY3Rpb25Dcml0ZXJpYSk6IGFueSB7XG4gIGlmICghY2RrdGYuY2FuSW5zcGVjdChzdHJ1Y3QpKSB7IHJldHVybiBzdHJ1Y3Q7IH1cbiAgcmV0dXJuIHtcbiAgICBkZWxpbWl0ZXI6IGNka3RmLnN0cmluZ1RvVGVycmFmb3JtKHN0cnVjdCEuZGVsaW1pdGVyKSxcbiAgICBtYXhfZGVwdGg6IGNka3RmLm51bWJlclRvVGVycmFmb3JtKHN0cnVjdCEubWF4RGVwdGgpLFxuICAgIG1pbl9zdG9yYWdlX2J5dGVzX3BlcmNlbnRhZ2U6IGNka3RmLm51bWJlclRvVGVycmFmb3JtKHN0cnVjdCEubWluU3RvcmFnZUJ5dGVzUGVyY2VudGFnZSksXG4gIH1cbn1cblxuZXhwb3J0IGNsYXNzIERhdGFBd3NjY1MzU3RvcmFnZUxlbnNTdG9yYWdlTGVuc0NvbmZpZ3VyYXRpb25BY2NvdW50TGV2ZWxCdWNrZXRMZXZlbFByZWZpeExldmVsU3RvcmFnZU1ldHJpY3MgZXh0ZW5kcyBjZGt0Zi5Db21wbGV4Q29tcHV0ZWRMaXN0IHtcblxuICAvLyBpc19lbmFibGVkIC0gY29tcHV0ZWQ6IHRydWUsIG9wdGlvbmFsOiBmYWxzZSwgcmVxdWlyZWQ6IGZhbHNlXG4gIHB1YmxpYyBnZXQgaXNFbmFibGVkKCkge1xuICAgIHJldHVybiB0aGlzLmdldEJvb2xlYW5BdHRyaWJ1dGUoJ2lzX2VuYWJsZWQnKTtcbiAgfVxuXG4gIC8vIHNlbGVjdGlvbl9jcml0ZXJpYSAtIGNvbXB1dGVkOiB0cnVlLCBvcHRpb25hbDogZmFsc2UsIHJlcXVpcmVkOiBmYWxzZVxuICBwdWJsaWMgZ2V0IHNlbGVjdGlvbkNyaXRlcmlhKCkge1xuICAgIHJldHVybiB0aGlzLmludGVycG9sYXRpb25Gb3JBdHRyaWJ1dGUoJ3NlbGVjdGlvbl9jcml0ZXJpYScpIGFzIGFueTtcbiAgfVxufVxuXG5leHBvcnQgZnVuY3Rpb24gZGF0YUF3c2NjUzNTdG9yYWdlTGVuc1N0b3JhZ2VMZW5zQ29uZmlndXJhdGlvbkFjY291bnRMZXZlbEJ1Y2tldExldmVsUHJlZml4TGV2ZWxTdG9yYWdlTWV0cmljc1RvVGVycmFmb3JtKHN0cnVjdD86IERhdGFBd3NjY1MzU3RvcmFnZUxlbnNTdG9yYWdlTGVuc0NvbmZpZ3VyYXRpb25BY2NvdW50TGV2ZWxCdWNrZXRMZXZlbFByZWZpeExldmVsU3RvcmFnZU1ldHJpY3MpOiBhbnkge1xuICBpZiAoIWNka3RmLmNhbkluc3BlY3Qoc3RydWN0KSkgeyByZXR1cm4gc3RydWN0OyB9XG4gIHJldHVybiB7XG4gICAgaXNfZW5hYmxlZDogY2RrdGYuYm9vbGVhblRvVGVycmFmb3JtKHN0cnVjdCEuaXNFbmFibGVkKSxcbiAgICBzZWxlY3Rpb25fY3JpdGVyaWE6IGRhdGFBd3NjY1MzU3RvcmFnZUxlbnNTdG9yYWdlTGVuc0NvbmZpZ3VyYXRpb25BY2NvdW50TGV2ZWxCdWNrZXRMZXZlbFByZWZpeExldmVsU3RvcmFnZU1ldHJpY3NTZWxlY3Rpb25Dcml0ZXJpYVRvVGVycmFmb3JtKHN0cnVjdCEuc2VsZWN0aW9uQ3JpdGVyaWEpLFxuICB9XG59XG5cbmV4cG9ydCBjbGFzcyBEYXRhQXdzY2NTM1N0b3JhZ2VMZW5zU3RvcmFnZUxlbnNDb25maWd1cmF0aW9uQWNjb3VudExldmVsQnVja2V0TGV2ZWxQcmVmaXhMZXZlbCBleHRlbmRzIGNka3RmLkNvbXBsZXhDb21wdXRlZExpc3Qge1xuXG4gIC8vIHN0b3JhZ2VfbWV0cmljcyAtIGNvbXB1dGVkOiB0cnVlLCBvcHRpb25hbDogZmFsc2UsIHJlcXVpcmVkOiBmYWxzZVxuICBwdWJsaWMgZ2V0IHN0b3JhZ2VNZXRyaWNzKCkge1xuICAgIHJldHVybiB0aGlzLmludGVycG9sYXRpb25Gb3JBdHRyaWJ1dGUoJ3N0b3JhZ2VfbWV0cmljcycpIGFzIGFueTtcbiAgfVxufVxuXG5leHBvcnQgZnVuY3Rpb24gZGF0YUF3c2NjUzNTdG9yYWdlTGVuc1N0b3JhZ2VMZW5zQ29uZmlndXJhdGlvbkFjY291bnRMZXZlbEJ1Y2tldExldmVsUHJlZml4TGV2ZWxUb1RlcnJhZm9ybShzdHJ1Y3Q/OiBEYXRhQXdzY2NTM1N0b3JhZ2VMZW5zU3RvcmFnZUxlbnNDb25maWd1cmF0aW9uQWNjb3VudExldmVsQnVja2V0TGV2ZWxQcmVmaXhMZXZlbCk6IGFueSB7XG4gIGlmICghY2RrdGYuY2FuSW5zcGVjdChzdHJ1Y3QpKSB7IHJldHVybiBzdHJ1Y3Q7IH1cbiAgcmV0dXJuIHtcbiAgICBzdG9yYWdlX21ldHJpY3M6IGRhdGFBd3NjY1MzU3RvcmFnZUxlbnNTdG9yYWdlTGVuc0NvbmZpZ3VyYXRpb25BY2NvdW50TGV2ZWxCdWNrZXRMZXZlbFByZWZpeExldmVsU3RvcmFnZU1ldHJpY3NUb1RlcnJhZm9ybShzdHJ1Y3QhLnN0b3JhZ2VNZXRyaWNzKSxcbiAgfVxufVxuXG5leHBvcnQgY2xhc3MgRGF0YUF3c2NjUzNTdG9yYWdlTGVuc1N0b3JhZ2VMZW5zQ29uZmlndXJhdGlvbkFjY291bnRMZXZlbEJ1Y2tldExldmVsIGV4dGVuZHMgY2RrdGYuQ29tcGxleENvbXB1dGVkTGlzdCB7XG5cbiAgLy8gYWN0aXZpdHlfbWV0cmljcyAtIGNvbXB1dGVkOiB0cnVlLCBvcHRpb25hbDogZmFsc2UsIHJlcXVpcmVkOiBmYWxzZVxuICBwdWJsaWMgZ2V0IGFjdGl2aXR5TWV0cmljcygpIHtcbiAgICByZXR1cm4gdGhpcy5pbnRlcnBvbGF0aW9uRm9yQXR0cmlidXRlKCdhY3Rpdml0eV9tZXRyaWNzJykgYXMgYW55O1xuICB9XG5cbiAgLy8gcHJlZml4X2xldmVsIC0gY29tcHV0ZWQ6IHRydWUsIG9wdGlvbmFsOiBmYWxzZSwgcmVxdWlyZWQ6IGZhbHNlXG4gIHB1YmxpYyBnZXQgcHJlZml4TGV2ZWwoKSB7XG4gICAgcmV0dXJuIHRoaXMuaW50ZXJwb2xhdGlvbkZvckF0dHJpYnV0ZSgncHJlZml4X2xldmVsJykgYXMgYW55O1xuICB9XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBkYXRhQXdzY2NTM1N0b3JhZ2VMZW5zU3RvcmFnZUxlbnNDb25maWd1cmF0aW9uQWNjb3VudExldmVsQnVja2V0TGV2ZWxUb1RlcnJhZm9ybShzdHJ1Y3Q/OiBEYXRhQXdzY2NTM1N0b3JhZ2VMZW5zU3RvcmFnZUxlbnNDb25maWd1cmF0aW9uQWNjb3VudExldmVsQnVja2V0TGV2ZWwpOiBhbnkge1xuICBpZiAoIWNka3RmLmNhbkluc3BlY3Qoc3RydWN0KSkgeyByZXR1cm4gc3RydWN0OyB9XG4gIHJldHVybiB7XG4gICAgYWN0aXZpdHlfbWV0cmljczogZGF0YUF3c2NjUzNTdG9yYWdlTGVuc1N0b3JhZ2VMZW5zQ29uZmlndXJhdGlvbkFjY291bnRMZXZlbEJ1Y2tldExldmVsQWN0aXZpdHlNZXRyaWNzVG9UZXJyYWZvcm0oc3RydWN0IS5hY3Rpdml0eU1ldHJpY3MpLFxuICAgIHByZWZpeF9sZXZlbDogZGF0YUF3c2NjUzNTdG9yYWdlTGVuc1N0b3JhZ2VMZW5zQ29uZmlndXJhdGlvbkFjY291bnRMZXZlbEJ1Y2tldExldmVsUHJlZml4TGV2ZWxUb1RlcnJhZm9ybShzdHJ1Y3QhLnByZWZpeExldmVsKSxcbiAgfVxufVxuXG5leHBvcnQgY2xhc3MgRGF0YUF3c2NjUzNTdG9yYWdlTGVuc1N0b3JhZ2VMZW5zQ29uZmlndXJhdGlvbkFjY291bnRMZXZlbCBleHRlbmRzIGNka3RmLkNvbXBsZXhDb21wdXRlZExpc3Qge1xuXG4gIC8vIGFjdGl2aXR5X21ldHJpY3MgLSBjb21wdXRlZDogdHJ1ZSwgb3B0aW9uYWw6IGZhbHNlLCByZXF1aXJlZDogZmFsc2VcbiAgcHVibGljIGdldCBhY3Rpdml0eU1ldHJpY3MoKSB7XG4gICAgcmV0dXJuIHRoaXMuaW50ZXJwb2xhdGlvbkZvckF0dHJpYnV0ZSgnYWN0aXZpdHlfbWV0cmljcycpIGFzIGFueTtcbiAgfVxuXG4gIC8vIGJ1Y2tldF9sZXZlbCAtIGNvbXB1dGVkOiB0cnVlLCBvcHRpb25hbDogZmFsc2UsIHJlcXVpcmVkOiBmYWxzZVxuICBwdWJsaWMgZ2V0IGJ1Y2tldExldmVsKCkge1xuICAgIHJldHVybiB0aGlzLmludGVycG9sYXRpb25Gb3JBdHRyaWJ1dGUoJ2J1Y2tldF9sZXZlbCcpIGFzIGFueTtcbiAgfVxufVxuXG5leHBvcnQgZnVuY3Rpb24gZGF0YUF3c2NjUzNTdG9yYWdlTGVuc1N0b3JhZ2VMZW5zQ29uZmlndXJhdGlvbkFjY291bnRMZXZlbFRvVGVycmFmb3JtKHN0cnVjdD86IERhdGFBd3NjY1MzU3RvcmFnZUxlbnNTdG9yYWdlTGVuc0NvbmZpZ3VyYXRpb25BY2NvdW50TGV2ZWwpOiBhbnkge1xuICBpZiAoIWNka3RmLmNhbkluc3BlY3Qoc3RydWN0KSkgeyByZXR1cm4gc3RydWN0OyB9XG4gIHJldHVybiB7XG4gICAgYWN0aXZpdHlfbWV0cmljczogZGF0YUF3c2NjUzNTdG9yYWdlTGVuc1N0b3JhZ2VMZW5zQ29uZmlndXJhdGlvbkFjY291bnRMZXZlbEFjdGl2aXR5TWV0cmljc1RvVGVycmFmb3JtKHN0cnVjdCEuYWN0aXZpdHlNZXRyaWNzKSxcbiAgICBidWNrZXRfbGV2ZWw6IGRhdGFBd3NjY1MzU3RvcmFnZUxlbnNTdG9yYWdlTGVuc0NvbmZpZ3VyYXRpb25BY2NvdW50TGV2ZWxCdWNrZXRMZXZlbFRvVGVycmFmb3JtKHN0cnVjdCEuYnVja2V0TGV2ZWwpLFxuICB9XG59XG5cbmV4cG9ydCBjbGFzcyBEYXRhQXdzY2NTM1N0b3JhZ2VMZW5zU3RvcmFnZUxlbnNDb25maWd1cmF0aW9uQXdzT3JnIGV4dGVuZHMgY2RrdGYuQ29tcGxleENvbXB1dGVkTGlzdCB7XG5cbiAgLy8gYXJuIC0gY29tcHV0ZWQ6IHRydWUsIG9wdGlvbmFsOiBmYWxzZSwgcmVxdWlyZWQ6IGZhbHNlXG4gIHB1YmxpYyBnZXQgYXJuKCkge1xuICAgIHJldHVybiB0aGlzLmdldFN0cmluZ0F0dHJpYnV0ZSgnYXJuJyk7XG4gIH1cbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGRhdGFBd3NjY1MzU3RvcmFnZUxlbnNTdG9yYWdlTGVuc0NvbmZpZ3VyYXRpb25Bd3NPcmdUb1RlcnJhZm9ybShzdHJ1Y3Q/OiBEYXRhQXdzY2NTM1N0b3JhZ2VMZW5zU3RvcmFnZUxlbnNDb25maWd1cmF0aW9uQXdzT3JnKTogYW55IHtcbiAgaWYgKCFjZGt0Zi5jYW5JbnNwZWN0KHN0cnVjdCkpIHsgcmV0dXJuIHN0cnVjdDsgfVxuICByZXR1cm4ge1xuICAgIGFybjogY2RrdGYuc3RyaW5nVG9UZXJyYWZvcm0oc3RydWN0IS5hcm4pLFxuICB9XG59XG5cbmV4cG9ydCBjbGFzcyBEYXRhQXdzY2NTM1N0b3JhZ2VMZW5zU3RvcmFnZUxlbnNDb25maWd1cmF0aW9uRGF0YUV4cG9ydFMzQnVja2V0RGVzdGluYXRpb24gZXh0ZW5kcyBjZGt0Zi5Db21wbGV4Q29tcHV0ZWRMaXN0IHtcblxuICAvLyBhY2NvdW50X2lkIC0gY29tcHV0ZWQ6IHRydWUsIG9wdGlvbmFsOiBmYWxzZSwgcmVxdWlyZWQ6IGZhbHNlXG4gIHB1YmxpYyBnZXQgYWNjb3VudElkKCkge1xuICAgIHJldHVybiB0aGlzLmdldFN0cmluZ0F0dHJpYnV0ZSgnYWNjb3VudF9pZCcpO1xuICB9XG5cbiAgLy8gYXJuIC0gY29tcHV0ZWQ6IHRydWUsIG9wdGlvbmFsOiBmYWxzZSwgcmVxdWlyZWQ6IGZhbHNlXG4gIHB1YmxpYyBnZXQgYXJuKCkge1xuICAgIHJldHVybiB0aGlzLmdldFN0cmluZ0F0dHJpYnV0ZSgnYXJuJyk7XG4gIH1cblxuICAvLyBlbmNyeXB0aW9uIC0gY29tcHV0ZWQ6IHRydWUsIG9wdGlvbmFsOiBmYWxzZSwgcmVxdWlyZWQ6IGZhbHNlXG4gIHB1YmxpYyBnZXQgZW5jcnlwdGlvbigpIHtcbiAgICByZXR1cm4gdGhpcy5pbnRlcnBvbGF0aW9uRm9yQXR0cmlidXRlKCdlbmNyeXB0aW9uJykgYXMgYW55O1xuICB9XG5cbiAgLy8gZm9ybWF0IC0gY29tcHV0ZWQ6IHRydWUsIG9wdGlvbmFsOiBmYWxzZSwgcmVxdWlyZWQ6IGZhbHNlXG4gIHB1YmxpYyBnZXQgZm9ybWF0KCkge1xuICAgIHJldHVybiB0aGlzLmdldFN0cmluZ0F0dHJpYnV0ZSgnZm9ybWF0Jyk7XG4gIH1cblxuICAvLyBvdXRwdXRfc2NoZW1hX3ZlcnNpb24gLSBjb21wdXRlZDogdHJ1ZSwgb3B0aW9uYWw6IGZhbHNlLCByZXF1aXJlZDogZmFsc2VcbiAgcHVibGljIGdldCBvdXRwdXRTY2hlbWFWZXJzaW9uKCkge1xuICAgIHJldHVybiB0aGlzLmdldFN0cmluZ0F0dHJpYnV0ZSgnb3V0cHV0X3NjaGVtYV92ZXJzaW9uJyk7XG4gIH1cblxuICAvLyBwcmVmaXggLSBjb21wdXRlZDogdHJ1ZSwgb3B0aW9uYWw6IGZhbHNlLCByZXF1aXJlZDogZmFsc2VcbiAgcHVibGljIGdldCBwcmVmaXgoKSB7XG4gICAgcmV0dXJuIHRoaXMuZ2V0U3RyaW5nQXR0cmlidXRlKCdwcmVmaXgnKTtcbiAgfVxufVxuXG5leHBvcnQgZnVuY3Rpb24gZGF0YUF3c2NjUzNTdG9yYWdlTGVuc1N0b3JhZ2VMZW5zQ29uZmlndXJhdGlvbkRhdGFFeHBvcnRTM0J1Y2tldERlc3RpbmF0aW9uVG9UZXJyYWZvcm0oc3RydWN0PzogRGF0YUF3c2NjUzNTdG9yYWdlTGVuc1N0b3JhZ2VMZW5zQ29uZmlndXJhdGlvbkRhdGFFeHBvcnRTM0J1Y2tldERlc3RpbmF0aW9uKTogYW55IHtcbiAgaWYgKCFjZGt0Zi5jYW5JbnNwZWN0KHN0cnVjdCkpIHsgcmV0dXJuIHN0cnVjdDsgfVxuICByZXR1cm4ge1xuICAgIGFjY291bnRfaWQ6IGNka3RmLnN0cmluZ1RvVGVycmFmb3JtKHN0cnVjdCEuYWNjb3VudElkKSxcbiAgICBhcm46IGNka3RmLnN0cmluZ1RvVGVycmFmb3JtKHN0cnVjdCEuYXJuKSxcbiAgICBlbmNyeXB0aW9uOiBjZGt0Zi5oYXNoTWFwcGVyKGNka3RmLnN0cmluZ1RvVGVycmFmb3JtKShzdHJ1Y3QhLmVuY3J5cHRpb24pLFxuICAgIGZvcm1hdDogY2RrdGYuc3RyaW5nVG9UZXJyYWZvcm0oc3RydWN0IS5mb3JtYXQpLFxuICAgIG91dHB1dF9zY2hlbWFfdmVyc2lvbjogY2RrdGYuc3RyaW5nVG9UZXJyYWZvcm0oc3RydWN0IS5vdXRwdXRTY2hlbWFWZXJzaW9uKSxcbiAgICBwcmVmaXg6IGNka3RmLnN0cmluZ1RvVGVycmFmb3JtKHN0cnVjdCEucHJlZml4KSxcbiAgfVxufVxuXG5leHBvcnQgY2xhc3MgRGF0YUF3c2NjUzNTdG9yYWdlTGVuc1N0b3JhZ2VMZW5zQ29uZmlndXJhdGlvbkRhdGFFeHBvcnQgZXh0ZW5kcyBjZGt0Zi5Db21wbGV4Q29tcHV0ZWRMaXN0IHtcblxuICAvLyBzM19idWNrZXRfZGVzdGluYXRpb24gLSBjb21wdXRlZDogdHJ1ZSwgb3B0aW9uYWw6IGZhbHNlLCByZXF1aXJlZDogZmFsc2VcbiAgcHVibGljIGdldCBzM0J1Y2tldERlc3RpbmF0aW9uKCkge1xuICAgIHJldHVybiB0aGlzLmludGVycG9sYXRpb25Gb3JBdHRyaWJ1dGUoJ3MzX2J1Y2tldF9kZXN0aW5hdGlvbicpIGFzIGFueTtcbiAgfVxufVxuXG5leHBvcnQgZnVuY3Rpb24gZGF0YUF3c2NjUzNTdG9yYWdlTGVuc1N0b3JhZ2VMZW5zQ29uZmlndXJhdGlvbkRhdGFFeHBvcnRUb1RlcnJhZm9ybShzdHJ1Y3Q/OiBEYXRhQXdzY2NTM1N0b3JhZ2VMZW5zU3RvcmFnZUxlbnNDb25maWd1cmF0aW9uRGF0YUV4cG9ydCk6IGFueSB7XG4gIGlmICghY2RrdGYuY2FuSW5zcGVjdChzdHJ1Y3QpKSB7IHJldHVybiBzdHJ1Y3Q7IH1cbiAgcmV0dXJuIHtcbiAgICBzM19idWNrZXRfZGVzdGluYXRpb246IGRhdGFBd3NjY1MzU3RvcmFnZUxlbnNTdG9yYWdlTGVuc0NvbmZpZ3VyYXRpb25EYXRhRXhwb3J0UzNCdWNrZXREZXN0aW5hdGlvblRvVGVycmFmb3JtKHN0cnVjdCEuczNCdWNrZXREZXN0aW5hdGlvbiksXG4gIH1cbn1cblxuZXhwb3J0IGNsYXNzIERhdGFBd3NjY1MzU3RvcmFnZUxlbnNTdG9yYWdlTGVuc0NvbmZpZ3VyYXRpb25FeGNsdWRlIGV4dGVuZHMgY2RrdGYuQ29tcGxleENvbXB1dGVkTGlzdCB7XG5cbiAgLy8gYnVja2V0cyAtIGNvbXB1dGVkOiB0cnVlLCBvcHRpb25hbDogZmFsc2UsIHJlcXVpcmVkOiBmYWxzZVxuICBwdWJsaWMgZ2V0IGJ1Y2tldHMoKSB7XG4gICAgcmV0dXJuIHRoaXMuZ2V0TGlzdEF0dHJpYnV0ZSgnYnVja2V0cycpO1xuICB9XG5cbiAgLy8gcmVnaW9ucyAtIGNvbXB1dGVkOiB0cnVlLCBvcHRpb25hbDogZmFsc2UsIHJlcXVpcmVkOiBmYWxzZVxuICBwdWJsaWMgZ2V0IHJlZ2lvbnMoKSB7XG4gICAgcmV0dXJuIHRoaXMuZ2V0TGlzdEF0dHJpYnV0ZSgncmVnaW9ucycpO1xuICB9XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBkYXRhQXdzY2NTM1N0b3JhZ2VMZW5zU3RvcmFnZUxlbnNDb25maWd1cmF0aW9uRXhjbHVkZVRvVGVycmFmb3JtKHN0cnVjdD86IERhdGFBd3NjY1MzU3RvcmFnZUxlbnNTdG9yYWdlTGVuc0NvbmZpZ3VyYXRpb25FeGNsdWRlKTogYW55IHtcbiAgaWYgKCFjZGt0Zi5jYW5JbnNwZWN0KHN0cnVjdCkpIHsgcmV0dXJuIHN0cnVjdDsgfVxuICByZXR1cm4ge1xuICAgIGJ1Y2tldHM6IGNka3RmLmxpc3RNYXBwZXIoY2RrdGYuc3RyaW5nVG9UZXJyYWZvcm0pKHN0cnVjdCEuYnVja2V0cyksXG4gICAgcmVnaW9uczogY2RrdGYubGlzdE1hcHBlcihjZGt0Zi5zdHJpbmdUb1RlcnJhZm9ybSkoc3RydWN0IS5yZWdpb25zKSxcbiAgfVxufVxuXG5leHBvcnQgY2xhc3MgRGF0YUF3c2NjUzNTdG9yYWdlTGVuc1N0b3JhZ2VMZW5zQ29uZmlndXJhdGlvbkluY2x1ZGUgZXh0ZW5kcyBjZGt0Zi5Db21wbGV4Q29tcHV0ZWRMaXN0IHtcblxuICAvLyBidWNrZXRzIC0gY29tcHV0ZWQ6IHRydWUsIG9wdGlvbmFsOiBmYWxzZSwgcmVxdWlyZWQ6IGZhbHNlXG4gIHB1YmxpYyBnZXQgYnVja2V0cygpIHtcbiAgICByZXR1cm4gdGhpcy5nZXRMaXN0QXR0cmlidXRlKCdidWNrZXRzJyk7XG4gIH1cblxuICAvLyByZWdpb25zIC0gY29tcHV0ZWQ6IHRydWUsIG9wdGlvbmFsOiBmYWxzZSwgcmVxdWlyZWQ6IGZhbHNlXG4gIHB1YmxpYyBnZXQgcmVnaW9ucygpIHtcbiAgICByZXR1cm4gdGhpcy5nZXRMaXN0QXR0cmlidXRlKCdyZWdpb25zJyk7XG4gIH1cbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGRhdGFBd3NjY1MzU3RvcmFnZUxlbnNTdG9yYWdlTGVuc0NvbmZpZ3VyYXRpb25JbmNsdWRlVG9UZXJyYWZvcm0oc3RydWN0PzogRGF0YUF3c2NjUzNTdG9yYWdlTGVuc1N0b3JhZ2VMZW5zQ29uZmlndXJhdGlvbkluY2x1ZGUpOiBhbnkge1xuICBpZiAoIWNka3RmLmNhbkluc3BlY3Qoc3RydWN0KSkgeyByZXR1cm4gc3RydWN0OyB9XG4gIHJldHVybiB7XG4gICAgYnVja2V0czogY2RrdGYubGlzdE1hcHBlcihjZGt0Zi5zdHJpbmdUb1RlcnJhZm9ybSkoc3RydWN0IS5idWNrZXRzKSxcbiAgICByZWdpb25zOiBjZGt0Zi5saXN0TWFwcGVyKGNka3RmLnN0cmluZ1RvVGVycmFmb3JtKShzdHJ1Y3QhLnJlZ2lvbnMpLFxuICB9XG59XG5cbmV4cG9ydCBjbGFzcyBEYXRhQXdzY2NTM1N0b3JhZ2VMZW5zU3RvcmFnZUxlbnNDb25maWd1cmF0aW9uIGV4dGVuZHMgY2RrdGYuQ29tcGxleENvbXB1dGVkTGlzdCB7XG5cbiAgLy8gYWNjb3VudF9sZXZlbCAtIGNvbXB1dGVkOiB0cnVlLCBvcHRpb25hbDogZmFsc2UsIHJlcXVpcmVkOiBmYWxzZVxuICBwdWJsaWMgZ2V0IGFjY291bnRMZXZlbCgpIHtcbiAgICByZXR1cm4gdGhpcy5pbnRlcnBvbGF0aW9uRm9yQXR0cmlidXRlKCdhY2NvdW50X2xldmVsJykgYXMgYW55O1xuICB9XG5cbiAgLy8gYXdzX29yZyAtIGNvbXB1dGVkOiB0cnVlLCBvcHRpb25hbDogZmFsc2UsIHJlcXVpcmVkOiBmYWxzZVxuICBwdWJsaWMgZ2V0IGF3c09yZygpIHtcbiAgICByZXR1cm4gdGhpcy5pbnRlcnBvbGF0aW9uRm9yQXR0cmlidXRlKCdhd3Nfb3JnJykgYXMgYW55O1xuICB9XG5cbiAgLy8gZGF0YV9leHBvcnQgLSBjb21wdXRlZDogdHJ1ZSwgb3B0aW9uYWw6IGZhbHNlLCByZXF1aXJlZDogZmFsc2VcbiAgcHVibGljIGdldCBkYXRhRXhwb3J0KCkge1xuICAgIHJldHVybiB0aGlzLmludGVycG9sYXRpb25Gb3JBdHRyaWJ1dGUoJ2RhdGFfZXhwb3J0JykgYXMgYW55O1xuICB9XG5cbiAgLy8gZXhjbHVkZSAtIGNvbXB1dGVkOiB0cnVlLCBvcHRpb25hbDogZmFsc2UsIHJlcXVpcmVkOiBmYWxzZVxuICBwdWJsaWMgZ2V0IGV4Y2x1ZGUoKSB7XG4gICAgcmV0dXJuIHRoaXMuaW50ZXJwb2xhdGlvbkZvckF0dHJpYnV0ZSgnZXhjbHVkZScpIGFzIGFueTtcbiAgfVxuXG4gIC8vIGlkIC0gY29tcHV0ZWQ6IHRydWUsIG9wdGlvbmFsOiBmYWxzZSwgcmVxdWlyZWQ6IGZhbHNlXG4gIHB1YmxpYyBnZXQgaWQoKSB7XG4gICAgcmV0dXJuIHRoaXMuZ2V0U3RyaW5nQXR0cmlidXRlKCdpZCcpO1xuICB9XG5cbiAgLy8gaW5jbHVkZSAtIGNvbXB1dGVkOiB0cnVlLCBvcHRpb25hbDogZmFsc2UsIHJlcXVpcmVkOiBmYWxzZVxuICBwdWJsaWMgZ2V0IGluY2x1ZGUoKSB7XG4gICAgcmV0dXJuIHRoaXMuaW50ZXJwb2xhdGlvbkZvckF0dHJpYnV0ZSgnaW5jbHVkZScpIGFzIGFueTtcbiAgfVxuXG4gIC8vIGlzX2VuYWJsZWQgLSBjb21wdXRlZDogdHJ1ZSwgb3B0aW9uYWw6IGZhbHNlLCByZXF1aXJlZDogZmFsc2VcbiAgcHVibGljIGdldCBpc0VuYWJsZWQoKSB7XG4gICAgcmV0dXJuIHRoaXMuZ2V0Qm9vbGVhbkF0dHJpYnV0ZSgnaXNfZW5hYmxlZCcpO1xuICB9XG5cbiAgLy8gc3RvcmFnZV9sZW5zX2FybiAtIGNvbXB1dGVkOiB0cnVlLCBvcHRpb25hbDogZmFsc2UsIHJlcXVpcmVkOiBmYWxzZVxuICBwdWJsaWMgZ2V0IHN0b3JhZ2VMZW5zQXJuKCkge1xuICAgIHJldHVybiB0aGlzLmdldFN0cmluZ0F0dHJpYnV0ZSgnc3RvcmFnZV9sZW5zX2FybicpO1xuICB9XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBkYXRhQXdzY2NTM1N0b3JhZ2VMZW5zU3RvcmFnZUxlbnNDb25maWd1cmF0aW9uVG9UZXJyYWZvcm0oc3RydWN0PzogRGF0YUF3c2NjUzNTdG9yYWdlTGVuc1N0b3JhZ2VMZW5zQ29uZmlndXJhdGlvbik6IGFueSB7XG4gIGlmICghY2RrdGYuY2FuSW5zcGVjdChzdHJ1Y3QpKSB7IHJldHVybiBzdHJ1Y3Q7IH1cbiAgcmV0dXJuIHtcbiAgICBhY2NvdW50X2xldmVsOiBkYXRhQXdzY2NTM1N0b3JhZ2VMZW5zU3RvcmFnZUxlbnNDb25maWd1cmF0aW9uQWNjb3VudExldmVsVG9UZXJyYWZvcm0oc3RydWN0IS5hY2NvdW50TGV2ZWwpLFxuICAgIGF3c19vcmc6IGRhdGFBd3NjY1MzU3RvcmFnZUxlbnNTdG9yYWdlTGVuc0NvbmZpZ3VyYXRpb25Bd3NPcmdUb1RlcnJhZm9ybShzdHJ1Y3QhLmF3c09yZyksXG4gICAgZGF0YV9leHBvcnQ6IGRhdGFBd3NjY1MzU3RvcmFnZUxlbnNTdG9yYWdlTGVuc0NvbmZpZ3VyYXRpb25EYXRhRXhwb3J0VG9UZXJyYWZvcm0oc3RydWN0IS5kYXRhRXhwb3J0KSxcbiAgICBleGNsdWRlOiBkYXRhQXdzY2NTM1N0b3JhZ2VMZW5zU3RvcmFnZUxlbnNDb25maWd1cmF0aW9uRXhjbHVkZVRvVGVycmFmb3JtKHN0cnVjdCEuZXhjbHVkZSksXG4gICAgaWQ6IGNka3RmLnN0cmluZ1RvVGVycmFmb3JtKHN0cnVjdCEuaWQpLFxuICAgIGluY2x1ZGU6IGRhdGFBd3NjY1MzU3RvcmFnZUxlbnNTdG9yYWdlTGVuc0NvbmZpZ3VyYXRpb25JbmNsdWRlVG9UZXJyYWZvcm0oc3RydWN0IS5pbmNsdWRlKSxcbiAgICBpc19lbmFibGVkOiBjZGt0Zi5ib29sZWFuVG9UZXJyYWZvcm0oc3RydWN0IS5pc0VuYWJsZWQpLFxuICAgIHN0b3JhZ2VfbGVuc19hcm46IGNka3RmLnN0cmluZ1RvVGVycmFmb3JtKHN0cnVjdCEuc3RvcmFnZUxlbnNBcm4pLFxuICB9XG59XG5cbmV4cG9ydCBjbGFzcyBEYXRhQXdzY2NTM1N0b3JhZ2VMZW5zVGFncyBleHRlbmRzIGNka3RmLkNvbXBsZXhDb21wdXRlZExpc3Qge1xuXG4gIC8vIGtleSAtIGNvbXB1dGVkOiB0cnVlLCBvcHRpb25hbDogZmFsc2UsIHJlcXVpcmVkOiBmYWxzZVxuICBwdWJsaWMgZ2V0IGtleSgpIHtcbiAgICByZXR1cm4gdGhpcy5nZXRTdHJpbmdBdHRyaWJ1dGUoJ2tleScpO1xuICB9XG5cbiAgLy8gdmFsdWUgLSBjb21wdXRlZDogdHJ1ZSwgb3B0aW9uYWw6IGZhbHNlLCByZXF1aXJlZDogZmFsc2VcbiAgcHVibGljIGdldCB2YWx1ZSgpIHtcbiAgICByZXR1cm4gdGhpcy5nZXRTdHJpbmdBdHRyaWJ1dGUoJ3ZhbHVlJyk7XG4gIH1cbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGRhdGFBd3NjY1MzU3RvcmFnZUxlbnNUYWdzVG9UZXJyYWZvcm0oc3RydWN0PzogRGF0YUF3c2NjUzNTdG9yYWdlTGVuc1RhZ3MpOiBhbnkge1xuICBpZiAoIWNka3RmLmNhbkluc3BlY3Qoc3RydWN0KSkgeyByZXR1cm4gc3RydWN0OyB9XG4gIHJldHVybiB7XG4gICAga2V5OiBjZGt0Zi5zdHJpbmdUb1RlcnJhZm9ybShzdHJ1Y3QhLmtleSksXG4gICAgdmFsdWU6IGNka3RmLnN0cmluZ1RvVGVycmFmb3JtKHN0cnVjdCEudmFsdWUpLFxuICB9XG59XG5cblxuLyoqXG4qIFJlcHJlc2VudHMgYSB7QGxpbmsgaHR0cHM6Ly93d3cudGVycmFmb3JtLmlvL2RvY3MvcHJvdmlkZXJzL2F3c2NjL2QvczNfc3RvcmFnZV9sZW5zLmh0bWwgYXdzY2NfczNfc3RvcmFnZV9sZW5zfVxuKi9cbmV4cG9ydCBjbGFzcyBEYXRhQXdzY2NTM1N0b3JhZ2VMZW5zIGV4dGVuZHMgY2RrdGYuVGVycmFmb3JtRGF0YVNvdXJjZSB7XG5cbiAgLy8gPT09PT09PT09PT09PT09PT1cbiAgLy8gU1RBVElDIFBST1BFUlRJRVNcbiAgLy8gPT09PT09PT09PT09PT09PT1cbiAgcHVibGljIHN0YXRpYyByZWFkb25seSB0ZlJlc291cmNlVHlwZTogc3RyaW5nID0gXCJhd3NjY19zM19zdG9yYWdlX2xlbnNcIjtcblxuICAvLyA9PT09PT09PT09PVxuICAvLyBJTklUSUFMSVpFUlxuICAvLyA9PT09PT09PT09PVxuXG4gIC8qKlxuICAqIENyZWF0ZSBhIG5ldyB7QGxpbmsgaHR0cHM6Ly93d3cudGVycmFmb3JtLmlvL2RvY3MvcHJvdmlkZXJzL2F3c2NjL2QvczNfc3RvcmFnZV9sZW5zLmh0bWwgYXdzY2NfczNfc3RvcmFnZV9sZW5zfSBEYXRhIFNvdXJjZVxuICAqXG4gICogQHBhcmFtIHNjb3BlIFRoZSBzY29wZSBpbiB3aGljaCB0byBkZWZpbmUgdGhpcyBjb25zdHJ1Y3RcbiAgKiBAcGFyYW0gaWQgVGhlIHNjb3BlZCBjb25zdHJ1Y3QgSUQuIE11c3QgYmUgdW5pcXVlIGFtb25nc3Qgc2libGluZ3MgaW4gdGhlIHNhbWUgc2NvcGVcbiAgKiBAcGFyYW0gb3B0aW9ucyBEYXRhQXdzY2NTM1N0b3JhZ2VMZW5zQ29uZmlnXG4gICovXG4gIHB1YmxpYyBjb25zdHJ1Y3RvcihzY29wZTogQ29uc3RydWN0LCBpZDogc3RyaW5nLCBjb25maWc6IERhdGFBd3NjY1MzU3RvcmFnZUxlbnNDb25maWcpIHtcbiAgICBzdXBlcihzY29wZSwgaWQsIHtcbiAgICAgIHRlcnJhZm9ybVJlc291cmNlVHlwZTogJ2F3c2NjX3MzX3N0b3JhZ2VfbGVucycsXG4gICAgICB0ZXJyYWZvcm1HZW5lcmF0b3JNZXRhZGF0YToge1xuICAgICAgICBwcm92aWRlck5hbWU6ICdhd3NjYydcbiAgICAgIH0sXG4gICAgICBwcm92aWRlcjogY29uZmlnLnByb3ZpZGVyLFxuICAgICAgZGVwZW5kc09uOiBjb25maWcuZGVwZW5kc09uLFxuICAgICAgY291bnQ6IGNvbmZpZy5jb3VudCxcbiAgICAgIGxpZmVjeWNsZTogY29uZmlnLmxpZmVjeWNsZVxuICAgIH0pO1xuICAgIHRoaXMuX2lkID0gY29uZmlnLmlkO1xuICB9XG5cbiAgLy8gPT09PT09PT09PVxuICAvLyBBVFRSSUJVVEVTXG4gIC8vID09PT09PT09PT1cblxuICAvLyBpZCAtIGNvbXB1dGVkOiBmYWxzZSwgb3B0aW9uYWw6IGZhbHNlLCByZXF1aXJlZDogdHJ1ZVxuICBwcml2YXRlIF9pZDogc3RyaW5nO1xuICBwdWJsaWMgZ2V0IGlkKCkge1xuICAgIHJldHVybiB0aGlzLmdldFN0cmluZ0F0dHJpYnV0ZSgnaWQnKTtcbiAgfVxuICBwdWJsaWMgc2V0IGlkKHZhbHVlOiBzdHJpbmcpIHtcbiAgICB0aGlzLl9pZCA9IHZhbHVlO1xuICB9XG4gIC8vIFRlbXBvcmFyaWx5IGV4cG9zZSBpbnB1dCB2YWx1ZS4gVXNlIHdpdGggY2F1dGlvbi5cbiAgcHVibGljIGdldCBpZElucHV0KCkge1xuICAgIHJldHVybiB0aGlzLl9pZFxuICB9XG5cbiAgLy8gc3RvcmFnZV9sZW5zX2NvbmZpZ3VyYXRpb24gLSBjb21wdXRlZDogdHJ1ZSwgb3B0aW9uYWw6IGZhbHNlLCByZXF1aXJlZDogZmFsc2VcbiAgcHVibGljIGdldCBzdG9yYWdlTGVuc0NvbmZpZ3VyYXRpb24oKSB7XG4gICAgcmV0dXJuIHRoaXMuaW50ZXJwb2xhdGlvbkZvckF0dHJpYnV0ZSgnc3RvcmFnZV9sZW5zX2NvbmZpZ3VyYXRpb24nKSBhcyBhbnk7XG4gIH1cblxuICAvLyB0YWdzIC0gY29tcHV0ZWQ6IHRydWUsIG9wdGlvbmFsOiBmYWxzZSwgcmVxdWlyZWQ6IGZhbHNlXG4gIHB1YmxpYyBnZXQgdGFncygpIHtcbiAgICByZXR1cm4gdGhpcy5pbnRlcnBvbGF0aW9uRm9yQXR0cmlidXRlKCd0YWdzJykgYXMgYW55O1xuICB9XG5cbiAgLy8gPT09PT09PT09XG4gIC8vIFNZTlRIRVNJU1xuICAvLyA9PT09PT09PT1cblxuICBwcm90ZWN0ZWQgc3ludGhlc2l6ZUF0dHJpYnV0ZXMoKTogeyBbbmFtZTogc3RyaW5nXTogYW55IH0ge1xuICAgIHJldHVybiB7XG4gICAgICBpZDogY2RrdGYuc3RyaW5nVG9UZXJyYWZvcm0odGhpcy5faWQpLFxuICAgIH07XG4gIH1cbn1cbiJdfQ==