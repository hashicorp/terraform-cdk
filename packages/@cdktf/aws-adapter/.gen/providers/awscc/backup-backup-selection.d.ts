import { Construct } from 'constructs';
import * as cdktf from 'cdktf';
export interface BackupBackupSelectionConfig extends cdktf.TerraformMetaArguments {
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/backup_backup_selection.html#backup_plan_id BackupBackupSelection#backup_plan_id}
    */
    readonly backupPlanId: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/backup_backup_selection.html#backup_selection BackupBackupSelection#backup_selection}
    */
    readonly backupSelection: BackupBackupSelectionBackupSelection;
}
export interface BackupBackupSelectionBackupSelectionListOfTags {
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/backup_backup_selection.html#condition_key BackupBackupSelection#condition_key}
    */
    readonly conditionKey: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/backup_backup_selection.html#condition_type BackupBackupSelection#condition_type}
    */
    readonly conditionType: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/backup_backup_selection.html#condition_value BackupBackupSelection#condition_value}
    */
    readonly conditionValue: string;
}
export declare function backupBackupSelectionBackupSelectionListOfTagsToTerraform(struct?: BackupBackupSelectionBackupSelectionListOfTags): any;
export interface BackupBackupSelectionBackupSelection {
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/backup_backup_selection.html#iam_role_arn BackupBackupSelection#iam_role_arn}
    */
    readonly iamRoleArn: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/backup_backup_selection.html#list_of_tags BackupBackupSelection#list_of_tags}
    */
    readonly listOfTags?: BackupBackupSelectionBackupSelectionListOfTags[];
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/backup_backup_selection.html#resources BackupBackupSelection#resources}
    */
    readonly resources?: string[];
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/backup_backup_selection.html#selection_name BackupBackupSelection#selection_name}
    */
    readonly selectionName: string;
}
export declare function backupBackupSelectionBackupSelectionToTerraform(struct?: BackupBackupSelectionBackupSelection): any;
/**
* Represents a {@link https://www.terraform.io/docs/providers/awscc/r/backup_backup_selection.html awscc_backup_backup_selection}
*/
export declare class BackupBackupSelection extends cdktf.TerraformResource {
    static readonly tfResourceType: string;
    /**
    * Create a new {@link https://www.terraform.io/docs/providers/awscc/r/backup_backup_selection.html awscc_backup_backup_selection} Resource
    *
    * @param scope The scope in which to define this construct
    * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
    * @param options BackupBackupSelectionConfig
    */
    constructor(scope: Construct, id: string, config: BackupBackupSelectionConfig);
    private _backupPlanId;
    get backupPlanId(): string;
    set backupPlanId(value: string);
    get backupPlanIdInput(): string;
    private _backupSelection;
    get backupSelection(): BackupBackupSelectionBackupSelection;
    set backupSelection(value: BackupBackupSelectionBackupSelection);
    get backupSelectionInput(): BackupBackupSelectionBackupSelection;
    get id(): string;
    get selectionId(): string;
    protected synthesizeAttributes(): {
        [name: string]: any;
    };
}
