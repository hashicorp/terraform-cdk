// https://www.terraform.io/docs/providers/awscc/d/ecs_cluster_capacity_provider_associations.html
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DataAwsccEcsClusterCapacityProviderAssociationsConfig extends cdktf.TerraformMetaArguments {
  /**
  * Uniquely identifies the resource.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/d/ecs_cluster_capacity_provider_associations.html#id DataAwsccEcsClusterCapacityProviderAssociations#id}
  */
  readonly id: string;
}
export class DataAwsccEcsClusterCapacityProviderAssociationsDefaultCapacityProviderStrategy extends cdktf.ComplexComputedList {

  // base - computed: true, optional: false, required: false
  public get base() {
    return this.getNumberAttribute('base');
  }

  // capacity_provider - computed: true, optional: false, required: false
  public get capacityProvider() {
    return this.getStringAttribute('capacity_provider');
  }

  // weight - computed: true, optional: false, required: false
  public get weight() {
    return this.getNumberAttribute('weight');
  }
}

export function dataAwsccEcsClusterCapacityProviderAssociationsDefaultCapacityProviderStrategyToTerraform(struct?: DataAwsccEcsClusterCapacityProviderAssociationsDefaultCapacityProviderStrategy): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    base: cdktf.numberToTerraform(struct!.base),
    capacity_provider: cdktf.stringToTerraform(struct!.capacityProvider),
    weight: cdktf.numberToTerraform(struct!.weight),
  }
}


/**
* Represents a {@link https://www.terraform.io/docs/providers/awscc/d/ecs_cluster_capacity_provider_associations.html awscc_ecs_cluster_capacity_provider_associations}
*/
export class DataAwsccEcsClusterCapacityProviderAssociations extends cdktf.TerraformDataSource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType: string = "awscc_ecs_cluster_capacity_provider_associations";

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://www.terraform.io/docs/providers/awscc/d/ecs_cluster_capacity_provider_associations.html awscc_ecs_cluster_capacity_provider_associations} Data Source
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DataAwsccEcsClusterCapacityProviderAssociationsConfig
  */
  public constructor(scope: Construct, id: string, config: DataAwsccEcsClusterCapacityProviderAssociationsConfig) {
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
    this._id = config.id;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // capacity_providers - computed: true, optional: false, required: false
  public get capacityProviders() {
    return this.getListAttribute('capacity_providers');
  }

  // cluster - computed: true, optional: false, required: false
  public get cluster() {
    return this.getStringAttribute('cluster');
  }

  // default_capacity_provider_strategy - computed: true, optional: false, required: false
  public get defaultCapacityProviderStrategy() {
    return this.interpolationForAttribute('default_capacity_provider_strategy') as any;
  }

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

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      id: cdktf.stringToTerraform(this._id),
    };
  }
}
