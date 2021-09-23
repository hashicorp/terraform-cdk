// https://www.terraform.io/docs/providers/awscc/r/ec2_spot_fleet.html
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface Ec2SpotFleetConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/ec2_spot_fleet.html#spot_fleet_request_config_data Ec2SpotFleet#spot_fleet_request_config_data}
  */
  readonly spotFleetRequestConfigData: Ec2SpotFleetSpotFleetRequestConfigData;
}
export interface Ec2SpotFleetSpotFleetRequestConfigDataLaunchSpecificationsBlockDeviceMappingsEbs {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/ec2_spot_fleet.html#delete_on_termination Ec2SpotFleet#delete_on_termination}
  */
  readonly deleteOnTermination?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/ec2_spot_fleet.html#encrypted Ec2SpotFleet#encrypted}
  */
  readonly encrypted?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/ec2_spot_fleet.html#iops Ec2SpotFleet#iops}
  */
  readonly iops?: number;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/ec2_spot_fleet.html#snapshot_id Ec2SpotFleet#snapshot_id}
  */
  readonly snapshotId?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/ec2_spot_fleet.html#volume_size Ec2SpotFleet#volume_size}
  */
  readonly volumeSize?: number;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/ec2_spot_fleet.html#volume_type Ec2SpotFleet#volume_type}
  */
  readonly volumeType?: string;
}

export function ec2SpotFleetSpotFleetRequestConfigDataLaunchSpecificationsBlockDeviceMappingsEbsToTerraform(struct?: Ec2SpotFleetSpotFleetRequestConfigDataLaunchSpecificationsBlockDeviceMappingsEbs): any {
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

export interface Ec2SpotFleetSpotFleetRequestConfigDataLaunchSpecificationsBlockDeviceMappings {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/ec2_spot_fleet.html#device_name Ec2SpotFleet#device_name}
  */
  readonly deviceName: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/ec2_spot_fleet.html#ebs Ec2SpotFleet#ebs}
  */
  readonly ebs?: Ec2SpotFleetSpotFleetRequestConfigDataLaunchSpecificationsBlockDeviceMappingsEbs;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/ec2_spot_fleet.html#no_device Ec2SpotFleet#no_device}
  */
  readonly noDevice?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/ec2_spot_fleet.html#virtual_name Ec2SpotFleet#virtual_name}
  */
  readonly virtualName?: string;
}

export function ec2SpotFleetSpotFleetRequestConfigDataLaunchSpecificationsBlockDeviceMappingsToTerraform(struct?: Ec2SpotFleetSpotFleetRequestConfigDataLaunchSpecificationsBlockDeviceMappings): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    device_name: cdktf.stringToTerraform(struct!.deviceName),
    ebs: ec2SpotFleetSpotFleetRequestConfigDataLaunchSpecificationsBlockDeviceMappingsEbsToTerraform(struct!.ebs),
    no_device: cdktf.stringToTerraform(struct!.noDevice),
    virtual_name: cdktf.stringToTerraform(struct!.virtualName),
  }
}

export interface Ec2SpotFleetSpotFleetRequestConfigDataLaunchSpecificationsIamInstanceProfile {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/ec2_spot_fleet.html#arn Ec2SpotFleet#arn}
  */
  readonly arn?: string;
}

export function ec2SpotFleetSpotFleetRequestConfigDataLaunchSpecificationsIamInstanceProfileToTerraform(struct?: Ec2SpotFleetSpotFleetRequestConfigDataLaunchSpecificationsIamInstanceProfile): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    arn: cdktf.stringToTerraform(struct!.arn),
  }
}

export interface Ec2SpotFleetSpotFleetRequestConfigDataLaunchSpecificationsMonitoring {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/ec2_spot_fleet.html#enabled Ec2SpotFleet#enabled}
  */
  readonly enabled?: boolean | cdktf.IResolvable;
}

export function ec2SpotFleetSpotFleetRequestConfigDataLaunchSpecificationsMonitoringToTerraform(struct?: Ec2SpotFleetSpotFleetRequestConfigDataLaunchSpecificationsMonitoring): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    enabled: cdktf.booleanToTerraform(struct!.enabled),
  }
}

