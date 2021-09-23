// https://www.terraform.io/docs/providers/awscc/d/ecs_capacity_provider.html
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DataAwsccEcsCapacityProviderConfig extends cdktf.TerraformMetaArguments {
  /**
  * Uniquely identifies the resource.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/d/ecs_capacity_provider.html#id DataAwsccEcsCapacityProvider#id}
  */
  readonly id: string;
}
export class DataAwsccEcsCapacityProviderAutoScalingGroupProviderManagedScaling extends cdktf.ComplexComputedList {

  // instance_warmup_period - computed: true, optional: false, required: false
  public get instanceWarmupPeriod() {
    return this.getNumberAttribute('instance_warmup_period');
  }

  // maximum_scaling_step_size - computed: true, optional: false, required: false
  public get maximumScalingStepSize() {
    return this.getNumberAttribute('maximum_scaling_step_size');
  }

  // minimum_scaling_step_size - computed: true, optional: false, required: false
  public get minimumScalingStepSize() {
    return this.getNumberAttribute('minimum_scaling_step_size');
  }

  // status - computed: true, optional: false, required: false
  public get status() {
    return this.getStringAttribute('status');
  }

  // target_capacity - computed: true, optional: false, required: false
  public get targetCapacity() {
    return this.getNumberAttribute('target_capacity');
  }
}

export function dataAwsccEcsCapacityProviderAutoScalingGroupProviderManagedScalingToTerraform(struct?: DataAwsccEcsCapacityProviderAutoScalingGroupProviderManagedScaling): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    instance_warmup_period: cdktf.numberToTerraform(struct!.instanceWarmupPeriod),
    maximum_scaling_step_size: cdktf.numberToTerraform(struct!.maximumScalingStepSize),
    minimum_scaling_step_size: cdktf.numberToTerraform(struct!.minimumScalingStepSize),
    status: cdktf.stringToTerraform(struct!.status),
    target_capacity: cdktf.numberToTerraform(struct!.targetCapacity),
  }
}

export class DataAwsccEcsCapacityProviderAutoScalingGroupProvider extends cdktf.ComplexComputedList {

  // auto_scaling_group_arn - computed: true, optional: false, required: false
  public get autoScalingGroupArn() {
    return this.getStringAttribute('auto_scaling_group_arn');
  }

  // managed_scaling - computed: true, optional: false, required: false
  public get managedScaling() {
    return this.interpolationForAttribute('managed_scaling') as any;
  }

  // managed_termination_protection - computed: true, optional: false, required: false
  public get managedTerminationProtection() {
    return this.getStringAttribute('managed_termination_protection');
  }
}

export function dataAwsccEcsCapacityProviderAutoScalingGroupProviderToTerraform(struct?: DataAwsccEcsCapacityProviderAutoScalingGroupProvider): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    auto_scaling_group_arn: cdktf.stringToTerraform(struct!.autoScalingGroupArn),
    managed_scaling: dataAwsccEcsCapacityProviderAutoScalingGroupProviderManagedScalingToTerraform(struct!.managedScaling),
    managed_termination_protection: cdktf.stringToTerraform(struct!.managedTerminationProtection),
  }
}

export class DataAwsccEcsCapacityProviderTags extends cdktf.ComplexComputedList {

  // key - computed: true, optional: false, required: false
  public get key() {
    return this.getStringAttribute('key');
  }

  // value - computed: true, optional: false, required: false
  public get value() {
    return this.getStringAttribute('value');
  }
}

export function dataAwsccEcsCapacityProviderTagsToTerraform(struct?: DataAwsccEcsCapacityProviderTags): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    key: cdktf.stringToTerraform(struct!.key),
    value: cdktf.stringToTerraform(struct!.value),
  }
}


/**
* Represents a {@link https://www.terraform.io/docs/providers/awscc/d/ecs_capacity_provider.html awscc_ecs_capacity_provider}
*/
export class DataAwsccEcsCapacityProvider extends cdktf.TerraformDataSource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType: string = "awscc_ecs_capacity_provider";

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://www.terraform.io/docs/providers/awscc/d/ecs_capacity_provider.html awscc_ecs_capacity_provider} Data Source
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DataAwsccEcsCapacityProviderConfig
  */
  public constructor(scope: Construct, id: string, config: DataAwsccEcsCapacityProviderConfig) {
    super(scope, id, {
      terraformResourceType: 'awscc_ecs_capacity_provider',
      terraformGeneratorMetadata: {
        providerName: 'awscc'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle
    });
    this._id = config.id;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // auto_scaling_group_provider - computed: true, optional: false, required: false
  public get autoScalingGroupProvider() {
    return this.interpolationForAttribute('auto_scaling_group_provider') as any;
  }

  // id - computed: false, optional: false, required: true
  private _id: string;
  public get id() {
    return this.getStringAttribute('id');
  }
  public set id(value: string) {
    this._id = value;
  }
  // Temporarily expose input value. Use with caution.
  public get idInput() {
    return this._id
  }

  // name - computed: true, optional: false, required: false
  public get name() {
    return this.getStringAttribute('name');
  }

  // tags - computed: true, optional: false, required: false
  public get tags() {
    return this.interpolationForAttribute('tags') as any;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      id: cdktf.stringToTerraform(this._id),
    };
  }
}
