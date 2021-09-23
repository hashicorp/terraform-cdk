// https://www.terraform.io/docs/providers/awscc/d/mediapackage_channel.html
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DataAwsccMediapackageChannelConfig extends cdktf.TerraformMetaArguments {
  /**
  * Uniquely identifies the resource.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/d/mediapackage_channel.html#id DataAwsccMediapackageChannel#id}
  */
  readonly id: string;
}
export class DataAwsccMediapackageChannelEgressAccessLogs extends cdktf.ComplexComputedList {

  // log_group_name - computed: true, optional: false, required: false
  public get logGroupName() {
    return this.getStringAttribute('log_group_name');
  }
}

export function dataAwsccMediapackageChannelEgressAccessLogsToTerraform(struct?: DataAwsccMediapackageChannelEgressAccessLogs): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    log_group_name: cdktf.stringToTerraform(struct!.logGroupName),
  }
}

export class DataAwsccMediapackageChannelHlsIngestIngestEndpoints extends cdktf.ComplexComputedList {

  // id - computed: true, optional: false, required: false
  public get id() {
    return this.getStringAttribute('id');
  }

  // password - computed: true, optional: false, required: false
  public get password() {
    return this.getStringAttribute('password');
  }

  // url - computed: true, optional: false, required: false
  public get url() {
    return this.getStringAttribute('url');
  }

  // username - computed: true, optional: false, required: false
  public get username() {
    return this.getStringAttribute('username');
  }
}

export function dataAwsccMediapackageChannelHlsIngestIngestEndpointsToTerraform(struct?: DataAwsccMediapackageChannelHlsIngestIngestEndpoints): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    id: cdktf.stringToTerraform(struct!.id),
    password: cdktf.stringToTerraform(struct!.password),
    url: cdktf.stringToTerraform(struct!.url),
    username: cdktf.stringToTerraform(struct!.username),
  }
}

export class DataAwsccMediapackageChannelHlsIngest extends cdktf.ComplexComputedList {

  // ingest_endpoints - computed: true, optional: false, required: false
  public get ingestEndpoints() {
    return this.interpolationForAttribute('ingest_endpoints') as any;
  }
}

export function dataAwsccMediapackageChannelHlsIngestToTerraform(struct?: DataAwsccMediapackageChannelHlsIngest): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    ingest_endpoints: cdktf.listMapper(dataAwsccMediapackageChannelHlsIngestIngestEndpointsToTerraform)(struct!.ingestEndpoints),
  }
}

export class DataAwsccMediapackageChannelIngressAccessLogs extends cdktf.ComplexComputedList {

  // log_group_name - computed: true, optional: false, required: false
  public get logGroupName() {
    return this.getStringAttribute('log_group_name');
  }
}

export function dataAwsccMediapackageChannelIngressAccessLogsToTerraform(struct?: DataAwsccMediapackageChannelIngressAccessLogs): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    log_group_name: cdktf.stringToTerraform(struct!.logGroupName),
  }
}

export class DataAwsccMediapackageChannelTags extends cdktf.ComplexComputedList {

  // key - computed: true, optional: false, required: false
  public get key() {
    return this.getStringAttribute('key');
  }

  // value - computed: true, optional: false, required: false
  public get value() {
    return this.getStringAttribute('value');
  }
}

export function dataAwsccMediapackageChannelTagsToTerraform(struct?: DataAwsccMediapackageChannelTags): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    key: cdktf.stringToTerraform(struct!.key),
    value: cdktf.stringToTerraform(struct!.value),
  }
}


/**
* Represents a {@link https://www.terraform.io/docs/providers/awscc/d/mediapackage_channel.html awscc_mediapackage_channel}
*/
export class DataAwsccMediapackageChannel extends cdktf.TerraformDataSource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType: string = "awscc_mediapackage_channel";

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://www.terraform.io/docs/providers/awscc/d/mediapackage_channel.html awscc_mediapackage_channel} Data Source
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DataAwsccMediapackageChannelConfig
  */
  public constructor(scope: Construct, id: string, config: DataAwsccMediapackageChannelConfig) {
    super(scope, id, {
      terraformResourceType: 'awscc_mediapackage_channel',
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

  // description - computed: true, optional: false, required: false
  public get description() {
    return this.getStringAttribute('description');
  }

  // egress_access_logs - computed: true, optional: false, required: false
  public get egressAccessLogs() {
    return this.interpolationForAttribute('egress_access_logs') as any;
  }

  // hls_ingest - computed: true, optional: false, required: false
  public get hlsIngest() {
    return this.interpolationForAttribute('hls_ingest') as any;
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

  // ingress_access_logs - computed: true, optional: false, required: false
  public get ingressAccessLogs() {
    return this.interpolationForAttribute('ingress_access_logs') as any;
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
