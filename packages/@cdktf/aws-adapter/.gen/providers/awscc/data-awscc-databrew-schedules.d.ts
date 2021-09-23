import { Construct } from 'constructs';
import * as cdktf from 'cdktf';
export interface DataAwsccDatabrewSchedulesConfig extends cdktf.TerraformMetaArguments {
}
/**
* Represents a {@link https://www.terraform.io/docs/providers/awscc/d/databrew_schedules.html awscc_databrew_schedules}
*/
export declare class DataAwsccDatabrewSchedules extends cdktf.TerraformDataSource {
    static readonly tfResourceType: string;
    /**
    * Create a new {@link https://www.terraform.io/docs/providers/awscc/d/databrew_schedules.html awscc_databrew_schedules} Data Source
    *
    * @param scope The scope in which to define this construct
    * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
    * @param options DataAwsccDatabrewSchedulesConfig = {}
    */
    constructor(scope: Construct, id: string, config?: DataAwsccDatabrewSchedulesConfig);
    get id(): string;
    get ids(): string[];
    protected synthesizeAttributes(): {
        [name: string]: any;
    };
}
