// https://www.terraform.io/docs/providers/awscc/d/quicksight_analysis.html
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DataAwsccQuicksightAnalysisConfig extends cdktf.TerraformMetaArguments {
  /**
  * Uniquely identifies the resource.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/d/quicksight_analysis.html#id DataAwsccQuicksightAnalysis#id}
  */
  readonly id: string;
}
export class DataAwsccQuicksightAnalysisErrors extends cdktf.ComplexComputedList {

  // message - computed: true, optional: false, required: false
  public get message() {
    return this.getStringAttribute('message');
  }

  // type - computed: true, optional: false, required: false
  public get type() {
    return this.getStringAttribute('type');
  }
}

export function dataAwsccQuicksightAnalysisErrorsToTerraform(struct?: DataAwsccQuicksightAnalysisErrors): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    message: cdktf.stringToTerraform(struct!.message),
    type: cdktf.stringToTerraform(struct!.type),
  }
}

export class DataAwsccQuicksightAnalysisParametersDateTimeParameters extends cdktf.ComplexComputedList {

  // name - computed: true, optional: false, required: false
  public get name() {
    return this.getStringAttribute('name');
  }

  // values - computed: true, optional: false, required: false
  public get values() {
    return this.getListAttribute('values');
  }
}

export function dataAwsccQuicksightAnalysisParametersDateTimeParametersToTerraform(struct?: DataAwsccQuicksightAnalysisParametersDateTimeParameters): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    name: cdktf.stringToTerraform(struct!.name),
    values: cdktf.listMapper(cdktf.stringToTerraform)(struct!.values),
  }
}

export class DataAwsccQuicksightAnalysisParametersDecimalParameters extends cdktf.ComplexComputedList {

  // name - computed: true, optional: false, required: false
  public get name() {
    return this.getStringAttribute('name');
  }

  // values - computed: true, optional: false, required: false
  public get values() {
    return this.interpolationForAttribute('values') as any;
  }
}

export function dataAwsccQuicksightAnalysisParametersDecimalParametersToTerraform(struct?: DataAwsccQuicksightAnalysisParametersDecimalParameters): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    name: cdktf.stringToTerraform(struct!.name),
    values: cdktf.listMapper(cdktf.numberToTerraform)(struct!.values),
  }
}

export class DataAwsccQuicksightAnalysisParametersIntegerParameters extends cdktf.ComplexComputedList {

  // name - computed: true, optional: false, required: false
  public get name() {
    return this.getStringAttribute('name');
  }

  // values - computed: true, optional: false, required: false
  public get values() {
    return this.interpolationForAttribute('values') as any;
  }
}

export function dataAwsccQuicksightAnalysisParametersIntegerParametersToTerraform(struct?: DataAwsccQuicksightAnalysisParametersIntegerParameters): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    name: cdktf.stringToTerraform(struct!.name),
    values: cdktf.listMapper(cdktf.numberToTerraform)(struct!.values),
  }
}

export class DataAwsccQuicksightAnalysisParametersStringParameters extends cdktf.ComplexComputedList {

  // name - computed: true, optional: false, required: false
  public get name() {
    return this.getStringAttribute('name');
  }

  // values - computed: true, optional: false, required: false
  public get values() {
    return this.getListAttribute('values');
  }
}

export function dataAwsccQuicksightAnalysisParametersStringParametersToTerraform(struct?: DataAwsccQuicksightAnalysisParametersStringParameters): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    name: cdktf.stringToTerraform(struct!.name),
    values: cdktf.listMapper(cdktf.stringToTerraform)(struct!.values),
  }
}

export class DataAwsccQuicksightAnalysisParameters extends cdktf.ComplexComputedList {

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

export function dataAwsccQuicksightAnalysisParametersToTerraform(struct?: DataAwsccQuicksightAnalysisParameters): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    date_time_parameters: cdktf.listMapper(dataAwsccQuicksightAnalysisParametersDateTimeParametersToTerraform)(struct!.dateTimeParameters),
    decimal_parameters: cdktf.listMapper(dataAwsccQuicksightAnalysisParametersDecimalParametersToTerraform)(struct!.decimalParameters),
    integer_parameters: cdktf.listMapper(dataAwsccQuicksightAnalysisParametersIntegerParametersToTerraform)(struct!.integerParameters),
    string_parameters: cdktf.listMapper(dataAwsccQuicksightAnalysisParametersStringParametersToTerraform)(struct!.stringParameters),
  }
}

export class DataAwsccQuicksightAnalysisPermissions extends cdktf.ComplexComputedList {

  // actions - computed: true, optional: false, required: false
  public get actions() {
    return this.getListAttribute('actions');
  }

  // principal - computed: true, optional: false, required: false
  public get principal() {
    return this.getStringAttribute('principal');
  }
}

export function dataAwsccQuicksightAnalysisPermissionsToTerraform(struct?: DataAwsccQuicksightAnalysisPermissions): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    actions: cdktf.listMapper(cdktf.stringToTerraform)(struct!.actions),
    principal: cdktf.stringToTerraform(struct!.principal),
  }
}

