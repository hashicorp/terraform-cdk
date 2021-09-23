// https://www.terraform.io/docs/providers/awscc/r/quicksight_dashboard.html
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

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

export function quicksightDashboardDashboardPublishOptionsAdHocFilteringOptionToTerraform(struct?: QuicksightDashboardDashboardPublishOptionsAdHocFilteringOption): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    availability_status: cdktf.stringToTerraform(struct!.availabilityStatus),
  }
}

export interface QuicksightDashboardDashboardPublishOptionsExportToCsvOption {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/quicksight_dashboard.html#availability_status QuicksightDashboard#availability_status}
  */
  readonly availabilityStatus?: string;
}

export function quicksightDashboardDashboardPublishOptionsExportToCsvOptionToTerraform(struct?: QuicksightDashboardDashboardPublishOptionsExportToCsvOption): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    availability_status: cdktf.stringToTerraform(struct!.availabilityStatus),
  }
}

export interface QuicksightDashboardDashboardPublishOptionsSheetControlsOption {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/quicksight_dashboard.html#visibility_state QuicksightDashboard#visibility_state}
  */
  readonly visibilityState?: string;
}

export function quicksightDashboardDashboardPublishOptionsSheetControlsOptionToTerraform(struct?: QuicksightDashboardDashboardPublishOptionsSheetControlsOption): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    visibility_state: cdktf.stringToTerraform(struct!.visibilityState),
  }
}

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

export function quicksightDashboardDashboardPublishOptionsToTerraform(struct?: QuicksightDashboardDashboardPublishOptions): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    ad_hoc_filtering_option: quicksightDashboardDashboardPublishOptionsAdHocFilteringOptionToTerraform(struct!.adHocFilteringOption),
    export_to_csv_option: quicksightDashboardDashboardPublishOptionsExportToCsvOptionToTerraform(struct!.exportToCsvOption),
    sheet_controls_option: quicksightDashboardDashboardPublishOptionsSheetControlsOptionToTerraform(struct!.sheetControlsOption),
  }
}

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

export function quicksightDashboardParametersDateTimeParametersToTerraform(struct?: QuicksightDashboardParametersDateTimeParameters): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    name: cdktf.stringToTerraform(struct!.name),
    values: cdktf.listMapper(cdktf.stringToTerraform)(struct!.values),
  }
}

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

export function quicksightDashboardParametersDecimalParametersToTerraform(struct?: QuicksightDashboardParametersDecimalParameters): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    name: cdktf.stringToTerraform(struct!.name),
    values: cdktf.listMapper(cdktf.numberToTerraform)(struct!.values),
  }
}

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

export function quicksightDashboardParametersIntegerParametersToTerraform(struct?: QuicksightDashboardParametersIntegerParameters): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    name: cdktf.stringToTerraform(struct!.name),
    values: cdktf.listMapper(cdktf.numberToTerraform)(struct!.values),
  }
}

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

export function quicksightDashboardParametersStringParametersToTerraform(struct?: QuicksightDashboardParametersStringParameters): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    name: cdktf.stringToTerraform(struct!.name),
    values: cdktf.listMapper(cdktf.stringToTerraform)(struct!.values),
  }
}

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

export function quicksightDashboardParametersToTerraform(struct?: QuicksightDashboardParameters): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    date_time_parameters: cdktf.listMapper(quicksightDashboardParametersDateTimeParametersToTerraform)(struct!.dateTimeParameters),
    decimal_parameters: cdktf.listMapper(quicksightDashboardParametersDecimalParametersToTerraform)(struct!.decimalParameters),
    integer_parameters: cdktf.listMapper(quicksightDashboardParametersIntegerParametersToTerraform)(struct!.integerParameters),
    string_parameters: cdktf.listMapper(quicksightDashboardParametersStringParametersToTerraform)(struct!.stringParameters),
  }
}

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

export function quicksightDashboardPermissionsToTerraform(struct?: QuicksightDashboardPermissions): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    actions: cdktf.listMapper(cdktf.stringToTerraform)(struct!.actions),
    principal: cdktf.stringToTerraform(struct!.principal),
  }
}

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

