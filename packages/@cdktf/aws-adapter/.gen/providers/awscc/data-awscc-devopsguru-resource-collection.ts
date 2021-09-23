// https://www.terraform.io/docs/providers/awscc/d/devopsguru_resource_collection.html
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DataAwsccDevopsguruResourceCollectionConfig extends cdktf.TerraformMetaArguments {
  /**
  * Uniquely identifies the resource.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/d/devopsguru_resource_collection.html#id DataAwsccDevopsguruResourceCollection#id}
  */
  readonly id: string;
}
export class DataAwsccDevopsguruResourceCollectionResourceCollectionFilterCloudformation extends cdktf.ComplexComputedList {

  // stack_names - computed: true, optional: false, required: false
  public get stackNames() {
    return this.getListAttribute('stack_names');
  }
}

export function dataAwsccDevopsguruResourceCollectionResourceCollectionFilterCloudformationToTerraform(struct?: DataAwsccDevopsguruResourceCollectionResourceCollectionFilterCloudformation): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    stack_names: cdktf.listMapper(cdktf.stringToTerraform)(struct!.stackNames),
  }
}

export class DataAwsccDevopsguruResourceCollectionResourceCollectionFilter extends cdktf.ComplexComputedList {

  // cloudformation - computed: true, optional: false, required: false
  public get cloudformation() {
    return this.interpolationForAttribute('cloudformation') as any;
  }
}

export function dataAwsccDevopsguruResourceCollectionResourceCollectionFilterToTerraform(struct?: DataAwsccDevopsguruResourceCollectionResourceCollectionFilter): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    cloudformation: dataAwsccDevopsguruResourceCollectionResourceCollectionFilterCloudformationToTerraform(struct!.cloudformation),
  }
}


/**
* Represents a {@link https://www.terraform.io/docs/providers/awscc/d/devopsguru_resource_collection.html awscc_devopsguru_resource_collection}
*/
export class DataAwsccDevopsguruResourceCollection extends cdktf.TerraformDataSource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType: string = "awscc_devopsguru_resource_collection";

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://www.terraform.io/docs/providers/awscc/d/devopsguru_resource_collection.html awscc_devopsguru_resource_collection} Data Source
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DataAwsccDevopsguruResourceCollectionConfig
  */
  public constructor(scope: Construct, id: string, config: DataAwsccDevopsguruResourceCollectionConfig) {
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
    this._id = config.id;
  }

  // ==========
  // ATTRIBUTES
  // ==========

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

  // resource_collection_filter - computed: true, optional: false, required: false
  public get resourceCollectionFilter() {
    return this.interpolationForAttribute('resource_collection_filter') as any;
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
      id: cdktf.stringToTerraform(this._id),
    };
  }
}
