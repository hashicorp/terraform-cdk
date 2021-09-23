// https://www.terraform.io/docs/providers/awscc/r/quicksight_data_set.html
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface QuicksightDataSetConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/quicksight_data_set.html#aws_account_id QuicksightDataSet#aws_account_id}
  */
  readonly awsAccountId?: string;
  /**
  * <p>Groupings of columns that work together in certain QuickSight features. Currently, only geospatial hierarchy is supported.</p>
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/quicksight_data_set.html#column_groups QuicksightDataSet#column_groups}
  */
  readonly columnGroups?: QuicksightDataSetColumnGroups[];
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/quicksight_data_set.html#column_level_permission_rules QuicksightDataSet#column_level_permission_rules}
  */
  readonly columnLevelPermissionRules?: QuicksightDataSetColumnLevelPermissionRules[];
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/quicksight_data_set.html#data_set_id QuicksightDataSet#data_set_id}
  */
  readonly dataSetId?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/quicksight_data_set.html#field_folders QuicksightDataSet#field_folders}
  */
  readonly fieldFolders?: { [key: string]: QuicksightDataSetFieldFolders } | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/quicksight_data_set.html#import_mode QuicksightDataSet#import_mode}
  */
  readonly importMode?: string;
  /**
  * <p>Wait policy to use when creating/updating dataset. Default is to wait for SPICE ingestion to finish with timeout of 36 hours.</p>
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/quicksight_data_set.html#ingestion_wait_policy QuicksightDataSet#ingestion_wait_policy}
  */
  readonly ingestionWaitPolicy?: QuicksightDataSetIngestionWaitPolicy;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/quicksight_data_set.html#logical_table_map QuicksightDataSet#logical_table_map}
  */
  readonly logicalTableMap?: { [key: string]: QuicksightDataSetLogicalTableMap } | cdktf.IResolvable;
  /**
  * <p>The display name for the dataset.</p>
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/quicksight_data_set.html#name QuicksightDataSet#name}
  */
  readonly name?: string;
  /**
  * <p>A list of resource permissions on the dataset.</p>
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/quicksight_data_set.html#permissions QuicksightDataSet#permissions}
  */
  readonly permissions?: QuicksightDataSetPermissions[];
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/quicksight_data_set.html#physical_table_map QuicksightDataSet#physical_table_map}
  */
  readonly physicalTableMap?: { [key: string]: QuicksightDataSetPhysicalTableMap } | cdktf.IResolvable;
  /**
  * <p>The row-level security configuration for the dataset.</p>
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/quicksight_data_set.html#row_level_permission_data_set QuicksightDataSet#row_level_permission_data_set}
  */
  readonly rowLevelPermissionDataSet?: QuicksightDataSetRowLevelPermissionDataSet;
  /**
  * <p>Contains a map of the key-value pairs for the resource tag or tags assigned to the dataset.</p>
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/quicksight_data_set.html#tags QuicksightDataSet#tags}
  */
  readonly tags?: QuicksightDataSetTags[];
}
export interface QuicksightDataSetColumnGroupsGeoSpatialColumnGroup {
  /**
  * <p>Columns in this hierarchy.</p>
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/quicksight_data_set.html#columns QuicksightDataSet#columns}
  */
  readonly columns: string[];
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/quicksight_data_set.html#country_code QuicksightDataSet#country_code}
  */
  readonly countryCode?: string;
  /**
  * <p>A display name for the hierarchy.</p>
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/quicksight_data_set.html#name QuicksightDataSet#name}
  */
  readonly name: string;
}

export function quicksightDataSetColumnGroupsGeoSpatialColumnGroupToTerraform(struct?: QuicksightDataSetColumnGroupsGeoSpatialColumnGroup): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    columns: cdktf.listMapper(cdktf.stringToTerraform)(struct!.columns),
    country_code: cdktf.stringToTerraform(struct!.countryCode),
    name: cdktf.stringToTerraform(struct!.name),
  }
}

export interface QuicksightDataSetColumnGroups {
  /**
  * <p>Geospatial column group that denotes a hierarchy.</p>
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/quicksight_data_set.html#geo_spatial_column_group QuicksightDataSet#geo_spatial_column_group}
  */
  readonly geoSpatialColumnGroup?: QuicksightDataSetColumnGroupsGeoSpatialColumnGroup;
}

export function quicksightDataSetColumnGroupsToTerraform(struct?: QuicksightDataSetColumnGroups): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    geo_spatial_column_group: quicksightDataSetColumnGroupsGeoSpatialColumnGroupToTerraform(struct!.geoSpatialColumnGroup),
  }
}

export interface QuicksightDataSetColumnLevelPermissionRules {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/quicksight_data_set.html#column_names QuicksightDataSet#column_names}
  */
  readonly columnNames?: string[];
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/quicksight_data_set.html#principals QuicksightDataSet#principals}
  */
  readonly principals?: string[];
}

export function quicksightDataSetColumnLevelPermissionRulesToTerraform(struct?: QuicksightDataSetColumnLevelPermissionRules): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    column_names: cdktf.listMapper(cdktf.stringToTerraform)(struct!.columnNames),
    principals: cdktf.listMapper(cdktf.stringToTerraform)(struct!.principals),
  }
}

export interface QuicksightDataSetFieldFolders {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/quicksight_data_set.html#columns QuicksightDataSet#columns}
  */
  readonly columns?: string[];
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/quicksight_data_set.html#description QuicksightDataSet#description}
  */
  readonly description?: string;
}

