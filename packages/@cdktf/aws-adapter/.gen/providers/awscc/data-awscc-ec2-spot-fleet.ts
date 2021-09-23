// https://www.terraform.io/docs/providers/awscc/d/ec2_spot_fleet.html
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DataAwsccEc2SpotFleetConfig extends cdktf.TerraformMetaArguments {
  /**
  * Uniquely identifies the resource.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/d/ec2_spot_fleet.html#id DataAwsccEc2SpotFleet#id}
  */
  readonly id: string;
}
export class DataAwsccEc2SpotFleetSpotFleetRequestConfigDataLaunchSpecificationsBlockDeviceMappingsEbs extends cdktf.ComplexComputedList {

  // delete_on_termination - computed: true, optional: false, required: false
  public get deleteOnTermination() {
    return this.getBooleanAttribute('delete_on_termination');
  }

  // encrypted - computed: true, optional: false, required: false
  public get encrypted() {
    return this.getBooleanAttribute('encrypted');
  }

  // iops - computed: true, optional: false, required: false
  public get iops() {
    return this.getNumberAttribute('iops');
  }

  // snapshot_id - computed: true, optional: false, required: false
  public get snapshotId() {
    return this.getStringAttribute('snapshot_id');
  }

  // volume_size - computed: true, optional: false, required: false
  public get volumeSize() {
    return this.getNumberAttribute('volume_size');
  }

  // volume_type - computed: true, optional: false, required: false
  public get volumeType() {
    return this.getStringAttribute('volume_type');
  }
}

export function dataAwsccEc2SpotFleetSpotFleetRequestConfigDataLaunchSpecificationsBlockDeviceMappingsEbsToTerraform(struct?: DataAwsccEc2SpotFleetSpotFleetRequestConfigDataLaunchSpecificationsBlockDeviceMappingsEbs): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    delete_on_termination: cdktf.booleanToTerraform(struct!.deleteOnTermination),
    encrypted: cdktf.booleanToTerraform(struct!.encrypted),
    iops: cdktf.numberToTerraform(struct!.iops),
    snapshot_id: cdktf.stringToTerraform(struct!.snapshotId),
    volume_size: cdktf.numberToTerraform(struct!.volumeSize),
    volume_type: cdktf.stringToTerraform(struct!.volumeType),
  }
}

export class DataAwsccEc2SpotFleetSpotFleetRequestConfigDataLaunchSpecificationsBlockDeviceMappings extends cdktf.ComplexComputedList {

  // device_name - computed: true, optional: false, required: false
  public get deviceName() {
    return this.getStringAttribute('device_name');
  }

  // ebs - computed: true, optional: false, required: false
  public get ebs() {
    return this.interpolationForAttribute('ebs') as any;
  }

  // no_device - computed: true, optional: false, required: false
  public get noDevice() {
    return this.getStringAttribute('no_device');
  }

  // virtual_name - computed: true, optional: false, required: false
  public get virtualName() {
    return this.getStringAttribute('virtual_name');
  }
}

export function dataAwsccEc2SpotFleetSpotFleetRequestConfigDataLaunchSpecificationsBlockDeviceMappingsToTerraform(struct?: DataAwsccEc2SpotFleetSpotFleetRequestConfigDataLaunchSpecificationsBlockDeviceMappings): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    device_name: cdktf.stringToTerraform(struct!.deviceName),
    ebs: dataAwsccEc2SpotFleetSpotFleetRequestConfigDataLaunchSpecificationsBlockDeviceMappingsEbsToTerraform(struct!.ebs),
    no_device: cdktf.stringToTerraform(struct!.noDevice),
    virtual_name: cdktf.stringToTerraform(struct!.virtualName),
  }
}

export class DataAwsccEc2SpotFleetSpotFleetRequestConfigDataLaunchSpecificationsIamInstanceProfile extends cdktf.ComplexComputedList {

  // arn - computed: true, optional: false, required: false
  public get arn() {
    return this.getStringAttribute('arn');
  }
}

export function dataAwsccEc2SpotFleetSpotFleetRequestConfigDataLaunchSpecificationsIamInstanceProfileToTerraform(struct?: DataAwsccEc2SpotFleetSpotFleetRequestConfigDataLaunchSpecificationsIamInstanceProfile): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    arn: cdktf.stringToTerraform(struct!.arn),
  }
}

