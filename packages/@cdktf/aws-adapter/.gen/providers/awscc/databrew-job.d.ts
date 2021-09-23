import { Construct } from 'constructs';
import * as cdktf from 'cdktf';
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
export declare function databrewJobDataCatalogOutputsDatabaseOptionsTempDirectoryToTerraform(struct?: DatabrewJobDataCatalogOutputsDatabaseOptionsTempDirectory): any;
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
export declare function databrewJobDataCatalogOutputsDatabaseOptionsToTerraform(struct?: DatabrewJobDataCatalogOutputsDatabaseOptions): any;
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
export declare function databrewJobDataCatalogOutputsS3OptionsLocationToTerraform(struct?: DatabrewJobDataCatalogOutputsS3OptionsLocation): any;
export interface DatabrewJobDataCatalogOutputsS3Options {
    /**
    * S3 Output location
    *
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/databrew_job.html#location DatabrewJob#location}
    */
    readonly location: DatabrewJobDataCatalogOutputsS3OptionsLocation;
}
export declare function databrewJobDataCatalogOutputsS3OptionsToTerraform(struct?: DatabrewJobDataCatalogOutputsS3Options): any;
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
export declare function databrewJobDataCatalogOutputsToTerraform(struct?: DatabrewJobDataCatalogOutputs): any;
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
export declare function databrewJobDatabaseOutputsDatabaseOptionsTempDirectoryToTerraform(struct?: DatabrewJobDatabaseOutputsDatabaseOptionsTempDirectory): any;
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
export declare function databrewJobDatabaseOutputsDatabaseOptionsToTerraform(struct?: DatabrewJobDatabaseOutputsDatabaseOptions): any;
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
export declare function databrewJobDatabaseOutputsToTerraform(struct?: DatabrewJobDatabaseOutputs): any;
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
export declare function databrewJobJobSampleToTerraform(struct?: DatabrewJobJobSample): any;
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
export declare function databrewJobOutputLocationToTerraform(struct?: DatabrewJobOutputLocation): any;
export interface DatabrewJobOutputsFormatOptionsCsv {
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/databrew_job.html#delimiter DatabrewJob#delimiter}
    */
    readonly delimiter?: string;
}
export declare function databrewJobOutputsFormatOptionsCsvToTerraform(struct?: DatabrewJobOutputsFormatOptionsCsv): any;
export interface DatabrewJobOutputsFormatOptions {
    /**
    * Output Csv options
    *
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/databrew_job.html#csv DatabrewJob#csv}
    */
    readonly csv?: DatabrewJobOutputsFormatOptionsCsv;
}
export declare function databrewJobOutputsFormatOptionsToTerraform(struct?: DatabrewJobOutputsFormatOptions): any;
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
export declare function databrewJobOutputsLocationToTerraform(struct?: DatabrewJobOutputsLocation): any;
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
export declare function databrewJobOutputsToTerraform(struct?: DatabrewJobOutputs): any;
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
export declare function databrewJobProfileConfigurationColumnStatisticsConfigurationsSelectorsToTerraform(struct?: DatabrewJobProfileConfigurationColumnStatisticsConfigurationsSelectors): any;
export interface DatabrewJobProfileConfigurationColumnStatisticsConfigurationsStatisticsOverrides {
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/databrew_job.html#parameters DatabrewJob#parameters}
    */
    readonly parameters: {
        [key: string]: string;
    } | cdktf.IResolvable;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/databrew_job.html#statistic DatabrewJob#statistic}
    */
    readonly statistic: string;
}
export declare function databrewJobProfileConfigurationColumnStatisticsConfigurationsStatisticsOverridesToTerraform(struct?: DatabrewJobProfileConfigurationColumnStatisticsConfigurationsStatisticsOverrides): any;
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
export declare function databrewJobProfileConfigurationColumnStatisticsConfigurationsStatisticsToTerraform(struct?: DatabrewJobProfileConfigurationColumnStatisticsConfigurationsStatistics): any;
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
export declare function databrewJobProfileConfigurationColumnStatisticsConfigurationsToTerraform(struct?: DatabrewJobProfileConfigurationColumnStatisticsConfigurations): any;
export interface DatabrewJobProfileConfigurationDatasetStatisticsConfigurationOverrides {
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/databrew_job.html#parameters DatabrewJob#parameters}
    */
    readonly parameters: {
        [key: string]: string;
    } | cdktf.IResolvable;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/databrew_job.html#statistic DatabrewJob#statistic}
    */
    readonly statistic: string;
}
export declare function databrewJobProfileConfigurationDatasetStatisticsConfigurationOverridesToTerraform(struct?: DatabrewJobProfileConfigurationDatasetStatisticsConfigurationOverrides): any;
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
export declare function databrewJobProfileConfigurationDatasetStatisticsConfigurationToTerraform(struct?: DatabrewJobProfileConfigurationDatasetStatisticsConfiguration): any;
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
export declare function databrewJobProfileConfigurationProfileColumnsToTerraform(struct?: DatabrewJobProfileConfigurationProfileColumns): any;
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
export declare function databrewJobProfileConfigurationToTerraform(struct?: DatabrewJobProfileConfiguration): any;
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
export declare function databrewJobRecipeToTerraform(struct?: DatabrewJobRecipe): any;
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
export declare function databrewJobTagsToTerraform(struct?: DatabrewJobTags): any;
/**
* Represents a {@link https://www.terraform.io/docs/providers/awscc/r/databrew_job.html awscc_databrew_job}
*/
export declare class DatabrewJob extends cdktf.TerraformResource {
    static readonly tfResourceType: string;
    /**
    * Create a new {@link https://www.terraform.io/docs/providers/awscc/r/databrew_job.html awscc_databrew_job} Resource
    *
    * @param scope The scope in which to define this construct
    * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
    * @param options DatabrewJobConfig
    */
    constructor(scope: Construct, id: string, config: DatabrewJobConfig);
    private _dataCatalogOutputs?;
    get dataCatalogOutputs(): DatabrewJobDataCatalogOutputs[];
    set dataCatalogOutputs(value: DatabrewJobDataCatalogOutputs[]);
    resetDataCatalogOutputs(): void;
    get dataCatalogOutputsInput(): DatabrewJobDataCatalogOutputs[] | undefined;
    private _databaseOutputs?;
    get databaseOutputs(): DatabrewJobDatabaseOutputs[];
    set databaseOutputs(value: DatabrewJobDatabaseOutputs[]);
    resetDatabaseOutputs(): void;
    get databaseOutputsInput(): DatabrewJobDatabaseOutputs[] | undefined;
    private _datasetName?;
    get datasetName(): string;
    set datasetName(value: string);
    resetDatasetName(): void;
    get datasetNameInput(): string | undefined;
    private _encryptionKeyArn?;
    get encryptionKeyArn(): string;
    set encryptionKeyArn(value: string);
    resetEncryptionKeyArn(): void;
    get encryptionKeyArnInput(): string | undefined;
    private _encryptionMode?;
    get encryptionMode(): string;
    set encryptionMode(value: string);
    resetEncryptionMode(): void;
    get encryptionModeInput(): string | undefined;
    get id(): string;
    private _jobSample?;
    get jobSample(): DatabrewJobJobSample;
    set jobSample(value: DatabrewJobJobSample);
    resetJobSample(): void;
    get jobSampleInput(): DatabrewJobJobSample | undefined;
    private _logSubscription?;
    get logSubscription(): string;
    set logSubscription(value: string);
    resetLogSubscription(): void;
    get logSubscriptionInput(): string | undefined;
    private _maxCapacity?;
    get maxCapacity(): number;
    set maxCapacity(value: number);
    resetMaxCapacity(): void;
    get maxCapacityInput(): number | undefined;
    private _maxRetries?;
    get maxRetries(): number;
    set maxRetries(value: number);
    resetMaxRetries(): void;
    get maxRetriesInput(): number | undefined;
    private _name;
    get name(): string;
    set name(value: string);
    get nameInput(): string;
    private _outputLocation?;
    get outputLocation(): DatabrewJobOutputLocation;
    set outputLocation(value: DatabrewJobOutputLocation);
    resetOutputLocation(): void;
    get outputLocationInput(): DatabrewJobOutputLocation | undefined;
    private _outputs?;
    get outputs(): DatabrewJobOutputs[];
    set outputs(value: DatabrewJobOutputs[]);
    resetOutputs(): void;
    get outputsInput(): DatabrewJobOutputs[] | undefined;
    private _profileConfiguration?;
    get profileConfiguration(): DatabrewJobProfileConfiguration;
    set profileConfiguration(value: DatabrewJobProfileConfiguration);
    resetProfileConfiguration(): void;
    get profileConfigurationInput(): DatabrewJobProfileConfiguration | undefined;
    private _projectName?;
    get projectName(): string;
    set projectName(value: string);
    resetProjectName(): void;
    get projectNameInput(): string | undefined;
    private _recipe?;
    get recipe(): DatabrewJobRecipe;
    set recipe(value: DatabrewJobRecipe);
    resetRecipe(): void;
    get recipeInput(): DatabrewJobRecipe | undefined;
    private _roleArn;
    get roleArn(): string;
    set roleArn(value: string);
    get roleArnInput(): string;
    private _tags?;
    get tags(): DatabrewJobTags[];
    set tags(value: DatabrewJobTags[]);
    resetTags(): void;
    get tagsInput(): DatabrewJobTags[] | undefined;
    private _timeout?;
    get timeout(): number;
    set timeout(value: number);
    resetTimeout(): void;
    get timeoutInput(): number | undefined;
    private _type;
    get type(): string;
    set type(value: string);
    get typeInput(): string;
    protected synthesizeAttributes(): {
        [name: string]: any;
    };
}
