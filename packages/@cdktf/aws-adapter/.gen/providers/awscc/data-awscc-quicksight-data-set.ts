// https://www.terraform.io/docs/providers/awscc/d/quicksight_data_set.html
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DataAwsccQuicksightDataSetConfig extends cdktf.TerraformMetaArguments {
  /**
  * Uniquely identifies the resource.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/d/quicksight_data_set.html#id DataAwsccQuicksightDataSet#id}
  */
  readonly id: string;
}
export class DataAwsccQuicksightDataSetColumnGroupsGeoSpatialColumnGroup extends cdktf.ComplexComputedList {

  // columns - computed: true, optional: false, required: false
  public get columns() {
    return this.getListAttribute('columns');
  }

  // country_code - computed: true, optional: false, required: false
  public get countryCode() {
    return this.getStringAttribute('country_code');
  }

  // name - computed: true, optional: false, required: false
  public get name() {
    return this.getStringAttribute('name');
  }
}

export function dataAwsccQuicksightDataSetColumnGroupsGeoSpatialColumnGroupToTerraform(struct?: DataAwsccQuicksightDataSetColumnGroupsGeoSpatialColumnGroup): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    columns: cdktf.listMapper(cdktf.stringToTerraform)(struct!.columns),
    country_code: cdktf.stringToTerraform(struct!.countryCode),
    name: cdktf.stringToTerraform(struct!.name),
  }
}

export class DataAwsccQuicksightDataSetColumnGroups extends cdktf.ComplexComputedList {

  // geo_spatial_column_group - computed: true, optional: false, required: false
  public get geoSpatialColumnGroup() {
    return this.interpolationForAttribute('geo_spatial_column_group') as any;
  }
}

export function dataAwsccQuicksightDataSetColumnGroupsToTerraform(struct?: DataAwsccQuicksightDataSetColumnGroups): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    geo_spatial_column_group: dataAwsccQuicksightDataSetColumnGroupsGeoSpatialColumnGroupToTerraform(struct!.geoSpatialColumnGroup),
  }
}

export class DataAwsccQuicksightDataSetColumnLevelPermissionRules extends cdktf.ComplexComputedList {

  // column_names - computed: true, optional: false, required: false
  public get columnNames() {
    return this.getListAttribute('column_names');
  }

  // principals - computed: true, optional: false, required: false
  public get principals() {
    return this.getListAttribute('principals');
  }
}

export function dataAwsccQuicksightDataSetColumnLevelPermissionRulesToTerraform(struct?: DataAwsccQuicksightDataSetColumnLevelPermissionRules): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    column_names: cdktf.listMapper(cdktf.stringToTerraform)(struct!.columnNames),
    principals: cdktf.listMapper(cdktf.stringToTerraform)(struct!.principals),
  }
}

export class DataAwsccQuicksightDataSetFieldFolders extends cdktf.ComplexComputedList {

  // columns - computed: true, optional: false, required: false
  public get columns() {
    return this.getListAttribute('columns');
  }

  // description - computed: true, optional: false, required: false
  public get description() {
    return this.getStringAttribute('description');
  }
}

export function dataAwsccQuicksightDataSetFieldFoldersToTerraform(struct?: DataAwsccQuicksightDataSetFieldFolders): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    columns: cdktf.listMapper(cdktf.stringToTerraform)(struct!.columns),
    description: cdktf.stringToTerraform(struct!.description),
  }
}

export class DataAwsccQuicksightDataSetIngestionWaitPolicy extends cdktf.ComplexComputedList {

  // ingestion_wait_time_in_hours - computed: true, optional: false, required: false
  public get ingestionWaitTimeInHours() {
    return this.getNumberAttribute('ingestion_wait_time_in_hours');
  }

  // wait_for_spice_ingestion - computed: true, optional: false, required: false
  public get waitForSpiceIngestion() {
    return this.getBooleanAttribute('wait_for_spice_ingestion');
  }
}

export function dataAwsccQuicksightDataSetIngestionWaitPolicyToTerraform(struct?: DataAwsccQuicksightDataSetIngestionWaitPolicy): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    ingestion_wait_time_in_hours: cdktf.numberToTerraform(struct!.ingestionWaitTimeInHours),
    wait_for_spice_ingestion: cdktf.booleanToTerraform(struct!.waitForSpiceIngestion),
  }
}