export class DataAwsccEc2SpotFleetSpotFleetRequestConfigDataLaunchSpecificationsMonitoring extends cdktf.ComplexComputedList {

  // enabled - computed: true, optional: false, required: false
  public get enabled() {
    return this.getBooleanAttribute('enabled');
  }
}

export function dataAwsccEc2SpotFleetSpotFleetRequestConfigDataLaunchSpecificationsMonitoringToTerraform(struct?: DataAwsccEc2SpotFleetSpotFleetRequestConfigDataLaunchSpecificationsMonitoring): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    enabled: cdktf.booleanToTerraform(struct!.enabled),
  }
}

export class DataAwsccEc2SpotFleetSpotFleetRequestConfigDataLaunchSpecificationsNetworkInterfacesIpv6Addresses extends cdktf.ComplexComputedList {

  // ipv_6_address - computed: true, optional: false, required: false
  public get ipv6Address() {
    return this.getStringAttribute('ipv_6_address');
  }
}

export function dataAwsccEc2SpotFleetSpotFleetRequestConfigDataLaunchSpecificationsNetworkInterfacesIpv6AddressesToTerraform(struct?: DataAwsccEc2SpotFleetSpotFleetRequestConfigDataLaunchSpecificationsNetworkInterfacesIpv6Addresses): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    ipv_6_address: cdktf.stringToTerraform(struct!.ipv6Address),
  }
}

export class DataAwsccEc2SpotFleetSpotFleetRequestConfigDataLaunchSpecificationsNetworkInterfacesPrivateIpAddresses extends cdktf.ComplexComputedList {

  // primary - computed: true, optional: false, required: false
  public get primary() {
    return this.getBooleanAttribute('primary');
  }

  // private_ip_address - computed: true, optional: false, required: false
  public get privateIpAddress() {
    return this.getStringAttribute('private_ip_address');
  }
}

export function dataAwsccEc2SpotFleetSpotFleetRequestConfigDataLaunchSpecificationsNetworkInterfacesPrivateIpAddressesToTerraform(struct?: DataAwsccEc2SpotFleetSpotFleetRequestConfigDataLaunchSpecificationsNetworkInterfacesPrivateIpAddresses): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    primary: cdktf.booleanToTerraform(struct!.primary),
    private_ip_address: cdktf.stringToTerraform(struct!.privateIpAddress),
  }
}

export class DataAwsccEc2SpotFleetSpotFleetRequestConfigDataLaunchSpecificationsNetworkInterfaces extends cdktf.ComplexComputedList {

  // associate_public_ip_address - computed: true, optional: false, required: false
  public get associatePublicIpAddress() {
    return this.getBooleanAttribute('associate_public_ip_address');
  }

  // delete_on_termination - computed: true, optional: false, required: false
  public get deleteOnTermination() {
    return this.getBooleanAttribute('delete_on_termination');
  }

  // description - computed: true, optional: false, required: false
  public get description() {
    return this.getStringAttribute('description');
  }

  // device_index - computed: true, optional: false, required: false
  public get deviceIndex() {
    return this.getNumberAttribute('device_index');
  }

  // groups - computed: true, optional: false, required: false
  public get groups() {
    return this.getListAttribute('groups');
  }

  // ipv_6_address_count - computed: true, optional: false, required: false
  public get ipv6AddressCount() {
    return this.getNumberAttribute('ipv_6_address_count');
  }

  // ipv_6_addresses - computed: true, optional: false, required: false
  public get ipv6Addresses() {
    return this.interpolationForAttribute('ipv_6_addresses') as any;
  }

  // network_interface_id - computed: true, optional: false, required: false
  public get networkInterfaceId() {
    return this.getStringAttribute('network_interface_id');
  }

  // private_ip_addresses - computed: true, optional: false, required: false
  public get privateIpAddresses() {
    return this.interpolationForAttribute('private_ip_addresses') as any;
  }

  // secondary_private_ip_address_count - computed: true, optional: false, required: false
  public get secondaryPrivateIpAddressCount() {
    return this.getNumberAttribute('secondary_private_ip_address_count');
  }

