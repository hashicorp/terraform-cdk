// https://www.terraform.io/docs/providers/awscc/r/gamelift_game_server_group.html
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface GameliftGameServerGroupConfig extends cdktf.TerraformMetaArguments {
  /**
  * Configuration settings to define a scaling policy for the Auto Scaling group that is optimized for game hosting
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/gamelift_game_server_group.html#auto_scaling_policy GameliftGameServerGroup#auto_scaling_policy}
  */
  readonly autoScalingPolicy?: GameliftGameServerGroupAutoScalingPolicy;
  /**
  * The fallback balancing method to use for the game server group when Spot Instances in a Region become unavailable or are not viable for game hosting.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/gamelift_game_server_group.html#balancing_strategy GameliftGameServerGroup#balancing_strategy}
  */
  readonly balancingStrategy?: string;
  /**
  * The type of delete to perform.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/gamelift_game_server_group.html#delete_option GameliftGameServerGroup#delete_option}
  */
  readonly deleteOption?: string;
  /**
  * An identifier for the new game server group.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/gamelift_game_server_group.html#game_server_group_name GameliftGameServerGroup#game_server_group_name}
  */
  readonly gameServerGroupName: string;
  /**
  * A flag that indicates whether instances in the game server group are protected from early termination.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/gamelift_game_server_group.html#game_server_protection_policy GameliftGameServerGroup#game_server_protection_policy}
  */
  readonly gameServerProtectionPolicy?: string;
  /**
  * A set of EC2 instance types to use when creating instances in the group.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/gamelift_game_server_group.html#instance_definitions GameliftGameServerGroup#instance_definitions}
  */
  readonly instanceDefinitions: GameliftGameServerGroupInstanceDefinitions[];
  /**
  * The EC2 launch template that contains configuration settings and game server code to be deployed to all instances in the game server group.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/gamelift_game_server_group.html#launch_template GameliftGameServerGroup#launch_template}
  */
  readonly launchTemplate: GameliftGameServerGroupLaunchTemplate;
  /**
  * The maximum number of instances allowed in the EC2 Auto Scaling group.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/gamelift_game_server_group.html#max_size GameliftGameServerGroup#max_size}
  */
  readonly maxSize?: number;
  /**
  * The minimum number of instances allowed in the EC2 Auto Scaling group.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/gamelift_game_server_group.html#min_size GameliftGameServerGroup#min_size}
  */
  readonly minSize?: number;
  /**
  * The Amazon Resource Name (ARN) for an IAM role that allows Amazon GameLift to access your EC2 Auto Scaling groups.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/gamelift_game_server_group.html#role_arn GameliftGameServerGroup#role_arn}
  */
  readonly roleArn: string;
  /**
  * A list of labels to assign to the new game server group resource.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/gamelift_game_server_group.html#tags GameliftGameServerGroup#tags}
  */
  readonly tags?: GameliftGameServerGroupTags[];
  /**
  * A list of virtual private cloud (VPC) subnets to use with instances in the game server group.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/gamelift_game_server_group.html#vpc_subnets GameliftGameServerGroup#vpc_subnets}
  */
  readonly vpcSubnets?: string[];
}
export interface GameliftGameServerGroupAutoScalingPolicyTargetTrackingConfiguration {
  /**
  * Desired value to use with a game server group target-based scaling policy.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/gamelift_game_server_group.html#target_value GameliftGameServerGroup#target_value}
  */
  readonly targetValue: number;
}

export function gameliftGameServerGroupAutoScalingPolicyTargetTrackingConfigurationToTerraform(struct?: GameliftGameServerGroupAutoScalingPolicyTargetTrackingConfiguration): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    target_value: cdktf.numberToTerraform(struct!.targetValue),
  }
}

export interface GameliftGameServerGroupAutoScalingPolicy {
  /**
  * Length of time, in seconds, it takes for a new instance to start new game server processes and register with GameLift FleetIQ.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/gamelift_game_server_group.html#estimated_instance_warmup GameliftGameServerGroup#estimated_instance_warmup}
  */
  readonly estimatedInstanceWarmup?: number;
  /**
  * Settings for a target-based scaling policy applied to Auto Scaling group.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/gamelift_game_server_group.html#target_tracking_configuration GameliftGameServerGroup#target_tracking_configuration}
  */
  readonly targetTrackingConfiguration: GameliftGameServerGroupAutoScalingPolicyTargetTrackingConfiguration;
}

export function gameliftGameServerGroupAutoScalingPolicyToTerraform(struct?: GameliftGameServerGroupAutoScalingPolicy): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    estimated_instance_warmup: cdktf.numberToTerraform(struct!.estimatedInstanceWarmup),
    target_tracking_configuration: gameliftGameServerGroupAutoScalingPolicyTargetTrackingConfigurationToTerraform(struct!.targetTrackingConfiguration),
  }
}

