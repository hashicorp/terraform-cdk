"use strict";
// https://www.terraform.io/docs/providers/awscc/d/ec2_ec2_fleet.html
// generated from terraform resource schema
Object.defineProperty(exports, "__esModule", { value: true });
exports.DataAwsccEc2Ec2Fleet = exports.dataAwsccEc2Ec2FleetTargetCapacitySpecificationToTerraform = exports.DataAwsccEc2Ec2FleetTargetCapacitySpecification = exports.dataAwsccEc2Ec2FleetTagSpecificationsToTerraform = exports.DataAwsccEc2Ec2FleetTagSpecifications = exports.dataAwsccEc2Ec2FleetTagSpecificationsTagsToTerraform = exports.DataAwsccEc2Ec2FleetTagSpecificationsTags = exports.dataAwsccEc2Ec2FleetSpotOptionsToTerraform = exports.DataAwsccEc2Ec2FleetSpotOptions = exports.dataAwsccEc2Ec2FleetOnDemandOptionsToTerraform = exports.DataAwsccEc2Ec2FleetOnDemandOptions = exports.dataAwsccEc2Ec2FleetOnDemandOptionsCapacityReservationOptionsToTerraform = exports.DataAwsccEc2Ec2FleetOnDemandOptionsCapacityReservationOptions = exports.dataAwsccEc2Ec2FleetLaunchTemplateConfigsToTerraform = exports.DataAwsccEc2Ec2FleetLaunchTemplateConfigs = exports.dataAwsccEc2Ec2FleetLaunchTemplateConfigsOverridesToTerraform = exports.DataAwsccEc2Ec2FleetLaunchTemplateConfigsOverrides = exports.dataAwsccEc2Ec2FleetLaunchTemplateConfigsOverridesPlacementToTerraform = exports.DataAwsccEc2Ec2FleetLaunchTemplateConfigsOverridesPlacement = exports.dataAwsccEc2Ec2FleetLaunchTemplateConfigsLaunchTemplateSpecificationToTerraform = exports.DataAwsccEc2Ec2FleetLaunchTemplateConfigsLaunchTemplateSpecification = void 0;
const cdktf = require("cdktf");
class DataAwsccEc2Ec2FleetLaunchTemplateConfigsLaunchTemplateSpecification extends cdktf.ComplexComputedList {
    // launch_template_id - computed: true, optional: false, required: false
    get launchTemplateId() {
        return this.getStringAttribute('launch_template_id');
    }
    // launch_template_name - computed: true, optional: false, required: false
    get launchTemplateName() {
        return this.getStringAttribute('launch_template_name');
    }
    // version - computed: true, optional: false, required: false
    get version() {
        return this.getStringAttribute('version');
    }
}
exports.DataAwsccEc2Ec2FleetLaunchTemplateConfigsLaunchTemplateSpecification = DataAwsccEc2Ec2FleetLaunchTemplateConfigsLaunchTemplateSpecification;
function dataAwsccEc2Ec2FleetLaunchTemplateConfigsLaunchTemplateSpecificationToTerraform(struct) {
    if (!cdktf.canInspect(struct)) {
        return struct;
    }
    return {
        launch_template_id: cdktf.stringToTerraform(struct.launchTemplateId),
        launch_template_name: cdktf.stringToTerraform(struct.launchTemplateName),
        version: cdktf.stringToTerraform(struct.version),
    };
}
exports.dataAwsccEc2Ec2FleetLaunchTemplateConfigsLaunchTemplateSpecificationToTerraform = dataAwsccEc2Ec2FleetLaunchTemplateConfigsLaunchTemplateSpecificationToTerraform;
class DataAwsccEc2Ec2FleetLaunchTemplateConfigsOverridesPlacement extends cdktf.ComplexComputedList {
    // affinity - computed: true, optional: false, required: false
    get affinity() {
        return this.getStringAttribute('affinity');
    }
    // availability_zone - computed: true, optional: false, required: false
    get availabilityZone() {
        return this.getStringAttribute('availability_zone');
    }
    // group_name - computed: true, optional: false, required: false
    get groupName() {
        return this.getStringAttribute('group_name');
    }
    // host_id - computed: true, optional: false, required: false
    get hostId() {
        return this.getStringAttribute('host_id');
    }
    // host_resource_group_arn - computed: true, optional: false, required: false
    get hostResourceGroupArn() {
        return this.getStringAttribute('host_resource_group_arn');
    }
    // partition_number - computed: true, optional: false, required: false
    get partitionNumber() {
        return this.getNumberAttribute('partition_number');
    }
    // spread_domain - computed: true, optional: false, required: false
    get spreadDomain() {
        return this.getStringAttribute('spread_domain');
    }
    // tenancy - computed: true, optional: false, required: false
    get tenancy() {
        return this.getStringAttribute('tenancy');
    }
}
exports.DataAwsccEc2Ec2FleetLaunchTemplateConfigsOverridesPlacement = DataAwsccEc2Ec2FleetLaunchTemplateConfigsOverridesPlacement;
function dataAwsccEc2Ec2FleetLaunchTemplateConfigsOverridesPlacementToTerraform(struct) {
    if (!cdktf.canInspect(struct)) {
        return struct;
    }
    return {
        affinity: cdktf.stringToTerraform(struct.affinity),
        availability_zone: cdktf.stringToTerraform(struct.availabilityZone),
        group_name: cdktf.stringToTerraform(struct.groupName),
        host_id: cdktf.stringToTerraform(struct.hostId),
        host_resource_group_arn: cdktf.stringToTerraform(struct.hostResourceGroupArn),
        partition_number: cdktf.numberToTerraform(struct.partitionNumber),
        spread_domain: cdktf.stringToTerraform(struct.spreadDomain),
        tenancy: cdktf.stringToTerraform(struct.tenancy),
    };
}
exports.dataAwsccEc2Ec2FleetLaunchTemplateConfigsOverridesPlacementToTerraform = dataAwsccEc2Ec2FleetLaunchTemplateConfigsOverridesPlacementToTerraform;
class DataAwsccEc2Ec2FleetLaunchTemplateConfigsOverrides extends cdktf.ComplexComputedList {
    // availability_zone - computed: true, optional: false, required: false
    get availabilityZone() {
        return this.getStringAttribute('availability_zone');
    }
    // instance_type - computed: true, optional: false, required: false
    get instanceType() {
        return this.getStringAttribute('instance_type');
    }
    // max_price - computed: true, optional: false, required: false
    get maxPrice() {
        return this.getStringAttribute('max_price');
    }
    // placement - computed: true, optional: false, required: false
    get placement() {
        return this.interpolationForAttribute('placement');
    }
    // priority - computed: true, optional: false, required: false
    get priority() {
        return this.getNumberAttribute('priority');
    }
    // subnet_id - computed: true, optional: false, required: false
    get subnetId() {
        return this.getStringAttribute('subnet_id');
    }
    // weighted_capacity - computed: true, optional: false, required: false
    get weightedCapacity() {
        return this.getNumberAttribute('weighted_capacity');
    }
}
exports.DataAwsccEc2Ec2FleetLaunchTemplateConfigsOverrides = DataAwsccEc2Ec2FleetLaunchTemplateConfigsOverrides;
function dataAwsccEc2Ec2FleetLaunchTemplateConfigsOverridesToTerraform(struct) {
    if (!cdktf.canInspect(struct)) {
        return struct;
    }
    return {
        availability_zone: cdktf.stringToTerraform(struct.availabilityZone),
        instance_type: cdktf.stringToTerraform(struct.instanceType),
        max_price: cdktf.stringToTerraform(struct.maxPrice),
        placement: dataAwsccEc2Ec2FleetLaunchTemplateConfigsOverridesPlacementToTerraform(struct.placement),
        priority: cdktf.numberToTerraform(struct.priority),
        subnet_id: cdktf.stringToTerraform(struct.subnetId),
        weighted_capacity: cdktf.numberToTerraform(struct.weightedCapacity),
    };
}
exports.dataAwsccEc2Ec2FleetLaunchTemplateConfigsOverridesToTerraform = dataAwsccEc2Ec2FleetLaunchTemplateConfigsOverridesToTerraform;
class DataAwsccEc2Ec2FleetLaunchTemplateConfigs extends cdktf.ComplexComputedList {
    // launch_template_specification - computed: true, optional: false, required: false
    get launchTemplateSpecification() {
        return this.interpolationForAttribute('launch_template_specification');
    }
    // overrides - computed: true, optional: false, required: false
    get overrides() {
        return this.interpolationForAttribute('overrides');
    }
}
exports.DataAwsccEc2Ec2FleetLaunchTemplateConfigs = DataAwsccEc2Ec2FleetLaunchTemplateConfigs;
function dataAwsccEc2Ec2FleetLaunchTemplateConfigsToTerraform(struct) {
    if (!cdktf.canInspect(struct)) {
        return struct;
    }
    return {
        launch_template_specification: dataAwsccEc2Ec2FleetLaunchTemplateConfigsLaunchTemplateSpecificationToTerraform(struct.launchTemplateSpecification),
        overrides: cdktf.listMapper(dataAwsccEc2Ec2FleetLaunchTemplateConfigsOverridesToTerraform)(struct.overrides),
    };
}
exports.dataAwsccEc2Ec2FleetLaunchTemplateConfigsToTerraform = dataAwsccEc2Ec2FleetLaunchTemplateConfigsToTerraform;
class DataAwsccEc2Ec2FleetOnDemandOptionsCapacityReservationOptions extends cdktf.ComplexComputedList {
    // usage_strategy - computed: true, optional: false, required: false
    get usageStrategy() {
        return this.getStringAttribute('usage_strategy');
    }
}
exports.DataAwsccEc2Ec2FleetOnDemandOptionsCapacityReservationOptions = DataAwsccEc2Ec2FleetOnDemandOptionsCapacityReservationOptions;
function dataAwsccEc2Ec2FleetOnDemandOptionsCapacityReservationOptionsToTerraform(struct) {
    if (!cdktf.canInspect(struct)) {
        return struct;
    }
    return {
        usage_strategy: cdktf.stringToTerraform(struct.usageStrategy),
    };
}
exports.dataAwsccEc2Ec2FleetOnDemandOptionsCapacityReservationOptionsToTerraform = dataAwsccEc2Ec2FleetOnDemandOptionsCapacityReservationOptionsToTerraform;
class DataAwsccEc2Ec2FleetOnDemandOptions extends cdktf.ComplexComputedList {
    // allocation_strategy - computed: true, optional: false, required: false
    get allocationStrategy() {
        return this.getStringAttribute('allocation_strategy');
    }
    // capacity_reservation_options - computed: true, optional: false, required: false
    get capacityReservationOptions() {
        return this.interpolationForAttribute('capacity_reservation_options');
    }
    // max_total_price - computed: true, optional: false, required: false
    get maxTotalPrice() {
        return this.getStringAttribute('max_total_price');
    }
    // min_target_capacity - computed: true, optional: false, required: false
    get minTargetCapacity() {
        return this.getNumberAttribute('min_target_capacity');
    }
    // single_availability_zone - computed: true, optional: false, required: false
    get singleAvailabilityZone() {
        return this.getBooleanAttribute('single_availability_zone');
    }
    // single_instance_type - computed: true, optional: false, required: false
    get singleInstanceType() {
        return this.getBooleanAttribute('single_instance_type');
    }
}
exports.DataAwsccEc2Ec2FleetOnDemandOptions = DataAwsccEc2Ec2FleetOnDemandOptions;
function dataAwsccEc2Ec2FleetOnDemandOptionsToTerraform(struct) {
    if (!cdktf.canInspect(struct)) {
        return struct;
    }
    return {
        allocation_strategy: cdktf.stringToTerraform(struct.allocationStrategy),
        capacity_reservation_options: dataAwsccEc2Ec2FleetOnDemandOptionsCapacityReservationOptionsToTerraform(struct.capacityReservationOptions),
        max_total_price: cdktf.stringToTerraform(struct.maxTotalPrice),
        min_target_capacity: cdktf.numberToTerraform(struct.minTargetCapacity),
        single_availability_zone: cdktf.booleanToTerraform(struct.singleAvailabilityZone),
        single_instance_type: cdktf.booleanToTerraform(struct.singleInstanceType),
    };
}
exports.dataAwsccEc2Ec2FleetOnDemandOptionsToTerraform = dataAwsccEc2Ec2FleetOnDemandOptionsToTerraform;
class DataAwsccEc2Ec2FleetSpotOptions extends cdktf.ComplexComputedList {
    // allocation_strategy - computed: true, optional: false, required: false
    get allocationStrategy() {
        return this.getStringAttribute('allocation_strategy');
    }
    // instance_interruption_behavior - computed: true, optional: false, required: false
    get instanceInterruptionBehavior() {
        return this.getStringAttribute('instance_interruption_behavior');
    }
    // instance_pools_to_use_count - computed: true, optional: false, required: false
    get instancePoolsToUseCount() {
        return this.getNumberAttribute('instance_pools_to_use_count');
    }
    // max_total_price - computed: true, optional: false, required: false
    get maxTotalPrice() {
        return this.getStringAttribute('max_total_price');
    }
    // min_target_capacity - computed: true, optional: false, required: false
    get minTargetCapacity() {
        return this.getNumberAttribute('min_target_capacity');
    }
    // single_availability_zone - computed: true, optional: false, required: false
    get singleAvailabilityZone() {
        return this.getBooleanAttribute('single_availability_zone');
    }
    // single_instance_type - computed: true, optional: false, required: false
    get singleInstanceType() {
        return this.getBooleanAttribute('single_instance_type');
    }
}
exports.DataAwsccEc2Ec2FleetSpotOptions = DataAwsccEc2Ec2FleetSpotOptions;
function dataAwsccEc2Ec2FleetSpotOptionsToTerraform(struct) {
    if (!cdktf.canInspect(struct)) {
        return struct;
    }
    return {
        allocation_strategy: cdktf.stringToTerraform(struct.allocationStrategy),
        instance_interruption_behavior: cdktf.stringToTerraform(struct.instanceInterruptionBehavior),
        instance_pools_to_use_count: cdktf.numberToTerraform(struct.instancePoolsToUseCount),
        max_total_price: cdktf.stringToTerraform(struct.maxTotalPrice),
        min_target_capacity: cdktf.numberToTerraform(struct.minTargetCapacity),
        single_availability_zone: cdktf.booleanToTerraform(struct.singleAvailabilityZone),
        single_instance_type: cdktf.booleanToTerraform(struct.singleInstanceType),
    };
}
exports.dataAwsccEc2Ec2FleetSpotOptionsToTerraform = dataAwsccEc2Ec2FleetSpotOptionsToTerraform;
class DataAwsccEc2Ec2FleetTagSpecificationsTags extends cdktf.ComplexComputedList {
    // key - computed: true, optional: false, required: false
    get key() {
        return this.getStringAttribute('key');
    }
    // value - computed: true, optional: false, required: false
    get value() {
        return this.getStringAttribute('value');
    }
}
exports.DataAwsccEc2Ec2FleetTagSpecificationsTags = DataAwsccEc2Ec2FleetTagSpecificationsTags;
function dataAwsccEc2Ec2FleetTagSpecificationsTagsToTerraform(struct) {
    if (!cdktf.canInspect(struct)) {
        return struct;
    }
    return {
        key: cdktf.stringToTerraform(struct.key),
        value: cdktf.stringToTerraform(struct.value),
    };
}
exports.dataAwsccEc2Ec2FleetTagSpecificationsTagsToTerraform = dataAwsccEc2Ec2FleetTagSpecificationsTagsToTerraform;
class DataAwsccEc2Ec2FleetTagSpecifications extends cdktf.ComplexComputedList {
    // resource_type - computed: true, optional: false, required: false
    get resourceType() {
        return this.getStringAttribute('resource_type');
    }
    // tags - computed: true, optional: false, required: false
    get tags() {
        return this.interpolationForAttribute('tags');
    }
}
exports.DataAwsccEc2Ec2FleetTagSpecifications = DataAwsccEc2Ec2FleetTagSpecifications;
function dataAwsccEc2Ec2FleetTagSpecificationsToTerraform(struct) {
    if (!cdktf.canInspect(struct)) {
        return struct;
    }
    return {
        resource_type: cdktf.stringToTerraform(struct.resourceType),
        tags: cdktf.listMapper(dataAwsccEc2Ec2FleetTagSpecificationsTagsToTerraform)(struct.tags),
    };
}
exports.dataAwsccEc2Ec2FleetTagSpecificationsToTerraform = dataAwsccEc2Ec2FleetTagSpecificationsToTerraform;
class DataAwsccEc2Ec2FleetTargetCapacitySpecification extends cdktf.ComplexComputedList {
    // default_target_capacity_type - computed: true, optional: false, required: false
    get defaultTargetCapacityType() {
        return this.getStringAttribute('default_target_capacity_type');
    }
    // on_demand_target_capacity - computed: true, optional: false, required: false
    get onDemandTargetCapacity() {
        return this.getNumberAttribute('on_demand_target_capacity');
    }
    // spot_target_capacity - computed: true, optional: false, required: false
    get spotTargetCapacity() {
        return this.getNumberAttribute('spot_target_capacity');
    }
    // total_target_capacity - computed: true, optional: false, required: false
    get totalTargetCapacity() {
        return this.getNumberAttribute('total_target_capacity');
    }
}
exports.DataAwsccEc2Ec2FleetTargetCapacitySpecification = DataAwsccEc2Ec2FleetTargetCapacitySpecification;
function dataAwsccEc2Ec2FleetTargetCapacitySpecificationToTerraform(struct) {
    if (!cdktf.canInspect(struct)) {
        return struct;
    }
    return {
        default_target_capacity_type: cdktf.stringToTerraform(struct.defaultTargetCapacityType),
        on_demand_target_capacity: cdktf.numberToTerraform(struct.onDemandTargetCapacity),
        spot_target_capacity: cdktf.numberToTerraform(struct.spotTargetCapacity),
        total_target_capacity: cdktf.numberToTerraform(struct.totalTargetCapacity),
    };
}
exports.dataAwsccEc2Ec2FleetTargetCapacitySpecificationToTerraform = dataAwsccEc2Ec2FleetTargetCapacitySpecificationToTerraform;
/**
* Represents a {@link https://www.terraform.io/docs/providers/awscc/d/ec2_ec2_fleet.html awscc_ec2_ec2_fleet}
*/
class DataAwsccEc2Ec2Fleet extends cdktf.TerraformDataSource {
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
    constructor(scope, id, config) {
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
    get context() {
        return this.getStringAttribute('context');
    }
    // excess_capacity_termination_policy - computed: true, optional: false, required: false
    get excessCapacityTerminationPolicy() {
        return this.getStringAttribute('excess_capacity_termination_policy');
    }
    // fleet_id - computed: true, optional: false, required: false
    get fleetId() {
        return this.getStringAttribute('fleet_id');
    }
    get id() {
        return this.getStringAttribute('id');
    }
    set id(value) {
        this._id = value;
    }
    // Temporarily expose input value. Use with caution.
    get idInput() {
        return this._id;
    }
    // launch_template_configs - computed: true, optional: false, required: false
    get launchTemplateConfigs() {
        return this.interpolationForAttribute('launch_template_configs');
    }
    // on_demand_options - computed: true, optional: false, required: false
    get onDemandOptions() {
        return this.interpolationForAttribute('on_demand_options');
    }
    // replace_unhealthy_instances - computed: true, optional: false, required: false
    get replaceUnhealthyInstances() {
        return this.getBooleanAttribute('replace_unhealthy_instances');
    }
    // spot_options - computed: true, optional: false, required: false
    get spotOptions() {
        return this.interpolationForAttribute('spot_options');
    }
    // tag_specifications - computed: true, optional: false, required: false
    get tagSpecifications() {
        return this.interpolationForAttribute('tag_specifications');
    }
    // target_capacity_specification - computed: true, optional: false, required: false
    get targetCapacitySpecification() {
        return this.interpolationForAttribute('target_capacity_specification');
    }
    // terminate_instances_with_expiration - computed: true, optional: false, required: false
    get terminateInstancesWithExpiration() {
        return this.getBooleanAttribute('terminate_instances_with_expiration');
    }
    // type - computed: true, optional: false, required: false
    get type() {
        return this.getStringAttribute('type');
    }
    // valid_from - computed: true, optional: false, required: false
    get validFrom() {
        return this.getStringAttribute('valid_from');
    }
    // valid_until - computed: true, optional: false, required: false
    get validUntil() {
        return this.getStringAttribute('valid_until');
    }
    // =========
    // SYNTHESIS
    // =========
    synthesizeAttributes() {
        return {
            id: cdktf.stringToTerraform(this._id),
        };
    }
}
exports.DataAwsccEc2Ec2Fleet = DataAwsccEc2Ec2Fleet;
// =================
// STATIC PROPERTIES
// =================
DataAwsccEc2Ec2Fleet.tfResourceType = "awscc_ec2_ec2_fleet";
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZGF0YS1hd3NjYy1lYzItZWMyLWZsZWV0LmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiZGF0YS1hd3NjYy1lYzItZWMyLWZsZWV0LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7QUFBQSxxRUFBcUU7QUFDckUsMkNBQTJDOzs7QUFHM0MsK0JBQStCO0FBWS9CLE1BQWEsb0VBQXFFLFNBQVEsS0FBSyxDQUFDLG1CQUFtQjtJQUVqSCx3RUFBd0U7SUFDeEUsSUFBVyxnQkFBZ0I7UUFDekIsT0FBTyxJQUFJLENBQUMsa0JBQWtCLENBQUMsb0JBQW9CLENBQUMsQ0FBQztJQUN2RCxDQUFDO0lBRUQsMEVBQTBFO0lBQzFFLElBQVcsa0JBQWtCO1FBQzNCLE9BQU8sSUFBSSxDQUFDLGtCQUFrQixDQUFDLHNCQUFzQixDQUFDLENBQUM7SUFDekQsQ0FBQztJQUVELDZEQUE2RDtJQUM3RCxJQUFXLE9BQU87UUFDaEIsT0FBTyxJQUFJLENBQUMsa0JBQWtCLENBQUMsU0FBUyxDQUFDLENBQUM7SUFDNUMsQ0FBQztDQUNGO0FBaEJELG9KQWdCQztBQUVELFNBQWdCLCtFQUErRSxDQUFDLE1BQTZFO0lBQzNLLElBQUksQ0FBQyxLQUFLLENBQUMsVUFBVSxDQUFDLE1BQU0sQ0FBQyxFQUFFO1FBQUUsT0FBTyxNQUFNLENBQUM7S0FBRTtJQUNqRCxPQUFPO1FBQ0wsa0JBQWtCLEVBQUUsS0FBSyxDQUFDLGlCQUFpQixDQUFDLE1BQU8sQ0FBQyxnQkFBZ0IsQ0FBQztRQUNyRSxvQkFBb0IsRUFBRSxLQUFLLENBQUMsaUJBQWlCLENBQUMsTUFBTyxDQUFDLGtCQUFrQixDQUFDO1FBQ3pFLE9BQU8sRUFBRSxLQUFLLENBQUMsaUJBQWlCLENBQUMsTUFBTyxDQUFDLE9BQU8sQ0FBQztLQUNsRCxDQUFBO0FBQ0gsQ0FBQztBQVBELDBLQU9DO0FBRUQsTUFBYSwyREFBNEQsU0FBUSxLQUFLLENBQUMsbUJBQW1CO0lBRXhHLDhEQUE4RDtJQUM5RCxJQUFXLFFBQVE7UUFD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QUFXLDJCQUEyQjtRQUNwQyxPQUFPLElBQUksQ0FBQyx5QkFBeUIsQ0FBQywrQkFBK0IsQ0FBUSxDQUFDO0lBQ2hGLENBQUM7SUFFRCx5RkFBeUY7SUFDekYsSUFBVyxnQ0FBZ0M7UUFDekMsT0FBTyxJQUFJLENBQUMsbUJBQW1CLENBQUMscUNBQXFDLENBQUMsQ0FBQztJQUN6RSxDQUFDO0lBRUQsMERBQTBEO0lBQzFELElBQVcsSUFBSTtRQUNiLE9BQU8sSUFBSSxDQUFDLGtCQUFrQixDQUFDLE1BQU0sQ0FBQyxDQUFDO0lBQ3pDLENBQUM7SUFFRCxnRUFBZ0U7SUFDaEUsSUFBVyxTQUFTO1FBQ2xCLE9BQU8sSUFBSSxDQUFDLGtCQUFrQixDQUFDLFlBQVksQ0FBQyxDQUFDO0lBQy9DLENBQUM7SUFFRCxpRUFBaUU7SUFDakUsSUFBVyxVQUFVO1FBQ25CLE9BQU8sSUFBSSxDQUFDLGtCQUFrQixDQUFDLGFBQWEsQ0FBQyxDQUFDO0lBQ2hELENBQUM7SUFFRCxZQUFZO0lBQ1osWUFBWTtJQUNaLFlBQVk7SUFFRixvQkFBb0I7UUFDNUIsT0FBTztZQUNMLEVBQUUsRUFBRSxLQUFLLENBQUMsaUJBQWlCLENBQUMsSUFBSSxDQUFDLEdBQUcsQ0FBQztTQUN0QyxDQUFDO0lBQ0osQ0FBQzs7QUExSEgsb0RBMkhDO0FBekhDLG9CQUFvQjtBQUNwQixvQkFBb0I7QUFDcEIsb0JBQW9CO0FBQ0csbUNBQWMsR0FBVyxxQkFBcUIsQ0FBQyIsInNvdXJjZXNDb250ZW50IjpbIi8vIGh0dHBzOi8vd3d3LnRlcnJhZm9ybS5pby9kb2NzL3Byb3ZpZGVycy9hd3NjYy9kL2VjMl9lYzJfZmxlZXQuaHRtbFxuLy8gZ2VuZXJhdGVkIGZyb20gdGVycmFmb3JtIHJlc291cmNlIHNjaGVtYVxuXG5pbXBvcnQgeyBDb25zdHJ1Y3QgfSBmcm9tICdjb25zdHJ1Y3RzJztcbmltcG9ydCAqIGFzIGNka3RmIGZyb20gJ2Nka3RmJztcblxuLy8gQ29uZmlndXJhdGlvblxuXG5leHBvcnQgaW50ZXJmYWNlIERhdGFBd3NjY0VjMkVjMkZsZWV0Q29uZmlnIGV4dGVuZHMgY2RrdGYuVGVycmFmb3JtTWV0YUFyZ3VtZW50cyB7XG4gIC8qKlxuICAqIFVuaXF1ZWx5IGlkZW50aWZpZXMgdGhlIHJlc291cmNlLlxuICAqIFxuICAqIERvY3MgYXQgVGVycmFmb3JtIFJlZ2lzdHJ5OiB7QGxpbmsgaHR0cHM6Ly93d3cudGVycmFmb3JtLmlvL2RvY3MvcHJvdmlkZXJzL2F3c2NjL2QvZWMyX2VjMl9mbGVldC5odG1sI2lkIERhdGFBd3NjY0VjMkVjMkZsZWV0I2lkfVxuICAqL1xuICByZWFkb25seSBpZDogc3RyaW5nO1xufVxuZXhwb3J0IGNsYXNzIERhdGFBd3NjY0VjMkVjMkZsZWV0TGF1bmNoVGVtcGxhdGVDb25maWdzTGF1bmNoVGVtcGxhdGVTcGVjaWZpY2F0aW9uIGV4dGVuZHMgY2RrdGYuQ29tcGxleENvbXB1dGVkTGlzdCB7XG5cbiAgLy8gbGF1bmNoX3RlbXBsYXRlX2lkIC0gY29tcHV0ZWQ6IHRydWUsIG9wdGlvbmFsOiBmYWxzZSwgcmVxdWlyZWQ6IGZhbHNlXG4gIHB1YmxpYyBnZXQgbGF1bmNoVGVtcGxhdGVJZCgpIHtcbiAgICByZXR1cm4gdGhpcy5nZXRTdHJpbmdBdHRyaWJ1dGUoJ2xhdW5jaF90ZW1wbGF0ZV9pZCcpO1xuICB9XG5cbiAgLy8gbGF1bmNoX3RlbXBsYXRlX25hbWUgLSBjb21wdXRlZDogdHJ1ZSwgb3B0aW9uYWw6IGZhbHNlLCByZXF1aXJlZDogZmFsc2VcbiAgcHVibGljIGdldCBsYXVuY2hUZW1wbGF0ZU5hbWUoKSB7XG4gICAgcmV0dXJuIHRoaXMuZ2V0U3RyaW5nQXR0cmlidXRlKCdsYXVuY2hfdGVtcGxhdGVfbmFtZScpO1xuICB9XG5cbiAgLy8gdmVyc2lvbiAtIGNvbXB1dGVkOiB0cnVlLCBvcHRpb25hbDogZmFsc2UsIHJlcXVpcmVkOiBmYWxzZVxuICBwdWJsaWMgZ2V0IHZlcnNpb24oKSB7XG4gICAgcmV0dXJuIHRoaXMuZ2V0U3RyaW5nQXR0cmlidXRlKCd2ZXJzaW9uJyk7XG4gIH1cbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGRhdGFBd3NjY0VjMkVjMkZsZWV0TGF1bmNoVGVtcGxhdGVDb25maWdzTGF1bmNoVGVtcGxhdGVTcGVjaWZpY2F0aW9uVG9UZXJyYWZvcm0oc3RydWN0PzogRGF0YUF3c2NjRWMyRWMyRmxlZXRMYXVuY2hUZW1wbGF0ZUNvbmZpZ3NMYXVuY2hUZW1wbGF0ZVNwZWNpZmljYXRpb24pOiBhbnkge1xuICBpZiAoIWNka3RmLmNhbkluc3BlY3Qoc3RydWN0KSkgeyByZXR1cm4gc3RydWN0OyB9XG4gIHJldHVybiB7XG4gICAgbGF1bmNoX3RlbXBsYXRlX2lkOiBjZGt0Zi5zdHJpbmdUb1RlcnJhZm9ybShzdHJ1Y3QhLmxhdW5jaFRlbXBsYXRlSWQpLFxuICAgIGxhdW5jaF90ZW1wbGF0ZV9uYW1lOiBjZGt0Zi5zdHJpbmdUb1RlcnJhZm9ybShzdHJ1Y3QhLmxhdW5jaFRlbXBsYXRlTmFtZSksXG4gICAgdmVyc2lvbjogY2RrdGYuc3RyaW5nVG9UZXJyYWZvcm0oc3RydWN0IS52ZXJzaW9uKSxcbiAgfVxufVxuXG5leHBvcnQgY2xhc3MgRGF0YUF3c2NjRWMyRWMyRmxlZXRMYXVuY2hUZW1wbGF0ZUNvbmZpZ3NPdmVycmlkZXNQbGFjZW1lbnQgZXh0ZW5kcyBjZGt0Zi5Db21wbGV4Q29tcHV0ZWRMaXN0IHtcblxuICAvLyBhZmZpbml0eSAtIGNvbXB1dGVkOiB0cnVlLCBvcHRpb25hbDogZmFsc2UsIHJlcXVpcmVkOiBmYWxzZVxuICBwdWJsaWMgZ2V0IGFmZmluaXR5KCkge1xuICAgIHJldHVybiB0aGlzLmdldFN0cmluZ0F0dHJpYnV0ZSgnYWZmaW5pdHknKTtcbiAgfVxuXG4gIC8vIGF2YWlsYWJpbGl0eV96b25lIC0gY29tcHV0ZWQ6IHRydWUsIG9wdGlvbmFsOiBmYWxzZSwgcmVxdWlyZWQ6IGZhbHNlXG4gIHB1YmxpYyBnZXQgYXZhaWxhYmlsaXR5Wm9uZSgpIHtcbiAgICByZXR1cm4gdGhpcy5nZXRTdHJpbmdBdHRyaWJ1dGUoJ2F2YWlsYWJpbGl0eV96b25lJyk7XG4gIH1cblxuICAvLyBncm91cF9uYW1lIC0gY29tcHV0ZWQ6IHRydWUsIG9wdGlvbmFsOiBmYWxzZSwgcmVxdWlyZWQ6IGZhbHNlXG4gIHB1YmxpYyBnZXQgZ3JvdXBOYW1lKCkge1xuICAgIHJldHVybiB0aGlzLmdldFN0cmluZ0F0dHJpYnV0ZSgnZ3JvdXBfbmFtZScpO1xuICB9XG5cbiAgLy8gaG9zdF9pZCAtIGNvbXB1dGVkOiB0cnVlLCBvcHRpb25hbDogZmFsc2UsIHJlcXVpcmVkOiBmYWxzZVxuICBwdWJsaWMgZ2V0IGhvc3RJZCgpIHtcbiAgICByZXR1cm4gdGhpcy5nZXRTdHJpbmdBdHRyaWJ1dGUoJ2hvc3RfaWQnKTtcbiAgfVxuXG4gIC8vIGhvc3RfcmVzb3VyY2VfZ3JvdXBfYXJuIC0gY29tcHV0ZWQ6IHRydWUsIG9wdGlvbmFsOiBmYWxzZSwgcmVxdWlyZWQ6IGZhbHNlXG4gIHB1YmxpYyBnZXQgaG9zdFJlc291cmNlR3JvdXBBcm4oKSB7XG4gICAgcmV0dXJuIHRoaXMuZ2V0U3RyaW5nQXR0cmlidXRlKCdob3N0X3Jlc291cmNlX2dyb3VwX2FybicpO1xuICB9XG5cbiAgLy8gcGFydGl0aW9uX251bWJlciAtIGNvbXB1dGVkOiB0cnVlLCBvcHRpb25hbDogZmFsc2UsIHJlcXVpcmVkOiBmYWxzZVxuICBwdWJsaWMgZ2V0IHBhcnRpdGlvbk51bWJlcigpIHtcbiAgICByZXR1cm4gdGhpcy5nZXROdW1iZXJBdHRyaWJ1dGUoJ3BhcnRpdGlvbl9udW1iZXInKTtcbiAgfVxuXG4gIC8vIHNwcmVhZF9kb21haW4gLSBjb21wdXRlZDogdHJ1ZSwgb3B0aW9uYWw6IGZhbHNlLCByZXF1aXJlZDogZmFsc2VcbiAgcHVibGljIGdldCBzcHJlYWREb21haW4oKSB7XG4gICAgcmV0dXJuIHRoaXMuZ2V0U3RyaW5nQXR0cmlidXRlKCdzcHJlYWRfZG9tYWluJyk7XG4gIH1cblxuICAvLyB0ZW5hbmN5IC0gY29tcHV0ZWQ6IHRydWUsIG9wdGlvbmFsOiBmYWxzZSwgcmVxdWlyZWQ6IGZhbHNlXG4gIHB1YmxpYyBnZXQgdGVuYW5jeSgpIHtcbiAgICByZXR1cm4gdGhpcy5nZXRTdHJpbmdBdHRyaWJ1dGUoJ3RlbmFuY3knKTtcbiAgfVxufVxuXG5leHBvcnQgZnVuY3Rpb24gZGF0YUF3c2NjRWMyRWMyRmxlZXRMYXVuY2hUZW1wbGF0ZUNvbmZpZ3NPdmVycmlkZXNQbGFjZW1lbnRUb1RlcnJhZm9ybShzdHJ1Y3Q/OiBEYXRhQXdzY2NFYzJFYzJGbGVldExhdW5jaFRlbXBsYXRlQ29uZmlnc092ZXJyaWRlc1BsYWNlbWVudCk6IGFueSB7XG4gIGlmICghY2RrdGYuY2FuSW5zcGVjdChzdHJ1Y3QpKSB7IHJldHVybiBzdHJ1Y3Q7IH1cbiAgcmV0dXJuIHtcbiAgICBhZmZpbml0eTogY2RrdGYuc3RyaW5nVG9UZXJyYWZvcm0oc3RydWN0IS5hZmZpbml0eSksXG4gICAgYXZhaWxhYmlsaXR5X3pvbmU6IGNka3RmLnN0cmluZ1RvVGVycmFmb3JtKHN0cnVjdCEuYXZhaWxhYmlsaXR5Wm9uZSksXG4gICAgZ3JvdXBfbmFtZTogY2RrdGYuc3RyaW5nVG9UZXJyYWZvcm0oc3RydWN0IS5ncm91cE5hbWUpLFxuICAgIGhvc3RfaWQ6IGNka3RmLnN0cmluZ1RvVGVycmFmb3JtKHN0cnVjdCEuaG9zdElkKSxcbiAgICBob3N0X3Jlc291cmNlX2dyb3VwX2FybjogY2RrdGYuc3RyaW5nVG9UZXJyYWZvcm0oc3RydWN0IS5ob3N0UmVzb3VyY2VHcm91cEFybiksXG4gICAgcGFydGl0aW9uX251bWJlcjogY2RrdGYubnVtYmVyVG9UZXJyYWZvcm0oc3RydWN0IS5wYXJ0aXRpb25OdW1iZXIpLFxuICAgIHNwcmVhZF9kb21haW46IGNka3RmLnN0cmluZ1RvVGVycmFmb3JtKHN0cnVjdCEuc3ByZWFkRG9tYWluKSxcbiAgICB0ZW5hbmN5OiBjZGt0Zi5zdHJpbmdUb1RlcnJhZm9ybShzdHJ1Y3QhLnRlbmFuY3kpLFxuICB9XG59XG5cbmV4cG9ydCBjbGFzcyBEYXRhQXdzY2NFYzJFYzJGbGVldExhdW5jaFRlbXBsYXRlQ29uZmlnc092ZXJyaWRlcyBleHRlbmRzIGNka3RmLkNvbXBsZXhDb21wdXRlZExpc3Qge1xuXG4gIC8vIGF2YWlsYWJpbGl0eV96b25lIC0gY29tcHV0ZWQ6IHRydWUsIG9wdGlvbmFsOiBmYWxzZSwgcmVxdWlyZWQ6IGZhbHNlXG4gIHB1YmxpYyBnZXQgYXZhaWxhYmlsaXR5Wm9uZSgpIHtcbiAgICByZXR1cm4gdGhpcy5nZXRTdHJpbmdBdHRyaWJ1dGUoJ2F2YWlsYWJpbGl0eV96b25lJyk7XG4gIH1cblxuICAvLyBpbnN0YW5jZV90eXBlIC0gY29tcHV0ZWQ6IHRydWUsIG9wdGlvbmFsOiBmYWxzZSwgcmVxdWlyZWQ6IGZhbHNlXG4gIHB1YmxpYyBnZXQgaW5zdGFuY2VUeXBlKCkge1xuICAgIHJldHVybiB0aGlzLmdldFN0cmluZ0F0dHJpYnV0ZSgnaW5zdGFuY2VfdHlwZScpO1xuICB9XG5cbiAgLy8gbWF4X3ByaWNlIC0gY29tcHV0ZWQ6IHRydWUsIG9wdGlvbmFsOiBmYWxzZSwgcmVxdWlyZWQ6IGZhbHNlXG4gIHB1YmxpYyBnZXQgbWF4UHJpY2UoKSB7XG4gICAgcmV0dXJuIHRoaXMuZ2V0U3RyaW5nQXR0cmlidXRlKCdtYXhfcHJpY2UnKTtcbiAgfVxuXG4gIC8vIHBsYWNlbWVudCAtIGNvbXB1dGVkOiB0cnVlLCBvcHRpb25hbDogZmFsc2UsIHJlcXVpcmVkOiBmYWxzZVxuICBwdWJsaWMgZ2V0IHBsYWNlbWVudCgpIHtcbiAgICByZXR1cm4gdGhpcy5pbnRlcnBvbGF0aW9uRm9yQXR0cmlidXRlKCdwbGFjZW1lbnQnKSBhcyBhbnk7XG4gIH1cblxuICAvLyBwcmlvcml0eSAtIGNvbXB1dGVkOiB0cnVlLCBvcHRpb25hbDogZmFsc2UsIHJlcXVpcmVkOiBmYWxzZVxuICBwdWJsaWMgZ2V0IHByaW9yaXR5KCkge1xuICAgIHJldHVybiB0aGlzLmdldE51bWJlckF0dHJpYnV0ZSgncHJpb3JpdHknKTtcbiAgfVxuXG4gIC8vIHN1Ym5ldF9pZCAtIGNvbXB1dGVkOiB0cnVlLCBvcHRpb25hbDogZmFsc2UsIHJlcXVpcmVkOiBmYWxzZVxuICBwdWJsaWMgZ2V0IHN1Ym5ldElkKCkge1xuICAgIHJldHVybiB0aGlzLmdldFN0cmluZ0F0dHJpYnV0ZSgnc3VibmV0X2lkJyk7XG4gIH1cblxuICAvLyB3ZWlnaHRlZF9jYXBhY2l0eSAtIGNvbXB1dGVkOiB0cnVlLCBvcHRpb25hbDogZmFsc2UsIHJlcXVpcmVkOiBmYWxzZVxuICBwdWJsaWMgZ2V0IHdlaWdodGVkQ2FwYWNpdHkoKSB7XG4gICAgcmV0dXJuIHRoaXMuZ2V0TnVtYmVyQXR0cmlidXRlKCd3ZWlnaHRlZF9jYXBhY2l0eScpO1xuICB9XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBkYXRhQXdzY2NFYzJFYzJGbGVldExhdW5jaFRlbXBsYXRlQ29uZmlnc092ZXJyaWRlc1RvVGVycmFmb3JtKHN0cnVjdD86IERhdGFBd3NjY0VjMkVjMkZsZWV0TGF1bmNoVGVtcGxhdGVDb25maWdzT3ZlcnJpZGVzKTogYW55IHtcbiAgaWYgKCFjZGt0Zi5jYW5JbnNwZWN0KHN0cnVjdCkpIHsgcmV0dXJuIHN0cnVjdDsgfVxuICByZXR1cm4ge1xuICAgIGF2YWlsYWJpbGl0eV96b25lOiBjZGt0Zi5zdHJpbmdUb1RlcnJhZm9ybShzdHJ1Y3QhLmF2YWlsYWJpbGl0eVpvbmUpLFxuICAgIGluc3RhbmNlX3R5cGU6IGNka3RmLnN0cmluZ1RvVGVycmFmb3JtKHN0cnVjdCEuaW5zdGFuY2VUeXBlKSxcbiAgICBtYXhfcHJpY2U6IGNka3RmLnN0cmluZ1RvVGVycmFmb3JtKHN0cnVjdCEubWF4UHJpY2UpLFxuICAgIHBsYWNlbWVudDogZGF0YUF3c2NjRWMyRWMyRmxlZXRMYXVuY2hUZW1wbGF0ZUNvbmZpZ3NPdmVycmlkZXNQbGFjZW1lbnRUb1RlcnJhZm9ybShzdHJ1Y3QhLnBsYWNlbWVudCksXG4gICAgcHJpb3JpdHk6IGNka3RmLm51bWJlclRvVGVycmFmb3JtKHN0cnVjdCEucHJpb3JpdHkpLFxuICAgIHN1Ym5ldF9pZDogY2RrdGYuc3RyaW5nVG9UZXJyYWZvcm0oc3RydWN0IS5zdWJuZXRJZCksXG4gICAgd2VpZ2h0ZWRfY2FwYWNpdHk6IGNka3RmLm51bWJlclRvVGVycmFmb3JtKHN0cnVjdCEud2VpZ2h0ZWRDYXBhY2l0eSksXG4gIH1cbn1cblxuZXhwb3J0IGNsYXNzIERhdGFBd3NjY0VjMkVjMkZsZWV0TGF1bmNoVGVtcGxhdGVDb25maWdzIGV4dGVuZHMgY2RrdGYuQ29tcGxleENvbXB1dGVkTGlzdCB7XG5cbiAgLy8gbGF1bmNoX3RlbXBsYXRlX3NwZWNpZmljYXRpb24gLSBjb21wdXRlZDogdHJ1ZSwgb3B0aW9uYWw6IGZhbHNlLCByZXF1aXJlZDogZmFsc2VcbiAgcHVibGljIGdldCBsYXVuY2hUZW1wbGF0ZVNwZWNpZmljYXRpb24oKSB7XG4gICAgcmV0dXJuIHRoaXMuaW50ZXJwb2xhdGlvbkZvckF0dHJpYnV0ZSgnbGF1bmNoX3RlbXBsYXRlX3NwZWNpZmljYXRpb24nKSBhcyBhbnk7XG4gIH1cblxuICAvLyBvdmVycmlkZXMgLSBjb21wdXRlZDogdHJ1ZSwgb3B0aW9uYWw6IGZhbHNlLCByZXF1aXJlZDogZmFsc2VcbiAgcHVibGljIGdldCBvdmVycmlkZXMoKSB7XG4gICAgcmV0dXJuIHRoaXMuaW50ZXJwb2xhdGlvbkZvckF0dHJpYnV0ZSgnb3ZlcnJpZGVzJykgYXMgYW55O1xuICB9XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBkYXRhQXdzY2NFYzJFYzJGbGVldExhdW5jaFRlbXBsYXRlQ29uZmlnc1RvVGVycmFmb3JtKHN0cnVjdD86IERhdGFBd3NjY0VjMkVjMkZsZWV0TGF1bmNoVGVtcGxhdGVDb25maWdzKTogYW55IHtcbiAgaWYgKCFjZGt0Zi5jYW5JbnNwZWN0KHN0cnVjdCkpIHsgcmV0dXJuIHN0cnVjdDsgfVxuICByZXR1cm4ge1xuICAgIGxhdW5jaF90ZW1wbGF0ZV9zcGVjaWZpY2F0aW9uOiBkYXRhQXdzY2NFYzJFYzJGbGVldExhdW5jaFRlbXBsYXRlQ29uZmlnc0xhdW5jaFRlbXBsYXRlU3BlY2lmaWNhdGlvblRvVGVycmFmb3JtKHN0cnVjdCEubGF1bmNoVGVtcGxhdGVTcGVjaWZpY2F0aW9uKSxcbiAgICBvdmVycmlkZXM6IGNka3RmLmxpc3RNYXBwZXIoZGF0YUF3c2NjRWMyRWMyRmxlZXRMYXVuY2hUZW1wbGF0ZUNvbmZpZ3NPdmVycmlkZXNUb1RlcnJhZm9ybSkoc3RydWN0IS5vdmVycmlkZXMpLFxuICB9XG59XG5cbmV4cG9ydCBjbGFzcyBEYXRhQXdzY2NFYzJFYzJGbGVldE9uRGVtYW5kT3B0aW9uc0NhcGFjaXR5UmVzZXJ2YXRpb25PcHRpb25zIGV4dGVuZHMgY2RrdGYuQ29tcGxleENvbXB1dGVkTGlzdCB7XG5cbiAgLy8gdXNhZ2Vfc3RyYXRlZ3kgLSBjb21wdXRlZDogdHJ1ZSwgb3B0aW9uYWw6IGZhbHNlLCByZXF1aXJlZDogZmFsc2VcbiAgcHVibGljIGdldCB1c2FnZVN0cmF0ZWd5KCkge1xuICAgIHJldHVybiB0aGlzLmdldFN0cmluZ0F0dHJpYnV0ZSgndXNhZ2Vfc3RyYXRlZ3knKTtcbiAgfVxufVxuXG5leHBvcnQgZnVuY3Rpb24gZGF0YUF3c2NjRWMyRWMyRmxlZXRPbkRlbWFuZE9wdGlvbnNDYXBhY2l0eVJlc2VydmF0aW9uT3B0aW9uc1RvVGVycmFmb3JtKHN0cnVjdD86IERhdGFBd3NjY0VjMkVjMkZsZWV0T25EZW1hbmRPcHRpb25zQ2FwYWNpdHlSZXNlcnZhdGlvbk9wdGlvbnMpOiBhbnkge1xuICBpZiAoIWNka3RmLmNhbkluc3BlY3Qoc3RydWN0KSkgeyByZXR1cm4gc3RydWN0OyB9XG4gIHJldHVybiB7XG4gICAgdXNhZ2Vfc3RyYXRlZ3k6IGNka3RmLnN0cmluZ1RvVGVycmFmb3JtKHN0cnVjdCEudXNhZ2VTdHJhdGVneSksXG4gIH1cbn1cblxuZXhwb3J0IGNsYXNzIERhdGFBd3NjY0VjMkVjMkZsZWV0T25EZW1hbmRPcHRpb25zIGV4dGVuZHMgY2RrdGYuQ29tcGxleENvbXB1dGVkTGlzdCB7XG5cbiAgLy8gYWxsb2NhdGlvbl9zdHJhdGVneSAtIGNvbXB1dGVkOiB0cnVlLCBvcHRpb25hbDogZmFsc2UsIHJlcXVpcmVkOiBmYWxzZVxuICBwdWJsaWMgZ2V0IGFsbG9jYXRpb25TdHJhdGVneSgpIHtcbiAgICByZXR1cm4gdGhpcy5nZXRTdHJpbmdBdHRyaWJ1dGUoJ2FsbG9jYXRpb25fc3RyYXRlZ3knKTtcbiAgfVxuXG4gIC8vIGNhcGFjaXR5X3Jlc2VydmF0aW9uX29wdGlvbnMgLSBjb21wdXRlZDogdHJ1ZSwgb3B0aW9uYWw6IGZhbHNlLCByZXF1aXJlZDogZmFsc2VcbiAgcHVibGljIGdldCBjYXBhY2l0eVJlc2VydmF0aW9uT3B0aW9ucygpIHtcbiAgICByZXR1cm4gdGhpcy5pbnRlcnBvbGF0aW9uRm9yQXR0cmlidXRlKCdjYXBhY2l0eV9yZXNlcnZhdGlvbl9vcHRpb25zJykgYXMgYW55O1xuICB9XG5cbiAgLy8gbWF4X3RvdGFsX3ByaWNlIC0gY29tcHV0ZWQ6IHRydWUsIG9wdGlvbmFsOiBmYWxzZSwgcmVxdWlyZWQ6IGZhbHNlXG4gIHB1YmxpYyBnZXQgbWF4VG90YWxQcmljZSgpIHtcbiAgICByZXR1cm4gdGhpcy5nZXRTdHJpbmdBdHRyaWJ1dGUoJ21heF90b3RhbF9wcmljZScpO1xuICB9XG5cbiAgLy8gbWluX3RhcmdldF9jYXBhY2l0eSAtIGNvbXB1dGVkOiB0cnVlLCBvcHRpb25hbDogZmFsc2UsIHJlcXVpcmVkOiBmYWxzZVxuICBwdWJsaWMgZ2V0IG1pblRhcmdldENhcGFjaXR5KCkge1xuICAgIHJldHVybiB0aGlzLmdldE51bWJlckF0dHJpYnV0ZSgnbWluX3RhcmdldF9jYXBhY2l0eScpO1xuICB9XG5cbiAgLy8gc2luZ2xlX2F2YWlsYWJpbGl0eV96b25lIC0gY29tcHV0ZWQ6IHRydWUsIG9wdGlvbmFsOiBmYWxzZSwgcmVxdWlyZWQ6IGZhbHNlXG4gIHB1YmxpYyBnZXQgc2luZ2xlQXZhaWxhYmlsaXR5Wm9uZSgpIHtcbiAgICByZXR1cm4gdGhpcy5nZXRCb29sZWFuQXR0cmlidXRlKCdzaW5nbGVfYXZhaWxhYmlsaXR5X3pvbmUnKTtcbiAgfVxuXG4gIC8vIHNpbmdsZV9pbnN0YW5jZV90eXBlIC0gY29tcHV0ZWQ6IHRydWUsIG9wdGlvbmFsOiBmYWxzZSwgcmVxdWlyZWQ6IGZhbHNlXG4gIHB1YmxpYyBnZXQgc2luZ2xlSW5zdGFuY2VUeXBlKCkge1xuICAgIHJldHVybiB0aGlzLmdldEJvb2xlYW5BdHRyaWJ1dGUoJ3NpbmdsZV9pbnN0YW5jZV90eXBlJyk7XG4gIH1cbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGRhdGFBd3NjY0VjMkVjMkZsZWV0T25EZW1hbmRPcHRpb25zVG9UZXJyYWZvcm0oc3RydWN0PzogRGF0YUF3c2NjRWMyRWMyRmxlZXRPbkRlbWFuZE9wdGlvbnMpOiBhbnkge1xuICBpZiAoIWNka3RmLmNhbkluc3BlY3Qoc3RydWN0KSkgeyByZXR1cm4gc3RydWN0OyB9XG4gIHJldHVybiB7XG4gICAgYWxsb2NhdGlvbl9zdHJhdGVneTogY2RrdGYuc3RyaW5nVG9UZXJyYWZvcm0oc3RydWN0IS5hbGxvY2F0aW9uU3RyYXRlZ3kpLFxuICAgIGNhcGFjaXR5X3Jlc2VydmF0aW9uX29wdGlvbnM6IGRhdGFBd3NjY0VjMkVjMkZsZWV0T25EZW1hbmRPcHRpb25zQ2FwYWNpdHlSZXNlcnZhdGlvbk9wdGlvbnNUb1RlcnJhZm9ybShzdHJ1Y3QhLmNhcGFjaXR5UmVzZXJ2YXRpb25PcHRpb25zKSxcbiAgICBtYXhfdG90YWxfcHJpY2U6IGNka3RmLnN0cmluZ1RvVGVycmFmb3JtKHN0cnVjdCEubWF4VG90YWxQcmljZSksXG4gICAgbWluX3RhcmdldF9jYXBhY2l0eTogY2RrdGYubnVtYmVyVG9UZXJyYWZvcm0oc3RydWN0IS5taW5UYXJnZXRDYXBhY2l0eSksXG4gICAgc2luZ2xlX2F2YWlsYWJpbGl0eV96b25lOiBjZGt0Zi5ib29sZWFuVG9UZXJyYWZvcm0oc3RydWN0IS5zaW5nbGVBdmFpbGFiaWxpdHlab25lKSxcbiAgICBzaW5nbGVfaW5zdGFuY2VfdHlwZTogY2RrdGYuYm9vbGVhblRvVGVycmFmb3JtKHN0cnVjdCEuc2luZ2xlSW5zdGFuY2VUeXBlKSxcbiAgfVxufVxuXG5leHBvcnQgY2xhc3MgRGF0YUF3c2NjRWMyRWMyRmxlZXRTcG90T3B0aW9ucyBleHRlbmRzIGNka3RmLkNvbXBsZXhDb21wdXRlZExpc3Qge1xuXG4gIC8vIGFsbG9jYXRpb25fc3RyYXRlZ3kgLSBjb21wdXRlZDogdHJ1ZSwgb3B0aW9uYWw6IGZhbHNlLCByZXF1aXJlZDogZmFsc2VcbiAgcHVibGljIGdldCBhbGxvY2F0aW9uU3RyYXRlZ3koKSB7XG4gICAgcmV0dXJuIHRoaXMuZ2V0U3RyaW5nQXR0cmlidXRlKCdhbGxvY2F0aW9uX3N0cmF0ZWd5Jyk7XG4gIH1cblxuICAvLyBpbnN0YW5jZV9pbnRlcnJ1cHRpb25fYmVoYXZpb3IgLSBjb21wdXRlZDogdHJ1ZSwgb3B0aW9uYWw6IGZhbHNlLCByZXF1aXJlZDogZmFsc2VcbiAgcHVibGljIGdldCBpbnN0YW5jZUludGVycnVwdGlvbkJlaGF2aW9yKCkge1xuICAgIHJldHVybiB0aGlzLmdldFN0cmluZ0F0dHJpYnV0ZSgnaW5zdGFuY2VfaW50ZXJydXB0aW9uX2JlaGF2aW9yJyk7XG4gIH1cblxuICAvLyBpbnN0YW5jZV9wb29sc190b191c2VfY291bnQgLSBjb21wdXRlZDogdHJ1ZSwgb3B0aW9uYWw6IGZhbHNlLCByZXF1aXJlZDogZmFsc2VcbiAgcHVibGljIGdldCBpbnN0YW5jZVBvb2xzVG9Vc2VDb3VudCgpIHtcbiAgICByZXR1cm4gdGhpcy5nZXROdW1iZXJBdHRyaWJ1dGUoJ2luc3RhbmNlX3Bvb2xzX3RvX3VzZV9jb3VudCcpO1xuICB9XG5cbiAgLy8gbWF4X3RvdGFsX3ByaWNlIC0gY29tcHV0ZWQ6IHRydWUsIG9wdGlvbmFsOiBmYWxzZSwgcmVxdWlyZWQ6IGZhbHNlXG4gIHB1YmxpYyBnZXQgbWF4VG90YWxQcmljZSgpIHtcbiAgICByZXR1cm4gdGhpcy5nZXRTdHJpbmdBdHRyaWJ1dGUoJ21heF90b3RhbF9wcmljZScpO1xuICB9XG5cbiAgLy8gbWluX3RhcmdldF9jYXBhY2l0eSAtIGNvbXB1dGVkOiB0cnVlLCBvcHRpb25hbDogZmFsc2UsIHJlcXVpcmVkOiBmYWxzZVxuICBwdWJsaWMgZ2V0IG1pblRhcmdldENhcGFjaXR5KCkge1xuICAgIHJldHVybiB0aGlzLmdldE51bWJlckF0dHJpYnV0ZSgnbWluX3RhcmdldF9jYXBhY2l0eScpO1xuICB9XG5cbiAgLy8gc2luZ2xlX2F2YWlsYWJpbGl0eV96b25lIC0gY29tcHV0ZWQ6IHRydWUsIG9wdGlvbmFsOiBmYWxzZSwgcmVxdWlyZWQ6IGZhbHNlXG4gIHB1YmxpYyBnZXQgc2luZ2xlQXZhaWxhYmlsaXR5Wm9uZSgpIHtcbiAgICByZXR1cm4gdGhpcy5nZXRCb29sZWFuQXR0cmlidXRlKCdzaW5nbGVfYXZhaWxhYmlsaXR5X3pvbmUnKTtcbiAgfVxuXG4gIC8vIHNpbmdsZV9pbnN0YW5jZV90eXBlIC0gY29tcHV0ZWQ6IHRydWUsIG9wdGlvbmFsOiBmYWxzZSwgcmVxdWlyZWQ6IGZhbHNlXG4gIHB1YmxpYyBnZXQgc2luZ2xlSW5zdGFuY2VUeXBlKCkge1xuICAgIHJldHVybiB0aGlzLmdldEJvb2xlYW5BdHRyaWJ1dGUoJ3NpbmdsZV9pbnN0YW5jZV90eXBlJyk7XG4gIH1cbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGRhdGFBd3NjY0VjMkVjMkZsZWV0U3BvdE9wdGlvbnNUb1RlcnJhZm9ybShzdHJ1Y3Q/OiBEYXRhQXdzY2NFYzJFYzJGbGVldFNwb3RPcHRpb25zKTogYW55IHtcbiAgaWYgKCFjZGt0Zi5jYW5JbnNwZWN0KHN0cnVjdCkpIHsgcmV0dXJuIHN0cnVjdDsgfVxuICByZXR1cm4ge1xuICAgIGFsbG9jYXRpb25fc3RyYXRlZ3k6IGNka3RmLnN0cmluZ1RvVGVycmFmb3JtKHN0cnVjdCEuYWxsb2NhdGlvblN0cmF0ZWd5KSxcbiAgICBpbnN0YW5jZV9pbnRlcnJ1cHRpb25fYmVoYXZpb3I6IGNka3RmLnN0cmluZ1RvVGVycmFmb3JtKHN0cnVjdCEuaW5zdGFuY2VJbnRlcnJ1cHRpb25CZWhhdmlvciksXG4gICAgaW5zdGFuY2VfcG9vbHNfdG9fdXNlX2NvdW50OiBjZGt0Zi5udW1iZXJUb1RlcnJhZm9ybShzdHJ1Y3QhLmluc3RhbmNlUG9vbHNUb1VzZUNvdW50KSxcbiAgICBtYXhfdG90YWxfcHJpY2U6IGNka3RmLnN0cmluZ1RvVGVycmFmb3JtKHN0cnVjdCEubWF4VG90YWxQcmljZSksXG4gICAgbWluX3RhcmdldF9jYXBhY2l0eTogY2RrdGYubnVtYmVyVG9UZXJyYWZvcm0oc3RydWN0IS5taW5UYXJnZXRDYXBhY2l0eSksXG4gICAgc2luZ2xlX2F2YWlsYWJpbGl0eV96b25lOiBjZGt0Zi5ib29sZWFuVG9UZXJyYWZvcm0oc3RydWN0IS5zaW5nbGVBdmFpbGFiaWxpdHlab25lKSxcbiAgICBzaW5nbGVfaW5zdGFuY2VfdHlwZTogY2RrdGYuYm9vbGVhblRvVGVycmFmb3JtKHN0cnVjdCEuc2luZ2xlSW5zdGFuY2VUeXBlKSxcbiAgfVxufVxuXG5leHBvcnQgY2xhc3MgRGF0YUF3c2NjRWMyRWMyRmxlZXRUYWdTcGVjaWZpY2F0aW9uc1RhZ3MgZXh0ZW5kcyBjZGt0Zi5Db21wbGV4Q29tcHV0ZWRMaXN0IHtcblxuICAvLyBrZXkgLSBjb21wdXRlZDogdHJ1ZSwgb3B0aW9uYWw6IGZhbHNlLCByZXF1aXJlZDogZmFsc2VcbiAgcHVibGljIGdldCBrZXkoKSB7XG4gICAgcmV0dXJuIHRoaXMuZ2V0U3RyaW5nQXR0cmlidXRlKCdrZXknKTtcbiAgfVxuXG4gIC8vIHZhbHVlIC0gY29tcHV0ZWQ6IHRydWUsIG9wdGlvbmFsOiBmYWxzZSwgcmVxdWlyZWQ6IGZhbHNlXG4gIHB1YmxpYyBnZXQgdmFsdWUoKSB7XG4gICAgcmV0dXJuIHRoaXMuZ2V0U3RyaW5nQXR0cmlidXRlKCd2YWx1ZScpO1xuICB9XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBkYXRhQXdzY2NFYzJFYzJGbGVldFRhZ1NwZWNpZmljYXRpb25zVGFnc1RvVGVycmFmb3JtKHN0cnVjdD86IERhdGFBd3NjY0VjMkVjMkZsZWV0VGFnU3BlY2lmaWNhdGlvbnNUYWdzKTogYW55IHtcbiAgaWYgKCFjZGt0Zi5jYW5JbnNwZWN0KHN0cnVjdCkpIHsgcmV0dXJuIHN0cnVjdDsgfVxuICByZXR1cm4ge1xuICAgIGtleTogY2RrdGYuc3RyaW5nVG9UZXJyYWZvcm0oc3RydWN0IS5rZXkpLFxuICAgIHZhbHVlOiBjZGt0Zi5zdHJpbmdUb1RlcnJhZm9ybShzdHJ1Y3QhLnZhbHVlKSxcbiAgfVxufVxuXG5leHBvcnQgY2xhc3MgRGF0YUF3c2NjRWMyRWMyRmxlZXRUYWdTcGVjaWZpY2F0aW9ucyBleHRlbmRzIGNka3RmLkNvbXBsZXhDb21wdXRlZExpc3Qge1xuXG4gIC8vIHJlc291cmNlX3R5cGUgLSBjb21wdXRlZDogdHJ1ZSwgb3B0aW9uYWw6IGZhbHNlLCByZXF1aXJlZDogZmFsc2VcbiAgcHVibGljIGdldCByZXNvdXJjZVR5cGUoKSB7XG4gICAgcmV0dXJuIHRoaXMuZ2V0U3RyaW5nQXR0cmlidXRlKCdyZXNvdXJjZV90eXBlJyk7XG4gIH1cblxuICAvLyB0YWdzIC0gY29tcHV0ZWQ6IHRydWUsIG9wdGlvbmFsOiBmYWxzZSwgcmVxdWlyZWQ6IGZhbHNlXG4gIHB1YmxpYyBnZXQgdGFncygpIHtcbiAgICByZXR1cm4gdGhpcy5pbnRlcnBvbGF0aW9uRm9yQXR0cmlidXRlKCd0YWdzJykgYXMgYW55O1xuICB9XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBkYXRhQXdzY2NFYzJFYzJGbGVldFRhZ1NwZWNpZmljYXRpb25zVG9UZXJyYWZvcm0oc3RydWN0PzogRGF0YUF3c2NjRWMyRWMyRmxlZXRUYWdTcGVjaWZpY2F0aW9ucyk6IGFueSB7XG4gIGlmICghY2RrdGYuY2FuSW5zcGVjdChzdHJ1Y3QpKSB7IHJldHVybiBzdHJ1Y3Q7IH1cbiAgcmV0dXJuIHtcbiAgICByZXNvdXJjZV90eXBlOiBjZGt0Zi5zdHJpbmdUb1RlcnJhZm9ybShzdHJ1Y3QhLnJlc291cmNlVHlwZSksXG4gICAgdGFnczogY2RrdGYubGlzdE1hcHBlcihkYXRhQXdzY2NFYzJFYzJGbGVldFRhZ1NwZWNpZmljYXRpb25zVGFnc1RvVGVycmFmb3JtKShzdHJ1Y3QhLnRhZ3MpLFxuICB9XG59XG5cbmV4cG9ydCBjbGFzcyBEYXRhQXdzY2NFYzJFYzJGbGVldFRhcmdldENhcGFjaXR5U3BlY2lmaWNhdGlvbiBleHRlbmRzIGNka3RmLkNvbXBsZXhDb21wdXRlZExpc3Qge1xuXG4gIC8vIGRlZmF1bHRfdGFyZ2V0X2NhcGFjaXR5X3R5cGUgLSBjb21wdXRlZDogdHJ1ZSwgb3B0aW9uYWw6IGZhbHNlLCByZXF1aXJlZDogZmFsc2VcbiAgcHVibGljIGdldCBkZWZhdWx0VGFyZ2V0Q2FwYWNpdHlUeXBlKCkge1xuICAgIHJldHVybiB0aGlzLmdldFN0cmluZ0F0dHJpYnV0ZSgnZGVmYXVsdF90YXJnZXRfY2FwYWNpdHlfdHlwZScpO1xuICB9XG5cbiAgLy8gb25fZGVtYW5kX3RhcmdldF9jYXBhY2l0eSAtIGNvbXB1dGVkOiB0cnVlLCBvcHRpb25hbDogZmFsc2UsIHJlcXVpcmVkOiBmYWxzZVxuICBwdWJsaWMgZ2V0IG9uRGVtYW5kVGFyZ2V0Q2FwYWNpdHkoKSB7XG4gICAgcmV0dXJuIHRoaXMuZ2V0TnVtYmVyQXR0cmlidXRlKCdvbl9kZW1hbmRfdGFyZ2V0X2NhcGFjaXR5Jyk7XG4gIH1cblxuICAvLyBzcG90X3RhcmdldF9jYXBhY2l0eSAtIGNvbXB1dGVkOiB0cnVlLCBvcHRpb25hbDogZmFsc2UsIHJlcXVpcmVkOiBmYWxzZVxuICBwdWJsaWMgZ2V0IHNwb3RUYXJnZXRDYXBhY2l0eSgpIHtcbiAgICByZXR1cm4gdGhpcy5nZXROdW1iZXJBdHRyaWJ1dGUoJ3Nwb3RfdGFyZ2V0X2NhcGFjaXR5Jyk7XG4gIH1cblxuICAvLyB0b3RhbF90YXJnZXRfY2FwYWNpdHkgLSBjb21wdXRlZDogdHJ1ZSwgb3B0aW9uYWw6IGZhbHNlLCByZXF1aXJlZDogZmFsc2VcbiAgcHVibGljIGdldCB0b3RhbFRhcmdldENhcGFjaXR5KCkge1xuICAgIHJldHVybiB0aGlzLmdldE51bWJlckF0dHJpYnV0ZSgndG90YWxfdGFyZ2V0X2NhcGFjaXR5Jyk7XG4gIH1cbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGRhdGFBd3NjY0VjMkVjMkZsZWV0VGFyZ2V0Q2FwYWNpdHlTcGVjaWZpY2F0aW9uVG9UZXJyYWZvcm0oc3RydWN0PzogRGF0YUF3c2NjRWMyRWMyRmxlZXRUYXJnZXRDYXBhY2l0eVNwZWNpZmljYXRpb24pOiBhbnkge1xuICBpZiAoIWNka3RmLmNhbkluc3BlY3Qoc3RydWN0KSkgeyByZXR1cm4gc3RydWN0OyB9XG4gIHJldHVybiB7XG4gICAgZGVmYXVsdF90YXJnZXRfY2FwYWNpdHlfdHlwZTogY2RrdGYuc3RyaW5nVG9UZXJyYWZvcm0oc3RydWN0IS5kZWZhdWx0VGFyZ2V0Q2FwYWNpdHlUeXBlKSxcbiAgICBvbl9kZW1hbmRfdGFyZ2V0X2NhcGFjaXR5OiBjZGt0Zi5udW1iZXJUb1RlcnJhZm9ybShzdHJ1Y3QhLm9uRGVtYW5kVGFyZ2V0Q2FwYWNpdHkpLFxuICAgIHNwb3RfdGFyZ2V0X2NhcGFjaXR5OiBjZGt0Zi5udW1iZXJUb1RlcnJhZm9ybShzdHJ1Y3QhLnNwb3RUYXJnZXRDYXBhY2l0eSksXG4gICAgdG90YWxfdGFyZ2V0X2NhcGFjaXR5OiBjZGt0Zi5udW1iZXJUb1RlcnJhZm9ybShzdHJ1Y3QhLnRvdGFsVGFyZ2V0Q2FwYWNpdHkpLFxuICB9XG59XG5cblxuLyoqXG4qIFJlcHJlc2VudHMgYSB7QGxpbmsgaHR0cHM6Ly93d3cudGVycmFmb3JtLmlvL2RvY3MvcHJvdmlkZXJzL2F3c2NjL2QvZWMyX2VjMl9mbGVldC5odG1sIGF3c2NjX2VjMl9lYzJfZmxlZXR9XG4qL1xuZXhwb3J0IGNsYXNzIERhdGFBd3NjY0VjMkVjMkZsZWV0IGV4dGVuZHMgY2RrdGYuVGVycmFmb3JtRGF0YVNvdXJjZSB7XG5cbiAgLy8gPT09PT09PT09PT09PT09PT1cbiAgLy8gU1RBVElDIFBST1BFUlRJRVNcbiAgLy8gPT09PT09PT09PT09PT09PT1cbiAgcHVibGljIHN0YXRpYyByZWFkb25seSB0ZlJlc291cmNlVHlwZTogc3RyaW5nID0gXCJhd3NjY19lYzJfZWMyX2ZsZWV0XCI7XG5cbiAgLy8gPT09PT09PT09PT1cbiAgLy8gSU5JVElBTElaRVJcbiAgLy8gPT09PT09PT09PT1cblxuICAvKipcbiAgKiBDcmVhdGUgYSBuZXcge0BsaW5rIGh0dHBzOi8vd3d3LnRlcnJhZm9ybS5pby9kb2NzL3Byb3ZpZGVycy9hd3NjYy9kL2VjMl9lYzJfZmxlZXQuaHRtbCBhd3NjY19lYzJfZWMyX2ZsZWV0fSBEYXRhIFNvdXJjZVxuICAqXG4gICogQHBhcmFtIHNjb3BlIFRoZSBzY29wZSBpbiB3aGljaCB0byBkZWZpbmUgdGhpcyBjb25zdHJ1Y3RcbiAgKiBAcGFyYW0gaWQgVGhlIHNjb3BlZCBjb25zdHJ1Y3QgSUQuIE11c3QgYmUgdW5pcXVlIGFtb25nc3Qgc2libGluZ3MgaW4gdGhlIHNhbWUgc2NvcGVcbiAgKiBAcGFyYW0gb3B0aW9ucyBEYXRhQXdzY2NFYzJFYzJGbGVldENvbmZpZ1xuICAqL1xuICBwdWJsaWMgY29uc3RydWN0b3Ioc2NvcGU6IENvbnN0cnVjdCwgaWQ6IHN0cmluZywgY29uZmlnOiBEYXRhQXdzY2NFYzJFYzJGbGVldENvbmZpZykge1xuICAgIHN1cGVyKHNjb3BlLCBpZCwge1xuICAgICAgdGVycmFmb3JtUmVzb3VyY2VUeXBlOiAnYXdzY2NfZWMyX2VjMl9mbGVldCcsXG4gICAgICB0ZXJyYWZvcm1HZW5lcmF0b3JNZXRhZGF0YToge1xuICAgICAgICBwcm92aWRlck5hbWU6ICdhd3NjYydcbiAgICAgIH0sXG4gICAgICBwcm92aWRlcjogY29uZmlnLnByb3ZpZGVyLFxuICAgICAgZGVwZW5kc09uOiBjb25maWcuZGVwZW5kc09uLFxuICAgICAgY291bnQ6IGNvbmZpZy5jb3VudCxcbiAgICAgIGxpZmVjeWNsZTogY29uZmlnLmxpZmVjeWNsZVxuICAgIH0pO1xuICAgIHRoaXMuX2lkID0gY29uZmlnLmlkO1xuICB9XG5cbiAgLy8gPT09PT09PT09PVxuICAvLyBBVFRSSUJVVEVTXG4gIC8vID09PT09PT09PT1cblxuICAvLyBjb250ZXh0IC0gY29tcHV0ZWQ6IHRydWUsIG9wdGlvbmFsOiBmYWxzZSwgcmVxdWlyZWQ6IGZhbHNlXG4gIHB1YmxpYyBnZXQgY29udGV4dCgpIHtcbiAgICByZXR1cm4gdGhpcy5nZXRTdHJpbmdBdHRyaWJ1dGUoJ2NvbnRleHQnKTtcbiAgfVxuXG4gIC8vIGV4Y2Vzc19jYXBhY2l0eV90ZXJtaW5hdGlvbl9wb2xpY3kgLSBjb21wdXRlZDogdHJ1ZSwgb3B0aW9uYWw6IGZhbHNlLCByZXF1aXJlZDogZmFsc2VcbiAgcHVibGljIGdldCBleGNlc3NDYXBhY2l0eVRlcm1pbmF0aW9uUG9saWN5KCkge1xuICAgIHJldHVybiB0aGlzLmdldFN0cmluZ0F0dHJpYnV0ZSgnZXhjZXNzX2NhcGFjaXR5X3Rlcm1pbmF0aW9uX3BvbGljeScpO1xuICB9XG5cbiAgLy8gZmxlZXRfaWQgLSBjb21wdXRlZDogdHJ1ZSwgb3B0aW9uYWw6IGZhbHNlLCByZXF1aXJlZDogZmFsc2VcbiAgcHVibGljIGdldCBmbGVldElkKCkge1xuICAgIHJldHVybiB0aGlzLmdldFN0cmluZ0F0dHJpYnV0ZSgnZmxlZXRfaWQnKTtcbiAgfVxuXG4gIC8vIGlkIC0gY29tcHV0ZWQ6IGZhbHNlLCBvcHRpb25hbDogZmFsc2UsIHJlcXVpcmVkOiB0cnVlXG4gIHByaXZhdGUgX2lkOiBzdHJpbmc7XG4gIHB1YmxpYyBnZXQgaWQoKSB7XG4gICAgcmV0dXJuIHRoaXMuZ2V0U3RyaW5nQXR0cmlidXRlKCdpZCcpO1xuICB9XG4gIHB1YmxpYyBzZXQgaWQodmFsdWU6IHN0cmluZykge1xuICAgIHRoaXMuX2lkID0gdmFsdWU7XG4gIH1cbiAgLy8gVGVtcG9yYXJpbHkgZXhwb3NlIGlucHV0IHZhbHVlLiBVc2Ugd2l0aCBjYXV0aW9uLlxuICBwdWJsaWMgZ2V0IGlkSW5wdXQoKSB7XG4gICAgcmV0dXJuIHRoaXMuX2lkXG4gIH1cblxuICAvLyBsYXVuY2hfdGVtcGxhdGVfY29uZmlncyAtIGNvbXB1dGVkOiB0cnVlLCBvcHRpb25hbDogZmFsc2UsIHJlcXVpcmVkOiBmYWxzZVxuICBwdWJsaWMgZ2V0IGxhdW5jaFRlbXBsYXRlQ29uZmlncygpIHtcbiAgICByZXR1cm4gdGhpcy5pbnRlcnBvbGF0aW9uRm9yQXR0cmlidXRlKCdsYXVuY2hfdGVtcGxhdGVfY29uZmlncycpIGFzIGFueTtcbiAgfVxuXG4gIC8vIG9uX2RlbWFuZF9vcHRpb25zIC0gY29tcHV0ZWQ6IHRydWUsIG9wdGlvbmFsOiBmYWxzZSwgcmVxdWlyZWQ6IGZhbHNlXG4gIHB1YmxpYyBnZXQgb25EZW1hbmRPcHRpb25zKCkge1xuICAgIHJldHVybiB0aGlzLmludGVycG9sYXRpb25Gb3JBdHRyaWJ1dGUoJ29uX2RlbWFuZF9vcHRpb25zJykgYXMgYW55O1xuICB9XG5cbiAgLy8gcmVwbGFjZV91bmhlYWx0aHlfaW5zdGFuY2VzIC0gY29tcHV0ZWQ6IHRydWUsIG9wdGlvbmFsOiBmYWxzZSwgcmVxdWlyZWQ6IGZhbHNlXG4gIHB1YmxpYyBnZXQgcmVwbGFjZVVuaGVhbHRoeUluc3RhbmNlcygpIHtcbiAgICByZXR1cm4gdGhpcy5nZXRCb29sZWFuQXR0cmlidXRlKCdyZXBsYWNlX3VuaGVhbHRoeV9pbnN0YW5jZXMnKTtcbiAgfVxuXG4gIC8vIHNwb3Rfb3B0aW9ucyAtIGNvbXB1dGVkOiB0cnVlLCBvcHRpb25hbDogZmFsc2UsIHJlcXVpcmVkOiBmYWxzZVxuICBwdWJsaWMgZ2V0IHNwb3RPcHRpb25zKCkge1xuICAgIHJldHVybiB0aGlzLmludGVycG9sYXRpb25Gb3JBdHRyaWJ1dGUoJ3Nwb3Rfb3B0aW9ucycpIGFzIGFueTtcbiAgfVxuXG4gIC8vIHRhZ19zcGVjaWZpY2F0aW9ucyAtIGNvbXB1dGVkOiB0cnVlLCBvcHRpb25hbDogZmFsc2UsIHJlcXVpcmVkOiBmYWxzZVxuICBwdWJsaWMgZ2V0IHRhZ1NwZWNpZmljYXRpb25zKCkge1xuICAgIHJldHVybiB0aGlzLmludGVycG9sYXRpb25Gb3JBdHRyaWJ1dGUoJ3RhZ19zcGVjaWZpY2F0aW9ucycpIGFzIGFueTtcbiAgfVxuXG4gIC8vIHRhcmdldF9jYXBhY2l0eV9zcGVjaWZpY2F0aW9uIC0gY29tcHV0ZWQ6IHRydWUsIG9wdGlvbmFsOiBmYWxzZSwgcmVxdWlyZWQ6IGZhbHNlXG4gIHB1YmxpYyBnZXQgdGFyZ2V0Q2FwYWNpdHlTcGVjaWZpY2F0aW9uKCkge1xuICAgIHJldHVybiB0aGlzLmludGVycG9sYXRpb25Gb3JBdHRyaWJ1dGUoJ3RhcmdldF9jYXBhY2l0eV9zcGVjaWZpY2F0aW9uJykgYXMgYW55O1xuICB9XG5cbiAgLy8gdGVybWluYXRlX2luc3RhbmNlc193aXRoX2V4cGlyYXRpb24gLSBjb21wdXRlZDogdHJ1ZSwgb3B0aW9uYWw6IGZhbHNlLCByZXF1aXJlZDogZmFsc2VcbiAgcHVibGljIGdldCB0ZXJtaW5hdGVJbnN0YW5jZXNXaXRoRXhwaXJhdGlvbigpIHtcbiAgICByZXR1cm4gdGhpcy5nZXRCb29sZWFuQXR0cmlidXRlKCd0ZXJtaW5hdGVfaW5zdGFuY2VzX3dpdGhfZXhwaXJhdGlvbicpO1xuICB9XG5cbiAgLy8gdHlwZSAtIGNvbXB1dGVkOiB0cnVlLCBvcHRpb25hbDogZmFsc2UsIHJlcXVpcmVkOiBmYWxzZVxuICBwdWJsaWMgZ2V0IHR5cGUoKSB7XG4gICAgcmV0dXJuIHRoaXMuZ2V0U3RyaW5nQXR0cmlidXRlKCd0eXBlJyk7XG4gIH1cblxuICAvLyB2YWxpZF9mcm9tIC0gY29tcHV0ZWQ6IHRydWUsIG9wdGlvbmFsOiBmYWxzZSwgcmVxdWlyZWQ6IGZhbHNlXG4gIHB1YmxpYyBnZXQgdmFsaWRGcm9tKCkge1xuICAgIHJldHVybiB0aGlzLmdldFN0cmluZ0F0dHJpYnV0ZSgndmFsaWRfZnJvbScpO1xuICB9XG5cbiAgLy8gdmFsaWRfdW50aWwgLSBjb21wdXRlZDogdHJ1ZSwgb3B0aW9uYWw6IGZhbHNlLCByZXF1aXJlZDogZmFsc2VcbiAgcHVibGljIGdldCB2YWxpZFVudGlsKCkge1xuICAgIHJldHVybiB0aGlzLmdldFN0cmluZ0F0dHJpYnV0ZSgndmFsaWRfdW50aWwnKTtcbiAgfVxuXG4gIC8vID09PT09PT09PVxuICAvLyBTWU5USEVTSVNcbiAgLy8gPT09PT09PT09XG5cbiAgcHJvdGVjdGVkIHN5bnRoZXNpemVBdHRyaWJ1dGVzKCk6IHsgW25hbWU6IHN0cmluZ106IGFueSB9IHtcbiAgICByZXR1cm4ge1xuICAgICAgaWQ6IGNka3RmLnN0cmluZ1RvVGVycmFmb3JtKHRoaXMuX2lkKSxcbiAgICB9O1xuICB9XG59XG4iXX0=