export function quicksightDataSetFieldFoldersToTerraform(struct?: QuicksightDataSetFieldFolders): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    columns: cdktf.listMapper(cdktf.stringToTerraform)(struct!.columns),
    description: cdktf.stringToTerraform(struct!.description),
  }
}

export interface QuicksightDataSetIngestionWaitPolicy {
  /**
  * <p>The maximum time (in hours) to wait for Ingestion to complete. Default timeout is 36 hours.
 Applicable only when DataSetImportMode mode is set to SPICE and WaitForSpiceIngestion is set to true.</p>
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/quicksight_data_set.html#ingestion_wait_time_in_hours QuicksightDataSet#ingestion_wait_time_in_hours}
  */
  readonly ingestionWaitTimeInHours?: number;
  /**
  * <p>Wait for SPICE ingestion to finish to mark dataset creation/update successful. Default (true).
  Applicable only when DataSetImportMode mode is set to SPICE.</p>
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/quicksight_data_set.html#wait_for_spice_ingestion QuicksightDataSet#wait_for_spice_ingestion}
  */
  readonly waitForSpiceIngestion?: boolean | cdktf.IResolvable;
}

export function quicksightDataSetIngestionWaitPolicyToTerraform(struct?: QuicksightDataSetIngestionWaitPolicy): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    ingestion_wait_time_in_hours: cdktf.numberToTerraform(struct!.ingestionWaitTimeInHours),
    wait_for_spice_ingestion: cdktf.booleanToTerraform(struct!.waitForSpiceIngestion),
  }
}

export interface QuicksightDataSetLogicalTableMapDataTransformsCastColumnTypeOperation {
  /**
  * <p>Column name.</p>
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/quicksight_data_set.html#column_name QuicksightDataSet#column_name}
  */
  readonly columnName: string;
  /**
  * <p>When casting a column from string to datetime type, you can supply a string in a
            format supported by Amazon QuickSight to denote the source data format.</p>
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/quicksight_data_set.html#format QuicksightDataSet#format}
  */
  readonly format?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/quicksight_data_set.html#new_column_type QuicksightDataSet#new_column_type}
  */
  readonly newColumnType: string;
}

export function quicksightDataSetLogicalTableMapDataTransformsCastColumnTypeOperationToTerraform(struct?: QuicksightDataSetLogicalTableMapDataTransformsCastColumnTypeOperation): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    column_name: cdktf.stringToTerraform(struct!.columnName),
    format: cdktf.stringToTerraform(struct!.format),
    new_column_type: cdktf.stringToTerraform(struct!.newColumnType),
  }
}

export interface QuicksightDataSetLogicalTableMapDataTransformsCreateColumnsOperationColumns {
  /**
  * <p>A unique ID to identify a calculated column. During a dataset update, if the column ID
            of a calculated column matches that of an existing calculated column, Amazon QuickSight
            preserves the existing calculated column.</p>
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/quicksight_data_set.html#column_id QuicksightDataSet#column_id}
  */
  readonly columnId: string;
  /**
  * <p>Column name.</p>
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/quicksight_data_set.html#column_name QuicksightDataSet#column_name}
  */
  readonly columnName: string;
  /**
  * <p>An expression that defines the calculated column.</p>
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/quicksight_data_set.html#expression QuicksightDataSet#expression}
  */
  readonly expression: string;
}

export function quicksightDataSetLogicalTableMapDataTransformsCreateColumnsOperationColumnsToTerraform(struct?: QuicksightDataSetLogicalTableMapDataTransformsCreateColumnsOperationColumns): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    column_id: cdktf.stringToTerraform(struct!.columnId),
    column_name: cdktf.stringToTerraform(struct!.columnName),
    expression: cdktf.stringToTerraform(struct!.expression),
  }
}

export interface QuicksightDataSetLogicalTableMapDataTransformsCreateColumnsOperation {
  /**
  * <p>Calculated columns to create.</p>
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/quicksight_data_set.html#columns QuicksightDataSet#columns}
  */
  readonly columns: QuicksightDataSetLogicalTableMapDataTransformsCreateColumnsOperationColumns[];
}

export function quicksightDataSetLogicalTableMapDataTransformsCreateColumnsOperationToTerraform(struct?: QuicksightDataSetLogicalTableMapDataTransformsCreateColumnsOperation): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    columns: cdktf.listMapper(quicksightDataSetLogicalTableMapDataTransformsCreateColumnsOperationColumnsToTerraform)(struct!.columns),
  }
}

export interface QuicksightDataSetLogicalTableMapDataTransformsFilterOperation {
  /**
  * <p>An expression that must evaluate to a Boolean value. Rows for which the expression
            evaluates to true are kept in the dataset.</p>
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/quicksight_data_set.html#condition_expression QuicksightDataSet#condition_expression}
  */
  readonly conditionExpression: string;
}

export function quicksightDataSetLogicalTableMapDataTransformsFilterOperationToTerraform(struct?: QuicksightDataSetLogicalTableMapDataTransformsFilterOperation): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    condition_expression: cdktf.stringToTerraform(struct!.conditionExpression),
  }
}

export interface QuicksightDataSetLogicalTableMapDataTransformsProjectOperation {
  /**
  * <p>Projected columns.</p>
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/quicksight_data_set.html#projected_columns QuicksightDataSet#projected_columns}
  */
  readonly projectedColumns: string[];
}