export class DataAwsccQuicksightDataSetLogicalTableMapDataTransformsCastColumnTypeOperation extends cdktf.ComplexComputedList {

  // column_name - computed: true, optional: false, required: false
  public get columnName() {
    return this.getStringAttribute('column_name');
  }

  // format - computed: true, optional: false, required: false
  public get format() {
    return this.getStringAttribute('format');
  }

  // new_column_type - computed: true, optional: false, required: false
  public get newColumnType() {
    return this.getStringAttribute('new_column_type');
  }
}

export function dataAwsccQuicksightDataSetLogicalTableMapDataTransformsCastColumnTypeOperationToTerraform(struct?: DataAwsccQuicksightDataSetLogicalTableMapDataTransformsCastColumnTypeOperation): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    column_name: cdktf.stringToTerraform(struct!.columnName),
    format: cdktf.stringToTerraform(struct!.format),
    new_column_type: cdktf.stringToTerraform(struct!.newColumnType),
  }
}

export class DataAwsccQuicksightDataSetLogicalTableMapDataTransformsCreateColumnsOperationColumns extends cdktf.ComplexComputedList {

  // column_id - computed: true, optional: false, required: false
  public get columnId() {
    return this.getStringAttribute('column_id');
  }

  // column_name - computed: true, optional: false, required: false
  public get columnName() {
    return this.getStringAttribute('column_name');
  }

  // expression - computed: true, optional: false, required: false
  public get expression() {
    return this.getStringAttribute('expression');
  }
}

export function dataAwsccQuicksightDataSetLogicalTableMapDataTransformsCreateColumnsOperationColumnsToTerraform(struct?: DataAwsccQuicksightDataSetLogicalTableMapDataTransformsCreateColumnsOperationColumns): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    column_id: cdktf.stringToTerraform(struct!.columnId),
    column_name: cdktf.stringToTerraform(struct!.columnName),
    expression: cdktf.stringToTerraform(struct!.expression),
  }
}

export class DataAwsccQuicksightDataSetLogicalTableMapDataTransformsCreateColumnsOperation extends cdktf.ComplexComputedList {

  // columns - computed: true, optional: false, required: false
  public get columns() {
    return this.interpolationForAttribute('columns') as any;
  }
}

export function dataAwsccQuicksightDataSetLogicalTableMapDataTransformsCreateColumnsOperationToTerraform(struct?: DataAwsccQuicksightDataSetLogicalTableMapDataTransformsCreateColumnsOperation): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    columns: cdktf.listMapper(dataAwsccQuicksightDataSetLogicalTableMapDataTransformsCreateColumnsOperationColumnsToTerraform)(struct!.columns),
  }
}

export class DataAwsccQuicksightDataSetLogicalTableMapDataTransformsFilterOperation extends cdktf.ComplexComputedList {

  // condition_expression - computed: true, optional: false, required: false
  public get conditionExpression() {
    return this.getStringAttribute('condition_expression');
  }
}

export function dataAwsccQuicksightDataSetLogicalTableMapDataTransformsFilterOperationToTerraform(struct?: DataAwsccQuicksightDataSetLogicalTableMapDataTransformsFilterOperation): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    condition_expression: cdktf.stringToTerraform(struct!.conditionExpression),
  }
}

export class DataAwsccQuicksightDataSetLogicalTableMapDataTransformsProjectOperation extends cdktf.ComplexComputedList {

  // projected_columns - computed: true, optional: false, required: false
  public get projectedColumns() {
    return this.getListAttribute('projected_columns');
  }
}

export function dataAwsccQuicksightDataSetLogicalTableMapDataTransformsProjectOperationToTerraform(struct?: DataAwsccQuicksightDataSetLogicalTableMapDataTransformsProjectOperation): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    projected_columns: cdktf.listMapper(cdktf.stringToTerraform)(struct!.projectedColumns),
  }
}

export class DataAwsccQuicksightDataSetLogicalTableMapDataTransformsRenameColumnOperation extends cdktf.ComplexComputedList {

