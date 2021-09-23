import { Construct } from 'constructs';
import * as cdktf from 'cdktf';
export interface EcsClusterCapacityProviderAssociationsConfig extends cdktf.TerraformMetaArguments {
    /**
    * List of capacity providers to associate with the cluster
    *
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/ecs_cluster_capacity_provider_associations.html#capacity_providers EcsClusterCapacityProviderAssociations#capacity_providers}
    */
    readonly capacityProviders: string[];
    /**
    * The name of the cluster
    *
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/ecs_cluster_capacity_provider_associations.html#cluster EcsClusterCapacityProviderAssociations#cluster}
    */
    readonly cluster: string;
    /**
    * List of capacity providers to associate with the cluster
    *
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/ecs_cluster_capacity_provider_associations.html#default_capacity_provider_strategy EcsClusterCapacityProviderAssociations#default_capacity_provider_strategy}
    */
    readonly defaultCapacityProviderStrategy: EcsClusterCapacityProviderAssociationsDefaultCapacityProviderStrategy[];
}
export interface EcsClusterCapacityProviderAssociationsDefaultCapacityProviderStrategy {
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/ecs_cluster_capacity_provider_associations.html#base EcsClusterCapacityProviderAssociations#base}
    */
    readonly base?: number;
    /**
    * If using ec2 auto-scaling, the name of the associated capacity provider. Otherwise FARGATE, FARGATE_SPOT.
    *
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/ecs_cluster_capacity_provider_associations.html#capacity_provider EcsClusterCapacityProviderAssociations#capacity_provider}
    */
    readonly capacityProvider: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/ecs_cluster_capacity_provider_associations.html#weight EcsClusterCapacityProviderAssociations#weight}
    */
    readonly weight?: number;
}
export declare function ecsClusterCapacityProviderAssociationsDefaultCapacityProviderStrategyToTerraform(struct?: EcsClusterCapacityProviderAssociationsDefaultCapacityProviderStrategy): any;
/**
* Represents a {@link https://www.terraform.io/docs/providers/awscc/r/ecs_cluster_capacity_provider_associations.html awscc_ecs_cluster_capacity_provider_associations}
*/
export declare class EcsClusterCapacityProviderAssociations extends cdktf.TerraformResource {
    static readonly tfResourceType: string;
    /**
    * Create a new {@link https://www.terraform.io/docs/providers/awscc/r/ecs_cluster_capacity_provider_associations.html awscc_ecs_cluster_capacity_provider_associations} Resource
    *
    * @param scope The scope in which to define this construct
    * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
    * @param options EcsClusterCapacityProviderAssociationsConfig
    */
    constructor(scope: Construct, id: string, config: EcsClusterCapacityProviderAssociationsConfig);
    private _capacityProviders;
    get capacityProviders(): string[];
    set capacityProviders(value: string[]);
    get capacityProvidersInput(): string[];
    private _cluster;
    get cluster(): string;
    set cluster(value: string);
    get clusterInput(): string;
    private _defaultCapacityProviderStrategy;
    get defaultCapacityProviderStrategy(): EcsClusterCapacityProviderAssociationsDefaultCapacityProviderStrategy[];
    set defaultCapacityProviderStrategy(value: EcsClusterCapacityProviderAssociationsDefaultCapacityProviderStrategy[]);
    get defaultCapacityProviderStrategyInput(): EcsClusterCapacityProviderAssociationsDefaultCapacityProviderStrategy[];
    get id(): string;
    protected synthesizeAttributes(): {
        [name: string]: any;
    };
}
