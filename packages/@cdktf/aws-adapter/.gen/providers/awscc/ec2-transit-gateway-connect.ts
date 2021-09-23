// https://www.terraform.io/docs/providers/awscc/r/ec2_transit_gateway_connect.html
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface Ec2TransitGatewayConnectConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/ec2_transit_gateway_connect.html#options Ec2TransitGatewayConnect#options}
  */
  readonly options: Ec2TransitGatewayConnectOptions;
  /**
  * The tags for the attachment.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/ec2_transit_gateway_connect.html#tags Ec2TransitGatewayConnect#tags}
  */
  readonly tags?: Ec2TransitGatewayConnectTags[];
  /**
  * The ID of the attachment from which the Connect attachment was created.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/ec2_transit_gateway_connect.html#transport_transit_gateway_attachment_id Ec2TransitGatewayConnect#transport_transit_gateway_attachment_id}
  */
  readonly transportTransitGatewayAttachmentId: string;
}
export interface Ec2TransitGatewayConnectOptions {
  /**
  * The tunnel protocol.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/ec2_transit_gateway_connect.html#protocol Ec2TransitGatewayConnect#protocol}
  */
  readonly protocol?: string;
}

export function ec2TransitGatewayConnectOptionsToTerraform(struct?: Ec2TransitGatewayConnectOptions): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    protocol: cdktf.stringToTerraform(struct!.protocol),
  }
}

export interface Ec2TransitGatewayConnectTags {
  /**
  * The key of the tag. Constraints: Tag keys are case-sensitive and accept a maximum of 127 Unicode characters. May not begin with aws:.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/ec2_transit_gateway_connect.html#key Ec2TransitGatewayConnect#key}
  */
  readonly key?: string;
  /**
  * The value of the tag. Constraints: Tag values are case-sensitive and accept a maximum of 255 Unicode characters.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/ec2_transit_gateway_connect.html#value Ec2TransitGatewayConnect#value}
  */
  readonly value?: string;
}

export function ec2TransitGatewayConnectTagsToTerraform(struct?: Ec2TransitGatewayConnectTags): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    key: cdktf.stringToTerraform(struct!.key),
    value: cdktf.stringToTerraform(struct!.value),
  }
}


/**
* Represents a {@link https://www.terraform.io/docs/providers/awscc/r/ec2_transit_gateway_connect.html awscc_ec2_transit_gateway_connect}
*/
export class Ec2TransitGatewayConnect extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType: string = "awscc_ec2_transit_gateway_connect";

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://www.terraform.io/docs/providers/awscc/r/ec2_transit_gateway_connect.html awscc_ec2_transit_gateway_connect} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options Ec2TransitGatewayConnectConfig
  */
  public constructor(scope: Construct, id: string, config: Ec2TransitGatewayConnectConfig) {
    super(scope, id, {
      terraformResourceType: 'awscc_ec2_transit_gateway_connect',
      terraformGeneratorMetadata: {
        providerName: 'awscc'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle
    });
    this._options = config.options;
    this._tags = config.tags;
    this._transportTransitGatewayAttachmentId = config.transportTransitGatewayAttachmentId;
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

  // options - computed: false, optional: false, required: true
  private _options: Ec2TransitGatewayConnectOptions;
  public get options() {
    return this.interpolationForAttribute('options') as any;
  }
  public set options(value: Ec2TransitGatewayConnectOptions) {
    this._options = value;
  }
  // Temporarily expose input value. Use with caution.
  public get optionsInput() {
    return this._options
  }

  // state - computed: true, optional: false, required: false
  public get state() {
    return this.getStringAttribute('state');
  }

  // tags - computed: false, optional: true, required: false
  private _tags?: Ec2TransitGatewayConnectTags[];
  public get tags() {
    return this.interpolationForAttribute('tags') as any;
  }
  public set tags(value: Ec2TransitGatewayConnectTags[] ) {
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

  // transit_gateway_id - computed: true, optional: false, required: false
  public get transitGatewayId() {
    return this.getStringAttribute('transit_gateway_id');
  }

  // transport_transit_gateway_attachment_id - computed: false, optional: false, required: true
  private _transportTransitGatewayAttachmentId: string;
  public get transportTransitGatewayAttachmentId() {
    return this.getStringAttribute('transport_transit_gateway_attachment_id');
  }
  public set transportTransitGatewayAttachmentId(value: string) {
    this._transportTransitGatewayAttachmentId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get transportTransitGatewayAttachmentIdInput() {
    return this._transportTransitGatewayAttachmentId
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      options: ec2TransitGatewayConnectOptionsToTerraform(this._options),
      tags: cdktf.listMapper(ec2TransitGatewayConnectTagsToTerraform)(this._tags),
      transport_transit_gateway_attachment_id: cdktf.stringToTerraform(this._transportTransitGatewayAttachmentId),
    };
  }
}
