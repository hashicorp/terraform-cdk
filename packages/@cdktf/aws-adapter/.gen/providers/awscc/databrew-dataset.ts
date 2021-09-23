// https://www.terraform.io/docs/providers/awscc/r/databrew_dataset.html
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

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

export function databrewDatasetFormatOptionsCsvToTerraform(struct?: DatabrewDatasetFormatOptionsCsv): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    delimiter: cdktf.stringToTerraform(struct!.delimiter),
    header_row: cdktf.booleanToTerraform(struct!.headerRow),
  }
}

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

export function databrewDatasetFormatOptionsExcelToTerraform(struct?: DatabrewDatasetFormatOptionsExcel): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    header_row: cdktf.booleanToTerraform(struct!.headerRow),
    sheet_indexes: cdktf.listMapper(cdktf.numberToTerraform)(struct!.sheetIndexes),
    sheet_names: cdktf.listMapper(cdktf.stringToTerraform)(struct!.sheetNames),
  }
}

export interface DatabrewDatasetFormatOptionsJson {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/databrew_dataset.html#multi_line DatabrewDataset#multi_line}
  */
  readonly multiLine?: boolean | cdktf.IResolvable;
}

export function databrewDatasetFormatOptionsJsonToTerraform(struct?: DatabrewDatasetFormatOptionsJson): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    multi_line: cdktf.booleanToTerraform(struct!.multiLine),
  }
}

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

export function databrewDatasetFormatOptionsToTerraform(struct?: DatabrewDatasetFormatOptions): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    csv: databrewDatasetFormatOptionsCsvToTerraform(struct!.csv),
    excel: databrewDatasetFormatOptionsExcelToTerraform(struct!.excel),
    json: databrewDatasetFormatOptionsJsonToTerraform(struct!.json),
  }
}

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

export function databrewDatasetInputDataCatalogInputDefinitionTempDirectoryToTerraform(struct?: DatabrewDatasetInputDataCatalogInputDefinitionTempDirectory): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    bucket: cdktf.stringToTerraform(struct!.bucket),
    key: cdktf.stringToTerraform(struct!.key),
  }
}

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

export function databrewDatasetInputDataCatalogInputDefinitionToTerraform(struct?: DatabrewDatasetInputDataCatalogInputDefinition): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    catalog_id: cdktf.stringToTerraform(struct!.catalogId),
    database_name: cdktf.stringToTerraform(struct!.databaseName),
    table_name: cdktf.stringToTerraform(struct!.tableName),
    temp_directory: databrewDatasetInputDataCatalogInputDefinitionTempDirectoryToTerraform(struct!.tempDirectory),
  }
}

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

export function databrewDatasetInputDatabaseInputDefinitionTempDirectoryToTerraform(struct?: DatabrewDatasetInputDatabaseInputDefinitionTempDirectory): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    bucket: cdktf.stringToTerraform(struct!.bucket),
    key: cdktf.stringToTerraform(struct!.key),
  }
}

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

export function databrewDatasetInputDatabaseInputDefinitionToTerraform(struct?: DatabrewDatasetInputDatabaseInputDefinition): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    database_table_name: cdktf.stringToTerraform(struct!.databaseTableName),
    glue_connection_name: cdktf.stringToTerraform(struct!.glueConnectionName),
    temp_directory: databrewDatasetInputDatabaseInputDefinitionTempDirectoryToTerraform(struct!.tempDirectory),
  }
}

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

export function databrewDatasetInputS3InputDefinitionToTerraform(struct?: DatabrewDatasetInputS3InputDefinition): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    bucket: cdktf.stringToTerraform(struct!.bucket),
    key: cdktf.stringToTerraform(struct!.key),
  }
}

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

export function databrewDatasetInputToTerraform(struct?: DatabrewDatasetInput): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    data_catalog_input_definition: databrewDatasetInputDataCatalogInputDefinitionToTerraform(struct!.dataCatalogInputDefinition),
    database_input_definition: databrewDatasetInputDatabaseInputDefinitionToTerraform(struct!.databaseInputDefinition),
    s3_input_definition: databrewDatasetInputS3InputDefinitionToTerraform(struct!.s3InputDefinition),
  }
}

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

export function databrewDatasetPathOptionsFilesLimitToTerraform(struct?: DatabrewDatasetPathOptionsFilesLimit): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    max_files: cdktf.numberToTerraform(struct!.maxFiles),
    order: cdktf.stringToTerraform(struct!.order),
    ordered_by: cdktf.stringToTerraform(struct!.orderedBy),
  }
}

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

export function databrewDatasetPathOptionsLastModifiedDateConditionValuesMapToTerraform(struct?: DatabrewDatasetPathOptionsLastModifiedDateConditionValuesMap): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    value: cdktf.stringToTerraform(struct!.value),
    value_reference: cdktf.stringToTerraform(struct!.valueReference),
  }
}

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

export function databrewDatasetPathOptionsLastModifiedDateConditionToTerraform(struct?: DatabrewDatasetPathOptionsLastModifiedDateCondition): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    expression: cdktf.stringToTerraform(struct!.expression),
    values_map: cdktf.listMapper(databrewDatasetPathOptionsLastModifiedDateConditionValuesMapToTerraform)(struct!.valuesMap),
  }
}

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

export function databrewDatasetPathOptionsParametersDatasetParameterDatetimeOptionsToTerraform(struct?: DatabrewDatasetPathOptionsParametersDatasetParameterDatetimeOptions): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    format: cdktf.stringToTerraform(struct!.format),
    locale_code: cdktf.stringToTerraform(struct!.localeCode),
    timezone_offset: cdktf.stringToTerraform(struct!.timezoneOffset),
  }
}

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

