// https://www.terraform.io/docs/providers/awscc/r/ec2_transit_gateway_peering_attachment.html
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface Ec2TransitGatewayPeeringAttachmentConfig extends cdktf.TerraformMetaArguments {
  /**
  * The ID of the peer account
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/ec2_transit_gateway_peering_attachment.html#peer_account_id Ec2TransitGatewayPeeringAttachment#peer_account_id}
  */
  readonly peerAccountId: string;
  /**
  * Peer Region
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/ec2_transit_gateway_peering_attachment.html#peer_region Ec2TransitGatewayPeeringAttachment#peer_region}
  */
  readonly peerRegion: string;
  /**
  * The ID of the peer transit gateway.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/ec2_transit_gateway_peering_attachment.html#peer_transit_gateway_id Ec2TransitGatewayPeeringAttachment#peer_transit_gateway_id}
  */
  readonly peerTransitGatewayId: string;
  /**
  * The tags for the transit gateway peering attachment.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/ec2_transit_gateway_peering_attachment.html#tags Ec2TransitGatewayPeeringAttachment#tags}
  */
  readonly tags?: Ec2TransitGatewayPeeringAttachmentTags[];
  /**
  * The ID of the transit gateway.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/ec2_transit_gateway_peering_attachment.html#transit_gateway_id Ec2TransitGatewayPeeringAttachment#transit_gateway_id}
  */
  readonly transitGatewayId: string;
}
export class Ec2TransitGatewayPeeringAttachmentStatus extends cdktf.ComplexComputedList {

  // code - computed: true, optional: true, required: false
  private _code?: string;
  public get code() {
    return this.getStringAttribute('code');
  }
  public set code(value: string) {
    this._code = value;
  }
  public resetCode() {
    this._code = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get codeInput() {
    return this._code
  }

  // message - computed: true, optional: true, required: false
  private _message?: string;
  public get message() {
    return this.getStringAttribute('message');
  }
  public set message(value: string) {
    this._message = value;
  }
  public resetMessage() {
    this._message = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get messageInput() {
    return this._message
  }
}

export function ec2TransitGatewayPeeringAttachmentStatusToTerraform(struct?: Ec2TransitGatewayPeeringAttachmentStatus): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    code: cdktf.stringToTerraform(struct!.code),
    message: cdktf.stringToTerraform(struct!.message),
  }
}

export interface Ec2TransitGatewayPeeringAttachmentTags {
  /**
  * The key of the tag. Constraints: Tag keys are case-sensitive and accept a maximum of 127 Unicode characters. May not begin with aws:.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/ec2_transit_gateway_peering_attachment.html#key Ec2TransitGatewayPeeringAttachment#key}
  */
  readonly key?: string;
  /**
  * The value of the tag. Constraints: Tag values are case-sensitive and accept a maximum of 255 Unicode characters.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/ec2_transit_gateway_peering_attachment.html#value Ec2TransitGatewayPeeringAttachment#value}
  */
  readonly value?: string;
}

export function ec2TransitGatewayPeeringAttachmentTagsToTerraform(struct?: Ec2TransitGatewayPeeringAttachmentTags): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    key: cdktf.stringToTerraform(struct!.key),
    value: cdktf.stringToTerraform(struct!.value),
  }
}


/**
* Represents a {@link https://www.terraform.io/docs/providers/awscc/r/ec2_transit_gateway_peering_attachment.html awscc_ec2_transit_gateway_peering_attachment}
*/
export class Ec2TransitGatewayPeeringAttachment extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType: string = "awscc_ec2_transit_gateway_peering_attachment";

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://www.terraform.io/docs/providers/awscc/r/ec2_transit_gateway_peering_attachment.html awscc_ec2_transit_gateway_peering_attachment} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options Ec2TransitGatewayPeeringAttachmentConfig
  */
  public constructor(scope: Construct, id: string, config: Ec2TransitGatewayPeeringAttachmentConfig) {
    super(scope, id, {
      terraformResourceType: 'awscc_ec2_transit_gateway_peering_attachment',
      terraformGeneratorMetadata: {
        providerName: 'awscc'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle
    });
    this._peerAccountId = config.peerAccountId;
    this._peerRegion = config.peerRegion;
    this._peerTransitGatewayId = config.peerTransitGatewayId;
    this._tags = config.tags;
    this._transitGatewayId = config.transitGatewayId;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // creation_time - computed: true, optional: false, required: false
  public get creationTime() {
    return this.getStringAttribute('creation_time');
  }

  // id - computed: true, optional: false, required: false
  public get id() {
    return this.getStringAttribute('id');
  }

  // peer_account_id - computed: false, optional: false, required: true
  private _peerAccountId: string;
  public get peerAccountId() {
    return this.getStringAttribute('peer_account_id');
  }
  public set peerAccountId(value: string) {
    this._peerAccountId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get peerAccountIdInput() {
    return this._peerAccountId
  }

  // peer_region - computed: false, optional: false, required: true
  private _peerRegion: string;
  public get peerRegion() {
    return this.getStringAttribute('peer_region');
  }
  public set peerRegion(value: string) {
    this._peerRegion = value;
  }
  // Temporarily expose input value. Use with caution.
  public get peerRegionInput() {
    return this._peerRegion
  }

  // peer_transit_gateway_id - computed: false, optional: false, required: true
  private _peerTransitGatewayId: string;
  public get peerTransitGatewayId() {
    return this.getStringAttribute('peer_transit_gateway_id');
  }
  public set peerTransitGatewayId(value: string) {
    this._peerTransitGatewayId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get peerTransitGatewayIdInput() {
    return this._peerTransitGatewayId
  }

  // state - computed: true, optional: false, required: false
  public get state() {
    return this.getStringAttribute('state');
  }

  // status - computed: true, optional: false, required: false
  public get status() {
    return this.interpolationForAttribute('status') as any;
  }

  // tags - computed: false, optional: true, required: false
  private _tags?: Ec2TransitGatewayPeeringAttachmentTags[];
  public get tags() {
    return this.interpolationForAttribute('tags') as any;
  }
  public set tags(value: Ec2TransitGatewayPeeringAttachmentTags[] ) {
    this._tags = value;
  }
  public resetTags() {
    this._tags = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tagsInput() {
    return this._tags
  }

  // transit_gateway_attachment_id - computed: true, optional: false, required: false
  public get transitGatewayAttachmentId() {
    return this.getStringAttribute('transit_gateway_attachment_id');
  }

  // transit_gateway_id - computed: false, optional: false, required: true
  private _transitGatewayId: string;
  public get transitGatewayId() {
    return this.getStringAttribute('transit_gateway_id');
  }
  public set transitGatewayId(value: string) {
    this._transitGatewayId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get transitGatewayIdInput() {
    return this._transitGatewayId
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      peer_account_id: cdktf.stringToTerraform(this._peerAccountId),
      peer_region: cdktf.stringToTerraform(this._peerRegion),
      peer_transit_gateway_id: cdktf.stringToTerraform(this._peerTransitGatewayId),
      tags: cdktf.listMapper(ec2TransitGatewayPeeringAttachmentTagsToTerraform)(this._tags),
      transit_gateway_id: cdktf.stringToTerraform(this._transitGatewayId),
    };
  }
}
