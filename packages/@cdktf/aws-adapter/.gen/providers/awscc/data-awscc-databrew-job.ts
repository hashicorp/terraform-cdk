// https://www.terraform.io/docs/providers/awscc/d/databrew_job.html
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DataAwsccDatabrewJobConfig extends cdktf.TerraformMetaArguments {
  /**
  * Uniquely identifies the resource.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/d/databrew_job.html#id DataAwsccDatabrewJob#id}
  */
  readonly id: string;
}
export class DataAwsccDatabrewJobDataCatalogOutputsDatabaseOptionsTempDirectory extends cdktf.ComplexComputedList {

  // bucket - computed: true, optional: false, required: false
  public get bucket() {
    return this.getStringAttribute('bucket');
  }

  // key - computed: true, optional: false, required: false
  public get key() {
    return this.getStringAttribute('key');
  }
}

export function dataAwsccDatabrewJobDataCatalogOutputsDatabaseOptionsTempDirectoryToTerraform(struct?: DataAwsccDatabrewJobDataCatalogOutputsDatabaseOptionsTempDirectory): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    bucket: cdktf.stringToTerraform(struct!.bucket),
    key: cdktf.stringToTerraform(struct!.key),
  }
}

export class DataAwsccDatabrewJobDataCatalogOutputsDatabaseOptions extends cdktf.ComplexComputedList {

  // table_name - computed: true, optional: false, required: false
  public get tableName() {
    return this.getStringAttribute('table_name');
  }

  // temp_directory - computed: true, optional: false, required: false
  public get tempDirectory() {
    return this.interpolationForAttribute('temp_directory') as any;
  }
}

export function dataAwsccDatabrewJobDataCatalogOutputsDatabaseOptionsToTerraform(struct?: DataAwsccDatabrewJobDataCatalogOutputsDatabaseOptions): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    table_name: cdktf.stringToTerraform(struct!.tableName),
    temp_directory: dataAwsccDatabrewJobDataCatalogOutputsDatabaseOptionsTempDirectoryToTerraform(struct!.tempDirectory),
  }
}

export class DataAwsccDatabrewJobDataCatalogOutputsS3OptionsLocation extends cdktf.ComplexComputedList {

  // bucket - computed: true, optional: false, required: false
  public get bucket() {
    return this.getStringAttribute('bucket');
  }

  // key - computed: true, optional: false, required: false
  public get key() {
    return this.getStringAttribute('key');
  }
}

export function dataAwsccDatabrewJobDataCatalogOutputsS3OptionsLocationToTerraform(struct?: DataAwsccDatabrewJobDataCatalogOutputsS3OptionsLocation): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    bucket: cdktf.stringToTerraform(struct!.bucket),
    key: cdktf.stringToTerraform(struct!.key),
  }
}

export class DataAwsccDatabrewJobDataCatalogOutputsS3Options extends cdktf.ComplexComputedList {

  // location - computed: true, optional: false, required: false
  public get location() {
    return this.interpolationForAttribute('location') as any;
  }
}

export function dataAwsccDatabrewJobDataCatalogOutputsS3OptionsToTerraform(struct?: DataAwsccDatabrewJobDataCatalogOutputsS3Options): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    location: dataAwsccDatabrewJobDataCatalogOutputsS3OptionsLocationToTerraform(struct!.location),
  }
}

export class DataAwsccDatabrewJobDataCatalogOutputs extends cdktf.ComplexComputedList {

  // catalog_id - computed: true, optional: false, required: false
  public get catalogId() {
    return this.getStringAttribute('catalog_id');
  }

  // database_name - computed: true, optional: false, required: false
  public get databaseName() {
    return this.getStringAttribute('database_name');
  }

  // database_options - computed: true, optional: false, required: false
  public get databaseOptions() {
    return this.interpolationForAttribute('database_options') as any;
  }