export interface Ec2SpotFleetSpotFleetRequestConfigDataLaunchSpecificationsNetworkInterfacesIpv6Addresses {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/ec2_spot_fleet.html#ipv_6_address Ec2SpotFleet#ipv_6_address}
  */
  readonly ipv6Address: string;
}

export function ec2SpotFleetSpotFleetRequestConfigDataLaunchSpecificationsNetworkInterfacesIpv6AddressesToTerraform(struct?: Ec2SpotFleetSpotFleetRequestConfigDataLaunchSpecificationsNetworkInterfacesIpv6Addresses): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    ipv_6_address: cdktf.stringToTerraform(struct!.ipv6Address),
  }
}

export interface Ec2SpotFleetSpotFleetRequestConfigDataLaunchSpecificationsNetworkInterfacesPrivateIpAddresses {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/ec2_spot_fleet.html#primary Ec2SpotFleet#primary}
  */
  readonly primary?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/ec2_spot_fleet.html#private_ip_address Ec2SpotFleet#private_ip_address}
  */
  readonly privateIpAddress: string;
}

export function ec2SpotFleetSpotFleetRequestConfigDataLaunchSpecificationsNetworkInterfacesPrivateIpAddressesToTerraform(struct?: Ec2SpotFleetSpotFleetRequestConfigDataLaunchSpecificationsNetworkInterfacesPrivateIpAddresses): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    primary: cdktf.booleanToTerraform(struct!.primary),
    private_ip_address: cdktf.stringToTerraform(struct!.privateIpAddress),
  }
}

export interface Ec2SpotFleetSpotFleetRequestConfigDataLaunchSpecificationsNetworkInterfaces {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/ec2_spot_fleet.html#associate_public_ip_address Ec2SpotFleet#associate_public_ip_address}
  */
  readonly associatePublicIpAddress?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/ec2_spot_fleet.html#delete_on_termination Ec2SpotFleet#delete_on_termination}
  */
  readonly deleteOnTermination?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/ec2_spot_fleet.html#description Ec2SpotFleet#description}
  */
  readonly description?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/ec2_spot_fleet.html#device_index Ec2SpotFleet#device_index}
  */
  readonly deviceIndex?: number;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/ec2_spot_fleet.html#groups Ec2SpotFleet#groups}
  */
  readonly groups?: string[];
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/ec2_spot_fleet.html#ipv_6_address_count Ec2SpotFleet#ipv_6_address_count}
  */
  readonly ipv6AddressCount?: number;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/ec2_spot_fleet.html#ipv_6_addresses Ec2SpotFleet#ipv_6_addresses}
  */
  readonly ipv6Addresses?: Ec2SpotFleetSpotFleetRequestConfigDataLaunchSpecificationsNetworkInterfacesIpv6Addresses[];
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/ec2_spot_fleet.html#network_interface_id Ec2SpotFleet#network_interface_id}
  */
  readonly networkInterfaceId?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/ec2_spot_fleet.html#private_ip_addresses Ec2SpotFleet#private_ip_addresses}
  */
  readonly privateIpAddresses?: Ec2SpotFleetSpotFleetRequestConfigDataLaunchSpecificationsNetworkInterfacesPrivateIpAddresses[];
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/ec2_spot_fleet.html#secondary_private_ip_address_count Ec2SpotFleet#secondary_private_ip_address_count}
  */
  readonly secondaryPrivateIpAddressCount?: number;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/ec2_spot_fleet.html#subnet_id Ec2SpotFleet#subnet_id}
  */
  readonly subnetId?: string;
}

export function ec2SpotFleetSpotFleetRequestConfigDataLaunchSpecificationsNetworkInterfacesToTerraform(struct?: Ec2SpotFleetSpotFleetRequestConfigDataLaunchSpecificationsNetworkInterfaces): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    associate_public_ip_address: cdktf.booleanToTerraform(struct!.associatePublicIpAddress),
    delete_on_termination: cdktf.booleanToTerraform(struct!.deleteOnTermination),
    description: cdktf.stringToTerraform(struct!.description),
    device_index: cdktf.numberToTerraform(struct!.deviceIndex),
    groups: cdktf.listMapper(cdktf.stringToTerraform)(struct!.groups),
    ipv_6_address_count: cdktf.numberToTerraform(struct!.ipv6AddressCount),
    ipv_6_addresses: cdktf.listMapper(ec2SpotFleetSpotFleetRequestConfigDataLaunchSpecificationsNetworkInterfacesIpv6AddressesToTerraform)(struct!.ipv6Addresses),
    network_interface_id: cdktf.stringToTerraform(struct!.networkInterfaceId),
    private_ip_addresses: cdktf.listMapper(ec2SpotFleetSpotFleetRequestConfigDataLaunchSpecificationsNetworkInterfacesPrivateIpAddressesToTerraform)(struct!.privateIpAddresses),
    secondary_private_ip_address_count: cdktf.numberToTerraform(struct!.secondaryPrivateIpAddressCount),
    subnet_id: cdktf.stringToTerraform(struct!.subnetId),
  }
}

