import { Construct } from 'constructs';
import * as cdktf from 'cdktf';
export interface DataAwsccIotScheduledAuditConfig extends cdktf.TerraformMetaArguments {
    /**
    * Uniquely identifies the resource.
    *
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/d/iot_scheduled_audit.html#id DataAwsccIotScheduledAudit#id}
    */
    readonly id: string;
}
export declare class DataAwsccIotScheduledAuditTags extends cdktf.ComplexComputedList {
    get key(): string;
    get value(): string;
}
export declare function dataAwsccIotScheduledAuditTagsToTerraform(struct?: DataAwsccIotScheduledAuditTags): any;
/**
* Represents a {@link https://www.terraform.io/docs/providers/awscc/d/iot_scheduled_audit.html awscc_iot_scheduled_audit}
*/
export declare class DataAwsccIotScheduledAudit extends cdktf.TerraformDataSource {
    static readonly tfResourceType: string;
    /**
    * Create a new {@link https://www.terraform.io/docs/providers/awscc/d/iot_scheduled_audit.html awscc_iot_scheduled_audit} Data Source
    *
    * @param scope The scope in which to define this construct
    * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
    * @param options DataAwsccIotScheduledAuditConfig
    */
    constructor(scope: Construct, id: string, config: DataAwsccIotScheduledAuditConfig);
    get dayOfMonth(): string;
    get dayOfWeek(): string;
    get frequency(): string;
    private _id;
    get id(): string;
    set id(value: string);
    get idInput(): string;
    get scheduledAuditArn(): string;
    get scheduledAuditName(): string;
    get tags(): any;
    get targetCheckNames(): string[];
    protected synthesizeAttributes(): {
        [name: string]: any;
    };
}
