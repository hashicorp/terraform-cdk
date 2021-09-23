"use strict";
// https://www.terraform.io/docs/providers/awscc/r/quicksight_dashboard.html
// generated from terraform resource schema
Object.defineProperty(exports, "__esModule", { value: true });
exports.QuicksightDashboard = exports.quicksightDashboardVersionToTerraform = exports.QuicksightDashboardVersion = exports.quicksightDashboardVersionSheetsToTerraform = exports.quicksightDashboardVersionErrorsToTerraform = exports.quicksightDashboardTagsToTerraform = exports.quicksightDashboardSourceEntityToTerraform = exports.quicksightDashboardSourceEntitySourceTemplateToTerraform = exports.quicksightDashboardSourceEntitySourceTemplateDataSetReferencesToTerraform = exports.quicksightDashboardPermissionsToTerraform = exports.quicksightDashboardParametersToTerraform = exports.quicksightDashboardParametersStringParametersToTerraform = exports.quicksightDashboardParametersIntegerParametersToTerraform = exports.quicksightDashboardParametersDecimalParametersToTerraform = exports.quicksightDashboardParametersDateTimeParametersToTerraform = exports.quicksightDashboardDashboardPublishOptionsToTerraform = exports.quicksightDashboardDashboardPublishOptionsSheetControlsOptionToTerraform = exports.quicksightDashboardDashboardPublishOptionsExportToCsvOptionToTerraform = exports.quicksightDashboardDashboardPublishOptionsAdHocFilteringOptionToTerraform = void 0;
const cdktf = require("cdktf");
function quicksightDashboardDashboardPublishOptionsAdHocFilteringOptionToTerraform(struct) {
    if (!cdktf.canInspect(struct)) {
        return struct;
    }
    return {
        availability_status: cdktf.stringToTerraform(struct.availabilityStatus),
    };
}
exports.quicksightDashboardDashboardPublishOptionsAdHocFilteringOptionToTerraform = quicksightDashboardDashboardPublishOptionsAdHocFilteringOptionToTerraform;
function quicksightDashboardDashboardPublishOptionsExportToCsvOptionToTerraform(struct) {
    if (!cdktf.canInspect(struct)) {
        return struct;
    }
    return {
        availability_status: cdktf.stringToTerraform(struct.availabilityStatus),
    };
}
exports.quicksightDashboardDashboardPublishOptionsExportToCsvOptionToTerraform = quicksightDashboardDashboardPublishOptionsExportToCsvOptionToTerraform;
function quicksightDashboardDashboardPublishOptionsSheetControlsOptionToTerraform(struct) {
    if (!cdktf.canInspect(struct)) {
        return struct;
    }
    return {
        visibility_state: cdktf.stringToTerraform(struct.visibilityState),
    };
}
exports.quicksightDashboardDashboardPublishOptionsSheetControlsOptionToTerraform = quicksightDashboardDashboardPublishOptionsSheetControlsOptionToTerraform;
function quicksightDashboardDashboardPublishOptionsToTerraform(struct) {
    if (!cdktf.canInspect(struct)) {
        return struct;
    }
    return {
        ad_hoc_filtering_option: quicksightDashboardDashboardPublishOptionsAdHocFilteringOptionToTerraform(struct.adHocFilteringOption),
        export_to_csv_option: quicksightDashboardDashboardPublishOptionsExportToCsvOptionToTerraform(struct.exportToCsvOption),
        sheet_controls_option: quicksightDashboardDashboardPublishOptionsSheetControlsOptionToTerraform(struct.sheetControlsOption),
    };
}
exports.quicksightDashboardDashboardPublishOptionsToTerraform = quicksightDashboardDashboardPublishOptionsToTerraform;
function quicksightDashboardParametersDateTimeParametersToTerraform(struct) {
    if (!cdktf.canInspect(struct)) {
        return struct;
    }
    return {
        name: cdktf.stringToTerraform(struct.name),
        values: cdktf.listMapper(cdktf.stringToTerraform)(struct.values),
    };
}
exports.quicksightDashboardParametersDateTimeParametersToTerraform = quicksightDashboardParametersDateTimeParametersToTerraform;
function quicksightDashboardParametersDecimalParametersToTerraform(struct) {
    if (!cdktf.canInspect(struct)) {
        return struct;
    }
    return {
        name: cdktf.stringToTerraform(struct.name),
        values: cdktf.listMapper(cdktf.numberToTerraform)(struct.values),
    };
}
exports.quicksightDashboardParametersDecimalParametersToTerraform = quicksightDashboardParametersDecimalParametersToTerraform;
function quicksightDashboardParametersIntegerParametersToTerraform(struct) {
    if (!cdktf.canInspect(struct)) {
        return struct;
    }
    return {
        name: cdktf.stringToTerraform(struct.name),
        values: cdktf.listMapper(cdktf.numberToTerraform)(struct.values),
    };
}
exports.quicksightDashboardParametersIntegerParametersToTerraform = quicksightDashboardParametersIntegerParametersToTerraform;
function quicksightDashboardParametersStringParametersToTerraform(struct) {
    if (!cdktf.canInspect(struct)) {
        return struct;
    }
    return {
        name: cdktf.stringToTerraform(struct.name),
        values: cdktf.listMapper(cdktf.stringToTerraform)(struct.values),
    };
}
exports.quicksightDashboardParametersStringParametersToTerraform = quicksightDashboardParametersStringParametersToTerraform;
function quicksightDashboardParametersToTerraform(struct) {
    if (!cdktf.canInspect(struct)) {
        return struct;
    }
    return {
        date_time_parameters: cdktf.listMapper(quicksightDashboardParametersDateTimeParametersToTerraform)(struct.dateTimeParameters),
        decimal_parameters: cdktf.listMapper(quicksightDashboardParametersDecimalParametersToTerraform)(struct.decimalParameters),
        integer_parameters: cdktf.listMapper(quicksightDashboardParametersIntegerParametersToTerraform)(struct.integerParameters),
        string_parameters: cdktf.listMapper(quicksightDashboardParametersStringParametersToTerraform)(struct.stringParameters),
    };
}
exports.quicksightDashboardParametersToTerraform = quicksightDashboardParametersToTerraform;
function quicksightDashboardPermissionsToTerraform(struct) {
    if (!cdktf.canInspect(struct)) {
        return struct;
    }
    return {
        actions: cdktf.listMapper(cdktf.stringToTerraform)(struct.actions),
        principal: cdktf.stringToTerraform(struct.principal),
    };
}
exports.quicksightDashboardPermissionsToTerraform = quicksightDashboardPermissionsToTerraform;
function quicksightDashboardSourceEntitySourceTemplateDataSetReferencesToTerraform(struct) {
    if (!cdktf.canInspect(struct)) {
        return struct;
    }
    return {
        data_set_arn: cdktf.stringToTerraform(struct.dataSetArn),
        data_set_placeholder: cdktf.stringToTerraform(struct.dataSetPlaceholder),
    };
}
exports.quicksightDashboardSourceEntitySourceTemplateDataSetReferencesToTerraform = quicksightDashboardSourceEntitySourceTemplateDataSetReferencesToTerraform;
function quicksightDashboardSourceEntitySourceTemplateToTerraform(struct) {
    if (!cdktf.canInspect(struct)) {
        return struct;
    }
    return {
        arn: cdktf.stringToTerraform(struct.arn),
        data_set_references: cdktf.listMapper(quicksightDashboardSourceEntitySourceTemplateDataSetReferencesToTerraform)(struct.dataSetReferences),
    };
}
exports.quicksightDashboardSourceEntitySourceTemplateToTerraform = quicksightDashboardSourceEntitySourceTemplateToTerraform;
function quicksightDashboardSourceEntityToTerraform(struct) {
    if (!cdktf.canInspect(struct)) {
        return struct;
    }
    return {
        source_template: quicksightDashboardSourceEntitySourceTemplateToTerraform(struct.sourceTemplate),
    };
}
exports.quicksightDashboardSourceEntityToTerraform = quicksightDashboardSourceEntityToTerraform;
function quicksightDashboardTagsToTerraform(struct) {
    if (!cdktf.canInspect(struct)) {
        return struct;
    }
    return {
        key: cdktf.stringToTerraform(struct.key),
        value: cdktf.stringToTerraform(struct.value),
    };
}
exports.quicksightDashboardTagsToTerraform = quicksightDashboardTagsToTerraform;
function quicksightDashboardVersionErrorsToTerraform(struct) {
    if (!cdktf.canInspect(struct)) {
        return struct;
    }
    return {
        message: cdktf.stringToTerraform(struct.message),
        type: cdktf.stringToTerraform(struct.type),
    };
}
exports.quicksightDashboardVersionErrorsToTerraform = quicksightDashboardVersionErrorsToTerraform;
function quicksightDashboardVersionSheetsToTerraform(struct) {
    if (!cdktf.canInspect(struct)) {
        return struct;
    }
    return {
        name: cdktf.stringToTerraform(struct.name),
        sheet_id: cdktf.stringToTerraform(struct.sheetId),
    };
}
exports.quicksightDashboardVersionSheetsToTerraform = quicksightDashboardVersionSheetsToTerraform;
class QuicksightDashboardVersion extends cdktf.ComplexComputedList {
    // arn - computed: true, optional: true, required: false
    get arn() {
        return this.getStringAttribute('arn');
    }
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
    get dataSetArns() {
        return this.getListAttribute('data_set_arns');
    }
    set dataSetArns(value) {
        this._dataSetArns = value;
    }
    resetDataSetArns() {
        this._dataSetArns = undefined;
    }
    // Temporarily expose input value. Use with caution.
    get dataSetArnsInput() {
        return this._dataSetArns;
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
exports.QuicksightDashboardVersion = QuicksightDashboardVersion;
function quicksightDashboardVersionToTerraform(struct) {
    if (!cdktf.canInspect(struct)) {
        return struct;
    }
    return {
        arn: cdktf.stringToTerraform(struct.arn),
        created_time: cdktf.stringToTerraform(struct.createdTime),
        data_set_arns: cdktf.listMapper(cdktf.stringToTerraform)(struct.dataSetArns),
        description: cdktf.stringToTerraform(struct.description),
        errors: cdktf.listMapper(quicksightDashboardVersionErrorsToTerraform)(struct.errors),
        sheets: cdktf.listMapper(quicksightDashboardVersionSheetsToTerraform)(struct.sheets),
        source_entity_arn: cdktf.stringToTerraform(struct.sourceEntityArn),
        status: cdktf.stringToTerraform(struct.status),
        theme_arn: cdktf.stringToTerraform(struct.themeArn),
        version_number: cdktf.numberToTerraform(struct.versionNumber),
    };
}
exports.quicksightDashboardVersionToTerraform = quicksightDashboardVersionToTerraform;
/**
* Represents a {@link https://www.terraform.io/docs/providers/awscc/r/quicksight_dashboard.html awscc_quicksight_dashboard}
*/
class QuicksightDashboard extends cdktf.TerraformResource {
    // ===========
    // INITIALIZER
    // ===========
    /**
    * Create a new {@link https://www.terraform.io/docs/providers/awscc/r/quicksight_dashboard.html awscc_quicksight_dashboard} Resource
    *
    * @param scope The scope in which to define this construct
    * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
    * @param options QuicksightDashboardConfig
    */
    constructor(scope, id, config) {
        super(scope, id, {
            terraformResourceType: 'awscc_quicksight_dashboard',
            terraformGeneratorMetadata: {
                providerName: 'awscc'
            },
            provider: config.provider,
            dependsOn: config.dependsOn,
            count: config.count,
            lifecycle: config.lifecycle
        });
        this._awsAccountId = config.awsAccountId;
        this._dashboardId = config.dashboardId;
        this._dashboardPublishOptions = config.dashboardPublishOptions;
        this._name = config.name;
        this._parameters = config.parameters;
        this._permissions = config.permissions;
        this._sourceEntity = config.sourceEntity;
        this._tags = config.tags;
        this._themeArn = config.themeArn;
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
    get dashboardId() {
        return this.getStringAttribute('dashboard_id');
    }
    set dashboardId(value) {
        this._dashboardId = value;
    }
    // Temporarily expose input value. Use with caution.
    get dashboardIdInput() {
        return this._dashboardId;
    }
    get dashboardPublishOptions() {
        return this.interpolationForAttribute('dashboard_publish_options');
    }
    set dashboardPublishOptions(value) {
        this._dashboardPublishOptions = value;
    }
    resetDashboardPublishOptions() {
        this._dashboardPublishOptions = undefined;
    }
    // Temporarily expose input value. Use with caution.
    get dashboardPublishOptionsInput() {
        return this._dashboardPublishOptions;
    }
    // id - computed: true, optional: false, required: false
    get id() {
        return this.getStringAttribute('id');
    }
    // last_published_time - computed: true, optional: false, required: false
    get lastPublishedTime() {
        return this.getStringAttribute('last_published_time');
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
    get parameters() {
        return this.interpolationForAttribute('parameters');
    }
    set parameters(value) {
        this._parameters = value;
    }
    resetParameters() {
        this._parameters = undefined;
    }
    // Temporarily expose input value. Use with caution.
    get parametersInput() {
        return this._parameters;
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
            dashboard_id: cdktf.stringToTerraform(this._dashboardId),
            dashboard_publish_options: quicksightDashboardDashboardPublishOptionsToTerraform(this._dashboardPublishOptions),
            name: cdktf.stringToTerraform(this._name),
            parameters: quicksightDashboardParametersToTerraform(this._parameters),
            permissions: cdktf.listMapper(quicksightDashboardPermissionsToTerraform)(this._permissions),
            source_entity: quicksightDashboardSourceEntityToTerraform(this._sourceEntity),
            tags: cdktf.listMapper(quicksightDashboardTagsToTerraform)(this._tags),
            theme_arn: cdktf.stringToTerraform(this._themeArn),
            version_description: cdktf.stringToTerraform(this._versionDescription),
        };
    }
}
exports.QuicksightDashboard = QuicksightDashboard;
// =================
// STATIC PROPERTIES
// =================
QuicksightDashboard.tfResourceType = "awscc_quicksight_dashboard";
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicXVpY2tzaWdodC1kYXNoYm9hcmQuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyJxdWlja3NpZ2h0LWRhc2hib2FyZC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiO0FBQUEsNEVBQTRFO0FBQzVFLDJDQUEyQzs7O0FBRzNDLCtCQUErQjtBQTZFL0IsU0FBZ0IseUVBQXlFLENBQUMsTUFBdUU7SUFDL0osSUFBSSxDQUFDLEtBQUssQ0FBQyxVQUFVLENBQUMsTUFBTSxDQUFDLEVBQUU7UUFBRSxPQUFPLE1BQU0sQ0FBQztLQUFFO0lBQ2pELE9BQU87UUFDTCxtQkFBbUIsRUFBRSxLQUFLLENBQUMsaUJBQWlCLENBQUMsTUFBTyxDQUFDLGtCQUFrQixDQUFDO0tBQ3pFLENBQUE7QUFDSCxDQUFDO0FBTEQsOEpBS0M7QUFTRCxTQUFnQixzRUFBc0UsQ0FBQyxNQUFvRTtJQUN6SixJQUFJLENBQUMsS0FBSyxDQUFDLFVBQVUsQ0FBQyxNQUFNLENBQUMsRUFBRTtRQUFFLE9BQU8sTUFBTSxDQUFDO0tBQUU7SUFDakQsT0FBTztRQUNMLG1CQUFtQixFQUFFLEtBQUssQ0FBQyxpQkFBaUIsQ0FBQyxNQUFPLENBQUMsa0JBQWtCLENBQUM7S0FDekUsQ0FBQTtBQUNILENBQUM7QUFMRCx3SkFLQztBQVNELFNBQWdCLHdFQUF3RSxDQUFDLE1BQXNFO0lBQzdKLElBQUksQ0FBQyxLQUFLLENBQUMsVUFBVSxDQUFDLE1BQU0sQ0FBQyxFQUFFO1FBQUUsT0FBTyxNQUFNLENBQUM7S0FBRTtJQUNqRCxPQUFPO1FBQ0wsZ0JBQWdCLEVBQUUsS0FBSyxDQUFDLGlCQUFpQixDQUFDLE1BQU8sQ0FBQyxlQUFlLENBQUM7S0FDbkUsQ0FBQTtBQUNILENBQUM7QUFMRCw0SkFLQztBQXVCRCxTQUFnQixxREFBcUQsQ0FBQyxNQUFtRDtJQUN2SCxJQUFJLENBQUMsS0FBSyxDQUFDLFVBQVUsQ0FBQyxNQUFNLENBQUMsRUFBRTtRQUFFLE9BQU8sTUFBTSxDQUFDO0tBQUU7SUFD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O1lBQ2xELG1CQUFtQixFQUFFLEtBQUssQ0FBQyxpQkFBaUIsQ0FBQyxJQUFJLENBQUMsbUJBQW1CLENBQUM7U0FDdkUsQ0FBQztJQUNKLENBQUM7O0FBdFBILGtEQXVQQztBQXJQQyxvQkFBb0I7QUFDcEIsb0JBQW9CO0FBQ3BCLG9CQUFvQjtBQUNHLGtDQUFjLEdBQVcsNEJBQTRCLENBQUMiLCJzb3VyY2VzQ29udGVudCI6WyIvLyBodHRwczovL3d3dy50ZXJyYWZvcm0uaW8vZG9jcy9wcm92aWRlcnMvYXdzY2Mvci9xdWlja3NpZ2h0X2Rhc2hib2FyZC5odG1sXG4vLyBnZW5lcmF0ZWQgZnJvbSB0ZXJyYWZvcm0gcmVzb3VyY2Ugc2NoZW1hXG5cbmltcG9ydCB7IENvbnN0cnVjdCB9IGZyb20gJ2NvbnN0cnVjdHMnO1xuaW1wb3J0ICogYXMgY2RrdGYgZnJvbSAnY2RrdGYnO1xuXG4vLyBDb25maWd1cmF0aW9uXG5cbmV4cG9ydCBpbnRlcmZhY2UgUXVpY2tzaWdodERhc2hib2FyZENvbmZpZyBleHRlbmRzIGNka3RmLlRlcnJhZm9ybU1ldGFBcmd1bWVudHMge1xuICAvKipcbiAgKiBEb2NzIGF0IFRlcnJhZm9ybSBSZWdpc3RyeToge0BsaW5rIGh0dHBzOi8vd3d3LnRlcnJhZm9ybS5pby9kb2NzL3Byb3ZpZGVycy9hd3NjYy9yL3F1aWNrc2lnaHRfZGFzaGJvYXJkLmh0bWwjYXdzX2FjY291bnRfaWQgUXVpY2tzaWdodERhc2hib2FyZCNhd3NfYWNjb3VudF9pZH1cbiAgKi9cbiAgcmVhZG9ubHkgYXdzQWNjb3VudElkOiBzdHJpbmc7XG4gIC8qKlxuICAqIERvY3MgYXQgVGVycmFmb3JtIFJlZ2lzdHJ5OiB7QGxpbmsgaHR0cHM6Ly93d3cudGVycmFmb3JtLmlvL2RvY3MvcHJvdmlkZXJzL2F3c2NjL3IvcXVpY2tzaWdodF9kYXNoYm9hcmQuaHRtbCNkYXNoYm9hcmRfaWQgUXVpY2tzaWdodERhc2hib2FyZCNkYXNoYm9hcmRfaWR9XG4gICovXG4gIHJlYWRvbmx5IGRhc2hib2FyZElkOiBzdHJpbmc7XG4gIC8qKlxuICAqIDxwPkRhc2hib2FyZCBwdWJsaXNoIG9wdGlvbnMuPC9wPlxuICAqIFxuICAqIERvY3MgYXQgVGVycmFmb3JtIFJlZ2lzdHJ5OiB7QGxpbmsgaHR0cHM6Ly93d3cudGVycmFmb3JtLmlvL2RvY3MvcHJvdmlkZXJzL2F3c2NjL3IvcXVpY2tzaWdodF9kYXNoYm9hcmQuaHRtbCNkYXNoYm9hcmRfcHVibGlzaF9vcHRpb25zIFF1aWNrc2lnaHREYXNoYm9hcmQjZGFzaGJvYXJkX3B1Ymxpc2hfb3B0aW9uc31cbiAgKi9cbiAgcmVhZG9ubHkgZGFzaGJvYXJkUHVibGlzaE9wdGlvbnM/OiBRdWlja3NpZ2h0RGFzaGJvYXJkRGFzaGJvYXJkUHVibGlzaE9wdGlvbnM7XG4gIC8qKlxuICAqIDxwPlRoZSBkaXNwbGF5IG5hbWUgb2YgdGhlIGRhc2hib2FyZC48L3A+XG4gICogXG4gICogRG9jcyBhdCBUZXJyYWZvcm0gUmVnaXN0cnk6IHtAbGluayBodHRwczovL3d3dy50ZXJyYWZvcm0uaW8vZG9jcy9wcm92aWRlcnMvYXdzY2Mvci9xdWlja3NpZ2h0X2Rhc2hib2FyZC5odG1sI25hbWUgUXVpY2tzaWdodERhc2hib2FyZCNuYW1lfVxuICAqL1xuICByZWFkb25seSBuYW1lPzogc3RyaW5nO1xuICAvKipcbiAgKiA8cD5BIGxpc3Qgb2YgUXVpY2tTaWdodCBwYXJhbWV0ZXJzIGFuZCB0aGUgbGlzdCdzIG92ZXJyaWRlIHZhbHVlcy48L3A+XG4gICogXG4gICogRG9jcyBhdCBUZXJyYWZvcm0gUmVnaXN0cnk6IHtAbGluayBodHRwczovL3d3dy50ZXJyYWZvcm0uaW8vZG9jcy9wcm92aWRlcnMvYXdzY2Mvci9xdWlja3NpZ2h0X2Rhc2hib2FyZC5odG1sI3BhcmFtZXRlcnMgUXVpY2tzaWdodERhc2hib2FyZCNwYXJhbWV0ZXJzfVxuICAqL1xuICByZWFkb25seSBwYXJhbWV0ZXJzPzogUXVpY2tzaWdodERhc2hib2FyZFBhcmFtZXRlcnM7XG4gIC8qKlxuICAqIDxwPkEgc3RydWN0dXJlIHRoYXQgY29udGFpbnMgdGhlIHBlcm1pc3Npb25zIG9mIHRoZSBkYXNoYm9hcmQuIFlvdSBjYW4gdXNlIHRoaXMgc3RydWN0dXJlXG4gICAgICAgICAgICBmb3IgZ3JhbnRpbmcgcGVybWlzc2lvbnMgYnkgcHJvdmlkaW5nIGEgbGlzdCBvZiBJQU0gYWN0aW9uIGluZm9ybWF0aW9uIGZvciBlYWNoXG4gICAgICAgICAgICBwcmluY2lwYWwgQVJOLiA8L3A+XG5cbiAgICAgICAgPHA+VG8gc3BlY2lmeSBubyBwZXJtaXNzaW9ucywgb21pdCB0aGUgcGVybWlzc2lvbnMgbGlzdC48L3A+XG4gICogXG4gICogRG9jcyBhdCBUZXJyYWZvcm0gUmVnaXN0cnk6IHtAbGluayBodHRwczovL3d3dy50ZXJyYWZvcm0uaW8vZG9jcy9wcm92aWRlcnMvYXdzY2Mvci9xdWlja3NpZ2h0X2Rhc2hib2FyZC5odG1sI3Blcm1pc3Npb25zIFF1aWNrc2lnaHREYXNoYm9hcmQjcGVybWlzc2lvbnN9XG4gICovXG4gIHJlYWRvbmx5IHBlcm1pc3Npb25zPzogUXVpY2tzaWdodERhc2hib2FyZFBlcm1pc3Npb25zW107XG4gIC8qKlxuICAqIDxwPkRhc2hib2FyZCBzb3VyY2UgZW50aXR5LjwvcD5cbiAgKiBcbiAgKiBEb2NzIGF0IFRlcnJhZm9ybSBSZWdpc3RyeToge0BsaW5rIGh0dHBzOi8vd3d3LnRlcnJhZm9ybS5pby9kb2NzL3Byb3ZpZGVycy9hd3NjYy9yL3F1aWNrc2lnaHRfZGFzaGJvYXJkLmh0bWwjc291cmNlX2VudGl0eSBRdWlja3NpZ2h0RGFzaGJvYXJkI3NvdXJjZV9lbnRpdHl9XG4gICovXG4gIHJlYWRvbmx5IHNvdXJjZUVudGl0eT86IFF1aWNrc2lnaHREYXNoYm9hcmRTb3VyY2VFbnRpdHk7XG4gIC8qKlxuICAqIDxwPkNvbnRhaW5zIGEgbWFwIG9mIHRoZSBrZXktdmFsdWUgcGFpcnMgZm9yIHRoZSByZXNvdXJjZSB0YWcgb3IgdGFncyBhc3NpZ25lZCB0byB0aGVcbiAgICAgICAgICAgIGRhc2hib2FyZC48L3A+XG4gICogXG4gICogRG9jcyBhdCBUZXJyYWZvcm0gUmVnaXN0cnk6IHtAbGluayBodHRwczovL3d3dy50ZXJyYWZvcm0uaW8vZG9jcy9wcm92aWRlcnMvYXdzY2Mvci9xdWlja3NpZ2h0X2Rhc2hib2FyZC5odG1sI3RhZ3MgUXVpY2tzaWdodERhc2hib2FyZCN0YWdzfVxuICAqL1xuICByZWFkb25seSB0YWdzPzogUXVpY2tzaWdodERhc2hib2FyZFRhZ3NbXTtcbiAgLyoqXG4gICogPHA+VGhlIEFtYXpvbiBSZXNvdXJjZSBOYW1lIChBUk4pIG9mIHRoZSB0aGVtZSB0aGF0IGlzIGJlaW5nIHVzZWQgZm9yIHRoaXMgZGFzaGJvYXJkLiBJZlxuICAgICAgICAgICAgeW91IGFkZCBhIHZhbHVlIGZvciB0aGlzIGZpZWxkLCBpdCBvdmVycmlkZXMgdGhlIHZhbHVlIHRoYXQgaXMgdXNlZCBpbiB0aGUgc291cmNlXG4gICAgICAgICAgICBlbnRpdHkuIFRoZSB0aGVtZSBBUk4gbXVzdCBleGlzdCBpbiB0aGUgc2FtZSBBV1MgYWNjb3VudCB3aGVyZSB5b3UgY3JlYXRlIHRoZVxuICAgICAgICAgICAgZGFzaGJvYXJkLjwvcD5cbiAgKiBcbiAgKiBEb2NzIGF0IFRlcnJhZm9ybSBSZWdpc3RyeToge0BsaW5rIGh0dHBzOi8vd3d3LnRlcnJhZm9ybS5pby9kb2NzL3Byb3ZpZGVycy9hd3NjYy9yL3F1aWNrc2lnaHRfZGFzaGJvYXJkLmh0bWwjdGhlbWVfYXJuIFF1aWNrc2lnaHREYXNoYm9hcmQjdGhlbWVfYXJufVxuICAqL1xuICByZWFkb25seSB0aGVtZUFybj86IHN0cmluZztcbiAgLyoqXG4gICogPHA+QSBkZXNjcmlwdGlvbiBmb3IgdGhlIGZpcnN0IHZlcnNpb24gb2YgdGhlIGRhc2hib2FyZCBiZWluZyBjcmVhdGVkLjwvcD5cbiAgKiBcbiAgKiBEb2NzIGF0IFRlcnJhZm9ybSBSZWdpc3RyeToge0BsaW5rIGh0dHBzOi8vd3d3LnRlcnJhZm9ybS5pby9kb2NzL3Byb3ZpZGVycy9hd3NjYy9yL3F1aWNrc2lnaHRfZGFzaGJvYXJkLmh0bWwjdmVyc2lvbl9kZXNjcmlwdGlvbiBRdWlja3NpZ2h0RGFzaGJvYXJkI3ZlcnNpb25fZGVzY3JpcHRpb259XG4gICovXG4gIHJlYWRvbmx5IHZlcnNpb25EZXNjcmlwdGlvbj86IHN0cmluZztcbn1cbmV4cG9ydCBpbnRlcmZhY2UgUXVpY2tzaWdodERhc2hib2FyZERhc2hib2FyZFB1Ymxpc2hPcHRpb25zQWRIb2NGaWx0ZXJpbmdPcHRpb24ge1xuICAvKipcbiAgKiBEb2NzIGF0IFRlcnJhZm9ybSBSZWdpc3RyeToge0BsaW5rIGh0dHBzOi8vd3d3LnRlcnJhZm9ybS5pby9kb2NzL3Byb3ZpZGVycy9hd3NjYy9yL3F1aWNrc2lnaHRfZGFzaGJvYXJkLmh0bWwjYXZhaWxhYmlsaXR5X3N0YXR1cyBRdWlja3NpZ2h0RGFzaGJvYXJkI2F2YWlsYWJpbGl0eV9zdGF0dXN9XG4gICovXG4gIHJlYWRvbmx5IGF2YWlsYWJpbGl0eVN0YXR1cz86IHN0cmluZztcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIHF1aWNrc2lnaHREYXNoYm9hcmREYXNoYm9hcmRQdWJsaXNoT3B0aW9uc0FkSG9jRmlsdGVyaW5nT3B0aW9uVG9UZXJyYWZvcm0oc3RydWN0PzogUXVpY2tzaWdodERhc2hib2FyZERhc2hib2FyZFB1Ymxpc2hPcHRpb25zQWRIb2NGaWx0ZXJpbmdPcHRpb24pOiBhbnkge1xuICBpZiAoIWNka3RmLmNhbkluc3BlY3Qoc3RydWN0KSkgeyByZXR1cm4gc3RydWN0OyB9XG4gIHJldHVybiB7XG4gICAgYXZhaWxhYmlsaXR5X3N0YXR1czogY2RrdGYuc3RyaW5nVG9UZXJyYWZvcm0oc3RydWN0IS5hdmFpbGFiaWxpdHlTdGF0dXMpLFxuICB9XG59XG5cbmV4cG9ydCBpbnRlcmZhY2UgUXVpY2tzaWdodERhc2hib2FyZERhc2hib2FyZFB1Ymxpc2hPcHRpb25zRXhwb3J0VG9Dc3ZPcHRpb24ge1xuICAvKipcbiAgKiBEb2NzIGF0IFRlcnJhZm9ybSBSZWdpc3RyeToge0BsaW5rIGh0dHBzOi8vd3d3LnRlcnJhZm9ybS5pby9kb2NzL3Byb3ZpZGVycy9hd3NjYy9yL3F1aWNrc2lnaHRfZGFzaGJvYXJkLmh0bWwjYXZhaWxhYmlsaXR5X3N0YXR1cyBRdWlja3NpZ2h0RGFzaGJvYXJkI2F2YWlsYWJpbGl0eV9zdGF0dXN9XG4gICovXG4gIHJlYWRvbmx5IGF2YWlsYWJpbGl0eVN0YXR1cz86IHN0cmluZztcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIHF1aWNrc2lnaHREYXNoYm9hcmREYXNoYm9hcmRQdWJsaXNoT3B0aW9uc0V4cG9ydFRvQ3N2T3B0aW9uVG9UZXJyYWZvcm0oc3RydWN0PzogUXVpY2tzaWdodERhc2hib2FyZERhc2hib2FyZFB1Ymxpc2hPcHRpb25zRXhwb3J0VG9Dc3ZPcHRpb24pOiBhbnkge1xuICBpZiAoIWNka3RmLmNhbkluc3BlY3Qoc3RydWN0KSkgeyByZXR1cm4gc3RydWN0OyB9XG4gIHJldHVybiB7XG4gICAgYXZhaWxhYmlsaXR5X3N0YXR1czogY2RrdGYuc3RyaW5nVG9UZXJyYWZvcm0oc3RydWN0IS5hdmFpbGFiaWxpdHlTdGF0dXMpLFxuICB9XG59XG5cbmV4cG9ydCBpbnRlcmZhY2UgUXVpY2tzaWdodERhc2hib2FyZERhc2hib2FyZFB1Ymxpc2hPcHRpb25zU2hlZXRDb250cm9sc09wdGlvbiB7XG4gIC8qKlxuICAqIERvY3MgYXQgVGVycmFmb3JtIFJlZ2lzdHJ5OiB7QGxpbmsgaHR0cHM6Ly93d3cudGVycmFmb3JtLmlvL2RvY3MvcHJvdmlkZXJzL2F3c2NjL3IvcXVpY2tzaWdodF9kYXNoYm9hcmQuaHRtbCN2aXNpYmlsaXR5X3N0YXRlIFF1aWNrc2lnaHREYXNoYm9hcmQjdmlzaWJpbGl0eV9zdGF0ZX1cbiAgKi9cbiAgcmVhZG9ubHkgdmlzaWJpbGl0eVN0YXRlPzogc3RyaW5nO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gcXVpY2tzaWdodERhc2hib2FyZERhc2hib2FyZFB1Ymxpc2hPcHRpb25zU2hlZXRDb250cm9sc09wdGlvblRvVGVycmFmb3JtKHN0cnVjdD86IFF1aWNrc2lnaHREYXNoYm9hcmREYXNoYm9hcmRQdWJsaXNoT3B0aW9uc1NoZWV0Q29udHJvbHNPcHRpb24pOiBhbnkge1xuICBpZiAoIWNka3RmLmNhbkluc3BlY3Qoc3RydWN0KSkgeyByZXR1cm4gc3RydWN0OyB9XG4gIHJldHVybiB7XG4gICAgdmlzaWJpbGl0eV9zdGF0ZTogY2RrdGYuc3RyaW5nVG9UZXJyYWZvcm0oc3RydWN0IS52aXNpYmlsaXR5U3RhdGUpLFxuICB9XG59XG5cbmV4cG9ydCBpbnRlcmZhY2UgUXVpY2tzaWdodERhc2hib2FyZERhc2hib2FyZFB1Ymxpc2hPcHRpb25zIHtcbiAgLyoqXG4gICogPHA+QWQgaG9jIChvbmUtdGltZSkgZmlsdGVyaW5nIG9wdGlvbi48L3A+XG4gICogXG4gICogRG9jcyBhdCBUZXJyYWZvcm0gUmVnaXN0cnk6IHtAbGluayBodHRwczovL3d3dy50ZXJyYWZvcm0uaW8vZG9jcy9wcm92aWRlcnMvYXdzY2Mvci9xdWlja3NpZ2h0X2Rhc2hib2FyZC5odG1sI2FkX2hvY19maWx0ZXJpbmdfb3B0aW9uIFF1aWNrc2lnaHREYXNoYm9hcmQjYWRfaG9jX2ZpbHRlcmluZ19vcHRpb259XG4gICovXG4gIHJlYWRvbmx5IGFkSG9jRmlsdGVyaW5nT3B0aW9uPzogUXVpY2tzaWdodERhc2hib2FyZERhc2hib2FyZFB1Ymxpc2hPcHRpb25zQWRIb2NGaWx0ZXJpbmdPcHRpb247XG4gIC8qKlxuICAqIDxwPkV4cG9ydCB0byAuY3N2IG9wdGlvbi48L3A+XG4gICogXG4gICogRG9jcyBhdCBUZXJyYWZvcm0gUmVnaXN0cnk6IHtAbGluayBodHRwczovL3d3dy50ZXJyYWZvcm0uaW8vZG9jcy9wcm92aWRlcnMvYXdzY2Mvci9xdWlja3NpZ2h0X2Rhc2hib2FyZC5odG1sI2V4cG9ydF90b19jc3Zfb3B0aW9uIFF1aWNrc2lnaHREYXNoYm9hcmQjZXhwb3J0X3RvX2Nzdl9vcHRpb259XG4gICovXG4gIHJlYWRvbmx5IGV4cG9ydFRvQ3N2T3B0aW9uPzogUXVpY2tzaWdodERhc2hib2FyZERhc2hib2FyZFB1Ymxpc2hPcHRpb25zRXhwb3J0VG9Dc3ZPcHRpb247XG4gIC8qKlxuICAqIDxwPlNoZWV0IGNvbnRyb2xzIG9wdGlvbi48L3A+XG4gICogXG4gICogRG9jcyBhdCBUZXJyYWZvcm0gUmVnaXN0cnk6IHtAbGluayBodHRwczovL3d3dy50ZXJyYWZvcm0uaW8vZG9jcy9wcm92aWRlcnMvYXdzY2Mvci9xdWlja3NpZ2h0X2Rhc2hib2FyZC5odG1sI3NoZWV0X2NvbnRyb2xzX29wdGlvbiBRdWlja3NpZ2h0RGFzaGJvYXJkI3NoZWV0X2NvbnRyb2xzX29wdGlvbn1cbiAgKi9cbiAgcmVhZG9ubHkgc2hlZXRDb250cm9sc09wdGlvbj86IFF1aWNrc2lnaHREYXNoYm9hcmREYXNoYm9hcmRQdWJsaXNoT3B0aW9uc1NoZWV0Q29udHJvbHNPcHRpb247XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBxdWlja3NpZ2h0RGFzaGJvYXJkRGFzaGJvYXJkUHVibGlzaE9wdGlvbnNUb1RlcnJhZm9ybShzdHJ1Y3Q/OiBRdWlja3NpZ2h0RGFzaGJvYXJkRGFzaGJvYXJkUHVibGlzaE9wdGlvbnMpOiBhbnkge1xuICBpZiAoIWNka3RmLmNhbkluc3BlY3Qoc3RydWN0KSkgeyByZXR1cm4gc3RydWN0OyB9XG4gIHJldHVybiB7XG4gICAgYWRfaG9jX2ZpbHRlcmluZ19vcHRpb246IHF1aWNrc2lnaHREYXNoYm9hcmREYXNoYm9hcmRQdWJsaXNoT3B0aW9uc0FkSG9jRmlsdGVyaW5nT3B0aW9uVG9UZXJyYWZvcm0oc3RydWN0IS5hZEhvY0ZpbHRlcmluZ09wdGlvbiksXG4gICAgZXhwb3J0X3RvX2Nzdl9vcHRpb246IHF1aWNrc2lnaHREYXNoYm9hcmREYXNoYm9hcmRQdWJsaXNoT3B0aW9uc0V4cG9ydFRvQ3N2T3B0aW9uVG9UZXJyYWZvcm0oc3RydWN0IS5leHBvcnRUb0Nzdk9wdGlvbiksXG4gICAgc2hlZXRfY29udHJvbHNfb3B0aW9uOiBxdWlja3NpZ2h0RGFzaGJvYXJkRGFzaGJvYXJkUHVibGlzaE9wdGlvbnNTaGVldENvbnRyb2xzT3B0aW9uVG9UZXJyYWZvcm0oc3RydWN0IS5zaGVldENvbnRyb2xzT3B0aW9uKSxcbiAgfVxufVxuXG5leHBvcnQgaW50ZXJmYWNlIFF1aWNrc2lnaHREYXNoYm9hcmRQYXJhbWV0ZXJzRGF0ZVRpbWVQYXJhbWV0ZXJzIHtcbiAgLyoqXG4gICogPHA+QSBkaXNwbGF5IG5hbWUgZm9yIHRoZSBkYXRlLXRpbWUgcGFyYW1ldGVyLjwvcD5cbiAgKiBcbiAgKiBEb2NzIGF0IFRlcnJhZm9ybSBSZWdpc3RyeToge0BsaW5rIGh0dHBzOi8vd3d3LnRlcnJhZm9ybS5pby9kb2NzL3Byb3ZpZGVycy9hd3NjYy9yL3F1aWNrc2lnaHRfZGFzaGJvYXJkLmh0bWwjbmFtZSBRdWlja3NpZ2h0RGFzaGJvYXJkI25hbWV9XG4gICovXG4gIHJlYWRvbmx5IG5hbWU6IHN0cmluZztcbiAgLyoqXG4gICogPHA+VGhlIHZhbHVlcyBmb3IgdGhlIGRhdGUtdGltZSBwYXJhbWV0ZXIuPC9wPlxuICAqIFxuICAqIERvY3MgYXQgVGVycmFmb3JtIFJlZ2lzdHJ5OiB7QGxpbmsgaHR0cHM6Ly93d3cudGVycmFmb3JtLmlvL2RvY3MvcHJvdmlkZXJzL2F3c2NjL3IvcXVpY2tzaWdodF9kYXNoYm9hcmQuaHRtbCN2YWx1ZXMgUXVpY2tzaWdodERhc2hib2FyZCN2YWx1ZXN9XG4gICovXG4gIHJlYWRvbmx5IHZhbHVlczogc3RyaW5nW107XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBxdWlja3NpZ2h0RGFzaGJvYXJkUGFyYW1ldGVyc0RhdGVUaW1lUGFyYW1ldGVyc1RvVGVycmFmb3JtKHN0cnVjdD86IFF1aWNrc2lnaHREYXNoYm9hcmRQYXJhbWV0ZXJzRGF0ZVRpbWVQYXJhbWV0ZXJzKTogYW55IHtcbiAgaWYgKCFjZGt0Zi5jYW5JbnNwZWN0KHN0cnVjdCkpIHsgcmV0dXJuIHN0cnVjdDsgfVxuICByZXR1cm4ge1xuICAgIG5hbWU6IGNka3RmLnN0cmluZ1RvVGVycmFmb3JtKHN0cnVjdCEubmFtZSksXG4gICAgdmFsdWVzOiBjZGt0Zi5saXN0TWFwcGVyKGNka3RmLnN0cmluZ1RvVGVycmFmb3JtKShzdHJ1Y3QhLnZhbHVlcyksXG4gIH1cbn1cblxuZXhwb3J0IGludGVyZmFjZSBRdWlja3NpZ2h0RGFzaGJvYXJkUGFyYW1ldGVyc0RlY2ltYWxQYXJhbWV0ZXJzIHtcbiAgLyoqXG4gICogPHA+QSBkaXNwbGF5IG5hbWUgZm9yIHRoZSBkZWNpbWFsIHBhcmFtZXRlci48L3A+XG4gICogXG4gICogRG9jcyBhdCBUZXJyYWZvcm0gUmVnaXN0cnk6IHtAbGluayBodHRwczovL3d3dy50ZXJyYWZvcm0uaW8vZG9jcy9wcm92aWRlcnMvYXdzY2Mvci9xdWlja3NpZ2h0X2Rhc2hib2FyZC5odG1sI25hbWUgUXVpY2tzaWdodERhc2hib2FyZCNuYW1lfVxuICAqL1xuICByZWFkb25seSBuYW1lOiBzdHJpbmc7XG4gIC8qKlxuICAqIDxwPlRoZSB2YWx1ZXMgZm9yIHRoZSBkZWNpbWFsIHBhcmFtZXRlci48L3A+XG4gICogXG4gICogRG9jcyBhdCBUZXJyYWZvcm0gUmVnaXN0cnk6IHtAbGluayBodHRwczovL3d3dy50ZXJyYWZvcm0uaW8vZG9jcy9wcm92aWRlcnMvYXdzY2Mvci9xdWlja3NpZ2h0X2Rhc2hib2FyZC5odG1sI3ZhbHVlcyBRdWlja3NpZ2h0RGFzaGJvYXJkI3ZhbHVlc31cbiAgKi9cbiAgcmVhZG9ubHkgdmFsdWVzOiBudW1iZXJbXTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIHF1aWNrc2lnaHREYXNoYm9hcmRQYXJhbWV0ZXJzRGVjaW1hbFBhcmFtZXRlcnNUb1RlcnJhZm9ybShzdHJ1Y3Q/OiBRdWlja3NpZ2h0RGFzaGJvYXJkUGFyYW1ldGVyc0RlY2ltYWxQYXJhbWV0ZXJzKTogYW55IHtcbiAgaWYgKCFjZGt0Zi5jYW5JbnNwZWN0KHN0cnVjdCkpIHsgcmV0dXJuIHN0cnVjdDsgfVxuICByZXR1cm4ge1xuICAgIG5hbWU6IGNka3RmLnN0cmluZ1RvVGVycmFmb3JtKHN0cnVjdCEubmFtZSksXG4gICAgdmFsdWVzOiBjZGt0Zi5saXN0TWFwcGVyKGNka3RmLm51bWJlclRvVGVycmFmb3JtKShzdHJ1Y3QhLnZhbHVlcyksXG4gIH1cbn1cblxuZXhwb3J0IGludGVyZmFjZSBRdWlja3NpZ2h0RGFzaGJvYXJkUGFyYW1ldGVyc0ludGVnZXJQYXJhbWV0ZXJzIHtcbiAgLyoqXG4gICogPHA+VGhlIG5hbWUgb2YgdGhlIGludGVnZXIgcGFyYW1ldGVyLjwvcD5cbiAgKiBcbiAgKiBEb2NzIGF0IFRlcnJhZm9ybSBSZWdpc3RyeToge0BsaW5rIGh0dHBzOi8vd3d3LnRlcnJhZm9ybS5pby9kb2NzL3Byb3ZpZGVycy9hd3NjYy9yL3F1aWNrc2lnaHRfZGFzaGJvYXJkLmh0bWwjbmFtZSBRdWlja3NpZ2h0RGFzaGJvYXJkI25hbWV9XG4gICovXG4gIHJlYWRvbmx5IG5hbWU6IHN0cmluZztcbiAgLyoqXG4gICogPHA+VGhlIHZhbHVlcyBmb3IgdGhlIGludGVnZXIgcGFyYW1ldGVyLjwvcD5cbiAgKiBcbiAgKiBEb2NzIGF0IFRlcnJhZm9ybSBSZWdpc3RyeToge0BsaW5rIGh0dHBzOi8vd3d3LnRlcnJhZm9ybS5pby9kb2NzL3Byb3ZpZGVycy9hd3NjYy9yL3F1aWNrc2lnaHRfZGFzaGJvYXJkLmh0bWwjdmFsdWVzIFF1aWNrc2lnaHREYXNoYm9hcmQjdmFsdWVzfVxuICAqL1xuICByZWFkb25seSB2YWx1ZXM6IG51bWJlcltdO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gcXVpY2tzaWdodERhc2hib2FyZFBhcmFtZXRlcnNJbnRlZ2VyUGFyYW1ldGVyc1RvVGVycmFmb3JtKHN0cnVjdD86IFF1aWNrc2lnaHREYXNoYm9hcmRQYXJhbWV0ZXJzSW50ZWdlclBhcmFtZXRlcnMpOiBhbnkge1xuICBpZiAoIWNka3RmLmNhbkluc3BlY3Qoc3RydWN0KSkgeyByZXR1cm4gc3RydWN0OyB9XG4gIHJldHVybiB7XG4gICAgbmFtZTogY2RrdGYuc3RyaW5nVG9UZXJyYWZvcm0oc3RydWN0IS5uYW1lKSxcbiAgICB2YWx1ZXM6IGNka3RmLmxpc3RNYXBwZXIoY2RrdGYubnVtYmVyVG9UZXJyYWZvcm0pKHN0cnVjdCEudmFsdWVzKSxcbiAgfVxufVxuXG5leHBvcnQgaW50ZXJmYWNlIFF1aWNrc2lnaHREYXNoYm9hcmRQYXJhbWV0ZXJzU3RyaW5nUGFyYW1ldGVycyB7XG4gIC8qKlxuICAqIDxwPkEgZGlzcGxheSBuYW1lIGZvciBhIHN0cmluZyBwYXJhbWV0ZXIuPC9wPlxuICAqIFxuICAqIERvY3MgYXQgVGVycmFmb3JtIFJlZ2lzdHJ5OiB7QGxpbmsgaHR0cHM6Ly93d3cudGVycmFmb3JtLmlvL2RvY3MvcHJvdmlkZXJzL2F3c2NjL3IvcXVpY2tzaWdodF9kYXNoYm9hcmQuaHRtbCNuYW1lIFF1aWNrc2lnaHREYXNoYm9hcmQjbmFtZX1cbiAgKi9cbiAgcmVhZG9ubHkgbmFtZTogc3RyaW5nO1xuICAvKipcbiAgKiA8cD5UaGUgdmFsdWVzIG9mIGEgc3RyaW5nIHBhcmFtZXRlci48L3A+XG4gICogXG4gICogRG9jcyBhdCBUZXJyYWZvcm0gUmVnaXN0cnk6IHtAbGluayBodHRwczovL3d3dy50ZXJyYWZvcm0uaW8vZG9jcy9wcm92aWRlcnMvYXdzY2Mvci9xdWlja3NpZ2h0X2Rhc2hib2FyZC5odG1sI3ZhbHVlcyBRdWlja3NpZ2h0RGFzaGJvYXJkI3ZhbHVlc31cbiAgKi9cbiAgcmVhZG9ubHkgdmFsdWVzOiBzdHJpbmdbXTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIHF1aWNrc2lnaHREYXNoYm9hcmRQYXJhbWV0ZXJzU3RyaW5nUGFyYW1ldGVyc1RvVGVycmFmb3JtKHN0cnVjdD86IFF1aWNrc2lnaHREYXNoYm9hcmRQYXJhbWV0ZXJzU3RyaW5nUGFyYW1ldGVycyk6IGFueSB7XG4gIGlmICghY2RrdGYuY2FuSW5zcGVjdChzdHJ1Y3QpKSB7IHJldHVybiBzdHJ1Y3Q7IH1cbiAgcmV0dXJuIHtcbiAgICBuYW1lOiBjZGt0Zi5zdHJpbmdUb1RlcnJhZm9ybShzdHJ1Y3QhLm5hbWUpLFxuICAgIHZhbHVlczogY2RrdGYubGlzdE1hcHBlcihjZGt0Zi5zdHJpbmdUb1RlcnJhZm9ybSkoc3RydWN0IS52YWx1ZXMpLFxuICB9XG59XG5cbmV4cG9ydCBpbnRlcmZhY2UgUXVpY2tzaWdodERhc2hib2FyZFBhcmFtZXRlcnMge1xuICAvKipcbiAgKiA8cD5EYXRlLXRpbWUgcGFyYW1ldGVycy48L3A+XG4gICogXG4gICogRG9jcyBhdCBUZXJyYWZvcm0gUmVnaXN0cnk6IHtAbGluayBodHRwczovL3d3dy50ZXJyYWZvcm0uaW8vZG9jcy9wcm92aWRlcnMvYXdzY2Mvci9xdWlja3NpZ2h0X2Rhc2hib2FyZC5odG1sI2RhdGVfdGltZV9wYXJhbWV0ZXJzIFF1aWNrc2lnaHREYXNoYm9hcmQjZGF0ZV90aW1lX3BhcmFtZXRlcnN9XG4gICovXG4gIHJlYWRvbmx5IGRhdGVUaW1lUGFyYW1ldGVycz86IFF1aWNrc2lnaHREYXNoYm9hcmRQYXJhbWV0ZXJzRGF0ZVRpbWVQYXJhbWV0ZXJzW107XG4gIC8qKlxuICAqIDxwPkRlY2ltYWwgcGFyYW1ldGVycy48L3A+XG4gICogXG4gICogRG9jcyBhdCBUZXJyYWZvcm0gUmVnaXN0cnk6IHtAbGluayBodHRwczovL3d3dy50ZXJyYWZvcm0uaW8vZG9jcy9wcm92aWRlcnMvYXdzY2Mvci9xdWlja3NpZ2h0X2Rhc2hib2FyZC5odG1sI2RlY2ltYWxfcGFyYW1ldGVycyBRdWlja3NpZ2h0RGFzaGJvYXJkI2RlY2ltYWxfcGFyYW1ldGVyc31cbiAgKi9cbiAgcmVhZG9ubHkgZGVjaW1hbFBhcmFtZXRlcnM/OiBRdWlja3NpZ2h0RGFzaGJvYXJkUGFyYW1ldGVyc0RlY2ltYWxQYXJhbWV0ZXJzW107XG4gIC8qKlxuICAqIDxwPkludGVnZXIgcGFyYW1ldGVycy48L3A+XG4gICogXG4gICogRG9jcyBhdCBUZXJyYWZvcm0gUmVnaXN0cnk6IHtAbGluayBodHRwczovL3d3dy50ZXJyYWZvcm0uaW8vZG9jcy9wcm92aWRlcnMvYXdzY2Mvci9xdWlja3NpZ2h0X2Rhc2hib2FyZC5odG1sI2ludGVnZXJfcGFyYW1ldGVycyBRdWlja3NpZ2h0RGFzaGJvYXJkI2ludGVnZXJfcGFyYW1ldGVyc31cbiAgKi9cbiAgcmVhZG9ubHkgaW50ZWdlclBhcmFtZXRlcnM/OiBRdWlja3NpZ2h0RGFzaGJvYXJkUGFyYW1ldGVyc0ludGVnZXJQYXJhbWV0ZXJzW107XG4gIC8qKlxuICAqIDxwPlN0cmluZyBwYXJhbWV0ZXJzLjwvcD5cbiAgKiBcbiAgKiBEb2NzIGF0IFRlcnJhZm9ybSBSZWdpc3RyeToge0BsaW5rIGh0dHBzOi8vd3d3LnRlcnJhZm9ybS5pby9kb2NzL3Byb3ZpZGVycy9hd3NjYy9yL3F1aWNrc2lnaHRfZGFzaGJvYXJkLmh0bWwjc3RyaW5nX3BhcmFtZXRlcnMgUXVpY2tzaWdodERhc2hib2FyZCNzdHJpbmdfcGFyYW1ldGVyc31cbiAgKi9cbiAgcmVhZG9ubHkgc3RyaW5nUGFyYW1ldGVycz86IFF1aWNrc2lnaHREYXNoYm9hcmRQYXJhbWV0ZXJzU3RyaW5nUGFyYW1ldGVyc1tdO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gcXVpY2tzaWdodERhc2hib2FyZFBhcmFtZXRlcnNUb1RlcnJhZm9ybShzdHJ1Y3Q/OiBRdWlja3NpZ2h0RGFzaGJvYXJkUGFyYW1ldGVycyk6IGFueSB7XG4gIGlmICghY2RrdGYuY2FuSW5zcGVjdChzdHJ1Y3QpKSB7IHJldHVybiBzdHJ1Y3Q7IH1cbiAgcmV0dXJuIHtcbiAgICBkYXRlX3RpbWVfcGFyYW1ldGVyczogY2RrdGYubGlzdE1hcHBlcihxdWlja3NpZ2h0RGFzaGJvYXJkUGFyYW1ldGVyc0RhdGVUaW1lUGFyYW1ldGVyc1RvVGVycmFmb3JtKShzdHJ1Y3QhLmRhdGVUaW1lUGFyYW1ldGVycyksXG4gICAgZGVjaW1hbF9wYXJhbWV0ZXJzOiBjZGt0Zi5saXN0TWFwcGVyKHF1aWNrc2lnaHREYXNoYm9hcmRQYXJhbWV0ZXJzRGVjaW1hbFBhcmFtZXRlcnNUb1RlcnJhZm9ybSkoc3RydWN0IS5kZWNpbWFsUGFyYW1ldGVycyksXG4gICAgaW50ZWdlcl9wYXJhbWV0ZXJzOiBjZGt0Zi5saXN0TWFwcGVyKHF1aWNrc2lnaHREYXNoYm9hcmRQYXJhbWV0ZXJzSW50ZWdlclBhcmFtZXRlcnNUb1RlcnJhZm9ybSkoc3RydWN0IS5pbnRlZ2VyUGFyYW1ldGVycyksXG4gICAgc3RyaW5nX3BhcmFtZXRlcnM6IGNka3RmLmxpc3RNYXBwZXIocXVpY2tzaWdodERhc2hib2FyZFBhcmFtZXRlcnNTdHJpbmdQYXJhbWV0ZXJzVG9UZXJyYWZvcm0pKHN0cnVjdCEuc3RyaW5nUGFyYW1ldGVycyksXG4gIH1cbn1cblxuZXhwb3J0IGludGVyZmFjZSBRdWlja3NpZ2h0RGFzaGJvYXJkUGVybWlzc2lvbnMge1xuICAvKipcbiAgKiA8cD5UaGUgSUFNIGFjdGlvbiB0byBncmFudCBvciByZXZva2UgcGVybWlzc2lvbnMgb24uPC9wPlxuICAqIFxuICAqIERvY3MgYXQgVGVycmFmb3JtIFJlZ2lzdHJ5OiB7QGxpbmsgaHR0cHM6Ly93d3cudGVycmFmb3JtLmlvL2RvY3MvcHJvdmlkZXJzL2F3c2NjL3IvcXVpY2tzaWdodF9kYXNoYm9hcmQuaHRtbCNhY3Rpb25zIFF1aWNrc2lnaHREYXNoYm9hcmQjYWN0aW9uc31cbiAgKi9cbiAgcmVhZG9ubHkgYWN0aW9uczogc3RyaW5nW107XG4gIC8qKlxuICAqIDxwPlRoZSBBbWF6b24gUmVzb3VyY2UgTmFtZSAoQVJOKSBvZiB0aGUgcHJpbmNpcGFsLiBUaGlzIGNhbiBiZSBvbmUgb2YgdGhlXG4gICAgICAgICAgICBmb2xsb3dpbmc6PC9wPlxuICAgICAgICA8dWw+XG4gICAgICAgICAgICA8bGk+XG4gICAgICAgICAgICAgICAgPHA+VGhlIEFSTiBvZiBhbiBBbWF6b24gUXVpY2tTaWdodCB1c2VyIG9yIGdyb3VwIGFzc29jaWF0ZWQgd2l0aCBhIGRhdGEgc291cmNlIG9yIGRhdGFzZXQuIChUaGlzIGlzIGNvbW1vbi4pPC9wPlxuICAgICAgICAgICAgPC9saT5cbiAgICAgICAgICAgIDxsaT5cbiAgICAgICAgICAgICAgICA8cD5UaGUgQVJOIG9mIGFuIEFtYXpvbiBRdWlja1NpZ2h0IHVzZXIsIGdyb3VwLCBvciBuYW1lc3BhY2UgYXNzb2NpYXRlZCB3aXRoIGFuIGFuYWx5c2lzLCBkYXNoYm9hcmQsIHRlbXBsYXRlLCBvciB0aGVtZS4gKFRoaXMgaXMgY29tbW9uLik8L3A+XG4gICAgICAgICAgICA8L2xpPlxuICAgICAgICAgICAgPGxpPlxuICAgICAgICAgICAgICAgIDxwPlRoZSBBUk4gb2YgYW4gQVdTIGFjY291bnQgcm9vdDogVGhpcyBpcyBhbiBJQU0gQVJOIHJhdGhlciB0aGFuIGEgUXVpY2tTaWdodFxuICAgICAgICAgICAgICAgICAgICBBUk4uIFVzZSB0aGlzIG9wdGlvbiBvbmx5IHRvIHNoYXJlIHJlc291cmNlcyAodGVtcGxhdGVzKSBhY3Jvc3MgQVdTIGFjY291bnRzLlxuICAgICAgICAgICAgICAgICAgICAoVGhpcyBpcyBsZXNzIGNvbW1vbi4pIDwvcD5cbiAgICAgICAgICAgIDwvbGk+XG4gICAgICAgICA8L3VsPlxuICAqIFxuICAqIERvY3MgYXQgVGVycmFmb3JtIFJlZ2lzdHJ5OiB7QGxpbmsgaHR0cHM6Ly93d3cudGVycmFmb3JtLmlvL2RvY3MvcHJvdmlkZXJzL2F3c2NjL3IvcXVpY2tzaWdodF9kYXNoYm9hcmQuaHRtbCNwcmluY2lwYWwgUXVpY2tzaWdodERhc2hib2FyZCNwcmluY2lwYWx9XG4gICovXG4gIHJlYWRvbmx5IHByaW5jaXBhbDogc3RyaW5nO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gcXVpY2tzaWdodERhc2hib2FyZFBlcm1pc3Npb25zVG9UZXJyYWZvcm0oc3RydWN0PzogUXVpY2tzaWdodERhc2hib2FyZFBlcm1pc3Npb25zKTogYW55IHtcbiAgaWYgKCFjZGt0Zi5jYW5JbnNwZWN0KHN0cnVjdCkpIHsgcmV0dXJuIHN0cnVjdDsgfVxuICByZXR1cm4ge1xuICAgIGFjdGlvbnM6IGNka3RmLmxpc3RNYXBwZXIoY2RrdGYuc3RyaW5nVG9UZXJyYWZvcm0pKHN0cnVjdCEuYWN0aW9ucyksXG4gICAgcHJpbmNpcGFsOiBjZGt0Zi5zdHJpbmdUb1RlcnJhZm9ybShzdHJ1Y3QhLnByaW5jaXBhbCksXG4gIH1cbn1cblxuZXhwb3J0IGludGVyZmFjZSBRdWlja3NpZ2h0RGFzaGJvYXJkU291cmNlRW50aXR5U291cmNlVGVtcGxhdGVEYXRhU2V0UmVmZXJlbmNlcyB7XG4gIC8qKlxuICAqIDxwPkRhdGFzZXQgQW1hem9uIFJlc291cmNlIE5hbWUgKEFSTikuPC9wPlxuICAqIFxuICAqIERvY3MgYXQgVGVycmFmb3JtIFJlZ2lzdHJ5OiB7QGxpbmsgaHR0cHM6Ly93d3cudGVycmFmb3JtLmlvL2RvY3MvcHJvdmlkZXJzL2F3c2NjL3IvcXVpY2tzaWdodF9kYXNoYm9hcmQuaHRtbCNkYXRhX3NldF9hcm4gUXVpY2tzaWdodERhc2hib2FyZCNkYXRhX3NldF9hcm59XG4gICovXG4gIHJlYWRvbmx5IGRhdGFTZXRBcm46IHN0cmluZztcbiAgLyoqXG4gICogPHA+RGF0YXNldCBwbGFjZWhvbGRlci48L3A+XG4gICogXG4gICogRG9jcyBhdCBUZXJyYWZvcm0gUmVnaXN0cnk6IHtAbGluayBodHRwczovL3d3dy50ZXJyYWZvcm0uaW8vZG9jcy9wcm92aWRlcnMvYXdzY2Mvci9xdWlja3NpZ2h0X2Rhc2hib2FyZC5odG1sI2RhdGFfc2V0X3BsYWNlaG9sZGVyIFF1aWNrc2lnaHREYXNoYm9hcmQjZGF0YV9zZXRfcGxhY2Vob2xkZXJ9XG4gICovXG4gIHJlYWRvbmx5IGRhdGFTZXRQbGFjZWhvbGRlcjogc3RyaW5nO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gcXVpY2tzaWdodERhc2hib2FyZFNvdXJjZUVudGl0eVNvdXJjZVRlbXBsYXRlRGF0YVNldFJlZmVyZW5jZXNUb1RlcnJhZm9ybShzdHJ1Y3Q/OiBRdWlja3NpZ2h0RGFzaGJvYXJkU291cmNlRW50aXR5U291cmNlVGVtcGxhdGVEYXRhU2V0UmVmZXJlbmNlcyk6IGFueSB7XG4gIGlmICghY2RrdGYuY2FuSW5zcGVjdChzdHJ1Y3QpKSB7IHJldHVybiBzdHJ1Y3Q7IH1cbiAgcmV0dXJuIHtcbiAgICBkYXRhX3NldF9hcm46IGNka3RmLnN0cmluZ1RvVGVycmFmb3JtKHN0cnVjdCEuZGF0YVNldEFybiksXG4gICAgZGF0YV9zZXRfcGxhY2Vob2xkZXI6IGNka3RmLnN0cmluZ1RvVGVycmFmb3JtKHN0cnVjdCEuZGF0YVNldFBsYWNlaG9sZGVyKSxcbiAgfVxufVxuXG5leHBvcnQgaW50ZXJmYWNlIFF1aWNrc2lnaHREYXNoYm9hcmRTb3VyY2VFbnRpdHlTb3VyY2VUZW1wbGF0ZSB7XG4gIC8qKlxuICAqIDxwPlRoZSBBbWF6b24gUmVzb3VyY2UgTmFtZSAoQVJOKSBvZiB0aGUgcmVzb3VyY2UuPC9wPlxuICAqIFxuICAqIERvY3MgYXQgVGVycmFmb3JtIFJlZ2lzdHJ5OiB7QGxpbmsgaHR0cHM6Ly93d3cudGVycmFmb3JtLmlvL2RvY3MvcHJvdmlkZXJzL2F3c2NjL3IvcXVpY2tzaWdodF9kYXNoYm9hcmQuaHRtbCNhcm4gUXVpY2tzaWdodERhc2hib2FyZCNhcm59XG4gICovXG4gIHJlYWRvbmx5IGFybjogc3RyaW5nO1xuICAvKipcbiAgKiA8cD5EYXRhc2V0IHJlZmVyZW5jZXMuPC9wPlxuICAqIFxuICAqIERvY3MgYXQgVGVycmFmb3JtIFJlZ2lzdHJ5OiB7QGxpbmsgaHR0cHM6Ly93d3cudGVycmFmb3JtLmlvL2RvY3MvcHJvdmlkZXJzL2F3c2NjL3IvcXVpY2tzaWdodF9kYXNoYm9hcmQuaHRtbCNkYXRhX3NldF9yZWZlcmVuY2VzIFF1aWNrc2lnaHREYXNoYm9hcmQjZGF0YV9zZXRfcmVmZXJlbmNlc31cbiAgKi9cbiAgcmVhZG9ubHkgZGF0YVNldFJlZmVyZW5jZXM6IFF1aWNrc2lnaHREYXNoYm9hcmRTb3VyY2VFbnRpdHlTb3VyY2VUZW1wbGF0ZURhdGFTZXRSZWZlcmVuY2VzW107XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBxdWlja3NpZ2h0RGFzaGJvYXJkU291cmNlRW50aXR5U291cmNlVGVtcGxhdGVUb1RlcnJhZm9ybShzdHJ1Y3Q/OiBRdWlja3NpZ2h0RGFzaGJvYXJkU291cmNlRW50aXR5U291cmNlVGVtcGxhdGUpOiBhbnkge1xuICBpZiAoIWNka3RmLmNhbkluc3BlY3Qoc3RydWN0KSkgeyByZXR1cm4gc3RydWN0OyB9XG4gIHJldHVybiB7XG4gICAgYXJuOiBjZGt0Zi5zdHJpbmdUb1RlcnJhZm9ybShzdHJ1Y3QhLmFybiksXG4gICAgZGF0YV9zZXRfcmVmZXJlbmNlczogY2RrdGYubGlzdE1hcHBlcihxdWlja3NpZ2h0RGFzaGJvYXJkU291cmNlRW50aXR5U291cmNlVGVtcGxhdGVEYXRhU2V0UmVmZXJlbmNlc1RvVGVycmFmb3JtKShzdHJ1Y3QhLmRhdGFTZXRSZWZlcmVuY2VzKSxcbiAgfVxufVxuXG5leHBvcnQgaW50ZXJmYWNlIFF1aWNrc2lnaHREYXNoYm9hcmRTb3VyY2VFbnRpdHkge1xuICAvKipcbiAgKiA8cD5EYXNoYm9hcmQgc291cmNlIHRlbXBsYXRlLjwvcD5cbiAgKiBcbiAgKiBEb2NzIGF0IFRlcnJhZm9ybSBSZWdpc3RyeToge0BsaW5rIGh0dHBzOi8vd3d3LnRlcnJhZm9ybS5pby9kb2NzL3Byb3ZpZGVycy9hd3NjYy9yL3F1aWNrc2lnaHRfZGFzaGJvYXJkLmh0bWwjc291cmNlX3RlbXBsYXRlIFF1aWNrc2lnaHREYXNoYm9hcmQjc291cmNlX3RlbXBsYXRlfVxuICAqL1xuICByZWFkb25seSBzb3VyY2VUZW1wbGF0ZT86IFF1aWNrc2lnaHREYXNoYm9hcmRTb3VyY2VFbnRpdHlTb3VyY2VUZW1wbGF0ZTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIHF1aWNrc2lnaHREYXNoYm9hcmRTb3VyY2VFbnRpdHlUb1RlcnJhZm9ybShzdHJ1Y3Q/OiBRdWlja3NpZ2h0RGFzaGJvYXJkU291cmNlRW50aXR5KTogYW55IHtcbiAgaWYgKCFjZGt0Zi5jYW5JbnNwZWN0KHN0cnVjdCkpIHsgcmV0dXJuIHN0cnVjdDsgfVxuICByZXR1cm4ge1xuICAgIHNvdXJjZV90ZW1wbGF0ZTogcXVpY2tzaWdodERhc2hib2FyZFNvdXJjZUVudGl0eVNvdXJjZVRlbXBsYXRlVG9UZXJyYWZvcm0oc3RydWN0IS5zb3VyY2VUZW1wbGF0ZSksXG4gIH1cbn1cblxuZXhwb3J0IGludGVyZmFjZSBRdWlja3NpZ2h0RGFzaGJvYXJkVGFncyB7XG4gIC8qKlxuICAqIDxwPlRhZyBrZXkuPC9wPlxuICAqIFxuICAqIERvY3MgYXQgVGVycmFmb3JtIFJlZ2lzdHJ5OiB7QGxpbmsgaHR0cHM6Ly93d3cudGVycmFmb3JtLmlvL2RvY3MvcHJvdmlkZXJzL2F3c2NjL3IvcXVpY2tzaWdodF9kYXNoYm9hcmQuaHRtbCNrZXkgUXVpY2tzaWdodERhc2hib2FyZCNrZXl9XG4gICovXG4gIHJlYWRvbmx5IGtleTogc3RyaW5nO1xuICAvKipcbiAgKiA8cD5UYWcgdmFsdWUuPC9wPlxuICAqIFxuICAqIERvY3MgYXQgVGVycmFmb3JtIFJlZ2lzdHJ5OiB7QGxpbmsgaHR0cHM6Ly93d3cudGVycmFmb3JtLmlvL2RvY3MvcHJvdmlkZXJzL2F3c2NjL3IvcXVpY2tzaWdodF9kYXNoYm9hcmQuaHRtbCN2YWx1ZSBRdWlja3NpZ2h0RGFzaGJvYXJkI3ZhbHVlfVxuICAqL1xuICByZWFkb25seSB2YWx1ZTogc3RyaW5nO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gcXVpY2tzaWdodERhc2hib2FyZFRhZ3NUb1RlcnJhZm9ybShzdHJ1Y3Q/OiBRdWlja3NpZ2h0RGFzaGJvYXJkVGFncyk6IGFueSB7XG4gIGlmICghY2RrdGYuY2FuSW5zcGVjdChzdHJ1Y3QpKSB7IHJldHVybiBzdHJ1Y3Q7IH1cbiAgcmV0dXJuIHtcbiAgICBrZXk6IGNka3RmLnN0cmluZ1RvVGVycmFmb3JtKHN0cnVjdCEua2V5KSxcbiAgICB2YWx1ZTogY2RrdGYuc3RyaW5nVG9UZXJyYWZvcm0oc3RydWN0IS52YWx1ZSksXG4gIH1cbn1cblxuZXhwb3J0IGludGVyZmFjZSBRdWlja3NpZ2h0RGFzaGJvYXJkVmVyc2lvbkVycm9ycyB7XG4gIC8qKlxuICAqIDxwPk1lc3NhZ2UuPC9wPlxuICAqIFxuICAqIERvY3MgYXQgVGVycmFmb3JtIFJlZ2lzdHJ5OiB7QGxpbmsgaHR0cHM6Ly93d3cudGVycmFmb3JtLmlvL2RvY3MvcHJvdmlkZXJzL2F3c2NjL3IvcXVpY2tzaWdodF9kYXNoYm9hcmQuaHRtbCNtZXNzYWdlIFF1aWNrc2lnaHREYXNoYm9hcmQjbWVzc2FnZX1cbiAgKi9cbiAgcmVhZG9ubHkgbWVzc2FnZT86IHN0cmluZztcbiAgLyoqXG4gICogRG9jcyBhdCBUZXJyYWZvcm0gUmVnaXN0cnk6IHtAbGluayBodHRwczovL3d3dy50ZXJyYWZvcm0uaW8vZG9jcy9wcm92aWRlcnMvYXdzY2Mvci9xdWlja3NpZ2h0X2Rhc2hib2FyZC5odG1sI3R5cGUgUXVpY2tzaWdodERhc2hib2FyZCN0eXBlfVxuICAqL1xuICByZWFkb25seSB0eXBlPzogc3RyaW5nO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gcXVpY2tzaWdodERhc2hib2FyZFZlcnNpb25FcnJvcnNUb1RlcnJhZm9ybShzdHJ1Y3Q/OiBRdWlja3NpZ2h0RGFzaGJvYXJkVmVyc2lvbkVycm9ycyk6IGFueSB7XG4gIGlmICghY2RrdGYuY2FuSW5zcGVjdChzdHJ1Y3QpKSB7IHJldHVybiBzdHJ1Y3Q7IH1cbiAgcmV0dXJuIHtcbiAgICBtZXNzYWdlOiBjZGt0Zi5zdHJpbmdUb1RlcnJhZm9ybShzdHJ1Y3QhLm1lc3NhZ2UpLFxuICAgIHR5cGU6IGNka3RmLnN0cmluZ1RvVGVycmFmb3JtKHN0cnVjdCEudHlwZSksXG4gIH1cbn1cblxuZXhwb3J0IGludGVyZmFjZSBRdWlja3NpZ2h0RGFzaGJvYXJkVmVyc2lvblNoZWV0cyB7XG4gIC8qKlxuICAqIDxwPlRoZSBuYW1lIG9mIGEgc2hlZXQuIFRoaXMgbmFtZSBpcyBkaXNwbGF5ZWQgb24gdGhlIHNoZWV0J3MgdGFiIGluIHRoZSBRdWlja1NpZ2h0XG4gICAgICAgICAgICBjb25zb2xlLjwvcD5cbiAgKiBcbiAgKiBEb2NzIGF0IFRlcnJhZm9ybSBSZWdpc3RyeToge0BsaW5rIGh0dHBzOi8vd3d3LnRlcnJhZm9ybS5pby9kb2NzL3Byb3ZpZGVycy9hd3NjYy9yL3F1aWNrc2lnaHRfZGFzaGJvYXJkLmh0bWwjbmFtZSBRdWlja3NpZ2h0RGFzaGJvYXJkI25hbWV9XG4gICovXG4gIHJlYWRvbmx5IG5hbWU/OiBzdHJpbmc7XG4gIC8qKlxuICAqIDxwPlRoZSB1bmlxdWUgaWRlbnRpZmllciBhc3NvY2lhdGVkIHdpdGggYSBzaGVldC48L3A+XG4gICogXG4gICogRG9jcyBhdCBUZXJyYWZvcm0gUmVnaXN0cnk6IHtAbGluayBodHRwczovL3d3dy50ZXJyYWZvcm0uaW8vZG9jcy9wcm92aWRlcnMvYXdzY2Mvci9xdWlja3NpZ2h0X2Rhc2hib2FyZC5odG1sI3NoZWV0X2lkIFF1aWNrc2lnaHREYXNoYm9hcmQjc2hlZXRfaWR9XG4gICovXG4gIHJlYWRvbmx5IHNoZWV0SWQ/OiBzdHJpbmc7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBxdWlja3NpZ2h0RGFzaGJvYXJkVmVyc2lvblNoZWV0c1RvVGVycmFmb3JtKHN0cnVjdD86IFF1aWNrc2lnaHREYXNoYm9hcmRWZXJzaW9uU2hlZXRzKTogYW55IHtcbiAgaWYgKCFjZGt0Zi5jYW5JbnNwZWN0KHN0cnVjdCkpIHsgcmV0dXJuIHN0cnVjdDsgfVxuICByZXR1cm4ge1xuICAgIG5hbWU6IGNka3RmLnN0cmluZ1RvVGVycmFmb3JtKHN0cnVjdCEubmFtZSksXG4gICAgc2hlZXRfaWQ6IGNka3RmLnN0cmluZ1RvVGVycmFmb3JtKHN0cnVjdCEuc2hlZXRJZCksXG4gIH1cbn1cblxuZXhwb3J0IGNsYXNzIFF1aWNrc2lnaHREYXNoYm9hcmRWZXJzaW9uIGV4dGVuZHMgY2RrdGYuQ29tcGxleENvbXB1dGVkTGlzdCB7XG5cbiAgLy8gYXJuIC0gY29tcHV0ZWQ6IHRydWUsIG9wdGlvbmFsOiB0cnVlLCByZXF1aXJlZDogZmFsc2VcbiAgcHVibGljIGdldCBhcm4oKSB7XG4gICAgcmV0dXJuIHRoaXMuZ2V0U3RyaW5nQXR0cmlidXRlKCdhcm4nKTtcbiAgfVxuXG4gIC8vIGNyZWF0ZWRfdGltZSAtIGNvbXB1dGVkOiB0cnVlLCBvcHRpb25hbDogdHJ1ZSwgcmVxdWlyZWQ6IGZhbHNlXG4gIHByaXZhdGUgX2NyZWF0ZWRUaW1lPzogc3RyaW5nO1xuICBwdWJsaWMgZ2V0IGNyZWF0ZWRUaW1lKCkge1xuICAgIHJldHVybiB0aGlzLmdldFN0cmluZ0F0dHJpYnV0ZSgnY3JlYXRlZF90aW1lJyk7XG4gIH1cbiAgcHVibGljIHNldCBjcmVhdGVkVGltZSh2YWx1ZTogc3RyaW5nKSB7XG4gICAgdGhpcy5fY3JlYXRlZFRpbWUgPSB2YWx1ZTtcbiAgfVxuICBwdWJsaWMgcmVzZXRDcmVhdGVkVGltZSgpIHtcbiAgICB0aGlzLl9jcmVhdGVkVGltZSA9IHVuZGVmaW5lZDtcbiAgfVxuICAvLyBUZW1wb3JhcmlseSBleHBvc2UgaW5wdXQgdmFsdWUuIFVzZSB3aXRoIGNhdXRpb24uXG4gIHB1YmxpYyBnZXQgY3JlYXRlZFRpbWVJbnB1dCgpIHtcbiAgICByZXR1cm4gdGhpcy5fY3JlYXRlZFRpbWVcbiAgfVxuXG4gIC8vIGRhdGFfc2V0X2FybnMgLSBjb21wdXRlZDogdHJ1ZSwgb3B0aW9uYWw6IHRydWUsIHJlcXVpcmVkOiBmYWxzZVxuICBwcml2YXRlIF9kYXRhU2V0QXJucz86IHN0cmluZ1tdO1xuICBwdWJsaWMgZ2V0IGRhdGFTZXRBcm5zKCkge1xuICAgIHJldHVybiB0aGlzLmdldExpc3RBdHRyaWJ1dGUoJ2RhdGFfc2V0X2FybnMnKTtcbiAgfVxuICBwdWJsaWMgc2V0IGRhdGFTZXRBcm5zKHZhbHVlOiBzdHJpbmdbXSkge1xuICAgIHRoaXMuX2RhdGFTZXRBcm5zID0gdmFsdWU7XG4gIH1cbiAgcHVibGljIHJlc2V0RGF0YVNldEFybnMoKSB7XG4gICAgdGhpcy5fZGF0YVNldEFybnMgPSB1bmRlZmluZWQ7XG4gIH1cbiAgLy8gVGVtcG9yYXJpbHkgZXhwb3NlIGlucHV0IHZhbHVlLiBVc2Ugd2l0aCBjYXV0aW9uLlxuICBwdWJsaWMgZ2V0IGRhdGFTZXRBcm5zSW5wdXQoKSB7XG4gICAgcmV0dXJuIHRoaXMuX2RhdGFTZXRBcm5zXG4gIH1cblxuICAvLyBkZXNjcmlwdGlvbiAtIGNvbXB1dGVkOiB0cnVlLCBvcHRpb25hbDogdHJ1ZSwgcmVxdWlyZWQ6IGZhbHNlXG4gIHByaXZhdGUgX2Rlc2NyaXB0aW9uPzogc3RyaW5nO1xuICBwdWJsaWMgZ2V0IGRlc2NyaXB0aW9uKCkge1xuICAgIHJldHVybiB0aGlzLmdldFN0cmluZ0F0dHJpYnV0ZSgnZGVzY3JpcHRpb24nKTtcbiAgfVxuICBwdWJsaWMgc2V0IGRlc2NyaXB0aW9uKHZhbHVlOiBzdHJpbmcpIHtcbiAgICB0aGlzLl9kZXNjcmlwdGlvbiA9IHZhbHVlO1xuICB9XG4gIHB1YmxpYyByZXNldERlc2NyaXB0aW9uKCkge1xuICAgIHRoaXMuX2Rlc2NyaXB0aW9uID0gdW5kZWZpbmVkO1xuICB9XG4gIC8vIFRlbXBvcmFyaWx5IGV4cG9zZSBpbnB1dCB2YWx1ZS4gVXNlIHdpdGggY2F1dGlvbi5cbiAgcHVibGljIGdldCBkZXNjcmlwdGlvbklucHV0KCkge1xuICAgIHJldHVybiB0aGlzLl9kZXNjcmlwdGlvblxuICB9XG5cbiAgLy8gZXJyb3JzIC0gY29tcHV0ZWQ6IHRydWUsIG9wdGlvbmFsOiB0cnVlLCByZXF1aXJlZDogZmFsc2VcbiAgcHJpdmF0ZSBfZXJyb3JzPzogUXVpY2tzaWdodERhc2hib2FyZFZlcnNpb25FcnJvcnNbXTtcbiAgcHVibGljIGdldCBlcnJvcnMoKSB7XG4gICAgcmV0dXJuIHRoaXMuaW50ZXJwb2xhdGlvbkZvckF0dHJpYnV0ZSgnZXJyb3JzJykgYXMgYW55O1xuICB9XG4gIHB1YmxpYyBzZXQgZXJyb3JzKHZhbHVlOiBRdWlja3NpZ2h0RGFzaGJvYXJkVmVyc2lvbkVycm9yc1tdKSB7XG4gICAgdGhpcy5fZXJyb3JzID0gdmFsdWU7XG4gIH1cbiAgcHVibGljIHJlc2V0RXJyb3JzKCkge1xuICAgIHRoaXMuX2Vycm9ycyA9IHVuZGVmaW5lZDtcbiAgfVxuICAvLyBUZW1wb3JhcmlseSBleHBvc2UgaW5wdXQgdmFsdWUuIFVzZSB3aXRoIGNhdXRpb24uXG4gIHB1YmxpYyBnZXQgZXJyb3JzSW5wdXQoKSB7XG4gICAgcmV0dXJuIHRoaXMuX2Vycm9yc1xuICB9XG5cbiAgLy8gc2hlZXRzIC0gY29tcHV0ZWQ6IHRydWUsIG9wdGlvbmFsOiB0cnVlLCByZXF1aXJlZDogZmFsc2VcbiAgcHJpdmF0ZSBfc2hlZXRzPzogUXVpY2tzaWdodERhc2hib2FyZFZlcnNpb25TaGVldHNbXTtcbiAgcHVibGljIGdldCBzaGVldHMoKSB7XG4gICAgcmV0dXJuIHRoaXMuaW50ZXJwb2xhdGlvbkZvckF0dHJpYnV0ZSgnc2hlZXRzJykgYXMgYW55O1xuICB9XG4gIHB1YmxpYyBzZXQgc2hlZXRzKHZhbHVlOiBRdWlja3NpZ2h0RGFzaGJvYXJkVmVyc2lvblNoZWV0c1tdKSB7XG4gICAgdGhpcy5fc2hlZXRzID0gdmFsdWU7XG4gIH1cbiAgcHVibGljIHJlc2V0U2hlZXRzKCkge1xuICAgIHRoaXMuX3NoZWV0cyA9IHVuZGVmaW5lZDtcbiAgfVxuICAvLyBUZW1wb3JhcmlseSBleHBvc2UgaW5wdXQgdmFsdWUuIFVzZSB3aXRoIGNhdXRpb24uXG4gIHB1YmxpYyBnZXQgc2hlZXRzSW5wdXQoKSB7XG4gICAgcmV0dXJuIHRoaXMuX3NoZWV0c1xuICB9XG5cbiAgLy8gc291cmNlX2VudGl0eV9hcm4gLSBjb21wdXRlZDogdHJ1ZSwgb3B0aW9uYWw6IHRydWUsIHJlcXVpcmVkOiBmYWxzZVxuICBwcml2YXRlIF9zb3VyY2VFbnRpdHlBcm4/OiBzdHJpbmc7XG4gIHB1YmxpYyBnZXQgc291cmNlRW50aXR5QXJuKCkge1xuICAgIHJldHVybiB0aGlzLmdldFN0cmluZ0F0dHJpYnV0ZSgnc291cmNlX2VudGl0eV9hcm4nKTtcbiAgfVxuICBwdWJsaWMgc2V0IHNvdXJjZUVudGl0eUFybih2YWx1ZTogc3RyaW5nKSB7XG4gICAgdGhpcy5fc291cmNlRW50aXR5QXJuID0gdmFsdWU7XG4gIH1cbiAgcHVibGljIHJlc2V0U291cmNlRW50aXR5QXJuKCkge1xuICAgIHRoaXMuX3NvdXJjZUVudGl0eUFybiA9IHVuZGVmaW5lZDtcbiAgfVxuICAvLyBUZW1wb3JhcmlseSBleHBvc2UgaW5wdXQgdmFsdWUuIFVzZSB3aXRoIGNhdXRpb24uXG4gIHB1YmxpYyBnZXQgc291cmNlRW50aXR5QXJuSW5wdXQoKSB7XG4gICAgcmV0dXJuIHRoaXMuX3NvdXJjZUVudGl0eUFyblxuICB9XG5cbiAgLy8gc3RhdHVzIC0gY29tcHV0ZWQ6IHRydWUsIG9wdGlvbmFsOiB0cnVlLCByZXF1aXJlZDogZmFsc2VcbiAgcHJpdmF0ZSBfc3RhdHVzPzogc3RyaW5nO1xuICBwdWJsaWMgZ2V0IHN0YXR1cygpIHtcbiAgICByZXR1cm4gdGhpcy5nZXRTdHJpbmdBdHRyaWJ1dGUoJ3N0YXR1cycpO1xuICB9XG4gIHB1YmxpYyBzZXQgc3RhdHVzKHZhbHVlOiBzdHJpbmcpIHtcbiAgICB0aGlzLl9zdGF0dXMgPSB2YWx1ZTtcbiAgfVxuICBwdWJsaWMgcmVzZXRTdGF0dXMoKSB7XG4gICAgdGhpcy5fc3RhdHVzID0gdW5kZWZpbmVkO1xuICB9XG4gIC8vIFRlbXBvcmFyaWx5IGV4cG9zZSBpbnB1dCB2YWx1ZS4gVXNlIHdpdGggY2F1dGlvbi5cbiAgcHVibGljIGdldCBzdGF0dXNJbnB1dCgpIHtcbiAgICByZXR1cm4gdGhpcy5fc3RhdHVzXG4gIH1cblxuICAvLyB0aGVtZV9hcm4gLSBjb21wdXRlZDogdHJ1ZSwgb3B0aW9uYWw6IHRydWUsIHJlcXVpcmVkOiBmYWxzZVxuICBwcml2YXRlIF90aGVtZUFybj86IHN0cmluZztcbiAgcHVibGljIGdldCB0aGVtZUFybigpIHtcbiAgICByZXR1cm4gdGhpcy5nZXRTdHJpbmdBdHRyaWJ1dGUoJ3RoZW1lX2FybicpO1xuICB9XG4gIHB1YmxpYyBzZXQgdGhlbWVBcm4odmFsdWU6IHN0cmluZykge1xuICAgIHRoaXMuX3RoZW1lQXJuID0gdmFsdWU7XG4gIH1cbiAgcHVibGljIHJlc2V0VGhlbWVBcm4oKSB7XG4gICAgdGhpcy5fdGhlbWVBcm4gPSB1bmRlZmluZWQ7XG4gIH1cbiAgLy8gVGVtcG9yYXJpbHkgZXhwb3NlIGlucHV0IHZhbHVlLiBVc2Ugd2l0aCBjYXV0aW9uLlxuICBwdWJsaWMgZ2V0IHRoZW1lQXJuSW5wdXQoKSB7XG4gICAgcmV0dXJuIHRoaXMuX3RoZW1lQXJuXG4gIH1cblxuICAvLyB2ZXJzaW9uX251bWJlciAtIGNvbXB1dGVkOiB0cnVlLCBvcHRpb25hbDogdHJ1ZSwgcmVxdWlyZWQ6IGZhbHNlXG4gIHByaXZhdGUgX3ZlcnNpb25OdW1iZXI/OiBudW1iZXI7XG4gIHB1YmxpYyBnZXQgdmVyc2lvbk51bWJlcigpIHtcbiAgICByZXR1cm4gdGhpcy5nZXROdW1iZXJBdHRyaWJ1dGUoJ3ZlcnNpb25fbnVtYmVyJyk7XG4gIH1cbiAgcHVibGljIHNldCB2ZXJzaW9uTnVtYmVyKHZhbHVlOiBudW1iZXIpIHtcbiAgICB0aGlzLl92ZXJzaW9uTnVtYmVyID0gdmFsdWU7XG4gIH1cbiAgcHVibGljIHJlc2V0VmVyc2lvbk51bWJlcigpIHtcbiAgICB0aGlzLl92ZXJzaW9uTnVtYmVyID0gdW5kZWZpbmVkO1xuICB9XG4gIC8vIFRlbXBvcmFyaWx5IGV4cG9zZSBpbnB1dCB2YWx1ZS4gVXNlIHdpdGggY2F1dGlvbi5cbiAgcHVibGljIGdldCB2ZXJzaW9uTnVtYmVySW5wdXQoKSB7XG4gICAgcmV0dXJuIHRoaXMuX3ZlcnNpb25OdW1iZXJcbiAgfVxufVxuXG5leHBvcnQgZnVuY3Rpb24gcXVpY2tzaWdodERhc2hib2FyZFZlcnNpb25Ub1RlcnJhZm9ybShzdHJ1Y3Q/OiBRdWlja3NpZ2h0RGFzaGJvYXJkVmVyc2lvbik6IGFueSB7XG4gIGlmICghY2RrdGYuY2FuSW5zcGVjdChzdHJ1Y3QpKSB7IHJldHVybiBzdHJ1Y3Q7IH1cbiAgcmV0dXJuIHtcbiAgICBhcm46IGNka3RmLnN0cmluZ1RvVGVycmFmb3JtKHN0cnVjdCEuYXJuKSxcbiAgICBjcmVhdGVkX3RpbWU6IGNka3RmLnN0cmluZ1RvVGVycmFmb3JtKHN0cnVjdCEuY3JlYXRlZFRpbWUpLFxuICAgIGRhdGFfc2V0X2FybnM6IGNka3RmLmxpc3RNYXBwZXIoY2RrdGYuc3RyaW5nVG9UZXJyYWZvcm0pKHN0cnVjdCEuZGF0YVNldEFybnMpLFxuICAgIGRlc2NyaXB0aW9uOiBjZGt0Zi5zdHJpbmdUb1RlcnJhZm9ybShzdHJ1Y3QhLmRlc2NyaXB0aW9uKSxcbiAgICBlcnJvcnM6IGNka3RmLmxpc3RNYXBwZXIocXVpY2tzaWdodERhc2hib2FyZFZlcnNpb25FcnJvcnNUb1RlcnJhZm9ybSkoc3RydWN0IS5lcnJvcnMpLFxuICAgIHNoZWV0czogY2RrdGYubGlzdE1hcHBlcihxdWlja3NpZ2h0RGFzaGJvYXJkVmVyc2lvblNoZWV0c1RvVGVycmFmb3JtKShzdHJ1Y3QhLnNoZWV0cyksXG4gICAgc291cmNlX2VudGl0eV9hcm46IGNka3RmLnN0cmluZ1RvVGVycmFmb3JtKHN0cnVjdCEuc291cmNlRW50aXR5QXJuKSxcbiAgICBzdGF0dXM6IGNka3RmLnN0cmluZ1RvVGVycmFmb3JtKHN0cnVjdCEuc3RhdHVzKSxcbiAgICB0aGVtZV9hcm46IGNka3RmLnN0cmluZ1RvVGVycmFmb3JtKHN0cnVjdCEudGhlbWVBcm4pLFxuICAgIHZlcnNpb25fbnVtYmVyOiBjZGt0Zi5udW1iZXJUb1RlcnJhZm9ybShzdHJ1Y3QhLnZlcnNpb25OdW1iZXIpLFxuICB9XG59XG5cblxuLyoqXG4qIFJlcHJlc2VudHMgYSB7QGxpbmsgaHR0cHM6Ly93d3cudGVycmFmb3JtLmlvL2RvY3MvcHJvdmlkZXJzL2F3c2NjL3IvcXVpY2tzaWdodF9kYXNoYm9hcmQuaHRtbCBhd3NjY19xdWlja3NpZ2h0X2Rhc2hib2FyZH1cbiovXG5leHBvcnQgY2xhc3MgUXVpY2tzaWdodERhc2hib2FyZCBleHRlbmRzIGNka3RmLlRlcnJhZm9ybVJlc291cmNlIHtcblxuICAvLyA9PT09PT09PT09PT09PT09PVxuICAvLyBTVEFUSUMgUFJPUEVSVElFU1xuICAvLyA9PT09PT09PT09PT09PT09PVxuICBwdWJsaWMgc3RhdGljIHJlYWRvbmx5IHRmUmVzb3VyY2VUeXBlOiBzdHJpbmcgPSBcImF3c2NjX3F1aWNrc2lnaHRfZGFzaGJvYXJkXCI7XG5cbiAgLy8gPT09PT09PT09PT1cbiAgLy8gSU5JVElBTElaRVJcbiAgLy8gPT09PT09PT09PT1cblxuICAvKipcbiAgKiBDcmVhdGUgYSBuZXcge0BsaW5rIGh0dHBzOi8vd3d3LnRlcnJhZm9ybS5pby9kb2NzL3Byb3ZpZGVycy9hd3NjYy9yL3F1aWNrc2lnaHRfZGFzaGJvYXJkLmh0bWwgYXdzY2NfcXVpY2tzaWdodF9kYXNoYm9hcmR9IFJlc291cmNlXG4gICpcbiAgKiBAcGFyYW0gc2NvcGUgVGhlIHNjb3BlIGluIHdoaWNoIHRvIGRlZmluZSB0aGlzIGNvbnN0cnVjdFxuICAqIEBwYXJhbSBpZCBUaGUgc2NvcGVkIGNvbnN0cnVjdCBJRC4gTXVzdCBiZSB1bmlxdWUgYW1vbmdzdCBzaWJsaW5ncyBpbiB0aGUgc2FtZSBzY29wZVxuICAqIEBwYXJhbSBvcHRpb25zIFF1aWNrc2lnaHREYXNoYm9hcmRDb25maWdcbiAgKi9cbiAgcHVibGljIGNvbnN0cnVjdG9yKHNjb3BlOiBDb25zdHJ1Y3QsIGlkOiBzdHJpbmcsIGNvbmZpZzogUXVpY2tzaWdodERhc2hib2FyZENvbmZpZykge1xuICAgIHN1cGVyKHNjb3BlLCBpZCwge1xuICAgICAgdGVycmFmb3JtUmVzb3VyY2VUeXBlOiAnYXdzY2NfcXVpY2tzaWdodF9kYXNoYm9hcmQnLFxuICAgICAgdGVycmFmb3JtR2VuZXJhdG9yTWV0YWRhdGE6IHtcbiAgICAgICAgcHJvdmlkZXJOYW1lOiAnYXdzY2MnXG4gICAgICB9LFxuICAgICAgcHJvdmlkZXI6IGNvbmZpZy5wcm92aWRlcixcbiAgICAgIGRlcGVuZHNPbjogY29uZmlnLmRlcGVuZHNPbixcbiAgICAgIGNvdW50OiBjb25maWcuY291bnQsXG4gICAgICBsaWZlY3ljbGU6IGNvbmZpZy5saWZlY3ljbGVcbiAgICB9KTtcbiAgICB0aGlzLl9hd3NBY2NvdW50SWQgPSBjb25maWcuYXdzQWNjb3VudElkO1xuICAgIHRoaXMuX2Rhc2hib2FyZElkID0gY29uZmlnLmRhc2hib2FyZElkO1xuICAgIHRoaXMuX2Rhc2hib2FyZFB1Ymxpc2hPcHRpb25zID0gY29uZmlnLmRhc2hib2FyZFB1Ymxpc2hPcHRpb25zO1xuICAgIHRoaXMuX25hbWUgPSBjb25maWcubmFtZTtcbiAgICB0aGlzLl9wYXJhbWV0ZXJzID0gY29uZmlnLnBhcmFtZXRlcnM7XG4gICAgdGhpcy5fcGVybWlzc2lvbnMgPSBjb25maWcucGVybWlzc2lvbnM7XG4gICAgdGhpcy5fc291cmNlRW50aXR5ID0gY29uZmlnLnNvdXJjZUVudGl0eTtcbiAgICB0aGlzLl90YWdzID0gY29uZmlnLnRhZ3M7XG4gICAgdGhpcy5fdGhlbWVBcm4gPSBjb25maWcudGhlbWVBcm47XG4gICAgdGhpcy5fdmVyc2lvbkRlc2NyaXB0aW9uID0gY29uZmlnLnZlcnNpb25EZXNjcmlwdGlvbjtcbiAgfVxuXG4gIC8vID09PT09PT09PT1cbiAgLy8gQVRUUklCVVRFU1xuICAvLyA9PT09PT09PT09XG5cbiAgLy8gYXJuIC0gY29tcHV0ZWQ6IHRydWUsIG9wdGlvbmFsOiBmYWxzZSwgcmVxdWlyZWQ6IGZhbHNlXG4gIHB1YmxpYyBnZXQgYXJuKCkge1xuICAgIHJldHVybiB0aGlzLmdldFN0cmluZ0F0dHJpYnV0ZSgnYXJuJyk7XG4gIH1cblxuICAvLyBhd3NfYWNjb3VudF9pZCAtIGNvbXB1dGVkOiBmYWxzZSwgb3B0aW9uYWw6IGZhbHNlLCByZXF1aXJlZDogdHJ1ZVxuICBwcml2YXRlIF9hd3NBY2NvdW50SWQ6IHN0cmluZztcbiAgcHVibGljIGdldCBhd3NBY2NvdW50SWQoKSB7XG4gICAgcmV0dXJuIHRoaXMuZ2V0U3RyaW5nQXR0cmlidXRlKCdhd3NfYWNjb3VudF9pZCcpO1xuICB9XG4gIHB1YmxpYyBzZXQgYXdzQWNjb3VudElkKHZhbHVlOiBzdHJpbmcpIHtcbiAgICB0aGlzLl9hd3NBY2NvdW50SWQgPSB2YWx1ZTtcbiAgfVxuICAvLyBUZW1wb3JhcmlseSBleHBvc2UgaW5wdXQgdmFsdWUuIFVzZSB3aXRoIGNhdXRpb24uXG4gIHB1YmxpYyBnZXQgYXdzQWNjb3VudElkSW5wdXQoKSB7XG4gICAgcmV0dXJuIHRoaXMuX2F3c0FjY291bnRJZFxuICB9XG5cbiAgLy8gY3JlYXRlZF90aW1lIC0gY29tcHV0ZWQ6IHRydWUsIG9wdGlvbmFsOiBmYWxzZSwgcmVxdWlyZWQ6IGZhbHNlXG4gIHB1YmxpYyBnZXQgY3JlYXRlZFRpbWUoKSB7XG4gICAgcmV0dXJuIHRoaXMuZ2V0U3RyaW5nQXR0cmlidXRlKCdjcmVhdGVkX3RpbWUnKTtcbiAgfVxuXG4gIC8vIGRhc2hib2FyZF9pZCAtIGNvbXB1dGVkOiBmYWxzZSwgb3B0aW9uYWw6IGZhbHNlLCByZXF1aXJlZDogdHJ1ZVxuICBwcml2YXRlIF9kYXNoYm9hcmRJZDogc3RyaW5nO1xuICBwdWJsaWMgZ2V0IGRhc2hib2FyZElkKCkge1xuICAgIHJldHVybiB0aGlzLmdldFN0cmluZ0F0dHJpYnV0ZSgnZGFzaGJvYXJkX2lkJyk7XG4gIH1cbiAgcHVibGljIHNldCBkYXNoYm9hcmRJZCh2YWx1ZTogc3RyaW5nKSB7XG4gICAgdGhpcy5fZGFzaGJvYXJkSWQgPSB2YWx1ZTtcbiAgfVxuICAvLyBUZW1wb3JhcmlseSBleHBvc2UgaW5wdXQgdmFsdWUuIFVzZSB3aXRoIGNhdXRpb24uXG4gIHB1YmxpYyBnZXQgZGFzaGJvYXJkSWRJbnB1dCgpIHtcbiAgICByZXR1cm4gdGhpcy5fZGFzaGJvYXJkSWRcbiAgfVxuXG4gIC8vIGRhc2hib2FyZF9wdWJsaXNoX29wdGlvbnMgLSBjb21wdXRlZDogZmFsc2UsIG9wdGlvbmFsOiB0cnVlLCByZXF1aXJlZDogZmFsc2VcbiAgcHJpdmF0ZSBfZGFzaGJvYXJkUHVibGlzaE9wdGlvbnM/OiBRdWlja3NpZ2h0RGFzaGJvYXJkRGFzaGJvYXJkUHVibGlzaE9wdGlvbnM7XG4gIHB1YmxpYyBnZXQgZGFzaGJvYXJkUHVibGlzaE9wdGlvbnMoKSB7XG4gICAgcmV0dXJuIHRoaXMuaW50ZXJwb2xhdGlvbkZvckF0dHJpYnV0ZSgnZGFzaGJvYXJkX3B1Ymxpc2hfb3B0aW9ucycpIGFzIGFueTtcbiAgfVxuICBwdWJsaWMgc2V0IGRhc2hib2FyZFB1Ymxpc2hPcHRpb25zKHZhbHVlOiBRdWlja3NpZ2h0RGFzaGJvYXJkRGFzaGJvYXJkUHVibGlzaE9wdGlvbnMgKSB7XG4gICAgdGhpcy5fZGFzaGJvYXJkUHVibGlzaE9wdGlvbnMgPSB2YWx1ZTtcbiAgfVxuICBwdWJsaWMgcmVzZXREYXNoYm9hcmRQdWJsaXNoT3B0aW9ucygpIHtcbiAgICB0aGlzLl9kYXNoYm9hcmRQdWJsaXNoT3B0aW9ucyA9IHVuZGVmaW5lZDtcbiAgfVxuICAvLyBUZW1wb3JhcmlseSBleHBvc2UgaW5wdXQgdmFsdWUuIFVzZSB3aXRoIGNhdXRpb24uXG4gIHB1YmxpYyBnZXQgZGFzaGJvYXJkUHVibGlzaE9wdGlvbnNJbnB1dCgpIHtcbiAgICByZXR1cm4gdGhpcy5fZGFzaGJvYXJkUHVibGlzaE9wdGlvbnNcbiAgfVxuXG4gIC8vIGlkIC0gY29tcHV0ZWQ6IHRydWUsIG9wdGlvbmFsOiBmYWxzZSwgcmVxdWlyZWQ6IGZhbHNlXG4gIHB1YmxpYyBnZXQgaWQoKSB7XG4gICAgcmV0dXJuIHRoaXMuZ2V0U3RyaW5nQXR0cmlidXRlKCdpZCcpO1xuICB9XG5cbiAgLy8gbGFzdF9wdWJsaXNoZWRfdGltZSAtIGNvbXB1dGVkOiB0cnVlLCBvcHRpb25hbDogZmFsc2UsIHJlcXVpcmVkOiBmYWxzZVxuICBwdWJsaWMgZ2V0IGxhc3RQdWJsaXNoZWRUaW1lKCkge1xuICAgIHJldHVybiB0aGlzLmdldFN0cmluZ0F0dHJpYnV0ZSgnbGFzdF9wdWJsaXNoZWRfdGltZScpO1xuICB9XG5cbiAgLy8gbGFzdF91cGRhdGVkX3RpbWUgLSBjb21wdXRlZDogdHJ1ZSwgb3B0aW9uYWw6IGZhbHNlLCByZXF1aXJlZDogZmFsc2VcbiAgcHVibGljIGdldCBsYXN0VXBkYXRlZFRpbWUoKSB7XG4gICAgcmV0dXJuIHRoaXMuZ2V0U3RyaW5nQXR0cmlidXRlKCdsYXN0X3VwZGF0ZWRfdGltZScpO1xuICB9XG5cbiAgLy8gbmFtZSAtIGNvbXB1dGVkOiBmYWxzZSwgb3B0aW9uYWw6IHRydWUsIHJlcXVpcmVkOiBmYWxzZVxuICBwcml2YXRlIF9uYW1lPzogc3RyaW5nO1xuICBwdWJsaWMgZ2V0IG5hbWUoKSB7XG4gICAgcmV0dXJuIHRoaXMuZ2V0U3RyaW5nQXR0cmlidXRlKCduYW1lJyk7XG4gIH1cbiAgcHVibGljIHNldCBuYW1lKHZhbHVlOiBzdHJpbmcgKSB7XG4gICAgdGhpcy5fbmFtZSA9IHZhbHVlO1xuICB9XG4gIHB1YmxpYyByZXNldE5hbWUoKSB7XG4gICAgdGhpcy5fbmFtZSA9IHVuZGVmaW5lZDtcbiAgfVxuICAvLyBUZW1wb3JhcmlseSBleHBvc2UgaW5wdXQgdmFsdWUuIFVzZSB3aXRoIGNhdXRpb24uXG4gIHB1YmxpYyBnZXQgbmFtZUlucHV0KCkge1xuICAgIHJldHVybiB0aGlzLl9uYW1lXG4gIH1cblxuICAvLyBwYXJhbWV0ZXJzIC0gY29tcHV0ZWQ6IGZhbHNlLCBvcHRpb25hbDogdHJ1ZSwgcmVxdWlyZWQ6IGZhbHNlXG4gIHByaXZhdGUgX3BhcmFtZXRlcnM/OiBRdWlja3NpZ2h0RGFzaGJvYXJkUGFyYW1ldGVycztcbiAgcHVibGljIGdldCBwYXJhbWV0ZXJzKCkge1xuICAgIHJldHVybiB0aGlzLmludGVycG9sYXRpb25Gb3JBdHRyaWJ1dGUoJ3BhcmFtZXRlcnMnKSBhcyBhbnk7XG4gIH1cbiAgcHVibGljIHNldCBwYXJhbWV0ZXJzKHZhbHVlOiBRdWlja3NpZ2h0RGFzaGJvYXJkUGFyYW1ldGVycyApIHtcbiAgICB0aGlzLl9wYXJhbWV0ZXJzID0gdmFsdWU7XG4gIH1cbiAgcHVibGljIHJlc2V0UGFyYW1ldGVycygpIHtcbiAgICB0aGlzLl9wYXJhbWV0ZXJzID0gdW5kZWZpbmVkO1xuICB9XG4gIC8vIFRlbXBvcmFyaWx5IGV4cG9zZSBpbnB1dCB2YWx1ZS4gVXNlIHdpdGggY2F1dGlvbi5cbiAgcHVibGljIGdldCBwYXJhbWV0ZXJzSW5wdXQoKSB7XG4gICAgcmV0dXJuIHRoaXMuX3BhcmFtZXRlcnNcbiAgfVxuXG4gIC8vIHBlcm1pc3Npb25zIC0gY29tcHV0ZWQ6IGZhbHNlLCBvcHRpb25hbDogdHJ1ZSwgcmVxdWlyZWQ6IGZhbHNlXG4gIHByaXZhdGUgX3Blcm1pc3Npb25zPzogUXVpY2tzaWdodERhc2hib2FyZFBlcm1pc3Npb25zW107XG4gIHB1YmxpYyBnZXQgcGVybWlzc2lvbnMoKSB7XG4gICAgcmV0dXJuIHRoaXMuaW50ZXJwb2xhdGlvbkZvckF0dHJpYnV0ZSgncGVybWlzc2lvbnMnKSBhcyBhbnk7XG4gIH1cbiAgcHVibGljIHNldCBwZXJtaXNzaW9ucyh2YWx1ZTogUXVpY2tzaWdodERhc2hib2FyZFBlcm1pc3Npb25zW10gKSB7XG4gICAgdGhpcy5fcGVybWlzc2lvbnMgPSB2YWx1ZTtcbiAgfVxuICBwdWJsaWMgcmVzZXRQZXJtaXNzaW9ucygpIHtcbiAgICB0aGlzLl9wZXJtaXNzaW9ucyA9IHVuZGVmaW5lZDtcbiAgfVxuICAvLyBUZW1wb3JhcmlseSBleHBvc2UgaW5wdXQgdmFsdWUuIFVzZSB3aXRoIGNhdXRpb24uXG4gIHB1YmxpYyBnZXQgcGVybWlzc2lvbnNJbnB1dCgpIHtcbiAgICByZXR1cm4gdGhpcy5fcGVybWlzc2lvbnNcbiAgfVxuXG4gIC8vIHNvdXJjZV9lbnRpdHkgLSBjb21wdXRlZDogZmFsc2UsIG9wdGlvbmFsOiB0cnVlLCByZXF1aXJlZDogZmFsc2VcbiAgcHJpdmF0ZSBfc291cmNlRW50aXR5PzogUXVpY2tzaWdodERhc2hib2FyZFNvdXJjZUVudGl0eTtcbiAgcHVibGljIGdldCBzb3VyY2VFbnRpdHkoKSB7XG4gICAgcmV0dXJuIHRoaXMuaW50ZXJwb2xhdGlvbkZvckF0dHJpYnV0ZSgnc291cmNlX2VudGl0eScpIGFzIGFueTtcbiAgfVxuICBwdWJsaWMgc2V0IHNvdXJjZUVudGl0eSh2YWx1ZTogUXVpY2tzaWdodERhc2hib2FyZFNvdXJjZUVudGl0eSApIHtcbiAgICB0aGlzLl9zb3VyY2VFbnRpdHkgPSB2YWx1ZTtcbiAgfVxuICBwdWJsaWMgcmVzZXRTb3VyY2VFbnRpdHkoKSB7XG4gICAgdGhpcy5fc291cmNlRW50aXR5ID0gdW5kZWZpbmVkO1xuICB9XG4gIC8vIFRlbXBvcmFyaWx5IGV4cG9zZSBpbnB1dCB2YWx1ZS4gVXNlIHdpdGggY2F1dGlvbi5cbiAgcHVibGljIGdldCBzb3VyY2VFbnRpdHlJbnB1dCgpIHtcbiAgICByZXR1cm4gdGhpcy5fc291cmNlRW50aXR5XG4gIH1cblxuICAvLyB0YWdzIC0gY29tcHV0ZWQ6IGZhbHNlLCBvcHRpb25hbDogdHJ1ZSwgcmVxdWlyZWQ6IGZhbHNlXG4gIHByaXZhdGUgX3RhZ3M/OiBRdWlja3NpZ2h0RGFzaGJvYXJkVGFnc1tdO1xuICBwdWJsaWMgZ2V0IHRhZ3MoKSB7XG4gICAgcmV0dXJuIHRoaXMuaW50ZXJwb2xhdGlvbkZvckF0dHJpYnV0ZSgndGFncycpIGFzIGFueTtcbiAgfVxuICBwdWJsaWMgc2V0IHRhZ3ModmFsdWU6IFF1aWNrc2lnaHREYXNoYm9hcmRUYWdzW10gKSB7XG4gICAgdGhpcy5fdGFncyA9IHZhbHVlO1xuICB9XG4gIHB1YmxpYyByZXNldFRhZ3MoKSB7XG4gICAgdGhpcy5fdGFncyA9IHVuZGVmaW5lZDtcbiAgfVxuICAvLyBUZW1wb3JhcmlseSBleHBvc2UgaW5wdXQgdmFsdWUuIFVzZSB3aXRoIGNhdXRpb24uXG4gIHB1YmxpYyBnZXQgdGFnc0lucHV0KCkge1xuICAgIHJldHVybiB0aGlzLl90YWdzXG4gIH1cblxuICAvLyB0aGVtZV9hcm4gLSBjb21wdXRlZDogZmFsc2UsIG9wdGlvbmFsOiB0cnVlLCByZXF1aXJlZDogZmFsc2VcbiAgcHJpdmF0ZSBfdGhlbWVBcm4/OiBzdHJpbmc7XG4gIHB1YmxpYyBnZXQgdGhlbWVBcm4oKSB7XG4gICAgcmV0dXJuIHRoaXMuZ2V0U3RyaW5nQXR0cmlidXRlKCd0aGVtZV9hcm4nKTtcbiAgfVxuICBwdWJsaWMgc2V0IHRoZW1lQXJuKHZhbHVlOiBzdHJpbmcgKSB7XG4gICAgdGhpcy5fdGhlbWVBcm4gPSB2YWx1ZTtcbiAgfVxuICBwdWJsaWMgcmVzZXRUaGVtZUFybigpIHtcbiAgICB0aGlzLl90aGVtZUFybiA9IHVuZGVmaW5lZDtcbiAgfVxuICAvLyBUZW1wb3JhcmlseSBleHBvc2UgaW5wdXQgdmFsdWUuIFVzZSB3aXRoIGNhdXRpb24uXG4gIHB1YmxpYyBnZXQgdGhlbWVBcm5JbnB1dCgpIHtcbiAgICByZXR1cm4gdGhpcy5fdGhlbWVBcm5cbiAgfVxuXG4gIC8vIHZlcnNpb24gLSBjb21wdXRlZDogdHJ1ZSwgb3B0aW9uYWw6IGZhbHNlLCByZXF1aXJlZDogZmFsc2VcbiAgcHVibGljIGdldCB2ZXJzaW9uKCkge1xuICAgIHJldHVybiB0aGlzLmludGVycG9sYXRpb25Gb3JBdHRyaWJ1dGUoJ3ZlcnNpb24nKSBhcyBhbnk7XG4gIH1cblxuICAvLyB2ZXJzaW9uX2Rlc2NyaXB0aW9uIC0gY29tcHV0ZWQ6IGZhbHNlLCBvcHRpb25hbDogdHJ1ZSwgcmVxdWlyZWQ6IGZhbHNlXG4gIHByaXZhdGUgX3ZlcnNpb25EZXNjcmlwdGlvbj86IHN0cmluZztcbiAgcHVibGljIGdldCB2ZXJzaW9uRGVzY3JpcHRpb24oKSB7XG4gICAgcmV0dXJuIHRoaXMuZ2V0U3RyaW5nQXR0cmlidXRlKCd2ZXJzaW9uX2Rlc2NyaXB0aW9uJyk7XG4gIH1cbiAgcHVibGljIHNldCB2ZXJzaW9uRGVzY3JpcHRpb24odmFsdWU6IHN0cmluZyApIHtcbiAgICB0aGlzLl92ZXJzaW9uRGVzY3JpcHRpb24gPSB2YWx1ZTtcbiAgfVxuICBwdWJsaWMgcmVzZXRWZXJzaW9uRGVzY3JpcHRpb24oKSB7XG4gICAgdGhpcy5fdmVyc2lvbkRlc2NyaXB0aW9uID0gdW5kZWZpbmVkO1xuICB9XG4gIC8vIFRlbXBvcmFyaWx5IGV4cG9zZSBpbnB1dCB2YWx1ZS4gVXNlIHdpdGggY2F1dGlvbi5cbiAgcHVibGljIGdldCB2ZXJzaW9uRGVzY3JpcHRpb25JbnB1dCgpIHtcbiAgICByZXR1cm4gdGhpcy5fdmVyc2lvbkRlc2NyaXB0aW9uXG4gIH1cblxuICAvLyA9PT09PT09PT1cbiAgLy8gU1lOVEhFU0lTXG4gIC8vID09PT09PT09PVxuXG4gIHByb3RlY3RlZCBzeW50aGVzaXplQXR0cmlidXRlcygpOiB7IFtuYW1lOiBzdHJpbmddOiBhbnkgfSB7XG4gICAgcmV0dXJuIHtcbiAgICAgIGF3c19hY2NvdW50X2lkOiBjZGt0Zi5zdHJpbmdUb1RlcnJhZm9ybSh0aGlzLl9hd3NBY2NvdW50SWQpLFxuICAgICAgZGFzaGJvYXJkX2lkOiBjZGt0Zi5zdHJpbmdUb1RlcnJhZm9ybSh0aGlzLl9kYXNoYm9hcmRJZCksXG4gICAgICBkYXNoYm9hcmRfcHVibGlzaF9vcHRpb25zOiBxdWlja3NpZ2h0RGFzaGJvYXJkRGFzaGJvYXJkUHVibGlzaE9wdGlvbnNUb1RlcnJhZm9ybSh0aGlzLl9kYXNoYm9hcmRQdWJsaXNoT3B0aW9ucyksXG4gICAgICBuYW1lOiBjZGt0Zi5zdHJpbmdUb1RlcnJhZm9ybSh0aGlzLl9uYW1lKSxcbiAgICAgIHBhcmFtZXRlcnM6IHF1aWNrc2lnaHREYXNoYm9hcmRQYXJhbWV0ZXJzVG9UZXJyYWZvcm0odGhpcy5fcGFyYW1ldGVycyksXG4gICAgICBwZXJtaXNzaW9uczogY2RrdGYubGlzdE1hcHBlcihxdWlja3NpZ2h0RGFzaGJvYXJkUGVybWlzc2lvbnNUb1RlcnJhZm9ybSkodGhpcy5fcGVybWlzc2lvbnMpLFxuICAgICAgc291cmNlX2VudGl0eTogcXVpY2tzaWdodERhc2hib2FyZFNvdXJjZUVudGl0eVRvVGVycmFmb3JtKHRoaXMuX3NvdXJjZUVudGl0eSksXG4gICAgICB0YWdzOiBjZGt0Zi5saXN0TWFwcGVyKHF1aWNrc2lnaHREYXNoYm9hcmRUYWdzVG9UZXJyYWZvcm0pKHRoaXMuX3RhZ3MpLFxuICAgICAgdGhlbWVfYXJuOiBjZGt0Zi5zdHJpbmdUb1RlcnJhZm9ybSh0aGlzLl90aGVtZUFybiksXG4gICAgICB2ZXJzaW9uX2Rlc2NyaXB0aW9uOiBjZGt0Zi5zdHJpbmdUb1RlcnJhZm9ybSh0aGlzLl92ZXJzaW9uRGVzY3JpcHRpb24pLFxuICAgIH07XG4gIH1cbn1cbiJdfQ==