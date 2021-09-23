// https://www.terraform.io/docs/providers/awscc/r/devopsguru_resource_collection.html
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DevopsguruResourceCollectionConfig extends cdktf.TerraformMetaArguments {
  /**
  * Information about a filter used to specify which AWS resources are analyzed for anomalous behavior by DevOps Guru.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/devopsguru_resource_collection.html#resource_collection_filter DevopsguruResourceCollection#resource_collection_filter}
  */
  readonly resourceCollectionFilter: DevopsguruResourceCollectionResourceCollectionFilter;
}
export interface DevopsguruResourceCollectionResourceCollectionFilterCloudformation {
  /**
  * An array of CloudFormation stack names.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/devopsguru_resource_collection.html#stack_names DevopsguruResourceCollection#stack_names}
  */
  readonly stackNames?: string[];
}

export function devopsguruResourceCollectionResourceCollectionFilterCloudformationToTerraform(struct?: DevopsguruResourceCollectionResourceCollectionFilterCloudformation): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    stack_names: cdktf.listMapper(cdktf.stringToTerraform)(struct!.stackNames),
  }
}

export interface DevopsguruResourceCollectionResourceCollectionFilter {
  /**
  * CloudFormation resource for DevOps Guru to monitor
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/devopsguru_resource_collection.html#cloudformation DevopsguruResourceCollection#cloudformation}
  */
  readonly cloudformation?: DevopsguruResourceCollectionResourceCollectionFilterCloudformation;
}

export function devopsguruResourceCollectionResourceCollectionFilterToTerraform(struct?: DevopsguruResourceCollectionResourceCollectionFilter): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    cloudformation: devopsguruResourceCollectionResourceCollectionFilterCloudformationToTerraform(struct!.cloudformation),
  }
}


/**
* Represents a {@link https://www.terraform.io/docs/providers/awscc/r/devopsguru_resource_collection.html awscc_devopsguru_resource_collection}
*/
export class DevopsguruResourceCollection extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType: string = "awscc_devopsguru_resource_collection";

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://www.terraform.io/docs/providers/awscc/r/devopsguru_resource_collection.html awscc_devopsguru_resource_collection} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DevopsguruResourceCollectionConfig
  */
  public constructor(scope: Construct, id: string, config: DevopsguruResourceCollectionConfig) {
    super(scope, id, {
      terraformResourceType: 'awscc_devopsguru_resource_collection',
      terraformGeneratorMetadata: {
        providerName: 'awscc'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle
    });
    this._resourceCollectionFilter = config.resourceCollectionFilter;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // id - computed: true, optional: false, required: false
  public get id() {
    return this.getStringAttribute('id');
  }

  // resource_collection_filter - computed: false, optional: false, required: true
  private _resourceCollectionFilter: DevopsguruResourceCollectionResourceCollectionFilter;
  public get resourceCollectionFilter() {
    return this.interpolationForAttribute('resource_collection_filter') as any;
  }
  public set resourceCollectionFilter(value: DevopsguruResourceCollectionResourceCollectionFilter) {
    this._resourceCollectionFilter = value;
  }
  // Temporarily expose input value. Use with caution.
  public get resourceCollectionFilterInput() {
    return this._resourceCollectionFilter
  }

  // resource_collection_type - computed: true, optional: false, required: false
  public get resourceCollectionType() {
    return this.getStringAttribute('resource_collection_type');
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      resource_collection_filter: devopsguruResourceCollectionResourceCollectionFilterToTerraform(this._resourceCollectionFilter),
    };
  }
}
