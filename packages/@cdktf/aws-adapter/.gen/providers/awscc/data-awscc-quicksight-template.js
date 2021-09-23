"use strict";
// https://www.terraform.io/docs/providers/awscc/d/quicksight_template.html
// generated from terraform resource schema
Object.defineProperty(exports, "__esModule", { value: true });
exports.DataAwsccQuicksightTemplate = exports.dataAwsccQuicksightTemplateVersionToTerraform = exports.DataAwsccQuicksightTemplateVersion = exports.dataAwsccQuicksightTemplateVersionSheetsToTerraform = exports.DataAwsccQuicksightTemplateVersionSheets = exports.dataAwsccQuicksightTemplateVersionErrorsToTerraform = exports.DataAwsccQuicksightTemplateVersionErrors = exports.dataAwsccQuicksightTemplateVersionDataSetConfigurationsToTerraform = exports.DataAwsccQuicksightTemplateVersionDataSetConfigurations = exports.dataAwsccQuicksightTemplateVersionDataSetConfigurationsDataSetSchemaToTerraform = exports.DataAwsccQuicksightTemplateVersionDataSetConfigurationsDataSetSchema = exports.dataAwsccQuicksightTemplateVersionDataSetConfigurationsDataSetSchemaColumnSchemaListToTerraform = exports.DataAwsccQuicksightTemplateVersionDataSetConfigurationsDataSetSchemaColumnSchemaList = exports.dataAwsccQuicksightTemplateVersionDataSetConfigurationsColumnGroupSchemaListToTerraform = exports.DataAwsccQuicksightTemplateVersionDataSetConfigurationsColumnGroupSchemaList = exports.dataAwsccQuicksightTemplateVersionDataSetConfigurationsColumnGroupSchemaListColumnGroupColumnSchemaListToTerraform = exports.DataAwsccQuicksightTemplateVersionDataSetConfigurationsColumnGroupSchemaListColumnGroupColumnSchemaList = exports.dataAwsccQuicksightTemplateTagsToTerraform = exports.DataAwsccQuicksightTemplateTags = exports.dataAwsccQuicksightTemplateSourceEntityToTerraform = exports.DataAwsccQuicksightTemplateSourceEntity = exports.dataAwsccQuicksightTemplateSourceEntitySourceTemplateToTerraform = exports.DataAwsccQuicksightTemplateSourceEntitySourceTemplate = exports.dataAwsccQuicksightTemplateSourceEntitySourceAnalysisToTerraform = exports.DataAwsccQuicksightTemplateSourceEntitySourceAnalysis = exports.dataAwsccQuicksightTemplateSourceEntitySourceAnalysisDataSetReferencesToTerraform = exports.DataAwsccQuicksightTemplateSourceEntitySourceAnalysisDataSetReferences = exports.dataAwsccQuicksightTemplatePermissionsToTerraform = exports.DataAwsccQuicksightTemplatePermissions = void 0;
const cdktf = require("cdktf");
class DataAwsccQuicksightTemplatePermissions extends cdktf.ComplexComputedList {
    // actions - computed: true, optional: false, required: false
    get actions() {
        return this.getListAttribute('actions');
    }
    // principal - computed: true, optional: false, required: false
    get principal() {
        return this.getStringAttribute('principal');
    }
}
exports.DataAwsccQuicksightTemplatePermissions = DataAwsccQuicksightTemplatePermissions;
function dataAwsccQuicksightTemplatePermissionsToTerraform(struct) {
    if (!cdktf.canInspect(struct)) {
        return struct;
    }
    return {
        actions: cdktf.listMapper(cdktf.stringToTerraform)(struct.actions),
        principal: cdktf.stringToTerraform(struct.principal),
    };
}
exports.dataAwsccQuicksightTemplatePermissionsToTerraform = dataAwsccQuicksightTemplatePermissionsToTerraform;
class DataAwsccQuicksightTemplateSourceEntitySourceAnalysisDataSetReferences extends cdktf.ComplexComputedList {
    // data_set_arn - computed: true, optional: false, required: false
    get dataSetArn() {
        return this.getStringAttribute('data_set_arn');
    }
    // data_set_placeholder - computed: true, optional: false, required: false
    get dataSetPlaceholder() {
        return this.getStringAttribute('data_set_placeholder');
    }
}
exports.DataAwsccQuicksightTemplateSourceEntitySourceAnalysisDataSetReferences = DataAwsccQuicksightTemplateSourceEntitySourceAnalysisDataSetReferences;
function dataAwsccQuicksightTemplateSourceEntitySourceAnalysisDataSetReferencesToTerraform(struct) {
    if (!cdktf.canInspect(struct)) {
        return struct;
    }
    return {
        data_set_arn: cdktf.stringToTerraform(struct.dataSetArn),
        data_set_placeholder: cdktf.stringToTerraform(struct.dataSetPlaceholder),
    };
}
exports.dataAwsccQuicksightTemplateSourceEntitySourceAnalysisDataSetReferencesToTerraform = dataAwsccQuicksightTemplateSourceEntitySourceAnalysisDataSetReferencesToTerraform;
class DataAwsccQuicksightTemplateSourceEntitySourceAnalysis extends cdktf.ComplexComputedList {
    // arn - computed: true, optional: false, required: false
    get arn() {
        return this.getStringAttribute('arn');
    }
    // data_set_references - computed: true, optional: false, required: false
    get dataSetReferences() {
        return this.interpolationForAttribute('data_set_references');
    }
}
exports.DataAwsccQuicksightTemplateSourceEntitySourceAnalysis = DataAwsccQuicksightTemplateSourceEntitySourceAnalysis;
function dataAwsccQuicksightTemplateSourceEntitySourceAnalysisToTerraform(struct) {
    if (!cdktf.canInspect(struct)) {
        return struct;
    }
    return {
        arn: cdktf.stringToTerraform(struct.arn),
        data_set_references: cdktf.listMapper(dataAwsccQuicksightTemplateSourceEntitySourceAnalysisDataSetReferencesToTerraform)(struct.dataSetReferences),
    };
}
exports.dataAwsccQuicksightTemplateSourceEntitySourceAnalysisToTerraform = dataAwsccQuicksightTemplateSourceEntitySourceAnalysisToTerraform;
class DataAwsccQuicksightTemplateSourceEntitySourceTemplate extends cdktf.ComplexComputedList {
    // arn - computed: true, optional: false, required: false
    get arn() {
        return this.getStringAttribute('arn');
    }
}
exports.DataAwsccQuicksightTemplateSourceEntitySourceTemplate = DataAwsccQuicksightTemplateSourceEntitySourceTemplate;
function dataAwsccQuicksightTemplateSourceEntitySourceTemplateToTerraform(struct) {
    if (!cdktf.canInspect(struct)) {
        return struct;
    }
    return {
        arn: cdktf.stringToTerraform(struct.arn),
    };
}
exports.dataAwsccQuicksightTemplateSourceEntitySourceTemplateToTerraform = dataAwsccQuicksightTemplateSourceEntitySourceTemplateToTerraform;
class DataAwsccQuicksightTemplateSourceEntity extends cdktf.ComplexComputedList {
    // source_analysis - computed: true, optional: false, required: false
    get sourceAnalysis() {
        return this.interpolationForAttribute('source_analysis');
    }
    // source_template - computed: true, optional: false, required: false
    get sourceTemplate() {
        return this.interpolationForAttribute('source_template');
    }
}
exports.DataAwsccQuicksightTemplateSourceEntity = DataAwsccQuicksightTemplateSourceEntity;
function dataAwsccQuicksightTemplateSourceEntityToTerraform(struct) {
    if (!cdktf.canInspect(struct)) {
        return struct;
    }
    return {
        source_analysis: dataAwsccQuicksightTemplateSourceEntitySourceAnalysisToTerraform(struct.sourceAnalysis),
        source_template: dataAwsccQuicksightTemplateSourceEntitySourceTemplateToTerraform(struct.sourceTemplate),
    };
}
exports.dataAwsccQuicksightTemplateSourceEntityToTerraform = dataAwsccQuicksightTemplateSourceEntityToTerraform;
class DataAwsccQuicksightTemplateTags extends cdktf.ComplexComputedList {
    // key - computed: true, optional: false, required: false
    get key() {
        return this.getStringAttribute('key');
    }
    // value - computed: true, optional: false, required: false
    get value() {
        return this.getStringAttribute('value');
    }
}
exports.DataAwsccQuicksightTemplateTags = DataAwsccQuicksightTemplateTags;
function dataAwsccQuicksightTemplateTagsToTerraform(struct) {
    if (!cdktf.canInspect(struct)) {
        return struct;
    }
    return {
        key: cdktf.stringToTerraform(struct.key),
        value: cdktf.stringToTerraform(struct.value),
    };
}
exports.dataAwsccQuicksightTemplateTagsToTerraform = dataAwsccQuicksightTemplateTagsToTerraform;
class DataAwsccQuicksightTemplateVersionDataSetConfigurationsColumnGroupSchemaListColumnGroupColumnSchemaList extends cdktf.ComplexComputedList {
    // name - computed: true, optional: false, required: false
    get name() {
        return this.getStringAttribute('name');
    }
}
exports.DataAwsccQuicksightTemplateVersionDataSetConfigurationsColumnGroupSchemaListColumnGroupColumnSchemaList = DataAwsccQuicksightTemplateVersionDataSetConfigurationsColumnGroupSchemaListColumnGroupColumnSchemaList;
function dataAwsccQuicksightTemplateVersionDataSetConfigurationsColumnGroupSchemaListColumnGroupColumnSchemaListToTerraform(struct) {
    if (!cdktf.canInspect(struct)) {
        return struct;
    }
    return {
        name: cdktf.stringToTerraform(struct.name),
    };
}
exports.dataAwsccQuicksightTemplateVersionDataSetConfigurationsColumnGroupSchemaListColumnGroupColumnSchemaListToTerraform = dataAwsccQuicksightTemplateVersionDataSetConfigurationsColumnGroupSchemaListColumnGroupColumnSchemaListToTerraform;
class DataAwsccQuicksightTemplateVersionDataSetConfigurationsColumnGroupSchemaList extends cdktf.ComplexComputedList {
    // column_group_column_schema_list - computed: true, optional: false, required: false
    get columnGroupColumnSchemaList() {
        return this.interpolationForAttribute('column_group_column_schema_list');
    }
    // name - computed: true, optional: false, required: false
    get name() {
        return this.getStringAttribute('name');
    }
}
exports.DataAwsccQuicksightTemplateVersionDataSetConfigurationsColumnGroupSchemaList = DataAwsccQuicksightTemplateVersionDataSetConfigurationsColumnGroupSchemaList;
function dataAwsccQuicksightTemplateVersionDataSetConfigurationsColumnGroupSchemaListToTerraform(struct) {
    if (!cdktf.canInspect(struct)) {
        return struct;
    }
    return {
        column_group_column_schema_list: cdktf.listMapper(dataAwsccQuicksightTemplateVersionDataSetConfigurationsColumnGroupSchemaListColumnGroupColumnSchemaListToTerraform)(struct.columnGroupColumnSchemaList),
        name: cdktf.stringToTerraform(struct.name),
    };
}
exports.dataAwsccQuicksightTemplateVersionDataSetConfigurationsColumnGroupSchemaListToTerraform = dataAwsccQuicksightTemplateVersionDataSetConfigurationsColumnGroupSchemaListToTerraform;
class DataAwsccQuicksightTemplateVersionDataSetConfigurationsDataSetSchemaColumnSchemaList extends cdktf.ComplexComputedList {
    // data_type - computed: true, optional: false, required: false
    get dataType() {
        return this.getStringAttribute('data_type');
    }
    // geographic_role - computed: true, optional: false, required: false
    get geographicRole() {
        return this.getStringAttribute('geographic_role');
    }
    // name - computed: true, optional: false, required: false
    get name() {
        return this.getStringAttribute('name');
    }
}
exports.DataAwsccQuicksightTemplateVersionDataSetConfigurationsDataSetSchemaColumnSchemaList = DataAwsccQuicksightTemplateVersionDataSetConfigurationsDataSetSchemaColumnSchemaList;
function dataAwsccQuicksightTemplateVersionDataSetConfigurationsDataSetSchemaColumnSchemaListToTerraform(struct) {
    if (!cdktf.canInspect(struct)) {
        return struct;
    }
    return {
        data_type: cdktf.stringToTerraform(struct.dataType),
        geographic_role: cdktf.stringToTerraform(struct.geographicRole),
        name: cdktf.stringToTerraform(struct.name),
    };
}
exports.dataAwsccQuicksightTemplateVersionDataSetConfigurationsDataSetSchemaColumnSchemaListToTerraform = dataAwsccQuicksightTemplateVersionDataSetConfigurationsDataSetSchemaColumnSchemaListToTerraform;
class DataAwsccQuicksightTemplateVersionDataSetConfigurationsDataSetSchema extends cdktf.ComplexComputedList {
    // column_schema_list - computed: true, optional: false, required: false
    get columnSchemaList() {
        return this.interpolationForAttribute('column_schema_list');
    }
}
exports.DataAwsccQuicksightTemplateVersionDataSetConfigurationsDataSetSchema = DataAwsccQuicksightTemplateVersionDataSetConfigurationsDataSetSchema;
function dataAwsccQuicksightTemplateVersionDataSetConfigurationsDataSetSchemaToTerraform(struct) {
    if (!cdktf.canInspect(struct)) {
        return struct;
    }
    return {
        column_schema_list: cdktf.listMapper(dataAwsccQuicksightTemplateVersionDataSetConfigurationsDataSetSchemaColumnSchemaListToTerraform)(struct.columnSchemaList),
    };
}
exports.dataAwsccQuicksightTemplateVersionDataSetConfigurationsDataSetSchemaToTerraform = dataAwsccQuicksightTemplateVersionDataSetConfigurationsDataSetSchemaToTerraform;
class DataAwsccQuicksightTemplateVersionDataSetConfigurations extends cdktf.ComplexComputedList {
    // column_group_schema_list - computed: true, optional: false, required: false
    get columnGroupSchemaList() {
        return this.interpolationForAttribute('column_group_schema_list');
    }
    // data_set_schema - computed: true, optional: false, required: false
    get dataSetSchema() {
        return this.interpolationForAttribute('data_set_schema');
    }
    // placeholder - computed: true, optional: false, required: false
    get placeholder() {
        return this.getStringAttribute('placeholder');
    }
}
exports.DataAwsccQuicksightTemplateVersionDataSetConfigurations = DataAwsccQuicksightTemplateVersionDataSetConfigurations;
function dataAwsccQuicksightTemplateVersionDataSetConfigurationsToTerraform(struct) {
    if (!cdktf.canInspect(struct)) {
        return struct;
    }
    return {
        column_group_schema_list: cdktf.listMapper(dataAwsccQuicksightTemplateVersionDataSetConfigurationsColumnGroupSchemaListToTerraform)(struct.columnGroupSchemaList),
        data_set_schema: dataAwsccQuicksightTemplateVersionDataSetConfigurationsDataSetSchemaToTerraform(struct.dataSetSchema),
        placeholder: cdktf.stringToTerraform(struct.placeholder),
    };
}
exports.dataAwsccQuicksightTemplateVersionDataSetConfigurationsToTerraform = dataAwsccQuicksightTemplateVersionDataSetConfigurationsToTerraform;
class DataAwsccQuicksightTemplateVersionErrors extends cdktf.ComplexComputedList {
    // message - computed: true, optional: false, required: false
    get message() {
        return this.getStringAttribute('message');
    }
    // type - computed: true, optional: false, required: false
    get type() {
        return this.getStringAttribute('type');
    }
}
exports.DataAwsccQuicksightTemplateVersionErrors = DataAwsccQuicksightTemplateVersionErrors;
function dataAwsccQuicksightTemplateVersionErrorsToTerraform(struct) {
    if (!cdktf.canInspect(struct)) {
        return struct;
    }
    return {
        message: cdktf.stringToTerraform(struct.message),
        type: cdktf.stringToTerraform(struct.type),
    };
}
exports.dataAwsccQuicksightTemplateVersionErrorsToTerraform = dataAwsccQuicksightTemplateVersionErrorsToTerraform;
class DataAwsccQuicksightTemplateVersionSheets extends cdktf.ComplexComputedList {
    // name - computed: true, optional: false, required: false
    get name() {
        return this.getStringAttribute('name');
    }
    // sheet_id - computed: true, optional: false, required: false
    get sheetId() {
        return this.getStringAttribute('sheet_id');
    }
}
exports.DataAwsccQuicksightTemplateVersionSheets = DataAwsccQuicksightTemplateVersionSheets;
function dataAwsccQuicksightTemplateVersionSheetsToTerraform(struct) {
    if (!cdktf.canInspect(struct)) {
        return struct;
    }
    return {
        name: cdktf.stringToTerraform(struct.name),
        sheet_id: cdktf.stringToTerraform(struct.sheetId),
    };
}
exports.dataAwsccQuicksightTemplateVersionSheetsToTerraform = dataAwsccQuicksightTemplateVersionSheetsToTerraform;
class DataAwsccQuicksightTemplateVersion extends cdktf.ComplexComputedList {
    // created_time - computed: true, optional: false, required: false
    get createdTime() {
        return this.getStringAttribute('created_time');
    }
    // data_set_configurations - computed: true, optional: false, required: false
    get dataSetConfigurations() {
        return this.interpolationForAttribute('data_set_configurations');
    }
    // description - computed: true, optional: false, required: false
    get description() {
        return this.getStringAttribute('description');
    }
    // errors - computed: true, optional: false, required: false
    get errors() {
        return this.interpolationForAttribute('errors');
    }
    // sheets - computed: true, optional: false, required: false
    get sheets() {
        return this.interpolationForAttribute('sheets');
    }
    // source_entity_arn - computed: true, optional: false, required: false
    get sourceEntityArn() {
        return this.getStringAttribute('source_entity_arn');
    }
    // status - computed: true, optional: false, required: false
    get status() {
        return this.getStringAttribute('status');
    }
    // theme_arn - computed: true, optional: false, required: false
    get themeArn() {
        return this.getStringAttribute('theme_arn');
    }
    // version_number - computed: true, optional: false, required: false
    get versionNumber() {
        return this.getNumberAttribute('version_number');
    }
}
exports.DataAwsccQuicksightTemplateVersion = DataAwsccQuicksightTemplateVersion;
function dataAwsccQuicksightTemplateVersionToTerraform(struct) {
    if (!cdktf.canInspect(struct)) {
        return struct;
    }
    return {
        created_time: cdktf.stringToTerraform(struct.createdTime),
        data_set_configurations: cdktf.listMapper(dataAwsccQuicksightTemplateVersionDataSetConfigurationsToTerraform)(struct.dataSetConfigurations),
        description: cdktf.stringToTerraform(struct.description),
        errors: cdktf.listMapper(dataAwsccQuicksightTemplateVersionErrorsToTerraform)(struct.errors),
        sheets: cdktf.listMapper(dataAwsccQuicksightTemplateVersionSheetsToTerraform)(struct.sheets),
        source_entity_arn: cdktf.stringToTerraform(struct.sourceEntityArn),
        status: cdktf.stringToTerraform(struct.status),
        theme_arn: cdktf.stringToTerraform(struct.themeArn),
        version_number: cdktf.numberToTerraform(struct.versionNumber),
    };
}
exports.dataAwsccQuicksightTemplateVersionToTerraform = dataAwsccQuicksightTemplateVersionToTerraform;
/**
* Represents a {@link https://www.terraform.io/docs/providers/awscc/d/quicksight_template.html awscc_quicksight_template}
*/
class DataAwsccQuicksightTemplate extends cdktf.TerraformDataSource {
    // ===========
    // INITIALIZER
    // ===========
    /**
    * Create a new {@link https://www.terraform.io/docs/providers/awscc/d/quicksight_template.html awscc_quicksight_template} Data Source
    *
    * @param scope The scope in which to define this construct
    * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
    * @param options DataAwsccQuicksightTemplateConfig
    */
    constructor(scope, id, config) {
        super(scope, id, {
            terraformResourceType: 'awscc_quicksight_template',
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
    // created_time - computed: true, optional: false, required: false
    get createdTime() {
        return this.getStringAttribute('created_time');
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
    // last_updated_time - computed: true, optional: false, required: false
    get lastUpdatedTime() {
        return this.getStringAttribute('last_updated_time');
    }
    // name - computed: true, optional: false, required: false
    get name() {
        return this.getStringAttribute('name');
    }
    // permissions - computed: true, optional: false, required: false
    get permissions() {
        return this.interpolationForAttribute('permissions');
    }
    // source_entity - computed: true, optional: false, required: false
    get sourceEntity() {
        return this.interpolationForAttribute('source_entity');
    }
    // tags - computed: true, optional: false, required: false
    get tags() {
        return this.interpolationForAttribute('tags');
    }
    // template_id - computed: true, optional: false, required: false
    get templateId() {
        return this.getStringAttribute('template_id');
    }
    // version - computed: true, optional: false, required: false
    get version() {
        return this.interpolationForAttribute('version');
    }
    // version_description - computed: true, optional: false, required: false
    get versionDescription() {
        return this.getStringAttribute('version_description');
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
exports.DataAwsccQuicksightTemplate = DataAwsccQuicksightTemplate;
// =================
// STATIC PROPERTIES
// =================
DataAwsccQuicksightTemplate.tfResourceType = "awscc_quicksight_template";
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZGF0YS1hd3NjYy1xdWlja3NpZ2h0LXRlbXBsYXRlLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiZGF0YS1hd3NjYy1xdWlja3NpZ2h0LXRlbXBsYXRlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7QUFBQSwyRUFBMkU7QUFDM0UsMkNBQTJDOzs7QUFHM0MsK0JBQStCO0FBWS9CLE1BQWEsc0NBQXVDLFNBQVEsS0FBSyxDQUFDLG1CQUFtQjtJQUVuRiw2REFBNkQ7SUFDN0QsSUFBVyxPQUFPO1FBQ2hCLE9BQU8sSUFBSSxDQUFDLGdCQUFnQixDQUFDLFNBQVMsQ0FBQyxDQUFDO0lBQzFDLENBQUM7SUFFRCwrREFBK0Q7SUFDL0QsSUFBVyxTQUFTO1FBQ2xCLE9BQU8sSUFBSSxDQUFDLGtCQUFrQixDQUFDLFdBQVcsQ0FBQyxDQUFDO0lBQzlDLENBQUM7Q0FDRjtBQVhELHdGQVdDO0FBRUQsU0FBZ0IsaURBQWlELENBQUMsTUFBK0M7SUFDL0csSUFBSSxDQUFDLEtBQUssQ0FBQyxVQUFVLENBQUMsTUFBTSxDQUFDLEVBQUU7UUFBRSxPQUFPLE1BQU0sQ0FBQztLQUFFO0lBQ2pELE9BQU87UUFDTCxPQUFPLEVBQUUsS0FBSyxDQUFDLFVBQVUsQ0FBQyxLQUFLLENBQUMsaUJBQWlCLENBQUMsQ0FBQyxNQUFPLENBQUMsT0FBTyxDQUFDO1FBQ25FLFNBQVMsRUFBRSxLQUFLLENBQUMsaUJBQWlCLENBQUMsTUFBTyxDQUFDLFNBQVMsQ0FBQztLQUN0RCxDQUFBO0FBQ0gsQ0FBQztBQU5ELDhHQU1DO0FBRUQsTUFBYSxzRUFBdUUsU0FBUSxLQUFLLENBQUMsbUJBQW1CO0lBRW5ILGtFQUFrRTtJQUNsRSxJQUFXLFVBQVU7UUFDbkIsT0FBTyxJQUFJLENBQUMsa0JBQWtCLENBQUMsY0FBYyxDQUFDLENBQUM7SUFDakQsQ0FBQztJQUVELDBFQUEwRTtJQUMxRSxJQUFXLGtCQUFrQjtRQUMzQixPQUFPLElBQUksQ0FBQyxrQkFBa0IsQ0FBQyxzQkFBc0Is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QUEvR0Msb0JBQW9CO0FBQ3BCLG9CQUFvQjtBQUNwQixvQkFBb0I7QUFDRywwQ0FBYyxHQUFXLDJCQUEyQixDQUFDIiwic291cmNlc0NvbnRlbnQiOlsiLy8gaHR0cHM6Ly93d3cudGVycmFmb3JtLmlvL2RvY3MvcHJvdmlkZXJzL2F3c2NjL2QvcXVpY2tzaWdodF90ZW1wbGF0ZS5odG1sXG4vLyBnZW5lcmF0ZWQgZnJvbSB0ZXJyYWZvcm0gcmVzb3VyY2Ugc2NoZW1hXG5cbmltcG9ydCB7IENvbnN0cnVjdCB9IGZyb20gJ2NvbnN0cnVjdHMnO1xuaW1wb3J0ICogYXMgY2RrdGYgZnJvbSAnY2RrdGYnO1xuXG4vLyBDb25maWd1cmF0aW9uXG5cbmV4cG9ydCBpbnRlcmZhY2UgRGF0YUF3c2NjUXVpY2tzaWdodFRlbXBsYXRlQ29uZmlnIGV4dGVuZHMgY2RrdGYuVGVycmFmb3JtTWV0YUFyZ3VtZW50cyB7XG4gIC8qKlxuICAqIFVuaXF1ZWx5IGlkZW50aWZpZXMgdGhlIHJlc291cmNlLlxuICAqIFxuICAqIERvY3MgYXQgVGVycmFmb3JtIFJlZ2lzdHJ5OiB7QGxpbmsgaHR0cHM6Ly93d3cudGVycmFmb3JtLmlvL2RvY3MvcHJvdmlkZXJzL2F3c2NjL2QvcXVpY2tzaWdodF90ZW1wbGF0ZS5odG1sI2lkIERhdGFBd3NjY1F1aWNrc2lnaHRUZW1wbGF0ZSNpZH1cbiAgKi9cbiAgcmVhZG9ubHkgaWQ6IHN0cmluZztcbn1cbmV4cG9ydCBjbGFzcyBEYXRhQXdzY2NRdWlja3NpZ2h0VGVtcGxhdGVQZXJtaXNzaW9ucyBleHRlbmRzIGNka3RmLkNvbXBsZXhDb21wdXRlZExpc3Qge1xuXG4gIC8vIGFjdGlvbnMgLSBjb21wdXRlZDogdHJ1ZSwgb3B0aW9uYWw6IGZhbHNlLCByZXF1aXJlZDogZmFsc2VcbiAgcHVibGljIGdldCBhY3Rpb25zKCkge1xuICAgIHJldHVybiB0aGlzLmdldExpc3RBdHRyaWJ1dGUoJ2FjdGlvbnMnKTtcbiAgfVxuXG4gIC8vIHByaW5jaXBhbCAtIGNvbXB1dGVkOiB0cnVlLCBvcHRpb25hbDogZmFsc2UsIHJlcXVpcmVkOiBmYWxzZVxuICBwdWJsaWMgZ2V0IHByaW5jaXBhbCgpIHtcbiAgICByZXR1cm4gdGhpcy5nZXRTdHJpbmdBdHRyaWJ1dGUoJ3ByaW5jaXBhbCcpO1xuICB9XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBkYXRhQXdzY2NRdWlja3NpZ2h0VGVtcGxhdGVQZXJtaXNzaW9uc1RvVGVycmFmb3JtKHN0cnVjdD86IERhdGFBd3NjY1F1aWNrc2lnaHRUZW1wbGF0ZVBlcm1pc3Npb25zKTogYW55IHtcbiAgaWYgKCFjZGt0Zi5jYW5JbnNwZWN0KHN0cnVjdCkpIHsgcmV0dXJuIHN0cnVjdDsgfVxuICByZXR1cm4ge1xuICAgIGFjdGlvbnM6IGNka3RmLmxpc3RNYXBwZXIoY2RrdGYuc3RyaW5nVG9UZXJyYWZvcm0pKHN0cnVjdCEuYWN0aW9ucyksXG4gICAgcHJpbmNpcGFsOiBjZGt0Zi5zdHJpbmdUb1RlcnJhZm9ybShzdHJ1Y3QhLnByaW5jaXBhbCksXG4gIH1cbn1cblxuZXhwb3J0IGNsYXNzIERhdGFBd3NjY1F1aWNrc2lnaHRUZW1wbGF0ZVNvdXJjZUVudGl0eVNvdXJjZUFuYWx5c2lzRGF0YVNldFJlZmVyZW5jZXMgZXh0ZW5kcyBjZGt0Zi5Db21wbGV4Q29tcHV0ZWRMaXN0IHtcblxuICAvLyBkYXRhX3NldF9hcm4gLSBjb21wdXRlZDogdHJ1ZSwgb3B0aW9uYWw6IGZhbHNlLCByZXF1aXJlZDogZmFsc2VcbiAgcHVibGljIGdldCBkYXRhU2V0QXJuKCkge1xuICAgIHJldHVybiB0aGlzLmdldFN0cmluZ0F0dHJpYnV0ZSgnZGF0YV9zZXRfYXJuJyk7XG4gIH1cblxuICAvLyBkYXRhX3NldF9wbGFjZWhvbGRlciAtIGNvbXB1dGVkOiB0cnVlLCBvcHRpb25hbDogZmFsc2UsIHJlcXVpcmVkOiBmYWxzZVxuICBwdWJsaWMgZ2V0IGRhdGFTZXRQbGFjZWhvbGRlcigpIHtcbiAgICByZXR1cm4gdGhpcy5nZXRTdHJpbmdBdHRyaWJ1dGUoJ2RhdGFfc2V0X3BsYWNlaG9sZGVyJyk7XG4gIH1cbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGRhdGFBd3NjY1F1aWNrc2lnaHRUZW1wbGF0ZVNvdXJjZUVudGl0eVNvdXJjZUFuYWx5c2lzRGF0YVNldFJlZmVyZW5jZXNUb1RlcnJhZm9ybShzdHJ1Y3Q/OiBEYXRhQXdzY2NRdWlja3NpZ2h0VGVtcGxhdGVTb3VyY2VFbnRpdHlTb3VyY2VBbmFseXNpc0RhdGFTZXRSZWZlcmVuY2VzKTogYW55IHtcbiAgaWYgKCFjZGt0Zi5jYW5JbnNwZWN0KHN0cnVjdCkpIHsgcmV0dXJuIHN0cnVjdDsgfVxuICByZXR1cm4ge1xuICAgIGRhdGFfc2V0X2FybjogY2RrdGYuc3RyaW5nVG9UZXJyYWZvcm0oc3RydWN0IS5kYXRhU2V0QXJuKSxcbiAgICBkYXRhX3NldF9wbGFjZWhvbGRlcjogY2RrdGYuc3RyaW5nVG9UZXJyYWZvcm0oc3RydWN0IS5kYXRhU2V0UGxhY2Vob2xkZXIpLFxuICB9XG59XG5cbmV4cG9ydCBjbGFzcyBEYXRhQXdzY2NRdWlja3NpZ2h0VGVtcGxhdGVTb3VyY2VFbnRpdHlTb3VyY2VBbmFseXNpcyBleHRlbmRzIGNka3RmLkNvbXBsZXhDb21wdXRlZExpc3Qge1xuXG4gIC8vIGFybiAtIGNvbXB1dGVkOiB0cnVlLCBvcHRpb25hbDogZmFsc2UsIHJlcXVpcmVkOiBmYWxzZVxuICBwdWJsaWMgZ2V0IGFybigpIHtcbiAgICByZXR1cm4gdGhpcy5nZXRTdHJpbmdBdHRyaWJ1dGUoJ2FybicpO1xuICB9XG5cbiAgLy8gZGF0YV9zZXRfcmVmZXJlbmNlcyAtIGNvbXB1dGVkOiB0cnVlLCBvcHRpb25hbDogZmFsc2UsIHJlcXVpcmVkOiBmYWxzZVxuICBwdWJsaWMgZ2V0IGRhdGFTZXRSZWZlcmVuY2VzKCkge1xuICAgIHJldHVybiB0aGlzLmludGVycG9sYXRpb25Gb3JBdHRyaWJ1dGUoJ2RhdGFfc2V0X3JlZmVyZW5jZXMnKSBhcyBhbnk7XG4gIH1cbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGRhdGFBd3NjY1F1aWNrc2lnaHRUZW1wbGF0ZVNvdXJjZUVudGl0eVNvdXJjZUFuYWx5c2lzVG9UZXJyYWZvcm0oc3RydWN0PzogRGF0YUF3c2NjUXVpY2tzaWdodFRlbXBsYXRlU291cmNlRW50aXR5U291cmNlQW5hbHlzaXMpOiBhbnkge1xuICBpZiAoIWNka3RmLmNhbkluc3BlY3Qoc3RydWN0KSkgeyByZXR1cm4gc3RydWN0OyB9XG4gIHJldHVybiB7XG4gICAgYXJuOiBjZGt0Zi5zdHJpbmdUb1RlcnJhZm9ybShzdHJ1Y3QhLmFybiksXG4gICAgZGF0YV9zZXRfcmVmZXJlbmNlczogY2RrdGYubGlzdE1hcHBlcihkYXRhQXdzY2NRdWlja3NpZ2h0VGVtcGxhdGVTb3VyY2VFbnRpdHlTb3VyY2VBbmFseXNpc0RhdGFTZXRSZWZlcmVuY2VzVG9UZXJyYWZvcm0pKHN0cnVjdCEuZGF0YVNldFJlZmVyZW5jZXMpLFxuICB9XG59XG5cbmV4cG9ydCBjbGFzcyBEYXRhQXdzY2NRdWlja3NpZ2h0VGVtcGxhdGVTb3VyY2VFbnRpdHlTb3VyY2VUZW1wbGF0ZSBleHRlbmRzIGNka3RmLkNvbXBsZXhDb21wdXRlZExpc3Qge1xuXG4gIC8vIGFybiAtIGNvbXB1dGVkOiB0cnVlLCBvcHRpb25hbDogZmFsc2UsIHJlcXVpcmVkOiBmYWxzZVxuICBwdWJsaWMgZ2V0IGFybigpIHtcbiAgICByZXR1cm4gdGhpcy5nZXRTdHJpbmdBdHRyaWJ1dGUoJ2FybicpO1xuICB9XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBkYXRhQXdzY2NRdWlja3NpZ2h0VGVtcGxhdGVTb3VyY2VFbnRpdHlTb3VyY2VUZW1wbGF0ZVRvVGVycmFmb3JtKHN0cnVjdD86IERhdGFBd3NjY1F1aWNrc2lnaHRUZW1wbGF0ZVNvdXJjZUVudGl0eVNvdXJjZVRlbXBsYXRlKTogYW55IHtcbiAgaWYgKCFjZGt0Zi5jYW5JbnNwZWN0KHN0cnVjdCkpIHsgcmV0dXJuIHN0cnVjdDsgfVxuICByZXR1cm4ge1xuICAgIGFybjogY2RrdGYuc3RyaW5nVG9UZXJyYWZvcm0oc3RydWN0IS5hcm4pLFxuICB9XG59XG5cbmV4cG9ydCBjbGFzcyBEYXRhQXdzY2NRdWlja3NpZ2h0VGVtcGxhdGVTb3VyY2VFbnRpdHkgZXh0ZW5kcyBjZGt0Zi5Db21wbGV4Q29tcHV0ZWRMaXN0IHtcblxuICAvLyBzb3VyY2VfYW5hbHlzaXMgLSBjb21wdXRlZDogdHJ1ZSwgb3B0aW9uYWw6IGZhbHNlLCByZXF1aXJlZDogZmFsc2VcbiAgcHVibGljIGdldCBzb3VyY2VBbmFseXNpcygpIHtcbiAgICByZXR1cm4gdGhpcy5pbnRlcnBvbGF0aW9uRm9yQXR0cmlidXRlKCdzb3VyY2VfYW5hbHlzaXMnKSBhcyBhbnk7XG4gIH1cblxuICAvLyBzb3VyY2VfdGVtcGxhdGUgLSBjb21wdXRlZDogdHJ1ZSwgb3B0aW9uYWw6IGZhbHNlLCByZXF1aXJlZDogZmFsc2VcbiAgcHVibGljIGdldCBzb3VyY2VUZW1wbGF0ZSgpIHtcbiAgICByZXR1cm4gdGhpcy5pbnRlcnBvbGF0aW9uRm9yQXR0cmlidXRlKCdzb3VyY2VfdGVtcGxhdGUnKSBhcyBhbnk7XG4gIH1cbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGRhdGFBd3NjY1F1aWNrc2lnaHRUZW1wbGF0ZVNvdXJjZUVudGl0eVRvVGVycmFmb3JtKHN0cnVjdD86IERhdGFBd3NjY1F1aWNrc2lnaHRUZW1wbGF0ZVNvdXJjZUVudGl0eSk6IGFueSB7XG4gIGlmICghY2RrdGYuY2FuSW5zcGVjdChzdHJ1Y3QpKSB7IHJldHVybiBzdHJ1Y3Q7IH1cbiAgcmV0dXJuIHtcbiAgICBzb3VyY2VfYW5hbHlzaXM6IGRhdGFBd3NjY1F1aWNrc2lnaHRUZW1wbGF0ZVNvdXJjZUVudGl0eVNvdXJjZUFuYWx5c2lzVG9UZXJyYWZvcm0oc3RydWN0IS5zb3VyY2VBbmFseXNpcyksXG4gICAgc291cmNlX3RlbXBsYXRlOiBkYXRhQXdzY2NRdWlja3NpZ2h0VGVtcGxhdGVTb3VyY2VFbnRpdHlTb3VyY2VUZW1wbGF0ZVRvVGVycmFmb3JtKHN0cnVjdCEuc291cmNlVGVtcGxhdGUpLFxuICB9XG59XG5cbmV4cG9ydCBjbGFzcyBEYXRhQXdzY2NRdWlja3NpZ2h0VGVtcGxhdGVUYWdzIGV4dGVuZHMgY2RrdGYuQ29tcGxleENvbXB1dGVkTGlzdCB7XG5cbiAgLy8ga2V5IC0gY29tcHV0ZWQ6IHRydWUsIG9wdGlvbmFsOiBmYWxzZSwgcmVxdWlyZWQ6IGZhbHNlXG4gIHB1YmxpYyBnZXQga2V5KCkge1xuICAgIHJldHVybiB0aGlzLmdldFN0cmluZ0F0dHJpYnV0ZSgna2V5Jyk7XG4gIH1cblxuICAvLyB2YWx1ZSAtIGNvbXB1dGVkOiB0cnVlLCBvcHRpb25hbDogZmFsc2UsIHJlcXVpcmVkOiBmYWxzZVxuICBwdWJsaWMgZ2V0IHZhbHVlKCkge1xuICAgIHJldHVybiB0aGlzLmdldFN0cmluZ0F0dHJpYnV0ZSgndmFsdWUnKTtcbiAgfVxufVxuXG5leHBvcnQgZnVuY3Rpb24gZGF0YUF3c2NjUXVpY2tzaWdodFRlbXBsYXRlVGFnc1RvVGVycmFmb3JtKHN0cnVjdD86IERhdGFBd3NjY1F1aWNrc2lnaHRUZW1wbGF0ZVRhZ3MpOiBhbnkge1xuICBpZiAoIWNka3RmLmNhbkluc3BlY3Qoc3RydWN0KSkgeyByZXR1cm4gc3RydWN0OyB9XG4gIHJldHVybiB7XG4gICAga2V5OiBjZGt0Zi5zdHJpbmdUb1RlcnJhZm9ybShzdHJ1Y3QhLmtleSksXG4gICAgdmFsdWU6IGNka3RmLnN0cmluZ1RvVGVycmFmb3JtKHN0cnVjdCEudmFsdWUpLFxuICB9XG59XG5cbmV4cG9ydCBjbGFzcyBEYXRhQXdzY2NRdWlja3NpZ2h0VGVtcGxhdGVWZXJzaW9uRGF0YVNldENvbmZpZ3VyYXRpb25zQ29sdW1uR3JvdXBTY2hlbWFMaXN0Q29sdW1uR3JvdXBDb2x1bW5TY2hlbWFMaXN0IGV4dGVuZHMgY2RrdGYuQ29tcGxleENvbXB1dGVkTGlzdCB7XG5cbiAgLy8gbmFtZSAtIGNvbXB1dGVkOiB0cnVlLCBvcHRpb25hbDogZmFsc2UsIHJlcXVpcmVkOiBmYWxzZVxuICBwdWJsaWMgZ2V0IG5hbWUoKSB7XG4gICAgcmV0dXJuIHRoaXMuZ2V0U3RyaW5nQXR0cmlidXRlKCduYW1lJyk7XG4gIH1cbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGRhdGFBd3NjY1F1aWNrc2lnaHRUZW1wbGF0ZVZlcnNpb25EYXRhU2V0Q29uZmlndXJhdGlvbnNDb2x1bW5Hcm91cFNjaGVtYUxpc3RDb2x1bW5Hcm91cENvbHVtblNjaGVtYUxpc3RUb1RlcnJhZm9ybShzdHJ1Y3Q/OiBEYXRhQXdzY2NRdWlja3NpZ2h0VGVtcGxhdGVWZXJzaW9uRGF0YVNldENvbmZpZ3VyYXRpb25zQ29sdW1uR3JvdXBTY2hlbWFMaXN0Q29sdW1uR3JvdXBDb2x1bW5TY2hlbWFMaXN0KTogYW55IHtcbiAgaWYgKCFjZGt0Zi5jYW5JbnNwZWN0KHN0cnVjdCkpIHsgcmV0dXJuIHN0cnVjdDsgfVxuICByZXR1cm4ge1xuICAgIG5hbWU6IGNka3RmLnN0cmluZ1RvVGVycmFmb3JtKHN0cnVjdCEubmFtZSksXG4gIH1cbn1cblxuZXhwb3J0IGNsYXNzIERhdGFBd3NjY1F1aWNrc2lnaHRUZW1wbGF0ZVZlcnNpb25EYXRhU2V0Q29uZmlndXJhdGlvbnNDb2x1bW5Hcm91cFNjaGVtYUxpc3QgZXh0ZW5kcyBjZGt0Zi5Db21wbGV4Q29tcHV0ZWRMaXN0IHtcblxuICAvLyBjb2x1bW5fZ3JvdXBfY29sdW1uX3NjaGVtYV9saXN0IC0gY29tcHV0ZWQ6IHRydWUsIG9wdGlvbmFsOiBmYWxzZSwgcmVxdWlyZWQ6IGZhbHNlXG4gIHB1YmxpYyBnZXQgY29sdW1uR3JvdXBDb2x1bW5TY2hlbWFMaXN0KCkge1xuICAgIHJldHVybiB0aGlzLmludGVycG9sYXRpb25Gb3JBdHRyaWJ1dGUoJ2NvbHVtbl9ncm91cF9jb2x1bW5fc2NoZW1hX2xpc3QnKSBhcyBhbnk7XG4gIH1cblxuICAvLyBuYW1lIC0gY29tcHV0ZWQ6IHRydWUsIG9wdGlvbmFsOiBmYWxzZSwgcmVxdWlyZWQ6IGZhbHNlXG4gIHB1YmxpYyBnZXQgbmFtZSgpIHtcbiAgICByZXR1cm4gdGhpcy5nZXRTdHJpbmdBdHRyaWJ1dGUoJ25hbWUnKTtcbiAgfVxufVxuXG5leHBvcnQgZnVuY3Rpb24gZGF0YUF3c2NjUXVpY2tzaWdodFRlbXBsYXRlVmVyc2lvbkRhdGFTZXRDb25maWd1cmF0aW9uc0NvbHVtbkdyb3VwU2NoZW1hTGlzdFRvVGVycmFmb3JtKHN0cnVjdD86IERhdGFBd3NjY1F1aWNrc2lnaHRUZW1wbGF0ZVZlcnNpb25EYXRhU2V0Q29uZmlndXJhdGlvbnNDb2x1bW5Hcm91cFNjaGVtYUxpc3QpOiBhbnkge1xuICBpZiAoIWNka3RmLmNhbkluc3BlY3Qoc3RydWN0KSkgeyByZXR1cm4gc3RydWN0OyB9XG4gIHJldHVybiB7XG4gICAgY29sdW1uX2dyb3VwX2NvbHVtbl9zY2hlbWFfbGlzdDogY2RrdGYubGlzdE1hcHBlcihkYXRhQXdzY2NRdWlja3NpZ2h0VGVtcGxhdGVWZXJzaW9uRGF0YVNldENvbmZpZ3VyYXRpb25zQ29sdW1uR3JvdXBTY2hlbWFMaXN0Q29sdW1uR3JvdXBDb2x1bW5TY2hlbWFMaXN0VG9UZXJyYWZvcm0pKHN0cnVjdCEuY29sdW1uR3JvdXBDb2x1bW5TY2hlbWFMaXN0KSxcbiAgICBuYW1lOiBjZGt0Zi5zdHJpbmdUb1RlcnJhZm9ybShzdHJ1Y3QhLm5hbWUpLFxuICB9XG59XG5cbmV4cG9ydCBjbGFzcyBEYXRhQXdzY2NRdWlja3NpZ2h0VGVtcGxhdGVWZXJzaW9uRGF0YVNldENvbmZpZ3VyYXRpb25zRGF0YVNldFNjaGVtYUNvbHVtblNjaGVtYUxpc3QgZXh0ZW5kcyBjZGt0Zi5Db21wbGV4Q29tcHV0ZWRMaXN0IHtcblxuICAvLyBkYXRhX3R5cGUgLSBjb21wdXRlZDogdHJ1ZSwgb3B0aW9uYWw6IGZhbHNlLCByZXF1aXJlZDogZmFsc2VcbiAgcHVibGljIGdldCBkYXRhVHlwZSgpIHtcbiAgICByZXR1cm4gdGhpcy5nZXRTdHJpbmdBdHRyaWJ1dGUoJ2RhdGFfdHlwZScpO1xuICB9XG5cbiAgLy8gZ2VvZ3JhcGhpY19yb2xlIC0gY29tcHV0ZWQ6IHRydWUsIG9wdGlvbmFsOiBmYWxzZSwgcmVxdWlyZWQ6IGZhbHNlXG4gIHB1YmxpYyBnZXQgZ2VvZ3JhcGhpY1JvbGUoKSB7XG4gICAgcmV0dXJuIHRoaXMuZ2V0U3RyaW5nQXR0cmlidXRlKCdnZW9ncmFwaGljX3JvbGUnKTtcbiAgfVxuXG4gIC8vIG5hbWUgLSBjb21wdXRlZDogdHJ1ZSwgb3B0aW9uYWw6IGZhbHNlLCByZXF1aXJlZDogZmFsc2VcbiAgcHVibGljIGdldCBuYW1lKCkge1xuICAgIHJldHVybiB0aGlzLmdldFN0cmluZ0F0dHJpYnV0ZSgnbmFtZScpO1xuICB9XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBkYXRhQXdzY2NRdWlja3NpZ2h0VGVtcGxhdGVWZXJzaW9uRGF0YVNldENvbmZpZ3VyYXRpb25zRGF0YVNldFNjaGVtYUNvbHVtblNjaGVtYUxpc3RUb1RlcnJhZm9ybShzdHJ1Y3Q/OiBEYXRhQXdzY2NRdWlja3NpZ2h0VGVtcGxhdGVWZXJzaW9uRGF0YVNldENvbmZpZ3VyYXRpb25zRGF0YVNldFNjaGVtYUNvbHVtblNjaGVtYUxpc3QpOiBhbnkge1xuICBpZiAoIWNka3RmLmNhbkluc3BlY3Qoc3RydWN0KSkgeyByZXR1cm4gc3RydWN0OyB9XG4gIHJldHVybiB7XG4gICAgZGF0YV90eXBlOiBjZGt0Zi5zdHJpbmdUb1RlcnJhZm9ybShzdHJ1Y3QhLmRhdGFUeXBlKSxcbiAgICBnZW9ncmFwaGljX3JvbGU6IGNka3RmLnN0cmluZ1RvVGVycmFmb3JtKHN0cnVjdCEuZ2VvZ3JhcGhpY1JvbGUpLFxuICAgIG5hbWU6IGNka3RmLnN0cmluZ1RvVGVycmFmb3JtKHN0cnVjdCEubmFtZSksXG4gIH1cbn1cblxuZXhwb3J0IGNsYXNzIERhdGFBd3NjY1F1aWNrc2lnaHRUZW1wbGF0ZVZlcnNpb25EYXRhU2V0Q29uZmlndXJhdGlvbnNEYXRhU2V0U2NoZW1hIGV4dGVuZHMgY2RrdGYuQ29tcGxleENvbXB1dGVkTGlzdCB7XG5cbiAgLy8gY29sdW1uX3NjaGVtYV9saXN0IC0gY29tcHV0ZWQ6IHRydWUsIG9wdGlvbmFsOiBmYWxzZSwgcmVxdWlyZWQ6IGZhbHNlXG4gIHB1YmxpYyBnZXQgY29sdW1uU2NoZW1hTGlzdCgpIHtcbiAgICByZXR1cm4gdGhpcy5pbnRlcnBvbGF0aW9uRm9yQXR0cmlidXRlKCdjb2x1bW5fc2NoZW1hX2xpc3QnKSBhcyBhbnk7XG4gIH1cbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGRhdGFBd3NjY1F1aWNrc2lnaHRUZW1wbGF0ZVZlcnNpb25EYXRhU2V0Q29uZmlndXJhdGlvbnNEYXRhU2V0U2NoZW1hVG9UZXJyYWZvcm0oc3RydWN0PzogRGF0YUF3c2NjUXVpY2tzaWdodFRlbXBsYXRlVmVyc2lvbkRhdGFTZXRDb25maWd1cmF0aW9uc0RhdGFTZXRTY2hlbWEpOiBhbnkge1xuICBpZiAoIWNka3RmLmNhbkluc3BlY3Qoc3RydWN0KSkgeyByZXR1cm4gc3RydWN0OyB9XG4gIHJldHVybiB7XG4gICAgY29sdW1uX3NjaGVtYV9saXN0OiBjZGt0Zi5saXN0TWFwcGVyKGRhdGFBd3NjY1F1aWNrc2lnaHRUZW1wbGF0ZVZlcnNpb25EYXRhU2V0Q29uZmlndXJhdGlvbnNEYXRhU2V0U2NoZW1hQ29sdW1uU2NoZW1hTGlzdFRvVGVycmFmb3JtKShzdHJ1Y3QhLmNvbHVtblNjaGVtYUxpc3QpLFxuICB9XG59XG5cbmV4cG9ydCBjbGFzcyBEYXRhQXdzY2NRdWlja3NpZ2h0VGVtcGxhdGVWZXJzaW9uRGF0YVNldENvbmZpZ3VyYXRpb25zIGV4dGVuZHMgY2RrdGYuQ29tcGxleENvbXB1dGVkTGlzdCB7XG5cbiAgLy8gY29sdW1uX2dyb3VwX3NjaGVtYV9saXN0IC0gY29tcHV0ZWQ6IHRydWUsIG9wdGlvbmFsOiBmYWxzZSwgcmVxdWlyZWQ6IGZhbHNlXG4gIHB1YmxpYyBnZXQgY29sdW1uR3JvdXBTY2hlbWFMaXN0KCkge1xuICAgIHJldHVybiB0aGlzLmludGVycG9sYXRpb25Gb3JBdHRyaWJ1dGUoJ2NvbHVtbl9ncm91cF9zY2hlbWFfbGlzdCcpIGFzIGFueTtcbiAgfVxuXG4gIC8vIGRhdGFfc2V0X3NjaGVtYSAtIGNvbXB1dGVkOiB0cnVlLCBvcHRpb25hbDogZmFsc2UsIHJlcXVpcmVkOiBmYWxzZVxuICBwdWJsaWMgZ2V0IGRhdGFTZXRTY2hlbWEoKSB7XG4gICAgcmV0dXJuIHRoaXMuaW50ZXJwb2xhdGlvbkZvckF0dHJpYnV0ZSgnZGF0YV9zZXRfc2NoZW1hJykgYXMgYW55O1xuICB9XG5cbiAgLy8gcGxhY2Vob2xkZXIgLSBjb21wdXRlZDogdHJ1ZSwgb3B0aW9uYWw6IGZhbHNlLCByZXF1aXJlZDogZmFsc2VcbiAgcHVibGljIGdldCBwbGFjZWhvbGRlcigpIHtcbiAgICByZXR1cm4gdGhpcy5nZXRTdHJpbmdBdHRyaWJ1dGUoJ3BsYWNlaG9sZGVyJyk7XG4gIH1cbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGRhdGFBd3NjY1F1aWNrc2lnaHRUZW1wbGF0ZVZlcnNpb25EYXRhU2V0Q29uZmlndXJhdGlvbnNUb1RlcnJhZm9ybShzdHJ1Y3Q/OiBEYXRhQXdzY2NRdWlja3NpZ2h0VGVtcGxhdGVWZXJzaW9uRGF0YVNldENvbmZpZ3VyYXRpb25zKTogYW55IHtcbiAgaWYgKCFjZGt0Zi5jYW5JbnNwZWN0KHN0cnVjdCkpIHsgcmV0dXJuIHN0cnVjdDsgfVxuICByZXR1cm4ge1xuICAgIGNvbHVtbl9ncm91cF9zY2hlbWFfbGlzdDogY2RrdGYubGlzdE1hcHBlcihkYXRhQXdzY2NRdWlja3NpZ2h0VGVtcGxhdGVWZXJzaW9uRGF0YVNldENvbmZpZ3VyYXRpb25zQ29sdW1uR3JvdXBTY2hlbWFMaXN0VG9UZXJyYWZvcm0pKHN0cnVjdCEuY29sdW1uR3JvdXBTY2hlbWFMaXN0KSxcbiAgICBkYXRhX3NldF9zY2hlbWE6IGRhdGFBd3NjY1F1aWNrc2lnaHRUZW1wbGF0ZVZlcnNpb25EYXRhU2V0Q29uZmlndXJhdGlvbnNEYXRhU2V0U2NoZW1hVG9UZXJyYWZvcm0oc3RydWN0IS5kYXRhU2V0U2NoZW1hKSxcbiAgICBwbGFjZWhvbGRlcjogY2RrdGYuc3RyaW5nVG9UZXJyYWZvcm0oc3RydWN0IS5wbGFjZWhvbGRlciksXG4gIH1cbn1cblxuZXhwb3J0IGNsYXNzIERhdGFBd3NjY1F1aWNrc2lnaHRUZW1wbGF0ZVZlcnNpb25FcnJvcnMgZXh0ZW5kcyBjZGt0Zi5Db21wbGV4Q29tcHV0ZWRMaXN0IHtcblxuICAvLyBtZXNzYWdlIC0gY29tcHV0ZWQ6IHRydWUsIG9wdGlvbmFsOiBmYWxzZSwgcmVxdWlyZWQ6IGZhbHNlXG4gIHB1YmxpYyBnZXQgbWVzc2FnZSgpIHtcbiAgICByZXR1cm4gdGhpcy5nZXRTdHJpbmdBdHRyaWJ1dGUoJ21lc3NhZ2UnKTtcbiAgfVxuXG4gIC8vIHR5cGUgLSBjb21wdXRlZDogdHJ1ZSwgb3B0aW9uYWw6IGZhbHNlLCByZXF1aXJlZDogZmFsc2VcbiAgcHVibGljIGdldCB0eXBlKCkge1xuICAgIHJldHVybiB0aGlzLmdldFN0cmluZ0F0dHJpYnV0ZSgndHlwZScpO1xuICB9XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBkYXRhQXdzY2NRdWlja3NpZ2h0VGVtcGxhdGVWZXJzaW9uRXJyb3JzVG9UZXJyYWZvcm0oc3RydWN0PzogRGF0YUF3c2NjUXVpY2tzaWdodFRlbXBsYXRlVmVyc2lvbkVycm9ycyk6IGFueSB7XG4gIGlmICghY2RrdGYuY2FuSW5zcGVjdChzdHJ1Y3QpKSB7IHJldHVybiBzdHJ1Y3Q7IH1cbiAgcmV0dXJuIHtcbiAgICBtZXNzYWdlOiBjZGt0Zi5zdHJpbmdUb1RlcnJhZm9ybShzdHJ1Y3QhLm1lc3NhZ2UpLFxuICAgIHR5cGU6IGNka3RmLnN0cmluZ1RvVGVycmFmb3JtKHN0cnVjdCEudHlwZSksXG4gIH1cbn1cblxuZXhwb3J0IGNsYXNzIERhdGFBd3NjY1F1aWNrc2lnaHRUZW1wbGF0ZVZlcnNpb25TaGVldHMgZXh0ZW5kcyBjZGt0Zi5Db21wbGV4Q29tcHV0ZWRMaXN0IHtcblxuICAvLyBuYW1lIC0gY29tcHV0ZWQ6IHRydWUsIG9wdGlvbmFsOiBmYWxzZSwgcmVxdWlyZWQ6IGZhbHNlXG4gIHB1YmxpYyBnZXQgbmFtZSgpIHtcbiAgICByZXR1cm4gdGhpcy5nZXRTdHJpbmdBdHRyaWJ1dGUoJ25hbWUnKTtcbiAgfVxuXG4gIC8vIHNoZWV0X2lkIC0gY29tcHV0ZWQ6IHRydWUsIG9wdGlvbmFsOiBmYWxzZSwgcmVxdWlyZWQ6IGZhbHNlXG4gIHB1YmxpYyBnZXQgc2hlZXRJZCgpIHtcbiAgICByZXR1cm4gdGhpcy5nZXRTdHJpbmdBdHRyaWJ1dGUoJ3NoZWV0X2lkJyk7XG4gIH1cbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGRhdGFBd3NjY1F1aWNrc2lnaHRUZW1wbGF0ZVZlcnNpb25TaGVldHNUb1RlcnJhZm9ybShzdHJ1Y3Q/OiBEYXRhQXdzY2NRdWlja3NpZ2h0VGVtcGxhdGVWZXJzaW9uU2hlZXRzKTogYW55IHtcbiAgaWYgKCFjZGt0Zi5jYW5JbnNwZWN0KHN0cnVjdCkpIHsgcmV0dXJuIHN0cnVjdDsgfVxuICByZXR1cm4ge1xuICAgIG5hbWU6IGNka3RmLnN0cmluZ1RvVGVycmFmb3JtKHN0cnVjdCEubmFtZSksXG4gICAgc2hlZXRfaWQ6IGNka3RmLnN0cmluZ1RvVGVycmFmb3JtKHN0cnVjdCEuc2hlZXRJZCksXG4gIH1cbn1cblxuZXhwb3J0IGNsYXNzIERhdGFBd3NjY1F1aWNrc2lnaHRUZW1wbGF0ZVZlcnNpb24gZXh0ZW5kcyBjZGt0Zi5Db21wbGV4Q29tcHV0ZWRMaXN0IHtcblxuICAvLyBjcmVhdGVkX3RpbWUgLSBjb21wdXRlZDogdHJ1ZSwgb3B0aW9uYWw6IGZhbHNlLCByZXF1aXJlZDogZmFsc2VcbiAgcHVibGljIGdldCBjcmVhdGVkVGltZSgpIHtcbiAgICByZXR1cm4gdGhpcy5nZXRTdHJpbmdBdHRyaWJ1dGUoJ2NyZWF0ZWRfdGltZScpO1xuICB9XG5cbiAgLy8gZGF0YV9zZXRfY29uZmlndXJhdGlvbnMgLSBjb21wdXRlZDogdHJ1ZSwgb3B0aW9uYWw6IGZhbHNlLCByZXF1aXJlZDogZmFsc2VcbiAgcHVibGljIGdldCBkYXRhU2V0Q29uZmlndXJhdGlvbnMoKSB7XG4gICAgcmV0dXJuIHRoaXMuaW50ZXJwb2xhdGlvbkZvckF0dHJpYnV0ZSgnZGF0YV9zZXRfY29uZmlndXJhdGlvbnMnKSBhcyBhbnk7XG4gIH1cblxuICAvLyBkZXNjcmlwdGlvbiAtIGNvbXB1dGVkOiB0cnVlLCBvcHRpb25hbDogZmFsc2UsIHJlcXVpcmVkOiBmYWxzZVxuICBwdWJsaWMgZ2V0IGRlc2NyaXB0aW9uKCkge1xuICAgIHJldHVybiB0aGlzLmdldFN0cmluZ0F0dHJpYnV0ZSgnZGVzY3JpcHRpb24nKTtcbiAgfVxuXG4gIC8vIGVycm9ycyAtIGNvbXB1dGVkOiB0cnVlLCBvcHRpb25hbDogZmFsc2UsIHJlcXVpcmVkOiBmYWxzZVxuICBwdWJsaWMgZ2V0IGVycm9ycygpIHtcbiAgICByZXR1cm4gdGhpcy5pbnRlcnBvbGF0aW9uRm9yQXR0cmlidXRlKCdlcnJvcnMnKSBhcyBhbnk7XG4gIH1cblxuICAvLyBzaGVldHMgLSBjb21wdXRlZDogdHJ1ZSwgb3B0aW9uYWw6IGZhbHNlLCByZXF1aXJlZDogZmFsc2VcbiAgcHVibGljIGdldCBzaGVldHMoKSB7XG4gICAgcmV0dXJuIHRoaXMuaW50ZXJwb2xhdGlvbkZvckF0dHJpYnV0ZSgnc2hlZXRzJykgYXMgYW55O1xuICB9XG5cbiAgLy8gc291cmNlX2VudGl0eV9hcm4gLSBjb21wdXRlZDogdHJ1ZSwgb3B0aW9uYWw6IGZhbHNlLCByZXF1aXJlZDogZmFsc2VcbiAgcHVibGljIGdldCBzb3VyY2VFbnRpdHlBcm4oKSB7XG4gICAgcmV0dXJuIHRoaXMuZ2V0U3RyaW5nQXR0cmlidXRlKCdzb3VyY2VfZW50aXR5X2FybicpO1xuICB9XG5cbiAgLy8gc3RhdHVzIC0gY29tcHV0ZWQ6IHRydWUsIG9wdGlvbmFsOiBmYWxzZSwgcmVxdWlyZWQ6IGZhbHNlXG4gIHB1YmxpYyBnZXQgc3RhdHVzKCkge1xuICAgIHJldHVybiB0aGlzLmdldFN0cmluZ0F0dHJpYnV0ZSgnc3RhdHVzJyk7XG4gIH1cblxuICAvLyB0aGVtZV9hcm4gLSBjb21wdXRlZDogdHJ1ZSwgb3B0aW9uYWw6IGZhbHNlLCByZXF1aXJlZDogZmFsc2VcbiAgcHVibGljIGdldCB0aGVtZUFybigpIHtcbiAgICByZXR1cm4gdGhpcy5nZXRTdHJpbmdBdHRyaWJ1dGUoJ3RoZW1lX2FybicpO1xuICB9XG5cbiAgLy8gdmVyc2lvbl9udW1iZXIgLSBjb21wdXRlZDogdHJ1ZSwgb3B0aW9uYWw6IGZhbHNlLCByZXF1aXJlZDogZmFsc2VcbiAgcHVibGljIGdldCB2ZXJzaW9uTnVtYmVyKCkge1xuICAgIHJldHVybiB0aGlzLmdldE51bWJlckF0dHJpYnV0ZSgndmVyc2lvbl9udW1iZXInKTtcbiAgfVxufVxuXG5leHBvcnQgZnVuY3Rpb24gZGF0YUF3c2NjUXVpY2tzaWdodFRlbXBsYXRlVmVyc2lvblRvVGVycmFmb3JtKHN0cnVjdD86IERhdGFBd3NjY1F1aWNrc2lnaHRUZW1wbGF0ZVZlcnNpb24pOiBhbnkge1xuICBpZiAoIWNka3RmLmNhbkluc3BlY3Qoc3RydWN0KSkgeyByZXR1cm4gc3RydWN0OyB9XG4gIHJldHVybiB7XG4gICAgY3JlYXRlZF90aW1lOiBjZGt0Zi5zdHJpbmdUb1RlcnJhZm9ybShzdHJ1Y3QhLmNyZWF0ZWRUaW1lKSxcbiAgICBkYXRhX3NldF9jb25maWd1cmF0aW9uczogY2RrdGYubGlzdE1hcHBlcihkYXRhQXdzY2NRdWlja3NpZ2h0VGVtcGxhdGVWZXJzaW9uRGF0YVNldENvbmZpZ3VyYXRpb25zVG9UZXJyYWZvcm0pKHN0cnVjdCEuZGF0YVNldENvbmZpZ3VyYXRpb25zKSxcbiAgICBkZXNjcmlwdGlvbjogY2RrdGYuc3RyaW5nVG9UZXJyYWZvcm0oc3RydWN0IS5kZXNjcmlwdGlvbiksXG4gICAgZXJyb3JzOiBjZGt0Zi5saXN0TWFwcGVyKGRhdGFBd3NjY1F1aWNrc2lnaHRUZW1wbGF0ZVZlcnNpb25FcnJvcnNUb1RlcnJhZm9ybSkoc3RydWN0IS5lcnJvcnMpLFxuICAgIHNoZWV0czogY2RrdGYubGlzdE1hcHBlcihkYXRhQXdzY2NRdWlja3NpZ2h0VGVtcGxhdGVWZXJzaW9uU2hlZXRzVG9UZXJyYWZvcm0pKHN0cnVjdCEuc2hlZXRzKSxcbiAgICBzb3VyY2VfZW50aXR5X2FybjogY2RrdGYuc3RyaW5nVG9UZXJyYWZvcm0oc3RydWN0IS5zb3VyY2VFbnRpdHlBcm4pLFxuICAgIHN0YXR1czogY2RrdGYuc3RyaW5nVG9UZXJyYWZvcm0oc3RydWN0IS5zdGF0dXMpLFxuICAgIHRoZW1lX2FybjogY2RrdGYuc3RyaW5nVG9UZXJyYWZvcm0oc3RydWN0IS50aGVtZUFybiksXG4gICAgdmVyc2lvbl9udW1iZXI6IGNka3RmLm51bWJlclRvVGVycmFmb3JtKHN0cnVjdCEudmVyc2lvbk51bWJlciksXG4gIH1cbn1cblxuXG4vKipcbiogUmVwcmVzZW50cyBhIHtAbGluayBodHRwczovL3d3dy50ZXJyYWZvcm0uaW8vZG9jcy9wcm92aWRlcnMvYXdzY2MvZC9xdWlja3NpZ2h0X3RlbXBsYXRlLmh0bWwgYXdzY2NfcXVpY2tzaWdodF90ZW1wbGF0ZX1cbiovXG5leHBvcnQgY2xhc3MgRGF0YUF3c2NjUXVpY2tzaWdodFRlbXBsYXRlIGV4dGVuZHMgY2RrdGYuVGVycmFmb3JtRGF0YVNvdXJjZSB7XG5cbiAgLy8gPT09PT09PT09PT09PT09PT1cbiAgLy8gU1RBVElDIFBST1BFUlRJRVNcbiAgLy8gPT09PT09PT09PT09PT09PT1cbiAgcHVibGljIHN0YXRpYyByZWFkb25seSB0ZlJlc291cmNlVHlwZTogc3RyaW5nID0gXCJhd3NjY19xdWlja3NpZ2h0X3RlbXBsYXRlXCI7XG5cbiAgLy8gPT09PT09PT09PT1cbiAgLy8gSU5JVElBTElaRVJcbiAgLy8gPT09PT09PT09PT1cblxuICAvKipcbiAgKiBDcmVhdGUgYSBuZXcge0BsaW5rIGh0dHBzOi8vd3d3LnRlcnJhZm9ybS5pby9kb2NzL3Byb3ZpZGVycy9hd3NjYy9kL3F1aWNrc2lnaHRfdGVtcGxhdGUuaHRtbCBhd3NjY19xdWlja3NpZ2h0X3RlbXBsYXRlfSBEYXRhIFNvdXJjZVxuICAqXG4gICogQHBhcmFtIHNjb3BlIFRoZSBzY29wZSBpbiB3aGljaCB0byBkZWZpbmUgdGhpcyBjb25zdHJ1Y3RcbiAgKiBAcGFyYW0gaWQgVGhlIHNjb3BlZCBjb25zdHJ1Y3QgSUQuIE11c3QgYmUgdW5pcXVlIGFtb25nc3Qgc2libGluZ3MgaW4gdGhlIHNhbWUgc2NvcGVcbiAgKiBAcGFyYW0gb3B0aW9ucyBEYXRhQXdzY2NRdWlja3NpZ2h0VGVtcGxhdGVDb25maWdcbiAgKi9cbiAgcHVibGljIGNvbnN0cnVjdG9yKHNjb3BlOiBDb25zdHJ1Y3QsIGlkOiBzdHJpbmcsIGNvbmZpZzogRGF0YUF3c2NjUXVpY2tzaWdodFRlbXBsYXRlQ29uZmlnKSB7XG4gICAgc3VwZXIoc2NvcGUsIGlkLCB7XG4gICAgICB0ZXJyYWZvcm1SZXNvdXJjZVR5cGU6ICdhd3NjY19xdWlja3NpZ2h0X3RlbXBsYXRlJyxcbiAgICAgIHRlcnJhZm9ybUdlbmVyYXRvck1ldGFkYXRhOiB7XG4gICAgICAgIHByb3ZpZGVyTmFtZTogJ2F3c2NjJ1xuICAgICAgfSxcbiAgICAgIHByb3ZpZGVyOiBjb25maWcucHJvdmlkZXIsXG4gICAgICBkZXBlbmRzT246IGNvbmZpZy5kZXBlbmRzT24sXG4gICAgICBjb3VudDogY29uZmlnLmNvdW50LFxuICAgICAgbGlmZWN5Y2xlOiBjb25maWcubGlmZWN5Y2xlXG4gICAgfSk7XG4gICAgdGhpcy5faWQgPSBjb25maWcuaWQ7XG4gIH1cblxuICAvLyA9PT09PT09PT09XG4gIC8vIEFUVFJJQlVURVNcbiAgLy8gPT09PT09PT09PVxuXG4gIC8vIGFybiAtIGNvbXB1dGVkOiB0cnVlLCBvcHRpb25hbDogZmFsc2UsIHJlcXVpcmVkOiBmYWxzZVxuICBwdWJsaWMgZ2V0IGFybigpIHtcbiAgICByZXR1cm4gdGhpcy5nZXRTdHJpbmdBdHRyaWJ1dGUoJ2FybicpO1xuICB9XG5cbiAgLy8gYXdzX2FjY291bnRfaWQgLSBjb21wdXRlZDogdHJ1ZSwgb3B0aW9uYWw6IGZhbHNlLCByZXF1aXJlZDogZmFsc2VcbiAgcHVibGljIGdldCBhd3NBY2NvdW50SWQoKSB7XG4gICAgcmV0dXJuIHRoaXMuZ2V0U3RyaW5nQXR0cmlidXRlKCdhd3NfYWNjb3VudF9pZCcpO1xuICB9XG5cbiAgLy8gY3JlYXRlZF90aW1lIC0gY29tcHV0ZWQ6IHRydWUsIG9wdGlvbmFsOiBmYWxzZSwgcmVxdWlyZWQ6IGZhbHNlXG4gIHB1YmxpYyBnZXQgY3JlYXRlZFRpbWUoKSB7XG4gICAgcmV0dXJuIHRoaXMuZ2V0U3RyaW5nQXR0cmlidXRlKCdjcmVhdGVkX3RpbWUnKTtcbiAgfVxuXG4gIC8vIGlkIC0gY29tcHV0ZWQ6IGZhbHNlLCBvcHRpb25hbDogZmFsc2UsIHJlcXVpcmVkOiB0cnVlXG4gIHByaXZhdGUgX2lkOiBzdHJpbmc7XG4gIHB1YmxpYyBnZXQgaWQoKSB7XG4gICAgcmV0dXJuIHRoaXMuZ2V0U3RyaW5nQXR0cmlidXRlKCdpZCcpO1xuICB9XG4gIHB1YmxpYyBzZXQgaWQodmFsdWU6IHN0cmluZykge1xuICAgIHRoaXMuX2lkID0gdmFsdWU7XG4gIH1cbiAgLy8gVGVtcG9yYXJpbHkgZXhwb3NlIGlucHV0IHZhbHVlLiBVc2Ugd2l0aCBjYXV0aW9uLlxuICBwdWJsaWMgZ2V0IGlkSW5wdXQoKSB7XG4gICAgcmV0dXJuIHRoaXMuX2lkXG4gIH1cblxuICAvLyBsYXN0X3VwZGF0ZWRfdGltZSAtIGNvbXB1dGVkOiB0cnVlLCBvcHRpb25hbDogZmFsc2UsIHJlcXVpcmVkOiBmYWxzZVxuICBwdWJsaWMgZ2V0IGxhc3RVcGRhdGVkVGltZSgpIHtcbiAgICByZXR1cm4gdGhpcy5nZXRTdHJpbmdBdHRyaWJ1dGUoJ2xhc3RfdXBkYXRlZF90aW1lJyk7XG4gIH1cblxuICAvLyBuYW1lIC0gY29tcHV0ZWQ6IHRydWUsIG9wdGlvbmFsOiBmYWxzZSwgcmVxdWlyZWQ6IGZhbHNlXG4gIHB1YmxpYyBnZXQgbmFtZSgpIHtcbiAgICByZXR1cm4gdGhpcy5nZXRTdHJpbmdBdHRyaWJ1dGUoJ25hbWUnKTtcbiAgfVxuXG4gIC8vIHBlcm1pc3Npb25zIC0gY29tcHV0ZWQ6IHRydWUsIG9wdGlvbmFsOiBmYWxzZSwgcmVxdWlyZWQ6IGZhbHNlXG4gIHB1YmxpYyBnZXQgcGVybWlzc2lvbnMoKSB7XG4gICAgcmV0dXJuIHRoaXMuaW50ZXJwb2xhdGlvbkZvckF0dHJpYnV0ZSgncGVybWlzc2lvbnMnKSBhcyBhbnk7XG4gIH1cblxuICAvLyBzb3VyY2VfZW50aXR5IC0gY29tcHV0ZWQ6IHRydWUsIG9wdGlvbmFsOiBmYWxzZSwgcmVxdWlyZWQ6IGZhbHNlXG4gIHB1YmxpYyBnZXQgc291cmNlRW50aXR5KCkge1xuICAgIHJldHVybiB0aGlzLmludGVycG9sYXRpb25Gb3JBdHRyaWJ1dGUoJ3NvdXJjZV9lbnRpdHknKSBhcyBhbnk7XG4gIH1cblxuICAvLyB0YWdzIC0gY29tcHV0ZWQ6IHRydWUsIG9wdGlvbmFsOiBmYWxzZSwgcmVxdWlyZWQ6IGZhbHNlXG4gIHB1YmxpYyBnZXQgdGFncygpIHtcbiAgICByZXR1cm4gdGhpcy5pbnRlcnBvbGF0aW9uRm9yQXR0cmlidXRlKCd0YWdzJykgYXMgYW55O1xuICB9XG5cbiAgLy8gdGVtcGxhdGVfaWQgLSBjb21wdXRlZDogdHJ1ZSwgb3B0aW9uYWw6IGZhbHNlLCByZXF1aXJlZDogZmFsc2VcbiAgcHVibGljIGdldCB0ZW1wbGF0ZUlkKCkge1xuICAgIHJldHVybiB0aGlzLmdldFN0cmluZ0F0dHJpYnV0ZSgndGVtcGxhdGVfaWQnKTtcbiAgfVxuXG4gIC8vIHZlcnNpb24gLSBjb21wdXRlZDogdHJ1ZSwgb3B0aW9uYWw6IGZhbHNlLCByZXF1aXJlZDogZmFsc2VcbiAgcHVibGljIGdldCB2ZXJzaW9uKCkge1xuICAgIHJldHVybiB0aGlzLmludGVycG9sYXRpb25Gb3JBdHRyaWJ1dGUoJ3ZlcnNpb24nKSBhcyBhbnk7XG4gIH1cblxuICAvLyB2ZXJzaW9uX2Rlc2NyaXB0aW9uIC0gY29tcHV0ZWQ6IHRydWUsIG9wdGlvbmFsOiBmYWxzZSwgcmVxdWlyZWQ6IGZhbHNlXG4gIHB1YmxpYyBnZXQgdmVyc2lvbkRlc2NyaXB0aW9uKCkge1xuICAgIHJldHVybiB0aGlzLmdldFN0cmluZ0F0dHJpYnV0ZSgndmVyc2lvbl9kZXNjcmlwdGlvbicpO1xuICB9XG5cbiAgLy8gPT09PT09PT09XG4gIC8vIFNZTlRIRVNJU1xuICAvLyA9PT09PT09PT1cblxuICBwcm90ZWN0ZWQgc3ludGhlc2l6ZUF0dHJpYnV0ZXMoKTogeyBbbmFtZTogc3RyaW5nXTogYW55IH0ge1xuICAgIHJldHVybiB7XG4gICAgICBpZDogY2RrdGYuc3RyaW5nVG9UZXJyYWZvcm0odGhpcy5faWQpLFxuICAgIH07XG4gIH1cbn1cbiJdfQ==