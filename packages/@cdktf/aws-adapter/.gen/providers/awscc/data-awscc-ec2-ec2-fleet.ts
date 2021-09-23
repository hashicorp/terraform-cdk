// https://www.terraform.io/docs/providers/awscc/d/ec2_ec2_fleet.html
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DataAwsccEc2Ec2FleetConfig extends cdktf.TerraformMetaArguments {
  /**
  * Uniquely identifies the resource.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/d/ec2_ec2_fleet.html#id DataAwsccEc2Ec2Fleet#id}
  */
  readonly id: string;
}
export class DataAwsccEc2Ec2FleetLaunchTemplateConfigsLaunchTemplateSpecification extends cdktf.ComplexComputedList {

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

export function dataAwsccEc2Ec2FleetLaunchTemplateConfigsLaunchTemplateSpecificationToTerraform(struct?: DataAwsccEc2Ec2FleetLaunchTemplateConfigsLaunchTemplateSpecification): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    launch_template_id: cdktf.stringToTerraform(struct!.launchTemplateId),
    launch_template_name: cdktf.stringToTerraform(struct!.launchTemplateName),
    version: cdktf.stringToTerraform(struct!.version),
  }
}

export class DataAwsccEc2Ec2FleetLaunchTemplateConfigsOverridesPlacement extends cdktf.ComplexComputedList {

  // affinity - computed: true, optional: false, required: false
  public get affinity() {
    return this.getStringAttribute('affinity');
  }

  // availability_zone - computed: true, optional: false, required: false
  public get availabilityZone() {
    return this.getStringAttribute('availability_zone');
  }

  // group_name - computed: true, optional: false, required: false
  public get groupName() {
    return this.getStringAttribute('group_name');
  }

  // host_id - computed: true, optional: false, required: false
  public get hostId() {
    return this.getStringAttribute('host_id');
  }

  // host_resource_group_arn - computed: true, optional: false, required: false
  public get hostResourceGroupArn() {
    return this.getStringAttribute('host_resource_group_arn');
  }

  // partition_number - computed: true, optional: false, required: false
  public get partitionNumber() {
    return this.getNumberAttribute('partition_number');
  }

  // spread_domain - computed: true, optional: false, required: false
  public get spreadDomain() {
    return this.getStringAttribute('spread_domain');
  }

  // tenancy - computed: true, optional: false, required: false
  public get tenancy() {
    return this.getStringAttribute('tenancy');
  }
}

export function dataAwsccEc2Ec2FleetLaunchTemplateConfigsOverridesPlacementToTerraform(struct?: DataAwsccEc2Ec2FleetLaunchTemplateConfigsOverridesPlacement): any {
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

export class DataAwsccEc2Ec2FleetLaunchTemplateConfigsOverrides extends cdktf.ComplexComputedList {

  // availability_zone - computed: true, optional: false, required: false
  public get availabilityZone() {
    return this.getStringAttribute('availability_zone');
  }

  // instance_type - computed: true, optional: false, required: false
  public get instanceType() {
    return this.getStringAttribute('instance_type');
  }

  // max_price - computed: true, optional: false, required: false
  public get maxPrice() {
    return this.getStringAttribute('max_price');
  }

  // placement - computed: true, optional: false, required: false
  public get placement() {
    return this.interpolationForAttribute('placement') as any;
  }

  // priority - computed: true, optional: false, required: false
  public get priority() {
    return this.getNumberAttribute('priority');
  }

  // subnet_id - computed: true, optional: false, required: false
  public get subnetId() {
    return this.getStringAttribute('subnet_id');
  }

  // weighted_capacity - computed: true, optional: false, required: false
  public get weightedCapacity() {
    return this.getNumberAttribute('weighted_capacity');
  }
}

export function dataAwsccEc2Ec2FleetLaunchTemplateConfigsOverridesToTerraform(struct?: DataAwsccEc2Ec2FleetLaunchTemplateConfigsOverrides): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    availability_zone: cdktf.stringToTerraform(struct!.availabilityZone),
    instance_type: cdktf.stringToTerraform(struct!.instanceType),
    max_price: cdktf.stringToTerraform(struct!.maxPrice),
    placement: dataAwsccEc2Ec2FleetLaunchTemplateConfigsOverridesPlacementToTerraform(struct!.placement),
    priority: cdktf.numberToTerraform(struct!.priority),
    subnet_id: cdktf.stringToTerraform(struct!.subnetId),
    weighted_capacity: cdktf.numberToTerraform(struct!.weightedCapacity),
  }
}

export class DataAwsccEc2Ec2FleetLaunchTemplateConfigs extends cdktf.ComplexComputedList {

  // launch_template_specification - computed: true, optional: false, required: false
  public get launchTemplateSpecification() {
    return this.interpolationForAttribute('launch_template_specification') as any;
  }

  // overrides - computed: true, optional: false, required: false
  public get overrides() {
    return this.interpolationForAttribute('overrides') as any;
  }
}

