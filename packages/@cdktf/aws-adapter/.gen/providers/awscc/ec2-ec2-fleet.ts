// https://www.terraform.io/docs/providers/awscc/r/ec2_ec2_fleet.html
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface Ec2Ec2FleetConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/ec2_ec2_fleet.html#context Ec2Ec2Fleet#context}
  */
  readonly context?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/ec2_ec2_fleet.html#excess_capacity_termination_policy Ec2Ec2Fleet#excess_capacity_termination_policy}
  */
  readonly excessCapacityTerminationPolicy?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/ec2_ec2_fleet.html#launch_template_configs Ec2Ec2Fleet#launch_template_configs}
  */
  readonly launchTemplateConfigs: Ec2Ec2FleetLaunchTemplateConfigs[];
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/ec2_ec2_fleet.html#on_demand_options Ec2Ec2Fleet#on_demand_options}
  */
  readonly onDemandOptions?: Ec2Ec2FleetOnDemandOptions;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/ec2_ec2_fleet.html#replace_unhealthy_instances Ec2Ec2Fleet#replace_unhealthy_instances}
  */
  readonly replaceUnhealthyInstances?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/ec2_ec2_fleet.html#spot_options Ec2Ec2Fleet#spot_options}
  */
  readonly spotOptions?: Ec2Ec2FleetSpotOptions;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/ec2_ec2_fleet.html#tag_specifications Ec2Ec2Fleet#tag_specifications}
  */
  readonly tagSpecifications?: Ec2Ec2FleetTagSpecifications[];
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/ec2_ec2_fleet.html#target_capacity_specification Ec2Ec2Fleet#target_capacity_specification}
  */
  readonly targetCapacitySpecification: Ec2Ec2FleetTargetCapacitySpecification;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/ec2_ec2_fleet.html#terminate_instances_with_expiration Ec2Ec2Fleet#terminate_instances_with_expiration}
  */
  readonly terminateInstancesWithExpiration?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/ec2_ec2_fleet.html#type Ec2Ec2Fleet#type}
  */
  readonly type?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/ec2_ec2_fleet.html#valid_from Ec2Ec2Fleet#valid_from}
  */
  readonly validFrom?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/ec2_ec2_fleet.html#valid_until Ec2Ec2Fleet#valid_until}
  */
  readonly validUntil?: string;
}
export interface Ec2Ec2FleetLaunchTemplateConfigsLaunchTemplateSpecification {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/ec2_ec2_fleet.html#launch_template_id Ec2Ec2Fleet#launch_template_id}
  */
  readonly launchTemplateId?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/ec2_ec2_fleet.html#launch_template_name Ec2Ec2Fleet#launch_template_name}
  */
  readonly launchTemplateName?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/ec2_ec2_fleet.html#version Ec2Ec2Fleet#version}
  */
  readonly version?: string;
}

export function ec2Ec2FleetLaunchTemplateConfigsLaunchTemplateSpecificationToTerraform(struct?: Ec2Ec2FleetLaunchTemplateConfigsLaunchTemplateSpecification): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    launch_template_id: cdktf.stringToTerraform(struct!.launchTemplateId),
    launch_template_name: cdktf.stringToTerraform(struct!.launchTemplateName),
    version: cdktf.stringToTerraform(struct!.version),
  }
}

export interface Ec2Ec2FleetLaunchTemplateConfigsOverridesPlacement {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/ec2_ec2_fleet.html#affinity Ec2Ec2Fleet#affinity}
  */
  readonly affinity?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/ec2_ec2_fleet.html#availability_zone Ec2Ec2Fleet#availability_zone}
  */
  readonly availabilityZone?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/ec2_ec2_fleet.html#group_name Ec2Ec2Fleet#group_name}
  */
  readonly groupName?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/ec2_ec2_fleet.html#host_id Ec2Ec2Fleet#host_id}
  */
  readonly hostId?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/ec2_ec2_fleet.html#host_resource_group_arn Ec2Ec2Fleet#host_resource_group_arn}
  */
  readonly hostResourceGroupArn?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/ec2_ec2_fleet.html#partition_number Ec2Ec2Fleet#partition_number}
  */
  readonly partitionNumber?: number;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/ec2_ec2_fleet.html#spread_domain Ec2Ec2Fleet#spread_domain}
  */
  readonly spreadDomain?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/ec2_ec2_fleet.html#tenancy Ec2Ec2Fleet#tenancy}
  */
  readonly tenancy?: string;
}

