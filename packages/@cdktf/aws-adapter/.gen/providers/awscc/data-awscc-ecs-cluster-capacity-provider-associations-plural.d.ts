import { Construct } from 'constructs';
import * as cdktf from 'cdktf';
export interface DataAwsccEcsClusterCapacityProviderAssociationsPluralConfig extends cdktf.TerraformMetaArguments {
}
/**
* Represents a {@link https://www.terraform.io/docs/providers/awscc/d/ecs_cluster_capacity_provider_associations_plural.html awscc_ecs_cluster_capacity_provider_associations_plural}
*/
export declare class DataAwsccEcsClusterCapacityProviderAssociationsPlural extends cdktf.TerraformDataSource {
    static readonly tfResourceType: string;
    /**
    * Create a new {@link https://www.terraform.io/docs/providers/awscc/d/ecs_cluster_capacity_provider_associations_plural.html awscc_ecs_cluster_capacity_provider_associations_plural} Data Source
    *
    * @param scope The scope in which to define this construct
    * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
    * @param options DataAwsccEcsClusterCapacityProviderAssociationsPluralConfig = {}
    */
    constructor(scope: Construct, id: string, config?: DataAwsccEcsClusterCapacityProviderAssociationsPluralConfig);
    get id(): string;
    get ids(): string[];
    protected synthesizeAttributes(): {
        [name: string]: any;
    };
}
