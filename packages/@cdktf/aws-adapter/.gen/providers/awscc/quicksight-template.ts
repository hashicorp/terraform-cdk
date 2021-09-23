// https://www.terraform.io/docs/providers/awscc/r/quicksight_template.html
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

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

export function quicksightTemplatePermissionsToTerraform(struct?: QuicksightTemplatePermissions): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    actions: cdktf.listMapper(cdktf.stringToTerraform)(struct!.actions),
    principal: cdktf.stringToTerraform(struct!.principal),
  }
}

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

export function quicksightTemplateSourceEntitySourceAnalysisDataSetReferencesToTerraform(struct?: QuicksightTemplateSourceEntitySourceAnalysisDataSetReferences): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    data_set_arn: cdktf.stringToTerraform(struct!.dataSetArn),
    data_set_placeholder: cdktf.stringToTerraform(struct!.dataSetPlaceholder),
  }
}

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

export function quicksightTemplateSourceEntitySourceAnalysisToTerraform(struct?: QuicksightTemplateSourceEntitySourceAnalysis): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    arn: cdktf.stringToTerraform(struct!.arn),
    data_set_references: cdktf.listMapper(quicksightTemplateSourceEntitySourceAnalysisDataSetReferencesToTerraform)(struct!.dataSetReferences),
  }
}

export interface QuicksightTemplateSourceEntitySourceTemplate {
  /**
  * <p>The Amazon Resource Name (ARN) of the resource.</p>
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/quicksight_template.html#arn QuicksightTemplate#arn}
  */
  readonly arn: string;
}

export function quicksightTemplateSourceEntitySourceTemplateToTerraform(struct?: QuicksightTemplateSourceEntitySourceTemplate): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    arn: cdktf.stringToTerraform(struct!.arn),
  }
}

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

export function quicksightTemplateSourceEntityToTerraform(struct?: QuicksightTemplateSourceEntity): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    source_analysis: quicksightTemplateSourceEntitySourceAnalysisToTerraform(struct!.sourceAnalysis),
    source_template: quicksightTemplateSourceEntitySourceTemplateToTerraform(struct!.sourceTemplate),
  }
}

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

export function quicksightTemplateTagsToTerraform(struct?: QuicksightTemplateTags): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    key: cdktf.stringToTerraform(struct!.key),
    value: cdktf.stringToTerraform(struct!.value),
  }
}

export interface QuicksightTemplateVersionDataSetConfigurationsColumnGroupSchemaListColumnGroupColumnSchemaList {
  /**
  * <p>The name of the column group's column schema.</p>
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/quicksight_template.html#name QuicksightTemplate#name}
  */
  readonly name?: string;
}

export function quicksightTemplateVersionDataSetConfigurationsColumnGroupSchemaListColumnGroupColumnSchemaListToTerraform(struct?: QuicksightTemplateVersionDataSetConfigurationsColumnGroupSchemaListColumnGroupColumnSchemaList): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    name: cdktf.stringToTerraform(struct!.name),
  }
}

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

export function quicksightTemplateVersionDataSetConfigurationsColumnGroupSchemaListToTerraform(struct?: QuicksightTemplateVersionDataSetConfigurationsColumnGroupSchemaList): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    column_group_column_schema_list: cdktf.listMapper(quicksightTemplateVersionDataSetConfigurationsColumnGroupSchemaListColumnGroupColumnSchemaListToTerraform)(struct!.columnGroupColumnSchemaList),
    name: cdktf.stringToTerraform(struct!.name),
  }
}

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

export function quicksightTemplateVersionDataSetConfigurationsDataSetSchemaColumnSchemaListToTerraform(struct?: QuicksightTemplateVersionDataSetConfigurationsDataSetSchemaColumnSchemaList): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    data_type: cdktf.stringToTerraform(struct!.dataType),
    geographic_role: cdktf.stringToTerraform(struct!.geographicRole),
    name: cdktf.stringToTerraform(struct!.name),
  }
}

export interface QuicksightTemplateVersionDataSetConfigurationsDataSetSchema {
  /**
  * <p>A structure containing the list of column schemas.</p>
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/quicksight_template.html#column_schema_list QuicksightTemplate#column_schema_list}
  */
  readonly columnSchemaList?: QuicksightTemplateVersionDataSetConfigurationsDataSetSchemaColumnSchemaList[];
}

export function quicksightTemplateVersionDataSetConfigurationsDataSetSchemaToTerraform(struct?: QuicksightTemplateVersionDataSetConfigurationsDataSetSchema): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    column_schema_list: cdktf.listMapper(quicksightTemplateVersionDataSetConfigurationsDataSetSchemaColumnSchemaListToTerraform)(struct!.columnSchemaList),
  }
}

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

export function quicksightTemplateVersionDataSetConfigurationsToTerraform(struct?: QuicksightTemplateVersionDataSetConfigurations): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    column_group_schema_list: cdktf.listMapper(quicksightTemplateVersionDataSetConfigurationsColumnGroupSchemaListToTerraform)(struct!.columnGroupSchemaList),
    data_set_schema: quicksightTemplateVersionDataSetConfigurationsDataSetSchemaToTerraform(struct!.dataSetSchema),
    placeholder: cdktf.stringToTerraform(struct!.placeholder),
  }
}

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

