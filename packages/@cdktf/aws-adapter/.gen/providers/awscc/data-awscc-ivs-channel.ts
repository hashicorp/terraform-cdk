// https://www.terraform.io/docs/providers/awscc/d/ivs_channel.html
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DataAwsccIvsChannelConfig extends cdktf.TerraformMetaArguments {
  /**
  * Uniquely identifies the resource.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/d/ivs_channel.html#id DataAwsccIvsChannel#id}
  */
  readonly id: string;
}
export class DataAwsccIvsChannelTags extends cdktf.ComplexComputedList {

  // key - computed: true, optional: false, required: false
  public get key() {
    return this.getStringAttribute('key');
  }

  // value - computed: true, optional: false, required: false
  public get value() {
    return this.getStringAttribute('value');
  }
}

export function dataAwsccIvsChannelTagsToTerraform(struct?: DataAwsccIvsChannelTags): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    key: cdktf.stringToTerraform(struct!.key),
    value: cdktf.stringToTerraform(struct!.value),
  }
}


/**
* Represents a {@link https://www.terraform.io/docs/providers/awscc/d/ivs_channel.html awscc_ivs_channel}
*/
export class DataAwsccIvsChannel extends cdktf.TerraformDataSource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType: string = "awscc_ivs_channel";

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://www.terraform.io/docs/providers/awscc/d/ivs_channel.html awscc_ivs_channel} Data Source
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DataAwsccIvsChannelConfig
  */
  public constructor(scope: Construct, id: string, config: DataAwsccIvsChannelConfig) {
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
    this._id = config.id;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // arn - computed: true, optional: false, required: false
  public get arn() {
    return this.getStringAttribute('arn');
  }

  // authorized - computed: true, optional: false, required: false
  public get authorized() {
    return this.getBooleanAttribute('authorized');
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

  // ingest_endpoint - computed: true, optional: false, required: false
  public get ingestEndpoint() {
    return this.getStringAttribute('ingest_endpoint');
  }

  // latency_mode - computed: true, optional: false, required: false
  public get latencyMode() {
    return this.getStringAttribute('latency_mode');
  }

  // name - computed: true, optional: false, required: false
  public get name() {
    return this.getStringAttribute('name');
  }

  // playback_url - computed: true, optional: false, required: false
  public get playbackUrl() {
    return this.getStringAttribute('playback_url');
  }

  // recording_configuration_arn - computed: true, optional: false, required: false
  public get recordingConfigurationArn() {
    return this.getStringAttribute('recording_configuration_arn');
  }

  // tags - computed: true, optional: false, required: false
  public get tags() {
    return this.interpolationForAttribute('tags') as any;
  }

  // type - computed: true, optional: false, required: false
  public get type() {
    return this.getStringAttribute('type');
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
