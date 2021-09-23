// https://www.terraform.io/docs/providers/awscc/r/quicksight_analysis.html
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface QuicksightAnalysisConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/quicksight_analysis.html#analysis_id QuicksightAnalysis#analysis_id}
  */
  readonly analysisId: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/quicksight_analysis.html#aws_account_id QuicksightAnalysis#aws_account_id}
  */
  readonly awsAccountId: string;
  /**
  * <p>Errors associated with the analysis.</p>
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/quicksight_analysis.html#errors QuicksightAnalysis#errors}
  */
  readonly errors?: QuicksightAnalysisErrors[];
  /**
  * <p>The descriptive name of the analysis.</p>
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/quicksight_analysis.html#name QuicksightAnalysis#name}
  */
  readonly name?: string;
  /**
  * <p>A list of QuickSight parameters and the list's override values.</p>
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/quicksight_analysis.html#parameters QuicksightAnalysis#parameters}
  */
  readonly parameters?: QuicksightAnalysisParameters;
  /**
  * <p>A structure that describes the principals and the resource-level permissions on an
            analysis. You can use the <code>Permissions</code> structure to grant permissions by
            providing a list of AWS Identity and Access Management (IAM) action information for each
            principal listed by Amazon Resource Name (ARN). </p>

        <p>To specify no permissions, omit <code>Permissions</code>.</p>
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/quicksight_analysis.html#permissions QuicksightAnalysis#permissions}
  */
  readonly permissions?: QuicksightAnalysisPermissions[];
  /**
  * <p>The source entity of an analysis.</p>
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/quicksight_analysis.html#source_entity QuicksightAnalysis#source_entity}
  */
  readonly sourceEntity?: QuicksightAnalysisSourceEntity;
  /**
  * <p>Contains a map of the key-value pairs for the resource tag or tags assigned to the
            analysis.</p>
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/quicksight_analysis.html#tags QuicksightAnalysis#tags}
  */
  readonly tags?: QuicksightAnalysisTags[];
  /**
  * <p>The ARN of the theme of the analysis.</p>
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/quicksight_analysis.html#theme_arn QuicksightAnalysis#theme_arn}
  */
  readonly themeArn?: string;
}
export interface QuicksightAnalysisErrors {
  /**
  * <p>The message associated with the analysis error.</p>
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/quicksight_analysis.html#message QuicksightAnalysis#message}
  */
  readonly message?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/quicksight_analysis.html#type QuicksightAnalysis#type}
  */
  readonly type?: string;
}

export function quicksightAnalysisErrorsToTerraform(struct?: QuicksightAnalysisErrors): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    message: cdktf.stringToTerraform(struct!.message),
    type: cdktf.stringToTerraform(struct!.type),
  }
}

export interface QuicksightAnalysisParametersDateTimeParameters {
  /**
  * <p>A display name for the date-time parameter.</p>
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/quicksight_analysis.html#name QuicksightAnalysis#name}
  */
  readonly name: string;
  /**
  * <p>The values for the date-time parameter.</p>
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/quicksight_analysis.html#values QuicksightAnalysis#values}
  */
  readonly values: string[];
}

export function quicksightAnalysisParametersDateTimeParametersToTerraform(struct?: QuicksightAnalysisParametersDateTimeParameters): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    name: cdktf.stringToTerraform(struct!.name),
    values: cdktf.listMapper(cdktf.stringToTerraform)(struct!.values),
  }
}

export interface QuicksightAnalysisParametersDecimalParameters {
  /**
  * <p>A display name for the decimal parameter.</p>
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/quicksight_analysis.html#name QuicksightAnalysis#name}
  */
  readonly name: string;
  /**
  * <p>The values for the decimal parameter.</p>
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/quicksight_analysis.html#values QuicksightAnalysis#values}
  */
  readonly values: number[];
}