export function quicksightTemplateVersionErrorsToTerraform(struct?: QuicksightTemplateVersionErrors): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    message: cdktf.stringToTerraform(struct!.message),
    type: cdktf.stringToTerraform(struct!.type),
  }
}

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

export function quicksightTemplateVersionSheetsToTerraform(struct?: QuicksightTemplateVersionSheets): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    name: cdktf.stringToTerraform(struct!.name),
    sheet_id: cdktf.stringToTerraform(struct!.sheetId),
  }
}

export class QuicksightTemplateVersion extends cdktf.ComplexComputedList {

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

  // data_set_configurations - computed: true, optional: true, required: false
  private _dataSetConfigurations?: QuicksightTemplateVersionDataSetConfigurations[];
  public get dataSetConfigurations() {
    return this.interpolationForAttribute('data_set_configurations') as any;
  }
  public set dataSetConfigurations(value: QuicksightTemplateVersionDataSetConfigurations[]) {
    this._dataSetConfigurations = value;
  }
  public resetDataSetConfigurations() {
    this._dataSetConfigurations = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dataSetConfigurationsInput() {
    return this._dataSetConfigurations
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
  private _errors?: QuicksightTemplateVersionErrors[];
  public get errors() {
    return this.interpolationForAttribute('errors') as any;
  }
  public set errors(value: QuicksightTemplateVersionErrors[]) {
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
  private _sheets?: QuicksightTemplateVersionSheets[];
  public get sheets() {
    return this.interpolationForAttribute('sheets') as any;
  }
  public set sheets(value: QuicksightTemplateVersionSheets[]) {
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

export function quicksightTemplateVersionToTerraform(struct?: QuicksightTemplateVersion): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    created_time: cdktf.stringToTerraform(struct!.createdTime),
    data_set_configurations: cdktf.listMapper(quicksightTemplateVersionDataSetConfigurationsToTerraform)(struct!.dataSetConfigurations),
    description: cdktf.stringToTerraform(struct!.description),
    errors: cdktf.listMapper(quicksightTemplateVersionErrorsToTerraform)(struct!.errors),
    sheets: cdktf.listMapper(quicksightTemplateVersionSheetsToTerraform)(struct!.sheets),
    source_entity_arn: cdktf.stringToTerraform(struct!.sourceEntityArn),
    status: cdktf.stringToTerraform(struct!.status),
    theme_arn: cdktf.stringToTerraform(struct!.themeArn),
    version_number: cdktf.numberToTerraform(struct!.versionNumber),
  }
}


/**
* Represents a {@link https://www.terraform.io/docs/providers/awscc/r/quicksight_template.html awscc_quicksight_template}
*/
export class QuicksightTemplate extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType: string = "awscc_quicksight_template";

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://www.terraform.io/docs/providers/awscc/r/quicksight_template.html awscc_quicksight_template} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options QuicksightTemplateConfig
  */
  public constructor(scope: Construct, id: string, config: QuicksightTemplateConfig) {
    super(scope, id, {
      terraformResourceType: 'awscc_quicksight_template',
      terraformGeneratorMetadata: {
        providerName: 'awscc'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle
    });
    this._awsAccountId = config.awsAccountId;
    this._name = config.name;
    this._permissions = config.permissions;
    this._sourceEntity = config.sourceEntity;
    this._tags = config.tags;
    this._templateId = config.templateId;
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
  private _permissions?: QuicksightTemplatePermissions[];
  public get permissions() {
    return this.interpolationForAttribute('permissions') as any;
  }
  public set permissions(value: QuicksightTemplatePermissions[] ) {
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
  private _sourceEntity?: QuicksightTemplateSourceEntity;
  public get sourceEntity() {
    return this.interpolationForAttribute('source_entity') as any;
  }
  public set sourceEntity(value: QuicksightTemplateSourceEntity ) {
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
  private _tags?: QuicksightTemplateTags[];
  public get tags() {
    return this.interpolationForAttribute('tags') as any;
  }
  public set tags(value: QuicksightTemplateTags[] ) {
    this._tags = value;
  }
  public resetTags() {
    this._tags = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tagsInput() {
    return this._tags
  }

  // template_id - computed: false, optional: false, required: true
  private _templateId: string;
  public get templateId() {
    return this.getStringAttribute('template_id');
  }
  public set templateId(value: string) {
    this._templateId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get templateIdInput() {
    return this._templateId
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
      name: cdktf.stringToTerraform(this._name),
      permissions: cdktf.listMapper(quicksightTemplatePermissionsToTerraform)(this._permissions),
      source_entity: quicksightTemplateSourceEntityToTerraform(this._sourceEntity),
      tags: cdktf.listMapper(quicksightTemplateTagsToTerraform)(this._tags),
      template_id: cdktf.stringToTerraform(this._templateId),
      version_description: cdktf.stringToTerraform(this._versionDescription),
    };
  }
}