  // subnet_id - computed: true, optional: false, required: false
  public get subnetId() {
    return this.getStringAttribute('subnet_id');
  }
}

export function dataAwsccEc2SpotFleetSpotFleetRequestConfigDataLaunchSpecificationsNetworkInterfacesToTerraform(struct?: DataAwsccEc2SpotFleetSpotFleetRequestConfigDataLaunchSpecificationsNetworkInterfaces): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    associate_public_ip_address: cdktf.booleanToTerraform(struct!.associatePublicIpAddress),
    delete_on_termination: cdktf.booleanToTerraform(struct!.deleteOnTermination),
    description: cdktf.stringToTerraform(struct!.description),
    device_index: cdktf.numberToTerraform(struct!.deviceIndex),
    groups: cdktf.listMapper(cdktf.stringToTerraform)(struct!.groups),
    ipv_6_address_count: cdktf.numberToTerraform(struct!.ipv6AddressCount),
    ipv_6_addresses: cdktf.listMapper(dataAwsccEc2SpotFleetSpotFleetRequestConfigDataLaunchSpecificationsNetworkInterfacesIpv6AddressesToTerraform)(struct!.ipv6Addresses),
    network_interface_id: cdktf.stringToTerraform(struct!.networkInterfaceId),
    private_ip_addresses: cdktf.listMapper(dataAwsccEc2SpotFleetSpotFleetRequestConfigDataLaunchSpecificationsNetworkInterfacesPrivateIpAddressesToTerraform)(struct!.privateIpAddresses),
    secondary_private_ip_address_count: cdktf.numberToTerraform(struct!.secondaryPrivateIpAddressCount),
    subnet_id: cdktf.stringToTerraform(struct!.subnetId),
  }
}

export class DataAwsccEc2SpotFleetSpotFleetRequestConfigDataLaunchSpecificationsPlacement extends cdktf.ComplexComputedList {

  // availability_zone - computed: true, optional: false, required: false
  public get availabilityZone() {
    return this.getStringAttribute('availability_zone');
  }

  // group_name - computed: true, optional: false, required: false
  public get groupName() {
    return this.getStringAttribute('group_name');
  }

  // tenancy - computed: true, optional: false, required: false
  public get tenancy() {
    return this.getStringAttribute('tenancy');
  }
}

export function dataAwsccEc2SpotFleetSpotFleetRequestConfigDataLaunchSpecificationsPlacementToTerraform(struct?: DataAwsccEc2SpotFleetSpotFleetRequestConfigDataLaunchSpecificationsPlacement): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    availability_zone: cdktf.stringToTerraform(struct!.availabilityZone),
    group_name: cdktf.stringToTerraform(struct!.groupName),
    tenancy: cdktf.stringToTerraform(struct!.tenancy),
  }
}

export class DataAwsccEc2SpotFleetSpotFleetRequestConfigDataLaunchSpecificationsSecurityGroups extends cdktf.ComplexComputedList {

  // group_id - computed: true, optional: false, required: false
  public get groupId() {
    return this.getStringAttribute('group_id');
  }
}

export function dataAwsccEc2SpotFleetSpotFleetRequestConfigDataLaunchSpecificationsSecurityGroupsToTerraform(struct?: DataAwsccEc2SpotFleetSpotFleetRequestConfigDataLaunchSpecificationsSecurityGroups): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    group_id: cdktf.stringToTerraform(struct!.groupId),
  }
}

export class DataAwsccEc2SpotFleetSpotFleetRequestConfigDataLaunchSpecificationsTagSpecificationsTags extends cdktf.ComplexComputedList {

  // key - computed: true, optional: false, required: false
  public get key() {
    return this.getStringAttribute('key');
  }

  // value - computed: true, optional: false, required: false
  public get value() {
    return this.getStringAttribute('value');
  }
}

export function dataAwsccEc2SpotFleetSpotFleetRequestConfigDataLaunchSpecificationsTagSpecificationsTagsToTerraform(struct?: DataAwsccEc2SpotFleetSpotFleetRequestConfigDataLaunchSpecificationsTagSpecificationsTags): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    key: cdktf.stringToTerraform(struct!.key),
    value: cdktf.stringToTerraform(struct!.value),
  }
}