  // column_name - computed: true, optional: false, required: false
  public get columnName() {
    return this.getStringAttribute('column_name');
  }

  // new_column_name - computed: true, optional: false, required: false
  public get newColumnName() {
    return this.getStringAttribute('new_column_name');
  }
}

export function dataAwsccQuicksightDataSetLogicalTableMapDataTransformsRenameColumnOperationToTerraform(struct?: DataAwsccQuicksightDataSetLogicalTableMapDataTransformsRenameColumnOperation): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    column_name: cdktf.stringToTerraform(struct!.columnName),
    new_column_name: cdktf.stringToTerraform(struct!.newColumnName),
  }
}

export class DataAwsccQuicksightDataSetLogicalTableMapDataTransformsTagColumnOperationTagsColumnDescription extends cdktf.ComplexComputedList {

  // text - computed: true, optional: false, required: false
  public get text() {
    return this.getStringAttribute('text');
  }
}

export function dataAwsccQuicksightDataSetLogicalTableMapDataTransformsTagColumnOperationTagsColumnDescriptionToTerraform(struct?: DataAwsccQuicksightDataSetLogicalTableMapDataTransformsTagColumnOperationTagsColumnDescription): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    text: cdktf.stringToTerraform(struct!.text),
  }
}

export class DataAwsccQuicksightDataSetLogicalTableMapDataTransformsTagColumnOperationTags extends cdktf.ComplexComputedList {

  // column_description - computed: true, optional: false, required: false
  public get columnDescription() {
    return this.interpolationForAttribute('column_description') as any;
  }

  // column_geographic_role - computed: true, optional: false, required: false
  public get columnGeographicRole() {
    return this.getStringAttribute('column_geographic_role');
  }
}

export function dataAwsccQuicksightDataSetLogicalTableMapDataTransformsTagColumnOperationTagsToTerraform(struct?: DataAwsccQuicksightDataSetLogicalTableMapDataTransformsTagColumnOperationTags): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    column_description: dataAwsccQuicksightDataSetLogicalTableMapDataTransformsTagColumnOperationTagsColumnDescriptionToTerraform(struct!.columnDescription),
    column_geographic_role: cdktf.stringToTerraform(struct!.columnGeographicRole),
  }
}

export class DataAwsccQuicksightDataSetLogicalTableMapDataTransformsTagColumnOperation extends cdktf.ComplexComputedList {

  // column_name - computed: true, optional: false, required: false
  public get columnName() {
    return this.getStringAttribute('column_name');
  }

  // tags - computed: true, optional: false, required: false
  public get tags() {
    return this.interpolationForAttribute('tags') as any;
  }
}

export function dataAwsccQuicksightDataSetLogicalTableMapDataTransformsTagColumnOperationToTerraform(struct?: DataAwsccQuicksightDataSetLogicalTableMapDataTransformsTagColumnOperation): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    column_name: cdktf.stringToTerraform(struct!.columnName),
    tags: cdktf.listMapper(dataAwsccQuicksightDataSetLogicalTableMapDataTransformsTagColumnOperationTagsToTerraform)(struct!.tags),
  }
}

export class DataAwsccQuicksightDataSetLogicalTableMapDataTransforms extends cdktf.ComplexComputedList {

  // cast_column_type_operation - computed: true, optional: false, required: false
  public get castColumnTypeOperation() {
    return this.interpolationForAttribute('cast_column_type_operation') as any;
  }

  // create_columns_operation - computed: true, optional: false, required: false
  public get createColumnsOperation() {
    return this.interpolationForAttribute('create_columns_operation') as any;
  }

  // filter_operation - computed: true, optional: false, required: false
  public get filterOperation() {
    return this.interpolationForAttribute('filter_operation') as any;
  }

  // project_operation - computed: true, optional: false, required: false
  public get projectOperation() {
    return this.interpolationForAttribute('project_operation') as any;
  }

  // rename_column_operation - computed: true, optional: false, required: false
  public get renameColumnOperation() {
    return this.interpolationForAttribute('rename_column_operation') as any;
  }

  // tag_column_operation - computed: true, optional: false, required: false
  public get tagColumnOperation() {
    return this.interpolationForAttribute('tag_column_operation') as any;
  }
}

