"use strict";
// https://www.terraform.io/docs/providers/awscc/d/quicksight_theme.html
// generated from terraform resource schema
Object.defineProperty(exports, "__esModule", { value: true });
exports.dataAwsccQuicksightThemeVersionErrorsToTerraform = exports.DataAwsccQuicksightThemeVersionErrors = exports.dataAwsccQuicksightThemeVersionConfigurationToTerraform = exports.DataAwsccQuicksightThemeVersionConfiguration = exports.dataAwsccQuicksightThemeVersionConfigurationUiColorPaletteToTerraform = exports.DataAwsccQuicksightThemeVersionConfigurationUiColorPalette = exports.dataAwsccQuicksightThemeVersionConfigurationTypographyToTerraform = exports.DataAwsccQuicksightThemeVersionConfigurationTypography = exports.dataAwsccQuicksightThemeVersionConfigurationTypographyFontFamiliesToTerraform = exports.DataAwsccQuicksightThemeVersionConfigurationTypographyFontFamilies = exports.dataAwsccQuicksightThemeVersionConfigurationSheetToTerraform = exports.DataAwsccQuicksightThemeVersionConfigurationSheet = exports.dataAwsccQuicksightThemeVersionConfigurationSheetTileLayoutToTerraform = exports.DataAwsccQuicksightThemeVersionConfigurationSheetTileLayout = exports.dataAwsccQuicksightThemeVersionConfigurationSheetTileLayoutMarginToTerraform = exports.DataAwsccQuicksightThemeVersionConfigurationSheetTileLayoutMargin = exports.dataAwsccQuicksightThemeVersionConfigurationSheetTileLayoutGutterToTerraform = exports.DataAwsccQuicksightThemeVersionConfigurationSheetTileLayoutGutter = exports.dataAwsccQuicksightThemeVersionConfigurationSheetTileToTerraform = exports.DataAwsccQuicksightThemeVersionConfigurationSheetTile = exports.dataAwsccQuicksightThemeVersionConfigurationSheetTileBorderToTerraform = exports.DataAwsccQuicksightThemeVersionConfigurationSheetTileBorder = exports.dataAwsccQuicksightThemeVersionConfigurationDataColorPaletteToTerraform = exports.DataAwsccQuicksightThemeVersionConfigurationDataColorPalette = exports.dataAwsccQuicksightThemeTagsToTerraform = exports.DataAwsccQuicksightThemeTags = exports.dataAwsccQuicksightThemePermissionsToTerraform = exports.DataAwsccQuicksightThemePermissions = exports.dataAwsccQuicksightThemeConfigurationToTerraform = exports.DataAwsccQuicksightThemeConfiguration = exports.dataAwsccQuicksightThemeConfigurationUiColorPaletteToTerraform = exports.DataAwsccQuicksightThemeConfigurationUiColorPalette = exports.dataAwsccQuicksightThemeConfigurationTypographyToTerraform = exports.DataAwsccQuicksightThemeConfigurationTypography = exports.dataAwsccQuicksightThemeConfigurationTypographyFontFamiliesToTerraform = exports.DataAwsccQuicksightThemeConfigurationTypographyFontFamilies = exports.dataAwsccQuicksightThemeConfigurationSheetToTerraform = exports.DataAwsccQuicksightThemeConfigurationSheet = exports.dataAwsccQuicksightThemeConfigurationSheetTileLayoutToTerraform = exports.DataAwsccQuicksightThemeConfigurationSheetTileLayout = exports.dataAwsccQuicksightThemeConfigurationSheetTileLayoutMarginToTerraform = exports.DataAwsccQuicksightThemeConfigurationSheetTileLayoutMargin = exports.dataAwsccQuicksightThemeConfigurationSheetTileLayoutGutterToTerraform = exports.DataAwsccQuicksightThemeConfigurationSheetTileLayoutGutter = exports.dataAwsccQuicksightThemeConfigurationSheetTileToTerraform = exports.DataAwsccQuicksightThemeConfigurationSheetTile = exports.dataAwsccQuicksightThemeConfigurationSheetTileBorderToTerraform = exports.DataAwsccQuicksightThemeConfigurationSheetTileBorder = exports.dataAwsccQuicksightThemeConfigurationDataColorPaletteToTerraform = exports.DataAwsccQuicksightThemeConfigurationDataColorPalette = void 0;
exports.DataAwsccQuicksightTheme = exports.dataAwsccQuicksightThemeVersionToTerraform = exports.DataAwsccQuicksightThemeVersion = void 0;
const cdktf = require("cdktf");
class DataAwsccQuicksightThemeConfigurationDataColorPalette extends cdktf.ComplexComputedList {
    // colors - computed: true, optional: false, required: false
    get colors() {
        return this.getListAttribute('colors');
    }
    // empty_fill_color - computed: true, optional: false, required: false
    get emptyFillColor() {
        return this.getStringAttribute('empty_fill_color');
    }
    // min_max_gradient - computed: true, optional: false, required: false
    get minMaxGradient() {
        return this.getListAttribute('min_max_gradient');
    }
}
exports.DataAwsccQuicksightThemeConfigurationDataColorPalette = DataAwsccQuicksightThemeConfigurationDataColorPalette;
function dataAwsccQuicksightThemeConfigurationDataColorPaletteToTerraform(struct) {
    if (!cdktf.canInspect(struct)) {
        return struct;
    }
    return {
        colors: cdktf.listMapper(cdktf.stringToTerraform)(struct.colors),
        empty_fill_color: cdktf.stringToTerraform(struct.emptyFillColor),
        min_max_gradient: cdktf.listMapper(cdktf.stringToTerraform)(struct.minMaxGradient),
    };
}
exports.dataAwsccQuicksightThemeConfigurationDataColorPaletteToTerraform = dataAwsccQuicksightThemeConfigurationDataColorPaletteToTerraform;
class DataAwsccQuicksightThemeConfigurationSheetTileBorder extends cdktf.ComplexComputedList {
    // show - computed: true, optional: false, required: false
    get show() {
        return this.getBooleanAttribute('show');
    }
}
exports.DataAwsccQuicksightThemeConfigurationSheetTileBorder = DataAwsccQuicksightThemeConfigurationSheetTileBorder;
function dataAwsccQuicksightThemeConfigurationSheetTileBorderToTerraform(struct) {
    if (!cdktf.canInspect(struct)) {
        return struct;
    }
    return {
        show: cdktf.booleanToTerraform(struct.show),
    };
}
exports.dataAwsccQuicksightThemeConfigurationSheetTileBorderToTerraform = dataAwsccQuicksightThemeConfigurationSheetTileBorderToTerraform;
class DataAwsccQuicksightThemeConfigurationSheetTile extends cdktf.ComplexComputedList {
    // border - computed: true, optional: false, required: false
    get border() {
        return this.interpolationForAttribute('border');
    }
}
exports.DataAwsccQuicksightThemeConfigurationSheetTile = DataAwsccQuicksightThemeConfigurationSheetTile;
function dataAwsccQuicksightThemeConfigurationSheetTileToTerraform(struct) {
    if (!cdktf.canInspect(struct)) {
        return struct;
    }
    return {
        border: dataAwsccQuicksightThemeConfigurationSheetTileBorderToTerraform(struct.border),
    };
}
exports.dataAwsccQuicksightThemeConfigurationSheetTileToTerraform = dataAwsccQuicksightThemeConfigurationSheetTileToTerraform;
class DataAwsccQuicksightThemeConfigurationSheetTileLayoutGutter extends cdktf.ComplexComputedList {
    // show - computed: true, optional: false, required: false
    get show() {
        return this.getBooleanAttribute('show');
    }
}
exports.DataAwsccQuicksightThemeConfigurationSheetTileLayoutGutter = DataAwsccQuicksightThemeConfigurationSheetTileLayoutGutter;
function dataAwsccQuicksightThemeConfigurationSheetTileLayoutGutterToTerraform(struct) {
    if (!cdktf.canInspect(struct)) {
        return struct;
    }
    return {
        show: cdktf.booleanToTerraform(struct.show),
    };
}
exports.dataAwsccQuicksightThemeConfigurationSheetTileLayoutGutterToTerraform = dataAwsccQuicksightThemeConfigurationSheetTileLayoutGutterToTerraform;
class DataAwsccQuicksightThemeConfigurationSheetTileLayoutMargin extends cdktf.ComplexComputedList {
    // show - computed: true, optional: false, required: false
    get show() {
        return this.getBooleanAttribute('show');
    }
}
exports.DataAwsccQuicksightThemeConfigurationSheetTileLayoutMargin = DataAwsccQuicksightThemeConfigurationSheetTileLayoutMargin;
function dataAwsccQuicksightThemeConfigurationSheetTileLayoutMarginToTerraform(struct) {
    if (!cdktf.canInspect(struct)) {
        return struct;
    }
    return {
        show: cdktf.booleanToTerraform(struct.show),
    };
}
exports.dataAwsccQuicksightThemeConfigurationSheetTileLayoutMarginToTerraform = dataAwsccQuicksightThemeConfigurationSheetTileLayoutMarginToTerraform;
class DataAwsccQuicksightThemeConfigurationSheetTileLayout extends cdktf.ComplexComputedList {
    // gutter - computed: true, optional: false, required: false
    get gutter() {
        return this.interpolationForAttribute('gutter');
    }
    // margin - computed: true, optional: false, required: false
    get margin() {
        return this.interpolationForAttribute('margin');
    }
}
exports.DataAwsccQuicksightThemeConfigurationSheetTileLayout = DataAwsccQuicksightThemeConfigurationSheetTileLayout;
function dataAwsccQuicksightThemeConfigurationSheetTileLayoutToTerraform(struct) {
    if (!cdktf.canInspect(struct)) {
        return struct;
    }
    return {
        gutter: dataAwsccQuicksightThemeConfigurationSheetTileLayoutGutterToTerraform(struct.gutter),
        margin: dataAwsccQuicksightThemeConfigurationSheetTileLayoutMarginToTerraform(struct.margin),
    };
}
exports.dataAwsccQuicksightThemeConfigurationSheetTileLayoutToTerraform = dataAwsccQuicksightThemeConfigurationSheetTileLayoutToTerraform;
class DataAwsccQuicksightThemeConfigurationSheet extends cdktf.ComplexComputedList {
    // tile - computed: true, optional: false, required: false
    get tile() {
        return this.interpolationForAttribute('tile');
    }
    // tile_layout - computed: true, optional: false, required: false
    get tileLayout() {
        return this.interpolationForAttribute('tile_layout');
    }
}
exports.DataAwsccQuicksightThemeConfigurationSheet = DataAwsccQuicksightThemeConfigurationSheet;
function dataAwsccQuicksightThemeConfigurationSheetToTerraform(struct) {
    if (!cdktf.canInspect(struct)) {
        return struct;
    }
    return {
        tile: dataAwsccQuicksightThemeConfigurationSheetTileToTerraform(struct.tile),
        tile_layout: dataAwsccQuicksightThemeConfigurationSheetTileLayoutToTerraform(struct.tileLayout),
    };
}
exports.dataAwsccQuicksightThemeConfigurationSheetToTerraform = dataAwsccQuicksightThemeConfigurationSheetToTerraform;
class DataAwsccQuicksightThemeConfigurationTypographyFontFamilies extends cdktf.ComplexComputedList {
    // font_family - computed: true, optional: false, required: false
    get fontFamily() {
        return this.getStringAttribute('font_family');
    }
}
exports.DataAwsccQuicksightThemeConfigurationTypographyFontFamilies = DataAwsccQuicksightThemeConfigurationTypographyFontFamilies;
function dataAwsccQuicksightThemeConfigurationTypographyFontFamiliesToTerraform(struct) {
    if (!cdktf.canInspect(struct)) {
        return struct;
    }
    return {
        font_family: cdktf.stringToTerraform(struct.fontFamily),
    };
}
exports.dataAwsccQuicksightThemeConfigurationTypographyFontFamiliesToTerraform = dataAwsccQuicksightThemeConfigurationTypographyFontFamiliesToTerraform;
class DataAwsccQuicksightThemeConfigurationTypography extends cdktf.ComplexComputedList {
    // font_families - computed: true, optional: false, required: false
    get fontFamilies() {
        return this.interpolationForAttribute('font_families');
    }
}
exports.DataAwsccQuicksightThemeConfigurationTypography = DataAwsccQuicksightThemeConfigurationTypography;
function dataAwsccQuicksightThemeConfigurationTypographyToTerraform(struct) {
    if (!cdktf.canInspect(struct)) {
        return struct;
    }
    return {
        font_families: cdktf.listMapper(dataAwsccQuicksightThemeConfigurationTypographyFontFamiliesToTerraform)(struct.fontFamilies),
    };
}
exports.dataAwsccQuicksightThemeConfigurationTypographyToTerraform = dataAwsccQuicksightThemeConfigurationTypographyToTerraform;
class DataAwsccQuicksightThemeConfigurationUiColorPalette extends cdktf.ComplexComputedList {
    // accent - computed: true, optional: false, required: false
    get accent() {
        return this.getStringAttribute('accent');
    }
    // accent_foreground - computed: true, optional: false, required: false
    get accentForeground() {
        return this.getStringAttribute('accent_foreground');
    }
    // danger - computed: true, optional: false, required: false
    get danger() {
        return this.getStringAttribute('danger');
    }
    // danger_foreground - computed: true, optional: false, required: false
    get dangerForeground() {
        return this.getStringAttribute('danger_foreground');
    }
    // dimension - computed: true, optional: false, required: false
    get dimension() {
        return this.getStringAttribute('dimension');
    }
    // dimension_foreground - computed: true, optional: false, required: false
    get dimensionForeground() {
        return this.getStringAttribute('dimension_foreground');
    }
    // measure - computed: true, optional: false, required: false
    get measure() {
        return this.getStringAttribute('measure');
    }
    // measure_foreground - computed: true, optional: false, required: false
    get measureForeground() {
        return this.getStringAttribute('measure_foreground');
    }
    // primary_background - computed: true, optional: false, required: false
    get primaryBackground() {
        return this.getStringAttribute('primary_background');
    }
    // primary_foreground - computed: true, optional: false, required: false
    get primaryForeground() {
        return this.getStringAttribute('primary_foreground');
    }
    // secondary_background - computed: true, optional: false, required: false
    get secondaryBackground() {
        return this.getStringAttribute('secondary_background');
    }
    // secondary_foreground - computed: true, optional: false, required: false
    get secondaryForeground() {
        return this.getStringAttribute('secondary_foreground');
    }
    // success - computed: true, optional: false, required: false
    get success() {
        return this.getStringAttribute('success');
    }
    // success_foreground - computed: true, optional: false, required: false
    get successForeground() {
        return this.getStringAttribute('success_foreground');
    }
    // warning - computed: true, optional: false, required: false
    get warning() {
        return this.getStringAttribute('warning');
    }
    // warning_foreground - computed: true, optional: false, required: false
    get warningForeground() {
        return this.getStringAttribute('warning_foreground');
    }
}
exports.DataAwsccQuicksightThemeConfigurationUiColorPalette = DataAwsccQuicksightThemeConfigurationUiColorPalette;
function dataAwsccQuicksightThemeConfigurationUiColorPaletteToTerraform(struct) {
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
exports.dataAwsccQuicksightThemeConfigurationUiColorPaletteToTerraform = dataAwsccQuicksightThemeConfigurationUiColorPaletteToTerraform;
class DataAwsccQuicksightThemeConfiguration extends cdktf.ComplexComputedList {
    // data_color_palette - computed: true, optional: false, required: false
    get dataColorPalette() {
        return this.interpolationForAttribute('data_color_palette');
    }
    // sheet - computed: true, optional: false, required: false
    get sheet() {
        return this.interpolationForAttribute('sheet');
    }
    // typography - computed: true, optional: false, required: false
    get typography() {
        return this.interpolationForAttribute('typography');
    }
    // ui_color_palette - computed: true, optional: false, required: false
    get uiColorPalette() {
        return this.interpolationForAttribute('ui_color_palette');
    }
}
exports.DataAwsccQuicksightThemeConfiguration = DataAwsccQuicksightThemeConfiguration;
function dataAwsccQuicksightThemeConfigurationToTerraform(struct) {
    if (!cdktf.canInspect(struct)) {
        return struct;
    }
    return {
        data_color_palette: dataAwsccQuicksightThemeConfigurationDataColorPaletteToTerraform(struct.dataColorPalette),
        sheet: dataAwsccQuicksightThemeConfigurationSheetToTerraform(struct.sheet),
        typography: dataAwsccQuicksightThemeConfigurationTypographyToTerraform(struct.typography),
        ui_color_palette: dataAwsccQuicksightThemeConfigurationUiColorPaletteToTerraform(struct.uiColorPalette),
    };
}
exports.dataAwsccQuicksightThemeConfigurationToTerraform = dataAwsccQuicksightThemeConfigurationToTerraform;
class DataAwsccQuicksightThemePermissions extends cdktf.ComplexComputedList {
    // actions - computed: true, optional: false, required: false
    get actions() {
        return this.getListAttribute('actions');
    }
    // principal - computed: true, optional: false, required: false
    get principal() {
        return this.getStringAttribute('principal');
    }
}
exports.DataAwsccQuicksightThemePermissions = DataAwsccQuicksightThemePermissions;
function dataAwsccQuicksightThemePermissionsToTerraform(struct) {
    if (!cdktf.canInspect(struct)) {
        return struct;
    }
    return {
        actions: cdktf.listMapper(cdktf.stringToTerraform)(struct.actions),
        principal: cdktf.stringToTerraform(struct.principal),
    };
}
exports.dataAwsccQuicksightThemePermissionsToTerraform = dataAwsccQuicksightThemePermissionsToTerraform;
class DataAwsccQuicksightThemeTags extends cdktf.ComplexComputedList {
    // key - computed: true, optional: false, required: false
    get key() {
        return this.getStringAttribute('key');
    }
    // value - computed: true, optional: false, required: false
    get value() {
        return this.getStringAttribute('value');
    }
}
exports.DataAwsccQuicksightThemeTags = DataAwsccQuicksightThemeTags;
function dataAwsccQuicksightThemeTagsToTerraform(struct) {
    if (!cdktf.canInspect(struct)) {
        return struct;
    }
    return {
        key: cdktf.stringToTerraform(struct.key),
        value: cdktf.stringToTerraform(struct.value),
    };
}
exports.dataAwsccQuicksightThemeTagsToTerraform = dataAwsccQuicksightThemeTagsToTerraform;
class DataAwsccQuicksightThemeVersionConfigurationDataColorPalette extends cdktf.ComplexComputedList {
    // colors - computed: true, optional: false, required: false
    get colors() {
        return this.getListAttribute('colors');
    }
    // empty_fill_color - computed: true, optional: false, required: false
    get emptyFillColor() {
        return this.getStringAttribute('empty_fill_color');
    }
    // min_max_gradient - computed: true, optional: false, required: false
    get minMaxGradient() {
        return this.getListAttribute('min_max_gradient');
    }
}
exports.DataAwsccQuicksightThemeVersionConfigurationDataColorPalette = DataAwsccQuicksightThemeVersionConfigurationDataColorPalette;
function dataAwsccQuicksightThemeVersionConfigurationDataColorPaletteToTerraform(struct) {
    if (!cdktf.canInspect(struct)) {
        return struct;
    }
    return {
        colors: cdktf.listMapper(cdktf.stringToTerraform)(struct.colors),
        empty_fill_color: cdktf.stringToTerraform(struct.emptyFillColor),
        min_max_gradient: cdktf.listMapper(cdktf.stringToTerraform)(struct.minMaxGradient),
    };
}
exports.dataAwsccQuicksightThemeVersionConfigurationDataColorPaletteToTerraform = dataAwsccQuicksightThemeVersionConfigurationDataColorPaletteToTerraform;
class DataAwsccQuicksightThemeVersionConfigurationSheetTileBorder extends cdktf.ComplexComputedList {
    // show - computed: true, optional: false, required: false
    get show() {
        return this.getBooleanAttribute('show');
    }
}
exports.DataAwsccQuicksightThemeVersionConfigurationSheetTileBorder = DataAwsccQuicksightThemeVersionConfigurationSheetTileBorder;
function dataAwsccQuicksightThemeVersionConfigurationSheetTileBorderToTerraform(struct) {
    if (!cdktf.canInspect(struct)) {
        return struct;
    }
    return {
        show: cdktf.booleanToTerraform(struct.show),
    };
}
exports.dataAwsccQuicksightThemeVersionConfigurationSheetTileBorderToTerraform = dataAwsccQuicksightThemeVersionConfigurationSheetTileBorderToTerraform;
class DataAwsccQuicksightThemeVersionConfigurationSheetTile extends cdktf.ComplexComputedList {
    // border - computed: true, optional: false, required: false
    get border() {
        return this.interpolationForAttribute('border');
    }
}
exports.DataAwsccQuicksightThemeVersionConfigurationSheetTile = DataAwsccQuicksightThemeVersionConfigurationSheetTile;
function dataAwsccQuicksightThemeVersionConfigurationSheetTileToTerraform(struct) {
    if (!cdktf.canInspect(struct)) {
        return struct;
    }
    return {
        border: dataAwsccQuicksightThemeVersionConfigurationSheetTileBorderToTerraform(struct.border),
    };
}
exports.dataAwsccQuicksightThemeVersionConfigurationSheetTileToTerraform = dataAwsccQuicksightThemeVersionConfigurationSheetTileToTerraform;
class DataAwsccQuicksightThemeVersionConfigurationSheetTileLayoutGutter extends cdktf.ComplexComputedList {
    // show - computed: true, optional: false, required: false
    get show() {
        return this.getBooleanAttribute('show');
    }
}
exports.DataAwsccQuicksightThemeVersionConfigurationSheetTileLayoutGutter = DataAwsccQuicksightThemeVersionConfigurationSheetTileLayoutGutter;
function dataAwsccQuicksightThemeVersionConfigurationSheetTileLayoutGutterToTerraform(struct) {
    if (!cdktf.canInspect(struct)) {
        return struct;
    }
    return {
        show: cdktf.booleanToTerraform(struct.show),
    };
}
exports.dataAwsccQuicksightThemeVersionConfigurationSheetTileLayoutGutterToTerraform = dataAwsccQuicksightThemeVersionConfigurationSheetTileLayoutGutterToTerraform;
class DataAwsccQuicksightThemeVersionConfigurationSheetTileLayoutMargin extends cdktf.ComplexComputedList {
    // show - computed: true, optional: false, required: false
    get show() {
        return this.getBooleanAttribute('show');
    }
}
exports.DataAwsccQuicksightThemeVersionConfigurationSheetTileLayoutMargin = DataAwsccQuicksightThemeVersionConfigurationSheetTileLayoutMargin;
function dataAwsccQuicksightThemeVersionConfigurationSheetTileLayoutMarginToTerraform(struct) {
    if (!cdktf.canInspect(struct)) {
        return struct;
    }
    return {
        show: cdktf.booleanToTerraform(struct.show),
    };
}
exports.dataAwsccQuicksightThemeVersionConfigurationSheetTileLayoutMarginToTerraform = dataAwsccQuicksightThemeVersionConfigurationSheetTileLayoutMarginToTerraform;
class DataAwsccQuicksightThemeVersionConfigurationSheetTileLayout extends cdktf.ComplexComputedList {
    // gutter - computed: true, optional: false, required: false
    get gutter() {
        return this.interpolationForAttribute('gutter');
    }
    // margin - computed: true, optional: false, required: false
    get margin() {
        return this.interpolationForAttribute('margin');
    }
}
exports.DataAwsccQuicksightThemeVersionConfigurationSheetTileLayout = DataAwsccQuicksightThemeVersionConfigurationSheetTileLayout;
function dataAwsccQuicksightThemeVersionConfigurationSheetTileLayoutToTerraform(struct) {
    if (!cdktf.canInspect(struct)) {
        return struct;
    }
    return {
        gutter: dataAwsccQuicksightThemeVersionConfigurationSheetTileLayoutGutterToTerraform(struct.gutter),
        margin: dataAwsccQuicksightThemeVersionConfigurationSheetTileLayoutMarginToTerraform(struct.margin),
    };
}
exports.dataAwsccQuicksightThemeVersionConfigurationSheetTileLayoutToTerraform = dataAwsccQuicksightThemeVersionConfigurationSheetTileLayoutToTerraform;
class DataAwsccQuicksightThemeVersionConfigurationSheet extends cdktf.ComplexComputedList {
    // tile - computed: true, optional: false, required: false
    get tile() {
        return this.interpolationForAttribute('tile');
    }
    // tile_layout - computed: true, optional: false, required: false
    get tileLayout() {
        return this.interpolationForAttribute('tile_layout');
    }
}
exports.DataAwsccQuicksightThemeVersionConfigurationSheet = DataAwsccQuicksightThemeVersionConfigurationSheet;
function dataAwsccQuicksightThemeVersionConfigurationSheetToTerraform(struct) {
    if (!cdktf.canInspect(struct)) {
        return struct;
    }
    return {
        tile: dataAwsccQuicksightThemeVersionConfigurationSheetTileToTerraform(struct.tile),
        tile_layout: dataAwsccQuicksightThemeVersionConfigurationSheetTileLayoutToTerraform(struct.tileLayout),
    };
}
exports.dataAwsccQuicksightThemeVersionConfigurationSheetToTerraform = dataAwsccQuicksightThemeVersionConfigurationSheetToTerraform;
class DataAwsccQuicksightThemeVersionConfigurationTypographyFontFamilies extends cdktf.ComplexComputedList {
    // font_family - computed: true, optional: false, required: false
    get fontFamily() {
        return this.getStringAttribute('font_family');
    }
}
exports.DataAwsccQuicksightThemeVersionConfigurationTypographyFontFamilies = DataAwsccQuicksightThemeVersionConfigurationTypographyFontFamilies;
function dataAwsccQuicksightThemeVersionConfigurationTypographyFontFamiliesToTerraform(struct) {
    if (!cdktf.canInspect(struct)) {
        return struct;
    }
    return {
        font_family: cdktf.stringToTerraform(struct.fontFamily),
    };
}
exports.dataAwsccQuicksightThemeVersionConfigurationTypographyFontFamiliesToTerraform = dataAwsccQuicksightThemeVersionConfigurationTypographyFontFamiliesToTerraform;
class DataAwsccQuicksightThemeVersionConfigurationTypography extends cdktf.ComplexComputedList {
    // font_families - computed: true, optional: false, required: false
    get fontFamilies() {
        return this.interpolationForAttribute('font_families');
    }
}
exports.DataAwsccQuicksightThemeVersionConfigurationTypography = DataAwsccQuicksightThemeVersionConfigurationTypography;
function dataAwsccQuicksightThemeVersionConfigurationTypographyToTerraform(struct) {
    if (!cdktf.canInspect(struct)) {
        return struct;
    }
    return {
        font_families: cdktf.listMapper(dataAwsccQuicksightThemeVersionConfigurationTypographyFontFamiliesToTerraform)(struct.fontFamilies),
    };
}
exports.dataAwsccQuicksightThemeVersionConfigurationTypographyToTerraform = dataAwsccQuicksightThemeVersionConfigurationTypographyToTerraform;
class DataAwsccQuicksightThemeVersionConfigurationUiColorPalette extends cdktf.ComplexComputedList {
    // accent - computed: true, optional: false, required: false
    get accent() {
        return this.getStringAttribute('accent');
    }
    // accent_foreground - computed: true, optional: false, required: false
    get accentForeground() {
        return this.getStringAttribute('accent_foreground');
    }
    // danger - computed: true, optional: false, required: false
    get danger() {
        return this.getStringAttribute('danger');
    }
    // danger_foreground - computed: true, optional: false, required: false
    get dangerForeground() {
        return this.getStringAttribute('danger_foreground');
    }
    // dimension - computed: true, optional: false, required: false
    get dimension() {
        return this.getStringAttribute('dimension');
    }
    // dimension_foreground - computed: true, optional: false, required: false
    get dimensionForeground() {
        return this.getStringAttribute('dimension_foreground');
    }
    // measure - computed: true, optional: false, required: false
    get measure() {
        return this.getStringAttribute('measure');
    }
    // measure_foreground - computed: true, optional: false, required: false
    get measureForeground() {
        return this.getStringAttribute('measure_foreground');
    }
    // primary_background - computed: true, optional: false, required: false
    get primaryBackground() {
        return this.getStringAttribute('primary_background');
    }
    // primary_foreground - computed: true, optional: false, required: false
    get primaryForeground() {
        return this.getStringAttribute('primary_foreground');
    }
    // secondary_background - computed: true, optional: false, required: false
    get secondaryBackground() {
        return this.getStringAttribute('secondary_background');
    }
    // secondary_foreground - computed: true, optional: false, required: false
    get secondaryForeground() {
        return this.getStringAttribute('secondary_foreground');
    }
    // success - computed: true, optional: false, required: false
    get success() {
        return this.getStringAttribute('success');
    }
    // success_foreground - computed: true, optional: false, required: false
    get successForeground() {
        return this.getStringAttribute('success_foreground');
    }
    // warning - computed: true, optional: false, required: false
    get warning() {
        return this.getStringAttribute('warning');
    }
    // warning_foreground - computed: true, optional: false, required: false
    get warningForeground() {
        return this.getStringAttribute('warning_foreground');
    }
}
exports.DataAwsccQuicksightThemeVersionConfigurationUiColorPalette = DataAwsccQuicksightThemeVersionConfigurationUiColorPalette;
function dataAwsccQuicksightThemeVersionConfigurationUiColorPaletteToTerraform(struct) {
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
exports.dataAwsccQuicksightThemeVersionConfigurationUiColorPaletteToTerraform = dataAwsccQuicksightThemeVersionConfigurationUiColorPaletteToTerraform;
class DataAwsccQuicksightThemeVersionConfiguration extends cdktf.ComplexComputedList {
    // data_color_palette - computed: true, optional: false, required: false
    get dataColorPalette() {
        return this.interpolationForAttribute('data_color_palette');
    }
    // sheet - computed: true, optional: false, required: false
    get sheet() {
        return this.interpolationForAttribute('sheet');
    }
    // typography - computed: true, optional: false, required: false
    get typography() {
        return this.interpolationForAttribute('typography');
    }
    // ui_color_palette - computed: true, optional: false, required: false
    get uiColorPalette() {
        return this.interpolationForAttribute('ui_color_palette');
    }
}
exports.DataAwsccQuicksightThemeVersionConfiguration = DataAwsccQuicksightThemeVersionConfiguration;
function dataAwsccQuicksightThemeVersionConfigurationToTerraform(struct) {
    if (!cdktf.canInspect(struct)) {
        return struct;
    }
    return {
        data_color_palette: dataAwsccQuicksightThemeVersionConfigurationDataColorPaletteToTerraform(struct.dataColorPalette),
        sheet: dataAwsccQuicksightThemeVersionConfigurationSheetToTerraform(struct.sheet),
        typography: dataAwsccQuicksightThemeVersionConfigurationTypographyToTerraform(struct.typography),
        ui_color_palette: dataAwsccQuicksightThemeVersionConfigurationUiColorPaletteToTerraform(struct.uiColorPalette),
    };
}
exports.dataAwsccQuicksightThemeVersionConfigurationToTerraform = dataAwsccQuicksightThemeVersionConfigurationToTerraform;
class DataAwsccQuicksightThemeVersionErrors extends cdktf.ComplexComputedList {
    // message - computed: true, optional: false, required: false
    get message() {
        return this.getStringAttribute('message');
    }
    // type - computed: true, optional: false, required: false
    get type() {
        return this.getStringAttribute('type');
    }
}
exports.DataAwsccQuicksightThemeVersionErrors = DataAwsccQuicksightThemeVersionErrors;
function dataAwsccQuicksightThemeVersionErrorsToTerraform(struct) {
    if (!cdktf.canInspect(struct)) {
        return struct;
    }
    return {
        message: cdktf.stringToTerraform(struct.message),
        type: cdktf.stringToTerraform(struct.type),
    };
}
exports.dataAwsccQuicksightThemeVersionErrorsToTerraform = dataAwsccQuicksightThemeVersionErrorsToTerraform;
class DataAwsccQuicksightThemeVersion extends cdktf.ComplexComputedList {
    // arn - computed: true, optional: false, required: false
    get arn() {
        return this.getStringAttribute('arn');
    }
    // base_theme_id - computed: true, optional: false, required: false
    get baseThemeId() {
        return this.getStringAttribute('base_theme_id');
    }
    // configuration - computed: true, optional: false, required: false
    get configuration() {
        return this.interpolationForAttribute('configuration');
    }
    // created_time - computed: true, optional: false, required: false
    get createdTime() {
        return this.getStringAttribute('created_time');
    }
    // description - computed: true, optional: false, required: false
    get description() {
        return this.getStringAttribute('description');
    }
    // errors - computed: true, optional: false, required: false
    get errors() {
        return this.interpolationForAttribute('errors');
    }
    // status - computed: true, optional: false, required: false
    get status() {
        return this.getStringAttribute('status');
    }
    // version_number - computed: true, optional: false, required: false
    get versionNumber() {
        return this.getNumberAttribute('version_number');
    }
}
exports.DataAwsccQuicksightThemeVersion = DataAwsccQuicksightThemeVersion;
function dataAwsccQuicksightThemeVersionToTerraform(struct) {
    if (!cdktf.canInspect(struct)) {
        return struct;
    }
    return {
        arn: cdktf.stringToTerraform(struct.arn),
        base_theme_id: cdktf.stringToTerraform(struct.baseThemeId),
        configuration: dataAwsccQuicksightThemeVersionConfigurationToTerraform(struct.configuration),
        created_time: cdktf.stringToTerraform(struct.createdTime),
        description: cdktf.stringToTerraform(struct.description),
        errors: cdktf.listMapper(dataAwsccQuicksightThemeVersionErrorsToTerraform)(struct.errors),
        status: cdktf.stringToTerraform(struct.status),
        version_number: cdktf.numberToTerraform(struct.versionNumber),
    };
}
exports.dataAwsccQuicksightThemeVersionToTerraform = dataAwsccQuicksightThemeVersionToTerraform;
/**
* Represents a {@link https://www.terraform.io/docs/providers/awscc/d/quicksight_theme.html awscc_quicksight_theme}
*/
class DataAwsccQuicksightTheme extends cdktf.TerraformDataSource {
    // ===========
    // INITIALIZER
    // ===========
    /**
    * Create a new {@link https://www.terraform.io/docs/providers/awscc/d/quicksight_theme.html awscc_quicksight_theme} Data Source
    *
    * @param scope The scope in which to define this construct
    * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
    * @param options DataAwsccQuicksightThemeConfig
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
    // base_theme_id - computed: true, optional: false, required: false
    get baseThemeId() {
        return this.getStringAttribute('base_theme_id');
    }
    // configuration - computed: true, optional: false, required: false
    get configuration() {
        return this.interpolationForAttribute('configuration');
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
    // tags - computed: true, optional: false, required: false
    get tags() {
        return this.interpolationForAttribute('tags');
    }
    // theme_id - computed: true, optional: false, required: false
    get themeId() {
        return this.getStringAttribute('theme_id');
    }
    // type - computed: true, optional: false, required: false
    get type() {
        return this.getStringAttribute('type');
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
exports.DataAwsccQuicksightTheme = DataAwsccQuicksightTheme;
// =================
// STATIC PROPERTIES
// =================
DataAwsccQuicksightTheme.tfResourceType = "awscc_quicksight_theme";
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZGF0YS1hd3NjYy1xdWlja3NpZ2h0LXRoZW1lLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiZGF0YS1hd3NjYy1xdWlja3NpZ2h0LXRoZW1lLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7QUFBQSx3RUFBd0U7QUFDeEUsMkNBQTJDOzs7O0FBRzNDLCtCQUErQjtBQVkvQixNQUFhLHFEQUFzRCxTQUFRLEtBQUssQ0FBQyxtQkFBbUI7SUFFbEcsNERBQTREO0lBQzVELElBQVcsTUFBTTtRQUNmLE9BQU8sSUFBSSxDQUFDLGdCQUFnQixDQUFDLFFBQVEsQ0FBQyxDQUFDO0lBQ3pDLENBQUM7SUFFRCxzRUFBc0U7SUFDdEUsSUFBVyxjQUFjO1FBQ3ZCLE9BQU8sSUFBSSxDQUFDLGtCQUFrQixDQUFDLGtCQUFrQixDQUFDLENBQUM7SUFDckQsQ0FBQztJQUVELHNFQUFzRTtJQUN0RSxJQUFXLGNBQWM7UUFDdkIsT0FBTyxJQUFJLENBQUMsZ0JBQWdCLENBQUMsa0JBQWtCLENBQUMsQ0FBQztJQUNuRCxDQUFDO0NBQ0Y7QUFoQkQsc0hBZ0JDO0FBRUQsU0FBZ0IsZ0VBQWdFLENBQUMsTUFBOEQ7SUFDN0ksSUFBSSxDQUFDLEtBQUssQ0FBQyxVQUFVLENBQUMsTUFBTSxDQUFDLEVBQUU7UUFBRSxPQUFPLE1BQU0sQ0FBQztLQUFFO0lBQ2pELE9BQU87UUFDTCxNQUFNLEVBQUUsS0FBSyxDQUFDLFVBQVUsQ0FBQyxLQUFLLENBQUMsaUJBQWlCLENBQUMsQ0FBQyxNQUFPLENBQUMsTUFBTSxDQUFDO1FBQ2pFLGdCQUFnQixFQUFFLEtBQUssQ0FBQyxpQkFBaUIsQ0FBQyxNQUFPLENBQUMsY0FBYyxDQUFDO1FBQ2pFLGdCQUFnQixFQUFFLEtBQUssQ0FBQyxVQUFVLENBQUMsS0FBSyxDQUFDLGlCQUFpQixDQUFDLENBQUMsTUFBTyxDQUFDLGNBQWMsQ0FBQztLQUNwRixDQUFBO0FBQ0gsQ0FBQztBQVBELDRJQU9DO0FBRUQsTUFBYSxvREFBcUQsU0FBUSxL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LE9BQU8sSUFBSSxDQUFDLHlCQUF5QixDQUFDLFNBQVMsQ0FBUSxDQUFDO0lBQzFELENBQUM7SUFFRCx5RUFBeUU7SUFDekUsSUFBVyxrQkFBa0I7UUFDM0IsT0FBTyxJQUFJLENBQUMsa0JBQWtCLENBQUMscUJBQXFCLENBQUMsQ0FBQztJQUN4RCxDQUFDO0lBRUQsWUFBWTtJQUNaLFlBQVk7SUFDWixZQUFZO0lBRUYsb0JBQW9CO1FBQzVCLE9BQU87WUFDTCxFQUFFLEVBQUUsS0FBSyxDQUFDLGlCQUFpQixDQUFDLElBQUksQ0FBQyxHQUFHLENBQUM7U0FDdEMsQ0FBQztJQUNKLENBQUM7O0FBMUhILDREQTJIQztBQXpIQyxvQkFBb0I7QUFDcEIsb0JBQW9CO0FBQ3BCLG9CQUFvQjtBQUNHLHVDQUFjLEdBQVcsd0JBQXdCLENBQUMiLCJzb3VyY2VzQ29udGVudCI6WyIvLyBodHRwczovL3d3dy50ZXJyYWZvcm0uaW8vZG9jcy9wcm92aWRlcnMvYXdzY2MvZC9xdWlja3NpZ2h0X3RoZW1lLmh0bWxcbi8vIGdlbmVyYXRlZCBmcm9tIHRlcnJhZm9ybSByZXNvdXJjZSBzY2hlbWFcblxuaW1wb3J0IHsgQ29uc3RydWN0IH0gZnJvbSAnY29uc3RydWN0cyc7XG5pbXBvcnQgKiBhcyBjZGt0ZiBmcm9tICdjZGt0Zic7XG5cbi8vIENvbmZpZ3VyYXRpb25cblxuZXhwb3J0IGludGVyZmFjZSBEYXRhQXdzY2NRdWlja3NpZ2h0VGhlbWVDb25maWcgZXh0ZW5kcyBjZGt0Zi5UZXJyYWZvcm1NZXRhQXJndW1lbnRzIHtcbiAgLyoqXG4gICogVW5pcXVlbHkgaWRlbnRpZmllcyB0aGUgcmVzb3VyY2UuXG4gICogXG4gICogRG9jcyBhdCBUZXJyYWZvcm0gUmVnaXN0cnk6IHtAbGluayBodHRwczovL3d3dy50ZXJyYWZvcm0uaW8vZG9jcy9wcm92aWRlcnMvYXdzY2MvZC9xdWlja3NpZ2h0X3RoZW1lLmh0bWwjaWQgRGF0YUF3c2NjUXVpY2tzaWdodFRoZW1lI2lkfVxuICAqL1xuICByZWFkb25seSBpZDogc3RyaW5nO1xufVxuZXhwb3J0IGNsYXNzIERhdGFBd3NjY1F1aWNrc2lnaHRUaGVtZUNvbmZpZ3VyYXRpb25EYXRhQ29sb3JQYWxldHRlIGV4dGVuZHMgY2RrdGYuQ29tcGxleENvbXB1dGVkTGlzdCB7XG5cbiAgLy8gY29sb3JzIC0gY29tcHV0ZWQ6IHRydWUsIG9wdGlvbmFsOiBmYWxzZSwgcmVxdWlyZWQ6IGZhbHNlXG4gIHB1YmxpYyBnZXQgY29sb3JzKCkge1xuICAgIHJldHVybiB0aGlzLmdldExpc3RBdHRyaWJ1dGUoJ2NvbG9ycycpO1xuICB9XG5cbiAgLy8gZW1wdHlfZmlsbF9jb2xvciAtIGNvbXB1dGVkOiB0cnVlLCBvcHRpb25hbDogZmFsc2UsIHJlcXVpcmVkOiBmYWxzZVxuICBwdWJsaWMgZ2V0IGVtcHR5RmlsbENvbG9yKCkge1xuICAgIHJldHVybiB0aGlzLmdldFN0cmluZ0F0dHJpYnV0ZSgnZW1wdHlfZmlsbF9jb2xvcicpO1xuICB9XG5cbiAgLy8gbWluX21heF9ncmFkaWVudCAtIGNvbXB1dGVkOiB0cnVlLCBvcHRpb25hbDogZmFsc2UsIHJlcXVpcmVkOiBmYWxzZVxuICBwdWJsaWMgZ2V0IG1pbk1heEdyYWRpZW50KCkge1xuICAgIHJldHVybiB0aGlzLmdldExpc3RBdHRyaWJ1dGUoJ21pbl9tYXhfZ3JhZGllbnQnKTtcbiAgfVxufVxuXG5leHBvcnQgZnVuY3Rpb24gZGF0YUF3c2NjUXVpY2tzaWdodFRoZW1lQ29uZmlndXJhdGlvbkRhdGFDb2xvclBhbGV0dGVUb1RlcnJhZm9ybShzdHJ1Y3Q/OiBEYXRhQXdzY2NRdWlja3NpZ2h0VGhlbWVDb25maWd1cmF0aW9uRGF0YUNvbG9yUGFsZXR0ZSk6IGFueSB7XG4gIGlmICghY2RrdGYuY2FuSW5zcGVjdChzdHJ1Y3QpKSB7IHJldHVybiBzdHJ1Y3Q7IH1cbiAgcmV0dXJuIHtcbiAgICBjb2xvcnM6IGNka3RmLmxpc3RNYXBwZXIoY2RrdGYuc3RyaW5nVG9UZXJyYWZvcm0pKHN0cnVjdCEuY29sb3JzKSxcbiAgICBlbXB0eV9maWxsX2NvbG9yOiBjZGt0Zi5zdHJpbmdUb1RlcnJhZm9ybShzdHJ1Y3QhLmVtcHR5RmlsbENvbG9yKSxcbiAgICBtaW5fbWF4X2dyYWRpZW50OiBjZGt0Zi5saXN0TWFwcGVyKGNka3RmLnN0cmluZ1RvVGVycmFmb3JtKShzdHJ1Y3QhLm1pbk1heEdyYWRpZW50KSxcbiAgfVxufVxuXG5leHBvcnQgY2xhc3MgRGF0YUF3c2NjUXVpY2tzaWdodFRoZW1lQ29uZmlndXJhdGlvblNoZWV0VGlsZUJvcmRlciBleHRlbmRzIGNka3RmLkNvbXBsZXhDb21wdXRlZExpc3Qge1xuXG4gIC8vIHNob3cgLSBjb21wdXRlZDogdHJ1ZSwgb3B0aW9uYWw6IGZhbHNlLCByZXF1aXJlZDogZmFsc2VcbiAgcHVibGljIGdldCBzaG93KCkge1xuICAgIHJldHVybiB0aGlzLmdldEJvb2xlYW5BdHRyaWJ1dGUoJ3Nob3cnKTtcbiAgfVxufVxuXG5leHBvcnQgZnVuY3Rpb24gZGF0YUF3c2NjUXVpY2tzaWdodFRoZW1lQ29uZmlndXJhdGlvblNoZWV0VGlsZUJvcmRlclRvVGVycmFmb3JtKHN0cnVjdD86IERhdGFBd3NjY1F1aWNrc2lnaHRUaGVtZUNvbmZpZ3VyYXRpb25TaGVldFRpbGVCb3JkZXIpOiBhbnkge1xuICBpZiAoIWNka3RmLmNhbkluc3BlY3Qoc3RydWN0KSkgeyByZXR1cm4gc3RydWN0OyB9XG4gIHJldHVybiB7XG4gICAgc2hvdzogY2RrdGYuYm9vbGVhblRvVGVycmFmb3JtKHN0cnVjdCEuc2hvdyksXG4gIH1cbn1cblxuZXhwb3J0IGNsYXNzIERhdGFBd3NjY1F1aWNrc2lnaHRUaGVtZUNvbmZpZ3VyYXRpb25TaGVldFRpbGUgZXh0ZW5kcyBjZGt0Zi5Db21wbGV4Q29tcHV0ZWRMaXN0IHtcblxuICAvLyBib3JkZXIgLSBjb21wdXRlZDogdHJ1ZSwgb3B0aW9uYWw6IGZhbHNlLCByZXF1aXJlZDogZmFsc2VcbiAgcHVibGljIGdldCBib3JkZXIoKSB7XG4gICAgcmV0dXJuIHRoaXMuaW50ZXJwb2xhdGlvbkZvckF0dHJpYnV0ZSgnYm9yZGVyJykgYXMgYW55O1xuICB9XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBkYXRhQXdzY2NRdWlja3NpZ2h0VGhlbWVDb25maWd1cmF0aW9uU2hlZXRUaWxlVG9UZXJyYWZvcm0oc3RydWN0PzogRGF0YUF3c2NjUXVpY2tzaWdodFRoZW1lQ29uZmlndXJhdGlvblNoZWV0VGlsZSk6IGFueSB7XG4gIGlmICghY2RrdGYuY2FuSW5zcGVjdChzdHJ1Y3QpKSB7IHJldHVybiBzdHJ1Y3Q7IH1cbiAgcmV0dXJuIHtcbiAgICBib3JkZXI6IGRhdGFBd3NjY1F1aWNrc2lnaHRUaGVtZUNvbmZpZ3VyYXRpb25TaGVldFRpbGVCb3JkZXJUb1RlcnJhZm9ybShzdHJ1Y3QhLmJvcmRlciksXG4gIH1cbn1cblxuZXhwb3J0IGNsYXNzIERhdGFBd3NjY1F1aWNrc2lnaHRUaGVtZUNvbmZpZ3VyYXRpb25TaGVldFRpbGVMYXlvdXRHdXR0ZXIgZXh0ZW5kcyBjZGt0Zi5Db21wbGV4Q29tcHV0ZWRMaXN0IHtcblxuICAvLyBzaG93IC0gY29tcHV0ZWQ6IHRydWUsIG9wdGlvbmFsOiBmYWxzZSwgcmVxdWlyZWQ6IGZhbHNlXG4gIHB1YmxpYyBnZXQgc2hvdygpIHtcbiAgICByZXR1cm4gdGhpcy5nZXRCb29sZWFuQXR0cmlidXRlKCdzaG93Jyk7XG4gIH1cbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGRhdGFBd3NjY1F1aWNrc2lnaHRUaGVtZUNvbmZpZ3VyYXRpb25TaGVldFRpbGVMYXlvdXRHdXR0ZXJUb1RlcnJhZm9ybShzdHJ1Y3Q/OiBEYXRhQXdzY2NRdWlja3NpZ2h0VGhlbWVDb25maWd1cmF0aW9uU2hlZXRUaWxlTGF5b3V0R3V0dGVyKTogYW55IHtcbiAgaWYgKCFjZGt0Zi5jYW5JbnNwZWN0KHN0cnVjdCkpIHsgcmV0dXJuIHN0cnVjdDsgfVxuICByZXR1cm4ge1xuICAgIHNob3c6IGNka3RmLmJvb2xlYW5Ub1RlcnJhZm9ybShzdHJ1Y3QhLnNob3cpLFxuICB9XG59XG5cbmV4cG9ydCBjbGFzcyBEYXRhQXdzY2NRdWlja3NpZ2h0VGhlbWVDb25maWd1cmF0aW9uU2hlZXRUaWxlTGF5b3V0TWFyZ2luIGV4dGVuZHMgY2RrdGYuQ29tcGxleENvbXB1dGVkTGlzdCB7XG5cbiAgLy8gc2hvdyAtIGNvbXB1dGVkOiB0cnVlLCBvcHRpb25hbDogZmFsc2UsIHJlcXVpcmVkOiBmYWxzZVxuICBwdWJsaWMgZ2V0IHNob3coKSB7XG4gICAgcmV0dXJuIHRoaXMuZ2V0Qm9vbGVhbkF0dHJpYnV0ZSgnc2hvdycpO1xuICB9XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBkYXRhQXdzY2NRdWlja3NpZ2h0VGhlbWVDb25maWd1cmF0aW9uU2hlZXRUaWxlTGF5b3V0TWFyZ2luVG9UZXJyYWZvcm0oc3RydWN0PzogRGF0YUF3c2NjUXVpY2tzaWdodFRoZW1lQ29uZmlndXJhdGlvblNoZWV0VGlsZUxheW91dE1hcmdpbik6IGFueSB7XG4gIGlmICghY2RrdGYuY2FuSW5zcGVjdChzdHJ1Y3QpKSB7IHJldHVybiBzdHJ1Y3Q7IH1cbiAgcmV0dXJuIHtcbiAgICBzaG93OiBjZGt0Zi5ib29sZWFuVG9UZXJyYWZvcm0oc3RydWN0IS5zaG93KSxcbiAgfVxufVxuXG5leHBvcnQgY2xhc3MgRGF0YUF3c2NjUXVpY2tzaWdodFRoZW1lQ29uZmlndXJhdGlvblNoZWV0VGlsZUxheW91dCBleHRlbmRzIGNka3RmLkNvbXBsZXhDb21wdXRlZExpc3Qge1xuXG4gIC8vIGd1dHRlciAtIGNvbXB1dGVkOiB0cnVlLCBvcHRpb25hbDogZmFsc2UsIHJlcXVpcmVkOiBmYWxzZVxuICBwdWJsaWMgZ2V0IGd1dHRlcigpIHtcbiAgICByZXR1cm4gdGhpcy5pbnRlcnBvbGF0aW9uRm9yQXR0cmlidXRlKCdndXR0ZXInKSBhcyBhbnk7XG4gIH1cblxuICAvLyBtYXJnaW4gLSBjb21wdXRlZDogdHJ1ZSwgb3B0aW9uYWw6IGZhbHNlLCByZXF1aXJlZDogZmFsc2VcbiAgcHVibGljIGdldCBtYXJnaW4oKSB7XG4gICAgcmV0dXJuIHRoaXMuaW50ZXJwb2xhdGlvbkZvckF0dHJpYnV0ZSgnbWFyZ2luJykgYXMgYW55O1xuICB9XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBkYXRhQXdzY2NRdWlja3NpZ2h0VGhlbWVDb25maWd1cmF0aW9uU2hlZXRUaWxlTGF5b3V0VG9UZXJyYWZvcm0oc3RydWN0PzogRGF0YUF3c2NjUXVpY2tzaWdodFRoZW1lQ29uZmlndXJhdGlvblNoZWV0VGlsZUxheW91dCk6IGFueSB7XG4gIGlmICghY2RrdGYuY2FuSW5zcGVjdChzdHJ1Y3QpKSB7IHJldHVybiBzdHJ1Y3Q7IH1cbiAgcmV0dXJuIHtcbiAgICBndXR0ZXI6IGRhdGFBd3NjY1F1aWNrc2lnaHRUaGVtZUNvbmZpZ3VyYXRpb25TaGVldFRpbGVMYXlvdXRHdXR0ZXJUb1RlcnJhZm9ybShzdHJ1Y3QhLmd1dHRlciksXG4gICAgbWFyZ2luOiBkYXRhQXdzY2NRdWlja3NpZ2h0VGhlbWVDb25maWd1cmF0aW9uU2hlZXRUaWxlTGF5b3V0TWFyZ2luVG9UZXJyYWZvcm0oc3RydWN0IS5tYXJnaW4pLFxuICB9XG59XG5cbmV4cG9ydCBjbGFzcyBEYXRhQXdzY2NRdWlja3NpZ2h0VGhlbWVDb25maWd1cmF0aW9uU2hlZXQgZXh0ZW5kcyBjZGt0Zi5Db21wbGV4Q29tcHV0ZWRMaXN0IHtcblxuICAvLyB0aWxlIC0gY29tcHV0ZWQ6IHRydWUsIG9wdGlvbmFsOiBmYWxzZSwgcmVxdWlyZWQ6IGZhbHNlXG4gIHB1YmxpYyBnZXQgdGlsZSgpIHtcbiAgICByZXR1cm4gdGhpcy5pbnRlcnBvbGF0aW9uRm9yQXR0cmlidXRlKCd0aWxlJykgYXMgYW55O1xuICB9XG5cbiAgLy8gdGlsZV9sYXlvdXQgLSBjb21wdXRlZDogdHJ1ZSwgb3B0aW9uYWw6IGZhbHNlLCByZXF1aXJlZDogZmFsc2VcbiAgcHVibGljIGdldCB0aWxlTGF5b3V0KCkge1xuICAgIHJldHVybiB0aGlzLmludGVycG9sYXRpb25Gb3JBdHRyaWJ1dGUoJ3RpbGVfbGF5b3V0JykgYXMgYW55O1xuICB9XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBkYXRhQXdzY2NRdWlja3NpZ2h0VGhlbWVDb25maWd1cmF0aW9uU2hlZXRUb1RlcnJhZm9ybShzdHJ1Y3Q/OiBEYXRhQXdzY2NRdWlja3NpZ2h0VGhlbWVDb25maWd1cmF0aW9uU2hlZXQpOiBhbnkge1xuICBpZiAoIWNka3RmLmNhbkluc3BlY3Qoc3RydWN0KSkgeyByZXR1cm4gc3RydWN0OyB9XG4gIHJldHVybiB7XG4gICAgdGlsZTogZGF0YUF3c2NjUXVpY2tzaWdodFRoZW1lQ29uZmlndXJhdGlvblNoZWV0VGlsZVRvVGVycmFmb3JtKHN0cnVjdCEudGlsZSksXG4gICAgdGlsZV9sYXlvdXQ6IGRhdGFBd3NjY1F1aWNrc2lnaHRUaGVtZUNvbmZpZ3VyYXRpb25TaGVldFRpbGVMYXlvdXRUb1RlcnJhZm9ybShzdHJ1Y3QhLnRpbGVMYXlvdXQpLFxuICB9XG59XG5cbmV4cG9ydCBjbGFzcyBEYXRhQXdzY2NRdWlja3NpZ2h0VGhlbWVDb25maWd1cmF0aW9uVHlwb2dyYXBoeUZvbnRGYW1pbGllcyBleHRlbmRzIGNka3RmLkNvbXBsZXhDb21wdXRlZExpc3Qge1xuXG4gIC8vIGZvbnRfZmFtaWx5IC0gY29tcHV0ZWQ6IHRydWUsIG9wdGlvbmFsOiBmYWxzZSwgcmVxdWlyZWQ6IGZhbHNlXG4gIHB1YmxpYyBnZXQgZm9udEZhbWlseSgpIHtcbiAgICByZXR1cm4gdGhpcy5nZXRTdHJpbmdBdHRyaWJ1dGUoJ2ZvbnRfZmFtaWx5Jyk7XG4gIH1cbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGRhdGFBd3NjY1F1aWNrc2lnaHRUaGVtZUNvbmZpZ3VyYXRpb25UeXBvZ3JhcGh5Rm9udEZhbWlsaWVzVG9UZXJyYWZvcm0oc3RydWN0PzogRGF0YUF3c2NjUXVpY2tzaWdodFRoZW1lQ29uZmlndXJhdGlvblR5cG9ncmFwaHlGb250RmFtaWxpZXMpOiBhbnkge1xuICBpZiAoIWNka3RmLmNhbkluc3BlY3Qoc3RydWN0KSkgeyByZXR1cm4gc3RydWN0OyB9XG4gIHJldHVybiB7XG4gICAgZm9udF9mYW1pbHk6IGNka3RmLnN0cmluZ1RvVGVycmFmb3JtKHN0cnVjdCEuZm9udEZhbWlseSksXG4gIH1cbn1cblxuZXhwb3J0IGNsYXNzIERhdGFBd3NjY1F1aWNrc2lnaHRUaGVtZUNvbmZpZ3VyYXRpb25UeXBvZ3JhcGh5IGV4dGVuZHMgY2RrdGYuQ29tcGxleENvbXB1dGVkTGlzdCB7XG5cbiAgLy8gZm9udF9mYW1pbGllcyAtIGNvbXB1dGVkOiB0cnVlLCBvcHRpb25hbDogZmFsc2UsIHJlcXVpcmVkOiBmYWxzZVxuICBwdWJsaWMgZ2V0IGZvbnRGYW1pbGllcygpIHtcbiAgICByZXR1cm4gdGhpcy5pbnRlcnBvbGF0aW9uRm9yQXR0cmlidXRlKCdmb250X2ZhbWlsaWVzJykgYXMgYW55O1xuICB9XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBkYXRhQXdzY2NRdWlja3NpZ2h0VGhlbWVDb25maWd1cmF0aW9uVHlwb2dyYXBoeVRvVGVycmFmb3JtKHN0cnVjdD86IERhdGFBd3NjY1F1aWNrc2lnaHRUaGVtZUNvbmZpZ3VyYXRpb25UeXBvZ3JhcGh5KTogYW55IHtcbiAgaWYgKCFjZGt0Zi5jYW5JbnNwZWN0KHN0cnVjdCkpIHsgcmV0dXJuIHN0cnVjdDsgfVxuICByZXR1cm4ge1xuICAgIGZvbnRfZmFtaWxpZXM6IGNka3RmLmxpc3RNYXBwZXIoZGF0YUF3c2NjUXVpY2tzaWdodFRoZW1lQ29uZmlndXJhdGlvblR5cG9ncmFwaHlGb250RmFtaWxpZXNUb1RlcnJhZm9ybSkoc3RydWN0IS5mb250RmFtaWxpZXMpLFxuICB9XG59XG5cbmV4cG9ydCBjbGFzcyBEYXRhQXdzY2NRdWlja3NpZ2h0VGhlbWVDb25maWd1cmF0aW9uVWlDb2xvclBhbGV0dGUgZXh0ZW5kcyBjZGt0Zi5Db21wbGV4Q29tcHV0ZWRMaXN0IHtcblxuICAvLyBhY2NlbnQgLSBjb21wdXRlZDogdHJ1ZSwgb3B0aW9uYWw6IGZhbHNlLCByZXF1aXJlZDogZmFsc2VcbiAgcHVibGljIGdldCBhY2NlbnQoKSB7XG4gICAgcmV0dXJuIHRoaXMuZ2V0U3RyaW5nQXR0cmlidXRlKCdhY2NlbnQnKTtcbiAgfVxuXG4gIC8vIGFjY2VudF9mb3JlZ3JvdW5kIC0gY29tcHV0ZWQ6IHRydWUsIG9wdGlvbmFsOiBmYWxzZSwgcmVxdWlyZWQ6IGZhbHNlXG4gIHB1YmxpYyBnZXQgYWNjZW50Rm9yZWdyb3VuZCgpIHtcbiAgICByZXR1cm4gdGhpcy5nZXRTdHJpbmdBdHRyaWJ1dGUoJ2FjY2VudF9mb3JlZ3JvdW5kJyk7XG4gIH1cblxuICAvLyBkYW5nZXIgLSBjb21wdXRlZDogdHJ1ZSwgb3B0aW9uYWw6IGZhbHNlLCByZXF1aXJlZDogZmFsc2VcbiAgcHVibGljIGdldCBkYW5nZXIoKSB7XG4gICAgcmV0dXJuIHRoaXMuZ2V0U3RyaW5nQXR0cmlidXRlKCdkYW5nZXInKTtcbiAgfVxuXG4gIC8vIGRhbmdlcl9mb3JlZ3JvdW5kIC0gY29tcHV0ZWQ6IHRydWUsIG9wdGlvbmFsOiBmYWxzZSwgcmVxdWlyZWQ6IGZhbHNlXG4gIHB1YmxpYyBnZXQgZGFuZ2VyRm9yZWdyb3VuZCgpIHtcbiAgICByZXR1cm4gdGhpcy5nZXRTdHJpbmdBdHRyaWJ1dGUoJ2Rhbmdlcl9mb3JlZ3JvdW5kJyk7XG4gIH1cblxuICAvLyBkaW1lbnNpb24gLSBjb21wdXRlZDogdHJ1ZSwgb3B0aW9uYWw6IGZhbHNlLCByZXF1aXJlZDogZmFsc2VcbiAgcHVibGljIGdldCBkaW1lbnNpb24oKSB7XG4gICAgcmV0dXJuIHRoaXMuZ2V0U3RyaW5nQXR0cmlidXRlKCdkaW1lbnNpb24nKTtcbiAgfVxuXG4gIC8vIGRpbWVuc2lvbl9mb3JlZ3JvdW5kIC0gY29tcHV0ZWQ6IHRydWUsIG9wdGlvbmFsOiBmYWxzZSwgcmVxdWlyZWQ6IGZhbHNlXG4gIHB1YmxpYyBnZXQgZGltZW5zaW9uRm9yZWdyb3VuZCgpIHtcbiAgICByZXR1cm4gdGhpcy5nZXRTdHJpbmdBdHRyaWJ1dGUoJ2RpbWVuc2lvbl9mb3JlZ3JvdW5kJyk7XG4gIH1cblxuICAvLyBtZWFzdXJlIC0gY29tcHV0ZWQ6IHRydWUsIG9wdGlvbmFsOiBmYWxzZSwgcmVxdWlyZWQ6IGZhbHNlXG4gIHB1YmxpYyBnZXQgbWVhc3VyZSgpIHtcbiAgICByZXR1cm4gdGhpcy5nZXRTdHJpbmdBdHRyaWJ1dGUoJ21lYXN1cmUnKTtcbiAgfVxuXG4gIC8vIG1lYXN1cmVfZm9yZWdyb3VuZCAtIGNvbXB1dGVkOiB0cnVlLCBvcHRpb25hbDogZmFsc2UsIHJlcXVpcmVkOiBmYWxzZVxuICBwdWJsaWMgZ2V0IG1lYXN1cmVGb3JlZ3JvdW5kKCkge1xuICAgIHJldHVybiB0aGlzLmdldFN0cmluZ0F0dHJpYnV0ZSgnbWVhc3VyZV9mb3JlZ3JvdW5kJyk7XG4gIH1cblxuICAvLyBwcmltYXJ5X2JhY2tncm91bmQgLSBjb21wdXRlZDogdHJ1ZSwgb3B0aW9uYWw6IGZhbHNlLCByZXF1aXJlZDogZmFsc2VcbiAgcHVibGljIGdldCBwcmltYXJ5QmFja2dyb3VuZCgpIHtcbiAgICByZXR1cm4gdGhpcy5nZXRTdHJpbmdBdHRyaWJ1dGUoJ3ByaW1hcnlfYmFja2dyb3VuZCcpO1xuICB9XG5cbiAgLy8gcHJpbWFyeV9mb3JlZ3JvdW5kIC0gY29tcHV0ZWQ6IHRydWUsIG9wdGlvbmFsOiBmYWxzZSwgcmVxdWlyZWQ6IGZhbHNlXG4gIHB1YmxpYyBnZXQgcHJpbWFyeUZvcmVncm91bmQoKSB7XG4gICAgcmV0dXJuIHRoaXMuZ2V0U3RyaW5nQXR0cmlidXRlKCdwcmltYXJ5X2ZvcmVncm91bmQnKTtcbiAgfVxuXG4gIC8vIHNlY29uZGFyeV9iYWNrZ3JvdW5kIC0gY29tcHV0ZWQ6IHRydWUsIG9wdGlvbmFsOiBmYWxzZSwgcmVxdWlyZWQ6IGZhbHNlXG4gIHB1YmxpYyBnZXQgc2Vjb25kYXJ5QmFja2dyb3VuZCgpIHtcbiAgICByZXR1cm4gdGhpcy5nZXRTdHJpbmdBdHRyaWJ1dGUoJ3NlY29uZGFyeV9iYWNrZ3JvdW5kJyk7XG4gIH1cblxuICAvLyBzZWNvbmRhcnlfZm9yZWdyb3VuZCAtIGNvbXB1dGVkOiB0cnVlLCBvcHRpb25hbDogZmFsc2UsIHJlcXVpcmVkOiBmYWxzZVxuICBwdWJsaWMgZ2V0IHNlY29uZGFyeUZvcmVncm91bmQoKSB7XG4gICAgcmV0dXJuIHRoaXMuZ2V0U3RyaW5nQXR0cmlidXRlKCdzZWNvbmRhcnlfZm9yZWdyb3VuZCcpO1xuICB9XG5cbiAgLy8gc3VjY2VzcyAtIGNvbXB1dGVkOiB0cnVlLCBvcHRpb25hbDogZmFsc2UsIHJlcXVpcmVkOiBmYWxzZVxuICBwdWJsaWMgZ2V0IHN1Y2Nlc3MoKSB7XG4gICAgcmV0dXJuIHRoaXMuZ2V0U3RyaW5nQXR0cmlidXRlKCdzdWNjZXNzJyk7XG4gIH1cblxuICAvLyBzdWNjZXNzX2ZvcmVncm91bmQgLSBjb21wdXRlZDogdHJ1ZSwgb3B0aW9uYWw6IGZhbHNlLCByZXF1aXJlZDogZmFsc2VcbiAgcHVibGljIGdldCBzdWNjZXNzRm9yZWdyb3VuZCgpIHtcbiAgICByZXR1cm4gdGhpcy5nZXRTdHJpbmdBdHRyaWJ1dGUoJ3N1Y2Nlc3NfZm9yZWdyb3VuZCcpO1xuICB9XG5cbiAgLy8gd2FybmluZyAtIGNvbXB1dGVkOiB0cnVlLCBvcHRpb25hbDogZmFsc2UsIHJlcXVpcmVkOiBmYWxzZVxuICBwdWJsaWMgZ2V0IHdhcm5pbmcoKSB7XG4gICAgcmV0dXJuIHRoaXMuZ2V0U3RyaW5nQXR0cmlidXRlKCd3YXJuaW5nJyk7XG4gIH1cblxuICAvLyB3YXJuaW5nX2ZvcmVncm91bmQgLSBjb21wdXRlZDogdHJ1ZSwgb3B0aW9uYWw6IGZhbHNlLCByZXF1aXJlZDogZmFsc2VcbiAgcHVibGljIGdldCB3YXJuaW5nRm9yZWdyb3VuZCgpIHtcbiAgICByZXR1cm4gdGhpcy5nZXRTdHJpbmdBdHRyaWJ1dGUoJ3dhcm5pbmdfZm9yZWdyb3VuZCcpO1xuICB9XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBkYXRhQXdzY2NRdWlja3NpZ2h0VGhlbWVDb25maWd1cmF0aW9uVWlDb2xvclBhbGV0dGVUb1RlcnJhZm9ybShzdHJ1Y3Q/OiBEYXRhQXdzY2NRdWlja3NpZ2h0VGhlbWVDb25maWd1cmF0aW9uVWlDb2xvclBhbGV0dGUpOiBhbnkge1xuICBpZiAoIWNka3RmLmNhbkluc3BlY3Qoc3RydWN0KSkgeyByZXR1cm4gc3RydWN0OyB9XG4gIHJldHVybiB7XG4gICAgYWNjZW50OiBjZGt0Zi5zdHJpbmdUb1RlcnJhZm9ybShzdHJ1Y3QhLmFjY2VudCksXG4gICAgYWNjZW50X2ZvcmVncm91bmQ6IGNka3RmLnN0cmluZ1RvVGVycmFmb3JtKHN0cnVjdCEuYWNjZW50Rm9yZWdyb3VuZCksXG4gICAgZGFuZ2VyOiBjZGt0Zi5zdHJpbmdUb1RlcnJhZm9ybShzdHJ1Y3QhLmRhbmdlciksXG4gICAgZGFuZ2VyX2ZvcmVncm91bmQ6IGNka3RmLnN0cmluZ1RvVGVycmFmb3JtKHN0cnVjdCEuZGFuZ2VyRm9yZWdyb3VuZCksXG4gICAgZGltZW5zaW9uOiBjZGt0Zi5zdHJpbmdUb1RlcnJhZm9ybShzdHJ1Y3QhLmRpbWVuc2lvbiksXG4gICAgZGltZW5zaW9uX2ZvcmVncm91bmQ6IGNka3RmLnN0cmluZ1RvVGVycmFmb3JtKHN0cnVjdCEuZGltZW5zaW9uRm9yZWdyb3VuZCksXG4gICAgbWVhc3VyZTogY2RrdGYuc3RyaW5nVG9UZXJyYWZvcm0oc3RydWN0IS5tZWFzdXJlKSxcbiAgICBtZWFzdXJlX2ZvcmVncm91bmQ6IGNka3RmLnN0cmluZ1RvVGVycmFmb3JtKHN0cnVjdCEubWVhc3VyZUZvcmVncm91bmQpLFxuICAgIHByaW1hcnlfYmFja2dyb3VuZDogY2RrdGYuc3RyaW5nVG9UZXJyYWZvcm0oc3RydWN0IS5wcmltYXJ5QmFja2dyb3VuZCksXG4gICAgcHJpbWFyeV9mb3JlZ3JvdW5kOiBjZGt0Zi5zdHJpbmdUb1RlcnJhZm9ybShzdHJ1Y3QhLnByaW1hcnlGb3JlZ3JvdW5kKSxcbiAgICBzZWNvbmRhcnlfYmFja2dyb3VuZDogY2RrdGYuc3RyaW5nVG9UZXJyYWZvcm0oc3RydWN0IS5zZWNvbmRhcnlCYWNrZ3JvdW5kKSxcbiAgICBzZWNvbmRhcnlfZm9yZWdyb3VuZDogY2RrdGYuc3RyaW5nVG9UZXJyYWZvcm0oc3RydWN0IS5zZWNvbmRhcnlGb3JlZ3JvdW5kKSxcbiAgICBzdWNjZXNzOiBjZGt0Zi5zdHJpbmdUb1RlcnJhZm9ybShzdHJ1Y3QhLnN1Y2Nlc3MpLFxuICAgIHN1Y2Nlc3NfZm9yZWdyb3VuZDogY2RrdGYuc3RyaW5nVG9UZXJyYWZvcm0oc3RydWN0IS5zdWNjZXNzRm9yZWdyb3VuZCksXG4gICAgd2FybmluZzogY2RrdGYuc3RyaW5nVG9UZXJyYWZvcm0oc3RydWN0IS53YXJuaW5nKSxcbiAgICB3YXJuaW5nX2ZvcmVncm91bmQ6IGNka3RmLnN0cmluZ1RvVGVycmFmb3JtKHN0cnVjdCEud2FybmluZ0ZvcmVncm91bmQpLFxuICB9XG59XG5cbmV4cG9ydCBjbGFzcyBEYXRhQXdzY2NRdWlja3NpZ2h0VGhlbWVDb25maWd1cmF0aW9uIGV4dGVuZHMgY2RrdGYuQ29tcGxleENvbXB1dGVkTGlzdCB7XG5cbiAgLy8gZGF0YV9jb2xvcl9wYWxldHRlIC0gY29tcHV0ZWQ6IHRydWUsIG9wdGlvbmFsOiBmYWxzZSwgcmVxdWlyZWQ6IGZhbHNlXG4gIHB1YmxpYyBnZXQgZGF0YUNvbG9yUGFsZXR0ZSgpIHtcbiAgICByZXR1cm4gdGhpcy5pbnRlcnBvbGF0aW9uRm9yQXR0cmlidXRlKCdkYXRhX2NvbG9yX3BhbGV0dGUnKSBhcyBhbnk7XG4gIH1cblxuICAvLyBzaGVldCAtIGNvbXB1dGVkOiB0cnVlLCBvcHRpb25hbDogZmFsc2UsIHJlcXVpcmVkOiBmYWxzZVxuICBwdWJsaWMgZ2V0IHNoZWV0KCkge1xuICAgIHJldHVybiB0aGlzLmludGVycG9sYXRpb25Gb3JBdHRyaWJ1dGUoJ3NoZWV0JykgYXMgYW55O1xuICB9XG5cbiAgLy8gdHlwb2dyYXBoeSAtIGNvbXB1dGVkOiB0cnVlLCBvcHRpb25hbDogZmFsc2UsIHJlcXVpcmVkOiBmYWxzZVxuICBwdWJsaWMgZ2V0IHR5cG9ncmFwaHkoKSB7XG4gICAgcmV0dXJuIHRoaXMuaW50ZXJwb2xhdGlvbkZvckF0dHJpYnV0ZSgndHlwb2dyYXBoeScpIGFzIGFueTtcbiAgfVxuXG4gIC8vIHVpX2NvbG9yX3BhbGV0dGUgLSBjb21wdXRlZDogdHJ1ZSwgb3B0aW9uYWw6IGZhbHNlLCByZXF1aXJlZDogZmFsc2VcbiAgcHVibGljIGdldCB1aUNvbG9yUGFsZXR0ZSgpIHtcbiAgICByZXR1cm4gdGhpcy5pbnRlcnBvbGF0aW9uRm9yQXR0cmlidXRlKCd1aV9jb2xvcl9wYWxldHRlJykgYXMgYW55O1xuICB9XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBkYXRhQXdzY2NRdWlja3NpZ2h0VGhlbWVDb25maWd1cmF0aW9uVG9UZXJyYWZvcm0oc3RydWN0PzogRGF0YUF3c2NjUXVpY2tzaWdodFRoZW1lQ29uZmlndXJhdGlvbik6IGFueSB7XG4gIGlmICghY2RrdGYuY2FuSW5zcGVjdChzdHJ1Y3QpKSB7IHJldHVybiBzdHJ1Y3Q7IH1cbiAgcmV0dXJuIHtcbiAgICBkYXRhX2NvbG9yX3BhbGV0dGU6IGRhdGFBd3NjY1F1aWNrc2lnaHRUaGVtZUNvbmZpZ3VyYXRpb25EYXRhQ29sb3JQYWxldHRlVG9UZXJyYWZvcm0oc3RydWN0IS5kYXRhQ29sb3JQYWxldHRlKSxcbiAgICBzaGVldDogZGF0YUF3c2NjUXVpY2tzaWdodFRoZW1lQ29uZmlndXJhdGlvblNoZWV0VG9UZXJyYWZvcm0oc3RydWN0IS5zaGVldCksXG4gICAgdHlwb2dyYXBoeTogZGF0YUF3c2NjUXVpY2tzaWdodFRoZW1lQ29uZmlndXJhdGlvblR5cG9ncmFwaHlUb1RlcnJhZm9ybShzdHJ1Y3QhLnR5cG9ncmFwaHkpLFxuICAgIHVpX2NvbG9yX3BhbGV0dGU6IGRhdGFBd3NjY1F1aWNrc2lnaHRUaGVtZUNvbmZpZ3VyYXRpb25VaUNvbG9yUGFsZXR0ZVRvVGVycmFmb3JtKHN0cnVjdCEudWlDb2xvclBhbGV0dGUpLFxuICB9XG59XG5cbmV4cG9ydCBjbGFzcyBEYXRhQXdzY2NRdWlja3NpZ2h0VGhlbWVQZXJtaXNzaW9ucyBleHRlbmRzIGNka3RmLkNvbXBsZXhDb21wdXRlZExpc3Qge1xuXG4gIC8vIGFjdGlvbnMgLSBjb21wdXRlZDogdHJ1ZSwgb3B0aW9uYWw6IGZhbHNlLCByZXF1aXJlZDogZmFsc2VcbiAgcHVibGljIGdldCBhY3Rpb25zKCkge1xuICAgIHJldHVybiB0aGlzLmdldExpc3RBdHRyaWJ1dGUoJ2FjdGlvbnMnKTtcbiAgfVxuXG4gIC8vIHByaW5jaXBhbCAtIGNvbXB1dGVkOiB0cnVlLCBvcHRpb25hbDogZmFsc2UsIHJlcXVpcmVkOiBmYWxzZVxuICBwdWJsaWMgZ2V0IHByaW5jaXBhbCgpIHtcbiAgICByZXR1cm4gdGhpcy5nZXRTdHJpbmdBdHRyaWJ1dGUoJ3ByaW5jaXBhbCcpO1xuICB9XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBkYXRhQXdzY2NRdWlja3NpZ2h0VGhlbWVQZXJtaXNzaW9uc1RvVGVycmFmb3JtKHN0cnVjdD86IERhdGFBd3NjY1F1aWNrc2lnaHRUaGVtZVBlcm1pc3Npb25zKTogYW55IHtcbiAgaWYgKCFjZGt0Zi5jYW5JbnNwZWN0KHN0cnVjdCkpIHsgcmV0dXJuIHN0cnVjdDsgfVxuICByZXR1cm4ge1xuICAgIGFjdGlvbnM6IGNka3RmLmxpc3RNYXBwZXIoY2RrdGYuc3RyaW5nVG9UZXJyYWZvcm0pKHN0cnVjdCEuYWN0aW9ucyksXG4gICAgcHJpbmNpcGFsOiBjZGt0Zi5zdHJpbmdUb1RlcnJhZm9ybShzdHJ1Y3QhLnByaW5jaXBhbCksXG4gIH1cbn1cblxuZXhwb3J0IGNsYXNzIERhdGFBd3NjY1F1aWNrc2lnaHRUaGVtZVRhZ3MgZXh0ZW5kcyBjZGt0Zi5Db21wbGV4Q29tcHV0ZWRMaXN0IHtcblxuICAvLyBrZXkgLSBjb21wdXRlZDogdHJ1ZSwgb3B0aW9uYWw6IGZhbHNlLCByZXF1aXJlZDogZmFsc2VcbiAgcHVibGljIGdldCBrZXkoKSB7XG4gICAgcmV0dXJuIHRoaXMuZ2V0U3RyaW5nQXR0cmlidXRlKCdrZXknKTtcbiAgfVxuXG4gIC8vIHZhbHVlIC0gY29tcHV0ZWQ6IHRydWUsIG9wdGlvbmFsOiBmYWxzZSwgcmVxdWlyZWQ6IGZhbHNlXG4gIHB1YmxpYyBnZXQgdmFsdWUoKSB7XG4gICAgcmV0dXJuIHRoaXMuZ2V0U3RyaW5nQXR0cmlidXRlKCd2YWx1ZScpO1xuICB9XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBkYXRhQXdzY2NRdWlja3NpZ2h0VGhlbWVUYWdzVG9UZXJyYWZvcm0oc3RydWN0PzogRGF0YUF3c2NjUXVpY2tzaWdodFRoZW1lVGFncyk6IGFueSB7XG4gIGlmICghY2RrdGYuY2FuSW5zcGVjdChzdHJ1Y3QpKSB7IHJldHVybiBzdHJ1Y3Q7IH1cbiAgcmV0dXJuIHtcbiAgICBrZXk6IGNka3RmLnN0cmluZ1RvVGVycmFmb3JtKHN0cnVjdCEua2V5KSxcbiAgICB2YWx1ZTogY2RrdGYuc3RyaW5nVG9UZXJyYWZvcm0oc3RydWN0IS52YWx1ZSksXG4gIH1cbn1cblxuZXhwb3J0IGNsYXNzIERhdGFBd3NjY1F1aWNrc2lnaHRUaGVtZVZlcnNpb25Db25maWd1cmF0aW9uRGF0YUNvbG9yUGFsZXR0ZSBleHRlbmRzIGNka3RmLkNvbXBsZXhDb21wdXRlZExpc3Qge1xuXG4gIC8vIGNvbG9ycyAtIGNvbXB1dGVkOiB0cnVlLCBvcHRpb25hbDogZmFsc2UsIHJlcXVpcmVkOiBmYWxzZVxuICBwdWJsaWMgZ2V0IGNvbG9ycygpIHtcbiAgICByZXR1cm4gdGhpcy5nZXRMaXN0QXR0cmlidXRlKCdjb2xvcnMnKTtcbiAgfVxuXG4gIC8vIGVtcHR5X2ZpbGxfY29sb3IgLSBjb21wdXRlZDogdHJ1ZSwgb3B0aW9uYWw6IGZhbHNlLCByZXF1aXJlZDogZmFsc2VcbiAgcHVibGljIGdldCBlbXB0eUZpbGxDb2xvcigpIHtcbiAgICByZXR1cm4gdGhpcy5nZXRTdHJpbmdBdHRyaWJ1dGUoJ2VtcHR5X2ZpbGxfY29sb3InKTtcbiAgfVxuXG4gIC8vIG1pbl9tYXhfZ3JhZGllbnQgLSBjb21wdXRlZDogdHJ1ZSwgb3B0aW9uYWw6IGZhbHNlLCByZXF1aXJlZDogZmFsc2VcbiAgcHVibGljIGdldCBtaW5NYXhHcmFkaWVudCgpIHtcbiAgICByZXR1cm4gdGhpcy5nZXRMaXN0QXR0cmlidXRlKCdtaW5fbWF4X2dyYWRpZW50Jyk7XG4gIH1cbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGRhdGFBd3NjY1F1aWNrc2lnaHRUaGVtZVZlcnNpb25Db25maWd1cmF0aW9uRGF0YUNvbG9yUGFsZXR0ZVRvVGVycmFmb3JtKHN0cnVjdD86IERhdGFBd3NjY1F1aWNrc2lnaHRUaGVtZVZlcnNpb25Db25maWd1cmF0aW9uRGF0YUNvbG9yUGFsZXR0ZSk6IGFueSB7XG4gIGlmICghY2RrdGYuY2FuSW5zcGVjdChzdHJ1Y3QpKSB7IHJldHVybiBzdHJ1Y3Q7IH1cbiAgcmV0dXJuIHtcbiAgICBjb2xvcnM6IGNka3RmLmxpc3RNYXBwZXIoY2RrdGYuc3RyaW5nVG9UZXJyYWZvcm0pKHN0cnVjdCEuY29sb3JzKSxcbiAgICBlbXB0eV9maWxsX2NvbG9yOiBjZGt0Zi5zdHJpbmdUb1RlcnJhZm9ybShzdHJ1Y3QhLmVtcHR5RmlsbENvbG9yKSxcbiAgICBtaW5fbWF4X2dyYWRpZW50OiBjZGt0Zi5saXN0TWFwcGVyKGNka3RmLnN0cmluZ1RvVGVycmFmb3JtKShzdHJ1Y3QhLm1pbk1heEdyYWRpZW50KSxcbiAgfVxufVxuXG5leHBvcnQgY2xhc3MgRGF0YUF3c2NjUXVpY2tzaWdodFRoZW1lVmVyc2lvbkNvbmZpZ3VyYXRpb25TaGVldFRpbGVCb3JkZXIgZXh0ZW5kcyBjZGt0Zi5Db21wbGV4Q29tcHV0ZWRMaXN0IHtcblxuICAvLyBzaG93IC0gY29tcHV0ZWQ6IHRydWUsIG9wdGlvbmFsOiBmYWxzZSwgcmVxdWlyZWQ6IGZhbHNlXG4gIHB1YmxpYyBnZXQgc2hvdygpIHtcbiAgICByZXR1cm4gdGhpcy5nZXRCb29sZWFuQXR0cmlidXRlKCdzaG93Jyk7XG4gIH1cbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGRhdGFBd3NjY1F1aWNrc2lnaHRUaGVtZVZlcnNpb25Db25maWd1cmF0aW9uU2hlZXRUaWxlQm9yZGVyVG9UZXJyYWZvcm0oc3RydWN0PzogRGF0YUF3c2NjUXVpY2tzaWdodFRoZW1lVmVyc2lvbkNvbmZpZ3VyYXRpb25TaGVldFRpbGVCb3JkZXIpOiBhbnkge1xuICBpZiAoIWNka3RmLmNhbkluc3BlY3Qoc3RydWN0KSkgeyByZXR1cm4gc3RydWN0OyB9XG4gIHJldHVybiB7XG4gICAgc2hvdzogY2RrdGYuYm9vbGVhblRvVGVycmFmb3JtKHN0cnVjdCEuc2hvdyksXG4gIH1cbn1cblxuZXhwb3J0IGNsYXNzIERhdGFBd3NjY1F1aWNrc2lnaHRUaGVtZVZlcnNpb25Db25maWd1cmF0aW9uU2hlZXRUaWxlIGV4dGVuZHMgY2RrdGYuQ29tcGxleENvbXB1dGVkTGlzdCB7XG5cbiAgLy8gYm9yZGVyIC0gY29tcHV0ZWQ6IHRydWUsIG9wdGlvbmFsOiBmYWxzZSwgcmVxdWlyZWQ6IGZhbHNlXG4gIHB1YmxpYyBnZXQgYm9yZGVyKCkge1xuICAgIHJldHVybiB0aGlzLmludGVycG9sYXRpb25Gb3JBdHRyaWJ1dGUoJ2JvcmRlcicpIGFzIGFueTtcbiAgfVxufVxuXG5leHBvcnQgZnVuY3Rpb24gZGF0YUF3c2NjUXVpY2tzaWdodFRoZW1lVmVyc2lvbkNvbmZpZ3VyYXRpb25TaGVldFRpbGVUb1RlcnJhZm9ybShzdHJ1Y3Q/OiBEYXRhQXdzY2NRdWlja3NpZ2h0VGhlbWVWZXJzaW9uQ29uZmlndXJhdGlvblNoZWV0VGlsZSk6IGFueSB7XG4gIGlmICghY2RrdGYuY2FuSW5zcGVjdChzdHJ1Y3QpKSB7IHJldHVybiBzdHJ1Y3Q7IH1cbiAgcmV0dXJuIHtcbiAgICBib3JkZXI6IGRhdGFBd3NjY1F1aWNrc2lnaHRUaGVtZVZlcnNpb25Db25maWd1cmF0aW9uU2hlZXRUaWxlQm9yZGVyVG9UZXJyYWZvcm0oc3RydWN0IS5ib3JkZXIpLFxuICB9XG59XG5cbmV4cG9ydCBjbGFzcyBEYXRhQXdzY2NRdWlja3NpZ2h0VGhlbWVWZXJzaW9uQ29uZmlndXJhdGlvblNoZWV0VGlsZUxheW91dEd1dHRlciBleHRlbmRzIGNka3RmLkNvbXBsZXhDb21wdXRlZExpc3Qge1xuXG4gIC8vIHNob3cgLSBjb21wdXRlZDogdHJ1ZSwgb3B0aW9uYWw6IGZhbHNlLCByZXF1aXJlZDogZmFsc2VcbiAgcHVibGljIGdldCBzaG93KCkge1xuICAgIHJldHVybiB0aGlzLmdldEJvb2xlYW5BdHRyaWJ1dGUoJ3Nob3cnKTtcbiAgfVxufVxuXG5leHBvcnQgZnVuY3Rpb24gZGF0YUF3c2NjUXVpY2tzaWdodFRoZW1lVmVyc2lvbkNvbmZpZ3VyYXRpb25TaGVldFRpbGVMYXlvdXRHdXR0ZXJUb1RlcnJhZm9ybShzdHJ1Y3Q/OiBEYXRhQXdzY2NRdWlja3NpZ2h0VGhlbWVWZXJzaW9uQ29uZmlndXJhdGlvblNoZWV0VGlsZUxheW91dEd1dHRlcik6IGFueSB7XG4gIGlmICghY2RrdGYuY2FuSW5zcGVjdChzdHJ1Y3QpKSB7IHJldHVybiBzdHJ1Y3Q7IH1cbiAgcmV0dXJuIHtcbiAgICBzaG93OiBjZGt0Zi5ib29sZWFuVG9UZXJyYWZvcm0oc3RydWN0IS5zaG93KSxcbiAgfVxufVxuXG5leHBvcnQgY2xhc3MgRGF0YUF3c2NjUXVpY2tzaWdodFRoZW1lVmVyc2lvbkNvbmZpZ3VyYXRpb25TaGVldFRpbGVMYXlvdXRNYXJnaW4gZXh0ZW5kcyBjZGt0Zi5Db21wbGV4Q29tcHV0ZWRMaXN0IHtcblxuICAvLyBzaG93IC0gY29tcHV0ZWQ6IHRydWUsIG9wdGlvbmFsOiBmYWxzZSwgcmVxdWlyZWQ6IGZhbHNlXG4gIHB1YmxpYyBnZXQgc2hvdygpIHtcbiAgICByZXR1cm4gdGhpcy5nZXRCb29sZWFuQXR0cmlidXRlKCdzaG93Jyk7XG4gIH1cbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGRhdGFBd3NjY1F1aWNrc2lnaHRUaGVtZVZlcnNpb25Db25maWd1cmF0aW9uU2hlZXRUaWxlTGF5b3V0TWFyZ2luVG9UZXJyYWZvcm0oc3RydWN0PzogRGF0YUF3c2NjUXVpY2tzaWdodFRoZW1lVmVyc2lvbkNvbmZpZ3VyYXRpb25TaGVldFRpbGVMYXlvdXRNYXJnaW4pOiBhbnkge1xuICBpZiAoIWNka3RmLmNhbkluc3BlY3Qoc3RydWN0KSkgeyByZXR1cm4gc3RydWN0OyB9XG4gIHJldHVybiB7XG4gICAgc2hvdzogY2RrdGYuYm9vbGVhblRvVGVycmFmb3JtKHN0cnVjdCEuc2hvdyksXG4gIH1cbn1cblxuZXhwb3J0IGNsYXNzIERhdGFBd3NjY1F1aWNrc2lnaHRUaGVtZVZlcnNpb25Db25maWd1cmF0aW9uU2hlZXRUaWxlTGF5b3V0IGV4dGVuZHMgY2RrdGYuQ29tcGxleENvbXB1dGVkTGlzdCB7XG5cbiAgLy8gZ3V0dGVyIC0gY29tcHV0ZWQ6IHRydWUsIG9wdGlvbmFsOiBmYWxzZSwgcmVxdWlyZWQ6IGZhbHNlXG4gIHB1YmxpYyBnZXQgZ3V0dGVyKCkge1xuICAgIHJldHVybiB0aGlzLmludGVycG9sYXRpb25Gb3JBdHRyaWJ1dGUoJ2d1dHRlcicpIGFzIGFueTtcbiAgfVxuXG4gIC8vIG1hcmdpbiAtIGNvbXB1dGVkOiB0cnVlLCBvcHRpb25hbDogZmFsc2UsIHJlcXVpcmVkOiBmYWxzZVxuICBwdWJsaWMgZ2V0IG1hcmdpbigpIHtcbiAgICByZXR1cm4gdGhpcy5pbnRlcnBvbGF0aW9uRm9yQXR0cmlidXRlKCdtYXJnaW4nKSBhcyBhbnk7XG4gIH1cbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGRhdGFBd3NjY1F1aWNrc2lnaHRUaGVtZVZlcnNpb25Db25maWd1cmF0aW9uU2hlZXRUaWxlTGF5b3V0VG9UZXJyYWZvcm0oc3RydWN0PzogRGF0YUF3c2NjUXVpY2tzaWdodFRoZW1lVmVyc2lvbkNvbmZpZ3VyYXRpb25TaGVldFRpbGVMYXlvdXQpOiBhbnkge1xuICBpZiAoIWNka3RmLmNhbkluc3BlY3Qoc3RydWN0KSkgeyByZXR1cm4gc3RydWN0OyB9XG4gIHJldHVybiB7XG4gICAgZ3V0dGVyOiBkYXRhQXdzY2NRdWlja3NpZ2h0VGhlbWVWZXJzaW9uQ29uZmlndXJhdGlvblNoZWV0VGlsZUxheW91dEd1dHRlclRvVGVycmFmb3JtKHN0cnVjdCEuZ3V0dGVyKSxcbiAgICBtYXJnaW46IGRhdGFBd3NjY1F1aWNrc2lnaHRUaGVtZVZlcnNpb25Db25maWd1cmF0aW9uU2hlZXRUaWxlTGF5b3V0TWFyZ2luVG9UZXJyYWZvcm0oc3RydWN0IS5tYXJnaW4pLFxuICB9XG59XG5cbmV4cG9ydCBjbGFzcyBEYXRhQXdzY2NRdWlja3NpZ2h0VGhlbWVWZXJzaW9uQ29uZmlndXJhdGlvblNoZWV0IGV4dGVuZHMgY2RrdGYuQ29tcGxleENvbXB1dGVkTGlzdCB7XG5cbiAgLy8gdGlsZSAtIGNvbXB1dGVkOiB0cnVlLCBvcHRpb25hbDogZmFsc2UsIHJlcXVpcmVkOiBmYWxzZVxuICBwdWJsaWMgZ2V0IHRpbGUoKSB7XG4gICAgcmV0dXJuIHRoaXMuaW50ZXJwb2xhdGlvbkZvckF0dHJpYnV0ZSgndGlsZScpIGFzIGFueTtcbiAgfVxuXG4gIC8vIHRpbGVfbGF5b3V0IC0gY29tcHV0ZWQ6IHRydWUsIG9wdGlvbmFsOiBmYWxzZSwgcmVxdWlyZWQ6IGZhbHNlXG4gIHB1YmxpYyBnZXQgdGlsZUxheW91dCgpIHtcbiAgICByZXR1cm4gdGhpcy5pbnRlcnBvbGF0aW9uRm9yQXR0cmlidXRlKCd0aWxlX2xheW91dCcpIGFzIGFueTtcbiAgfVxufVxuXG5leHBvcnQgZnVuY3Rpb24gZGF0YUF3c2NjUXVpY2tzaWdodFRoZW1lVmVyc2lvbkNvbmZpZ3VyYXRpb25TaGVldFRvVGVycmFmb3JtKHN0cnVjdD86IERhdGFBd3NjY1F1aWNrc2lnaHRUaGVtZVZlcnNpb25Db25maWd1cmF0aW9uU2hlZXQpOiBhbnkge1xuICBpZiAoIWNka3RmLmNhbkluc3BlY3Qoc3RydWN0KSkgeyByZXR1cm4gc3RydWN0OyB9XG4gIHJldHVybiB7XG4gICAgdGlsZTogZGF0YUF3c2NjUXVpY2tzaWdodFRoZW1lVmVyc2lvbkNvbmZpZ3VyYXRpb25TaGVldFRpbGVUb1RlcnJhZm9ybShzdHJ1Y3QhLnRpbGUpLFxuICAgIHRpbGVfbGF5b3V0OiBkYXRhQXdzY2NRdWlja3NpZ2h0VGhlbWVWZXJzaW9uQ29uZmlndXJhdGlvblNoZWV0VGlsZUxheW91dFRvVGVycmFmb3JtKHN0cnVjdCEudGlsZUxheW91dCksXG4gIH1cbn1cblxuZXhwb3J0IGNsYXNzIERhdGFBd3NjY1F1aWNrc2lnaHRUaGVtZVZlcnNpb25Db25maWd1cmF0aW9uVHlwb2dyYXBoeUZvbnRGYW1pbGllcyBleHRlbmRzIGNka3RmLkNvbXBsZXhDb21wdXRlZExpc3Qge1xuXG4gIC8vIGZvbnRfZmFtaWx5IC0gY29tcHV0ZWQ6IHRydWUsIG9wdGlvbmFsOiBmYWxzZSwgcmVxdWlyZWQ6IGZhbHNlXG4gIHB1YmxpYyBnZXQgZm9udEZhbWlseSgpIHtcbiAgICByZXR1cm4gdGhpcy5nZXRTdHJpbmdBdHRyaWJ1dGUoJ2ZvbnRfZmFtaWx5Jyk7XG4gIH1cbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGRhdGFBd3NjY1F1aWNrc2lnaHRUaGVtZVZlcnNpb25Db25maWd1cmF0aW9uVHlwb2dyYXBoeUZvbnRGYW1pbGllc1RvVGVycmFmb3JtKHN0cnVjdD86IERhdGFBd3NjY1F1aWNrc2lnaHRUaGVtZVZlcnNpb25Db25maWd1cmF0aW9uVHlwb2dyYXBoeUZvbnRGYW1pbGllcyk6IGFueSB7XG4gIGlmICghY2RrdGYuY2FuSW5zcGVjdChzdHJ1Y3QpKSB7IHJldHVybiBzdHJ1Y3Q7IH1cbiAgcmV0dXJuIHtcbiAgICBmb250X2ZhbWlseTogY2RrdGYuc3RyaW5nVG9UZXJyYWZvcm0oc3RydWN0IS5mb250RmFtaWx5KSxcbiAgfVxufVxuXG5leHBvcnQgY2xhc3MgRGF0YUF3c2NjUXVpY2tzaWdodFRoZW1lVmVyc2lvbkNvbmZpZ3VyYXRpb25UeXBvZ3JhcGh5IGV4dGVuZHMgY2RrdGYuQ29tcGxleENvbXB1dGVkTGlzdCB7XG5cbiAgLy8gZm9udF9mYW1pbGllcyAtIGNvbXB1dGVkOiB0cnVlLCBvcHRpb25hbDogZmFsc2UsIHJlcXVpcmVkOiBmYWxzZVxuICBwdWJsaWMgZ2V0IGZvbnRGYW1pbGllcygpIHtcbiAgICByZXR1cm4gdGhpcy5pbnRlcnBvbGF0aW9uRm9yQXR0cmlidXRlKCdmb250X2ZhbWlsaWVzJykgYXMgYW55O1xuICB9XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBkYXRhQXdzY2NRdWlja3NpZ2h0VGhlbWVWZXJzaW9uQ29uZmlndXJhdGlvblR5cG9ncmFwaHlUb1RlcnJhZm9ybShzdHJ1Y3Q/OiBEYXRhQXdzY2NRdWlja3NpZ2h0VGhlbWVWZXJzaW9uQ29uZmlndXJhdGlvblR5cG9ncmFwaHkpOiBhbnkge1xuICBpZiAoIWNka3RmLmNhbkluc3BlY3Qoc3RydWN0KSkgeyByZXR1cm4gc3RydWN0OyB9XG4gIHJldHVybiB7XG4gICAgZm9udF9mYW1pbGllczogY2RrdGYubGlzdE1hcHBlcihkYXRhQXdzY2NRdWlja3NpZ2h0VGhlbWVWZXJzaW9uQ29uZmlndXJhdGlvblR5cG9ncmFwaHlGb250RmFtaWxpZXNUb1RlcnJhZm9ybSkoc3RydWN0IS5mb250RmFtaWxpZXMpLFxuICB9XG59XG5cbmV4cG9ydCBjbGFzcyBEYXRhQXdzY2NRdWlja3NpZ2h0VGhlbWVWZXJzaW9uQ29uZmlndXJhdGlvblVpQ29sb3JQYWxldHRlIGV4dGVuZHMgY2RrdGYuQ29tcGxleENvbXB1dGVkTGlzdCB7XG5cbiAgLy8gYWNjZW50IC0gY29tcHV0ZWQ6IHRydWUsIG9wdGlvbmFsOiBmYWxzZSwgcmVxdWlyZWQ6IGZhbHNlXG4gIHB1YmxpYyBnZXQgYWNjZW50KCkge1xuICAgIHJldHVybiB0aGlzLmdldFN0cmluZ0F0dHJpYnV0ZSgnYWNjZW50Jyk7XG4gIH1cblxuICAvLyBhY2NlbnRfZm9yZWdyb3VuZCAtIGNvbXB1dGVkOiB0cnVlLCBvcHRpb25hbDogZmFsc2UsIHJlcXVpcmVkOiBmYWxzZVxuICBwdWJsaWMgZ2V0IGFjY2VudEZvcmVncm91bmQoKSB7XG4gICAgcmV0dXJuIHRoaXMuZ2V0U3RyaW5nQXR0cmlidXRlKCdhY2NlbnRfZm9yZWdyb3VuZCcpO1xuICB9XG5cbiAgLy8gZGFuZ2VyIC0gY29tcHV0ZWQ6IHRydWUsIG9wdGlvbmFsOiBmYWxzZSwgcmVxdWlyZWQ6IGZhbHNlXG4gIHB1YmxpYyBnZXQgZGFuZ2VyKCkge1xuICAgIHJldHVybiB0aGlzLmdldFN0cmluZ0F0dHJpYnV0ZSgnZGFuZ2VyJyk7XG4gIH1cblxuICAvLyBkYW5nZXJfZm9yZWdyb3VuZCAtIGNvbXB1dGVkOiB0cnVlLCBvcHRpb25hbDogZmFsc2UsIHJlcXVpcmVkOiBmYWxzZVxuICBwdWJsaWMgZ2V0IGRhbmdlckZvcmVncm91bmQoKSB7XG4gICAgcmV0dXJuIHRoaXMuZ2V0U3RyaW5nQXR0cmlidXRlKCdkYW5nZXJfZm9yZWdyb3VuZCcpO1xuICB9XG5cbiAgLy8gZGltZW5zaW9uIC0gY29tcHV0ZWQ6IHRydWUsIG9wdGlvbmFsOiBmYWxzZSwgcmVxdWlyZWQ6IGZhbHNlXG4gIHB1YmxpYyBnZXQgZGltZW5zaW9uKCkge1xuICAgIHJldHVybiB0aGlzLmdldFN0cmluZ0F0dHJpYnV0ZSgnZGltZW5zaW9uJyk7XG4gIH1cblxuICAvLyBkaW1lbnNpb25fZm9yZWdyb3VuZCAtIGNvbXB1dGVkOiB0cnVlLCBvcHRpb25hbDogZmFsc2UsIHJlcXVpcmVkOiBmYWxzZVxuICBwdWJsaWMgZ2V0IGRpbWVuc2lvbkZvcmVncm91bmQoKSB7XG4gICAgcmV0dXJuIHRoaXMuZ2V0U3RyaW5nQXR0cmlidXRlKCdkaW1lbnNpb25fZm9yZWdyb3VuZCcpO1xuICB9XG5cbiAgLy8gbWVhc3VyZSAtIGNvbXB1dGVkOiB0cnVlLCBvcHRpb25hbDogZmFsc2UsIHJlcXVpcmVkOiBmYWxzZVxuICBwdWJsaWMgZ2V0IG1lYXN1cmUoKSB7XG4gICAgcmV0dXJuIHRoaXMuZ2V0U3RyaW5nQXR0cmlidXRlKCdtZWFzdXJlJyk7XG4gIH1cblxuICAvLyBtZWFzdXJlX2ZvcmVncm91bmQgLSBjb21wdXRlZDogdHJ1ZSwgb3B0aW9uYWw6IGZhbHNlLCByZXF1aXJlZDogZmFsc2VcbiAgcHVibGljIGdldCBtZWFzdXJlRm9yZWdyb3VuZCgpIHtcbiAgICByZXR1cm4gdGhpcy5nZXRTdHJpbmdBdHRyaWJ1dGUoJ21lYXN1cmVfZm9yZWdyb3VuZCcpO1xuICB9XG5cbiAgLy8gcHJpbWFyeV9iYWNrZ3JvdW5kIC0gY29tcHV0ZWQ6IHRydWUsIG9wdGlvbmFsOiBmYWxzZSwgcmVxdWlyZWQ6IGZhbHNlXG4gIHB1YmxpYyBnZXQgcHJpbWFyeUJhY2tncm91bmQoKSB7XG4gICAgcmV0dXJuIHRoaXMuZ2V0U3RyaW5nQXR0cmlidXRlKCdwcmltYXJ5X2JhY2tncm91bmQnKTtcbiAgfVxuXG4gIC8vIHByaW1hcnlfZm9yZWdyb3VuZCAtIGNvbXB1dGVkOiB0cnVlLCBvcHRpb25hbDogZmFsc2UsIHJlcXVpcmVkOiBmYWxzZVxuICBwdWJsaWMgZ2V0IHByaW1hcnlGb3JlZ3JvdW5kKCkge1xuICAgIHJldHVybiB0aGlzLmdldFN0cmluZ0F0dHJpYnV0ZSgncHJpbWFyeV9mb3JlZ3JvdW5kJyk7XG4gIH1cblxuICAvLyBzZWNvbmRhcnlfYmFja2dyb3VuZCAtIGNvbXB1dGVkOiB0cnVlLCBvcHRpb25hbDogZmFsc2UsIHJlcXVpcmVkOiBmYWxzZVxuICBwdWJsaWMgZ2V0IHNlY29uZGFyeUJhY2tncm91bmQoKSB7XG4gICAgcmV0dXJuIHRoaXMuZ2V0U3RyaW5nQXR0cmlidXRlKCdzZWNvbmRhcnlfYmFja2dyb3VuZCcpO1xuICB9XG5cbiAgLy8gc2Vjb25kYXJ5X2ZvcmVncm91bmQgLSBjb21wdXRlZDogdHJ1ZSwgb3B0aW9uYWw6IGZhbHNlLCByZXF1aXJlZDogZmFsc2VcbiAgcHVibGljIGdldCBzZWNvbmRhcnlGb3JlZ3JvdW5kKCkge1xuICAgIHJldHVybiB0aGlzLmdldFN0cmluZ0F0dHJpYnV0ZSgnc2Vjb25kYXJ5X2ZvcmVncm91bmQnKTtcbiAgfVxuXG4gIC8vIHN1Y2Nlc3MgLSBjb21wdXRlZDogdHJ1ZSwgb3B0aW9uYWw6IGZhbHNlLCByZXF1aXJlZDogZmFsc2VcbiAgcHVibGljIGdldCBzdWNjZXNzKCkge1xuICAgIHJldHVybiB0aGlzLmdldFN0cmluZ0F0dHJpYnV0ZSgnc3VjY2VzcycpO1xuICB9XG5cbiAgLy8gc3VjY2Vzc19mb3JlZ3JvdW5kIC0gY29tcHV0ZWQ6IHRydWUsIG9wdGlvbmFsOiBmYWxzZSwgcmVxdWlyZWQ6IGZhbHNlXG4gIHB1YmxpYyBnZXQgc3VjY2Vzc0ZvcmVncm91bmQoKSB7XG4gICAgcmV0dXJuIHRoaXMuZ2V0U3RyaW5nQXR0cmlidXRlKCdzdWNjZXNzX2ZvcmVncm91bmQnKTtcbiAgfVxuXG4gIC8vIHdhcm5pbmcgLSBjb21wdXRlZDogdHJ1ZSwgb3B0aW9uYWw6IGZhbHNlLCByZXF1aXJlZDogZmFsc2VcbiAgcHVibGljIGdldCB3YXJuaW5nKCkge1xuICAgIHJldHVybiB0aGlzLmdldFN0cmluZ0F0dHJpYnV0ZSgnd2FybmluZycpO1xuICB9XG5cbiAgLy8gd2FybmluZ19mb3JlZ3JvdW5kIC0gY29tcHV0ZWQ6IHRydWUsIG9wdGlvbmFsOiBmYWxzZSwgcmVxdWlyZWQ6IGZhbHNlXG4gIHB1YmxpYyBnZXQgd2FybmluZ0ZvcmVncm91bmQoKSB7XG4gICAgcmV0dXJuIHRoaXMuZ2V0U3RyaW5nQXR0cmlidXRlKCd3YXJuaW5nX2ZvcmVncm91bmQnKTtcbiAgfVxufVxuXG5leHBvcnQgZnVuY3Rpb24gZGF0YUF3c2NjUXVpY2tzaWdodFRoZW1lVmVyc2lvbkNvbmZpZ3VyYXRpb25VaUNvbG9yUGFsZXR0ZVRvVGVycmFmb3JtKHN0cnVjdD86IERhdGFBd3NjY1F1aWNrc2lnaHRUaGVtZVZlcnNpb25Db25maWd1cmF0aW9uVWlDb2xvclBhbGV0dGUpOiBhbnkge1xuICBpZiAoIWNka3RmLmNhbkluc3BlY3Qoc3RydWN0KSkgeyByZXR1cm4gc3RydWN0OyB9XG4gIHJldHVybiB7XG4gICAgYWNjZW50OiBjZGt0Zi5zdHJpbmdUb1RlcnJhZm9ybShzdHJ1Y3QhLmFjY2VudCksXG4gICAgYWNjZW50X2ZvcmVncm91bmQ6IGNka3RmLnN0cmluZ1RvVGVycmFmb3JtKHN0cnVjdCEuYWNjZW50Rm9yZWdyb3VuZCksXG4gICAgZGFuZ2VyOiBjZGt0Zi5zdHJpbmdUb1RlcnJhZm9ybShzdHJ1Y3QhLmRhbmdlciksXG4gICAgZGFuZ2VyX2ZvcmVncm91bmQ6IGNka3RmLnN0cmluZ1RvVGVycmFmb3JtKHN0cnVjdCEuZGFuZ2VyRm9yZWdyb3VuZCksXG4gICAgZGltZW5zaW9uOiBjZGt0Zi5zdHJpbmdUb1RlcnJhZm9ybShzdHJ1Y3QhLmRpbWVuc2lvbiksXG4gICAgZGltZW5zaW9uX2ZvcmVncm91bmQ6IGNka3RmLnN0cmluZ1RvVGVycmFmb3JtKHN0cnVjdCEuZGltZW5zaW9uRm9yZWdyb3VuZCksXG4gICAgbWVhc3VyZTogY2RrdGYuc3RyaW5nVG9UZXJyYWZvcm0oc3RydWN0IS5tZWFzdXJlKSxcbiAgICBtZWFzdXJlX2ZvcmVncm91bmQ6IGNka3RmLnN0cmluZ1RvVGVycmFmb3JtKHN0cnVjdCEubWVhc3VyZUZvcmVncm91bmQpLFxuICAgIHByaW1hcnlfYmFja2dyb3VuZDogY2RrdGYuc3RyaW5nVG9UZXJyYWZvcm0oc3RydWN0IS5wcmltYXJ5QmFja2dyb3VuZCksXG4gICAgcHJpbWFyeV9mb3JlZ3JvdW5kOiBjZGt0Zi5zdHJpbmdUb1RlcnJhZm9ybShzdHJ1Y3QhLnByaW1hcnlGb3JlZ3JvdW5kKSxcbiAgICBzZWNvbmRhcnlfYmFja2dyb3VuZDogY2RrdGYuc3RyaW5nVG9UZXJyYWZvcm0oc3RydWN0IS5zZWNvbmRhcnlCYWNrZ3JvdW5kKSxcbiAgICBzZWNvbmRhcnlfZm9yZWdyb3VuZDogY2RrdGYuc3RyaW5nVG9UZXJyYWZvcm0oc3RydWN0IS5zZWNvbmRhcnlGb3JlZ3JvdW5kKSxcbiAgICBzdWNjZXNzOiBjZGt0Zi5zdHJpbmdUb1RlcnJhZm9ybShzdHJ1Y3QhLnN1Y2Nlc3MpLFxuICAgIHN1Y2Nlc3NfZm9yZWdyb3VuZDogY2RrdGYuc3RyaW5nVG9UZXJyYWZvcm0oc3RydWN0IS5zdWNjZXNzRm9yZWdyb3VuZCksXG4gICAgd2FybmluZzogY2RrdGYuc3RyaW5nVG9UZXJyYWZvcm0oc3RydWN0IS53YXJuaW5nKSxcbiAgICB3YXJuaW5nX2ZvcmVncm91bmQ6IGNka3RmLnN0cmluZ1RvVGVycmFmb3JtKHN0cnVjdCEud2FybmluZ0ZvcmVncm91bmQpLFxuICB9XG59XG5cbmV4cG9ydCBjbGFzcyBEYXRhQXdzY2NRdWlja3NpZ2h0VGhlbWVWZXJzaW9uQ29uZmlndXJhdGlvbiBleHRlbmRzIGNka3RmLkNvbXBsZXhDb21wdXRlZExpc3Qge1xuXG4gIC8vIGRhdGFfY29sb3JfcGFsZXR0ZSAtIGNvbXB1dGVkOiB0cnVlLCBvcHRpb25hbDogZmFsc2UsIHJlcXVpcmVkOiBmYWxzZVxuICBwdWJsaWMgZ2V0IGRhdGFDb2xvclBhbGV0dGUoKSB7XG4gICAgcmV0dXJuIHRoaXMuaW50ZXJwb2xhdGlvbkZvckF0dHJpYnV0ZSgnZGF0YV9jb2xvcl9wYWxldHRlJykgYXMgYW55O1xuICB9XG5cbiAgLy8gc2hlZXQgLSBjb21wdXRlZDogdHJ1ZSwgb3B0aW9uYWw6IGZhbHNlLCByZXF1aXJlZDogZmFsc2VcbiAgcHVibGljIGdldCBzaGVldCgpIHtcbiAgICByZXR1cm4gdGhpcy5pbnRlcnBvbGF0aW9uRm9yQXR0cmlidXRlKCdzaGVldCcpIGFzIGFueTtcbiAgfVxuXG4gIC8vIHR5cG9ncmFwaHkgLSBjb21wdXRlZDogdHJ1ZSwgb3B0aW9uYWw6IGZhbHNlLCByZXF1aXJlZDogZmFsc2VcbiAgcHVibGljIGdldCB0eXBvZ3JhcGh5KCkge1xuICAgIHJldHVybiB0aGlzLmludGVycG9sYXRpb25Gb3JBdHRyaWJ1dGUoJ3R5cG9ncmFwaHknKSBhcyBhbnk7XG4gIH1cblxuICAvLyB1aV9jb2xvcl9wYWxldHRlIC0gY29tcHV0ZWQ6IHRydWUsIG9wdGlvbmFsOiBmYWxzZSwgcmVxdWlyZWQ6IGZhbHNlXG4gIHB1YmxpYyBnZXQgdWlDb2xvclBhbGV0dGUoKSB7XG4gICAgcmV0dXJuIHRoaXMuaW50ZXJwb2xhdGlvbkZvckF0dHJpYnV0ZSgndWlfY29sb3JfcGFsZXR0ZScpIGFzIGFueTtcbiAgfVxufVxuXG5leHBvcnQgZnVuY3Rpb24gZGF0YUF3c2NjUXVpY2tzaWdodFRoZW1lVmVyc2lvbkNvbmZpZ3VyYXRpb25Ub1RlcnJhZm9ybShzdHJ1Y3Q/OiBEYXRhQXdzY2NRdWlja3NpZ2h0VGhlbWVWZXJzaW9uQ29uZmlndXJhdGlvbik6IGFueSB7XG4gIGlmICghY2RrdGYuY2FuSW5zcGVjdChzdHJ1Y3QpKSB7IHJldHVybiBzdHJ1Y3Q7IH1cbiAgcmV0dXJuIHtcbiAgICBkYXRhX2NvbG9yX3BhbGV0dGU6IGRhdGFBd3NjY1F1aWNrc2lnaHRUaGVtZVZlcnNpb25Db25maWd1cmF0aW9uRGF0YUNvbG9yUGFsZXR0ZVRvVGVycmFmb3JtKHN0cnVjdCEuZGF0YUNvbG9yUGFsZXR0ZSksXG4gICAgc2hlZXQ6IGRhdGFBd3NjY1F1aWNrc2lnaHRUaGVtZVZlcnNpb25Db25maWd1cmF0aW9uU2hlZXRUb1RlcnJhZm9ybShzdHJ1Y3QhLnNoZWV0KSxcbiAgICB0eXBvZ3JhcGh5OiBkYXRhQXdzY2NRdWlja3NpZ2h0VGhlbWVWZXJzaW9uQ29uZmlndXJhdGlvblR5cG9ncmFwaHlUb1RlcnJhZm9ybShzdHJ1Y3QhLnR5cG9ncmFwaHkpLFxuICAgIHVpX2NvbG9yX3BhbGV0dGU6IGRhdGFBd3NjY1F1aWNrc2lnaHRUaGVtZVZlcnNpb25Db25maWd1cmF0aW9uVWlDb2xvclBhbGV0dGVUb1RlcnJhZm9ybShzdHJ1Y3QhLnVpQ29sb3JQYWxldHRlKSxcbiAgfVxufVxuXG5leHBvcnQgY2xhc3MgRGF0YUF3c2NjUXVpY2tzaWdodFRoZW1lVmVyc2lvbkVycm9ycyBleHRlbmRzIGNka3RmLkNvbXBsZXhDb21wdXRlZExpc3Qge1xuXG4gIC8vIG1lc3NhZ2UgLSBjb21wdXRlZDogdHJ1ZSwgb3B0aW9uYWw6IGZhbHNlLCByZXF1aXJlZDogZmFsc2VcbiAgcHVibGljIGdldCBtZXNzYWdlKCkge1xuICAgIHJldHVybiB0aGlzLmdldFN0cmluZ0F0dHJpYnV0ZSgnbWVzc2FnZScpO1xuICB9XG5cbiAgLy8gdHlwZSAtIGNvbXB1dGVkOiB0cnVlLCBvcHRpb25hbDogZmFsc2UsIHJlcXVpcmVkOiBmYWxzZVxuICBwdWJsaWMgZ2V0IHR5cGUoKSB7XG4gICAgcmV0dXJuIHRoaXMuZ2V0U3RyaW5nQXR0cmlidXRlKCd0eXBlJyk7XG4gIH1cbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGRhdGFBd3NjY1F1aWNrc2lnaHRUaGVtZVZlcnNpb25FcnJvcnNUb1RlcnJhZm9ybShzdHJ1Y3Q/OiBEYXRhQXdzY2NRdWlja3NpZ2h0VGhlbWVWZXJzaW9uRXJyb3JzKTogYW55IHtcbiAgaWYgKCFjZGt0Zi5jYW5JbnNwZWN0KHN0cnVjdCkpIHsgcmV0dXJuIHN0cnVjdDsgfVxuICByZXR1cm4ge1xuICAgIG1lc3NhZ2U6IGNka3RmLnN0cmluZ1RvVGVycmFmb3JtKHN0cnVjdCEubWVzc2FnZSksXG4gICAgdHlwZTogY2RrdGYuc3RyaW5nVG9UZXJyYWZvcm0oc3RydWN0IS50eXBlKSxcbiAgfVxufVxuXG5leHBvcnQgY2xhc3MgRGF0YUF3c2NjUXVpY2tzaWdodFRoZW1lVmVyc2lvbiBleHRlbmRzIGNka3RmLkNvbXBsZXhDb21wdXRlZExpc3Qge1xuXG4gIC8vIGFybiAtIGNvbXB1dGVkOiB0cnVlLCBvcHRpb25hbDogZmFsc2UsIHJlcXVpcmVkOiBmYWxzZVxuICBwdWJsaWMgZ2V0IGFybigpIHtcbiAgICByZXR1cm4gdGhpcy5nZXRTdHJpbmdBdHRyaWJ1dGUoJ2FybicpO1xuICB9XG5cbiAgLy8gYmFzZV90aGVtZV9pZCAtIGNvbXB1dGVkOiB0cnVlLCBvcHRpb25hbDogZmFsc2UsIHJlcXVpcmVkOiBmYWxzZVxuICBwdWJsaWMgZ2V0IGJhc2VUaGVtZUlkKCkge1xuICAgIHJldHVybiB0aGlzLmdldFN0cmluZ0F0dHJpYnV0ZSgnYmFzZV90aGVtZV9pZCcpO1xuICB9XG5cbiAgLy8gY29uZmlndXJhdGlvbiAtIGNvbXB1dGVkOiB0cnVlLCBvcHRpb25hbDogZmFsc2UsIHJlcXVpcmVkOiBmYWxzZVxuICBwdWJsaWMgZ2V0IGNvbmZpZ3VyYXRpb24oKSB7XG4gICAgcmV0dXJuIHRoaXMuaW50ZXJwb2xhdGlvbkZvckF0dHJpYnV0ZSgnY29uZmlndXJhdGlvbicpIGFzIGFueTtcbiAgfVxuXG4gIC8vIGNyZWF0ZWRfdGltZSAtIGNvbXB1dGVkOiB0cnVlLCBvcHRpb25hbDogZmFsc2UsIHJlcXVpcmVkOiBmYWxzZVxuICBwdWJsaWMgZ2V0IGNyZWF0ZWRUaW1lKCkge1xuICAgIHJldHVybiB0aGlzLmdldFN0cmluZ0F0dHJpYnV0ZSgnY3JlYXRlZF90aW1lJyk7XG4gIH1cblxuICAvLyBkZXNjcmlwdGlvbiAtIGNvbXB1dGVkOiB0cnVlLCBvcHRpb25hbDogZmFsc2UsIHJlcXVpcmVkOiBmYWxzZVxuICBwdWJsaWMgZ2V0IGRlc2NyaXB0aW9uKCkge1xuICAgIHJldHVybiB0aGlzLmdldFN0cmluZ0F0dHJpYnV0ZSgnZGVzY3JpcHRpb24nKTtcbiAgfVxuXG4gIC8vIGVycm9ycyAtIGNvbXB1dGVkOiB0cnVlLCBvcHRpb25hbDogZmFsc2UsIHJlcXVpcmVkOiBmYWxzZVxuICBwdWJsaWMgZ2V0IGVycm9ycygpIHtcbiAgICByZXR1cm4gdGhpcy5pbnRlcnBvbGF0aW9uRm9yQXR0cmlidXRlKCdlcnJvcnMnKSBhcyBhbnk7XG4gIH1cblxuICAvLyBzdGF0dXMgLSBjb21wdXRlZDogdHJ1ZSwgb3B0aW9uYWw6IGZhbHNlLCByZXF1aXJlZDogZmFsc2VcbiAgcHVibGljIGdldCBzdGF0dXMoKSB7XG4gICAgcmV0dXJuIHRoaXMuZ2V0U3RyaW5nQXR0cmlidXRlKCdzdGF0dXMnKTtcbiAgfVxuXG4gIC8vIHZlcnNpb25fbnVtYmVyIC0gY29tcHV0ZWQ6IHRydWUsIG9wdGlvbmFsOiBmYWxzZSwgcmVxdWlyZWQ6IGZhbHNlXG4gIHB1YmxpYyBnZXQgdmVyc2lvbk51bWJlcigpIHtcbiAgICByZXR1cm4gdGhpcy5nZXROdW1iZXJBdHRyaWJ1dGUoJ3ZlcnNpb25fbnVtYmVyJyk7XG4gIH1cbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGRhdGFBd3NjY1F1aWNrc2lnaHRUaGVtZVZlcnNpb25Ub1RlcnJhZm9ybShzdHJ1Y3Q/OiBEYXRhQXdzY2NRdWlja3NpZ2h0VGhlbWVWZXJzaW9uKTogYW55IHtcbiAgaWYgKCFjZGt0Zi5jYW5JbnNwZWN0KHN0cnVjdCkpIHsgcmV0dXJuIHN0cnVjdDsgfVxuICByZXR1cm4ge1xuICAgIGFybjogY2RrdGYuc3RyaW5nVG9UZXJyYWZvcm0oc3RydWN0IS5hcm4pLFxuICAgIGJhc2VfdGhlbWVfaWQ6IGNka3RmLnN0cmluZ1RvVGVycmFmb3JtKHN0cnVjdCEuYmFzZVRoZW1lSWQpLFxuICAgIGNvbmZpZ3VyYXRpb246IGRhdGFBd3NjY1F1aWNrc2lnaHRUaGVtZVZlcnNpb25Db25maWd1cmF0aW9uVG9UZXJyYWZvcm0oc3RydWN0IS5jb25maWd1cmF0aW9uKSxcbiAgICBjcmVhdGVkX3RpbWU6IGNka3RmLnN0cmluZ1RvVGVycmFmb3JtKHN0cnVjdCEuY3JlYXRlZFRpbWUpLFxuICAgIGRlc2NyaXB0aW9uOiBjZGt0Zi5zdHJpbmdUb1RlcnJhZm9ybShzdHJ1Y3QhLmRlc2NyaXB0aW9uKSxcbiAgICBlcnJvcnM6IGNka3RmLmxpc3RNYXBwZXIoZGF0YUF3c2NjUXVpY2tzaWdodFRoZW1lVmVyc2lvbkVycm9yc1RvVGVycmFmb3JtKShzdHJ1Y3QhLmVycm9ycyksXG4gICAgc3RhdHVzOiBjZGt0Zi5zdHJpbmdUb1RlcnJhZm9ybShzdHJ1Y3QhLnN0YXR1cyksXG4gICAgdmVyc2lvbl9udW1iZXI6IGNka3RmLm51bWJlclRvVGVycmFmb3JtKHN0cnVjdCEudmVyc2lvbk51bWJlciksXG4gIH1cbn1cblxuXG4vKipcbiogUmVwcmVzZW50cyBhIHtAbGluayBodHRwczovL3d3dy50ZXJyYWZvcm0uaW8vZG9jcy9wcm92aWRlcnMvYXdzY2MvZC9xdWlja3NpZ2h0X3RoZW1lLmh0bWwgYXdzY2NfcXVpY2tzaWdodF90aGVtZX1cbiovXG5leHBvcnQgY2xhc3MgRGF0YUF3c2NjUXVpY2tzaWdodFRoZW1lIGV4dGVuZHMgY2RrdGYuVGVycmFmb3JtRGF0YVNvdXJjZSB7XG5cbiAgLy8gPT09PT09PT09PT09PT09PT1cbiAgLy8gU1RBVElDIFBST1BFUlRJRVNcbiAgLy8gPT09PT09PT09PT09PT09PT1cbiAgcHVibGljIHN0YXRpYyByZWFkb25seSB0ZlJlc291cmNlVHlwZTogc3RyaW5nID0gXCJhd3NjY19xdWlja3NpZ2h0X3RoZW1lXCI7XG5cbiAgLy8gPT09PT09PT09PT1cbiAgLy8gSU5JVElBTElaRVJcbiAgLy8gPT09PT09PT09PT1cblxuICAvKipcbiAgKiBDcmVhdGUgYSBuZXcge0BsaW5rIGh0dHBzOi8vd3d3LnRlcnJhZm9ybS5pby9kb2NzL3Byb3ZpZGVycy9hd3NjYy9kL3F1aWNrc2lnaHRfdGhlbWUuaHRtbCBhd3NjY19xdWlja3NpZ2h0X3RoZW1lfSBEYXRhIFNvdXJjZVxuICAqXG4gICogQHBhcmFtIHNjb3BlIFRoZSBzY29wZSBpbiB3aGljaCB0byBkZWZpbmUgdGhpcyBjb25zdHJ1Y3RcbiAgKiBAcGFyYW0gaWQgVGhlIHNjb3BlZCBjb25zdHJ1Y3QgSUQuIE11c3QgYmUgdW5pcXVlIGFtb25nc3Qgc2libGluZ3MgaW4gdGhlIHNhbWUgc2NvcGVcbiAgKiBAcGFyYW0gb3B0aW9ucyBEYXRhQXdzY2NRdWlja3NpZ2h0VGhlbWVDb25maWdcbiAgKi9cbiAgcHVibGljIGNvbnN0cnVjdG9yKHNjb3BlOiBDb25zdHJ1Y3QsIGlkOiBzdHJpbmcsIGNvbmZpZzogRGF0YUF3c2NjUXVpY2tzaWdodFRoZW1lQ29uZmlnKSB7XG4gICAgc3VwZXIoc2NvcGUsIGlkLCB7XG4gICAgICB0ZXJyYWZvcm1SZXNvdXJjZVR5cGU6ICdhd3NjY19xdWlja3NpZ2h0X3RoZW1lJyxcbiAgICAgIHRlcnJhZm9ybUdlbmVyYXRvck1ldGFkYXRhOiB7XG4gICAgICAgIHByb3ZpZGVyTmFtZTogJ2F3c2NjJ1xuICAgICAgfSxcbiAgICAgIHByb3ZpZGVyOiBjb25maWcucHJvdmlkZXIsXG4gICAgICBkZXBlbmRzT246IGNvbmZpZy5kZXBlbmRzT24sXG4gICAgICBjb3VudDogY29uZmlnLmNvdW50LFxuICAgICAgbGlmZWN5Y2xlOiBjb25maWcubGlmZWN5Y2xlXG4gICAgfSk7XG4gICAgdGhpcy5faWQgPSBjb25maWcuaWQ7XG4gIH1cblxuICAvLyA9PT09PT09PT09XG4gIC8vIEFUVFJJQlVURVNcbiAgLy8gPT09PT09PT09PVxuXG4gIC8vIGFybiAtIGNvbXB1dGVkOiB0cnVlLCBvcHRpb25hbDogZmFsc2UsIHJlcXVpcmVkOiBmYWxzZVxuICBwdWJsaWMgZ2V0IGFybigpIHtcbiAgICByZXR1cm4gdGhpcy5nZXRTdHJpbmdBdHRyaWJ1dGUoJ2FybicpO1xuICB9XG5cbiAgLy8gYXdzX2FjY291bnRfaWQgLSBjb21wdXRlZDogdHJ1ZSwgb3B0aW9uYWw6IGZhbHNlLCByZXF1aXJlZDogZmFsc2VcbiAgcHVibGljIGdldCBhd3NBY2NvdW50SWQoKSB7XG4gICAgcmV0dXJuIHRoaXMuZ2V0U3RyaW5nQXR0cmlidXRlKCdhd3NfYWNjb3VudF9pZCcpO1xuICB9XG5cbiAgLy8gYmFzZV90aGVtZV9pZCAtIGNvbXB1dGVkOiB0cnVlLCBvcHRpb25hbDogZmFsc2UsIHJlcXVpcmVkOiBmYWxzZVxuICBwdWJsaWMgZ2V0IGJhc2VUaGVtZUlkKCkge1xuICAgIHJldHVybiB0aGlzLmdldFN0cmluZ0F0dHJpYnV0ZSgnYmFzZV90aGVtZV9pZCcpO1xuICB9XG5cbiAgLy8gY29uZmlndXJhdGlvbiAtIGNvbXB1dGVkOiB0cnVlLCBvcHRpb25hbDogZmFsc2UsIHJlcXVpcmVkOiBmYWxzZVxuICBwdWJsaWMgZ2V0IGNvbmZpZ3VyYXRpb24oKSB7XG4gICAgcmV0dXJuIHRoaXMuaW50ZXJwb2xhdGlvbkZvckF0dHJpYnV0ZSgnY29uZmlndXJhdGlvbicpIGFzIGFueTtcbiAgfVxuXG4gIC8vIGNyZWF0ZWRfdGltZSAtIGNvbXB1dGVkOiB0cnVlLCBvcHRpb25hbDogZmFsc2UsIHJlcXVpcmVkOiBmYWxzZVxuICBwdWJsaWMgZ2V0IGNyZWF0ZWRUaW1lKCkge1xuICAgIHJldHVybiB0aGlzLmdldFN0cmluZ0F0dHJpYnV0ZSgnY3JlYXRlZF90aW1lJyk7XG4gIH1cblxuICAvLyBpZCAtIGNvbXB1dGVkOiBmYWxzZSwgb3B0aW9uYWw6IGZhbHNlLCByZXF1aXJlZDogdHJ1ZVxuICBwcml2YXRlIF9pZDogc3RyaW5nO1xuICBwdWJsaWMgZ2V0IGlkKCkge1xuICAgIHJldHVybiB0aGlzLmdldFN0cmluZ0F0dHJpYnV0ZSgnaWQnKTtcbiAgfVxuICBwdWJsaWMgc2V0IGlkKHZhbHVlOiBzdHJpbmcpIHtcbiAgICB0aGlzLl9pZCA9IHZhbHVlO1xuICB9XG4gIC8vIFRlbXBvcmFyaWx5IGV4cG9zZSBpbnB1dCB2YWx1ZS4gVXNlIHdpdGggY2F1dGlvbi5cbiAgcHVibGljIGdldCBpZElucHV0KCkge1xuICAgIHJldHVybiB0aGlzLl9pZFxuICB9XG5cbiAgLy8gbGFzdF91cGRhdGVkX3RpbWUgLSBjb21wdXRlZDogdHJ1ZSwgb3B0aW9uYWw6IGZhbHNlLCByZXF1aXJlZDogZmFsc2VcbiAgcHVibGljIGdldCBsYXN0VXBkYXRlZFRpbWUoKSB7XG4gICAgcmV0dXJuIHRoaXMuZ2V0U3RyaW5nQXR0cmlidXRlKCdsYXN0X3VwZGF0ZWRfdGltZScpO1xuICB9XG5cbiAgLy8gbmFtZSAtIGNvbXB1dGVkOiB0cnVlLCBvcHRpb25hbDogZmFsc2UsIHJlcXVpcmVkOiBmYWxzZVxuICBwdWJsaWMgZ2V0IG5hbWUoKSB7XG4gICAgcmV0dXJuIHRoaXMuZ2V0U3RyaW5nQXR0cmlidXRlKCduYW1lJyk7XG4gIH1cblxuICAvLyBwZXJtaXNzaW9ucyAtIGNvbXB1dGVkOiB0cnVlLCBvcHRpb25hbDogZmFsc2UsIHJlcXVpcmVkOiBmYWxzZVxuICBwdWJsaWMgZ2V0IHBlcm1pc3Npb25zKCkge1xuICAgIHJldHVybiB0aGlzLmludGVycG9sYXRpb25Gb3JBdHRyaWJ1dGUoJ3Blcm1pc3Npb25zJykgYXMgYW55O1xuICB9XG5cbiAgLy8gdGFncyAtIGNvbXB1dGVkOiB0cnVlLCBvcHRpb25hbDogZmFsc2UsIHJlcXVpcmVkOiBmYWxzZVxuICBwdWJsaWMgZ2V0IHRhZ3MoKSB7XG4gICAgcmV0dXJuIHRoaXMuaW50ZXJwb2xhdGlvbkZvckF0dHJpYnV0ZSgndGFncycpIGFzIGFueTtcbiAgfVxuXG4gIC8vIHRoZW1lX2lkIC0gY29tcHV0ZWQ6IHRydWUsIG9wdGlvbmFsOiBmYWxzZSwgcmVxdWlyZWQ6IGZhbHNlXG4gIHB1YmxpYyBnZXQgdGhlbWVJZCgpIHtcbiAgICByZXR1cm4gdGhpcy5nZXRTdHJpbmdBdHRyaWJ1dGUoJ3RoZW1lX2lkJyk7XG4gIH1cblxuICAvLyB0eXBlIC0gY29tcHV0ZWQ6IHRydWUsIG9wdGlvbmFsOiBmYWxzZSwgcmVxdWlyZWQ6IGZhbHNlXG4gIHB1YmxpYyBnZXQgdHlwZSgpIHtcbiAgICByZXR1cm4gdGhpcy5nZXRTdHJpbmdBdHRyaWJ1dGUoJ3R5cGUnKTtcbiAgfVxuXG4gIC8vIHZlcnNpb24gLSBjb21wdXRlZDogdHJ1ZSwgb3B0aW9uYWw6IGZhbHNlLCByZXF1aXJlZDogZmFsc2VcbiAgcHVibGljIGdldCB2ZXJzaW9uKCkge1xuICAgIHJldHVybiB0aGlzLmludGVycG9sYXRpb25Gb3JBdHRyaWJ1dGUoJ3ZlcnNpb24nKSBhcyBhbnk7XG4gIH1cblxuICAvLyB2ZXJzaW9uX2Rlc2NyaXB0aW9uIC0gY29tcHV0ZWQ6IHRydWUsIG9wdGlvbmFsOiBmYWxzZSwgcmVxdWlyZWQ6IGZhbHNlXG4gIHB1YmxpYyBnZXQgdmVyc2lvbkRlc2NyaXB0aW9uKCkge1xuICAgIHJldHVybiB0aGlzLmdldFN0cmluZ0F0dHJpYnV0ZSgndmVyc2lvbl9kZXNjcmlwdGlvbicpO1xuICB9XG5cbiAgLy8gPT09PT09PT09XG4gIC8vIFNZTlRIRVNJU1xuICAvLyA9PT09PT09PT1cblxuICBwcm90ZWN0ZWQgc3ludGhlc2l6ZUF0dHJpYnV0ZXMoKTogeyBbbmFtZTogc3RyaW5nXTogYW55IH0ge1xuICAgIHJldHVybiB7XG4gICAgICBpZDogY2RrdGYuc3RyaW5nVG9UZXJyYWZvcm0odGhpcy5faWQpLFxuICAgIH07XG4gIH1cbn1cbiJdfQ==