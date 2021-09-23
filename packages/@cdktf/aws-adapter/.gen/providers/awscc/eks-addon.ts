// https://www.terraform.io/docs/providers/awscc/r/eks_addon.html
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface EksAddonConfig extends cdktf.TerraformMetaArguments {
  /**
  * Name of Addon
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/eks_addon.html#addon_name EksAddon#addon_name}
  */
  readonly addonName: string;
  /**
  * Version of Addon
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/eks_addon.html#addon_version EksAddon#addon_version}
  */
  readonly addonVersion?: string;
  /**
  * Name of Cluster
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/eks_addon.html#cluster_name EksAddon#cluster_name}
  */
  readonly clusterName: string;
  /**
  * Resolve parameter value conflicts
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/eks_addon.html#resolve_conflicts EksAddon#resolve_conflicts}
  */
  readonly resolveConflicts?: string;
  /**
  * IAM role to bind to the add-on's service account
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/eks_addon.html#service_account_role_arn EksAddon#service_account_role_arn}
  */
  readonly serviceAccountRoleArn?: string;
  /**
  * An array of key-value pairs to apply to this resource.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/eks_addon.html#tags EksAddon#tags}
  */
  readonly tags?: EksAddonTags[];
}
export interface EksAddonTags {
  /**
  * The key name of the tag. You can specify a value that is 1 to 127 Unicode characters in length and cannot be prefixed with aws:. You can use any of the following characters: the set of Unicode letters, digits, whitespace, _, ., /, =, +, and -. 
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/eks_addon.html#key EksAddon#key}
  */
  readonly key: string;
  /**
  * The value for the tag. You can specify a value that is 1 to 255 Unicode characters in length and cannot be prefixed with aws:. You can use any of the following characters: the set of Unicode letters, digits, whitespace, _, ., /, =, +, and -. 
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/eks_addon.html#value EksAddon#value}
  */
  readonly value: string;
}

export function eksAddonTagsToTerraform(struct?: EksAddonTags): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    key: cdktf.stringToTerraform(struct!.key),
    value: cdktf.stringToTerraform(struct!.value),
  }
}


/**
* Represents a {@link https://www.terraform.io/docs/providers/awscc/r/eks_addon.html awscc_eks_addon}
*/
export class EksAddon extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType: string = "awscc_eks_addon";

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://www.terraform.io/docs/providers/awscc/r/eks_addon.html awscc_eks_addon} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options EksAddonConfig
  */
  public constructor(scope: Construct, id: string, config: EksAddonConfig) {
    super(scope, id, {
      terraformResourceType: 'awscc_eks_addon',
      terraformGeneratorMetadata: {
        providerName: 'awscc'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle
    });
    this._addonName = config.addonName;
    this._addonVersion = config.addonVersion;
    this._clusterName = config.clusterName;
    this._resolveConflicts = config.resolveConflicts;
    this._serviceAccountRoleArn = config.serviceAccountRoleArn;
    this._tags = config.tags;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // addon_name - computed: false, optional: false, required: true
  private _addonName: string;
  public get addonName() {
    return this.getStringAttribute('addon_name');
  }
  public set addonName(value: string) {
    this._addonName = value;
  }
  // Temporarily expose input value. Use with caution.
  public get addonNameInput() {
    return this._addonName
  }

  // addon_version - computed: false, optional: true, required: false
  private _addonVersion?: string;
  public get addonVersion() {
    return this.getStringAttribute('addon_version');
  }
  public set addonVersion(value: string ) {
    this._addonVersion = value;
  }
  public resetAddonVersion() {
    this._addonVersion = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get addonVersionInput() {
    return this._addonVersion
  }

  // arn - computed: true, optional: false, required: false
  public get arn() {
    return this.getStringAttribute('arn');
  }

  // cluster_name - computed: false, optional: false, required: true
  private _clusterName: string;
  public get clusterName() {
    return this.getStringAttribute('cluster_name');
  }
  public set clusterName(value: string) {
    this._clusterName = value;
  }
  // Temporarily expose input value. Use with caution.
  public get clusterNameInput() {
    return this._clusterName
  }

  // id - computed: true, optional: false, required: false
  public get id() {
    return this.getStringAttribute('id');
  }

  // resolve_conflicts - computed: false, optional: true, required: false
  private _resolveConflicts?: string;
  public get resolveConflicts() {
    return this.getStringAttribute('resolve_conflicts');
  }
  public set resolveConflicts(value: string ) {
    this._resolveConflicts = value;
  }
  public resetResolveConflicts() {
    this._resolveConflicts = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get resolveConflictsInput() {
    return this._resolveConflicts
  }

  // service_account_role_arn - computed: false, optional: true, required: false
  private _serviceAccountRoleArn?: string;
  public get serviceAccountRoleArn() {
    return this.getStringAttribute('service_account_role_arn');
  }
  public set serviceAccountRoleArn(value: string ) {
    this._serviceAccountRoleArn = value;
  }
  public resetServiceAccountRoleArn() {
    this._serviceAccountRoleArn = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get serviceAccountRoleArnInput() {
    return this._serviceAccountRoleArn
  }

  // tags - computed: false, optional: true, required: false
  private _tags?: EksAddonTags[];
  public get tags() {
    return this.interpolationForAttribute('tags') as any;
  }
  public set tags(value: EksAddonTags[] ) {
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
      addon_name: cdktf.stringToTerraform(this._addonName),
      addon_version: cdktf.stringToTerraform(this._addonVersion),
      cluster_name: cdktf.stringToTerraform(this._clusterName),
      resolve_conflicts: cdktf.stringToTerraform(this._resolveConflicts),
      service_account_role_arn: cdktf.stringToTerraform(this._serviceAccountRoleArn),
      tags: cdktf.listMapper(eksAddonTagsToTerraform)(this._tags),
    };
  }
}
