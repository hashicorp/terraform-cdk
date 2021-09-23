// https://www.terraform.io/docs/providers/awscc/r/databrew_job.html
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DatabrewJobConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/databrew_job.html#data_catalog_outputs DatabrewJob#data_catalog_outputs}
  */
  readonly dataCatalogOutputs?: DatabrewJobDataCatalogOutputs[];
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/databrew_job.html#database_outputs DatabrewJob#database_outputs}
  */
  readonly databaseOutputs?: DatabrewJobDatabaseOutputs[];
  /**
  * Dataset name
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/databrew_job.html#dataset_name DatabrewJob#dataset_name}
  */
  readonly datasetName?: string;
  /**
  * Encryption Key Arn
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/databrew_job.html#encryption_key_arn DatabrewJob#encryption_key_arn}
  */
  readonly encryptionKeyArn?: string;
  /**
  * Encryption mode
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/databrew_job.html#encryption_mode DatabrewJob#encryption_mode}
  */
  readonly encryptionMode?: string;
  /**
  * Job Sample
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/databrew_job.html#job_sample DatabrewJob#job_sample}
  */
  readonly jobSample?: DatabrewJobJobSample;
  /**
  * Log subscription
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/databrew_job.html#log_subscription DatabrewJob#log_subscription}
  */
  readonly logSubscription?: string;
  /**
  * Max capacity
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/databrew_job.html#max_capacity DatabrewJob#max_capacity}
  */
  readonly maxCapacity?: number;
  /**
  * Max retries
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/databrew_job.html#max_retries DatabrewJob#max_retries}
  */
  readonly maxRetries?: number;
  /**
  * Job name
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/databrew_job.html#name DatabrewJob#name}
  */
  readonly name: string;
  /**
  * Output location
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/databrew_job.html#output_location DatabrewJob#output_location}
  */
  readonly outputLocation?: DatabrewJobOutputLocation;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/databrew_job.html#outputs DatabrewJob#outputs}
  */
  readonly outputs?: DatabrewJobOutputs[];
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/databrew_job.html#profile_configuration DatabrewJob#profile_configuration}
  */
  readonly profileConfiguration?: DatabrewJobProfileConfiguration;
  /**
  * Project name
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/databrew_job.html#project_name DatabrewJob#project_name}
  */
  readonly projectName?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/databrew_job.html#recipe DatabrewJob#recipe}
  */
  readonly recipe?: DatabrewJobRecipe;
  /**
  * Role arn
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/databrew_job.html#role_arn DatabrewJob#role_arn}
  */
  readonly roleArn: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/databrew_job.html#tags DatabrewJob#tags}
  */
  readonly tags?: DatabrewJobTags[];
  /**
  * Timeout
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/databrew_job.html#timeout DatabrewJob#timeout}
  */
  readonly timeout?: number;
  /**
  * Job type
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/databrew_job.html#type DatabrewJob#type}
  */
  readonly type: string;
}
export interface DatabrewJobDataCatalogOutputsDatabaseOptionsTempDirectory {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/databrew_job.html#bucket DatabrewJob#bucket}
  */
  readonly bucket: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/databrew_job.html#key DatabrewJob#key}
  */
  readonly key?: string;
}

export function databrewJobDataCatalogOutputsDatabaseOptionsTempDirectoryToTerraform(struct?: DatabrewJobDataCatalogOutputsDatabaseOptionsTempDirectory): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    bucket: cdktf.stringToTerraform(struct!.bucket),
    key: cdktf.stringToTerraform(struct!.key),
  }
}

export interface DatabrewJobDataCatalogOutputsDatabaseOptions {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/databrew_job.html#table_name DatabrewJob#table_name}
  */
  readonly tableName: string;
  /**
  * S3 Output location
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/databrew_job.html#temp_directory DatabrewJob#temp_directory}
  */
  readonly tempDirectory?: DatabrewJobDataCatalogOutputsDatabaseOptionsTempDirectory;
}

