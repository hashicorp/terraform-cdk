// https://www.terraform.io/docs/providers/awscc/d/quicksight_theme.html
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DataAwsccQuicksightThemeConfig extends cdktf.TerraformMetaArguments {
  /**
  * Uniquely identifies the resource.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/d/quicksight_theme.html#id DataAwsccQuicksightTheme#id}
  */
  readonly id: string;
}
export class DataAwsccQuicksightThemeConfigurationDataColorPalette extends cdktf.ComplexComputedList {

  // colors - computed: true, optional: false, required: false
  public get colors() {
    return this.getListAttribute('colors');
  }

  // empty_fill_color - computed: true, optional: false, required: false
  public get emptyFillColor() {
    return this.getStringAttribute('empty_fill_color');
  }

  // min_max_gradient - computed: true, optional: false, required: false
  public get minMaxGradient() {
    return this.getListAttribute('min_max_gradient');
  }
}

export function dataAwsccQuicksightThemeConfigurationDataColorPaletteToTerraform(struct?: DataAwsccQuicksightThemeConfigurationDataColorPalette): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    colors: cdktf.listMapper(cdktf.stringToTerraform)(struct!.colors),
    empty_fill_color: cdktf.stringToTerraform(struct!.emptyFillColor),
    min_max_gradient: cdktf.listMapper(cdktf.stringToTerraform)(struct!.minMaxGradient),
  }
}

export class DataAwsccQuicksightThemeConfigurationSheetTileBorder extends cdktf.ComplexComputedList {

  // show - computed: true, optional: false, required: false
  public get show() {
    return this.getBooleanAttribute('show');
  }
}

export function dataAwsccQuicksightThemeConfigurationSheetTileBorderToTerraform(struct?: DataAwsccQuicksightThemeConfigurationSheetTileBorder): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    show: cdktf.booleanToTerraform(struct!.show),
  }
}

export class DataAwsccQuicksightThemeConfigurationSheetTile extends cdktf.ComplexComputedList {

  // border - computed: true, optional: false, required: false
  public get border() {
    return this.interpolationForAttribute('border') as any;
  }
}

export function dataAwsccQuicksightThemeConfigurationSheetTileToTerraform(struct?: DataAwsccQuicksightThemeConfigurationSheetTile): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    border: dataAwsccQuicksightThemeConfigurationSheetTileBorderToTerraform(struct!.border),
  }
}

export class DataAwsccQuicksightThemeConfigurationSheetTileLayoutGutter extends cdktf.ComplexComputedList {

  // show - computed: true, optional: false, required: false
  public get show() {
    return this.getBooleanAttribute('show');
  }
}

export function dataAwsccQuicksightThemeConfigurationSheetTileLayoutGutterToTerraform(struct?: DataAwsccQuicksightThemeConfigurationSheetTileLayoutGutter): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    show: cdktf.booleanToTerraform(struct!.show),
  }
}

export class DataAwsccQuicksightThemeConfigurationSheetTileLayoutMargin extends cdktf.ComplexComputedList {

  // show - computed: true, optional: false, required: false
  public get show() {
    return this.getBooleanAttribute('show');
  }
}

export function dataAwsccQuicksightThemeConfigurationSheetTileLayoutMarginToTerraform(struct?: DataAwsccQuicksightThemeConfigurationSheetTileLayoutMargin): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    show: cdktf.booleanToTerraform(struct!.show),
  }
}

export class DataAwsccQuicksightThemeConfigurationSheetTileLayout extends cdktf.ComplexComputedList {

  // gutter - computed: true, optional: false, required: false
  public get gutter() {
    return this.interpolationForAttribute('gutter') as any;
  }

  // margin - computed: true, optional: false, required: false
  public get margin() {
    return this.interpolationForAttribute('margin') as any;
  }
}

export function dataAwsccQuicksightThemeConfigurationSheetTileLayoutToTerraform(struct?: DataAwsccQuicksightThemeConfigurationSheetTileLayout): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    gutter: dataAwsccQuicksightThemeConfigurationSheetTileLayoutGutterToTerraform(struct!.gutter),
    margin: dataAwsccQuicksightThemeConfigurationSheetTileLayoutMarginToTerraform(struct!.margin),
  }
}

