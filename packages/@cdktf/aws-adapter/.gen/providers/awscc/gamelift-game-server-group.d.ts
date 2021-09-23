import { Construct } from 'constructs';
import * as cdktf from 'cdktf';
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
export declare function gameliftGameServerGroupAutoScalingPolicyTargetTrackingConfigurationToTerraform(struct?: GameliftGameServerGroupAutoScalingPolicyTargetTrackingConfiguration): any;
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
export declare function gameliftGameServerGroupAutoScalingPolicyToTerraform(struct?: GameliftGameServerGroupAutoScalingPolicy): any;
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
export declare function gameliftGameServerGroupInstanceDefinitionsToTerraform(struct?: GameliftGameServerGroupInstanceDefinitions): any;
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
export declare function gameliftGameServerGroupLaunchTemplateToTerraform(struct?: GameliftGameServerGroupLaunchTemplate): any;
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
export declare function gameliftGameServerGroupTagsToTerraform(struct?: GameliftGameServerGroupTags): any;
/**
* Represents a {@link https://www.terraform.io/docs/providers/awscc/r/gamelift_game_server_group.html awscc_gamelift_game_server_group}
*/
export declare class GameliftGameServerGroup extends cdktf.TerraformResource {
    static readonly tfResourceType: string;
    /**
    * Create a new {@link https://www.terraform.io/docs/providers/awscc/r/gamelift_game_server_group.html awscc_gamelift_game_server_group} Resource
    *
    * @param scope The scope in which to define this construct
    * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
    * @param options GameliftGameServerGroupConfig
    */
    constructor(scope: Construct, id: string, config: GameliftGameServerGroupConfig);
    get autoScalingGroupArn(): string;
    private _autoScalingPolicy?;
    get autoScalingPolicy(): GameliftGameServerGroupAutoScalingPolicy;
    set autoScalingPolicy(value: GameliftGameServerGroupAutoScalingPolicy);
    resetAutoScalingPolicy(): void;
    get autoScalingPolicyInput(): GameliftGameServerGroupAutoScalingPolicy | undefined;
    private _balancingStrategy?;
    get balancingStrategy(): string;
    set balancingStrategy(value: string);
    resetBalancingStrategy(): void;
    get balancingStrategyInput(): string | undefined;
    private _deleteOption?;
    get deleteOption(): string;
    set deleteOption(value: string);
    resetDeleteOption(): void;
    get deleteOptionInput(): string | undefined;
    get gameServerGroupArn(): string;
    private _gameServerGroupName;
    get gameServerGroupName(): string;
    set gameServerGroupName(value: string);
    get gameServerGroupNameInput(): string;
    private _gameServerProtectionPolicy?;
    get gameServerProtectionPolicy(): string;
    set gameServerProtectionPolicy(value: string);
    resetGameServerProtectionPolicy(): void;
    get gameServerProtectionPolicyInput(): string | undefined;
    get id(): string;
    private _instanceDefinitions;
    get instanceDefinitions(): GameliftGameServerGroupInstanceDefinitions[];
    set instanceDefinitions(value: GameliftGameServerGroupInstanceDefinitions[]);
    get instanceDefinitionsInput(): GameliftGameServerGroupInstanceDefinitions[];
    private _launchTemplate;
    get launchTemplate(): GameliftGameServerGroupLaunchTemplate;
    set launchTemplate(value: GameliftGameServerGroupLaunchTemplate);
    get launchTemplateInput(): GameliftGameServerGroupLaunchTemplate;
    private _maxSize?;
    get maxSize(): number;
    set maxSize(value: number);
    resetMaxSize(): void;
    get maxSizeInput(): number | undefined;
    private _minSize?;
    get minSize(): number;
    set minSize(value: number);
    resetMinSize(): void;
    get minSizeInput(): number | undefined;
    private _roleArn;
    get roleArn(): string;
    set roleArn(value: string);
    get roleArnInput(): string;
    private _tags?;
    get tags(): GameliftGameServerGroupTags[];
    set tags(value: GameliftGameServerGroupTags[]);
    resetTags(): void;
    get tagsInput(): GameliftGameServerGroupTags[] | undefined;
    private _vpcSubnets?;
    get vpcSubnets(): string[];
    set vpcSubnets(value: string[]);
    resetVpcSubnets(): void;
    get vpcSubnetsInput(): string[] | undefined;
    protected synthesizeAttributes(): {
        [name: string]: any;
    };
}