export function dataAwsccQuicksightDataSetLogicalTableMapDataTransformsToTerraform(struct?: DataAwsccQuicksightDataSetLogicalTableMapDataTransforms): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    cast_column_type_operation: dataAwsccQuicksightDataSetLogicalTableMapDataTransformsCastColumnTypeOperationToTerraform(struct!.castColumnTypeOperation),
    create_columns_operation: dataAwsccQuicksightDataSetLogicalTableMapDataTransformsCreateColumnsOperationToTerraform(struct!.createColumnsOperation),
    filter_operation: dataAwsccQuicksightDataSetLogicalTableMapDataTransformsFilterOperationToTerraform(struct!.filterOperation),
    project_operation: dataAwsccQuicksightDataSetLogicalTableMapDataTransformsProjectOperationToTerraform(struct!.projectOperation),
    rename_column_operation: dataAwsccQuicksightDataSetLogicalTableMapDataTransformsRenameColumnOperationToTerraform(struct!.renameColumnOperation),
    tag_column_operation: dataAwsccQuicksightDataSetLogicalTableMapDataTransformsTagColumnOperationToTerraform(struct!.tagColumnOperation),
  }
}

export class DataAwsccQuicksightDataSetLogicalTableMapSourceJoinInstructionLeftJoinKeyProperties extends cdktf.ComplexComputedList {

  // unique_key - computed: true, optional: false, required: false
  public get uniqueKey() {
    return this.getBooleanAttribute('unique_key');
  }
}

export function dataAwsccQuicksightDataSetLogicalTableMapSourceJoinInstructionLeftJoinKeyPropertiesToTerraform(struct?: DataAwsccQuicksightDataSetLogicalTableMapSourceJoinInstructionLeftJoinKeyProperties): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    unique_key: cdktf.booleanToTerraform(struct!.uniqueKey),
  }
}

export class DataAwsccQuicksightDataSetLogicalTableMapSourceJoinInstructionRightJoinKeyProperties extends cdktf.ComplexComputedList {

  // unique_key - computed: true, optional: false, required: false
  public get uniqueKey() {
    return this.getBooleanAttribute('unique_key');
  }
}

export function dataAwsccQuicksightDataSetLogicalTableMapSourceJoinInstructionRightJoinKeyPropertiesToTerraform(struct?: DataAwsccQuicksightDataSetLogicalTableMapSourceJoinInstructionRightJoinKeyProperties): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    unique_key: cdktf.booleanToTerraform(struct!.uniqueKey),
  }
}

export class DataAwsccQuicksightDataSetLogicalTableMapSourceJoinInstruction extends cdktf.ComplexComputedList {

  // left_join_key_properties - computed: true, optional: false, required: false
  public get leftJoinKeyProperties() {
    return this.interpolationForAttribute('left_join_key_properties') as any;
  }

  // left_operand - computed: true, optional: false, required: false
  public get leftOperand() {
    return this.getStringAttribute('left_operand');
  }

  // on_clause - computed: true, optional: false, required: false
  public get onClause() {
    return this.getStringAttribute('on_clause');
  }

  // right_join_key_properties - computed: true, optional: false, required: false
  public get rightJoinKeyProperties() {
    return this.interpolationForAttribute('right_join_key_properties') as any;
  }

  // right_operand - computed: true, optional: false, required: false
  public get rightOperand() {
    return this.getStringAttribute('right_operand');
  }

  // type - computed: true, optional: false, required: false
  public get type() {
    return this.getStringAttribute('type');
  }
}

export function dataAwsccQuicksightDataSetLogicalTableMapSourceJoinInstructionToTerraform(struct?: DataAwsccQuicksightDataSetLogicalTableMapSourceJoinInstruction): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    left_join_key_properties: dataAwsccQuicksightDataSetLogicalTableMapSourceJoinInstructionLeftJoinKeyPropertiesToTerraform(struct!.leftJoinKeyProperties),
    left_operand: cdktf.stringToTerraform(struct!.leftOperand),
    on_clause: cdktf.stringToTerraform(struct!.onClause),
    right_join_key_properties: dataAwsccQuicksightDataSetLogicalTableMapSourceJoinInstructionRightJoinKeyPropertiesToTerraform(struct!.rightJoinKeyProperties),
    right_operand: cdktf.stringToTerraform(struct!.rightOperand),
    type: cdktf.stringToTerraform(struct!.type),
  }
}