export class DataAwsccQuicksightThemeConfigurationSheet extends cdktf.ComplexComputedList {

  // tile - computed: true, optional: false, required: false
  public get tile() {
    return this.interpolationForAttribute('tile') as any;
  }

  // tile_layout - computed: true, optional: false, required: false
  public get tileLayout() {
    return this.interpolationForAttribute('tile_layout') as any;
  }
}

export function dataAwsccQuicksightThemeConfigurationSheetToTerraform(struct?: DataAwsccQuicksightThemeConfigurationSheet): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    tile: dataAwsccQuicksightThemeConfigurationSheetTileToTerraform(struct!.tile),
    tile_layout: dataAwsccQuicksightThemeConfigurationSheetTileLayoutToTerraform(struct!.tileLayout),
  }
}

export class DataAwsccQuicksightThemeConfigurationTypographyFontFamilies extends cdktf.ComplexComputedList {

  // font_family - computed: true, optional: false, required: false
  public get fontFamily() {
    return this.getStringAttribute('font_family');
  }
}

export function dataAwsccQuicksightThemeConfigurationTypographyFontFamiliesToTerraform(struct?: DataAwsccQuicksightThemeConfigurationTypographyFontFamilies): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    font_family: cdktf.stringToTerraform(struct!.fontFamily),
  }
}

export class DataAwsccQuicksightThemeConfigurationTypography extends cdktf.ComplexComputedList {

  // font_families - computed: true, optional: false, required: false
  public get fontFamilies() {
    return this.interpolationForAttribute('font_families') as any;
  }
}

export function dataAwsccQuicksightThemeConfigurationTypographyToTerraform(struct?: DataAwsccQuicksightThemeConfigurationTypography): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    font_families: cdktf.listMapper(dataAwsccQuicksightThemeConfigurationTypographyFontFamiliesToTerraform)(struct!.fontFamilies),
  }
}

export class DataAwsccQuicksightThemeConfigurationUiColorPalette extends cdktf.ComplexComputedList {

  // accent - computed: true, optional: false, required: false
  public get accent() {
    return this.getStringAttribute('accent');
  }

  // accent_foreground - computed: true, optional: false, required: false
  public get accentForeground() {
    return this.getStringAttribute('accent_foreground');
  }

  // danger - computed: true, optional: false, required: false
  public get danger() {
    return this.getStringAttribute('danger');
  }

  // danger_foreground - computed: true, optional: false, required: false
  public get dangerForeground() {
    return this.getStringAttribute('danger_foreground');
  }

  // dimension - computed: true, optional: false, required: false
  public get dimension() {
    return this.getStringAttribute('dimension');
  }

  // dimension_foreground - computed: true, optional: false, required: false
  public get dimensionForeground() {
    return this.getStringAttribute('dimension_foreground');
  }

  // measure - computed: true, optional: false, required: false
  public get measure() {
    return this.getStringAttribute('measure');
  }

  // measure_foreground - computed: true, optional: false, required: false
  public get measureForeground() {
    return this.getStringAttribute('measure_foreground');
  }

  // primary_background - computed: true, optional: false, required: false
  public get primaryBackground() {
    return this.getStringAttribute('primary_background');
  }

  // primary_foreground - computed: true, optional: false, required: false
  public get primaryForeground() {
    return this.getStringAttribute('primary_foreground');
  }

  // secondary_background - computed: true, optional: false, required: false
  public get secondaryBackground() {
    return this.getStringAttribute('secondary_background');
  }

  // secondary_foreground - computed: true, optional: false, required: false
  public get secondaryForeground() {
    return this.getStringAttribute('secondary_foreground');
  }

  // success - computed: true, optional: false, required: false
  public get success() {
    return this.getStringAttribute('success');
  }