export function databrewJobDataCatalogOutputsDatabaseOptionsToTerraform(struct?: DatabrewJobDataCatalogOutputsDatabaseOptions): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    table_name: cdktf.stringToTerraform(struct!.tableName),
    temp_directory: databrewJobDataCatalogOutputsDatabaseOptionsTempDirectoryToTerraform(struct!.tempDirectory),
  }
}

export interface DatabrewJobDataCatalogOutputsS3OptionsLocation {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/databrew_job.html#bucket DatabrewJob#bucket}
  */
  readonly bucket: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/databrew_job.html#key DatabrewJob#key}
  */
  readonly key?: string;
}

export function databrewJobDataCatalogOutputsS3OptionsLocationToTerraform(struct?: DatabrewJobDataCatalogOutputsS3OptionsLocation): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    bucket: cdktf.stringToTerraform(struct!.bucket),
    key: cdktf.stringToTerraform(struct!.key),
  }
}

export interface DatabrewJobDataCatalogOutputsS3Options {
  /**
  * S3 Output location
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/databrew_job.html#location DatabrewJob#location}
  */
  readonly location: DatabrewJobDataCatalogOutputsS3OptionsLocation;
}

export function databrewJobDataCatalogOutputsS3OptionsToTerraform(struct?: DatabrewJobDataCatalogOutputsS3Options): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    location: databrewJobDataCatalogOutputsS3OptionsLocationToTerraform(struct!.location),
  }
}

export interface DatabrewJobDataCatalogOutputs {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/databrew_job.html#catalog_id DatabrewJob#catalog_id}
  */
  readonly catalogId?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/databrew_job.html#database_name DatabrewJob#database_name}
  */
  readonly databaseName: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/databrew_job.html#database_options DatabrewJob#database_options}
  */
  readonly databaseOptions?: DatabrewJobDataCatalogOutputsDatabaseOptions;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/databrew_job.html#overwrite DatabrewJob#overwrite}
  */
  readonly overwrite?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/databrew_job.html#s3_options DatabrewJob#s3_options}
  */
  readonly s3Options?: DatabrewJobDataCatalogOutputsS3Options;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/databrew_job.html#table_name DatabrewJob#table_name}
  */
  readonly tableName: string;
}

export function databrewJobDataCatalogOutputsToTerraform(struct?: DatabrewJobDataCatalogOutputs): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    catalog_id: cdktf.stringToTerraform(struct!.catalogId),
    database_name: cdktf.stringToTerraform(struct!.databaseName),
    database_options: databrewJobDataCatalogOutputsDatabaseOptionsToTerraform(struct!.databaseOptions),
    overwrite: cdktf.booleanToTerraform(struct!.overwrite),
    s3_options: databrewJobDataCatalogOutputsS3OptionsToTerraform(struct!.s3Options),
    table_name: cdktf.stringToTerraform(struct!.tableName),
  }
}

export interface DatabrewJobDatabaseOutputsDatabaseOptionsTempDirectory {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/databrew_job.html#bucket DatabrewJob#bucket}
  */
  readonly bucket: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/databrew_job.html#key DatabrewJob#key}
  */
  readonly key?: string;
}

export function databrewJobDatabaseOutputsDatabaseOptionsTempDirectoryToTerraform(struct?: DatabrewJobDatabaseOutputsDatabaseOptionsTempDirectory): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    bucket: cdktf.stringToTerraform(struct!.bucket),
    key: cdktf.stringToTerraform(struct!.key),
  }
}

export interface DatabrewJobDatabaseOutputsDatabaseOptions {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/databrew_job.html#table_name DatabrewJob#table_name}
  */
  readonly tableName: string;
  /**
  * S3 Output location
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/databrew_job.html#temp_directory DatabrewJob#temp_directory}
  */
  readonly tempDirectory?: DatabrewJobDatabaseOutputsDatabaseOptionsTempDirectory;
}

export function databrewJobDatabaseOutputsDatabaseOptionsToTerraform(struct?: DatabrewJobDatabaseOutputsDatabaseOptions): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    table_name: cdktf.stringToTerraform(struct!.tableName),
    temp_directory: databrewJobDatabaseOutputsDatabaseOptionsTempDirectoryToTerraform(struct!.tempDirectory),
  }
}

