import { Construct } from 'constructs';
import * as cdktf from 'cdktf';
export interface DataAwsccBackupBackupSelectionConfig extends cdktf.TerraformMetaArguments {
    /**
    * Uniquely identifies the resource.
    *
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/d/backup_backup_selection.html#id DataAwsccBackupBackupSelection#id}
    */
    readonly id: string;
}
export declare class DataAwsccBackupBackupSelectionBackupSelectionListOfTags extends cdktf.ComplexComputedList {
    get conditionKey(): string;
    get conditionType(): string;
    get conditionValue(): string;
}
export declare function dataAwsccBackupBackupSelectionBackupSelectionListOfTagsToTerraform(struct?: DataAwsccBackupBackupSelectionBackupSelectionListOfTags): any;
export declare class DataAwsccBackupBackupSelectionBackupSelection extends cdktf.ComplexComputedList {
    get iamRoleArn(): string;
    get listOfTags(): any;
    get resources(): string[];
    get selectionName(): string;
}
export declare function dataAwsccBackupBackupSelectionBackupSelectionToTerraform(struct?: DataAwsccBackupBackupSelectionBackupSelection): any;
/**
* Represents a {@link https://www.terraform.io/docs/providers/awscc/d/backup_backup_selection.html awscc_backup_backup_selection}
*/
export declare class DataAwsccBackupBackupSelection extends cdktf.TerraformDataSource {
    static readonly tfResourceType: string;
    /**
    * Create a new {@link https://www.terraform.io/docs/providers/awscc/d/backup_backup_selection.html awscc_backup_backup_selection} Data Source
    *
    * @param scope The scope in which to define this construct
    * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
    * @param options DataAwsccBackupBackupSelectionConfig
    */
    constructor(scope: Construct, id: string, config: DataAwsccBackupBackupSelectionConfig);
    get backupPlanId(): string;
    get backupSelection(): any;
    private _id;
    get id(): string;
    set id(value: string);
    get idInput(): string;
    get selectionId(): string;
    protected synthesizeAttributes(): {
        [name: string]: any;
    };
}
