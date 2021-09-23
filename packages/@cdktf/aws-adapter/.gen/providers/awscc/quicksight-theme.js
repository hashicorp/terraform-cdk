"use strict";
// https://www.terraform.io/docs/providers/awscc/r/quicksight_theme.html
// generated from terraform resource schema
Object.defineProperty(exports, "__esModule", { value: true });
exports.QuicksightTheme = exports.quicksightThemeVersionToTerraform = exports.QuicksightThemeVersion = exports.quicksightThemeVersionErrorsToTerraform = exports.quicksightThemeVersionConfigurationToTerraform = exports.quicksightThemeVersionConfigurationUiColorPaletteToTerraform = exports.quicksightThemeVersionConfigurationTypographyToTerraform = exports.quicksightThemeVersionConfigurationTypographyFontFamiliesToTerraform = exports.quicksightThemeVersionConfigurationSheetToTerraform = exports.quicksightThemeVersionConfigurationSheetTileLayoutToTerraform = exports.quicksightThemeVersionConfigurationSheetTileLayoutMarginToTerraform = exports.quicksightThemeVersionConfigurationSheetTileLayoutGutterToTerraform = exports.quicksightThemeVersionConfigurationSheetTileToTerraform = exports.quicksightThemeVersionConfigurationSheetTileBorderToTerraform = exports.quicksightThemeVersionConfigurationDataColorPaletteToTerraform = exports.quicksightThemeTagsToTerraform = exports.quicksightThemePermissionsToTerraform = exports.quicksightThemeConfigurationToTerraform = exports.quicksightThemeConfigurationUiColorPaletteToTerraform = exports.quicksightThemeConfigurationTypographyToTerraform = exports.quicksightThemeConfigurationTypographyFontFamiliesToTerraform = exports.quicksightThemeConfigurationSheetToTerraform = exports.quicksightThemeConfigurationSheetTileLayoutToTerraform = exports.quicksightThemeConfigurationSheetTileLayoutMarginToTerraform = exports.quicksightThemeConfigurationSheetTileLayoutGutterToTerraform = exports.quicksightThemeConfigurationSheetTileToTerraform = exports.quicksightThemeConfigurationSheetTileBorderToTerraform = exports.quicksightThemeConfigurationDataColorPaletteToTerraform = void 0;
const cdktf = require("cdktf");
function quicksightThemeConfigurationDataColorPaletteToTerraform(struct) {
    if (!cdktf.canInspect(struct)) {
        return struct;
    }
    return {
        colors: cdktf.listMapper(cdktf.stringToTerraform)(struct.colors),
        empty_fill_color: cdktf.stringToTerraform(struct.emptyFillColor),
        min_max_gradient: cdktf.listMapper(cdktf.stringToTerraform)(struct.minMaxGradient),
    };
}
exports.quicksightThemeConfigurationDataColorPaletteToTerraform = quicksightThemeConfigurationDataColorPaletteToTerraform;
function quicksightThemeConfigurationSheetTileBorderToTerraform(struct) {
    if (!cdktf.canInspect(struct)) {
        return struct;
    }
    return {
        show: cdktf.booleanToTerraform(struct.show),
    };
}
exports.quicksightThemeConfigurationSheetTileBorderToTerraform = quicksightThemeConfigurationSheetTileBorderToTerraform;
function quicksightThemeConfigurationSheetTileToTerraform(struct) {
    if (!cdktf.canInspect(struct)) {
        return struct;
    }
    return {
        border: quicksightThemeConfigurationSheetTileBorderToTerraform(struct.border),
    };
}
exports.quicksightThemeConfigurationSheetTileToTerraform = quicksightThemeConfigurationSheetTileToTerraform;
function quicksightThemeConfigurationSheetTileLayoutGutterToTerraform(struct) {
    if (!cdktf.canInspect(struct)) {
        return struct;
    }
    return {
        show: cdktf.booleanToTerraform(struct.show),
    };
}
exports.quicksightThemeConfigurationSheetTileLayoutGutterToTerraform = quicksightThemeConfigurationSheetTileLayoutGutterToTerraform;
function quicksightThemeConfigurationSheetTileLayoutMarginToTerraform(struct) {
    if (!cdktf.canInspect(struct)) {
        return struct;
    }
    return {
        show: cdktf.booleanToTerraform(struct.show),
    };
}
exports.quicksightThemeConfigurationSheetTileLayoutMarginToTerraform = quicksightThemeConfigurationSheetTileLayoutMarginToTerraform;
function quicksightThemeConfigurationSheetTileLayoutToTerraform(struct) {
    if (!cdktf.canInspect(struct)) {
        return struct;
    }
    return {
        gutter: quicksightThemeConfigurationSheetTileLayoutGutterToTerraform(struct.gutter),
        margin: quicksightThemeConfigurationSheetTileLayoutMarginToTerraform(struct.margin),
    };
}
exports.quicksightThemeConfigurationSheetTileLayoutToTerraform = quicksightThemeConfigurationSheetTileLayoutToTerraform;
function quicksightThemeConfigurationSheetToTerraform(struct) {
    if (!cdktf.canInspect(struct)) {
        return struct;
    }
    return {
        tile: quicksightThemeConfigurationSheetTileToTerraform(struct.tile),
        tile_layout: quicksightThemeConfigurationSheetTileLayoutToTerraform(struct.tileLayout),
    };
}
exports.quicksightThemeConfigurationSheetToTerraform = quicksightThemeConfigurationSheetToTerraform;
function quicksightThemeConfigurationTypographyFontFamiliesToTerraform(struct) {
    if (!cdktf.canInspect(struct)) {
        return struct;
    }
    return {
        font_family: cdktf.stringToTerraform(struct.fontFamily),
    };
}
exports.quicksightThemeConfigurationTypographyFontFamiliesToTerraform = quicksightThemeConfigurationTypographyFontFamiliesToTerraform;
function quicksightThemeConfigurationTypographyToTerraform(struct) {
    if (!cdktf.canInspect(struct)) {
        return struct;
    }
    return {
        font_families: cdktf.listMapper(quicksightThemeConfigurationTypographyFontFamiliesToTerraform)(struct.fontFamilies),
    };
}
exports.quicksightThemeConfigurationTypographyToTerraform = quicksightThemeConfigurationTypographyToTerraform;
function quicksightThemeConfigurationUiColorPaletteToTerraform(struct) {
    if (!cdktf.canInspect(struct)) {
        return struct;
    }
    return {
        accent: cdktf.stringToTerraform(struct.accent),
        accent_foreground: cdktf.stringToTerraform(struct.accentForeground),
        danger: cdktf.stringToTerraform(struct.danger),
        danger_foreground: cdktf.stringToTerraform(struct.dangerForeground),
        dimension: cdktf.stringToTerraform(struct.dimension),
        dimension_foreground: cdktf.stringToTerraform(struct.dimensionForeground),
        measure: cdktf.stringToTerraform(struct.measure),
        measure_foreground: cdktf.stringToTerraform(struct.measureForeground),
        primary_background: cdktf.stringToTerraform(struct.primaryBackground),
        primary_foreground: cdktf.stringToTerraform(struct.primaryForeground),
        secondary_background: cdktf.stringToTerraform(struct.secondaryBackground),
        secondary_foreground: cdktf.stringToTerraform(struct.secondaryForeground),
        success: cdktf.stringToTerraform(struct.success),
        success_foreground: cdktf.stringToTerraform(struct.successForeground),
        warning: cdktf.stringToTerraform(struct.warning),
        warning_foreground: cdktf.stringToTerraform(struct.warningForeground),
    };
}
exports.quicksightThemeConfigurationUiColorPaletteToTerraform = quicksightThemeConfigurationUiColorPaletteToTerraform;
function quicksightThemeConfigurationToTerraform(struct) {
    if (!cdktf.canInspect(struct)) {
        return struct;
    }
    return {
        data_color_palette: quicksightThemeConfigurationDataColorPaletteToTerraform(struct.dataColorPalette),
        sheet: quicksightThemeConfigurationSheetToTerraform(struct.sheet),
        typography: quicksightThemeConfigurationTypographyToTerraform(struct.typography),
        ui_color_palette: quicksightThemeConfigurationUiColorPaletteToTerraform(struct.uiColorPalette),
    };
}
exports.quicksightThemeConfigurationToTerraform = quicksightThemeConfigurationToTerraform;
function quicksightThemePermissionsToTerraform(struct) {
    if (!cdktf.canInspect(struct)) {
        return struct;
    }
    return {
        actions: cdktf.listMapper(cdktf.stringToTerraform)(struct.actions),
        principal: cdktf.stringToTerraform(struct.principal),
    };
}
exports.quicksightThemePermissionsToTerraform = quicksightThemePermissionsToTerraform;
function quicksightThemeTagsToTerraform(struct) {
    if (!cdktf.canInspect(struct)) {
        return struct;
    }
    return {
        key: cdktf.stringToTerraform(struct.key),
        value: cdktf.stringToTerraform(struct.value),
    };
}
exports.quicksightThemeTagsToTerraform = quicksightThemeTagsToTerraform;
function quicksightThemeVersionConfigurationDataColorPaletteToTerraform(struct) {
    if (!cdktf.canInspect(struct)) {
        return struct;
    }
    return {
        colors: cdktf.listMapper(cdktf.stringToTerraform)(struct.colors),
        empty_fill_color: cdktf.stringToTerraform(struct.emptyFillColor),
        min_max_gradient: cdktf.listMapper(cdktf.stringToTerraform)(struct.minMaxGradient),
    };
}
exports.quicksightThemeVersionConfigurationDataColorPaletteToTerraform = quicksightThemeVersionConfigurationDataColorPaletteToTerraform;
function quicksightThemeVersionConfigurationSheetTileBorderToTerraform(struct) {
    if (!cdktf.canInspect(struct)) {
        return struct;
    }
    return {
        show: cdktf.booleanToTerraform(struct.show),
    };
}
exports.quicksightThemeVersionConfigurationSheetTileBorderToTerraform = quicksightThemeVersionConfigurationSheetTileBorderToTerraform;
function quicksightThemeVersionConfigurationSheetTileToTerraform(struct) {
    if (!cdktf.canInspect(struct)) {
        return struct;
    }
    return {
        border: quicksightThemeVersionConfigurationSheetTileBorderToTerraform(struct.border),
    };
}
exports.quicksightThemeVersionConfigurationSheetTileToTerraform = quicksightThemeVersionConfigurationSheetTileToTerraform;
function quicksightThemeVersionConfigurationSheetTileLayoutGutterToTerraform(struct) {
    if (!cdktf.canInspect(struct)) {
        return struct;
    }
    return {
        show: cdktf.booleanToTerraform(struct.show),
    };
}
exports.quicksightThemeVersionConfigurationSheetTileLayoutGutterToTerraform = quicksightThemeVersionConfigurationSheetTileLayoutGutterToTerraform;
function quicksightThemeVersionConfigurationSheetTileLayoutMarginToTerraform(struct) {
    if (!cdktf.canInspect(struct)) {
        return struct;
    }
    return {
        show: cdktf.booleanToTerraform(struct.show),
    };
}
exports.quicksightThemeVersionConfigurationSheetTileLayoutMarginToTerraform = quicksightThemeVersionConfigurationSheetTileLayoutMarginToTerraform;
function quicksightThemeVersionConfigurationSheetTileLayoutToTerraform(struct) {
    if (!cdktf.canInspect(struct)) {
        return struct;
    }
    return {
        gutter: quicksightThemeVersionConfigurationSheetTileLayoutGutterToTerraform(struct.gutter),
        margin: quicksightThemeVersionConfigurationSheetTileLayoutMarginToTerraform(struct.margin),
    };
}
exports.quicksightThemeVersionConfigurationSheetTileLayoutToTerraform = quicksightThemeVersionConfigurationSheetTileLayoutToTerraform;
function quicksightThemeVersionConfigurationSheetToTerraform(struct) {
    if (!cdktf.canInspect(struct)) {
        return struct;
    }
    return {
        tile: quicksightThemeVersionConfigurationSheetTileToTerraform(struct.tile),
        tile_layout: quicksightThemeVersionConfigurationSheetTileLayoutToTerraform(struct.tileLayout),
    };
}
exports.quicksightThemeVersionConfigurationSheetToTerraform = quicksightThemeVersionConfigurationSheetToTerraform;
function quicksightThemeVersionConfigurationTypographyFontFamiliesToTerraform(struct) {
    if (!cdktf.canInspect(struct)) {
        return struct;
    }
    return {
        font_family: cdktf.stringToTerraform(struct.fontFamily),
    };
}
exports.quicksightThemeVersionConfigurationTypographyFontFamiliesToTerraform = quicksightThemeVersionConfigurationTypographyFontFamiliesToTerraform;
function quicksightThemeVersionConfigurationTypographyToTerraform(struct) {
    if (!cdktf.canInspect(struct)) {
        return struct;
    }
    return {
        font_families: cdktf.listMapper(quicksightThemeVersionConfigurationTypographyFontFamiliesToTerraform)(struct.fontFamilies),
    };
}
exports.quicksightThemeVersionConfigurationTypographyToTerraform = quicksightThemeVersionConfigurationTypographyToTerraform;
function quicksightThemeVersionConfigurationUiColorPaletteToTerraform(struct) {
    if (!cdktf.canInspect(struct)) {
        return struct;
    }
    return {
        accent: cdktf.stringToTerraform(struct.accent),
        accent_foreground: cdktf.stringToTerraform(struct.accentForeground),
        danger: cdktf.stringToTerraform(struct.danger),
        danger_foreground: cdktf.stringToTerraform(struct.dangerForeground),
        dimension: cdktf.stringToTerraform(struct.dimension),
        dimension_foreground: cdktf.stringToTerraform(struct.dimensionForeground),
        measure: cdktf.stringToTerraform(struct.measure),
        measure_foreground: cdktf.stringToTerraform(struct.measureForeground),
        primary_background: cdktf.stringToTerraform(struct.primaryBackground),
        primary_foreground: cdktf.stringToTerraform(struct.primaryForeground),
        secondary_background: cdktf.stringToTerraform(struct.secondaryBackground),
        secondary_foreground: cdktf.stringToTerraform(struct.secondaryForeground),
        success: cdktf.stringToTerraform(struct.success),
        success_foreground: cdktf.stringToTerraform(struct.successForeground),
        warning: cdktf.stringToTerraform(struct.warning),
        warning_foreground: cdktf.stringToTerraform(struct.warningForeground),
    };
}
exports.quicksightThemeVersionConfigurationUiColorPaletteToTerraform = quicksightThemeVersionConfigurationUiColorPaletteToTerraform;
function quicksightThemeVersionConfigurationToTerraform(struct) {
    if (!cdktf.canInspect(struct)) {
        return struct;
    }
    return {
        data_color_palette: quicksightThemeVersionConfigurationDataColorPaletteToTerraform(struct.dataColorPalette),
        sheet: quicksightThemeVersionConfigurationSheetToTerraform(struct.sheet),
        typography: quicksightThemeVersionConfigurationTypographyToTerraform(struct.typography),
        ui_color_palette: quicksightThemeVersionConfigurationUiColorPaletteToTerraform(struct.uiColorPalette),
    };
}
exports.quicksightThemeVersionConfigurationToTerraform = quicksightThemeVersionConfigurationToTerraform;
function quicksightThemeVersionErrorsToTerraform(struct) {
    if (!cdktf.canInspect(struct)) {
        return struct;
    }
    return {
        message: cdktf.stringToTerraform(struct.message),
        type: cdktf.stringToTerraform(struct.type),
    };
}
exports.quicksightThemeVersionErrorsToTerraform = quicksightThemeVersionErrorsToTerraform;
class QuicksightThemeVersion extends cdktf.ComplexComputedList {
    // arn - computed: true, optional: true, required: false
    get arn() {
        return this.getStringAttribute('arn');
    }
    get baseThemeId() {
        return this.getStringAttribute('base_theme_id');
    }
    set baseThemeId(value) {
        this._baseThemeId = value;
    }
    resetBaseThemeId() {
        this._baseThemeId = undefined;
    }
    // Temporarily expose input value. Use with caution.
    get baseThemeIdInput() {
        return this._baseThemeId;
    }
    get configuration() {
        return this.interpolationForAttribute('configuration');
    }
    set configuration(value) {
        this._configuration = value;
    }
    resetConfiguration() {
        this._configuration = undefined;
    }
    // Temporarily expose input value. Use with caution.
    get configurationInput() {
        return this._configuration;
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
exports.QuicksightThemeVersion = QuicksightThemeVersion;
function quicksightThemeVersionToTerraform(struct) {
    if (!cdktf.canInspect(struct)) {
        return struct;
    }
    return {
        arn: cdktf.stringToTerraform(struct.arn),
        base_theme_id: cdktf.stringToTerraform(struct.baseThemeId),
        configuration: quicksightThemeVersionConfigurationToTerraform(struct.configuration),
        created_time: cdktf.stringToTerraform(struct.createdTime),
        description: cdktf.stringToTerraform(struct.description),
        errors: cdktf.listMapper(quicksightThemeVersionErrorsToTerraform)(struct.errors),
        status: cdktf.stringToTerraform(struct.status),
        version_number: cdktf.numberToTerraform(struct.versionNumber),
    };
}
exports.quicksightThemeVersionToTerraform = quicksightThemeVersionToTerraform;
/**
* Represents a {@link https://www.terraform.io/docs/providers/awscc/r/quicksight_theme.html awscc_quicksight_theme}
*/
class QuicksightTheme extends cdktf.TerraformResource {
    // ===========
    // INITIALIZER
    // ===========
    /**
    * Create a new {@link https://www.terraform.io/docs/providers/awscc/r/quicksight_theme.html awscc_quicksight_theme} Resource
    *
    * @param scope The scope in which to define this construct
    * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
    * @param options QuicksightThemeConfig
    */
    constructor(scope, id, config) {
        super(scope, id, {
            terraformResourceType: 'awscc_quicksight_theme',
            terraformGeneratorMetadata: {
                providerName: 'awscc'
            },
            provider: config.provider,
            dependsOn: config.dependsOn,
            count: config.count,
            lifecycle: config.lifecycle
        });
        this._awsAccountId = config.awsAccountId;
        this._baseThemeId = config.baseThemeId;
        this._configuration = config.configuration;
        this._name = config.name;
        this._permissions = config.permissions;
        this._tags = config.tags;
        this._themeId = config.themeId;
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
    get baseThemeId() {
        return this.getStringAttribute('base_theme_id');
    }
    set baseThemeId(value) {
        this._baseThemeId = value;
    }
    resetBaseThemeId() {
        this._baseThemeId = undefined;
    }
    // Temporarily expose input value. Use with caution.
    get baseThemeIdInput() {
        return this._baseThemeId;
    }
    get configuration() {
        return this.interpolationForAttribute('configuration');
    }
    set configuration(value) {
        this._configuration = value;
    }
    resetConfiguration() {
        this._configuration = undefined;
    }
    // Temporarily expose input value. Use with caution.
    get configurationInput() {
        return this._configuration;
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
    get themeId() {
        return this.getStringAttribute('theme_id');
    }
    set themeId(value) {
        this._themeId = value;
    }
    // Temporarily expose input value. Use with caution.
    get themeIdInput() {
        return this._themeId;
    }
    // type - computed: true, optional: false, required: false
    get type() {
        return this.getStringAttribute('type');
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
            base_theme_id: cdktf.stringToTerraform(this._baseThemeId),
            configuration: quicksightThemeConfigurationToTerraform(this._configuration),
            name: cdktf.stringToTerraform(this._name),
            permissions: cdktf.listMapper(quicksightThemePermissionsToTerraform)(this._permissions),
            tags: cdktf.listMapper(quicksightThemeTagsToTerraform)(this._tags),
            theme_id: cdktf.stringToTerraform(this._themeId),
            version_description: cdktf.stringToTerraform(this._versionDescription),
        };
    }
}
exports.QuicksightTheme = QuicksightTheme;
// =================
// STATIC PROPERTIES
// =================
QuicksightTheme.tfResourceType = "awscc_quicksight_theme";
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicXVpY2tzaWdodC10aGVtZS5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbInF1aWNrc2lnaHQtdGhlbWUudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IjtBQUFBLHdFQUF3RTtBQUN4RSwyQ0FBMkM7OztBQUczQywrQkFBK0I7QUFpRi9CLFNBQWdCLHVEQUF1RCxDQUFDLE1BQXFEO0lBQzNILElBQUksQ0FBQyxLQUFLLENBQUMsVUFBVSxDQUFDLE1BQU0sQ0FBQyxFQUFFO1FBQUUsT0FBTyxNQUFNLENBQUM7S0FBRTtJQUNqRCxPQUFPO1FBQ0wsTUFBTSxFQUFFLEtBQUssQ0FBQyxVQUFVLENBQUMsS0FBSyxDQUFDLGlCQUFpQixDQUFDLENBQUMsTUFBTyxDQUFDLE1BQU0sQ0FBQztRQUNqRSxnQkFBZ0IsRUFBRSxLQUFLLENBQUMsaUJBQWlCLENBQUMsTUFBTyxDQUFDLGNBQWMsQ0FBQztRQUNqRSxnQkFBZ0IsRUFBRSxLQUFLLENBQUMsVUFBVSxDQUFDLEtBQUssQ0FBQyxpQkFBaUIsQ0FBQyxDQUFDLE1BQU8sQ0FBQyxjQUFjLENBQUM7S0FDcEYsQ0FBQTtBQUNILENBQUM7QUFQRCwwSEFPQztBQVdELFNBQWdCLHNEQUFzRCxDQUFDLE1BQW9EO0lBQ3pILElBQUksQ0FBQyxLQUFLLENBQUMsVUFBVSxDQUFDLE1BQU0sQ0FBQyxFQUFFO1FBQUUsT0FBTyxNQUFNLENBQUM7S0FBRTtJQUNqRCxPQUFPO1FBQ0wsSUFBSSxFQUFFLEtBQUssQ0FBQyxrQkFBa0IsQ0FBQyxNQUFPLENBQUMsSUFBSSxDQUFDO0tBQzdDLENBQUE7QUFDSCxDQUFDO0FBTEQsd0hBS0M7QUFXRCxTQUFnQixnREFBZ0QsQ0FBQyxNQUE4QztJQUM3RyxJQUFJLENBQUMsS0FBSyxDQUFDLFVBQVUsQ0FBQyxNQUFNLENBQUMsRUFBRTtRQUFFLE9BQU8sTUFBTSxDQUFDO0tBQUU7SUFDakQsT0FBTztRQUNMLE1BQU0sRUFBRSxzREFBc0QsQ0FBQyxNQUFPLENBQUMsTUFBTSxDQUFD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SUFBSSxDQUFDLGNBQWMsQ0FBQztZQUMzRSxJQUFJLEVBQUUsS0FBSyxDQUFDLGlCQUFpQixDQUFDLElBQUksQ0FBQyxLQUFLLENBQUM7WUFDekMsV0FBVyxFQUFFLEtBQUssQ0FBQyxVQUFVLENBQUMscUNBQXFDLENBQUMsQ0FBQyxJQUFJLENBQUMsWUFBWSxDQUFDO1lBQ3ZGLElBQUksRUFBRSxLQUFLLENBQUMsVUFBVSxDQUFDLDhCQUE4QixDQUFDLENBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQztZQUNsRSxRQUFRLEVBQUUsS0FBSyxDQUFDLGlCQUFpQixDQUFDLElBQUksQ0FBQyxRQUFRLENBQUM7WUFDaEQsbUJBQW1CLEVBQUUsS0FBSyxDQUFDLGlCQUFpQixDQUFDLElBQUksQ0FBQyxtQkFBbUIsQ0FBQztTQUN2RSxDQUFDO0lBQ0osQ0FBQzs7QUFsTkgsMENBbU5DO0FBak5DLG9CQUFvQjtBQUNwQixvQkFBb0I7QUFDcEIsb0JBQW9CO0FBQ0csOEJBQWMsR0FBVyx3QkFBd0IsQ0FBQyIsInNvdXJjZXNDb250ZW50IjpbIi8vIGh0dHBzOi8vd3d3LnRlcnJhZm9ybS5pby9kb2NzL3Byb3ZpZGVycy9hd3NjYy9yL3F1aWNrc2lnaHRfdGhlbWUuaHRtbFxuLy8gZ2VuZXJhdGVkIGZyb20gdGVycmFmb3JtIHJlc291cmNlIHNjaGVtYVxuXG5pbXBvcnQgeyBDb25zdHJ1Y3QgfSBmcm9tICdjb25zdHJ1Y3RzJztcbmltcG9ydCAqIGFzIGNka3RmIGZyb20gJ2Nka3RmJztcblxuLy8gQ29uZmlndXJhdGlvblxuXG5leHBvcnQgaW50ZXJmYWNlIFF1aWNrc2lnaHRUaGVtZUNvbmZpZyBleHRlbmRzIGNka3RmLlRlcnJhZm9ybU1ldGFBcmd1bWVudHMge1xuICAvKipcbiAgKiBEb2NzIGF0IFRlcnJhZm9ybSBSZWdpc3RyeToge0BsaW5rIGh0dHBzOi8vd3d3LnRlcnJhZm9ybS5pby9kb2NzL3Byb3ZpZGVycy9hd3NjYy9yL3F1aWNrc2lnaHRfdGhlbWUuaHRtbCNhd3NfYWNjb3VudF9pZCBRdWlja3NpZ2h0VGhlbWUjYXdzX2FjY291bnRfaWR9XG4gICovXG4gIHJlYWRvbmx5IGF3c0FjY291bnRJZDogc3RyaW5nO1xuICAvKipcbiAgKiA8cD5UaGUgSUQgb2YgdGhlIHRoZW1lIHRoYXQgYSBjdXN0b20gdGhlbWUgd2lsbCBpbmhlcml0IGZyb20uIEFsbCB0aGVtZXMgaW5oZXJpdCBmcm9tIG9uZSBvZlxuXHRcdFx0dGhlIHN0YXJ0aW5nIHRoZW1lcyBkZWZpbmVkIGJ5IEFtYXpvbiBRdWlja1NpZ2h0LiBGb3IgYSBsaXN0IG9mIHRoZSBzdGFydGluZyB0aGVtZXMsIHVzZVxuXHRcdFx0XHQ8Y29kZT5MaXN0VGhlbWVzPC9jb2RlPiBvciBjaG9vc2UgPGI+VGhlbWVzPC9iPiBmcm9tXG5cdFx0XHR3aXRoaW4gYSBRdWlja1NpZ2h0IGFuYWx5c2lzLiA8L3A+XG4gICogXG4gICogRG9jcyBhdCBUZXJyYWZvcm0gUmVnaXN0cnk6IHtAbGluayBodHRwczovL3d3dy50ZXJyYWZvcm0uaW8vZG9jcy9wcm92aWRlcnMvYXdzY2Mvci9xdWlja3NpZ2h0X3RoZW1lLmh0bWwjYmFzZV90aGVtZV9pZCBRdWlja3NpZ2h0VGhlbWUjYmFzZV90aGVtZV9pZH1cbiAgKi9cbiAgcmVhZG9ubHkgYmFzZVRoZW1lSWQ/OiBzdHJpbmc7XG4gIC8qKlxuICAqIDxwPlRoZSB0aGVtZSBjb25maWd1cmF0aW9uLiBUaGlzIGNvbmZpZ3VyYXRpb24gY29udGFpbnMgYWxsIG9mIHRoZSBkaXNwbGF5IHByb3BlcnRpZXMgZm9yXG4gICAgICAgICAgICBhIHRoZW1lLjwvcD5cbiAgKiBcbiAgKiBEb2NzIGF0IFRlcnJhZm9ybSBSZWdpc3RyeToge0BsaW5rIGh0dHBzOi8vd3d3LnRlcnJhZm9ybS5pby9kb2NzL3Byb3ZpZGVycy9hd3NjYy9yL3F1aWNrc2lnaHRfdGhlbWUuaHRtbCNjb25maWd1cmF0aW9uIFF1aWNrc2lnaHRUaGVtZSNjb25maWd1cmF0aW9ufVxuICAqL1xuICByZWFkb25seSBjb25maWd1cmF0aW9uPzogUXVpY2tzaWdodFRoZW1lQ29uZmlndXJhdGlvbjtcbiAgLyoqXG4gICogPHA+QSBkaXNwbGF5IG5hbWUgZm9yIHRoZSB0aGVtZS48L3A+XG4gICogXG4gICogRG9jcyBhdCBUZXJyYWZvcm0gUmVnaXN0cnk6IHtAbGluayBodHRwczovL3d3dy50ZXJyYWZvcm0uaW8vZG9jcy9wcm92aWRlcnMvYXdzY2Mvci9xdWlja3NpZ2h0X3RoZW1lLmh0bWwjbmFtZSBRdWlja3NpZ2h0VGhlbWUjbmFtZX1cbiAgKi9cbiAgcmVhZG9ubHkgbmFtZT86IHN0cmluZztcbiAgLyoqXG4gICogPHA+QSB2YWxpZCBncm91cGluZyBvZiByZXNvdXJjZSBwZXJtaXNzaW9ucyB0byBhcHBseSB0byB0aGUgbmV3IHRoZW1lLlxuXHRcdFx0PC9wPlxuICAqIFxuICAqIERvY3MgYXQgVGVycmFmb3JtIFJlZ2lzdHJ5OiB7QGxpbmsgaHR0cHM6Ly93d3cudGVycmFmb3JtLmlvL2RvY3MvcHJvdmlkZXJzL2F3c2NjL3IvcXVpY2tzaWdodF90aGVtZS5odG1sI3Blcm1pc3Npb25zIFF1aWNrc2lnaHRUaGVtZSNwZXJtaXNzaW9uc31cbiAgKi9cbiAgcmVhZG9ubHkgcGVybWlzc2lvbnM/OiBRdWlja3NpZ2h0VGhlbWVQZXJtaXNzaW9uc1tdO1xuICAvKipcbiAgKiA8cD5BIG1hcCBvZiB0aGUga2V5LXZhbHVlIHBhaXJzIGZvciB0aGUgcmVzb3VyY2UgdGFnIG9yIHRhZ3MgdGhhdCB5b3Ugd2FudCB0byBhZGQgdG8gdGhlXG5cdFx0XHRyZXNvdXJjZS48L3A+XG4gICogXG4gICogRG9jcyBhdCBUZXJyYWZvcm0gUmVnaXN0cnk6IHtAbGluayBodHRwczovL3d3dy50ZXJyYWZvcm0uaW8vZG9jcy9wcm92aWRlcnMvYXdzY2Mvci9xdWlja3NpZ2h0X3RoZW1lLmh0bWwjdGFncyBRdWlja3NpZ2h0VGhlbWUjdGFnc31cbiAgKi9cbiAgcmVhZG9ubHkgdGFncz86IFF1aWNrc2lnaHRUaGVtZVRhZ3NbXTtcbiAgLyoqXG4gICogRG9jcyBhdCBUZXJyYWZvcm0gUmVnaXN0cnk6IHtAbGluayBodHRwczovL3d3dy50ZXJyYWZvcm0uaW8vZG9jcy9wcm92aWRlcnMvYXdzY2Mvci9xdWlja3NpZ2h0X3RoZW1lLmh0bWwjdGhlbWVfaWQgUXVpY2tzaWdodFRoZW1lI3RoZW1lX2lkfVxuICAqL1xuICByZWFkb25seSB0aGVtZUlkOiBzdHJpbmc7XG4gIC8qKlxuICAqIDxwPkEgZGVzY3JpcHRpb24gb2YgdGhlIGZpcnN0IHZlcnNpb24gb2YgdGhlIHRoZW1lIHRoYXQgeW91J3JlIGNyZWF0aW5nLiBFdmVyeSB0aW1lXG5cdFx0XHRcdDxjb2RlPlVwZGF0ZVRoZW1lPC9jb2RlPiBpcyBjYWxsZWQsIGEgbmV3IHZlcnNpb24gaXMgY3JlYXRlZC4gRWFjaCB2ZXJzaW9uIG9mIHRoZVxuXHRcdFx0dGhlbWUgaGFzIGEgZGVzY3JpcHRpb24gb2YgdGhlIHZlcnNpb24gaW4gdGhlIDxjb2RlPlZlcnNpb25EZXNjcmlwdGlvbjwvY29kZT5cblx0XHRcdGZpZWxkLjwvcD5cbiAgKiBcbiAgKiBEb2NzIGF0IFRlcnJhZm9ybSBSZWdpc3RyeToge0BsaW5rIGh0dHBzOi8vd3d3LnRlcnJhZm9ybS5pby9kb2NzL3Byb3ZpZGVycy9hd3NjYy9yL3F1aWNrc2lnaHRfdGhlbWUuaHRtbCN2ZXJzaW9uX2Rlc2NyaXB0aW9uIFF1aWNrc2lnaHRUaGVtZSN2ZXJzaW9uX2Rlc2NyaXB0aW9ufVxuICAqL1xuICByZWFkb25seSB2ZXJzaW9uRGVzY3JpcHRpb24/OiBzdHJpbmc7XG59XG5leHBvcnQgaW50ZXJmYWNlIFF1aWNrc2lnaHRUaGVtZUNvbmZpZ3VyYXRpb25EYXRhQ29sb3JQYWxldHRlIHtcbiAgLyoqXG4gICogPHA+VGhlIGhleGFkZWNpbWFsIGNvZGVzIGZvciB0aGUgY29sb3JzLjwvcD5cbiAgKiBcbiAgKiBEb2NzIGF0IFRlcnJhZm9ybSBSZWdpc3RyeToge0BsaW5rIGh0dHBzOi8vd3d3LnRlcnJhZm9ybS5pby9kb2NzL3Byb3ZpZGVycy9hd3NjYy9yL3F1aWNrc2lnaHRfdGhlbWUuaHRtbCNjb2xvcnMgUXVpY2tzaWdodFRoZW1lI2NvbG9yc31cbiAgKi9cbiAgcmVhZG9ubHkgY29sb3JzPzogc3RyaW5nW107XG4gIC8qKlxuICAqIDxwPlRoZSBoZXhhZGVjaW1hbCBjb2RlIG9mIGEgY29sb3IgdGhhdCBhcHBsaWVzIHRvIGNoYXJ0cyB3aGVyZSBhIGxhY2sgb2YgZGF0YSBpc1xuICAgICAgICAgICAgaGlnaGxpZ2h0ZWQuPC9wPlxuICAqIFxuICAqIERvY3MgYXQgVGVycmFmb3JtIFJlZ2lzdHJ5OiB7QGxpbmsgaHR0cHM6Ly93d3cudGVycmFmb3JtLmlvL2RvY3MvcHJvdmlkZXJzL2F3c2NjL3IvcXVpY2tzaWdodF90aGVtZS5odG1sI2VtcHR5X2ZpbGxfY29sb3IgUXVpY2tzaWdodFRoZW1lI2VtcHR5X2ZpbGxfY29sb3J9XG4gICovXG4gIHJlYWRvbmx5IGVtcHR5RmlsbENvbG9yPzogc3RyaW5nO1xuICAvKipcbiAgKiA8cD5UaGUgbWluaW11bSBhbmQgbWF4aW11bSBoZXhhZGVjaW1hbCBjb2RlcyB0aGF0IGRlc2NyaWJlIGEgY29sb3IgZ3JhZGllbnQuIDwvcD5cbiAgKiBcbiAgKiBEb2NzIGF0IFRlcnJhZm9ybSBSZWdpc3RyeToge0BsaW5rIGh0dHBzOi8vd3d3LnRlcnJhZm9ybS5pby9kb2NzL3Byb3ZpZGVycy9hd3NjYy9yL3F1aWNrc2lnaHRfdGhlbWUuaHRtbCNtaW5fbWF4X2dyYWRpZW50IFF1aWNrc2lnaHRUaGVtZSNtaW5fbWF4X2dyYWRpZW50fVxuICAqL1xuICByZWFkb25seSBtaW5NYXhHcmFkaWVudD86IHN0cmluZ1tdO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gcXVpY2tzaWdodFRoZW1lQ29uZmlndXJhdGlvbkRhdGFDb2xvclBhbGV0dGVUb1RlcnJhZm9ybShzdHJ1Y3Q/OiBRdWlja3NpZ2h0VGhlbWVDb25maWd1cmF0aW9uRGF0YUNvbG9yUGFsZXR0ZSk6IGFueSB7XG4gIGlmICghY2RrdGYuY2FuSW5zcGVjdChzdHJ1Y3QpKSB7IHJldHVybiBzdHJ1Y3Q7IH1cbiAgcmV0dXJuIHtcbiAgICBjb2xvcnM6IGNka3RmLmxpc3RNYXBwZXIoY2RrdGYuc3RyaW5nVG9UZXJyYWZvcm0pKHN0cnVjdCEuY29sb3JzKSxcbiAgICBlbXB0eV9maWxsX2NvbG9yOiBjZGt0Zi5zdHJpbmdUb1RlcnJhZm9ybShzdHJ1Y3QhLmVtcHR5RmlsbENvbG9yKSxcbiAgICBtaW5fbWF4X2dyYWRpZW50OiBjZGt0Zi5saXN0TWFwcGVyKGNka3RmLnN0cmluZ1RvVGVycmFmb3JtKShzdHJ1Y3QhLm1pbk1heEdyYWRpZW50KSxcbiAgfVxufVxuXG5leHBvcnQgaW50ZXJmYWNlIFF1aWNrc2lnaHRUaGVtZUNvbmZpZ3VyYXRpb25TaGVldFRpbGVCb3JkZXIge1xuICAvKipcbiAgKiA8cD5UaGUgb3B0aW9uIHRvIGVuYWJsZSBkaXNwbGF5IG9mIGJvcmRlcnMgZm9yIHZpc3VhbHMuPC9wPlxuICAqIFxuICAqIERvY3MgYXQgVGVycmFmb3JtIFJlZ2lzdHJ5OiB7QGxpbmsgaHR0cHM6Ly93d3cudGVycmFmb3JtLmlvL2RvY3MvcHJvdmlkZXJzL2F3c2NjL3IvcXVpY2tzaWdodF90aGVtZS5odG1sI3Nob3cgUXVpY2tzaWdodFRoZW1lI3Nob3d9XG4gICovXG4gIHJlYWRvbmx5IHNob3c/OiBib29sZWFuIHwgY2RrdGYuSVJlc29sdmFibGU7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBxdWlja3NpZ2h0VGhlbWVDb25maWd1cmF0aW9uU2hlZXRUaWxlQm9yZGVyVG9UZXJyYWZvcm0oc3RydWN0PzogUXVpY2tzaWdodFRoZW1lQ29uZmlndXJhdGlvblNoZWV0VGlsZUJvcmRlcik6IGFueSB7XG4gIGlmICghY2RrdGYuY2FuSW5zcGVjdChzdHJ1Y3QpKSB7IHJldHVybiBzdHJ1Y3Q7IH1cbiAgcmV0dXJuIHtcbiAgICBzaG93OiBjZGt0Zi5ib29sZWFuVG9UZXJyYWZvcm0oc3RydWN0IS5zaG93KSxcbiAgfVxufVxuXG5leHBvcnQgaW50ZXJmYWNlIFF1aWNrc2lnaHRUaGVtZUNvbmZpZ3VyYXRpb25TaGVldFRpbGUge1xuICAvKipcbiAgKiA8cD5UaGUgZGlzcGxheSBvcHRpb25zIGZvciB0aWxlIGJvcmRlcnMgZm9yIHZpc3VhbHMuPC9wPlxuICAqIFxuICAqIERvY3MgYXQgVGVycmFmb3JtIFJlZ2lzdHJ5OiB7QGxpbmsgaHR0cHM6Ly93d3cudGVycmFmb3JtLmlvL2RvY3MvcHJvdmlkZXJzL2F3c2NjL3IvcXVpY2tzaWdodF90aGVtZS5odG1sI2JvcmRlciBRdWlja3NpZ2h0VGhlbWUjYm9yZGVyfVxuICAqL1xuICByZWFkb25seSBib3JkZXI/OiBRdWlja3NpZ2h0VGhlbWVDb25maWd1cmF0aW9uU2hlZXRUaWxlQm9yZGVyO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gcXVpY2tzaWdodFRoZW1lQ29uZmlndXJhdGlvblNoZWV0VGlsZVRvVGVycmFmb3JtKHN0cnVjdD86IFF1aWNrc2lnaHRUaGVtZUNvbmZpZ3VyYXRpb25TaGVldFRpbGUpOiBhbnkge1xuICBpZiAoIWNka3RmLmNhbkluc3BlY3Qoc3RydWN0KSkgeyByZXR1cm4gc3RydWN0OyB9XG4gIHJldHVybiB7XG4gICAgYm9yZGVyOiBxdWlja3NpZ2h0VGhlbWVDb25maWd1cmF0aW9uU2hlZXRUaWxlQm9yZGVyVG9UZXJyYWZvcm0oc3RydWN0IS5ib3JkZXIpLFxuICB9XG59XG5cbmV4cG9ydCBpbnRlcmZhY2UgUXVpY2tzaWdodFRoZW1lQ29uZmlndXJhdGlvblNoZWV0VGlsZUxheW91dEd1dHRlciB7XG4gIC8qKlxuICAqIDxwPlRoaXMgQm9vbGVhbiB2YWx1ZSBjb250cm9scyB3aGV0aGVyIHRvIGRpc3BsYXkgYSBndXR0ZXIgc3BhY2UgYmV0d2VlbiBzaGVldCB0aWxlcy5cbiAgICAgICAgPC9wPlxuICAqIFxuICAqIERvY3MgYXQgVGVycmFmb3JtIFJlZ2lzdHJ5OiB7QGxpbmsgaHR0cHM6Ly93d3cudGVycmFmb3JtLmlvL2RvY3MvcHJvdmlkZXJzL2F3c2NjL3IvcXVpY2tzaWdodF90aGVtZS5odG1sI3Nob3cgUXVpY2tzaWdodFRoZW1lI3Nob3d9XG4gICovXG4gIHJlYWRvbmx5IHNob3c/OiBib29sZWFuIHwgY2RrdGYuSVJlc29sdmFibGU7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBxdWlja3NpZ2h0VGhlbWVDb25maWd1cmF0aW9uU2hlZXRUaWxlTGF5b3V0R3V0dGVyVG9UZXJyYWZvcm0oc3RydWN0PzogUXVpY2tzaWdodFRoZW1lQ29uZmlndXJhdGlvblNoZWV0VGlsZUxheW91dEd1dHRlcik6IGFueSB7XG4gIGlmICghY2RrdGYuY2FuSW5zcGVjdChzdHJ1Y3QpKSB7IHJldHVybiBzdHJ1Y3Q7IH1cbiAgcmV0dXJuIHtcbiAgICBzaG93OiBjZGt0Zi5ib29sZWFuVG9UZXJyYWZvcm0oc3RydWN0IS5zaG93KSxcbiAgfVxufVxuXG5leHBvcnQgaW50ZXJmYWNlIFF1aWNrc2lnaHRUaGVtZUNvbmZpZ3VyYXRpb25TaGVldFRpbGVMYXlvdXRNYXJnaW4ge1xuICAvKipcbiAgKiA8cD5UaGlzIEJvb2xlYW4gdmFsdWUgY29udHJvbHMgd2hldGhlciB0byBkaXNwbGF5IHNoZWV0IG1hcmdpbnMuPC9wPlxuICAqIFxuICAqIERvY3MgYXQgVGVycmFmb3JtIFJlZ2lzdHJ5OiB7QGxpbmsgaHR0cHM6Ly93d3cudGVycmFmb3JtLmlvL2RvY3MvcHJvdmlkZXJzL2F3c2NjL3IvcXVpY2tzaWdodF90aGVtZS5odG1sI3Nob3cgUXVpY2tzaWdodFRoZW1lI3Nob3d9XG4gICovXG4gIHJlYWRvbmx5IHNob3c/OiBib29sZWFuIHwgY2RrdGYuSVJlc29sdmFibGU7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBxdWlja3NpZ2h0VGhlbWVDb25maWd1cmF0aW9uU2hlZXRUaWxlTGF5b3V0TWFyZ2luVG9UZXJyYWZvcm0oc3RydWN0PzogUXVpY2tzaWdodFRoZW1lQ29uZmlndXJhdGlvblNoZWV0VGlsZUxheW91dE1hcmdpbik6IGFueSB7XG4gIGlmICghY2RrdGYuY2FuSW5zcGVjdChzdHJ1Y3QpKSB7IHJldHVybiBzdHJ1Y3Q7IH1cbiAgcmV0dXJuIHtcbiAgICBzaG93OiBjZGt0Zi5ib29sZWFuVG9UZXJyYWZvcm0oc3RydWN0IS5zaG93KSxcbiAgfVxufVxuXG5leHBvcnQgaW50ZXJmYWNlIFF1aWNrc2lnaHRUaGVtZUNvbmZpZ3VyYXRpb25TaGVldFRpbGVMYXlvdXQge1xuICAvKipcbiAgKiA8cD5UaGUgZGlzcGxheSBvcHRpb25zIGZvciBndXR0ZXIgc3BhY2luZyBiZXR3ZWVuIHRpbGVzIG9uIGEgc2hlZXQuPC9wPlxuICAqIFxuICAqIERvY3MgYXQgVGVycmFmb3JtIFJlZ2lzdHJ5OiB7QGxpbmsgaHR0cHM6Ly93d3cudGVycmFmb3JtLmlvL2RvY3MvcHJvdmlkZXJzL2F3c2NjL3IvcXVpY2tzaWdodF90aGVtZS5odG1sI2d1dHRlciBRdWlja3NpZ2h0VGhlbWUjZ3V0dGVyfVxuICAqL1xuICByZWFkb25seSBndXR0ZXI/OiBRdWlja3NpZ2h0VGhlbWVDb25maWd1cmF0aW9uU2hlZXRUaWxlTGF5b3V0R3V0dGVyO1xuICAvKipcbiAgKiA8cD5UaGUgZGlzcGxheSBvcHRpb25zIGZvciBtYXJnaW5zIGFyb3VuZCB0aGUgb3V0c2lkZSBlZGdlIG9mIHNoZWV0cy48L3A+XG4gICogXG4gICogRG9jcyBhdCBUZXJyYWZvcm0gUmVnaXN0cnk6IHtAbGluayBodHRwczovL3d3dy50ZXJyYWZvcm0uaW8vZG9jcy9wcm92aWRlcnMvYXdzY2Mvci9xdWlja3NpZ2h0X3RoZW1lLmh0bWwjbWFyZ2luIFF1aWNrc2lnaHRUaGVtZSNtYXJnaW59XG4gICovXG4gIHJlYWRvbmx5IG1hcmdpbj86IFF1aWNrc2lnaHRUaGVtZUNvbmZpZ3VyYXRpb25TaGVldFRpbGVMYXlvdXRNYXJnaW47XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBxdWlja3NpZ2h0VGhlbWVDb25maWd1cmF0aW9uU2hlZXRUaWxlTGF5b3V0VG9UZXJyYWZvcm0oc3RydWN0PzogUXVpY2tzaWdodFRoZW1lQ29uZmlndXJhdGlvblNoZWV0VGlsZUxheW91dCk6IGFueSB7XG4gIGlmICghY2RrdGYuY2FuSW5zcGVjdChzdHJ1Y3QpKSB7IHJldHVybiBzdHJ1Y3Q7IH1cbiAgcmV0dXJuIHtcbiAgICBndXR0ZXI6IHF1aWNrc2lnaHRUaGVtZUNvbmZpZ3VyYXRpb25TaGVldFRpbGVMYXlvdXRHdXR0ZXJUb1RlcnJhZm9ybShzdHJ1Y3QhLmd1dHRlciksXG4gICAgbWFyZ2luOiBxdWlja3NpZ2h0VGhlbWVDb25maWd1cmF0aW9uU2hlZXRUaWxlTGF5b3V0TWFyZ2luVG9UZXJyYWZvcm0oc3RydWN0IS5tYXJnaW4pLFxuICB9XG59XG5cbmV4cG9ydCBpbnRlcmZhY2UgUXVpY2tzaWdodFRoZW1lQ29uZmlndXJhdGlvblNoZWV0IHtcbiAgLyoqXG4gICogPHA+RGlzcGxheSBvcHRpb25zIHJlbGF0ZWQgdG8gdGlsZXMgb24gYSBzaGVldC48L3A+XG4gICogXG4gICogRG9jcyBhdCBUZXJyYWZvcm0gUmVnaXN0cnk6IHtAbGluayBodHRwczovL3d3dy50ZXJyYWZvcm0uaW8vZG9jcy9wcm92aWRlcnMvYXdzY2Mvci9xdWlja3NpZ2h0X3RoZW1lLmh0bWwjdGlsZSBRdWlja3NpZ2h0VGhlbWUjdGlsZX1cbiAgKi9cbiAgcmVhZG9ubHkgdGlsZT86IFF1aWNrc2lnaHRUaGVtZUNvbmZpZ3VyYXRpb25TaGVldFRpbGU7XG4gIC8qKlxuICAqIDxwPlRoZSBkaXNwbGF5IG9wdGlvbnMgZm9yIHRoZSBsYXlvdXQgb2YgdGlsZXMgb24gYSBzaGVldC48L3A+XG4gICogXG4gICogRG9jcyBhdCBUZXJyYWZvcm0gUmVnaXN0cnk6IHtAbGluayBodHRwczovL3d3dy50ZXJyYWZvcm0uaW8vZG9jcy9wcm92aWRlcnMvYXdzY2Mvci9xdWlja3NpZ2h0X3RoZW1lLmh0bWwjdGlsZV9sYXlvdXQgUXVpY2tzaWdodFRoZW1lI3RpbGVfbGF5b3V0fVxuICAqL1xuICByZWFkb25seSB0aWxlTGF5b3V0PzogUXVpY2tzaWdodFRoZW1lQ29uZmlndXJhdGlvblNoZWV0VGlsZUxheW91dDtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIHF1aWNrc2lnaHRUaGVtZUNvbmZpZ3VyYXRpb25TaGVldFRvVGVycmFmb3JtKHN0cnVjdD86IFF1aWNrc2lnaHRUaGVtZUNvbmZpZ3VyYXRpb25TaGVldCk6IGFueSB7XG4gIGlmICghY2RrdGYuY2FuSW5zcGVjdChzdHJ1Y3QpKSB7IHJldHVybiBzdHJ1Y3Q7IH1cbiAgcmV0dXJuIHtcbiAgICB0aWxlOiBxdWlja3NpZ2h0VGhlbWVDb25maWd1cmF0aW9uU2hlZXRUaWxlVG9UZXJyYWZvcm0oc3RydWN0IS50aWxlKSxcbiAgICB0aWxlX2xheW91dDogcXVpY2tzaWdodFRoZW1lQ29uZmlndXJhdGlvblNoZWV0VGlsZUxheW91dFRvVGVycmFmb3JtKHN0cnVjdCEudGlsZUxheW91dCksXG4gIH1cbn1cblxuZXhwb3J0IGludGVyZmFjZSBRdWlja3NpZ2h0VGhlbWVDb25maWd1cmF0aW9uVHlwb2dyYXBoeUZvbnRGYW1pbGllcyB7XG4gIC8qKlxuICAqIERvY3MgYXQgVGVycmFmb3JtIFJlZ2lzdHJ5OiB7QGxpbmsgaHR0cHM6Ly93d3cudGVycmFmb3JtLmlvL2RvY3MvcHJvdmlkZXJzL2F3c2NjL3IvcXVpY2tzaWdodF90aGVtZS5odG1sI2ZvbnRfZmFtaWx5IFF1aWNrc2lnaHRUaGVtZSNmb250X2ZhbWlseX1cbiAgKi9cbiAgcmVhZG9ubHkgZm9udEZhbWlseT86IHN0cmluZztcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIHF1aWNrc2lnaHRUaGVtZUNvbmZpZ3VyYXRpb25UeXBvZ3JhcGh5Rm9udEZhbWlsaWVzVG9UZXJyYWZvcm0oc3RydWN0PzogUXVpY2tzaWdodFRoZW1lQ29uZmlndXJhdGlvblR5cG9ncmFwaHlGb250RmFtaWxpZXMpOiBhbnkge1xuICBpZiAoIWNka3RmLmNhbkluc3BlY3Qoc3RydWN0KSkgeyByZXR1cm4gc3RydWN0OyB9XG4gIHJldHVybiB7XG4gICAgZm9udF9mYW1pbHk6IGNka3RmLnN0cmluZ1RvVGVycmFmb3JtKHN0cnVjdCEuZm9udEZhbWlseSksXG4gIH1cbn1cblxuZXhwb3J0IGludGVyZmFjZSBRdWlja3NpZ2h0VGhlbWVDb25maWd1cmF0aW9uVHlwb2dyYXBoeSB7XG4gIC8qKlxuICAqIERvY3MgYXQgVGVycmFmb3JtIFJlZ2lzdHJ5OiB7QGxpbmsgaHR0cHM6Ly93d3cudGVycmFmb3JtLmlvL2RvY3MvcHJvdmlkZXJzL2F3c2NjL3IvcXVpY2tzaWdodF90aGVtZS5odG1sI2ZvbnRfZmFtaWxpZXMgUXVpY2tzaWdodFRoZW1lI2ZvbnRfZmFtaWxpZXN9XG4gICovXG4gIHJlYWRvbmx5IGZvbnRGYW1pbGllcz86IFF1aWNrc2lnaHRUaGVtZUNvbmZpZ3VyYXRpb25UeXBvZ3JhcGh5Rm9udEZhbWlsaWVzW107XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBxdWlja3NpZ2h0VGhlbWVDb25maWd1cmF0aW9uVHlwb2dyYXBoeVRvVGVycmFmb3JtKHN0cnVjdD86IFF1aWNrc2lnaHRUaGVtZUNvbmZpZ3VyYXRpb25UeXBvZ3JhcGh5KTogYW55IHtcbiAgaWYgKCFjZGt0Zi5jYW5JbnNwZWN0KHN0cnVjdCkpIHsgcmV0dXJuIHN0cnVjdDsgfVxuICByZXR1cm4ge1xuICAgIGZvbnRfZmFtaWxpZXM6IGNka3RmLmxpc3RNYXBwZXIocXVpY2tzaWdodFRoZW1lQ29uZmlndXJhdGlvblR5cG9ncmFwaHlGb250RmFtaWxpZXNUb1RlcnJhZm9ybSkoc3RydWN0IS5mb250RmFtaWxpZXMpLFxuICB9XG59XG5cbmV4cG9ydCBpbnRlcmZhY2UgUXVpY2tzaWdodFRoZW1lQ29uZmlndXJhdGlvblVpQ29sb3JQYWxldHRlIHtcbiAgLyoqXG4gICogPHA+VGhpcyBjb2xvciBpcyB0aGF0IGFwcGxpZXMgdG8gc2VsZWN0ZWQgc3RhdGVzIGFuZCBidXR0b25zLjwvcD5cbiAgKiBcbiAgKiBEb2NzIGF0IFRlcnJhZm9ybSBSZWdpc3RyeToge0BsaW5rIGh0dHBzOi8vd3d3LnRlcnJhZm9ybS5pby9kb2NzL3Byb3ZpZGVycy9hd3NjYy9yL3F1aWNrc2lnaHRfdGhlbWUuaHRtbCNhY2NlbnQgUXVpY2tzaWdodFRoZW1lI2FjY2VudH1cbiAgKi9cbiAgcmVhZG9ubHkgYWNjZW50Pzogc3RyaW5nO1xuICAvKipcbiAgKiA8cD5UaGUgZm9yZWdyb3VuZCBjb2xvciB0aGF0IGFwcGxpZXMgdG8gYW55IHRleHQgb3Igb3RoZXIgZWxlbWVudHMgdGhhdCBhcHBlYXIgb3ZlciB0aGVcbiAgICAgICAgICAgIGFjY2VudCBjb2xvci48L3A+XG4gICogXG4gICogRG9jcyBhdCBUZXJyYWZvcm0gUmVnaXN0cnk6IHtAbGluayBodHRwczovL3d3dy50ZXJyYWZvcm0uaW8vZG9jcy9wcm92aWRlcnMvYXdzY2Mvci9xdWlja3NpZ2h0X3RoZW1lLmh0bWwjYWNjZW50X2ZvcmVncm91bmQgUXVpY2tzaWdodFRoZW1lI2FjY2VudF9mb3JlZ3JvdW5kfVxuICAqL1xuICByZWFkb25seSBhY2NlbnRGb3JlZ3JvdW5kPzogc3RyaW5nO1xuICAvKipcbiAgKiA8cD5UaGUgY29sb3IgdGhhdCBhcHBsaWVzIHRvIGVycm9yIG1lc3NhZ2VzLjwvcD5cbiAgKiBcbiAgKiBEb2NzIGF0IFRlcnJhZm9ybSBSZWdpc3RyeToge0BsaW5rIGh0dHBzOi8vd3d3LnRlcnJhZm9ybS5pby9kb2NzL3Byb3ZpZGVycy9hd3NjYy9yL3F1aWNrc2lnaHRfdGhlbWUuaHRtbCNkYW5nZXIgUXVpY2tzaWdodFRoZW1lI2Rhbmdlcn1cbiAgKi9cbiAgcmVhZG9ubHkgZGFuZ2VyPzogc3RyaW5nO1xuICAvKipcbiAgKiA8cD5UaGUgZm9yZWdyb3VuZCBjb2xvciB0aGF0IGFwcGxpZXMgdG8gYW55IHRleHQgb3Igb3RoZXIgZWxlbWVudHMgdGhhdCBhcHBlYXIgb3ZlciB0aGVcbiAgICAgICAgICAgIGVycm9yIGNvbG9yLjwvcD5cbiAgKiBcbiAgKiBEb2NzIGF0IFRlcnJhZm9ybSBSZWdpc3RyeToge0BsaW5rIGh0dHBzOi8vd3d3LnRlcnJhZm9ybS5pby9kb2NzL3Byb3ZpZGVycy9hd3NjYy9yL3F1aWNrc2lnaHRfdGhlbWUuaHRtbCNkYW5nZXJfZm9yZWdyb3VuZCBRdWlja3NpZ2h0VGhlbWUjZGFuZ2VyX2ZvcmVncm91bmR9XG4gICovXG4gIHJlYWRvbmx5IGRhbmdlckZvcmVncm91bmQ/OiBzdHJpbmc7XG4gIC8qKlxuICAqIDxwPlRoZSBjb2xvciB0aGF0IGFwcGxpZXMgdG8gdGhlIG5hbWVzIG9mIGZpZWxkcyB0aGF0IGFyZSBpZGVudGlmaWVkIGFzXG4gICAgICAgICAgICBkaW1lbnNpb25zLjwvcD5cbiAgKiBcbiAgKiBEb2NzIGF0IFRlcnJhZm9ybSBSZWdpc3RyeToge0BsaW5rIGh0dHBzOi8vd3d3LnRlcnJhZm9ybS5pby9kb2NzL3Byb3ZpZGVycy9hd3NjYy9yL3F1aWNrc2lnaHRfdGhlbWUuaHRtbCNkaW1lbnNpb24gUXVpY2tzaWdodFRoZW1lI2RpbWVuc2lvbn1cbiAgKi9cbiAgcmVhZG9ubHkgZGltZW5zaW9uPzogc3RyaW5nO1xuICAvKipcbiAgKiA8cD5UaGUgZm9yZWdyb3VuZCBjb2xvciB0aGF0IGFwcGxpZXMgdG8gYW55IHRleHQgb3Igb3RoZXIgZWxlbWVudHMgdGhhdCBhcHBlYXIgb3ZlciB0aGVcbiAgICAgICAgICAgIGRpbWVuc2lvbiBjb2xvci48L3A+XG4gICogXG4gICogRG9jcyBhdCBUZXJyYWZvcm0gUmVnaXN0cnk6IHtAbGluayBodHRwczovL3d3dy50ZXJyYWZvcm0uaW8vZG9jcy9wcm92aWRlcnMvYXdzY2Mvci9xdWlja3NpZ2h0X3RoZW1lLmh0bWwjZGltZW5zaW9uX2ZvcmVncm91bmQgUXVpY2tzaWdodFRoZW1lI2RpbWVuc2lvbl9mb3JlZ3JvdW5kfVxuICAqL1xuICByZWFkb25seSBkaW1lbnNpb25Gb3JlZ3JvdW5kPzogc3RyaW5nO1xuICAvKipcbiAgKiA8cD5UaGUgY29sb3IgdGhhdCBhcHBsaWVzIHRvIHRoZSBuYW1lcyBvZiBmaWVsZHMgdGhhdCBhcmUgaWRlbnRpZmllZCBhcyBtZWFzdXJlcy48L3A+XG4gICogXG4gICogRG9jcyBhdCBUZXJyYWZvcm0gUmVnaXN0cnk6IHtAbGluayBodHRwczovL3d3dy50ZXJyYWZvcm0uaW8vZG9jcy9wcm92aWRlcnMvYXdzY2Mvci9xdWlja3NpZ2h0X3RoZW1lLmh0bWwjbWVhc3VyZSBRdWlja3NpZ2h0VGhlbWUjbWVhc3VyZX1cbiAgKi9cbiAgcmVhZG9ubHkgbWVhc3VyZT86IHN0cmluZztcbiAgLyoqXG4gICogPHA+VGhlIGZvcmVncm91bmQgY29sb3IgdGhhdCBhcHBsaWVzIHRvIGFueSB0ZXh0IG9yIG90aGVyIGVsZW1lbnRzIHRoYXQgYXBwZWFyIG92ZXIgdGhlXG4gICAgICAgICAgICBtZWFzdXJlIGNvbG9yLjwvcD5cbiAgKiBcbiAgKiBEb2NzIGF0IFRlcnJhZm9ybSBSZWdpc3RyeToge0BsaW5rIGh0dHBzOi8vd3d3LnRlcnJhZm9ybS5pby9kb2NzL3Byb3ZpZGVycy9hd3NjYy9yL3F1aWNrc2lnaHRfdGhlbWUuaHRtbCNtZWFzdXJlX2ZvcmVncm91bmQgUXVpY2tzaWdodFRoZW1lI21lYXN1cmVfZm9yZWdyb3VuZH1cbiAgKi9cbiAgcmVhZG9ubHkgbWVhc3VyZUZvcmVncm91bmQ/OiBzdHJpbmc7XG4gIC8qKlxuICAqIDxwPlRoZSBiYWNrZ3JvdW5kIGNvbG9yIHRoYXQgYXBwbGllcyB0byB2aXN1YWxzIGFuZCBvdGhlciBoaWdoIGVtcGhhc2lzIFVJLjwvcD5cbiAgKiBcbiAgKiBEb2NzIGF0IFRlcnJhZm9ybSBSZWdpc3RyeToge0BsaW5rIGh0dHBzOi8vd3d3LnRlcnJhZm9ybS5pby9kb2NzL3Byb3ZpZGVycy9hd3NjYy9yL3F1aWNrc2lnaHRfdGhlbWUuaHRtbCNwcmltYXJ5X2JhY2tncm91bmQgUXVpY2tzaWdodFRoZW1lI3ByaW1hcnlfYmFja2dyb3VuZH1cbiAgKi9cbiAgcmVhZG9ubHkgcHJpbWFyeUJhY2tncm91bmQ/OiBzdHJpbmc7XG4gIC8qKlxuICAqIDxwPlRoZSBjb2xvciBvZiB0ZXh0IGFuZCBvdGhlciBmb3JlZ3JvdW5kIGVsZW1lbnRzIHRoYXQgYXBwZWFyIG92ZXIgdGhlIHByaW1hcnlcbiAgICAgICAgICAgIGJhY2tncm91bmQgcmVnaW9ucywgc3VjaCBhcyBncmlkIGxpbmVzLCBib3JkZXJzLCB0YWJsZSBiYW5kaW5nLCBpY29ucywgYW5kIHNvIG9uLjwvcD5cbiAgKiBcbiAgKiBEb2NzIGF0IFRlcnJhZm9ybSBSZWdpc3RyeToge0BsaW5rIGh0dHBzOi8vd3d3LnRlcnJhZm9ybS5pby9kb2NzL3Byb3ZpZGVycy9hd3NjYy9yL3F1aWNrc2lnaHRfdGhlbWUuaHRtbCNwcmltYXJ5X2ZvcmVncm91bmQgUXVpY2tzaWdodFRoZW1lI3ByaW1hcnlfZm9yZWdyb3VuZH1cbiAgKi9cbiAgcmVhZG9ubHkgcHJpbWFyeUZvcmVncm91bmQ/OiBzdHJpbmc7XG4gIC8qKlxuICAqIDxwPlRoZSBiYWNrZ3JvdW5kIGNvbG9yIHRoYXQgYXBwbGllcyB0byB0aGUgc2hlZXQgYmFja2dyb3VuZCBhbmQgc2hlZXQgY29udHJvbHMuPC9wPlxuICAqIFxuICAqIERvY3MgYXQgVGVycmFmb3JtIFJlZ2lzdHJ5OiB7QGxpbmsgaHR0cHM6Ly93d3cudGVycmFmb3JtLmlvL2RvY3MvcHJvdmlkZXJzL2F3c2NjL3IvcXVpY2tzaWdodF90aGVtZS5odG1sI3NlY29uZGFyeV9iYWNrZ3JvdW5kIFF1aWNrc2lnaHRUaGVtZSNzZWNvbmRhcnlfYmFja2dyb3VuZH1cbiAgKi9cbiAgcmVhZG9ubHkgc2Vjb25kYXJ5QmFja2dyb3VuZD86IHN0cmluZztcbiAgLyoqXG4gICogPHA+VGhlIGZvcmVncm91bmQgY29sb3IgdGhhdCBhcHBsaWVzIHRvIGFueSBzaGVldCB0aXRsZSwgc2hlZXQgY29udHJvbCB0ZXh0LCBvciBVSSB0aGF0XG4gICAgICAgICAgICBhcHBlYXJzIG92ZXIgdGhlIHNlY29uZGFyeSBiYWNrZ3JvdW5kLjwvcD5cbiAgKiBcbiAgKiBEb2NzIGF0IFRlcnJhZm9ybSBSZWdpc3RyeToge0BsaW5rIGh0dHBzOi8vd3d3LnRlcnJhZm9ybS5pby9kb2NzL3Byb3ZpZGVycy9hd3NjYy9yL3F1aWNrc2lnaHRfdGhlbWUuaHRtbCNzZWNvbmRhcnlfZm9yZWdyb3VuZCBRdWlja3NpZ2h0VGhlbWUjc2Vjb25kYXJ5X2ZvcmVncm91bmR9XG4gICovXG4gIHJlYWRvbmx5IHNlY29uZGFyeUZvcmVncm91bmQ/OiBzdHJpbmc7XG4gIC8qKlxuICAqIDxwPlRoZSBjb2xvciB0aGF0IGFwcGxpZXMgdG8gc3VjY2VzcyBtZXNzYWdlcywgZm9yIGV4YW1wbGUgdGhlIGNoZWNrIG1hcmsgZm9yIGFcbiAgICAgICAgICAgIHN1Y2Nlc3NmdWwgZG93bmxvYWQuPC9wPlxuICAqIFxuICAqIERvY3MgYXQgVGVycmFmb3JtIFJlZ2lzdHJ5OiB7QGxpbmsgaHR0cHM6Ly93d3cudGVycmFmb3JtLmlvL2RvY3MvcHJvdmlkZXJzL2F3c2NjL3IvcXVpY2tzaWdodF90aGVtZS5odG1sI3N1Y2Nlc3MgUXVpY2tzaWdodFRoZW1lI3N1Y2Nlc3N9XG4gICovXG4gIHJlYWRvbmx5IHN1Y2Nlc3M/OiBzdHJpbmc7XG4gIC8qKlxuICAqIDxwPlRoZSBmb3JlZ3JvdW5kIGNvbG9yIHRoYXQgYXBwbGllcyB0byBhbnkgdGV4dCBvciBvdGhlciBlbGVtZW50cyB0aGF0IGFwcGVhciBvdmVyIHRoZVxuICAgICAgICAgICAgc3VjY2VzcyBjb2xvci48L3A+XG4gICogXG4gICogRG9jcyBhdCBUZXJyYWZvcm0gUmVnaXN0cnk6IHtAbGluayBodHRwczovL3d3dy50ZXJyYWZvcm0uaW8vZG9jcy9wcm92aWRlcnMvYXdzY2Mvci9xdWlja3NpZ2h0X3RoZW1lLmh0bWwjc3VjY2Vzc19mb3JlZ3JvdW5kIFF1aWNrc2lnaHRUaGVtZSNzdWNjZXNzX2ZvcmVncm91bmR9XG4gICovXG4gIHJlYWRvbmx5IHN1Y2Nlc3NGb3JlZ3JvdW5kPzogc3RyaW5nO1xuICAvKipcbiAgKiA8cD5UaGlzIGNvbG9yIHRoYXQgYXBwbGllcyB0byB3YXJuaW5nIGFuZCBpbmZvcm1hdGlvbmFsIG1lc3NhZ2VzLjwvcD5cbiAgKiBcbiAgKiBEb2NzIGF0IFRlcnJhZm9ybSBSZWdpc3RyeToge0BsaW5rIGh0dHBzOi8vd3d3LnRlcnJhZm9ybS5pby9kb2NzL3Byb3ZpZGVycy9hd3NjYy9yL3F1aWNrc2lnaHRfdGhlbWUuaHRtbCN3YXJuaW5nIFF1aWNrc2lnaHRUaGVtZSN3YXJuaW5nfVxuICAqL1xuICByZWFkb25seSB3YXJuaW5nPzogc3RyaW5nO1xuICAvKipcbiAgKiA8cD5UaGUgZm9yZWdyb3VuZCBjb2xvciB0aGF0IGFwcGxpZXMgdG8gYW55IHRleHQgb3Igb3RoZXIgZWxlbWVudHMgdGhhdCBhcHBlYXIgb3ZlciB0aGVcbiAgICAgICAgICAgIHdhcm5pbmcgY29sb3IuPC9wPlxuICAqIFxuICAqIERvY3MgYXQgVGVycmFmb3JtIFJlZ2lzdHJ5OiB7QGxpbmsgaHR0cHM6Ly93d3cudGVycmFmb3JtLmlvL2RvY3MvcHJvdmlkZXJzL2F3c2NjL3IvcXVpY2tzaWdodF90aGVtZS5odG1sI3dhcm5pbmdfZm9yZWdyb3VuZCBRdWlja3NpZ2h0VGhlbWUjd2FybmluZ19mb3JlZ3JvdW5kfVxuICAqL1xuICByZWFkb25seSB3YXJuaW5nRm9yZWdyb3VuZD86IHN0cmluZztcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIHF1aWNrc2lnaHRUaGVtZUNvbmZpZ3VyYXRpb25VaUNvbG9yUGFsZXR0ZVRvVGVycmFmb3JtKHN0cnVjdD86IFF1aWNrc2lnaHRUaGVtZUNvbmZpZ3VyYXRpb25VaUNvbG9yUGFsZXR0ZSk6IGFueSB7XG4gIGlmICghY2RrdGYuY2FuSW5zcGVjdChzdHJ1Y3QpKSB7IHJldHVybiBzdHJ1Y3Q7IH1cbiAgcmV0dXJuIHtcbiAgICBhY2NlbnQ6IGNka3RmLnN0cmluZ1RvVGVycmFmb3JtKHN0cnVjdCEuYWNjZW50KSxcbiAgICBhY2NlbnRfZm9yZWdyb3VuZDogY2RrdGYuc3RyaW5nVG9UZXJyYWZvcm0oc3RydWN0IS5hY2NlbnRGb3JlZ3JvdW5kKSxcbiAgICBkYW5nZXI6IGNka3RmLnN0cmluZ1RvVGVycmFmb3JtKHN0cnVjdCEuZGFuZ2VyKSxcbiAgICBkYW5nZXJfZm9yZWdyb3VuZDogY2RrdGYuc3RyaW5nVG9UZXJyYWZvcm0oc3RydWN0IS5kYW5nZXJGb3JlZ3JvdW5kKSxcbiAgICBkaW1lbnNpb246IGNka3RmLnN0cmluZ1RvVGVycmFmb3JtKHN0cnVjdCEuZGltZW5zaW9uKSxcbiAgICBkaW1lbnNpb25fZm9yZWdyb3VuZDogY2RrdGYuc3RyaW5nVG9UZXJyYWZvcm0oc3RydWN0IS5kaW1lbnNpb25Gb3JlZ3JvdW5kKSxcbiAgICBtZWFzdXJlOiBjZGt0Zi5zdHJpbmdUb1RlcnJhZm9ybShzdHJ1Y3QhLm1lYXN1cmUpLFxuICAgIG1lYXN1cmVfZm9yZWdyb3VuZDogY2RrdGYuc3RyaW5nVG9UZXJyYWZvcm0oc3RydWN0IS5tZWFzdXJlRm9yZWdyb3VuZCksXG4gICAgcHJpbWFyeV9iYWNrZ3JvdW5kOiBjZGt0Zi5zdHJpbmdUb1RlcnJhZm9ybShzdHJ1Y3QhLnByaW1hcnlCYWNrZ3JvdW5kKSxcbiAgICBwcmltYXJ5X2ZvcmVncm91bmQ6IGNka3RmLnN0cmluZ1RvVGVycmFmb3JtKHN0cnVjdCEucHJpbWFyeUZvcmVncm91bmQpLFxuICAgIHNlY29uZGFyeV9iYWNrZ3JvdW5kOiBjZGt0Zi5zdHJpbmdUb1RlcnJhZm9ybShzdHJ1Y3QhLnNlY29uZGFyeUJhY2tncm91bmQpLFxuICAgIHNlY29uZGFyeV9mb3JlZ3JvdW5kOiBjZGt0Zi5zdHJpbmdUb1RlcnJhZm9ybShzdHJ1Y3QhLnNlY29uZGFyeUZvcmVncm91bmQpLFxuICAgIHN1Y2Nlc3M6IGNka3RmLnN0cmluZ1RvVGVycmFmb3JtKHN0cnVjdCEuc3VjY2VzcyksXG4gICAgc3VjY2Vzc19mb3JlZ3JvdW5kOiBjZGt0Zi5zdHJpbmdUb1RlcnJhZm9ybShzdHJ1Y3QhLnN1Y2Nlc3NGb3JlZ3JvdW5kKSxcbiAgICB3YXJuaW5nOiBjZGt0Zi5zdHJpbmdUb1RlcnJhZm9ybShzdHJ1Y3QhLndhcm5pbmcpLFxuICAgIHdhcm5pbmdfZm9yZWdyb3VuZDogY2RrdGYuc3RyaW5nVG9UZXJyYWZvcm0oc3RydWN0IS53YXJuaW5nRm9yZWdyb3VuZCksXG4gIH1cbn1cblxuZXhwb3J0IGludGVyZmFjZSBRdWlja3NpZ2h0VGhlbWVDb25maWd1cmF0aW9uIHtcbiAgLyoqXG4gICogPHA+VGhlIHRoZW1lIGNvbG9ycyB0aGF0IGFyZSB1c2VkIGZvciBkYXRhIGNvbG9ycyBpbiBjaGFydHMuIFRoZSBjb2xvcnMgZGVzY3JpcHRpb24gaXMgYVxuICAgICAgICAgICAgaGV4YWRlY2ltYWwgY29sb3IgY29kZSB0aGF0IGNvbnNpc3RzIG9mIHNpeCBhbHBoYW51bWVyaWNhbCBjaGFyYWN0ZXJzLCBwcmVmaXhlZCB3aXRoXG4gICAgICAgICAgICAgICAgPGNvZGU+IzwvY29kZT4sIGZvciBleGFtcGxlICMzN0JGRjUuIDwvcD5cbiAgKiBcbiAgKiBEb2NzIGF0IFRlcnJhZm9ybSBSZWdpc3RyeToge0BsaW5rIGh0dHBzOi8vd3d3LnRlcnJhZm9ybS5pby9kb2NzL3Byb3ZpZGVycy9hd3NjYy9yL3F1aWNrc2lnaHRfdGhlbWUuaHRtbCNkYXRhX2NvbG9yX3BhbGV0dGUgUXVpY2tzaWdodFRoZW1lI2RhdGFfY29sb3JfcGFsZXR0ZX1cbiAgKi9cbiAgcmVhZG9ubHkgZGF0YUNvbG9yUGFsZXR0ZT86IFF1aWNrc2lnaHRUaGVtZUNvbmZpZ3VyYXRpb25EYXRhQ29sb3JQYWxldHRlO1xuICAvKipcbiAgKiA8cD5UaGUgdGhlbWUgZGlzcGxheSBvcHRpb25zIGZvciBzaGVldHMuIDwvcD5cbiAgKiBcbiAgKiBEb2NzIGF0IFRlcnJhZm9ybSBSZWdpc3RyeToge0BsaW5rIGh0dHBzOi8vd3d3LnRlcnJhZm9ybS5pby9kb2NzL3Byb3ZpZGVycy9hd3NjYy9yL3F1aWNrc2lnaHRfdGhlbWUuaHRtbCNzaGVldCBRdWlja3NpZ2h0VGhlbWUjc2hlZXR9XG4gICovXG4gIHJlYWRvbmx5IHNoZWV0PzogUXVpY2tzaWdodFRoZW1lQ29uZmlndXJhdGlvblNoZWV0O1xuICAvKipcbiAgKiBEb2NzIGF0IFRlcnJhZm9ybSBSZWdpc3RyeToge0BsaW5rIGh0dHBzOi8vd3d3LnRlcnJhZm9ybS5pby9kb2NzL3Byb3ZpZGVycy9hd3NjYy9yL3F1aWNrc2lnaHRfdGhlbWUuaHRtbCN0eXBvZ3JhcGh5IFF1aWNrc2lnaHRUaGVtZSN0eXBvZ3JhcGh5fVxuICAqL1xuICByZWFkb25seSB0eXBvZ3JhcGh5PzogUXVpY2tzaWdodFRoZW1lQ29uZmlndXJhdGlvblR5cG9ncmFwaHk7XG4gIC8qKlxuICAqIDxwPlRoZSB0aGVtZSBjb2xvcnMgdGhhdCBhcHBseSB0byBVSSBhbmQgdG8gY2hhcnRzLCBleGNsdWRpbmcgZGF0YSBjb2xvcnMuIFRoZSBjb2xvcnNcbiAgICAgICAgICAgIGRlc2NyaXB0aW9uIGlzIGEgaGV4YWRlY2ltYWwgY29sb3IgY29kZSB0aGF0IGNvbnNpc3RzIG9mIHNpeCBhbHBoYW51bWVyaWNhbCBjaGFyYWN0ZXJzLFxuICAgICAgICAgICAgcHJlZml4ZWQgd2l0aCA8Y29kZT4jPC9jb2RlPiwgZm9yIGV4YW1wbGUgIzM3QkZGNS4gRm9yIG1vcmUgaW5mb3JtYXRpb24sIHNlZSA8YSBocmVmPVwiaHR0cHM6Ly9kb2NzLmF3cy5hbWF6b24uY29tL3F1aWNrc2lnaHQvbGF0ZXN0L3VzZXIvdGhlbWVzLWluLXF1aWNrc2lnaHQuaHRtbFwiPlVzaW5nIFRoZW1lcyBpbiBBbWF6b24gUXVpY2tTaWdodDwvYT4gaW4gdGhlIDxpPkFtYXpvbiBRdWlja1NpZ2h0IFVzZXJcbiAgICAgICAgICAgICAgICBHdWlkZS48L2k+XG4gICAgICAgIDwvcD5cbiAgKiBcbiAgKiBEb2NzIGF0IFRlcnJhZm9ybSBSZWdpc3RyeToge0BsaW5rIGh0dHBzOi8vd3d3LnRlcnJhZm9ybS5pby9kb2NzL3Byb3ZpZGVycy9hd3NjYy9yL3F1aWNrc2lnaHRfdGhlbWUuaHRtbCN1aV9jb2xvcl9wYWxldHRlIFF1aWNrc2lnaHRUaGVtZSN1aV9jb2xvcl9wYWxldHRlfVxuICAqL1xuICByZWFkb25seSB1aUNvbG9yUGFsZXR0ZT86IFF1aWNrc2lnaHRUaGVtZUNvbmZpZ3VyYXRpb25VaUNvbG9yUGFsZXR0ZTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIHF1aWNrc2lnaHRUaGVtZUNvbmZpZ3VyYXRpb25Ub1RlcnJhZm9ybShzdHJ1Y3Q/OiBRdWlja3NpZ2h0VGhlbWVDb25maWd1cmF0aW9uKTogYW55IHtcbiAgaWYgKCFjZGt0Zi5jYW5JbnNwZWN0KHN0cnVjdCkpIHsgcmV0dXJuIHN0cnVjdDsgfVxuICByZXR1cm4ge1xuICAgIGRhdGFfY29sb3JfcGFsZXR0ZTogcXVpY2tzaWdodFRoZW1lQ29uZmlndXJhdGlvbkRhdGFDb2xvclBhbGV0dGVUb1RlcnJhZm9ybShzdHJ1Y3QhLmRhdGFDb2xvclBhbGV0dGUpLFxuICAgIHNoZWV0OiBxdWlja3NpZ2h0VGhlbWVDb25maWd1cmF0aW9uU2hlZXRUb1RlcnJhZm9ybShzdHJ1Y3QhLnNoZWV0KSxcbiAgICB0eXBvZ3JhcGh5OiBxdWlja3NpZ2h0VGhlbWVDb25maWd1cmF0aW9uVHlwb2dyYXBoeVRvVGVycmFmb3JtKHN0cnVjdCEudHlwb2dyYXBoeSksXG4gICAgdWlfY29sb3JfcGFsZXR0ZTogcXVpY2tzaWdodFRoZW1lQ29uZmlndXJhdGlvblVpQ29sb3JQYWxldHRlVG9UZXJyYWZvcm0oc3RydWN0IS51aUNvbG9yUGFsZXR0ZSksXG4gIH1cbn1cblxuZXhwb3J0IGludGVyZmFjZSBRdWlja3NpZ2h0VGhlbWVQZXJtaXNzaW9ucyB7XG4gIC8qKlxuICAqIDxwPlRoZSBJQU0gYWN0aW9uIHRvIGdyYW50IG9yIHJldm9rZSBwZXJtaXNzaW9ucyBvbi48L3A+XG4gICogXG4gICogRG9jcyBhdCBUZXJyYWZvcm0gUmVnaXN0cnk6IHtAbGluayBodHRwczovL3d3dy50ZXJyYWZvcm0uaW8vZG9jcy9wcm92aWRlcnMvYXdzY2Mvci9xdWlja3NpZ2h0X3RoZW1lLmh0bWwjYWN0aW9ucyBRdWlja3NpZ2h0VGhlbWUjYWN0aW9uc31cbiAgKi9cbiAgcmVhZG9ubHkgYWN0aW9uczogc3RyaW5nW107XG4gIC8qKlxuICAqIDxwPlRoZSBBbWF6b24gUmVzb3VyY2UgTmFtZSAoQVJOKSBvZiB0aGUgcHJpbmNpcGFsLiBUaGlzIGNhbiBiZSBvbmUgb2YgdGhlXG4gICAgICAgICAgICBmb2xsb3dpbmc6PC9wPlxuICAgICAgICA8dWw+XG4gICAgICAgICAgICA8bGk+XG4gICAgICAgICAgICAgICAgPHA+VGhlIEFSTiBvZiBhbiBBbWF6b24gUXVpY2tTaWdodCB1c2VyIG9yIGdyb3VwIGFzc29jaWF0ZWQgd2l0aCBhIGRhdGEgc291cmNlIG9yIGRhdGFzZXQuIChUaGlzIGlzIGNvbW1vbi4pPC9wPlxuICAgICAgICAgICAgPC9saT5cbiAgICAgICAgICAgIDxsaT5cbiAgICAgICAgICAgICAgICA8cD5UaGUgQVJOIG9mIGFuIEFtYXpvbiBRdWlja1NpZ2h0IHVzZXIsIGdyb3VwLCBvciBuYW1lc3BhY2UgYXNzb2NpYXRlZCB3aXRoIGFuIGFuYWx5c2lzLCBkYXNoYm9hcmQsIHRlbXBsYXRlLCBvciB0aGVtZS4gKFRoaXMgaXMgY29tbW9uLik8L3A+XG4gICAgICAgICAgICA8L2xpPlxuICAgICAgICAgICAgPGxpPlxuICAgICAgICAgICAgICAgIDxwPlRoZSBBUk4gb2YgYW4gQVdTIGFjY291bnQgcm9vdDogVGhpcyBpcyBhbiBJQU0gQVJOIHJhdGhlciB0aGFuIGEgUXVpY2tTaWdodFxuICAgICAgICAgICAgICAgICAgICBBUk4uIFVzZSB0aGlzIG9wdGlvbiBvbmx5IHRvIHNoYXJlIHJlc291cmNlcyAodGVtcGxhdGVzKSBhY3Jvc3MgQVdTIGFjY291bnRzLlxuICAgICAgICAgICAgICAgICAgICAoVGhpcyBpcyBsZXNzIGNvbW1vbi4pIDwvcD5cbiAgICAgICAgICAgIDwvbGk+XG4gICAgICAgICA8L3VsPlxuICAqIFxuICAqIERvY3MgYXQgVGVycmFmb3JtIFJlZ2lzdHJ5OiB7QGxpbmsgaHR0cHM6Ly93d3cudGVycmFmb3JtLmlvL2RvY3MvcHJvdmlkZXJzL2F3c2NjL3IvcXVpY2tzaWdodF90aGVtZS5odG1sI3ByaW5jaXBhbCBRdWlja3NpZ2h0VGhlbWUjcHJpbmNpcGFsfVxuICAqL1xuICByZWFkb25seSBwcmluY2lwYWw6IHN0cmluZztcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIHF1aWNrc2lnaHRUaGVtZVBlcm1pc3Npb25zVG9UZXJyYWZvcm0oc3RydWN0PzogUXVpY2tzaWdodFRoZW1lUGVybWlzc2lvbnMpOiBhbnkge1xuICBpZiAoIWNka3RmLmNhbkluc3BlY3Qoc3RydWN0KSkgeyByZXR1cm4gc3RydWN0OyB9XG4gIHJldHVybiB7XG4gICAgYWN0aW9uczogY2RrdGYubGlzdE1hcHBlcihjZGt0Zi5zdHJpbmdUb1RlcnJhZm9ybSkoc3RydWN0IS5hY3Rpb25zKSxcbiAgICBwcmluY2lwYWw6IGNka3RmLnN0cmluZ1RvVGVycmFmb3JtKHN0cnVjdCEucHJpbmNpcGFsKSxcbiAgfVxufVxuXG5leHBvcnQgaW50ZXJmYWNlIFF1aWNrc2lnaHRUaGVtZVRhZ3Mge1xuICAvKipcbiAgKiA8cD5UYWcga2V5LjwvcD5cbiAgKiBcbiAgKiBEb2NzIGF0IFRlcnJhZm9ybSBSZWdpc3RyeToge0BsaW5rIGh0dHBzOi8vd3d3LnRlcnJhZm9ybS5pby9kb2NzL3Byb3ZpZGVycy9hd3NjYy9yL3F1aWNrc2lnaHRfdGhlbWUuaHRtbCNrZXkgUXVpY2tzaWdodFRoZW1lI2tleX1cbiAgKi9cbiAgcmVhZG9ubHkga2V5OiBzdHJpbmc7XG4gIC8qKlxuICAqIDxwPlRhZyB2YWx1ZS48L3A+XG4gICogXG4gICogRG9jcyBhdCBUZXJyYWZvcm0gUmVnaXN0cnk6IHtAbGluayBodHRwczovL3d3dy50ZXJyYWZvcm0uaW8vZG9jcy9wcm92aWRlcnMvYXdzY2Mvci9xdWlja3NpZ2h0X3RoZW1lLmh0bWwjdmFsdWUgUXVpY2tzaWdodFRoZW1lI3ZhbHVlfVxuICAqL1xuICByZWFkb25seSB2YWx1ZTogc3RyaW5nO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gcXVpY2tzaWdodFRoZW1lVGFnc1RvVGVycmFmb3JtKHN0cnVjdD86IFF1aWNrc2lnaHRUaGVtZVRhZ3MpOiBhbnkge1xuICBpZiAoIWNka3RmLmNhbkluc3BlY3Qoc3RydWN0KSkgeyByZXR1cm4gc3RydWN0OyB9XG4gIHJldHVybiB7XG4gICAga2V5OiBjZGt0Zi5zdHJpbmdUb1RlcnJhZm9ybShzdHJ1Y3QhLmtleSksXG4gICAgdmFsdWU6IGNka3RmLnN0cmluZ1RvVGVycmFmb3JtKHN0cnVjdCEudmFsdWUpLFxuICB9XG59XG5cbmV4cG9ydCBpbnRlcmZhY2UgUXVpY2tzaWdodFRoZW1lVmVyc2lvbkNvbmZpZ3VyYXRpb25EYXRhQ29sb3JQYWxldHRlIHtcbiAgLyoqXG4gICogPHA+VGhlIGhleGFkZWNpbWFsIGNvZGVzIGZvciB0aGUgY29sb3JzLjwvcD5cbiAgKiBcbiAgKiBEb2NzIGF0IFRlcnJhZm9ybSBSZWdpc3RyeToge0BsaW5rIGh0dHBzOi8vd3d3LnRlcnJhZm9ybS5pby9kb2NzL3Byb3ZpZGVycy9hd3NjYy9yL3F1aWNrc2lnaHRfdGhlbWUuaHRtbCNjb2xvcnMgUXVpY2tzaWdodFRoZW1lI2NvbG9yc31cbiAgKi9cbiAgcmVhZG9ubHkgY29sb3JzPzogc3RyaW5nW107XG4gIC8qKlxuICAqIDxwPlRoZSBoZXhhZGVjaW1hbCBjb2RlIG9mIGEgY29sb3IgdGhhdCBhcHBsaWVzIHRvIGNoYXJ0cyB3aGVyZSBhIGxhY2sgb2YgZGF0YSBpc1xuICAgICAgICAgICAgaGlnaGxpZ2h0ZWQuPC9wPlxuICAqIFxuICAqIERvY3MgYXQgVGVycmFmb3JtIFJlZ2lzdHJ5OiB7QGxpbmsgaHR0cHM6Ly93d3cudGVycmFmb3JtLmlvL2RvY3MvcHJvdmlkZXJzL2F3c2NjL3IvcXVpY2tzaWdodF90aGVtZS5odG1sI2VtcHR5X2ZpbGxfY29sb3IgUXVpY2tzaWdodFRoZW1lI2VtcHR5X2ZpbGxfY29sb3J9XG4gICovXG4gIHJlYWRvbmx5IGVtcHR5RmlsbENvbG9yPzogc3RyaW5nO1xuICAvKipcbiAgKiA8cD5UaGUgbWluaW11bSBhbmQgbWF4aW11bSBoZXhhZGVjaW1hbCBjb2RlcyB0aGF0IGRlc2NyaWJlIGEgY29sb3IgZ3JhZGllbnQuIDwvcD5cbiAgKiBcbiAgKiBEb2NzIGF0IFRlcnJhZm9ybSBSZWdpc3RyeToge0BsaW5rIGh0dHBzOi8vd3d3LnRlcnJhZm9ybS5pby9kb2NzL3Byb3ZpZGVycy9hd3NjYy9yL3F1aWNrc2lnaHRfdGhlbWUuaHRtbCNtaW5fbWF4X2dyYWRpZW50IFF1aWNrc2lnaHRUaGVtZSNtaW5fbWF4X2dyYWRpZW50fVxuICAqL1xuICByZWFkb25seSBtaW5NYXhHcmFkaWVudD86IHN0cmluZ1tdO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gcXVpY2tzaWdodFRoZW1lVmVyc2lvbkNvbmZpZ3VyYXRpb25EYXRhQ29sb3JQYWxldHRlVG9UZXJyYWZvcm0oc3RydWN0PzogUXVpY2tzaWdodFRoZW1lVmVyc2lvbkNvbmZpZ3VyYXRpb25EYXRhQ29sb3JQYWxldHRlKTogYW55IHtcbiAgaWYgKCFjZGt0Zi5jYW5JbnNwZWN0KHN0cnVjdCkpIHsgcmV0dXJuIHN0cnVjdDsgfVxuICByZXR1cm4ge1xuICAgIGNvbG9yczogY2RrdGYubGlzdE1hcHBlcihjZGt0Zi5zdHJpbmdUb1RlcnJhZm9ybSkoc3RydWN0IS5jb2xvcnMpLFxuICAgIGVtcHR5X2ZpbGxfY29sb3I6IGNka3RmLnN0cmluZ1RvVGVycmFmb3JtKHN0cnVjdCEuZW1wdHlGaWxsQ29sb3IpLFxuICAgIG1pbl9tYXhfZ3JhZGllbnQ6IGNka3RmLmxpc3RNYXBwZXIoY2RrdGYuc3RyaW5nVG9UZXJyYWZvcm0pKHN0cnVjdCEubWluTWF4R3JhZGllbnQpLFxuICB9XG59XG5cbmV4cG9ydCBpbnRlcmZhY2UgUXVpY2tzaWdodFRoZW1lVmVyc2lvbkNvbmZpZ3VyYXRpb25TaGVldFRpbGVCb3JkZXIge1xuICAvKipcbiAgKiA8cD5UaGUgb3B0aW9uIHRvIGVuYWJsZSBkaXNwbGF5IG9mIGJvcmRlcnMgZm9yIHZpc3VhbHMuPC9wPlxuICAqIFxuICAqIERvY3MgYXQgVGVycmFmb3JtIFJlZ2lzdHJ5OiB7QGxpbmsgaHR0cHM6Ly93d3cudGVycmFmb3JtLmlvL2RvY3MvcHJvdmlkZXJzL2F3c2NjL3IvcXVpY2tzaWdodF90aGVtZS5odG1sI3Nob3cgUXVpY2tzaWdodFRoZW1lI3Nob3d9XG4gICovXG4gIHJlYWRvbmx5IHNob3c/OiBib29sZWFuIHwgY2RrdGYuSVJlc29sdmFibGU7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBxdWlja3NpZ2h0VGhlbWVWZXJzaW9uQ29uZmlndXJhdGlvblNoZWV0VGlsZUJvcmRlclRvVGVycmFmb3JtKHN0cnVjdD86IFF1aWNrc2lnaHRUaGVtZVZlcnNpb25Db25maWd1cmF0aW9uU2hlZXRUaWxlQm9yZGVyKTogYW55IHtcbiAgaWYgKCFjZGt0Zi5jYW5JbnNwZWN0KHN0cnVjdCkpIHsgcmV0dXJuIHN0cnVjdDsgfVxuICByZXR1cm4ge1xuICAgIHNob3c6IGNka3RmLmJvb2xlYW5Ub1RlcnJhZm9ybShzdHJ1Y3QhLnNob3cpLFxuICB9XG59XG5cbmV4cG9ydCBpbnRlcmZhY2UgUXVpY2tzaWdodFRoZW1lVmVyc2lvbkNvbmZpZ3VyYXRpb25TaGVldFRpbGUge1xuICAvKipcbiAgKiA8cD5UaGUgZGlzcGxheSBvcHRpb25zIGZvciB0aWxlIGJvcmRlcnMgZm9yIHZpc3VhbHMuPC9wPlxuICAqIFxuICAqIERvY3MgYXQgVGVycmFmb3JtIFJlZ2lzdHJ5OiB7QGxpbmsgaHR0cHM6Ly93d3cudGVycmFmb3JtLmlvL2RvY3MvcHJvdmlkZXJzL2F3c2NjL3IvcXVpY2tzaWdodF90aGVtZS5odG1sI2JvcmRlciBRdWlja3NpZ2h0VGhlbWUjYm9yZGVyfVxuICAqL1xuICByZWFkb25seSBib3JkZXI/OiBRdWlja3NpZ2h0VGhlbWVWZXJzaW9uQ29uZmlndXJhdGlvblNoZWV0VGlsZUJvcmRlcjtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIHF1aWNrc2lnaHRUaGVtZVZlcnNpb25Db25maWd1cmF0aW9uU2hlZXRUaWxlVG9UZXJyYWZvcm0oc3RydWN0PzogUXVpY2tzaWdodFRoZW1lVmVyc2lvbkNvbmZpZ3VyYXRpb25TaGVldFRpbGUpOiBhbnkge1xuICBpZiAoIWNka3RmLmNhbkluc3BlY3Qoc3RydWN0KSkgeyByZXR1cm4gc3RydWN0OyB9XG4gIHJldHVybiB7XG4gICAgYm9yZGVyOiBxdWlja3NpZ2h0VGhlbWVWZXJzaW9uQ29uZmlndXJhdGlvblNoZWV0VGlsZUJvcmRlclRvVGVycmFmb3JtKHN0cnVjdCEuYm9yZGVyKSxcbiAgfVxufVxuXG5leHBvcnQgaW50ZXJmYWNlIFF1aWNrc2lnaHRUaGVtZVZlcnNpb25Db25maWd1cmF0aW9uU2hlZXRUaWxlTGF5b3V0R3V0dGVyIHtcbiAgLyoqXG4gICogPHA+VGhpcyBCb29sZWFuIHZhbHVlIGNvbnRyb2xzIHdoZXRoZXIgdG8gZGlzcGxheSBhIGd1dHRlciBzcGFjZSBiZXR3ZWVuIHNoZWV0IHRpbGVzLlxuICAgICAgICA8L3A+XG4gICogXG4gICogRG9jcyBhdCBUZXJyYWZvcm0gUmVnaXN0cnk6IHtAbGluayBodHRwczovL3d3dy50ZXJyYWZvcm0uaW8vZG9jcy9wcm92aWRlcnMvYXdzY2Mvci9xdWlja3NpZ2h0X3RoZW1lLmh0bWwjc2hvdyBRdWlja3NpZ2h0VGhlbWUjc2hvd31cbiAgKi9cbiAgcmVhZG9ubHkgc2hvdz86IGJvb2xlYW4gfCBjZGt0Zi5JUmVzb2x2YWJsZTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIHF1aWNrc2lnaHRUaGVtZVZlcnNpb25Db25maWd1cmF0aW9uU2hlZXRUaWxlTGF5b3V0R3V0dGVyVG9UZXJyYWZvcm0oc3RydWN0PzogUXVpY2tzaWdodFRoZW1lVmVyc2lvbkNvbmZpZ3VyYXRpb25TaGVldFRpbGVMYXlvdXRHdXR0ZXIpOiBhbnkge1xuICBpZiAoIWNka3RmLmNhbkluc3BlY3Qoc3RydWN0KSkgeyByZXR1cm4gc3RydWN0OyB9XG4gIHJldHVybiB7XG4gICAgc2hvdzogY2RrdGYuYm9vbGVhblRvVGVycmFmb3JtKHN0cnVjdCEuc2hvdyksXG4gIH1cbn1cblxuZXhwb3J0IGludGVyZmFjZSBRdWlja3NpZ2h0VGhlbWVWZXJzaW9uQ29uZmlndXJhdGlvblNoZWV0VGlsZUxheW91dE1hcmdpbiB7XG4gIC8qKlxuICAqIDxwPlRoaXMgQm9vbGVhbiB2YWx1ZSBjb250cm9scyB3aGV0aGVyIHRvIGRpc3BsYXkgc2hlZXQgbWFyZ2lucy48L3A+XG4gICogXG4gICogRG9jcyBhdCBUZXJyYWZvcm0gUmVnaXN0cnk6IHtAbGluayBodHRwczovL3d3dy50ZXJyYWZvcm0uaW8vZG9jcy9wcm92aWRlcnMvYXdzY2Mvci9xdWlja3NpZ2h0X3RoZW1lLmh0bWwjc2hvdyBRdWlja3NpZ2h0VGhlbWUjc2hvd31cbiAgKi9cbiAgcmVhZG9ubHkgc2hvdz86IGJvb2xlYW4gfCBjZGt0Zi5JUmVzb2x2YWJsZTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIHF1aWNrc2lnaHRUaGVtZVZlcnNpb25Db25maWd1cmF0aW9uU2hlZXRUaWxlTGF5b3V0TWFyZ2luVG9UZXJyYWZvcm0oc3RydWN0PzogUXVpY2tzaWdodFRoZW1lVmVyc2lvbkNvbmZpZ3VyYXRpb25TaGVldFRpbGVMYXlvdXRNYXJnaW4pOiBhbnkge1xuICBpZiAoIWNka3RmLmNhbkluc3BlY3Qoc3RydWN0KSkgeyByZXR1cm4gc3RydWN0OyB9XG4gIHJldHVybiB7XG4gICAgc2hvdzogY2RrdGYuYm9vbGVhblRvVGVycmFmb3JtKHN0cnVjdCEuc2hvdyksXG4gIH1cbn1cblxuZXhwb3J0IGludGVyZmFjZSBRdWlja3NpZ2h0VGhlbWVWZXJzaW9uQ29uZmlndXJhdGlvblNoZWV0VGlsZUxheW91dCB7XG4gIC8qKlxuICAqIDxwPlRoZSBkaXNwbGF5IG9wdGlvbnMgZm9yIGd1dHRlciBzcGFjaW5nIGJldHdlZW4gdGlsZXMgb24gYSBzaGVldC48L3A+XG4gICogXG4gICogRG9jcyBhdCBUZXJyYWZvcm0gUmVnaXN0cnk6IHtAbGluayBodHRwczovL3d3dy50ZXJyYWZvcm0uaW8vZG9jcy9wcm92aWRlcnMvYXdzY2Mvci9xdWlja3NpZ2h0X3RoZW1lLmh0bWwjZ3V0dGVyIFF1aWNrc2lnaHRUaGVtZSNndXR0ZXJ9XG4gICovXG4gIHJlYWRvbmx5IGd1dHRlcj86IFF1aWNrc2lnaHRUaGVtZVZlcnNpb25Db25maWd1cmF0aW9uU2hlZXRUaWxlTGF5b3V0R3V0dGVyO1xuICAvKipcbiAgKiA8cD5UaGUgZGlzcGxheSBvcHRpb25zIGZvciBtYXJnaW5zIGFyb3VuZCB0aGUgb3V0c2lkZSBlZGdlIG9mIHNoZWV0cy48L3A+XG4gICogXG4gICogRG9jcyBhdCBUZXJyYWZvcm0gUmVnaXN0cnk6IHtAbGluayBodHRwczovL3d3dy50ZXJyYWZvcm0uaW8vZG9jcy9wcm92aWRlcnMvYXdzY2Mvci9xdWlja3NpZ2h0X3RoZW1lLmh0bWwjbWFyZ2luIFF1aWNrc2lnaHRUaGVtZSNtYXJnaW59XG4gICovXG4gIHJlYWRvbmx5IG1hcmdpbj86IFF1aWNrc2lnaHRUaGVtZVZlcnNpb25Db25maWd1cmF0aW9uU2hlZXRUaWxlTGF5b3V0TWFyZ2luO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gcXVpY2tzaWdodFRoZW1lVmVyc2lvbkNvbmZpZ3VyYXRpb25TaGVldFRpbGVMYXlvdXRUb1RlcnJhZm9ybShzdHJ1Y3Q/OiBRdWlja3NpZ2h0VGhlbWVWZXJzaW9uQ29uZmlndXJhdGlvblNoZWV0VGlsZUxheW91dCk6IGFueSB7XG4gIGlmICghY2RrdGYuY2FuSW5zcGVjdChzdHJ1Y3QpKSB7IHJldHVybiBzdHJ1Y3Q7IH1cbiAgcmV0dXJuIHtcbiAgICBndXR0ZXI6IHF1aWNrc2lnaHRUaGVtZVZlcnNpb25Db25maWd1cmF0aW9uU2hlZXRUaWxlTGF5b3V0R3V0dGVyVG9UZXJyYWZvcm0oc3RydWN0IS5ndXR0ZXIpLFxuICAgIG1hcmdpbjogcXVpY2tzaWdodFRoZW1lVmVyc2lvbkNvbmZpZ3VyYXRpb25TaGVldFRpbGVMYXlvdXRNYXJnaW5Ub1RlcnJhZm9ybShzdHJ1Y3QhLm1hcmdpbiksXG4gIH1cbn1cblxuZXhwb3J0IGludGVyZmFjZSBRdWlja3NpZ2h0VGhlbWVWZXJzaW9uQ29uZmlndXJhdGlvblNoZWV0IHtcbiAgLyoqXG4gICogPHA+RGlzcGxheSBvcHRpb25zIHJlbGF0ZWQgdG8gdGlsZXMgb24gYSBzaGVldC48L3A+XG4gICogXG4gICogRG9jcyBhdCBUZXJyYWZvcm0gUmVnaXN0cnk6IHtAbGluayBodHRwczovL3d3dy50ZXJyYWZvcm0uaW8vZG9jcy9wcm92aWRlcnMvYXdzY2Mvci9xdWlja3NpZ2h0X3RoZW1lLmh0bWwjdGlsZSBRdWlja3NpZ2h0VGhlbWUjdGlsZX1cbiAgKi9cbiAgcmVhZG9ubHkgdGlsZT86IFF1aWNrc2lnaHRUaGVtZVZlcnNpb25Db25maWd1cmF0aW9uU2hlZXRUaWxlO1xuICAvKipcbiAgKiA8cD5UaGUgZGlzcGxheSBvcHRpb25zIGZvciB0aGUgbGF5b3V0IG9mIHRpbGVzIG9uIGEgc2hlZXQuPC9wPlxuICAqIFxuICAqIERvY3MgYXQgVGVycmFmb3JtIFJlZ2lzdHJ5OiB7QGxpbmsgaHR0cHM6Ly93d3cudGVycmFmb3JtLmlvL2RvY3MvcHJvdmlkZXJzL2F3c2NjL3IvcXVpY2tzaWdodF90aGVtZS5odG1sI3RpbGVfbGF5b3V0IFF1aWNrc2lnaHRUaGVtZSN0aWxlX2xheW91dH1cbiAgKi9cbiAgcmVhZG9ubHkgdGlsZUxheW91dD86IFF1aWNrc2lnaHRUaGVtZVZlcnNpb25Db25maWd1cmF0aW9uU2hlZXRUaWxlTGF5b3V0O1xufVxuXG5leHBvcnQgZnVuY3Rpb24gcXVpY2tzaWdodFRoZW1lVmVyc2lvbkNvbmZpZ3VyYXRpb25TaGVldFRvVGVycmFmb3JtKHN0cnVjdD86IFF1aWNrc2lnaHRUaGVtZVZlcnNpb25Db25maWd1cmF0aW9uU2hlZXQpOiBhbnkge1xuICBpZiAoIWNka3RmLmNhbkluc3BlY3Qoc3RydWN0KSkgeyByZXR1cm4gc3RydWN0OyB9XG4gIHJldHVybiB7XG4gICAgdGlsZTogcXVpY2tzaWdodFRoZW1lVmVyc2lvbkNvbmZpZ3VyYXRpb25TaGVldFRpbGVUb1RlcnJhZm9ybShzdHJ1Y3QhLnRpbGUpLFxuICAgIHRpbGVfbGF5b3V0OiBxdWlja3NpZ2h0VGhlbWVWZXJzaW9uQ29uZmlndXJhdGlvblNoZWV0VGlsZUxheW91dFRvVGVycmFmb3JtKHN0cnVjdCEudGlsZUxheW91dCksXG4gIH1cbn1cblxuZXhwb3J0IGludGVyZmFjZSBRdWlja3NpZ2h0VGhlbWVWZXJzaW9uQ29uZmlndXJhdGlvblR5cG9ncmFwaHlGb250RmFtaWxpZXMge1xuICAvKipcbiAgKiBEb2NzIGF0IFRlcnJhZm9ybSBSZWdpc3RyeToge0BsaW5rIGh0dHBzOi8vd3d3LnRlcnJhZm9ybS5pby9kb2NzL3Byb3ZpZGVycy9hd3NjYy9yL3F1aWNrc2lnaHRfdGhlbWUuaHRtbCNmb250X2ZhbWlseSBRdWlja3NpZ2h0VGhlbWUjZm9udF9mYW1pbHl9XG4gICovXG4gIHJlYWRvbmx5IGZvbnRGYW1pbHk/OiBzdHJpbmc7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBxdWlja3NpZ2h0VGhlbWVWZXJzaW9uQ29uZmlndXJhdGlvblR5cG9ncmFwaHlGb250RmFtaWxpZXNUb1RlcnJhZm9ybShzdHJ1Y3Q/OiBRdWlja3NpZ2h0VGhlbWVWZXJzaW9uQ29uZmlndXJhdGlvblR5cG9ncmFwaHlGb250RmFtaWxpZXMpOiBhbnkge1xuICBpZiAoIWNka3RmLmNhbkluc3BlY3Qoc3RydWN0KSkgeyByZXR1cm4gc3RydWN0OyB9XG4gIHJldHVybiB7XG4gICAgZm9udF9mYW1pbHk6IGNka3RmLnN0cmluZ1RvVGVycmFmb3JtKHN0cnVjdCEuZm9udEZhbWlseSksXG4gIH1cbn1cblxuZXhwb3J0IGludGVyZmFjZSBRdWlja3NpZ2h0VGhlbWVWZXJzaW9uQ29uZmlndXJhdGlvblR5cG9ncmFwaHkge1xuICAvKipcbiAgKiBEb2NzIGF0IFRlcnJhZm9ybSBSZWdpc3RyeToge0BsaW5rIGh0dHBzOi8vd3d3LnRlcnJhZm9ybS5pby9kb2NzL3Byb3ZpZGVycy9hd3NjYy9yL3F1aWNrc2lnaHRfdGhlbWUuaHRtbCNmb250X2ZhbWlsaWVzIFF1aWNrc2lnaHRUaGVtZSNmb250X2ZhbWlsaWVzfVxuICAqL1xuICByZWFkb25seSBmb250RmFtaWxpZXM/OiBRdWlja3NpZ2h0VGhlbWVWZXJzaW9uQ29uZmlndXJhdGlvblR5cG9ncmFwaHlGb250RmFtaWxpZXNbXTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIHF1aWNrc2lnaHRUaGVtZVZlcnNpb25Db25maWd1cmF0aW9uVHlwb2dyYXBoeVRvVGVycmFmb3JtKHN0cnVjdD86IFF1aWNrc2lnaHRUaGVtZVZlcnNpb25Db25maWd1cmF0aW9uVHlwb2dyYXBoeSk6IGFueSB7XG4gIGlmICghY2RrdGYuY2FuSW5zcGVjdChzdHJ1Y3QpKSB7IHJldHVybiBzdHJ1Y3Q7IH1cbiAgcmV0dXJuIHtcbiAgICBmb250X2ZhbWlsaWVzOiBjZGt0Zi5saXN0TWFwcGVyKHF1aWNrc2lnaHRUaGVtZVZlcnNpb25Db25maWd1cmF0aW9uVHlwb2dyYXBoeUZvbnRGYW1pbGllc1RvVGVycmFmb3JtKShzdHJ1Y3QhLmZvbnRGYW1pbGllcyksXG4gIH1cbn1cblxuZXhwb3J0IGludGVyZmFjZSBRdWlja3NpZ2h0VGhlbWVWZXJzaW9uQ29uZmlndXJhdGlvblVpQ29sb3JQYWxldHRlIHtcbiAgLyoqXG4gICogPHA+VGhpcyBjb2xvciBpcyB0aGF0IGFwcGxpZXMgdG8gc2VsZWN0ZWQgc3RhdGVzIGFuZCBidXR0b25zLjwvcD5cbiAgKiBcbiAgKiBEb2NzIGF0IFRlcnJhZm9ybSBSZWdpc3RyeToge0BsaW5rIGh0dHBzOi8vd3d3LnRlcnJhZm9ybS5pby9kb2NzL3Byb3ZpZGVycy9hd3NjYy9yL3F1aWNrc2lnaHRfdGhlbWUuaHRtbCNhY2NlbnQgUXVpY2tzaWdodFRoZW1lI2FjY2VudH1cbiAgKi9cbiAgcmVhZG9ubHkgYWNjZW50Pzogc3RyaW5nO1xuICAvKipcbiAgKiA8cD5UaGUgZm9yZWdyb3VuZCBjb2xvciB0aGF0IGFwcGxpZXMgdG8gYW55IHRleHQgb3Igb3RoZXIgZWxlbWVudHMgdGhhdCBhcHBlYXIgb3ZlciB0aGVcbiAgICAgICAgICAgIGFjY2VudCBjb2xvci48L3A+XG4gICogXG4gICogRG9jcyBhdCBUZXJyYWZvcm0gUmVnaXN0cnk6IHtAbGluayBodHRwczovL3d3dy50ZXJyYWZvcm0uaW8vZG9jcy9wcm92aWRlcnMvYXdzY2Mvci9xdWlja3NpZ2h0X3RoZW1lLmh0bWwjYWNjZW50X2ZvcmVncm91bmQgUXVpY2tzaWdodFRoZW1lI2FjY2VudF9mb3JlZ3JvdW5kfVxuICAqL1xuICByZWFkb25seSBhY2NlbnRGb3JlZ3JvdW5kPzogc3RyaW5nO1xuICAvKipcbiAgKiA8cD5UaGUgY29sb3IgdGhhdCBhcHBsaWVzIHRvIGVycm9yIG1lc3NhZ2VzLjwvcD5cbiAgKiBcbiAgKiBEb2NzIGF0IFRlcnJhZm9ybSBSZWdpc3RyeToge0BsaW5rIGh0dHBzOi8vd3d3LnRlcnJhZm9ybS5pby9kb2NzL3Byb3ZpZGVycy9hd3NjYy9yL3F1aWNrc2lnaHRfdGhlbWUuaHRtbCNkYW5nZXIgUXVpY2tzaWdodFRoZW1lI2Rhbmdlcn1cbiAgKi9cbiAgcmVhZG9ubHkgZGFuZ2VyPzogc3RyaW5nO1xuICAvKipcbiAgKiA8cD5UaGUgZm9yZWdyb3VuZCBjb2xvciB0aGF0IGFwcGxpZXMgdG8gYW55IHRleHQgb3Igb3RoZXIgZWxlbWVudHMgdGhhdCBhcHBlYXIgb3ZlciB0aGVcbiAgICAgICAgICAgIGVycm9yIGNvbG9yLjwvcD5cbiAgKiBcbiAgKiBEb2NzIGF0IFRlcnJhZm9ybSBSZWdpc3RyeToge0BsaW5rIGh0dHBzOi8vd3d3LnRlcnJhZm9ybS5pby9kb2NzL3Byb3ZpZGVycy9hd3NjYy9yL3F1aWNrc2lnaHRfdGhlbWUuaHRtbCNkYW5nZXJfZm9yZWdyb3VuZCBRdWlja3NpZ2h0VGhlbWUjZGFuZ2VyX2ZvcmVncm91bmR9XG4gICovXG4gIHJlYWRvbmx5IGRhbmdlckZvcmVncm91bmQ/OiBzdHJpbmc7XG4gIC8qKlxuICAqIDxwPlRoZSBjb2xvciB0aGF0IGFwcGxpZXMgdG8gdGhlIG5hbWVzIG9mIGZpZWxkcyB0aGF0IGFyZSBpZGVudGlmaWVkIGFzXG4gICAgICAgICAgICBkaW1lbnNpb25zLjwvcD5cbiAgKiBcbiAgKiBEb2NzIGF0IFRlcnJhZm9ybSBSZWdpc3RyeToge0BsaW5rIGh0dHBzOi8vd3d3LnRlcnJhZm9ybS5pby9kb2NzL3Byb3ZpZGVycy9hd3NjYy9yL3F1aWNrc2lnaHRfdGhlbWUuaHRtbCNkaW1lbnNpb24gUXVpY2tzaWdodFRoZW1lI2RpbWVuc2lvbn1cbiAgKi9cbiAgcmVhZG9ubHkgZGltZW5zaW9uPzogc3RyaW5nO1xuICAvKipcbiAgKiA8cD5UaGUgZm9yZWdyb3VuZCBjb2xvciB0aGF0IGFwcGxpZXMgdG8gYW55IHRleHQgb3Igb3RoZXIgZWxlbWVudHMgdGhhdCBhcHBlYXIgb3ZlciB0aGVcbiAgICAgICAgICAgIGRpbWVuc2lvbiBjb2xvci48L3A+XG4gICogXG4gICogRG9jcyBhdCBUZXJyYWZvcm0gUmVnaXN0cnk6IHtAbGluayBodHRwczovL3d3dy50ZXJyYWZvcm0uaW8vZG9jcy9wcm92aWRlcnMvYXdzY2Mvci9xdWlja3NpZ2h0X3RoZW1lLmh0bWwjZGltZW5zaW9uX2ZvcmVncm91bmQgUXVpY2tzaWdodFRoZW1lI2RpbWVuc2lvbl9mb3JlZ3JvdW5kfVxuICAqL1xuICByZWFkb25seSBkaW1lbnNpb25Gb3JlZ3JvdW5kPzogc3RyaW5nO1xuICAvKipcbiAgKiA8cD5UaGUgY29sb3IgdGhhdCBhcHBsaWVzIHRvIHRoZSBuYW1lcyBvZiBmaWVsZHMgdGhhdCBhcmUgaWRlbnRpZmllZCBhcyBtZWFzdXJlcy48L3A+XG4gICogXG4gICogRG9jcyBhdCBUZXJyYWZvcm0gUmVnaXN0cnk6IHtAbGluayBodHRwczovL3d3dy50ZXJyYWZvcm0uaW8vZG9jcy9wcm92aWRlcnMvYXdzY2Mvci9xdWlja3NpZ2h0X3RoZW1lLmh0bWwjbWVhc3VyZSBRdWlja3NpZ2h0VGhlbWUjbWVhc3VyZX1cbiAgKi9cbiAgcmVhZG9ubHkgbWVhc3VyZT86IHN0cmluZztcbiAgLyoqXG4gICogPHA+VGhlIGZvcmVncm91bmQgY29sb3IgdGhhdCBhcHBsaWVzIHRvIGFueSB0ZXh0IG9yIG90aGVyIGVsZW1lbnRzIHRoYXQgYXBwZWFyIG92ZXIgdGhlXG4gICAgICAgICAgICBtZWFzdXJlIGNvbG9yLjwvcD5cbiAgKiBcbiAgKiBEb2NzIGF0IFRlcnJhZm9ybSBSZWdpc3RyeToge0BsaW5rIGh0dHBzOi8vd3d3LnRlcnJhZm9ybS5pby9kb2NzL3Byb3ZpZGVycy9hd3NjYy9yL3F1aWNrc2lnaHRfdGhlbWUuaHRtbCNtZWFzdXJlX2ZvcmVncm91bmQgUXVpY2tzaWdodFRoZW1lI21lYXN1cmVfZm9yZWdyb3VuZH1cbiAgKi9cbiAgcmVhZG9ubHkgbWVhc3VyZUZvcmVncm91bmQ/OiBzdHJpbmc7XG4gIC8qKlxuICAqIDxwPlRoZSBiYWNrZ3JvdW5kIGNvbG9yIHRoYXQgYXBwbGllcyB0byB2aXN1YWxzIGFuZCBvdGhlciBoaWdoIGVtcGhhc2lzIFVJLjwvcD5cbiAgKiBcbiAgKiBEb2NzIGF0IFRlcnJhZm9ybSBSZWdpc3RyeToge0BsaW5rIGh0dHBzOi8vd3d3LnRlcnJhZm9ybS5pby9kb2NzL3Byb3ZpZGVycy9hd3NjYy9yL3F1aWNrc2lnaHRfdGhlbWUuaHRtbCNwcmltYXJ5X2JhY2tncm91bmQgUXVpY2tzaWdodFRoZW1lI3ByaW1hcnlfYmFja2dyb3VuZH1cbiAgKi9cbiAgcmVhZG9ubHkgcHJpbWFyeUJhY2tncm91bmQ/OiBzdHJpbmc7XG4gIC8qKlxuICAqIDxwPlRoZSBjb2xvciBvZiB0ZXh0IGFuZCBvdGhlciBmb3JlZ3JvdW5kIGVsZW1lbnRzIHRoYXQgYXBwZWFyIG92ZXIgdGhlIHByaW1hcnlcbiAgICAgICAgICAgIGJhY2tncm91bmQgcmVnaW9ucywgc3VjaCBhcyBncmlkIGxpbmVzLCBib3JkZXJzLCB0YWJsZSBiYW5kaW5nLCBpY29ucywgYW5kIHNvIG9uLjwvcD5cbiAgKiBcbiAgKiBEb2NzIGF0IFRlcnJhZm9ybSBSZWdpc3RyeToge0BsaW5rIGh0dHBzOi8vd3d3LnRlcnJhZm9ybS5pby9kb2NzL3Byb3ZpZGVycy9hd3NjYy9yL3F1aWNrc2lnaHRfdGhlbWUuaHRtbCNwcmltYXJ5X2ZvcmVncm91bmQgUXVpY2tzaWdodFRoZW1lI3ByaW1hcnlfZm9yZWdyb3VuZH1cbiAgKi9cbiAgcmVhZG9ubHkgcHJpbWFyeUZvcmVncm91bmQ/OiBzdHJpbmc7XG4gIC8qKlxuICAqIDxwPlRoZSBiYWNrZ3JvdW5kIGNvbG9yIHRoYXQgYXBwbGllcyB0byB0aGUgc2hlZXQgYmFja2dyb3VuZCBhbmQgc2hlZXQgY29udHJvbHMuPC9wPlxuICAqIFxuICAqIERvY3MgYXQgVGVycmFmb3JtIFJlZ2lzdHJ5OiB7QGxpbmsgaHR0cHM6Ly93d3cudGVycmFmb3JtLmlvL2RvY3MvcHJvdmlkZXJzL2F3c2NjL3IvcXVpY2tzaWdodF90aGVtZS5odG1sI3NlY29uZGFyeV9iYWNrZ3JvdW5kIFF1aWNrc2lnaHRUaGVtZSNzZWNvbmRhcnlfYmFja2dyb3VuZH1cbiAgKi9cbiAgcmVhZG9ubHkgc2Vjb25kYXJ5QmFja2dyb3VuZD86IHN0cmluZztcbiAgLyoqXG4gICogPHA+VGhlIGZvcmVncm91bmQgY29sb3IgdGhhdCBhcHBsaWVzIHRvIGFueSBzaGVldCB0aXRsZSwgc2hlZXQgY29udHJvbCB0ZXh0LCBvciBVSSB0aGF0XG4gICAgICAgICAgICBhcHBlYXJzIG92ZXIgdGhlIHNlY29uZGFyeSBiYWNrZ3JvdW5kLjwvcD5cbiAgKiBcbiAgKiBEb2NzIGF0IFRlcnJhZm9ybSBSZWdpc3RyeToge0BsaW5rIGh0dHBzOi8vd3d3LnRlcnJhZm9ybS5pby9kb2NzL3Byb3ZpZGVycy9hd3NjYy9yL3F1aWNrc2lnaHRfdGhlbWUuaHRtbCNzZWNvbmRhcnlfZm9yZWdyb3VuZCBRdWlja3NpZ2h0VGhlbWUjc2Vjb25kYXJ5X2ZvcmVncm91bmR9XG4gICovXG4gIHJlYWRvbmx5IHNlY29uZGFyeUZvcmVncm91bmQ/OiBzdHJpbmc7XG4gIC8qKlxuICAqIDxwPlRoZSBjb2xvciB0aGF0IGFwcGxpZXMgdG8gc3VjY2VzcyBtZXNzYWdlcywgZm9yIGV4YW1wbGUgdGhlIGNoZWNrIG1hcmsgZm9yIGFcbiAgICAgICAgICAgIHN1Y2Nlc3NmdWwgZG93bmxvYWQuPC9wPlxuICAqIFxuICAqIERvY3MgYXQgVGVycmFmb3JtIFJlZ2lzdHJ5OiB7QGxpbmsgaHR0cHM6Ly93d3cudGVycmFmb3JtLmlvL2RvY3MvcHJvdmlkZXJzL2F3c2NjL3IvcXVpY2tzaWdodF90aGVtZS5odG1sI3N1Y2Nlc3MgUXVpY2tzaWdodFRoZW1lI3N1Y2Nlc3N9XG4gICovXG4gIHJlYWRvbmx5IHN1Y2Nlc3M/OiBzdHJpbmc7XG4gIC8qKlxuICAqIDxwPlRoZSBmb3JlZ3JvdW5kIGNvbG9yIHRoYXQgYXBwbGllcyB0byBhbnkgdGV4dCBvciBvdGhlciBlbGVtZW50cyB0aGF0IGFwcGVhciBvdmVyIHRoZVxuICAgICAgICAgICAgc3VjY2VzcyBjb2xvci48L3A+XG4gICogXG4gICogRG9jcyBhdCBUZXJyYWZvcm0gUmVnaXN0cnk6IHtAbGluayBodHRwczovL3d3dy50ZXJyYWZvcm0uaW8vZG9jcy9wcm92aWRlcnMvYXdzY2Mvci9xdWlja3NpZ2h0X3RoZW1lLmh0bWwjc3VjY2Vzc19mb3JlZ3JvdW5kIFF1aWNrc2lnaHRUaGVtZSNzdWNjZXNzX2ZvcmVncm91bmR9XG4gICovXG4gIHJlYWRvbmx5IHN1Y2Nlc3NGb3JlZ3JvdW5kPzogc3RyaW5nO1xuICAvKipcbiAgKiA8cD5UaGlzIGNvbG9yIHRoYXQgYXBwbGllcyB0byB3YXJuaW5nIGFuZCBpbmZvcm1hdGlvbmFsIG1lc3NhZ2VzLjwvcD5cbiAgKiBcbiAgKiBEb2NzIGF0IFRlcnJhZm9ybSBSZWdpc3RyeToge0BsaW5rIGh0dHBzOi8vd3d3LnRlcnJhZm9ybS5pby9kb2NzL3Byb3ZpZGVycy9hd3NjYy9yL3F1aWNrc2lnaHRfdGhlbWUuaHRtbCN3YXJuaW5nIFF1aWNrc2lnaHRUaGVtZSN3YXJuaW5nfVxuICAqL1xuICByZWFkb25seSB3YXJuaW5nPzogc3RyaW5nO1xuICAvKipcbiAgKiA8cD5UaGUgZm9yZWdyb3VuZCBjb2xvciB0aGF0IGFwcGxpZXMgdG8gYW55IHRleHQgb3Igb3RoZXIgZWxlbWVudHMgdGhhdCBhcHBlYXIgb3ZlciB0aGVcbiAgICAgICAgICAgIHdhcm5pbmcgY29sb3IuPC9wPlxuICAqIFxuICAqIERvY3MgYXQgVGVycmFmb3JtIFJlZ2lzdHJ5OiB7QGxpbmsgaHR0cHM6Ly93d3cudGVycmFmb3JtLmlvL2RvY3MvcHJvdmlkZXJzL2F3c2NjL3IvcXVpY2tzaWdodF90aGVtZS5odG1sI3dhcm5pbmdfZm9yZWdyb3VuZCBRdWlja3NpZ2h0VGhlbWUjd2FybmluZ19mb3JlZ3JvdW5kfVxuICAqL1xuICByZWFkb25seSB3YXJuaW5nRm9yZWdyb3VuZD86IHN0cmluZztcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIHF1aWNrc2lnaHRUaGVtZVZlcnNpb25Db25maWd1cmF0aW9uVWlDb2xvclBhbGV0dGVUb1RlcnJhZm9ybShzdHJ1Y3Q/OiBRdWlja3NpZ2h0VGhlbWVWZXJzaW9uQ29uZmlndXJhdGlvblVpQ29sb3JQYWxldHRlKTogYW55IHtcbiAgaWYgKCFjZGt0Zi5jYW5JbnNwZWN0KHN0cnVjdCkpIHsgcmV0dXJuIHN0cnVjdDsgfVxuICByZXR1cm4ge1xuICAgIGFjY2VudDogY2RrdGYuc3RyaW5nVG9UZXJyYWZvcm0oc3RydWN0IS5hY2NlbnQpLFxuICAgIGFjY2VudF9mb3JlZ3JvdW5kOiBjZGt0Zi5zdHJpbmdUb1RlcnJhZm9ybShzdHJ1Y3QhLmFjY2VudEZvcmVncm91bmQpLFxuICAgIGRhbmdlcjogY2RrdGYuc3RyaW5nVG9UZXJyYWZvcm0oc3RydWN0IS5kYW5nZXIpLFxuICAgIGRhbmdlcl9mb3JlZ3JvdW5kOiBjZGt0Zi5zdHJpbmdUb1RlcnJhZm9ybShzdHJ1Y3QhLmRhbmdlckZvcmVncm91bmQpLFxuICAgIGRpbWVuc2lvbjogY2RrdGYuc3RyaW5nVG9UZXJyYWZvcm0oc3RydWN0IS5kaW1lbnNpb24pLFxuICAgIGRpbWVuc2lvbl9mb3JlZ3JvdW5kOiBjZGt0Zi5zdHJpbmdUb1RlcnJhZm9ybShzdHJ1Y3QhLmRpbWVuc2lvbkZvcmVncm91bmQpLFxuICAgIG1lYXN1cmU6IGNka3RmLnN0cmluZ1RvVGVycmFmb3JtKHN0cnVjdCEubWVhc3VyZSksXG4gICAgbWVhc3VyZV9mb3JlZ3JvdW5kOiBjZGt0Zi5zdHJpbmdUb1RlcnJhZm9ybShzdHJ1Y3QhLm1lYXN1cmVGb3JlZ3JvdW5kKSxcbiAgICBwcmltYXJ5X2JhY2tncm91bmQ6IGNka3RmLnN0cmluZ1RvVGVycmFmb3JtKHN0cnVjdCEucHJpbWFyeUJhY2tncm91bmQpLFxuICAgIHByaW1hcnlfZm9yZWdyb3VuZDogY2RrdGYuc3RyaW5nVG9UZXJyYWZvcm0oc3RydWN0IS5wcmltYXJ5Rm9yZWdyb3VuZCksXG4gICAgc2Vjb25kYXJ5X2JhY2tncm91bmQ6IGNka3RmLnN0cmluZ1RvVGVycmFmb3JtKHN0cnVjdCEuc2Vjb25kYXJ5QmFja2dyb3VuZCksXG4gICAgc2Vjb25kYXJ5X2ZvcmVncm91bmQ6IGNka3RmLnN0cmluZ1RvVGVycmFmb3JtKHN0cnVjdCEuc2Vjb25kYXJ5Rm9yZWdyb3VuZCksXG4gICAgc3VjY2VzczogY2RrdGYuc3RyaW5nVG9UZXJyYWZvcm0oc3RydWN0IS5zdWNjZXNzKSxcbiAgICBzdWNjZXNzX2ZvcmVncm91bmQ6IGNka3RmLnN0cmluZ1RvVGVycmFmb3JtKHN0cnVjdCEuc3VjY2Vzc0ZvcmVncm91bmQpLFxuICAgIHdhcm5pbmc6IGNka3RmLnN0cmluZ1RvVGVycmFmb3JtKHN0cnVjdCEud2FybmluZyksXG4gICAgd2FybmluZ19mb3JlZ3JvdW5kOiBjZGt0Zi5zdHJpbmdUb1RlcnJhZm9ybShzdHJ1Y3QhLndhcm5pbmdGb3JlZ3JvdW5kKSxcbiAgfVxufVxuXG5leHBvcnQgaW50ZXJmYWNlIFF1aWNrc2lnaHRUaGVtZVZlcnNpb25Db25maWd1cmF0aW9uIHtcbiAgLyoqXG4gICogPHA+VGhlIHRoZW1lIGNvbG9ycyB0aGF0IGFyZSB1c2VkIGZvciBkYXRhIGNvbG9ycyBpbiBjaGFydHMuIFRoZSBjb2xvcnMgZGVzY3JpcHRpb24gaXMgYVxuICAgICAgICAgICAgaGV4YWRlY2ltYWwgY29sb3IgY29kZSB0aGF0IGNvbnNpc3RzIG9mIHNpeCBhbHBoYW51bWVyaWNhbCBjaGFyYWN0ZXJzLCBwcmVmaXhlZCB3aXRoXG4gICAgICAgICAgICAgICAgPGNvZGU+IzwvY29kZT4sIGZvciBleGFtcGxlICMzN0JGRjUuIDwvcD5cbiAgKiBcbiAgKiBEb2NzIGF0IFRlcnJhZm9ybSBSZWdpc3RyeToge0BsaW5rIGh0dHBzOi8vd3d3LnRlcnJhZm9ybS5pby9kb2NzL3Byb3ZpZGVycy9hd3NjYy9yL3F1aWNrc2lnaHRfdGhlbWUuaHRtbCNkYXRhX2NvbG9yX3BhbGV0dGUgUXVpY2tzaWdodFRoZW1lI2RhdGFfY29sb3JfcGFsZXR0ZX1cbiAgKi9cbiAgcmVhZG9ubHkgZGF0YUNvbG9yUGFsZXR0ZT86IFF1aWNrc2lnaHRUaGVtZVZlcnNpb25Db25maWd1cmF0aW9uRGF0YUNvbG9yUGFsZXR0ZTtcbiAgLyoqXG4gICogPHA+VGhlIHRoZW1lIGRpc3BsYXkgb3B0aW9ucyBmb3Igc2hlZXRzLiA8L3A+XG4gICogXG4gICogRG9jcyBhdCBUZXJyYWZvcm0gUmVnaXN0cnk6IHtAbGluayBodHRwczovL3d3dy50ZXJyYWZvcm0uaW8vZG9jcy9wcm92aWRlcnMvYXdzY2Mvci9xdWlja3NpZ2h0X3RoZW1lLmh0bWwjc2hlZXQgUXVpY2tzaWdodFRoZW1lI3NoZWV0fVxuICAqL1xuICByZWFkb25seSBzaGVldD86IFF1aWNrc2lnaHRUaGVtZVZlcnNpb25Db25maWd1cmF0aW9uU2hlZXQ7XG4gIC8qKlxuICAqIERvY3MgYXQgVGVycmFmb3JtIFJlZ2lzdHJ5OiB7QGxpbmsgaHR0cHM6Ly93d3cudGVycmFmb3JtLmlvL2RvY3MvcHJvdmlkZXJzL2F3c2NjL3IvcXVpY2tzaWdodF90aGVtZS5odG1sI3R5cG9ncmFwaHkgUXVpY2tzaWdodFRoZW1lI3R5cG9ncmFwaHl9XG4gICovXG4gIHJlYWRvbmx5IHR5cG9ncmFwaHk/OiBRdWlja3NpZ2h0VGhlbWVWZXJzaW9uQ29uZmlndXJhdGlvblR5cG9ncmFwaHk7XG4gIC8qKlxuICAqIDxwPlRoZSB0aGVtZSBjb2xvcnMgdGhhdCBhcHBseSB0byBVSSBhbmQgdG8gY2hhcnRzLCBleGNsdWRpbmcgZGF0YSBjb2xvcnMuIFRoZSBjb2xvcnNcbiAgICAgICAgICAgIGRlc2NyaXB0aW9uIGlzIGEgaGV4YWRlY2ltYWwgY29sb3IgY29kZSB0aGF0IGNvbnNpc3RzIG9mIHNpeCBhbHBoYW51bWVyaWNhbCBjaGFyYWN0ZXJzLFxuICAgICAgICAgICAgcHJlZml4ZWQgd2l0aCA8Y29kZT4jPC9jb2RlPiwgZm9yIGV4YW1wbGUgIzM3QkZGNS4gRm9yIG1vcmUgaW5mb3JtYXRpb24sIHNlZSA8YSBocmVmPVwiaHR0cHM6Ly9kb2NzLmF3cy5hbWF6b24uY29tL3F1aWNrc2lnaHQvbGF0ZXN0L3VzZXIvdGhlbWVzLWluLXF1aWNrc2lnaHQuaHRtbFwiPlVzaW5nIFRoZW1lcyBpbiBBbWF6b24gUXVpY2tTaWdodDwvYT4gaW4gdGhlIDxpPkFtYXpvbiBRdWlja1NpZ2h0IFVzZXJcbiAgICAgICAgICAgICAgICBHdWlkZS48L2k+XG4gICAgICAgIDwvcD5cbiAgKiBcbiAgKiBEb2NzIGF0IFRlcnJhZm9ybSBSZWdpc3RyeToge0BsaW5rIGh0dHBzOi8vd3d3LnRlcnJhZm9ybS5pby9kb2NzL3Byb3ZpZGVycy9hd3NjYy9yL3F1aWNrc2lnaHRfdGhlbWUuaHRtbCN1aV9jb2xvcl9wYWxldHRlIFF1aWNrc2lnaHRUaGVtZSN1aV9jb2xvcl9wYWxldHRlfVxuICAqL1xuICByZWFkb25seSB1aUNvbG9yUGFsZXR0ZT86IFF1aWNrc2lnaHRUaGVtZVZlcnNpb25Db25maWd1cmF0aW9uVWlDb2xvclBhbGV0dGU7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBxdWlja3NpZ2h0VGhlbWVWZXJzaW9uQ29uZmlndXJhdGlvblRvVGVycmFmb3JtKHN0cnVjdD86IFF1aWNrc2lnaHRUaGVtZVZlcnNpb25Db25maWd1cmF0aW9uKTogYW55IHtcbiAgaWYgKCFjZGt0Zi5jYW5JbnNwZWN0KHN0cnVjdCkpIHsgcmV0dXJuIHN0cnVjdDsgfVxuICByZXR1cm4ge1xuICAgIGRhdGFfY29sb3JfcGFsZXR0ZTogcXVpY2tzaWdodFRoZW1lVmVyc2lvbkNvbmZpZ3VyYXRpb25EYXRhQ29sb3JQYWxldHRlVG9UZXJyYWZvcm0oc3RydWN0IS5kYXRhQ29sb3JQYWxldHRlKSxcbiAgICBzaGVldDogcXVpY2tzaWdodFRoZW1lVmVyc2lvbkNvbmZpZ3VyYXRpb25TaGVldFRvVGVycmFmb3JtKHN0cnVjdCEuc2hlZXQpLFxuICAgIHR5cG9ncmFwaHk6IHF1aWNrc2lnaHRUaGVtZVZlcnNpb25Db25maWd1cmF0aW9uVHlwb2dyYXBoeVRvVGVycmFmb3JtKHN0cnVjdCEudHlwb2dyYXBoeSksXG4gICAgdWlfY29sb3JfcGFsZXR0ZTogcXVpY2tzaWdodFRoZW1lVmVyc2lvbkNvbmZpZ3VyYXRpb25VaUNvbG9yUGFsZXR0ZVRvVGVycmFmb3JtKHN0cnVjdCEudWlDb2xvclBhbGV0dGUpLFxuICB9XG59XG5cbmV4cG9ydCBpbnRlcmZhY2UgUXVpY2tzaWdodFRoZW1lVmVyc2lvbkVycm9ycyB7XG4gIC8qKlxuICAqIDxwPlRoZSBlcnJvciBtZXNzYWdlLjwvcD5cbiAgKiBcbiAgKiBEb2NzIGF0IFRlcnJhZm9ybSBSZWdpc3RyeToge0BsaW5rIGh0dHBzOi8vd3d3LnRlcnJhZm9ybS5pby9kb2NzL3Byb3ZpZGVycy9hd3NjYy9yL3F1aWNrc2lnaHRfdGhlbWUuaHRtbCNtZXNzYWdlIFF1aWNrc2lnaHRUaGVtZSNtZXNzYWdlfVxuICAqL1xuICByZWFkb25seSBtZXNzYWdlPzogc3RyaW5nO1xuICAvKipcbiAgKiBEb2NzIGF0IFRlcnJhZm9ybSBSZWdpc3RyeToge0BsaW5rIGh0dHBzOi8vd3d3LnRlcnJhZm9ybS5pby9kb2NzL3Byb3ZpZGVycy9hd3NjYy9yL3F1aWNrc2lnaHRfdGhlbWUuaHRtbCN0eXBlIFF1aWNrc2lnaHRUaGVtZSN0eXBlfVxuICAqL1xuICByZWFkb25seSB0eXBlPzogc3RyaW5nO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gcXVpY2tzaWdodFRoZW1lVmVyc2lvbkVycm9yc1RvVGVycmFmb3JtKHN0cnVjdD86IFF1aWNrc2lnaHRUaGVtZVZlcnNpb25FcnJvcnMpOiBhbnkge1xuICBpZiAoIWNka3RmLmNhbkluc3BlY3Qoc3RydWN0KSkgeyByZXR1cm4gc3RydWN0OyB9XG4gIHJldHVybiB7XG4gICAgbWVzc2FnZTogY2RrdGYuc3RyaW5nVG9UZXJyYWZvcm0oc3RydWN0IS5tZXNzYWdlKSxcbiAgICB0eXBlOiBjZGt0Zi5zdHJpbmdUb1RlcnJhZm9ybShzdHJ1Y3QhLnR5cGUpLFxuICB9XG59XG5cbmV4cG9ydCBjbGFzcyBRdWlja3NpZ2h0VGhlbWVWZXJzaW9uIGV4dGVuZHMgY2RrdGYuQ29tcGxleENvbXB1dGVkTGlzdCB7XG5cbiAgLy8gYXJuIC0gY29tcHV0ZWQ6IHRydWUsIG9wdGlvbmFsOiB0cnVlLCByZXF1aXJlZDogZmFsc2VcbiAgcHVibGljIGdldCBhcm4oKSB7XG4gICAgcmV0dXJuIHRoaXMuZ2V0U3RyaW5nQXR0cmlidXRlKCdhcm4nKTtcbiAgfVxuXG4gIC8vIGJhc2VfdGhlbWVfaWQgLSBjb21wdXRlZDogdHJ1ZSwgb3B0aW9uYWw6IHRydWUsIHJlcXVpcmVkOiBmYWxzZVxuICBwcml2YXRlIF9iYXNlVGhlbWVJZD86IHN0cmluZztcbiAgcHVibGljIGdldCBiYXNlVGhlbWVJZCgpIHtcbiAgICByZXR1cm4gdGhpcy5nZXRTdHJpbmdBdHRyaWJ1dGUoJ2Jhc2VfdGhlbWVfaWQnKTtcbiAgfVxuICBwdWJsaWMgc2V0IGJhc2VUaGVtZUlkKHZhbHVlOiBzdHJpbmcpIHtcbiAgICB0aGlzLl9iYXNlVGhlbWVJZCA9IHZhbHVlO1xuICB9XG4gIHB1YmxpYyByZXNldEJhc2VUaGVtZUlkKCkge1xuICAgIHRoaXMuX2Jhc2VUaGVtZUlkID0gdW5kZWZpbmVkO1xuICB9XG4gIC8vIFRlbXBvcmFyaWx5IGV4cG9zZSBpbnB1dCB2YWx1ZS4gVXNlIHdpdGggY2F1dGlvbi5cbiAgcHVibGljIGdldCBiYXNlVGhlbWVJZElucHV0KCkge1xuICAgIHJldHVybiB0aGlzLl9iYXNlVGhlbWVJZFxuICB9XG5cbiAgLy8gY29uZmlndXJhdGlvbiAtIGNvbXB1dGVkOiB0cnVlLCBvcHRpb25hbDogdHJ1ZSwgcmVxdWlyZWQ6IGZhbHNlXG4gIHByaXZhdGUgX2NvbmZpZ3VyYXRpb24/OiBRdWlja3NpZ2h0VGhlbWVWZXJzaW9uQ29uZmlndXJhdGlvbjtcbiAgcHVibGljIGdldCBjb25maWd1cmF0aW9uKCkge1xuICAgIHJldHVybiB0aGlzLmludGVycG9sYXRpb25Gb3JBdHRyaWJ1dGUoJ2NvbmZpZ3VyYXRpb24nKSBhcyBhbnk7XG4gIH1cbiAgcHVibGljIHNldCBjb25maWd1cmF0aW9uKHZhbHVlOiBRdWlja3NpZ2h0VGhlbWVWZXJzaW9uQ29uZmlndXJhdGlvbikge1xuICAgIHRoaXMuX2NvbmZpZ3VyYXRpb24gPSB2YWx1ZTtcbiAgfVxuICBwdWJsaWMgcmVzZXRDb25maWd1cmF0aW9uKCkge1xuICAgIHRoaXMuX2NvbmZpZ3VyYXRpb24gPSB1bmRlZmluZWQ7XG4gIH1cbiAgLy8gVGVtcG9yYXJpbHkgZXhwb3NlIGlucHV0IHZhbHVlLiBVc2Ugd2l0aCBjYXV0aW9uLlxuICBwdWJsaWMgZ2V0IGNvbmZpZ3VyYXRpb25JbnB1dCgpIHtcbiAgICByZXR1cm4gdGhpcy5fY29uZmlndXJhdGlvblxuICB9XG5cbiAgLy8gY3JlYXRlZF90aW1lIC0gY29tcHV0ZWQ6IHRydWUsIG9wdGlvbmFsOiB0cnVlLCByZXF1aXJlZDogZmFsc2VcbiAgcHJpdmF0ZSBfY3JlYXRlZFRpbWU/OiBzdHJpbmc7XG4gIHB1YmxpYyBnZXQgY3JlYXRlZFRpbWUoKSB7XG4gICAgcmV0dXJuIHRoaXMuZ2V0U3RyaW5nQXR0cmlidXRlKCdjcmVhdGVkX3RpbWUnKTtcbiAgfVxuICBwdWJsaWMgc2V0IGNyZWF0ZWRUaW1lKHZhbHVlOiBzdHJpbmcpIHtcbiAgICB0aGlzLl9jcmVhdGVkVGltZSA9IHZhbHVlO1xuICB9XG4gIHB1YmxpYyByZXNldENyZWF0ZWRUaW1lKCkge1xuICAgIHRoaXMuX2NyZWF0ZWRUaW1lID0gdW5kZWZpbmVkO1xuICB9XG4gIC8vIFRlbXBvcmFyaWx5IGV4cG9zZSBpbnB1dCB2YWx1ZS4gVXNlIHdpdGggY2F1dGlvbi5cbiAgcHVibGljIGdldCBjcmVhdGVkVGltZUlucHV0KCkge1xuICAgIHJldHVybiB0aGlzLl9jcmVhdGVkVGltZVxuICB9XG5cbiAgLy8gZGVzY3JpcHRpb24gLSBjb21wdXRlZDogdHJ1ZSwgb3B0aW9uYWw6IHRydWUsIHJlcXVpcmVkOiBmYWxzZVxuICBwcml2YXRlIF9kZXNjcmlwdGlvbj86IHN0cmluZztcbiAgcHVibGljIGdldCBkZXNjcmlwdGlvbigpIHtcbiAgICByZXR1cm4gdGhpcy5nZXRTdHJpbmdBdHRyaWJ1dGUoJ2Rlc2NyaXB0aW9uJyk7XG4gIH1cbiAgcHVibGljIHNldCBkZXNjcmlwdGlvbih2YWx1ZTogc3RyaW5nKSB7XG4gICAgdGhpcy5fZGVzY3JpcHRpb24gPSB2YWx1ZTtcbiAgfVxuICBwdWJsaWMgcmVzZXREZXNjcmlwdGlvbigpIHtcbiAgICB0aGlzLl9kZXNjcmlwdGlvbiA9IHVuZGVmaW5lZDtcbiAgfVxuICAvLyBUZW1wb3JhcmlseSBleHBvc2UgaW5wdXQgdmFsdWUuIFVzZSB3aXRoIGNhdXRpb24uXG4gIHB1YmxpYyBnZXQgZGVzY3JpcHRpb25JbnB1dCgpIHtcbiAgICByZXR1cm4gdGhpcy5fZGVzY3JpcHRpb25cbiAgfVxuXG4gIC8vIGVycm9ycyAtIGNvbXB1dGVkOiB0cnVlLCBvcHRpb25hbDogdHJ1ZSwgcmVxdWlyZWQ6IGZhbHNlXG4gIHByaXZhdGUgX2Vycm9ycz86IFF1aWNrc2lnaHRUaGVtZVZlcnNpb25FcnJvcnNbXTtcbiAgcHVibGljIGdldCBlcnJvcnMoKSB7XG4gICAgcmV0dXJuIHRoaXMuaW50ZXJwb2xhdGlvbkZvckF0dHJpYnV0ZSgnZXJyb3JzJykgYXMgYW55O1xuICB9XG4gIHB1YmxpYyBzZXQgZXJyb3JzKHZhbHVlOiBRdWlja3NpZ2h0VGhlbWVWZXJzaW9uRXJyb3JzW10pIHtcbiAgICB0aGlzLl9lcnJvcnMgPSB2YWx1ZTtcbiAgfVxuICBwdWJsaWMgcmVzZXRFcnJvcnMoKSB7XG4gICAgdGhpcy5fZXJyb3JzID0gdW5kZWZpbmVkO1xuICB9XG4gIC8vIFRlbXBvcmFyaWx5IGV4cG9zZSBpbnB1dCB2YWx1ZS4gVXNlIHdpdGggY2F1dGlvbi5cbiAgcHVibGljIGdldCBlcnJvcnNJbnB1dCgpIHtcbiAgICByZXR1cm4gdGhpcy5fZXJyb3JzXG4gIH1cblxuICAvLyBzdGF0dXMgLSBjb21wdXRlZDogdHJ1ZSwgb3B0aW9uYWw6IHRydWUsIHJlcXVpcmVkOiBmYWxzZVxuICBwcml2YXRlIF9zdGF0dXM/OiBzdHJpbmc7XG4gIHB1YmxpYyBnZXQgc3RhdHVzKCkge1xuICAgIHJldHVybiB0aGlzLmdldFN0cmluZ0F0dHJpYnV0ZSgnc3RhdHVzJyk7XG4gIH1cbiAgcHVibGljIHNldCBzdGF0dXModmFsdWU6IHN0cmluZykge1xuICAgIHRoaXMuX3N0YXR1cyA9IHZhbHVlO1xuICB9XG4gIHB1YmxpYyByZXNldFN0YXR1cygpIHtcbiAgICB0aGlzLl9zdGF0dXMgPSB1bmRlZmluZWQ7XG4gIH1cbiAgLy8gVGVtcG9yYXJpbHkgZXhwb3NlIGlucHV0IHZhbHVlLiBVc2Ugd2l0aCBjYXV0aW9uLlxuICBwdWJsaWMgZ2V0IHN0YXR1c0lucHV0KCkge1xuICAgIHJldHVybiB0aGlzLl9zdGF0dXNcbiAgfVxuXG4gIC8vIHZlcnNpb25fbnVtYmVyIC0gY29tcHV0ZWQ6IHRydWUsIG9wdGlvbmFsOiB0cnVlLCByZXF1aXJlZDogZmFsc2VcbiAgcHJpdmF0ZSBfdmVyc2lvbk51bWJlcj86IG51bWJlcjtcbiAgcHVibGljIGdldCB2ZXJzaW9uTnVtYmVyKCkge1xuICAgIHJldHVybiB0aGlzLmdldE51bWJlckF0dHJpYnV0ZSgndmVyc2lvbl9udW1iZXInKTtcbiAgfVxuICBwdWJsaWMgc2V0IHZlcnNpb25OdW1iZXIodmFsdWU6IG51bWJlcikge1xuICAgIHRoaXMuX3ZlcnNpb25OdW1iZXIgPSB2YWx1ZTtcbiAgfVxuICBwdWJsaWMgcmVzZXRWZXJzaW9uTnVtYmVyKCkge1xuICAgIHRoaXMuX3ZlcnNpb25OdW1iZXIgPSB1bmRlZmluZWQ7XG4gIH1cbiAgLy8gVGVtcG9yYXJpbHkgZXhwb3NlIGlucHV0IHZhbHVlLiBVc2Ugd2l0aCBjYXV0aW9uLlxuICBwdWJsaWMgZ2V0IHZlcnNpb25OdW1iZXJJbnB1dCgpIHtcbiAgICByZXR1cm4gdGhpcy5fdmVyc2lvbk51bWJlclxuICB9XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBxdWlja3NpZ2h0VGhlbWVWZXJzaW9uVG9UZXJyYWZvcm0oc3RydWN0PzogUXVpY2tzaWdodFRoZW1lVmVyc2lvbik6IGFueSB7XG4gIGlmICghY2RrdGYuY2FuSW5zcGVjdChzdHJ1Y3QpKSB7IHJldHVybiBzdHJ1Y3Q7IH1cbiAgcmV0dXJuIHtcbiAgICBhcm46IGNka3RmLnN0cmluZ1RvVGVycmFmb3JtKHN0cnVjdCEuYXJuKSxcbiAgICBiYXNlX3RoZW1lX2lkOiBjZGt0Zi5zdHJpbmdUb1RlcnJhZm9ybShzdHJ1Y3QhLmJhc2VUaGVtZUlkKSxcbiAgICBjb25maWd1cmF0aW9uOiBxdWlja3NpZ2h0VGhlbWVWZXJzaW9uQ29uZmlndXJhdGlvblRvVGVycmFmb3JtKHN0cnVjdCEuY29uZmlndXJhdGlvbiksXG4gICAgY3JlYXRlZF90aW1lOiBjZGt0Zi5zdHJpbmdUb1RlcnJhZm9ybShzdHJ1Y3QhLmNyZWF0ZWRUaW1lKSxcbiAgICBkZXNjcmlwdGlvbjogY2RrdGYuc3RyaW5nVG9UZXJyYWZvcm0oc3RydWN0IS5kZXNjcmlwdGlvbiksXG4gICAgZXJyb3JzOiBjZGt0Zi5saXN0TWFwcGVyKHF1aWNrc2lnaHRUaGVtZVZlcnNpb25FcnJvcnNUb1RlcnJhZm9ybSkoc3RydWN0IS5lcnJvcnMpLFxuICAgIHN0YXR1czogY2RrdGYuc3RyaW5nVG9UZXJyYWZvcm0oc3RydWN0IS5zdGF0dXMpLFxuICAgIHZlcnNpb25fbnVtYmVyOiBjZGt0Zi5udW1iZXJUb1RlcnJhZm9ybShzdHJ1Y3QhLnZlcnNpb25OdW1iZXIpLFxuICB9XG59XG5cblxuLyoqXG4qIFJlcHJlc2VudHMgYSB7QGxpbmsgaHR0cHM6Ly93d3cudGVycmFmb3JtLmlvL2RvY3MvcHJvdmlkZXJzL2F3c2NjL3IvcXVpY2tzaWdodF90aGVtZS5odG1sIGF3c2NjX3F1aWNrc2lnaHRfdGhlbWV9XG4qL1xuZXhwb3J0IGNsYXNzIFF1aWNrc2lnaHRUaGVtZSBleHRlbmRzIGNka3RmLlRlcnJhZm9ybVJlc291cmNlIHtcblxuICAvLyA9PT09PT09PT09PT09PT09PVxuICAvLyBTVEFUSUMgUFJPUEVSVElFU1xuICAvLyA9PT09PT09PT09PT09PT09PVxuICBwdWJsaWMgc3RhdGljIHJlYWRvbmx5IHRmUmVzb3VyY2VUeXBlOiBzdHJpbmcgPSBcImF3c2NjX3F1aWNrc2lnaHRfdGhlbWVcIjtcblxuICAvLyA9PT09PT09PT09PVxuICAvLyBJTklUSUFMSVpFUlxuICAvLyA9PT09PT09PT09PVxuXG4gIC8qKlxuICAqIENyZWF0ZSBhIG5ldyB7QGxpbmsgaHR0cHM6Ly93d3cudGVycmFmb3JtLmlvL2RvY3MvcHJvdmlkZXJzL2F3c2NjL3IvcXVpY2tzaWdodF90aGVtZS5odG1sIGF3c2NjX3F1aWNrc2lnaHRfdGhlbWV9IFJlc291cmNlXG4gICpcbiAgKiBAcGFyYW0gc2NvcGUgVGhlIHNjb3BlIGluIHdoaWNoIHRvIGRlZmluZSB0aGlzIGNvbnN0cnVjdFxuICAqIEBwYXJhbSBpZCBUaGUgc2NvcGVkIGNvbnN0cnVjdCBJRC4gTXVzdCBiZSB1bmlxdWUgYW1vbmdzdCBzaWJsaW5ncyBpbiB0aGUgc2FtZSBzY29wZVxuICAqIEBwYXJhbSBvcHRpb25zIFF1aWNrc2lnaHRUaGVtZUNvbmZpZ1xuICAqL1xuICBwdWJsaWMgY29uc3RydWN0b3Ioc2NvcGU6IENvbnN0cnVjdCwgaWQ6IHN0cmluZywgY29uZmlnOiBRdWlja3NpZ2h0VGhlbWVDb25maWcpIHtcbiAgICBzdXBlcihzY29wZSwgaWQsIHtcbiAgICAgIHRlcnJhZm9ybVJlc291cmNlVHlwZTogJ2F3c2NjX3F1aWNrc2lnaHRfdGhlbWUnLFxuICAgICAgdGVycmFmb3JtR2VuZXJhdG9yTWV0YWRhdGE6IHtcbiAgICAgICAgcHJvdmlkZXJOYW1lOiAnYXdzY2MnXG4gICAgICB9LFxuICAgICAgcHJvdmlkZXI6IGNvbmZpZy5wcm92aWRlcixcbiAgICAgIGRlcGVuZHNPbjogY29uZmlnLmRlcGVuZHNPbixcbiAgICAgIGNvdW50OiBjb25maWcuY291bnQsXG4gICAgICBsaWZlY3ljbGU6IGNvbmZpZy5saWZlY3ljbGVcbiAgICB9KTtcbiAgICB0aGlzLl9hd3NBY2NvdW50SWQgPSBjb25maWcuYXdzQWNjb3VudElkO1xuICAgIHRoaXMuX2Jhc2VUaGVtZUlkID0gY29uZmlnLmJhc2VUaGVtZUlkO1xuICAgIHRoaXMuX2NvbmZpZ3VyYXRpb24gPSBjb25maWcuY29uZmlndXJhdGlvbjtcbiAgICB0aGlzLl9uYW1lID0gY29uZmlnLm5hbWU7XG4gICAgdGhpcy5fcGVybWlzc2lvbnMgPSBjb25maWcucGVybWlzc2lvbnM7XG4gICAgdGhpcy5fdGFncyA9IGNvbmZpZy50YWdzO1xuICAgIHRoaXMuX3RoZW1lSWQgPSBjb25maWcudGhlbWVJZDtcbiAgICB0aGlzLl92ZXJzaW9uRGVzY3JpcHRpb24gPSBjb25maWcudmVyc2lvbkRlc2NyaXB0aW9uO1xuICB9XG5cbiAgLy8gPT09PT09PT09PVxuICAvLyBBVFRSSUJVVEVTXG4gIC8vID09PT09PT09PT1cblxuICAvLyBhcm4gLSBjb21wdXRlZDogdHJ1ZSwgb3B0aW9uYWw6IGZhbHNlLCByZXF1aXJlZDogZmFsc2VcbiAgcHVibGljIGdldCBhcm4oKSB7XG4gICAgcmV0dXJuIHRoaXMuZ2V0U3RyaW5nQXR0cmlidXRlKCdhcm4nKTtcbiAgfVxuXG4gIC8vIGF3c19hY2NvdW50X2lkIC0gY29tcHV0ZWQ6IGZhbHNlLCBvcHRpb25hbDogZmFsc2UsIHJlcXVpcmVkOiB0cnVlXG4gIHByaXZhdGUgX2F3c0FjY291bnRJZDogc3RyaW5nO1xuICBwdWJsaWMgZ2V0IGF3c0FjY291bnRJZCgpIHtcbiAgICByZXR1cm4gdGhpcy5nZXRTdHJpbmdBdHRyaWJ1dGUoJ2F3c19hY2NvdW50X2lkJyk7XG4gIH1cbiAgcHVibGljIHNldCBhd3NBY2NvdW50SWQodmFsdWU6IHN0cmluZykge1xuICAgIHRoaXMuX2F3c0FjY291bnRJZCA9IHZhbHVlO1xuICB9XG4gIC8vIFRlbXBvcmFyaWx5IGV4cG9zZSBpbnB1dCB2YWx1ZS4gVXNlIHdpdGggY2F1dGlvbi5cbiAgcHVibGljIGdldCBhd3NBY2NvdW50SWRJbnB1dCgpIHtcbiAgICByZXR1cm4gdGhpcy5fYXdzQWNjb3VudElkXG4gIH1cblxuICAvLyBiYXNlX3RoZW1lX2lkIC0gY29tcHV0ZWQ6IGZhbHNlLCBvcHRpb25hbDogdHJ1ZSwgcmVxdWlyZWQ6IGZhbHNlXG4gIHByaXZhdGUgX2Jhc2VUaGVtZUlkPzogc3RyaW5nO1xuICBwdWJsaWMgZ2V0IGJhc2VUaGVtZUlkKCkge1xuICAgIHJldHVybiB0aGlzLmdldFN0cmluZ0F0dHJpYnV0ZSgnYmFzZV90aGVtZV9pZCcpO1xuICB9XG4gIHB1YmxpYyBzZXQgYmFzZVRoZW1lSWQodmFsdWU6IHN0cmluZyApIHtcbiAgICB0aGlzLl9iYXNlVGhlbWVJZCA9IHZhbHVlO1xuICB9XG4gIHB1YmxpYyByZXNldEJhc2VUaGVtZUlkKCkge1xuICAgIHRoaXMuX2Jhc2VUaGVtZUlkID0gdW5kZWZpbmVkO1xuICB9XG4gIC8vIFRlbXBvcmFyaWx5IGV4cG9zZSBpbnB1dCB2YWx1ZS4gVXNlIHdpdGggY2F1dGlvbi5cbiAgcHVibGljIGdldCBiYXNlVGhlbWVJZElucHV0KCkge1xuICAgIHJldHVybiB0aGlzLl9iYXNlVGhlbWVJZFxuICB9XG5cbiAgLy8gY29uZmlndXJhdGlvbiAtIGNvbXB1dGVkOiBmYWxzZSwgb3B0aW9uYWw6IHRydWUsIHJlcXVpcmVkOiBmYWxzZVxuICBwcml2YXRlIF9jb25maWd1cmF0aW9uPzogUXVpY2tzaWdodFRoZW1lQ29uZmlndXJhdGlvbjtcbiAgcHVibGljIGdldCBjb25maWd1cmF0aW9uKCkge1xuICAgIHJldHVybiB0aGlzLmludGVycG9sYXRpb25Gb3JBdHRyaWJ1dGUoJ2NvbmZpZ3VyYXRpb24nKSBhcyBhbnk7XG4gIH1cbiAgcHVibGljIHNldCBjb25maWd1cmF0aW9uKHZhbHVlOiBRdWlja3NpZ2h0VGhlbWVDb25maWd1cmF0aW9uICkge1xuICAgIHRoaXMuX2NvbmZpZ3VyYXRpb24gPSB2YWx1ZTtcbiAgfVxuICBwdWJsaWMgcmVzZXRDb25maWd1cmF0aW9uKCkge1xuICAgIHRoaXMuX2NvbmZpZ3VyYXRpb24gPSB1bmRlZmluZWQ7XG4gIH1cbiAgLy8gVGVtcG9yYXJpbHkgZXhwb3NlIGlucHV0IHZhbHVlLiBVc2Ugd2l0aCBjYXV0aW9uLlxuICBwdWJsaWMgZ2V0IGNvbmZpZ3VyYXRpb25JbnB1dCgpIHtcbiAgICByZXR1cm4gdGhpcy5fY29uZmlndXJhdGlvblxuICB9XG5cbiAgLy8gY3JlYXRlZF90aW1lIC0gY29tcHV0ZWQ6IHRydWUsIG9wdGlvbmFsOiBmYWxzZSwgcmVxdWlyZWQ6IGZhbHNlXG4gIHB1YmxpYyBnZXQgY3JlYXRlZFRpbWUoKSB7XG4gICAgcmV0dXJuIHRoaXMuZ2V0U3RyaW5nQXR0cmlidXRlKCdjcmVhdGVkX3RpbWUnKTtcbiAgfVxuXG4gIC8vIGlkIC0gY29tcHV0ZWQ6IHRydWUsIG9wdGlvbmFsOiBmYWxzZSwgcmVxdWlyZWQ6IGZhbHNlXG4gIHB1YmxpYyBnZXQgaWQoKSB7XG4gICAgcmV0dXJuIHRoaXMuZ2V0U3RyaW5nQXR0cmlidXRlKCdpZCcpO1xuICB9XG5cbiAgLy8gbGFzdF91cGRhdGVkX3RpbWUgLSBjb21wdXRlZDogdHJ1ZSwgb3B0aW9uYWw6IGZhbHNlLCByZXF1aXJlZDogZmFsc2VcbiAgcHVibGljIGdldCBsYXN0VXBkYXRlZFRpbWUoKSB7XG4gICAgcmV0dXJuIHRoaXMuZ2V0U3RyaW5nQXR0cmlidXRlKCdsYXN0X3VwZGF0ZWRfdGltZScpO1xuICB9XG5cbiAgLy8gbmFtZSAtIGNvbXB1dGVkOiBmYWxzZSwgb3B0aW9uYWw6IHRydWUsIHJlcXVpcmVkOiBmYWxzZVxuICBwcml2YXRlIF9uYW1lPzogc3RyaW5nO1xuICBwdWJsaWMgZ2V0IG5hbWUoKSB7XG4gICAgcmV0dXJuIHRoaXMuZ2V0U3RyaW5nQXR0cmlidXRlKCduYW1lJyk7XG4gIH1cbiAgcHVibGljIHNldCBuYW1lKHZhbHVlOiBzdHJpbmcgKSB7XG4gICAgdGhpcy5fbmFtZSA9IHZhbHVlO1xuICB9XG4gIHB1YmxpYyByZXNldE5hbWUoKSB7XG4gICAgdGhpcy5fbmFtZSA9IHVuZGVmaW5lZDtcbiAgfVxuICAvLyBUZW1wb3JhcmlseSBleHBvc2UgaW5wdXQgdmFsdWUuIFVzZSB3aXRoIGNhdXRpb24uXG4gIHB1YmxpYyBnZXQgbmFtZUlucHV0KCkge1xuICAgIHJldHVybiB0aGlzLl9uYW1lXG4gIH1cblxuICAvLyBwZXJtaXNzaW9ucyAtIGNvbXB1dGVkOiBmYWxzZSwgb3B0aW9uYWw6IHRydWUsIHJlcXVpcmVkOiBmYWxzZVxuICBwcml2YXRlIF9wZXJtaXNzaW9ucz86IFF1aWNrc2lnaHRUaGVtZVBlcm1pc3Npb25zW107XG4gIHB1YmxpYyBnZXQgcGVybWlzc2lvbnMoKSB7XG4gICAgcmV0dXJuIHRoaXMuaW50ZXJwb2xhdGlvbkZvckF0dHJpYnV0ZSgncGVybWlzc2lvbnMnKSBhcyBhbnk7XG4gIH1cbiAgcHVibGljIHNldCBwZXJtaXNzaW9ucyh2YWx1ZTogUXVpY2tzaWdodFRoZW1lUGVybWlzc2lvbnNbXSApIHtcbiAgICB0aGlzLl9wZXJtaXNzaW9ucyA9IHZhbHVlO1xuICB9XG4gIHB1YmxpYyByZXNldFBlcm1pc3Npb25zKCkge1xuICAgIHRoaXMuX3Blcm1pc3Npb25zID0gdW5kZWZpbmVkO1xuICB9XG4gIC8vIFRlbXBvcmFyaWx5IGV4cG9zZSBpbnB1dCB2YWx1ZS4gVXNlIHdpdGggY2F1dGlvbi5cbiAgcHVibGljIGdldCBwZXJtaXNzaW9uc0lucHV0KCkge1xuICAgIHJldHVybiB0aGlzLl9wZXJtaXNzaW9uc1xuICB9XG5cbiAgLy8gdGFncyAtIGNvbXB1dGVkOiBmYWxzZSwgb3B0aW9uYWw6IHRydWUsIHJlcXVpcmVkOiBmYWxzZVxuICBwcml2YXRlIF90YWdzPzogUXVpY2tzaWdodFRoZW1lVGFnc1tdO1xuICBwdWJsaWMgZ2V0IHRhZ3MoKSB7XG4gICAgcmV0dXJuIHRoaXMuaW50ZXJwb2xhdGlvbkZvckF0dHJpYnV0ZSgndGFncycpIGFzIGFueTtcbiAgfVxuICBwdWJsaWMgc2V0IHRhZ3ModmFsdWU6IFF1aWNrc2lnaHRUaGVtZVRhZ3NbXSApIHtcbiAgICB0aGlzLl90YWdzID0gdmFsdWU7XG4gIH1cbiAgcHVibGljIHJlc2V0VGFncygpIHtcbiAgICB0aGlzLl90YWdzID0gdW5kZWZpbmVkO1xuICB9XG4gIC8vIFRlbXBvcmFyaWx5IGV4cG9zZSBpbnB1dCB2YWx1ZS4gVXNlIHdpdGggY2F1dGlvbi5cbiAgcHVibGljIGdldCB0YWdzSW5wdXQoKSB7XG4gICAgcmV0dXJuIHRoaXMuX3RhZ3NcbiAgfVxuXG4gIC8vIHRoZW1lX2lkIC0gY29tcHV0ZWQ6IGZhbHNlLCBvcHRpb25hbDogZmFsc2UsIHJlcXVpcmVkOiB0cnVlXG4gIHByaXZhdGUgX3RoZW1lSWQ6IHN0cmluZztcbiAgcHVibGljIGdldCB0aGVtZUlkKCkge1xuICAgIHJldHVybiB0aGlzLmdldFN0cmluZ0F0dHJpYnV0ZSgndGhlbWVfaWQnKTtcbiAgfVxuICBwdWJsaWMgc2V0IHRoZW1lSWQodmFsdWU6IHN0cmluZykge1xuICAgIHRoaXMuX3RoZW1lSWQgPSB2YWx1ZTtcbiAgfVxuICAvLyBUZW1wb3JhcmlseSBleHBvc2UgaW5wdXQgdmFsdWUuIFVzZSB3aXRoIGNhdXRpb24uXG4gIHB1YmxpYyBnZXQgdGhlbWVJZElucHV0KCkge1xuICAgIHJldHVybiB0aGlzLl90aGVtZUlkXG4gIH1cblxuICAvLyB0eXBlIC0gY29tcHV0ZWQ6IHRydWUsIG9wdGlvbmFsOiBmYWxzZSwgcmVxdWlyZWQ6IGZhbHNlXG4gIHB1YmxpYyBnZXQgdHlwZSgpIHtcbiAgICByZXR1cm4gdGhpcy5nZXRTdHJpbmdBdHRyaWJ1dGUoJ3R5cGUnKTtcbiAgfVxuXG4gIC8vIHZlcnNpb24gLSBjb21wdXRlZDogdHJ1ZSwgb3B0aW9uYWw6IGZhbHNlLCByZXF1aXJlZDogZmFsc2VcbiAgcHVibGljIGdldCB2ZXJzaW9uKCkge1xuICAgIHJldHVybiB0aGlzLmludGVycG9sYXRpb25Gb3JBdHRyaWJ1dGUoJ3ZlcnNpb24nKSBhcyBhbnk7XG4gIH1cblxuICAvLyB2ZXJzaW9uX2Rlc2NyaXB0aW9uIC0gY29tcHV0ZWQ6IGZhbHNlLCBvcHRpb25hbDogdHJ1ZSwgcmVxdWlyZWQ6IGZhbHNlXG4gIHByaXZhdGUgX3ZlcnNpb25EZXNjcmlwdGlvbj86IHN0cmluZztcbiAgcHVibGljIGdldCB2ZXJzaW9uRGVzY3JpcHRpb24oKSB7XG4gICAgcmV0dXJuIHRoaXMuZ2V0U3RyaW5nQXR0cmlidXRlKCd2ZXJzaW9uX2Rlc2NyaXB0aW9uJyk7XG4gIH1cbiAgcHVibGljIHNldCB2ZXJzaW9uRGVzY3JpcHRpb24odmFsdWU6IHN0cmluZyApIHtcbiAgICB0aGlzLl92ZXJzaW9uRGVzY3JpcHRpb24gPSB2YWx1ZTtcbiAgfVxuICBwdWJsaWMgcmVzZXRWZXJzaW9uRGVzY3JpcHRpb24oKSB7XG4gICAgdGhpcy5fdmVyc2lvbkRlc2NyaXB0aW9uID0gdW5kZWZpbmVkO1xuICB9XG4gIC8vIFRlbXBvcmFyaWx5IGV4cG9zZSBpbnB1dCB2YWx1ZS4gVXNlIHdpdGggY2F1dGlvbi5cbiAgcHVibGljIGdldCB2ZXJzaW9uRGVzY3JpcHRpb25JbnB1dCgpIHtcbiAgICByZXR1cm4gdGhpcy5fdmVyc2lvbkRlc2NyaXB0aW9uXG4gIH1cblxuICAvLyA9PT09PT09PT1cbiAgLy8gU1lOVEhFU0lTXG4gIC8vID09PT09PT09PVxuXG4gIHByb3RlY3RlZCBzeW50aGVzaXplQXR0cmlidXRlcygpOiB7IFtuYW1lOiBzdHJpbmddOiBhbnkgfSB7XG4gICAgcmV0dXJuIHtcbiAgICAgIGF3c19hY2NvdW50X2lkOiBjZGt0Zi5zdHJpbmdUb1RlcnJhZm9ybSh0aGlzLl9hd3NBY2NvdW50SWQpLFxuICAgICAgYmFzZV90aGVtZV9pZDogY2RrdGYuc3RyaW5nVG9UZXJyYWZvcm0odGhpcy5fYmFzZVRoZW1lSWQpLFxuICAgICAgY29uZmlndXJhdGlvbjogcXVpY2tzaWdodFRoZW1lQ29uZmlndXJhdGlvblRvVGVycmFmb3JtKHRoaXMuX2NvbmZpZ3VyYXRpb24pLFxuICAgICAgbmFtZTogY2RrdGYuc3RyaW5nVG9UZXJyYWZvcm0odGhpcy5fbmFtZSksXG4gICAgICBwZXJtaXNzaW9uczogY2RrdGYubGlzdE1hcHBlcihxdWlja3NpZ2h0VGhlbWVQZXJtaXNzaW9uc1RvVGVycmFmb3JtKSh0aGlzLl9wZXJtaXNzaW9ucyksXG4gICAgICB0YWdzOiBjZGt0Zi5saXN0TWFwcGVyKHF1aWNrc2lnaHRUaGVtZVRhZ3NUb1RlcnJhZm9ybSkodGhpcy5fdGFncyksXG4gICAgICB0aGVtZV9pZDogY2RrdGYuc3RyaW5nVG9UZXJyYWZvcm0odGhpcy5fdGhlbWVJZCksXG4gICAgICB2ZXJzaW9uX2Rlc2NyaXB0aW9uOiBjZGt0Zi5zdHJpbmdUb1RlcnJhZm9ybSh0aGlzLl92ZXJzaW9uRGVzY3JpcHRpb24pLFxuICAgIH07XG4gIH1cbn1cbiJdfQ==