export interface DatabrewJobDatabaseOutputs {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/databrew_job.html#database_options DatabrewJob#database_options}
  */
  readonly databaseOptions: DatabrewJobDatabaseOutputsDatabaseOptions;
  /**
  * Database table name
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/databrew_job.html#database_output_mode DatabrewJob#database_output_mode}
  */
  readonly databaseOutputMode?: string;
  /**
  * Glue connection name
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/databrew_job.html#glue_connection_name DatabrewJob#glue_connection_name}
  */
  readonly glueConnectionName: string;
}

export function databrewJobDatabaseOutputsToTerraform(struct?: DatabrewJobDatabaseOutputs): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    database_options: databrewJobDatabaseOutputsDatabaseOptionsToTerraform(struct!.databaseOptions),
    database_output_mode: cdktf.stringToTerraform(struct!.databaseOutputMode),
    glue_connection_name: cdktf.stringToTerraform(struct!.glueConnectionName),
  }
}

export interface DatabrewJobJobSample {
  /**
  * Sample configuration mode for profile jobs.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/databrew_job.html#mode DatabrewJob#mode}
  */
  readonly mode?: string;
  /**
  * Sample configuration size for profile jobs.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/databrew_job.html#size DatabrewJob#size}
  */
  readonly size?: number;
}

export function databrewJobJobSampleToTerraform(struct?: DatabrewJobJobSample): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    mode: cdktf.stringToTerraform(struct!.mode),
    size: cdktf.numberToTerraform(struct!.size),
  }
}

export interface DatabrewJobOutputLocation {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/databrew_job.html#bucket DatabrewJob#bucket}
  */
  readonly bucket: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/databrew_job.html#key DatabrewJob#key}
  */
  readonly key?: string;
}

export function databrewJobOutputLocationToTerraform(struct?: DatabrewJobOutputLocation): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    bucket: cdktf.stringToTerraform(struct!.bucket),
    key: cdktf.stringToTerraform(struct!.key),
  }
}

export interface DatabrewJobOutputsFormatOptionsCsv {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/databrew_job.html#delimiter DatabrewJob#delimiter}
  */
  readonly delimiter?: string;
}

export function databrewJobOutputsFormatOptionsCsvToTerraform(struct?: DatabrewJobOutputsFormatOptionsCsv): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    delimiter: cdktf.stringToTerraform(struct!.delimiter),
  }
}

export interface DatabrewJobOutputsFormatOptions {
  /**
  * Output Csv options
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/databrew_job.html#csv DatabrewJob#csv}
  */
  readonly csv?: DatabrewJobOutputsFormatOptionsCsv;
}

export function databrewJobOutputsFormatOptionsToTerraform(struct?: DatabrewJobOutputsFormatOptions): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    csv: databrewJobOutputsFormatOptionsCsvToTerraform(struct!.csv),
  }
}

export interface DatabrewJobOutputsLocation {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/databrew_job.html#bucket DatabrewJob#bucket}
  */
  readonly bucket: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/databrew_job.html#key DatabrewJob#key}
  */
  readonly key?: string;
}

export function databrewJobOutputsLocationToTerraform(struct?: DatabrewJobOutputsLocation): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    bucket: cdktf.stringToTerraform(struct!.bucket),
    key: cdktf.stringToTerraform(struct!.key),
  }
}

export interface DatabrewJobOutputs {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/databrew_job.html#compression_format DatabrewJob#compression_format}
  */
  readonly compressionFormat?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/databrew_job.html#format DatabrewJob#format}
  */
  readonly format?: string;
  /**
  * Format options for job Output
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/databrew_job.html#format_options DatabrewJob#format_options}
  */
  readonly formatOptions?: DatabrewJobOutputsFormatOptions;
  /**
  * S3 Output location
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/databrew_job.html#location DatabrewJob#location}
  */
  readonly location: DatabrewJobOutputsLocation;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/databrew_job.html#overwrite DatabrewJob#overwrite}
  */
  readonly overwrite?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/databrew_job.html#partition_columns DatabrewJob#partition_columns}
  */
  readonly partitionColumns?: string[];
}

