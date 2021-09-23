// https://www.terraform.io/docs/providers/awscc/r/ecs_cluster_capacity_provider_associations.html
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

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

export function ecsClusterCapacityProviderAssociationsDefaultCapacityProviderStrategyToTerraform(struct?: EcsClusterCapacityProviderAssociationsDefaultCapacityProviderStrategy): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    base: cdktf.numberToTerraform(struct!.base),
    capacity_provider: cdktf.stringToTerraform(struct!.capacityProvider),
    weight: cdktf.numberToTerraform(struct!.weight),
  }
}


/**
* Represents a {@link https://www.terraform.io/docs/providers/awscc/r/ecs_cluster_capacity_provider_associations.html awscc_ecs_cluster_capacity_provider_associations}
*/
export class EcsClusterCapacityProviderAssociations extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType: string = "awscc_ecs_cluster_capacity_provider_associations";

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://www.terraform.io/docs/providers/awscc/r/ecs_cluster_capacity_provider_associations.html awscc_ecs_cluster_capacity_provider_associations} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options EcsClusterCapacityProviderAssociationsConfig
  */
  public constructor(scope: Construct, id: string, config: EcsClusterCapacityProviderAssociationsConfig) {
    super(scope, id, {
      terraformResourceType: 'awscc_ecs_cluster_capacity_provider_associations',
      terraformGeneratorMetadata: {
        providerName: 'awscc'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle
    });
    this._capacityProviders = config.capacityProviders;
    this._cluster = config.cluster;
    this._defaultCapacityProviderStrategy = config.defaultCapacityProviderStrategy;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // capacity_providers - computed: false, optional: false, required: true
  private _capacityProviders: string[];
  public get capacityProviders() {
    return this.getListAttribute('capacity_providers');
  }
  public set capacityProviders(value: string[]) {
    this._capacityProviders = value;
  }
  // Temporarily expose input value. Use with caution.
  public get capacityProvidersInput() {
    return this._capacityProviders
  }

  // cluster - computed: false, optional: false, required: true
  private _cluster: string;
  public get cluster() {
    return this.getStringAttribute('cluster');
  }
  public set cluster(value: string) {
    this._cluster = value;
  }
  // Temporarily expose input value. Use with caution.
  public get clusterInput() {
    return this._cluster
  }

  // default_capacity_provider_strategy - computed: false, optional: false, required: true
  private _defaultCapacityProviderStrategy: EcsClusterCapacityProviderAssociationsDefaultCapacityProviderStrategy[];
  public get defaultCapacityProviderStrategy() {
    return this.interpolationForAttribute('default_capacity_provider_strategy') as any;
  }
  public set defaultCapacityProviderStrategy(value: EcsClusterCapacityProviderAssociationsDefaultCapacityProviderStrategy[]) {
    this._defaultCapacityProviderStrategy = value;
  }
  // Temporarily expose input value. Use with caution.
  public get defaultCapacityProviderStrategyInput() {
    return this._defaultCapacityProviderStrategy
  }

  // id - computed: true, optional: false, required: false
  public get id() {
    return this.getStringAttribute('id');
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      capacity_providers: cdktf.listMapper(cdktf.stringToTerraform)(this._capacityProviders),
      cluster: cdktf.stringToTerraform(this._cluster),
      default_capacity_provider_strategy: cdktf.listMapper(ecsClusterCapacityProviderAssociationsDefaultCapacityProviderStrategyToTerraform)(this._defaultCapacityProviderStrategy),
    };
  }
}
