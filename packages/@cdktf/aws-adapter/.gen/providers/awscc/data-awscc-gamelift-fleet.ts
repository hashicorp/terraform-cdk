// https://www.terraform.io/docs/providers/awscc/d/gamelift_fleet.html
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DataAwsccGameliftFleetConfig extends cdktf.TerraformMetaArguments {
  /**
  * Uniquely identifies the resource.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/d/gamelift_fleet.html#id DataAwsccGameliftFleet#id}
  */
  readonly id: string;
}
export class DataAwsccGameliftFleetCertificateConfiguration extends cdktf.ComplexComputedList {

  // certificate_type - computed: true, optional: false, required: false
  public get certificateType() {
    return this.getStringAttribute('certificate_type');
  }
}

export function dataAwsccGameliftFleetCertificateConfigurationToTerraform(struct?: DataAwsccGameliftFleetCertificateConfiguration): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    certificate_type: cdktf.stringToTerraform(struct!.certificateType),
  }
}

export class DataAwsccGameliftFleetEc2InboundPermissions extends cdktf.ComplexComputedList {

  // from_port - computed: true, optional: false, required: false
  public get fromPort() {
    return this.getNumberAttribute('from_port');
  }

  // ip_range - computed: true, optional: false, required: false
  public get ipRange() {
    return this.getStringAttribute('ip_range');
  }

  // protocol - computed: true, optional: false, required: false
  public get protocol() {
    return this.getStringAttribute('protocol');
  }

  // to_port - computed: true, optional: false, required: false
  public get toPort() {
    return this.getNumberAttribute('to_port');
  }
}

export function dataAwsccGameliftFleetEc2InboundPermissionsToTerraform(struct?: DataAwsccGameliftFleetEc2InboundPermissions): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    from_port: cdktf.numberToTerraform(struct!.fromPort),
    ip_range: cdktf.stringToTerraform(struct!.ipRange),
    protocol: cdktf.stringToTerraform(struct!.protocol),
    to_port: cdktf.numberToTerraform(struct!.toPort),
  }
}

export class DataAwsccGameliftFleetLocationsLocationCapacity extends cdktf.ComplexComputedList {

  // desired_ec2_instances - computed: true, optional: false, required: false
  public get desiredEc2Instances() {
    return this.getNumberAttribute('desired_ec2_instances');
  }

  // max_size - computed: true, optional: false, required: false
  public get maxSize() {
    return this.getNumberAttribute('max_size');
  }

  // min_size - computed: true, optional: false, required: false
  public get minSize() {
    return this.getNumberAttribute('min_size');
  }
}

export function dataAwsccGameliftFleetLocationsLocationCapacityToTerraform(struct?: DataAwsccGameliftFleetLocationsLocationCapacity): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    desired_ec2_instances: cdktf.numberToTerraform(struct!.desiredEc2Instances),
    max_size: cdktf.numberToTerraform(struct!.maxSize),
    min_size: cdktf.numberToTerraform(struct!.minSize),
  }
}

export class DataAwsccGameliftFleetLocations extends cdktf.ComplexComputedList {

  // location - computed: true, optional: false, required: false
  public get location() {
    return this.getStringAttribute('location');
  }

  // location_capacity - computed: true, optional: false, required: false
  public get locationCapacity() {
    return this.interpolationForAttribute('location_capacity') as any;
  }
}

export function dataAwsccGameliftFleetLocationsToTerraform(struct?: DataAwsccGameliftFleetLocations): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    location: cdktf.stringToTerraform(struct!.location),
    location_capacity: dataAwsccGameliftFleetLocationsLocationCapacityToTerraform(struct!.locationCapacity),
  }
}

export class DataAwsccGameliftFleetResourceCreationLimitPolicy extends cdktf.ComplexComputedList {

  // new_game_sessions_per_creator - computed: true, optional: false, required: false
  public get newGameSessionsPerCreator() {
    return this.getNumberAttribute('new_game_sessions_per_creator');
  }

  // policy_period_in_minutes - computed: true, optional: false, required: false
  public get policyPeriodInMinutes() {
    return this.getNumberAttribute('policy_period_in_minutes');
  }
}

export function dataAwsccGameliftFleetResourceCreationLimitPolicyToTerraform(struct?: DataAwsccGameliftFleetResourceCreationLimitPolicy): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    new_game_sessions_per_creator: cdktf.numberToTerraform(struct!.newGameSessionsPerCreator),
    policy_period_in_minutes: cdktf.numberToTerraform(struct!.policyPeriodInMinutes),
  }
}

export class DataAwsccGameliftFleetRuntimeConfigurationServerProcesses extends cdktf.ComplexComputedList {

  // concurrent_executions - computed: true, optional: false, required: false
  public get concurrentExecutions() {
    return this.getNumberAttribute('concurrent_executions');
  }

  // launch_path - computed: true, optional: false, required: false
  public get launchPath() {
    return this.getStringAttribute('launch_path');
  }

  // parameters - computed: true, optional: false, required: false
  public get parameters() {
    return this.getStringAttribute('parameters');
  }
}

export function dataAwsccGameliftFleetRuntimeConfigurationServerProcessesToTerraform(struct?: DataAwsccGameliftFleetRuntimeConfigurationServerProcesses): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    concurrent_executions: cdktf.numberToTerraform(struct!.concurrentExecutions),
    launch_path: cdktf.stringToTerraform(struct!.launchPath),
    parameters: cdktf.stringToTerraform(struct!.parameters),
  }
}