export class DataAwsccQuicksightDataSetLogicalTableMapSource extends cdktf.ComplexComputedList {

  // join_instruction - computed: true, optional: false, required: false
  public get joinInstruction() {
    return this.interpolationForAttribute('join_instruction') as any;
  }

  // physical_table_id - computed: true, optional: false, required: false
  public get physicalTableId() {
    return this.getStringAttribute('physical_table_id');
  }
}

export function dataAwsccQuicksightDataSetLogicalTableMapSourceToTerraform(struct?: DataAwsccQuicksightDataSetLogicalTableMapSource): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    join_instruction: dataAwsccQuicksightDataSetLogicalTableMapSourceJoinInstructionToTerraform(struct!.joinInstruction),
    physical_table_id: cdktf.stringToTerraform(struct!.physicalTableId),
  }
}

export class DataAwsccQuicksightDataSetLogicalTableMap extends cdktf.ComplexComputedList {

  // alias - computed: true, optional: false, required: false
  public get alias() {
    return this.getStringAttribute('alias');
  }

  // data_transforms - computed: true, optional: false, required: false
  public get dataTransforms() {
    return this.interpolationForAttribute('data_transforms') as any;
  }

  // source - computed: true, optional: false, required: false
  public get source() {
    return this.interpolationForAttribute('source') as any;
  }
}

export function dataAwsccQuicksightDataSetLogicalTableMapToTerraform(struct?: DataAwsccQuicksightDataSetLogicalTableMap): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    alias: cdktf.stringToTerraform(struct!.alias),
    data_transforms: cdktf.listMapper(dataAwsccQuicksightDataSetLogicalTableMapDataTransformsToTerraform)(struct!.dataTransforms),
    source: dataAwsccQuicksightDataSetLogicalTableMapSourceToTerraform(struct!.source),
  }
}

export class DataAwsccQuicksightDataSetOutputColumns extends cdktf.ComplexComputedList {

  // description - computed: true, optional: false, required: false
  public get description() {
    return this.getStringAttribute('description');
  }

  // name - computed: true, optional: false, required: false
  public get name() {
    return this.getStringAttribute('name');
  }

  // type - computed: true, optional: false, required: false
  public get type() {
    return this.getStringAttribute('type');
  }
}

export function dataAwsccQuicksightDataSetOutputColumnsToTerraform(struct?: DataAwsccQuicksightDataSetOutputColumns): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    description: cdktf.stringToTerraform(struct!.description),
    name: cdktf.stringToTerraform(struct!.name),
    type: cdktf.stringToTerraform(struct!.type),
  }
}

export class DataAwsccQuicksightDataSetPermissions extends cdktf.ComplexComputedList {

  // actions - computed: true, optional: false, required: false
  public get actions() {
    return this.getListAttribute('actions');
  }

  // principal - computed: true, optional: false, required: false
  public get principal() {
    return this.getStringAttribute('principal');
  }
}

export function dataAwsccQuicksightDataSetPermissionsToTerraform(struct?: DataAwsccQuicksightDataSetPermissions): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    actions: cdktf.listMapper(cdktf.stringToTerraform)(struct!.actions),
    principal: cdktf.stringToTerraform(struct!.principal),
  }
}

export class DataAwsccQuicksightDataSetPhysicalTableMapCustomSqlColumns extends cdktf.ComplexComputedList {

  // name - computed: true, optional: false, required: false
  public get name() {
    return this.getStringAttribute('name');
  }

  // type - computed: true, optional: false, required: false
  public get type() {
    return this.getStringAttribute('type');
  }
}

export function dataAwsccQuicksightDataSetPhysicalTableMapCustomSqlColumnsToTerraform(struct?: DataAwsccQuicksightDataSetPhysicalTableMapCustomSqlColumns): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    name: cdktf.stringToTerraform(struct!.name),
    type: cdktf.stringToTerraform(struct!.type),
  }
}

