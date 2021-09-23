import { Construct } from 'constructs';
import * as cdktf from 'cdktf';
export interface DataAwsccEc2SpotFleetConfig extends cdktf.TerraformMetaArguments {
    /**
    * Uniquely identifies the resource.
    *
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/d/ec2_spot_fleet.html#id DataAwsccEc2SpotFleet#id}
    */
    readonly id: string;
}
export declare class DataAwsccEc2SpotFleetSpotFleetRequestConfigDataLaunchSpecificationsBlockDeviceMappingsEbs extends cdktf.ComplexComputedList {
    get deleteOnTermination(): any;
    get encrypted(): any;
    get iops(): number;
    get snapshotId(): string;
    get volumeSize(): number;
    get volumeType(): string;
}
export declare function dataAwsccEc2SpotFleetSpotFleetRequestConfigDataLaunchSpecificationsBlockDeviceMappingsEbsToTerraform(struct?: DataAwsccEc2SpotFleetSpotFleetRequestConfigDataLaunchSpecificationsBlockDeviceMappingsEbs): any;
export declare class DataAwsccEc2SpotFleetSpotFleetRequestConfigDataLaunchSpecificationsBlockDeviceMappings extends cdktf.ComplexComputedList {
    get deviceName(): string;
    get ebs(): any;
    get noDevice(): string;
    get virtualName(): string;
}
export declare function dataAwsccEc2SpotFleetSpotFleetRequestConfigDataLaunchSpecificationsBlockDeviceMappingsToTerraform(struct?: DataAwsccEc2SpotFleetSpotFleetRequestConfigDataLaunchSpecificationsBlockDeviceMappings): any;
export declare class DataAwsccEc2SpotFleetSpotFleetRequestConfigDataLaunchSpecificationsIamInstanceProfile extends cdktf.ComplexComputedList {
    get arn(): string;
}
export declare function dataAwsccEc2SpotFleetSpotFleetRequestConfigDataLaunchSpecificationsIamInstanceProfileToTerraform(struct?: DataAwsccEc2SpotFleetSpotFleetRequestConfigDataLaunchSpecificationsIamInstanceProfile): any;
export declare class DataAwsccEc2SpotFleetSpotFleetRequestConfigDataLaunchSpecificationsMonitoring extends cdktf.ComplexComputedList {
    get enabled(): any;
}
export declare function dataAwsccEc2SpotFleetSpotFleetRequestConfigDataLaunchSpecificationsMonitoringToTerraform(struct?: DataAwsccEc2SpotFleetSpotFleetRequestConfigDataLaunchSpecificationsMonitoring): any;
export declare class DataAwsccEc2SpotFleetSpotFleetRequestConfigDataLaunchSpecificationsNetworkInterfacesIpv6Addresses extends cdktf.ComplexComputedList {
    get ipv6Address(): string;
}
export declare function dataAwsccEc2SpotFleetSpotFleetRequestConfigDataLaunchSpecificationsNetworkInterfacesIpv6AddressesToTerraform(struct?: DataAwsccEc2SpotFleetSpotFleetRequestConfigDataLaunchSpecificationsNetworkInterfacesIpv6Addresses): any;
export declare class DataAwsccEc2SpotFleetSpotFleetRequestConfigDataLaunchSpecificationsNetworkInterfacesPrivateIpAddresses extends cdktf.ComplexComputedList {
    get primary(): any;
    get privateIpAddress(): string;
}
export declare function dataAwsccEc2SpotFleetSpotFleetRequestConfigDataLaunchSpecificationsNetworkInterfacesPrivateIpAddressesToTerraform(struct?: DataAwsccEc2SpotFleetSpotFleetRequestConfigDataLaunchSpecificationsNetworkInterfacesPrivateIpAddresses): any;
export declare class DataAwsccEc2SpotFleetSpotFleetRequestConfigDataLaunchSpecificationsNetworkInterfaces extends cdktf.ComplexComputedList {
    get associatePublicIpAddress(): any;
    get deleteOnTermination(): any;
    get description(): string;
    get deviceIndex(): number;
    get groups(): string[];
    get ipv6AddressCount(): number;
    get ipv6Addresses(): any;
    get networkInterfaceId(): string;
    get privateIpAddresses(): any;
    get secondaryPrivateIpAddressCount(): number;
    get subnetId(): string;
}
export declare function dataAwsccEc2SpotFleetSpotFleetRequestConfigDataLaunchSpecificationsNetworkInterfacesToTerraform(struct?: DataAwsccEc2SpotFleetSpotFleetRequestConfigDataLaunchSpecificationsNetworkInterfaces): any;
export declare class DataAwsccEc2SpotFleetSpotFleetRequestConfigDataLaunchSpecificationsPlacement extends cdktf.ComplexComputedList {
    get availabilityZone(): string;
    get groupName(): string;
    get tenancy(): string;
}
export declare function dataAwsccEc2SpotFleetSpotFleetRequestConfigDataLaunchSpecificationsPlacementToTerraform(struct?: DataAwsccEc2SpotFleetSpotFleetRequestConfigDataLaunchSpecificationsPlacement): any;
export declare class DataAwsccEc2SpotFleetSpotFleetRequestConfigDataLaunchSpecificationsSecurityGroups extends cdktf.ComplexComputedList {
    get groupId(): string;
}
export declare function dataAwsccEc2SpotFleetSpotFleetRequestConfigDataLaunchSpecificationsSecurityGroupsToTerraform(struct?: DataAwsccEc2SpotFleetSpotFleetRequestConfigDataLaunchSpecificationsSecurityGroups): any;
export declare class DataAwsccEc2SpotFleetSpotFleetRequestConfigDataLaunchSpecificationsTagSpecificationsTags extends cdktf.ComplexComputedList {
    get key(): string;
    get value(): string;
}
export declare function dataAwsccEc2SpotFleetSpotFleetRequestConfigDataLaunchSpecificationsTagSpecificationsTagsToTerraform(struct?: DataAwsccEc2SpotFleetSpotFleetRequestConfigDataLaunchSpecificationsTagSpecificationsTags): any;
export declare class DataAwsccEc2SpotFleetSpotFleetRequestConfigDataLaunchSpecificationsTagSpecifications extends cdktf.ComplexComputedList {
    get resourceType(): string;
    get tags(): any;
}
export declare function dataAwsccEc2SpotFleetSpotFleetRequestConfigDataLaunchSpecificationsTagSpecificationsToTerraform(struct?: DataAwsccEc2SpotFleetSpotFleetRequestConfigDataLaunchSpecificationsTagSpecifications): any;
export declare class DataAwsccEc2SpotFleetSpotFleetRequestConfigDataLaunchSpecifications extends cdktf.ComplexComputedList {
    get blockDeviceMappings(): any;
    get ebsOptimized(): any;
    get iamInstanceProfile(): any;
    get imageId(): string;
    get instanceType(): string;
    get kernelId(): string;
    get keyName(): string;
    get monitoring(): any;
    get networkInterfaces(): any;
    get placement(): any;
    get ramdiskId(): string;
    get securityGroups(): any;
    get spotPrice(): string;
    get subnetId(): string;
    get tagSpecifications(): any;
    get userData(): string;
    get weightedCapacity(): number;
}
export declare function dataAwsccEc2SpotFleetSpotFleetRequestConfigDataLaunchSpecificationsToTerraform(struct?: DataAwsccEc2SpotFleetSpotFleetRequestConfigDataLaunchSpecifications): any;
export declare class DataAwsccEc2SpotFleetSpotFleetRequestConfigDataLaunchTemplateConfigsLaunchTemplateSpecification extends cdktf.ComplexComputedList {
    get launchTemplateId(): string;
    get launchTemplateName(): string;
    get version(): string;
}
export declare function dataAwsccEc2SpotFleetSpotFleetRequestConfigDataLaunchTemplateConfigsLaunchTemplateSpecificationToTerraform(struct?: DataAwsccEc2SpotFleetSpotFleetRequestConfigDataLaunchTemplateConfigsLaunchTemplateSpecification): any;
export declare class DataAwsccEc2SpotFleetSpotFleetRequestConfigDataLaunchTemplateConfigsOverrides extends cdktf.ComplexComputedList {
    get availabilityZone(): string;
    get instanceType(): string;
    get spotPrice(): string;
    get subnetId(): string;
    get weightedCapacity(): number;
}
export declare function dataAwsccEc2SpotFleetSpotFleetRequestConfigDataLaunchTemplateConfigsOverridesToTerraform(struct?: DataAwsccEc2SpotFleetSpotFleetRequestConfigDataLaunchTemplateConfigsOverrides): any;
export declare class DataAwsccEc2SpotFleetSpotFleetRequestConfigDataLaunchTemplateConfigs extends cdktf.ComplexComputedList {
    get launchTemplateSpecification(): any;
    get overrides(): any;
}
export declare function dataAwsccEc2SpotFleetSpotFleetRequestConfigDataLaunchTemplateConfigsToTerraform(struct?: DataAwsccEc2SpotFleetSpotFleetRequestConfigDataLaunchTemplateConfigs): any;
export declare class DataAwsccEc2SpotFleetSpotFleetRequestConfigDataLoadBalancersConfigClassicLoadBalancersConfigClassicLoadBalancers extends cdktf.ComplexComputedList {
    get name(): string;
}
export declare function dataAwsccEc2SpotFleetSpotFleetRequestConfigDataLoadBalancersConfigClassicLoadBalancersConfigClassicLoadBalancersToTerraform(struct?: DataAwsccEc2SpotFleetSpotFleetRequestConfigDataLoadBalancersConfigClassicLoadBalancersConfigClassicLoadBalancers): any;
export declare class DataAwsccEc2SpotFleetSpotFleetRequestConfigDataLoadBalancersConfigClassicLoadBalancersConfig extends cdktf.ComplexComputedList {
    get classicLoadBalancers(): any;
}
export declare function dataAwsccEc2SpotFleetSpotFleetRequestConfigDataLoadBalancersConfigClassicLoadBalancersConfigToTerraform(struct?: DataAwsccEc2SpotFleetSpotFleetRequestConfigDataLoadBalancersConfigClassicLoadBalancersConfig): any;
export declare class DataAwsccEc2SpotFleetSpotFleetRequestConfigDataLoadBalancersConfigTargetGroupsConfigTargetGroups extends cdktf.ComplexComputedList {
    get arn(): string;
}
export declare function dataAwsccEc2SpotFleetSpotFleetRequestConfigDataLoadBalancersConfigTargetGroupsConfigTargetGroupsToTerraform(struct?: DataAwsccEc2SpotFleetSpotFleetRequestConfigDataLoadBalancersConfigTargetGroupsConfigTargetGroups): any;
export declare class DataAwsccEc2SpotFleetSpotFleetRequestConfigDataLoadBalancersConfigTargetGroupsConfig extends cdktf.ComplexComputedList {
    get targetGroups(): any;
}
export declare function dataAwsccEc2SpotFleetSpotFleetRequestConfigDataLoadBalancersConfigTargetGroupsConfigToTerraform(struct?: DataAwsccEc2SpotFleetSpotFleetRequestConfigDataLoadBalancersConfigTargetGroupsConfig): any;
export declare class DataAwsccEc2SpotFleetSpotFleetRequestConfigDataLoadBalancersConfig extends cdktf.ComplexComputedList {
    get classicLoadBalancersConfig(): any;
    get targetGroupsConfig(): any;
}
export declare function dataAwsccEc2SpotFleetSpotFleetRequestConfigDataLoadBalancersConfigToTerraform(struct?: DataAwsccEc2SpotFleetSpotFleetRequestConfigDataLoadBalancersConfig): any;
export declare class DataAwsccEc2SpotFleetSpotFleetRequestConfigDataSpotMaintenanceStrategiesCapacityRebalance extends cdktf.ComplexComputedList {
    get replacementStrategy(): string;
}
export declare function dataAwsccEc2SpotFleetSpotFleetRequestConfigDataSpotMaintenanceStrategiesCapacityRebalanceToTerraform(struct?: DataAwsccEc2SpotFleetSpotFleetRequestConfigDataSpotMaintenanceStrategiesCapacityRebalance): any;
export declare class DataAwsccEc2SpotFleetSpotFleetRequestConfigDataSpotMaintenanceStrategies extends cdktf.ComplexComputedList {
    get capacityRebalance(): any;
}
export declare function dataAwsccEc2SpotFleetSpotFleetRequestConfigDataSpotMaintenanceStrategiesToTerraform(struct?: DataAwsccEc2SpotFleetSpotFleetRequestConfigDataSpotMaintenanceStrategies): any;
export declare class DataAwsccEc2SpotFleetSpotFleetRequestConfigData extends cdktf.ComplexComputedList {
    get allocationStrategy(): string;
    get context(): string;
    get excessCapacityTerminationPolicy(): string;
    get iamFleetRole(): string;
    get instanceInterruptionBehavior(): string;
    get instancePoolsToUseCount(): number;
    get launchSpecifications(): any;
    get launchTemplateConfigs(): any;
    get loadBalancersConfig(): any;
    get onDemandAllocationStrategy(): string;
    get onDemandMaxTotalPrice(): string;
    get onDemandTargetCapacity(): number;
    get replaceUnhealthyInstances(): any;
    get spotMaintenanceStrategies(): any;
    get spotMaxTotalPrice(): string;
    get spotPrice(): string;
    get targetCapacity(): number;
    get terminateInstancesWithExpiration(): any;
    get type(): string;
    get validFrom(): string;
    get validUntil(): string;
}
export declare function dataAwsccEc2SpotFleetSpotFleetRequestConfigDataToTerraform(struct?: DataAwsccEc2SpotFleetSpotFleetRequestConfigData): any;
/**
* Represents a {@link https://www.terraform.io/docs/providers/awscc/d/ec2_spot_fleet.html awscc_ec2_spot_fleet}
*/
export declare class DataAwsccEc2SpotFleet extends cdktf.TerraformDataSource {
    static readonly tfResourceType: string;
    /**
    * Create a new {@link https://www.terraform.io/docs/providers/awscc/d/ec2_spot_fleet.html awscc_ec2_spot_fleet} Data Source
    *
    * @param scope The scope in which to define this construct
    * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
    * @param options DataAwsccEc2SpotFleetConfig
    */
    constructor(scope: Construct, id: string, config: DataAwsccEc2SpotFleetConfig);
    private _id;
    get id(): string;
    set id(value: string);
    get idInput(): string;
    get spotFleetRequestConfigData(): any;
    protected synthesizeAttributes(): {
        [name: string]: any;
    };
}