export function ec2Ec2FleetLaunchTemplateConfigsOverridesPlacementToTerraform(struct?: Ec2Ec2FleetLaunchTemplateConfigsOverridesPlacement): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    affinity: cdktf.stringToTerraform(struct!.affinity),
    availability_zone: cdktf.stringToTerraform(struct!.availabilityZone),
    group_name: cdktf.stringToTerraform(struct!.groupName),
    host_id: cdktf.stringToTerraform(struct!.hostId),
    host_resource_group_arn: cdktf.stringToTerraform(struct!.hostResourceGroupArn),
    partition_number: cdktf.numberToTerraform(struct!.partitionNumber),
    spread_domain: cdktf.stringToTerraform(struct!.spreadDomain),
    tenancy: cdktf.stringToTerraform(struct!.tenancy),
  }
}

export interface Ec2Ec2FleetLaunchTemplateConfigsOverrides {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/ec2_ec2_fleet.html#availability_zone Ec2Ec2Fleet#availability_zone}
  */
  readonly availabilityZone?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/ec2_ec2_fleet.html#instance_type Ec2Ec2Fleet#instance_type}
  */
  readonly instanceType?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/ec2_ec2_fleet.html#max_price Ec2Ec2Fleet#max_price}
  */
  readonly maxPrice?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/ec2_ec2_fleet.html#placement Ec2Ec2Fleet#placement}
  */
  readonly placement?: Ec2Ec2FleetLaunchTemplateConfigsOverridesPlacement;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/ec2_ec2_fleet.html#priority Ec2Ec2Fleet#priority}
  */
  readonly priority?: number;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/ec2_ec2_fleet.html#subnet_id Ec2Ec2Fleet#subnet_id}
  */
  readonly subnetId?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/ec2_ec2_fleet.html#weighted_capacity Ec2Ec2Fleet#weighted_capacity}
  */
  readonly weightedCapacity?: number;
}

export function ec2Ec2FleetLaunchTemplateConfigsOverridesToTerraform(struct?: Ec2Ec2FleetLaunchTemplateConfigsOverrides): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    availability_zone: cdktf.stringToTerraform(struct!.availabilityZone),
    instance_type: cdktf.stringToTerraform(struct!.instanceType),
    max_price: cdktf.stringToTerraform(struct!.maxPrice),
    placement: ec2Ec2FleetLaunchTemplateConfigsOverridesPlacementToTerraform(struct!.placement),
    priority: cdktf.numberToTerraform(struct!.priority),
    subnet_id: cdktf.stringToTerraform(struct!.subnetId),
    weighted_capacity: cdktf.numberToTerraform(struct!.weightedCapacity),
  }
}

export interface Ec2Ec2FleetLaunchTemplateConfigs {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/ec2_ec2_fleet.html#launch_template_specification Ec2Ec2Fleet#launch_template_specification}
  */
  readonly launchTemplateSpecification?: Ec2Ec2FleetLaunchTemplateConfigsLaunchTemplateSpecification;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/ec2_ec2_fleet.html#overrides Ec2Ec2Fleet#overrides}
  */
  readonly overrides?: Ec2Ec2FleetLaunchTemplateConfigsOverrides[];
}