export class DataAwsccQuicksightDataSetPhysicalTableMapCustomSql extends cdktf.ComplexComputedList {

  // columns - computed: true, optional: false, required: false
  public get columns() {
    return this.interpolationForAttribute('columns') as any;
  }

  // data_source_arn - computed: true, optional: false, required: false
  public get dataSourceArn() {
    return this.getStringAttribute('data_source_arn');
  }

  // name - computed: true, optional: false, required: false
  public get name() {
    return this.getStringAttribute('name');
  }

  // sql_query - computed: true, optional: false, required: false
  public get sqlQuery() {
    return this.getStringAttribute('sql_query');
  }
}

export function dataAwsccQuicksightDataSetPhysicalTableMapCustomSqlToTerraform(struct?: DataAwsccQuicksightDataSetPhysicalTableMapCustomSql): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    columns: cdktf.listMapper(dataAwsccQuicksightDataSetPhysicalTableMapCustomSqlColumnsToTerraform)(struct!.columns),
    data_source_arn: cdktf.stringToTerraform(struct!.dataSourceArn),
    name: cdktf.stringToTerraform(struct!.name),
    sql_query: cdktf.stringToTerraform(struct!.sqlQuery),
  }
}

export class DataAwsccQuicksightDataSetPhysicalTableMapRelationalTableInputColumns extends cdktf.ComplexComputedList {

  // name - computed: true, optional: false, required: false
  public get name() {
    return this.getStringAttribute('name');
  }

  // type - computed: true, optional: false, required: false
  public get type() {
    return this.getStringAttribute('type');
  }
}

export function dataAwsccQuicksightDataSetPhysicalTableMapRelationalTableInputColumnsToTerraform(struct?: DataAwsccQuicksightDataSetPhysicalTableMapRelationalTableInputColumns): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    name: cdktf.stringToTerraform(struct!.name),
    type: cdktf.stringToTerraform(struct!.type),
  }
}

export class DataAwsccQuicksightDataSetPhysicalTableMapRelationalTable extends cdktf.ComplexComputedList {

  // catalog - computed: true, optional: false, required: false
  public get catalog() {
    return this.getStringAttribute('catalog');
  }

  // data_source_arn - computed: true, optional: false, required: false
  public get dataSourceArn() {
    return this.getStringAttribute('data_source_arn');
  }

  // input_columns - computed: true, optional: false, required: false
  public get inputColumns() {
    return this.interpolationForAttribute('input_columns') as any;
  }

  // name - computed: true, optional: false, required: false
  public get name() {
    return this.getStringAttribute('name');
  }

  // schema - computed: true, optional: false, required: false
  public get schema() {
    return this.getStringAttribute('schema');
  }
}

export function dataAwsccQuicksightDataSetPhysicalTableMapRelationalTableToTerraform(struct?: DataAwsccQuicksightDataSetPhysicalTableMapRelationalTable): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    catalog: cdktf.stringToTerraform(struct!.catalog),
    data_source_arn: cdktf.stringToTerraform(struct!.dataSourceArn),
    input_columns: cdktf.listMapper(dataAwsccQuicksightDataSetPhysicalTableMapRelationalTableInputColumnsToTerraform)(struct!.inputColumns),
    name: cdktf.stringToTerraform(struct!.name),
    schema: cdktf.stringToTerraform(struct!.schema),
  }
}

export class DataAwsccQuicksightDataSetPhysicalTableMapS3SourceInputColumns extends cdktf.ComplexComputedList {

  // name - computed: true, optional: false, required: false
  public get name() {
    return this.getStringAttribute('name');
  }

  // type - computed: true, optional: false, required: false
  public get type() {
    return this.getStringAttribute('type');
  }
}

export function dataAwsccQuicksightDataSetPhysicalTableMapS3SourceInputColumnsToTerraform(struct?: DataAwsccQuicksightDataSetPhysicalTableMapS3SourceInputColumns): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    name: cdktf.stringToTerraform(struct!.name),
    type: cdktf.stringToTerraform(struct!.type),
  }
}

export class DataAwsccQuicksightDataSetPhysicalTableMapS3SourceUploadSettings extends cdktf.ComplexComputedList {

