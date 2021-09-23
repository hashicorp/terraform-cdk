// https://www.terraform.io/docs/providers/awscc/r/quicksight_theme.html
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface QuicksightThemeConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/quicksight_theme.html#aws_account_id QuicksightTheme#aws_account_id}
  */
  readonly awsAccountId: string;
  /**
  * <p>The ID of the theme that a custom theme will inherit from. All themes inherit from one of
			the starting themes defined by Amazon QuickSight. For a list of the starting themes, use
				<code>ListThemes</code> or choose <b>Themes</b> from
			within a QuickSight analysis. </p>
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/quicksight_theme.html#base_theme_id QuicksightTheme#base_theme_id}
  */
  readonly baseThemeId?: string;
  /**
  * <p>The theme configuration. This configuration contains all of the display properties for
            a theme.</p>
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/quicksight_theme.html#configuration QuicksightTheme#configuration}
  */
  readonly configuration?: QuicksightThemeConfiguration;
  /**
  * <p>A display name for the theme.</p>
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/quicksight_theme.html#name QuicksightTheme#name}
  */
  readonly name?: string;
  /**
  * <p>A valid grouping of resource permissions to apply to the new theme.
			</p>
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/quicksight_theme.html#permissions QuicksightTheme#permissions}
  */
  readonly permissions?: QuicksightThemePermissions[];
  /**
  * <p>A map of the key-value pairs for the resource tag or tags that you want to add to the
			resource.</p>
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/quicksight_theme.html#tags QuicksightTheme#tags}
  */
  readonly tags?: QuicksightThemeTags[];
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/quicksight_theme.html#theme_id QuicksightTheme#theme_id}
  */
  readonly themeId: string;
  /**
  * <p>A description of the first version of the theme that you're creating. Every time
				<code>UpdateTheme</code> is called, a new version is created. Each version of the
			theme has a description of the version in the <code>VersionDescription</code>
			field.</p>
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/quicksight_theme.html#version_description QuicksightTheme#version_description}
  */
  readonly versionDescription?: string;
}
export interface QuicksightThemeConfigurationDataColorPalette {
  /**
  * <p>The hexadecimal codes for the colors.</p>
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/quicksight_theme.html#colors QuicksightTheme#colors}
  */
  readonly colors?: string[];
  /**
  * <p>The hexadecimal code of a color that applies to charts where a lack of data is
            highlighted.</p>
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/quicksight_theme.html#empty_fill_color QuicksightTheme#empty_fill_color}
  */
  readonly emptyFillColor?: string;
  /**
  * <p>The minimum and maximum hexadecimal codes that describe a color gradient. </p>
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/quicksight_theme.html#min_max_gradient QuicksightTheme#min_max_gradient}
  */
  readonly minMaxGradient?: string[];
}

export function quicksightThemeConfigurationDataColorPaletteToTerraform(struct?: QuicksightThemeConfigurationDataColorPalette): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    colors: cdktf.listMapper(cdktf.stringToTerraform)(struct!.colors),
    empty_fill_color: cdktf.stringToTerraform(struct!.emptyFillColor),
    min_max_gradient: cdktf.listMapper(cdktf.stringToTerraform)(struct!.minMaxGradient),
  }
}

export interface QuicksightThemeConfigurationSheetTileBorder {
  /**
  * <p>The option to enable display of borders for visuals.</p>
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/quicksight_theme.html#show QuicksightTheme#show}
  */
  readonly show?: boolean | cdktf.IResolvable;
}

export function quicksightThemeConfigurationSheetTileBorderToTerraform(struct?: QuicksightThemeConfigurationSheetTileBorder): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    show: cdktf.booleanToTerraform(struct!.show),
  }
}

export interface QuicksightThemeConfigurationSheetTile {
  /**
  * <p>The display options for tile borders for visuals.</p>
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/quicksight_theme.html#border QuicksightTheme#border}
  */
  readonly border?: QuicksightThemeConfigurationSheetTileBorder;
}

export function quicksightThemeConfigurationSheetTileToTerraform(struct?: QuicksightThemeConfigurationSheetTile): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    border: quicksightThemeConfigurationSheetTileBorderToTerraform(struct!.border),
  }
}

export interface QuicksightThemeConfigurationSheetTileLayoutGutter {
  /**
  * <p>This Boolean value controls whether to display a gutter space between sheet tiles.
        </p>
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/quicksight_theme.html#show QuicksightTheme#show}
  */
  readonly show?: boolean | cdktf.IResolvable;
}

