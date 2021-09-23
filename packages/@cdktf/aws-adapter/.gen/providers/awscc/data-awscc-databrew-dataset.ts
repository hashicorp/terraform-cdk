// https://www.terraform.io/docs/providers/awscc/d/databrew_dataset.html
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DataAwsccDatabrewDatasetConfig extends cdktf.TerraformMetaArguments {
  /**
  * Uniquely identifies the resource.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/d/databrew_dataset.html#id DataAwsccDatabrewDataset#id}
  */
  readonly id: string;
}
export class DataAwsccDatabrewDatasetFormatOptionsCsv extends cdktf.ComplexComputedList {

  // delimiter - computed: true, optional: false, required: false
  public get delimiter() {
    return this.getStringAttribute('delimiter');
  }

  // header_row - computed: true, optional: false, required: false
  public get headerRow() {
    return this.getBooleanAttribute('header_row');
  }
}

export function dataAwsccDatabrewDatasetFormatOptionsCsvToTerraform(struct?: DataAwsccDatabrewDatasetFormatOptionsCsv): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    delimiter: cdktf.stringToTerraform(struct!.delimiter),
    header_row: cdktf.booleanToTerraform(struct!.headerRow),
  }
}

export class DataAwsccDatabrewDatasetFormatOptionsExcel extends cdktf.ComplexComputedList {

  // header_row - computed: true, optional: false, required: false
  public get headerRow() {
    return this.getBooleanAttribute('header_row');
  }

  // sheet_indexes - computed: true, optional: false, required: false
  public get sheetIndexes() {
    return this.interpolationForAttribute('sheet_indexes') as any;
  }

  // sheet_names - computed: true, optional: false, required: false
  public get sheetNames() {
    return this.getListAttribute('sheet_names');
  }
}

export function dataAwsccDatabrewDatasetFormatOptionsExcelToTerraform(struct?: DataAwsccDatabrewDatasetFormatOptionsExcel): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    header_row: cdktf.booleanToTerraform(struct!.headerRow),
    sheet_indexes: cdktf.listMapper(cdktf.numberToTerraform)(struct!.sheetIndexes),
    sheet_names: cdktf.listMapper(cdktf.stringToTerraform)(struct!.sheetNames),
  }
}

export class DataAwsccDatabrewDatasetFormatOptionsJson extends cdktf.ComplexComputedList {

  // multi_line - computed: true, optional: false, required: false
  public get multiLine() {
    return this.getBooleanAttribute('multi_line');
  }
}

export function dataAwsccDatabrewDatasetFormatOptionsJsonToTerraform(struct?: DataAwsccDatabrewDatasetFormatOptionsJson): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    multi_line: cdktf.booleanToTerraform(struct!.multiLine),
  }
}

export class DataAwsccDatabrewDatasetFormatOptions extends cdktf.ComplexComputedList {

  // csv - computed: true, optional: false, required: false
  public get csv() {
    return this.interpolationForAttribute('csv') as any;
  }

  // excel - computed: true, optional: false, required: false
  public get excel() {
    return this.interpolationForAttribute('excel') as any;
  }

  // json - computed: true, optional: false, required: false
  public get json() {
    return this.interpolationForAttribute('json') as any;
  }
}

export function dataAwsccDatabrewDatasetFormatOptionsToTerraform(struct?: DataAwsccDatabrewDatasetFormatOptions): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    csv: dataAwsccDatabrewDatasetFormatOptionsCsvToTerraform(struct!.csv),
    excel: dataAwsccDatabrewDatasetFormatOptionsExcelToTerraform(struct!.excel),
    json: dataAwsccDatabrewDatasetFormatOptionsJsonToTerraform(struct!.json),
  }
}

export class DataAwsccDatabrewDatasetInputDataCatalogInputDefinitionTempDirectory extends cdktf.ComplexComputedList {

  // bucket - computed: true, optional: false, required: false
  public get bucket() {
    return this.getStringAttribute('bucket');
  }