  // success_foreground - computed: true, optional: false, required: false
  public get successForeground() {
    return this.getStringAttribute('success_foreground');
  }

  // warning - computed: true, optional: false, required: false
  public get warning() {
    return this.getStringAttribute('warning');
  }

  // warning_foreground - computed: true, optional: false, required: false
  public get warningForeground() {
    return this.getStringAttribute('warning_foreground');
  }
}

export function dataAwsccQuicksightThemeConfigurationUiColorPaletteToTerraform(struct?: DataAwsccQuicksightThemeConfigurationUiColorPalette): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    accent: cdktf.stringToTerraform(struct!.accent),
    accent_foreground: cdktf.stringToTerraform(struct!.accentForeground),
    danger: cdktf.stringToTerraform(struct!.danger),
    danger_foreground: cdktf.stringToTerraform(struct!.dangerForeground),
    dimension: cdktf.stringToTerraform(struct!.dimension),
    dimension_foreground: cdktf.stringToTerraform(struct!.dimensionForeground),
    measure: cdktf.stringToTerraform(struct!.measure),
    measure_foreground: cdktf.stringToTerraform(struct!.measureForeground),
    primary_background: cdktf.stringToTerraform(struct!.primaryBackground),
    primary_foreground: cdktf.stringToTerraform(struct!.primaryForeground),
    secondary_background: cdktf.stringToTerraform(struct!.secondaryBackground),
    secondary_foreground: cdktf.stringToTerraform(struct!.secondaryForeground),
    success: cdktf.stringToTerraform(struct!.success),
    success_foreground: cdktf.stringToTerraform(struct!.successForeground),
    warning: cdktf.stringToTerraform(struct!.warning),
    warning_foreground: cdktf.stringToTerraform(struct!.warningForeground),
  }
}

export class DataAwsccQuicksightThemeConfiguration extends cdktf.ComplexComputedList {

  // data_color_palette - computed: true, optional: false, required: false
  public get dataColorPalette() {
    return this.interpolationForAttribute('data_color_palette') as any;
  }

  // sheet - computed: true, optional: false, required: false
  public get sheet() {
    return this.interpolationForAttribute('sheet') as any;
  }

  // typography - computed: true, optional: false, required: false
  public get typography() {
    return this.interpolationForAttribute('typography') as any;
  }

  // ui_color_palette - computed: true, optional: false, required: false
  public get uiColorPalette() {
    return this.interpolationForAttribute('ui_color_palette') as any;
  }
}

export function dataAwsccQuicksightThemeConfigurationToTerraform(struct?: DataAwsccQuicksightThemeConfiguration): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    data_color_palette: dataAwsccQuicksightThemeConfigurationDataColorPaletteToTerraform(struct!.dataColorPalette),
    sheet: dataAwsccQuicksightThemeConfigurationSheetToTerraform(struct!.sheet),
    typography: dataAwsccQuicksightThemeConfigurationTypographyToTerraform(struct!.typography),
    ui_color_palette: dataAwsccQuicksightThemeConfigurationUiColorPaletteToTerraform(struct!.uiColorPalette),
  }
}

export class DataAwsccQuicksightThemePermissions extends cdktf.ComplexComputedList {

  // actions - computed: true, optional: false, required: false
  public get actions() {
    return this.getListAttribute('actions');
  }

  // principal - computed: true, optional: false, required: false
  public get principal() {
    return this.getStringAttribute('principal');
  }
}

export function dataAwsccQuicksightThemePermissionsToTerraform(struct?: DataAwsccQuicksightThemePermissions): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    actions: cdktf.listMapper(cdktf.stringToTerraform)(struct!.actions),
    principal: cdktf.stringToTerraform(struct!.principal),
  }
}

export class DataAwsccQuicksightThemeTags extends cdktf.ComplexComputedList {

  // key - computed: true, optional: false, required: false
  public get key() {
    return this.getStringAttribute('key');
  }

  // value - computed: true, optional: false, required: false
  public get value() {
    return this.getStringAttribute('value');
  }
}

