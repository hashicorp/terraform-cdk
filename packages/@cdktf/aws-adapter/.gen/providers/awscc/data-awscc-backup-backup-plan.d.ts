import { Construct } from 'constructs';
import * as cdktf from 'cdktf';
export interface DataAwsccBackupBackupPlanConfig extends cdktf.TerraformMetaArguments {
    /**
    * Uniquely identifies the resource.
    *
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/d/backup_backup_plan.html#id DataAwsccBackupBackupPlan#id}
    */
    readonly id: string;
}
export declare class DataAwsccBackupBackupPlanBackupPlanAdvancedBackupSettings extends cdktf.ComplexComputedList {
    get backupOptions(): any;
    get resourceType(): string;
}
export declare function dataAwsccBackupBackupPlanBackupPlanAdvancedBackupSettingsToTerraform(struct?: DataAwsccBackupBackupPlanBackupPlanAdvancedBackupSettings): any;
export declare class DataAwsccBackupBackupPlanBackupPlanBackupPlanRuleCopyActionsLifecycle extends cdktf.ComplexComputedList {
    get deleteAfterDays(): number;
    get moveToColdStorageAfterDays(): number;
}
export declare function dataAwsccBackupBackupPlanBackupPlanBackupPlanRuleCopyActionsLifecycleToTerraform(struct?: DataAwsccBackupBackupPlanBackupPlanBackupPlanRuleCopyActionsLifecycle): any;
export declare class DataAwsccBackupBackupPlanBackupPlanBackupPlanRuleCopyActions extends cdktf.ComplexComputedList {
    get destinationBackupVaultArn(): string;
    get lifecycle(): any;
}
export declare function dataAwsccBackupBackupPlanBackupPlanBackupPlanRuleCopyActionsToTerraform(struct?: DataAwsccBackupBackupPlanBackupPlanBackupPlanRuleCopyActions): any;
export declare class DataAwsccBackupBackupPlanBackupPlanBackupPlanRuleLifecycle extends cdktf.ComplexComputedList {
    get deleteAfterDays(): number;
    get moveToColdStorageAfterDays(): number;
}
export declare function dataAwsccBackupBackupPlanBackupPlanBackupPlanRuleLifecycleToTerraform(struct?: DataAwsccBackupBackupPlanBackupPlanBackupPlanRuleLifecycle): any;
export declare class DataAwsccBackupBackupPlanBackupPlanBackupPlanRule extends cdktf.ComplexComputedList {
    get completionWindowMinutes(): number;
    get copyActions(): any;
    get enableContinuousBackup(): any;
    get lifecycle(): any;
    get recoveryPointTags(): any;
    get ruleName(): string;
    get scheduleExpression(): string;
    get startWindowMinutes(): number;
    get targetBackupVault(): string;
}
export declare function dataAwsccBackupBackupPlanBackupPlanBackupPlanRuleToTerraform(struct?: DataAwsccBackupBackupPlanBackupPlanBackupPlanRule): any;
export declare class DataAwsccBackupBackupPlanBackupPlan extends cdktf.ComplexComputedList {
    get advancedBackupSettings(): any;
    get backupPlanName(): string;
    get backupPlanRule(): any;
}
export declare function dataAwsccBackupBackupPlanBackupPlanToTerraform(struct?: DataAwsccBackupBackupPlanBackupPlan): any;
/**
* Represents a {@link https://www.terraform.io/docs/providers/awscc/d/backup_backup_plan.html awscc_backup_backup_plan}
*/
export declare class DataAwsccBackupBackupPlan extends cdktf.TerraformDataSource {
    static readonly tfResourceType: string;
    /**
    * Create a new {@link https://www.terraform.io/docs/providers/awscc/d/backup_backup_plan.html awscc_backup_backup_plan} Data Source
    *
    * @param scope The scope in which to define this construct
    * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
    * @param options DataAwsccBackupBackupPlanConfig
    */
    constructor(scope: Construct, id: string, config: DataAwsccBackupBackupPlanConfig);
    get backupPlan(): any;
    get backupPlanArn(): string;
    get backupPlanId(): string;
    backupPlanTags(key: string): string;
    private _id;
    get id(): string;
    set id(value: string);
    get idInput(): string;
    get versionId(): string;
    protected synthesizeAttributes(): {
        [name: string]: any;
    };
}