export class DataAwsccEc2SpotFleetSpotFleetRequestConfigDataLaunchSpecificationsTagSpecifications extends cdktf.ComplexComputedList {

  // resource_type - computed: true, optional: false, required: false
  public get resourceType() {
    return this.getStringAttribute('resource_type');
  }

  // tags - computed: true, optional: false, required: false
  public get tags() {
    return this.interpolationForAttribute('tags') as any;
  }
}

export function dataAwsccEc2SpotFleetSpotFleetRequestConfigDataLaunchSpecificationsTagSpecificationsToTerraform(struct?: DataAwsccEc2SpotFleetSpotFleetRequestConfigDataLaunchSpecificationsTagSpecifications): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    resource_type: cdktf.stringToTerraform(struct!.resourceType),
    tags: cdktf.listMapper(dataAwsccEc2SpotFleetSpotFleetRequestConfigDataLaunchSpecificationsTagSpecificationsTagsToTerraform)(struct!.tags),
  }
}

export class DataAwsccEc2SpotFleetSpotFleetRequestConfigDataLaunchSpecifications extends cdktf.ComplexComputedList {

  // block_device_mappings - computed: true, optional: false, required: false
  public get blockDeviceMappings() {
    return this.interpolationForAttribute('block_device_mappings') as any;
  }

  // ebs_optimized - computed: true, optional: false, required: false
  public get ebsOptimized() {
    return this.getBooleanAttribute('ebs_optimized');
  }

  // iam_instance_profile - computed: true, optional: false, required: false
  public get iamInstanceProfile() {
    return this.interpolationForAttribute('iam_instance_profile') as any;
  }

  // image_id - computed: true, optional: false, required: false
  public get imageId() {
    return this.getStringAttribute('image_id');
  }

  // instance_type - computed: true, optional: false, required: false
  public get instanceType() {
    return this.getStringAttribute('instance_type');
  }

  // kernel_id - computed: true, optional: false, required: false
  public get kernelId() {
    return this.getStringAttribute('kernel_id');
  }

  // key_name - computed: true, optional: false, required: false
  public get keyName() {
    return this.getStringAttribute('key_name');
  }

  // monitoring - computed: true, optional: false, required: false
  public get monitoring() {
    return this.interpolationForAttribute('monitoring') as any;
  }

  // network_interfaces - computed: true, optional: false, required: false
  public get networkInterfaces() {
    return this.interpolationForAttribute('network_interfaces') as any;
  }

  // placement - computed: true, optional: false, required: false
  public get placement() {
    return this.interpolationForAttribute('placement') as any;
  }

  // ramdisk_id - computed: true, optional: false, required: false
  public get ramdiskId() {
    return this.getStringAttribute('ramdisk_id');
  }

  // security_groups - computed: true, optional: false, required: false
  public get securityGroups() {
    return this.interpolationForAttribute('security_groups') as any;
  }

  // spot_price - computed: true, optional: false, required: false
  public get spotPrice() {
    return this.getStringAttribute('spot_price');
  }

  // subnet_id - computed: true, optional: false, required: false
  public get subnetId() {
    return this.getStringAttribute('subnet_id');
  }

  // tag_specifications - computed: true, optional: false, required: false
  public get tagSpecifications() {
    return this.interpolationForAttribute('tag_specifications') as any;
  }

  // user_data - computed: true, optional: false, required: false
  public get userData() {
    return this.getStringAttribute('user_data');
  }

  // weighted_capacity - computed: true, optional: false, required: false
  public get weightedCapacity() {
    return this.getNumberAttribute('weighted_capacity');
  }
}

