import { Construct } from 'constructs';
import * as cdktf from 'cdktf';
export interface DataAwsccBackupBackupVaultConfig extends cdktf.TerraformMetaArguments {
    /**
    * Uniquely identifies the resource.
    *
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/d/backup_backup_vault.html#id DataAwsccBackupBackupVault#id}
    */
    readonly id: string;
}
export declare class DataAwsccBackupBackupVaultNotifications extends cdktf.ComplexComputedList {
    get backupVaultEvents(): string[];
    get snsTopicArn(): string;
}
export declare function dataAwsccBackupBackupVaultNotificationsToTerraform(struct?: DataAwsccBackupBackupVaultNotifications): any;
/**
* Represents a {@link https://www.terraform.io/docs/providers/awscc/d/backup_backup_vault.html awscc_backup_backup_vault}
*/
export declare class DataAwsccBackupBackupVault extends cdktf.TerraformDataSource {
    static readonly tfResourceType: string;
    /**
    * Create a new {@link https://www.terraform.io/docs/providers/awscc/d/backup_backup_vault.html awscc_backup_backup_vault} Data Source
    *
    * @param scope The scope in which to define this construct
    * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
    * @param options DataAwsccBackupBackupVaultConfig
    */
    constructor(scope: Construct, id: string, config: DataAwsccBackupBackupVaultConfig);
    get accessPolicy(): string;
    get backupVaultArn(): string;
    get backupVaultName(): string;
    backupVaultTags(key: string): string;
    get encryptionKeyArn(): string;
    private _id;
    get id(): string;
    set id(value: string);
    get idInput(): string;
    get notifications(): any;
    protected synthesizeAttributes(): {
        [name: string]: any;
    };
}