export interface Ec2SpotFleetSpotFleetRequestConfigDataLaunchSpecificationsPlacement {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/ec2_spot_fleet.html#availability_zone Ec2SpotFleet#availability_zone}
  */
  readonly availabilityZone?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/ec2_spot_fleet.html#group_name Ec2SpotFleet#group_name}
  */
  readonly groupName?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/ec2_spot_fleet.html#tenancy Ec2SpotFleet#tenancy}
  */
  readonly tenancy?: string;
}

export function ec2SpotFleetSpotFleetRequestConfigDataLaunchSpecificationsPlacementToTerraform(struct?: Ec2SpotFleetSpotFleetRequestConfigDataLaunchSpecificationsPlacement): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    availability_zone: cdktf.stringToTerraform(struct!.availabilityZone),
    group_name: cdktf.stringToTerraform(struct!.groupName),
    tenancy: cdktf.stringToTerraform(struct!.tenancy),
  }
}

export interface Ec2SpotFleetSpotFleetRequestConfigDataLaunchSpecificationsSecurityGroups {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/ec2_spot_fleet.html#group_id Ec2SpotFleet#group_id}
  */
  readonly groupId: string;
}

export function ec2SpotFleetSpotFleetRequestConfigDataLaunchSpecificationsSecurityGroupsToTerraform(struct?: Ec2SpotFleetSpotFleetRequestConfigDataLaunchSpecificationsSecurityGroups): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    group_id: cdktf.stringToTerraform(struct!.groupId),
  }
}

export interface Ec2SpotFleetSpotFleetRequestConfigDataLaunchSpecificationsTagSpecificationsTags {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/ec2_spot_fleet.html#key Ec2SpotFleet#key}
  */
  readonly key: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/ec2_spot_fleet.html#value Ec2SpotFleet#value}
  */
  readonly value: string;
}

export function ec2SpotFleetSpotFleetRequestConfigDataLaunchSpecificationsTagSpecificationsTagsToTerraform(struct?: Ec2SpotFleetSpotFleetRequestConfigDataLaunchSpecificationsTagSpecificationsTags): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    key: cdktf.stringToTerraform(struct!.key),
    value: cdktf.stringToTerraform(struct!.value),
  }
}

export interface Ec2SpotFleetSpotFleetRequestConfigDataLaunchSpecificationsTagSpecifications {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/ec2_spot_fleet.html#resource_type Ec2SpotFleet#resource_type}
  */
  readonly resourceType?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/ec2_spot_fleet.html#tags Ec2SpotFleet#tags}
  */
  readonly tags?: Ec2SpotFleetSpotFleetRequestConfigDataLaunchSpecificationsTagSpecificationsTags[];
}

export function ec2SpotFleetSpotFleetRequestConfigDataLaunchSpecificationsTagSpecificationsToTerraform(struct?: Ec2SpotFleetSpotFleetRequestConfigDataLaunchSpecificationsTagSpecifications): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    resource_type: cdktf.stringToTerraform(struct!.resourceType),
    tags: cdktf.listMapper(ec2SpotFleetSpotFleetRequestConfigDataLaunchSpecificationsTagSpecificationsTagsToTerraform)(struct!.tags),
  }
}

