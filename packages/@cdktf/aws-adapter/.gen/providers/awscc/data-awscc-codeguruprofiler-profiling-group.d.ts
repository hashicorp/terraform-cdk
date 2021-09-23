import { Construct } from 'constructs';
import * as cdktf from 'cdktf';
export interface DataAwsccCodeguruprofilerProfilingGroupConfig extends cdktf.TerraformMetaArguments {
    /**
    * Uniquely identifies the resource.
    *
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/d/codeguruprofiler_profiling_group.html#id DataAwsccCodeguruprofilerProfilingGroup#id}
    */
    readonly id: string;
}
export declare class DataAwsccCodeguruprofilerProfilingGroupAgentPermissions extends cdktf.ComplexComputedList {
    get principals(): string[];
}
export declare function dataAwsccCodeguruprofilerProfilingGroupAgentPermissionsToTerraform(struct?: DataAwsccCodeguruprofilerProfilingGroupAgentPermissions): any;
export declare class DataAwsccCodeguruprofilerProfilingGroupAnomalyDetectionNotificationConfiguration extends cdktf.ComplexComputedList {
    get channelId(): string;
    get channelUri(): string;
}
export declare function dataAwsccCodeguruprofilerProfilingGroupAnomalyDetectionNotificationConfigurationToTerraform(struct?: DataAwsccCodeguruprofilerProfilingGroupAnomalyDetectionNotificationConfiguration): any;
export declare class DataAwsccCodeguruprofilerProfilingGroupTags extends cdktf.ComplexComputedList {
    get key(): string;
    get value(): string;
}
export declare function dataAwsccCodeguruprofilerProfilingGroupTagsToTerraform(struct?: DataAwsccCodeguruprofilerProfilingGroupTags): any;
/**
* Represents a {@link https://www.terraform.io/docs/providers/awscc/d/codeguruprofiler_profiling_group.html awscc_codeguruprofiler_profiling_group}
*/
export declare class DataAwsccCodeguruprofilerProfilingGroup extends cdktf.TerraformDataSource {
    static readonly tfResourceType: string;
    /**
    * Create a new {@link https://www.terraform.io/docs/providers/awscc/d/codeguruprofiler_profiling_group.html awscc_codeguruprofiler_profiling_group} Data Source
    *
    * @param scope The scope in which to define this construct
    * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
    * @param options DataAwsccCodeguruprofilerProfilingGroupConfig
    */
    constructor(scope: Construct, id: string, config: DataAwsccCodeguruprofilerProfilingGroupConfig);
    get agentPermissions(): any;
    get anomalyDetectionNotificationConfiguration(): any;
    get arn(): string;
    get computePlatform(): string;
    private _id;
    get id(): string;
    set id(value: string);
    get idInput(): string;
    get profilingGroupName(): string;
    get tags(): any;
    protected synthesizeAttributes(): {
        [name: string]: any;
    };
}