export function ec2Ec2FleetLaunchTemplateConfigsToTerraform(struct?: Ec2Ec2FleetLaunchTemplateConfigs): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    launch_template_specification: ec2Ec2FleetLaunchTemplateConfigsLaunchTemplateSpecificationToTerraform(struct!.launchTemplateSpecification),
    overrides: cdktf.listMapper(ec2Ec2FleetLaunchTemplateConfigsOverridesToTerraform)(struct!.overrides),
  }
}

export interface Ec2Ec2FleetOnDemandOptionsCapacityReservationOptions {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/ec2_ec2_fleet.html#usage_strategy Ec2Ec2Fleet#usage_strategy}
  */
  readonly usageStrategy?: string;
}

export function ec2Ec2FleetOnDemandOptionsCapacityReservationOptionsToTerraform(struct?: Ec2Ec2FleetOnDemandOptionsCapacityReservationOptions): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    usage_strategy: cdktf.stringToTerraform(struct!.usageStrategy),
  }
}

export interface Ec2Ec2FleetOnDemandOptions {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/ec2_ec2_fleet.html#allocation_strategy Ec2Ec2Fleet#allocation_strategy}
  */
  readonly allocationStrategy?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/ec2_ec2_fleet.html#capacity_reservation_options Ec2Ec2Fleet#capacity_reservation_options}
  */
  readonly capacityReservationOptions?: Ec2Ec2FleetOnDemandOptionsCapacityReservationOptions;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/ec2_ec2_fleet.html#max_total_price Ec2Ec2Fleet#max_total_price}
  */
  readonly maxTotalPrice?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/ec2_ec2_fleet.html#min_target_capacity Ec2Ec2Fleet#min_target_capacity}
  */
  readonly minTargetCapacity?: number;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/ec2_ec2_fleet.html#single_availability_zone Ec2Ec2Fleet#single_availability_zone}
  */
  readonly singleAvailabilityZone?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/ec2_ec2_fleet.html#single_instance_type Ec2Ec2Fleet#single_instance_type}
  */
  readonly singleInstanceType?: boolean | cdktf.IResolvable;
}

export function ec2Ec2FleetOnDemandOptionsToTerraform(struct?: Ec2Ec2FleetOnDemandOptions): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    allocation_strategy: cdktf.stringToTerraform(struct!.allocationStrategy),
    capacity_reservation_options: ec2Ec2FleetOnDemandOptionsCapacityReservationOptionsToTerraform(struct!.capacityReservationOptions),
    max_total_price: cdktf.stringToTerraform(struct!.maxTotalPrice),
    min_target_capacity: cdktf.numberToTerraform(struct!.minTargetCapacity),
    single_availability_zone: cdktf.booleanToTerraform(struct!.singleAvailabilityZone),
    single_instance_type: cdktf.booleanToTerraform(struct!.singleInstanceType),
  }
}

export interface Ec2Ec2FleetSpotOptions {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/ec2_ec2_fleet.html#allocation_strategy Ec2Ec2Fleet#allocation_strategy}
  */
  readonly allocationStrategy?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/ec2_ec2_fleet.html#instance_interruption_behavior Ec2Ec2Fleet#instance_interruption_behavior}
  */
  readonly instanceInterruptionBehavior?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/ec2_ec2_fleet.html#instance_pools_to_use_count Ec2Ec2Fleet#instance_pools_to_use_count}
  */
  readonly instancePoolsToUseCount?: number;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/ec2_ec2_fleet.html#max_total_price Ec2Ec2Fleet#max_total_price}
  */
  readonly maxTotalPrice?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/ec2_ec2_fleet.html#min_target_capacity Ec2Ec2Fleet#min_target_capacity}
  */
  readonly minTargetCapacity?: number;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/ec2_ec2_fleet.html#single_availability_zone Ec2Ec2Fleet#single_availability_zone}
  */
  readonly singleAvailabilityZone?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/ec2_ec2_fleet.html#single_instance_type Ec2Ec2Fleet#single_instance_type}
  */
  readonly singleInstanceType?: boolean | cdktf.IResolvable;
}