  // key - computed: true, optional: false, required: false
  public get key() {
    return this.getStringAttribute('key');
  }
}

export function dataAwsccDatabrewDatasetInputDataCatalogInputDefinitionTempDirectoryToTerraform(struct?: DataAwsccDatabrewDatasetInputDataCatalogInputDefinitionTempDirectory): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    bucket: cdktf.stringToTerraform(struct!.bucket),
    key: cdktf.stringToTerraform(struct!.key),
  }
}

export class DataAwsccDatabrewDatasetInputDataCatalogInputDefinition extends cdktf.ComplexComputedList {

  // catalog_id - computed: true, optional: false, required: false
  public get catalogId() {
    return this.getStringAttribute('catalog_id');
  }

  // database_name - computed: true, optional: false, required: false
  public get databaseName() {
    return this.getStringAttribute('database_name');
  }

  // table_name - computed: true, optional: false, required: false
  public get tableName() {
    return this.getStringAttribute('table_name');
  }

  // temp_directory - computed: true, optional: false, required: false
  public get tempDirectory() {
    return this.interpolationForAttribute('temp_directory') as any;
  }
}

export function dataAwsccDatabrewDatasetInputDataCatalogInputDefinitionToTerraform(struct?: DataAwsccDatabrewDatasetInputDataCatalogInputDefinition): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    catalog_id: cdktf.stringToTerraform(struct!.catalogId),
    database_name: cdktf.stringToTerraform(struct!.databaseName),
    table_name: cdktf.stringToTerraform(struct!.tableName),
    temp_directory: dataAwsccDatabrewDatasetInputDataCatalogInputDefinitionTempDirectoryToTerraform(struct!.tempDirectory),
  }
}

export class DataAwsccDatabrewDatasetInputDatabaseInputDefinitionTempDirectory extends cdktf.ComplexComputedList {

  // bucket - computed: true, optional: false, required: false
  public get bucket() {
    return this.getStringAttribute('bucket');
  }

  // key - computed: true, optional: false, required: false
  public get key() {
    return this.getStringAttribute('key');
  }
}

export function dataAwsccDatabrewDatasetInputDatabaseInputDefinitionTempDirectoryToTerraform(struct?: DataAwsccDatabrewDatasetInputDatabaseInputDefinitionTempDirectory): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    bucket: cdktf.stringToTerraform(struct!.bucket),
    key: cdktf.stringToTerraform(struct!.key),
  }
}

export class DataAwsccDatabrewDatasetInputDatabaseInputDefinition extends cdktf.ComplexComputedList {

  // database_table_name - computed: true, optional: false, required: false
  public get databaseTableName() {
    return this.getStringAttribute('database_table_name');
  }

  // glue_connection_name - computed: true, optional: false, required: false
  public get glueConnectionName() {
    return this.getStringAttribute('glue_connection_name');
  }

  // temp_directory - computed: true, optional: false, required: false
  public get tempDirectory() {
    return this.interpolationForAttribute('temp_directory') as any;
  }
}

export function dataAwsccDatabrewDatasetInputDatabaseInputDefinitionToTerraform(struct?: DataAwsccDatabrewDatasetInputDatabaseInputDefinition): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    database_table_name: cdktf.stringToTerraform(struct!.databaseTableName),
    glue_connection_name: cdktf.stringToTerraform(struct!.glueConnectionName),
    temp_directory: dataAwsccDatabrewDatasetInputDatabaseInputDefinitionTempDirectoryToTerraform(struct!.tempDirectory),
  }
}

export class DataAwsccDatabrewDatasetInputS3InputDefinition extends cdktf.ComplexComputedList {

  // bucket - computed: true, optional: false, required: false
  public get bucket() {
    return this.getStringAttribute('bucket');
  }

  // key - computed: true, optional: false, required: false
  public get key() {
    return this.getStringAttribute('key');
  }
}

