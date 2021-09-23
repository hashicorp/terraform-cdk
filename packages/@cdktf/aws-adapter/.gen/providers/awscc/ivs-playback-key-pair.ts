// https://www.terraform.io/docs/providers/awscc/r/ivs_playback_key_pair.html
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface IvsPlaybackKeyPairConfig extends cdktf.TerraformMetaArguments {
  /**
  * An arbitrary string (a nickname) assigned to a playback key pair that helps the customer identify that resource. The value does not need to be unique.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/ivs_playback_key_pair.html#name IvsPlaybackKeyPair#name}
  */
  readonly name?: string;
  /**
  * The public portion of a customer-generated key pair.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/ivs_playback_key_pair.html#public_key_material IvsPlaybackKeyPair#public_key_material}
  */
  readonly publicKeyMaterial: string;
  /**
  * A list of key-value pairs that contain metadata for the asset model.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/ivs_playback_key_pair.html#tags IvsPlaybackKeyPair#tags}
  */
  readonly tags?: IvsPlaybackKeyPairTags[];
}
export interface IvsPlaybackKeyPairTags {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/ivs_playback_key_pair.html#key IvsPlaybackKeyPair#key}
  */
  readonly key: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/ivs_playback_key_pair.html#value IvsPlaybackKeyPair#value}
  */
  readonly value: string;
}

export function ivsPlaybackKeyPairTagsToTerraform(struct?: IvsPlaybackKeyPairTags): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    key: cdktf.stringToTerraform(struct!.key),
    value: cdktf.stringToTerraform(struct!.value),
  }
}


/**
* Represents a {@link https://www.terraform.io/docs/providers/awscc/r/ivs_playback_key_pair.html awscc_ivs_playback_key_pair}
*/
export class IvsPlaybackKeyPair extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType: string = "awscc_ivs_playback_key_pair";

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://www.terraform.io/docs/providers/awscc/r/ivs_playback_key_pair.html awscc_ivs_playback_key_pair} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options IvsPlaybackKeyPairConfig
  */
  public constructor(scope: Construct, id: string, config: IvsPlaybackKeyPairConfig) {
    super(scope, id, {
      terraformResourceType: 'awscc_ivs_playback_key_pair',
      terraformGeneratorMetadata: {
        providerName: 'awscc'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle
    });
    this._name = config.name;
    this._publicKeyMaterial = config.publicKeyMaterial;
    this._tags = config.tags;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // arn - computed: true, optional: false, required: false
  public get arn() {
    return this.getStringAttribute('arn');
  }

  // fingerprint - computed: true, optional: false, required: false
  public get fingerprint() {
    return this.getStringAttribute('fingerprint');
  }

  // id - computed: true, optional: false, required: false
  public get id() {
    return this.getStringAttribute('id');
  }

  // name - computed: true, optional: true, required: false
  private _name?: string;
  public get name() {
    return this.getStringAttribute('name');
  }
  public set name(value: string) {
    this._name = value;
  }
  public resetName() {
    this._name = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get nameInput() {
    return this._name
  }

  // public_key_material - computed: false, optional: false, required: true
  private _publicKeyMaterial: string;
  public get publicKeyMaterial() {
    return this.getStringAttribute('public_key_material');
  }
  public set publicKeyMaterial(value: string) {
    this._publicKeyMaterial = value;
  }
  // Temporarily expose input value. Use with caution.
  public get publicKeyMaterialInput() {
    return this._publicKeyMaterial
  }

  // tags - computed: false, optional: true, required: false
  private _tags?: IvsPlaybackKeyPairTags[];
  public get tags() {
    return this.interpolationForAttribute('tags') as any;
  }
  public set tags(value: IvsPlaybackKeyPairTags[] ) {
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
      name: cdktf.stringToTerraform(this._name),
      public_key_material: cdktf.stringToTerraform(this._publicKeyMaterial),
      tags: cdktf.listMapper(ivsPlaybackKeyPairTagsToTerraform)(this._tags),
    };
  }
}
