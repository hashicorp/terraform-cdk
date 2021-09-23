// https://www.terraform.io/docs/providers/awscc/d/emrcontainers_virtual_cluster.html
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DataAwsccEmrcontainersVirtualClusterConfig extends cdktf.TerraformMetaArguments {
  /**
  * Uniquely identifies the resource.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/d/emrcontainers_virtual_cluster.html#id DataAwsccEmrcontainersVirtualCluster#id}
  */
  readonly id: string;
}
export class DataAwsccEmrcontainersVirtualClusterContainerProviderInfoEksInfo extends cdktf.ComplexComputedList {

  // namespace - computed: true, optional: false, required: false
  public get namespace() {
    return this.getStringAttribute('namespace');
  }
}

export function dataAwsccEmrcontainersVirtualClusterContainerProviderInfoEksInfoToTerraform(struct?: DataAwsccEmrcontainersVirtualClusterContainerProviderInfoEksInfo): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    namespace: cdktf.stringToTerraform(struct!.namespace),
  }
}

export class DataAwsccEmrcontainersVirtualClusterContainerProviderInfo extends cdktf.ComplexComputedList {

  // eks_info - computed: true, optional: false, required: false
  public get eksInfo() {
    return this.interpolationForAttribute('eks_info') as any;
  }
}

export function dataAwsccEmrcontainersVirtualClusterContainerProviderInfoToTerraform(struct?: DataAwsccEmrcontainersVirtualClusterContainerProviderInfo): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    eks_info: dataAwsccEmrcontainersVirtualClusterContainerProviderInfoEksInfoToTerraform(struct!.eksInfo),
  }
}

export class DataAwsccEmrcontainersVirtualClusterContainerProvider extends cdktf.ComplexComputedList {

  // id - computed: true, optional: false, required: false
  public get id() {
    return this.getStringAttribute('id');
  }

  // info - computed: true, optional: false, required: false
  public get info() {
    return this.interpolationForAttribute('info') as any;
  }

  // type - computed: true, optional: false, required: false
  public get type() {
    return this.getStringAttribute('type');
  }
}

export function dataAwsccEmrcontainersVirtualClusterContainerProviderToTerraform(struct?: DataAwsccEmrcontainersVirtualClusterContainerProvider): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    id: cdktf.stringToTerraform(struct!.id),
    info: dataAwsccEmrcontainersVirtualClusterContainerProviderInfoToTerraform(struct!.info),
    type: cdktf.stringToTerraform(struct!.type),
  }
}

export class DataAwsccEmrcontainersVirtualClusterTags extends cdktf.ComplexComputedList {

  // key - computed: true, optional: false, required: false
  public get key() {
    return this.getStringAttribute('key');
  }

  // value - computed: true, optional: false, required: false
  public get value() {
    return this.getStringAttribute('value');
  }
}

export function dataAwsccEmrcontainersVirtualClusterTagsToTerraform(struct?: DataAwsccEmrcontainersVirtualClusterTags): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    key: cdktf.stringToTerraform(struct!.key),
    value: cdktf.stringToTerraform(struct!.value),
  }
}


/**
* Represents a {@link https://www.terraform.io/docs/providers/awscc/d/emrcontainers_virtual_cluster.html awscc_emrcontainers_virtual_cluster}
*/
export class DataAwsccEmrcontainersVirtualCluster extends cdktf.TerraformDataSource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType: string = "awscc_emrcontainers_virtual_cluster";

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://www.terraform.io/docs/providers/awscc/d/emrcontainers_virtual_cluster.html awscc_emrcontainers_virtual_cluster} Data Source
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DataAwsccEmrcontainersVirtualClusterConfig
  */
  public constructor(scope: Construct, id: string, config: DataAwsccEmrcontainersVirtualClusterConfig) {
    super(scope, id, {
      terraformResourceType: 'awscc_emrcontainers_virtual_cluster',
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

  // arn - computed: true, optional: false, required: false
  public get arn() {
    return this.getStringAttribute('arn');
  }

  // container_provider - computed: true, optional: false, required: false
  public get containerProvider() {
    return this.interpolationForAttribute('container_provider') as any;
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

  // name - computed: true, optional: false, required: false
  public get name() {
    return this.getStringAttribute('name');
  }

  // tags - computed: true, optional: false, required: false
  public get tags() {
    return this.interpolationForAttribute('tags') as any;
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