export function ec2Ec2FleetSpotOptionsToTerraform(struct?: Ec2Ec2FleetSpotOptions): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    allocation_strategy: cdktf.stringToTerraform(struct!.allocationStrategy),
    instance_interruption_behavior: cdktf.stringToTerraform(struct!.instanceInterruptionBehavior),
    instance_pools_to_use_count: cdktf.numberToTerraform(struct!.instancePoolsToUseCount),
    max_total_price: cdktf.stringToTerraform(struct!.maxTotalPrice),
    min_target_capacity: cdktf.numberToTerraform(struct!.minTargetCapacity),
    single_availability_zone: cdktf.booleanToTerraform(struct!.singleAvailabilityZone),
    single_instance_type: cdktf.booleanToTerraform(struct!.singleInstanceType),
  }
}

export interface Ec2Ec2FleetTagSpecificationsTags {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/ec2_ec2_fleet.html#key Ec2Ec2Fleet#key}
  */
  readonly key: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/ec2_ec2_fleet.html#value Ec2Ec2Fleet#value}
  */
  readonly value: string;
}

export function ec2Ec2FleetTagSpecificationsTagsToTerraform(struct?: Ec2Ec2FleetTagSpecificationsTags): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    key: cdktf.stringToTerraform(struct!.key),
    value: cdktf.stringToTerraform(struct!.value),
  }
}

export interface Ec2Ec2FleetTagSpecifications {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/ec2_ec2_fleet.html#resource_type Ec2Ec2Fleet#resource_type}
  */
  readonly resourceType?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/ec2_ec2_fleet.html#tags Ec2Ec2Fleet#tags}
  */
  readonly tags?: Ec2Ec2FleetTagSpecificationsTags[];
}

export function ec2Ec2FleetTagSpecificationsToTerraform(struct?: Ec2Ec2FleetTagSpecifications): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    resource_type: cdktf.stringToTerraform(struct!.resourceType),
    tags: cdktf.listMapper(ec2Ec2FleetTagSpecificationsTagsToTerraform)(struct!.tags),
  }
}

export interface Ec2Ec2FleetTargetCapacitySpecification {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/ec2_ec2_fleet.html#default_target_capacity_type Ec2Ec2Fleet#default_target_capacity_type}
  */
  readonly defaultTargetCapacityType?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/ec2_ec2_fleet.html#on_demand_target_capacity Ec2Ec2Fleet#on_demand_target_capacity}
  */
  readonly onDemandTargetCapacity?: number;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/ec2_ec2_fleet.html#spot_target_capacity Ec2Ec2Fleet#spot_target_capacity}
  */
  readonly spotTargetCapacity?: number;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/ec2_ec2_fleet.html#total_target_capacity Ec2Ec2Fleet#total_target_capacity}
  */
  readonly totalTargetCapacity: number;
}

export function ec2Ec2FleetTargetCapacitySpecificationToTerraform(struct?: Ec2Ec2FleetTargetCapacitySpecification): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    default_target_capacity_type: cdktf.stringToTerraform(struct!.defaultTargetCapacityType),
    on_demand_target_capacity: cdktf.numberToTerraform(struct!.onDemandTargetCapacity),
    spot_target_capacity: cdktf.numberToTerraform(struct!.spotTargetCapacity),
    total_target_capacity: cdktf.numberToTerraform(struct!.totalTargetCapacity),
  }
}