export function dataAwsccEc2SpotFleetSpotFleetRequestConfigDataLaunchSpecificationsToTerraform(struct?: DataAwsccEc2SpotFleetSpotFleetRequestConfigDataLaunchSpecifications): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    block_device_mappings: cdktf.listMapper(dataAwsccEc2SpotFleetSpotFleetRequestConfigDataLaunchSpecificationsBlockDeviceMappingsToTerraform)(struct!.blockDeviceMappings),
    ebs_optimized: cdktf.booleanToTerraform(struct!.ebsOptimized),
    iam_instance_profile: dataAwsccEc2SpotFleetSpotFleetRequestConfigDataLaunchSpecificationsIamInstanceProfileToTerraform(struct!.iamInstanceProfile),
    image_id: cdktf.stringToTerraform(struct!.imageId),
    instance_type: cdktf.stringToTerraform(struct!.instanceType),
    kernel_id: cdktf.stringToTerraform(struct!.kernelId),
    key_name: cdktf.stringToTerraform(struct!.keyName),
    monitoring: dataAwsccEc2SpotFleetSpotFleetRequestConfigDataLaunchSpecificationsMonitoringToTerraform(struct!.monitoring),
    network_interfaces: cdktf.listMapper(dataAwsccEc2SpotFleetSpotFleetRequestConfigDataLaunchSpecificationsNetworkInterfacesToTerraform)(struct!.networkInterfaces),
    placement: dataAwsccEc2SpotFleetSpotFleetRequestConfigDataLaunchSpecificationsPlacementToTerraform(struct!.placement),
    ramdisk_id: cdktf.stringToTerraform(struct!.ramdiskId),
    security_groups: cdktf.listMapper(dataAwsccEc2SpotFleetSpotFleetRequestConfigDataLaunchSpecificationsSecurityGroupsToTerraform)(struct!.securityGroups),
    spot_price: cdktf.stringToTerraform(struct!.spotPrice),
    subnet_id: cdktf.stringToTerraform(struct!.subnetId),
    tag_specifications: cdktf.listMapper(dataAwsccEc2SpotFleetSpotFleetRequestConfigDataLaunchSpecificationsTagSpecificationsToTerraform)(struct!.tagSpecifications),
    user_data: cdktf.stringToTerraform(struct!.userData),
    weighted_capacity: cdktf.numberToTerraform(struct!.weightedCapacity),
  }
}

export class DataAwsccEc2SpotFleetSpotFleetRequestConfigDataLaunchTemplateConfigsLaunchTemplateSpecification extends cdktf.ComplexComputedList {

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

export function dataAwsccEc2SpotFleetSpotFleetRequestConfigDataLaunchTemplateConfigsLaunchTemplateSpecificationToTerraform(struct?: DataAwsccEc2SpotFleetSpotFleetRequestConfigDataLaunchTemplateConfigsLaunchTemplateSpecification): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    launch_template_id: cdktf.stringToTerraform(struct!.launchTemplateId),
    launch_template_name: cdktf.stringToTerraform(struct!.launchTemplateName),
    version: cdktf.stringToTerraform(struct!.version),
  }
}

export class DataAwsccEc2SpotFleetSpotFleetRequestConfigDataLaunchTemplateConfigsOverrides extends cdktf.ComplexComputedList {

  // availability_zone - computed: true, optional: false, required: false
  public get availabilityZone() {
    return this.getStringAttribute('availability_zone');
  }

  // instance_type - computed: true, optional: false, required: false
  public get instanceType() {
    return this.getStringAttribute('instance_type');
  }

  // spot_price - computed: true, optional: false, required: false
  public get spotPrice() {
    return this.getStringAttribute('spot_price');
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

export function dataAwsccEc2SpotFleetSpotFleetRequestConfigDataLaunchTemplateConfigsOverridesToTerraform(struct?: DataAwsccEc2SpotFleetSpotFleetRequestConfigDataLaunchTemplateConfigsOverrides): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    availability_zone: cdktf.stringToTerraform(struct!.availabilityZone),
    instance_type: cdktf.stringToTerraform(struct!.instanceType),
    spot_price: cdktf.stringToTerraform(struct!.spotPrice),
    subnet_id: cdktf.stringToTerraform(struct!.subnetId),
    weighted_capacity: cdktf.numberToTerraform(struct!.weightedCapacity),
  }
}

export class DataAwsccEc2SpotFleetSpotFleetRequestConfigDataLaunchTemplateConfigs extends cdktf.ComplexComputedList {

  // launch_template_specification - computed: true, optional: false, required: false
  public get launchTemplateSpecification() {
    return this.interpolationForAttribute('launch_template_specification') as any;
  }

  // overrides - computed: true, optional: false, required: false
  public get overrides() {
    return this.interpolationForAttribute('overrides') as any;
  }
}

