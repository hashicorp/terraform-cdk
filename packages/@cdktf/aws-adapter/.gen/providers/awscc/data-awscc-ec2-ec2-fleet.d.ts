import { Construct } from 'constructs';
import * as cdktf from 'cdktf';
export interface DataAwsccEc2Ec2FleetConfig extends cdktf.TerraformMetaArguments {
    /**
    * Uniquely identifies the resource.
    *
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/d/ec2_ec2_fleet.html#id DataAwsccEc2Ec2Fleet#id}
    */
    readonly id: string;
}
export declare class DataAwsccEc2Ec2FleetLaunchTemplateConfigsLaunchTemplateSpecification extends cdktf.ComplexComputedList {
    get launchTemplateId(): string;
    get launchTemplateName(): string;
    get version(): string;
}
export declare function dataAwsccEc2Ec2FleetLaunchTemplateConfigsLaunchTemplateSpecificationToTerraform(struct?: DataAwsccEc2Ec2FleetLaunchTemplateConfigsLaunchTemplateSpecification): any;
export declare class DataAwsccEc2Ec2FleetLaunchTemplateConfigsOverridesPlacement extends cdktf.ComplexComputedList {
    get affinity(): string;
    get availabilityZone(): string;
    get groupName(): string;
    get hostId(): string;
    get hostResourceGroupArn(): string;
    get partitionNumber(): number;
    get spreadDomain(): string;
    get tenancy(): string;
}
export declare function dataAwsccEc2Ec2FleetLaunchTemplateConfigsOverridesPlacementToTerraform(struct?: DataAwsccEc2Ec2FleetLaunchTemplateConfigsOverridesPlacement): any;
export declare class DataAwsccEc2Ec2FleetLaunchTemplateConfigsOverrides extends cdktf.ComplexComputedList {
    get availabilityZone(): string;
    get instanceType(): string;
    get maxPrice(): string;
    get placement(): any;
    get priority(): number;
    get subnetId(): string;
    get weightedCapacity(): number;
}
export declare function dataAwsccEc2Ec2FleetLaunchTemplateConfigsOverridesToTerraform(struct?: DataAwsccEc2Ec2FleetLaunchTemplateConfigsOverrides): any;
export declare class DataAwsccEc2Ec2FleetLaunchTemplateConfigs extends cdktf.ComplexComputedList {
    get launchTemplateSpecification(): any;
    get overrides(): any;
}
export declare function dataAwsccEc2Ec2FleetLaunchTemplateConfigsToTerraform(struct?: DataAwsccEc2Ec2FleetLaunchTemplateConfigs): any;
export declare class DataAwsccEc2Ec2FleetOnDemandOptionsCapacityReservationOptions extends cdktf.ComplexComputedList {
    get usageStrategy(): string;
}
export declare function dataAwsccEc2Ec2FleetOnDemandOptionsCapacityReservationOptionsToTerraform(struct?: DataAwsccEc2Ec2FleetOnDemandOptionsCapacityReservationOptions): any;
export declare class DataAwsccEc2Ec2FleetOnDemandOptions extends cdktf.ComplexComputedList {
    get allocationStrategy(): string;
    get capacityReservationOptions(): any;
    get maxTotalPrice(): string;
    get minTargetCapacity(): number;
    get singleAvailabilityZone(): any;
    get singleInstanceType(): any;
}
export declare function dataAwsccEc2Ec2FleetOnDemandOptionsToTerraform(struct?: DataAwsccEc2Ec2FleetOnDemandOptions): any;
export declare class DataAwsccEc2Ec2FleetSpotOptions extends cdktf.ComplexComputedList {
    get allocationStrategy(): string;
    get instanceInterruptionBehavior(): string;
    get instancePoolsToUseCount(): number;
    get maxTotalPrice(): string;
    get minTargetCapacity(): number;
    get singleAvailabilityZone(): any;
    get singleInstanceType(): any;
}
export declare function dataAwsccEc2Ec2FleetSpotOptionsToTerraform(struct?: DataAwsccEc2Ec2FleetSpotOptions): any;
export declare class DataAwsccEc2Ec2FleetTagSpecificationsTags extends cdktf.ComplexComputedList {
    get key(): string;
    get value(): string;
}
export declare function dataAwsccEc2Ec2FleetTagSpecificationsTagsToTerraform(struct?: DataAwsccEc2Ec2FleetTagSpecificationsTags): any;
export declare class DataAwsccEc2Ec2FleetTagSpecifications extends cdktf.ComplexComputedList {
    get resourceType(): string;
    get tags(): any;
}
export declare function dataAwsccEc2Ec2FleetTagSpecificationsToTerraform(struct?: DataAwsccEc2Ec2FleetTagSpecifications): any;
export declare class DataAwsccEc2Ec2FleetTargetCapacitySpecification extends cdktf.ComplexComputedList {
    get defaultTargetCapacityType(): string;
    get onDemandTargetCapacity(): number;
    get spotTargetCapacity(): number;
    get totalTargetCapacity(): number;
}
export declare function dataAwsccEc2Ec2FleetTargetCapacitySpecificationToTerraform(struct?: DataAwsccEc2Ec2FleetTargetCapacitySpecification): any;
/**
* Represents a {@link https://www.terraform.io/docs/providers/awscc/d/ec2_ec2_fleet.html awscc_ec2_ec2_fleet}
*/
export declare class DataAwsccEc2Ec2Fleet extends cdktf.TerraformDataSource {
    static readonly tfResourceType: string;
    /**
    * Create a new {@link https://www.terraform.io/docs/providers/awscc/d/ec2_ec2_fleet.html awscc_ec2_ec2_fleet} Data Source
    *
    * @param scope The scope in which to define this construct
    * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
    * @param options DataAwsccEc2Ec2FleetConfig
    */
    constructor(scope: Construct, id: string, config: DataAwsccEc2Ec2FleetConfig);
    get context(): string;
    get excessCapacityTerminationPolicy(): string;
    get fleetId(): string;
    private _id;
    get id(): string;
    set id(value: string);
    get idInput(): string;
    get launchTemplateConfigs(): any;
    get onDemandOptions(): any;
    get replaceUnhealthyInstances(): cdktf.IResolvable;
    get spotOptions(): any;
    get tagSpecifications(): any;
    get targetCapacitySpecification(): any;
    get terminateInstancesWithExpiration(): cdktf.IResolvable;
    get type(): string;
    get validFrom(): string;
    get validUntil(): string;
    protected synthesizeAttributes(): {
        [name: string]: any;
    };
}