export function databrewDatasetPathOptionsParametersDatasetParameterFilterValuesMapToTerraform(struct?: DatabrewDatasetPathOptionsParametersDatasetParameterFilterValuesMap): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    value: cdktf.stringToTerraform(struct!.value),
    value_reference: cdktf.stringToTerraform(struct!.valueReference),
  }
}

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

export function databrewDatasetPathOptionsParametersDatasetParameterFilterToTerraform(struct?: DatabrewDatasetPathOptionsParametersDatasetParameterFilter): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    expression: cdktf.stringToTerraform(struct!.expression),
    values_map: cdktf.listMapper(databrewDatasetPathOptionsParametersDatasetParameterFilterValuesMapToTerraform)(struct!.valuesMap),
  }
}

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

export function databrewDatasetPathOptionsParametersDatasetParameterToTerraform(struct?: DatabrewDatasetPathOptionsParametersDatasetParameter): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    create_column: cdktf.booleanToTerraform(struct!.createColumn),
    datetime_options: databrewDatasetPathOptionsParametersDatasetParameterDatetimeOptionsToTerraform(struct!.datetimeOptions),
    filter: databrewDatasetPathOptionsParametersDatasetParameterFilterToTerraform(struct!.filter),
    name: cdktf.stringToTerraform(struct!.name),
    type: cdktf.stringToTerraform(struct!.type),
  }
}

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

export function databrewDatasetPathOptionsParametersToTerraform(struct?: DatabrewDatasetPathOptionsParameters): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    dataset_parameter: databrewDatasetPathOptionsParametersDatasetParameterToTerraform(struct!.datasetParameter),
    path_parameter_name: cdktf.stringToTerraform(struct!.pathParameterName),
  }
}

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

export function databrewDatasetPathOptionsToTerraform(struct?: DatabrewDatasetPathOptions): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    files_limit: databrewDatasetPathOptionsFilesLimitToTerraform(struct!.filesLimit),
    last_modified_date_condition: databrewDatasetPathOptionsLastModifiedDateConditionToTerraform(struct!.lastModifiedDateCondition),
    parameters: cdktf.listMapper(databrewDatasetPathOptionsParametersToTerraform)(struct!.parameters),
  }
}

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

export function databrewDatasetTagsToTerraform(struct?: DatabrewDatasetTags): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    key: cdktf.stringToTerraform(struct!.key),
    value: cdktf.stringToTerraform(struct!.value),
  }
}


/**
* Represents a {@link https://www.terraform.io/docs/providers/awscc/r/databrew_dataset.html awscc_databrew_dataset}
*/
export class DatabrewDataset extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType: string = "awscc_databrew_dataset";

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://www.terraform.io/docs/providers/awscc/r/databrew_dataset.html awscc_databrew_dataset} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DatabrewDatasetConfig
  */
  public constructor(scope: Construct, id: string, config: DatabrewDatasetConfig) {
    super(scope, id, {
      terraformResourceType: 'awscc_databrew_dataset',
      terraformGeneratorMetadata: {
        providerName: 'awscc'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle
    });
    this._format = config.format;
    this._formatOptions = config.formatOptions;
    this._input = config.input;
    this._name = config.name;
    this._pathOptions = config.pathOptions;
    this._tags = config.tags;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // format - computed: false, optional: true, required: false
  private _format?: string;
  public get format() {
    return this.getStringAttribute('format');
  }
  public set format(value: string ) {
    this._format = value;
  }
  public resetFormat() {
    this._format = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get formatInput() {
    return this._format
  }

  // format_options - computed: false, optional: true, required: false
  private _formatOptions?: DatabrewDatasetFormatOptions;
  public get formatOptions() {
    return this.interpolationForAttribute('format_options') as any;
  }
  public set formatOptions(value: DatabrewDatasetFormatOptions ) {
    this._formatOptions = value;
  }
  public resetFormatOptions() {
    this._formatOptions = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get formatOptionsInput() {
    return this._formatOptions
  }

  // id - computed: true, optional: false, required: false
  public get id() {
    return this.getStringAttribute('id');
  }

  // input - computed: false, optional: false, required: true
  private _input: DatabrewDatasetInput;
  public get input() {
    return this.interpolationForAttribute('input') as any;
  }
  public set input(value: DatabrewDatasetInput) {
    this._input = value;
  }
  // Temporarily expose input value. Use with caution.
  public get inputInput() {
    return this._input
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

  // path_options - computed: false, optional: true, required: false
  private _pathOptions?: DatabrewDatasetPathOptions;
  public get pathOptions() {
    return this.interpolationForAttribute('path_options') as any;
  }
  public set pathOptions(value: DatabrewDatasetPathOptions ) {
    this._pathOptions = value;
  }
  public resetPathOptions() {
    this._pathOptions = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get pathOptionsInput() {
    return this._pathOptions
  }

  // tags - computed: true, optional: true, required: false
  private _tags?: DatabrewDatasetTags[];
  public get tags() {
    return this.interpolationForAttribute('tags') as any;
  }
  public set tags(value: DatabrewDatasetTags[]) {
    this._tags = value;
  }
  public resetTags() {
    this._tags = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tagsInput() {
    return this._tags
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      format: cdktf.stringToTerraform(this._format),
      format_options: databrewDatasetFormatOptionsToTerraform(this._formatOptions),
      input: databrewDatasetInputToTerraform(this._input),
      name: cdktf.stringToTerraform(this._name),
      path_options: databrewDatasetPathOptionsToTerraform(this._pathOptions),
      tags: cdktf.listMapper(databrewDatasetTagsToTerraform)(this._tags),
    };
  }
}