export interface Ec2SpotFleetSpotFleetRequestConfigDataLaunchSpecifications {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/ec2_spot_fleet.html#block_device_mappings Ec2SpotFleet#block_device_mappings}
  */
  readonly blockDeviceMappings?: Ec2SpotFleetSpotFleetRequestConfigDataLaunchSpecificationsBlockDeviceMappings[];
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/ec2_spot_fleet.html#ebs_optimized Ec2SpotFleet#ebs_optimized}
  */
  readonly ebsOptimized?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/ec2_spot_fleet.html#iam_instance_profile Ec2SpotFleet#iam_instance_profile}
  */
  readonly iamInstanceProfile?: Ec2SpotFleetSpotFleetRequestConfigDataLaunchSpecificationsIamInstanceProfile;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/ec2_spot_fleet.html#image_id Ec2SpotFleet#image_id}
  */
  readonly imageId: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/ec2_spot_fleet.html#instance_type Ec2SpotFleet#instance_type}
  */
  readonly instanceType: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/ec2_spot_fleet.html#kernel_id Ec2SpotFleet#kernel_id}
  */
  readonly kernelId?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/ec2_spot_fleet.html#key_name Ec2SpotFleet#key_name}
  */
  readonly keyName?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/ec2_spot_fleet.html#monitoring Ec2SpotFleet#monitoring}
  */
  readonly monitoring?: Ec2SpotFleetSpotFleetRequestConfigDataLaunchSpecificationsMonitoring;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/ec2_spot_fleet.html#network_interfaces Ec2SpotFleet#network_interfaces}
  */
  readonly networkInterfaces?: Ec2SpotFleetSpotFleetRequestConfigDataLaunchSpecificationsNetworkInterfaces[];
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/ec2_spot_fleet.html#placement Ec2SpotFleet#placement}
  */
  readonly placement?: Ec2SpotFleetSpotFleetRequestConfigDataLaunchSpecificationsPlacement;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/ec2_spot_fleet.html#ramdisk_id Ec2SpotFleet#ramdisk_id}
  */
  readonly ramdiskId?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/ec2_spot_fleet.html#security_groups Ec2SpotFleet#security_groups}
  */
  readonly securityGroups?: Ec2SpotFleetSpotFleetRequestConfigDataLaunchSpecificationsSecurityGroups[];
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/ec2_spot_fleet.html#spot_price Ec2SpotFleet#spot_price}
  */
  readonly spotPrice?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/ec2_spot_fleet.html#subnet_id Ec2SpotFleet#subnet_id}
  */
  readonly subnetId?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/ec2_spot_fleet.html#tag_specifications Ec2SpotFleet#tag_specifications}
  */
  readonly tagSpecifications?: Ec2SpotFleetSpotFleetRequestConfigDataLaunchSpecificationsTagSpecifications[];
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/ec2_spot_fleet.html#user_data Ec2SpotFleet#user_data}
  */
  readonly userData?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/ec2_spot_fleet.html#weighted_capacity Ec2SpotFleet#weighted_capacity}
  */
  readonly weightedCapacity?: number;
}

export function ec2SpotFleetSpotFleetRequestConfigDataLaunchSpecificationsToTerraform(struct?: Ec2SpotFleetSpotFleetRequestConfigDataLaunchSpecifications): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    block_device_mappings: cdktf.listMapper(ec2SpotFleetSpotFleetRequestConfigDataLaunchSpecificationsBlockDeviceMappingsToTerraform)(struct!.blockDeviceMappings),
    ebs_optimized: cdktf.booleanToTerraform(struct!.ebsOptimized),
    iam_instance_profile: ec2SpotFleetSpotFleetRequestConfigDataLaunchSpecificationsIamInstanceProfileToTerraform(struct!.iamInstanceProfile),
    image_id: cdktf.stringToTerraform(struct!.imageId),
    instance_type: cdktf.stringToTerraform(struct!.instanceType),
    kernel_id: cdktf.stringToTerraform(struct!.kernelId),
    key_name: cdktf.stringToTerraform(struct!.keyName),
    monitoring: ec2SpotFleetSpotFleetRequestConfigDataLaunchSpecificationsMonitoringToTerraform(struct!.monitoring),
    network_interfaces: cdktf.listMapper(ec2SpotFleetSpotFleetRequestConfigDataLaunchSpecificationsNetworkInterfacesToTerraform)(struct!.networkInterfaces),
    placement: ec2SpotFleetSpotFleetRequestConfigDataLaunchSpecificationsPlacementToTerraform(struct!.placement),
    ramdisk_id: cdktf.stringToTerraform(struct!.ramdiskId),
    security_groups: cdktf.listMapper(ec2SpotFleetSpotFleetRequestConfigDataLaunchSpecificationsSecurityGroupsToTerraform)(struct!.securityGroups),
    spot_price: cdktf.stringToTerraform(struct!.spotPrice),
    subnet_id: cdktf.stringToTerraform(struct!.subnetId),
    tag_specifications: cdktf.listMapper(ec2SpotFleetSpotFleetRequestConfigDataLaunchSpecificationsTagSpecificationsToTerraform)(struct!.tagSpecifications),
    user_data: cdktf.stringToTerraform(struct!.userData),
    weighted_capacity: cdktf.numberToTerraform(struct!.weightedCapacity),
  }
}

