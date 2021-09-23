import { Construct } from 'constructs';
import * as cdktf from 'cdktf';
export interface GameliftFleetConfig extends cdktf.TerraformMetaArguments {
    /**
    * A unique identifier for a build to be deployed on the new fleet. If you are deploying the fleet with a custom game build, you must specify this property. The build must have been successfully uploaded to Amazon GameLift and be in a READY status. This fleet setting cannot be changed once the fleet is created.
    *
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/gamelift_fleet.html#build_id GameliftFleet#build_id}
    */
    readonly buildId?: string;
    /**
    * Information about the use of a TLS/SSL certificate for a fleet. TLS certificate generation is enabled at the fleet level, with one certificate generated for the fleet. When this feature is enabled, the certificate can be retrieved using the GameLift Server SDK call GetInstanceCertificate. All instances in a fleet share the same certificate.
    *
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/gamelift_fleet.html#certificate_configuration GameliftFleet#certificate_configuration}
    */
    readonly certificateConfiguration?: GameliftFleetCertificateConfiguration;
    /**
    * A human-readable description of a fleet.
    *
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/gamelift_fleet.html#description GameliftFleet#description}
    */
    readonly description?: string;
    /**
    * [DEPRECATED] The number of EC2 instances that you want this fleet to host. When creating a new fleet, GameLift automatically sets this value to "1" and initiates a single instance. Once the fleet is active, update this value to trigger GameLift to add or remove instances from the fleet.
    *
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/gamelift_fleet.html#desired_ec2_instances GameliftFleet#desired_ec2_instances}
    */
    readonly desiredEc2Instances?: number;
    /**
    * A range of IP addresses and port settings that allow inbound traffic to connect to server processes on an Amazon GameLift server.
    *
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/gamelift_fleet.html#ec2_inbound_permissions GameliftFleet#ec2_inbound_permissions}
    */
    readonly ec2InboundPermissions?: GameliftFleetEc2InboundPermissions[];
    /**
    * The name of an EC2 instance type that is supported in Amazon GameLift. A fleet instance type determines the computing resources of each instance in the fleet, including CPU, memory, storage, and networking capacity. Amazon GameLift supports the following EC2 instance types. See Amazon EC2 Instance Types for detailed descriptions.
    *
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/gamelift_fleet.html#ec2_instance_type GameliftFleet#ec2_instance_type}
    */
    readonly ec2InstanceType?: string;
    /**
    * Indicates whether to use On-Demand instances or Spot instances for this fleet. If empty, the default is ON_DEMAND. Both categories of instances use identical hardware and configurations based on the instance type selected for this fleet.
    *
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/gamelift_fleet.html#fleet_type GameliftFleet#fleet_type}
    */
    readonly fleetType?: string;
    /**
    * A unique identifier for an AWS IAM role that manages access to your AWS services. With an instance role ARN set, any application that runs on an instance in this fleet can assume the role, including install scripts, server processes, and daemons (background processes). Create a role or look up a role's ARN from the IAM dashboard in the AWS Management Console.
    *
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/gamelift_fleet.html#instance_role_arn GameliftFleet#instance_role_arn}
    */
    readonly instanceRoleArn?: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/gamelift_fleet.html#locations GameliftFleet#locations}
    */
    readonly locations?: GameliftFleetLocations[];
    /**
    * This parameter is no longer used. When hosting a custom game build, specify where Amazon GameLift should store log files using the Amazon GameLift server API call ProcessReady()
    *
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/gamelift_fleet.html#log_paths GameliftFleet#log_paths}
    */
    readonly logPaths?: string[];
    /**
    * [DEPRECATED] The maximum value that is allowed for the fleet's instance count. When creating a new fleet, GameLift automatically sets this value to "1". Once the fleet is active, you can change this value.
    *
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/gamelift_fleet.html#max_size GameliftFleet#max_size}
    */
    readonly maxSize?: number;
    /**
    * The name of an Amazon CloudWatch metric group. A metric group aggregates the metrics for all fleets in the group. Specify a string containing the metric group name. You can use an existing name or use a new name to create a new metric group. Currently, this parameter can have only one string.
    *
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/gamelift_fleet.html#metric_groups GameliftFleet#metric_groups}
    */
    readonly metricGroups?: string[];
    /**
    * [DEPRECATED] The minimum value allowed for the fleet's instance count. When creating a new fleet, GameLift automatically sets this value to "0". After the fleet is active, you can change this value.
    *
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/gamelift_fleet.html#min_size GameliftFleet#min_size}
    */
    readonly minSize?: number;
    /**
    * A descriptive label that is associated with a fleet. Fleet names do not need to be unique.
    *
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/gamelift_fleet.html#name GameliftFleet#name}
    */
    readonly name?: string;
    /**
    * A game session protection policy to apply to all game sessions hosted on instances in this fleet. When protected, active game sessions cannot be terminated during a scale-down event. If this parameter is not set, instances in this fleet default to no protection. You can change a fleet's protection policy to affect future game sessions on the fleet. You can also set protection for individual game sessions.
    *
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/gamelift_fleet.html#new_game_session_protection_policy GameliftFleet#new_game_session_protection_policy}
    */
    readonly newGameSessionProtectionPolicy?: string;
    /**
    * A unique identifier for the AWS account with the VPC that you want to peer your Amazon GameLift fleet with. You can find your account ID in the AWS Management Console under account settings.
    *
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/gamelift_fleet.html#peer_vpc_aws_account_id GameliftFleet#peer_vpc_aws_account_id}
    */
    readonly peerVpcAwsAccountId?: string;
    /**
    * A unique identifier for a VPC with resources to be accessed by your Amazon GameLift fleet. The VPC must be in the same Region as your fleet. To look up a VPC ID, use the VPC Dashboard in the AWS Management Console.
    *
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/gamelift_fleet.html#peer_vpc_id GameliftFleet#peer_vpc_id}
    */
    readonly peerVpcId?: string;
    /**
    * A policy that limits the number of game sessions a player can create on the same fleet. This optional policy gives game owners control over how players can consume available game server resources. A resource creation policy makes the following statement: "An individual player can create a maximum number of new game sessions within a specified time period".
  
  The policy is evaluated when a player tries to create a new game session. For example, assume you have a policy of 10 new game sessions and a time period of 60 minutes. On receiving a CreateGameSession request, Amazon GameLift checks that the player (identified by CreatorId) has created fewer than 10 game sessions in the past 60 minutes.
    *
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/gamelift_fleet.html#resource_creation_limit_policy GameliftFleet#resource_creation_limit_policy}
    */
    readonly resourceCreationLimitPolicy?: GameliftFleetResourceCreationLimitPolicy;
    /**
    * A collection of server process configurations that describe the processes to run on each instance in a fleet. All fleets must have a runtime configuration. Each instance in the fleet maintains server processes as specified in the runtime configuration, launching new ones as existing processes end. Each instance regularly checks for an updated runtime configuration makes adjustments as called for.
  
  The runtime configuration enables the instances in a fleet to run multiple processes simultaneously. Potential scenarios are as follows: (1) Run multiple processes of a single game server executable to maximize usage of your hosting resources. (2) Run one or more processes of different executables, such as your game server and a metrics tracking program. (3) Run multiple processes of a single game server but with different launch parameters, for example to run one process on each instance in debug mode.
  
  An Amazon GameLift instance is limited to 50 processes running simultaneously. A runtime configuration must specify fewer than this limit. To calculate the total number of processes specified in a runtime configuration, add the values of the ConcurrentExecutions parameter for each ServerProcess object in the runtime configuration.
    *
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/gamelift_fleet.html#runtime_configuration GameliftFleet#runtime_configuration}
    */
    readonly runtimeConfiguration?: GameliftFleetRuntimeConfiguration;
    /**
    * A unique identifier for a Realtime script to be deployed on a new Realtime Servers fleet. The script must have been successfully uploaded to Amazon GameLift. This fleet setting cannot be changed once the fleet is created.
  
  Note: It is not currently possible to use the !Ref command to reference a script created with a CloudFormation template for the fleet property ScriptId. Instead, use Fn::GetAtt Script.Arn or Fn::GetAtt Script.Id to retrieve either of these properties as input for ScriptId. Alternatively, enter a ScriptId string manually.
    *
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/gamelift_fleet.html#script_id GameliftFleet#script_id}
    */
    readonly scriptId?: string;
    /**
    * This parameter is no longer used but is retained for backward compatibility. Instead, specify server launch parameters in the RuntimeConfiguration parameter. A request must specify either a runtime configuration or values for both ServerLaunchParameters and ServerLaunchPath.
    *
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/gamelift_fleet.html#server_launch_parameters GameliftFleet#server_launch_parameters}
    */
    readonly serverLaunchParameters?: string;
    /**
    * This parameter is no longer used. Instead, specify a server launch path using the RuntimeConfiguration parameter. Requests that specify a server launch path and launch parameters instead of a runtime configuration will continue to work.
    *
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/gamelift_fleet.html#server_launch_path GameliftFleet#server_launch_path}
    */
    readonly serverLaunchPath?: string;
}
export interface GameliftFleetCertificateConfiguration {
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/gamelift_fleet.html#certificate_type GameliftFleet#certificate_type}
    */
    readonly certificateType: string;
}
export declare function gameliftFleetCertificateConfigurationToTerraform(struct?: GameliftFleetCertificateConfiguration): any;
export interface GameliftFleetEc2InboundPermissions {
    /**
    * A starting value for a range of allowed port numbers.
    *
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/gamelift_fleet.html#from_port GameliftFleet#from_port}
    */
    readonly fromPort: number;
    /**
    * A range of allowed IP addresses. This value must be expressed in CIDR notation. Example: "000.000.000.000/[subnet mask]" or optionally the shortened version "0.0.0.0/[subnet mask]".
    *
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/gamelift_fleet.html#ip_range GameliftFleet#ip_range}
    */
    readonly ipRange: string;
    /**
    * The network communication protocol used by the fleet.
    *
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/gamelift_fleet.html#protocol GameliftFleet#protocol}
    */
    readonly protocol: string;
    /**
    * An ending value for a range of allowed port numbers. Port numbers are end-inclusive. This value must be higher than FromPort.
    *
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/gamelift_fleet.html#to_port GameliftFleet#to_port}
    */
    readonly toPort: number;
}
export declare function gameliftFleetEc2InboundPermissionsToTerraform(struct?: GameliftFleetEc2InboundPermissions): any;
export interface GameliftFleetLocationsLocationCapacity {
    /**
    * The number of EC2 instances you want to maintain in the specified fleet location. This value must fall between the minimum and maximum size limits.
    *
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/gamelift_fleet.html#desired_ec2_instances GameliftFleet#desired_ec2_instances}
    */
    readonly desiredEc2Instances: number;
    /**
    * The maximum value that is allowed for the fleet's instance count for a location. When creating a new fleet, GameLift automatically sets this value to "1". Once the fleet is active, you can change this value.
    *
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/gamelift_fleet.html#max_size GameliftFleet#max_size}
    */
    readonly maxSize: number;
    /**
    * The minimum value allowed for the fleet's instance count for a location. When creating a new fleet, GameLift automatically sets this value to "0". After the fleet is active, you can change this value.
    *
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/gamelift_fleet.html#min_size GameliftFleet#min_size}
    */
    readonly minSize: number;
}
export declare function gameliftFleetLocationsLocationCapacityToTerraform(struct?: GameliftFleetLocationsLocationCapacity): any;
export interface GameliftFleetLocations {
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/gamelift_fleet.html#location GameliftFleet#location}
    */
    readonly location: string;
    /**
    * Current resource capacity settings in a specified fleet or location. The location value might refer to a fleet's remote location or its home Region.
    *
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/gamelift_fleet.html#location_capacity GameliftFleet#location_capacity}
    */
    readonly locationCapacity?: GameliftFleetLocationsLocationCapacity;
}
export declare function gameliftFleetLocationsToTerraform(struct?: GameliftFleetLocations): any;
export interface GameliftFleetResourceCreationLimitPolicy {
    /**
    * The maximum number of game sessions that an individual can create during the policy period.
    *
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/gamelift_fleet.html#new_game_sessions_per_creator GameliftFleet#new_game_sessions_per_creator}
    */
    readonly newGameSessionsPerCreator?: number;
    /**
    * The time span used in evaluating the resource creation limit policy.
    *
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/gamelift_fleet.html#policy_period_in_minutes GameliftFleet#policy_period_in_minutes}
    */
    readonly policyPeriodInMinutes?: number;
}
export declare function gameliftFleetResourceCreationLimitPolicyToTerraform(struct?: GameliftFleetResourceCreationLimitPolicy): any;
export interface GameliftFleetRuntimeConfigurationServerProcesses {
    /**
    * The number of server processes that use this configuration to run concurrently on an instance.
    *
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/gamelift_fleet.html#concurrent_executions GameliftFleet#concurrent_executions}
    */
    readonly concurrentExecutions: number;
    /**
    * The location of the server executable in a custom game build or the name of the Realtime script file that contains the Init() function. Game builds and Realtime scripts are installed on instances at the root:
  
  Windows (for custom game builds only): C:\game. Example: "C:\game\MyGame\server.exe"
  
  Linux: /local/game. Examples: "/local/game/MyGame/server.exe" or "/local/game/MyRealtimeScript.js"
    *
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/gamelift_fleet.html#launch_path GameliftFleet#launch_path}
    */
    readonly launchPath: string;
    /**
    * An optional list of parameters to pass to the server executable or Realtime script on launch.
    *
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/gamelift_fleet.html#parameters GameliftFleet#parameters}
    */
    readonly parameters?: string;
}
export declare function gameliftFleetRuntimeConfigurationServerProcessesToTerraform(struct?: GameliftFleetRuntimeConfigurationServerProcesses): any;
export interface GameliftFleetRuntimeConfiguration {
    /**
    * The maximum amount of time (in seconds) that a game session can remain in status ACTIVATING. If the game session is not active before the timeout, activation is terminated and the game session status is changed to TERMINATED.
    *
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/gamelift_fleet.html#game_session_activation_timeout_seconds GameliftFleet#game_session_activation_timeout_seconds}
    */
    readonly gameSessionActivationTimeoutSeconds?: number;
    /**
    * The maximum number of game sessions with status ACTIVATING to allow on an instance simultaneously. This setting limits the amount of instance resources that can be used for new game activations at any one time.
    *
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/gamelift_fleet.html#max_concurrent_game_session_activations GameliftFleet#max_concurrent_game_session_activations}
    */
    readonly maxConcurrentGameSessionActivations?: number;
    /**
    * A collection of server process configurations that describe which server processes to run on each instance in a fleet.
    *
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/gamelift_fleet.html#server_processes GameliftFleet#server_processes}
    */
    readonly serverProcesses?: GameliftFleetRuntimeConfigurationServerProcesses[];
}
export declare function gameliftFleetRuntimeConfigurationToTerraform(struct?: GameliftFleetRuntimeConfiguration): any;
/**
* Represents a {@link https://www.terraform.io/docs/providers/awscc/r/gamelift_fleet.html awscc_gamelift_fleet}
*/
export declare class GameliftFleet extends cdktf.TerraformResource {
    static readonly tfResourceType: string;
    /**
    * Create a new {@link https://www.terraform.io/docs/providers/awscc/r/gamelift_fleet.html awscc_gamelift_fleet} Resource
    *
    * @param scope The scope in which to define this construct
    * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
    * @param options GameliftFleetConfig = {}
    */
    constructor(scope: Construct, id: string, config?: GameliftFleetConfig);
    private _buildId?;
    get buildId(): string;
    set buildId(value: string);
    resetBuildId(): void;
    get buildIdInput(): string | undefined;
    private _certificateConfiguration?;
    get certificateConfiguration(): GameliftFleetCertificateConfiguration;
    set certificateConfiguration(value: GameliftFleetCertificateConfiguration);
    resetCertificateConfiguration(): void;
    get certificateConfigurationInput(): GameliftFleetCertificateConfiguration | undefined;
    private _description?;
    get description(): string;
    set description(value: string);
    resetDescription(): void;
    get descriptionInput(): string | undefined;
    private _desiredEc2Instances?;
    get desiredEc2Instances(): number;
    set desiredEc2Instances(value: number);
    resetDesiredEc2Instances(): void;
    get desiredEc2InstancesInput(): number | undefined;
    private _ec2InboundPermissions?;
    get ec2InboundPermissions(): GameliftFleetEc2InboundPermissions[];
    set ec2InboundPermissions(value: GameliftFleetEc2InboundPermissions[]);
    resetEc2InboundPermissions(): void;
    get ec2InboundPermissionsInput(): GameliftFleetEc2InboundPermissions[] | undefined;
    private _ec2InstanceType?;
    get ec2InstanceType(): string;
    set ec2InstanceType(value: string);
    resetEc2InstanceType(): void;
    get ec2InstanceTypeInput(): string | undefined;
    get fleetId(): string;
    private _fleetType?;
    get fleetType(): string;
    set fleetType(value: string);
    resetFleetType(): void;
    get fleetTypeInput(): string | undefined;
    get id(): string;
    private _instanceRoleArn?;
    get instanceRoleArn(): string;
    set instanceRoleArn(value: string);
    resetInstanceRoleArn(): void;
    get instanceRoleArnInput(): string | undefined;
    private _locations?;
    get locations(): GameliftFleetLocations[];
    set locations(value: GameliftFleetLocations[]);
    resetLocations(): void;
    get locationsInput(): GameliftFleetLocations[] | undefined;
    private _logPaths?;
    get logPaths(): string[];
    set logPaths(value: string[]);
    resetLogPaths(): void;
    get logPathsInput(): string[] | undefined;
    private _maxSize?;
    get maxSize(): number;
    set maxSize(value: number);
    resetMaxSize(): void;
    get maxSizeInput(): number | undefined;
    private _metricGroups?;
    get metricGroups(): string[];
    set metricGroups(value: string[]);
    resetMetricGroups(): void;
    get metricGroupsInput(): string[] | undefined;
    private _minSize?;
    get minSize(): number;
    set minSize(value: number);
    resetMinSize(): void;
    get minSizeInput(): number | undefined;
    private _name?;
    get name(): string;
    set name(value: string);
    resetName(): void;
    get nameInput(): string | undefined;
    private _newGameSessionProtectionPolicy?;
    get newGameSessionProtectionPolicy(): string;
    set newGameSessionProtectionPolicy(value: string);
    resetNewGameSessionProtectionPolicy(): void;
    get newGameSessionProtectionPolicyInput(): string | undefined;
    private _peerVpcAwsAccountId?;
    get peerVpcAwsAccountId(): string;
    set peerVpcAwsAccountId(value: string);
    resetPeerVpcAwsAccountId(): void;
    get peerVpcAwsAccountIdInput(): string | undefined;
    private _peerVpcId?;
    get peerVpcId(): string;
    set peerVpcId(value: string);
    resetPeerVpcId(): void;
    get peerVpcIdInput(): string | undefined;
    private _resourceCreationLimitPolicy?;
    get resourceCreationLimitPolicy(): GameliftFleetResourceCreationLimitPolicy;
    set resourceCreationLimitPolicy(value: GameliftFleetResourceCreationLimitPolicy);
    resetResourceCreationLimitPolicy(): void;
    get resourceCreationLimitPolicyInput(): GameliftFleetResourceCreationLimitPolicy | undefined;
    private _runtimeConfiguration?;
    get runtimeConfiguration(): GameliftFleetRuntimeConfiguration;
    set runtimeConfiguration(value: GameliftFleetRuntimeConfiguration);
    resetRuntimeConfiguration(): void;
    get runtimeConfigurationInput(): GameliftFleetRuntimeConfiguration | undefined;
    private _scriptId?;
    get scriptId(): string;
    set scriptId(value: string);
    resetScriptId(): void;
    get scriptIdInput(): string | undefined;
    private _serverLaunchParameters?;
    get serverLaunchParameters(): string;
    set serverLaunchParameters(value: string);
    resetServerLaunchParameters(): void;
    get serverLaunchParametersInput(): string | undefined;
    private _serverLaunchPath?;
    get serverLaunchPath(): string;
    set serverLaunchPath(value: string);
    resetServerLaunchPath(): void;
    get serverLaunchPathInput(): string | undefined;
    protected synthesizeAttributes(): {
        [name: string]: any;
    };
}