export function dataAwsccQuicksightThemeTagsToTerraform(struct?: DataAwsccQuicksightThemeTags): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    key: cdktf.stringToTerraform(struct!.key),
    value: cdktf.stringToTerraform(struct!.value),
  }
}

export class DataAwsccQuicksightThemeVersionConfigurationDataColorPalette extends cdktf.ComplexComputedList {

  // colors - computed: true, optional: false, required: false
  public get colors() {
    return this.getListAttribute('colors');
  }

  // empty_fill_color - computed: true, optional: false, required: false
  public get emptyFillColor() {
    return this.getStringAttribute('empty_fill_color');
  }

  // min_max_gradient - computed: true, optional: false, required: false
  public get minMaxGradient() {
    return this.getListAttribute('min_max_gradient');
  }
}

export function dataAwsccQuicksightThemeVersionConfigurationDataColorPaletteToTerraform(struct?: DataAwsccQuicksightThemeVersionConfigurationDataColorPalette): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    colors: cdktf.listMapper(cdktf.stringToTerraform)(struct!.colors),
    empty_fill_color: cdktf.stringToTerraform(struct!.emptyFillColor),
    min_max_gradient: cdktf.listMapper(cdktf.stringToTerraform)(struct!.minMaxGradient),
  }
}

export class DataAwsccQuicksightThemeVersionConfigurationSheetTileBorder extends cdktf.ComplexComputedList {

  // show - computed: true, optional: false, required: false
  public get show() {
    return this.getBooleanAttribute('show');
  }
}

export function dataAwsccQuicksightThemeVersionConfigurationSheetTileBorderToTerraform(struct?: DataAwsccQuicksightThemeVersionConfigurationSheetTileBorder): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    show: cdktf.booleanToTerraform(struct!.show),
  }
}

export class DataAwsccQuicksightThemeVersionConfigurationSheetTile extends cdktf.ComplexComputedList {

  // border - computed: true, optional: false, required: false
  public get border() {
    return this.interpolationForAttribute('border') as any;
  }
}

export function dataAwsccQuicksightThemeVersionConfigurationSheetTileToTerraform(struct?: DataAwsccQuicksightThemeVersionConfigurationSheetTile): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    border: dataAwsccQuicksightThemeVersionConfigurationSheetTileBorderToTerraform(struct!.border),
  }
}

export class DataAwsccQuicksightThemeVersionConfigurationSheetTileLayoutGutter extends cdktf.ComplexComputedList {

  // show - computed: true, optional: false, required: false
  public get show() {
    return this.getBooleanAttribute('show');
  }
}

export function dataAwsccQuicksightThemeVersionConfigurationSheetTileLayoutGutterToTerraform(struct?: DataAwsccQuicksightThemeVersionConfigurationSheetTileLayoutGutter): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    show: cdktf.booleanToTerraform(struct!.show),
  }
}

export class DataAwsccQuicksightThemeVersionConfigurationSheetTileLayoutMargin extends cdktf.ComplexComputedList {

  // show - computed: true, optional: false, required: false
  public get show() {
    return this.getBooleanAttribute('show');
  }
}

export function dataAwsccQuicksightThemeVersionConfigurationSheetTileLayoutMarginToTerraform(struct?: DataAwsccQuicksightThemeVersionConfigurationSheetTileLayoutMargin): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    show: cdktf.booleanToTerraform(struct!.show),
  }
}

export class DataAwsccQuicksightThemeVersionConfigurationSheetTileLayout extends cdktf.ComplexComputedList {

  // gutter - computed: true, optional: false, required: false
  public get gutter() {
    return this.interpolationForAttribute('gutter') as any;
  }

  // margin - computed: true, optional: false, required: false
  public get margin() {
    return this.interpolationForAttribute('margin') as any;
  }
}

export function dataAwsccQuicksightThemeVersionConfigurationSheetTileLayoutToTerraform(struct?: DataAwsccQuicksightThemeVersionConfigurationSheetTileLayout): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    gutter: dataAwsccQuicksightThemeVersionConfigurationSheetTileLayoutGutterToTerraform(struct!.gutter),
    margin: dataAwsccQuicksightThemeVersionConfigurationSheetTileLayoutMarginToTerraform(struct!.margin),
  }
}