/**
* Represents a {@link https://www.terraform.io/docs/providers/awscc/r/ec2_ec2_fleet.html awscc_ec2_ec2_fleet}
*/
export class Ec2Ec2Fleet extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType: string = "awscc_ec2_ec2_fleet";

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://www.terraform.io/docs/providers/awscc/r/ec2_ec2_fleet.html awscc_ec2_ec2_fleet} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options Ec2Ec2FleetConfig
  */
  public constructor(scope: Construct, id: string, config: Ec2Ec2FleetConfig) {
    super(scope, id, {
      terraformResourceType: 'awscc_ec2_ec2_fleet',
      terraformGeneratorMetadata: {
        providerName: 'awscc'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle
    });
    this._context = config.context;
    this._excessCapacityTerminationPolicy = config.excessCapacityTerminationPolicy;
    this._launchTemplateConfigs = config.launchTemplateConfigs;
    this._onDemandOptions = config.onDemandOptions;
    this._replaceUnhealthyInstances = config.replaceUnhealthyInstances;
    this._spotOptions = config.spotOptions;
    this._tagSpecifications = config.tagSpecifications;
    this._targetCapacitySpecification = config.targetCapacitySpecification;
    this._terminateInstancesWithExpiration = config.terminateInstancesWithExpiration;
    this._type = config.type;
    this._validFrom = config.validFrom;
    this._validUntil = config.validUntil;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // context - computed: false, optional: true, required: false
  private _context?: string;
  public get context() {
    return this.getStringAttribute('context');
  }
  public set context(value: string ) {
    this._context = value;
  }
  public resetContext() {
    this._context = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get contextInput() {
    return this._context
  }

  // excess_capacity_termination_policy - computed: false, optional: true, required: false
  private _excessCapacityTerminationPolicy?: string;
  public get excessCapacityTerminationPolicy() {
    return this.getStringAttribute('excess_capacity_termination_policy');
  }
  public set excessCapacityTerminationPolicy(value: string ) {
    this._excessCapacityTerminationPolicy = value;
  }
  public resetExcessCapacityTerminationPolicy() {
    this._excessCapacityTerminationPolicy = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get excessCapacityTerminationPolicyInput() {
    return this._excessCapacityTerminationPolicy
  }

  // fleet_id - computed: true, optional: false, required: false
  public get fleetId() {
    return this.getStringAttribute('fleet_id');
  }

  // id - computed: true, optional: false, required: false
  public get id() {
    return this.getStringAttribute('id');
  }

  // launch_template_configs - computed: false, optional: false, required: true
  private _launchTemplateConfigs: Ec2Ec2FleetLaunchTemplateConfigs[];
  public get launchTemplateConfigs() {
    return this.interpolationForAttribute('launch_template_configs') as any;
  }
  public set launchTemplateConfigs(value: Ec2Ec2FleetLaunchTemplateConfigs[]) {
    this._launchTemplateConfigs = value;
  }
  // Temporarily expose input value. Use with caution.
  public get launchTemplateConfigsInput() {
    return this._launchTemplateConfigs
  }

  // on_demand_options - computed: true, optional: true, required: false
  private _onDemandOptions?: Ec2Ec2FleetOnDemandOptions;
  public get onDemandOptions() {
    return this.interpolationForAttribute('on_demand_options') as any;
  }
  public set onDemandOptions(value: Ec2Ec2FleetOnDemandOptions) {
    this._onDemandOptions = value;
  }
  public resetOnDemandOptions() {
    this._onDemandOptions = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get onDemandOptionsInput() {
    return this._onDemandOptions
  }

  // replace_unhealthy_instances - computed: true, optional: true, required: false
  private _replaceUnhealthyInstances?: boolean | cdktf.IResolvable;
  public get replaceUnhealthyInstances() {
    return this.getBooleanAttribute('replace_unhealthy_instances');
  }
  public set replaceUnhealthyInstances(value: boolean | cdktf.IResolvable) {
    this._replaceUnhealthyInstances = value;
  }
  public resetReplaceUnhealthyInstances() {
    this._replaceUnhealthyInstances = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get replaceUnhealthyInstancesInput() {
    return this._replaceUnhealthyInstances
  }

  // spot_options - computed: true, optional: true, required: false
  private _spotOptions?: Ec2Ec2FleetSpotOptions;
  public get spotOptions() {
    return this.interpolationForAttribute('spot_options') as any;
  }
  public set spotOptions(value: Ec2Ec2FleetSpotOptions) {
    this._spotOptions = value;
  }
  public resetSpotOptions() {
    this._spotOptions = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get spotOptionsInput() {
    return this._spotOptions
  }

  // tag_specifications - computed: true, optional: true, required: false
  private _tagSpecifications?: Ec2Ec2FleetTagSpecifications[];
  public get tagSpecifications() {
    return this.interpolationForAttribute('tag_specifications') as any;
  }
  public set tagSpecifications(value: Ec2Ec2FleetTagSpecifications[]) {
    this._tagSpecifications = value;
  }
  public resetTagSpecifications() {
    this._tagSpecifications = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tagSpecificationsInput() {
    return this._tagSpecifications
  }

  // target_capacity_specification - computed: false, optional: false, required: true
  private _targetCapacitySpecification: Ec2Ec2FleetTargetCapacitySpecification;
  public get targetCapacitySpecification() {
    return this.interpolationForAttribute('target_capacity_specification') as any;
  }
  public set targetCapacitySpecification(value: Ec2Ec2FleetTargetCapacitySpecification) {
    this._targetCapacitySpecification = value;
  }
  // Temporarily expose input value. Use with caution.
  public get targetCapacitySpecificationInput() {
    return this._targetCapacitySpecification
  }

  // terminate_instances_with_expiration - computed: true, optional: true, required: false
  private _terminateInstancesWithExpiration?: boolean | cdktf.IResolvable;
  public get terminateInstancesWithExpiration() {
    return this.getBooleanAttribute('terminate_instances_with_expiration');
  }
  public set terminateInstancesWithExpiration(value: boolean | cdktf.IResolvable) {
    this._terminateInstancesWithExpiration = value;
  }
  public resetTerminateInstancesWithExpiration() {
    this._terminateInstancesWithExpiration = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get terminateInstancesWithExpirationInput() {
    return this._terminateInstancesWithExpiration
  }

  // type - computed: true, optional: true, required: false
  private _type?: string;
  public get type() {
    return this.getStringAttribute('type');
  }
  public set type(value: string) {
    this._type = value;
  }
  public resetType() {
    this._type = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get typeInput() {
    return this._type
  }

  // valid_from - computed: true, optional: true, required: false
  private _validFrom?: string;
  public get validFrom() {
    return this.getStringAttribute('valid_from');
  }
  public set validFrom(value: string) {
    this._validFrom = value;
  }
  public resetValidFrom() {
    this._validFrom = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get validFromInput() {
    return this._validFrom
  }

  // valid_until - computed: true, optional: true, required: false
  private _validUntil?: string;
  public get validUntil() {
    return this.getStringAttribute('valid_until');
  }
  public set validUntil(value: string) {
    this._validUntil = value;
  }
  public resetValidUntil() {
    this._validUntil = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get validUntilInput() {
    return this._validUntil
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      context: cdktf.stringToTerraform(this._context),
      excess_capacity_termination_policy: cdktf.stringToTerraform(this._excessCapacityTerminationPolicy),
      launch_template_configs: cdktf.listMapper(ec2Ec2FleetLaunchTemplateConfigsToTerraform)(this._launchTemplateConfigs),
      on_demand_options: ec2Ec2FleetOnDemandOptionsToTerraform(this._onDemandOptions),
      replace_unhealthy_instances: cdktf.booleanToTerraform(this._replaceUnhealthyInstances),
      spot_options: ec2Ec2FleetSpotOptionsToTerraform(this._spotOptions),
      tag_specifications: cdktf.listMapper(ec2Ec2FleetTagSpecificationsToTerraform)(this._tagSpecifications),
      target_capacity_specification: ec2Ec2FleetTargetCapacitySpecificationToTerraform(this._targetCapacitySpecification),
      terminate_instances_with_expiration: cdktf.booleanToTerraform(this._terminateInstancesWithExpiration),
      type: cdktf.stringToTerraform(this._type),
      valid_from: cdktf.stringToTerraform(this._validFrom),
      valid_until: cdktf.stringToTerraform(this._validUntil),
    };
  }
}