export function dataAwsccEc2SpotFleetSpotFleetRequestConfigDataLaunchTemplateConfigsToTerraform(struct?: DataAwsccEc2SpotFleetSpotFleetRequestConfigDataLaunchTemplateConfigs): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    launch_template_specification: dataAwsccEc2SpotFleetSpotFleetRequestConfigDataLaunchTemplateConfigsLaunchTemplateSpecificationToTerraform(struct!.launchTemplateSpecification),
    overrides: cdktf.listMapper(dataAwsccEc2SpotFleetSpotFleetRequestConfigDataLaunchTemplateConfigsOverridesToTerraform)(struct!.overrides),
  }
}

export class DataAwsccEc2SpotFleetSpotFleetRequestConfigDataLoadBalancersConfigClassicLoadBalancersConfigClassicLoadBalancers extends cdktf.ComplexComputedList {

  // name - computed: true, optional: false, required: false
  public get name() {
    return this.getStringAttribute('name');
  }
}

export function dataAwsccEc2SpotFleetSpotFleetRequestConfigDataLoadBalancersConfigClassicLoadBalancersConfigClassicLoadBalancersToTerraform(struct?: DataAwsccEc2SpotFleetSpotFleetRequestConfigDataLoadBalancersConfigClassicLoadBalancersConfigClassicLoadBalancers): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    name: cdktf.stringToTerraform(struct!.name),
  }
}

export class DataAwsccEc2SpotFleetSpotFleetRequestConfigDataLoadBalancersConfigClassicLoadBalancersConfig extends cdktf.ComplexComputedList {

  // classic_load_balancers - computed: true, optional: false, required: false
  public get classicLoadBalancers() {
    return this.interpolationForAttribute('classic_load_balancers') as any;
  }
}

export function dataAwsccEc2SpotFleetSpotFleetRequestConfigDataLoadBalancersConfigClassicLoadBalancersConfigToTerraform(struct?: DataAwsccEc2SpotFleetSpotFleetRequestConfigDataLoadBalancersConfigClassicLoadBalancersConfig): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    classic_load_balancers: cdktf.listMapper(dataAwsccEc2SpotFleetSpotFleetRequestConfigDataLoadBalancersConfigClassicLoadBalancersConfigClassicLoadBalancersToTerraform)(struct!.classicLoadBalancers),
  }
}

export class DataAwsccEc2SpotFleetSpotFleetRequestConfigDataLoadBalancersConfigTargetGroupsConfigTargetGroups extends cdktf.ComplexComputedList {

  // arn - computed: true, optional: false, required: false
  public get arn() {
    return this.getStringAttribute('arn');
  }
}

export function dataAwsccEc2SpotFleetSpotFleetRequestConfigDataLoadBalancersConfigTargetGroupsConfigTargetGroupsToTerraform(struct?: DataAwsccEc2SpotFleetSpotFleetRequestConfigDataLoadBalancersConfigTargetGroupsConfigTargetGroups): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    arn: cdktf.stringToTerraform(struct!.arn),
  }
}

export class DataAwsccEc2SpotFleetSpotFleetRequestConfigDataLoadBalancersConfigTargetGroupsConfig extends cdktf.ComplexComputedList {

  // target_groups - computed: true, optional: false, required: false
  public get targetGroups() {
    return this.interpolationForAttribute('target_groups') as any;
  }
}

export function dataAwsccEc2SpotFleetSpotFleetRequestConfigDataLoadBalancersConfigTargetGroupsConfigToTerraform(struct?: DataAwsccEc2SpotFleetSpotFleetRequestConfigDataLoadBalancersConfigTargetGroupsConfig): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    target_groups: cdktf.listMapper(dataAwsccEc2SpotFleetSpotFleetRequestConfigDataLoadBalancersConfigTargetGroupsConfigTargetGroupsToTerraform)(struct!.targetGroups),
  }
}

export class DataAwsccEc2SpotFleetSpotFleetRequestConfigDataLoadBalancersConfig extends cdktf.ComplexComputedList {

  // classic_load_balancers_config - computed: true, optional: false, required: false
  public get classicLoadBalancersConfig() {
    return this.interpolationForAttribute('classic_load_balancers_config') as any;
  }

  // target_groups_config - computed: true, optional: false, required: false
  public get targetGroupsConfig() {
    return this.interpolationForAttribute('target_groups_config') as any;
  }
}

