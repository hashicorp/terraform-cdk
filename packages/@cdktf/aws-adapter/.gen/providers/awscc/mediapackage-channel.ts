// https://www.terraform.io/docs/providers/awscc/r/mediapackage_channel.html
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface MediapackageChannelConfig extends cdktf.TerraformMetaArguments {
  /**
  * A short text description of the Channel.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/mediapackage_channel.html#description MediapackageChannel#description}
  */
  readonly description?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/mediapackage_channel.html#egress_access_logs MediapackageChannel#egress_access_logs}
  */
  readonly egressAccessLogs?: MediapackageChannelEgressAccessLogs;
  /**
  * The ID of the Channel.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/mediapackage_channel.html#id MediapackageChannel#id}
  */
  readonly id: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/mediapackage_channel.html#ingress_access_logs MediapackageChannel#ingress_access_logs}
  */
  readonly ingressAccessLogs?: MediapackageChannelIngressAccessLogs;
  /**
  * A collection of tags associated with a resource
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/mediapackage_channel.html#tags MediapackageChannel#tags}
  */
  readonly tags?: MediapackageChannelTags[];
}
export interface MediapackageChannelEgressAccessLogs {
  /**
  * Sets a custom AWS CloudWatch log group name for access logs. If a log group name isn't specified, the defaults are used: /aws/MediaPackage/EgressAccessLogs for egress access logs and /aws/MediaPackage/IngressAccessLogs for ingress access logs.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/mediapackage_channel.html#log_group_name MediapackageChannel#log_group_name}
  */
  readonly logGroupName?: string;
}

export function mediapackageChannelEgressAccessLogsToTerraform(struct?: MediapackageChannelEgressAccessLogs): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    log_group_name: cdktf.stringToTerraform(struct!.logGroupName),
  }
}

export interface MediapackageChannelHlsIngestIngestEndpoints {
  /**
  * The system generated unique identifier for the IngestEndpoint
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/mediapackage_channel.html#id MediapackageChannel#id}
  */
  readonly id?: string;
  /**
  * The system generated password for ingest authentication.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/mediapackage_channel.html#password MediapackageChannel#password}
  */
  readonly password?: string;
  /**
  * The ingest URL to which the source stream should be sent.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/mediapackage_channel.html#url MediapackageChannel#url}
  */
  readonly url?: string;
  /**
  * The system generated username for ingest authentication.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/mediapackage_channel.html#username MediapackageChannel#username}
  */
  readonly username?: string;
}

export function mediapackageChannelHlsIngestIngestEndpointsToTerraform(struct?: MediapackageChannelHlsIngestIngestEndpoints): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    id: cdktf.stringToTerraform(struct!.id),
    password: cdktf.stringToTerraform(struct!.password),
    url: cdktf.stringToTerraform(struct!.url),
    username: cdktf.stringToTerraform(struct!.username),
  }
}

export class MediapackageChannelHlsIngest extends cdktf.ComplexComputedList {

  // ingest_endpoints - computed: true, optional: true, required: false
  private _ingestEndpoints?: MediapackageChannelHlsIngestIngestEndpoints[];
  public get ingestEndpoints() {
    return this.interpolationForAttribute('ingest_endpoints') as any;
  }
  public set ingestEndpoints(value: MediapackageChannelHlsIngestIngestEndpoints[]) {
    this._ingestEndpoints = value;
  }
  public resetIngestEndpoints() {
    this._ingestEndpoints = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ingestEndpointsInput() {
    return this._ingestEndpoints
  }
}

export function mediapackageChannelHlsIngestToTerraform(struct?: MediapackageChannelHlsIngest): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    ingest_endpoints: cdktf.listMapper(mediapackageChannelHlsIngestIngestEndpointsToTerraform)(struct!.ingestEndpoints),
  }
}

export interface MediapackageChannelIngressAccessLogs {
  /**
  * Sets a custom AWS CloudWatch log group name for access logs. If a log group name isn't specified, the defaults are used: /aws/MediaPackage/EgressAccessLogs for egress access logs and /aws/MediaPackage/IngressAccessLogs for ingress access logs.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/mediapackage_channel.html#log_group_name MediapackageChannel#log_group_name}
  */
  readonly logGroupName?: string;
}

export function mediapackageChannelIngressAccessLogsToTerraform(struct?: MediapackageChannelIngressAccessLogs): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    log_group_name: cdktf.stringToTerraform(struct!.logGroupName),
  }
}

export interface MediapackageChannelTags {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/mediapackage_channel.html#key MediapackageChannel#key}
  */
  readonly key: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/mediapackage_channel.html#value MediapackageChannel#value}
  */
  readonly value: string;
}

export function mediapackageChannelTagsToTerraform(struct?: MediapackageChannelTags): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    key: cdktf.stringToTerraform(struct!.key),
    value: cdktf.stringToTerraform(struct!.value),
  }
}


/**
* Represents a {@link https://www.terraform.io/docs/providers/awscc/r/mediapackage_channel.html awscc_mediapackage_channel}
*/
export class MediapackageChannel extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType: string = "awscc_mediapackage_channel";

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://www.terraform.io/docs/providers/awscc/r/mediapackage_channel.html awscc_mediapackage_channel} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options MediapackageChannelConfig
  */
  public constructor(scope: Construct, id: string, config: MediapackageChannelConfig) {
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
    this._description = config.description;
    this._egressAccessLogs = config.egressAccessLogs;
    this._id = config.id;
    this._ingressAccessLogs = config.ingressAccessLogs;
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

  // egress_access_logs - computed: false, optional: true, required: false
  private _egressAccessLogs?: MediapackageChannelEgressAccessLogs;
  public get egressAccessLogs() {
    return this.interpolationForAttribute('egress_access_logs') as any;
  }
  public set egressAccessLogs(value: MediapackageChannelEgressAccessLogs ) {
    this._egressAccessLogs = value;
  }
  public resetEgressAccessLogs() {
    this._egressAccessLogs = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get egressAccessLogsInput() {
    return this._egressAccessLogs
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

  // ingress_access_logs - computed: false, optional: true, required: false
  private _ingressAccessLogs?: MediapackageChannelIngressAccessLogs;
  public get ingressAccessLogs() {
    return this.interpolationForAttribute('ingress_access_logs') as any;
  }
  public set ingressAccessLogs(value: MediapackageChannelIngressAccessLogs ) {
    this._ingressAccessLogs = value;
  }
  public resetIngressAccessLogs() {
    this._ingressAccessLogs = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ingressAccessLogsInput() {
    return this._ingressAccessLogs
  }

  // tags - computed: true, optional: true, required: false
  private _tags?: MediapackageChannelTags[];
  public get tags() {
    return this.interpolationForAttribute('tags') as any;
  }
  public set tags(value: MediapackageChannelTags[]) {
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
      egress_access_logs: mediapackageChannelEgressAccessLogsToTerraform(this._egressAccessLogs),
      id: cdktf.stringToTerraform(this._id),
      ingress_access_logs: mediapackageChannelIngressAccessLogsToTerraform(this._ingressAccessLogs),
      tags: cdktf.listMapper(mediapackageChannelTagsToTerraform)(this._tags),
    };
  }
}
