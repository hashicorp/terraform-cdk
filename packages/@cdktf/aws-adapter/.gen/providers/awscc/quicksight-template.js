"use strict";
// https://www.terraform.io/docs/providers/awscc/r/quicksight_template.html
// generated from terraform resource schema
Object.defineProperty(exports, "__esModule", { value: true });
exports.QuicksightTemplate = exports.quicksightTemplateVersionToTerraform = exports.QuicksightTemplateVersion = exports.quicksightTemplateVersionSheetsToTerraform = exports.quicksightTemplateVersionErrorsToTerraform = exports.quicksightTemplateVersionDataSetConfigurationsToTerraform = exports.quicksightTemplateVersionDataSetConfigurationsDataSetSchemaToTerraform = exports.quicksightTemplateVersionDataSetConfigurationsDataSetSchemaColumnSchemaListToTerraform = exports.quicksightTemplateVersionDataSetConfigurationsColumnGroupSchemaListToTerraform = exports.quicksightTemplateVersionDataSetConfigurationsColumnGroupSchemaListColumnGroupColumnSchemaListToTerraform = exports.quicksightTemplateTagsToTerraform = exports.quicksightTemplateSourceEntityToTerraform = exports.quicksightTemplateSourceEntitySourceTemplateToTerraform = exports.quicksightTemplateSourceEntitySourceAnalysisToTerraform = exports.quicksightTemplateSourceEntitySourceAnalysisDataSetReferencesToTerraform = exports.quicksightTemplatePermissionsToTerraform = void 0;
const cdktf = require("cdktf");
function quicksightTemplatePermissionsToTerraform(struct) {
    if (!cdktf.canInspect(struct)) {
        return struct;
    }
    return {
        actions: cdktf.listMapper(cdktf.stringToTerraform)(struct.actions),
        principal: cdktf.stringToTerraform(struct.principal),
    };
}
exports.quicksightTemplatePermissionsToTerraform = quicksightTemplatePermissionsToTerraform;
function quicksightTemplateSourceEntitySourceAnalysisDataSetReferencesToTerraform(struct) {
    if (!cdktf.canInspect(struct)) {
        return struct;
    }
    return {
        data_set_arn: cdktf.stringToTerraform(struct.dataSetArn),
        data_set_placeholder: cdktf.stringToTerraform(struct.dataSetPlaceholder),
    };
}
exports.quicksightTemplateSourceEntitySourceAnalysisDataSetReferencesToTerraform = quicksightTemplateSourceEntitySourceAnalysisDataSetReferencesToTerraform;
function quicksightTemplateSourceEntitySourceAnalysisToTerraform(struct) {
    if (!cdktf.canInspect(struct)) {
        return struct;
    }
    return {
        arn: cdktf.stringToTerraform(struct.arn),
        data_set_references: cdktf.listMapper(quicksightTemplateSourceEntitySourceAnalysisDataSetReferencesToTerraform)(struct.dataSetReferences),
    };
}
exports.quicksightTemplateSourceEntitySourceAnalysisToTerraform = quicksightTemplateSourceEntitySourceAnalysisToTerraform;
function quicksightTemplateSourceEntitySourceTemplateToTerraform(struct) {
    if (!cdktf.canInspect(struct)) {
        return struct;
    }
    return {
        arn: cdktf.stringToTerraform(struct.arn),
    };
}
exports.quicksightTemplateSourceEntitySourceTemplateToTerraform = quicksightTemplateSourceEntitySourceTemplateToTerraform;
function quicksightTemplateSourceEntityToTerraform(struct) {
    if (!cdktf.canInspect(struct)) {
        return struct;
    }
    return {
        source_analysis: quicksightTemplateSourceEntitySourceAnalysisToTerraform(struct.sourceAnalysis),
        source_template: quicksightTemplateSourceEntitySourceTemplateToTerraform(struct.sourceTemplate),
    };
}
exports.quicksightTemplateSourceEntityToTerraform = quicksightTemplateSourceEntityToTerraform;
function quicksightTemplateTagsToTerraform(struct) {
    if (!cdktf.canInspect(struct)) {
        return struct;
    }
    return {
        key: cdktf.stringToTerraform(struct.key),
        value: cdktf.stringToTerraform(struct.value),
    };
}
exports.quicksightTemplateTagsToTerraform = quicksightTemplateTagsToTerraform;
function quicksightTemplateVersionDataSetConfigurationsColumnGroupSchemaListColumnGroupColumnSchemaListToTerraform(struct) {
    if (!cdktf.canInspect(struct)) {
        return struct;
    }
    return {
        name: cdktf.stringToTerraform(struct.name),
    };
}
exports.quicksightTemplateVersionDataSetConfigurationsColumnGroupSchemaListColumnGroupColumnSchemaListToTerraform = quicksightTemplateVersionDataSetConfigurationsColumnGroupSchemaListColumnGroupColumnSchemaListToTerraform;
function quicksightTemplateVersionDataSetConfigurationsColumnGroupSchemaListToTerraform(struct) {
    if (!cdktf.canInspect(struct)) {
        return struct;
    }
    return {
        column_group_column_schema_list: cdktf.listMapper(quicksightTemplateVersionDataSetConfigurationsColumnGroupSchemaListColumnGroupColumnSchemaListToTerraform)(struct.columnGroupColumnSchemaList),
        name: cdktf.stringToTerraform(struct.name),
    };
}
exports.quicksightTemplateVersionDataSetConfigurationsColumnGroupSchemaListToTerraform = quicksightTemplateVersionDataSetConfigurationsColumnGroupSchemaListToTerraform;
function quicksightTemplateVersionDataSetConfigurationsDataSetSchemaColumnSchemaListToTerraform(struct) {
    if (!cdktf.canInspect(struct)) {
        return struct;
    }
    return {
        data_type: cdktf.stringToTerraform(struct.dataType),
        geographic_role: cdktf.stringToTerraform(struct.geographicRole),
        name: cdktf.stringToTerraform(struct.name),
    };
}
exports.quicksightTemplateVersionDataSetConfigurationsDataSetSchemaColumnSchemaListToTerraform = quicksightTemplateVersionDataSetConfigurationsDataSetSchemaColumnSchemaListToTerraform;
function quicksightTemplateVersionDataSetConfigurationsDataSetSchemaToTerraform(struct) {
    if (!cdktf.canInspect(struct)) {
        return struct;
    }
    return {
        column_schema_list: cdktf.listMapper(quicksightTemplateVersionDataSetConfigurationsDataSetSchemaColumnSchemaListToTerraform)(struct.columnSchemaList),
    };
}
exports.quicksightTemplateVersionDataSetConfigurationsDataSetSchemaToTerraform = quicksightTemplateVersionDataSetConfigurationsDataSetSchemaToTerraform;
function quicksightTemplateVersionDataSetConfigurationsToTerraform(struct) {
    if (!cdktf.canInspect(struct)) {
        return struct;
    }
    return {
        column_group_schema_list: cdktf.listMapper(quicksightTemplateVersionDataSetConfigurationsColumnGroupSchemaListToTerraform)(struct.columnGroupSchemaList),
        data_set_schema: quicksightTemplateVersionDataSetConfigurationsDataSetSchemaToTerraform(struct.dataSetSchema),
        placeholder: cdktf.stringToTerraform(struct.placeholder),
    };
}
exports.quicksightTemplateVersionDataSetConfigurationsToTerraform = quicksightTemplateVersionDataSetConfigurationsToTerraform;
function quicksightTemplateVersionErrorsToTerraform(struct) {
    if (!cdktf.canInspect(struct)) {
        return struct;
    }
    return {
        message: cdktf.stringToTerraform(struct.message),
        type: cdktf.stringToTerraform(struct.type),
    };
}
exports.quicksightTemplateVersionErrorsToTerraform = quicksightTemplateVersionErrorsToTerraform;
function quicksightTemplateVersionSheetsToTerraform(struct) {
    if (!cdktf.canInspect(struct)) {
        return struct;
    }
    return {
        name: cdktf.stringToTerraform(struct.name),
        sheet_id: cdktf.stringToTerraform(struct.sheetId),
    };
}
exports.quicksightTemplateVersionSheetsToTerraform = quicksightTemplateVersionSheetsToTerraform;
class QuicksightTemplateVersion extends cdktf.ComplexComputedList {
    get createdTime() {
        return this.getStringAttribute('created_time');
    }
    set createdTime(value) {
        this._createdTime = value;
    }
    resetCreatedTime() {
        this._createdTime = undefined;
    }
    // Temporarily expose input value. Use with caution.
    get createdTimeInput() {
        return this._createdTime;
    }
    get dataSetConfigurations() {
        return this.interpolationForAttribute('data_set_configurations');
    }
    set dataSetConfigurations(value) {
        this._dataSetConfigurations = value;
    }
    resetDataSetConfigurations() {
        this._dataSetConfigurations = undefined;
    }
    // Temporarily expose input value. Use with caution.
    get dataSetConfigurationsInput() {
        return this._dataSetConfigurations;
    }
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
    get errors() {
        return this.interpolationForAttribute('errors');
    }
    set errors(value) {
        this._errors = value;
    }
    resetErrors() {
        this._errors = undefined;
    }
    // Temporarily expose input value. Use with caution.
    get errorsInput() {
        return this._errors;
    }
    get sheets() {
        return this.interpolationForAttribute('sheets');
    }
    set sheets(value) {
        this._sheets = value;
    }
    resetSheets() {
        this._sheets = undefined;
    }
    // Temporarily expose input value. Use with caution.
    get sheetsInput() {
        return this._sheets;
    }
    get sourceEntityArn() {
        return this.getStringAttribute('source_entity_arn');
    }
    set sourceEntityArn(value) {
        this._sourceEntityArn = value;
    }
    resetSourceEntityArn() {
        this._sourceEntityArn = undefined;
    }
    // Temporarily expose input value. Use with caution.
    get sourceEntityArnInput() {
        return this._sourceEntityArn;
    }
    get status() {
        return this.getStringAttribute('status');
    }
    set status(value) {
        this._status = value;
    }
    resetStatus() {
        this._status = undefined;
    }
    // Temporarily expose input value. Use with caution.
    get statusInput() {
        return this._status;
    }
    get themeArn() {
        return this.getStringAttribute('theme_arn');
    }
    set themeArn(value) {
        this._themeArn = value;
    }
    resetThemeArn() {
        this._themeArn = undefined;
    }
    // Temporarily expose input value. Use with caution.
    get themeArnInput() {
        return this._themeArn;
    }
    get versionNumber() {
        return this.getNumberAttribute('version_number');
    }
    set versionNumber(value) {
        this._versionNumber = value;
    }
    resetVersionNumber() {
        this._versionNumber = undefined;
    }
    // Temporarily expose input value. Use with caution.
    get versionNumberInput() {
        return this._versionNumber;
    }
}
exports.QuicksightTemplateVersion = QuicksightTemplateVersion;
function quicksightTemplateVersionToTerraform(struct) {
    if (!cdktf.canInspect(struct)) {
        return struct;
    }
    return {
        created_time: cdktf.stringToTerraform(struct.createdTime),
        data_set_configurations: cdktf.listMapper(quicksightTemplateVersionDataSetConfigurationsToTerraform)(struct.dataSetConfigurations),
        description: cdktf.stringToTerraform(struct.description),
        errors: cdktf.listMapper(quicksightTemplateVersionErrorsToTerraform)(struct.errors),
        sheets: cdktf.listMapper(quicksightTemplateVersionSheetsToTerraform)(struct.sheets),
        source_entity_arn: cdktf.stringToTerraform(struct.sourceEntityArn),
        status: cdktf.stringToTerraform(struct.status),
        theme_arn: cdktf.stringToTerraform(struct.themeArn),
        version_number: cdktf.numberToTerraform(struct.versionNumber),
    };
}
exports.quicksightTemplateVersionToTerraform = quicksightTemplateVersionToTerraform;
/**
* Represents a {@link https://www.terraform.io/docs/providers/awscc/r/quicksight_template.html awscc_quicksight_template}
*/
class QuicksightTemplate extends cdktf.TerraformResource {
    // ===========
    // INITIALIZER
    // ===========
    /**
    * Create a new {@link https://www.terraform.io/docs/providers/awscc/r/quicksight_template.html awscc_quicksight_template} Resource
    *
    * @param scope The scope in which to define this construct
    * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
    * @param options QuicksightTemplateConfig
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
        this._awsAccountId = config.awsAccountId;
        this._name = config.name;
        this._permissions = config.permissions;
        this._sourceEntity = config.sourceEntity;
        this._tags = config.tags;
        this._templateId = config.templateId;
        this._versionDescription = config.versionDescription;
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
    // Temporarily expose input value. Use with caution.
    get awsAccountIdInput() {
        return this._awsAccountId;
    }
    // created_time - computed: true, optional: false, required: false
    get createdTime() {
        return this.getStringAttribute('created_time');
    }
    // id - computed: true, optional: false, required: false
    get id() {
        return this.getStringAttribute('id');
    }
    // last_updated_time - computed: true, optional: false, required: false
    get lastUpdatedTime() {
        return this.getStringAttribute('last_updated_time');
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
    get sourceEntity() {
        return this.interpolationForAttribute('source_entity');
    }
    set sourceEntity(value) {
        this._sourceEntity = value;
    }
    resetSourceEntity() {
        this._sourceEntity = undefined;
    }
    // Temporarily expose input value. Use with caution.
    get sourceEntityInput() {
        return this._sourceEntity;
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
    get templateId() {
        return this.getStringAttribute('template_id');
    }
    set templateId(value) {
        this._templateId = value;
    }
    // Temporarily expose input value. Use with caution.
    get templateIdInput() {
        return this._templateId;
    }
    // version - computed: true, optional: false, required: false
    get version() {
        return this.interpolationForAttribute('version');
    }
    get versionDescription() {
        return this.getStringAttribute('version_description');
    }
    set versionDescription(value) {
        this._versionDescription = value;
    }
    resetVersionDescription() {
        this._versionDescription = undefined;
    }
    // Temporarily expose input value. Use with caution.
    get versionDescriptionInput() {
        return this._versionDescription;
    }
    // =========
    // SYNTHESIS
    // =========
    synthesizeAttributes() {
        return {
            aws_account_id: cdktf.stringToTerraform(this._awsAccountId),
            name: cdktf.stringToTerraform(this._name),
            permissions: cdktf.listMapper(quicksightTemplatePermissionsToTerraform)(this._permissions),
            source_entity: quicksightTemplateSourceEntityToTerraform(this._sourceEntity),
            tags: cdktf.listMapper(quicksightTemplateTagsToTerraform)(this._tags),
            template_id: cdktf.stringToTerraform(this._templateId),
            version_description: cdktf.stringToTerraform(this._versionDescription),
        };
    }
}
exports.QuicksightTemplate = QuicksightTemplate;
// =================
// STATIC PROPERTIES
// =================
QuicksightTemplate.tfResourceType = "awscc_quicksight_template";
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicXVpY2tzaWdodC10ZW1wbGF0ZS5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbInF1aWNrc2lnaHQtdGVtcGxhdGUudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IjtBQUFBLDJFQUEyRTtBQUMzRSwyQ0FBMkM7OztBQUczQywrQkFBK0I7QUE0RS9CLFNBQWdCLHdDQUF3QyxDQUFDLE1BQXNDO0lBQzdGLElBQUksQ0FBQyxLQUFLLENBQUMsVUFBVSxDQUFDLE1BQU0sQ0FBQyxFQUFFO1FBQUUsT0FBTyxNQUFNLENBQUM7S0FBRTtJQUNqRCxPQUFPO1FBQ0wsT0FBTyxFQUFFLEtBQUssQ0FBQyxVQUFVLENBQUMsS0FBSyxDQUFDLGlCQUFpQixDQUFDLENBQUMsTUFBTyxDQUFDLE9BQU8sQ0FBQztRQUNuRSxTQUFTLEVBQUUsS0FBSyxDQUFDLGlCQUFpQixDQUFDLE1BQU8sQ0FBQyxTQUFTLENBQUM7S0FDdEQsQ0FBQTtBQUNILENBQUM7QUFORCw0RkFNQztBQWlCRCxTQUFnQix3RUFBd0UsQ0FBQyxNQUFzRTtJQUM3SixJQUFJLENBQUMsS0FBSyxDQUFDLFVBQVUsQ0FBQyxNQUFNLENBQUMsRUFBRTtRQUFFLE9BQU8sTUFBTSxDQUFDO0tBQUU7SUFDakQsT0FBTztRQUNMLFlBQVksRUFBRSxLQUFLLENBQUMsaUJBQWlCLENBQUMsTUFBTyxDQUFDLFVBQVUsQ0FBQztRQUN6RCxvQkFBb0IsRUFBRSxLQUFLLENBQUMsaUJBQWlCLENBQUMsTUFBTyxDQUFDLGtCQUFrQixDQUFDO0tBQzFFLENBQUE7QUFDSCxDQUFDO0FBTkQsNEpBTUM7QUFrQkQsU0FBZ0IsdURBQXVELENBQUMsTUFBcUQ7SUFDM0gsSUFBSSxDQUFDLEtBQUssQ0FBQyxVQUFVLENBQUMsTUFBTSxDQUFDLEVBQUU7UUFBRSxPQUFPLE1BQU0sQ0FBQztLQUFFO0lBQ2pELE9BQU87UUFDTCxHQUFHLEVBQUUsS0FBSyxDQUFDLGlCQUFpQixDQUFDLE1BQU8sQ0FBQyxHQUFHLENBQUM7UUFDekMs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QUNaLFlBQVk7SUFDWixZQUFZO0lBRUYsb0JBQW9CO1FBQzVCLE9BQU87WUFDTCxjQUFjLEVBQUUsS0FBSyxDQUFDLGlCQUFpQixDQUFDLElBQUksQ0FBQyxhQUFhLENBQUM7WUFDM0QsSUFBSSxFQUFFLEtBQUssQ0FBQyxpQkFBaUIsQ0FBQyxJQUFJLENBQUMsS0FBSyxDQUFDO1lBQ3pDLFdBQVcsRUFBRSxLQUFLLENBQUMsVUFBVSxDQUFDLHdDQUF3QyxDQUFDLENBQUMsSUFBSSxDQUFDLFlBQVksQ0FBQztZQUMxRixhQUFhLEVBQUUseUNBQXlDLENBQUMsSUFBSSxDQUFDLGFBQWEsQ0FBQztZQUM1RSxJQUFJLEVBQUUsS0FBSyxDQUFDLFVBQVUsQ0FBQyxpQ0FBaUMsQ0FBQyxDQUFDLElBQUksQ0FBQyxLQUFLLENBQUM7WUFDckUsV0FBVyxFQUFFLEtBQUssQ0FBQyxpQkFBaUIsQ0FBQyxJQUFJLENBQUMsV0FBVyxDQUFDO1lBQ3RELG1CQUFtQixFQUFFLEtBQUssQ0FBQyxpQkFBaUIsQ0FBQyxJQUFJLENBQUMsbUJBQW1CLENBQUM7U0FDdkUsQ0FBQztJQUNKLENBQUM7O0FBM0xILGdEQTRMQztBQTFMQyxvQkFBb0I7QUFDcEIsb0JBQW9CO0FBQ3BCLG9CQUFvQjtBQUNHLGlDQUFjLEdBQVcsMkJBQTJCLENBQUMiLCJzb3VyY2VzQ29udGVudCI6WyIvLyBodHRwczovL3d3dy50ZXJyYWZvcm0uaW8vZG9jcy9wcm92aWRlcnMvYXdzY2Mvci9xdWlja3NpZ2h0X3RlbXBsYXRlLmh0bWxcbi8vIGdlbmVyYXRlZCBmcm9tIHRlcnJhZm9ybSByZXNvdXJjZSBzY2hlbWFcblxuaW1wb3J0IHsgQ29uc3RydWN0IH0gZnJvbSAnY29uc3RydWN0cyc7XG5pbXBvcnQgKiBhcyBjZGt0ZiBmcm9tICdjZGt0Zic7XG5cbi8vIENvbmZpZ3VyYXRpb25cblxuZXhwb3J0IGludGVyZmFjZSBRdWlja3NpZ2h0VGVtcGxhdGVDb25maWcgZXh0ZW5kcyBjZGt0Zi5UZXJyYWZvcm1NZXRhQXJndW1lbnRzIHtcbiAgLyoqXG4gICogRG9jcyBhdCBUZXJyYWZvcm0gUmVnaXN0cnk6IHtAbGluayBodHRwczovL3d3dy50ZXJyYWZvcm0uaW8vZG9jcy9wcm92aWRlcnMvYXdzY2Mvci9xdWlja3NpZ2h0X3RlbXBsYXRlLmh0bWwjYXdzX2FjY291bnRfaWQgUXVpY2tzaWdodFRlbXBsYXRlI2F3c19hY2NvdW50X2lkfVxuICAqL1xuICByZWFkb25seSBhd3NBY2NvdW50SWQ6IHN0cmluZztcbiAgLyoqXG4gICogPHA+QSBkaXNwbGF5IG5hbWUgZm9yIHRoZSB0ZW1wbGF0ZS48L3A+XG4gICogXG4gICogRG9jcyBhdCBUZXJyYWZvcm0gUmVnaXN0cnk6IHtAbGluayBodHRwczovL3d3dy50ZXJyYWZvcm0uaW8vZG9jcy9wcm92aWRlcnMvYXdzY2Mvci9xdWlja3NpZ2h0X3RlbXBsYXRlLmh0bWwjbmFtZSBRdWlja3NpZ2h0VGVtcGxhdGUjbmFtZX1cbiAgKi9cbiAgcmVhZG9ubHkgbmFtZT86IHN0cmluZztcbiAgLyoqXG4gICogPHA+QSBsaXN0IG9mIHJlc291cmNlIHBlcm1pc3Npb25zIHRvIGJlIHNldCBvbiB0aGUgdGVtcGxhdGUuIDwvcD5cbiAgKiBcbiAgKiBEb2NzIGF0IFRlcnJhZm9ybSBSZWdpc3RyeToge0BsaW5rIGh0dHBzOi8vd3d3LnRlcnJhZm9ybS5pby9kb2NzL3Byb3ZpZGVycy9hd3NjYy9yL3F1aWNrc2lnaHRfdGVtcGxhdGUuaHRtbCNwZXJtaXNzaW9ucyBRdWlja3NpZ2h0VGVtcGxhdGUjcGVybWlzc2lvbnN9XG4gICovXG4gIHJlYWRvbmx5IHBlcm1pc3Npb25zPzogUXVpY2tzaWdodFRlbXBsYXRlUGVybWlzc2lvbnNbXTtcbiAgLyoqXG4gICogPHA+VGhlIHNvdXJjZSBlbnRpdHkgb2YgdGhlIHRlbXBsYXRlLjwvcD5cbiAgKiBcbiAgKiBEb2NzIGF0IFRlcnJhZm9ybSBSZWdpc3RyeToge0BsaW5rIGh0dHBzOi8vd3d3LnRlcnJhZm9ybS5pby9kb2NzL3Byb3ZpZGVycy9hd3NjYy9yL3F1aWNrc2lnaHRfdGVtcGxhdGUuaHRtbCNzb3VyY2VfZW50aXR5IFF1aWNrc2lnaHRUZW1wbGF0ZSNzb3VyY2VfZW50aXR5fVxuICAqL1xuICByZWFkb25seSBzb3VyY2VFbnRpdHk/OiBRdWlja3NpZ2h0VGVtcGxhdGVTb3VyY2VFbnRpdHk7XG4gIC8qKlxuICAqIDxwPkNvbnRhaW5zIGEgbWFwIG9mIHRoZSBrZXktdmFsdWUgcGFpcnMgZm9yIHRoZSByZXNvdXJjZSB0YWcgb3IgdGFncyBhc3NpZ25lZCB0byB0aGUgcmVzb3VyY2UuPC9wPlxuICAqIFxuICAqIERvY3MgYXQgVGVycmFmb3JtIFJlZ2lzdHJ5OiB7QGxpbmsgaHR0cHM6Ly93d3cudGVycmFmb3JtLmlvL2RvY3MvcHJvdmlkZXJzL2F3c2NjL3IvcXVpY2tzaWdodF90ZW1wbGF0ZS5odG1sI3RhZ3MgUXVpY2tzaWdodFRlbXBsYXRlI3RhZ3N9XG4gICovXG4gIHJlYWRvbmx5IHRhZ3M/OiBRdWlja3NpZ2h0VGVtcGxhdGVUYWdzW107XG4gIC8qKlxuICAqIERvY3MgYXQgVGVycmFmb3JtIFJlZ2lzdHJ5OiB7QGxpbmsgaHR0cHM6Ly93d3cudGVycmFmb3JtLmlvL2RvY3MvcHJvdmlkZXJzL2F3c2NjL3IvcXVpY2tzaWdodF90ZW1wbGF0ZS5odG1sI3RlbXBsYXRlX2lkIFF1aWNrc2lnaHRUZW1wbGF0ZSN0ZW1wbGF0ZV9pZH1cbiAgKi9cbiAgcmVhZG9ubHkgdGVtcGxhdGVJZDogc3RyaW5nO1xuICAvKipcbiAgKiA8cD5BIGRlc2NyaXB0aW9uIG9mIHRoZSBjdXJyZW50IHRlbXBsYXRlIHZlcnNpb24gYmVpbmcgY3JlYXRlZC4gVGhpcyBBUEkgb3BlcmF0aW9uIGNyZWF0ZXMgdGhlXG5cdFx0XHRmaXJzdCB2ZXJzaW9uIG9mIHRoZSB0ZW1wbGF0ZS4gRXZlcnkgdGltZSA8Y29kZT5VcGRhdGVUZW1wbGF0ZTwvY29kZT4gaXMgY2FsbGVkLCBhIG5ld1xuXHRcdFx0dmVyc2lvbiBpcyBjcmVhdGVkLiBFYWNoIHZlcnNpb24gb2YgdGhlIHRlbXBsYXRlIG1haW50YWlucyBhIGRlc2NyaXB0aW9uIG9mIHRoZSB2ZXJzaW9uXG5cdFx0XHRpbiB0aGUgPGNvZGU+VmVyc2lvbkRlc2NyaXB0aW9uPC9jb2RlPiBmaWVsZC48L3A+XG4gICogXG4gICogRG9jcyBhdCBUZXJyYWZvcm0gUmVnaXN0cnk6IHtAbGluayBodHRwczovL3d3dy50ZXJyYWZvcm0uaW8vZG9jcy9wcm92aWRlcnMvYXdzY2Mvci9xdWlja3NpZ2h0X3RlbXBsYXRlLmh0bWwjdmVyc2lvbl9kZXNjcmlwdGlvbiBRdWlja3NpZ2h0VGVtcGxhdGUjdmVyc2lvbl9kZXNjcmlwdGlvbn1cbiAgKi9cbiAgcmVhZG9ubHkgdmVyc2lvbkRlc2NyaXB0aW9uPzogc3RyaW5nO1xufVxuZXhwb3J0IGludGVyZmFjZSBRdWlja3NpZ2h0VGVtcGxhdGVQZXJtaXNzaW9ucyB7XG4gIC8qKlxuICAqIDxwPlRoZSBJQU0gYWN0aW9uIHRvIGdyYW50IG9yIHJldm9rZSBwZXJtaXNzaW9ucyBvbi48L3A+XG4gICogXG4gICogRG9jcyBhdCBUZXJyYWZvcm0gUmVnaXN0cnk6IHtAbGluayBodHRwczovL3d3dy50ZXJyYWZvcm0uaW8vZG9jcy9wcm92aWRlcnMvYXdzY2Mvci9xdWlja3NpZ2h0X3RlbXBsYXRlLmh0bWwjYWN0aW9ucyBRdWlja3NpZ2h0VGVtcGxhdGUjYWN0aW9uc31cbiAgKi9cbiAgcmVhZG9ubHkgYWN0aW9uczogc3RyaW5nW107XG4gIC8qKlxuICAqIDxwPlRoZSBBbWF6b24gUmVzb3VyY2UgTmFtZSAoQVJOKSBvZiB0aGUgcHJpbmNpcGFsLiBUaGlzIGNhbiBiZSBvbmUgb2YgdGhlXG4gICAgICAgICAgICBmb2xsb3dpbmc6PC9wPlxuICAgICAgICA8dWw+XG4gICAgICAgICAgICA8bGk+XG4gICAgICAgICAgICAgICAgPHA+VGhlIEFSTiBvZiBhbiBBbWF6b24gUXVpY2tTaWdodCB1c2VyIG9yIGdyb3VwIGFzc29jaWF0ZWQgd2l0aCBhIGRhdGEgc291cmNlIG9yIGRhdGFzZXQuIChUaGlzIGlzIGNvbW1vbi4pPC9wPlxuICAgICAgICAgICAgPC9saT5cbiAgICAgICAgICAgIDxsaT5cbiAgICAgICAgICAgICAgICA8cD5UaGUgQVJOIG9mIGFuIEFtYXpvbiBRdWlja1NpZ2h0IHVzZXIsIGdyb3VwLCBvciBuYW1lc3BhY2UgYXNzb2NpYXRlZCB3aXRoIGFuIGFuYWx5c2lzLCBkYXNoYm9hcmQsIHRlbXBsYXRlLCBvciB0aGVtZS4gKFRoaXMgaXMgY29tbW9uLik8L3A+XG4gICAgICAgICAgICA8L2xpPlxuICAgICAgICAgICAgPGxpPlxuICAgICAgICAgICAgICAgIDxwPlRoZSBBUk4gb2YgYW4gQVdTIGFjY291bnQgcm9vdDogVGhpcyBpcyBhbiBJQU0gQVJOIHJhdGhlciB0aGFuIGEgUXVpY2tTaWdodFxuICAgICAgICAgICAgICAgICAgICBBUk4uIFVzZSB0aGlzIG9wdGlvbiBvbmx5IHRvIHNoYXJlIHJlc291cmNlcyAodGVtcGxhdGVzKSBhY3Jvc3MgQVdTIGFjY291bnRzLlxuICAgICAgICAgICAgICAgICAgICAoVGhpcyBpcyBsZXNzIGNvbW1vbi4pIDwvcD5cbiAgICAgICAgICAgIDwvbGk+XG4gICAgICAgICA8L3VsPlxuICAqIFxuICAqIERvY3MgYXQgVGVycmFmb3JtIFJlZ2lzdHJ5OiB7QGxpbmsgaHR0cHM6Ly93d3cudGVycmFmb3JtLmlvL2RvY3MvcHJvdmlkZXJzL2F3c2NjL3IvcXVpY2tzaWdodF90ZW1wbGF0ZS5odG1sI3ByaW5jaXBhbCBRdWlja3NpZ2h0VGVtcGxhdGUjcHJpbmNpcGFsfVxuICAqL1xuICByZWFkb25seSBwcmluY2lwYWw6IHN0cmluZztcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIHF1aWNrc2lnaHRUZW1wbGF0ZVBlcm1pc3Npb25zVG9UZXJyYWZvcm0oc3RydWN0PzogUXVpY2tzaWdodFRlbXBsYXRlUGVybWlzc2lvbnMpOiBhbnkge1xuICBpZiAoIWNka3RmLmNhbkluc3BlY3Qoc3RydWN0KSkgeyByZXR1cm4gc3RydWN0OyB9XG4gIHJldHVybiB7XG4gICAgYWN0aW9uczogY2RrdGYubGlzdE1hcHBlcihjZGt0Zi5zdHJpbmdUb1RlcnJhZm9ybSkoc3RydWN0IS5hY3Rpb25zKSxcbiAgICBwcmluY2lwYWw6IGNka3RmLnN0cmluZ1RvVGVycmFmb3JtKHN0cnVjdCEucHJpbmNpcGFsKSxcbiAgfVxufVxuXG5leHBvcnQgaW50ZXJmYWNlIFF1aWNrc2lnaHRUZW1wbGF0ZVNvdXJjZUVudGl0eVNvdXJjZUFuYWx5c2lzRGF0YVNldFJlZmVyZW5jZXMge1xuICAvKipcbiAgKiA8cD5EYXRhc2V0IEFtYXpvbiBSZXNvdXJjZSBOYW1lIChBUk4pLjwvcD5cbiAgKiBcbiAgKiBEb2NzIGF0IFRlcnJhZm9ybSBSZWdpc3RyeToge0BsaW5rIGh0dHBzOi8vd3d3LnRlcnJhZm9ybS5pby9kb2NzL3Byb3ZpZGVycy9hd3NjYy9yL3F1aWNrc2lnaHRfdGVtcGxhdGUuaHRtbCNkYXRhX3NldF9hcm4gUXVpY2tzaWdodFRlbXBsYXRlI2RhdGFfc2V0X2Fybn1cbiAgKi9cbiAgcmVhZG9ubHkgZGF0YVNldEFybjogc3RyaW5nO1xuICAvKipcbiAgKiA8cD5EYXRhc2V0IHBsYWNlaG9sZGVyLjwvcD5cbiAgKiBcbiAgKiBEb2NzIGF0IFRlcnJhZm9ybSBSZWdpc3RyeToge0BsaW5rIGh0dHBzOi8vd3d3LnRlcnJhZm9ybS5pby9kb2NzL3Byb3ZpZGVycy9hd3NjYy9yL3F1aWNrc2lnaHRfdGVtcGxhdGUuaHRtbCNkYXRhX3NldF9wbGFjZWhvbGRlciBRdWlja3NpZ2h0VGVtcGxhdGUjZGF0YV9zZXRfcGxhY2Vob2xkZXJ9XG4gICovXG4gIHJlYWRvbmx5IGRhdGFTZXRQbGFjZWhvbGRlcjogc3RyaW5nO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gcXVpY2tzaWdodFRlbXBsYXRlU291cmNlRW50aXR5U291cmNlQW5hbHlzaXNEYXRhU2V0UmVmZXJlbmNlc1RvVGVycmFmb3JtKHN0cnVjdD86IFF1aWNrc2lnaHRUZW1wbGF0ZVNvdXJjZUVudGl0eVNvdXJjZUFuYWx5c2lzRGF0YVNldFJlZmVyZW5jZXMpOiBhbnkge1xuICBpZiAoIWNka3RmLmNhbkluc3BlY3Qoc3RydWN0KSkgeyByZXR1cm4gc3RydWN0OyB9XG4gIHJldHVybiB7XG4gICAgZGF0YV9zZXRfYXJuOiBjZGt0Zi5zdHJpbmdUb1RlcnJhZm9ybShzdHJ1Y3QhLmRhdGFTZXRBcm4pLFxuICAgIGRhdGFfc2V0X3BsYWNlaG9sZGVyOiBjZGt0Zi5zdHJpbmdUb1RlcnJhZm9ybShzdHJ1Y3QhLmRhdGFTZXRQbGFjZWhvbGRlciksXG4gIH1cbn1cblxuZXhwb3J0IGludGVyZmFjZSBRdWlja3NpZ2h0VGVtcGxhdGVTb3VyY2VFbnRpdHlTb3VyY2VBbmFseXNpcyB7XG4gIC8qKlxuICAqIDxwPlRoZSBBbWF6b24gUmVzb3VyY2UgTmFtZSAoQVJOKSBvZiB0aGUgcmVzb3VyY2UuPC9wPlxuICAqIFxuICAqIERvY3MgYXQgVGVycmFmb3JtIFJlZ2lzdHJ5OiB7QGxpbmsgaHR0cHM6Ly93d3cudGVycmFmb3JtLmlvL2RvY3MvcHJvdmlkZXJzL2F3c2NjL3IvcXVpY2tzaWdodF90ZW1wbGF0ZS5odG1sI2FybiBRdWlja3NpZ2h0VGVtcGxhdGUjYXJufVxuICAqL1xuICByZWFkb25seSBhcm46IHN0cmluZztcbiAgLyoqXG4gICogPHA+QSBzdHJ1Y3R1cmUgY29udGFpbmluZyBpbmZvcm1hdGlvbiBhYm91dCB0aGUgZGF0YXNldCByZWZlcmVuY2VzIHVzZWQgYXMgcGxhY2Vob2xkZXJzXG4gICAgICAgICAgICBpbiB0aGUgdGVtcGxhdGUuPC9wPlxuICAqIFxuICAqIERvY3MgYXQgVGVycmFmb3JtIFJlZ2lzdHJ5OiB7QGxpbmsgaHR0cHM6Ly93d3cudGVycmFmb3JtLmlvL2RvY3MvcHJvdmlkZXJzL2F3c2NjL3IvcXVpY2tzaWdodF90ZW1wbGF0ZS5odG1sI2RhdGFfc2V0X3JlZmVyZW5jZXMgUXVpY2tzaWdodFRlbXBsYXRlI2RhdGFfc2V0X3JlZmVyZW5jZXN9XG4gICovXG4gIHJlYWRvbmx5IGRhdGFTZXRSZWZlcmVuY2VzOiBRdWlja3NpZ2h0VGVtcGxhdGVTb3VyY2VFbnRpdHlTb3VyY2VBbmFseXNpc0RhdGFTZXRSZWZlcmVuY2VzW107XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBxdWlja3NpZ2h0VGVtcGxhdGVTb3VyY2VFbnRpdHlTb3VyY2VBbmFseXNpc1RvVGVycmFmb3JtKHN0cnVjdD86IFF1aWNrc2lnaHRUZW1wbGF0ZVNvdXJjZUVudGl0eVNvdXJjZUFuYWx5c2lzKTogYW55IHtcbiAgaWYgKCFjZGt0Zi5jYW5JbnNwZWN0KHN0cnVjdCkpIHsgcmV0dXJuIHN0cnVjdDsgfVxuICByZXR1cm4ge1xuICAgIGFybjogY2RrdGYuc3RyaW5nVG9UZXJyYWZvcm0oc3RydWN0IS5hcm4pLFxuICAgIGRhdGFfc2V0X3JlZmVyZW5jZXM6IGNka3RmLmxpc3RNYXBwZXIocXVpY2tzaWdodFRlbXBsYXRlU291cmNlRW50aXR5U291cmNlQW5hbHlzaXNEYXRhU2V0UmVmZXJlbmNlc1RvVGVycmFmb3JtKShzdHJ1Y3QhLmRhdGFTZXRSZWZlcmVuY2VzKSxcbiAgfVxufVxuXG5leHBvcnQgaW50ZXJmYWNlIFF1aWNrc2lnaHRUZW1wbGF0ZVNvdXJjZUVudGl0eVNvdXJjZVRlbXBsYXRlIHtcbiAgLyoqXG4gICogPHA+VGhlIEFtYXpvbiBSZXNvdXJjZSBOYW1lIChBUk4pIG9mIHRoZSByZXNvdXJjZS48L3A+XG4gICogXG4gICogRG9jcyBhdCBUZXJyYWZvcm0gUmVnaXN0cnk6IHtAbGluayBodHRwczovL3d3dy50ZXJyYWZvcm0uaW8vZG9jcy9wcm92aWRlcnMvYXdzY2Mvci9xdWlja3NpZ2h0X3RlbXBsYXRlLmh0bWwjYXJuIFF1aWNrc2lnaHRUZW1wbGF0ZSNhcm59XG4gICovXG4gIHJlYWRvbmx5IGFybjogc3RyaW5nO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gcXVpY2tzaWdodFRlbXBsYXRlU291cmNlRW50aXR5U291cmNlVGVtcGxhdGVUb1RlcnJhZm9ybShzdHJ1Y3Q/OiBRdWlja3NpZ2h0VGVtcGxhdGVTb3VyY2VFbnRpdHlTb3VyY2VUZW1wbGF0ZSk6IGFueSB7XG4gIGlmICghY2RrdGYuY2FuSW5zcGVjdChzdHJ1Y3QpKSB7IHJldHVybiBzdHJ1Y3Q7IH1cbiAgcmV0dXJuIHtcbiAgICBhcm46IGNka3RmLnN0cmluZ1RvVGVycmFmb3JtKHN0cnVjdCEuYXJuKSxcbiAgfVxufVxuXG5leHBvcnQgaW50ZXJmYWNlIFF1aWNrc2lnaHRUZW1wbGF0ZVNvdXJjZUVudGl0eSB7XG4gIC8qKlxuICAqIDxwPlRoZSBzb3VyY2UgYW5hbHlzaXMgb2YgdGhlIHRlbXBsYXRlLjwvcD5cbiAgKiBcbiAgKiBEb2NzIGF0IFRlcnJhZm9ybSBSZWdpc3RyeToge0BsaW5rIGh0dHBzOi8vd3d3LnRlcnJhZm9ybS5pby9kb2NzL3Byb3ZpZGVycy9hd3NjYy9yL3F1aWNrc2lnaHRfdGVtcGxhdGUuaHRtbCNzb3VyY2VfYW5hbHlzaXMgUXVpY2tzaWdodFRlbXBsYXRlI3NvdXJjZV9hbmFseXNpc31cbiAgKi9cbiAgcmVhZG9ubHkgc291cmNlQW5hbHlzaXM/OiBRdWlja3NpZ2h0VGVtcGxhdGVTb3VyY2VFbnRpdHlTb3VyY2VBbmFseXNpcztcbiAgLyoqXG4gICogPHA+VGhlIHNvdXJjZSB0ZW1wbGF0ZSBvZiB0aGUgdGVtcGxhdGUuPC9wPlxuICAqIFxuICAqIERvY3MgYXQgVGVycmFmb3JtIFJlZ2lzdHJ5OiB7QGxpbmsgaHR0cHM6Ly93d3cudGVycmFmb3JtLmlvL2RvY3MvcHJvdmlkZXJzL2F3c2NjL3IvcXVpY2tzaWdodF90ZW1wbGF0ZS5odG1sI3NvdXJjZV90ZW1wbGF0ZSBRdWlja3NpZ2h0VGVtcGxhdGUjc291cmNlX3RlbXBsYXRlfVxuICAqL1xuICByZWFkb25seSBzb3VyY2VUZW1wbGF0ZT86IFF1aWNrc2lnaHRUZW1wbGF0ZVNvdXJjZUVudGl0eVNvdXJjZVRlbXBsYXRlO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gcXVpY2tzaWdodFRlbXBsYXRlU291cmNlRW50aXR5VG9UZXJyYWZvcm0oc3RydWN0PzogUXVpY2tzaWdodFRlbXBsYXRlU291cmNlRW50aXR5KTogYW55IHtcbiAgaWYgKCFjZGt0Zi5jYW5JbnNwZWN0KHN0cnVjdCkpIHsgcmV0dXJuIHN0cnVjdDsgfVxuICByZXR1cm4ge1xuICAgIHNvdXJjZV9hbmFseXNpczogcXVpY2tzaWdodFRlbXBsYXRlU291cmNlRW50aXR5U291cmNlQW5hbHlzaXNUb1RlcnJhZm9ybShzdHJ1Y3QhLnNvdXJjZUFuYWx5c2lzKSxcbiAgICBzb3VyY2VfdGVtcGxhdGU6IHF1aWNrc2lnaHRUZW1wbGF0ZVNvdXJjZUVudGl0eVNvdXJjZVRlbXBsYXRlVG9UZXJyYWZvcm0oc3RydWN0IS5zb3VyY2VUZW1wbGF0ZSksXG4gIH1cbn1cblxuZXhwb3J0IGludGVyZmFjZSBRdWlja3NpZ2h0VGVtcGxhdGVUYWdzIHtcbiAgLyoqXG4gICogPHA+VGFnIGtleS48L3A+XG4gICogXG4gICogRG9jcyBhdCBUZXJyYWZvcm0gUmVnaXN0cnk6IHtAbGluayBodHRwczovL3d3dy50ZXJyYWZvcm0uaW8vZG9jcy9wcm92aWRlcnMvYXdzY2Mvci9xdWlja3NpZ2h0X3RlbXBsYXRlLmh0bWwja2V5IFF1aWNrc2lnaHRUZW1wbGF0ZSNrZXl9XG4gICovXG4gIHJlYWRvbmx5IGtleTogc3RyaW5nO1xuICAvKipcbiAgKiA8cD5UYWcgdmFsdWUuPC9wPlxuICAqIFxuICAqIERvY3MgYXQgVGVycmFmb3JtIFJlZ2lzdHJ5OiB7QGxpbmsgaHR0cHM6Ly93d3cudGVycmFmb3JtLmlvL2RvY3MvcHJvdmlkZXJzL2F3c2NjL3IvcXVpY2tzaWdodF90ZW1wbGF0ZS5odG1sI3ZhbHVlIFF1aWNrc2lnaHRUZW1wbGF0ZSN2YWx1ZX1cbiAgKi9cbiAgcmVhZG9ubHkgdmFsdWU6IHN0cmluZztcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIHF1aWNrc2lnaHRUZW1wbGF0ZVRhZ3NUb1RlcnJhZm9ybShzdHJ1Y3Q/OiBRdWlja3NpZ2h0VGVtcGxhdGVUYWdzKTogYW55IHtcbiAgaWYgKCFjZGt0Zi5jYW5JbnNwZWN0KHN0cnVjdCkpIHsgcmV0dXJuIHN0cnVjdDsgfVxuICByZXR1cm4ge1xuICAgIGtleTogY2RrdGYuc3RyaW5nVG9UZXJyYWZvcm0oc3RydWN0IS5rZXkpLFxuICAgIHZhbHVlOiBjZGt0Zi5zdHJpbmdUb1RlcnJhZm9ybShzdHJ1Y3QhLnZhbHVlKSxcbiAgfVxufVxuXG5leHBvcnQgaW50ZXJmYWNlIFF1aWNrc2lnaHRUZW1wbGF0ZVZlcnNpb25EYXRhU2V0Q29uZmlndXJhdGlvbnNDb2x1bW5Hcm91cFNjaGVtYUxpc3RDb2x1bW5Hcm91cENvbHVtblNjaGVtYUxpc3Qge1xuICAvKipcbiAgKiA8cD5UaGUgbmFtZSBvZiB0aGUgY29sdW1uIGdyb3VwJ3MgY29sdW1uIHNjaGVtYS48L3A+XG4gICogXG4gICogRG9jcyBhdCBUZXJyYWZvcm0gUmVnaXN0cnk6IHtAbGluayBodHRwczovL3d3dy50ZXJyYWZvcm0uaW8vZG9jcy9wcm92aWRlcnMvYXdzY2Mvci9xdWlja3NpZ2h0X3RlbXBsYXRlLmh0bWwjbmFtZSBRdWlja3NpZ2h0VGVtcGxhdGUjbmFtZX1cbiAgKi9cbiAgcmVhZG9ubHkgbmFtZT86IHN0cmluZztcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIHF1aWNrc2lnaHRUZW1wbGF0ZVZlcnNpb25EYXRhU2V0Q29uZmlndXJhdGlvbnNDb2x1bW5Hcm91cFNjaGVtYUxpc3RDb2x1bW5Hcm91cENvbHVtblNjaGVtYUxpc3RUb1RlcnJhZm9ybShzdHJ1Y3Q/OiBRdWlja3NpZ2h0VGVtcGxhdGVWZXJzaW9uRGF0YVNldENvbmZpZ3VyYXRpb25zQ29sdW1uR3JvdXBTY2hlbWFMaXN0Q29sdW1uR3JvdXBDb2x1bW5TY2hlbWFMaXN0KTogYW55IHtcbiAgaWYgKCFjZGt0Zi5jYW5JbnNwZWN0KHN0cnVjdCkpIHsgcmV0dXJuIHN0cnVjdDsgfVxuICByZXR1cm4ge1xuICAgIG5hbWU6IGNka3RmLnN0cmluZ1RvVGVycmFmb3JtKHN0cnVjdCEubmFtZSksXG4gIH1cbn1cblxuZXhwb3J0IGludGVyZmFjZSBRdWlja3NpZ2h0VGVtcGxhdGVWZXJzaW9uRGF0YVNldENvbmZpZ3VyYXRpb25zQ29sdW1uR3JvdXBTY2hlbWFMaXN0IHtcbiAgLyoqXG4gICogPHA+QSBzdHJ1Y3R1cmUgY29udGFpbmluZyB0aGUgbGlzdCBvZiBzY2hlbWFzIGZvciBjb2x1bW4gZ3JvdXAgY29sdW1ucy48L3A+XG4gICogXG4gICogRG9jcyBhdCBUZXJyYWZvcm0gUmVnaXN0cnk6IHtAbGluayBodHRwczovL3d3dy50ZXJyYWZvcm0uaW8vZG9jcy9wcm92aWRlcnMvYXdzY2Mvci9xdWlja3NpZ2h0X3RlbXBsYXRlLmh0bWwjY29sdW1uX2dyb3VwX2NvbHVtbl9zY2hlbWFfbGlzdCBRdWlja3NpZ2h0VGVtcGxhdGUjY29sdW1uX2dyb3VwX2NvbHVtbl9zY2hlbWFfbGlzdH1cbiAgKi9cbiAgcmVhZG9ubHkgY29sdW1uR3JvdXBDb2x1bW5TY2hlbWFMaXN0PzogUXVpY2tzaWdodFRlbXBsYXRlVmVyc2lvbkRhdGFTZXRDb25maWd1cmF0aW9uc0NvbHVtbkdyb3VwU2NoZW1hTGlzdENvbHVtbkdyb3VwQ29sdW1uU2NoZW1hTGlzdFtdO1xuICAvKipcbiAgKiA8cD5UaGUgbmFtZSBvZiB0aGUgY29sdW1uIGdyb3VwIHNjaGVtYS48L3A+XG4gICogXG4gICogRG9jcyBhdCBUZXJyYWZvcm0gUmVnaXN0cnk6IHtAbGluayBodHRwczovL3d3dy50ZXJyYWZvcm0uaW8vZG9jcy9wcm92aWRlcnMvYXdzY2Mvci9xdWlja3NpZ2h0X3RlbXBsYXRlLmh0bWwjbmFtZSBRdWlja3NpZ2h0VGVtcGxhdGUjbmFtZX1cbiAgKi9cbiAgcmVhZG9ubHkgbmFtZT86IHN0cmluZztcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIHF1aWNrc2lnaHRUZW1wbGF0ZVZlcnNpb25EYXRhU2V0Q29uZmlndXJhdGlvbnNDb2x1bW5Hcm91cFNjaGVtYUxpc3RUb1RlcnJhZm9ybShzdHJ1Y3Q/OiBRdWlja3NpZ2h0VGVtcGxhdGVWZXJzaW9uRGF0YVNldENvbmZpZ3VyYXRpb25zQ29sdW1uR3JvdXBTY2hlbWFMaXN0KTogYW55IHtcbiAgaWYgKCFjZGt0Zi5jYW5JbnNwZWN0KHN0cnVjdCkpIHsgcmV0dXJuIHN0cnVjdDsgfVxuICByZXR1cm4ge1xuICAgIGNvbHVtbl9ncm91cF9jb2x1bW5fc2NoZW1hX2xpc3Q6IGNka3RmLmxpc3RNYXBwZXIocXVpY2tzaWdodFRlbXBsYXRlVmVyc2lvbkRhdGFTZXRDb25maWd1cmF0aW9uc0NvbHVtbkdyb3VwU2NoZW1hTGlzdENvbHVtbkdyb3VwQ29sdW1uU2NoZW1hTGlzdFRvVGVycmFmb3JtKShzdHJ1Y3QhLmNvbHVtbkdyb3VwQ29sdW1uU2NoZW1hTGlzdCksXG4gICAgbmFtZTogY2RrdGYuc3RyaW5nVG9UZXJyYWZvcm0oc3RydWN0IS5uYW1lKSxcbiAgfVxufVxuXG5leHBvcnQgaW50ZXJmYWNlIFF1aWNrc2lnaHRUZW1wbGF0ZVZlcnNpb25EYXRhU2V0Q29uZmlndXJhdGlvbnNEYXRhU2V0U2NoZW1hQ29sdW1uU2NoZW1hTGlzdCB7XG4gIC8qKlxuICAqIDxwPlRoZSBkYXRhIHR5cGUgb2YgdGhlIGNvbHVtbiBzY2hlbWEuPC9wPlxuICAqIFxuICAqIERvY3MgYXQgVGVycmFmb3JtIFJlZ2lzdHJ5OiB7QGxpbmsgaHR0cHM6Ly93d3cudGVycmFmb3JtLmlvL2RvY3MvcHJvdmlkZXJzL2F3c2NjL3IvcXVpY2tzaWdodF90ZW1wbGF0ZS5odG1sI2RhdGFfdHlwZSBRdWlja3NpZ2h0VGVtcGxhdGUjZGF0YV90eXBlfVxuICAqL1xuICByZWFkb25seSBkYXRhVHlwZT86IHN0cmluZztcbiAgLyoqXG4gICogPHA+VGhlIGdlb2dyYXBoaWMgcm9sZSBvZiB0aGUgY29sdW1uIHNjaGVtYS48L3A+XG4gICogXG4gICogRG9jcyBhdCBUZXJyYWZvcm0gUmVnaXN0cnk6IHtAbGluayBodHRwczovL3d3dy50ZXJyYWZvcm0uaW8vZG9jcy9wcm92aWRlcnMvYXdzY2Mvci9xdWlja3NpZ2h0X3RlbXBsYXRlLmh0bWwjZ2VvZ3JhcGhpY19yb2xlIFF1aWNrc2lnaHRUZW1wbGF0ZSNnZW9ncmFwaGljX3JvbGV9XG4gICovXG4gIHJlYWRvbmx5IGdlb2dyYXBoaWNSb2xlPzogc3RyaW5nO1xuICAvKipcbiAgKiA8cD5UaGUgbmFtZSBvZiB0aGUgY29sdW1uIHNjaGVtYS48L3A+XG4gICogXG4gICogRG9jcyBhdCBUZXJyYWZvcm0gUmVnaXN0cnk6IHtAbGluayBodHRwczovL3d3dy50ZXJyYWZvcm0uaW8vZG9jcy9wcm92aWRlcnMvYXdzY2Mvci9xdWlja3NpZ2h0X3RlbXBsYXRlLmh0bWwjbmFtZSBRdWlja3NpZ2h0VGVtcGxhdGUjbmFtZX1cbiAgKi9cbiAgcmVhZG9ubHkgbmFtZT86IHN0cmluZztcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIHF1aWNrc2lnaHRUZW1wbGF0ZVZlcnNpb25EYXRhU2V0Q29uZmlndXJhdGlvbnNEYXRhU2V0U2NoZW1hQ29sdW1uU2NoZW1hTGlzdFRvVGVycmFmb3JtKHN0cnVjdD86IFF1aWNrc2lnaHRUZW1wbGF0ZVZlcnNpb25EYXRhU2V0Q29uZmlndXJhdGlvbnNEYXRhU2V0U2NoZW1hQ29sdW1uU2NoZW1hTGlzdCk6IGFueSB7XG4gIGlmICghY2RrdGYuY2FuSW5zcGVjdChzdHJ1Y3QpKSB7IHJldHVybiBzdHJ1Y3Q7IH1cbiAgcmV0dXJuIHtcbiAgICBkYXRhX3R5cGU6IGNka3RmLnN0cmluZ1RvVGVycmFmb3JtKHN0cnVjdCEuZGF0YVR5cGUpLFxuICAgIGdlb2dyYXBoaWNfcm9sZTogY2RrdGYuc3RyaW5nVG9UZXJyYWZvcm0oc3RydWN0IS5nZW9ncmFwaGljUm9sZSksXG4gICAgbmFtZTogY2RrdGYuc3RyaW5nVG9UZXJyYWZvcm0oc3RydWN0IS5uYW1lKSxcbiAgfVxufVxuXG5leHBvcnQgaW50ZXJmYWNlIFF1aWNrc2lnaHRUZW1wbGF0ZVZlcnNpb25EYXRhU2V0Q29uZmlndXJhdGlvbnNEYXRhU2V0U2NoZW1hIHtcbiAgLyoqXG4gICogPHA+QSBzdHJ1Y3R1cmUgY29udGFpbmluZyB0aGUgbGlzdCBvZiBjb2x1bW4gc2NoZW1hcy48L3A+XG4gICogXG4gICogRG9jcyBhdCBUZXJyYWZvcm0gUmVnaXN0cnk6IHtAbGluayBodHRwczovL3d3dy50ZXJyYWZvcm0uaW8vZG9jcy9wcm92aWRlcnMvYXdzY2Mvci9xdWlja3NpZ2h0X3RlbXBsYXRlLmh0bWwjY29sdW1uX3NjaGVtYV9saXN0IFF1aWNrc2lnaHRUZW1wbGF0ZSNjb2x1bW5fc2NoZW1hX2xpc3R9XG4gICovXG4gIHJlYWRvbmx5IGNvbHVtblNjaGVtYUxpc3Q/OiBRdWlja3NpZ2h0VGVtcGxhdGVWZXJzaW9uRGF0YVNldENvbmZpZ3VyYXRpb25zRGF0YVNldFNjaGVtYUNvbHVtblNjaGVtYUxpc3RbXTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIHF1aWNrc2lnaHRUZW1wbGF0ZVZlcnNpb25EYXRhU2V0Q29uZmlndXJhdGlvbnNEYXRhU2V0U2NoZW1hVG9UZXJyYWZvcm0oc3RydWN0PzogUXVpY2tzaWdodFRlbXBsYXRlVmVyc2lvbkRhdGFTZXRDb25maWd1cmF0aW9uc0RhdGFTZXRTY2hlbWEpOiBhbnkge1xuICBpZiAoIWNka3RmLmNhbkluc3BlY3Qoc3RydWN0KSkgeyByZXR1cm4gc3RydWN0OyB9XG4gIHJldHVybiB7XG4gICAgY29sdW1uX3NjaGVtYV9saXN0OiBjZGt0Zi5saXN0TWFwcGVyKHF1aWNrc2lnaHRUZW1wbGF0ZVZlcnNpb25EYXRhU2V0Q29uZmlndXJhdGlvbnNEYXRhU2V0U2NoZW1hQ29sdW1uU2NoZW1hTGlzdFRvVGVycmFmb3JtKShzdHJ1Y3QhLmNvbHVtblNjaGVtYUxpc3QpLFxuICB9XG59XG5cbmV4cG9ydCBpbnRlcmZhY2UgUXVpY2tzaWdodFRlbXBsYXRlVmVyc2lvbkRhdGFTZXRDb25maWd1cmF0aW9ucyB7XG4gIC8qKlxuICAqIDxwPkEgc3RydWN0dXJlIGNvbnRhaW5pbmcgdGhlIGxpc3Qgb2YgY29sdW1uIGdyb3VwIHNjaGVtYXMuPC9wPlxuICAqIFxuICAqIERvY3MgYXQgVGVycmFmb3JtIFJlZ2lzdHJ5OiB7QGxpbmsgaHR0cHM6Ly93d3cudGVycmFmb3JtLmlvL2RvY3MvcHJvdmlkZXJzL2F3c2NjL3IvcXVpY2tzaWdodF90ZW1wbGF0ZS5odG1sI2NvbHVtbl9ncm91cF9zY2hlbWFfbGlzdCBRdWlja3NpZ2h0VGVtcGxhdGUjY29sdW1uX2dyb3VwX3NjaGVtYV9saXN0fVxuICAqL1xuICByZWFkb25seSBjb2x1bW5Hcm91cFNjaGVtYUxpc3Q/OiBRdWlja3NpZ2h0VGVtcGxhdGVWZXJzaW9uRGF0YVNldENvbmZpZ3VyYXRpb25zQ29sdW1uR3JvdXBTY2hlbWFMaXN0W107XG4gIC8qKlxuICAqIDxwPkRhdGFzZXQgc2NoZW1hLjwvcD5cbiAgKiBcbiAgKiBEb2NzIGF0IFRlcnJhZm9ybSBSZWdpc3RyeToge0BsaW5rIGh0dHBzOi8vd3d3LnRlcnJhZm9ybS5pby9kb2NzL3Byb3ZpZGVycy9hd3NjYy9yL3F1aWNrc2lnaHRfdGVtcGxhdGUuaHRtbCNkYXRhX3NldF9zY2hlbWEgUXVpY2tzaWdodFRlbXBsYXRlI2RhdGFfc2V0X3NjaGVtYX1cbiAgKi9cbiAgcmVhZG9ubHkgZGF0YVNldFNjaGVtYT86IFF1aWNrc2lnaHRUZW1wbGF0ZVZlcnNpb25EYXRhU2V0Q29uZmlndXJhdGlvbnNEYXRhU2V0U2NoZW1hO1xuICAvKipcbiAgKiA8cD5QbGFjZWhvbGRlci48L3A+XG4gICogXG4gICogRG9jcyBhdCBUZXJyYWZvcm0gUmVnaXN0cnk6IHtAbGluayBodHRwczovL3d3dy50ZXJyYWZvcm0uaW8vZG9jcy9wcm92aWRlcnMvYXdzY2Mvci9xdWlja3NpZ2h0X3RlbXBsYXRlLmh0bWwjcGxhY2Vob2xkZXIgUXVpY2tzaWdodFRlbXBsYXRlI3BsYWNlaG9sZGVyfVxuICAqL1xuICByZWFkb25seSBwbGFjZWhvbGRlcj86IHN0cmluZztcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIHF1aWNrc2lnaHRUZW1wbGF0ZVZlcnNpb25EYXRhU2V0Q29uZmlndXJhdGlvbnNUb1RlcnJhZm9ybShzdHJ1Y3Q/OiBRdWlja3NpZ2h0VGVtcGxhdGVWZXJzaW9uRGF0YVNldENvbmZpZ3VyYXRpb25zKTogYW55IHtcbiAgaWYgKCFjZGt0Zi5jYW5JbnNwZWN0KHN0cnVjdCkpIHsgcmV0dXJuIHN0cnVjdDsgfVxuICByZXR1cm4ge1xuICAgIGNvbHVtbl9ncm91cF9zY2hlbWFfbGlzdDogY2RrdGYubGlzdE1hcHBlcihxdWlja3NpZ2h0VGVtcGxhdGVWZXJzaW9uRGF0YVNldENvbmZpZ3VyYXRpb25zQ29sdW1uR3JvdXBTY2hlbWFMaXN0VG9UZXJyYWZvcm0pKHN0cnVjdCEuY29sdW1uR3JvdXBTY2hlbWFMaXN0KSxcbiAgICBkYXRhX3NldF9zY2hlbWE6IHF1aWNrc2lnaHRUZW1wbGF0ZVZlcnNpb25EYXRhU2V0Q29uZmlndXJhdGlvbnNEYXRhU2V0U2NoZW1hVG9UZXJyYWZvcm0oc3RydWN0IS5kYXRhU2V0U2NoZW1hKSxcbiAgICBwbGFjZWhvbGRlcjogY2RrdGYuc3RyaW5nVG9UZXJyYWZvcm0oc3RydWN0IS5wbGFjZWhvbGRlciksXG4gIH1cbn1cblxuZXhwb3J0IGludGVyZmFjZSBRdWlja3NpZ2h0VGVtcGxhdGVWZXJzaW9uRXJyb3JzIHtcbiAgLyoqXG4gICogPHA+RGVzY3JpcHRpb24gb2YgdGhlIGVycm9yIHR5cGUuPC9wPlxuICAqIFxuICAqIERvY3MgYXQgVGVycmFmb3JtIFJlZ2lzdHJ5OiB7QGxpbmsgaHR0cHM6Ly93d3cudGVycmFmb3JtLmlvL2RvY3MvcHJvdmlkZXJzL2F3c2NjL3IvcXVpY2tzaWdodF90ZW1wbGF0ZS5odG1sI21lc3NhZ2UgUXVpY2tzaWdodFRlbXBsYXRlI21lc3NhZ2V9XG4gICovXG4gIHJlYWRvbmx5IG1lc3NhZ2U/OiBzdHJpbmc7XG4gIC8qKlxuICAqIERvY3MgYXQgVGVycmFmb3JtIFJlZ2lzdHJ5OiB7QGxpbmsgaHR0cHM6Ly93d3cudGVycmFmb3JtLmlvL2RvY3MvcHJvdmlkZXJzL2F3c2NjL3IvcXVpY2tzaWdodF90ZW1wbGF0ZS5odG1sI3R5cGUgUXVpY2tzaWdodFRlbXBsYXRlI3R5cGV9XG4gICovXG4gIHJlYWRvbmx5IHR5cGU/OiBzdHJpbmc7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBxdWlja3NpZ2h0VGVtcGxhdGVWZXJzaW9uRXJyb3JzVG9UZXJyYWZvcm0oc3RydWN0PzogUXVpY2tzaWdodFRlbXBsYXRlVmVyc2lvbkVycm9ycyk6IGFueSB7XG4gIGlmICghY2RrdGYuY2FuSW5zcGVjdChzdHJ1Y3QpKSB7IHJldHVybiBzdHJ1Y3Q7IH1cbiAgcmV0dXJuIHtcbiAgICBtZXNzYWdlOiBjZGt0Zi5zdHJpbmdUb1RlcnJhZm9ybShzdHJ1Y3QhLm1lc3NhZ2UpLFxuICAgIHR5cGU6IGNka3RmLnN0cmluZ1RvVGVycmFmb3JtKHN0cnVjdCEudHlwZSksXG4gIH1cbn1cblxuZXhwb3J0IGludGVyZmFjZSBRdWlja3NpZ2h0VGVtcGxhdGVWZXJzaW9uU2hlZXRzIHtcbiAgLyoqXG4gICogPHA+VGhlIG5hbWUgb2YgYSBzaGVldC4gVGhpcyBuYW1lIGlzIGRpc3BsYXllZCBvbiB0aGUgc2hlZXQncyB0YWIgaW4gdGhlIFF1aWNrU2lnaHRcbiAgICAgICAgICAgIGNvbnNvbGUuPC9wPlxuICAqIFxuICAqIERvY3MgYXQgVGVycmFmb3JtIFJlZ2lzdHJ5OiB7QGxpbmsgaHR0cHM6Ly93d3cudGVycmFmb3JtLmlvL2RvY3MvcHJvdmlkZXJzL2F3c2NjL3IvcXVpY2tzaWdodF90ZW1wbGF0ZS5odG1sI25hbWUgUXVpY2tzaWdodFRlbXBsYXRlI25hbWV9XG4gICovXG4gIHJlYWRvbmx5IG5hbWU/OiBzdHJpbmc7XG4gIC8qKlxuICAqIDxwPlRoZSB1bmlxdWUgaWRlbnRpZmllciBhc3NvY2lhdGVkIHdpdGggYSBzaGVldC48L3A+XG4gICogXG4gICogRG9jcyBhdCBUZXJyYWZvcm0gUmVnaXN0cnk6IHtAbGluayBodHRwczovL3d3dy50ZXJyYWZvcm0uaW8vZG9jcy9wcm92aWRlcnMvYXdzY2Mvci9xdWlja3NpZ2h0X3RlbXBsYXRlLmh0bWwjc2hlZXRfaWQgUXVpY2tzaWdodFRlbXBsYXRlI3NoZWV0X2lkfVxuICAqL1xuICByZWFkb25seSBzaGVldElkPzogc3RyaW5nO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gcXVpY2tzaWdodFRlbXBsYXRlVmVyc2lvblNoZWV0c1RvVGVycmFmb3JtKHN0cnVjdD86IFF1aWNrc2lnaHRUZW1wbGF0ZVZlcnNpb25TaGVldHMpOiBhbnkge1xuICBpZiAoIWNka3RmLmNhbkluc3BlY3Qoc3RydWN0KSkgeyByZXR1cm4gc3RydWN0OyB9XG4gIHJldHVybiB7XG4gICAgbmFtZTogY2RrdGYuc3RyaW5nVG9UZXJyYWZvcm0oc3RydWN0IS5uYW1lKSxcbiAgICBzaGVldF9pZDogY2RrdGYuc3RyaW5nVG9UZXJyYWZvcm0oc3RydWN0IS5zaGVldElkKSxcbiAgfVxufVxuXG5leHBvcnQgY2xhc3MgUXVpY2tzaWdodFRlbXBsYXRlVmVyc2lvbiBleHRlbmRzIGNka3RmLkNvbXBsZXhDb21wdXRlZExpc3Qge1xuXG4gIC8vIGNyZWF0ZWRfdGltZSAtIGNvbXB1dGVkOiB0cnVlLCBvcHRpb25hbDogdHJ1ZSwgcmVxdWlyZWQ6IGZhbHNlXG4gIHByaXZhdGUgX2NyZWF0ZWRUaW1lPzogc3RyaW5nO1xuICBwdWJsaWMgZ2V0IGNyZWF0ZWRUaW1lKCkge1xuICAgIHJldHVybiB0aGlzLmdldFN0cmluZ0F0dHJpYnV0ZSgnY3JlYXRlZF90aW1lJyk7XG4gIH1cbiAgcHVibGljIHNldCBjcmVhdGVkVGltZSh2YWx1ZTogc3RyaW5nKSB7XG4gICAgdGhpcy5fY3JlYXRlZFRpbWUgPSB2YWx1ZTtcbiAgfVxuICBwdWJsaWMgcmVzZXRDcmVhdGVkVGltZSgpIHtcbiAgICB0aGlzLl9jcmVhdGVkVGltZSA9IHVuZGVmaW5lZDtcbiAgfVxuICAvLyBUZW1wb3JhcmlseSBleHBvc2UgaW5wdXQgdmFsdWUuIFVzZSB3aXRoIGNhdXRpb24uXG4gIHB1YmxpYyBnZXQgY3JlYXRlZFRpbWVJbnB1dCgpIHtcbiAgICByZXR1cm4gdGhpcy5fY3JlYXRlZFRpbWVcbiAgfVxuXG4gIC8vIGRhdGFfc2V0X2NvbmZpZ3VyYXRpb25zIC0gY29tcHV0ZWQ6IHRydWUsIG9wdGlvbmFsOiB0cnVlLCByZXF1aXJlZDogZmFsc2VcbiAgcHJpdmF0ZSBfZGF0YVNldENvbmZpZ3VyYXRpb25zPzogUXVpY2tzaWdodFRlbXBsYXRlVmVyc2lvbkRhdGFTZXRDb25maWd1cmF0aW9uc1tdO1xuICBwdWJsaWMgZ2V0IGRhdGFTZXRDb25maWd1cmF0aW9ucygpIHtcbiAgICByZXR1cm4gdGhpcy5pbnRlcnBvbGF0aW9uRm9yQXR0cmlidXRlKCdkYXRhX3NldF9jb25maWd1cmF0aW9ucycpIGFzIGFueTtcbiAgfVxuICBwdWJsaWMgc2V0IGRhdGFTZXRDb25maWd1cmF0aW9ucyh2YWx1ZTogUXVpY2tzaWdodFRlbXBsYXRlVmVyc2lvbkRhdGFTZXRDb25maWd1cmF0aW9uc1tdKSB7XG4gICAgdGhpcy5fZGF0YVNldENvbmZpZ3VyYXRpb25zID0gdmFsdWU7XG4gIH1cbiAgcHVibGljIHJlc2V0RGF0YVNldENvbmZpZ3VyYXRpb25zKCkge1xuICAgIHRoaXMuX2RhdGFTZXRDb25maWd1cmF0aW9ucyA9IHVuZGVmaW5lZDtcbiAgfVxuICAvLyBUZW1wb3JhcmlseSBleHBvc2UgaW5wdXQgdmFsdWUuIFVzZSB3aXRoIGNhdXRpb24uXG4gIHB1YmxpYyBnZXQgZGF0YVNldENvbmZpZ3VyYXRpb25zSW5wdXQoKSB7XG4gICAgcmV0dXJuIHRoaXMuX2RhdGFTZXRDb25maWd1cmF0aW9uc1xuICB9XG5cbiAgLy8gZGVzY3JpcHRpb24gLSBjb21wdXRlZDogdHJ1ZSwgb3B0aW9uYWw6IHRydWUsIHJlcXVpcmVkOiBmYWxzZVxuICBwcml2YXRlIF9kZXNjcmlwdGlvbj86IHN0cmluZztcbiAgcHVibGljIGdldCBkZXNjcmlwdGlvbigpIHtcbiAgICByZXR1cm4gdGhpcy5nZXRTdHJpbmdBdHRyaWJ1dGUoJ2Rlc2NyaXB0aW9uJyk7XG4gIH1cbiAgcHVibGljIHNldCBkZXNjcmlwdGlvbih2YWx1ZTogc3RyaW5nKSB7XG4gICAgdGhpcy5fZGVzY3JpcHRpb24gPSB2YWx1ZTtcbiAgfVxuICBwdWJsaWMgcmVzZXREZXNjcmlwdGlvbigpIHtcbiAgICB0aGlzLl9kZXNjcmlwdGlvbiA9IHVuZGVmaW5lZDtcbiAgfVxuICAvLyBUZW1wb3JhcmlseSBleHBvc2UgaW5wdXQgdmFsdWUuIFVzZSB3aXRoIGNhdXRpb24uXG4gIHB1YmxpYyBnZXQgZGVzY3JpcHRpb25JbnB1dCgpIHtcbiAgICByZXR1cm4gdGhpcy5fZGVzY3JpcHRpb25cbiAgfVxuXG4gIC8vIGVycm9ycyAtIGNvbXB1dGVkOiB0cnVlLCBvcHRpb25hbDogdHJ1ZSwgcmVxdWlyZWQ6IGZhbHNlXG4gIHByaXZhdGUgX2Vycm9ycz86IFF1aWNrc2lnaHRUZW1wbGF0ZVZlcnNpb25FcnJvcnNbXTtcbiAgcHVibGljIGdldCBlcnJvcnMoKSB7XG4gICAgcmV0dXJuIHRoaXMuaW50ZXJwb2xhdGlvbkZvckF0dHJpYnV0ZSgnZXJyb3JzJykgYXMgYW55O1xuICB9XG4gIHB1YmxpYyBzZXQgZXJyb3JzKHZhbHVlOiBRdWlja3NpZ2h0VGVtcGxhdGVWZXJzaW9uRXJyb3JzW10pIHtcbiAgICB0aGlzLl9lcnJvcnMgPSB2YWx1ZTtcbiAgfVxuICBwdWJsaWMgcmVzZXRFcnJvcnMoKSB7XG4gICAgdGhpcy5fZXJyb3JzID0gdW5kZWZpbmVkO1xuICB9XG4gIC8vIFRlbXBvcmFyaWx5IGV4cG9zZSBpbnB1dCB2YWx1ZS4gVXNlIHdpdGggY2F1dGlvbi5cbiAgcHVibGljIGdldCBlcnJvcnNJbnB1dCgpIHtcbiAgICByZXR1cm4gdGhpcy5fZXJyb3JzXG4gIH1cblxuICAvLyBzaGVldHMgLSBjb21wdXRlZDogdHJ1ZSwgb3B0aW9uYWw6IHRydWUsIHJlcXVpcmVkOiBmYWxzZVxuICBwcml2YXRlIF9zaGVldHM/OiBRdWlja3NpZ2h0VGVtcGxhdGVWZXJzaW9uU2hlZXRzW107XG4gIHB1YmxpYyBnZXQgc2hlZXRzKCkge1xuICAgIHJldHVybiB0aGlzLmludGVycG9sYXRpb25Gb3JBdHRyaWJ1dGUoJ3NoZWV0cycpIGFzIGFueTtcbiAgfVxuICBwdWJsaWMgc2V0IHNoZWV0cyh2YWx1ZTogUXVpY2tzaWdodFRlbXBsYXRlVmVyc2lvblNoZWV0c1tdKSB7XG4gICAgdGhpcy5fc2hlZXRzID0gdmFsdWU7XG4gIH1cbiAgcHVibGljIHJlc2V0U2hlZXRzKCkge1xuICAgIHRoaXMuX3NoZWV0cyA9IHVuZGVmaW5lZDtcbiAgfVxuICAvLyBUZW1wb3JhcmlseSBleHBvc2UgaW5wdXQgdmFsdWUuIFVzZSB3aXRoIGNhdXRpb24uXG4gIHB1YmxpYyBnZXQgc2hlZXRzSW5wdXQoKSB7XG4gICAgcmV0dXJuIHRoaXMuX3NoZWV0c1xuICB9XG5cbiAgLy8gc291cmNlX2VudGl0eV9hcm4gLSBjb21wdXRlZDogdHJ1ZSwgb3B0aW9uYWw6IHRydWUsIHJlcXVpcmVkOiBmYWxzZVxuICBwcml2YXRlIF9zb3VyY2VFbnRpdHlBcm4/OiBzdHJpbmc7XG4gIHB1YmxpYyBnZXQgc291cmNlRW50aXR5QXJuKCkge1xuICAgIHJldHVybiB0aGlzLmdldFN0cmluZ0F0dHJpYnV0ZSgnc291cmNlX2VudGl0eV9hcm4nKTtcbiAgfVxuICBwdWJsaWMgc2V0IHNvdXJjZUVudGl0eUFybih2YWx1ZTogc3RyaW5nKSB7XG4gICAgdGhpcy5fc291cmNlRW50aXR5QXJuID0gdmFsdWU7XG4gIH1cbiAgcHVibGljIHJlc2V0U291cmNlRW50aXR5QXJuKCkge1xuICAgIHRoaXMuX3NvdXJjZUVudGl0eUFybiA9IHVuZGVmaW5lZDtcbiAgfVxuICAvLyBUZW1wb3JhcmlseSBleHBvc2UgaW5wdXQgdmFsdWUuIFVzZSB3aXRoIGNhdXRpb24uXG4gIHB1YmxpYyBnZXQgc291cmNlRW50aXR5QXJuSW5wdXQoKSB7XG4gICAgcmV0dXJuIHRoaXMuX3NvdXJjZUVudGl0eUFyblxuICB9XG5cbiAgLy8gc3RhdHVzIC0gY29tcHV0ZWQ6IHRydWUsIG9wdGlvbmFsOiB0cnVlLCByZXF1aXJlZDogZmFsc2VcbiAgcHJpdmF0ZSBfc3RhdHVzPzogc3RyaW5nO1xuICBwdWJsaWMgZ2V0IHN0YXR1cygpIHtcbiAgICByZXR1cm4gdGhpcy5nZXRTdHJpbmdBdHRyaWJ1dGUoJ3N0YXR1cycpO1xuICB9XG4gIHB1YmxpYyBzZXQgc3RhdHVzKHZhbHVlOiBzdHJpbmcpIHtcbiAgICB0aGlzLl9zdGF0dXMgPSB2YWx1ZTtcbiAgfVxuICBwdWJsaWMgcmVzZXRTdGF0dXMoKSB7XG4gICAgdGhpcy5fc3RhdHVzID0gdW5kZWZpbmVkO1xuICB9XG4gIC8vIFRlbXBvcmFyaWx5IGV4cG9zZSBpbnB1dCB2YWx1ZS4gVXNlIHdpdGggY2F1dGlvbi5cbiAgcHVibGljIGdldCBzdGF0dXNJbnB1dCgpIHtcbiAgICByZXR1cm4gdGhpcy5fc3RhdHVzXG4gIH1cblxuICAvLyB0aGVtZV9hcm4gLSBjb21wdXRlZDogdHJ1ZSwgb3B0aW9uYWw6IHRydWUsIHJlcXVpcmVkOiBmYWxzZVxuICBwcml2YXRlIF90aGVtZUFybj86IHN0cmluZztcbiAgcHVibGljIGdldCB0aGVtZUFybigpIHtcbiAgICByZXR1cm4gdGhpcy5nZXRTdHJpbmdBdHRyaWJ1dGUoJ3RoZW1lX2FybicpO1xuICB9XG4gIHB1YmxpYyBzZXQgdGhlbWVBcm4odmFsdWU6IHN0cmluZykge1xuICAgIHRoaXMuX3RoZW1lQXJuID0gdmFsdWU7XG4gIH1cbiAgcHVibGljIHJlc2V0VGhlbWVBcm4oKSB7XG4gICAgdGhpcy5fdGhlbWVBcm4gPSB1bmRlZmluZWQ7XG4gIH1cbiAgLy8gVGVtcG9yYXJpbHkgZXhwb3NlIGlucHV0IHZhbHVlLiBVc2Ugd2l0aCBjYXV0aW9uLlxuICBwdWJsaWMgZ2V0IHRoZW1lQXJuSW5wdXQoKSB7XG4gICAgcmV0dXJuIHRoaXMuX3RoZW1lQXJuXG4gIH1cblxuICAvLyB2ZXJzaW9uX251bWJlciAtIGNvbXB1dGVkOiB0cnVlLCBvcHRpb25hbDogdHJ1ZSwgcmVxdWlyZWQ6IGZhbHNlXG4gIHByaXZhdGUgX3ZlcnNpb25OdW1iZXI/OiBudW1iZXI7XG4gIHB1YmxpYyBnZXQgdmVyc2lvbk51bWJlcigpIHtcbiAgICByZXR1cm4gdGhpcy5nZXROdW1iZXJBdHRyaWJ1dGUoJ3ZlcnNpb25fbnVtYmVyJyk7XG4gIH1cbiAgcHVibGljIHNldCB2ZXJzaW9uTnVtYmVyKHZhbHVlOiBudW1iZXIpIHtcbiAgICB0aGlzLl92ZXJzaW9uTnVtYmVyID0gdmFsdWU7XG4gIH1cbiAgcHVibGljIHJlc2V0VmVyc2lvbk51bWJlcigpIHtcbiAgICB0aGlzLl92ZXJzaW9uTnVtYmVyID0gdW5kZWZpbmVkO1xuICB9XG4gIC8vIFRlbXBvcmFyaWx5IGV4cG9zZSBpbnB1dCB2YWx1ZS4gVXNlIHdpdGggY2F1dGlvbi5cbiAgcHVibGljIGdldCB2ZXJzaW9uTnVtYmVySW5wdXQoKSB7XG4gICAgcmV0dXJuIHRoaXMuX3ZlcnNpb25OdW1iZXJcbiAgfVxufVxuXG5leHBvcnQgZnVuY3Rpb24gcXVpY2tzaWdodFRlbXBsYXRlVmVyc2lvblRvVGVycmFmb3JtKHN0cnVjdD86IFF1aWNrc2lnaHRUZW1wbGF0ZVZlcnNpb24pOiBhbnkge1xuICBpZiAoIWNka3RmLmNhbkluc3BlY3Qoc3RydWN0KSkgeyByZXR1cm4gc3RydWN0OyB9XG4gIHJldHVybiB7XG4gICAgY3JlYXRlZF90aW1lOiBjZGt0Zi5zdHJpbmdUb1RlcnJhZm9ybShzdHJ1Y3QhLmNyZWF0ZWRUaW1lKSxcbiAgICBkYXRhX3NldF9jb25maWd1cmF0aW9uczogY2RrdGYubGlzdE1hcHBlcihxdWlja3NpZ2h0VGVtcGxhdGVWZXJzaW9uRGF0YVNldENvbmZpZ3VyYXRpb25zVG9UZXJyYWZvcm0pKHN0cnVjdCEuZGF0YVNldENvbmZpZ3VyYXRpb25zKSxcbiAgICBkZXNjcmlwdGlvbjogY2RrdGYuc3RyaW5nVG9UZXJyYWZvcm0oc3RydWN0IS5kZXNjcmlwdGlvbiksXG4gICAgZXJyb3JzOiBjZGt0Zi5saXN0TWFwcGVyKHF1aWNrc2lnaHRUZW1wbGF0ZVZlcnNpb25FcnJvcnNUb1RlcnJhZm9ybSkoc3RydWN0IS5lcnJvcnMpLFxuICAgIHNoZWV0czogY2RrdGYubGlzdE1hcHBlcihxdWlja3NpZ2h0VGVtcGxhdGVWZXJzaW9uU2hlZXRzVG9UZXJyYWZvcm0pKHN0cnVjdCEuc2hlZXRzKSxcbiAgICBzb3VyY2VfZW50aXR5X2FybjogY2RrdGYuc3RyaW5nVG9UZXJyYWZvcm0oc3RydWN0IS5zb3VyY2VFbnRpdHlBcm4pLFxuICAgIHN0YXR1czogY2RrdGYuc3RyaW5nVG9UZXJyYWZvcm0oc3RydWN0IS5zdGF0dXMpLFxuICAgIHRoZW1lX2FybjogY2RrdGYuc3RyaW5nVG9UZXJyYWZvcm0oc3RydWN0IS50aGVtZUFybiksXG4gICAgdmVyc2lvbl9udW1iZXI6IGNka3RmLm51bWJlclRvVGVycmFmb3JtKHN0cnVjdCEudmVyc2lvbk51bWJlciksXG4gIH1cbn1cblxuXG4vKipcbiogUmVwcmVzZW50cyBhIHtAbGluayBodHRwczovL3d3dy50ZXJyYWZvcm0uaW8vZG9jcy9wcm92aWRlcnMvYXdzY2Mvci9xdWlja3NpZ2h0X3RlbXBsYXRlLmh0bWwgYXdzY2NfcXVpY2tzaWdodF90ZW1wbGF0ZX1cbiovXG5leHBvcnQgY2xhc3MgUXVpY2tzaWdodFRlbXBsYXRlIGV4dGVuZHMgY2RrdGYuVGVycmFmb3JtUmVzb3VyY2Uge1xuXG4gIC8vID09PT09PT09PT09PT09PT09XG4gIC8vIFNUQVRJQyBQUk9QRVJUSUVTXG4gIC8vID09PT09PT09PT09PT09PT09XG4gIHB1YmxpYyBzdGF0aWMgcmVhZG9ubHkgdGZSZXNvdXJjZVR5cGU6IHN0cmluZyA9IFwiYXdzY2NfcXVpY2tzaWdodF90ZW1wbGF0ZVwiO1xuXG4gIC8vID09PT09PT09PT09XG4gIC8vIElOSVRJQUxJWkVSXG4gIC8vID09PT09PT09PT09XG5cbiAgLyoqXG4gICogQ3JlYXRlIGEgbmV3IHtAbGluayBodHRwczovL3d3dy50ZXJyYWZvcm0uaW8vZG9jcy9wcm92aWRlcnMvYXdzY2Mvci9xdWlja3NpZ2h0X3RlbXBsYXRlLmh0bWwgYXdzY2NfcXVpY2tzaWdodF90ZW1wbGF0ZX0gUmVzb3VyY2VcbiAgKlxuICAqIEBwYXJhbSBzY29wZSBUaGUgc2NvcGUgaW4gd2hpY2ggdG8gZGVmaW5lIHRoaXMgY29uc3RydWN0XG4gICogQHBhcmFtIGlkIFRoZSBzY29wZWQgY29uc3RydWN0IElELiBNdXN0IGJlIHVuaXF1ZSBhbW9uZ3N0IHNpYmxpbmdzIGluIHRoZSBzYW1lIHNjb3BlXG4gICogQHBhcmFtIG9wdGlvbnMgUXVpY2tzaWdodFRlbXBsYXRlQ29uZmlnXG4gICovXG4gIHB1YmxpYyBjb25zdHJ1Y3RvcihzY29wZTogQ29uc3RydWN0LCBpZDogc3RyaW5nLCBjb25maWc6IFF1aWNrc2lnaHRUZW1wbGF0ZUNvbmZpZykge1xuICAgIHN1cGVyKHNjb3BlLCBpZCwge1xuICAgICAgdGVycmFmb3JtUmVzb3VyY2VUeXBlOiAnYXdzY2NfcXVpY2tzaWdodF90ZW1wbGF0ZScsXG4gICAgICB0ZXJyYWZvcm1HZW5lcmF0b3JNZXRhZGF0YToge1xuICAgICAgICBwcm92aWRlck5hbWU6ICdhd3NjYydcbiAgICAgIH0sXG4gICAgICBwcm92aWRlcjogY29uZmlnLnByb3ZpZGVyLFxuICAgICAgZGVwZW5kc09uOiBjb25maWcuZGVwZW5kc09uLFxuICAgICAgY291bnQ6IGNvbmZpZy5jb3VudCxcbiAgICAgIGxpZmVjeWNsZTogY29uZmlnLmxpZmVjeWNsZVxuICAgIH0pO1xuICAgIHRoaXMuX2F3c0FjY291bnRJZCA9IGNvbmZpZy5hd3NBY2NvdW50SWQ7XG4gICAgdGhpcy5fbmFtZSA9IGNvbmZpZy5uYW1lO1xuICAgIHRoaXMuX3Blcm1pc3Npb25zID0gY29uZmlnLnBlcm1pc3Npb25zO1xuICAgIHRoaXMuX3NvdXJjZUVudGl0eSA9IGNvbmZpZy5zb3VyY2VFbnRpdHk7XG4gICAgdGhpcy5fdGFncyA9IGNvbmZpZy50YWdzO1xuICAgIHRoaXMuX3RlbXBsYXRlSWQgPSBjb25maWcudGVtcGxhdGVJZDtcbiAgICB0aGlzLl92ZXJzaW9uRGVzY3JpcHRpb24gPSBjb25maWcudmVyc2lvbkRlc2NyaXB0aW9uO1xuICB9XG5cbiAgLy8gPT09PT09PT09PVxuICAvLyBBVFRSSUJVVEVTXG4gIC8vID09PT09PT09PT1cblxuICAvLyBhcm4gLSBjb21wdXRlZDogdHJ1ZSwgb3B0aW9uYWw6IGZhbHNlLCByZXF1aXJlZDogZmFsc2VcbiAgcHVibGljIGdldCBhcm4oKSB7XG4gICAgcmV0dXJuIHRoaXMuZ2V0U3RyaW5nQXR0cmlidXRlKCdhcm4nKTtcbiAgfVxuXG4gIC8vIGF3c19hY2NvdW50X2lkIC0gY29tcHV0ZWQ6IGZhbHNlLCBvcHRpb25hbDogZmFsc2UsIHJlcXVpcmVkOiB0cnVlXG4gIHByaXZhdGUgX2F3c0FjY291bnRJZDogc3RyaW5nO1xuICBwdWJsaWMgZ2V0IGF3c0FjY291bnRJZCgpIHtcbiAgICByZXR1cm4gdGhpcy5nZXRTdHJpbmdBdHRyaWJ1dGUoJ2F3c19hY2NvdW50X2lkJyk7XG4gIH1cbiAgcHVibGljIHNldCBhd3NBY2NvdW50SWQodmFsdWU6IHN0cmluZykge1xuICAgIHRoaXMuX2F3c0FjY291bnRJZCA9IHZhbHVlO1xuICB9XG4gIC8vIFRlbXBvcmFyaWx5IGV4cG9zZSBpbnB1dCB2YWx1ZS4gVXNlIHdpdGggY2F1dGlvbi5cbiAgcHVibGljIGdldCBhd3NBY2NvdW50SWRJbnB1dCgpIHtcbiAgICByZXR1cm4gdGhpcy5fYXdzQWNjb3VudElkXG4gIH1cblxuICAvLyBjcmVhdGVkX3RpbWUgLSBjb21wdXRlZDogdHJ1ZSwgb3B0aW9uYWw6IGZhbHNlLCByZXF1aXJlZDogZmFsc2VcbiAgcHVibGljIGdldCBjcmVhdGVkVGltZSgpIHtcbiAgICByZXR1cm4gdGhpcy5nZXRTdHJpbmdBdHRyaWJ1dGUoJ2NyZWF0ZWRfdGltZScpO1xuICB9XG5cbiAgLy8gaWQgLSBjb21wdXRlZDogdHJ1ZSwgb3B0aW9uYWw6IGZhbHNlLCByZXF1aXJlZDogZmFsc2VcbiAgcHVibGljIGdldCBpZCgpIHtcbiAgICByZXR1cm4gdGhpcy5nZXRTdHJpbmdBdHRyaWJ1dGUoJ2lkJyk7XG4gIH1cblxuICAvLyBsYXN0X3VwZGF0ZWRfdGltZSAtIGNvbXB1dGVkOiB0cnVlLCBvcHRpb25hbDogZmFsc2UsIHJlcXVpcmVkOiBmYWxzZVxuICBwdWJsaWMgZ2V0IGxhc3RVcGRhdGVkVGltZSgpIHtcbiAgICByZXR1cm4gdGhpcy5nZXRTdHJpbmdBdHRyaWJ1dGUoJ2xhc3RfdXBkYXRlZF90aW1lJyk7XG4gIH1cblxuICAvLyBuYW1lIC0gY29tcHV0ZWQ6IGZhbHNlLCBvcHRpb25hbDogdHJ1ZSwgcmVxdWlyZWQ6IGZhbHNlXG4gIHByaXZhdGUgX25hbWU/OiBzdHJpbmc7XG4gIHB1YmxpYyBnZXQgbmFtZSgpIHtcbiAgICByZXR1cm4gdGhpcy5nZXRTdHJpbmdBdHRyaWJ1dGUoJ25hbWUnKTtcbiAgfVxuICBwdWJsaWMgc2V0IG5hbWUodmFsdWU6IHN0cmluZyApIHtcbiAgICB0aGlzLl9uYW1lID0gdmFsdWU7XG4gIH1cbiAgcHVibGljIHJlc2V0TmFtZSgpIHtcbiAgICB0aGlzLl9uYW1lID0gdW5kZWZpbmVkO1xuICB9XG4gIC8vIFRlbXBvcmFyaWx5IGV4cG9zZSBpbnB1dCB2YWx1ZS4gVXNlIHdpdGggY2F1dGlvbi5cbiAgcHVibGljIGdldCBuYW1lSW5wdXQoKSB7XG4gICAgcmV0dXJuIHRoaXMuX25hbWVcbiAgfVxuXG4gIC8vIHBlcm1pc3Npb25zIC0gY29tcHV0ZWQ6IGZhbHNlLCBvcHRpb25hbDogdHJ1ZSwgcmVxdWlyZWQ6IGZhbHNlXG4gIHByaXZhdGUgX3Blcm1pc3Npb25zPzogUXVpY2tzaWdodFRlbXBsYXRlUGVybWlzc2lvbnNbXTtcbiAgcHVibGljIGdldCBwZXJtaXNzaW9ucygpIHtcbiAgICByZXR1cm4gdGhpcy5pbnRlcnBvbGF0aW9uRm9yQXR0cmlidXRlKCdwZXJtaXNzaW9ucycpIGFzIGFueTtcbiAgfVxuICBwdWJsaWMgc2V0IHBlcm1pc3Npb25zKHZhbHVlOiBRdWlja3NpZ2h0VGVtcGxhdGVQZXJtaXNzaW9uc1tdICkge1xuICAgIHRoaXMuX3Blcm1pc3Npb25zID0gdmFsdWU7XG4gIH1cbiAgcHVibGljIHJlc2V0UGVybWlzc2lvbnMoKSB7XG4gICAgdGhpcy5fcGVybWlzc2lvbnMgPSB1bmRlZmluZWQ7XG4gIH1cbiAgLy8gVGVtcG9yYXJpbHkgZXhwb3NlIGlucHV0IHZhbHVlLiBVc2Ugd2l0aCBjYXV0aW9uLlxuICBwdWJsaWMgZ2V0IHBlcm1pc3Npb25zSW5wdXQoKSB7XG4gICAgcmV0dXJuIHRoaXMuX3Blcm1pc3Npb25zXG4gIH1cblxuICAvLyBzb3VyY2VfZW50aXR5IC0gY29tcHV0ZWQ6IGZhbHNlLCBvcHRpb25hbDogdHJ1ZSwgcmVxdWlyZWQ6IGZhbHNlXG4gIHByaXZhdGUgX3NvdXJjZUVudGl0eT86IFF1aWNrc2lnaHRUZW1wbGF0ZVNvdXJjZUVudGl0eTtcbiAgcHVibGljIGdldCBzb3VyY2VFbnRpdHkoKSB7XG4gICAgcmV0dXJuIHRoaXMuaW50ZXJwb2xhdGlvbkZvckF0dHJpYnV0ZSgnc291cmNlX2VudGl0eScpIGFzIGFueTtcbiAgfVxuICBwdWJsaWMgc2V0IHNvdXJjZUVudGl0eSh2YWx1ZTogUXVpY2tzaWdodFRlbXBsYXRlU291cmNlRW50aXR5ICkge1xuICAgIHRoaXMuX3NvdXJjZUVudGl0eSA9IHZhbHVlO1xuICB9XG4gIHB1YmxpYyByZXNldFNvdXJjZUVudGl0eSgpIHtcbiAgICB0aGlzLl9zb3VyY2VFbnRpdHkgPSB1bmRlZmluZWQ7XG4gIH1cbiAgLy8gVGVtcG9yYXJpbHkgZXhwb3NlIGlucHV0IHZhbHVlLiBVc2Ugd2l0aCBjYXV0aW9uLlxuICBwdWJsaWMgZ2V0IHNvdXJjZUVudGl0eUlucHV0KCkge1xuICAgIHJldHVybiB0aGlzLl9zb3VyY2VFbnRpdHlcbiAgfVxuXG4gIC8vIHRhZ3MgLSBjb21wdXRlZDogZmFsc2UsIG9wdGlvbmFsOiB0cnVlLCByZXF1aXJlZDogZmFsc2VcbiAgcHJpdmF0ZSBfdGFncz86IFF1aWNrc2lnaHRUZW1wbGF0ZVRhZ3NbXTtcbiAgcHVibGljIGdldCB0YWdzKCkge1xuICAgIHJldHVybiB0aGlzLmludGVycG9sYXRpb25Gb3JBdHRyaWJ1dGUoJ3RhZ3MnKSBhcyBhbnk7XG4gIH1cbiAgcHVibGljIHNldCB0YWdzKHZhbHVlOiBRdWlja3NpZ2h0VGVtcGxhdGVUYWdzW10gKSB7XG4gICAgdGhpcy5fdGFncyA9IHZhbHVlO1xuICB9XG4gIHB1YmxpYyByZXNldFRhZ3MoKSB7XG4gICAgdGhpcy5fdGFncyA9IHVuZGVmaW5lZDtcbiAgfVxuICAvLyBUZW1wb3JhcmlseSBleHBvc2UgaW5wdXQgdmFsdWUuIFVzZSB3aXRoIGNhdXRpb24uXG4gIHB1YmxpYyBnZXQgdGFnc0lucHV0KCkge1xuICAgIHJldHVybiB0aGlzLl90YWdzXG4gIH1cblxuICAvLyB0ZW1wbGF0ZV9pZCAtIGNvbXB1dGVkOiBmYWxzZSwgb3B0aW9uYWw6IGZhbHNlLCByZXF1aXJlZDogdHJ1ZVxuICBwcml2YXRlIF90ZW1wbGF0ZUlkOiBzdHJpbmc7XG4gIHB1YmxpYyBnZXQgdGVtcGxhdGVJZCgpIHtcbiAgICByZXR1cm4gdGhpcy5nZXRTdHJpbmdBdHRyaWJ1dGUoJ3RlbXBsYXRlX2lkJyk7XG4gIH1cbiAgcHVibGljIHNldCB0ZW1wbGF0ZUlkKHZhbHVlOiBzdHJpbmcpIHtcbiAgICB0aGlzLl90ZW1wbGF0ZUlkID0gdmFsdWU7XG4gIH1cbiAgLy8gVGVtcG9yYXJpbHkgZXhwb3NlIGlucHV0IHZhbHVlLiBVc2Ugd2l0aCBjYXV0aW9uLlxuICBwdWJsaWMgZ2V0IHRlbXBsYXRlSWRJbnB1dCgpIHtcbiAgICByZXR1cm4gdGhpcy5fdGVtcGxhdGVJZFxuICB9XG5cbiAgLy8gdmVyc2lvbiAtIGNvbXB1dGVkOiB0cnVlLCBvcHRpb25hbDogZmFsc2UsIHJlcXVpcmVkOiBmYWxzZVxuICBwdWJsaWMgZ2V0IHZlcnNpb24oKSB7XG4gICAgcmV0dXJuIHRoaXMuaW50ZXJwb2xhdGlvbkZvckF0dHJpYnV0ZSgndmVyc2lvbicpIGFzIGFueTtcbiAgfVxuXG4gIC8vIHZlcnNpb25fZGVzY3JpcHRpb24gLSBjb21wdXRlZDogZmFsc2UsIG9wdGlvbmFsOiB0cnVlLCByZXF1aXJlZDogZmFsc2VcbiAgcHJpdmF0ZSBfdmVyc2lvbkRlc2NyaXB0aW9uPzogc3RyaW5nO1xuICBwdWJsaWMgZ2V0IHZlcnNpb25EZXNjcmlwdGlvbigpIHtcbiAgICByZXR1cm4gdGhpcy5nZXRTdHJpbmdBdHRyaWJ1dGUoJ3ZlcnNpb25fZGVzY3JpcHRpb24nKTtcbiAgfVxuICBwdWJsaWMgc2V0IHZlcnNpb25EZXNjcmlwdGlvbih2YWx1ZTogc3RyaW5nICkge1xuICAgIHRoaXMuX3ZlcnNpb25EZXNjcmlwdGlvbiA9IHZhbHVlO1xuICB9XG4gIHB1YmxpYyByZXNldFZlcnNpb25EZXNjcmlwdGlvbigpIHtcbiAgICB0aGlzLl92ZXJzaW9uRGVzY3JpcHRpb24gPSB1bmRlZmluZWQ7XG4gIH1cbiAgLy8gVGVtcG9yYXJpbHkgZXhwb3NlIGlucHV0IHZhbHVlLiBVc2Ugd2l0aCBjYXV0aW9uLlxuICBwdWJsaWMgZ2V0IHZlcnNpb25EZXNjcmlwdGlvbklucHV0KCkge1xuICAgIHJldHVybiB0aGlzLl92ZXJzaW9uRGVzY3JpcHRpb25cbiAgfVxuXG4gIC8vID09PT09PT09PVxuICAvLyBTWU5USEVTSVNcbiAgLy8gPT09PT09PT09XG5cbiAgcHJvdGVjdGVkIHN5bnRoZXNpemVBdHRyaWJ1dGVzKCk6IHsgW25hbWU6IHN0cmluZ106IGFueSB9IHtcbiAgICByZXR1cm4ge1xuICAgICAgYXdzX2FjY291bnRfaWQ6IGNka3RmLnN0cmluZ1RvVGVycmFmb3JtKHRoaXMuX2F3c0FjY291bnRJZCksXG4gICAgICBuYW1lOiBjZGt0Zi5zdHJpbmdUb1RlcnJhZm9ybSh0aGlzLl9uYW1lKSxcbiAgICAgIHBlcm1pc3Npb25zOiBjZGt0Zi5saXN0TWFwcGVyKHF1aWNrc2lnaHRUZW1wbGF0ZVBlcm1pc3Npb25zVG9UZXJyYWZvcm0pKHRoaXMuX3Blcm1pc3Npb25zKSxcbiAgICAgIHNvdXJjZV9lbnRpdHk6IHF1aWNrc2lnaHRUZW1wbGF0ZVNvdXJjZUVudGl0eVRvVGVycmFmb3JtKHRoaXMuX3NvdXJjZUVudGl0eSksXG4gICAgICB0YWdzOiBjZGt0Zi5saXN0TWFwcGVyKHF1aWNrc2lnaHRUZW1wbGF0ZVRhZ3NUb1RlcnJhZm9ybSkodGhpcy5fdGFncyksXG4gICAgICB0ZW1wbGF0ZV9pZDogY2RrdGYuc3RyaW5nVG9UZXJyYWZvcm0odGhpcy5fdGVtcGxhdGVJZCksXG4gICAgICB2ZXJzaW9uX2Rlc2NyaXB0aW9uOiBjZGt0Zi5zdHJpbmdUb1RlcnJhZm9ybSh0aGlzLl92ZXJzaW9uRGVzY3JpcHRpb24pLFxuICAgIH07XG4gIH1cbn1cbiJdfQ==