  // contains_header - computed: true, optional: false, required: false
  public get containsHeader() {
    return this.getBooleanAttribute('contains_header');
  }

  // delimiter - computed: true, optional: false, required: false
  public get delimiter() {
    return this.getStringAttribute('delimiter');
  }

  // format - computed: true, optional: false, required: false
  public get format() {
    return this.getStringAttribute('format');
  }

  // start_from_row - computed: true, optional: false, required: false
  public get startFromRow() {
    return this.getNumberAttribute('start_from_row');
  }

  // text_qualifier - computed: true, optional: false, required: false
  public get textQualifier() {
    return this.getStringAttribute('text_qualifier');
  }
}

export function dataAwsccQuicksightDataSetPhysicalTableMapS3SourceUploadSettingsToTerraform(struct?: DataAwsccQuicksightDataSetPhysicalTableMapS3SourceUploadSettings): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    contains_header: cdktf.booleanToTerraform(struct!.containsHeader),
    delimiter: cdktf.stringToTerraform(struct!.delimiter),
    format: cdktf.stringToTerraform(struct!.format),
    start_from_row: cdktf.numberToTerraform(struct!.startFromRow),
    text_qualifier: cdktf.stringToTerraform(struct!.textQualifier),
  }
}

export class DataAwsccQuicksightDataSetPhysicalTableMapS3Source extends cdktf.ComplexComputedList {

  // data_source_arn - computed: true, optional: false, required: false
  public get dataSourceArn() {
    return this.getStringAttribute('data_source_arn');
  }

  // input_columns - computed: true, optional: false, required: false
  public get inputColumns() {
    return this.interpolationForAttribute('input_columns') as any;
  }

  // upload_settings - computed: true, optional: false, required: false
  public get uploadSettings() {
    return this.interpolationForAttribute('upload_settings') as any;
  }
}

export function dataAwsccQuicksightDataSetPhysicalTableMapS3SourceToTerraform(struct?: DataAwsccQuicksightDataSetPhysicalTableMapS3Source): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    data_source_arn: cdktf.stringToTerraform(struct!.dataSourceArn),
    input_columns: cdktf.listMapper(dataAwsccQuicksightDataSetPhysicalTableMapS3SourceInputColumnsToTerraform)(struct!.inputColumns),
    upload_settings: dataAwsccQuicksightDataSetPhysicalTableMapS3SourceUploadSettingsToTerraform(struct!.uploadSettings),
  }
}

export class DataAwsccQuicksightDataSetPhysicalTableMap extends cdktf.ComplexComputedList {

  // custom_sql - computed: true, optional: false, required: false
  public get customSql() {
    return this.interpolationForAttribute('custom_sql') as any;
  }

  // relational_table - computed: true, optional: false, required: false
  public get relationalTable() {
    return this.interpolationForAttribute('relational_table') as any;
  }

  // s3_source - computed: true, optional: false, required: false
  public get s3Source() {
    return this.interpolationForAttribute('s3_source') as any;
  }
}

export function dataAwsccQuicksightDataSetPhysicalTableMapToTerraform(struct?: DataAwsccQuicksightDataSetPhysicalTableMap): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    custom_sql: dataAwsccQuicksightDataSetPhysicalTableMapCustomSqlToTerraform(struct!.customSql),
    relational_table: dataAwsccQuicksightDataSetPhysicalTableMapRelationalTableToTerraform(struct!.relationalTable),
    s3_source: dataAwsccQuicksightDataSetPhysicalTableMapS3SourceToTerraform(struct!.s3Source),
  }
}

export class DataAwsccQuicksightDataSetRowLevelPermissionDataSet extends cdktf.ComplexComputedList {

  // arn - computed: true, optional: false, required: false
  public get arn() {
    return this.getStringAttribute('arn');
  }

  // format_version - computed: true, optional: false, required: false
  public get formatVersion() {
    return this.getStringAttribute('format_version');
  }

  // namespace - computed: true, optional: false, required: false
  public get namespace() {
    return this.getStringAttribute('namespace');
  }

  // permission_policy - computed: true, optional: false, required: false
  public get permissionPolicy() {
    return this.getStringAttribute('permission_policy');
  }
}

