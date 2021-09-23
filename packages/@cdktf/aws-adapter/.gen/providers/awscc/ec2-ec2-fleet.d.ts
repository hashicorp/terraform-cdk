import { Construct } from 'constructs';
import * as cdktf from 'cdktf';
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
export declare function ec2Ec2FleetLaunchTemplateConfigsLaunchTemplateSpecificationToTerraform(struct?: Ec2Ec2FleetLaunchTemplateConfigsLaunchTemplateSpecification): any;
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
export declare function ec2Ec2FleetLaunchTemplateConfigsOverridesPlacementToTerraform(struct?: Ec2Ec2FleetLaunchTemplateConfigsOverridesPlacement): any;
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
export declare function ec2Ec2FleetLaunchTemplateConfigsOverridesToTerraform(struct?: Ec2Ec2FleetLaunchTemplateConfigsOverrides): any;
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
export declare function ec2Ec2FleetLaunchTemplateConfigsToTerraform(struct?: Ec2Ec2FleetLaunchTemplateConfigs): any;
export interface Ec2Ec2FleetOnDemandOptionsCapacityReservationOptions {
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/ec2_ec2_fleet.html#usage_strategy Ec2Ec2Fleet#usage_strategy}
    */
    readonly usageStrategy?: string;
}
export declare function ec2Ec2FleetOnDemandOptionsCapacityReservationOptionsToTerraform(struct?: Ec2Ec2FleetOnDemandOptionsCapacityReservationOptions): any;
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
export declare function ec2Ec2FleetOnDemandOptionsToTerraform(struct?: Ec2Ec2FleetOnDemandOptions): any;
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
export declare function ec2Ec2FleetSpotOptionsToTerraform(struct?: Ec2Ec2FleetSpotOptions): any;
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
export declare function ec2Ec2FleetTagSpecificationsTagsToTerraform(struct?: Ec2Ec2FleetTagSpecificationsTags): any;
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
export declare function ec2Ec2FleetTagSpecificationsToTerraform(struct?: Ec2Ec2FleetTagSpecifications): any;
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
export declare function ec2Ec2FleetTargetCapacitySpecificationToTerraform(struct?: Ec2Ec2FleetTargetCapacitySpecification): any;
/**
* Represents a {@link https://www.terraform.io/docs/providers/awscc/r/ec2_ec2_fleet.html awscc_ec2_ec2_fleet}
*/
export declare class Ec2Ec2Fleet extends cdktf.TerraformResource {
    static readonly tfResourceType: string;
    /**
    * Create a new {@link https://www.terraform.io/docs/providers/awscc/r/ec2_ec2_fleet.html awscc_ec2_ec2_fleet} Resource
    *
    * @param scope The scope in which to define this construct
    * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
    * @param options Ec2Ec2FleetConfig
    */
    constructor(scope: Construct, id: string, config: Ec2Ec2FleetConfig);
    private _context?;
    get context(): string;
    set context(value: string);
    resetContext(): void;
    get contextInput(): string | undefined;
    private _excessCapacityTerminationPolicy?;
    get excessCapacityTerminationPolicy(): string;
    set excessCapacityTerminationPolicy(value: string);
    resetExcessCapacityTerminationPolicy(): void;
    get excessCapacityTerminationPolicyInput(): string | undefined;
    get fleetId(): string;
    get id(): string;
    private _launchTemplateConfigs;
    get launchTemplateConfigs(): Ec2Ec2FleetLaunchTemplateConfigs[];
    set launchTemplateConfigs(value: Ec2Ec2FleetLaunchTemplateConfigs[]);
    get launchTemplateConfigsInput(): Ec2Ec2FleetLaunchTemplateConfigs[];
    private _onDemandOptions?;
    get onDemandOptions(): Ec2Ec2FleetOnDemandOptions;
    set onDemandOptions(value: Ec2Ec2FleetOnDemandOptions);
    resetOnDemandOptions(): void;
    get onDemandOptionsInput(): Ec2Ec2FleetOnDemandOptions | undefined;
    private _replaceUnhealthyInstances?;
    get replaceUnhealthyInstances(): boolean | cdktf.IResolvable;
    set replaceUnhealthyInstances(value: boolean | cdktf.IResolvable);
    resetReplaceUnhealthyInstances(): void;
    get replaceUnhealthyInstancesInput(): boolean | cdktf.IResolvable | undefined;
    private _spotOptions?;
    get spotOptions(): Ec2Ec2FleetSpotOptions;
    set spotOptions(value: Ec2Ec2FleetSpotOptions);
    resetSpotOptions(): void;
    get spotOptionsInput(): Ec2Ec2FleetSpotOptions | undefined;
    private _tagSpecifications?;
    get tagSpecifications(): Ec2Ec2FleetTagSpecifications[];
    set tagSpecifications(value: Ec2Ec2FleetTagSpecifications[]);
    resetTagSpecifications(): void;
    get tagSpecificationsInput(): Ec2Ec2FleetTagSpecifications[] | undefined;
    private _targetCapacitySpecification;
    get targetCapacitySpecification(): Ec2Ec2FleetTargetCapacitySpecification;
    set targetCapacitySpecification(value: Ec2Ec2FleetTargetCapacitySpecification);
    get targetCapacitySpecificationInput(): Ec2Ec2FleetTargetCapacitySpecification;
    private _terminateInstancesWithExpiration?;
    get terminateInstancesWithExpiration(): boolean | cdktf.IResolvable;
    set terminateInstancesWithExpiration(value: boolean | cdktf.IResolvable);
    resetTerminateInstancesWithExpiration(): void;
    get terminateInstancesWithExpirationInput(): boolean | cdktf.IResolvable | undefined;
    private _type?;
    get type(): string;
    set type(value: string);
    resetType(): void;
    get typeInput(): string | undefined;
    private _validFrom?;
    get validFrom(): string;
    set validFrom(value: string);
    resetValidFrom(): void;
    get validFromInput(): string | undefined;
    private _validUntil?;
    get validUntil(): string;
    set validUntil(value: string);
    resetValidUntil(): void;
    get validUntilInput(): string | undefined;
    protected synthesizeAttributes(): {
        [name: string]: any;
    };
}
