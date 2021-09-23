import { Construct } from 'constructs';
import * as cdktf from 'cdktf';
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
    readonly fieldFolders?: {
        [key: string]: QuicksightDataSetFieldFolders;
    } | cdktf.IResolvable;
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
    readonly logicalTableMap?: {
        [key: string]: QuicksightDataSetLogicalTableMap;
    } | cdktf.IResolvable;
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
    readonly physicalTableMap?: {
        [key: string]: QuicksightDataSetPhysicalTableMap;
    } | cdktf.IResolvable;
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
export declare function quicksightDataSetColumnGroupsGeoSpatialColumnGroupToTerraform(struct?: QuicksightDataSetColumnGroupsGeoSpatialColumnGroup): any;
export interface QuicksightDataSetColumnGroups {
    /**
    * <p>Geospatial column group that denotes a hierarchy.</p>
    *
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/quicksight_data_set.html#geo_spatial_column_group QuicksightDataSet#geo_spatial_column_group}
    */
    readonly geoSpatialColumnGroup?: QuicksightDataSetColumnGroupsGeoSpatialColumnGroup;
}
export declare function quicksightDataSetColumnGroupsToTerraform(struct?: QuicksightDataSetColumnGroups): any;
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
export declare function quicksightDataSetColumnLevelPermissionRulesToTerraform(struct?: QuicksightDataSetColumnLevelPermissionRules): any;
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
export declare function quicksightDataSetFieldFoldersToTerraform(struct?: QuicksightDataSetFieldFolders): any;
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
export declare function quicksightDataSetIngestionWaitPolicyToTerraform(struct?: QuicksightDataSetIngestionWaitPolicy): any;
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
export declare function quicksightDataSetLogicalTableMapDataTransformsCastColumnTypeOperationToTerraform(struct?: QuicksightDataSetLogicalTableMapDataTransformsCastColumnTypeOperation): any;
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
export declare function quicksightDataSetLogicalTableMapDataTransformsCreateColumnsOperationColumnsToTerraform(struct?: QuicksightDataSetLogicalTableMapDataTransformsCreateColumnsOperationColumns): any;
export interface QuicksightDataSetLogicalTableMapDataTransformsCreateColumnsOperation {
    /**
    * <p>Calculated columns to create.</p>
    *
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/quicksight_data_set.html#columns QuicksightDataSet#columns}
    */
    readonly columns: QuicksightDataSetLogicalTableMapDataTransformsCreateColumnsOperationColumns[];
}
export declare function quicksightDataSetLogicalTableMapDataTransformsCreateColumnsOperationToTerraform(struct?: QuicksightDataSetLogicalTableMapDataTransformsCreateColumnsOperation): any;
export interface QuicksightDataSetLogicalTableMapDataTransformsFilterOperation {
    /**
    * <p>An expression that must evaluate to a Boolean value. Rows for which the expression
              evaluates to true are kept in the dataset.</p>
    *
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/quicksight_data_set.html#condition_expression QuicksightDataSet#condition_expression}
    */
    readonly conditionExpression: string;
}
export declare function quicksightDataSetLogicalTableMapDataTransformsFilterOperationToTerraform(struct?: QuicksightDataSetLogicalTableMapDataTransformsFilterOperation): any;
export interface QuicksightDataSetLogicalTableMapDataTransformsProjectOperation {
    /**
    * <p>Projected columns.</p>
    *
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/quicksight_data_set.html#projected_columns QuicksightDataSet#projected_columns}
    */
    readonly projectedColumns: string[];
}
export declare function quicksightDataSetLogicalTableMapDataTransformsProjectOperationToTerraform(struct?: QuicksightDataSetLogicalTableMapDataTransformsProjectOperation): any;
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
export declare function quicksightDataSetLogicalTableMapDataTransformsRenameColumnOperationToTerraform(struct?: QuicksightDataSetLogicalTableMapDataTransformsRenameColumnOperation): any;
export interface QuicksightDataSetLogicalTableMapDataTransformsTagColumnOperationTagsColumnDescription {
    /**
    * <p>The text of a description for a column.</p>
    *
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/quicksight_data_set.html#text QuicksightDataSet#text}
    */
    readonly text?: string;
}
export declare function quicksightDataSetLogicalTableMapDataTransformsTagColumnOperationTagsColumnDescriptionToTerraform(struct?: QuicksightDataSetLogicalTableMapDataTransformsTagColumnOperationTagsColumnDescription): any;
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
export declare function quicksightDataSetLogicalTableMapDataTransformsTagColumnOperationTagsToTerraform(struct?: QuicksightDataSetLogicalTableMapDataTransformsTagColumnOperationTags): any;
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
export declare function quicksightDataSetLogicalTableMapDataTransformsTagColumnOperationToTerraform(struct?: QuicksightDataSetLogicalTableMapDataTransformsTagColumnOperation): any;
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
export declare function quicksightDataSetLogicalTableMapDataTransformsToTerraform(struct?: QuicksightDataSetLogicalTableMapDataTransforms): any;
export interface QuicksightDataSetLogicalTableMapSourceJoinInstructionLeftJoinKeyProperties {
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/quicksight_data_set.html#unique_key QuicksightDataSet#unique_key}
    */
    readonly uniqueKey?: boolean | cdktf.IResolvable;
}
export declare function quicksightDataSetLogicalTableMapSourceJoinInstructionLeftJoinKeyPropertiesToTerraform(struct?: QuicksightDataSetLogicalTableMapSourceJoinInstructionLeftJoinKeyProperties): any;
export interface QuicksightDataSetLogicalTableMapSourceJoinInstructionRightJoinKeyProperties {
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/quicksight_data_set.html#unique_key QuicksightDataSet#unique_key}
    */
    readonly uniqueKey?: boolean | cdktf.IResolvable;
}
export declare function quicksightDataSetLogicalTableMapSourceJoinInstructionRightJoinKeyPropertiesToTerraform(struct?: QuicksightDataSetLogicalTableMapSourceJoinInstructionRightJoinKeyProperties): any;
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
export declare function quicksightDataSetLogicalTableMapSourceJoinInstructionToTerraform(struct?: QuicksightDataSetLogicalTableMapSourceJoinInstruction): any;
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
export declare function quicksightDataSetLogicalTableMapSourceToTerraform(struct?: QuicksightDataSetLogicalTableMapSource): any;
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
export declare function quicksightDataSetLogicalTableMapToTerraform(struct?: QuicksightDataSetLogicalTableMap): any;
export declare class QuicksightDataSetOutputColumns extends cdktf.ComplexComputedList {
    private _description?;
    get description(): string;
    set description(value: string);
    resetDescription(): void;
    get descriptionInput(): string | undefined;
    private _name?;
    get name(): string;
    set name(value: string);
    resetName(): void;
    get nameInput(): string | undefined;
    private _type?;
    get type(): string;
    set type(value: string);
    resetType(): void;
    get typeInput(): string | undefined;
}
export declare function quicksightDataSetOutputColumnsToTerraform(struct?: QuicksightDataSetOutputColumns): any;
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
export declare function quicksightDataSetPermissionsToTerraform(struct?: QuicksightDataSetPermissions): any;
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
export declare function quicksightDataSetPhysicalTableMapCustomSqlColumnsToTerraform(struct?: QuicksightDataSetPhysicalTableMapCustomSqlColumns): any;
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
export declare function quicksightDataSetPhysicalTableMapCustomSqlToTerraform(struct?: QuicksightDataSetPhysicalTableMapCustomSql): any;
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
export declare function quicksightDataSetPhysicalTableMapRelationalTableInputColumnsToTerraform(struct?: QuicksightDataSetPhysicalTableMapRelationalTableInputColumns): any;
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
export declare function quicksightDataSetPhysicalTableMapRelationalTableToTerraform(struct?: QuicksightDataSetPhysicalTableMapRelationalTable): any;
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
export declare function quicksightDataSetPhysicalTableMapS3SourceInputColumnsToTerraform(struct?: QuicksightDataSetPhysicalTableMapS3SourceInputColumns): any;
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
export declare function quicksightDataSetPhysicalTableMapS3SourceUploadSettingsToTerraform(struct?: QuicksightDataSetPhysicalTableMapS3SourceUploadSettings): any;
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
export declare function quicksightDataSetPhysicalTableMapS3SourceToTerraform(struct?: QuicksightDataSetPhysicalTableMapS3Source): any;
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
export declare function quicksightDataSetPhysicalTableMapToTerraform(struct?: QuicksightDataSetPhysicalTableMap): any;
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
export declare function quicksightDataSetRowLevelPermissionDataSetToTerraform(struct?: QuicksightDataSetRowLevelPermissionDataSet): any;
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
export declare function quicksightDataSetTagsToTerraform(struct?: QuicksightDataSetTags): any;
/**
* Represents a {@link https://www.terraform.io/docs/providers/awscc/r/quicksight_data_set.html awscc_quicksight_data_set}
*/
export declare class QuicksightDataSet extends cdktf.TerraformResource {
    static readonly tfResourceType: string;
    /**
    * Create a new {@link https://www.terraform.io/docs/providers/awscc/r/quicksight_data_set.html awscc_quicksight_data_set} Resource
    *
    * @param scope The scope in which to define this construct
    * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
    * @param options QuicksightDataSetConfig = {}
    */
    constructor(scope: Construct, id: string, config?: QuicksightDataSetConfig);
    get arn(): string;
    private _awsAccountId?;
    get awsAccountId(): string;
    set awsAccountId(value: string);
    resetAwsAccountId(): void;
    get awsAccountIdInput(): string | undefined;
    private _columnGroups?;
    get columnGroups(): QuicksightDataSetColumnGroups[];
    set columnGroups(value: QuicksightDataSetColumnGroups[]);
    resetColumnGroups(): void;
    get columnGroupsInput(): QuicksightDataSetColumnGroups[] | undefined;
    private _columnLevelPermissionRules?;
    get columnLevelPermissionRules(): QuicksightDataSetColumnLevelPermissionRules[];
    set columnLevelPermissionRules(value: QuicksightDataSetColumnLevelPermissionRules[]);
    resetColumnLevelPermissionRules(): void;
    get columnLevelPermissionRulesInput(): QuicksightDataSetColumnLevelPermissionRules[] | undefined;
    get consumedSpiceCapacityInBytes(): number;
    get createdTime(): string;
    private _dataSetId?;
    get dataSetId(): string;
    set dataSetId(value: string);
    resetDataSetId(): void;
    get dataSetIdInput(): string | undefined;
    private _fieldFolders?;
    get fieldFolders(): {
        [key: string]: QuicksightDataSetFieldFolders;
    } | cdktf.IResolvable;
    set fieldFolders(value: {
        [key: string]: QuicksightDataSetFieldFolders;
    } | cdktf.IResolvable);
    resetFieldFolders(): void;
    get fieldFoldersInput(): cdktf.IResolvable | {
        [key: string]: QuicksightDataSetFieldFolders;
    } | undefined;
    get id(): string;
    private _importMode?;
    get importMode(): string;
    set importMode(value: string);
    resetImportMode(): void;
    get importModeInput(): string | undefined;
    private _ingestionWaitPolicy?;
    get ingestionWaitPolicy(): QuicksightDataSetIngestionWaitPolicy;
    set ingestionWaitPolicy(value: QuicksightDataSetIngestionWaitPolicy);
    resetIngestionWaitPolicy(): void;
    get ingestionWaitPolicyInput(): QuicksightDataSetIngestionWaitPolicy | undefined;
    get lastUpdatedTime(): string;
    private _logicalTableMap?;
    get logicalTableMap(): {
        [key: string]: QuicksightDataSetLogicalTableMap;
    } | cdktf.IResolvable;
    set logicalTableMap(value: {
        [key: string]: QuicksightDataSetLogicalTableMap;
    } | cdktf.IResolvable);
    resetLogicalTableMap(): void;
    get logicalTableMapInput(): cdktf.IResolvable | {
        [key: string]: QuicksightDataSetLogicalTableMap;
    } | undefined;
    private _name?;
    get name(): string;
    set name(value: string);
    resetName(): void;
    get nameInput(): string | undefined;
    get outputColumns(): any;
    private _permissions?;
    get permissions(): QuicksightDataSetPermissions[];
    set permissions(value: QuicksightDataSetPermissions[]);
    resetPermissions(): void;
    get permissionsInput(): QuicksightDataSetPermissions[] | undefined;
    private _physicalTableMap?;
    get physicalTableMap(): {
        [key: string]: QuicksightDataSetPhysicalTableMap;
    } | cdktf.IResolvable;
    set physicalTableMap(value: {
        [key: string]: QuicksightDataSetPhysicalTableMap;
    } | cdktf.IResolvable);
    resetPhysicalTableMap(): void;
    get physicalTableMapInput(): cdktf.IResolvable | {
        [key: string]: QuicksightDataSetPhysicalTableMap;
    } | undefined;
    private _rowLevelPermissionDataSet?;
    get rowLevelPermissionDataSet(): QuicksightDataSetRowLevelPermissionDataSet;
    set rowLevelPermissionDataSet(value: QuicksightDataSetRowLevelPermissionDataSet);
    resetRowLevelPermissionDataSet(): void;
    get rowLevelPermissionDataSetInput(): QuicksightDataSetRowLevelPermissionDataSet | undefined;
    private _tags?;
    get tags(): QuicksightDataSetTags[];
    set tags(value: QuicksightDataSetTags[]);
    resetTags(): void;
    get tagsInput(): QuicksightDataSetTags[] | undefined;
    protected synthesizeAttributes(): {
        [name: string]: any;
    };
}