export class DataAwsccQuicksightThemeVersionConfigurationSheet extends cdktf.ComplexComputedList {

  // tile - computed: true, optional: false, required: false
  public get tile() {
    return this.interpolationForAttribute('tile') as any;
  }

  // tile_layout - computed: true, optional: false, required: false
  public get tileLayout() {
    return this.interpolationForAttribute('tile_layout') as any;
  }
}

export function dataAwsccQuicksightThemeVersionConfigurationSheetToTerraform(struct?: DataAwsccQuicksightThemeVersionConfigurationSheet): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    tile: dataAwsccQuicksightThemeVersionConfigurationSheetTileToTerraform(struct!.tile),
    tile_layout: dataAwsccQuicksightThemeVersionConfigurationSheetTileLayoutToTerraform(struct!.tileLayout),
  }
}

export class DataAwsccQuicksightThemeVersionConfigurationTypographyFontFamilies extends cdktf.ComplexComputedList {

  // font_family - computed: true, optional: false, required: false
  public get fontFamily() {
    return this.getStringAttribute('font_family');
  }
}

export function dataAwsccQuicksightThemeVersionConfigurationTypographyFontFamiliesToTerraform(struct?: DataAwsccQuicksightThemeVersionConfigurationTypographyFontFamilies): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    font_family: cdktf.stringToTerraform(struct!.fontFamily),
  }
}

export class DataAwsccQuicksightThemeVersionConfigurationTypography extends cdktf.ComplexComputedList {

  // font_families - computed: true, optional: false, required: false
  public get fontFamilies() {
    return this.interpolationForAttribute('font_families') as any;
  }
}

export function dataAwsccQuicksightThemeVersionConfigurationTypographyToTerraform(struct?: DataAwsccQuicksightThemeVersionConfigurationTypography): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    font_families: cdktf.listMapper(dataAwsccQuicksightThemeVersionConfigurationTypographyFontFamiliesToTerraform)(struct!.fontFamilies),
  }
}

export class DataAwsccQuicksightThemeVersionConfigurationUiColorPalette extends cdktf.ComplexComputedList {

  // accent - computed: true, optional: false, required: false
  public get accent() {
    return this.getStringAttribute('accent');
  }

  // accent_foreground - computed: true, optional: false, required: false
  public get accentForeground() {
    return this.getStringAttribute('accent_foreground');
  }

  // danger - computed: true, optional: false, required: false
  public get danger() {
    return this.getStringAttribute('danger');
  }

  // danger_foreground - computed: true, optional: false, required: false
  public get dangerForeground() {
    return this.getStringAttribute('danger_foreground');
  }

  // dimension - computed: true, optional: false, required: false
  public get dimension() {
    return this.getStringAttribute('dimension');
  }

  // dimension_foreground - computed: true, optional: false, required: false
  public get dimensionForeground() {
    return this.getStringAttribute('dimension_foreground');
  }

  // measure - computed: true, optional: false, required: false
  public get measure() {
    return this.getStringAttribute('measure');
  }

  // measure_foreground - computed: true, optional: false, required: false
  public get measureForeground() {
    return this.getStringAttribute('measure_foreground');
  }

  // primary_background - computed: true, optional: false, required: false
  public get primaryBackground() {
    return this.getStringAttribute('primary_background');
  }

  // primary_foreground - computed: true, optional: false, required: false
  public get primaryForeground() {
    return this.getStringAttribute('primary_foreground');
  }

  // secondary_background - computed: true, optional: false, required: false
  public get secondaryBackground() {
    return this.getStringAttribute('secondary_background');
  }

  // secondary_foreground - computed: true, optional: false, required: false
  public get secondaryForeground() {
    return this.getStringAttribute('secondary_foreground');
  }

  // success - computed: true, optional: false, required: false
  public get success() {
    return this.getStringAttribute('success');
  }

