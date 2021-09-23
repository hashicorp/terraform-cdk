// https://www.terraform.io/docs/providers/awscc/r/ivs_channel.html
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface IvsChannelConfig extends cdktf.TerraformMetaArguments {
  /**
  * Whether the channel is authorized.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/ivs_channel.html#authorized IvsChannel#authorized}
  */
  readonly authorized?: boolean | cdktf.IResolvable;
  /**
  * Channel latency mode.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/ivs_channel.html#latency_mode IvsChannel#latency_mode}
  */
  readonly latencyMode?: string;
  /**
  * Channel
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/ivs_channel.html#name IvsChannel#name}
  */
  readonly name?: string;
  /**
  * Recording Configuration ARN. A value other than an empty string indicates that recording is enabled. Default: ?? (recording is disabled).
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/ivs_channel.html#recording_configuration_arn IvsChannel#recording_configuration_arn}
  */
  readonly recordingConfigurationArn?: string;
  /**
  * A list of key-value pairs that contain metadata for the asset model.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/ivs_channel.html#tags IvsChannel#tags}
  */
  readonly tags?: IvsChannelTags[];
  /**
  * Channel type, which determines the allowable resolution and bitrate. If you exceed the allowable resolution or bitrate, the stream probably will disconnect immediately.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/ivs_channel.html#type IvsChannel#type}
  */
  readonly type?: string;
}
export interface IvsChannelTags {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/ivs_channel.html#key IvsChannel#key}
  */
  readonly key: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/ivs_channel.html#value IvsChannel#value}
  */
  readonly value: string;
}

export function ivsChannelTagsToTerraform(struct?: IvsChannelTags): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    key: cdktf.stringToTerraform(struct!.key),
    value: cdktf.stringToTerraform(struct!.value),
  }
}


/**
* Represents a {@link https://www.terraform.io/docs/providers/awscc/r/ivs_channel.html awscc_ivs_channel}
*/
export class IvsChannel extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType: string = "awscc_ivs_channel";

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://www.terraform.io/docs/providers/awscc/r/ivs_channel.html awscc_ivs_channel} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options IvsChannelConfig = {}
  */
  public constructor(scope: Construct, id: string, config: IvsChannelConfig = {}) {
    super(scope, id, {
      terraformResourceType: 'awscc_ivs_channel',
      terraformGeneratorMetadata: {
        providerName: 'awscc'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle
    });
    this._authorized = config.authorized;
    this._latencyMode = config.latencyMode;
    this._name = config.name;
    this._recordingConfigurationArn = config.recordingConfigurationArn;
    this._tags = config.tags;
    this._type = config.type;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // arn - computed: true, optional: false, required: false
  public get arn() {
    return this.getStringAttribute('arn');
  }

  // authorized - computed: false, optional: true, required: false
  private _authorized?: boolean | cdktf.IResolvable;
  public get authorized() {
    return this.getBooleanAttribute('authorized');
  }
  public set authorized(value: boolean | cdktf.IResolvable ) {
    this._authorized = value;
  }
  public resetAuthorized() {
    this._authorized = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get authorizedInput() {
    return this._authorized
  }

  // id - computed: true, optional: false, required: false
  public get id() {
    return this.getStringAttribute('id');
  }

  // ingest_endpoint - computed: true, optional: false, required: false
  public get ingestEndpoint() {
    return this.getStringAttribute('ingest_endpoint');
  }

  // latency_mode - computed: false, optional: true, required: false
  private _latencyMode?: string;
  public get latencyMode() {
    return this.getStringAttribute('latency_mode');
  }
  public set latencyMode(value: string ) {
    this._latencyMode = value;
  }
  public resetLatencyMode() {
    this._latencyMode = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get latencyModeInput() {
    return this._latencyMode
  }

  // name - computed: false, optional: true, required: false
  private _name?: string;
  public get name() {
    return this.getStringAttribute('name');
  }
  public set name(value: string ) {
    this._name = value;
  }
  public resetName() {
    this._name = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get nameInput() {
    return this._name
  }

  // playback_url - computed: true, optional: false, required: false
  public get playbackUrl() {
    return this.getStringAttribute('playback_url');
  }

  // recording_configuration_arn - computed: true, optional: true, required: false
  private _recordingConfigurationArn?: string;
  public get recordingConfigurationArn() {
    return this.getStringAttribute('recording_configuration_arn');
  }
  public set recordingConfigurationArn(value: string) {
    this._recordingConfigurationArn = value;
  }
  public resetRecordingConfigurationArn() {
    this._recordingConfigurationArn = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get recordingConfigurationArnInput() {
    return this._recordingConfigurationArn
  }

  // tags - computed: false, optional: true, required: false
  private _tags?: IvsChannelTags[];
  public get tags() {
    return this.interpolationForAttribute('tags') as any;
  }
  public set tags(value: IvsChannelTags[] ) {
    this._tags = value;
  }
  public resetTags() {
    this._tags = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tagsInput() {
    return this._tags
  }

  // type - computed: false, optional: true, required: false
  private _type?: string;
  public get type() {
    return this.getStringAttribute('type');
  }
  public set type(value: string ) {
    this._type = value;
  }
  public resetType() {
    this._type = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get typeInput() {
    return this._type
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      authorized: cdktf.booleanToTerraform(this._authorized),
      latency_mode: cdktf.stringToTerraform(this._latencyMode),
      name: cdktf.stringToTerraform(this._name),
      recording_configuration_arn: cdktf.stringToTerraform(this._recordingConfigurationArn),
      tags: cdktf.listMapper(ivsChannelTagsToTerraform)(this._tags),
      type: cdktf.stringToTerraform(this._type),
    };
  }
}