export interface Ec2SpotFleetSpotFleetRequestConfigDataLaunchTemplateConfigsLaunchTemplateSpecification {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/ec2_spot_fleet.html#launch_template_id Ec2SpotFleet#launch_template_id}
  */
  readonly launchTemplateId?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/ec2_spot_fleet.html#launch_template_name Ec2SpotFleet#launch_template_name}
  */
  readonly launchTemplateName?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/ec2_spot_fleet.html#version Ec2SpotFleet#version}
  */
  readonly version: string;
}

export function ec2SpotFleetSpotFleetRequestConfigDataLaunchTemplateConfigsLaunchTemplateSpecificationToTerraform(struct?: Ec2SpotFleetSpotFleetRequestConfigDataLaunchTemplateConfigsLaunchTemplateSpecification): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    launch_template_id: cdktf.stringToTerraform(struct!.launchTemplateId),
    launch_template_name: cdktf.stringToTerraform(struct!.launchTemplateName),
    version: cdktf.stringToTerraform(struct!.version),
  }
}

export interface Ec2SpotFleetSpotFleetRequestConfigDataLaunchTemplateConfigsOverrides {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/ec2_spot_fleet.html#availability_zone Ec2SpotFleet#availability_zone}
  */
  readonly availabilityZone?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/ec2_spot_fleet.html#instance_type Ec2SpotFleet#instance_type}
  */
  readonly instanceType?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/ec2_spot_fleet.html#spot_price Ec2SpotFleet#spot_price}
  */
  readonly spotPrice?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/ec2_spot_fleet.html#subnet_id Ec2SpotFleet#subnet_id}
  */
  readonly subnetId?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/ec2_spot_fleet.html#weighted_capacity Ec2SpotFleet#weighted_capacity}
  */
  readonly weightedCapacity?: number;
}

export function ec2SpotFleetSpotFleetRequestConfigDataLaunchTemplateConfigsOverridesToTerraform(struct?: Ec2SpotFleetSpotFleetRequestConfigDataLaunchTemplateConfigsOverrides): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    availability_zone: cdktf.stringToTerraform(struct!.availabilityZone),
    instance_type: cdktf.stringToTerraform(struct!.instanceType),
    spot_price: cdktf.stringToTerraform(struct!.spotPrice),
    subnet_id: cdktf.stringToTerraform(struct!.subnetId),
    weighted_capacity: cdktf.numberToTerraform(struct!.weightedCapacity),
  }
}

export interface Ec2SpotFleetSpotFleetRequestConfigDataLaunchTemplateConfigs {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/ec2_spot_fleet.html#launch_template_specification Ec2SpotFleet#launch_template_specification}
  */
  readonly launchTemplateSpecification?: Ec2SpotFleetSpotFleetRequestConfigDataLaunchTemplateConfigsLaunchTemplateSpecification;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/ec2_spot_fleet.html#overrides Ec2SpotFleet#overrides}
  */
  readonly overrides?: Ec2SpotFleetSpotFleetRequestConfigDataLaunchTemplateConfigsOverrides[];
}

export function ec2SpotFleetSpotFleetRequestConfigDataLaunchTemplateConfigsToTerraform(struct?: Ec2SpotFleetSpotFleetRequestConfigDataLaunchTemplateConfigs): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    launch_template_specification: ec2SpotFleetSpotFleetRequestConfigDataLaunchTemplateConfigsLaunchTemplateSpecificationToTerraform(struct!.launchTemplateSpecification),
    overrides: cdktf.listMapper(ec2SpotFleetSpotFleetRequestConfigDataLaunchTemplateConfigsOverridesToTerraform)(struct!.overrides),
  }
}