export function quicksightDataSetLogicalTableMapDataTransformsProjectOperationToTerraform(struct?: QuicksightDataSetLogicalTableMapDataTransformsProjectOperation): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    projected_columns: cdktf.listMapper(cdktf.stringToTerraform)(struct!.projectedColumns),
  }
}

export interface QuicksightDataSetLogicalTableMapDataTransformsRenameColumnOperation {
  /**
  * <p>The name of the column to be renamed.</p>
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/quicksight_data_set.html#column_name QuicksightDataSet#column_name}
  */
  readonly columnName: string;
  /**
  * <p>The new name for the column.</p>
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/quicksight_data_set.html#new_column_name QuicksightDataSet#new_column_name}
  */
  readonly newColumnName: string;
}

export function quicksightDataSetLogicalTableMapDataTransformsRenameColumnOperationToTerraform(struct?: QuicksightDataSetLogicalTableMapDataTransformsRenameColumnOperation): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    column_name: cdktf.stringToTerraform(struct!.columnName),
    new_column_name: cdktf.stringToTerraform(struct!.newColumnName),
  }
}

export interface QuicksightDataSetLogicalTableMapDataTransformsTagColumnOperationTagsColumnDescription {
  /**
  * <p>The text of a description for a column.</p>
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/quicksight_data_set.html#text QuicksightDataSet#text}
  */
  readonly text?: string;
}

export function quicksightDataSetLogicalTableMapDataTransformsTagColumnOperationTagsColumnDescriptionToTerraform(struct?: QuicksightDataSetLogicalTableMapDataTransformsTagColumnOperationTagsColumnDescription): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    text: cdktf.stringToTerraform(struct!.text),
  }
}

export interface QuicksightDataSetLogicalTableMapDataTransformsTagColumnOperationTags {
  /**
  * <p>Metadata that contains a description for a column.</p>
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/quicksight_data_set.html#column_description QuicksightDataSet#column_description}
  */
  readonly columnDescription?: QuicksightDataSetLogicalTableMapDataTransformsTagColumnOperationTagsColumnDescription;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/quicksight_data_set.html#column_geographic_role QuicksightDataSet#column_geographic_role}
  */
  readonly columnGeographicRole?: string;
}

export function quicksightDataSetLogicalTableMapDataTransformsTagColumnOperationTagsToTerraform(struct?: QuicksightDataSetLogicalTableMapDataTransformsTagColumnOperationTags): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    column_description: quicksightDataSetLogicalTableMapDataTransformsTagColumnOperationTagsColumnDescriptionToTerraform(struct!.columnDescription),
    column_geographic_role: cdktf.stringToTerraform(struct!.columnGeographicRole),
  }
}

export interface QuicksightDataSetLogicalTableMapDataTransformsTagColumnOperation {
  /**
  * <p>The column that this operation acts on.</p>
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/quicksight_data_set.html#column_name QuicksightDataSet#column_name}
  */
  readonly columnName: string;
  /**
  * <p>The dataset column tag, currently only used for geospatial type tagging. .</p>
        <note>
            <p>This is not tags for the AWS tagging feature. .</p>
        </note>
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/quicksight_data_set.html#tags QuicksightDataSet#tags}
  */
  readonly tags: QuicksightDataSetLogicalTableMapDataTransformsTagColumnOperationTags[];
}

export function quicksightDataSetLogicalTableMapDataTransformsTagColumnOperationToTerraform(struct?: QuicksightDataSetLogicalTableMapDataTransformsTagColumnOperation): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    column_name: cdktf.stringToTerraform(struct!.columnName),
    tags: cdktf.listMapper(quicksightDataSetLogicalTableMapDataTransformsTagColumnOperationTagsToTerraform)(struct!.tags),
  }
}

export interface QuicksightDataSetLogicalTableMapDataTransforms {
  /**
  * <p>A transform operation that casts a column to a different type.</p>
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/quicksight_data_set.html#cast_column_type_operation QuicksightDataSet#cast_column_type_operation}
  */
  readonly castColumnTypeOperation?: QuicksightDataSetLogicalTableMapDataTransformsCastColumnTypeOperation;
  /**
  * <p>A transform operation that creates calculated columns. Columns created in one such
            operation form a lexical closure.</p>
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/quicksight_data_set.html#create_columns_operation QuicksightDataSet#create_columns_operation}
  */
  readonly createColumnsOperation?: QuicksightDataSetLogicalTableMapDataTransformsCreateColumnsOperation;
  /**
  * <p>A transform operation that filters rows based on a condition.</p>
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/quicksight_data_set.html#filter_operation QuicksightDataSet#filter_operation}
  */
  readonly filterOperation?: QuicksightDataSetLogicalTableMapDataTransformsFilterOperation;
  /**
  * <p>A transform operation that projects columns. Operations that come after a projection
            can only refer to projected columns.</p>
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/quicksight_data_set.html#project_operation QuicksightDataSet#project_operation}
  */
  readonly projectOperation?: QuicksightDataSetLogicalTableMapDataTransformsProjectOperation;
  /**
  * <p>A transform operation that renames a column.</p>
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/quicksight_data_set.html#rename_column_operation QuicksightDataSet#rename_column_operation}
  */
  readonly renameColumnOperation?: QuicksightDataSetLogicalTableMapDataTransformsRenameColumnOperation;
  /**
  * <p>A transform operation that tags a column with additional information.</p>
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/quicksight_data_set.html#tag_column_operation QuicksightDataSet#tag_column_operation}
  */
  readonly tagColumnOperation?: QuicksightDataSetLogicalTableMapDataTransformsTagColumnOperation;
}