export function dataAwsccEc2SpotFleetSpotFleetRequestConfigDataLoadBalancersConfigToTerraform(struct?: DataAwsccEc2SpotFleetSpotFleetRequestConfigDataLoadBalancersConfig): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    classic_load_balancers_config: dataAwsccEc2SpotFleetSpotFleetRequestConfigDataLoadBalancersConfigClassicLoadBalancersConfigToTerraform(struct!.classicLoadBalancersConfig),
    target_groups_config: dataAwsccEc2SpotFleetSpotFleetRequestConfigDataLoadBalancersConfigTargetGroupsConfigToTerraform(struct!.targetGroupsConfig),
  }
}

export class DataAwsccEc2SpotFleetSpotFleetRequestConfigDataSpotMaintenanceStrategiesCapacityRebalance extends cdktf.ComplexComputedList {

  // replacement_strategy - computed: true, optional: false, required: false
  public get replacementStrategy() {
    return this.getStringAttribute('replacement_strategy');
  }
}

export function dataAwsccEc2SpotFleetSpotFleetRequestConfigDataSpotMaintenanceStrategiesCapacityRebalanceToTerraform(struct?: DataAwsccEc2SpotFleetSpotFleetRequestConfigDataSpotMaintenanceStrategiesCapacityRebalance): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    replacement_strategy: cdktf.stringToTerraform(struct!.replacementStrategy),
  }
}

export class DataAwsccEc2SpotFleetSpotFleetRequestConfigDataSpotMaintenanceStrategies extends cdktf.ComplexComputedList {

  // capacity_rebalance - computed: true, optional: false, required: false
  public get capacityRebalance() {
    return this.interpolationForAttribute('capacity_rebalance') as any;
  }
}

export function dataAwsccEc2SpotFleetSpotFleetRequestConfigDataSpotMaintenanceStrategiesToTerraform(struct?: DataAwsccEc2SpotFleetSpotFleetRequestConfigDataSpotMaintenanceStrategies): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    capacity_rebalance: dataAwsccEc2SpotFleetSpotFleetRequestConfigDataSpotMaintenanceStrategiesCapacityRebalanceToTerraform(struct!.capacityRebalance),
  }
}

export class DataAwsccEc2SpotFleetSpotFleetRequestConfigData extends cdktf.ComplexComputedList {

  // allocation_strategy - computed: true, optional: false, required: false
  public get allocationStrategy() {
    return this.getStringAttribute('allocation_strategy');
  }

  // context - computed: true, optional: false, required: false
  public get context() {
    return this.getStringAttribute('context');
  }

  // excess_capacity_termination_policy - computed: true, optional: false, required: false
  public get excessCapacityTerminationPolicy() {
    return this.getStringAttribute('excess_capacity_termination_policy');
  }

  // iam_fleet_role - computed: true, optional: false, required: false
  public get iamFleetRole() {
    return this.getStringAttribute('iam_fleet_role');
  }

  // instance_interruption_behavior - computed: true, optional: false, required: false
  public get instanceInterruptionBehavior() {
    return this.getStringAttribute('instance_interruption_behavior');
  }

  // instance_pools_to_use_count - computed: true, optional: false, required: false
  public get instancePoolsToUseCount() {
    return this.getNumberAttribute('instance_pools_to_use_count');
  }

  // launch_specifications - computed: true, optional: false, required: false
  public get launchSpecifications() {
    return this.interpolationForAttribute('launch_specifications') as any;
  }

  // launch_template_configs - computed: true, optional: false, required: false
  public get launchTemplateConfigs() {
    return this.interpolationForAttribute('launch_template_configs') as any;
  }

  // load_balancers_config - computed: true, optional: false, required: false
  public get loadBalancersConfig() {
    return this.interpolationForAttribute('load_balancers_config') as any;
  }

  // on_demand_allocation_strategy - computed: true, optional: false, required: false
  public get onDemandAllocationStrategy() {
    return this.getStringAttribute('on_demand_allocation_strategy');
  }

  // on_demand_max_total_price - computed: true, optional: false, required: false
  public get onDemandMaxTotalPrice() {
    return this.getStringAttribute('on_demand_max_total_price');
  }