export function quicksightAnalysisParametersDecimalParametersToTerraform(struct?: QuicksightAnalysisParametersDecimalParameters): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    name: cdktf.stringToTerraform(struct!.name),
    values: cdktf.listMapper(cdktf.numberToTerraform)(struct!.values),
  }
}

export interface QuicksightAnalysisParametersIntegerParameters {
  /**
  * <p>The name of the integer parameter.</p>
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/quicksight_analysis.html#name QuicksightAnalysis#name}
  */
  readonly name: string;
  /**
  * <p>The values for the integer parameter.</p>
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/quicksight_analysis.html#values QuicksightAnalysis#values}
  */
  readonly values: number[];
}

export function quicksightAnalysisParametersIntegerParametersToTerraform(struct?: QuicksightAnalysisParametersIntegerParameters): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    name: cdktf.stringToTerraform(struct!.name),
    values: cdktf.listMapper(cdktf.numberToTerraform)(struct!.values),
  }
}

export interface QuicksightAnalysisParametersStringParameters {
  /**
  * <p>A display name for a string parameter.</p>
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/quicksight_analysis.html#name QuicksightAnalysis#name}
  */
  readonly name: string;
  /**
  * <p>The values of a string parameter.</p>
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/quicksight_analysis.html#values QuicksightAnalysis#values}
  */
  readonly values: string[];
}

export function quicksightAnalysisParametersStringParametersToTerraform(struct?: QuicksightAnalysisParametersStringParameters): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    name: cdktf.stringToTerraform(struct!.name),
    values: cdktf.listMapper(cdktf.stringToTerraform)(struct!.values),
  }
}

export interface QuicksightAnalysisParameters {
  /**
  * <p>Date-time parameters.</p>
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/quicksight_analysis.html#date_time_parameters QuicksightAnalysis#date_time_parameters}
  */
  readonly dateTimeParameters?: QuicksightAnalysisParametersDateTimeParameters[];
  /**
  * <p>Decimal parameters.</p>
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/quicksight_analysis.html#decimal_parameters QuicksightAnalysis#decimal_parameters}
  */
  readonly decimalParameters?: QuicksightAnalysisParametersDecimalParameters[];
  /**
  * <p>Integer parameters.</p>
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/quicksight_analysis.html#integer_parameters QuicksightAnalysis#integer_parameters}
  */
  readonly integerParameters?: QuicksightAnalysisParametersIntegerParameters[];
  /**
  * <p>String parameters.</p>
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/quicksight_analysis.html#string_parameters QuicksightAnalysis#string_parameters}
  */
  readonly stringParameters?: QuicksightAnalysisParametersStringParameters[];
}

export function quicksightAnalysisParametersToTerraform(struct?: QuicksightAnalysisParameters): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    date_time_parameters: cdktf.listMapper(quicksightAnalysisParametersDateTimeParametersToTerraform)(struct!.dateTimeParameters),
    decimal_parameters: cdktf.listMapper(quicksightAnalysisParametersDecimalParametersToTerraform)(struct!.decimalParameters),
    integer_parameters: cdktf.listMapper(quicksightAnalysisParametersIntegerParametersToTerraform)(struct!.integerParameters),
    string_parameters: cdktf.listMapper(quicksightAnalysisParametersStringParametersToTerraform)(struct!.stringParameters),
  }
}

export interface QuicksightAnalysisPermissions {
  /**
  * <p>The IAM action to grant or revoke permissions on.</p>
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/quicksight_analysis.html#actions QuicksightAnalysis#actions}
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
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/quicksight_analysis.html#principal QuicksightAnalysis#principal}
  */
  readonly principal: string;
}

export function quicksightAnalysisPermissionsToTerraform(struct?: QuicksightAnalysisPermissions): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    actions: cdktf.listMapper(cdktf.stringToTerraform)(struct!.actions),
    principal: cdktf.stringToTerraform(struct!.principal),
  }
}

export class QuicksightAnalysisSheets extends cdktf.ComplexComputedList {