export class DataAwsccGameliftFleetRuntimeConfiguration extends cdktf.ComplexComputedList {

  // game_session_activation_timeout_seconds - computed: true, optional: false, required: false
  public get gameSessionActivationTimeoutSeconds() {
    return this.getNumberAttribute('game_session_activation_timeout_seconds');
  }

  // max_concurrent_game_session_activations - computed: true, optional: false, required: false
  public get maxConcurrentGameSessionActivations() {
    return this.getNumberAttribute('max_concurrent_game_session_activations');
  }

  // server_processes - computed: true, optional: false, required: false
  public get serverProcesses() {
    return this.interpolationForAttribute('server_processes') as any;
  }
}

export function dataAwsccGameliftFleetRuntimeConfigurationToTerraform(struct?: DataAwsccGameliftFleetRuntimeConfiguration): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    game_session_activation_timeout_seconds: cdktf.numberToTerraform(struct!.gameSessionActivationTimeoutSeconds),
    max_concurrent_game_session_activations: cdktf.numberToTerraform(struct!.maxConcurrentGameSessionActivations),
    server_processes: cdktf.listMapper(dataAwsccGameliftFleetRuntimeConfigurationServerProcessesToTerraform)(struct!.serverProcesses),
  }
}


/**
* Represents a {@link https://www.terraform.io/docs/providers/awscc/d/gamelift_fleet.html awscc_gamelift_fleet}
*/
export class DataAwsccGameliftFleet extends cdktf.TerraformDataSource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType: string = "awscc_gamelift_fleet";

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://www.terraform.io/docs/providers/awscc/d/gamelift_fleet.html awscc_gamelift_fleet} Data Source
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DataAwsccGameliftFleetConfig
  */
  public constructor(scope: Construct, id: string, config: DataAwsccGameliftFleetConfig) {
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
    this._id = config.id;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // build_id - computed: true, optional: false, required: false
  public get buildId() {
    return this.getStringAttribute('build_id');
  }

  // certificate_configuration - computed: true, optional: false, required: false
  public get certificateConfiguration() {
    return this.interpolationForAttribute('certificate_configuration') as any;
  }

  // description - computed: true, optional: false, required: false
  public get description() {
    return this.getStringAttribute('description');
  }

  // desired_ec2_instances - computed: true, optional: false, required: false
  public get desiredEc2Instances() {
    return this.getNumberAttribute('desired_ec2_instances');
  }

  // ec2_inbound_permissions - computed: true, optional: false, required: false
  public get ec2InboundPermissions() {
    return this.interpolationForAttribute('ec2_inbound_permissions') as any;
  }

  // ec2_instance_type - computed: true, optional: false, required: false
  public get ec2InstanceType() {
    return this.getStringAttribute('ec2_instance_type');
  }

  // fleet_id - computed: true, optional: false, required: false
  public get fleetId() {
    return this.getStringAttribute('fleet_id');
  }

  // fleet_type - computed: true, optional: false, required: false
  public get fleetType() {
    return this.getStringAttribute('fleet_type');
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

  // instance_role_arn - computed: true, optional: false, required: false
  public get instanceRoleArn() {
    return this.getStringAttribute('instance_role_arn');
  }

  // locations - computed: true, optional: false, required: false
  public get locations() {
    return this.interpolationForAttribute('locations') as any;
  }

  // log_paths - computed: true, optional: false, required: false
  public get logPaths() {
    return this.getListAttribute('log_paths');
  }

  // max_size - computed: true, optional: false, required: false
  public get maxSize() {
    return this.getNumberAttribute('max_size');
  }

  // metric_groups - computed: true, optional: false, required: false
  public get metricGroups() {
    return this.getListAttribute('metric_groups');
  }

  // min_size - computed: true, optional: false, required: false
  public get minSize() {
    return this.getNumberAttribute('min_size');
  }

  // name - computed: true, optional: false, required: false
  public get name() {
    return this.getStringAttribute('name');
  }

  // new_game_session_protection_policy - computed: true, optional: false, required: false
  public get newGameSessionProtectionPolicy() {
    return this.getStringAttribute('new_game_session_protection_policy');
  }

  // peer_vpc_aws_account_id - computed: true, optional: false, required: false
  public get peerVpcAwsAccountId() {
    return this.getStringAttribute('peer_vpc_aws_account_id');
  }

  // peer_vpc_id - computed: true, optional: false, required: false
  public get peerVpcId() {
    return this.getStringAttribute('peer_vpc_id');
  }

  // resource_creation_limit_policy - computed: true, optional: false, required: false
  public get resourceCreationLimitPolicy() {
    return this.interpolationForAttribute('resource_creation_limit_policy') as any;
  }

  // runtime_configuration - computed: true, optional: false, required: false
  public get runtimeConfiguration() {
    return this.interpolationForAttribute('runtime_configuration') as any;
  }

  // script_id - computed: true, optional: false, required: false
  public get scriptId() {
    return this.getStringAttribute('script_id');
  }

  // server_launch_parameters - computed: true, optional: false, required: false
  public get serverLaunchParameters() {
    return this.getStringAttribute('server_launch_parameters');
  }

  // server_launch_path - computed: true, optional: false, required: false
  public get serverLaunchPath() {
    return this.getStringAttribute('server_launch_path');
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