export function dataAwsccDatabrewDatasetInputS3InputDefinitionToTerraform(struct?: DataAwsccDatabrewDatasetInputS3InputDefinition): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    bucket: cdktf.stringToTerraform(struct!.bucket),
    key: cdktf.stringToTerraform(struct!.key),
  }
}

export class DataAwsccDatabrewDatasetInput extends cdktf.ComplexComputedList {

  // data_catalog_input_definition - computed: true, optional: false, required: false
  public get dataCatalogInputDefinition() {
    return this.interpolationForAttribute('data_catalog_input_definition') as any;
  }

  // database_input_definition - computed: true, optional: false, required: false
  public get databaseInputDefinition() {
    return this.interpolationForAttribute('database_input_definition') as any;
  }

  // s3_input_definition - computed: true, optional: false, required: false
  public get s3InputDefinition() {
    return this.interpolationForAttribute('s3_input_definition') as any;
  }
}

export function dataAwsccDatabrewDatasetInputToTerraform(struct?: DataAwsccDatabrewDatasetInput): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    data_catalog_input_definition: dataAwsccDatabrewDatasetInputDataCatalogInputDefinitionToTerraform(struct!.dataCatalogInputDefinition),
    database_input_definition: dataAwsccDatabrewDatasetInputDatabaseInputDefinitionToTerraform(struct!.databaseInputDefinition),
    s3_input_definition: dataAwsccDatabrewDatasetInputS3InputDefinitionToTerraform(struct!.s3InputDefinition),
  }
}

export class DataAwsccDatabrewDatasetPathOptionsFilesLimit extends cdktf.ComplexComputedList {

  // max_files - computed: true, optional: false, required: false
  public get maxFiles() {
    return this.getNumberAttribute('max_files');
  }

  // order - computed: true, optional: false, required: false
  public get order() {
    return this.getStringAttribute('order');
  }

  // ordered_by - computed: true, optional: false, required: false
  public get orderedBy() {
    return this.getStringAttribute('ordered_by');
  }
}

export function dataAwsccDatabrewDatasetPathOptionsFilesLimitToTerraform(struct?: DataAwsccDatabrewDatasetPathOptionsFilesLimit): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    max_files: cdktf.numberToTerraform(struct!.maxFiles),
    order: cdktf.stringToTerraform(struct!.order),
    ordered_by: cdktf.stringToTerraform(struct!.orderedBy),
  }
}

export class DataAwsccDatabrewDatasetPathOptionsLastModifiedDateConditionValuesMap extends cdktf.ComplexComputedList {

  // value - computed: true, optional: false, required: false
  public get value() {
    return this.getStringAttribute('value');
  }

  // value_reference - computed: true, optional: false, required: false
  public get valueReference() {
    return this.getStringAttribute('value_reference');
  }
}

export function dataAwsccDatabrewDatasetPathOptionsLastModifiedDateConditionValuesMapToTerraform(struct?: DataAwsccDatabrewDatasetPathOptionsLastModifiedDateConditionValuesMap): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    value: cdktf.stringToTerraform(struct!.value),
    value_reference: cdktf.stringToTerraform(struct!.valueReference),
  }
}

export class DataAwsccDatabrewDatasetPathOptionsLastModifiedDateCondition extends cdktf.ComplexComputedList {

  // expression - computed: true, optional: false, required: false
  public get expression() {
    return this.getStringAttribute('expression');
  }

  // values_map - computed: true, optional: false, required: false
  public get valuesMap() {
    return this.interpolationForAttribute('values_map') as any;
  }
}

export function dataAwsccDatabrewDatasetPathOptionsLastModifiedDateConditionToTerraform(struct?: DataAwsccDatabrewDatasetPathOptionsLastModifiedDateCondition): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    expression: cdktf.stringToTerraform(struct!.expression),
    values_map: cdktf.listMapper(dataAwsccDatabrewDatasetPathOptionsLastModifiedDateConditionValuesMapToTerraform)(struct!.valuesMap),
  }
}

