// https://www.terraform.io/docs/providers/awscc/r/backup_backup_selection.html
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

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

export function backupBackupSelectionBackupSelectionListOfTagsToTerraform(struct?: BackupBackupSelectionBackupSelectionListOfTags): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    condition_key: cdktf.stringToTerraform(struct!.conditionKey),
    condition_type: cdktf.stringToTerraform(struct!.conditionType),
    condition_value: cdktf.stringToTerraform(struct!.conditionValue),
  }
}

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

export function backupBackupSelectionBackupSelectionToTerraform(struct?: BackupBackupSelectionBackupSelection): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    iam_role_arn: cdktf.stringToTerraform(struct!.iamRoleArn),
    list_of_tags: cdktf.listMapper(backupBackupSelectionBackupSelectionListOfTagsToTerraform)(struct!.listOfTags),
    resources: cdktf.listMapper(cdktf.stringToTerraform)(struct!.resources),
    selection_name: cdktf.stringToTerraform(struct!.selectionName),
  }
}


/**
* Represents a {@link https://www.terraform.io/docs/providers/awscc/r/backup_backup_selection.html awscc_backup_backup_selection}
*/
export class BackupBackupSelection extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType: string = "awscc_backup_backup_selection";

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://www.terraform.io/docs/providers/awscc/r/backup_backup_selection.html awscc_backup_backup_selection} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options BackupBackupSelectionConfig
  */
  public constructor(scope: Construct, id: string, config: BackupBackupSelectionConfig) {
    super(scope, id, {
      terraformResourceType: 'awscc_backup_backup_selection',
      terraformGeneratorMetadata: {
        providerName: 'awscc'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle
    });
    this._backupPlanId = config.backupPlanId;
    this._backupSelection = config.backupSelection;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // backup_plan_id - computed: false, optional: false, required: true
  private _backupPlanId: string;
  public get backupPlanId() {
    return this.getStringAttribute('backup_plan_id');
  }
  public set backupPlanId(value: string) {
    this._backupPlanId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get backupPlanIdInput() {
    return this._backupPlanId
  }

  // backup_selection - computed: false, optional: false, required: true
  private _backupSelection: BackupBackupSelectionBackupSelection;
  public get backupSelection() {
    return this.interpolationForAttribute('backup_selection') as any;
  }
  public set backupSelection(value: BackupBackupSelectionBackupSelection) {
    this._backupSelection = value;
  }
  // Temporarily expose input value. Use with caution.
  public get backupSelectionInput() {
    return this._backupSelection
  }

  // id - computed: true, optional: false, required: false
  public get id() {
    return this.getStringAttribute('id');
  }

  // selection_id - computed: true, optional: false, required: false
  public get selectionId() {
    return this.getStringAttribute('selection_id');
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      backup_plan_id: cdktf.stringToTerraform(this._backupPlanId),
      backup_selection: backupBackupSelectionBackupSelectionToTerraform(this._backupSelection),
    };
  }
}
