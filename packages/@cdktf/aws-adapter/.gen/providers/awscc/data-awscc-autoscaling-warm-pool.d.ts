import { Construct } from 'constructs';
import * as cdktf from 'cdktf';
export interface DataAwsccAutoscalingWarmPoolConfig extends cdktf.TerraformMetaArguments {
    /**
    * Uniquely identifies the resource.
    *
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/d/autoscaling_warm_pool.html#id DataAwsccAutoscalingWarmPool#id}
    */
    readonly id: string;
}
/**
* Represents a {@link https://www.terraform.io/docs/providers/awscc/d/autoscaling_warm_pool.html awscc_autoscaling_warm_pool}
*/
export declare class DataAwsccAutoscalingWarmPool extends cdktf.TerraformDataSource {
    static readonly tfResourceType: string;
    /**
    * Create a new {@link https://www.terraform.io/docs/providers/awscc/d/autoscaling_warm_pool.html awscc_autoscaling_warm_pool} Data Source
    *
    * @param scope The scope in which to define this construct
    * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
    * @param options DataAwsccAutoscalingWarmPoolConfig
    */
    constructor(scope: Construct, id: string, config: DataAwsccAutoscalingWarmPoolConfig);
    get autoScalingGroupName(): string;
    private _id;
    get id(): string;
    set id(value: string);
    get idInput(): string;
    get maxGroupPreparedCapacity(): number;
    get minSize(): number;
    get poolState(): string;
    protected synthesizeAttributes(): {
        [name: string]: any;
    };
}
