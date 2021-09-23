// https://www.terraform.io/docs/providers/awscc/d/gamelift_game_server_group.html
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DataAwsccGameliftGameServerGroupConfig extends cdktf.TerraformMetaArguments {
  /**
  * Uniquely identifies the resource.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/d/gamelift_game_server_group.html#id DataAwsccGameliftGameServerGroup#id}
  */
  readonly id: string;
}
export class DataAwsccGameliftGameServerGroupAutoScalingPolicyTargetTrackingConfiguration extends cdktf.ComplexComputedList {

  // target_value - computed: true, optional: false, required: false
  public get targetValue() {
    return this.getNumberAttribute('target_value');
  }
}

export function dataAwsccGameliftGameServerGroupAutoScalingPolicyTargetTrackingConfigurationToTerraform(struct?: DataAwsccGameliftGameServerGroupAutoScalingPolicyTargetTrackingConfiguration): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    target_value: cdktf.numberToTerraform(struct!.targetValue),
  }
}

export class DataAwsccGameliftGameServerGroupAutoScalingPolicy extends cdktf.ComplexComputedList {

  // estimated_instance_warmup - computed: true, optional: false, required: false
  public get estimatedInstanceWarmup() {
    return this.getNumberAttribute('estimated_instance_warmup');
  }

  // target_tracking_configuration - computed: true, optional: false, required: false
  public get targetTrackingConfiguration() {
    return this.interpolationForAttribute('target_tracking_configuration') as any;
  }
}

export function dataAwsccGameliftGameServerGroupAutoScalingPolicyToTerraform(struct?: DataAwsccGameliftGameServerGroupAutoScalingPolicy): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    estimated_instance_warmup: cdktf.numberToTerraform(struct!.estimatedInstanceWarmup),
    target_tracking_configuration: dataAwsccGameliftGameServerGroupAutoScalingPolicyTargetTrackingConfigurationToTerraform(struct!.targetTrackingConfiguration),
  }
}

export class DataAwsccGameliftGameServerGroupInstanceDefinitions extends cdktf.ComplexComputedList {

  // instance_type - computed: true, optional: false, required: false
  public get instanceType() {
    return this.getStringAttribute('instance_type');
  }

  // weighted_capacity - computed: true, optional: false, required: false
  public get weightedCapacity() {
    return this.getStringAttribute('weighted_capacity');
  }
}

export function dataAwsccGameliftGameServerGroupInstanceDefinitionsToTerraform(struct?: DataAwsccGameliftGameServerGroupInstanceDefinitions): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    instance_type: cdktf.stringToTerraform(struct!.instanceType),
    weighted_capacity: cdktf.stringToTerraform(struct!.weightedCapacity),
  }
}

export class DataAwsccGameliftGameServerGroupLaunchTemplate extends cdktf.ComplexComputedList {

  // launch_template_id - computed: true, optional: false, required: false
  public get launchTemplateId() {
    return this.getStringAttribute('launch_template_id');
  }

  // launch_template_name - computed: true, optional: false, required: false
  public get launchTemplateName() {
    return this.getStringAttribute('launch_template_name');
  }

  // version - computed: true, optional: false, required: false
  public get version() {
    return this.getStringAttribute('version');
  }
}

export function dataAwsccGameliftGameServerGroupLaunchTemplateToTerraform(struct?: DataAwsccGameliftGameServerGroupLaunchTemplate): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    launch_template_id: cdktf.stringToTerraform(struct!.launchTemplateId),
    launch_template_name: cdktf.stringToTerraform(struct!.launchTemplateName),
    version: cdktf.stringToTerraform(struct!.version),
  }
}

export class DataAwsccGameliftGameServerGroupTags extends cdktf.ComplexComputedList {

  // key - computed: true, optional: false, required: false
  public get key() {
    return this.getStringAttribute('key');
  }

  // value - computed: true, optional: false, required: false
  public get value() {
    return this.getStringAttribute('value');
  }
}

export function dataAwsccGameliftGameServerGroupTagsToTerraform(struct?: DataAwsccGameliftGameServerGroupTags): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    key: cdktf.stringToTerraform(struct!.key),
    value: cdktf.stringToTerraform(struct!.value),
  }
}


/**
* Represents a {@link https://www.terraform.io/docs/providers/awscc/d/gamelift_game_server_group.html awscc_gamelift_game_server_group}
*/
export class DataAwsccGameliftGameServerGroup extends cdktf.TerraformDataSource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType: string = "awscc_gamelift_game_server_group";

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://www.terraform.io/docs/providers/awscc/d/gamelift_game_server_group.html awscc_gamelift_game_server_group} Data Source
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DataAwsccGameliftGameServerGroupConfig
  */
  public constructor(scope: Construct, id: string, config: DataAwsccGameliftGameServerGroupConfig) {
    super(scope, id, {
      terraformResourceType: 'awscc_gamelift_game_server_group',
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

  // auto_scaling_group_arn - computed: true, optional: false, required: false
  public get autoScalingGroupArn() {
    return this.getStringAttribute('auto_scaling_group_arn');
  }

  // auto_scaling_policy - computed: true, optional: false, required: false
  public get autoScalingPolicy() {
    return this.interpolationForAttribute('auto_scaling_policy') as any;
  }

  // balancing_strategy - computed: true, optional: false, required: false
  public get balancingStrategy() {
    return this.getStringAttribute('balancing_strategy');
  }

  // delete_option - computed: true, optional: false, required: false
  public get deleteOption() {
    return this.getStringAttribute('delete_option');
  }

  // game_server_group_arn - computed: true, optional: false, required: false
  public get gameServerGroupArn() {
    return this.getStringAttribute('game_server_group_arn');
  }

  // game_server_group_name - computed: true, optional: false, required: false
  public get gameServerGroupName() {
    return this.getStringAttribute('game_server_group_name');
  }

  // game_server_protection_policy - computed: true, optional: false, required: false
  public get gameServerProtectionPolicy() {
    return this.getStringAttribute('game_server_protection_policy');
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

  // instance_definitions - computed: true, optional: false, required: false
  public get instanceDefinitions() {
    return this.interpolationForAttribute('instance_definitions') as any;
  }

  // launch_template - computed: true, optional: false, required: false
  public get launchTemplate() {
    return this.interpolationForAttribute('launch_template') as any;
  }

  // max_size - computed: true, optional: false, required: false
  public get maxSize() {
    return this.getNumberAttribute('max_size');
  }

  // min_size - computed: true, optional: false, required: false
  public get minSize() {
    return this.getNumberAttribute('min_size');
  }

  // role_arn - computed: true, optional: false, required: false
  public get roleArn() {
    return this.getStringAttribute('role_arn');
  }

  // tags - computed: true, optional: false, required: false
  public get tags() {
    return this.interpolationForAttribute('tags') as any;
  }

  // vpc_subnets - computed: true, optional: false, required: false
  public get vpcSubnets() {
    return this.getListAttribute('vpc_subnets');
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