export function quicksightDataSetLogicalTableMapDataTransformsToTerraform(struct?: QuicksightDataSetLogicalTableMapDataTransforms): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    cast_column_type_operation: quicksightDataSetLogicalTableMapDataTransformsCastColumnTypeOperationToTerraform(struct!.castColumnTypeOperation),
    create_columns_operation: quicksightDataSetLogicalTableMapDataTransformsCreateColumnsOperationToTerraform(struct!.createColumnsOperation),
    filter_operation: quicksightDataSetLogicalTableMapDataTransformsFilterOperationToTerraform(struct!.filterOperation),
    project_operation: quicksightDataSetLogicalTableMapDataTransformsProjectOperationToTerraform(struct!.projectOperation),
    rename_column_operation: quicksightDataSetLogicalTableMapDataTransformsRenameColumnOperationToTerraform(struct!.renameColumnOperation),
    tag_column_operation: quicksightDataSetLogicalTableMapDataTransformsTagColumnOperationToTerraform(struct!.tagColumnOperation),
  }
}

export interface QuicksightDataSetLogicalTableMapSourceJoinInstructionLeftJoinKeyProperties {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/quicksight_data_set.html#unique_key QuicksightDataSet#unique_key}
  */
  readonly uniqueKey?: boolean | cdktf.IResolvable;
}

export function quicksightDataSetLogicalTableMapSourceJoinInstructionLeftJoinKeyPropertiesToTerraform(struct?: QuicksightDataSetLogicalTableMapSourceJoinInstructionLeftJoinKeyProperties): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    unique_key: cdktf.booleanToTerraform(struct!.uniqueKey),
  }
}

export interface QuicksightDataSetLogicalTableMapSourceJoinInstructionRightJoinKeyProperties {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/quicksight_data_set.html#unique_key QuicksightDataSet#unique_key}
  */
  readonly uniqueKey?: boolean | cdktf.IResolvable;
}

export function quicksightDataSetLogicalTableMapSourceJoinInstructionRightJoinKeyPropertiesToTerraform(struct?: QuicksightDataSetLogicalTableMapSourceJoinInstructionRightJoinKeyProperties): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    unique_key: cdktf.booleanToTerraform(struct!.uniqueKey),
  }
}

export interface QuicksightDataSetLogicalTableMapSourceJoinInstruction {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/quicksight_data_set.html#left_join_key_properties QuicksightDataSet#left_join_key_properties}
  */
  readonly leftJoinKeyProperties?: QuicksightDataSetLogicalTableMapSourceJoinInstructionLeftJoinKeyProperties;
  /**
  * <p>Left operand.</p>
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/quicksight_data_set.html#left_operand QuicksightDataSet#left_operand}
  */
  readonly leftOperand: string;
  /**
  * <p>On Clause.</p>
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/quicksight_data_set.html#on_clause QuicksightDataSet#on_clause}
  */
  readonly onClause: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/quicksight_data_set.html#right_join_key_properties QuicksightDataSet#right_join_key_properties}
  */
  readonly rightJoinKeyProperties?: QuicksightDataSetLogicalTableMapSourceJoinInstructionRightJoinKeyProperties;
  /**
  * <p>Right operand.</p>
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/quicksight_data_set.html#right_operand QuicksightDataSet#right_operand}
  */
  readonly rightOperand: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/quicksight_data_set.html#type QuicksightDataSet#type}
  */
  readonly type: string;
}

export function quicksightDataSetLogicalTableMapSourceJoinInstructionToTerraform(struct?: QuicksightDataSetLogicalTableMapSourceJoinInstruction): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    left_join_key_properties: quicksightDataSetLogicalTableMapSourceJoinInstructionLeftJoinKeyPropertiesToTerraform(struct!.leftJoinKeyProperties),
    left_operand: cdktf.stringToTerraform(struct!.leftOperand),
    on_clause: cdktf.stringToTerraform(struct!.onClause),
    right_join_key_properties: quicksightDataSetLogicalTableMapSourceJoinInstructionRightJoinKeyPropertiesToTerraform(struct!.rightJoinKeyProperties),
    right_operand: cdktf.stringToTerraform(struct!.rightOperand),
    type: cdktf.stringToTerraform(struct!.type),
  }
}

export interface QuicksightDataSetLogicalTableMapSource {
  /**
  * <p>Join instruction.</p>
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/quicksight_data_set.html#join_instruction QuicksightDataSet#join_instruction}
  */
  readonly joinInstruction?: QuicksightDataSetLogicalTableMapSourceJoinInstruction;
  /**
  * <p>Physical table ID.</p>
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/quicksight_data_set.html#physical_table_id QuicksightDataSet#physical_table_id}
  */
  readonly physicalTableId?: string;
}

export function quicksightDataSetLogicalTableMapSourceToTerraform(struct?: QuicksightDataSetLogicalTableMapSource): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    join_instruction: quicksightDataSetLogicalTableMapSourceJoinInstructionToTerraform(struct!.joinInstruction),
    physical_table_id: cdktf.stringToTerraform(struct!.physicalTableId),
  }
}

export interface QuicksightDataSetLogicalTableMap {
  /**
  * <p>A display name for the logical table.</p>
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/quicksight_data_set.html#alias QuicksightDataSet#alias}
  */
  readonly alias?: string;
  /**
  * <p>Transform operations that act on this logical table.</p>
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/quicksight_data_set.html#data_transforms QuicksightDataSet#data_transforms}
  */
  readonly dataTransforms?: QuicksightDataSetLogicalTableMapDataTransforms[];
  /**
  * <p>Information about the source of a logical table. This is a variant type structure. For
            this structure to be valid, only one of the attributes can be non-null.</p>
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/quicksight_data_set.html#source QuicksightDataSet#source}
  */
  readonly source?: QuicksightDataSetLogicalTableMapSource;
}