  // name - computed: true, optional: true, required: false
  private _name?: string;
  public get name() {
    return this.getStringAttribute('name');
  }
  public set name(value: string) {
    this._name = value;
  }
  public resetName() {
    this._name = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get nameInput() {
    return this._name
  }

  // sheet_id - computed: true, optional: true, required: false
  private _sheetId?: string;
  public get sheetId() {
    return this.getStringAttribute('sheet_id');
  }
  public set sheetId(value: string) {
    this._sheetId = value;
  }
  public resetSheetId() {
    this._sheetId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sheetIdInput() {
    return this._sheetId
  }
}

export function quicksightAnalysisSheetsToTerraform(struct?: QuicksightAnalysisSheets): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    name: cdktf.stringToTerraform(struct!.name),
    sheet_id: cdktf.stringToTerraform(struct!.sheetId),
  }
}

export interface QuicksightAnalysisSourceEntitySourceTemplateDataSetReferences {
  /**
  * <p>Dataset Amazon Resource Name (ARN).</p>
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/quicksight_analysis.html#data_set_arn QuicksightAnalysis#data_set_arn}
  */
  readonly dataSetArn: string;
  /**
  * <p>Dataset placeholder.</p>
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/quicksight_analysis.html#data_set_placeholder QuicksightAnalysis#data_set_placeholder}
  */
  readonly dataSetPlaceholder: string;
}

export function quicksightAnalysisSourceEntitySourceTemplateDataSetReferencesToTerraform(struct?: QuicksightAnalysisSourceEntitySourceTemplateDataSetReferences): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    data_set_arn: cdktf.stringToTerraform(struct!.dataSetArn),
    data_set_placeholder: cdktf.stringToTerraform(struct!.dataSetPlaceholder),
  }
}

export interface QuicksightAnalysisSourceEntitySourceTemplate {
  /**
  * <p>The Amazon Resource Name (ARN) of the source template of an analysis.</p>
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/quicksight_analysis.html#arn QuicksightAnalysis#arn}
  */
  readonly arn: string;
  /**
  * <p>The dataset references of the source template of an analysis.</p>
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/quicksight_analysis.html#data_set_references QuicksightAnalysis#data_set_references}
  */
  readonly dataSetReferences: QuicksightAnalysisSourceEntitySourceTemplateDataSetReferences[];
}

export function quicksightAnalysisSourceEntitySourceTemplateToTerraform(struct?: QuicksightAnalysisSourceEntitySourceTemplate): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    arn: cdktf.stringToTerraform(struct!.arn),
    data_set_references: cdktf.listMapper(quicksightAnalysisSourceEntitySourceTemplateDataSetReferencesToTerraform)(struct!.dataSetReferences),
  }
}

export interface QuicksightAnalysisSourceEntity {
  /**
  * <p>The source template of an analysis.</p>
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/quicksight_analysis.html#source_template QuicksightAnalysis#source_template}
  */
  readonly sourceTemplate?: QuicksightAnalysisSourceEntitySourceTemplate;
}

export function quicksightAnalysisSourceEntityToTerraform(struct?: QuicksightAnalysisSourceEntity): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    source_template: quicksightAnalysisSourceEntitySourceTemplateToTerraform(struct!.sourceTemplate),
  }
}

export interface QuicksightAnalysisTags {
  /**
  * <p>Tag key.</p>
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/quicksight_analysis.html#key QuicksightAnalysis#key}
  */
  readonly key: string;
  /**
  * <p>Tag value.</p>
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/quicksight_analysis.html#value QuicksightAnalysis#value}
  */
  readonly value: string;
}

export function quicksightAnalysisTagsToTerraform(struct?: QuicksightAnalysisTags): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    key: cdktf.stringToTerraform(struct!.key),
    value: cdktf.stringToTerraform(struct!.value),
  }
}


