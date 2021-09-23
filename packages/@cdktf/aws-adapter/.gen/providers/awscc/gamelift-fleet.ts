// https://www.terraform.io/docs/providers/awscc/r/gamelift_fleet.html
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

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

export function gameliftFleetCertificateConfigurationToTerraform(struct?: GameliftFleetCertificateConfiguration): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    certificate_type: cdktf.stringToTerraform(struct!.certificateType),
  }
}

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

export function gameliftFleetEc2InboundPermissionsToTerraform(struct?: GameliftFleetEc2InboundPermissions): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    from_port: cdktf.numberToTerraform(struct!.fromPort),
    ip_range: cdktf.stringToTerraform(struct!.ipRange),
    protocol: cdktf.stringToTerraform(struct!.protocol),
    to_port: cdktf.numberToTerraform(struct!.toPort),
  }
}

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

export function gameliftFleetLocationsLocationCapacityToTerraform(struct?: GameliftFleetLocationsLocationCapacity): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    desired_ec2_instances: cdktf.numberToTerraform(struct!.desiredEc2Instances),
    max_size: cdktf.numberToTerraform(struct!.maxSize),
    min_size: cdktf.numberToTerraform(struct!.minSize),
  }
}

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

export function gameliftFleetLocationsToTerraform(struct?: GameliftFleetLocations): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    location: cdktf.stringToTerraform(struct!.location),
    location_capacity: gameliftFleetLocationsLocationCapacityToTerraform(struct!.locationCapacity),
  }
}

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

export function gameliftFleetResourceCreationLimitPolicyToTerraform(struct?: GameliftFleetResourceCreationLimitPolicy): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    new_game_sessions_per_creator: cdktf.numberToTerraform(struct!.newGameSessionsPerCreator),
    policy_period_in_minutes: cdktf.numberToTerraform(struct!.policyPeriodInMinutes),
  }
}

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

export function gameliftFleetRuntimeConfigurationServerProcessesToTerraform(struct?: GameliftFleetRuntimeConfigurationServerProcesses): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    concurrent_executions: cdktf.numberToTerraform(struct!.concurrentExecutions),
    launch_path: cdktf.stringToTerraform(struct!.launchPath),
    parameters: cdktf.stringToTerraform(struct!.parameters),
  }
}

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

export function gameliftFleetRuntimeConfigurationToTerraform(struct?: GameliftFleetRuntimeConfiguration): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    game_session_activation_timeout_seconds: cdktf.numberToTerraform(struct!.gameSessionActivationTimeoutSeconds),
    max_concurrent_game_session_activations: cdktf.numberToTerraform(struct!.maxConcurrentGameSessionActivations),
    server_processes: cdktf.listMapper(gameliftFleetRuntimeConfigurationServerProcessesToTerraform)(struct!.serverProcesses),
  }
}