export class DataAwsccDatabrewDatasetPathOptionsParametersDatasetParameterDatetimeOptions extends cdktf.ComplexComputedList {

  // format - computed: true, optional: false, required: false
  public get format() {
    return this.getStringAttribute('format');
  }

  // locale_code - computed: true, optional: false, required: false
  public get localeCode() {
    return this.getStringAttribute('locale_code');
  }

  // timezone_offset - computed: true, optional: false, required: false
  public get timezoneOffset() {
    return this.getStringAttribute('timezone_offset');
  }
}

export function dataAwsccDatabrewDatasetPathOptionsParametersDatasetParameterDatetimeOptionsToTerraform(struct?: DataAwsccDatabrewDatasetPathOptionsParametersDatasetParameterDatetimeOptions): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    format: cdktf.stringToTerraform(struct!.format),
    locale_code: cdktf.stringToTerraform(struct!.localeCode),
    timezone_offset: cdktf.stringToTerraform(struct!.timezoneOffset),
  }
}

export class DataAwsccDatabrewDatasetPathOptionsParametersDatasetParameterFilterValuesMap extends cdktf.ComplexComputedList {

  // value - computed: true, optional: false, required: false
  public get value() {
    return this.getStringAttribute('value');
  }

  // value_reference - computed: true, optional: false, required: false
  public get valueReference() {
    return this.getStringAttribute('value_reference');
  }
}

export function dataAwsccDatabrewDatasetPathOptionsParametersDatasetParameterFilterValuesMapToTerraform(struct?: DataAwsccDatabrewDatasetPathOptionsParametersDatasetParameterFilterValuesMap): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    value: cdktf.stringToTerraform(struct!.value),
    value_reference: cdktf.stringToTerraform(struct!.valueReference),
  }
}

export class DataAwsccDatabrewDatasetPathOptionsParametersDatasetParameterFilter extends cdktf.ComplexComputedList {

  // expression - computed: true, optional: false, required: false
  public get expression() {
    return this.getStringAttribute('expression');
  }

  // values_map - computed: true, optional: false, required: false
  public get valuesMap() {
    return this.interpolationForAttribute('values_map') as any;
  }
}

export function dataAwsccDatabrewDatasetPathOptionsParametersDatasetParameterFilterToTerraform(struct?: DataAwsccDatabrewDatasetPathOptionsParametersDatasetParameterFilter): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    expression: cdktf.stringToTerraform(struct!.expression),
    values_map: cdktf.listMapper(dataAwsccDatabrewDatasetPathOptionsParametersDatasetParameterFilterValuesMapToTerraform)(struct!.valuesMap),
  }
}

export class DataAwsccDatabrewDatasetPathOptionsParametersDatasetParameter extends cdktf.ComplexComputedList {

  // create_column - computed: true, optional: false, required: false
  public get createColumn() {
    return this.getBooleanAttribute('create_column');
  }

  // datetime_options - computed: true, optional: false, required: false
  public get datetimeOptions() {
    return this.interpolationForAttribute('datetime_options') as any;
  }

  // filter - computed: true, optional: false, required: false
  public get filter() {
    return this.interpolationForAttribute('filter') as any;
  }

  // name - computed: true, optional: false, required: false
  public get name() {
    return this.getStringAttribute('name');
  }

  // type - computed: true, optional: false, required: false
  public get type() {
    return this.getStringAttribute('type');
  }
}

export function dataAwsccDatabrewDatasetPathOptionsParametersDatasetParameterToTerraform(struct?: DataAwsccDatabrewDatasetPathOptionsParametersDatasetParameter): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    create_column: cdktf.booleanToTerraform(struct!.createColumn),
    datetime_options: dataAwsccDatabrewDatasetPathOptionsParametersDatasetParameterDatetimeOptionsToTerraform(struct!.datetimeOptions),
    filter: dataAwsccDatabrewDatasetPathOptionsParametersDatasetParameterFilterToTerraform(struct!.filter),
    name: cdktf.stringToTerraform(struct!.name),
    type: cdktf.stringToTerraform(struct!.type),
  }
}

