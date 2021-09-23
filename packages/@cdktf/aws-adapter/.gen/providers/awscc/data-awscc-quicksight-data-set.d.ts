import { Construct } from 'constructs';
import * as cdktf from 'cdktf';
export interface DataAwsccQuicksightDataSetConfig extends cdktf.TerraformMetaArguments {
    /**
    * Uniquely identifies the resource.
    *
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/d/quicksight_data_set.html#id DataAwsccQuicksightDataSet#id}
    */
    readonly id: string;
}
export declare class DataAwsccQuicksightDataSetColumnGroupsGeoSpatialColumnGroup extends cdktf.ComplexComputedList {
    get columns(): string[];
    get countryCode(): string;
    get name(): string;
}
export declare function dataAwsccQuicksightDataSetColumnGroupsGeoSpatialColumnGroupToTerraform(struct?: DataAwsccQuicksightDataSetColumnGroupsGeoSpatialColumnGroup): any;
export declare class DataAwsccQuicksightDataSetColumnGroups extends cdktf.ComplexComputedList {
    get geoSpatialColumnGroup(): any;
}
export declare function dataAwsccQuicksightDataSetColumnGroupsToTerraform(struct?: DataAwsccQuicksightDataSetColumnGroups): any;
export declare class DataAwsccQuicksightDataSetColumnLevelPermissionRules extends cdktf.ComplexComputedList {
    get columnNames(): string[];
    get principals(): string[];
}
export declare function dataAwsccQuicksightDataSetColumnLevelPermissionRulesToTerraform(struct?: DataAwsccQuicksightDataSetColumnLevelPermissionRules): any;
export declare class DataAwsccQuicksightDataSetFieldFolders extends cdktf.ComplexComputedList {
    get columns(): string[];
    get description(): string;
}
export declare function dataAwsccQuicksightDataSetFieldFoldersToTerraform(struct?: DataAwsccQuicksightDataSetFieldFolders): any;
export declare class DataAwsccQuicksightDataSetIngestionWaitPolicy extends cdktf.ComplexComputedList {
    get ingestionWaitTimeInHours(): number;
    get waitForSpiceIngestion(): any;
}
export declare function dataAwsccQuicksightDataSetIngestionWaitPolicyToTerraform(struct?: DataAwsccQuicksightDataSetIngestionWaitPolicy): any;
export declare class DataAwsccQuicksightDataSetLogicalTableMapDataTransformsCastColumnTypeOperation extends cdktf.ComplexComputedList {
    get columnName(): string;
    get format(): string;
    get newColumnType(): string;
}
export declare function dataAwsccQuicksightDataSetLogicalTableMapDataTransformsCastColumnTypeOperationToTerraform(struct?: DataAwsccQuicksightDataSetLogicalTableMapDataTransformsCastColumnTypeOperation): any;
export declare class DataAwsccQuicksightDataSetLogicalTableMapDataTransformsCreateColumnsOperationColumns extends cdktf.ComplexComputedList {
    get columnId(): string;
    get columnName(): string;
    get expression(): string;
}
export declare function dataAwsccQuicksightDataSetLogicalTableMapDataTransformsCreateColumnsOperationColumnsToTerraform(struct?: DataAwsccQuicksightDataSetLogicalTableMapDataTransformsCreateColumnsOperationColumns): any;
export declare class DataAwsccQuicksightDataSetLogicalTableMapDataTransformsCreateColumnsOperation extends cdktf.ComplexComputedList {
    get columns(): any;
}
export declare function dataAwsccQuicksightDataSetLogicalTableMapDataTransformsCreateColumnsOperationToTerraform(struct?: DataAwsccQuicksightDataSetLogicalTableMapDataTransformsCreateColumnsOperation): any;
export declare class DataAwsccQuicksightDataSetLogicalTableMapDataTransformsFilterOperation extends cdktf.ComplexComputedList {
    get conditionExpression(): string;
}
export declare function dataAwsccQuicksightDataSetLogicalTableMapDataTransformsFilterOperationToTerraform(struct?: DataAwsccQuicksightDataSetLogicalTableMapDataTransformsFilterOperation): any;
export declare class DataAwsccQuicksightDataSetLogicalTableMapDataTransformsProjectOperation extends cdktf.ComplexComputedList {
    get projectedColumns(): string[];
}
export declare function dataAwsccQuicksightDataSetLogicalTableMapDataTransformsProjectOperationToTerraform(struct?: DataAwsccQuicksightDataSetLogicalTableMapDataTransformsProjectOperation): any;
export declare class DataAwsccQuicksightDataSetLogicalTableMapDataTransformsRenameColumnOperation extends cdktf.ComplexComputedList {
    get columnName(): string;
    get newColumnName(): string;
}
export declare function dataAwsccQuicksightDataSetLogicalTableMapDataTransformsRenameColumnOperationToTerraform(struct?: DataAwsccQuicksightDataSetLogicalTableMapDataTransformsRenameColumnOperation): any;
export declare class DataAwsccQuicksightDataSetLogicalTableMapDataTransformsTagColumnOperationTagsColumnDescription extends cdktf.ComplexComputedList {
    get text(): string;
}
export declare function dataAwsccQuicksightDataSetLogicalTableMapDataTransformsTagColumnOperationTagsColumnDescriptionToTerraform(struct?: DataAwsccQuicksightDataSetLogicalTableMapDataTransformsTagColumnOperationTagsColumnDescription): any;
export declare class DataAwsccQuicksightDataSetLogicalTableMapDataTransformsTagColumnOperationTags extends cdktf.ComplexComputedList {
    get columnDescription(): any;
    get columnGeographicRole(): string;
}
export declare function dataAwsccQuicksightDataSetLogicalTableMapDataTransformsTagColumnOperationTagsToTerraform(struct?: DataAwsccQuicksightDataSetLogicalTableMapDataTransformsTagColumnOperationTags): any;
export declare class DataAwsccQuicksightDataSetLogicalTableMapDataTransformsTagColumnOperation extends cdktf.ComplexComputedList {
    get columnName(): string;
    get tags(): any;
}
export declare function dataAwsccQuicksightDataSetLogicalTableMapDataTransformsTagColumnOperationToTerraform(struct?: DataAwsccQuicksightDataSetLogicalTableMapDataTransformsTagColumnOperation): any;
export declare class DataAwsccQuicksightDataSetLogicalTableMapDataTransforms extends cdktf.ComplexComputedList {
    get castColumnTypeOperation(): any;
    get createColumnsOperation(): any;
    get filterOperation(): any;
    get projectOperation(): any;
    get renameColumnOperation(): any;
    get tagColumnOperation(): any;
}
export declare function dataAwsccQuicksightDataSetLogicalTableMapDataTransformsToTerraform(struct?: DataAwsccQuicksightDataSetLogicalTableMapDataTransforms): any;
export declare class DataAwsccQuicksightDataSetLogicalTableMapSourceJoinInstructionLeftJoinKeyProperties extends cdktf.ComplexComputedList {
    get uniqueKey(): any;
}
export declare function dataAwsccQuicksightDataSetLogicalTableMapSourceJoinInstructionLeftJoinKeyPropertiesToTerraform(struct?: DataAwsccQuicksightDataSetLogicalTableMapSourceJoinInstructionLeftJoinKeyProperties): any;
export declare class DataAwsccQuicksightDataSetLogicalTableMapSourceJoinInstructionRightJoinKeyProperties extends cdktf.ComplexComputedList {
    get uniqueKey(): any;
}
export declare function dataAwsccQuicksightDataSetLogicalTableMapSourceJoinInstructionRightJoinKeyPropertiesToTerraform(struct?: DataAwsccQuicksightDataSetLogicalTableMapSourceJoinInstructionRightJoinKeyProperties): any;
export declare class DataAwsccQuicksightDataSetLogicalTableMapSourceJoinInstruction extends cdktf.ComplexComputedList {
    get leftJoinKeyProperties(): any;
    get leftOperand(): string;
    get onClause(): string;
    get rightJoinKeyProperties(): any;
    get rightOperand(): string;
    get type(): string;
}
export declare function dataAwsccQuicksightDataSetLogicalTableMapSourceJoinInstructionToTerraform(struct?: DataAwsccQuicksightDataSetLogicalTableMapSourceJoinInstruction): any;
export declare class DataAwsccQuicksightDataSetLogicalTableMapSource extends cdktf.ComplexComputedList {
    get joinInstruction(): any;
    get physicalTableId(): string;
}
export declare function dataAwsccQuicksightDataSetLogicalTableMapSourceToTerraform(struct?: DataAwsccQuicksightDataSetLogicalTableMapSource): any;
export declare class DataAwsccQuicksightDataSetLogicalTableMap extends cdktf.ComplexComputedList {
    get alias(): string;
    get dataTransforms(): any;
    get source(): any;
}
export declare function dataAwsccQuicksightDataSetLogicalTableMapToTerraform(struct?: DataAwsccQuicksightDataSetLogicalTableMap): any;
export declare class DataAwsccQuicksightDataSetOutputColumns extends cdktf.ComplexComputedList {
    get description(): string;
    get name(): string;
    get type(): string;
}
export declare function dataAwsccQuicksightDataSetOutputColumnsToTerraform(struct?: DataAwsccQuicksightDataSetOutputColumns): any;
export declare class DataAwsccQuicksightDataSetPermissions extends cdktf.ComplexComputedList {
    get actions(): string[];
    get principal(): string;
}
export declare function dataAwsccQuicksightDataSetPermissionsToTerraform(struct?: DataAwsccQuicksightDataSetPermissions): any;
export declare class DataAwsccQuicksightDataSetPhysicalTableMapCustomSqlColumns extends cdktf.ComplexComputedList {
    get name(): string;
    get type(): string;
}
export declare function dataAwsccQuicksightDataSetPhysicalTableMapCustomSqlColumnsToTerraform(struct?: DataAwsccQuicksightDataSetPhysicalTableMapCustomSqlColumns): any;
export declare class DataAwsccQuicksightDataSetPhysicalTableMapCustomSql extends cdktf.ComplexComputedList {
    get columns(): any;
    get dataSourceArn(): string;
    get name(): string;
    get sqlQuery(): string;
}
export declare function dataAwsccQuicksightDataSetPhysicalTableMapCustomSqlToTerraform(struct?: DataAwsccQuicksightDataSetPhysicalTableMapCustomSql): any;
export declare class DataAwsccQuicksightDataSetPhysicalTableMapRelationalTableInputColumns extends cdktf.ComplexComputedList {
    get name(): string;
    get type(): string;
}
export declare function dataAwsccQuicksightDataSetPhysicalTableMapRelationalTableInputColumnsToTerraform(struct?: DataAwsccQuicksightDataSetPhysicalTableMapRelationalTableInputColumns): any;
export declare class DataAwsccQuicksightDataSetPhysicalTableMapRelationalTable extends cdktf.ComplexComputedList {
    get catalog(): string;
    get dataSourceArn(): string;
    get inputColumns(): any;
    get name(): string;
    get schema(): string;
}
export declare function dataAwsccQuicksightDataSetPhysicalTableMapRelationalTableToTerraform(struct?: DataAwsccQuicksightDataSetPhysicalTableMapRelationalTable): any;
export declare class DataAwsccQuicksightDataSetPhysicalTableMapS3SourceInputColumns extends cdktf.ComplexComputedList {
    get name(): string;
    get type(): string;
}
export declare function dataAwsccQuicksightDataSetPhysicalTableMapS3SourceInputColumnsToTerraform(struct?: DataAwsccQuicksightDataSetPhysicalTableMapS3SourceInputColumns): any;
export declare class DataAwsccQuicksightDataSetPhysicalTableMapS3SourceUploadSettings extends cdktf.ComplexComputedList {
    get containsHeader(): any;
    get delimiter(): string;
    get format(): string;
    get startFromRow(): number;
    get textQualifier(): string;
}
export declare function dataAwsccQuicksightDataSetPhysicalTableMapS3SourceUploadSettingsToTerraform(struct?: DataAwsccQuicksightDataSetPhysicalTableMapS3SourceUploadSettings): any;
export declare class DataAwsccQuicksightDataSetPhysicalTableMapS3Source extends cdktf.ComplexComputedList {
    get dataSourceArn(): string;
    get inputColumns(): any;
    get uploadSettings(): any;
}
export declare function dataAwsccQuicksightDataSetPhysicalTableMapS3SourceToTerraform(struct?: DataAwsccQuicksightDataSetPhysicalTableMapS3Source): any;
export declare class DataAwsccQuicksightDataSetPhysicalTableMap extends cdktf.ComplexComputedList {
    get customSql(): any;
    get relationalTable(): any;
    get s3Source(): any;
}
export declare function dataAwsccQuicksightDataSetPhysicalTableMapToTerraform(struct?: DataAwsccQuicksightDataSetPhysicalTableMap): any;
export declare class DataAwsccQuicksightDataSetRowLevelPermissionDataSet extends cdktf.ComplexComputedList {
    get arn(): string;
    get formatVersion(): string;
    get namespace(): string;
    get permissionPolicy(): string;
}
export declare function dataAwsccQuicksightDataSetRowLevelPermissionDataSetToTerraform(struct?: DataAwsccQuicksightDataSetRowLevelPermissionDataSet): any;
export declare class DataAwsccQuicksightDataSetTags extends cdktf.ComplexComputedList {
    get key(): string;
    get value(): string;
}
export declare function dataAwsccQuicksightDataSetTagsToTerraform(struct?: DataAwsccQuicksightDataSetTags): any;
/**
* Represents a {@link https://www.terraform.io/docs/providers/awscc/d/quicksight_data_set.html awscc_quicksight_data_set}
*/
export declare class DataAwsccQuicksightDataSet extends cdktf.TerraformDataSource {
    static readonly tfResourceType: string;
    /**
    * Create a new {@link https://www.terraform.io/docs/providers/awscc/d/quicksight_data_set.html awscc_quicksight_data_set} Data Source
    *
    * @param scope The scope in which to define this construct
    * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
    * @param options DataAwsccQuicksightDataSetConfig
    */
    constructor(scope: Construct, id: string, config: DataAwsccQuicksightDataSetConfig);
    get arn(): string;
    get awsAccountId(): string;
    get columnGroups(): any;
    get columnLevelPermissionRules(): any;
    get consumedSpiceCapacityInBytes(): number;
    get createdTime(): string;
    get dataSetId(): string;
    get fieldFolders(): any;
    private _id;
    get id(): string;
    set id(value: string);
    get idInput(): string;
    get importMode(): string;
    get ingestionWaitPolicy(): any;
    get lastUpdatedTime(): string;
    get logicalTableMap(): any;
    get name(): string;
    get outputColumns(): any;
    get permissions(): any;
    get physicalTableMap(): any;
    get rowLevelPermissionDataSet(): any;
    get tags(): any;
    protected synthesizeAttributes(): {
        [name: string]: any;
    };
}
