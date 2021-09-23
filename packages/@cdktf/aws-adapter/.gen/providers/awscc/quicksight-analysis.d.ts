import { Construct } from 'constructs';
import * as cdktf from 'cdktf';
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
export declare function quicksightAnalysisErrorsToTerraform(struct?: QuicksightAnalysisErrors): any;
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
export declare function quicksightAnalysisParametersDateTimeParametersToTerraform(struct?: QuicksightAnalysisParametersDateTimeParameters): any;
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
export declare function quicksightAnalysisParametersDecimalParametersToTerraform(struct?: QuicksightAnalysisParametersDecimalParameters): any;
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
export declare function quicksightAnalysisParametersIntegerParametersToTerraform(struct?: QuicksightAnalysisParametersIntegerParameters): any;
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
export declare function quicksightAnalysisParametersStringParametersToTerraform(struct?: QuicksightAnalysisParametersStringParameters): any;
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
export declare function quicksightAnalysisParametersToTerraform(struct?: QuicksightAnalysisParameters): any;
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
export declare function quicksightAnalysisPermissionsToTerraform(struct?: QuicksightAnalysisPermissions): any;
export declare class QuicksightAnalysisSheets extends cdktf.ComplexComputedList {
    private _name?;
    get name(): string;
    set name(value: string);
    resetName(): void;
    get nameInput(): string | undefined;
    private _sheetId?;
    get sheetId(): string;
    set sheetId(value: string);
    resetSheetId(): void;
    get sheetIdInput(): string | undefined;
}
export declare function quicksightAnalysisSheetsToTerraform(struct?: QuicksightAnalysisSheets): any;
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
export declare function quicksightAnalysisSourceEntitySourceTemplateDataSetReferencesToTerraform(struct?: QuicksightAnalysisSourceEntitySourceTemplateDataSetReferences): any;
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
export declare function quicksightAnalysisSourceEntitySourceTemplateToTerraform(struct?: QuicksightAnalysisSourceEntitySourceTemplate): any;
export interface QuicksightAnalysisSourceEntity {
    /**
    * <p>The source template of an analysis.</p>
    *
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/quicksight_analysis.html#source_template QuicksightAnalysis#source_template}
    */
    readonly sourceTemplate?: QuicksightAnalysisSourceEntitySourceTemplate;
}
export declare function quicksightAnalysisSourceEntityToTerraform(struct?: QuicksightAnalysisSourceEntity): any;
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
export declare function quicksightAnalysisTagsToTerraform(struct?: QuicksightAnalysisTags): any;
/**
* Represents a {@link https://www.terraform.io/docs/providers/awscc/r/quicksight_analysis.html awscc_quicksight_analysis}
*/
export declare class QuicksightAnalysis extends cdktf.TerraformResource {
    static readonly tfResourceType: string;
    /**
    * Create a new {@link https://www.terraform.io/docs/providers/awscc/r/quicksight_analysis.html awscc_quicksight_analysis} Resource
    *
    * @param scope The scope in which to define this construct
    * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
    * @param options QuicksightAnalysisConfig
    */
    constructor(scope: Construct, id: string, config: QuicksightAnalysisConfig);
    private _analysisId;
    get analysisId(): string;
    set analysisId(value: string);
    get analysisIdInput(): string;
    get arn(): string;
    private _awsAccountId;
    get awsAccountId(): string;
    set awsAccountId(value: string);
    get awsAccountIdInput(): string;
    get createdTime(): string;
    get dataSetArns(): string[];
    private _errors?;
    get errors(): QuicksightAnalysisErrors[];
    set errors(value: QuicksightAnalysisErrors[]);
    resetErrors(): void;
    get errorsInput(): QuicksightAnalysisErrors[] | undefined;
    get id(): string;
    get lastUpdatedTime(): string;
    private _name?;
    get name(): string;
    set name(value: string);
    resetName(): void;
    get nameInput(): string | undefined;
    private _parameters?;
    get parameters(): QuicksightAnalysisParameters;
    set parameters(value: QuicksightAnalysisParameters);
    resetParameters(): void;
    get parametersInput(): QuicksightAnalysisParameters | undefined;
    private _permissions?;
    get permissions(): QuicksightAnalysisPermissions[];
    set permissions(value: QuicksightAnalysisPermissions[]);
    resetPermissions(): void;
    get permissionsInput(): QuicksightAnalysisPermissions[] | undefined;
    get sheets(): any;
    private _sourceEntity?;
    get sourceEntity(): QuicksightAnalysisSourceEntity;
    set sourceEntity(value: QuicksightAnalysisSourceEntity);
    resetSourceEntity(): void;
    get sourceEntityInput(): QuicksightAnalysisSourceEntity | undefined;
    get status(): string;
    private _tags?;
    get tags(): QuicksightAnalysisTags[];
    set tags(value: QuicksightAnalysisTags[]);
    resetTags(): void;
    get tagsInput(): QuicksightAnalysisTags[] | undefined;
    private _themeArn?;
    get themeArn(): string;
    set themeArn(value: string);
    resetThemeArn(): void;
    get themeArnInput(): string | undefined;
    protected synthesizeAttributes(): {
        [name: string]: any;
    };
}
