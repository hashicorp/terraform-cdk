// https://www.terraform.io/docs/providers/awscc/r/ivs_stream_key.html
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface IvsStreamKeyConfig extends cdktf.TerraformMetaArguments {
  /**
  * Channel ARN for the stream.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/ivs_stream_key.html#channel_arn IvsStreamKey#channel_arn}
  */
  readonly channelArn: string;
  /**
  * A list of key-value pairs that contain metadata for the asset model.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/ivs_stream_key.html#tags IvsStreamKey#tags}
  */
  readonly tags?: IvsStreamKeyTags[];
}
export interface IvsStreamKeyTags {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/ivs_stream_key.html#key IvsStreamKey#key}
  */
  readonly key: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/ivs_stream_key.html#value IvsStreamKey#value}
  */
  readonly value: string;
}

export function ivsStreamKeyTagsToTerraform(struct?: IvsStreamKeyTags): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    key: cdktf.stringToTerraform(struct!.key),
    value: cdktf.stringToTerraform(struct!.value),
  }
}


/**
* Represents a {@link https://www.terraform.io/docs/providers/awscc/r/ivs_stream_key.html awscc_ivs_stream_key}
*/
export class IvsStreamKey extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType: string = "awscc_ivs_stream_key";

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://www.terraform.io/docs/providers/awscc/r/ivs_stream_key.html awscc_ivs_stream_key} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options IvsStreamKeyConfig
  */
  public constructor(scope: Construct, id: string, config: IvsStreamKeyConfig) {
    super(scope, id, {
      terraformResourceType: 'awscc_ivs_stream_key',
      terraformGeneratorMetadata: {
        providerName: 'awscc'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle
    });
    this._channelArn = config.channelArn;
    this._tags = config.tags;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // arn - computed: true, optional: false, required: false
  public get arn() {
    return this.getStringAttribute('arn');
  }

  // channel_arn - computed: false, optional: false, required: true
  private _channelArn: string;
  public get channelArn() {
    return this.getStringAttribute('channel_arn');
  }
  public set channelArn(value: string) {
    this._channelArn = value;
  }
  // Temporarily expose input value. Use with caution.
  public get channelArnInput() {
    return this._channelArn
  }

  // id - computed: true, optional: false, required: false
  public get id() {
    return this.getStringAttribute('id');
  }

  // tags - computed: false, optional: true, required: false
  private _tags?: IvsStreamKeyTags[];
  public get tags() {
    return this.interpolationForAttribute('tags') as any;
  }
  public set tags(value: IvsStreamKeyTags[] ) {
    this._tags = value;
  }
  public resetTags() {
    this._tags = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tagsInput() {
    return this._tags
  }

  // value - computed: true, optional: false, required: false
  public get value() {
    return this.getStringAttribute('value');
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      channel_arn: cdktf.stringToTerraform(this._channelArn),
      tags: cdktf.listMapper(ivsStreamKeyTagsToTerraform)(this._tags),
    };
  }
}
