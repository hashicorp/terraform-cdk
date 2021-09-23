// https://www.terraform.io/docs/providers/awscc/r/backup_backup_vault.html
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

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
  readonly backupVaultTags?: { [key: string]: string } | cdktf.IResolvable;
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

export function backupBackupVaultNotificationsToTerraform(struct?: BackupBackupVaultNotifications): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    backup_vault_events: cdktf.listMapper(cdktf.stringToTerraform)(struct!.backupVaultEvents),
    sns_topic_arn: cdktf.stringToTerraform(struct!.snsTopicArn),
  }
}


/**
* Represents a {@link https://www.terraform.io/docs/providers/awscc/r/backup_backup_vault.html awscc_backup_backup_vault}
*/
export class BackupBackupVault extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType: string = "awscc_backup_backup_vault";

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://www.terraform.io/docs/providers/awscc/r/backup_backup_vault.html awscc_backup_backup_vault} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options BackupBackupVaultConfig
  */
  public constructor(scope: Construct, id: string, config: BackupBackupVaultConfig) {
    super(scope, id, {
      terraformResourceType: 'awscc_backup_backup_vault',
      terraformGeneratorMetadata: {
        providerName: 'awscc'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle
    });
    this._accessPolicy = config.accessPolicy;
    this._backupVaultName = config.backupVaultName;
    this._backupVaultTags = config.backupVaultTags;
    this._encryptionKeyArn = config.encryptionKeyArn;
    this._notifications = config.notifications;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // access_policy - computed: false, optional: true, required: false
  private _accessPolicy?: string;
  public get accessPolicy() {
    return this.getStringAttribute('access_policy');
  }
  public set accessPolicy(value: string ) {
    this._accessPolicy = value;
  }
  public resetAccessPolicy() {
    this._accessPolicy = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get accessPolicyInput() {
    return this._accessPolicy
  }

  // backup_vault_arn - computed: true, optional: false, required: false
  public get backupVaultArn() {
    return this.getStringAttribute('backup_vault_arn');
  }

  // backup_vault_name - computed: false, optional: false, required: true
  private _backupVaultName: string;
  public get backupVaultName() {
    return this.getStringAttribute('backup_vault_name');
  }
  public set backupVaultName(value: string) {
    this._backupVaultName = value;
  }
  // Temporarily expose input value. Use with caution.
  public get backupVaultNameInput() {
    return this._backupVaultName
  }

  // backup_vault_tags - computed: false, optional: true, required: false
  private _backupVaultTags?: { [key: string]: string } | cdktf.IResolvable;
  public get backupVaultTags() {
    return this.interpolationForAttribute('backup_vault_tags') as any;
  }
  public set backupVaultTags(value: { [key: string]: string } | cdktf.IResolvable ) {
    this._backupVaultTags = value;
  }
  public resetBackupVaultTags() {
    this._backupVaultTags = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get backupVaultTagsInput() {
    return this._backupVaultTags
  }

  // encryption_key_arn - computed: true, optional: true, required: false
  private _encryptionKeyArn?: string;
  public get encryptionKeyArn() {
    return this.getStringAttribute('encryption_key_arn');
  }
  public set encryptionKeyArn(value: string) {
    this._encryptionKeyArn = value;
  }
  public resetEncryptionKeyArn() {
    this._encryptionKeyArn = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get encryptionKeyArnInput() {
    return this._encryptionKeyArn
  }

  // id - computed: true, optional: false, required: false
  public get id() {
    return this.getStringAttribute('id');
  }

  // notifications - computed: false, optional: true, required: false
  private _notifications?: BackupBackupVaultNotifications;
  public get notifications() {
    return this.interpolationForAttribute('notifications') as any;
  }
  public set notifications(value: BackupBackupVaultNotifications ) {
    this._notifications = value;
  }
  public resetNotifications() {
    this._notifications = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get notificationsInput() {
    return this._notifications
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      access_policy: cdktf.stringToTerraform(this._accessPolicy),
      backup_vault_name: cdktf.stringToTerraform(this._backupVaultName),
      backup_vault_tags: cdktf.hashMapper(cdktf.anyToTerraform)(this._backupVaultTags),
      encryption_key_arn: cdktf.stringToTerraform(this._encryptionKeyArn),
      notifications: backupBackupVaultNotificationsToTerraform(this._notifications),
    };
  }
}