  // overwrite - computed: true, optional: false, required: false
  public get overwrite() {
    return this.getBooleanAttribute('overwrite');
  }

  // s3_options - computed: true, optional: false, required: false
  public get s3Options() {
    return this.interpolationForAttribute('s3_options') as any;
  }

  // table_name - computed: true, optional: false, required: false
  public get tableName() {
    return this.getStringAttribute('table_name');
  }
}

export function dataAwsccDatabrewJobDataCatalogOutputsToTerraform(struct?: DataAwsccDatabrewJobDataCatalogOutputs): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    catalog_id: cdktf.stringToTerraform(struct!.catalogId),
    database_name: cdktf.stringToTerraform(struct!.databaseName),
    database_options: dataAwsccDatabrewJobDataCatalogOutputsDatabaseOptionsToTerraform(struct!.databaseOptions),
    overwrite: cdktf.booleanToTerraform(struct!.overwrite),
    s3_options: dataAwsccDatabrewJobDataCatalogOutputsS3OptionsToTerraform(struct!.s3Options),
    table_name: cdktf.stringToTerraform(struct!.tableName),
  }
}

export class DataAwsccDatabrewJobDatabaseOutputsDatabaseOptionsTempDirectory extends cdktf.ComplexComputedList {

  // bucket - computed: true, optional: false, required: false
  public get bucket() {
    return this.getStringAttribute('bucket');
  }

  // key - computed: true, optional: false, required: false
  public get key() {
    return this.getStringAttribute('key');
  }
}

export function dataAwsccDatabrewJobDatabaseOutputsDatabaseOptionsTempDirectoryToTerraform(struct?: DataAwsccDatabrewJobDatabaseOutputsDatabaseOptionsTempDirectory): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    bucket: cdktf.stringToTerraform(struct!.bucket),
    key: cdktf.stringToTerraform(struct!.key),
  }
}

export class DataAwsccDatabrewJobDatabaseOutputsDatabaseOptions extends cdktf.ComplexComputedList {

  // table_name - computed: true, optional: false, required: false
  public get tableName() {
    return this.getStringAttribute('table_name');
  }

  // temp_directory - computed: true, optional: false, required: false
  public get tempDirectory() {
    return this.interpolationForAttribute('temp_directory') as any;
  }
}

export function dataAwsccDatabrewJobDatabaseOutputsDatabaseOptionsToTerraform(struct?: DataAwsccDatabrewJobDatabaseOutputsDatabaseOptions): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    table_name: cdktf.stringToTerraform(struct!.tableName),
    temp_directory: dataAwsccDatabrewJobDatabaseOutputsDatabaseOptionsTempDirectoryToTerraform(struct!.tempDirectory),
  }
}

export class DataAwsccDatabrewJobDatabaseOutputs extends cdktf.ComplexComputedList {

  // database_options - computed: true, optional: false, required: false
  public get databaseOptions() {
    return this.interpolationForAttribute('database_options') as any;
  }

  // database_output_mode - computed: true, optional: false, required: false
  public get databaseOutputMode() {
    return this.getStringAttribute('database_output_mode');
  }

  // glue_connection_name - computed: true, optional: false, required: false
  public get glueConnectionName() {
    return this.getStringAttribute('glue_connection_name');
  }
}

export function dataAwsccDatabrewJobDatabaseOutputsToTerraform(struct?: DataAwsccDatabrewJobDatabaseOutputs): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    database_options: dataAwsccDatabrewJobDatabaseOutputsDatabaseOptionsToTerraform(struct!.databaseOptions),
    database_output_mode: cdktf.stringToTerraform(struct!.databaseOutputMode),
    glue_connection_name: cdktf.stringToTerraform(struct!.glueConnectionName),
  }
}

export class DataAwsccDatabrewJobJobSample extends cdktf.ComplexComputedList {

  // mode - computed: true, optional: false, required: false
  public get mode() {
    return this.getStringAttribute('mode');
  }