export function quicksightDashboardSourceEntitySourceTemplateDataSetReferencesToTerraform(struct?: QuicksightDashboardSourceEntitySourceTemplateDataSetReferences): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    data_set_arn: cdktf.stringToTerraform(struct!.dataSetArn),
    data_set_placeholder: cdktf.stringToTerraform(struct!.dataSetPlaceholder),
  }
}

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

export function quicksightDashboardSourceEntitySourceTemplateToTerraform(struct?: QuicksightDashboardSourceEntitySourceTemplate): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    arn: cdktf.stringToTerraform(struct!.arn),
    data_set_references: cdktf.listMapper(quicksightDashboardSourceEntitySourceTemplateDataSetReferencesToTerraform)(struct!.dataSetReferences),
  }
}

export interface QuicksightDashboardSourceEntity {
  /**
  * <p>Dashboard source template.</p>
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/quicksight_dashboard.html#source_template QuicksightDashboard#source_template}
  */
  readonly sourceTemplate?: QuicksightDashboardSourceEntitySourceTemplate;
}

export function quicksightDashboardSourceEntityToTerraform(struct?: QuicksightDashboardSourceEntity): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    source_template: quicksightDashboardSourceEntitySourceTemplateToTerraform(struct!.sourceTemplate),
  }
}

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

export function quicksightDashboardTagsToTerraform(struct?: QuicksightDashboardTags): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    key: cdktf.stringToTerraform(struct!.key),
    value: cdktf.stringToTerraform(struct!.value),
  }
}

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

export function quicksightDashboardVersionErrorsToTerraform(struct?: QuicksightDashboardVersionErrors): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    message: cdktf.stringToTerraform(struct!.message),
    type: cdktf.stringToTerraform(struct!.type),
  }
}

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

export function quicksightDashboardVersionSheetsToTerraform(struct?: QuicksightDashboardVersionSheets): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    name: cdktf.stringToTerraform(struct!.name),
    sheet_id: cdktf.stringToTerraform(struct!.sheetId),
  }
}

export class QuicksightDashboardVersion extends cdktf.ComplexComputedList {