export class Ec2SpotFleetSpotFleetRequestConfigDataLoadBalancersConfigClassicLoadBalancersConfigClassicLoadBalancers extends cdktf.ComplexComputedList {

  // name - computed: true, optional: false, required: true
  public get name() {
    return this.getStringAttribute('name');
  }
}

export function ec2SpotFleetSpotFleetRequestConfigDataLoadBalancersConfigClassicLoadBalancersConfigClassicLoadBalancersToTerraform(struct?: Ec2SpotFleetSpotFleetRequestConfigDataLoadBalancersConfigClassicLoadBalancersConfigClassicLoadBalancers): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    name: cdktf.stringToTerraform(struct!.name),
  }
}

export interface Ec2SpotFleetSpotFleetRequestConfigDataLoadBalancersConfigClassicLoadBalancersConfig {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/ec2_spot_fleet.html#classic_load_balancers Ec2SpotFleet#classic_load_balancers}
  */
  readonly classicLoadBalancers: Ec2SpotFleetSpotFleetRequestConfigDataLoadBalancersConfigClassicLoadBalancersConfigClassicLoadBalancers[];
}

export function ec2SpotFleetSpotFleetRequestConfigDataLoadBalancersConfigClassicLoadBalancersConfigToTerraform(struct?: Ec2SpotFleetSpotFleetRequestConfigDataLoadBalancersConfigClassicLoadBalancersConfig): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    classic_load_balancers: cdktf.listMapper(ec2SpotFleetSpotFleetRequestConfigDataLoadBalancersConfigClassicLoadBalancersConfigClassicLoadBalancersToTerraform)(struct!.classicLoadBalancers),
  }
}

export class Ec2SpotFleetSpotFleetRequestConfigDataLoadBalancersConfigTargetGroupsConfigTargetGroups extends cdktf.ComplexComputedList {

  // arn - computed: true, optional: false, required: true
  public get arn() {
    return this.getStringAttribute('arn');
  }
}

export function ec2SpotFleetSpotFleetRequestConfigDataLoadBalancersConfigTargetGroupsConfigTargetGroupsToTerraform(struct?: Ec2SpotFleetSpotFleetRequestConfigDataLoadBalancersConfigTargetGroupsConfigTargetGroups): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    arn: cdktf.stringToTerraform(struct!.arn),
  }
}

export interface Ec2SpotFleetSpotFleetRequestConfigDataLoadBalancersConfigTargetGroupsConfig {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/ec2_spot_fleet.html#target_groups Ec2SpotFleet#target_groups}
  */
  readonly targetGroups: Ec2SpotFleetSpotFleetRequestConfigDataLoadBalancersConfigTargetGroupsConfigTargetGroups[];
}

export function ec2SpotFleetSpotFleetRequestConfigDataLoadBalancersConfigTargetGroupsConfigToTerraform(struct?: Ec2SpotFleetSpotFleetRequestConfigDataLoadBalancersConfigTargetGroupsConfig): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    target_groups: cdktf.listMapper(ec2SpotFleetSpotFleetRequestConfigDataLoadBalancersConfigTargetGroupsConfigTargetGroupsToTerraform)(struct!.targetGroups),
  }
}

export interface Ec2SpotFleetSpotFleetRequestConfigDataLoadBalancersConfig {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/ec2_spot_fleet.html#classic_load_balancers_config Ec2SpotFleet#classic_load_balancers_config}
  */
  readonly classicLoadBalancersConfig?: Ec2SpotFleetSpotFleetRequestConfigDataLoadBalancersConfigClassicLoadBalancersConfig;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/ec2_spot_fleet.html#target_groups_config Ec2SpotFleet#target_groups_config}
  */
  readonly targetGroupsConfig?: Ec2SpotFleetSpotFleetRequestConfigDataLoadBalancersConfigTargetGroupsConfig;
}

export function ec2SpotFleetSpotFleetRequestConfigDataLoadBalancersConfigToTerraform(struct?: Ec2SpotFleetSpotFleetRequestConfigDataLoadBalancersConfig): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    classic_load_balancers_config: ec2SpotFleetSpotFleetRequestConfigDataLoadBalancersConfigClassicLoadBalancersConfigToTerraform(struct!.classicLoadBalancersConfig),
    target_groups_config: ec2SpotFleetSpotFleetRequestConfigDataLoadBalancersConfigTargetGroupsConfigToTerraform(struct!.targetGroupsConfig),
  }
}

