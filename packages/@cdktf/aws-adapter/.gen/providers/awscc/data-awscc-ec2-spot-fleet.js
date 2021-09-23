"use strict";
// https://www.terraform.io/docs/providers/awscc/d/ec2_spot_fleet.html
// generated from terraform resource schema
Object.defineProperty(exports, "__esModule", { value: true });
exports.DataAwsccEc2SpotFleet = exports.dataAwsccEc2SpotFleetSpotFleetRequestConfigDataToTerraform = exports.DataAwsccEc2SpotFleetSpotFleetRequestConfigData = exports.dataAwsccEc2SpotFleetSpotFleetRequestConfigDataSpotMaintenanceStrategiesToTerraform = exports.DataAwsccEc2SpotFleetSpotFleetRequestConfigDataSpotMaintenanceStrategies = exports.dataAwsccEc2SpotFleetSpotFleetRequestConfigDataSpotMaintenanceStrategiesCapacityRebalanceToTerraform = exports.DataAwsccEc2SpotFleetSpotFleetRequestConfigDataSpotMaintenanceStrategiesCapacityRebalance = exports.dataAwsccEc2SpotFleetSpotFleetRequestConfigDataLoadBalancersConfigToTerraform = exports.DataAwsccEc2SpotFleetSpotFleetRequestConfigDataLoadBalancersConfig = exports.dataAwsccEc2SpotFleetSpotFleetRequestConfigDataLoadBalancersConfigTargetGroupsConfigToTerraform = exports.DataAwsccEc2SpotFleetSpotFleetRequestConfigDataLoadBalancersConfigTargetGroupsConfig = exports.dataAwsccEc2SpotFleetSpotFleetRequestConfigDataLoadBalancersConfigTargetGroupsConfigTargetGroupsToTerraform = exports.DataAwsccEc2SpotFleetSpotFleetRequestConfigDataLoadBalancersConfigTargetGroupsConfigTargetGroups = exports.dataAwsccEc2SpotFleetSpotFleetRequestConfigDataLoadBalancersConfigClassicLoadBalancersConfigToTerraform = exports.DataAwsccEc2SpotFleetSpotFleetRequestConfigDataLoadBalancersConfigClassicLoadBalancersConfig = exports.dataAwsccEc2SpotFleetSpotFleetRequestConfigDataLoadBalancersConfigClassicLoadBalancersConfigClassicLoadBalancersToTerraform = exports.DataAwsccEc2SpotFleetSpotFleetRequestConfigDataLoadBalancersConfigClassicLoadBalancersConfigClassicLoadBalancers = exports.dataAwsccEc2SpotFleetSpotFleetRequestConfigDataLaunchTemplateConfigsToTerraform = exports.DataAwsccEc2SpotFleetSpotFleetRequestConfigDataLaunchTemplateConfigs = exports.dataAwsccEc2SpotFleetSpotFleetRequestConfigDataLaunchTemplateConfigsOverridesToTerraform = exports.DataAwsccEc2SpotFleetSpotFleetRequestConfigDataLaunchTemplateConfigsOverrides = exports.dataAwsccEc2SpotFleetSpotFleetRequestConfigDataLaunchTemplateConfigsLaunchTemplateSpecificationToTerraform = exports.DataAwsccEc2SpotFleetSpotFleetRequestConfigDataLaunchTemplateConfigsLaunchTemplateSpecification = exports.dataAwsccEc2SpotFleetSpotFleetRequestConfigDataLaunchSpecificationsToTerraform = exports.DataAwsccEc2SpotFleetSpotFleetRequestConfigDataLaunchSpecifications = exports.dataAwsccEc2SpotFleetSpotFleetRequestConfigDataLaunchSpecificationsTagSpecificationsToTerraform = exports.DataAwsccEc2SpotFleetSpotFleetRequestConfigDataLaunchSpecificationsTagSpecifications = exports.dataAwsccEc2SpotFleetSpotFleetRequestConfigDataLaunchSpecificationsTagSpecificationsTagsToTerraform = exports.DataAwsccEc2SpotFleetSpotFleetRequestConfigDataLaunchSpecificationsTagSpecificationsTags = exports.dataAwsccEc2SpotFleetSpotFleetRequestConfigDataLaunchSpecificationsSecurityGroupsToTerraform = exports.DataAwsccEc2SpotFleetSpotFleetRequestConfigDataLaunchSpecificationsSecurityGroups = exports.dataAwsccEc2SpotFleetSpotFleetRequestConfigDataLaunchSpecificationsPlacementToTerraform = exports.DataAwsccEc2SpotFleetSpotFleetRequestConfigDataLaunchSpecificationsPlacement = exports.dataAwsccEc2SpotFleetSpotFleetRequestConfigDataLaunchSpecificationsNetworkInterfacesToTerraform = exports.DataAwsccEc2SpotFleetSpotFleetRequestConfigDataLaunchSpecificationsNetworkInterfaces = exports.dataAwsccEc2SpotFleetSpotFleetRequestConfigDataLaunchSpecificationsNetworkInterfacesPrivateIpAddressesToTerraform = exports.DataAwsccEc2SpotFleetSpotFleetRequestConfigDataLaunchSpecificationsNetworkInterfacesPrivateIpAddresses = exports.dataAwsccEc2SpotFleetSpotFleetRequestConfigDataLaunchSpecificationsNetworkInterfacesIpv6AddressesToTerraform = exports.DataAwsccEc2SpotFleetSpotFleetRequestConfigDataLaunchSpecificationsNetworkInterfacesIpv6Addresses = exports.dataAwsccEc2SpotFleetSpotFleetRequestConfigDataLaunchSpecificationsMonitoringToTerraform = exports.DataAwsccEc2SpotFleetSpotFleetRequestConfigDataLaunchSpecificationsMonitoring = exports.dataAwsccEc2SpotFleetSpotFleetRequestConfigDataLaunchSpecificationsIamInstanceProfileToTerraform = exports.DataAwsccEc2SpotFleetSpotFleetRequestConfigDataLaunchSpecificationsIamInstanceProfile = exports.dataAwsccEc2SpotFleetSpotFleetRequestConfigDataLaunchSpecificationsBlockDeviceMappingsToTerraform = exports.DataAwsccEc2SpotFleetSpotFleetRequestConfigDataLaunchSpecificationsBlockDeviceMappings = exports.dataAwsccEc2SpotFleetSpotFleetRequestConfigDataLaunchSpecificationsBlockDeviceMappingsEbsToTerraform = exports.DataAwsccEc2SpotFleetSpotFleetRequestConfigDataLaunchSpecificationsBlockDeviceMappingsEbs = void 0;
const cdktf = require("cdktf");
class DataAwsccEc2SpotFleetSpotFleetRequestConfigDataLaunchSpecificationsBlockDeviceMappingsEbs extends cdktf.ComplexComputedList {
    // delete_on_termination - computed: true, optional: false, required: false
    get deleteOnTermination() {
        return this.getBooleanAttribute('delete_on_termination');
    }
    // encrypted - computed: true, optional: false, required: false
    get encrypted() {
        return this.getBooleanAttribute('encrypted');
    }
    // iops - computed: true, optional: false, required: false
    get iops() {
        return this.getNumberAttribute('iops');
    }
    // snapshot_id - computed: true, optional: false, required: false
    get snapshotId() {
        return this.getStringAttribute('snapshot_id');
    }
    // volume_size - computed: true, optional: false, required: false
    get volumeSize() {
        return this.getNumberAttribute('volume_size');
    }
    // volume_type - computed: true, optional: false, required: false
    get volumeType() {
        return this.getStringAttribute('volume_type');
    }
}
exports.DataAwsccEc2SpotFleetSpotFleetRequestConfigDataLaunchSpecificationsBlockDeviceMappingsEbs = DataAwsccEc2SpotFleetSpotFleetRequestConfigDataLaunchSpecificationsBlockDeviceMappingsEbs;
function dataAwsccEc2SpotFleetSpotFleetRequestConfigDataLaunchSpecificationsBlockDeviceMappingsEbsToTerraform(struct) {
    if (!cdktf.canInspect(struct)) {
        return struct;
    }
    return {
        delete_on_termination: cdktf.booleanToTerraform(struct.deleteOnTermination),
        encrypted: cdktf.booleanToTerraform(struct.encrypted),
        iops: cdktf.numberToTerraform(struct.iops),
        snapshot_id: cdktf.stringToTerraform(struct.snapshotId),
        volume_size: cdktf.numberToTerraform(struct.volumeSize),
        volume_type: cdktf.stringToTerraform(struct.volumeType),
    };
}
exports.dataAwsccEc2SpotFleetSpotFleetRequestConfigDataLaunchSpecificationsBlockDeviceMappingsEbsToTerraform = dataAwsccEc2SpotFleetSpotFleetRequestConfigDataLaunchSpecificationsBlockDeviceMappingsEbsToTerraform;
class DataAwsccEc2SpotFleetSpotFleetRequestConfigDataLaunchSpecificationsBlockDeviceMappings extends cdktf.ComplexComputedList {
    // device_name - computed: true, optional: false, required: false
    get deviceName() {
        return this.getStringAttribute('device_name');
    }
    // ebs - computed: true, optional: false, required: false
    get ebs() {
        return this.interpolationForAttribute('ebs');
    }
    // no_device - computed: true, optional: false, required: false
    get noDevice() {
        return this.getStringAttribute('no_device');
    }
    // virtual_name - computed: true, optional: false, required: false
    get virtualName() {
        return this.getStringAttribute('virtual_name');
    }
}
exports.DataAwsccEc2SpotFleetSpotFleetRequestConfigDataLaunchSpecificationsBlockDeviceMappings = DataAwsccEc2SpotFleetSpotFleetRequestConfigDataLaunchSpecificationsBlockDeviceMappings;
function dataAwsccEc2SpotFleetSpotFleetRequestConfigDataLaunchSpecificationsBlockDeviceMappingsToTerraform(struct) {
    if (!cdktf.canInspect(struct)) {
        return struct;
    }
    return {
        device_name: cdktf.stringToTerraform(struct.deviceName),
        ebs: dataAwsccEc2SpotFleetSpotFleetRequestConfigDataLaunchSpecificationsBlockDeviceMappingsEbsToTerraform(struct.ebs),
        no_device: cdktf.stringToTerraform(struct.noDevice),
        virtual_name: cdktf.stringToTerraform(struct.virtualName),
    };
}
exports.dataAwsccEc2SpotFleetSpotFleetRequestConfigDataLaunchSpecificationsBlockDeviceMappingsToTerraform = dataAwsccEc2SpotFleetSpotFleetRequestConfigDataLaunchSpecificationsBlockDeviceMappingsToTerraform;
class DataAwsccEc2SpotFleetSpotFleetRequestConfigDataLaunchSpecificationsIamInstanceProfile extends cdktf.ComplexComputedList {
    // arn - computed: true, optional: false, required: false
    get arn() {
        return this.getStringAttribute('arn');
    }
}
exports.DataAwsccEc2SpotFleetSpotFleetRequestConfigDataLaunchSpecificationsIamInstanceProfile = DataAwsccEc2SpotFleetSpotFleetRequestConfigDataLaunchSpecificationsIamInstanceProfile;
function dataAwsccEc2SpotFleetSpotFleetRequestConfigDataLaunchSpecificationsIamInstanceProfileToTerraform(struct) {
    if (!cdktf.canInspect(struct)) {
        return struct;
    }
    return {
        arn: cdktf.stringToTerraform(struct.arn),
    };
}
exports.dataAwsccEc2SpotFleetSpotFleetRequestConfigDataLaunchSpecificationsIamInstanceProfileToTerraform = dataAwsccEc2SpotFleetSpotFleetRequestConfigDataLaunchSpecificationsIamInstanceProfileToTerraform;
class DataAwsccEc2SpotFleetSpotFleetRequestConfigDataLaunchSpecificationsMonitoring extends cdktf.ComplexComputedList {
    // enabled - computed: true, optional: false, required: false
    get enabled() {
        return this.getBooleanAttribute('enabled');
    }
}
exports.DataAwsccEc2SpotFleetSpotFleetRequestConfigDataLaunchSpecificationsMonitoring = DataAwsccEc2SpotFleetSpotFleetRequestConfigDataLaunchSpecificationsMonitoring;
function dataAwsccEc2SpotFleetSpotFleetRequestConfigDataLaunchSpecificationsMonitoringToTerraform(struct) {
    if (!cdktf.canInspect(struct)) {
        return struct;
    }
    return {
        enabled: cdktf.booleanToTerraform(struct.enabled),
    };
}
exports.dataAwsccEc2SpotFleetSpotFleetRequestConfigDataLaunchSpecificationsMonitoringToTerraform = dataAwsccEc2SpotFleetSpotFleetRequestConfigDataLaunchSpecificationsMonitoringToTerraform;
class DataAwsccEc2SpotFleetSpotFleetRequestConfigDataLaunchSpecificationsNetworkInterfacesIpv6Addresses extends cdktf.ComplexComputedList {
    // ipv_6_address - computed: true, optional: false, required: false
    get ipv6Address() {
        return this.getStringAttribute('ipv_6_address');
    }
}
exports.DataAwsccEc2SpotFleetSpotFleetRequestConfigDataLaunchSpecificationsNetworkInterfacesIpv6Addresses = DataAwsccEc2SpotFleetSpotFleetRequestConfigDataLaunchSpecificationsNetworkInterfacesIpv6Addresses;
function dataAwsccEc2SpotFleetSpotFleetRequestConfigDataLaunchSpecificationsNetworkInterfacesIpv6AddressesToTerraform(struct) {
    if (!cdktf.canInspect(struct)) {
        return struct;
    }
    return {
        ipv_6_address: cdktf.stringToTerraform(struct.ipv6Address),
    };
}
exports.dataAwsccEc2SpotFleetSpotFleetRequestConfigDataLaunchSpecificationsNetworkInterfacesIpv6AddressesToTerraform = dataAwsccEc2SpotFleetSpotFleetRequestConfigDataLaunchSpecificationsNetworkInterfacesIpv6AddressesToTerraform;
class DataAwsccEc2SpotFleetSpotFleetRequestConfigDataLaunchSpecificationsNetworkInterfacesPrivateIpAddresses extends cdktf.ComplexComputedList {
    // primary - computed: true, optional: false, required: false
    get primary() {
        return this.getBooleanAttribute('primary');
    }
    // private_ip_address - computed: true, optional: false, required: false
    get privateIpAddress() {
        return this.getStringAttribute('private_ip_address');
    }
}
exports.DataAwsccEc2SpotFleetSpotFleetRequestConfigDataLaunchSpecificationsNetworkInterfacesPrivateIpAddresses = DataAwsccEc2SpotFleetSpotFleetRequestConfigDataLaunchSpecificationsNetworkInterfacesPrivateIpAddresses;
function dataAwsccEc2SpotFleetSpotFleetRequestConfigDataLaunchSpecificationsNetworkInterfacesPrivateIpAddressesToTerraform(struct) {
    if (!cdktf.canInspect(struct)) {
        return struct;
    }
    return {
        primary: cdktf.booleanToTerraform(struct.primary),
        private_ip_address: cdktf.stringToTerraform(struct.privateIpAddress),
    };
}
exports.dataAwsccEc2SpotFleetSpotFleetRequestConfigDataLaunchSpecificationsNetworkInterfacesPrivateIpAddressesToTerraform = dataAwsccEc2SpotFleetSpotFleetRequestConfigDataLaunchSpecificationsNetworkInterfacesPrivateIpAddressesToTerraform;
class DataAwsccEc2SpotFleetSpotFleetRequestConfigDataLaunchSpecificationsNetworkInterfaces extends cdktf.ComplexComputedList {
    // associate_public_ip_address - computed: true, optional: false, required: false
    get associatePublicIpAddress() {
        return this.getBooleanAttribute('associate_public_ip_address');
    }
    // delete_on_termination - computed: true, optional: false, required: false
    get deleteOnTermination() {
        return this.getBooleanAttribute('delete_on_termination');
    }
    // description - computed: true, optional: false, required: false
    get description() {
        return this.getStringAttribute('description');
    }
    // device_index - computed: true, optional: false, required: false
    get deviceIndex() {
        return this.getNumberAttribute('device_index');
    }
    // groups - computed: true, optional: false, required: false
    get groups() {
        return this.getListAttribute('groups');
    }
    // ipv_6_address_count - computed: true, optional: false, required: false
    get ipv6AddressCount() {
        return this.getNumberAttribute('ipv_6_address_count');
    }
    // ipv_6_addresses - computed: true, optional: false, required: false
    get ipv6Addresses() {
        return this.interpolationForAttribute('ipv_6_addresses');
    }
    // network_interface_id - computed: true, optional: false, required: false
    get networkInterfaceId() {
        return this.getStringAttribute('network_interface_id');
    }
    // private_ip_addresses - computed: true, optional: false, required: false
    get privateIpAddresses() {
        return this.interpolationForAttribute('private_ip_addresses');
    }
    // secondary_private_ip_address_count - computed: true, optional: false, required: false
    get secondaryPrivateIpAddressCount() {
        return this.getNumberAttribute('secondary_private_ip_address_count');
    }
    // subnet_id - computed: true, optional: false, required: false
    get subnetId() {
        return this.getStringAttribute('subnet_id');
    }
}
exports.DataAwsccEc2SpotFleetSpotFleetRequestConfigDataLaunchSpecificationsNetworkInterfaces = DataAwsccEc2SpotFleetSpotFleetRequestConfigDataLaunchSpecificationsNetworkInterfaces;
function dataAwsccEc2SpotFleetSpotFleetRequestConfigDataLaunchSpecificationsNetworkInterfacesToTerraform(struct) {
    if (!cdktf.canInspect(struct)) {
        return struct;
    }
    return {
        associate_public_ip_address: cdktf.booleanToTerraform(struct.associatePublicIpAddress),
        delete_on_termination: cdktf.booleanToTerraform(struct.deleteOnTermination),
        description: cdktf.stringToTerraform(struct.description),
        device_index: cdktf.numberToTerraform(struct.deviceIndex),
        groups: cdktf.listMapper(cdktf.stringToTerraform)(struct.groups),
        ipv_6_address_count: cdktf.numberToTerraform(struct.ipv6AddressCount),
        ipv_6_addresses: cdktf.listMapper(dataAwsccEc2SpotFleetSpotFleetRequestConfigDataLaunchSpecificationsNetworkInterfacesIpv6AddressesToTerraform)(struct.ipv6Addresses),
        network_interface_id: cdktf.stringToTerraform(struct.networkInterfaceId),
        private_ip_addresses: cdktf.listMapper(dataAwsccEc2SpotFleetSpotFleetRequestConfigDataLaunchSpecificationsNetworkInterfacesPrivateIpAddressesToTerraform)(struct.privateIpAddresses),
        secondary_private_ip_address_count: cdktf.numberToTerraform(struct.secondaryPrivateIpAddressCount),
        subnet_id: cdktf.stringToTerraform(struct.subnetId),
    };
}
exports.dataAwsccEc2SpotFleetSpotFleetRequestConfigDataLaunchSpecificationsNetworkInterfacesToTerraform = dataAwsccEc2SpotFleetSpotFleetRequestConfigDataLaunchSpecificationsNetworkInterfacesToTerraform;
class DataAwsccEc2SpotFleetSpotFleetRequestConfigDataLaunchSpecificationsPlacement extends cdktf.ComplexComputedList {
    // availability_zone - computed: true, optional: false, required: false
    get availabilityZone() {
        return this.getStringAttribute('availability_zone');
    }
    // group_name - computed: true, optional: false, required: false
    get groupName() {
        return this.getStringAttribute('group_name');
    }
    // tenancy - computed: true, optional: false, required: false
    get tenancy() {
        return this.getStringAttribute('tenancy');
    }
}
exports.DataAwsccEc2SpotFleetSpotFleetRequestConfigDataLaunchSpecificationsPlacement = DataAwsccEc2SpotFleetSpotFleetRequestConfigDataLaunchSpecificationsPlacement;
function dataAwsccEc2SpotFleetSpotFleetRequestConfigDataLaunchSpecificationsPlacementToTerraform(struct) {
    if (!cdktf.canInspect(struct)) {
        return struct;
    }
    return {
        availability_zone: cdktf.stringToTerraform(struct.availabilityZone),
        group_name: cdktf.stringToTerraform(struct.groupName),
        tenancy: cdktf.stringToTerraform(struct.tenancy),
    };
}
exports.dataAwsccEc2SpotFleetSpotFleetRequestConfigDataLaunchSpecificationsPlacementToTerraform = dataAwsccEc2SpotFleetSpotFleetRequestConfigDataLaunchSpecificationsPlacementToTerraform;
class DataAwsccEc2SpotFleetSpotFleetRequestConfigDataLaunchSpecificationsSecurityGroups extends cdktf.ComplexComputedList {
    // group_id - computed: true, optional: false, required: false
    get groupId() {
        return this.getStringAttribute('group_id');
    }
}
exports.DataAwsccEc2SpotFleetSpotFleetRequestConfigDataLaunchSpecificationsSecurityGroups = DataAwsccEc2SpotFleetSpotFleetRequestConfigDataLaunchSpecificationsSecurityGroups;
function dataAwsccEc2SpotFleetSpotFleetRequestConfigDataLaunchSpecificationsSecurityGroupsToTerraform(struct) {
    if (!cdktf.canInspect(struct)) {
        return struct;
    }
    return {
        group_id: cdktf.stringToTerraform(struct.groupId),
    };
}
exports.dataAwsccEc2SpotFleetSpotFleetRequestConfigDataLaunchSpecificationsSecurityGroupsToTerraform = dataAwsccEc2SpotFleetSpotFleetRequestConfigDataLaunchSpecificationsSecurityGroupsToTerraform;
class DataAwsccEc2SpotFleetSpotFleetRequestConfigDataLaunchSpecificationsTagSpecificationsTags extends cdktf.ComplexComputedList {
    // key - computed: true, optional: false, required: false
    get key() {
        return this.getStringAttribute('key');
    }
    // value - computed: true, optional: false, required: false
    get value() {
        return this.getStringAttribute('value');
    }
}
exports.DataAwsccEc2SpotFleetSpotFleetRequestConfigDataLaunchSpecificationsTagSpecificationsTags = DataAwsccEc2SpotFleetSpotFleetRequestConfigDataLaunchSpecificationsTagSpecificationsTags;
function dataAwsccEc2SpotFleetSpotFleetRequestConfigDataLaunchSpecificationsTagSpecificationsTagsToTerraform(struct) {
    if (!cdktf.canInspect(struct)) {
        return struct;
    }
    return {
        key: cdktf.stringToTerraform(struct.key),
        value: cdktf.stringToTerraform(struct.value),
    };
}
exports.dataAwsccEc2SpotFleetSpotFleetRequestConfigDataLaunchSpecificationsTagSpecificationsTagsToTerraform = dataAwsccEc2SpotFleetSpotFleetRequestConfigDataLaunchSpecificationsTagSpecificationsTagsToTerraform;
class DataAwsccEc2SpotFleetSpotFleetRequestConfigDataLaunchSpecificationsTagSpecifications extends cdktf.ComplexComputedList {
    // resource_type - computed: true, optional: false, required: false
    get resourceType() {
        return this.getStringAttribute('resource_type');
    }
    // tags - computed: true, optional: false, required: false
    get tags() {
        return this.interpolationForAttribute('tags');
    }
}
exports.DataAwsccEc2SpotFleetSpotFleetRequestConfigDataLaunchSpecificationsTagSpecifications = DataAwsccEc2SpotFleetSpotFleetRequestConfigDataLaunchSpecificationsTagSpecifications;
function dataAwsccEc2SpotFleetSpotFleetRequestConfigDataLaunchSpecificationsTagSpecificationsToTerraform(struct) {
    if (!cdktf.canInspect(struct)) {
        return struct;
    }
    return {
        resource_type: cdktf.stringToTerraform(struct.resourceType),
        tags: cdktf.listMapper(dataAwsccEc2SpotFleetSpotFleetRequestConfigDataLaunchSpecificationsTagSpecificationsTagsToTerraform)(struct.tags),
    };
}
exports.dataAwsccEc2SpotFleetSpotFleetRequestConfigDataLaunchSpecificationsTagSpecificationsToTerraform = dataAwsccEc2SpotFleetSpotFleetRequestConfigDataLaunchSpecificationsTagSpecificationsToTerraform;
class DataAwsccEc2SpotFleetSpotFleetRequestConfigDataLaunchSpecifications extends cdktf.ComplexComputedList {
    // block_device_mappings - computed: true, optional: false, required: false
    get blockDeviceMappings() {
        return this.interpolationForAttribute('block_device_mappings');
    }
    // ebs_optimized - computed: true, optional: false, required: false
    get ebsOptimized() {
        return this.getBooleanAttribute('ebs_optimized');
    }
    // iam_instance_profile - computed: true, optional: false, required: false
    get iamInstanceProfile() {
        return this.interpolationForAttribute('iam_instance_profile');
    }
    // image_id - computed: true, optional: false, required: false
    get imageId() {
        return this.getStringAttribute('image_id');
    }
    // instance_type - computed: true, optional: false, required: false
    get instanceType() {
        return this.getStringAttribute('instance_type');
    }
    // kernel_id - computed: true, optional: false, required: false
    get kernelId() {
        return this.getStringAttribute('kernel_id');
    }
    // key_name - computed: true, optional: false, required: false
    get keyName() {
        return this.getStringAttribute('key_name');
    }
    // monitoring - computed: true, optional: false, required: false
    get monitoring() {
        return this.interpolationForAttribute('monitoring');
    }
    // network_interfaces - computed: true, optional: false, required: false
    get networkInterfaces() {
        return this.interpolationForAttribute('network_interfaces');
    }
    // placement - computed: true, optional: false, required: false
    get placement() {
        return this.interpolationForAttribute('placement');
    }
    // ramdisk_id - computed: true, optional: false, required: false
    get ramdiskId() {
        return this.getStringAttribute('ramdisk_id');
    }
    // security_groups - computed: true, optional: false, required: false
    get securityGroups() {
        return this.interpolationForAttribute('security_groups');
    }
    // spot_price - computed: true, optional: false, required: false
    get spotPrice() {
        return this.getStringAttribute('spot_price');
    }
    // subnet_id - computed: true, optional: false, required: false
    get subnetId() {
        return this.getStringAttribute('subnet_id');
    }
    // tag_specifications - computed: true, optional: false, required: false
    get tagSpecifications() {
        return this.interpolationForAttribute('tag_specifications');
    }
    // user_data - computed: true, optional: false, required: false
    get userData() {
        return this.getStringAttribute('user_data');
    }
    // weighted_capacity - computed: true, optional: false, required: false
    get weightedCapacity() {
        return this.getNumberAttribute('weighted_capacity');
    }
}
exports.DataAwsccEc2SpotFleetSpotFleetRequestConfigDataLaunchSpecifications = DataAwsccEc2SpotFleetSpotFleetRequestConfigDataLaunchSpecifications;
function dataAwsccEc2SpotFleetSpotFleetRequestConfigDataLaunchSpecificationsToTerraform(struct) {
    if (!cdktf.canInspect(struct)) {
        return struct;
    }
    return {
        block_device_mappings: cdktf.listMapper(dataAwsccEc2SpotFleetSpotFleetRequestConfigDataLaunchSpecificationsBlockDeviceMappingsToTerraform)(struct.blockDeviceMappings),
        ebs_optimized: cdktf.booleanToTerraform(struct.ebsOptimized),
        iam_instance_profile: dataAwsccEc2SpotFleetSpotFleetRequestConfigDataLaunchSpecificationsIamInstanceProfileToTerraform(struct.iamInstanceProfile),
        image_id: cdktf.stringToTerraform(struct.imageId),
        instance_type: cdktf.stringToTerraform(struct.instanceType),
        kernel_id: cdktf.stringToTerraform(struct.kernelId),
        key_name: cdktf.stringToTerraform(struct.keyName),
        monitoring: dataAwsccEc2SpotFleetSpotFleetRequestConfigDataLaunchSpecificationsMonitoringToTerraform(struct.monitoring),
        network_interfaces: cdktf.listMapper(dataAwsccEc2SpotFleetSpotFleetRequestConfigDataLaunchSpecificationsNetworkInterfacesToTerraform)(struct.networkInterfaces),
        placement: dataAwsccEc2SpotFleetSpotFleetRequestConfigDataLaunchSpecificationsPlacementToTerraform(struct.placement),
        ramdisk_id: cdktf.stringToTerraform(struct.ramdiskId),
        security_groups: cdktf.listMapper(dataAwsccEc2SpotFleetSpotFleetRequestConfigDataLaunchSpecificationsSecurityGroupsToTerraform)(struct.securityGroups),
        spot_price: cdktf.stringToTerraform(struct.spotPrice),
        subnet_id: cdktf.stringToTerraform(struct.subnetId),
        tag_specifications: cdktf.listMapper(dataAwsccEc2SpotFleetSpotFleetRequestConfigDataLaunchSpecificationsTagSpecificationsToTerraform)(struct.tagSpecifications),
        user_data: cdktf.stringToTerraform(struct.userData),
        weighted_capacity: cdktf.numberToTerraform(struct.weightedCapacity),
    };
}
exports.dataAwsccEc2SpotFleetSpotFleetRequestConfigDataLaunchSpecificationsToTerraform = dataAwsccEc2SpotFleetSpotFleetRequestConfigDataLaunchSpecificationsToTerraform;
class DataAwsccEc2SpotFleetSpotFleetRequestConfigDataLaunchTemplateConfigsLaunchTemplateSpecification extends cdktf.ComplexComputedList {
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
exports.DataAwsccEc2SpotFleetSpotFleetRequestConfigDataLaunchTemplateConfigsLaunchTemplateSpecification = DataAwsccEc2SpotFleetSpotFleetRequestConfigDataLaunchTemplateConfigsLaunchTemplateSpecification;
function dataAwsccEc2SpotFleetSpotFleetRequestConfigDataLaunchTemplateConfigsLaunchTemplateSpecificationToTerraform(struct) {
    if (!cdktf.canInspect(struct)) {
        return struct;
    }
    return {
        launch_template_id: cdktf.stringToTerraform(struct.launchTemplateId),
        launch_template_name: cdktf.stringToTerraform(struct.launchTemplateName),
        version: cdktf.stringToTerraform(struct.version),
    };
}
exports.dataAwsccEc2SpotFleetSpotFleetRequestConfigDataLaunchTemplateConfigsLaunchTemplateSpecificationToTerraform = dataAwsccEc2SpotFleetSpotFleetRequestConfigDataLaunchTemplateConfigsLaunchTemplateSpecificationToTerraform;
class DataAwsccEc2SpotFleetSpotFleetRequestConfigDataLaunchTemplateConfigsOverrides extends cdktf.ComplexComputedList {
    // availability_zone - computed: true, optional: false, required: false
    get availabilityZone() {
        return this.getStringAttribute('availability_zone');
    }
    // instance_type - computed: true, optional: false, required: false
    get instanceType() {
        return this.getStringAttribute('instance_type');
    }
    // spot_price - computed: true, optional: false, required: false
    get spotPrice() {
        return this.getStringAttribute('spot_price');
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
exports.DataAwsccEc2SpotFleetSpotFleetRequestConfigDataLaunchTemplateConfigsOverrides = DataAwsccEc2SpotFleetSpotFleetRequestConfigDataLaunchTemplateConfigsOverrides;
function dataAwsccEc2SpotFleetSpotFleetRequestConfigDataLaunchTemplateConfigsOverridesToTerraform(struct) {
    if (!cdktf.canInspect(struct)) {
        return struct;
    }
    return {
        availability_zone: cdktf.stringToTerraform(struct.availabilityZone),
        instance_type: cdktf.stringToTerraform(struct.instanceType),
        spot_price: cdktf.stringToTerraform(struct.spotPrice),
        subnet_id: cdktf.stringToTerraform(struct.subnetId),
        weighted_capacity: cdktf.numberToTerraform(struct.weightedCapacity),
    };
}
exports.dataAwsccEc2SpotFleetSpotFleetRequestConfigDataLaunchTemplateConfigsOverridesToTerraform = dataAwsccEc2SpotFleetSpotFleetRequestConfigDataLaunchTemplateConfigsOverridesToTerraform;
class DataAwsccEc2SpotFleetSpotFleetRequestConfigDataLaunchTemplateConfigs extends cdktf.ComplexComputedList {
    // launch_template_specification - computed: true, optional: false, required: false
    get launchTemplateSpecification() {
        return this.interpolationForAttribute('launch_template_specification');
    }
    // overrides - computed: true, optional: false, required: false
    get overrides() {
        return this.interpolationForAttribute('overrides');
    }
}
exports.DataAwsccEc2SpotFleetSpotFleetRequestConfigDataLaunchTemplateConfigs = DataAwsccEc2SpotFleetSpotFleetRequestConfigDataLaunchTemplateConfigs;
function dataAwsccEc2SpotFleetSpotFleetRequestConfigDataLaunchTemplateConfigsToTerraform(struct) {
    if (!cdktf.canInspect(struct)) {
        return struct;
    }
    return {
        launch_template_specification: dataAwsccEc2SpotFleetSpotFleetRequestConfigDataLaunchTemplateConfigsLaunchTemplateSpecificationToTerraform(struct.launchTemplateSpecification),
        overrides: cdktf.listMapper(dataAwsccEc2SpotFleetSpotFleetRequestConfigDataLaunchTemplateConfigsOverridesToTerraform)(struct.overrides),
    };
}
exports.dataAwsccEc2SpotFleetSpotFleetRequestConfigDataLaunchTemplateConfigsToTerraform = dataAwsccEc2SpotFleetSpotFleetRequestConfigDataLaunchTemplateConfigsToTerraform;
class DataAwsccEc2SpotFleetSpotFleetRequestConfigDataLoadBalancersConfigClassicLoadBalancersConfigClassicLoadBalancers extends cdktf.ComplexComputedList {
    // name - computed: true, optional: false, required: false
    get name() {
        return this.getStringAttribute('name');
    }
}
exports.DataAwsccEc2SpotFleetSpotFleetRequestConfigDataLoadBalancersConfigClassicLoadBalancersConfigClassicLoadBalancers = DataAwsccEc2SpotFleetSpotFleetRequestConfigDataLoadBalancersConfigClassicLoadBalancersConfigClassicLoadBalancers;
function dataAwsccEc2SpotFleetSpotFleetRequestConfigDataLoadBalancersConfigClassicLoadBalancersConfigClassicLoadBalancersToTerraform(struct) {
    if (!cdktf.canInspect(struct)) {
        return struct;
    }
    return {
        name: cdktf.stringToTerraform(struct.name),
    };
}
exports.dataAwsccEc2SpotFleetSpotFleetRequestConfigDataLoadBalancersConfigClassicLoadBalancersConfigClassicLoadBalancersToTerraform = dataAwsccEc2SpotFleetSpotFleetRequestConfigDataLoadBalancersConfigClassicLoadBalancersConfigClassicLoadBalancersToTerraform;
class DataAwsccEc2SpotFleetSpotFleetRequestConfigDataLoadBalancersConfigClassicLoadBalancersConfig extends cdktf.ComplexComputedList {
    // classic_load_balancers - computed: true, optional: false, required: false
    get classicLoadBalancers() {
        return this.interpolationForAttribute('classic_load_balancers');
    }
}
exports.DataAwsccEc2SpotFleetSpotFleetRequestConfigDataLoadBalancersConfigClassicLoadBalancersConfig = DataAwsccEc2SpotFleetSpotFleetRequestConfigDataLoadBalancersConfigClassicLoadBalancersConfig;
function dataAwsccEc2SpotFleetSpotFleetRequestConfigDataLoadBalancersConfigClassicLoadBalancersConfigToTerraform(struct) {
    if (!cdktf.canInspect(struct)) {
        return struct;
    }
    return {
        classic_load_balancers: cdktf.listMapper(dataAwsccEc2SpotFleetSpotFleetRequestConfigDataLoadBalancersConfigClassicLoadBalancersConfigClassicLoadBalancersToTerraform)(struct.classicLoadBalancers),
    };
}
exports.dataAwsccEc2SpotFleetSpotFleetRequestConfigDataLoadBalancersConfigClassicLoadBalancersConfigToTerraform = dataAwsccEc2SpotFleetSpotFleetRequestConfigDataLoadBalancersConfigClassicLoadBalancersConfigToTerraform;
class DataAwsccEc2SpotFleetSpotFleetRequestConfigDataLoadBalancersConfigTargetGroupsConfigTargetGroups extends cdktf.ComplexComputedList {
    // arn - computed: true, optional: false, required: false
    get arn() {
        return this.getStringAttribute('arn');
    }
}
exports.DataAwsccEc2SpotFleetSpotFleetRequestConfigDataLoadBalancersConfigTargetGroupsConfigTargetGroups = DataAwsccEc2SpotFleetSpotFleetRequestConfigDataLoadBalancersConfigTargetGroupsConfigTargetGroups;
function dataAwsccEc2SpotFleetSpotFleetRequestConfigDataLoadBalancersConfigTargetGroupsConfigTargetGroupsToTerraform(struct) {
    if (!cdktf.canInspect(struct)) {
        return struct;
    }
    return {
        arn: cdktf.stringToTerraform(struct.arn),
    };
}
exports.dataAwsccEc2SpotFleetSpotFleetRequestConfigDataLoadBalancersConfigTargetGroupsConfigTargetGroupsToTerraform = dataAwsccEc2SpotFleetSpotFleetRequestConfigDataLoadBalancersConfigTargetGroupsConfigTargetGroupsToTerraform;
class DataAwsccEc2SpotFleetSpotFleetRequestConfigDataLoadBalancersConfigTargetGroupsConfig extends cdktf.ComplexComputedList {
    // target_groups - computed: true, optional: false, required: false
    get targetGroups() {
        return this.interpolationForAttribute('target_groups');
    }
}
exports.DataAwsccEc2SpotFleetSpotFleetRequestConfigDataLoadBalancersConfigTargetGroupsConfig = DataAwsccEc2SpotFleetSpotFleetRequestConfigDataLoadBalancersConfigTargetGroupsConfig;
function dataAwsccEc2SpotFleetSpotFleetRequestConfigDataLoadBalancersConfigTargetGroupsConfigToTerraform(struct) {
    if (!cdktf.canInspect(struct)) {
        return struct;
    }
    return {
        target_groups: cdktf.listMapper(dataAwsccEc2SpotFleetSpotFleetRequestConfigDataLoadBalancersConfigTargetGroupsConfigTargetGroupsToTerraform)(struct.targetGroups),
    };
}
exports.dataAwsccEc2SpotFleetSpotFleetRequestConfigDataLoadBalancersConfigTargetGroupsConfigToTerraform = dataAwsccEc2SpotFleetSpotFleetRequestConfigDataLoadBalancersConfigTargetGroupsConfigToTerraform;
class DataAwsccEc2SpotFleetSpotFleetRequestConfigDataLoadBalancersConfig extends cdktf.ComplexComputedList {
    // classic_load_balancers_config - computed: true, optional: false, required: false
    get classicLoadBalancersConfig() {
        return this.interpolationForAttribute('classic_load_balancers_config');
    }
    // target_groups_config - computed: true, optional: false, required: false
    get targetGroupsConfig() {
        return this.interpolationForAttribute('target_groups_config');
    }
}
exports.DataAwsccEc2SpotFleetSpotFleetRequestConfigDataLoadBalancersConfig = DataAwsccEc2SpotFleetSpotFleetRequestConfigDataLoadBalancersConfig;
function dataAwsccEc2SpotFleetSpotFleetRequestConfigDataLoadBalancersConfigToTerraform(struct) {
    if (!cdktf.canInspect(struct)) {
        return struct;
    }
    return {
        classic_load_balancers_config: dataAwsccEc2SpotFleetSpotFleetRequestConfigDataLoadBalancersConfigClassicLoadBalancersConfigToTerraform(struct.classicLoadBalancersConfig),
        target_groups_config: dataAwsccEc2SpotFleetSpotFleetRequestConfigDataLoadBalancersConfigTargetGroupsConfigToTerraform(struct.targetGroupsConfig),
    };
}
exports.dataAwsccEc2SpotFleetSpotFleetRequestConfigDataLoadBalancersConfigToTerraform = dataAwsccEc2SpotFleetSpotFleetRequestConfigDataLoadBalancersConfigToTerraform;
class DataAwsccEc2SpotFleetSpotFleetRequestConfigDataSpotMaintenanceStrategiesCapacityRebalance extends cdktf.ComplexComputedList {
    // replacement_strategy - computed: true, optional: false, required: false
    get replacementStrategy() {
        return this.getStringAttribute('replacement_strategy');
    }
}
exports.DataAwsccEc2SpotFleetSpotFleetRequestConfigDataSpotMaintenanceStrategiesCapacityRebalance = DataAwsccEc2SpotFleetSpotFleetRequestConfigDataSpotMaintenanceStrategiesCapacityRebalance;
function dataAwsccEc2SpotFleetSpotFleetRequestConfigDataSpotMaintenanceStrategiesCapacityRebalanceToTerraform(struct) {
    if (!cdktf.canInspect(struct)) {
        return struct;
    }
    return {
        replacement_strategy: cdktf.stringToTerraform(struct.replacementStrategy),
    };
}
exports.dataAwsccEc2SpotFleetSpotFleetRequestConfigDataSpotMaintenanceStrategiesCapacityRebalanceToTerraform = dataAwsccEc2SpotFleetSpotFleetRequestConfigDataSpotMaintenanceStrategiesCapacityRebalanceToTerraform;
class DataAwsccEc2SpotFleetSpotFleetRequestConfigDataSpotMaintenanceStrategies extends cdktf.ComplexComputedList {
    // capacity_rebalance - computed: true, optional: false, required: false
    get capacityRebalance() {
        return this.interpolationForAttribute('capacity_rebalance');
    }
}
exports.DataAwsccEc2SpotFleetSpotFleetRequestConfigDataSpotMaintenanceStrategies = DataAwsccEc2SpotFleetSpotFleetRequestConfigDataSpotMaintenanceStrategies;
function dataAwsccEc2SpotFleetSpotFleetRequestConfigDataSpotMaintenanceStrategiesToTerraform(struct) {
    if (!cdktf.canInspect(struct)) {
        return struct;
    }
    return {
        capacity_rebalance: dataAwsccEc2SpotFleetSpotFleetRequestConfigDataSpotMaintenanceStrategiesCapacityRebalanceToTerraform(struct.capacityRebalance),
    };
}
exports.dataAwsccEc2SpotFleetSpotFleetRequestConfigDataSpotMaintenanceStrategiesToTerraform = dataAwsccEc2SpotFleetSpotFleetRequestConfigDataSpotMaintenanceStrategiesToTerraform;
class DataAwsccEc2SpotFleetSpotFleetRequestConfigData extends cdktf.ComplexComputedList {
    // allocation_strategy - computed: true, optional: false, required: false
    get allocationStrategy() {
        return this.getStringAttribute('allocation_strategy');
    }
    // context - computed: true, optional: false, required: false
    get context() {
        return this.getStringAttribute('context');
    }
    // excess_capacity_termination_policy - computed: true, optional: false, required: false
    get excessCapacityTerminationPolicy() {
        return this.getStringAttribute('excess_capacity_termination_policy');
    }
    // iam_fleet_role - computed: true, optional: false, required: false
    get iamFleetRole() {
        return this.getStringAttribute('iam_fleet_role');
    }
    // instance_interruption_behavior - computed: true, optional: false, required: false
    get instanceInterruptionBehavior() {
        return this.getStringAttribute('instance_interruption_behavior');
    }
    // instance_pools_to_use_count - computed: true, optional: false, required: false
    get instancePoolsToUseCount() {
        return this.getNumberAttribute('instance_pools_to_use_count');
    }
    // launch_specifications - computed: true, optional: false, required: false
    get launchSpecifications() {
        return this.interpolationForAttribute('launch_specifications');
    }
    // launch_template_configs - computed: true, optional: false, required: false
    get launchTemplateConfigs() {
        return this.interpolationForAttribute('launch_template_configs');
    }
    // load_balancers_config - computed: true, optional: false, required: false
    get loadBalancersConfig() {
        return this.interpolationForAttribute('load_balancers_config');
    }
    // on_demand_allocation_strategy - computed: true, optional: false, required: false
    get onDemandAllocationStrategy() {
        return this.getStringAttribute('on_demand_allocation_strategy');
    }
    // on_demand_max_total_price - computed: true, optional: false, required: false
    get onDemandMaxTotalPrice() {
        return this.getStringAttribute('on_demand_max_total_price');
    }
    // on_demand_target_capacity - computed: true, optional: false, required: false
    get onDemandTargetCapacity() {
        return this.getNumberAttribute('on_demand_target_capacity');
    }
    // replace_unhealthy_instances - computed: true, optional: false, required: false
    get replaceUnhealthyInstances() {
        return this.getBooleanAttribute('replace_unhealthy_instances');
    }
    // spot_maintenance_strategies - computed: true, optional: false, required: false
    get spotMaintenanceStrategies() {
        return this.interpolationForAttribute('spot_maintenance_strategies');
    }
    // spot_max_total_price - computed: true, optional: false, required: false
    get spotMaxTotalPrice() {
        return this.getStringAttribute('spot_max_total_price');
    }
    // spot_price - computed: true, optional: false, required: false
    get spotPrice() {
        return this.getStringAttribute('spot_price');
    }
    // target_capacity - computed: true, optional: false, required: false
    get targetCapacity() {
        return this.getNumberAttribute('target_capacity');
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
}
exports.DataAwsccEc2SpotFleetSpotFleetRequestConfigData = DataAwsccEc2SpotFleetSpotFleetRequestConfigData;
function dataAwsccEc2SpotFleetSpotFleetRequestConfigDataToTerraform(struct) {
    if (!cdktf.canInspect(struct)) {
        return struct;
    }
    return {
        allocation_strategy: cdktf.stringToTerraform(struct.allocationStrategy),
        context: cdktf.stringToTerraform(struct.context),
        excess_capacity_termination_policy: cdktf.stringToTerraform(struct.excessCapacityTerminationPolicy),
        iam_fleet_role: cdktf.stringToTerraform(struct.iamFleetRole),
        instance_interruption_behavior: cdktf.stringToTerraform(struct.instanceInterruptionBehavior),
        instance_pools_to_use_count: cdktf.numberToTerraform(struct.instancePoolsToUseCount),
        launch_specifications: cdktf.listMapper(dataAwsccEc2SpotFleetSpotFleetRequestConfigDataLaunchSpecificationsToTerraform)(struct.launchSpecifications),
        launch_template_configs: cdktf.listMapper(dataAwsccEc2SpotFleetSpotFleetRequestConfigDataLaunchTemplateConfigsToTerraform)(struct.launchTemplateConfigs),
        load_balancers_config: dataAwsccEc2SpotFleetSpotFleetRequestConfigDataLoadBalancersConfigToTerraform(struct.loadBalancersConfig),
        on_demand_allocation_strategy: cdktf.stringToTerraform(struct.onDemandAllocationStrategy),
        on_demand_max_total_price: cdktf.stringToTerraform(struct.onDemandMaxTotalPrice),
        on_demand_target_capacity: cdktf.numberToTerraform(struct.onDemandTargetCapacity),
        replace_unhealthy_instances: cdktf.booleanToTerraform(struct.replaceUnhealthyInstances),
        spot_maintenance_strategies: dataAwsccEc2SpotFleetSpotFleetRequestConfigDataSpotMaintenanceStrategiesToTerraform(struct.spotMaintenanceStrategies),
        spot_max_total_price: cdktf.stringToTerraform(struct.spotMaxTotalPrice),
        spot_price: cdktf.stringToTerraform(struct.spotPrice),
        target_capacity: cdktf.numberToTerraform(struct.targetCapacity),
        terminate_instances_with_expiration: cdktf.booleanToTerraform(struct.terminateInstancesWithExpiration),
        type: cdktf.stringToTerraform(struct.type),
        valid_from: cdktf.stringToTerraform(struct.validFrom),
        valid_until: cdktf.stringToTerraform(struct.validUntil),
    };
}
exports.dataAwsccEc2SpotFleetSpotFleetRequestConfigDataToTerraform = dataAwsccEc2SpotFleetSpotFleetRequestConfigDataToTerraform;
/**
* Represents a {@link https://www.terraform.io/docs/providers/awscc/d/ec2_spot_fleet.html awscc_ec2_spot_fleet}
*/
class DataAwsccEc2SpotFleet extends cdktf.TerraformDataSource {
    // ===========
    // INITIALIZER
    // ===========
    /**
    * Create a new {@link https://www.terraform.io/docs/providers/awscc/d/ec2_spot_fleet.html awscc_ec2_spot_fleet} Data Source
    *
    * @param scope The scope in which to define this construct
    * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
    * @param options DataAwsccEc2SpotFleetConfig
    */
    constructor(scope, id, config) {
        super(scope, id, {
            terraformResourceType: 'awscc_ec2_spot_fleet',
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
    // spot_fleet_request_config_data - computed: true, optional: false, required: false
    get spotFleetRequestConfigData() {
        return this.interpolationForAttribute('spot_fleet_request_config_data');
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
exports.DataAwsccEc2SpotFleet = DataAwsccEc2SpotFleet;
// =================
// STATIC PROPERTIES
// =================
DataAwsccEc2SpotFleet.tfResourceType = "awscc_ec2_spot_fleet";
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZGF0YS1hd3NjYy1lYzItc3BvdC1mbGVldC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbImRhdGEtYXdzY2MtZWMyLXNwb3QtZmxlZXQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IjtBQUFBLHNFQUFzRTtBQUN0RSwyQ0FBMkM7OztBQUczQywrQkFBK0I7QUFZL0IsTUFBYSx5RkFBMEYsU0FBUSxLQUFLLENBQUMsbUJBQW1CO0lBRXRJLDJFQUEyRTtJQUMzRSxJQUFXLG1CQUFtQjtRQUM1QixPQUFPLElBQUksQ0FBQyxtQkFBbUIsQ0FBQyx1QkFBdUIsQ0FBQyxDQUFDO0lBQzNELENBQUM7SUFFRCwrREFBK0Q7SUFDL0QsSUFBVyxTQUFTO1FBQ2xCLE9BQU8sSUFBSSxDQUFDLG1CQUFtQixDQUFDLFdBQVcsQ0FBQyxDQUFDO0lBQy9DLENBQUM7SUFFRCwwREFBMEQ7SUFDMUQsSUFBVyxJQUFJO1FBQ2IsT0FBTyxJQUFJLENBQUMsa0JBQWtCLENBQUMsTUFBTSxDQUFDLENBQUM7SUFDekMsQ0FBQztJQUVELGlFQUFpRTtJQUNqRSxJQUFXLFVBQVU7UUFDbkIsT0FBTyxJQUFJLENBQUMsa0JBQWtCLENBQUMsYUFBYSxDQUFDLENBQUM7SUFDaEQsQ0FBQztJQUVELGlFQUFpRTtJQUNqRSxJQUFXLFVBQVU7UUFDbkIsT0FBTyxJQUFJLENBQUMsa0JBQWtCLENBQUMsYUFBYSxDQUFDLENBQUM7SUFDaEQsQ0FBQztJQUVELGlFQUFpRTtJQUNqRSxJQUFXLFVBQVU7UUFDbkIsT0FBTyxJQUFJLENBQUMsa0JBQWtCLENBQUMsYUFBYSxDQUFDLENBQUM7SUFDaEQsQ0FBQztDQUNGO0FBL0JELDhMQStCQztBQUVELFNBQWdCLG9HQUFvRyxDQUFDLE1BQWtHO0lBQ3JOLElBQUksQ0FBQyxLQUFLLENBQUMsVUFBVSxDQUFDLE1BQU0sQ0FBQyxFQUFFO1FBQUUsT0FBTyxNQUFNLENBQUM7S0FBRTtJQUNqRCxPQUFPO1FBQ0wscUJBQXFCLEVBQUUsS0FBSyxDQUFD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O0lBQ0Qsb0RBQW9EO0lBQ3BELElBQVcsT0FBTztRQUNoQixPQUFPLElBQUksQ0FBQyxHQUFHLENBQUE7SUFDakIsQ0FBQztJQUVELG9GQUFvRjtJQUNwRixJQUFXLDBCQUEwQjtRQUNuQyxPQUFPLElBQUksQ0FBQyx5QkFBeUIsQ0FBQyxnQ0FBZ0MsQ0FBUSxDQUFDO0lBQ2pGLENBQUM7SUFFRCxZQUFZO0lBQ1osWUFBWTtJQUNaLFlBQVk7SUFFRixvQkFBb0I7UUFDNUIsT0FBTztZQUNMLEVBQUUsRUFBRSxLQUFLLENBQUMsaUJBQWlCLENBQUMsSUFBSSxDQUFDLEdBQUcsQ0FBQztTQUN0QyxDQUFDO0lBQ0osQ0FBQzs7QUE5REgsc0RBK0RDO0FBN0RDLG9CQUFvQjtBQUNwQixvQkFBb0I7QUFDcEIsb0JBQW9CO0FBQ0csb0NBQWMsR0FBVyxzQkFBc0IsQ0FBQyIsInNvdXJjZXNDb250ZW50IjpbIi8vIGh0dHBzOi8vd3d3LnRlcnJhZm9ybS5pby9kb2NzL3Byb3ZpZGVycy9hd3NjYy9kL2VjMl9zcG90X2ZsZWV0Lmh0bWxcbi8vIGdlbmVyYXRlZCBmcm9tIHRlcnJhZm9ybSByZXNvdXJjZSBzY2hlbWFcblxuaW1wb3J0IHsgQ29uc3RydWN0IH0gZnJvbSAnY29uc3RydWN0cyc7XG5pbXBvcnQgKiBhcyBjZGt0ZiBmcm9tICdjZGt0Zic7XG5cbi8vIENvbmZpZ3VyYXRpb25cblxuZXhwb3J0IGludGVyZmFjZSBEYXRhQXdzY2NFYzJTcG90RmxlZXRDb25maWcgZXh0ZW5kcyBjZGt0Zi5UZXJyYWZvcm1NZXRhQXJndW1lbnRzIHtcbiAgLyoqXG4gICogVW5pcXVlbHkgaWRlbnRpZmllcyB0aGUgcmVzb3VyY2UuXG4gICogXG4gICogRG9jcyBhdCBUZXJyYWZvcm0gUmVnaXN0cnk6IHtAbGluayBodHRwczovL3d3dy50ZXJyYWZvcm0uaW8vZG9jcy9wcm92aWRlcnMvYXdzY2MvZC9lYzJfc3BvdF9mbGVldC5odG1sI2lkIERhdGFBd3NjY0VjMlNwb3RGbGVldCNpZH1cbiAgKi9cbiAgcmVhZG9ubHkgaWQ6IHN0cmluZztcbn1cbmV4cG9ydCBjbGFzcyBEYXRhQXdzY2NFYzJTcG90RmxlZXRTcG90RmxlZXRSZXF1ZXN0Q29uZmlnRGF0YUxhdW5jaFNwZWNpZmljYXRpb25zQmxvY2tEZXZpY2VNYXBwaW5nc0VicyBleHRlbmRzIGNka3RmLkNvbXBsZXhDb21wdXRlZExpc3Qge1xuXG4gIC8vIGRlbGV0ZV9vbl90ZXJtaW5hdGlvbiAtIGNvbXB1dGVkOiB0cnVlLCBvcHRpb25hbDogZmFsc2UsIHJlcXVpcmVkOiBmYWxzZVxuICBwdWJsaWMgZ2V0IGRlbGV0ZU9uVGVybWluYXRpb24oKSB7XG4gICAgcmV0dXJuIHRoaXMuZ2V0Qm9vbGVhbkF0dHJpYnV0ZSgnZGVsZXRlX29uX3Rlcm1pbmF0aW9uJyk7XG4gIH1cblxuICAvLyBlbmNyeXB0ZWQgLSBjb21wdXRlZDogdHJ1ZSwgb3B0aW9uYWw6IGZhbHNlLCByZXF1aXJlZDogZmFsc2VcbiAgcHVibGljIGdldCBlbmNyeXB0ZWQoKSB7XG4gICAgcmV0dXJuIHRoaXMuZ2V0Qm9vbGVhbkF0dHJpYnV0ZSgnZW5jcnlwdGVkJyk7XG4gIH1cblxuICAvLyBpb3BzIC0gY29tcHV0ZWQ6IHRydWUsIG9wdGlvbmFsOiBmYWxzZSwgcmVxdWlyZWQ6IGZhbHNlXG4gIHB1YmxpYyBnZXQgaW9wcygpIHtcbiAgICByZXR1cm4gdGhpcy5nZXROdW1iZXJBdHRyaWJ1dGUoJ2lvcHMnKTtcbiAgfVxuXG4gIC8vIHNuYXBzaG90X2lkIC0gY29tcHV0ZWQ6IHRydWUsIG9wdGlvbmFsOiBmYWxzZSwgcmVxdWlyZWQ6IGZhbHNlXG4gIHB1YmxpYyBnZXQgc25hcHNob3RJZCgpIHtcbiAgICByZXR1cm4gdGhpcy5nZXRTdHJpbmdBdHRyaWJ1dGUoJ3NuYXBzaG90X2lkJyk7XG4gIH1cblxuICAvLyB2b2x1bWVfc2l6ZSAtIGNvbXB1dGVkOiB0cnVlLCBvcHRpb25hbDogZmFsc2UsIHJlcXVpcmVkOiBmYWxzZVxuICBwdWJsaWMgZ2V0IHZvbHVtZVNpemUoKSB7XG4gICAgcmV0dXJuIHRoaXMuZ2V0TnVtYmVyQXR0cmlidXRlKCd2b2x1bWVfc2l6ZScpO1xuICB9XG5cbiAgLy8gdm9sdW1lX3R5cGUgLSBjb21wdXRlZDogdHJ1ZSwgb3B0aW9uYWw6IGZhbHNlLCByZXF1aXJlZDogZmFsc2VcbiAgcHVibGljIGdldCB2b2x1bWVUeXBlKCkge1xuICAgIHJldHVybiB0aGlzLmdldFN0cmluZ0F0dHJpYnV0ZSgndm9sdW1lX3R5cGUnKTtcbiAgfVxufVxuXG5leHBvcnQgZnVuY3Rpb24gZGF0YUF3c2NjRWMyU3BvdEZsZWV0U3BvdEZsZWV0UmVxdWVzdENvbmZpZ0RhdGFMYXVuY2hTcGVjaWZpY2F0aW9uc0Jsb2NrRGV2aWNlTWFwcGluZ3NFYnNUb1RlcnJhZm9ybShzdHJ1Y3Q/OiBEYXRhQXdzY2NFYzJTcG90RmxlZXRTcG90RmxlZXRSZXF1ZXN0Q29uZmlnRGF0YUxhdW5jaFNwZWNpZmljYXRpb25zQmxvY2tEZXZpY2VNYXBwaW5nc0Vicyk6IGFueSB7XG4gIGlmICghY2RrdGYuY2FuSW5zcGVjdChzdHJ1Y3QpKSB7IHJldHVybiBzdHJ1Y3Q7IH1cbiAgcmV0dXJuIHtcbiAgICBkZWxldGVfb25fdGVybWluYXRpb246IGNka3RmLmJvb2xlYW5Ub1RlcnJhZm9ybShzdHJ1Y3QhLmRlbGV0ZU9uVGVybWluYXRpb24pLFxuICAgIGVuY3J5cHRlZDogY2RrdGYuYm9vbGVhblRvVGVycmFmb3JtKHN0cnVjdCEuZW5jcnlwdGVkKSxcbiAgICBpb3BzOiBjZGt0Zi5udW1iZXJUb1RlcnJhZm9ybShzdHJ1Y3QhLmlvcHMpLFxuICAgIHNuYXBzaG90X2lkOiBjZGt0Zi5zdHJpbmdUb1RlcnJhZm9ybShzdHJ1Y3QhLnNuYXBzaG90SWQpLFxuICAgIHZvbHVtZV9zaXplOiBjZGt0Zi5udW1iZXJUb1RlcnJhZm9ybShzdHJ1Y3QhLnZvbHVtZVNpemUpLFxuICAgIHZvbHVtZV90eXBlOiBjZGt0Zi5zdHJpbmdUb1RlcnJhZm9ybShzdHJ1Y3QhLnZvbHVtZVR5cGUpLFxuICB9XG59XG5cbmV4cG9ydCBjbGFzcyBEYXRhQXdzY2NFYzJTcG90RmxlZXRTcG90RmxlZXRSZXF1ZXN0Q29uZmlnRGF0YUxhdW5jaFNwZWNpZmljYXRpb25zQmxvY2tEZXZpY2VNYXBwaW5ncyBleHRlbmRzIGNka3RmLkNvbXBsZXhDb21wdXRlZExpc3Qge1xuXG4gIC8vIGRldmljZV9uYW1lIC0gY29tcHV0ZWQ6IHRydWUsIG9wdGlvbmFsOiBmYWxzZSwgcmVxdWlyZWQ6IGZhbHNlXG4gIHB1YmxpYyBnZXQgZGV2aWNlTmFtZSgpIHtcbiAgICByZXR1cm4gdGhpcy5nZXRTdHJpbmdBdHRyaWJ1dGUoJ2RldmljZV9uYW1lJyk7XG4gIH1cblxuICAvLyBlYnMgLSBjb21wdXRlZDogdHJ1ZSwgb3B0aW9uYWw6IGZhbHNlLCByZXF1aXJlZDogZmFsc2VcbiAgcHVibGljIGdldCBlYnMoKSB7XG4gICAgcmV0dXJuIHRoaXMuaW50ZXJwb2xhdGlvbkZvckF0dHJpYnV0ZSgnZWJzJykgYXMgYW55O1xuICB9XG5cbiAgLy8gbm9fZGV2aWNlIC0gY29tcHV0ZWQ6IHRydWUsIG9wdGlvbmFsOiBmYWxzZSwgcmVxdWlyZWQ6IGZhbHNlXG4gIHB1YmxpYyBnZXQgbm9EZXZpY2UoKSB7XG4gICAgcmV0dXJuIHRoaXMuZ2V0U3RyaW5nQXR0cmlidXRlKCdub19kZXZpY2UnKTtcbiAgfVxuXG4gIC8vIHZpcnR1YWxfbmFtZSAtIGNvbXB1dGVkOiB0cnVlLCBvcHRpb25hbDogZmFsc2UsIHJlcXVpcmVkOiBmYWxzZVxuICBwdWJsaWMgZ2V0IHZpcnR1YWxOYW1lKCkge1xuICAgIHJldHVybiB0aGlzLmdldFN0cmluZ0F0dHJpYnV0ZSgndmlydHVhbF9uYW1lJyk7XG4gIH1cbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGRhdGFBd3NjY0VjMlNwb3RGbGVldFNwb3RGbGVldFJlcXVlc3RDb25maWdEYXRhTGF1bmNoU3BlY2lmaWNhdGlvbnNCbG9ja0RldmljZU1hcHBpbmdzVG9UZXJyYWZvcm0oc3RydWN0PzogRGF0YUF3c2NjRWMyU3BvdEZsZWV0U3BvdEZsZWV0UmVxdWVzdENvbmZpZ0RhdGFMYXVuY2hTcGVjaWZpY2F0aW9uc0Jsb2NrRGV2aWNlTWFwcGluZ3MpOiBhbnkge1xuICBpZiAoIWNka3RmLmNhbkluc3BlY3Qoc3RydWN0KSkgeyByZXR1cm4gc3RydWN0OyB9XG4gIHJldHVybiB7XG4gICAgZGV2aWNlX25hbWU6IGNka3RmLnN0cmluZ1RvVGVycmFmb3JtKHN0cnVjdCEuZGV2aWNlTmFtZSksXG4gICAgZWJzOiBkYXRhQXdzY2NFYzJTcG90RmxlZXRTcG90RmxlZXRSZXF1ZXN0Q29uZmlnRGF0YUxhdW5jaFNwZWNpZmljYXRpb25zQmxvY2tEZXZpY2VNYXBwaW5nc0Vic1RvVGVycmFmb3JtKHN0cnVjdCEuZWJzKSxcbiAgICBub19kZXZpY2U6IGNka3RmLnN0cmluZ1RvVGVycmFmb3JtKHN0cnVjdCEubm9EZXZpY2UpLFxuICAgIHZpcnR1YWxfbmFtZTogY2RrdGYuc3RyaW5nVG9UZXJyYWZvcm0oc3RydWN0IS52aXJ0dWFsTmFtZSksXG4gIH1cbn1cblxuZXhwb3J0IGNsYXNzIERhdGFBd3NjY0VjMlNwb3RGbGVldFNwb3RGbGVldFJlcXVlc3RDb25maWdEYXRhTGF1bmNoU3BlY2lmaWNhdGlvbnNJYW1JbnN0YW5jZVByb2ZpbGUgZXh0ZW5kcyBjZGt0Zi5Db21wbGV4Q29tcHV0ZWRMaXN0IHtcblxuICAvLyBhcm4gLSBjb21wdXRlZDogdHJ1ZSwgb3B0aW9uYWw6IGZhbHNlLCByZXF1aXJlZDogZmFsc2VcbiAgcHVibGljIGdldCBhcm4oKSB7XG4gICAgcmV0dXJuIHRoaXMuZ2V0U3RyaW5nQXR0cmlidXRlKCdhcm4nKTtcbiAgfVxufVxuXG5leHBvcnQgZnVuY3Rpb24gZGF0YUF3c2NjRWMyU3BvdEZsZWV0U3BvdEZsZWV0UmVxdWVzdENvbmZpZ0RhdGFMYXVuY2hTcGVjaWZpY2F0aW9uc0lhbUluc3RhbmNlUHJvZmlsZVRvVGVycmFmb3JtKHN0cnVjdD86IERhdGFBd3NjY0VjMlNwb3RGbGVldFNwb3RGbGVldFJlcXVlc3RDb25maWdEYXRhTGF1bmNoU3BlY2lmaWNhdGlvbnNJYW1JbnN0YW5jZVByb2ZpbGUpOiBhbnkge1xuICBpZiAoIWNka3RmLmNhbkluc3BlY3Qoc3RydWN0KSkgeyByZXR1cm4gc3RydWN0OyB9XG4gIHJldHVybiB7XG4gICAgYXJuOiBjZGt0Zi5zdHJpbmdUb1RlcnJhZm9ybShzdHJ1Y3QhLmFybiksXG4gIH1cbn1cblxuZXhwb3J0IGNsYXNzIERhdGFBd3NjY0VjMlNwb3RGbGVldFNwb3RGbGVldFJlcXVlc3RDb25maWdEYXRhTGF1bmNoU3BlY2lmaWNhdGlvbnNNb25pdG9yaW5nIGV4dGVuZHMgY2RrdGYuQ29tcGxleENvbXB1dGVkTGlzdCB7XG5cbiAgLy8gZW5hYmxlZCAtIGNvbXB1dGVkOiB0cnVlLCBvcHRpb25hbDogZmFsc2UsIHJlcXVpcmVkOiBmYWxzZVxuICBwdWJsaWMgZ2V0IGVuYWJsZWQoKSB7XG4gICAgcmV0dXJuIHRoaXMuZ2V0Qm9vbGVhbkF0dHJpYnV0ZSgnZW5hYmxlZCcpO1xuICB9XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBkYXRhQXdzY2NFYzJTcG90RmxlZXRTcG90RmxlZXRSZXF1ZXN0Q29uZmlnRGF0YUxhdW5jaFNwZWNpZmljYXRpb25zTW9uaXRvcmluZ1RvVGVycmFmb3JtKHN0cnVjdD86IERhdGFBd3NjY0VjMlNwb3RGbGVldFNwb3RGbGVldFJlcXVlc3RDb25maWdEYXRhTGF1bmNoU3BlY2lmaWNhdGlvbnNNb25pdG9yaW5nKTogYW55IHtcbiAgaWYgKCFjZGt0Zi5jYW5JbnNwZWN0KHN0cnVjdCkpIHsgcmV0dXJuIHN0cnVjdDsgfVxuICByZXR1cm4ge1xuICAgIGVuYWJsZWQ6IGNka3RmLmJvb2xlYW5Ub1RlcnJhZm9ybShzdHJ1Y3QhLmVuYWJsZWQpLFxuICB9XG59XG5cbmV4cG9ydCBjbGFzcyBEYXRhQXdzY2NFYzJTcG90RmxlZXRTcG90RmxlZXRSZXF1ZXN0Q29uZmlnRGF0YUxhdW5jaFNwZWNpZmljYXRpb25zTmV0d29ya0ludGVyZmFjZXNJcHY2QWRkcmVzc2VzIGV4dGVuZHMgY2RrdGYuQ29tcGxleENvbXB1dGVkTGlzdCB7XG5cbiAgLy8gaXB2XzZfYWRkcmVzcyAtIGNvbXB1dGVkOiB0cnVlLCBvcHRpb25hbDogZmFsc2UsIHJlcXVpcmVkOiBmYWxzZVxuICBwdWJsaWMgZ2V0IGlwdjZBZGRyZXNzKCkge1xuICAgIHJldHVybiB0aGlzLmdldFN0cmluZ0F0dHJpYnV0ZSgnaXB2XzZfYWRkcmVzcycpO1xuICB9XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBkYXRhQXdzY2NFYzJTcG90RmxlZXRTcG90RmxlZXRSZXF1ZXN0Q29uZmlnRGF0YUxhdW5jaFNwZWNpZmljYXRpb25zTmV0d29ya0ludGVyZmFjZXNJcHY2QWRkcmVzc2VzVG9UZXJyYWZvcm0oc3RydWN0PzogRGF0YUF3c2NjRWMyU3BvdEZsZWV0U3BvdEZsZWV0UmVxdWVzdENvbmZpZ0RhdGFMYXVuY2hTcGVjaWZpY2F0aW9uc05ldHdvcmtJbnRlcmZhY2VzSXB2NkFkZHJlc3Nlcyk6IGFueSB7XG4gIGlmICghY2RrdGYuY2FuSW5zcGVjdChzdHJ1Y3QpKSB7IHJldHVybiBzdHJ1Y3Q7IH1cbiAgcmV0dXJuIHtcbiAgICBpcHZfNl9hZGRyZXNzOiBjZGt0Zi5zdHJpbmdUb1RlcnJhZm9ybShzdHJ1Y3QhLmlwdjZBZGRyZXNzKSxcbiAgfVxufVxuXG5leHBvcnQgY2xhc3MgRGF0YUF3c2NjRWMyU3BvdEZsZWV0U3BvdEZsZWV0UmVxdWVzdENvbmZpZ0RhdGFMYXVuY2hTcGVjaWZpY2F0aW9uc05ldHdvcmtJbnRlcmZhY2VzUHJpdmF0ZUlwQWRkcmVzc2VzIGV4dGVuZHMgY2RrdGYuQ29tcGxleENvbXB1dGVkTGlzdCB7XG5cbiAgLy8gcHJpbWFyeSAtIGNvbXB1dGVkOiB0cnVlLCBvcHRpb25hbDogZmFsc2UsIHJlcXVpcmVkOiBmYWxzZVxuICBwdWJsaWMgZ2V0IHByaW1hcnkoKSB7XG4gICAgcmV0dXJuIHRoaXMuZ2V0Qm9vbGVhbkF0dHJpYnV0ZSgncHJpbWFyeScpO1xuICB9XG5cbiAgLy8gcHJpdmF0ZV9pcF9hZGRyZXNzIC0gY29tcHV0ZWQ6IHRydWUsIG9wdGlvbmFsOiBmYWxzZSwgcmVxdWlyZWQ6IGZhbHNlXG4gIHB1YmxpYyBnZXQgcHJpdmF0ZUlwQWRkcmVzcygpIHtcbiAgICByZXR1cm4gdGhpcy5nZXRTdHJpbmdBdHRyaWJ1dGUoJ3ByaXZhdGVfaXBfYWRkcmVzcycpO1xuICB9XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBkYXRhQXdzY2NFYzJTcG90RmxlZXRTcG90RmxlZXRSZXF1ZXN0Q29uZmlnRGF0YUxhdW5jaFNwZWNpZmljYXRpb25zTmV0d29ya0ludGVyZmFjZXNQcml2YXRlSXBBZGRyZXNzZXNUb1RlcnJhZm9ybShzdHJ1Y3Q/OiBEYXRhQXdzY2NFYzJTcG90RmxlZXRTcG90RmxlZXRSZXF1ZXN0Q29uZmlnRGF0YUxhdW5jaFNwZWNpZmljYXRpb25zTmV0d29ya0ludGVyZmFjZXNQcml2YXRlSXBBZGRyZXNzZXMpOiBhbnkge1xuICBpZiAoIWNka3RmLmNhbkluc3BlY3Qoc3RydWN0KSkgeyByZXR1cm4gc3RydWN0OyB9XG4gIHJldHVybiB7XG4gICAgcHJpbWFyeTogY2RrdGYuYm9vbGVhblRvVGVycmFmb3JtKHN0cnVjdCEucHJpbWFyeSksXG4gICAgcHJpdmF0ZV9pcF9hZGRyZXNzOiBjZGt0Zi5zdHJpbmdUb1RlcnJhZm9ybShzdHJ1Y3QhLnByaXZhdGVJcEFkZHJlc3MpLFxuICB9XG59XG5cbmV4cG9ydCBjbGFzcyBEYXRhQXdzY2NFYzJTcG90RmxlZXRTcG90RmxlZXRSZXF1ZXN0Q29uZmlnRGF0YUxhdW5jaFNwZWNpZmljYXRpb25zTmV0d29ya0ludGVyZmFjZXMgZXh0ZW5kcyBjZGt0Zi5Db21wbGV4Q29tcHV0ZWRMaXN0IHtcblxuICAvLyBhc3NvY2lhdGVfcHVibGljX2lwX2FkZHJlc3MgLSBjb21wdXRlZDogdHJ1ZSwgb3B0aW9uYWw6IGZhbHNlLCByZXF1aXJlZDogZmFsc2VcbiAgcHVibGljIGdldCBhc3NvY2lhdGVQdWJsaWNJcEFkZHJlc3MoKSB7XG4gICAgcmV0dXJuIHRoaXMuZ2V0Qm9vbGVhbkF0dHJpYnV0ZSgnYXNzb2NpYXRlX3B1YmxpY19pcF9hZGRyZXNzJyk7XG4gIH1cblxuICAvLyBkZWxldGVfb25fdGVybWluYXRpb24gLSBjb21wdXRlZDogdHJ1ZSwgb3B0aW9uYWw6IGZhbHNlLCByZXF1aXJlZDogZmFsc2VcbiAgcHVibGljIGdldCBkZWxldGVPblRlcm1pbmF0aW9uKCkge1xuICAgIHJldHVybiB0aGlzLmdldEJvb2xlYW5BdHRyaWJ1dGUoJ2RlbGV0ZV9vbl90ZXJtaW5hdGlvbicpO1xuICB9XG5cbiAgLy8gZGVzY3JpcHRpb24gLSBjb21wdXRlZDogdHJ1ZSwgb3B0aW9uYWw6IGZhbHNlLCByZXF1aXJlZDogZmFsc2VcbiAgcHVibGljIGdldCBkZXNjcmlwdGlvbigpIHtcbiAgICByZXR1cm4gdGhpcy5nZXRTdHJpbmdBdHRyaWJ1dGUoJ2Rlc2NyaXB0aW9uJyk7XG4gIH1cblxuICAvLyBkZXZpY2VfaW5kZXggLSBjb21wdXRlZDogdHJ1ZSwgb3B0aW9uYWw6IGZhbHNlLCByZXF1aXJlZDogZmFsc2VcbiAgcHVibGljIGdldCBkZXZpY2VJbmRleCgpIHtcbiAgICByZXR1cm4gdGhpcy5nZXROdW1iZXJBdHRyaWJ1dGUoJ2RldmljZV9pbmRleCcpO1xuICB9XG5cbiAgLy8gZ3JvdXBzIC0gY29tcHV0ZWQ6IHRydWUsIG9wdGlvbmFsOiBmYWxzZSwgcmVxdWlyZWQ6IGZhbHNlXG4gIHB1YmxpYyBnZXQgZ3JvdXBzKCkge1xuICAgIHJldHVybiB0aGlzLmdldExpc3RBdHRyaWJ1dGUoJ2dyb3VwcycpO1xuICB9XG5cbiAgLy8gaXB2XzZfYWRkcmVzc19jb3VudCAtIGNvbXB1dGVkOiB0cnVlLCBvcHRpb25hbDogZmFsc2UsIHJlcXVpcmVkOiBmYWxzZVxuICBwdWJsaWMgZ2V0IGlwdjZBZGRyZXNzQ291bnQoKSB7XG4gICAgcmV0dXJuIHRoaXMuZ2V0TnVtYmVyQXR0cmlidXRlKCdpcHZfNl9hZGRyZXNzX2NvdW50Jyk7XG4gIH1cblxuICAvLyBpcHZfNl9hZGRyZXNzZXMgLSBjb21wdXRlZDogdHJ1ZSwgb3B0aW9uYWw6IGZhbHNlLCByZXF1aXJlZDogZmFsc2VcbiAgcHVibGljIGdldCBpcHY2QWRkcmVzc2VzKCkge1xuICAgIHJldHVybiB0aGlzLmludGVycG9sYXRpb25Gb3JBdHRyaWJ1dGUoJ2lwdl82X2FkZHJlc3NlcycpIGFzIGFueTtcbiAgfVxuXG4gIC8vIG5ldHdvcmtfaW50ZXJmYWNlX2lkIC0gY29tcHV0ZWQ6IHRydWUsIG9wdGlvbmFsOiBmYWxzZSwgcmVxdWlyZWQ6IGZhbHNlXG4gIHB1YmxpYyBnZXQgbmV0d29ya0ludGVyZmFjZUlkKCkge1xuICAgIHJldHVybiB0aGlzLmdldFN0cmluZ0F0dHJpYnV0ZSgnbmV0d29ya19pbnRlcmZhY2VfaWQnKTtcbiAgfVxuXG4gIC8vIHByaXZhdGVfaXBfYWRkcmVzc2VzIC0gY29tcHV0ZWQ6IHRydWUsIG9wdGlvbmFsOiBmYWxzZSwgcmVxdWlyZWQ6IGZhbHNlXG4gIHB1YmxpYyBnZXQgcHJpdmF0ZUlwQWRkcmVzc2VzKCkge1xuICAgIHJldHVybiB0aGlzLmludGVycG9sYXRpb25Gb3JBdHRyaWJ1dGUoJ3ByaXZhdGVfaXBfYWRkcmVzc2VzJykgYXMgYW55O1xuICB9XG5cbiAgLy8gc2Vjb25kYXJ5X3ByaXZhdGVfaXBfYWRkcmVzc19jb3VudCAtIGNvbXB1dGVkOiB0cnVlLCBvcHRpb25hbDogZmFsc2UsIHJlcXVpcmVkOiBmYWxzZVxuICBwdWJsaWMgZ2V0IHNlY29uZGFyeVByaXZhdGVJcEFkZHJlc3NDb3VudCgpIHtcbiAgICByZXR1cm4gdGhpcy5nZXROdW1iZXJBdHRyaWJ1dGUoJ3NlY29uZGFyeV9wcml2YXRlX2lwX2FkZHJlc3NfY291bnQnKTtcbiAgfVxuXG4gIC8vIHN1Ym5ldF9pZCAtIGNvbXB1dGVkOiB0cnVlLCBvcHRpb25hbDogZmFsc2UsIHJlcXVpcmVkOiBmYWxzZVxuICBwdWJsaWMgZ2V0IHN1Ym5ldElkKCkge1xuICAgIHJldHVybiB0aGlzLmdldFN0cmluZ0F0dHJpYnV0ZSgnc3VibmV0X2lkJyk7XG4gIH1cbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGRhdGFBd3NjY0VjMlNwb3RGbGVldFNwb3RGbGVldFJlcXVlc3RDb25maWdEYXRhTGF1bmNoU3BlY2lmaWNhdGlvbnNOZXR3b3JrSW50ZXJmYWNlc1RvVGVycmFmb3JtKHN0cnVjdD86IERhdGFBd3NjY0VjMlNwb3RGbGVldFNwb3RGbGVldFJlcXVlc3RDb25maWdEYXRhTGF1bmNoU3BlY2lmaWNhdGlvbnNOZXR3b3JrSW50ZXJmYWNlcyk6IGFueSB7XG4gIGlmICghY2RrdGYuY2FuSW5zcGVjdChzdHJ1Y3QpKSB7IHJldHVybiBzdHJ1Y3Q7IH1cbiAgcmV0dXJuIHtcbiAgICBhc3NvY2lhdGVfcHVibGljX2lwX2FkZHJlc3M6IGNka3RmLmJvb2xlYW5Ub1RlcnJhZm9ybShzdHJ1Y3QhLmFzc29jaWF0ZVB1YmxpY0lwQWRkcmVzcyksXG4gICAgZGVsZXRlX29uX3Rlcm1pbmF0aW9uOiBjZGt0Zi5ib29sZWFuVG9UZXJyYWZvcm0oc3RydWN0IS5kZWxldGVPblRlcm1pbmF0aW9uKSxcbiAgICBkZXNjcmlwdGlvbjogY2RrdGYuc3RyaW5nVG9UZXJyYWZvcm0oc3RydWN0IS5kZXNjcmlwdGlvbiksXG4gICAgZGV2aWNlX2luZGV4OiBjZGt0Zi5udW1iZXJUb1RlcnJhZm9ybShzdHJ1Y3QhLmRldmljZUluZGV4KSxcbiAgICBncm91cHM6IGNka3RmLmxpc3RNYXBwZXIoY2RrdGYuc3RyaW5nVG9UZXJyYWZvcm0pKHN0cnVjdCEuZ3JvdXBzKSxcbiAgICBpcHZfNl9hZGRyZXNzX2NvdW50OiBjZGt0Zi5udW1iZXJUb1RlcnJhZm9ybShzdHJ1Y3QhLmlwdjZBZGRyZXNzQ291bnQpLFxuICAgIGlwdl82X2FkZHJlc3NlczogY2RrdGYubGlzdE1hcHBlcihkYXRhQXdzY2NFYzJTcG90RmxlZXRTcG90RmxlZXRSZXF1ZXN0Q29uZmlnRGF0YUxhdW5jaFNwZWNpZmljYXRpb25zTmV0d29ya0ludGVyZmFjZXNJcHY2QWRkcmVzc2VzVG9UZXJyYWZvcm0pKHN0cnVjdCEuaXB2NkFkZHJlc3NlcyksXG4gICAgbmV0d29ya19pbnRlcmZhY2VfaWQ6IGNka3RmLnN0cmluZ1RvVGVycmFmb3JtKHN0cnVjdCEubmV0d29ya0ludGVyZmFjZUlkKSxcbiAgICBwcml2YXRlX2lwX2FkZHJlc3NlczogY2RrdGYubGlzdE1hcHBlcihkYXRhQXdzY2NFYzJTcG90RmxlZXRTcG90RmxlZXRSZXF1ZXN0Q29uZmlnRGF0YUxhdW5jaFNwZWNpZmljYXRpb25zTmV0d29ya0ludGVyZmFjZXNQcml2YXRlSXBBZGRyZXNzZXNUb1RlcnJhZm9ybSkoc3RydWN0IS5wcml2YXRlSXBBZGRyZXNzZXMpLFxuICAgIHNlY29uZGFyeV9wcml2YXRlX2lwX2FkZHJlc3NfY291bnQ6IGNka3RmLm51bWJlclRvVGVycmFmb3JtKHN0cnVjdCEuc2Vjb25kYXJ5UHJpdmF0ZUlwQWRkcmVzc0NvdW50KSxcbiAgICBzdWJuZXRfaWQ6IGNka3RmLnN0cmluZ1RvVGVycmFmb3JtKHN0cnVjdCEuc3VibmV0SWQpLFxuICB9XG59XG5cbmV4cG9ydCBjbGFzcyBEYXRhQXdzY2NFYzJTcG90RmxlZXRTcG90RmxlZXRSZXF1ZXN0Q29uZmlnRGF0YUxhdW5jaFNwZWNpZmljYXRpb25zUGxhY2VtZW50IGV4dGVuZHMgY2RrdGYuQ29tcGxleENvbXB1dGVkTGlzdCB7XG5cbiAgLy8gYXZhaWxhYmlsaXR5X3pvbmUgLSBjb21wdXRlZDogdHJ1ZSwgb3B0aW9uYWw6IGZhbHNlLCByZXF1aXJlZDogZmFsc2VcbiAgcHVibGljIGdldCBhdmFpbGFiaWxpdHlab25lKCkge1xuICAgIHJldHVybiB0aGlzLmdldFN0cmluZ0F0dHJpYnV0ZSgnYXZhaWxhYmlsaXR5X3pvbmUnKTtcbiAgfVxuXG4gIC8vIGdyb3VwX25hbWUgLSBjb21wdXRlZDogdHJ1ZSwgb3B0aW9uYWw6IGZhbHNlLCByZXF1aXJlZDogZmFsc2VcbiAgcHVibGljIGdldCBncm91cE5hbWUoKSB7XG4gICAgcmV0dXJuIHRoaXMuZ2V0U3RyaW5nQXR0cmlidXRlKCdncm91cF9uYW1lJyk7XG4gIH1cblxuICAvLyB0ZW5hbmN5IC0gY29tcHV0ZWQ6IHRydWUsIG9wdGlvbmFsOiBmYWxzZSwgcmVxdWlyZWQ6IGZhbHNlXG4gIHB1YmxpYyBnZXQgdGVuYW5jeSgpIHtcbiAgICByZXR1cm4gdGhpcy5nZXRTdHJpbmdBdHRyaWJ1dGUoJ3RlbmFuY3knKTtcbiAgfVxufVxuXG5leHBvcnQgZnVuY3Rpb24gZGF0YUF3c2NjRWMyU3BvdEZsZWV0U3BvdEZsZWV0UmVxdWVzdENvbmZpZ0RhdGFMYXVuY2hTcGVjaWZpY2F0aW9uc1BsYWNlbWVudFRvVGVycmFmb3JtKHN0cnVjdD86IERhdGFBd3NjY0VjMlNwb3RGbGVldFNwb3RGbGVldFJlcXVlc3RDb25maWdEYXRhTGF1bmNoU3BlY2lmaWNhdGlvbnNQbGFjZW1lbnQpOiBhbnkge1xuICBpZiAoIWNka3RmLmNhbkluc3BlY3Qoc3RydWN0KSkgeyByZXR1cm4gc3RydWN0OyB9XG4gIHJldHVybiB7XG4gICAgYXZhaWxhYmlsaXR5X3pvbmU6IGNka3RmLnN0cmluZ1RvVGVycmFmb3JtKHN0cnVjdCEuYXZhaWxhYmlsaXR5Wm9uZSksXG4gICAgZ3JvdXBfbmFtZTogY2RrdGYuc3RyaW5nVG9UZXJyYWZvcm0oc3RydWN0IS5ncm91cE5hbWUpLFxuICAgIHRlbmFuY3k6IGNka3RmLnN0cmluZ1RvVGVycmFmb3JtKHN0cnVjdCEudGVuYW5jeSksXG4gIH1cbn1cblxuZXhwb3J0IGNsYXNzIERhdGFBd3NjY0VjMlNwb3RGbGVldFNwb3RGbGVldFJlcXVlc3RDb25maWdEYXRhTGF1bmNoU3BlY2lmaWNhdGlvbnNTZWN1cml0eUdyb3VwcyBleHRlbmRzIGNka3RmLkNvbXBsZXhDb21wdXRlZExpc3Qge1xuXG4gIC8vIGdyb3VwX2lkIC0gY29tcHV0ZWQ6IHRydWUsIG9wdGlvbmFsOiBmYWxzZSwgcmVxdWlyZWQ6IGZhbHNlXG4gIHB1YmxpYyBnZXQgZ3JvdXBJZCgpIHtcbiAgICByZXR1cm4gdGhpcy5nZXRTdHJpbmdBdHRyaWJ1dGUoJ2dyb3VwX2lkJyk7XG4gIH1cbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGRhdGFBd3NjY0VjMlNwb3RGbGVldFNwb3RGbGVldFJlcXVlc3RDb25maWdEYXRhTGF1bmNoU3BlY2lmaWNhdGlvbnNTZWN1cml0eUdyb3Vwc1RvVGVycmFmb3JtKHN0cnVjdD86IERhdGFBd3NjY0VjMlNwb3RGbGVldFNwb3RGbGVldFJlcXVlc3RDb25maWdEYXRhTGF1bmNoU3BlY2lmaWNhdGlvbnNTZWN1cml0eUdyb3Vwcyk6IGFueSB7XG4gIGlmICghY2RrdGYuY2FuSW5zcGVjdChzdHJ1Y3QpKSB7IHJldHVybiBzdHJ1Y3Q7IH1cbiAgcmV0dXJuIHtcbiAgICBncm91cF9pZDogY2RrdGYuc3RyaW5nVG9UZXJyYWZvcm0oc3RydWN0IS5ncm91cElkKSxcbiAgfVxufVxuXG5leHBvcnQgY2xhc3MgRGF0YUF3c2NjRWMyU3BvdEZsZWV0U3BvdEZsZWV0UmVxdWVzdENvbmZpZ0RhdGFMYXVuY2hTcGVjaWZpY2F0aW9uc1RhZ1NwZWNpZmljYXRpb25zVGFncyBleHRlbmRzIGNka3RmLkNvbXBsZXhDb21wdXRlZExpc3Qge1xuXG4gIC8vIGtleSAtIGNvbXB1dGVkOiB0cnVlLCBvcHRpb25hbDogZmFsc2UsIHJlcXVpcmVkOiBmYWxzZVxuICBwdWJsaWMgZ2V0IGtleSgpIHtcbiAgICByZXR1cm4gdGhpcy5nZXRTdHJpbmdBdHRyaWJ1dGUoJ2tleScpO1xuICB9XG5cbiAgLy8gdmFsdWUgLSBjb21wdXRlZDogdHJ1ZSwgb3B0aW9uYWw6IGZhbHNlLCByZXF1aXJlZDogZmFsc2VcbiAgcHVibGljIGdldCB2YWx1ZSgpIHtcbiAgICByZXR1cm4gdGhpcy5nZXRTdHJpbmdBdHRyaWJ1dGUoJ3ZhbHVlJyk7XG4gIH1cbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGRhdGFBd3NjY0VjMlNwb3RGbGVldFNwb3RGbGVldFJlcXVlc3RDb25maWdEYXRhTGF1bmNoU3BlY2lmaWNhdGlvbnNUYWdTcGVjaWZpY2F0aW9uc1RhZ3NUb1RlcnJhZm9ybShzdHJ1Y3Q/OiBEYXRhQXdzY2NFYzJTcG90RmxlZXRTcG90RmxlZXRSZXF1ZXN0Q29uZmlnRGF0YUxhdW5jaFNwZWNpZmljYXRpb25zVGFnU3BlY2lmaWNhdGlvbnNUYWdzKTogYW55IHtcbiAgaWYgKCFjZGt0Zi5jYW5JbnNwZWN0KHN0cnVjdCkpIHsgcmV0dXJuIHN0cnVjdDsgfVxuICByZXR1cm4ge1xuICAgIGtleTogY2RrdGYuc3RyaW5nVG9UZXJyYWZvcm0oc3RydWN0IS5rZXkpLFxuICAgIHZhbHVlOiBjZGt0Zi5zdHJpbmdUb1RlcnJhZm9ybShzdHJ1Y3QhLnZhbHVlKSxcbiAgfVxufVxuXG5leHBvcnQgY2xhc3MgRGF0YUF3c2NjRWMyU3BvdEZsZWV0U3BvdEZsZWV0UmVxdWVzdENvbmZpZ0RhdGFMYXVuY2hTcGVjaWZpY2F0aW9uc1RhZ1NwZWNpZmljYXRpb25zIGV4dGVuZHMgY2RrdGYuQ29tcGxleENvbXB1dGVkTGlzdCB7XG5cbiAgLy8gcmVzb3VyY2VfdHlwZSAtIGNvbXB1dGVkOiB0cnVlLCBvcHRpb25hbDogZmFsc2UsIHJlcXVpcmVkOiBmYWxzZVxuICBwdWJsaWMgZ2V0IHJlc291cmNlVHlwZSgpIHtcbiAgICByZXR1cm4gdGhpcy5nZXRTdHJpbmdBdHRyaWJ1dGUoJ3Jlc291cmNlX3R5cGUnKTtcbiAgfVxuXG4gIC8vIHRhZ3MgLSBjb21wdXRlZDogdHJ1ZSwgb3B0aW9uYWw6IGZhbHNlLCByZXF1aXJlZDogZmFsc2VcbiAgcHVibGljIGdldCB0YWdzKCkge1xuICAgIHJldHVybiB0aGlzLmludGVycG9sYXRpb25Gb3JBdHRyaWJ1dGUoJ3RhZ3MnKSBhcyBhbnk7XG4gIH1cbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGRhdGFBd3NjY0VjMlNwb3RGbGVldFNwb3RGbGVldFJlcXVlc3RDb25maWdEYXRhTGF1bmNoU3BlY2lmaWNhdGlvbnNUYWdTcGVjaWZpY2F0aW9uc1RvVGVycmFmb3JtKHN0cnVjdD86IERhdGFBd3NjY0VjMlNwb3RGbGVldFNwb3RGbGVldFJlcXVlc3RDb25maWdEYXRhTGF1bmNoU3BlY2lmaWNhdGlvbnNUYWdTcGVjaWZpY2F0aW9ucyk6IGFueSB7XG4gIGlmICghY2RrdGYuY2FuSW5zcGVjdChzdHJ1Y3QpKSB7IHJldHVybiBzdHJ1Y3Q7IH1cbiAgcmV0dXJuIHtcbiAgICByZXNvdXJjZV90eXBlOiBjZGt0Zi5zdHJpbmdUb1RlcnJhZm9ybShzdHJ1Y3QhLnJlc291cmNlVHlwZSksXG4gICAgdGFnczogY2RrdGYubGlzdE1hcHBlcihkYXRhQXdzY2NFYzJTcG90RmxlZXRTcG90RmxlZXRSZXF1ZXN0Q29uZmlnRGF0YUxhdW5jaFNwZWNpZmljYXRpb25zVGFnU3BlY2lmaWNhdGlvbnNUYWdzVG9UZXJyYWZvcm0pKHN0cnVjdCEudGFncyksXG4gIH1cbn1cblxuZXhwb3J0IGNsYXNzIERhdGFBd3NjY0VjMlNwb3RGbGVldFNwb3RGbGVldFJlcXVlc3RDb25maWdEYXRhTGF1bmNoU3BlY2lmaWNhdGlvbnMgZXh0ZW5kcyBjZGt0Zi5Db21wbGV4Q29tcHV0ZWRMaXN0IHtcblxuICAvLyBibG9ja19kZXZpY2VfbWFwcGluZ3MgLSBjb21wdXRlZDogdHJ1ZSwgb3B0aW9uYWw6IGZhbHNlLCByZXF1aXJlZDogZmFsc2VcbiAgcHVibGljIGdldCBibG9ja0RldmljZU1hcHBpbmdzKCkge1xuICAgIHJldHVybiB0aGlzLmludGVycG9sYXRpb25Gb3JBdHRyaWJ1dGUoJ2Jsb2NrX2RldmljZV9tYXBwaW5ncycpIGFzIGFueTtcbiAgfVxuXG4gIC8vIGVic19vcHRpbWl6ZWQgLSBjb21wdXRlZDogdHJ1ZSwgb3B0aW9uYWw6IGZhbHNlLCByZXF1aXJlZDogZmFsc2VcbiAgcHVibGljIGdldCBlYnNPcHRpbWl6ZWQoKSB7XG4gICAgcmV0dXJuIHRoaXMuZ2V0Qm9vbGVhbkF0dHJpYnV0ZSgnZWJzX29wdGltaXplZCcpO1xuICB9XG5cbiAgLy8gaWFtX2luc3RhbmNlX3Byb2ZpbGUgLSBjb21wdXRlZDogdHJ1ZSwgb3B0aW9uYWw6IGZhbHNlLCByZXF1aXJlZDogZmFsc2VcbiAgcHVibGljIGdldCBpYW1JbnN0YW5jZVByb2ZpbGUoKSB7XG4gICAgcmV0dXJuIHRoaXMuaW50ZXJwb2xhdGlvbkZvckF0dHJpYnV0ZSgnaWFtX2luc3RhbmNlX3Byb2ZpbGUnKSBhcyBhbnk7XG4gIH1cblxuICAvLyBpbWFnZV9pZCAtIGNvbXB1dGVkOiB0cnVlLCBvcHRpb25hbDogZmFsc2UsIHJlcXVpcmVkOiBmYWxzZVxuICBwdWJsaWMgZ2V0IGltYWdlSWQoKSB7XG4gICAgcmV0dXJuIHRoaXMuZ2V0U3RyaW5nQXR0cmlidXRlKCdpbWFnZV9pZCcpO1xuICB9XG5cbiAgLy8gaW5zdGFuY2VfdHlwZSAtIGNvbXB1dGVkOiB0cnVlLCBvcHRpb25hbDogZmFsc2UsIHJlcXVpcmVkOiBmYWxzZVxuICBwdWJsaWMgZ2V0IGluc3RhbmNlVHlwZSgpIHtcbiAgICByZXR1cm4gdGhpcy5nZXRTdHJpbmdBdHRyaWJ1dGUoJ2luc3RhbmNlX3R5cGUnKTtcbiAgfVxuXG4gIC8vIGtlcm5lbF9pZCAtIGNvbXB1dGVkOiB0cnVlLCBvcHRpb25hbDogZmFsc2UsIHJlcXVpcmVkOiBmYWxzZVxuICBwdWJsaWMgZ2V0IGtlcm5lbElkKCkge1xuICAgIHJldHVybiB0aGlzLmdldFN0cmluZ0F0dHJpYnV0ZSgna2VybmVsX2lkJyk7XG4gIH1cblxuICAvLyBrZXlfbmFtZSAtIGNvbXB1dGVkOiB0cnVlLCBvcHRpb25hbDogZmFsc2UsIHJlcXVpcmVkOiBmYWxzZVxuICBwdWJsaWMgZ2V0IGtleU5hbWUoKSB7XG4gICAgcmV0dXJuIHRoaXMuZ2V0U3RyaW5nQXR0cmlidXRlKCdrZXlfbmFtZScpO1xuICB9XG5cbiAgLy8gbW9uaXRvcmluZyAtIGNvbXB1dGVkOiB0cnVlLCBvcHRpb25hbDogZmFsc2UsIHJlcXVpcmVkOiBmYWxzZVxuICBwdWJsaWMgZ2V0IG1vbml0b3JpbmcoKSB7XG4gICAgcmV0dXJuIHRoaXMuaW50ZXJwb2xhdGlvbkZvckF0dHJpYnV0ZSgnbW9uaXRvcmluZycpIGFzIGFueTtcbiAgfVxuXG4gIC8vIG5ldHdvcmtfaW50ZXJmYWNlcyAtIGNvbXB1dGVkOiB0cnVlLCBvcHRpb25hbDogZmFsc2UsIHJlcXVpcmVkOiBmYWxzZVxuICBwdWJsaWMgZ2V0IG5ldHdvcmtJbnRlcmZhY2VzKCkge1xuICAgIHJldHVybiB0aGlzLmludGVycG9sYXRpb25Gb3JBdHRyaWJ1dGUoJ25ldHdvcmtfaW50ZXJmYWNlcycpIGFzIGFueTtcbiAgfVxuXG4gIC8vIHBsYWNlbWVudCAtIGNvbXB1dGVkOiB0cnVlLCBvcHRpb25hbDogZmFsc2UsIHJlcXVpcmVkOiBmYWxzZVxuICBwdWJsaWMgZ2V0IHBsYWNlbWVudCgpIHtcbiAgICByZXR1cm4gdGhpcy5pbnRlcnBvbGF0aW9uRm9yQXR0cmlidXRlKCdwbGFjZW1lbnQnKSBhcyBhbnk7XG4gIH1cblxuICAvLyByYW1kaXNrX2lkIC0gY29tcHV0ZWQ6IHRydWUsIG9wdGlvbmFsOiBmYWxzZSwgcmVxdWlyZWQ6IGZhbHNlXG4gIHB1YmxpYyBnZXQgcmFtZGlza0lkKCkge1xuICAgIHJldHVybiB0aGlzLmdldFN0cmluZ0F0dHJpYnV0ZSgncmFtZGlza19pZCcpO1xuICB9XG5cbiAgLy8gc2VjdXJpdHlfZ3JvdXBzIC0gY29tcHV0ZWQ6IHRydWUsIG9wdGlvbmFsOiBmYWxzZSwgcmVxdWlyZWQ6IGZhbHNlXG4gIHB1YmxpYyBnZXQgc2VjdXJpdHlHcm91cHMoKSB7XG4gICAgcmV0dXJuIHRoaXMuaW50ZXJwb2xhdGlvbkZvckF0dHJpYnV0ZSgnc2VjdXJpdHlfZ3JvdXBzJykgYXMgYW55O1xuICB9XG5cbiAgLy8gc3BvdF9wcmljZSAtIGNvbXB1dGVkOiB0cnVlLCBvcHRpb25hbDogZmFsc2UsIHJlcXVpcmVkOiBmYWxzZVxuICBwdWJsaWMgZ2V0IHNwb3RQcmljZSgpIHtcbiAgICByZXR1cm4gdGhpcy5nZXRTdHJpbmdBdHRyaWJ1dGUoJ3Nwb3RfcHJpY2UnKTtcbiAgfVxuXG4gIC8vIHN1Ym5ldF9pZCAtIGNvbXB1dGVkOiB0cnVlLCBvcHRpb25hbDogZmFsc2UsIHJlcXVpcmVkOiBmYWxzZVxuICBwdWJsaWMgZ2V0IHN1Ym5ldElkKCkge1xuICAgIHJldHVybiB0aGlzLmdldFN0cmluZ0F0dHJpYnV0ZSgnc3VibmV0X2lkJyk7XG4gIH1cblxuICAvLyB0YWdfc3BlY2lmaWNhdGlvbnMgLSBjb21wdXRlZDogdHJ1ZSwgb3B0aW9uYWw6IGZhbHNlLCByZXF1aXJlZDogZmFsc2VcbiAgcHVibGljIGdldCB0YWdTcGVjaWZpY2F0aW9ucygpIHtcbiAgICByZXR1cm4gdGhpcy5pbnRlcnBvbGF0aW9uRm9yQXR0cmlidXRlKCd0YWdfc3BlY2lmaWNhdGlvbnMnKSBhcyBhbnk7XG4gIH1cblxuICAvLyB1c2VyX2RhdGEgLSBjb21wdXRlZDogdHJ1ZSwgb3B0aW9uYWw6IGZhbHNlLCByZXF1aXJlZDogZmFsc2VcbiAgcHVibGljIGdldCB1c2VyRGF0YSgpIHtcbiAgICByZXR1cm4gdGhpcy5nZXRTdHJpbmdBdHRyaWJ1dGUoJ3VzZXJfZGF0YScpO1xuICB9XG5cbiAgLy8gd2VpZ2h0ZWRfY2FwYWNpdHkgLSBjb21wdXRlZDogdHJ1ZSwgb3B0aW9uYWw6IGZhbHNlLCByZXF1aXJlZDogZmFsc2VcbiAgcHVibGljIGdldCB3ZWlnaHRlZENhcGFjaXR5KCkge1xuICAgIHJldHVybiB0aGlzLmdldE51bWJlckF0dHJpYnV0ZSgnd2VpZ2h0ZWRfY2FwYWNpdHknKTtcbiAgfVxufVxuXG5leHBvcnQgZnVuY3Rpb24gZGF0YUF3c2NjRWMyU3BvdEZsZWV0U3BvdEZsZWV0UmVxdWVzdENvbmZpZ0RhdGFMYXVuY2hTcGVjaWZpY2F0aW9uc1RvVGVycmFmb3JtKHN0cnVjdD86IERhdGFBd3NjY0VjMlNwb3RGbGVldFNwb3RGbGVldFJlcXVlc3RDb25maWdEYXRhTGF1bmNoU3BlY2lmaWNhdGlvbnMpOiBhbnkge1xuICBpZiAoIWNka3RmLmNhbkluc3BlY3Qoc3RydWN0KSkgeyByZXR1cm4gc3RydWN0OyB9XG4gIHJldHVybiB7XG4gICAgYmxvY2tfZGV2aWNlX21hcHBpbmdzOiBjZGt0Zi5saXN0TWFwcGVyKGRhdGFBd3NjY0VjMlNwb3RGbGVldFNwb3RGbGVldFJlcXVlc3RDb25maWdEYXRhTGF1bmNoU3BlY2lmaWNhdGlvbnNCbG9ja0RldmljZU1hcHBpbmdzVG9UZXJyYWZvcm0pKHN0cnVjdCEuYmxvY2tEZXZpY2VNYXBwaW5ncyksXG4gICAgZWJzX29wdGltaXplZDogY2RrdGYuYm9vbGVhblRvVGVycmFmb3JtKHN0cnVjdCEuZWJzT3B0aW1pemVkKSxcbiAgICBpYW1faW5zdGFuY2VfcHJvZmlsZTogZGF0YUF3c2NjRWMyU3BvdEZsZWV0U3BvdEZsZWV0UmVxdWVzdENvbmZpZ0RhdGFMYXVuY2hTcGVjaWZpY2F0aW9uc0lhbUluc3RhbmNlUHJvZmlsZVRvVGVycmFmb3JtKHN0cnVjdCEuaWFtSW5zdGFuY2VQcm9maWxlKSxcbiAgICBpbWFnZV9pZDogY2RrdGYuc3RyaW5nVG9UZXJyYWZvcm0oc3RydWN0IS5pbWFnZUlkKSxcbiAgICBpbnN0YW5jZV90eXBlOiBjZGt0Zi5zdHJpbmdUb1RlcnJhZm9ybShzdHJ1Y3QhLmluc3RhbmNlVHlwZSksXG4gICAga2VybmVsX2lkOiBjZGt0Zi5zdHJpbmdUb1RlcnJhZm9ybShzdHJ1Y3QhLmtlcm5lbElkKSxcbiAgICBrZXlfbmFtZTogY2RrdGYuc3RyaW5nVG9UZXJyYWZvcm0oc3RydWN0IS5rZXlOYW1lKSxcbiAgICBtb25pdG9yaW5nOiBkYXRhQXdzY2NFYzJTcG90RmxlZXRTcG90RmxlZXRSZXF1ZXN0Q29uZmlnRGF0YUxhdW5jaFNwZWNpZmljYXRpb25zTW9uaXRvcmluZ1RvVGVycmFmb3JtKHN0cnVjdCEubW9uaXRvcmluZyksXG4gICAgbmV0d29ya19pbnRlcmZhY2VzOiBjZGt0Zi5saXN0TWFwcGVyKGRhdGFBd3NjY0VjMlNwb3RGbGVldFNwb3RGbGVldFJlcXVlc3RDb25maWdEYXRhTGF1bmNoU3BlY2lmaWNhdGlvbnNOZXR3b3JrSW50ZXJmYWNlc1RvVGVycmFmb3JtKShzdHJ1Y3QhLm5ldHdvcmtJbnRlcmZhY2VzKSxcbiAgICBwbGFjZW1lbnQ6IGRhdGFBd3NjY0VjMlNwb3RGbGVldFNwb3RGbGVldFJlcXVlc3RDb25maWdEYXRhTGF1bmNoU3BlY2lmaWNhdGlvbnNQbGFjZW1lbnRUb1RlcnJhZm9ybShzdHJ1Y3QhLnBsYWNlbWVudCksXG4gICAgcmFtZGlza19pZDogY2RrdGYuc3RyaW5nVG9UZXJyYWZvcm0oc3RydWN0IS5yYW1kaXNrSWQpLFxuICAgIHNlY3VyaXR5X2dyb3VwczogY2RrdGYubGlzdE1hcHBlcihkYXRhQXdzY2NFYzJTcG90RmxlZXRTcG90RmxlZXRSZXF1ZXN0Q29uZmlnRGF0YUxhdW5jaFNwZWNpZmljYXRpb25zU2VjdXJpdHlHcm91cHNUb1RlcnJhZm9ybSkoc3RydWN0IS5zZWN1cml0eUdyb3VwcyksXG4gICAgc3BvdF9wcmljZTogY2RrdGYuc3RyaW5nVG9UZXJyYWZvcm0oc3RydWN0IS5zcG90UHJpY2UpLFxuICAgIHN1Ym5ldF9pZDogY2RrdGYuc3RyaW5nVG9UZXJyYWZvcm0oc3RydWN0IS5zdWJuZXRJZCksXG4gICAgdGFnX3NwZWNpZmljYXRpb25zOiBjZGt0Zi5saXN0TWFwcGVyKGRhdGFBd3NjY0VjMlNwb3RGbGVldFNwb3RGbGVldFJlcXVlc3RDb25maWdEYXRhTGF1bmNoU3BlY2lmaWNhdGlvbnNUYWdTcGVjaWZpY2F0aW9uc1RvVGVycmFmb3JtKShzdHJ1Y3QhLnRhZ1NwZWNpZmljYXRpb25zKSxcbiAgICB1c2VyX2RhdGE6IGNka3RmLnN0cmluZ1RvVGVycmFmb3JtKHN0cnVjdCEudXNlckRhdGEpLFxuICAgIHdlaWdodGVkX2NhcGFjaXR5OiBjZGt0Zi5udW1iZXJUb1RlcnJhZm9ybShzdHJ1Y3QhLndlaWdodGVkQ2FwYWNpdHkpLFxuICB9XG59XG5cbmV4cG9ydCBjbGFzcyBEYXRhQXdzY2NFYzJTcG90RmxlZXRTcG90RmxlZXRSZXF1ZXN0Q29uZmlnRGF0YUxhdW5jaFRlbXBsYXRlQ29uZmlnc0xhdW5jaFRlbXBsYXRlU3BlY2lmaWNhdGlvbiBleHRlbmRzIGNka3RmLkNvbXBsZXhDb21wdXRlZExpc3Qge1xuXG4gIC8vIGxhdW5jaF90ZW1wbGF0ZV9pZCAtIGNvbXB1dGVkOiB0cnVlLCBvcHRpb25hbDogZmFsc2UsIHJlcXVpcmVkOiBmYWxzZVxuICBwdWJsaWMgZ2V0IGxhdW5jaFRlbXBsYXRlSWQoKSB7XG4gICAgcmV0dXJuIHRoaXMuZ2V0U3RyaW5nQXR0cmlidXRlKCdsYXVuY2hfdGVtcGxhdGVfaWQnKTtcbiAgfVxuXG4gIC8vIGxhdW5jaF90ZW1wbGF0ZV9uYW1lIC0gY29tcHV0ZWQ6IHRydWUsIG9wdGlvbmFsOiBmYWxzZSwgcmVxdWlyZWQ6IGZhbHNlXG4gIHB1YmxpYyBnZXQgbGF1bmNoVGVtcGxhdGVOYW1lKCkge1xuICAgIHJldHVybiB0aGlzLmdldFN0cmluZ0F0dHJpYnV0ZSgnbGF1bmNoX3RlbXBsYXRlX25hbWUnKTtcbiAgfVxuXG4gIC8vIHZlcnNpb24gLSBjb21wdXRlZDogdHJ1ZSwgb3B0aW9uYWw6IGZhbHNlLCByZXF1aXJlZDogZmFsc2VcbiAgcHVibGljIGdldCB2ZXJzaW9uKCkge1xuICAgIHJldHVybiB0aGlzLmdldFN0cmluZ0F0dHJpYnV0ZSgndmVyc2lvbicpO1xuICB9XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBkYXRhQXdzY2NFYzJTcG90RmxlZXRTcG90RmxlZXRSZXF1ZXN0Q29uZmlnRGF0YUxhdW5jaFRlbXBsYXRlQ29uZmlnc0xhdW5jaFRlbXBsYXRlU3BlY2lmaWNhdGlvblRvVGVycmFmb3JtKHN0cnVjdD86IERhdGFBd3NjY0VjMlNwb3RGbGVldFNwb3RGbGVldFJlcXVlc3RDb25maWdEYXRhTGF1bmNoVGVtcGxhdGVDb25maWdzTGF1bmNoVGVtcGxhdGVTcGVjaWZpY2F0aW9uKTogYW55IHtcbiAgaWYgKCFjZGt0Zi5jYW5JbnNwZWN0KHN0cnVjdCkpIHsgcmV0dXJuIHN0cnVjdDsgfVxuICByZXR1cm4ge1xuICAgIGxhdW5jaF90ZW1wbGF0ZV9pZDogY2RrdGYuc3RyaW5nVG9UZXJyYWZvcm0oc3RydWN0IS5sYXVuY2hUZW1wbGF0ZUlkKSxcbiAgICBsYXVuY2hfdGVtcGxhdGVfbmFtZTogY2RrdGYuc3RyaW5nVG9UZXJyYWZvcm0oc3RydWN0IS5sYXVuY2hUZW1wbGF0ZU5hbWUpLFxuICAgIHZlcnNpb246IGNka3RmLnN0cmluZ1RvVGVycmFmb3JtKHN0cnVjdCEudmVyc2lvbiksXG4gIH1cbn1cblxuZXhwb3J0IGNsYXNzIERhdGFBd3NjY0VjMlNwb3RGbGVldFNwb3RGbGVldFJlcXVlc3RDb25maWdEYXRhTGF1bmNoVGVtcGxhdGVDb25maWdzT3ZlcnJpZGVzIGV4dGVuZHMgY2RrdGYuQ29tcGxleENvbXB1dGVkTGlzdCB7XG5cbiAgLy8gYXZhaWxhYmlsaXR5X3pvbmUgLSBjb21wdXRlZDogdHJ1ZSwgb3B0aW9uYWw6IGZhbHNlLCByZXF1aXJlZDogZmFsc2VcbiAgcHVibGljIGdldCBhdmFpbGFiaWxpdHlab25lKCkge1xuICAgIHJldHVybiB0aGlzLmdldFN0cmluZ0F0dHJpYnV0ZSgnYXZhaWxhYmlsaXR5X3pvbmUnKTtcbiAgfVxuXG4gIC8vIGluc3RhbmNlX3R5cGUgLSBjb21wdXRlZDogdHJ1ZSwgb3B0aW9uYWw6IGZhbHNlLCByZXF1aXJlZDogZmFsc2VcbiAgcHVibGljIGdldCBpbnN0YW5jZVR5cGUoKSB7XG4gICAgcmV0dXJuIHRoaXMuZ2V0U3RyaW5nQXR0cmlidXRlKCdpbnN0YW5jZV90eXBlJyk7XG4gIH1cblxuICAvLyBzcG90X3ByaWNlIC0gY29tcHV0ZWQ6IHRydWUsIG9wdGlvbmFsOiBmYWxzZSwgcmVxdWlyZWQ6IGZhbHNlXG4gIHB1YmxpYyBnZXQgc3BvdFByaWNlKCkge1xuICAgIHJldHVybiB0aGlzLmdldFN0cmluZ0F0dHJpYnV0ZSgnc3BvdF9wcmljZScpO1xuICB9XG5cbiAgLy8gc3VibmV0X2lkIC0gY29tcHV0ZWQ6IHRydWUsIG9wdGlvbmFsOiBmYWxzZSwgcmVxdWlyZWQ6IGZhbHNlXG4gIHB1YmxpYyBnZXQgc3VibmV0SWQoKSB7XG4gICAgcmV0dXJuIHRoaXMuZ2V0U3RyaW5nQXR0cmlidXRlKCdzdWJuZXRfaWQnKTtcbiAgfVxuXG4gIC8vIHdlaWdodGVkX2NhcGFjaXR5IC0gY29tcHV0ZWQ6IHRydWUsIG9wdGlvbmFsOiBmYWxzZSwgcmVxdWlyZWQ6IGZhbHNlXG4gIHB1YmxpYyBnZXQgd2VpZ2h0ZWRDYXBhY2l0eSgpIHtcbiAgICByZXR1cm4gdGhpcy5nZXROdW1iZXJBdHRyaWJ1dGUoJ3dlaWdodGVkX2NhcGFjaXR5Jyk7XG4gIH1cbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGRhdGFBd3NjY0VjMlNwb3RGbGVldFNwb3RGbGVldFJlcXVlc3RDb25maWdEYXRhTGF1bmNoVGVtcGxhdGVDb25maWdzT3ZlcnJpZGVzVG9UZXJyYWZvcm0oc3RydWN0PzogRGF0YUF3c2NjRWMyU3BvdEZsZWV0U3BvdEZsZWV0UmVxdWVzdENvbmZpZ0RhdGFMYXVuY2hUZW1wbGF0ZUNvbmZpZ3NPdmVycmlkZXMpOiBhbnkge1xuICBpZiAoIWNka3RmLmNhbkluc3BlY3Qoc3RydWN0KSkgeyByZXR1cm4gc3RydWN0OyB9XG4gIHJldHVybiB7XG4gICAgYXZhaWxhYmlsaXR5X3pvbmU6IGNka3RmLnN0cmluZ1RvVGVycmFmb3JtKHN0cnVjdCEuYXZhaWxhYmlsaXR5Wm9uZSksXG4gICAgaW5zdGFuY2VfdHlwZTogY2RrdGYuc3RyaW5nVG9UZXJyYWZvcm0oc3RydWN0IS5pbnN0YW5jZVR5cGUpLFxuICAgIHNwb3RfcHJpY2U6IGNka3RmLnN0cmluZ1RvVGVycmFmb3JtKHN0cnVjdCEuc3BvdFByaWNlKSxcbiAgICBzdWJuZXRfaWQ6IGNka3RmLnN0cmluZ1RvVGVycmFmb3JtKHN0cnVjdCEuc3VibmV0SWQpLFxuICAgIHdlaWdodGVkX2NhcGFjaXR5OiBjZGt0Zi5udW1iZXJUb1RlcnJhZm9ybShzdHJ1Y3QhLndlaWdodGVkQ2FwYWNpdHkpLFxuICB9XG59XG5cbmV4cG9ydCBjbGFzcyBEYXRhQXdzY2NFYzJTcG90RmxlZXRTcG90RmxlZXRSZXF1ZXN0Q29uZmlnRGF0YUxhdW5jaFRlbXBsYXRlQ29uZmlncyBleHRlbmRzIGNka3RmLkNvbXBsZXhDb21wdXRlZExpc3Qge1xuXG4gIC8vIGxhdW5jaF90ZW1wbGF0ZV9zcGVjaWZpY2F0aW9uIC0gY29tcHV0ZWQ6IHRydWUsIG9wdGlvbmFsOiBmYWxzZSwgcmVxdWlyZWQ6IGZhbHNlXG4gIHB1YmxpYyBnZXQgbGF1bmNoVGVtcGxhdGVTcGVjaWZpY2F0aW9uKCkge1xuICAgIHJldHVybiB0aGlzLmludGVycG9sYXRpb25Gb3JBdHRyaWJ1dGUoJ2xhdW5jaF90ZW1wbGF0ZV9zcGVjaWZpY2F0aW9uJykgYXMgYW55O1xuICB9XG5cbiAgLy8gb3ZlcnJpZGVzIC0gY29tcHV0ZWQ6IHRydWUsIG9wdGlvbmFsOiBmYWxzZSwgcmVxdWlyZWQ6IGZhbHNlXG4gIHB1YmxpYyBnZXQgb3ZlcnJpZGVzKCkge1xuICAgIHJldHVybiB0aGlzLmludGVycG9sYXRpb25Gb3JBdHRyaWJ1dGUoJ292ZXJyaWRlcycpIGFzIGFueTtcbiAgfVxufVxuXG5leHBvcnQgZnVuY3Rpb24gZGF0YUF3c2NjRWMyU3BvdEZsZWV0U3BvdEZsZWV0UmVxdWVzdENvbmZpZ0RhdGFMYXVuY2hUZW1wbGF0ZUNvbmZpZ3NUb1RlcnJhZm9ybShzdHJ1Y3Q/OiBEYXRhQXdzY2NFYzJTcG90RmxlZXRTcG90RmxlZXRSZXF1ZXN0Q29uZmlnRGF0YUxhdW5jaFRlbXBsYXRlQ29uZmlncyk6IGFueSB7XG4gIGlmICghY2RrdGYuY2FuSW5zcGVjdChzdHJ1Y3QpKSB7IHJldHVybiBzdHJ1Y3Q7IH1cbiAgcmV0dXJuIHtcbiAgICBsYXVuY2hfdGVtcGxhdGVfc3BlY2lmaWNhdGlvbjogZGF0YUF3c2NjRWMyU3BvdEZsZWV0U3BvdEZsZWV0UmVxdWVzdENvbmZpZ0RhdGFMYXVuY2hUZW1wbGF0ZUNvbmZpZ3NMYXVuY2hUZW1wbGF0ZVNwZWNpZmljYXRpb25Ub1RlcnJhZm9ybShzdHJ1Y3QhLmxhdW5jaFRlbXBsYXRlU3BlY2lmaWNhdGlvbiksXG4gICAgb3ZlcnJpZGVzOiBjZGt0Zi5saXN0TWFwcGVyKGRhdGFBd3NjY0VjMlNwb3RGbGVldFNwb3RGbGVldFJlcXVlc3RDb25maWdEYXRhTGF1bmNoVGVtcGxhdGVDb25maWdzT3ZlcnJpZGVzVG9UZXJyYWZvcm0pKHN0cnVjdCEub3ZlcnJpZGVzKSxcbiAgfVxufVxuXG5leHBvcnQgY2xhc3MgRGF0YUF3c2NjRWMyU3BvdEZsZWV0U3BvdEZsZWV0UmVxdWVzdENvbmZpZ0RhdGFMb2FkQmFsYW5jZXJzQ29uZmlnQ2xhc3NpY0xvYWRCYWxhbmNlcnNDb25maWdDbGFzc2ljTG9hZEJhbGFuY2VycyBleHRlbmRzIGNka3RmLkNvbXBsZXhDb21wdXRlZExpc3Qge1xuXG4gIC8vIG5hbWUgLSBjb21wdXRlZDogdHJ1ZSwgb3B0aW9uYWw6IGZhbHNlLCByZXF1aXJlZDogZmFsc2VcbiAgcHVibGljIGdldCBuYW1lKCkge1xuICAgIHJldHVybiB0aGlzLmdldFN0cmluZ0F0dHJpYnV0ZSgnbmFtZScpO1xuICB9XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBkYXRhQXdzY2NFYzJTcG90RmxlZXRTcG90RmxlZXRSZXF1ZXN0Q29uZmlnRGF0YUxvYWRCYWxhbmNlcnNDb25maWdDbGFzc2ljTG9hZEJhbGFuY2Vyc0NvbmZpZ0NsYXNzaWNMb2FkQmFsYW5jZXJzVG9UZXJyYWZvcm0oc3RydWN0PzogRGF0YUF3c2NjRWMyU3BvdEZsZWV0U3BvdEZsZWV0UmVxdWVzdENvbmZpZ0RhdGFMb2FkQmFsYW5jZXJzQ29uZmlnQ2xhc3NpY0xvYWRCYWxhbmNlcnNDb25maWdDbGFzc2ljTG9hZEJhbGFuY2Vycyk6IGFueSB7XG4gIGlmICghY2RrdGYuY2FuSW5zcGVjdChzdHJ1Y3QpKSB7IHJldHVybiBzdHJ1Y3Q7IH1cbiAgcmV0dXJuIHtcbiAgICBuYW1lOiBjZGt0Zi5zdHJpbmdUb1RlcnJhZm9ybShzdHJ1Y3QhLm5hbWUpLFxuICB9XG59XG5cbmV4cG9ydCBjbGFzcyBEYXRhQXdzY2NFYzJTcG90RmxlZXRTcG90RmxlZXRSZXF1ZXN0Q29uZmlnRGF0YUxvYWRCYWxhbmNlcnNDb25maWdDbGFzc2ljTG9hZEJhbGFuY2Vyc0NvbmZpZyBleHRlbmRzIGNka3RmLkNvbXBsZXhDb21wdXRlZExpc3Qge1xuXG4gIC8vIGNsYXNzaWNfbG9hZF9iYWxhbmNlcnMgLSBjb21wdXRlZDogdHJ1ZSwgb3B0aW9uYWw6IGZhbHNlLCByZXF1aXJlZDogZmFsc2VcbiAgcHVibGljIGdldCBjbGFzc2ljTG9hZEJhbGFuY2VycygpIHtcbiAgICByZXR1cm4gdGhpcy5pbnRlcnBvbGF0aW9uRm9yQXR0cmlidXRlKCdjbGFzc2ljX2xvYWRfYmFsYW5jZXJzJykgYXMgYW55O1xuICB9XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBkYXRhQXdzY2NFYzJTcG90RmxlZXRTcG90RmxlZXRSZXF1ZXN0Q29uZmlnRGF0YUxvYWRCYWxhbmNlcnNDb25maWdDbGFzc2ljTG9hZEJhbGFuY2Vyc0NvbmZpZ1RvVGVycmFmb3JtKHN0cnVjdD86IERhdGFBd3NjY0VjMlNwb3RGbGVldFNwb3RGbGVldFJlcXVlc3RDb25maWdEYXRhTG9hZEJhbGFuY2Vyc0NvbmZpZ0NsYXNzaWNMb2FkQmFsYW5jZXJzQ29uZmlnKTogYW55IHtcbiAgaWYgKCFjZGt0Zi5jYW5JbnNwZWN0KHN0cnVjdCkpIHsgcmV0dXJuIHN0cnVjdDsgfVxuICByZXR1cm4ge1xuICAgIGNsYXNzaWNfbG9hZF9iYWxhbmNlcnM6IGNka3RmLmxpc3RNYXBwZXIoZGF0YUF3c2NjRWMyU3BvdEZsZWV0U3BvdEZsZWV0UmVxdWVzdENvbmZpZ0RhdGFMb2FkQmFsYW5jZXJzQ29uZmlnQ2xhc3NpY0xvYWRCYWxhbmNlcnNDb25maWdDbGFzc2ljTG9hZEJhbGFuY2Vyc1RvVGVycmFmb3JtKShzdHJ1Y3QhLmNsYXNzaWNMb2FkQmFsYW5jZXJzKSxcbiAgfVxufVxuXG5leHBvcnQgY2xhc3MgRGF0YUF3c2NjRWMyU3BvdEZsZWV0U3BvdEZsZWV0UmVxdWVzdENvbmZpZ0RhdGFMb2FkQmFsYW5jZXJzQ29uZmlnVGFyZ2V0R3JvdXBzQ29uZmlnVGFyZ2V0R3JvdXBzIGV4dGVuZHMgY2RrdGYuQ29tcGxleENvbXB1dGVkTGlzdCB7XG5cbiAgLy8gYXJuIC0gY29tcHV0ZWQ6IHRydWUsIG9wdGlvbmFsOiBmYWxzZSwgcmVxdWlyZWQ6IGZhbHNlXG4gIHB1YmxpYyBnZXQgYXJuKCkge1xuICAgIHJldHVybiB0aGlzLmdldFN0cmluZ0F0dHJpYnV0ZSgnYXJuJyk7XG4gIH1cbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGRhdGFBd3NjY0VjMlNwb3RGbGVldFNwb3RGbGVldFJlcXVlc3RDb25maWdEYXRhTG9hZEJhbGFuY2Vyc0NvbmZpZ1RhcmdldEdyb3Vwc0NvbmZpZ1RhcmdldEdyb3Vwc1RvVGVycmFmb3JtKHN0cnVjdD86IERhdGFBd3NjY0VjMlNwb3RGbGVldFNwb3RGbGVldFJlcXVlc3RDb25maWdEYXRhTG9hZEJhbGFuY2Vyc0NvbmZpZ1RhcmdldEdyb3Vwc0NvbmZpZ1RhcmdldEdyb3Vwcyk6IGFueSB7XG4gIGlmICghY2RrdGYuY2FuSW5zcGVjdChzdHJ1Y3QpKSB7IHJldHVybiBzdHJ1Y3Q7IH1cbiAgcmV0dXJuIHtcbiAgICBhcm46IGNka3RmLnN0cmluZ1RvVGVycmFmb3JtKHN0cnVjdCEuYXJuKSxcbiAgfVxufVxuXG5leHBvcnQgY2xhc3MgRGF0YUF3c2NjRWMyU3BvdEZsZWV0U3BvdEZsZWV0UmVxdWVzdENvbmZpZ0RhdGFMb2FkQmFsYW5jZXJzQ29uZmlnVGFyZ2V0R3JvdXBzQ29uZmlnIGV4dGVuZHMgY2RrdGYuQ29tcGxleENvbXB1dGVkTGlzdCB7XG5cbiAgLy8gdGFyZ2V0X2dyb3VwcyAtIGNvbXB1dGVkOiB0cnVlLCBvcHRpb25hbDogZmFsc2UsIHJlcXVpcmVkOiBmYWxzZVxuICBwdWJsaWMgZ2V0IHRhcmdldEdyb3VwcygpIHtcbiAgICByZXR1cm4gdGhpcy5pbnRlcnBvbGF0aW9uRm9yQXR0cmlidXRlKCd0YXJnZXRfZ3JvdXBzJykgYXMgYW55O1xuICB9XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBkYXRhQXdzY2NFYzJTcG90RmxlZXRTcG90RmxlZXRSZXF1ZXN0Q29uZmlnRGF0YUxvYWRCYWxhbmNlcnNDb25maWdUYXJnZXRHcm91cHNDb25maWdUb1RlcnJhZm9ybShzdHJ1Y3Q/OiBEYXRhQXdzY2NFYzJTcG90RmxlZXRTcG90RmxlZXRSZXF1ZXN0Q29uZmlnRGF0YUxvYWRCYWxhbmNlcnNDb25maWdUYXJnZXRHcm91cHNDb25maWcpOiBhbnkge1xuICBpZiAoIWNka3RmLmNhbkluc3BlY3Qoc3RydWN0KSkgeyByZXR1cm4gc3RydWN0OyB9XG4gIHJldHVybiB7XG4gICAgdGFyZ2V0X2dyb3VwczogY2RrdGYubGlzdE1hcHBlcihkYXRhQXdzY2NFYzJTcG90RmxlZXRTcG90RmxlZXRSZXF1ZXN0Q29uZmlnRGF0YUxvYWRCYWxhbmNlcnNDb25maWdUYXJnZXRHcm91cHNDb25maWdUYXJnZXRHcm91cHNUb1RlcnJhZm9ybSkoc3RydWN0IS50YXJnZXRHcm91cHMpLFxuICB9XG59XG5cbmV4cG9ydCBjbGFzcyBEYXRhQXdzY2NFYzJTcG90RmxlZXRTcG90RmxlZXRSZXF1ZXN0Q29uZmlnRGF0YUxvYWRCYWxhbmNlcnNDb25maWcgZXh0ZW5kcyBjZGt0Zi5Db21wbGV4Q29tcHV0ZWRMaXN0IHtcblxuICAvLyBjbGFzc2ljX2xvYWRfYmFsYW5jZXJzX2NvbmZpZyAtIGNvbXB1dGVkOiB0cnVlLCBvcHRpb25hbDogZmFsc2UsIHJlcXVpcmVkOiBmYWxzZVxuICBwdWJsaWMgZ2V0IGNsYXNzaWNMb2FkQmFsYW5jZXJzQ29uZmlnKCkge1xuICAgIHJldHVybiB0aGlzLmludGVycG9sYXRpb25Gb3JBdHRyaWJ1dGUoJ2NsYXNzaWNfbG9hZF9iYWxhbmNlcnNfY29uZmlnJykgYXMgYW55O1xuICB9XG5cbiAgLy8gdGFyZ2V0X2dyb3Vwc19jb25maWcgLSBjb21wdXRlZDogdHJ1ZSwgb3B0aW9uYWw6IGZhbHNlLCByZXF1aXJlZDogZmFsc2VcbiAgcHVibGljIGdldCB0YXJnZXRHcm91cHNDb25maWcoKSB7XG4gICAgcmV0dXJuIHRoaXMuaW50ZXJwb2xhdGlvbkZvckF0dHJpYnV0ZSgndGFyZ2V0X2dyb3Vwc19jb25maWcnKSBhcyBhbnk7XG4gIH1cbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGRhdGFBd3NjY0VjMlNwb3RGbGVldFNwb3RGbGVldFJlcXVlc3RDb25maWdEYXRhTG9hZEJhbGFuY2Vyc0NvbmZpZ1RvVGVycmFmb3JtKHN0cnVjdD86IERhdGFBd3NjY0VjMlNwb3RGbGVldFNwb3RGbGVldFJlcXVlc3RDb25maWdEYXRhTG9hZEJhbGFuY2Vyc0NvbmZpZyk6IGFueSB7XG4gIGlmICghY2RrdGYuY2FuSW5zcGVjdChzdHJ1Y3QpKSB7IHJldHVybiBzdHJ1Y3Q7IH1cbiAgcmV0dXJuIHtcbiAgICBjbGFzc2ljX2xvYWRfYmFsYW5jZXJzX2NvbmZpZzogZGF0YUF3c2NjRWMyU3BvdEZsZWV0U3BvdEZsZWV0UmVxdWVzdENvbmZpZ0RhdGFMb2FkQmFsYW5jZXJzQ29uZmlnQ2xhc3NpY0xvYWRCYWxhbmNlcnNDb25maWdUb1RlcnJhZm9ybShzdHJ1Y3QhLmNsYXNzaWNMb2FkQmFsYW5jZXJzQ29uZmlnKSxcbiAgICB0YXJnZXRfZ3JvdXBzX2NvbmZpZzogZGF0YUF3c2NjRWMyU3BvdEZsZWV0U3BvdEZsZWV0UmVxdWVzdENvbmZpZ0RhdGFMb2FkQmFsYW5jZXJzQ29uZmlnVGFyZ2V0R3JvdXBzQ29uZmlnVG9UZXJyYWZvcm0oc3RydWN0IS50YXJnZXRHcm91cHNDb25maWcpLFxuICB9XG59XG5cbmV4cG9ydCBjbGFzcyBEYXRhQXdzY2NFYzJTcG90RmxlZXRTcG90RmxlZXRSZXF1ZXN0Q29uZmlnRGF0YVNwb3RNYWludGVuYW5jZVN0cmF0ZWdpZXNDYXBhY2l0eVJlYmFsYW5jZSBleHRlbmRzIGNka3RmLkNvbXBsZXhDb21wdXRlZExpc3Qge1xuXG4gIC8vIHJlcGxhY2VtZW50X3N0cmF0ZWd5IC0gY29tcHV0ZWQ6IHRydWUsIG9wdGlvbmFsOiBmYWxzZSwgcmVxdWlyZWQ6IGZhbHNlXG4gIHB1YmxpYyBnZXQgcmVwbGFjZW1lbnRTdHJhdGVneSgpIHtcbiAgICByZXR1cm4gdGhpcy5nZXRTdHJpbmdBdHRyaWJ1dGUoJ3JlcGxhY2VtZW50X3N0cmF0ZWd5Jyk7XG4gIH1cbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGRhdGFBd3NjY0VjMlNwb3RGbGVldFNwb3RGbGVldFJlcXVlc3RDb25maWdEYXRhU3BvdE1haW50ZW5hbmNlU3RyYXRlZ2llc0NhcGFjaXR5UmViYWxhbmNlVG9UZXJyYWZvcm0oc3RydWN0PzogRGF0YUF3c2NjRWMyU3BvdEZsZWV0U3BvdEZsZWV0UmVxdWVzdENvbmZpZ0RhdGFTcG90TWFpbnRlbmFuY2VTdHJhdGVnaWVzQ2FwYWNpdHlSZWJhbGFuY2UpOiBhbnkge1xuICBpZiAoIWNka3RmLmNhbkluc3BlY3Qoc3RydWN0KSkgeyByZXR1cm4gc3RydWN0OyB9XG4gIHJldHVybiB7XG4gICAgcmVwbGFjZW1lbnRfc3RyYXRlZ3k6IGNka3RmLnN0cmluZ1RvVGVycmFmb3JtKHN0cnVjdCEucmVwbGFjZW1lbnRTdHJhdGVneSksXG4gIH1cbn1cblxuZXhwb3J0IGNsYXNzIERhdGFBd3NjY0VjMlNwb3RGbGVldFNwb3RGbGVldFJlcXVlc3RDb25maWdEYXRhU3BvdE1haW50ZW5hbmNlU3RyYXRlZ2llcyBleHRlbmRzIGNka3RmLkNvbXBsZXhDb21wdXRlZExpc3Qge1xuXG4gIC8vIGNhcGFjaXR5X3JlYmFsYW5jZSAtIGNvbXB1dGVkOiB0cnVlLCBvcHRpb25hbDogZmFsc2UsIHJlcXVpcmVkOiBmYWxzZVxuICBwdWJsaWMgZ2V0IGNhcGFjaXR5UmViYWxhbmNlKCkge1xuICAgIHJldHVybiB0aGlzLmludGVycG9sYXRpb25Gb3JBdHRyaWJ1dGUoJ2NhcGFjaXR5X3JlYmFsYW5jZScpIGFzIGFueTtcbiAgfVxufVxuXG5leHBvcnQgZnVuY3Rpb24gZGF0YUF3c2NjRWMyU3BvdEZsZWV0U3BvdEZsZWV0UmVxdWVzdENvbmZpZ0RhdGFTcG90TWFpbnRlbmFuY2VTdHJhdGVnaWVzVG9UZXJyYWZvcm0oc3RydWN0PzogRGF0YUF3c2NjRWMyU3BvdEZsZWV0U3BvdEZsZWV0UmVxdWVzdENvbmZpZ0RhdGFTcG90TWFpbnRlbmFuY2VTdHJhdGVnaWVzKTogYW55IHtcbiAgaWYgKCFjZGt0Zi5jYW5JbnNwZWN0KHN0cnVjdCkpIHsgcmV0dXJuIHN0cnVjdDsgfVxuICByZXR1cm4ge1xuICAgIGNhcGFjaXR5X3JlYmFsYW5jZTogZGF0YUF3c2NjRWMyU3BvdEZsZWV0U3BvdEZsZWV0UmVxdWVzdENvbmZpZ0RhdGFTcG90TWFpbnRlbmFuY2VTdHJhdGVnaWVzQ2FwYWNpdHlSZWJhbGFuY2VUb1RlcnJhZm9ybShzdHJ1Y3QhLmNhcGFjaXR5UmViYWxhbmNlKSxcbiAgfVxufVxuXG5leHBvcnQgY2xhc3MgRGF0YUF3c2NjRWMyU3BvdEZsZWV0U3BvdEZsZWV0UmVxdWVzdENvbmZpZ0RhdGEgZXh0ZW5kcyBjZGt0Zi5Db21wbGV4Q29tcHV0ZWRMaXN0IHtcblxuICAvLyBhbGxvY2F0aW9uX3N0cmF0ZWd5IC0gY29tcHV0ZWQ6IHRydWUsIG9wdGlvbmFsOiBmYWxzZSwgcmVxdWlyZWQ6IGZhbHNlXG4gIHB1YmxpYyBnZXQgYWxsb2NhdGlvblN0cmF0ZWd5KCkge1xuICAgIHJldHVybiB0aGlzLmdldFN0cmluZ0F0dHJpYnV0ZSgnYWxsb2NhdGlvbl9zdHJhdGVneScpO1xuICB9XG5cbiAgLy8gY29udGV4dCAtIGNvbXB1dGVkOiB0cnVlLCBvcHRpb25hbDogZmFsc2UsIHJlcXVpcmVkOiBmYWxzZVxuICBwdWJsaWMgZ2V0IGNvbnRleHQoKSB7XG4gICAgcmV0dXJuIHRoaXMuZ2V0U3RyaW5nQXR0cmlidXRlKCdjb250ZXh0Jyk7XG4gIH1cblxuICAvLyBleGNlc3NfY2FwYWNpdHlfdGVybWluYXRpb25fcG9saWN5IC0gY29tcHV0ZWQ6IHRydWUsIG9wdGlvbmFsOiBmYWxzZSwgcmVxdWlyZWQ6IGZhbHNlXG4gIHB1YmxpYyBnZXQgZXhjZXNzQ2FwYWNpdHlUZXJtaW5hdGlvblBvbGljeSgpIHtcbiAgICByZXR1cm4gdGhpcy5nZXRTdHJpbmdBdHRyaWJ1dGUoJ2V4Y2Vzc19jYXBhY2l0eV90ZXJtaW5hdGlvbl9wb2xpY3knKTtcbiAgfVxuXG4gIC8vIGlhbV9mbGVldF9yb2xlIC0gY29tcHV0ZWQ6IHRydWUsIG9wdGlvbmFsOiBmYWxzZSwgcmVxdWlyZWQ6IGZhbHNlXG4gIHB1YmxpYyBnZXQgaWFtRmxlZXRSb2xlKCkge1xuICAgIHJldHVybiB0aGlzLmdldFN0cmluZ0F0dHJpYnV0ZSgnaWFtX2ZsZWV0X3JvbGUnKTtcbiAgfVxuXG4gIC8vIGluc3RhbmNlX2ludGVycnVwdGlvbl9iZWhhdmlvciAtIGNvbXB1dGVkOiB0cnVlLCBvcHRpb25hbDogZmFsc2UsIHJlcXVpcmVkOiBmYWxzZVxuICBwdWJsaWMgZ2V0IGluc3RhbmNlSW50ZXJydXB0aW9uQmVoYXZpb3IoKSB7XG4gICAgcmV0dXJuIHRoaXMuZ2V0U3RyaW5nQXR0cmlidXRlKCdpbnN0YW5jZV9pbnRlcnJ1cHRpb25fYmVoYXZpb3InKTtcbiAgfVxuXG4gIC8vIGluc3RhbmNlX3Bvb2xzX3RvX3VzZV9jb3VudCAtIGNvbXB1dGVkOiB0cnVlLCBvcHRpb25hbDogZmFsc2UsIHJlcXVpcmVkOiBmYWxzZVxuICBwdWJsaWMgZ2V0IGluc3RhbmNlUG9vbHNUb1VzZUNvdW50KCkge1xuICAgIHJldHVybiB0aGlzLmdldE51bWJlckF0dHJpYnV0ZSgnaW5zdGFuY2VfcG9vbHNfdG9fdXNlX2NvdW50Jyk7XG4gIH1cblxuICAvLyBsYXVuY2hfc3BlY2lmaWNhdGlvbnMgLSBjb21wdXRlZDogdHJ1ZSwgb3B0aW9uYWw6IGZhbHNlLCByZXF1aXJlZDogZmFsc2VcbiAgcHVibGljIGdldCBsYXVuY2hTcGVjaWZpY2F0aW9ucygpIHtcbiAgICByZXR1cm4gdGhpcy5pbnRlcnBvbGF0aW9uRm9yQXR0cmlidXRlKCdsYXVuY2hfc3BlY2lmaWNhdGlvbnMnKSBhcyBhbnk7XG4gIH1cblxuICAvLyBsYXVuY2hfdGVtcGxhdGVfY29uZmlncyAtIGNvbXB1dGVkOiB0cnVlLCBvcHRpb25hbDogZmFsc2UsIHJlcXVpcmVkOiBmYWxzZVxuICBwdWJsaWMgZ2V0IGxhdW5jaFRlbXBsYXRlQ29uZmlncygpIHtcbiAgICByZXR1cm4gdGhpcy5pbnRlcnBvbGF0aW9uRm9yQXR0cmlidXRlKCdsYXVuY2hfdGVtcGxhdGVfY29uZmlncycpIGFzIGFueTtcbiAgfVxuXG4gIC8vIGxvYWRfYmFsYW5jZXJzX2NvbmZpZyAtIGNvbXB1dGVkOiB0cnVlLCBvcHRpb25hbDogZmFsc2UsIHJlcXVpcmVkOiBmYWxzZVxuICBwdWJsaWMgZ2V0IGxvYWRCYWxhbmNlcnNDb25maWcoKSB7XG4gICAgcmV0dXJuIHRoaXMuaW50ZXJwb2xhdGlvbkZvckF0dHJpYnV0ZSgnbG9hZF9iYWxhbmNlcnNfY29uZmlnJykgYXMgYW55O1xuICB9XG5cbiAgLy8gb25fZGVtYW5kX2FsbG9jYXRpb25fc3RyYXRlZ3kgLSBjb21wdXRlZDogdHJ1ZSwgb3B0aW9uYWw6IGZhbHNlLCByZXF1aXJlZDogZmFsc2VcbiAgcHVibGljIGdldCBvbkRlbWFuZEFsbG9jYXRpb25TdHJhdGVneSgpIHtcbiAgICByZXR1cm4gdGhpcy5nZXRTdHJpbmdBdHRyaWJ1dGUoJ29uX2RlbWFuZF9hbGxvY2F0aW9uX3N0cmF0ZWd5Jyk7XG4gIH1cblxuICAvLyBvbl9kZW1hbmRfbWF4X3RvdGFsX3ByaWNlIC0gY29tcHV0ZWQ6IHRydWUsIG9wdGlvbmFsOiBmYWxzZSwgcmVxdWlyZWQ6IGZhbHNlXG4gIHB1YmxpYyBnZXQgb25EZW1hbmRNYXhUb3RhbFByaWNlKCkge1xuICAgIHJldHVybiB0aGlzLmdldFN0cmluZ0F0dHJpYnV0ZSgnb25fZGVtYW5kX21heF90b3RhbF9wcmljZScpO1xuICB9XG5cbiAgLy8gb25fZGVtYW5kX3RhcmdldF9jYXBhY2l0eSAtIGNvbXB1dGVkOiB0cnVlLCBvcHRpb25hbDogZmFsc2UsIHJlcXVpcmVkOiBmYWxzZVxuICBwdWJsaWMgZ2V0IG9uRGVtYW5kVGFyZ2V0Q2FwYWNpdHkoKSB7XG4gICAgcmV0dXJuIHRoaXMuZ2V0TnVtYmVyQXR0cmlidXRlKCdvbl9kZW1hbmRfdGFyZ2V0X2NhcGFjaXR5Jyk7XG4gIH1cblxuICAvLyByZXBsYWNlX3VuaGVhbHRoeV9pbnN0YW5jZXMgLSBjb21wdXRlZDogdHJ1ZSwgb3B0aW9uYWw6IGZhbHNlLCByZXF1aXJlZDogZmFsc2VcbiAgcHVibGljIGdldCByZXBsYWNlVW5oZWFsdGh5SW5zdGFuY2VzKCkge1xuICAgIHJldHVybiB0aGlzLmdldEJvb2xlYW5BdHRyaWJ1dGUoJ3JlcGxhY2VfdW5oZWFsdGh5X2luc3RhbmNlcycpO1xuICB9XG5cbiAgLy8gc3BvdF9tYWludGVuYW5jZV9zdHJhdGVnaWVzIC0gY29tcHV0ZWQ6IHRydWUsIG9wdGlvbmFsOiBmYWxzZSwgcmVxdWlyZWQ6IGZhbHNlXG4gIHB1YmxpYyBnZXQgc3BvdE1haW50ZW5hbmNlU3RyYXRlZ2llcygpIHtcbiAgICByZXR1cm4gdGhpcy5pbnRlcnBvbGF0aW9uRm9yQXR0cmlidXRlKCdzcG90X21haW50ZW5hbmNlX3N0cmF0ZWdpZXMnKSBhcyBhbnk7XG4gIH1cblxuICAvLyBzcG90X21heF90b3RhbF9wcmljZSAtIGNvbXB1dGVkOiB0cnVlLCBvcHRpb25hbDogZmFsc2UsIHJlcXVpcmVkOiBmYWxzZVxuICBwdWJsaWMgZ2V0IHNwb3RNYXhUb3RhbFByaWNlKCkge1xuICAgIHJldHVybiB0aGlzLmdldFN0cmluZ0F0dHJpYnV0ZSgnc3BvdF9tYXhfdG90YWxfcHJpY2UnKTtcbiAgfVxuXG4gIC8vIHNwb3RfcHJpY2UgLSBjb21wdXRlZDogdHJ1ZSwgb3B0aW9uYWw6IGZhbHNlLCByZXF1aXJlZDogZmFsc2VcbiAgcHVibGljIGdldCBzcG90UHJpY2UoKSB7XG4gICAgcmV0dXJuIHRoaXMuZ2V0U3RyaW5nQXR0cmlidXRlKCdzcG90X3ByaWNlJyk7XG4gIH1cblxuICAvLyB0YXJnZXRfY2FwYWNpdHkgLSBjb21wdXRlZDogdHJ1ZSwgb3B0aW9uYWw6IGZhbHNlLCByZXF1aXJlZDogZmFsc2VcbiAgcHVibGljIGdldCB0YXJnZXRDYXBhY2l0eSgpIHtcbiAgICByZXR1cm4gdGhpcy5nZXROdW1iZXJBdHRyaWJ1dGUoJ3RhcmdldF9jYXBhY2l0eScpO1xuICB9XG5cbiAgLy8gdGVybWluYXRlX2luc3RhbmNlc193aXRoX2V4cGlyYXRpb24gLSBjb21wdXRlZDogdHJ1ZSwgb3B0aW9uYWw6IGZhbHNlLCByZXF1aXJlZDogZmFsc2VcbiAgcHVibGljIGdldCB0ZXJtaW5hdGVJbnN0YW5jZXNXaXRoRXhwaXJhdGlvbigpIHtcbiAgICByZXR1cm4gdGhpcy5nZXRCb29sZWFuQXR0cmlidXRlKCd0ZXJtaW5hdGVfaW5zdGFuY2VzX3dpdGhfZXhwaXJhdGlvbicpO1xuICB9XG5cbiAgLy8gdHlwZSAtIGNvbXB1dGVkOiB0cnVlLCBvcHRpb25hbDogZmFsc2UsIHJlcXVpcmVkOiBmYWxzZVxuICBwdWJsaWMgZ2V0IHR5cGUoKSB7XG4gICAgcmV0dXJuIHRoaXMuZ2V0U3RyaW5nQXR0cmlidXRlKCd0eXBlJyk7XG4gIH1cblxuICAvLyB2YWxpZF9mcm9tIC0gY29tcHV0ZWQ6IHRydWUsIG9wdGlvbmFsOiBmYWxzZSwgcmVxdWlyZWQ6IGZhbHNlXG4gIHB1YmxpYyBnZXQgdmFsaWRGcm9tKCkge1xuICAgIHJldHVybiB0aGlzLmdldFN0cmluZ0F0dHJpYnV0ZSgndmFsaWRfZnJvbScpO1xuICB9XG5cbiAgLy8gdmFsaWRfdW50aWwgLSBjb21wdXRlZDogdHJ1ZSwgb3B0aW9uYWw6IGZhbHNlLCByZXF1aXJlZDogZmFsc2VcbiAgcHVibGljIGdldCB2YWxpZFVudGlsKCkge1xuICAgIHJldHVybiB0aGlzLmdldFN0cmluZ0F0dHJpYnV0ZSgndmFsaWRfdW50aWwnKTtcbiAgfVxufVxuXG5leHBvcnQgZnVuY3Rpb24gZGF0YUF3c2NjRWMyU3BvdEZsZWV0U3BvdEZsZWV0UmVxdWVzdENvbmZpZ0RhdGFUb1RlcnJhZm9ybShzdHJ1Y3Q/OiBEYXRhQXdzY2NFYzJTcG90RmxlZXRTcG90RmxlZXRSZXF1ZXN0Q29uZmlnRGF0YSk6IGFueSB7XG4gIGlmICghY2RrdGYuY2FuSW5zcGVjdChzdHJ1Y3QpKSB7IHJldHVybiBzdHJ1Y3Q7IH1cbiAgcmV0dXJuIHtcbiAgICBhbGxvY2F0aW9uX3N0cmF0ZWd5OiBjZGt0Zi5zdHJpbmdUb1RlcnJhZm9ybShzdHJ1Y3QhLmFsbG9jYXRpb25TdHJhdGVneSksXG4gICAgY29udGV4dDogY2RrdGYuc3RyaW5nVG9UZXJyYWZvcm0oc3RydWN0IS5jb250ZXh0KSxcbiAgICBleGNlc3NfY2FwYWNpdHlfdGVybWluYXRpb25fcG9saWN5OiBjZGt0Zi5zdHJpbmdUb1RlcnJhZm9ybShzdHJ1Y3QhLmV4Y2Vzc0NhcGFjaXR5VGVybWluYXRpb25Qb2xpY3kpLFxuICAgIGlhbV9mbGVldF9yb2xlOiBjZGt0Zi5zdHJpbmdUb1RlcnJhZm9ybShzdHJ1Y3QhLmlhbUZsZWV0Um9sZSksXG4gICAgaW5zdGFuY2VfaW50ZXJydXB0aW9uX2JlaGF2aW9yOiBjZGt0Zi5zdHJpbmdUb1RlcnJhZm9ybShzdHJ1Y3QhLmluc3RhbmNlSW50ZXJydXB0aW9uQmVoYXZpb3IpLFxuICAgIGluc3RhbmNlX3Bvb2xzX3RvX3VzZV9jb3VudDogY2RrdGYubnVtYmVyVG9UZXJyYWZvcm0oc3RydWN0IS5pbnN0YW5jZVBvb2xzVG9Vc2VDb3VudCksXG4gICAgbGF1bmNoX3NwZWNpZmljYXRpb25zOiBjZGt0Zi5saXN0TWFwcGVyKGRhdGFBd3NjY0VjMlNwb3RGbGVldFNwb3RGbGVldFJlcXVlc3RDb25maWdEYXRhTGF1bmNoU3BlY2lmaWNhdGlvbnNUb1RlcnJhZm9ybSkoc3RydWN0IS5sYXVuY2hTcGVjaWZpY2F0aW9ucyksXG4gICAgbGF1bmNoX3RlbXBsYXRlX2NvbmZpZ3M6IGNka3RmLmxpc3RNYXBwZXIoZGF0YUF3c2NjRWMyU3BvdEZsZWV0U3BvdEZsZWV0UmVxdWVzdENvbmZpZ0RhdGFMYXVuY2hUZW1wbGF0ZUNvbmZpZ3NUb1RlcnJhZm9ybSkoc3RydWN0IS5sYXVuY2hUZW1wbGF0ZUNvbmZpZ3MpLFxuICAgIGxvYWRfYmFsYW5jZXJzX2NvbmZpZzogZGF0YUF3c2NjRWMyU3BvdEZsZWV0U3BvdEZsZWV0UmVxdWVzdENvbmZpZ0RhdGFMb2FkQmFsYW5jZXJzQ29uZmlnVG9UZXJyYWZvcm0oc3RydWN0IS5sb2FkQmFsYW5jZXJzQ29uZmlnKSxcbiAgICBvbl9kZW1hbmRfYWxsb2NhdGlvbl9zdHJhdGVneTogY2RrdGYuc3RyaW5nVG9UZXJyYWZvcm0oc3RydWN0IS5vbkRlbWFuZEFsbG9jYXRpb25TdHJhdGVneSksXG4gICAgb25fZGVtYW5kX21heF90b3RhbF9wcmljZTogY2RrdGYuc3RyaW5nVG9UZXJyYWZvcm0oc3RydWN0IS5vbkRlbWFuZE1heFRvdGFsUHJpY2UpLFxuICAgIG9uX2RlbWFuZF90YXJnZXRfY2FwYWNpdHk6IGNka3RmLm51bWJlclRvVGVycmFmb3JtKHN0cnVjdCEub25EZW1hbmRUYXJnZXRDYXBhY2l0eSksXG4gICAgcmVwbGFjZV91bmhlYWx0aHlfaW5zdGFuY2VzOiBjZGt0Zi5ib29sZWFuVG9UZXJyYWZvcm0oc3RydWN0IS5yZXBsYWNlVW5oZWFsdGh5SW5zdGFuY2VzKSxcbiAgICBzcG90X21haW50ZW5hbmNlX3N0cmF0ZWdpZXM6IGRhdGFBd3NjY0VjMlNwb3RGbGVldFNwb3RGbGVldFJlcXVlc3RDb25maWdEYXRhU3BvdE1haW50ZW5hbmNlU3RyYXRlZ2llc1RvVGVycmFmb3JtKHN0cnVjdCEuc3BvdE1haW50ZW5hbmNlU3RyYXRlZ2llcyksXG4gICAgc3BvdF9tYXhfdG90YWxfcHJpY2U6IGNka3RmLnN0cmluZ1RvVGVycmFmb3JtKHN0cnVjdCEuc3BvdE1heFRvdGFsUHJpY2UpLFxuICAgIHNwb3RfcHJpY2U6IGNka3RmLnN0cmluZ1RvVGVycmFmb3JtKHN0cnVjdCEuc3BvdFByaWNlKSxcbiAgICB0YXJnZXRfY2FwYWNpdHk6IGNka3RmLm51bWJlclRvVGVycmFmb3JtKHN0cnVjdCEudGFyZ2V0Q2FwYWNpdHkpLFxuICAgIHRlcm1pbmF0ZV9pbnN0YW5jZXNfd2l0aF9leHBpcmF0aW9uOiBjZGt0Zi5ib29sZWFuVG9UZXJyYWZvcm0oc3RydWN0IS50ZXJtaW5hdGVJbnN0YW5jZXNXaXRoRXhwaXJhdGlvbiksXG4gICAgdHlwZTogY2RrdGYuc3RyaW5nVG9UZXJyYWZvcm0oc3RydWN0IS50eXBlKSxcbiAgICB2YWxpZF9mcm9tOiBjZGt0Zi5zdHJpbmdUb1RlcnJhZm9ybShzdHJ1Y3QhLnZhbGlkRnJvbSksXG4gICAgdmFsaWRfdW50aWw6IGNka3RmLnN0cmluZ1RvVGVycmFmb3JtKHN0cnVjdCEudmFsaWRVbnRpbCksXG4gIH1cbn1cblxuXG4vKipcbiogUmVwcmVzZW50cyBhIHtAbGluayBodHRwczovL3d3dy50ZXJyYWZvcm0uaW8vZG9jcy9wcm92aWRlcnMvYXdzY2MvZC9lYzJfc3BvdF9mbGVldC5odG1sIGF3c2NjX2VjMl9zcG90X2ZsZWV0fVxuKi9cbmV4cG9ydCBjbGFzcyBEYXRhQXdzY2NFYzJTcG90RmxlZXQgZXh0ZW5kcyBjZGt0Zi5UZXJyYWZvcm1EYXRhU291cmNlIHtcblxuICAvLyA9PT09PT09PT09PT09PT09PVxuICAvLyBTVEFUSUMgUFJPUEVSVElFU1xuICAvLyA9PT09PT09PT09PT09PT09PVxuICBwdWJsaWMgc3RhdGljIHJlYWRvbmx5IHRmUmVzb3VyY2VUeXBlOiBzdHJpbmcgPSBcImF3c2NjX2VjMl9zcG90X2ZsZWV0XCI7XG5cbiAgLy8gPT09PT09PT09PT1cbiAgLy8gSU5JVElBTElaRVJcbiAgLy8gPT09PT09PT09PT1cblxuICAvKipcbiAgKiBDcmVhdGUgYSBuZXcge0BsaW5rIGh0dHBzOi8vd3d3LnRlcnJhZm9ybS5pby9kb2NzL3Byb3ZpZGVycy9hd3NjYy9kL2VjMl9zcG90X2ZsZWV0Lmh0bWwgYXdzY2NfZWMyX3Nwb3RfZmxlZXR9IERhdGEgU291cmNlXG4gICpcbiAgKiBAcGFyYW0gc2NvcGUgVGhlIHNjb3BlIGluIHdoaWNoIHRvIGRlZmluZSB0aGlzIGNvbnN0cnVjdFxuICAqIEBwYXJhbSBpZCBUaGUgc2NvcGVkIGNvbnN0cnVjdCBJRC4gTXVzdCBiZSB1bmlxdWUgYW1vbmdzdCBzaWJsaW5ncyBpbiB0aGUgc2FtZSBzY29wZVxuICAqIEBwYXJhbSBvcHRpb25zIERhdGFBd3NjY0VjMlNwb3RGbGVldENvbmZpZ1xuICAqL1xuICBwdWJsaWMgY29uc3RydWN0b3Ioc2NvcGU6IENvbnN0cnVjdCwgaWQ6IHN0cmluZywgY29uZmlnOiBEYXRhQXdzY2NFYzJTcG90RmxlZXRDb25maWcpIHtcbiAgICBzdXBlcihzY29wZSwgaWQsIHtcbiAgICAgIHRlcnJhZm9ybVJlc291cmNlVHlwZTogJ2F3c2NjX2VjMl9zcG90X2ZsZWV0JyxcbiAgICAgIHRlcnJhZm9ybUdlbmVyYXRvck1ldGFkYXRhOiB7XG4gICAgICAgIHByb3ZpZGVyTmFtZTogJ2F3c2NjJ1xuICAgICAgfSxcbiAgICAgIHByb3ZpZGVyOiBjb25maWcucHJvdmlkZXIsXG4gICAgICBkZXBlbmRzT246IGNvbmZpZy5kZXBlbmRzT24sXG4gICAgICBjb3VudDogY29uZmlnLmNvdW50LFxuICAgICAgbGlmZWN5Y2xlOiBjb25maWcubGlmZWN5Y2xlXG4gICAgfSk7XG4gICAgdGhpcy5faWQgPSBjb25maWcuaWQ7XG4gIH1cblxuICAvLyA9PT09PT09PT09XG4gIC8vIEFUVFJJQlVURVNcbiAgLy8gPT09PT09PT09PVxuXG4gIC8vIGlkIC0gY29tcHV0ZWQ6IGZhbHNlLCBvcHRpb25hbDogZmFsc2UsIHJlcXVpcmVkOiB0cnVlXG4gIHByaXZhdGUgX2lkOiBzdHJpbmc7XG4gIHB1YmxpYyBnZXQgaWQoKSB7XG4gICAgcmV0dXJuIHRoaXMuZ2V0U3RyaW5nQXR0cmlidXRlKCdpZCcpO1xuICB9XG4gIHB1YmxpYyBzZXQgaWQodmFsdWU6IHN0cmluZykge1xuICAgIHRoaXMuX2lkID0gdmFsdWU7XG4gIH1cbiAgLy8gVGVtcG9yYXJpbHkgZXhwb3NlIGlucHV0IHZhbHVlLiBVc2Ugd2l0aCBjYXV0aW9uLlxuICBwdWJsaWMgZ2V0IGlkSW5wdXQoKSB7XG4gICAgcmV0dXJuIHRoaXMuX2lkXG4gIH1cblxuICAvLyBzcG90X2ZsZWV0X3JlcXVlc3RfY29uZmlnX2RhdGEgLSBjb21wdXRlZDogdHJ1ZSwgb3B0aW9uYWw6IGZhbHNlLCByZXF1aXJlZDogZmFsc2VcbiAgcHVibGljIGdldCBzcG90RmxlZXRSZXF1ZXN0Q29uZmlnRGF0YSgpIHtcbiAgICByZXR1cm4gdGhpcy5pbnRlcnBvbGF0aW9uRm9yQXR0cmlidXRlKCdzcG90X2ZsZWV0X3JlcXVlc3RfY29uZmlnX2RhdGEnKSBhcyBhbnk7XG4gIH1cblxuICAvLyA9PT09PT09PT1cbiAgLy8gU1lOVEhFU0lTXG4gIC8vID09PT09PT09PVxuXG4gIHByb3RlY3RlZCBzeW50aGVzaXplQXR0cmlidXRlcygpOiB7IFtuYW1lOiBzdHJpbmddOiBhbnkgfSB7XG4gICAgcmV0dXJuIHtcbiAgICAgIGlkOiBjZGt0Zi5zdHJpbmdUb1RlcnJhZm9ybSh0aGlzLl9pZCksXG4gICAgfTtcbiAgfVxufVxuIl19