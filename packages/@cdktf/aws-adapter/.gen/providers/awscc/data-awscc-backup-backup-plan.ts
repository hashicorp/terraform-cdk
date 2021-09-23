// https://www.terraform.io/docs/providers/awscc/d/backup_backup_plan.html
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DataAwsccBackupBackupPlanConfig extends cdktf.TerraformMetaArguments {
  /**
  * Uniquely identifies the resource.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/d/backup_backup_plan.html#id DataAwsccBackupBackupPlan#id}
  */
  readonly id: string;
}
export class DataAwsccBackupBackupPlanBackupPlanAdvancedBackupSettings extends cdktf.ComplexComputedList {

  // backup_options - computed: true, optional: false, required: false
  public get backupOptions() {
    return this.interpolationForAttribute('backup_options') as any;
  }

  // resource_type - computed: true, optional: false, required: false
  public get resourceType() {
    return this.getStringAttribute('resource_type');
  }
}

export function dataAwsccBackupBackupPlanBackupPlanAdvancedBackupSettingsToTerraform(struct?: DataAwsccBackupBackupPlanBackupPlanAdvancedBackupSettings): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    backup_options: cdktf.hashMapper(cdktf.stringToTerraform)(struct!.backupOptions),
    resource_type: cdktf.stringToTerraform(struct!.resourceType),
  }
}

export class DataAwsccBackupBackupPlanBackupPlanBackupPlanRuleCopyActionsLifecycle extends cdktf.ComplexComputedList {

  // delete_after_days - computed: true, optional: false, required: false
  public get deleteAfterDays() {
    return this.getNumberAttribute('delete_after_days');
  }

  // move_to_cold_storage_after_days - computed: true, optional: false, required: false
  public get moveToColdStorageAfterDays() {
    return this.getNumberAttribute('move_to_cold_storage_after_days');
  }
}

export function dataAwsccBackupBackupPlanBackupPlanBackupPlanRuleCopyActionsLifecycleToTerraform(struct?: DataAwsccBackupBackupPlanBackupPlanBackupPlanRuleCopyActionsLifecycle): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    delete_after_days: cdktf.numberToTerraform(struct!.deleteAfterDays),
    move_to_cold_storage_after_days: cdktf.numberToTerraform(struct!.moveToColdStorageAfterDays),
  }
}

export class DataAwsccBackupBackupPlanBackupPlanBackupPlanRuleCopyActions extends cdktf.ComplexComputedList {

  // destination_backup_vault_arn - computed: true, optional: false, required: false
  public get destinationBackupVaultArn() {
    return this.getStringAttribute('destination_backup_vault_arn');
  }

  // lifecycle - computed: true, optional: false, required: false
  public get lifecycle() {
    return this.interpolationForAttribute('lifecycle') as any;
  }
}

export function dataAwsccBackupBackupPlanBackupPlanBackupPlanRuleCopyActionsToTerraform(struct?: DataAwsccBackupBackupPlanBackupPlanBackupPlanRuleCopyActions): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    destination_backup_vault_arn: cdktf.stringToTerraform(struct!.destinationBackupVaultArn),
    lifecycle: dataAwsccBackupBackupPlanBackupPlanBackupPlanRuleCopyActionsLifecycleToTerraform(struct!.lifecycle),
  }
}

export class DataAwsccBackupBackupPlanBackupPlanBackupPlanRuleLifecycle extends cdktf.ComplexComputedList {

  // delete_after_days - computed: true, optional: false, required: false
  public get deleteAfterDays() {
    return this.getNumberAttribute('delete_after_days');
  }

  // move_to_cold_storage_after_days - computed: true, optional: false, required: false
  public get moveToColdStorageAfterDays() {
    return this.getNumberAttribute('move_to_cold_storage_after_days');
  }
}

export function dataAwsccBackupBackupPlanBackupPlanBackupPlanRuleLifecycleToTerraform(struct?: DataAwsccBackupBackupPlanBackupPlanBackupPlanRuleLifecycle): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    delete_after_days: cdktf.numberToTerraform(struct!.deleteAfterDays),
    move_to_cold_storage_after_days: cdktf.numberToTerraform(struct!.moveToColdStorageAfterDays),
  }
}

export class DataAwsccBackupBackupPlanBackupPlanBackupPlanRule extends cdktf.ComplexComputedList {

  // completion_window_minutes - computed: true, optional: false, required: false
  public get completionWindowMinutes() {
    return this.getNumberAttribute('completion_window_minutes');
  }

  // copy_actions - computed: true, optional: false, required: false
  public get copyActions() {
    return this.interpolationForAttribute('copy_actions') as any;
  }

  // enable_continuous_backup - computed: true, optional: false, required: false
  public get enableContinuousBackup() {
    return this.getBooleanAttribute('enable_continuous_backup');
  }

