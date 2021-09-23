"use strict";
// https://www.terraform.io/docs/providers/awscc/d/quicksight_analysis.html
// generated from terraform resource schema
Object.defineProperty(exports, "__esModule", { value: true });
exports.DataAwsccQuicksightAnalysis = exports.dataAwsccQuicksightAnalysisTagsToTerraform = exports.DataAwsccQuicksightAnalysisTags = exports.dataAwsccQuicksightAnalysisSourceEntityToTerraform = exports.DataAwsccQuicksightAnalysisSourceEntity = exports.dataAwsccQuicksightAnalysisSourceEntitySourceTemplateToTerraform = exports.DataAwsccQuicksightAnalysisSourceEntitySourceTemplate = exports.dataAwsccQuicksightAnalysisSourceEntitySourceTemplateDataSetReferencesToTerraform = exports.DataAwsccQuicksightAnalysisSourceEntitySourceTemplateDataSetReferences = exports.dataAwsccQuicksightAnalysisSheetsToTerraform = exports.DataAwsccQuicksightAnalysisSheets = exports.dataAwsccQuicksightAnalysisPermissionsToTerraform = exports.DataAwsccQuicksightAnalysisPermissions = exports.dataAwsccQuicksightAnalysisParametersToTerraform = exports.DataAwsccQuicksightAnalysisParameters = exports.dataAwsccQuicksightAnalysisParametersStringParametersToTerraform = exports.DataAwsccQuicksightAnalysisParametersStringParameters = exports.dataAwsccQuicksightAnalysisParametersIntegerParametersToTerraform = exports.DataAwsccQuicksightAnalysisParametersIntegerParameters = exports.dataAwsccQuicksightAnalysisParametersDecimalParametersToTerraform = exports.DataAwsccQuicksightAnalysisParametersDecimalParameters = exports.dataAwsccQuicksightAnalysisParametersDateTimeParametersToTerraform = exports.DataAwsccQuicksightAnalysisParametersDateTimeParameters = exports.dataAwsccQuicksightAnalysisErrorsToTerraform = exports.DataAwsccQuicksightAnalysisErrors = void 0;
const cdktf = require("cdktf");
class DataAwsccQuicksightAnalysisErrors extends cdktf.ComplexComputedList {
    // message - computed: true, optional: false, required: false
    get message() {
        return this.getStringAttribute('message');
    }
    // type - computed: true, optional: false, required: false
    get type() {
        return this.getStringAttribute('type');
    }
}
exports.DataAwsccQuicksightAnalysisErrors = DataAwsccQuicksightAnalysisErrors;
function dataAwsccQuicksightAnalysisErrorsToTerraform(struct) {
    if (!cdktf.canInspect(struct)) {
        return struct;
    }
    return {
        message: cdktf.stringToTerraform(struct.message),
        type: cdktf.stringToTerraform(struct.type),
    };
}
exports.dataAwsccQuicksightAnalysisErrorsToTerraform = dataAwsccQuicksightAnalysisErrorsToTerraform;
class DataAwsccQuicksightAnalysisParametersDateTimeParameters extends cdktf.ComplexComputedList {
    // name - computed: true, optional: false, required: false
    get name() {
        return this.getStringAttribute('name');
    }
    // values - computed: true, optional: false, required: false
    get values() {
        return this.getListAttribute('values');
    }
}
exports.DataAwsccQuicksightAnalysisParametersDateTimeParameters = DataAwsccQuicksightAnalysisParametersDateTimeParameters;
function dataAwsccQuicksightAnalysisParametersDateTimeParametersToTerraform(struct) {
    if (!cdktf.canInspect(struct)) {
        return struct;
    }
    return {
        name: cdktf.stringToTerraform(struct.name),
        values: cdktf.listMapper(cdktf.stringToTerraform)(struct.values),
    };
}
exports.dataAwsccQuicksightAnalysisParametersDateTimeParametersToTerraform = dataAwsccQuicksightAnalysisParametersDateTimeParametersToTerraform;
class DataAwsccQuicksightAnalysisParametersDecimalParameters extends cdktf.ComplexComputedList {
    // name - computed: true, optional: false, required: false
    get name() {
        return this.getStringAttribute('name');
    }
    // values - computed: true, optional: false, required: false
    get values() {
        return this.interpolationForAttribute('values');
    }
}
exports.DataAwsccQuicksightAnalysisParametersDecimalParameters = DataAwsccQuicksightAnalysisParametersDecimalParameters;
function dataAwsccQuicksightAnalysisParametersDecimalParametersToTerraform(struct) {
    if (!cdktf.canInspect(struct)) {
        return struct;
    }
    return {
        name: cdktf.stringToTerraform(struct.name),
        values: cdktf.listMapper(cdktf.numberToTerraform)(struct.values),
    };
}
exports.dataAwsccQuicksightAnalysisParametersDecimalParametersToTerraform = dataAwsccQuicksightAnalysisParametersDecimalParametersToTerraform;
class DataAwsccQuicksightAnalysisParametersIntegerParameters extends cdktf.ComplexComputedList {
    // name - computed: true, optional: false, required: false
    get name() {
        return this.getStringAttribute('name');
    }
    // values - computed: true, optional: false, required: false
    get values() {
        return this.interpolationForAttribute('values');
    }
}
exports.DataAwsccQuicksightAnalysisParametersIntegerParameters = DataAwsccQuicksightAnalysisParametersIntegerParameters;
function dataAwsccQuicksightAnalysisParametersIntegerParametersToTerraform(struct) {
    if (!cdktf.canInspect(struct)) {
        return struct;
    }
    return {
        name: cdktf.stringToTerraform(struct.name),
        values: cdktf.listMapper(cdktf.numberToTerraform)(struct.values),
    };
}
exports.dataAwsccQuicksightAnalysisParametersIntegerParametersToTerraform = dataAwsccQuicksightAnalysisParametersIntegerParametersToTerraform;
class DataAwsccQuicksightAnalysisParametersStringParameters extends cdktf.ComplexComputedList {
    // name - computed: true, optional: false, required: false
    get name() {
        return this.getStringAttribute('name');
    }
    // values - computed: true, optional: false, required: false
    get values() {
        return this.getListAttribute('values');
    }
}
exports.DataAwsccQuicksightAnalysisParametersStringParameters = DataAwsccQuicksightAnalysisParametersStringParameters;
function dataAwsccQuicksightAnalysisParametersStringParametersToTerraform(struct) {
    if (!cdktf.canInspect(struct)) {
        return struct;
    }
    return {
        name: cdktf.stringToTerraform(struct.name),
        values: cdktf.listMapper(cdktf.stringToTerraform)(struct.values),
    };
}
exports.dataAwsccQuicksightAnalysisParametersStringParametersToTerraform = dataAwsccQuicksightAnalysisParametersStringParametersToTerraform;
class DataAwsccQuicksightAnalysisParameters extends cdktf.ComplexComputedList {
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
exports.DataAwsccQuicksightAnalysisParameters = DataAwsccQuicksightAnalysisParameters;
function dataAwsccQuicksightAnalysisParametersToTerraform(struct) {
    if (!cdktf.canInspect(struct)) {
        return struct;
    }
    return {
        date_time_parameters: cdktf.listMapper(dataAwsccQuicksightAnalysisParametersDateTimeParametersToTerraform)(struct.dateTimeParameters),
        decimal_parameters: cdktf.listMapper(dataAwsccQuicksightAnalysisParametersDecimalParametersToTerraform)(struct.decimalParameters),
        integer_parameters: cdktf.listMapper(dataAwsccQuicksightAnalysisParametersIntegerParametersToTerraform)(struct.integerParameters),
        string_parameters: cdktf.listMapper(dataAwsccQuicksightAnalysisParametersStringParametersToTerraform)(struct.stringParameters),
    };
}
exports.dataAwsccQuicksightAnalysisParametersToTerraform = dataAwsccQuicksightAnalysisParametersToTerraform;
class DataAwsccQuicksightAnalysisPermissions extends cdktf.ComplexComputedList {
    // actions - computed: true, optional: false, required: false
    get actions() {
        return this.getListAttribute('actions');
    }
    // principal - computed: true, optional: false, required: false
    get principal() {
        return this.getStringAttribute('principal');
    }
}
exports.DataAwsccQuicksightAnalysisPermissions = DataAwsccQuicksightAnalysisPermissions;
function dataAwsccQuicksightAnalysisPermissionsToTerraform(struct) {
    if (!cdktf.canInspect(struct)) {
        return struct;
    }
    return {
        actions: cdktf.listMapper(cdktf.stringToTerraform)(struct.actions),
        principal: cdktf.stringToTerraform(struct.principal),
    };
}
exports.dataAwsccQuicksightAnalysisPermissionsToTerraform = dataAwsccQuicksightAnalysisPermissionsToTerraform;
class DataAwsccQuicksightAnalysisSheets extends cdktf.ComplexComputedList {
    // name - computed: true, optional: false, required: false
    get name() {
        return this.getStringAttribute('name');
    }
    // sheet_id - computed: true, optional: false, required: false
    get sheetId() {
        return this.getStringAttribute('sheet_id');
    }
}
exports.DataAwsccQuicksightAnalysisSheets = DataAwsccQuicksightAnalysisSheets;
function dataAwsccQuicksightAnalysisSheetsToTerraform(struct) {
    if (!cdktf.canInspect(struct)) {
        return struct;
    }
    return {
        name: cdktf.stringToTerraform(struct.name),
        sheet_id: cdktf.stringToTerraform(struct.sheetId),
    };
}
exports.dataAwsccQuicksightAnalysisSheetsToTerraform = dataAwsccQuicksightAnalysisSheetsToTerraform;
class DataAwsccQuicksightAnalysisSourceEntitySourceTemplateDataSetReferences extends cdktf.ComplexComputedList {
    // data_set_arn - computed: true, optional: false, required: false
    get dataSetArn() {
        return this.getStringAttribute('data_set_arn');
    }
    // data_set_placeholder - computed: true, optional: false, required: false
    get dataSetPlaceholder() {
        return this.getStringAttribute('data_set_placeholder');
    }
}
exports.DataAwsccQuicksightAnalysisSourceEntitySourceTemplateDataSetReferences = DataAwsccQuicksightAnalysisSourceEntitySourceTemplateDataSetReferences;
function dataAwsccQuicksightAnalysisSourceEntitySourceTemplateDataSetReferencesToTerraform(struct) {
    if (!cdktf.canInspect(struct)) {
        return struct;
    }
    return {
        data_set_arn: cdktf.stringToTerraform(struct.dataSetArn),
        data_set_placeholder: cdktf.stringToTerraform(struct.dataSetPlaceholder),
    };
}
exports.dataAwsccQuicksightAnalysisSourceEntitySourceTemplateDataSetReferencesToTerraform = dataAwsccQuicksightAnalysisSourceEntitySourceTemplateDataSetReferencesToTerraform;
class DataAwsccQuicksightAnalysisSourceEntitySourceTemplate extends cdktf.ComplexComputedList {
    // arn - computed: true, optional: false, required: false
    get arn() {
        return this.getStringAttribute('arn');
    }
    // data_set_references - computed: true, optional: false, required: false
    get dataSetReferences() {
        return this.interpolationForAttribute('data_set_references');
    }
}
exports.DataAwsccQuicksightAnalysisSourceEntitySourceTemplate = DataAwsccQuicksightAnalysisSourceEntitySourceTemplate;
function dataAwsccQuicksightAnalysisSourceEntitySourceTemplateToTerraform(struct) {
    if (!cdktf.canInspect(struct)) {
        return struct;
    }
    return {
        arn: cdktf.stringToTerraform(struct.arn),
        data_set_references: cdktf.listMapper(dataAwsccQuicksightAnalysisSourceEntitySourceTemplateDataSetReferencesToTerraform)(struct.dataSetReferences),
    };
}
exports.dataAwsccQuicksightAnalysisSourceEntitySourceTemplateToTerraform = dataAwsccQuicksightAnalysisSourceEntitySourceTemplateToTerraform;
class DataAwsccQuicksightAnalysisSourceEntity extends cdktf.ComplexComputedList {
    // source_template - computed: true, optional: false, required: false
    get sourceTemplate() {
        return this.interpolationForAttribute('source_template');
    }
}
exports.DataAwsccQuicksightAnalysisSourceEntity = DataAwsccQuicksightAnalysisSourceEntity;
function dataAwsccQuicksightAnalysisSourceEntityToTerraform(struct) {
    if (!cdktf.canInspect(struct)) {
        return struct;
    }
    return {
        source_template: dataAwsccQuicksightAnalysisSourceEntitySourceTemplateToTerraform(struct.sourceTemplate),
    };
}
exports.dataAwsccQuicksightAnalysisSourceEntityToTerraform = dataAwsccQuicksightAnalysisSourceEntityToTerraform;
class DataAwsccQuicksightAnalysisTags extends cdktf.ComplexComputedList {
    // key - computed: true, optional: false, required: false
    get key() {
        return this.getStringAttribute('key');
    }
    // value - computed: true, optional: false, required: false
    get value() {
        return this.getStringAttribute('value');
    }
}
exports.DataAwsccQuicksightAnalysisTags = DataAwsccQuicksightAnalysisTags;
function dataAwsccQuicksightAnalysisTagsToTerraform(struct) {
    if (!cdktf.canInspect(struct)) {
        return struct;
    }
    return {
        key: cdktf.stringToTerraform(struct.key),
        value: cdktf.stringToTerraform(struct.value),
    };
}
exports.dataAwsccQuicksightAnalysisTagsToTerraform = dataAwsccQuicksightAnalysisTagsToTerraform;
/**
* Represents a {@link https://www.terraform.io/docs/providers/awscc/d/quicksight_analysis.html awscc_quicksight_analysis}
*/
class DataAwsccQuicksightAnalysis extends cdktf.TerraformDataSource {
    // ===========
    // INITIALIZER
    // ===========
    /**
    * Create a new {@link https://www.terraform.io/docs/providers/awscc/d/quicksight_analysis.html awscc_quicksight_analysis} Data Source
    *
    * @param scope The scope in which to define this construct
    * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
    * @param options DataAwsccQuicksightAnalysisConfig
    */
    constructor(scope, id, config) {
        super(scope, id, {
            terraformResourceType: 'awscc_quicksight_analysis',
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
    // analysis_id - computed: true, optional: false, required: false
    get analysisId() {
        return this.getStringAttribute('analysis_id');
    }
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
    // data_set_arns - computed: true, optional: false, required: false
    get dataSetArns() {
        return this.getListAttribute('data_set_arns');
    }
    // errors - computed: true, optional: false, required: false
    get errors() {
        return this.interpolationForAttribute('errors');
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
    // parameters - computed: true, optional: false, required: false
    get parameters() {
        return this.interpolationForAttribute('parameters');
    }
    // permissions - computed: true, optional: false, required: false
    get permissions() {
        return this.interpolationForAttribute('permissions');
    }
    // sheets - computed: true, optional: false, required: false
    get sheets() {
        return this.interpolationForAttribute('sheets');
    }
    // source_entity - computed: true, optional: false, required: false
    get sourceEntity() {
        return this.interpolationForAttribute('source_entity');
    }
    // status - computed: true, optional: false, required: false
    get status() {
        return this.getStringAttribute('status');
    }
    // tags - computed: true, optional: false, required: false
    get tags() {
        return this.interpolationForAttribute('tags');
    }
    // theme_arn - computed: true, optional: false, required: false
    get themeArn() {
        return this.getStringAttribute('theme_arn');
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
exports.DataAwsccQuicksightAnalysis = DataAwsccQuicksightAnalysis;
// =================
// STATIC PROPERTIES
// =================
DataAwsccQuicksightAnalysis.tfResourceType = "awscc_quicksight_analysis";
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZGF0YS1hd3NjYy1xdWlja3NpZ2h0LWFuYWx5c2lzLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiZGF0YS1hd3NjYy1xdWlja3NpZ2h0LWFuYWx5c2lzLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7QUFBQSwyRUFBMkU7QUFDM0UsMkNBQTJDOzs7QUFHM0MsK0JBQStCO0FBWS9CLE1BQWEsaUNBQWtDLFNBQVEsS0FBSyxDQUFDLG1CQUFtQjtJQUU5RSw2REFBNkQ7SUFDN0QsSUFBVyxPQUFPO1FBQ2hCLE9BQU8sSUFBSSxDQUFDLGtCQUFrQixDQUFDLFNBQVMsQ0FBQyxDQUFDO0lBQzVDLENBQUM7SUFFRCwwREFBMEQ7SUFDMUQsSUFBVyxJQUFJO1FBQ2IsT0FBTyxJQUFJLENBQUMsa0JBQWtCLENBQUMsTUFBTSxDQUFDLENBQUM7SUFDekMsQ0FBQztDQUNGO0FBWEQsOEVBV0M7QUFFRCxTQUFnQiw0Q0FBNEMsQ0FBQyxNQUEwQztJQUNyRyxJQUFJLENBQUMsS0FBSyxDQUFDLFVBQVUsQ0FBQyxNQUFNLENBQUMsRUFBRTtRQUFFLE9BQU8sTUFBTSxDQUFDO0tBQUU7SUFDakQsT0FBTztRQUNMLE9BQU8sRUFBRSxLQUFLLENBQUMsaUJBQWlCLENBQUMsTUFBTyxDQUFDLE9BQU8sQ0FBQztRQUNqRCxJQUFJLEVBQUUsS0FBSyxDQUFDLGlCQUFpQixDQUFDLE1BQU8sQ0FBQyxJQUFJLENBQUM7S0FDNUMsQ0FBQTtBQUNILENBQUM7QUFORCxvR0FNQztBQUVELE1BQWEsdURBQXdELFNBQVEsS0FBSyxDQUFDLG1CQUFtQjtJQUVwRywwREFBMEQ7SUFDMUQsSUFBVyxJQUFJO1FBQ2IsT0FBTyxJQUFJLENBQUMsa0JBQWtCLENBQUMsTUFBTSxDQUFDLENBQUM7SUFDekMsQ0FBQztJQUVELDREQUE0RDtJQUM1RCxJQUFXLE1BQU07UUFDZixPQUFPLElBQUksQ0FBQyxnQkFBZ0IsQ0FBQyxRQUFRLENBQUMsQ0FBQztJQUN6QyxDQUFDO0NBQ0Y7QUFYRCww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O0lBQ3pELENBQUM7SUFFRCxtRUFBbUU7SUFDbkUsSUFBVyxZQUFZO1FBQ3JCLE9BQU8sSUFBSSxDQUFDLHlCQUF5QixDQUFDLGVBQWUsQ0FBUSxDQUFDO0lBQ2hFLENBQUM7SUFFRCw0REFBNEQ7SUFDNUQsSUFBVyxNQUFNO1FBQ2YsT0FBTyxJQUFJLENBQUMsa0JBQWtCLENBQUMsUUFBUSxDQUFDLENBQUM7SUFDM0MsQ0FBQztJQUVELDBEQUEwRDtJQUMxRCxJQUFXLElBQUk7UUFDYixPQUFPLElBQUksQ0FBQyx5QkFBeUIsQ0FBQyxNQUFNLENBQVEsQ0FBQztJQUN2RCxDQUFDO0lBRUQsK0RBQStEO0lBQy9ELElBQVcsUUFBUTtRQUNqQixPQUFPLElBQUksQ0FBQyxrQkFBa0IsQ0FBQyxXQUFXLENBQUMsQ0FBQztJQUM5QyxDQUFDO0lBRUQsWUFBWTtJQUNaLFlBQVk7SUFDWixZQUFZO0lBRUYsb0JBQW9CO1FBQzVCLE9BQU87WUFDTCxFQUFFLEVBQUUsS0FBSyxDQUFDLGlCQUFpQixDQUFDLElBQUksQ0FBQyxHQUFHLENBQUM7U0FDdEMsQ0FBQztJQUNKLENBQUM7O0FBcElILGtFQXFJQztBQW5JQyxvQkFBb0I7QUFDcEIsb0JBQW9CO0FBQ3BCLG9CQUFvQjtBQUNHLDBDQUFjLEdBQVcsMkJBQTJCLENBQUMiLCJzb3VyY2VzQ29udGVudCI6WyIvLyBodHRwczovL3d3dy50ZXJyYWZvcm0uaW8vZG9jcy9wcm92aWRlcnMvYXdzY2MvZC9xdWlja3NpZ2h0X2FuYWx5c2lzLmh0bWxcbi8vIGdlbmVyYXRlZCBmcm9tIHRlcnJhZm9ybSByZXNvdXJjZSBzY2hlbWFcblxuaW1wb3J0IHsgQ29uc3RydWN0IH0gZnJvbSAnY29uc3RydWN0cyc7XG5pbXBvcnQgKiBhcyBjZGt0ZiBmcm9tICdjZGt0Zic7XG5cbi8vIENvbmZpZ3VyYXRpb25cblxuZXhwb3J0IGludGVyZmFjZSBEYXRhQXdzY2NRdWlja3NpZ2h0QW5hbHlzaXNDb25maWcgZXh0ZW5kcyBjZGt0Zi5UZXJyYWZvcm1NZXRhQXJndW1lbnRzIHtcbiAgLyoqXG4gICogVW5pcXVlbHkgaWRlbnRpZmllcyB0aGUgcmVzb3VyY2UuXG4gICogXG4gICogRG9jcyBhdCBUZXJyYWZvcm0gUmVnaXN0cnk6IHtAbGluayBodHRwczovL3d3dy50ZXJyYWZvcm0uaW8vZG9jcy9wcm92aWRlcnMvYXdzY2MvZC9xdWlja3NpZ2h0X2FuYWx5c2lzLmh0bWwjaWQgRGF0YUF3c2NjUXVpY2tzaWdodEFuYWx5c2lzI2lkfVxuICAqL1xuICByZWFkb25seSBpZDogc3RyaW5nO1xufVxuZXhwb3J0IGNsYXNzIERhdGFBd3NjY1F1aWNrc2lnaHRBbmFseXNpc0Vycm9ycyBleHRlbmRzIGNka3RmLkNvbXBsZXhDb21wdXRlZExpc3Qge1xuXG4gIC8vIG1lc3NhZ2UgLSBjb21wdXRlZDogdHJ1ZSwgb3B0aW9uYWw6IGZhbHNlLCByZXF1aXJlZDogZmFsc2VcbiAgcHVibGljIGdldCBtZXNzYWdlKCkge1xuICAgIHJldHVybiB0aGlzLmdldFN0cmluZ0F0dHJpYnV0ZSgnbWVzc2FnZScpO1xuICB9XG5cbiAgLy8gdHlwZSAtIGNvbXB1dGVkOiB0cnVlLCBvcHRpb25hbDogZmFsc2UsIHJlcXVpcmVkOiBmYWxzZVxuICBwdWJsaWMgZ2V0IHR5cGUoKSB7XG4gICAgcmV0dXJuIHRoaXMuZ2V0U3RyaW5nQXR0cmlidXRlKCd0eXBlJyk7XG4gIH1cbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGRhdGFBd3NjY1F1aWNrc2lnaHRBbmFseXNpc0Vycm9yc1RvVGVycmFmb3JtKHN0cnVjdD86IERhdGFBd3NjY1F1aWNrc2lnaHRBbmFseXNpc0Vycm9ycyk6IGFueSB7XG4gIGlmICghY2RrdGYuY2FuSW5zcGVjdChzdHJ1Y3QpKSB7IHJldHVybiBzdHJ1Y3Q7IH1cbiAgcmV0dXJuIHtcbiAgICBtZXNzYWdlOiBjZGt0Zi5zdHJpbmdUb1RlcnJhZm9ybShzdHJ1Y3QhLm1lc3NhZ2UpLFxuICAgIHR5cGU6IGNka3RmLnN0cmluZ1RvVGVycmFmb3JtKHN0cnVjdCEudHlwZSksXG4gIH1cbn1cblxuZXhwb3J0IGNsYXNzIERhdGFBd3NjY1F1aWNrc2lnaHRBbmFseXNpc1BhcmFtZXRlcnNEYXRlVGltZVBhcmFtZXRlcnMgZXh0ZW5kcyBjZGt0Zi5Db21wbGV4Q29tcHV0ZWRMaXN0IHtcblxuICAvLyBuYW1lIC0gY29tcHV0ZWQ6IHRydWUsIG9wdGlvbmFsOiBmYWxzZSwgcmVxdWlyZWQ6IGZhbHNlXG4gIHB1YmxpYyBnZXQgbmFtZSgpIHtcbiAgICByZXR1cm4gdGhpcy5nZXRTdHJpbmdBdHRyaWJ1dGUoJ25hbWUnKTtcbiAgfVxuXG4gIC8vIHZhbHVlcyAtIGNvbXB1dGVkOiB0cnVlLCBvcHRpb25hbDogZmFsc2UsIHJlcXVpcmVkOiBmYWxzZVxuICBwdWJsaWMgZ2V0IHZhbHVlcygpIHtcbiAgICByZXR1cm4gdGhpcy5nZXRMaXN0QXR0cmlidXRlKCd2YWx1ZXMnKTtcbiAgfVxufVxuXG5leHBvcnQgZnVuY3Rpb24gZGF0YUF3c2NjUXVpY2tzaWdodEFuYWx5c2lzUGFyYW1ldGVyc0RhdGVUaW1lUGFyYW1ldGVyc1RvVGVycmFmb3JtKHN0cnVjdD86IERhdGFBd3NjY1F1aWNrc2lnaHRBbmFseXNpc1BhcmFtZXRlcnNEYXRlVGltZVBhcmFtZXRlcnMpOiBhbnkge1xuICBpZiAoIWNka3RmLmNhbkluc3BlY3Qoc3RydWN0KSkgeyByZXR1cm4gc3RydWN0OyB9XG4gIHJldHVybiB7XG4gICAgbmFtZTogY2RrdGYuc3RyaW5nVG9UZXJyYWZvcm0oc3RydWN0IS5uYW1lKSxcbiAgICB2YWx1ZXM6IGNka3RmLmxpc3RNYXBwZXIoY2RrdGYuc3RyaW5nVG9UZXJyYWZvcm0pKHN0cnVjdCEudmFsdWVzKSxcbiAgfVxufVxuXG5leHBvcnQgY2xhc3MgRGF0YUF3c2NjUXVpY2tzaWdodEFuYWx5c2lzUGFyYW1ldGVyc0RlY2ltYWxQYXJhbWV0ZXJzIGV4dGVuZHMgY2RrdGYuQ29tcGxleENvbXB1dGVkTGlzdCB7XG5cbiAgLy8gbmFtZSAtIGNvbXB1dGVkOiB0cnVlLCBvcHRpb25hbDogZmFsc2UsIHJlcXVpcmVkOiBmYWxzZVxuICBwdWJsaWMgZ2V0IG5hbWUoKSB7XG4gICAgcmV0dXJuIHRoaXMuZ2V0U3RyaW5nQXR0cmlidXRlKCduYW1lJyk7XG4gIH1cblxuICAvLyB2YWx1ZXMgLSBjb21wdXRlZDogdHJ1ZSwgb3B0aW9uYWw6IGZhbHNlLCByZXF1aXJlZDogZmFsc2VcbiAgcHVibGljIGdldCB2YWx1ZXMoKSB7XG4gICAgcmV0dXJuIHRoaXMuaW50ZXJwb2xhdGlvbkZvckF0dHJpYnV0ZSgndmFsdWVzJykgYXMgYW55O1xuICB9XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBkYXRhQXdzY2NRdWlja3NpZ2h0QW5hbHlzaXNQYXJhbWV0ZXJzRGVjaW1hbFBhcmFtZXRlcnNUb1RlcnJhZm9ybShzdHJ1Y3Q/OiBEYXRhQXdzY2NRdWlja3NpZ2h0QW5hbHlzaXNQYXJhbWV0ZXJzRGVjaW1hbFBhcmFtZXRlcnMpOiBhbnkge1xuICBpZiAoIWNka3RmLmNhbkluc3BlY3Qoc3RydWN0KSkgeyByZXR1cm4gc3RydWN0OyB9XG4gIHJldHVybiB7XG4gICAgbmFtZTogY2RrdGYuc3RyaW5nVG9UZXJyYWZvcm0oc3RydWN0IS5uYW1lKSxcbiAgICB2YWx1ZXM6IGNka3RmLmxpc3RNYXBwZXIoY2RrdGYubnVtYmVyVG9UZXJyYWZvcm0pKHN0cnVjdCEudmFsdWVzKSxcbiAgfVxufVxuXG5leHBvcnQgY2xhc3MgRGF0YUF3c2NjUXVpY2tzaWdodEFuYWx5c2lzUGFyYW1ldGVyc0ludGVnZXJQYXJhbWV0ZXJzIGV4dGVuZHMgY2RrdGYuQ29tcGxleENvbXB1dGVkTGlzdCB7XG5cbiAgLy8gbmFtZSAtIGNvbXB1dGVkOiB0cnVlLCBvcHRpb25hbDogZmFsc2UsIHJlcXVpcmVkOiBmYWxzZVxuICBwdWJsaWMgZ2V0IG5hbWUoKSB7XG4gICAgcmV0dXJuIHRoaXMuZ2V0U3RyaW5nQXR0cmlidXRlKCduYW1lJyk7XG4gIH1cblxuICAvLyB2YWx1ZXMgLSBjb21wdXRlZDogdHJ1ZSwgb3B0aW9uYWw6IGZhbHNlLCByZXF1aXJlZDogZmFsc2VcbiAgcHVibGljIGdldCB2YWx1ZXMoKSB7XG4gICAgcmV0dXJuIHRoaXMuaW50ZXJwb2xhdGlvbkZvckF0dHJpYnV0ZSgndmFsdWVzJykgYXMgYW55O1xuICB9XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBkYXRhQXdzY2NRdWlja3NpZ2h0QW5hbHlzaXNQYXJhbWV0ZXJzSW50ZWdlclBhcmFtZXRlcnNUb1RlcnJhZm9ybShzdHJ1Y3Q/OiBEYXRhQXdzY2NRdWlja3NpZ2h0QW5hbHlzaXNQYXJhbWV0ZXJzSW50ZWdlclBhcmFtZXRlcnMpOiBhbnkge1xuICBpZiAoIWNka3RmLmNhbkluc3BlY3Qoc3RydWN0KSkgeyByZXR1cm4gc3RydWN0OyB9XG4gIHJldHVybiB7XG4gICAgbmFtZTogY2RrdGYuc3RyaW5nVG9UZXJyYWZvcm0oc3RydWN0IS5uYW1lKSxcbiAgICB2YWx1ZXM6IGNka3RmLmxpc3RNYXBwZXIoY2RrdGYubnVtYmVyVG9UZXJyYWZvcm0pKHN0cnVjdCEudmFsdWVzKSxcbiAgfVxufVxuXG5leHBvcnQgY2xhc3MgRGF0YUF3c2NjUXVpY2tzaWdodEFuYWx5c2lzUGFyYW1ldGVyc1N0cmluZ1BhcmFtZXRlcnMgZXh0ZW5kcyBjZGt0Zi5Db21wbGV4Q29tcHV0ZWRMaXN0IHtcblxuICAvLyBuYW1lIC0gY29tcHV0ZWQ6IHRydWUsIG9wdGlvbmFsOiBmYWxzZSwgcmVxdWlyZWQ6IGZhbHNlXG4gIHB1YmxpYyBnZXQgbmFtZSgpIHtcbiAgICByZXR1cm4gdGhpcy5nZXRTdHJpbmdBdHRyaWJ1dGUoJ25hbWUnKTtcbiAgfVxuXG4gIC8vIHZhbHVlcyAtIGNvbXB1dGVkOiB0cnVlLCBvcHRpb25hbDogZmFsc2UsIHJlcXVpcmVkOiBmYWxzZVxuICBwdWJsaWMgZ2V0IHZhbHVlcygpIHtcbiAgICByZXR1cm4gdGhpcy5nZXRMaXN0QXR0cmlidXRlKCd2YWx1ZXMnKTtcbiAgfVxufVxuXG5leHBvcnQgZnVuY3Rpb24gZGF0YUF3c2NjUXVpY2tzaWdodEFuYWx5c2lzUGFyYW1ldGVyc1N0cmluZ1BhcmFtZXRlcnNUb1RlcnJhZm9ybShzdHJ1Y3Q/OiBEYXRhQXdzY2NRdWlja3NpZ2h0QW5hbHlzaXNQYXJhbWV0ZXJzU3RyaW5nUGFyYW1ldGVycyk6IGFueSB7XG4gIGlmICghY2RrdGYuY2FuSW5zcGVjdChzdHJ1Y3QpKSB7IHJldHVybiBzdHJ1Y3Q7IH1cbiAgcmV0dXJuIHtcbiAgICBuYW1lOiBjZGt0Zi5zdHJpbmdUb1RlcnJhZm9ybShzdHJ1Y3QhLm5hbWUpLFxuICAgIHZhbHVlczogY2RrdGYubGlzdE1hcHBlcihjZGt0Zi5zdHJpbmdUb1RlcnJhZm9ybSkoc3RydWN0IS52YWx1ZXMpLFxuICB9XG59XG5cbmV4cG9ydCBjbGFzcyBEYXRhQXdzY2NRdWlja3NpZ2h0QW5hbHlzaXNQYXJhbWV0ZXJzIGV4dGVuZHMgY2RrdGYuQ29tcGxleENvbXB1dGVkTGlzdCB7XG5cbiAgLy8gZGF0ZV90aW1lX3BhcmFtZXRlcnMgLSBjb21wdXRlZDogdHJ1ZSwgb3B0aW9uYWw6IGZhbHNlLCByZXF1aXJlZDogZmFsc2VcbiAgcHVibGljIGdldCBkYXRlVGltZVBhcmFtZXRlcnMoKSB7XG4gICAgcmV0dXJuIHRoaXMuaW50ZXJwb2xhdGlvbkZvckF0dHJpYnV0ZSgnZGF0ZV90aW1lX3BhcmFtZXRlcnMnKSBhcyBhbnk7XG4gIH1cblxuICAvLyBkZWNpbWFsX3BhcmFtZXRlcnMgLSBjb21wdXRlZDogdHJ1ZSwgb3B0aW9uYWw6IGZhbHNlLCByZXF1aXJlZDogZmFsc2VcbiAgcHVibGljIGdldCBkZWNpbWFsUGFyYW1ldGVycygpIHtcbiAgICByZXR1cm4gdGhpcy5pbnRlcnBvbGF0aW9uRm9yQXR0cmlidXRlKCdkZWNpbWFsX3BhcmFtZXRlcnMnKSBhcyBhbnk7XG4gIH1cblxuICAvLyBpbnRlZ2VyX3BhcmFtZXRlcnMgLSBjb21wdXRlZDogdHJ1ZSwgb3B0aW9uYWw6IGZhbHNlLCByZXF1aXJlZDogZmFsc2VcbiAgcHVibGljIGdldCBpbnRlZ2VyUGFyYW1ldGVycygpIHtcbiAgICByZXR1cm4gdGhpcy5pbnRlcnBvbGF0aW9uRm9yQXR0cmlidXRlKCdpbnRlZ2VyX3BhcmFtZXRlcnMnKSBhcyBhbnk7XG4gIH1cblxuICAvLyBzdHJpbmdfcGFyYW1ldGVycyAtIGNvbXB1dGVkOiB0cnVlLCBvcHRpb25hbDogZmFsc2UsIHJlcXVpcmVkOiBmYWxzZVxuICBwdWJsaWMgZ2V0IHN0cmluZ1BhcmFtZXRlcnMoKSB7XG4gICAgcmV0dXJuIHRoaXMuaW50ZXJwb2xhdGlvbkZvckF0dHJpYnV0ZSgnc3RyaW5nX3BhcmFtZXRlcnMnKSBhcyBhbnk7XG4gIH1cbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGRhdGFBd3NjY1F1aWNrc2lnaHRBbmFseXNpc1BhcmFtZXRlcnNUb1RlcnJhZm9ybShzdHJ1Y3Q/OiBEYXRhQXdzY2NRdWlja3NpZ2h0QW5hbHlzaXNQYXJhbWV0ZXJzKTogYW55IHtcbiAgaWYgKCFjZGt0Zi5jYW5JbnNwZWN0KHN0cnVjdCkpIHsgcmV0dXJuIHN0cnVjdDsgfVxuICByZXR1cm4ge1xuICAgIGRhdGVfdGltZV9wYXJhbWV0ZXJzOiBjZGt0Zi5saXN0TWFwcGVyKGRhdGFBd3NjY1F1aWNrc2lnaHRBbmFseXNpc1BhcmFtZXRlcnNEYXRlVGltZVBhcmFtZXRlcnNUb1RlcnJhZm9ybSkoc3RydWN0IS5kYXRlVGltZVBhcmFtZXRlcnMpLFxuICAgIGRlY2ltYWxfcGFyYW1ldGVyczogY2RrdGYubGlzdE1hcHBlcihkYXRhQXdzY2NRdWlja3NpZ2h0QW5hbHlzaXNQYXJhbWV0ZXJzRGVjaW1hbFBhcmFtZXRlcnNUb1RlcnJhZm9ybSkoc3RydWN0IS5kZWNpbWFsUGFyYW1ldGVycyksXG4gICAgaW50ZWdlcl9wYXJhbWV0ZXJzOiBjZGt0Zi5saXN0TWFwcGVyKGRhdGFBd3NjY1F1aWNrc2lnaHRBbmFseXNpc1BhcmFtZXRlcnNJbnRlZ2VyUGFyYW1ldGVyc1RvVGVycmFmb3JtKShzdHJ1Y3QhLmludGVnZXJQYXJhbWV0ZXJzKSxcbiAgICBzdHJpbmdfcGFyYW1ldGVyczogY2RrdGYubGlzdE1hcHBlcihkYXRhQXdzY2NRdWlja3NpZ2h0QW5hbHlzaXNQYXJhbWV0ZXJzU3RyaW5nUGFyYW1ldGVyc1RvVGVycmFmb3JtKShzdHJ1Y3QhLnN0cmluZ1BhcmFtZXRlcnMpLFxuICB9XG59XG5cbmV4cG9ydCBjbGFzcyBEYXRhQXdzY2NRdWlja3NpZ2h0QW5hbHlzaXNQZXJtaXNzaW9ucyBleHRlbmRzIGNka3RmLkNvbXBsZXhDb21wdXRlZExpc3Qge1xuXG4gIC8vIGFjdGlvbnMgLSBjb21wdXRlZDogdHJ1ZSwgb3B0aW9uYWw6IGZhbHNlLCByZXF1aXJlZDogZmFsc2VcbiAgcHVibGljIGdldCBhY3Rpb25zKCkge1xuICAgIHJldHVybiB0aGlzLmdldExpc3RBdHRyaWJ1dGUoJ2FjdGlvbnMnKTtcbiAgfVxuXG4gIC8vIHByaW5jaXBhbCAtIGNvbXB1dGVkOiB0cnVlLCBvcHRpb25hbDogZmFsc2UsIHJlcXVpcmVkOiBmYWxzZVxuICBwdWJsaWMgZ2V0IHByaW5jaXBhbCgpIHtcbiAgICByZXR1cm4gdGhpcy5nZXRTdHJpbmdBdHRyaWJ1dGUoJ3ByaW5jaXBhbCcpO1xuICB9XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBkYXRhQXdzY2NRdWlja3NpZ2h0QW5hbHlzaXNQZXJtaXNzaW9uc1RvVGVycmFmb3JtKHN0cnVjdD86IERhdGFBd3NjY1F1aWNrc2lnaHRBbmFseXNpc1Blcm1pc3Npb25zKTogYW55IHtcbiAgaWYgKCFjZGt0Zi5jYW5JbnNwZWN0KHN0cnVjdCkpIHsgcmV0dXJuIHN0cnVjdDsgfVxuICByZXR1cm4ge1xuICAgIGFjdGlvbnM6IGNka3RmLmxpc3RNYXBwZXIoY2RrdGYuc3RyaW5nVG9UZXJyYWZvcm0pKHN0cnVjdCEuYWN0aW9ucyksXG4gICAgcHJpbmNpcGFsOiBjZGt0Zi5zdHJpbmdUb1RlcnJhZm9ybShzdHJ1Y3QhLnByaW5jaXBhbCksXG4gIH1cbn1cblxuZXhwb3J0IGNsYXNzIERhdGFBd3NjY1F1aWNrc2lnaHRBbmFseXNpc1NoZWV0cyBleHRlbmRzIGNka3RmLkNvbXBsZXhDb21wdXRlZExpc3Qge1xuXG4gIC8vIG5hbWUgLSBjb21wdXRlZDogdHJ1ZSwgb3B0aW9uYWw6IGZhbHNlLCByZXF1aXJlZDogZmFsc2VcbiAgcHVibGljIGdldCBuYW1lKCkge1xuICAgIHJldHVybiB0aGlzLmdldFN0cmluZ0F0dHJpYnV0ZSgnbmFtZScpO1xuICB9XG5cbiAgLy8gc2hlZXRfaWQgLSBjb21wdXRlZDogdHJ1ZSwgb3B0aW9uYWw6IGZhbHNlLCByZXF1aXJlZDogZmFsc2VcbiAgcHVibGljIGdldCBzaGVldElkKCkge1xuICAgIHJldHVybiB0aGlzLmdldFN0cmluZ0F0dHJpYnV0ZSgnc2hlZXRfaWQnKTtcbiAgfVxufVxuXG5leHBvcnQgZnVuY3Rpb24gZGF0YUF3c2NjUXVpY2tzaWdodEFuYWx5c2lzU2hlZXRzVG9UZXJyYWZvcm0oc3RydWN0PzogRGF0YUF3c2NjUXVpY2tzaWdodEFuYWx5c2lzU2hlZXRzKTogYW55IHtcbiAgaWYgKCFjZGt0Zi5jYW5JbnNwZWN0KHN0cnVjdCkpIHsgcmV0dXJuIHN0cnVjdDsgfVxuICByZXR1cm4ge1xuICAgIG5hbWU6IGNka3RmLnN0cmluZ1RvVGVycmFmb3JtKHN0cnVjdCEubmFtZSksXG4gICAgc2hlZXRfaWQ6IGNka3RmLnN0cmluZ1RvVGVycmFmb3JtKHN0cnVjdCEuc2hlZXRJZCksXG4gIH1cbn1cblxuZXhwb3J0IGNsYXNzIERhdGFBd3NjY1F1aWNrc2lnaHRBbmFseXNpc1NvdXJjZUVudGl0eVNvdXJjZVRlbXBsYXRlRGF0YVNldFJlZmVyZW5jZXMgZXh0ZW5kcyBjZGt0Zi5Db21wbGV4Q29tcHV0ZWRMaXN0IHtcblxuICAvLyBkYXRhX3NldF9hcm4gLSBjb21wdXRlZDogdHJ1ZSwgb3B0aW9uYWw6IGZhbHNlLCByZXF1aXJlZDogZmFsc2VcbiAgcHVibGljIGdldCBkYXRhU2V0QXJuKCkge1xuICAgIHJldHVybiB0aGlzLmdldFN0cmluZ0F0dHJpYnV0ZSgnZGF0YV9zZXRfYXJuJyk7XG4gIH1cblxuICAvLyBkYXRhX3NldF9wbGFjZWhvbGRlciAtIGNvbXB1dGVkOiB0cnVlLCBvcHRpb25hbDogZmFsc2UsIHJlcXVpcmVkOiBmYWxzZVxuICBwdWJsaWMgZ2V0IGRhdGFTZXRQbGFjZWhvbGRlcigpIHtcbiAgICByZXR1cm4gdGhpcy5nZXRTdHJpbmdBdHRyaWJ1dGUoJ2RhdGFfc2V0X3BsYWNlaG9sZGVyJyk7XG4gIH1cbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGRhdGFBd3NjY1F1aWNrc2lnaHRBbmFseXNpc1NvdXJjZUVudGl0eVNvdXJjZVRlbXBsYXRlRGF0YVNldFJlZmVyZW5jZXNUb1RlcnJhZm9ybShzdHJ1Y3Q/OiBEYXRhQXdzY2NRdWlja3NpZ2h0QW5hbHlzaXNTb3VyY2VFbnRpdHlTb3VyY2VUZW1wbGF0ZURhdGFTZXRSZWZlcmVuY2VzKTogYW55IHtcbiAgaWYgKCFjZGt0Zi5jYW5JbnNwZWN0KHN0cnVjdCkpIHsgcmV0dXJuIHN0cnVjdDsgfVxuICByZXR1cm4ge1xuICAgIGRhdGFfc2V0X2FybjogY2RrdGYuc3RyaW5nVG9UZXJyYWZvcm0oc3RydWN0IS5kYXRhU2V0QXJuKSxcbiAgICBkYXRhX3NldF9wbGFjZWhvbGRlcjogY2RrdGYuc3RyaW5nVG9UZXJyYWZvcm0oc3RydWN0IS5kYXRhU2V0UGxhY2Vob2xkZXIpLFxuICB9XG59XG5cbmV4cG9ydCBjbGFzcyBEYXRhQXdzY2NRdWlja3NpZ2h0QW5hbHlzaXNTb3VyY2VFbnRpdHlTb3VyY2VUZW1wbGF0ZSBleHRlbmRzIGNka3RmLkNvbXBsZXhDb21wdXRlZExpc3Qge1xuXG4gIC8vIGFybiAtIGNvbXB1dGVkOiB0cnVlLCBvcHRpb25hbDogZmFsc2UsIHJlcXVpcmVkOiBmYWxzZVxuICBwdWJsaWMgZ2V0IGFybigpIHtcbiAgICByZXR1cm4gdGhpcy5nZXRTdHJpbmdBdHRyaWJ1dGUoJ2FybicpO1xuICB9XG5cbiAgLy8gZGF0YV9zZXRfcmVmZXJlbmNlcyAtIGNvbXB1dGVkOiB0cnVlLCBvcHRpb25hbDogZmFsc2UsIHJlcXVpcmVkOiBmYWxzZVxuICBwdWJsaWMgZ2V0IGRhdGFTZXRSZWZlcmVuY2VzKCkge1xuICAgIHJldHVybiB0aGlzLmludGVycG9sYXRpb25Gb3JBdHRyaWJ1dGUoJ2RhdGFfc2V0X3JlZmVyZW5jZXMnKSBhcyBhbnk7XG4gIH1cbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGRhdGFBd3NjY1F1aWNrc2lnaHRBbmFseXNpc1NvdXJjZUVudGl0eVNvdXJjZVRlbXBsYXRlVG9UZXJyYWZvcm0oc3RydWN0PzogRGF0YUF3c2NjUXVpY2tzaWdodEFuYWx5c2lzU291cmNlRW50aXR5U291cmNlVGVtcGxhdGUpOiBhbnkge1xuICBpZiAoIWNka3RmLmNhbkluc3BlY3Qoc3RydWN0KSkgeyByZXR1cm4gc3RydWN0OyB9XG4gIHJldHVybiB7XG4gICAgYXJuOiBjZGt0Zi5zdHJpbmdUb1RlcnJhZm9ybShzdHJ1Y3QhLmFybiksXG4gICAgZGF0YV9zZXRfcmVmZXJlbmNlczogY2RrdGYubGlzdE1hcHBlcihkYXRhQXdzY2NRdWlja3NpZ2h0QW5hbHlzaXNTb3VyY2VFbnRpdHlTb3VyY2VUZW1wbGF0ZURhdGFTZXRSZWZlcmVuY2VzVG9UZXJyYWZvcm0pKHN0cnVjdCEuZGF0YVNldFJlZmVyZW5jZXMpLFxuICB9XG59XG5cbmV4cG9ydCBjbGFzcyBEYXRhQXdzY2NRdWlja3NpZ2h0QW5hbHlzaXNTb3VyY2VFbnRpdHkgZXh0ZW5kcyBjZGt0Zi5Db21wbGV4Q29tcHV0ZWRMaXN0IHtcblxuICAvLyBzb3VyY2VfdGVtcGxhdGUgLSBjb21wdXRlZDogdHJ1ZSwgb3B0aW9uYWw6IGZhbHNlLCByZXF1aXJlZDogZmFsc2VcbiAgcHVibGljIGdldCBzb3VyY2VUZW1wbGF0ZSgpIHtcbiAgICByZXR1cm4gdGhpcy5pbnRlcnBvbGF0aW9uRm9yQXR0cmlidXRlKCdzb3VyY2VfdGVtcGxhdGUnKSBhcyBhbnk7XG4gIH1cbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGRhdGFBd3NjY1F1aWNrc2lnaHRBbmFseXNpc1NvdXJjZUVudGl0eVRvVGVycmFmb3JtKHN0cnVjdD86IERhdGFBd3NjY1F1aWNrc2lnaHRBbmFseXNpc1NvdXJjZUVudGl0eSk6IGFueSB7XG4gIGlmICghY2RrdGYuY2FuSW5zcGVjdChzdHJ1Y3QpKSB7IHJldHVybiBzdHJ1Y3Q7IH1cbiAgcmV0dXJuIHtcbiAgICBzb3VyY2VfdGVtcGxhdGU6IGRhdGFBd3NjY1F1aWNrc2lnaHRBbmFseXNpc1NvdXJjZUVudGl0eVNvdXJjZVRlbXBsYXRlVG9UZXJyYWZvcm0oc3RydWN0IS5zb3VyY2VUZW1wbGF0ZSksXG4gIH1cbn1cblxuZXhwb3J0IGNsYXNzIERhdGFBd3NjY1F1aWNrc2lnaHRBbmFseXNpc1RhZ3MgZXh0ZW5kcyBjZGt0Zi5Db21wbGV4Q29tcHV0ZWRMaXN0IHtcblxuICAvLyBrZXkgLSBjb21wdXRlZDogdHJ1ZSwgb3B0aW9uYWw6IGZhbHNlLCByZXF1aXJlZDogZmFsc2VcbiAgcHVibGljIGdldCBrZXkoKSB7XG4gICAgcmV0dXJuIHRoaXMuZ2V0U3RyaW5nQXR0cmlidXRlKCdrZXknKTtcbiAgfVxuXG4gIC8vIHZhbHVlIC0gY29tcHV0ZWQ6IHRydWUsIG9wdGlvbmFsOiBmYWxzZSwgcmVxdWlyZWQ6IGZhbHNlXG4gIHB1YmxpYyBnZXQgdmFsdWUoKSB7XG4gICAgcmV0dXJuIHRoaXMuZ2V0U3RyaW5nQXR0cmlidXRlKCd2YWx1ZScpO1xuICB9XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBkYXRhQXdzY2NRdWlja3NpZ2h0QW5hbHlzaXNUYWdzVG9UZXJyYWZvcm0oc3RydWN0PzogRGF0YUF3c2NjUXVpY2tzaWdodEFuYWx5c2lzVGFncyk6IGFueSB7XG4gIGlmICghY2RrdGYuY2FuSW5zcGVjdChzdHJ1Y3QpKSB7IHJldHVybiBzdHJ1Y3Q7IH1cbiAgcmV0dXJuIHtcbiAgICBrZXk6IGNka3RmLnN0cmluZ1RvVGVycmFmb3JtKHN0cnVjdCEua2V5KSxcbiAgICB2YWx1ZTogY2RrdGYuc3RyaW5nVG9UZXJyYWZvcm0oc3RydWN0IS52YWx1ZSksXG4gIH1cbn1cblxuXG4vKipcbiogUmVwcmVzZW50cyBhIHtAbGluayBodHRwczovL3d3dy50ZXJyYWZvcm0uaW8vZG9jcy9wcm92aWRlcnMvYXdzY2MvZC9xdWlja3NpZ2h0X2FuYWx5c2lzLmh0bWwgYXdzY2NfcXVpY2tzaWdodF9hbmFseXNpc31cbiovXG5leHBvcnQgY2xhc3MgRGF0YUF3c2NjUXVpY2tzaWdodEFuYWx5c2lzIGV4dGVuZHMgY2RrdGYuVGVycmFmb3JtRGF0YVNvdXJjZSB7XG5cbiAgLy8gPT09PT09PT09PT09PT09PT1cbiAgLy8gU1RBVElDIFBST1BFUlRJRVNcbiAgLy8gPT09PT09PT09PT09PT09PT1cbiAgcHVibGljIHN0YXRpYyByZWFkb25seSB0ZlJlc291cmNlVHlwZTogc3RyaW5nID0gXCJhd3NjY19xdWlja3NpZ2h0X2FuYWx5c2lzXCI7XG5cbiAgLy8gPT09PT09PT09PT1cbiAgLy8gSU5JVElBTElaRVJcbiAgLy8gPT09PT09PT09PT1cblxuICAvKipcbiAgKiBDcmVhdGUgYSBuZXcge0BsaW5rIGh0dHBzOi8vd3d3LnRlcnJhZm9ybS5pby9kb2NzL3Byb3ZpZGVycy9hd3NjYy9kL3F1aWNrc2lnaHRfYW5hbHlzaXMuaHRtbCBhd3NjY19xdWlja3NpZ2h0X2FuYWx5c2lzfSBEYXRhIFNvdXJjZVxuICAqXG4gICogQHBhcmFtIHNjb3BlIFRoZSBzY29wZSBpbiB3aGljaCB0byBkZWZpbmUgdGhpcyBjb25zdHJ1Y3RcbiAgKiBAcGFyYW0gaWQgVGhlIHNjb3BlZCBjb25zdHJ1Y3QgSUQuIE11c3QgYmUgdW5pcXVlIGFtb25nc3Qgc2libGluZ3MgaW4gdGhlIHNhbWUgc2NvcGVcbiAgKiBAcGFyYW0gb3B0aW9ucyBEYXRhQXdzY2NRdWlja3NpZ2h0QW5hbHlzaXNDb25maWdcbiAgKi9cbiAgcHVibGljIGNvbnN0cnVjdG9yKHNjb3BlOiBDb25zdHJ1Y3QsIGlkOiBzdHJpbmcsIGNvbmZpZzogRGF0YUF3c2NjUXVpY2tzaWdodEFuYWx5c2lzQ29uZmlnKSB7XG4gICAgc3VwZXIoc2NvcGUsIGlkLCB7XG4gICAgICB0ZXJyYWZvcm1SZXNvdXJjZVR5cGU6ICdhd3NjY19xdWlja3NpZ2h0X2FuYWx5c2lzJyxcbiAgICAgIHRlcnJhZm9ybUdlbmVyYXRvck1ldGFkYXRhOiB7XG4gICAgICAgIHByb3ZpZGVyTmFtZTogJ2F3c2NjJ1xuICAgICAgfSxcbiAgICAgIHByb3ZpZGVyOiBjb25maWcucHJvdmlkZXIsXG4gICAgICBkZXBlbmRzT246IGNvbmZpZy5kZXBlbmRzT24sXG4gICAgICBjb3VudDogY29uZmlnLmNvdW50LFxuICAgICAgbGlmZWN5Y2xlOiBjb25maWcubGlmZWN5Y2xlXG4gICAgfSk7XG4gICAgdGhpcy5faWQgPSBjb25maWcuaWQ7XG4gIH1cblxuICAvLyA9PT09PT09PT09XG4gIC8vIEFUVFJJQlVURVNcbiAgLy8gPT09PT09PT09PVxuXG4gIC8vIGFuYWx5c2lzX2lkIC0gY29tcHV0ZWQ6IHRydWUsIG9wdGlvbmFsOiBmYWxzZSwgcmVxdWlyZWQ6IGZhbHNlXG4gIHB1YmxpYyBnZXQgYW5hbHlzaXNJZCgpIHtcbiAgICByZXR1cm4gdGhpcy5nZXRTdHJpbmdBdHRyaWJ1dGUoJ2FuYWx5c2lzX2lkJyk7XG4gIH1cblxuICAvLyBhcm4gLSBjb21wdXRlZDogdHJ1ZSwgb3B0aW9uYWw6IGZhbHNlLCByZXF1aXJlZDogZmFsc2VcbiAgcHVibGljIGdldCBhcm4oKSB7XG4gICAgcmV0dXJuIHRoaXMuZ2V0U3RyaW5nQXR0cmlidXRlKCdhcm4nKTtcbiAgfVxuXG4gIC8vIGF3c19hY2NvdW50X2lkIC0gY29tcHV0ZWQ6IHRydWUsIG9wdGlvbmFsOiBmYWxzZSwgcmVxdWlyZWQ6IGZhbHNlXG4gIHB1YmxpYyBnZXQgYXdzQWNjb3VudElkKCkge1xuICAgIHJldHVybiB0aGlzLmdldFN0cmluZ0F0dHJpYnV0ZSgnYXdzX2FjY291bnRfaWQnKTtcbiAgfVxuXG4gIC8vIGNyZWF0ZWRfdGltZSAtIGNvbXB1dGVkOiB0cnVlLCBvcHRpb25hbDogZmFsc2UsIHJlcXVpcmVkOiBmYWxzZVxuICBwdWJsaWMgZ2V0IGNyZWF0ZWRUaW1lKCkge1xuICAgIHJldHVybiB0aGlzLmdldFN0cmluZ0F0dHJpYnV0ZSgnY3JlYXRlZF90aW1lJyk7XG4gIH1cblxuICAvLyBkYXRhX3NldF9hcm5zIC0gY29tcHV0ZWQ6IHRydWUsIG9wdGlvbmFsOiBmYWxzZSwgcmVxdWlyZWQ6IGZhbHNlXG4gIHB1YmxpYyBnZXQgZGF0YVNldEFybnMoKSB7XG4gICAgcmV0dXJuIHRoaXMuZ2V0TGlzdEF0dHJpYnV0ZSgnZGF0YV9zZXRfYXJucycpO1xuICB9XG5cbiAgLy8gZXJyb3JzIC0gY29tcHV0ZWQ6IHRydWUsIG9wdGlvbmFsOiBmYWxzZSwgcmVxdWlyZWQ6IGZhbHNlXG4gIHB1YmxpYyBnZXQgZXJyb3JzKCkge1xuICAgIHJldHVybiB0aGlzLmludGVycG9sYXRpb25Gb3JBdHRyaWJ1dGUoJ2Vycm9ycycpIGFzIGFueTtcbiAgfVxuXG4gIC8vIGlkIC0gY29tcHV0ZWQ6IGZhbHNlLCBvcHRpb25hbDogZmFsc2UsIHJlcXVpcmVkOiB0cnVlXG4gIHByaXZhdGUgX2lkOiBzdHJpbmc7XG4gIHB1YmxpYyBnZXQgaWQoKSB7XG4gICAgcmV0dXJuIHRoaXMuZ2V0U3RyaW5nQXR0cmlidXRlKCdpZCcpO1xuICB9XG4gIHB1YmxpYyBzZXQgaWQodmFsdWU6IHN0cmluZykge1xuICAgIHRoaXMuX2lkID0gdmFsdWU7XG4gIH1cbiAgLy8gVGVtcG9yYXJpbHkgZXhwb3NlIGlucHV0IHZhbHVlLiBVc2Ugd2l0aCBjYXV0aW9uLlxuICBwdWJsaWMgZ2V0IGlkSW5wdXQoKSB7XG4gICAgcmV0dXJuIHRoaXMuX2lkXG4gIH1cblxuICAvLyBsYXN0X3VwZGF0ZWRfdGltZSAtIGNvbXB1dGVkOiB0cnVlLCBvcHRpb25hbDogZmFsc2UsIHJlcXVpcmVkOiBmYWxzZVxuICBwdWJsaWMgZ2V0IGxhc3RVcGRhdGVkVGltZSgpIHtcbiAgICByZXR1cm4gdGhpcy5nZXRTdHJpbmdBdHRyaWJ1dGUoJ2xhc3RfdXBkYXRlZF90aW1lJyk7XG4gIH1cblxuICAvLyBuYW1lIC0gY29tcHV0ZWQ6IHRydWUsIG9wdGlvbmFsOiBmYWxzZSwgcmVxdWlyZWQ6IGZhbHNlXG4gIHB1YmxpYyBnZXQgbmFtZSgpIHtcbiAgICByZXR1cm4gdGhpcy5nZXRTdHJpbmdBdHRyaWJ1dGUoJ25hbWUnKTtcbiAgfVxuXG4gIC8vIHBhcmFtZXRlcnMgLSBjb21wdXRlZDogdHJ1ZSwgb3B0aW9uYWw6IGZhbHNlLCByZXF1aXJlZDogZmFsc2VcbiAgcHVibGljIGdldCBwYXJhbWV0ZXJzKCkge1xuICAgIHJldHVybiB0aGlzLmludGVycG9sYXRpb25Gb3JBdHRyaWJ1dGUoJ3BhcmFtZXRlcnMnKSBhcyBhbnk7XG4gIH1cblxuICAvLyBwZXJtaXNzaW9ucyAtIGNvbXB1dGVkOiB0cnVlLCBvcHRpb25hbDogZmFsc2UsIHJlcXVpcmVkOiBmYWxzZVxuICBwdWJsaWMgZ2V0IHBlcm1pc3Npb25zKCkge1xuICAgIHJldHVybiB0aGlzLmludGVycG9sYXRpb25Gb3JBdHRyaWJ1dGUoJ3Blcm1pc3Npb25zJykgYXMgYW55O1xuICB9XG5cbiAgLy8gc2hlZXRzIC0gY29tcHV0ZWQ6IHRydWUsIG9wdGlvbmFsOiBmYWxzZSwgcmVxdWlyZWQ6IGZhbHNlXG4gIHB1YmxpYyBnZXQgc2hlZXRzKCkge1xuICAgIHJldHVybiB0aGlzLmludGVycG9sYXRpb25Gb3JBdHRyaWJ1dGUoJ3NoZWV0cycpIGFzIGFueTtcbiAgfVxuXG4gIC8vIHNvdXJjZV9lbnRpdHkgLSBjb21wdXRlZDogdHJ1ZSwgb3B0aW9uYWw6IGZhbHNlLCByZXF1aXJlZDogZmFsc2VcbiAgcHVibGljIGdldCBzb3VyY2VFbnRpdHkoKSB7XG4gICAgcmV0dXJuIHRoaXMuaW50ZXJwb2xhdGlvbkZvckF0dHJpYnV0ZSgnc291cmNlX2VudGl0eScpIGFzIGFueTtcbiAgfVxuXG4gIC8vIHN0YXR1cyAtIGNvbXB1dGVkOiB0cnVlLCBvcHRpb25hbDogZmFsc2UsIHJlcXVpcmVkOiBmYWxzZVxuICBwdWJsaWMgZ2V0IHN0YXR1cygpIHtcbiAgICByZXR1cm4gdGhpcy5nZXRTdHJpbmdBdHRyaWJ1dGUoJ3N0YXR1cycpO1xuICB9XG5cbiAgLy8gdGFncyAtIGNvbXB1dGVkOiB0cnVlLCBvcHRpb25hbDogZmFsc2UsIHJlcXVpcmVkOiBmYWxzZVxuICBwdWJsaWMgZ2V0IHRhZ3MoKSB7XG4gICAgcmV0dXJuIHRoaXMuaW50ZXJwb2xhdGlvbkZvckF0dHJpYnV0ZSgndGFncycpIGFzIGFueTtcbiAgfVxuXG4gIC8vIHRoZW1lX2FybiAtIGNvbXB1dGVkOiB0cnVlLCBvcHRpb25hbDogZmFsc2UsIHJlcXVpcmVkOiBmYWxzZVxuICBwdWJsaWMgZ2V0IHRoZW1lQXJuKCkge1xuICAgIHJldHVybiB0aGlzLmdldFN0cmluZ0F0dHJpYnV0ZSgndGhlbWVfYXJuJyk7XG4gIH1cblxuICAvLyA9PT09PT09PT1cbiAgLy8gU1lOVEhFU0lTXG4gIC8vID09PT09PT09PVxuXG4gIHByb3RlY3RlZCBzeW50aGVzaXplQXR0cmlidXRlcygpOiB7IFtuYW1lOiBzdHJpbmddOiBhbnkgfSB7XG4gICAgcmV0dXJuIHtcbiAgICAgIGlkOiBjZGt0Zi5zdHJpbmdUb1RlcnJhZm9ybSh0aGlzLl9pZCksXG4gICAgfTtcbiAgfVxufVxuIl19