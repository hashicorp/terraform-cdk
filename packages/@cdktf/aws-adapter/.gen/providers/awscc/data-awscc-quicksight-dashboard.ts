// https://www.terraform.io/docs/providers/awscc/d/quicksight_dashboard.html
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DataAwsccQuicksightDashboardConfig extends cdktf.TerraformMetaArguments {
  /**
  * Uniquely identifies the resource.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/d/quicksight_dashboard.html#id DataAwsccQuicksightDashboard#id}
  */
  readonly id: string;
}
export class DataAwsccQuicksightDashboardDashboardPublishOptionsAdHocFilteringOption extends cdktf.ComplexComputedList {

  // availability_status - computed: true, optional: false, required: false
  public get availabilityStatus() {
    return this.getStringAttribute('availability_status');
  }
}

export function dataAwsccQuicksightDashboardDashboardPublishOptionsAdHocFilteringOptionToTerraform(struct?: DataAwsccQuicksightDashboardDashboardPublishOptionsAdHocFilteringOption): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    availability_status: cdktf.stringToTerraform(struct!.availabilityStatus),
  }
}

export class DataAwsccQuicksightDashboardDashboardPublishOptionsExportToCsvOption extends cdktf.ComplexComputedList {

  // availability_status - computed: true, optional: false, required: false
  public get availabilityStatus() {
    return this.getStringAttribute('availability_status');
  }
}

export function dataAwsccQuicksightDashboardDashboardPublishOptionsExportToCsvOptionToTerraform(struct?: DataAwsccQuicksightDashboardDashboardPublishOptionsExportToCsvOption): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    availability_status: cdktf.stringToTerraform(struct!.availabilityStatus),
  }
}

export class DataAwsccQuicksightDashboardDashboardPublishOptionsSheetControlsOption extends cdktf.ComplexComputedList {

  // visibility_state - computed: true, optional: false, required: false
  public get visibilityState() {
    return this.getStringAttribute('visibility_state');
  }
}

export function dataAwsccQuicksightDashboardDashboardPublishOptionsSheetControlsOptionToTerraform(struct?: DataAwsccQuicksightDashboardDashboardPublishOptionsSheetControlsOption): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    visibility_state: cdktf.stringToTerraform(struct!.visibilityState),
  }
}

export class DataAwsccQuicksightDashboardDashboardPublishOptions extends cdktf.ComplexComputedList {

  // ad_hoc_filtering_option - computed: true, optional: false, required: false
  public get adHocFilteringOption() {
    return this.interpolationForAttribute('ad_hoc_filtering_option') as any;
  }

  // export_to_csv_option - computed: true, optional: false, required: false
  public get exportToCsvOption() {
    return this.interpolationForAttribute('export_to_csv_option') as any;
  }

  // sheet_controls_option - computed: true, optional: false, required: false
  public get sheetControlsOption() {
    return this.interpolationForAttribute('sheet_controls_option') as any;
  }
}

export function dataAwsccQuicksightDashboardDashboardPublishOptionsToTerraform(struct?: DataAwsccQuicksightDashboardDashboardPublishOptions): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    ad_hoc_filtering_option: dataAwsccQuicksightDashboardDashboardPublishOptionsAdHocFilteringOptionToTerraform(struct!.adHocFilteringOption),
    export_to_csv_option: dataAwsccQuicksightDashboardDashboardPublishOptionsExportToCsvOptionToTerraform(struct!.exportToCsvOption),
    sheet_controls_option: dataAwsccQuicksightDashboardDashboardPublishOptionsSheetControlsOptionToTerraform(struct!.sheetControlsOption),
  }
}

export class DataAwsccQuicksightDashboardParametersDateTimeParameters extends cdktf.ComplexComputedList {

  // name - computed: true, optional: false, required: false
  public get name() {
    return this.getStringAttribute('name');
  }

  // values - computed: true, optional: false, required: false
  public get values() {
    return this.getListAttribute('values');
  }
}

export function dataAwsccQuicksightDashboardParametersDateTimeParametersToTerraform(struct?: DataAwsccQuicksightDashboardParametersDateTimeParameters): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    name: cdktf.stringToTerraform(struct!.name),
    values: cdktf.listMapper(cdktf.stringToTerraform)(struct!.values),
  }
}

