// https://www.terraform.io/docs/providers/awscc/r/emrcontainers_virtual_cluster.html
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface EmrcontainersVirtualClusterConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/emrcontainers_virtual_cluster.html#container_provider EmrcontainersVirtualCluster#container_provider}
  */
  readonly containerProvider: EmrcontainersVirtualClusterContainerProvider;
  /**
  * Name of the virtual cluster.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/emrcontainers_virtual_cluster.html#name EmrcontainersVirtualCluster#name}
  */
  readonly name: string;
  /**
  * An array of key-value pairs to apply to this virtual cluster.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/emrcontainers_virtual_cluster.html#tags EmrcontainersVirtualCluster#tags}
  */
  readonly tags?: EmrcontainersVirtualClusterTags[];
}
export interface EmrcontainersVirtualClusterContainerProviderInfoEksInfo {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/emrcontainers_virtual_cluster.html#namespace EmrcontainersVirtualCluster#namespace}
  */
  readonly namespace: string;
}

export function emrcontainersVirtualClusterContainerProviderInfoEksInfoToTerraform(struct?: EmrcontainersVirtualClusterContainerProviderInfoEksInfo): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    namespace: cdktf.stringToTerraform(struct!.namespace),
  }
}

export interface EmrcontainersVirtualClusterContainerProviderInfo {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/emrcontainers_virtual_cluster.html#eks_info EmrcontainersVirtualCluster#eks_info}
  */
  readonly eksInfo: EmrcontainersVirtualClusterContainerProviderInfoEksInfo;
}

export function emrcontainersVirtualClusterContainerProviderInfoToTerraform(struct?: EmrcontainersVirtualClusterContainerProviderInfo): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    eks_info: emrcontainersVirtualClusterContainerProviderInfoEksInfoToTerraform(struct!.eksInfo),
  }
}

export interface EmrcontainersVirtualClusterContainerProvider {
  /**
  * The ID of the container cluster
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/emrcontainers_virtual_cluster.html#id EmrcontainersVirtualCluster#id}
  */
  readonly id: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/emrcontainers_virtual_cluster.html#info EmrcontainersVirtualCluster#info}
  */
  readonly info: EmrcontainersVirtualClusterContainerProviderInfo;
  /**
  * The type of the container provider
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/emrcontainers_virtual_cluster.html#type EmrcontainersVirtualCluster#type}
  */
  readonly type: string;
}

export function emrcontainersVirtualClusterContainerProviderToTerraform(struct?: EmrcontainersVirtualClusterContainerProvider): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    id: cdktf.stringToTerraform(struct!.id),
    info: emrcontainersVirtualClusterContainerProviderInfoToTerraform(struct!.info),
    type: cdktf.stringToTerraform(struct!.type),
  }
}

export interface EmrcontainersVirtualClusterTags {
  /**
  * The key name of the tag. You can specify a value that is 1 to 127 Unicode characters in length and cannot be prefixed with aws:. You can use any of the following characters: the set of Unicode letters, digits, whitespace, _, ., /, =, +, and -.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/emrcontainers_virtual_cluster.html#key EmrcontainersVirtualCluster#key}
  */
  readonly key: string;
  /**
  * The value for the tag. You can specify a value that is 1 to 255 Unicode characters in length and cannot be prefixed with aws:. You can use any of the following characters: the set of Unicode letters, digits, whitespace, _, ., /, =, +, and -.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/emrcontainers_virtual_cluster.html#value EmrcontainersVirtualCluster#value}
  */
  readonly value: string;
}

export function emrcontainersVirtualClusterTagsToTerraform(struct?: EmrcontainersVirtualClusterTags): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    key: cdktf.stringToTerraform(struct!.key),
    value: cdktf.stringToTerraform(struct!.value),
  }
}


/**
* Represents a {@link https://www.terraform.io/docs/providers/awscc/r/emrcontainers_virtual_cluster.html awscc_emrcontainers_virtual_cluster}
*/
export class EmrcontainersVirtualCluster extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType: string = "awscc_emrcontainers_virtual_cluster";

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://www.terraform.io/docs/providers/awscc/r/emrcontainers_virtual_cluster.html awscc_emrcontainers_virtual_cluster} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options EmrcontainersVirtualClusterConfig
  */
  public constructor(scope: Construct, id: string, config: EmrcontainersVirtualClusterConfig) {
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
    this._containerProvider = config.containerProvider;
    this._name = config.name;
    this._tags = config.tags;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // arn - computed: true, optional: false, required: false
  public get arn() {
    return this.getStringAttribute('arn');
  }

  // container_provider - computed: false, optional: false, required: true
  private _containerProvider: EmrcontainersVirtualClusterContainerProvider;
  public get containerProvider() {
    return this.interpolationForAttribute('container_provider') as any;
  }
  public set containerProvider(value: EmrcontainersVirtualClusterContainerProvider) {
    this._containerProvider = value;
  }
  // Temporarily expose input value. Use with caution.
  public get containerProviderInput() {
    return this._containerProvider
  }

  // id - computed: true, optional: false, required: false
  public get id() {
    return this.getStringAttribute('id');
  }

  // name - computed: false, optional: false, required: true
  private _name: string;
  public get name() {
    return this.getStringAttribute('name');
  }
  public set name(value: string) {
    this._name = value;
  }
  // Temporarily expose input value. Use with caution.
  public get nameInput() {
    return this._name
  }

  // tags - computed: false, optional: true, required: false
  private _tags?: EmrcontainersVirtualClusterTags[];
  public get tags() {
    return this.interpolationForAttribute('tags') as any;
  }
  public set tags(value: EmrcontainersVirtualClusterTags[] ) {
    this._tags = value;
  }
  public resetTags() {
    this._tags = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tagsInput() {
    return this._tags
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      container_provider: emrcontainersVirtualClusterContainerProviderToTerraform(this._containerProvider),
      name: cdktf.stringToTerraform(this._name),
      tags: cdktf.listMapper(emrcontainersVirtualClusterTagsToTerraform)(this._tags),
    };
  }
}