export class DataAwsccDatabrewDatasetPathOptionsParameters extends cdktf.ComplexComputedList {

  // dataset_parameter - computed: true, optional: false, required: false
  public get datasetParameter() {
    return this.interpolationForAttribute('dataset_parameter') as any;
  }

  // path_parameter_name - computed: true, optional: false, required: false
  public get pathParameterName() {
    return this.getStringAttribute('path_parameter_name');
  }
}

export function dataAwsccDatabrewDatasetPathOptionsParametersToTerraform(struct?: DataAwsccDatabrewDatasetPathOptionsParameters): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    dataset_parameter: dataAwsccDatabrewDatasetPathOptionsParametersDatasetParameterToTerraform(struct!.datasetParameter),
    path_parameter_name: cdktf.stringToTerraform(struct!.pathParameterName),
  }
}

export class DataAwsccDatabrewDatasetPathOptions extends cdktf.ComplexComputedList {

  // files_limit - computed: true, optional: false, required: false
  public get filesLimit() {
    return this.interpolationForAttribute('files_limit') as any;
  }

  // last_modified_date_condition - computed: true, optional: false, required: false
  public get lastModifiedDateCondition() {
    return this.interpolationForAttribute('last_modified_date_condition') as any;
  }

  // parameters - computed: true, optional: false, required: false
  public get parameters() {
    return this.interpolationForAttribute('parameters') as any;
  }
}

export function dataAwsccDatabrewDatasetPathOptionsToTerraform(struct?: DataAwsccDatabrewDatasetPathOptions): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    files_limit: dataAwsccDatabrewDatasetPathOptionsFilesLimitToTerraform(struct!.filesLimit),
    last_modified_date_condition: dataAwsccDatabrewDatasetPathOptionsLastModifiedDateConditionToTerraform(struct!.lastModifiedDateCondition),
    parameters: cdktf.listMapper(dataAwsccDatabrewDatasetPathOptionsParametersToTerraform)(struct!.parameters),
  }
}

export class DataAwsccDatabrewDatasetTags extends cdktf.ComplexComputedList {

  // key - computed: true, optional: false, required: false
  public get key() {
    return this.getStringAttribute('key');
  }

  // value - computed: true, optional: false, required: false
  public get value() {
    return this.getStringAttribute('value');
  }
}

export function dataAwsccDatabrewDatasetTagsToTerraform(struct?: DataAwsccDatabrewDatasetTags): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    key: cdktf.stringToTerraform(struct!.key),
    value: cdktf.stringToTerraform(struct!.value),
  }
}


/**
* Represents a {@link https://www.terraform.io/docs/providers/awscc/d/databrew_dataset.html awscc_databrew_dataset}
*/
export class DataAwsccDatabrewDataset extends cdktf.TerraformDataSource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType: string = "awscc_databrew_dataset";

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://www.terraform.io/docs/providers/awscc/d/databrew_dataset.html awscc_databrew_dataset} Data Source
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DataAwsccDatabrewDatasetConfig
  */
  public constructor(scope: Construct, id: string, config: DataAwsccDatabrewDatasetConfig) {
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
    this._id = config.id;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // format - computed: true, optional: false, required: false
  public get format() {
    return this.getStringAttribute('format');
  }

  // format_options - computed: true, optional: false, required: false
  public get formatOptions() {
    return this.interpolationForAttribute('format_options') as any;
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

  // input - computed: true, optional: false, required: false
  public get input() {
    return this.interpolationForAttribute('input') as any;
  }

  // name - computed: true, optional: false, required: false
  public get name() {
    return this.getStringAttribute('name');
  }

  // path_options - computed: true, optional: false, required: false
  public get pathOptions() {
    return this.interpolationForAttribute('path_options') as any;
  }

  // tags - computed: true, optional: false, required: false
  public get tags() {
    return this.interpolationForAttribute('tags') as any;
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