export function quicksightThemeConfigurationSheetTileLayoutGutterToTerraform(struct?: QuicksightThemeConfigurationSheetTileLayoutGutter): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    show: cdktf.booleanToTerraform(struct!.show),
  }
}

export interface QuicksightThemeConfigurationSheetTileLayoutMargin {
  /**
  * <p>This Boolean value controls whether to display sheet margins.</p>
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/quicksight_theme.html#show QuicksightTheme#show}
  */
  readonly show?: boolean | cdktf.IResolvable;
}

export function quicksightThemeConfigurationSheetTileLayoutMarginToTerraform(struct?: QuicksightThemeConfigurationSheetTileLayoutMargin): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    show: cdktf.booleanToTerraform(struct!.show),
  }
}

export interface QuicksightThemeConfigurationSheetTileLayout {
  /**
  * <p>The display options for gutter spacing between tiles on a sheet.</p>
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/quicksight_theme.html#gutter QuicksightTheme#gutter}
  */
  readonly gutter?: QuicksightThemeConfigurationSheetTileLayoutGutter;
  /**
  * <p>The display options for margins around the outside edge of sheets.</p>
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/quicksight_theme.html#margin QuicksightTheme#margin}
  */
  readonly margin?: QuicksightThemeConfigurationSheetTileLayoutMargin;
}

export function quicksightThemeConfigurationSheetTileLayoutToTerraform(struct?: QuicksightThemeConfigurationSheetTileLayout): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    gutter: quicksightThemeConfigurationSheetTileLayoutGutterToTerraform(struct!.gutter),
    margin: quicksightThemeConfigurationSheetTileLayoutMarginToTerraform(struct!.margin),
  }
}

export interface QuicksightThemeConfigurationSheet {
  /**
  * <p>Display options related to tiles on a sheet.</p>
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/quicksight_theme.html#tile QuicksightTheme#tile}
  */
  readonly tile?: QuicksightThemeConfigurationSheetTile;
  /**
  * <p>The display options for the layout of tiles on a sheet.</p>
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/quicksight_theme.html#tile_layout QuicksightTheme#tile_layout}
  */
  readonly tileLayout?: QuicksightThemeConfigurationSheetTileLayout;
}

export function quicksightThemeConfigurationSheetToTerraform(struct?: QuicksightThemeConfigurationSheet): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    tile: quicksightThemeConfigurationSheetTileToTerraform(struct!.tile),
    tile_layout: quicksightThemeConfigurationSheetTileLayoutToTerraform(struct!.tileLayout),
  }
}

export interface QuicksightThemeConfigurationTypographyFontFamilies {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/quicksight_theme.html#font_family QuicksightTheme#font_family}
  */
  readonly fontFamily?: string;
}

export function quicksightThemeConfigurationTypographyFontFamiliesToTerraform(struct?: QuicksightThemeConfigurationTypographyFontFamilies): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    font_family: cdktf.stringToTerraform(struct!.fontFamily),
  }
}

export interface QuicksightThemeConfigurationTypography {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/quicksight_theme.html#font_families QuicksightTheme#font_families}
  */
  readonly fontFamilies?: QuicksightThemeConfigurationTypographyFontFamilies[];
}

export function quicksightThemeConfigurationTypographyToTerraform(struct?: QuicksightThemeConfigurationTypography): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    font_families: cdktf.listMapper(quicksightThemeConfigurationTypographyFontFamiliesToTerraform)(struct!.fontFamilies),
  }
}

