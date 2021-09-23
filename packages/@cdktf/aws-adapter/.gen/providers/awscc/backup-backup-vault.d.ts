import { Construct } from 'constructs';
import * as cdktf from 'cdktf';
export interface BackupBackupVaultConfig extends cdktf.TerraformMetaArguments {
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/backup_backup_vault.html#access_policy BackupBackupVault#access_policy}
    */
    readonly accessPolicy?: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/backup_backup_vault.html#backup_vault_name BackupBackupVault#backup_vault_name}
    */
    readonly backupVaultName: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/backup_backup_vault.html#backup_vault_tags BackupBackupVault#backup_vault_tags}
    */
    readonly backupVaultTags?: {
        [key: string]: string;
    } | cdktf.IResolvable;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/backup_backup_vault.html#encryption_key_arn BackupBackupVault#encryption_key_arn}
    */
    readonly encryptionKeyArn?: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/backup_backup_vault.html#notifications BackupBackupVault#notifications}
    */
    readonly notifications?: BackupBackupVaultNotifications;
}
export interface BackupBackupVaultNotifications {
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/backup_backup_vault.html#backup_vault_events BackupBackupVault#backup_vault_events}
    */
    readonly backupVaultEvents: string[];
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/backup_backup_vault.html#sns_topic_arn BackupBackupVault#sns_topic_arn}
    */
    readonly snsTopicArn: string;
}
export declare function backupBackupVaultNotificationsToTerraform(struct?: BackupBackupVaultNotifications): any;
/**
* Represents a {@link https://www.terraform.io/docs/providers/awscc/r/backup_backup_vault.html awscc_backup_backup_vault}
*/
export declare class BackupBackupVault extends cdktf.TerraformResource {
    static readonly tfResourceType: string;
    /**
    * Create a new {@link https://www.terraform.io/docs/providers/awscc/r/backup_backup_vault.html awscc_backup_backup_vault} Resource
    *
    * @param scope The scope in which to define this construct
    * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
    * @param options BackupBackupVaultConfig
    */
    constructor(scope: Construct, id: string, config: BackupBackupVaultConfig);
    private _accessPolicy?;
    get accessPolicy(): string;
    set accessPolicy(value: string);
    resetAccessPolicy(): void;
    get accessPolicyInput(): string | undefined;
    get backupVaultArn(): string;
    private _backupVaultName;
    get backupVaultName(): string;
    set backupVaultName(value: string);
    get backupVaultNameInput(): string;
    private _backupVaultTags?;
    get backupVaultTags(): {
        [key: string]: string;
    } | cdktf.IResolvable;
    set backupVaultTags(value: {
        [key: string]: string;
    } | cdktf.IResolvable);
    resetBackupVaultTags(): void;
    get backupVaultTagsInput(): cdktf.IResolvable | {
        [key: string]: string;
    } | undefined;
    private _encryptionKeyArn?;
    get encryptionKeyArn(): string;
    set encryptionKeyArn(value: string);
    resetEncryptionKeyArn(): void;
    get encryptionKeyArnInput(): string | undefined;
    get id(): string;
    private _notifications?;
    get notifications(): BackupBackupVaultNotifications;
    set notifications(value: BackupBackupVaultNotifications);
    resetNotifications(): void;
    get notificationsInput(): BackupBackupVaultNotifications | undefined;
    protected synthesizeAttributes(): {
        [name: string]: any;
    };
}
