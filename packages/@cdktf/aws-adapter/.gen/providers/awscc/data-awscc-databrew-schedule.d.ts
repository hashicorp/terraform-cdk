import { Construct } from 'constructs';
import * as cdktf from 'cdktf';
export interface DataAwsccDatabrewScheduleConfig extends cdktf.TerraformMetaArguments {
    /**
    * Uniquely identifies the resource.
    *
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/d/databrew_schedule.html#id DataAwsccDatabrewSchedule#id}
    */
    readonly id: string;
}
export declare class DataAwsccDatabrewScheduleTags extends cdktf.ComplexComputedList {
    get key(): string;
    get value(): string;
}
export declare function dataAwsccDatabrewScheduleTagsToTerraform(struct?: DataAwsccDatabrewScheduleTags): any;
/**
* Represents a {@link https://www.terraform.io/docs/providers/awscc/d/databrew_schedule.html awscc_databrew_schedule}
*/
export declare class DataAwsccDatabrewSchedule extends cdktf.TerraformDataSource {
    static readonly tfResourceType: string;
    /**
    * Create a new {@link https://www.terraform.io/docs/providers/awscc/d/databrew_schedule.html awscc_databrew_schedule} Data Source
    *
    * @param scope The scope in which to define this construct
    * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
    * @param options DataAwsccDatabrewScheduleConfig
    */
    constructor(scope: Construct, id: string, config: DataAwsccDatabrewScheduleConfig);
    get cronExpression(): string;
    private _id;
    get id(): string;
    set id(value: string);
    get idInput(): string;
    get jobNames(): string[];
    get name(): string;
    get tags(): any;
    protected synthesizeAttributes(): {
        [name: string]: any;
    };
}
