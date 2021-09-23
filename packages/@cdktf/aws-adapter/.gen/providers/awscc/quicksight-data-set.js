"use strict";
// https://www.terraform.io/docs/providers/awscc/r/quicksight_data_set.html
// generated from terraform resource schema
Object.defineProperty(exports, "__esModule", { value: true });
exports.QuicksightDataSet = exports.quicksightDataSetTagsToTerraform = exports.quicksightDataSetRowLevelPermissionDataSetToTerraform = exports.quicksightDataSetPhysicalTableMapToTerraform = exports.quicksightDataSetPhysicalTableMapS3SourceToTerraform = exports.quicksightDataSetPhysicalTableMapS3SourceUploadSettingsToTerraform = exports.quicksightDataSetPhysicalTableMapS3SourceInputColumnsToTerraform = exports.quicksightDataSetPhysicalTableMapRelationalTableToTerraform = exports.quicksightDataSetPhysicalTableMapRelationalTableInputColumnsToTerraform = exports.quicksightDataSetPhysicalTableMapCustomSqlToTerraform = exports.quicksightDataSetPhysicalTableMapCustomSqlColumnsToTerraform = exports.quicksightDataSetPermissionsToTerraform = exports.quicksightDataSetOutputColumnsToTerraform = exports.QuicksightDataSetOutputColumns = exports.quicksightDataSetLogicalTableMapToTerraform = exports.quicksightDataSetLogicalTableMapSourceToTerraform = exports.quicksightDataSetLogicalTableMapSourceJoinInstructionToTerraform = exports.quicksightDataSetLogicalTableMapSourceJoinInstructionRightJoinKeyPropertiesToTerraform = exports.quicksightDataSetLogicalTableMapSourceJoinInstructionLeftJoinKeyPropertiesToTerraform = exports.quicksightDataSetLogicalTableMapDataTransformsToTerraform = exports.quicksightDataSetLogicalTableMapDataTransformsTagColumnOperationToTerraform = exports.quicksightDataSetLogicalTableMapDataTransformsTagColumnOperationTagsToTerraform = exports.quicksightDataSetLogicalTableMapDataTransformsTagColumnOperationTagsColumnDescriptionToTerraform = exports.quicksightDataSetLogicalTableMapDataTransformsRenameColumnOperationToTerraform = exports.quicksightDataSetLogicalTableMapDataTransformsProjectOperationToTerraform = exports.quicksightDataSetLogicalTableMapDataTransformsFilterOperationToTerraform = exports.quicksightDataSetLogicalTableMapDataTransformsCreateColumnsOperationToTerraform = exports.quicksightDataSetLogicalTableMapDataTransformsCreateColumnsOperationColumnsToTerraform = exports.quicksightDataSetLogicalTableMapDataTransformsCastColumnTypeOperationToTerraform = exports.quicksightDataSetIngestionWaitPolicyToTerraform = exports.quicksightDataSetFieldFoldersToTerraform = exports.quicksightDataSetColumnLevelPermissionRulesToTerraform = exports.quicksightDataSetColumnGroupsToTerraform = exports.quicksightDataSetColumnGroupsGeoSpatialColumnGroupToTerraform = void 0;
const cdktf = require("cdktf");
function quicksightDataSetColumnGroupsGeoSpatialColumnGroupToTerraform(struct) {
    if (!cdktf.canInspect(struct)) {
        return struct;
    }
    return {
        columns: cdktf.listMapper(cdktf.stringToTerraform)(struct.columns),
        country_code: cdktf.stringToTerraform(struct.countryCode),
        name: cdktf.stringToTerraform(struct.name),
    };
}
exports.quicksightDataSetColumnGroupsGeoSpatialColumnGroupToTerraform = quicksightDataSetColumnGroupsGeoSpatialColumnGroupToTerraform;
function quicksightDataSetColumnGroupsToTerraform(struct) {
    if (!cdktf.canInspect(struct)) {
        return struct;
    }
    return {
        geo_spatial_column_group: quicksightDataSetColumnGroupsGeoSpatialColumnGroupToTerraform(struct.geoSpatialColumnGroup),
    };
}
exports.quicksightDataSetColumnGroupsToTerraform = quicksightDataSetColumnGroupsToTerraform;
function quicksightDataSetColumnLevelPermissionRulesToTerraform(struct) {
    if (!cdktf.canInspect(struct)) {
        return struct;
    }
    return {
        column_names: cdktf.listMapper(cdktf.stringToTerraform)(struct.columnNames),
        principals: cdktf.listMapper(cdktf.stringToTerraform)(struct.principals),
    };
}
exports.quicksightDataSetColumnLevelPermissionRulesToTerraform = quicksightDataSetColumnLevelPermissionRulesToTerraform;
function quicksightDataSetFieldFoldersToTerraform(struct) {
    if (!cdktf.canInspect(struct)) {
        return struct;
    }
    return {
        columns: cdktf.listMapper(cdktf.stringToTerraform)(struct.columns),
        description: cdktf.stringToTerraform(struct.description),
    };
}
exports.quicksightDataSetFieldFoldersToTerraform = quicksightDataSetFieldFoldersToTerraform;
function quicksightDataSetIngestionWaitPolicyToTerraform(struct) {
    if (!cdktf.canInspect(struct)) {
        return struct;
    }
    return {
        ingestion_wait_time_in_hours: cdktf.numberToTerraform(struct.ingestionWaitTimeInHours),
        wait_for_spice_ingestion: cdktf.booleanToTerraform(struct.waitForSpiceIngestion),
    };
}
exports.quicksightDataSetIngestionWaitPolicyToTerraform = quicksightDataSetIngestionWaitPolicyToTerraform;
function quicksightDataSetLogicalTableMapDataTransformsCastColumnTypeOperationToTerraform(struct) {
    if (!cdktf.canInspect(struct)) {
        return struct;
    }
    return {
        column_name: cdktf.stringToTerraform(struct.columnName),
        format: cdktf.stringToTerraform(struct.format),
        new_column_type: cdktf.stringToTerraform(struct.newColumnType),
    };
}
exports.quicksightDataSetLogicalTableMapDataTransformsCastColumnTypeOperationToTerraform = quicksightDataSetLogicalTableMapDataTransformsCastColumnTypeOperationToTerraform;
function quicksightDataSetLogicalTableMapDataTransformsCreateColumnsOperationColumnsToTerraform(struct) {
    if (!cdktf.canInspect(struct)) {
        return struct;
    }
    return {
        column_id: cdktf.stringToTerraform(struct.columnId),
        column_name: cdktf.stringToTerraform(struct.columnName),
        expression: cdktf.stringToTerraform(struct.expression),
    };
}
exports.quicksightDataSetLogicalTableMapDataTransformsCreateColumnsOperationColumnsToTerraform = quicksightDataSetLogicalTableMapDataTransformsCreateColumnsOperationColumnsToTerraform;
function quicksightDataSetLogicalTableMapDataTransformsCreateColumnsOperationToTerraform(struct) {
    if (!cdktf.canInspect(struct)) {
        return struct;
    }
    return {
        columns: cdktf.listMapper(quicksightDataSetLogicalTableMapDataTransformsCreateColumnsOperationColumnsToTerraform)(struct.columns),
    };
}
exports.quicksightDataSetLogicalTableMapDataTransformsCreateColumnsOperationToTerraform = quicksightDataSetLogicalTableMapDataTransformsCreateColumnsOperationToTerraform;
function quicksightDataSetLogicalTableMapDataTransformsFilterOperationToTerraform(struct) {
    if (!cdktf.canInspect(struct)) {
        return struct;
    }
    return {
        condition_expression: cdktf.stringToTerraform(struct.conditionExpression),
    };
}
exports.quicksightDataSetLogicalTableMapDataTransformsFilterOperationToTerraform = quicksightDataSetLogicalTableMapDataTransformsFilterOperationToTerraform;
function quicksightDataSetLogicalTableMapDataTransformsProjectOperationToTerraform(struct) {
    if (!cdktf.canInspect(struct)) {
        return struct;
    }
    return {
        projected_columns: cdktf.listMapper(cdktf.stringToTerraform)(struct.projectedColumns),
    };
}
exports.quicksightDataSetLogicalTableMapDataTransformsProjectOperationToTerraform = quicksightDataSetLogicalTableMapDataTransformsProjectOperationToTerraform;
function quicksightDataSetLogicalTableMapDataTransformsRenameColumnOperationToTerraform(struct) {
    if (!cdktf.canInspect(struct)) {
        return struct;
    }
    return {
        column_name: cdktf.stringToTerraform(struct.columnName),
        new_column_name: cdktf.stringToTerraform(struct.newColumnName),
    };
}
exports.quicksightDataSetLogicalTableMapDataTransformsRenameColumnOperationToTerraform = quicksightDataSetLogicalTableMapDataTransformsRenameColumnOperationToTerraform;
function quicksightDataSetLogicalTableMapDataTransformsTagColumnOperationTagsColumnDescriptionToTerraform(struct) {
    if (!cdktf.canInspect(struct)) {
        return struct;
    }
    return {
        text: cdktf.stringToTerraform(struct.text),
    };
}
exports.quicksightDataSetLogicalTableMapDataTransformsTagColumnOperationTagsColumnDescriptionToTerraform = quicksightDataSetLogicalTableMapDataTransformsTagColumnOperationTagsColumnDescriptionToTerraform;
function quicksightDataSetLogicalTableMapDataTransformsTagColumnOperationTagsToTerraform(struct) {
    if (!cdktf.canInspect(struct)) {
        return struct;
    }
    return {
        column_description: quicksightDataSetLogicalTableMapDataTransformsTagColumnOperationTagsColumnDescriptionToTerraform(struct.columnDescription),
        column_geographic_role: cdktf.stringToTerraform(struct.columnGeographicRole),
    };
}
exports.quicksightDataSetLogicalTableMapDataTransformsTagColumnOperationTagsToTerraform = quicksightDataSetLogicalTableMapDataTransformsTagColumnOperationTagsToTerraform;
function quicksightDataSetLogicalTableMapDataTransformsTagColumnOperationToTerraform(struct) {
    if (!cdktf.canInspect(struct)) {
        return struct;
    }
    return {
        column_name: cdktf.stringToTerraform(struct.columnName),
        tags: cdktf.listMapper(quicksightDataSetLogicalTableMapDataTransformsTagColumnOperationTagsToTerraform)(struct.tags),
    };
}
exports.quicksightDataSetLogicalTableMapDataTransformsTagColumnOperationToTerraform = quicksightDataSetLogicalTableMapDataTransformsTagColumnOperationToTerraform;
function quicksightDataSetLogicalTableMapDataTransformsToTerraform(struct) {
    if (!cdktf.canInspect(struct)) {
        return struct;
    }
    return {
        cast_column_type_operation: quicksightDataSetLogicalTableMapDataTransformsCastColumnTypeOperationToTerraform(struct.castColumnTypeOperation),
        create_columns_operation: quicksightDataSetLogicalTableMapDataTransformsCreateColumnsOperationToTerraform(struct.createColumnsOperation),
        filter_operation: quicksightDataSetLogicalTableMapDataTransformsFilterOperationToTerraform(struct.filterOperation),
        project_operation: quicksightDataSetLogicalTableMapDataTransformsProjectOperationToTerraform(struct.projectOperation),
        rename_column_operation: quicksightDataSetLogicalTableMapDataTransformsRenameColumnOperationToTerraform(struct.renameColumnOperation),
        tag_column_operation: quicksightDataSetLogicalTableMapDataTransformsTagColumnOperationToTerraform(struct.tagColumnOperation),
    };
}
exports.quicksightDataSetLogicalTableMapDataTransformsToTerraform = quicksightDataSetLogicalTableMapDataTransformsToTerraform;
function quicksightDataSetLogicalTableMapSourceJoinInstructionLeftJoinKeyPropertiesToTerraform(struct) {
    if (!cdktf.canInspect(struct)) {
        return struct;
    }
    return {
        unique_key: cdktf.booleanToTerraform(struct.uniqueKey),
    };
}
exports.quicksightDataSetLogicalTableMapSourceJoinInstructionLeftJoinKeyPropertiesToTerraform = quicksightDataSetLogicalTableMapSourceJoinInstructionLeftJoinKeyPropertiesToTerraform;
function quicksightDataSetLogicalTableMapSourceJoinInstructionRightJoinKeyPropertiesToTerraform(struct) {
    if (!cdktf.canInspect(struct)) {
        return struct;
    }
    return {
        unique_key: cdktf.booleanToTerraform(struct.uniqueKey),
    };
}
exports.quicksightDataSetLogicalTableMapSourceJoinInstructionRightJoinKeyPropertiesToTerraform = quicksightDataSetLogicalTableMapSourceJoinInstructionRightJoinKeyPropertiesToTerraform;
function quicksightDataSetLogicalTableMapSourceJoinInstructionToTerraform(struct) {
    if (!cdktf.canInspect(struct)) {
        return struct;
    }
    return {
        left_join_key_properties: quicksightDataSetLogicalTableMapSourceJoinInstructionLeftJoinKeyPropertiesToTerraform(struct.leftJoinKeyProperties),
        left_operand: cdktf.stringToTerraform(struct.leftOperand),
        on_clause: cdktf.stringToTerraform(struct.onClause),
        right_join_key_properties: quicksightDataSetLogicalTableMapSourceJoinInstructionRightJoinKeyPropertiesToTerraform(struct.rightJoinKeyProperties),
        right_operand: cdktf.stringToTerraform(struct.rightOperand),
        type: cdktf.stringToTerraform(struct.type),
    };
}
exports.quicksightDataSetLogicalTableMapSourceJoinInstructionToTerraform = quicksightDataSetLogicalTableMapSourceJoinInstructionToTerraform;
function quicksightDataSetLogicalTableMapSourceToTerraform(struct) {
    if (!cdktf.canInspect(struct)) {
        return struct;
    }
    return {
        join_instruction: quicksightDataSetLogicalTableMapSourceJoinInstructionToTerraform(struct.joinInstruction),
        physical_table_id: cdktf.stringToTerraform(struct.physicalTableId),
    };
}
exports.quicksightDataSetLogicalTableMapSourceToTerraform = quicksightDataSetLogicalTableMapSourceToTerraform;
function quicksightDataSetLogicalTableMapToTerraform(struct) {
    if (!cdktf.canInspect(struct)) {
        return struct;
    }
    return {
        alias: cdktf.stringToTerraform(struct.alias),
        data_transforms: cdktf.listMapper(quicksightDataSetLogicalTableMapDataTransformsToTerraform)(struct.dataTransforms),
        source: quicksightDataSetLogicalTableMapSourceToTerraform(struct.source),
    };
}
exports.quicksightDataSetLogicalTableMapToTerraform = quicksightDataSetLogicalTableMapToTerraform;
class QuicksightDataSetOutputColumns extends cdktf.ComplexComputedList {
    get description() {
        return this.getStringAttribute('description');
    }
    set description(value) {
        this._description = value;
    }
    resetDescription() {
        this._description = undefined;
    }
    // Temporarily expose input value. Use with caution.
    get descriptionInput() {
        return this._description;
    }
    get name() {
        return this.getStringAttribute('name');
    }
    set name(value) {
        this._name = value;
    }
    resetName() {
        this._name = undefined;
    }
    // Temporarily expose input value. Use with caution.
    get nameInput() {
        return this._name;
    }
    get type() {
        return this.getStringAttribute('type');
    }
    set type(value) {
        this._type = value;
    }
    resetType() {
        this._type = undefined;
    }
    // Temporarily expose input value. Use with caution.
    get typeInput() {
        return this._type;
    }
}
exports.QuicksightDataSetOutputColumns = QuicksightDataSetOutputColumns;
function quicksightDataSetOutputColumnsToTerraform(struct) {
    if (!cdktf.canInspect(struct)) {
        return struct;
    }
    return {
        description: cdktf.stringToTerraform(struct.description),
        name: cdktf.stringToTerraform(struct.name),
        type: cdktf.stringToTerraform(struct.type),
    };
}
exports.quicksightDataSetOutputColumnsToTerraform = quicksightDataSetOutputColumnsToTerraform;
function quicksightDataSetPermissionsToTerraform(struct) {
    if (!cdktf.canInspect(struct)) {
        return struct;
    }
    return {
        actions: cdktf.listMapper(cdktf.stringToTerraform)(struct.actions),
        principal: cdktf.stringToTerraform(struct.principal),
    };
}
exports.quicksightDataSetPermissionsToTerraform = quicksightDataSetPermissionsToTerraform;
function quicksightDataSetPhysicalTableMapCustomSqlColumnsToTerraform(struct) {
    if (!cdktf.canInspect(struct)) {
        return struct;
    }
    return {
        name: cdktf.stringToTerraform(struct.name),
        type: cdktf.stringToTerraform(struct.type),
    };
}
exports.quicksightDataSetPhysicalTableMapCustomSqlColumnsToTerraform = quicksightDataSetPhysicalTableMapCustomSqlColumnsToTerraform;
function quicksightDataSetPhysicalTableMapCustomSqlToTerraform(struct) {
    if (!cdktf.canInspect(struct)) {
        return struct;
    }
    return {
        columns: cdktf.listMapper(quicksightDataSetPhysicalTableMapCustomSqlColumnsToTerraform)(struct.columns),
        data_source_arn: cdktf.stringToTerraform(struct.dataSourceArn),
        name: cdktf.stringToTerraform(struct.name),
        sql_query: cdktf.stringToTerraform(struct.sqlQuery),
    };
}
exports.quicksightDataSetPhysicalTableMapCustomSqlToTerraform = quicksightDataSetPhysicalTableMapCustomSqlToTerraform;
function quicksightDataSetPhysicalTableMapRelationalTableInputColumnsToTerraform(struct) {
    if (!cdktf.canInspect(struct)) {
        return struct;
    }
    return {
        name: cdktf.stringToTerraform(struct.name),
        type: cdktf.stringToTerraform(struct.type),
    };
}
exports.quicksightDataSetPhysicalTableMapRelationalTableInputColumnsToTerraform = quicksightDataSetPhysicalTableMapRelationalTableInputColumnsToTerraform;
function quicksightDataSetPhysicalTableMapRelationalTableToTerraform(struct) {
    if (!cdktf.canInspect(struct)) {
        return struct;
    }
    return {
        catalog: cdktf.stringToTerraform(struct.catalog),
        data_source_arn: cdktf.stringToTerraform(struct.dataSourceArn),
        input_columns: cdktf.listMapper(quicksightDataSetPhysicalTableMapRelationalTableInputColumnsToTerraform)(struct.inputColumns),
        name: cdktf.stringToTerraform(struct.name),
        schema: cdktf.stringToTerraform(struct.schema),
    };
}
exports.quicksightDataSetPhysicalTableMapRelationalTableToTerraform = quicksightDataSetPhysicalTableMapRelationalTableToTerraform;
function quicksightDataSetPhysicalTableMapS3SourceInputColumnsToTerraform(struct) {
    if (!cdktf.canInspect(struct)) {
        return struct;
    }
    return {
        name: cdktf.stringToTerraform(struct.name),
        type: cdktf.stringToTerraform(struct.type),
    };
}
exports.quicksightDataSetPhysicalTableMapS3SourceInputColumnsToTerraform = quicksightDataSetPhysicalTableMapS3SourceInputColumnsToTerraform;
function quicksightDataSetPhysicalTableMapS3SourceUploadSettingsToTerraform(struct) {
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
exports.quicksightDataSetPhysicalTableMapS3SourceUploadSettingsToTerraform = quicksightDataSetPhysicalTableMapS3SourceUploadSettingsToTerraform;
function quicksightDataSetPhysicalTableMapS3SourceToTerraform(struct) {
    if (!cdktf.canInspect(struct)) {
        return struct;
    }
    return {
        data_source_arn: cdktf.stringToTerraform(struct.dataSourceArn),
        input_columns: cdktf.listMapper(quicksightDataSetPhysicalTableMapS3SourceInputColumnsToTerraform)(struct.inputColumns),
        upload_settings: quicksightDataSetPhysicalTableMapS3SourceUploadSettingsToTerraform(struct.uploadSettings),
    };
}
exports.quicksightDataSetPhysicalTableMapS3SourceToTerraform = quicksightDataSetPhysicalTableMapS3SourceToTerraform;
function quicksightDataSetPhysicalTableMapToTerraform(struct) {
    if (!cdktf.canInspect(struct)) {
        return struct;
    }
    return {
        custom_sql: quicksightDataSetPhysicalTableMapCustomSqlToTerraform(struct.customSql),
        relational_table: quicksightDataSetPhysicalTableMapRelationalTableToTerraform(struct.relationalTable),
        s3_source: quicksightDataSetPhysicalTableMapS3SourceToTerraform(struct.s3Source),
    };
}
exports.quicksightDataSetPhysicalTableMapToTerraform = quicksightDataSetPhysicalTableMapToTerraform;
function quicksightDataSetRowLevelPermissionDataSetToTerraform(struct) {
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
exports.quicksightDataSetRowLevelPermissionDataSetToTerraform = quicksightDataSetRowLevelPermissionDataSetToTerraform;
function quicksightDataSetTagsToTerraform(struct) {
    if (!cdktf.canInspect(struct)) {
        return struct;
    }
    return {
        key: cdktf.stringToTerraform(struct.key),
        value: cdktf.stringToTerraform(struct.value),
    };
}
exports.quicksightDataSetTagsToTerraform = quicksightDataSetTagsToTerraform;
/**
* Represents a {@link https://www.terraform.io/docs/providers/awscc/r/quicksight_data_set.html awscc_quicksight_data_set}
*/
class QuicksightDataSet extends cdktf.TerraformResource {
    // ===========
    // INITIALIZER
    // ===========
    /**
    * Create a new {@link https://www.terraform.io/docs/providers/awscc/r/quicksight_data_set.html awscc_quicksight_data_set} Resource
    *
    * @param scope The scope in which to define this construct
    * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
    * @param options QuicksightDataSetConfig = {}
    */
    constructor(scope, id, config = {}) {
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
        this._awsAccountId = config.awsAccountId;
        this._columnGroups = config.columnGroups;
        this._columnLevelPermissionRules = config.columnLevelPermissionRules;
        this._dataSetId = config.dataSetId;
        this._fieldFolders = config.fieldFolders;
        this._importMode = config.importMode;
        this._ingestionWaitPolicy = config.ingestionWaitPolicy;
        this._logicalTableMap = config.logicalTableMap;
        this._name = config.name;
        this._permissions = config.permissions;
        this._physicalTableMap = config.physicalTableMap;
        this._rowLevelPermissionDataSet = config.rowLevelPermissionDataSet;
        this._tags = config.tags;
    }
    // ==========
    // ATTRIBUTES
    // ==========
    // arn - computed: true, optional: false, required: false
    get arn() {
        return this.getStringAttribute('arn');
    }
    get awsAccountId() {
        return this.getStringAttribute('aws_account_id');
    }
    set awsAccountId(value) {
        this._awsAccountId = value;
    }
    resetAwsAccountId() {
        this._awsAccountId = undefined;
    }
    // Temporarily expose input value. Use with caution.
    get awsAccountIdInput() {
        return this._awsAccountId;
    }
    get columnGroups() {
        return this.interpolationForAttribute('column_groups');
    }
    set columnGroups(value) {
        this._columnGroups = value;
    }
    resetColumnGroups() {
        this._columnGroups = undefined;
    }
    // Temporarily expose input value. Use with caution.
    get columnGroupsInput() {
        return this._columnGroups;
    }
    get columnLevelPermissionRules() {
        return this.interpolationForAttribute('column_level_permission_rules');
    }
    set columnLevelPermissionRules(value) {
        this._columnLevelPermissionRules = value;
    }
    resetColumnLevelPermissionRules() {
        this._columnLevelPermissionRules = undefined;
    }
    // Temporarily expose input value. Use with caution.
    get columnLevelPermissionRulesInput() {
        return this._columnLevelPermissionRules;
    }
    // consumed_spice_capacity_in_bytes - computed: true, optional: false, required: false
    get consumedSpiceCapacityInBytes() {
        return this.getNumberAttribute('consumed_spice_capacity_in_bytes');
    }
    // created_time - computed: true, optional: false, required: false
    get createdTime() {
        return this.getStringAttribute('created_time');
    }
    get dataSetId() {
        return this.getStringAttribute('data_set_id');
    }
    set dataSetId(value) {
        this._dataSetId = value;
    }
    resetDataSetId() {
        this._dataSetId = undefined;
    }
    // Temporarily expose input value. Use with caution.
    get dataSetIdInput() {
        return this._dataSetId;
    }
    get fieldFolders() {
        return this.interpolationForAttribute('field_folders');
    }
    set fieldFolders(value) {
        this._fieldFolders = value;
    }
    resetFieldFolders() {
        this._fieldFolders = undefined;
    }
    // Temporarily expose input value. Use with caution.
    get fieldFoldersInput() {
        return this._fieldFolders;
    }
    // id - computed: true, optional: false, required: false
    get id() {
        return this.getStringAttribute('id');
    }
    get importMode() {
        return this.getStringAttribute('import_mode');
    }
    set importMode(value) {
        this._importMode = value;
    }
    resetImportMode() {
        this._importMode = undefined;
    }
    // Temporarily expose input value. Use with caution.
    get importModeInput() {
        return this._importMode;
    }
    get ingestionWaitPolicy() {
        return this.interpolationForAttribute('ingestion_wait_policy');
    }
    set ingestionWaitPolicy(value) {
        this._ingestionWaitPolicy = value;
    }
    resetIngestionWaitPolicy() {
        this._ingestionWaitPolicy = undefined;
    }
    // Temporarily expose input value. Use with caution.
    get ingestionWaitPolicyInput() {
        return this._ingestionWaitPolicy;
    }
    // last_updated_time - computed: true, optional: false, required: false
    get lastUpdatedTime() {
        return this.getStringAttribute('last_updated_time');
    }
    get logicalTableMap() {
        return this.interpolationForAttribute('logical_table_map');
    }
    set logicalTableMap(value) {
        this._logicalTableMap = value;
    }
    resetLogicalTableMap() {
        this._logicalTableMap = undefined;
    }
    // Temporarily expose input value. Use with caution.
    get logicalTableMapInput() {
        return this._logicalTableMap;
    }
    get name() {
        return this.getStringAttribute('name');
    }
    set name(value) {
        this._name = value;
    }
    resetName() {
        this._name = undefined;
    }
    // Temporarily expose input value. Use with caution.
    get nameInput() {
        return this._name;
    }
    // output_columns - computed: true, optional: false, required: false
    get outputColumns() {
        return this.interpolationForAttribute('output_columns');
    }
    get permissions() {
        return this.interpolationForAttribute('permissions');
    }
    set permissions(value) {
        this._permissions = value;
    }
    resetPermissions() {
        this._permissions = undefined;
    }
    // Temporarily expose input value. Use with caution.
    get permissionsInput() {
        return this._permissions;
    }
    get physicalTableMap() {
        return this.interpolationForAttribute('physical_table_map');
    }
    set physicalTableMap(value) {
        this._physicalTableMap = value;
    }
    resetPhysicalTableMap() {
        this._physicalTableMap = undefined;
    }
    // Temporarily expose input value. Use with caution.
    get physicalTableMapInput() {
        return this._physicalTableMap;
    }
    get rowLevelPermissionDataSet() {
        return this.interpolationForAttribute('row_level_permission_data_set');
    }
    set rowLevelPermissionDataSet(value) {
        this._rowLevelPermissionDataSet = value;
    }
    resetRowLevelPermissionDataSet() {
        this._rowLevelPermissionDataSet = undefined;
    }
    // Temporarily expose input value. Use with caution.
    get rowLevelPermissionDataSetInput() {
        return this._rowLevelPermissionDataSet;
    }
    get tags() {
        return this.interpolationForAttribute('tags');
    }
    set tags(value) {
        this._tags = value;
    }
    resetTags() {
        this._tags = undefined;
    }
    // Temporarily expose input value. Use with caution.
    get tagsInput() {
        return this._tags;
    }
    // =========
    // SYNTHESIS
    // =========
    synthesizeAttributes() {
        return {
            aws_account_id: cdktf.stringToTerraform(this._awsAccountId),
            column_groups: cdktf.listMapper(quicksightDataSetColumnGroupsToTerraform)(this._columnGroups),
            column_level_permission_rules: cdktf.listMapper(quicksightDataSetColumnLevelPermissionRulesToTerraform)(this._columnLevelPermissionRules),
            data_set_id: cdktf.stringToTerraform(this._dataSetId),
            field_folders: cdktf.hashMapper(cdktf.anyToTerraform)(this._fieldFolders),
            import_mode: cdktf.stringToTerraform(this._importMode),
            ingestion_wait_policy: quicksightDataSetIngestionWaitPolicyToTerraform(this._ingestionWaitPolicy),
            logical_table_map: cdktf.hashMapper(cdktf.anyToTerraform)(this._logicalTableMap),
            name: cdktf.stringToTerraform(this._name),
            permissions: cdktf.listMapper(quicksightDataSetPermissionsToTerraform)(this._permissions),
            physical_table_map: cdktf.hashMapper(cdktf.anyToTerraform)(this._physicalTableMap),
            row_level_permission_data_set: quicksightDataSetRowLevelPermissionDataSetToTerraform(this._rowLevelPermissionDataSet),
            tags: cdktf.listMapper(quicksightDataSetTagsToTerraform)(this._tags),
        };
    }
}
exports.QuicksightDataSet = QuicksightDataSet;
// =================
// STATIC PROPERTIES
// =================
QuicksightDataSet.tfResourceType = "awscc_quicksight_data_set";
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicXVpY2tzaWdodC1kYXRhLXNldC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbInF1aWNrc2lnaHQtZGF0YS1zZXQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IjtBQUFBLDJFQUEyRTtBQUMzRSwyQ0FBMkM7OztBQUczQywrQkFBK0I7QUF5Ri9CLFNBQWdCLDZEQUE2RCxDQUFDLE1BQTJEO0lBQ3ZJLElBQUksQ0FBQyxLQUFLLENBQUMsVUFBVSxDQUFDLE1BQU0sQ0FBQyxFQUFFO1FBQUUsT0FBTyxNQUFNLENBQUM7S0FBRTtJQUNqRCxPQUFPO1FBQ0wsT0FBTyxFQUFFLEtBQUssQ0FBQyxVQUFVLENBQUMsS0FBSyxDQUFDLGlCQUFpQixDQUFDLENBQUMsTUFBTyxDQUFDLE9BQU8sQ0FBQztRQUNuRSxZQUFZLEVBQUUsS0FBSyxDQUFDLGlCQUFpQixDQUFDLE1BQU8sQ0FBQyxXQUFXLENBQUM7UUFDMUQsSUFBSSxFQUFFLEtBQUssQ0FBQyxpQkFBaUIsQ0FBQyxNQUFPLENBQUMsSUFBSSxDQUFDO0tBQzVDLENBQUE7QUFDSCxDQUFDO0FBUEQsc0lBT0M7QUFXRCxTQUFnQix3Q0FBd0MsQ0FBQyxNQUFzQztJQUM3RixJQUFJLENBQUMsS0FBSyxDQUFDLFVBQVUsQ0FBQyxNQUFNLENBQUMsRUFBRTtRQUFFLE9BQU8sTUFBTSxDQUFDO0tBQUU7SUFDakQsT0FBTztRQUNMLHdCQUF3QixFQUFFLDZEQUE2RCxDQUFDLE1BQU8sQ0FBQyxxQkFBcUIsQ0FBQztLQUN2SCxDQUFBO0FBQ0gsQ0FBQztBQUxELDRGQUtDO0FBYUQsU0FBZ0Isc0RBQXNELENBQUMsTUFBb0Q7SUFDekgsSUFBSSxDQUFDLEtBQUssQ0FBQyxVQUFVLENBQUMsTUFBTSxDQUFDLEVBQUU7UUFBRSxPQUFPLE1BQU0sQ0FBQztLQUFFO0lBQ2pELE9BQU87UUFDTCxZQUFZLEVBQUUsS0FBSyxDQUFDLFVBQVUsQ0FBQyxLQUFLLENBQUMsaUJBQWlCLENBQUMsQ0FBQyxNQUFPLENBQUMsV0FB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WUFDckQsYUFBYSxFQUFFLEtBQUssQ0FBQyxVQUFVLENBQUMsS0FBSyxDQUFDLGNBQWMsQ0FBQyxDQUFDLElBQUksQ0FBQyxhQUFhLENBQUM7WUFDekUsV0FBVyxFQUFFLEtBQUssQ0FBQyxpQkFBaUIsQ0FBQyxJQUFJLENBQUMsV0FBVyxDQUFDO1lBQ3RELHFCQUFxQixFQUFFLCtDQUErQyxDQUFDLElBQUksQ0FBQyxvQkFBb0IsQ0FBQztZQUNqRyxpQkFBaUIsRUFBRSxLQUFLLENBQUMsVUFBVSxDQUFDLEtBQUssQ0FBQyxjQUFjLENBQUMsQ0FBQyxJQUFJLENBQUMsZ0JBQWdCLENBQUM7WUFDaEYsSUFBSSxFQUFFLEtBQUssQ0FBQyxpQkFBaUIsQ0FBQyxJQUFJLENBQUMsS0FBSyxDQUFDO1lBQ3pDLFdBQVcsRUFBRSxLQUFLLENBQUMsVUFBVSxDQUFDLHVDQUF1QyxDQUFDLENBQUMsSUFBSSxDQUFDLFlBQVksQ0FBQztZQUN6RixrQkFBa0IsRUFBRSxLQUFLLENBQUMsVUFBVSxDQUFDLEtBQUssQ0FBQyxjQUFjLENBQUMsQ0FBQyxJQUFJLENBQUMsaUJBQWlCLENBQUM7WUFDbEYsNkJBQTZCLEVBQUUscURBQXFELENBQUMsSUFBSSxDQUFDLDBCQUEwQixDQUFDO1lBQ3JILElBQUksRUFBRSxLQUFLLENBQUMsVUFBVSxDQUFDLGdDQUFnQyxDQUFDLENBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQztTQUNyRSxDQUFDO0lBQ0osQ0FBQzs7QUFsVEgsOENBbVRDO0FBalRDLG9CQUFvQjtBQUNwQixvQkFBb0I7QUFDcEIsb0JBQW9CO0FBQ0csZ0NBQWMsR0FBVywyQkFBMkIsQ0FBQyIsInNvdXJjZXNDb250ZW50IjpbIi8vIGh0dHBzOi8vd3d3LnRlcnJhZm9ybS5pby9kb2NzL3Byb3ZpZGVycy9hd3NjYy9yL3F1aWNrc2lnaHRfZGF0YV9zZXQuaHRtbFxuLy8gZ2VuZXJhdGVkIGZyb20gdGVycmFmb3JtIHJlc291cmNlIHNjaGVtYVxuXG5pbXBvcnQgeyBDb25zdHJ1Y3QgfSBmcm9tICdjb25zdHJ1Y3RzJztcbmltcG9ydCAqIGFzIGNka3RmIGZyb20gJ2Nka3RmJztcblxuLy8gQ29uZmlndXJhdGlvblxuXG5leHBvcnQgaW50ZXJmYWNlIFF1aWNrc2lnaHREYXRhU2V0Q29uZmlnIGV4dGVuZHMgY2RrdGYuVGVycmFmb3JtTWV0YUFyZ3VtZW50cyB7XG4gIC8qKlxuICAqIERvY3MgYXQgVGVycmFmb3JtIFJlZ2lzdHJ5OiB7QGxpbmsgaHR0cHM6Ly93d3cudGVycmFmb3JtLmlvL2RvY3MvcHJvdmlkZXJzL2F3c2NjL3IvcXVpY2tzaWdodF9kYXRhX3NldC5odG1sI2F3c19hY2NvdW50X2lkIFF1aWNrc2lnaHREYXRhU2V0I2F3c19hY2NvdW50X2lkfVxuICAqL1xuICByZWFkb25seSBhd3NBY2NvdW50SWQ/OiBzdHJpbmc7XG4gIC8qKlxuICAqIDxwPkdyb3VwaW5ncyBvZiBjb2x1bW5zIHRoYXQgd29yayB0b2dldGhlciBpbiBjZXJ0YWluIFF1aWNrU2lnaHQgZmVhdHVyZXMuIEN1cnJlbnRseSwgb25seSBnZW9zcGF0aWFsIGhpZXJhcmNoeSBpcyBzdXBwb3J0ZWQuPC9wPlxuICAqIFxuICAqIERvY3MgYXQgVGVycmFmb3JtIFJlZ2lzdHJ5OiB7QGxpbmsgaHR0cHM6Ly93d3cudGVycmFmb3JtLmlvL2RvY3MvcHJvdmlkZXJzL2F3c2NjL3IvcXVpY2tzaWdodF9kYXRhX3NldC5odG1sI2NvbHVtbl9ncm91cHMgUXVpY2tzaWdodERhdGFTZXQjY29sdW1uX2dyb3Vwc31cbiAgKi9cbiAgcmVhZG9ubHkgY29sdW1uR3JvdXBzPzogUXVpY2tzaWdodERhdGFTZXRDb2x1bW5Hcm91cHNbXTtcbiAgLyoqXG4gICogRG9jcyBhdCBUZXJyYWZvcm0gUmVnaXN0cnk6IHtAbGluayBodHRwczovL3d3dy50ZXJyYWZvcm0uaW8vZG9jcy9wcm92aWRlcnMvYXdzY2Mvci9xdWlja3NpZ2h0X2RhdGFfc2V0Lmh0bWwjY29sdW1uX2xldmVsX3Blcm1pc3Npb25fcnVsZXMgUXVpY2tzaWdodERhdGFTZXQjY29sdW1uX2xldmVsX3Blcm1pc3Npb25fcnVsZXN9XG4gICovXG4gIHJlYWRvbmx5IGNvbHVtbkxldmVsUGVybWlzc2lvblJ1bGVzPzogUXVpY2tzaWdodERhdGFTZXRDb2x1bW5MZXZlbFBlcm1pc3Npb25SdWxlc1tdO1xuICAvKipcbiAgKiBEb2NzIGF0IFRlcnJhZm9ybSBSZWdpc3RyeToge0BsaW5rIGh0dHBzOi8vd3d3LnRlcnJhZm9ybS5pby9kb2NzL3Byb3ZpZGVycy9hd3NjYy9yL3F1aWNrc2lnaHRfZGF0YV9zZXQuaHRtbCNkYXRhX3NldF9pZCBRdWlja3NpZ2h0RGF0YVNldCNkYXRhX3NldF9pZH1cbiAgKi9cbiAgcmVhZG9ubHkgZGF0YVNldElkPzogc3RyaW5nO1xuICAvKipcbiAgKiBEb2NzIGF0IFRlcnJhZm9ybSBSZWdpc3RyeToge0BsaW5rIGh0dHBzOi8vd3d3LnRlcnJhZm9ybS5pby9kb2NzL3Byb3ZpZGVycy9hd3NjYy9yL3F1aWNrc2lnaHRfZGF0YV9zZXQuaHRtbCNmaWVsZF9mb2xkZXJzIFF1aWNrc2lnaHREYXRhU2V0I2ZpZWxkX2ZvbGRlcnN9XG4gICovXG4gIHJlYWRvbmx5IGZpZWxkRm9sZGVycz86IHsgW2tleTogc3RyaW5nXTogUXVpY2tzaWdodERhdGFTZXRGaWVsZEZvbGRlcnMgfSB8IGNka3RmLklSZXNvbHZhYmxlO1xuICAvKipcbiAgKiBEb2NzIGF0IFRlcnJhZm9ybSBSZWdpc3RyeToge0BsaW5rIGh0dHBzOi8vd3d3LnRlcnJhZm9ybS5pby9kb2NzL3Byb3ZpZGVycy9hd3NjYy9yL3F1aWNrc2lnaHRfZGF0YV9zZXQuaHRtbCNpbXBvcnRfbW9kZSBRdWlja3NpZ2h0RGF0YVNldCNpbXBvcnRfbW9kZX1cbiAgKi9cbiAgcmVhZG9ubHkgaW1wb3J0TW9kZT86IHN0cmluZztcbiAgLyoqXG4gICogPHA+V2FpdCBwb2xpY3kgdG8gdXNlIHdoZW4gY3JlYXRpbmcvdXBkYXRpbmcgZGF0YXNldC4gRGVmYXVsdCBpcyB0byB3YWl0IGZvciBTUElDRSBpbmdlc3Rpb24gdG8gZmluaXNoIHdpdGggdGltZW91dCBvZiAzNiBob3Vycy48L3A+XG4gICogXG4gICogRG9jcyBhdCBUZXJyYWZvcm0gUmVnaXN0cnk6IHtAbGluayBodHRwczovL3d3dy50ZXJyYWZvcm0uaW8vZG9jcy9wcm92aWRlcnMvYXdzY2Mvci9xdWlja3NpZ2h0X2RhdGFfc2V0Lmh0bWwjaW5nZXN0aW9uX3dhaXRfcG9saWN5IFF1aWNrc2lnaHREYXRhU2V0I2luZ2VzdGlvbl93YWl0X3BvbGljeX1cbiAgKi9cbiAgcmVhZG9ubHkgaW5nZXN0aW9uV2FpdFBvbGljeT86IFF1aWNrc2lnaHREYXRhU2V0SW5nZXN0aW9uV2FpdFBvbGljeTtcbiAgLyoqXG4gICogRG9jcyBhdCBUZXJyYWZvcm0gUmVnaXN0cnk6IHtAbGluayBodHRwczovL3d3dy50ZXJyYWZvcm0uaW8vZG9jcy9wcm92aWRlcnMvYXdzY2Mvci9xdWlja3NpZ2h0X2RhdGFfc2V0Lmh0bWwjbG9naWNhbF90YWJsZV9tYXAgUXVpY2tzaWdodERhdGFTZXQjbG9naWNhbF90YWJsZV9tYXB9XG4gICovXG4gIHJlYWRvbmx5IGxvZ2ljYWxUYWJsZU1hcD86IHsgW2tleTogc3RyaW5nXTogUXVpY2tzaWdodERhdGFTZXRMb2dpY2FsVGFibGVNYXAgfSB8IGNka3RmLklSZXNvbHZhYmxlO1xuICAvKipcbiAgKiA8cD5UaGUgZGlzcGxheSBuYW1lIGZvciB0aGUgZGF0YXNldC48L3A+XG4gICogXG4gICogRG9jcyBhdCBUZXJyYWZvcm0gUmVnaXN0cnk6IHtAbGluayBodHRwczovL3d3dy50ZXJyYWZvcm0uaW8vZG9jcy9wcm92aWRlcnMvYXdzY2Mvci9xdWlja3NpZ2h0X2RhdGFfc2V0Lmh0bWwjbmFtZSBRdWlja3NpZ2h0RGF0YVNldCNuYW1lfVxuICAqL1xuICByZWFkb25seSBuYW1lPzogc3RyaW5nO1xuICAvKipcbiAgKiA8cD5BIGxpc3Qgb2YgcmVzb3VyY2UgcGVybWlzc2lvbnMgb24gdGhlIGRhdGFzZXQuPC9wPlxuICAqIFxuICAqIERvY3MgYXQgVGVycmFmb3JtIFJlZ2lzdHJ5OiB7QGxpbmsgaHR0cHM6Ly93d3cudGVycmFmb3JtLmlvL2RvY3MvcHJvdmlkZXJzL2F3c2NjL3IvcXVpY2tzaWdodF9kYXRhX3NldC5odG1sI3Blcm1pc3Npb25zIFF1aWNrc2lnaHREYXRhU2V0I3Blcm1pc3Npb25zfVxuICAqL1xuICByZWFkb25seSBwZXJtaXNzaW9ucz86IFF1aWNrc2lnaHREYXRhU2V0UGVybWlzc2lvbnNbXTtcbiAgLyoqXG4gICogRG9jcyBhdCBUZXJyYWZvcm0gUmVnaXN0cnk6IHtAbGluayBodHRwczovL3d3dy50ZXJyYWZvcm0uaW8vZG9jcy9wcm92aWRlcnMvYXdzY2Mvci9xdWlja3NpZ2h0X2RhdGFfc2V0Lmh0bWwjcGh5c2ljYWxfdGFibGVfbWFwIFF1aWNrc2lnaHREYXRhU2V0I3BoeXNpY2FsX3RhYmxlX21hcH1cbiAgKi9cbiAgcmVhZG9ubHkgcGh5c2ljYWxUYWJsZU1hcD86IHsgW2tleTogc3RyaW5nXTogUXVpY2tzaWdodERhdGFTZXRQaHlzaWNhbFRhYmxlTWFwIH0gfCBjZGt0Zi5JUmVzb2x2YWJsZTtcbiAgLyoqXG4gICogPHA+VGhlIHJvdy1sZXZlbCBzZWN1cml0eSBjb25maWd1cmF0aW9uIGZvciB0aGUgZGF0YXNldC48L3A+XG4gICogXG4gICogRG9jcyBhdCBUZXJyYWZvcm0gUmVnaXN0cnk6IHtAbGluayBodHRwczovL3d3dy50ZXJyYWZvcm0uaW8vZG9jcy9wcm92aWRlcnMvYXdzY2Mvci9xdWlja3NpZ2h0X2RhdGFfc2V0Lmh0bWwjcm93X2xldmVsX3Blcm1pc3Npb25fZGF0YV9zZXQgUXVpY2tzaWdodERhdGFTZXQjcm93X2xldmVsX3Blcm1pc3Npb25fZGF0YV9zZXR9XG4gICovXG4gIHJlYWRvbmx5IHJvd0xldmVsUGVybWlzc2lvbkRhdGFTZXQ/OiBRdWlja3NpZ2h0RGF0YVNldFJvd0xldmVsUGVybWlzc2lvbkRhdGFTZXQ7XG4gIC8qKlxuICAqIDxwPkNvbnRhaW5zIGEgbWFwIG9mIHRoZSBrZXktdmFsdWUgcGFpcnMgZm9yIHRoZSByZXNvdXJjZSB0YWcgb3IgdGFncyBhc3NpZ25lZCB0byB0aGUgZGF0YXNldC48L3A+XG4gICogXG4gICogRG9jcyBhdCBUZXJyYWZvcm0gUmVnaXN0cnk6IHtAbGluayBodHRwczovL3d3dy50ZXJyYWZvcm0uaW8vZG9jcy9wcm92aWRlcnMvYXdzY2Mvci9xdWlja3NpZ2h0X2RhdGFfc2V0Lmh0bWwjdGFncyBRdWlja3NpZ2h0RGF0YVNldCN0YWdzfVxuICAqL1xuICByZWFkb25seSB0YWdzPzogUXVpY2tzaWdodERhdGFTZXRUYWdzW107XG59XG5leHBvcnQgaW50ZXJmYWNlIFF1aWNrc2lnaHREYXRhU2V0Q29sdW1uR3JvdXBzR2VvU3BhdGlhbENvbHVtbkdyb3VwIHtcbiAgLyoqXG4gICogPHA+Q29sdW1ucyBpbiB0aGlzIGhpZXJhcmNoeS48L3A+XG4gICogXG4gICogRG9jcyBhdCBUZXJyYWZvcm0gUmVnaXN0cnk6IHtAbGluayBodHRwczovL3d3dy50ZXJyYWZvcm0uaW8vZG9jcy9wcm92aWRlcnMvYXdzY2Mvci9xdWlja3NpZ2h0X2RhdGFfc2V0Lmh0bWwjY29sdW1ucyBRdWlja3NpZ2h0RGF0YVNldCNjb2x1bW5zfVxuICAqL1xuICByZWFkb25seSBjb2x1bW5zOiBzdHJpbmdbXTtcbiAgLyoqXG4gICogRG9jcyBhdCBUZXJyYWZvcm0gUmVnaXN0cnk6IHtAbGluayBodHRwczovL3d3dy50ZXJyYWZvcm0uaW8vZG9jcy9wcm92aWRlcnMvYXdzY2Mvci9xdWlja3NpZ2h0X2RhdGFfc2V0Lmh0bWwjY291bnRyeV9jb2RlIFF1aWNrc2lnaHREYXRhU2V0I2NvdW50cnlfY29kZX1cbiAgKi9cbiAgcmVhZG9ubHkgY291bnRyeUNvZGU/OiBzdHJpbmc7XG4gIC8qKlxuICAqIDxwPkEgZGlzcGxheSBuYW1lIGZvciB0aGUgaGllcmFyY2h5LjwvcD5cbiAgKiBcbiAgKiBEb2NzIGF0IFRlcnJhZm9ybSBSZWdpc3RyeToge0BsaW5rIGh0dHBzOi8vd3d3LnRlcnJhZm9ybS5pby9kb2NzL3Byb3ZpZGVycy9hd3NjYy9yL3F1aWNrc2lnaHRfZGF0YV9zZXQuaHRtbCNuYW1lIFF1aWNrc2lnaHREYXRhU2V0I25hbWV9XG4gICovXG4gIHJlYWRvbmx5IG5hbWU6IHN0cmluZztcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIHF1aWNrc2lnaHREYXRhU2V0Q29sdW1uR3JvdXBzR2VvU3BhdGlhbENvbHVtbkdyb3VwVG9UZXJyYWZvcm0oc3RydWN0PzogUXVpY2tzaWdodERhdGFTZXRDb2x1bW5Hcm91cHNHZW9TcGF0aWFsQ29sdW1uR3JvdXApOiBhbnkge1xuICBpZiAoIWNka3RmLmNhbkluc3BlY3Qoc3RydWN0KSkgeyByZXR1cm4gc3RydWN0OyB9XG4gIHJldHVybiB7XG4gICAgY29sdW1uczogY2RrdGYubGlzdE1hcHBlcihjZGt0Zi5zdHJpbmdUb1RlcnJhZm9ybSkoc3RydWN0IS5jb2x1bW5zKSxcbiAgICBjb3VudHJ5X2NvZGU6IGNka3RmLnN0cmluZ1RvVGVycmFmb3JtKHN0cnVjdCEuY291bnRyeUNvZGUpLFxuICAgIG5hbWU6IGNka3RmLnN0cmluZ1RvVGVycmFmb3JtKHN0cnVjdCEubmFtZSksXG4gIH1cbn1cblxuZXhwb3J0IGludGVyZmFjZSBRdWlja3NpZ2h0RGF0YVNldENvbHVtbkdyb3VwcyB7XG4gIC8qKlxuICAqIDxwPkdlb3NwYXRpYWwgY29sdW1uIGdyb3VwIHRoYXQgZGVub3RlcyBhIGhpZXJhcmNoeS48L3A+XG4gICogXG4gICogRG9jcyBhdCBUZXJyYWZvcm0gUmVnaXN0cnk6IHtAbGluayBodHRwczovL3d3dy50ZXJyYWZvcm0uaW8vZG9jcy9wcm92aWRlcnMvYXdzY2Mvci9xdWlja3NpZ2h0X2RhdGFfc2V0Lmh0bWwjZ2VvX3NwYXRpYWxfY29sdW1uX2dyb3VwIFF1aWNrc2lnaHREYXRhU2V0I2dlb19zcGF0aWFsX2NvbHVtbl9ncm91cH1cbiAgKi9cbiAgcmVhZG9ubHkgZ2VvU3BhdGlhbENvbHVtbkdyb3VwPzogUXVpY2tzaWdodERhdGFTZXRDb2x1bW5Hcm91cHNHZW9TcGF0aWFsQ29sdW1uR3JvdXA7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBxdWlja3NpZ2h0RGF0YVNldENvbHVtbkdyb3Vwc1RvVGVycmFmb3JtKHN0cnVjdD86IFF1aWNrc2lnaHREYXRhU2V0Q29sdW1uR3JvdXBzKTogYW55IHtcbiAgaWYgKCFjZGt0Zi5jYW5JbnNwZWN0KHN0cnVjdCkpIHsgcmV0dXJuIHN0cnVjdDsgfVxuICByZXR1cm4ge1xuICAgIGdlb19zcGF0aWFsX2NvbHVtbl9ncm91cDogcXVpY2tzaWdodERhdGFTZXRDb2x1bW5Hcm91cHNHZW9TcGF0aWFsQ29sdW1uR3JvdXBUb1RlcnJhZm9ybShzdHJ1Y3QhLmdlb1NwYXRpYWxDb2x1bW5Hcm91cCksXG4gIH1cbn1cblxuZXhwb3J0IGludGVyZmFjZSBRdWlja3NpZ2h0RGF0YVNldENvbHVtbkxldmVsUGVybWlzc2lvblJ1bGVzIHtcbiAgLyoqXG4gICogRG9jcyBhdCBUZXJyYWZvcm0gUmVnaXN0cnk6IHtAbGluayBodHRwczovL3d3dy50ZXJyYWZvcm0uaW8vZG9jcy9wcm92aWRlcnMvYXdzY2Mvci9xdWlja3NpZ2h0X2RhdGFfc2V0Lmh0bWwjY29sdW1uX25hbWVzIFF1aWNrc2lnaHREYXRhU2V0I2NvbHVtbl9uYW1lc31cbiAgKi9cbiAgcmVhZG9ubHkgY29sdW1uTmFtZXM/OiBzdHJpbmdbXTtcbiAgLyoqXG4gICogRG9jcyBhdCBUZXJyYWZvcm0gUmVnaXN0cnk6IHtAbGluayBodHRwczovL3d3dy50ZXJyYWZvcm0uaW8vZG9jcy9wcm92aWRlcnMvYXdzY2Mvci9xdWlja3NpZ2h0X2RhdGFfc2V0Lmh0bWwjcHJpbmNpcGFscyBRdWlja3NpZ2h0RGF0YVNldCNwcmluY2lwYWxzfVxuICAqL1xuICByZWFkb25seSBwcmluY2lwYWxzPzogc3RyaW5nW107XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBxdWlja3NpZ2h0RGF0YVNldENvbHVtbkxldmVsUGVybWlzc2lvblJ1bGVzVG9UZXJyYWZvcm0oc3RydWN0PzogUXVpY2tzaWdodERhdGFTZXRDb2x1bW5MZXZlbFBlcm1pc3Npb25SdWxlcyk6IGFueSB7XG4gIGlmICghY2RrdGYuY2FuSW5zcGVjdChzdHJ1Y3QpKSB7IHJldHVybiBzdHJ1Y3Q7IH1cbiAgcmV0dXJuIHtcbiAgICBjb2x1bW5fbmFtZXM6IGNka3RmLmxpc3RNYXBwZXIoY2RrdGYuc3RyaW5nVG9UZXJyYWZvcm0pKHN0cnVjdCEuY29sdW1uTmFtZXMpLFxuICAgIHByaW5jaXBhbHM6IGNka3RmLmxpc3RNYXBwZXIoY2RrdGYuc3RyaW5nVG9UZXJyYWZvcm0pKHN0cnVjdCEucHJpbmNpcGFscyksXG4gIH1cbn1cblxuZXhwb3J0IGludGVyZmFjZSBRdWlja3NpZ2h0RGF0YVNldEZpZWxkRm9sZGVycyB7XG4gIC8qKlxuICAqIERvY3MgYXQgVGVycmFmb3JtIFJlZ2lzdHJ5OiB7QGxpbmsgaHR0cHM6Ly93d3cudGVycmFmb3JtLmlvL2RvY3MvcHJvdmlkZXJzL2F3c2NjL3IvcXVpY2tzaWdodF9kYXRhX3NldC5odG1sI2NvbHVtbnMgUXVpY2tzaWdodERhdGFTZXQjY29sdW1uc31cbiAgKi9cbiAgcmVhZG9ubHkgY29sdW1ucz86IHN0cmluZ1tdO1xuICAvKipcbiAgKiBEb2NzIGF0IFRlcnJhZm9ybSBSZWdpc3RyeToge0BsaW5rIGh0dHBzOi8vd3d3LnRlcnJhZm9ybS5pby9kb2NzL3Byb3ZpZGVycy9hd3NjYy9yL3F1aWNrc2lnaHRfZGF0YV9zZXQuaHRtbCNkZXNjcmlwdGlvbiBRdWlja3NpZ2h0RGF0YVNldCNkZXNjcmlwdGlvbn1cbiAgKi9cbiAgcmVhZG9ubHkgZGVzY3JpcHRpb24/OiBzdHJpbmc7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBxdWlja3NpZ2h0RGF0YVNldEZpZWxkRm9sZGVyc1RvVGVycmFmb3JtKHN0cnVjdD86IFF1aWNrc2lnaHREYXRhU2V0RmllbGRGb2xkZXJzKTogYW55IHtcbiAgaWYgKCFjZGt0Zi5jYW5JbnNwZWN0KHN0cnVjdCkpIHsgcmV0dXJuIHN0cnVjdDsgfVxuICByZXR1cm4ge1xuICAgIGNvbHVtbnM6IGNka3RmLmxpc3RNYXBwZXIoY2RrdGYuc3RyaW5nVG9UZXJyYWZvcm0pKHN0cnVjdCEuY29sdW1ucyksXG4gICAgZGVzY3JpcHRpb246IGNka3RmLnN0cmluZ1RvVGVycmFmb3JtKHN0cnVjdCEuZGVzY3JpcHRpb24pLFxuICB9XG59XG5cbmV4cG9ydCBpbnRlcmZhY2UgUXVpY2tzaWdodERhdGFTZXRJbmdlc3Rpb25XYWl0UG9saWN5IHtcbiAgLyoqXG4gICogPHA+VGhlIG1heGltdW0gdGltZSAoaW4gaG91cnMpIHRvIHdhaXQgZm9yIEluZ2VzdGlvbiB0byBjb21wbGV0ZS4gRGVmYXVsdCB0aW1lb3V0IGlzIDM2IGhvdXJzLlxuIEFwcGxpY2FibGUgb25seSB3aGVuIERhdGFTZXRJbXBvcnRNb2RlIG1vZGUgaXMgc2V0IHRvIFNQSUNFIGFuZCBXYWl0Rm9yU3BpY2VJbmdlc3Rpb24gaXMgc2V0IHRvIHRydWUuPC9wPlxuICAqIFxuICAqIERvY3MgYXQgVGVycmFmb3JtIFJlZ2lzdHJ5OiB7QGxpbmsgaHR0cHM6Ly93d3cudGVycmFmb3JtLmlvL2RvY3MvcHJvdmlkZXJzL2F3c2NjL3IvcXVpY2tzaWdodF9kYXRhX3NldC5odG1sI2luZ2VzdGlvbl93YWl0X3RpbWVfaW5faG91cnMgUXVpY2tzaWdodERhdGFTZXQjaW5nZXN0aW9uX3dhaXRfdGltZV9pbl9ob3Vyc31cbiAgKi9cbiAgcmVhZG9ubHkgaW5nZXN0aW9uV2FpdFRpbWVJbkhvdXJzPzogbnVtYmVyO1xuICAvKipcbiAgKiA8cD5XYWl0IGZvciBTUElDRSBpbmdlc3Rpb24gdG8gZmluaXNoIHRvIG1hcmsgZGF0YXNldCBjcmVhdGlvbi91cGRhdGUgc3VjY2Vzc2Z1bC4gRGVmYXVsdCAodHJ1ZSkuXG4gIEFwcGxpY2FibGUgb25seSB3aGVuIERhdGFTZXRJbXBvcnRNb2RlIG1vZGUgaXMgc2V0IHRvIFNQSUNFLjwvcD5cbiAgKiBcbiAgKiBEb2NzIGF0IFRlcnJhZm9ybSBSZWdpc3RyeToge0BsaW5rIGh0dHBzOi8vd3d3LnRlcnJhZm9ybS5pby9kb2NzL3Byb3ZpZGVycy9hd3NjYy9yL3F1aWNrc2lnaHRfZGF0YV9zZXQuaHRtbCN3YWl0X2Zvcl9zcGljZV9pbmdlc3Rpb24gUXVpY2tzaWdodERhdGFTZXQjd2FpdF9mb3Jfc3BpY2VfaW5nZXN0aW9ufVxuICAqL1xuICByZWFkb25seSB3YWl0Rm9yU3BpY2VJbmdlc3Rpb24/OiBib29sZWFuIHwgY2RrdGYuSVJlc29sdmFibGU7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBxdWlja3NpZ2h0RGF0YVNldEluZ2VzdGlvbldhaXRQb2xpY3lUb1RlcnJhZm9ybShzdHJ1Y3Q/OiBRdWlja3NpZ2h0RGF0YVNldEluZ2VzdGlvbldhaXRQb2xpY3kpOiBhbnkge1xuICBpZiAoIWNka3RmLmNhbkluc3BlY3Qoc3RydWN0KSkgeyByZXR1cm4gc3RydWN0OyB9XG4gIHJldHVybiB7XG4gICAgaW5nZXN0aW9uX3dhaXRfdGltZV9pbl9ob3VyczogY2RrdGYubnVtYmVyVG9UZXJyYWZvcm0oc3RydWN0IS5pbmdlc3Rpb25XYWl0VGltZUluSG91cnMpLFxuICAgIHdhaXRfZm9yX3NwaWNlX2luZ2VzdGlvbjogY2RrdGYuYm9vbGVhblRvVGVycmFmb3JtKHN0cnVjdCEud2FpdEZvclNwaWNlSW5nZXN0aW9uKSxcbiAgfVxufVxuXG5leHBvcnQgaW50ZXJmYWNlIFF1aWNrc2lnaHREYXRhU2V0TG9naWNhbFRhYmxlTWFwRGF0YVRyYW5zZm9ybXNDYXN0Q29sdW1uVHlwZU9wZXJhdGlvbiB7XG4gIC8qKlxuICAqIDxwPkNvbHVtbiBuYW1lLjwvcD5cbiAgKiBcbiAgKiBEb2NzIGF0IFRlcnJhZm9ybSBSZWdpc3RyeToge0BsaW5rIGh0dHBzOi8vd3d3LnRlcnJhZm9ybS5pby9kb2NzL3Byb3ZpZGVycy9hd3NjYy9yL3F1aWNrc2lnaHRfZGF0YV9zZXQuaHRtbCNjb2x1bW5fbmFtZSBRdWlja3NpZ2h0RGF0YVNldCNjb2x1bW5fbmFtZX1cbiAgKi9cbiAgcmVhZG9ubHkgY29sdW1uTmFtZTogc3RyaW5nO1xuICAvKipcbiAgKiA8cD5XaGVuIGNhc3RpbmcgYSBjb2x1bW4gZnJvbSBzdHJpbmcgdG8gZGF0ZXRpbWUgdHlwZSwgeW91IGNhbiBzdXBwbHkgYSBzdHJpbmcgaW4gYVxuICAgICAgICAgICAgZm9ybWF0IHN1cHBvcnRlZCBieSBBbWF6b24gUXVpY2tTaWdodCB0byBkZW5vdGUgdGhlIHNvdXJjZSBkYXRhIGZvcm1hdC48L3A+XG4gICogXG4gICogRG9jcyBhdCBUZXJyYWZvcm0gUmVnaXN0cnk6IHtAbGluayBodHRwczovL3d3dy50ZXJyYWZvcm0uaW8vZG9jcy9wcm92aWRlcnMvYXdzY2Mvci9xdWlja3NpZ2h0X2RhdGFfc2V0Lmh0bWwjZm9ybWF0IFF1aWNrc2lnaHREYXRhU2V0I2Zvcm1hdH1cbiAgKi9cbiAgcmVhZG9ubHkgZm9ybWF0Pzogc3RyaW5nO1xuICAvKipcbiAgKiBEb2NzIGF0IFRlcnJhZm9ybSBSZWdpc3RyeToge0BsaW5rIGh0dHBzOi8vd3d3LnRlcnJhZm9ybS5pby9kb2NzL3Byb3ZpZGVycy9hd3NjYy9yL3F1aWNrc2lnaHRfZGF0YV9zZXQuaHRtbCNuZXdfY29sdW1uX3R5cGUgUXVpY2tzaWdodERhdGFTZXQjbmV3X2NvbHVtbl90eXBlfVxuICAqL1xuICByZWFkb25seSBuZXdDb2x1bW5UeXBlOiBzdHJpbmc7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBxdWlja3NpZ2h0RGF0YVNldExvZ2ljYWxUYWJsZU1hcERhdGFUcmFuc2Zvcm1zQ2FzdENvbHVtblR5cGVPcGVyYXRpb25Ub1RlcnJhZm9ybShzdHJ1Y3Q/OiBRdWlja3NpZ2h0RGF0YVNldExvZ2ljYWxUYWJsZU1hcERhdGFUcmFuc2Zvcm1zQ2FzdENvbHVtblR5cGVPcGVyYXRpb24pOiBhbnkge1xuICBpZiAoIWNka3RmLmNhbkluc3BlY3Qoc3RydWN0KSkgeyByZXR1cm4gc3RydWN0OyB9XG4gIHJldHVybiB7XG4gICAgY29sdW1uX25hbWU6IGNka3RmLnN0cmluZ1RvVGVycmFmb3JtKHN0cnVjdCEuY29sdW1uTmFtZSksXG4gICAgZm9ybWF0OiBjZGt0Zi5zdHJpbmdUb1RlcnJhZm9ybShzdHJ1Y3QhLmZvcm1hdCksXG4gICAgbmV3X2NvbHVtbl90eXBlOiBjZGt0Zi5zdHJpbmdUb1RlcnJhZm9ybShzdHJ1Y3QhLm5ld0NvbHVtblR5cGUpLFxuICB9XG59XG5cbmV4cG9ydCBpbnRlcmZhY2UgUXVpY2tzaWdodERhdGFTZXRMb2dpY2FsVGFibGVNYXBEYXRhVHJhbnNmb3Jtc0NyZWF0ZUNvbHVtbnNPcGVyYXRpb25Db2x1bW5zIHtcbiAgLyoqXG4gICogPHA+QSB1bmlxdWUgSUQgdG8gaWRlbnRpZnkgYSBjYWxjdWxhdGVkIGNvbHVtbi4gRHVyaW5nIGEgZGF0YXNldCB1cGRhdGUsIGlmIHRoZSBjb2x1bW4gSURcbiAgICAgICAgICAgIG9mIGEgY2FsY3VsYXRlZCBjb2x1bW4gbWF0Y2hlcyB0aGF0IG9mIGFuIGV4aXN0aW5nIGNhbGN1bGF0ZWQgY29sdW1uLCBBbWF6b24gUXVpY2tTaWdodFxuICAgICAgICAgICAgcHJlc2VydmVzIHRoZSBleGlzdGluZyBjYWxjdWxhdGVkIGNvbHVtbi48L3A+XG4gICogXG4gICogRG9jcyBhdCBUZXJyYWZvcm0gUmVnaXN0cnk6IHtAbGluayBodHRwczovL3d3dy50ZXJyYWZvcm0uaW8vZG9jcy9wcm92aWRlcnMvYXdzY2Mvci9xdWlja3NpZ2h0X2RhdGFfc2V0Lmh0bWwjY29sdW1uX2lkIFF1aWNrc2lnaHREYXRhU2V0I2NvbHVtbl9pZH1cbiAgKi9cbiAgcmVhZG9ubHkgY29sdW1uSWQ6IHN0cmluZztcbiAgLyoqXG4gICogPHA+Q29sdW1uIG5hbWUuPC9wPlxuICAqIFxuICAqIERvY3MgYXQgVGVycmFmb3JtIFJlZ2lzdHJ5OiB7QGxpbmsgaHR0cHM6Ly93d3cudGVycmFmb3JtLmlvL2RvY3MvcHJvdmlkZXJzL2F3c2NjL3IvcXVpY2tzaWdodF9kYXRhX3NldC5odG1sI2NvbHVtbl9uYW1lIFF1aWNrc2lnaHREYXRhU2V0I2NvbHVtbl9uYW1lfVxuICAqL1xuICByZWFkb25seSBjb2x1bW5OYW1lOiBzdHJpbmc7XG4gIC8qKlxuICAqIDxwPkFuIGV4cHJlc3Npb24gdGhhdCBkZWZpbmVzIHRoZSBjYWxjdWxhdGVkIGNvbHVtbi48L3A+XG4gICogXG4gICogRG9jcyBhdCBUZXJyYWZvcm0gUmVnaXN0cnk6IHtAbGluayBodHRwczovL3d3dy50ZXJyYWZvcm0uaW8vZG9jcy9wcm92aWRlcnMvYXdzY2Mvci9xdWlja3NpZ2h0X2RhdGFfc2V0Lmh0bWwjZXhwcmVzc2lvbiBRdWlja3NpZ2h0RGF0YVNldCNleHByZXNzaW9ufVxuICAqL1xuICByZWFkb25seSBleHByZXNzaW9uOiBzdHJpbmc7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBxdWlja3NpZ2h0RGF0YVNldExvZ2ljYWxUYWJsZU1hcERhdGFUcmFuc2Zvcm1zQ3JlYXRlQ29sdW1uc09wZXJhdGlvbkNvbHVtbnNUb1RlcnJhZm9ybShzdHJ1Y3Q/OiBRdWlja3NpZ2h0RGF0YVNldExvZ2ljYWxUYWJsZU1hcERhdGFUcmFuc2Zvcm1zQ3JlYXRlQ29sdW1uc09wZXJhdGlvbkNvbHVtbnMpOiBhbnkge1xuICBpZiAoIWNka3RmLmNhbkluc3BlY3Qoc3RydWN0KSkgeyByZXR1cm4gc3RydWN0OyB9XG4gIHJldHVybiB7XG4gICAgY29sdW1uX2lkOiBjZGt0Zi5zdHJpbmdUb1RlcnJhZm9ybShzdHJ1Y3QhLmNvbHVtbklkKSxcbiAgICBjb2x1bW5fbmFtZTogY2RrdGYuc3RyaW5nVG9UZXJyYWZvcm0oc3RydWN0IS5jb2x1bW5OYW1lKSxcbiAgICBleHByZXNzaW9uOiBjZGt0Zi5zdHJpbmdUb1RlcnJhZm9ybShzdHJ1Y3QhLmV4cHJlc3Npb24pLFxuICB9XG59XG5cbmV4cG9ydCBpbnRlcmZhY2UgUXVpY2tzaWdodERhdGFTZXRMb2dpY2FsVGFibGVNYXBEYXRhVHJhbnNmb3Jtc0NyZWF0ZUNvbHVtbnNPcGVyYXRpb24ge1xuICAvKipcbiAgKiA8cD5DYWxjdWxhdGVkIGNvbHVtbnMgdG8gY3JlYXRlLjwvcD5cbiAgKiBcbiAgKiBEb2NzIGF0IFRlcnJhZm9ybSBSZWdpc3RyeToge0BsaW5rIGh0dHBzOi8vd3d3LnRlcnJhZm9ybS5pby9kb2NzL3Byb3ZpZGVycy9hd3NjYy9yL3F1aWNrc2lnaHRfZGF0YV9zZXQuaHRtbCNjb2x1bW5zIFF1aWNrc2lnaHREYXRhU2V0I2NvbHVtbnN9XG4gICovXG4gIHJlYWRvbmx5IGNvbHVtbnM6IFF1aWNrc2lnaHREYXRhU2V0TG9naWNhbFRhYmxlTWFwRGF0YVRyYW5zZm9ybXNDcmVhdGVDb2x1bW5zT3BlcmF0aW9uQ29sdW1uc1tdO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gcXVpY2tzaWdodERhdGFTZXRMb2dpY2FsVGFibGVNYXBEYXRhVHJhbnNmb3Jtc0NyZWF0ZUNvbHVtbnNPcGVyYXRpb25Ub1RlcnJhZm9ybShzdHJ1Y3Q/OiBRdWlja3NpZ2h0RGF0YVNldExvZ2ljYWxUYWJsZU1hcERhdGFUcmFuc2Zvcm1zQ3JlYXRlQ29sdW1uc09wZXJhdGlvbik6IGFueSB7XG4gIGlmICghY2RrdGYuY2FuSW5zcGVjdChzdHJ1Y3QpKSB7IHJldHVybiBzdHJ1Y3Q7IH1cbiAgcmV0dXJuIHtcbiAgICBjb2x1bW5zOiBjZGt0Zi5saXN0TWFwcGVyKHF1aWNrc2lnaHREYXRhU2V0TG9naWNhbFRhYmxlTWFwRGF0YVRyYW5zZm9ybXNDcmVhdGVDb2x1bW5zT3BlcmF0aW9uQ29sdW1uc1RvVGVycmFmb3JtKShzdHJ1Y3QhLmNvbHVtbnMpLFxuICB9XG59XG5cbmV4cG9ydCBpbnRlcmZhY2UgUXVpY2tzaWdodERhdGFTZXRMb2dpY2FsVGFibGVNYXBEYXRhVHJhbnNmb3Jtc0ZpbHRlck9wZXJhdGlvbiB7XG4gIC8qKlxuICAqIDxwPkFuIGV4cHJlc3Npb24gdGhhdCBtdXN0IGV2YWx1YXRlIHRvIGEgQm9vbGVhbiB2YWx1ZS4gUm93cyBmb3Igd2hpY2ggdGhlIGV4cHJlc3Npb25cbiAgICAgICAgICAgIGV2YWx1YXRlcyB0byB0cnVlIGFyZSBrZXB0IGluIHRoZSBkYXRhc2V0LjwvcD5cbiAgKiBcbiAgKiBEb2NzIGF0IFRlcnJhZm9ybSBSZWdpc3RyeToge0BsaW5rIGh0dHBzOi8vd3d3LnRlcnJhZm9ybS5pby9kb2NzL3Byb3ZpZGVycy9hd3NjYy9yL3F1aWNrc2lnaHRfZGF0YV9zZXQuaHRtbCNjb25kaXRpb25fZXhwcmVzc2lvbiBRdWlja3NpZ2h0RGF0YVNldCNjb25kaXRpb25fZXhwcmVzc2lvbn1cbiAgKi9cbiAgcmVhZG9ubHkgY29uZGl0aW9uRXhwcmVzc2lvbjogc3RyaW5nO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gcXVpY2tzaWdodERhdGFTZXRMb2dpY2FsVGFibGVNYXBEYXRhVHJhbnNmb3Jtc0ZpbHRlck9wZXJhdGlvblRvVGVycmFmb3JtKHN0cnVjdD86IFF1aWNrc2lnaHREYXRhU2V0TG9naWNhbFRhYmxlTWFwRGF0YVRyYW5zZm9ybXNGaWx0ZXJPcGVyYXRpb24pOiBhbnkge1xuICBpZiAoIWNka3RmLmNhbkluc3BlY3Qoc3RydWN0KSkgeyByZXR1cm4gc3RydWN0OyB9XG4gIHJldHVybiB7XG4gICAgY29uZGl0aW9uX2V4cHJlc3Npb246IGNka3RmLnN0cmluZ1RvVGVycmFmb3JtKHN0cnVjdCEuY29uZGl0aW9uRXhwcmVzc2lvbiksXG4gIH1cbn1cblxuZXhwb3J0IGludGVyZmFjZSBRdWlja3NpZ2h0RGF0YVNldExvZ2ljYWxUYWJsZU1hcERhdGFUcmFuc2Zvcm1zUHJvamVjdE9wZXJhdGlvbiB7XG4gIC8qKlxuICAqIDxwPlByb2plY3RlZCBjb2x1bW5zLjwvcD5cbiAgKiBcbiAgKiBEb2NzIGF0IFRlcnJhZm9ybSBSZWdpc3RyeToge0BsaW5rIGh0dHBzOi8vd3d3LnRlcnJhZm9ybS5pby9kb2NzL3Byb3ZpZGVycy9hd3NjYy9yL3F1aWNrc2lnaHRfZGF0YV9zZXQuaHRtbCNwcm9qZWN0ZWRfY29sdW1ucyBRdWlja3NpZ2h0RGF0YVNldCNwcm9qZWN0ZWRfY29sdW1uc31cbiAgKi9cbiAgcmVhZG9ubHkgcHJvamVjdGVkQ29sdW1uczogc3RyaW5nW107XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBxdWlja3NpZ2h0RGF0YVNldExvZ2ljYWxUYWJsZU1hcERhdGFUcmFuc2Zvcm1zUHJvamVjdE9wZXJhdGlvblRvVGVycmFmb3JtKHN0cnVjdD86IFF1aWNrc2lnaHREYXRhU2V0TG9naWNhbFRhYmxlTWFwRGF0YVRyYW5zZm9ybXNQcm9qZWN0T3BlcmF0aW9uKTogYW55IHtcbiAgaWYgKCFjZGt0Zi5jYW5JbnNwZWN0KHN0cnVjdCkpIHsgcmV0dXJuIHN0cnVjdDsgfVxuICByZXR1cm4ge1xuICAgIHByb2plY3RlZF9jb2x1bW5zOiBjZGt0Zi5saXN0TWFwcGVyKGNka3RmLnN0cmluZ1RvVGVycmFmb3JtKShzdHJ1Y3QhLnByb2plY3RlZENvbHVtbnMpLFxuICB9XG59XG5cbmV4cG9ydCBpbnRlcmZhY2UgUXVpY2tzaWdodERhdGFTZXRMb2dpY2FsVGFibGVNYXBEYXRhVHJhbnNmb3Jtc1JlbmFtZUNvbHVtbk9wZXJhdGlvbiB7XG4gIC8qKlxuICAqIDxwPlRoZSBuYW1lIG9mIHRoZSBjb2x1bW4gdG8gYmUgcmVuYW1lZC48L3A+XG4gICogXG4gICogRG9jcyBhdCBUZXJyYWZvcm0gUmVnaXN0cnk6IHtAbGluayBodHRwczovL3d3dy50ZXJyYWZvcm0uaW8vZG9jcy9wcm92aWRlcnMvYXdzY2Mvci9xdWlja3NpZ2h0X2RhdGFfc2V0Lmh0bWwjY29sdW1uX25hbWUgUXVpY2tzaWdodERhdGFTZXQjY29sdW1uX25hbWV9XG4gICovXG4gIHJlYWRvbmx5IGNvbHVtbk5hbWU6IHN0cmluZztcbiAgLyoqXG4gICogPHA+VGhlIG5ldyBuYW1lIGZvciB0aGUgY29sdW1uLjwvcD5cbiAgKiBcbiAgKiBEb2NzIGF0IFRlcnJhZm9ybSBSZWdpc3RyeToge0BsaW5rIGh0dHBzOi8vd3d3LnRlcnJhZm9ybS5pby9kb2NzL3Byb3ZpZGVycy9hd3NjYy9yL3F1aWNrc2lnaHRfZGF0YV9zZXQuaHRtbCNuZXdfY29sdW1uX25hbWUgUXVpY2tzaWdodERhdGFTZXQjbmV3X2NvbHVtbl9uYW1lfVxuICAqL1xuICByZWFkb25seSBuZXdDb2x1bW5OYW1lOiBzdHJpbmc7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBxdWlja3NpZ2h0RGF0YVNldExvZ2ljYWxUYWJsZU1hcERhdGFUcmFuc2Zvcm1zUmVuYW1lQ29sdW1uT3BlcmF0aW9uVG9UZXJyYWZvcm0oc3RydWN0PzogUXVpY2tzaWdodERhdGFTZXRMb2dpY2FsVGFibGVNYXBEYXRhVHJhbnNmb3Jtc1JlbmFtZUNvbHVtbk9wZXJhdGlvbik6IGFueSB7XG4gIGlmICghY2RrdGYuY2FuSW5zcGVjdChzdHJ1Y3QpKSB7IHJldHVybiBzdHJ1Y3Q7IH1cbiAgcmV0dXJuIHtcbiAgICBjb2x1bW5fbmFtZTogY2RrdGYuc3RyaW5nVG9UZXJyYWZvcm0oc3RydWN0IS5jb2x1bW5OYW1lKSxcbiAgICBuZXdfY29sdW1uX25hbWU6IGNka3RmLnN0cmluZ1RvVGVycmFmb3JtKHN0cnVjdCEubmV3Q29sdW1uTmFtZSksXG4gIH1cbn1cblxuZXhwb3J0IGludGVyZmFjZSBRdWlja3NpZ2h0RGF0YVNldExvZ2ljYWxUYWJsZU1hcERhdGFUcmFuc2Zvcm1zVGFnQ29sdW1uT3BlcmF0aW9uVGFnc0NvbHVtbkRlc2NyaXB0aW9uIHtcbiAgLyoqXG4gICogPHA+VGhlIHRleHQgb2YgYSBkZXNjcmlwdGlvbiBmb3IgYSBjb2x1bW4uPC9wPlxuICAqIFxuICAqIERvY3MgYXQgVGVycmFmb3JtIFJlZ2lzdHJ5OiB7QGxpbmsgaHR0cHM6Ly93d3cudGVycmFmb3JtLmlvL2RvY3MvcHJvdmlkZXJzL2F3c2NjL3IvcXVpY2tzaWdodF9kYXRhX3NldC5odG1sI3RleHQgUXVpY2tzaWdodERhdGFTZXQjdGV4dH1cbiAgKi9cbiAgcmVhZG9ubHkgdGV4dD86IHN0cmluZztcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIHF1aWNrc2lnaHREYXRhU2V0TG9naWNhbFRhYmxlTWFwRGF0YVRyYW5zZm9ybXNUYWdDb2x1bW5PcGVyYXRpb25UYWdzQ29sdW1uRGVzY3JpcHRpb25Ub1RlcnJhZm9ybShzdHJ1Y3Q/OiBRdWlja3NpZ2h0RGF0YVNldExvZ2ljYWxUYWJsZU1hcERhdGFUcmFuc2Zvcm1zVGFnQ29sdW1uT3BlcmF0aW9uVGFnc0NvbHVtbkRlc2NyaXB0aW9uKTogYW55IHtcbiAgaWYgKCFjZGt0Zi5jYW5JbnNwZWN0KHN0cnVjdCkpIHsgcmV0dXJuIHN0cnVjdDsgfVxuICByZXR1cm4ge1xuICAgIHRleHQ6IGNka3RmLnN0cmluZ1RvVGVycmFmb3JtKHN0cnVjdCEudGV4dCksXG4gIH1cbn1cblxuZXhwb3J0IGludGVyZmFjZSBRdWlja3NpZ2h0RGF0YVNldExvZ2ljYWxUYWJsZU1hcERhdGFUcmFuc2Zvcm1zVGFnQ29sdW1uT3BlcmF0aW9uVGFncyB7XG4gIC8qKlxuICAqIDxwPk1ldGFkYXRhIHRoYXQgY29udGFpbnMgYSBkZXNjcmlwdGlvbiBmb3IgYSBjb2x1bW4uPC9wPlxuICAqIFxuICAqIERvY3MgYXQgVGVycmFmb3JtIFJlZ2lzdHJ5OiB7QGxpbmsgaHR0cHM6Ly93d3cudGVycmFmb3JtLmlvL2RvY3MvcHJvdmlkZXJzL2F3c2NjL3IvcXVpY2tzaWdodF9kYXRhX3NldC5odG1sI2NvbHVtbl9kZXNjcmlwdGlvbiBRdWlja3NpZ2h0RGF0YVNldCNjb2x1bW5fZGVzY3JpcHRpb259XG4gICovXG4gIHJlYWRvbmx5IGNvbHVtbkRlc2NyaXB0aW9uPzogUXVpY2tzaWdodERhdGFTZXRMb2dpY2FsVGFibGVNYXBEYXRhVHJhbnNmb3Jtc1RhZ0NvbHVtbk9wZXJhdGlvblRhZ3NDb2x1bW5EZXNjcmlwdGlvbjtcbiAgLyoqXG4gICogRG9jcyBhdCBUZXJyYWZvcm0gUmVnaXN0cnk6IHtAbGluayBodHRwczovL3d3dy50ZXJyYWZvcm0uaW8vZG9jcy9wcm92aWRlcnMvYXdzY2Mvci9xdWlja3NpZ2h0X2RhdGFfc2V0Lmh0bWwjY29sdW1uX2dlb2dyYXBoaWNfcm9sZSBRdWlja3NpZ2h0RGF0YVNldCNjb2x1bW5fZ2VvZ3JhcGhpY19yb2xlfVxuICAqL1xuICByZWFkb25seSBjb2x1bW5HZW9ncmFwaGljUm9sZT86IHN0cmluZztcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIHF1aWNrc2lnaHREYXRhU2V0TG9naWNhbFRhYmxlTWFwRGF0YVRyYW5zZm9ybXNUYWdDb2x1bW5PcGVyYXRpb25UYWdzVG9UZXJyYWZvcm0oc3RydWN0PzogUXVpY2tzaWdodERhdGFTZXRMb2dpY2FsVGFibGVNYXBEYXRhVHJhbnNmb3Jtc1RhZ0NvbHVtbk9wZXJhdGlvblRhZ3MpOiBhbnkge1xuICBpZiAoIWNka3RmLmNhbkluc3BlY3Qoc3RydWN0KSkgeyByZXR1cm4gc3RydWN0OyB9XG4gIHJldHVybiB7XG4gICAgY29sdW1uX2Rlc2NyaXB0aW9uOiBxdWlja3NpZ2h0RGF0YVNldExvZ2ljYWxUYWJsZU1hcERhdGFUcmFuc2Zvcm1zVGFnQ29sdW1uT3BlcmF0aW9uVGFnc0NvbHVtbkRlc2NyaXB0aW9uVG9UZXJyYWZvcm0oc3RydWN0IS5jb2x1bW5EZXNjcmlwdGlvbiksXG4gICAgY29sdW1uX2dlb2dyYXBoaWNfcm9sZTogY2RrdGYuc3RyaW5nVG9UZXJyYWZvcm0oc3RydWN0IS5jb2x1bW5HZW9ncmFwaGljUm9sZSksXG4gIH1cbn1cblxuZXhwb3J0IGludGVyZmFjZSBRdWlja3NpZ2h0RGF0YVNldExvZ2ljYWxUYWJsZU1hcERhdGFUcmFuc2Zvcm1zVGFnQ29sdW1uT3BlcmF0aW9uIHtcbiAgLyoqXG4gICogPHA+VGhlIGNvbHVtbiB0aGF0IHRoaXMgb3BlcmF0aW9uIGFjdHMgb24uPC9wPlxuICAqIFxuICAqIERvY3MgYXQgVGVycmFmb3JtIFJlZ2lzdHJ5OiB7QGxpbmsgaHR0cHM6Ly93d3cudGVycmFmb3JtLmlvL2RvY3MvcHJvdmlkZXJzL2F3c2NjL3IvcXVpY2tzaWdodF9kYXRhX3NldC5odG1sI2NvbHVtbl9uYW1lIFF1aWNrc2lnaHREYXRhU2V0I2NvbHVtbl9uYW1lfVxuICAqL1xuICByZWFkb25seSBjb2x1bW5OYW1lOiBzdHJpbmc7XG4gIC8qKlxuICAqIDxwPlRoZSBkYXRhc2V0IGNvbHVtbiB0YWcsIGN1cnJlbnRseSBvbmx5IHVzZWQgZm9yIGdlb3NwYXRpYWwgdHlwZSB0YWdnaW5nLiAuPC9wPlxuICAgICAgICA8bm90ZT5cbiAgICAgICAgICAgIDxwPlRoaXMgaXMgbm90IHRhZ3MgZm9yIHRoZSBBV1MgdGFnZ2luZyBmZWF0dXJlLiAuPC9wPlxuICAgICAgICA8L25vdGU+XG4gICogXG4gICogRG9jcyBhdCBUZXJyYWZvcm0gUmVnaXN0cnk6IHtAbGluayBodHRwczovL3d3dy50ZXJyYWZvcm0uaW8vZG9jcy9wcm92aWRlcnMvYXdzY2Mvci9xdWlja3NpZ2h0X2RhdGFfc2V0Lmh0bWwjdGFncyBRdWlja3NpZ2h0RGF0YVNldCN0YWdzfVxuICAqL1xuICByZWFkb25seSB0YWdzOiBRdWlja3NpZ2h0RGF0YVNldExvZ2ljYWxUYWJsZU1hcERhdGFUcmFuc2Zvcm1zVGFnQ29sdW1uT3BlcmF0aW9uVGFnc1tdO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gcXVpY2tzaWdodERhdGFTZXRMb2dpY2FsVGFibGVNYXBEYXRhVHJhbnNmb3Jtc1RhZ0NvbHVtbk9wZXJhdGlvblRvVGVycmFmb3JtKHN0cnVjdD86IFF1aWNrc2lnaHREYXRhU2V0TG9naWNhbFRhYmxlTWFwRGF0YVRyYW5zZm9ybXNUYWdDb2x1bW5PcGVyYXRpb24pOiBhbnkge1xuICBpZiAoIWNka3RmLmNhbkluc3BlY3Qoc3RydWN0KSkgeyByZXR1cm4gc3RydWN0OyB9XG4gIHJldHVybiB7XG4gICAgY29sdW1uX25hbWU6IGNka3RmLnN0cmluZ1RvVGVycmFmb3JtKHN0cnVjdCEuY29sdW1uTmFtZSksXG4gICAgdGFnczogY2RrdGYubGlzdE1hcHBlcihxdWlja3NpZ2h0RGF0YVNldExvZ2ljYWxUYWJsZU1hcERhdGFUcmFuc2Zvcm1zVGFnQ29sdW1uT3BlcmF0aW9uVGFnc1RvVGVycmFmb3JtKShzdHJ1Y3QhLnRhZ3MpLFxuICB9XG59XG5cbmV4cG9ydCBpbnRlcmZhY2UgUXVpY2tzaWdodERhdGFTZXRMb2dpY2FsVGFibGVNYXBEYXRhVHJhbnNmb3JtcyB7XG4gIC8qKlxuICAqIDxwPkEgdHJhbnNmb3JtIG9wZXJhdGlvbiB0aGF0IGNhc3RzIGEgY29sdW1uIHRvIGEgZGlmZmVyZW50IHR5cGUuPC9wPlxuICAqIFxuICAqIERvY3MgYXQgVGVycmFmb3JtIFJlZ2lzdHJ5OiB7QGxpbmsgaHR0cHM6Ly93d3cudGVycmFmb3JtLmlvL2RvY3MvcHJvdmlkZXJzL2F3c2NjL3IvcXVpY2tzaWdodF9kYXRhX3NldC5odG1sI2Nhc3RfY29sdW1uX3R5cGVfb3BlcmF0aW9uIFF1aWNrc2lnaHREYXRhU2V0I2Nhc3RfY29sdW1uX3R5cGVfb3BlcmF0aW9ufVxuICAqL1xuICByZWFkb25seSBjYXN0Q29sdW1uVHlwZU9wZXJhdGlvbj86IFF1aWNrc2lnaHREYXRhU2V0TG9naWNhbFRhYmxlTWFwRGF0YVRyYW5zZm9ybXNDYXN0Q29sdW1uVHlwZU9wZXJhdGlvbjtcbiAgLyoqXG4gICogPHA+QSB0cmFuc2Zvcm0gb3BlcmF0aW9uIHRoYXQgY3JlYXRlcyBjYWxjdWxhdGVkIGNvbHVtbnMuIENvbHVtbnMgY3JlYXRlZCBpbiBvbmUgc3VjaFxuICAgICAgICAgICAgb3BlcmF0aW9uIGZvcm0gYSBsZXhpY2FsIGNsb3N1cmUuPC9wPlxuICAqIFxuICAqIERvY3MgYXQgVGVycmFmb3JtIFJlZ2lzdHJ5OiB7QGxpbmsgaHR0cHM6Ly93d3cudGVycmFmb3JtLmlvL2RvY3MvcHJvdmlkZXJzL2F3c2NjL3IvcXVpY2tzaWdodF9kYXRhX3NldC5odG1sI2NyZWF0ZV9jb2x1bW5zX29wZXJhdGlvbiBRdWlja3NpZ2h0RGF0YVNldCNjcmVhdGVfY29sdW1uc19vcGVyYXRpb259XG4gICovXG4gIHJlYWRvbmx5IGNyZWF0ZUNvbHVtbnNPcGVyYXRpb24/OiBRdWlja3NpZ2h0RGF0YVNldExvZ2ljYWxUYWJsZU1hcERhdGFUcmFuc2Zvcm1zQ3JlYXRlQ29sdW1uc09wZXJhdGlvbjtcbiAgLyoqXG4gICogPHA+QSB0cmFuc2Zvcm0gb3BlcmF0aW9uIHRoYXQgZmlsdGVycyByb3dzIGJhc2VkIG9uIGEgY29uZGl0aW9uLjwvcD5cbiAgKiBcbiAgKiBEb2NzIGF0IFRlcnJhZm9ybSBSZWdpc3RyeToge0BsaW5rIGh0dHBzOi8vd3d3LnRlcnJhZm9ybS5pby9kb2NzL3Byb3ZpZGVycy9hd3NjYy9yL3F1aWNrc2lnaHRfZGF0YV9zZXQuaHRtbCNmaWx0ZXJfb3BlcmF0aW9uIFF1aWNrc2lnaHREYXRhU2V0I2ZpbHRlcl9vcGVyYXRpb259XG4gICovXG4gIHJlYWRvbmx5IGZpbHRlck9wZXJhdGlvbj86IFF1aWNrc2lnaHREYXRhU2V0TG9naWNhbFRhYmxlTWFwRGF0YVRyYW5zZm9ybXNGaWx0ZXJPcGVyYXRpb247XG4gIC8qKlxuICAqIDxwPkEgdHJhbnNmb3JtIG9wZXJhdGlvbiB0aGF0IHByb2plY3RzIGNvbHVtbnMuIE9wZXJhdGlvbnMgdGhhdCBjb21lIGFmdGVyIGEgcHJvamVjdGlvblxuICAgICAgICAgICAgY2FuIG9ubHkgcmVmZXIgdG8gcHJvamVjdGVkIGNvbHVtbnMuPC9wPlxuICAqIFxuICAqIERvY3MgYXQgVGVycmFmb3JtIFJlZ2lzdHJ5OiB7QGxpbmsgaHR0cHM6Ly93d3cudGVycmFmb3JtLmlvL2RvY3MvcHJvdmlkZXJzL2F3c2NjL3IvcXVpY2tzaWdodF9kYXRhX3NldC5odG1sI3Byb2plY3Rfb3BlcmF0aW9uIFF1aWNrc2lnaHREYXRhU2V0I3Byb2plY3Rfb3BlcmF0aW9ufVxuICAqL1xuICByZWFkb25seSBwcm9qZWN0T3BlcmF0aW9uPzogUXVpY2tzaWdodERhdGFTZXRMb2dpY2FsVGFibGVNYXBEYXRhVHJhbnNmb3Jtc1Byb2plY3RPcGVyYXRpb247XG4gIC8qKlxuICAqIDxwPkEgdHJhbnNmb3JtIG9wZXJhdGlvbiB0aGF0IHJlbmFtZXMgYSBjb2x1bW4uPC9wPlxuICAqIFxuICAqIERvY3MgYXQgVGVycmFmb3JtIFJlZ2lzdHJ5OiB7QGxpbmsgaHR0cHM6Ly93d3cudGVycmFmb3JtLmlvL2RvY3MvcHJvdmlkZXJzL2F3c2NjL3IvcXVpY2tzaWdodF9kYXRhX3NldC5odG1sI3JlbmFtZV9jb2x1bW5fb3BlcmF0aW9uIFF1aWNrc2lnaHREYXRhU2V0I3JlbmFtZV9jb2x1bW5fb3BlcmF0aW9ufVxuICAqL1xuICByZWFkb25seSByZW5hbWVDb2x1bW5PcGVyYXRpb24/OiBRdWlja3NpZ2h0RGF0YVNldExvZ2ljYWxUYWJsZU1hcERhdGFUcmFuc2Zvcm1zUmVuYW1lQ29sdW1uT3BlcmF0aW9uO1xuICAvKipcbiAgKiA8cD5BIHRyYW5zZm9ybSBvcGVyYXRpb24gdGhhdCB0YWdzIGEgY29sdW1uIHdpdGggYWRkaXRpb25hbCBpbmZvcm1hdGlvbi48L3A+XG4gICogXG4gICogRG9jcyBhdCBUZXJyYWZvcm0gUmVnaXN0cnk6IHtAbGluayBodHRwczovL3d3dy50ZXJyYWZvcm0uaW8vZG9jcy9wcm92aWRlcnMvYXdzY2Mvci9xdWlja3NpZ2h0X2RhdGFfc2V0Lmh0bWwjdGFnX2NvbHVtbl9vcGVyYXRpb24gUXVpY2tzaWdodERhdGFTZXQjdGFnX2NvbHVtbl9vcGVyYXRpb259XG4gICovXG4gIHJlYWRvbmx5IHRhZ0NvbHVtbk9wZXJhdGlvbj86IFF1aWNrc2lnaHREYXRhU2V0TG9naWNhbFRhYmxlTWFwRGF0YVRyYW5zZm9ybXNUYWdDb2x1bW5PcGVyYXRpb247XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBxdWlja3NpZ2h0RGF0YVNldExvZ2ljYWxUYWJsZU1hcERhdGFUcmFuc2Zvcm1zVG9UZXJyYWZvcm0oc3RydWN0PzogUXVpY2tzaWdodERhdGFTZXRMb2dpY2FsVGFibGVNYXBEYXRhVHJhbnNmb3Jtcyk6IGFueSB7XG4gIGlmICghY2RrdGYuY2FuSW5zcGVjdChzdHJ1Y3QpKSB7IHJldHVybiBzdHJ1Y3Q7IH1cbiAgcmV0dXJuIHtcbiAgICBjYXN0X2NvbHVtbl90eXBlX29wZXJhdGlvbjogcXVpY2tzaWdodERhdGFTZXRMb2dpY2FsVGFibGVNYXBEYXRhVHJhbnNmb3Jtc0Nhc3RDb2x1bW5UeXBlT3BlcmF0aW9uVG9UZXJyYWZvcm0oc3RydWN0IS5jYXN0Q29sdW1uVHlwZU9wZXJhdGlvbiksXG4gICAgY3JlYXRlX2NvbHVtbnNfb3BlcmF0aW9uOiBxdWlja3NpZ2h0RGF0YVNldExvZ2ljYWxUYWJsZU1hcERhdGFUcmFuc2Zvcm1zQ3JlYXRlQ29sdW1uc09wZXJhdGlvblRvVGVycmFmb3JtKHN0cnVjdCEuY3JlYXRlQ29sdW1uc09wZXJhdGlvbiksXG4gICAgZmlsdGVyX29wZXJhdGlvbjogcXVpY2tzaWdodERhdGFTZXRMb2dpY2FsVGFibGVNYXBEYXRhVHJhbnNmb3Jtc0ZpbHRlck9wZXJhdGlvblRvVGVycmFmb3JtKHN0cnVjdCEuZmlsdGVyT3BlcmF0aW9uKSxcbiAgICBwcm9qZWN0X29wZXJhdGlvbjogcXVpY2tzaWdodERhdGFTZXRMb2dpY2FsVGFibGVNYXBEYXRhVHJhbnNmb3Jtc1Byb2plY3RPcGVyYXRpb25Ub1RlcnJhZm9ybShzdHJ1Y3QhLnByb2plY3RPcGVyYXRpb24pLFxuICAgIHJlbmFtZV9jb2x1bW5fb3BlcmF0aW9uOiBxdWlja3NpZ2h0RGF0YVNldExvZ2ljYWxUYWJsZU1hcERhdGFUcmFuc2Zvcm1zUmVuYW1lQ29sdW1uT3BlcmF0aW9uVG9UZXJyYWZvcm0oc3RydWN0IS5yZW5hbWVDb2x1bW5PcGVyYXRpb24pLFxuICAgIHRhZ19jb2x1bW5fb3BlcmF0aW9uOiBxdWlja3NpZ2h0RGF0YVNldExvZ2ljYWxUYWJsZU1hcERhdGFUcmFuc2Zvcm1zVGFnQ29sdW1uT3BlcmF0aW9uVG9UZXJyYWZvcm0oc3RydWN0IS50YWdDb2x1bW5PcGVyYXRpb24pLFxuICB9XG59XG5cbmV4cG9ydCBpbnRlcmZhY2UgUXVpY2tzaWdodERhdGFTZXRMb2dpY2FsVGFibGVNYXBTb3VyY2VKb2luSW5zdHJ1Y3Rpb25MZWZ0Sm9pbktleVByb3BlcnRpZXMge1xuICAvKipcbiAgKiBEb2NzIGF0IFRlcnJhZm9ybSBSZWdpc3RyeToge0BsaW5rIGh0dHBzOi8vd3d3LnRlcnJhZm9ybS5pby9kb2NzL3Byb3ZpZGVycy9hd3NjYy9yL3F1aWNrc2lnaHRfZGF0YV9zZXQuaHRtbCN1bmlxdWVfa2V5IFF1aWNrc2lnaHREYXRhU2V0I3VuaXF1ZV9rZXl9XG4gICovXG4gIHJlYWRvbmx5IHVuaXF1ZUtleT86IGJvb2xlYW4gfCBjZGt0Zi5JUmVzb2x2YWJsZTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIHF1aWNrc2lnaHREYXRhU2V0TG9naWNhbFRhYmxlTWFwU291cmNlSm9pbkluc3RydWN0aW9uTGVmdEpvaW5LZXlQcm9wZXJ0aWVzVG9UZXJyYWZvcm0oc3RydWN0PzogUXVpY2tzaWdodERhdGFTZXRMb2dpY2FsVGFibGVNYXBTb3VyY2VKb2luSW5zdHJ1Y3Rpb25MZWZ0Sm9pbktleVByb3BlcnRpZXMpOiBhbnkge1xuICBpZiAoIWNka3RmLmNhbkluc3BlY3Qoc3RydWN0KSkgeyByZXR1cm4gc3RydWN0OyB9XG4gIHJldHVybiB7XG4gICAgdW5pcXVlX2tleTogY2RrdGYuYm9vbGVhblRvVGVycmFmb3JtKHN0cnVjdCEudW5pcXVlS2V5KSxcbiAgfVxufVxuXG5leHBvcnQgaW50ZXJmYWNlIFF1aWNrc2lnaHREYXRhU2V0TG9naWNhbFRhYmxlTWFwU291cmNlSm9pbkluc3RydWN0aW9uUmlnaHRKb2luS2V5UHJvcGVydGllcyB7XG4gIC8qKlxuICAqIERvY3MgYXQgVGVycmFmb3JtIFJlZ2lzdHJ5OiB7QGxpbmsgaHR0cHM6Ly93d3cudGVycmFmb3JtLmlvL2RvY3MvcHJvdmlkZXJzL2F3c2NjL3IvcXVpY2tzaWdodF9kYXRhX3NldC5odG1sI3VuaXF1ZV9rZXkgUXVpY2tzaWdodERhdGFTZXQjdW5pcXVlX2tleX1cbiAgKi9cbiAgcmVhZG9ubHkgdW5pcXVlS2V5PzogYm9vbGVhbiB8IGNka3RmLklSZXNvbHZhYmxlO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gcXVpY2tzaWdodERhdGFTZXRMb2dpY2FsVGFibGVNYXBTb3VyY2VKb2luSW5zdHJ1Y3Rpb25SaWdodEpvaW5LZXlQcm9wZXJ0aWVzVG9UZXJyYWZvcm0oc3RydWN0PzogUXVpY2tzaWdodERhdGFTZXRMb2dpY2FsVGFibGVNYXBTb3VyY2VKb2luSW5zdHJ1Y3Rpb25SaWdodEpvaW5LZXlQcm9wZXJ0aWVzKTogYW55IHtcbiAgaWYgKCFjZGt0Zi5jYW5JbnNwZWN0KHN0cnVjdCkpIHsgcmV0dXJuIHN0cnVjdDsgfVxuICByZXR1cm4ge1xuICAgIHVuaXF1ZV9rZXk6IGNka3RmLmJvb2xlYW5Ub1RlcnJhZm9ybShzdHJ1Y3QhLnVuaXF1ZUtleSksXG4gIH1cbn1cblxuZXhwb3J0IGludGVyZmFjZSBRdWlja3NpZ2h0RGF0YVNldExvZ2ljYWxUYWJsZU1hcFNvdXJjZUpvaW5JbnN0cnVjdGlvbiB7XG4gIC8qKlxuICAqIERvY3MgYXQgVGVycmFmb3JtIFJlZ2lzdHJ5OiB7QGxpbmsgaHR0cHM6Ly93d3cudGVycmFmb3JtLmlvL2RvY3MvcHJvdmlkZXJzL2F3c2NjL3IvcXVpY2tzaWdodF9kYXRhX3NldC5odG1sI2xlZnRfam9pbl9rZXlfcHJvcGVydGllcyBRdWlja3NpZ2h0RGF0YVNldCNsZWZ0X2pvaW5fa2V5X3Byb3BlcnRpZXN9XG4gICovXG4gIHJlYWRvbmx5IGxlZnRKb2luS2V5UHJvcGVydGllcz86IFF1aWNrc2lnaHREYXRhU2V0TG9naWNhbFRhYmxlTWFwU291cmNlSm9pbkluc3RydWN0aW9uTGVmdEpvaW5LZXlQcm9wZXJ0aWVzO1xuICAvKipcbiAgKiA8cD5MZWZ0IG9wZXJhbmQuPC9wPlxuICAqIFxuICAqIERvY3MgYXQgVGVycmFmb3JtIFJlZ2lzdHJ5OiB7QGxpbmsgaHR0cHM6Ly93d3cudGVycmFmb3JtLmlvL2RvY3MvcHJvdmlkZXJzL2F3c2NjL3IvcXVpY2tzaWdodF9kYXRhX3NldC5odG1sI2xlZnRfb3BlcmFuZCBRdWlja3NpZ2h0RGF0YVNldCNsZWZ0X29wZXJhbmR9XG4gICovXG4gIHJlYWRvbmx5IGxlZnRPcGVyYW5kOiBzdHJpbmc7XG4gIC8qKlxuICAqIDxwPk9uIENsYXVzZS48L3A+XG4gICogXG4gICogRG9jcyBhdCBUZXJyYWZvcm0gUmVnaXN0cnk6IHtAbGluayBodHRwczovL3d3dy50ZXJyYWZvcm0uaW8vZG9jcy9wcm92aWRlcnMvYXdzY2Mvci9xdWlja3NpZ2h0X2RhdGFfc2V0Lmh0bWwjb25fY2xhdXNlIFF1aWNrc2lnaHREYXRhU2V0I29uX2NsYXVzZX1cbiAgKi9cbiAgcmVhZG9ubHkgb25DbGF1c2U6IHN0cmluZztcbiAgLyoqXG4gICogRG9jcyBhdCBUZXJyYWZvcm0gUmVnaXN0cnk6IHtAbGluayBodHRwczovL3d3dy50ZXJyYWZvcm0uaW8vZG9jcy9wcm92aWRlcnMvYXdzY2Mvci9xdWlja3NpZ2h0X2RhdGFfc2V0Lmh0bWwjcmlnaHRfam9pbl9rZXlfcHJvcGVydGllcyBRdWlja3NpZ2h0RGF0YVNldCNyaWdodF9qb2luX2tleV9wcm9wZXJ0aWVzfVxuICAqL1xuICByZWFkb25seSByaWdodEpvaW5LZXlQcm9wZXJ0aWVzPzogUXVpY2tzaWdodERhdGFTZXRMb2dpY2FsVGFibGVNYXBTb3VyY2VKb2luSW5zdHJ1Y3Rpb25SaWdodEpvaW5LZXlQcm9wZXJ0aWVzO1xuICAvKipcbiAgKiA8cD5SaWdodCBvcGVyYW5kLjwvcD5cbiAgKiBcbiAgKiBEb2NzIGF0IFRlcnJhZm9ybSBSZWdpc3RyeToge0BsaW5rIGh0dHBzOi8vd3d3LnRlcnJhZm9ybS5pby9kb2NzL3Byb3ZpZGVycy9hd3NjYy9yL3F1aWNrc2lnaHRfZGF0YV9zZXQuaHRtbCNyaWdodF9vcGVyYW5kIFF1aWNrc2lnaHREYXRhU2V0I3JpZ2h0X29wZXJhbmR9XG4gICovXG4gIHJlYWRvbmx5IHJpZ2h0T3BlcmFuZDogc3RyaW5nO1xuICAvKipcbiAgKiBEb2NzIGF0IFRlcnJhZm9ybSBSZWdpc3RyeToge0BsaW5rIGh0dHBzOi8vd3d3LnRlcnJhZm9ybS5pby9kb2NzL3Byb3ZpZGVycy9hd3NjYy9yL3F1aWNrc2lnaHRfZGF0YV9zZXQuaHRtbCN0eXBlIFF1aWNrc2lnaHREYXRhU2V0I3R5cGV9XG4gICovXG4gIHJlYWRvbmx5IHR5cGU6IHN0cmluZztcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIHF1aWNrc2lnaHREYXRhU2V0TG9naWNhbFRhYmxlTWFwU291cmNlSm9pbkluc3RydWN0aW9uVG9UZXJyYWZvcm0oc3RydWN0PzogUXVpY2tzaWdodERhdGFTZXRMb2dpY2FsVGFibGVNYXBTb3VyY2VKb2luSW5zdHJ1Y3Rpb24pOiBhbnkge1xuICBpZiAoIWNka3RmLmNhbkluc3BlY3Qoc3RydWN0KSkgeyByZXR1cm4gc3RydWN0OyB9XG4gIHJldHVybiB7XG4gICAgbGVmdF9qb2luX2tleV9wcm9wZXJ0aWVzOiBxdWlja3NpZ2h0RGF0YVNldExvZ2ljYWxUYWJsZU1hcFNvdXJjZUpvaW5JbnN0cnVjdGlvbkxlZnRKb2luS2V5UHJvcGVydGllc1RvVGVycmFmb3JtKHN0cnVjdCEubGVmdEpvaW5LZXlQcm9wZXJ0aWVzKSxcbiAgICBsZWZ0X29wZXJhbmQ6IGNka3RmLnN0cmluZ1RvVGVycmFmb3JtKHN0cnVjdCEubGVmdE9wZXJhbmQpLFxuICAgIG9uX2NsYXVzZTogY2RrdGYuc3RyaW5nVG9UZXJyYWZvcm0oc3RydWN0IS5vbkNsYXVzZSksXG4gICAgcmlnaHRfam9pbl9rZXlfcHJvcGVydGllczogcXVpY2tzaWdodERhdGFTZXRMb2dpY2FsVGFibGVNYXBTb3VyY2VKb2luSW5zdHJ1Y3Rpb25SaWdodEpvaW5LZXlQcm9wZXJ0aWVzVG9UZXJyYWZvcm0oc3RydWN0IS5yaWdodEpvaW5LZXlQcm9wZXJ0aWVzKSxcbiAgICByaWdodF9vcGVyYW5kOiBjZGt0Zi5zdHJpbmdUb1RlcnJhZm9ybShzdHJ1Y3QhLnJpZ2h0T3BlcmFuZCksXG4gICAgdHlwZTogY2RrdGYuc3RyaW5nVG9UZXJyYWZvcm0oc3RydWN0IS50eXBlKSxcbiAgfVxufVxuXG5leHBvcnQgaW50ZXJmYWNlIFF1aWNrc2lnaHREYXRhU2V0TG9naWNhbFRhYmxlTWFwU291cmNlIHtcbiAgLyoqXG4gICogPHA+Sm9pbiBpbnN0cnVjdGlvbi48L3A+XG4gICogXG4gICogRG9jcyBhdCBUZXJyYWZvcm0gUmVnaXN0cnk6IHtAbGluayBodHRwczovL3d3dy50ZXJyYWZvcm0uaW8vZG9jcy9wcm92aWRlcnMvYXdzY2Mvci9xdWlja3NpZ2h0X2RhdGFfc2V0Lmh0bWwjam9pbl9pbnN0cnVjdGlvbiBRdWlja3NpZ2h0RGF0YVNldCNqb2luX2luc3RydWN0aW9ufVxuICAqL1xuICByZWFkb25seSBqb2luSW5zdHJ1Y3Rpb24/OiBRdWlja3NpZ2h0RGF0YVNldExvZ2ljYWxUYWJsZU1hcFNvdXJjZUpvaW5JbnN0cnVjdGlvbjtcbiAgLyoqXG4gICogPHA+UGh5c2ljYWwgdGFibGUgSUQuPC9wPlxuICAqIFxuICAqIERvY3MgYXQgVGVycmFmb3JtIFJlZ2lzdHJ5OiB7QGxpbmsgaHR0cHM6Ly93d3cudGVycmFmb3JtLmlvL2RvY3MvcHJvdmlkZXJzL2F3c2NjL3IvcXVpY2tzaWdodF9kYXRhX3NldC5odG1sI3BoeXNpY2FsX3RhYmxlX2lkIFF1aWNrc2lnaHREYXRhU2V0I3BoeXNpY2FsX3RhYmxlX2lkfVxuICAqL1xuICByZWFkb25seSBwaHlzaWNhbFRhYmxlSWQ/OiBzdHJpbmc7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBxdWlja3NpZ2h0RGF0YVNldExvZ2ljYWxUYWJsZU1hcFNvdXJjZVRvVGVycmFmb3JtKHN0cnVjdD86IFF1aWNrc2lnaHREYXRhU2V0TG9naWNhbFRhYmxlTWFwU291cmNlKTogYW55IHtcbiAgaWYgKCFjZGt0Zi5jYW5JbnNwZWN0KHN0cnVjdCkpIHsgcmV0dXJuIHN0cnVjdDsgfVxuICByZXR1cm4ge1xuICAgIGpvaW5faW5zdHJ1Y3Rpb246IHF1aWNrc2lnaHREYXRhU2V0TG9naWNhbFRhYmxlTWFwU291cmNlSm9pbkluc3RydWN0aW9uVG9UZXJyYWZvcm0oc3RydWN0IS5qb2luSW5zdHJ1Y3Rpb24pLFxuICAgIHBoeXNpY2FsX3RhYmxlX2lkOiBjZGt0Zi5zdHJpbmdUb1RlcnJhZm9ybShzdHJ1Y3QhLnBoeXNpY2FsVGFibGVJZCksXG4gIH1cbn1cblxuZXhwb3J0IGludGVyZmFjZSBRdWlja3NpZ2h0RGF0YVNldExvZ2ljYWxUYWJsZU1hcCB7XG4gIC8qKlxuICAqIDxwPkEgZGlzcGxheSBuYW1lIGZvciB0aGUgbG9naWNhbCB0YWJsZS48L3A+XG4gICogXG4gICogRG9jcyBhdCBUZXJyYWZvcm0gUmVnaXN0cnk6IHtAbGluayBodHRwczovL3d3dy50ZXJyYWZvcm0uaW8vZG9jcy9wcm92aWRlcnMvYXdzY2Mvci9xdWlja3NpZ2h0X2RhdGFfc2V0Lmh0bWwjYWxpYXMgUXVpY2tzaWdodERhdGFTZXQjYWxpYXN9XG4gICovXG4gIHJlYWRvbmx5IGFsaWFzPzogc3RyaW5nO1xuICAvKipcbiAgKiA8cD5UcmFuc2Zvcm0gb3BlcmF0aW9ucyB0aGF0IGFjdCBvbiB0aGlzIGxvZ2ljYWwgdGFibGUuPC9wPlxuICAqIFxuICAqIERvY3MgYXQgVGVycmFmb3JtIFJlZ2lzdHJ5OiB7QGxpbmsgaHR0cHM6Ly93d3cudGVycmFmb3JtLmlvL2RvY3MvcHJvdmlkZXJzL2F3c2NjL3IvcXVpY2tzaWdodF9kYXRhX3NldC5odG1sI2RhdGFfdHJhbnNmb3JtcyBRdWlja3NpZ2h0RGF0YVNldCNkYXRhX3RyYW5zZm9ybXN9XG4gICovXG4gIHJlYWRvbmx5IGRhdGFUcmFuc2Zvcm1zPzogUXVpY2tzaWdodERhdGFTZXRMb2dpY2FsVGFibGVNYXBEYXRhVHJhbnNmb3Jtc1tdO1xuICAvKipcbiAgKiA8cD5JbmZvcm1hdGlvbiBhYm91dCB0aGUgc291cmNlIG9mIGEgbG9naWNhbCB0YWJsZS4gVGhpcyBpcyBhIHZhcmlhbnQgdHlwZSBzdHJ1Y3R1cmUuIEZvclxuICAgICAgICAgICAgdGhpcyBzdHJ1Y3R1cmUgdG8gYmUgdmFsaWQsIG9ubHkgb25lIG9mIHRoZSBhdHRyaWJ1dGVzIGNhbiBiZSBub24tbnVsbC48L3A+XG4gICogXG4gICogRG9jcyBhdCBUZXJyYWZvcm0gUmVnaXN0cnk6IHtAbGluayBodHRwczovL3d3dy50ZXJyYWZvcm0uaW8vZG9jcy9wcm92aWRlcnMvYXdzY2Mvci9xdWlja3NpZ2h0X2RhdGFfc2V0Lmh0bWwjc291cmNlIFF1aWNrc2lnaHREYXRhU2V0I3NvdXJjZX1cbiAgKi9cbiAgcmVhZG9ubHkgc291cmNlPzogUXVpY2tzaWdodERhdGFTZXRMb2dpY2FsVGFibGVNYXBTb3VyY2U7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBxdWlja3NpZ2h0RGF0YVNldExvZ2ljYWxUYWJsZU1hcFRvVGVycmFmb3JtKHN0cnVjdD86IFF1aWNrc2lnaHREYXRhU2V0TG9naWNhbFRhYmxlTWFwKTogYW55IHtcbiAgaWYgKCFjZGt0Zi5jYW5JbnNwZWN0KHN0cnVjdCkpIHsgcmV0dXJuIHN0cnVjdDsgfVxuICByZXR1cm4ge1xuICAgIGFsaWFzOiBjZGt0Zi5zdHJpbmdUb1RlcnJhZm9ybShzdHJ1Y3QhLmFsaWFzKSxcbiAgICBkYXRhX3RyYW5zZm9ybXM6IGNka3RmLmxpc3RNYXBwZXIocXVpY2tzaWdodERhdGFTZXRMb2dpY2FsVGFibGVNYXBEYXRhVHJhbnNmb3Jtc1RvVGVycmFmb3JtKShzdHJ1Y3QhLmRhdGFUcmFuc2Zvcm1zKSxcbiAgICBzb3VyY2U6IHF1aWNrc2lnaHREYXRhU2V0TG9naWNhbFRhYmxlTWFwU291cmNlVG9UZXJyYWZvcm0oc3RydWN0IS5zb3VyY2UpLFxuICB9XG59XG5cbmV4cG9ydCBjbGFzcyBRdWlja3NpZ2h0RGF0YVNldE91dHB1dENvbHVtbnMgZXh0ZW5kcyBjZGt0Zi5Db21wbGV4Q29tcHV0ZWRMaXN0IHtcblxuICAvLyBkZXNjcmlwdGlvbiAtIGNvbXB1dGVkOiB0cnVlLCBvcHRpb25hbDogdHJ1ZSwgcmVxdWlyZWQ6IGZhbHNlXG4gIHByaXZhdGUgX2Rlc2NyaXB0aW9uPzogc3RyaW5nO1xuICBwdWJsaWMgZ2V0IGRlc2NyaXB0aW9uKCkge1xuICAgIHJldHVybiB0aGlzLmdldFN0cmluZ0F0dHJpYnV0ZSgnZGVzY3JpcHRpb24nKTtcbiAgfVxuICBwdWJsaWMgc2V0IGRlc2NyaXB0aW9uKHZhbHVlOiBzdHJpbmcpIHtcbiAgICB0aGlzLl9kZXNjcmlwdGlvbiA9IHZhbHVlO1xuICB9XG4gIHB1YmxpYyByZXNldERlc2NyaXB0aW9uKCkge1xuICAgIHRoaXMuX2Rlc2NyaXB0aW9uID0gdW5kZWZpbmVkO1xuICB9XG4gIC8vIFRlbXBvcmFyaWx5IGV4cG9zZSBpbnB1dCB2YWx1ZS4gVXNlIHdpdGggY2F1dGlvbi5cbiAgcHVibGljIGdldCBkZXNjcmlwdGlvbklucHV0KCkge1xuICAgIHJldHVybiB0aGlzLl9kZXNjcmlwdGlvblxuICB9XG5cbiAgLy8gbmFtZSAtIGNvbXB1dGVkOiB0cnVlLCBvcHRpb25hbDogdHJ1ZSwgcmVxdWlyZWQ6IGZhbHNlXG4gIHByaXZhdGUgX25hbWU/OiBzdHJpbmc7XG4gIHB1YmxpYyBnZXQgbmFtZSgpIHtcbiAgICByZXR1cm4gdGhpcy5nZXRTdHJpbmdBdHRyaWJ1dGUoJ25hbWUnKTtcbiAgfVxuICBwdWJsaWMgc2V0IG5hbWUodmFsdWU6IHN0cmluZykge1xuICAgIHRoaXMuX25hbWUgPSB2YWx1ZTtcbiAgfVxuICBwdWJsaWMgcmVzZXROYW1lKCkge1xuICAgIHRoaXMuX25hbWUgPSB1bmRlZmluZWQ7XG4gIH1cbiAgLy8gVGVtcG9yYXJpbHkgZXhwb3NlIGlucHV0IHZhbHVlLiBVc2Ugd2l0aCBjYXV0aW9uLlxuICBwdWJsaWMgZ2V0IG5hbWVJbnB1dCgpIHtcbiAgICByZXR1cm4gdGhpcy5fbmFtZVxuICB9XG5cbiAgLy8gdHlwZSAtIGNvbXB1dGVkOiB0cnVlLCBvcHRpb25hbDogdHJ1ZSwgcmVxdWlyZWQ6IGZhbHNlXG4gIHByaXZhdGUgX3R5cGU/OiBzdHJpbmc7XG4gIHB1YmxpYyBnZXQgdHlwZSgpIHtcbiAgICByZXR1cm4gdGhpcy5nZXRTdHJpbmdBdHRyaWJ1dGUoJ3R5cGUnKTtcbiAgfVxuICBwdWJsaWMgc2V0IHR5cGUodmFsdWU6IHN0cmluZykge1xuICAgIHRoaXMuX3R5cGUgPSB2YWx1ZTtcbiAgfVxuICBwdWJsaWMgcmVzZXRUeXBlKCkge1xuICAgIHRoaXMuX3R5cGUgPSB1bmRlZmluZWQ7XG4gIH1cbiAgLy8gVGVtcG9yYXJpbHkgZXhwb3NlIGlucHV0IHZhbHVlLiBVc2Ugd2l0aCBjYXV0aW9uLlxuICBwdWJsaWMgZ2V0IHR5cGVJbnB1dCgpIHtcbiAgICByZXR1cm4gdGhpcy5fdHlwZVxuICB9XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBxdWlja3NpZ2h0RGF0YVNldE91dHB1dENvbHVtbnNUb1RlcnJhZm9ybShzdHJ1Y3Q/OiBRdWlja3NpZ2h0RGF0YVNldE91dHB1dENvbHVtbnMpOiBhbnkge1xuICBpZiAoIWNka3RmLmNhbkluc3BlY3Qoc3RydWN0KSkgeyByZXR1cm4gc3RydWN0OyB9XG4gIHJldHVybiB7XG4gICAgZGVzY3JpcHRpb246IGNka3RmLnN0cmluZ1RvVGVycmFmb3JtKHN0cnVjdCEuZGVzY3JpcHRpb24pLFxuICAgIG5hbWU6IGNka3RmLnN0cmluZ1RvVGVycmFmb3JtKHN0cnVjdCEubmFtZSksXG4gICAgdHlwZTogY2RrdGYuc3RyaW5nVG9UZXJyYWZvcm0oc3RydWN0IS50eXBlKSxcbiAgfVxufVxuXG5leHBvcnQgaW50ZXJmYWNlIFF1aWNrc2lnaHREYXRhU2V0UGVybWlzc2lvbnMge1xuICAvKipcbiAgKiA8cD5UaGUgSUFNIGFjdGlvbiB0byBncmFudCBvciByZXZva2UgcGVybWlzc2lvbnMgb24uPC9wPlxuICAqIFxuICAqIERvY3MgYXQgVGVycmFmb3JtIFJlZ2lzdHJ5OiB7QGxpbmsgaHR0cHM6Ly93d3cudGVycmFmb3JtLmlvL2RvY3MvcHJvdmlkZXJzL2F3c2NjL3IvcXVpY2tzaWdodF9kYXRhX3NldC5odG1sI2FjdGlvbnMgUXVpY2tzaWdodERhdGFTZXQjYWN0aW9uc31cbiAgKi9cbiAgcmVhZG9ubHkgYWN0aW9uczogc3RyaW5nW107XG4gIC8qKlxuICAqIDxwPlRoZSBBbWF6b24gUmVzb3VyY2UgTmFtZSAoQVJOKSBvZiB0aGUgcHJpbmNpcGFsLiBUaGlzIGNhbiBiZSBvbmUgb2YgdGhlXG4gICAgICAgICAgICBmb2xsb3dpbmc6PC9wPlxuICAgICAgICA8dWw+XG4gICAgICAgICAgICA8bGk+XG4gICAgICAgICAgICAgICAgPHA+VGhlIEFSTiBvZiBhbiBBbWF6b24gUXVpY2tTaWdodCB1c2VyIG9yIGdyb3VwIGFzc29jaWF0ZWQgd2l0aCBhIGRhdGEgc291cmNlIG9yIGRhdGFzZXQuIChUaGlzIGlzIGNvbW1vbi4pPC9wPlxuICAgICAgICAgICAgPC9saT5cbiAgICAgICAgICAgIDxsaT5cbiAgICAgICAgICAgICAgICA8cD5UaGUgQVJOIG9mIGFuIEFtYXpvbiBRdWlja1NpZ2h0IHVzZXIsIGdyb3VwLCBvciBuYW1lc3BhY2UgYXNzb2NpYXRlZCB3aXRoIGFuIGFuYWx5c2lzLCBkYXNoYm9hcmQsIHRlbXBsYXRlLCBvciB0aGVtZS4gKFRoaXMgaXMgY29tbW9uLik8L3A+XG4gICAgICAgICAgICA8L2xpPlxuICAgICAgICAgICAgPGxpPlxuICAgICAgICAgICAgICAgIDxwPlRoZSBBUk4gb2YgYW4gQVdTIGFjY291bnQgcm9vdDogVGhpcyBpcyBhbiBJQU0gQVJOIHJhdGhlciB0aGFuIGEgUXVpY2tTaWdodFxuICAgICAgICAgICAgICAgICAgICBBUk4uIFVzZSB0aGlzIG9wdGlvbiBvbmx5IHRvIHNoYXJlIHJlc291cmNlcyAodGVtcGxhdGVzKSBhY3Jvc3MgQVdTIGFjY291bnRzLlxuICAgICAgICAgICAgICAgICAgICAoVGhpcyBpcyBsZXNzIGNvbW1vbi4pIDwvcD5cbiAgICAgICAgICAgIDwvbGk+XG4gICAgICAgICA8L3VsPlxuICAqIFxuICAqIERvY3MgYXQgVGVycmFmb3JtIFJlZ2lzdHJ5OiB7QGxpbmsgaHR0cHM6Ly93d3cudGVycmFmb3JtLmlvL2RvY3MvcHJvdmlkZXJzL2F3c2NjL3IvcXVpY2tzaWdodF9kYXRhX3NldC5odG1sI3ByaW5jaXBhbCBRdWlja3NpZ2h0RGF0YVNldCNwcmluY2lwYWx9XG4gICovXG4gIHJlYWRvbmx5IHByaW5jaXBhbDogc3RyaW5nO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gcXVpY2tzaWdodERhdGFTZXRQZXJtaXNzaW9uc1RvVGVycmFmb3JtKHN0cnVjdD86IFF1aWNrc2lnaHREYXRhU2V0UGVybWlzc2lvbnMpOiBhbnkge1xuICBpZiAoIWNka3RmLmNhbkluc3BlY3Qoc3RydWN0KSkgeyByZXR1cm4gc3RydWN0OyB9XG4gIHJldHVybiB7XG4gICAgYWN0aW9uczogY2RrdGYubGlzdE1hcHBlcihjZGt0Zi5zdHJpbmdUb1RlcnJhZm9ybSkoc3RydWN0IS5hY3Rpb25zKSxcbiAgICBwcmluY2lwYWw6IGNka3RmLnN0cmluZ1RvVGVycmFmb3JtKHN0cnVjdCEucHJpbmNpcGFsKSxcbiAgfVxufVxuXG5leHBvcnQgaW50ZXJmYWNlIFF1aWNrc2lnaHREYXRhU2V0UGh5c2ljYWxUYWJsZU1hcEN1c3RvbVNxbENvbHVtbnMge1xuICAvKipcbiAgKiA8cD5UaGUgbmFtZSBvZiB0aGlzIGNvbHVtbiBpbiB0aGUgdW5kZXJseWluZyBkYXRhIHNvdXJjZS48L3A+XG4gICogXG4gICogRG9jcyBhdCBUZXJyYWZvcm0gUmVnaXN0cnk6IHtAbGluayBodHRwczovL3d3dy50ZXJyYWZvcm0uaW8vZG9jcy9wcm92aWRlcnMvYXdzY2Mvci9xdWlja3NpZ2h0X2RhdGFfc2V0Lmh0bWwjbmFtZSBRdWlja3NpZ2h0RGF0YVNldCNuYW1lfVxuICAqL1xuICByZWFkb25seSBuYW1lOiBzdHJpbmc7XG4gIC8qKlxuICAqIERvY3MgYXQgVGVycmFmb3JtIFJlZ2lzdHJ5OiB7QGxpbmsgaHR0cHM6Ly93d3cudGVycmFmb3JtLmlvL2RvY3MvcHJvdmlkZXJzL2F3c2NjL3IvcXVpY2tzaWdodF9kYXRhX3NldC5odG1sI3R5cGUgUXVpY2tzaWdodERhdGFTZXQjdHlwZX1cbiAgKi9cbiAgcmVhZG9ubHkgdHlwZTogc3RyaW5nO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gcXVpY2tzaWdodERhdGFTZXRQaHlzaWNhbFRhYmxlTWFwQ3VzdG9tU3FsQ29sdW1uc1RvVGVycmFmb3JtKHN0cnVjdD86IFF1aWNrc2lnaHREYXRhU2V0UGh5c2ljYWxUYWJsZU1hcEN1c3RvbVNxbENvbHVtbnMpOiBhbnkge1xuICBpZiAoIWNka3RmLmNhbkluc3BlY3Qoc3RydWN0KSkgeyByZXR1cm4gc3RydWN0OyB9XG4gIHJldHVybiB7XG4gICAgbmFtZTogY2RrdGYuc3RyaW5nVG9UZXJyYWZvcm0oc3RydWN0IS5uYW1lKSxcbiAgICB0eXBlOiBjZGt0Zi5zdHJpbmdUb1RlcnJhZm9ybShzdHJ1Y3QhLnR5cGUpLFxuICB9XG59XG5cbmV4cG9ydCBpbnRlcmZhY2UgUXVpY2tzaWdodERhdGFTZXRQaHlzaWNhbFRhYmxlTWFwQ3VzdG9tU3FsIHtcbiAgLyoqXG4gICogPHA+VGhlIGNvbHVtbiBzY2hlbWEgZnJvbSB0aGUgU1FMIHF1ZXJ5IHJlc3VsdCBzZXQuPC9wPlxuICAqIFxuICAqIERvY3MgYXQgVGVycmFmb3JtIFJlZ2lzdHJ5OiB7QGxpbmsgaHR0cHM6Ly93d3cudGVycmFmb3JtLmlvL2RvY3MvcHJvdmlkZXJzL2F3c2NjL3IvcXVpY2tzaWdodF9kYXRhX3NldC5odG1sI2NvbHVtbnMgUXVpY2tzaWdodERhdGFTZXQjY29sdW1uc31cbiAgKi9cbiAgcmVhZG9ubHkgY29sdW1uczogUXVpY2tzaWdodERhdGFTZXRQaHlzaWNhbFRhYmxlTWFwQ3VzdG9tU3FsQ29sdW1uc1tdO1xuICAvKipcbiAgKiA8cD5UaGUgQW1hem9uIFJlc291cmNlIE5hbWUgKEFSTikgb2YgdGhlIGRhdGEgc291cmNlLjwvcD5cbiAgKiBcbiAgKiBEb2NzIGF0IFRlcnJhZm9ybSBSZWdpc3RyeToge0BsaW5rIGh0dHBzOi8vd3d3LnRlcnJhZm9ybS5pby9kb2NzL3Byb3ZpZGVycy9hd3NjYy9yL3F1aWNrc2lnaHRfZGF0YV9zZXQuaHRtbCNkYXRhX3NvdXJjZV9hcm4gUXVpY2tzaWdodERhdGFTZXQjZGF0YV9zb3VyY2VfYXJufVxuICAqL1xuICByZWFkb25seSBkYXRhU291cmNlQXJuOiBzdHJpbmc7XG4gIC8qKlxuICAqIDxwPkEgZGlzcGxheSBuYW1lIGZvciB0aGUgU1FMIHF1ZXJ5IHJlc3VsdC48L3A+XG4gICogXG4gICogRG9jcyBhdCBUZXJyYWZvcm0gUmVnaXN0cnk6IHtAbGluayBodHRwczovL3d3dy50ZXJyYWZvcm0uaW8vZG9jcy9wcm92aWRlcnMvYXdzY2Mvci9xdWlja3NpZ2h0X2RhdGFfc2V0Lmh0bWwjbmFtZSBRdWlja3NpZ2h0RGF0YVNldCNuYW1lfVxuICAqL1xuICByZWFkb25seSBuYW1lOiBzdHJpbmc7XG4gIC8qKlxuICAqIDxwPlRoZSBTUUwgcXVlcnkuPC9wPlxuICAqIFxuICAqIERvY3MgYXQgVGVycmFmb3JtIFJlZ2lzdHJ5OiB7QGxpbmsgaHR0cHM6Ly93d3cudGVycmFmb3JtLmlvL2RvY3MvcHJvdmlkZXJzL2F3c2NjL3IvcXVpY2tzaWdodF9kYXRhX3NldC5odG1sI3NxbF9xdWVyeSBRdWlja3NpZ2h0RGF0YVNldCNzcWxfcXVlcnl9XG4gICovXG4gIHJlYWRvbmx5IHNxbFF1ZXJ5OiBzdHJpbmc7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBxdWlja3NpZ2h0RGF0YVNldFBoeXNpY2FsVGFibGVNYXBDdXN0b21TcWxUb1RlcnJhZm9ybShzdHJ1Y3Q/OiBRdWlja3NpZ2h0RGF0YVNldFBoeXNpY2FsVGFibGVNYXBDdXN0b21TcWwpOiBhbnkge1xuICBpZiAoIWNka3RmLmNhbkluc3BlY3Qoc3RydWN0KSkgeyByZXR1cm4gc3RydWN0OyB9XG4gIHJldHVybiB7XG4gICAgY29sdW1uczogY2RrdGYubGlzdE1hcHBlcihxdWlja3NpZ2h0RGF0YVNldFBoeXNpY2FsVGFibGVNYXBDdXN0b21TcWxDb2x1bW5zVG9UZXJyYWZvcm0pKHN0cnVjdCEuY29sdW1ucyksXG4gICAgZGF0YV9zb3VyY2VfYXJuOiBjZGt0Zi5zdHJpbmdUb1RlcnJhZm9ybShzdHJ1Y3QhLmRhdGFTb3VyY2VBcm4pLFxuICAgIG5hbWU6IGNka3RmLnN0cmluZ1RvVGVycmFmb3JtKHN0cnVjdCEubmFtZSksXG4gICAgc3FsX3F1ZXJ5OiBjZGt0Zi5zdHJpbmdUb1RlcnJhZm9ybShzdHJ1Y3QhLnNxbFF1ZXJ5KSxcbiAgfVxufVxuXG5leHBvcnQgaW50ZXJmYWNlIFF1aWNrc2lnaHREYXRhU2V0UGh5c2ljYWxUYWJsZU1hcFJlbGF0aW9uYWxUYWJsZUlucHV0Q29sdW1ucyB7XG4gIC8qKlxuICAqIDxwPlRoZSBuYW1lIG9mIHRoaXMgY29sdW1uIGluIHRoZSB1bmRlcmx5aW5nIGRhdGEgc291cmNlLjwvcD5cbiAgKiBcbiAgKiBEb2NzIGF0IFRlcnJhZm9ybSBSZWdpc3RyeToge0BsaW5rIGh0dHBzOi8vd3d3LnRlcnJhZm9ybS5pby9kb2NzL3Byb3ZpZGVycy9hd3NjYy9yL3F1aWNrc2lnaHRfZGF0YV9zZXQuaHRtbCNuYW1lIFF1aWNrc2lnaHREYXRhU2V0I25hbWV9XG4gICovXG4gIHJlYWRvbmx5IG5hbWU6IHN0cmluZztcbiAgLyoqXG4gICogRG9jcyBhdCBUZXJyYWZvcm0gUmVnaXN0cnk6IHtAbGluayBodHRwczovL3d3dy50ZXJyYWZvcm0uaW8vZG9jcy9wcm92aWRlcnMvYXdzY2Mvci9xdWlja3NpZ2h0X2RhdGFfc2V0Lmh0bWwjdHlwZSBRdWlja3NpZ2h0RGF0YVNldCN0eXBlfVxuICAqL1xuICByZWFkb25seSB0eXBlOiBzdHJpbmc7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBxdWlja3NpZ2h0RGF0YVNldFBoeXNpY2FsVGFibGVNYXBSZWxhdGlvbmFsVGFibGVJbnB1dENvbHVtbnNUb1RlcnJhZm9ybShzdHJ1Y3Q/OiBRdWlja3NpZ2h0RGF0YVNldFBoeXNpY2FsVGFibGVNYXBSZWxhdGlvbmFsVGFibGVJbnB1dENvbHVtbnMpOiBhbnkge1xuICBpZiAoIWNka3RmLmNhbkluc3BlY3Qoc3RydWN0KSkgeyByZXR1cm4gc3RydWN0OyB9XG4gIHJldHVybiB7XG4gICAgbmFtZTogY2RrdGYuc3RyaW5nVG9UZXJyYWZvcm0oc3RydWN0IS5uYW1lKSxcbiAgICB0eXBlOiBjZGt0Zi5zdHJpbmdUb1RlcnJhZm9ybShzdHJ1Y3QhLnR5cGUpLFxuICB9XG59XG5cbmV4cG9ydCBpbnRlcmZhY2UgUXVpY2tzaWdodERhdGFTZXRQaHlzaWNhbFRhYmxlTWFwUmVsYXRpb25hbFRhYmxlIHtcbiAgLyoqXG4gICogRG9jcyBhdCBUZXJyYWZvcm0gUmVnaXN0cnk6IHtAbGluayBodHRwczovL3d3dy50ZXJyYWZvcm0uaW8vZG9jcy9wcm92aWRlcnMvYXdzY2Mvci9xdWlja3NpZ2h0X2RhdGFfc2V0Lmh0bWwjY2F0YWxvZyBRdWlja3NpZ2h0RGF0YVNldCNjYXRhbG9nfVxuICAqL1xuICByZWFkb25seSBjYXRhbG9nPzogc3RyaW5nO1xuICAvKipcbiAgKiA8cD5UaGUgQW1hem9uIFJlc291cmNlIE5hbWUgKEFSTikgZm9yIHRoZSBkYXRhIHNvdXJjZS48L3A+XG4gICogXG4gICogRG9jcyBhdCBUZXJyYWZvcm0gUmVnaXN0cnk6IHtAbGluayBodHRwczovL3d3dy50ZXJyYWZvcm0uaW8vZG9jcy9wcm92aWRlcnMvYXdzY2Mvci9xdWlja3NpZ2h0X2RhdGFfc2V0Lmh0bWwjZGF0YV9zb3VyY2VfYXJuIFF1aWNrc2lnaHREYXRhU2V0I2RhdGFfc291cmNlX2Fybn1cbiAgKi9cbiAgcmVhZG9ubHkgZGF0YVNvdXJjZUFybjogc3RyaW5nO1xuICAvKipcbiAgKiA8cD5UaGUgY29sdW1uIHNjaGVtYSBvZiB0aGUgdGFibGUuPC9wPlxuICAqIFxuICAqIERvY3MgYXQgVGVycmFmb3JtIFJlZ2lzdHJ5OiB7QGxpbmsgaHR0cHM6Ly93d3cudGVycmFmb3JtLmlvL2RvY3MvcHJvdmlkZXJzL2F3c2NjL3IvcXVpY2tzaWdodF9kYXRhX3NldC5odG1sI2lucHV0X2NvbHVtbnMgUXVpY2tzaWdodERhdGFTZXQjaW5wdXRfY29sdW1uc31cbiAgKi9cbiAgcmVhZG9ubHkgaW5wdXRDb2x1bW5zOiBRdWlja3NpZ2h0RGF0YVNldFBoeXNpY2FsVGFibGVNYXBSZWxhdGlvbmFsVGFibGVJbnB1dENvbHVtbnNbXTtcbiAgLyoqXG4gICogPHA+VGhlIG5hbWUgb2YgdGhlIHJlbGF0aW9uYWwgdGFibGUuPC9wPlxuICAqIFxuICAqIERvY3MgYXQgVGVycmFmb3JtIFJlZ2lzdHJ5OiB7QGxpbmsgaHR0cHM6Ly93d3cudGVycmFmb3JtLmlvL2RvY3MvcHJvdmlkZXJzL2F3c2NjL3IvcXVpY2tzaWdodF9kYXRhX3NldC5odG1sI25hbWUgUXVpY2tzaWdodERhdGFTZXQjbmFtZX1cbiAgKi9cbiAgcmVhZG9ubHkgbmFtZTogc3RyaW5nO1xuICAvKipcbiAgKiA8cD5UaGUgc2NoZW1hIG5hbWUuIFRoaXMgbmFtZSBhcHBsaWVzIHRvIGNlcnRhaW4gcmVsYXRpb25hbCBkYXRhYmFzZSBlbmdpbmVzLjwvcD5cbiAgKiBcbiAgKiBEb2NzIGF0IFRlcnJhZm9ybSBSZWdpc3RyeToge0BsaW5rIGh0dHBzOi8vd3d3LnRlcnJhZm9ybS5pby9kb2NzL3Byb3ZpZGVycy9hd3NjYy9yL3F1aWNrc2lnaHRfZGF0YV9zZXQuaHRtbCNzY2hlbWEgUXVpY2tzaWdodERhdGFTZXQjc2NoZW1hfVxuICAqL1xuICByZWFkb25seSBzY2hlbWE/OiBzdHJpbmc7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBxdWlja3NpZ2h0RGF0YVNldFBoeXNpY2FsVGFibGVNYXBSZWxhdGlvbmFsVGFibGVUb1RlcnJhZm9ybShzdHJ1Y3Q/OiBRdWlja3NpZ2h0RGF0YVNldFBoeXNpY2FsVGFibGVNYXBSZWxhdGlvbmFsVGFibGUpOiBhbnkge1xuICBpZiAoIWNka3RmLmNhbkluc3BlY3Qoc3RydWN0KSkgeyByZXR1cm4gc3RydWN0OyB9XG4gIHJldHVybiB7XG4gICAgY2F0YWxvZzogY2RrdGYuc3RyaW5nVG9UZXJyYWZvcm0oc3RydWN0IS5jYXRhbG9nKSxcbiAgICBkYXRhX3NvdXJjZV9hcm46IGNka3RmLnN0cmluZ1RvVGVycmFmb3JtKHN0cnVjdCEuZGF0YVNvdXJjZUFybiksXG4gICAgaW5wdXRfY29sdW1uczogY2RrdGYubGlzdE1hcHBlcihxdWlja3NpZ2h0RGF0YVNldFBoeXNpY2FsVGFibGVNYXBSZWxhdGlvbmFsVGFibGVJbnB1dENvbHVtbnNUb1RlcnJhZm9ybSkoc3RydWN0IS5pbnB1dENvbHVtbnMpLFxuICAgIG5hbWU6IGNka3RmLnN0cmluZ1RvVGVycmFmb3JtKHN0cnVjdCEubmFtZSksXG4gICAgc2NoZW1hOiBjZGt0Zi5zdHJpbmdUb1RlcnJhZm9ybShzdHJ1Y3QhLnNjaGVtYSksXG4gIH1cbn1cblxuZXhwb3J0IGludGVyZmFjZSBRdWlja3NpZ2h0RGF0YVNldFBoeXNpY2FsVGFibGVNYXBTM1NvdXJjZUlucHV0Q29sdW1ucyB7XG4gIC8qKlxuICAqIDxwPlRoZSBuYW1lIG9mIHRoaXMgY29sdW1uIGluIHRoZSB1bmRlcmx5aW5nIGRhdGEgc291cmNlLjwvcD5cbiAgKiBcbiAgKiBEb2NzIGF0IFRlcnJhZm9ybSBSZWdpc3RyeToge0BsaW5rIGh0dHBzOi8vd3d3LnRlcnJhZm9ybS5pby9kb2NzL3Byb3ZpZGVycy9hd3NjYy9yL3F1aWNrc2lnaHRfZGF0YV9zZXQuaHRtbCNuYW1lIFF1aWNrc2lnaHREYXRhU2V0I25hbWV9XG4gICovXG4gIHJlYWRvbmx5IG5hbWU6IHN0cmluZztcbiAgLyoqXG4gICogRG9jcyBhdCBUZXJyYWZvcm0gUmVnaXN0cnk6IHtAbGluayBodHRwczovL3d3dy50ZXJyYWZvcm0uaW8vZG9jcy9wcm92aWRlcnMvYXdzY2Mvci9xdWlja3NpZ2h0X2RhdGFfc2V0Lmh0bWwjdHlwZSBRdWlja3NpZ2h0RGF0YVNldCN0eXBlfVxuICAqL1xuICByZWFkb25seSB0eXBlOiBzdHJpbmc7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBxdWlja3NpZ2h0RGF0YVNldFBoeXNpY2FsVGFibGVNYXBTM1NvdXJjZUlucHV0Q29sdW1uc1RvVGVycmFmb3JtKHN0cnVjdD86IFF1aWNrc2lnaHREYXRhU2V0UGh5c2ljYWxUYWJsZU1hcFMzU291cmNlSW5wdXRDb2x1bW5zKTogYW55IHtcbiAgaWYgKCFjZGt0Zi5jYW5JbnNwZWN0KHN0cnVjdCkpIHsgcmV0dXJuIHN0cnVjdDsgfVxuICByZXR1cm4ge1xuICAgIG5hbWU6IGNka3RmLnN0cmluZ1RvVGVycmFmb3JtKHN0cnVjdCEubmFtZSksXG4gICAgdHlwZTogY2RrdGYuc3RyaW5nVG9UZXJyYWZvcm0oc3RydWN0IS50eXBlKSxcbiAgfVxufVxuXG5leHBvcnQgaW50ZXJmYWNlIFF1aWNrc2lnaHREYXRhU2V0UGh5c2ljYWxUYWJsZU1hcFMzU291cmNlVXBsb2FkU2V0dGluZ3Mge1xuICAvKipcbiAgKiA8cD5XaGV0aGVyIHRoZSBmaWxlIGhhcyBhIGhlYWRlciByb3csIG9yIHRoZSBmaWxlcyBlYWNoIGhhdmUgYSBoZWFkZXIgcm93LjwvcD5cbiAgKiBcbiAgKiBEb2NzIGF0IFRlcnJhZm9ybSBSZWdpc3RyeToge0BsaW5rIGh0dHBzOi8vd3d3LnRlcnJhZm9ybS5pby9kb2NzL3Byb3ZpZGVycy9hd3NjYy9yL3F1aWNrc2lnaHRfZGF0YV9zZXQuaHRtbCNjb250YWluc19oZWFkZXIgUXVpY2tzaWdodERhdGFTZXQjY29udGFpbnNfaGVhZGVyfVxuICAqL1xuICByZWFkb25seSBjb250YWluc0hlYWRlcj86IGJvb2xlYW4gfCBjZGt0Zi5JUmVzb2x2YWJsZTtcbiAgLyoqXG4gICogPHA+VGhlIGRlbGltaXRlciBiZXR3ZWVuIHZhbHVlcyBpbiB0aGUgZmlsZS48L3A+XG4gICogXG4gICogRG9jcyBhdCBUZXJyYWZvcm0gUmVnaXN0cnk6IHtAbGluayBodHRwczovL3d3dy50ZXJyYWZvcm0uaW8vZG9jcy9wcm92aWRlcnMvYXdzY2Mvci9xdWlja3NpZ2h0X2RhdGFfc2V0Lmh0bWwjZGVsaW1pdGVyIFF1aWNrc2lnaHREYXRhU2V0I2RlbGltaXRlcn1cbiAgKi9cbiAgcmVhZG9ubHkgZGVsaW1pdGVyPzogc3RyaW5nO1xuICAvKipcbiAgKiBEb2NzIGF0IFRlcnJhZm9ybSBSZWdpc3RyeToge0BsaW5rIGh0dHBzOi8vd3d3LnRlcnJhZm9ybS5pby9kb2NzL3Byb3ZpZGVycy9hd3NjYy9yL3F1aWNrc2lnaHRfZGF0YV9zZXQuaHRtbCNmb3JtYXQgUXVpY2tzaWdodERhdGFTZXQjZm9ybWF0fVxuICAqL1xuICByZWFkb25seSBmb3JtYXQ/OiBzdHJpbmc7XG4gIC8qKlxuICAqIDxwPkEgcm93IG51bWJlciB0byBzdGFydCByZWFkaW5nIGRhdGEgZnJvbS48L3A+XG4gICogXG4gICogRG9jcyBhdCBUZXJyYWZvcm0gUmVnaXN0cnk6IHtAbGluayBodHRwczovL3d3dy50ZXJyYWZvcm0uaW8vZG9jcy9wcm92aWRlcnMvYXdzY2Mvci9xdWlja3NpZ2h0X2RhdGFfc2V0Lmh0bWwjc3RhcnRfZnJvbV9yb3cgUXVpY2tzaWdodERhdGFTZXQjc3RhcnRfZnJvbV9yb3d9XG4gICovXG4gIHJlYWRvbmx5IHN0YXJ0RnJvbVJvdz86IG51bWJlcjtcbiAgLyoqXG4gICogRG9jcyBhdCBUZXJyYWZvcm0gUmVnaXN0cnk6IHtAbGluayBodHRwczovL3d3dy50ZXJyYWZvcm0uaW8vZG9jcy9wcm92aWRlcnMvYXdzY2Mvci9xdWlja3NpZ2h0X2RhdGFfc2V0Lmh0bWwjdGV4dF9xdWFsaWZpZXIgUXVpY2tzaWdodERhdGFTZXQjdGV4dF9xdWFsaWZpZXJ9XG4gICovXG4gIHJlYWRvbmx5IHRleHRRdWFsaWZpZXI/OiBzdHJpbmc7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBxdWlja3NpZ2h0RGF0YVNldFBoeXNpY2FsVGFibGVNYXBTM1NvdXJjZVVwbG9hZFNldHRpbmdzVG9UZXJyYWZvcm0oc3RydWN0PzogUXVpY2tzaWdodERhdGFTZXRQaHlzaWNhbFRhYmxlTWFwUzNTb3VyY2VVcGxvYWRTZXR0aW5ncyk6IGFueSB7XG4gIGlmICghY2RrdGYuY2FuSW5zcGVjdChzdHJ1Y3QpKSB7IHJldHVybiBzdHJ1Y3Q7IH1cbiAgcmV0dXJuIHtcbiAgICBjb250YWluc19oZWFkZXI6IGNka3RmLmJvb2xlYW5Ub1RlcnJhZm9ybShzdHJ1Y3QhLmNvbnRhaW5zSGVhZGVyKSxcbiAgICBkZWxpbWl0ZXI6IGNka3RmLnN0cmluZ1RvVGVycmFmb3JtKHN0cnVjdCEuZGVsaW1pdGVyKSxcbiAgICBmb3JtYXQ6IGNka3RmLnN0cmluZ1RvVGVycmFmb3JtKHN0cnVjdCEuZm9ybWF0KSxcbiAgICBzdGFydF9mcm9tX3JvdzogY2RrdGYubnVtYmVyVG9UZXJyYWZvcm0oc3RydWN0IS5zdGFydEZyb21Sb3cpLFxuICAgIHRleHRfcXVhbGlmaWVyOiBjZGt0Zi5zdHJpbmdUb1RlcnJhZm9ybShzdHJ1Y3QhLnRleHRRdWFsaWZpZXIpLFxuICB9XG59XG5cbmV4cG9ydCBpbnRlcmZhY2UgUXVpY2tzaWdodERhdGFTZXRQaHlzaWNhbFRhYmxlTWFwUzNTb3VyY2Uge1xuICAvKipcbiAgKiA8cD5UaGUgYW1hem9uIFJlc291cmNlIE5hbWUgKEFSTikgZm9yIHRoZSBkYXRhIHNvdXJjZS48L3A+XG4gICogXG4gICogRG9jcyBhdCBUZXJyYWZvcm0gUmVnaXN0cnk6IHtAbGluayBodHRwczovL3d3dy50ZXJyYWZvcm0uaW8vZG9jcy9wcm92aWRlcnMvYXdzY2Mvci9xdWlja3NpZ2h0X2RhdGFfc2V0Lmh0bWwjZGF0YV9zb3VyY2VfYXJuIFF1aWNrc2lnaHREYXRhU2V0I2RhdGFfc291cmNlX2Fybn1cbiAgKi9cbiAgcmVhZG9ubHkgZGF0YVNvdXJjZUFybjogc3RyaW5nO1xuICAvKipcbiAgKiA8cD5BIHBoeXNpY2FsIHRhYmxlIHR5cGUgZm9yIGFzIFMzIGRhdGEgc291cmNlLjwvcD5cbiAgKiBcbiAgKiBEb2NzIGF0IFRlcnJhZm9ybSBSZWdpc3RyeToge0BsaW5rIGh0dHBzOi8vd3d3LnRlcnJhZm9ybS5pby9kb2NzL3Byb3ZpZGVycy9hd3NjYy9yL3F1aWNrc2lnaHRfZGF0YV9zZXQuaHRtbCNpbnB1dF9jb2x1bW5zIFF1aWNrc2lnaHREYXRhU2V0I2lucHV0X2NvbHVtbnN9XG4gICovXG4gIHJlYWRvbmx5IGlucHV0Q29sdW1uczogUXVpY2tzaWdodERhdGFTZXRQaHlzaWNhbFRhYmxlTWFwUzNTb3VyY2VJbnB1dENvbHVtbnNbXTtcbiAgLyoqXG4gICogPHA+SW5mb3JtYXRpb24gYWJvdXQgdGhlIGZvcm1hdCBmb3IgYSBzb3VyY2UgZmlsZSBvciBmaWxlcy48L3A+XG4gICogXG4gICogRG9jcyBhdCBUZXJyYWZvcm0gUmVnaXN0cnk6IHtAbGluayBodHRwczovL3d3dy50ZXJyYWZvcm0uaW8vZG9jcy9wcm92aWRlcnMvYXdzY2Mvci9xdWlja3NpZ2h0X2RhdGFfc2V0Lmh0bWwjdXBsb2FkX3NldHRpbmdzIFF1aWNrc2lnaHREYXRhU2V0I3VwbG9hZF9zZXR0aW5nc31cbiAgKi9cbiAgcmVhZG9ubHkgdXBsb2FkU2V0dGluZ3M/OiBRdWlja3NpZ2h0RGF0YVNldFBoeXNpY2FsVGFibGVNYXBTM1NvdXJjZVVwbG9hZFNldHRpbmdzO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gcXVpY2tzaWdodERhdGFTZXRQaHlzaWNhbFRhYmxlTWFwUzNTb3VyY2VUb1RlcnJhZm9ybShzdHJ1Y3Q/OiBRdWlja3NpZ2h0RGF0YVNldFBoeXNpY2FsVGFibGVNYXBTM1NvdXJjZSk6IGFueSB7XG4gIGlmICghY2RrdGYuY2FuSW5zcGVjdChzdHJ1Y3QpKSB7IHJldHVybiBzdHJ1Y3Q7IH1cbiAgcmV0dXJuIHtcbiAgICBkYXRhX3NvdXJjZV9hcm46IGNka3RmLnN0cmluZ1RvVGVycmFmb3JtKHN0cnVjdCEuZGF0YVNvdXJjZUFybiksXG4gICAgaW5wdXRfY29sdW1uczogY2RrdGYubGlzdE1hcHBlcihxdWlja3NpZ2h0RGF0YVNldFBoeXNpY2FsVGFibGVNYXBTM1NvdXJjZUlucHV0Q29sdW1uc1RvVGVycmFmb3JtKShzdHJ1Y3QhLmlucHV0Q29sdW1ucyksXG4gICAgdXBsb2FkX3NldHRpbmdzOiBxdWlja3NpZ2h0RGF0YVNldFBoeXNpY2FsVGFibGVNYXBTM1NvdXJjZVVwbG9hZFNldHRpbmdzVG9UZXJyYWZvcm0oc3RydWN0IS51cGxvYWRTZXR0aW5ncyksXG4gIH1cbn1cblxuZXhwb3J0IGludGVyZmFjZSBRdWlja3NpZ2h0RGF0YVNldFBoeXNpY2FsVGFibGVNYXAge1xuICAvKipcbiAgKiA8cD5BIHBoeXNpY2FsIHRhYmxlIHR5cGUgYnVpbHQgZnJvbSB0aGUgcmVzdWx0cyBvZiB0aGUgY3VzdG9tIFNRTCBxdWVyeS48L3A+XG4gICogXG4gICogRG9jcyBhdCBUZXJyYWZvcm0gUmVnaXN0cnk6IHtAbGluayBodHRwczovL3d3dy50ZXJyYWZvcm0uaW8vZG9jcy9wcm92aWRlcnMvYXdzY2Mvci9xdWlja3NpZ2h0X2RhdGFfc2V0Lmh0bWwjY3VzdG9tX3NxbCBRdWlja3NpZ2h0RGF0YVNldCNjdXN0b21fc3FsfVxuICAqL1xuICByZWFkb25seSBjdXN0b21TcWw/OiBRdWlja3NpZ2h0RGF0YVNldFBoeXNpY2FsVGFibGVNYXBDdXN0b21TcWw7XG4gIC8qKlxuICAqIDxwPkEgcGh5c2ljYWwgdGFibGUgdHlwZSBmb3IgcmVsYXRpb25hbCBkYXRhIHNvdXJjZXMuPC9wPlxuICAqIFxuICAqIERvY3MgYXQgVGVycmFmb3JtIFJlZ2lzdHJ5OiB7QGxpbmsgaHR0cHM6Ly93d3cudGVycmFmb3JtLmlvL2RvY3MvcHJvdmlkZXJzL2F3c2NjL3IvcXVpY2tzaWdodF9kYXRhX3NldC5odG1sI3JlbGF0aW9uYWxfdGFibGUgUXVpY2tzaWdodERhdGFTZXQjcmVsYXRpb25hbF90YWJsZX1cbiAgKi9cbiAgcmVhZG9ubHkgcmVsYXRpb25hbFRhYmxlPzogUXVpY2tzaWdodERhdGFTZXRQaHlzaWNhbFRhYmxlTWFwUmVsYXRpb25hbFRhYmxlO1xuICAvKipcbiAgKiA8cD5BIHBoeXNpY2FsIHRhYmxlIHR5cGUgZm9yIGFzIFMzIGRhdGEgc291cmNlLjwvcD5cbiAgKiBcbiAgKiBEb2NzIGF0IFRlcnJhZm9ybSBSZWdpc3RyeToge0BsaW5rIGh0dHBzOi8vd3d3LnRlcnJhZm9ybS5pby9kb2NzL3Byb3ZpZGVycy9hd3NjYy9yL3F1aWNrc2lnaHRfZGF0YV9zZXQuaHRtbCNzM19zb3VyY2UgUXVpY2tzaWdodERhdGFTZXQjczNfc291cmNlfVxuICAqL1xuICByZWFkb25seSBzM1NvdXJjZT86IFF1aWNrc2lnaHREYXRhU2V0UGh5c2ljYWxUYWJsZU1hcFMzU291cmNlO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gcXVpY2tzaWdodERhdGFTZXRQaHlzaWNhbFRhYmxlTWFwVG9UZXJyYWZvcm0oc3RydWN0PzogUXVpY2tzaWdodERhdGFTZXRQaHlzaWNhbFRhYmxlTWFwKTogYW55IHtcbiAgaWYgKCFjZGt0Zi5jYW5JbnNwZWN0KHN0cnVjdCkpIHsgcmV0dXJuIHN0cnVjdDsgfVxuICByZXR1cm4ge1xuICAgIGN1c3RvbV9zcWw6IHF1aWNrc2lnaHREYXRhU2V0UGh5c2ljYWxUYWJsZU1hcEN1c3RvbVNxbFRvVGVycmFmb3JtKHN0cnVjdCEuY3VzdG9tU3FsKSxcbiAgICByZWxhdGlvbmFsX3RhYmxlOiBxdWlja3NpZ2h0RGF0YVNldFBoeXNpY2FsVGFibGVNYXBSZWxhdGlvbmFsVGFibGVUb1RlcnJhZm9ybShzdHJ1Y3QhLnJlbGF0aW9uYWxUYWJsZSksXG4gICAgczNfc291cmNlOiBxdWlja3NpZ2h0RGF0YVNldFBoeXNpY2FsVGFibGVNYXBTM1NvdXJjZVRvVGVycmFmb3JtKHN0cnVjdCEuczNTb3VyY2UpLFxuICB9XG59XG5cbmV4cG9ydCBpbnRlcmZhY2UgUXVpY2tzaWdodERhdGFTZXRSb3dMZXZlbFBlcm1pc3Npb25EYXRhU2V0IHtcbiAgLyoqXG4gICogPHA+VGhlIEFtYXpvbiBSZXNvdXJjZSBOYW1lIChBUk4pIG9mIHRoZSBwZXJtaXNzaW9uIGRhdGFzZXQuPC9wPlxuICAqIFxuICAqIERvY3MgYXQgVGVycmFmb3JtIFJlZ2lzdHJ5OiB7QGxpbmsgaHR0cHM6Ly93d3cudGVycmFmb3JtLmlvL2RvY3MvcHJvdmlkZXJzL2F3c2NjL3IvcXVpY2tzaWdodF9kYXRhX3NldC5odG1sI2FybiBRdWlja3NpZ2h0RGF0YVNldCNhcm59XG4gICovXG4gIHJlYWRvbmx5IGFybjogc3RyaW5nO1xuICAvKipcbiAgKiBEb2NzIGF0IFRlcnJhZm9ybSBSZWdpc3RyeToge0BsaW5rIGh0dHBzOi8vd3d3LnRlcnJhZm9ybS5pby9kb2NzL3Byb3ZpZGVycy9hd3NjYy9yL3F1aWNrc2lnaHRfZGF0YV9zZXQuaHRtbCNmb3JtYXRfdmVyc2lvbiBRdWlja3NpZ2h0RGF0YVNldCNmb3JtYXRfdmVyc2lvbn1cbiAgKi9cbiAgcmVhZG9ubHkgZm9ybWF0VmVyc2lvbj86IHN0cmluZztcbiAgLyoqXG4gICogPHA+VGhlIG5hbWVzcGFjZSBhc3NvY2lhdGVkIHdpdGggdGhlIHJvdy1sZXZlbCBwZXJtaXNzaW9ucyBkYXRhc2V0LjwvcD5cbiAgKiBcbiAgKiBEb2NzIGF0IFRlcnJhZm9ybSBSZWdpc3RyeToge0BsaW5rIGh0dHBzOi8vd3d3LnRlcnJhZm9ybS5pby9kb2NzL3Byb3ZpZGVycy9hd3NjYy9yL3F1aWNrc2lnaHRfZGF0YV9zZXQuaHRtbCNuYW1lc3BhY2UgUXVpY2tzaWdodERhdGFTZXQjbmFtZXNwYWNlfVxuICAqL1xuICByZWFkb25seSBuYW1lc3BhY2U/OiBzdHJpbmc7XG4gIC8qKlxuICAqIERvY3MgYXQgVGVycmFmb3JtIFJlZ2lzdHJ5OiB7QGxpbmsgaHR0cHM6Ly93d3cudGVycmFmb3JtLmlvL2RvY3MvcHJvdmlkZXJzL2F3c2NjL3IvcXVpY2tzaWdodF9kYXRhX3NldC5odG1sI3Blcm1pc3Npb25fcG9saWN5IFF1aWNrc2lnaHREYXRhU2V0I3Blcm1pc3Npb25fcG9saWN5fVxuICAqL1xuICByZWFkb25seSBwZXJtaXNzaW9uUG9saWN5OiBzdHJpbmc7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBxdWlja3NpZ2h0RGF0YVNldFJvd0xldmVsUGVybWlzc2lvbkRhdGFTZXRUb1RlcnJhZm9ybShzdHJ1Y3Q/OiBRdWlja3NpZ2h0RGF0YVNldFJvd0xldmVsUGVybWlzc2lvbkRhdGFTZXQpOiBhbnkge1xuICBpZiAoIWNka3RmLmNhbkluc3BlY3Qoc3RydWN0KSkgeyByZXR1cm4gc3RydWN0OyB9XG4gIHJldHVybiB7XG4gICAgYXJuOiBjZGt0Zi5zdHJpbmdUb1RlcnJhZm9ybShzdHJ1Y3QhLmFybiksXG4gICAgZm9ybWF0X3ZlcnNpb246IGNka3RmLnN0cmluZ1RvVGVycmFmb3JtKHN0cnVjdCEuZm9ybWF0VmVyc2lvbiksXG4gICAgbmFtZXNwYWNlOiBjZGt0Zi5zdHJpbmdUb1RlcnJhZm9ybShzdHJ1Y3QhLm5hbWVzcGFjZSksXG4gICAgcGVybWlzc2lvbl9wb2xpY3k6IGNka3RmLnN0cmluZ1RvVGVycmFmb3JtKHN0cnVjdCEucGVybWlzc2lvblBvbGljeSksXG4gIH1cbn1cblxuZXhwb3J0IGludGVyZmFjZSBRdWlja3NpZ2h0RGF0YVNldFRhZ3Mge1xuICAvKipcbiAgKiA8cD5UYWcga2V5LjwvcD5cbiAgKiBcbiAgKiBEb2NzIGF0IFRlcnJhZm9ybSBSZWdpc3RyeToge0BsaW5rIGh0dHBzOi8vd3d3LnRlcnJhZm9ybS5pby9kb2NzL3Byb3ZpZGVycy9hd3NjYy9yL3F1aWNrc2lnaHRfZGF0YV9zZXQuaHRtbCNrZXkgUXVpY2tzaWdodERhdGFTZXQja2V5fVxuICAqL1xuICByZWFkb25seSBrZXk6IHN0cmluZztcbiAgLyoqXG4gICogPHA+VGFnIHZhbHVlLjwvcD5cbiAgKiBcbiAgKiBEb2NzIGF0IFRlcnJhZm9ybSBSZWdpc3RyeToge0BsaW5rIGh0dHBzOi8vd3d3LnRlcnJhZm9ybS5pby9kb2NzL3Byb3ZpZGVycy9hd3NjYy9yL3F1aWNrc2lnaHRfZGF0YV9zZXQuaHRtbCN2YWx1ZSBRdWlja3NpZ2h0RGF0YVNldCN2YWx1ZX1cbiAgKi9cbiAgcmVhZG9ubHkgdmFsdWU6IHN0cmluZztcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIHF1aWNrc2lnaHREYXRhU2V0VGFnc1RvVGVycmFmb3JtKHN0cnVjdD86IFF1aWNrc2lnaHREYXRhU2V0VGFncyk6IGFueSB7XG4gIGlmICghY2RrdGYuY2FuSW5zcGVjdChzdHJ1Y3QpKSB7IHJldHVybiBzdHJ1Y3Q7IH1cbiAgcmV0dXJuIHtcbiAgICBrZXk6IGNka3RmLnN0cmluZ1RvVGVycmFmb3JtKHN0cnVjdCEua2V5KSxcbiAgICB2YWx1ZTogY2RrdGYuc3RyaW5nVG9UZXJyYWZvcm0oc3RydWN0IS52YWx1ZSksXG4gIH1cbn1cblxuXG4vKipcbiogUmVwcmVzZW50cyBhIHtAbGluayBodHRwczovL3d3dy50ZXJyYWZvcm0uaW8vZG9jcy9wcm92aWRlcnMvYXdzY2Mvci9xdWlja3NpZ2h0X2RhdGFfc2V0Lmh0bWwgYXdzY2NfcXVpY2tzaWdodF9kYXRhX3NldH1cbiovXG5leHBvcnQgY2xhc3MgUXVpY2tzaWdodERhdGFTZXQgZXh0ZW5kcyBjZGt0Zi5UZXJyYWZvcm1SZXNvdXJjZSB7XG5cbiAgLy8gPT09PT09PT09PT09PT09PT1cbiAgLy8gU1RBVElDIFBST1BFUlRJRVNcbiAgLy8gPT09PT09PT09PT09PT09PT1cbiAgcHVibGljIHN0YXRpYyByZWFkb25seSB0ZlJlc291cmNlVHlwZTogc3RyaW5nID0gXCJhd3NjY19xdWlja3NpZ2h0X2RhdGFfc2V0XCI7XG5cbiAgLy8gPT09PT09PT09PT1cbiAgLy8gSU5JVElBTElaRVJcbiAgLy8gPT09PT09PT09PT1cblxuICAvKipcbiAgKiBDcmVhdGUgYSBuZXcge0BsaW5rIGh0dHBzOi8vd3d3LnRlcnJhZm9ybS5pby9kb2NzL3Byb3ZpZGVycy9hd3NjYy9yL3F1aWNrc2lnaHRfZGF0YV9zZXQuaHRtbCBhd3NjY19xdWlja3NpZ2h0X2RhdGFfc2V0fSBSZXNvdXJjZVxuICAqXG4gICogQHBhcmFtIHNjb3BlIFRoZSBzY29wZSBpbiB3aGljaCB0byBkZWZpbmUgdGhpcyBjb25zdHJ1Y3RcbiAgKiBAcGFyYW0gaWQgVGhlIHNjb3BlZCBjb25zdHJ1Y3QgSUQuIE11c3QgYmUgdW5pcXVlIGFtb25nc3Qgc2libGluZ3MgaW4gdGhlIHNhbWUgc2NvcGVcbiAgKiBAcGFyYW0gb3B0aW9ucyBRdWlja3NpZ2h0RGF0YVNldENvbmZpZyA9IHt9XG4gICovXG4gIHB1YmxpYyBjb25zdHJ1Y3RvcihzY29wZTogQ29uc3RydWN0LCBpZDogc3RyaW5nLCBjb25maWc6IFF1aWNrc2lnaHREYXRhU2V0Q29uZmlnID0ge30pIHtcbiAgICBzdXBlcihzY29wZSwgaWQsIHtcbiAgICAgIHRlcnJhZm9ybVJlc291cmNlVHlwZTogJ2F3c2NjX3F1aWNrc2lnaHRfZGF0YV9zZXQnLFxuICAgICAgdGVycmFmb3JtR2VuZXJhdG9yTWV0YWRhdGE6IHtcbiAgICAgICAgcHJvdmlkZXJOYW1lOiAnYXdzY2MnXG4gICAgICB9LFxuICAgICAgcHJvdmlkZXI6IGNvbmZpZy5wcm92aWRlcixcbiAgICAgIGRlcGVuZHNPbjogY29uZmlnLmRlcGVuZHNPbixcbiAgICAgIGNvdW50OiBjb25maWcuY291bnQsXG4gICAgICBsaWZlY3ljbGU6IGNvbmZpZy5saWZlY3ljbGVcbiAgICB9KTtcbiAgICB0aGlzLl9hd3NBY2NvdW50SWQgPSBjb25maWcuYXdzQWNjb3VudElkO1xuICAgIHRoaXMuX2NvbHVtbkdyb3VwcyA9IGNvbmZpZy5jb2x1bW5Hcm91cHM7XG4gICAgdGhpcy5fY29sdW1uTGV2ZWxQZXJtaXNzaW9uUnVsZXMgPSBjb25maWcuY29sdW1uTGV2ZWxQZXJtaXNzaW9uUnVsZXM7XG4gICAgdGhpcy5fZGF0YVNldElkID0gY29uZmlnLmRhdGFTZXRJZDtcbiAgICB0aGlzLl9maWVsZEZvbGRlcnMgPSBjb25maWcuZmllbGRGb2xkZXJzO1xuICAgIHRoaXMuX2ltcG9ydE1vZGUgPSBjb25maWcuaW1wb3J0TW9kZTtcbiAgICB0aGlzLl9pbmdlc3Rpb25XYWl0UG9saWN5ID0gY29uZmlnLmluZ2VzdGlvbldhaXRQb2xpY3k7XG4gICAgdGhpcy5fbG9naWNhbFRhYmxlTWFwID0gY29uZmlnLmxvZ2ljYWxUYWJsZU1hcDtcbiAgICB0aGlzLl9uYW1lID0gY29uZmlnLm5hbWU7XG4gICAgdGhpcy5fcGVybWlzc2lvbnMgPSBjb25maWcucGVybWlzc2lvbnM7XG4gICAgdGhpcy5fcGh5c2ljYWxUYWJsZU1hcCA9IGNvbmZpZy5waHlzaWNhbFRhYmxlTWFwO1xuICAgIHRoaXMuX3Jvd0xldmVsUGVybWlzc2lvbkRhdGFTZXQgPSBjb25maWcucm93TGV2ZWxQZXJtaXNzaW9uRGF0YVNldDtcbiAgICB0aGlzLl90YWdzID0gY29uZmlnLnRhZ3M7XG4gIH1cblxuICAvLyA9PT09PT09PT09XG4gIC8vIEFUVFJJQlVURVNcbiAgLy8gPT09PT09PT09PVxuXG4gIC8vIGFybiAtIGNvbXB1dGVkOiB0cnVlLCBvcHRpb25hbDogZmFsc2UsIHJlcXVpcmVkOiBmYWxzZVxuICBwdWJsaWMgZ2V0IGFybigpIHtcbiAgICByZXR1cm4gdGhpcy5nZXRTdHJpbmdBdHRyaWJ1dGUoJ2FybicpO1xuICB9XG5cbiAgLy8gYXdzX2FjY291bnRfaWQgLSBjb21wdXRlZDogdHJ1ZSwgb3B0aW9uYWw6IHRydWUsIHJlcXVpcmVkOiBmYWxzZVxuICBwcml2YXRlIF9hd3NBY2NvdW50SWQ/OiBzdHJpbmc7XG4gIHB1YmxpYyBnZXQgYXdzQWNjb3VudElkKCkge1xuICAgIHJldHVybiB0aGlzLmdldFN0cmluZ0F0dHJpYnV0ZSgnYXdzX2FjY291bnRfaWQnKTtcbiAgfVxuICBwdWJsaWMgc2V0IGF3c0FjY291bnRJZCh2YWx1ZTogc3RyaW5nKSB7XG4gICAgdGhpcy5fYXdzQWNjb3VudElkID0gdmFsdWU7XG4gIH1cbiAgcHVibGljIHJlc2V0QXdzQWNjb3VudElkKCkge1xuICAgIHRoaXMuX2F3c0FjY291bnRJZCA9IHVuZGVmaW5lZDtcbiAgfVxuICAvLyBUZW1wb3JhcmlseSBleHBvc2UgaW5wdXQgdmFsdWUuIFVzZSB3aXRoIGNhdXRpb24uXG4gIHB1YmxpYyBnZXQgYXdzQWNjb3VudElkSW5wdXQoKSB7XG4gICAgcmV0dXJuIHRoaXMuX2F3c0FjY291bnRJZFxuICB9XG5cbiAgLy8gY29sdW1uX2dyb3VwcyAtIGNvbXB1dGVkOiBmYWxzZSwgb3B0aW9uYWw6IHRydWUsIHJlcXVpcmVkOiBmYWxzZVxuICBwcml2YXRlIF9jb2x1bW5Hcm91cHM/OiBRdWlja3NpZ2h0RGF0YVNldENvbHVtbkdyb3Vwc1tdO1xuICBwdWJsaWMgZ2V0IGNvbHVtbkdyb3VwcygpIHtcbiAgICByZXR1cm4gdGhpcy5pbnRlcnBvbGF0aW9uRm9yQXR0cmlidXRlKCdjb2x1bW5fZ3JvdXBzJykgYXMgYW55O1xuICB9XG4gIHB1YmxpYyBzZXQgY29sdW1uR3JvdXBzKHZhbHVlOiBRdWlja3NpZ2h0RGF0YVNldENvbHVtbkdyb3Vwc1tdICkge1xuICAgIHRoaXMuX2NvbHVtbkdyb3VwcyA9IHZhbHVlO1xuICB9XG4gIHB1YmxpYyByZXNldENvbHVtbkdyb3VwcygpIHtcbiAgICB0aGlzLl9jb2x1bW5Hcm91cHMgPSB1bmRlZmluZWQ7XG4gIH1cbiAgLy8gVGVtcG9yYXJpbHkgZXhwb3NlIGlucHV0IHZhbHVlLiBVc2Ugd2l0aCBjYXV0aW9uLlxuICBwdWJsaWMgZ2V0IGNvbHVtbkdyb3Vwc0lucHV0KCkge1xuICAgIHJldHVybiB0aGlzLl9jb2x1bW5Hcm91cHNcbiAgfVxuXG4gIC8vIGNvbHVtbl9sZXZlbF9wZXJtaXNzaW9uX3J1bGVzIC0gY29tcHV0ZWQ6IGZhbHNlLCBvcHRpb25hbDogdHJ1ZSwgcmVxdWlyZWQ6IGZhbHNlXG4gIHByaXZhdGUgX2NvbHVtbkxldmVsUGVybWlzc2lvblJ1bGVzPzogUXVpY2tzaWdodERhdGFTZXRDb2x1bW5MZXZlbFBlcm1pc3Npb25SdWxlc1tdO1xuICBwdWJsaWMgZ2V0IGNvbHVtbkxldmVsUGVybWlzc2lvblJ1bGVzKCkge1xuICAgIHJldHVybiB0aGlzLmludGVycG9sYXRpb25Gb3JBdHRyaWJ1dGUoJ2NvbHVtbl9sZXZlbF9wZXJtaXNzaW9uX3J1bGVzJykgYXMgYW55O1xuICB9XG4gIHB1YmxpYyBzZXQgY29sdW1uTGV2ZWxQZXJtaXNzaW9uUnVsZXModmFsdWU6IFF1aWNrc2lnaHREYXRhU2V0Q29sdW1uTGV2ZWxQZXJtaXNzaW9uUnVsZXNbXSApIHtcbiAgICB0aGlzLl9jb2x1bW5MZXZlbFBlcm1pc3Npb25SdWxlcyA9IHZhbHVlO1xuICB9XG4gIHB1YmxpYyByZXNldENvbHVtbkxldmVsUGVybWlzc2lvblJ1bGVzKCkge1xuICAgIHRoaXMuX2NvbHVtbkxldmVsUGVybWlzc2lvblJ1bGVzID0gdW5kZWZpbmVkO1xuICB9XG4gIC8vIFRlbXBvcmFyaWx5IGV4cG9zZSBpbnB1dCB2YWx1ZS4gVXNlIHdpdGggY2F1dGlvbi5cbiAgcHVibGljIGdldCBjb2x1bW5MZXZlbFBlcm1pc3Npb25SdWxlc0lucHV0KCkge1xuICAgIHJldHVybiB0aGlzLl9jb2x1bW5MZXZlbFBlcm1pc3Npb25SdWxlc1xuICB9XG5cbiAgLy8gY29uc3VtZWRfc3BpY2VfY2FwYWNpdHlfaW5fYnl0ZXMgLSBjb21wdXRlZDogdHJ1ZSwgb3B0aW9uYWw6IGZhbHNlLCByZXF1aXJlZDogZmFsc2VcbiAgcHVibGljIGdldCBjb25zdW1lZFNwaWNlQ2FwYWNpdHlJbkJ5dGVzKCkge1xuICAgIHJldHVybiB0aGlzLmdldE51bWJlckF0dHJpYnV0ZSgnY29uc3VtZWRfc3BpY2VfY2FwYWNpdHlfaW5fYnl0ZXMnKTtcbiAgfVxuXG4gIC8vIGNyZWF0ZWRfdGltZSAtIGNvbXB1dGVkOiB0cnVlLCBvcHRpb25hbDogZmFsc2UsIHJlcXVpcmVkOiBmYWxzZVxuICBwdWJsaWMgZ2V0IGNyZWF0ZWRUaW1lKCkge1xuICAgIHJldHVybiB0aGlzLmdldFN0cmluZ0F0dHJpYnV0ZSgnY3JlYXRlZF90aW1lJyk7XG4gIH1cblxuICAvLyBkYXRhX3NldF9pZCAtIGNvbXB1dGVkOiB0cnVlLCBvcHRpb25hbDogdHJ1ZSwgcmVxdWlyZWQ6IGZhbHNlXG4gIHByaXZhdGUgX2RhdGFTZXRJZD86IHN0cmluZztcbiAgcHVibGljIGdldCBkYXRhU2V0SWQoKSB7XG4gICAgcmV0dXJuIHRoaXMuZ2V0U3RyaW5nQXR0cmlidXRlKCdkYXRhX3NldF9pZCcpO1xuICB9XG4gIHB1YmxpYyBzZXQgZGF0YVNldElkKHZhbHVlOiBzdHJpbmcpIHtcbiAgICB0aGlzLl9kYXRhU2V0SWQgPSB2YWx1ZTtcbiAgfVxuICBwdWJsaWMgcmVzZXREYXRhU2V0SWQoKSB7XG4gICAgdGhpcy5fZGF0YVNldElkID0gdW5kZWZpbmVkO1xuICB9XG4gIC8vIFRlbXBvcmFyaWx5IGV4cG9zZSBpbnB1dCB2YWx1ZS4gVXNlIHdpdGggY2F1dGlvbi5cbiAgcHVibGljIGdldCBkYXRhU2V0SWRJbnB1dCgpIHtcbiAgICByZXR1cm4gdGhpcy5fZGF0YVNldElkXG4gIH1cblxuICAvLyBmaWVsZF9mb2xkZXJzIC0gY29tcHV0ZWQ6IGZhbHNlLCBvcHRpb25hbDogdHJ1ZSwgcmVxdWlyZWQ6IGZhbHNlXG4gIHByaXZhdGUgX2ZpZWxkRm9sZGVycz86IHsgW2tleTogc3RyaW5nXTogUXVpY2tzaWdodERhdGFTZXRGaWVsZEZvbGRlcnMgfSB8IGNka3RmLklSZXNvbHZhYmxlO1xuICBwdWJsaWMgZ2V0IGZpZWxkRm9sZGVycygpIHtcbiAgICByZXR1cm4gdGhpcy5pbnRlcnBvbGF0aW9uRm9yQXR0cmlidXRlKCdmaWVsZF9mb2xkZXJzJykgYXMgYW55O1xuICB9XG4gIHB1YmxpYyBzZXQgZmllbGRGb2xkZXJzKHZhbHVlOiB7IFtrZXk6IHN0cmluZ106IFF1aWNrc2lnaHREYXRhU2V0RmllbGRGb2xkZXJzIH0gfCBjZGt0Zi5JUmVzb2x2YWJsZSApIHtcbiAgICB0aGlzLl9maWVsZEZvbGRlcnMgPSB2YWx1ZTtcbiAgfVxuICBwdWJsaWMgcmVzZXRGaWVsZEZvbGRlcnMoKSB7XG4gICAgdGhpcy5fZmllbGRGb2xkZXJzID0gdW5kZWZpbmVkO1xuICB9XG4gIC8vIFRlbXBvcmFyaWx5IGV4cG9zZSBpbnB1dCB2YWx1ZS4gVXNlIHdpdGggY2F1dGlvbi5cbiAgcHVibGljIGdldCBmaWVsZEZvbGRlcnNJbnB1dCgpIHtcbiAgICByZXR1cm4gdGhpcy5fZmllbGRGb2xkZXJzXG4gIH1cblxuICAvLyBpZCAtIGNvbXB1dGVkOiB0cnVlLCBvcHRpb25hbDogZmFsc2UsIHJlcXVpcmVkOiBmYWxzZVxuICBwdWJsaWMgZ2V0IGlkKCkge1xuICAgIHJldHVybiB0aGlzLmdldFN0cmluZ0F0dHJpYnV0ZSgnaWQnKTtcbiAgfVxuXG4gIC8vIGltcG9ydF9tb2RlIC0gY29tcHV0ZWQ6IGZhbHNlLCBvcHRpb25hbDogdHJ1ZSwgcmVxdWlyZWQ6IGZhbHNlXG4gIHByaXZhdGUgX2ltcG9ydE1vZGU/OiBzdHJpbmc7XG4gIHB1YmxpYyBnZXQgaW1wb3J0TW9kZSgpIHtcbiAgICByZXR1cm4gdGhpcy5nZXRTdHJpbmdBdHRyaWJ1dGUoJ2ltcG9ydF9tb2RlJyk7XG4gIH1cbiAgcHVibGljIHNldCBpbXBvcnRNb2RlKHZhbHVlOiBzdHJpbmcgKSB7XG4gICAgdGhpcy5faW1wb3J0TW9kZSA9IHZhbHVlO1xuICB9XG4gIHB1YmxpYyByZXNldEltcG9ydE1vZGUoKSB7XG4gICAgdGhpcy5faW1wb3J0TW9kZSA9IHVuZGVmaW5lZDtcbiAgfVxuICAvLyBUZW1wb3JhcmlseSBleHBvc2UgaW5wdXQgdmFsdWUuIFVzZSB3aXRoIGNhdXRpb24uXG4gIHB1YmxpYyBnZXQgaW1wb3J0TW9kZUlucHV0KCkge1xuICAgIHJldHVybiB0aGlzLl9pbXBvcnRNb2RlXG4gIH1cblxuICAvLyBpbmdlc3Rpb25fd2FpdF9wb2xpY3kgLSBjb21wdXRlZDogZmFsc2UsIG9wdGlvbmFsOiB0cnVlLCByZXF1aXJlZDogZmFsc2VcbiAgcHJpdmF0ZSBfaW5nZXN0aW9uV2FpdFBvbGljeT86IFF1aWNrc2lnaHREYXRhU2V0SW5nZXN0aW9uV2FpdFBvbGljeTtcbiAgcHVibGljIGdldCBpbmdlc3Rpb25XYWl0UG9saWN5KCkge1xuICAgIHJldHVybiB0aGlzLmludGVycG9sYXRpb25Gb3JBdHRyaWJ1dGUoJ2luZ2VzdGlvbl93YWl0X3BvbGljeScpIGFzIGFueTtcbiAgfVxuICBwdWJsaWMgc2V0IGluZ2VzdGlvbldhaXRQb2xpY3kodmFsdWU6IFF1aWNrc2lnaHREYXRhU2V0SW5nZXN0aW9uV2FpdFBvbGljeSApIHtcbiAgICB0aGlzLl9pbmdlc3Rpb25XYWl0UG9saWN5ID0gdmFsdWU7XG4gIH1cbiAgcHVibGljIHJlc2V0SW5nZXN0aW9uV2FpdFBvbGljeSgpIHtcbiAgICB0aGlzLl9pbmdlc3Rpb25XYWl0UG9saWN5ID0gdW5kZWZpbmVkO1xuICB9XG4gIC8vIFRlbXBvcmFyaWx5IGV4cG9zZSBpbnB1dCB2YWx1ZS4gVXNlIHdpdGggY2F1dGlvbi5cbiAgcHVibGljIGdldCBpbmdlc3Rpb25XYWl0UG9saWN5SW5wdXQoKSB7XG4gICAgcmV0dXJuIHRoaXMuX2luZ2VzdGlvbldhaXRQb2xpY3lcbiAgfVxuXG4gIC8vIGxhc3RfdXBkYXRlZF90aW1lIC0gY29tcHV0ZWQ6IHRydWUsIG9wdGlvbmFsOiBmYWxzZSwgcmVxdWlyZWQ6IGZhbHNlXG4gIHB1YmxpYyBnZXQgbGFzdFVwZGF0ZWRUaW1lKCkge1xuICAgIHJldHVybiB0aGlzLmdldFN0cmluZ0F0dHJpYnV0ZSgnbGFzdF91cGRhdGVkX3RpbWUnKTtcbiAgfVxuXG4gIC8vIGxvZ2ljYWxfdGFibGVfbWFwIC0gY29tcHV0ZWQ6IGZhbHNlLCBvcHRpb25hbDogdHJ1ZSwgcmVxdWlyZWQ6IGZhbHNlXG4gIHByaXZhdGUgX2xvZ2ljYWxUYWJsZU1hcD86IHsgW2tleTogc3RyaW5nXTogUXVpY2tzaWdodERhdGFTZXRMb2dpY2FsVGFibGVNYXAgfSB8IGNka3RmLklSZXNvbHZhYmxlO1xuICBwdWJsaWMgZ2V0IGxvZ2ljYWxUYWJsZU1hcCgpIHtcbiAgICByZXR1cm4gdGhpcy5pbnRlcnBvbGF0aW9uRm9yQXR0cmlidXRlKCdsb2dpY2FsX3RhYmxlX21hcCcpIGFzIGFueTtcbiAgfVxuICBwdWJsaWMgc2V0IGxvZ2ljYWxUYWJsZU1hcCh2YWx1ZTogeyBba2V5OiBzdHJpbmddOiBRdWlja3NpZ2h0RGF0YVNldExvZ2ljYWxUYWJsZU1hcCB9IHwgY2RrdGYuSVJlc29sdmFibGUgKSB7XG4gICAgdGhpcy5fbG9naWNhbFRhYmxlTWFwID0gdmFsdWU7XG4gIH1cbiAgcHVibGljIHJlc2V0TG9naWNhbFRhYmxlTWFwKCkge1xuICAgIHRoaXMuX2xvZ2ljYWxUYWJsZU1hcCA9IHVuZGVmaW5lZDtcbiAgfVxuICAvLyBUZW1wb3JhcmlseSBleHBvc2UgaW5wdXQgdmFsdWUuIFVzZSB3aXRoIGNhdXRpb24uXG4gIHB1YmxpYyBnZXQgbG9naWNhbFRhYmxlTWFwSW5wdXQoKSB7XG4gICAgcmV0dXJuIHRoaXMuX2xvZ2ljYWxUYWJsZU1hcFxuICB9XG5cbiAgLy8gbmFtZSAtIGNvbXB1dGVkOiBmYWxzZSwgb3B0aW9uYWw6IHRydWUsIHJlcXVpcmVkOiBmYWxzZVxuICBwcml2YXRlIF9uYW1lPzogc3RyaW5nO1xuICBwdWJsaWMgZ2V0IG5hbWUoKSB7XG4gICAgcmV0dXJuIHRoaXMuZ2V0U3RyaW5nQXR0cmlidXRlKCduYW1lJyk7XG4gIH1cbiAgcHVibGljIHNldCBuYW1lKHZhbHVlOiBzdHJpbmcgKSB7XG4gICAgdGhpcy5fbmFtZSA9IHZhbHVlO1xuICB9XG4gIHB1YmxpYyByZXNldE5hbWUoKSB7XG4gICAgdGhpcy5fbmFtZSA9IHVuZGVmaW5lZDtcbiAgfVxuICAvLyBUZW1wb3JhcmlseSBleHBvc2UgaW5wdXQgdmFsdWUuIFVzZSB3aXRoIGNhdXRpb24uXG4gIHB1YmxpYyBnZXQgbmFtZUlucHV0KCkge1xuICAgIHJldHVybiB0aGlzLl9uYW1lXG4gIH1cblxuICAvLyBvdXRwdXRfY29sdW1ucyAtIGNvbXB1dGVkOiB0cnVlLCBvcHRpb25hbDogZmFsc2UsIHJlcXVpcmVkOiBmYWxzZVxuICBwdWJsaWMgZ2V0IG91dHB1dENvbHVtbnMoKSB7XG4gICAgcmV0dXJuIHRoaXMuaW50ZXJwb2xhdGlvbkZvckF0dHJpYnV0ZSgnb3V0cHV0X2NvbHVtbnMnKSBhcyBhbnk7XG4gIH1cblxuICAvLyBwZXJtaXNzaW9ucyAtIGNvbXB1dGVkOiBmYWxzZSwgb3B0aW9uYWw6IHRydWUsIHJlcXVpcmVkOiBmYWxzZVxuICBwcml2YXRlIF9wZXJtaXNzaW9ucz86IFF1aWNrc2lnaHREYXRhU2V0UGVybWlzc2lvbnNbXTtcbiAgcHVibGljIGdldCBwZXJtaXNzaW9ucygpIHtcbiAgICByZXR1cm4gdGhpcy5pbnRlcnBvbGF0aW9uRm9yQXR0cmlidXRlKCdwZXJtaXNzaW9ucycpIGFzIGFueTtcbiAgfVxuICBwdWJsaWMgc2V0IHBlcm1pc3Npb25zKHZhbHVlOiBRdWlja3NpZ2h0RGF0YVNldFBlcm1pc3Npb25zW10gKSB7XG4gICAgdGhpcy5fcGVybWlzc2lvbnMgPSB2YWx1ZTtcbiAgfVxuICBwdWJsaWMgcmVzZXRQZXJtaXNzaW9ucygpIHtcbiAgICB0aGlzLl9wZXJtaXNzaW9ucyA9IHVuZGVmaW5lZDtcbiAgfVxuICAvLyBUZW1wb3JhcmlseSBleHBvc2UgaW5wdXQgdmFsdWUuIFVzZSB3aXRoIGNhdXRpb24uXG4gIHB1YmxpYyBnZXQgcGVybWlzc2lvbnNJbnB1dCgpIHtcbiAgICByZXR1cm4gdGhpcy5fcGVybWlzc2lvbnNcbiAgfVxuXG4gIC8vIHBoeXNpY2FsX3RhYmxlX21hcCAtIGNvbXB1dGVkOiBmYWxzZSwgb3B0aW9uYWw6IHRydWUsIHJlcXVpcmVkOiBmYWxzZVxuICBwcml2YXRlIF9waHlzaWNhbFRhYmxlTWFwPzogeyBba2V5OiBzdHJpbmddOiBRdWlja3NpZ2h0RGF0YVNldFBoeXNpY2FsVGFibGVNYXAgfSB8IGNka3RmLklSZXNvbHZhYmxlO1xuICBwdWJsaWMgZ2V0IHBoeXNpY2FsVGFibGVNYXAoKSB7XG4gICAgcmV0dXJuIHRoaXMuaW50ZXJwb2xhdGlvbkZvckF0dHJpYnV0ZSgncGh5c2ljYWxfdGFibGVfbWFwJykgYXMgYW55O1xuICB9XG4gIHB1YmxpYyBzZXQgcGh5c2ljYWxUYWJsZU1hcCh2YWx1ZTogeyBba2V5OiBzdHJpbmddOiBRdWlja3NpZ2h0RGF0YVNldFBoeXNpY2FsVGFibGVNYXAgfSB8IGNka3RmLklSZXNvbHZhYmxlICkge1xuICAgIHRoaXMuX3BoeXNpY2FsVGFibGVNYXAgPSB2YWx1ZTtcbiAgfVxuICBwdWJsaWMgcmVzZXRQaHlzaWNhbFRhYmxlTWFwKCkge1xuICAgIHRoaXMuX3BoeXNpY2FsVGFibGVNYXAgPSB1bmRlZmluZWQ7XG4gIH1cbiAgLy8gVGVtcG9yYXJpbHkgZXhwb3NlIGlucHV0IHZhbHVlLiBVc2Ugd2l0aCBjYXV0aW9uLlxuICBwdWJsaWMgZ2V0IHBoeXNpY2FsVGFibGVNYXBJbnB1dCgpIHtcbiAgICByZXR1cm4gdGhpcy5fcGh5c2ljYWxUYWJsZU1hcFxuICB9XG5cbiAgLy8gcm93X2xldmVsX3Blcm1pc3Npb25fZGF0YV9zZXQgLSBjb21wdXRlZDogZmFsc2UsIG9wdGlvbmFsOiB0cnVlLCByZXF1aXJlZDogZmFsc2VcbiAgcHJpdmF0ZSBfcm93TGV2ZWxQZXJtaXNzaW9uRGF0YVNldD86IFF1aWNrc2lnaHREYXRhU2V0Um93TGV2ZWxQZXJtaXNzaW9uRGF0YVNldDtcbiAgcHVibGljIGdldCByb3dMZXZlbFBlcm1pc3Npb25EYXRhU2V0KCkge1xuICAgIHJldHVybiB0aGlzLmludGVycG9sYXRpb25Gb3JBdHRyaWJ1dGUoJ3Jvd19sZXZlbF9wZXJtaXNzaW9uX2RhdGFfc2V0JykgYXMgYW55O1xuICB9XG4gIHB1YmxpYyBzZXQgcm93TGV2ZWxQZXJtaXNzaW9uRGF0YVNldCh2YWx1ZTogUXVpY2tzaWdodERhdGFTZXRSb3dMZXZlbFBlcm1pc3Npb25EYXRhU2V0ICkge1xuICAgIHRoaXMuX3Jvd0xldmVsUGVybWlzc2lvbkRhdGFTZXQgPSB2YWx1ZTtcbiAgfVxuICBwdWJsaWMgcmVzZXRSb3dMZXZlbFBlcm1pc3Npb25EYXRhU2V0KCkge1xuICAgIHRoaXMuX3Jvd0xldmVsUGVybWlzc2lvbkRhdGFTZXQgPSB1bmRlZmluZWQ7XG4gIH1cbiAgLy8gVGVtcG9yYXJpbHkgZXhwb3NlIGlucHV0IHZhbHVlLiBVc2Ugd2l0aCBjYXV0aW9uLlxuICBwdWJsaWMgZ2V0IHJvd0xldmVsUGVybWlzc2lvbkRhdGFTZXRJbnB1dCgpIHtcbiAgICByZXR1cm4gdGhpcy5fcm93TGV2ZWxQZXJtaXNzaW9uRGF0YVNldFxuICB9XG5cbiAgLy8gdGFncyAtIGNvbXB1dGVkOiBmYWxzZSwgb3B0aW9uYWw6IHRydWUsIHJlcXVpcmVkOiBmYWxzZVxuICBwcml2YXRlIF90YWdzPzogUXVpY2tzaWdodERhdGFTZXRUYWdzW107XG4gIHB1YmxpYyBnZXQgdGFncygpIHtcbiAgICByZXR1cm4gdGhpcy5pbnRlcnBvbGF0aW9uRm9yQXR0cmlidXRlKCd0YWdzJykgYXMgYW55O1xuICB9XG4gIHB1YmxpYyBzZXQgdGFncyh2YWx1ZTogUXVpY2tzaWdodERhdGFTZXRUYWdzW10gKSB7XG4gICAgdGhpcy5fdGFncyA9IHZhbHVlO1xuICB9XG4gIHB1YmxpYyByZXNldFRhZ3MoKSB7XG4gICAgdGhpcy5fdGFncyA9IHVuZGVmaW5lZDtcbiAgfVxuICAvLyBUZW1wb3JhcmlseSBleHBvc2UgaW5wdXQgdmFsdWUuIFVzZSB3aXRoIGNhdXRpb24uXG4gIHB1YmxpYyBnZXQgdGFnc0lucHV0KCkge1xuICAgIHJldHVybiB0aGlzLl90YWdzXG4gIH1cblxuICAvLyA9PT09PT09PT1cbiAgLy8gU1lOVEhFU0lTXG4gIC8vID09PT09PT09PVxuXG4gIHByb3RlY3RlZCBzeW50aGVzaXplQXR0cmlidXRlcygpOiB7IFtuYW1lOiBzdHJpbmddOiBhbnkgfSB7XG4gICAgcmV0dXJuIHtcbiAgICAgIGF3c19hY2NvdW50X2lkOiBjZGt0Zi5zdHJpbmdUb1RlcnJhZm9ybSh0aGlzLl9hd3NBY2NvdW50SWQpLFxuICAgICAgY29sdW1uX2dyb3VwczogY2RrdGYubGlzdE1hcHBlcihxdWlja3NpZ2h0RGF0YVNldENvbHVtbkdyb3Vwc1RvVGVycmFmb3JtKSh0aGlzLl9jb2x1bW5Hcm91cHMpLFxuICAgICAgY29sdW1uX2xldmVsX3Blcm1pc3Npb25fcnVsZXM6IGNka3RmLmxpc3RNYXBwZXIocXVpY2tzaWdodERhdGFTZXRDb2x1bW5MZXZlbFBlcm1pc3Npb25SdWxlc1RvVGVycmFmb3JtKSh0aGlzLl9jb2x1bW5MZXZlbFBlcm1pc3Npb25SdWxlcyksXG4gICAgICBkYXRhX3NldF9pZDogY2RrdGYuc3RyaW5nVG9UZXJyYWZvcm0odGhpcy5fZGF0YVNldElkKSxcbiAgICAgIGZpZWxkX2ZvbGRlcnM6IGNka3RmLmhhc2hNYXBwZXIoY2RrdGYuYW55VG9UZXJyYWZvcm0pKHRoaXMuX2ZpZWxkRm9sZGVycyksXG4gICAgICBpbXBvcnRfbW9kZTogY2RrdGYuc3RyaW5nVG9UZXJyYWZvcm0odGhpcy5faW1wb3J0TW9kZSksXG4gICAgICBpbmdlc3Rpb25fd2FpdF9wb2xpY3k6IHF1aWNrc2lnaHREYXRhU2V0SW5nZXN0aW9uV2FpdFBvbGljeVRvVGVycmFmb3JtKHRoaXMuX2luZ2VzdGlvbldhaXRQb2xpY3kpLFxuICAgICAgbG9naWNhbF90YWJsZV9tYXA6IGNka3RmLmhhc2hNYXBwZXIoY2RrdGYuYW55VG9UZXJyYWZvcm0pKHRoaXMuX2xvZ2ljYWxUYWJsZU1hcCksXG4gICAgICBuYW1lOiBjZGt0Zi5zdHJpbmdUb1RlcnJhZm9ybSh0aGlzLl9uYW1lKSxcbiAgICAgIHBlcm1pc3Npb25zOiBjZGt0Zi5saXN0TWFwcGVyKHF1aWNrc2lnaHREYXRhU2V0UGVybWlzc2lvbnNUb1RlcnJhZm9ybSkodGhpcy5fcGVybWlzc2lvbnMpLFxuICAgICAgcGh5c2ljYWxfdGFibGVfbWFwOiBjZGt0Zi5oYXNoTWFwcGVyKGNka3RmLmFueVRvVGVycmFmb3JtKSh0aGlzLl9waHlzaWNhbFRhYmxlTWFwKSxcbiAgICAgIHJvd19sZXZlbF9wZXJtaXNzaW9uX2RhdGFfc2V0OiBxdWlja3NpZ2h0RGF0YVNldFJvd0xldmVsUGVybWlzc2lvbkRhdGFTZXRUb1RlcnJhZm9ybSh0aGlzLl9yb3dMZXZlbFBlcm1pc3Npb25EYXRhU2V0KSxcbiAgICAgIHRhZ3M6IGNka3RmLmxpc3RNYXBwZXIocXVpY2tzaWdodERhdGFTZXRUYWdzVG9UZXJyYWZvcm0pKHRoaXMuX3RhZ3MpLFxuICAgIH07XG4gIH1cbn1cbiJdfQ==