export function dataAwsccEc2Ec2FleetLaunchTemplateConfigsToTerraform(struct?: DataAwsccEc2Ec2FleetLaunchTemplateConfigs): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    launch_template_specification: dataAwsccEc2Ec2FleetLaunchTemplateConfigsLaunchTemplateSpecificationToTerraform(struct!.launchTemplateSpecification),
    overrides: cdktf.listMapper(dataAwsccEc2Ec2FleetLaunchTemplateConfigsOverridesToTerraform)(struct!.overrides),
  }
}

export class DataAwsccEc2Ec2FleetOnDemandOptionsCapacityReservationOptions extends cdktf.ComplexComputedList {

  // usage_strategy - computed: true, optional: false, required: false
  public get usageStrategy() {
    return this.getStringAttribute('usage_strategy');
  }
}

export function dataAwsccEc2Ec2FleetOnDemandOptionsCapacityReservationOptionsToTerraform(struct?: DataAwsccEc2Ec2FleetOnDemandOptionsCapacityReservationOptions): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    usage_strategy: cdktf.stringToTerraform(struct!.usageStrategy),
  }
}

export class DataAwsccEc2Ec2FleetOnDemandOptions extends cdktf.ComplexComputedList {

  // allocation_strategy - computed: true, optional: false, required: false
  public get allocationStrategy() {
    return this.getStringAttribute('allocation_strategy');
  }

  // capacity_reservation_options - computed: true, optional: false, required: false
  public get capacityReservationOptions() {
    return this.interpolationForAttribute('capacity_reservation_options') as any;
  }

  // max_total_price - computed: true, optional: false, required: false
  public get maxTotalPrice() {
    return this.getStringAttribute('max_total_price');
  }

  // min_target_capacity - computed: true, optional: false, required: false
  public get minTargetCapacity() {
    return this.getNumberAttribute('min_target_capacity');
  }

  // single_availability_zone - computed: true, optional: false, required: false
  public get singleAvailabilityZone() {
    return this.getBooleanAttribute('single_availability_zone');
  }

  // single_instance_type - computed: true, optional: false, required: false
  public get singleInstanceType() {
    return this.getBooleanAttribute('single_instance_type');
  }
}

export function dataAwsccEc2Ec2FleetOnDemandOptionsToTerraform(struct?: DataAwsccEc2Ec2FleetOnDemandOptions): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    allocation_strategy: cdktf.stringToTerraform(struct!.allocationStrategy),
    capacity_reservation_options: dataAwsccEc2Ec2FleetOnDemandOptionsCapacityReservationOptionsToTerraform(struct!.capacityReservationOptions),
    max_total_price: cdktf.stringToTerraform(struct!.maxTotalPrice),
    min_target_capacity: cdktf.numberToTerraform(struct!.minTargetCapacity),
    single_availability_zone: cdktf.booleanToTerraform(struct!.singleAvailabilityZone),
    single_instance_type: cdktf.booleanToTerraform(struct!.singleInstanceType),
  }
}

export class DataAwsccEc2Ec2FleetSpotOptions extends cdktf.ComplexComputedList {

  // allocation_strategy - computed: true, optional: false, required: false
  public get allocationStrategy() {
    return this.getStringAttribute('allocation_strategy');
  }

  // instance_interruption_behavior - computed: true, optional: false, required: false
  public get instanceInterruptionBehavior() {
    return this.getStringAttribute('instance_interruption_behavior');
  }

  // instance_pools_to_use_count - computed: true, optional: false, required: false
  public get instancePoolsToUseCount() {
    return this.getNumberAttribute('instance_pools_to_use_count');
  }

  // max_total_price - computed: true, optional: false, required: false
  public get maxTotalPrice() {
    return this.getStringAttribute('max_total_price');
  }

  // min_target_capacity - computed: true, optional: false, required: false
  public get minTargetCapacity() {
    return this.getNumberAttribute('min_target_capacity');
  }

  // single_availability_zone - computed: true, optional: false, required: false
  public get singleAvailabilityZone() {
    return this.getBooleanAttribute('single_availability_zone');
  }

  // single_instance_type - computed: true, optional: false, required: false
  public get singleInstanceType() {
    return this.getBooleanAttribute('single_instance_type');
  }
}

export function dataAwsccEc2Ec2FleetSpotOptionsToTerraform(struct?: DataAwsccEc2Ec2FleetSpotOptions): any {
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

export class DataAwsccEc2Ec2FleetTagSpecificationsTags extends cdktf.ComplexComputedList {

  // key - computed: true, optional: false, required: false
  public get key() {
    return this.getStringAttribute('key');
  }

  // value - computed: true, optional: false, required: false
  public get value() {
    return this.getStringAttribute('value');
  }
}

export function dataAwsccEc2Ec2FleetTagSpecificationsTagsToTerraform(struct?: DataAwsccEc2Ec2FleetTagSpecificationsTags): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    key: cdktf.stringToTerraform(struct!.key),
    value: cdktf.stringToTerraform(struct!.value),
  }
}