/**
* Represents a {@link https://www.terraform.io/docs/providers/awscc/r/quicksight_analysis.html awscc_quicksight_analysis}
*/
export class QuicksightAnalysis extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType: string = "awscc_quicksight_analysis";

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://www.terraform.io/docs/providers/awscc/r/quicksight_analysis.html awscc_quicksight_analysis} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options QuicksightAnalysisConfig
  */
  public constructor(scope: Construct, id: string, config: QuicksightAnalysisConfig) {
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
    this._analysisId = config.analysisId;
    this._awsAccountId = config.awsAccountId;
    this._errors = config.errors;
    this._name = config.name;
    this._parameters = config.parameters;
    this._permissions = config.permissions;
    this._sourceEntity = config.sourceEntity;
    this._tags = config.tags;
    this._themeArn = config.themeArn;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // analysis_id - computed: false, optional: false, required: true
  private _analysisId: string;
  public get analysisId() {
    return this.getStringAttribute('analysis_id');
  }
  public set analysisId(value: string) {
    this._analysisId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get analysisIdInput() {
    return this._analysisId
  }

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

  // data_set_arns - computed: true, optional: false, required: false
  public get dataSetArns() {
    return this.getListAttribute('data_set_arns');
  }

  // errors - computed: false, optional: true, required: false
  private _errors?: QuicksightAnalysisErrors[];
  public get errors() {
    return this.interpolationForAttribute('errors') as any;
  }
  public set errors(value: QuicksightAnalysisErrors[] ) {
    this._errors = value;
  }
  public resetErrors() {
    this._errors = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get errorsInput() {
    return this._errors
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

  // parameters - computed: false, optional: true, required: false
  private _parameters?: QuicksightAnalysisParameters;
  public get parameters() {
    return this.interpolationForAttribute('parameters') as any;
  }
  public set parameters(value: QuicksightAnalysisParameters ) {
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
  private _permissions?: QuicksightAnalysisPermissions[];
  public get permissions() {
    return this.interpolationForAttribute('permissions') as any;
  }
  public set permissions(value: QuicksightAnalysisPermissions[] ) {
    this._permissions = value;
  }
  public resetPermissions() {
    this._permissions = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get permissionsInput() {
    return this._permissions
  }

  // sheets - computed: true, optional: false, required: false
  public get sheets() {
    return this.interpolationForAttribute('sheets') as any;
  }

  // source_entity - computed: false, optional: true, required: false
  private _sourceEntity?: QuicksightAnalysisSourceEntity;
  public get sourceEntity() {
    return this.interpolationForAttribute('source_entity') as any;
  }
  public set sourceEntity(value: QuicksightAnalysisSourceEntity ) {
    this._sourceEntity = value;
  }
  public resetSourceEntity() {
    this._sourceEntity = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sourceEntityInput() {
    return this._sourceEntity
  }

  // status - computed: true, optional: false, required: false
  public get status() {
    return this.getStringAttribute('status');
  }

  // tags - computed: false, optional: true, required: false
  private _tags?: QuicksightAnalysisTags[];
  public get tags() {
    return this.interpolationForAttribute('tags') as any;
  }
  public set tags(value: QuicksightAnalysisTags[] ) {
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

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      analysis_id: cdktf.stringToTerraform(this._analysisId),
      aws_account_id: cdktf.stringToTerraform(this._awsAccountId),
      errors: cdktf.listMapper(quicksightAnalysisErrorsToTerraform)(this._errors),
      name: cdktf.stringToTerraform(this._name),
      parameters: quicksightAnalysisParametersToTerraform(this._parameters),
      permissions: cdktf.listMapper(quicksightAnalysisPermissionsToTerraform)(this._permissions),
      source_entity: quicksightAnalysisSourceEntityToTerraform(this._sourceEntity),
      tags: cdktf.listMapper(quicksightAnalysisTagsToTerraform)(this._tags),
      theme_arn: cdktf.stringToTerraform(this._themeArn),
    };
  }
}