export interface QuicksightThemeConfigurationUiColorPalette {
  /**
  * <p>This color is that applies to selected states and buttons.</p>
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/quicksight_theme.html#accent QuicksightTheme#accent}
  */
  readonly accent?: string;
  /**
  * <p>The foreground color that applies to any text or other elements that appear over the
            accent color.</p>
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/quicksight_theme.html#accent_foreground QuicksightTheme#accent_foreground}
  */
  readonly accentForeground?: string;
  /**
  * <p>The color that applies to error messages.</p>
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/quicksight_theme.html#danger QuicksightTheme#danger}
  */
  readonly danger?: string;
  /**
  * <p>The foreground color that applies to any text or other elements that appear over the
            error color.</p>
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/quicksight_theme.html#danger_foreground QuicksightTheme#danger_foreground}
  */
  readonly dangerForeground?: string;
  /**
  * <p>The color that applies to the names of fields that are identified as
            dimensions.</p>
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/quicksight_theme.html#dimension QuicksightTheme#dimension}
  */
  readonly dimension?: string;
  /**
  * <p>The foreground color that applies to any text or other elements that appear over the
            dimension color.</p>
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/quicksight_theme.html#dimension_foreground QuicksightTheme#dimension_foreground}
  */
  readonly dimensionForeground?: string;
  /**
  * <p>The color that applies to the names of fields that are identified as measures.</p>
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/quicksight_theme.html#measure QuicksightTheme#measure}
  */
  readonly measure?: string;
  /**
  * <p>The foreground color that applies to any text or other elements that appear over the
            measure color.</p>
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/quicksight_theme.html#measure_foreground QuicksightTheme#measure_foreground}
  */
  readonly measureForeground?: string;
  /**
  * <p>The background color that applies to visuals and other high emphasis UI.</p>
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/quicksight_theme.html#primary_background QuicksightTheme#primary_background}
  */
  readonly primaryBackground?: string;
  /**
  * <p>The color of text and other foreground elements that appear over the primary
            background regions, such as grid lines, borders, table banding, icons, and so on.</p>
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/quicksight_theme.html#primary_foreground QuicksightTheme#primary_foreground}
  */
  readonly primaryForeground?: string;
  /**
  * <p>The background color that applies to the sheet background and sheet controls.</p>
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/quicksight_theme.html#secondary_background QuicksightTheme#secondary_background}
  */
  readonly secondaryBackground?: string;
  /**
  * <p>The foreground color that applies to any sheet title, sheet control text, or UI that
            appears over the secondary background.</p>
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/quicksight_theme.html#secondary_foreground QuicksightTheme#secondary_foreground}
  */
  readonly secondaryForeground?: string;
  /**
  * <p>The color that applies to success messages, for example the check mark for a
            successful download.</p>
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/quicksight_theme.html#success QuicksightTheme#success}
  */
  readonly success?: string;
  /**
  * <p>The foreground color that applies to any text or other elements that appear over the
            success color.</p>
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/quicksight_theme.html#success_foreground QuicksightTheme#success_foreground}
  */
  readonly successForeground?: string;
  /**
  * <p>This color that applies to warning and informational messages.</p>
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/quicksight_theme.html#warning QuicksightTheme#warning}
  */
  readonly warning?: string;
  /**
  * <p>The foreground color that applies to any text or other elements that appear over the
            warning color.</p>
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/quicksight_theme.html#warning_foreground QuicksightTheme#warning_foreground}
  */
  readonly warningForeground?: string;
}

export function quicksightThemeConfigurationUiColorPaletteToTerraform(struct?: QuicksightThemeConfigurationUiColorPalette): any {
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

export interface QuicksightThemeConfiguration {
  /**
  * <p>The theme colors that are used for data colors in charts. The colors description is a
            hexadecimal color code that consists of six alphanumerical characters, prefixed with
                <code>#</code>, for example #37BFF5. </p>
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/quicksight_theme.html#data_color_palette QuicksightTheme#data_color_palette}
  */
  readonly dataColorPalette?: QuicksightThemeConfigurationDataColorPalette;
  /**
  * <p>The theme display options for sheets. </p>
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/quicksight_theme.html#sheet QuicksightTheme#sheet}
  */
  readonly sheet?: QuicksightThemeConfigurationSheet;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/quicksight_theme.html#typography QuicksightTheme#typography}
  */
  readonly typography?: QuicksightThemeConfigurationTypography;
  /**
  * <p>The theme colors that apply to UI and to charts, excluding data colors. The colors
            description is a hexadecimal color code that consists of six alphanumerical characters,
            prefixed with <code>#</code>, for example #37BFF5. For more information, see <a href="https://docs.aws.amazon.com/quicksight/latest/user/themes-in-quicksight.html">Using Themes in Amazon QuickSight</a> in the <i>Amazon QuickSight User
                Guide.</i>
        </p>
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/quicksight_theme.html#ui_color_palette QuicksightTheme#ui_color_palette}
  */
  readonly uiColorPalette?: QuicksightThemeConfigurationUiColorPalette;
}

export function quicksightThemeConfigurationToTerraform(struct?: QuicksightThemeConfiguration): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    data_color_palette: quicksightThemeConfigurationDataColorPaletteToTerraform(struct!.dataColorPalette),
    sheet: quicksightThemeConfigurationSheetToTerraform(struct!.sheet),
    typography: quicksightThemeConfigurationTypographyToTerraform(struct!.typography),
    ui_color_palette: quicksightThemeConfigurationUiColorPaletteToTerraform(struct!.uiColorPalette),
  }
}