  // lifecycle - computed: true, optional: false, required: false
  public get lifecycle() {
    return this.interpolationForAttribute('lifecycle') as any;
  }

  // recovery_point_tags - computed: true, optional: false, required: false
  public get recoveryPointTags() {
    return this.interpolationForAttribute('recovery_point_tags') as any;
  }

  // rule_name - computed: true, optional: false, required: false
  public get ruleName() {
    return this.getStringAttribute('rule_name');
  }

  // schedule_expression - computed: true, optional: false, required: false
  public get scheduleExpression() {
    return this.getStringAttribute('schedule_expression');
  }

  // start_window_minutes - computed: true, optional: false, required: false
  public get startWindowMinutes() {
    return this.getNumberAttribute('start_window_minutes');
  }

  // target_backup_vault - computed: true, optional: false, required: false
  public get targetBackupVault() {
    return this.getStringAttribute('target_backup_vault');
  }
}

export function dataAwsccBackupBackupPlanBackupPlanBackupPlanRuleToTerraform(struct?: DataAwsccBackupBackupPlanBackupPlanBackupPlanRule): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    completion_window_minutes: cdktf.numberToTerraform(struct!.completionWindowMinutes),
    copy_actions: cdktf.listMapper(dataAwsccBackupBackupPlanBackupPlanBackupPlanRuleCopyActionsToTerraform)(struct!.copyActions),
    enable_continuous_backup: cdktf.booleanToTerraform(struct!.enableContinuousBackup),
    lifecycle: dataAwsccBackupBackupPlanBackupPlanBackupPlanRuleLifecycleToTerraform(struct!.lifecycle),
    recovery_point_tags: cdktf.hashMapper(cdktf.stringToTerraform)(struct!.recoveryPointTags),
    rule_name: cdktf.stringToTerraform(struct!.ruleName),
    schedule_expression: cdktf.stringToTerraform(struct!.scheduleExpression),
    start_window_minutes: cdktf.numberToTerraform(struct!.startWindowMinutes),
    target_backup_vault: cdktf.stringToTerraform(struct!.targetBackupVault),
  }
}

export class DataAwsccBackupBackupPlanBackupPlan extends cdktf.ComplexComputedList {

  // advanced_backup_settings - computed: true, optional: false, required: false
  public get advancedBackupSettings() {
    return this.interpolationForAttribute('advanced_backup_settings') as any;
  }

  // backup_plan_name - computed: true, optional: false, required: false
  public get backupPlanName() {
    return this.getStringAttribute('backup_plan_name');
  }

  // backup_plan_rule - computed: true, optional: false, required: false
  public get backupPlanRule() {
    return this.interpolationForAttribute('backup_plan_rule') as any;
  }
}

export function dataAwsccBackupBackupPlanBackupPlanToTerraform(struct?: DataAwsccBackupBackupPlanBackupPlan): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    advanced_backup_settings: cdktf.listMapper(dataAwsccBackupBackupPlanBackupPlanAdvancedBackupSettingsToTerraform)(struct!.advancedBackupSettings),
    backup_plan_name: cdktf.stringToTerraform(struct!.backupPlanName),
    backup_plan_rule: cdktf.listMapper(dataAwsccBackupBackupPlanBackupPlanBackupPlanRuleToTerraform)(struct!.backupPlanRule),
  }
}


/**
* Represents a {@link https://www.terraform.io/docs/providers/awscc/d/backup_backup_plan.html awscc_backup_backup_plan}
*/
export class DataAwsccBackupBackupPlan extends cdktf.TerraformDataSource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType: string = "awscc_backup_backup_plan";

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://www.terraform.io/docs/providers/awscc/d/backup_backup_plan.html awscc_backup_backup_plan} Data Source
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DataAwsccBackupBackupPlanConfig
  */
  public constructor(scope: Construct, id: string, config: DataAwsccBackupBackupPlanConfig) {
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
    this._id = config.id;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // backup_plan - computed: true, optional: false, required: false
  public get backupPlan() {
    return this.interpolationForAttribute('backup_plan') as any;
  }

  // backup_plan_arn - computed: true, optional: false, required: false
  public get backupPlanArn() {
    return this.getStringAttribute('backup_plan_arn');
  }

  // backup_plan_id - computed: true, optional: false, required: false
  public get backupPlanId() {
    return this.getStringAttribute('backup_plan_id');
  }

  // backup_plan_tags - computed: true, optional: false, required: false
  public backupPlanTags(key: string): string {
    return new cdktf.StringMap(this, 'backup_plan_tags').lookup(key);
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

  // version_id - computed: true, optional: false, required: false
  public get versionId() {
    return this.getStringAttribute('version_id');
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