export function quicksightDataSetLogicalTableMapToTerraform(struct?: QuicksightDataSetLogicalTableMap): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    alias: cdktf.stringToTerraform(struct!.alias),
    data_transforms: cdktf.listMapper(quicksightDataSetLogicalTableMapDataTransformsToTerraform)(struct!.dataTransforms),
    source: quicksightDataSetLogicalTableMapSourceToTerraform(struct!.source),
  }
}

export class QuicksightDataSetOutputColumns extends cdktf.ComplexComputedList {

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

  // type - computed: true, optional: true, required: false
  private _type?: string;
  public get type() {
    return this.getStringAttribute('type');
  }
  public set type(value: string) {
    this._type = value;
  }
  public resetType() {
    this._type = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get typeInput() {
    return this._type
  }
}

export function quicksightDataSetOutputColumnsToTerraform(struct?: QuicksightDataSetOutputColumns): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    description: cdktf.stringToTerraform(struct!.description),
    name: cdktf.stringToTerraform(struct!.name),
    type: cdktf.stringToTerraform(struct!.type),
  }
}

export interface QuicksightDataSetPermissions {
  /**
  * <p>The IAM action to grant or revoke permissions on.</p>
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/quicksight_data_set.html#actions QuicksightDataSet#actions}
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
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/quicksight_data_set.html#principal QuicksightDataSet#principal}
  */
  readonly principal: string;
}

export function quicksightDataSetPermissionsToTerraform(struct?: QuicksightDataSetPermissions): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    actions: cdktf.listMapper(cdktf.stringToTerraform)(struct!.actions),
    principal: cdktf.stringToTerraform(struct!.principal),
  }
}

export interface QuicksightDataSetPhysicalTableMapCustomSqlColumns {
  /**
  * <p>The name of this column in the underlying data source.</p>
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/quicksight_data_set.html#name QuicksightDataSet#name}
  */
  readonly name: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/quicksight_data_set.html#type QuicksightDataSet#type}
  */
  readonly type: string;
}

export function quicksightDataSetPhysicalTableMapCustomSqlColumnsToTerraform(struct?: QuicksightDataSetPhysicalTableMapCustomSqlColumns): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    name: cdktf.stringToTerraform(struct!.name),
    type: cdktf.stringToTerraform(struct!.type),
  }
}

export interface QuicksightDataSetPhysicalTableMapCustomSql {
  /**
  * <p>The column schema from the SQL query result set.</p>
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/quicksight_data_set.html#columns QuicksightDataSet#columns}
  */
  readonly columns: QuicksightDataSetPhysicalTableMapCustomSqlColumns[];
  /**
  * <p>The Amazon Resource Name (ARN) of the data source.</p>
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/quicksight_data_set.html#data_source_arn QuicksightDataSet#data_source_arn}
  */
  readonly dataSourceArn: string;
  /**
  * <p>A display name for the SQL query result.</p>
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/quicksight_data_set.html#name QuicksightDataSet#name}
  */
  readonly name: string;
  /**
  * <p>The SQL query.</p>
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/quicksight_data_set.html#sql_query QuicksightDataSet#sql_query}
  */
  readonly sqlQuery: string;
}

export function quicksightDataSetPhysicalTableMapCustomSqlToTerraform(struct?: QuicksightDataSetPhysicalTableMapCustomSql): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    columns: cdktf.listMapper(quicksightDataSetPhysicalTableMapCustomSqlColumnsToTerraform)(struct!.columns),
    data_source_arn: cdktf.stringToTerraform(struct!.dataSourceArn),
    name: cdktf.stringToTerraform(struct!.name),
    sql_query: cdktf.stringToTerraform(struct!.sqlQuery),
  }
}

export interface QuicksightDataSetPhysicalTableMapRelationalTableInputColumns {
  /**
  * <p>The name of this column in the underlying data source.</p>
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/quicksight_data_set.html#name QuicksightDataSet#name}
  */
  readonly name: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/quicksight_data_set.html#type QuicksightDataSet#type}
  */
  readonly type: string;
}

export function quicksightDataSetPhysicalTableMapRelationalTableInputColumnsToTerraform(struct?: QuicksightDataSetPhysicalTableMapRelationalTableInputColumns): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    name: cdktf.stringToTerraform(struct!.name),
    type: cdktf.stringToTerraform(struct!.type),
  }
}

export interface QuicksightDataSetPhysicalTableMapRelationalTable {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/quicksight_data_set.html#catalog QuicksightDataSet#catalog}
  */
  readonly catalog?: string;
  /**
  * <p>The Amazon Resource Name (ARN) for the data source.</p>
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/quicksight_data_set.html#data_source_arn QuicksightDataSet#data_source_arn}
  */
  readonly dataSourceArn: string;
  /**
  * <p>The column schema of the table.</p>
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/quicksight_data_set.html#input_columns QuicksightDataSet#input_columns}
  */
  readonly inputColumns: QuicksightDataSetPhysicalTableMapRelationalTableInputColumns[];
  /**
  * <p>The name of the relational table.</p>
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/quicksight_data_set.html#name QuicksightDataSet#name}
  */
  readonly name: string;
  /**
  * <p>The schema name. This name applies to certain relational database engines.</p>
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/quicksight_data_set.html#schema QuicksightDataSet#schema}
  */
  readonly schema?: string;
}