  // size - computed: true, optional: false, required: false
  public get size() {
    return this.getNumberAttribute('size');
  }
}

export function dataAwsccDatabrewJobJobSampleToTerraform(struct?: DataAwsccDatabrewJobJobSample): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    mode: cdktf.stringToTerraform(struct!.mode),
    size: cdktf.numberToTerraform(struct!.size),
  }
}

export class DataAwsccDatabrewJobOutputLocation extends cdktf.ComplexComputedList {

  // bucket - computed: true, optional: false, required: false
  public get bucket() {
    return this.getStringAttribute('bucket');
  }

  // key - computed: true, optional: false, required: false
  public get key() {
    return this.getStringAttribute('key');
  }
}

export function dataAwsccDatabrewJobOutputLocationToTerraform(struct?: DataAwsccDatabrewJobOutputLocation): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    bucket: cdktf.stringToTerraform(struct!.bucket),
    key: cdktf.stringToTerraform(struct!.key),
  }
}

export class DataAwsccDatabrewJobOutputsFormatOptionsCsv extends cdktf.ComplexComputedList {

  // delimiter - computed: true, optional: false, required: false
  public get delimiter() {
    return this.getStringAttribute('delimiter');
  }
}

export function dataAwsccDatabrewJobOutputsFormatOptionsCsvToTerraform(struct?: DataAwsccDatabrewJobOutputsFormatOptionsCsv): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    delimiter: cdktf.stringToTerraform(struct!.delimiter),
  }
}

export class DataAwsccDatabrewJobOutputsFormatOptions extends cdktf.ComplexComputedList {

  // csv - computed: true, optional: false, required: false
  public get csv() {
    return this.interpolationForAttribute('csv') as any;
  }
}

export function dataAwsccDatabrewJobOutputsFormatOptionsToTerraform(struct?: DataAwsccDatabrewJobOutputsFormatOptions): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    csv: dataAwsccDatabrewJobOutputsFormatOptionsCsvToTerraform(struct!.csv),
  }
}

export class DataAwsccDatabrewJobOutputsLocation extends cdktf.ComplexComputedList {

  // bucket - computed: true, optional: false, required: false
  public get bucket() {
    return this.getStringAttribute('bucket');
  }

  // key - computed: true, optional: false, required: false
  public get key() {
    return this.getStringAttribute('key');
  }
}

export function dataAwsccDatabrewJobOutputsLocationToTerraform(struct?: DataAwsccDatabrewJobOutputsLocation): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    bucket: cdktf.stringToTerraform(struct!.bucket),
    key: cdktf.stringToTerraform(struct!.key),
  }
}

export class DataAwsccDatabrewJobOutputs extends cdktf.ComplexComputedList {

  // compression_format - computed: true, optional: false, required: false
  public get compressionFormat() {
    return this.getStringAttribute('compression_format');
  }

  // format - computed: true, optional: false, required: false
  public get format() {
    return this.getStringAttribute('format');
  }

  // format_options - computed: true, optional: false, required: false
  public get formatOptions() {
    return this.interpolationForAttribute('format_options') as any;
  }

  // location - computed: true, optional: false, required: false
  public get location() {
    return this.interpolationForAttribute('location') as any;
  }

  // overwrite - computed: true, optional: false, required: false
  public get overwrite() {
    return this.getBooleanAttribute('overwrite');
  }

  // partition_columns - computed: true, optional: false, required: false
  public get partitionColumns() {
    return this.getListAttribute('partition_columns');
  }
}

export function dataAwsccDatabrewJobOutputsToTerraform(struct?: DataAwsccDatabrewJobOutputs): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    compression_format: cdktf.stringToTerraform(struct!.compressionFormat),
    format: cdktf.stringToTerraform(struct!.format),
    format_options: dataAwsccDatabrewJobOutputsFormatOptionsToTerraform(struct!.formatOptions),
    location: dataAwsccDatabrewJobOutputsLocationToTerraform(struct!.location),
    overwrite: cdktf.booleanToTerraform(struct!.overwrite),
    partition_columns: cdktf.listMapper(cdktf.stringToTerraform)(struct!.partitionColumns),
  }
}