export class DataAwsccQuicksightAnalysisSheets extends cdktf.ComplexComputedList {

  // name - computed: true, optional: false, required: false
  public get name() {
    return this.getStringAttribute('name');
  }

  // sheet_id - computed: true, optional: false, required: false
  public get sheetId() {
    return this.getStringAttribute('sheet_id');
  }
}

export function dataAwsccQuicksightAnalysisSheetsToTerraform(struct?: DataAwsccQuicksightAnalysisSheets): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    name: cdktf.stringToTerraform(struct!.name),
    sheet_id: cdktf.stringToTerraform(struct!.sheetId),
  }
}

export class DataAwsccQuicksightAnalysisSourceEntitySourceTemplateDataSetReferences extends cdktf.ComplexComputedList {

  // data_set_arn - computed: true, optional: false, required: false
  public get dataSetArn() {
    return this.getStringAttribute('data_set_arn');
  }

  // data_set_placeholder - computed: true, optional: false, required: false
  public get dataSetPlaceholder() {
    return this.getStringAttribute('data_set_placeholder');
  }
}

export function dataAwsccQuicksightAnalysisSourceEntitySourceTemplateDataSetReferencesToTerraform(struct?: DataAwsccQuicksightAnalysisSourceEntitySourceTemplateDataSetReferences): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    data_set_arn: cdktf.stringToTerraform(struct!.dataSetArn),
    data_set_placeholder: cdktf.stringToTerraform(struct!.dataSetPlaceholder),
  }
}

export class DataAwsccQuicksightAnalysisSourceEntitySourceTemplate extends cdktf.ComplexComputedList {

  // arn - computed: true, optional: false, required: false
  public get arn() {
    return this.getStringAttribute('arn');
  }

  // data_set_references - computed: true, optional: false, required: false
  public get dataSetReferences() {
    return this.interpolationForAttribute('data_set_references') as any;
  }
}

export function dataAwsccQuicksightAnalysisSourceEntitySourceTemplateToTerraform(struct?: DataAwsccQuicksightAnalysisSourceEntitySourceTemplate): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    arn: cdktf.stringToTerraform(struct!.arn),
    data_set_references: cdktf.listMapper(dataAwsccQuicksightAnalysisSourceEntitySourceTemplateDataSetReferencesToTerraform)(struct!.dataSetReferences),
  }
}

export class DataAwsccQuicksightAnalysisSourceEntity extends cdktf.ComplexComputedList {

  // source_template - computed: true, optional: false, required: false
  public get sourceTemplate() {
    return this.interpolationForAttribute('source_template') as any;
  }
}

export function dataAwsccQuicksightAnalysisSourceEntityToTerraform(struct?: DataAwsccQuicksightAnalysisSourceEntity): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    source_template: dataAwsccQuicksightAnalysisSourceEntitySourceTemplateToTerraform(struct!.sourceTemplate),
  }
}

export class DataAwsccQuicksightAnalysisTags extends cdktf.ComplexComputedList {

  // key - computed: true, optional: false, required: false
  public get key() {
    return this.getStringAttribute('key');
  }

  // value - computed: true, optional: false, required: false
  public get value() {
    return this.getStringAttribute('value');
  }
}

export function dataAwsccQuicksightAnalysisTagsToTerraform(struct?: DataAwsccQuicksightAnalysisTags): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    key: cdktf.stringToTerraform(struct!.key),
    value: cdktf.stringToTerraform(struct!.value),
  }
}


/**
* Represents a {@link https://www.terraform.io/docs/providers/awscc/d/quicksight_analysis.html awscc_quicksight_analysis}
*/
export class DataAwsccQuicksightAnalysis extends cdktf.TerraformDataSource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType: string = "awscc_quicksight_analysis";

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
  public constructor(scope: Construct, id: string, config: DataAwsccQuicksightAnalysisConfig) {
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
  public get analysisId() {
    return this.getStringAttribute('analysis_id');
  }

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

  // data_set_arns - computed: true, optional: false, required: false
  public get dataSetArns() {
    return this.getListAttribute('data_set_arns');
  }

  // errors - computed: true, optional: false, required: false
  public get errors() {
    return this.interpolationForAttribute('errors') as any;
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

  // parameters - computed: true, optional: false, required: false
  public get parameters() {
    return this.interpolationForAttribute('parameters') as any;
  }

  // permissions - computed: true, optional: false, required: false
  public get permissions() {
    return this.interpolationForAttribute('permissions') as any;
  }

  // sheets - computed: true, optional: false, required: false
  public get sheets() {
    return this.interpolationForAttribute('sheets') as any;
  }

  // source_entity - computed: true, optional: false, required: false
  public get sourceEntity() {
    return this.interpolationForAttribute('source_entity') as any;
  }

  // status - computed: true, optional: false, required: false
  public get status() {
    return this.getStringAttribute('status');
  }

  // tags - computed: true, optional: false, required: false
  public get tags() {
    return this.interpolationForAttribute('tags') as any;
  }

  // theme_arn - computed: true, optional: false, required: false
  public get themeArn() {
    return this.getStringAttribute('theme_arn');
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
