"use strict";
// https://www.terraform.io/docs/providers/awscc/d/databrew_dataset.html
// generated from terraform resource schema
Object.defineProperty(exports, "__esModule", { value: true });
exports.DataAwsccDatabrewDataset = exports.dataAwsccDatabrewDatasetTagsToTerraform = exports.DataAwsccDatabrewDatasetTags = exports.dataAwsccDatabrewDatasetPathOptionsToTerraform = exports.DataAwsccDatabrewDatasetPathOptions = exports.dataAwsccDatabrewDatasetPathOptionsParametersToTerraform = exports.DataAwsccDatabrewDatasetPathOptionsParameters = exports.dataAwsccDatabrewDatasetPathOptionsParametersDatasetParameterToTerraform = exports.DataAwsccDatabrewDatasetPathOptionsParametersDatasetParameter = exports.dataAwsccDatabrewDatasetPathOptionsParametersDatasetParameterFilterToTerraform = exports.DataAwsccDatabrewDatasetPathOptionsParametersDatasetParameterFilter = exports.dataAwsccDatabrewDatasetPathOptionsParametersDatasetParameterFilterValuesMapToTerraform = exports.DataAwsccDatabrewDatasetPathOptionsParametersDatasetParameterFilterValuesMap = exports.dataAwsccDatabrewDatasetPathOptionsParametersDatasetParameterDatetimeOptionsToTerraform = exports.DataAwsccDatabrewDatasetPathOptionsParametersDatasetParameterDatetimeOptions = exports.dataAwsccDatabrewDatasetPathOptionsLastModifiedDateConditionToTerraform = exports.DataAwsccDatabrewDatasetPathOptionsLastModifiedDateCondition = exports.dataAwsccDatabrewDatasetPathOptionsLastModifiedDateConditionValuesMapToTerraform = exports.DataAwsccDatabrewDatasetPathOptionsLastModifiedDateConditionValuesMap = exports.dataAwsccDatabrewDatasetPathOptionsFilesLimitToTerraform = exports.DataAwsccDatabrewDatasetPathOptionsFilesLimit = exports.dataAwsccDatabrewDatasetInputToTerraform = exports.DataAwsccDatabrewDatasetInput = exports.dataAwsccDatabrewDatasetInputS3InputDefinitionToTerraform = exports.DataAwsccDatabrewDatasetInputS3InputDefinition = exports.dataAwsccDatabrewDatasetInputDatabaseInputDefinitionToTerraform = exports.DataAwsccDatabrewDatasetInputDatabaseInputDefinition = exports.dataAwsccDatabrewDatasetInputDatabaseInputDefinitionTempDirectoryToTerraform = exports.DataAwsccDatabrewDatasetInputDatabaseInputDefinitionTempDirectory = exports.dataAwsccDatabrewDatasetInputDataCatalogInputDefinitionToTerraform = exports.DataAwsccDatabrewDatasetInputDataCatalogInputDefinition = exports.dataAwsccDatabrewDatasetInputDataCatalogInputDefinitionTempDirectoryToTerraform = exports.DataAwsccDatabrewDatasetInputDataCatalogInputDefinitionTempDirectory = exports.dataAwsccDatabrewDatasetFormatOptionsToTerraform = exports.DataAwsccDatabrewDatasetFormatOptions = exports.dataAwsccDatabrewDatasetFormatOptionsJsonToTerraform = exports.DataAwsccDatabrewDatasetFormatOptionsJson = exports.dataAwsccDatabrewDatasetFormatOptionsExcelToTerraform = exports.DataAwsccDatabrewDatasetFormatOptionsExcel = exports.dataAwsccDatabrewDatasetFormatOptionsCsvToTerraform = exports.DataAwsccDatabrewDatasetFormatOptionsCsv = void 0;
const cdktf = require("cdktf");
class DataAwsccDatabrewDatasetFormatOptionsCsv extends cdktf.ComplexComputedList {
    // delimiter - computed: true, optional: false, required: false
    get delimiter() {
        return this.getStringAttribute('delimiter');
    }
    // header_row - computed: true, optional: false, required: false
    get headerRow() {
        return this.getBooleanAttribute('header_row');
    }
}
exports.DataAwsccDatabrewDatasetFormatOptionsCsv = DataAwsccDatabrewDatasetFormatOptionsCsv;
function dataAwsccDatabrewDatasetFormatOptionsCsvToTerraform(struct) {
    if (!cdktf.canInspect(struct)) {
        return struct;
    }
    return {
        delimiter: cdktf.stringToTerraform(struct.delimiter),
        header_row: cdktf.booleanToTerraform(struct.headerRow),
    };
}
exports.dataAwsccDatabrewDatasetFormatOptionsCsvToTerraform = dataAwsccDatabrewDatasetFormatOptionsCsvToTerraform;
class DataAwsccDatabrewDatasetFormatOptionsExcel extends cdktf.ComplexComputedList {
    // header_row - computed: true, optional: false, required: false
    get headerRow() {
        return this.getBooleanAttribute('header_row');
    }
    // sheet_indexes - computed: true, optional: false, required: false
    get sheetIndexes() {
        return this.interpolationForAttribute('sheet_indexes');
    }
    // sheet_names - computed: true, optional: false, required: false
    get sheetNames() {
        return this.getListAttribute('sheet_names');
    }
}
exports.DataAwsccDatabrewDatasetFormatOptionsExcel = DataAwsccDatabrewDatasetFormatOptionsExcel;
function dataAwsccDatabrewDatasetFormatOptionsExcelToTerraform(struct) {
    if (!cdktf.canInspect(struct)) {
        return struct;
    }
    return {
        header_row: cdktf.booleanToTerraform(struct.headerRow),
        sheet_indexes: cdktf.listMapper(cdktf.numberToTerraform)(struct.sheetIndexes),
        sheet_names: cdktf.listMapper(cdktf.stringToTerraform)(struct.sheetNames),
    };
}
exports.dataAwsccDatabrewDatasetFormatOptionsExcelToTerraform = dataAwsccDatabrewDatasetFormatOptionsExcelToTerraform;
class DataAwsccDatabrewDatasetFormatOptionsJson extends cdktf.ComplexComputedList {
    // multi_line - computed: true, optional: false, required: false
    get multiLine() {
        return this.getBooleanAttribute('multi_line');
    }
}
exports.DataAwsccDatabrewDatasetFormatOptionsJson = DataAwsccDatabrewDatasetFormatOptionsJson;
function dataAwsccDatabrewDatasetFormatOptionsJsonToTerraform(struct) {
    if (!cdktf.canInspect(struct)) {
        return struct;
    }
    return {
        multi_line: cdktf.booleanToTerraform(struct.multiLine),
    };
}
exports.dataAwsccDatabrewDatasetFormatOptionsJsonToTerraform = dataAwsccDatabrewDatasetFormatOptionsJsonToTerraform;
class DataAwsccDatabrewDatasetFormatOptions extends cdktf.ComplexComputedList {
    // csv - computed: true, optional: false, required: false
    get csv() {
        return this.interpolationForAttribute('csv');
    }
    // excel - computed: true, optional: false, required: false
    get excel() {
        return this.interpolationForAttribute('excel');
    }
    // json - computed: true, optional: false, required: false
    get json() {
        return this.interpolationForAttribute('json');
    }
}
exports.DataAwsccDatabrewDatasetFormatOptions = DataAwsccDatabrewDatasetFormatOptions;
function dataAwsccDatabrewDatasetFormatOptionsToTerraform(struct) {
    if (!cdktf.canInspect(struct)) {
        return struct;
    }
    return {
        csv: dataAwsccDatabrewDatasetFormatOptionsCsvToTerraform(struct.csv),
        excel: dataAwsccDatabrewDatasetFormatOptionsExcelToTerraform(struct.excel),
        json: dataAwsccDatabrewDatasetFormatOptionsJsonToTerraform(struct.json),
    };
}
exports.dataAwsccDatabrewDatasetFormatOptionsToTerraform = dataAwsccDatabrewDatasetFormatOptionsToTerraform;
class DataAwsccDatabrewDatasetInputDataCatalogInputDefinitionTempDirectory extends cdktf.ComplexComputedList {
    // bucket - computed: true, optional: false, required: false
    get bucket() {
        return this.getStringAttribute('bucket');
    }
    // key - computed: true, optional: false, required: false
    get key() {
        return this.getStringAttribute('key');
    }
}
exports.DataAwsccDatabrewDatasetInputDataCatalogInputDefinitionTempDirectory = DataAwsccDatabrewDatasetInputDataCatalogInputDefinitionTempDirectory;
function dataAwsccDatabrewDatasetInputDataCatalogInputDefinitionTempDirectoryToTerraform(struct) {
    if (!cdktf.canInspect(struct)) {
        return struct;
    }
    return {
        bucket: cdktf.stringToTerraform(struct.bucket),
        key: cdktf.stringToTerraform(struct.key),
    };
}
exports.dataAwsccDatabrewDatasetInputDataCatalogInputDefinitionTempDirectoryToTerraform = dataAwsccDatabrewDatasetInputDataCatalogInputDefinitionTempDirectoryToTerraform;
class DataAwsccDatabrewDatasetInputDataCatalogInputDefinition extends cdktf.ComplexComputedList {
    // catalog_id - computed: true, optional: false, required: false
    get catalogId() {
        return this.getStringAttribute('catalog_id');
    }
    // database_name - computed: true, optional: false, required: false
    get databaseName() {
        return this.getStringAttribute('database_name');
    }
    // table_name - computed: true, optional: false, required: false
    get tableName() {
        return this.getStringAttribute('table_name');
    }
    // temp_directory - computed: true, optional: false, required: false
    get tempDirectory() {
        return this.interpolationForAttribute('temp_directory');
    }
}
exports.DataAwsccDatabrewDatasetInputDataCatalogInputDefinition = DataAwsccDatabrewDatasetInputDataCatalogInputDefinition;
function dataAwsccDatabrewDatasetInputDataCatalogInputDefinitionToTerraform(struct) {
    if (!cdktf.canInspect(struct)) {
        return struct;
    }
    return {
        catalog_id: cdktf.stringToTerraform(struct.catalogId),
        database_name: cdktf.stringToTerraform(struct.databaseName),
        table_name: cdktf.stringToTerraform(struct.tableName),
        temp_directory: dataAwsccDatabrewDatasetInputDataCatalogInputDefinitionTempDirectoryToTerraform(struct.tempDirectory),
    };
}
exports.dataAwsccDatabrewDatasetInputDataCatalogInputDefinitionToTerraform = dataAwsccDatabrewDatasetInputDataCatalogInputDefinitionToTerraform;
class DataAwsccDatabrewDatasetInputDatabaseInputDefinitionTempDirectory extends cdktf.ComplexComputedList {
    // bucket - computed: true, optional: false, required: false
    get bucket() {
        return this.getStringAttribute('bucket');
    }
    // key - computed: true, optional: false, required: false
    get key() {
        return this.getStringAttribute('key');
    }
}
exports.DataAwsccDatabrewDatasetInputDatabaseInputDefinitionTempDirectory = DataAwsccDatabrewDatasetInputDatabaseInputDefinitionTempDirectory;
function dataAwsccDatabrewDatasetInputDatabaseInputDefinitionTempDirectoryToTerraform(struct) {
    if (!cdktf.canInspect(struct)) {
        return struct;
    }
    return {
        bucket: cdktf.stringToTerraform(struct.bucket),
        key: cdktf.stringToTerraform(struct.key),
    };
}
exports.dataAwsccDatabrewDatasetInputDatabaseInputDefinitionTempDirectoryToTerraform = dataAwsccDatabrewDatasetInputDatabaseInputDefinitionTempDirectoryToTerraform;
class DataAwsccDatabrewDatasetInputDatabaseInputDefinition extends cdktf.ComplexComputedList {
    // database_table_name - computed: true, optional: false, required: false
    get databaseTableName() {
        return this.getStringAttribute('database_table_name');
    }
    // glue_connection_name - computed: true, optional: false, required: false
    get glueConnectionName() {
        return this.getStringAttribute('glue_connection_name');
    }
    // temp_directory - computed: true, optional: false, required: false
    get tempDirectory() {
        return this.interpolationForAttribute('temp_directory');
    }
}
exports.DataAwsccDatabrewDatasetInputDatabaseInputDefinition = DataAwsccDatabrewDatasetInputDatabaseInputDefinition;
function dataAwsccDatabrewDatasetInputDatabaseInputDefinitionToTerraform(struct) {
    if (!cdktf.canInspect(struct)) {
        return struct;
    }
    return {
        database_table_name: cdktf.stringToTerraform(struct.databaseTableName),
        glue_connection_name: cdktf.stringToTerraform(struct.glueConnectionName),
        temp_directory: dataAwsccDatabrewDatasetInputDatabaseInputDefinitionTempDirectoryToTerraform(struct.tempDirectory),
    };
}
exports.dataAwsccDatabrewDatasetInputDatabaseInputDefinitionToTerraform = dataAwsccDatabrewDatasetInputDatabaseInputDefinitionToTerraform;
class DataAwsccDatabrewDatasetInputS3InputDefinition extends cdktf.ComplexComputedList {
    // bucket - computed: true, optional: false, required: false
    get bucket() {
        return this.getStringAttribute('bucket');
    }
    // key - computed: true, optional: false, required: false
    get key() {
        return this.getStringAttribute('key');
    }
}
exports.DataAwsccDatabrewDatasetInputS3InputDefinition = DataAwsccDatabrewDatasetInputS3InputDefinition;
function dataAwsccDatabrewDatasetInputS3InputDefinitionToTerraform(struct) {
    if (!cdktf.canInspect(struct)) {
        return struct;
    }
    return {
        bucket: cdktf.stringToTerraform(struct.bucket),
        key: cdktf.stringToTerraform(struct.key),
    };
}
exports.dataAwsccDatabrewDatasetInputS3InputDefinitionToTerraform = dataAwsccDatabrewDatasetInputS3InputDefinitionToTerraform;
class DataAwsccDatabrewDatasetInput extends cdktf.ComplexComputedList {
    // data_catalog_input_definition - computed: true, optional: false, required: false
    get dataCatalogInputDefinition() {
        return this.interpolationForAttribute('data_catalog_input_definition');
    }
    // database_input_definition - computed: true, optional: false, required: false
    get databaseInputDefinition() {
        return this.interpolationForAttribute('database_input_definition');
    }
    // s3_input_definition - computed: true, optional: false, required: false
    get s3InputDefinition() {
        return this.interpolationForAttribute('s3_input_definition');
    }
}
exports.DataAwsccDatabrewDatasetInput = DataAwsccDatabrewDatasetInput;
function dataAwsccDatabrewDatasetInputToTerraform(struct) {
    if (!cdktf.canInspect(struct)) {
        return struct;
    }
    return {
        data_catalog_input_definition: dataAwsccDatabrewDatasetInputDataCatalogInputDefinitionToTerraform(struct.dataCatalogInputDefinition),
        database_input_definition: dataAwsccDatabrewDatasetInputDatabaseInputDefinitionToTerraform(struct.databaseInputDefinition),
        s3_input_definition: dataAwsccDatabrewDatasetInputS3InputDefinitionToTerraform(struct.s3InputDefinition),
    };
}
exports.dataAwsccDatabrewDatasetInputToTerraform = dataAwsccDatabrewDatasetInputToTerraform;
class DataAwsccDatabrewDatasetPathOptionsFilesLimit extends cdktf.ComplexComputedList {
    // max_files - computed: true, optional: false, required: false
    get maxFiles() {
        return this.getNumberAttribute('max_files');
    }
    // order - computed: true, optional: false, required: false
    get order() {
        return this.getStringAttribute('order');
    }
    // ordered_by - computed: true, optional: false, required: false
    get orderedBy() {
        return this.getStringAttribute('ordered_by');
    }
}
exports.DataAwsccDatabrewDatasetPathOptionsFilesLimit = DataAwsccDatabrewDatasetPathOptionsFilesLimit;
function dataAwsccDatabrewDatasetPathOptionsFilesLimitToTerraform(struct) {
    if (!cdktf.canInspect(struct)) {
        return struct;
    }
    return {
        max_files: cdktf.numberToTerraform(struct.maxFiles),
        order: cdktf.stringToTerraform(struct.order),
        ordered_by: cdktf.stringToTerraform(struct.orderedBy),
    };
}
exports.dataAwsccDatabrewDatasetPathOptionsFilesLimitToTerraform = dataAwsccDatabrewDatasetPathOptionsFilesLimitToTerraform;
class DataAwsccDatabrewDatasetPathOptionsLastModifiedDateConditionValuesMap extends cdktf.ComplexComputedList {
    // value - computed: true, optional: false, required: false
    get value() {
        return this.getStringAttribute('value');
    }
    // value_reference - computed: true, optional: false, required: false
    get valueReference() {
        return this.getStringAttribute('value_reference');
    }
}
exports.DataAwsccDatabrewDatasetPathOptionsLastModifiedDateConditionValuesMap = DataAwsccDatabrewDatasetPathOptionsLastModifiedDateConditionValuesMap;
function dataAwsccDatabrewDatasetPathOptionsLastModifiedDateConditionValuesMapToTerraform(struct) {
    if (!cdktf.canInspect(struct)) {
        return struct;
    }
    return {
        value: cdktf.stringToTerraform(struct.value),
        value_reference: cdktf.stringToTerraform(struct.valueReference),
    };
}
exports.dataAwsccDatabrewDatasetPathOptionsLastModifiedDateConditionValuesMapToTerraform = dataAwsccDatabrewDatasetPathOptionsLastModifiedDateConditionValuesMapToTerraform;
class DataAwsccDatabrewDatasetPathOptionsLastModifiedDateCondition extends cdktf.ComplexComputedList {
    // expression - computed: true, optional: false, required: false
    get expression() {
        return this.getStringAttribute('expression');
    }
    // values_map - computed: true, optional: false, required: false
    get valuesMap() {
        return this.interpolationForAttribute('values_map');
    }
}
exports.DataAwsccDatabrewDatasetPathOptionsLastModifiedDateCondition = DataAwsccDatabrewDatasetPathOptionsLastModifiedDateCondition;
function dataAwsccDatabrewDatasetPathOptionsLastModifiedDateConditionToTerraform(struct) {
    if (!cdktf.canInspect(struct)) {
        return struct;
    }
    return {
        expression: cdktf.stringToTerraform(struct.expression),
        values_map: cdktf.listMapper(dataAwsccDatabrewDatasetPathOptionsLastModifiedDateConditionValuesMapToTerraform)(struct.valuesMap),
    };
}
exports.dataAwsccDatabrewDatasetPathOptionsLastModifiedDateConditionToTerraform = dataAwsccDatabrewDatasetPathOptionsLastModifiedDateConditionToTerraform;
class DataAwsccDatabrewDatasetPathOptionsParametersDatasetParameterDatetimeOptions extends cdktf.ComplexComputedList {
    // format - computed: true, optional: false, required: false
    get format() {
        return this.getStringAttribute('format');
    }
    // locale_code - computed: true, optional: false, required: false
    get localeCode() {
        return this.getStringAttribute('locale_code');
    }
    // timezone_offset - computed: true, optional: false, required: false
    get timezoneOffset() {
        return this.getStringAttribute('timezone_offset');
    }
}
exports.DataAwsccDatabrewDatasetPathOptionsParametersDatasetParameterDatetimeOptions = DataAwsccDatabrewDatasetPathOptionsParametersDatasetParameterDatetimeOptions;
function dataAwsccDatabrewDatasetPathOptionsParametersDatasetParameterDatetimeOptionsToTerraform(struct) {
    if (!cdktf.canInspect(struct)) {
        return struct;
    }
    return {
        format: cdktf.stringToTerraform(struct.format),
        locale_code: cdktf.stringToTerraform(struct.localeCode),
        timezone_offset: cdktf.stringToTerraform(struct.timezoneOffset),
    };
}
exports.dataAwsccDatabrewDatasetPathOptionsParametersDatasetParameterDatetimeOptionsToTerraform = dataAwsccDatabrewDatasetPathOptionsParametersDatasetParameterDatetimeOptionsToTerraform;
class DataAwsccDatabrewDatasetPathOptionsParametersDatasetParameterFilterValuesMap extends cdktf.ComplexComputedList {
    // value - computed: true, optional: false, required: false
    get value() {
        return this.getStringAttribute('value');
    }
    // value_reference - computed: true, optional: false, required: false
    get valueReference() {
        return this.getStringAttribute('value_reference');
    }
}
exports.DataAwsccDatabrewDatasetPathOptionsParametersDatasetParameterFilterValuesMap = DataAwsccDatabrewDatasetPathOptionsParametersDatasetParameterFilterValuesMap;
function dataAwsccDatabrewDatasetPathOptionsParametersDatasetParameterFilterValuesMapToTerraform(struct) {
    if (!cdktf.canInspect(struct)) {
        return struct;
    }
    return {
        value: cdktf.stringToTerraform(struct.value),
        value_reference: cdktf.stringToTerraform(struct.valueReference),
    };
}
exports.dataAwsccDatabrewDatasetPathOptionsParametersDatasetParameterFilterValuesMapToTerraform = dataAwsccDatabrewDatasetPathOptionsParametersDatasetParameterFilterValuesMapToTerraform;
class DataAwsccDatabrewDatasetPathOptionsParametersDatasetParameterFilter extends cdktf.ComplexComputedList {
    // expression - computed: true, optional: false, required: false
    get expression() {
        return this.getStringAttribute('expression');
    }
    // values_map - computed: true, optional: false, required: false
    get valuesMap() {
        return this.interpolationForAttribute('values_map');
    }
}
exports.DataAwsccDatabrewDatasetPathOptionsParametersDatasetParameterFilter = DataAwsccDatabrewDatasetPathOptionsParametersDatasetParameterFilter;
function dataAwsccDatabrewDatasetPathOptionsParametersDatasetParameterFilterToTerraform(struct) {
    if (!cdktf.canInspect(struct)) {
        return struct;
    }
    return {
        expression: cdktf.stringToTerraform(struct.expression),
        values_map: cdktf.listMapper(dataAwsccDatabrewDatasetPathOptionsParametersDatasetParameterFilterValuesMapToTerraform)(struct.valuesMap),
    };
}
exports.dataAwsccDatabrewDatasetPathOptionsParametersDatasetParameterFilterToTerraform = dataAwsccDatabrewDatasetPathOptionsParametersDatasetParameterFilterToTerraform;
class DataAwsccDatabrewDatasetPathOptionsParametersDatasetParameter extends cdktf.ComplexComputedList {
    // create_column - computed: true, optional: false, required: false
    get createColumn() {
        return this.getBooleanAttribute('create_column');
    }
    // datetime_options - computed: true, optional: false, required: false
    get datetimeOptions() {
        return this.interpolationForAttribute('datetime_options');
    }
    // filter - computed: true, optional: false, required: false
    get filter() {
        return this.interpolationForAttribute('filter');
    }
    // name - computed: true, optional: false, required: false
    get name() {
        return this.getStringAttribute('name');
    }
    // type - computed: true, optional: false, required: false
    get type() {
        return this.getStringAttribute('type');
    }
}
exports.DataAwsccDatabrewDatasetPathOptionsParametersDatasetParameter = DataAwsccDatabrewDatasetPathOptionsParametersDatasetParameter;
function dataAwsccDatabrewDatasetPathOptionsParametersDatasetParameterToTerraform(struct) {
    if (!cdktf.canInspect(struct)) {
        return struct;
    }
    return {
        create_column: cdktf.booleanToTerraform(struct.createColumn),
        datetime_options: dataAwsccDatabrewDatasetPathOptionsParametersDatasetParameterDatetimeOptionsToTerraform(struct.datetimeOptions),
        filter: dataAwsccDatabrewDatasetPathOptionsParametersDatasetParameterFilterToTerraform(struct.filter),
        name: cdktf.stringToTerraform(struct.name),
        type: cdktf.stringToTerraform(struct.type),
    };
}
exports.dataAwsccDatabrewDatasetPathOptionsParametersDatasetParameterToTerraform = dataAwsccDatabrewDatasetPathOptionsParametersDatasetParameterToTerraform;
class DataAwsccDatabrewDatasetPathOptionsParameters extends cdktf.ComplexComputedList {
    // dataset_parameter - computed: true, optional: false, required: false
    get datasetParameter() {
        return this.interpolationForAttribute('dataset_parameter');
    }
    // path_parameter_name - computed: true, optional: false, required: false
    get pathParameterName() {
        return this.getStringAttribute('path_parameter_name');
    }
}
exports.DataAwsccDatabrewDatasetPathOptionsParameters = DataAwsccDatabrewDatasetPathOptionsParameters;
function dataAwsccDatabrewDatasetPathOptionsParametersToTerraform(struct) {
    if (!cdktf.canInspect(struct)) {
        return struct;
    }
    return {
        dataset_parameter: dataAwsccDatabrewDatasetPathOptionsParametersDatasetParameterToTerraform(struct.datasetParameter),
        path_parameter_name: cdktf.stringToTerraform(struct.pathParameterName),
    };
}
exports.dataAwsccDatabrewDatasetPathOptionsParametersToTerraform = dataAwsccDatabrewDatasetPathOptionsParametersToTerraform;
class DataAwsccDatabrewDatasetPathOptions extends cdktf.ComplexComputedList {
    // files_limit - computed: true, optional: false, required: false
    get filesLimit() {
        return this.interpolationForAttribute('files_limit');
    }
    // last_modified_date_condition - computed: true, optional: false, required: false
    get lastModifiedDateCondition() {
        return this.interpolationForAttribute('last_modified_date_condition');
    }
    // parameters - computed: true, optional: false, required: false
    get parameters() {
        return this.interpolationForAttribute('parameters');
    }
}
exports.DataAwsccDatabrewDatasetPathOptions = DataAwsccDatabrewDatasetPathOptions;
function dataAwsccDatabrewDatasetPathOptionsToTerraform(struct) {
    if (!cdktf.canInspect(struct)) {
        return struct;
    }
    return {
        files_limit: dataAwsccDatabrewDatasetPathOptionsFilesLimitToTerraform(struct.filesLimit),
        last_modified_date_condition: dataAwsccDatabrewDatasetPathOptionsLastModifiedDateConditionToTerraform(struct.lastModifiedDateCondition),
        parameters: cdktf.listMapper(dataAwsccDatabrewDatasetPathOptionsParametersToTerraform)(struct.parameters),
    };
}
exports.dataAwsccDatabrewDatasetPathOptionsToTerraform = dataAwsccDatabrewDatasetPathOptionsToTerraform;
class DataAwsccDatabrewDatasetTags extends cdktf.ComplexComputedList {
    // key - computed: true, optional: false, required: false
    get key() {
        return this.getStringAttribute('key');
    }
    // value - computed: true, optional: false, required: false
    get value() {
        return this.getStringAttribute('value');
    }
}
exports.DataAwsccDatabrewDatasetTags = DataAwsccDatabrewDatasetTags;
function dataAwsccDatabrewDatasetTagsToTerraform(struct) {
    if (!cdktf.canInspect(struct)) {
        return struct;
    }
    return {
        key: cdktf.stringToTerraform(struct.key),
        value: cdktf.stringToTerraform(struct.value),
    };
}
exports.dataAwsccDatabrewDatasetTagsToTerraform = dataAwsccDatabrewDatasetTagsToTerraform;
/**
* Represents a {@link https://www.terraform.io/docs/providers/awscc/d/databrew_dataset.html awscc_databrew_dataset}
*/
class DataAwsccDatabrewDataset extends cdktf.TerraformDataSource {
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
    constructor(scope, id, config) {
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
    get format() {
        return this.getStringAttribute('format');
    }
    // format_options - computed: true, optional: false, required: false
    get formatOptions() {
        return this.interpolationForAttribute('format_options');
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
    // input - computed: true, optional: false, required: false
    get input() {
        return this.interpolationForAttribute('input');
    }
    // name - computed: true, optional: false, required: false
    get name() {
        return this.getStringAttribute('name');
    }
    // path_options - computed: true, optional: false, required: false
    get pathOptions() {
        return this.interpolationForAttribute('path_options');
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
exports.DataAwsccDatabrewDataset = DataAwsccDatabrewDataset;
// =================
// STATIC PROPERTIES
// =================
DataAwsccDatabrewDataset.tfResourceType = "awscc_databrew_dataset";
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZGF0YS1hd3NjYy1kYXRhYnJldy1kYXRhc2V0LmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiZGF0YS1hd3NjYy1kYXRhYnJldy1kYXRhc2V0LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7QUFBQSx3RUFBd0U7QUFDeEUsMkNBQTJDOzs7QUFHM0MsK0JBQStCO0FBWS9CLE1BQWEsd0NBQXlDLFNBQVEsS0FBSyxDQUFDLG1CQUFtQjtJQUVyRiwrREFBK0Q7SUFDL0QsSUFBVyxTQUFTO1FBQ2xCLE9BQU8sSUFBSSxDQUFDLGtCQUFrQixDQUFDLFdBQVcsQ0FBQyxDQUFDO0lBQzlDLENBQUM7SUFFRCxnRUFBZ0U7SUFDaEUsSUFBVyxTQUFTO1FBQ2xCLE9BQU8sSUFBSSxDQUFDLG1CQUFtQixDQUFDLFlBQVksQ0FBQyxDQUFDO0lBQ2hELENBQUM7Q0FDRjtBQVhELDRGQVdDO0FBRUQsU0FBZ0IsbURBQW1ELENBQUMsTUFBaUQ7SUFDbkgsSUFBSSxDQUFDLEtBQUssQ0FBQyxVQUFVLENBQUMsTUFBTSxDQUFDLEVBQUU7UUFBRSxPQUFPLE1BQU0sQ0FBQztLQUFFO0lBQ2pELE9BQU87UUFDTCxTQUFTLEVBQUUsS0FBSyxDQUFDLGlCQUFpQixDQUFDLE1BQU8sQ0FBQyxTQUFTLENBQUM7UUFDckQsVUFBVSxFQUFFLEtBQUssQ0FBQyxrQkFBa0IsQ0FBQyxNQUFPLENBQUMsU0FBUyxDQUFDO0tBQ3hELENBQUE7QUFDSCxDQUFDO0FBTkQsa0hBTUM7QUFFRCxNQUFhLDBDQUEyQyxTQUFRLEtBQUssQ0FBQyxtQkFBbUI7SUFFdkYsZ0VBQWdFO0lBQ2hFLElBQVcsU0FBUztRQUNsQixPQUFPLElBQUksQ0FBQyxtQkFBbUIsQ0FBQyxZQUFZLENBQUMsQ0FBQztJQUNoRCxDQUFDO0lBRUQsbUVBQW1FO0lBQ25FLElBQVcsWUFBWTtRQUNyQixPQUFPLElBQUksQ0FBQyx5QkFBeUIsQ0FBQyxlQUFlLENBQVEsQ0FBQztJQUNoRSxDQUFDO0lBRUQsaUVBQWlFO0lB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USxDQUFDO0lBQ3hELENBQUM7SUFFRCwwREFBMEQ7SUFDMUQsSUFBVyxJQUFJO1FBQ2IsT0FBTyxJQUFJLENBQUMsa0JBQWtCLENBQUMsTUFBTSxDQUFDLENBQUM7SUFDekMsQ0FBQztJQUVELGtFQUFrRTtJQUNsRSxJQUFXLFdBQVc7UUFDcEIsT0FBTyxJQUFJLENBQUMseUJBQXlCLENBQUMsY0FBYyxDQUFRLENBQUM7SUFDL0QsQ0FBQztJQUVELDBEQUEwRDtJQUMxRCxJQUFXLElBQUk7UUFDYixPQUFPLElBQUksQ0FBQyx5QkFBeUIsQ0FBQyxNQUFNLENBQVEsQ0FBQztJQUN2RCxDQUFDO0lBRUQsWUFBWTtJQUNaLFlBQVk7SUFDWixZQUFZO0lBRUYsb0JBQW9CO1FBQzVCLE9BQU87WUFDTCxFQUFFLEVBQUUsS0FBSyxDQUFDLGlCQUFpQixDQUFDLElBQUksQ0FBQyxHQUFHLENBQUM7U0FDdEMsQ0FBQztJQUNKLENBQUM7O0FBdkZILDREQXdGQztBQXRGQyxvQkFBb0I7QUFDcEIsb0JBQW9CO0FBQ3BCLG9CQUFvQjtBQUNHLHVDQUFjLEdBQVcsd0JBQXdCLENBQUMiLCJzb3VyY2VzQ29udGVudCI6WyIvLyBodHRwczovL3d3dy50ZXJyYWZvcm0uaW8vZG9jcy9wcm92aWRlcnMvYXdzY2MvZC9kYXRhYnJld19kYXRhc2V0Lmh0bWxcbi8vIGdlbmVyYXRlZCBmcm9tIHRlcnJhZm9ybSByZXNvdXJjZSBzY2hlbWFcblxuaW1wb3J0IHsgQ29uc3RydWN0IH0gZnJvbSAnY29uc3RydWN0cyc7XG5pbXBvcnQgKiBhcyBjZGt0ZiBmcm9tICdjZGt0Zic7XG5cbi8vIENvbmZpZ3VyYXRpb25cblxuZXhwb3J0IGludGVyZmFjZSBEYXRhQXdzY2NEYXRhYnJld0RhdGFzZXRDb25maWcgZXh0ZW5kcyBjZGt0Zi5UZXJyYWZvcm1NZXRhQXJndW1lbnRzIHtcbiAgLyoqXG4gICogVW5pcXVlbHkgaWRlbnRpZmllcyB0aGUgcmVzb3VyY2UuXG4gICogXG4gICogRG9jcyBhdCBUZXJyYWZvcm0gUmVnaXN0cnk6IHtAbGluayBodHRwczovL3d3dy50ZXJyYWZvcm0uaW8vZG9jcy9wcm92aWRlcnMvYXdzY2MvZC9kYXRhYnJld19kYXRhc2V0Lmh0bWwjaWQgRGF0YUF3c2NjRGF0YWJyZXdEYXRhc2V0I2lkfVxuICAqL1xuICByZWFkb25seSBpZDogc3RyaW5nO1xufVxuZXhwb3J0IGNsYXNzIERhdGFBd3NjY0RhdGFicmV3RGF0YXNldEZvcm1hdE9wdGlvbnNDc3YgZXh0ZW5kcyBjZGt0Zi5Db21wbGV4Q29tcHV0ZWRMaXN0IHtcblxuICAvLyBkZWxpbWl0ZXIgLSBjb21wdXRlZDogdHJ1ZSwgb3B0aW9uYWw6IGZhbHNlLCByZXF1aXJlZDogZmFsc2VcbiAgcHVibGljIGdldCBkZWxpbWl0ZXIoKSB7XG4gICAgcmV0dXJuIHRoaXMuZ2V0U3RyaW5nQXR0cmlidXRlKCdkZWxpbWl0ZXInKTtcbiAgfVxuXG4gIC8vIGhlYWRlcl9yb3cgLSBjb21wdXRlZDogdHJ1ZSwgb3B0aW9uYWw6IGZhbHNlLCByZXF1aXJlZDogZmFsc2VcbiAgcHVibGljIGdldCBoZWFkZXJSb3coKSB7XG4gICAgcmV0dXJuIHRoaXMuZ2V0Qm9vbGVhbkF0dHJpYnV0ZSgnaGVhZGVyX3JvdycpO1xuICB9XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBkYXRhQXdzY2NEYXRhYnJld0RhdGFzZXRGb3JtYXRPcHRpb25zQ3N2VG9UZXJyYWZvcm0oc3RydWN0PzogRGF0YUF3c2NjRGF0YWJyZXdEYXRhc2V0Rm9ybWF0T3B0aW9uc0Nzdik6IGFueSB7XG4gIGlmICghY2RrdGYuY2FuSW5zcGVjdChzdHJ1Y3QpKSB7IHJldHVybiBzdHJ1Y3Q7IH1cbiAgcmV0dXJuIHtcbiAgICBkZWxpbWl0ZXI6IGNka3RmLnN0cmluZ1RvVGVycmFmb3JtKHN0cnVjdCEuZGVsaW1pdGVyKSxcbiAgICBoZWFkZXJfcm93OiBjZGt0Zi5ib29sZWFuVG9UZXJyYWZvcm0oc3RydWN0IS5oZWFkZXJSb3cpLFxuICB9XG59XG5cbmV4cG9ydCBjbGFzcyBEYXRhQXdzY2NEYXRhYnJld0RhdGFzZXRGb3JtYXRPcHRpb25zRXhjZWwgZXh0ZW5kcyBjZGt0Zi5Db21wbGV4Q29tcHV0ZWRMaXN0IHtcblxuICAvLyBoZWFkZXJfcm93IC0gY29tcHV0ZWQ6IHRydWUsIG9wdGlvbmFsOiBmYWxzZSwgcmVxdWlyZWQ6IGZhbHNlXG4gIHB1YmxpYyBnZXQgaGVhZGVyUm93KCkge1xuICAgIHJldHVybiB0aGlzLmdldEJvb2xlYW5BdHRyaWJ1dGUoJ2hlYWRlcl9yb3cnKTtcbiAgfVxuXG4gIC8vIHNoZWV0X2luZGV4ZXMgLSBjb21wdXRlZDogdHJ1ZSwgb3B0aW9uYWw6IGZhbHNlLCByZXF1aXJlZDogZmFsc2VcbiAgcHVibGljIGdldCBzaGVldEluZGV4ZXMoKSB7XG4gICAgcmV0dXJuIHRoaXMuaW50ZXJwb2xhdGlvbkZvckF0dHJpYnV0ZSgnc2hlZXRfaW5kZXhlcycpIGFzIGFueTtcbiAgfVxuXG4gIC8vIHNoZWV0X25hbWVzIC0gY29tcHV0ZWQ6IHRydWUsIG9wdGlvbmFsOiBmYWxzZSwgcmVxdWlyZWQ6IGZhbHNlXG4gIHB1YmxpYyBnZXQgc2hlZXROYW1lcygpIHtcbiAgICByZXR1cm4gdGhpcy5nZXRMaXN0QXR0cmlidXRlKCdzaGVldF9uYW1lcycpO1xuICB9XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBkYXRhQXdzY2NEYXRhYnJld0RhdGFzZXRGb3JtYXRPcHRpb25zRXhjZWxUb1RlcnJhZm9ybShzdHJ1Y3Q/OiBEYXRhQXdzY2NEYXRhYnJld0RhdGFzZXRGb3JtYXRPcHRpb25zRXhjZWwpOiBhbnkge1xuICBpZiAoIWNka3RmLmNhbkluc3BlY3Qoc3RydWN0KSkgeyByZXR1cm4gc3RydWN0OyB9XG4gIHJldHVybiB7XG4gICAgaGVhZGVyX3JvdzogY2RrdGYuYm9vbGVhblRvVGVycmFmb3JtKHN0cnVjdCEuaGVhZGVyUm93KSxcbiAgICBzaGVldF9pbmRleGVzOiBjZGt0Zi5saXN0TWFwcGVyKGNka3RmLm51bWJlclRvVGVycmFmb3JtKShzdHJ1Y3QhLnNoZWV0SW5kZXhlcyksXG4gICAgc2hlZXRfbmFtZXM6IGNka3RmLmxpc3RNYXBwZXIoY2RrdGYuc3RyaW5nVG9UZXJyYWZvcm0pKHN0cnVjdCEuc2hlZXROYW1lcyksXG4gIH1cbn1cblxuZXhwb3J0IGNsYXNzIERhdGFBd3NjY0RhdGFicmV3RGF0YXNldEZvcm1hdE9wdGlvbnNKc29uIGV4dGVuZHMgY2RrdGYuQ29tcGxleENvbXB1dGVkTGlzdCB7XG5cbiAgLy8gbXVsdGlfbGluZSAtIGNvbXB1dGVkOiB0cnVlLCBvcHRpb25hbDogZmFsc2UsIHJlcXVpcmVkOiBmYWxzZVxuICBwdWJsaWMgZ2V0IG11bHRpTGluZSgpIHtcbiAgICByZXR1cm4gdGhpcy5nZXRCb29sZWFuQXR0cmlidXRlKCdtdWx0aV9saW5lJyk7XG4gIH1cbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGRhdGFBd3NjY0RhdGFicmV3RGF0YXNldEZvcm1hdE9wdGlvbnNKc29uVG9UZXJyYWZvcm0oc3RydWN0PzogRGF0YUF3c2NjRGF0YWJyZXdEYXRhc2V0Rm9ybWF0T3B0aW9uc0pzb24pOiBhbnkge1xuICBpZiAoIWNka3RmLmNhbkluc3BlY3Qoc3RydWN0KSkgeyByZXR1cm4gc3RydWN0OyB9XG4gIHJldHVybiB7XG4gICAgbXVsdGlfbGluZTogY2RrdGYuYm9vbGVhblRvVGVycmFmb3JtKHN0cnVjdCEubXVsdGlMaW5lKSxcbiAgfVxufVxuXG5leHBvcnQgY2xhc3MgRGF0YUF3c2NjRGF0YWJyZXdEYXRhc2V0Rm9ybWF0T3B0aW9ucyBleHRlbmRzIGNka3RmLkNvbXBsZXhDb21wdXRlZExpc3Qge1xuXG4gIC8vIGNzdiAtIGNvbXB1dGVkOiB0cnVlLCBvcHRpb25hbDogZmFsc2UsIHJlcXVpcmVkOiBmYWxzZVxuICBwdWJsaWMgZ2V0IGNzdigpIHtcbiAgICByZXR1cm4gdGhpcy5pbnRlcnBvbGF0aW9uRm9yQXR0cmlidXRlKCdjc3YnKSBhcyBhbnk7XG4gIH1cblxuICAvLyBleGNlbCAtIGNvbXB1dGVkOiB0cnVlLCBvcHRpb25hbDogZmFsc2UsIHJlcXVpcmVkOiBmYWxzZVxuICBwdWJsaWMgZ2V0IGV4Y2VsKCkge1xuICAgIHJldHVybiB0aGlzLmludGVycG9sYXRpb25Gb3JBdHRyaWJ1dGUoJ2V4Y2VsJykgYXMgYW55O1xuICB9XG5cbiAgLy8ganNvbiAtIGNvbXB1dGVkOiB0cnVlLCBvcHRpb25hbDogZmFsc2UsIHJlcXVpcmVkOiBmYWxzZVxuICBwdWJsaWMgZ2V0IGpzb24oKSB7XG4gICAgcmV0dXJuIHRoaXMuaW50ZXJwb2xhdGlvbkZvckF0dHJpYnV0ZSgnanNvbicpIGFzIGFueTtcbiAgfVxufVxuXG5leHBvcnQgZnVuY3Rpb24gZGF0YUF3c2NjRGF0YWJyZXdEYXRhc2V0Rm9ybWF0T3B0aW9uc1RvVGVycmFmb3JtKHN0cnVjdD86IERhdGFBd3NjY0RhdGFicmV3RGF0YXNldEZvcm1hdE9wdGlvbnMpOiBhbnkge1xuICBpZiAoIWNka3RmLmNhbkluc3BlY3Qoc3RydWN0KSkgeyByZXR1cm4gc3RydWN0OyB9XG4gIHJldHVybiB7XG4gICAgY3N2OiBkYXRhQXdzY2NEYXRhYnJld0RhdGFzZXRGb3JtYXRPcHRpb25zQ3N2VG9UZXJyYWZvcm0oc3RydWN0IS5jc3YpLFxuICAgIGV4Y2VsOiBkYXRhQXdzY2NEYXRhYnJld0RhdGFzZXRGb3JtYXRPcHRpb25zRXhjZWxUb1RlcnJhZm9ybShzdHJ1Y3QhLmV4Y2VsKSxcbiAgICBqc29uOiBkYXRhQXdzY2NEYXRhYnJld0RhdGFzZXRGb3JtYXRPcHRpb25zSnNvblRvVGVycmFmb3JtKHN0cnVjdCEuanNvbiksXG4gIH1cbn1cblxuZXhwb3J0IGNsYXNzIERhdGFBd3NjY0RhdGFicmV3RGF0YXNldElucHV0RGF0YUNhdGFsb2dJbnB1dERlZmluaXRpb25UZW1wRGlyZWN0b3J5IGV4dGVuZHMgY2RrdGYuQ29tcGxleENvbXB1dGVkTGlzdCB7XG5cbiAgLy8gYnVja2V0IC0gY29tcHV0ZWQ6IHRydWUsIG9wdGlvbmFsOiBmYWxzZSwgcmVxdWlyZWQ6IGZhbHNlXG4gIHB1YmxpYyBnZXQgYnVja2V0KCkge1xuICAgIHJldHVybiB0aGlzLmdldFN0cmluZ0F0dHJpYnV0ZSgnYnVja2V0Jyk7XG4gIH1cblxuICAvLyBrZXkgLSBjb21wdXRlZDogdHJ1ZSwgb3B0aW9uYWw6IGZhbHNlLCByZXF1aXJlZDogZmFsc2VcbiAgcHVibGljIGdldCBrZXkoKSB7XG4gICAgcmV0dXJuIHRoaXMuZ2V0U3RyaW5nQXR0cmlidXRlKCdrZXknKTtcbiAgfVxufVxuXG5leHBvcnQgZnVuY3Rpb24gZGF0YUF3c2NjRGF0YWJyZXdEYXRhc2V0SW5wdXREYXRhQ2F0YWxvZ0lucHV0RGVmaW5pdGlvblRlbXBEaXJlY3RvcnlUb1RlcnJhZm9ybShzdHJ1Y3Q/OiBEYXRhQXdzY2NEYXRhYnJld0RhdGFzZXRJbnB1dERhdGFDYXRhbG9nSW5wdXREZWZpbml0aW9uVGVtcERpcmVjdG9yeSk6IGFueSB7XG4gIGlmICghY2RrdGYuY2FuSW5zcGVjdChzdHJ1Y3QpKSB7IHJldHVybiBzdHJ1Y3Q7IH1cbiAgcmV0dXJuIHtcbiAgICBidWNrZXQ6IGNka3RmLnN0cmluZ1RvVGVycmFmb3JtKHN0cnVjdCEuYnVja2V0KSxcbiAgICBrZXk6IGNka3RmLnN0cmluZ1RvVGVycmFmb3JtKHN0cnVjdCEua2V5KSxcbiAgfVxufVxuXG5leHBvcnQgY2xhc3MgRGF0YUF3c2NjRGF0YWJyZXdEYXRhc2V0SW5wdXREYXRhQ2F0YWxvZ0lucHV0RGVmaW5pdGlvbiBleHRlbmRzIGNka3RmLkNvbXBsZXhDb21wdXRlZExpc3Qge1xuXG4gIC8vIGNhdGFsb2dfaWQgLSBjb21wdXRlZDogdHJ1ZSwgb3B0aW9uYWw6IGZhbHNlLCByZXF1aXJlZDogZmFsc2VcbiAgcHVibGljIGdldCBjYXRhbG9nSWQoKSB7XG4gICAgcmV0dXJuIHRoaXMuZ2V0U3RyaW5nQXR0cmlidXRlKCdjYXRhbG9nX2lkJyk7XG4gIH1cblxuICAvLyBkYXRhYmFzZV9uYW1lIC0gY29tcHV0ZWQ6IHRydWUsIG9wdGlvbmFsOiBmYWxzZSwgcmVxdWlyZWQ6IGZhbHNlXG4gIHB1YmxpYyBnZXQgZGF0YWJhc2VOYW1lKCkge1xuICAgIHJldHVybiB0aGlzLmdldFN0cmluZ0F0dHJpYnV0ZSgnZGF0YWJhc2VfbmFtZScpO1xuICB9XG5cbiAgLy8gdGFibGVfbmFtZSAtIGNvbXB1dGVkOiB0cnVlLCBvcHRpb25hbDogZmFsc2UsIHJlcXVpcmVkOiBmYWxzZVxuICBwdWJsaWMgZ2V0IHRhYmxlTmFtZSgpIHtcbiAgICByZXR1cm4gdGhpcy5nZXRTdHJpbmdBdHRyaWJ1dGUoJ3RhYmxlX25hbWUnKTtcbiAgfVxuXG4gIC8vIHRlbXBfZGlyZWN0b3J5IC0gY29tcHV0ZWQ6IHRydWUsIG9wdGlvbmFsOiBmYWxzZSwgcmVxdWlyZWQ6IGZhbHNlXG4gIHB1YmxpYyBnZXQgdGVtcERpcmVjdG9yeSgpIHtcbiAgICByZXR1cm4gdGhpcy5pbnRlcnBvbGF0aW9uRm9yQXR0cmlidXRlKCd0ZW1wX2RpcmVjdG9yeScpIGFzIGFueTtcbiAgfVxufVxuXG5leHBvcnQgZnVuY3Rpb24gZGF0YUF3c2NjRGF0YWJyZXdEYXRhc2V0SW5wdXREYXRhQ2F0YWxvZ0lucHV0RGVmaW5pdGlvblRvVGVycmFmb3JtKHN0cnVjdD86IERhdGFBd3NjY0RhdGFicmV3RGF0YXNldElucHV0RGF0YUNhdGFsb2dJbnB1dERlZmluaXRpb24pOiBhbnkge1xuICBpZiAoIWNka3RmLmNhbkluc3BlY3Qoc3RydWN0KSkgeyByZXR1cm4gc3RydWN0OyB9XG4gIHJldHVybiB7XG4gICAgY2F0YWxvZ19pZDogY2RrdGYuc3RyaW5nVG9UZXJyYWZvcm0oc3RydWN0IS5jYXRhbG9nSWQpLFxuICAgIGRhdGFiYXNlX25hbWU6IGNka3RmLnN0cmluZ1RvVGVycmFmb3JtKHN0cnVjdCEuZGF0YWJhc2VOYW1lKSxcbiAgICB0YWJsZV9uYW1lOiBjZGt0Zi5zdHJpbmdUb1RlcnJhZm9ybShzdHJ1Y3QhLnRhYmxlTmFtZSksXG4gICAgdGVtcF9kaXJlY3Rvcnk6IGRhdGFBd3NjY0RhdGFicmV3RGF0YXNldElucHV0RGF0YUNhdGFsb2dJbnB1dERlZmluaXRpb25UZW1wRGlyZWN0b3J5VG9UZXJyYWZvcm0oc3RydWN0IS50ZW1wRGlyZWN0b3J5KSxcbiAgfVxufVxuXG5leHBvcnQgY2xhc3MgRGF0YUF3c2NjRGF0YWJyZXdEYXRhc2V0SW5wdXREYXRhYmFzZUlucHV0RGVmaW5pdGlvblRlbXBEaXJlY3RvcnkgZXh0ZW5kcyBjZGt0Zi5Db21wbGV4Q29tcHV0ZWRMaXN0IHtcblxuICAvLyBidWNrZXQgLSBjb21wdXRlZDogdHJ1ZSwgb3B0aW9uYWw6IGZhbHNlLCByZXF1aXJlZDogZmFsc2VcbiAgcHVibGljIGdldCBidWNrZXQoKSB7XG4gICAgcmV0dXJuIHRoaXMuZ2V0U3RyaW5nQXR0cmlidXRlKCdidWNrZXQnKTtcbiAgfVxuXG4gIC8vIGtleSAtIGNvbXB1dGVkOiB0cnVlLCBvcHRpb25hbDogZmFsc2UsIHJlcXVpcmVkOiBmYWxzZVxuICBwdWJsaWMgZ2V0IGtleSgpIHtcbiAgICByZXR1cm4gdGhpcy5nZXRTdHJpbmdBdHRyaWJ1dGUoJ2tleScpO1xuICB9XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBkYXRhQXdzY2NEYXRhYnJld0RhdGFzZXRJbnB1dERhdGFiYXNlSW5wdXREZWZpbml0aW9uVGVtcERpcmVjdG9yeVRvVGVycmFmb3JtKHN0cnVjdD86IERhdGFBd3NjY0RhdGFicmV3RGF0YXNldElucHV0RGF0YWJhc2VJbnB1dERlZmluaXRpb25UZW1wRGlyZWN0b3J5KTogYW55IHtcbiAgaWYgKCFjZGt0Zi5jYW5JbnNwZWN0KHN0cnVjdCkpIHsgcmV0dXJuIHN0cnVjdDsgfVxuICByZXR1cm4ge1xuICAgIGJ1Y2tldDogY2RrdGYuc3RyaW5nVG9UZXJyYWZvcm0oc3RydWN0IS5idWNrZXQpLFxuICAgIGtleTogY2RrdGYuc3RyaW5nVG9UZXJyYWZvcm0oc3RydWN0IS5rZXkpLFxuICB9XG59XG5cbmV4cG9ydCBjbGFzcyBEYXRhQXdzY2NEYXRhYnJld0RhdGFzZXRJbnB1dERhdGFiYXNlSW5wdXREZWZpbml0aW9uIGV4dGVuZHMgY2RrdGYuQ29tcGxleENvbXB1dGVkTGlzdCB7XG5cbiAgLy8gZGF0YWJhc2VfdGFibGVfbmFtZSAtIGNvbXB1dGVkOiB0cnVlLCBvcHRpb25hbDogZmFsc2UsIHJlcXVpcmVkOiBmYWxzZVxuICBwdWJsaWMgZ2V0IGRhdGFiYXNlVGFibGVOYW1lKCkge1xuICAgIHJldHVybiB0aGlzLmdldFN0cmluZ0F0dHJpYnV0ZSgnZGF0YWJhc2VfdGFibGVfbmFtZScpO1xuICB9XG5cbiAgLy8gZ2x1ZV9jb25uZWN0aW9uX25hbWUgLSBjb21wdXRlZDogdHJ1ZSwgb3B0aW9uYWw6IGZhbHNlLCByZXF1aXJlZDogZmFsc2VcbiAgcHVibGljIGdldCBnbHVlQ29ubmVjdGlvbk5hbWUoKSB7XG4gICAgcmV0dXJuIHRoaXMuZ2V0U3RyaW5nQXR0cmlidXRlKCdnbHVlX2Nvbm5lY3Rpb25fbmFtZScpO1xuICB9XG5cbiAgLy8gdGVtcF9kaXJlY3RvcnkgLSBjb21wdXRlZDogdHJ1ZSwgb3B0aW9uYWw6IGZhbHNlLCByZXF1aXJlZDogZmFsc2VcbiAgcHVibGljIGdldCB0ZW1wRGlyZWN0b3J5KCkge1xuICAgIHJldHVybiB0aGlzLmludGVycG9sYXRpb25Gb3JBdHRyaWJ1dGUoJ3RlbXBfZGlyZWN0b3J5JykgYXMgYW55O1xuICB9XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBkYXRhQXdzY2NEYXRhYnJld0RhdGFzZXRJbnB1dERhdGFiYXNlSW5wdXREZWZpbml0aW9uVG9UZXJyYWZvcm0oc3RydWN0PzogRGF0YUF3c2NjRGF0YWJyZXdEYXRhc2V0SW5wdXREYXRhYmFzZUlucHV0RGVmaW5pdGlvbik6IGFueSB7XG4gIGlmICghY2RrdGYuY2FuSW5zcGVjdChzdHJ1Y3QpKSB7IHJldHVybiBzdHJ1Y3Q7IH1cbiAgcmV0dXJuIHtcbiAgICBkYXRhYmFzZV90YWJsZV9uYW1lOiBjZGt0Zi5zdHJpbmdUb1RlcnJhZm9ybShzdHJ1Y3QhLmRhdGFiYXNlVGFibGVOYW1lKSxcbiAgICBnbHVlX2Nvbm5lY3Rpb25fbmFtZTogY2RrdGYuc3RyaW5nVG9UZXJyYWZvcm0oc3RydWN0IS5nbHVlQ29ubmVjdGlvbk5hbWUpLFxuICAgIHRlbXBfZGlyZWN0b3J5OiBkYXRhQXdzY2NEYXRhYnJld0RhdGFzZXRJbnB1dERhdGFiYXNlSW5wdXREZWZpbml0aW9uVGVtcERpcmVjdG9yeVRvVGVycmFmb3JtKHN0cnVjdCEudGVtcERpcmVjdG9yeSksXG4gIH1cbn1cblxuZXhwb3J0IGNsYXNzIERhdGFBd3NjY0RhdGFicmV3RGF0YXNldElucHV0UzNJbnB1dERlZmluaXRpb24gZXh0ZW5kcyBjZGt0Zi5Db21wbGV4Q29tcHV0ZWRMaXN0IHtcblxuICAvLyBidWNrZXQgLSBjb21wdXRlZDogdHJ1ZSwgb3B0aW9uYWw6IGZhbHNlLCByZXF1aXJlZDogZmFsc2VcbiAgcHVibGljIGdldCBidWNrZXQoKSB7XG4gICAgcmV0dXJuIHRoaXMuZ2V0U3RyaW5nQXR0cmlidXRlKCdidWNrZXQnKTtcbiAgfVxuXG4gIC8vIGtleSAtIGNvbXB1dGVkOiB0cnVlLCBvcHRpb25hbDogZmFsc2UsIHJlcXVpcmVkOiBmYWxzZVxuICBwdWJsaWMgZ2V0IGtleSgpIHtcbiAgICByZXR1cm4gdGhpcy5nZXRTdHJpbmdBdHRyaWJ1dGUoJ2tleScpO1xuICB9XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBkYXRhQXdzY2NEYXRhYnJld0RhdGFzZXRJbnB1dFMzSW5wdXREZWZpbml0aW9uVG9UZXJyYWZvcm0oc3RydWN0PzogRGF0YUF3c2NjRGF0YWJyZXdEYXRhc2V0SW5wdXRTM0lucHV0RGVmaW5pdGlvbik6IGFueSB7XG4gIGlmICghY2RrdGYuY2FuSW5zcGVjdChzdHJ1Y3QpKSB7IHJldHVybiBzdHJ1Y3Q7IH1cbiAgcmV0dXJuIHtcbiAgICBidWNrZXQ6IGNka3RmLnN0cmluZ1RvVGVycmFmb3JtKHN0cnVjdCEuYnVja2V0KSxcbiAgICBrZXk6IGNka3RmLnN0cmluZ1RvVGVycmFmb3JtKHN0cnVjdCEua2V5KSxcbiAgfVxufVxuXG5leHBvcnQgY2xhc3MgRGF0YUF3c2NjRGF0YWJyZXdEYXRhc2V0SW5wdXQgZXh0ZW5kcyBjZGt0Zi5Db21wbGV4Q29tcHV0ZWRMaXN0IHtcblxuICAvLyBkYXRhX2NhdGFsb2dfaW5wdXRfZGVmaW5pdGlvbiAtIGNvbXB1dGVkOiB0cnVlLCBvcHRpb25hbDogZmFsc2UsIHJlcXVpcmVkOiBmYWxzZVxuICBwdWJsaWMgZ2V0IGRhdGFDYXRhbG9nSW5wdXREZWZpbml0aW9uKCkge1xuICAgIHJldHVybiB0aGlzLmludGVycG9sYXRpb25Gb3JBdHRyaWJ1dGUoJ2RhdGFfY2F0YWxvZ19pbnB1dF9kZWZpbml0aW9uJykgYXMgYW55O1xuICB9XG5cbiAgLy8gZGF0YWJhc2VfaW5wdXRfZGVmaW5pdGlvbiAtIGNvbXB1dGVkOiB0cnVlLCBvcHRpb25hbDogZmFsc2UsIHJlcXVpcmVkOiBmYWxzZVxuICBwdWJsaWMgZ2V0IGRhdGFiYXNlSW5wdXREZWZpbml0aW9uKCkge1xuICAgIHJldHVybiB0aGlzLmludGVycG9sYXRpb25Gb3JBdHRyaWJ1dGUoJ2RhdGFiYXNlX2lucHV0X2RlZmluaXRpb24nKSBhcyBhbnk7XG4gIH1cblxuICAvLyBzM19pbnB1dF9kZWZpbml0aW9uIC0gY29tcHV0ZWQ6IHRydWUsIG9wdGlvbmFsOiBmYWxzZSwgcmVxdWlyZWQ6IGZhbHNlXG4gIHB1YmxpYyBnZXQgczNJbnB1dERlZmluaXRpb24oKSB7XG4gICAgcmV0dXJuIHRoaXMuaW50ZXJwb2xhdGlvbkZvckF0dHJpYnV0ZSgnczNfaW5wdXRfZGVmaW5pdGlvbicpIGFzIGFueTtcbiAgfVxufVxuXG5leHBvcnQgZnVuY3Rpb24gZGF0YUF3c2NjRGF0YWJyZXdEYXRhc2V0SW5wdXRUb1RlcnJhZm9ybShzdHJ1Y3Q/OiBEYXRhQXdzY2NEYXRhYnJld0RhdGFzZXRJbnB1dCk6IGFueSB7XG4gIGlmICghY2RrdGYuY2FuSW5zcGVjdChzdHJ1Y3QpKSB7IHJldHVybiBzdHJ1Y3Q7IH1cbiAgcmV0dXJuIHtcbiAgICBkYXRhX2NhdGFsb2dfaW5wdXRfZGVmaW5pdGlvbjogZGF0YUF3c2NjRGF0YWJyZXdEYXRhc2V0SW5wdXREYXRhQ2F0YWxvZ0lucHV0RGVmaW5pdGlvblRvVGVycmFmb3JtKHN0cnVjdCEuZGF0YUNhdGFsb2dJbnB1dERlZmluaXRpb24pLFxuICAgIGRhdGFiYXNlX2lucHV0X2RlZmluaXRpb246IGRhdGFBd3NjY0RhdGFicmV3RGF0YXNldElucHV0RGF0YWJhc2VJbnB1dERlZmluaXRpb25Ub1RlcnJhZm9ybShzdHJ1Y3QhLmRhdGFiYXNlSW5wdXREZWZpbml0aW9uKSxcbiAgICBzM19pbnB1dF9kZWZpbml0aW9uOiBkYXRhQXdzY2NEYXRhYnJld0RhdGFzZXRJbnB1dFMzSW5wdXREZWZpbml0aW9uVG9UZXJyYWZvcm0oc3RydWN0IS5zM0lucHV0RGVmaW5pdGlvbiksXG4gIH1cbn1cblxuZXhwb3J0IGNsYXNzIERhdGFBd3NjY0RhdGFicmV3RGF0YXNldFBhdGhPcHRpb25zRmlsZXNMaW1pdCBleHRlbmRzIGNka3RmLkNvbXBsZXhDb21wdXRlZExpc3Qge1xuXG4gIC8vIG1heF9maWxlcyAtIGNvbXB1dGVkOiB0cnVlLCBvcHRpb25hbDogZmFsc2UsIHJlcXVpcmVkOiBmYWxzZVxuICBwdWJsaWMgZ2V0IG1heEZpbGVzKCkge1xuICAgIHJldHVybiB0aGlzLmdldE51bWJlckF0dHJpYnV0ZSgnbWF4X2ZpbGVzJyk7XG4gIH1cblxuICAvLyBvcmRlciAtIGNvbXB1dGVkOiB0cnVlLCBvcHRpb25hbDogZmFsc2UsIHJlcXVpcmVkOiBmYWxzZVxuICBwdWJsaWMgZ2V0IG9yZGVyKCkge1xuICAgIHJldHVybiB0aGlzLmdldFN0cmluZ0F0dHJpYnV0ZSgnb3JkZXInKTtcbiAgfVxuXG4gIC8vIG9yZGVyZWRfYnkgLSBjb21wdXRlZDogdHJ1ZSwgb3B0aW9uYWw6IGZhbHNlLCByZXF1aXJlZDogZmFsc2VcbiAgcHVibGljIGdldCBvcmRlcmVkQnkoKSB7XG4gICAgcmV0dXJuIHRoaXMuZ2V0U3RyaW5nQXR0cmlidXRlKCdvcmRlcmVkX2J5Jyk7XG4gIH1cbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGRhdGFBd3NjY0RhdGFicmV3RGF0YXNldFBhdGhPcHRpb25zRmlsZXNMaW1pdFRvVGVycmFmb3JtKHN0cnVjdD86IERhdGFBd3NjY0RhdGFicmV3RGF0YXNldFBhdGhPcHRpb25zRmlsZXNMaW1pdCk6IGFueSB7XG4gIGlmICghY2RrdGYuY2FuSW5zcGVjdChzdHJ1Y3QpKSB7IHJldHVybiBzdHJ1Y3Q7IH1cbiAgcmV0dXJuIHtcbiAgICBtYXhfZmlsZXM6IGNka3RmLm51bWJlclRvVGVycmFmb3JtKHN0cnVjdCEubWF4RmlsZXMpLFxuICAgIG9yZGVyOiBjZGt0Zi5zdHJpbmdUb1RlcnJhZm9ybShzdHJ1Y3QhLm9yZGVyKSxcbiAgICBvcmRlcmVkX2J5OiBjZGt0Zi5zdHJpbmdUb1RlcnJhZm9ybShzdHJ1Y3QhLm9yZGVyZWRCeSksXG4gIH1cbn1cblxuZXhwb3J0IGNsYXNzIERhdGFBd3NjY0RhdGFicmV3RGF0YXNldFBhdGhPcHRpb25zTGFzdE1vZGlmaWVkRGF0ZUNvbmRpdGlvblZhbHVlc01hcCBleHRlbmRzIGNka3RmLkNvbXBsZXhDb21wdXRlZExpc3Qge1xuXG4gIC8vIHZhbHVlIC0gY29tcHV0ZWQ6IHRydWUsIG9wdGlvbmFsOiBmYWxzZSwgcmVxdWlyZWQ6IGZhbHNlXG4gIHB1YmxpYyBnZXQgdmFsdWUoKSB7XG4gICAgcmV0dXJuIHRoaXMuZ2V0U3RyaW5nQXR0cmlidXRlKCd2YWx1ZScpO1xuICB9XG5cbiAgLy8gdmFsdWVfcmVmZXJlbmNlIC0gY29tcHV0ZWQ6IHRydWUsIG9wdGlvbmFsOiBmYWxzZSwgcmVxdWlyZWQ6IGZhbHNlXG4gIHB1YmxpYyBnZXQgdmFsdWVSZWZlcmVuY2UoKSB7XG4gICAgcmV0dXJuIHRoaXMuZ2V0U3RyaW5nQXR0cmlidXRlKCd2YWx1ZV9yZWZlcmVuY2UnKTtcbiAgfVxufVxuXG5leHBvcnQgZnVuY3Rpb24gZGF0YUF3c2NjRGF0YWJyZXdEYXRhc2V0UGF0aE9wdGlvbnNMYXN0TW9kaWZpZWREYXRlQ29uZGl0aW9uVmFsdWVzTWFwVG9UZXJyYWZvcm0oc3RydWN0PzogRGF0YUF3c2NjRGF0YWJyZXdEYXRhc2V0UGF0aE9wdGlvbnNMYXN0TW9kaWZpZWREYXRlQ29uZGl0aW9uVmFsdWVzTWFwKTogYW55IHtcbiAgaWYgKCFjZGt0Zi5jYW5JbnNwZWN0KHN0cnVjdCkpIHsgcmV0dXJuIHN0cnVjdDsgfVxuICByZXR1cm4ge1xuICAgIHZhbHVlOiBjZGt0Zi5zdHJpbmdUb1RlcnJhZm9ybShzdHJ1Y3QhLnZhbHVlKSxcbiAgICB2YWx1ZV9yZWZlcmVuY2U6IGNka3RmLnN0cmluZ1RvVGVycmFmb3JtKHN0cnVjdCEudmFsdWVSZWZlcmVuY2UpLFxuICB9XG59XG5cbmV4cG9ydCBjbGFzcyBEYXRhQXdzY2NEYXRhYnJld0RhdGFzZXRQYXRoT3B0aW9uc0xhc3RNb2RpZmllZERhdGVDb25kaXRpb24gZXh0ZW5kcyBjZGt0Zi5Db21wbGV4Q29tcHV0ZWRMaXN0IHtcblxuICAvLyBleHByZXNzaW9uIC0gY29tcHV0ZWQ6IHRydWUsIG9wdGlvbmFsOiBmYWxzZSwgcmVxdWlyZWQ6IGZhbHNlXG4gIHB1YmxpYyBnZXQgZXhwcmVzc2lvbigpIHtcbiAgICByZXR1cm4gdGhpcy5nZXRTdHJpbmdBdHRyaWJ1dGUoJ2V4cHJlc3Npb24nKTtcbiAgfVxuXG4gIC8vIHZhbHVlc19tYXAgLSBjb21wdXRlZDogdHJ1ZSwgb3B0aW9uYWw6IGZhbHNlLCByZXF1aXJlZDogZmFsc2VcbiAgcHVibGljIGdldCB2YWx1ZXNNYXAoKSB7XG4gICAgcmV0dXJuIHRoaXMuaW50ZXJwb2xhdGlvbkZvckF0dHJpYnV0ZSgndmFsdWVzX21hcCcpIGFzIGFueTtcbiAgfVxufVxuXG5leHBvcnQgZnVuY3Rpb24gZGF0YUF3c2NjRGF0YWJyZXdEYXRhc2V0UGF0aE9wdGlvbnNMYXN0TW9kaWZpZWREYXRlQ29uZGl0aW9uVG9UZXJyYWZvcm0oc3RydWN0PzogRGF0YUF3c2NjRGF0YWJyZXdEYXRhc2V0UGF0aE9wdGlvbnNMYXN0TW9kaWZpZWREYXRlQ29uZGl0aW9uKTogYW55IHtcbiAgaWYgKCFjZGt0Zi5jYW5JbnNwZWN0KHN0cnVjdCkpIHsgcmV0dXJuIHN0cnVjdDsgfVxuICByZXR1cm4ge1xuICAgIGV4cHJlc3Npb246IGNka3RmLnN0cmluZ1RvVGVycmFmb3JtKHN0cnVjdCEuZXhwcmVzc2lvbiksXG4gICAgdmFsdWVzX21hcDogY2RrdGYubGlzdE1hcHBlcihkYXRhQXdzY2NEYXRhYnJld0RhdGFzZXRQYXRoT3B0aW9uc0xhc3RNb2RpZmllZERhdGVDb25kaXRpb25WYWx1ZXNNYXBUb1RlcnJhZm9ybSkoc3RydWN0IS52YWx1ZXNNYXApLFxuICB9XG59XG5cbmV4cG9ydCBjbGFzcyBEYXRhQXdzY2NEYXRhYnJld0RhdGFzZXRQYXRoT3B0aW9uc1BhcmFtZXRlcnNEYXRhc2V0UGFyYW1ldGVyRGF0ZXRpbWVPcHRpb25zIGV4dGVuZHMgY2RrdGYuQ29tcGxleENvbXB1dGVkTGlzdCB7XG5cbiAgLy8gZm9ybWF0IC0gY29tcHV0ZWQ6IHRydWUsIG9wdGlvbmFsOiBmYWxzZSwgcmVxdWlyZWQ6IGZhbHNlXG4gIHB1YmxpYyBnZXQgZm9ybWF0KCkge1xuICAgIHJldHVybiB0aGlzLmdldFN0cmluZ0F0dHJpYnV0ZSgnZm9ybWF0Jyk7XG4gIH1cblxuICAvLyBsb2NhbGVfY29kZSAtIGNvbXB1dGVkOiB0cnVlLCBvcHRpb25hbDogZmFsc2UsIHJlcXVpcmVkOiBmYWxzZVxuICBwdWJsaWMgZ2V0IGxvY2FsZUNvZGUoKSB7XG4gICAgcmV0dXJuIHRoaXMuZ2V0U3RyaW5nQXR0cmlidXRlKCdsb2NhbGVfY29kZScpO1xuICB9XG5cbiAgLy8gdGltZXpvbmVfb2Zmc2V0IC0gY29tcHV0ZWQ6IHRydWUsIG9wdGlvbmFsOiBmYWxzZSwgcmVxdWlyZWQ6IGZhbHNlXG4gIHB1YmxpYyBnZXQgdGltZXpvbmVPZmZzZXQoKSB7XG4gICAgcmV0dXJuIHRoaXMuZ2V0U3RyaW5nQXR0cmlidXRlKCd0aW1lem9uZV9vZmZzZXQnKTtcbiAgfVxufVxuXG5leHBvcnQgZnVuY3Rpb24gZGF0YUF3c2NjRGF0YWJyZXdEYXRhc2V0UGF0aE9wdGlvbnNQYXJhbWV0ZXJzRGF0YXNldFBhcmFtZXRlckRhdGV0aW1lT3B0aW9uc1RvVGVycmFmb3JtKHN0cnVjdD86IERhdGFBd3NjY0RhdGFicmV3RGF0YXNldFBhdGhPcHRpb25zUGFyYW1ldGVyc0RhdGFzZXRQYXJhbWV0ZXJEYXRldGltZU9wdGlvbnMpOiBhbnkge1xuICBpZiAoIWNka3RmLmNhbkluc3BlY3Qoc3RydWN0KSkgeyByZXR1cm4gc3RydWN0OyB9XG4gIHJldHVybiB7XG4gICAgZm9ybWF0OiBjZGt0Zi5zdHJpbmdUb1RlcnJhZm9ybShzdHJ1Y3QhLmZvcm1hdCksXG4gICAgbG9jYWxlX2NvZGU6IGNka3RmLnN0cmluZ1RvVGVycmFmb3JtKHN0cnVjdCEubG9jYWxlQ29kZSksXG4gICAgdGltZXpvbmVfb2Zmc2V0OiBjZGt0Zi5zdHJpbmdUb1RlcnJhZm9ybShzdHJ1Y3QhLnRpbWV6b25lT2Zmc2V0KSxcbiAgfVxufVxuXG5leHBvcnQgY2xhc3MgRGF0YUF3c2NjRGF0YWJyZXdEYXRhc2V0UGF0aE9wdGlvbnNQYXJhbWV0ZXJzRGF0YXNldFBhcmFtZXRlckZpbHRlclZhbHVlc01hcCBleHRlbmRzIGNka3RmLkNvbXBsZXhDb21wdXRlZExpc3Qge1xuXG4gIC8vIHZhbHVlIC0gY29tcHV0ZWQ6IHRydWUsIG9wdGlvbmFsOiBmYWxzZSwgcmVxdWlyZWQ6IGZhbHNlXG4gIHB1YmxpYyBnZXQgdmFsdWUoKSB7XG4gICAgcmV0dXJuIHRoaXMuZ2V0U3RyaW5nQXR0cmlidXRlKCd2YWx1ZScpO1xuICB9XG5cbiAgLy8gdmFsdWVfcmVmZXJlbmNlIC0gY29tcHV0ZWQ6IHRydWUsIG9wdGlvbmFsOiBmYWxzZSwgcmVxdWlyZWQ6IGZhbHNlXG4gIHB1YmxpYyBnZXQgdmFsdWVSZWZlcmVuY2UoKSB7XG4gICAgcmV0dXJuIHRoaXMuZ2V0U3RyaW5nQXR0cmlidXRlKCd2YWx1ZV9yZWZlcmVuY2UnKTtcbiAgfVxufVxuXG5leHBvcnQgZnVuY3Rpb24gZGF0YUF3c2NjRGF0YWJyZXdEYXRhc2V0UGF0aE9wdGlvbnNQYXJhbWV0ZXJzRGF0YXNldFBhcmFtZXRlckZpbHRlclZhbHVlc01hcFRvVGVycmFmb3JtKHN0cnVjdD86IERhdGFBd3NjY0RhdGFicmV3RGF0YXNldFBhdGhPcHRpb25zUGFyYW1ldGVyc0RhdGFzZXRQYXJhbWV0ZXJGaWx0ZXJWYWx1ZXNNYXApOiBhbnkge1xuICBpZiAoIWNka3RmLmNhbkluc3BlY3Qoc3RydWN0KSkgeyByZXR1cm4gc3RydWN0OyB9XG4gIHJldHVybiB7XG4gICAgdmFsdWU6IGNka3RmLnN0cmluZ1RvVGVycmFmb3JtKHN0cnVjdCEudmFsdWUpLFxuICAgIHZhbHVlX3JlZmVyZW5jZTogY2RrdGYuc3RyaW5nVG9UZXJyYWZvcm0oc3RydWN0IS52YWx1ZVJlZmVyZW5jZSksXG4gIH1cbn1cblxuZXhwb3J0IGNsYXNzIERhdGFBd3NjY0RhdGFicmV3RGF0YXNldFBhdGhPcHRpb25zUGFyYW1ldGVyc0RhdGFzZXRQYXJhbWV0ZXJGaWx0ZXIgZXh0ZW5kcyBjZGt0Zi5Db21wbGV4Q29tcHV0ZWRMaXN0IHtcblxuICAvLyBleHByZXNzaW9uIC0gY29tcHV0ZWQ6IHRydWUsIG9wdGlvbmFsOiBmYWxzZSwgcmVxdWlyZWQ6IGZhbHNlXG4gIHB1YmxpYyBnZXQgZXhwcmVzc2lvbigpIHtcbiAgICByZXR1cm4gdGhpcy5nZXRTdHJpbmdBdHRyaWJ1dGUoJ2V4cHJlc3Npb24nKTtcbiAgfVxuXG4gIC8vIHZhbHVlc19tYXAgLSBjb21wdXRlZDogdHJ1ZSwgb3B0aW9uYWw6IGZhbHNlLCByZXF1aXJlZDogZmFsc2VcbiAgcHVibGljIGdldCB2YWx1ZXNNYXAoKSB7XG4gICAgcmV0dXJuIHRoaXMuaW50ZXJwb2xhdGlvbkZvckF0dHJpYnV0ZSgndmFsdWVzX21hcCcpIGFzIGFueTtcbiAgfVxufVxuXG5leHBvcnQgZnVuY3Rpb24gZGF0YUF3c2NjRGF0YWJyZXdEYXRhc2V0UGF0aE9wdGlvbnNQYXJhbWV0ZXJzRGF0YXNldFBhcmFtZXRlckZpbHRlclRvVGVycmFmb3JtKHN0cnVjdD86IERhdGFBd3NjY0RhdGFicmV3RGF0YXNldFBhdGhPcHRpb25zUGFyYW1ldGVyc0RhdGFzZXRQYXJhbWV0ZXJGaWx0ZXIpOiBhbnkge1xuICBpZiAoIWNka3RmLmNhbkluc3BlY3Qoc3RydWN0KSkgeyByZXR1cm4gc3RydWN0OyB9XG4gIHJldHVybiB7XG4gICAgZXhwcmVzc2lvbjogY2RrdGYuc3RyaW5nVG9UZXJyYWZvcm0oc3RydWN0IS5leHByZXNzaW9uKSxcbiAgICB2YWx1ZXNfbWFwOiBjZGt0Zi5saXN0TWFwcGVyKGRhdGFBd3NjY0RhdGFicmV3RGF0YXNldFBhdGhPcHRpb25zUGFyYW1ldGVyc0RhdGFzZXRQYXJhbWV0ZXJGaWx0ZXJWYWx1ZXNNYXBUb1RlcnJhZm9ybSkoc3RydWN0IS52YWx1ZXNNYXApLFxuICB9XG59XG5cbmV4cG9ydCBjbGFzcyBEYXRhQXdzY2NEYXRhYnJld0RhdGFzZXRQYXRoT3B0aW9uc1BhcmFtZXRlcnNEYXRhc2V0UGFyYW1ldGVyIGV4dGVuZHMgY2RrdGYuQ29tcGxleENvbXB1dGVkTGlzdCB7XG5cbiAgLy8gY3JlYXRlX2NvbHVtbiAtIGNvbXB1dGVkOiB0cnVlLCBvcHRpb25hbDogZmFsc2UsIHJlcXVpcmVkOiBmYWxzZVxuICBwdWJsaWMgZ2V0IGNyZWF0ZUNvbHVtbigpIHtcbiAgICByZXR1cm4gdGhpcy5nZXRCb29sZWFuQXR0cmlidXRlKCdjcmVhdGVfY29sdW1uJyk7XG4gIH1cblxuICAvLyBkYXRldGltZV9vcHRpb25zIC0gY29tcHV0ZWQ6IHRydWUsIG9wdGlvbmFsOiBmYWxzZSwgcmVxdWlyZWQ6IGZhbHNlXG4gIHB1YmxpYyBnZXQgZGF0ZXRpbWVPcHRpb25zKCkge1xuICAgIHJldHVybiB0aGlzLmludGVycG9sYXRpb25Gb3JBdHRyaWJ1dGUoJ2RhdGV0aW1lX29wdGlvbnMnKSBhcyBhbnk7XG4gIH1cblxuICAvLyBmaWx0ZXIgLSBjb21wdXRlZDogdHJ1ZSwgb3B0aW9uYWw6IGZhbHNlLCByZXF1aXJlZDogZmFsc2VcbiAgcHVibGljIGdldCBmaWx0ZXIoKSB7XG4gICAgcmV0dXJuIHRoaXMuaW50ZXJwb2xhdGlvbkZvckF0dHJpYnV0ZSgnZmlsdGVyJykgYXMgYW55O1xuICB9XG5cbiAgLy8gbmFtZSAtIGNvbXB1dGVkOiB0cnVlLCBvcHRpb25hbDogZmFsc2UsIHJlcXVpcmVkOiBmYWxzZVxuICBwdWJsaWMgZ2V0IG5hbWUoKSB7XG4gICAgcmV0dXJuIHRoaXMuZ2V0U3RyaW5nQXR0cmlidXRlKCduYW1lJyk7XG4gIH1cblxuICAvLyB0eXBlIC0gY29tcHV0ZWQ6IHRydWUsIG9wdGlvbmFsOiBmYWxzZSwgcmVxdWlyZWQ6IGZhbHNlXG4gIHB1YmxpYyBnZXQgdHlwZSgpIHtcbiAgICByZXR1cm4gdGhpcy5nZXRTdHJpbmdBdHRyaWJ1dGUoJ3R5cGUnKTtcbiAgfVxufVxuXG5leHBvcnQgZnVuY3Rpb24gZGF0YUF3c2NjRGF0YWJyZXdEYXRhc2V0UGF0aE9wdGlvbnNQYXJhbWV0ZXJzRGF0YXNldFBhcmFtZXRlclRvVGVycmFmb3JtKHN0cnVjdD86IERhdGFBd3NjY0RhdGFicmV3RGF0YXNldFBhdGhPcHRpb25zUGFyYW1ldGVyc0RhdGFzZXRQYXJhbWV0ZXIpOiBhbnkge1xuICBpZiAoIWNka3RmLmNhbkluc3BlY3Qoc3RydWN0KSkgeyByZXR1cm4gc3RydWN0OyB9XG4gIHJldHVybiB7XG4gICAgY3JlYXRlX2NvbHVtbjogY2RrdGYuYm9vbGVhblRvVGVycmFmb3JtKHN0cnVjdCEuY3JlYXRlQ29sdW1uKSxcbiAgICBkYXRldGltZV9vcHRpb25zOiBkYXRhQXdzY2NEYXRhYnJld0RhdGFzZXRQYXRoT3B0aW9uc1BhcmFtZXRlcnNEYXRhc2V0UGFyYW1ldGVyRGF0ZXRpbWVPcHRpb25zVG9UZXJyYWZvcm0oc3RydWN0IS5kYXRldGltZU9wdGlvbnMpLFxuICAgIGZpbHRlcjogZGF0YUF3c2NjRGF0YWJyZXdEYXRhc2V0UGF0aE9wdGlvbnNQYXJhbWV0ZXJzRGF0YXNldFBhcmFtZXRlckZpbHRlclRvVGVycmFmb3JtKHN0cnVjdCEuZmlsdGVyKSxcbiAgICBuYW1lOiBjZGt0Zi5zdHJpbmdUb1RlcnJhZm9ybShzdHJ1Y3QhLm5hbWUpLFxuICAgIHR5cGU6IGNka3RmLnN0cmluZ1RvVGVycmFmb3JtKHN0cnVjdCEudHlwZSksXG4gIH1cbn1cblxuZXhwb3J0IGNsYXNzIERhdGFBd3NjY0RhdGFicmV3RGF0YXNldFBhdGhPcHRpb25zUGFyYW1ldGVycyBleHRlbmRzIGNka3RmLkNvbXBsZXhDb21wdXRlZExpc3Qge1xuXG4gIC8vIGRhdGFzZXRfcGFyYW1ldGVyIC0gY29tcHV0ZWQ6IHRydWUsIG9wdGlvbmFsOiBmYWxzZSwgcmVxdWlyZWQ6IGZhbHNlXG4gIHB1YmxpYyBnZXQgZGF0YXNldFBhcmFtZXRlcigpIHtcbiAgICByZXR1cm4gdGhpcy5pbnRlcnBvbGF0aW9uRm9yQXR0cmlidXRlKCdkYXRhc2V0X3BhcmFtZXRlcicpIGFzIGFueTtcbiAgfVxuXG4gIC8vIHBhdGhfcGFyYW1ldGVyX25hbWUgLSBjb21wdXRlZDogdHJ1ZSwgb3B0aW9uYWw6IGZhbHNlLCByZXF1aXJlZDogZmFsc2VcbiAgcHVibGljIGdldCBwYXRoUGFyYW1ldGVyTmFtZSgpIHtcbiAgICByZXR1cm4gdGhpcy5nZXRTdHJpbmdBdHRyaWJ1dGUoJ3BhdGhfcGFyYW1ldGVyX25hbWUnKTtcbiAgfVxufVxuXG5leHBvcnQgZnVuY3Rpb24gZGF0YUF3c2NjRGF0YWJyZXdEYXRhc2V0UGF0aE9wdGlvbnNQYXJhbWV0ZXJzVG9UZXJyYWZvcm0oc3RydWN0PzogRGF0YUF3c2NjRGF0YWJyZXdEYXRhc2V0UGF0aE9wdGlvbnNQYXJhbWV0ZXJzKTogYW55IHtcbiAgaWYgKCFjZGt0Zi5jYW5JbnNwZWN0KHN0cnVjdCkpIHsgcmV0dXJuIHN0cnVjdDsgfVxuICByZXR1cm4ge1xuICAgIGRhdGFzZXRfcGFyYW1ldGVyOiBkYXRhQXdzY2NEYXRhYnJld0RhdGFzZXRQYXRoT3B0aW9uc1BhcmFtZXRlcnNEYXRhc2V0UGFyYW1ldGVyVG9UZXJyYWZvcm0oc3RydWN0IS5kYXRhc2V0UGFyYW1ldGVyKSxcbiAgICBwYXRoX3BhcmFtZXRlcl9uYW1lOiBjZGt0Zi5zdHJpbmdUb1RlcnJhZm9ybShzdHJ1Y3QhLnBhdGhQYXJhbWV0ZXJOYW1lKSxcbiAgfVxufVxuXG5leHBvcnQgY2xhc3MgRGF0YUF3c2NjRGF0YWJyZXdEYXRhc2V0UGF0aE9wdGlvbnMgZXh0ZW5kcyBjZGt0Zi5Db21wbGV4Q29tcHV0ZWRMaXN0IHtcblxuICAvLyBmaWxlc19saW1pdCAtIGNvbXB1dGVkOiB0cnVlLCBvcHRpb25hbDogZmFsc2UsIHJlcXVpcmVkOiBmYWxzZVxuICBwdWJsaWMgZ2V0IGZpbGVzTGltaXQoKSB7XG4gICAgcmV0dXJuIHRoaXMuaW50ZXJwb2xhdGlvbkZvckF0dHJpYnV0ZSgnZmlsZXNfbGltaXQnKSBhcyBhbnk7XG4gIH1cblxuICAvLyBsYXN0X21vZGlmaWVkX2RhdGVfY29uZGl0aW9uIC0gY29tcHV0ZWQ6IHRydWUsIG9wdGlvbmFsOiBmYWxzZSwgcmVxdWlyZWQ6IGZhbHNlXG4gIHB1YmxpYyBnZXQgbGFzdE1vZGlmaWVkRGF0ZUNvbmRpdGlvbigpIHtcbiAgICByZXR1cm4gdGhpcy5pbnRlcnBvbGF0aW9uRm9yQXR0cmlidXRlKCdsYXN0X21vZGlmaWVkX2RhdGVfY29uZGl0aW9uJykgYXMgYW55O1xuICB9XG5cbiAgLy8gcGFyYW1ldGVycyAtIGNvbXB1dGVkOiB0cnVlLCBvcHRpb25hbDogZmFsc2UsIHJlcXVpcmVkOiBmYWxzZVxuICBwdWJsaWMgZ2V0IHBhcmFtZXRlcnMoKSB7XG4gICAgcmV0dXJuIHRoaXMuaW50ZXJwb2xhdGlvbkZvckF0dHJpYnV0ZSgncGFyYW1ldGVycycpIGFzIGFueTtcbiAgfVxufVxuXG5leHBvcnQgZnVuY3Rpb24gZGF0YUF3c2NjRGF0YWJyZXdEYXRhc2V0UGF0aE9wdGlvbnNUb1RlcnJhZm9ybShzdHJ1Y3Q/OiBEYXRhQXdzY2NEYXRhYnJld0RhdGFzZXRQYXRoT3B0aW9ucyk6IGFueSB7XG4gIGlmICghY2RrdGYuY2FuSW5zcGVjdChzdHJ1Y3QpKSB7IHJldHVybiBzdHJ1Y3Q7IH1cbiAgcmV0dXJuIHtcbiAgICBmaWxlc19saW1pdDogZGF0YUF3c2NjRGF0YWJyZXdEYXRhc2V0UGF0aE9wdGlvbnNGaWxlc0xpbWl0VG9UZXJyYWZvcm0oc3RydWN0IS5maWxlc0xpbWl0KSxcbiAgICBsYXN0X21vZGlmaWVkX2RhdGVfY29uZGl0aW9uOiBkYXRhQXdzY2NEYXRhYnJld0RhdGFzZXRQYXRoT3B0aW9uc0xhc3RNb2RpZmllZERhdGVDb25kaXRpb25Ub1RlcnJhZm9ybShzdHJ1Y3QhLmxhc3RNb2RpZmllZERhdGVDb25kaXRpb24pLFxuICAgIHBhcmFtZXRlcnM6IGNka3RmLmxpc3RNYXBwZXIoZGF0YUF3c2NjRGF0YWJyZXdEYXRhc2V0UGF0aE9wdGlvbnNQYXJhbWV0ZXJzVG9UZXJyYWZvcm0pKHN0cnVjdCEucGFyYW1ldGVycyksXG4gIH1cbn1cblxuZXhwb3J0IGNsYXNzIERhdGFBd3NjY0RhdGFicmV3RGF0YXNldFRhZ3MgZXh0ZW5kcyBjZGt0Zi5Db21wbGV4Q29tcHV0ZWRMaXN0IHtcblxuICAvLyBrZXkgLSBjb21wdXRlZDogdHJ1ZSwgb3B0aW9uYWw6IGZhbHNlLCByZXF1aXJlZDogZmFsc2VcbiAgcHVibGljIGdldCBrZXkoKSB7XG4gICAgcmV0dXJuIHRoaXMuZ2V0U3RyaW5nQXR0cmlidXRlKCdrZXknKTtcbiAgfVxuXG4gIC8vIHZhbHVlIC0gY29tcHV0ZWQ6IHRydWUsIG9wdGlvbmFsOiBmYWxzZSwgcmVxdWlyZWQ6IGZhbHNlXG4gIHB1YmxpYyBnZXQgdmFsdWUoKSB7XG4gICAgcmV0dXJuIHRoaXMuZ2V0U3RyaW5nQXR0cmlidXRlKCd2YWx1ZScpO1xuICB9XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBkYXRhQXdzY2NEYXRhYnJld0RhdGFzZXRUYWdzVG9UZXJyYWZvcm0oc3RydWN0PzogRGF0YUF3c2NjRGF0YWJyZXdEYXRhc2V0VGFncyk6IGFueSB7XG4gIGlmICghY2RrdGYuY2FuSW5zcGVjdChzdHJ1Y3QpKSB7IHJldHVybiBzdHJ1Y3Q7IH1cbiAgcmV0dXJuIHtcbiAgICBrZXk6IGNka3RmLnN0cmluZ1RvVGVycmFmb3JtKHN0cnVjdCEua2V5KSxcbiAgICB2YWx1ZTogY2RrdGYuc3RyaW5nVG9UZXJyYWZvcm0oc3RydWN0IS52YWx1ZSksXG4gIH1cbn1cblxuXG4vKipcbiogUmVwcmVzZW50cyBhIHtAbGluayBodHRwczovL3d3dy50ZXJyYWZvcm0uaW8vZG9jcy9wcm92aWRlcnMvYXdzY2MvZC9kYXRhYnJld19kYXRhc2V0Lmh0bWwgYXdzY2NfZGF0YWJyZXdfZGF0YXNldH1cbiovXG5leHBvcnQgY2xhc3MgRGF0YUF3c2NjRGF0YWJyZXdEYXRhc2V0IGV4dGVuZHMgY2RrdGYuVGVycmFmb3JtRGF0YVNvdXJjZSB7XG5cbiAgLy8gPT09PT09PT09PT09PT09PT1cbiAgLy8gU1RBVElDIFBST1BFUlRJRVNcbiAgLy8gPT09PT09PT09PT09PT09PT1cbiAgcHVibGljIHN0YXRpYyByZWFkb25seSB0ZlJlc291cmNlVHlwZTogc3RyaW5nID0gXCJhd3NjY19kYXRhYnJld19kYXRhc2V0XCI7XG5cbiAgLy8gPT09PT09PT09PT1cbiAgLy8gSU5JVElBTElaRVJcbiAgLy8gPT09PT09PT09PT1cblxuICAvKipcbiAgKiBDcmVhdGUgYSBuZXcge0BsaW5rIGh0dHBzOi8vd3d3LnRlcnJhZm9ybS5pby9kb2NzL3Byb3ZpZGVycy9hd3NjYy9kL2RhdGFicmV3X2RhdGFzZXQuaHRtbCBhd3NjY19kYXRhYnJld19kYXRhc2V0fSBEYXRhIFNvdXJjZVxuICAqXG4gICogQHBhcmFtIHNjb3BlIFRoZSBzY29wZSBpbiB3aGljaCB0byBkZWZpbmUgdGhpcyBjb25zdHJ1Y3RcbiAgKiBAcGFyYW0gaWQgVGhlIHNjb3BlZCBjb25zdHJ1Y3QgSUQuIE11c3QgYmUgdW5pcXVlIGFtb25nc3Qgc2libGluZ3MgaW4gdGhlIHNhbWUgc2NvcGVcbiAgKiBAcGFyYW0gb3B0aW9ucyBEYXRhQXdzY2NEYXRhYnJld0RhdGFzZXRDb25maWdcbiAgKi9cbiAgcHVibGljIGNvbnN0cnVjdG9yKHNjb3BlOiBDb25zdHJ1Y3QsIGlkOiBzdHJpbmcsIGNvbmZpZzogRGF0YUF3c2NjRGF0YWJyZXdEYXRhc2V0Q29uZmlnKSB7XG4gICAgc3VwZXIoc2NvcGUsIGlkLCB7XG4gICAgICB0ZXJyYWZvcm1SZXNvdXJjZVR5cGU6ICdhd3NjY19kYXRhYnJld19kYXRhc2V0JyxcbiAgICAgIHRlcnJhZm9ybUdlbmVyYXRvck1ldGFkYXRhOiB7XG4gICAgICAgIHByb3ZpZGVyTmFtZTogJ2F3c2NjJ1xuICAgICAgfSxcbiAgICAgIHByb3ZpZGVyOiBjb25maWcucHJvdmlkZXIsXG4gICAgICBkZXBlbmRzT246IGNvbmZpZy5kZXBlbmRzT24sXG4gICAgICBjb3VudDogY29uZmlnLmNvdW50LFxuICAgICAgbGlmZWN5Y2xlOiBjb25maWcubGlmZWN5Y2xlXG4gICAgfSk7XG4gICAgdGhpcy5faWQgPSBjb25maWcuaWQ7XG4gIH1cblxuICAvLyA9PT09PT09PT09XG4gIC8vIEFUVFJJQlVURVNcbiAgLy8gPT09PT09PT09PVxuXG4gIC8vIGZvcm1hdCAtIGNvbXB1dGVkOiB0cnVlLCBvcHRpb25hbDogZmFsc2UsIHJlcXVpcmVkOiBmYWxzZVxuICBwdWJsaWMgZ2V0IGZvcm1hdCgpIHtcbiAgICByZXR1cm4gdGhpcy5nZXRTdHJpbmdBdHRyaWJ1dGUoJ2Zvcm1hdCcpO1xuICB9XG5cbiAgLy8gZm9ybWF0X29wdGlvbnMgLSBjb21wdXRlZDogdHJ1ZSwgb3B0aW9uYWw6IGZhbHNlLCByZXF1aXJlZDogZmFsc2VcbiAgcHVibGljIGdldCBmb3JtYXRPcHRpb25zKCkge1xuICAgIHJldHVybiB0aGlzLmludGVycG9sYXRpb25Gb3JBdHRyaWJ1dGUoJ2Zvcm1hdF9vcHRpb25zJykgYXMgYW55O1xuICB9XG5cbiAgLy8gaWQgLSBjb21wdXRlZDogZmFsc2UsIG9wdGlvbmFsOiBmYWxzZSwgcmVxdWlyZWQ6IHRydWVcbiAgcHJpdmF0ZSBfaWQ6IHN0cmluZztcbiAgcHVibGljIGdldCBpZCgpIHtcbiAgICByZXR1cm4gdGhpcy5nZXRTdHJpbmdBdHRyaWJ1dGUoJ2lkJyk7XG4gIH1cbiAgcHVibGljIHNldCBpZCh2YWx1ZTogc3RyaW5nKSB7XG4gICAgdGhpcy5faWQgPSB2YWx1ZTtcbiAgfVxuICAvLyBUZW1wb3JhcmlseSBleHBvc2UgaW5wdXQgdmFsdWUuIFVzZSB3aXRoIGNhdXRpb24uXG4gIHB1YmxpYyBnZXQgaWRJbnB1dCgpIHtcbiAgICByZXR1cm4gdGhpcy5faWRcbiAgfVxuXG4gIC8vIGlucHV0IC0gY29tcHV0ZWQ6IHRydWUsIG9wdGlvbmFsOiBmYWxzZSwgcmVxdWlyZWQ6IGZhbHNlXG4gIHB1YmxpYyBnZXQgaW5wdXQoKSB7XG4gICAgcmV0dXJuIHRoaXMuaW50ZXJwb2xhdGlvbkZvckF0dHJpYnV0ZSgnaW5wdXQnKSBhcyBhbnk7XG4gIH1cblxuICAvLyBuYW1lIC0gY29tcHV0ZWQ6IHRydWUsIG9wdGlvbmFsOiBmYWxzZSwgcmVxdWlyZWQ6IGZhbHNlXG4gIHB1YmxpYyBnZXQgbmFtZSgpIHtcbiAgICByZXR1cm4gdGhpcy5nZXRTdHJpbmdBdHRyaWJ1dGUoJ25hbWUnKTtcbiAgfVxuXG4gIC8vIHBhdGhfb3B0aW9ucyAtIGNvbXB1dGVkOiB0cnVlLCBvcHRpb25hbDogZmFsc2UsIHJlcXVpcmVkOiBmYWxzZVxuICBwdWJsaWMgZ2V0IHBhdGhPcHRpb25zKCkge1xuICAgIHJldHVybiB0aGlzLmludGVycG9sYXRpb25Gb3JBdHRyaWJ1dGUoJ3BhdGhfb3B0aW9ucycpIGFzIGFueTtcbiAgfVxuXG4gIC8vIHRhZ3MgLSBjb21wdXRlZDogdHJ1ZSwgb3B0aW9uYWw6IGZhbHNlLCByZXF1aXJlZDogZmFsc2VcbiAgcHVibGljIGdldCB0YWdzKCkge1xuICAgIHJldHVybiB0aGlzLmludGVycG9sYXRpb25Gb3JBdHRyaWJ1dGUoJ3RhZ3MnKSBhcyBhbnk7XG4gIH1cblxuICAvLyA9PT09PT09PT1cbiAgLy8gU1lOVEhFU0lTXG4gIC8vID09PT09PT09PVxuXG4gIHByb3RlY3RlZCBzeW50aGVzaXplQXR0cmlidXRlcygpOiB7IFtuYW1lOiBzdHJpbmddOiBhbnkgfSB7XG4gICAgcmV0dXJuIHtcbiAgICAgIGlkOiBjZGt0Zi5zdHJpbmdUb1RlcnJhZm9ybSh0aGlzLl9pZCksXG4gICAgfTtcbiAgfVxufVxuIl19