/**
* Represents a {@link https://www.terraform.io/docs/providers/awscc/r/gamelift_fleet.html awscc_gamelift_fleet}
*/
export class GameliftFleet extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType: string = "awscc_gamelift_fleet";

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://www.terraform.io/docs/providers/awscc/r/gamelift_fleet.html awscc_gamelift_fleet} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options GameliftFleetConfig = {}
  */
  public constructor(scope: Construct, id: string, config: GameliftFleetConfig = {}) {
    super(scope, id, {
      terraformResourceType: 'awscc_gamelift_fleet',
      terraformGeneratorMetadata: {
        providerName: 'awscc'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle
    });
    this._buildId = config.buildId;
    this._certificateConfiguration = config.certificateConfiguration;
    this._description = config.description;
    this._desiredEc2Instances = config.desiredEc2Instances;
    this._ec2InboundPermissions = config.ec2InboundPermissions;
    this._ec2InstanceType = config.ec2InstanceType;
    this._fleetType = config.fleetType;
    this._instanceRoleArn = config.instanceRoleArn;
    this._locations = config.locations;
    this._logPaths = config.logPaths;
    this._maxSize = config.maxSize;
    this._metricGroups = config.metricGroups;
    this._minSize = config.minSize;
    this._name = config.name;
    this._newGameSessionProtectionPolicy = config.newGameSessionProtectionPolicy;
    this._peerVpcAwsAccountId = config.peerVpcAwsAccountId;
    this._peerVpcId = config.peerVpcId;
    this._resourceCreationLimitPolicy = config.resourceCreationLimitPolicy;
    this._runtimeConfiguration = config.runtimeConfiguration;
    this._scriptId = config.scriptId;
    this._serverLaunchParameters = config.serverLaunchParameters;
    this._serverLaunchPath = config.serverLaunchPath;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // build_id - computed: true, optional: true, required: false
  private _buildId?: string;
  public get buildId() {
    return this.getStringAttribute('build_id');
  }
  public set buildId(value: string) {
    this._buildId = value;
  }
  public resetBuildId() {
    this._buildId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get buildIdInput() {
    return this._buildId
  }

  // certificate_configuration - computed: true, optional: true, required: false
  private _certificateConfiguration?: GameliftFleetCertificateConfiguration;
  public get certificateConfiguration() {
    return this.interpolationForAttribute('certificate_configuration') as any;
  }
  public set certificateConfiguration(value: GameliftFleetCertificateConfiguration) {
    this._certificateConfiguration = value;
  }
  public resetCertificateConfiguration() {
    this._certificateConfiguration = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get certificateConfigurationInput() {
    return this._certificateConfiguration
  }

  // description - computed: false, optional: true, required: false
  private _description?: string;
  public get description() {
    return this.getStringAttribute('description');
  }
  public set description(value: string ) {
    this._description = value;
  }
  public resetDescription() {
    this._description = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get descriptionInput() {
    return this._description
  }

  // desired_ec2_instances - computed: false, optional: true, required: false
  private _desiredEc2Instances?: number;
  public get desiredEc2Instances() {
    return this.getNumberAttribute('desired_ec2_instances');
  }
  public set desiredEc2Instances(value: number ) {
    this._desiredEc2Instances = value;
  }
  public resetDesiredEc2Instances() {
    this._desiredEc2Instances = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get desiredEc2InstancesInput() {
    return this._desiredEc2Instances
  }

  // ec2_inbound_permissions - computed: false, optional: true, required: false
  private _ec2InboundPermissions?: GameliftFleetEc2InboundPermissions[];
  public get ec2InboundPermissions() {
    return this.interpolationForAttribute('ec2_inbound_permissions') as any;
  }
  public set ec2InboundPermissions(value: GameliftFleetEc2InboundPermissions[] ) {
    this._ec2InboundPermissions = value;
  }
  public resetEc2InboundPermissions() {
    this._ec2InboundPermissions = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ec2InboundPermissionsInput() {
    return this._ec2InboundPermissions
  }

  // ec2_instance_type - computed: true, optional: true, required: false
  private _ec2InstanceType?: string;
  public get ec2InstanceType() {
    return this.getStringAttribute('ec2_instance_type');
  }
  public set ec2InstanceType(value: string) {
    this._ec2InstanceType = value;
  }
  public resetEc2InstanceType() {
    this._ec2InstanceType = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ec2InstanceTypeInput() {
    return this._ec2InstanceType
  }

  // fleet_id - computed: true, optional: false, required: false
  public get fleetId() {
    return this.getStringAttribute('fleet_id');
  }

  // fleet_type - computed: true, optional: true, required: false
  private _fleetType?: string;
  public get fleetType() {
    return this.getStringAttribute('fleet_type');
  }
  public set fleetType(value: string) {
    this._fleetType = value;
  }
  public resetFleetType() {
    this._fleetType = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get fleetTypeInput() {
    return this._fleetType
  }

  // id - computed: true, optional: false, required: false
  public get id() {
    return this.getStringAttribute('id');
  }

  // instance_role_arn - computed: true, optional: true, required: false
  private _instanceRoleArn?: string;
  public get instanceRoleArn() {
    return this.getStringAttribute('instance_role_arn');
  }
  public set instanceRoleArn(value: string) {
    this._instanceRoleArn = value;
  }
  public resetInstanceRoleArn() {
    this._instanceRoleArn = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get instanceRoleArnInput() {
    return this._instanceRoleArn
  }

  // locations - computed: false, optional: true, required: false
  private _locations?: GameliftFleetLocations[];
  public get locations() {
    return this.interpolationForAttribute('locations') as any;
  }
  public set locations(value: GameliftFleetLocations[] ) {
    this._locations = value;
  }
  public resetLocations() {
    this._locations = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get locationsInput() {
    return this._locations
  }

  // log_paths - computed: true, optional: true, required: false
  private _logPaths?: string[];
  public get logPaths() {
    return this.getListAttribute('log_paths');
  }
  public set logPaths(value: string[]) {
    this._logPaths = value;
  }
  public resetLogPaths() {
    this._logPaths = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get logPathsInput() {
    return this._logPaths
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

  // metric_groups - computed: false, optional: true, required: false
  private _metricGroups?: string[];
  public get metricGroups() {
    return this.getListAttribute('metric_groups');
  }
  public set metricGroups(value: string[] ) {
    this._metricGroups = value;
  }
  public resetMetricGroups() {
    this._metricGroups = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get metricGroupsInput() {
    return this._metricGroups
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

  // name - computed: false, optional: true, required: false
  private _name?: string;
  public get name() {
    return this.getStringAttribute('name');
  }
  public set name(value: string ) {
    this._name = value;
  }
  public resetName() {
    this._name = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get nameInput() {
    return this._name
  }

  // new_game_session_protection_policy - computed: false, optional: true, required: false
  private _newGameSessionProtectionPolicy?: string;
  public get newGameSessionProtectionPolicy() {
    return this.getStringAttribute('new_game_session_protection_policy');
  }
  public set newGameSessionProtectionPolicy(value: string ) {
    this._newGameSessionProtectionPolicy = value;
  }
  public resetNewGameSessionProtectionPolicy() {
    this._newGameSessionProtectionPolicy = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get newGameSessionProtectionPolicyInput() {
    return this._newGameSessionProtectionPolicy
  }

  // peer_vpc_aws_account_id - computed: true, optional: true, required: false
  private _peerVpcAwsAccountId?: string;
  public get peerVpcAwsAccountId() {
    return this.getStringAttribute('peer_vpc_aws_account_id');
  }
  public set peerVpcAwsAccountId(value: string) {
    this._peerVpcAwsAccountId = value;
  }
  public resetPeerVpcAwsAccountId() {
    this._peerVpcAwsAccountId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get peerVpcAwsAccountIdInput() {
    return this._peerVpcAwsAccountId
  }

  // peer_vpc_id - computed: true, optional: true, required: false
  private _peerVpcId?: string;
  public get peerVpcId() {
    return this.getStringAttribute('peer_vpc_id');
  }
  public set peerVpcId(value: string) {
    this._peerVpcId = value;
  }
  public resetPeerVpcId() {
    this._peerVpcId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get peerVpcIdInput() {
    return this._peerVpcId
  }

  // resource_creation_limit_policy - computed: false, optional: true, required: false
  private _resourceCreationLimitPolicy?: GameliftFleetResourceCreationLimitPolicy;
  public get resourceCreationLimitPolicy() {
    return this.interpolationForAttribute('resource_creation_limit_policy') as any;
  }
  public set resourceCreationLimitPolicy(value: GameliftFleetResourceCreationLimitPolicy ) {
    this._resourceCreationLimitPolicy = value;
  }
  public resetResourceCreationLimitPolicy() {
    this._resourceCreationLimitPolicy = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get resourceCreationLimitPolicyInput() {
    return this._resourceCreationLimitPolicy
  }

  // runtime_configuration - computed: false, optional: true, required: false
  private _runtimeConfiguration?: GameliftFleetRuntimeConfiguration;
  public get runtimeConfiguration() {
    return this.interpolationForAttribute('runtime_configuration') as any;
  }
  public set runtimeConfiguration(value: GameliftFleetRuntimeConfiguration ) {
    this._runtimeConfiguration = value;
  }
  public resetRuntimeConfiguration() {
    this._runtimeConfiguration = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get runtimeConfigurationInput() {
    return this._runtimeConfiguration
  }

  // script_id - computed: true, optional: true, required: false
  private _scriptId?: string;
  public get scriptId() {
    return this.getStringAttribute('script_id');
  }
  public set scriptId(value: string) {
    this._scriptId = value;
  }
  public resetScriptId() {
    this._scriptId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get scriptIdInput() {
    return this._scriptId
  }

  // server_launch_parameters - computed: true, optional: true, required: false
  private _serverLaunchParameters?: string;
  public get serverLaunchParameters() {
    return this.getStringAttribute('server_launch_parameters');
  }
  public set serverLaunchParameters(value: string) {
    this._serverLaunchParameters = value;
  }
  public resetServerLaunchParameters() {
    this._serverLaunchParameters = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get serverLaunchParametersInput() {
    return this._serverLaunchParameters
  }

  // server_launch_path - computed: true, optional: true, required: false
  private _serverLaunchPath?: string;
  public get serverLaunchPath() {
    return this.getStringAttribute('server_launch_path');
  }
  public set serverLaunchPath(value: string) {
    this._serverLaunchPath = value;
  }
  public resetServerLaunchPath() {
    this._serverLaunchPath = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get serverLaunchPathInput() {
    return this._serverLaunchPath
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      build_id: cdktf.stringToTerraform(this._buildId),
      certificate_configuration: gameliftFleetCertificateConfigurationToTerraform(this._certificateConfiguration),
      description: cdktf.stringToTerraform(this._description),
      desired_ec2_instances: cdktf.numberToTerraform(this._desiredEc2Instances),
      ec2_inbound_permissions: cdktf.listMapper(gameliftFleetEc2InboundPermissionsToTerraform)(this._ec2InboundPermissions),
      ec2_instance_type: cdktf.stringToTerraform(this._ec2InstanceType),
      fleet_type: cdktf.stringToTerraform(this._fleetType),
      instance_role_arn: cdktf.stringToTerraform(this._instanceRoleArn),
      locations: cdktf.listMapper(gameliftFleetLocationsToTerraform)(this._locations),
      log_paths: cdktf.listMapper(cdktf.stringToTerraform)(this._logPaths),
      max_size: cdktf.numberToTerraform(this._maxSize),
      metric_groups: cdktf.listMapper(cdktf.stringToTerraform)(this._metricGroups),
      min_size: cdktf.numberToTerraform(this._minSize),
      name: cdktf.stringToTerraform(this._name),
      new_game_session_protection_policy: cdktf.stringToTerraform(this._newGameSessionProtectionPolicy),
      peer_vpc_aws_account_id: cdktf.stringToTerraform(this._peerVpcAwsAccountId),
      peer_vpc_id: cdktf.stringToTerraform(this._peerVpcId),
      resource_creation_limit_policy: gameliftFleetResourceCreationLimitPolicyToTerraform(this._resourceCreationLimitPolicy),
      runtime_configuration: gameliftFleetRuntimeConfigurationToTerraform(this._runtimeConfiguration),
      script_id: cdktf.stringToTerraform(this._scriptId),
      server_launch_parameters: cdktf.stringToTerraform(this._serverLaunchParameters),
      server_launch_path: cdktf.stringToTerraform(this._serverLaunchPath),
    };
  }
}
