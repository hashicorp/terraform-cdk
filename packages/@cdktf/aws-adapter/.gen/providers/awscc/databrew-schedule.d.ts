import { Construct } from 'constructs';
import * as cdktf from 'cdktf';
export interface DatabrewScheduleConfig extends cdktf.TerraformMetaArguments {
    /**
    * Schedule cron
    *
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/databrew_schedule.html#cron_expression DatabrewSchedule#cron_expression}
    */
    readonly cronExpression: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/databrew_schedule.html#job_names DatabrewSchedule#job_names}
    */
    readonly jobNames?: string[];
    /**
    * Schedule Name
    *
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/databrew_schedule.html#name DatabrewSchedule#name}
    */
    readonly name: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/databrew_schedule.html#tags DatabrewSchedule#tags}
    */
    readonly tags?: DatabrewScheduleTags[];
}
export interface DatabrewScheduleTags {
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/databrew_schedule.html#key DatabrewSchedule#key}
    */
    readonly key: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/databrew_schedule.html#value DatabrewSchedule#value}
    */
    readonly value: string;
}
export declare function databrewScheduleTagsToTerraform(struct?: DatabrewScheduleTags): any;
/**
* Represents a {@link https://www.terraform.io/docs/providers/awscc/r/databrew_schedule.html awscc_databrew_schedule}
*/
export declare class DatabrewSchedule extends cdktf.TerraformResource {
    static readonly tfResourceType: string;
    /**
    * Create a new {@link https://www.terraform.io/docs/providers/awscc/r/databrew_schedule.html awscc_databrew_schedule} Resource
    *
    * @param scope The scope in which to define this construct
    * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
    * @param options DatabrewScheduleConfig
    */
    constructor(scope: Construct, id: string, config: DatabrewScheduleConfig);
    private _cronExpression;
    get cronExpression(): string;
    set cronExpression(value: string);
    get cronExpressionInput(): string;
    get id(): string;
    private _jobNames?;
    get jobNames(): string[];
    set jobNames(value: string[]);
    resetJobNames(): void;
    get jobNamesInput(): string[] | undefined;
    private _name;
    get name(): string;
    set name(value: string);
    get nameInput(): string;
    private _tags?;
    get tags(): DatabrewScheduleTags[];
    set tags(value: DatabrewScheduleTags[]);
    resetTags(): void;
    get tagsInput(): DatabrewScheduleTags[] | undefined;
    protected synthesizeAttributes(): {
        [name: string]: any;
    };
}