  // arn - computed: true, optional: true, required: false
  public get arn() {
    return this.getStringAttribute('arn');
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

  // data_set_arns - computed: true, optional: true, required: false
  private _dataSetArns?: string[];
  public get dataSetArns() {
    return this.getListAttribute('data_set_arns');
  }
  public set dataSetArns(value: string[]) {
    this._dataSetArns = value;
  }
  public resetDataSetArns() {
    this._dataSetArns = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dataSetArnsInput() {
    return this._dataSetArns
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
  private _errors?: QuicksightDashboardVersionErrors[];
  public get errors() {
    return this.interpolationForAttribute('errors') as any;
  }
  public set errors(value: QuicksightDashboardVersionErrors[]) {
    this._errors = value;
  }
  public resetErrors() {
    this._errors = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get errorsInput() {
    return this._errors
  }

  // sheets - computed: true, optional: true, required: false
  private _sheets?: QuicksightDashboardVersionSheets[];
  public get sheets() {
    return this.interpolationForAttribute('sheets') as any;
  }
  public set sheets(value: QuicksightDashboardVersionSheets[]) {
    this._sheets = value;
  }
  public resetSheets() {
    this._sheets = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sheetsInput() {
    return this._sheets
  }

  // source_entity_arn - computed: true, optional: true, required: false
  private _sourceEntityArn?: string;
  public get sourceEntityArn() {
    return this.getStringAttribute('source_entity_arn');
  }
  public set sourceEntityArn(value: string) {
    this._sourceEntityArn = value;
  }
  public resetSourceEntityArn() {
    this._sourceEntityArn = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sourceEntityArnInput() {
    return this._sourceEntityArn
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

  // theme_arn - computed: true, optional: true, required: false
  private _themeArn?: string;
  public get themeArn() {
    return this.getStringAttribute('theme_arn');
  }
  public set themeArn(value: string) {
    this._themeArn = value;
  }
  public resetThemeArn() {
    this._themeArn = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get themeArnInput() {
    return this._themeArn
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

export function quicksightDashboardVersionToTerraform(struct?: QuicksightDashboardVersion): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    arn: cdktf.stringToTerraform(struct!.arn),
    created_time: cdktf.stringToTerraform(struct!.createdTime),
    data_set_arns: cdktf.listMapper(cdktf.stringToTerraform)(struct!.dataSetArns),
    description: cdktf.stringToTerraform(struct!.description),
    errors: cdktf.listMapper(quicksightDashboardVersionErrorsToTerraform)(struct!.errors),
    sheets: cdktf.listMapper(quicksightDashboardVersionSheetsToTerraform)(struct!.sheets),
    source_entity_arn: cdktf.stringToTerraform(struct!.sourceEntityArn),
    status: cdktf.stringToTerraform(struct!.status),
    theme_arn: cdktf.stringToTerraform(struct!.themeArn),
    version_number: cdktf.numberToTerraform(struct!.versionNumber),
  }
}


/**
* Represents a {@link https://www.terraform.io/docs/providers/awscc/r/quicksight_dashboard.html awscc_quicksight_dashboard}
*/
export class QuicksightDashboard extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType: string = "awscc_quicksight_dashboard";

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
  public constructor(scope: Construct, id: string, config: QuicksightDashboardConfig) {
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

  // created_time - computed: true, optional: false, required: false
  public get createdTime() {
    return this.getStringAttribute('created_time');
  }

  // dashboard_id - computed: false, optional: false, required: true
  private _dashboardId: string;
  public get dashboardId() {
    return this.getStringAttribute('dashboard_id');
  }
  public set dashboardId(value: string) {
    this._dashboardId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get dashboardIdInput() {
    return this._dashboardId
  }

  // dashboard_publish_options - computed: false, optional: true, required: false
  private _dashboardPublishOptions?: QuicksightDashboardDashboardPublishOptions;
  public get dashboardPublishOptions() {
    return this.interpolationForAttribute('dashboard_publish_options') as any;
  }
  public set dashboardPublishOptions(value: QuicksightDashboardDashboardPublishOptions ) {
    this._dashboardPublishOptions = value;
  }
  public resetDashboardPublishOptions() {
    this._dashboardPublishOptions = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dashboardPublishOptionsInput() {
    return this._dashboardPublishOptions
  }

  // id - computed: true, optional: false, required: false
  public get id() {
    return this.getStringAttribute('id');
  }

  // last_published_time - computed: true, optional: false, required: false
  public get lastPublishedTime() {
    return this.getStringAttribute('last_published_time');
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

  // parameters - computed: false, optional: true, required: false
  private _parameters?: QuicksightDashboardParameters;
  public get parameters() {
    return this.interpolationForAttribute('parameters') as any;
  }
  public set parameters(value: QuicksightDashboardParameters ) {
    this._parameters = value;
  }
  public resetParameters() {
    this._parameters = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get parametersInput() {
    return this._parameters
  }

  // permissions - computed: false, optional: true, required: false
  private _permissions?: QuicksightDashboardPermissions[];
  public get permissions() {
    return this.interpolationForAttribute('permissions') as any;
  }
  public set permissions(value: QuicksightDashboardPermissions[] ) {
    this._permissions = value;
  }
  public resetPermissions() {
    this._permissions = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get permissionsInput() {
    return this._permissions
  }

  // source_entity - computed: false, optional: true, required: false
  private _sourceEntity?: QuicksightDashboardSourceEntity;
  public get sourceEntity() {
    return this.interpolationForAttribute('source_entity') as any;
  }
  public set sourceEntity(value: QuicksightDashboardSourceEntity ) {
    this._sourceEntity = value;
  }
  public resetSourceEntity() {
    this._sourceEntity = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sourceEntityInput() {
    return this._sourceEntity
  }

  // tags - computed: false, optional: true, required: false
  private _tags?: QuicksightDashboardTags[];
  public get tags() {
    return this.interpolationForAttribute('tags') as any;
  }
  public set tags(value: QuicksightDashboardTags[] ) {
    this._tags = value;
  }
  public resetTags() {
    this._tags = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tagsInput() {
    return this._tags
  }

  // theme_arn - computed: false, optional: true, required: false
  private _themeArn?: string;
  public get themeArn() {
    return this.getStringAttribute('theme_arn');
  }
  public set themeArn(value: string ) {
    this._themeArn = value;
  }
  public resetThemeArn() {
    this._themeArn = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get themeArnInput() {
    return this._themeArn
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
