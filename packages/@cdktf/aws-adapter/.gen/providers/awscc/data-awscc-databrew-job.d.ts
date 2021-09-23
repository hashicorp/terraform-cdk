import { Construct } from 'constructs';
import * as cdktf from 'cdktf';
export interface DataAwsccDatabrewJobConfig extends cdktf.TerraformMetaArguments {
    /**
    * Uniquely identifies the resource.
    *
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/d/databrew_job.html#id DataAwsccDatabrewJob#id}
    */
    readonly id: string;
}
export declare class DataAwsccDatabrewJobDataCatalogOutputsDatabaseOptionsTempDirectory extends cdktf.ComplexComputedList {
    get bucket(): string;
    get key(): string;
}
export declare function dataAwsccDatabrewJobDataCatalogOutputsDatabaseOptionsTempDirectoryToTerraform(struct?: DataAwsccDatabrewJobDataCatalogOutputsDatabaseOptionsTempDirectory): any;
export declare class DataAwsccDatabrewJobDataCatalogOutputsDatabaseOptions extends cdktf.ComplexComputedList {
    get tableName(): string;
    get tempDirectory(): any;
}
export declare function dataAwsccDatabrewJobDataCatalogOutputsDatabaseOptionsToTerraform(struct?: DataAwsccDatabrewJobDataCatalogOutputsDatabaseOptions): any;
export declare class DataAwsccDatabrewJobDataCatalogOutputsS3OptionsLocation extends cdktf.ComplexComputedList {
    get bucket(): string;
    get key(): string;
}
export declare function dataAwsccDatabrewJobDataCatalogOutputsS3OptionsLocationToTerraform(struct?: DataAwsccDatabrewJobDataCatalogOutputsS3OptionsLocation): any;
export declare class DataAwsccDatabrewJobDataCatalogOutputsS3Options extends cdktf.ComplexComputedList {
    get location(): any;
}
export declare function dataAwsccDatabrewJobDataCatalogOutputsS3OptionsToTerraform(struct?: DataAwsccDatabrewJobDataCatalogOutputsS3Options): any;
export declare class DataAwsccDatabrewJobDataCatalogOutputs extends cdktf.ComplexComputedList {
    get catalogId(): string;
    get databaseName(): string;
    get databaseOptions(): any;
    get overwrite(): any;
    get s3Options(): any;
    get tableName(): string;
}
export declare function dataAwsccDatabrewJobDataCatalogOutputsToTerraform(struct?: DataAwsccDatabrewJobDataCatalogOutputs): any;
export declare class DataAwsccDatabrewJobDatabaseOutputsDatabaseOptionsTempDirectory extends cdktf.ComplexComputedList {
    get bucket(): string;
    get key(): string;
}
export declare function dataAwsccDatabrewJobDatabaseOutputsDatabaseOptionsTempDirectoryToTerraform(struct?: DataAwsccDatabrewJobDatabaseOutputsDatabaseOptionsTempDirectory): any;
export declare class DataAwsccDatabrewJobDatabaseOutputsDatabaseOptions extends cdktf.ComplexComputedList {
    get tableName(): string;
    get tempDirectory(): any;
}
export declare function dataAwsccDatabrewJobDatabaseOutputsDatabaseOptionsToTerraform(struct?: DataAwsccDatabrewJobDatabaseOutputsDatabaseOptions): any;
export declare class DataAwsccDatabrewJobDatabaseOutputs extends cdktf.ComplexComputedList {
    get databaseOptions(): any;
    get databaseOutputMode(): string;
    get glueConnectionName(): string;
}
export declare function dataAwsccDatabrewJobDatabaseOutputsToTerraform(struct?: DataAwsccDatabrewJobDatabaseOutputs): any;
export declare class DataAwsccDatabrewJobJobSample extends cdktf.ComplexComputedList {
    get mode(): string;
    get size(): number;
}
export declare function dataAwsccDatabrewJobJobSampleToTerraform(struct?: DataAwsccDatabrewJobJobSample): any;
export declare class DataAwsccDatabrewJobOutputLocation extends cdktf.ComplexComputedList {
    get bucket(): string;
    get key(): string;
}
export declare function dataAwsccDatabrewJobOutputLocationToTerraform(struct?: DataAwsccDatabrewJobOutputLocation): any;
export declare class DataAwsccDatabrewJobOutputsFormatOptionsCsv extends cdktf.ComplexComputedList {
    get delimiter(): string;
}
export declare function dataAwsccDatabrewJobOutputsFormatOptionsCsvToTerraform(struct?: DataAwsccDatabrewJobOutputsFormatOptionsCsv): any;
export declare class DataAwsccDatabrewJobOutputsFormatOptions extends cdktf.ComplexComputedList {
    get csv(): any;
}
export declare function dataAwsccDatabrewJobOutputsFormatOptionsToTerraform(struct?: DataAwsccDatabrewJobOutputsFormatOptions): any;
export declare class DataAwsccDatabrewJobOutputsLocation extends cdktf.ComplexComputedList {
    get bucket(): string;
    get key(): string;
}
export declare function dataAwsccDatabrewJobOutputsLocationToTerraform(struct?: DataAwsccDatabrewJobOutputsLocation): any;
export declare class DataAwsccDatabrewJobOutputs extends cdktf.ComplexComputedList {
    get compressionFormat(): string;
    get format(): string;
    get formatOptions(): any;
    get location(): any;
    get overwrite(): any;
    get partitionColumns(): string[];
}
export declare function dataAwsccDatabrewJobOutputsToTerraform(struct?: DataAwsccDatabrewJobOutputs): any;
export declare class DataAwsccDatabrewJobProfileConfigurationColumnStatisticsConfigurationsSelectors extends cdktf.ComplexComputedList {
    get name(): string;
    get regex(): string;
}
export declare function dataAwsccDatabrewJobProfileConfigurationColumnStatisticsConfigurationsSelectorsToTerraform(struct?: DataAwsccDatabrewJobProfileConfigurationColumnStatisticsConfigurationsSelectors): any;
export declare class DataAwsccDatabrewJobProfileConfigurationColumnStatisticsConfigurationsStatisticsOverrides extends cdktf.ComplexComputedList {
    get parameters(): any;
    get statistic(): string;
}
export declare function dataAwsccDatabrewJobProfileConfigurationColumnStatisticsConfigurationsStatisticsOverridesToTerraform(struct?: DataAwsccDatabrewJobProfileConfigurationColumnStatisticsConfigurationsStatisticsOverrides): any;
export declare class DataAwsccDatabrewJobProfileConfigurationColumnStatisticsConfigurationsStatistics extends cdktf.ComplexComputedList {
    get includedStatistics(): string[];
    get overrides(): any;
}
export declare function dataAwsccDatabrewJobProfileConfigurationColumnStatisticsConfigurationsStatisticsToTerraform(struct?: DataAwsccDatabrewJobProfileConfigurationColumnStatisticsConfigurationsStatistics): any;
export declare class DataAwsccDatabrewJobProfileConfigurationColumnStatisticsConfigurations extends cdktf.ComplexComputedList {
    get selectors(): any;
    get statistics(): any;
}
export declare function dataAwsccDatabrewJobProfileConfigurationColumnStatisticsConfigurationsToTerraform(struct?: DataAwsccDatabrewJobProfileConfigurationColumnStatisticsConfigurations): any;
export declare class DataAwsccDatabrewJobProfileConfigurationDatasetStatisticsConfigurationOverrides extends cdktf.ComplexComputedList {
    get parameters(): any;
    get statistic(): string;
}
export declare function dataAwsccDatabrewJobProfileConfigurationDatasetStatisticsConfigurationOverridesToTerraform(struct?: DataAwsccDatabrewJobProfileConfigurationDatasetStatisticsConfigurationOverrides): any;
export declare class DataAwsccDatabrewJobProfileConfigurationDatasetStatisticsConfiguration extends cdktf.ComplexComputedList {
    get includedStatistics(): string[];
    get overrides(): any;
}
export declare function dataAwsccDatabrewJobProfileConfigurationDatasetStatisticsConfigurationToTerraform(struct?: DataAwsccDatabrewJobProfileConfigurationDatasetStatisticsConfiguration): any;
export declare class DataAwsccDatabrewJobProfileConfigurationProfileColumns extends cdktf.ComplexComputedList {
    get name(): string;
    get regex(): string;
}
export declare function dataAwsccDatabrewJobProfileConfigurationProfileColumnsToTerraform(struct?: DataAwsccDatabrewJobProfileConfigurationProfileColumns): any;
export declare class DataAwsccDatabrewJobProfileConfiguration extends cdktf.ComplexComputedList {
    get columnStatisticsConfigurations(): any;
    get datasetStatisticsConfiguration(): any;
    get profileColumns(): any;
}
export declare function dataAwsccDatabrewJobProfileConfigurationToTerraform(struct?: DataAwsccDatabrewJobProfileConfiguration): any;
export declare class DataAwsccDatabrewJobRecipe extends cdktf.ComplexComputedList {
    get name(): string;
    get version(): string;
}
export declare function dataAwsccDatabrewJobRecipeToTerraform(struct?: DataAwsccDatabrewJobRecipe): any;
export declare class DataAwsccDatabrewJobTags extends cdktf.ComplexComputedList {
    get key(): string;
    get value(): string;
}
export declare function dataAwsccDatabrewJobTagsToTerraform(struct?: DataAwsccDatabrewJobTags): any;
/**
* Represents a {@link https://www.terraform.io/docs/providers/awscc/d/databrew_job.html awscc_databrew_job}
*/
export declare class DataAwsccDatabrewJob extends cdktf.TerraformDataSource {
    static readonly tfResourceType: string;
    /**
    * Create a new {@link https://www.terraform.io/docs/providers/awscc/d/databrew_job.html awscc_databrew_job} Data Source
    *
    * @param scope The scope in which to define this construct
    * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
    * @param options DataAwsccDatabrewJobConfig
    */
    constructor(scope: Construct, id: string, config: DataAwsccDatabrewJobConfig);
    get dataCatalogOutputs(): any;
    get databaseOutputs(): any;
    get datasetName(): string;
    get encryptionKeyArn(): string;
    get encryptionMode(): string;
    private _id;
    get id(): string;
    set id(value: string);
    get idInput(): string;
    get jobSample(): any;
    get logSubscription(): string;
    get maxCapacity(): number;
    get maxRetries(): number;
    get name(): string;
    get outputLocation(): any;
    get outputs(): any;
    get profileConfiguration(): any;
    get projectName(): string;
    get recipe(): any;
    get roleArn(): string;
    get tags(): any;
    get timeout(): number;
    get type(): string;
    protected synthesizeAttributes(): {
        [name: string]: any;
    };
}