export interface QuicksightThemePermissions {
  /**
  * <p>The IAM action to grant or revoke permissions on.</p>
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/quicksight_theme.html#actions QuicksightTheme#actions}
  */
  readonly actions: string[];
  /**
  * <p>The Amazon Resource Name (ARN) of the principal. This can be one of the
            following:</p>
        <ul>
            <li>
                <p>The ARN of an Amazon QuickSight user or group associated with a data source or dataset. (This is common.)</p>
            </li>
            <li>
                <p>The ARN of an Amazon QuickSight user, group, or namespace associated with an analysis, dashboard, template, or theme. (This is common.)</p>
            </li>
            <li>
                <p>The ARN of an AWS account root: This is an IAM ARN rather than a QuickSight
                    ARN. Use this option only to share resources (templates) across AWS accounts.
                    (This is less common.) </p>
            </li>
         </ul>
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/quicksight_theme.html#principal QuicksightTheme#principal}
  */
  readonly principal: string;
}

export function quicksightThemePermissionsToTerraform(struct?: QuicksightThemePermissions): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    actions: cdktf.listMapper(cdktf.stringToTerraform)(struct!.actions),
    principal: cdktf.stringToTerraform(struct!.principal),
  }
}

export interface QuicksightThemeTags {
  /**
  * <p>Tag key.</p>
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/quicksight_theme.html#key QuicksightTheme#key}
  */
  readonly key: string;
  /**
  * <p>Tag value.</p>
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/quicksight_theme.html#value QuicksightTheme#value}
  */
  readonly value: string;
}

export function quicksightThemeTagsToTerraform(struct?: QuicksightThemeTags): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    key: cdktf.stringToTerraform(struct!.key),
    value: cdktf.stringToTerraform(struct!.value),
  }
}

export interface QuicksightThemeVersionConfigurationDataColorPalette {
  /**
  * <p>The hexadecimal codes for the colors.</p>
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/quicksight_theme.html#colors QuicksightTheme#colors}
  */
  readonly colors?: string[];
  /**
  * <p>The hexadecimal code of a color that applies to charts where a lack of data is
            highlighted.</p>
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/quicksight_theme.html#empty_fill_color QuicksightTheme#empty_fill_color}
  */
  readonly emptyFillColor?: string;
  /**
  * <p>The minimum and maximum hexadecimal codes that describe a color gradient. </p>
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/quicksight_theme.html#min_max_gradient QuicksightTheme#min_max_gradient}
  */
  readonly minMaxGradient?: string[];
}

export function quicksightThemeVersionConfigurationDataColorPaletteToTerraform(struct?: QuicksightThemeVersionConfigurationDataColorPalette): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    colors: cdktf.listMapper(cdktf.stringToTerraform)(struct!.colors),
    empty_fill_color: cdktf.stringToTerraform(struct!.emptyFillColor),
    min_max_gradient: cdktf.listMapper(cdktf.stringToTerraform)(struct!.minMaxGradient),
  }
}

export interface QuicksightThemeVersionConfigurationSheetTileBorder {
  /**
  * <p>The option to enable display of borders for visuals.</p>
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/quicksight_theme.html#show QuicksightTheme#show}
  */
  readonly show?: boolean | cdktf.IResolvable;
}

export function quicksightThemeVersionConfigurationSheetTileBorderToTerraform(struct?: QuicksightThemeVersionConfigurationSheetTileBorder): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    show: cdktf.booleanToTerraform(struct!.show),
  }
}

export interface QuicksightThemeVersionConfigurationSheetTile {
  /**
  * <p>The display options for tile borders for visuals.</p>
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/quicksight_theme.html#border QuicksightTheme#border}
  */
  readonly border?: QuicksightThemeVersionConfigurationSheetTileBorder;
}

