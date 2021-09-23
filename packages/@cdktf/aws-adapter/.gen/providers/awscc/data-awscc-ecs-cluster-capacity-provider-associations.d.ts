import { Construct } from 'constructs';
import * as cdktf from 'cdktf';
export interface DataAwsccEcsClusterCapacityProviderAssociationsConfig extends cdktf.TerraformMetaArguments {
    /**
    * Uniquely identifies the resource.
    *
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/d/ecs_cluster_capacity_provider_associations.html#id DataAwsccEcsClusterCapacityProviderAssociations#id}
    */
    readonly id: string;
}
export declare class DataAwsccEcsClusterCapacityProviderAssociationsDefaultCapacityProviderStrategy extends cdktf.ComplexComputedList {
    get base(): number;
    get capacityProvider(): string;
    get weight(): number;
}
export declare function dataAwsccEcsClusterCapacityProviderAssociationsDefaultCapacityProviderStrategyToTerraform(struct?: DataAwsccEcsClusterCapacityProviderAssociationsDefaultCapacityProviderStrategy): any;
/**
* Represents a {@link https://www.terraform.io/docs/providers/awscc/d/ecs_cluster_capacity_provider_associations.html awscc_ecs_cluster_capacity_provider_associations}
*/
export declare class DataAwsccEcsClusterCapacityProviderAssociations extends cdktf.TerraformDataSource {
    static readonly tfResourceType: string;
    /**
    * Create a new {@link https://www.terraform.io/docs/providers/awscc/d/ecs_cluster_capacity_provider_associations.html awscc_ecs_cluster_capacity_provider_associations} Data Source
    *
    * @param scope The scope in which to define this construct
    * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
    * @param options DataAwsccEcsClusterCapacityProviderAssociationsConfig
    */
    constructor(scope: Construct, id: string, config: DataAwsccEcsClusterCapacityProviderAssociationsConfig);
    get capacityProviders(): string[];
    get cluster(): string;
    get defaultCapacityProviderStrategy(): any;
    private _id;
    get id(): string;
    set id(value: string);
    get idInput(): string;
    protected synthesizeAttributes(): {
        [name: string]: any;
    };
}
