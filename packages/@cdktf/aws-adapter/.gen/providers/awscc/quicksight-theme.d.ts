import { Construct } from 'constructs';
import * as cdktf from 'cdktf';
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
export declare function quicksightThemeConfigurationDataColorPaletteToTerraform(struct?: QuicksightThemeConfigurationDataColorPalette): any;
export interface QuicksightThemeConfigurationSheetTileBorder {
    /**
    * <p>The option to enable display of borders for visuals.</p>
    *
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/quicksight_theme.html#show QuicksightTheme#show}
    */
    readonly show?: boolean | cdktf.IResolvable;
}
export declare function quicksightThemeConfigurationSheetTileBorderToTerraform(struct?: QuicksightThemeConfigurationSheetTileBorder): any;
export interface QuicksightThemeConfigurationSheetTile {
    /**
    * <p>The display options for tile borders for visuals.</p>
    *
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/quicksight_theme.html#border QuicksightTheme#border}
    */
    readonly border?: QuicksightThemeConfigurationSheetTileBorder;
}
export declare function quicksightThemeConfigurationSheetTileToTerraform(struct?: QuicksightThemeConfigurationSheetTile): any;
export interface QuicksightThemeConfigurationSheetTileLayoutGutter {
    /**
    * <p>This Boolean value controls whether to display a gutter space between sheet tiles.
          </p>
    *
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/quicksight_theme.html#show QuicksightTheme#show}
    */
    readonly show?: boolean | cdktf.IResolvable;
}
export declare function quicksightThemeConfigurationSheetTileLayoutGutterToTerraform(struct?: QuicksightThemeConfigurationSheetTileLayoutGutter): any;
export interface QuicksightThemeConfigurationSheetTileLayoutMargin {
    /**
    * <p>This Boolean value controls whether to display sheet margins.</p>
    *
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/quicksight_theme.html#show QuicksightTheme#show}
    */
    readonly show?: boolean | cdktf.IResolvable;
}
export declare function quicksightThemeConfigurationSheetTileLayoutMarginToTerraform(struct?: QuicksightThemeConfigurationSheetTileLayoutMargin): any;
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
export declare function quicksightThemeConfigurationSheetTileLayoutToTerraform(struct?: QuicksightThemeConfigurationSheetTileLayout): any;
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
export declare function quicksightThemeConfigurationSheetToTerraform(struct?: QuicksightThemeConfigurationSheet): any;
export interface QuicksightThemeConfigurationTypographyFontFamilies {
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/quicksight_theme.html#font_family QuicksightTheme#font_family}
    */
    readonly fontFamily?: string;
}
export declare function quicksightThemeConfigurationTypographyFontFamiliesToTerraform(struct?: QuicksightThemeConfigurationTypographyFontFamilies): any;
export interface QuicksightThemeConfigurationTypography {
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/quicksight_theme.html#font_families QuicksightTheme#font_families}
    */
    readonly fontFamilies?: QuicksightThemeConfigurationTypographyFontFamilies[];
}
export declare function quicksightThemeConfigurationTypographyToTerraform(struct?: QuicksightThemeConfigurationTypography): any;
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
export declare function quicksightThemeConfigurationUiColorPaletteToTerraform(struct?: QuicksightThemeConfigurationUiColorPalette): any;
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
export declare function quicksightThemeConfigurationToTerraform(struct?: QuicksightThemeConfiguration): any;
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
export declare function quicksightThemePermissionsToTerraform(struct?: QuicksightThemePermissions): any;
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
export declare function quicksightThemeTagsToTerraform(struct?: QuicksightThemeTags): any;
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
export declare function quicksightThemeVersionConfigurationDataColorPaletteToTerraform(struct?: QuicksightThemeVersionConfigurationDataColorPalette): any;
export interface QuicksightThemeVersionConfigurationSheetTileBorder {
    /**
    * <p>The option to enable display of borders for visuals.</p>
    *
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/quicksight_theme.html#show QuicksightTheme#show}
    */
    readonly show?: boolean | cdktf.IResolvable;
}
export declare function quicksightThemeVersionConfigurationSheetTileBorderToTerraform(struct?: QuicksightThemeVersionConfigurationSheetTileBorder): any;
export interface QuicksightThemeVersionConfigurationSheetTile {
    /**
    * <p>The display options for tile borders for visuals.</p>
    *
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/quicksight_theme.html#border QuicksightTheme#border}
    */
    readonly border?: QuicksightThemeVersionConfigurationSheetTileBorder;
}
export declare function quicksightThemeVersionConfigurationSheetTileToTerraform(struct?: QuicksightThemeVersionConfigurationSheetTile): any;
export interface QuicksightThemeVersionConfigurationSheetTileLayoutGutter {
    /**
    * <p>This Boolean value controls whether to display a gutter space between sheet tiles.
          </p>
    *
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/quicksight_theme.html#show QuicksightTheme#show}
    */
    readonly show?: boolean | cdktf.IResolvable;
}
export declare function quicksightThemeVersionConfigurationSheetTileLayoutGutterToTerraform(struct?: QuicksightThemeVersionConfigurationSheetTileLayoutGutter): any;
export interface QuicksightThemeVersionConfigurationSheetTileLayoutMargin {
    /**
    * <p>This Boolean value controls whether to display sheet margins.</p>
    *
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/quicksight_theme.html#show QuicksightTheme#show}
    */
    readonly show?: boolean | cdktf.IResolvable;
}
export declare function quicksightThemeVersionConfigurationSheetTileLayoutMarginToTerraform(struct?: QuicksightThemeVersionConfigurationSheetTileLayoutMargin): any;
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
export declare function quicksightThemeVersionConfigurationSheetTileLayoutToTerraform(struct?: QuicksightThemeVersionConfigurationSheetTileLayout): any;
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
export declare function quicksightThemeVersionConfigurationSheetToTerraform(struct?: QuicksightThemeVersionConfigurationSheet): any;
export interface QuicksightThemeVersionConfigurationTypographyFontFamilies {
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/quicksight_theme.html#font_family QuicksightTheme#font_family}
    */
    readonly fontFamily?: string;
}
export declare function quicksightThemeVersionConfigurationTypographyFontFamiliesToTerraform(struct?: QuicksightThemeVersionConfigurationTypographyFontFamilies): any;
export interface QuicksightThemeVersionConfigurationTypography {
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/quicksight_theme.html#font_families QuicksightTheme#font_families}
    */
    readonly fontFamilies?: QuicksightThemeVersionConfigurationTypographyFontFamilies[];
}
export declare function quicksightThemeVersionConfigurationTypographyToTerraform(struct?: QuicksightThemeVersionConfigurationTypography): any;
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
export declare function quicksightThemeVersionConfigurationUiColorPaletteToTerraform(struct?: QuicksightThemeVersionConfigurationUiColorPalette): any;
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
export declare function quicksightThemeVersionConfigurationToTerraform(struct?: QuicksightThemeVersionConfiguration): any;
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
export declare function quicksightThemeVersionErrorsToTerraform(struct?: QuicksightThemeVersionErrors): any;
export declare class QuicksightThemeVersion extends cdktf.ComplexComputedList {
    get arn(): string;
    private _baseThemeId?;
    get baseThemeId(): string;
    set baseThemeId(value: string);
    resetBaseThemeId(): void;
    get baseThemeIdInput(): string | undefined;
    private _configuration?;
    get configuration(): QuicksightThemeVersionConfiguration;
    set configuration(value: QuicksightThemeVersionConfiguration);
    resetConfiguration(): void;
    get configurationInput(): QuicksightThemeVersionConfiguration | undefined;
    private _createdTime?;
    get createdTime(): string;
    set createdTime(value: string);
    resetCreatedTime(): void;
    get createdTimeInput(): string | undefined;
    private _description?;
    get description(): string;
    set description(value: string);
    resetDescription(): void;
    get descriptionInput(): string | undefined;
    private _errors?;
    get errors(): QuicksightThemeVersionErrors[];
    set errors(value: QuicksightThemeVersionErrors[]);
    resetErrors(): void;
    get errorsInput(): QuicksightThemeVersionErrors[] | undefined;
    private _status?;
    get status(): string;
    set status(value: string);
    resetStatus(): void;
    get statusInput(): string | undefined;
    private _versionNumber?;
    get versionNumber(): number;
    set versionNumber(value: number);
    resetVersionNumber(): void;
    get versionNumberInput(): number | undefined;
}
export declare function quicksightThemeVersionToTerraform(struct?: QuicksightThemeVersion): any;
/**
* Represents a {@link https://www.terraform.io/docs/providers/awscc/r/quicksight_theme.html awscc_quicksight_theme}
*/
export declare class QuicksightTheme extends cdktf.TerraformResource {
    static readonly tfResourceType: string;
    /**
    * Create a new {@link https://www.terraform.io/docs/providers/awscc/r/quicksight_theme.html awscc_quicksight_theme} Resource
    *
    * @param scope The scope in which to define this construct
    * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
    * @param options QuicksightThemeConfig
    */
    constructor(scope: Construct, id: string, config: QuicksightThemeConfig);
    get arn(): string;
    private _awsAccountId;
    get awsAccountId(): string;
    set awsAccountId(value: string);
    get awsAccountIdInput(): string;
    private _baseThemeId?;
    get baseThemeId(): string;
    set baseThemeId(value: string);
    resetBaseThemeId(): void;
    get baseThemeIdInput(): string | undefined;
    private _configuration?;
    get configuration(): QuicksightThemeConfiguration;
    set configuration(value: QuicksightThemeConfiguration);
    resetConfiguration(): void;
    get configurationInput(): QuicksightThemeConfiguration | undefined;
    get createdTime(): string;
    get id(): string;
    get lastUpdatedTime(): string;
    private _name?;
    get name(): string;
    set name(value: string);
    resetName(): void;
    get nameInput(): string | undefined;
    private _permissions?;
    get permissions(): QuicksightThemePermissions[];
    set permissions(value: QuicksightThemePermissions[]);
    resetPermissions(): void;
    get permissionsInput(): QuicksightThemePermissions[] | undefined;
    private _tags?;
    get tags(): QuicksightThemeTags[];
    set tags(value: QuicksightThemeTags[]);
    resetTags(): void;
    get tagsInput(): QuicksightThemeTags[] | undefined;
    private _themeId;
    get themeId(): string;
    set themeId(value: string);
    get themeIdInput(): string;
    get type(): string;
    get version(): any;
    private _versionDescription?;
    get versionDescription(): string;
    set versionDescription(value: string);
    resetVersionDescription(): void;
    get versionDescriptionInput(): string | undefined;
    protected synthesizeAttributes(): {
        [name: string]: any;
    };
}