export class DataAwsccQuicksightDashboardParametersDecimalParameters extends cdktf.ComplexComputedList {

  // name - computed: true, optional: false, required: false
  public get name() {
    return this.getStringAttribute('name');
  }

  // values - computed: true, optional: false, required: false
  public get values() {
    return this.interpolationForAttribute('values') as any;
  }
}

export function dataAwsccQuicksightDashboardParametersDecimalParametersToTerraform(struct?: DataAwsccQuicksightDashboardParametersDecimalParameters): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    name: cdktf.stringToTerraform(struct!.name),
    values: cdktf.listMapper(cdktf.numberToTerraform)(struct!.values),
  }
}

export class DataAwsccQuicksightDashboardParametersIntegerParameters extends cdktf.ComplexComputedList {

  // name - computed: true, optional: false, required: false
  public get name() {
    return this.getStringAttribute('name');
  }

  // values - computed: true, optional: false, required: false
  public get values() {
    return this.interpolationForAttribute('values') as any;
  }
}

export function dataAwsccQuicksightDashboardParametersIntegerParametersToTerraform(struct?: DataAwsccQuicksightDashboardParametersIntegerParameters): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    name: cdktf.stringToTerraform(struct!.name),
    values: cdktf.listMapper(cdktf.numberToTerraform)(struct!.values),
  }
}

export class DataAwsccQuicksightDashboardParametersStringParameters extends cdktf.ComplexComputedList {

  // name - computed: true, optional: false, required: false
  public get name() {
    return this.getStringAttribute('name');
  }

  // values - computed: true, optional: false, required: false
  public get values() {
    return this.getListAttribute('values');
  }
}

export function dataAwsccQuicksightDashboardParametersStringParametersToTerraform(struct?: DataAwsccQuicksightDashboardParametersStringParameters): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    name: cdktf.stringToTerraform(struct!.name),
    values: cdktf.listMapper(cdktf.stringToTerraform)(struct!.values),
  }
}

export class DataAwsccQuicksightDashboardParameters extends cdktf.ComplexComputedList {

  // date_time_parameters - computed: true, optional: false, required: false
  public get dateTimeParameters() {
    return this.interpolationForAttribute('date_time_parameters') as any;
  }

  // decimal_parameters - computed: true, optional: false, required: false
  public get decimalParameters() {
    return this.interpolationForAttribute('decimal_parameters') as any;
  }

  // integer_parameters - computed: true, optional: false, required: false
  public get integerParameters() {
    return this.interpolationForAttribute('integer_parameters') as any;
  }

  // string_parameters - computed: true, optional: false, required: false
  public get stringParameters() {
    return this.interpolationForAttribute('string_parameters') as any;
  }
}

export function dataAwsccQuicksightDashboardParametersToTerraform(struct?: DataAwsccQuicksightDashboardParameters): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    date_time_parameters: cdktf.listMapper(dataAwsccQuicksightDashboardParametersDateTimeParametersToTerraform)(struct!.dateTimeParameters),
    decimal_parameters: cdktf.listMapper(dataAwsccQuicksightDashboardParametersDecimalParametersToTerraform)(struct!.decimalParameters),
    integer_parameters: cdktf.listMapper(dataAwsccQuicksightDashboardParametersIntegerParametersToTerraform)(struct!.integerParameters),
    string_parameters: cdktf.listMapper(dataAwsccQuicksightDashboardParametersStringParametersToTerraform)(struct!.stringParameters),
  }
}

export class DataAwsccQuicksightDashboardPermissions extends cdktf.ComplexComputedList {

  // actions - computed: true, optional: false, required: false
  public get actions() {
    return this.getListAttribute('actions');
  }

  // principal - computed: true, optional: false, required: false
  public get principal() {
    return this.getStringAttribute('principal');
  }
}

export function dataAwsccQuicksightDashboardPermissionsToTerraform(struct?: DataAwsccQuicksightDashboardPermissions): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    actions: cdktf.listMapper(cdktf.stringToTerraform)(struct!.actions),
    principal: cdktf.stringToTerraform(struct!.principal),
  }
}

export class DataAwsccQuicksightDashboardSourceEntitySourceTemplateDataSetReferences extends cdktf.ComplexComputedList {