export class DataAwsccDatabrewJobProfileConfigurationColumnStatisticsConfigurationsSelectors extends cdktf.ComplexComputedList {

  // name - computed: true, optional: false, required: false
  public get name() {
    return this.getStringAttribute('name');
  }

  // regex - computed: true, optional: false, required: false
  public get regex() {
    return this.getStringAttribute('regex');
  }
}

export function dataAwsccDatabrewJobProfileConfigurationColumnStatisticsConfigurationsSelectorsToTerraform(struct?: DataAwsccDatabrewJobProfileConfigurationColumnStatisticsConfigurationsSelectors): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    name: cdktf.stringToTerraform(struct!.name),
    regex: cdktf.stringToTerraform(struct!.regex),
  }
}

export class DataAwsccDatabrewJobProfileConfigurationColumnStatisticsConfigurationsStatisticsOverrides extends cdktf.ComplexComputedList {

  // parameters - computed: true, optional: false, required: false
  public get parameters() {
    return this.interpolationForAttribute('parameters') as any;
  }

  // statistic - computed: true, optional: false, required: false
  public get statistic() {
    return this.getStringAttribute('statistic');
  }
}

export function dataAwsccDatabrewJobProfileConfigurationColumnStatisticsConfigurationsStatisticsOverridesToTerraform(struct?: DataAwsccDatabrewJobProfileConfigurationColumnStatisticsConfigurationsStatisticsOverrides): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    parameters: cdktf.hashMapper(cdktf.stringToTerraform)(struct!.parameters),
    statistic: cdktf.stringToTerraform(struct!.statistic),
  }
}

export class DataAwsccDatabrewJobProfileConfigurationColumnStatisticsConfigurationsStatistics extends cdktf.ComplexComputedList {

  // included_statistics - computed: true, optional: false, required: false
  public get includedStatistics() {
    return this.getListAttribute('included_statistics');
  }

  // overrides - computed: true, optional: false, required: false
  public get overrides() {
    return this.interpolationForAttribute('overrides') as any;
  }
}

export function dataAwsccDatabrewJobProfileConfigurationColumnStatisticsConfigurationsStatisticsToTerraform(struct?: DataAwsccDatabrewJobProfileConfigurationColumnStatisticsConfigurationsStatistics): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    included_statistics: cdktf.listMapper(cdktf.stringToTerraform)(struct!.includedStatistics),
    overrides: cdktf.listMapper(dataAwsccDatabrewJobProfileConfigurationColumnStatisticsConfigurationsStatisticsOverridesToTerraform)(struct!.overrides),
  }
}

export class DataAwsccDatabrewJobProfileConfigurationColumnStatisticsConfigurations extends cdktf.ComplexComputedList {

  // selectors - computed: true, optional: false, required: false
  public get selectors() {
    return this.interpolationForAttribute('selectors') as any;
  }

  // statistics - computed: true, optional: false, required: false
  public get statistics() {
    return this.interpolationForAttribute('statistics') as any;
  }
}

export function dataAwsccDatabrewJobProfileConfigurationColumnStatisticsConfigurationsToTerraform(struct?: DataAwsccDatabrewJobProfileConfigurationColumnStatisticsConfigurations): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    selectors: cdktf.listMapper(dataAwsccDatabrewJobProfileConfigurationColumnStatisticsConfigurationsSelectorsToTerraform)(struct!.selectors),
    statistics: dataAwsccDatabrewJobProfileConfigurationColumnStatisticsConfigurationsStatisticsToTerraform(struct!.statistics),
  }
}

