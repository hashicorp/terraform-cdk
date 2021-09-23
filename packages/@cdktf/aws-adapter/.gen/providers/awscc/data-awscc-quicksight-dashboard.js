"use strict";
// https://www.terraform.io/docs/providers/awscc/d/quicksight_dashboard.html
// generated from terraform resource schema
Object.defineProperty(exports, "__esModule", { value: true });
exports.DataAwsccQuicksightDashboard = exports.dataAwsccQuicksightDashboardVersionToTerraform = exports.DataAwsccQuicksightDashboardVersion = exports.dataAwsccQuicksightDashboardVersionSheetsToTerraform = exports.DataAwsccQuicksightDashboardVersionSheets = exports.dataAwsccQuicksightDashboardVersionErrorsToTerraform = exports.DataAwsccQuicksightDashboardVersionErrors = exports.dataAwsccQuicksightDashboardTagsToTerraform = exports.DataAwsccQuicksightDashboardTags = exports.dataAwsccQuicksightDashboardSourceEntityToTerraform = exports.DataAwsccQuicksightDashboardSourceEntity = exports.dataAwsccQuicksightDashboardSourceEntitySourceTemplateToTerraform = exports.DataAwsccQuicksightDashboardSourceEntitySourceTemplate = exports.dataAwsccQuicksightDashboardSourceEntitySourceTemplateDataSetReferencesToTerraform = exports.DataAwsccQuicksightDashboardSourceEntitySourceTemplateDataSetReferences = exports.dataAwsccQuicksightDashboardPermissionsToTerraform = exports.DataAwsccQuicksightDashboardPermissions = exports.dataAwsccQuicksightDashboardParametersToTerraform = exports.DataAwsccQuicksightDashboardParameters = exports.dataAwsccQuicksightDashboardParametersStringParametersToTerraform = exports.DataAwsccQuicksightDashboardParametersStringParameters = exports.dataAwsccQuicksightDashboardParametersIntegerParametersToTerraform = exports.DataAwsccQuicksightDashboardParametersIntegerParameters = exports.dataAwsccQuicksightDashboardParametersDecimalParametersToTerraform = exports.DataAwsccQuicksightDashboardParametersDecimalParameters = exports.dataAwsccQuicksightDashboardParametersDateTimeParametersToTerraform = exports.DataAwsccQuicksightDashboardParametersDateTimeParameters = exports.dataAwsccQuicksightDashboardDashboardPublishOptionsToTerraform = exports.DataAwsccQuicksightDashboardDashboardPublishOptions = exports.dataAwsccQuicksightDashboardDashboardPublishOptionsSheetControlsOptionToTerraform = exports.DataAwsccQuicksightDashboardDashboardPublishOptionsSheetControlsOption = exports.dataAwsccQuicksightDashboardDashboardPublishOptionsExportToCsvOptionToTerraform = exports.DataAwsccQuicksightDashboardDashboardPublishOptionsExportToCsvOption = exports.dataAwsccQuicksightDashboardDashboardPublishOptionsAdHocFilteringOptionToTerraform = exports.DataAwsccQuicksightDashboardDashboardPublishOptionsAdHocFilteringOption = void 0;
const cdktf = require("cdktf");
class DataAwsccQuicksightDashboardDashboardPublishOptionsAdHocFilteringOption extends cdktf.ComplexComputedList {
    // availability_status - computed: true, optional: false, required: false
    get availabilityStatus() {
        return this.getStringAttribute('availability_status');
    }
}
exports.DataAwsccQuicksightDashboardDashboardPublishOptionsAdHocFilteringOption = DataAwsccQuicksightDashboardDashboardPublishOptionsAdHocFilteringOption;
function dataAwsccQuicksightDashboardDashboardPublishOptionsAdHocFilteringOptionToTerraform(struct) {
    if (!cdktf.canInspect(struct)) {
        return struct;
    }
    return {
        availability_status: cdktf.stringToTerraform(struct.availabilityStatus),
    };
}
exports.dataAwsccQuicksightDashboardDashboardPublishOptionsAdHocFilteringOptionToTerraform = dataAwsccQuicksightDashboardDashboardPublishOptionsAdHocFilteringOptionToTerraform;
class DataAwsccQuicksightDashboardDashboardPublishOptionsExportToCsvOption extends cdktf.ComplexComputedList {
    // availability_status - computed: true, optional: false, required: false
    get availabilityStatus() {
        return this.getStringAttribute('availability_status');
    }
}
exports.DataAwsccQuicksightDashboardDashboardPublishOptionsExportToCsvOption = DataAwsccQuicksightDashboardDashboardPublishOptionsExportToCsvOption;
function dataAwsccQuicksightDashboardDashboardPublishOptionsExportToCsvOptionToTerraform(struct) {
    if (!cdktf.canInspect(struct)) {
        return struct;
    }
    return {
        availability_status: cdktf.stringToTerraform(struct.availabilityStatus),
    };
}
exports.dataAwsccQuicksightDashboardDashboardPublishOptionsExportToCsvOptionToTerraform = dataAwsccQuicksightDashboardDashboardPublishOptionsExportToCsvOptionToTerraform;
class DataAwsccQuicksightDashboardDashboardPublishOptionsSheetControlsOption extends cdktf.ComplexComputedList {
    // visibility_state - computed: true, optional: false, required: false
    get visibilityState() {
        return this.getStringAttribute('visibility_state');
    }
}
exports.DataAwsccQuicksightDashboardDashboardPublishOptionsSheetControlsOption = DataAwsccQuicksightDashboardDashboardPublishOptionsSheetControlsOption;
function dataAwsccQuicksightDashboardDashboardPublishOptionsSheetControlsOptionToTerraform(struct) {
    if (!cdktf.canInspect(struct)) {
        return struct;
    }
    return {
        visibility_state: cdktf.stringToTerraform(struct.visibilityState),
    };
}
exports.dataAwsccQuicksightDashboardDashboardPublishOptionsSheetControlsOptionToTerraform = dataAwsccQuicksightDashboardDashboardPublishOptionsSheetControlsOptionToTerraform;
class DataAwsccQuicksightDashboardDashboardPublishOptions extends cdktf.ComplexComputedList {
    // ad_hoc_filtering_option - computed: true, optional: false, required: false
    get adHocFilteringOption() {
        return this.interpolationForAttribute('ad_hoc_filtering_option');
    }
    // export_to_csv_option - computed: true, optional: false, required: false
    get exportToCsvOption() {
        return this.interpolationForAttribute('export_to_csv_option');
    }
    // sheet_controls_option - computed: true, optional: false, required: false
    get sheetControlsOption() {
        return this.interpolationForAttribute('sheet_controls_option');
    }
}
exports.DataAwsccQuicksightDashboardDashboardPublishOptions = DataAwsccQuicksightDashboardDashboardPublishOptions;
function dataAwsccQuicksightDashboardDashboardPublishOptionsToTerraform(struct) {
    if (!cdktf.canInspect(struct)) {
        return struct;
    }
    return {
        ad_hoc_filtering_option: dataAwsccQuicksightDashboardDashboardPublishOptionsAdHocFilteringOptionToTerraform(struct.adHocFilteringOption),
        export_to_csv_option: dataAwsccQuicksightDashboardDashboardPublishOptionsExportToCsvOptionToTerraform(struct.exportToCsvOption),
        sheet_controls_option: dataAwsccQuicksightDashboardDashboardPublishOptionsSheetControlsOptionToTerraform(struct.sheetControlsOption),
    };
}
exports.dataAwsccQuicksightDashboardDashboardPublishOptionsToTerraform = dataAwsccQuicksightDashboardDashboardPublishOptionsToTerraform;
class DataAwsccQuicksightDashboardParametersDateTimeParameters extends cdktf.ComplexComputedList {
    // name - computed: true, optional: false, required: false
    get name() {
        return this.getStringAttribute('name');
    }
    // values - computed: true, optional: false, required: false
    get values() {
        return this.getListAttribute('values');
    }
}
exports.DataAwsccQuicksightDashboardParametersDateTimeParameters = DataAwsccQuicksightDashboardParametersDateTimeParameters;
function dataAwsccQuicksightDashboardParametersDateTimeParametersToTerraform(struct) {
    if (!cdktf.canInspect(struct)) {
        return struct;
    }
    return {
        name: cdktf.stringToTerraform(struct.name),
        values: cdktf.listMapper(cdktf.stringToTerraform)(struct.values),
    };
}
exports.dataAwsccQuicksightDashboardParametersDateTimeParametersToTerraform = dataAwsccQuicksightDashboardParametersDateTimeParametersToTerraform;
class DataAwsccQuicksightDashboardParametersDecimalParameters extends cdktf.ComplexComputedList {
    // name - computed: true, optional: false, required: false
    get name() {
        return this.getStringAttribute('name');
    }
    // values - computed: true, optional: false, required: false
    get values() {
        return this.interpolationForAttribute('values');
    }
}
exports.DataAwsccQuicksightDashboardParametersDecimalParameters = DataAwsccQuicksightDashboardParametersDecimalParameters;
function dataAwsccQuicksightDashboardParametersDecimalParametersToTerraform(struct) {
    if (!cdktf.canInspect(struct)) {
        return struct;
    }
    return {
        name: cdktf.stringToTerraform(struct.name),
        values: cdktf.listMapper(cdktf.numberToTerraform)(struct.values),
    };
}
exports.dataAwsccQuicksightDashboardParametersDecimalParametersToTerraform = dataAwsccQuicksightDashboardParametersDecimalParametersToTerraform;
class DataAwsccQuicksightDashboardParametersIntegerParameters extends cdktf.ComplexComputedList {
    // name - computed: true, optional: false, required: false
    get name() {
        return this.getStringAttribute('name');
    }
    // values - computed: true, optional: false, required: false
    get values() {
        return this.interpolationForAttribute('values');
    }
}
exports.DataAwsccQuicksightDashboardParametersIntegerParameters = DataAwsccQuicksightDashboardParametersIntegerParameters;
function dataAwsccQuicksightDashboardParametersIntegerParametersToTerraform(struct) {
    if (!cdktf.canInspect(struct)) {
        return struct;
    }
    return {
        name: cdktf.stringToTerraform(struct.name),
        values: cdktf.listMapper(cdktf.numberToTerraform)(struct.values),
    };
}
exports.dataAwsccQuicksightDashboardParametersIntegerParametersToTerraform = dataAwsccQuicksightDashboardParametersIntegerParametersToTerraform;
class DataAwsccQuicksightDashboardParametersStringParameters extends cdktf.ComplexComputedList {
    // name - computed: true, optional: false, required: false
    get name() {
        return this.getStringAttribute('name');
    }
    // values - computed: true, optional: false, required: false
    get values() {
        return this.getListAttribute('values');
    }
}
exports.DataAwsccQuicksightDashboardParametersStringParameters = DataAwsccQuicksightDashboardParametersStringParameters;
function dataAwsccQuicksightDashboardParametersStringParametersToTerraform(struct) {
    if (!cdktf.canInspect(struct)) {
        return struct;
    }
    return {
        name: cdktf.stringToTerraform(struct.name),
        values: cdktf.listMapper(cdktf.stringToTerraform)(struct.values),
    };
}
exports.dataAwsccQuicksightDashboardParametersStringParametersToTerraform = dataAwsccQuicksightDashboardParametersStringParametersToTerraform;
class DataAwsccQuicksightDashboardParameters extends cdktf.ComplexComputedList {
    // date_time_parameters - computed: true, optional: false, required: false
    get dateTimeParameters() {
        return this.interpolationForAttribute('date_time_parameters');
    }
    // decimal_parameters - computed: true, optional: false, required: false
    get decimalParameters() {
        return this.interpolationForAttribute('decimal_parameters');
    }
    // integer_parameters - computed: true, optional: false, required: false
    get integerParameters() {
        return this.interpolationForAttribute('integer_parameters');
    }
    // string_parameters - computed: true, optional: false, required: false
    get stringParameters() {
        return this.interpolationForAttribute('string_parameters');
    }
}
exports.DataAwsccQuicksightDashboardParameters = DataAwsccQuicksightDashboardParameters;
function dataAwsccQuicksightDashboardParametersToTerraform(struct) {
    if (!cdktf.canInspect(struct)) {
        return struct;
    }
    return {
        date_time_parameters: cdktf.listMapper(dataAwsccQuicksightDashboardParametersDateTimeParametersToTerraform)(struct.dateTimeParameters),
        decimal_parameters: cdktf.listMapper(dataAwsccQuicksightDashboardParametersDecimalParametersToTerraform)(struct.decimalParameters),
        integer_parameters: cdktf.listMapper(dataAwsccQuicksightDashboardParametersIntegerParametersToTerraform)(struct.integerParameters),
        string_parameters: cdktf.listMapper(dataAwsccQuicksightDashboardParametersStringParametersToTerraform)(struct.stringParameters),
    };
}
exports.dataAwsccQuicksightDashboardParametersToTerraform = dataAwsccQuicksightDashboardParametersToTerraform;
class DataAwsccQuicksightDashboardPermissions extends cdktf.ComplexComputedList {
    // actions - computed: true, optional: false, required: false
    get actions() {
        return this.getListAttribute('actions');
    }
    // principal - computed: true, optional: false, required: false
    get principal() {
        return this.getStringAttribute('principal');
    }
}
exports.DataAwsccQuicksightDashboardPermissions = DataAwsccQuicksightDashboardPermissions;
function dataAwsccQuicksightDashboardPermissionsToTerraform(struct) {
    if (!cdktf.canInspect(struct)) {
        return struct;
    }
    return {
        actions: cdktf.listMapper(cdktf.stringToTerraform)(struct.actions),
        principal: cdktf.stringToTerraform(struct.principal),
    };
}
exports.dataAwsccQuicksightDashboardPermissionsToTerraform = dataAwsccQuicksightDashboardPermissionsToTerraform;
class DataAwsccQuicksightDashboardSourceEntitySourceTemplateDataSetReferences extends cdktf.ComplexComputedList {
    // data_set_arn - computed: true, optional: false, required: false
    get dataSetArn() {
        return this.getStringAttribute('data_set_arn');
    }
    // data_set_placeholder - computed: true, optional: false, required: false
    get dataSetPlaceholder() {
        return this.getStringAttribute('data_set_placeholder');
    }
}
exports.DataAwsccQuicksightDashboardSourceEntitySourceTemplateDataSetReferences = DataAwsccQuicksightDashboardSourceEntitySourceTemplateDataSetReferences;
function dataAwsccQuicksightDashboardSourceEntitySourceTemplateDataSetReferencesToTerraform(struct) {
    if (!cdktf.canInspect(struct)) {
        return struct;
    }
    return {
        data_set_arn: cdktf.stringToTerraform(struct.dataSetArn),
        data_set_placeholder: cdktf.stringToTerraform(struct.dataSetPlaceholder),
    };
}
exports.dataAwsccQuicksightDashboardSourceEntitySourceTemplateDataSetReferencesToTerraform = dataAwsccQuicksightDashboardSourceEntitySourceTemplateDataSetReferencesToTerraform;
class DataAwsccQuicksightDashboardSourceEntitySourceTemplate extends cdktf.ComplexComputedList {
    // arn - computed: true, optional: false, required: false
    get arn() {
        return this.getStringAttribute('arn');
    }
    // data_set_references - computed: true, optional: false, required: false
    get dataSetReferences() {
        return this.interpolationForAttribute('data_set_references');
    }
}
exports.DataAwsccQuicksightDashboardSourceEntitySourceTemplate = DataAwsccQuicksightDashboardSourceEntitySourceTemplate;
function dataAwsccQuicksightDashboardSourceEntitySourceTemplateToTerraform(struct) {
    if (!cdktf.canInspect(struct)) {
        return struct;
    }
    return {
        arn: cdktf.stringToTerraform(struct.arn),
        data_set_references: cdktf.listMapper(dataAwsccQuicksightDashboardSourceEntitySourceTemplateDataSetReferencesToTerraform)(struct.dataSetReferences),
    };
}
exports.dataAwsccQuicksightDashboardSourceEntitySourceTemplateToTerraform = dataAwsccQuicksightDashboardSourceEntitySourceTemplateToTerraform;
class DataAwsccQuicksightDashboardSourceEntity extends cdktf.ComplexComputedList {
    // source_template - computed: true, optional: false, required: false
    get sourceTemplate() {
        return this.interpolationForAttribute('source_template');
    }
}
exports.DataAwsccQuicksightDashboardSourceEntity = DataAwsccQuicksightDashboardSourceEntity;
function dataAwsccQuicksightDashboardSourceEntityToTerraform(struct) {
    if (!cdktf.canInspect(struct)) {
        return struct;
    }
    return {
        source_template: dataAwsccQuicksightDashboardSourceEntitySourceTemplateToTerraform(struct.sourceTemplate),
    };
}
exports.dataAwsccQuicksightDashboardSourceEntityToTerraform = dataAwsccQuicksightDashboardSourceEntityToTerraform;
class DataAwsccQuicksightDashboardTags extends cdktf.ComplexComputedList {
    // key - computed: true, optional: false, required: false
    get key() {
        return this.getStringAttribute('key');
    }
    // value - computed: true, optional: false, required: false
    get value() {
        return this.getStringAttribute('value');
    }
}
exports.DataAwsccQuicksightDashboardTags = DataAwsccQuicksightDashboardTags;
function dataAwsccQuicksightDashboardTagsToTerraform(struct) {
    if (!cdktf.canInspect(struct)) {
        return struct;
    }
    return {
        key: cdktf.stringToTerraform(struct.key),
        value: cdktf.stringToTerraform(struct.value),
    };
}
exports.dataAwsccQuicksightDashboardTagsToTerraform = dataAwsccQuicksightDashboardTagsToTerraform;
class DataAwsccQuicksightDashboardVersionErrors extends cdktf.ComplexComputedList {
    // message - computed: true, optional: false, required: false
    get message() {
        return this.getStringAttribute('message');
    }
    // type - computed: true, optional: false, required: false
    get type() {
        return this.getStringAttribute('type');
    }
}
exports.DataAwsccQuicksightDashboardVersionErrors = DataAwsccQuicksightDashboardVersionErrors;
function dataAwsccQuicksightDashboardVersionErrorsToTerraform(struct) {
    if (!cdktf.canInspect(struct)) {
        return struct;
    }
    return {
        message: cdktf.stringToTerraform(struct.message),
        type: cdktf.stringToTerraform(struct.type),
    };
}
exports.dataAwsccQuicksightDashboardVersionErrorsToTerraform = dataAwsccQuicksightDashboardVersionErrorsToTerraform;
class DataAwsccQuicksightDashboardVersionSheets extends cdktf.ComplexComputedList {
    // name - computed: true, optional: false, required: false
    get name() {
        return this.getStringAttribute('name');
    }
    // sheet_id - computed: true, optional: false, required: false
    get sheetId() {
        return this.getStringAttribute('sheet_id');
    }
}
exports.DataAwsccQuicksightDashboardVersionSheets = DataAwsccQuicksightDashboardVersionSheets;
function dataAwsccQuicksightDashboardVersionSheetsToTerraform(struct) {
    if (!cdktf.canInspect(struct)) {
        return struct;
    }
    return {
        name: cdktf.stringToTerraform(struct.name),
        sheet_id: cdktf.stringToTerraform(struct.sheetId),
    };
}
exports.dataAwsccQuicksightDashboardVersionSheetsToTerraform = dataAwsccQuicksightDashboardVersionSheetsToTerraform;
class DataAwsccQuicksightDashboardVersion extends cdktf.ComplexComputedList {
    // arn - computed: true, optional: false, required: false
    get arn() {
        return this.getStringAttribute('arn');
    }
    // created_time - computed: true, optional: false, required: false
    get createdTime() {
        return this.getStringAttribute('created_time');
    }
    // data_set_arns - computed: true, optional: false, required: false
    get dataSetArns() {
        return this.getListAttribute('data_set_arns');
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
exports.DataAwsccQuicksightDashboardVersion = DataAwsccQuicksightDashboardVersion;
function dataAwsccQuicksightDashboardVersionToTerraform(struct) {
    if (!cdktf.canInspect(struct)) {
        return struct;
    }
    return {
        arn: cdktf.stringToTerraform(struct.arn),
        created_time: cdktf.stringToTerraform(struct.createdTime),
        data_set_arns: cdktf.listMapper(cdktf.stringToTerraform)(struct.dataSetArns),
        description: cdktf.stringToTerraform(struct.description),
        errors: cdktf.listMapper(dataAwsccQuicksightDashboardVersionErrorsToTerraform)(struct.errors),
        sheets: cdktf.listMapper(dataAwsccQuicksightDashboardVersionSheetsToTerraform)(struct.sheets),
        source_entity_arn: cdktf.stringToTerraform(struct.sourceEntityArn),
        status: cdktf.stringToTerraform(struct.status),
        theme_arn: cdktf.stringToTerraform(struct.themeArn),
        version_number: cdktf.numberToTerraform(struct.versionNumber),
    };
}
exports.dataAwsccQuicksightDashboardVersionToTerraform = dataAwsccQuicksightDashboardVersionToTerraform;
/**
* Represents a {@link https://www.terraform.io/docs/providers/awscc/d/quicksight_dashboard.html awscc_quicksight_dashboard}
*/
class DataAwsccQuicksightDashboard extends cdktf.TerraformDataSource {
    // ===========
    // INITIALIZER
    // ===========
    /**
    * Create a new {@link https://www.terraform.io/docs/providers/awscc/d/quicksight_dashboard.html awscc_quicksight_dashboard} Data Source
    *
    * @param scope The scope in which to define this construct
    * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
    * @param options DataAwsccQuicksightDashboardConfig
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
    // dashboard_id - computed: true, optional: false, required: false
    get dashboardId() {
        return this.getStringAttribute('dashboard_id');
    }
    // dashboard_publish_options - computed: true, optional: false, required: false
    get dashboardPublishOptions() {
        return this.interpolationForAttribute('dashboard_publish_options');
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
    // last_published_time - computed: true, optional: false, required: false
    get lastPublishedTime() {
        return this.getStringAttribute('last_published_time');
    }
    // last_updated_time - computed: true, optional: false, required: false
    get lastUpdatedTime() {
        return this.getStringAttribute('last_updated_time');
    }
    // name - computed: true, optional: false, required: false
    get name() {
        return this.getStringAttribute('name');
    }
    // parameters - computed: true, optional: false, required: false
    get parameters() {
        return this.interpolationForAttribute('parameters');
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
    // theme_arn - computed: true, optional: false, required: false
    get themeArn() {
        return this.getStringAttribute('theme_arn');
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
exports.DataAwsccQuicksightDashboard = DataAwsccQuicksightDashboard;
// =================
// STATIC PROPERTIES
// =================
DataAwsccQuicksightDashboard.tfResourceType = "awscc_quicksight_dashboard";
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZGF0YS1hd3NjYy1xdWlja3NpZ2h0LWRhc2hib2FyZC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbImRhdGEtYXdzY2MtcXVpY2tzaWdodC1kYXNoYm9hcmQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IjtBQUFBLDRFQUE0RTtBQUM1RSwyQ0FBMkM7OztBQUczQywrQkFBK0I7QUFZL0IsTUFBYSx1RUFBd0UsU0FBUSxLQUFLLENBQUMsbUJBQW1CO0lBRXBILHlFQUF5RTtJQUN6RSxJQUFXLGtCQUFrQjtRQUMzQixPQUFPLElBQUksQ0FBQyxrQkFBa0IsQ0FBQyxxQkFBcUIsQ0FBQyxDQUFDO0lBQ3hELENBQUM7Q0FDRjtBQU5ELDBKQU1DO0FBRUQsU0FBZ0Isa0ZBQWtGLENBQUMsTUFBZ0Y7SUFDakwsSUFBSSxDQUFDLEtBQUssQ0FBQyxVQUFVLENBQUMsTUFBTSxDQUFDLEVBQUU7UUFBRSxPQUFPLE1BQU0sQ0FBQztLQUFFO0lBQ2pELE9BQU87UUFDTCxtQkFBbUIsRUFBRSxLQUFLLENBQUMsaUJBQWlCLENBQUMsTUFBTyxDQUFDLGtCQUFrQixDQUFDO0tBQ3pFLENBQUE7QUFDSCxDQUFDO0FBTEQsZ0xBS0M7QUFFRCxNQUFhLG9FQUFxRSxTQUFRLEtBQUssQ0FBQyxtQkFBbUI7SUFFakgseUVBQXlFO0lBQ3pFLElBQVcsa0JBQWtCO1FBQzNCLE9BQU8sSUFBSSxDQUFDLGtCQUFrQixDQUFDLHFCQUFxQixDQUFDLENBQUM7SUFDeEQsQ0FBQztDQUNGO0FBTkQsb0pBTUM7QUFFRCxTQUFnQiwrRUFBK0UsQ0FBQyxNQUE2RTtJQUMzSyxJQUFJLENBQUMsS0FBSyxDQUFDLFVBQVUsQ0FBQyxNQUFNLENBQUMsRUFBRTtRQUFFLE9BQU8sTUFBTSxDQUFDO0tBQUU7SUFDakQsT0FBTztRQUNMLG1CQUFtQixFQUFFLEtBQUssQ0FBQyxpQkFBaUIsQ0FBQyxNQUFPLENBQUMsa0JBQWtCLENBQUM7S0FDekUsQ0FBQTtBQUNILENBQUM7QUFMRCwwS0FLQztB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QyxDQUFDO0lBRUQsNkRBQTZEO0lBQzdELElBQVcsT0FBTztRQUNoQixPQUFPLElBQUksQ0FBQyx5QkFBeUIsQ0FBQyxTQUFTLENBQVEsQ0FBQztJQUMxRCxDQUFDO0lBRUQseUVBQXlFO0lBQ3pFLElBQVcsa0JBQWtCO1FBQzNCLE9BQU8sSUFBSSxDQUFDLGtCQUFrQixDQUFDLHFCQUFxQixDQUFDLENBQUM7SUFDeEQsQ0FBQztJQUVELFlBQVk7SUFDWixZQUFZO0lBQ1osWUFBWTtJQUVGLG9CQUFvQjtRQUM1QixPQUFPO1lBQ0wsRUFBRSxFQUFFLEtBQUssQ0FBQyxpQkFBaUIsQ0FBQyxJQUFJLENBQUMsR0FBRyxDQUFDO1NBQ3RDLENBQUM7SUFDSixDQUFDOztBQXBJSCxvRUFxSUM7QUFuSUMsb0JBQW9CO0FBQ3BCLG9CQUFvQjtBQUNwQixvQkFBb0I7QUFDRywyQ0FBYyxHQUFXLDRCQUE0QixDQUFDIiwic291cmNlc0NvbnRlbnQiOlsiLy8gaHR0cHM6Ly93d3cudGVycmFmb3JtLmlvL2RvY3MvcHJvdmlkZXJzL2F3c2NjL2QvcXVpY2tzaWdodF9kYXNoYm9hcmQuaHRtbFxuLy8gZ2VuZXJhdGVkIGZyb20gdGVycmFmb3JtIHJlc291cmNlIHNjaGVtYVxuXG5pbXBvcnQgeyBDb25zdHJ1Y3QgfSBmcm9tICdjb25zdHJ1Y3RzJztcbmltcG9ydCAqIGFzIGNka3RmIGZyb20gJ2Nka3RmJztcblxuLy8gQ29uZmlndXJhdGlvblxuXG5leHBvcnQgaW50ZXJmYWNlIERhdGFBd3NjY1F1aWNrc2lnaHREYXNoYm9hcmRDb25maWcgZXh0ZW5kcyBjZGt0Zi5UZXJyYWZvcm1NZXRhQXJndW1lbnRzIHtcbiAgLyoqXG4gICogVW5pcXVlbHkgaWRlbnRpZmllcyB0aGUgcmVzb3VyY2UuXG4gICogXG4gICogRG9jcyBhdCBUZXJyYWZvcm0gUmVnaXN0cnk6IHtAbGluayBodHRwczovL3d3dy50ZXJyYWZvcm0uaW8vZG9jcy9wcm92aWRlcnMvYXdzY2MvZC9xdWlja3NpZ2h0X2Rhc2hib2FyZC5odG1sI2lkIERhdGFBd3NjY1F1aWNrc2lnaHREYXNoYm9hcmQjaWR9XG4gICovXG4gIHJlYWRvbmx5IGlkOiBzdHJpbmc7XG59XG5leHBvcnQgY2xhc3MgRGF0YUF3c2NjUXVpY2tzaWdodERhc2hib2FyZERhc2hib2FyZFB1Ymxpc2hPcHRpb25zQWRIb2NGaWx0ZXJpbmdPcHRpb24gZXh0ZW5kcyBjZGt0Zi5Db21wbGV4Q29tcHV0ZWRMaXN0IHtcblxuICAvLyBhdmFpbGFiaWxpdHlfc3RhdHVzIC0gY29tcHV0ZWQ6IHRydWUsIG9wdGlvbmFsOiBmYWxzZSwgcmVxdWlyZWQ6IGZhbHNlXG4gIHB1YmxpYyBnZXQgYXZhaWxhYmlsaXR5U3RhdHVzKCkge1xuICAgIHJldHVybiB0aGlzLmdldFN0cmluZ0F0dHJpYnV0ZSgnYXZhaWxhYmlsaXR5X3N0YXR1cycpO1xuICB9XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBkYXRhQXdzY2NRdWlja3NpZ2h0RGFzaGJvYXJkRGFzaGJvYXJkUHVibGlzaE9wdGlvbnNBZEhvY0ZpbHRlcmluZ09wdGlvblRvVGVycmFmb3JtKHN0cnVjdD86IERhdGFBd3NjY1F1aWNrc2lnaHREYXNoYm9hcmREYXNoYm9hcmRQdWJsaXNoT3B0aW9uc0FkSG9jRmlsdGVyaW5nT3B0aW9uKTogYW55IHtcbiAgaWYgKCFjZGt0Zi5jYW5JbnNwZWN0KHN0cnVjdCkpIHsgcmV0dXJuIHN0cnVjdDsgfVxuICByZXR1cm4ge1xuICAgIGF2YWlsYWJpbGl0eV9zdGF0dXM6IGNka3RmLnN0cmluZ1RvVGVycmFmb3JtKHN0cnVjdCEuYXZhaWxhYmlsaXR5U3RhdHVzKSxcbiAgfVxufVxuXG5leHBvcnQgY2xhc3MgRGF0YUF3c2NjUXVpY2tzaWdodERhc2hib2FyZERhc2hib2FyZFB1Ymxpc2hPcHRpb25zRXhwb3J0VG9Dc3ZPcHRpb24gZXh0ZW5kcyBjZGt0Zi5Db21wbGV4Q29tcHV0ZWRMaXN0IHtcblxuICAvLyBhdmFpbGFiaWxpdHlfc3RhdHVzIC0gY29tcHV0ZWQ6IHRydWUsIG9wdGlvbmFsOiBmYWxzZSwgcmVxdWlyZWQ6IGZhbHNlXG4gIHB1YmxpYyBnZXQgYXZhaWxhYmlsaXR5U3RhdHVzKCkge1xuICAgIHJldHVybiB0aGlzLmdldFN0cmluZ0F0dHJpYnV0ZSgnYXZhaWxhYmlsaXR5X3N0YXR1cycpO1xuICB9XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBkYXRhQXdzY2NRdWlja3NpZ2h0RGFzaGJvYXJkRGFzaGJvYXJkUHVibGlzaE9wdGlvbnNFeHBvcnRUb0Nzdk9wdGlvblRvVGVycmFmb3JtKHN0cnVjdD86IERhdGFBd3NjY1F1aWNrc2lnaHREYXNoYm9hcmREYXNoYm9hcmRQdWJsaXNoT3B0aW9uc0V4cG9ydFRvQ3N2T3B0aW9uKTogYW55IHtcbiAgaWYgKCFjZGt0Zi5jYW5JbnNwZWN0KHN0cnVjdCkpIHsgcmV0dXJuIHN0cnVjdDsgfVxuICByZXR1cm4ge1xuICAgIGF2YWlsYWJpbGl0eV9zdGF0dXM6IGNka3RmLnN0cmluZ1RvVGVycmFmb3JtKHN0cnVjdCEuYXZhaWxhYmlsaXR5U3RhdHVzKSxcbiAgfVxufVxuXG5leHBvcnQgY2xhc3MgRGF0YUF3c2NjUXVpY2tzaWdodERhc2hib2FyZERhc2hib2FyZFB1Ymxpc2hPcHRpb25zU2hlZXRDb250cm9sc09wdGlvbiBleHRlbmRzIGNka3RmLkNvbXBsZXhDb21wdXRlZExpc3Qge1xuXG4gIC8vIHZpc2liaWxpdHlfc3RhdGUgLSBjb21wdXRlZDogdHJ1ZSwgb3B0aW9uYWw6IGZhbHNlLCByZXF1aXJlZDogZmFsc2VcbiAgcHVibGljIGdldCB2aXNpYmlsaXR5U3RhdGUoKSB7XG4gICAgcmV0dXJuIHRoaXMuZ2V0U3RyaW5nQXR0cmlidXRlKCd2aXNpYmlsaXR5X3N0YXRlJyk7XG4gIH1cbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGRhdGFBd3NjY1F1aWNrc2lnaHREYXNoYm9hcmREYXNoYm9hcmRQdWJsaXNoT3B0aW9uc1NoZWV0Q29udHJvbHNPcHRpb25Ub1RlcnJhZm9ybShzdHJ1Y3Q/OiBEYXRhQXdzY2NRdWlja3NpZ2h0RGFzaGJvYXJkRGFzaGJvYXJkUHVibGlzaE9wdGlvbnNTaGVldENvbnRyb2xzT3B0aW9uKTogYW55IHtcbiAgaWYgKCFjZGt0Zi5jYW5JbnNwZWN0KHN0cnVjdCkpIHsgcmV0dXJuIHN0cnVjdDsgfVxuICByZXR1cm4ge1xuICAgIHZpc2liaWxpdHlfc3RhdGU6IGNka3RmLnN0cmluZ1RvVGVycmFmb3JtKHN0cnVjdCEudmlzaWJpbGl0eVN0YXRlKSxcbiAgfVxufVxuXG5leHBvcnQgY2xhc3MgRGF0YUF3c2NjUXVpY2tzaWdodERhc2hib2FyZERhc2hib2FyZFB1Ymxpc2hPcHRpb25zIGV4dGVuZHMgY2RrdGYuQ29tcGxleENvbXB1dGVkTGlzdCB7XG5cbiAgLy8gYWRfaG9jX2ZpbHRlcmluZ19vcHRpb24gLSBjb21wdXRlZDogdHJ1ZSwgb3B0aW9uYWw6IGZhbHNlLCByZXF1aXJlZDogZmFsc2VcbiAgcHVibGljIGdldCBhZEhvY0ZpbHRlcmluZ09wdGlvbigpIHtcbiAgICByZXR1cm4gdGhpcy5pbnRlcnBvbGF0aW9uRm9yQXR0cmlidXRlKCdhZF9ob2NfZmlsdGVyaW5nX29wdGlvbicpIGFzIGFueTtcbiAgfVxuXG4gIC8vIGV4cG9ydF90b19jc3Zfb3B0aW9uIC0gY29tcHV0ZWQ6IHRydWUsIG9wdGlvbmFsOiBmYWxzZSwgcmVxdWlyZWQ6IGZhbHNlXG4gIHB1YmxpYyBnZXQgZXhwb3J0VG9Dc3ZPcHRpb24oKSB7XG4gICAgcmV0dXJuIHRoaXMuaW50ZXJwb2xhdGlvbkZvckF0dHJpYnV0ZSgnZXhwb3J0X3RvX2Nzdl9vcHRpb24nKSBhcyBhbnk7XG4gIH1cblxuICAvLyBzaGVldF9jb250cm9sc19vcHRpb24gLSBjb21wdXRlZDogdHJ1ZSwgb3B0aW9uYWw6IGZhbHNlLCByZXF1aXJlZDogZmFsc2VcbiAgcHVibGljIGdldCBzaGVldENvbnRyb2xzT3B0aW9uKCkge1xuICAgIHJldHVybiB0aGlzLmludGVycG9sYXRpb25Gb3JBdHRyaWJ1dGUoJ3NoZWV0X2NvbnRyb2xzX29wdGlvbicpIGFzIGFueTtcbiAgfVxufVxuXG5leHBvcnQgZnVuY3Rpb24gZGF0YUF3c2NjUXVpY2tzaWdodERhc2hib2FyZERhc2hib2FyZFB1Ymxpc2hPcHRpb25zVG9UZXJyYWZvcm0oc3RydWN0PzogRGF0YUF3c2NjUXVpY2tzaWdodERhc2hib2FyZERhc2hib2FyZFB1Ymxpc2hPcHRpb25zKTogYW55IHtcbiAgaWYgKCFjZGt0Zi5jYW5JbnNwZWN0KHN0cnVjdCkpIHsgcmV0dXJuIHN0cnVjdDsgfVxuICByZXR1cm4ge1xuICAgIGFkX2hvY19maWx0ZXJpbmdfb3B0aW9uOiBkYXRhQXdzY2NRdWlja3NpZ2h0RGFzaGJvYXJkRGFzaGJvYXJkUHVibGlzaE9wdGlvbnNBZEhvY0ZpbHRlcmluZ09wdGlvblRvVGVycmFmb3JtKHN0cnVjdCEuYWRIb2NGaWx0ZXJpbmdPcHRpb24pLFxuICAgIGV4cG9ydF90b19jc3Zfb3B0aW9uOiBkYXRhQXdzY2NRdWlja3NpZ2h0RGFzaGJvYXJkRGFzaGJvYXJkUHVibGlzaE9wdGlvbnNFeHBvcnRUb0Nzdk9wdGlvblRvVGVycmFmb3JtKHN0cnVjdCEuZXhwb3J0VG9Dc3ZPcHRpb24pLFxuICAgIHNoZWV0X2NvbnRyb2xzX29wdGlvbjogZGF0YUF3c2NjUXVpY2tzaWdodERhc2hib2FyZERhc2hib2FyZFB1Ymxpc2hPcHRpb25zU2hlZXRDb250cm9sc09wdGlvblRvVGVycmFmb3JtKHN0cnVjdCEuc2hlZXRDb250cm9sc09wdGlvbiksXG4gIH1cbn1cblxuZXhwb3J0IGNsYXNzIERhdGFBd3NjY1F1aWNrc2lnaHREYXNoYm9hcmRQYXJhbWV0ZXJzRGF0ZVRpbWVQYXJhbWV0ZXJzIGV4dGVuZHMgY2RrdGYuQ29tcGxleENvbXB1dGVkTGlzdCB7XG5cbiAgLy8gbmFtZSAtIGNvbXB1dGVkOiB0cnVlLCBvcHRpb25hbDogZmFsc2UsIHJlcXVpcmVkOiBmYWxzZVxuICBwdWJsaWMgZ2V0IG5hbWUoKSB7XG4gICAgcmV0dXJuIHRoaXMuZ2V0U3RyaW5nQXR0cmlidXRlKCduYW1lJyk7XG4gIH1cblxuICAvLyB2YWx1ZXMgLSBjb21wdXRlZDogdHJ1ZSwgb3B0aW9uYWw6IGZhbHNlLCByZXF1aXJlZDogZmFsc2VcbiAgcHVibGljIGdldCB2YWx1ZXMoKSB7XG4gICAgcmV0dXJuIHRoaXMuZ2V0TGlzdEF0dHJpYnV0ZSgndmFsdWVzJyk7XG4gIH1cbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGRhdGFBd3NjY1F1aWNrc2lnaHREYXNoYm9hcmRQYXJhbWV0ZXJzRGF0ZVRpbWVQYXJhbWV0ZXJzVG9UZXJyYWZvcm0oc3RydWN0PzogRGF0YUF3c2NjUXVpY2tzaWdodERhc2hib2FyZFBhcmFtZXRlcnNEYXRlVGltZVBhcmFtZXRlcnMpOiBhbnkge1xuICBpZiAoIWNka3RmLmNhbkluc3BlY3Qoc3RydWN0KSkgeyByZXR1cm4gc3RydWN0OyB9XG4gIHJldHVybiB7XG4gICAgbmFtZTogY2RrdGYuc3RyaW5nVG9UZXJyYWZvcm0oc3RydWN0IS5uYW1lKSxcbiAgICB2YWx1ZXM6IGNka3RmLmxpc3RNYXBwZXIoY2RrdGYuc3RyaW5nVG9UZXJyYWZvcm0pKHN0cnVjdCEudmFsdWVzKSxcbiAgfVxufVxuXG5leHBvcnQgY2xhc3MgRGF0YUF3c2NjUXVpY2tzaWdodERhc2hib2FyZFBhcmFtZXRlcnNEZWNpbWFsUGFyYW1ldGVycyBleHRlbmRzIGNka3RmLkNvbXBsZXhDb21wdXRlZExpc3Qge1xuXG4gIC8vIG5hbWUgLSBjb21wdXRlZDogdHJ1ZSwgb3B0aW9uYWw6IGZhbHNlLCByZXF1aXJlZDogZmFsc2VcbiAgcHVibGljIGdldCBuYW1lKCkge1xuICAgIHJldHVybiB0aGlzLmdldFN0cmluZ0F0dHJpYnV0ZSgnbmFtZScpO1xuICB9XG5cbiAgLy8gdmFsdWVzIC0gY29tcHV0ZWQ6IHRydWUsIG9wdGlvbmFsOiBmYWxzZSwgcmVxdWlyZWQ6IGZhbHNlXG4gIHB1YmxpYyBnZXQgdmFsdWVzKCkge1xuICAgIHJldHVybiB0aGlzLmludGVycG9sYXRpb25Gb3JBdHRyaWJ1dGUoJ3ZhbHVlcycpIGFzIGFueTtcbiAgfVxufVxuXG5leHBvcnQgZnVuY3Rpb24gZGF0YUF3c2NjUXVpY2tzaWdodERhc2hib2FyZFBhcmFtZXRlcnNEZWNpbWFsUGFyYW1ldGVyc1RvVGVycmFmb3JtKHN0cnVjdD86IERhdGFBd3NjY1F1aWNrc2lnaHREYXNoYm9hcmRQYXJhbWV0ZXJzRGVjaW1hbFBhcmFtZXRlcnMpOiBhbnkge1xuICBpZiAoIWNka3RmLmNhbkluc3BlY3Qoc3RydWN0KSkgeyByZXR1cm4gc3RydWN0OyB9XG4gIHJldHVybiB7XG4gICAgbmFtZTogY2RrdGYuc3RyaW5nVG9UZXJyYWZvcm0oc3RydWN0IS5uYW1lKSxcbiAgICB2YWx1ZXM6IGNka3RmLmxpc3RNYXBwZXIoY2RrdGYubnVtYmVyVG9UZXJyYWZvcm0pKHN0cnVjdCEudmFsdWVzKSxcbiAgfVxufVxuXG5leHBvcnQgY2xhc3MgRGF0YUF3c2NjUXVpY2tzaWdodERhc2hib2FyZFBhcmFtZXRlcnNJbnRlZ2VyUGFyYW1ldGVycyBleHRlbmRzIGNka3RmLkNvbXBsZXhDb21wdXRlZExpc3Qge1xuXG4gIC8vIG5hbWUgLSBjb21wdXRlZDogdHJ1ZSwgb3B0aW9uYWw6IGZhbHNlLCByZXF1aXJlZDogZmFsc2VcbiAgcHVibGljIGdldCBuYW1lKCkge1xuICAgIHJldHVybiB0aGlzLmdldFN0cmluZ0F0dHJpYnV0ZSgnbmFtZScpO1xuICB9XG5cbiAgLy8gdmFsdWVzIC0gY29tcHV0ZWQ6IHRydWUsIG9wdGlvbmFsOiBmYWxzZSwgcmVxdWlyZWQ6IGZhbHNlXG4gIHB1YmxpYyBnZXQgdmFsdWVzKCkge1xuICAgIHJldHVybiB0aGlzLmludGVycG9sYXRpb25Gb3JBdHRyaWJ1dGUoJ3ZhbHVlcycpIGFzIGFueTtcbiAgfVxufVxuXG5leHBvcnQgZnVuY3Rpb24gZGF0YUF3c2NjUXVpY2tzaWdodERhc2hib2FyZFBhcmFtZXRlcnNJbnRlZ2VyUGFyYW1ldGVyc1RvVGVycmFmb3JtKHN0cnVjdD86IERhdGFBd3NjY1F1aWNrc2lnaHREYXNoYm9hcmRQYXJhbWV0ZXJzSW50ZWdlclBhcmFtZXRlcnMpOiBhbnkge1xuICBpZiAoIWNka3RmLmNhbkluc3BlY3Qoc3RydWN0KSkgeyByZXR1cm4gc3RydWN0OyB9XG4gIHJldHVybiB7XG4gICAgbmFtZTogY2RrdGYuc3RyaW5nVG9UZXJyYWZvcm0oc3RydWN0IS5uYW1lKSxcbiAgICB2YWx1ZXM6IGNka3RmLmxpc3RNYXBwZXIoY2RrdGYubnVtYmVyVG9UZXJyYWZvcm0pKHN0cnVjdCEudmFsdWVzKSxcbiAgfVxufVxuXG5leHBvcnQgY2xhc3MgRGF0YUF3c2NjUXVpY2tzaWdodERhc2hib2FyZFBhcmFtZXRlcnNTdHJpbmdQYXJhbWV0ZXJzIGV4dGVuZHMgY2RrdGYuQ29tcGxleENvbXB1dGVkTGlzdCB7XG5cbiAgLy8gbmFtZSAtIGNvbXB1dGVkOiB0cnVlLCBvcHRpb25hbDogZmFsc2UsIHJlcXVpcmVkOiBmYWxzZVxuICBwdWJsaWMgZ2V0IG5hbWUoKSB7XG4gICAgcmV0dXJuIHRoaXMuZ2V0U3RyaW5nQXR0cmlidXRlKCduYW1lJyk7XG4gIH1cblxuICAvLyB2YWx1ZXMgLSBjb21wdXRlZDogdHJ1ZSwgb3B0aW9uYWw6IGZhbHNlLCByZXF1aXJlZDogZmFsc2VcbiAgcHVibGljIGdldCB2YWx1ZXMoKSB7XG4gICAgcmV0dXJuIHRoaXMuZ2V0TGlzdEF0dHJpYnV0ZSgndmFsdWVzJyk7XG4gIH1cbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGRhdGFBd3NjY1F1aWNrc2lnaHREYXNoYm9hcmRQYXJhbWV0ZXJzU3RyaW5nUGFyYW1ldGVyc1RvVGVycmFmb3JtKHN0cnVjdD86IERhdGFBd3NjY1F1aWNrc2lnaHREYXNoYm9hcmRQYXJhbWV0ZXJzU3RyaW5nUGFyYW1ldGVycyk6IGFueSB7XG4gIGlmICghY2RrdGYuY2FuSW5zcGVjdChzdHJ1Y3QpKSB7IHJldHVybiBzdHJ1Y3Q7IH1cbiAgcmV0dXJuIHtcbiAgICBuYW1lOiBjZGt0Zi5zdHJpbmdUb1RlcnJhZm9ybShzdHJ1Y3QhLm5hbWUpLFxuICAgIHZhbHVlczogY2RrdGYubGlzdE1hcHBlcihjZGt0Zi5zdHJpbmdUb1RlcnJhZm9ybSkoc3RydWN0IS52YWx1ZXMpLFxuICB9XG59XG5cbmV4cG9ydCBjbGFzcyBEYXRhQXdzY2NRdWlja3NpZ2h0RGFzaGJvYXJkUGFyYW1ldGVycyBleHRlbmRzIGNka3RmLkNvbXBsZXhDb21wdXRlZExpc3Qge1xuXG4gIC8vIGRhdGVfdGltZV9wYXJhbWV0ZXJzIC0gY29tcHV0ZWQ6IHRydWUsIG9wdGlvbmFsOiBmYWxzZSwgcmVxdWlyZWQ6IGZhbHNlXG4gIHB1YmxpYyBnZXQgZGF0ZVRpbWVQYXJhbWV0ZXJzKCkge1xuICAgIHJldHVybiB0aGlzLmludGVycG9sYXRpb25Gb3JBdHRyaWJ1dGUoJ2RhdGVfdGltZV9wYXJhbWV0ZXJzJykgYXMgYW55O1xuICB9XG5cbiAgLy8gZGVjaW1hbF9wYXJhbWV0ZXJzIC0gY29tcHV0ZWQ6IHRydWUsIG9wdGlvbmFsOiBmYWxzZSwgcmVxdWlyZWQ6IGZhbHNlXG4gIHB1YmxpYyBnZXQgZGVjaW1hbFBhcmFtZXRlcnMoKSB7XG4gICAgcmV0dXJuIHRoaXMuaW50ZXJwb2xhdGlvbkZvckF0dHJpYnV0ZSgnZGVjaW1hbF9wYXJhbWV0ZXJzJykgYXMgYW55O1xuICB9XG5cbiAgLy8gaW50ZWdlcl9wYXJhbWV0ZXJzIC0gY29tcHV0ZWQ6IHRydWUsIG9wdGlvbmFsOiBmYWxzZSwgcmVxdWlyZWQ6IGZhbHNlXG4gIHB1YmxpYyBnZXQgaW50ZWdlclBhcmFtZXRlcnMoKSB7XG4gICAgcmV0dXJuIHRoaXMuaW50ZXJwb2xhdGlvbkZvckF0dHJpYnV0ZSgnaW50ZWdlcl9wYXJhbWV0ZXJzJykgYXMgYW55O1xuICB9XG5cbiAgLy8gc3RyaW5nX3BhcmFtZXRlcnMgLSBjb21wdXRlZDogdHJ1ZSwgb3B0aW9uYWw6IGZhbHNlLCByZXF1aXJlZDogZmFsc2VcbiAgcHVibGljIGdldCBzdHJpbmdQYXJhbWV0ZXJzKCkge1xuICAgIHJldHVybiB0aGlzLmludGVycG9sYXRpb25Gb3JBdHRyaWJ1dGUoJ3N0cmluZ19wYXJhbWV0ZXJzJykgYXMgYW55O1xuICB9XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBkYXRhQXdzY2NRdWlja3NpZ2h0RGFzaGJvYXJkUGFyYW1ldGVyc1RvVGVycmFmb3JtKHN0cnVjdD86IERhdGFBd3NjY1F1aWNrc2lnaHREYXNoYm9hcmRQYXJhbWV0ZXJzKTogYW55IHtcbiAgaWYgKCFjZGt0Zi5jYW5JbnNwZWN0KHN0cnVjdCkpIHsgcmV0dXJuIHN0cnVjdDsgfVxuICByZXR1cm4ge1xuICAgIGRhdGVfdGltZV9wYXJhbWV0ZXJzOiBjZGt0Zi5saXN0TWFwcGVyKGRhdGFBd3NjY1F1aWNrc2lnaHREYXNoYm9hcmRQYXJhbWV0ZXJzRGF0ZVRpbWVQYXJhbWV0ZXJzVG9UZXJyYWZvcm0pKHN0cnVjdCEuZGF0ZVRpbWVQYXJhbWV0ZXJzKSxcbiAgICBkZWNpbWFsX3BhcmFtZXRlcnM6IGNka3RmLmxpc3RNYXBwZXIoZGF0YUF3c2NjUXVpY2tzaWdodERhc2hib2FyZFBhcmFtZXRlcnNEZWNpbWFsUGFyYW1ldGVyc1RvVGVycmFmb3JtKShzdHJ1Y3QhLmRlY2ltYWxQYXJhbWV0ZXJzKSxcbiAgICBpbnRlZ2VyX3BhcmFtZXRlcnM6IGNka3RmLmxpc3RNYXBwZXIoZGF0YUF3c2NjUXVpY2tzaWdodERhc2hib2FyZFBhcmFtZXRlcnNJbnRlZ2VyUGFyYW1ldGVyc1RvVGVycmFmb3JtKShzdHJ1Y3QhLmludGVnZXJQYXJhbWV0ZXJzKSxcbiAgICBzdHJpbmdfcGFyYW1ldGVyczogY2RrdGYubGlzdE1hcHBlcihkYXRhQXdzY2NRdWlja3NpZ2h0RGFzaGJvYXJkUGFyYW1ldGVyc1N0cmluZ1BhcmFtZXRlcnNUb1RlcnJhZm9ybSkoc3RydWN0IS5zdHJpbmdQYXJhbWV0ZXJzKSxcbiAgfVxufVxuXG5leHBvcnQgY2xhc3MgRGF0YUF3c2NjUXVpY2tzaWdodERhc2hib2FyZFBlcm1pc3Npb25zIGV4dGVuZHMgY2RrdGYuQ29tcGxleENvbXB1dGVkTGlzdCB7XG5cbiAgLy8gYWN0aW9ucyAtIGNvbXB1dGVkOiB0cnVlLCBvcHRpb25hbDogZmFsc2UsIHJlcXVpcmVkOiBmYWxzZVxuICBwdWJsaWMgZ2V0IGFjdGlvbnMoKSB7XG4gICAgcmV0dXJuIHRoaXMuZ2V0TGlzdEF0dHJpYnV0ZSgnYWN0aW9ucycpO1xuICB9XG5cbiAgLy8gcHJpbmNpcGFsIC0gY29tcHV0ZWQ6IHRydWUsIG9wdGlvbmFsOiBmYWxzZSwgcmVxdWlyZWQ6IGZhbHNlXG4gIHB1YmxpYyBnZXQgcHJpbmNpcGFsKCkge1xuICAgIHJldHVybiB0aGlzLmdldFN0cmluZ0F0dHJpYnV0ZSgncHJpbmNpcGFsJyk7XG4gIH1cbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGRhdGFBd3NjY1F1aWNrc2lnaHREYXNoYm9hcmRQZXJtaXNzaW9uc1RvVGVycmFmb3JtKHN0cnVjdD86IERhdGFBd3NjY1F1aWNrc2lnaHREYXNoYm9hcmRQZXJtaXNzaW9ucyk6IGFueSB7XG4gIGlmICghY2RrdGYuY2FuSW5zcGVjdChzdHJ1Y3QpKSB7IHJldHVybiBzdHJ1Y3Q7IH1cbiAgcmV0dXJuIHtcbiAgICBhY3Rpb25zOiBjZGt0Zi5saXN0TWFwcGVyKGNka3RmLnN0cmluZ1RvVGVycmFmb3JtKShzdHJ1Y3QhLmFjdGlvbnMpLFxuICAgIHByaW5jaXBhbDogY2RrdGYuc3RyaW5nVG9UZXJyYWZvcm0oc3RydWN0IS5wcmluY2lwYWwpLFxuICB9XG59XG5cbmV4cG9ydCBjbGFzcyBEYXRhQXdzY2NRdWlja3NpZ2h0RGFzaGJvYXJkU291cmNlRW50aXR5U291cmNlVGVtcGxhdGVEYXRhU2V0UmVmZXJlbmNlcyBleHRlbmRzIGNka3RmLkNvbXBsZXhDb21wdXRlZExpc3Qge1xuXG4gIC8vIGRhdGFfc2V0X2FybiAtIGNvbXB1dGVkOiB0cnVlLCBvcHRpb25hbDogZmFsc2UsIHJlcXVpcmVkOiBmYWxzZVxuICBwdWJsaWMgZ2V0IGRhdGFTZXRBcm4oKSB7XG4gICAgcmV0dXJuIHRoaXMuZ2V0U3RyaW5nQXR0cmlidXRlKCdkYXRhX3NldF9hcm4nKTtcbiAgfVxuXG4gIC8vIGRhdGFfc2V0X3BsYWNlaG9sZGVyIC0gY29tcHV0ZWQ6IHRydWUsIG9wdGlvbmFsOiBmYWxzZSwgcmVxdWlyZWQ6IGZhbHNlXG4gIHB1YmxpYyBnZXQgZGF0YVNldFBsYWNlaG9sZGVyKCkge1xuICAgIHJldHVybiB0aGlzLmdldFN0cmluZ0F0dHJpYnV0ZSgnZGF0YV9zZXRfcGxhY2Vob2xkZXInKTtcbiAgfVxufVxuXG5leHBvcnQgZnVuY3Rpb24gZGF0YUF3c2NjUXVpY2tzaWdodERhc2hib2FyZFNvdXJjZUVudGl0eVNvdXJjZVRlbXBsYXRlRGF0YVNldFJlZmVyZW5jZXNUb1RlcnJhZm9ybShzdHJ1Y3Q/OiBEYXRhQXdzY2NRdWlja3NpZ2h0RGFzaGJvYXJkU291cmNlRW50aXR5U291cmNlVGVtcGxhdGVEYXRhU2V0UmVmZXJlbmNlcyk6IGFueSB7XG4gIGlmICghY2RrdGYuY2FuSW5zcGVjdChzdHJ1Y3QpKSB7IHJldHVybiBzdHJ1Y3Q7IH1cbiAgcmV0dXJuIHtcbiAgICBkYXRhX3NldF9hcm46IGNka3RmLnN0cmluZ1RvVGVycmFmb3JtKHN0cnVjdCEuZGF0YVNldEFybiksXG4gICAgZGF0YV9zZXRfcGxhY2Vob2xkZXI6IGNka3RmLnN0cmluZ1RvVGVycmFmb3JtKHN0cnVjdCEuZGF0YVNldFBsYWNlaG9sZGVyKSxcbiAgfVxufVxuXG5leHBvcnQgY2xhc3MgRGF0YUF3c2NjUXVpY2tzaWdodERhc2hib2FyZFNvdXJjZUVudGl0eVNvdXJjZVRlbXBsYXRlIGV4dGVuZHMgY2RrdGYuQ29tcGxleENvbXB1dGVkTGlzdCB7XG5cbiAgLy8gYXJuIC0gY29tcHV0ZWQ6IHRydWUsIG9wdGlvbmFsOiBmYWxzZSwgcmVxdWlyZWQ6IGZhbHNlXG4gIHB1YmxpYyBnZXQgYXJuKCkge1xuICAgIHJldHVybiB0aGlzLmdldFN0cmluZ0F0dHJpYnV0ZSgnYXJuJyk7XG4gIH1cblxuICAvLyBkYXRhX3NldF9yZWZlcmVuY2VzIC0gY29tcHV0ZWQ6IHRydWUsIG9wdGlvbmFsOiBmYWxzZSwgcmVxdWlyZWQ6IGZhbHNlXG4gIHB1YmxpYyBnZXQgZGF0YVNldFJlZmVyZW5jZXMoKSB7XG4gICAgcmV0dXJuIHRoaXMuaW50ZXJwb2xhdGlvbkZvckF0dHJpYnV0ZSgnZGF0YV9zZXRfcmVmZXJlbmNlcycpIGFzIGFueTtcbiAgfVxufVxuXG5leHBvcnQgZnVuY3Rpb24gZGF0YUF3c2NjUXVpY2tzaWdodERhc2hib2FyZFNvdXJjZUVudGl0eVNvdXJjZVRlbXBsYXRlVG9UZXJyYWZvcm0oc3RydWN0PzogRGF0YUF3c2NjUXVpY2tzaWdodERhc2hib2FyZFNvdXJjZUVudGl0eVNvdXJjZVRlbXBsYXRlKTogYW55IHtcbiAgaWYgKCFjZGt0Zi5jYW5JbnNwZWN0KHN0cnVjdCkpIHsgcmV0dXJuIHN0cnVjdDsgfVxuICByZXR1cm4ge1xuICAgIGFybjogY2RrdGYuc3RyaW5nVG9UZXJyYWZvcm0oc3RydWN0IS5hcm4pLFxuICAgIGRhdGFfc2V0X3JlZmVyZW5jZXM6IGNka3RmLmxpc3RNYXBwZXIoZGF0YUF3c2NjUXVpY2tzaWdodERhc2hib2FyZFNvdXJjZUVudGl0eVNvdXJjZVRlbXBsYXRlRGF0YVNldFJlZmVyZW5jZXNUb1RlcnJhZm9ybSkoc3RydWN0IS5kYXRhU2V0UmVmZXJlbmNlcyksXG4gIH1cbn1cblxuZXhwb3J0IGNsYXNzIERhdGFBd3NjY1F1aWNrc2lnaHREYXNoYm9hcmRTb3VyY2VFbnRpdHkgZXh0ZW5kcyBjZGt0Zi5Db21wbGV4Q29tcHV0ZWRMaXN0IHtcblxuICAvLyBzb3VyY2VfdGVtcGxhdGUgLSBjb21wdXRlZDogdHJ1ZSwgb3B0aW9uYWw6IGZhbHNlLCByZXF1aXJlZDogZmFsc2VcbiAgcHVibGljIGdldCBzb3VyY2VUZW1wbGF0ZSgpIHtcbiAgICByZXR1cm4gdGhpcy5pbnRlcnBvbGF0aW9uRm9yQXR0cmlidXRlKCdzb3VyY2VfdGVtcGxhdGUnKSBhcyBhbnk7XG4gIH1cbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGRhdGFBd3NjY1F1aWNrc2lnaHREYXNoYm9hcmRTb3VyY2VFbnRpdHlUb1RlcnJhZm9ybShzdHJ1Y3Q/OiBEYXRhQXdzY2NRdWlja3NpZ2h0RGFzaGJvYXJkU291cmNlRW50aXR5KTogYW55IHtcbiAgaWYgKCFjZGt0Zi5jYW5JbnNwZWN0KHN0cnVjdCkpIHsgcmV0dXJuIHN0cnVjdDsgfVxuICByZXR1cm4ge1xuICAgIHNvdXJjZV90ZW1wbGF0ZTogZGF0YUF3c2NjUXVpY2tzaWdodERhc2hib2FyZFNvdXJjZUVudGl0eVNvdXJjZVRlbXBsYXRlVG9UZXJyYWZvcm0oc3RydWN0IS5zb3VyY2VUZW1wbGF0ZSksXG4gIH1cbn1cblxuZXhwb3J0IGNsYXNzIERhdGFBd3NjY1F1aWNrc2lnaHREYXNoYm9hcmRUYWdzIGV4dGVuZHMgY2RrdGYuQ29tcGxleENvbXB1dGVkTGlzdCB7XG5cbiAgLy8ga2V5IC0gY29tcHV0ZWQ6IHRydWUsIG9wdGlvbmFsOiBmYWxzZSwgcmVxdWlyZWQ6IGZhbHNlXG4gIHB1YmxpYyBnZXQga2V5KCkge1xuICAgIHJldHVybiB0aGlzLmdldFN0cmluZ0F0dHJpYnV0ZSgna2V5Jyk7XG4gIH1cblxuICAvLyB2YWx1ZSAtIGNvbXB1dGVkOiB0cnVlLCBvcHRpb25hbDogZmFsc2UsIHJlcXVpcmVkOiBmYWxzZVxuICBwdWJsaWMgZ2V0IHZhbHVlKCkge1xuICAgIHJldHVybiB0aGlzLmdldFN0cmluZ0F0dHJpYnV0ZSgndmFsdWUnKTtcbiAgfVxufVxuXG5leHBvcnQgZnVuY3Rpb24gZGF0YUF3c2NjUXVpY2tzaWdodERhc2hib2FyZFRhZ3NUb1RlcnJhZm9ybShzdHJ1Y3Q/OiBEYXRhQXdzY2NRdWlja3NpZ2h0RGFzaGJvYXJkVGFncyk6IGFueSB7XG4gIGlmICghY2RrdGYuY2FuSW5zcGVjdChzdHJ1Y3QpKSB7IHJldHVybiBzdHJ1Y3Q7IH1cbiAgcmV0dXJuIHtcbiAgICBrZXk6IGNka3RmLnN0cmluZ1RvVGVycmFmb3JtKHN0cnVjdCEua2V5KSxcbiAgICB2YWx1ZTogY2RrdGYuc3RyaW5nVG9UZXJyYWZvcm0oc3RydWN0IS52YWx1ZSksXG4gIH1cbn1cblxuZXhwb3J0IGNsYXNzIERhdGFBd3NjY1F1aWNrc2lnaHREYXNoYm9hcmRWZXJzaW9uRXJyb3JzIGV4dGVuZHMgY2RrdGYuQ29tcGxleENvbXB1dGVkTGlzdCB7XG5cbiAgLy8gbWVzc2FnZSAtIGNvbXB1dGVkOiB0cnVlLCBvcHRpb25hbDogZmFsc2UsIHJlcXVpcmVkOiBmYWxzZVxuICBwdWJsaWMgZ2V0IG1lc3NhZ2UoKSB7XG4gICAgcmV0dXJuIHRoaXMuZ2V0U3RyaW5nQXR0cmlidXRlKCdtZXNzYWdlJyk7XG4gIH1cblxuICAvLyB0eXBlIC0gY29tcHV0ZWQ6IHRydWUsIG9wdGlvbmFsOiBmYWxzZSwgcmVxdWlyZWQ6IGZhbHNlXG4gIHB1YmxpYyBnZXQgdHlwZSgpIHtcbiAgICByZXR1cm4gdGhpcy5nZXRTdHJpbmdBdHRyaWJ1dGUoJ3R5cGUnKTtcbiAgfVxufVxuXG5leHBvcnQgZnVuY3Rpb24gZGF0YUF3c2NjUXVpY2tzaWdodERhc2hib2FyZFZlcnNpb25FcnJvcnNUb1RlcnJhZm9ybShzdHJ1Y3Q/OiBEYXRhQXdzY2NRdWlja3NpZ2h0RGFzaGJvYXJkVmVyc2lvbkVycm9ycyk6IGFueSB7XG4gIGlmICghY2RrdGYuY2FuSW5zcGVjdChzdHJ1Y3QpKSB7IHJldHVybiBzdHJ1Y3Q7IH1cbiAgcmV0dXJuIHtcbiAgICBtZXNzYWdlOiBjZGt0Zi5zdHJpbmdUb1RlcnJhZm9ybShzdHJ1Y3QhLm1lc3NhZ2UpLFxuICAgIHR5cGU6IGNka3RmLnN0cmluZ1RvVGVycmFmb3JtKHN0cnVjdCEudHlwZSksXG4gIH1cbn1cblxuZXhwb3J0IGNsYXNzIERhdGFBd3NjY1F1aWNrc2lnaHREYXNoYm9hcmRWZXJzaW9uU2hlZXRzIGV4dGVuZHMgY2RrdGYuQ29tcGxleENvbXB1dGVkTGlzdCB7XG5cbiAgLy8gbmFtZSAtIGNvbXB1dGVkOiB0cnVlLCBvcHRpb25hbDogZmFsc2UsIHJlcXVpcmVkOiBmYWxzZVxuICBwdWJsaWMgZ2V0IG5hbWUoKSB7XG4gICAgcmV0dXJuIHRoaXMuZ2V0U3RyaW5nQXR0cmlidXRlKCduYW1lJyk7XG4gIH1cblxuICAvLyBzaGVldF9pZCAtIGNvbXB1dGVkOiB0cnVlLCBvcHRpb25hbDogZmFsc2UsIHJlcXVpcmVkOiBmYWxzZVxuICBwdWJsaWMgZ2V0IHNoZWV0SWQoKSB7XG4gICAgcmV0dXJuIHRoaXMuZ2V0U3RyaW5nQXR0cmlidXRlKCdzaGVldF9pZCcpO1xuICB9XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBkYXRhQXdzY2NRdWlja3NpZ2h0RGFzaGJvYXJkVmVyc2lvblNoZWV0c1RvVGVycmFmb3JtKHN0cnVjdD86IERhdGFBd3NjY1F1aWNrc2lnaHREYXNoYm9hcmRWZXJzaW9uU2hlZXRzKTogYW55IHtcbiAgaWYgKCFjZGt0Zi5jYW5JbnNwZWN0KHN0cnVjdCkpIHsgcmV0dXJuIHN0cnVjdDsgfVxuICByZXR1cm4ge1xuICAgIG5hbWU6IGNka3RmLnN0cmluZ1RvVGVycmFmb3JtKHN0cnVjdCEubmFtZSksXG4gICAgc2hlZXRfaWQ6IGNka3RmLnN0cmluZ1RvVGVycmFmb3JtKHN0cnVjdCEuc2hlZXRJZCksXG4gIH1cbn1cblxuZXhwb3J0IGNsYXNzIERhdGFBd3NjY1F1aWNrc2lnaHREYXNoYm9hcmRWZXJzaW9uIGV4dGVuZHMgY2RrdGYuQ29tcGxleENvbXB1dGVkTGlzdCB7XG5cbiAgLy8gYXJuIC0gY29tcHV0ZWQ6IHRydWUsIG9wdGlvbmFsOiBmYWxzZSwgcmVxdWlyZWQ6IGZhbHNlXG4gIHB1YmxpYyBnZXQgYXJuKCkge1xuICAgIHJldHVybiB0aGlzLmdldFN0cmluZ0F0dHJpYnV0ZSgnYXJuJyk7XG4gIH1cblxuICAvLyBjcmVhdGVkX3RpbWUgLSBjb21wdXRlZDogdHJ1ZSwgb3B0aW9uYWw6IGZhbHNlLCByZXF1aXJlZDogZmFsc2VcbiAgcHVibGljIGdldCBjcmVhdGVkVGltZSgpIHtcbiAgICByZXR1cm4gdGhpcy5nZXRTdHJpbmdBdHRyaWJ1dGUoJ2NyZWF0ZWRfdGltZScpO1xuICB9XG5cbiAgLy8gZGF0YV9zZXRfYXJucyAtIGNvbXB1dGVkOiB0cnVlLCBvcHRpb25hbDogZmFsc2UsIHJlcXVpcmVkOiBmYWxzZVxuICBwdWJsaWMgZ2V0IGRhdGFTZXRBcm5zKCkge1xuICAgIHJldHVybiB0aGlzLmdldExpc3RBdHRyaWJ1dGUoJ2RhdGFfc2V0X2FybnMnKTtcbiAgfVxuXG4gIC8vIGRlc2NyaXB0aW9uIC0gY29tcHV0ZWQ6IHRydWUsIG9wdGlvbmFsOiBmYWxzZSwgcmVxdWlyZWQ6IGZhbHNlXG4gIHB1YmxpYyBnZXQgZGVzY3JpcHRpb24oKSB7XG4gICAgcmV0dXJuIHRoaXMuZ2V0U3RyaW5nQXR0cmlidXRlKCdkZXNjcmlwdGlvbicpO1xuICB9XG5cbiAgLy8gZXJyb3JzIC0gY29tcHV0ZWQ6IHRydWUsIG9wdGlvbmFsOiBmYWxzZSwgcmVxdWlyZWQ6IGZhbHNlXG4gIHB1YmxpYyBnZXQgZXJyb3JzKCkge1xuICAgIHJldHVybiB0aGlzLmludGVycG9sYXRpb25Gb3JBdHRyaWJ1dGUoJ2Vycm9ycycpIGFzIGFueTtcbiAgfVxuXG4gIC8vIHNoZWV0cyAtIGNvbXB1dGVkOiB0cnVlLCBvcHRpb25hbDogZmFsc2UsIHJlcXVpcmVkOiBmYWxzZVxuICBwdWJsaWMgZ2V0IHNoZWV0cygpIHtcbiAgICByZXR1cm4gdGhpcy5pbnRlcnBvbGF0aW9uRm9yQXR0cmlidXRlKCdzaGVldHMnKSBhcyBhbnk7XG4gIH1cblxuICAvLyBzb3VyY2VfZW50aXR5X2FybiAtIGNvbXB1dGVkOiB0cnVlLCBvcHRpb25hbDogZmFsc2UsIHJlcXVpcmVkOiBmYWxzZVxuICBwdWJsaWMgZ2V0IHNvdXJjZUVudGl0eUFybigpIHtcbiAgICByZXR1cm4gdGhpcy5nZXRTdHJpbmdBdHRyaWJ1dGUoJ3NvdXJjZV9lbnRpdHlfYXJuJyk7XG4gIH1cblxuICAvLyBzdGF0dXMgLSBjb21wdXRlZDogdHJ1ZSwgb3B0aW9uYWw6IGZhbHNlLCByZXF1aXJlZDogZmFsc2VcbiAgcHVibGljIGdldCBzdGF0dXMoKSB7XG4gICAgcmV0dXJuIHRoaXMuZ2V0U3RyaW5nQXR0cmlidXRlKCdzdGF0dXMnKTtcbiAgfVxuXG4gIC8vIHRoZW1lX2FybiAtIGNvbXB1dGVkOiB0cnVlLCBvcHRpb25hbDogZmFsc2UsIHJlcXVpcmVkOiBmYWxzZVxuICBwdWJsaWMgZ2V0IHRoZW1lQXJuKCkge1xuICAgIHJldHVybiB0aGlzLmdldFN0cmluZ0F0dHJpYnV0ZSgndGhlbWVfYXJuJyk7XG4gIH1cblxuICAvLyB2ZXJzaW9uX251bWJlciAtIGNvbXB1dGVkOiB0cnVlLCBvcHRpb25hbDogZmFsc2UsIHJlcXVpcmVkOiBmYWxzZVxuICBwdWJsaWMgZ2V0IHZlcnNpb25OdW1iZXIoKSB7XG4gICAgcmV0dXJuIHRoaXMuZ2V0TnVtYmVyQXR0cmlidXRlKCd2ZXJzaW9uX251bWJlcicpO1xuICB9XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBkYXRhQXdzY2NRdWlja3NpZ2h0RGFzaGJvYXJkVmVyc2lvblRvVGVycmFmb3JtKHN0cnVjdD86IERhdGFBd3NjY1F1aWNrc2lnaHREYXNoYm9hcmRWZXJzaW9uKTogYW55IHtcbiAgaWYgKCFjZGt0Zi5jYW5JbnNwZWN0KHN0cnVjdCkpIHsgcmV0dXJuIHN0cnVjdDsgfVxuICByZXR1cm4ge1xuICAgIGFybjogY2RrdGYuc3RyaW5nVG9UZXJyYWZvcm0oc3RydWN0IS5hcm4pLFxuICAgIGNyZWF0ZWRfdGltZTogY2RrdGYuc3RyaW5nVG9UZXJyYWZvcm0oc3RydWN0IS5jcmVhdGVkVGltZSksXG4gICAgZGF0YV9zZXRfYXJuczogY2RrdGYubGlzdE1hcHBlcihjZGt0Zi5zdHJpbmdUb1RlcnJhZm9ybSkoc3RydWN0IS5kYXRhU2V0QXJucyksXG4gICAgZGVzY3JpcHRpb246IGNka3RmLnN0cmluZ1RvVGVycmFmb3JtKHN0cnVjdCEuZGVzY3JpcHRpb24pLFxuICAgIGVycm9yczogY2RrdGYubGlzdE1hcHBlcihkYXRhQXdzY2NRdWlja3NpZ2h0RGFzaGJvYXJkVmVyc2lvbkVycm9yc1RvVGVycmFmb3JtKShzdHJ1Y3QhLmVycm9ycyksXG4gICAgc2hlZXRzOiBjZGt0Zi5saXN0TWFwcGVyKGRhdGFBd3NjY1F1aWNrc2lnaHREYXNoYm9hcmRWZXJzaW9uU2hlZXRzVG9UZXJyYWZvcm0pKHN0cnVjdCEuc2hlZXRzKSxcbiAgICBzb3VyY2VfZW50aXR5X2FybjogY2RrdGYuc3RyaW5nVG9UZXJyYWZvcm0oc3RydWN0IS5zb3VyY2VFbnRpdHlBcm4pLFxuICAgIHN0YXR1czogY2RrdGYuc3RyaW5nVG9UZXJyYWZvcm0oc3RydWN0IS5zdGF0dXMpLFxuICAgIHRoZW1lX2FybjogY2RrdGYuc3RyaW5nVG9UZXJyYWZvcm0oc3RydWN0IS50aGVtZUFybiksXG4gICAgdmVyc2lvbl9udW1iZXI6IGNka3RmLm51bWJlclRvVGVycmFmb3JtKHN0cnVjdCEudmVyc2lvbk51bWJlciksXG4gIH1cbn1cblxuXG4vKipcbiogUmVwcmVzZW50cyBhIHtAbGluayBodHRwczovL3d3dy50ZXJyYWZvcm0uaW8vZG9jcy9wcm92aWRlcnMvYXdzY2MvZC9xdWlja3NpZ2h0X2Rhc2hib2FyZC5odG1sIGF3c2NjX3F1aWNrc2lnaHRfZGFzaGJvYXJkfVxuKi9cbmV4cG9ydCBjbGFzcyBEYXRhQXdzY2NRdWlja3NpZ2h0RGFzaGJvYXJkIGV4dGVuZHMgY2RrdGYuVGVycmFmb3JtRGF0YVNvdXJjZSB7XG5cbiAgLy8gPT09PT09PT09PT09PT09PT1cbiAgLy8gU1RBVElDIFBST1BFUlRJRVNcbiAgLy8gPT09PT09PT09PT09PT09PT1cbiAgcHVibGljIHN0YXRpYyByZWFkb25seSB0ZlJlc291cmNlVHlwZTogc3RyaW5nID0gXCJhd3NjY19xdWlja3NpZ2h0X2Rhc2hib2FyZFwiO1xuXG4gIC8vID09PT09PT09PT09XG4gIC8vIElOSVRJQUxJWkVSXG4gIC8vID09PT09PT09PT09XG5cbiAgLyoqXG4gICogQ3JlYXRlIGEgbmV3IHtAbGluayBodHRwczovL3d3dy50ZXJyYWZvcm0uaW8vZG9jcy9wcm92aWRlcnMvYXdzY2MvZC9xdWlja3NpZ2h0X2Rhc2hib2FyZC5odG1sIGF3c2NjX3F1aWNrc2lnaHRfZGFzaGJvYXJkfSBEYXRhIFNvdXJjZVxuICAqXG4gICogQHBhcmFtIHNjb3BlIFRoZSBzY29wZSBpbiB3aGljaCB0byBkZWZpbmUgdGhpcyBjb25zdHJ1Y3RcbiAgKiBAcGFyYW0gaWQgVGhlIHNjb3BlZCBjb25zdHJ1Y3QgSUQuIE11c3QgYmUgdW5pcXVlIGFtb25nc3Qgc2libGluZ3MgaW4gdGhlIHNhbWUgc2NvcGVcbiAgKiBAcGFyYW0gb3B0aW9ucyBEYXRhQXdzY2NRdWlja3NpZ2h0RGFzaGJvYXJkQ29uZmlnXG4gICovXG4gIHB1YmxpYyBjb25zdHJ1Y3RvcihzY29wZTogQ29uc3RydWN0LCBpZDogc3RyaW5nLCBjb25maWc6IERhdGFBd3NjY1F1aWNrc2lnaHREYXNoYm9hcmRDb25maWcpIHtcbiAgICBzdXBlcihzY29wZSwgaWQsIHtcbiAgICAgIHRlcnJhZm9ybVJlc291cmNlVHlwZTogJ2F3c2NjX3F1aWNrc2lnaHRfZGFzaGJvYXJkJyxcbiAgICAgIHRlcnJhZm9ybUdlbmVyYXRvck1ldGFkYXRhOiB7XG4gICAgICAgIHByb3ZpZGVyTmFtZTogJ2F3c2NjJ1xuICAgICAgfSxcbiAgICAgIHByb3ZpZGVyOiBjb25maWcucHJvdmlkZXIsXG4gICAgICBkZXBlbmRzT246IGNvbmZpZy5kZXBlbmRzT24sXG4gICAgICBjb3VudDogY29uZmlnLmNvdW50LFxuICAgICAgbGlmZWN5Y2xlOiBjb25maWcubGlmZWN5Y2xlXG4gICAgfSk7XG4gICAgdGhpcy5faWQgPSBjb25maWcuaWQ7XG4gIH1cblxuICAvLyA9PT09PT09PT09XG4gIC8vIEFUVFJJQlVURVNcbiAgLy8gPT09PT09PT09PVxuXG4gIC8vIGFybiAtIGNvbXB1dGVkOiB0cnVlLCBvcHRpb25hbDogZmFsc2UsIHJlcXVpcmVkOiBmYWxzZVxuICBwdWJsaWMgZ2V0IGFybigpIHtcbiAgICByZXR1cm4gdGhpcy5nZXRTdHJpbmdBdHRyaWJ1dGUoJ2FybicpO1xuICB9XG5cbiAgLy8gYXdzX2FjY291bnRfaWQgLSBjb21wdXRlZDogdHJ1ZSwgb3B0aW9uYWw6IGZhbHNlLCByZXF1aXJlZDogZmFsc2VcbiAgcHVibGljIGdldCBhd3NBY2NvdW50SWQoKSB7XG4gICAgcmV0dXJuIHRoaXMuZ2V0U3RyaW5nQXR0cmlidXRlKCdhd3NfYWNjb3VudF9pZCcpO1xuICB9XG5cbiAgLy8gY3JlYXRlZF90aW1lIC0gY29tcHV0ZWQ6IHRydWUsIG9wdGlvbmFsOiBmYWxzZSwgcmVxdWlyZWQ6IGZhbHNlXG4gIHB1YmxpYyBnZXQgY3JlYXRlZFRpbWUoKSB7XG4gICAgcmV0dXJuIHRoaXMuZ2V0U3RyaW5nQXR0cmlidXRlKCdjcmVhdGVkX3RpbWUnKTtcbiAgfVxuXG4gIC8vIGRhc2hib2FyZF9pZCAtIGNvbXB1dGVkOiB0cnVlLCBvcHRpb25hbDogZmFsc2UsIHJlcXVpcmVkOiBmYWxzZVxuICBwdWJsaWMgZ2V0IGRhc2hib2FyZElkKCkge1xuICAgIHJldHVybiB0aGlzLmdldFN0cmluZ0F0dHJpYnV0ZSgnZGFzaGJvYXJkX2lkJyk7XG4gIH1cblxuICAvLyBkYXNoYm9hcmRfcHVibGlzaF9vcHRpb25zIC0gY29tcHV0ZWQ6IHRydWUsIG9wdGlvbmFsOiBmYWxzZSwgcmVxdWlyZWQ6IGZhbHNlXG4gIHB1YmxpYyBnZXQgZGFzaGJvYXJkUHVibGlzaE9wdGlvbnMoKSB7XG4gICAgcmV0dXJuIHRoaXMuaW50ZXJwb2xhdGlvbkZvckF0dHJpYnV0ZSgnZGFzaGJvYXJkX3B1Ymxpc2hfb3B0aW9ucycpIGFzIGFueTtcbiAgfVxuXG4gIC8vIGlkIC0gY29tcHV0ZWQ6IGZhbHNlLCBvcHRpb25hbDogZmFsc2UsIHJlcXVpcmVkOiB0cnVlXG4gIHByaXZhdGUgX2lkOiBzdHJpbmc7XG4gIHB1YmxpYyBnZXQgaWQoKSB7XG4gICAgcmV0dXJuIHRoaXMuZ2V0U3RyaW5nQXR0cmlidXRlKCdpZCcpO1xuICB9XG4gIHB1YmxpYyBzZXQgaWQodmFsdWU6IHN0cmluZykge1xuICAgIHRoaXMuX2lkID0gdmFsdWU7XG4gIH1cbiAgLy8gVGVtcG9yYXJpbHkgZXhwb3NlIGlucHV0IHZhbHVlLiBVc2Ugd2l0aCBjYXV0aW9uLlxuICBwdWJsaWMgZ2V0IGlkSW5wdXQoKSB7XG4gICAgcmV0dXJuIHRoaXMuX2lkXG4gIH1cblxuICAvLyBsYXN0X3B1Ymxpc2hlZF90aW1lIC0gY29tcHV0ZWQ6IHRydWUsIG9wdGlvbmFsOiBmYWxzZSwgcmVxdWlyZWQ6IGZhbHNlXG4gIHB1YmxpYyBnZXQgbGFzdFB1Ymxpc2hlZFRpbWUoKSB7XG4gICAgcmV0dXJuIHRoaXMuZ2V0U3RyaW5nQXR0cmlidXRlKCdsYXN0X3B1Ymxpc2hlZF90aW1lJyk7XG4gIH1cblxuICAvLyBsYXN0X3VwZGF0ZWRfdGltZSAtIGNvbXB1dGVkOiB0cnVlLCBvcHRpb25hbDogZmFsc2UsIHJlcXVpcmVkOiBmYWxzZVxuICBwdWJsaWMgZ2V0IGxhc3RVcGRhdGVkVGltZSgpIHtcbiAgICByZXR1cm4gdGhpcy5nZXRTdHJpbmdBdHRyaWJ1dGUoJ2xhc3RfdXBkYXRlZF90aW1lJyk7XG4gIH1cblxuICAvLyBuYW1lIC0gY29tcHV0ZWQ6IHRydWUsIG9wdGlvbmFsOiBmYWxzZSwgcmVxdWlyZWQ6IGZhbHNlXG4gIHB1YmxpYyBnZXQgbmFtZSgpIHtcbiAgICByZXR1cm4gdGhpcy5nZXRTdHJpbmdBdHRyaWJ1dGUoJ25hbWUnKTtcbiAgfVxuXG4gIC8vIHBhcmFtZXRlcnMgLSBjb21wdXRlZDogdHJ1ZSwgb3B0aW9uYWw6IGZhbHNlLCByZXF1aXJlZDogZmFsc2VcbiAgcHVibGljIGdldCBwYXJhbWV0ZXJzKCkge1xuICAgIHJldHVybiB0aGlzLmludGVycG9sYXRpb25Gb3JBdHRyaWJ1dGUoJ3BhcmFtZXRlcnMnKSBhcyBhbnk7XG4gIH1cblxuICAvLyBwZXJtaXNzaW9ucyAtIGNvbXB1dGVkOiB0cnVlLCBvcHRpb25hbDogZmFsc2UsIHJlcXVpcmVkOiBmYWxzZVxuICBwdWJsaWMgZ2V0IHBlcm1pc3Npb25zKCkge1xuICAgIHJldHVybiB0aGlzLmludGVycG9sYXRpb25Gb3JBdHRyaWJ1dGUoJ3Blcm1pc3Npb25zJykgYXMgYW55O1xuICB9XG5cbiAgLy8gc291cmNlX2VudGl0eSAtIGNvbXB1dGVkOiB0cnVlLCBvcHRpb25hbDogZmFsc2UsIHJlcXVpcmVkOiBmYWxzZVxuICBwdWJsaWMgZ2V0IHNvdXJjZUVudGl0eSgpIHtcbiAgICByZXR1cm4gdGhpcy5pbnRlcnBvbGF0aW9uRm9yQXR0cmlidXRlKCdzb3VyY2VfZW50aXR5JykgYXMgYW55O1xuICB9XG5cbiAgLy8gdGFncyAtIGNvbXB1dGVkOiB0cnVlLCBvcHRpb25hbDogZmFsc2UsIHJlcXVpcmVkOiBmYWxzZVxuICBwdWJsaWMgZ2V0IHRhZ3MoKSB7XG4gICAgcmV0dXJuIHRoaXMuaW50ZXJwb2xhdGlvbkZvckF0dHJpYnV0ZSgndGFncycpIGFzIGFueTtcbiAgfVxuXG4gIC8vIHRoZW1lX2FybiAtIGNvbXB1dGVkOiB0cnVlLCBvcHRpb25hbDogZmFsc2UsIHJlcXVpcmVkOiBmYWxzZVxuICBwdWJsaWMgZ2V0IHRoZW1lQXJuKCkge1xuICAgIHJldHVybiB0aGlzLmdldFN0cmluZ0F0dHJpYnV0ZSgndGhlbWVfYXJuJyk7XG4gIH1cblxuICAvLyB2ZXJzaW9uIC0gY29tcHV0ZWQ6IHRydWUsIG9wdGlvbmFsOiBmYWxzZSwgcmVxdWlyZWQ6IGZhbHNlXG4gIHB1YmxpYyBnZXQgdmVyc2lvbigpIHtcbiAgICByZXR1cm4gdGhpcy5pbnRlcnBvbGF0aW9uRm9yQXR0cmlidXRlKCd2ZXJzaW9uJykgYXMgYW55O1xuICB9XG5cbiAgLy8gdmVyc2lvbl9kZXNjcmlwdGlvbiAtIGNvbXB1dGVkOiB0cnVlLCBvcHRpb25hbDogZmFsc2UsIHJlcXVpcmVkOiBmYWxzZVxuICBwdWJsaWMgZ2V0IHZlcnNpb25EZXNjcmlwdGlvbigpIHtcbiAgICByZXR1cm4gdGhpcy5nZXRTdHJpbmdBdHRyaWJ1dGUoJ3ZlcnNpb25fZGVzY3JpcHRpb24nKTtcbiAgfVxuXG4gIC8vID09PT09PT09PVxuICAvLyBTWU5USEVTSVNcbiAgLy8gPT09PT09PT09XG5cbiAgcHJvdGVjdGVkIHN5bnRoZXNpemVBdHRyaWJ1dGVzKCk6IHsgW25hbWU6IHN0cmluZ106IGFueSB9IHtcbiAgICByZXR1cm4ge1xuICAgICAgaWQ6IGNka3RmLnN0cmluZ1RvVGVycmFmb3JtKHRoaXMuX2lkKSxcbiAgICB9O1xuICB9XG59XG4iXX0=