  // on_demand_target_capacity - computed: true, optional: false, required: false
  public get onDemandTargetCapacity() {
    return this.getNumberAttribute('on_demand_target_capacity');
  }

  // replace_unhealthy_instances - computed: true, optional: false, required: false
  public get replaceUnhealthyInstances() {
    return this.getBooleanAttribute('replace_unhealthy_instances');
  }

  // spot_maintenance_strategies - computed: true, optional: false, required: false
  public get spotMaintenanceStrategies() {
    return this.interpolationForAttribute('spot_maintenance_strategies') as any;
  }

  // spot_max_total_price - computed: true, optional: false, required: false
  public get spotMaxTotalPrice() {
    return this.getStringAttribute('spot_max_total_price');
  }

  // spot_price - computed: true, optional: false, required: false
  public get spotPrice() {
    return this.getStringAttribute('spot_price');
  }

  // target_capacity - computed: true, optional: false, required: false
  public get targetCapacity() {
    return this.getNumberAttribute('target_capacity');
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
}

export function dataAwsccEc2SpotFleetSpotFleetRequestConfigDataToTerraform(struct?: DataAwsccEc2SpotFleetSpotFleetRequestConfigData): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    allocation_strategy: cdktf.stringToTerraform(struct!.allocationStrategy),
    context: cdktf.stringToTerraform(struct!.context),
    excess_capacity_termination_policy: cdktf.stringToTerraform(struct!.excessCapacityTerminationPolicy),
    iam_fleet_role: cdktf.stringToTerraform(struct!.iamFleetRole),
    instance_interruption_behavior: cdktf.stringToTerraform(struct!.instanceInterruptionBehavior),
    instance_pools_to_use_count: cdktf.numberToTerraform(struct!.instancePoolsToUseCount),
    launch_specifications: cdktf.listMapper(dataAwsccEc2SpotFleetSpotFleetRequestConfigDataLaunchSpecificationsToTerraform)(struct!.launchSpecifications),
    launch_template_configs: cdktf.listMapper(dataAwsccEc2SpotFleetSpotFleetRequestConfigDataLaunchTemplateConfigsToTerraform)(struct!.launchTemplateConfigs),
    load_balancers_config: dataAwsccEc2SpotFleetSpotFleetRequestConfigDataLoadBalancersConfigToTerraform(struct!.loadBalancersConfig),
    on_demand_allocation_strategy: cdktf.stringToTerraform(struct!.onDemandAllocationStrategy),
    on_demand_max_total_price: cdktf.stringToTerraform(struct!.onDemandMaxTotalPrice),
    on_demand_target_capacity: cdktf.numberToTerraform(struct!.onDemandTargetCapacity),
    replace_unhealthy_instances: cdktf.booleanToTerraform(struct!.replaceUnhealthyInstances),
    spot_maintenance_strategies: dataAwsccEc2SpotFleetSpotFleetRequestConfigDataSpotMaintenanceStrategiesToTerraform(struct!.spotMaintenanceStrategies),
    spot_max_total_price: cdktf.stringToTerraform(struct!.spotMaxTotalPrice),
    spot_price: cdktf.stringToTerraform(struct!.spotPrice),
    target_capacity: cdktf.numberToTerraform(struct!.targetCapacity),
    terminate_instances_with_expiration: cdktf.booleanToTerraform(struct!.terminateInstancesWithExpiration),
    type: cdktf.stringToTerraform(struct!.type),
    valid_from: cdktf.stringToTerraform(struct!.validFrom),
    valid_until: cdktf.stringToTerraform(struct!.validUntil),
  }
}


/**
* Represents a {@link https://www.terraform.io/docs/providers/awscc/d/ec2_spot_fleet.html awscc_ec2_spot_fleet}
*/
export class DataAwsccEc2SpotFleet extends cdktf.TerraformDataSource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType: string = "awscc_ec2_spot_fleet";

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
  public constructor(scope: Construct, id: string, config: DataAwsccEc2SpotFleetConfig) {
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

  // ==========
  // ATTRIBUTES
  // ==========

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

  // spot_fleet_request_config_data - computed: true, optional: false, required: false
  public get spotFleetRequestConfigData() {
    return this.interpolationForAttribute('spot_fleet_request_config_data') as any;
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