export function quicksightThemeVersionConfigurationSheetTileToTerraform(struct?: QuicksightThemeVersionConfigurationSheetTile): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    border: quicksightThemeVersionConfigurationSheetTileBorderToTerraform(struct!.border),
  }
}

export interface QuicksightThemeVersionConfigurationSheetTileLayoutGutter {
  /**
  * <p>This Boolean value controls whether to display a gutter space between sheet tiles.
        </p>
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/quicksight_theme.html#show QuicksightTheme#show}
  */
  readonly show?: boolean | cdktf.IResolvable;
}

export function quicksightThemeVersionConfigurationSheetTileLayoutGutterToTerraform(struct?: QuicksightThemeVersionConfigurationSheetTileLayoutGutter): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    show: cdktf.booleanToTerraform(struct!.show),
  }
}

export interface QuicksightThemeVersionConfigurationSheetTileLayoutMargin {
  /**
  * <p>This Boolean value controls whether to display sheet margins.</p>
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/quicksight_theme.html#show QuicksightTheme#show}
  */
  readonly show?: boolean | cdktf.IResolvable;
}

export function quicksightThemeVersionConfigurationSheetTileLayoutMarginToTerraform(struct?: QuicksightThemeVersionConfigurationSheetTileLayoutMargin): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    show: cdktf.booleanToTerraform(struct!.show),
  }
}

export interface QuicksightThemeVersionConfigurationSheetTileLayout {
  /**
  * <p>The display options for gutter spacing between tiles on a sheet.</p>
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/quicksight_theme.html#gutter QuicksightTheme#gutter}
  */
  readonly gutter?: QuicksightThemeVersionConfigurationSheetTileLayoutGutter;
  /**
  * <p>The display options for margins around the outside edge of sheets.</p>
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/quicksight_theme.html#margin QuicksightTheme#margin}
  */
  readonly margin?: QuicksightThemeVersionConfigurationSheetTileLayoutMargin;
}

export function quicksightThemeVersionConfigurationSheetTileLayoutToTerraform(struct?: QuicksightThemeVersionConfigurationSheetTileLayout): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    gutter: quicksightThemeVersionConfigurationSheetTileLayoutGutterToTerraform(struct!.gutter),
    margin: quicksightThemeVersionConfigurationSheetTileLayoutMarginToTerraform(struct!.margin),
  }
}

export interface QuicksightThemeVersionConfigurationSheet {
  /**
  * <p>Display options related to tiles on a sheet.</p>
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/quicksight_theme.html#tile QuicksightTheme#tile}
  */
  readonly tile?: QuicksightThemeVersionConfigurationSheetTile;
  /**
  * <p>The display options for the layout of tiles on a sheet.</p>
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/quicksight_theme.html#tile_layout QuicksightTheme#tile_layout}
  */
  readonly tileLayout?: QuicksightThemeVersionConfigurationSheetTileLayout;
}

export function quicksightThemeVersionConfigurationSheetToTerraform(struct?: QuicksightThemeVersionConfigurationSheet): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    tile: quicksightThemeVersionConfigurationSheetTileToTerraform(struct!.tile),
    tile_layout: quicksightThemeVersionConfigurationSheetTileLayoutToTerraform(struct!.tileLayout),
  }
}

export interface QuicksightThemeVersionConfigurationTypographyFontFamilies {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/quicksight_theme.html#font_family QuicksightTheme#font_family}
  */
  readonly fontFamily?: string;
}

export function quicksightThemeVersionConfigurationTypographyFontFamiliesToTerraform(struct?: QuicksightThemeVersionConfigurationTypographyFontFamilies): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    font_family: cdktf.stringToTerraform(struct!.fontFamily),
  }
}

export interface QuicksightThemeVersionConfigurationTypography {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/quicksight_theme.html#font_families QuicksightTheme#font_families}
  */
  readonly fontFamilies?: QuicksightThemeVersionConfigurationTypographyFontFamilies[];
}

export function quicksightThemeVersionConfigurationTypographyToTerraform(struct?: QuicksightThemeVersionConfigurationTypography): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    font_families: cdktf.listMapper(quicksightThemeVersionConfigurationTypographyFontFamiliesToTerraform)(struct!.fontFamilies),
  }
}