export function databrewJobOutputsToTerraform(struct?: DatabrewJobOutputs): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    compression_format: cdktf.stringToTerraform(struct!.compressionFormat),
    format: cdktf.stringToTerraform(struct!.format),
    format_options: databrewJobOutputsFormatOptionsToTerraform(struct!.formatOptions),
    location: databrewJobOutputsLocationToTerraform(struct!.location),
    overwrite: cdktf.booleanToTerraform(struct!.overwrite),
    partition_columns: cdktf.listMapper(cdktf.stringToTerraform)(struct!.partitionColumns),
  }
}

export interface DatabrewJobProfileConfigurationColumnStatisticsConfigurationsSelectors {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/databrew_job.html#name DatabrewJob#name}
  */
  readonly name?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/databrew_job.html#regex DatabrewJob#regex}
  */
  readonly regex?: string;
}

export function databrewJobProfileConfigurationColumnStatisticsConfigurationsSelectorsToTerraform(struct?: DatabrewJobProfileConfigurationColumnStatisticsConfigurationsSelectors): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    name: cdktf.stringToTerraform(struct!.name),
    regex: cdktf.stringToTerraform(struct!.regex),
  }
}

export interface DatabrewJobProfileConfigurationColumnStatisticsConfigurationsStatisticsOverrides {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/databrew_job.html#parameters DatabrewJob#parameters}
  */
  readonly parameters: { [key: string]: string } | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/databrew_job.html#statistic DatabrewJob#statistic}
  */
  readonly statistic: string;
}

export function databrewJobProfileConfigurationColumnStatisticsConfigurationsStatisticsOverridesToTerraform(struct?: DatabrewJobProfileConfigurationColumnStatisticsConfigurationsStatisticsOverrides): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    parameters: cdktf.hashMapper(cdktf.anyToTerraform)(struct!.parameters),
    statistic: cdktf.stringToTerraform(struct!.statistic),
  }
}

export interface DatabrewJobProfileConfigurationColumnStatisticsConfigurationsStatistics {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/databrew_job.html#included_statistics DatabrewJob#included_statistics}
  */
  readonly includedStatistics?: string[];
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/databrew_job.html#overrides DatabrewJob#overrides}
  */
  readonly overrides?: DatabrewJobProfileConfigurationColumnStatisticsConfigurationsStatisticsOverrides[];
}

export function databrewJobProfileConfigurationColumnStatisticsConfigurationsStatisticsToTerraform(struct?: DatabrewJobProfileConfigurationColumnStatisticsConfigurationsStatistics): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    included_statistics: cdktf.listMapper(cdktf.stringToTerraform)(struct!.includedStatistics),
    overrides: cdktf.listMapper(databrewJobProfileConfigurationColumnStatisticsConfigurationsStatisticsOverridesToTerraform)(struct!.overrides),
  }
}

export interface DatabrewJobProfileConfigurationColumnStatisticsConfigurations {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/databrew_job.html#selectors DatabrewJob#selectors}
  */
  readonly selectors?: DatabrewJobProfileConfigurationColumnStatisticsConfigurationsSelectors[];
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/databrew_job.html#statistics DatabrewJob#statistics}
  */
  readonly statistics: DatabrewJobProfileConfigurationColumnStatisticsConfigurationsStatistics;
}

export function databrewJobProfileConfigurationColumnStatisticsConfigurationsToTerraform(struct?: DatabrewJobProfileConfigurationColumnStatisticsConfigurations): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    selectors: cdktf.listMapper(databrewJobProfileConfigurationColumnStatisticsConfigurationsSelectorsToTerraform)(struct!.selectors),
    statistics: databrewJobProfileConfigurationColumnStatisticsConfigurationsStatisticsToTerraform(struct!.statistics),
  }
}

