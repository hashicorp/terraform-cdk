// https://www.terraform.io/docs/providers/awscc/d/backup_backup_vault.html
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DataAwsccBackupBackupVaultConfig extends cdktf.TerraformMetaArguments {
  /**
  * Uniquely identifies the resource.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/d/backup_backup_vault.html#id DataAwsccBackupBackupVault#id}
  */
  readonly id: string;
}
export class DataAwsccBackupBackupVaultNotifications extends cdktf.ComplexComputedList {

  // backup_vault_events - computed: true, optional: false, required: false
  public get backupVaultEvents() {
    return this.getListAttribute('backup_vault_events');
  }

  // sns_topic_arn - computed: true, optional: false, required: false
  public get snsTopicArn() {
    return this.getStringAttribute('sns_topic_arn');
  }
}

export function dataAwsccBackupBackupVaultNotificationsToTerraform(struct?: DataAwsccBackupBackupVaultNotifications): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    backup_vault_events: cdktf.listMapper(cdktf.stringToTerraform)(struct!.backupVaultEvents),
    sns_topic_arn: cdktf.stringToTerraform(struct!.snsTopicArn),
  }
}


/**
* Represents a {@link https://www.terraform.io/docs/providers/awscc/d/backup_backup_vault.html awscc_backup_backup_vault}
*/
export class DataAwsccBackupBackupVault extends cdktf.TerraformDataSource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType: string = "awscc_backup_backup_vault";

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://www.terraform.io/docs/providers/awscc/d/backup_backup_vault.html awscc_backup_backup_vault} Data Source
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DataAwsccBackupBackupVaultConfig
  */
  public constructor(scope: Construct, id: string, config: DataAwsccBackupBackupVaultConfig) {
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
    this._id = config.id;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // access_policy - computed: true, optional: false, required: false
  public get accessPolicy() {
    return this.getStringAttribute('access_policy');
  }

  // backup_vault_arn - computed: true, optional: false, required: false
  public get backupVaultArn() {
    return this.getStringAttribute('backup_vault_arn');
  }

  // backup_vault_name - computed: true, optional: false, required: false
  public get backupVaultName() {
    return this.getStringAttribute('backup_vault_name');
  }

  // backup_vault_tags - computed: true, optional: false, required: false
  public backupVaultTags(key: string): string {
    return new cdktf.StringMap(this, 'backup_vault_tags').lookup(key);
  }

  // encryption_key_arn - computed: true, optional: false, required: false
  public get encryptionKeyArn() {
    return this.getStringAttribute('encryption_key_arn');
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

  // notifications - computed: true, optional: false, required: false
  public get notifications() {
    return this.interpolationForAttribute('notifications') as any;
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