export class DataAwsccDatabrewJobProfileConfigurationDatasetStatisticsConfigurationOverrides extends cdktf.ComplexComputedList {

  // parameters - computed: true, optional: false, required: false
  public get parameters() {
    return this.interpolationForAttribute('parameters') as any;
  }

  // statistic - computed: true, optional: false, required: false
  public get statistic() {
    return this.getStringAttribute('statistic');
  }
}

export function dataAwsccDatabrewJobProfileConfigurationDatasetStatisticsConfigurationOverridesToTerraform(struct?: DataAwsccDatabrewJobProfileConfigurationDatasetStatisticsConfigurationOverrides): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    parameters: cdktf.hashMapper(cdktf.stringToTerraform)(struct!.parameters),
    statistic: cdktf.stringToTerraform(struct!.statistic),
  }
}

export class DataAwsccDatabrewJobProfileConfigurationDatasetStatisticsConfiguration extends cdktf.ComplexComputedList {

  // included_statistics - computed: true, optional: false, required: false
  public get includedStatistics() {
    return this.getListAttribute('included_statistics');
  }

  // overrides - computed: true, optional: false, required: false
  public get overrides() {
    return this.interpolationForAttribute('overrides') as any;
  }
}

export function dataAwsccDatabrewJobProfileConfigurationDatasetStatisticsConfigurationToTerraform(struct?: DataAwsccDatabrewJobProfileConfigurationDatasetStatisticsConfiguration): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    included_statistics: cdktf.listMapper(cdktf.stringToTerraform)(struct!.includedStatistics),
    overrides: cdktf.listMapper(dataAwsccDatabrewJobProfileConfigurationDatasetStatisticsConfigurationOverridesToTerraform)(struct!.overrides),
  }
}

export class DataAwsccDatabrewJobProfileConfigurationProfileColumns extends cdktf.ComplexComputedList {

  // name - computed: true, optional: false, required: false
  public get name() {
    return this.getStringAttribute('name');
  }

  // regex - computed: true, optional: false, required: false
  public get regex() {
    return this.getStringAttribute('regex');
  }
}

export function dataAwsccDatabrewJobProfileConfigurationProfileColumnsToTerraform(struct?: DataAwsccDatabrewJobProfileConfigurationProfileColumns): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    name: cdktf.stringToTerraform(struct!.name),
    regex: cdktf.stringToTerraform(struct!.regex),
  }
}

export class DataAwsccDatabrewJobProfileConfiguration extends cdktf.ComplexComputedList {

  // column_statistics_configurations - computed: true, optional: false, required: false
  public get columnStatisticsConfigurations() {
    return this.interpolationForAttribute('column_statistics_configurations') as any;
  }

  // dataset_statistics_configuration - computed: true, optional: false, required: false
  public get datasetStatisticsConfiguration() {
    return this.interpolationForAttribute('dataset_statistics_configuration') as any;
  }

  // profile_columns - computed: true, optional: false, required: false
  public get profileColumns() {
    return this.interpolationForAttribute('profile_columns') as any;
  }
}

export function dataAwsccDatabrewJobProfileConfigurationToTerraform(struct?: DataAwsccDatabrewJobProfileConfiguration): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    column_statistics_configurations: cdktf.listMapper(dataAwsccDatabrewJobProfileConfigurationColumnStatisticsConfigurationsToTerraform)(struct!.columnStatisticsConfigurations),
    dataset_statistics_configuration: dataAwsccDatabrewJobProfileConfigurationDatasetStatisticsConfigurationToTerraform(struct!.datasetStatisticsConfiguration),
    profile_columns: cdktf.listMapper(dataAwsccDatabrewJobProfileConfigurationProfileColumnsToTerraform)(struct!.profileColumns),
  }
}

export class DataAwsccDatabrewJobRecipe extends cdktf.ComplexComputedList {

  // name - computed: true, optional: false, required: false
  public get name() {
    return this.getStringAttribute('name');
  }

