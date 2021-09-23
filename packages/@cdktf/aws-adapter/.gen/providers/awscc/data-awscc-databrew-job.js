"use strict";
// https://www.terraform.io/docs/providers/awscc/d/databrew_job.html
// generated from terraform resource schema
Object.defineProperty(exports, "__esModule", { value: true });
exports.DataAwsccDatabrewJob = exports.dataAwsccDatabrewJobTagsToTerraform = exports.DataAwsccDatabrewJobTags = exports.dataAwsccDatabrewJobRecipeToTerraform = exports.DataAwsccDatabrewJobRecipe = exports.dataAwsccDatabrewJobProfileConfigurationToTerraform = exports.DataAwsccDatabrewJobProfileConfiguration = exports.dataAwsccDatabrewJobProfileConfigurationProfileColumnsToTerraform = exports.DataAwsccDatabrewJobProfileConfigurationProfileColumns = exports.dataAwsccDatabrewJobProfileConfigurationDatasetStatisticsConfigurationToTerraform = exports.DataAwsccDatabrewJobProfileConfigurationDatasetStatisticsConfiguration = exports.dataAwsccDatabrewJobProfileConfigurationDatasetStatisticsConfigurationOverridesToTerraform = exports.DataAwsccDatabrewJobProfileConfigurationDatasetStatisticsConfigurationOverrides = exports.dataAwsccDatabrewJobProfileConfigurationColumnStatisticsConfigurationsToTerraform = exports.DataAwsccDatabrewJobProfileConfigurationColumnStatisticsConfigurations = exports.dataAwsccDatabrewJobProfileConfigurationColumnStatisticsConfigurationsStatisticsToTerraform = exports.DataAwsccDatabrewJobProfileConfigurationColumnStatisticsConfigurationsStatistics = exports.dataAwsccDatabrewJobProfileConfigurationColumnStatisticsConfigurationsStatisticsOverridesToTerraform = exports.DataAwsccDatabrewJobProfileConfigurationColumnStatisticsConfigurationsStatisticsOverrides = exports.dataAwsccDatabrewJobProfileConfigurationColumnStatisticsConfigurationsSelectorsToTerraform = exports.DataAwsccDatabrewJobProfileConfigurationColumnStatisticsConfigurationsSelectors = exports.dataAwsccDatabrewJobOutputsToTerraform = exports.DataAwsccDatabrewJobOutputs = exports.dataAwsccDatabrewJobOutputsLocationToTerraform = exports.DataAwsccDatabrewJobOutputsLocation = exports.dataAwsccDatabrewJobOutputsFormatOptionsToTerraform = exports.DataAwsccDatabrewJobOutputsFormatOptions = exports.dataAwsccDatabrewJobOutputsFormatOptionsCsvToTerraform = exports.DataAwsccDatabrewJobOutputsFormatOptionsCsv = exports.dataAwsccDatabrewJobOutputLocationToTerraform = exports.DataAwsccDatabrewJobOutputLocation = exports.dataAwsccDatabrewJobJobSampleToTerraform = exports.DataAwsccDatabrewJobJobSample = exports.dataAwsccDatabrewJobDatabaseOutputsToTerraform = exports.DataAwsccDatabrewJobDatabaseOutputs = exports.dataAwsccDatabrewJobDatabaseOutputsDatabaseOptionsToTerraform = exports.DataAwsccDatabrewJobDatabaseOutputsDatabaseOptions = exports.dataAwsccDatabrewJobDatabaseOutputsDatabaseOptionsTempDirectoryToTerraform = exports.DataAwsccDatabrewJobDatabaseOutputsDatabaseOptionsTempDirectory = exports.dataAwsccDatabrewJobDataCatalogOutputsToTerraform = exports.DataAwsccDatabrewJobDataCatalogOutputs = exports.dataAwsccDatabrewJobDataCatalogOutputsS3OptionsToTerraform = exports.DataAwsccDatabrewJobDataCatalogOutputsS3Options = exports.dataAwsccDatabrewJobDataCatalogOutputsS3OptionsLocationToTerraform = exports.DataAwsccDatabrewJobDataCatalogOutputsS3OptionsLocation = exports.dataAwsccDatabrewJobDataCatalogOutputsDatabaseOptionsToTerraform = exports.DataAwsccDatabrewJobDataCatalogOutputsDatabaseOptions = exports.dataAwsccDatabrewJobDataCatalogOutputsDatabaseOptionsTempDirectoryToTerraform = exports.DataAwsccDatabrewJobDataCatalogOutputsDatabaseOptionsTempDirectory = void 0;
const cdktf = require("cdktf");
class DataAwsccDatabrewJobDataCatalogOutputsDatabaseOptionsTempDirectory extends cdktf.ComplexComputedList {
    // bucket - computed: true, optional: false, required: false
    get bucket() {
        return this.getStringAttribute('bucket');
    }
    // key - computed: true, optional: false, required: false
    get key() {
        return this.getStringAttribute('key');
    }
}
exports.DataAwsccDatabrewJobDataCatalogOutputsDatabaseOptionsTempDirectory = DataAwsccDatabrewJobDataCatalogOutputsDatabaseOptionsTempDirectory;
function dataAwsccDatabrewJobDataCatalogOutputsDatabaseOptionsTempDirectoryToTerraform(struct) {
    if (!cdktf.canInspect(struct)) {
        return struct;
    }
    return {
        bucket: cdktf.stringToTerraform(struct.bucket),
        key: cdktf.stringToTerraform(struct.key),
    };
}
exports.dataAwsccDatabrewJobDataCatalogOutputsDatabaseOptionsTempDirectoryToTerraform = dataAwsccDatabrewJobDataCatalogOutputsDatabaseOptionsTempDirectoryToTerraform;
class DataAwsccDatabrewJobDataCatalogOutputsDatabaseOptions extends cdktf.ComplexComputedList {
    // table_name - computed: true, optional: false, required: false
    get tableName() {
        return this.getStringAttribute('table_name');
    }
    // temp_directory - computed: true, optional: false, required: false
    get tempDirectory() {
        return this.interpolationForAttribute('temp_directory');
    }
}
exports.DataAwsccDatabrewJobDataCatalogOutputsDatabaseOptions = DataAwsccDatabrewJobDataCatalogOutputsDatabaseOptions;
function dataAwsccDatabrewJobDataCatalogOutputsDatabaseOptionsToTerraform(struct) {
    if (!cdktf.canInspect(struct)) {
        return struct;
    }
    return {
        table_name: cdktf.stringToTerraform(struct.tableName),
        temp_directory: dataAwsccDatabrewJobDataCatalogOutputsDatabaseOptionsTempDirectoryToTerraform(struct.tempDirectory),
    };
}
exports.dataAwsccDatabrewJobDataCatalogOutputsDatabaseOptionsToTerraform = dataAwsccDatabrewJobDataCatalogOutputsDatabaseOptionsToTerraform;
class DataAwsccDatabrewJobDataCatalogOutputsS3OptionsLocation extends cdktf.ComplexComputedList {
    // bucket - computed: true, optional: false, required: false
    get bucket() {
        return this.getStringAttribute('bucket');
    }
    // key - computed: true, optional: false, required: false
    get key() {
        return this.getStringAttribute('key');
    }
}
exports.DataAwsccDatabrewJobDataCatalogOutputsS3OptionsLocation = DataAwsccDatabrewJobDataCatalogOutputsS3OptionsLocation;
function dataAwsccDatabrewJobDataCatalogOutputsS3OptionsLocationToTerraform(struct) {
    if (!cdktf.canInspect(struct)) {
        return struct;
    }
    return {
        bucket: cdktf.stringToTerraform(struct.bucket),
        key: cdktf.stringToTerraform(struct.key),
    };
}
exports.dataAwsccDatabrewJobDataCatalogOutputsS3OptionsLocationToTerraform = dataAwsccDatabrewJobDataCatalogOutputsS3OptionsLocationToTerraform;
class DataAwsccDatabrewJobDataCatalogOutputsS3Options extends cdktf.ComplexComputedList {
    // location - computed: true, optional: false, required: false
    get location() {
        return this.interpolationForAttribute('location');
    }
}
exports.DataAwsccDatabrewJobDataCatalogOutputsS3Options = DataAwsccDatabrewJobDataCatalogOutputsS3Options;
function dataAwsccDatabrewJobDataCatalogOutputsS3OptionsToTerraform(struct) {
    if (!cdktf.canInspect(struct)) {
        return struct;
    }
    return {
        location: dataAwsccDatabrewJobDataCatalogOutputsS3OptionsLocationToTerraform(struct.location),
    };
}
exports.dataAwsccDatabrewJobDataCatalogOutputsS3OptionsToTerraform = dataAwsccDatabrewJobDataCatalogOutputsS3OptionsToTerraform;
class DataAwsccDatabrewJobDataCatalogOutputs extends cdktf.ComplexComputedList {
    // catalog_id - computed: true, optional: false, required: false
    get catalogId() {
        return this.getStringAttribute('catalog_id');
    }
    // database_name - computed: true, optional: false, required: false
    get databaseName() {
        return this.getStringAttribute('database_name');
    }
    // database_options - computed: true, optional: false, required: false
    get databaseOptions() {
        return this.interpolationForAttribute('database_options');
    }
    // overwrite - computed: true, optional: false, required: false
    get overwrite() {
        return this.getBooleanAttribute('overwrite');
    }
    // s3_options - computed: true, optional: false, required: false
    get s3Options() {
        return this.interpolationForAttribute('s3_options');
    }
    // table_name - computed: true, optional: false, required: false
    get tableName() {
        return this.getStringAttribute('table_name');
    }
}
exports.DataAwsccDatabrewJobDataCatalogOutputs = DataAwsccDatabrewJobDataCatalogOutputs;
function dataAwsccDatabrewJobDataCatalogOutputsToTerraform(struct) {
    if (!cdktf.canInspect(struct)) {
        return struct;
    }
    return {
        catalog_id: cdktf.stringToTerraform(struct.catalogId),
        database_name: cdktf.stringToTerraform(struct.databaseName),
        database_options: dataAwsccDatabrewJobDataCatalogOutputsDatabaseOptionsToTerraform(struct.databaseOptions),
        overwrite: cdktf.booleanToTerraform(struct.overwrite),
        s3_options: dataAwsccDatabrewJobDataCatalogOutputsS3OptionsToTerraform(struct.s3Options),
        table_name: cdktf.stringToTerraform(struct.tableName),
    };
}
exports.dataAwsccDatabrewJobDataCatalogOutputsToTerraform = dataAwsccDatabrewJobDataCatalogOutputsToTerraform;
class DataAwsccDatabrewJobDatabaseOutputsDatabaseOptionsTempDirectory extends cdktf.ComplexComputedList {
    // bucket - computed: true, optional: false, required: false
    get bucket() {
        return this.getStringAttribute('bucket');
    }
    // key - computed: true, optional: false, required: false
    get key() {
        return this.getStringAttribute('key');
    }
}
exports.DataAwsccDatabrewJobDatabaseOutputsDatabaseOptionsTempDirectory = DataAwsccDatabrewJobDatabaseOutputsDatabaseOptionsTempDirectory;
function dataAwsccDatabrewJobDatabaseOutputsDatabaseOptionsTempDirectoryToTerraform(struct) {
    if (!cdktf.canInspect(struct)) {
        return struct;
    }
    return {
        bucket: cdktf.stringToTerraform(struct.bucket),
        key: cdktf.stringToTerraform(struct.key),
    };
}
exports.dataAwsccDatabrewJobDatabaseOutputsDatabaseOptionsTempDirectoryToTerraform = dataAwsccDatabrewJobDatabaseOutputsDatabaseOptionsTempDirectoryToTerraform;
class DataAwsccDatabrewJobDatabaseOutputsDatabaseOptions extends cdktf.ComplexComputedList {
    // table_name - computed: true, optional: false, required: false
    get tableName() {
        return this.getStringAttribute('table_name');
    }
    // temp_directory - computed: true, optional: false, required: false
    get tempDirectory() {
        return this.interpolationForAttribute('temp_directory');
    }
}
exports.DataAwsccDatabrewJobDatabaseOutputsDatabaseOptions = DataAwsccDatabrewJobDatabaseOutputsDatabaseOptions;
function dataAwsccDatabrewJobDatabaseOutputsDatabaseOptionsToTerraform(struct) {
    if (!cdktf.canInspect(struct)) {
        return struct;
    }
    return {
        table_name: cdktf.stringToTerraform(struct.tableName),
        temp_directory: dataAwsccDatabrewJobDatabaseOutputsDatabaseOptionsTempDirectoryToTerraform(struct.tempDirectory),
    };
}
exports.dataAwsccDatabrewJobDatabaseOutputsDatabaseOptionsToTerraform = dataAwsccDatabrewJobDatabaseOutputsDatabaseOptionsToTerraform;
class DataAwsccDatabrewJobDatabaseOutputs extends cdktf.ComplexComputedList {
    // database_options - computed: true, optional: false, required: false
    get databaseOptions() {
        return this.interpolationForAttribute('database_options');
    }
    // database_output_mode - computed: true, optional: false, required: false
    get databaseOutputMode() {
        return this.getStringAttribute('database_output_mode');
    }
    // glue_connection_name - computed: true, optional: false, required: false
    get glueConnectionName() {
        return this.getStringAttribute('glue_connection_name');
    }
}
exports.DataAwsccDatabrewJobDatabaseOutputs = DataAwsccDatabrewJobDatabaseOutputs;
function dataAwsccDatabrewJobDatabaseOutputsToTerraform(struct) {
    if (!cdktf.canInspect(struct)) {
        return struct;
    }
    return {
        database_options: dataAwsccDatabrewJobDatabaseOutputsDatabaseOptionsToTerraform(struct.databaseOptions),
        database_output_mode: cdktf.stringToTerraform(struct.databaseOutputMode),
        glue_connection_name: cdktf.stringToTerraform(struct.glueConnectionName),
    };
}
exports.dataAwsccDatabrewJobDatabaseOutputsToTerraform = dataAwsccDatabrewJobDatabaseOutputsToTerraform;
class DataAwsccDatabrewJobJobSample extends cdktf.ComplexComputedList {
    // mode - computed: true, optional: false, required: false
    get mode() {
        return this.getStringAttribute('mode');
    }
    // size - computed: true, optional: false, required: false
    get size() {
        return this.getNumberAttribute('size');
    }
}
exports.DataAwsccDatabrewJobJobSample = DataAwsccDatabrewJobJobSample;
function dataAwsccDatabrewJobJobSampleToTerraform(struct) {
    if (!cdktf.canInspect(struct)) {
        return struct;
    }
    return {
        mode: cdktf.stringToTerraform(struct.mode),
        size: cdktf.numberToTerraform(struct.size),
    };
}
exports.dataAwsccDatabrewJobJobSampleToTerraform = dataAwsccDatabrewJobJobSampleToTerraform;
class DataAwsccDatabrewJobOutputLocation extends cdktf.ComplexComputedList {
    // bucket - computed: true, optional: false, required: false
    get bucket() {
        return this.getStringAttribute('bucket');
    }
    // key - computed: true, optional: false, required: false
    get key() {
        return this.getStringAttribute('key');
    }
}
exports.DataAwsccDatabrewJobOutputLocation = DataAwsccDatabrewJobOutputLocation;
function dataAwsccDatabrewJobOutputLocationToTerraform(struct) {
    if (!cdktf.canInspect(struct)) {
        return struct;
    }
    return {
        bucket: cdktf.stringToTerraform(struct.bucket),
        key: cdktf.stringToTerraform(struct.key),
    };
}
exports.dataAwsccDatabrewJobOutputLocationToTerraform = dataAwsccDatabrewJobOutputLocationToTerraform;
class DataAwsccDatabrewJobOutputsFormatOptionsCsv extends cdktf.ComplexComputedList {
    // delimiter - computed: true, optional: false, required: false
    get delimiter() {
        return this.getStringAttribute('delimiter');
    }
}
exports.DataAwsccDatabrewJobOutputsFormatOptionsCsv = DataAwsccDatabrewJobOutputsFormatOptionsCsv;
function dataAwsccDatabrewJobOutputsFormatOptionsCsvToTerraform(struct) {
    if (!cdktf.canInspect(struct)) {
        return struct;
    }
    return {
        delimiter: cdktf.stringToTerraform(struct.delimiter),
    };
}
exports.dataAwsccDatabrewJobOutputsFormatOptionsCsvToTerraform = dataAwsccDatabrewJobOutputsFormatOptionsCsvToTerraform;
class DataAwsccDatabrewJobOutputsFormatOptions extends cdktf.ComplexComputedList {
    // csv - computed: true, optional: false, required: false
    get csv() {
        return this.interpolationForAttribute('csv');
    }
}
exports.DataAwsccDatabrewJobOutputsFormatOptions = DataAwsccDatabrewJobOutputsFormatOptions;
function dataAwsccDatabrewJobOutputsFormatOptionsToTerraform(struct) {
    if (!cdktf.canInspect(struct)) {
        return struct;
    }
    return {
        csv: dataAwsccDatabrewJobOutputsFormatOptionsCsvToTerraform(struct.csv),
    };
}
exports.dataAwsccDatabrewJobOutputsFormatOptionsToTerraform = dataAwsccDatabrewJobOutputsFormatOptionsToTerraform;
class DataAwsccDatabrewJobOutputsLocation extends cdktf.ComplexComputedList {
    // bucket - computed: true, optional: false, required: false
    get bucket() {
        return this.getStringAttribute('bucket');
    }
    // key - computed: true, optional: false, required: false
    get key() {
        return this.getStringAttribute('key');
    }
}
exports.DataAwsccDatabrewJobOutputsLocation = DataAwsccDatabrewJobOutputsLocation;
function dataAwsccDatabrewJobOutputsLocationToTerraform(struct) {
    if (!cdktf.canInspect(struct)) {
        return struct;
    }
    return {
        bucket: cdktf.stringToTerraform(struct.bucket),
        key: cdktf.stringToTerraform(struct.key),
    };
}
exports.dataAwsccDatabrewJobOutputsLocationToTerraform = dataAwsccDatabrewJobOutputsLocationToTerraform;
class DataAwsccDatabrewJobOutputs extends cdktf.ComplexComputedList {
    // compression_format - computed: true, optional: false, required: false
    get compressionFormat() {
        return this.getStringAttribute('compression_format');
    }
    // format - computed: true, optional: false, required: false
    get format() {
        return this.getStringAttribute('format');
    }
    // format_options - computed: true, optional: false, required: false
    get formatOptions() {
        return this.interpolationForAttribute('format_options');
    }
    // location - computed: true, optional: false, required: false
    get location() {
        return this.interpolationForAttribute('location');
    }
    // overwrite - computed: true, optional: false, required: false
    get overwrite() {
        return this.getBooleanAttribute('overwrite');
    }
    // partition_columns - computed: true, optional: false, required: false
    get partitionColumns() {
        return this.getListAttribute('partition_columns');
    }
}
exports.DataAwsccDatabrewJobOutputs = DataAwsccDatabrewJobOutputs;
function dataAwsccDatabrewJobOutputsToTerraform(struct) {
    if (!cdktf.canInspect(struct)) {
        return struct;
    }
    return {
        compression_format: cdktf.stringToTerraform(struct.compressionFormat),
        format: cdktf.stringToTerraform(struct.format),
        format_options: dataAwsccDatabrewJobOutputsFormatOptionsToTerraform(struct.formatOptions),
        location: dataAwsccDatabrewJobOutputsLocationToTerraform(struct.location),
        overwrite: cdktf.booleanToTerraform(struct.overwrite),
        partition_columns: cdktf.listMapper(cdktf.stringToTerraform)(struct.partitionColumns),
    };
}
exports.dataAwsccDatabrewJobOutputsToTerraform = dataAwsccDatabrewJobOutputsToTerraform;
class DataAwsccDatabrewJobProfileConfigurationColumnStatisticsConfigurationsSelectors extends cdktf.ComplexComputedList {
    // name - computed: true, optional: false, required: false
    get name() {
        return this.getStringAttribute('name');
    }
    // regex - computed: true, optional: false, required: false
    get regex() {
        return this.getStringAttribute('regex');
    }
}
exports.DataAwsccDatabrewJobProfileConfigurationColumnStatisticsConfigurationsSelectors = DataAwsccDatabrewJobProfileConfigurationColumnStatisticsConfigurationsSelectors;
function dataAwsccDatabrewJobProfileConfigurationColumnStatisticsConfigurationsSelectorsToTerraform(struct) {
    if (!cdktf.canInspect(struct)) {
        return struct;
    }
    return {
        name: cdktf.stringToTerraform(struct.name),
        regex: cdktf.stringToTerraform(struct.regex),
    };
}
exports.dataAwsccDatabrewJobProfileConfigurationColumnStatisticsConfigurationsSelectorsToTerraform = dataAwsccDatabrewJobProfileConfigurationColumnStatisticsConfigurationsSelectorsToTerraform;
class DataAwsccDatabrewJobProfileConfigurationColumnStatisticsConfigurationsStatisticsOverrides extends cdktf.ComplexComputedList {
    // parameters - computed: true, optional: false, required: false
    get parameters() {
        return this.interpolationForAttribute('parameters');
    }
    // statistic - computed: true, optional: false, required: false
    get statistic() {
        return this.getStringAttribute('statistic');
    }
}
exports.DataAwsccDatabrewJobProfileConfigurationColumnStatisticsConfigurationsStatisticsOverrides = DataAwsccDatabrewJobProfileConfigurationColumnStatisticsConfigurationsStatisticsOverrides;
function dataAwsccDatabrewJobProfileConfigurationColumnStatisticsConfigurationsStatisticsOverridesToTerraform(struct) {
    if (!cdktf.canInspect(struct)) {
        return struct;
    }
    return {
        parameters: cdktf.hashMapper(cdktf.stringToTerraform)(struct.parameters),
        statistic: cdktf.stringToTerraform(struct.statistic),
    };
}
exports.dataAwsccDatabrewJobProfileConfigurationColumnStatisticsConfigurationsStatisticsOverridesToTerraform = dataAwsccDatabrewJobProfileConfigurationColumnStatisticsConfigurationsStatisticsOverridesToTerraform;
class DataAwsccDatabrewJobProfileConfigurationColumnStatisticsConfigurationsStatistics extends cdktf.ComplexComputedList {
    // included_statistics - computed: true, optional: false, required: false
    get includedStatistics() {
        return this.getListAttribute('included_statistics');
    }
    // overrides - computed: true, optional: false, required: false
    get overrides() {
        return this.interpolationForAttribute('overrides');
    }
}
exports.DataAwsccDatabrewJobProfileConfigurationColumnStatisticsConfigurationsStatistics = DataAwsccDatabrewJobProfileConfigurationColumnStatisticsConfigurationsStatistics;
function dataAwsccDatabrewJobProfileConfigurationColumnStatisticsConfigurationsStatisticsToTerraform(struct) {
    if (!cdktf.canInspect(struct)) {
        return struct;
    }
    return {
        included_statistics: cdktf.listMapper(cdktf.stringToTerraform)(struct.includedStatistics),
        overrides: cdktf.listMapper(dataAwsccDatabrewJobProfileConfigurationColumnStatisticsConfigurationsStatisticsOverridesToTerraform)(struct.overrides),
    };
}
exports.dataAwsccDatabrewJobProfileConfigurationColumnStatisticsConfigurationsStatisticsToTerraform = dataAwsccDatabrewJobProfileConfigurationColumnStatisticsConfigurationsStatisticsToTerraform;
class DataAwsccDatabrewJobProfileConfigurationColumnStatisticsConfigurations extends cdktf.ComplexComputedList {
    // selectors - computed: true, optional: false, required: false
    get selectors() {
        return this.interpolationForAttribute('selectors');
    }
    // statistics - computed: true, optional: false, required: false
    get statistics() {
        return this.interpolationForAttribute('statistics');
    }
}
exports.DataAwsccDatabrewJobProfileConfigurationColumnStatisticsConfigurations = DataAwsccDatabrewJobProfileConfigurationColumnStatisticsConfigurations;
function dataAwsccDatabrewJobProfileConfigurationColumnStatisticsConfigurationsToTerraform(struct) {
    if (!cdktf.canInspect(struct)) {
        return struct;
    }
    return {
        selectors: cdktf.listMapper(dataAwsccDatabrewJobProfileConfigurationColumnStatisticsConfigurationsSelectorsToTerraform)(struct.selectors),
        statistics: dataAwsccDatabrewJobProfileConfigurationColumnStatisticsConfigurationsStatisticsToTerraform(struct.statistics),
    };
}
exports.dataAwsccDatabrewJobProfileConfigurationColumnStatisticsConfigurationsToTerraform = dataAwsccDatabrewJobProfileConfigurationColumnStatisticsConfigurationsToTerraform;
class DataAwsccDatabrewJobProfileConfigurationDatasetStatisticsConfigurationOverrides extends cdktf.ComplexComputedList {
    // parameters - computed: true, optional: false, required: false
    get parameters() {
        return this.interpolationForAttribute('parameters');
    }
    // statistic - computed: true, optional: false, required: false
    get statistic() {
        return this.getStringAttribute('statistic');
    }
}
exports.DataAwsccDatabrewJobProfileConfigurationDatasetStatisticsConfigurationOverrides = DataAwsccDatabrewJobProfileConfigurationDatasetStatisticsConfigurationOverrides;
function dataAwsccDatabrewJobProfileConfigurationDatasetStatisticsConfigurationOverridesToTerraform(struct) {
    if (!cdktf.canInspect(struct)) {
        return struct;
    }
    return {
        parameters: cdktf.hashMapper(cdktf.stringToTerraform)(struct.parameters),
        statistic: cdktf.stringToTerraform(struct.statistic),
    };
}
exports.dataAwsccDatabrewJobProfileConfigurationDatasetStatisticsConfigurationOverridesToTerraform = dataAwsccDatabrewJobProfileConfigurationDatasetStatisticsConfigurationOverridesToTerraform;
class DataAwsccDatabrewJobProfileConfigurationDatasetStatisticsConfiguration extends cdktf.ComplexComputedList {
    // included_statistics - computed: true, optional: false, required: false
    get includedStatistics() {
        return this.getListAttribute('included_statistics');
    }
    // overrides - computed: true, optional: false, required: false
    get overrides() {
        return this.interpolationForAttribute('overrides');
    }
}
exports.DataAwsccDatabrewJobProfileConfigurationDatasetStatisticsConfiguration = DataAwsccDatabrewJobProfileConfigurationDatasetStatisticsConfiguration;
function dataAwsccDatabrewJobProfileConfigurationDatasetStatisticsConfigurationToTerraform(struct) {
    if (!cdktf.canInspect(struct)) {
        return struct;
    }
    return {
        included_statistics: cdktf.listMapper(cdktf.stringToTerraform)(struct.includedStatistics),
        overrides: cdktf.listMapper(dataAwsccDatabrewJobProfileConfigurationDatasetStatisticsConfigurationOverridesToTerraform)(struct.overrides),
    };
}
exports.dataAwsccDatabrewJobProfileConfigurationDatasetStatisticsConfigurationToTerraform = dataAwsccDatabrewJobProfileConfigurationDatasetStatisticsConfigurationToTerraform;
class DataAwsccDatabrewJobProfileConfigurationProfileColumns extends cdktf.ComplexComputedList {
    // name - computed: true, optional: false, required: false
    get name() {
        return this.getStringAttribute('name');
    }
    // regex - computed: true, optional: false, required: false
    get regex() {
        return this.getStringAttribute('regex');
    }
}
exports.DataAwsccDatabrewJobProfileConfigurationProfileColumns = DataAwsccDatabrewJobProfileConfigurationProfileColumns;
function dataAwsccDatabrewJobProfileConfigurationProfileColumnsToTerraform(struct) {
    if (!cdktf.canInspect(struct)) {
        return struct;
    }
    return {
        name: cdktf.stringToTerraform(struct.name),
        regex: cdktf.stringToTerraform(struct.regex),
    };
}
exports.dataAwsccDatabrewJobProfileConfigurationProfileColumnsToTerraform = dataAwsccDatabrewJobProfileConfigurationProfileColumnsToTerraform;
class DataAwsccDatabrewJobProfileConfiguration extends cdktf.ComplexComputedList {
    // column_statistics_configurations - computed: true, optional: false, required: false
    get columnStatisticsConfigurations() {
        return this.interpolationForAttribute('column_statistics_configurations');
    }
    // dataset_statistics_configuration - computed: true, optional: false, required: false
    get datasetStatisticsConfiguration() {
        return this.interpolationForAttribute('dataset_statistics_configuration');
    }
    // profile_columns - computed: true, optional: false, required: false
    get profileColumns() {
        return this.interpolationForAttribute('profile_columns');
    }
}
exports.DataAwsccDatabrewJobProfileConfiguration = DataAwsccDatabrewJobProfileConfiguration;
function dataAwsccDatabrewJobProfileConfigurationToTerraform(struct) {
    if (!cdktf.canInspect(struct)) {
        return struct;
    }
    return {
        column_statistics_configurations: cdktf.listMapper(dataAwsccDatabrewJobProfileConfigurationColumnStatisticsConfigurationsToTerraform)(struct.columnStatisticsConfigurations),
        dataset_statistics_configuration: dataAwsccDatabrewJobProfileConfigurationDatasetStatisticsConfigurationToTerraform(struct.datasetStatisticsConfiguration),
        profile_columns: cdktf.listMapper(dataAwsccDatabrewJobProfileConfigurationProfileColumnsToTerraform)(struct.profileColumns),
    };
}
exports.dataAwsccDatabrewJobProfileConfigurationToTerraform = dataAwsccDatabrewJobProfileConfigurationToTerraform;
class DataAwsccDatabrewJobRecipe extends cdktf.ComplexComputedList {
    // name - computed: true, optional: false, required: false
    get name() {
        return this.getStringAttribute('name');
    }
    // version - computed: true, optional: false, required: false
    get version() {
        return this.getStringAttribute('version');
    }
}
exports.DataAwsccDatabrewJobRecipe = DataAwsccDatabrewJobRecipe;
function dataAwsccDatabrewJobRecipeToTerraform(struct) {
    if (!cdktf.canInspect(struct)) {
        return struct;
    }
    return {
        name: cdktf.stringToTerraform(struct.name),
        version: cdktf.stringToTerraform(struct.version),
    };
}
exports.dataAwsccDatabrewJobRecipeToTerraform = dataAwsccDatabrewJobRecipeToTerraform;
class DataAwsccDatabrewJobTags extends cdktf.ComplexComputedList {
    // key - computed: true, optional: false, required: false
    get key() {
        return this.getStringAttribute('key');
    }
    // value - computed: true, optional: false, required: false
    get value() {
        return this.getStringAttribute('value');
    }
}
exports.DataAwsccDatabrewJobTags = DataAwsccDatabrewJobTags;
function dataAwsccDatabrewJobTagsToTerraform(struct) {
    if (!cdktf.canInspect(struct)) {
        return struct;
    }
    return {
        key: cdktf.stringToTerraform(struct.key),
        value: cdktf.stringToTerraform(struct.value),
    };
}
exports.dataAwsccDatabrewJobTagsToTerraform = dataAwsccDatabrewJobTagsToTerraform;
/**
* Represents a {@link https://www.terraform.io/docs/providers/awscc/d/databrew_job.html awscc_databrew_job}
*/
class DataAwsccDatabrewJob extends cdktf.TerraformDataSource {
    // ===========
    // INITIALIZER
    // ===========
    /**
    * Create a new {@link https://www.terraform.io/docs/providers/awscc/d/databrew_job.html awscc_databrew_job} Data Source
    *
    * @param scope The scope in which to define this construct
    * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
    * @param options DataAwsccDatabrewJobConfig
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
        this._id = config.id;
    }
    // ==========
    // ATTRIBUTES
    // ==========
    // data_catalog_outputs - computed: true, optional: false, required: false
    get dataCatalogOutputs() {
        return this.interpolationForAttribute('data_catalog_outputs');
    }
    // database_outputs - computed: true, optional: false, required: false
    get databaseOutputs() {
        return this.interpolationForAttribute('database_outputs');
    }
    // dataset_name - computed: true, optional: false, required: false
    get datasetName() {
        return this.getStringAttribute('dataset_name');
    }
    // encryption_key_arn - computed: true, optional: false, required: false
    get encryptionKeyArn() {
        return this.getStringAttribute('encryption_key_arn');
    }
    // encryption_mode - computed: true, optional: false, required: false
    get encryptionMode() {
        return this.getStringAttribute('encryption_mode');
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
    // job_sample - computed: true, optional: false, required: false
    get jobSample() {
        return this.interpolationForAttribute('job_sample');
    }
    // log_subscription - computed: true, optional: false, required: false
    get logSubscription() {
        return this.getStringAttribute('log_subscription');
    }
    // max_capacity - computed: true, optional: false, required: false
    get maxCapacity() {
        return this.getNumberAttribute('max_capacity');
    }
    // max_retries - computed: true, optional: false, required: false
    get maxRetries() {
        return this.getNumberAttribute('max_retries');
    }
    // name - computed: true, optional: false, required: false
    get name() {
        return this.getStringAttribute('name');
    }
    // output_location - computed: true, optional: false, required: false
    get outputLocation() {
        return this.interpolationForAttribute('output_location');
    }
    // outputs - computed: true, optional: false, required: false
    get outputs() {
        return this.interpolationForAttribute('outputs');
    }
    // profile_configuration - computed: true, optional: false, required: false
    get profileConfiguration() {
        return this.interpolationForAttribute('profile_configuration');
    }
    // project_name - computed: true, optional: false, required: false
    get projectName() {
        return this.getStringAttribute('project_name');
    }
    // recipe - computed: true, optional: false, required: false
    get recipe() {
        return this.interpolationForAttribute('recipe');
    }
    // role_arn - computed: true, optional: false, required: false
    get roleArn() {
        return this.getStringAttribute('role_arn');
    }
    // tags - computed: true, optional: false, required: false
    get tags() {
        return this.interpolationForAttribute('tags');
    }
    // timeout - computed: true, optional: false, required: false
    get timeout() {
        return this.getNumberAttribute('timeout');
    }
    // type - computed: true, optional: false, required: false
    get type() {
        return this.getStringAttribute('type');
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
exports.DataAwsccDatabrewJob = DataAwsccDatabrewJob;
// =================
// STATIC PROPERTIES
// =================
DataAwsccDatabrewJob.tfResourceType = "awscc_databrew_job";
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZGF0YS1hd3NjYy1kYXRhYnJldy1qb2IuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyJkYXRhLWF3c2NjLWRhdGFicmV3LWpvYi50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiO0FBQUEsb0VBQW9FO0FBQ3BFLDJDQUEyQzs7O0FBRzNDLCtCQUErQjtBQVkvQixNQUFhLGtFQUFtRSxTQUFRLEtBQUssQ0FBQyxtQkFBbUI7SUFFL0csNERBQTREO0lBQzVELElBQVcsTUFBTTtRQUNmLE9BQU8sSUFBSSxDQUFDLGtCQUFrQixDQUFDLFFBQVEsQ0FBQyxDQUFDO0lBQzNDLENBQUM7SUFFRCx5REFBeUQ7SUFDekQsSUFBVyxHQUFHO1FBQ1osT0FBTyxJQUFJLENBQUMsa0JBQWtCLENBQUMsS0FBSyxDQUFDLENBQUM7SUFDeEMsQ0FBQztDQUNGO0FBWEQsZ0pBV0M7QUFFRCxTQUFnQiw2RUFBNkUsQ0FBQyxNQUEyRTtJQUN2SyxJQUFJLENBQUMsS0FBSyxDQUFDLFVBQVUsQ0FBQyxNQUFNLENBQUMsRUFBRTtRQUFFLE9BQU8sTUFBTSxDQUFDO0tBQUU7SUFDakQsT0FBTztRQUNMLE1BQU0sRUFBRSxLQUFLLENBQUMsaUJBQWlCLENBQUMsTUFBTyxDQUFDLE1BQU0sQ0FBQztRQUMvQyxHQUFHLEVBQUUsS0FBSyxDQUFDLGlCQUFpQixDQUFDLE1BQU8sQ0FBQyxHQUFHLENBQUM7S0FDMUMsQ0FBQTtBQUNILENBQUM7QUFORCxzS0FNQztBQUVELE1BQWEscURBQXNELFNBQVEsS0FBSyxDQUFDLG1CQUFtQjtJQUVsRyxnRUFBZ0U7SUFDaEUsSUFBVyxTQUFTO1FBQ2xCLE9BQU8sSUFBSSxDQUFDLGtCQUFrQixDQUFDLFlBQVksQ0FBQyxDQUFDO0lBQy9DLENBQUM7SUFFRCxvRUFBb0U7SUFDcEUsSUFBVyxhQUFhO1FBQ3RCLE9BQU8sSUFBSSxDQUFDLHlCQUF5QixDQUFDLGdCQUFnQixDQUFRLENBQUM7SUFDakUsQ0FBQztDQUNGO0FBWEQsc0hBV0M7QUFFRCxT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QU8sSUFBSSxDQUFDLHlCQUF5QixDQUFDLE1BQU0sQ0FBUSxDQUFDO0lBQ3ZELENBQUM7SUFFRCw2REFBNkQ7SUFDN0QsSUFBVyxPQUFPO1FBQ2hCLE9BQU8sSUFBSSxDQUFDLGtCQUFrQixDQUFDLFNBQVMsQ0FBQyxDQUFDO0lBQzVDLENBQUM7SUFFRCwwREFBMEQ7SUFDMUQsSUFBVyxJQUFJO1FBQ2IsT0FBTyxJQUFJLENBQUMsa0JBQWtCLENBQUMsTUFBTSxDQUFDLENBQUM7SUFDekMsQ0FBQztJQUVELFlBQVk7SUFDWixZQUFZO0lBQ1osWUFBWTtJQUVGLG9CQUFvQjtRQUM1QixPQUFPO1lBQ0wsRUFBRSxFQUFFLEtBQUssQ0FBQyxpQkFBaUIsQ0FBQyxJQUFJLENBQUMsR0FBRyxDQUFDO1NBQ3RDLENBQUM7SUFDSixDQUFDOztBQXhKSCxvREF5SkM7QUF2SkMsb0JBQW9CO0FBQ3BCLG9CQUFvQjtBQUNwQixvQkFBb0I7QUFDRyxtQ0FBYyxHQUFXLG9CQUFvQixDQUFDIiwic291cmNlc0NvbnRlbnQiOlsiLy8gaHR0cHM6Ly93d3cudGVycmFmb3JtLmlvL2RvY3MvcHJvdmlkZXJzL2F3c2NjL2QvZGF0YWJyZXdfam9iLmh0bWxcbi8vIGdlbmVyYXRlZCBmcm9tIHRlcnJhZm9ybSByZXNvdXJjZSBzY2hlbWFcblxuaW1wb3J0IHsgQ29uc3RydWN0IH0gZnJvbSAnY29uc3RydWN0cyc7XG5pbXBvcnQgKiBhcyBjZGt0ZiBmcm9tICdjZGt0Zic7XG5cbi8vIENvbmZpZ3VyYXRpb25cblxuZXhwb3J0IGludGVyZmFjZSBEYXRhQXdzY2NEYXRhYnJld0pvYkNvbmZpZyBleHRlbmRzIGNka3RmLlRlcnJhZm9ybU1ldGFBcmd1bWVudHMge1xuICAvKipcbiAgKiBVbmlxdWVseSBpZGVudGlmaWVzIHRoZSByZXNvdXJjZS5cbiAgKiBcbiAgKiBEb2NzIGF0IFRlcnJhZm9ybSBSZWdpc3RyeToge0BsaW5rIGh0dHBzOi8vd3d3LnRlcnJhZm9ybS5pby9kb2NzL3Byb3ZpZGVycy9hd3NjYy9kL2RhdGFicmV3X2pvYi5odG1sI2lkIERhdGFBd3NjY0RhdGFicmV3Sm9iI2lkfVxuICAqL1xuICByZWFkb25seSBpZDogc3RyaW5nO1xufVxuZXhwb3J0IGNsYXNzIERhdGFBd3NjY0RhdGFicmV3Sm9iRGF0YUNhdGFsb2dPdXRwdXRzRGF0YWJhc2VPcHRpb25zVGVtcERpcmVjdG9yeSBleHRlbmRzIGNka3RmLkNvbXBsZXhDb21wdXRlZExpc3Qge1xuXG4gIC8vIGJ1Y2tldCAtIGNvbXB1dGVkOiB0cnVlLCBvcHRpb25hbDogZmFsc2UsIHJlcXVpcmVkOiBmYWxzZVxuICBwdWJsaWMgZ2V0IGJ1Y2tldCgpIHtcbiAgICByZXR1cm4gdGhpcy5nZXRTdHJpbmdBdHRyaWJ1dGUoJ2J1Y2tldCcpO1xuICB9XG5cbiAgLy8ga2V5IC0gY29tcHV0ZWQ6IHRydWUsIG9wdGlvbmFsOiBmYWxzZSwgcmVxdWlyZWQ6IGZhbHNlXG4gIHB1YmxpYyBnZXQga2V5KCkge1xuICAgIHJldHVybiB0aGlzLmdldFN0cmluZ0F0dHJpYnV0ZSgna2V5Jyk7XG4gIH1cbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGRhdGFBd3NjY0RhdGFicmV3Sm9iRGF0YUNhdGFsb2dPdXRwdXRzRGF0YWJhc2VPcHRpb25zVGVtcERpcmVjdG9yeVRvVGVycmFmb3JtKHN0cnVjdD86IERhdGFBd3NjY0RhdGFicmV3Sm9iRGF0YUNhdGFsb2dPdXRwdXRzRGF0YWJhc2VPcHRpb25zVGVtcERpcmVjdG9yeSk6IGFueSB7XG4gIGlmICghY2RrdGYuY2FuSW5zcGVjdChzdHJ1Y3QpKSB7IHJldHVybiBzdHJ1Y3Q7IH1cbiAgcmV0dXJuIHtcbiAgICBidWNrZXQ6IGNka3RmLnN0cmluZ1RvVGVycmFmb3JtKHN0cnVjdCEuYnVja2V0KSxcbiAgICBrZXk6IGNka3RmLnN0cmluZ1RvVGVycmFmb3JtKHN0cnVjdCEua2V5KSxcbiAgfVxufVxuXG5leHBvcnQgY2xhc3MgRGF0YUF3c2NjRGF0YWJyZXdKb2JEYXRhQ2F0YWxvZ091dHB1dHNEYXRhYmFzZU9wdGlvbnMgZXh0ZW5kcyBjZGt0Zi5Db21wbGV4Q29tcHV0ZWRMaXN0IHtcblxuICAvLyB0YWJsZV9uYW1lIC0gY29tcHV0ZWQ6IHRydWUsIG9wdGlvbmFsOiBmYWxzZSwgcmVxdWlyZWQ6IGZhbHNlXG4gIHB1YmxpYyBnZXQgdGFibGVOYW1lKCkge1xuICAgIHJldHVybiB0aGlzLmdldFN0cmluZ0F0dHJpYnV0ZSgndGFibGVfbmFtZScpO1xuICB9XG5cbiAgLy8gdGVtcF9kaXJlY3RvcnkgLSBjb21wdXRlZDogdHJ1ZSwgb3B0aW9uYWw6IGZhbHNlLCByZXF1aXJlZDogZmFsc2VcbiAgcHVibGljIGdldCB0ZW1wRGlyZWN0b3J5KCkge1xuICAgIHJldHVybiB0aGlzLmludGVycG9sYXRpb25Gb3JBdHRyaWJ1dGUoJ3RlbXBfZGlyZWN0b3J5JykgYXMgYW55O1xuICB9XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBkYXRhQXdzY2NEYXRhYnJld0pvYkRhdGFDYXRhbG9nT3V0cHV0c0RhdGFiYXNlT3B0aW9uc1RvVGVycmFmb3JtKHN0cnVjdD86IERhdGFBd3NjY0RhdGFicmV3Sm9iRGF0YUNhdGFsb2dPdXRwdXRzRGF0YWJhc2VPcHRpb25zKTogYW55IHtcbiAgaWYgKCFjZGt0Zi5jYW5JbnNwZWN0KHN0cnVjdCkpIHsgcmV0dXJuIHN0cnVjdDsgfVxuICByZXR1cm4ge1xuICAgIHRhYmxlX25hbWU6IGNka3RmLnN0cmluZ1RvVGVycmFmb3JtKHN0cnVjdCEudGFibGVOYW1lKSxcbiAgICB0ZW1wX2RpcmVjdG9yeTogZGF0YUF3c2NjRGF0YWJyZXdKb2JEYXRhQ2F0YWxvZ091dHB1dHNEYXRhYmFzZU9wdGlvbnNUZW1wRGlyZWN0b3J5VG9UZXJyYWZvcm0oc3RydWN0IS50ZW1wRGlyZWN0b3J5KSxcbiAgfVxufVxuXG5leHBvcnQgY2xhc3MgRGF0YUF3c2NjRGF0YWJyZXdKb2JEYXRhQ2F0YWxvZ091dHB1dHNTM09wdGlvbnNMb2NhdGlvbiBleHRlbmRzIGNka3RmLkNvbXBsZXhDb21wdXRlZExpc3Qge1xuXG4gIC8vIGJ1Y2tldCAtIGNvbXB1dGVkOiB0cnVlLCBvcHRpb25hbDogZmFsc2UsIHJlcXVpcmVkOiBmYWxzZVxuICBwdWJsaWMgZ2V0IGJ1Y2tldCgpIHtcbiAgICByZXR1cm4gdGhpcy5nZXRTdHJpbmdBdHRyaWJ1dGUoJ2J1Y2tldCcpO1xuICB9XG5cbiAgLy8ga2V5IC0gY29tcHV0ZWQ6IHRydWUsIG9wdGlvbmFsOiBmYWxzZSwgcmVxdWlyZWQ6IGZhbHNlXG4gIHB1YmxpYyBnZXQga2V5KCkge1xuICAgIHJldHVybiB0aGlzLmdldFN0cmluZ0F0dHJpYnV0ZSgna2V5Jyk7XG4gIH1cbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGRhdGFBd3NjY0RhdGFicmV3Sm9iRGF0YUNhdGFsb2dPdXRwdXRzUzNPcHRpb25zTG9jYXRpb25Ub1RlcnJhZm9ybShzdHJ1Y3Q/OiBEYXRhQXdzY2NEYXRhYnJld0pvYkRhdGFDYXRhbG9nT3V0cHV0c1MzT3B0aW9uc0xvY2F0aW9uKTogYW55IHtcbiAgaWYgKCFjZGt0Zi5jYW5JbnNwZWN0KHN0cnVjdCkpIHsgcmV0dXJuIHN0cnVjdDsgfVxuICByZXR1cm4ge1xuICAgIGJ1Y2tldDogY2RrdGYuc3RyaW5nVG9UZXJyYWZvcm0oc3RydWN0IS5idWNrZXQpLFxuICAgIGtleTogY2RrdGYuc3RyaW5nVG9UZXJyYWZvcm0oc3RydWN0IS5rZXkpLFxuICB9XG59XG5cbmV4cG9ydCBjbGFzcyBEYXRhQXdzY2NEYXRhYnJld0pvYkRhdGFDYXRhbG9nT3V0cHV0c1MzT3B0aW9ucyBleHRlbmRzIGNka3RmLkNvbXBsZXhDb21wdXRlZExpc3Qge1xuXG4gIC8vIGxvY2F0aW9uIC0gY29tcHV0ZWQ6IHRydWUsIG9wdGlvbmFsOiBmYWxzZSwgcmVxdWlyZWQ6IGZhbHNlXG4gIHB1YmxpYyBnZXQgbG9jYXRpb24oKSB7XG4gICAgcmV0dXJuIHRoaXMuaW50ZXJwb2xhdGlvbkZvckF0dHJpYnV0ZSgnbG9jYXRpb24nKSBhcyBhbnk7XG4gIH1cbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGRhdGFBd3NjY0RhdGFicmV3Sm9iRGF0YUNhdGFsb2dPdXRwdXRzUzNPcHRpb25zVG9UZXJyYWZvcm0oc3RydWN0PzogRGF0YUF3c2NjRGF0YWJyZXdKb2JEYXRhQ2F0YWxvZ091dHB1dHNTM09wdGlvbnMpOiBhbnkge1xuICBpZiAoIWNka3RmLmNhbkluc3BlY3Qoc3RydWN0KSkgeyByZXR1cm4gc3RydWN0OyB9XG4gIHJldHVybiB7XG4gICAgbG9jYXRpb246IGRhdGFBd3NjY0RhdGFicmV3Sm9iRGF0YUNhdGFsb2dPdXRwdXRzUzNPcHRpb25zTG9jYXRpb25Ub1RlcnJhZm9ybShzdHJ1Y3QhLmxvY2F0aW9uKSxcbiAgfVxufVxuXG5leHBvcnQgY2xhc3MgRGF0YUF3c2NjRGF0YWJyZXdKb2JEYXRhQ2F0YWxvZ091dHB1dHMgZXh0ZW5kcyBjZGt0Zi5Db21wbGV4Q29tcHV0ZWRMaXN0IHtcblxuICAvLyBjYXRhbG9nX2lkIC0gY29tcHV0ZWQ6IHRydWUsIG9wdGlvbmFsOiBmYWxzZSwgcmVxdWlyZWQ6IGZhbHNlXG4gIHB1YmxpYyBnZXQgY2F0YWxvZ0lkKCkge1xuICAgIHJldHVybiB0aGlzLmdldFN0cmluZ0F0dHJpYnV0ZSgnY2F0YWxvZ19pZCcpO1xuICB9XG5cbiAgLy8gZGF0YWJhc2VfbmFtZSAtIGNvbXB1dGVkOiB0cnVlLCBvcHRpb25hbDogZmFsc2UsIHJlcXVpcmVkOiBmYWxzZVxuICBwdWJsaWMgZ2V0IGRhdGFiYXNlTmFtZSgpIHtcbiAgICByZXR1cm4gdGhpcy5nZXRTdHJpbmdBdHRyaWJ1dGUoJ2RhdGFiYXNlX25hbWUnKTtcbiAgfVxuXG4gIC8vIGRhdGFiYXNlX29wdGlvbnMgLSBjb21wdXRlZDogdHJ1ZSwgb3B0aW9uYWw6IGZhbHNlLCByZXF1aXJlZDogZmFsc2VcbiAgcHVibGljIGdldCBkYXRhYmFzZU9wdGlvbnMoKSB7XG4gICAgcmV0dXJuIHRoaXMuaW50ZXJwb2xhdGlvbkZvckF0dHJpYnV0ZSgnZGF0YWJhc2Vfb3B0aW9ucycpIGFzIGFueTtcbiAgfVxuXG4gIC8vIG92ZXJ3cml0ZSAtIGNvbXB1dGVkOiB0cnVlLCBvcHRpb25hbDogZmFsc2UsIHJlcXVpcmVkOiBmYWxzZVxuICBwdWJsaWMgZ2V0IG92ZXJ3cml0ZSgpIHtcbiAgICByZXR1cm4gdGhpcy5nZXRCb29sZWFuQXR0cmlidXRlKCdvdmVyd3JpdGUnKTtcbiAgfVxuXG4gIC8vIHMzX29wdGlvbnMgLSBjb21wdXRlZDogdHJ1ZSwgb3B0aW9uYWw6IGZhbHNlLCByZXF1aXJlZDogZmFsc2VcbiAgcHVibGljIGdldCBzM09wdGlvbnMoKSB7XG4gICAgcmV0dXJuIHRoaXMuaW50ZXJwb2xhdGlvbkZvckF0dHJpYnV0ZSgnczNfb3B0aW9ucycpIGFzIGFueTtcbiAgfVxuXG4gIC8vIHRhYmxlX25hbWUgLSBjb21wdXRlZDogdHJ1ZSwgb3B0aW9uYWw6IGZhbHNlLCByZXF1aXJlZDogZmFsc2VcbiAgcHVibGljIGdldCB0YWJsZU5hbWUoKSB7XG4gICAgcmV0dXJuIHRoaXMuZ2V0U3RyaW5nQXR0cmlidXRlKCd0YWJsZV9uYW1lJyk7XG4gIH1cbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGRhdGFBd3NjY0RhdGFicmV3Sm9iRGF0YUNhdGFsb2dPdXRwdXRzVG9UZXJyYWZvcm0oc3RydWN0PzogRGF0YUF3c2NjRGF0YWJyZXdKb2JEYXRhQ2F0YWxvZ091dHB1dHMpOiBhbnkge1xuICBpZiAoIWNka3RmLmNhbkluc3BlY3Qoc3RydWN0KSkgeyByZXR1cm4gc3RydWN0OyB9XG4gIHJldHVybiB7XG4gICAgY2F0YWxvZ19pZDogY2RrdGYuc3RyaW5nVG9UZXJyYWZvcm0oc3RydWN0IS5jYXRhbG9nSWQpLFxuICAgIGRhdGFiYXNlX25hbWU6IGNka3RmLnN0cmluZ1RvVGVycmFmb3JtKHN0cnVjdCEuZGF0YWJhc2VOYW1lKSxcbiAgICBkYXRhYmFzZV9vcHRpb25zOiBkYXRhQXdzY2NEYXRhYnJld0pvYkRhdGFDYXRhbG9nT3V0cHV0c0RhdGFiYXNlT3B0aW9uc1RvVGVycmFmb3JtKHN0cnVjdCEuZGF0YWJhc2VPcHRpb25zKSxcbiAgICBvdmVyd3JpdGU6IGNka3RmLmJvb2xlYW5Ub1RlcnJhZm9ybShzdHJ1Y3QhLm92ZXJ3cml0ZSksXG4gICAgczNfb3B0aW9uczogZGF0YUF3c2NjRGF0YWJyZXdKb2JEYXRhQ2F0YWxvZ091dHB1dHNTM09wdGlvbnNUb1RlcnJhZm9ybShzdHJ1Y3QhLnMzT3B0aW9ucyksXG4gICAgdGFibGVfbmFtZTogY2RrdGYuc3RyaW5nVG9UZXJyYWZvcm0oc3RydWN0IS50YWJsZU5hbWUpLFxuICB9XG59XG5cbmV4cG9ydCBjbGFzcyBEYXRhQXdzY2NEYXRhYnJld0pvYkRhdGFiYXNlT3V0cHV0c0RhdGFiYXNlT3B0aW9uc1RlbXBEaXJlY3RvcnkgZXh0ZW5kcyBjZGt0Zi5Db21wbGV4Q29tcHV0ZWRMaXN0IHtcblxuICAvLyBidWNrZXQgLSBjb21wdXRlZDogdHJ1ZSwgb3B0aW9uYWw6IGZhbHNlLCByZXF1aXJlZDogZmFsc2VcbiAgcHVibGljIGdldCBidWNrZXQoKSB7XG4gICAgcmV0dXJuIHRoaXMuZ2V0U3RyaW5nQXR0cmlidXRlKCdidWNrZXQnKTtcbiAgfVxuXG4gIC8vIGtleSAtIGNvbXB1dGVkOiB0cnVlLCBvcHRpb25hbDogZmFsc2UsIHJlcXVpcmVkOiBmYWxzZVxuICBwdWJsaWMgZ2V0IGtleSgpIHtcbiAgICByZXR1cm4gdGhpcy5nZXRTdHJpbmdBdHRyaWJ1dGUoJ2tleScpO1xuICB9XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBkYXRhQXdzY2NEYXRhYnJld0pvYkRhdGFiYXNlT3V0cHV0c0RhdGFiYXNlT3B0aW9uc1RlbXBEaXJlY3RvcnlUb1RlcnJhZm9ybShzdHJ1Y3Q/OiBEYXRhQXdzY2NEYXRhYnJld0pvYkRhdGFiYXNlT3V0cHV0c0RhdGFiYXNlT3B0aW9uc1RlbXBEaXJlY3RvcnkpOiBhbnkge1xuICBpZiAoIWNka3RmLmNhbkluc3BlY3Qoc3RydWN0KSkgeyByZXR1cm4gc3RydWN0OyB9XG4gIHJldHVybiB7XG4gICAgYnVja2V0OiBjZGt0Zi5zdHJpbmdUb1RlcnJhZm9ybShzdHJ1Y3QhLmJ1Y2tldCksXG4gICAga2V5OiBjZGt0Zi5zdHJpbmdUb1RlcnJhZm9ybShzdHJ1Y3QhLmtleSksXG4gIH1cbn1cblxuZXhwb3J0IGNsYXNzIERhdGFBd3NjY0RhdGFicmV3Sm9iRGF0YWJhc2VPdXRwdXRzRGF0YWJhc2VPcHRpb25zIGV4dGVuZHMgY2RrdGYuQ29tcGxleENvbXB1dGVkTGlzdCB7XG5cbiAgLy8gdGFibGVfbmFtZSAtIGNvbXB1dGVkOiB0cnVlLCBvcHRpb25hbDogZmFsc2UsIHJlcXVpcmVkOiBmYWxzZVxuICBwdWJsaWMgZ2V0IHRhYmxlTmFtZSgpIHtcbiAgICByZXR1cm4gdGhpcy5nZXRTdHJpbmdBdHRyaWJ1dGUoJ3RhYmxlX25hbWUnKTtcbiAgfVxuXG4gIC8vIHRlbXBfZGlyZWN0b3J5IC0gY29tcHV0ZWQ6IHRydWUsIG9wdGlvbmFsOiBmYWxzZSwgcmVxdWlyZWQ6IGZhbHNlXG4gIHB1YmxpYyBnZXQgdGVtcERpcmVjdG9yeSgpIHtcbiAgICByZXR1cm4gdGhpcy5pbnRlcnBvbGF0aW9uRm9yQXR0cmlidXRlKCd0ZW1wX2RpcmVjdG9yeScpIGFzIGFueTtcbiAgfVxufVxuXG5leHBvcnQgZnVuY3Rpb24gZGF0YUF3c2NjRGF0YWJyZXdKb2JEYXRhYmFzZU91dHB1dHNEYXRhYmFzZU9wdGlvbnNUb1RlcnJhZm9ybShzdHJ1Y3Q/OiBEYXRhQXdzY2NEYXRhYnJld0pvYkRhdGFiYXNlT3V0cHV0c0RhdGFiYXNlT3B0aW9ucyk6IGFueSB7XG4gIGlmICghY2RrdGYuY2FuSW5zcGVjdChzdHJ1Y3QpKSB7IHJldHVybiBzdHJ1Y3Q7IH1cbiAgcmV0dXJuIHtcbiAgICB0YWJsZV9uYW1lOiBjZGt0Zi5zdHJpbmdUb1RlcnJhZm9ybShzdHJ1Y3QhLnRhYmxlTmFtZSksXG4gICAgdGVtcF9kaXJlY3Rvcnk6IGRhdGFBd3NjY0RhdGFicmV3Sm9iRGF0YWJhc2VPdXRwdXRzRGF0YWJhc2VPcHRpb25zVGVtcERpcmVjdG9yeVRvVGVycmFmb3JtKHN0cnVjdCEudGVtcERpcmVjdG9yeSksXG4gIH1cbn1cblxuZXhwb3J0IGNsYXNzIERhdGFBd3NjY0RhdGFicmV3Sm9iRGF0YWJhc2VPdXRwdXRzIGV4dGVuZHMgY2RrdGYuQ29tcGxleENvbXB1dGVkTGlzdCB7XG5cbiAgLy8gZGF0YWJhc2Vfb3B0aW9ucyAtIGNvbXB1dGVkOiB0cnVlLCBvcHRpb25hbDogZmFsc2UsIHJlcXVpcmVkOiBmYWxzZVxuICBwdWJsaWMgZ2V0IGRhdGFiYXNlT3B0aW9ucygpIHtcbiAgICByZXR1cm4gdGhpcy5pbnRlcnBvbGF0aW9uRm9yQXR0cmlidXRlKCdkYXRhYmFzZV9vcHRpb25zJykgYXMgYW55O1xuICB9XG5cbiAgLy8gZGF0YWJhc2Vfb3V0cHV0X21vZGUgLSBjb21wdXRlZDogdHJ1ZSwgb3B0aW9uYWw6IGZhbHNlLCByZXF1aXJlZDogZmFsc2VcbiAgcHVibGljIGdldCBkYXRhYmFzZU91dHB1dE1vZGUoKSB7XG4gICAgcmV0dXJuIHRoaXMuZ2V0U3RyaW5nQXR0cmlidXRlKCdkYXRhYmFzZV9vdXRwdXRfbW9kZScpO1xuICB9XG5cbiAgLy8gZ2x1ZV9jb25uZWN0aW9uX25hbWUgLSBjb21wdXRlZDogdHJ1ZSwgb3B0aW9uYWw6IGZhbHNlLCByZXF1aXJlZDogZmFsc2VcbiAgcHVibGljIGdldCBnbHVlQ29ubmVjdGlvbk5hbWUoKSB7XG4gICAgcmV0dXJuIHRoaXMuZ2V0U3RyaW5nQXR0cmlidXRlKCdnbHVlX2Nvbm5lY3Rpb25fbmFtZScpO1xuICB9XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBkYXRhQXdzY2NEYXRhYnJld0pvYkRhdGFiYXNlT3V0cHV0c1RvVGVycmFmb3JtKHN0cnVjdD86IERhdGFBd3NjY0RhdGFicmV3Sm9iRGF0YWJhc2VPdXRwdXRzKTogYW55IHtcbiAgaWYgKCFjZGt0Zi5jYW5JbnNwZWN0KHN0cnVjdCkpIHsgcmV0dXJuIHN0cnVjdDsgfVxuICByZXR1cm4ge1xuICAgIGRhdGFiYXNlX29wdGlvbnM6IGRhdGFBd3NjY0RhdGFicmV3Sm9iRGF0YWJhc2VPdXRwdXRzRGF0YWJhc2VPcHRpb25zVG9UZXJyYWZvcm0oc3RydWN0IS5kYXRhYmFzZU9wdGlvbnMpLFxuICAgIGRhdGFiYXNlX291dHB1dF9tb2RlOiBjZGt0Zi5zdHJpbmdUb1RlcnJhZm9ybShzdHJ1Y3QhLmRhdGFiYXNlT3V0cHV0TW9kZSksXG4gICAgZ2x1ZV9jb25uZWN0aW9uX25hbWU6IGNka3RmLnN0cmluZ1RvVGVycmFmb3JtKHN0cnVjdCEuZ2x1ZUNvbm5lY3Rpb25OYW1lKSxcbiAgfVxufVxuXG5leHBvcnQgY2xhc3MgRGF0YUF3c2NjRGF0YWJyZXdKb2JKb2JTYW1wbGUgZXh0ZW5kcyBjZGt0Zi5Db21wbGV4Q29tcHV0ZWRMaXN0IHtcblxuICAvLyBtb2RlIC0gY29tcHV0ZWQ6IHRydWUsIG9wdGlvbmFsOiBmYWxzZSwgcmVxdWlyZWQ6IGZhbHNlXG4gIHB1YmxpYyBnZXQgbW9kZSgpIHtcbiAgICByZXR1cm4gdGhpcy5nZXRTdHJpbmdBdHRyaWJ1dGUoJ21vZGUnKTtcbiAgfVxuXG4gIC8vIHNpemUgLSBjb21wdXRlZDogdHJ1ZSwgb3B0aW9uYWw6IGZhbHNlLCByZXF1aXJlZDogZmFsc2VcbiAgcHVibGljIGdldCBzaXplKCkge1xuICAgIHJldHVybiB0aGlzLmdldE51bWJlckF0dHJpYnV0ZSgnc2l6ZScpO1xuICB9XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBkYXRhQXdzY2NEYXRhYnJld0pvYkpvYlNhbXBsZVRvVGVycmFmb3JtKHN0cnVjdD86IERhdGFBd3NjY0RhdGFicmV3Sm9iSm9iU2FtcGxlKTogYW55IHtcbiAgaWYgKCFjZGt0Zi5jYW5JbnNwZWN0KHN0cnVjdCkpIHsgcmV0dXJuIHN0cnVjdDsgfVxuICByZXR1cm4ge1xuICAgIG1vZGU6IGNka3RmLnN0cmluZ1RvVGVycmFmb3JtKHN0cnVjdCEubW9kZSksXG4gICAgc2l6ZTogY2RrdGYubnVtYmVyVG9UZXJyYWZvcm0oc3RydWN0IS5zaXplKSxcbiAgfVxufVxuXG5leHBvcnQgY2xhc3MgRGF0YUF3c2NjRGF0YWJyZXdKb2JPdXRwdXRMb2NhdGlvbiBleHRlbmRzIGNka3RmLkNvbXBsZXhDb21wdXRlZExpc3Qge1xuXG4gIC8vIGJ1Y2tldCAtIGNvbXB1dGVkOiB0cnVlLCBvcHRpb25hbDogZmFsc2UsIHJlcXVpcmVkOiBmYWxzZVxuICBwdWJsaWMgZ2V0IGJ1Y2tldCgpIHtcbiAgICByZXR1cm4gdGhpcy5nZXRTdHJpbmdBdHRyaWJ1dGUoJ2J1Y2tldCcpO1xuICB9XG5cbiAgLy8ga2V5IC0gY29tcHV0ZWQ6IHRydWUsIG9wdGlvbmFsOiBmYWxzZSwgcmVxdWlyZWQ6IGZhbHNlXG4gIHB1YmxpYyBnZXQga2V5KCkge1xuICAgIHJldHVybiB0aGlzLmdldFN0cmluZ0F0dHJpYnV0ZSgna2V5Jyk7XG4gIH1cbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGRhdGFBd3NjY0RhdGFicmV3Sm9iT3V0cHV0TG9jYXRpb25Ub1RlcnJhZm9ybShzdHJ1Y3Q/OiBEYXRhQXdzY2NEYXRhYnJld0pvYk91dHB1dExvY2F0aW9uKTogYW55IHtcbiAgaWYgKCFjZGt0Zi5jYW5JbnNwZWN0KHN0cnVjdCkpIHsgcmV0dXJuIHN0cnVjdDsgfVxuICByZXR1cm4ge1xuICAgIGJ1Y2tldDogY2RrdGYuc3RyaW5nVG9UZXJyYWZvcm0oc3RydWN0IS5idWNrZXQpLFxuICAgIGtleTogY2RrdGYuc3RyaW5nVG9UZXJyYWZvcm0oc3RydWN0IS5rZXkpLFxuICB9XG59XG5cbmV4cG9ydCBjbGFzcyBEYXRhQXdzY2NEYXRhYnJld0pvYk91dHB1dHNGb3JtYXRPcHRpb25zQ3N2IGV4dGVuZHMgY2RrdGYuQ29tcGxleENvbXB1dGVkTGlzdCB7XG5cbiAgLy8gZGVsaW1pdGVyIC0gY29tcHV0ZWQ6IHRydWUsIG9wdGlvbmFsOiBmYWxzZSwgcmVxdWlyZWQ6IGZhbHNlXG4gIHB1YmxpYyBnZXQgZGVsaW1pdGVyKCkge1xuICAgIHJldHVybiB0aGlzLmdldFN0cmluZ0F0dHJpYnV0ZSgnZGVsaW1pdGVyJyk7XG4gIH1cbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGRhdGFBd3NjY0RhdGFicmV3Sm9iT3V0cHV0c0Zvcm1hdE9wdGlvbnNDc3ZUb1RlcnJhZm9ybShzdHJ1Y3Q/OiBEYXRhQXdzY2NEYXRhYnJld0pvYk91dHB1dHNGb3JtYXRPcHRpb25zQ3N2KTogYW55IHtcbiAgaWYgKCFjZGt0Zi5jYW5JbnNwZWN0KHN0cnVjdCkpIHsgcmV0dXJuIHN0cnVjdDsgfVxuICByZXR1cm4ge1xuICAgIGRlbGltaXRlcjogY2RrdGYuc3RyaW5nVG9UZXJyYWZvcm0oc3RydWN0IS5kZWxpbWl0ZXIpLFxuICB9XG59XG5cbmV4cG9ydCBjbGFzcyBEYXRhQXdzY2NEYXRhYnJld0pvYk91dHB1dHNGb3JtYXRPcHRpb25zIGV4dGVuZHMgY2RrdGYuQ29tcGxleENvbXB1dGVkTGlzdCB7XG5cbiAgLy8gY3N2IC0gY29tcHV0ZWQ6IHRydWUsIG9wdGlvbmFsOiBmYWxzZSwgcmVxdWlyZWQ6IGZhbHNlXG4gIHB1YmxpYyBnZXQgY3N2KCkge1xuICAgIHJldHVybiB0aGlzLmludGVycG9sYXRpb25Gb3JBdHRyaWJ1dGUoJ2NzdicpIGFzIGFueTtcbiAgfVxufVxuXG5leHBvcnQgZnVuY3Rpb24gZGF0YUF3c2NjRGF0YWJyZXdKb2JPdXRwdXRzRm9ybWF0T3B0aW9uc1RvVGVycmFmb3JtKHN0cnVjdD86IERhdGFBd3NjY0RhdGFicmV3Sm9iT3V0cHV0c0Zvcm1hdE9wdGlvbnMpOiBhbnkge1xuICBpZiAoIWNka3RmLmNhbkluc3BlY3Qoc3RydWN0KSkgeyByZXR1cm4gc3RydWN0OyB9XG4gIHJldHVybiB7XG4gICAgY3N2OiBkYXRhQXdzY2NEYXRhYnJld0pvYk91dHB1dHNGb3JtYXRPcHRpb25zQ3N2VG9UZXJyYWZvcm0oc3RydWN0IS5jc3YpLFxuICB9XG59XG5cbmV4cG9ydCBjbGFzcyBEYXRhQXdzY2NEYXRhYnJld0pvYk91dHB1dHNMb2NhdGlvbiBleHRlbmRzIGNka3RmLkNvbXBsZXhDb21wdXRlZExpc3Qge1xuXG4gIC8vIGJ1Y2tldCAtIGNvbXB1dGVkOiB0cnVlLCBvcHRpb25hbDogZmFsc2UsIHJlcXVpcmVkOiBmYWxzZVxuICBwdWJsaWMgZ2V0IGJ1Y2tldCgpIHtcbiAgICByZXR1cm4gdGhpcy5nZXRTdHJpbmdBdHRyaWJ1dGUoJ2J1Y2tldCcpO1xuICB9XG5cbiAgLy8ga2V5IC0gY29tcHV0ZWQ6IHRydWUsIG9wdGlvbmFsOiBmYWxzZSwgcmVxdWlyZWQ6IGZhbHNlXG4gIHB1YmxpYyBnZXQga2V5KCkge1xuICAgIHJldHVybiB0aGlzLmdldFN0cmluZ0F0dHJpYnV0ZSgna2V5Jyk7XG4gIH1cbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGRhdGFBd3NjY0RhdGFicmV3Sm9iT3V0cHV0c0xvY2F0aW9uVG9UZXJyYWZvcm0oc3RydWN0PzogRGF0YUF3c2NjRGF0YWJyZXdKb2JPdXRwdXRzTG9jYXRpb24pOiBhbnkge1xuICBpZiAoIWNka3RmLmNhbkluc3BlY3Qoc3RydWN0KSkgeyByZXR1cm4gc3RydWN0OyB9XG4gIHJldHVybiB7XG4gICAgYnVja2V0OiBjZGt0Zi5zdHJpbmdUb1RlcnJhZm9ybShzdHJ1Y3QhLmJ1Y2tldCksXG4gICAga2V5OiBjZGt0Zi5zdHJpbmdUb1RlcnJhZm9ybShzdHJ1Y3QhLmtleSksXG4gIH1cbn1cblxuZXhwb3J0IGNsYXNzIERhdGFBd3NjY0RhdGFicmV3Sm9iT3V0cHV0cyBleHRlbmRzIGNka3RmLkNvbXBsZXhDb21wdXRlZExpc3Qge1xuXG4gIC8vIGNvbXByZXNzaW9uX2Zvcm1hdCAtIGNvbXB1dGVkOiB0cnVlLCBvcHRpb25hbDogZmFsc2UsIHJlcXVpcmVkOiBmYWxzZVxuICBwdWJsaWMgZ2V0IGNvbXByZXNzaW9uRm9ybWF0KCkge1xuICAgIHJldHVybiB0aGlzLmdldFN0cmluZ0F0dHJpYnV0ZSgnY29tcHJlc3Npb25fZm9ybWF0Jyk7XG4gIH1cblxuICAvLyBmb3JtYXQgLSBjb21wdXRlZDogdHJ1ZSwgb3B0aW9uYWw6IGZhbHNlLCByZXF1aXJlZDogZmFsc2VcbiAgcHVibGljIGdldCBmb3JtYXQoKSB7XG4gICAgcmV0dXJuIHRoaXMuZ2V0U3RyaW5nQXR0cmlidXRlKCdmb3JtYXQnKTtcbiAgfVxuXG4gIC8vIGZvcm1hdF9vcHRpb25zIC0gY29tcHV0ZWQ6IHRydWUsIG9wdGlvbmFsOiBmYWxzZSwgcmVxdWlyZWQ6IGZhbHNlXG4gIHB1YmxpYyBnZXQgZm9ybWF0T3B0aW9ucygpIHtcbiAgICByZXR1cm4gdGhpcy5pbnRlcnBvbGF0aW9uRm9yQXR0cmlidXRlKCdmb3JtYXRfb3B0aW9ucycpIGFzIGFueTtcbiAgfVxuXG4gIC8vIGxvY2F0aW9uIC0gY29tcHV0ZWQ6IHRydWUsIG9wdGlvbmFsOiBmYWxzZSwgcmVxdWlyZWQ6IGZhbHNlXG4gIHB1YmxpYyBnZXQgbG9jYXRpb24oKSB7XG4gICAgcmV0dXJuIHRoaXMuaW50ZXJwb2xhdGlvbkZvckF0dHJpYnV0ZSgnbG9jYXRpb24nKSBhcyBhbnk7XG4gIH1cblxuICAvLyBvdmVyd3JpdGUgLSBjb21wdXRlZDogdHJ1ZSwgb3B0aW9uYWw6IGZhbHNlLCByZXF1aXJlZDogZmFsc2VcbiAgcHVibGljIGdldCBvdmVyd3JpdGUoKSB7XG4gICAgcmV0dXJuIHRoaXMuZ2V0Qm9vbGVhbkF0dHJpYnV0ZSgnb3ZlcndyaXRlJyk7XG4gIH1cblxuICAvLyBwYXJ0aXRpb25fY29sdW1ucyAtIGNvbXB1dGVkOiB0cnVlLCBvcHRpb25hbDogZmFsc2UsIHJlcXVpcmVkOiBmYWxzZVxuICBwdWJsaWMgZ2V0IHBhcnRpdGlvbkNvbHVtbnMoKSB7XG4gICAgcmV0dXJuIHRoaXMuZ2V0TGlzdEF0dHJpYnV0ZSgncGFydGl0aW9uX2NvbHVtbnMnKTtcbiAgfVxufVxuXG5leHBvcnQgZnVuY3Rpb24gZGF0YUF3c2NjRGF0YWJyZXdKb2JPdXRwdXRzVG9UZXJyYWZvcm0oc3RydWN0PzogRGF0YUF3c2NjRGF0YWJyZXdKb2JPdXRwdXRzKTogYW55IHtcbiAgaWYgKCFjZGt0Zi5jYW5JbnNwZWN0KHN0cnVjdCkpIHsgcmV0dXJuIHN0cnVjdDsgfVxuICByZXR1cm4ge1xuICAgIGNvbXByZXNzaW9uX2Zvcm1hdDogY2RrdGYuc3RyaW5nVG9UZXJyYWZvcm0oc3RydWN0IS5jb21wcmVzc2lvbkZvcm1hdCksXG4gICAgZm9ybWF0OiBjZGt0Zi5zdHJpbmdUb1RlcnJhZm9ybShzdHJ1Y3QhLmZvcm1hdCksXG4gICAgZm9ybWF0X29wdGlvbnM6IGRhdGFBd3NjY0RhdGFicmV3Sm9iT3V0cHV0c0Zvcm1hdE9wdGlvbnNUb1RlcnJhZm9ybShzdHJ1Y3QhLmZvcm1hdE9wdGlvbnMpLFxuICAgIGxvY2F0aW9uOiBkYXRhQXdzY2NEYXRhYnJld0pvYk91dHB1dHNMb2NhdGlvblRvVGVycmFmb3JtKHN0cnVjdCEubG9jYXRpb24pLFxuICAgIG92ZXJ3cml0ZTogY2RrdGYuYm9vbGVhblRvVGVycmFmb3JtKHN0cnVjdCEub3ZlcndyaXRlKSxcbiAgICBwYXJ0aXRpb25fY29sdW1uczogY2RrdGYubGlzdE1hcHBlcihjZGt0Zi5zdHJpbmdUb1RlcnJhZm9ybSkoc3RydWN0IS5wYXJ0aXRpb25Db2x1bW5zKSxcbiAgfVxufVxuXG5leHBvcnQgY2xhc3MgRGF0YUF3c2NjRGF0YWJyZXdKb2JQcm9maWxlQ29uZmlndXJhdGlvbkNvbHVtblN0YXRpc3RpY3NDb25maWd1cmF0aW9uc1NlbGVjdG9ycyBleHRlbmRzIGNka3RmLkNvbXBsZXhDb21wdXRlZExpc3Qge1xuXG4gIC8vIG5hbWUgLSBjb21wdXRlZDogdHJ1ZSwgb3B0aW9uYWw6IGZhbHNlLCByZXF1aXJlZDogZmFsc2VcbiAgcHVibGljIGdldCBuYW1lKCkge1xuICAgIHJldHVybiB0aGlzLmdldFN0cmluZ0F0dHJpYnV0ZSgnbmFtZScpO1xuICB9XG5cbiAgLy8gcmVnZXggLSBjb21wdXRlZDogdHJ1ZSwgb3B0aW9uYWw6IGZhbHNlLCByZXF1aXJlZDogZmFsc2VcbiAgcHVibGljIGdldCByZWdleCgpIHtcbiAgICByZXR1cm4gdGhpcy5nZXRTdHJpbmdBdHRyaWJ1dGUoJ3JlZ2V4Jyk7XG4gIH1cbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGRhdGFBd3NjY0RhdGFicmV3Sm9iUHJvZmlsZUNvbmZpZ3VyYXRpb25Db2x1bW5TdGF0aXN0aWNzQ29uZmlndXJhdGlvbnNTZWxlY3RvcnNUb1RlcnJhZm9ybShzdHJ1Y3Q/OiBEYXRhQXdzY2NEYXRhYnJld0pvYlByb2ZpbGVDb25maWd1cmF0aW9uQ29sdW1uU3RhdGlzdGljc0NvbmZpZ3VyYXRpb25zU2VsZWN0b3JzKTogYW55IHtcbiAgaWYgKCFjZGt0Zi5jYW5JbnNwZWN0KHN0cnVjdCkpIHsgcmV0dXJuIHN0cnVjdDsgfVxuICByZXR1cm4ge1xuICAgIG5hbWU6IGNka3RmLnN0cmluZ1RvVGVycmFmb3JtKHN0cnVjdCEubmFtZSksXG4gICAgcmVnZXg6IGNka3RmLnN0cmluZ1RvVGVycmFmb3JtKHN0cnVjdCEucmVnZXgpLFxuICB9XG59XG5cbmV4cG9ydCBjbGFzcyBEYXRhQXdzY2NEYXRhYnJld0pvYlByb2ZpbGVDb25maWd1cmF0aW9uQ29sdW1uU3RhdGlzdGljc0NvbmZpZ3VyYXRpb25zU3RhdGlzdGljc092ZXJyaWRlcyBleHRlbmRzIGNka3RmLkNvbXBsZXhDb21wdXRlZExpc3Qge1xuXG4gIC8vIHBhcmFtZXRlcnMgLSBjb21wdXRlZDogdHJ1ZSwgb3B0aW9uYWw6IGZhbHNlLCByZXF1aXJlZDogZmFsc2VcbiAgcHVibGljIGdldCBwYXJhbWV0ZXJzKCkge1xuICAgIHJldHVybiB0aGlzLmludGVycG9sYXRpb25Gb3JBdHRyaWJ1dGUoJ3BhcmFtZXRlcnMnKSBhcyBhbnk7XG4gIH1cblxuICAvLyBzdGF0aXN0aWMgLSBjb21wdXRlZDogdHJ1ZSwgb3B0aW9uYWw6IGZhbHNlLCByZXF1aXJlZDogZmFsc2VcbiAgcHVibGljIGdldCBzdGF0aXN0aWMoKSB7XG4gICAgcmV0dXJuIHRoaXMuZ2V0U3RyaW5nQXR0cmlidXRlKCdzdGF0aXN0aWMnKTtcbiAgfVxufVxuXG5leHBvcnQgZnVuY3Rpb24gZGF0YUF3c2NjRGF0YWJyZXdKb2JQcm9maWxlQ29uZmlndXJhdGlvbkNvbHVtblN0YXRpc3RpY3NDb25maWd1cmF0aW9uc1N0YXRpc3RpY3NPdmVycmlkZXNUb1RlcnJhZm9ybShzdHJ1Y3Q/OiBEYXRhQXdzY2NEYXRhYnJld0pvYlByb2ZpbGVDb25maWd1cmF0aW9uQ29sdW1uU3RhdGlzdGljc0NvbmZpZ3VyYXRpb25zU3RhdGlzdGljc092ZXJyaWRlcyk6IGFueSB7XG4gIGlmICghY2RrdGYuY2FuSW5zcGVjdChzdHJ1Y3QpKSB7IHJldHVybiBzdHJ1Y3Q7IH1cbiAgcmV0dXJuIHtcbiAgICBwYXJhbWV0ZXJzOiBjZGt0Zi5oYXNoTWFwcGVyKGNka3RmLnN0cmluZ1RvVGVycmFmb3JtKShzdHJ1Y3QhLnBhcmFtZXRlcnMpLFxuICAgIHN0YXRpc3RpYzogY2RrdGYuc3RyaW5nVG9UZXJyYWZvcm0oc3RydWN0IS5zdGF0aXN0aWMpLFxuICB9XG59XG5cbmV4cG9ydCBjbGFzcyBEYXRhQXdzY2NEYXRhYnJld0pvYlByb2ZpbGVDb25maWd1cmF0aW9uQ29sdW1uU3RhdGlzdGljc0NvbmZpZ3VyYXRpb25zU3RhdGlzdGljcyBleHRlbmRzIGNka3RmLkNvbXBsZXhDb21wdXRlZExpc3Qge1xuXG4gIC8vIGluY2x1ZGVkX3N0YXRpc3RpY3MgLSBjb21wdXRlZDogdHJ1ZSwgb3B0aW9uYWw6IGZhbHNlLCByZXF1aXJlZDogZmFsc2VcbiAgcHVibGljIGdldCBpbmNsdWRlZFN0YXRpc3RpY3MoKSB7XG4gICAgcmV0dXJuIHRoaXMuZ2V0TGlzdEF0dHJpYnV0ZSgnaW5jbHVkZWRfc3RhdGlzdGljcycpO1xuICB9XG5cbiAgLy8gb3ZlcnJpZGVzIC0gY29tcHV0ZWQ6IHRydWUsIG9wdGlvbmFsOiBmYWxzZSwgcmVxdWlyZWQ6IGZhbHNlXG4gIHB1YmxpYyBnZXQgb3ZlcnJpZGVzKCkge1xuICAgIHJldHVybiB0aGlzLmludGVycG9sYXRpb25Gb3JBdHRyaWJ1dGUoJ292ZXJyaWRlcycpIGFzIGFueTtcbiAgfVxufVxuXG5leHBvcnQgZnVuY3Rpb24gZGF0YUF3c2NjRGF0YWJyZXdKb2JQcm9maWxlQ29uZmlndXJhdGlvbkNvbHVtblN0YXRpc3RpY3NDb25maWd1cmF0aW9uc1N0YXRpc3RpY3NUb1RlcnJhZm9ybShzdHJ1Y3Q/OiBEYXRhQXdzY2NEYXRhYnJld0pvYlByb2ZpbGVDb25maWd1cmF0aW9uQ29sdW1uU3RhdGlzdGljc0NvbmZpZ3VyYXRpb25zU3RhdGlzdGljcyk6IGFueSB7XG4gIGlmICghY2RrdGYuY2FuSW5zcGVjdChzdHJ1Y3QpKSB7IHJldHVybiBzdHJ1Y3Q7IH1cbiAgcmV0dXJuIHtcbiAgICBpbmNsdWRlZF9zdGF0aXN0aWNzOiBjZGt0Zi5saXN0TWFwcGVyKGNka3RmLnN0cmluZ1RvVGVycmFmb3JtKShzdHJ1Y3QhLmluY2x1ZGVkU3RhdGlzdGljcyksXG4gICAgb3ZlcnJpZGVzOiBjZGt0Zi5saXN0TWFwcGVyKGRhdGFBd3NjY0RhdGFicmV3Sm9iUHJvZmlsZUNvbmZpZ3VyYXRpb25Db2x1bW5TdGF0aXN0aWNzQ29uZmlndXJhdGlvbnNTdGF0aXN0aWNzT3ZlcnJpZGVzVG9UZXJyYWZvcm0pKHN0cnVjdCEub3ZlcnJpZGVzKSxcbiAgfVxufVxuXG5leHBvcnQgY2xhc3MgRGF0YUF3c2NjRGF0YWJyZXdKb2JQcm9maWxlQ29uZmlndXJhdGlvbkNvbHVtblN0YXRpc3RpY3NDb25maWd1cmF0aW9ucyBleHRlbmRzIGNka3RmLkNvbXBsZXhDb21wdXRlZExpc3Qge1xuXG4gIC8vIHNlbGVjdG9ycyAtIGNvbXB1dGVkOiB0cnVlLCBvcHRpb25hbDogZmFsc2UsIHJlcXVpcmVkOiBmYWxzZVxuICBwdWJsaWMgZ2V0IHNlbGVjdG9ycygpIHtcbiAgICByZXR1cm4gdGhpcy5pbnRlcnBvbGF0aW9uRm9yQXR0cmlidXRlKCdzZWxlY3RvcnMnKSBhcyBhbnk7XG4gIH1cblxuICAvLyBzdGF0aXN0aWNzIC0gY29tcHV0ZWQ6IHRydWUsIG9wdGlvbmFsOiBmYWxzZSwgcmVxdWlyZWQ6IGZhbHNlXG4gIHB1YmxpYyBnZXQgc3RhdGlzdGljcygpIHtcbiAgICByZXR1cm4gdGhpcy5pbnRlcnBvbGF0aW9uRm9yQXR0cmlidXRlKCdzdGF0aXN0aWNzJykgYXMgYW55O1xuICB9XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBkYXRhQXdzY2NEYXRhYnJld0pvYlByb2ZpbGVDb25maWd1cmF0aW9uQ29sdW1uU3RhdGlzdGljc0NvbmZpZ3VyYXRpb25zVG9UZXJyYWZvcm0oc3RydWN0PzogRGF0YUF3c2NjRGF0YWJyZXdKb2JQcm9maWxlQ29uZmlndXJhdGlvbkNvbHVtblN0YXRpc3RpY3NDb25maWd1cmF0aW9ucyk6IGFueSB7XG4gIGlmICghY2RrdGYuY2FuSW5zcGVjdChzdHJ1Y3QpKSB7IHJldHVybiBzdHJ1Y3Q7IH1cbiAgcmV0dXJuIHtcbiAgICBzZWxlY3RvcnM6IGNka3RmLmxpc3RNYXBwZXIoZGF0YUF3c2NjRGF0YWJyZXdKb2JQcm9maWxlQ29uZmlndXJhdGlvbkNvbHVtblN0YXRpc3RpY3NDb25maWd1cmF0aW9uc1NlbGVjdG9yc1RvVGVycmFmb3JtKShzdHJ1Y3QhLnNlbGVjdG9ycyksXG4gICAgc3RhdGlzdGljczogZGF0YUF3c2NjRGF0YWJyZXdKb2JQcm9maWxlQ29uZmlndXJhdGlvbkNvbHVtblN0YXRpc3RpY3NDb25maWd1cmF0aW9uc1N0YXRpc3RpY3NUb1RlcnJhZm9ybShzdHJ1Y3QhLnN0YXRpc3RpY3MpLFxuICB9XG59XG5cbmV4cG9ydCBjbGFzcyBEYXRhQXdzY2NEYXRhYnJld0pvYlByb2ZpbGVDb25maWd1cmF0aW9uRGF0YXNldFN0YXRpc3RpY3NDb25maWd1cmF0aW9uT3ZlcnJpZGVzIGV4dGVuZHMgY2RrdGYuQ29tcGxleENvbXB1dGVkTGlzdCB7XG5cbiAgLy8gcGFyYW1ldGVycyAtIGNvbXB1dGVkOiB0cnVlLCBvcHRpb25hbDogZmFsc2UsIHJlcXVpcmVkOiBmYWxzZVxuICBwdWJsaWMgZ2V0IHBhcmFtZXRlcnMoKSB7XG4gICAgcmV0dXJuIHRoaXMuaW50ZXJwb2xhdGlvbkZvckF0dHJpYnV0ZSgncGFyYW1ldGVycycpIGFzIGFueTtcbiAgfVxuXG4gIC8vIHN0YXRpc3RpYyAtIGNvbXB1dGVkOiB0cnVlLCBvcHRpb25hbDogZmFsc2UsIHJlcXVpcmVkOiBmYWxzZVxuICBwdWJsaWMgZ2V0IHN0YXRpc3RpYygpIHtcbiAgICByZXR1cm4gdGhpcy5nZXRTdHJpbmdBdHRyaWJ1dGUoJ3N0YXRpc3RpYycpO1xuICB9XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBkYXRhQXdzY2NEYXRhYnJld0pvYlByb2ZpbGVDb25maWd1cmF0aW9uRGF0YXNldFN0YXRpc3RpY3NDb25maWd1cmF0aW9uT3ZlcnJpZGVzVG9UZXJyYWZvcm0oc3RydWN0PzogRGF0YUF3c2NjRGF0YWJyZXdKb2JQcm9maWxlQ29uZmlndXJhdGlvbkRhdGFzZXRTdGF0aXN0aWNzQ29uZmlndXJhdGlvbk92ZXJyaWRlcyk6IGFueSB7XG4gIGlmICghY2RrdGYuY2FuSW5zcGVjdChzdHJ1Y3QpKSB7IHJldHVybiBzdHJ1Y3Q7IH1cbiAgcmV0dXJuIHtcbiAgICBwYXJhbWV0ZXJzOiBjZGt0Zi5oYXNoTWFwcGVyKGNka3RmLnN0cmluZ1RvVGVycmFmb3JtKShzdHJ1Y3QhLnBhcmFtZXRlcnMpLFxuICAgIHN0YXRpc3RpYzogY2RrdGYuc3RyaW5nVG9UZXJyYWZvcm0oc3RydWN0IS5zdGF0aXN0aWMpLFxuICB9XG59XG5cbmV4cG9ydCBjbGFzcyBEYXRhQXdzY2NEYXRhYnJld0pvYlByb2ZpbGVDb25maWd1cmF0aW9uRGF0YXNldFN0YXRpc3RpY3NDb25maWd1cmF0aW9uIGV4dGVuZHMgY2RrdGYuQ29tcGxleENvbXB1dGVkTGlzdCB7XG5cbiAgLy8gaW5jbHVkZWRfc3RhdGlzdGljcyAtIGNvbXB1dGVkOiB0cnVlLCBvcHRpb25hbDogZmFsc2UsIHJlcXVpcmVkOiBmYWxzZVxuICBwdWJsaWMgZ2V0IGluY2x1ZGVkU3RhdGlzdGljcygpIHtcbiAgICByZXR1cm4gdGhpcy5nZXRMaXN0QXR0cmlidXRlKCdpbmNsdWRlZF9zdGF0aXN0aWNzJyk7XG4gIH1cblxuICAvLyBvdmVycmlkZXMgLSBjb21wdXRlZDogdHJ1ZSwgb3B0aW9uYWw6IGZhbHNlLCByZXF1aXJlZDogZmFsc2VcbiAgcHVibGljIGdldCBvdmVycmlkZXMoKSB7XG4gICAgcmV0dXJuIHRoaXMuaW50ZXJwb2xhdGlvbkZvckF0dHJpYnV0ZSgnb3ZlcnJpZGVzJykgYXMgYW55O1xuICB9XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBkYXRhQXdzY2NEYXRhYnJld0pvYlByb2ZpbGVDb25maWd1cmF0aW9uRGF0YXNldFN0YXRpc3RpY3NDb25maWd1cmF0aW9uVG9UZXJyYWZvcm0oc3RydWN0PzogRGF0YUF3c2NjRGF0YWJyZXdKb2JQcm9maWxlQ29uZmlndXJhdGlvbkRhdGFzZXRTdGF0aXN0aWNzQ29uZmlndXJhdGlvbik6IGFueSB7XG4gIGlmICghY2RrdGYuY2FuSW5zcGVjdChzdHJ1Y3QpKSB7IHJldHVybiBzdHJ1Y3Q7IH1cbiAgcmV0dXJuIHtcbiAgICBpbmNsdWRlZF9zdGF0aXN0aWNzOiBjZGt0Zi5saXN0TWFwcGVyKGNka3RmLnN0cmluZ1RvVGVycmFmb3JtKShzdHJ1Y3QhLmluY2x1ZGVkU3RhdGlzdGljcyksXG4gICAgb3ZlcnJpZGVzOiBjZGt0Zi5saXN0TWFwcGVyKGRhdGFBd3NjY0RhdGFicmV3Sm9iUHJvZmlsZUNvbmZpZ3VyYXRpb25EYXRhc2V0U3RhdGlzdGljc0NvbmZpZ3VyYXRpb25PdmVycmlkZXNUb1RlcnJhZm9ybSkoc3RydWN0IS5vdmVycmlkZXMpLFxuICB9XG59XG5cbmV4cG9ydCBjbGFzcyBEYXRhQXdzY2NEYXRhYnJld0pvYlByb2ZpbGVDb25maWd1cmF0aW9uUHJvZmlsZUNvbHVtbnMgZXh0ZW5kcyBjZGt0Zi5Db21wbGV4Q29tcHV0ZWRMaXN0IHtcblxuICAvLyBuYW1lIC0gY29tcHV0ZWQ6IHRydWUsIG9wdGlvbmFsOiBmYWxzZSwgcmVxdWlyZWQ6IGZhbHNlXG4gIHB1YmxpYyBnZXQgbmFtZSgpIHtcbiAgICByZXR1cm4gdGhpcy5nZXRTdHJpbmdBdHRyaWJ1dGUoJ25hbWUnKTtcbiAgfVxuXG4gIC8vIHJlZ2V4IC0gY29tcHV0ZWQ6IHRydWUsIG9wdGlvbmFsOiBmYWxzZSwgcmVxdWlyZWQ6IGZhbHNlXG4gIHB1YmxpYyBnZXQgcmVnZXgoKSB7XG4gICAgcmV0dXJuIHRoaXMuZ2V0U3RyaW5nQXR0cmlidXRlKCdyZWdleCcpO1xuICB9XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBkYXRhQXdzY2NEYXRhYnJld0pvYlByb2ZpbGVDb25maWd1cmF0aW9uUHJvZmlsZUNvbHVtbnNUb1RlcnJhZm9ybShzdHJ1Y3Q/OiBEYXRhQXdzY2NEYXRhYnJld0pvYlByb2ZpbGVDb25maWd1cmF0aW9uUHJvZmlsZUNvbHVtbnMpOiBhbnkge1xuICBpZiAoIWNka3RmLmNhbkluc3BlY3Qoc3RydWN0KSkgeyByZXR1cm4gc3RydWN0OyB9XG4gIHJldHVybiB7XG4gICAgbmFtZTogY2RrdGYuc3RyaW5nVG9UZXJyYWZvcm0oc3RydWN0IS5uYW1lKSxcbiAgICByZWdleDogY2RrdGYuc3RyaW5nVG9UZXJyYWZvcm0oc3RydWN0IS5yZWdleCksXG4gIH1cbn1cblxuZXhwb3J0IGNsYXNzIERhdGFBd3NjY0RhdGFicmV3Sm9iUHJvZmlsZUNvbmZpZ3VyYXRpb24gZXh0ZW5kcyBjZGt0Zi5Db21wbGV4Q29tcHV0ZWRMaXN0IHtcblxuICAvLyBjb2x1bW5fc3RhdGlzdGljc19jb25maWd1cmF0aW9ucyAtIGNvbXB1dGVkOiB0cnVlLCBvcHRpb25hbDogZmFsc2UsIHJlcXVpcmVkOiBmYWxzZVxuICBwdWJsaWMgZ2V0IGNvbHVtblN0YXRpc3RpY3NDb25maWd1cmF0aW9ucygpIHtcbiAgICByZXR1cm4gdGhpcy5pbnRlcnBvbGF0aW9uRm9yQXR0cmlidXRlKCdjb2x1bW5fc3RhdGlzdGljc19jb25maWd1cmF0aW9ucycpIGFzIGFueTtcbiAgfVxuXG4gIC8vIGRhdGFzZXRfc3RhdGlzdGljc19jb25maWd1cmF0aW9uIC0gY29tcHV0ZWQ6IHRydWUsIG9wdGlvbmFsOiBmYWxzZSwgcmVxdWlyZWQ6IGZhbHNlXG4gIHB1YmxpYyBnZXQgZGF0YXNldFN0YXRpc3RpY3NDb25maWd1cmF0aW9uKCkge1xuICAgIHJldHVybiB0aGlzLmludGVycG9sYXRpb25Gb3JBdHRyaWJ1dGUoJ2RhdGFzZXRfc3RhdGlzdGljc19jb25maWd1cmF0aW9uJykgYXMgYW55O1xuICB9XG5cbiAgLy8gcHJvZmlsZV9jb2x1bW5zIC0gY29tcHV0ZWQ6IHRydWUsIG9wdGlvbmFsOiBmYWxzZSwgcmVxdWlyZWQ6IGZhbHNlXG4gIHB1YmxpYyBnZXQgcHJvZmlsZUNvbHVtbnMoKSB7XG4gICAgcmV0dXJuIHRoaXMuaW50ZXJwb2xhdGlvbkZvckF0dHJpYnV0ZSgncHJvZmlsZV9jb2x1bW5zJykgYXMgYW55O1xuICB9XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBkYXRhQXdzY2NEYXRhYnJld0pvYlByb2ZpbGVDb25maWd1cmF0aW9uVG9UZXJyYWZvcm0oc3RydWN0PzogRGF0YUF3c2NjRGF0YWJyZXdKb2JQcm9maWxlQ29uZmlndXJhdGlvbik6IGFueSB7XG4gIGlmICghY2RrdGYuY2FuSW5zcGVjdChzdHJ1Y3QpKSB7IHJldHVybiBzdHJ1Y3Q7IH1cbiAgcmV0dXJuIHtcbiAgICBjb2x1bW5fc3RhdGlzdGljc19jb25maWd1cmF0aW9uczogY2RrdGYubGlzdE1hcHBlcihkYXRhQXdzY2NEYXRhYnJld0pvYlByb2ZpbGVDb25maWd1cmF0aW9uQ29sdW1uU3RhdGlzdGljc0NvbmZpZ3VyYXRpb25zVG9UZXJyYWZvcm0pKHN0cnVjdCEuY29sdW1uU3RhdGlzdGljc0NvbmZpZ3VyYXRpb25zKSxcbiAgICBkYXRhc2V0X3N0YXRpc3RpY3NfY29uZmlndXJhdGlvbjogZGF0YUF3c2NjRGF0YWJyZXdKb2JQcm9maWxlQ29uZmlndXJhdGlvbkRhdGFzZXRTdGF0aXN0aWNzQ29uZmlndXJhdGlvblRvVGVycmFmb3JtKHN0cnVjdCEuZGF0YXNldFN0YXRpc3RpY3NDb25maWd1cmF0aW9uKSxcbiAgICBwcm9maWxlX2NvbHVtbnM6IGNka3RmLmxpc3RNYXBwZXIoZGF0YUF3c2NjRGF0YWJyZXdKb2JQcm9maWxlQ29uZmlndXJhdGlvblByb2ZpbGVDb2x1bW5zVG9UZXJyYWZvcm0pKHN0cnVjdCEucHJvZmlsZUNvbHVtbnMpLFxuICB9XG59XG5cbmV4cG9ydCBjbGFzcyBEYXRhQXdzY2NEYXRhYnJld0pvYlJlY2lwZSBleHRlbmRzIGNka3RmLkNvbXBsZXhDb21wdXRlZExpc3Qge1xuXG4gIC8vIG5hbWUgLSBjb21wdXRlZDogdHJ1ZSwgb3B0aW9uYWw6IGZhbHNlLCByZXF1aXJlZDogZmFsc2VcbiAgcHVibGljIGdldCBuYW1lKCkge1xuICAgIHJldHVybiB0aGlzLmdldFN0cmluZ0F0dHJpYnV0ZSgnbmFtZScpO1xuICB9XG5cbiAgLy8gdmVyc2lvbiAtIGNvbXB1dGVkOiB0cnVlLCBvcHRpb25hbDogZmFsc2UsIHJlcXVpcmVkOiBmYWxzZVxuICBwdWJsaWMgZ2V0IHZlcnNpb24oKSB7XG4gICAgcmV0dXJuIHRoaXMuZ2V0U3RyaW5nQXR0cmlidXRlKCd2ZXJzaW9uJyk7XG4gIH1cbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGRhdGFBd3NjY0RhdGFicmV3Sm9iUmVjaXBlVG9UZXJyYWZvcm0oc3RydWN0PzogRGF0YUF3c2NjRGF0YWJyZXdKb2JSZWNpcGUpOiBhbnkge1xuICBpZiAoIWNka3RmLmNhbkluc3BlY3Qoc3RydWN0KSkgeyByZXR1cm4gc3RydWN0OyB9XG4gIHJldHVybiB7XG4gICAgbmFtZTogY2RrdGYuc3RyaW5nVG9UZXJyYWZvcm0oc3RydWN0IS5uYW1lKSxcbiAgICB2ZXJzaW9uOiBjZGt0Zi5zdHJpbmdUb1RlcnJhZm9ybShzdHJ1Y3QhLnZlcnNpb24pLFxuICB9XG59XG5cbmV4cG9ydCBjbGFzcyBEYXRhQXdzY2NEYXRhYnJld0pvYlRhZ3MgZXh0ZW5kcyBjZGt0Zi5Db21wbGV4Q29tcHV0ZWRMaXN0IHtcblxuICAvLyBrZXkgLSBjb21wdXRlZDogdHJ1ZSwgb3B0aW9uYWw6IGZhbHNlLCByZXF1aXJlZDogZmFsc2VcbiAgcHVibGljIGdldCBrZXkoKSB7XG4gICAgcmV0dXJuIHRoaXMuZ2V0U3RyaW5nQXR0cmlidXRlKCdrZXknKTtcbiAgfVxuXG4gIC8vIHZhbHVlIC0gY29tcHV0ZWQ6IHRydWUsIG9wdGlvbmFsOiBmYWxzZSwgcmVxdWlyZWQ6IGZhbHNlXG4gIHB1YmxpYyBnZXQgdmFsdWUoKSB7XG4gICAgcmV0dXJuIHRoaXMuZ2V0U3RyaW5nQXR0cmlidXRlKCd2YWx1ZScpO1xuICB9XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBkYXRhQXdzY2NEYXRhYnJld0pvYlRhZ3NUb1RlcnJhZm9ybShzdHJ1Y3Q/OiBEYXRhQXdzY2NEYXRhYnJld0pvYlRhZ3MpOiBhbnkge1xuICBpZiAoIWNka3RmLmNhbkluc3BlY3Qoc3RydWN0KSkgeyByZXR1cm4gc3RydWN0OyB9XG4gIHJldHVybiB7XG4gICAga2V5OiBjZGt0Zi5zdHJpbmdUb1RlcnJhZm9ybShzdHJ1Y3QhLmtleSksXG4gICAgdmFsdWU6IGNka3RmLnN0cmluZ1RvVGVycmFmb3JtKHN0cnVjdCEudmFsdWUpLFxuICB9XG59XG5cblxuLyoqXG4qIFJlcHJlc2VudHMgYSB7QGxpbmsgaHR0cHM6Ly93d3cudGVycmFmb3JtLmlvL2RvY3MvcHJvdmlkZXJzL2F3c2NjL2QvZGF0YWJyZXdfam9iLmh0bWwgYXdzY2NfZGF0YWJyZXdfam9ifVxuKi9cbmV4cG9ydCBjbGFzcyBEYXRhQXdzY2NEYXRhYnJld0pvYiBleHRlbmRzIGNka3RmLlRlcnJhZm9ybURhdGFTb3VyY2Uge1xuXG4gIC8vID09PT09PT09PT09PT09PT09XG4gIC8vIFNUQVRJQyBQUk9QRVJUSUVTXG4gIC8vID09PT09PT09PT09PT09PT09XG4gIHB1YmxpYyBzdGF0aWMgcmVhZG9ubHkgdGZSZXNvdXJjZVR5cGU6IHN0cmluZyA9IFwiYXdzY2NfZGF0YWJyZXdfam9iXCI7XG5cbiAgLy8gPT09PT09PT09PT1cbiAgLy8gSU5JVElBTElaRVJcbiAgLy8gPT09PT09PT09PT1cblxuICAvKipcbiAgKiBDcmVhdGUgYSBuZXcge0BsaW5rIGh0dHBzOi8vd3d3LnRlcnJhZm9ybS5pby9kb2NzL3Byb3ZpZGVycy9hd3NjYy9kL2RhdGFicmV3X2pvYi5odG1sIGF3c2NjX2RhdGFicmV3X2pvYn0gRGF0YSBTb3VyY2VcbiAgKlxuICAqIEBwYXJhbSBzY29wZSBUaGUgc2NvcGUgaW4gd2hpY2ggdG8gZGVmaW5lIHRoaXMgY29uc3RydWN0XG4gICogQHBhcmFtIGlkIFRoZSBzY29wZWQgY29uc3RydWN0IElELiBNdXN0IGJlIHVuaXF1ZSBhbW9uZ3N0IHNpYmxpbmdzIGluIHRoZSBzYW1lIHNjb3BlXG4gICogQHBhcmFtIG9wdGlvbnMgRGF0YUF3c2NjRGF0YWJyZXdKb2JDb25maWdcbiAgKi9cbiAgcHVibGljIGNvbnN0cnVjdG9yKHNjb3BlOiBDb25zdHJ1Y3QsIGlkOiBzdHJpbmcsIGNvbmZpZzogRGF0YUF3c2NjRGF0YWJyZXdKb2JDb25maWcpIHtcbiAgICBzdXBlcihzY29wZSwgaWQsIHtcbiAgICAgIHRlcnJhZm9ybVJlc291cmNlVHlwZTogJ2F3c2NjX2RhdGFicmV3X2pvYicsXG4gICAgICB0ZXJyYWZvcm1HZW5lcmF0b3JNZXRhZGF0YToge1xuICAgICAgICBwcm92aWRlck5hbWU6ICdhd3NjYydcbiAgICAgIH0sXG4gICAgICBwcm92aWRlcjogY29uZmlnLnByb3ZpZGVyLFxuICAgICAgZGVwZW5kc09uOiBjb25maWcuZGVwZW5kc09uLFxuICAgICAgY291bnQ6IGNvbmZpZy5jb3VudCxcbiAgICAgIGxpZmVjeWNsZTogY29uZmlnLmxpZmVjeWNsZVxuICAgIH0pO1xuICAgIHRoaXMuX2lkID0gY29uZmlnLmlkO1xuICB9XG5cbiAgLy8gPT09PT09PT09PVxuICAvLyBBVFRSSUJVVEVTXG4gIC8vID09PT09PT09PT1cblxuICAvLyBkYXRhX2NhdGFsb2dfb3V0cHV0cyAtIGNvbXB1dGVkOiB0cnVlLCBvcHRpb25hbDogZmFsc2UsIHJlcXVpcmVkOiBmYWxzZVxuICBwdWJsaWMgZ2V0IGRhdGFDYXRhbG9nT3V0cHV0cygpIHtcbiAgICByZXR1cm4gdGhpcy5pbnRlcnBvbGF0aW9uRm9yQXR0cmlidXRlKCdkYXRhX2NhdGFsb2dfb3V0cHV0cycpIGFzIGFueTtcbiAgfVxuXG4gIC8vIGRhdGFiYXNlX291dHB1dHMgLSBjb21wdXRlZDogdHJ1ZSwgb3B0aW9uYWw6IGZhbHNlLCByZXF1aXJlZDogZmFsc2VcbiAgcHVibGljIGdldCBkYXRhYmFzZU91dHB1dHMoKSB7XG4gICAgcmV0dXJuIHRoaXMuaW50ZXJwb2xhdGlvbkZvckF0dHJpYnV0ZSgnZGF0YWJhc2Vfb3V0cHV0cycpIGFzIGFueTtcbiAgfVxuXG4gIC8vIGRhdGFzZXRfbmFtZSAtIGNvbXB1dGVkOiB0cnVlLCBvcHRpb25hbDogZmFsc2UsIHJlcXVpcmVkOiBmYWxzZVxuICBwdWJsaWMgZ2V0IGRhdGFzZXROYW1lKCkge1xuICAgIHJldHVybiB0aGlzLmdldFN0cmluZ0F0dHJpYnV0ZSgnZGF0YXNldF9uYW1lJyk7XG4gIH1cblxuICAvLyBlbmNyeXB0aW9uX2tleV9hcm4gLSBjb21wdXRlZDogdHJ1ZSwgb3B0aW9uYWw6IGZhbHNlLCByZXF1aXJlZDogZmFsc2VcbiAgcHVibGljIGdldCBlbmNyeXB0aW9uS2V5QXJuKCkge1xuICAgIHJldHVybiB0aGlzLmdldFN0cmluZ0F0dHJpYnV0ZSgnZW5jcnlwdGlvbl9rZXlfYXJuJyk7XG4gIH1cblxuICAvLyBlbmNyeXB0aW9uX21vZGUgLSBjb21wdXRlZDogdHJ1ZSwgb3B0aW9uYWw6IGZhbHNlLCByZXF1aXJlZDogZmFsc2VcbiAgcHVibGljIGdldCBlbmNyeXB0aW9uTW9kZSgpIHtcbiAgICByZXR1cm4gdGhpcy5nZXRTdHJpbmdBdHRyaWJ1dGUoJ2VuY3J5cHRpb25fbW9kZScpO1xuICB9XG5cbiAgLy8gaWQgLSBjb21wdXRlZDogZmFsc2UsIG9wdGlvbmFsOiBmYWxzZSwgcmVxdWlyZWQ6IHRydWVcbiAgcHJpdmF0ZSBfaWQ6IHN0cmluZztcbiAgcHVibGljIGdldCBpZCgpIHtcbiAgICByZXR1cm4gdGhpcy5nZXRTdHJpbmdBdHRyaWJ1dGUoJ2lkJyk7XG4gIH1cbiAgcHVibGljIHNldCBpZCh2YWx1ZTogc3RyaW5nKSB7XG4gICAgdGhpcy5faWQgPSB2YWx1ZTtcbiAgfVxuICAvLyBUZW1wb3JhcmlseSBleHBvc2UgaW5wdXQgdmFsdWUuIFVzZSB3aXRoIGNhdXRpb24uXG4gIHB1YmxpYyBnZXQgaWRJbnB1dCgpIHtcbiAgICByZXR1cm4gdGhpcy5faWRcbiAgfVxuXG4gIC8vIGpvYl9zYW1wbGUgLSBjb21wdXRlZDogdHJ1ZSwgb3B0aW9uYWw6IGZhbHNlLCByZXF1aXJlZDogZmFsc2VcbiAgcHVibGljIGdldCBqb2JTYW1wbGUoKSB7XG4gICAgcmV0dXJuIHRoaXMuaW50ZXJwb2xhdGlvbkZvckF0dHJpYnV0ZSgnam9iX3NhbXBsZScpIGFzIGFueTtcbiAgfVxuXG4gIC8vIGxvZ19zdWJzY3JpcHRpb24gLSBjb21wdXRlZDogdHJ1ZSwgb3B0aW9uYWw6IGZhbHNlLCByZXF1aXJlZDogZmFsc2VcbiAgcHVibGljIGdldCBsb2dTdWJzY3JpcHRpb24oKSB7XG4gICAgcmV0dXJuIHRoaXMuZ2V0U3RyaW5nQXR0cmlidXRlKCdsb2dfc3Vic2NyaXB0aW9uJyk7XG4gIH1cblxuICAvLyBtYXhfY2FwYWNpdHkgLSBjb21wdXRlZDogdHJ1ZSwgb3B0aW9uYWw6IGZhbHNlLCByZXF1aXJlZDogZmFsc2VcbiAgcHVibGljIGdldCBtYXhDYXBhY2l0eSgpIHtcbiAgICByZXR1cm4gdGhpcy5nZXROdW1iZXJBdHRyaWJ1dGUoJ21heF9jYXBhY2l0eScpO1xuICB9XG5cbiAgLy8gbWF4X3JldHJpZXMgLSBjb21wdXRlZDogdHJ1ZSwgb3B0aW9uYWw6IGZhbHNlLCByZXF1aXJlZDogZmFsc2VcbiAgcHVibGljIGdldCBtYXhSZXRyaWVzKCkge1xuICAgIHJldHVybiB0aGlzLmdldE51bWJlckF0dHJpYnV0ZSgnbWF4X3JldHJpZXMnKTtcbiAgfVxuXG4gIC8vIG5hbWUgLSBjb21wdXRlZDogdHJ1ZSwgb3B0aW9uYWw6IGZhbHNlLCByZXF1aXJlZDogZmFsc2VcbiAgcHVibGljIGdldCBuYW1lKCkge1xuICAgIHJldHVybiB0aGlzLmdldFN0cmluZ0F0dHJpYnV0ZSgnbmFtZScpO1xuICB9XG5cbiAgLy8gb3V0cHV0X2xvY2F0aW9uIC0gY29tcHV0ZWQ6IHRydWUsIG9wdGlvbmFsOiBmYWxzZSwgcmVxdWlyZWQ6IGZhbHNlXG4gIHB1YmxpYyBnZXQgb3V0cHV0TG9jYXRpb24oKSB7XG4gICAgcmV0dXJuIHRoaXMuaW50ZXJwb2xhdGlvbkZvckF0dHJpYnV0ZSgnb3V0cHV0X2xvY2F0aW9uJykgYXMgYW55O1xuICB9XG5cbiAgLy8gb3V0cHV0cyAtIGNvbXB1dGVkOiB0cnVlLCBvcHRpb25hbDogZmFsc2UsIHJlcXVpcmVkOiBmYWxzZVxuICBwdWJsaWMgZ2V0IG91dHB1dHMoKSB7XG4gICAgcmV0dXJuIHRoaXMuaW50ZXJwb2xhdGlvbkZvckF0dHJpYnV0ZSgnb3V0cHV0cycpIGFzIGFueTtcbiAgfVxuXG4gIC8vIHByb2ZpbGVfY29uZmlndXJhdGlvbiAtIGNvbXB1dGVkOiB0cnVlLCBvcHRpb25hbDogZmFsc2UsIHJlcXVpcmVkOiBmYWxzZVxuICBwdWJsaWMgZ2V0IHByb2ZpbGVDb25maWd1cmF0aW9uKCkge1xuICAgIHJldHVybiB0aGlzLmludGVycG9sYXRpb25Gb3JBdHRyaWJ1dGUoJ3Byb2ZpbGVfY29uZmlndXJhdGlvbicpIGFzIGFueTtcbiAgfVxuXG4gIC8vIHByb2plY3RfbmFtZSAtIGNvbXB1dGVkOiB0cnVlLCBvcHRpb25hbDogZmFsc2UsIHJlcXVpcmVkOiBmYWxzZVxuICBwdWJsaWMgZ2V0IHByb2plY3ROYW1lKCkge1xuICAgIHJldHVybiB0aGlzLmdldFN0cmluZ0F0dHJpYnV0ZSgncHJvamVjdF9uYW1lJyk7XG4gIH1cblxuICAvLyByZWNpcGUgLSBjb21wdXRlZDogdHJ1ZSwgb3B0aW9uYWw6IGZhbHNlLCByZXF1aXJlZDogZmFsc2VcbiAgcHVibGljIGdldCByZWNpcGUoKSB7XG4gICAgcmV0dXJuIHRoaXMuaW50ZXJwb2xhdGlvbkZvckF0dHJpYnV0ZSgncmVjaXBlJykgYXMgYW55O1xuICB9XG5cbiAgLy8gcm9sZV9hcm4gLSBjb21wdXRlZDogdHJ1ZSwgb3B0aW9uYWw6IGZhbHNlLCByZXF1aXJlZDogZmFsc2VcbiAgcHVibGljIGdldCByb2xlQXJuKCkge1xuICAgIHJldHVybiB0aGlzLmdldFN0cmluZ0F0dHJpYnV0ZSgncm9sZV9hcm4nKTtcbiAgfVxuXG4gIC8vIHRhZ3MgLSBjb21wdXRlZDogdHJ1ZSwgb3B0aW9uYWw6IGZhbHNlLCByZXF1aXJlZDogZmFsc2VcbiAgcHVibGljIGdldCB0YWdzKCkge1xuICAgIHJldHVybiB0aGlzLmludGVycG9sYXRpb25Gb3JBdHRyaWJ1dGUoJ3RhZ3MnKSBhcyBhbnk7XG4gIH1cblxuICAvLyB0aW1lb3V0IC0gY29tcHV0ZWQ6IHRydWUsIG9wdGlvbmFsOiBmYWxzZSwgcmVxdWlyZWQ6IGZhbHNlXG4gIHB1YmxpYyBnZXQgdGltZW91dCgpIHtcbiAgICByZXR1cm4gdGhpcy5nZXROdW1iZXJBdHRyaWJ1dGUoJ3RpbWVvdXQnKTtcbiAgfVxuXG4gIC8vIHR5cGUgLSBjb21wdXRlZDogdHJ1ZSwgb3B0aW9uYWw6IGZhbHNlLCByZXF1aXJlZDogZmFsc2VcbiAgcHVibGljIGdldCB0eXBlKCkge1xuICAgIHJldHVybiB0aGlzLmdldFN0cmluZ0F0dHJpYnV0ZSgndHlwZScpO1xuICB9XG5cbiAgLy8gPT09PT09PT09XG4gIC8vIFNZTlRIRVNJU1xuICAvLyA9PT09PT09PT1cblxuICBwcm90ZWN0ZWQgc3ludGhlc2l6ZUF0dHJpYnV0ZXMoKTogeyBbbmFtZTogc3RyaW5nXTogYW55IH0ge1xuICAgIHJldHVybiB7XG4gICAgICBpZDogY2RrdGYuc3RyaW5nVG9UZXJyYWZvcm0odGhpcy5faWQpLFxuICAgIH07XG4gIH1cbn1cbiJdfQ==