export function dataAwsccQuicksightDataSetRowLevelPermissionDataSetToTerraform(struct?: DataAwsccQuicksightDataSetRowLevelPermissionDataSet): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    arn: cdktf.stringToTerraform(struct!.arn),
    format_version: cdktf.stringToTerraform(struct!.formatVersion),
    namespace: cdktf.stringToTerraform(struct!.namespace),
    permission_policy: cdktf.stringToTerraform(struct!.permissionPolicy),
  }
}

export class DataAwsccQuicksightDataSetTags extends cdktf.ComplexComputedList {

  // key - computed: true, optional: false, required: false
  public get key() {
    return this.getStringAttribute('key');
  }

  // value - computed: true, optional: false, required: false
  public get value() {
    return this.getStringAttribute('value');
  }
}

export function dataAwsccQuicksightDataSetTagsToTerraform(struct?: DataAwsccQuicksightDataSetTags): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    key: cdktf.stringToTerraform(struct!.key),
    value: cdktf.stringToTerraform(struct!.value),
  }
}


/**
* Represents a {@link https://www.terraform.io/docs/providers/awscc/d/quicksight_data_set.html awscc_quicksight_data_set}
*/
export class DataAwsccQuicksightDataSet extends cdktf.TerraformDataSource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType: string = "awscc_quicksight_data_set";

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://www.terraform.io/docs/providers/awscc/d/quicksight_data_set.html awscc_quicksight_data_set} Data Source
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DataAwsccQuicksightDataSetConfig
  */
  public constructor(scope: Construct, id: string, config: DataAwsccQuicksightDataSetConfig) {
    super(scope, id, {
      terraformResourceType: 'awscc_quicksight_data_set',
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

  // column_groups - computed: true, optional: false, required: false
  public get columnGroups() {
    return this.interpolationForAttribute('column_groups') as any;
  }

  // column_level_permission_rules - computed: true, optional: false, required: false
  public get columnLevelPermissionRules() {
    return this.interpolationForAttribute('column_level_permission_rules') as any;
  }

  // consumed_spice_capacity_in_bytes - computed: true, optional: false, required: false
  public get consumedSpiceCapacityInBytes() {
    return this.getNumberAttribute('consumed_spice_capacity_in_bytes');
  }

  // created_time - computed: true, optional: false, required: false
  public get createdTime() {
    return this.getStringAttribute('created_time');
  }

  // data_set_id - computed: true, optional: false, required: false
  public get dataSetId() {
    return this.getStringAttribute('data_set_id');
  }

  // field_folders - computed: true, optional: false, required: false
  public get fieldFolders() {
    return this.interpolationForAttribute('field_folders') as any;
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

  // import_mode - computed: true, optional: false, required: false
  public get importMode() {
    return this.getStringAttribute('import_mode');
  }

  // ingestion_wait_policy - computed: true, optional: false, required: false
  public get ingestionWaitPolicy() {
    return this.interpolationForAttribute('ingestion_wait_policy') as any;
  }

  // last_updated_time - computed: true, optional: false, required: false
  public get lastUpdatedTime() {
    return this.getStringAttribute('last_updated_time');
  }

  // logical_table_map - computed: true, optional: false, required: false
  public get logicalTableMap() {
    return this.interpolationForAttribute('logical_table_map') as any;
  }

  // name - computed: true, optional: false, required: false
  public get name() {
    return this.getStringAttribute('name');
  }

  // output_columns - computed: true, optional: false, required: false
  public get outputColumns() {
    return this.interpolationForAttribute('output_columns') as any;
  }

  // permissions - computed: true, optional: false, required: false
  public get permissions() {
    return this.interpolationForAttribute('permissions') as any;
  }

  // physical_table_map - computed: true, optional: false, required: false
  public get physicalTableMap() {
    return this.interpolationForAttribute('physical_table_map') as any;
  }

  // row_level_permission_data_set - computed: true, optional: false, required: false
  public get rowLevelPermissionDataSet() {
    return this.interpolationForAttribute('row_level_permission_data_set') as any;
  }

  // tags - computed: true, optional: false, required: false
  public get tags() {
    return this.interpolationForAttribute('tags') as any;
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