  // version - computed: true, optional: false, required: false
  public get version() {
    return this.getStringAttribute('version');
  }
}

export function dataAwsccDatabrewJobRecipeToTerraform(struct?: DataAwsccDatabrewJobRecipe): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    name: cdktf.stringToTerraform(struct!.name),
    version: cdktf.stringToTerraform(struct!.version),
  }
}

export class DataAwsccDatabrewJobTags extends cdktf.ComplexComputedList {

  // key - computed: true, optional: false, required: false
  public get key() {
    return this.getStringAttribute('key');
  }

  // value - computed: true, optional: false, required: false
  public get value() {
    return this.getStringAttribute('value');
  }
}

export function dataAwsccDatabrewJobTagsToTerraform(struct?: DataAwsccDatabrewJobTags): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    key: cdktf.stringToTerraform(struct!.key),
    value: cdktf.stringToTerraform(struct!.value),
  }
}


/**
* Represents a {@link https://www.terraform.io/docs/providers/awscc/d/databrew_job.html awscc_databrew_job}
*/
export class DataAwsccDatabrewJob extends cdktf.TerraformDataSource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType: string = "awscc_databrew_job";

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
  public constructor(scope: Construct, id: string, config: DataAwsccDatabrewJobConfig) {
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
  public get dataCatalogOutputs() {
    return this.interpolationForAttribute('data_catalog_outputs') as any;
  }

  // database_outputs - computed: true, optional: false, required: false
  public get databaseOutputs() {
    return this.interpolationForAttribute('database_outputs') as any;
  }

  // dataset_name - computed: true, optional: false, required: false
  public get datasetName() {
    return this.getStringAttribute('dataset_name');
  }

  // encryption_key_arn - computed: true, optional: false, required: false
  public get encryptionKeyArn() {
    return this.getStringAttribute('encryption_key_arn');
  }

  // encryption_mode - computed: true, optional: false, required: false
  public get encryptionMode() {
    return this.getStringAttribute('encryption_mode');
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

  // job_sample - computed: true, optional: false, required: false
  public get jobSample() {
    return this.interpolationForAttribute('job_sample') as any;
  }

  // log_subscription - computed: true, optional: false, required: false
  public get logSubscription() {
    return this.getStringAttribute('log_subscription');
  }

  // max_capacity - computed: true, optional: false, required: false
  public get maxCapacity() {
    return this.getNumberAttribute('max_capacity');
  }

  // max_retries - computed: true, optional: false, required: false
  public get maxRetries() {
    return this.getNumberAttribute('max_retries');
  }

  // name - computed: true, optional: false, required: false
  public get name() {
    return this.getStringAttribute('name');
  }

  // output_location - computed: true, optional: false, required: false
  public get outputLocation() {
    return this.interpolationForAttribute('output_location') as any;
  }

  // outputs - computed: true, optional: false, required: false
  public get outputs() {
    return this.interpolationForAttribute('outputs') as any;
  }

  // profile_configuration - computed: true, optional: false, required: false
  public get profileConfiguration() {
    return this.interpolationForAttribute('profile_configuration') as any;
  }

  // project_name - computed: true, optional: false, required: false
  public get projectName() {
    return this.getStringAttribute('project_name');
  }

  // recipe - computed: true, optional: false, required: false
  public get recipe() {
    return this.interpolationForAttribute('recipe') as any;
  }

  // role_arn - computed: true, optional: false, required: false
  public get roleArn() {
    return this.getStringAttribute('role_arn');
  }

  // tags - computed: true, optional: false, required: false
  public get tags() {
    return this.interpolationForAttribute('tags') as any;
  }

  // timeout - computed: true, optional: false, required: false
  public get timeout() {
    return this.getNumberAttribute('timeout');
  }

  // type - computed: true, optional: false, required: false
  public get type() {
    return this.getStringAttribute('type');
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
