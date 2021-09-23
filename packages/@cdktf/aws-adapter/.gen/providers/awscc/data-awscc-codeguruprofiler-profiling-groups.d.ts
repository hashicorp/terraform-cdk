import { Construct } from 'constructs';
import * as cdktf from 'cdktf';
export interface DataAwsccCodeguruprofilerProfilingGroupsConfig extends cdktf.TerraformMetaArguments {
}
/**
* Represents a {@link https://www.terraform.io/docs/providers/awscc/d/codeguruprofiler_profiling_groups.html awscc_codeguruprofiler_profiling_groups}
*/
export declare class DataAwsccCodeguruprofilerProfilingGroups extends cdktf.TerraformDataSource {
    static readonly tfResourceType: string;
    /**
    * Create a new {@link https://www.terraform.io/docs/providers/awscc/d/codeguruprofiler_profiling_groups.html awscc_codeguruprofiler_profiling_groups} Data Source
    *
    * @param scope The scope in which to define this construct
    * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
    * @param options DataAwsccCodeguruprofilerProfilingGroupsConfig = {}
    */
    constructor(scope: Construct, id: string, config?: DataAwsccCodeguruprofilerProfilingGroupsConfig);
    get id(): string;
    get ids(): string[];
    protected synthesizeAttributes(): {
        [name: string]: any;
    };
}
