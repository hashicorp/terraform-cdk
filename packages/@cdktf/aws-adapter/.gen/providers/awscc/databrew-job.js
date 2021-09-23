"use strict";
// https://www.terraform.io/docs/providers/awscc/r/databrew_job.html
// generated from terraform resource schema
Object.defineProperty(exports, "__esModule", { value: true });
exports.DatabrewJob = exports.databrewJobTagsToTerraform = exports.databrewJobRecipeToTerraform = exports.databrewJobProfileConfigurationToTerraform = exports.databrewJobProfileConfigurationProfileColumnsToTerraform = exports.databrewJobProfileConfigurationDatasetStatisticsConfigurationToTerraform = exports.databrewJobProfileConfigurationDatasetStatisticsConfigurationOverridesToTerraform = exports.databrewJobProfileConfigurationColumnStatisticsConfigurationsToTerraform = exports.databrewJobProfileConfigurationColumnStatisticsConfigurationsStatisticsToTerraform = exports.databrewJobProfileConfigurationColumnStatisticsConfigurationsStatisticsOverridesToTerraform = exports.databrewJobProfileConfigurationColumnStatisticsConfigurationsSelectorsToTerraform = exports.databrewJobOutputsToTerraform = exports.databrewJobOutputsLocationToTerraform = exports.databrewJobOutputsFormatOptionsToTerraform = exports.databrewJobOutputsFormatOptionsCsvToTerraform = exports.databrewJobOutputLocationToTerraform = exports.databrewJobJobSampleToTerraform = exports.databrewJobDatabaseOutputsToTerraform = exports.databrewJobDatabaseOutputsDatabaseOptionsToTerraform = exports.databrewJobDatabaseOutputsDatabaseOptionsTempDirectoryToTerraform = exports.databrewJobDataCatalogOutputsToTerraform = exports.databrewJobDataCatalogOutputsS3OptionsToTerraform = exports.databrewJobDataCatalogOutputsS3OptionsLocationToTerraform = exports.databrewJobDataCatalogOutputsDatabaseOptionsToTerraform = exports.databrewJobDataCatalogOutputsDatabaseOptionsTempDirectoryToTerraform = void 0;
const cdktf = require("cdktf");
function databrewJobDataCatalogOutputsDatabaseOptionsTempDirectoryToTerraform(struct) {
    if (!cdktf.canInspect(struct)) {
        return struct;
    }
    return {
        bucket: cdktf.stringToTerraform(struct.bucket),
        key: cdktf.stringToTerraform(struct.key),
    };
}
exports.databrewJobDataCatalogOutputsDatabaseOptionsTempDirectoryToTerraform = databrewJobDataCatalogOutputsDatabaseOptionsTempDirectoryToTerraform;
function databrewJobDataCatalogOutputsDatabaseOptionsToTerraform(struct) {
    if (!cdktf.canInspect(struct)) {
        return struct;
    }
    return {
        table_name: cdktf.stringToTerraform(struct.tableName),
        temp_directory: databrewJobDataCatalogOutputsDatabaseOptionsTempDirectoryToTerraform(struct.tempDirectory),
    };
}
exports.databrewJobDataCatalogOutputsDatabaseOptionsToTerraform = databrewJobDataCatalogOutputsDatabaseOptionsToTerraform;
function databrewJobDataCatalogOutputsS3OptionsLocationToTerraform(struct) {
    if (!cdktf.canInspect(struct)) {
        return struct;
    }
    return {
        bucket: cdktf.stringToTerraform(struct.bucket),
        key: cdktf.stringToTerraform(struct.key),
    };
}
exports.databrewJobDataCatalogOutputsS3OptionsLocationToTerraform = databrewJobDataCatalogOutputsS3OptionsLocationToTerraform;
function databrewJobDataCatalogOutputsS3OptionsToTerraform(struct) {
    if (!cdktf.canInspect(struct)) {
        return struct;
    }
    return {
        location: databrewJobDataCatalogOutputsS3OptionsLocationToTerraform(struct.location),
    };
}
exports.databrewJobDataCatalogOutputsS3OptionsToTerraform = databrewJobDataCatalogOutputsS3OptionsToTerraform;
function databrewJobDataCatalogOutputsToTerraform(struct) {
    if (!cdktf.canInspect(struct)) {
        return struct;
    }
    return {
        catalog_id: cdktf.stringToTerraform(struct.catalogId),
        database_name: cdktf.stringToTerraform(struct.databaseName),
        database_options: databrewJobDataCatalogOutputsDatabaseOptionsToTerraform(struct.databaseOptions),
        overwrite: cdktf.booleanToTerraform(struct.overwrite),
        s3_options: databrewJobDataCatalogOutputsS3OptionsToTerraform(struct.s3Options),
        table_name: cdktf.stringToTerraform(struct.tableName),
    };
}
exports.databrewJobDataCatalogOutputsToTerraform = databrewJobDataCatalogOutputsToTerraform;
function databrewJobDatabaseOutputsDatabaseOptionsTempDirectoryToTerraform(struct) {
    if (!cdktf.canInspect(struct)) {
        return struct;
    }
    return {
        bucket: cdktf.stringToTerraform(struct.bucket),
        key: cdktf.stringToTerraform(struct.key),
    };
}
exports.databrewJobDatabaseOutputsDatabaseOptionsTempDirectoryToTerraform = databrewJobDatabaseOutputsDatabaseOptionsTempDirectoryToTerraform;
function databrewJobDatabaseOutputsDatabaseOptionsToTerraform(struct) {
    if (!cdktf.canInspect(struct)) {
        return struct;
    }
    return {
        table_name: cdktf.stringToTerraform(struct.tableName),
        temp_directory: databrewJobDatabaseOutputsDatabaseOptionsTempDirectoryToTerraform(struct.tempDirectory),
    };
}
exports.databrewJobDatabaseOutputsDatabaseOptionsToTerraform = databrewJobDatabaseOutputsDatabaseOptionsToTerraform;
function databrewJobDatabaseOutputsToTerraform(struct) {
    if (!cdktf.canInspect(struct)) {
        return struct;
    }
    return {
        database_options: databrewJobDatabaseOutputsDatabaseOptionsToTerraform(struct.databaseOptions),
        database_output_mode: cdktf.stringToTerraform(struct.databaseOutputMode),
        glue_connection_name: cdktf.stringToTerraform(struct.glueConnectionName),
    };
}
exports.databrewJobDatabaseOutputsToTerraform = databrewJobDatabaseOutputsToTerraform;
function databrewJobJobSampleToTerraform(struct) {
    if (!cdktf.canInspect(struct)) {
        return struct;
    }
    return {
        mode: cdktf.stringToTerraform(struct.mode),
        size: cdktf.numberToTerraform(struct.size),
    };
}
exports.databrewJobJobSampleToTerraform = databrewJobJobSampleToTerraform;
function databrewJobOutputLocationToTerraform(struct) {
    if (!cdktf.canInspect(struct)) {
        return struct;
    }
    return {
        bucket: cdktf.stringToTerraform(struct.bucket),
        key: cdktf.stringToTerraform(struct.key),
    };
}
exports.databrewJobOutputLocationToTerraform = databrewJobOutputLocationToTerraform;
function databrewJobOutputsFormatOptionsCsvToTerraform(struct) {
    if (!cdktf.canInspect(struct)) {
        return struct;
    }
    return {
        delimiter: cdktf.stringToTerraform(struct.delimiter),
    };
}
exports.databrewJobOutputsFormatOptionsCsvToTerraform = databrewJobOutputsFormatOptionsCsvToTerraform;
function databrewJobOutputsFormatOptionsToTerraform(struct) {
    if (!cdktf.canInspect(struct)) {
        return struct;
    }
    return {
        csv: databrewJobOutputsFormatOptionsCsvToTerraform(struct.csv),
    };
}
exports.databrewJobOutputsFormatOptionsToTerraform = databrewJobOutputsFormatOptionsToTerraform;
function databrewJobOutputsLocationToTerraform(struct) {
    if (!cdktf.canInspect(struct)) {
        return struct;
    }
    return {
        bucket: cdktf.stringToTerraform(struct.bucket),
        key: cdktf.stringToTerraform(struct.key),
    };
}
exports.databrewJobOutputsLocationToTerraform = databrewJobOutputsLocationToTerraform;
function databrewJobOutputsToTerraform(struct) {
    if (!cdktf.canInspect(struct)) {
        return struct;
    }
    return {
        compression_format: cdktf.stringToTerraform(struct.compressionFormat),
        format: cdktf.stringToTerraform(struct.format),
        format_options: databrewJobOutputsFormatOptionsToTerraform(struct.formatOptions),
        location: databrewJobOutputsLocationToTerraform(struct.location),
        overwrite: cdktf.booleanToTerraform(struct.overwrite),
        partition_columns: cdktf.listMapper(cdktf.stringToTerraform)(struct.partitionColumns),
    };
}
exports.databrewJobOutputsToTerraform = databrewJobOutputsToTerraform;
function databrewJobProfileConfigurationColumnStatisticsConfigurationsSelectorsToTerraform(struct) {
    if (!cdktf.canInspect(struct)) {
        return struct;
    }
    return {
        name: cdktf.stringToTerraform(struct.name),
        regex: cdktf.stringToTerraform(struct.regex),
    };
}
exports.databrewJobProfileConfigurationColumnStatisticsConfigurationsSelectorsToTerraform = databrewJobProfileConfigurationColumnStatisticsConfigurationsSelectorsToTerraform;
function databrewJobProfileConfigurationColumnStatisticsConfigurationsStatisticsOverridesToTerraform(struct) {
    if (!cdktf.canInspect(struct)) {
        return struct;
    }
    return {
        parameters: cdktf.hashMapper(cdktf.anyToTerraform)(struct.parameters),
        statistic: cdktf.stringToTerraform(struct.statistic),
    };
}
exports.databrewJobProfileConfigurationColumnStatisticsConfigurationsStatisticsOverridesToTerraform = databrewJobProfileConfigurationColumnStatisticsConfigurationsStatisticsOverridesToTerraform;
function databrewJobProfileConfigurationColumnStatisticsConfigurationsStatisticsToTerraform(struct) {
    if (!cdktf.canInspect(struct)) {
        return struct;
    }
    return {
        included_statistics: cdktf.listMapper(cdktf.stringToTerraform)(struct.includedStatistics),
        overrides: cdktf.listMapper(databrewJobProfileConfigurationColumnStatisticsConfigurationsStatisticsOverridesToTerraform)(struct.overrides),
    };
}
exports.databrewJobProfileConfigurationColumnStatisticsConfigurationsStatisticsToTerraform = databrewJobProfileConfigurationColumnStatisticsConfigurationsStatisticsToTerraform;
function databrewJobProfileConfigurationColumnStatisticsConfigurationsToTerraform(struct) {
    if (!cdktf.canInspect(struct)) {
        return struct;
    }
    return {
        selectors: cdktf.listMapper(databrewJobProfileConfigurationColumnStatisticsConfigurationsSelectorsToTerraform)(struct.selectors),
        statistics: databrewJobProfileConfigurationColumnStatisticsConfigurationsStatisticsToTerraform(struct.statistics),
    };
}
exports.databrewJobProfileConfigurationColumnStatisticsConfigurationsToTerraform = databrewJobProfileConfigurationColumnStatisticsConfigurationsToTerraform;
function databrewJobProfileConfigurationDatasetStatisticsConfigurationOverridesToTerraform(struct) {
    if (!cdktf.canInspect(struct)) {
        return struct;
    }
    return {
        parameters: cdktf.hashMapper(cdktf.anyToTerraform)(struct.parameters),
        statistic: cdktf.stringToTerraform(struct.statistic),
    };
}
exports.databrewJobProfileConfigurationDatasetStatisticsConfigurationOverridesToTerraform = databrewJobProfileConfigurationDatasetStatisticsConfigurationOverridesToTerraform;
function databrewJobProfileConfigurationDatasetStatisticsConfigurationToTerraform(struct) {
    if (!cdktf.canInspect(struct)) {
        return struct;
    }
    return {
        included_statistics: cdktf.listMapper(cdktf.stringToTerraform)(struct.includedStatistics),
        overrides: cdktf.listMapper(databrewJobProfileConfigurationDatasetStatisticsConfigurationOverridesToTerraform)(struct.overrides),
    };
}
exports.databrewJobProfileConfigurationDatasetStatisticsConfigurationToTerraform = databrewJobProfileConfigurationDatasetStatisticsConfigurationToTerraform;
function databrewJobProfileConfigurationProfileColumnsToTerraform(struct) {
    if (!cdktf.canInspect(struct)) {
        return struct;
    }
    return {
        name: cdktf.stringToTerraform(struct.name),
        regex: cdktf.stringToTerraform(struct.regex),
    };
}
exports.databrewJobProfileConfigurationProfileColumnsToTerraform = databrewJobProfileConfigurationProfileColumnsToTerraform;
function databrewJobProfileConfigurationToTerraform(struct) {
    if (!cdktf.canInspect(struct)) {
        return struct;
    }
    return {
        column_statistics_configurations: cdktf.listMapper(databrewJobProfileConfigurationColumnStatisticsConfigurationsToTerraform)(struct.columnStatisticsConfigurations),
        dataset_statistics_configuration: databrewJobProfileConfigurationDatasetStatisticsConfigurationToTerraform(struct.datasetStatisticsConfiguration),
        profile_columns: cdktf.listMapper(databrewJobProfileConfigurationProfileColumnsToTerraform)(struct.profileColumns),
    };
}
exports.databrewJobProfileConfigurationToTerraform = databrewJobProfileConfigurationToTerraform;
function databrewJobRecipeToTerraform(struct) {
    if (!cdktf.canInspect(struct)) {
        return struct;
    }
    return {
        name: cdktf.stringToTerraform(struct.name),
        version: cdktf.stringToTerraform(struct.version),
    };
}
exports.databrewJobRecipeToTerraform = databrewJobRecipeToTerraform;
function databrewJobTagsToTerraform(struct) {
    if (!cdktf.canInspect(struct)) {
        return struct;
    }
    return {
        key: cdktf.stringToTerraform(struct.key),
        value: cdktf.stringToTerraform(struct.value),
    };
}
exports.databrewJobTagsToTerraform = databrewJobTagsToTerraform;
/**
* Represents a {@link https://www.terraform.io/docs/providers/awscc/r/databrew_job.html awscc_databrew_job}
*/
class DatabrewJob extends cdktf.TerraformResource {
    // ===========
    // INITIALIZER
    // ===========
    /**
    * Create a new {@link https://www.terraform.io/docs/providers/awscc/r/databrew_job.html awscc_databrew_job} Resource
    *
    * @param scope The scope in which to define this construct
    * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
    * @param options DatabrewJobConfig
    */
    constructor(scope, id, config) {
        super(scope, id, {
            terraformResourceType: 'awscc_databrew_job',
            terraformGeneratorMetadata: {
                providerName: 'awscc'
            },
            provider: config.provider,
            dependsOn: config.dependsOn,
            count: config.count,
            lifecycle: config.lifecycle
        });
        this._dataCatalogOutputs = config.dataCatalogOutputs;
        this._databaseOutputs = config.databaseOutputs;
        this._datasetName = config.datasetName;
        this._encryptionKeyArn = config.encryptionKeyArn;
        this._encryptionMode = config.encryptionMode;
        this._jobSample = config.jobSample;
        this._logSubscription = config.logSubscription;
        this._maxCapacity = config.maxCapacity;
        this._maxRetries = config.maxRetries;
        this._name = config.name;
        this._outputLocation = config.outputLocation;
        this._outputs = config.outputs;
        this._profileConfiguration = config.profileConfiguration;
        this._projectName = config.projectName;
        this._recipe = config.recipe;
        this._roleArn = config.roleArn;
        this._tags = config.tags;
        this._timeout = config.timeout;
        this._type = config.type;
    }
    get dataCatalogOutputs() {
        return this.interpolationForAttribute('data_catalog_outputs');
    }
    set dataCatalogOutputs(value) {
        this._dataCatalogOutputs = value;
    }
    resetDataCatalogOutputs() {
        this._dataCatalogOutputs = undefined;
    }
    // Temporarily expose input value. Use with caution.
    get dataCatalogOutputsInput() {
        return this._dataCatalogOutputs;
    }
    get databaseOutputs() {
        return this.interpolationForAttribute('database_outputs');
    }
    set databaseOutputs(value) {
        this._databaseOutputs = value;
    }
    resetDatabaseOutputs() {
        this._databaseOutputs = undefined;
    }
    // Temporarily expose input value. Use with caution.
    get databaseOutputsInput() {
        return this._databaseOutputs;
    }
    get datasetName() {
        return this.getStringAttribute('dataset_name');
    }
    set datasetName(value) {
        this._datasetName = value;
    }
    resetDatasetName() {
        this._datasetName = undefined;
    }
    // Temporarily expose input value. Use with caution.
    get datasetNameInput() {
        return this._datasetName;
    }
    get encryptionKeyArn() {
        return this.getStringAttribute('encryption_key_arn');
    }
    set encryptionKeyArn(value) {
        this._encryptionKeyArn = value;
    }
    resetEncryptionKeyArn() {
        this._encryptionKeyArn = undefined;
    }
    // Temporarily expose input value. Use with caution.
    get encryptionKeyArnInput() {
        return this._encryptionKeyArn;
    }
    get encryptionMode() {
        return this.getStringAttribute('encryption_mode');
    }
    set encryptionMode(value) {
        this._encryptionMode = value;
    }
    resetEncryptionMode() {
        this._encryptionMode = undefined;
    }
    // Temporarily expose input value. Use with caution.
    get encryptionModeInput() {
        return this._encryptionMode;
    }
    // id - computed: true, optional: false, required: false
    get id() {
        return this.getStringAttribute('id');
    }
    get jobSample() {
        return this.interpolationForAttribute('job_sample');
    }
    set jobSample(value) {
        this._jobSample = value;
    }
    resetJobSample() {
        this._jobSample = undefined;
    }
    // Temporarily expose input value. Use with caution.
    get jobSampleInput() {
        return this._jobSample;
    }
    get logSubscription() {
        return this.getStringAttribute('log_subscription');
    }
    set logSubscription(value) {
        this._logSubscription = value;
    }
    resetLogSubscription() {
        this._logSubscription = undefined;
    }
    // Temporarily expose input value. Use with caution.
    get logSubscriptionInput() {
        return this._logSubscription;
    }
    get maxCapacity() {
        return this.getNumberAttribute('max_capacity');
    }
    set maxCapacity(value) {
        this._maxCapacity = value;
    }
    resetMaxCapacity() {
        this._maxCapacity = undefined;
    }
    // Temporarily expose input value. Use with caution.
    get maxCapacityInput() {
        return this._maxCapacity;
    }
    get maxRetries() {
        return this.getNumberAttribute('max_retries');
    }
    set maxRetries(value) {
        this._maxRetries = value;
    }
    resetMaxRetries() {
        this._maxRetries = undefined;
    }
    // Temporarily expose input value. Use with caution.
    get maxRetriesInput() {
        return this._maxRetries;
    }
    get name() {
        return this.getStringAttribute('name');
    }
    set name(value) {
        this._name = value;
    }
    // Temporarily expose input value. Use with caution.
    get nameInput() {
        return this._name;
    }
    get outputLocation() {
        return this.interpolationForAttribute('output_location');
    }
    set outputLocation(value) {
        this._outputLocation = value;
    }
    resetOutputLocation() {
        this._outputLocation = undefined;
    }
    // Temporarily expose input value. Use with caution.
    get outputLocationInput() {
        return this._outputLocation;
    }
    get outputs() {
        return this.interpolationForAttribute('outputs');
    }
    set outputs(value) {
        this._outputs = value;
    }
    resetOutputs() {
        this._outputs = undefined;
    }
    // Temporarily expose input value. Use with caution.
    get outputsInput() {
        return this._outputs;
    }
    get profileConfiguration() {
        return this.interpolationForAttribute('profile_configuration');
    }
    set profileConfiguration(value) {
        this._profileConfiguration = value;
    }
    resetProfileConfiguration() {
        this._profileConfiguration = undefined;
    }
    // Temporarily expose input value. Use with caution.
    get profileConfigurationInput() {
        return this._profileConfiguration;
    }
    get projectName() {
        return this.getStringAttribute('project_name');
    }
    set projectName(value) {
        this._projectName = value;
    }
    resetProjectName() {
        this._projectName = undefined;
    }
    // Temporarily expose input value. Use with caution.
    get projectNameInput() {
        return this._projectName;
    }
    get recipe() {
        return this.interpolationForAttribute('recipe');
    }
    set recipe(value) {
        this._recipe = value;
    }
    resetRecipe() {
        this._recipe = undefined;
    }
    // Temporarily expose input value. Use with caution.
    get recipeInput() {
        return this._recipe;
    }
    get roleArn() {
        return this.getStringAttribute('role_arn');
    }
    set roleArn(value) {
        this._roleArn = value;
    }
    // Temporarily expose input value. Use with caution.
    get roleArnInput() {
        return this._roleArn;
    }
    get tags() {
        return this.interpolationForAttribute('tags');
    }
    set tags(value) {
        this._tags = value;
    }
    resetTags() {
        this._tags = undefined;
    }
    // Temporarily expose input value. Use with caution.
    get tagsInput() {
        return this._tags;
    }
    get timeout() {
        return this.getNumberAttribute('timeout');
    }
    set timeout(value) {
        this._timeout = value;
    }
    resetTimeout() {
        this._timeout = undefined;
    }
    // Temporarily expose input value. Use with caution.
    get timeoutInput() {
        return this._timeout;
    }
    get type() {
        return this.getStringAttribute('type');
    }
    set type(value) {
        this._type = value;
    }
    // Temporarily expose input value. Use with caution.
    get typeInput() {
        return this._type;
    }
    // =========
    // SYNTHESIS
    // =========
    synthesizeAttributes() {
        return {
            data_catalog_outputs: cdktf.listMapper(databrewJobDataCatalogOutputsToTerraform)(this._dataCatalogOutputs),
            database_outputs: cdktf.listMapper(databrewJobDatabaseOutputsToTerraform)(this._databaseOutputs),
            dataset_name: cdktf.stringToTerraform(this._datasetName),
            encryption_key_arn: cdktf.stringToTerraform(this._encryptionKeyArn),
            encryption_mode: cdktf.stringToTerraform(this._encryptionMode),
            job_sample: databrewJobJobSampleToTerraform(this._jobSample),
            log_subscription: cdktf.stringToTerraform(this._logSubscription),
            max_capacity: cdktf.numberToTerraform(this._maxCapacity),
            max_retries: cdktf.numberToTerraform(this._maxRetries),
            name: cdktf.stringToTerraform(this._name),
            output_location: databrewJobOutputLocationToTerraform(this._outputLocation),
            outputs: cdktf.listMapper(databrewJobOutputsToTerraform)(this._outputs),
            profile_configuration: databrewJobProfileConfigurationToTerraform(this._profileConfiguration),
            project_name: cdktf.stringToTerraform(this._projectName),
            recipe: databrewJobRecipeToTerraform(this._recipe),
            role_arn: cdktf.stringToTerraform(this._roleArn),
            tags: cdktf.listMapper(databrewJobTagsToTerraform)(this._tags),
            timeout: cdktf.numberToTerraform(this._timeout),
            type: cdktf.stringToTerraform(this._type),
        };
    }
}
exports.DatabrewJob = DatabrewJob;
// =================
// STATIC PROPERTIES
// =================
DatabrewJob.tfResourceType = "awscc_databrew_job";
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZGF0YWJyZXctam9iLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiZGF0YWJyZXctam9iLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7QUFBQSxvRUFBb0U7QUFDcEUsMkNBQTJDOzs7QUFHM0MsK0JBQStCO0FBdUgvQixTQUFnQixvRUFBb0UsQ0FBQyxNQUFrRTtJQUNySixJQUFJLENBQUMsS0FBSyxDQUFDLFVBQVUsQ0FBQyxNQUFNLENBQUMsRUFBRTtRQUFFLE9BQU8sTUFBTSxDQUFDO0tBQUU7SUFDakQsT0FBTztRQUNMLE1BQU0sRUFBRSxLQUFLLENBQUMsaUJBQWlCLENBQUMsTUFBTyxDQUFDLE1BQU0sQ0FBQztRQUMvQyxHQUFHLEVBQUUsS0FBSyxDQUFDLGlCQUFpQixDQUFDLE1BQU8sQ0FBQyxHQUFHLENBQUM7S0FDMUMsQ0FBQTtBQUNILENBQUM7QUFORCxvSkFNQztBQWVELFNBQWdCLHVEQUF1RCxDQUFDLE1BQXFEO0lBQzNILElBQUksQ0FBQyxLQUFLLENBQUMsVUFBVSxDQUFDLE1BQU0sQ0FBQyxFQUFFO1FBQUUsT0FBTyxNQUFNLENBQUM7S0FBRTtJQUNqRCxPQUFPO1FBQ0wsVUFBVSxFQUFFLEtBQUssQ0FBQyxpQkFBaUIsQ0FBQyxNQUFPLENBQUMsU0FBUyxDQUFDO1FBQ3RELGNBQWMsRUFBRSxvRUFBb0UsQ0FBQyxNQUFPLENBQUMsYUFBYSxDQUFDO0tBQzVHLENBQUE7QUFDSCxDQUFDO0FBTkQsMEhBTUM7QUFhRCxTQUFnQix5REFBeUQsQ0FBQyxNQUF1RDtJQUMvSCxJQUFJLENBQUMsS0FBSyxDQUFDLFVBQVUsQ0FBQyxNQUFNLENBQUMsRUFBRTtRQUFFLE9BQU8sTUFBTSxDQUFDO0tBQUU7SUFDakQsT0FBTztRQUNMLE1BQU0sRUFBRSxLQUFLLENBQUMsaUJBQWlCLENBQUMsTUFBTyxDQUFDLE1BQU0sQ0FBQztRQUMvQyxHQUFHLEVBQUUsS0FBSyxDQUFDLGlCQUFpQixDQUFDLE1BQU8sQ0FBQyxHQUFHLENBQUM7S0FD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LElBQUksQ0FBQyxPQUFPLENBQUM7WUFDbEQsUUFBUSxFQUFFLEtBQUssQ0FBQyxpQkFBaUIsQ0FBQyxJQUFJLENBQUMsUUFBUSxDQUFDO1lBQ2hELElBQUksRUFBRSxLQUFLLENBQUMsVUFBVSxDQUFDLDBCQUEwQixDQUFDLENBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQztZQUM5RCxPQUFPLEVBQUUsS0FBSyxDQUFDLGlCQUFpQixDQUFDLElBQUksQ0FBQyxRQUFRLENBQUM7WUFDL0MsSUFBSSxFQUFFLEtBQUssQ0FBQyxpQkFBaUIsQ0FBQyxJQUFJLENBQUMsS0FBSyxDQUFDO1NBQzFDLENBQUM7SUFDSixDQUFDOztBQTVYSCxrQ0E2WEM7QUEzWEMsb0JBQW9CO0FBQ3BCLG9CQUFvQjtBQUNwQixvQkFBb0I7QUFDRywwQkFBYyxHQUFXLG9CQUFvQixDQUFDIiwic291cmNlc0NvbnRlbnQiOlsiLy8gaHR0cHM6Ly93d3cudGVycmFmb3JtLmlvL2RvY3MvcHJvdmlkZXJzL2F3c2NjL3IvZGF0YWJyZXdfam9iLmh0bWxcbi8vIGdlbmVyYXRlZCBmcm9tIHRlcnJhZm9ybSByZXNvdXJjZSBzY2hlbWFcblxuaW1wb3J0IHsgQ29uc3RydWN0IH0gZnJvbSAnY29uc3RydWN0cyc7XG5pbXBvcnQgKiBhcyBjZGt0ZiBmcm9tICdjZGt0Zic7XG5cbi8vIENvbmZpZ3VyYXRpb25cblxuZXhwb3J0IGludGVyZmFjZSBEYXRhYnJld0pvYkNvbmZpZyBleHRlbmRzIGNka3RmLlRlcnJhZm9ybU1ldGFBcmd1bWVudHMge1xuICAvKipcbiAgKiBEb2NzIGF0IFRlcnJhZm9ybSBSZWdpc3RyeToge0BsaW5rIGh0dHBzOi8vd3d3LnRlcnJhZm9ybS5pby9kb2NzL3Byb3ZpZGVycy9hd3NjYy9yL2RhdGFicmV3X2pvYi5odG1sI2RhdGFfY2F0YWxvZ19vdXRwdXRzIERhdGFicmV3Sm9iI2RhdGFfY2F0YWxvZ19vdXRwdXRzfVxuICAqL1xuICByZWFkb25seSBkYXRhQ2F0YWxvZ091dHB1dHM/OiBEYXRhYnJld0pvYkRhdGFDYXRhbG9nT3V0cHV0c1tdO1xuICAvKipcbiAgKiBEb2NzIGF0IFRlcnJhZm9ybSBSZWdpc3RyeToge0BsaW5rIGh0dHBzOi8vd3d3LnRlcnJhZm9ybS5pby9kb2NzL3Byb3ZpZGVycy9hd3NjYy9yL2RhdGFicmV3X2pvYi5odG1sI2RhdGFiYXNlX291dHB1dHMgRGF0YWJyZXdKb2IjZGF0YWJhc2Vfb3V0cHV0c31cbiAgKi9cbiAgcmVhZG9ubHkgZGF0YWJhc2VPdXRwdXRzPzogRGF0YWJyZXdKb2JEYXRhYmFzZU91dHB1dHNbXTtcbiAgLyoqXG4gICogRGF0YXNldCBuYW1lXG4gICogXG4gICogRG9jcyBhdCBUZXJyYWZvcm0gUmVnaXN0cnk6IHtAbGluayBodHRwczovL3d3dy50ZXJyYWZvcm0uaW8vZG9jcy9wcm92aWRlcnMvYXdzY2Mvci9kYXRhYnJld19qb2IuaHRtbCNkYXRhc2V0X25hbWUgRGF0YWJyZXdKb2IjZGF0YXNldF9uYW1lfVxuICAqL1xuICByZWFkb25seSBkYXRhc2V0TmFtZT86IHN0cmluZztcbiAgLyoqXG4gICogRW5jcnlwdGlvbiBLZXkgQXJuXG4gICogXG4gICogRG9jcyBhdCBUZXJyYWZvcm0gUmVnaXN0cnk6IHtAbGluayBodHRwczovL3d3dy50ZXJyYWZvcm0uaW8vZG9jcy9wcm92aWRlcnMvYXdzY2Mvci9kYXRhYnJld19qb2IuaHRtbCNlbmNyeXB0aW9uX2tleV9hcm4gRGF0YWJyZXdKb2IjZW5jcnlwdGlvbl9rZXlfYXJufVxuICAqL1xuICByZWFkb25seSBlbmNyeXB0aW9uS2V5QXJuPzogc3RyaW5nO1xuICAvKipcbiAgKiBFbmNyeXB0aW9uIG1vZGVcbiAgKiBcbiAgKiBEb2NzIGF0IFRlcnJhZm9ybSBSZWdpc3RyeToge0BsaW5rIGh0dHBzOi8vd3d3LnRlcnJhZm9ybS5pby9kb2NzL3Byb3ZpZGVycy9hd3NjYy9yL2RhdGFicmV3X2pvYi5odG1sI2VuY3J5cHRpb25fbW9kZSBEYXRhYnJld0pvYiNlbmNyeXB0aW9uX21vZGV9XG4gICovXG4gIHJlYWRvbmx5IGVuY3J5cHRpb25Nb2RlPzogc3RyaW5nO1xuICAvKipcbiAgKiBKb2IgU2FtcGxlXG4gICogXG4gICogRG9jcyBhdCBUZXJyYWZvcm0gUmVnaXN0cnk6IHtAbGluayBodHRwczovL3d3dy50ZXJyYWZvcm0uaW8vZG9jcy9wcm92aWRlcnMvYXdzY2Mvci9kYXRhYnJld19qb2IuaHRtbCNqb2Jfc2FtcGxlIERhdGFicmV3Sm9iI2pvYl9zYW1wbGV9XG4gICovXG4gIHJlYWRvbmx5IGpvYlNhbXBsZT86IERhdGFicmV3Sm9iSm9iU2FtcGxlO1xuICAvKipcbiAgKiBMb2cgc3Vic2NyaXB0aW9uXG4gICogXG4gICogRG9jcyBhdCBUZXJyYWZvcm0gUmVnaXN0cnk6IHtAbGluayBodHRwczovL3d3dy50ZXJyYWZvcm0uaW8vZG9jcy9wcm92aWRlcnMvYXdzY2Mvci9kYXRhYnJld19qb2IuaHRtbCNsb2dfc3Vic2NyaXB0aW9uIERhdGFicmV3Sm9iI2xvZ19zdWJzY3JpcHRpb259XG4gICovXG4gIHJlYWRvbmx5IGxvZ1N1YnNjcmlwdGlvbj86IHN0cmluZztcbiAgLyoqXG4gICogTWF4IGNhcGFjaXR5XG4gICogXG4gICogRG9jcyBhdCBUZXJyYWZvcm0gUmVnaXN0cnk6IHtAbGluayBodHRwczovL3d3dy50ZXJyYWZvcm0uaW8vZG9jcy9wcm92aWRlcnMvYXdzY2Mvci9kYXRhYnJld19qb2IuaHRtbCNtYXhfY2FwYWNpdHkgRGF0YWJyZXdKb2IjbWF4X2NhcGFjaXR5fVxuICAqL1xuICByZWFkb25seSBtYXhDYXBhY2l0eT86IG51bWJlcjtcbiAgLyoqXG4gICogTWF4IHJldHJpZXNcbiAgKiBcbiAgKiBEb2NzIGF0IFRlcnJhZm9ybSBSZWdpc3RyeToge0BsaW5rIGh0dHBzOi8vd3d3LnRlcnJhZm9ybS5pby9kb2NzL3Byb3ZpZGVycy9hd3NjYy9yL2RhdGFicmV3X2pvYi5odG1sI21heF9yZXRyaWVzIERhdGFicmV3Sm9iI21heF9yZXRyaWVzfVxuICAqL1xuICByZWFkb25seSBtYXhSZXRyaWVzPzogbnVtYmVyO1xuICAvKipcbiAgKiBKb2IgbmFtZVxuICAqIFxuICAqIERvY3MgYXQgVGVycmFmb3JtIFJlZ2lzdHJ5OiB7QGxpbmsgaHR0cHM6Ly93d3cudGVycmFmb3JtLmlvL2RvY3MvcHJvdmlkZXJzL2F3c2NjL3IvZGF0YWJyZXdfam9iLmh0bWwjbmFtZSBEYXRhYnJld0pvYiNuYW1lfVxuICAqL1xuICByZWFkb25seSBuYW1lOiBzdHJpbmc7XG4gIC8qKlxuICAqIE91dHB1dCBsb2NhdGlvblxuICAqIFxuICAqIERvY3MgYXQgVGVycmFmb3JtIFJlZ2lzdHJ5OiB7QGxpbmsgaHR0cHM6Ly93d3cudGVycmFmb3JtLmlvL2RvY3MvcHJvdmlkZXJzL2F3c2NjL3IvZGF0YWJyZXdfam9iLmh0bWwjb3V0cHV0X2xvY2F0aW9uIERhdGFicmV3Sm9iI291dHB1dF9sb2NhdGlvbn1cbiAgKi9cbiAgcmVhZG9ubHkgb3V0cHV0TG9jYXRpb24/OiBEYXRhYnJld0pvYk91dHB1dExvY2F0aW9uO1xuICAvKipcbiAgKiBEb2NzIGF0IFRlcnJhZm9ybSBSZWdpc3RyeToge0BsaW5rIGh0dHBzOi8vd3d3LnRlcnJhZm9ybS5pby9kb2NzL3Byb3ZpZGVycy9hd3NjYy9yL2RhdGFicmV3X2pvYi5odG1sI291dHB1dHMgRGF0YWJyZXdKb2Ijb3V0cHV0c31cbiAgKi9cbiAgcmVhZG9ubHkgb3V0cHV0cz86IERhdGFicmV3Sm9iT3V0cHV0c1tdO1xuICAvKipcbiAgKiBEb2NzIGF0IFRlcnJhZm9ybSBSZWdpc3RyeToge0BsaW5rIGh0dHBzOi8vd3d3LnRlcnJhZm9ybS5pby9kb2NzL3Byb3ZpZGVycy9hd3NjYy9yL2RhdGFicmV3X2pvYi5odG1sI3Byb2ZpbGVfY29uZmlndXJhdGlvbiBEYXRhYnJld0pvYiNwcm9maWxlX2NvbmZpZ3VyYXRpb259XG4gICovXG4gIHJlYWRvbmx5IHByb2ZpbGVDb25maWd1cmF0aW9uPzogRGF0YWJyZXdKb2JQcm9maWxlQ29uZmlndXJhdGlvbjtcbiAgLyoqXG4gICogUHJvamVjdCBuYW1lXG4gICogXG4gICogRG9jcyBhdCBUZXJyYWZvcm0gUmVnaXN0cnk6IHtAbGluayBodHRwczovL3d3dy50ZXJyYWZvcm0uaW8vZG9jcy9wcm92aWRlcnMvYXdzY2Mvci9kYXRhYnJld19qb2IuaHRtbCNwcm9qZWN0X25hbWUgRGF0YWJyZXdKb2IjcHJvamVjdF9uYW1lfVxuICAqL1xuICByZWFkb25seSBwcm9qZWN0TmFtZT86IHN0cmluZztcbiAgLyoqXG4gICogRG9jcyBhdCBUZXJyYWZvcm0gUmVnaXN0cnk6IHtAbGluayBodHRwczovL3d3dy50ZXJyYWZvcm0uaW8vZG9jcy9wcm92aWRlcnMvYXdzY2Mvci9kYXRhYnJld19qb2IuaHRtbCNyZWNpcGUgRGF0YWJyZXdKb2IjcmVjaXBlfVxuICAqL1xuICByZWFkb25seSByZWNpcGU/OiBEYXRhYnJld0pvYlJlY2lwZTtcbiAgLyoqXG4gICogUm9sZSBhcm5cbiAgKiBcbiAgKiBEb2NzIGF0IFRlcnJhZm9ybSBSZWdpc3RyeToge0BsaW5rIGh0dHBzOi8vd3d3LnRlcnJhZm9ybS5pby9kb2NzL3Byb3ZpZGVycy9hd3NjYy9yL2RhdGFicmV3X2pvYi5odG1sI3JvbGVfYXJuIERhdGFicmV3Sm9iI3JvbGVfYXJufVxuICAqL1xuICByZWFkb25seSByb2xlQXJuOiBzdHJpbmc7XG4gIC8qKlxuICAqIERvY3MgYXQgVGVycmFmb3JtIFJlZ2lzdHJ5OiB7QGxpbmsgaHR0cHM6Ly93d3cudGVycmFmb3JtLmlvL2RvY3MvcHJvdmlkZXJzL2F3c2NjL3IvZGF0YWJyZXdfam9iLmh0bWwjdGFncyBEYXRhYnJld0pvYiN0YWdzfVxuICAqL1xuICByZWFkb25seSB0YWdzPzogRGF0YWJyZXdKb2JUYWdzW107XG4gIC8qKlxuICAqIFRpbWVvdXRcbiAgKiBcbiAgKiBEb2NzIGF0IFRlcnJhZm9ybSBSZWdpc3RyeToge0BsaW5rIGh0dHBzOi8vd3d3LnRlcnJhZm9ybS5pby9kb2NzL3Byb3ZpZGVycy9hd3NjYy9yL2RhdGFicmV3X2pvYi5odG1sI3RpbWVvdXQgRGF0YWJyZXdKb2IjdGltZW91dH1cbiAgKi9cbiAgcmVhZG9ubHkgdGltZW91dD86IG51bWJlcjtcbiAgLyoqXG4gICogSm9iIHR5cGVcbiAgKiBcbiAgKiBEb2NzIGF0IFRlcnJhZm9ybSBSZWdpc3RyeToge0BsaW5rIGh0dHBzOi8vd3d3LnRlcnJhZm9ybS5pby9kb2NzL3Byb3ZpZGVycy9hd3NjYy9yL2RhdGFicmV3X2pvYi5odG1sI3R5cGUgRGF0YWJyZXdKb2IjdHlwZX1cbiAgKi9cbiAgcmVhZG9ubHkgdHlwZTogc3RyaW5nO1xufVxuZXhwb3J0IGludGVyZmFjZSBEYXRhYnJld0pvYkRhdGFDYXRhbG9nT3V0cHV0c0RhdGFiYXNlT3B0aW9uc1RlbXBEaXJlY3Rvcnkge1xuICAvKipcbiAgKiBEb2NzIGF0IFRlcnJhZm9ybSBSZWdpc3RyeToge0BsaW5rIGh0dHBzOi8vd3d3LnRlcnJhZm9ybS5pby9kb2NzL3Byb3ZpZGVycy9hd3NjYy9yL2RhdGFicmV3X2pvYi5odG1sI2J1Y2tldCBEYXRhYnJld0pvYiNidWNrZXR9XG4gICovXG4gIHJlYWRvbmx5IGJ1Y2tldDogc3RyaW5nO1xuICAvKipcbiAgKiBEb2NzIGF0IFRlcnJhZm9ybSBSZWdpc3RyeToge0BsaW5rIGh0dHBzOi8vd3d3LnRlcnJhZm9ybS5pby9kb2NzL3Byb3ZpZGVycy9hd3NjYy9yL2RhdGFicmV3X2pvYi5odG1sI2tleSBEYXRhYnJld0pvYiNrZXl9XG4gICovXG4gIHJlYWRvbmx5IGtleT86IHN0cmluZztcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGRhdGFicmV3Sm9iRGF0YUNhdGFsb2dPdXRwdXRzRGF0YWJhc2VPcHRpb25zVGVtcERpcmVjdG9yeVRvVGVycmFmb3JtKHN0cnVjdD86IERhdGFicmV3Sm9iRGF0YUNhdGFsb2dPdXRwdXRzRGF0YWJhc2VPcHRpb25zVGVtcERpcmVjdG9yeSk6IGFueSB7XG4gIGlmICghY2RrdGYuY2FuSW5zcGVjdChzdHJ1Y3QpKSB7IHJldHVybiBzdHJ1Y3Q7IH1cbiAgcmV0dXJuIHtcbiAgICBidWNrZXQ6IGNka3RmLnN0cmluZ1RvVGVycmFmb3JtKHN0cnVjdCEuYnVja2V0KSxcbiAgICBrZXk6IGNka3RmLnN0cmluZ1RvVGVycmFmb3JtKHN0cnVjdCEua2V5KSxcbiAgfVxufVxuXG5leHBvcnQgaW50ZXJmYWNlIERhdGFicmV3Sm9iRGF0YUNhdGFsb2dPdXRwdXRzRGF0YWJhc2VPcHRpb25zIHtcbiAgLyoqXG4gICogRG9jcyBhdCBUZXJyYWZvcm0gUmVnaXN0cnk6IHtAbGluayBodHRwczovL3d3dy50ZXJyYWZvcm0uaW8vZG9jcy9wcm92aWRlcnMvYXdzY2Mvci9kYXRhYnJld19qb2IuaHRtbCN0YWJsZV9uYW1lIERhdGFicmV3Sm9iI3RhYmxlX25hbWV9XG4gICovXG4gIHJlYWRvbmx5IHRhYmxlTmFtZTogc3RyaW5nO1xuICAvKipcbiAgKiBTMyBPdXRwdXQgbG9jYXRpb25cbiAgKiBcbiAgKiBEb2NzIGF0IFRlcnJhZm9ybSBSZWdpc3RyeToge0BsaW5rIGh0dHBzOi8vd3d3LnRlcnJhZm9ybS5pby9kb2NzL3Byb3ZpZGVycy9hd3NjYy9yL2RhdGFicmV3X2pvYi5odG1sI3RlbXBfZGlyZWN0b3J5IERhdGFicmV3Sm9iI3RlbXBfZGlyZWN0b3J5fVxuICAqL1xuICByZWFkb25seSB0ZW1wRGlyZWN0b3J5PzogRGF0YWJyZXdKb2JEYXRhQ2F0YWxvZ091dHB1dHNEYXRhYmFzZU9wdGlvbnNUZW1wRGlyZWN0b3J5O1xufVxuXG5leHBvcnQgZnVuY3Rpb24gZGF0YWJyZXdKb2JEYXRhQ2F0YWxvZ091dHB1dHNEYXRhYmFzZU9wdGlvbnNUb1RlcnJhZm9ybShzdHJ1Y3Q/OiBEYXRhYnJld0pvYkRhdGFDYXRhbG9nT3V0cHV0c0RhdGFiYXNlT3B0aW9ucyk6IGFueSB7XG4gIGlmICghY2RrdGYuY2FuSW5zcGVjdChzdHJ1Y3QpKSB7IHJldHVybiBzdHJ1Y3Q7IH1cbiAgcmV0dXJuIHtcbiAgICB0YWJsZV9uYW1lOiBjZGt0Zi5zdHJpbmdUb1RlcnJhZm9ybShzdHJ1Y3QhLnRhYmxlTmFtZSksXG4gICAgdGVtcF9kaXJlY3Rvcnk6IGRhdGFicmV3Sm9iRGF0YUNhdGFsb2dPdXRwdXRzRGF0YWJhc2VPcHRpb25zVGVtcERpcmVjdG9yeVRvVGVycmFmb3JtKHN0cnVjdCEudGVtcERpcmVjdG9yeSksXG4gIH1cbn1cblxuZXhwb3J0IGludGVyZmFjZSBEYXRhYnJld0pvYkRhdGFDYXRhbG9nT3V0cHV0c1MzT3B0aW9uc0xvY2F0aW9uIHtcbiAgLyoqXG4gICogRG9jcyBhdCBUZXJyYWZvcm0gUmVnaXN0cnk6IHtAbGluayBodHRwczovL3d3dy50ZXJyYWZvcm0uaW8vZG9jcy9wcm92aWRlcnMvYXdzY2Mvci9kYXRhYnJld19qb2IuaHRtbCNidWNrZXQgRGF0YWJyZXdKb2IjYnVja2V0fVxuICAqL1xuICByZWFkb25seSBidWNrZXQ6IHN0cmluZztcbiAgLyoqXG4gICogRG9jcyBhdCBUZXJyYWZvcm0gUmVnaXN0cnk6IHtAbGluayBodHRwczovL3d3dy50ZXJyYWZvcm0uaW8vZG9jcy9wcm92aWRlcnMvYXdzY2Mvci9kYXRhYnJld19qb2IuaHRtbCNrZXkgRGF0YWJyZXdKb2Ija2V5fVxuICAqL1xuICByZWFkb25seSBrZXk/OiBzdHJpbmc7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBkYXRhYnJld0pvYkRhdGFDYXRhbG9nT3V0cHV0c1MzT3B0aW9uc0xvY2F0aW9uVG9UZXJyYWZvcm0oc3RydWN0PzogRGF0YWJyZXdKb2JEYXRhQ2F0YWxvZ091dHB1dHNTM09wdGlvbnNMb2NhdGlvbik6IGFueSB7XG4gIGlmICghY2RrdGYuY2FuSW5zcGVjdChzdHJ1Y3QpKSB7IHJldHVybiBzdHJ1Y3Q7IH1cbiAgcmV0dXJuIHtcbiAgICBidWNrZXQ6IGNka3RmLnN0cmluZ1RvVGVycmFmb3JtKHN0cnVjdCEuYnVja2V0KSxcbiAgICBrZXk6IGNka3RmLnN0cmluZ1RvVGVycmFmb3JtKHN0cnVjdCEua2V5KSxcbiAgfVxufVxuXG5leHBvcnQgaW50ZXJmYWNlIERhdGFicmV3Sm9iRGF0YUNhdGFsb2dPdXRwdXRzUzNPcHRpb25zIHtcbiAgLyoqXG4gICogUzMgT3V0cHV0IGxvY2F0aW9uXG4gICogXG4gICogRG9jcyBhdCBUZXJyYWZvcm0gUmVnaXN0cnk6IHtAbGluayBodHRwczovL3d3dy50ZXJyYWZvcm0uaW8vZG9jcy9wcm92aWRlcnMvYXdzY2Mvci9kYXRhYnJld19qb2IuaHRtbCNsb2NhdGlvbiBEYXRhYnJld0pvYiNsb2NhdGlvbn1cbiAgKi9cbiAgcmVhZG9ubHkgbG9jYXRpb246IERhdGFicmV3Sm9iRGF0YUNhdGFsb2dPdXRwdXRzUzNPcHRpb25zTG9jYXRpb247XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBkYXRhYnJld0pvYkRhdGFDYXRhbG9nT3V0cHV0c1MzT3B0aW9uc1RvVGVycmFmb3JtKHN0cnVjdD86IERhdGFicmV3Sm9iRGF0YUNhdGFsb2dPdXRwdXRzUzNPcHRpb25zKTogYW55IHtcbiAgaWYgKCFjZGt0Zi5jYW5JbnNwZWN0KHN0cnVjdCkpIHsgcmV0dXJuIHN0cnVjdDsgfVxuICByZXR1cm4ge1xuICAgIGxvY2F0aW9uOiBkYXRhYnJld0pvYkRhdGFDYXRhbG9nT3V0cHV0c1MzT3B0aW9uc0xvY2F0aW9uVG9UZXJyYWZvcm0oc3RydWN0IS5sb2NhdGlvbiksXG4gIH1cbn1cblxuZXhwb3J0IGludGVyZmFjZSBEYXRhYnJld0pvYkRhdGFDYXRhbG9nT3V0cHV0cyB7XG4gIC8qKlxuICAqIERvY3MgYXQgVGVycmFmb3JtIFJlZ2lzdHJ5OiB7QGxpbmsgaHR0cHM6Ly93d3cudGVycmFmb3JtLmlvL2RvY3MvcHJvdmlkZXJzL2F3c2NjL3IvZGF0YWJyZXdfam9iLmh0bWwjY2F0YWxvZ19pZCBEYXRhYnJld0pvYiNjYXRhbG9nX2lkfVxuICAqL1xuICByZWFkb25seSBjYXRhbG9nSWQ/OiBzdHJpbmc7XG4gIC8qKlxuICAqIERvY3MgYXQgVGVycmFmb3JtIFJlZ2lzdHJ5OiB7QGxpbmsgaHR0cHM6Ly93d3cudGVycmFmb3JtLmlvL2RvY3MvcHJvdmlkZXJzL2F3c2NjL3IvZGF0YWJyZXdfam9iLmh0bWwjZGF0YWJhc2VfbmFtZSBEYXRhYnJld0pvYiNkYXRhYmFzZV9uYW1lfVxuICAqL1xuICByZWFkb25seSBkYXRhYmFzZU5hbWU6IHN0cmluZztcbiAgLyoqXG4gICogRG9jcyBhdCBUZXJyYWZvcm0gUmVnaXN0cnk6IHtAbGluayBodHRwczovL3d3dy50ZXJyYWZvcm0uaW8vZG9jcy9wcm92aWRlcnMvYXdzY2Mvci9kYXRhYnJld19qb2IuaHRtbCNkYXRhYmFzZV9vcHRpb25zIERhdGFicmV3Sm9iI2RhdGFiYXNlX29wdGlvbnN9XG4gICovXG4gIHJlYWRvbmx5IGRhdGFiYXNlT3B0aW9ucz86IERhdGFicmV3Sm9iRGF0YUNhdGFsb2dPdXRwdXRzRGF0YWJhc2VPcHRpb25zO1xuICAvKipcbiAgKiBEb2NzIGF0IFRlcnJhZm9ybSBSZWdpc3RyeToge0BsaW5rIGh0dHBzOi8vd3d3LnRlcnJhZm9ybS5pby9kb2NzL3Byb3ZpZGVycy9hd3NjYy9yL2RhdGFicmV3X2pvYi5odG1sI292ZXJ3cml0ZSBEYXRhYnJld0pvYiNvdmVyd3JpdGV9XG4gICovXG4gIHJlYWRvbmx5IG92ZXJ3cml0ZT86IGJvb2xlYW4gfCBjZGt0Zi5JUmVzb2x2YWJsZTtcbiAgLyoqXG4gICogRG9jcyBhdCBUZXJyYWZvcm0gUmVnaXN0cnk6IHtAbGluayBodHRwczovL3d3dy50ZXJyYWZvcm0uaW8vZG9jcy9wcm92aWRlcnMvYXdzY2Mvci9kYXRhYnJld19qb2IuaHRtbCNzM19vcHRpb25zIERhdGFicmV3Sm9iI3MzX29wdGlvbnN9XG4gICovXG4gIHJlYWRvbmx5IHMzT3B0aW9ucz86IERhdGFicmV3Sm9iRGF0YUNhdGFsb2dPdXRwdXRzUzNPcHRpb25zO1xuICAvKipcbiAgKiBEb2NzIGF0IFRlcnJhZm9ybSBSZWdpc3RyeToge0BsaW5rIGh0dHBzOi8vd3d3LnRlcnJhZm9ybS5pby9kb2NzL3Byb3ZpZGVycy9hd3NjYy9yL2RhdGFicmV3X2pvYi5odG1sI3RhYmxlX25hbWUgRGF0YWJyZXdKb2IjdGFibGVfbmFtZX1cbiAgKi9cbiAgcmVhZG9ubHkgdGFibGVOYW1lOiBzdHJpbmc7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBkYXRhYnJld0pvYkRhdGFDYXRhbG9nT3V0cHV0c1RvVGVycmFmb3JtKHN0cnVjdD86IERhdGFicmV3Sm9iRGF0YUNhdGFsb2dPdXRwdXRzKTogYW55IHtcbiAgaWYgKCFjZGt0Zi5jYW5JbnNwZWN0KHN0cnVjdCkpIHsgcmV0dXJuIHN0cnVjdDsgfVxuICByZXR1cm4ge1xuICAgIGNhdGFsb2dfaWQ6IGNka3RmLnN0cmluZ1RvVGVycmFmb3JtKHN0cnVjdCEuY2F0YWxvZ0lkKSxcbiAgICBkYXRhYmFzZV9uYW1lOiBjZGt0Zi5zdHJpbmdUb1RlcnJhZm9ybShzdHJ1Y3QhLmRhdGFiYXNlTmFtZSksXG4gICAgZGF0YWJhc2Vfb3B0aW9uczogZGF0YWJyZXdKb2JEYXRhQ2F0YWxvZ091dHB1dHNEYXRhYmFzZU9wdGlvbnNUb1RlcnJhZm9ybShzdHJ1Y3QhLmRhdGFiYXNlT3B0aW9ucyksXG4gICAgb3ZlcndyaXRlOiBjZGt0Zi5ib29sZWFuVG9UZXJyYWZvcm0oc3RydWN0IS5vdmVyd3JpdGUpLFxuICAgIHMzX29wdGlvbnM6IGRhdGFicmV3Sm9iRGF0YUNhdGFsb2dPdXRwdXRzUzNPcHRpb25zVG9UZXJyYWZvcm0oc3RydWN0IS5zM09wdGlvbnMpLFxuICAgIHRhYmxlX25hbWU6IGNka3RmLnN0cmluZ1RvVGVycmFmb3JtKHN0cnVjdCEudGFibGVOYW1lKSxcbiAgfVxufVxuXG5leHBvcnQgaW50ZXJmYWNlIERhdGFicmV3Sm9iRGF0YWJhc2VPdXRwdXRzRGF0YWJhc2VPcHRpb25zVGVtcERpcmVjdG9yeSB7XG4gIC8qKlxuICAqIERvY3MgYXQgVGVycmFmb3JtIFJlZ2lzdHJ5OiB7QGxpbmsgaHR0cHM6Ly93d3cudGVycmFmb3JtLmlvL2RvY3MvcHJvdmlkZXJzL2F3c2NjL3IvZGF0YWJyZXdfam9iLmh0bWwjYnVja2V0IERhdGFicmV3Sm9iI2J1Y2tldH1cbiAgKi9cbiAgcmVhZG9ubHkgYnVja2V0OiBzdHJpbmc7XG4gIC8qKlxuICAqIERvY3MgYXQgVGVycmFmb3JtIFJlZ2lzdHJ5OiB7QGxpbmsgaHR0cHM6Ly93d3cudGVycmFmb3JtLmlvL2RvY3MvcHJvdmlkZXJzL2F3c2NjL3IvZGF0YWJyZXdfam9iLmh0bWwja2V5IERhdGFicmV3Sm9iI2tleX1cbiAgKi9cbiAgcmVhZG9ubHkga2V5Pzogc3RyaW5nO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gZGF0YWJyZXdKb2JEYXRhYmFzZU91dHB1dHNEYXRhYmFzZU9wdGlvbnNUZW1wRGlyZWN0b3J5VG9UZXJyYWZvcm0oc3RydWN0PzogRGF0YWJyZXdKb2JEYXRhYmFzZU91dHB1dHNEYXRhYmFzZU9wdGlvbnNUZW1wRGlyZWN0b3J5KTogYW55IHtcbiAgaWYgKCFjZGt0Zi5jYW5JbnNwZWN0KHN0cnVjdCkpIHsgcmV0dXJuIHN0cnVjdDsgfVxuICByZXR1cm4ge1xuICAgIGJ1Y2tldDogY2RrdGYuc3RyaW5nVG9UZXJyYWZvcm0oc3RydWN0IS5idWNrZXQpLFxuICAgIGtleTogY2RrdGYuc3RyaW5nVG9UZXJyYWZvcm0oc3RydWN0IS5rZXkpLFxuICB9XG59XG5cbmV4cG9ydCBpbnRlcmZhY2UgRGF0YWJyZXdKb2JEYXRhYmFzZU91dHB1dHNEYXRhYmFzZU9wdGlvbnMge1xuICAvKipcbiAgKiBEb2NzIGF0IFRlcnJhZm9ybSBSZWdpc3RyeToge0BsaW5rIGh0dHBzOi8vd3d3LnRlcnJhZm9ybS5pby9kb2NzL3Byb3ZpZGVycy9hd3NjYy9yL2RhdGFicmV3X2pvYi5odG1sI3RhYmxlX25hbWUgRGF0YWJyZXdKb2IjdGFibGVfbmFtZX1cbiAgKi9cbiAgcmVhZG9ubHkgdGFibGVOYW1lOiBzdHJpbmc7XG4gIC8qKlxuICAqIFMzIE91dHB1dCBsb2NhdGlvblxuICAqIFxuICAqIERvY3MgYXQgVGVycmFmb3JtIFJlZ2lzdHJ5OiB7QGxpbmsgaHR0cHM6Ly93d3cudGVycmFmb3JtLmlvL2RvY3MvcHJvdmlkZXJzL2F3c2NjL3IvZGF0YWJyZXdfam9iLmh0bWwjdGVtcF9kaXJlY3RvcnkgRGF0YWJyZXdKb2IjdGVtcF9kaXJlY3Rvcnl9XG4gICovXG4gIHJlYWRvbmx5IHRlbXBEaXJlY3Rvcnk/OiBEYXRhYnJld0pvYkRhdGFiYXNlT3V0cHV0c0RhdGFiYXNlT3B0aW9uc1RlbXBEaXJlY3Rvcnk7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBkYXRhYnJld0pvYkRhdGFiYXNlT3V0cHV0c0RhdGFiYXNlT3B0aW9uc1RvVGVycmFmb3JtKHN0cnVjdD86IERhdGFicmV3Sm9iRGF0YWJhc2VPdXRwdXRzRGF0YWJhc2VPcHRpb25zKTogYW55IHtcbiAgaWYgKCFjZGt0Zi5jYW5JbnNwZWN0KHN0cnVjdCkpIHsgcmV0dXJuIHN0cnVjdDsgfVxuICByZXR1cm4ge1xuICAgIHRhYmxlX25hbWU6IGNka3RmLnN0cmluZ1RvVGVycmFmb3JtKHN0cnVjdCEudGFibGVOYW1lKSxcbiAgICB0ZW1wX2RpcmVjdG9yeTogZGF0YWJyZXdKb2JEYXRhYmFzZU91dHB1dHNEYXRhYmFzZU9wdGlvbnNUZW1wRGlyZWN0b3J5VG9UZXJyYWZvcm0oc3RydWN0IS50ZW1wRGlyZWN0b3J5KSxcbiAgfVxufVxuXG5leHBvcnQgaW50ZXJmYWNlIERhdGFicmV3Sm9iRGF0YWJhc2VPdXRwdXRzIHtcbiAgLyoqXG4gICogRG9jcyBhdCBUZXJyYWZvcm0gUmVnaXN0cnk6IHtAbGluayBodHRwczovL3d3dy50ZXJyYWZvcm0uaW8vZG9jcy9wcm92aWRlcnMvYXdzY2Mvci9kYXRhYnJld19qb2IuaHRtbCNkYXRhYmFzZV9vcHRpb25zIERhdGFicmV3Sm9iI2RhdGFiYXNlX29wdGlvbnN9XG4gICovXG4gIHJlYWRvbmx5IGRhdGFiYXNlT3B0aW9uczogRGF0YWJyZXdKb2JEYXRhYmFzZU91dHB1dHNEYXRhYmFzZU9wdGlvbnM7XG4gIC8qKlxuICAqIERhdGFiYXNlIHRhYmxlIG5hbWVcbiAgKiBcbiAgKiBEb2NzIGF0IFRlcnJhZm9ybSBSZWdpc3RyeToge0BsaW5rIGh0dHBzOi8vd3d3LnRlcnJhZm9ybS5pby9kb2NzL3Byb3ZpZGVycy9hd3NjYy9yL2RhdGFicmV3X2pvYi5odG1sI2RhdGFiYXNlX291dHB1dF9tb2RlIERhdGFicmV3Sm9iI2RhdGFiYXNlX291dHB1dF9tb2RlfVxuICAqL1xuICByZWFkb25seSBkYXRhYmFzZU91dHB1dE1vZGU/OiBzdHJpbmc7XG4gIC8qKlxuICAqIEdsdWUgY29ubmVjdGlvbiBuYW1lXG4gICogXG4gICogRG9jcyBhdCBUZXJyYWZvcm0gUmVnaXN0cnk6IHtAbGluayBodHRwczovL3d3dy50ZXJyYWZvcm0uaW8vZG9jcy9wcm92aWRlcnMvYXdzY2Mvci9kYXRhYnJld19qb2IuaHRtbCNnbHVlX2Nvbm5lY3Rpb25fbmFtZSBEYXRhYnJld0pvYiNnbHVlX2Nvbm5lY3Rpb25fbmFtZX1cbiAgKi9cbiAgcmVhZG9ubHkgZ2x1ZUNvbm5lY3Rpb25OYW1lOiBzdHJpbmc7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBkYXRhYnJld0pvYkRhdGFiYXNlT3V0cHV0c1RvVGVycmFmb3JtKHN0cnVjdD86IERhdGFicmV3Sm9iRGF0YWJhc2VPdXRwdXRzKTogYW55IHtcbiAgaWYgKCFjZGt0Zi5jYW5JbnNwZWN0KHN0cnVjdCkpIHsgcmV0dXJuIHN0cnVjdDsgfVxuICByZXR1cm4ge1xuICAgIGRhdGFiYXNlX29wdGlvbnM6IGRhdGFicmV3Sm9iRGF0YWJhc2VPdXRwdXRzRGF0YWJhc2VPcHRpb25zVG9UZXJyYWZvcm0oc3RydWN0IS5kYXRhYmFzZU9wdGlvbnMpLFxuICAgIGRhdGFiYXNlX291dHB1dF9tb2RlOiBjZGt0Zi5zdHJpbmdUb1RlcnJhZm9ybShzdHJ1Y3QhLmRhdGFiYXNlT3V0cHV0TW9kZSksXG4gICAgZ2x1ZV9jb25uZWN0aW9uX25hbWU6IGNka3RmLnN0cmluZ1RvVGVycmFmb3JtKHN0cnVjdCEuZ2x1ZUNvbm5lY3Rpb25OYW1lKSxcbiAgfVxufVxuXG5leHBvcnQgaW50ZXJmYWNlIERhdGFicmV3Sm9iSm9iU2FtcGxlIHtcbiAgLyoqXG4gICogU2FtcGxlIGNvbmZpZ3VyYXRpb24gbW9kZSBmb3IgcHJvZmlsZSBqb2JzLlxuICAqIFxuICAqIERvY3MgYXQgVGVycmFmb3JtIFJlZ2lzdHJ5OiB7QGxpbmsgaHR0cHM6Ly93d3cudGVycmFmb3JtLmlvL2RvY3MvcHJvdmlkZXJzL2F3c2NjL3IvZGF0YWJyZXdfam9iLmh0bWwjbW9kZSBEYXRhYnJld0pvYiNtb2RlfVxuICAqL1xuICByZWFkb25seSBtb2RlPzogc3RyaW5nO1xuICAvKipcbiAgKiBTYW1wbGUgY29uZmlndXJhdGlvbiBzaXplIGZvciBwcm9maWxlIGpvYnMuXG4gICogXG4gICogRG9jcyBhdCBUZXJyYWZvcm0gUmVnaXN0cnk6IHtAbGluayBodHRwczovL3d3dy50ZXJyYWZvcm0uaW8vZG9jcy9wcm92aWRlcnMvYXdzY2Mvci9kYXRhYnJld19qb2IuaHRtbCNzaXplIERhdGFicmV3Sm9iI3NpemV9XG4gICovXG4gIHJlYWRvbmx5IHNpemU/OiBudW1iZXI7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBkYXRhYnJld0pvYkpvYlNhbXBsZVRvVGVycmFmb3JtKHN0cnVjdD86IERhdGFicmV3Sm9iSm9iU2FtcGxlKTogYW55IHtcbiAgaWYgKCFjZGt0Zi5jYW5JbnNwZWN0KHN0cnVjdCkpIHsgcmV0dXJuIHN0cnVjdDsgfVxuICByZXR1cm4ge1xuICAgIG1vZGU6IGNka3RmLnN0cmluZ1RvVGVycmFmb3JtKHN0cnVjdCEubW9kZSksXG4gICAgc2l6ZTogY2RrdGYubnVtYmVyVG9UZXJyYWZvcm0oc3RydWN0IS5zaXplKSxcbiAgfVxufVxuXG5leHBvcnQgaW50ZXJmYWNlIERhdGFicmV3Sm9iT3V0cHV0TG9jYXRpb24ge1xuICAvKipcbiAgKiBEb2NzIGF0IFRlcnJhZm9ybSBSZWdpc3RyeToge0BsaW5rIGh0dHBzOi8vd3d3LnRlcnJhZm9ybS5pby9kb2NzL3Byb3ZpZGVycy9hd3NjYy9yL2RhdGFicmV3X2pvYi5odG1sI2J1Y2tldCBEYXRhYnJld0pvYiNidWNrZXR9XG4gICovXG4gIHJlYWRvbmx5IGJ1Y2tldDogc3RyaW5nO1xuICAvKipcbiAgKiBEb2NzIGF0IFRlcnJhZm9ybSBSZWdpc3RyeToge0BsaW5rIGh0dHBzOi8vd3d3LnRlcnJhZm9ybS5pby9kb2NzL3Byb3ZpZGVycy9hd3NjYy9yL2RhdGFicmV3X2pvYi5odG1sI2tleSBEYXRhYnJld0pvYiNrZXl9XG4gICovXG4gIHJlYWRvbmx5IGtleT86IHN0cmluZztcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGRhdGFicmV3Sm9iT3V0cHV0TG9jYXRpb25Ub1RlcnJhZm9ybShzdHJ1Y3Q/OiBEYXRhYnJld0pvYk91dHB1dExvY2F0aW9uKTogYW55IHtcbiAgaWYgKCFjZGt0Zi5jYW5JbnNwZWN0KHN0cnVjdCkpIHsgcmV0dXJuIHN0cnVjdDsgfVxuICByZXR1cm4ge1xuICAgIGJ1Y2tldDogY2RrdGYuc3RyaW5nVG9UZXJyYWZvcm0oc3RydWN0IS5idWNrZXQpLFxuICAgIGtleTogY2RrdGYuc3RyaW5nVG9UZXJyYWZvcm0oc3RydWN0IS5rZXkpLFxuICB9XG59XG5cbmV4cG9ydCBpbnRlcmZhY2UgRGF0YWJyZXdKb2JPdXRwdXRzRm9ybWF0T3B0aW9uc0NzdiB7XG4gIC8qKlxuICAqIERvY3MgYXQgVGVycmFmb3JtIFJlZ2lzdHJ5OiB7QGxpbmsgaHR0cHM6Ly93d3cudGVycmFmb3JtLmlvL2RvY3MvcHJvdmlkZXJzL2F3c2NjL3IvZGF0YWJyZXdfam9iLmh0bWwjZGVsaW1pdGVyIERhdGFicmV3Sm9iI2RlbGltaXRlcn1cbiAgKi9cbiAgcmVhZG9ubHkgZGVsaW1pdGVyPzogc3RyaW5nO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gZGF0YWJyZXdKb2JPdXRwdXRzRm9ybWF0T3B0aW9uc0NzdlRvVGVycmFmb3JtKHN0cnVjdD86IERhdGFicmV3Sm9iT3V0cHV0c0Zvcm1hdE9wdGlvbnNDc3YpOiBhbnkge1xuICBpZiAoIWNka3RmLmNhbkluc3BlY3Qoc3RydWN0KSkgeyByZXR1cm4gc3RydWN0OyB9XG4gIHJldHVybiB7XG4gICAgZGVsaW1pdGVyOiBjZGt0Zi5zdHJpbmdUb1RlcnJhZm9ybShzdHJ1Y3QhLmRlbGltaXRlciksXG4gIH1cbn1cblxuZXhwb3J0IGludGVyZmFjZSBEYXRhYnJld0pvYk91dHB1dHNGb3JtYXRPcHRpb25zIHtcbiAgLyoqXG4gICogT3V0cHV0IENzdiBvcHRpb25zXG4gICogXG4gICogRG9jcyBhdCBUZXJyYWZvcm0gUmVnaXN0cnk6IHtAbGluayBodHRwczovL3d3dy50ZXJyYWZvcm0uaW8vZG9jcy9wcm92aWRlcnMvYXdzY2Mvci9kYXRhYnJld19qb2IuaHRtbCNjc3YgRGF0YWJyZXdKb2IjY3N2fVxuICAqL1xuICByZWFkb25seSBjc3Y/OiBEYXRhYnJld0pvYk91dHB1dHNGb3JtYXRPcHRpb25zQ3N2O1xufVxuXG5leHBvcnQgZnVuY3Rpb24gZGF0YWJyZXdKb2JPdXRwdXRzRm9ybWF0T3B0aW9uc1RvVGVycmFmb3JtKHN0cnVjdD86IERhdGFicmV3Sm9iT3V0cHV0c0Zvcm1hdE9wdGlvbnMpOiBhbnkge1xuICBpZiAoIWNka3RmLmNhbkluc3BlY3Qoc3RydWN0KSkgeyByZXR1cm4gc3RydWN0OyB9XG4gIHJldHVybiB7XG4gICAgY3N2OiBkYXRhYnJld0pvYk91dHB1dHNGb3JtYXRPcHRpb25zQ3N2VG9UZXJyYWZvcm0oc3RydWN0IS5jc3YpLFxuICB9XG59XG5cbmV4cG9ydCBpbnRlcmZhY2UgRGF0YWJyZXdKb2JPdXRwdXRzTG9jYXRpb24ge1xuICAvKipcbiAgKiBEb2NzIGF0IFRlcnJhZm9ybSBSZWdpc3RyeToge0BsaW5rIGh0dHBzOi8vd3d3LnRlcnJhZm9ybS5pby9kb2NzL3Byb3ZpZGVycy9hd3NjYy9yL2RhdGFicmV3X2pvYi5odG1sI2J1Y2tldCBEYXRhYnJld0pvYiNidWNrZXR9XG4gICovXG4gIHJlYWRvbmx5IGJ1Y2tldDogc3RyaW5nO1xuICAvKipcbiAgKiBEb2NzIGF0IFRlcnJhZm9ybSBSZWdpc3RyeToge0BsaW5rIGh0dHBzOi8vd3d3LnRlcnJhZm9ybS5pby9kb2NzL3Byb3ZpZGVycy9hd3NjYy9yL2RhdGFicmV3X2pvYi5odG1sI2tleSBEYXRhYnJld0pvYiNrZXl9XG4gICovXG4gIHJlYWRvbmx5IGtleT86IHN0cmluZztcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGRhdGFicmV3Sm9iT3V0cHV0c0xvY2F0aW9uVG9UZXJyYWZvcm0oc3RydWN0PzogRGF0YWJyZXdKb2JPdXRwdXRzTG9jYXRpb24pOiBhbnkge1xuICBpZiAoIWNka3RmLmNhbkluc3BlY3Qoc3RydWN0KSkgeyByZXR1cm4gc3RydWN0OyB9XG4gIHJldHVybiB7XG4gICAgYnVja2V0OiBjZGt0Zi5zdHJpbmdUb1RlcnJhZm9ybShzdHJ1Y3QhLmJ1Y2tldCksXG4gICAga2V5OiBjZGt0Zi5zdHJpbmdUb1RlcnJhZm9ybShzdHJ1Y3QhLmtleSksXG4gIH1cbn1cblxuZXhwb3J0IGludGVyZmFjZSBEYXRhYnJld0pvYk91dHB1dHMge1xuICAvKipcbiAgKiBEb2NzIGF0IFRlcnJhZm9ybSBSZWdpc3RyeToge0BsaW5rIGh0dHBzOi8vd3d3LnRlcnJhZm9ybS5pby9kb2NzL3Byb3ZpZGVycy9hd3NjYy9yL2RhdGFicmV3X2pvYi5odG1sI2NvbXByZXNzaW9uX2Zvcm1hdCBEYXRhYnJld0pvYiNjb21wcmVzc2lvbl9mb3JtYXR9XG4gICovXG4gIHJlYWRvbmx5IGNvbXByZXNzaW9uRm9ybWF0Pzogc3RyaW5nO1xuICAvKipcbiAgKiBEb2NzIGF0IFRlcnJhZm9ybSBSZWdpc3RyeToge0BsaW5rIGh0dHBzOi8vd3d3LnRlcnJhZm9ybS5pby9kb2NzL3Byb3ZpZGVycy9hd3NjYy9yL2RhdGFicmV3X2pvYi5odG1sI2Zvcm1hdCBEYXRhYnJld0pvYiNmb3JtYXR9XG4gICovXG4gIHJlYWRvbmx5IGZvcm1hdD86IHN0cmluZztcbiAgLyoqXG4gICogRm9ybWF0IG9wdGlvbnMgZm9yIGpvYiBPdXRwdXRcbiAgKiBcbiAgKiBEb2NzIGF0IFRlcnJhZm9ybSBSZWdpc3RyeToge0BsaW5rIGh0dHBzOi8vd3d3LnRlcnJhZm9ybS5pby9kb2NzL3Byb3ZpZGVycy9hd3NjYy9yL2RhdGFicmV3X2pvYi5odG1sI2Zvcm1hdF9vcHRpb25zIERhdGFicmV3Sm9iI2Zvcm1hdF9vcHRpb25zfVxuICAqL1xuICByZWFkb25seSBmb3JtYXRPcHRpb25zPzogRGF0YWJyZXdKb2JPdXRwdXRzRm9ybWF0T3B0aW9ucztcbiAgLyoqXG4gICogUzMgT3V0cHV0IGxvY2F0aW9uXG4gICogXG4gICogRG9jcyBhdCBUZXJyYWZvcm0gUmVnaXN0cnk6IHtAbGluayBodHRwczovL3d3dy50ZXJyYWZvcm0uaW8vZG9jcy9wcm92aWRlcnMvYXdzY2Mvci9kYXRhYnJld19qb2IuaHRtbCNsb2NhdGlvbiBEYXRhYnJld0pvYiNsb2NhdGlvbn1cbiAgKi9cbiAgcmVhZG9ubHkgbG9jYXRpb246IERhdGFicmV3Sm9iT3V0cHV0c0xvY2F0aW9uO1xuICAvKipcbiAgKiBEb2NzIGF0IFRlcnJhZm9ybSBSZWdpc3RyeToge0BsaW5rIGh0dHBzOi8vd3d3LnRlcnJhZm9ybS5pby9kb2NzL3Byb3ZpZGVycy9hd3NjYy9yL2RhdGFicmV3X2pvYi5odG1sI292ZXJ3cml0ZSBEYXRhYnJld0pvYiNvdmVyd3JpdGV9XG4gICovXG4gIHJlYWRvbmx5IG92ZXJ3cml0ZT86IGJvb2xlYW4gfCBjZGt0Zi5JUmVzb2x2YWJsZTtcbiAgLyoqXG4gICogRG9jcyBhdCBUZXJyYWZvcm0gUmVnaXN0cnk6IHtAbGluayBodHRwczovL3d3dy50ZXJyYWZvcm0uaW8vZG9jcy9wcm92aWRlcnMvYXdzY2Mvci9kYXRhYnJld19qb2IuaHRtbCNwYXJ0aXRpb25fY29sdW1ucyBEYXRhYnJld0pvYiNwYXJ0aXRpb25fY29sdW1uc31cbiAgKi9cbiAgcmVhZG9ubHkgcGFydGl0aW9uQ29sdW1ucz86IHN0cmluZ1tdO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gZGF0YWJyZXdKb2JPdXRwdXRzVG9UZXJyYWZvcm0oc3RydWN0PzogRGF0YWJyZXdKb2JPdXRwdXRzKTogYW55IHtcbiAgaWYgKCFjZGt0Zi5jYW5JbnNwZWN0KHN0cnVjdCkpIHsgcmV0dXJuIHN0cnVjdDsgfVxuICByZXR1cm4ge1xuICAgIGNvbXByZXNzaW9uX2Zvcm1hdDogY2RrdGYuc3RyaW5nVG9UZXJyYWZvcm0oc3RydWN0IS5jb21wcmVzc2lvbkZvcm1hdCksXG4gICAgZm9ybWF0OiBjZGt0Zi5zdHJpbmdUb1RlcnJhZm9ybShzdHJ1Y3QhLmZvcm1hdCksXG4gICAgZm9ybWF0X29wdGlvbnM6IGRhdGFicmV3Sm9iT3V0cHV0c0Zvcm1hdE9wdGlvbnNUb1RlcnJhZm9ybShzdHJ1Y3QhLmZvcm1hdE9wdGlvbnMpLFxuICAgIGxvY2F0aW9uOiBkYXRhYnJld0pvYk91dHB1dHNMb2NhdGlvblRvVGVycmFmb3JtKHN0cnVjdCEubG9jYXRpb24pLFxuICAgIG92ZXJ3cml0ZTogY2RrdGYuYm9vbGVhblRvVGVycmFmb3JtKHN0cnVjdCEub3ZlcndyaXRlKSxcbiAgICBwYXJ0aXRpb25fY29sdW1uczogY2RrdGYubGlzdE1hcHBlcihjZGt0Zi5zdHJpbmdUb1RlcnJhZm9ybSkoc3RydWN0IS5wYXJ0aXRpb25Db2x1bW5zKSxcbiAgfVxufVxuXG5leHBvcnQgaW50ZXJmYWNlIERhdGFicmV3Sm9iUHJvZmlsZUNvbmZpZ3VyYXRpb25Db2x1bW5TdGF0aXN0aWNzQ29uZmlndXJhdGlvbnNTZWxlY3RvcnMge1xuICAvKipcbiAgKiBEb2NzIGF0IFRlcnJhZm9ybSBSZWdpc3RyeToge0BsaW5rIGh0dHBzOi8vd3d3LnRlcnJhZm9ybS5pby9kb2NzL3Byb3ZpZGVycy9hd3NjYy9yL2RhdGFicmV3X2pvYi5odG1sI25hbWUgRGF0YWJyZXdKb2IjbmFtZX1cbiAgKi9cbiAgcmVhZG9ubHkgbmFtZT86IHN0cmluZztcbiAgLyoqXG4gICogRG9jcyBhdCBUZXJyYWZvcm0gUmVnaXN0cnk6IHtAbGluayBodHRwczovL3d3dy50ZXJyYWZvcm0uaW8vZG9jcy9wcm92aWRlcnMvYXdzY2Mvci9kYXRhYnJld19qb2IuaHRtbCNyZWdleCBEYXRhYnJld0pvYiNyZWdleH1cbiAgKi9cbiAgcmVhZG9ubHkgcmVnZXg/OiBzdHJpbmc7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBkYXRhYnJld0pvYlByb2ZpbGVDb25maWd1cmF0aW9uQ29sdW1uU3RhdGlzdGljc0NvbmZpZ3VyYXRpb25zU2VsZWN0b3JzVG9UZXJyYWZvcm0oc3RydWN0PzogRGF0YWJyZXdKb2JQcm9maWxlQ29uZmlndXJhdGlvbkNvbHVtblN0YXRpc3RpY3NDb25maWd1cmF0aW9uc1NlbGVjdG9ycyk6IGFueSB7XG4gIGlmICghY2RrdGYuY2FuSW5zcGVjdChzdHJ1Y3QpKSB7IHJldHVybiBzdHJ1Y3Q7IH1cbiAgcmV0dXJuIHtcbiAgICBuYW1lOiBjZGt0Zi5zdHJpbmdUb1RlcnJhZm9ybShzdHJ1Y3QhLm5hbWUpLFxuICAgIHJlZ2V4OiBjZGt0Zi5zdHJpbmdUb1RlcnJhZm9ybShzdHJ1Y3QhLnJlZ2V4KSxcbiAgfVxufVxuXG5leHBvcnQgaW50ZXJmYWNlIERhdGFicmV3Sm9iUHJvZmlsZUNvbmZpZ3VyYXRpb25Db2x1bW5TdGF0aXN0aWNzQ29uZmlndXJhdGlvbnNTdGF0aXN0aWNzT3ZlcnJpZGVzIHtcbiAgLyoqXG4gICogRG9jcyBhdCBUZXJyYWZvcm0gUmVnaXN0cnk6IHtAbGluayBodHRwczovL3d3dy50ZXJyYWZvcm0uaW8vZG9jcy9wcm92aWRlcnMvYXdzY2Mvci9kYXRhYnJld19qb2IuaHRtbCNwYXJhbWV0ZXJzIERhdGFicmV3Sm9iI3BhcmFtZXRlcnN9XG4gICovXG4gIHJlYWRvbmx5IHBhcmFtZXRlcnM6IHsgW2tleTogc3RyaW5nXTogc3RyaW5nIH0gfCBjZGt0Zi5JUmVzb2x2YWJsZTtcbiAgLyoqXG4gICogRG9jcyBhdCBUZXJyYWZvcm0gUmVnaXN0cnk6IHtAbGluayBodHRwczovL3d3dy50ZXJyYWZvcm0uaW8vZG9jcy9wcm92aWRlcnMvYXdzY2Mvci9kYXRhYnJld19qb2IuaHRtbCNzdGF0aXN0aWMgRGF0YWJyZXdKb2Ijc3RhdGlzdGljfVxuICAqL1xuICByZWFkb25seSBzdGF0aXN0aWM6IHN0cmluZztcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGRhdGFicmV3Sm9iUHJvZmlsZUNvbmZpZ3VyYXRpb25Db2x1bW5TdGF0aXN0aWNzQ29uZmlndXJhdGlvbnNTdGF0aXN0aWNzT3ZlcnJpZGVzVG9UZXJyYWZvcm0oc3RydWN0PzogRGF0YWJyZXdKb2JQcm9maWxlQ29uZmlndXJhdGlvbkNvbHVtblN0YXRpc3RpY3NDb25maWd1cmF0aW9uc1N0YXRpc3RpY3NPdmVycmlkZXMpOiBhbnkge1xuICBpZiAoIWNka3RmLmNhbkluc3BlY3Qoc3RydWN0KSkgeyByZXR1cm4gc3RydWN0OyB9XG4gIHJldHVybiB7XG4gICAgcGFyYW1ldGVyczogY2RrdGYuaGFzaE1hcHBlcihjZGt0Zi5hbnlUb1RlcnJhZm9ybSkoc3RydWN0IS5wYXJhbWV0ZXJzKSxcbiAgICBzdGF0aXN0aWM6IGNka3RmLnN0cmluZ1RvVGVycmFmb3JtKHN0cnVjdCEuc3RhdGlzdGljKSxcbiAgfVxufVxuXG5leHBvcnQgaW50ZXJmYWNlIERhdGFicmV3Sm9iUHJvZmlsZUNvbmZpZ3VyYXRpb25Db2x1bW5TdGF0aXN0aWNzQ29uZmlndXJhdGlvbnNTdGF0aXN0aWNzIHtcbiAgLyoqXG4gICogRG9jcyBhdCBUZXJyYWZvcm0gUmVnaXN0cnk6IHtAbGluayBodHRwczovL3d3dy50ZXJyYWZvcm0uaW8vZG9jcy9wcm92aWRlcnMvYXdzY2Mvci9kYXRhYnJld19qb2IuaHRtbCNpbmNsdWRlZF9zdGF0aXN0aWNzIERhdGFicmV3Sm9iI2luY2x1ZGVkX3N0YXRpc3RpY3N9XG4gICovXG4gIHJlYWRvbmx5IGluY2x1ZGVkU3RhdGlzdGljcz86IHN0cmluZ1tdO1xuICAvKipcbiAgKiBEb2NzIGF0IFRlcnJhZm9ybSBSZWdpc3RyeToge0BsaW5rIGh0dHBzOi8vd3d3LnRlcnJhZm9ybS5pby9kb2NzL3Byb3ZpZGVycy9hd3NjYy9yL2RhdGFicmV3X2pvYi5odG1sI292ZXJyaWRlcyBEYXRhYnJld0pvYiNvdmVycmlkZXN9XG4gICovXG4gIHJlYWRvbmx5IG92ZXJyaWRlcz86IERhdGFicmV3Sm9iUHJvZmlsZUNvbmZpZ3VyYXRpb25Db2x1bW5TdGF0aXN0aWNzQ29uZmlndXJhdGlvbnNTdGF0aXN0aWNzT3ZlcnJpZGVzW107XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBkYXRhYnJld0pvYlByb2ZpbGVDb25maWd1cmF0aW9uQ29sdW1uU3RhdGlzdGljc0NvbmZpZ3VyYXRpb25zU3RhdGlzdGljc1RvVGVycmFmb3JtKHN0cnVjdD86IERhdGFicmV3Sm9iUHJvZmlsZUNvbmZpZ3VyYXRpb25Db2x1bW5TdGF0aXN0aWNzQ29uZmlndXJhdGlvbnNTdGF0aXN0aWNzKTogYW55IHtcbiAgaWYgKCFjZGt0Zi5jYW5JbnNwZWN0KHN0cnVjdCkpIHsgcmV0dXJuIHN0cnVjdDsgfVxuICByZXR1cm4ge1xuICAgIGluY2x1ZGVkX3N0YXRpc3RpY3M6IGNka3RmLmxpc3RNYXBwZXIoY2RrdGYuc3RyaW5nVG9UZXJyYWZvcm0pKHN0cnVjdCEuaW5jbHVkZWRTdGF0aXN0aWNzKSxcbiAgICBvdmVycmlkZXM6IGNka3RmLmxpc3RNYXBwZXIoZGF0YWJyZXdKb2JQcm9maWxlQ29uZmlndXJhdGlvbkNvbHVtblN0YXRpc3RpY3NDb25maWd1cmF0aW9uc1N0YXRpc3RpY3NPdmVycmlkZXNUb1RlcnJhZm9ybSkoc3RydWN0IS5vdmVycmlkZXMpLFxuICB9XG59XG5cbmV4cG9ydCBpbnRlcmZhY2UgRGF0YWJyZXdKb2JQcm9maWxlQ29uZmlndXJhdGlvbkNvbHVtblN0YXRpc3RpY3NDb25maWd1cmF0aW9ucyB7XG4gIC8qKlxuICAqIERvY3MgYXQgVGVycmFmb3JtIFJlZ2lzdHJ5OiB7QGxpbmsgaHR0cHM6Ly93d3cudGVycmFmb3JtLmlvL2RvY3MvcHJvdmlkZXJzL2F3c2NjL3IvZGF0YWJyZXdfam9iLmh0bWwjc2VsZWN0b3JzIERhdGFicmV3Sm9iI3NlbGVjdG9yc31cbiAgKi9cbiAgcmVhZG9ubHkgc2VsZWN0b3JzPzogRGF0YWJyZXdKb2JQcm9maWxlQ29uZmlndXJhdGlvbkNvbHVtblN0YXRpc3RpY3NDb25maWd1cmF0aW9uc1NlbGVjdG9yc1tdO1xuICAvKipcbiAgKiBEb2NzIGF0IFRlcnJhZm9ybSBSZWdpc3RyeToge0BsaW5rIGh0dHBzOi8vd3d3LnRlcnJhZm9ybS5pby9kb2NzL3Byb3ZpZGVycy9hd3NjYy9yL2RhdGFicmV3X2pvYi5odG1sI3N0YXRpc3RpY3MgRGF0YWJyZXdKb2Ijc3RhdGlzdGljc31cbiAgKi9cbiAgcmVhZG9ubHkgc3RhdGlzdGljczogRGF0YWJyZXdKb2JQcm9maWxlQ29uZmlndXJhdGlvbkNvbHVtblN0YXRpc3RpY3NDb25maWd1cmF0aW9uc1N0YXRpc3RpY3M7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBkYXRhYnJld0pvYlByb2ZpbGVDb25maWd1cmF0aW9uQ29sdW1uU3RhdGlzdGljc0NvbmZpZ3VyYXRpb25zVG9UZXJyYWZvcm0oc3RydWN0PzogRGF0YWJyZXdKb2JQcm9maWxlQ29uZmlndXJhdGlvbkNvbHVtblN0YXRpc3RpY3NDb25maWd1cmF0aW9ucyk6IGFueSB7XG4gIGlmICghY2RrdGYuY2FuSW5zcGVjdChzdHJ1Y3QpKSB7IHJldHVybiBzdHJ1Y3Q7IH1cbiAgcmV0dXJuIHtcbiAgICBzZWxlY3RvcnM6IGNka3RmLmxpc3RNYXBwZXIoZGF0YWJyZXdKb2JQcm9maWxlQ29uZmlndXJhdGlvbkNvbHVtblN0YXRpc3RpY3NDb25maWd1cmF0aW9uc1NlbGVjdG9yc1RvVGVycmFmb3JtKShzdHJ1Y3QhLnNlbGVjdG9ycyksXG4gICAgc3RhdGlzdGljczogZGF0YWJyZXdKb2JQcm9maWxlQ29uZmlndXJhdGlvbkNvbHVtblN0YXRpc3RpY3NDb25maWd1cmF0aW9uc1N0YXRpc3RpY3NUb1RlcnJhZm9ybShzdHJ1Y3QhLnN0YXRpc3RpY3MpLFxuICB9XG59XG5cbmV4cG9ydCBpbnRlcmZhY2UgRGF0YWJyZXdKb2JQcm9maWxlQ29uZmlndXJhdGlvbkRhdGFzZXRTdGF0aXN0aWNzQ29uZmlndXJhdGlvbk92ZXJyaWRlcyB7XG4gIC8qKlxuICAqIERvY3MgYXQgVGVycmFmb3JtIFJlZ2lzdHJ5OiB7QGxpbmsgaHR0cHM6Ly93d3cudGVycmFmb3JtLmlvL2RvY3MvcHJvdmlkZXJzL2F3c2NjL3IvZGF0YWJyZXdfam9iLmh0bWwjcGFyYW1ldGVycyBEYXRhYnJld0pvYiNwYXJhbWV0ZXJzfVxuICAqL1xuICByZWFkb25seSBwYXJhbWV0ZXJzOiB7IFtrZXk6IHN0cmluZ106IHN0cmluZyB9IHwgY2RrdGYuSVJlc29sdmFibGU7XG4gIC8qKlxuICAqIERvY3MgYXQgVGVycmFmb3JtIFJlZ2lzdHJ5OiB7QGxpbmsgaHR0cHM6Ly93d3cudGVycmFmb3JtLmlvL2RvY3MvcHJvdmlkZXJzL2F3c2NjL3IvZGF0YWJyZXdfam9iLmh0bWwjc3RhdGlzdGljIERhdGFicmV3Sm9iI3N0YXRpc3RpY31cbiAgKi9cbiAgcmVhZG9ubHkgc3RhdGlzdGljOiBzdHJpbmc7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBkYXRhYnJld0pvYlByb2ZpbGVDb25maWd1cmF0aW9uRGF0YXNldFN0YXRpc3RpY3NDb25maWd1cmF0aW9uT3ZlcnJpZGVzVG9UZXJyYWZvcm0oc3RydWN0PzogRGF0YWJyZXdKb2JQcm9maWxlQ29uZmlndXJhdGlvbkRhdGFzZXRTdGF0aXN0aWNzQ29uZmlndXJhdGlvbk92ZXJyaWRlcyk6IGFueSB7XG4gIGlmICghY2RrdGYuY2FuSW5zcGVjdChzdHJ1Y3QpKSB7IHJldHVybiBzdHJ1Y3Q7IH1cbiAgcmV0dXJuIHtcbiAgICBwYXJhbWV0ZXJzOiBjZGt0Zi5oYXNoTWFwcGVyKGNka3RmLmFueVRvVGVycmFmb3JtKShzdHJ1Y3QhLnBhcmFtZXRlcnMpLFxuICAgIHN0YXRpc3RpYzogY2RrdGYuc3RyaW5nVG9UZXJyYWZvcm0oc3RydWN0IS5zdGF0aXN0aWMpLFxuICB9XG59XG5cbmV4cG9ydCBpbnRlcmZhY2UgRGF0YWJyZXdKb2JQcm9maWxlQ29uZmlndXJhdGlvbkRhdGFzZXRTdGF0aXN0aWNzQ29uZmlndXJhdGlvbiB7XG4gIC8qKlxuICAqIERvY3MgYXQgVGVycmFmb3JtIFJlZ2lzdHJ5OiB7QGxpbmsgaHR0cHM6Ly93d3cudGVycmFmb3JtLmlvL2RvY3MvcHJvdmlkZXJzL2F3c2NjL3IvZGF0YWJyZXdfam9iLmh0bWwjaW5jbHVkZWRfc3RhdGlzdGljcyBEYXRhYnJld0pvYiNpbmNsdWRlZF9zdGF0aXN0aWNzfVxuICAqL1xuICByZWFkb25seSBpbmNsdWRlZFN0YXRpc3RpY3M/OiBzdHJpbmdbXTtcbiAgLyoqXG4gICogRG9jcyBhdCBUZXJyYWZvcm0gUmVnaXN0cnk6IHtAbGluayBodHRwczovL3d3dy50ZXJyYWZvcm0uaW8vZG9jcy9wcm92aWRlcnMvYXdzY2Mvci9kYXRhYnJld19qb2IuaHRtbCNvdmVycmlkZXMgRGF0YWJyZXdKb2Ijb3ZlcnJpZGVzfVxuICAqL1xuICByZWFkb25seSBvdmVycmlkZXM/OiBEYXRhYnJld0pvYlByb2ZpbGVDb25maWd1cmF0aW9uRGF0YXNldFN0YXRpc3RpY3NDb25maWd1cmF0aW9uT3ZlcnJpZGVzW107XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBkYXRhYnJld0pvYlByb2ZpbGVDb25maWd1cmF0aW9uRGF0YXNldFN0YXRpc3RpY3NDb25maWd1cmF0aW9uVG9UZXJyYWZvcm0oc3RydWN0PzogRGF0YWJyZXdKb2JQcm9maWxlQ29uZmlndXJhdGlvbkRhdGFzZXRTdGF0aXN0aWNzQ29uZmlndXJhdGlvbik6IGFueSB7XG4gIGlmICghY2RrdGYuY2FuSW5zcGVjdChzdHJ1Y3QpKSB7IHJldHVybiBzdHJ1Y3Q7IH1cbiAgcmV0dXJuIHtcbiAgICBpbmNsdWRlZF9zdGF0aXN0aWNzOiBjZGt0Zi5saXN0TWFwcGVyKGNka3RmLnN0cmluZ1RvVGVycmFmb3JtKShzdHJ1Y3QhLmluY2x1ZGVkU3RhdGlzdGljcyksXG4gICAgb3ZlcnJpZGVzOiBjZGt0Zi5saXN0TWFwcGVyKGRhdGFicmV3Sm9iUHJvZmlsZUNvbmZpZ3VyYXRpb25EYXRhc2V0U3RhdGlzdGljc0NvbmZpZ3VyYXRpb25PdmVycmlkZXNUb1RlcnJhZm9ybSkoc3RydWN0IS5vdmVycmlkZXMpLFxuICB9XG59XG5cbmV4cG9ydCBpbnRlcmZhY2UgRGF0YWJyZXdKb2JQcm9maWxlQ29uZmlndXJhdGlvblByb2ZpbGVDb2x1bW5zIHtcbiAgLyoqXG4gICogRG9jcyBhdCBUZXJyYWZvcm0gUmVnaXN0cnk6IHtAbGluayBodHRwczovL3d3dy50ZXJyYWZvcm0uaW8vZG9jcy9wcm92aWRlcnMvYXdzY2Mvci9kYXRhYnJld19qb2IuaHRtbCNuYW1lIERhdGFicmV3Sm9iI25hbWV9XG4gICovXG4gIHJlYWRvbmx5IG5hbWU/OiBzdHJpbmc7XG4gIC8qKlxuICAqIERvY3MgYXQgVGVycmFmb3JtIFJlZ2lzdHJ5OiB7QGxpbmsgaHR0cHM6Ly93d3cudGVycmFmb3JtLmlvL2RvY3MvcHJvdmlkZXJzL2F3c2NjL3IvZGF0YWJyZXdfam9iLmh0bWwjcmVnZXggRGF0YWJyZXdKb2IjcmVnZXh9XG4gICovXG4gIHJlYWRvbmx5IHJlZ2V4Pzogc3RyaW5nO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gZGF0YWJyZXdKb2JQcm9maWxlQ29uZmlndXJhdGlvblByb2ZpbGVDb2x1bW5zVG9UZXJyYWZvcm0oc3RydWN0PzogRGF0YWJyZXdKb2JQcm9maWxlQ29uZmlndXJhdGlvblByb2ZpbGVDb2x1bW5zKTogYW55IHtcbiAgaWYgKCFjZGt0Zi5jYW5JbnNwZWN0KHN0cnVjdCkpIHsgcmV0dXJuIHN0cnVjdDsgfVxuICByZXR1cm4ge1xuICAgIG5hbWU6IGNka3RmLnN0cmluZ1RvVGVycmFmb3JtKHN0cnVjdCEubmFtZSksXG4gICAgcmVnZXg6IGNka3RmLnN0cmluZ1RvVGVycmFmb3JtKHN0cnVjdCEucmVnZXgpLFxuICB9XG59XG5cbmV4cG9ydCBpbnRlcmZhY2UgRGF0YWJyZXdKb2JQcm9maWxlQ29uZmlndXJhdGlvbiB7XG4gIC8qKlxuICAqIERvY3MgYXQgVGVycmFmb3JtIFJlZ2lzdHJ5OiB7QGxpbmsgaHR0cHM6Ly93d3cudGVycmFmb3JtLmlvL2RvY3MvcHJvdmlkZXJzL2F3c2NjL3IvZGF0YWJyZXdfam9iLmh0bWwjY29sdW1uX3N0YXRpc3RpY3NfY29uZmlndXJhdGlvbnMgRGF0YWJyZXdKb2IjY29sdW1uX3N0YXRpc3RpY3NfY29uZmlndXJhdGlvbnN9XG4gICovXG4gIHJlYWRvbmx5IGNvbHVtblN0YXRpc3RpY3NDb25maWd1cmF0aW9ucz86IERhdGFicmV3Sm9iUHJvZmlsZUNvbmZpZ3VyYXRpb25Db2x1bW5TdGF0aXN0aWNzQ29uZmlndXJhdGlvbnNbXTtcbiAgLyoqXG4gICogRG9jcyBhdCBUZXJyYWZvcm0gUmVnaXN0cnk6IHtAbGluayBodHRwczovL3d3dy50ZXJyYWZvcm0uaW8vZG9jcy9wcm92aWRlcnMvYXdzY2Mvci9kYXRhYnJld19qb2IuaHRtbCNkYXRhc2V0X3N0YXRpc3RpY3NfY29uZmlndXJhdGlvbiBEYXRhYnJld0pvYiNkYXRhc2V0X3N0YXRpc3RpY3NfY29uZmlndXJhdGlvbn1cbiAgKi9cbiAgcmVhZG9ubHkgZGF0YXNldFN0YXRpc3RpY3NDb25maWd1cmF0aW9uPzogRGF0YWJyZXdKb2JQcm9maWxlQ29uZmlndXJhdGlvbkRhdGFzZXRTdGF0aXN0aWNzQ29uZmlndXJhdGlvbjtcbiAgLyoqXG4gICogRG9jcyBhdCBUZXJyYWZvcm0gUmVnaXN0cnk6IHtAbGluayBodHRwczovL3d3dy50ZXJyYWZvcm0uaW8vZG9jcy9wcm92aWRlcnMvYXdzY2Mvci9kYXRhYnJld19qb2IuaHRtbCNwcm9maWxlX2NvbHVtbnMgRGF0YWJyZXdKb2IjcHJvZmlsZV9jb2x1bW5zfVxuICAqL1xuICByZWFkb25seSBwcm9maWxlQ29sdW1ucz86IERhdGFicmV3Sm9iUHJvZmlsZUNvbmZpZ3VyYXRpb25Qcm9maWxlQ29sdW1uc1tdO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gZGF0YWJyZXdKb2JQcm9maWxlQ29uZmlndXJhdGlvblRvVGVycmFmb3JtKHN0cnVjdD86IERhdGFicmV3Sm9iUHJvZmlsZUNvbmZpZ3VyYXRpb24pOiBhbnkge1xuICBpZiAoIWNka3RmLmNhbkluc3BlY3Qoc3RydWN0KSkgeyByZXR1cm4gc3RydWN0OyB9XG4gIHJldHVybiB7XG4gICAgY29sdW1uX3N0YXRpc3RpY3NfY29uZmlndXJhdGlvbnM6IGNka3RmLmxpc3RNYXBwZXIoZGF0YWJyZXdKb2JQcm9maWxlQ29uZmlndXJhdGlvbkNvbHVtblN0YXRpc3RpY3NDb25maWd1cmF0aW9uc1RvVGVycmFmb3JtKShzdHJ1Y3QhLmNvbHVtblN0YXRpc3RpY3NDb25maWd1cmF0aW9ucyksXG4gICAgZGF0YXNldF9zdGF0aXN0aWNzX2NvbmZpZ3VyYXRpb246IGRhdGFicmV3Sm9iUHJvZmlsZUNvbmZpZ3VyYXRpb25EYXRhc2V0U3RhdGlzdGljc0NvbmZpZ3VyYXRpb25Ub1RlcnJhZm9ybShzdHJ1Y3QhLmRhdGFzZXRTdGF0aXN0aWNzQ29uZmlndXJhdGlvbiksXG4gICAgcHJvZmlsZV9jb2x1bW5zOiBjZGt0Zi5saXN0TWFwcGVyKGRhdGFicmV3Sm9iUHJvZmlsZUNvbmZpZ3VyYXRpb25Qcm9maWxlQ29sdW1uc1RvVGVycmFmb3JtKShzdHJ1Y3QhLnByb2ZpbGVDb2x1bW5zKSxcbiAgfVxufVxuXG5leHBvcnQgaW50ZXJmYWNlIERhdGFicmV3Sm9iUmVjaXBlIHtcbiAgLyoqXG4gICogUmVjaXBlIG5hbWVcbiAgKiBcbiAgKiBEb2NzIGF0IFRlcnJhZm9ybSBSZWdpc3RyeToge0BsaW5rIGh0dHBzOi8vd3d3LnRlcnJhZm9ybS5pby9kb2NzL3Byb3ZpZGVycy9hd3NjYy9yL2RhdGFicmV3X2pvYi5odG1sI25hbWUgRGF0YWJyZXdKb2IjbmFtZX1cbiAgKi9cbiAgcmVhZG9ubHkgbmFtZTogc3RyaW5nO1xuICAvKipcbiAgKiBSZWNpcGUgdmVyc2lvblxuICAqIFxuICAqIERvY3MgYXQgVGVycmFmb3JtIFJlZ2lzdHJ5OiB7QGxpbmsgaHR0cHM6Ly93d3cudGVycmFmb3JtLmlvL2RvY3MvcHJvdmlkZXJzL2F3c2NjL3IvZGF0YWJyZXdfam9iLmh0bWwjdmVyc2lvbiBEYXRhYnJld0pvYiN2ZXJzaW9ufVxuICAqL1xuICByZWFkb25seSB2ZXJzaW9uPzogc3RyaW5nO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gZGF0YWJyZXdKb2JSZWNpcGVUb1RlcnJhZm9ybShzdHJ1Y3Q/OiBEYXRhYnJld0pvYlJlY2lwZSk6IGFueSB7XG4gIGlmICghY2RrdGYuY2FuSW5zcGVjdChzdHJ1Y3QpKSB7IHJldHVybiBzdHJ1Y3Q7IH1cbiAgcmV0dXJuIHtcbiAgICBuYW1lOiBjZGt0Zi5zdHJpbmdUb1RlcnJhZm9ybShzdHJ1Y3QhLm5hbWUpLFxuICAgIHZlcnNpb246IGNka3RmLnN0cmluZ1RvVGVycmFmb3JtKHN0cnVjdCEudmVyc2lvbiksXG4gIH1cbn1cblxuZXhwb3J0IGludGVyZmFjZSBEYXRhYnJld0pvYlRhZ3Mge1xuICAvKipcbiAgKiBEb2NzIGF0IFRlcnJhZm9ybSBSZWdpc3RyeToge0BsaW5rIGh0dHBzOi8vd3d3LnRlcnJhZm9ybS5pby9kb2NzL3Byb3ZpZGVycy9hd3NjYy9yL2RhdGFicmV3X2pvYi5odG1sI2tleSBEYXRhYnJld0pvYiNrZXl9XG4gICovXG4gIHJlYWRvbmx5IGtleTogc3RyaW5nO1xuICAvKipcbiAgKiBEb2NzIGF0IFRlcnJhZm9ybSBSZWdpc3RyeToge0BsaW5rIGh0dHBzOi8vd3d3LnRlcnJhZm9ybS5pby9kb2NzL3Byb3ZpZGVycy9hd3NjYy9yL2RhdGFicmV3X2pvYi5odG1sI3ZhbHVlIERhdGFicmV3Sm9iI3ZhbHVlfVxuICAqL1xuICByZWFkb25seSB2YWx1ZTogc3RyaW5nO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gZGF0YWJyZXdKb2JUYWdzVG9UZXJyYWZvcm0oc3RydWN0PzogRGF0YWJyZXdKb2JUYWdzKTogYW55IHtcbiAgaWYgKCFjZGt0Zi5jYW5JbnNwZWN0KHN0cnVjdCkpIHsgcmV0dXJuIHN0cnVjdDsgfVxuICByZXR1cm4ge1xuICAgIGtleTogY2RrdGYuc3RyaW5nVG9UZXJyYWZvcm0oc3RydWN0IS5rZXkpLFxuICAgIHZhbHVlOiBjZGt0Zi5zdHJpbmdUb1RlcnJhZm9ybShzdHJ1Y3QhLnZhbHVlKSxcbiAgfVxufVxuXG5cbi8qKlxuKiBSZXByZXNlbnRzIGEge0BsaW5rIGh0dHBzOi8vd3d3LnRlcnJhZm9ybS5pby9kb2NzL3Byb3ZpZGVycy9hd3NjYy9yL2RhdGFicmV3X2pvYi5odG1sIGF3c2NjX2RhdGFicmV3X2pvYn1cbiovXG5leHBvcnQgY2xhc3MgRGF0YWJyZXdKb2IgZXh0ZW5kcyBjZGt0Zi5UZXJyYWZvcm1SZXNvdXJjZSB7XG5cbiAgLy8gPT09PT09PT09PT09PT09PT1cbiAgLy8gU1RBVElDIFBST1BFUlRJRVNcbiAgLy8gPT09PT09PT09PT09PT09PT1cbiAgcHVibGljIHN0YXRpYyByZWFkb25seSB0ZlJlc291cmNlVHlwZTogc3RyaW5nID0gXCJhd3NjY19kYXRhYnJld19qb2JcIjtcblxuICAvLyA9PT09PT09PT09PVxuICAvLyBJTklUSUFMSVpFUlxuICAvLyA9PT09PT09PT09PVxuXG4gIC8qKlxuICAqIENyZWF0ZSBhIG5ldyB7QGxpbmsgaHR0cHM6Ly93d3cudGVycmFmb3JtLmlvL2RvY3MvcHJvdmlkZXJzL2F3c2NjL3IvZGF0YWJyZXdfam9iLmh0bWwgYXdzY2NfZGF0YWJyZXdfam9ifSBSZXNvdXJjZVxuICAqXG4gICogQHBhcmFtIHNjb3BlIFRoZSBzY29wZSBpbiB3aGljaCB0byBkZWZpbmUgdGhpcyBjb25zdHJ1Y3RcbiAgKiBAcGFyYW0gaWQgVGhlIHNjb3BlZCBjb25zdHJ1Y3QgSUQuIE11c3QgYmUgdW5pcXVlIGFtb25nc3Qgc2libGluZ3MgaW4gdGhlIHNhbWUgc2NvcGVcbiAgKiBAcGFyYW0gb3B0aW9ucyBEYXRhYnJld0pvYkNvbmZpZ1xuICAqL1xuICBwdWJsaWMgY29uc3RydWN0b3Ioc2NvcGU6IENvbnN0cnVjdCwgaWQ6IHN0cmluZywgY29uZmlnOiBEYXRhYnJld0pvYkNvbmZpZykge1xuICAgIHN1cGVyKHNjb3BlLCBpZCwge1xuICAgICAgdGVycmFmb3JtUmVzb3VyY2VUeXBlOiAnYXdzY2NfZGF0YWJyZXdfam9iJyxcbiAgICAgIHRlcnJhZm9ybUdlbmVyYXRvck1ldGFkYXRhOiB7XG4gICAgICAgIHByb3ZpZGVyTmFtZTogJ2F3c2NjJ1xuICAgICAgfSxcbiAgICAgIHByb3ZpZGVyOiBjb25maWcucHJvdmlkZXIsXG4gICAgICBkZXBlbmRzT246IGNvbmZpZy5kZXBlbmRzT24sXG4gICAgICBjb3VudDogY29uZmlnLmNvdW50LFxuICAgICAgbGlmZWN5Y2xlOiBjb25maWcubGlmZWN5Y2xlXG4gICAgfSk7XG4gICAgdGhpcy5fZGF0YUNhdGFsb2dPdXRwdXRzID0gY29uZmlnLmRhdGFDYXRhbG9nT3V0cHV0cztcbiAgICB0aGlzLl9kYXRhYmFzZU91dHB1dHMgPSBjb25maWcuZGF0YWJhc2VPdXRwdXRzO1xuICAgIHRoaXMuX2RhdGFzZXROYW1lID0gY29uZmlnLmRhdGFzZXROYW1lO1xuICAgIHRoaXMuX2VuY3J5cHRpb25LZXlBcm4gPSBjb25maWcuZW5jcnlwdGlvbktleUFybjtcbiAgICB0aGlzLl9lbmNyeXB0aW9uTW9kZSA9IGNvbmZpZy5lbmNyeXB0aW9uTW9kZTtcbiAgICB0aGlzLl9qb2JTYW1wbGUgPSBjb25maWcuam9iU2FtcGxlO1xuICAgIHRoaXMuX2xvZ1N1YnNjcmlwdGlvbiA9IGNvbmZpZy5sb2dTdWJzY3JpcHRpb247XG4gICAgdGhpcy5fbWF4Q2FwYWNpdHkgPSBjb25maWcubWF4Q2FwYWNpdHk7XG4gICAgdGhpcy5fbWF4UmV0cmllcyA9IGNvbmZpZy5tYXhSZXRyaWVzO1xuICAgIHRoaXMuX25hbWUgPSBjb25maWcubmFtZTtcbiAgICB0aGlzLl9vdXRwdXRMb2NhdGlvbiA9IGNvbmZpZy5vdXRwdXRMb2NhdGlvbjtcbiAgICB0aGlzLl9vdXRwdXRzID0gY29uZmlnLm91dHB1dHM7XG4gICAgdGhpcy5fcHJvZmlsZUNvbmZpZ3VyYXRpb24gPSBjb25maWcucHJvZmlsZUNvbmZpZ3VyYXRpb247XG4gICAgdGhpcy5fcHJvamVjdE5hbWUgPSBjb25maWcucHJvamVjdE5hbWU7XG4gICAgdGhpcy5fcmVjaXBlID0gY29uZmlnLnJlY2lwZTtcbiAgICB0aGlzLl9yb2xlQXJuID0gY29uZmlnLnJvbGVBcm47XG4gICAgdGhpcy5fdGFncyA9IGNvbmZpZy50YWdzO1xuICAgIHRoaXMuX3RpbWVvdXQgPSBjb25maWcudGltZW91dDtcbiAgICB0aGlzLl90eXBlID0gY29uZmlnLnR5cGU7XG4gIH1cblxuICAvLyA9PT09PT09PT09XG4gIC8vIEFUVFJJQlVURVNcbiAgLy8gPT09PT09PT09PVxuXG4gIC8vIGRhdGFfY2F0YWxvZ19vdXRwdXRzIC0gY29tcHV0ZWQ6IGZhbHNlLCBvcHRpb25hbDogdHJ1ZSwgcmVxdWlyZWQ6IGZhbHNlXG4gIHByaXZhdGUgX2RhdGFDYXRhbG9nT3V0cHV0cz86IERhdGFicmV3Sm9iRGF0YUNhdGFsb2dPdXRwdXRzW107XG4gIHB1YmxpYyBnZXQgZGF0YUNhdGFsb2dPdXRwdXRzKCkge1xuICAgIHJldHVybiB0aGlzLmludGVycG9sYXRpb25Gb3JBdHRyaWJ1dGUoJ2RhdGFfY2F0YWxvZ19vdXRwdXRzJykgYXMgYW55O1xuICB9XG4gIHB1YmxpYyBzZXQgZGF0YUNhdGFsb2dPdXRwdXRzKHZhbHVlOiBEYXRhYnJld0pvYkRhdGFDYXRhbG9nT3V0cHV0c1tdICkge1xuICAgIHRoaXMuX2RhdGFDYXRhbG9nT3V0cHV0cyA9IHZhbHVlO1xuICB9XG4gIHB1YmxpYyByZXNldERhdGFDYXRhbG9nT3V0cHV0cygpIHtcbiAgICB0aGlzLl9kYXRhQ2F0YWxvZ091dHB1dHMgPSB1bmRlZmluZWQ7XG4gIH1cbiAgLy8gVGVtcG9yYXJpbHkgZXhwb3NlIGlucHV0IHZhbHVlLiBVc2Ugd2l0aCBjYXV0aW9uLlxuICBwdWJsaWMgZ2V0IGRhdGFDYXRhbG9nT3V0cHV0c0lucHV0KCkge1xuICAgIHJldHVybiB0aGlzLl9kYXRhQ2F0YWxvZ091dHB1dHNcbiAgfVxuXG4gIC8vIGRhdGFiYXNlX291dHB1dHMgLSBjb21wdXRlZDogZmFsc2UsIG9wdGlvbmFsOiB0cnVlLCByZXF1aXJlZDogZmFsc2VcbiAgcHJpdmF0ZSBfZGF0YWJhc2VPdXRwdXRzPzogRGF0YWJyZXdKb2JEYXRhYmFzZU91dHB1dHNbXTtcbiAgcHVibGljIGdldCBkYXRhYmFzZU91dHB1dHMoKSB7XG4gICAgcmV0dXJuIHRoaXMuaW50ZXJwb2xhdGlvbkZvckF0dHJpYnV0ZSgnZGF0YWJhc2Vfb3V0cHV0cycpIGFzIGFueTtcbiAgfVxuICBwdWJsaWMgc2V0IGRhdGFiYXNlT3V0cHV0cyh2YWx1ZTogRGF0YWJyZXdKb2JEYXRhYmFzZU91dHB1dHNbXSApIHtcbiAgICB0aGlzLl9kYXRhYmFzZU91dHB1dHMgPSB2YWx1ZTtcbiAgfVxuICBwdWJsaWMgcmVzZXREYXRhYmFzZU91dHB1dHMoKSB7XG4gICAgdGhpcy5fZGF0YWJhc2VPdXRwdXRzID0gdW5kZWZpbmVkO1xuICB9XG4gIC8vIFRlbXBvcmFyaWx5IGV4cG9zZSBpbnB1dCB2YWx1ZS4gVXNlIHdpdGggY2F1dGlvbi5cbiAgcHVibGljIGdldCBkYXRhYmFzZU91dHB1dHNJbnB1dCgpIHtcbiAgICByZXR1cm4gdGhpcy5fZGF0YWJhc2VPdXRwdXRzXG4gIH1cblxuICAvLyBkYXRhc2V0X25hbWUgLSBjb21wdXRlZDogZmFsc2UsIG9wdGlvbmFsOiB0cnVlLCByZXF1aXJlZDogZmFsc2VcbiAgcHJpdmF0ZSBfZGF0YXNldE5hbWU/OiBzdHJpbmc7XG4gIHB1YmxpYyBnZXQgZGF0YXNldE5hbWUoKSB7XG4gICAgcmV0dXJuIHRoaXMuZ2V0U3RyaW5nQXR0cmlidXRlKCdkYXRhc2V0X25hbWUnKTtcbiAgfVxuICBwdWJsaWMgc2V0IGRhdGFzZXROYW1lKHZhbHVlOiBzdHJpbmcgKSB7XG4gICAgdGhpcy5fZGF0YXNldE5hbWUgPSB2YWx1ZTtcbiAgfVxuICBwdWJsaWMgcmVzZXREYXRhc2V0TmFtZSgpIHtcbiAgICB0aGlzLl9kYXRhc2V0TmFtZSA9IHVuZGVmaW5lZDtcbiAgfVxuICAvLyBUZW1wb3JhcmlseSBleHBvc2UgaW5wdXQgdmFsdWUuIFVzZSB3aXRoIGNhdXRpb24uXG4gIHB1YmxpYyBnZXQgZGF0YXNldE5hbWVJbnB1dCgpIHtcbiAgICByZXR1cm4gdGhpcy5fZGF0YXNldE5hbWVcbiAgfVxuXG4gIC8vIGVuY3J5cHRpb25fa2V5X2FybiAtIGNvbXB1dGVkOiBmYWxzZSwgb3B0aW9uYWw6IHRydWUsIHJlcXVpcmVkOiBmYWxzZVxuICBwcml2YXRlIF9lbmNyeXB0aW9uS2V5QXJuPzogc3RyaW5nO1xuICBwdWJsaWMgZ2V0IGVuY3J5cHRpb25LZXlBcm4oKSB7XG4gICAgcmV0dXJuIHRoaXMuZ2V0U3RyaW5nQXR0cmlidXRlKCdlbmNyeXB0aW9uX2tleV9hcm4nKTtcbiAgfVxuICBwdWJsaWMgc2V0IGVuY3J5cHRpb25LZXlBcm4odmFsdWU6IHN0cmluZyApIHtcbiAgICB0aGlzLl9lbmNyeXB0aW9uS2V5QXJuID0gdmFsdWU7XG4gIH1cbiAgcHVibGljIHJlc2V0RW5jcnlwdGlvbktleUFybigpIHtcbiAgICB0aGlzLl9lbmNyeXB0aW9uS2V5QXJuID0gdW5kZWZpbmVkO1xuICB9XG4gIC8vIFRlbXBvcmFyaWx5IGV4cG9zZSBpbnB1dCB2YWx1ZS4gVXNlIHdpdGggY2F1dGlvbi5cbiAgcHVibGljIGdldCBlbmNyeXB0aW9uS2V5QXJuSW5wdXQoKSB7XG4gICAgcmV0dXJuIHRoaXMuX2VuY3J5cHRpb25LZXlBcm5cbiAgfVxuXG4gIC8vIGVuY3J5cHRpb25fbW9kZSAtIGNvbXB1dGVkOiBmYWxzZSwgb3B0aW9uYWw6IHRydWUsIHJlcXVpcmVkOiBmYWxzZVxuICBwcml2YXRlIF9lbmNyeXB0aW9uTW9kZT86IHN0cmluZztcbiAgcHVibGljIGdldCBlbmNyeXB0aW9uTW9kZSgpIHtcbiAgICByZXR1cm4gdGhpcy5nZXRTdHJpbmdBdHRyaWJ1dGUoJ2VuY3J5cHRpb25fbW9kZScpO1xuICB9XG4gIHB1YmxpYyBzZXQgZW5jcnlwdGlvbk1vZGUodmFsdWU6IHN0cmluZyApIHtcbiAgICB0aGlzLl9lbmNyeXB0aW9uTW9kZSA9IHZhbHVlO1xuICB9XG4gIHB1YmxpYyByZXNldEVuY3J5cHRpb25Nb2RlKCkge1xuICAgIHRoaXMuX2VuY3J5cHRpb25Nb2RlID0gdW5kZWZpbmVkO1xuICB9XG4gIC8vIFRlbXBvcmFyaWx5IGV4cG9zZSBpbnB1dCB2YWx1ZS4gVXNlIHdpdGggY2F1dGlvbi5cbiAgcHVibGljIGdldCBlbmNyeXB0aW9uTW9kZUlucHV0KCkge1xuICAgIHJldHVybiB0aGlzLl9lbmNyeXB0aW9uTW9kZVxuICB9XG5cbiAgLy8gaWQgLSBjb21wdXRlZDogdHJ1ZSwgb3B0aW9uYWw6IGZhbHNlLCByZXF1aXJlZDogZmFsc2VcbiAgcHVibGljIGdldCBpZCgpIHtcbiAgICByZXR1cm4gdGhpcy5nZXRTdHJpbmdBdHRyaWJ1dGUoJ2lkJyk7XG4gIH1cblxuICAvLyBqb2Jfc2FtcGxlIC0gY29tcHV0ZWQ6IGZhbHNlLCBvcHRpb25hbDogdHJ1ZSwgcmVxdWlyZWQ6IGZhbHNlXG4gIHByaXZhdGUgX2pvYlNhbXBsZT86IERhdGFicmV3Sm9iSm9iU2FtcGxlO1xuICBwdWJsaWMgZ2V0IGpvYlNhbXBsZSgpIHtcbiAgICByZXR1cm4gdGhpcy5pbnRlcnBvbGF0aW9uRm9yQXR0cmlidXRlKCdqb2Jfc2FtcGxlJykgYXMgYW55O1xuICB9XG4gIHB1YmxpYyBzZXQgam9iU2FtcGxlKHZhbHVlOiBEYXRhYnJld0pvYkpvYlNhbXBsZSApIHtcbiAgICB0aGlzLl9qb2JTYW1wbGUgPSB2YWx1ZTtcbiAgfVxuICBwdWJsaWMgcmVzZXRKb2JTYW1wbGUoKSB7XG4gICAgdGhpcy5fam9iU2FtcGxlID0gdW5kZWZpbmVkO1xuICB9XG4gIC8vIFRlbXBvcmFyaWx5IGV4cG9zZSBpbnB1dCB2YWx1ZS4gVXNlIHdpdGggY2F1dGlvbi5cbiAgcHVibGljIGdldCBqb2JTYW1wbGVJbnB1dCgpIHtcbiAgICByZXR1cm4gdGhpcy5fam9iU2FtcGxlXG4gIH1cblxuICAvLyBsb2dfc3Vic2NyaXB0aW9uIC0gY29tcHV0ZWQ6IGZhbHNlLCBvcHRpb25hbDogdHJ1ZSwgcmVxdWlyZWQ6IGZhbHNlXG4gIHByaXZhdGUgX2xvZ1N1YnNjcmlwdGlvbj86IHN0cmluZztcbiAgcHVibGljIGdldCBsb2dTdWJzY3JpcHRpb24oKSB7XG4gICAgcmV0dXJuIHRoaXMuZ2V0U3RyaW5nQXR0cmlidXRlKCdsb2dfc3Vic2NyaXB0aW9uJyk7XG4gIH1cbiAgcHVibGljIHNldCBsb2dTdWJzY3JpcHRpb24odmFsdWU6IHN0cmluZyApIHtcbiAgICB0aGlzLl9sb2dTdWJzY3JpcHRpb24gPSB2YWx1ZTtcbiAgfVxuICBwdWJsaWMgcmVzZXRMb2dTdWJzY3JpcHRpb24oKSB7XG4gICAgdGhpcy5fbG9nU3Vic2NyaXB0aW9uID0gdW5kZWZpbmVkO1xuICB9XG4gIC8vIFRlbXBvcmFyaWx5IGV4cG9zZSBpbnB1dCB2YWx1ZS4gVXNlIHdpdGggY2F1dGlvbi5cbiAgcHVibGljIGdldCBsb2dTdWJzY3JpcHRpb25JbnB1dCgpIHtcbiAgICByZXR1cm4gdGhpcy5fbG9nU3Vic2NyaXB0aW9uXG4gIH1cblxuICAvLyBtYXhfY2FwYWNpdHkgLSBjb21wdXRlZDogZmFsc2UsIG9wdGlvbmFsOiB0cnVlLCByZXF1aXJlZDogZmFsc2VcbiAgcHJpdmF0ZSBfbWF4Q2FwYWNpdHk/OiBudW1iZXI7XG4gIHB1YmxpYyBnZXQgbWF4Q2FwYWNpdHkoKSB7XG4gICAgcmV0dXJuIHRoaXMuZ2V0TnVtYmVyQXR0cmlidXRlKCdtYXhfY2FwYWNpdHknKTtcbiAgfVxuICBwdWJsaWMgc2V0IG1heENhcGFjaXR5KHZhbHVlOiBudW1iZXIgKSB7XG4gICAgdGhpcy5fbWF4Q2FwYWNpdHkgPSB2YWx1ZTtcbiAgfVxuICBwdWJsaWMgcmVzZXRNYXhDYXBhY2l0eSgpIHtcbiAgICB0aGlzLl9tYXhDYXBhY2l0eSA9IHVuZGVmaW5lZDtcbiAgfVxuICAvLyBUZW1wb3JhcmlseSBleHBvc2UgaW5wdXQgdmFsdWUuIFVzZSB3aXRoIGNhdXRpb24uXG4gIHB1YmxpYyBnZXQgbWF4Q2FwYWNpdHlJbnB1dCgpIHtcbiAgICByZXR1cm4gdGhpcy5fbWF4Q2FwYWNpdHlcbiAgfVxuXG4gIC8vIG1heF9yZXRyaWVzIC0gY29tcHV0ZWQ6IGZhbHNlLCBvcHRpb25hbDogdHJ1ZSwgcmVxdWlyZWQ6IGZhbHNlXG4gIHByaXZhdGUgX21heFJldHJpZXM/OiBudW1iZXI7XG4gIHB1YmxpYyBnZXQgbWF4UmV0cmllcygpIHtcbiAgICByZXR1cm4gdGhpcy5nZXROdW1iZXJBdHRyaWJ1dGUoJ21heF9yZXRyaWVzJyk7XG4gIH1cbiAgcHVibGljIHNldCBtYXhSZXRyaWVzKHZhbHVlOiBudW1iZXIgKSB7XG4gICAgdGhpcy5fbWF4UmV0cmllcyA9IHZhbHVlO1xuICB9XG4gIHB1YmxpYyByZXNldE1heFJldHJpZXMoKSB7XG4gICAgdGhpcy5fbWF4UmV0cmllcyA9IHVuZGVmaW5lZDtcbiAgfVxuICAvLyBUZW1wb3JhcmlseSBleHBvc2UgaW5wdXQgdmFsdWUuIFVzZSB3aXRoIGNhdXRpb24uXG4gIHB1YmxpYyBnZXQgbWF4UmV0cmllc0lucHV0KCkge1xuICAgIHJldHVybiB0aGlzLl9tYXhSZXRyaWVzXG4gIH1cblxuICAvLyBuYW1lIC0gY29tcHV0ZWQ6IGZhbHNlLCBvcHRpb25hbDogZmFsc2UsIHJlcXVpcmVkOiB0cnVlXG4gIHByaXZhdGUgX25hbWU6IHN0cmluZztcbiAgcHVibGljIGdldCBuYW1lKCkge1xuICAgIHJldHVybiB0aGlzLmdldFN0cmluZ0F0dHJpYnV0ZSgnbmFtZScpO1xuICB9XG4gIHB1YmxpYyBzZXQgbmFtZSh2YWx1ZTogc3RyaW5nKSB7XG4gICAgdGhpcy5fbmFtZSA9IHZhbHVlO1xuICB9XG4gIC8vIFRlbXBvcmFyaWx5IGV4cG9zZSBpbnB1dCB2YWx1ZS4gVXNlIHdpdGggY2F1dGlvbi5cbiAgcHVibGljIGdldCBuYW1lSW5wdXQoKSB7XG4gICAgcmV0dXJuIHRoaXMuX25hbWVcbiAgfVxuXG4gIC8vIG91dHB1dF9sb2NhdGlvbiAtIGNvbXB1dGVkOiBmYWxzZSwgb3B0aW9uYWw6IHRydWUsIHJlcXVpcmVkOiBmYWxzZVxuICBwcml2YXRlIF9vdXRwdXRMb2NhdGlvbj86IERhdGFicmV3Sm9iT3V0cHV0TG9jYXRpb247XG4gIHB1YmxpYyBnZXQgb3V0cHV0TG9jYXRpb24oKSB7XG4gICAgcmV0dXJuIHRoaXMuaW50ZXJwb2xhdGlvbkZvckF0dHJpYnV0ZSgnb3V0cHV0X2xvY2F0aW9uJykgYXMgYW55O1xuICB9XG4gIHB1YmxpYyBzZXQgb3V0cHV0TG9jYXRpb24odmFsdWU6IERhdGFicmV3Sm9iT3V0cHV0TG9jYXRpb24gKSB7XG4gICAgdGhpcy5fb3V0cHV0TG9jYXRpb24gPSB2YWx1ZTtcbiAgfVxuICBwdWJsaWMgcmVzZXRPdXRwdXRMb2NhdGlvbigpIHtcbiAgICB0aGlzLl9vdXRwdXRMb2NhdGlvbiA9IHVuZGVmaW5lZDtcbiAgfVxuICAvLyBUZW1wb3JhcmlseSBleHBvc2UgaW5wdXQgdmFsdWUuIFVzZSB3aXRoIGNhdXRpb24uXG4gIHB1YmxpYyBnZXQgb3V0cHV0TG9jYXRpb25JbnB1dCgpIHtcbiAgICByZXR1cm4gdGhpcy5fb3V0cHV0TG9jYXRpb25cbiAgfVxuXG4gIC8vIG91dHB1dHMgLSBjb21wdXRlZDogZmFsc2UsIG9wdGlvbmFsOiB0cnVlLCByZXF1aXJlZDogZmFsc2VcbiAgcHJpdmF0ZSBfb3V0cHV0cz86IERhdGFicmV3Sm9iT3V0cHV0c1tdO1xuICBwdWJsaWMgZ2V0IG91dHB1dHMoKSB7XG4gICAgcmV0dXJuIHRoaXMuaW50ZXJwb2xhdGlvbkZvckF0dHJpYnV0ZSgnb3V0cHV0cycpIGFzIGFueTtcbiAgfVxuICBwdWJsaWMgc2V0IG91dHB1dHModmFsdWU6IERhdGFicmV3Sm9iT3V0cHV0c1tdICkge1xuICAgIHRoaXMuX291dHB1dHMgPSB2YWx1ZTtcbiAgfVxuICBwdWJsaWMgcmVzZXRPdXRwdXRzKCkge1xuICAgIHRoaXMuX291dHB1dHMgPSB1bmRlZmluZWQ7XG4gIH1cbiAgLy8gVGVtcG9yYXJpbHkgZXhwb3NlIGlucHV0IHZhbHVlLiBVc2Ugd2l0aCBjYXV0aW9uLlxuICBwdWJsaWMgZ2V0IG91dHB1dHNJbnB1dCgpIHtcbiAgICByZXR1cm4gdGhpcy5fb3V0cHV0c1xuICB9XG5cbiAgLy8gcHJvZmlsZV9jb25maWd1cmF0aW9uIC0gY29tcHV0ZWQ6IGZhbHNlLCBvcHRpb25hbDogdHJ1ZSwgcmVxdWlyZWQ6IGZhbHNlXG4gIHByaXZhdGUgX3Byb2ZpbGVDb25maWd1cmF0aW9uPzogRGF0YWJyZXdKb2JQcm9maWxlQ29uZmlndXJhdGlvbjtcbiAgcHVibGljIGdldCBwcm9maWxlQ29uZmlndXJhdGlvbigpIHtcbiAgICByZXR1cm4gdGhpcy5pbnRlcnBvbGF0aW9uRm9yQXR0cmlidXRlKCdwcm9maWxlX2NvbmZpZ3VyYXRpb24nKSBhcyBhbnk7XG4gIH1cbiAgcHVibGljIHNldCBwcm9maWxlQ29uZmlndXJhdGlvbih2YWx1ZTogRGF0YWJyZXdKb2JQcm9maWxlQ29uZmlndXJhdGlvbiApIHtcbiAgICB0aGlzLl9wcm9maWxlQ29uZmlndXJhdGlvbiA9IHZhbHVlO1xuICB9XG4gIHB1YmxpYyByZXNldFByb2ZpbGVDb25maWd1cmF0aW9uKCkge1xuICAgIHRoaXMuX3Byb2ZpbGVDb25maWd1cmF0aW9uID0gdW5kZWZpbmVkO1xuICB9XG4gIC8vIFRlbXBvcmFyaWx5IGV4cG9zZSBpbnB1dCB2YWx1ZS4gVXNlIHdpdGggY2F1dGlvbi5cbiAgcHVibGljIGdldCBwcm9maWxlQ29uZmlndXJhdGlvbklucHV0KCkge1xuICAgIHJldHVybiB0aGlzLl9wcm9maWxlQ29uZmlndXJhdGlvblxuICB9XG5cbiAgLy8gcHJvamVjdF9uYW1lIC0gY29tcHV0ZWQ6IGZhbHNlLCBvcHRpb25hbDogdHJ1ZSwgcmVxdWlyZWQ6IGZhbHNlXG4gIHByaXZhdGUgX3Byb2plY3ROYW1lPzogc3RyaW5nO1xuICBwdWJsaWMgZ2V0IHByb2plY3ROYW1lKCkge1xuICAgIHJldHVybiB0aGlzLmdldFN0cmluZ0F0dHJpYnV0ZSgncHJvamVjdF9uYW1lJyk7XG4gIH1cbiAgcHVibGljIHNldCBwcm9qZWN0TmFtZSh2YWx1ZTogc3RyaW5nICkge1xuICAgIHRoaXMuX3Byb2plY3ROYW1lID0gdmFsdWU7XG4gIH1cbiAgcHVibGljIHJlc2V0UHJvamVjdE5hbWUoKSB7XG4gICAgdGhpcy5fcHJvamVjdE5hbWUgPSB1bmRlZmluZWQ7XG4gIH1cbiAgLy8gVGVtcG9yYXJpbHkgZXhwb3NlIGlucHV0IHZhbHVlLiBVc2Ugd2l0aCBjYXV0aW9uLlxuICBwdWJsaWMgZ2V0IHByb2plY3ROYW1lSW5wdXQoKSB7XG4gICAgcmV0dXJuIHRoaXMuX3Byb2plY3ROYW1lXG4gIH1cblxuICAvLyByZWNpcGUgLSBjb21wdXRlZDogZmFsc2UsIG9wdGlvbmFsOiB0cnVlLCByZXF1aXJlZDogZmFsc2VcbiAgcHJpdmF0ZSBfcmVjaXBlPzogRGF0YWJyZXdKb2JSZWNpcGU7XG4gIHB1YmxpYyBnZXQgcmVjaXBlKCkge1xuICAgIHJldHVybiB0aGlzLmludGVycG9sYXRpb25Gb3JBdHRyaWJ1dGUoJ3JlY2lwZScpIGFzIGFueTtcbiAgfVxuICBwdWJsaWMgc2V0IHJlY2lwZSh2YWx1ZTogRGF0YWJyZXdKb2JSZWNpcGUgKSB7XG4gICAgdGhpcy5fcmVjaXBlID0gdmFsdWU7XG4gIH1cbiAgcHVibGljIHJlc2V0UmVjaXBlKCkge1xuICAgIHRoaXMuX3JlY2lwZSA9IHVuZGVmaW5lZDtcbiAgfVxuICAvLyBUZW1wb3JhcmlseSBleHBvc2UgaW5wdXQgdmFsdWUuIFVzZSB3aXRoIGNhdXRpb24uXG4gIHB1YmxpYyBnZXQgcmVjaXBlSW5wdXQoKSB7XG4gICAgcmV0dXJuIHRoaXMuX3JlY2lwZVxuICB9XG5cbiAgLy8gcm9sZV9hcm4gLSBjb21wdXRlZDogZmFsc2UsIG9wdGlvbmFsOiBmYWxzZSwgcmVxdWlyZWQ6IHRydWVcbiAgcHJpdmF0ZSBfcm9sZUFybjogc3RyaW5nO1xuICBwdWJsaWMgZ2V0IHJvbGVBcm4oKSB7XG4gICAgcmV0dXJuIHRoaXMuZ2V0U3RyaW5nQXR0cmlidXRlKCdyb2xlX2FybicpO1xuICB9XG4gIHB1YmxpYyBzZXQgcm9sZUFybih2YWx1ZTogc3RyaW5nKSB7XG4gICAgdGhpcy5fcm9sZUFybiA9IHZhbHVlO1xuICB9XG4gIC8vIFRlbXBvcmFyaWx5IGV4cG9zZSBpbnB1dCB2YWx1ZS4gVXNlIHdpdGggY2F1dGlvbi5cbiAgcHVibGljIGdldCByb2xlQXJuSW5wdXQoKSB7XG4gICAgcmV0dXJuIHRoaXMuX3JvbGVBcm5cbiAgfVxuXG4gIC8vIHRhZ3MgLSBjb21wdXRlZDogdHJ1ZSwgb3B0aW9uYWw6IHRydWUsIHJlcXVpcmVkOiBmYWxzZVxuICBwcml2YXRlIF90YWdzPzogRGF0YWJyZXdKb2JUYWdzW107XG4gIHB1YmxpYyBnZXQgdGFncygpIHtcbiAgICByZXR1cm4gdGhpcy5pbnRlcnBvbGF0aW9uRm9yQXR0cmlidXRlKCd0YWdzJykgYXMgYW55O1xuICB9XG4gIHB1YmxpYyBzZXQgdGFncyh2YWx1ZTogRGF0YWJyZXdKb2JUYWdzW10pIHtcbiAgICB0aGlzLl90YWdzID0gdmFsdWU7XG4gIH1cbiAgcHVibGljIHJlc2V0VGFncygpIHtcbiAgICB0aGlzLl90YWdzID0gdW5kZWZpbmVkO1xuICB9XG4gIC8vIFRlbXBvcmFyaWx5IGV4cG9zZSBpbnB1dCB2YWx1ZS4gVXNlIHdpdGggY2F1dGlvbi5cbiAgcHVibGljIGdldCB0YWdzSW5wdXQoKSB7XG4gICAgcmV0dXJuIHRoaXMuX3RhZ3NcbiAgfVxuXG4gIC8vIHRpbWVvdXQgLSBjb21wdXRlZDogZmFsc2UsIG9wdGlvbmFsOiB0cnVlLCByZXF1aXJlZDogZmFsc2VcbiAgcHJpdmF0ZSBfdGltZW91dD86IG51bWJlcjtcbiAgcHVibGljIGdldCB0aW1lb3V0KCkge1xuICAgIHJldHVybiB0aGlzLmdldE51bWJlckF0dHJpYnV0ZSgndGltZW91dCcpO1xuICB9XG4gIHB1YmxpYyBzZXQgdGltZW91dCh2YWx1ZTogbnVtYmVyICkge1xuICAgIHRoaXMuX3RpbWVvdXQgPSB2YWx1ZTtcbiAgfVxuICBwdWJsaWMgcmVzZXRUaW1lb3V0KCkge1xuICAgIHRoaXMuX3RpbWVvdXQgPSB1bmRlZmluZWQ7XG4gIH1cbiAgLy8gVGVtcG9yYXJpbHkgZXhwb3NlIGlucHV0IHZhbHVlLiBVc2Ugd2l0aCBjYXV0aW9uLlxuICBwdWJsaWMgZ2V0IHRpbWVvdXRJbnB1dCgpIHtcbiAgICByZXR1cm4gdGhpcy5fdGltZW91dFxuICB9XG5cbiAgLy8gdHlwZSAtIGNvbXB1dGVkOiBmYWxzZSwgb3B0aW9uYWw6IGZhbHNlLCByZXF1aXJlZDogdHJ1ZVxuICBwcml2YXRlIF90eXBlOiBzdHJpbmc7XG4gIHB1YmxpYyBnZXQgdHlwZSgpIHtcbiAgICByZXR1cm4gdGhpcy5nZXRTdHJpbmdBdHRyaWJ1dGUoJ3R5cGUnKTtcbiAgfVxuICBwdWJsaWMgc2V0IHR5cGUodmFsdWU6IHN0cmluZykge1xuICAgIHRoaXMuX3R5cGUgPSB2YWx1ZTtcbiAgfVxuICAvLyBUZW1wb3JhcmlseSBleHBvc2UgaW5wdXQgdmFsdWUuIFVzZSB3aXRoIGNhdXRpb24uXG4gIHB1YmxpYyBnZXQgdHlwZUlucHV0KCkge1xuICAgIHJldHVybiB0aGlzLl90eXBlXG4gIH1cblxuICAvLyA9PT09PT09PT1cbiAgLy8gU1lOVEhFU0lTXG4gIC8vID09PT09PT09PVxuXG4gIHByb3RlY3RlZCBzeW50aGVzaXplQXR0cmlidXRlcygpOiB7IFtuYW1lOiBzdHJpbmddOiBhbnkgfSB7XG4gICAgcmV0dXJuIHtcbiAgICAgIGRhdGFfY2F0YWxvZ19vdXRwdXRzOiBjZGt0Zi5saXN0TWFwcGVyKGRhdGFicmV3Sm9iRGF0YUNhdGFsb2dPdXRwdXRzVG9UZXJyYWZvcm0pKHRoaXMuX2RhdGFDYXRhbG9nT3V0cHV0cyksXG4gICAgICBkYXRhYmFzZV9vdXRwdXRzOiBjZGt0Zi5saXN0TWFwcGVyKGRhdGFicmV3Sm9iRGF0YWJhc2VPdXRwdXRzVG9UZXJyYWZvcm0pKHRoaXMuX2RhdGFiYXNlT3V0cHV0cyksXG4gICAgICBkYXRhc2V0X25hbWU6IGNka3RmLnN0cmluZ1RvVGVycmFmb3JtKHRoaXMuX2RhdGFzZXROYW1lKSxcbiAgICAgIGVuY3J5cHRpb25fa2V5X2FybjogY2RrdGYuc3RyaW5nVG9UZXJyYWZvcm0odGhpcy5fZW5jcnlwdGlvbktleUFybiksXG4gICAgICBlbmNyeXB0aW9uX21vZGU6IGNka3RmLnN0cmluZ1RvVGVycmFmb3JtKHRoaXMuX2VuY3J5cHRpb25Nb2RlKSxcbiAgICAgIGpvYl9zYW1wbGU6IGRhdGFicmV3Sm9iSm9iU2FtcGxlVG9UZXJyYWZvcm0odGhpcy5fam9iU2FtcGxlKSxcbiAgICAgIGxvZ19zdWJzY3JpcHRpb246IGNka3RmLnN0cmluZ1RvVGVycmFmb3JtKHRoaXMuX2xvZ1N1YnNjcmlwdGlvbiksXG4gICAgICBtYXhfY2FwYWNpdHk6IGNka3RmLm51bWJlclRvVGVycmFmb3JtKHRoaXMuX21heENhcGFjaXR5KSxcbiAgICAgIG1heF9yZXRyaWVzOiBjZGt0Zi5udW1iZXJUb1RlcnJhZm9ybSh0aGlzLl9tYXhSZXRyaWVzKSxcbiAgICAgIG5hbWU6IGNka3RmLnN0cmluZ1RvVGVycmFmb3JtKHRoaXMuX25hbWUpLFxuICAgICAgb3V0cHV0X2xvY2F0aW9uOiBkYXRhYnJld0pvYk91dHB1dExvY2F0aW9uVG9UZXJyYWZvcm0odGhpcy5fb3V0cHV0TG9jYXRpb24pLFxuICAgICAgb3V0cHV0czogY2RrdGYubGlzdE1hcHBlcihkYXRhYnJld0pvYk91dHB1dHNUb1RlcnJhZm9ybSkodGhpcy5fb3V0cHV0cyksXG4gICAgICBwcm9maWxlX2NvbmZpZ3VyYXRpb246IGRhdGFicmV3Sm9iUHJvZmlsZUNvbmZpZ3VyYXRpb25Ub1RlcnJhZm9ybSh0aGlzLl9wcm9maWxlQ29uZmlndXJhdGlvbiksXG4gICAgICBwcm9qZWN0X25hbWU6IGNka3RmLnN0cmluZ1RvVGVycmFmb3JtKHRoaXMuX3Byb2plY3ROYW1lKSxcbiAgICAgIHJlY2lwZTogZGF0YWJyZXdKb2JSZWNpcGVUb1RlcnJhZm9ybSh0aGlzLl9yZWNpcGUpLFxuICAgICAgcm9sZV9hcm46IGNka3RmLnN0cmluZ1RvVGVycmFmb3JtKHRoaXMuX3JvbGVBcm4pLFxuICAgICAgdGFnczogY2RrdGYubGlzdE1hcHBlcihkYXRhYnJld0pvYlRhZ3NUb1RlcnJhZm9ybSkodGhpcy5fdGFncyksXG4gICAgICB0aW1lb3V0OiBjZGt0Zi5udW1iZXJUb1RlcnJhZm9ybSh0aGlzLl90aW1lb3V0KSxcbiAgICAgIHR5cGU6IGNka3RmLnN0cmluZ1RvVGVycmFmb3JtKHRoaXMuX3R5cGUpLFxuICAgIH07XG4gIH1cbn1cbiJdfQ==