  // success_foreground - computed: true, optional: false, required: false
  public get successForeground() {
    return this.getStringAttribute('success_foreground');
  }

  // warning - computed: true, optional: false, required: false
  public get warning() {
    return this.getStringAttribute('warning');
  }

  // warning_foreground - computed: true, optional: false, required: false
  public get warningForeground() {
    return this.getStringAttribute('warning_foreground');
  }
}

export function dataAwsccQuicksightThemeVersionConfigurationUiColorPaletteToTerraform(struct?: DataAwsccQuicksightThemeVersionConfigurationUiColorPalette): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    accent: cdktf.stringToTerraform(struct!.accent),
    accent_foreground: cdktf.stringToTerraform(struct!.accentForeground),
    danger: cdktf.stringToTerraform(struct!.danger),
    danger_foreground: cdktf.stringToTerraform(struct!.dangerForeground),
    dimension: cdktf.stringToTerraform(struct!.dimension),
    dimension_foreground: cdktf.stringToTerraform(struct!.dimensionForeground),
    measure: cdktf.stringToTerraform(struct!.measure),
    measure_foreground: cdktf.stringToTerraform(struct!.measureForeground),
    primary_background: cdktf.stringToTerraform(struct!.primaryBackground),
    primary_foreground: cdktf.stringToTerraform(struct!.primaryForeground),
    secondary_background: cdktf.stringToTerraform(struct!.secondaryBackground),
    secondary_foreground: cdktf.stringToTerraform(struct!.secondaryForeground),
    success: cdktf.stringToTerraform(struct!.success),
    success_foreground: cdktf.stringToTerraform(struct!.successForeground),
    warning: cdktf.stringToTerraform(struct!.warning),
    warning_foreground: cdktf.stringToTerraform(struct!.warningForeground),
  }
}

export class DataAwsccQuicksightThemeVersionConfiguration extends cdktf.ComplexComputedList {

  // data_color_palette - computed: true, optional: false, required: false
  public get dataColorPalette() {
    return this.interpolationForAttribute('data_color_palette') as any;
  }

  // sheet - computed: true, optional: false, required: false
  public get sheet() {
    return this.interpolationForAttribute('sheet') as any;
  }

  // typography - computed: true, optional: false, required: false
  public get typography() {
    return this.interpolationForAttribute('typography') as any;
  }

  // ui_color_palette - computed: true, optional: false, required: false
  public get uiColorPalette() {
    return this.interpolationForAttribute('ui_color_palette') as any;
  }
}

export function dataAwsccQuicksightThemeVersionConfigurationToTerraform(struct?: DataAwsccQuicksightThemeVersionConfiguration): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    data_color_palette: dataAwsccQuicksightThemeVersionConfigurationDataColorPaletteToTerraform(struct!.dataColorPalette),
    sheet: dataAwsccQuicksightThemeVersionConfigurationSheetToTerraform(struct!.sheet),
    typography: dataAwsccQuicksightThemeVersionConfigurationTypographyToTerraform(struct!.typography),
    ui_color_palette: dataAwsccQuicksightThemeVersionConfigurationUiColorPaletteToTerraform(struct!.uiColorPalette),
  }
}

export class DataAwsccQuicksightThemeVersionErrors extends cdktf.ComplexComputedList {

  // message - computed: true, optional: false, required: false
  public get message() {
    return this.getStringAttribute('message');
  }

  // type - computed: true, optional: false, required: false
  public get type() {
    return this.getStringAttribute('type');
  }
}

export function dataAwsccQuicksightThemeVersionErrorsToTerraform(struct?: DataAwsccQuicksightThemeVersionErrors): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    message: cdktf.stringToTerraform(struct!.message),
    type: cdktf.stringToTerraform(struct!.type),
  }
}

export class DataAwsccQuicksightThemeVersion extends cdktf.ComplexComputedList {

  // arn - computed: true, optional: false, required: false
  public get arn() {
    return this.getStringAttribute('arn');
  }