export function quicksightDataSetPhysicalTableMapRelationalTableToTerraform(struct?: QuicksightDataSetPhysicalTableMapRelationalTable): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    catalog: cdktf.stringToTerraform(struct!.catalog),
    data_source_arn: cdktf.stringToTerraform(struct!.dataSourceArn),
    input_columns: cdktf.listMapper(quicksightDataSetPhysicalTableMapRelationalTableInputColumnsToTerraform)(struct!.inputColumns),
    name: cdktf.stringToTerraform(struct!.name),
    schema: cdktf.stringToTerraform(struct!.schema),
  }
}

export interface QuicksightDataSetPhysicalTableMapS3SourceInputColumns {
  /**
  * <p>The name of this column in the underlying data source.</p>
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/quicksight_data_set.html#name QuicksightDataSet#name}
  */
  readonly name: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/quicksight_data_set.html#type QuicksightDataSet#type}
  */
  readonly type: string;
}

export function quicksightDataSetPhysicalTableMapS3SourceInputColumnsToTerraform(struct?: QuicksightDataSetPhysicalTableMapS3SourceInputColumns): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    name: cdktf.stringToTerraform(struct!.name),
    type: cdktf.stringToTerraform(struct!.type),
  }
}

export interface QuicksightDataSetPhysicalTableMapS3SourceUploadSettings {
  /**
  * <p>Whether the file has a header row, or the files each have a header row.</p>
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/quicksight_data_set.html#contains_header QuicksightDataSet#contains_header}
  */
  readonly containsHeader?: boolean | cdktf.IResolvable;
  /**
  * <p>The delimiter between values in the file.</p>
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/quicksight_data_set.html#delimiter QuicksightDataSet#delimiter}
  */
  readonly delimiter?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/quicksight_data_set.html#format QuicksightDataSet#format}
  */
  readonly format?: string;
  /**
  * <p>A row number to start reading data from.</p>
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/quicksight_data_set.html#start_from_row QuicksightDataSet#start_from_row}
  */
  readonly startFromRow?: number;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/quicksight_data_set.html#text_qualifier QuicksightDataSet#text_qualifier}
  */
  readonly textQualifier?: string;
}

export function quicksightDataSetPhysicalTableMapS3SourceUploadSettingsToTerraform(struct?: QuicksightDataSetPhysicalTableMapS3SourceUploadSettings): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    contains_header: cdktf.booleanToTerraform(struct!.containsHeader),
    delimiter: cdktf.stringToTerraform(struct!.delimiter),
    format: cdktf.stringToTerraform(struct!.format),
    start_from_row: cdktf.numberToTerraform(struct!.startFromRow),
    text_qualifier: cdktf.stringToTerraform(struct!.textQualifier),
  }
}

export interface QuicksightDataSetPhysicalTableMapS3Source {
  /**
  * <p>The amazon Resource Name (ARN) for the data source.</p>
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/quicksight_data_set.html#data_source_arn QuicksightDataSet#data_source_arn}
  */
  readonly dataSourceArn: string;
  /**
  * <p>A physical table type for as S3 data source.</p>
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/quicksight_data_set.html#input_columns QuicksightDataSet#input_columns}
  */
  readonly inputColumns: QuicksightDataSetPhysicalTableMapS3SourceInputColumns[];
  /**
  * <p>Information about the format for a source file or files.</p>
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/quicksight_data_set.html#upload_settings QuicksightDataSet#upload_settings}
  */
  readonly uploadSettings?: QuicksightDataSetPhysicalTableMapS3SourceUploadSettings;
}

export function quicksightDataSetPhysicalTableMapS3SourceToTerraform(struct?: QuicksightDataSetPhysicalTableMapS3Source): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    data_source_arn: cdktf.stringToTerraform(struct!.dataSourceArn),
    input_columns: cdktf.listMapper(quicksightDataSetPhysicalTableMapS3SourceInputColumnsToTerraform)(struct!.inputColumns),
    upload_settings: quicksightDataSetPhysicalTableMapS3SourceUploadSettingsToTerraform(struct!.uploadSettings),
  }
}

export interface QuicksightDataSetPhysicalTableMap {
  /**
  * <p>A physical table type built from the results of the custom SQL query.</p>
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/quicksight_data_set.html#custom_sql QuicksightDataSet#custom_sql}
  */
  readonly customSql?: QuicksightDataSetPhysicalTableMapCustomSql;
  /**
  * <p>A physical table type for relational data sources.</p>
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/quicksight_data_set.html#relational_table QuicksightDataSet#relational_table}
  */
  readonly relationalTable?: QuicksightDataSetPhysicalTableMapRelationalTable;
  /**
  * <p>A physical table type for as S3 data source.</p>
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/quicksight_data_set.html#s3_source QuicksightDataSet#s3_source}
  */
  readonly s3Source?: QuicksightDataSetPhysicalTableMapS3Source;
}

export function quicksightDataSetPhysicalTableMapToTerraform(struct?: QuicksightDataSetPhysicalTableMap): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    custom_sql: quicksightDataSetPhysicalTableMapCustomSqlToTerraform(struct!.customSql),
    relational_table: quicksightDataSetPhysicalTableMapRelationalTableToTerraform(struct!.relationalTable),
    s3_source: quicksightDataSetPhysicalTableMapS3SourceToTerraform(struct!.s3Source),
  }
}