export interface DatabrewJobProfileConfigurationDatasetStatisticsConfigurationOverrides {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/databrew_job.html#parameters DatabrewJob#parameters}
  */
  readonly parameters: { [key: string]: string } | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/databrew_job.html#statistic DatabrewJob#statistic}
  */
  readonly statistic: string;
}

export function databrewJobProfileConfigurationDatasetStatisticsConfigurationOverridesToTerraform(struct?: DatabrewJobProfileConfigurationDatasetStatisticsConfigurationOverrides): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    parameters: cdktf.hashMapper(cdktf.anyToTerraform)(struct!.parameters),
    statistic: cdktf.stringToTerraform(struct!.statistic),
  }
}

export interface DatabrewJobProfileConfigurationDatasetStatisticsConfiguration {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/databrew_job.html#included_statistics DatabrewJob#included_statistics}
  */
  readonly includedStatistics?: string[];
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/databrew_job.html#overrides DatabrewJob#overrides}
  */
  readonly overrides?: DatabrewJobProfileConfigurationDatasetStatisticsConfigurationOverrides[];
}

export function databrewJobProfileConfigurationDatasetStatisticsConfigurationToTerraform(struct?: DatabrewJobProfileConfigurationDatasetStatisticsConfiguration): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    included_statistics: cdktf.listMapper(cdktf.stringToTerraform)(struct!.includedStatistics),
    overrides: cdktf.listMapper(databrewJobProfileConfigurationDatasetStatisticsConfigurationOverridesToTerraform)(struct!.overrides),
  }
}

export interface DatabrewJobProfileConfigurationProfileColumns {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/databrew_job.html#name DatabrewJob#name}
  */
  readonly name?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/databrew_job.html#regex DatabrewJob#regex}
  */
  readonly regex?: string;
}

export function databrewJobProfileConfigurationProfileColumnsToTerraform(struct?: DatabrewJobProfileConfigurationProfileColumns): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    name: cdktf.stringToTerraform(struct!.name),
    regex: cdktf.stringToTerraform(struct!.regex),
  }
}

export interface DatabrewJobProfileConfiguration {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/databrew_job.html#column_statistics_configurations DatabrewJob#column_statistics_configurations}
  */
  readonly columnStatisticsConfigurations?: DatabrewJobProfileConfigurationColumnStatisticsConfigurations[];
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/databrew_job.html#dataset_statistics_configuration DatabrewJob#dataset_statistics_configuration}
  */
  readonly datasetStatisticsConfiguration?: DatabrewJobProfileConfigurationDatasetStatisticsConfiguration;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/databrew_job.html#profile_columns DatabrewJob#profile_columns}
  */
  readonly profileColumns?: DatabrewJobProfileConfigurationProfileColumns[];
}

export function databrewJobProfileConfigurationToTerraform(struct?: DatabrewJobProfileConfiguration): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    column_statistics_configurations: cdktf.listMapper(databrewJobProfileConfigurationColumnStatisticsConfigurationsToTerraform)(struct!.columnStatisticsConfigurations),
    dataset_statistics_configuration: databrewJobProfileConfigurationDatasetStatisticsConfigurationToTerraform(struct!.datasetStatisticsConfiguration),
    profile_columns: cdktf.listMapper(databrewJobProfileConfigurationProfileColumnsToTerraform)(struct!.profileColumns),
  }
}

export interface DatabrewJobRecipe {
  /**
  * Recipe name
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/databrew_job.html#name DatabrewJob#name}
  */
  readonly name: string;
  /**
  * Recipe version
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/databrew_job.html#version DatabrewJob#version}
  */
  readonly version?: string;
}

export function databrewJobRecipeToTerraform(struct?: DatabrewJobRecipe): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    name: cdktf.stringToTerraform(struct!.name),
    version: cdktf.stringToTerraform(struct!.version),
  }
}

export interface DatabrewJobTags {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/databrew_job.html#key DatabrewJob#key}
  */
  readonly key: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/databrew_job.html#value DatabrewJob#value}
  */
  readonly value: string;
}