export interface GameliftGameServerGroupInstanceDefinitions {
  /**
  * An EC2 instance type designation.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/gamelift_game_server_group.html#instance_type GameliftGameServerGroup#instance_type}
  */
  readonly instanceType: string;
  /**
  * Instance weighting that indicates how much this instance type contributes to the total capacity of a game server group.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/gamelift_game_server_group.html#weighted_capacity GameliftGameServerGroup#weighted_capacity}
  */
  readonly weightedCapacity?: string;
}

export function gameliftGameServerGroupInstanceDefinitionsToTerraform(struct?: GameliftGameServerGroupInstanceDefinitions): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    instance_type: cdktf.stringToTerraform(struct!.instanceType),
    weighted_capacity: cdktf.stringToTerraform(struct!.weightedCapacity),
  }
}

export interface GameliftGameServerGroupLaunchTemplate {
  /**
  * A unique identifier for an existing EC2 launch template.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/gamelift_game_server_group.html#launch_template_id GameliftGameServerGroup#launch_template_id}
  */
  readonly launchTemplateId?: string;
  /**
  * A readable identifier for an existing EC2 launch template.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/gamelift_game_server_group.html#launch_template_name GameliftGameServerGroup#launch_template_name}
  */
  readonly launchTemplateName?: string;
  /**
  * The version of the EC2 launch template to use.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/gamelift_game_server_group.html#version GameliftGameServerGroup#version}
  */
  readonly version?: string;
}

export function gameliftGameServerGroupLaunchTemplateToTerraform(struct?: GameliftGameServerGroupLaunchTemplate): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    launch_template_id: cdktf.stringToTerraform(struct!.launchTemplateId),
    launch_template_name: cdktf.stringToTerraform(struct!.launchTemplateName),
    version: cdktf.stringToTerraform(struct!.version),
  }
}

export interface GameliftGameServerGroupTags {
  /**
  * The key for a developer-defined key:value pair for tagging an AWS resource.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/gamelift_game_server_group.html#key GameliftGameServerGroup#key}
  */
  readonly key?: string;
  /**
  * The value for a developer-defined key:value pair for tagging an AWS resource.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/gamelift_game_server_group.html#value GameliftGameServerGroup#value}
  */
  readonly value?: string;
}

export function gameliftGameServerGroupTagsToTerraform(struct?: GameliftGameServerGroupTags): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    key: cdktf.stringToTerraform(struct!.key),
    value: cdktf.stringToTerraform(struct!.value),
  }
}


