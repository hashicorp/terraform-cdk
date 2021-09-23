import { Construct } from 'constructs';
import * as cdktf from 'cdktf';
export interface BackupBackupPlanConfig extends cdktf.TerraformMetaArguments {
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/backup_backup_plan.html#backup_plan BackupBackupPlan#backup_plan}
    */
    readonly backupPlan: BackupBackupPlanBackupPlan;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/backup_backup_plan.html#backup_plan_tags BackupBackupPlan#backup_plan_tags}
    */
    readonly backupPlanTags?: {
        [key: string]: string;
    } | cdktf.IResolvable;
}
export interface BackupBackupPlanBackupPlanAdvancedBackupSettings {
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/backup_backup_plan.html#backup_options BackupBackupPlan#backup_options}
    */
    readonly backupOptions: {
        [key: string]: string;
    } | cdktf.IResolvable;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/backup_backup_plan.html#resource_type BackupBackupPlan#resource_type}
    */
    readonly resourceType: string;
}
export declare function backupBackupPlanBackupPlanAdvancedBackupSettingsToTerraform(struct?: BackupBackupPlanBackupPlanAdvancedBackupSettings): any;
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
export declare function backupBackupPlanBackupPlanBackupPlanRuleCopyActionsLifecycleToTerraform(struct?: BackupBackupPlanBackupPlanBackupPlanRuleCopyActionsLifecycle): any;
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
export declare function backupBackupPlanBackupPlanBackupPlanRuleCopyActionsToTerraform(struct?: BackupBackupPlanBackupPlanBackupPlanRuleCopyActions): any;
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
export declare function backupBackupPlanBackupPlanBackupPlanRuleLifecycleToTerraform(struct?: BackupBackupPlanBackupPlanBackupPlanRuleLifecycle): any;
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
    readonly recoveryPointTags?: {
        [key: string]: string;
    } | cdktf.IResolvable;
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
export declare function backupBackupPlanBackupPlanBackupPlanRuleToTerraform(struct?: BackupBackupPlanBackupPlanBackupPlanRule): any;
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
export declare function backupBackupPlanBackupPlanToTerraform(struct?: BackupBackupPlanBackupPlan): any;
/**
* Represents a {@link https://www.terraform.io/docs/providers/awscc/r/backup_backup_plan.html awscc_backup_backup_plan}
*/
export declare class BackupBackupPlan extends cdktf.TerraformResource {
    static readonly tfResourceType: string;
    /**
    * Create a new {@link https://www.terraform.io/docs/providers/awscc/r/backup_backup_plan.html awscc_backup_backup_plan} Resource
    *
    * @param scope The scope in which to define this construct
    * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
    * @param options BackupBackupPlanConfig
    */
    constructor(scope: Construct, id: string, config: BackupBackupPlanConfig);
    private _backupPlan;
    get backupPlan(): BackupBackupPlanBackupPlan;
    set backupPlan(value: BackupBackupPlanBackupPlan);
    get backupPlanInput(): BackupBackupPlanBackupPlan;
    get backupPlanArn(): string;
    get backupPlanId(): string;
    private _backupPlanTags?;
    get backupPlanTags(): {
        [key: string]: string;
    } | cdktf.IResolvable;
    set backupPlanTags(value: {
        [key: string]: string;
    } | cdktf.IResolvable);
    resetBackupPlanTags(): void;
    get backupPlanTagsInput(): cdktf.IResolvable | {
        [key: string]: string;
    } | undefined;
    get id(): string;
    get versionId(): string;
    protected synthesizeAttributes(): {
        [name: string]: any;
    };
}