export interface QuicksightDataSetRowLevelPermissionDataSet {
  /**
  * <p>The Amazon Resource Name (ARN) of the permission dataset.</p>
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/quicksight_data_set.html#arn QuicksightDataSet#arn}
  */
  readonly arn: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/quicksight_data_set.html#format_version QuicksightDataSet#format_version}
  */
  readonly formatVersion?: string;
  /**
  * <p>The namespace associated with the row-level permissions dataset.</p>
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/quicksight_data_set.html#namespace QuicksightDataSet#namespace}
  */
  readonly namespace?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/quicksight_data_set.html#permission_policy QuicksightDataSet#permission_policy}
  */
  readonly permissionPolicy: string;
}

export function quicksightDataSetRowLevelPermissionDataSetToTerraform(struct?: QuicksightDataSetRowLevelPermissionDataSet): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    arn: cdktf.stringToTerraform(struct!.arn),
    format_version: cdktf.stringToTerraform(struct!.formatVersion),
    namespace: cdktf.stringToTerraform(struct!.namespace),
    permission_policy: cdktf.stringToTerraform(struct!.permissionPolicy),
  }
}

export interface QuicksightDataSetTags {
  /**
  * <p>Tag key.</p>
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/quicksight_data_set.html#key QuicksightDataSet#key}
  */
  readonly key: string;
  /**
  * <p>Tag value.</p>
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/quicksight_data_set.html#value QuicksightDataSet#value}
  */
  readonly value: string;
}

export function quicksightDataSetTagsToTerraform(struct?: QuicksightDataSetTags): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    key: cdktf.stringToTerraform(struct!.key),
    value: cdktf.stringToTerraform(struct!.value),
  }
}


