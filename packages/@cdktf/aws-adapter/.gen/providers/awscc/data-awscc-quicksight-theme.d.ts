import { Construct } from 'constructs';
import * as cdktf from 'cdktf';
export interface DataAwsccQuicksightThemeConfig extends cdktf.TerraformMetaArguments {
    /**
    * Uniquely identifies the resource.
    *
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/d/quicksight_theme.html#id DataAwsccQuicksightTheme#id}
    */
    readonly id: string;
}
export declare class DataAwsccQuicksightThemeConfigurationDataColorPalette extends cdktf.ComplexComputedList {
    get colors(): string[];
    get emptyFillColor(): string;
    get minMaxGradient(): string[];
}
export declare function dataAwsccQuicksightThemeConfigurationDataColorPaletteToTerraform(struct?: DataAwsccQuicksightThemeConfigurationDataColorPalette): any;
export declare class DataAwsccQuicksightThemeConfigurationSheetTileBorder extends cdktf.ComplexComputedList {
    get show(): any;
}
export declare function dataAwsccQuicksightThemeConfigurationSheetTileBorderToTerraform(struct?: DataAwsccQuicksightThemeConfigurationSheetTileBorder): any;
export declare class DataAwsccQuicksightThemeConfigurationSheetTile extends cdktf.ComplexComputedList {
    get border(): any;
}
export declare function dataAwsccQuicksightThemeConfigurationSheetTileToTerraform(struct?: DataAwsccQuicksightThemeConfigurationSheetTile): any;
export declare class DataAwsccQuicksightThemeConfigurationSheetTileLayoutGutter extends cdktf.ComplexComputedList {
    get show(): any;
}
export declare function dataAwsccQuicksightThemeConfigurationSheetTileLayoutGutterToTerraform(struct?: DataAwsccQuicksightThemeConfigurationSheetTileLayoutGutter): any;
export declare class DataAwsccQuicksightThemeConfigurationSheetTileLayoutMargin extends cdktf.ComplexComputedList {
    get show(): any;
}
export declare function dataAwsccQuicksightThemeConfigurationSheetTileLayoutMarginToTerraform(struct?: DataAwsccQuicksightThemeConfigurationSheetTileLayoutMargin): any;
export declare class DataAwsccQuicksightThemeConfigurationSheetTileLayout extends cdktf.ComplexComputedList {
    get gutter(): any;
    get margin(): any;
}
export declare function dataAwsccQuicksightThemeConfigurationSheetTileLayoutToTerraform(struct?: DataAwsccQuicksightThemeConfigurationSheetTileLayout): any;
export declare class DataAwsccQuicksightThemeConfigurationSheet extends cdktf.ComplexComputedList {
    get tile(): any;
    get tileLayout(): any;
}
export declare function dataAwsccQuicksightThemeConfigurationSheetToTerraform(struct?: DataAwsccQuicksightThemeConfigurationSheet): any;
export declare class DataAwsccQuicksightThemeConfigurationTypographyFontFamilies extends cdktf.ComplexComputedList {
    get fontFamily(): string;
}
export declare function dataAwsccQuicksightThemeConfigurationTypographyFontFamiliesToTerraform(struct?: DataAwsccQuicksightThemeConfigurationTypographyFontFamilies): any;
export declare class DataAwsccQuicksightThemeConfigurationTypography extends cdktf.ComplexComputedList {
    get fontFamilies(): any;
}
export declare function dataAwsccQuicksightThemeConfigurationTypographyToTerraform(struct?: DataAwsccQuicksightThemeConfigurationTypography): any;
export declare class DataAwsccQuicksightThemeConfigurationUiColorPalette extends cdktf.ComplexComputedList {
    get accent(): string;
    get accentForeground(): string;
    get danger(): string;
    get dangerForeground(): string;
    get dimension(): string;
    get dimensionForeground(): string;
    get measure(): string;
    get measureForeground(): string;
    get primaryBackground(): string;
    get primaryForeground(): string;
    get secondaryBackground(): string;
    get secondaryForeground(): string;
    get success(): string;
    get successForeground(): string;
    get warning(): string;
    get warningForeground(): string;
}
export declare function dataAwsccQuicksightThemeConfigurationUiColorPaletteToTerraform(struct?: DataAwsccQuicksightThemeConfigurationUiColorPalette): any;
export declare class DataAwsccQuicksightThemeConfiguration extends cdktf.ComplexComputedList {
    get dataColorPalette(): any;
    get sheet(): any;
    get typography(): any;
    get uiColorPalette(): any;
}
export declare function dataAwsccQuicksightThemeConfigurationToTerraform(struct?: DataAwsccQuicksightThemeConfiguration): any;
export declare class DataAwsccQuicksightThemePermissions extends cdktf.ComplexComputedList {
    get actions(): string[];
    get principal(): string;
}
export declare function dataAwsccQuicksightThemePermissionsToTerraform(struct?: DataAwsccQuicksightThemePermissions): any;
export declare class DataAwsccQuicksightThemeTags extends cdktf.ComplexComputedList {
    get key(): string;
    get value(): string;
}
export declare function dataAwsccQuicksightThemeTagsToTerraform(struct?: DataAwsccQuicksightThemeTags): any;
export declare class DataAwsccQuicksightThemeVersionConfigurationDataColorPalette extends cdktf.ComplexComputedList {
    get colors(): string[];
    get emptyFillColor(): string;
    get minMaxGradient(): string[];
}
export declare function dataAwsccQuicksightThemeVersionConfigurationDataColorPaletteToTerraform(struct?: DataAwsccQuicksightThemeVersionConfigurationDataColorPalette): any;
export declare class DataAwsccQuicksightThemeVersionConfigurationSheetTileBorder extends cdktf.ComplexComputedList {
    get show(): any;
}
export declare function dataAwsccQuicksightThemeVersionConfigurationSheetTileBorderToTerraform(struct?: DataAwsccQuicksightThemeVersionConfigurationSheetTileBorder): any;
export declare class DataAwsccQuicksightThemeVersionConfigurationSheetTile extends cdktf.ComplexComputedList {
    get border(): any;
}
export declare function dataAwsccQuicksightThemeVersionConfigurationSheetTileToTerraform(struct?: DataAwsccQuicksightThemeVersionConfigurationSheetTile): any;
export declare class DataAwsccQuicksightThemeVersionConfigurationSheetTileLayoutGutter extends cdktf.ComplexComputedList {
    get show(): any;
}
export declare function dataAwsccQuicksightThemeVersionConfigurationSheetTileLayoutGutterToTerraform(struct?: DataAwsccQuicksightThemeVersionConfigurationSheetTileLayoutGutter): any;
export declare class DataAwsccQuicksightThemeVersionConfigurationSheetTileLayoutMargin extends cdktf.ComplexComputedList {
    get show(): any;
}
export declare function dataAwsccQuicksightThemeVersionConfigurationSheetTileLayoutMarginToTerraform(struct?: DataAwsccQuicksightThemeVersionConfigurationSheetTileLayoutMargin): any;
export declare class DataAwsccQuicksightThemeVersionConfigurationSheetTileLayout extends cdktf.ComplexComputedList {
    get gutter(): any;
    get margin(): any;
}
export declare function dataAwsccQuicksightThemeVersionConfigurationSheetTileLayoutToTerraform(struct?: DataAwsccQuicksightThemeVersionConfigurationSheetTileLayout): any;
export declare class DataAwsccQuicksightThemeVersionConfigurationSheet extends cdktf.ComplexComputedList {
    get tile(): any;
    get tileLayout(): any;
}
export declare function dataAwsccQuicksightThemeVersionConfigurationSheetToTerraform(struct?: DataAwsccQuicksightThemeVersionConfigurationSheet): any;
export declare class DataAwsccQuicksightThemeVersionConfigurationTypographyFontFamilies extends cdktf.ComplexComputedList {
    get fontFamily(): string;
}
export declare function dataAwsccQuicksightThemeVersionConfigurationTypographyFontFamiliesToTerraform(struct?: DataAwsccQuicksightThemeVersionConfigurationTypographyFontFamilies): any;
export declare class DataAwsccQuicksightThemeVersionConfigurationTypography extends cdktf.ComplexComputedList {
    get fontFamilies(): any;
}
export declare function dataAwsccQuicksightThemeVersionConfigurationTypographyToTerraform(struct?: DataAwsccQuicksightThemeVersionConfigurationTypography): any;
export declare class DataAwsccQuicksightThemeVersionConfigurationUiColorPalette extends cdktf.ComplexComputedList {
    get accent(): string;
    get accentForeground(): string;
    get danger(): string;
    get dangerForeground(): string;
    get dimension(): string;
    get dimensionForeground(): string;
    get measure(): string;
    get measureForeground(): string;
    get primaryBackground(): string;
    get primaryForeground(): string;
    get secondaryBackground(): string;
    get secondaryForeground(): string;
    get success(): string;
    get successForeground(): string;
    get warning(): string;
    get warningForeground(): string;
}
export declare function dataAwsccQuicksightThemeVersionConfigurationUiColorPaletteToTerraform(struct?: DataAwsccQuicksightThemeVersionConfigurationUiColorPalette): any;
export declare class DataAwsccQuicksightThemeVersionConfiguration extends cdktf.ComplexComputedList {
    get dataColorPalette(): any;
    get sheet(): any;
    get typography(): any;
    get uiColorPalette(): any;
}
export declare function dataAwsccQuicksightThemeVersionConfigurationToTerraform(struct?: DataAwsccQuicksightThemeVersionConfiguration): any;
export declare class DataAwsccQuicksightThemeVersionErrors extends cdktf.ComplexComputedList {
    get message(): string;
    get type(): string;
}
export declare function dataAwsccQuicksightThemeVersionErrorsToTerraform(struct?: DataAwsccQuicksightThemeVersionErrors): any;
export declare class DataAwsccQuicksightThemeVersion extends cdktf.ComplexComputedList {
    get arn(): string;
    get baseThemeId(): string;
    get configuration(): any;
    get createdTime(): string;
    get description(): string;
    get errors(): any;
    get status(): string;
    get versionNumber(): number;
}
export declare function dataAwsccQuicksightThemeVersionToTerraform(struct?: DataAwsccQuicksightThemeVersion): any;
/**
* Represents a {@link https://www.terraform.io/docs/providers/awscc/d/quicksight_theme.html awscc_quicksight_theme}
*/
export declare class DataAwsccQuicksightTheme extends cdktf.TerraformDataSource {
    static readonly tfResourceType: string;
    /**
    * Create a new {@link https://www.terraform.io/docs/providers/awscc/d/quicksight_theme.html awscc_quicksight_theme} Data Source
    *
    * @param scope The scope in which to define this construct
    * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
    * @param options DataAwsccQuicksightThemeConfig
    */
    constructor(scope: Construct, id: string, config: DataAwsccQuicksightThemeConfig);
    get arn(): string;
    get awsAccountId(): string;
    get baseThemeId(): string;
    get configuration(): any;
    get createdTime(): string;
    private _id;
    get id(): string;
    set id(value: string);
    get idInput(): string;
    get lastUpdatedTime(): string;
    get name(): string;
    get permissions(): any;
    get tags(): any;
    get themeId(): string;
    get type(): string;
    get version(): any;
    get versionDescription(): string;
    protected synthesizeAttributes(): {
        [name: string]: any;
    };
}