  // base_theme_id - computed: true, optional: false, required: false
  public get baseThemeId() {
    return this.getStringAttribute('base_theme_id');
  }

  // configuration - computed: true, optional: false, required: false
  public get configuration() {
    return this.interpolationForAttribute('configuration') as any;
  }

  // created_time - computed: true, optional: false, required: false
  public get createdTime() {
    return this.getStringAttribute('created_time');
  }

  // description - computed: true, optional: false, required: false
  public get description() {
    return this.getStringAttribute('description');
  }

  // errors - computed: true, optional: false, required: false
  public get errors() {
    return this.interpolationForAttribute('errors') as any;
  }

  // status - computed: true, optional: false, required: false
  public get status() {
    return this.getStringAttribute('status');
  }

  // version_number - computed: true, optional: false, required: false
  public get versionNumber() {
    return this.getNumberAttribute('version_number');
  }
}

export function dataAwsccQuicksightThemeVersionToTerraform(struct?: DataAwsccQuicksightThemeVersion): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    arn: cdktf.stringToTerraform(struct!.arn),
    base_theme_id: cdktf.stringToTerraform(struct!.baseThemeId),
    configuration: dataAwsccQuicksightThemeVersionConfigurationToTerraform(struct!.configuration),
    created_time: cdktf.stringToTerraform(struct!.createdTime),
    description: cdktf.stringToTerraform(struct!.description),
    errors: cdktf.listMapper(dataAwsccQuicksightThemeVersionErrorsToTerraform)(struct!.errors),
    status: cdktf.stringToTerraform(struct!.status),
    version_number: cdktf.numberToTerraform(struct!.versionNumber),
  }
}


/**
* Represents a {@link https://www.terraform.io/docs/providers/awscc/d/quicksight_theme.html awscc_quicksight_theme}
*/
export class DataAwsccQuicksightTheme extends cdktf.TerraformDataSource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType: string = "awscc_quicksight_theme";

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
  public constructor(scope: Construct, id: string, config: DataAwsccQuicksightThemeConfig) {
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
  public get arn() {
    return this.getStringAttribute('arn');
  }

  // aws_account_id - computed: true, optional: false, required: false
  public get awsAccountId() {
    return this.getStringAttribute('aws_account_id');
  }

  // base_theme_id - computed: true, optional: false, required: false
  public get baseThemeId() {
    return this.getStringAttribute('base_theme_id');
  }

  // configuration - computed: true, optional: false, required: false
  public get configuration() {
    return this.interpolationForAttribute('configuration') as any;
  }

  // created_time - computed: true, optional: false, required: false
  public get createdTime() {
    return this.getStringAttribute('created_time');
  }

  // id - computed: false, optional: false, required: true
  private _id: string;
  public get id() {
    return this.getStringAttribute('id');
  }
  public set id(value: string) {
    this._id = value;
  }
  // Temporarily expose input value. Use with caution.
  public get idInput() {
    return this._id
  }

  // last_updated_time - computed: true, optional: false, required: false
  public get lastUpdatedTime() {
    return this.getStringAttribute('last_updated_time');
  }

  // name - computed: true, optional: false, required: false
  public get name() {
    return this.getStringAttribute('name');
  }

  // permissions - computed: true, optional: false, required: false
  public get permissions() {
    return this.interpolationForAttribute('permissions') as any;
  }

  // tags - computed: true, optional: false, required: false
  public get tags() {
    return this.interpolationForAttribute('tags') as any;
  }

  // theme_id - computed: true, optional: false, required: false
  public get themeId() {
    return this.getStringAttribute('theme_id');
  }

  // type - computed: true, optional: false, required: false
  public get type() {
    return this.getStringAttribute('type');
  }

  // version - computed: true, optional: false, required: false
  public get version() {
    return this.interpolationForAttribute('version') as any;
  }

  // version_description - computed: true, optional: false, required: false
  public get versionDescription() {
    return this.getStringAttribute('version_description');
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      id: cdktf.stringToTerraform(this._id),
    };
  }
}