/**
* Represents a {@link https://www.terraform.io/docs/providers/awscc/r/quicksight_data_set.html awscc_quicksight_data_set}
*/
export class QuicksightDataSet extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType: string = "awscc_quicksight_data_set";

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://www.terraform.io/docs/providers/awscc/r/quicksight_data_set.html awscc_quicksight_data_set} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options QuicksightDataSetConfig = {}
  */
  public constructor(scope: Construct, id: string, config: QuicksightDataSetConfig = {}) {
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
    this._awsAccountId = config.awsAccountId;
    this._columnGroups = config.columnGroups;
    this._columnLevelPermissionRules = config.columnLevelPermissionRules;
    this._dataSetId = config.dataSetId;
    this._fieldFolders = config.fieldFolders;
    this._importMode = config.importMode;
    this._ingestionWaitPolicy = config.ingestionWaitPolicy;
    this._logicalTableMap = config.logicalTableMap;
    this._name = config.name;
    this._permissions = config.permissions;
    this._physicalTableMap = config.physicalTableMap;
    this._rowLevelPermissionDataSet = config.rowLevelPermissionDataSet;
    this._tags = config.tags;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // arn - computed: true, optional: false, required: false
  public get arn() {
    return this.getStringAttribute('arn');
  }

  // aws_account_id - computed: true, optional: true, required: false
  private _awsAccountId?: string;
  public get awsAccountId() {
    return this.getStringAttribute('aws_account_id');
  }
  public set awsAccountId(value: string) {
    this._awsAccountId = value;
  }
  public resetAwsAccountId() {
    this._awsAccountId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get awsAccountIdInput() {
    return this._awsAccountId
  }

  // column_groups - computed: false, optional: true, required: false
  private _columnGroups?: QuicksightDataSetColumnGroups[];
  public get columnGroups() {
    return this.interpolationForAttribute('column_groups') as any;
  }
  public set columnGroups(value: QuicksightDataSetColumnGroups[] ) {
    this._columnGroups = value;
  }
  public resetColumnGroups() {
    this._columnGroups = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get columnGroupsInput() {
    return this._columnGroups
  }

  // column_level_permission_rules - computed: false, optional: true, required: false
  private _columnLevelPermissionRules?: QuicksightDataSetColumnLevelPermissionRules[];
  public get columnLevelPermissionRules() {
    return this.interpolationForAttribute('column_level_permission_rules') as any;
  }
  public set columnLevelPermissionRules(value: QuicksightDataSetColumnLevelPermissionRules[] ) {
    this._columnLevelPermissionRules = value;
  }
  public resetColumnLevelPermissionRules() {
    this._columnLevelPermissionRules = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get columnLevelPermissionRulesInput() {
    return this._columnLevelPermissionRules
  }

  // consumed_spice_capacity_in_bytes - computed: true, optional: false, required: false
  public get consumedSpiceCapacityInBytes() {
    return this.getNumberAttribute('consumed_spice_capacity_in_bytes');
  }

  // created_time - computed: true, optional: false, required: false
  public get createdTime() {
    return this.getStringAttribute('created_time');
  }

  // data_set_id - computed: true, optional: true, required: false
  private _dataSetId?: string;
  public get dataSetId() {
    return this.getStringAttribute('data_set_id');
  }
  public set dataSetId(value: string) {
    this._dataSetId = value;
  }
  public resetDataSetId() {
    this._dataSetId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dataSetIdInput() {
    return this._dataSetId
  }

  // field_folders - computed: false, optional: true, required: false
  private _fieldFolders?: { [key: string]: QuicksightDataSetFieldFolders } | cdktf.IResolvable;
  public get fieldFolders() {
    return this.interpolationForAttribute('field_folders') as any;
  }
  public set fieldFolders(value: { [key: string]: QuicksightDataSetFieldFolders } | cdktf.IResolvable ) {
    this._fieldFolders = value;
  }
  public resetFieldFolders() {
    this._fieldFolders = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get fieldFoldersInput() {
    return this._fieldFolders
  }

  // id - computed: true, optional: false, required: false
  public get id() {
    return this.getStringAttribute('id');
  }

  // import_mode - computed: false, optional: true, required: false
  private _importMode?: string;
  public get importMode() {
    return this.getStringAttribute('import_mode');
  }
  public set importMode(value: string ) {
    this._importMode = value;
  }
  public resetImportMode() {
    this._importMode = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get importModeInput() {
    return this._importMode
  }

  // ingestion_wait_policy - computed: false, optional: true, required: false
  private _ingestionWaitPolicy?: QuicksightDataSetIngestionWaitPolicy;
  public get ingestionWaitPolicy() {
    return this.interpolationForAttribute('ingestion_wait_policy') as any;
  }
  public set ingestionWaitPolicy(value: QuicksightDataSetIngestionWaitPolicy ) {
    this._ingestionWaitPolicy = value;
  }
  public resetIngestionWaitPolicy() {
    this._ingestionWaitPolicy = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ingestionWaitPolicyInput() {
    return this._ingestionWaitPolicy
  }

  // last_updated_time - computed: true, optional: false, required: false
  public get lastUpdatedTime() {
    return this.getStringAttribute('last_updated_time');
  }

  // logical_table_map - computed: false, optional: true, required: false
  private _logicalTableMap?: { [key: string]: QuicksightDataSetLogicalTableMap } | cdktf.IResolvable;
  public get logicalTableMap() {
    return this.interpolationForAttribute('logical_table_map') as any;
  }
  public set logicalTableMap(value: { [key: string]: QuicksightDataSetLogicalTableMap } | cdktf.IResolvable ) {
    this._logicalTableMap = value;
  }
  public resetLogicalTableMap() {
    this._logicalTableMap = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get logicalTableMapInput() {
    return this._logicalTableMap
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

  // output_columns - computed: true, optional: false, required: false
  public get outputColumns() {
    return this.interpolationForAttribute('output_columns') as any;
  }

  // permissions - computed: false, optional: true, required: false
  private _permissions?: QuicksightDataSetPermissions[];
  public get permissions() {
    return this.interpolationForAttribute('permissions') as any;
  }
  public set permissions(value: QuicksightDataSetPermissions[] ) {
    this._permissions = value;
  }
  public resetPermissions() {
    this._permissions = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get permissionsInput() {
    return this._permissions
  }

  // physical_table_map - computed: false, optional: true, required: false
  private _physicalTableMap?: { [key: string]: QuicksightDataSetPhysicalTableMap } | cdktf.IResolvable;
  public get physicalTableMap() {
    return this.interpolationForAttribute('physical_table_map') as any;
  }
  public set physicalTableMap(value: { [key: string]: QuicksightDataSetPhysicalTableMap } | cdktf.IResolvable ) {
    this._physicalTableMap = value;
  }
  public resetPhysicalTableMap() {
    this._physicalTableMap = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get physicalTableMapInput() {
    return this._physicalTableMap
  }

  // row_level_permission_data_set - computed: false, optional: true, required: false
  private _rowLevelPermissionDataSet?: QuicksightDataSetRowLevelPermissionDataSet;
  public get rowLevelPermissionDataSet() {
    return this.interpolationForAttribute('row_level_permission_data_set') as any;
  }
  public set rowLevelPermissionDataSet(value: QuicksightDataSetRowLevelPermissionDataSet ) {
    this._rowLevelPermissionDataSet = value;
  }
  public resetRowLevelPermissionDataSet() {
    this._rowLevelPermissionDataSet = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get rowLevelPermissionDataSetInput() {
    return this._rowLevelPermissionDataSet
  }

  // tags - computed: false, optional: true, required: false
  private _tags?: QuicksightDataSetTags[];
  public get tags() {
    return this.interpolationForAttribute('tags') as any;
  }
  public set tags(value: QuicksightDataSetTags[] ) {
    this._tags = value;
  }
  public resetTags() {
    this._tags = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tagsInput() {
    return this._tags
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      aws_account_id: cdktf.stringToTerraform(this._awsAccountId),
      column_groups: cdktf.listMapper(quicksightDataSetColumnGroupsToTerraform)(this._columnGroups),
      column_level_permission_rules: cdktf.listMapper(quicksightDataSetColumnLevelPermissionRulesToTerraform)(this._columnLevelPermissionRules),
      data_set_id: cdktf.stringToTerraform(this._dataSetId),
      field_folders: cdktf.hashMapper(cdktf.anyToTerraform)(this._fieldFolders),
      import_mode: cdktf.stringToTerraform(this._importMode),
      ingestion_wait_policy: quicksightDataSetIngestionWaitPolicyToTerraform(this._ingestionWaitPolicy),
      logical_table_map: cdktf.hashMapper(cdktf.anyToTerraform)(this._logicalTableMap),
      name: cdktf.stringToTerraform(this._name),
      permissions: cdktf.listMapper(quicksightDataSetPermissionsToTerraform)(this._permissions),
      physical_table_map: cdktf.hashMapper(cdktf.anyToTerraform)(this._physicalTableMap),
      row_level_permission_data_set: quicksightDataSetRowLevelPermissionDataSetToTerraform(this._rowLevelPermissionDataSet),
      tags: cdktf.listMapper(quicksightDataSetTagsToTerraform)(this._tags),
    };
  }
}