export class DataAwsccEc2Ec2FleetTagSpecifications extends cdktf.ComplexComputedList {

  // resource_type - computed: true, optional: false, required: false
  public get resourceType() {
    return this.getStringAttribute('resource_type');
  }

  // tags - computed: true, optional: false, required: false
  public get tags() {
    return this.interpolationForAttribute('tags') as any;
  }
}

export function dataAwsccEc2Ec2FleetTagSpecificationsToTerraform(struct?: DataAwsccEc2Ec2FleetTagSpecifications): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    resource_type: cdktf.stringToTerraform(struct!.resourceType),
    tags: cdktf.listMapper(dataAwsccEc2Ec2FleetTagSpecificationsTagsToTerraform)(struct!.tags),
  }
}

export class DataAwsccEc2Ec2FleetTargetCapacitySpecification extends cdktf.ComplexComputedList {

  // default_target_capacity_type - computed: true, optional: false, required: false
  public get defaultTargetCapacityType() {
    return this.getStringAttribute('default_target_capacity_type');
  }

  // on_demand_target_capacity - computed: true, optional: false, required: false
  public get onDemandTargetCapacity() {
    return this.getNumberAttribute('on_demand_target_capacity');
  }

  // spot_target_capacity - computed: true, optional: false, required: false
  public get spotTargetCapacity() {
    return this.getNumberAttribute('spot_target_capacity');
  }

  // total_target_capacity - computed: true, optional: false, required: false
  public get totalTargetCapacity() {
    return this.getNumberAttribute('total_target_capacity');
  }
}

export function dataAwsccEc2Ec2FleetTargetCapacitySpecificationToTerraform(struct?: DataAwsccEc2Ec2FleetTargetCapacitySpecification): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    default_target_capacity_type: cdktf.stringToTerraform(struct!.defaultTargetCapacityType),
    on_demand_target_capacity: cdktf.numberToTerraform(struct!.onDemandTargetCapacity),
    spot_target_capacity: cdktf.numberToTerraform(struct!.spotTargetCapacity),
    total_target_capacity: cdktf.numberToTerraform(struct!.totalTargetCapacity),
  }
}


/**
* Represents a {@link https://www.terraform.io/docs/providers/awscc/d/ec2_ec2_fleet.html awscc_ec2_ec2_fleet}
*/
export class DataAwsccEc2Ec2Fleet extends cdktf.TerraformDataSource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType: string = "awscc_ec2_ec2_fleet";

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://www.terraform.io/docs/providers/awscc/d/ec2_ec2_fleet.html awscc_ec2_ec2_fleet} Data Source
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DataAwsccEc2Ec2FleetConfig
  */
  public constructor(scope: Construct, id: string, config: DataAwsccEc2Ec2FleetConfig) {
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
    this._id = config.id;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // context - computed: true, optional: false, required: false
  public get context() {
    return this.getStringAttribute('context');
  }

  // excess_capacity_termination_policy - computed: true, optional: false, required: false
  public get excessCapacityTerminationPolicy() {
    return this.getStringAttribute('excess_capacity_termination_policy');
  }

  // fleet_id - computed: true, optional: false, required: false
  public get fleetId() {
    return this.getStringAttribute('fleet_id');
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

  // launch_template_configs - computed: true, optional: false, required: false
  public get launchTemplateConfigs() {
    return this.interpolationForAttribute('launch_template_configs') as any;
  }

  // on_demand_options - computed: true, optional: false, required: false
  public get onDemandOptions() {
    return this.interpolationForAttribute('on_demand_options') as any;
  }

  // replace_unhealthy_instances - computed: true, optional: false, required: false
  public get replaceUnhealthyInstances() {
    return this.getBooleanAttribute('replace_unhealthy_instances');
  }

  // spot_options - computed: true, optional: false, required: false
  public get spotOptions() {
    return this.interpolationForAttribute('spot_options') as any;
  }

  // tag_specifications - computed: true, optional: false, required: false
  public get tagSpecifications() {
    return this.interpolationForAttribute('tag_specifications') as any;
  }

  // target_capacity_specification - computed: true, optional: false, required: false
  public get targetCapacitySpecification() {
    return this.interpolationForAttribute('target_capacity_specification') as any;
  }

  // terminate_instances_with_expiration - computed: true, optional: false, required: false
  public get terminateInstancesWithExpiration() {
    return this.getBooleanAttribute('terminate_instances_with_expiration');
  }

  // type - computed: true, optional: false, required: false
  public get type() {
    return this.getStringAttribute('type');
  }

  // valid_from - computed: true, optional: false, required: false
  public get validFrom() {
    return this.getStringAttribute('valid_from');
  }

  // valid_until - computed: true, optional: false, required: false
  public get validUntil() {
    return this.getStringAttribute('valid_until');
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
