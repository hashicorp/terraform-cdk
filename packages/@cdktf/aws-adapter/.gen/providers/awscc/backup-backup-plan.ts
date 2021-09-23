// https://www.terraform.io/docs/providers/awscc/r/backup_backup_plan.html
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface BackupBackupPlanConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/backup_backup_plan.html#backup_plan BackupBackupPlan#backup_plan}
  */
  readonly backupPlan: BackupBackupPlanBackupPlan;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/backup_backup_plan.html#backup_plan_tags BackupBackupPlan#backup_plan_tags}
  */
  readonly backupPlanTags?: { [key: string]: string } | cdktf.IResolvable;
}
export interface BackupBackupPlanBackupPlanAdvancedBackupSettings {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/backup_backup_plan.html#backup_options BackupBackupPlan#backup_options}
  */
  readonly backupOptions: { [key: string]: string } | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/backup_backup_plan.html#resource_type BackupBackupPlan#resource_type}
  */
  readonly resourceType: string;
}

export function backupBackupPlanBackupPlanAdvancedBackupSettingsToTerraform(struct?: BackupBackupPlanBackupPlanAdvancedBackupSettings): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    backup_options: cdktf.hashMapper(cdktf.anyToTerraform)(struct!.backupOptions),
    resource_type: cdktf.stringToTerraform(struct!.resourceType),
  }
}

export interface BackupBackupPlanBackupPlanBackupPlanRuleCopyActionsLifecycle {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/backup_backup_plan.html#delete_after_days BackupBackupPlan#delete_after_days}
  */
  readonly deleteAfterDays?: number;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/backup_backup_plan.html#move_to_cold_storage_after_days BackupBackupPlan#move_to_cold_storage_after_days}
  */
  readonly moveToColdStorageAfterDays?: number;
}

export function backupBackupPlanBackupPlanBackupPlanRuleCopyActionsLifecycleToTerraform(struct?: BackupBackupPlanBackupPlanBackupPlanRuleCopyActionsLifecycle): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    delete_after_days: cdktf.numberToTerraform(struct!.deleteAfterDays),
    move_to_cold_storage_after_days: cdktf.numberToTerraform(struct!.moveToColdStorageAfterDays),
  }
}

export interface BackupBackupPlanBackupPlanBackupPlanRuleCopyActions {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/backup_backup_plan.html#destination_backup_vault_arn BackupBackupPlan#destination_backup_vault_arn}
  */
  readonly destinationBackupVaultArn: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/backup_backup_plan.html#lifecycle BackupBackupPlan#lifecycle}
  */
  readonly lifecycle?: BackupBackupPlanBackupPlanBackupPlanRuleCopyActionsLifecycle;
}

export function backupBackupPlanBackupPlanBackupPlanRuleCopyActionsToTerraform(struct?: BackupBackupPlanBackupPlanBackupPlanRuleCopyActions): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    destination_backup_vault_arn: cdktf.stringToTerraform(struct!.destinationBackupVaultArn),
    lifecycle: backupBackupPlanBackupPlanBackupPlanRuleCopyActionsLifecycleToTerraform(struct!.lifecycle),
  }
}

export interface BackupBackupPlanBackupPlanBackupPlanRuleLifecycle {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/backup_backup_plan.html#delete_after_days BackupBackupPlan#delete_after_days}
  */
  readonly deleteAfterDays?: number;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/backup_backup_plan.html#move_to_cold_storage_after_days BackupBackupPlan#move_to_cold_storage_after_days}
  */
  readonly moveToColdStorageAfterDays?: number;
}

export function backupBackupPlanBackupPlanBackupPlanRuleLifecycleToTerraform(struct?: BackupBackupPlanBackupPlanBackupPlanRuleLifecycle): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    delete_after_days: cdktf.numberToTerraform(struct!.deleteAfterDays),
    move_to_cold_storage_after_days: cdktf.numberToTerraform(struct!.moveToColdStorageAfterDays),
  }
}

export interface BackupBackupPlanBackupPlanBackupPlanRule {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/backup_backup_plan.html#completion_window_minutes BackupBackupPlan#completion_window_minutes}
  */
  readonly completionWindowMinutes?: number;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/backup_backup_plan.html#copy_actions BackupBackupPlan#copy_actions}
  */
  readonly copyActions?: BackupBackupPlanBackupPlanBackupPlanRuleCopyActions[];
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/backup_backup_plan.html#enable_continuous_backup BackupBackupPlan#enable_continuous_backup}
  */
  readonly enableContinuousBackup?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/backup_backup_plan.html#lifecycle BackupBackupPlan#lifecycle}
  */
  readonly lifecycle?: BackupBackupPlanBackupPlanBackupPlanRuleLifecycle;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/backup_backup_plan.html#recovery_point_tags BackupBackupPlan#recovery_point_tags}
  */
  readonly recoveryPointTags?: { [key: string]: string } | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/backup_backup_plan.html#rule_name BackupBackupPlan#rule_name}
  */
  readonly ruleName: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/backup_backup_plan.html#schedule_expression BackupBackupPlan#schedule_expression}
  */
  readonly scheduleExpression?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/backup_backup_plan.html#start_window_minutes BackupBackupPlan#start_window_minutes}
  */
  readonly startWindowMinutes?: number;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/backup_backup_plan.html#target_backup_vault BackupBackupPlan#target_backup_vault}
  */
  readonly targetBackupVault: string;
}