export interface Ec2SpotFleetSpotFleetRequestConfigDataSpotMaintenanceStrategiesCapacityRebalance {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/ec2_spot_fleet.html#replacement_strategy Ec2SpotFleet#replacement_strategy}
  */
  readonly replacementStrategy?: string;
}

export function ec2SpotFleetSpotFleetRequestConfigDataSpotMaintenanceStrategiesCapacityRebalanceToTerraform(struct?: Ec2SpotFleetSpotFleetRequestConfigDataSpotMaintenanceStrategiesCapacityRebalance): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    replacement_strategy: cdktf.stringToTerraform(struct!.replacementStrategy),
  }
}

export interface Ec2SpotFleetSpotFleetRequestConfigDataSpotMaintenanceStrategies {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/ec2_spot_fleet.html#capacity_rebalance Ec2SpotFleet#capacity_rebalance}
  */
  readonly capacityRebalance?: Ec2SpotFleetSpotFleetRequestConfigDataSpotMaintenanceStrategiesCapacityRebalance;
}

export function ec2SpotFleetSpotFleetRequestConfigDataSpotMaintenanceStrategiesToTerraform(struct?: Ec2SpotFleetSpotFleetRequestConfigDataSpotMaintenanceStrategies): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    capacity_rebalance: ec2SpotFleetSpotFleetRequestConfigDataSpotMaintenanceStrategiesCapacityRebalanceToTerraform(struct!.capacityRebalance),
  }
}

export interface Ec2SpotFleetSpotFleetRequestConfigData {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/ec2_spot_fleet.html#allocation_strategy Ec2SpotFleet#allocation_strategy}
  */
  readonly allocationStrategy?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/ec2_spot_fleet.html#context Ec2SpotFleet#context}
  */
  readonly context?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/ec2_spot_fleet.html#excess_capacity_termination_policy Ec2SpotFleet#excess_capacity_termination_policy}
  */
  readonly excessCapacityTerminationPolicy?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/ec2_spot_fleet.html#iam_fleet_role Ec2SpotFleet#iam_fleet_role}
  */
  readonly iamFleetRole: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/ec2_spot_fleet.html#instance_interruption_behavior Ec2SpotFleet#instance_interruption_behavior}
  */
  readonly instanceInterruptionBehavior?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/ec2_spot_fleet.html#instance_pools_to_use_count Ec2SpotFleet#instance_pools_to_use_count}
  */
  readonly instancePoolsToUseCount?: number;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/ec2_spot_fleet.html#launch_specifications Ec2SpotFleet#launch_specifications}
  */
  readonly launchSpecifications?: Ec2SpotFleetSpotFleetRequestConfigDataLaunchSpecifications[];
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/ec2_spot_fleet.html#launch_template_configs Ec2SpotFleet#launch_template_configs}
  */
  readonly launchTemplateConfigs?: Ec2SpotFleetSpotFleetRequestConfigDataLaunchTemplateConfigs[];
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/ec2_spot_fleet.html#load_balancers_config Ec2SpotFleet#load_balancers_config}
  */
  readonly loadBalancersConfig?: Ec2SpotFleetSpotFleetRequestConfigDataLoadBalancersConfig;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/ec2_spot_fleet.html#on_demand_allocation_strategy Ec2SpotFleet#on_demand_allocation_strategy}
  */
  readonly onDemandAllocationStrategy?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/ec2_spot_fleet.html#on_demand_max_total_price Ec2SpotFleet#on_demand_max_total_price}
  */
  readonly onDemandMaxTotalPrice?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/ec2_spot_fleet.html#on_demand_target_capacity Ec2SpotFleet#on_demand_target_capacity}
  */
  readonly onDemandTargetCapacity?: number;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/ec2_spot_fleet.html#replace_unhealthy_instances Ec2SpotFleet#replace_unhealthy_instances}
  */
  readonly replaceUnhealthyInstances?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/ec2_spot_fleet.html#spot_maintenance_strategies Ec2SpotFleet#spot_maintenance_strategies}
  */
  readonly spotMaintenanceStrategies?: Ec2SpotFleetSpotFleetRequestConfigDataSpotMaintenanceStrategies;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/ec2_spot_fleet.html#spot_max_total_price Ec2SpotFleet#spot_max_total_price}
  */
  readonly spotMaxTotalPrice?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/ec2_spot_fleet.html#spot_price Ec2SpotFleet#spot_price}
  */
  readonly spotPrice?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/ec2_spot_fleet.html#target_capacity Ec2SpotFleet#target_capacity}
  */
  readonly targetCapacity: number;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/ec2_spot_fleet.html#terminate_instances_with_expiration Ec2SpotFleet#terminate_instances_with_expiration}
  */
  readonly terminateInstancesWithExpiration?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/ec2_spot_fleet.html#type Ec2SpotFleet#type}
  */
  readonly type?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/ec2_spot_fleet.html#valid_from Ec2SpotFleet#valid_from}
  */
  readonly validFrom?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/ec2_spot_fleet.html#valid_until Ec2SpotFleet#valid_until}
  */
  readonly validUntil?: string;
}

