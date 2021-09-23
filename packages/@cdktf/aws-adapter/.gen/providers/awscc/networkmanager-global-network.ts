// https://www.terraform.io/docs/providers/awscc/r/networkmanager_global_network.html
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface NetworkmanagerGlobalNetworkConfig extends cdktf.TerraformMetaArguments {
  /**
  * The description of the global network.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/networkmanager_global_network.html#description NetworkmanagerGlobalNetwork#description}
  */
  readonly description?: string;
  /**
  * The tags for the global network.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/networkmanager_global_network.html#tags NetworkmanagerGlobalNetwork#tags}
  */
  readonly tags?: NetworkmanagerGlobalNetworkTags[];
}
export interface NetworkmanagerGlobalNetworkTags {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/networkmanager_global_network.html#key NetworkmanagerGlobalNetwork#key}
  */
  readonly key?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/networkmanager_global_network.html#value NetworkmanagerGlobalNetwork#value}
  */
  readonly value?: string;
}

export function networkmanagerGlobalNetworkTagsToTerraform(struct?: NetworkmanagerGlobalNetworkTags): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    key: cdktf.stringToTerraform(struct!.key),
    value: cdktf.stringToTerraform(struct!.value),
  }
}


/**
* Represents a {@link https://www.terraform.io/docs/providers/awscc/r/networkmanager_global_network.html awscc_networkmanager_global_network}
*/
export class NetworkmanagerGlobalNetwork extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType: string = "awscc_networkmanager_global_network";

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://www.terraform.io/docs/providers/awscc/r/networkmanager_global_network.html awscc_networkmanager_global_network} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options NetworkmanagerGlobalNetworkConfig = {}
  */
  public constructor(scope: Construct, id: string, config: NetworkmanagerGlobalNetworkConfig = {}) {
    super(scope, id, {
      terraformResourceType: 'awscc_networkmanager_global_network',
      terraformGeneratorMetadata: {
        providerName: 'awscc'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle
    });
    this._description = config.description;
    this._tags = config.tags;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // arn - computed: true, optional: false, required: false
  public get arn() {
    return this.getStringAttribute('arn');
  }

  // description - computed: false, optional: true, required: false
  private _description?: string;
  public get description() {
    return this.getStringAttribute('description');
  }
  public set description(value: string ) {
    this._description = value;
  }
  public resetDescription() {
    this._description = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get descriptionInput() {
    return this._description
  }

  // id - computed: true, optional: false, required: false
  public get id() {
    return this.getStringAttribute('id');
  }

  // tags - computed: false, optional: true, required: false
  private _tags?: NetworkmanagerGlobalNetworkTags[];
  public get tags() {
    return this.interpolationForAttribute('tags') as any;
  }
  public set tags(value: NetworkmanagerGlobalNetworkTags[] ) {
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
      description: cdktf.stringToTerraform(this._description),
      tags: cdktf.listMapper(networkmanagerGlobalNetworkTagsToTerraform)(this._tags),
    };
  }
}
