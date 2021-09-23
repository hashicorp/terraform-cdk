import { Construct } from 'constructs';
import * as cdktf from 'cdktf';
export interface QuicksightTemplateConfig extends cdktf.TerraformMetaArguments {
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/quicksight_template.html#aws_account_id QuicksightTemplate#aws_account_id}
    */
    readonly awsAccountId: string;
    /**
    * <p>A display name for the template.</p>
    *
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/quicksight_template.html#name QuicksightTemplate#name}
    */
    readonly name?: string;
    /**
    * <p>A list of resource permissions to be set on the template. </p>
    *
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/quicksight_template.html#permissions QuicksightTemplate#permissions}
    */
    readonly permissions?: QuicksightTemplatePermissions[];
    /**
    * <p>The source entity of the template.</p>
    *
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/quicksight_template.html#source_entity QuicksightTemplate#source_entity}
    */
    readonly sourceEntity?: QuicksightTemplateSourceEntity;
    /**
    * <p>Contains a map of the key-value pairs for the resource tag or tags assigned to the resource.</p>
    *
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/quicksight_template.html#tags QuicksightTemplate#tags}
    */
    readonly tags?: QuicksightTemplateTags[];
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/quicksight_template.html#template_id QuicksightTemplate#template_id}
    */
    readonly templateId: string;
    /**
    * <p>A description of the current template version being created. This API operation creates the
              first version of the template. Every time <code>UpdateTemplate</code> is called, a new
              version is created. Each version of the template maintains a description of the version
              in the <code>VersionDescription</code> field.</p>
    *
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/quicksight_template.html#version_description QuicksightTemplate#version_description}
    */
    readonly versionDescription?: string;
}
export interface QuicksightTemplatePermissions {
    /**
    * <p>The IAM action to grant or revoke permissions on.</p>
    *
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/quicksight_template.html#actions QuicksightTemplate#actions}
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
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/quicksight_template.html#principal QuicksightTemplate#principal}
    */
    readonly principal: string;
}
export declare function quicksightTemplatePermissionsToTerraform(struct?: QuicksightTemplatePermissions): any;
export interface QuicksightTemplateSourceEntitySourceAnalysisDataSetReferences {
    /**
    * <p>Dataset Amazon Resource Name (ARN).</p>
    *
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/quicksight_template.html#data_set_arn QuicksightTemplate#data_set_arn}
    */
    readonly dataSetArn: string;
    /**
    * <p>Dataset placeholder.</p>
    *
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/quicksight_template.html#data_set_placeholder QuicksightTemplate#data_set_placeholder}
    */
    readonly dataSetPlaceholder: string;
}
export declare function quicksightTemplateSourceEntitySourceAnalysisDataSetReferencesToTerraform(struct?: QuicksightTemplateSourceEntitySourceAnalysisDataSetReferences): any;
export interface QuicksightTemplateSourceEntitySourceAnalysis {
    /**
    * <p>The Amazon Resource Name (ARN) of the resource.</p>
    *
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/quicksight_template.html#arn QuicksightTemplate#arn}
    */
    readonly arn: string;
    /**
    * <p>A structure containing information about the dataset references used as placeholders
              in the template.</p>
    *
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/quicksight_template.html#data_set_references QuicksightTemplate#data_set_references}
    */
    readonly dataSetReferences: QuicksightTemplateSourceEntitySourceAnalysisDataSetReferences[];
}
export declare function quicksightTemplateSourceEntitySourceAnalysisToTerraform(struct?: QuicksightTemplateSourceEntitySourceAnalysis): any;
export interface QuicksightTemplateSourceEntitySourceTemplate {
    /**
    * <p>The Amazon Resource Name (ARN) of the resource.</p>
    *
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/quicksight_template.html#arn QuicksightTemplate#arn}
    */
    readonly arn: string;
}
export declare function quicksightTemplateSourceEntitySourceTemplateToTerraform(struct?: QuicksightTemplateSourceEntitySourceTemplate): any;
export interface QuicksightTemplateSourceEntity {
    /**
    * <p>The source analysis of the template.</p>
    *
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/quicksight_template.html#source_analysis QuicksightTemplate#source_analysis}
    */
    readonly sourceAnalysis?: QuicksightTemplateSourceEntitySourceAnalysis;
    /**
    * <p>The source template of the template.</p>
    *
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/quicksight_template.html#source_template QuicksightTemplate#source_template}
    */
    readonly sourceTemplate?: QuicksightTemplateSourceEntitySourceTemplate;
}
export declare function quicksightTemplateSourceEntityToTerraform(struct?: QuicksightTemplateSourceEntity): any;
export interface QuicksightTemplateTags {
    /**
    * <p>Tag key.</p>
    *
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/quicksight_template.html#key QuicksightTemplate#key}
    */
    readonly key: string;
    /**
    * <p>Tag value.</p>
    *
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/quicksight_template.html#value QuicksightTemplate#value}
    */
    readonly value: string;
}
export declare function quicksightTemplateTagsToTerraform(struct?: QuicksightTemplateTags): any;
export interface QuicksightTemplateVersionDataSetConfigurationsColumnGroupSchemaListColumnGroupColumnSchemaList {
    /**
    * <p>The name of the column group's column schema.</p>
    *
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/quicksight_template.html#name QuicksightTemplate#name}
    */
    readonly name?: string;
}
export declare function quicksightTemplateVersionDataSetConfigurationsColumnGroupSchemaListColumnGroupColumnSchemaListToTerraform(struct?: QuicksightTemplateVersionDataSetConfigurationsColumnGroupSchemaListColumnGroupColumnSchemaList): any;
export interface QuicksightTemplateVersionDataSetConfigurationsColumnGroupSchemaList {
    /**
    * <p>A structure containing the list of schemas for column group columns.</p>
    *
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/quicksight_template.html#column_group_column_schema_list QuicksightTemplate#column_group_column_schema_list}
    */
    readonly columnGroupColumnSchemaList?: QuicksightTemplateVersionDataSetConfigurationsColumnGroupSchemaListColumnGroupColumnSchemaList[];
    /**
    * <p>The name of the column group schema.</p>
    *
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/quicksight_template.html#name QuicksightTemplate#name}
    */
    readonly name?: string;
}
export declare function quicksightTemplateVersionDataSetConfigurationsColumnGroupSchemaListToTerraform(struct?: QuicksightTemplateVersionDataSetConfigurationsColumnGroupSchemaList): any;
export interface QuicksightTemplateVersionDataSetConfigurationsDataSetSchemaColumnSchemaList {
    /**
    * <p>The data type of the column schema.</p>
    *
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/quicksight_template.html#data_type QuicksightTemplate#data_type}
    */
    readonly dataType?: string;
    /**
    * <p>The geographic role of the column schema.</p>
    *
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/quicksight_template.html#geographic_role QuicksightTemplate#geographic_role}
    */
    readonly geographicRole?: string;
    /**
    * <p>The name of the column schema.</p>
    *
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/quicksight_template.html#name QuicksightTemplate#name}
    */
    readonly name?: string;
}
export declare function quicksightTemplateVersionDataSetConfigurationsDataSetSchemaColumnSchemaListToTerraform(struct?: QuicksightTemplateVersionDataSetConfigurationsDataSetSchemaColumnSchemaList): any;
export interface QuicksightTemplateVersionDataSetConfigurationsDataSetSchema {
    /**
    * <p>A structure containing the list of column schemas.</p>
    *
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/quicksight_template.html#column_schema_list QuicksightTemplate#column_schema_list}
    */
    readonly columnSchemaList?: QuicksightTemplateVersionDataSetConfigurationsDataSetSchemaColumnSchemaList[];
}
export declare function quicksightTemplateVersionDataSetConfigurationsDataSetSchemaToTerraform(struct?: QuicksightTemplateVersionDataSetConfigurationsDataSetSchema): any;
export interface QuicksightTemplateVersionDataSetConfigurations {
    /**
    * <p>A structure containing the list of column group schemas.</p>
    *
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/quicksight_template.html#column_group_schema_list QuicksightTemplate#column_group_schema_list}
    */
    readonly columnGroupSchemaList?: QuicksightTemplateVersionDataSetConfigurationsColumnGroupSchemaList[];
    /**
    * <p>Dataset schema.</p>
    *
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/quicksight_template.html#data_set_schema QuicksightTemplate#data_set_schema}
    */
    readonly dataSetSchema?: QuicksightTemplateVersionDataSetConfigurationsDataSetSchema;
    /**
    * <p>Placeholder.</p>
    *
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/quicksight_template.html#placeholder QuicksightTemplate#placeholder}
    */
    readonly placeholder?: string;
}
export declare function quicksightTemplateVersionDataSetConfigurationsToTerraform(struct?: QuicksightTemplateVersionDataSetConfigurations): any;
export interface QuicksightTemplateVersionErrors {
    /**
    * <p>Description of the error type.</p>
    *
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/quicksight_template.html#message QuicksightTemplate#message}
    */
    readonly message?: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/quicksight_template.html#type QuicksightTemplate#type}
    */
    readonly type?: string;
}
export declare function quicksightTemplateVersionErrorsToTerraform(struct?: QuicksightTemplateVersionErrors): any;
export interface QuicksightTemplateVersionSheets {
    /**
    * <p>The name of a sheet. This name is displayed on the sheet's tab in the QuickSight
              console.</p>
    *
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/quicksight_template.html#name QuicksightTemplate#name}
    */
    readonly name?: string;
    /**
    * <p>The unique identifier associated with a sheet.</p>
    *
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/quicksight_template.html#sheet_id QuicksightTemplate#sheet_id}
    */
    readonly sheetId?: string;
}
export declare function quicksightTemplateVersionSheetsToTerraform(struct?: QuicksightTemplateVersionSheets): any;
export declare class QuicksightTemplateVersion extends cdktf.ComplexComputedList {
    private _createdTime?;
    get createdTime(): string;
    set createdTime(value: string);
    resetCreatedTime(): void;
    get createdTimeInput(): string | undefined;
    private _dataSetConfigurations?;
    get dataSetConfigurations(): QuicksightTemplateVersionDataSetConfigurations[];
    set dataSetConfigurations(value: QuicksightTemplateVersionDataSetConfigurations[]);
    resetDataSetConfigurations(): void;
    get dataSetConfigurationsInput(): QuicksightTemplateVersionDataSetConfigurations[] | undefined;
    private _description?;
    get description(): string;
    set description(value: string);
    resetDescription(): void;
    get descriptionInput(): string | undefined;
    private _errors?;
    get errors(): QuicksightTemplateVersionErrors[];
    set errors(value: QuicksightTemplateVersionErrors[]);
    resetErrors(): void;
    get errorsInput(): QuicksightTemplateVersionErrors[] | undefined;
    private _sheets?;
    get sheets(): QuicksightTemplateVersionSheets[];
    set sheets(value: QuicksightTemplateVersionSheets[]);
    resetSheets(): void;
    get sheetsInput(): QuicksightTemplateVersionSheets[] | undefined;
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
export declare function quicksightTemplateVersionToTerraform(struct?: QuicksightTemplateVersion): any;
/**
* Represents a {@link https://www.terraform.io/docs/providers/awscc/r/quicksight_template.html awscc_quicksight_template}
*/
export declare class QuicksightTemplate extends cdktf.TerraformResource {
    static readonly tfResourceType: string;
    /**
    * Create a new {@link https://www.terraform.io/docs/providers/awscc/r/quicksight_template.html awscc_quicksight_template} Resource
    *
    * @param scope The scope in which to define this construct
    * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
    * @param options QuicksightTemplateConfig
    */
    constructor(scope: Construct, id: string, config: QuicksightTemplateConfig);
    get arn(): string;
    private _awsAccountId;
    get awsAccountId(): string;
    set awsAccountId(value: string);
    get awsAccountIdInput(): string;
    get createdTime(): string;
    get id(): string;
    get lastUpdatedTime(): string;
    private _name?;
    get name(): string;
    set name(value: string);
    resetName(): void;
    get nameInput(): string | undefined;
    private _permissions?;
    get permissions(): QuicksightTemplatePermissions[];
    set permissions(value: QuicksightTemplatePermissions[]);
    resetPermissions(): void;
    get permissionsInput(): QuicksightTemplatePermissions[] | undefined;
    private _sourceEntity?;
    get sourceEntity(): QuicksightTemplateSourceEntity;
    set sourceEntity(value: QuicksightTemplateSourceEntity);
    resetSourceEntity(): void;
    get sourceEntityInput(): QuicksightTemplateSourceEntity | undefined;
    private _tags?;
    get tags(): QuicksightTemplateTags[];
    set tags(value: QuicksightTemplateTags[]);
    resetTags(): void;
    get tagsInput(): QuicksightTemplateTags[] | undefined;
    private _templateId;
    get templateId(): string;
    set templateId(value: string);
    get templateIdInput(): string;
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
