// https://www.terraform.io/docs/providers/awscc/r/autoscaling_warm_pool.html
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

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
export class AutoscalingWarmPool extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType: string = "awscc_autoscaling_warm_pool";

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://www.terraform.io/docs/providers/awscc/r/autoscaling_warm_pool.html awscc_autoscaling_warm_pool} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options AutoscalingWarmPoolConfig
  */
  public constructor(scope: Construct, id: string, config: AutoscalingWarmPoolConfig) {
    super(scope, id, {
      terraformResourceType: 'awscc_autoscaling_warm_pool',
      terraformGeneratorMetadata: {
        providerName: 'awscc'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle
    });
    this._autoScalingGroupName = config.autoScalingGroupName;
    this._maxGroupPreparedCapacity = config.maxGroupPreparedCapacity;
    this._minSize = config.minSize;
    this._poolState = config.poolState;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // auto_scaling_group_name - computed: false, optional: false, required: true
  private _autoScalingGroupName: string;
  public get autoScalingGroupName() {
    return this.getStringAttribute('auto_scaling_group_name');
  }
  public set autoScalingGroupName(value: string) {
    this._autoScalingGroupName = value;
  }
  // Temporarily expose input value. Use with caution.
  public get autoScalingGroupNameInput() {
    return this._autoScalingGroupName
  }

  // id - computed: true, optional: false, required: false
  public get id() {
    return this.getStringAttribute('id');
  }

  // max_group_prepared_capacity - computed: false, optional: true, required: false
  private _maxGroupPreparedCapacity?: number;
  public get maxGroupPreparedCapacity() {
    return this.getNumberAttribute('max_group_prepared_capacity');
  }
  public set maxGroupPreparedCapacity(value: number ) {
    this._maxGroupPreparedCapacity = value;
  }
  public resetMaxGroupPreparedCapacity() {
    this._maxGroupPreparedCapacity = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get maxGroupPreparedCapacityInput() {
    return this._maxGroupPreparedCapacity
  }

  // min_size - computed: false, optional: true, required: false
  private _minSize?: number;
  public get minSize() {
    return this.getNumberAttribute('min_size');
  }
  public set minSize(value: number ) {
    this._minSize = value;
  }
  public resetMinSize() {
    this._minSize = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get minSizeInput() {
    return this._minSize
  }

  // pool_state - computed: false, optional: true, required: false
  private _poolState?: string;
  public get poolState() {
    return this.getStringAttribute('pool_state');
  }
  public set poolState(value: string ) {
    this._poolState = value;
  }
  public resetPoolState() {
    this._poolState = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get poolStateInput() {
    return this._poolState
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      auto_scaling_group_name: cdktf.stringToTerraform(this._autoScalingGroupName),
      max_group_prepared_capacity: cdktf.numberToTerraform(this._maxGroupPreparedCapacity),
      min_size: cdktf.numberToTerraform(this._minSize),
      pool_state: cdktf.stringToTerraform(this._poolState),
    };
  }
}
