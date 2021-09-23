// https://www.terraform.io/docs/providers/awscc/r/ecs_capacity_provider.html
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface EcsCapacityProviderConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/ecs_capacity_provider.html#auto_scaling_group_provider EcsCapacityProvider#auto_scaling_group_provider}
  */
  readonly autoScalingGroupProvider: EcsCapacityProviderAutoScalingGroupProvider;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/ecs_capacity_provider.html#name EcsCapacityProvider#name}
  */
  readonly name?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/ecs_capacity_provider.html#tags EcsCapacityProvider#tags}
  */
  readonly tags?: EcsCapacityProviderTags[];
}
export interface EcsCapacityProviderAutoScalingGroupProviderManagedScaling {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/ecs_capacity_provider.html#instance_warmup_period EcsCapacityProvider#instance_warmup_period}
  */
  readonly instanceWarmupPeriod?: number;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/ecs_capacity_provider.html#maximum_scaling_step_size EcsCapacityProvider#maximum_scaling_step_size}
  */
  readonly maximumScalingStepSize?: number;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/ecs_capacity_provider.html#minimum_scaling_step_size EcsCapacityProvider#minimum_scaling_step_size}
  */
  readonly minimumScalingStepSize?: number;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/ecs_capacity_provider.html#status EcsCapacityProvider#status}
  */
  readonly status?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/ecs_capacity_provider.html#target_capacity EcsCapacityProvider#target_capacity}
  */
  readonly targetCapacity?: number;
}

export function ecsCapacityProviderAutoScalingGroupProviderManagedScalingToTerraform(struct?: EcsCapacityProviderAutoScalingGroupProviderManagedScaling): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    instance_warmup_period: cdktf.numberToTerraform(struct!.instanceWarmupPeriod),
    maximum_scaling_step_size: cdktf.numberToTerraform(struct!.maximumScalingStepSize),
    minimum_scaling_step_size: cdktf.numberToTerraform(struct!.minimumScalingStepSize),
    status: cdktf.stringToTerraform(struct!.status),
    target_capacity: cdktf.numberToTerraform(struct!.targetCapacity),
  }
}

export interface EcsCapacityProviderAutoScalingGroupProvider {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/ecs_capacity_provider.html#auto_scaling_group_arn EcsCapacityProvider#auto_scaling_group_arn}
  */
  readonly autoScalingGroupArn: string;
  /**
  * The managed scaling settings for the Auto Scaling group capacity provider.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/ecs_capacity_provider.html#managed_scaling EcsCapacityProvider#managed_scaling}
  */
  readonly managedScaling?: EcsCapacityProviderAutoScalingGroupProviderManagedScaling;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/ecs_capacity_provider.html#managed_termination_protection EcsCapacityProvider#managed_termination_protection}
  */
  readonly managedTerminationProtection?: string;
}

export function ecsCapacityProviderAutoScalingGroupProviderToTerraform(struct?: EcsCapacityProviderAutoScalingGroupProvider): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    auto_scaling_group_arn: cdktf.stringToTerraform(struct!.autoScalingGroupArn),
    managed_scaling: ecsCapacityProviderAutoScalingGroupProviderManagedScalingToTerraform(struct!.managedScaling),
    managed_termination_protection: cdktf.stringToTerraform(struct!.managedTerminationProtection),
  }
}

export interface EcsCapacityProviderTags {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/ecs_capacity_provider.html#key EcsCapacityProvider#key}
  */
  readonly key?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/ecs_capacity_provider.html#value EcsCapacityProvider#value}
  */
  readonly value?: string;
}

export function ecsCapacityProviderTagsToTerraform(struct?: EcsCapacityProviderTags): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    key: cdktf.stringToTerraform(struct!.key),
    value: cdktf.stringToTerraform(struct!.value),
  }
}


/**
* Represents a {@link https://www.terraform.io/docs/providers/awscc/r/ecs_capacity_provider.html awscc_ecs_capacity_provider}
*/
export class EcsCapacityProvider extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType: string = "awscc_ecs_capacity_provider";

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://www.terraform.io/docs/providers/awscc/r/ecs_capacity_provider.html awscc_ecs_capacity_provider} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options EcsCapacityProviderConfig
  */
  public constructor(scope: Construct, id: string, config: EcsCapacityProviderConfig) {
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
    this._autoScalingGroupProvider = config.autoScalingGroupProvider;
    this._name = config.name;
    this._tags = config.tags;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // auto_scaling_group_provider - computed: false, optional: false, required: true
  private _autoScalingGroupProvider: EcsCapacityProviderAutoScalingGroupProvider;
  public get autoScalingGroupProvider() {
    return this.interpolationForAttribute('auto_scaling_group_provider') as any;
  }
  public set autoScalingGroupProvider(value: EcsCapacityProviderAutoScalingGroupProvider) {
    this._autoScalingGroupProvider = value;
  }
  // Temporarily expose input value. Use with caution.
  public get autoScalingGroupProviderInput() {
    return this._autoScalingGroupProvider
  }

  // id - computed: true, optional: false, required: false
  public get id() {
    return this.getStringAttribute('id');
  }

  // name - computed: true, optional: true, required: false
  private _name?: string;
  public get name() {
    return this.getStringAttribute('name');
  }
  public set name(value: string) {
    this._name = value;
  }
  public resetName() {
    this._name = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get nameInput() {
    return this._name
  }

  // tags - computed: false, optional: true, required: false
  private _tags?: EcsCapacityProviderTags[];
  public get tags() {
    return this.interpolationForAttribute('tags') as any;
  }
  public set tags(value: EcsCapacityProviderTags[] ) {
    this._tags = value;
  }
  public resetTags() {
    this._tags = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tagsInput() {
    return this._tags
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      auto_scaling_group_provider: ecsCapacityProviderAutoScalingGroupProviderToTerraform(this._autoScalingGroupProvider),
      name: cdktf.stringToTerraform(this._name),
      tags: cdktf.listMapper(ecsCapacityProviderTagsToTerraform)(this._tags),
    };
  }
}
