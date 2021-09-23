"use strict";
// https://www.terraform.io/docs/providers/awscc/d/quicksight_data_set.html
// generated from terraform resource schema
Object.defineProperty(exports, "__esModule", { value: true });
exports.dataAwsccQuicksightDataSetPhysicalTableMapRelationalTableInputColumnsToTerraform = exports.DataAwsccQuicksightDataSetPhysicalTableMapRelationalTableInputColumns = exports.dataAwsccQuicksightDataSetPhysicalTableMapCustomSqlToTerraform = exports.DataAwsccQuicksightDataSetPhysicalTableMapCustomSql = exports.dataAwsccQuicksightDataSetPhysicalTableMapCustomSqlColumnsToTerraform = exports.DataAwsccQuicksightDataSetPhysicalTableMapCustomSqlColumns = exports.dataAwsccQuicksightDataSetPermissionsToTerraform = exports.DataAwsccQuicksightDataSetPermissions = exports.dataAwsccQuicksightDataSetOutputColumnsToTerraform = exports.DataAwsccQuicksightDataSetOutputColumns = exports.dataAwsccQuicksightDataSetLogicalTableMapToTerraform = exports.DataAwsccQuicksightDataSetLogicalTableMap = exports.dataAwsccQuicksightDataSetLogicalTableMapSourceToTerraform = exports.DataAwsccQuicksightDataSetLogicalTableMapSource = exports.dataAwsccQuicksightDataSetLogicalTableMapSourceJoinInstructionToTerraform = exports.DataAwsccQuicksightDataSetLogicalTableMapSourceJoinInstruction = exports.dataAwsccQuicksightDataSetLogicalTableMapSourceJoinInstructionRightJoinKeyPropertiesToTerraform = exports.DataAwsccQuicksightDataSetLogicalTableMapSourceJoinInstructionRightJoinKeyProperties = exports.dataAwsccQuicksightDataSetLogicalTableMapSourceJoinInstructionLeftJoinKeyPropertiesToTerraform = exports.DataAwsccQuicksightDataSetLogicalTableMapSourceJoinInstructionLeftJoinKeyProperties = exports.dataAwsccQuicksightDataSetLogicalTableMapDataTransformsToTerraform = exports.DataAwsccQuicksightDataSetLogicalTableMapDataTransforms = exports.dataAwsccQuicksightDataSetLogicalTableMapDataTransformsTagColumnOperationToTerraform = exports.DataAwsccQuicksightDataSetLogicalTableMapDataTransformsTagColumnOperation = exports.dataAwsccQuicksightDataSetLogicalTableMapDataTransformsTagColumnOperationTagsToTerraform = exports.DataAwsccQuicksightDataSetLogicalTableMapDataTransformsTagColumnOperationTags = exports.dataAwsccQuicksightDataSetLogicalTableMapDataTransformsTagColumnOperationTagsColumnDescriptionToTerraform = exports.DataAwsccQuicksightDataSetLogicalTableMapDataTransformsTagColumnOperationTagsColumnDescription = exports.dataAwsccQuicksightDataSetLogicalTableMapDataTransformsRenameColumnOperationToTerraform = exports.DataAwsccQuicksightDataSetLogicalTableMapDataTransformsRenameColumnOperation = exports.dataAwsccQuicksightDataSetLogicalTableMapDataTransformsProjectOperationToTerraform = exports.DataAwsccQuicksightDataSetLogicalTableMapDataTransformsProjectOperation = exports.dataAwsccQuicksightDataSetLogicalTableMapDataTransformsFilterOperationToTerraform = exports.DataAwsccQuicksightDataSetLogicalTableMapDataTransformsFilterOperation = exports.dataAwsccQuicksightDataSetLogicalTableMapDataTransformsCreateColumnsOperationToTerraform = exports.DataAwsccQuicksightDataSetLogicalTableMapDataTransformsCreateColumnsOperation = exports.dataAwsccQuicksightDataSetLogicalTableMapDataTransformsCreateColumnsOperationColumnsToTerraform = exports.DataAwsccQuicksightDataSetLogicalTableMapDataTransformsCreateColumnsOperationColumns = exports.dataAwsccQuicksightDataSetLogicalTableMapDataTransformsCastColumnTypeOperationToTerraform = exports.DataAwsccQuicksightDataSetLogicalTableMapDataTransformsCastColumnTypeOperation = exports.dataAwsccQuicksightDataSetIngestionWaitPolicyToTerraform = exports.DataAwsccQuicksightDataSetIngestionWaitPolicy = exports.dataAwsccQuicksightDataSetFieldFoldersToTerraform = exports.DataAwsccQuicksightDataSetFieldFolders = exports.dataAwsccQuicksightDataSetColumnLevelPermissionRulesToTerraform = exports.DataAwsccQuicksightDataSetColumnLevelPermissionRules = exports.dataAwsccQuicksightDataSetColumnGroupsToTerraform = exports.DataAwsccQuicksightDataSetColumnGroups = exports.dataAwsccQuicksightDataSetColumnGroupsGeoSpatialColumnGroupToTerraform = exports.DataAwsccQuicksightDataSetColumnGroupsGeoSpatialColumnGroup = void 0;
exports.DataAwsccQuicksightDataSet = exports.dataAwsccQuicksightDataSetTagsToTerraform = exports.DataAwsccQuicksightDataSetTags = exports.dataAwsccQuicksightDataSetRowLevelPermissionDataSetToTerraform = exports.DataAwsccQuicksightDataSetRowLevelPermissionDataSet = exports.dataAwsccQuicksightDataSetPhysicalTableMapToTerraform = exports.DataAwsccQuicksightDataSetPhysicalTableMap = exports.dataAwsccQuicksightDataSetPhysicalTableMapS3SourceToTerraform = exports.DataAwsccQuicksightDataSetPhysicalTableMapS3Source = exports.dataAwsccQuicksightDataSetPhysicalTableMapS3SourceUploadSettingsToTerraform = exports.DataAwsccQuicksightDataSetPhysicalTableMapS3SourceUploadSettings = exports.dataAwsccQuicksightDataSetPhysicalTableMapS3SourceInputColumnsToTerraform = exports.DataAwsccQuicksightDataSetPhysicalTableMapS3SourceInputColumns = exports.dataAwsccQuicksightDataSetPhysicalTableMapRelationalTableToTerraform = exports.DataAwsccQuicksightDataSetPhysicalTableMapRelationalTable = void 0;
const cdktf = require("cdktf");
class DataAwsccQuicksightDataSetColumnGroupsGeoSpatialColumnGroup extends cdktf.ComplexComputedList {
    // columns - computed: true, optional: false, required: false
    get columns() {
        return this.getListAttribute('columns');
    }
    // country_code - computed: true, optional: false, required: false
    get countryCode() {
        return this.getStringAttribute('country_code');
    }
    // name - computed: true, optional: false, required: false
    get name() {
        return this.getStringAttribute('name');
    }
}
exports.DataAwsccQuicksightDataSetColumnGroupsGeoSpatialColumnGroup = DataAwsccQuicksightDataSetColumnGroupsGeoSpatialColumnGroup;
function dataAwsccQuicksightDataSetColumnGroupsGeoSpatialColumnGroupToTerraform(struct) {
    if (!cdktf.canInspect(struct)) {
        return struct;
    }
    return {
        columns: cdktf.listMapper(cdktf.stringToTerraform)(struct.columns),
        country_code: cdktf.stringToTerraform(struct.countryCode),
        name: cdktf.stringToTerraform(struct.name),
    };
}
exports.dataAwsccQuicksightDataSetColumnGroupsGeoSpatialColumnGroupToTerraform = dataAwsccQuicksightDataSetColumnGroupsGeoSpatialColumnGroupToTerraform;
class DataAwsccQuicksightDataSetColumnGroups extends cdktf.ComplexComputedList {
    // geo_spatial_column_group - computed: true, optional: false, required: false
    get geoSpatialColumnGroup() {
        return this.interpolationForAttribute('geo_spatial_column_group');
    }
}
exports.DataAwsccQuicksightDataSetColumnGroups = DataAwsccQuicksightDataSetColumnGroups;
function dataAwsccQuicksightDataSetColumnGroupsToTerraform(struct) {
    if (!cdktf.canInspect(struct)) {
        return struct;
    }
    return {
        geo_spatial_column_group: dataAwsccQuicksightDataSetColumnGroupsGeoSpatialColumnGroupToTerraform(struct.geoSpatialColumnGroup),
    };
}
exports.dataAwsccQuicksightDataSetColumnGroupsToTerraform = dataAwsccQuicksightDataSetColumnGroupsToTerraform;
class DataAwsccQuicksightDataSetColumnLevelPermissionRules extends cdktf.ComplexComputedList {
    // column_names - computed: true, optional: false, required: false
    get columnNames() {
        return this.getListAttribute('column_names');
    }
    // principals - computed: true, optional: false, required: false
    get principals() {
        return this.getListAttribute('principals');
    }
}
exports.DataAwsccQuicksightDataSetColumnLevelPermissionRules = DataAwsccQuicksightDataSetColumnLevelPermissionRules;
function dataAwsccQuicksightDataSetColumnLevelPermissionRulesToTerraform(struct) {
    if (!cdktf.canInspect(struct)) {
        return struct;
    }
    return {
        column_names: cdktf.listMapper(cdktf.stringToTerraform)(struct.columnNames),
        principals: cdktf.listMapper(cdktf.stringToTerraform)(struct.principals),
    };
}
exports.dataAwsccQuicksightDataSetColumnLevelPermissionRulesToTerraform = dataAwsccQuicksightDataSetColumnLevelPermissionRulesToTerraform;
class DataAwsccQuicksightDataSetFieldFolders extends cdktf.ComplexComputedList {
    // columns - computed: true, optional: false, required: false
    get columns() {
        return this.getListAttribute('columns');
    }
    // description - computed: true, optional: false, required: false
    get description() {
        return this.getStringAttribute('description');
    }
}
exports.DataAwsccQuicksightDataSetFieldFolders = DataAwsccQuicksightDataSetFieldFolders;
function dataAwsccQuicksightDataSetFieldFoldersToTerraform(struct) {
    if (!cdktf.canInspect(struct)) {
        return struct;
    }
    return {
        columns: cdktf.listMapper(cdktf.stringToTerraform)(struct.columns),
        description: cdktf.stringToTerraform(struct.description),
    };
}
exports.dataAwsccQuicksightDataSetFieldFoldersToTerraform = dataAwsccQuicksightDataSetFieldFoldersToTerraform;
class DataAwsccQuicksightDataSetIngestionWaitPolicy extends cdktf.ComplexComputedList {
    // ingestion_wait_time_in_hours - computed: true, optional: false, required: false
    get ingestionWaitTimeInHours() {
        return this.getNumberAttribute('ingestion_wait_time_in_hours');
    }
    // wait_for_spice_ingestion - computed: true, optional: false, required: false
    get waitForSpiceIngestion() {
        return this.getBooleanAttribute('wait_for_spice_ingestion');
    }
}
exports.DataAwsccQuicksightDataSetIngestionWaitPolicy = DataAwsccQuicksightDataSetIngestionWaitPolicy;
function dataAwsccQuicksightDataSetIngestionWaitPolicyToTerraform(struct) {
    if (!cdktf.canInspect(struct)) {
        return struct;
    }
    return {
        ingestion_wait_time_in_hours: cdktf.numberToTerraform(struct.ingestionWaitTimeInHours),
        wait_for_spice_ingestion: cdktf.booleanToTerraform(struct.waitForSpiceIngestion),
    };
}
exports.dataAwsccQuicksightDataSetIngestionWaitPolicyToTerraform = dataAwsccQuicksightDataSetIngestionWaitPolicyToTerraform;
class DataAwsccQuicksightDataSetLogicalTableMapDataTransformsCastColumnTypeOperation extends cdktf.ComplexComputedList {
    // column_name - computed: true, optional: false, required: false
    get columnName() {
        return this.getStringAttribute('column_name');
    }
    // format - computed: true, optional: false, required: false
    get format() {
        return this.getStringAttribute('format');
    }
    // new_column_type - computed: true, optional: false, required: false
    get newColumnType() {
        return this.getStringAttribute('new_column_type');
    }
}
exports.DataAwsccQuicksightDataSetLogicalTableMapDataTransformsCastColumnTypeOperation = DataAwsccQuicksightDataSetLogicalTableMapDataTransformsCastColumnTypeOperation;
function dataAwsccQuicksightDataSetLogicalTableMapDataTransformsCastColumnTypeOperationToTerraform(struct) {
    if (!cdktf.canInspect(struct)) {
        return struct;
    }
    return {
        column_name: cdktf.stringToTerraform(struct.columnName),
        format: cdktf.stringToTerraform(struct.format),
        new_column_type: cdktf.stringToTerraform(struct.newColumnType),
    };
}
exports.dataAwsccQuicksightDataSetLogicalTableMapDataTransformsCastColumnTypeOperationToTerraform = dataAwsccQuicksightDataSetLogicalTableMapDataTransformsCastColumnTypeOperationToTerraform;
class DataAwsccQuicksightDataSetLogicalTableMapDataTransformsCreateColumnsOperationColumns extends cdktf.ComplexComputedList {
    // column_id - computed: true, optional: false, required: false
    get columnId() {
        return this.getStringAttribute('column_id');
    }
    // column_name - computed: true, optional: false, required: false
    get columnName() {
        return this.getStringAttribute('column_name');
    }
    // expression - computed: true, optional: false, required: false
    get expression() {
        return this.getStringAttribute('expression');
    }
}
exports.DataAwsccQuicksightDataSetLogicalTableMapDataTransformsCreateColumnsOperationColumns = DataAwsccQuicksightDataSetLogicalTableMapDataTransformsCreateColumnsOperationColumns;
function dataAwsccQuicksightDataSetLogicalTableMapDataTransformsCreateColumnsOperationColumnsToTerraform(struct) {
    if (!cdktf.canInspect(struct)) {
        return struct;
    }
    return {
        column_id: cdktf.stringToTerraform(struct.columnId),
        column_name: cdktf.stringToTerraform(struct.columnName),
        expression: cdktf.stringToTerraform(struct.expression),
    };
}
exports.dataAwsccQuicksightDataSetLogicalTableMapDataTransformsCreateColumnsOperationColumnsToTerraform = dataAwsccQuicksightDataSetLogicalTableMapDataTransformsCreateColumnsOperationColumnsToTerraform;
class DataAwsccQuicksightDataSetLogicalTableMapDataTransformsCreateColumnsOperation extends cdktf.ComplexComputedList {
    // columns - computed: true, optional: false, required: false
    get columns() {
        return this.interpolationForAttribute('columns');
    }
}
exports.DataAwsccQuicksightDataSetLogicalTableMapDataTransformsCreateColumnsOperation = DataAwsccQuicksightDataSetLogicalTableMapDataTransformsCreateColumnsOperation;
function dataAwsccQuicksightDataSetLogicalTableMapDataTransformsCreateColumnsOperationToTerraform(struct) {
    if (!cdktf.canInspect(struct)) {
        return struct;
    }
    return {
        columns: cdktf.listMapper(dataAwsccQuicksightDataSetLogicalTableMapDataTransformsCreateColumnsOperationColumnsToTerraform)(struct.columns),
    };
}
exports.dataAwsccQuicksightDataSetLogicalTableMapDataTransformsCreateColumnsOperationToTerraform = dataAwsccQuicksightDataSetLogicalTableMapDataTransformsCreateColumnsOperationToTerraform;
class DataAwsccQuicksightDataSetLogicalTableMapDataTransformsFilterOperation extends cdktf.ComplexComputedList {
    // condition_expression - computed: true, optional: false, required: false
    get conditionExpression() {
        return this.getStringAttribute('condition_expression');
    }
}
exports.DataAwsccQuicksightDataSetLogicalTableMapDataTransformsFilterOperation = DataAwsccQuicksightDataSetLogicalTableMapDataTransformsFilterOperation;
function dataAwsccQuicksightDataSetLogicalTableMapDataTransformsFilterOperationToTerraform(struct) {
    if (!cdktf.canInspect(struct)) {
        return struct;
    }
    return {
        condition_expression: cdktf.stringToTerraform(struct.conditionExpression),
    };
}
exports.dataAwsccQuicksightDataSetLogicalTableMapDataTransformsFilterOperationToTerraform = dataAwsccQuicksightDataSetLogicalTableMapDataTransformsFilterOperationToTerraform;
class DataAwsccQuicksightDataSetLogicalTableMapDataTransformsProjectOperation extends cdktf.ComplexComputedList {
    // projected_columns - computed: true, optional: false, required: false
    get projectedColumns() {
        return this.getListAttribute('projected_columns');
    }
}
exports.DataAwsccQuicksightDataSetLogicalTableMapDataTransformsProjectOperation = DataAwsccQuicksightDataSetLogicalTableMapDataTransformsProjectOperation;
function dataAwsccQuicksightDataSetLogicalTableMapDataTransformsProjectOperationToTerraform(struct) {
    if (!cdktf.canInspect(struct)) {
        return struct;
    }
    return {
        projected_columns: cdktf.listMapper(cdktf.stringToTerraform)(struct.projectedColumns),
    };
}
exports.dataAwsccQuicksightDataSetLogicalTableMapDataTransformsProjectOperationToTerraform = dataAwsccQuicksightDataSetLogicalTableMapDataTransformsProjectOperationToTerraform;
class DataAwsccQuicksightDataSetLogicalTableMapDataTransformsRenameColumnOperation extends cdktf.ComplexComputedList {
    // column_name - computed: true, optional: false, required: false
    get columnName() {
        return this.getStringAttribute('column_name');
    }
    // new_column_name - computed: true, optional: false, required: false
    get newColumnName() {
        return this.getStringAttribute('new_column_name');
    }
}
exports.DataAwsccQuicksightDataSetLogicalTableMapDataTransformsRenameColumnOperation = DataAwsccQuicksightDataSetLogicalTableMapDataTransformsRenameColumnOperation;
function dataAwsccQuicksightDataSetLogicalTableMapDataTransformsRenameColumnOperationToTerraform(struct) {
    if (!cdktf.canInspect(struct)) {
        return struct;
    }
    return {
        column_name: cdktf.stringToTerraform(struct.columnName),
        new_column_name: cdktf.stringToTerraform(struct.newColumnName),
    };
}
exports.dataAwsccQuicksightDataSetLogicalTableMapDataTransformsRenameColumnOperationToTerraform = dataAwsccQuicksightDataSetLogicalTableMapDataTransformsRenameColumnOperationToTerraform;
class DataAwsccQuicksightDataSetLogicalTableMapDataTransformsTagColumnOperationTagsColumnDescription extends cdktf.ComplexComputedList {
    // text - computed: true, optional: false, required: false
    get text() {
        return this.getStringAttribute('text');
    }
}
exports.DataAwsccQuicksightDataSetLogicalTableMapDataTransformsTagColumnOperationTagsColumnDescription = DataAwsccQuicksightDataSetLogicalTableMapDataTransformsTagColumnOperationTagsColumnDescription;
function dataAwsccQuicksightDataSetLogicalTableMapDataTransformsTagColumnOperationTagsColumnDescriptionToTerraform(struct) {
    if (!cdktf.canInspect(struct)) {
        return struct;
    }
    return {
        text: cdktf.stringToTerraform(struct.text),
    };
}
exports.dataAwsccQuicksightDataSetLogicalTableMapDataTransformsTagColumnOperationTagsColumnDescriptionToTerraform = dataAwsccQuicksightDataSetLogicalTableMapDataTransformsTagColumnOperationTagsColumnDescriptionToTerraform;
class DataAwsccQuicksightDataSetLogicalTableMapDataTransformsTagColumnOperationTags extends cdktf.ComplexComputedList {
    // column_description - computed: true, optional: false, required: false
    get columnDescription() {
        return this.interpolationForAttribute('column_description');
    }
    // column_geographic_role - computed: true, optional: false, required: false
    get columnGeographicRole() {
        return this.getStringAttribute('column_geographic_role');
    }
}
exports.DataAwsccQuicksightDataSetLogicalTableMapDataTransformsTagColumnOperationTags = DataAwsccQuicksightDataSetLogicalTableMapDataTransformsTagColumnOperationTags;
function dataAwsccQuicksightDataSetLogicalTableMapDataTransformsTagColumnOperationTagsToTerraform(struct) {
    if (!cdktf.canInspect(struct)) {
        return struct;
    }
    return {
        column_description: dataAwsccQuicksightDataSetLogicalTableMapDataTransformsTagColumnOperationTagsColumnDescriptionToTerraform(struct.columnDescription),
        column_geographic_role: cdktf.stringToTerraform(struct.columnGeographicRole),
    };
}
exports.dataAwsccQuicksightDataSetLogicalTableMapDataTransformsTagColumnOperationTagsToTerraform = dataAwsccQuicksightDataSetLogicalTableMapDataTransformsTagColumnOperationTagsToTerraform;
class DataAwsccQuicksightDataSetLogicalTableMapDataTransformsTagColumnOperation extends cdktf.ComplexComputedList {
    // column_name - computed: true, optional: false, required: false
    get columnName() {
        return this.getStringAttribute('column_name');
    }
    // tags - computed: true, optional: false, required: false
    get tags() {
        return this.interpolationForAttribute('tags');
    }
}
exports.DataAwsccQuicksightDataSetLogicalTableMapDataTransformsTagColumnOperation = DataAwsccQuicksightDataSetLogicalTableMapDataTransformsTagColumnOperation;
function dataAwsccQuicksightDataSetLogicalTableMapDataTransformsTagColumnOperationToTerraform(struct) {
    if (!cdktf.canInspect(struct)) {
        return struct;
    }
    return {
        column_name: cdktf.stringToTerraform(struct.columnName),
        tags: cdktf.listMapper(dataAwsccQuicksightDataSetLogicalTableMapDataTransformsTagColumnOperationTagsToTerraform)(struct.tags),
    };
}
exports.dataAwsccQuicksightDataSetLogicalTableMapDataTransformsTagColumnOperationToTerraform = dataAwsccQuicksightDataSetLogicalTableMapDataTransformsTagColumnOperationToTerraform;
class DataAwsccQuicksightDataSetLogicalTableMapDataTransforms extends cdktf.ComplexComputedList {
    // cast_column_type_operation - computed: true, optional: false, required: false
    get castColumnTypeOperation() {
        return this.interpolationForAttribute('cast_column_type_operation');
    }
    // create_columns_operation - computed: true, optional: false, required: false
    get createColumnsOperation() {
        return this.interpolationForAttribute('create_columns_operation');
    }
    // filter_operation - computed: true, optional: false, required: false
    get filterOperation() {
        return this.interpolationForAttribute('filter_operation');
    }
    // project_operation - computed: true, optional: false, required: false
    get projectOperation() {
        return this.interpolationForAttribute('project_operation');
    }
    // rename_column_operation - computed: true, optional: false, required: false
    get renameColumnOperation() {
        return this.interpolationForAttribute('rename_column_operation');
    }
    // tag_column_operation - computed: true, optional: false, required: false
    get tagColumnOperation() {
        return this.interpolationForAttribute('tag_column_operation');
    }
}
exports.DataAwsccQuicksightDataSetLogicalTableMapDataTransforms = DataAwsccQuicksightDataSetLogicalTableMapDataTransforms;
function dataAwsccQuicksightDataSetLogicalTableMapDataTransformsToTerraform(struct) {
    if (!cdktf.canInspect(struct)) {
        return struct;
    }
    return {
        cast_column_type_operation: dataAwsccQuicksightDataSetLogicalTableMapDataTransformsCastColumnTypeOperationToTerraform(struct.castColumnTypeOperation),
        create_columns_operation: dataAwsccQuicksightDataSetLogicalTableMapDataTransformsCreateColumnsOperationToTerraform(struct.createColumnsOperation),
        filter_operation: dataAwsccQuicksightDataSetLogicalTableMapDataTransformsFilterOperationToTerraform(struct.filterOperation),
        project_operation: dataAwsccQuicksightDataSetLogicalTableMapDataTransformsProjectOperationToTerraform(struct.projectOperation),
        rename_column_operation: dataAwsccQuicksightDataSetLogicalTableMapDataTransformsRenameColumnOperationToTerraform(struct.renameColumnOperation),
        tag_column_operation: dataAwsccQuicksightDataSetLogicalTableMapDataTransformsTagColumnOperationToTerraform(struct.tagColumnOperation),
    };
}
exports.dataAwsccQuicksightDataSetLogicalTableMapDataTransformsToTerraform = dataAwsccQuicksightDataSetLogicalTableMapDataTransformsToTerraform;
class DataAwsccQuicksightDataSetLogicalTableMapSourceJoinInstructionLeftJoinKeyProperties extends cdktf.ComplexComputedList {
    // unique_key - computed: true, optional: false, required: false
    get uniqueKey() {
        return this.getBooleanAttribute('unique_key');
    }
}
exports.DataAwsccQuicksightDataSetLogicalTableMapSourceJoinInstructionLeftJoinKeyProperties = DataAwsccQuicksightDataSetLogicalTableMapSourceJoinInstructionLeftJoinKeyProperties;
function dataAwsccQuicksightDataSetLogicalTableMapSourceJoinInstructionLeftJoinKeyPropertiesToTerraform(struct) {
    if (!cdktf.canInspect(struct)) {
        return struct;
    }
    return {
        unique_key: cdktf.booleanToTerraform(struct.uniqueKey),
    };
}
exports.dataAwsccQuicksightDataSetLogicalTableMapSourceJoinInstructionLeftJoinKeyPropertiesToTerraform = dataAwsccQuicksightDataSetLogicalTableMapSourceJoinInstructionLeftJoinKeyPropertiesToTerraform;
class DataAwsccQuicksightDataSetLogicalTableMapSourceJoinInstructionRightJoinKeyProperties extends cdktf.ComplexComputedList {
    // unique_key - computed: true, optional: false, required: false
    get uniqueKey() {
        return this.getBooleanAttribute('unique_key');
    }
}
exports.DataAwsccQuicksightDataSetLogicalTableMapSourceJoinInstructionRightJoinKeyProperties = DataAwsccQuicksightDataSetLogicalTableMapSourceJoinInstructionRightJoinKeyProperties;
function dataAwsccQuicksightDataSetLogicalTableMapSourceJoinInstructionRightJoinKeyPropertiesToTerraform(struct) {
    if (!cdktf.canInspect(struct)) {
        return struct;
    }
    return {
        unique_key: cdktf.booleanToTerraform(struct.uniqueKey),
    };
}
exports.dataAwsccQuicksightDataSetLogicalTableMapSourceJoinInstructionRightJoinKeyPropertiesToTerraform = dataAwsccQuicksightDataSetLogicalTableMapSourceJoinInstructionRightJoinKeyPropertiesToTerraform;
class DataAwsccQuicksightDataSetLogicalTableMapSourceJoinInstruction extends cdktf.ComplexComputedList {
    // left_join_key_properties - computed: true, optional: false, required: false
    get leftJoinKeyProperties() {
        return this.interpolationForAttribute('left_join_key_properties');
    }
    // left_operand - computed: true, optional: false, required: false
    get leftOperand() {
        return this.getStringAttribute('left_operand');
    }
    // on_clause - computed: true, optional: false, required: false
    get onClause() {
        return this.getStringAttribute('on_clause');
    }
    // right_join_key_properties - computed: true, optional: false, required: false
    get rightJoinKeyProperties() {
        return this.interpolationForAttribute('right_join_key_properties');
    }
    // right_operand - computed: true, optional: false, required: false
    get rightOperand() {
        return this.getStringAttribute('right_operand');
    }
    // type - computed: true, optional: false, required: false
    get type() {
        return this.getStringAttribute('type');
    }
}
exports.DataAwsccQuicksightDataSetLogicalTableMapSourceJoinInstruction = DataAwsccQuicksightDataSetLogicalTableMapSourceJoinInstruction;
function dataAwsccQuicksightDataSetLogicalTableMapSourceJoinInstructionToTerraform(struct) {
    if (!cdktf.canInspect(struct)) {
        return struct;
    }
    return {
        left_join_key_properties: dataAwsccQuicksightDataSetLogicalTableMapSourceJoinInstructionLeftJoinKeyPropertiesToTerraform(struct.leftJoinKeyProperties),
        left_operand: cdktf.stringToTerraform(struct.leftOperand),
        on_clause: cdktf.stringToTerraform(struct.onClause),
        right_join_key_properties: dataAwsccQuicksightDataSetLogicalTableMapSourceJoinInstructionRightJoinKeyPropertiesToTerraform(struct.rightJoinKeyProperties),
        right_operand: cdktf.stringToTerraform(struct.rightOperand),
        type: cdktf.stringToTerraform(struct.type),
    };
}
exports.dataAwsccQuicksightDataSetLogicalTableMapSourceJoinInstructionToTerraform = dataAwsccQuicksightDataSetLogicalTableMapSourceJoinInstructionToTerraform;
class DataAwsccQuicksightDataSetLogicalTableMapSource extends cdktf.ComplexComputedList {
    // join_instruction - computed: true, optional: false, required: false
    get joinInstruction() {
        return this.interpolationForAttribute('join_instruction');
    }
    // physical_table_id - computed: true, optional: false, required: false
    get physicalTableId() {
        return this.getStringAttribute('physical_table_id');
    }
}
exports.DataAwsccQuicksightDataSetLogicalTableMapSource = DataAwsccQuicksightDataSetLogicalTableMapSource;
function dataAwsccQuicksightDataSetLogicalTableMapSourceToTerraform(struct) {
    if (!cdktf.canInspect(struct)) {
        return struct;
    }
    return {
        join_instruction: dataAwsccQuicksightDataSetLogicalTableMapSourceJoinInstructionToTerraform(struct.joinInstruction),
        physical_table_id: cdktf.stringToTerraform(struct.physicalTableId),
    };
}
exports.dataAwsccQuicksightDataSetLogicalTableMapSourceToTerraform = dataAwsccQuicksightDataSetLogicalTableMapSourceToTerraform;
class DataAwsccQuicksightDataSetLogicalTableMap extends cdktf.ComplexComputedList {
    // alias - computed: true, optional: false, required: false
    get alias() {
        return this.getStringAttribute('alias');
    }
    // data_transforms - computed: true, optional: false, required: false
    get dataTransforms() {
        return this.interpolationForAttribute('data_transforms');
    }
    // source - computed: true, optional: false, required: false
    get source() {
        return this.interpolationForAttribute('source');
    }
}
exports.DataAwsccQuicksightDataSetLogicalTableMap = DataAwsccQuicksightDataSetLogicalTableMap;
function dataAwsccQuicksightDataSetLogicalTableMapToTerraform(struct) {
    if (!cdktf.canInspect(struct)) {
        return struct;
    }
    return {
        alias: cdktf.stringToTerraform(struct.alias),
        data_transforms: cdktf.listMapper(dataAwsccQuicksightDataSetLogicalTableMapDataTransformsToTerraform)(struct.dataTransforms),
        source: dataAwsccQuicksightDataSetLogicalTableMapSourceToTerraform(struct.source),
    };
}
exports.dataAwsccQuicksightDataSetLogicalTableMapToTerraform = dataAwsccQuicksightDataSetLogicalTableMapToTerraform;
class DataAwsccQuicksightDataSetOutputColumns extends cdktf.ComplexComputedList {
    // description - computed: true, optional: false, required: false
    get description() {
        return this.getStringAttribute('description');
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
exports.DataAwsccQuicksightDataSetOutputColumns = DataAwsccQuicksightDataSetOutputColumns;
function dataAwsccQuicksightDataSetOutputColumnsToTerraform(struct) {
    if (!cdktf.canInspect(struct)) {
        return struct;
    }
    return {
        description: cdktf.stringToTerraform(struct.description),
        name: cdktf.stringToTerraform(struct.name),
        type: cdktf.stringToTerraform(struct.type),
    };
}
exports.dataAwsccQuicksightDataSetOutputColumnsToTerraform = dataAwsccQuicksightDataSetOutputColumnsToTerraform;
class DataAwsccQuicksightDataSetPermissions extends cdktf.ComplexComputedList {
    // actions - computed: true, optional: false, required: false
    get actions() {
        return this.getListAttribute('actions');
    }
    // principal - computed: true, optional: false, required: false
    get principal() {
        return this.getStringAttribute('principal');
    }
}
exports.DataAwsccQuicksightDataSetPermissions = DataAwsccQuicksightDataSetPermissions;
function dataAwsccQuicksightDataSetPermissionsToTerraform(struct) {
    if (!cdktf.canInspect(struct)) {
        return struct;
    }
    return {
        actions: cdktf.listMapper(cdktf.stringToTerraform)(struct.actions),
        principal: cdktf.stringToTerraform(struct.principal),
    };
}
exports.dataAwsccQuicksightDataSetPermissionsToTerraform = dataAwsccQuicksightDataSetPermissionsToTerraform;
class DataAwsccQuicksightDataSetPhysicalTableMapCustomSqlColumns extends cdktf.ComplexComputedList {
    // name - computed: true, optional: false, required: false
    get name() {
        return this.getStringAttribute('name');
    }
    // type - computed: true, optional: false, required: false
    get type() {
        return this.getStringAttribute('type');
    }
}
exports.DataAwsccQuicksightDataSetPhysicalTableMapCustomSqlColumns = DataAwsccQuicksightDataSetPhysicalTableMapCustomSqlColumns;
function dataAwsccQuicksightDataSetPhysicalTableMapCustomSqlColumnsToTerraform(struct) {
    if (!cdktf.canInspect(struct)) {
        return struct;
    }
    return {
        name: cdktf.stringToTerraform(struct.name),
        type: cdktf.stringToTerraform(struct.type),
    };
}
exports.dataAwsccQuicksightDataSetPhysicalTableMapCustomSqlColumnsToTerraform = dataAwsccQuicksightDataSetPhysicalTableMapCustomSqlColumnsToTerraform;
class DataAwsccQuicksightDataSetPhysicalTableMapCustomSql extends cdktf.ComplexComputedList {
    // columns - computed: true, optional: false, required: false
    get columns() {
        return this.interpolationForAttribute('columns');
    }
    // data_source_arn - computed: true, optional: false, required: false
    get dataSourceArn() {
        return this.getStringAttribute('data_source_arn');
    }
    // name - computed: true, optional: false, required: false
    get name() {
        return this.getStringAttribute('name');
    }
    // sql_query - computed: true, optional: false, required: false
    get sqlQuery() {
        return this.getStringAttribute('sql_query');
    }
}
exports.DataAwsccQuicksightDataSetPhysicalTableMapCustomSql = DataAwsccQuicksightDataSetPhysicalTableMapCustomSql;
function dataAwsccQuicksightDataSetPhysicalTableMapCustomSqlToTerraform(struct) {
    if (!cdktf.canInspect(struct)) {
        return struct;
    }
    return {
        columns: cdktf.listMapper(dataAwsccQuicksightDataSetPhysicalTableMapCustomSqlColumnsToTerraform)(struct.columns),
        data_source_arn: cdktf.stringToTerraform(struct.dataSourceArn),
        name: cdktf.stringToTerraform(struct.name),
        sql_query: cdktf.stringToTerraform(struct.sqlQuery),
    };
}
exports.dataAwsccQuicksightDataSetPhysicalTableMapCustomSqlToTerraform = dataAwsccQuicksightDataSetPhysicalTableMapCustomSqlToTerraform;
class DataAwsccQuicksightDataSetPhysicalTableMapRelationalTableInputColumns extends cdktf.ComplexComputedList {
    // name - computed: true, optional: false, required: false
    get name() {
        return this.getStringAttribute('name');
    }
    // type - computed: true, optional: false, required: false
    get type() {
        return this.getStringAttribute('type');
    }
}
exports.DataAwsccQuicksightDataSetPhysicalTableMapRelationalTableInputColumns = DataAwsccQuicksightDataSetPhysicalTableMapRelationalTableInputColumns;
function dataAwsccQuicksightDataSetPhysicalTableMapRelationalTableInputColumnsToTerraform(struct) {
    if (!cdktf.canInspect(struct)) {
        return struct;
    }
    return {
        name: cdktf.stringToTerraform(struct.name),
        type: cdktf.stringToTerraform(struct.type),
    };
}
exports.dataAwsccQuicksightDataSetPhysicalTableMapRelationalTableInputColumnsToTerraform = dataAwsccQuicksightDataSetPhysicalTableMapRelationalTableInputColumnsToTerraform;
class DataAwsccQuicksightDataSetPhysicalTableMapRelationalTable extends cdktf.ComplexComputedList {
    // catalog - computed: true, optional: false, required: false
    get catalog() {
        return this.getStringAttribute('catalog');
    }
    // data_source_arn - computed: true, optional: false, required: false
    get dataSourceArn() {
        return this.getStringAttribute('data_source_arn');
    }
    // input_columns - computed: true, optional: false, required: false
    get inputColumns() {
        return this.interpolationForAttribute('input_columns');
    }
    // name - computed: true, optional: false, required: false
    get name() {
        return this.getStringAttribute('name');
    }
    // schema - computed: true, optional: false, required: false
    get schema() {
        return this.getStringAttribute('schema');
    }
}
exports.DataAwsccQuicksightDataSetPhysicalTableMapRelationalTable = DataAwsccQuicksightDataSetPhysicalTableMapRelationalTable;
function dataAwsccQuicksightDataSetPhysicalTableMapRelationalTableToTerraform(struct) {
    if (!cdktf.canInspect(struct)) {
        return struct;
    }
    return {
        catalog: cdktf.stringToTerraform(struct.catalog),
        data_source_arn: cdktf.stringToTerraform(struct.dataSourceArn),
        input_columns: cdktf.listMapper(dataAwsccQuicksightDataSetPhysicalTableMapRelationalTableInputColumnsToTerraform)(struct.inputColumns),
        name: cdktf.stringToTerraform(struct.name),
        schema: cdktf.stringToTerraform(struct.schema),
    };
}
exports.dataAwsccQuicksightDataSetPhysicalTableMapRelationalTableToTerraform = dataAwsccQuicksightDataSetPhysicalTableMapRelationalTableToTerraform;
class DataAwsccQuicksightDataSetPhysicalTableMapS3SourceInputColumns extends cdktf.ComplexComputedList {
    // name - computed: true, optional: false, required: false
    get name() {
        return this.getStringAttribute('name');
    }
    // type - computed: true, optional: false, required: false
    get type() {
        return this.getStringAttribute('type');
    }
}
exports.DataAwsccQuicksightDataSetPhysicalTableMapS3SourceInputColumns = DataAwsccQuicksightDataSetPhysicalTableMapS3SourceInputColumns;
function dataAwsccQuicksightDataSetPhysicalTableMapS3SourceInputColumnsToTerraform(struct) {
    if (!cdktf.canInspect(struct)) {
        return struct;
    }
    return {
        name: cdktf.stringToTerraform(struct.name),
        type: cdktf.stringToTerraform(struct.type),
    };
}
exports.dataAwsccQuicksightDataSetPhysicalTableMapS3SourceInputColumnsToTerraform = dataAwsccQuicksightDataSetPhysicalTableMapS3SourceInputColumnsToTerraform;
class DataAwsccQuicksightDataSetPhysicalTableMapS3SourceUploadSettings extends cdktf.ComplexComputedList {
    // contains_header - computed: true, optional: false, required: false
    get containsHeader() {
        return this.getBooleanAttribute('contains_header');
    }
    // delimiter - computed: true, optional: false, required: false
    get delimiter() {
        return this.getStringAttribute('delimiter');
    }
    // format - computed: true, optional: false, required: false
    get format() {
        return this.getStringAttribute('format');
    }
    // start_from_row - computed: true, optional: false, required: false
    get startFromRow() {
        return this.getNumberAttribute('start_from_row');
    }
    // text_qualifier - computed: true, optional: false, required: false
    get textQualifier() {
        return this.getStringAttribute('text_qualifier');
    }
}
exports.DataAwsccQuicksightDataSetPhysicalTableMapS3SourceUploadSettings = DataAwsccQuicksightDataSetPhysicalTableMapS3SourceUploadSettings;
function dataAwsccQuicksightDataSetPhysicalTableMapS3SourceUploadSettingsToTerraform(struct) {
    if (!cdktf.canInspect(struct)) {
        return struct;
    }
    return {
        contains_header: cdktf.booleanToTerraform(struct.containsHeader),
        delimiter: cdktf.stringToTerraform(struct.delimiter),
        format: cdktf.stringToTerraform(struct.format),
        start_from_row: cdktf.numberToTerraform(struct.startFromRow),
        text_qualifier: cdktf.stringToTerraform(struct.textQualifier),
    };
}
exports.dataAwsccQuicksightDataSetPhysicalTableMapS3SourceUploadSettingsToTerraform = dataAwsccQuicksightDataSetPhysicalTableMapS3SourceUploadSettingsToTerraform;
class DataAwsccQuicksightDataSetPhysicalTableMapS3Source extends cdktf.ComplexComputedList {
    // data_source_arn - computed: true, optional: false, required: false
    get dataSourceArn() {
        return this.getStringAttribute('data_source_arn');
    }
    // input_columns - computed: true, optional: false, required: false
    get inputColumns() {
        return this.interpolationForAttribute('input_columns');
    }
    // upload_settings - computed: true, optional: false, required: false
    get uploadSettings() {
        return this.interpolationForAttribute('upload_settings');
    }
}
exports.DataAwsccQuicksightDataSetPhysicalTableMapS3Source = DataAwsccQuicksightDataSetPhysicalTableMapS3Source;
function dataAwsccQuicksightDataSetPhysicalTableMapS3SourceToTerraform(struct) {
    if (!cdktf.canInspect(struct)) {
        return struct;
    }
    return {
        data_source_arn: cdktf.stringToTerraform(struct.dataSourceArn),
        input_columns: cdktf.listMapper(dataAwsccQuicksightDataSetPhysicalTableMapS3SourceInputColumnsToTerraform)(struct.inputColumns),
        upload_settings: dataAwsccQuicksightDataSetPhysicalTableMapS3SourceUploadSettingsToTerraform(struct.uploadSettings),
    };
}
exports.dataAwsccQuicksightDataSetPhysicalTableMapS3SourceToTerraform = dataAwsccQuicksightDataSetPhysicalTableMapS3SourceToTerraform;
class DataAwsccQuicksightDataSetPhysicalTableMap extends cdktf.ComplexComputedList {
    // custom_sql - computed: true, optional: false, required: false
    get customSql() {
        return this.interpolationForAttribute('custom_sql');
    }
    // relational_table - computed: true, optional: false, required: false
    get relationalTable() {
        return this.interpolationForAttribute('relational_table');
    }
    // s3_source - computed: true, optional: false, required: false
    get s3Source() {
        return this.interpolationForAttribute('s3_source');
    }
}
exports.DataAwsccQuicksightDataSetPhysicalTableMap = DataAwsccQuicksightDataSetPhysicalTableMap;
function dataAwsccQuicksightDataSetPhysicalTableMapToTerraform(struct) {
    if (!cdktf.canInspect(struct)) {
        return struct;
    }
    return {
        custom_sql: dataAwsccQuicksightDataSetPhysicalTableMapCustomSqlToTerraform(struct.customSql),
        relational_table: dataAwsccQuicksightDataSetPhysicalTableMapRelationalTableToTerraform(struct.relationalTable),
        s3_source: dataAwsccQuicksightDataSetPhysicalTableMapS3SourceToTerraform(struct.s3Source),
    };
}
exports.dataAwsccQuicksightDataSetPhysicalTableMapToTerraform = dataAwsccQuicksightDataSetPhysicalTableMapToTerraform;
class DataAwsccQuicksightDataSetRowLevelPermissionDataSet extends cdktf.ComplexComputedList {
    // arn - computed: true, optional: false, required: false
    get arn() {
        return this.getStringAttribute('arn');
    }
    // format_version - computed: true, optional: false, required: false
    get formatVersion() {
        return this.getStringAttribute('format_version');
    }
    // namespace - computed: true, optional: false, required: false
    get namespace() {
        return this.getStringAttribute('namespace');
    }
    // permission_policy - computed: true, optional: false, required: false
    get permissionPolicy() {
        return this.getStringAttribute('permission_policy');
    }
}
exports.DataAwsccQuicksightDataSetRowLevelPermissionDataSet = DataAwsccQuicksightDataSetRowLevelPermissionDataSet;
function dataAwsccQuicksightDataSetRowLevelPermissionDataSetToTerraform(struct) {
    if (!cdktf.canInspect(struct)) {
        return struct;
    }
    return {
        arn: cdktf.stringToTerraform(struct.arn),
        format_version: cdktf.stringToTerraform(struct.formatVersion),
        namespace: cdktf.stringToTerraform(struct.namespace),
        permission_policy: cdktf.stringToTerraform(struct.permissionPolicy),
    };
}
exports.dataAwsccQuicksightDataSetRowLevelPermissionDataSetToTerraform = dataAwsccQuicksightDataSetRowLevelPermissionDataSetToTerraform;
class DataAwsccQuicksightDataSetTags extends cdktf.ComplexComputedList {
    // key - computed: true, optional: false, required: false
    get key() {
        return this.getStringAttribute('key');
    }
    // value - computed: true, optional: false, required: false
    get value() {
        return this.getStringAttribute('value');
    }
}
exports.DataAwsccQuicksightDataSetTags = DataAwsccQuicksightDataSetTags;
function dataAwsccQuicksightDataSetTagsToTerraform(struct) {
    if (!cdktf.canInspect(struct)) {
        return struct;
    }
    return {
        key: cdktf.stringToTerraform(struct.key),
        value: cdktf.stringToTerraform(struct.value),
    };
}
exports.dataAwsccQuicksightDataSetTagsToTerraform = dataAwsccQuicksightDataSetTagsToTerraform;
/**
* Represents a {@link https://www.terraform.io/docs/providers/awscc/d/quicksight_data_set.html awscc_quicksight_data_set}
*/
class DataAwsccQuicksightDataSet extends cdktf.TerraformDataSource {
    // ===========
    // INITIALIZER
    // ===========
    /**
    * Create a new {@link https://www.terraform.io/docs/providers/awscc/d/quicksight_data_set.html awscc_quicksight_data_set} Data Source
    *
    * @param scope The scope in which to define this construct
    * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
    * @param options DataAwsccQuicksightDataSetConfig
    */
    constructor(scope, id, config) {
        super(scope, id, {
            terraformResourceType: 'awscc_quicksight_data_set',
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
    // arn - computed: true, optional: false, required: false
    get arn() {
        return this.getStringAttribute('arn');
    }
    // aws_account_id - computed: true, optional: false, required: false
    get awsAccountId() {
        return this.getStringAttribute('aws_account_id');
    }
    // column_groups - computed: true, optional: false, required: false
    get columnGroups() {
        return this.interpolationForAttribute('column_groups');
    }
    // column_level_permission_rules - computed: true, optional: false, required: false
    get columnLevelPermissionRules() {
        return this.interpolationForAttribute('column_level_permission_rules');
    }
    // consumed_spice_capacity_in_bytes - computed: true, optional: false, required: false
    get consumedSpiceCapacityInBytes() {
        return this.getNumberAttribute('consumed_spice_capacity_in_bytes');
    }
    // created_time - computed: true, optional: false, required: false
    get createdTime() {
        return this.getStringAttribute('created_time');
    }
    // data_set_id - computed: true, optional: false, required: false
    get dataSetId() {
        return this.getStringAttribute('data_set_id');
    }
    // field_folders - computed: true, optional: false, required: false
    get fieldFolders() {
        return this.interpolationForAttribute('field_folders');
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
    // import_mode - computed: true, optional: false, required: false
    get importMode() {
        return this.getStringAttribute('import_mode');
    }
    // ingestion_wait_policy - computed: true, optional: false, required: false
    get ingestionWaitPolicy() {
        return this.interpolationForAttribute('ingestion_wait_policy');
    }
    // last_updated_time - computed: true, optional: false, required: false
    get lastUpdatedTime() {
        return this.getStringAttribute('last_updated_time');
    }
    // logical_table_map - computed: true, optional: false, required: false
    get logicalTableMap() {
        return this.interpolationForAttribute('logical_table_map');
    }
    // name - computed: true, optional: false, required: false
    get name() {
        return this.getStringAttribute('name');
    }
    // output_columns - computed: true, optional: false, required: false
    get outputColumns() {
        return this.interpolationForAttribute('output_columns');
    }
    // permissions - computed: true, optional: false, required: false
    get permissions() {
        return this.interpolationForAttribute('permissions');
    }
    // physical_table_map - computed: true, optional: false, required: false
    get physicalTableMap() {
        return this.interpolationForAttribute('physical_table_map');
    }
    // row_level_permission_data_set - computed: true, optional: false, required: false
    get rowLevelPermissionDataSet() {
        return this.interpolationForAttribute('row_level_permission_data_set');
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
exports.DataAwsccQuicksightDataSet = DataAwsccQuicksightDataSet;
// =================
// STATIC PROPERTIES
// =================
DataAwsccQuicksightDataSet.tfResourceType = "awscc_quicksight_data_set";
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZGF0YS1hd3NjYy1xdWlja3NpZ2h0LWRhdGEtc2V0LmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiZGF0YS1hd3NjYy1xdWlja3NpZ2h0LWRhdGEtc2V0LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7QUFBQSwyRUFBMkU7QUFDM0UsMkNBQTJDOzs7O0FBRzNDLCtCQUErQjtBQVkvQixNQUFhLDJEQUE0RCxTQUFRLEtBQUssQ0FBQyxtQkFBbUI7SUFFeEcsNkRBQTZEO0lBQzdELElBQVcsT0FBTztRQUNoQixPQUFPLElBQUksQ0FBQyxnQkFBZ0IsQ0FBQyxTQUFTLENBQUMsQ0FBQztJQUMxQyxDQUFDO0lBRUQsa0VBQWtFO0lBQ2xFLElBQVcsV0FBVztRQUNwQixPQUFPLElBQUksQ0FBQyxrQkFBa0IsQ0FBQyxjQUFjLENBQUMsQ0FBQztJQUNqRCxDQUFDO0lBRUQsMERBQTBEO0lBQzFELElBQVcsSUFBSTtRQUNiLE9BQU8sSUFBSSxDQUFDLGtCQUFrQixDQUFDLE1BQU0sQ0FBQyxDQUFDO0lBQ3pDLENBQUM7Q0FDRjtBQWhCRCxrSUFnQkM7QUFFRCxTQUFnQixzRUFBc0UsQ0FBQyxNQUFvRTtJQUN6SixJQUFJLENBQUMsS0FBSyxDQUFDLFVBQVUsQ0FBQyxNQUFNLENBQUMsRUFBRTtRQUFFLE9BQU8sTUFBTSxDQUFDO0tBQUU7SUFDakQsT0FBTztRQUNMLE9BQU8sRUFBRSxLQUFLLENBQUMsVUFBVSxDQUFDLEtBQUssQ0FBQyxpQkFBaUIsQ0FBQyxDQUFDLE1BQU8sQ0FBQyxPQUFPLENBQUM7UUFDbkUsWUFBWSxFQUFFLEtBQUssQ0FBQyxpQkFBaUIsQ0FBQyxNQUFPLENBQUMsV0FBVyxDQUFDO1FBQzFELElBQUksRUFBRSxLQUFLLENBQUMsaUJBQWlCLENBQUMsTUFBTyxDQUFDLElBQUksQ0FBQztLQUM1QyxDQUFBO0FBQ0gsQ0FBQztBQVBELHdKQU9DO0FBRUQsTUFBYSxzQ0FBdUMsU0FBUSxLQUFLLENBQUMsbUJBQW1CO0lBRW5GLDhFQUE4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QyxnQkFBZ0IsQ0FBUSxDQUFDO0lBQ2pFLENBQUM7SUFFRCxpRUFBaUU7SUFDakUsSUFBVyxXQUFXO1FBQ3BCLE9BQU8sSUFBSSxDQUFDLHlCQUF5QixDQUFDLGFBQWEsQ0FBUSxDQUFDO0lBQzlELENBQUM7SUFFRCx3RUFBd0U7SUFDeEUsSUFBVyxnQkFBZ0I7UUFDekIsT0FBTyxJQUFJLENBQUMseUJBQXlCLENBQUMsb0JBQW9CLENBQVEsQ0FBQztJQUNyRSxDQUFDO0lBRUQsbUZBQW1GO0lBQ25GLElBQVcseUJBQXlCO1FBQ2xDLE9BQU8sSUFBSSxDQUFDLHlCQUF5QixDQUFDLCtCQUErQixDQUFRLENBQUM7SUFDaEYsQ0FBQztJQUVELDBEQUEwRDtJQUMxRCxJQUFXLElBQUk7UUFDYixPQUFPLElBQUksQ0FBQyx5QkFBeUIsQ0FBQyxNQUFNLENBQVEsQ0FBQztJQUN2RCxDQUFDO0lBRUQsWUFBWTtJQUNaLFlBQVk7SUFDWixZQUFZO0lBRUYsb0JBQW9CO1FBQzVCLE9BQU87WUFDTCxFQUFFLEVBQUUsS0FBSyxDQUFDLGlCQUFpQixDQUFDLElBQUksQ0FBQyxHQUFHLENBQUM7U0FDdEMsQ0FBQztJQUNKLENBQUM7O0FBbkpILGdFQW9KQztBQWxKQyxvQkFBb0I7QUFDcEIsb0JBQW9CO0FBQ3BCLG9CQUFvQjtBQUNHLHlDQUFjLEdBQVcsMkJBQTJCLENBQUMiLCJzb3VyY2VzQ29udGVudCI6WyIvLyBodHRwczovL3d3dy50ZXJyYWZvcm0uaW8vZG9jcy9wcm92aWRlcnMvYXdzY2MvZC9xdWlja3NpZ2h0X2RhdGFfc2V0Lmh0bWxcbi8vIGdlbmVyYXRlZCBmcm9tIHRlcnJhZm9ybSByZXNvdXJjZSBzY2hlbWFcblxuaW1wb3J0IHsgQ29uc3RydWN0IH0gZnJvbSAnY29uc3RydWN0cyc7XG5pbXBvcnQgKiBhcyBjZGt0ZiBmcm9tICdjZGt0Zic7XG5cbi8vIENvbmZpZ3VyYXRpb25cblxuZXhwb3J0IGludGVyZmFjZSBEYXRhQXdzY2NRdWlja3NpZ2h0RGF0YVNldENvbmZpZyBleHRlbmRzIGNka3RmLlRlcnJhZm9ybU1ldGFBcmd1bWVudHMge1xuICAvKipcbiAgKiBVbmlxdWVseSBpZGVudGlmaWVzIHRoZSByZXNvdXJjZS5cbiAgKiBcbiAgKiBEb2NzIGF0IFRlcnJhZm9ybSBSZWdpc3RyeToge0BsaW5rIGh0dHBzOi8vd3d3LnRlcnJhZm9ybS5pby9kb2NzL3Byb3ZpZGVycy9hd3NjYy9kL3F1aWNrc2lnaHRfZGF0YV9zZXQuaHRtbCNpZCBEYXRhQXdzY2NRdWlja3NpZ2h0RGF0YVNldCNpZH1cbiAgKi9cbiAgcmVhZG9ubHkgaWQ6IHN0cmluZztcbn1cbmV4cG9ydCBjbGFzcyBEYXRhQXdzY2NRdWlja3NpZ2h0RGF0YVNldENvbHVtbkdyb3Vwc0dlb1NwYXRpYWxDb2x1bW5Hcm91cCBleHRlbmRzIGNka3RmLkNvbXBsZXhDb21wdXRlZExpc3Qge1xuXG4gIC8vIGNvbHVtbnMgLSBjb21wdXRlZDogdHJ1ZSwgb3B0aW9uYWw6IGZhbHNlLCByZXF1aXJlZDogZmFsc2VcbiAgcHVibGljIGdldCBjb2x1bW5zKCkge1xuICAgIHJldHVybiB0aGlzLmdldExpc3RBdHRyaWJ1dGUoJ2NvbHVtbnMnKTtcbiAgfVxuXG4gIC8vIGNvdW50cnlfY29kZSAtIGNvbXB1dGVkOiB0cnVlLCBvcHRpb25hbDogZmFsc2UsIHJlcXVpcmVkOiBmYWxzZVxuICBwdWJsaWMgZ2V0IGNvdW50cnlDb2RlKCkge1xuICAgIHJldHVybiB0aGlzLmdldFN0cmluZ0F0dHJpYnV0ZSgnY291bnRyeV9jb2RlJyk7XG4gIH1cblxuICAvLyBuYW1lIC0gY29tcHV0ZWQ6IHRydWUsIG9wdGlvbmFsOiBmYWxzZSwgcmVxdWlyZWQ6IGZhbHNlXG4gIHB1YmxpYyBnZXQgbmFtZSgpIHtcbiAgICByZXR1cm4gdGhpcy5nZXRTdHJpbmdBdHRyaWJ1dGUoJ25hbWUnKTtcbiAgfVxufVxuXG5leHBvcnQgZnVuY3Rpb24gZGF0YUF3c2NjUXVpY2tzaWdodERhdGFTZXRDb2x1bW5Hcm91cHNHZW9TcGF0aWFsQ29sdW1uR3JvdXBUb1RlcnJhZm9ybShzdHJ1Y3Q/OiBEYXRhQXdzY2NRdWlja3NpZ2h0RGF0YVNldENvbHVtbkdyb3Vwc0dlb1NwYXRpYWxDb2x1bW5Hcm91cCk6IGFueSB7XG4gIGlmICghY2RrdGYuY2FuSW5zcGVjdChzdHJ1Y3QpKSB7IHJldHVybiBzdHJ1Y3Q7IH1cbiAgcmV0dXJuIHtcbiAgICBjb2x1bW5zOiBjZGt0Zi5saXN0TWFwcGVyKGNka3RmLnN0cmluZ1RvVGVycmFmb3JtKShzdHJ1Y3QhLmNvbHVtbnMpLFxuICAgIGNvdW50cnlfY29kZTogY2RrdGYuc3RyaW5nVG9UZXJyYWZvcm0oc3RydWN0IS5jb3VudHJ5Q29kZSksXG4gICAgbmFtZTogY2RrdGYuc3RyaW5nVG9UZXJyYWZvcm0oc3RydWN0IS5uYW1lKSxcbiAgfVxufVxuXG5leHBvcnQgY2xhc3MgRGF0YUF3c2NjUXVpY2tzaWdodERhdGFTZXRDb2x1bW5Hcm91cHMgZXh0ZW5kcyBjZGt0Zi5Db21wbGV4Q29tcHV0ZWRMaXN0IHtcblxuICAvLyBnZW9fc3BhdGlhbF9jb2x1bW5fZ3JvdXAgLSBjb21wdXRlZDogdHJ1ZSwgb3B0aW9uYWw6IGZhbHNlLCByZXF1aXJlZDogZmFsc2VcbiAgcHVibGljIGdldCBnZW9TcGF0aWFsQ29sdW1uR3JvdXAoKSB7XG4gICAgcmV0dXJuIHRoaXMuaW50ZXJwb2xhdGlvbkZvckF0dHJpYnV0ZSgnZ2VvX3NwYXRpYWxfY29sdW1uX2dyb3VwJykgYXMgYW55O1xuICB9XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBkYXRhQXdzY2NRdWlja3NpZ2h0RGF0YVNldENvbHVtbkdyb3Vwc1RvVGVycmFmb3JtKHN0cnVjdD86IERhdGFBd3NjY1F1aWNrc2lnaHREYXRhU2V0Q29sdW1uR3JvdXBzKTogYW55IHtcbiAgaWYgKCFjZGt0Zi5jYW5JbnNwZWN0KHN0cnVjdCkpIHsgcmV0dXJuIHN0cnVjdDsgfVxuICByZXR1cm4ge1xuICAgIGdlb19zcGF0aWFsX2NvbHVtbl9ncm91cDogZGF0YUF3c2NjUXVpY2tzaWdodERhdGFTZXRDb2x1bW5Hcm91cHNHZW9TcGF0aWFsQ29sdW1uR3JvdXBUb1RlcnJhZm9ybShzdHJ1Y3QhLmdlb1NwYXRpYWxDb2x1bW5Hcm91cCksXG4gIH1cbn1cblxuZXhwb3J0IGNsYXNzIERhdGFBd3NjY1F1aWNrc2lnaHREYXRhU2V0Q29sdW1uTGV2ZWxQZXJtaXNzaW9uUnVsZXMgZXh0ZW5kcyBjZGt0Zi5Db21wbGV4Q29tcHV0ZWRMaXN0IHtcblxuICAvLyBjb2x1bW5fbmFtZXMgLSBjb21wdXRlZDogdHJ1ZSwgb3B0aW9uYWw6IGZhbHNlLCByZXF1aXJlZDogZmFsc2VcbiAgcHVibGljIGdldCBjb2x1bW5OYW1lcygpIHtcbiAgICByZXR1cm4gdGhpcy5nZXRMaXN0QXR0cmlidXRlKCdjb2x1bW5fbmFtZXMnKTtcbiAgfVxuXG4gIC8vIHByaW5jaXBhbHMgLSBjb21wdXRlZDogdHJ1ZSwgb3B0aW9uYWw6IGZhbHNlLCByZXF1aXJlZDogZmFsc2VcbiAgcHVibGljIGdldCBwcmluY2lwYWxzKCkge1xuICAgIHJldHVybiB0aGlzLmdldExpc3RBdHRyaWJ1dGUoJ3ByaW5jaXBhbHMnKTtcbiAgfVxufVxuXG5leHBvcnQgZnVuY3Rpb24gZGF0YUF3c2NjUXVpY2tzaWdodERhdGFTZXRDb2x1bW5MZXZlbFBlcm1pc3Npb25SdWxlc1RvVGVycmFmb3JtKHN0cnVjdD86IERhdGFBd3NjY1F1aWNrc2lnaHREYXRhU2V0Q29sdW1uTGV2ZWxQZXJtaXNzaW9uUnVsZXMpOiBhbnkge1xuICBpZiAoIWNka3RmLmNhbkluc3BlY3Qoc3RydWN0KSkgeyByZXR1cm4gc3RydWN0OyB9XG4gIHJldHVybiB7XG4gICAgY29sdW1uX25hbWVzOiBjZGt0Zi5saXN0TWFwcGVyKGNka3RmLnN0cmluZ1RvVGVycmFmb3JtKShzdHJ1Y3QhLmNvbHVtbk5hbWVzKSxcbiAgICBwcmluY2lwYWxzOiBjZGt0Zi5saXN0TWFwcGVyKGNka3RmLnN0cmluZ1RvVGVycmFmb3JtKShzdHJ1Y3QhLnByaW5jaXBhbHMpLFxuICB9XG59XG5cbmV4cG9ydCBjbGFzcyBEYXRhQXdzY2NRdWlja3NpZ2h0RGF0YVNldEZpZWxkRm9sZGVycyBleHRlbmRzIGNka3RmLkNvbXBsZXhDb21wdXRlZExpc3Qge1xuXG4gIC8vIGNvbHVtbnMgLSBjb21wdXRlZDogdHJ1ZSwgb3B0aW9uYWw6IGZhbHNlLCByZXF1aXJlZDogZmFsc2VcbiAgcHVibGljIGdldCBjb2x1bW5zKCkge1xuICAgIHJldHVybiB0aGlzLmdldExpc3RBdHRyaWJ1dGUoJ2NvbHVtbnMnKTtcbiAgfVxuXG4gIC8vIGRlc2NyaXB0aW9uIC0gY29tcHV0ZWQ6IHRydWUsIG9wdGlvbmFsOiBmYWxzZSwgcmVxdWlyZWQ6IGZhbHNlXG4gIHB1YmxpYyBnZXQgZGVzY3JpcHRpb24oKSB7XG4gICAgcmV0dXJuIHRoaXMuZ2V0U3RyaW5nQXR0cmlidXRlKCdkZXNjcmlwdGlvbicpO1xuICB9XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBkYXRhQXdzY2NRdWlja3NpZ2h0RGF0YVNldEZpZWxkRm9sZGVyc1RvVGVycmFmb3JtKHN0cnVjdD86IERhdGFBd3NjY1F1aWNrc2lnaHREYXRhU2V0RmllbGRGb2xkZXJzKTogYW55IHtcbiAgaWYgKCFjZGt0Zi5jYW5JbnNwZWN0KHN0cnVjdCkpIHsgcmV0dXJuIHN0cnVjdDsgfVxuICByZXR1cm4ge1xuICAgIGNvbHVtbnM6IGNka3RmLmxpc3RNYXBwZXIoY2RrdGYuc3RyaW5nVG9UZXJyYWZvcm0pKHN0cnVjdCEuY29sdW1ucyksXG4gICAgZGVzY3JpcHRpb246IGNka3RmLnN0cmluZ1RvVGVycmFmb3JtKHN0cnVjdCEuZGVzY3JpcHRpb24pLFxuICB9XG59XG5cbmV4cG9ydCBjbGFzcyBEYXRhQXdzY2NRdWlja3NpZ2h0RGF0YVNldEluZ2VzdGlvbldhaXRQb2xpY3kgZXh0ZW5kcyBjZGt0Zi5Db21wbGV4Q29tcHV0ZWRMaXN0IHtcblxuICAvLyBpbmdlc3Rpb25fd2FpdF90aW1lX2luX2hvdXJzIC0gY29tcHV0ZWQ6IHRydWUsIG9wdGlvbmFsOiBmYWxzZSwgcmVxdWlyZWQ6IGZhbHNlXG4gIHB1YmxpYyBnZXQgaW5nZXN0aW9uV2FpdFRpbWVJbkhvdXJzKCkge1xuICAgIHJldHVybiB0aGlzLmdldE51bWJlckF0dHJpYnV0ZSgnaW5nZXN0aW9uX3dhaXRfdGltZV9pbl9ob3VycycpO1xuICB9XG5cbiAgLy8gd2FpdF9mb3Jfc3BpY2VfaW5nZXN0aW9uIC0gY29tcHV0ZWQ6IHRydWUsIG9wdGlvbmFsOiBmYWxzZSwgcmVxdWlyZWQ6IGZhbHNlXG4gIHB1YmxpYyBnZXQgd2FpdEZvclNwaWNlSW5nZXN0aW9uKCkge1xuICAgIHJldHVybiB0aGlzLmdldEJvb2xlYW5BdHRyaWJ1dGUoJ3dhaXRfZm9yX3NwaWNlX2luZ2VzdGlvbicpO1xuICB9XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBkYXRhQXdzY2NRdWlja3NpZ2h0RGF0YVNldEluZ2VzdGlvbldhaXRQb2xpY3lUb1RlcnJhZm9ybShzdHJ1Y3Q/OiBEYXRhQXdzY2NRdWlja3NpZ2h0RGF0YVNldEluZ2VzdGlvbldhaXRQb2xpY3kpOiBhbnkge1xuICBpZiAoIWNka3RmLmNhbkluc3BlY3Qoc3RydWN0KSkgeyByZXR1cm4gc3RydWN0OyB9XG4gIHJldHVybiB7XG4gICAgaW5nZXN0aW9uX3dhaXRfdGltZV9pbl9ob3VyczogY2RrdGYubnVtYmVyVG9UZXJyYWZvcm0oc3RydWN0IS5pbmdlc3Rpb25XYWl0VGltZUluSG91cnMpLFxuICAgIHdhaXRfZm9yX3NwaWNlX2luZ2VzdGlvbjogY2RrdGYuYm9vbGVhblRvVGVycmFmb3JtKHN0cnVjdCEud2FpdEZvclNwaWNlSW5nZXN0aW9uKSxcbiAgfVxufVxuXG5leHBvcnQgY2xhc3MgRGF0YUF3c2NjUXVpY2tzaWdodERhdGFTZXRMb2dpY2FsVGFibGVNYXBEYXRhVHJhbnNmb3Jtc0Nhc3RDb2x1bW5UeXBlT3BlcmF0aW9uIGV4dGVuZHMgY2RrdGYuQ29tcGxleENvbXB1dGVkTGlzdCB7XG5cbiAgLy8gY29sdW1uX25hbWUgLSBjb21wdXRlZDogdHJ1ZSwgb3B0aW9uYWw6IGZhbHNlLCByZXF1aXJlZDogZmFsc2VcbiAgcHVibGljIGdldCBjb2x1bW5OYW1lKCkge1xuICAgIHJldHVybiB0aGlzLmdldFN0cmluZ0F0dHJpYnV0ZSgnY29sdW1uX25hbWUnKTtcbiAgfVxuXG4gIC8vIGZvcm1hdCAtIGNvbXB1dGVkOiB0cnVlLCBvcHRpb25hbDogZmFsc2UsIHJlcXVpcmVkOiBmYWxzZVxuICBwdWJsaWMgZ2V0IGZvcm1hdCgpIHtcbiAgICByZXR1cm4gdGhpcy5nZXRTdHJpbmdBdHRyaWJ1dGUoJ2Zvcm1hdCcpO1xuICB9XG5cbiAgLy8gbmV3X2NvbHVtbl90eXBlIC0gY29tcHV0ZWQ6IHRydWUsIG9wdGlvbmFsOiBmYWxzZSwgcmVxdWlyZWQ6IGZhbHNlXG4gIHB1YmxpYyBnZXQgbmV3Q29sdW1uVHlwZSgpIHtcbiAgICByZXR1cm4gdGhpcy5nZXRTdHJpbmdBdHRyaWJ1dGUoJ25ld19jb2x1bW5fdHlwZScpO1xuICB9XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBkYXRhQXdzY2NRdWlja3NpZ2h0RGF0YVNldExvZ2ljYWxUYWJsZU1hcERhdGFUcmFuc2Zvcm1zQ2FzdENvbHVtblR5cGVPcGVyYXRpb25Ub1RlcnJhZm9ybShzdHJ1Y3Q/OiBEYXRhQXdzY2NRdWlja3NpZ2h0RGF0YVNldExvZ2ljYWxUYWJsZU1hcERhdGFUcmFuc2Zvcm1zQ2FzdENvbHVtblR5cGVPcGVyYXRpb24pOiBhbnkge1xuICBpZiAoIWNka3RmLmNhbkluc3BlY3Qoc3RydWN0KSkgeyByZXR1cm4gc3RydWN0OyB9XG4gIHJldHVybiB7XG4gICAgY29sdW1uX25hbWU6IGNka3RmLnN0cmluZ1RvVGVycmFmb3JtKHN0cnVjdCEuY29sdW1uTmFtZSksXG4gICAgZm9ybWF0OiBjZGt0Zi5zdHJpbmdUb1RlcnJhZm9ybShzdHJ1Y3QhLmZvcm1hdCksXG4gICAgbmV3X2NvbHVtbl90eXBlOiBjZGt0Zi5zdHJpbmdUb1RlcnJhZm9ybShzdHJ1Y3QhLm5ld0NvbHVtblR5cGUpLFxuICB9XG59XG5cbmV4cG9ydCBjbGFzcyBEYXRhQXdzY2NRdWlja3NpZ2h0RGF0YVNldExvZ2ljYWxUYWJsZU1hcERhdGFUcmFuc2Zvcm1zQ3JlYXRlQ29sdW1uc09wZXJhdGlvbkNvbHVtbnMgZXh0ZW5kcyBjZGt0Zi5Db21wbGV4Q29tcHV0ZWRMaXN0IHtcblxuICAvLyBjb2x1bW5faWQgLSBjb21wdXRlZDogdHJ1ZSwgb3B0aW9uYWw6IGZhbHNlLCByZXF1aXJlZDogZmFsc2VcbiAgcHVibGljIGdldCBjb2x1bW5JZCgpIHtcbiAgICByZXR1cm4gdGhpcy5nZXRTdHJpbmdBdHRyaWJ1dGUoJ2NvbHVtbl9pZCcpO1xuICB9XG5cbiAgLy8gY29sdW1uX25hbWUgLSBjb21wdXRlZDogdHJ1ZSwgb3B0aW9uYWw6IGZhbHNlLCByZXF1aXJlZDogZmFsc2VcbiAgcHVibGljIGdldCBjb2x1bW5OYW1lKCkge1xuICAgIHJldHVybiB0aGlzLmdldFN0cmluZ0F0dHJpYnV0ZSgnY29sdW1uX25hbWUnKTtcbiAgfVxuXG4gIC8vIGV4cHJlc3Npb24gLSBjb21wdXRlZDogdHJ1ZSwgb3B0aW9uYWw6IGZhbHNlLCByZXF1aXJlZDogZmFsc2VcbiAgcHVibGljIGdldCBleHByZXNzaW9uKCkge1xuICAgIHJldHVybiB0aGlzLmdldFN0cmluZ0F0dHJpYnV0ZSgnZXhwcmVzc2lvbicpO1xuICB9XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBkYXRhQXdzY2NRdWlja3NpZ2h0RGF0YVNldExvZ2ljYWxUYWJsZU1hcERhdGFUcmFuc2Zvcm1zQ3JlYXRlQ29sdW1uc09wZXJhdGlvbkNvbHVtbnNUb1RlcnJhZm9ybShzdHJ1Y3Q/OiBEYXRhQXdzY2NRdWlja3NpZ2h0RGF0YVNldExvZ2ljYWxUYWJsZU1hcERhdGFUcmFuc2Zvcm1zQ3JlYXRlQ29sdW1uc09wZXJhdGlvbkNvbHVtbnMpOiBhbnkge1xuICBpZiAoIWNka3RmLmNhbkluc3BlY3Qoc3RydWN0KSkgeyByZXR1cm4gc3RydWN0OyB9XG4gIHJldHVybiB7XG4gICAgY29sdW1uX2lkOiBjZGt0Zi5zdHJpbmdUb1RlcnJhZm9ybShzdHJ1Y3QhLmNvbHVtbklkKSxcbiAgICBjb2x1bW5fbmFtZTogY2RrdGYuc3RyaW5nVG9UZXJyYWZvcm0oc3RydWN0IS5jb2x1bW5OYW1lKSxcbiAgICBleHByZXNzaW9uOiBjZGt0Zi5zdHJpbmdUb1RlcnJhZm9ybShzdHJ1Y3QhLmV4cHJlc3Npb24pLFxuICB9XG59XG5cbmV4cG9ydCBjbGFzcyBEYXRhQXdzY2NRdWlja3NpZ2h0RGF0YVNldExvZ2ljYWxUYWJsZU1hcERhdGFUcmFuc2Zvcm1zQ3JlYXRlQ29sdW1uc09wZXJhdGlvbiBleHRlbmRzIGNka3RmLkNvbXBsZXhDb21wdXRlZExpc3Qge1xuXG4gIC8vIGNvbHVtbnMgLSBjb21wdXRlZDogdHJ1ZSwgb3B0aW9uYWw6IGZhbHNlLCByZXF1aXJlZDogZmFsc2VcbiAgcHVibGljIGdldCBjb2x1bW5zKCkge1xuICAgIHJldHVybiB0aGlzLmludGVycG9sYXRpb25Gb3JBdHRyaWJ1dGUoJ2NvbHVtbnMnKSBhcyBhbnk7XG4gIH1cbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGRhdGFBd3NjY1F1aWNrc2lnaHREYXRhU2V0TG9naWNhbFRhYmxlTWFwRGF0YVRyYW5zZm9ybXNDcmVhdGVDb2x1bW5zT3BlcmF0aW9uVG9UZXJyYWZvcm0oc3RydWN0PzogRGF0YUF3c2NjUXVpY2tzaWdodERhdGFTZXRMb2dpY2FsVGFibGVNYXBEYXRhVHJhbnNmb3Jtc0NyZWF0ZUNvbHVtbnNPcGVyYXRpb24pOiBhbnkge1xuICBpZiAoIWNka3RmLmNhbkluc3BlY3Qoc3RydWN0KSkgeyByZXR1cm4gc3RydWN0OyB9XG4gIHJldHVybiB7XG4gICAgY29sdW1uczogY2RrdGYubGlzdE1hcHBlcihkYXRhQXdzY2NRdWlja3NpZ2h0RGF0YVNldExvZ2ljYWxUYWJsZU1hcERhdGFUcmFuc2Zvcm1zQ3JlYXRlQ29sdW1uc09wZXJhdGlvbkNvbHVtbnNUb1RlcnJhZm9ybSkoc3RydWN0IS5jb2x1bW5zKSxcbiAgfVxufVxuXG5leHBvcnQgY2xhc3MgRGF0YUF3c2NjUXVpY2tzaWdodERhdGFTZXRMb2dpY2FsVGFibGVNYXBEYXRhVHJhbnNmb3Jtc0ZpbHRlck9wZXJhdGlvbiBleHRlbmRzIGNka3RmLkNvbXBsZXhDb21wdXRlZExpc3Qge1xuXG4gIC8vIGNvbmRpdGlvbl9leHByZXNzaW9uIC0gY29tcHV0ZWQ6IHRydWUsIG9wdGlvbmFsOiBmYWxzZSwgcmVxdWlyZWQ6IGZhbHNlXG4gIHB1YmxpYyBnZXQgY29uZGl0aW9uRXhwcmVzc2lvbigpIHtcbiAgICByZXR1cm4gdGhpcy5nZXRTdHJpbmdBdHRyaWJ1dGUoJ2NvbmRpdGlvbl9leHByZXNzaW9uJyk7XG4gIH1cbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGRhdGFBd3NjY1F1aWNrc2lnaHREYXRhU2V0TG9naWNhbFRhYmxlTWFwRGF0YVRyYW5zZm9ybXNGaWx0ZXJPcGVyYXRpb25Ub1RlcnJhZm9ybShzdHJ1Y3Q/OiBEYXRhQXdzY2NRdWlja3NpZ2h0RGF0YVNldExvZ2ljYWxUYWJsZU1hcERhdGFUcmFuc2Zvcm1zRmlsdGVyT3BlcmF0aW9uKTogYW55IHtcbiAgaWYgKCFjZGt0Zi5jYW5JbnNwZWN0KHN0cnVjdCkpIHsgcmV0dXJuIHN0cnVjdDsgfVxuICByZXR1cm4ge1xuICAgIGNvbmRpdGlvbl9leHByZXNzaW9uOiBjZGt0Zi5zdHJpbmdUb1RlcnJhZm9ybShzdHJ1Y3QhLmNvbmRpdGlvbkV4cHJlc3Npb24pLFxuICB9XG59XG5cbmV4cG9ydCBjbGFzcyBEYXRhQXdzY2NRdWlja3NpZ2h0RGF0YVNldExvZ2ljYWxUYWJsZU1hcERhdGFUcmFuc2Zvcm1zUHJvamVjdE9wZXJhdGlvbiBleHRlbmRzIGNka3RmLkNvbXBsZXhDb21wdXRlZExpc3Qge1xuXG4gIC8vIHByb2plY3RlZF9jb2x1bW5zIC0gY29tcHV0ZWQ6IHRydWUsIG9wdGlvbmFsOiBmYWxzZSwgcmVxdWlyZWQ6IGZhbHNlXG4gIHB1YmxpYyBnZXQgcHJvamVjdGVkQ29sdW1ucygpIHtcbiAgICByZXR1cm4gdGhpcy5nZXRMaXN0QXR0cmlidXRlKCdwcm9qZWN0ZWRfY29sdW1ucycpO1xuICB9XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBkYXRhQXdzY2NRdWlja3NpZ2h0RGF0YVNldExvZ2ljYWxUYWJsZU1hcERhdGFUcmFuc2Zvcm1zUHJvamVjdE9wZXJhdGlvblRvVGVycmFmb3JtKHN0cnVjdD86IERhdGFBd3NjY1F1aWNrc2lnaHREYXRhU2V0TG9naWNhbFRhYmxlTWFwRGF0YVRyYW5zZm9ybXNQcm9qZWN0T3BlcmF0aW9uKTogYW55IHtcbiAgaWYgKCFjZGt0Zi5jYW5JbnNwZWN0KHN0cnVjdCkpIHsgcmV0dXJuIHN0cnVjdDsgfVxuICByZXR1cm4ge1xuICAgIHByb2plY3RlZF9jb2x1bW5zOiBjZGt0Zi5saXN0TWFwcGVyKGNka3RmLnN0cmluZ1RvVGVycmFmb3JtKShzdHJ1Y3QhLnByb2plY3RlZENvbHVtbnMpLFxuICB9XG59XG5cbmV4cG9ydCBjbGFzcyBEYXRhQXdzY2NRdWlja3NpZ2h0RGF0YVNldExvZ2ljYWxUYWJsZU1hcERhdGFUcmFuc2Zvcm1zUmVuYW1lQ29sdW1uT3BlcmF0aW9uIGV4dGVuZHMgY2RrdGYuQ29tcGxleENvbXB1dGVkTGlzdCB7XG5cbiAgLy8gY29sdW1uX25hbWUgLSBjb21wdXRlZDogdHJ1ZSwgb3B0aW9uYWw6IGZhbHNlLCByZXF1aXJlZDogZmFsc2VcbiAgcHVibGljIGdldCBjb2x1bW5OYW1lKCkge1xuICAgIHJldHVybiB0aGlzLmdldFN0cmluZ0F0dHJpYnV0ZSgnY29sdW1uX25hbWUnKTtcbiAgfVxuXG4gIC8vIG5ld19jb2x1bW5fbmFtZSAtIGNvbXB1dGVkOiB0cnVlLCBvcHRpb25hbDogZmFsc2UsIHJlcXVpcmVkOiBmYWxzZVxuICBwdWJsaWMgZ2V0IG5ld0NvbHVtbk5hbWUoKSB7XG4gICAgcmV0dXJuIHRoaXMuZ2V0U3RyaW5nQXR0cmlidXRlKCduZXdfY29sdW1uX25hbWUnKTtcbiAgfVxufVxuXG5leHBvcnQgZnVuY3Rpb24gZGF0YUF3c2NjUXVpY2tzaWdodERhdGFTZXRMb2dpY2FsVGFibGVNYXBEYXRhVHJhbnNmb3Jtc1JlbmFtZUNvbHVtbk9wZXJhdGlvblRvVGVycmFmb3JtKHN0cnVjdD86IERhdGFBd3NjY1F1aWNrc2lnaHREYXRhU2V0TG9naWNhbFRhYmxlTWFwRGF0YVRyYW5zZm9ybXNSZW5hbWVDb2x1bW5PcGVyYXRpb24pOiBhbnkge1xuICBpZiAoIWNka3RmLmNhbkluc3BlY3Qoc3RydWN0KSkgeyByZXR1cm4gc3RydWN0OyB9XG4gIHJldHVybiB7XG4gICAgY29sdW1uX25hbWU6IGNka3RmLnN0cmluZ1RvVGVycmFmb3JtKHN0cnVjdCEuY29sdW1uTmFtZSksXG4gICAgbmV3X2NvbHVtbl9uYW1lOiBjZGt0Zi5zdHJpbmdUb1RlcnJhZm9ybShzdHJ1Y3QhLm5ld0NvbHVtbk5hbWUpLFxuICB9XG59XG5cbmV4cG9ydCBjbGFzcyBEYXRhQXdzY2NRdWlja3NpZ2h0RGF0YVNldExvZ2ljYWxUYWJsZU1hcERhdGFUcmFuc2Zvcm1zVGFnQ29sdW1uT3BlcmF0aW9uVGFnc0NvbHVtbkRlc2NyaXB0aW9uIGV4dGVuZHMgY2RrdGYuQ29tcGxleENvbXB1dGVkTGlzdCB7XG5cbiAgLy8gdGV4dCAtIGNvbXB1dGVkOiB0cnVlLCBvcHRpb25hbDogZmFsc2UsIHJlcXVpcmVkOiBmYWxzZVxuICBwdWJsaWMgZ2V0IHRleHQoKSB7XG4gICAgcmV0dXJuIHRoaXMuZ2V0U3RyaW5nQXR0cmlidXRlKCd0ZXh0Jyk7XG4gIH1cbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGRhdGFBd3NjY1F1aWNrc2lnaHREYXRhU2V0TG9naWNhbFRhYmxlTWFwRGF0YVRyYW5zZm9ybXNUYWdDb2x1bW5PcGVyYXRpb25UYWdzQ29sdW1uRGVzY3JpcHRpb25Ub1RlcnJhZm9ybShzdHJ1Y3Q/OiBEYXRhQXdzY2NRdWlja3NpZ2h0RGF0YVNldExvZ2ljYWxUYWJsZU1hcERhdGFUcmFuc2Zvcm1zVGFnQ29sdW1uT3BlcmF0aW9uVGFnc0NvbHVtbkRlc2NyaXB0aW9uKTogYW55IHtcbiAgaWYgKCFjZGt0Zi5jYW5JbnNwZWN0KHN0cnVjdCkpIHsgcmV0dXJuIHN0cnVjdDsgfVxuICByZXR1cm4ge1xuICAgIHRleHQ6IGNka3RmLnN0cmluZ1RvVGVycmFmb3JtKHN0cnVjdCEudGV4dCksXG4gIH1cbn1cblxuZXhwb3J0IGNsYXNzIERhdGFBd3NjY1F1aWNrc2lnaHREYXRhU2V0TG9naWNhbFRhYmxlTWFwRGF0YVRyYW5zZm9ybXNUYWdDb2x1bW5PcGVyYXRpb25UYWdzIGV4dGVuZHMgY2RrdGYuQ29tcGxleENvbXB1dGVkTGlzdCB7XG5cbiAgLy8gY29sdW1uX2Rlc2NyaXB0aW9uIC0gY29tcHV0ZWQ6IHRydWUsIG9wdGlvbmFsOiBmYWxzZSwgcmVxdWlyZWQ6IGZhbHNlXG4gIHB1YmxpYyBnZXQgY29sdW1uRGVzY3JpcHRpb24oKSB7XG4gICAgcmV0dXJuIHRoaXMuaW50ZXJwb2xhdGlvbkZvckF0dHJpYnV0ZSgnY29sdW1uX2Rlc2NyaXB0aW9uJykgYXMgYW55O1xuICB9XG5cbiAgLy8gY29sdW1uX2dlb2dyYXBoaWNfcm9sZSAtIGNvbXB1dGVkOiB0cnVlLCBvcHRpb25hbDogZmFsc2UsIHJlcXVpcmVkOiBmYWxzZVxuICBwdWJsaWMgZ2V0IGNvbHVtbkdlb2dyYXBoaWNSb2xlKCkge1xuICAgIHJldHVybiB0aGlzLmdldFN0cmluZ0F0dHJpYnV0ZSgnY29sdW1uX2dlb2dyYXBoaWNfcm9sZScpO1xuICB9XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBkYXRhQXdzY2NRdWlja3NpZ2h0RGF0YVNldExvZ2ljYWxUYWJsZU1hcERhdGFUcmFuc2Zvcm1zVGFnQ29sdW1uT3BlcmF0aW9uVGFnc1RvVGVycmFmb3JtKHN0cnVjdD86IERhdGFBd3NjY1F1aWNrc2lnaHREYXRhU2V0TG9naWNhbFRhYmxlTWFwRGF0YVRyYW5zZm9ybXNUYWdDb2x1bW5PcGVyYXRpb25UYWdzKTogYW55IHtcbiAgaWYgKCFjZGt0Zi5jYW5JbnNwZWN0KHN0cnVjdCkpIHsgcmV0dXJuIHN0cnVjdDsgfVxuICByZXR1cm4ge1xuICAgIGNvbHVtbl9kZXNjcmlwdGlvbjogZGF0YUF3c2NjUXVpY2tzaWdodERhdGFTZXRMb2dpY2FsVGFibGVNYXBEYXRhVHJhbnNmb3Jtc1RhZ0NvbHVtbk9wZXJhdGlvblRhZ3NDb2x1bW5EZXNjcmlwdGlvblRvVGVycmFmb3JtKHN0cnVjdCEuY29sdW1uRGVzY3JpcHRpb24pLFxuICAgIGNvbHVtbl9nZW9ncmFwaGljX3JvbGU6IGNka3RmLnN0cmluZ1RvVGVycmFmb3JtKHN0cnVjdCEuY29sdW1uR2VvZ3JhcGhpY1JvbGUpLFxuICB9XG59XG5cbmV4cG9ydCBjbGFzcyBEYXRhQXdzY2NRdWlja3NpZ2h0RGF0YVNldExvZ2ljYWxUYWJsZU1hcERhdGFUcmFuc2Zvcm1zVGFnQ29sdW1uT3BlcmF0aW9uIGV4dGVuZHMgY2RrdGYuQ29tcGxleENvbXB1dGVkTGlzdCB7XG5cbiAgLy8gY29sdW1uX25hbWUgLSBjb21wdXRlZDogdHJ1ZSwgb3B0aW9uYWw6IGZhbHNlLCByZXF1aXJlZDogZmFsc2VcbiAgcHVibGljIGdldCBjb2x1bW5OYW1lKCkge1xuICAgIHJldHVybiB0aGlzLmdldFN0cmluZ0F0dHJpYnV0ZSgnY29sdW1uX25hbWUnKTtcbiAgfVxuXG4gIC8vIHRhZ3MgLSBjb21wdXRlZDogdHJ1ZSwgb3B0aW9uYWw6IGZhbHNlLCByZXF1aXJlZDogZmFsc2VcbiAgcHVibGljIGdldCB0YWdzKCkge1xuICAgIHJldHVybiB0aGlzLmludGVycG9sYXRpb25Gb3JBdHRyaWJ1dGUoJ3RhZ3MnKSBhcyBhbnk7XG4gIH1cbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGRhdGFBd3NjY1F1aWNrc2lnaHREYXRhU2V0TG9naWNhbFRhYmxlTWFwRGF0YVRyYW5zZm9ybXNUYWdDb2x1bW5PcGVyYXRpb25Ub1RlcnJhZm9ybShzdHJ1Y3Q/OiBEYXRhQXdzY2NRdWlja3NpZ2h0RGF0YVNldExvZ2ljYWxUYWJsZU1hcERhdGFUcmFuc2Zvcm1zVGFnQ29sdW1uT3BlcmF0aW9uKTogYW55IHtcbiAgaWYgKCFjZGt0Zi5jYW5JbnNwZWN0KHN0cnVjdCkpIHsgcmV0dXJuIHN0cnVjdDsgfVxuICByZXR1cm4ge1xuICAgIGNvbHVtbl9uYW1lOiBjZGt0Zi5zdHJpbmdUb1RlcnJhZm9ybShzdHJ1Y3QhLmNvbHVtbk5hbWUpLFxuICAgIHRhZ3M6IGNka3RmLmxpc3RNYXBwZXIoZGF0YUF3c2NjUXVpY2tzaWdodERhdGFTZXRMb2dpY2FsVGFibGVNYXBEYXRhVHJhbnNmb3Jtc1RhZ0NvbHVtbk9wZXJhdGlvblRhZ3NUb1RlcnJhZm9ybSkoc3RydWN0IS50YWdzKSxcbiAgfVxufVxuXG5leHBvcnQgY2xhc3MgRGF0YUF3c2NjUXVpY2tzaWdodERhdGFTZXRMb2dpY2FsVGFibGVNYXBEYXRhVHJhbnNmb3JtcyBleHRlbmRzIGNka3RmLkNvbXBsZXhDb21wdXRlZExpc3Qge1xuXG4gIC8vIGNhc3RfY29sdW1uX3R5cGVfb3BlcmF0aW9uIC0gY29tcHV0ZWQ6IHRydWUsIG9wdGlvbmFsOiBmYWxzZSwgcmVxdWlyZWQ6IGZhbHNlXG4gIHB1YmxpYyBnZXQgY2FzdENvbHVtblR5cGVPcGVyYXRpb24oKSB7XG4gICAgcmV0dXJuIHRoaXMuaW50ZXJwb2xhdGlvbkZvckF0dHJpYnV0ZSgnY2FzdF9jb2x1bW5fdHlwZV9vcGVyYXRpb24nKSBhcyBhbnk7XG4gIH1cblxuICAvLyBjcmVhdGVfY29sdW1uc19vcGVyYXRpb24gLSBjb21wdXRlZDogdHJ1ZSwgb3B0aW9uYWw6IGZhbHNlLCByZXF1aXJlZDogZmFsc2VcbiAgcHVibGljIGdldCBjcmVhdGVDb2x1bW5zT3BlcmF0aW9uKCkge1xuICAgIHJldHVybiB0aGlzLmludGVycG9sYXRpb25Gb3JBdHRyaWJ1dGUoJ2NyZWF0ZV9jb2x1bW5zX29wZXJhdGlvbicpIGFzIGFueTtcbiAgfVxuXG4gIC8vIGZpbHRlcl9vcGVyYXRpb24gLSBjb21wdXRlZDogdHJ1ZSwgb3B0aW9uYWw6IGZhbHNlLCByZXF1aXJlZDogZmFsc2VcbiAgcHVibGljIGdldCBmaWx0ZXJPcGVyYXRpb24oKSB7XG4gICAgcmV0dXJuIHRoaXMuaW50ZXJwb2xhdGlvbkZvckF0dHJpYnV0ZSgnZmlsdGVyX29wZXJhdGlvbicpIGFzIGFueTtcbiAgfVxuXG4gIC8vIHByb2plY3Rfb3BlcmF0aW9uIC0gY29tcHV0ZWQ6IHRydWUsIG9wdGlvbmFsOiBmYWxzZSwgcmVxdWlyZWQ6IGZhbHNlXG4gIHB1YmxpYyBnZXQgcHJvamVjdE9wZXJhdGlvbigpIHtcbiAgICByZXR1cm4gdGhpcy5pbnRlcnBvbGF0aW9uRm9yQXR0cmlidXRlKCdwcm9qZWN0X29wZXJhdGlvbicpIGFzIGFueTtcbiAgfVxuXG4gIC8vIHJlbmFtZV9jb2x1bW5fb3BlcmF0aW9uIC0gY29tcHV0ZWQ6IHRydWUsIG9wdGlvbmFsOiBmYWxzZSwgcmVxdWlyZWQ6IGZhbHNlXG4gIHB1YmxpYyBnZXQgcmVuYW1lQ29sdW1uT3BlcmF0aW9uKCkge1xuICAgIHJldHVybiB0aGlzLmludGVycG9sYXRpb25Gb3JBdHRyaWJ1dGUoJ3JlbmFtZV9jb2x1bW5fb3BlcmF0aW9uJykgYXMgYW55O1xuICB9XG5cbiAgLy8gdGFnX2NvbHVtbl9vcGVyYXRpb24gLSBjb21wdXRlZDogdHJ1ZSwgb3B0aW9uYWw6IGZhbHNlLCByZXF1aXJlZDogZmFsc2VcbiAgcHVibGljIGdldCB0YWdDb2x1bW5PcGVyYXRpb24oKSB7XG4gICAgcmV0dXJuIHRoaXMuaW50ZXJwb2xhdGlvbkZvckF0dHJpYnV0ZSgndGFnX2NvbHVtbl9vcGVyYXRpb24nKSBhcyBhbnk7XG4gIH1cbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGRhdGFBd3NjY1F1aWNrc2lnaHREYXRhU2V0TG9naWNhbFRhYmxlTWFwRGF0YVRyYW5zZm9ybXNUb1RlcnJhZm9ybShzdHJ1Y3Q/OiBEYXRhQXdzY2NRdWlja3NpZ2h0RGF0YVNldExvZ2ljYWxUYWJsZU1hcERhdGFUcmFuc2Zvcm1zKTogYW55IHtcbiAgaWYgKCFjZGt0Zi5jYW5JbnNwZWN0KHN0cnVjdCkpIHsgcmV0dXJuIHN0cnVjdDsgfVxuICByZXR1cm4ge1xuICAgIGNhc3RfY29sdW1uX3R5cGVfb3BlcmF0aW9uOiBkYXRhQXdzY2NRdWlja3NpZ2h0RGF0YVNldExvZ2ljYWxUYWJsZU1hcERhdGFUcmFuc2Zvcm1zQ2FzdENvbHVtblR5cGVPcGVyYXRpb25Ub1RlcnJhZm9ybShzdHJ1Y3QhLmNhc3RDb2x1bW5UeXBlT3BlcmF0aW9uKSxcbiAgICBjcmVhdGVfY29sdW1uc19vcGVyYXRpb246IGRhdGFBd3NjY1F1aWNrc2lnaHREYXRhU2V0TG9naWNhbFRhYmxlTWFwRGF0YVRyYW5zZm9ybXNDcmVhdGVDb2x1bW5zT3BlcmF0aW9uVG9UZXJyYWZvcm0oc3RydWN0IS5jcmVhdGVDb2x1bW5zT3BlcmF0aW9uKSxcbiAgICBmaWx0ZXJfb3BlcmF0aW9uOiBkYXRhQXdzY2NRdWlja3NpZ2h0RGF0YVNldExvZ2ljYWxUYWJsZU1hcERhdGFUcmFuc2Zvcm1zRmlsdGVyT3BlcmF0aW9uVG9UZXJyYWZvcm0oc3RydWN0IS5maWx0ZXJPcGVyYXRpb24pLFxuICAgIHByb2plY3Rfb3BlcmF0aW9uOiBkYXRhQXdzY2NRdWlja3NpZ2h0RGF0YVNldExvZ2ljYWxUYWJsZU1hcERhdGFUcmFuc2Zvcm1zUHJvamVjdE9wZXJhdGlvblRvVGVycmFmb3JtKHN0cnVjdCEucHJvamVjdE9wZXJhdGlvbiksXG4gICAgcmVuYW1lX2NvbHVtbl9vcGVyYXRpb246IGRhdGFBd3NjY1F1aWNrc2lnaHREYXRhU2V0TG9naWNhbFRhYmxlTWFwRGF0YVRyYW5zZm9ybXNSZW5hbWVDb2x1bW5PcGVyYXRpb25Ub1RlcnJhZm9ybShzdHJ1Y3QhLnJlbmFtZUNvbHVtbk9wZXJhdGlvbiksXG4gICAgdGFnX2NvbHVtbl9vcGVyYXRpb246IGRhdGFBd3NjY1F1aWNrc2lnaHREYXRhU2V0TG9naWNhbFRhYmxlTWFwRGF0YVRyYW5zZm9ybXNUYWdDb2x1bW5PcGVyYXRpb25Ub1RlcnJhZm9ybShzdHJ1Y3QhLnRhZ0NvbHVtbk9wZXJhdGlvbiksXG4gIH1cbn1cblxuZXhwb3J0IGNsYXNzIERhdGFBd3NjY1F1aWNrc2lnaHREYXRhU2V0TG9naWNhbFRhYmxlTWFwU291cmNlSm9pbkluc3RydWN0aW9uTGVmdEpvaW5LZXlQcm9wZXJ0aWVzIGV4dGVuZHMgY2RrdGYuQ29tcGxleENvbXB1dGVkTGlzdCB7XG5cbiAgLy8gdW5pcXVlX2tleSAtIGNvbXB1dGVkOiB0cnVlLCBvcHRpb25hbDogZmFsc2UsIHJlcXVpcmVkOiBmYWxzZVxuICBwdWJsaWMgZ2V0IHVuaXF1ZUtleSgpIHtcbiAgICByZXR1cm4gdGhpcy5nZXRCb29sZWFuQXR0cmlidXRlKCd1bmlxdWVfa2V5Jyk7XG4gIH1cbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGRhdGFBd3NjY1F1aWNrc2lnaHREYXRhU2V0TG9naWNhbFRhYmxlTWFwU291cmNlSm9pbkluc3RydWN0aW9uTGVmdEpvaW5LZXlQcm9wZXJ0aWVzVG9UZXJyYWZvcm0oc3RydWN0PzogRGF0YUF3c2NjUXVpY2tzaWdodERhdGFTZXRMb2dpY2FsVGFibGVNYXBTb3VyY2VKb2luSW5zdHJ1Y3Rpb25MZWZ0Sm9pbktleVByb3BlcnRpZXMpOiBhbnkge1xuICBpZiAoIWNka3RmLmNhbkluc3BlY3Qoc3RydWN0KSkgeyByZXR1cm4gc3RydWN0OyB9XG4gIHJldHVybiB7XG4gICAgdW5pcXVlX2tleTogY2RrdGYuYm9vbGVhblRvVGVycmFmb3JtKHN0cnVjdCEudW5pcXVlS2V5KSxcbiAgfVxufVxuXG5leHBvcnQgY2xhc3MgRGF0YUF3c2NjUXVpY2tzaWdodERhdGFTZXRMb2dpY2FsVGFibGVNYXBTb3VyY2VKb2luSW5zdHJ1Y3Rpb25SaWdodEpvaW5LZXlQcm9wZXJ0aWVzIGV4dGVuZHMgY2RrdGYuQ29tcGxleENvbXB1dGVkTGlzdCB7XG5cbiAgLy8gdW5pcXVlX2tleSAtIGNvbXB1dGVkOiB0cnVlLCBvcHRpb25hbDogZmFsc2UsIHJlcXVpcmVkOiBmYWxzZVxuICBwdWJsaWMgZ2V0IHVuaXF1ZUtleSgpIHtcbiAgICByZXR1cm4gdGhpcy5nZXRCb29sZWFuQXR0cmlidXRlKCd1bmlxdWVfa2V5Jyk7XG4gIH1cbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGRhdGFBd3NjY1F1aWNrc2lnaHREYXRhU2V0TG9naWNhbFRhYmxlTWFwU291cmNlSm9pbkluc3RydWN0aW9uUmlnaHRKb2luS2V5UHJvcGVydGllc1RvVGVycmFmb3JtKHN0cnVjdD86IERhdGFBd3NjY1F1aWNrc2lnaHREYXRhU2V0TG9naWNhbFRhYmxlTWFwU291cmNlSm9pbkluc3RydWN0aW9uUmlnaHRKb2luS2V5UHJvcGVydGllcyk6IGFueSB7XG4gIGlmICghY2RrdGYuY2FuSW5zcGVjdChzdHJ1Y3QpKSB7IHJldHVybiBzdHJ1Y3Q7IH1cbiAgcmV0dXJuIHtcbiAgICB1bmlxdWVfa2V5OiBjZGt0Zi5ib29sZWFuVG9UZXJyYWZvcm0oc3RydWN0IS51bmlxdWVLZXkpLFxuICB9XG59XG5cbmV4cG9ydCBjbGFzcyBEYXRhQXdzY2NRdWlja3NpZ2h0RGF0YVNldExvZ2ljYWxUYWJsZU1hcFNvdXJjZUpvaW5JbnN0cnVjdGlvbiBleHRlbmRzIGNka3RmLkNvbXBsZXhDb21wdXRlZExpc3Qge1xuXG4gIC8vIGxlZnRfam9pbl9rZXlfcHJvcGVydGllcyAtIGNvbXB1dGVkOiB0cnVlLCBvcHRpb25hbDogZmFsc2UsIHJlcXVpcmVkOiBmYWxzZVxuICBwdWJsaWMgZ2V0IGxlZnRKb2luS2V5UHJvcGVydGllcygpIHtcbiAgICByZXR1cm4gdGhpcy5pbnRlcnBvbGF0aW9uRm9yQXR0cmlidXRlKCdsZWZ0X2pvaW5fa2V5X3Byb3BlcnRpZXMnKSBhcyBhbnk7XG4gIH1cblxuICAvLyBsZWZ0X29wZXJhbmQgLSBjb21wdXRlZDogdHJ1ZSwgb3B0aW9uYWw6IGZhbHNlLCByZXF1aXJlZDogZmFsc2VcbiAgcHVibGljIGdldCBsZWZ0T3BlcmFuZCgpIHtcbiAgICByZXR1cm4gdGhpcy5nZXRTdHJpbmdBdHRyaWJ1dGUoJ2xlZnRfb3BlcmFuZCcpO1xuICB9XG5cbiAgLy8gb25fY2xhdXNlIC0gY29tcHV0ZWQ6IHRydWUsIG9wdGlvbmFsOiBmYWxzZSwgcmVxdWlyZWQ6IGZhbHNlXG4gIHB1YmxpYyBnZXQgb25DbGF1c2UoKSB7XG4gICAgcmV0dXJuIHRoaXMuZ2V0U3RyaW5nQXR0cmlidXRlKCdvbl9jbGF1c2UnKTtcbiAgfVxuXG4gIC8vIHJpZ2h0X2pvaW5fa2V5X3Byb3BlcnRpZXMgLSBjb21wdXRlZDogdHJ1ZSwgb3B0aW9uYWw6IGZhbHNlLCByZXF1aXJlZDogZmFsc2VcbiAgcHVibGljIGdldCByaWdodEpvaW5LZXlQcm9wZXJ0aWVzKCkge1xuICAgIHJldHVybiB0aGlzLmludGVycG9sYXRpb25Gb3JBdHRyaWJ1dGUoJ3JpZ2h0X2pvaW5fa2V5X3Byb3BlcnRpZXMnKSBhcyBhbnk7XG4gIH1cblxuICAvLyByaWdodF9vcGVyYW5kIC0gY29tcHV0ZWQ6IHRydWUsIG9wdGlvbmFsOiBmYWxzZSwgcmVxdWlyZWQ6IGZhbHNlXG4gIHB1YmxpYyBnZXQgcmlnaHRPcGVyYW5kKCkge1xuICAgIHJldHVybiB0aGlzLmdldFN0cmluZ0F0dHJpYnV0ZSgncmlnaHRfb3BlcmFuZCcpO1xuICB9XG5cbiAgLy8gdHlwZSAtIGNvbXB1dGVkOiB0cnVlLCBvcHRpb25hbDogZmFsc2UsIHJlcXVpcmVkOiBmYWxzZVxuICBwdWJsaWMgZ2V0IHR5cGUoKSB7XG4gICAgcmV0dXJuIHRoaXMuZ2V0U3RyaW5nQXR0cmlidXRlKCd0eXBlJyk7XG4gIH1cbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGRhdGFBd3NjY1F1aWNrc2lnaHREYXRhU2V0TG9naWNhbFRhYmxlTWFwU291cmNlSm9pbkluc3RydWN0aW9uVG9UZXJyYWZvcm0oc3RydWN0PzogRGF0YUF3c2NjUXVpY2tzaWdodERhdGFTZXRMb2dpY2FsVGFibGVNYXBTb3VyY2VKb2luSW5zdHJ1Y3Rpb24pOiBhbnkge1xuICBpZiAoIWNka3RmLmNhbkluc3BlY3Qoc3RydWN0KSkgeyByZXR1cm4gc3RydWN0OyB9XG4gIHJldHVybiB7XG4gICAgbGVmdF9qb2luX2tleV9wcm9wZXJ0aWVzOiBkYXRhQXdzY2NRdWlja3NpZ2h0RGF0YVNldExvZ2ljYWxUYWJsZU1hcFNvdXJjZUpvaW5JbnN0cnVjdGlvbkxlZnRKb2luS2V5UHJvcGVydGllc1RvVGVycmFmb3JtKHN0cnVjdCEubGVmdEpvaW5LZXlQcm9wZXJ0aWVzKSxcbiAgICBsZWZ0X29wZXJhbmQ6IGNka3RmLnN0cmluZ1RvVGVycmFmb3JtKHN0cnVjdCEubGVmdE9wZXJhbmQpLFxuICAgIG9uX2NsYXVzZTogY2RrdGYuc3RyaW5nVG9UZXJyYWZvcm0oc3RydWN0IS5vbkNsYXVzZSksXG4gICAgcmlnaHRfam9pbl9rZXlfcHJvcGVydGllczogZGF0YUF3c2NjUXVpY2tzaWdodERhdGFTZXRMb2dpY2FsVGFibGVNYXBTb3VyY2VKb2luSW5zdHJ1Y3Rpb25SaWdodEpvaW5LZXlQcm9wZXJ0aWVzVG9UZXJyYWZvcm0oc3RydWN0IS5yaWdodEpvaW5LZXlQcm9wZXJ0aWVzKSxcbiAgICByaWdodF9vcGVyYW5kOiBjZGt0Zi5zdHJpbmdUb1RlcnJhZm9ybShzdHJ1Y3QhLnJpZ2h0T3BlcmFuZCksXG4gICAgdHlwZTogY2RrdGYuc3RyaW5nVG9UZXJyYWZvcm0oc3RydWN0IS50eXBlKSxcbiAgfVxufVxuXG5leHBvcnQgY2xhc3MgRGF0YUF3c2NjUXVpY2tzaWdodERhdGFTZXRMb2dpY2FsVGFibGVNYXBTb3VyY2UgZXh0ZW5kcyBjZGt0Zi5Db21wbGV4Q29tcHV0ZWRMaXN0IHtcblxuICAvLyBqb2luX2luc3RydWN0aW9uIC0gY29tcHV0ZWQ6IHRydWUsIG9wdGlvbmFsOiBmYWxzZSwgcmVxdWlyZWQ6IGZhbHNlXG4gIHB1YmxpYyBnZXQgam9pbkluc3RydWN0aW9uKCkge1xuICAgIHJldHVybiB0aGlzLmludGVycG9sYXRpb25Gb3JBdHRyaWJ1dGUoJ2pvaW5faW5zdHJ1Y3Rpb24nKSBhcyBhbnk7XG4gIH1cblxuICAvLyBwaHlzaWNhbF90YWJsZV9pZCAtIGNvbXB1dGVkOiB0cnVlLCBvcHRpb25hbDogZmFsc2UsIHJlcXVpcmVkOiBmYWxzZVxuICBwdWJsaWMgZ2V0IHBoeXNpY2FsVGFibGVJZCgpIHtcbiAgICByZXR1cm4gdGhpcy5nZXRTdHJpbmdBdHRyaWJ1dGUoJ3BoeXNpY2FsX3RhYmxlX2lkJyk7XG4gIH1cbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGRhdGFBd3NjY1F1aWNrc2lnaHREYXRhU2V0TG9naWNhbFRhYmxlTWFwU291cmNlVG9UZXJyYWZvcm0oc3RydWN0PzogRGF0YUF3c2NjUXVpY2tzaWdodERhdGFTZXRMb2dpY2FsVGFibGVNYXBTb3VyY2UpOiBhbnkge1xuICBpZiAoIWNka3RmLmNhbkluc3BlY3Qoc3RydWN0KSkgeyByZXR1cm4gc3RydWN0OyB9XG4gIHJldHVybiB7XG4gICAgam9pbl9pbnN0cnVjdGlvbjogZGF0YUF3c2NjUXVpY2tzaWdodERhdGFTZXRMb2dpY2FsVGFibGVNYXBTb3VyY2VKb2luSW5zdHJ1Y3Rpb25Ub1RlcnJhZm9ybShzdHJ1Y3QhLmpvaW5JbnN0cnVjdGlvbiksXG4gICAgcGh5c2ljYWxfdGFibGVfaWQ6IGNka3RmLnN0cmluZ1RvVGVycmFmb3JtKHN0cnVjdCEucGh5c2ljYWxUYWJsZUlkKSxcbiAgfVxufVxuXG5leHBvcnQgY2xhc3MgRGF0YUF3c2NjUXVpY2tzaWdodERhdGFTZXRMb2dpY2FsVGFibGVNYXAgZXh0ZW5kcyBjZGt0Zi5Db21wbGV4Q29tcHV0ZWRMaXN0IHtcblxuICAvLyBhbGlhcyAtIGNvbXB1dGVkOiB0cnVlLCBvcHRpb25hbDogZmFsc2UsIHJlcXVpcmVkOiBmYWxzZVxuICBwdWJsaWMgZ2V0IGFsaWFzKCkge1xuICAgIHJldHVybiB0aGlzLmdldFN0cmluZ0F0dHJpYnV0ZSgnYWxpYXMnKTtcbiAgfVxuXG4gIC8vIGRhdGFfdHJhbnNmb3JtcyAtIGNvbXB1dGVkOiB0cnVlLCBvcHRpb25hbDogZmFsc2UsIHJlcXVpcmVkOiBmYWxzZVxuICBwdWJsaWMgZ2V0IGRhdGFUcmFuc2Zvcm1zKCkge1xuICAgIHJldHVybiB0aGlzLmludGVycG9sYXRpb25Gb3JBdHRyaWJ1dGUoJ2RhdGFfdHJhbnNmb3JtcycpIGFzIGFueTtcbiAgfVxuXG4gIC8vIHNvdXJjZSAtIGNvbXB1dGVkOiB0cnVlLCBvcHRpb25hbDogZmFsc2UsIHJlcXVpcmVkOiBmYWxzZVxuICBwdWJsaWMgZ2V0IHNvdXJjZSgpIHtcbiAgICByZXR1cm4gdGhpcy5pbnRlcnBvbGF0aW9uRm9yQXR0cmlidXRlKCdzb3VyY2UnKSBhcyBhbnk7XG4gIH1cbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGRhdGFBd3NjY1F1aWNrc2lnaHREYXRhU2V0TG9naWNhbFRhYmxlTWFwVG9UZXJyYWZvcm0oc3RydWN0PzogRGF0YUF3c2NjUXVpY2tzaWdodERhdGFTZXRMb2dpY2FsVGFibGVNYXApOiBhbnkge1xuICBpZiAoIWNka3RmLmNhbkluc3BlY3Qoc3RydWN0KSkgeyByZXR1cm4gc3RydWN0OyB9XG4gIHJldHVybiB7XG4gICAgYWxpYXM6IGNka3RmLnN0cmluZ1RvVGVycmFmb3JtKHN0cnVjdCEuYWxpYXMpLFxuICAgIGRhdGFfdHJhbnNmb3JtczogY2RrdGYubGlzdE1hcHBlcihkYXRhQXdzY2NRdWlja3NpZ2h0RGF0YVNldExvZ2ljYWxUYWJsZU1hcERhdGFUcmFuc2Zvcm1zVG9UZXJyYWZvcm0pKHN0cnVjdCEuZGF0YVRyYW5zZm9ybXMpLFxuICAgIHNvdXJjZTogZGF0YUF3c2NjUXVpY2tzaWdodERhdGFTZXRMb2dpY2FsVGFibGVNYXBTb3VyY2VUb1RlcnJhZm9ybShzdHJ1Y3QhLnNvdXJjZSksXG4gIH1cbn1cblxuZXhwb3J0IGNsYXNzIERhdGFBd3NjY1F1aWNrc2lnaHREYXRhU2V0T3V0cHV0Q29sdW1ucyBleHRlbmRzIGNka3RmLkNvbXBsZXhDb21wdXRlZExpc3Qge1xuXG4gIC8vIGRlc2NyaXB0aW9uIC0gY29tcHV0ZWQ6IHRydWUsIG9wdGlvbmFsOiBmYWxzZSwgcmVxdWlyZWQ6IGZhbHNlXG4gIHB1YmxpYyBnZXQgZGVzY3JpcHRpb24oKSB7XG4gICAgcmV0dXJuIHRoaXMuZ2V0U3RyaW5nQXR0cmlidXRlKCdkZXNjcmlwdGlvbicpO1xuICB9XG5cbiAgLy8gbmFtZSAtIGNvbXB1dGVkOiB0cnVlLCBvcHRpb25hbDogZmFsc2UsIHJlcXVpcmVkOiBmYWxzZVxuICBwdWJsaWMgZ2V0IG5hbWUoKSB7XG4gICAgcmV0dXJuIHRoaXMuZ2V0U3RyaW5nQXR0cmlidXRlKCduYW1lJyk7XG4gIH1cblxuICAvLyB0eXBlIC0gY29tcHV0ZWQ6IHRydWUsIG9wdGlvbmFsOiBmYWxzZSwgcmVxdWlyZWQ6IGZhbHNlXG4gIHB1YmxpYyBnZXQgdHlwZSgpIHtcbiAgICByZXR1cm4gdGhpcy5nZXRTdHJpbmdBdHRyaWJ1dGUoJ3R5cGUnKTtcbiAgfVxufVxuXG5leHBvcnQgZnVuY3Rpb24gZGF0YUF3c2NjUXVpY2tzaWdodERhdGFTZXRPdXRwdXRDb2x1bW5zVG9UZXJyYWZvcm0oc3RydWN0PzogRGF0YUF3c2NjUXVpY2tzaWdodERhdGFTZXRPdXRwdXRDb2x1bW5zKTogYW55IHtcbiAgaWYgKCFjZGt0Zi5jYW5JbnNwZWN0KHN0cnVjdCkpIHsgcmV0dXJuIHN0cnVjdDsgfVxuICByZXR1cm4ge1xuICAgIGRlc2NyaXB0aW9uOiBjZGt0Zi5zdHJpbmdUb1RlcnJhZm9ybShzdHJ1Y3QhLmRlc2NyaXB0aW9uKSxcbiAgICBuYW1lOiBjZGt0Zi5zdHJpbmdUb1RlcnJhZm9ybShzdHJ1Y3QhLm5hbWUpLFxuICAgIHR5cGU6IGNka3RmLnN0cmluZ1RvVGVycmFmb3JtKHN0cnVjdCEudHlwZSksXG4gIH1cbn1cblxuZXhwb3J0IGNsYXNzIERhdGFBd3NjY1F1aWNrc2lnaHREYXRhU2V0UGVybWlzc2lvbnMgZXh0ZW5kcyBjZGt0Zi5Db21wbGV4Q29tcHV0ZWRMaXN0IHtcblxuICAvLyBhY3Rpb25zIC0gY29tcHV0ZWQ6IHRydWUsIG9wdGlvbmFsOiBmYWxzZSwgcmVxdWlyZWQ6IGZhbHNlXG4gIHB1YmxpYyBnZXQgYWN0aW9ucygpIHtcbiAgICByZXR1cm4gdGhpcy5nZXRMaXN0QXR0cmlidXRlKCdhY3Rpb25zJyk7XG4gIH1cblxuICAvLyBwcmluY2lwYWwgLSBjb21wdXRlZDogdHJ1ZSwgb3B0aW9uYWw6IGZhbHNlLCByZXF1aXJlZDogZmFsc2VcbiAgcHVibGljIGdldCBwcmluY2lwYWwoKSB7XG4gICAgcmV0dXJuIHRoaXMuZ2V0U3RyaW5nQXR0cmlidXRlKCdwcmluY2lwYWwnKTtcbiAgfVxufVxuXG5leHBvcnQgZnVuY3Rpb24gZGF0YUF3c2NjUXVpY2tzaWdodERhdGFTZXRQZXJtaXNzaW9uc1RvVGVycmFmb3JtKHN0cnVjdD86IERhdGFBd3NjY1F1aWNrc2lnaHREYXRhU2V0UGVybWlzc2lvbnMpOiBhbnkge1xuICBpZiAoIWNka3RmLmNhbkluc3BlY3Qoc3RydWN0KSkgeyByZXR1cm4gc3RydWN0OyB9XG4gIHJldHVybiB7XG4gICAgYWN0aW9uczogY2RrdGYubGlzdE1hcHBlcihjZGt0Zi5zdHJpbmdUb1RlcnJhZm9ybSkoc3RydWN0IS5hY3Rpb25zKSxcbiAgICBwcmluY2lwYWw6IGNka3RmLnN0cmluZ1RvVGVycmFmb3JtKHN0cnVjdCEucHJpbmNpcGFsKSxcbiAgfVxufVxuXG5leHBvcnQgY2xhc3MgRGF0YUF3c2NjUXVpY2tzaWdodERhdGFTZXRQaHlzaWNhbFRhYmxlTWFwQ3VzdG9tU3FsQ29sdW1ucyBleHRlbmRzIGNka3RmLkNvbXBsZXhDb21wdXRlZExpc3Qge1xuXG4gIC8vIG5hbWUgLSBjb21wdXRlZDogdHJ1ZSwgb3B0aW9uYWw6IGZhbHNlLCByZXF1aXJlZDogZmFsc2VcbiAgcHVibGljIGdldCBuYW1lKCkge1xuICAgIHJldHVybiB0aGlzLmdldFN0cmluZ0F0dHJpYnV0ZSgnbmFtZScpO1xuICB9XG5cbiAgLy8gdHlwZSAtIGNvbXB1dGVkOiB0cnVlLCBvcHRpb25hbDogZmFsc2UsIHJlcXVpcmVkOiBmYWxzZVxuICBwdWJsaWMgZ2V0IHR5cGUoKSB7XG4gICAgcmV0dXJuIHRoaXMuZ2V0U3RyaW5nQXR0cmlidXRlKCd0eXBlJyk7XG4gIH1cbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGRhdGFBd3NjY1F1aWNrc2lnaHREYXRhU2V0UGh5c2ljYWxUYWJsZU1hcEN1c3RvbVNxbENvbHVtbnNUb1RlcnJhZm9ybShzdHJ1Y3Q/OiBEYXRhQXdzY2NRdWlja3NpZ2h0RGF0YVNldFBoeXNpY2FsVGFibGVNYXBDdXN0b21TcWxDb2x1bW5zKTogYW55IHtcbiAgaWYgKCFjZGt0Zi5jYW5JbnNwZWN0KHN0cnVjdCkpIHsgcmV0dXJuIHN0cnVjdDsgfVxuICByZXR1cm4ge1xuICAgIG5hbWU6IGNka3RmLnN0cmluZ1RvVGVycmFmb3JtKHN0cnVjdCEubmFtZSksXG4gICAgdHlwZTogY2RrdGYuc3RyaW5nVG9UZXJyYWZvcm0oc3RydWN0IS50eXBlKSxcbiAgfVxufVxuXG5leHBvcnQgY2xhc3MgRGF0YUF3c2NjUXVpY2tzaWdodERhdGFTZXRQaHlzaWNhbFRhYmxlTWFwQ3VzdG9tU3FsIGV4dGVuZHMgY2RrdGYuQ29tcGxleENvbXB1dGVkTGlzdCB7XG5cbiAgLy8gY29sdW1ucyAtIGNvbXB1dGVkOiB0cnVlLCBvcHRpb25hbDogZmFsc2UsIHJlcXVpcmVkOiBmYWxzZVxuICBwdWJsaWMgZ2V0IGNvbHVtbnMoKSB7XG4gICAgcmV0dXJuIHRoaXMuaW50ZXJwb2xhdGlvbkZvckF0dHJpYnV0ZSgnY29sdW1ucycpIGFzIGFueTtcbiAgfVxuXG4gIC8vIGRhdGFfc291cmNlX2FybiAtIGNvbXB1dGVkOiB0cnVlLCBvcHRpb25hbDogZmFsc2UsIHJlcXVpcmVkOiBmYWxzZVxuICBwdWJsaWMgZ2V0IGRhdGFTb3VyY2VBcm4oKSB7XG4gICAgcmV0dXJuIHRoaXMuZ2V0U3RyaW5nQXR0cmlidXRlKCdkYXRhX3NvdXJjZV9hcm4nKTtcbiAgfVxuXG4gIC8vIG5hbWUgLSBjb21wdXRlZDogdHJ1ZSwgb3B0aW9uYWw6IGZhbHNlLCByZXF1aXJlZDogZmFsc2VcbiAgcHVibGljIGdldCBuYW1lKCkge1xuICAgIHJldHVybiB0aGlzLmdldFN0cmluZ0F0dHJpYnV0ZSgnbmFtZScpO1xuICB9XG5cbiAgLy8gc3FsX3F1ZXJ5IC0gY29tcHV0ZWQ6IHRydWUsIG9wdGlvbmFsOiBmYWxzZSwgcmVxdWlyZWQ6IGZhbHNlXG4gIHB1YmxpYyBnZXQgc3FsUXVlcnkoKSB7XG4gICAgcmV0dXJuIHRoaXMuZ2V0U3RyaW5nQXR0cmlidXRlKCdzcWxfcXVlcnknKTtcbiAgfVxufVxuXG5leHBvcnQgZnVuY3Rpb24gZGF0YUF3c2NjUXVpY2tzaWdodERhdGFTZXRQaHlzaWNhbFRhYmxlTWFwQ3VzdG9tU3FsVG9UZXJyYWZvcm0oc3RydWN0PzogRGF0YUF3c2NjUXVpY2tzaWdodERhdGFTZXRQaHlzaWNhbFRhYmxlTWFwQ3VzdG9tU3FsKTogYW55IHtcbiAgaWYgKCFjZGt0Zi5jYW5JbnNwZWN0KHN0cnVjdCkpIHsgcmV0dXJuIHN0cnVjdDsgfVxuICByZXR1cm4ge1xuICAgIGNvbHVtbnM6IGNka3RmLmxpc3RNYXBwZXIoZGF0YUF3c2NjUXVpY2tzaWdodERhdGFTZXRQaHlzaWNhbFRhYmxlTWFwQ3VzdG9tU3FsQ29sdW1uc1RvVGVycmFmb3JtKShzdHJ1Y3QhLmNvbHVtbnMpLFxuICAgIGRhdGFfc291cmNlX2FybjogY2RrdGYuc3RyaW5nVG9UZXJyYWZvcm0oc3RydWN0IS5kYXRhU291cmNlQXJuKSxcbiAgICBuYW1lOiBjZGt0Zi5zdHJpbmdUb1RlcnJhZm9ybShzdHJ1Y3QhLm5hbWUpLFxuICAgIHNxbF9xdWVyeTogY2RrdGYuc3RyaW5nVG9UZXJyYWZvcm0oc3RydWN0IS5zcWxRdWVyeSksXG4gIH1cbn1cblxuZXhwb3J0IGNsYXNzIERhdGFBd3NjY1F1aWNrc2lnaHREYXRhU2V0UGh5c2ljYWxUYWJsZU1hcFJlbGF0aW9uYWxUYWJsZUlucHV0Q29sdW1ucyBleHRlbmRzIGNka3RmLkNvbXBsZXhDb21wdXRlZExpc3Qge1xuXG4gIC8vIG5hbWUgLSBjb21wdXRlZDogdHJ1ZSwgb3B0aW9uYWw6IGZhbHNlLCByZXF1aXJlZDogZmFsc2VcbiAgcHVibGljIGdldCBuYW1lKCkge1xuICAgIHJldHVybiB0aGlzLmdldFN0cmluZ0F0dHJpYnV0ZSgnbmFtZScpO1xuICB9XG5cbiAgLy8gdHlwZSAtIGNvbXB1dGVkOiB0cnVlLCBvcHRpb25hbDogZmFsc2UsIHJlcXVpcmVkOiBmYWxzZVxuICBwdWJsaWMgZ2V0IHR5cGUoKSB7XG4gICAgcmV0dXJuIHRoaXMuZ2V0U3RyaW5nQXR0cmlidXRlKCd0eXBlJyk7XG4gIH1cbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGRhdGFBd3NjY1F1aWNrc2lnaHREYXRhU2V0UGh5c2ljYWxUYWJsZU1hcFJlbGF0aW9uYWxUYWJsZUlucHV0Q29sdW1uc1RvVGVycmFmb3JtKHN0cnVjdD86IERhdGFBd3NjY1F1aWNrc2lnaHREYXRhU2V0UGh5c2ljYWxUYWJsZU1hcFJlbGF0aW9uYWxUYWJsZUlucHV0Q29sdW1ucyk6IGFueSB7XG4gIGlmICghY2RrdGYuY2FuSW5zcGVjdChzdHJ1Y3QpKSB7IHJldHVybiBzdHJ1Y3Q7IH1cbiAgcmV0dXJuIHtcbiAgICBuYW1lOiBjZGt0Zi5zdHJpbmdUb1RlcnJhZm9ybShzdHJ1Y3QhLm5hbWUpLFxuICAgIHR5cGU6IGNka3RmLnN0cmluZ1RvVGVycmFmb3JtKHN0cnVjdCEudHlwZSksXG4gIH1cbn1cblxuZXhwb3J0IGNsYXNzIERhdGFBd3NjY1F1aWNrc2lnaHREYXRhU2V0UGh5c2ljYWxUYWJsZU1hcFJlbGF0aW9uYWxUYWJsZSBleHRlbmRzIGNka3RmLkNvbXBsZXhDb21wdXRlZExpc3Qge1xuXG4gIC8vIGNhdGFsb2cgLSBjb21wdXRlZDogdHJ1ZSwgb3B0aW9uYWw6IGZhbHNlLCByZXF1aXJlZDogZmFsc2VcbiAgcHVibGljIGdldCBjYXRhbG9nKCkge1xuICAgIHJldHVybiB0aGlzLmdldFN0cmluZ0F0dHJpYnV0ZSgnY2F0YWxvZycpO1xuICB9XG5cbiAgLy8gZGF0YV9zb3VyY2VfYXJuIC0gY29tcHV0ZWQ6IHRydWUsIG9wdGlvbmFsOiBmYWxzZSwgcmVxdWlyZWQ6IGZhbHNlXG4gIHB1YmxpYyBnZXQgZGF0YVNvdXJjZUFybigpIHtcbiAgICByZXR1cm4gdGhpcy5nZXRTdHJpbmdBdHRyaWJ1dGUoJ2RhdGFfc291cmNlX2FybicpO1xuICB9XG5cbiAgLy8gaW5wdXRfY29sdW1ucyAtIGNvbXB1dGVkOiB0cnVlLCBvcHRpb25hbDogZmFsc2UsIHJlcXVpcmVkOiBmYWxzZVxuICBwdWJsaWMgZ2V0IGlucHV0Q29sdW1ucygpIHtcbiAgICByZXR1cm4gdGhpcy5pbnRlcnBvbGF0aW9uRm9yQXR0cmlidXRlKCdpbnB1dF9jb2x1bW5zJykgYXMgYW55O1xuICB9XG5cbiAgLy8gbmFtZSAtIGNvbXB1dGVkOiB0cnVlLCBvcHRpb25hbDogZmFsc2UsIHJlcXVpcmVkOiBmYWxzZVxuICBwdWJsaWMgZ2V0IG5hbWUoKSB7XG4gICAgcmV0dXJuIHRoaXMuZ2V0U3RyaW5nQXR0cmlidXRlKCduYW1lJyk7XG4gIH1cblxuICAvLyBzY2hlbWEgLSBjb21wdXRlZDogdHJ1ZSwgb3B0aW9uYWw6IGZhbHNlLCByZXF1aXJlZDogZmFsc2VcbiAgcHVibGljIGdldCBzY2hlbWEoKSB7XG4gICAgcmV0dXJuIHRoaXMuZ2V0U3RyaW5nQXR0cmlidXRlKCdzY2hlbWEnKTtcbiAgfVxufVxuXG5leHBvcnQgZnVuY3Rpb24gZGF0YUF3c2NjUXVpY2tzaWdodERhdGFTZXRQaHlzaWNhbFRhYmxlTWFwUmVsYXRpb25hbFRhYmxlVG9UZXJyYWZvcm0oc3RydWN0PzogRGF0YUF3c2NjUXVpY2tzaWdodERhdGFTZXRQaHlzaWNhbFRhYmxlTWFwUmVsYXRpb25hbFRhYmxlKTogYW55IHtcbiAgaWYgKCFjZGt0Zi5jYW5JbnNwZWN0KHN0cnVjdCkpIHsgcmV0dXJuIHN0cnVjdDsgfVxuICByZXR1cm4ge1xuICAgIGNhdGFsb2c6IGNka3RmLnN0cmluZ1RvVGVycmFmb3JtKHN0cnVjdCEuY2F0YWxvZyksXG4gICAgZGF0YV9zb3VyY2VfYXJuOiBjZGt0Zi5zdHJpbmdUb1RlcnJhZm9ybShzdHJ1Y3QhLmRhdGFTb3VyY2VBcm4pLFxuICAgIGlucHV0X2NvbHVtbnM6IGNka3RmLmxpc3RNYXBwZXIoZGF0YUF3c2NjUXVpY2tzaWdodERhdGFTZXRQaHlzaWNhbFRhYmxlTWFwUmVsYXRpb25hbFRhYmxlSW5wdXRDb2x1bW5zVG9UZXJyYWZvcm0pKHN0cnVjdCEuaW5wdXRDb2x1bW5zKSxcbiAgICBuYW1lOiBjZGt0Zi5zdHJpbmdUb1RlcnJhZm9ybShzdHJ1Y3QhLm5hbWUpLFxuICAgIHNjaGVtYTogY2RrdGYuc3RyaW5nVG9UZXJyYWZvcm0oc3RydWN0IS5zY2hlbWEpLFxuICB9XG59XG5cbmV4cG9ydCBjbGFzcyBEYXRhQXdzY2NRdWlja3NpZ2h0RGF0YVNldFBoeXNpY2FsVGFibGVNYXBTM1NvdXJjZUlucHV0Q29sdW1ucyBleHRlbmRzIGNka3RmLkNvbXBsZXhDb21wdXRlZExpc3Qge1xuXG4gIC8vIG5hbWUgLSBjb21wdXRlZDogdHJ1ZSwgb3B0aW9uYWw6IGZhbHNlLCByZXF1aXJlZDogZmFsc2VcbiAgcHVibGljIGdldCBuYW1lKCkge1xuICAgIHJldHVybiB0aGlzLmdldFN0cmluZ0F0dHJpYnV0ZSgnbmFtZScpO1xuICB9XG5cbiAgLy8gdHlwZSAtIGNvbXB1dGVkOiB0cnVlLCBvcHRpb25hbDogZmFsc2UsIHJlcXVpcmVkOiBmYWxzZVxuICBwdWJsaWMgZ2V0IHR5cGUoKSB7XG4gICAgcmV0dXJuIHRoaXMuZ2V0U3RyaW5nQXR0cmlidXRlKCd0eXBlJyk7XG4gIH1cbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGRhdGFBd3NjY1F1aWNrc2lnaHREYXRhU2V0UGh5c2ljYWxUYWJsZU1hcFMzU291cmNlSW5wdXRDb2x1bW5zVG9UZXJyYWZvcm0oc3RydWN0PzogRGF0YUF3c2NjUXVpY2tzaWdodERhdGFTZXRQaHlzaWNhbFRhYmxlTWFwUzNTb3VyY2VJbnB1dENvbHVtbnMpOiBhbnkge1xuICBpZiAoIWNka3RmLmNhbkluc3BlY3Qoc3RydWN0KSkgeyByZXR1cm4gc3RydWN0OyB9XG4gIHJldHVybiB7XG4gICAgbmFtZTogY2RrdGYuc3RyaW5nVG9UZXJyYWZvcm0oc3RydWN0IS5uYW1lKSxcbiAgICB0eXBlOiBjZGt0Zi5zdHJpbmdUb1RlcnJhZm9ybShzdHJ1Y3QhLnR5cGUpLFxuICB9XG59XG5cbmV4cG9ydCBjbGFzcyBEYXRhQXdzY2NRdWlja3NpZ2h0RGF0YVNldFBoeXNpY2FsVGFibGVNYXBTM1NvdXJjZVVwbG9hZFNldHRpbmdzIGV4dGVuZHMgY2RrdGYuQ29tcGxleENvbXB1dGVkTGlzdCB7XG5cbiAgLy8gY29udGFpbnNfaGVhZGVyIC0gY29tcHV0ZWQ6IHRydWUsIG9wdGlvbmFsOiBmYWxzZSwgcmVxdWlyZWQ6IGZhbHNlXG4gIHB1YmxpYyBnZXQgY29udGFpbnNIZWFkZXIoKSB7XG4gICAgcmV0dXJuIHRoaXMuZ2V0Qm9vbGVhbkF0dHJpYnV0ZSgnY29udGFpbnNfaGVhZGVyJyk7XG4gIH1cblxuICAvLyBkZWxpbWl0ZXIgLSBjb21wdXRlZDogdHJ1ZSwgb3B0aW9uYWw6IGZhbHNlLCByZXF1aXJlZDogZmFsc2VcbiAgcHVibGljIGdldCBkZWxpbWl0ZXIoKSB7XG4gICAgcmV0dXJuIHRoaXMuZ2V0U3RyaW5nQXR0cmlidXRlKCdkZWxpbWl0ZXInKTtcbiAgfVxuXG4gIC8vIGZvcm1hdCAtIGNvbXB1dGVkOiB0cnVlLCBvcHRpb25hbDogZmFsc2UsIHJlcXVpcmVkOiBmYWxzZVxuICBwdWJsaWMgZ2V0IGZvcm1hdCgpIHtcbiAgICByZXR1cm4gdGhpcy5nZXRTdHJpbmdBdHRyaWJ1dGUoJ2Zvcm1hdCcpO1xuICB9XG5cbiAgLy8gc3RhcnRfZnJvbV9yb3cgLSBjb21wdXRlZDogdHJ1ZSwgb3B0aW9uYWw6IGZhbHNlLCByZXF1aXJlZDogZmFsc2VcbiAgcHVibGljIGdldCBzdGFydEZyb21Sb3coKSB7XG4gICAgcmV0dXJuIHRoaXMuZ2V0TnVtYmVyQXR0cmlidXRlKCdzdGFydF9mcm9tX3JvdycpO1xuICB9XG5cbiAgLy8gdGV4dF9xdWFsaWZpZXIgLSBjb21wdXRlZDogdHJ1ZSwgb3B0aW9uYWw6IGZhbHNlLCByZXF1aXJlZDogZmFsc2VcbiAgcHVibGljIGdldCB0ZXh0UXVhbGlmaWVyKCkge1xuICAgIHJldHVybiB0aGlzLmdldFN0cmluZ0F0dHJpYnV0ZSgndGV4dF9xdWFsaWZpZXInKTtcbiAgfVxufVxuXG5leHBvcnQgZnVuY3Rpb24gZGF0YUF3c2NjUXVpY2tzaWdodERhdGFTZXRQaHlzaWNhbFRhYmxlTWFwUzNTb3VyY2VVcGxvYWRTZXR0aW5nc1RvVGVycmFmb3JtKHN0cnVjdD86IERhdGFBd3NjY1F1aWNrc2lnaHREYXRhU2V0UGh5c2ljYWxUYWJsZU1hcFMzU291cmNlVXBsb2FkU2V0dGluZ3MpOiBhbnkge1xuICBpZiAoIWNka3RmLmNhbkluc3BlY3Qoc3RydWN0KSkgeyByZXR1cm4gc3RydWN0OyB9XG4gIHJldHVybiB7XG4gICAgY29udGFpbnNfaGVhZGVyOiBjZGt0Zi5ib29sZWFuVG9UZXJyYWZvcm0oc3RydWN0IS5jb250YWluc0hlYWRlciksXG4gICAgZGVsaW1pdGVyOiBjZGt0Zi5zdHJpbmdUb1RlcnJhZm9ybShzdHJ1Y3QhLmRlbGltaXRlciksXG4gICAgZm9ybWF0OiBjZGt0Zi5zdHJpbmdUb1RlcnJhZm9ybShzdHJ1Y3QhLmZvcm1hdCksXG4gICAgc3RhcnRfZnJvbV9yb3c6IGNka3RmLm51bWJlclRvVGVycmFmb3JtKHN0cnVjdCEuc3RhcnRGcm9tUm93KSxcbiAgICB0ZXh0X3F1YWxpZmllcjogY2RrdGYuc3RyaW5nVG9UZXJyYWZvcm0oc3RydWN0IS50ZXh0UXVhbGlmaWVyKSxcbiAgfVxufVxuXG5leHBvcnQgY2xhc3MgRGF0YUF3c2NjUXVpY2tzaWdodERhdGFTZXRQaHlzaWNhbFRhYmxlTWFwUzNTb3VyY2UgZXh0ZW5kcyBjZGt0Zi5Db21wbGV4Q29tcHV0ZWRMaXN0IHtcblxuICAvLyBkYXRhX3NvdXJjZV9hcm4gLSBjb21wdXRlZDogdHJ1ZSwgb3B0aW9uYWw6IGZhbHNlLCByZXF1aXJlZDogZmFsc2VcbiAgcHVibGljIGdldCBkYXRhU291cmNlQXJuKCkge1xuICAgIHJldHVybiB0aGlzLmdldFN0cmluZ0F0dHJpYnV0ZSgnZGF0YV9zb3VyY2VfYXJuJyk7XG4gIH1cblxuICAvLyBpbnB1dF9jb2x1bW5zIC0gY29tcHV0ZWQ6IHRydWUsIG9wdGlvbmFsOiBmYWxzZSwgcmVxdWlyZWQ6IGZhbHNlXG4gIHB1YmxpYyBnZXQgaW5wdXRDb2x1bW5zKCkge1xuICAgIHJldHVybiB0aGlzLmludGVycG9sYXRpb25Gb3JBdHRyaWJ1dGUoJ2lucHV0X2NvbHVtbnMnKSBhcyBhbnk7XG4gIH1cblxuICAvLyB1cGxvYWRfc2V0dGluZ3MgLSBjb21wdXRlZDogdHJ1ZSwgb3B0aW9uYWw6IGZhbHNlLCByZXF1aXJlZDogZmFsc2VcbiAgcHVibGljIGdldCB1cGxvYWRTZXR0aW5ncygpIHtcbiAgICByZXR1cm4gdGhpcy5pbnRlcnBvbGF0aW9uRm9yQXR0cmlidXRlKCd1cGxvYWRfc2V0dGluZ3MnKSBhcyBhbnk7XG4gIH1cbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGRhdGFBd3NjY1F1aWNrc2lnaHREYXRhU2V0UGh5c2ljYWxUYWJsZU1hcFMzU291cmNlVG9UZXJyYWZvcm0oc3RydWN0PzogRGF0YUF3c2NjUXVpY2tzaWdodERhdGFTZXRQaHlzaWNhbFRhYmxlTWFwUzNTb3VyY2UpOiBhbnkge1xuICBpZiAoIWNka3RmLmNhbkluc3BlY3Qoc3RydWN0KSkgeyByZXR1cm4gc3RydWN0OyB9XG4gIHJldHVybiB7XG4gICAgZGF0YV9zb3VyY2VfYXJuOiBjZGt0Zi5zdHJpbmdUb1RlcnJhZm9ybShzdHJ1Y3QhLmRhdGFTb3VyY2VBcm4pLFxuICAgIGlucHV0X2NvbHVtbnM6IGNka3RmLmxpc3RNYXBwZXIoZGF0YUF3c2NjUXVpY2tzaWdodERhdGFTZXRQaHlzaWNhbFRhYmxlTWFwUzNTb3VyY2VJbnB1dENvbHVtbnNUb1RlcnJhZm9ybSkoc3RydWN0IS5pbnB1dENvbHVtbnMpLFxuICAgIHVwbG9hZF9zZXR0aW5nczogZGF0YUF3c2NjUXVpY2tzaWdodERhdGFTZXRQaHlzaWNhbFRhYmxlTWFwUzNTb3VyY2VVcGxvYWRTZXR0aW5nc1RvVGVycmFmb3JtKHN0cnVjdCEudXBsb2FkU2V0dGluZ3MpLFxuICB9XG59XG5cbmV4cG9ydCBjbGFzcyBEYXRhQXdzY2NRdWlja3NpZ2h0RGF0YVNldFBoeXNpY2FsVGFibGVNYXAgZXh0ZW5kcyBjZGt0Zi5Db21wbGV4Q29tcHV0ZWRMaXN0IHtcblxuICAvLyBjdXN0b21fc3FsIC0gY29tcHV0ZWQ6IHRydWUsIG9wdGlvbmFsOiBmYWxzZSwgcmVxdWlyZWQ6IGZhbHNlXG4gIHB1YmxpYyBnZXQgY3VzdG9tU3FsKCkge1xuICAgIHJldHVybiB0aGlzLmludGVycG9sYXRpb25Gb3JBdHRyaWJ1dGUoJ2N1c3RvbV9zcWwnKSBhcyBhbnk7XG4gIH1cblxuICAvLyByZWxhdGlvbmFsX3RhYmxlIC0gY29tcHV0ZWQ6IHRydWUsIG9wdGlvbmFsOiBmYWxzZSwgcmVxdWlyZWQ6IGZhbHNlXG4gIHB1YmxpYyBnZXQgcmVsYXRpb25hbFRhYmxlKCkge1xuICAgIHJldHVybiB0aGlzLmludGVycG9sYXRpb25Gb3JBdHRyaWJ1dGUoJ3JlbGF0aW9uYWxfdGFibGUnKSBhcyBhbnk7XG4gIH1cblxuICAvLyBzM19zb3VyY2UgLSBjb21wdXRlZDogdHJ1ZSwgb3B0aW9uYWw6IGZhbHNlLCByZXF1aXJlZDogZmFsc2VcbiAgcHVibGljIGdldCBzM1NvdXJjZSgpIHtcbiAgICByZXR1cm4gdGhpcy5pbnRlcnBvbGF0aW9uRm9yQXR0cmlidXRlKCdzM19zb3VyY2UnKSBhcyBhbnk7XG4gIH1cbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGRhdGFBd3NjY1F1aWNrc2lnaHREYXRhU2V0UGh5c2ljYWxUYWJsZU1hcFRvVGVycmFmb3JtKHN0cnVjdD86IERhdGFBd3NjY1F1aWNrc2lnaHREYXRhU2V0UGh5c2ljYWxUYWJsZU1hcCk6IGFueSB7XG4gIGlmICghY2RrdGYuY2FuSW5zcGVjdChzdHJ1Y3QpKSB7IHJldHVybiBzdHJ1Y3Q7IH1cbiAgcmV0dXJuIHtcbiAgICBjdXN0b21fc3FsOiBkYXRhQXdzY2NRdWlja3NpZ2h0RGF0YVNldFBoeXNpY2FsVGFibGVNYXBDdXN0b21TcWxUb1RlcnJhZm9ybShzdHJ1Y3QhLmN1c3RvbVNxbCksXG4gICAgcmVsYXRpb25hbF90YWJsZTogZGF0YUF3c2NjUXVpY2tzaWdodERhdGFTZXRQaHlzaWNhbFRhYmxlTWFwUmVsYXRpb25hbFRhYmxlVG9UZXJyYWZvcm0oc3RydWN0IS5yZWxhdGlvbmFsVGFibGUpLFxuICAgIHMzX3NvdXJjZTogZGF0YUF3c2NjUXVpY2tzaWdodERhdGFTZXRQaHlzaWNhbFRhYmxlTWFwUzNTb3VyY2VUb1RlcnJhZm9ybShzdHJ1Y3QhLnMzU291cmNlKSxcbiAgfVxufVxuXG5leHBvcnQgY2xhc3MgRGF0YUF3c2NjUXVpY2tzaWdodERhdGFTZXRSb3dMZXZlbFBlcm1pc3Npb25EYXRhU2V0IGV4dGVuZHMgY2RrdGYuQ29tcGxleENvbXB1dGVkTGlzdCB7XG5cbiAgLy8gYXJuIC0gY29tcHV0ZWQ6IHRydWUsIG9wdGlvbmFsOiBmYWxzZSwgcmVxdWlyZWQ6IGZhbHNlXG4gIHB1YmxpYyBnZXQgYXJuKCkge1xuICAgIHJldHVybiB0aGlzLmdldFN0cmluZ0F0dHJpYnV0ZSgnYXJuJyk7XG4gIH1cblxuICAvLyBmb3JtYXRfdmVyc2lvbiAtIGNvbXB1dGVkOiB0cnVlLCBvcHRpb25hbDogZmFsc2UsIHJlcXVpcmVkOiBmYWxzZVxuICBwdWJsaWMgZ2V0IGZvcm1hdFZlcnNpb24oKSB7XG4gICAgcmV0dXJuIHRoaXMuZ2V0U3RyaW5nQXR0cmlidXRlKCdmb3JtYXRfdmVyc2lvbicpO1xuICB9XG5cbiAgLy8gbmFtZXNwYWNlIC0gY29tcHV0ZWQ6IHRydWUsIG9wdGlvbmFsOiBmYWxzZSwgcmVxdWlyZWQ6IGZhbHNlXG4gIHB1YmxpYyBnZXQgbmFtZXNwYWNlKCkge1xuICAgIHJldHVybiB0aGlzLmdldFN0cmluZ0F0dHJpYnV0ZSgnbmFtZXNwYWNlJyk7XG4gIH1cblxuICAvLyBwZXJtaXNzaW9uX3BvbGljeSAtIGNvbXB1dGVkOiB0cnVlLCBvcHRpb25hbDogZmFsc2UsIHJlcXVpcmVkOiBmYWxzZVxuICBwdWJsaWMgZ2V0IHBlcm1pc3Npb25Qb2xpY3koKSB7XG4gICAgcmV0dXJuIHRoaXMuZ2V0U3RyaW5nQXR0cmlidXRlKCdwZXJtaXNzaW9uX3BvbGljeScpO1xuICB9XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBkYXRhQXdzY2NRdWlja3NpZ2h0RGF0YVNldFJvd0xldmVsUGVybWlzc2lvbkRhdGFTZXRUb1RlcnJhZm9ybShzdHJ1Y3Q/OiBEYXRhQXdzY2NRdWlja3NpZ2h0RGF0YVNldFJvd0xldmVsUGVybWlzc2lvbkRhdGFTZXQpOiBhbnkge1xuICBpZiAoIWNka3RmLmNhbkluc3BlY3Qoc3RydWN0KSkgeyByZXR1cm4gc3RydWN0OyB9XG4gIHJldHVybiB7XG4gICAgYXJuOiBjZGt0Zi5zdHJpbmdUb1RlcnJhZm9ybShzdHJ1Y3QhLmFybiksXG4gICAgZm9ybWF0X3ZlcnNpb246IGNka3RmLnN0cmluZ1RvVGVycmFmb3JtKHN0cnVjdCEuZm9ybWF0VmVyc2lvbiksXG4gICAgbmFtZXNwYWNlOiBjZGt0Zi5zdHJpbmdUb1RlcnJhZm9ybShzdHJ1Y3QhLm5hbWVzcGFjZSksXG4gICAgcGVybWlzc2lvbl9wb2xpY3k6IGNka3RmLnN0cmluZ1RvVGVycmFmb3JtKHN0cnVjdCEucGVybWlzc2lvblBvbGljeSksXG4gIH1cbn1cblxuZXhwb3J0IGNsYXNzIERhdGFBd3NjY1F1aWNrc2lnaHREYXRhU2V0VGFncyBleHRlbmRzIGNka3RmLkNvbXBsZXhDb21wdXRlZExpc3Qge1xuXG4gIC8vIGtleSAtIGNvbXB1dGVkOiB0cnVlLCBvcHRpb25hbDogZmFsc2UsIHJlcXVpcmVkOiBmYWxzZVxuICBwdWJsaWMgZ2V0IGtleSgpIHtcbiAgICByZXR1cm4gdGhpcy5nZXRTdHJpbmdBdHRyaWJ1dGUoJ2tleScpO1xuICB9XG5cbiAgLy8gdmFsdWUgLSBjb21wdXRlZDogdHJ1ZSwgb3B0aW9uYWw6IGZhbHNlLCByZXF1aXJlZDogZmFsc2VcbiAgcHVibGljIGdldCB2YWx1ZSgpIHtcbiAgICByZXR1cm4gdGhpcy5nZXRTdHJpbmdBdHRyaWJ1dGUoJ3ZhbHVlJyk7XG4gIH1cbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGRhdGFBd3NjY1F1aWNrc2lnaHREYXRhU2V0VGFnc1RvVGVycmFmb3JtKHN0cnVjdD86IERhdGFBd3NjY1F1aWNrc2lnaHREYXRhU2V0VGFncyk6IGFueSB7XG4gIGlmICghY2RrdGYuY2FuSW5zcGVjdChzdHJ1Y3QpKSB7IHJldHVybiBzdHJ1Y3Q7IH1cbiAgcmV0dXJuIHtcbiAgICBrZXk6IGNka3RmLnN0cmluZ1RvVGVycmFmb3JtKHN0cnVjdCEua2V5KSxcbiAgICB2YWx1ZTogY2RrdGYuc3RyaW5nVG9UZXJyYWZvcm0oc3RydWN0IS52YWx1ZSksXG4gIH1cbn1cblxuXG4vKipcbiogUmVwcmVzZW50cyBhIHtAbGluayBodHRwczovL3d3dy50ZXJyYWZvcm0uaW8vZG9jcy9wcm92aWRlcnMvYXdzY2MvZC9xdWlja3NpZ2h0X2RhdGFfc2V0Lmh0bWwgYXdzY2NfcXVpY2tzaWdodF9kYXRhX3NldH1cbiovXG5leHBvcnQgY2xhc3MgRGF0YUF3c2NjUXVpY2tzaWdodERhdGFTZXQgZXh0ZW5kcyBjZGt0Zi5UZXJyYWZvcm1EYXRhU291cmNlIHtcblxuICAvLyA9PT09PT09PT09PT09PT09PVxuICAvLyBTVEFUSUMgUFJPUEVSVElFU1xuICAvLyA9PT09PT09PT09PT09PT09PVxuICBwdWJsaWMgc3RhdGljIHJlYWRvbmx5IHRmUmVzb3VyY2VUeXBlOiBzdHJpbmcgPSBcImF3c2NjX3F1aWNrc2lnaHRfZGF0YV9zZXRcIjtcblxuICAvLyA9PT09PT09PT09PVxuICAvLyBJTklUSUFMSVpFUlxuICAvLyA9PT09PT09PT09PVxuXG4gIC8qKlxuICAqIENyZWF0ZSBhIG5ldyB7QGxpbmsgaHR0cHM6Ly93d3cudGVycmFmb3JtLmlvL2RvY3MvcHJvdmlkZXJzL2F3c2NjL2QvcXVpY2tzaWdodF9kYXRhX3NldC5odG1sIGF3c2NjX3F1aWNrc2lnaHRfZGF0YV9zZXR9IERhdGEgU291cmNlXG4gICpcbiAgKiBAcGFyYW0gc2NvcGUgVGhlIHNjb3BlIGluIHdoaWNoIHRvIGRlZmluZSB0aGlzIGNvbnN0cnVjdFxuICAqIEBwYXJhbSBpZCBUaGUgc2NvcGVkIGNvbnN0cnVjdCBJRC4gTXVzdCBiZSB1bmlxdWUgYW1vbmdzdCBzaWJsaW5ncyBpbiB0aGUgc2FtZSBzY29wZVxuICAqIEBwYXJhbSBvcHRpb25zIERhdGFBd3NjY1F1aWNrc2lnaHREYXRhU2V0Q29uZmlnXG4gICovXG4gIHB1YmxpYyBjb25zdHJ1Y3RvcihzY29wZTogQ29uc3RydWN0LCBpZDogc3RyaW5nLCBjb25maWc6IERhdGFBd3NjY1F1aWNrc2lnaHREYXRhU2V0Q29uZmlnKSB7XG4gICAgc3VwZXIoc2NvcGUsIGlkLCB7XG4gICAgICB0ZXJyYWZvcm1SZXNvdXJjZVR5cGU6ICdhd3NjY19xdWlja3NpZ2h0X2RhdGFfc2V0JyxcbiAgICAgIHRlcnJhZm9ybUdlbmVyYXRvck1ldGFkYXRhOiB7XG4gICAgICAgIHByb3ZpZGVyTmFtZTogJ2F3c2NjJ1xuICAgICAgfSxcbiAgICAgIHByb3ZpZGVyOiBjb25maWcucHJvdmlkZXIsXG4gICAgICBkZXBlbmRzT246IGNvbmZpZy5kZXBlbmRzT24sXG4gICAgICBjb3VudDogY29uZmlnLmNvdW50LFxuICAgICAgbGlmZWN5Y2xlOiBjb25maWcubGlmZWN5Y2xlXG4gICAgfSk7XG4gICAgdGhpcy5faWQgPSBjb25maWcuaWQ7XG4gIH1cblxuICAvLyA9PT09PT09PT09XG4gIC8vIEFUVFJJQlVURVNcbiAgLy8gPT09PT09PT09PVxuXG4gIC8vIGFybiAtIGNvbXB1dGVkOiB0cnVlLCBvcHRpb25hbDogZmFsc2UsIHJlcXVpcmVkOiBmYWxzZVxuICBwdWJsaWMgZ2V0IGFybigpIHtcbiAgICByZXR1cm4gdGhpcy5nZXRTdHJpbmdBdHRyaWJ1dGUoJ2FybicpO1xuICB9XG5cbiAgLy8gYXdzX2FjY291bnRfaWQgLSBjb21wdXRlZDogdHJ1ZSwgb3B0aW9uYWw6IGZhbHNlLCByZXF1aXJlZDogZmFsc2VcbiAgcHVibGljIGdldCBhd3NBY2NvdW50SWQoKSB7XG4gICAgcmV0dXJuIHRoaXMuZ2V0U3RyaW5nQXR0cmlidXRlKCdhd3NfYWNjb3VudF9pZCcpO1xuICB9XG5cbiAgLy8gY29sdW1uX2dyb3VwcyAtIGNvbXB1dGVkOiB0cnVlLCBvcHRpb25hbDogZmFsc2UsIHJlcXVpcmVkOiBmYWxzZVxuICBwdWJsaWMgZ2V0IGNvbHVtbkdyb3VwcygpIHtcbiAgICByZXR1cm4gdGhpcy5pbnRlcnBvbGF0aW9uRm9yQXR0cmlidXRlKCdjb2x1bW5fZ3JvdXBzJykgYXMgYW55O1xuICB9XG5cbiAgLy8gY29sdW1uX2xldmVsX3Blcm1pc3Npb25fcnVsZXMgLSBjb21wdXRlZDogdHJ1ZSwgb3B0aW9uYWw6IGZhbHNlLCByZXF1aXJlZDogZmFsc2VcbiAgcHVibGljIGdldCBjb2x1bW5MZXZlbFBlcm1pc3Npb25SdWxlcygpIHtcbiAgICByZXR1cm4gdGhpcy5pbnRlcnBvbGF0aW9uRm9yQXR0cmlidXRlKCdjb2x1bW5fbGV2ZWxfcGVybWlzc2lvbl9ydWxlcycpIGFzIGFueTtcbiAgfVxuXG4gIC8vIGNvbnN1bWVkX3NwaWNlX2NhcGFjaXR5X2luX2J5dGVzIC0gY29tcHV0ZWQ6IHRydWUsIG9wdGlvbmFsOiBmYWxzZSwgcmVxdWlyZWQ6IGZhbHNlXG4gIHB1YmxpYyBnZXQgY29uc3VtZWRTcGljZUNhcGFjaXR5SW5CeXRlcygpIHtcbiAgICByZXR1cm4gdGhpcy5nZXROdW1iZXJBdHRyaWJ1dGUoJ2NvbnN1bWVkX3NwaWNlX2NhcGFjaXR5X2luX2J5dGVzJyk7XG4gIH1cblxuICAvLyBjcmVhdGVkX3RpbWUgLSBjb21wdXRlZDogdHJ1ZSwgb3B0aW9uYWw6IGZhbHNlLCByZXF1aXJlZDogZmFsc2VcbiAgcHVibGljIGdldCBjcmVhdGVkVGltZSgpIHtcbiAgICByZXR1cm4gdGhpcy5nZXRTdHJpbmdBdHRyaWJ1dGUoJ2NyZWF0ZWRfdGltZScpO1xuICB9XG5cbiAgLy8gZGF0YV9zZXRfaWQgLSBjb21wdXRlZDogdHJ1ZSwgb3B0aW9uYWw6IGZhbHNlLCByZXF1aXJlZDogZmFsc2VcbiAgcHVibGljIGdldCBkYXRhU2V0SWQoKSB7XG4gICAgcmV0dXJuIHRoaXMuZ2V0U3RyaW5nQXR0cmlidXRlKCdkYXRhX3NldF9pZCcpO1xuICB9XG5cbiAgLy8gZmllbGRfZm9sZGVycyAtIGNvbXB1dGVkOiB0cnVlLCBvcHRpb25hbDogZmFsc2UsIHJlcXVpcmVkOiBmYWxzZVxuICBwdWJsaWMgZ2V0IGZpZWxkRm9sZGVycygpIHtcbiAgICByZXR1cm4gdGhpcy5pbnRlcnBvbGF0aW9uRm9yQXR0cmlidXRlKCdmaWVsZF9mb2xkZXJzJykgYXMgYW55O1xuICB9XG5cbiAgLy8gaWQgLSBjb21wdXRlZDogZmFsc2UsIG9wdGlvbmFsOiBmYWxzZSwgcmVxdWlyZWQ6IHRydWVcbiAgcHJpdmF0ZSBfaWQ6IHN0cmluZztcbiAgcHVibGljIGdldCBpZCgpIHtcbiAgICByZXR1cm4gdGhpcy5nZXRTdHJpbmdBdHRyaWJ1dGUoJ2lkJyk7XG4gIH1cbiAgcHVibGljIHNldCBpZCh2YWx1ZTogc3RyaW5nKSB7XG4gICAgdGhpcy5faWQgPSB2YWx1ZTtcbiAgfVxuICAvLyBUZW1wb3JhcmlseSBleHBvc2UgaW5wdXQgdmFsdWUuIFVzZSB3aXRoIGNhdXRpb24uXG4gIHB1YmxpYyBnZXQgaWRJbnB1dCgpIHtcbiAgICByZXR1cm4gdGhpcy5faWRcbiAgfVxuXG4gIC8vIGltcG9ydF9tb2RlIC0gY29tcHV0ZWQ6IHRydWUsIG9wdGlvbmFsOiBmYWxzZSwgcmVxdWlyZWQ6IGZhbHNlXG4gIHB1YmxpYyBnZXQgaW1wb3J0TW9kZSgpIHtcbiAgICByZXR1cm4gdGhpcy5nZXRTdHJpbmdBdHRyaWJ1dGUoJ2ltcG9ydF9tb2RlJyk7XG4gIH1cblxuICAvLyBpbmdlc3Rpb25fd2FpdF9wb2xpY3kgLSBjb21wdXRlZDogdHJ1ZSwgb3B0aW9uYWw6IGZhbHNlLCByZXF1aXJlZDogZmFsc2VcbiAgcHVibGljIGdldCBpbmdlc3Rpb25XYWl0UG9saWN5KCkge1xuICAgIHJldHVybiB0aGlzLmludGVycG9sYXRpb25Gb3JBdHRyaWJ1dGUoJ2luZ2VzdGlvbl93YWl0X3BvbGljeScpIGFzIGFueTtcbiAgfVxuXG4gIC8vIGxhc3RfdXBkYXRlZF90aW1lIC0gY29tcHV0ZWQ6IHRydWUsIG9wdGlvbmFsOiBmYWxzZSwgcmVxdWlyZWQ6IGZhbHNlXG4gIHB1YmxpYyBnZXQgbGFzdFVwZGF0ZWRUaW1lKCkge1xuICAgIHJldHVybiB0aGlzLmdldFN0cmluZ0F0dHJpYnV0ZSgnbGFzdF91cGRhdGVkX3RpbWUnKTtcbiAgfVxuXG4gIC8vIGxvZ2ljYWxfdGFibGVfbWFwIC0gY29tcHV0ZWQ6IHRydWUsIG9wdGlvbmFsOiBmYWxzZSwgcmVxdWlyZWQ6IGZhbHNlXG4gIHB1YmxpYyBnZXQgbG9naWNhbFRhYmxlTWFwKCkge1xuICAgIHJldHVybiB0aGlzLmludGVycG9sYXRpb25Gb3JBdHRyaWJ1dGUoJ2xvZ2ljYWxfdGFibGVfbWFwJykgYXMgYW55O1xuICB9XG5cbiAgLy8gbmFtZSAtIGNvbXB1dGVkOiB0cnVlLCBvcHRpb25hbDogZmFsc2UsIHJlcXVpcmVkOiBmYWxzZVxuICBwdWJsaWMgZ2V0IG5hbWUoKSB7XG4gICAgcmV0dXJuIHRoaXMuZ2V0U3RyaW5nQXR0cmlidXRlKCduYW1lJyk7XG4gIH1cblxuICAvLyBvdXRwdXRfY29sdW1ucyAtIGNvbXB1dGVkOiB0cnVlLCBvcHRpb25hbDogZmFsc2UsIHJlcXVpcmVkOiBmYWxzZVxuICBwdWJsaWMgZ2V0IG91dHB1dENvbHVtbnMoKSB7XG4gICAgcmV0dXJuIHRoaXMuaW50ZXJwb2xhdGlvbkZvckF0dHJpYnV0ZSgnb3V0cHV0X2NvbHVtbnMnKSBhcyBhbnk7XG4gIH1cblxuICAvLyBwZXJtaXNzaW9ucyAtIGNvbXB1dGVkOiB0cnVlLCBvcHRpb25hbDogZmFsc2UsIHJlcXVpcmVkOiBmYWxzZVxuICBwdWJsaWMgZ2V0IHBlcm1pc3Npb25zKCkge1xuICAgIHJldHVybiB0aGlzLmludGVycG9sYXRpb25Gb3JBdHRyaWJ1dGUoJ3Blcm1pc3Npb25zJykgYXMgYW55O1xuICB9XG5cbiAgLy8gcGh5c2ljYWxfdGFibGVfbWFwIC0gY29tcHV0ZWQ6IHRydWUsIG9wdGlvbmFsOiBmYWxzZSwgcmVxdWlyZWQ6IGZhbHNlXG4gIHB1YmxpYyBnZXQgcGh5c2ljYWxUYWJsZU1hcCgpIHtcbiAgICByZXR1cm4gdGhpcy5pbnRlcnBvbGF0aW9uRm9yQXR0cmlidXRlKCdwaHlzaWNhbF90YWJsZV9tYXAnKSBhcyBhbnk7XG4gIH1cblxuICAvLyByb3dfbGV2ZWxfcGVybWlzc2lvbl9kYXRhX3NldCAtIGNvbXB1dGVkOiB0cnVlLCBvcHRpb25hbDogZmFsc2UsIHJlcXVpcmVkOiBmYWxzZVxuICBwdWJsaWMgZ2V0IHJvd0xldmVsUGVybWlzc2lvbkRhdGFTZXQoKSB7XG4gICAgcmV0dXJuIHRoaXMuaW50ZXJwb2xhdGlvbkZvckF0dHJpYnV0ZSgncm93X2xldmVsX3Blcm1pc3Npb25fZGF0YV9zZXQnKSBhcyBhbnk7XG4gIH1cblxuICAvLyB0YWdzIC0gY29tcHV0ZWQ6IHRydWUsIG9wdGlvbmFsOiBmYWxzZSwgcmVxdWlyZWQ6IGZhbHNlXG4gIHB1YmxpYyBnZXQgdGFncygpIHtcbiAgICByZXR1cm4gdGhpcy5pbnRlcnBvbGF0aW9uRm9yQXR0cmlidXRlKCd0YWdzJykgYXMgYW55O1xuICB9XG5cbiAgLy8gPT09PT09PT09XG4gIC8vIFNZTlRIRVNJU1xuICAvLyA9PT09PT09PT1cblxuICBwcm90ZWN0ZWQgc3ludGhlc2l6ZUF0dHJpYnV0ZXMoKTogeyBbbmFtZTogc3RyaW5nXTogYW55IH0ge1xuICAgIHJldHVybiB7XG4gICAgICBpZDogY2RrdGYuc3RyaW5nVG9UZXJyYWZvcm0odGhpcy5faWQpLFxuICAgIH07XG4gIH1cbn1cbiJdfQ==