export interface QuicksightThemeVersionConfigurationUiColorPalette {
  /**
  * <p>This color is that applies to selected states and buttons.</p>
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/quicksight_theme.html#accent QuicksightTheme#accent}
  */
  readonly accent?: string;
  /**
  * <p>The foreground color that applies to any text or other elements that appear over the
            accent color.</p>
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/quicksight_theme.html#accent_foreground QuicksightTheme#accent_foreground}
  */
  readonly accentForeground?: string;
  /**
  * <p>The color that applies to error messages.</p>
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/quicksight_theme.html#danger QuicksightTheme#danger}
  */
  readonly danger?: string;
  /**
  * <p>The foreground color that applies to any text or other elements that appear over the
            error color.</p>
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/quicksight_theme.html#danger_foreground QuicksightTheme#danger_foreground}
  */
  readonly dangerForeground?: string;
  /**
  * <p>The color that applies to the names of fields that are identified as
            dimensions.</p>
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/quicksight_theme.html#dimension QuicksightTheme#dimension}
  */
  readonly dimension?: string;
  /**
  * <p>The foreground color that applies to any text or other elements that appear over the
            dimension color.</p>
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/quicksight_theme.html#dimension_foreground QuicksightTheme#dimension_foreground}
  */
  readonly dimensionForeground?: string;
  /**
  * <p>The color that applies to the names of fields that are identified as measures.</p>
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/quicksight_theme.html#measure QuicksightTheme#measure}
  */
  readonly measure?: string;
  /**
  * <p>The foreground color that applies to any text or other elements that appear over the
            measure color.</p>
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/quicksight_theme.html#measure_foreground QuicksightTheme#measure_foreground}
  */
  readonly measureForeground?: string;
  /**
  * <p>The background color that applies to visuals and other high emphasis UI.</p>
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/quicksight_theme.html#primary_background QuicksightTheme#primary_background}
  */
  readonly primaryBackground?: string;
  /**
  * <p>The color of text and other foreground elements that appear over the primary
            background regions, such as grid lines, borders, table banding, icons, and so on.</p>
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/quicksight_theme.html#primary_foreground QuicksightTheme#primary_foreground}
  */
  readonly primaryForeground?: string;
  /**
  * <p>The background color that applies to the sheet background and sheet controls.</p>
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/quicksight_theme.html#secondary_background QuicksightTheme#secondary_background}
  */
  readonly secondaryBackground?: string;
  /**
  * <p>The foreground color that applies to any sheet title, sheet control text, or UI that
            appears over the secondary background.</p>
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/quicksight_theme.html#secondary_foreground QuicksightTheme#secondary_foreground}
  */
  readonly secondaryForeground?: string;
  /**
  * <p>The color that applies to success messages, for example the check mark for a
            successful download.</p>
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/quicksight_theme.html#success QuicksightTheme#success}
  */
  readonly success?: string;
  /**
  * <p>The foreground color that applies to any text or other elements that appear over the
            success color.</p>
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/quicksight_theme.html#success_foreground QuicksightTheme#success_foreground}
  */
  readonly successForeground?: string;
  /**
  * <p>This color that applies to warning and informational messages.</p>
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/quicksight_theme.html#warning QuicksightTheme#warning}
  */
  readonly warning?: string;
  /**
  * <p>The foreground color that applies to any text or other elements that appear over the
            warning color.</p>
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/quicksight_theme.html#warning_foreground QuicksightTheme#warning_foreground}
  */
  readonly warningForeground?: string;
}

