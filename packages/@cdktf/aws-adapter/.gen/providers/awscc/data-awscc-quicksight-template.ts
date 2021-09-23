// https://www.terraform.io/docs/providers/awscc/d/quicksight_template.html
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DataAwsccQuicksightTemplateConfig extends cdktf.TerraformMetaArguments {
  /**
  * Uniquely identifies the resource.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/d/quicksight_template.html#id DataAwsccQuicksightTemplate#id}
  */
  readonly id: string;
}
export class DataAwsccQuicksightTemplatePermissions extends cdktf.ComplexComputedList {

  // actions - computed: true, optional: false, required: false
  public get actions() {
    return this.getListAttribute('actions');
  }

  // principal - computed: true, optional: false, required: false
  public get principal() {
    return this.getStringAttribute('principal');
  }
}

export function dataAwsccQuicksightTemplatePermissionsToTerraform(struct?: DataAwsccQuicksightTemplatePermissions): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    actions: cdktf.listMapper(cdktf.stringToTerraform)(struct!.actions),
    principal: cdktf.stringToTerraform(struct!.principal),
  }
}

export class DataAwsccQuicksightTemplateSourceEntitySourceAnalysisDataSetReferences extends cdktf.ComplexComputedList {

  // data_set_arn - computed: true, optional: false, required: false
  public get dataSetArn() {
    return this.getStringAttribute('data_set_arn');
  }

  // data_set_placeholder - computed: true, optional: false, required: false
  public get dataSetPlaceholder() {
    return this.getStringAttribute('data_set_placeholder');
  }
}

export function dataAwsccQuicksightTemplateSourceEntitySourceAnalysisDataSetReferencesToTerraform(struct?: DataAwsccQuicksightTemplateSourceEntitySourceAnalysisDataSetReferences): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    data_set_arn: cdktf.stringToTerraform(struct!.dataSetArn),
    data_set_placeholder: cdktf.stringToTerraform(struct!.dataSetPlaceholder),
  }
}

export class DataAwsccQuicksightTemplateSourceEntitySourceAnalysis extends cdktf.ComplexComputedList {

  // arn - computed: true, optional: false, required: false
  public get arn() {
    return this.getStringAttribute('arn');
  }

  // data_set_references - computed: true, optional: false, required: false
  public get dataSetReferences() {
    return this.interpolationForAttribute('data_set_references') as any;
  }
}

export function dataAwsccQuicksightTemplateSourceEntitySourceAnalysisToTerraform(struct?: DataAwsccQuicksightTemplateSourceEntitySourceAnalysis): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    arn: cdktf.stringToTerraform(struct!.arn),
    data_set_references: cdktf.listMapper(dataAwsccQuicksightTemplateSourceEntitySourceAnalysisDataSetReferencesToTerraform)(struct!.dataSetReferences),
  }
}

export class DataAwsccQuicksightTemplateSourceEntitySourceTemplate extends cdktf.ComplexComputedList {

  // arn - computed: true, optional: false, required: false
  public get arn() {
    return this.getStringAttribute('arn');
  }
}

export function dataAwsccQuicksightTemplateSourceEntitySourceTemplateToTerraform(struct?: DataAwsccQuicksightTemplateSourceEntitySourceTemplate): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    arn: cdktf.stringToTerraform(struct!.arn),
  }
}

export class DataAwsccQuicksightTemplateSourceEntity extends cdktf.ComplexComputedList {

  // source_analysis - computed: true, optional: false, required: false
  public get sourceAnalysis() {
    return this.interpolationForAttribute('source_analysis') as any;
  }

  // source_template - computed: true, optional: false, required: false
  public get sourceTemplate() {
    return this.interpolationForAttribute('source_template') as any;
  }
}

export function dataAwsccQuicksightTemplateSourceEntityToTerraform(struct?: DataAwsccQuicksightTemplateSourceEntity): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    source_analysis: dataAwsccQuicksightTemplateSourceEntitySourceAnalysisToTerraform(struct!.sourceAnalysis),
    source_template: dataAwsccQuicksightTemplateSourceEntitySourceTemplateToTerraform(struct!.sourceTemplate),
  }
}

export class DataAwsccQuicksightTemplateTags extends cdktf.ComplexComputedList {

