// https://www.terraform.io/docs/providers/awscc/d/eks_addon.html
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DataAwsccEksAddonConfig extends cdktf.TerraformMetaArguments {
  /**
  * Uniquely identifies the resource.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/d/eks_addon.html#id DataAwsccEksAddon#id}
  */
  readonly id: string;
}
export class DataAwsccEksAddonTags extends cdktf.ComplexComputedList {

  // key - computed: true, optional: false, required: false
  public get key() {
    return this.getStringAttribute('key');
  }

  // value - computed: true, optional: false, required: false
  public get value() {
    return this.getStringAttribute('value');
  }
}

export function dataAwsccEksAddonTagsToTerraform(struct?: DataAwsccEksAddonTags): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    key: cdktf.stringToTerraform(struct!.key),
    value: cdktf.stringToTerraform(struct!.value),
  }
}


/**
* Represents a {@link https://www.terraform.io/docs/providers/awscc/d/eks_addon.html awscc_eks_addon}
*/
export class DataAwsccEksAddon extends cdktf.TerraformDataSource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType: string = "awscc_eks_addon";

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://www.terraform.io/docs/providers/awscc/d/eks_addon.html awscc_eks_addon} Data Source
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DataAwsccEksAddonConfig
  */
  public constructor(scope: Construct, id: string, config: DataAwsccEksAddonConfig) {
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
    this._id = config.id;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // addon_name - computed: true, optional: false, required: false
  public get addonName() {
    return this.getStringAttribute('addon_name');
  }

  // addon_version - computed: true, optional: false, required: false
  public get addonVersion() {
    return this.getStringAttribute('addon_version');
  }

  // arn - computed: true, optional: false, required: false
  public get arn() {
    return this.getStringAttribute('arn');
  }

  // cluster_name - computed: true, optional: false, required: false
  public get clusterName() {
    return this.getStringAttribute('cluster_name');
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

  // resolve_conflicts - computed: true, optional: false, required: false
  public get resolveConflicts() {
    return this.getStringAttribute('resolve_conflicts');
  }

  // service_account_role_arn - computed: true, optional: false, required: false
  public get serviceAccountRoleArn() {
    return this.getStringAttribute('service_account_role_arn');
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
