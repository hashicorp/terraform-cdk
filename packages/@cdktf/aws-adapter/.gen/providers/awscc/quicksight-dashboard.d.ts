import { Construct } from 'constructs';
import * as cdktf from 'cdktf';
export interface QuicksightDashboardConfig extends cdktf.TerraformMetaArguments {
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/quicksight_dashboard.html#aws_account_id QuicksightDashboard#aws_account_id}
    */
    readonly awsAccountId: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/quicksight_dashboard.html#dashboard_id QuicksightDashboard#dashboard_id}
    */
    readonly dashboardId: string;
    /**
    * <p>Dashboard publish options.</p>
    *
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/quicksight_dashboard.html#dashboard_publish_options QuicksightDashboard#dashboard_publish_options}
    */
    readonly dashboardPublishOptions?: QuicksightDashboardDashboardPublishOptions;
    /**
    * <p>The display name of the dashboard.</p>
    *
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/quicksight_dashboard.html#name QuicksightDashboard#name}
    */
    readonly name?: string;
    /**
    * <p>A list of QuickSight parameters and the list's override values.</p>
    *
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/quicksight_dashboard.html#parameters QuicksightDashboard#parameters}
    */
    readonly parameters?: QuicksightDashboardParameters;
    /**
    * <p>A structure that contains the permissions of the dashboard. You can use this structure
              for granting permissions by providing a list of IAM action information for each
              principal ARN. </p>
  
          <p>To specify no permissions, omit the permissions list.</p>
    *
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/quicksight_dashboard.html#permissions QuicksightDashboard#permissions}
    */
    readonly permissions?: QuicksightDashboardPermissions[];
    /**
    * <p>Dashboard source entity.</p>
    *
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/quicksight_dashboard.html#source_entity QuicksightDashboard#source_entity}
    */
    readonly sourceEntity?: QuicksightDashboardSourceEntity;
    /**
    * <p>Contains a map of the key-value pairs for the resource tag or tags assigned to the
              dashboard.</p>
    *
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/quicksight_dashboard.html#tags QuicksightDashboard#tags}
    */
    readonly tags?: QuicksightDashboardTags[];
    /**
    * <p>The Amazon Resource Name (ARN) of the theme that is being used for this dashboard. If
              you add a value for this field, it overrides the value that is used in the source
              entity. The theme ARN must exist in the same AWS account where you create the
              dashboard.</p>
    *
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/quicksight_dashboard.html#theme_arn QuicksightDashboard#theme_arn}
    */
    readonly themeArn?: string;
    /**
    * <p>A description for the first version of the dashboard being created.</p>
    *
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/quicksight_dashboard.html#version_description QuicksightDashboard#version_description}
    */
    readonly versionDescription?: string;
}
export interface QuicksightDashboardDashboardPublishOptionsAdHocFilteringOption {
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/quicksight_dashboard.html#availability_status QuicksightDashboard#availability_status}
    */
    readonly availabilityStatus?: string;
}
export declare function quicksightDashboardDashboardPublishOptionsAdHocFilteringOptionToTerraform(struct?: QuicksightDashboardDashboardPublishOptionsAdHocFilteringOption): any;
export interface QuicksightDashboardDashboardPublishOptionsExportToCsvOption {
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/quicksight_dashboard.html#availability_status QuicksightDashboard#availability_status}
    */
    readonly availabilityStatus?: string;
}
export declare function quicksightDashboardDashboardPublishOptionsExportToCsvOptionToTerraform(struct?: QuicksightDashboardDashboardPublishOptionsExportToCsvOption): any;
export interface QuicksightDashboardDashboardPublishOptionsSheetControlsOption {
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/quicksight_dashboard.html#visibility_state QuicksightDashboard#visibility_state}
    */
    readonly visibilityState?: string;
}
export declare function quicksightDashboardDashboardPublishOptionsSheetControlsOptionToTerraform(struct?: QuicksightDashboardDashboardPublishOptionsSheetControlsOption): any;
export interface QuicksightDashboardDashboardPublishOptions {
    /**
    * <p>Ad hoc (one-time) filtering option.</p>
    *
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/quicksight_dashboard.html#ad_hoc_filtering_option QuicksightDashboard#ad_hoc_filtering_option}
    */
    readonly adHocFilteringOption?: QuicksightDashboardDashboardPublishOptionsAdHocFilteringOption;
    /**
    * <p>Export to .csv option.</p>
    *
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/quicksight_dashboard.html#export_to_csv_option QuicksightDashboard#export_to_csv_option}
    */
    readonly exportToCsvOption?: QuicksightDashboardDashboardPublishOptionsExportToCsvOption;
    /**
    * <p>Sheet controls option.</p>
    *
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/quicksight_dashboard.html#sheet_controls_option QuicksightDashboard#sheet_controls_option}
    */
    readonly sheetControlsOption?: QuicksightDashboardDashboardPublishOptionsSheetControlsOption;
}
export declare function quicksightDashboardDashboardPublishOptionsToTerraform(struct?: QuicksightDashboardDashboardPublishOptions): any;
export interface QuicksightDashboardParametersDateTimeParameters {
    /**
    * <p>A display name for the date-time parameter.</p>
    *
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/quicksight_dashboard.html#name QuicksightDashboard#name}
    */
    readonly name: string;
    /**
    * <p>The values for the date-time parameter.</p>
    *
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/quicksight_dashboard.html#values QuicksightDashboard#values}
    */
    readonly values: string[];
}
export declare function quicksightDashboardParametersDateTimeParametersToTerraform(struct?: QuicksightDashboardParametersDateTimeParameters): any;
export interface QuicksightDashboardParametersDecimalParameters {
    /**
    * <p>A display name for the decimal parameter.</p>
    *
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/quicksight_dashboard.html#name QuicksightDashboard#name}
    */
    readonly name: string;
    /**
    * <p>The values for the decimal parameter.</p>
    *
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/quicksight_dashboard.html#values QuicksightDashboard#values}
    */
    readonly values: number[];
}
export declare function quicksightDashboardParametersDecimalParametersToTerraform(struct?: QuicksightDashboardParametersDecimalParameters): any;
export interface QuicksightDashboardParametersIntegerParameters {
    /**
    * <p>The name of the integer parameter.</p>
    *
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/quicksight_dashboard.html#name QuicksightDashboard#name}
    */
    readonly name: string;
    /**
    * <p>The values for the integer parameter.</p>
    *
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/quicksight_dashboard.html#values QuicksightDashboard#values}
    */
    readonly values: number[];
}
export declare function quicksightDashboardParametersIntegerParametersToTerraform(struct?: QuicksightDashboardParametersIntegerParameters): any;
export interface QuicksightDashboardParametersStringParameters {
    /**
    * <p>A display name for a string parameter.</p>
    *
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/quicksight_dashboard.html#name QuicksightDashboard#name}
    */
    readonly name: string;
    /**
    * <p>The values of a string parameter.</p>
    *
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/quicksight_dashboard.html#values QuicksightDashboard#values}
    */
    readonly values: string[];
}
export declare function quicksightDashboardParametersStringParametersToTerraform(struct?: QuicksightDashboardParametersStringParameters): any;
export interface QuicksightDashboardParameters {
    /**
    * <p>Date-time parameters.</p>
    *
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/quicksight_dashboard.html#date_time_parameters QuicksightDashboard#date_time_parameters}
    */
    readonly dateTimeParameters?: QuicksightDashboardParametersDateTimeParameters[];
    /**
    * <p>Decimal parameters.</p>
    *
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/quicksight_dashboard.html#decimal_parameters QuicksightDashboard#decimal_parameters}
    */
    readonly decimalParameters?: QuicksightDashboardParametersDecimalParameters[];
    /**
    * <p>Integer parameters.</p>
    *
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/quicksight_dashboard.html#integer_parameters QuicksightDashboard#integer_parameters}
    */
    readonly integerParameters?: QuicksightDashboardParametersIntegerParameters[];
    /**
    * <p>String parameters.</p>
    *
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/quicksight_dashboard.html#string_parameters QuicksightDashboard#string_parameters}
    */
    readonly stringParameters?: QuicksightDashboardParametersStringParameters[];
}
export declare function quicksightDashboardParametersToTerraform(struct?: QuicksightDashboardParameters): any;
export interface QuicksightDashboardPermissions {
    /**
    * <p>The IAM action to grant or revoke permissions on.</p>
    *
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/quicksight_dashboard.html#actions QuicksightDashboard#actions}
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
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/quicksight_dashboard.html#principal QuicksightDashboard#principal}
    */
    readonly principal: string;
}
export declare function quicksightDashboardPermissionsToTerraform(struct?: QuicksightDashboardPermissions): any;
export interface QuicksightDashboardSourceEntitySourceTemplateDataSetReferences {
    /**
    * <p>Dataset Amazon Resource Name (ARN).</p>
    *
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/quicksight_dashboard.html#data_set_arn QuicksightDashboard#data_set_arn}
    */
    readonly dataSetArn: string;
    /**
    * <p>Dataset placeholder.</p>
    *
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/quicksight_dashboard.html#data_set_placeholder QuicksightDashboard#data_set_placeholder}
    */
    readonly dataSetPlaceholder: string;
}
export declare function quicksightDashboardSourceEntitySourceTemplateDataSetReferencesToTerraform(struct?: QuicksightDashboardSourceEntitySourceTemplateDataSetReferences): any;
export interface QuicksightDashboardSourceEntitySourceTemplate {
    /**
    * <p>The Amazon Resource Name (ARN) of the resource.</p>
    *
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/quicksight_dashboard.html#arn QuicksightDashboard#arn}
    */
    readonly arn: string;
    /**
    * <p>Dataset references.</p>
    *
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/quicksight_dashboard.html#data_set_references QuicksightDashboard#data_set_references}
    */
    readonly dataSetReferences: QuicksightDashboardSourceEntitySourceTemplateDataSetReferences[];
}
export declare function quicksightDashboardSourceEntitySourceTemplateToTerraform(struct?: QuicksightDashboardSourceEntitySourceTemplate): any;
export interface QuicksightDashboardSourceEntity {
    /**
    * <p>Dashboard source template.</p>
    *
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/quicksight_dashboard.html#source_template QuicksightDashboard#source_template}
    */
    readonly sourceTemplate?: QuicksightDashboardSourceEntitySourceTemplate;
}
export declare function quicksightDashboardSourceEntityToTerraform(struct?: QuicksightDashboardSourceEntity): any;
export interface QuicksightDashboardTags {
    /**
    * <p>Tag key.</p>
    *
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/quicksight_dashboard.html#key QuicksightDashboard#key}
    */
    readonly key: string;
    /**
    * <p>Tag value.</p>
    *
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/quicksight_dashboard.html#value QuicksightDashboard#value}
    */
    readonly value: string;
}
export declare function quicksightDashboardTagsToTerraform(struct?: QuicksightDashboardTags): any;
export interface QuicksightDashboardVersionErrors {
    /**
    * <p>Message.</p>
    *
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/quicksight_dashboard.html#message QuicksightDashboard#message}
    */
    readonly message?: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/quicksight_dashboard.html#type QuicksightDashboard#type}
    */
    readonly type?: string;
}
export declare function quicksightDashboardVersionErrorsToTerraform(struct?: QuicksightDashboardVersionErrors): any;
export interface QuicksightDashboardVersionSheets {
    /**
    * <p>The name of a sheet. This name is displayed on the sheet's tab in the QuickSight
              console.</p>
    *
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/quicksight_dashboard.html#name QuicksightDashboard#name}
    */
    readonly name?: string;
    /**
    * <p>The unique identifier associated with a sheet.</p>
    *
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/quicksight_dashboard.html#sheet_id QuicksightDashboard#sheet_id}
    */
    readonly sheetId?: string;
}
export declare function quicksightDashboardVersionSheetsToTerraform(struct?: QuicksightDashboardVersionSheets): any;
export declare class QuicksightDashboardVersion extends cdktf.ComplexComputedList {
    get arn(): string;
    private _createdTime?;
    get createdTime(): string;
    set createdTime(value: string);
    resetCreatedTime(): void;
    get createdTimeInput(): string | undefined;
    private _dataSetArns?;
    get dataSetArns(): string[];
    set dataSetArns(value: string[]);
    resetDataSetArns(): void;
    get dataSetArnsInput(): string[] | undefined;
    private _description?;
    get description(): string;
    set description(value: string);
    resetDescription(): void;
    get descriptionInput(): string | undefined;
    private _errors?;
    get errors(): QuicksightDashboardVersionErrors[];
    set errors(value: QuicksightDashboardVersionErrors[]);
    resetErrors(): void;
    get errorsInput(): QuicksightDashboardVersionErrors[] | undefined;
    private _sheets?;
    get sheets(): QuicksightDashboardVersionSheets[];
    set sheets(value: QuicksightDashboardVersionSheets[]);
    resetSheets(): void;
    get sheetsInput(): QuicksightDashboardVersionSheets[] | undefined;
    private _sourceEntityArn?;
    get sourceEntityArn(): string;
    set sourceEntityArn(value: string);
    resetSourceEntityArn(): void;
    get sourceEntityArnInput(): string | undefined;
    private _status?;
    get status(): string;
    set status(value: string);
    resetStatus(): void;
    get statusInput(): string | undefined;
    private _themeArn?;
    get themeArn(): string;
    set themeArn(value: string);
    resetThemeArn(): void;
    get themeArnInput(): string | undefined;
    private _versionNumber?;
    get versionNumber(): number;
    set versionNumber(value: number);
    resetVersionNumber(): void;
    get versionNumberInput(): number | undefined;
}
export declare function quicksightDashboardVersionToTerraform(struct?: QuicksightDashboardVersion): any;
/**
* Represents a {@link https://www.terraform.io/docs/providers/awscc/r/quicksight_dashboard.html awscc_quicksight_dashboard}
*/
export declare class QuicksightDashboard extends cdktf.TerraformResource {
    static readonly tfResourceType: string;
    /**
    * Create a new {@link https://www.terraform.io/docs/providers/awscc/r/quicksight_dashboard.html awscc_quicksight_dashboard} Resource
    *
    * @param scope The scope in which to define this construct
    * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
    * @param options QuicksightDashboardConfig
    */
    constructor(scope: Construct, id: string, config: QuicksightDashboardConfig);
    get arn(): string;
    private _awsAccountId;
    get awsAccountId(): string;
    set awsAccountId(value: string);
    get awsAccountIdInput(): string;
    get createdTime(): string;
    private _dashboardId;
    get dashboardId(): string;
    set dashboardId(value: string);
    get dashboardIdInput(): string;
    private _dashboardPublishOptions?;
    get dashboardPublishOptions(): QuicksightDashboardDashboardPublishOptions;
    set dashboardPublishOptions(value: QuicksightDashboardDashboardPublishOptions);
    resetDashboardPublishOptions(): void;
    get dashboardPublishOptionsInput(): QuicksightDashboardDashboardPublishOptions | undefined;
    get id(): string;
    get lastPublishedTime(): string;
    get lastUpdatedTime(): string;
    private _name?;
    get name(): string;
    set name(value: string);
    resetName(): void;
    get nameInput(): string | undefined;
    private _parameters?;
    get parameters(): QuicksightDashboardParameters;
    set parameters(value: QuicksightDashboardParameters);
    resetParameters(): void;
    get parametersInput(): QuicksightDashboardParameters | undefined;
    private _permissions?;
    get permissions(): QuicksightDashboardPermissions[];
    set permissions(value: QuicksightDashboardPermissions[]);
    resetPermissions(): void;
    get permissionsInput(): QuicksightDashboardPermissions[] | undefined;
    private _sourceEntity?;
    get sourceEntity(): QuicksightDashboardSourceEntity;
    set sourceEntity(value: QuicksightDashboardSourceEntity);
    resetSourceEntity(): void;
    get sourceEntityInput(): QuicksightDashboardSourceEntity | undefined;
    private _tags?;
    get tags(): QuicksightDashboardTags[];
    set tags(value: QuicksightDashboardTags[]);
    resetTags(): void;
    get tagsInput(): QuicksightDashboardTags[] | undefined;
    private _themeArn?;
    get themeArn(): string;
    set themeArn(value: string);
    resetThemeArn(): void;
    get themeArnInput(): string | undefined;
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
