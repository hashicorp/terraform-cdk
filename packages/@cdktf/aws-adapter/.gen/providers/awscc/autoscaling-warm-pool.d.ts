import { Construct } from 'constructs';
import * as cdktf from 'cdktf';
export interface AutoscalingWarmPoolConfig extends cdktf.TerraformMetaArguments {
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/autoscaling_warm_pool.html#auto_scaling_group_name AutoscalingWarmPool#auto_scaling_group_name}
    */
    readonly autoScalingGroupName: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/autoscaling_warm_pool.html#max_group_prepared_capacity AutoscalingWarmPool#max_group_prepared_capacity}
    */
    readonly maxGroupPreparedCapacity?: number;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/autoscaling_warm_pool.html#min_size AutoscalingWarmPool#min_size}
    */
    readonly minSize?: number;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/autoscaling_warm_pool.html#pool_state AutoscalingWarmPool#pool_state}
    */
    readonly poolState?: string;
}
/**
* Represents a {@link https://www.terraform.io/docs/providers/awscc/r/autoscaling_warm_pool.html awscc_autoscaling_warm_pool}
*/
export declare class AutoscalingWarmPool extends cdktf.TerraformResource {
    static readonly tfResourceType: string;
    /**
    * Create a new {@link https://www.terraform.io/docs/providers/awscc/r/autoscaling_warm_pool.html awscc_autoscaling_warm_pool} Resource
    *
    * @param scope The scope in which to define this construct
    * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
    * @param options AutoscalingWarmPoolConfig
    */
    constructor(scope: Construct, id: string, config: AutoscalingWarmPoolConfig);
    private _autoScalingGroupName;
    get autoScalingGroupName(): string;
    set autoScalingGroupName(value: string);
    get autoScalingGroupNameInput(): string;
    get id(): string;
    private _maxGroupPreparedCapacity?;
    get maxGroupPreparedCapacity(): number;
    set maxGroupPreparedCapacity(value: number);
    resetMaxGroupPreparedCapacity(): void;
    get maxGroupPreparedCapacityInput(): number | undefined;
    private _minSize?;
    get minSize(): number;
    set minSize(value: number);
    resetMinSize(): void;
    get minSizeInput(): number | undefined;
    private _poolState?;
    get poolState(): string;
    set poolState(value: string);
    resetPoolState(): void;
    get poolStateInput(): string | undefined;
    protected synthesizeAttributes(): {
        [name: string]: any;
    };
}