/**
* Represents a {@link https://www.terraform.io/docs/providers/awscc/r/gamelift_game_server_group.html awscc_gamelift_game_server_group}
*/
export class GameliftGameServerGroup extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType: string = "awscc_gamelift_game_server_group";

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://www.terraform.io/docs/providers/awscc/r/gamelift_game_server_group.html awscc_gamelift_game_server_group} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options GameliftGameServerGroupConfig
  */
  public constructor(scope: Construct, id: string, config: GameliftGameServerGroupConfig) {
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
    this._autoScalingPolicy = config.autoScalingPolicy;
    this._balancingStrategy = config.balancingStrategy;
    this._deleteOption = config.deleteOption;
    this._gameServerGroupName = config.gameServerGroupName;
    this._gameServerProtectionPolicy = config.gameServerProtectionPolicy;
    this._instanceDefinitions = config.instanceDefinitions;
    this._launchTemplate = config.launchTemplate;
    this._maxSize = config.maxSize;
    this._minSize = config.minSize;
    this._roleArn = config.roleArn;
    this._tags = config.tags;
    this._vpcSubnets = config.vpcSubnets;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // auto_scaling_group_arn - computed: true, optional: false, required: false
  public get autoScalingGroupArn() {
    return this.getStringAttribute('auto_scaling_group_arn');
  }

  // auto_scaling_policy - computed: false, optional: true, required: false
  private _autoScalingPolicy?: GameliftGameServerGroupAutoScalingPolicy;
  public get autoScalingPolicy() {
    return this.interpolationForAttribute('auto_scaling_policy') as any;
  }
  public set autoScalingPolicy(value: GameliftGameServerGroupAutoScalingPolicy ) {
    this._autoScalingPolicy = value;
  }
  public resetAutoScalingPolicy() {
    this._autoScalingPolicy = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get autoScalingPolicyInput() {
    return this._autoScalingPolicy
  }

  // balancing_strategy - computed: false, optional: true, required: false
  private _balancingStrategy?: string;
  public get balancingStrategy() {
    return this.getStringAttribute('balancing_strategy');
  }
  public set balancingStrategy(value: string ) {
    this._balancingStrategy = value;
  }
  public resetBalancingStrategy() {
    this._balancingStrategy = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get balancingStrategyInput() {
    return this._balancingStrategy
  }

  // delete_option - computed: false, optional: true, required: false
  private _deleteOption?: string;
  public get deleteOption() {
    return this.getStringAttribute('delete_option');
  }
  public set deleteOption(value: string ) {
    this._deleteOption = value;
  }
  public resetDeleteOption() {
    this._deleteOption = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get deleteOptionInput() {
    return this._deleteOption
  }

  // game_server_group_arn - computed: true, optional: false, required: false
  public get gameServerGroupArn() {
    return this.getStringAttribute('game_server_group_arn');
  }

  // game_server_group_name - computed: false, optional: false, required: true
  private _gameServerGroupName: string;
  public get gameServerGroupName() {
    return this.getStringAttribute('game_server_group_name');
  }
  public set gameServerGroupName(value: string) {
    this._gameServerGroupName = value;
  }
  // Temporarily expose input value. Use with caution.
  public get gameServerGroupNameInput() {
    return this._gameServerGroupName
  }

  // game_server_protection_policy - computed: false, optional: true, required: false
  private _gameServerProtectionPolicy?: string;
  public get gameServerProtectionPolicy() {
    return this.getStringAttribute('game_server_protection_policy');
  }
  public set gameServerProtectionPolicy(value: string ) {
    this._gameServerProtectionPolicy = value;
  }
  public resetGameServerProtectionPolicy() {
    this._gameServerProtectionPolicy = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get gameServerProtectionPolicyInput() {
    return this._gameServerProtectionPolicy
  }

  // id - computed: true, optional: false, required: false
  public get id() {
    return this.getStringAttribute('id');
  }

  // instance_definitions - computed: false, optional: false, required: true
  private _instanceDefinitions: GameliftGameServerGroupInstanceDefinitions[];
  public get instanceDefinitions() {
    return this.interpolationForAttribute('instance_definitions') as any;
  }
  public set instanceDefinitions(value: GameliftGameServerGroupInstanceDefinitions[]) {
    this._instanceDefinitions = value;
  }
  // Temporarily expose input value. Use with caution.
  public get instanceDefinitionsInput() {
    return this._instanceDefinitions
  }

  // launch_template - computed: false, optional: false, required: true
  private _launchTemplate: GameliftGameServerGroupLaunchTemplate;
  public get launchTemplate() {
    return this.interpolationForAttribute('launch_template') as any;
  }
  public set launchTemplate(value: GameliftGameServerGroupLaunchTemplate) {
    this._launchTemplate = value;
  }
  // Temporarily expose input value. Use with caution.
  public get launchTemplateInput() {
    return this._launchTemplate
  }

  // max_size - computed: false, optional: true, required: false
  private _maxSize?: number;
  public get maxSize() {
    return this.getNumberAttribute('max_size');
  }
  public set maxSize(value: number ) {
    this._maxSize = value;
  }
  public resetMaxSize() {
    this._maxSize = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get maxSizeInput() {
    return this._maxSize
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

  // role_arn - computed: false, optional: false, required: true
  private _roleArn: string;
  public get roleArn() {
    return this.getStringAttribute('role_arn');
  }
  public set roleArn(value: string) {
    this._roleArn = value;
  }
  // Temporarily expose input value. Use with caution.
  public get roleArnInput() {
    return this._roleArn
  }

  // tags - computed: false, optional: true, required: false
  private _tags?: GameliftGameServerGroupTags[];
  public get tags() {
    return this.interpolationForAttribute('tags') as any;
  }
  public set tags(value: GameliftGameServerGroupTags[] ) {
    this._tags = value;
  }
  public resetTags() {
    this._tags = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tagsInput() {
    return this._tags
  }

  // vpc_subnets - computed: false, optional: true, required: false
  private _vpcSubnets?: string[];
  public get vpcSubnets() {
    return this.getListAttribute('vpc_subnets');
  }
  public set vpcSubnets(value: string[] ) {
    this._vpcSubnets = value;
  }
  public resetVpcSubnets() {
    this._vpcSubnets = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get vpcSubnetsInput() {
    return this._vpcSubnets
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      auto_scaling_policy: gameliftGameServerGroupAutoScalingPolicyToTerraform(this._autoScalingPolicy),
      balancing_strategy: cdktf.stringToTerraform(this._balancingStrategy),
      delete_option: cdktf.stringToTerraform(this._deleteOption),
      game_server_group_name: cdktf.stringToTerraform(this._gameServerGroupName),
      game_server_protection_policy: cdktf.stringToTerraform(this._gameServerProtectionPolicy),
      instance_definitions: cdktf.listMapper(gameliftGameServerGroupInstanceDefinitionsToTerraform)(this._instanceDefinitions),
      launch_template: gameliftGameServerGroupLaunchTemplateToTerraform(this._launchTemplate),
      max_size: cdktf.numberToTerraform(this._maxSize),
      min_size: cdktf.numberToTerraform(this._minSize),
      role_arn: cdktf.stringToTerraform(this._roleArn),
      tags: cdktf.listMapper(gameliftGameServerGroupTagsToTerraform)(this._tags),
      vpc_subnets: cdktf.listMapper(cdktf.stringToTerraform)(this._vpcSubnets),
    };
  }
}