  // key - computed: true, optional: false, required: false
  public get key() {
    return this.getStringAttribute('key');
  }

  // value - computed: true, optional: false, required: false
  public get value() {
    return this.getStringAttribute('value');
  }
}

export function dataAwsccQuicksightTemplateTagsToTerraform(struct?: DataAwsccQuicksightTemplateTags): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    key: cdktf.stringToTerraform(struct!.key),
    value: cdktf.stringToTerraform(struct!.value),
  }
}

export class DataAwsccQuicksightTemplateVersionDataSetConfigurationsColumnGroupSchemaListColumnGroupColumnSchemaList extends cdktf.ComplexComputedList {

  // name - computed: true, optional: false, required: false
  public get name() {
    return this.getStringAttribute('name');
  }
}

export function dataAwsccQuicksightTemplateVersionDataSetConfigurationsColumnGroupSchemaListColumnGroupColumnSchemaListToTerraform(struct?: DataAwsccQuicksightTemplateVersionDataSetConfigurationsColumnGroupSchemaListColumnGroupColumnSchemaList): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    name: cdktf.stringToTerraform(struct!.name),
  }
}

export class DataAwsccQuicksightTemplateVersionDataSetConfigurationsColumnGroupSchemaList extends cdktf.ComplexComputedList {

  // column_group_column_schema_list - computed: true, optional: false, required: false
  public get columnGroupColumnSchemaList() {
    return this.interpolationForAttribute('column_group_column_schema_list') as any;
  }

  // name - computed: true, optional: false, required: false
  public get name() {
    return this.getStringAttribute('name');
  }
}

export function dataAwsccQuicksightTemplateVersionDataSetConfigurationsColumnGroupSchemaListToTerraform(struct?: DataAwsccQuicksightTemplateVersionDataSetConfigurationsColumnGroupSchemaList): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    column_group_column_schema_list: cdktf.listMapper(dataAwsccQuicksightTemplateVersionDataSetConfigurationsColumnGroupSchemaListColumnGroupColumnSchemaListToTerraform)(struct!.columnGroupColumnSchemaList),
    name: cdktf.stringToTerraform(struct!.name),
  }
}

export class DataAwsccQuicksightTemplateVersionDataSetConfigurationsDataSetSchemaColumnSchemaList extends cdktf.ComplexComputedList {

  // data_type - computed: true, optional: false, required: false
  public get dataType() {
    return this.getStringAttribute('data_type');
  }

  // geographic_role - computed: true, optional: false, required: false
  public get geographicRole() {
    return this.getStringAttribute('geographic_role');
  }

  // name - computed: true, optional: false, required: false
  public get name() {
    return this.getStringAttribute('name');
  }
}

export function dataAwsccQuicksightTemplateVersionDataSetConfigurationsDataSetSchemaColumnSchemaListToTerraform(struct?: DataAwsccQuicksightTemplateVersionDataSetConfigurationsDataSetSchemaColumnSchemaList): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    data_type: cdktf.stringToTerraform(struct!.dataType),
    geographic_role: cdktf.stringToTerraform(struct!.geographicRole),
    name: cdktf.stringToTerraform(struct!.name),
  }
}

export class DataAwsccQuicksightTemplateVersionDataSetConfigurationsDataSetSchema extends cdktf.ComplexComputedList {

  // column_schema_list - computed: true, optional: false, required: false
  public get columnSchemaList() {
    return this.interpolationForAttribute('column_schema_list') as any;
  }
}

export function dataAwsccQuicksightTemplateVersionDataSetConfigurationsDataSetSchemaToTerraform(struct?: DataAwsccQuicksightTemplateVersionDataSetConfigurationsDataSetSchema): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    column_schema_list: cdktf.listMapper(dataAwsccQuicksightTemplateVersionDataSetConfigurationsDataSetSchemaColumnSchemaListToTerraform)(struct!.columnSchemaList),
  }
}

export class DataAwsccQuicksightTemplateVersionDataSetConfigurations extends cdktf.ComplexComputedList {

  // column_group_schema_list - computed: true, optional: false, required: false
  public get columnGroupSchemaList() {
    return this.interpolationForAttribute('column_group_schema_list') as any;
  }