  // data_set_arn - computed: true, optional: false, required: false
  public get dataSetArn() {
    return this.getStringAttribute('data_set_arn');
  }

  // data_set_placeholder - computed: true, optional: false, required: false
  public get dataSetPlaceholder() {
    return this.getStringAttribute('data_set_placeholder');
  }
}

export function dataAwsccQuicksightDashboardSourceEntitySourceTemplateDataSetReferencesToTerraform(struct?: DataAwsccQuicksightDashboardSourceEntitySourceTemplateDataSetReferences): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    data_set_arn: cdktf.stringToTerraform(struct!.dataSetArn),
    data_set_placeholder: cdktf.stringToTerraform(struct!.dataSetPlaceholder),
  }
}

export class DataAwsccQuicksightDashboardSourceEntitySourceTemplate extends cdktf.ComplexComputedList {

  // arn - computed: true, optional: false, required: false
  public get arn() {
    return this.getStringAttribute('arn');
  }

  // data_set_references - computed: true, optional: false, required: false
  public get dataSetReferences() {
    return this.interpolationForAttribute('data_set_references') as any;
  }
}

export function dataAwsccQuicksightDashboardSourceEntitySourceTemplateToTerraform(struct?: DataAwsccQuicksightDashboardSourceEntitySourceTemplate): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    arn: cdktf.stringToTerraform(struct!.arn),
    data_set_references: cdktf.listMapper(dataAwsccQuicksightDashboardSourceEntitySourceTemplateDataSetReferencesToTerraform)(struct!.dataSetReferences),
  }
}

export class DataAwsccQuicksightDashboardSourceEntity extends cdktf.ComplexComputedList {

  // source_template - computed: true, optional: false, required: false
  public get sourceTemplate() {
    return this.interpolationForAttribute('source_template') as any;
  }
}

export function dataAwsccQuicksightDashboardSourceEntityToTerraform(struct?: DataAwsccQuicksightDashboardSourceEntity): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    source_template: dataAwsccQuicksightDashboardSourceEntitySourceTemplateToTerraform(struct!.sourceTemplate),
  }
}

export class DataAwsccQuicksightDashboardTags extends cdktf.ComplexComputedList {

  // key - computed: true, optional: false, required: false
  public get key() {
    return this.getStringAttribute('key');
  }

  // value - computed: true, optional: false, required: false
  public get value() {
    return this.getStringAttribute('value');
  }
}

export function dataAwsccQuicksightDashboardTagsToTerraform(struct?: DataAwsccQuicksightDashboardTags): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    key: cdktf.stringToTerraform(struct!.key),
    value: cdktf.stringToTerraform(struct!.value),
  }
}

export class DataAwsccQuicksightDashboardVersionErrors extends cdktf.ComplexComputedList {

  // message - computed: true, optional: false, required: false
  public get message() {
    return this.getStringAttribute('message');
  }

  // type - computed: true, optional: false, required: false
  public get type() {
    return this.getStringAttribute('type');
  }
}

export function dataAwsccQuicksightDashboardVersionErrorsToTerraform(struct?: DataAwsccQuicksightDashboardVersionErrors): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    message: cdktf.stringToTerraform(struct!.message),
    type: cdktf.stringToTerraform(struct!.type),
  }
}

export class DataAwsccQuicksightDashboardVersionSheets extends cdktf.ComplexComputedList {

  // name - computed: true, optional: false, required: false
  public get name() {
    return this.getStringAttribute('name');
  }

  // sheet_id - computed: true, optional: false, required: false
  public get sheetId() {
    return this.getStringAttribute('sheet_id');
  }
}

export function dataAwsccQuicksightDashboardVersionSheetsToTerraform(struct?: DataAwsccQuicksightDashboardVersionSheets): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    name: cdktf.stringToTerraform(struct!.name),
    sheet_id: cdktf.stringToTerraform(struct!.sheetId),
  }
}

export class DataAwsccQuicksightDashboardVersion extends cdktf.ComplexComputedList {

  // arn - computed: true, optional: false, required: false
  public get arn() {
    return this.getStringAttribute('arn');
  }

  // created_time - computed: true, optional: false, required: false
  public get createdTime() {
    return this.getStringAttribute('created_time');
  }

