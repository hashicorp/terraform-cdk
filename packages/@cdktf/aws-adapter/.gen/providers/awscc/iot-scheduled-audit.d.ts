import { Construct } from 'constructs';
import * as cdktf from 'cdktf';
export interface IotScheduledAuditConfig extends cdktf.TerraformMetaArguments {
    /**
    * The day of the month on which the scheduled audit takes place. Can be 1 through 31 or LAST. This field is required if the frequency parameter is set to MONTHLY.
    *
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/iot_scheduled_audit.html#day_of_month IotScheduledAudit#day_of_month}
    */
    readonly dayOfMonth?: string;
    /**
    * The day of the week on which the scheduled audit takes place. Can be one of SUN, MON, TUE,WED, THU, FRI, or SAT. This field is required if the frequency parameter is set to WEEKLY or BIWEEKLY.
    *
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/iot_scheduled_audit.html#day_of_week IotScheduledAudit#day_of_week}
    */
    readonly dayOfWeek?: string;
    /**
    * How often the scheduled audit takes place. Can be one of DAILY, WEEKLY, BIWEEKLY, or MONTHLY.
    *
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/iot_scheduled_audit.html#frequency IotScheduledAudit#frequency}
    */
    readonly frequency: string;
    /**
    * The name you want to give to the scheduled audit.
    *
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/iot_scheduled_audit.html#scheduled_audit_name IotScheduledAudit#scheduled_audit_name}
    */
    readonly scheduledAuditName?: string;
    /**
    * An array of key-value pairs to apply to this resource.
    *
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/iot_scheduled_audit.html#tags IotScheduledAudit#tags}
    */
    readonly tags?: IotScheduledAuditTags[];
    /**
    * Which checks are performed during the scheduled audit. Checks must be enabled for your account.
    *
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/iot_scheduled_audit.html#target_check_names IotScheduledAudit#target_check_names}
    */
    readonly targetCheckNames: string[];
}
export interface IotScheduledAuditTags {
    /**
    * The tag's key.
    *
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/iot_scheduled_audit.html#key IotScheduledAudit#key}
    */
    readonly key: string;
    /**
    * The tag's value.
    *
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/iot_scheduled_audit.html#value IotScheduledAudit#value}
    */
    readonly value: string;
}
export declare function iotScheduledAuditTagsToTerraform(struct?: IotScheduledAuditTags): any;
/**
* Represents a {@link https://www.terraform.io/docs/providers/awscc/r/iot_scheduled_audit.html awscc_iot_scheduled_audit}
*/
export declare class IotScheduledAudit extends cdktf.TerraformResource {
    static readonly tfResourceType: string;
    /**
    * Create a new {@link https://www.terraform.io/docs/providers/awscc/r/iot_scheduled_audit.html awscc_iot_scheduled_audit} Resource
    *
    * @param scope The scope in which to define this construct
    * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
    * @param options IotScheduledAuditConfig
    */
    constructor(scope: Construct, id: string, config: IotScheduledAuditConfig);
    private _dayOfMonth?;
    get dayOfMonth(): string;
    set dayOfMonth(value: string);
    resetDayOfMonth(): void;
    get dayOfMonthInput(): string | undefined;
    private _dayOfWeek?;
    get dayOfWeek(): string;
    set dayOfWeek(value: string);
    resetDayOfWeek(): void;
    get dayOfWeekInput(): string | undefined;
    private _frequency;
    get frequency(): string;
    set frequency(value: string);
    get frequencyInput(): string;
    get id(): string;
    get scheduledAuditArn(): string;
    private _scheduledAuditName?;
    get scheduledAuditName(): string;
    set scheduledAuditName(value: string);
    resetScheduledAuditName(): void;
    get scheduledAuditNameInput(): string | undefined;
    private _tags?;
    get tags(): IotScheduledAuditTags[];
    set tags(value: IotScheduledAuditTags[]);
    resetTags(): void;
    get tagsInput(): IotScheduledAuditTags[] | undefined;
    private _targetCheckNames;
    get targetCheckNames(): string[];
    set targetCheckNames(value: string[]);
    get targetCheckNamesInput(): string[];
    protected synthesizeAttributes(): {
        [name: string]: any;
    };
}