  // data_set_schema - computed: true, optional: false, required: false
  public get dataSetSchema() {
    return this.interpolationForAttribute('data_set_schema') as any;
  }

  // placeholder - computed: true, optional: false, required: false
  public get placeholder() {
    return this.getStringAttribute('placeholder');
  }
}

export function dataAwsccQuicksightTemplateVersionDataSetConfigurationsToTerraform(struct?: DataAwsccQuicksightTemplateVersionDataSetConfigurations): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    column_group_schema_list: cdktf.listMapper(dataAwsccQuicksightTemplateVersionDataSetConfigurationsColumnGroupSchemaListToTerraform)(struct!.columnGroupSchemaList),
    data_set_schema: dataAwsccQuicksightTemplateVersionDataSetConfigurationsDataSetSchemaToTerraform(struct!.dataSetSchema),
    placeholder: cdktf.stringToTerraform(struct!.placeholder),
  }
}

export class DataAwsccQuicksightTemplateVersionErrors extends cdktf.ComplexComputedList {

  // message - computed: true, optional: false, required: false
  public get message() {
    return this.getStringAttribute('message');
  }

  // type - computed: true, optional: false, required: false
  public get type() {
    return this.getStringAttribute('type');
  }
}

export function dataAwsccQuicksightTemplateVersionErrorsToTerraform(struct?: DataAwsccQuicksightTemplateVersionErrors): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    message: cdktf.stringToTerraform(struct!.message),
    type: cdktf.stringToTerraform(struct!.type),
  }
}

export class DataAwsccQuicksightTemplateVersionSheets extends cdktf.ComplexComputedList {

  // name - computed: true, optional: false, required: false
  public get name() {
    return this.getStringAttribute('name');
  }

  // sheet_id - computed: true, optional: false, required: false
  public get sheetId() {
    return this.getStringAttribute('sheet_id');
  }
}

export function dataAwsccQuicksightTemplateVersionSheetsToTerraform(struct?: DataAwsccQuicksightTemplateVersionSheets): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    name: cdktf.stringToTerraform(struct!.name),
    sheet_id: cdktf.stringToTerraform(struct!.sheetId),
  }
}

export class DataAwsccQuicksightTemplateVersion extends cdktf.ComplexComputedList {

  // created_time - computed: true, optional: false, required: false
  public get createdTime() {
    return this.getStringAttribute('created_time');
  }

  // data_set_configurations - computed: true, optional: false, required: false
  public get dataSetConfigurations() {
    return this.interpolationForAttribute('data_set_configurations') as any;
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

export function dataAwsccQuicksightTemplateVersionToTerraform(struct?: DataAwsccQuicksightTemplateVersion): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    created_time: cdktf.stringToTerraform(struct!.createdTime),
    data_set_configurations: cdktf.listMapper(dataAwsccQuicksightTemplateVersionDataSetConfigurationsToTerraform)(struct!.dataSetConfigurations),
    description: cdktf.stringToTerraform(struct!.description),
    errors: cdktf.listMapper(dataAwsccQuicksightTemplateVersionErrorsToTerraform)(struct!.errors),
    sheets: cdktf.listMapper(dataAwsccQuicksightTemplateVersionSheetsToTerraform)(struct!.sheets),
    source_entity_arn: cdktf.stringToTerraform(struct!.sourceEntityArn),
    status: cdktf.stringToTerraform(struct!.status),
    theme_arn: cdktf.stringToTerraform(struct!.themeArn),
    version_number: cdktf.numberToTerraform(struct!.versionNumber),
  }
}


/**
* Represents a {@link https://www.terraform.io/docs/providers/awscc/d/quicksight_template.html awscc_quicksight_template}
*/
export class DataAwsccQuicksightTemplate extends cdktf.TerraformDataSource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType: string = "awscc_quicksight_template";

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://www.terraform.io/docs/providers/awscc/d/quicksight_template.html awscc_quicksight_template} Data Source
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DataAwsccQuicksightTemplateConfig
  */
  public constructor(scope: Construct, id: string, config: DataAwsccQuicksightTemplateConfig) {
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

  // template_id - computed: true, optional: false, required: false
  public get templateId() {
    return this.getStringAttribute('template_id');
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