  // data_set_arns - computed: true, optional: false, required: false
  public get dataSetArns() {
    return this.getListAttribute('data_set_arns');
  }

  // description - computed: true, optional: false, required: false
  public get description() {
    return this.getStringAttribute('description');
  }

  // errors - computed: true, optional: false, required: false
  public get errors() {
    return this.interpolationForAttribute('errors') as any;
  }

  // sheets - computed: true, optional: false, required: false
  public get sheets() {
    return this.interpolationForAttribute('sheets') as any;
  }

  // source_entity_arn - computed: true, optional: false, required: false
  public get sourceEntityArn() {
    return this.getStringAttribute('source_entity_arn');
  }

  // status - computed: true, optional: false, required: false
  public get status() {
    return this.getStringAttribute('status');
  }

  // theme_arn - computed: true, optional: false, required: false
  public get themeArn() {
    return this.getStringAttribute('theme_arn');
  }

  // version_number - computed: true, optional: false, required: false
  public get versionNumber() {
    return this.getNumberAttribute('version_number');
  }
}

export function dataAwsccQuicksightDashboardVersionToTerraform(struct?: DataAwsccQuicksightDashboardVersion): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    arn: cdktf.stringToTerraform(struct!.arn),
    created_time: cdktf.stringToTerraform(struct!.createdTime),
    data_set_arns: cdktf.listMapper(cdktf.stringToTerraform)(struct!.dataSetArns),
    description: cdktf.stringToTerraform(struct!.description),
    errors: cdktf.listMapper(dataAwsccQuicksightDashboardVersionErrorsToTerraform)(struct!.errors),
    sheets: cdktf.listMapper(dataAwsccQuicksightDashboardVersionSheetsToTerraform)(struct!.sheets),
    source_entity_arn: cdktf.stringToTerraform(struct!.sourceEntityArn),
    status: cdktf.stringToTerraform(struct!.status),
    theme_arn: cdktf.stringToTerraform(struct!.themeArn),
    version_number: cdktf.numberToTerraform(struct!.versionNumber),
  }
}


/**
* Represents a {@link https://www.terraform.io/docs/providers/awscc/d/quicksight_dashboard.html awscc_quicksight_dashboard}
*/
export class DataAwsccQuicksightDashboard extends cdktf.TerraformDataSource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType: string = "awscc_quicksight_dashboard";

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
  public constructor(scope: Construct, id: string, config: DataAwsccQuicksightDashboardConfig) {
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
  public get arn() {
    return this.getStringAttribute('arn');
  }

  // aws_account_id - computed: true, optional: false, required: false
  public get awsAccountId() {
    return this.getStringAttribute('aws_account_id');
  }

  // created_time - computed: true, optional: false, required: false
  public get createdTime() {
    return this.getStringAttribute('created_time');
  }

  // dashboard_id - computed: true, optional: false, required: false
  public get dashboardId() {
    return this.getStringAttribute('dashboard_id');
  }

  // dashboard_publish_options - computed: true, optional: false, required: false
  public get dashboardPublishOptions() {
    return this.interpolationForAttribute('dashboard_publish_options') as any;
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

  // last_published_time - computed: true, optional: false, required: false
  public get lastPublishedTime() {
    return this.getStringAttribute('last_published_time');
  }

  // last_updated_time - computed: true, optional: false, required: false
  public get lastUpdatedTime() {
    return this.getStringAttribute('last_updated_time');
  }

  // name - computed: true, optional: false, required: false
  public get name() {
    return this.getStringAttribute('name');
  }

  // parameters - computed: true, optional: false, required: false
  public get parameters() {
    return this.interpolationForAttribute('parameters') as any;
  }

  // permissions - computed: true, optional: false, required: false
  public get permissions() {
    return this.interpolationForAttribute('permissions') as any;
  }

  // source_entity - computed: true, optional: false, required: false
  public get sourceEntity() {
    return this.interpolationForAttribute('source_entity') as any;
  }

  // tags - computed: true, optional: false, required: false
  public get tags() {
    return this.interpolationForAttribute('tags') as any;
  }

  // theme_arn - computed: true, optional: false, required: false
  public get themeArn() {
    return this.getStringAttribute('theme_arn');
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
