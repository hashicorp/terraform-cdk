import { Construct } from 'constructs';
import * as cdktf from 'cdktf';
export interface DatabrewDatasetConfig extends cdktf.TerraformMetaArguments {
    /**
    * Dataset format
    *
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/databrew_dataset.html#format DatabrewDataset#format}
    */
    readonly format?: string;
    /**
    * Format options for dataset
    *
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/databrew_dataset.html#format_options DatabrewDataset#format_options}
    */
    readonly formatOptions?: DatabrewDatasetFormatOptions;
    /**
    * Input
    *
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/databrew_dataset.html#input DatabrewDataset#input}
    */
    readonly input: DatabrewDatasetInput;
    /**
    * Dataset name
    *
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/databrew_dataset.html#name DatabrewDataset#name}
    */
    readonly name: string;
    /**
    * Path options for dataset
    *
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/databrew_dataset.html#path_options DatabrewDataset#path_options}
    */
    readonly pathOptions?: DatabrewDatasetPathOptions;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/databrew_dataset.html#tags DatabrewDataset#tags}
    */
    readonly tags?: DatabrewDatasetTags[];
}
export interface DatabrewDatasetFormatOptionsCsv {
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/databrew_dataset.html#delimiter DatabrewDataset#delimiter}
    */
    readonly delimiter?: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/databrew_dataset.html#header_row DatabrewDataset#header_row}
    */
    readonly headerRow?: boolean | cdktf.IResolvable;
}
export declare function databrewDatasetFormatOptionsCsvToTerraform(struct?: DatabrewDatasetFormatOptionsCsv): any;
export interface DatabrewDatasetFormatOptionsExcel {
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/databrew_dataset.html#header_row DatabrewDataset#header_row}
    */
    readonly headerRow?: boolean | cdktf.IResolvable;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/databrew_dataset.html#sheet_indexes DatabrewDataset#sheet_indexes}
    */
    readonly sheetIndexes?: number[];
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/databrew_dataset.html#sheet_names DatabrewDataset#sheet_names}
    */
    readonly sheetNames?: string[];
}
export declare function databrewDatasetFormatOptionsExcelToTerraform(struct?: DatabrewDatasetFormatOptionsExcel): any;
export interface DatabrewDatasetFormatOptionsJson {
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/databrew_dataset.html#multi_line DatabrewDataset#multi_line}
    */
    readonly multiLine?: boolean | cdktf.IResolvable;
}
export declare function databrewDatasetFormatOptionsJsonToTerraform(struct?: DatabrewDatasetFormatOptionsJson): any;
export interface DatabrewDatasetFormatOptions {
    /**
    * Csv options
    *
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/databrew_dataset.html#csv DatabrewDataset#csv}
    */
    readonly csv?: DatabrewDatasetFormatOptionsCsv;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/databrew_dataset.html#excel DatabrewDataset#excel}
    */
    readonly excel?: DatabrewDatasetFormatOptionsExcel;
    /**
    * Json options
    *
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/databrew_dataset.html#json DatabrewDataset#json}
    */
    readonly json?: DatabrewDatasetFormatOptionsJson;
}
export declare function databrewDatasetFormatOptionsToTerraform(struct?: DatabrewDatasetFormatOptions): any;
export interface DatabrewDatasetInputDataCatalogInputDefinitionTempDirectory {
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/databrew_dataset.html#bucket DatabrewDataset#bucket}
    */
    readonly bucket: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/databrew_dataset.html#key DatabrewDataset#key}
    */
    readonly key?: string;
}
export declare function databrewDatasetInputDataCatalogInputDefinitionTempDirectoryToTerraform(struct?: DatabrewDatasetInputDataCatalogInputDefinitionTempDirectory): any;
export interface DatabrewDatasetInputDataCatalogInputDefinition {
    /**
    * Catalog id
    *
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/databrew_dataset.html#catalog_id DatabrewDataset#catalog_id}
    */
    readonly catalogId?: string;
    /**
    * Database name
    *
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/databrew_dataset.html#database_name DatabrewDataset#database_name}
    */
    readonly databaseName?: string;
    /**
    * Table name
    *
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/databrew_dataset.html#table_name DatabrewDataset#table_name}
    */
    readonly tableName?: string;
    /**
    * Input location
    *
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/databrew_dataset.html#temp_directory DatabrewDataset#temp_directory}
    */
    readonly tempDirectory?: DatabrewDatasetInputDataCatalogInputDefinitionTempDirectory;
}
export declare function databrewDatasetInputDataCatalogInputDefinitionToTerraform(struct?: DatabrewDatasetInputDataCatalogInputDefinition): any;
export interface DatabrewDatasetInputDatabaseInputDefinitionTempDirectory {
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/databrew_dataset.html#bucket DatabrewDataset#bucket}
    */
    readonly bucket: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/databrew_dataset.html#key DatabrewDataset#key}
    */
    readonly key?: string;
}
export declare function databrewDatasetInputDatabaseInputDefinitionTempDirectoryToTerraform(struct?: DatabrewDatasetInputDatabaseInputDefinitionTempDirectory): any;
export interface DatabrewDatasetInputDatabaseInputDefinition {
    /**
    * Database table name
    *
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/databrew_dataset.html#database_table_name DatabrewDataset#database_table_name}
    */
    readonly databaseTableName?: string;
    /**
    * Glue connection name
    *
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/databrew_dataset.html#glue_connection_name DatabrewDataset#glue_connection_name}
    */
    readonly glueConnectionName?: string;
    /**
    * Input location
    *
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/databrew_dataset.html#temp_directory DatabrewDataset#temp_directory}
    */
    readonly tempDirectory?: DatabrewDatasetInputDatabaseInputDefinitionTempDirectory;
}
export declare function databrewDatasetInputDatabaseInputDefinitionToTerraform(struct?: DatabrewDatasetInputDatabaseInputDefinition): any;
export interface DatabrewDatasetInputS3InputDefinition {
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/databrew_dataset.html#bucket DatabrewDataset#bucket}
    */
    readonly bucket: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/databrew_dataset.html#key DatabrewDataset#key}
    */
    readonly key?: string;
}
export declare function databrewDatasetInputS3InputDefinitionToTerraform(struct?: DatabrewDatasetInputS3InputDefinition): any;
export interface DatabrewDatasetInput {
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/databrew_dataset.html#data_catalog_input_definition DatabrewDataset#data_catalog_input_definition}
    */
    readonly dataCatalogInputDefinition?: DatabrewDatasetInputDataCatalogInputDefinition;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/databrew_dataset.html#database_input_definition DatabrewDataset#database_input_definition}
    */
    readonly databaseInputDefinition?: DatabrewDatasetInputDatabaseInputDefinition;
    /**
    * Input location
    *
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/databrew_dataset.html#s3_input_definition DatabrewDataset#s3_input_definition}
    */
    readonly s3InputDefinition?: DatabrewDatasetInputS3InputDefinition;
}
export declare function databrewDatasetInputToTerraform(struct?: DatabrewDatasetInput): any;
export interface DatabrewDatasetPathOptionsFilesLimit {
    /**
    * Maximum number of files
    *
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/databrew_dataset.html#max_files DatabrewDataset#max_files}
    */
    readonly maxFiles: number;
    /**
    * Order
    *
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/databrew_dataset.html#order DatabrewDataset#order}
    */
    readonly order?: string;
    /**
    * Ordered by
    *
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/databrew_dataset.html#ordered_by DatabrewDataset#ordered_by}
    */
    readonly orderedBy?: string;
}
export declare function databrewDatasetPathOptionsFilesLimitToTerraform(struct?: DatabrewDatasetPathOptionsFilesLimit): any;
export interface DatabrewDatasetPathOptionsLastModifiedDateConditionValuesMap {
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/databrew_dataset.html#value DatabrewDataset#value}
    */
    readonly value: string;
    /**
    * Variable name
    *
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/databrew_dataset.html#value_reference DatabrewDataset#value_reference}
    */
    readonly valueReference: string;
}
export declare function databrewDatasetPathOptionsLastModifiedDateConditionValuesMapToTerraform(struct?: DatabrewDatasetPathOptionsLastModifiedDateConditionValuesMap): any;
export interface DatabrewDatasetPathOptionsLastModifiedDateCondition {
    /**
    * Filtering expression for a parameter
    *
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/databrew_dataset.html#expression DatabrewDataset#expression}
    */
    readonly expression: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/databrew_dataset.html#values_map DatabrewDataset#values_map}
    */
    readonly valuesMap: DatabrewDatasetPathOptionsLastModifiedDateConditionValuesMap[];
}
export declare function databrewDatasetPathOptionsLastModifiedDateConditionToTerraform(struct?: DatabrewDatasetPathOptionsLastModifiedDateCondition): any;
export interface DatabrewDatasetPathOptionsParametersDatasetParameterDatetimeOptions {
    /**
    * Date/time format of a date parameter
    *
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/databrew_dataset.html#format DatabrewDataset#format}
    */
    readonly format: string;
    /**
    * Locale code for a date parameter
    *
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/databrew_dataset.html#locale_code DatabrewDataset#locale_code}
    */
    readonly localeCode?: string;
    /**
    * Timezone offset
    *
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/databrew_dataset.html#timezone_offset DatabrewDataset#timezone_offset}
    */
    readonly timezoneOffset?: string;
}
export declare function databrewDatasetPathOptionsParametersDatasetParameterDatetimeOptionsToTerraform(struct?: DatabrewDatasetPathOptionsParametersDatasetParameterDatetimeOptions): any;
export interface DatabrewDatasetPathOptionsParametersDatasetParameterFilterValuesMap {
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/databrew_dataset.html#value DatabrewDataset#value}
    */
    readonly value: string;
    /**
    * Variable name
    *
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/databrew_dataset.html#value_reference DatabrewDataset#value_reference}
    */
    readonly valueReference: string;
}
export declare function databrewDatasetPathOptionsParametersDatasetParameterFilterValuesMapToTerraform(struct?: DatabrewDatasetPathOptionsParametersDatasetParameterFilterValuesMap): any;
export interface DatabrewDatasetPathOptionsParametersDatasetParameterFilter {
    /**
    * Filtering expression for a parameter
    *
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/databrew_dataset.html#expression DatabrewDataset#expression}
    */
    readonly expression: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/databrew_dataset.html#values_map DatabrewDataset#values_map}
    */
    readonly valuesMap: DatabrewDatasetPathOptionsParametersDatasetParameterFilterValuesMap[];
}
export declare function databrewDatasetPathOptionsParametersDatasetParameterFilterToTerraform(struct?: DatabrewDatasetPathOptionsParametersDatasetParameterFilter): any;
export interface DatabrewDatasetPathOptionsParametersDatasetParameter {
    /**
    * Add the value of this parameter as a column in a dataset.
    *
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/databrew_dataset.html#create_column DatabrewDataset#create_column}
    */
    readonly createColumn?: boolean | cdktf.IResolvable;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/databrew_dataset.html#datetime_options DatabrewDataset#datetime_options}
    */
    readonly datetimeOptions?: DatabrewDatasetPathOptionsParametersDatasetParameterDatetimeOptions;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/databrew_dataset.html#filter DatabrewDataset#filter}
    */
    readonly filter?: DatabrewDatasetPathOptionsParametersDatasetParameterFilter;
    /**
    * Parameter name
    *
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/databrew_dataset.html#name DatabrewDataset#name}
    */
    readonly name: string;
    /**
    * Parameter type
    *
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/databrew_dataset.html#type DatabrewDataset#type}
    */
    readonly type: string;
}
export declare function databrewDatasetPathOptionsParametersDatasetParameterToTerraform(struct?: DatabrewDatasetPathOptionsParametersDatasetParameter): any;
export interface DatabrewDatasetPathOptionsParameters {
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/databrew_dataset.html#dataset_parameter DatabrewDataset#dataset_parameter}
    */
    readonly datasetParameter: DatabrewDatasetPathOptionsParametersDatasetParameter;
    /**
    * Parameter name
    *
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/databrew_dataset.html#path_parameter_name DatabrewDataset#path_parameter_name}
    */
    readonly pathParameterName: string;
}
export declare function databrewDatasetPathOptionsParametersToTerraform(struct?: DatabrewDatasetPathOptionsParameters): any;
export interface DatabrewDatasetPathOptions {
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/databrew_dataset.html#files_limit DatabrewDataset#files_limit}
    */
    readonly filesLimit?: DatabrewDatasetPathOptionsFilesLimit;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/databrew_dataset.html#last_modified_date_condition DatabrewDataset#last_modified_date_condition}
    */
    readonly lastModifiedDateCondition?: DatabrewDatasetPathOptionsLastModifiedDateCondition;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/databrew_dataset.html#parameters DatabrewDataset#parameters}
    */
    readonly parameters?: DatabrewDatasetPathOptionsParameters[];
}
export declare function databrewDatasetPathOptionsToTerraform(struct?: DatabrewDatasetPathOptions): any;
export interface DatabrewDatasetTags {
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/databrew_dataset.html#key DatabrewDataset#key}
    */
    readonly key: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/databrew_dataset.html#value DatabrewDataset#value}
    */
    readonly value: string;
}
export declare function databrewDatasetTagsToTerraform(struct?: DatabrewDatasetTags): any;
/**
* Represents a {@link https://www.terraform.io/docs/providers/awscc/r/databrew_dataset.html awscc_databrew_dataset}
*/
export declare class DatabrewDataset extends cdktf.TerraformResource {
    static readonly tfResourceType: string;
    /**
    * Create a new {@link https://www.terraform.io/docs/providers/awscc/r/databrew_dataset.html awscc_databrew_dataset} Resource
    *
    * @param scope The scope in which to define this construct
    * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
    * @param options DatabrewDatasetConfig
    */
    constructor(scope: Construct, id: string, config: DatabrewDatasetConfig);
    private _format?;
    get format(): string;
    set format(value: string);
    resetFormat(): void;
    get formatInput(): string | undefined;
    private _formatOptions?;
    get formatOptions(): DatabrewDatasetFormatOptions;
    set formatOptions(value: DatabrewDatasetFormatOptions);
    resetFormatOptions(): void;
    get formatOptionsInput(): DatabrewDatasetFormatOptions | undefined;
    get id(): string;
    private _input;
    get input(): DatabrewDatasetInput;
    set input(value: DatabrewDatasetInput);
    get inputInput(): DatabrewDatasetInput;
    private _name;
    get name(): string;
    set name(value: string);
    get nameInput(): string;
    private _pathOptions?;
    get pathOptions(): DatabrewDatasetPathOptions;
    set pathOptions(value: DatabrewDatasetPathOptions);
    resetPathOptions(): void;
    get pathOptionsInput(): DatabrewDatasetPathOptions | undefined;
    private _tags?;
    get tags(): DatabrewDatasetTags[];
    set tags(value: DatabrewDatasetTags[]);
    resetTags(): void;
    get tagsInput(): DatabrewDatasetTags[] | undefined;
    protected synthesizeAttributes(): {
        [name: string]: any;
    };
}