export function quicksightThemeVersionConfigurationUiColorPaletteToTerraform(struct?: QuicksightThemeVersionConfigurationUiColorPalette): any {
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

export interface QuicksightThemeVersionConfiguration {
  /**
  * <p>The theme colors that are used for data colors in charts. The colors description is a
            hexadecimal color code that consists of six alphanumerical characters, prefixed with
                <code>#</code>, for example #37BFF5. </p>
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/quicksight_theme.html#data_color_palette QuicksightTheme#data_color_palette}
  */
  readonly dataColorPalette?: QuicksightThemeVersionConfigurationDataColorPalette;
  /**
  * <p>The theme display options for sheets. </p>
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/quicksight_theme.html#sheet QuicksightTheme#sheet}
  */
  readonly sheet?: QuicksightThemeVersionConfigurationSheet;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/quicksight_theme.html#typography QuicksightTheme#typography}
  */
  readonly typography?: QuicksightThemeVersionConfigurationTypography;
  /**
  * <p>The theme colors that apply to UI and to charts, excluding data colors. The colors
            description is a hexadecimal color code that consists of six alphanumerical characters,
            prefixed with <code>#</code>, for example #37BFF5. For more information, see <a href="https://docs.aws.amazon.com/quicksight/latest/user/themes-in-quicksight.html">Using Themes in Amazon QuickSight</a> in the <i>Amazon QuickSight User
                Guide.</i>
        </p>
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/quicksight_theme.html#ui_color_palette QuicksightTheme#ui_color_palette}
  */
  readonly uiColorPalette?: QuicksightThemeVersionConfigurationUiColorPalette;
}

export function quicksightThemeVersionConfigurationToTerraform(struct?: QuicksightThemeVersionConfiguration): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    data_color_palette: quicksightThemeVersionConfigurationDataColorPaletteToTerraform(struct!.dataColorPalette),
    sheet: quicksightThemeVersionConfigurationSheetToTerraform(struct!.sheet),
    typography: quicksightThemeVersionConfigurationTypographyToTerraform(struct!.typography),
    ui_color_palette: quicksightThemeVersionConfigurationUiColorPaletteToTerraform(struct!.uiColorPalette),
  }
}

export interface QuicksightThemeVersionErrors {
  /**
  * <p>The error message.</p>
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/quicksight_theme.html#message QuicksightTheme#message}
  */
  readonly message?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/quicksight_theme.html#type QuicksightTheme#type}
  */
  readonly type?: string;
}

export function quicksightThemeVersionErrorsToTerraform(struct?: QuicksightThemeVersionErrors): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    message: cdktf.stringToTerraform(struct!.message),
    type: cdktf.stringToTerraform(struct!.type),
  }
}

export class QuicksightThemeVersion extends cdktf.ComplexComputedList {

  // arn - computed: true, optional: true, required: false
  public get arn() {
    return this.getStringAttribute('arn');
  }