export function ec2SpotFleetSpotFleetRequestConfigDataToTerraform(struct?: Ec2SpotFleetSpotFleetRequestConfigData): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    allocation_strategy: cdktf.stringToTerraform(struct!.allocationStrategy),
    context: cdktf.stringToTerraform(struct!.context),
    excess_capacity_termination_policy: cdktf.stringToTerraform(struct!.excessCapacityTerminationPolicy),
    iam_fleet_role: cdktf.stringToTerraform(struct!.iamFleetRole),
    instance_interruption_behavior: cdktf.stringToTerraform(struct!.instanceInterruptionBehavior),
    instance_pools_to_use_count: cdktf.numberToTerraform(struct!.instancePoolsToUseCount),
    launch_specifications: cdktf.listMapper(ec2SpotFleetSpotFleetRequestConfigDataLaunchSpecificationsToTerraform)(struct!.launchSpecifications),
    launch_template_configs: cdktf.listMapper(ec2SpotFleetSpotFleetRequestConfigDataLaunchTemplateConfigsToTerraform)(struct!.launchTemplateConfigs),
    load_balancers_config: ec2SpotFleetSpotFleetRequestConfigDataLoadBalancersConfigToTerraform(struct!.loadBalancersConfig),
    on_demand_allocation_strategy: cdktf.stringToTerraform(struct!.onDemandAllocationStrategy),
    on_demand_max_total_price: cdktf.stringToTerraform(struct!.onDemandMaxTotalPrice),
    on_demand_target_capacity: cdktf.numberToTerraform(struct!.onDemandTargetCapacity),
    replace_unhealthy_instances: cdktf.booleanToTerraform(struct!.replaceUnhealthyInstances),
    spot_maintenance_strategies: ec2SpotFleetSpotFleetRequestConfigDataSpotMaintenanceStrategiesToTerraform(struct!.spotMaintenanceStrategies),
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
* Represents a {@link https://www.terraform.io/docs/providers/awscc/r/ec2_spot_fleet.html awscc_ec2_spot_fleet}
*/
export class Ec2SpotFleet extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType: string = "awscc_ec2_spot_fleet";

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://www.terraform.io/docs/providers/awscc/r/ec2_spot_fleet.html awscc_ec2_spot_fleet} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options Ec2SpotFleetConfig
  */
  public constructor(scope: Construct, id: string, config: Ec2SpotFleetConfig) {
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
    this._spotFleetRequestConfigData = config.spotFleetRequestConfigData;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // id - computed: true, optional: false, required: false
  public get id() {
    return this.getStringAttribute('id');
  }

  // spot_fleet_request_config_data - computed: false, optional: false, required: true
  private _spotFleetRequestConfigData: Ec2SpotFleetSpotFleetRequestConfigData;
  public get spotFleetRequestConfigData() {
    return this.interpolationForAttribute('spot_fleet_request_config_data') as any;
  }
  public set spotFleetRequestConfigData(value: Ec2SpotFleetSpotFleetRequestConfigData) {
    this._spotFleetRequestConfigData = value;
  }
  // Temporarily expose input value. Use with caution.
  public get spotFleetRequestConfigDataInput() {
    return this._spotFleetRequestConfigData
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      spot_fleet_request_config_data: ec2SpotFleetSpotFleetRequestConfigDataToTerraform(this._spotFleetRequestConfigData),
    };
  }
}