export function databrewJobTagsToTerraform(struct?: DatabrewJobTags): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    key: cdktf.stringToTerraform(struct!.key),
    value: cdktf.stringToTerraform(struct!.value),
  }
}


/**
* Represents a {@link https://www.terraform.io/docs/providers/awscc/r/databrew_job.html awscc_databrew_job}
*/
export class DatabrewJob extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType: string = "awscc_databrew_job";

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
  public constructor(scope: Construct, id: string, config: DatabrewJobConfig) {
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

  // ==========
  // ATTRIBUTES
  // ==========

  // data_catalog_outputs - computed: false, optional: true, required: false
  private _dataCatalogOutputs?: DatabrewJobDataCatalogOutputs[];
  public get dataCatalogOutputs() {
    return this.interpolationForAttribute('data_catalog_outputs') as any;
  }
  public set dataCatalogOutputs(value: DatabrewJobDataCatalogOutputs[] ) {
    this._dataCatalogOutputs = value;
  }
  public resetDataCatalogOutputs() {
    this._dataCatalogOutputs = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dataCatalogOutputsInput() {
    return this._dataCatalogOutputs
  }

  // database_outputs - computed: false, optional: true, required: false
  private _databaseOutputs?: DatabrewJobDatabaseOutputs[];
  public get databaseOutputs() {
    return this.interpolationForAttribute('database_outputs') as any;
  }
  public set databaseOutputs(value: DatabrewJobDatabaseOutputs[] ) {
    this._databaseOutputs = value;
  }
  public resetDatabaseOutputs() {
    this._databaseOutputs = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get databaseOutputsInput() {
    return this._databaseOutputs
  }

  // dataset_name - computed: false, optional: true, required: false
  private _datasetName?: string;
  public get datasetName() {
    return this.getStringAttribute('dataset_name');
  }
  public set datasetName(value: string ) {
    this._datasetName = value;
  }
  public resetDatasetName() {
    this._datasetName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get datasetNameInput() {
    return this._datasetName
  }

  // encryption_key_arn - computed: false, optional: true, required: false
  private _encryptionKeyArn?: string;
  public get encryptionKeyArn() {
    return this.getStringAttribute('encryption_key_arn');
  }
  public set encryptionKeyArn(value: string ) {
    this._encryptionKeyArn = value;
  }
  public resetEncryptionKeyArn() {
    this._encryptionKeyArn = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get encryptionKeyArnInput() {
    return this._encryptionKeyArn
  }

  // encryption_mode - computed: false, optional: true, required: false
  private _encryptionMode?: string;
  public get encryptionMode() {
    return this.getStringAttribute('encryption_mode');
  }
  public set encryptionMode(value: string ) {
    this._encryptionMode = value;
  }
  public resetEncryptionMode() {
    this._encryptionMode = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get encryptionModeInput() {
    return this._encryptionMode
  }

  // id - computed: true, optional: false, required: false
  public get id() {
    return this.getStringAttribute('id');
  }

  // job_sample - computed: false, optional: true, required: false
  private _jobSample?: DatabrewJobJobSample;
  public get jobSample() {
    return this.interpolationForAttribute('job_sample') as any;
  }
  public set jobSample(value: DatabrewJobJobSample ) {
    this._jobSample = value;
  }
  public resetJobSample() {
    this._jobSample = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get jobSampleInput() {
    return this._jobSample
  }

  // log_subscription - computed: false, optional: true, required: false
  private _logSubscription?: string;
  public get logSubscription() {
    return this.getStringAttribute('log_subscription');
  }
  public set logSubscription(value: string ) {
    this._logSubscription = value;
  }
  public resetLogSubscription() {
    this._logSubscription = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get logSubscriptionInput() {
    return this._logSubscription
  }

  // max_capacity - computed: false, optional: true, required: false
  private _maxCapacity?: number;
  public get maxCapacity() {
    return this.getNumberAttribute('max_capacity');
  }
  public set maxCapacity(value: number ) {
    this._maxCapacity = value;
  }
  public resetMaxCapacity() {
    this._maxCapacity = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get maxCapacityInput() {
    return this._maxCapacity
  }

  // max_retries - computed: false, optional: true, required: false
  private _maxRetries?: number;
  public get maxRetries() {
    return this.getNumberAttribute('max_retries');
  }
  public set maxRetries(value: number ) {
    this._maxRetries = value;
  }
  public resetMaxRetries() {
    this._maxRetries = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get maxRetriesInput() {
    return this._maxRetries
  }

  // name - computed: false, optional: false, required: true
  private _name: string;
  public get name() {
    return this.getStringAttribute('name');
  }
  public set name(value: string) {
    this._name = value;
  }
  // Temporarily expose input value. Use with caution.
  public get nameInput() {
    return this._name
  }

  // output_location - computed: false, optional: true, required: false
  private _outputLocation?: DatabrewJobOutputLocation;
  public get outputLocation() {
    return this.interpolationForAttribute('output_location') as any;
  }
  public set outputLocation(value: DatabrewJobOutputLocation ) {
    this._outputLocation = value;
  }
  public resetOutputLocation() {
    this._outputLocation = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get outputLocationInput() {
    return this._outputLocation
  }

  // outputs - computed: false, optional: true, required: false
  private _outputs?: DatabrewJobOutputs[];
  public get outputs() {
    return this.interpolationForAttribute('outputs') as any;
  }
  public set outputs(value: DatabrewJobOutputs[] ) {
    this._outputs = value;
  }
  public resetOutputs() {
    this._outputs = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get outputsInput() {
    return this._outputs
  }

  // profile_configuration - computed: false, optional: true, required: false
  private _profileConfiguration?: DatabrewJobProfileConfiguration;
  public get profileConfiguration() {
    return this.interpolationForAttribute('profile_configuration') as any;
  }
  public set profileConfiguration(value: DatabrewJobProfileConfiguration ) {
    this._profileConfiguration = value;
  }
  public resetProfileConfiguration() {
    this._profileConfiguration = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get profileConfigurationInput() {
    return this._profileConfiguration
  }

  // project_name - computed: false, optional: true, required: false
  private _projectName?: string;
  public get projectName() {
    return this.getStringAttribute('project_name');
  }
  public set projectName(value: string ) {
    this._projectName = value;
  }
  public resetProjectName() {
    this._projectName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get projectNameInput() {
    return this._projectName
  }

  // recipe - computed: false, optional: true, required: false
  private _recipe?: DatabrewJobRecipe;
  public get recipe() {
    return this.interpolationForAttribute('recipe') as any;
  }
  public set recipe(value: DatabrewJobRecipe ) {
    this._recipe = value;
  }
  public resetRecipe() {
    this._recipe = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get recipeInput() {
    return this._recipe
  }

  // role_arn - computed: false, optional: false, required: true
  private _roleArn: string;
  public get roleArn() {
    return this.getStringAttribute('role_arn');
  }
  public set roleArn(value: string) {
    this._roleArn = value;
  }
  // Temporarily expose input value. Use with caution.
  public get roleArnInput() {
    return this._roleArn
  }

  // tags - computed: true, optional: true, required: false
  private _tags?: DatabrewJobTags[];
  public get tags() {
    return this.interpolationForAttribute('tags') as any;
  }
  public set tags(value: DatabrewJobTags[]) {
    this._tags = value;
  }
  public resetTags() {
    this._tags = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tagsInput() {
    return this._tags
  }

  // timeout - computed: false, optional: true, required: false
  private _timeout?: number;
  public get timeout() {
    return this.getNumberAttribute('timeout');
  }
  public set timeout(value: number ) {
    this._timeout = value;
  }
  public resetTimeout() {
    this._timeout = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get timeoutInput() {
    return this._timeout
  }

  // type - computed: false, optional: false, required: true
  private _type: string;
  public get type() {
    return this.getStringAttribute('type');
  }
  public set type(value: string) {
    this._type = value;
  }
  // Temporarily expose input value. Use with caution.
  public get typeInput() {
    return this._type
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
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