  // base_theme_id - computed: true, optional: true, required: false
  private _baseThemeId?: string;
  public get baseThemeId() {
    return this.getStringAttribute('base_theme_id');
  }
  public set baseThemeId(value: string) {
    this._baseThemeId = value;
  }
  public resetBaseThemeId() {
    this._baseThemeId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get baseThemeIdInput() {
    return this._baseThemeId
  }

  // configuration - computed: true, optional: true, required: false
  private _configuration?: QuicksightThemeVersionConfiguration;
  public get configuration() {
    return this.interpolationForAttribute('configuration') as any;
  }
  public set configuration(value: QuicksightThemeVersionConfiguration) {
    this._configuration = value;
  }
  public resetConfiguration() {
    this._configuration = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get configurationInput() {
    return this._configuration
  }

  // created_time - computed: true, optional: true, required: false
  private _createdTime?: string;
  public get createdTime() {
    return this.getStringAttribute('created_time');
  }
  public set createdTime(value: string) {
    this._createdTime = value;
  }
  public resetCreatedTime() {
    this._createdTime = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get createdTimeInput() {
    return this._createdTime
  }

  // description - computed: true, optional: true, required: false
  private _description?: string;
  public get description() {
    return this.getStringAttribute('description');
  }
  public set description(value: string) {
    this._description = value;
  }
  public resetDescription() {
    this._description = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get descriptionInput() {
    return this._description
  }

  // errors - computed: true, optional: true, required: false
  private _errors?: QuicksightThemeVersionErrors[];
  public get errors() {
    return this.interpolationForAttribute('errors') as any;
  }
  public set errors(value: QuicksightThemeVersionErrors[]) {
    this._errors = value;
  }
  public resetErrors() {
    this._errors = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get errorsInput() {
    return this._errors
  }

  // status - computed: true, optional: true, required: false
  private _status?: string;
  public get status() {
    return this.getStringAttribute('status');
  }
  public set status(value: string) {
    this._status = value;
  }
  public resetStatus() {
    this._status = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get statusInput() {
    return this._status
  }

  // version_number - computed: true, optional: true, required: false
  private _versionNumber?: number;
  public get versionNumber() {
    return this.getNumberAttribute('version_number');
  }
  public set versionNumber(value: number) {
    this._versionNumber = value;
  }
  public resetVersionNumber() {
    this._versionNumber = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get versionNumberInput() {
    return this._versionNumber
  }
}

export function quicksightThemeVersionToTerraform(struct?: QuicksightThemeVersion): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    arn: cdktf.stringToTerraform(struct!.arn),
    base_theme_id: cdktf.stringToTerraform(struct!.baseThemeId),
    configuration: quicksightThemeVersionConfigurationToTerraform(struct!.configuration),
    created_time: cdktf.stringToTerraform(struct!.createdTime),
    description: cdktf.stringToTerraform(struct!.description),
    errors: cdktf.listMapper(quicksightThemeVersionErrorsToTerraform)(struct!.errors),
    status: cdktf.stringToTerraform(struct!.status),
    version_number: cdktf.numberToTerraform(struct!.versionNumber),
  }
}


/**
* Represents a {@link https://www.terraform.io/docs/providers/awscc/r/quicksight_theme.html awscc_quicksight_theme}
*/
export class QuicksightTheme extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType: string = "awscc_quicksight_theme";

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
  public constructor(scope: Construct, id: string, config: QuicksightThemeConfig) {
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
  public get arn() {
    return this.getStringAttribute('arn');
  }

  // aws_account_id - computed: false, optional: false, required: true
  private _awsAccountId: string;
  public get awsAccountId() {
    return this.getStringAttribute('aws_account_id');
  }
  public set awsAccountId(value: string) {
    this._awsAccountId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get awsAccountIdInput() {
    return this._awsAccountId
  }

  // base_theme_id - computed: false, optional: true, required: false
  private _baseThemeId?: string;
  public get baseThemeId() {
    return this.getStringAttribute('base_theme_id');
  }
  public set baseThemeId(value: string ) {
    this._baseThemeId = value;
  }
  public resetBaseThemeId() {
    this._baseThemeId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get baseThemeIdInput() {
    return this._baseThemeId
  }

  // configuration - computed: false, optional: true, required: false
  private _configuration?: QuicksightThemeConfiguration;
  public get configuration() {
    return this.interpolationForAttribute('configuration') as any;
  }
  public set configuration(value: QuicksightThemeConfiguration ) {
    this._configuration = value;
  }
  public resetConfiguration() {
    this._configuration = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get configurationInput() {
    return this._configuration
  }

  // created_time - computed: true, optional: false, required: false
  public get createdTime() {
    return this.getStringAttribute('created_time');
  }

  // id - computed: true, optional: false, required: false
  public get id() {
    return this.getStringAttribute('id');
  }

  // last_updated_time - computed: true, optional: false, required: false
  public get lastUpdatedTime() {
    return this.getStringAttribute('last_updated_time');
  }

  // name - computed: false, optional: true, required: false
  private _name?: string;
  public get name() {
    return this.getStringAttribute('name');
  }
  public set name(value: string ) {
    this._name = value;
  }
  public resetName() {
    this._name = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get nameInput() {
    return this._name
  }

  // permissions - computed: false, optional: true, required: false
  private _permissions?: QuicksightThemePermissions[];
  public get permissions() {
    return this.interpolationForAttribute('permissions') as any;
  }
  public set permissions(value: QuicksightThemePermissions[] ) {
    this._permissions = value;
  }
  public resetPermissions() {
    this._permissions = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get permissionsInput() {
    return this._permissions
  }

  // tags - computed: false, optional: true, required: false
  private _tags?: QuicksightThemeTags[];
  public get tags() {
    return this.interpolationForAttribute('tags') as any;
  }
  public set tags(value: QuicksightThemeTags[] ) {
    this._tags = value;
  }
  public resetTags() {
    this._tags = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tagsInput() {
    return this._tags
  }

  // theme_id - computed: false, optional: false, required: true
  private _themeId: string;
  public get themeId() {
    return this.getStringAttribute('theme_id');
  }
  public set themeId(value: string) {
    this._themeId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get themeIdInput() {
    return this._themeId
  }

  // type - computed: true, optional: false, required: false
  public get type() {
    return this.getStringAttribute('type');
  }

  // version - computed: true, optional: false, required: false
  public get version() {
    return this.interpolationForAttribute('version') as any;
  }

  // version_description - computed: false, optional: true, required: false
  private _versionDescription?: string;
  public get versionDescription() {
    return this.getStringAttribute('version_description');
  }
  public set versionDescription(value: string ) {
    this._versionDescription = value;
  }
  public resetVersionDescription() {
    this._versionDescription = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get versionDescriptionInput() {
    return this._versionDescription
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
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