export function backupBackupPlanBackupPlanBackupPlanRuleToTerraform(struct?: BackupBackupPlanBackupPlanBackupPlanRule): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    completion_window_minutes: cdktf.numberToTerraform(struct!.completionWindowMinutes),
    copy_actions: cdktf.listMapper(backupBackupPlanBackupPlanBackupPlanRuleCopyActionsToTerraform)(struct!.copyActions),
    enable_continuous_backup: cdktf.booleanToTerraform(struct!.enableContinuousBackup),
    lifecycle: backupBackupPlanBackupPlanBackupPlanRuleLifecycleToTerraform(struct!.lifecycle),
    recovery_point_tags: cdktf.hashMapper(cdktf.anyToTerraform)(struct!.recoveryPointTags),
    rule_name: cdktf.stringToTerraform(struct!.ruleName),
    schedule_expression: cdktf.stringToTerraform(struct!.scheduleExpression),
    start_window_minutes: cdktf.numberToTerraform(struct!.startWindowMinutes),
    target_backup_vault: cdktf.stringToTerraform(struct!.targetBackupVault),
  }
}

export interface BackupBackupPlanBackupPlan {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/backup_backup_plan.html#advanced_backup_settings BackupBackupPlan#advanced_backup_settings}
  */
  readonly advancedBackupSettings?: BackupBackupPlanBackupPlanAdvancedBackupSettings[];
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/backup_backup_plan.html#backup_plan_name BackupBackupPlan#backup_plan_name}
  */
  readonly backupPlanName: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/backup_backup_plan.html#backup_plan_rule BackupBackupPlan#backup_plan_rule}
  */
  readonly backupPlanRule: BackupBackupPlanBackupPlanBackupPlanRule[];
}

export function backupBackupPlanBackupPlanToTerraform(struct?: BackupBackupPlanBackupPlan): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    advanced_backup_settings: cdktf.listMapper(backupBackupPlanBackupPlanAdvancedBackupSettingsToTerraform)(struct!.advancedBackupSettings),
    backup_plan_name: cdktf.stringToTerraform(struct!.backupPlanName),
    backup_plan_rule: cdktf.listMapper(backupBackupPlanBackupPlanBackupPlanRuleToTerraform)(struct!.backupPlanRule),
  }
}


/**
* Represents a {@link https://www.terraform.io/docs/providers/awscc/r/backup_backup_plan.html awscc_backup_backup_plan}
*/
export class BackupBackupPlan extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType: string = "awscc_backup_backup_plan";

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://www.terraform.io/docs/providers/awscc/r/backup_backup_plan.html awscc_backup_backup_plan} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options BackupBackupPlanConfig
  */
  public constructor(scope: Construct, id: string, config: BackupBackupPlanConfig) {
    super(scope, id, {
      terraformResourceType: 'awscc_backup_backup_plan',
      terraformGeneratorMetadata: {
        providerName: 'awscc'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle
    });
    this._backupPlan = config.backupPlan;
    this._backupPlanTags = config.backupPlanTags;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // backup_plan - computed: false, optional: false, required: true
  private _backupPlan: BackupBackupPlanBackupPlan;
  public get backupPlan() {
    return this.interpolationForAttribute('backup_plan') as any;
  }
  public set backupPlan(value: BackupBackupPlanBackupPlan) {
    this._backupPlan = value;
  }
  // Temporarily expose input value. Use with caution.
  public get backupPlanInput() {
    return this._backupPlan
  }

  // backup_plan_arn - computed: true, optional: false, required: false
  public get backupPlanArn() {
    return this.getStringAttribute('backup_plan_arn');
  }

  // backup_plan_id - computed: true, optional: false, required: false
  public get backupPlanId() {
    return this.getStringAttribute('backup_plan_id');
  }

  // backup_plan_tags - computed: false, optional: true, required: false
  private _backupPlanTags?: { [key: string]: string } | cdktf.IResolvable;
  public get backupPlanTags() {
    return this.interpolationForAttribute('backup_plan_tags') as any;
  }
  public set backupPlanTags(value: { [key: string]: string } | cdktf.IResolvable ) {
    this._backupPlanTags = value;
  }
  public resetBackupPlanTags() {
    this._backupPlanTags = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get backupPlanTagsInput() {
    return this._backupPlanTags
  }

  // id - computed: true, optional: false, required: false
  public get id() {
    return this.getStringAttribute('id');
  }

  // version_id - computed: true, optional: false, required: false
  public get versionId() {
    return this.getStringAttribute('version_id');
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      backup_plan: backupBackupPlanBackupPlanToTerraform(this._backupPlan),
      backup_plan_tags: cdktf.hashMapper(cdktf.anyToTerraform)(this._backupPlanTags),
    };
  }
}
